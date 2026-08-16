const STORAGE_KEY = "chordLanternSongs";
const CLOUD_ENDPOINT_KEY = "chordLanternCloudEndpoint";
const DELETED_SONG_IDS_KEY = "chordLanternDeletedSongIds";
const BACKUP_VERSION = 1;
const REMOVED_SAMPLE_SONG_IDS = new Set(["sample-moon-road"]);

const sampleSongs = [
  {
    id: "sample-koyoi-no-tsuki",
    title: "今宵の月のように",
    artist: "エレファントカシマシ",
    capo: "0",
    durationSeconds: 253,
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
  },
  {
    id: "sample-marigold",
    title: "マリーゴールド",
    artist: "あいみょん",
    capo: "2",
    durationSeconds: 307,
    chart: `[C]

[C] [G] [Am] [Em]
[F] [C] [F] [G]

[C]風の強さが [G]ちょっと
[Am]心を揺さぶりすぎ[G]て
[F]真面目に [C]見つめた

[F]君が [G]恋しい

[C]でんぐり返し [G]の日々
[Am]可哀想なふりをし [G]て
[F]だらけて [C]みたけど

[F]希望の [G]光は
[Am]目の前でずっと [Em]輝いている

[F]幸せ [G]だ

[C]麦わらの帽子の [G]君が
[Am]揺れたマリーゴールドに [G]似てる
[F]あれは空がまだ青[C]い [Am]夏のこと
[F]懐かしいと笑えた [G]あの日の恋

[C]「もう離れな[G]いで」と
[Am]泣きそうな目で見つめる [G]君を
[F]雲のような優しさ [C]でそっと [Am]ぎゅっと
[F]抱きしめて [G]抱きしめて離さない

[C] [G]

[C]本当の気持ち [G]全部
[Am]吐き出せるほど強くは [G]ない

[F]でも [C]不思議なくらいに
[F]絶望は見[G]えない

[Am]目の奥にずっと [Em]写るシルエット

[F]大好き [G]さ

[C]柔らかな肌を寄[G]せあい
[Am]少し冷たい空気を [G]2人
[F]かみしめて歩く今[C]日という日に

[Am]何と名前をつけようか [F]なんて話して [G]
[C]ああアイラブ [G]ユーの言葉 [Am]じゃ
[G]足りないからと キスして

[F]雲がまだ2人の [C]影を残 [Am]すから
[F]いつまでも [G]いつまでもこのまま

[Am]遥か遠 [G]い場所にいても [C]
[G]繋がっていたいなあ

[Am]2人の想い [G]が [C]
[G]同じでありますように

[C] [F] [G] [Am]

[F] [G]

[C]離さな [F]い [G] [Am]

[F]いつまでも [G]いつまでも離さな [C]い [G]

[C] [G] [Am] [Em]

[F] [C] [F] [G]

[C]`
  },
  {
    id: "sample-sakura",
    title: "桜",
    artist: "コブクロ",
    capo: "2",
    durationSeconds: 397,
    chart: `[A] [E] [F#m7] [C#m] [D] [E]
[A] [E] [F#m7] [C#m] [D] [E] [Esus4]
[E] [F#m7] [E]

[A]名もない花には [F#m7]名前をつけましょ[C#m]う
[D]この世に一つし[E]かない
[A]冬の寒さに打[F#m7]ちひしがれないよう[C#m]に
[D]誰かの声[E]で
[D]また起きあが[E]れるように[A][E]

[A]土の中で眠[F#m7]る命のかたま[C#m]り
[D]アスファルト押し[E]のけて
[A]会うたびにいつも
[Bm]会えない [C#]時のさ[F#m]みしさ
[D]わけあう2[E]人 [D]太陽と[E]月のよう
[A]で・・・
[F]実のならない花[C]も
つぼみ[F]のま[G]ま散[E]る花[Am]も
[F]あなたと誰かの[Em]これから[Am]を
[F]春の風をあび[E]て見[D]て[E]る

[A]桜の花びら[E]散るたびに
[F#m7]届かぬ思いが[C#m7]また一つ
[D]涙と笑顔に[A]消されて[F#m7]く
[Bm7]そしてま[B7]た大人[E]になった
[A]追いかけるだけの[E]悲しみは
[F#m]強く清らかな[C#m]悲しみは
[D]いつまでも変わる[A]事のな[F#m7]い
[D]無くさないで[Dm]君の中に
[E]咲く [A]Love・・・ [E] [F#m] [C#m]
[D] [E]

[A] [E] [F#m] [C#m] [D] [E] [F#m7]
[E]

[A]街の中見かけ[F#m7]た君は淋しげ[C#m]に
[D]人ごみにまぎ[E]れてた
[A]あの頃の澄んだ[Bm]瞳の[C#]奥の[F#m]輝き
[D]時の早さ[E]に [D]汚されてし[E]まわぬよう[A]に
[F]何も話さない[C]で
[F]言葉[G]にな[F]らな[E]いは[Am]ずさ
[F]流した涙は[Em]雨とな[Am]り
[F]僕の心の[E]傷い[D]や[E]す

[A]人はみな心[E]の岸辺に
[F#m7]手放したくない[C#m7]花がある
[D]それはたくましい[A]花じゃな[F#m]く
[Bm7]はかなく[B7]ゆれる[E]一輪花

[A]花びらの数と[E]同じだけ
[F#m]生きていく強さ[C#]を感じる
[D]嵐ふく風に[A]打たれて[F#m]も
[Bm]やまない[B7]雨はな[E]いはずと

[A]桜の花びら[E]散るたびに
[F#m]届かぬ思いが[C#m]また一つ
[D]涙と笑顔に[A]消されて[F#m]く
[Bm]そしてま[B7]た大人[E]になった

[A]追いかけるだけの[E]悲しみは
[F#m]強く清らかな[C#m]悲しみは
[D]いつまでも変わる[A]事のな[F#m]い
[D]君の中に[Dm]僕の中に
[E]咲く [A]Love・・・ [E] [F#m7] [C#m]
[D] [E]

[A] [E] [F#m7] [C#m] [D] [E] [F#m7]
[E]`
  },
  {
    id: "sample-subete-ga-boku-no-chikara",
    title: "全てが僕の力になる！",
    artist: "くず",
    capo: "",
    durationSeconds: 272,
    chart: `[N.C.]君の声が力になる！
[N.C.]君の笑顔が力になる！

[C] [G] [Am] [F] [G] [C] [G]
[Am] [F] [G]

[C]今までの僕[G]はいつも
[Am]ひとりで生きて[F]ると[G]思ってた
[C]大きな声で叫[G]んでみても
[F]誰も振り向いてく[Dm]れないと[G]思って[C]たんだ [Csus4] [C]

[Am]許せない事があっ[Em]ても
[F]テレビのニュースに怒っ[C]ても
[Am]やりきれない心のモヤ[Em]モヤも
[F]全部ひっ[Em]くるめて[F]力にす[G]ればいい

[C]君の[G]声が聞[Am]きたいから
[F]君の[Dm]笑顔が[G]見たいか[C]ら
何も[G]かもを抱[Am]きしめたら
[F]それが[Dm]僕の[G]力にな[C]る！

[C] [G] [Am] [F] [G] [C]

[C]今までの僕[G]はいつも
[Am]勇気を出すこ[F]とを[G]恐れてた
[C]何が目の前[G]に起きても
[F]誰かがやって[Dm]くれると[G]思って[C]たんだ [Csus4] [C]

[Am]降り注ぐしがらみに怯[Em]えても
[F]モラルの無さに傷つ[C]いても
[Am]いくあてない気持ちのイラ[Em]イラも
[F]全部ひっ[Em]くるめて[F]力にす[G]ればいい

[C]君の[G]声が聞[Am]きたいから
[F]君の[Dm]笑顔が[G]見たいか[C]ら
何も[G]かもを抱[Am]きしめたら
[F]それが[Dm]僕の[G]力にな[C]る！

[F] [Em] [Dm] [C] [F] [Em] [F] [G]

[Am]立ち上がれないほどのダメージを受[Em]けても
[F]自由な羽根を誰かに押さえつけ[C]られても
[Am]何をやってもダメな今日があっ[Em]ても
[F]全部ひっ[Em]くるめて[F]力にす[G]ればいい

[Dm]そして見た[Em]こと無い[F]力にな[G]ればいい

[C]君の[G]声が聞[Am]きたいから
[F]君の[Dm]笑顔が[G]見たいか[C]ら
何も[G]かもを抱[Am]きしめたら
[F]それが[Dm]僕の[G]力にな[C]る！

[G]君の声が聞[Am]きたいから
[F]君の[Dm]笑顔が[G]見たいか[C]ら
何も[G]かもを抱[Am]きしめたら
[F]それが[Dm]僕の[G]力にな[C]る！

[F]全て[Dm]が僕の[G]力にな[C]る！

[C] [G] [Am] [F] [G] [C] [G]
[Am] [F] [G] [C]`
  },
  {
    id: "sample-moonlight-kuzu",
    title: "ムーンライト",
    artist: "くず",
    capo: "3",
    durationSeconds: 203,
    chart: `[C]空に(空に)今夜
[Am]も(今夜も) [G]星が出[Gsus4]て[G]

[C]僕の(僕の)夢
[Am]を(My dream)叶[G]えてくれる

[C]ムーン [Am]ライト [F7]ムーン [G]ライト
[F]今夜[G]も いい夢見る[C]よ [Am] [G]

[C]月の(月の)明かり
[Am]が(明かりが)射[G]して来[Gsus4]て[G]

[C]僕に(僕に)希望
[Am]を(My 希望)与[G]えてくれる

[C]ムーン [Am]ライト [F]ムーン [G]ライト
[F]今夜[G]も いい夢見る[C]よ

[F7]いつかここから出られるな[C]ら [Csus4]
[C]Woh [F7]月の光を思い切り浴び[G]てもう一度あの丘に

[C]ムーン [Am]ライト [F]ムーン [G]ライト
[F]今夜[G]も いい夢見る[C]よ [G]

[C]ムーン [Am]ライト [F]ムーン [G]ライト

[C]月[Em]に月にい[Am]る うさ[Em]ぎ[F7]達
[G]Yeah…モチを

[C]ペッタンペッタン [Em]
[Am]ペッタンペッタン [Em]
[F7]ペッタンペッタン [G]ペッタンペッタン

[C]かぐ[Em]や[Am]姫が竹[Em]の[F7]中から
[G]Woh 素手で

[C]パッカンパッカン [Em]
[Am]パッカンパッカン [Em]
[F7]パッカンパッカン
[G]ニッコニッコ

[C] [Em] [Am] [Em] [F7] [G] [C]

[Em]うさ[Am]ぎ のついたモチ[Em]が
[F7]食べたく[G]て[C]

[Em]きな[Am]こ モチといそ[Em]べ[F7]焼きをお[G]願い

[C]あんこもね

[Em] [Am] [Em] [F7] [G] [C] [F7]
[C]

(Thank you)
(Good night)`
  },
  {
    id: "sample-denen",
    title: "田園",
    artist: "玉置浩二",
    capo: "",
    durationSeconds: 240,
    chart: `[G] [Gadd9] [C] [G] [Gadd9] [C] [D]
[Em] [C] [G] [D] [Em] [C] [D7]

[Em]石コロけとばし [C]夕陽に泣いた [G]僕[D]
[Em]夜空見上げて 星[C]に祈ってた [G]君[D]
[Em]アブラにまみれて [C]黙り込んだあいつ[G][D]

[Em]仕事ほっぽらかして [C]ほおづえつくあの[G]娘[D]
[Em]何もできないで [C]誰も救えないで
[Am]悲しみひとつも [Em]いやせないで
[Em]カッコつけてないで
[C]やれるもんだけで
[D]毎日 何かを 頑張っていりゃ

[G]生きていくんだ [C]それでい[B]いんだ
[Am]ビルに飲み込まれ 街にはじかれて
[Em]それでも その手を 離さないで
[G]僕がいるんだ [C]みんない[B]るんだ
[Am]愛はここにある [D]君はどこへもいけな[G]い[D]

[Em] [C] [G] [D] [Em] [C] [D7]

[Em]ひだまりのなか がむ[C]しゃらに走る[G]僕[D]
[Em]そろばんはじいて [C]頭かかえてた[G]君[D]
[Em]からのミルクビンに タ[C]ンポポさすあいつ[G][D]

[Em]道をはずれちゃって とほ[C]うに暮れるあの[G]娘[D]
[Em]何もうばわないで [C]誰も傷つけないで
[Am]幸せひとつも [Em]守れないで
[Em]そんなに急がないで
[C]そんなにあせらないで
[D]明日も何かを頑張っていりゃ

[G]生きていくんだ [C]それでい[B]いんだ
[Am]波に巻き込まれ 風に飛ばされて
[Em]それでも その目を つぶらないで
[G]僕がいるんだ [C]みんない[B]るんだ
[Am]そして君がいる [D]他に何ができる

[G]生きていくんだ [C]それでい[B]いんだ
[Am]ビルに飲み込まれ 街にはじかれて
[Em]それでも その手を 離さないで
[G]僕がいるんだ [C]君もい[B]るんだ
[Am]みんなここにいる [D]愛はどこへもいかな[G]い

[G] [Gadd9] [C] [G] [Gadd9] [C]
[Am] [Em] [C] [B7] [Am] [D] [G]`
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
  backupText: document.querySelector("#backupText"),
  exportSongsButton: document.querySelector("#exportSongsButton"),
  importBackupButton: document.querySelector("#importBackupButton"),
  backupStatus: document.querySelector("#backupStatus"),
  cloudEndpoint: document.querySelector("#cloudEndpoint"),
  loadCloudSongsButton: document.querySelector("#loadCloudSongsButton"),
  cloudStatus: document.querySelector("#cloudStatus"),
  songTitle: document.querySelector("#songTitle"),
  songArtist: document.querySelector("#songArtist"),
  songCapo: document.querySelector("#songCapo"),
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
const SOUND_HOLD_MS = 4000;
const MIN_SOUND_THRESHOLD = 1.2;
const microphone = {
  stream: null,
  audioContext: null,
  analyser: null,
  timeDomainData: null,
  animationId: null,
  isStarting: false,
  currentVolume: 0,
  noiseFloor: 0.5,
  soundThreshold: MIN_SOUND_THRESHOLD,
  soundActiveUntil: 0
};

function loadSongs() {
  const deletedSongIds = loadDeletedSongIds();
  const savedSongs = localStorage.getItem(STORAGE_KEY);

  if (!savedSongs) {
    const visibleSampleSongs = sampleSongs.filter((song) => !deletedSongIds.has(song.id));
    return visibleSampleSongs.length ? visibleSampleSongs : sampleSongs;
  }

  try {
    const parsedSongs = JSON.parse(savedSongs);

    if (!Array.isArray(parsedSongs) || parsedSongs.length === 0) {
      return sampleSongs;
    }

    const activeSavedSongs = parsedSongs.filter((song) => {
      return !REMOVED_SAMPLE_SONG_IDS.has(song.id) && !deletedSongIds.has(song.id);
    });
    const orderedSongs = [];
    const includedSampleIds = new Set();

    activeSavedSongs.forEach((song) => {
      const originalSample = sampleSongs.find((sampleSong) => sampleSong.id === song.id);

      if (!originalSample) {
        orderedSongs.push(song);
        return;
      }

      const isPreviousBuiltInVersion = song.id === "sample-koyoi-no-tsuki"
        && song.title === originalSample.title
        && song.chart === originalSample.chart
        && song.durationSeconds === 250;
      const isPreviousBuiltInMetadataVersion = song.title === originalSample.title
        && song.chart === originalSample.chart
        && song.durationSeconds === originalSample.durationSeconds
        && (!("artist" in song) || (song.artist || "") === (originalSample.artist || ""))
        && (song.capo || "") === "";
      const isCurrentBuiltInVersion = song.title === originalSample.title
        && song.chart === originalSample.chart
        && song.durationSeconds === originalSample.durationSeconds
        && (
          (!("artist" in song) && !("capo" in song))
          || (
            (song.artist || "") === (originalSample.artist || "")
            && (song.capo || "") === (originalSample.capo || "")
          )
        );

      if (isPreviousBuiltInVersion || isPreviousBuiltInMetadataVersion || isCurrentBuiltInVersion) {
        orderedSongs.push(originalSample);
        includedSampleIds.add(originalSample.id);
        return;
      }

      orderedSongs.push({
        ...song,
        id: createRecoveredSongId(song)
      });
    });

    sampleSongs.forEach((sampleSong) => {
      if (deletedSongIds.has(sampleSong.id)) {
        return;
      }

      const hasEquivalentSong = orderedSongs.some((song) => {
        return song.title === sampleSong.title && song.chart === sampleSong.chart;
      });

      if (!includedSampleIds.has(sampleSong.id) && !hasEquivalentSong) {
        orderedSongs.push(sampleSong);
        includedSampleIds.add(sampleSong.id);
      }
    });

    return orderedSongs.length ? orderedSongs : sampleSongs;
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

function loadDeletedSongIds() {
  const savedIds = localStorage.getItem(DELETED_SONG_IDS_KEY);

  if (!savedIds) {
    return new Set();
  }

  try {
    const parsedIds = JSON.parse(savedIds);
    return new Set(Array.isArray(parsedIds) ? parsedIds.filter(Boolean) : []);
  } catch {
    return new Set();
  }
}

function saveDeletedSongIds(deletedSongIds) {
  localStorage.setItem(DELETED_SONG_IDS_KEY, JSON.stringify([...deletedSongIds]));
}

function rememberDeletedSongId(songId) {
  if (!songId) {
    return;
  }

  const deletedSongIds = loadDeletedSongIds();
  deletedSongIds.add(songId);
  saveDeletedSongIds(deletedSongIds);
}

function forgetDeletedSongId(songId) {
  if (!songId) {
    return;
  }

  const deletedSongIds = loadDeletedSongIds();

  if (deletedSongIds.delete(songId)) {
    saveDeletedSongIds(deletedSongIds);
  }
}

function loadCloudEndpoint() {
  return localStorage.getItem(CLOUD_ENDPOINT_KEY) || "";
}

function saveCloudEndpoint(endpoint) {
  localStorage.setItem(CLOUD_ENDPOINT_KEY, endpoint);
}

function buildBackupData() {
  return {
    app: "Chord Lantern",
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    songs: songs.map((song) => ({
      id: song.id,
      title: song.title,
      artist: song.artist || "",
      capo: song.capo || "",
      durationSeconds: song.durationSeconds,
      chart: song.chart
    }))
  };
}

function exportSongsBackup() {
  const backupData = buildBackupData();
  elements.backupText.value = JSON.stringify(backupData, null, 2);
  elements.backupStatus.textContent = `${backupData.songs.length}曲分の保存データを書き出しました`;
  elements.backupText.focus();
  elements.backupText.select();
}

function importSongsBackup() {
  const backupText = elements.backupText.value.trim();

  if (!backupText) {
    elements.backupStatus.textContent = "読み込む保存データがありません";
    return;
  }

  try {
    const parsedData = JSON.parse(backupText);
    const importedSongs = extractBackupSongs(parsedData);

    if (importedSongs.length === 0) {
      elements.backupStatus.textContent = "読み込める曲データが見つかりません";
      return;
    }

    const mergeResult = mergeImportedSongs(importedSongs);
    saveSongs();
    renderSongOptions();
    renderCurrentSong();
    elements.backupStatus.textContent = `${mergeResult.added}曲追加、${mergeResult.updated}曲更新しました`;
  } catch {
    elements.backupStatus.textContent = "保存データの形式を確認してください";
  }
}

function extractBackupSongs(parsedData) {
  const rawSongs = Array.isArray(parsedData) ? parsedData : parsedData?.songs;

  if (!Array.isArray(rawSongs)) {
    return [];
  }

  return rawSongs
    .map(normalizeBackupSong)
    .filter(Boolean);
}

function normalizeBackupSong(song) {
  const title = String(song?.title || "").trim();
  const chart = String(song?.chart || "").trim();
  const durationSeconds = Number(song?.durationSeconds);

  if (!title || !chart || !Number.isFinite(durationSeconds) || durationSeconds <= 0) {
    return null;
  }

  return {
    id: typeof song.id === "string" && song.id.trim() ? song.id.trim() : createSongId(),
    title,
    artist: String(song.artist || "").trim(),
    capo: String(song.capo || "").trim(),
    durationSeconds: Math.round(durationSeconds),
    chart
  };
}

function mergeImportedSongs(importedSongs) {
  let added = 0;
  let updated = 0;

  importedSongs.forEach((importedSong) => {
    const existingIndex = songs.findIndex((song) => {
      return song.id === importedSong.id
        || (song.title === importedSong.title && song.chart === importedSong.chart);
    });

    if (existingIndex >= 0) {
      forgetDeletedSongId(songs[existingIndex].id);
      songs[existingIndex] = {
        ...importedSong,
        id: songs[existingIndex].id
      };
      currentSongId = songs[existingIndex].id;
      updated += 1;
      return;
    }

    const nextSongId = createUniqueSongId(importedSong.id);
    forgetDeletedSongId(nextSongId);
    songs.push({
      ...importedSong,
      id: nextSongId
    });
    currentSongId = songs[songs.length - 1].id;
    added += 1;
  });

  return { added, updated };
}

function createUniqueSongId(preferredId) {
  const candidateId = preferredId || createSongId();

  if (!songs.some((song) => song.id === candidateId)) {
    return candidateId;
  }

  return createSongId();
}

async function loadSongsFromCloud() {
  const endpoint = elements.cloudEndpoint.value.trim();

  if (!endpoint) {
    elements.cloudStatus.textContent = "Apps Script URLを入力してください";
    return;
  }

  elements.loadCloudSongsButton.disabled = true;
  elements.cloudStatus.textContent = "スプレッドシートから読み込み中";

  try {
    saveCloudEndpoint(endpoint);
    const cloudData = await fetchCloudSongs(endpoint);
    const deletedResult = applyCloudDeletedSongIds(cloudData);
    const importedSongs = extractBackupSongs(cloudData);

    if (importedSongs.length === 0) {
      elements.cloudStatus.textContent = deletedResult.removed > 0
        ? `${deletedResult.removed}曲を削除同期しました`
        : "読み込める曲が見つかりません";
      saveSongs();
      renderSongOptions();
      renderCurrentSong();
      return;
    }

    const mergeResult = mergeImportedSongs(importedSongs);
    saveSongs();
    renderSongOptions();
    renderCurrentSong();
    const deleteMessage = deletedResult.removed > 0
      ? `、${deletedResult.removed}曲削除同期`
      : "";
    elements.cloudStatus.textContent = `${mergeResult.added}曲追加、${mergeResult.updated}曲更新${deleteMessage}しました`;
  } catch {
    elements.cloudStatus.textContent = "読み込みできませんでした。URLと公開設定を確認してください";
  } finally {
    elements.loadCloudSongsButton.disabled = false;
  }
}

function applyCloudDeletedSongIds(cloudData) {
  const deletedSongIds = Array.isArray(cloudData?.deletedSongIds)
    ? cloudData.deletedSongIds.map((songId) => String(songId || "").trim()).filter(Boolean)
    : [];

  if (deletedSongIds.length === 0) {
    return { removed: 0 };
  }

  const deletedSongIdSet = new Set(deletedSongIds);
  const beforeCount = songs.length;
  songs = songs.filter((song) => !deletedSongIdSet.has(song.id));
  deletedSongIds.forEach(rememberDeletedSongId);

  return { removed: beforeCount - songs.length };
}

async function fetchCloudSongs(endpoint) {
  const endpointUrl = new URL(endpoint, window.location.href);
  endpointUrl.searchParams.set("mode", "songs");
  endpointUrl.searchParams.set("cache", String(Date.now()));

  try {
    const response = await fetch(endpointUrl.toString(), { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Cloud response was not ok");
    }

    return response.json();
  } catch {
    return fetchCloudSongsJsonp(endpointUrl);
  }
}

function fetchCloudSongsJsonp(endpointUrl) {
  return new Promise((resolve, reject) => {
    const callbackName = `chordLanternCloud${Date.now()}${Math.round(Math.random() * 10000)}`;
    const script = document.createElement("script");
    const timerId = window.setTimeout(() => {
      cleanup();
      reject(new Error("Cloud request timed out"));
    }, 15000);

    function cleanup() {
      window.clearTimeout(timerId);
      script.remove();
      delete window[callbackName];
    }

    window[callbackName] = (data) => {
      cleanup();
      resolve(data);
    };

    endpointUrl.searchParams.set("callback", callbackName);
    script.src = endpointUrl.toString();
    script.onerror = () => {
      cleanup();
      reject(new Error("Cloud request failed"));
    };
    document.body.append(script);
  });
}

async function saveSongToCloud(song) {
  const endpoint = elements.cloudEndpoint.value.trim();

  if (!endpoint) {
    elements.cloudStatus.textContent = "ブラウザに保存しました";
    return;
  }

  elements.cloudStatus.textContent = "スプレッドシートへ保存中";

  try {
    const endpointUrl = new URL(endpoint, window.location.href);
    await fetch(endpointUrl.toString(), {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({
        action: "saveSong",
        song: {
          id: song.id,
          title: song.title,
          artist: song.artist || "",
          capo: song.capo || "",
          durationSeconds: song.durationSeconds,
          chart: song.chart
        }
      })
    });
    saveCloudEndpoint(endpoint);
    elements.cloudStatus.textContent = "スプレッドシートへ保存しました";
  } catch {
    elements.cloudStatus.textContent = "ブラウザには保存済みです。シート保存はURLを確認してください";
  }
}

async function deleteSongFromCloud(song) {
  const endpoint = elements.cloudEndpoint.value.trim();

  if (!endpoint) {
    elements.cloudStatus.textContent = "ブラウザから削除しました";
    return;
  }

  elements.cloudStatus.textContent = "スプレッドシートへ削除を同期中";

  try {
    const endpointUrl = new URL(endpoint, window.location.href);
    await fetch(endpointUrl.toString(), {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({
        action: "deleteSong",
        song: {
          id: song.id,
          title: song.title
        }
      })
    });
    saveCloudEndpoint(endpoint);
    elements.cloudStatus.textContent = "スプレッドシートへ削除を同期しました";
  } catch {
    elements.cloudStatus.textContent = "ブラウザからは削除済みです。シート削除はURLを確認してください";
  }
}

function getCurrentSong() {
  return songs.find((song) => song.id === currentSongId) || songs[0];
}

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function formatCapo(capo) {
  const trimmedCapo = String(capo || "").trim();

  if (!trimmedCapo || trimmedCapo === "なし") {
    return "";
  }

  if (/^\d+$/.test(trimmedCapo)) {
    return `カポ${trimmedCapo}`;
  }

  return `カポ ${trimmedCapo}`;
}

function getSongMetaParts(song) {
  return [
    song.artist ? song.artist : "",
    formatCapo(song.capo),
    `演奏時間 ${formatDuration(song.durationSeconds)}`
  ].filter(Boolean);
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
  elements.currentSubtitle.textContent = getSongMetaParts(song).join(" ・ ");
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
  elements.songArtist.value = song.artist || "";
  elements.songCapo.value = song.capo || "";
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
  const artistMatch = normalizedText.match(/^(?:アーティスト|歌手|artist)\s*[:：]\s*(.+)$/im);
  const capoMatch = normalizedText.match(/^(?:カポ|capo)\s*[:：]\s*(.+)$/im);
  const durationLineMatch = normalizedText.match(/^(?:演奏時間|時間)\s*[:：]\s*(.+)$/m);
  const chartHeadingMatch = normalizedText.match(/^(?:コード譜|譜面)\s*[:：]\s*$/m);
  const importedDuration = durationLineMatch ? parseImportedDuration(durationLineMatch[1]) : null;
  let chart = normalizedText;

  if (chartHeadingMatch) {
    chart = normalizedText.slice(chartHeadingMatch.index + chartHeadingMatch[0].length).trim();
  } else {
    chart = normalizedText
      .split("\n")
      .filter((line) => !/^(?:曲名|タイトル|アーティスト|歌手|artist|カポ|capo|演奏時間|時間)\s*[:：]/i.test(line))
      .join("\n")
      .trim();
  }

  if (titleMatch) {
    elements.songTitle.value = titleMatch[1].trim();
  } else {
    elements.songTitle.value = "";
  }

  elements.songArtist.value = artistMatch ? artistMatch[1].trim() : "";
  elements.songCapo.value = capoMatch ? capoMatch[1].trim() : "";

  if (importedDuration) {
    elements.songMinutes.value = Math.floor(importedDuration / 60);
    elements.songSeconds.value = importedDuration % 60;
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
    artistMatch ? "アーティスト" : "",
    capoMatch ? "カポ" : "",
    importedDuration ? "演奏時間" : "",
    chart ? "コード譜" : ""
  ].filter(Boolean);

  elements.importStatus.textContent = `${importedItems.join("・")}を新しい曲として取り込みました`;
}

function parseImportedDuration(durationText) {
  const trimmedText = durationText.trim();
  const colonMatch = trimmedText.match(/^(\d{1,2})\s*[:：]\s*(\d{1,2})$/);
  const japaneseMatch = trimmedText.match(/^(\d{1,2})\s*分\s*(\d{1,2})?\s*秒?$/);

  if (colonMatch) {
    return Number(colonMatch[1]) * 60 + Number(colonMatch[2]);
  }

  if (japaneseMatch) {
    return Number(japaneseMatch[1]) * 60 + Number(japaneseMatch[2] || 0);
  }

  return null;
}

function handleSongSave(event) {
  event.preventDefault();

  const title = elements.songTitle.value.trim();
  const artist = elements.songArtist.value.trim();
  const capo = elements.songCapo.value.trim();
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
    artist,
    capo,
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
  void saveSongToCloud(nextSong);
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
  elements.songArtist.value = "";
  elements.songCapo.value = "";
  elements.songMinutes.value = 3;
  elements.songSeconds.value = 0;
  elements.songChart.value = "";
  elements.quickImportText.value = "";
  elements.importStatus.textContent = "";
  elements.quickImportText.focus();
}

function handleSongDelete() {
  const deletedSong = getCurrentSong();

  rememberDeletedSongId(deletedSong.id);

  if (songs.length <= 1) {
    songs = sampleSongs.filter((song) => song.id !== deletedSong.id);

    if (songs.length === 0) {
      songs = sampleSongs;
    }
  } else {
    songs = songs.filter((song) => song.id !== deletedSong.id);
  }

  currentSongId = songs[0].id;
  saveSongs();
  renderSongOptions();
  renderCurrentSong();
  void deleteSongFromCloud(deletedSong);
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
  microphone.noiseFloor = 0.5;
  microphone.soundThreshold = MIN_SOUND_THRESHOLD;
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
  const volume = Math.min(100, rootMeanSquare * 420);

  microphone.currentVolume = volume;

  if (performance.now() > microphone.soundActiveUntil) {
    // スマホを置く場所ごとの環境音に合わせ、静かなときの音量をゆっくり学習します。
    microphone.noiseFloor = microphone.noiseFloor * 0.98 + volume * 0.02;
  }

  microphone.soundThreshold = Math.max(MIN_SOUND_THRESHOLD, microphone.noiseFloor * 1.8);

  if (volume >= microphone.soundThreshold) {
    // コードの余韻やストローク間の短い無音では追従を止めません。
    microphone.soundActiveUntil = performance.now() + SOUND_HOLD_MS;
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
  elements.currentSubtitle.textContent = getSongMetaParts(getCurrentSong()).join(" ・ ");
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
    elements.currentSubtitle.textContent = `${status} ・ ${getSongMetaParts(getCurrentSong()).join(" ・ ")}`;
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
elements.exportSongsButton.addEventListener("click", exportSongsBackup);
elements.importBackupButton.addEventListener("click", importSongsBackup);
elements.loadCloudSongsButton.addEventListener("click", loadSongsFromCloud);
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
elements.cloudEndpoint.value = loadCloudEndpoint();
renderCurrentSong();
