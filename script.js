const STORAGE_KEY = "chordLanternSongs";
const REMOVED_SAMPLE_SONG_IDS = new Set(["sample-moon-road"]);

const sampleSongs = [
  {
    id: "sample-koyoi-no-tsuki",
    title: "今宵の月のように",
    durationSeconds: 250,
    chart: `[G]くだらねえと [B]つぶやいて
[Em]醒めたつらして [G7]歩く
[C]いつの日[D]か [B]輝くだろ[Em]う
[A7]あふれる熱い [D]涙
[G]いつまでも [B]続くのか
[Em]吐きすてて寝 [G7]転んだ
[C]俺もま[D]た [B]輝くだろ[Em]う
[A]今宵の [D]月のように

[G] [F] [G] [F] [G] [F]
[G] [F]

[G]夕暮れ [Bm]過ぎて [G7]きらめく [E7]町の灯り [Am]は
[AmM7]悲しい [Am7]色に [D]染まって揺れた
[G]君がい[Bm]つかくれた [G7]思い出の [E7]かけら集め[Am]て
[AmM7]真夏の [Am7]夜空 [D]ひとり見上げた
[B]新[Em]しい [A]季節 [D]の始まり[B]は
[Em]夏[A]の風 [D]町に [D]吹くのさ
[G]今 [B]日もまた どこへ行く
[Em]愛を探しに [G7]行こう
[C]いつの日[D]か [B]輝くだろ[Em]う
[A]あふれる [D]熱い涙

[G] [F] [G] [F] [G] [F]
[G] [F]

[G]ポケット[Bm]に手を [G7]つっこんで [E7]歩く
[Am]いつか [AmM7]の電車に [Am7]乗って [D]いつかの町まで
[G]君のお[Bm]もかげ [G7]きらりと [E7]光る夜空[Am]に
[AmM7]涙も [Am7]出ない [D]声も聞こえない
[B]もう [Em]二度と [A]戻ら [D]ない日々[B]を
[Em]俺[A]たちは [D]走り [D]続ける
[G]明日もまた [B]どこへ行く
[Em]愛を探しに行 [G7]こう
[C]いつの日[D]か [B]輝くだろ[Em]う
[A]あふれる熱い [D]涙
[G]明日もまた [B]どこへ行く
[Em]愛を探しに行 [G7]こう
[C]見慣れて[D]る [B]町の空[Em]に
[A]輝[D]く [G]月一つ
[C]いつの日[D]か [B]輝くだろ[Em]う
[A]今宵の [D]月のように

[G] [F] [G] [F] [G] [F]
[G] [G]`
  }
];

const elements = {
  songSelect: document.querySelector("#songSelect"),
  songDuration: document.querySelector("#songDuration"),
  scrollStatus: document.querySelector("#scrollStatus"),
  toggleEditorButton: document.querySelector("#toggleEditorButton"),
  editorPanel: document.querySelector("#editorPanel"),
  songForm: document.querySelector("#songForm"),
  quickImportText: document.querySelector("#quickImportText"),
  importSongButton: document.querySelector("#importSongButton"),
  importStatus: document.querySelector("#importStatus"),
  songTitle: document.querySelector("#songTitle"),
  songMinutes: document.querySelector("#songMinutes"),
  songSeconds: document.querySelector("#songSeconds"),
  songChart: document.querySelector("#songChart"),
  newSongButton: document.querySelector("#newSongButton"),
  deleteSongButton: document.querySelector("#deleteSongButton"),
  currentTitle: document.querySelector("#currentTitle"),
  currentSubtitle: document.querySelector("#currentSubtitle"),
  chartLines: document.querySelector("#chartLines"),
  performanceModeButton: document.querySelector("#performanceModeButton"),
  playPauseButton: document.querySelector("#playPauseButton"),
  resetButton: document.querySelector("#resetButton"),
  speedRange: document.querySelector("#speedRange"),
  speedValue: document.querySelector("#speedValue")
};

let songs = loadSongs();
let currentSongId = songs[0].id;
let animationId = null;
let elapsedBeforePause = 0;
let lastTickTime = 0;
let speed = Number(elements.speedRange.value);
let audioFollowEnabled = false;
const microphone = {
  stream: null,
  audioContext: null,
  analyser: null,
  timeDomainData: null,
  animationId: null,
  isStarting: false,
  currentVolume: 0,
  soundActiveUntil: 0
};

function loadSongs() {
  const savedSongs = localStorage.getItem(STORAGE_KEY);

  if (!savedSongs) {
    return sampleSongs;
  }

  try {
    const parsedSongs = JSON.parse(savedSongs);

    if (!Array.isArray(parsedSongs) || parsedSongs.length === 0) {
      return sampleSongs;
    }

    const activeSavedSongs = parsedSongs.filter((song) => !REMOVED_SAMPLE_SONG_IDS.has(song.id));
    const sampleSongIds = new Set(sampleSongs.map((song) => song.id));
    const recoveredSongs = activeSavedSongs
      .filter((song) => {
        const originalSample = sampleSongs.find((sampleSong) => sampleSong.id === song.id);
        return originalSample && (
          song.title !== originalSample.title
          || song.chart !== originalSample.chart
          || song.durationSeconds !== originalSample.durationSeconds
        );
      })
      .map((song) => ({
        ...song,
        id: createRecoveredSongId(song)
      }));
    const userSongs = activeSavedSongs.filter((song) => !sampleSongIds.has(song.id));

    return [...userSongs, ...recoveredSongs, ...sampleSongs];
  } catch {
    return sampleSongs;
  }
}

function createRecoveredSongId(song) {
  let hash = 0;
  const source = `${song.title}-${song.chart}`;

  for (let index = 0; index < source.length; index += 1) {
    hash = (hash * 31 + source.charCodeAt(index)) >>> 0;
  }

  return `recovered-${hash}`;
}

function saveSongs() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
}

function getCurrentSong() {
  return songs.find((song) => song.id === currentSongId) || songs[0];
}

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function renderSongOptions() {
  elements.songSelect.innerHTML = "";

  songs.forEach((song) => {
    const option = document.createElement("option");
    option.value = song.id;
    option.textContent = song.title;
    elements.songSelect.append(option);
  });

  elements.songSelect.value = currentSongId;
}

function renderCurrentSong() {
  const song = getCurrentSong();
  currentSongId = song.id;

  elements.currentTitle.textContent = song.title;
  elements.currentSubtitle.textContent = `演奏時間 ${formatDuration(song.durationSeconds)}`;
  elements.songDuration.textContent = formatDuration(song.durationSeconds);
  elements.chartLines.innerHTML = "";

  buildChartLines(song.chart).forEach((lineElement) => {
    elements.chartLines.append(lineElement);
  });

  fillEditor(song);
  resetPlayer();
}

function buildChartLines(chartText) {
  return chartText.split("\n").map((line) => {
    const lineElement = document.createElement("div");
    lineElement.className = "chart-line";

    if (!line.trim()) {
      lineElement.classList.add("is-blank");
      return lineElement;
    }

    if (!line.includes("[") || !line.includes("]")) {
      const lyricLine = document.createElement("div");
      lyricLine.className = "lyric-line";
      lyricLine.textContent = line;
      lineElement.append(lyricLine);
      return lineElement;
    }

    const chordRow = document.createElement("div");
    chordRow.className = "chord-row";
    parseChordTokens(line).forEach((token) => {
      chordRow.append(createChordToken(token));
    });
    lineElement.append(chordRow);
    return lineElement;
  });
}

function parseChordTokens(line) {
  const tokens = [];
  const chordPattern = /\[([^\]]+)\]([^\[]*)/g;
  let lastIndex = 0;
  let match;

  while ((match = chordPattern.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ chord: "", lyric: line.slice(lastIndex, match.index) });
    }

    tokens.push({
      chord: match[1].trim(),
      lyric: match[2]
    });

    lastIndex = chordPattern.lastIndex;
  }

  if (lastIndex < line.length) {
    tokens.push({ chord: "", lyric: line.slice(lastIndex) });
  }

  return tokens;
}

function createChordToken(token) {
  const tokenElement = document.createElement("span");
  tokenElement.className = "chord-token";

  const chordName = document.createElement("span");
  chordName.className = "chord-name";
  chordName.textContent = token.chord || "\u00a0";

  const lyricText = document.createElement("span");
  lyricText.className = "token-lyric";
  lyricText.textContent = token.lyric || "\u00a0";

  tokenElement.append(chordName, lyricText);
  return tokenElement;
}

function fillEditor(song) {
  elements.songTitle.value = song.title;
  elements.songMinutes.value = Math.floor(song.durationSeconds / 60);
  elements.songSeconds.value = song.durationSeconds % 60;
  elements.songChart.value = song.chart;
  elements.quickImportText.value = "";
  elements.importStatus.textContent = "";
}

function importSongText() {
  const sourceText = elements.quickImportText.value.trim();

  if (!sourceText) {
    elements.importStatus.textContent = "貼り付ける内容がありません";
    return;
  }

  const normalizedText = sourceText.replace(/\r\n?/g, "\n");
  const titleMatch = normalizedText.match(/^(?:曲名|タイトル)\s*[:：]\s*(.+)$/m);
  const durationMatch = normalizedText.match(/^(?:演奏時間|時間)\s*[:：]\s*(\d{1,2})\s*[:：]\s*(\d{1,2})$/m);
  const chartHeadingMatch = normalizedText.match(/^(?:コード譜|譜面)\s*[:：]\s*$/m);
  let chart = normalizedText;

  if (chartHeadingMatch) {
    chart = normalizedText.slice(chartHeadingMatch.index + chartHeadingMatch[0].length).trim();
  } else {
    chart = normalizedText
      .split("\n")
      .filter((line) => !/^(?:曲名|タイトル|演奏時間|時間)\s*[:：]/.test(line))
      .join("\n")
      .trim();
  }

  if (titleMatch) {
    elements.songTitle.value = titleMatch[1].trim();
  } else {
    elements.songTitle.value = "";
  }

  if (durationMatch) {
    elements.songMinutes.value = Number(durationMatch[1]);
    elements.songSeconds.value = Number(durationMatch[2]);
  } else {
    elements.songMinutes.value = 3;
    elements.songSeconds.value = 0;
  }

  if (chart) {
    elements.songChart.value = chart;
  }

  // AIからの取り込みは、選択中の曲を上書きせず新しい曲として保存します。
  currentSongId = "";
  elements.songSelect.value = "";

  const importedItems = [
    titleMatch ? "曲名" : "",
    durationMatch ? "演奏時間" : "",
    chart ? "コード譜" : ""
  ].filter(Boolean);

  elements.importStatus.textContent = `${importedItems.join("・")}を新しい曲として取り込みました`;
}

function handleSongSave(event) {
  event.preventDefault();

  const title = elements.songTitle.value.trim();
  const minutes = Number(elements.songMinutes.value);
  const seconds = Number(elements.songSeconds.value);
  const chart = elements.songChart.value.trim();
  const durationSeconds = minutes * 60 + seconds;

  if (!title || !chart || durationSeconds <= 0) {
    return;
  }

  const existingSongIndex = songs.findIndex((song) => song.id === currentSongId);
  const nextSong = {
    id: existingSongIndex >= 0 ? currentSongId : createSongId(),
    title,
    durationSeconds,
    chart
  };

  if (existingSongIndex >= 0) {
    songs[existingSongIndex] = nextSong;
  } else {
    songs.push(nextSong);
  }

  currentSongId = nextSong.id;
  saveSongs();
  renderSongOptions();
  renderCurrentSong();
}

function createSongId() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `song-${Date.now()}-${Math.round(Math.random() * 10000)}`;
}

function prepareNewSong() {
  resetPlayer();
  currentSongId = "";
  elements.songSelect.value = "";
  elements.songTitle.value = "";
  elements.songMinutes.value = 3;
  elements.songSeconds.value = 0;
  elements.songChart.value = "";
  elements.quickImportText.value = "";
  elements.importStatus.textContent = "";
  elements.quickImportText.focus();
}

function handleSongDelete() {
  if (songs.length <= 1) {
    songs = sampleSongs;
  } else {
    songs = songs.filter((song) => song.id !== currentSongId);
  }

  currentSongId = songs[0].id;
  saveSongs();
  renderSongOptions();
  renderCurrentSong();
}

async function startMicrophone() {
  if (microphone.stream || microphone.isStarting) {
    return Boolean(microphone.stream);
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    elements.scrollStatus.textContent = "マイク非対応";
    return false;
  }

  microphone.isStarting = true;
  elements.performanceModeButton.disabled = true;
  elements.performanceModeButton.textContent = "マイク確認中";

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        autoGainControl: false,
        echoCancellation: false,
        noiseSuppression: false
      },
      video: false
    });
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContextClass();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 2048;
    analyser.smoothingTimeConstant = 0.72;
    source.connect(analyser);

    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    microphone.stream = stream;
    microphone.audioContext = audioContext;
    microphone.analyser = analyser;
    microphone.timeDomainData = new Float32Array(analyser.fftSize);

    updateVolumeMeter();
    return true;
  } catch (error) {
    elements.scrollStatus.textContent = getMicrophoneErrorMessage(error);
    return false;
  } finally {
    microphone.isStarting = false;
    elements.performanceModeButton.disabled = false;
  }
}

function stopMicrophone() {
  if (microphone.animationId) {
    cancelAnimationFrame(microphone.animationId);
  }

  microphone.stream?.getTracks().forEach((track) => track.stop());
  microphone.audioContext?.close();

  microphone.stream = null;
  microphone.audioContext = null;
  microphone.analyser = null;
  microphone.timeDomainData = null;
  microphone.animationId = null;
  microphone.currentVolume = 0;
  microphone.soundActiveUntil = 0;
}

function updateVolumeMeter() {
  if (!microphone.analyser || !microphone.timeDomainData) {
    return;
  }

  microphone.analyser.getFloatTimeDomainData(microphone.timeDomainData);

  let squareTotal = 0;
  microphone.timeDomainData.forEach((sample) => {
    squareTotal += sample * sample;
  });

  const rootMeanSquare = Math.sqrt(squareTotal / microphone.timeDomainData.length);
  const volume = Math.min(100, Math.round(rootMeanSquare * 420));

  microphone.currentVolume = volume;

  if (volume >= 4) {
    // コードチェンジなどの短い無音では、スクロールを止めないよう少し待ちます。
    microphone.soundActiveUntil = performance.now() + 1200;
  }

  microphone.animationId = requestAnimationFrame(updateVolumeMeter);
}

function getMicrophoneErrorMessage(error) {
  if (error?.name === "NotAllowedError") {
    return "マイクの利用が許可されていません";
  }

  if (error?.name === "NotFoundError") {
    return "利用できるマイクが見つかりません";
  }

  return "マイクを開始できませんでした";
}

async function enterPerformanceMode() {
  const microphoneStarted = await startMicrophone();

  audioFollowEnabled = microphoneStarted;
  document.body.classList.add("is-performance-mode");
  elements.performanceModeButton.textContent = "演奏モード終了";
  resetPlayer();

  if (!microphoneStarted) {
    elements.currentSubtitle.textContent = "音追従にはHTTPSで開く必要があります";
    elements.playPauseButton.textContent = "音追従できません";
    elements.playPauseButton.disabled = true;
    return;
  }

  elements.playPauseButton.disabled = false;
  play();
}

function exitPerformanceMode() {
  audioFollowEnabled = false;
  resetPlayer();
  stopMicrophone();
  document.body.classList.remove("is-performance-mode");
  elements.performanceModeButton.textContent = "演奏モード";
  elements.playPauseButton.disabled = false;
  elements.playPauseButton.textContent = "一時停止";
  elements.currentSubtitle.textContent = `演奏時間 ${formatDuration(getCurrentSong().durationSeconds)}`;
}

function play() {
  if (animationId) {
    return;
  }

  const song = getCurrentSong();
  const durationMs = song.durationSeconds * 1000;

  if (elapsedBeforePause >= durationMs) {
    elapsedBeforePause = 0;
    window.scrollTo({ top: 0 });
  }

  lastTickTime = performance.now();
  document.body.classList.add("is-playing");
  elements.playPauseButton.textContent = "一時停止";
  updateScrollStatus();
  tick();
}

function pause() {
  if (!animationId) {
    return;
  }

  cancelAnimationFrame(animationId);
  animationId = null;
  lastTickTime = 0;
  document.body.classList.remove("is-playing");
  elements.playPauseButton.textContent = "再生";
  elements.scrollStatus.textContent = "一時停止";
  updatePerformanceStatus("一時停止");
}

function resetPlayer() {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }

  animationId = null;
  elapsedBeforePause = 0;
  lastTickTime = 0;
  document.body.classList.remove("is-playing");
  elements.playPauseButton.textContent = "再生";
  elements.scrollStatus.textContent = "停止中";
  updatePerformanceStatus("停止中");
  window.scrollTo({ top: 0 });
}

function tick() {
  const song = getCurrentSong();
  const durationMs = song.durationSeconds * 1000;
  const now = performance.now();
  const elapsedSinceLastTick = Math.max(0, now - lastTickTime);
  const canFollowSound = microphone.stream && now <= microphone.soundActiveUntil;
  const shouldAdvance = !audioFollowEnabled || canFollowSound;

  lastTickTime = now;

  if (shouldAdvance) {
    elapsedBeforePause += elapsedSinceLastTick * speed;
  }

  updateScrollStatus();

  const progress = Math.min(elapsedBeforePause / durationMs, 1);
  const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);

  window.scrollTo({ top: maxScroll * progress });

  if (progress >= 1) {
    elapsedBeforePause = durationMs;
    animationId = null;
    document.body.classList.remove("is-playing");
    elements.playPauseButton.textContent = "再生";
    elements.scrollStatus.textContent = "完了";
    updatePerformanceStatus("完了");
    return;
  }

  animationId = requestAnimationFrame(tick);
}

function updateScrollStatus() {
  if (!animationId && !document.body.classList.contains("is-playing")) {
    return;
  }

  if (!audioFollowEnabled) {
    elements.scrollStatus.textContent = "再生中";
    updatePerformanceStatus("再生中");
    return;
  }

  if (!microphone.stream) {
    elements.scrollStatus.textContent = "マイク待ち";
    updatePerformanceStatus("マイク待ち");
    return;
  }

  const status = performance.now() <= microphone.soundActiveUntil
    ? "音に追従中"
    : "音待ち";
  elements.scrollStatus.textContent = status;
  updatePerformanceStatus(status);
}

function updatePerformanceStatus(status) {
  if (document.body.classList.contains("is-performance-mode")) {
    elements.currentSubtitle.textContent = `${status} ・ 音に合わせて自動スクロール`;
  }
}

elements.songSelect.addEventListener("change", (event) => {
  currentSongId = event.target.value;
  renderCurrentSong();
});

elements.toggleEditorButton.addEventListener("click", () => {
  elements.editorPanel.classList.toggle("is-hidden");
  elements.toggleEditorButton.textContent = elements.editorPanel.classList.contains("is-hidden")
    ? "曲を登録"
    : "閉じる";
});

elements.songForm.addEventListener("submit", handleSongSave);
elements.importSongButton.addEventListener("click", importSongText);
elements.newSongButton.addEventListener("click", prepareNewSong);
elements.deleteSongButton.addEventListener("click", handleSongDelete);

elements.performanceModeButton.addEventListener("click", () => {
  if (document.body.classList.contains("is-performance-mode")) {
    exitPerformanceMode();
  } else {
    enterPerformanceMode();
  }
});

elements.playPauseButton.addEventListener("click", () => {
  if (animationId) {
    pause();
  } else {
    play();
  }
});

elements.resetButton.addEventListener("click", resetPlayer);

elements.speedRange.addEventListener("input", (event) => {
  speed = Number(event.target.value);
  elements.speedValue.textContent = `${speed.toFixed(2)}x`;
});

window.addEventListener("pagehide", stopMicrophone);

renderSongOptions();
renderCurrentSong();
