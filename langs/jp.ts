import { AppData } from "../types";

export const japaneseData: AppData = {
  meta: {
    source_language: "zh-TW",
    target_language: "ja-JP",
    version: "3.2",
    description:
      "台灣人快速語言學習 - 日文完整版 (包含所有原始列表單字與完整句型 - 支援多重詞彙拆分)",
  },
  categories: [
{
  id: "greetings",
  name: "常用句",
  items: [
    {
      id: "greet-001",
      term_zh: "是的",
      related_terms: [
        {
          term_target: "はい",
          pronunciation: ["はい", "Hai"],
          specific_note: "肯定",
        },
      ],
      examples: [
        {
          sentence: "はい、そうです。",
          translation: "是的，沒錯。",
        },
        {
          sentence: "はい、わかります。",
          translation: "是的，我明白。",
        },
        {
          sentence: "はい、お願いします。",
          translation: "好的，麻煩你了。",
        },
      ],
      usage_note: "回答問題或表示同意，發音短促清楚。",
      image_file: "yes.png",
    },
    {
      id: "greet-002",
      term_zh: "不是",
      related_terms: [
        {
          term_target: "いいえ",
          pronunciation: ["いいえ", "Iie"],
          specific_note: "否定",
        },
      ],
      examples: [
        {
          sentence: "いいえ、違います。",
          translation: "不，不是那樣的。",
        },
        {
          sentence: "いいえ、結構です。",
          translation: "不用了，謝謝 (婉拒)。",
        },
        {
          sentence: "いいえ、そうではありません。",
          translation: "不，並非如此。",
        },
      ],
      usage_note: "拒絕或否認。口語中有時會說「ううん (Uun)」。",
      image_file: "no.png",
    },
    {
      id: "greet-003",
      term_zh: "你好",
      related_terms: [
        {
          term_target: "こんにちは",
          pronunciation: ["こんにちは", "Konnichiwa"],
          specific_note: "通用",
        },
      ],
      examples: [
        {
          sentence: "こんにちは、元気ですか？",
          translation: "你好，你好嗎？",
        },
        {
          sentence: "みなさん、こんにちは。",
          translation: "大家好。",
        },
        {
          sentence: "こんにちは、いい天気ですね。",
          translation: "你好，天氣真好呢。",
        },
      ],
      usage_note: "主要用於白天 (約10:00-17:00)。",
      image_file: "hello.png",
    },
    {
      id: "greet-004",
      term_zh: "謝謝你",
      related_terms: [
        {
          term_target: "ありがとうございます",
          pronunciation: ["ありがとうございます", "Arigatou gozaimasu"],
          specific_note: "禮貌",
        },
        {
          term_target: "ありがとう",
          pronunciation: ["ありがとう", "Arigatou"],
          specific_note: "平輩",
        },
      ],
      examples: [
        {
          sentence: "手伝ってくれてありがとうございます。",
          translation: "謝謝你的幫忙。",
        },
        {
          sentence: "本当にありがとうございます。",
          translation: "真的非常感謝。",
        },
        {
          sentence: "いろいろありがとう。",
          translation: "感謝你做的這一切 (謝謝你的多方照顧)。",
        },
      ],
      usage_note: "對陌生人或店員務必使用長句 (Gozaimasu)。",
      image_file: "thank_you.png",
    },
    {
      id: "greet-005",
      term_zh: "對不起",
      related_terms: [
        {
          term_target: "ごめんなさい",
          pronunciation: ["ごめんなさい", "Gomennasai"],
          specific_note: "道歉",
        },
        {
          term_target: "すみません",
          pronunciation: ["すみません", "Sumimasen"],
          specific_note: "輕微歉意",
        },
      ],
      examples: [
        {
          sentence: "遅れてごめんなさい。",
          translation: "抱歉我遲到了。",
        },
        {
          sentence: "本当にごめんなさい。",
          translation: "真的非常對不起。",
        },
        {
          sentence: "ごめんなさい、忘れました。",
          translation: "對不起，我忘記了。",
        },
      ],
      usage_note: "做錯事時用 Gomennasai 較有誠意。",
      image_file: "sorry.png",
    },
    {
      id: "greet-006",
      term_zh: "請問...",
      related_terms: [
        {
          term_target: "すみません",
          pronunciation: ["すみません", "Sumimasen"],
          specific_note: "發問前",
        },
      ],
      examples: [
        {
          sentence: "すみません、駅はどこですか？",
          translation: "不好意思請問，車站在哪裡？",
        },
        {
          sentence: "すみません、注文をお願いします。",
          translation: "不好意思，我要點餐。",
        },
        {
          sentence: "すみません、ちょっといいですか？",
          translation: "不好意思，可以打擾一下嗎？",
        },
      ],
      usage_note: "最萬用的開場白，同 Excuse me。",
      image_file: "excuse_me.png",
    },
    {
      id: "greet-007",
      term_zh: "我不懂",
      related_terms: [
        {
          term_target: "わかりません",
          pronunciation: ["わかりません", "Wakarimasen"],
          specific_note: "無法理解",
        },
      ],
      examples: [
        {
          sentence: "日本語がわかりません。",
          translation: "我不懂日文。",
        },
        {
          sentence: "意味がわかりません。",
          translation: "我不懂這是什麼意思。",
        },
        {
          sentence: "すみません、よくわかりません。",
          translation: "抱歉，我不太明白。",
        },
      ],
      usage_note: "聽不懂對方說話時直接使用。",
      image_file: "dont_understand.png",
    },
    {
      id: "greet-008",
      term_zh: "廁所在哪裡？",
      related_terms: [
        {
          term_target: "トイレはどこですか？",
          pronunciation: ["といれはどこですか？", "Toire wa doko desu ka?"],
          specific_note: "通用",
        },
        {
          term_target: "お手洗いはどこですか？",
          pronunciation: [
            "おてあらいはどこですか？",
            "Otearai wa doko desu ka?",
          ],
          specific_note: "禮貌",
        },
      ],
      examples: [
        {
          sentence: "すみません、トイレはどこですか？",
          translation: "請問廁所在哪？",
        },
        {
          sentence: "あそこにトイレがありますか？",
          translation: "那邊有廁所嗎？",
        },
        {
          sentence: "トイレを借りてもいいですか？",
          translation: "可以借用廁所嗎？",
        },
      ],
      usage_note: "女性建議使用 Otearai (御手洗) 較優雅。",
      image_file: "where_bathroom.png",
    },
    {
      id: "greet-010",
      term_zh: "多少錢？",
      related_terms: [
        {
          term_target: "いくらですか？",
          pronunciation: ["いくらですか？", "Ikura desu ka?"],
          specific_note: "詢價",
        },
      ],
      examples: [
        {
          sentence: "これはいくらですか？",
          translation: "這個多少錢？",
        },
        {
          sentence: "全部でいくらですか？",
          translation: "全部總共多少錢？",
        },
        {
          sentence: "チケットはいくらですか？",
          translation: "票價是多少？",
        },
      ],
      usage_note: "購物必備短句。",
      image_file: "how_much.png",
    },
    {
      id: "greet-011",
      term_zh: "我想要這個",
      related_terms: [
        {
          term_target: "これをお願いします",
          pronunciation: ["これをおねがいします", "Kore o onegaishimasu"],
          specific_note: "購買/點餐",
        },
        {
          term_target: "これをください",
          pronunciation: ["これをください", "Kore o kudasai"],
          specific_note: "索取",
        },
      ],
      examples: [
        {
          sentence: "これをお願いします。",
          translation: "我要這個 (麻煩給我這個)。",
        },
        {
          sentence: "これをください。",
          translation: "請給我這個。",
        },
        {
          sentence: "あれもお願いします。",
          translation: "那個也麻煩給我。",
        },
      ],
      usage_note: "用 Onegaishimasu 比「想要(Hoshii)」更自然有禮。",
      image_file: "i_want_this.png",
    },
    {
      id: "greet-012",
      term_zh: "請給我...",
      related_terms: [
        {
          term_target: "...をください",
          pronunciation: ["...をください", "...o kudasai"],
          specific_note: "索取",
        },
      ],
      examples: [
        {
          sentence: "水をください。",
          translation: "請給我水。",
        },
        {
          sentence: "メニューをください。",
          translation: "請給我菜單。",
        },
        {
          sentence: "レシートをください。",
          translation: "請給我收據。",
        },
      ],
      usage_note: "名詞 + o kudasai。",
      image_file: "please_give_me.png",
    },
    {
      id: "greet-013",
      term_zh: "這是什麼？",
      related_terms: [
        {
          term_target: "これは何ですか？",
          pronunciation: ["これはなんですか？", "Kore wa nan desu ka?"],
          specific_note: "疑問",
        },
      ],
      examples: [
        {
          sentence: "これは何ですか？辛いですか？",
          translation: "這是什麼？會辣嗎？",
        },
        {
          sentence: "あれは何ですか？",
          translation: "那邊那個是什麼？",
        },
        {
          sentence: "これは日本語で何ですか？",
          translation: "這個用日文怎麼說？",
        },
      ],
      usage_note: "指著物品詢問。",
      image_file: "what_is_this.png",
    },
    {
      id: "greet-014",
      term_zh: "請幫我",
      related_terms: [
        {
          term_target: "手伝ってください",
          pronunciation: ["てつだってください", "Tetsudatte kudasai"],
          specific_note: "一般協助",
        },
        {
          term_target: "助けて",
          pronunciation: ["たすけて", "Tasukete"],
          specific_note: "緊急救命",
        },
      ],
      examples: [
        {
          sentence: "ちょっと手伝ってください。",
          translation: "請幫我一下。",
        },
        {
          sentence: "誰か助けて！",
          translation: "誰來救救我！(緊急)",
        },
        {
          sentence: "荷物を運ぶのを手伝ってください。",
          translation: "請幫我搬行李。",
        },
      ],
      usage_note: "一般幫忙用 Tetsudatte，遇到危險喊 Tasukete。",
      image_file: "help_me.png",
    },
    {
      id: "greet-015",
      term_zh: "你可以再說一次嗎？",
      related_terms: [
        {
          term_target: "もう一度お願いします",
          pronunciation: [
            "もういちどおねがいします",
            "Mou ichido onegaishimasu",
          ],
          specific_note: "請求重複",
        },
      ],
      examples: [
        {
          sentence: "すみません、もう一度お願いします。",
          translation: "不好意思，請再說一次。",
        },
        {
          sentence: "もう一度言ってもらえますか？",
          translation: "能請您再說一次嗎？",
        },
        {
          sentence: "え？なんですって？",
          translation: "蛤？你說什麼？(口語)",
        },
      ],
      usage_note: "沒聽清楚時使用。",
      image_file: "say_again.png",
    },
    {
      id: "greet-016",
      term_zh: "你可以講慢一點嗎？",
      related_terms: [
        {
          term_target: "ゆっくりお願いします",
          pronunciation: [
            "ゆっくりおねがいします",
            "Yukkuri onegaishimasu",
          ],
          specific_note: "請求慢速",
        },
      ],
      examples: [
        {
          sentence: "もっとゆっくりお願いします。",
          translation: "請再講慢一點。",
        },
        {
          sentence: "少しゆっくり話してください。",
          translation: "請說慢一點點。",
        },
        {
          sentence: "早すぎてわかりません。",
          translation: "太快了我聽不懂。",
        },
      ],
      usage_note: "Yukkuri 意思是「慢慢地」。",
      image_file: "speak_slowly.png",
    },
    {
      id: "greet-017",
      term_zh: "原來如此",
      related_terms: [
        {
          term_target: "なるほど",
          pronunciation: ["なるほど", "Naruhodo"],
          specific_note: "理解",
        },
      ],
      examples: [
        {
          sentence: "なるほど、わかりました。",
          translation: "原來如此，我懂了。",
        },
        {
          sentence: "あ、なるほど！",
          translation: "啊，原來是這樣！",
        },
        {
          sentence: "そうですか、なるほど。",
          translation: "是這樣啊，原來如此。",
        },
      ],
      usage_note: "表示理解並接受對方的說明 (注意對長輩少用，可用 Hai)。",
      image_file: "i_see.png",
    },
    {
      id: "greet-018",
      term_zh: "早安",
      related_terms: [
        {
          term_target: "おはようございます",
          pronunciation: ["おはようございます", "Ohayou gozaimasu"],
          specific_note: "禮貌",
        },
      ],
      examples: [
        {
          sentence: "おはようございます。",
          translation: "早安。",
        },
        {
          sentence: "先生、おはようございます。",
          translation: "老師早安。",
        },
        {
          sentence: "おはよう！",
          translation: "早！(對朋友/家人)",
        },
      ],
      usage_note: "通常用於早上10-11點之前。",
      image_file: "good_morning.png",
    },
    {
      id: "greet-019",
      term_zh: "晚上好 (晚安)",
      related_terms: [
        {
          term_target: "こんばんは",
          pronunciation: ["こんばんは", "Konbanwa"],
          specific_note: "晚上見面",
        },
        {
          term_target: "おやすみなさい",
          pronunciation: ["おやすみなさい", "Oyasuminasai"],
          specific_note: "睡前/道別",
        },
      ],
      examples: [
        {
          sentence: "こんばんは。",
          translation: "晚上好。",
        },
        {
          sentence: "みなさん、こんばんは。",
          translation: "大家晚安(晚上好)。",
        },
        {
          sentence: "そろそろ寝ます、おやすみなさい。",
          translation: "我要睡了，晚安。",
        },
      ],
      usage_note: "Konbanwa 是晚上見面用；睡前才說 Oyasumi。",
      image_file: "good_evening.png",
    },
    {
      id: "greet-020",
      term_zh: "再見",
      related_terms: [
        {
          term_target: "さようなら",
          pronunciation: ["さようなら", "Sayounara"],
          specific_note: "正式/久別",
        },
        {
          term_target: "失礼します",
          pronunciation: ["しつれいします", "Shitsurei shimasu"],
          specific_note: "商務/先離開",
        },
      ],
      examples: [
        {
          sentence: "では、失礼します。",
          translation: "那麼，我先告辭了。",
        },
        {
          sentence: "さようなら、また明日。",
          translation: "再見，明天見。",
        },
        {
          sentence: "じゃあ、またね。",
          translation: "那待會見囉 (口語)。",
        },
      ],
      usage_note: "一般朋友常說 Mata ne (待會見)。",
      image_file: "goodbye.png",
    },
    {
      id: "greet-021",
      term_zh: "你好嗎",
      related_terms: [
        {
          term_target: "お元気ですか？",
          pronunciation: ["おげんきですか？", "Ogenki desu ka?"],
          specific_note: "問候",
        },
      ],
      examples: [
        {
          sentence: "お元気ですか？",
          translation: "您最近好嗎？",
        },
        {
          sentence: "最近どうですか？",
          translation: "最近如何？",
        },
        {
          sentence: "元気？",
          translation: "好嗎？(朋友間)",
        },
      ],
      usage_note: "日文中通常用於許久不見時，天天見面不常說。",
      image_file: "how_are_you.png",
    },
    {
      id: "greet-022",
      term_zh: "真的嗎",
      related_terms: [
        {
          term_target: "本当ですか？",
          pronunciation: ["ほんとうですか？", "Hontou desu ka?"],
          specific_note: "疑問",
        },
      ],
      examples: [
        {
          sentence: "えっ、本当ですか？",
          translation: "咦，真的嗎？",
        },
        {
          sentence: "本当に？信じられない。",
          translation: "真的？真不敢相信。",
        },
        {
          sentence: "マジで？",
          translation: "真假？(年輕人口語)",
        },
      ],
      usage_note: "表示驚訝並確認事實。",
      image_file: "really.png",
    },
    {
      id: "greet-023",
      term_zh: "太棒了",
      related_terms: [
        {
          term_target: "すごい",
          pronunciation: ["すごい", "Sugoi"],
          specific_note: "讚嘆",
        },
      ],
      examples: [
        {
          sentence: "それはすごいですね！",
          translation: "那真是太厲害了！",
        },
        {
          sentence: "すごい！おめでとう。",
          translation: "太棒了！恭喜。",
        },
        {
          sentence: "日本語がすごいですね。",
          translation: "你的日文真棒。",
        },
      ],
      usage_note: "萬用的稱讚詞，類似 Awesome。",
      image_file: "awesome.png",
    },
    {
      id: "greet-024",
      term_zh: "很高興認識你",
      related_terms: [
        {
          term_target: "はじめまして",
          pronunciation: ["はじめまして", "Hajimemashite"],
          specific_note: "初次見面",
        },
      ],
      examples: [
        {
          sentence: "はじめまして、よろしく。",
          translation: "初次見面，請多指教。",
        },
        {
          sentence: "どうぞよろしくお願いします。",
          translation: "請多多指教 (正式)。",
        },
        {
          sentence: "お会いできて嬉しいです。",
          translation: "很高興能見到您。",
        },
      ],
      usage_note: "第一見面時的第一句話。",
      image_file: "nice_to_meet_you.png",
    },
    {
      id: "greet-025",
      term_zh: "真可惜",
      related_terms: [
        {
          term_target: "残念です",
          pronunciation: ["ざんねんです", "Zannen desu"],
          specific_note: "遺憾",
        },
      ],
      examples: [
        {
          sentence: "それは残念です。",
          translation: "那真是太可惜了。",
        },
        {
          sentence: "行けなくて残念です。",
          translation: "很遺憾我不能去。",
        },
        {
          sentence: "残念ですが、また今度。",
          translation: "真可惜，下次吧。",
        },
      ],
      usage_note: "聽到壞消息或無法成行時表示遺憾。",
      image_file: "too_bad.png",
    },
  ],
},
 {
  id: "pronouns",
  name: "主詞（代名詞）",
  items: [
{
      id: "pro-01",
      term_zh: "那個",
      related_terms: [
        {
          term_target: "それ",
          pronunciation: ["それ", "Sore"],
          specific_note: "代名詞 (對方附近)",
        },
        {
          term_target: "あれ",
          pronunciation: ["あれ", "Are"],
          specific_note: "代名詞 (遠處)",
        },
        {
          term_target: "その",
          pronunciation: ["その", "Sono"],
          specific_note: "連體詞 (接名詞)",
        },
      ],
      examples: [
        {
          sentence: "それは何ですか？",
          translation: "那個(你手邊的)是什麼？",
        },
        {
          sentence: "その服はかわいいです。",
          translation: "那件衣服(你穿的)很可愛。",
        },
        {
          sentence: "あれを見てください。",
          translation: "請看那邊(遠處)那個。",
        },
      ],
      usage_note: "Sore/Are 單獨使用；Sono 後面必接名詞。Sore/Sono 指對方處，Are 指遠處。",
      image_file: "that.png",
    },
    {
      id: "pro-02",
      term_zh: "我",
      related_terms: [
        {
          term_target: "私",
          pronunciation: ["わたし", "Watashi"],
          specific_note: "通用",
        },
        {
          term_target: "僕",
          pronunciation: ["ぼく", "Boku"],
          specific_note: "男性自稱(平輩)",
        },
      ],
      examples: [
        {
          sentence: "私は台湾人です。",
          translation: "我是台灣人。",
        },
        {
          sentence: "私は寿司が好きです。",
          translation: "我喜歡壽司。",
        },
        {
          sentence: "僕もそう思います。",
          translation: "我(男性)也這麼認為。",
        },
      ],
      usage_note: "Watashi 最安全通用。男性對平輩可用 Boku。",
      image_file: "i.png",
    },
    {
      id: "pro-03",
      term_zh: "你",
      related_terms: [
        {
          term_target: "あなた",
          pronunciation: ["あなた", "Anata"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "あなたは学生ですか？",
          translation: "你是學生嗎？",
        },
        {
          sentence: "これはあなたのペンですか？",
          translation: "這是你的筆嗎？",
        },
        {
          sentence: "あなたはどう思いますか？",
          translation: "你覺得呢？",
        },
      ],
      usage_note: "日文常省略「你」，或直接稱呼對方名字(如:田中さん)以示禮貌。",
      image_file: "you.png",
    },
    {
      id: "pro-04",
      term_zh: "他",
      related_terms: [
        {
          term_target: "彼",
          pronunciation: ["かれ", "Kare"],
          specific_note: "男性/男朋友",
        },
      ],
      examples: [
        {
          sentence: "彼は先生です。",
          translation: "他是老師。",
        },
        {
          sentence: "彼はとても親切です。",
          translation: "他非常親切。",
        },
        {
          sentence: "彼は私の彼氏です。",
          translation: "他是我的男朋友。",
        },
      ],
      usage_note: "Kare 既是「他」，也可指「男朋友」。",
      image_file: "he.png",
    },
    {
      id: "pro-05",
      term_zh: "他的",
      related_terms: [
        {
          term_target: "彼の",
          pronunciation: ["かれの", "Kare no"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "彼の車。",
          translation: "他的車。",
        },
        {
          sentence: "彼の名前を知っていますか？",
          translation: "你知道他的名字嗎？",
        },
        {
          sentence: "これは彼のカバンです。",
          translation: "這是他的包包。",
        },
      ],
      usage_note: "所有格加「の」。",
      image_file: "his.png",
    },
    {
      id: "pro-06",
      term_zh: "我們",
      related_terms: [
        {
          term_target: "私たち",
          pronunciation: ["わたしたち", "Watashitachi"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私たちは家族です。",
          translation: "我們是家人。",
        },
        {
          sentence: "私たちは台湾から来ました。",
          translation: "我們來自台灣。",
        },
        {
          sentence: "私たちは行きましょう。",
          translation: "我們走吧。",
        },
      ],
      usage_note: "複數形，加 tachi。",
      image_file: "we.png",
    },
    {
      id: "pro-07",
      term_zh: "她",
      related_terms: [
        {
          term_target: "彼女",
          pronunciation: ["かのじょ", "Kanojo"],
          specific_note: "女性/女朋友",
        },
      ],
      examples: [
        {
          sentence: "彼女は元気です。",
          translation: "她很有精神。",
        },
        {
          sentence: "彼女は日本語を話します。",
          translation: "她會說日文。",
        },
        {
          sentence: "彼女は私の友達です。",
          translation: "她是我的朋友。",
        },
      ],
      usage_note: "Kanojo 既是「她」，也可指「女朋友」。",
      image_file: "she.png",
    },
    {
      id: "pro-08",
      term_zh: "他們",
      related_terms: [
        {
          term_target: "彼ら",
          pronunciation: ["かれら", "Karera"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "彼らは学生です。",
          translation: "他們是學生。",
        },
        {
          sentence: "彼らは忙しいです。",
          translation: "他們很忙。",
        },
        {
          sentence: "彼らはどこに行きますか？",
          translation: "他們要去哪裡？",
        },
      ],
      usage_note: "第三人稱複數。",
      image_file: "they.png",
    },
    {
      id: "pro-09",
      term_zh: "這個",
      related_terms: [
        {
          term_target: "これ",
          pronunciation: ["これ", "Kore"],
          specific_note: "代名詞",
        },
        {
          term_target: "この",
          pronunciation: ["この", "Kono"],
          specific_note: "連體詞(+名詞)",
        },
      ],
      examples: [
        {
          sentence: "これはペンです。",
          translation: "這是筆 (Kore)。",
        },
        {
          sentence: "これをお願いします。",
          translation: "麻煩給我這個 (Kore)。",
        },
        {
          sentence: "この本は面白いです。",
          translation: "這本書很有趣 (Kono + 名詞)。",
        },
      ],
      usage_note: "單獨指涉用 Kore，後面接名詞用 Kono (例: Kono pen)。",
      image_file: "this.png",
    },
    {
      id: "pro-11",
      term_zh: "她的",
      related_terms: [
        {
          term_target: "彼女の",
          pronunciation: ["かのじょの", "Kanojo no"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "彼女のカバン。",
          translation: "她的包包。",
        },
        {
          sentence: "彼女の趣味は旅行です。",
          translation: "她的興趣是旅行。",
        },
        {
          sentence: "これは彼女の席です。",
          translation: "這是她的位子。",
        },
      ],
      usage_note: "所有格。",
      image_file: "her.png",
    },
    {
      id: "pro-12",
      term_zh: "你的",
      related_terms: [
        {
          term_target: "あなたの",
          pronunciation: ["あなたの", "Anata no"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "あなたの名前。",
          translation: "你的名字。",
        },
        {
          sentence: "これはあなたの携帯ですか？",
          translation: "這是你的手機嗎？",
        },
        {
          sentence: "あなたの番です。",
          translation: "換你了 (是你的回合)。",
        },
      ],
      usage_note: "所有格。",
      image_file: "your.png",
    },
    {
      id: "pro-13",
      term_zh: "他們的",
      related_terms: [
        {
          term_target: "彼らの",
          pronunciation: ["かれらの", "Karera no"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "彼らの家。",
          translation: "他們的家。",
        },
        {
          sentence: "彼らの意見に賛成です。",
          translation: "我贊成他們的意見。",
        },
        {
          sentence: "これは彼らの荷物です。",
          translation: "這是他們的行李。",
        },
      ],
      usage_note: "所有格。",
      image_file: "their.png",
    },
    {
      id: "pro-14",
      term_zh: "我們的",
      related_terms: [
        {
          term_target: "私たちの",
          pronunciation: ["わたしたちの", "Watashitachi no"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私たちの学校。",
          translation: "我們的學校。",
        },
        {
          sentence: "ようこそ、私たちの家へ。",
          translation: "歡迎來我們家。",
        },
        {
          sentence: "私たちのチームが勝ちました。",
          translation: "我們的隊伍贏了。",
        },
      ],
      usage_note: "所有格。",
      image_file: "our.png",
    },
    {
      id: "pro-15",
      term_zh: "這些",
      related_terms: [
        {
          term_target: "これら",
          pronunciation: ["これら", "Korera"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "これらは本です。",
          translation: "這些是書。",
        },
        {
          sentence: "これらは全て無料です。",
          translation: "這些全部都是免費的。",
        },
        {
          sentence: "これらを片付けてください。",
          translation: "請把這些整理一下。",
        },
      ],
      usage_note: "近處複數。口語中有時只用 Kore 代表複數，Korera 較正式。",
      image_file: "these.png",
    },
    {
      id: "pro-16",
      term_zh: "那些",
      related_terms: [
        {
          term_target: "それら",
          pronunciation: ["それら", "Sorera"],
          specific_note: "中距離",
        },
        {
          term_target: "あれら",
          pronunciation: ["あれら", "Arera"],
          specific_note: "遠距離",
        },
      ],
      examples: [
        {
          sentence: "あれらは鳥です。",
          translation: "那些(遠處)是鳥。",
        },
        {
          sentence: "それらは何ですか？",
          translation: "那些(你旁邊的)是什麼？",
        },
        {
          sentence: "それらは重要です。",
          translation: "那些是很重要的。",
        },
      ],
      usage_note: "遠處複數。",
      image_file: "those.png",
    },
  ],
},
{
  id: "verbs",
  name: "動詞",
  items: [
    {
      id: "v-01",
      term_zh: "是",
      related_terms: [
        {
          term_target: "です",
          pronunciation: ["です", "Desu"],
          specific_note: "肯定助動詞",
        },
        {
          term_target: "だ",
          pronunciation: ["だ", "Da"],
          specific_note: "常體",
        },
      ],
      examples: [
        {
          sentence: "私は学生です。",
          translation: "我是學生。",
        },
        {
          sentence: "これは私の本です。",
          translation: "這是我的書。",
        },
        {
          sentence: "あそこは図書館です。",
          translation: "那裡是圖書館。",
        },
      ],
      usage_note: "Desu 用於敬語句尾，表示判斷或斷定。",
      image_file: "be.png",
    },
    {
      id: "v-02",
      term_zh: "有（擁有/存在）",
      related_terms: [
        {
          term_target: "あります",
          pronunciation: ["あります", "Arimasu"],
          specific_note: "物品/植物",
        },
        {
          term_target: "います",
          pronunciation: ["います", "Imasu"],
          specific_note: "人/動物",
        },
      ],
      examples: [
        {
          sentence: "お金があります。",
          translation: "我有錢。",
        },
        {
          sentence: "冷蔵庫にビールがあります。",
          translation: "冰箱裡有啤酒 (無生命)。",
        },
        {
          sentence: "あそこに猫がいます。",
          translation: "那裡有一隻貓 (有生命)。",
        },
      ],
      usage_note: "區分有無生命：物品/植物用 Arimasu，人/動物用 Imasu。",
      image_file: "have.png",
    },
    {
      id: "v-03",
      term_zh: "去",
      related_terms: [
        {
          term_target: "行きます",
          pronunciation: ["いきます", "Ikimasu"],
        },
      ],
      examples: [
        {
          sentence: "家へ行きます。",
          translation: "去家裡(回家)。",
        },
        {
          sentence: "明日、東京へ行きます。",
          translation: "我明天要去東京。",
        },
        {
          sentence: "一緒にカラオケに行きませんか？",
          translation: "要不要一起去唱卡拉OK？",
        },
      ],
      usage_note: "移動方向助詞可以用 e (へ) 或 ni (に)。",
      image_file: "go.png",
    },
    {
      id: "v-04",
      term_zh: "得到／拿",
      related_terms: [
        {
          term_target: "もらいます",
          pronunciation: ["もらいます", "Moraimasu"],
          specific_note: "得到(收受)",
        },
        {
          term_target: "とります",
          pronunciation: ["とります", "Torimasu"],
          specific_note: "拿取",
        },
      ],
      examples: [
        {
          sentence: "プレゼントをもらいます。",
          translation: "收到禮物。",
        },
        {
          sentence: "友達からメールをもらいました。",
          translation: "收到了朋友的郵件。",
        },
        {
          sentence: "塩をとってください。",
          translation: "請幫我拿鹽巴。",
        },
      ],
      usage_note: "Moraimasu 強調從別人那裡得到；Torimasu 強調拿取的動作。",
      image_file: "get.png",
    },
    {
      id: "v-05",
      term_zh: "做",
      related_terms: [
        {
          term_target: "します",
          pronunciation: ["します", "Shimasu"],
        },
        {
          term_target: "やります",
          pronunciation: ["やります", "Yarimasu"],
          specific_note: "口語/進行",
        },
      ],
      examples: [
        {
          sentence: "宿題をします。",
          translation: "做作業。",
        },
        {
          sentence: "テニスをします。",
          translation: "打網球。",
        },
        {
          sentence: "今、何をしていますか？",
          translation: "你現在在做什麼？",
        },
      ],
      usage_note: "Shimasu 是最通用的「做」，也常用於運動或遊戲。",
      image_file: "do.png",
    },
    {
      id: "v-06",
      term_zh: "說（講）",
      related_terms: [
        {
          term_target: "言います",
          pronunciation: ["いいます", "Iimasu"],
          specific_note: "說內容",
        },
        {
          term_target: "話します",
          pronunciation: ["はなします", "Hanashimasu"],
          specific_note: "說語言/交談",
        },
      ],
      examples: [
        {
          sentence: "こんにちはと言います。",
          translation: "說你好。",
        },
        {
          sentence: "ゆっくり話してください。",
          translation: "請說慢一點。",
        },
        {
          sentence: "彼は「はい」と言いました。",
          translation: "他說了「好」。",
        },
      ],
      usage_note: "Iimasu 是單方面說出內容，Hanashimasu 重點在對話溝通。",
      image_file: "say.png",
    },
    {
      id: "v-07",
      term_zh: "知道",
      related_terms: [
        {
          term_target: "知っています",
          pronunciation: ["しっています", "Shitteimasu"],
          specific_note: "狀態",
        },
        {
          term_target: "わかります",
          pronunciation: ["わかります", "Wakarimasu"],
          specific_note: "理解",
        },
      ],
      examples: [
        {
          sentence: "あなたを知っています。",
          translation: "我認識(知道)你。",
        },
        {
          sentence: "このニュースを知っていますか？",
          translation: "你知道這則新聞嗎？",
        },
        {
          sentence: "意味がわかりますか？",
          translation: "懂意思嗎？",
        },
      ],
      usage_note: "Shitteimasu 表示擁有知識；Wakarimasu 表示理解。",
      image_file: "know.png",
    },
    {
      id: "v-08",
      term_zh: "想／思考",
      related_terms: [
        {
          term_target: "思います",
          pronunciation: ["おもいます", "Omoimasu"],
          specific_note: "覺得/認為",
        },
        {
          term_target: "考えます",
          pronunciation: ["かんがえます", "Kangaemasu"],
          specific_note: "思考/考慮",
        },
      ],
      examples: [
        {
          sentence: "そう思います。",
          translation: "我也這麼覺得。",
        },
        {
          sentence: "明日は晴れると思います。",
          translation: "我覺得明天會放晴。",
        },
        {
          sentence: "将来について考えます。",
          translation: "思考關於未來的事。",
        },
      ],
      usage_note: "表達意見或推測用 Omoimasu；進行邏輯思考用 Kangaemasu。",
      image_file: "think.png",
    },
    {
      id: "v-09",
      term_zh: "看見",
      related_terms: [
        {
          term_target: "見ます",
          pronunciation: ["みます", "Mimasu"],
        },
      ],
      examples: [
        {
          sentence: "映画を見ます。",
          translation: "看電影。",
        },
        {
          sentence: "テレビを見ます。",
          translation: "看電視。",
        },
        {
          sentence: "ちょっと見せてください。",
          translation: "請讓我看一下。",
        },
      ],
      usage_note: "觀看、看見。",
      image_file: "see.png",
    },
    {
      id: "v-10",
      term_zh: "做出（製造）",
      related_terms: [
        {
          term_target: "作ります",
          pronunciation: ["つくります", "Tsukurimasu"],
        },
      ],
      examples: [
        {
          sentence: "料理を作ります。",
          translation: "做飯。",
        },
        {
          sentence: "ケーキを作りました。",
          translation: "我做了蛋糕。",
        },
        {
          sentence: "日本で作られました。",
          translation: "這是日本製造的。",
        },
      ],
      usage_note: "製作、創造。",
      image_file: "make.png",
    },
    {
      id: "v-11",
      term_zh: "來",
      related_terms: [
        {
          term_target: "来ます",
          pronunciation: ["きます", "Kimasu"],
        },
      ],
      examples: [
        {
          sentence: "ここへ来ます。",
          translation: "來這裡。",
        },
        {
          sentence: "また来てください。",
          translation: "請再來玩。",
        },
        {
          sentence: "バスが来ました。",
          translation: "公車來了。",
        },
      ],
      usage_note: "來到某處。",
      image_file: "come.png",
    },
    {
      id: "v-12",
      term_zh: "需要",
      related_terms: [
        {
          term_target: "いります",
          pronunciation: ["いります", "Irimasu"],
          specific_note: "動詞",
        },
        {
          term_target: "必要です",
          pronunciation: ["ひつようです", "Hitsuyou desu"],
          specific_note: "形容動詞",
        },
      ],
      examples: [
        {
          sentence: "水がいります。",
          translation: "需要水。",
        },
        {
          sentence: "パスポートがいります。",
          translation: "需要護照。",
        },
        {
          sentence: "袋はいりますか？",
          translation: "需要袋子嗎？",
        },
      ],
      usage_note: "Irimasu 是自動詞，助詞用 ga (が)。",
      image_file: "need.png",
    },
    {
      id: "v-13",
      term_zh: "使用",
      related_terms: [
        {
          term_target: "使います",
          pronunciation: ["つかいます", "Tsukaimasu"],
        },
      ],
      examples: [
        {
          sentence: "ペンを使います。",
          translation: "用筆。",
        },
        {
          sentence: "パソコンを使います。",
          translation: "使用電腦。",
        },
        {
          sentence: "このトイレを使ってください。",
          translation: "請使用這個廁所。",
        },
      ],
      usage_note: "利用工具或設施。",
      image_file: "use.png",
    },
    {
      id: "v-14",
      term_zh: "找到",
      related_terms: [
        {
          term_target: "見つけます",
          pronunciation: ["みつけます", "Mitsukemasu"],
        },
      ],
      examples: [
        {
          sentence: "仕事を見つけます。",
          translation: "找工作。",
        },
        {
          sentence: "鍵を見つけました。",
          translation: "我找到鑰匙了。",
        },
        {
          sentence: "新しい店を見つけました。",
          translation: "發現了一家新店。",
        },
      ],
      usage_note: "發現、尋獲。",
      image_file: "find.png",
    },
    {
      id: "v-15",
      term_zh: "給",
      related_terms: [
        {
          term_target: "あげます",
          pronunciation: ["あげます", "Agemasu"],
          specific_note: "我給別人",
        },
        {
          term_target: "くれます",
          pronunciation: ["くれます", "Kuremasu"],
          specific_note: "別人給我",
        },
      ],
      examples: [
        {
          sentence: "これをあげます。",
          translation: "給你這個。",
        },
        {
          sentence: "母に花をあげました。",
          translation: "送花給媽媽。",
        },
        {
          sentence: "彼がプレゼントをくれました。",
          translation: "他給了我禮物。",
        },
      ],
      usage_note: "授受動詞需注意方向：Agemasu (給出去)，Kuremasu (給進來)。",
      image_file: "give.png",
    },
    {
      id: "v-16",
      term_zh: "告訴",
      related_terms: [
        {
          term_target: "教えます",
          pronunciation: ["おしえます", "Oshiemasu"],
        },
      ],
      examples: [
        {
          sentence: "名前を教えてください。",
          translation: "請告訴我名字。",
        },
        {
          sentence: "道を教えてもらえませんか？",
          translation: "可以告訴我路怎麼走嗎？",
        },
        {
          sentence: "英語を教えています。",
          translation: "我在教英文。",
        },
      ],
      usage_note: "教導或告知資訊。",
      image_file: "tell.png",
    },
    {
      id: "v-17",
      term_zh: "工作",
      related_terms: [
        {
          term_target: "働きます",
          pronunciation: ["はたらきます", "Hatarakimasu"],
        },
        {
          term_target: "仕事します",
          pronunciation: ["しごとします", "Shigoto shimasu"],
        },
      ],
      examples: [
        {
          sentence: "ここで働きます。",
          translation: "在這工作。",
        },
        {
          sentence: "毎日働きます。",
          translation: "每天工作。",
        },
        {
          sentence: "銀行で働いています。",
          translation: "正在銀行工作。",
        },
      ],
      usage_note: "Hatarakimasu 強調勞動的動作。",
      image_file: "work.png",
    },
    {
      id: "v-18",
      term_zh: "喜歡",
      related_terms: [
        {
          term_target: "好きです",
          pronunciation: ["すきです", "Suki desu"],
        },
      ],
      examples: [
        {
          sentence: "猫が好きです。",
          translation: "我喜歡貓。",
        },
        {
          sentence: "日本料理が好きです。",
          translation: "我喜歡日本料理。",
        },
        {
          sentence: "あなたは誰が好きですか？",
          translation: "你喜歡誰？",
        },
      ],
      usage_note: "日文中是形容動詞，助詞用 ga (が)。",
      image_file: "like.png",
    },
    {
      id: "v-19",
      term_zh: "起床",
      related_terms: [
        {
          term_target: "起きます",
          pronunciation: ["おきます", "Okimasu"],
        },
      ],
      examples: [
        {
          sentence: "早く起きます。",
          translation: "早起。",
        },
        {
          sentence: "毎朝６時に起きます。",
          translation: "每天早上六點起床。",
        },
        {
          sentence: "まだ起きていますか？",
          translation: "你還醒著嗎？",
        },
      ],
      usage_note: "起床、醒來。",
      image_file: "wake_up.png",
    },
    {
      id: "v-20",
      term_zh: "說話",
      related_terms: [
        {
          term_target: "話します",
          pronunciation: ["はなします", "Hanashimasu"],
        },
      ],
      examples: [
        {
          sentence: "日本語を話します。",
          translation: "說日文。",
        },
        {
          sentence: "先生と話しました。",
          translation: "跟老師說過話了。",
        },
        {
          sentence: "英語が話せますか？",
          translation: "你會說英文嗎？",
        },
      ],
      usage_note: "交談、使用語言。",
      image_file: "speak.png",
    },
    {
      id: "v-21",
      term_zh: "聽見",
      related_terms: [
        {
          term_target: "聞こえます",
          pronunciation: ["きこえます", "Kikoemasu"],
          specific_note: "自然聽見",
        },
        {
          term_target: "聞きます",
          pronunciation: ["ききます", "Kikimasu"],
          specific_note: "聆聽/詢問",
        },
      ],
      examples: [
        {
          sentence: "聞こえますか？",
          translation: "聽得見嗎？",
        },
        {
          sentence: "音楽を聞きます。",
          translation: "聽音樂 (Kikimasu)。",
        },
        {
          sentence: "波の音が聞こえます。",
          translation: "聽得見海浪的聲音 (Kikoemasu)。",
        },
      ],
      usage_note: "Kikimasu 也有「詢問」的意思。",
      image_file: "hear.png",
    },
    {
      id: "v-22",
      term_zh: "寫",
      related_terms: [
        {
          term_target: "書きます",
          pronunciation: ["かきます", "Kakimasu"],
        },
      ],
      examples: [
        {
          sentence: "名前を書きます。",
          translation: "寫名字。",
        },
        {
          sentence: "手紙を書きます。",
          translation: "寫信。",
        },
        {
          sentence: "ここに住所を書いてください。",
          translation: "請在這裡寫下地址。",
        },
      ],
      usage_note: "書寫。",
      image_file: "write.png",
    },
    {
      id: "v-23",
      term_zh: "閱讀",
      related_terms: [
        {
          term_target: "読みます",
          pronunciation: ["よみます", "Yomimasu"],
        },
      ],
      examples: [
        {
          sentence: "本を読みます。",
          translation: "看書。",
        },
        {
          sentence: "新聞を読みます。",
          translation: "看報紙。",
        },
        {
          sentence: "この漢字が読めません。",
          translation: "我不懂(讀不出)這個漢字。",
        },
      ],
      usage_note: "閱讀文字。",
      image_file: "read.png",
    },
    {
      id: "v-24",
      term_zh: "等待",
      related_terms: [
        {
          term_target: "待ちます",
          pronunciation: ["まちます", "Machimasu"],
        },
      ],
      examples: [
        {
          sentence: "待ってください。",
          translation: "請等一下。",
        },
        {
          sentence: "バスを待っています。",
          translation: "正在等公車。",
        },
        {
          sentence: "友達を１時間待ちました。",
          translation: "等朋友等了一小時。",
        },
      ],
      usage_note: "等候。",
      image_file: "wait.png",
    },
    {
      id: "v-25",
      term_zh: "嘗試",
      related_terms: [
        {
          term_target: "やってみます",
          pronunciation: ["やってみます", "Yattemimasu"],
          specific_note: "試做",
        },
        {
          term_target: "食べてみます",
          pronunciation: ["たべてみます", "Tabetemimasu"],
          specific_note: "試吃",
        },
      ],
      examples: [
        {
          sentence: "これをやってみます。",
          translation: "試試看做這個。",
        },
        {
          sentence: "その服を着てみます。",
          translation: "試穿那件衣服。",
        },
        {
          sentence: "頑張ってみます。",
          translation: "我會努力試試看。",
        },
      ],
      usage_note: "動詞Te形 + mimasu 表示嘗試做某事。",
      image_file: "try.png",
    },
    {
      id: "v-26",
      term_zh: "付錢",
      related_terms: [
        {
          term_target: "払います",
          pronunciation: ["はらいます", "Haraimasu"],
        },
      ],
      examples: [
        {
          sentence: "お金を払います。",
          translation: "付錢。",
        },
        {
          sentence: "カードで払います。",
          translation: "用卡付款。",
        },
        {
          sentence: "私が払います。",
          translation: "我來付。",
        },
      ],
      usage_note: "支付。",
      image_file: "pay.png",
    },
    {
      id: "v-27",
      term_zh: "選擇",
      related_terms: [
        {
          term_target: "選びます",
          pronunciation: ["えらびます", "Erabimasu"],
        },
      ],
      examples: [
        {
          sentence: "好きなのを選びます。",
          translation: "選喜歡的。",
        },
        {
          sentence: "どちらを選びますか？",
          translation: "你要選哪一個？",
        },
        {
          sentence: "プレゼントを選びます。",
          translation: "挑選禮物。",
        },
      ],
      usage_note: "挑選。",
      image_file: "choose.png",
    },
    {
      id: "v-28",
      term_zh: "進入",
      related_terms: [
        {
          term_target: "入ります",
          pronunciation: ["はいります", "Hairimasu"],
        },
      ],
      examples: [
        {
          sentence: "部屋に入ります。",
          translation: "進房間。",
        },
        {
          sentence: "お風呂に入ります。",
          translation: "洗澡 (進入浴缸)。",
        },
        {
          sentence: "どうぞ、中に入ってください。",
          translation: "請進來裡面。",
        },
      ],
      usage_note: "進入空間。",
      image_file: "enter.png",
    },
    {
      id: "v-29",
      term_zh: "住",
      related_terms: [
        {
          term_target: "住みます",
          pronunciation: ["すみます", "Sumimasu"],
        },
      ],
      examples: [
        {
          sentence: "東京に住んでいます。",
          translation: "住在東京。",
        },
        {
          sentence: "どこに住んでいますか？",
          translation: "你住在哪裡？",
        },
        {
          sentence: "日本に住みたいです。",
          translation: "我想住在日本。",
        },
      ],
      usage_note: "通常用進行式 Sundeimasu 表示居住狀態。",
      image_file: "live.png",
    },
    {
      id: "v-30",
      term_zh: "到達",
      related_terms: [
        {
          term_target: "着きます",
          pronunciation: ["つきます", "Tsukimasu"],
        },
      ],
      examples: [
        {
          sentence: "駅に着きます。",
          translation: "到達車站。",
        },
        {
          sentence: "何時に着きますか？",
          translation: "幾點會到？",
        },
        {
          sentence: "空港に着きました。",
          translation: "抵達機場了。",
        },
      ],
      usage_note: "抵達目的地。",
      image_file: "arrive.png",
    },
    {
      id: "v-31",
      term_zh: "走路",
      related_terms: [
        {
          term_target: "歩きます",
          pronunciation: ["あるきます", "Arukimasu"],
        },
      ],
      examples: [
        {
          sentence: "歩いて帰ります。",
          translation: "走路回家。",
        },
        {
          sentence: "駅まで歩きます。",
          translation: "走到車站。",
        },
        {
          sentence: "ここから歩いて５分です。",
          translation: "從這裡走路5分鐘。",
        },
      ],
      usage_note: "步行。",
      image_file: "walk.png",
    },
    {
      id: "v-32",
      term_zh: "打開",
      related_terms: [
        {
          term_target: "開けます",
          pronunciation: ["あけます", "Akemasu"],
        },
      ],
      examples: [
        {
          sentence: "ドアを開けます。",
          translation: "開門。",
        },
        {
          sentence: "窓を開けてください。",
          translation: "請開窗戶。",
        },
        {
          sentence: "プレゼントを開けます。",
          translation: "打開禮物。",
        },
      ],
      usage_note: "開啟(門、窗、禮物等)。",
      image_file: "open.png",
    },
    {
      id: "v-33",
      term_zh: "關閉",
      related_terms: [
        {
          term_target: "閉めます",
          pronunciation: ["しめます", "Shimemasu"],
        },
      ],
      examples: [
        {
          sentence: "窓を閉めます。",
          translation: "關窗。",
        },
        {
          sentence: "ドアを閉めてください。",
          translation: "請關門。",
        },
        {
          sentence: "店を閉めます。",
          translation: "打烊(關店)。",
        },
      ],
      usage_note: "關上。",
      image_file: "close.png",
    },
    {
      id: "v-34",
      term_zh: "幫助",
      related_terms: [
        {
          term_target: "手伝います",
          pronunciation: ["てつだいます", "Tetsudaimasu"],
          specific_note: "幫忙做事",
        },
        {
          term_target: "助けます",
          pronunciation: ["たすけます", "Tasukemasu"],
          specific_note: "救助",
        },
      ],
      examples: [
        {
          sentence: "手伝ってください。",
          translation: "請幫我。",
        },
        {
          sentence: "母を手伝います。",
          translation: "幫忙媽媽。",
        },
        {
          sentence: "助けて！",
          translation: "救命！(Tasukete)",
        },
      ],
      usage_note: "日常協助用 Tetsudaimasu。",
      image_file: "help.png",
    },
    {
      id: "v-35",
      term_zh: "帶來",
      related_terms: [
        {
          term_target: "持ってきます",
          pronunciation: ["もってきます", "Mottekimasu"],
        },
      ],
      examples: [
        {
          sentence: "傘を持ってきます。",
          translation: "帶傘來。",
        },
        {
          sentence: "飲み物を持ってきます。",
          translation: "拿飲料來。",
        },
        {
          sentence: "明日、宿題を持ってきてください。",
          translation: "請明天帶作業來。",
        },
      ],
      usage_note: "物品帶向說話者。",
      image_file: "bring.png",
    },
    {
      id: "v-36",
      term_zh: "需要",
      related_terms: [
        {
          term_target: "いります",
          pronunciation: ["いります", "Irimasu"],
          specific_note: "動詞/物品",
        },
        {
          term_target: "必要です",
          pronunciation: ["ひつようです", "Hitsuyou desu"],
          specific_note: "形容動詞",
        },
      ],
      examples: [
        {
          sentence: "水がいります。",
          translation: "需要水。",
        },
        {
          sentence: "袋はいりますか？",
          translation: "需要袋子嗎？",
        },
        {
          sentence: "これはいりません。",
          translation: "我不需要這個。",
        },
      ],
      usage_note: "Irimasu 是自動詞，助詞用 ga (が)。",
      image_file: "need.png",
    },
    {
      id: "v-37",
      term_zh: "使用",
      related_terms: [
        {
          term_target: "使います",
          pronunciation: ["つかいます", "Tsukaimasu"],
        },
      ],
      examples: [
        {
          sentence: "ペンを使います。",
          translation: "用筆。",
        },
        {
          sentence: "箸を使います。",
          translation: "用筷子。",
        },
        {
          sentence: "頭を使ってください。",
          translation: "請動動腦。",
        },
      ],
      usage_note: "使用工具。",
      image_file: "use.png",
    },
    {
      id: "v-38",
      term_zh: "變成",
      related_terms: [
        {
          term_target: "なります",
          pronunciation: ["なります", "Narimasu"],
        },
      ],
      examples: [
        {
          sentence: "先生になります。",
          translation: "變成老師。",
        },
        {
          sentence: "元気になりました。",
          translation: "變健康(有精神)了。",
        },
        {
          sentence: "寒くなりました。",
          translation: "變冷了。",
        },
      ],
      usage_note: "變化。",
      image_file: "become.png",
    },
    {
      id: "v-39",
      term_zh: "開始",
      related_terms: [
        {
          term_target: "始めます",
          pronunciation: ["はじめます", "Hajimemasu"],
          specific_note: "他動詞/我開始",
        },
        {
          term_target: "始まります",
          pronunciation: ["はじまります", "Hajimarimasu"],
          specific_note: "自動詞/某事開始",
        },
      ],
      examples: [
        {
          sentence: "勉強を始めます。",
          translation: "開始讀書。",
        },
        {
          sentence: "会議が始まります。",
          translation: "會議開始了。",
        },
        {
          sentence: "そろそろ始めましょう。",
          translation: "差不多該開始了。",
        },
      ],
      usage_note: "區分人為開始 (Hajimemasu) 或自然開始 (Hajimarimasu)。",
      image_file: "start.png",
    },
    {
      id: "v-41",
      term_zh: "結束",
      related_terms: [
        {
          term_target: "終わります",
          pronunciation: ["おわります", "Owarimasu"],
        },
      ],
      examples: [
        {
          sentence: "仕事が終わります。",
          translation: "工作結束。",
        },
        {
          sentence: "夏休みが終わりました。",
          translation: "暑假結束了。",
        },
        {
          sentence: "もう終わりましたか？",
          translation: "已經結束了嗎？",
        },
      ],
      usage_note: "完成、終止。",
      image_file: "finish.png",
    },
    {
      id: "v-42",
      term_zh: "停止",
      related_terms: [
        {
          term_target: "止まります",
          pronunciation: ["とまります", "Tomarimasu"],
          specific_note: "自動詞",
        },
        {
          term_target: "止めます",
          pronunciation: ["とめます", "Tomemasu"],
          specific_note: "他動詞",
        },
      ],
      examples: [
        {
          sentence: "車が止まります。",
          translation: "車子停下。",
        },
        {
          sentence: "ここで止めてください。",
          translation: "請停在這裡 (對司機說)。",
        },
        {
          sentence: "時計が止まりました。",
          translation: "時鐘停了。",
        },
      ],
      usage_note: "停止移動。",
      image_file: "stop.png",
    },
    {
      id: "v-43",
      term_zh: "記住",
      related_terms: [
        {
          term_target: "覚えています",
          pronunciation: ["おぼえています", "Oboeteimasu"],
          specific_note: "狀態",
        },
        {
          term_target: "覚えます",
          pronunciation: ["おぼえます", "Oboemasu"],
          specific_note: "動作",
        },
      ],
      examples: [
        {
          sentence: "単語を覚えます。",
          translation: "背單字。",
        },
        {
          sentence: "私のことを覚えていますか？",
          translation: "你記得我嗎？",
        },
        {
          sentence: "電話番号を覚えていません。",
          translation: "我不記得電話號碼。",
        },
      ],
      usage_note: "記憶、背誦。",
      image_file: "remember.png",
    },
    {
      id: "v-44",
      term_zh: "談話",
      related_terms: [
        {
          term_target: "話します",
          pronunciation: ["はなします", "Hanashimasu"],
        },
      ],
      examples: [
        {
          sentence: "友達と話します。",
          translation: "跟朋友說話。",
        },
        {
          sentence: "社長と話しました。",
          translation: "跟社長談過了。",
        },
        {
          sentence: "もっと話したいです。",
          translation: "我想多聊聊。",
        },
      ],
      usage_note: "對談。",
      image_file: "talk.png",
    },
    {
      id: "v-45",
      term_zh: "見面",
      related_terms: [
        {
          term_target: "会います",
          pronunciation: ["あいます", "Aimasu"],
        },
      ],
      examples: [
        {
          sentence: "友達に会います。",
          translation: "見朋友。",
        },
        {
          sentence: "また会いましょう。",
          translation: "下次見。",
        },
        {
          sentence: "駅で会いましょう。",
          translation: "在車站見面吧。",
        },
      ],
      usage_note: "會面。助詞用 ni (に)。",
      image_file: "meet.png",
    },
    {
      id: "v-46",
      term_zh: "乘坐（工具）",
      related_terms: [
        {
          term_target: "乗ります",
          pronunciation: ["のります", "Norimasu"],
        },
      ],
      examples: [
        {
          sentence: "バスに乗ります。",
          translation: "搭公車。",
        },
        {
          sentence: "電車に乗ります。",
          translation: "搭電車。",
        },
        {
          sentence: "タクシーに乗りましょう。",
          translation: "搭計程車吧。",
        },
      ],
      usage_note: "搭乘。助詞用 ni (に)。",
      image_file: "take.png",
    },
    {
      id: "v-47",
      term_zh: "放",
      related_terms: [
        {
          term_target: "置きます",
          pronunciation: ["おきます", "Okimasu"],
        },
      ],
      examples: [
        {
          sentence: "ここに置きます。",
          translation: "放這裡。",
        },
        {
          sentence: "荷物を置いてください。",
          translation: "請放下行李。",
        },
        {
          sentence: "傘をどこに置きましたか？",
          translation: "你把傘放在哪裡了？",
        },
      ],
      usage_note: "放置。",
      image_file: "put.png",
    },
    {
      id: "v-48",
      term_zh: "吃",
      related_terms: [
        {
          term_target: "食べます",
          pronunciation: ["たべます", "Tabemasu"],
        },
      ],
      examples: [
        {
          sentence: "ご飯を食べます。",
          translation: "吃飯。",
        },
        {
          sentence: "野菜を食べてください。",
          translation: "請吃蔬菜。",
        },
        {
          sentence: "何を食べたいですか？",
          translation: "你想吃什麼？",
        },
      ],
      usage_note: "進食。",
      image_file: "eat.png",
    },
    {
      id: "v-49",
      term_zh: "睡覺",
      related_terms: [
        {
          term_target: "寝ます",
          pronunciation: ["ねます", "Nemasu"],
        },
      ],
      examples: [
        {
          sentence: "もう寝ます。",
          translation: "要睡了。",
        },
        {
          sentence: "昨日、よく寝ました。",
          translation: "昨天睡得很好。",
        },
        {
          sentence: "１１時に寝ます。",
          translation: "11點睡覺。",
        },
      ],
      usage_note: "睡眠。",
      image_file: "sleep.png",
    },
    {
      id: "v-50",
      term_zh: "寄送",
      related_terms: [
        {
          term_target: "送ります",
          pronunciation: ["おくります", "Okurimasu"],
        },
      ],
      examples: [
        {
          sentence: "メールを送ります。",
          translation: "寄信。",
        },
        {
          sentence: "荷物を送ります。",
          translation: "寄包裹。",
        },
        {
          sentence: "友達に手紙を送りました。",
          translation: "寄信給朋友。",
        },
      ],
      usage_note: "傳送。",
      image_file: "send.png",
    },
    {
      id: "v-51",
      term_zh: "開車",
      related_terms: [
        {
          term_target: "運転します",
          pronunciation: ["うんてんします", "Untenshimasu"],
        },
      ],
      examples: [
        {
          sentence: "車を運転します。",
          translation: "開車。",
        },
        {
          sentence: "運転できますか？",
          translation: "你會開車嗎？",
        },
        {
          sentence: "安全に運転してください。",
          translation: "請小心駕駛。",
        },
      ],
      usage_note: "駕駛。",
      image_file: "drive.png",
    },
    {
      id: "v-52",
      term_zh: "讀書",
      related_terms: [
        {
          term_target: "勉強します",
          pronunciation: ["べんきょうします", "Benkyoushimasu"],
        },
      ],
      examples: [
        {
          sentence: "日本語を勉強します。",
          translation: "讀日文。",
        },
        {
          sentence: "図書館で勉強します。",
          translation: "在圖書館讀書。",
        },
        {
          sentence: "歴史を勉強しています。",
          translation: "正在讀歷史。",
        },
      ],
      usage_note: "學習。",
      image_file: "study.png",
    },
    {
      id: "v-53",
      term_zh: "回去",
      related_terms: [
        {
          term_target: "帰ります",
          pronunciation: ["かえります", "Kaerimasu"],
        },
      ],
      examples: [
        {
          sentence: "家へ帰ります。",
          translation: "回家。",
        },
        {
          sentence: "国へ帰ります。",
          translation: "回國。",
        },
        {
          sentence: "気をつけて帰ってください。",
          translation: "請小心慢走(回家)。",
        },
      ],
      usage_note: "歸返。",
      image_file: "go_back.png",
    },
    {
      id: "v-54",
      term_zh: "了解",
      related_terms: [
        {
          term_target: "分かります",
          pronunciation: ["わかります", "Wakarimasu"],
        },
      ],
      examples: [
        {
          sentence: "はい、分かりました。",
          translation: "好的，了解了。",
        },
        {
          sentence: "日本語が分かりますか？",
          translation: "你懂日文嗎？",
        },
        {
          sentence: "よく分かりません。",
          translation: "不太清楚。",
        },
      ],
      usage_note: "明白、懂。",
      image_file: "understand.png",
    },
  ],
},
{
  id: "adjectives",
  name: "形容詞",
  items: [
    {
      id: "adj-01",
      term_zh: "好的",
      related_terms: [
        {
          term_target: "いい",
          pronunciation: ["いい", "Ii"],
          specific_note: "伊形容詞",
        },
        {
          term_target: "よい",
          pronunciation: ["よい", "Yoi"],
          specific_note: "變化形",
        },
      ],
      examples: [
        {
          sentence: "いい天気です。",
          translation: "好天氣。",
        },
        {
          sentence: "それはいい考えです。",
          translation: "那是個好主意。",
        },
        {
          sentence: "調子がいいです。",
          translation: "狀況很好。",
        },
      ],
      usage_note: "正面。變化時用 Yoi (例如欲說「不好」時為 Yokunai)。",
      image_file: "good.png",
    },
    {
      id: "adj-02",
      term_zh: "壞的",
      related_terms: [
        {
          term_target: "悪い",
          pronunciation: ["わるい", "Warui"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "気分が悪いです。",
          translation: "不舒服/心情不好。",
        },
        {
          sentence: "天気が悪いです。",
          translation: "天氣不好。",
        },
        {
          sentence: "悪い夢を見ました。",
          translation: "做了惡夢。",
        },
      ],
      usage_note: "負面。",
      image_file: "bad.png",
    },
    {
      id: "adj-03",
      term_zh: "新的",
      related_terms: [
        {
          term_target: "新しい",
          pronunciation: ["あたらしい", "Atarashii"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "新しいスマホ。",
          translation: "新手機。",
        },
        {
          sentence: "新しい友達ができました。",
          translation: "交了新朋友。",
        },
        {
          sentence: "明けましておめでとう。",
          translation: "新年快樂。",
        },
      ],
      usage_note: "全新。",
      image_file: "new.png",
    },
    {
      id: "adj-04",
      term_zh: "第一天／第一的",
      related_terms: [
        {
          term_target: "一番",
          pronunciation: ["いちばん", "Ichiban"],
          specific_note: "最/第一名",
        },
        {
          term_target: "最初",
          pronunciation: ["さいしょ", "Saisho"],
          specific_note: "最初",
        },
      ],
      examples: [
        {
          sentence: "一番好きです。",
          translation: "最喜歡。",
        },
        {
          sentence: "これが一番いいです。",
          translation: "這個最好。",
        },
        {
          sentence: "最初のページ。",
          translation: "第一頁。",
        },
      ],
      usage_note: "Ichiban 表示程度之最或順序第一。",
      image_file: "first.png",
    },
    {
      id: "adj-05",
      term_zh: "上一個",
      related_terms: [
        {
          term_target: "前の",
          pronunciation: ["まえの", "Mae no"],
          specific_note: "連體詞",
        },
      ],
      examples: [
        {
          sentence: "前の日。",
          translation: "前一天。",
        },
        {
          sentence: "前のページに戻ってください。",
          translation: "請回到上一頁。",
        },
        {
          sentence: "駅の前にいます。",
          translation: "在車站前面。",
        },
      ],
      usage_note: "之前的、前面的。",
      image_file: "last.png",
    },
    {
      id: "adj-06",
      term_zh: "下一個",
      related_terms: [
        {
          term_target: "次の",
          pronunciation: ["つぎの", "Tsugi no"],
          specific_note: "連體詞",
        },
      ],
      examples: [
        {
          sentence: "次の駅。",
          translation: "下一站。",
        },
        {
          sentence: "次は誰ですか？",
          translation: "下一位是誰？",
        },
        {
          sentence: "また次の機会に。",
          translation: "下次還有機會 (婉拒用)。",
        },
      ],
      usage_note: "接下來。",
      image_file: "next.png",
    },
    {
      id: "adj-07",
      term_zh: "長的",
      related_terms: [
        {
          term_target: "長い",
          pronunciation: ["ながい", "Nagai"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "長い髪。",
          translation: "長髮。",
        },
        {
          sentence: "足が長いです。",
          translation: "腿很長。",
        },
        {
          sentence: "話が長いです。",
          translation: "話很多(故事很長)。",
        },
      ],
      usage_note: "長度。",
      image_file: "long.png",
    },
    {
      id: "adj-08",
      term_zh: "大的",
      related_terms: [
        {
          term_target: "大きい",
          pronunciation: ["おおきい", "Ookii"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "大きい家。",
          translation: "大房子。",
        },
        {
          sentence: "声が大きいです。",
          translation: "聲音很大。",
        },
        {
          sentence: "もっと大きいサイズはありますか？",
          translation: "有更大的尺寸嗎？",
        },
      ],
      usage_note: "體積大。",
      image_file: "big.png",
    },
    {
      id: "adj-09",
      term_zh: "小的",
      related_terms: [
        {
          term_target: "小さい",
          pronunciation: ["ちいさい", "Chiisai"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "小さいサイズ。",
          translation: "小尺寸。",
        },
        {
          sentence: "字が小さいです。",
          translation: "字很小。",
        },
        {
          sentence: "小さい頃。",
          translation: "小時候。",
        },
      ],
      usage_note: "體積小。",
      image_file: "small.png",
    },
    {
      id: "adj-10",
      term_zh: "多的",
      related_terms: [
        {
          term_target: "多い",
          pronunciation: ["おおい", "Ooi"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "人が多い。",
          translation: "人很多。",
        },
        {
          sentence: "車が多いです。",
          translation: "車很多。",
        },
        {
          sentence: "雨の日が多い。",
          translation: "下雨的日子很多。",
        },
      ],
      usage_note: "數量多。注意 Ooi 不可直接修飾名詞 (不能說 Ooi hito，要說 Hito ga ooi)。",
      image_file: "many.png",
    },
    {
      id: "adj-11",
      term_zh: "高的",
      related_terms: [
        {
          term_target: "高い",
          pronunciation: ["たかい", "Takai"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "背が高い。",
          translation: "個子高。",
        },
        {
          sentence: "高い山。",
          translation: "高山。",
        },
        {
          sentence: "プライドが高い。",
          translation: "自尊心很高。",
        },
      ],
      usage_note: "高度。Takai 也可指「價格貴」。",
      image_file: "tall.png",
    },
    {
      id: "adj-12",
      term_zh: "年輕的",
      related_terms: [
        {
          term_target: "若い",
          pronunciation: ["わかい", "Wakai"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "若い人。",
          translation: "年輕人。",
        },
        {
          sentence: "彼は若いです。",
          translation: "他很年輕。",
        },
        {
          sentence: "若く見えます。",
          translation: "看起來很年輕。",
        },
      ],
      usage_note: "年紀小。",
      image_file: "young.png",
    },
    {
      id: "adj-13",
      term_zh: "老的",
      related_terms: [
        {
          term_target: "古い",
          pronunciation: ["ふるい", "Furui"],
          specific_note: "物品舊",
        },
        {
          term_target: "年寄り",
          pronunciation: ["としより", "Toshiyori"],
          specific_note: "老人(名詞)",
        },
      ],
      examples: [
        {
          sentence: "古い本。",
          translation: "舊書。",
        },
        {
          sentence: "古い友達。",
          translation: "老朋友。",
        },
        {
          sentence: "建物が古いです。",
          translation: "建築物很舊。",
        },
      ],
      usage_note: "Furui 形容物品；形容人不禮貌，通常說「年紀大」。",
      image_file: "old.png",
    },
    {
      id: "adj-14",
      term_zh: "近的",
      related_terms: [
        {
          term_target: "近い",
          pronunciation: ["ちかい", "Chikai"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "駅に近い。",
          translation: "離車站近。",
        },
        {
          sentence: "近い未来。",
          translation: "不久的將來。",
        },
        {
          sentence: "家から近いです。",
          translation: "離家很近。",
        },
      ],
      usage_note: "距離近。",
      image_file: "near.png",
    },
    {
      id: "adj-15",
      term_zh: "遠的",
      related_terms: [
        {
          term_target: "遠い",
          pronunciation: ["とおい", "Tooi"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "家から遠い。",
          translation: "離家遠。",
        },
        {
          sentence: "遠い国。",
          translation: "遙遠的國家。",
        },
        {
          sentence: "駅は遠いですか？",
          translation: "車站遠嗎？",
        },
      ],
      usage_note: "距離遠。",
      image_file: "far.png",
    },
    {
      id: "adj-16",
      term_zh: "快的",
      related_terms: [
        {
          term_target: "速い",
          pronunciation: ["はやい", "Hayai"],
          specific_note: "速度",
        },
        {
          term_target: "早い",
          pronunciation: ["はやい", "Hayai"],
          specific_note: "時間早",
        },
      ],
      examples: [
        {
          sentence: "足が速い。",
          translation: "跑得快。",
        },
        {
          sentence: "話すのが速い。",
          translation: "說話速度快。",
        },
        {
          sentence: "朝が早いです。",
          translation: "早上起得早。",
        },
      ],
      usage_note: "發音相同，漢字不同：速度用「速」，時間用「早」。",
      image_file: "fast.png",
    },
    {
      id: "adj-17",
      term_zh: "慢的",
      related_terms: [
        {
          term_target: "遅い",
          pronunciation: ["おそい", "Osoi"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "歩くのが遅い。",
          translation: "走得慢。",
        },
        {
          sentence: "遅くなってすみません。",
          translation: "抱歉我遲到了(慢了)。",
        },
        {
          sentence: "ネットが遅いです。",
          translation: "網路很慢。",
        },
      ],
      usage_note: "速度慢、時間晚。",
      image_file: "slow.png",
    },
    {
      id: "adj-18",
      term_zh: "熱的",
      related_terms: [
        {
          term_target: "暑い",
          pronunciation: ["あつい", "Atsui"],
          specific_note: "天氣",
        },
        {
          term_target: "熱い",
          pronunciation: ["あつい", "Atsui"],
          specific_note: "物品",
        },
      ],
      examples: [
        {
          sentence: "今日は暑いです。",
          translation: "今天很熱 (氣溫)。",
        },
        {
          sentence: "お湯が熱いです。",
          translation: "熱水很燙。",
        },
        {
          sentence: "熱いコーヒー。",
          translation: "熱咖啡。",
        },
      ],
      usage_note: "發音相同，漢字不同：天氣用「暑」，觸感用「熱」。",
      image_file: "hot.png",
    },
    {
      id: "adj-19",
      term_zh: "冷的",
      related_terms: [
        {
          term_target: "寒い",
          pronunciation: ["さむい", "Samui"],
          specific_note: "天氣",
        },
        {
          term_target: "冷たい",
          pronunciation: ["つめたい", "Tsumetai"],
          specific_note: "物品",
        },
      ],
      examples: [
        {
          sentence: "今日は寒いです。",
          translation: "今天好冷 (氣溫)。",
        },
        {
          sentence: "水が冷たいです。",
          translation: "水是冰的 (觸感)。",
        },
        {
          sentence: "冷たい飲み物。",
          translation: "冷飲。",
        },
      ],
      usage_note: "天氣用「寒」，物體觸感用「冷」。",
      image_file: "cold.png",
    },
    {
      id: "adj-20",
      term_zh: "乾淨的",
      related_terms: [
        {
          term_target: "きれい",
          pronunciation: ["きれい", "Kirei"],
          specific_note: "那形容詞",
        },
      ],
      examples: [
        {
          sentence: "きれいな部屋。",
          translation: "乾淨的房間。",
        },
        {
          sentence: "手がきれいです。",
          translation: "手很乾淨(漂亮)。",
        },
        {
          sentence: "空気がきれいです。",
          translation: "空氣很清新。",
        },
      ],
      usage_note: "既指「乾淨」，也指「美麗」。注意它是那形容詞。",
      image_file: "clean.png",
    },
    {
      id: "adj-21",
      term_zh: "髒的",
      related_terms: [
        {
          term_target: "汚い",
          pronunciation: ["きたない", "Kitanai"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "手が汚いです。",
          translation: "手很髒。",
        },
        {
          sentence: "部屋が汚い。",
          translation: "房間很亂(髒)。",
        },
        {
          sentence: "汚い言葉。",
          translation: "髒話。",
        },
      ],
      usage_note: "不乾淨。",
      image_file: "dirty.png",
    },
    {
      id: "adj-22",
      term_zh: "簡單的",
      related_terms: [
        {
          term_target: "簡単",
          pronunciation: ["かんたん", "Kantan"],
          specific_note: "那形容詞",
        },
        {
          term_target: "易しい",
          pronunciation: ["やさしい", "Yasashii"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "これは簡単です。",
          translation: "這很簡單。",
        },
        {
          sentence: "簡単な問題。",
          translation: "簡單的問題。",
        },
        {
          sentence: "日本語は易しいですか？",
          translation: "日文容易嗎？",
        },
      ],
      usage_note: "Kantan 強調程序不複雜，Yasashii 強調難易度低。",
      image_file: "easy.png",
    },
    {
      id: "adj-23",
      term_zh: "困難的",
      related_terms: [
        {
          term_target: "難しい",
          pronunciation: ["むずかしい", "Muzukashii"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "日本語は難しいです。",
          translation: "日文很難。",
        },
        {
          sentence: "難しい問題。",
          translation: "難題。",
        },
        {
          sentence: "説明するのが難しい。",
          translation: "很難解釋。",
        },
      ],
      usage_note: "困難。日本人婉拒時也常說「Chotto muzukashii (有點困難)」。",
      image_file: "difficult.png",
    },
    {
      id: "adj-24",
      term_zh: "正確的",
      related_terms: [
        {
          term_target: "正しい",
          pronunciation: ["ただしい", "Tadashii"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "正しい答え。",
          translation: "正確答案。",
        },
        {
          sentence: "正しい使い方。",
          translation: "正確的使用方法。",
        },
        {
          sentence: "それは正しいですか？",
          translation: "那是正確的嗎？",
        },
      ],
      usage_note: "對的。",
      image_file: "correct.png",
    },
    {
      id: "adj-25",
      term_zh: "錯誤的",
      related_terms: [
        {
          term_target: "間違い",
          pronunciation: ["まちがい", "Machigai"],
          specific_note: "名詞",
        },
        {
          term_target: "違う",
          pronunciation: ["ちがう", "Chigau"],
          specific_note: "動詞/形容詞",
        },
      ],
      examples: [
        {
          sentence: "それは間違いです。",
          translation: "那是錯的。",
        },
        {
          sentence: "番号が違います。",
          translation: "號碼不對。",
        },
        {
          sentence: "間違い電話。",
          translation: "打錯電話。",
        },
      ],
      usage_note: "Machigai 是名詞，Chigau 是動詞常作形容詞用。",
      image_file: "wrong.png",
    },
    {
      id: "adj-26",
      term_zh: "重要的",
      related_terms: [
        {
          term_target: "大切",
          pronunciation: ["たいせつ", "Taisetsu"],
          specific_note: "那形容詞/珍貴",
        },
        {
          term_target: "重要",
          pronunciation: ["じゅうよう", "Juuyou"],
          specific_note: "那形容詞/重要",
        },
      ],
      examples: [
        {
          sentence: "大切な友達。",
          translation: "重要的朋友。",
        },
        {
          sentence: "家族が大切です。",
          translation: "家人很重要。",
        },
        {
          sentence: "重要な会議。",
          translation: "重要會議。",
        },
      ],
      usage_note: "Taisetsu 帶有情感上的「珍惜」，Juuyou 偏向事務性。",
      image_file: "important.png",
    },
    {
      id: "adj-27",
      term_zh: "不同的",
      related_terms: [
        {
          term_target: "違う",
          pronunciation: ["ちがう", "Chigau"],
          specific_note: "動詞",
        },
      ],
      examples: [
        {
          sentence: "色が違う。",
          translation: "顏色不同。",
        },
        {
          sentence: "ちょっと違います。",
          translation: "稍微有點不一樣。",
        },
        {
          sentence: "違う店に行きましょう。",
          translation: "去別家店吧。",
        },
      ],
      usage_note: "動詞作形容用。",
      image_file: "different.png",
    },
    {
      id: "adj-28",
      term_zh: "真的／真實的",
      related_terms: [
        {
          term_target: "本当の",
          pronunciation: ["ほんとうの", "Hontou no"],
          specific_note: "連體詞",
        },
      ],
      examples: [
        {
          sentence: "本当の話。",
          translation: "真的事。",
        },
        {
          sentence: "本当の気持ち。",
          translation: "真正的心情。",
        },
        {
          sentence: "これは本当ですか？",
          translation: "這是真的嗎？",
        },
      ],
      usage_note: "真實。",
      image_file: "real.png",
    },
    {
      id: "adj-29",
      term_zh: "有趣的",
      related_terms: [
        {
          term_target: "面白い",
          pronunciation: ["おもしろい", "Omoshiroi"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "面白い映画。",
          translation: "有趣的電影。",
        },
        {
          sentence: "この本は面白いです。",
          translation: "這本書很有趣。",
        },
        {
          sentence: "面白い人ですね。",
          translation: "真是有趣(好笑)的人呢。",
        },
      ],
      usage_note: "有意思、好笑。",
      image_file: "interesting.png",
    },
    {
      id: "adj-30",
      term_zh: "美麗的",
      related_terms: [
        {
          term_target: "美しい",
          pronunciation: ["うつくしい", "Utsukushii"],
          specific_note: "伊形容詞/美麗",
        },
        {
          term_target: "きれい",
          pronunciation: ["きれい", "Kirei"],
          specific_note: "那形容詞/漂亮",
        },
      ],
      examples: [
        {
          sentence: "美しい花。",
          translation: "美麗的花。",
        },
        {
          sentence: "景色が美しいです。",
          translation: "景色很美。",
        },
        {
          sentence: "きれいな海。",
          translation: "漂亮的海。",
        },
      ],
      usage_note: "Utsukushii 較文雅，Kirei 較口語。",
      image_file: "beautiful.png",
    },
    {
      id: "adj-31",
      term_zh: "便宜的",
      related_terms: [
        {
          term_target: "安い",
          pronunciation: ["やすい", "Yasui"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "これは安いです。",
          translation: "這很便宜。",
        },
        {
          sentence: "安い店。",
          translation: "便宜的店。",
        },
        {
          sentence: "安く買えました。",
          translation: "買得很便宜。",
        },
      ],
      usage_note: "價格低。",
      image_file: "cheap.png",
    },
    {
      id: "adj-32",
      term_zh: "昂貴的",
      related_terms: [
        {
          term_target: "高い",
          pronunciation: ["たかい", "Takai"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "値段が高いです。",
          translation: "價格很貴。",
        },
        {
          sentence: "高い時計。",
          translation: "昂貴的手錶。",
        },
        {
          sentence: "ちょっと高いですね。",
          translation: "有點貴呢。",
        },
      ],
      usage_note: "價格高。",
      image_file: "expensive.png",
    },
    {
      id: "adj-33",
      term_zh: "飢餓的",
      related_terms: [
        {
          term_target: "お腹が空いた",
          pronunciation: ["おなかがすいた", "Onaka ga suita"],
          specific_note: "慣用語",
        },
      ],
      examples: [
        {
          sentence: "お腹が空きました。",
          translation: "肚子餓了。",
        },
        {
          sentence: "お腹空いた！",
          translation: "肚子餓了！(口語)",
        },
        {
          sentence: "何か食べたいです。",
          translation: "想吃點東西。",
        },
      ],
      usage_note: "慣用語，字面意思是「肚子空了」。",
      image_file: "hungry.png",
    },
    {
      id: "adj-34",
      term_zh: "疲累的",
      related_terms: [
        {
          term_target: "疲れた",
          pronunciation: ["つかれた", "Tsukareta"],
          specific_note: "動詞過去式",
        },
      ],
      examples: [
        {
          sentence: "疲れました。",
          translation: "累了。",
        },
        {
          sentence: "疲れています。",
          translation: "正處於疲累狀態。",
        },
        {
          sentence: "疲れた顔。",
          translation: "疲累的臉。",
        },
      ],
      usage_note: "通常用動詞過去式 Tsukareta 表示「累了」。",
      image_file: "tired.png",
    },
    {
      id: "adj-35",
      term_zh: "忙碌的",
      related_terms: [
        {
          term_target: "忙しい",
          pronunciation: ["いそがしい", "Isogashii"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "仕事が忙しいです。",
          translation: "工作很忙。",
        },
        {
          sentence: "忙しいですか？",
          translation: "你忙嗎？",
        },
        {
          sentence: "最近忙しいです。",
          translation: "最近很忙。",
        },
      ],
      usage_note: "沒空。",
      image_file: "busy.png",
    },
    {
      id: "adj-36",
      term_zh: "高興的",
      related_terms: [
        {
          term_target: "嬉しい",
          pronunciation: ["うれしい", "Ureshii"],
          specific_note: "伊形容詞/高興",
        },
        {
          term_target: "楽しい",
          pronunciation: ["たのしい", "Tanoshii"],
          specific_note: "伊形容詞/快樂",
        },
      ],
      examples: [
        {
          sentence: "会えて嬉しいです。",
          translation: "見到你很高興。",
        },
        {
          sentence: "プレゼントをもらって嬉しい。",
          translation: "收到禮物很開心。",
        },
        {
          sentence: "楽しい旅行。",
          translation: "快樂的旅行。",
        },
      ],
      usage_note: "Ureshii 是內心喜悅，Tanoshii 是過程愉快有趣。",
      image_file: "happy.png",
    },
    {
      id: "adj-37",
      term_zh: "悲傷的",
      related_terms: [
        {
          term_target: "悲しい",
          pronunciation: ["かなしい", "Kanashii"],
          specific_note: "伊形容詞",
        },
      ],
      examples: [
        {
          sentence: "悲しいニュース。",
          translation: "悲傷的新聞。",
        },
        {
          sentence: "悲しい映画。",
          translation: "悲傷的電影。",
        },
        {
          sentence: "とても悲しいです。",
          translation: "非常難過。",
        },
      ],
      usage_note: "難過。",
      image_file: "sad.png",
    },
    {
      id: "adj-38",
      term_zh: "相似的",
      related_terms: [
        {
          term_target: "似ている",
          pronunciation: ["にている", "Niteiru"],
          specific_note: "狀態",
        },
      ],
      examples: [
        {
          sentence: "似ている色。",
          translation: "相似的顏色。",
        },
        {
          sentence: "彼らは似ています。",
          translation: "他們長得很像。",
        },
        {
          sentence: "母に似ています。",
          translation: "跟媽媽很像。",
        },
      ],
      usage_note: "類似。",
      image_file: "similar.png",
    },
    {
      id: "adj-39",
      term_zh: "有名的",
      related_terms: [
        {
          term_target: "有名",
          pronunciation: ["ゆうめい", "Yuumei"],
          specific_note: "那形容詞",
        },
      ],
      examples: [
        {
          sentence: "有名な人。",
          translation: "有名的人。",
        },
        {
          sentence: "この店は有名です。",
          translation: "這家店很有名。",
        },
        {
          sentence: "日本で有名です。",
          translation: "在日本很有名。",
        },
      ],
      usage_note: "知名。",
      image_file: "famous.png",
    },
    {
      id: "adj-40",
      term_zh: "外國的",
      related_terms: [
        {
          term_target: "外国の",
          pronunciation: ["がいこくの", "Gaikoku no"],
          specific_note: "連體詞",
        },
      ],
      examples: [
        {
          sentence: "外国の車。",
          translation: "外國車。",
        },
        {
          sentence: "外国の文化。",
          translation: "外國文化。",
        },
        {
          sentence: "外国に行きたいです。",
          translation: "想去國外。",
        },
      ],
      usage_note: "國外。",
      image_file: "foreign.png",
    },
    {
      id: "adj-41",
      term_zh: "聰明的",
      related_terms: [
        {
          term_target: "頭がいい",
          pronunciation: ["あたまがいい", "Atama ga ii"],
          specific_note: "慣用語",
        },
      ],
      examples: [
        {
          sentence: "彼は頭がいい。",
          translation: "他很聰明。",
        },
        {
          sentence: "頭がいい人。",
          translation: "聰明的人。",
        },
        {
          sentence: "イルカは頭がいいです。",
          translation: "海豚很聰明。",
        },
      ],
      usage_note: "字面意思是「腦袋好」。",
      image_file: "intelligent.png",
    },
    {
      id: "adj-42",
      term_zh: "危險的",
      related_terms: [
        {
          term_target: "危ない",
          pronunciation: ["あぶない", "Abunai"],
          specific_note: "伊形容詞",
        },
        {
          term_target: "危険",
          pronunciation: ["きけん", "Kiken"],
          specific_note: "那形容詞",
        },
      ],
      examples: [
        {
          sentence: "危ない！",
          translation: "危險！(小心！)",
        },
        {
          sentence: "そこは危ないです。",
          translation: "那裡很危險。",
        },
        {
          sentence: "危険な場所。",
          translation: "危險的地方。",
        },
      ],
      usage_note: "口語常喊 Abunai 表示「小心！」。",
      image_file: "dangerous.png",
    },
    {
      id: "adj-43",
      term_zh: "仁慈的",
      related_terms: [
        {
          term_target: "親切",
          pronunciation: ["しんせつ", "Shinsetsu"],
          specific_note: "那形容詞/親切",
        },
        {
          term_target: "優しい",
          pronunciation: ["やさしい", "Yasashii"],
          specific_note: "伊形容詞/溫柔",
        },
      ],
      examples: [
        {
          sentence: "親切な人。",
          translation: "親切的人。",
        },
        {
          sentence: "彼は優しいです。",
          translation: "他很溫柔。",
        },
        {
          sentence: "ご親切にありがとうございます。",
          translation: "謝謝您的親切(好意)。",
        },
      ],
      usage_note: "溫柔、好心。",
      image_file: "kind.png",
    },
    {
      id: "adj-44",
      term_zh: "所有的／每一個",
      related_terms: [
        {
          term_target: "全て",
          pronunciation: ["すべて", "Subete"],
          specific_note: "全部",
        },
        {
          term_target: "毎",
          pronunciation: ["まい", "Mai"],
          specific_note: "每",
        },
      ],
      examples: [
        {
          sentence: "全ての人。",
          translation: "所有的人。",
        },
        {
          sentence: "全て終わりました。",
          translation: "全部結束了。",
        },
        {
          sentence: "毎日。",
          translation: "每一天。",
        },
      ],
      usage_note: "全部。",
      image_file: "every.png",
    },
    {
      id: "adj-45",
      term_zh: "喜愛的",
      related_terms: [
        {
          term_target: "お気に入り",
          pronunciation: ["おきにいり", "Okiniiri"],
          specific_note: "名詞",
        },
      ],
      examples: [
        {
          sentence: "お気に入りの店。",
          translation: "喜愛的店。",
        },
        {
          sentence: "これは私のお気に入りです。",
          translation: "這是我中意的(東西)。",
        },
        {
          sentence: "お気に入りの曲。",
          translation: "喜愛的歌曲。",
        },
      ],
      usage_note: "中意、心頭好。",
      image_file: "favorite.png",
    },
    {
      id: "adj-46",
      term_zh: "美味的",
      related_terms: [
        {
          term_target: "おいしい",
          pronunciation: ["おいしい", "Oishii"],
          specific_note: "伊形容詞",
        },
        {
          term_target: "うまい",
          pronunciation: ["うまい", "Umai"],
          specific_note: "口語/男性常用",
        },
      ],
      examples: [
        {
          sentence: "おいしい料理。",
          translation: "美味的食物。",
        },
        {
          sentence: "これ、おいしい！",
          translation: "這個好好吃！",
        },
        {
          sentence: "うまい！",
          translation: "好吃！(豪邁語氣)",
        },
      ],
      usage_note: "好吃。",
      image_file: "delicious.png",
    },
  ],
},
{
  id: "nouns",
  name: "名詞",
  items: [
    {
      id: "n-01",
      term_zh: "時間",
      related_terms: [
        {
          term_target: "時間",
          pronunciation: ["じかん", "Jikan"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "時間がありません。",
          translation: "沒時間。",
        },
        {
          sentence: "今、時間がありますか？",
          translation: "你現在有時間嗎？",
        },
        {
          sentence: "約束の時間。",
          translation: "約好的時間。",
        },
      ],
      usage_note: "時刻、時段。",
      image_file: "time.png",
    },
    {
      id: "n-02",
      term_zh: "人們",
      related_terms: [
        {
          term_target: "人",
          pronunciation: ["ひと", "Hito"],
          specific_note: "單數/泛指",
        },
        {
          term_target: "人々",
          pronunciation: ["ひとびと", "Hitobito"],
          specific_note: "複數(群體)",
        },
      ],
      examples: [
        {
          sentence: "あの人は誰ですか？",
          translation: "那個人是誰？",
        },
        {
          sentence: "多くの人々。",
          translation: "很多人(群眾)。",
        },
        {
          sentence: "優しい人。",
          translation: "溫柔的人。",
        },
      ],
      usage_note: "口語常說 Hito，文章或演講才常說 Hitobito。",
      image_file: "people.png",
    },
    {
      id: "n-03",
      term_zh: "金錢",
      related_terms: [
        {
          term_target: "お金",
          pronunciation: ["おかね", "Okane"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "お金がありません。",
          translation: "沒錢。",
        },
        {
          sentence: "お金を払います。",
          translation: "付錢。",
        },
        {
          sentence: "お金持ち。",
          translation: "有錢人。",
        },
      ],
      usage_note: "前面加 O (お) 較禮貌。",
      image_file: "money.png",
    },
    {
      id: "n-04",
      term_zh: "孩子",
      related_terms: [
        {
          term_target: "子供",
          pronunciation: ["こども", "Kodomo"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "子供がいます。",
          translation: "有孩子。",
        },
        {
          sentence: "元気な子供。",
          translation: "很有精神的孩子。",
        },
        {
          sentence: "子供用。",
          translation: "兒童用。",
        },
      ],
      usage_note: "兒童、小孩。",
      image_file: "child.png",
    },
    {
      id: "n-05",
      term_zh: "水",
      related_terms: [
        {
          term_target: "水",
          pronunciation: ["みず", "Mizu"],
          specific_note: "冷水",
        },
        {
          term_target: "お湯",
          pronunciation: ["おゆ", "Oyu"],
          specific_note: "熱水",
        },
      ],
      examples: [
        {
          sentence: "水を飲みます。",
          translation: "喝水。",
        },
        {
          sentence: "冷たい水をお願いします。",
          translation: "麻煩給我冰水。",
        },
        {
          sentence: "お湯を沸かします。",
          translation: "燒開水(熱水)。",
        },
      ],
      usage_note: "日文分很細：Mizu 是常溫或冰水，Oyu 是熱水。",
      image_file: "water.png",
    },
    {
      id: "n-06",
      term_zh: "食物",
      related_terms: [
        {
          term_target: "食べ物",
          pronunciation: ["たべもの", "Tabemono"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "おいしい食べ物。",
          translation: "好吃的食物。",
        },
        {
          sentence: "好きな食べ物は何ですか？",
          translation: "喜歡的食物是什麼？",
        },
        {
          sentence: "食べ物を買います。",
          translation: "買吃的。",
        },
      ],
      usage_note: "泛指所有食物。",
      image_file: "food.png",
    },
    {
      id: "n-07",
      term_zh: "朋友",
      related_terms: [
        {
          term_target: "友達",
          pronunciation: ["ともだち", "Tomodachi"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私の友達。",
          translation: "我朋友。",
        },
        {
          sentence: "友達と遊びます。",
          translation: "跟朋友玩。",
        },
        {
          sentence: "友達を作ります。",
          translation: "交朋友。",
        },
      ],
      usage_note: "友人。",
      image_file: "friend.png",
    },
    {
      id: "n-08",
      term_zh: "家庭",
      related_terms: [
        {
          term_target: "家族",
          pronunciation: ["かぞく", "Kazoku"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "大家族。",
          translation: "大家庭。",
        },
        {
          sentence: "家族は何人ですか？",
          translation: "你家有幾個人？",
        },
        {
          sentence: "家族写真。",
          translation: "全家福照片。",
        },
      ],
      usage_note: "家人、家庭成員。",
      image_file: "family.png",
    },
    {
      id: "n-09",
      term_zh: "學生",
      related_terms: [
        {
          term_target: "学生",
          pronunciation: ["がくせい", "Gakusei"],
          specific_note: "泛指(常指大學生)",
        },
        {
          term_target: "生徒",
          pronunciation: ["せいと", "Seito"],
          specific_note: "國高中生",
        },
      ],
      examples: [
        {
          sentence: "私は学生です。",
          translation: "我是學生。",
        },
        {
          sentence: "真面目な学生。",
          translation: "認真的學生。",
        },
        {
          sentence: "学生証を見せてください。",
          translation: "請出示學生證。",
        },
      ],
      usage_note: "Gakusei 通常指大學生，小學生用 Jidou，中學用 Seito。",
      image_file: "student.png",
    },
    {
      id: "n-10",
      term_zh: "文化",
      related_terms: [
        {
          term_target: "文化",
          pronunciation: ["ぶんか", "Bunka"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "日本の文化。",
          translation: "日本文化。",
        },
        {
          sentence: "異文化。",
          translation: "異國文化。",
        },
        {
          sentence: "文化の日。",
          translation: "文化日(日本節日)。",
        },
      ],
      usage_note: "文化。",
      image_file: "culture.png",
    },
    {
      id: "n-11",
      term_zh: "問題",
      related_terms: [
        {
          term_target: "問題",
          pronunciation: ["もんだい", "Mondai"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "問題ありません。",
          translation: "沒問題。",
        },
        {
          sentence: "大きな問題。",
          translation: "大問題。",
        },
        {
          sentence: "問題を解決します。",
          translation: "解決問題。",
        },
      ],
      usage_note: "指麻煩、考題或議題。",
      image_file: "problem.png",
    },
    {
      id: "n-12",
      term_zh: "公司",
      related_terms: [
        {
          term_target: "会社",
          pronunciation: ["かいしゃ", "Kaisha"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "会社へ行きます。",
          translation: "去公司。",
        },
        {
          sentence: "会社で働いています。",
          translation: "在公司工作。",
        },
        {
          sentence: "会社を辞めます。",
          translation: "辭職(離開公司)。",
        },
      ],
      usage_note: "上班地點。",
      image_file: "company.png",
    },
    {
      id: "n-13",
      term_zh: "男性",
      related_terms: [
        {
          term_target: "男性",
          pronunciation: ["だんせい", "Dansei"],
          specific_note: "正式",
        },
        {
          term_target: "男",
          pronunciation: ["おとこ", "Otoko"],
          specific_note: "口語/性別",
        },
      ],
      examples: [
        {
          sentence: "男性用トイレ。",
          translation: "男廁。",
        },
        {
          sentence: "あの男性は誰ですか？",
          translation: "那名男性是誰？",
        },
        {
          sentence: "かっこいい男。",
          translation: "很帥的男人。",
        },
      ],
      usage_note: "Dansei 較禮貌，Otoko 較直接。",
      image_file: "man.png",
    },
    {
      id: "n-14",
      term_zh: "女性",
      related_terms: [
        {
          term_target: "女性",
          pronunciation: ["じょせい", "Josei"],
          specific_note: "正式",
        },
        {
          term_target: "女",
          pronunciation: ["おんな", "Onna"],
          specific_note: "口語/性別",
        },
      ],
      examples: [
        {
          sentence: "女性用トイレ。",
          translation: "女廁。",
        },
        {
          sentence: "きれいな女性。",
          translation: "漂亮的女性。",
        },
        {
          sentence: "女性に人気があります。",
          translation: "受女性歡迎。",
        },
      ],
      usage_note: "Josei 較禮貌。",
      image_file: "woman.png",
    },
    {
      id: "n-15",
      term_zh: "學校",
      related_terms: [
        {
          term_target: "学校",
          pronunciation: ["がっこう", "Gakkou"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "学校へ行きます。",
          translation: "去學校。",
        },
        {
          sentence: "学校はどこですか？",
          translation: "學校在哪裡？",
        },
        {
          sentence: "学校の近く。",
          translation: "學校附近。",
        },
      ],
      usage_note: "教育機構。",
      image_file: "school.png",
    },
    {
      id: "n-16",
      term_zh: "老師",
      related_terms: [
        {
          term_target: "先生",
          pronunciation: ["せんせい", "Sensei"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "先生、こんにちは。",
          translation: "老師好。",
        },
        {
          sentence: "日本語の先生。",
          translation: "日文老師。",
        },
        {
          sentence: "先生に聞きます。",
          translation: "問老師。",
        },
      ],
      usage_note: "對醫生、律師、作家也常稱呼 Sensei。",
      image_file: "teacher.png",
    },
    {
      id: "n-17",
      term_zh: "影片／電影",
      related_terms: [
        {
          term_target: "映画",
          pronunciation: ["えいが", "Eiga"],
          specific_note: "電影",
        },
        {
          term_target: "動画",
          pronunciation: ["どうが", "Douga"],
          specific_note: "影片(如YouTube)",
        },
      ],
      examples: [
        {
          sentence: "映画を見ます。",
          translation: "看電影。",
        },
        {
          sentence: "面白い動画。",
          translation: "有趣的影片。",
        },
        {
          sentence: "映画館に行きます。",
          translation: "去電影院。",
        },
      ],
      usage_note: "電影用 Eiga，網路影片用 Douga。",
      image_file: "movie.png",
    },
    {
      id: "n-18",
      term_zh: "手機",
      related_terms: [
        {
          term_target: "携帯",
          pronunciation: ["けいたい", "Keitai"],
          specific_note: "手機(統稱)",
        },
        {
          term_target: "スマホ",
          pronunciation: ["すまほ", "Sumaho"],
          specific_note: "智慧型手機",
        },
      ],
      examples: [
        {
          sentence: "私のスマホ。",
          translation: "我的智慧型手機。",
        },
        {
          sentence: "携帯を忘れました。",
          translation: "忘了帶手機。",
        },
        {
          sentence: "スマホを使います。",
          translation: "用手機。",
        },
      ],
      usage_note: "現代常用 Sumaho，Keitai 較老派但仍通用。",
      image_file: "phone.png",
    },
    {
      id: "n-19",
      term_zh: "電腦",
      related_terms: [
        {
          term_target: "パソコン",
          pronunciation: ["ぱそこん", "Pasokon"],
          specific_note: "個人電腦",
        },
      ],
      examples: [
        {
          sentence: "パソコンを使います。",
          translation: "用電腦。",
        },
        {
          sentence: "新しいパソコン。",
          translation: "新電腦。",
        },
        {
          sentence: "パソコンが壊れました。",
          translation: "電腦壞了。",
        },
      ],
      usage_note: "Personal Computer 的縮寫。",
      image_file: "computer.png",
    },
    {
      id: "n-20",
      term_zh: "車",
      related_terms: [
        {
          term_target: "車",
          pronunciation: ["くるま", "Kuruma"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "車を運転します。",
          translation: "開車。",
        },
        {
          sentence: "車で行きます。",
          translation: "開車(搭車)去。",
        },
        {
          sentence: "赤い車。",
          translation: "紅色的車。",
        },
      ],
      usage_note: "汽車。",
      image_file: "car.png",
    },
    {
      id: "n-21",
      term_zh: "市場",
      related_terms: [
        {
          term_target: "市場",
          pronunciation: ["いちば", "Ichiba"],
          specific_note: "傳統市場",
        },
      ],
      examples: [
        {
          sentence: "市場で買います。",
          translation: "在市場買。",
        },
        {
          sentence: "魚市場。",
          translation: "魚市場。",
        },
        {
          sentence: "夜市に行きます。",
          translation: "去夜市 (Yoichi)。",
        },
      ],
      usage_note: "Ichiba 多指販賣食材的地方。",
      image_file: "market.png",
    },
    {
      id: "n-22",
      term_zh: "衣服",
      related_terms: [
        {
          term_target: "服",
          pronunciation: ["ふく", "Fuku"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "服を買います。",
          translation: "買衣服。",
        },
        {
          sentence: "服を着ます。",
          translation: "穿衣服。",
        },
        {
          sentence: "この服は安いです。",
          translation: "這件衣服很便宜。",
        },
      ],
      usage_note: "衣物。",
      image_file: "clothes.png",
    },
    {
      id: "n-23",
      term_zh: "商店",
      related_terms: [
        {
          term_target: "店",
          pronunciation: ["みせ", "Mise"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "店に入ります。",
          translation: "進店裡。",
        },
        {
          sentence: "有名なお店。",
          translation: "有名的店。",
        },
        {
          sentence: "店を開けます。",
          translation: "開店。",
        },
      ],
      usage_note: "店家。",
      image_file: "shop.png",
    },
    {
      id: "n-24",
      term_zh: "巴士",
      related_terms: [
        {
          term_target: "バス",
          pronunciation: ["ばす", "Basu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "バスに乗ります。",
          translation: "搭公車。",
        },
        {
          sentence: "バスが来ました。",
          translation: "公車來了。",
        },
        {
          sentence: "バス停。",
          translation: "公車站牌。",
        },
      ],
      usage_note: "公車。",
      image_file: "bus.png",
    },
    {
      id: "n-25",
      term_zh: "街道",
      related_terms: [
        {
          term_target: "道",
          pronunciation: ["みち", "Michi"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "この道。",
          translation: "這條路。",
        },
        {
          sentence: "道を渡ります。",
          translation: "過馬路。",
        },
        {
          sentence: "道を聞きます。",
          translation: "問路。",
        },
      ],
      usage_note: "道路、路徑。",
      image_file: "street.png",
    },
    {
      id: "n-26",
      term_zh: "房子／家",
      related_terms: [
        {
          term_target: "家",
          pronunciation: ["いえ", "Ie"],
          specific_note: "房子/家",
        },
        {
          term_target: "うち",
          pronunciation: ["うち", "Uchi"],
          specific_note: "我家(歸屬感)",
        },
      ],
      examples: [
        {
          sentence: "大きい家。",
          translation: "大房子。",
        },
        {
          sentence: "家に帰ります。",
          translation: "回家。",
        },
        {
          sentence: "私のうち。",
          translation: "我家。",
        },
      ],
      usage_note: "Ie 側重建築物，Uchi 側重「我的歸屬」。",
      image_file: "house.png",
    },
    {
      id: "n-27",
      term_zh: "母親",
      related_terms: [
        {
          term_target: "お母さん",
          pronunciation: ["おかあさん", "Okaasan"],
          specific_note: "尊稱",
        },
        {
          term_target: "母",
          pronunciation: ["はは", "Haha"],
          specific_note: "謙稱(對外人說)",
        },
      ],
      examples: [
        {
          sentence: "私のお母さん。",
          translation: "我媽媽 (對家人說)。",
        },
        {
          sentence: "母は料理が得意です。",
          translation: "家母擅長做菜 (對外人說)。",
        },
        {
          sentence: "お母さんは元気ですか？",
          translation: "令堂身體好嗎？(問別人)",
        },
      ],
      usage_note: "對外人稱自己媽媽用 Haha，稱別人媽媽用 Okaasan。",
      image_file: "mother.png",
    },
    {
      id: "n-28",
      term_zh: "父親",
      related_terms: [
        {
          term_target: "お父さん",
          pronunciation: ["おとうさん", "Otoosan"],
          specific_note: "尊稱",
        },
        {
          term_target: "父",
          pronunciation: ["ちち", "Chichi"],
          specific_note: "謙稱(對外人說)",
        },
      ],
      examples: [
        {
          sentence: "私のお父さん。",
          translation: "我爸爸 (對家人說)。",
        },
        {
          sentence: "父は会社員です。",
          translation: "家父是公司職員 (對外人說)。",
        },
        {
          sentence: "お父さんによろしく。",
          translation: "請代我向令尊問好。",
        },
      ],
      usage_note: "對外人稱自己爸爸用 Chichi，稱別人爸爸用 Otoosan。",
      image_file: "father.png",
    },
    {
      id: "n-29",
      term_zh: "兄弟",
      related_terms: [
        {
          term_target: "兄弟",
          pronunciation: ["きょうだい", "Kyoudai"],
          specific_note: "泛指",
        },
        {
          term_target: "兄",
          pronunciation: ["あに", "Ani"],
          specific_note: "哥哥(謙稱)",
        },
        {
          term_target: "弟",
          pronunciation: ["おとうと", "Otouto"],
          specific_note: "弟弟",
        },
      ],
      examples: [
        {
          sentence: "兄弟がいますか？",
          translation: "你有兄弟姊妹嗎？",
        },
        {
          sentence: "私の兄。",
          translation: "我的哥哥。",
        },
        {
          sentence: "弟は学生です。",
          translation: "弟弟是學生。",
        },
      ],
      usage_note: "對外人稱自己哥哥用 Ani，稱別人哥哥用 Oniisan。",
      image_file: "brother.png",
    },
    {
      id: "n-30",
      term_zh: "姐妹",
      related_terms: [
        {
          term_target: "姉妹",
          pronunciation: ["しまい", "Shimai"],
          specific_note: "泛指",
        },
        {
          term_target: "姉",
          pronunciation: ["あね", "Ane"],
          specific_note: "姊姊(謙稱)",
        },
        {
          term_target: "妹",
          pronunciation: ["いもうと", "Imouto"],
          specific_note: "妹妹",
        },
      ],
      examples: [
        {
          sentence: "三姉妹。",
          translation: "三姊妹。",
        },
        {
          sentence: "私の姉。",
          translation: "我的姊姊。",
        },
        {
          sentence: "妹と遊びます。",
          translation: "跟妹妹玩。",
        },
      ],
      usage_note: "對外人稱自己姊姊用 Ane，稱別人姊姊用 Oneesan。",
      image_file: "sister.png",
    },
    {
      id: "n-31",
      term_zh: "中文",
      related_terms: [
        {
          term_target: "中国語",
          pronunciation: ["ちゅうごくご", "Chuugokugo"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "中国語を話します。",
          translation: "說中文。",
        },
        {
          sentence: "中国語のメニュー。",
          translation: "中文菜單。",
        },
        {
          sentence: "中国語を勉強しています。",
          translation: "正在學中文。",
        },
      ],
      usage_note: "語言。",
      image_file: "chinese.png",
    },
    {
      id: "n-32",
      term_zh: "早晨",
      related_terms: [
        {
          term_target: "朝",
          pronunciation: ["あさ", "Asa"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "朝ごはん。",
          translation: "早餐。",
        },
        {
          sentence: "朝早く起きます。",
          translation: "一早起床。",
        },
        {
          sentence: "いい朝ですね。",
          translation: "美好的早晨。",
        },
      ],
      usage_note: "早上。",
      image_file: "morning.png",
    },
    {
      id: "n-33",
      term_zh: "夜晚",
      related_terms: [
        {
          term_target: "夜",
          pronunciation: ["よる", "Yoru"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "夜ごはん。",
          translation: "晚餐。",
        },
        {
          sentence: "夜遅く。",
          translation: "深夜。",
        },
        {
          sentence: "夜景がきれい。",
          translation: "夜景很美。",
        },
      ],
      usage_note: "夜晚。",
      image_file: "night.png",
    },
    {
      id: "n-34",
      term_zh: "票／車票",
      related_terms: [
        {
          term_target: "切符",
          pronunciation: ["きっぷ", "Kippu"],
          specific_note: "車票",
        },
        {
          term_target: "チケット",
          pronunciation: ["ちけっと", "Chiketto"],
          specific_note: "入場券",
        },
      ],
      examples: [
        {
          sentence: "切符を買います。",
          translation: "買車票。",
        },
        {
          sentence: "電車の切符。",
          translation: "電車票。",
        },
        {
          sentence: "コンサートのチケット。",
          translation: "演唱會門票。",
        },
      ],
      usage_note: "交通用 Kippu，活動展覽用 Chiketto。",
      image_file: "ticket.png",
    },
    {
      id: "n-35",
      term_zh: "包包",
      related_terms: [
        {
          term_target: "カバン",
          pronunciation: ["かばん", "Kaban"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "カバンを持ちます。",
          translation: "拿包包。",
        },
        {
          sentence: "重いカバン。",
          translation: "很重的包包。",
        },
        {
          sentence: "カバンに入れます。",
          translation: "放進包包裡。",
        },
      ],
      usage_note: "提包、背包統稱。",
      image_file: "bag.png",
    },
    {
      id: "n-36",
      term_zh: "杯子",
      related_terms: [
        {
          term_target: "コップ",
          pronunciation: ["こっぷ", "Koppu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "コップの水。",
          translation: "杯子裡的水。",
        },
        {
          sentence: "コップを洗います。",
          translation: "洗杯子。",
        },
        {
          sentence: "プラスチックのコップ。",
          translation: "塑膠杯。",
        },
      ],
      usage_note: "通常指沒有把手的杯子。",
      image_file: "cup.png",
    },
    {
      id: "n-37",
      term_zh: "醫生",
      related_terms: [
        {
          term_target: "医者",
          pronunciation: ["いしゃ", "Isha"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "医者に行きます。",
          translation: "去看醫生。",
        },
        {
          sentence: "彼は医者です。",
          translation: "他是醫生。",
        },
        {
          sentence: "歯医者。",
          translation: "牙醫。",
        },
      ],
      usage_note: "稱呼醫生本人時請叫「先生 (Sensei)」。",
      image_file: "doctor.png",
    },
    {
      id: "n-38",
      term_zh: "警察",
      related_terms: [
        {
          term_target: "警察",
          pronunciation: ["けいさつ", "Keisatsu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "警察を呼びます。",
          translation: "叫警察。",
        },
        {
          sentence: "警察署。",
          translation: "警察局。",
        },
        {
          sentence: "警察官。",
          translation: "警官(指人)。",
        },
      ],
      usage_note: "警察機構。",
      image_file: "police.png",
    },
    {
      id: "n-39",
      term_zh: "醫院",
      related_terms: [
        {
          term_target: "病院",
          pronunciation: ["びょういん", "Byouin"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "病院へ行きます。",
          translation: "去醫院。",
        },
        {
          sentence: "大きい病院。",
          translation: "大醫院。",
        },
        {
          sentence: "病院を出ます。",
          translation: "出院(離開醫院)。",
        },
      ],
      usage_note: "醫療院所。",
      image_file: "hospital.png",
    },
    {
      id: "n-40",
      term_zh: "座位",
      related_terms: [
        {
          term_target: "席",
          pronunciation: ["せき", "Seki"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "席がありますか？",
          translation: "有位子嗎？",
        },
        {
          sentence: "席に着きます。",
          translation: "就座。",
        },
        {
          sentence: "予約席。",
          translation: "預約席。",
        },
      ],
      usage_note: "座位。",
      image_file: "seat.png",
    },
    {
      id: "n-41",
      term_zh: "門",
      related_terms: [
        {
          term_target: "ドア",
          pronunciation: ["どあ", "Doa"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "ドアを開けます。",
          translation: "開門。",
        },
        {
          sentence: "ドアを閉めます。",
          translation: "關門。",
        },
        {
          sentence: "ドアをノックします。",
          translation: "敲門。",
        },
      ],
      usage_note: "西式門。",
      image_file: "door.png",
    },
    {
      id: "n-42",
      term_zh: "房間",
      related_terms: [
        {
          term_target: "部屋",
          pronunciation: ["へや", "Heya"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私の部屋。",
          translation: "我房間。",
        },
        {
          sentence: "部屋を掃除します。",
          translation: "打掃房間。",
        },
        {
          sentence: "広い部屋。",
          translation: "寬敞的房間。",
        },
      ],
      usage_note: "室內空間。",
      image_file: "room.png",
    },
    {
      id: "n-43",
      term_zh: "車站",
      related_terms: [
        {
          term_target: "駅",
          pronunciation: ["えき", "Eki"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "駅はどこですか？",
          translation: "車站在哪？",
        },
        {
          sentence: "駅の近く。",
          translation: "車站附近。",
        },
        {
          sentence: "駅前。",
          translation: "車站前。",
        },
      ],
      usage_note: "火車或電車站。",
      image_file: "station.png",
    },
    {
      id: "n-44",
      term_zh: "地鐵",
      related_terms: [
        {
          term_target: "地下鉄",
          pronunciation: ["ちかてつ", "Chikatetsu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "地下鉄の駅。",
          translation: "地鐵站。",
        },
        {
          sentence: "地下鉄に乗ります。",
          translation: "搭地鐵。",
        },
        {
          sentence: "地下鉄の路線図。",
          translation: "地鐵路線圖。",
        },
      ],
      usage_note: "地下鐵。",
      image_file: "subway.png",
    },
    {
      id: "n-45",
      term_zh: "火車",
      related_terms: [
        {
          term_target: "電車",
          pronunciation: ["でんしゃ", "Densha"],
          specific_note: "電車(常用)",
        },
        {
          term_target: "汽車",
          pronunciation: ["きしゃ", "Kisha"],
          specific_note: "火車(舊式)",
        },
      ],
      examples: [
        {
          sentence: "電車で行きます。",
          translation: "搭電車去。",
        },
        {
          sentence: "電車が来ました。",
          translation: "電車來了。",
        },
        {
          sentence: "電車に乗ります。",
          translation: "上車。",
        },
      ],
      usage_note: "日本通常稱電氣化火車為「電車」。",
      image_file: "train.png",
    },
    {
      id: "n-46",
      term_zh: "機場",
      related_terms: [
        {
          term_target: "空港",
          pronunciation: ["くうこう", "Kuukou"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "空港へ行きます。",
          translation: "去機場。",
        },
        {
          sentence: "成田空港。",
          translation: "成田機場。",
        },
        {
          sentence: "空港に着きました。",
          translation: "抵達機場了。",
        },
      ],
      usage_note: "搭飛機處。",
      image_file: "airport.png",
    },
    {
      id: "n-47",
      term_zh: "行李",
      related_terms: [
        {
          term_target: "荷物",
          pronunciation: ["にもつ", "Nimotsu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "荷物が多い。",
          translation: "行李很多。",
        },
        {
          sentence: "荷物を持ちます。",
          translation: "提行李。",
        },
        {
          sentence: "荷物を送ります。",
          translation: "寄行李。",
        },
      ],
      usage_note: "包裹、隨身行李。",
      image_file: "luggage.png",
    },
    {
      id: "n-48",
      term_zh: "地圖",
      related_terms: [
        {
          term_target: "地図",
          pronunciation: ["ちず", "Chizu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "地図を見ます。",
          translation: "看地圖。",
        },
        {
          sentence: "地図を描きます。",
          translation: "畫地圖。",
        },
        {
          sentence: "グーグルマップ。",
          translation: "Google地圖。",
        },
      ],
      usage_note: "指引。",
      image_file: "map.png",
    },
    {
      id: "n-49",
      term_zh: "行政櫃檯／票口",
      related_terms: [
        {
          term_target: "カウンター",
          pronunciation: ["かうんたー", "Kauntaa"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "カウンターで払います。",
          translation: "在櫃檯結帳。",
        },
        {
          sentence: "案内カウンター。",
          translation: "服務台。",
        },
        {
          sentence: "カウンター席。",
          translation: "吧台座位。",
        },
      ],
      usage_note: "服務台或吧檯。",
      image_file: "counter.png",
    },
    {
      id: "n-50",
      term_zh: "大廳",
      related_terms: [
        {
          term_target: "ロビー",
          pronunciation: ["ろびー", "Robii"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "ロビーで待ちます。",
          translation: "在大廳等。",
        },
        {
          sentence: "ロビーに集合。",
          translation: "在大廳集合。",
        },
        {
          sentence: "ホテルのロビー。",
          translation: "飯店大廳。",
        },
      ],
      usage_note: "接待處。",
      image_file: "lobby.png",
    },
    {
      id: "n-51",
      term_zh: "預定",
      related_terms: [
        {
          term_target: "予約",
          pronunciation: ["よやく", "Yoyaku"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "予約しました。",
          translation: "預約了。",
        },
        {
          sentence: "予約をお願いします。",
          translation: "麻煩幫我預約。",
        },
        {
          sentence: "予約をキャンセルします。",
          translation: "取消預約。",
        },
      ],
      usage_note: "預約。",
      image_file: "reservation.png",
    },
    {
      id: "n-52",
      term_zh: "入住",
      related_terms: [
        {
          term_target: "チェックイン",
          pronunciation: ["ちぇっくいん", "Chekkuin"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "チェックインお願いします。",
          translation: "麻煩辦理入住。",
        },
        {
          sentence: "チェックインの時間。",
          translation: "入住時間。",
        },
        {
          sentence: "チェックインカウンター。",
          translation: "入住櫃台。",
        },
      ],
      usage_note: "Check-in。",
      image_file: "check_in.png",
    },
    {
      id: "n-53",
      term_zh: "退房",
      related_terms: [
        {
          term_target: "チェックアウト",
          pronunciation: ["ちぇっくあうと", "Chekkuauto"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "チェックアウトは何時ですか？",
          translation: "退房是幾點？",
        },
        {
          sentence: "チェックアウトをお願いします。",
          translation: "我要退房。",
        },
        {
          sentence: "チェックアウト前。",
          translation: "退房前。",
        },
      ],
      usage_note: "Check-out。",
      image_file: "check_out.png",
    },
    {
      id: "n-54",
      term_zh: "飲料",
      related_terms: [
        {
          term_target: "飲み物",
          pronunciation: ["のみもの", "Nomimono"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "飲み物は？",
          translation: "飲料呢？",
        },
        {
          sentence: "飲み物を買います。",
          translation: "買飲料。",
        },
        {
          sentence: "冷たい飲み物。",
          translation: "冷飲。",
        },
      ],
      usage_note: "飲品。",
      image_file: "drink.png",
    },
    {
      id: "n-55",
      term_zh: "菜單",
      related_terms: [
        {
          term_target: "メニュー",
          pronunciation: ["めにゅー", "Menyuu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "メニューをください。",
          translation: "請給菜單。",
        },
        {
          sentence: "英語のメニュー。",
          translation: "英文菜單。",
        },
        {
          sentence: "メニューを見ます。",
          translation: "看菜單。",
        },
      ],
      usage_note: "Menu。",
      image_file: "menu.png",
    },
    {
      id: "n-56",
      term_zh: "午餐",
      related_terms: [
        {
          term_target: "昼ごはん",
          pronunciation: ["ひるごはん", "Hirugohan"],
          specific_note: "",
        },
        {
          term_target: "ランチ",
          pronunciation: ["らんち", "Ranchi"],
          specific_note: "Lunch",
        },
      ],
      examples: [
        {
          sentence: "昼ごはんを食べます。",
          translation: "吃午餐。",
        },
        {
          sentence: "お昼ごはんを作ります。",
          translation: "做午餐。",
        },
        {
          sentence: "ランチタイム。",
          translation: "午餐時間。",
        },
      ],
      usage_note: "中餐。",
      image_file: "lunch.png",
    },
    {
      id: "n-57",
      term_zh: "晚餐",
      related_terms: [
        {
          term_target: "晩ごはん",
          pronunciation: ["ばんごはん", "Bangohan"],
          specific_note: "",
        },
        {
          term_target: "夕食",
          pronunciation: ["ゆうしょく", "Yuushoku"],
          specific_note: "較正式",
        },
      ],
      examples: [
        {
          sentence: "晩ごはんを食べます。",
          translation: "吃晚餐。",
        },
        {
          sentence: "晩ごはんを作ります。",
          translation: "煮晚餐。",
        },
        {
          sentence: "夕食の時間。",
          translation: "晚餐時間。",
        },
      ],
      usage_note: "晚餐。",
      image_file: "dinner.png",
    },
    {
      id: "n-58",
      term_zh: "帳單",
      related_terms: [
        {
          term_target: "お会計",
          pronunciation: ["おかいけい", "Okaikei"],
          specific_note: "結帳",
        },
        {
          term_target: "伝票",
          pronunciation: ["でんぴょう", "Denpyou"],
          specific_note: "帳單明細",
        },
      ],
      examples: [
        {
          sentence: "お会計お願いします。",
          translation: "麻煩結帳。",
        },
        {
          sentence: "私が払います。",
          translation: "我來付帳。",
        },
        {
          sentence: "別々でお願いします。",
          translation: "麻煩分開結帳。",
        },
      ],
      usage_note: "買單時常用 Okaikei。",
      image_file: "bill.png",
    },
    {
      id: "n-59",
      term_zh: "價錢",
      related_terms: [
        {
          term_target: "値段",
          pronunciation: ["ねだん", "Nedan"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "値段が高い。",
          translation: "價錢高。",
        },
        {
          sentence: "値段が安い。",
          translation: "價錢低。",
        },
        {
          sentence: "値段を見ます。",
          translation: "看價錢。",
        },
      ],
      usage_note: "價格。",
      image_file: "price.png",
    },
    {
      id: "n-60",
      term_zh: "收據",
      related_terms: [
        {
          term_target: "レシート",
          pronunciation: ["れしーと", "Reshiito"],
          specific_note: "一般收據",
        },
        {
          term_target: "領収書",
          pronunciation: ["りょうしゅうしょ", "Ryoushuusho"],
          specific_note: "報帳用",
        },
      ],
      examples: [
        {
          sentence: "レシートください。",
          translation: "請給收據。",
        },
        {
          sentence: "レシートはいりません。",
          translation: "不用收據。",
        },
        {
          sentence: "レシートを取ります。",
          translation: "拿收據。",
        },
      ],
      usage_note: "一般購物拿 Reshiito 即可。",
      image_file: "receipt.png",
    },
    {
      id: "n-61",
      term_zh: "尺寸",
      related_terms: [
        {
          term_target: "サイズ",
          pronunciation: ["さいず", "Saizu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "サイズが合わない。",
          translation: "尺寸不合。",
        },
        {
          sentence: "大きいサイズ。",
          translation: "大尺寸。",
        },
        {
          sentence: "サイズはありますか？",
          translation: "有這個尺寸嗎？",
        },
      ],
      usage_note: "大小。",
      image_file: "size.png",
    },
    {
      id: "n-62",
      term_zh: "入口",
      related_terms: [
        {
          term_target: "入口",
          pronunciation: ["いりぐち", "Iriguchi"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "入口はどこ？",
          translation: "入口在哪？",
        },
        {
          sentence: "狭い入口。",
          translation: "狹窄的入口。",
        },
        {
          sentence: "正面入口。",
          translation: "正面入口。",
        },
      ],
      usage_note: "進去的地方。",
      image_file: "entrance.png",
    },
    {
      id: "n-63",
      term_zh: "出口",
      related_terms: [
        {
          term_target: "出口",
          pronunciation: ["でぐち", "Deguchi"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "出口はあそこ。",
          translation: "出口在那。",
        },
        {
          sentence: "非常出口。",
          translation: "緊急出口。",
        },
        {
          sentence: "東口。",
          translation: "東邊出口。",
        },
      ],
      usage_note: "出去的地方。",
      image_file: "exit.png",
    },
    {
      id: "n-64",
      term_zh: "台灣",
      related_terms: [
        {
          term_target: "台湾",
          pronunciation: ["たいわん", "Taiwan"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "台湾から来ました。",
          translation: "來自台灣。",
        },
        {
          sentence: "台湾に行きます。",
          translation: "去台灣。",
        },
        {
          sentence: "台湾のお茶。",
          translation: "台灣的茶。",
        },
      ],
      usage_note: "地名。",
      image_file: "taiwan.png",
    },
    {
      id: "n-65",
      term_zh: "台灣人",
      related_terms: [
        {
          term_target: "台湾人",
          pronunciation: ["たいわんじん", "Taiwanjin"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私は台湾人です。",
          translation: "我是台灣人。",
        },
        {
          sentence: "親切な台湾人。",
          translation: "親切的台灣人。",
        },
        {
          sentence: "多くの台湾人。",
          translation: "很多台灣人。",
        },
      ],
      usage_note: "國籍。",
      image_file: "taiwanese.png",
    },
    {
      id: "n-66",
      term_zh: "一切事物",
      related_terms: [
        {
          term_target: "全部",
          pronunciation: ["ぜんぶ", "Zenbu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "全部好き。",
          translation: "全部喜歡。",
        },
        {
          sentence: "全部食べました。",
          translation: "全都吃光了。",
        },
        {
          sentence: "それで全部です。",
          translation: "那就是全部了。",
        },
      ],
      usage_note: "所有、全部。",
      image_file: "everything.png",
    },
    {
      id: "n-67",
      term_zh: "錢包",
      related_terms: [
        {
          term_target: "財布",
          pronunciation: ["さいふ", "Saifu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "財布を忘れた。",
          translation: "忘了錢包。",
        },
        {
          sentence: "財布を落としました。",
          translation: "錢包掉了。",
        },
        {
          sentence: "新しい財布。",
          translation: "新錢包。",
        },
      ],
      usage_note: "皮夾。",
      image_file: "wallet.png",
    },
    {
      id: "n-68",
      term_zh: "身分證",
      related_terms: [
        {
          term_target: "身分証",
          pronunciation: ["みぶんしょう", "Mibunshou"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "身分証を見せる。",
          translation: "出示證件。",
        },
        {
          sentence: "身分証を持っていますか？",
          translation: "你有帶身分證嗎？",
        },
        {
          sentence: "身分証のコピー。",
          translation: "身分證影本。",
        },
      ],
      usage_note: "ID。",
      image_file: "id.png",
    },
    {
      id: "n-69",
      term_zh: "護照",
      related_terms: [
        {
          term_target: "パスポート",
          pronunciation: ["ぱすぽーと", "Pasupooto"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "パスポートを見せます。",
          translation: "出示護照。",
        },
        {
          sentence: "パスポートを忘れました。",
          translation: "忘了護照。",
        },
        {
          sentence: "パスポート番号。",
          translation: "護照號碼。",
        },
      ],
      usage_note: "出國必備。",
      image_file: "passport.png",
    },
    {
      id: "n-70",
      term_zh: "餐廳",
      related_terms: [
        {
          term_target: "レストラン",
          pronunciation: ["れすとらん", "Resutoran"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "いいレストラン。",
          translation: "好的餐廳。",
        },
        {
          sentence: "フランス料理のレストラン。",
          translation: "法式餐廳。",
        },
        {
          sentence: "レストランを予約します。",
          translation: "預約餐廳。",
        },
      ],
      usage_note: "通常指西式餐廳。",
      image_file: "restaurant.png",
    },
    {
      id: "n-71",
      term_zh: "飯店",
      related_terms: [
        {
          term_target: "ホテル",
          pronunciation: ["ほてる", "Hoteru"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "ホテルを予約します。",
          translation: "訂飯店。",
        },
        {
          sentence: "きれいなホテル。",
          translation: "漂亮的飯店。",
        },
        {
          sentence: "ホテルに泊まります。",
          translation: "住飯店。",
        },
      ],
      usage_note: "住宿。",
      image_file: "hotel.png",
    },
    {
      id: "n-72",
      term_zh: "場所",
      related_terms: [
        {
          term_target: "場所",
          pronunciation: ["ばしょ", "Basho"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "場所はどこ？",
          translation: "地點在哪？",
        },
        {
          sentence: "集合場所。",
          translation: "集合地點。",
        },
        {
          sentence: "いい場所。",
          translation: "好地方。",
        },
      ],
      usage_note: "地點。",
      image_file: "place.png",
    },
    {
      id: "n-73",
      term_zh: "用品店員",
      related_terms: [
        {
          term_target: "店員",
          pronunciation: ["てんいん", "Tenin"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "店員を呼ぶ。",
          translation: "叫店員。",
        },
        {
          sentence: "店員に聞きます。",
          translation: "問店員。",
        },
        {
          sentence: "店員は忙しいです。",
          translation: "店員很忙。",
        },
      ],
      usage_note: "工作人員。",
      image_file: "clerk.png",
    },
    {
      id: "n-74",
      term_zh: "超市",
      related_terms: [
        {
          term_target: "スーパー",
          pronunciation: ["すーぱー", "Suupaa"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "スーパーで買う。",
          translation: "在超市買。",
        },
        {
          sentence: "スーパーに行きます。",
          translation: "去超市。",
        },
        {
          sentence: "安いスーパー。",
          translation: "便宜的超市。",
        },
      ],
      usage_note: "量販店。",
      image_file: "supermarket.png",
    },
    {
      id: "n-75",
      term_zh: "月台",
      related_terms: [
        {
          term_target: "ホーム",
          pronunciation: ["ほーむ", "Hoomu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "ホームで待つ。",
          translation: "在月台等。",
        },
        {
          sentence: "何番ホームですか？",
          translation: "是幾號月台？",
        },
        {
          sentence: "1番ホーム。",
          translation: "第一月台。",
        },
      ],
      usage_note: "車站月台。",
      image_file: "platform.png",
    },
    {
      id: "n-76",
      term_zh: "音樂",
      related_terms: [
        {
          term_target: "音楽",
          pronunciation: ["おんがく", "Ongaku"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "音楽を聴きます。",
          translation: "聽音樂。",
        },
        {
          sentence: "好きな音楽。",
          translation: "喜歡的音樂。",
        },
        {
          sentence: "いい音楽ですね。",
          translation: "很好的音樂呢。",
        },
      ],
      usage_note: "聽覺藝術。",
      image_file: "music.png",
    },
    {
      id: "n-77",
      term_zh: "雨",
      related_terms: [
        {
          term_target: "雨",
          pronunciation: ["あめ", "Ame"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "雨が降っています。",
          translation: "正在下雨。",
        },
        {
          sentence: "雨が止みました。",
          translation: "雨停了。",
        },
        {
          sentence: "激しい雨。",
          translation: "大雨。",
        },
      ],
      usage_note: "自然現象。",
      image_file: "rain.png",
    },
    {
      id: "n-78",
      term_zh: "照片",
      related_terms: [
        {
          term_target: "写真",
          pronunciation: ["しゃしん", "Shashin"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "写真を撮ります。",
          translation: "拍照片。",
        },
        {
          sentence: "写真を見せて。",
          translation: "讓我看照片。",
        },
        {
          sentence: "一緒に写真を撮ろう。",
          translation: "一起拍照吧。",
        },
      ],
      usage_note: "影像。",
      image_file: "picture.png",
    },
    {
      id: "n-79",
      term_zh: "書",
      related_terms: [
        {
          term_target: "本",
          pronunciation: ["ほん", "Hon"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "本を読みます。",
          translation: "看書。",
        },
        {
          sentence: "本を買いました。",
          translation: "買了書。",
        },
        {
          sentence: "面白い本。",
          translation: "有趣的書。",
        },
      ],
      usage_note: "書籍。",
      image_file: "book.png",
    },
    {
      id: "n-80",
      term_zh: "廁所",
      related_terms: [
        {
          term_target: "トイレ",
          pronunciation: ["といれ", "Toire"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "トイレはどこですか？",
          translation: "廁所在哪裡？",
        },
        {
          sentence: "トイレに行きます。",
          translation: "去上廁所。",
        },
        {
          sentence: "きれいなトイレ。",
          translation: "乾淨的廁所。",
        },
      ],
      usage_note: "洗手間 (片假名常用語)。",
      image_file: "restroom.png",
    },
    {
      id: "n-81",
      term_zh: "天氣",
      related_terms: [
        {
          term_target: "天気",
          pronunciation: ["てんき", "Tenki"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "いい天気ですね。",
          translation: "好天氣呢。",
        },
        {
          sentence: "明日の天気。",
          translation: "明天的天氣。",
        },
        {
          sentence: "天気予報。",
          translation: "天氣預報。",
        },
      ],
      usage_note: "氣候狀況。",
      image_file: "weather.png",
    },
    {
      id: "n-82",
      term_zh: "訊息",
      related_terms: [
        {
          term_target: "メッセージ",
          pronunciation: ["めっせーじ", "Messeeji"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "メッセージを送る。",
          translation: "傳訊息。",
        },
        {
          sentence: "メッセージが来ました。",
          translation: "訊息來了。",
        },
        {
          sentence: "メッセージを残す。",
          translation: "留訊息。",
        },
      ],
      usage_note: "信息、留言。",
      image_file: "message.png",
    },
  ],
},
{
  id: "adverbs",
  name: "副詞",
  items: [
    {
      id: "adv-01",
      term_zh: "現在",
      related_terms: [
        {
          term_target: "今",
          pronunciation: ["いま", "Ima"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "今、行きます。",
          translation: "我現在過去。",
        },
        {
          sentence: "今は忙しいです。",
          translation: "我現在很忙。",
        },
        {
          sentence: "今、何時ですか？",
          translation: "現在幾點？",
        },
      ],
      usage_note: "目前。",
      image_file: "now.png",
    },
    {
      id: "adv-02",
      term_zh: "非常",
      related_terms: [
        {
          term_target: "とても",
          pronunciation: ["とても", "Totemo"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "とてもおいしいです。",
          translation: "非常好吃。",
        },
        {
          sentence: "今日はとても暑いです。",
          translation: "今天非常熱。",
        },
        {
          sentence: "とても楽しかったです。",
          translation: "非常開心。",
        },
      ],
      usage_note: "強調程度。",
      image_file: "very.png",
    },
    {
      id: "adv-03",
      term_zh: "真的",
      related_terms: [
        {
          term_target: "本当に",
          pronunciation: ["ほんとうに", "Hontou ni"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "本当に？",
          translation: "真的嗎？",
        },
        {
          sentence: "本当にありがとうございます。",
          translation: "真的非常感謝。",
        },
        {
          sentence: "それは本当ですか？",
          translation: "那是真的嗎？",
        },
      ],
      usage_note: "確認或強調事實。",
      image_file: "really.png",
    },
    {
      id: "adv-04",
      term_zh: "好好地／很好地",
      related_terms: [
        {
          term_target: "よく",
          pronunciation: ["よく", "Yoku"],
          specific_note: "程度",
        },
      ],
      examples: [
        {
          sentence: "よく寝ました。",
          translation: "睡得很好。",
        },
        {
          sentence: "よくできました。",
          translation: "做得很好(Good job)。",
        },
        {
          sentence: "よくわかりません。",
          translation: "不太清楚(無法很好地理解)。",
        },
      ],
      usage_note: "表示程度良好。",
      image_file: "well.png",
    },
    {
      id: "adv-05",
      term_zh: "經常",
      related_terms: [
        {
          term_target: "よく",
          pronunciation: ["よく", "Yoku"],
          specific_note: "頻率",
        },
      ],
      examples: [
        {
          sentence: "よくここに来ます。",
          translation: "我常來這裡。",
        },
        {
          sentence: "映画をよく見ますか？",
          translation: "你常看電影嗎？",
        },
        {
          sentence: "彼はよく遅刻します。",
          translation: "他經常遲到。",
        },
      ],
      usage_note: "表示頻率高。與 adv-04 同字不同義。",
      image_file: "often.png",
    },
    {
      id: "adv-06",
      term_zh: "通常",
      related_terms: [
        {
          term_target: "たいてい",
          pronunciation: ["たいてい", "Taitei"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "たいてい6時に起きます。",
          translation: "通常六點起床。",
        },
        {
          sentence: "日曜日はたいてい家にいます。",
          translation: "星期天通常都在家。",
        },
        {
          sentence: "朝ごはんはたいていパンです。",
          translation: "早餐通常是麵包。",
        },
      ],
      usage_note: "習慣性動作。",
      image_file: "usually.png",
    },
    {
      id: "adv-07",
      term_zh: "已經",
      related_terms: [
        {
          term_target: "もう",
          pronunciation: ["もう", "Mou"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "もう食べました。",
          translation: "已經吃了。",
        },
        {
          sentence: "もう12時です。",
          translation: "已經12點了。",
        },
        {
          sentence: "もう帰りましたか？",
          translation: "已經回去了嗎？",
        },
      ],
      usage_note: "完成或狀態改變。",
      image_file: "already.png",
    },
    {
      id: "adv-08",
      term_zh: "只有",
      related_terms: [
        {
          term_target: "だけ",
          pronunciation: ["...だけ", "...dake"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "これだけです。",
          translation: "只有這個。",
        },
        {
          sentence: "あなただけです。",
          translation: "只有你。",
        },
        {
          sentence: "5分だけ待ってください。",
          translation: "請等我五分鐘就好。",
        },
      ],
      usage_note: "接在名詞或數量詞後面。",
      image_file: "only.png",
    },
    {
      id: "adv-09",
      term_zh: "再次",
      related_terms: [
        {
          term_target: "また",
          pronunciation: ["また", "Mata"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "また来ます。",
          translation: "會再來。",
        },
        {
          sentence: "また会いましょう。",
          translation: "下次見(再見面)。",
        },
        {
          sentence: "また明日。",
          translation: "明天見。",
        },
      ],
      usage_note: "重複動作。",
      image_file: "again.png",
    },
    {
      id: "adv-10",
      term_zh: "大約",
      related_terms: [
        {
          term_target: "ぐらい",
          pronunciation: ["ぐらい", "Gurai"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "10分ぐらいかかります。",
          translation: "大約花10分鐘。",
        },
        {
          sentence: "どれぐらい待ちますか？",
          translation: "要等大約多久？",
        },
        {
          sentence: "3000円ぐらいです。",
          translation: "大約3000日圓。",
        },
      ],
      usage_note: "接在數量詞後面。",
      image_file: "about.png",
    },
    {
      id: "adv-11",
      term_zh: "一點點",
      related_terms: [
        {
          term_target: "少し",
          pronunciation: ["すこし", "Sukoshi"],
          specific_note: "較正式",
        },
        {
          term_target: "ちょっと",
          pronunciation: ["ちょっと", "Chotto"],
          specific_note: "口語",
        },
      ],
      examples: [
        {
          sentence: "少し辛いです。",
          translation: "有一點辣。",
        },
        {
          sentence: "少し疲れました。",
          translation: "有點累了。",
        },
        {
          sentence: "日本語が少し話せます。",
          translation: "會說一點點日文。",
        },
      ],
      usage_note: "少量。口語常用 Chotto。",
      image_file: "a_little.png",
    },
    {
      id: "adv-12",
      term_zh: "也是",
      related_terms: [
        {
          term_target: "も",
          pronunciation: ["...も", "...mo"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私もそう思います。",
          translation: "我也這麼認為。",
        },
        {
          sentence: "これもください。",
          translation: "這個也請給我。",
        },
        {
          sentence: "明日も雨です。",
          translation: "明天也是雨天。",
        },
      ],
      usage_note: "助詞，接在名詞後。",
      image_file: "also.png",
    },
    {
      id: "adv-13",
      term_zh: "或許",
      related_terms: [
        {
          term_target: "たぶん",
          pronunciation: ["たぶん", "Tabun"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "たぶん大丈夫です。",
          translation: "大概沒問題。",
        },
        {
          sentence: "たぶん彼は来ません。",
          translation: "他大概不會來。",
        },
        {
          sentence: "たぶん雨が降るでしょう。",
          translation: "或許會下雨吧。",
        },
      ],
      usage_note: "推測，不確定。",
      image_file: "maybe.png",
    },
    {
      id: "adv-14",
      term_zh: "之後",
      related_terms: [
        {
          term_target: "あとで",
          pronunciation: ["あとで", "Atode"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "あとでやります。",
          translation: "稍後做。",
        },
        {
          sentence: "あとで電話します。",
          translation: "晚點打電話給你。",
        },
        {
          sentence: "またあとで。",
          translation: "待會見。",
        },
      ],
      usage_note: "稍後。",
      image_file: "later.png",
    },
    {
      id: "adv-15",
      term_zh: "很快",
      related_terms: [
        {
          term_target: "すぐに",
          pronunciation: ["すぐに", "Sugu ni"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "すぐに行きます。",
          translation: "馬上去。",
        },
        {
          sentence: "すぐに終わります。",
          translation: "很快就會結束。",
        },
        {
          sentence: "すぐに戻ります。",
          translation: "馬上回來。",
        },
      ],
      usage_note: "時間短暫、馬上。",
      image_file: "soon.png",
    },
    {
      id: "adv-16",
      term_zh: "一起",
      related_terms: [
        {
          term_target: "一緒に",
          pronunciation: ["いっしょに", "Issho ni"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "一緒に行きましょう。",
          translation: "一起去吧。",
        },
        {
          sentence: "一緒に写真を撮りませんか？",
          translation: "要不要一起拍張照？",
        },
        {
          sentence: "彼と一緒にいます。",
          translation: "我和他在一起。",
        },
      ],
      usage_note: "共同行動。",
      image_file: "together.png",
    },
    {
      id: "adv-17",
      term_zh: "仍然",
      related_terms: [
        {
          term_target: "まだ",
          pronunciation: ["まだ", "Mada"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "まだです。",
          translation: "還沒。",
        },
        {
          sentence: "まだ食べていません。",
          translation: "還沒吃。",
        },
        {
          sentence: "まだ雨が降っています。",
          translation: "還在下雨。",
        },
      ],
      usage_note: "持續狀態或尚未完成。",
      image_file: "still.png",
    },
    {
      id: "adv-18",
      term_zh: "一般來說",
      related_terms: [
        {
          term_target: "普通",
          pronunciation: ["ふつう", "Futsuu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "普通はそうです。",
          translation: "一般來說是那樣。",
        },
        {
          sentence: "朝は普通、パンを食べます。",
          translation: "早上一般都吃麵包。",
        },
        {
          sentence: "普通のサイズ。",
          translation: "普通尺寸。",
        },
      ],
      usage_note: "普通、通常。",
      image_file: "normally.png",
    },
    {
      id: "adv-19",
      term_zh: "立刻",
      related_terms: [
        {
          term_target: "すぐに",
          pronunciation: ["すぐに", "Sugu ni"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "すぐに来てください。",
          translation: "請立刻來。",
        },
        {
          sentence: "すぐに逃げてください。",
          translation: "請立刻逃跑。",
        },
        {
          sentence: "すぐに始めましょう。",
          translation: "立刻開始吧。",
        },
      ],
      usage_note: "比 adv-15 更強調急迫性，但用字相同。",
      image_file: "immediately.png",
    },
    {
      id: "adv-20",
      term_zh: "也不",
      related_terms: [
        {
          term_target: "も...ない",
          pronunciation: ["...も...ない", "...mo ...nai"],
          specific_note: "否定",
        },
      ],
      examples: [
        {
          sentence: "私も食べません。",
          translation: "我也不吃。",
        },
        {
          sentence: "お金もありません。",
          translation: "也沒錢。",
        },
        {
          sentence: "彼も知りません。",
          translation: "他也不知道。",
        },
      ],
      usage_note: "助詞 Mo 搭配否定句。",
      image_file: "neither.png",
    },
  ],
},
{
  id: "questions",
  name: "疑問詞",
  items: [
    {
      id: "q-01",
      term_zh: "什麼",
      related_terms: [
        {
          term_target: "何",
          pronunciation: ["なに / なん", "Nani / Nan"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "これは何ですか？",
          translation: "這是什麼？",
        },
        {
          sentence: "何が好きですか？",
          translation: "你喜歡什麼？",
        },
        {
          sentence: "何をしていますか？",
          translation: "你在做什麼？",
        },
      ],
      usage_note: "問事物。接 d/t/n 行音時常念 Nan (如 Nan desu ka)。",
      image_file: "what.png",
    },
    {
      id: "q-02",
      term_zh: "如何",
      related_terms: [
        {
          term_target: "どうやって",
          pronunciation: ["どうやって", "Douyatte"],
          specific_note: "問方法",
        },
        {
          term_target: "どう",
          pronunciation: ["どう", "Dou"],
          specific_note: "問狀態",
        },
      ],
      examples: [
        {
          sentence: "どうやって行きますか？",
          translation: "要怎麼去？(問交通方式)",
        },
        {
          sentence: "これはどうやって使いますか？",
          translation: "這要怎麼用？",
        },
        {
          sentence: "味はどうですか？",
          translation: "味道如何？",
        },
      ],
      usage_note: "Douyatte 問方法步驟，Dou 問感想或狀態。",
      image_file: "how.png",
    },
    {
      id: "q-03",
      term_zh: "何時",
      related_terms: [
        {
          term_target: "いつ",
          pronunciation: ["いつ", "Itsu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "いつ行きますか？",
          translation: "什麼時候去？",
        },
        {
          sentence: "誕生日はいつですか？",
          translation: "生日是什麼時候？",
        },
        {
          sentence: "いつ終わりますか？",
          translation: "什麼時候結束？",
        },
      ],
      usage_note: "問時間。",
      image_file: "when.png",
    },
    {
      id: "q-04",
      term_zh: "哪裡",
      related_terms: [
        {
          term_target: "どこ",
          pronunciation: ["どこ", "Doko"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "トイレはどこですか？",
          translation: "廁所在哪裡？",
        },
        {
          sentence: "どこに住んでいますか？",
          translation: "你住在哪裡？",
        },
        {
          sentence: "どこへ行きますか？",
          translation: "你要去哪裡？",
        },
      ],
      usage_note: "問地點。",
      image_file: "where.png",
    },
    {
      id: "q-05",
      term_zh: "誰",
      related_terms: [
        {
          term_target: "誰",
          pronunciation: ["だれ", "Dare"],
          specific_note: "一般",
        },
        {
          term_target: "どなた",
          pronunciation: ["どなた", "Donata"],
          specific_note: "禮貌",
        },
      ],
      examples: [
        {
          sentence: "あれは誰ですか？",
          translation: "那是誰？",
        },
        {
          sentence: "誰が来ますか？",
          translation: "誰會來？",
        },
        {
          sentence: "失礼ですが、どなたですか？",
          translation: "不好意思，請問您是哪位？",
        },
      ],
      usage_note: "問人。",
      image_file: "who.png",
    },
    {
      id: "q-06",
      term_zh: "為什麼",
      related_terms: [
        {
          term_target: "なぜ",
          pronunciation: ["なぜ", "Naze"],
          specific_note: "正式/書面",
        },
        {
          term_target: "どうして",
          pronunciation: ["どうして", "Doushite"],
          specific_note: "口語/常用",
        },
      ],
      examples: [
        {
          sentence: "どうしてですか？",
          translation: "為什麼？",
        },
        {
          sentence: "なぜ来なかったのですか？",
          translation: "為什麼沒有來？",
        },
        {
          sentence: "どうして遅れましたか？",
          translation: "為什麼遲到了？",
        },
      ],
      usage_note: "口語常用 Doushite。",
      image_file: "why.png",
    },
    {
      id: "q-07",
      term_zh: "哪一個",
      related_terms: [
        {
          term_target: "どれ",
          pronunciation: ["どれ", "Dore"],
          specific_note: "三個以上選一個",
        },
        {
          term_target: "どっち",
          pronunciation: ["どっち", "Docchi"],
          specific_note: "二選一(口語)",
        },
      ],
      examples: [
        {
          sentence: "どれですか？",
          translation: "是哪一個？",
        },
        {
          sentence: "どれが好きですか？",
          translation: "你喜歡哪一個？",
        },
        {
          sentence: "あなたの傘はどれですか？",
          translation: "你的傘是哪一把？",
        },
      ],
      usage_note: "Dore 用於三者以上的選擇。",
      image_file: "which.png",
    },
    {
      id: "q-08",
      term_zh: "多少（數量/金錢）",
      related_terms: [
        {
          term_target: "いくら",
          pronunciation: ["いくら", "Ikura"],
          specific_note: "金額",
        },
        {
          term_target: "いくつ",
          pronunciation: ["いくつ", "Ikutsu"],
          specific_note: "個數/年齡",
        },
      ],
      examples: [
        {
          sentence: "これはいくらですか？",
          translation: "這個多少錢？",
        },
        {
          sentence: "椅子はいくつありますか？",
          translation: "有多少張椅子？",
        },
        {
          sentence: "お子さんはおいくつですか？",
          translation: "您的孩子幾歲了？",
        },
      ],
      usage_note: "Ikura 問錢，Ikutsu 問個數或年齡。",
      image_file: "how_much.png",
    },
    {
      id: "q-09",
      term_zh: "多久（時間/程度）",
      related_terms: [
        {
          term_target: "どのくらい",
          pronunciation: ["どのくらい", "Dono kurai"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "どのくらいかかりますか？",
          translation: "要花多久時間？",
        },
        {
          sentence: "どのくらい待ちましたか？",
          translation: "等了多久？",
        },
        {
          sentence: "距離はどのくらいですか？",
          translation: "距離大約多遠？",
        },
      ],
      usage_note: "詢問時間長度、距離或程度。",
      image_file: "how_long.png",
    },
    {
      id: "q-10",
      term_zh: "幾點",
      related_terms: [
        {
          term_target: "何時",
          pronunciation: ["なんじ", "Nanji"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "今、何時ですか？",
          translation: "現在幾點？",
        },
        {
          sentence: "何時に会いますか？",
          translation: "幾點見面？",
        },
        {
          sentence: "何時に始まりますか？",
          translation: "幾點開始？",
        },
      ],
      usage_note: "問具體時刻。",
      image_file: "what_time.png",
    },
    {
      id: "q-11",
      term_zh: "幾歲",
      related_terms: [
        {
          term_target: "何歳",
          pronunciation: ["なんさい", "Nansai"],
          specific_note: "一般",
        },
        {
          term_target: "おいくつ",
          pronunciation: ["おいくつ", "Oikutsu"],
          specific_note: "禮貌",
        },
      ],
      examples: [
        {
          sentence: "何歳ですか？",
          translation: "你幾歲？",
        },
        {
          sentence: "彼は何歳ですか？",
          translation: "他幾歲？",
        },
        {
          sentence: "失礼ですが、おいくつですか？",
          translation: "冒昧請問，您貴庚？(禮貌)",
        },
      ],
      usage_note: "詢問年齡。對長輩或上級建議用「おいくつ」。",
      image_file: "how_old.png",
    },
  ],
},
{
  id: "time_place",
  name: "表達場所和時間的單字",
  items: [
    {
      id: "tp-01",
      term_zh: "現在",
      related_terms: [
        {
          term_target: "今",
          pronunciation: ["いま", "Ima"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "今、行きます。",
          translation: "我現在過去。",
        },
        {
          sentence: "今は忙しいです。",
          translation: "現在很忙。",
        },
        {
          sentence: "今、何時ですか？",
          translation: "現在幾點？",
        },
      ],
      usage_note: "目前。",
      image_file: "now.png",
    },
    {
      id: "tp-02",
      term_zh: "今天",
      related_terms: [
        {
          term_target: "今日",
          pronunciation: ["きょう", "Kyou"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "今日は暑いです。",
          translation: "今天很熱。",
        },
        {
          sentence: "今日、暇ですか？",
          translation: "你今天有空嗎？",
        },
        {
          sentence: "今日は日曜日です。",
          translation: "今天是星期天。",
        },
      ],
      usage_note: "本日。",
      image_file: "today.png",
    },
    {
      id: "tp-03",
      term_zh: "明天",
      related_terms: [
        {
          term_target: "明日",
          pronunciation: ["あした", "Ashita"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "また明日。",
          translation: "明天見。",
        },
        {
          sentence: "明日は雨です。",
          translation: "明天會下雨。",
        },
        {
          sentence: "明日、映画を見ます。",
          translation: "明天要看電影。",
        },
      ],
      usage_note: "隔天。較正式場合有時讀 Asu。",
      image_file: "tomorrow.png",
    },
    {
      id: "tp-04",
      term_zh: "昨天",
      related_terms: [
        {
          term_target: "昨日",
          pronunciation: ["きのう", "Kinou"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "昨日は楽しかったです。",
          translation: "昨天很開心。",
        },
        {
          sentence: "昨日の夜。",
          translation: "昨天晚上。",
        },
        {
          sentence: "昨日、何をしましたか？",
          translation: "你昨天做了什麼？",
        },
      ],
      usage_note: "前一天。",
      image_file: "yesterday.png",
    },
    {
      id: "tp-05",
      term_zh: "這裡",
      related_terms: [
        {
          term_target: "ここ",
          pronunciation: ["ここ", "Koko"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "ここに来てください。",
          translation: "請來這裡。",
        },
        {
          sentence: "ここはどこですか？",
          translation: "這裡是哪裡？",
        },
        {
          sentence: "ここに置いてください。",
          translation: "請放在這裡。",
        },
      ],
      usage_note: "近處 (說話者所在地)。",
      image_file: "here.png",
    },
    {
      id: "tp-06",
      term_zh: "那裡",
      related_terms: [
        {
          term_target: "そこ",
          pronunciation: ["そこ", "Soko"],
          specific_note: "對方那",
        },
        {
          term_target: "あそこ",
          pronunciation: ["あそこ", "Asoko"],
          specific_note: "遠處",
        },
      ],
      examples: [
        {
          sentence: "あそこに行きます。",
          translation: "去那裡 (遠處)。",
        },
        {
          sentence: "そこに座ってください。",
          translation: "請坐在那裡 (對方附近)。",
        },
        {
          sentence: "あそこにコンビニがあります。",
          translation: "那邊有一家便利商店。",
        },
      ],
      usage_note: "Soko(對方那/中距離), Asoko(雙方都遠的地方)。",
      image_file: "there.png",
    },
    {
      id: "tp-07",
      term_zh: "天（日期）",
      related_terms: [
        {
          term_target: "日",
          pronunciation: ["ひ", "Hi"],
          specific_note: "日子",
        },
        {
          term_target: "一日",
          pronunciation: ["いちにち", "Ichinichi"],
          specific_note: "一天",
        },
      ],
      examples: [
        {
          sentence: "ある日。",
          translation: "某一天。",
        },
        {
          sentence: "いい日ですね。",
          translation: "真是美好的一天。",
        },
        {
          sentence: "一日中忙しい。",
          translation: "忙了一整天。",
        },
      ],
      usage_note: "日子。",
      image_file: "day.png",
    },
    {
      id: "tp-08",
      term_zh: "年",
      related_terms: [
        {
          term_target: "年",
          pronunciation: ["とし", "Toshi"],
          specific_note: "年歲/年份",
        },
        {
          term_target: "一年",
          pronunciation: ["いちねん", "Ichinen"],
          specific_note: "一年",
        },
      ],
      examples: [
        {
          sentence: "今年。",
          translation: "今年 (Kotoshi)。",
        },
        {
          sentence: "来年。",
          translation: "明年 (Rainen)。",
        },
        {
          sentence: "年に一回。",
          translation: "一年一次。",
        },
      ],
      usage_note: "年度。",
      image_file: "year.png",
    },
    {
      id: "tp-09",
      term_zh: "月",
      related_terms: [
        {
          term_target: "月",
          pronunciation: ["つき", "Tsuki"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "今月。",
          translation: "這個月 (Kongetsu)。",
        },
        {
          sentence: "先月。",
          translation: "上個月 (Sengetsu)。",
        },
        {
          sentence: "月が出ている。",
          translation: "月亮出來了。",
        },
      ],
      usage_note: "月份、月亮。",
      image_file: "month.png",
    },
    {
      id: "tp-10",
      term_zh: "週",
      related_terms: [
        {
          term_target: "週",
          pronunciation: ["しゅう", "Shuu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "来週。",
          translation: "下週 (Raishuu)。",
        },
        {
          sentence: "今週の土曜日。",
          translation: "這週六 (Konshuu)。",
        },
        {
          sentence: "週に三回。",
          translation: "一週三次。",
        },
      ],
      usage_note: "星期、週。",
      image_file: "week.png",
    },
    {
      id: "tp-11",
      term_zh: "早上",
      related_terms: [
        {
          term_target: "朝",
          pronunciation: ["あさ", "Asa"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "朝ごはん。",
          translation: "早餐。",
        },
        {
          sentence: "毎朝コーヒーを飲みます。",
          translation: "每天早上喝咖啡。",
        },
        {
          sentence: "朝早く。",
          translation: "一早。",
        },
      ],
      usage_note: "上午。",
      image_file: "morning.png",
    },
    {
      id: "tp-12",
      term_zh: "下午",
      related_terms: [
        {
          term_target: "午後",
          pronunciation: ["ごご", "Gogo"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "午後2時。",
          translation: "下午2點。",
        },
        {
          sentence: "午後の紅茶。",
          translation: "午後紅茶。",
        },
        {
          sentence: "午後から雨です。",
          translation: "下午開始會下雨。",
        },
      ],
      usage_note: "PM。",
      image_file: "afternoon.png",
    },
    {
      id: "tp-13",
      term_zh: "晚上",
      related_terms: [
        {
          term_target: "夜",
          pronunciation: ["よる", "Yoru"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "夜ごはん。",
          translation: "晚餐。",
        },
        {
          sentence: "夜遅く。",
          translation: "深夜。",
        },
        {
          sentence: "今日の夜、空いてますか？",
          translation: "今天晚上有空嗎？",
        },
      ],
      usage_note: "太陽下山後。",
      image_file: "night.png",
    },
    {
      id: "tp-14",
      term_zh: "中午",
      related_terms: [
        {
          term_target: "正午",
          pronunciation: ["しょうご", "Shougo"],
          specific_note: "12:00整",
        },
        {
          term_target: "お昼",
          pronunciation: ["おひる", "Ohiru"],
          specific_note: "午餐時間",
        },
      ],
      examples: [
        {
          sentence: "お昼です。",
          translation: "中午了(也是午餐時間)。",
        },
        {
          sentence: "お昼を食べましょう。",
          translation: "吃午餐吧。",
        },
        {
          sentence: "正午に出発します。",
          translation: "正午出發。",
        },
      ],
      usage_note: "Ohiru 常用於日常對話。",
      image_file: "noon.png",
    },
    {
      id: "tp-15",
      term_zh: "前面",
      related_terms: [
        {
          term_target: "前",
          pronunciation: ["まえ", "Mae"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "駅の前。",
          translation: "車站前。",
        },
        {
          sentence: "前に進みます。",
          translation: "往前進。",
        },
        {
          sentence: "この前。",
          translation: "之前(不久前)。",
        },
      ],
      usage_note: "前方、之前。",
      image_file: "front.png",
    },
    {
      id: "tp-16",
      term_zh: "後面",
      related_terms: [
        {
          term_target: "後ろ",
          pronunciation: ["うしろ", "Ushiro"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "ドアの後ろ。",
          translation: "門後。",
        },
        {
          sentence: "後ろを見てください。",
          translation: "請看後面。",
        },
        {
          sentence: "車の後ろ。",
          translation: "車子後面。",
        },
      ],
      usage_note: "後方。",
      image_file: "behind.png",
    },
    {
      id: "tp-17",
      term_zh: "左邊",
      related_terms: [
        {
          term_target: "左",
          pronunciation: ["ひだり", "Hidari"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "左に曲がります。",
          translation: "左轉。",
        },
        {
          sentence: "左手。",
          translation: "左手。",
        },
        {
          sentence: "一番左。",
          translation: "最左邊。",
        },
      ],
      usage_note: "左。",
      image_file: "left.png",
    },
    {
      id: "tp-18",
      term_zh: "右邊",
      related_terms: [
        {
          term_target: "右",
          pronunciation: ["みぎ", "Migi"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "右を見てください。",
          translation: "請看右邊。",
        },
        {
          sentence: "右側。",
          translation: "右側。",
        },
        {
          sentence: "右折します。",
          translation: "右轉 (Usetsu, 較正式)。",
        },
      ],
      usage_note: "右。",
      image_file: "right.png",
    },
    {
      id: "tp-19",
      term_zh: "旁邊",
      related_terms: [
        {
          term_target: "横",
          pronunciation: ["よこ", "Yoko"],
          specific_note: "旁邊(水平)",
        },
        {
          term_target: "隣",
          pronunciation: ["となり", "Tonari"],
          specific_note: "隔壁(同類)",
        },
      ],
      examples: [
        {
          sentence: "私の隣。",
          translation: "我隔壁(的人/物)。",
        },
        {
          sentence: "横に座ります。",
          translation: "坐在旁邊。",
        },
        {
          sentence: "隣の部屋。",
          translation: "隔壁房間。",
        },
      ],
      usage_note: "Tonari 通常指緊鄰的同類事物。",
      image_file: "beside.png",
    },
    {
      id: "tp-20",
      term_zh: "對面",
      related_terms: [
        {
          term_target: "向かい",
          pronunciation: ["むかい", "Mukai"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "駅の向かい。",
          translation: "車站對面。",
        },
        {
          sentence: "向かいの家。",
          translation: "對面的房子。",
        },
        {
          sentence: "斜め向かい。",
          translation: "斜對面。",
        },
      ],
      usage_note: "對側。",
      image_file: "across_from.png",
    },
    {
      id: "tp-21",
      term_zh: "春天",
      related_terms: [
        {
          term_target: "春",
          pronunciation: ["はる", "Haru"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "春が来た。",
          translation: "春天來了。",
        },
        {
          sentence: "春休み。",
          translation: "春假。",
        },
        {
          sentence: "暖かい春。",
          translation: "溫暖的春天。",
        },
      ],
      usage_note: "季節。",
      image_file: "spring.png",
    },
    {
      id: "tp-22",
      term_zh: "夏天",
      related_terms: [
        {
          term_target: "夏",
          pronunciation: ["なつ", "Natsu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "暑い夏。",
          translation: "炎熱的夏天。",
        },
        {
          sentence: "夏休み。",
          translation: "暑假。",
        },
        {
          sentence: "日本の夏。",
          translation: "日本的夏天。",
        },
      ],
      usage_note: "季節。",
      image_file: "summer.png",
    },
    {
      id: "tp-23",
      term_zh: "秋天",
      related_terms: [
        {
          term_target: "秋",
          pronunciation: ["あき", "Aki"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "秋が好き。",
          translation: "喜歡秋天。",
        },
        {
          sentence: "秋の紅葉。",
          translation: "秋天的紅葉。",
        },
        {
          sentence: "食欲の秋。",
          translation: "食慾之秋。",
        },
      ],
      usage_note: "季節。",
      image_file: "autumn.png",
    },
    {
      id: "tp-24",
      term_zh: "冬天",
      related_terms: [
        {
          term_target: "冬",
          pronunciation: ["ふゆ", "Fuyu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "冬は寒い。",
          translation: "冬天很冷。",
        },
        {
          sentence: "冬休み。",
          translation: "寒假。",
        },
        {
          sentence: "冬の北海道。",
          translation: "冬天的北海道。",
        },
      ],
      usage_note: "季節。",
      image_file: "winter.png",
    },
  ],
},
{
    "id": "conjunctions",
    "name": "連接詞",
    "items": [
      {
        "id": "conj-01",
        "term_zh": "或者",
        "related_terms": [
          {
            "term_target": "または",
            "pronunciation": ["または", "Matawa"],
            "specific_note": "正式/書面"
          },
          {
            "term_target": "それとも",
            "pronunciation": ["それとも", "Soretomo"],
            "specific_note": "用於疑問句"
          }
        ],
        "examples": [
          {
            "sentence": "お茶ですか、それともコーヒーですか？",
            "translation": "茶還是咖啡？"
          },
          {
            "sentence": "これがいいですか、それともあれですか？",
            "translation": "你想要這個還是那個？"
          },
          {
            "sentence": "彼はアメリカ人ですか、それともイギリス人ですか？",
            "translation": "他是美國人還是英國人？"
          }
        ],
        "usage_note": "二選一。口語常用「〜か〜」。",
        "image_file": "or.png"
      },
      {
        "id": "conj-02",
        "term_zh": "但是",
        "related_terms": [
          {
            "term_target": "でも",
            "pronunciation": ["でも", "Demo"],
            "specific_note": "口語常用"
          },
          {
            "term_target": "しかし",
            "pronunciation": ["しかし", "Shikashi"],
            "specific_note": "較正式"
          }
        ],
        "examples": [
          {
            "sentence": "好きですが、高いです。",
            "translation": "我喜歡它，但是它很貴。"
          },
          {
            "sentence": "行きたいですが、行けません。",
            "translation": "我想去，但是我不能去。"
          },
          {
            "sentence": "彼は小さいですが、強いです。",
            "translation": "他個子小但很強壯。"
          }
        ],
        "usage_note": "語氣轉折。句中常用助詞「が」。",
        "image_file": "but.png"
      },
      {
        "id": "conj-03",
        "term_zh": "所以",
        "related_terms": [
          {
            "term_target": "だから",
            "pronunciation": ["だから", "Dakara"],
            "specific_note": "口語"
          },
          {
            "term_target": "ので",
            "pronunciation": ["ので", "Node"],
            "specific_note": "接續詞"
          }
        ],
        "examples": [
          {
            "sentence": "お腹が空いたので、食べました。",
            "translation": "我餓了，所以我吃了。"
          },
          {
            "sentence": "雨が降っているので、傘を持って行ってください。",
            "translation": "正在下雨，所以帶把傘吧。"
          },
          {
            "sentence": "疲れていたので、寝ました。",
            "translation": "我累了，所以我去睡覺。"
          }
        ],
        "usage_note": "表示結果。",
        "image_file": "so.png"
      },
      {
        "id": "conj-04",
        "term_zh": "以及／和",
        "related_terms": [
          {
            "term_target": "と",
            "pronunciation": ["と", "To"],
            "specific_note": "連接名詞"
          },
          {
            "term_target": "そして",
            "pronunciation": ["そして", "Soshite"],
            "specific_note": "連接句子"
          }
        ],
        "examples": [
          {
            "sentence": "あなたと私。",
            "translation": "你和我。"
          },
          {
            "sentence": "黒と白。",
            "translation": "黑色和白色。"
          },
          {
            "sentence": "彼女は頭が良くて、美しいです。",
            "translation": "她既聰明又漂亮 (用形容詞te形連接)。"
          }
        ],
        "usage_note": "連接兩者。",
        "image_file": "and.png"
      },
      {
        "id": "conj-05",
        "term_zh": "因為",
        "related_terms": [
          {
            "term_target": "から",
            "pronunciation": ["から", "Kara"],
            "specific_note": "主觀原因/口語"
          },
          {
            "term_target": "なぜなら",
            "pronunciation": ["なぜなら", "Nazenara"],
            "specific_note": "解釋原因/書面"
          }
        ],
        "examples": [
          {
            "sentence": "お腹が空いたから、食べます。",
            "translation": "我吃東西是因為我餓了。"
          },
          {
            "sentence": "忙しいから、行けません。",
            "translation": "我不能去，因為我很忙。"
          },
          {
            "sentence": "彼女は嬉しかったから、笑いました。",
            "translation": "她笑了，因為她很開心。"
          }
        ],
        "usage_note": "表示原因。日文中原因子句在前（加上から），結果在後。",
        "image_file": "because.png"
      }
    ]
  },
  {
    "id": "prepositions",
    "name": "介系詞",
    "items": [
      {
        "id": "prep-01",
        "term_zh": "和...一起",
        "related_terms": [
          {
            "term_target": "と一緒に",
            "pronunciation": ["といっしょに", "To issho ni"],
            "specific_note": "伴隨"
          }
        ],
        "examples": [
          {
            "sentence": "私と一緒に来てください。",
            "translation": "跟我來。"
          },
          {
            "sentence": "家族と住んでいます。",
            "translation": "我跟家人住。"
          },
          {
            "sentence": "ミルク入りコーヒー。",
            "translation": "加牛奶的咖啡 (日文習慣用含入)。"
          }
        ],
        "usage_note": "名詞 + と (to)。",
        "image_file": "with.png"
      },
      {
        "id": "prep-02",
        "term_zh": "從...",
        "related_terms": [
          {
            "term_target": "から",
            "pronunciation": ["から", "Kara"],
            "specific_note": "來源"
          }
        ],
        "examples": [
          {
            "sentence": "台湾から来ました。",
            "translation": "我來自台灣。"
          },
          {
            "sentence": "お店は9時から5時までです。",
            "translation": "商店從9點開到5點。"
          },
          {
            "sentence": "ここから遠いです。",
            "translation": "離這裡很遠。"
          }
        ],
        "usage_note": "起點/來源。",
        "image_file": "from.png"
      },
      {
        "id": "prep-03",
        "term_zh": "為了...",
        "related_terms": [
          {
            "term_target": "のために",
            "pronunciation": ["のために", "No tame ni"],
            "specific_note": "目的"
          }
        ],
        "examples": [
          {
            "sentence": "これはあなたのためです。",
            "translation": "這是給你的 (為了你)。"
          },
          {
            "sentence": "手伝ってくれてありがとう。",
            "translation": "謝謝你的幫忙 (日文結構不同，意譯)。"
          },
          {
            "sentence": "鍵を探しています。",
            "translation": "我在找我的鑰匙 (search for = sagasu)。"
          }
        ],
        "usage_note": "名詞 + のために。",
        "image_file": "for.png"
      },
      {
        "id": "prep-04",
        "term_zh": "...的",
        "related_terms": [
          {
            "term_target": "の",
            "pronunciation": ["の", "No"],
            "specific_note": "所有格"
          }
        ],
        "examples": [
          {
            "sentence": "一杯のお茶。",
            "translation": "一杯茶。"
          },
          {
            "sentence": "私の友達の一人。",
            "translation": "我的一個朋友。"
          },
          {
            "sentence": "車の色。",
            "translation": "車子的顏色。"
          }
        ],
        "usage_note": "名詞 + の + 名詞。",
        "image_file": "of.png"
      },
      {
        "id": "prep-05",
        "term_zh": "在... (場所)",
        "related_terms": [
          {
            "term_target": "に",
            "pronunciation": ["に", "Ni"],
            "specific_note": "存在位置"
          },
          {
            "term_target": "で",
            "pronunciation": ["で", "De"],
            "specific_note": "動作場所"
          }
        ],
        "examples": [
          {
            "sentence": "私は家にいます。",
            "translation": "我在家 (存在)。"
          },
          {
            "sentence": "彼女は部屋にいます。",
            "translation": "她在房間裡。"
          },
          {
            "sentence": "5時に会いましょう。",
            "translation": "5點見 (at也用於時間)。"
          }
        ],
        "usage_note": "Ni 指靜態存在，De 指動態發生地。",
        "image_file": "at_in.png"
      },
      {
        "id": "prep-06",
        "term_zh": "往... (去)",
        "related_terms": [
          {
            "term_target": "へ",
            "pronunciation": ["へ", "E"],
            "specific_note": "方向"
          },
          {
            "term_target": "に",
            "pronunciation": ["に", "Ni"],
            "specific_note": "目的地"
          }
        ],
        "examples": [
          {
            "sentence": "学校へ行きます。",
            "translation": "去學校。"
          },
          {
            "sentence": "お誕生日おめでとう。",
            "translation": "祝你生日快樂 (Happy Birthday to you)。"
          },
          {
            "sentence": "私にください。",
            "translation": "把它給我 (Give to me)。"
          }
        ],
        "usage_note": "移動的方向或對象。",
        "image_file": "to.png"
      }
    ]
  },
{
  id: "numbers",
  name: "基本的數字",
  items: [
    {
      id: "num-0",
      term_zh: "0",
      related_terms: [
        {
          term_target: "ゼロ",
          pronunciation: ["ぜろ", "Zero"],
          specific_note: "外來語",
        },
        {
          term_target: "零",
          pronunciation: ["れい", "Rei"],
          specific_note: "漢字讀音",
        },
      ],
      examples: [
        {
          sentence: "ゼロです。",
          translation: "是零。",
        },
        {
          sentence: "零度。",
          translation: "零度 (Reido)。",
        },
        {
          sentence: "ゼロから始める。",
          translation: "從零開始。",
        },
      ],
      usage_note: "一般數字唸 Zero，氣溫或小數點唸 Rei。",
      image_file: "zero.png",
    },
    {
      id: "num-1",
      term_zh: "1",
      related_terms: [
        {
          term_target: "一",
          pronunciation: ["いち", "Ichi"],
          specific_note: "數字",
        },
        {
          term_target: "一つ",
          pronunciation: ["ひとつ", "Hitotsu"],
          specific_note: "個數",
        },
      ],
      examples: [
        {
          sentence: "一つください。",
          translation: "請給我一個。",
        },
        {
          sentence: "一階。",
          translation: "一樓 (Ikkai)。",
        },
        {
          sentence: "一番。",
          translation: "第一名 (Ichiban)。",
        },
      ],
      usage_note: "單純數字唸 Ichi，數東西(無單位)唸 Hitotsu。",
      image_file: "one.png",
    },
    {
      id: "num-2",
      term_zh: "2",
      related_terms: [
        {
          term_target: "二",
          pronunciation: ["に", "Ni"],
          specific_note: "數字",
        },
        {
          term_target: "二つ",
          pronunciation: ["ふたつ", "Futatsu"],
          specific_note: "個數",
        },
      ],
      examples: [
        {
          sentence: "二つください。",
          translation: "請給我兩個。",
        },
        {
          sentence: "二時。",
          translation: "兩點 (Niji)。",
        },
        {
          sentence: "二階。",
          translation: "二樓 (Nikai)。",
        },
      ],
      usage_note: "單純數字唸 Ni，數東西(無單位)唸 Futatsu。",
      image_file: "two.png",
    },
    {
      id: "num-3",
      term_zh: "3",
      related_terms: [
        {
          term_target: "三",
          pronunciation: ["さん", "San"],
          specific_note: "數字",
        },
        {
          term_target: "三つ",
          pronunciation: ["みっつ", "Mittsu"],
          specific_note: "個數",
        },
      ],
      examples: [
        {
          sentence: "三つください。",
          translation: "請給我三個。",
        },
        {
          sentence: "三人。",
          translation: "三個人 (Sannin)。",
        },
        {
          sentence: "三月。",
          translation: "三月 (Sangatsu)。",
        },
      ],
      usage_note: "單純數字唸 San，數東西(無單位)唸 Mittsu。",
      image_file: "three.png",
    },
    {
      id: "num-4",
      term_zh: "4",
      related_terms: [
        {
          term_target: "四",
          pronunciation: ["よん", "Yon"],
          specific_note: "常用",
        },
        {
          term_target: "し",
          pronunciation: ["し", "Shi"],
          specific_note: "月份/時間",
        },
      ],
      examples: [
        {
          sentence: "四時。",
          translation: "四點 (Yoji)。",
        },
        {
          sentence: "四月。",
          translation: "四月 (Shigatsu)。",
        },
        {
          sentence: "四つあります。",
          translation: "有四個 (Yottsu)。",
        },
      ],
      usage_note: "通常念 Yon，但在時間、月份念 Shi 或 Yo。",
      image_file: "four.png",
    },
    {
      id: "num-5",
      term_zh: "5",
      related_terms: [
        {
          term_target: "五",
          pronunciation: ["ご", "Go"],
          specific_note: "數字",
        },
        {
          term_target: "五つ",
          pronunciation: ["いつつ", "Itsutsu"],
          specific_note: "個數",
        },
      ],
      examples: [
        {
          sentence: "五つください。",
          translation: "請給我五個。",
        },
        {
          sentence: "五円。",
          translation: "五圓 (Goen)。",
        },
        {
          sentence: "五時。",
          translation: "五點 (Goji)。",
        },
      ],
      usage_note: "單純數字唸 Go，數東西(無單位)唸 Itsutsu。",
      image_file: "five.png",
    },
    {
      id: "num-6",
      term_zh: "6",
      related_terms: [
        {
          term_target: "六",
          pronunciation: ["ろく", "Roku"],
          specific_note: "數字",
        },
        {
          term_target: "六つ",
          pronunciation: ["むっつ", "Muttsu"],
          specific_note: "個數",
        },
      ],
      examples: [
        {
          sentence: "六つ。",
          translation: "六個。",
        },
        {
          sentence: "六時。",
          translation: "六點 (Rokuji)。",
        },
        {
          sentence: "六百。",
          translation: "六百 (Roppyaku)。",
        },
      ],
      usage_note: "單純數字唸 Roku，數東西(無單位)唸 Muttsu。",
      image_file: "six.png",
    },
    {
      id: "num-7",
      term_zh: "7",
      related_terms: [
        {
          term_target: "七",
          pronunciation: ["なな", "Nana"],
          specific_note: "常用",
        },
        {
          term_target: "しち",
          pronunciation: ["しち", "Shichi"],
          specific_note: "月份/時間",
        },
      ],
      examples: [
        {
          sentence: "七時。",
          translation: "七點 (Shichiji)。",
        },
        {
          sentence: "七つ。",
          translation: "七個 (Nanatsu)。",
        },
        {
          sentence: "ラッキーセブン。",
          translation: "幸運七 (Lucky Seven)。",
        },
      ],
      usage_note: "通常念 Nana，但在時間、月份念 Shichi。",
      image_file: "seven.png",
    },
    {
      id: "num-8",
      term_zh: "8",
      related_terms: [
        {
          term_target: "八",
          pronunciation: ["はち", "Hachi"],
          specific_note: "數字",
        },
        {
          term_target: "八つ",
          pronunciation: ["やっつ", "Yattsu"],
          specific_note: "個數",
        },
      ],
      examples: [
        {
          sentence: "八つ。",
          translation: "八個。",
        },
        {
          sentence: "八時。",
          translation: "八點 (Hachiji)。",
        },
        {
          sentence: "八百屋。",
          translation: "蔬菜店 (Yaoya)。",
        },
      ],
      usage_note: "單純數字唸 Hachi，數東西(無單位)唸 Yattsu。",
      image_file: "eight.png",
    },
    {
      id: "num-9",
      term_zh: "9",
      related_terms: [
        {
          term_target: "九",
          pronunciation: ["きゅう", "Kyuu"],
          specific_note: "常用",
        },
        {
          term_target: "く",
          pronunciation: ["く", "Ku"],
          specific_note: "時間/月份",
        },
      ],
      examples: [
        {
          sentence: "九時。",
          translation: "九點 (Kuji)。",
        },
        {
          sentence: "九月。",
          translation: "九月 (Kugatsu)。",
        },
        {
          sentence: "九つ。",
          translation: "九個 (Kokonotsu)。",
        },
      ],
      usage_note: "通常念 Kyuu，但在時間、月份念 Ku。",
      image_file: "nine.png",
    },
    {
      id: "num-10",
      term_zh: "10",
      related_terms: [
        {
          term_target: "十",
          pronunciation: ["じゅう", "Juu"],
          specific_note: "數字",
        },
        {
          term_target: "十",
          pronunciation: ["とお", "Too"],
          specific_note: "個數",
        },
      ],
      examples: [
        {
          sentence: "十個。",
          translation: "十個 (Jukko)。",
        },
        {
          sentence: "十時。",
          translation: "十點 (Juuji)。",
        },
        {
          sentence: "十日。",
          translation: "十號 (Tooka)。",
        },
      ],
      usage_note: "單純數字唸 Juu，數數唸 Too。",
      image_file: "ten.png",
    },
    {
      id: "num-11",
      term_zh: "11",
      related_terms: [
        {
          term_target: "十一",
          pronunciation: ["じゅういち", "Juuichi"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "11時。",
          translation: "11點。",
        },
        {
          sentence: "十一月。",
          translation: "十一月 (Juuichigatsu)。",
        },
        {
          sentence: "十一回。",
          translation: "十一次。",
        },
      ],
      usage_note: "十一。",
      image_file: "eleven.png",
    },
    {
      id: "num-12",
      term_zh: "12",
      related_terms: [
        {
          term_target: "十二",
          pronunciation: ["じゅうに", "Juuni"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "12月。",
          translation: "12月 (Juunigatsu)。",
        },
        {
          sentence: "十二時。",
          translation: "十二點。",
        },
        {
          sentence: "十二支。",
          translation: "十二生肖 (Juunishi)。",
        },
      ],
      usage_note: "十二。",
      image_file: "twelve.png",
    },
    {
      id: "num-15",
      term_zh: "15",
      related_terms: [
        {
          term_target: "十五",
          pronunciation: ["じゅうご", "Juugo"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "15分。",
          translation: "15分 (Juugofun)。",
        },
        {
          sentence: "十五日。",
          translation: "15號 (Juugonichi)。",
        },
        {
          sentence: "十五歳。",
          translation: "十五歲。",
        },
      ],
      usage_note: "十五。",
      image_file: "fifteen.png",
    },
    {
      id: "num-20",
      term_zh: "20",
      related_terms: [
        {
          term_target: "二十",
          pronunciation: ["にじゅう", "Nijuu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "二十円。",
          translation: "二十圓。",
        },
        {
          sentence: "二十歳。",
          translation: "二十歲 (Hatachi, 特殊唸法)。",
        },
        {
          sentence: "二十日。",
          translation: "二十號 (Hatsuka)。",
        },
      ],
      usage_note: "二十。注意二十歲和二十號的特殊發音。",
      image_file: "twenty.png",
    },
    {
      id: "num-50",
      term_zh: "50",
      related_terms: [
        {
          term_target: "五十",
          pronunciation: ["ごじゅう", "Gojuu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "五十人。",
          translation: "五十人。",
        },
        {
          sentence: "五十円。",
          translation: "五十圓。",
        },
        {
          sentence: "五十回。",
          translation: "五十次 (Gojukkai)。",
        },
      ],
      usage_note: "五十。",
      image_file: "fifty.png",
    },
    {
      id: "num-100",
      term_zh: "100",
      related_terms: [
        {
          term_target: "百",
          pronunciation: ["ひゃく", "Hyaku"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "百円。",
          translation: "一百圓。",
        },
        {
          sentence: "百点。",
          translation: "一百分。",
        },
        {
          sentence: "三百。",
          translation: "三百 (Sanbyaku)。",
        },
      ],
      usage_note: "百。注意300(Sanbyaku)、600(Roppyaku)、800(Happyaku)的音變。",
      image_file: "hundred.png",
    },
    {
      id: "num-1000",
      term_zh: "1000",
      related_terms: [
        {
          term_target: "千",
          pronunciation: ["せん", "Sen"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "一千円。",
          translation: "一千圓。",
        },
        {
          sentence: "三千。",
          translation: "三千 (Sanzen)。",
        },
        {
          sentence: "八千。",
          translation: "八千 (Hassen)。",
        },
      ],
      usage_note: "千。注意3000(Sanzen)、8000(Hassen)的音變。",
      image_file: "thousand.png",
    },
    {
      id: "num-10000",
      term_zh: "10000",
      related_terms: [
        {
          term_target: "一万",
          pronunciation: ["いちまん", "Ichiman"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "一万円。",
          translation: "一萬圓。",
        },
        {
          sentence: "一万人。",
          translation: "一萬人。",
        },
        {
          sentence: "万一。",
          translation: "萬一 (Manichi)。",
        },
      ],
      usage_note: "一萬。日文的一萬前面必須加「一 (Ichi)」。",
      image_file: "ten_thousand.png",
    },
  ],
},
{
  id: "grammar",
  name: "基本句型",
  items: [
    {
      id: "g-01",
      term_zh: "我是/覺得～",
      related_terms: [
        {
          term_target: "私は...です",
          pronunciation: ["わたしは...です", "Watashi wa ... desu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私は学生です。",
          translation: "我是學生。",
        },
        {
          sentence: "私は台湾人です。",
          translation: "我是台灣人。",
        },
        {
          sentence: "私は会社員です。",
          translation: "我是上班族。",
        },
      ],
      usage_note: "最基本的肯定句。",
      image_file: "i_am.png",
    },
    {
      id: "g-02",
      term_zh: "我的名字叫～",
      related_terms: [
        {
          term_target: "私の名前は...です",
          pronunciation: [
            "わたしのなまえは...です",
            "Watashi no namae wa ... desu",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私の名前は田中です。",
          translation: "我的名字叫田中。",
        },
        {
          sentence: "私の名前はリンです。",
          translation: "我的名字叫林。",
        },
        {
          sentence: "私の名前はアリスです。",
          translation: "我的名字叫愛麗絲。",
        },
      ],
      usage_note: "自我介紹。",
      image_file: "my_name_is.png",
    },
    {
      id: "g-03",
      term_zh: "我做～",
      related_terms: [
        {
          term_target: "私は...します",
          pronunciation: ["わたしは...します", "Watashi wa ... shimasu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私は勉強します。",
          translation: "我讀書。",
        },
        {
          sentence: "私はテニスをします。",
          translation: "我打網球。",
        },
        {
          sentence: "私は明日、仕事をします。",
          translation: "我明天會工作。",
        },
      ],
      usage_note: "現在/未來習慣。",
      image_file: "i_do.png",
    },
    {
      id: "g-04",
      term_zh: "我正在做～",
      related_terms: [
        {
          term_target: "私は...しています",
          pronunciation: [
            "わたしは...しています",
            "Watashi wa ... shiteimasu",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私は食べています。",
          translation: "我正在吃。",
        },
        {
          sentence: "私は待っています。",
          translation: "我正在等。",
        },
        {
          sentence: "私は今、働いています。",
          translation: "我現在正在工作。",
        },
      ],
      usage_note: "進行式 (Te形+imasu)。",
      image_file: "ing.png",
    },
    {
      id: "g-05",
      term_zh: "我能夠～",
      related_terms: [
        {
          term_target: "私は...できます",
          pronunciation: ["わたしは...できます", "Watashi wa ... dekimasu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私は運転できます。",
          translation: "我會開車。",
        },
        {
          sentence: "私は日本語ができます。",
          translation: "我會日文。",
        },
        {
          sentence: "私は泳ぐことができます。",
          translation: "我會游泳。",
        },
      ],
      usage_note: "能力。",
      image_file: "can.png",
    },
    {
      id: "g-06",
      term_zh: "我喜歡做～",
      related_terms: [
        {
          term_target: "私は...が好きです",
          pronunciation: [
            "わたしは...がすきです",
            "Watashi wa ... ga suki desu",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私は読書が好きです。",
          translation: "我喜歡閱讀。",
        },
        {
          sentence: "私は猫が好きです。",
          translation: "我喜歡貓。",
        },
        {
          sentence: "私は旅行が好きです。",
          translation: "我喜歡旅行。",
        },
      ],
      usage_note: "興趣。",
      image_file: "like_ing.png",
    },
    {
      id: "g-07",
      term_zh: "我曾經～",
      related_terms: [
        {
          term_target: "私は...でした",
          pronunciation: ["わたしは...でした", "Watashi wa ... deshita"],
          specific_note: "狀態",
        },
      ],
      examples: [
        {
          sentence: "私は学生でした。",
          translation: "我曾經是學生。",
        },
        {
          sentence: "昨日は雨でした。",
          translation: "昨天是雨天。",
        },
        {
          sentence: "ここは学校でした。",
          translation: "這裡曾經是學校。",
        },
      ],
      usage_note: "過去狀態。",
      image_file: "i_was.png",
    },
    {
      id: "g-08",
      term_zh: "我做過～",
      related_terms: [
        {
          term_target: "私は...しました",
          pronunciation: [
            "わたしは...しました",
            "Watashi wa ... shimashita",
          ],
          specific_note: "動作",
        },
      ],
      examples: [
        {
          sentence: "宿題をしました。",
          translation: "我做完功課了。",
        },
        {
          sentence: "昨日、映画を見ました。",
          translation: "我昨天看了電影。",
        },
        {
          sentence: "朝ごはんを食べました。",
          translation: "我吃過早餐了。",
        },
      ],
      usage_note: "過去動作。",
      image_file: "i_did.png",
    },
    {
      id: "g-09",
      term_zh: "我已做過～",
      related_terms: [
        {
          term_target: "もう...しました",
          pronunciation: ["もう...しました", "Mou ... shimashita"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "もう食べました。",
          translation: "已經吃過了。",
        },
        {
          sentence: "もう帰りました。",
          translation: "已經回去了。",
        },
        {
          sentence: "もう予約しました。",
          translation: "已經預約了。",
        },
      ],
      usage_note: "完成式。",
      image_file: "i_have_done.png",
    },
    {
      id: "g-10",
      term_zh: "我曾去過～",
      related_terms: [
        {
          term_target: "...へ行ったことがあります",
          pronunciation: [
            "...へいったことがあります",
            "...e itta koto ga arimasu",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "日本へ行ったことがあります。",
          translation: "我曾去過日本。",
        },
        {
          sentence: "納豆を食べたことがあります。",
          translation: "我吃過納豆。",
        },
        {
          sentence: "彼に会ったことがあります。",
          translation: "我見過他。",
        },
      ],
      usage_note: "經驗 (Ta形)。",
      image_file: "have_been_to.png",
    },
    {
      id: "g-11",
      term_zh: "我打算～",
      related_terms: [
        {
          term_target: "...つもりです",
          pronunciation: ["...つもりです", "...tsumori desu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "行くつもりです。",
          translation: "我打算去。",
        },
        {
          sentence: "車を買うつもりです。",
          translation: "我打算買車。",
        },
        {
          sentence: "明日、休むつもりです。",
          translation: "我明天打算請假。",
        },
      ],
      usage_note: "意圖。",
      image_file: "i_will.png",
    },
    {
      id: "g-12",
      term_zh: "你是～嗎？",
      related_terms: [
        {
          term_target: "あなたは...ですか？",
          pronunciation: ["あなたは...ですか？", "Anata wa ... desu ka?"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "あなたは学生ですか？",
          translation: "你是學生嗎？",
        },
        {
          sentence: "あなたは日本人ですか？",
          translation: "你是日本人嗎？",
        },
        {
          sentence: "あなたは先生ですか？",
          translation: "你是老師嗎？",
        },
      ],
      usage_note: "問句尾加 ka。",
      image_file: "are_you.png",
    },
    {
      id: "g-13",
      term_zh: "你在做～嗎？",
      related_terms: [
        {
          term_target: "...していますか？",
          pronunciation: ["...していますか？", "...shiteimasu ka?"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "勉強していますか？",
          translation: "你在讀書嗎？",
        },
        {
          sentence: "聞いていますか？",
          translation: "你有在聽嗎？",
        },
        {
          sentence: "今、何をしていますか？",
          translation: "你現在在做什麼？",
        },
      ],
      usage_note: "進行疑問。",
      image_file: "do_you.png",
    },
    {
      id: "g-14",
      term_zh: "你曾經～嗎？",
      related_terms: [
        {
          term_target: "...したことがありますか？",
          pronunciation: [
            "...したことがありますか？",
            "...shita koto ga arimasu ka?",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "行ったことがありますか？",
          translation: "你有去過嗎？",
        },
        {
          sentence: "食べたことがありますか？",
          translation: "你有吃過嗎？",
        },
        {
          sentence: "それを見たことがありますか？",
          translation: "你看過那個嗎？",
        },
      ],
      usage_note: "問經驗。",
      image_file: "have_you_ever.png",
    },
    {
      id: "g-15",
      term_zh: "你何時做（某事）？",
      related_terms: [
        {
          term_target: "いつ...しますか？",
          pronunciation: ["いつ...しますか？", "Itsu ... shimasu ka?"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "いつ寝ますか？",
          translation: "你何時睡？",
        },
        {
          sentence: "いつ行きますか？",
          translation: "你什麼時候去？",
        },
        {
          sentence: "いつ終わりますか？",
          translation: "什麼時候結束？",
        },
      ],
      usage_note: "問時間點。",
      image_file: "when_do_you.png",
    },
    {
      id: "g-16",
      term_zh: "你什麼時候去（某地）？",
      related_terms: [
        {
          term_target: "いつ...へ行きますか？",
          pronunciation: ["いつ...へいきますか？", "Itsu ...e ikimasu ka?"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "いつ学校へ行きますか？",
          translation: "你何時去學校？",
        },
        {
          sentence: "いつ日本へ行きますか？",
          translation: "你何時去日本？",
        },
        {
          sentence: "いつ会社へ行きますか？",
          translation: "你何時去公司？",
        },
      ],
      usage_note: "問去的時間。",
      image_file: "when_go_to.png",
    },
    {
      id: "g-17",
      term_zh: "你在哪裡做（某事）？",
      related_terms: [
        {
          term_target: "どこで...しますか？",
          pronunciation: ["どこで...しますか？", "Doko de ... shimasu ka?"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "どこで買いますか？",
          translation: "你在哪買？",
        },
        {
          sentence: "どこで食べますか？",
          translation: "你要在哪裡吃？",
        },
        {
          sentence: "どこで働いていますか？",
          translation: "你在哪裡工作？",
        },
      ],
      usage_note: "動作地點用 De。",
      image_file: "where_do_you.png",
    },
    {
      id: "g-18",
      term_zh: "你如何做（某事）？",
      related_terms: [
        {
          term_target: "どうやって...しますか？",
          pronunciation: [
            "どうやって...しますか？",
            "Douyatte ... shimasu ka?",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "どうやって行きますか？",
          translation: "你怎麼去？",
        },
        {
          sentence: "どうやって食べますか？",
          translation: "這個怎麼吃？",
        },
        {
          sentence: "どうやって使いますか？",
          translation: "這要怎麼用？",
        },
      ],
      usage_note: "問方法。",
      image_file: "how_do_you.png",
    },
    {
      id: "g-19",
      term_zh: "你怎麼去（某地）？",
      related_terms: [
        {
          term_target: "どうやって...へ行きますか？",
          pronunciation: [
            "どうやって...へいきますか？",
            "Douyatte ...e ikimasu ka?",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "どうやって学校へ行きますか？",
          translation: "你怎麼去學校？",
        },
        {
          sentence: "どうやって駅へ行きますか？",
          translation: "要怎麼去車站？",
        },
        {
          sentence: "どうやって空港へ行きますか？",
          translation: "要怎麼去機場？",
        },
      ],
      usage_note: "問交通方式。",
      image_file: "how_go_to.png",
    },
    {
      id: "g-20",
      term_zh: "我不是～",
      related_terms: [
        {
          term_target: "私は...ではありません",
          pronunciation: [
            "わたしは...ではありません",
            "Watashi wa ... dewa arimasen",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "私は学生ではありません。",
          translation: "我不是學生。",
        },
        {
          sentence: "私は日本人ではありません。",
          translation: "我不是日本人。",
        },
        {
          sentence: "これはペンではありません。",
          translation: "這不是筆。",
        },
      ],
      usage_note: "名詞/形容動詞否定。",
      image_file: "i_am_not.png",
    },
    {
      id: "g-21",
      term_zh: "我不做～",
      related_terms: [
        {
          term_target: "...ません",
          pronunciation: ["...ません", "...masen"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "食べません。",
          translation: "我不吃。",
        },
        {
          sentence: "行きません。",
          translation: "我不去。",
        },
        {
          sentence: "わかりません。",
          translation: "我不懂。",
        },
      ],
      usage_note: "動詞否定。",
      image_file: "dont_understand.png",
    },
    {
      id: "g-22",
      term_zh: "我不能～",
      related_terms: [
        {
          term_target: "...できません",
          pronunciation: ["...できません", "...dekimasen"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "運転できません。",
          translation: "我不會開車。",
        },
        {
          sentence: "日本語ができません。",
          translation: "我不會日文。",
        },
        {
          sentence: "行くことができません。",
          translation: "我不能去。",
        },
      ],
      usage_note: "能力否定。",
      image_file: "i_cant.png",
    },
    {
      id: "g-23",
      term_zh: "我未曾～",
      related_terms: [
        {
          term_target: "一度も...したことがありません",
          pronunciation: [
            "いちども...したことがありません",
            "Ichido mo ... shita koto ga arimasen",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "一度も食べたことがありません。",
          translation: "我一次都沒吃過。",
        },
        {
          sentence: "一度も行ったことがありません。",
          translation: "我一次都沒去過。",
        },
        {
          sentence: "一度も見たことがありません。",
          translation: "我一次都沒看過。",
        },
      ],
      usage_note: "無此經驗。",
      image_file: "i_have_never.png",
    },
    {
      id: "g-24",
      term_zh: "我不必～",
      related_terms: [
        {
          term_target: "...しなくてもいいです",
          pronunciation: [
            "...しなくてもいいです",
            "...shinakutemo ii desu",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "行かなくてもいいです。",
          translation: "我不必去。",
        },
        {
          sentence: "急がなくてもいいです。",
          translation: "你不必著急。",
        },
        {
          sentence: "払わなくてもいいです。",
          translation: "不必付錢。",
        },
      ],
      usage_note: "無義務。",
      image_file: "i_dont_have_to.png",
    },
    {
      id: "g-25",
      term_zh: "如果～的話，就～",
      related_terms: [
        {
          term_target: "もし...なら",
          pronunciation: ["もし...なら", "Moshi ... nara"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "もし安いなら、買います。",
          translation: "如果便宜的話我就買。",
        },
        {
          sentence: "もし明日晴れたら、行きます。",
          translation: "如果明天放晴，我就去。",
        },
        {
          sentence: "もし時間があるなら、手伝ってください。",
          translation: "如果你有時間，請幫幫我。",
        },
      ],
      usage_note: "假設條件。",
      image_file: "if.png",
    },
    {
      id: "g-26",
      term_zh: "當～時，就～",
      related_terms: [
        {
          term_target: "...の時",
          pronunciation: ["...のとき", "...no toki"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "子供の時。",
          translation: "小時候(當我是孩子時)。",
        },
        {
          sentence: "暇な時、テレビを見ます。",
          translation: "閒暇時我會看電視。",
        },
        {
          sentence: "寝る時、電気を消します。",
          translation: "睡覺時我會關燈。",
        },
      ],
      usage_note: "時間條件。",
      image_file: "when_condition.png",
    },
    {
      id: "g-27",
      term_zh: "請你～",
      related_terms: [
        {
          term_target: "...してくれますか？",
          pronunciation: ["...してくれますか？", "...shite kuremasu ka?"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "手伝ってくれますか？",
          translation: "可以幫我嗎？",
        },
        {
          sentence: "教えてくれますか？",
          translation: "可以教我嗎？",
        },
        {
          sentence: "待ってくれますか？",
          translation: "可以等我嗎？",
        },
      ],
      usage_note: "請求 (Te形)。",
      image_file: "can_you.png",
    },
    {
      id: "g-28",
      term_zh: "我們來做～吧！",
      related_terms: [
        {
          term_target: "...しましょう",
          pronunciation: ["...しましょう", "...shimashou"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "行きましょう。",
          translation: "走吧。",
        },
        {
          sentence: "食べましょう。",
          translation: "吃吧。",
        },
        {
          sentence: "休憩しましょう。",
          translation: "休息一下吧。",
        },
      ],
      usage_note: "提議。",
      image_file: "lets.png",
    },
    {
      id: "g-29",
      term_zh: "我認為～",
      related_terms: [
        {
          term_target: "...と思います",
          pronunciation: ["...とおもいます", "...to omoimasu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "いいと思います。",
          translation: "我認為很好。",
        },
        {
          sentence: "おいしいと思います。",
          translation: "我覺得很好吃。",
        },
        {
          sentence: "彼は来ないと思います。",
          translation: "我想他不會來。",
        },
      ],
      usage_note: "表達想法。",
      image_file: "i_think.png",
    },
    {
      id: "g-30",
      term_zh: "我想做～",
      related_terms: [
        {
          term_target: "...たいです",
          pronunciation: ["...たいです", "...tai desu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "行きたいです。",
          translation: "我想去。",
        },
        {
          sentence: "食べたいです。",
          translation: "我想吃。",
        },
        {
          sentence: "日本へ帰りたいです。",
          translation: "我想回日本。",
        },
      ],
      usage_note: "慾望。",
      image_file: "want_to.png",
    },
    {
      id: "g-31",
      term_zh: "我必須做～",
      related_terms: [
        {
          term_target: "...しなければなりません",
          pronunciation: [
            "...しなければなりません",
            "...shinakereba narimasen",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "働かなければなりません。",
          translation: "我必須工作。",
        },
        {
          sentence: "勉強しなければなりません。",
          translation: "我必須唸書。",
        },
        {
          sentence: "行かなければなりません。",
          translation: "我得走了。",
        },
      ],
      usage_note: "義務。",
      image_file: "i_have_to.png",
    },
    {
      id: "g-32",
      term_zh: "做某事是怎樣的",
      related_terms: [
        {
          term_target: "...するのは...です",
          pronunciation: ["...するのは...です", "...suru no wa ... desu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "食べるのは楽しいです。",
          translation: "吃東西是開心的。",
        },
        {
          sentence: "日本語を話すのは難しいです。",
          translation: "說日文是困難的。",
        },
        {
          sentence: "泳ぐのは好きです。",
          translation: "我喜歡游泳(這件事)。",
        },
      ],
      usage_note: "動詞名詞化。",
      image_file: "it_is_to.png",
    },
    {
      id: "g-33",
      term_zh: "你可以幫我…嗎？",
      related_terms: [
        {
          term_target: "手伝ってくれませんか？",
          pronunciation: [
            "てつだってくれませんか？",
            "Tetsudatte kuremasen ka?",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "掃除を手伝ってくれませんか？",
          translation: "你可以幫我打掃嗎？",
        },
        {
          sentence: "荷物を持ってくれませんか？",
          translation: "可以幫我拿行李嗎？",
        },
        {
          sentence: "写真を撮ってくれませんか？",
          translation: "可以幫我拍照嗎？",
        },
      ],
      usage_note: "尋求協助。",
      image_file: "can_you_help.png",
    },
    {
      id: "g-34",
      term_zh: "我可以…嗎？",
      related_terms: [
        {
          term_target: "...てもいいですか？",
          pronunciation: ["...てもいいですか？", "...temo ii desu ka?"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "写真を撮ってもいいですか？",
          translation: "我可以拍照嗎？",
        },
        {
          sentence: "ここに入ってもいいですか？",
          translation: "我可以進去嗎？",
        },
        {
          sentence: "これを食べてもいいですか？",
          translation: "我可以吃這個嗎？",
        },
      ],
      usage_note: "請求許可 (Te形)。",
      image_file: "can_i.png",
    },
    {
      id: "g-35",
      term_zh: "我不喜歡…",
      related_terms: [
        {
          term_target: "...が好きではありません",
          pronunciation: [
            "...がすきではありません",
            "...ga suki dewa arimasen",
          ],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "それが好きではありません。",
          translation: "我不喜歡那個。",
        },
        {
          sentence: "納豆が好きではありません。",
          translation: "我不喜歡納豆。",
        },
        {
          sentence: "運動が好きではありません。",
          translation: "我不喜歡運動。",
        },
      ],
      usage_note: "表達反感。",
      image_file: "i_dont_like.png",
    },
    {
      id: "g-36",
      term_zh: "我比較喜歡…",
      related_terms: [
        {
          term_target: "...の方が好きです",
          pronunciation: ["...のほうがすきです", "...no hou ga suki desu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "これの方が好きです。",
          translation: "我比較喜歡這個。",
        },
        {
          sentence: "猫の方が好きです。",
          translation: "我比較喜歡貓。",
        },
        {
          sentence: "夏より冬の方が好きです。",
          translation: "比起夏天，我更喜歡冬天。",
        },
      ],
      usage_note: "偏好。",
      image_file: "prefer.png",
    },
    {
      id: "g-37",
      term_zh: "A 比 B 更…",
      related_terms: [
        {
          term_target: "AはBより...です",
          pronunciation: ["AはBより...です", "A wa B yori ... desu"],
          specific_note: "",
        },
      ],
      examples: [
        {
          sentence: "これはあれより高いです。",
          translation: "這比那個貴。",
        },
        {
          sentence: "新幹線はバスより速いです。",
          translation: "新幹線比公車快。",
        },
        {
          sentence: "今日は昨日より暑いです。",
          translation: "今天比昨天熱。",
        },
      ],
      usage_note: "比較級。",
      image_file: "more_than.png",
    },
    {
      id: "g-38",
      term_zh: "有…（存在）",
      related_terms: [
        {
          term_target: "...があります",
          pronunciation: ["...があります", "...ga arimasu"],
          specific_note: "物品",
        },
        {
          term_target: "...がいます",
          pronunciation: ["...がいます", "...ga imasu"],
          specific_note: "生物",
        },
      ],
      examples: [
        {
          sentence: "犬がいます。",
          translation: "有一隻狗。",
        },
        {
          sentence: "トイレがあります。",
          translation: "有廁所。",
        },
        {
          sentence: "時間があります。",
          translation: "有時間。",
        },
      ],
      usage_note: "存在 (生物用Imasu)。",
      image_file: "there_is.png",
    },
  ],
}
  ],
};
