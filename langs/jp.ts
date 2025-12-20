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
          example: {
            sentence: "はい、そうです。",
            translation: "是的，沒錯。",
          },
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
          example: {
            sentence: "いいえ、違います。",
            translation: "不，不是那樣的。",
          },
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
          example: {
            sentence: "こんにちは、元気ですか？",
            translation: "你好，你好嗎？",
          },
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
          example: {
            sentence: "手伝ってくれてありがとうございます。",
            translation: "謝謝你的幫忙。",
          },
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
          example: {
            sentence: "遅れてごめんなさい。",
            translation: "抱歉我遲到了。",
          },
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
          example: {
            sentence: "すみません、駅はどこですか？",
            translation: "不好意思請問，車站在哪裡？",
          },
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
          example: {
            sentence: "日本語がわかりません。",
            translation: "我不懂日文。",
          },
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
          example: {
            sentence: "すみません、トイレはどこですか？",
            translation: "請問廁所在哪？",
          },
          usage_note: "女性建議使用 Otearai (御手洗) 較優雅。",
          image_file: "where_bathroom.png",
        },
        {
          id: "greet-009",
          term_zh: "借過",
          related_terms: [
            {
              term_target: "すみません",
              pronunciation: ["すみません", "Sumimasen"],
              specific_note: "通用",
            },
          ],
          example: {
            sentence: "すみません、降ります。",
            translation: "借過，我要下車。",
          },
          usage_note: "擁擠時說 Sumimasen 人群會自然分開。",
          image_file: "excuse_me_pass.png",
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
          example: {
            sentence: "これはいくらですか？",
            translation: "這個多少錢？",
          },
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
          example: {
            sentence: "これをお願いします。",
            translation: "我要這個 (麻煩給我這個)。",
          },
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
          example: {
            sentence: "水をください。",
            translation: "請給我水。",
          },
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
          example: {
            sentence: "これは何ですか？辛いですか？",
            translation: "這是什麼？會辣嗎？",
          },
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
          example: {
            sentence: "ちょっと手伝ってください。",
            translation: "請幫我一下。",
          },
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
          example: {
            sentence: "すみません、もう一度お願いします。",
            translation: "不好意思，請再說一次。",
          },
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
          example: {
            sentence: "もっとゆっくりお願いします。",
            translation: "請再講慢一點。",
          },
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
          example: {
            sentence: "なるほど、わかりました。",
            translation: "原來如此，我懂了。",
          },
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
          example: {
            sentence: "おはようございます。",
            translation: "早安。",
          },
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
          example: {
            sentence: "こんばんは。",
            translation: "晚上好。",
          },
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
          example: {
            sentence: "では、失礼します。",
            translation: "那麼，我先告辭了。",
          },
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
          example: {
            sentence: "お元気ですか？",
            translation: "您最近好嗎？",
          },
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
          example: {
            sentence: "えっ、本当ですか？",
            translation: "咦，真的嗎？",
          },
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
          example: {
            sentence: "それはすごいですね！",
            translation: "那真是太厲害了！",
          },
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
          example: {
            sentence: "はじめまして、よろしく。",
            translation: "初次見面，請多指教。",
          },
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
          example: {
            sentence: "それは残念です。",
            translation: "那真是太可惜了。",
          },
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
              specific_note: "對方附近",
            },
            {
              term_target: "あれ",
              pronunciation: ["あれ", "Are"],
              specific_note: "遠處",
            },
          ],
          example: {
            sentence: "それは何ですか？",
            translation: "那個(你那邊的)是什麼？",
          },
          usage_note: "Sore(中距離/對方處)，Are(遠距離)。",
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
          example: {
            sentence: "私は台湾人です。",
            translation: "我是台灣人。",
          },
          usage_note: "Watashi 最安全通用。",
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
          example: {
            sentence: "あなたは学生ですか？",
            translation: "你是學生嗎？",
          },
          usage_note: "日文常省略「你」，或直接稱呼對方名字。",
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
          example: { sentence: "彼は先生です。", translation: "他是老師。" },
          usage_note: "Kare 也可指男朋友。",
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
          example: { sentence: "彼の車。", translation: "他的車。" },
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
          example: {
            sentence: "私たちは家族です。",
            translation: "我們是家人。",
          },
          usage_note: "複數形。",
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
          example: { sentence: "彼女は親切です。", translation: "她很親切。" },
          usage_note: "Kanojo 也可指女朋友。",
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
          example: {
            sentence: "彼らは学生です。",
            translation: "他們是學生。",
          },
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
          example: { sentence: "これはペンです。", translation: "這是筆。" },
          usage_note: "單獨使用用 Kore，接名詞用 Kono (例: Kono pen)。",
          image_file: "this.png",
        },
        {
          id: "pro-10",
          term_zh: "那個（指示詞）",
          related_terms: [
            {
              term_target: "それ",
              pronunciation: ["それ", "Sore"],
              specific_note: "代名詞",
            },
            {
              term_target: "その",
              pronunciation: ["その", "Sono"],
              specific_note: "連體詞(+名詞)",
            },
          ],
          example: { sentence: "それは何ですか？", translation: "那是什麼？" },
          usage_note: "單獨使用用 Sore，接名詞用 Sono。",
          image_file: "that_obj.png",
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
          example: { sentence: "彼女のカバン。", translation: "她的包包。" },
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
          example: { sentence: "あなたの名前。", translation: "你的名字。" },
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
          example: { sentence: "彼らの家。", translation: "他們的家。" },
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
          example: { sentence: "私たちの学校。", translation: "我們的學校。" },
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
          example: { sentence: "これらは本です。", translation: "這些是書。" },
          usage_note: "近處複數。",
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
          example: { sentence: "あれらは鳥です。", translation: "那些是鳥。" },
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
          example: { sentence: "私は学生です。", translation: "我是學生。" },
          usage_note: "Desu 用於敬語句尾。",
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
          example: { sentence: "お金があります。", translation: "我有錢。" },
          usage_note: "區分有無生命：物品用 Arimasu，生物用 Imasu。",
          image_file: "have.png",
        },
        {
          id: "v-03",
          term_zh: "去",
          related_terms: [
            {
              term_target: "行きます",
              pronunciation: ["いきます", "Ikimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "家へ行きます。", translation: "去家裡。" },
          usage_note: "移動。",
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
          example: {
            sentence: "プレゼントをもらいます。",
            translation: "收到禮物。",
          },
          usage_note: "Moraimasu 強調從別人那裡得到。",
          image_file: "get.png",
        },
        {
          id: "v-05",
          term_zh: "做",
          related_terms: [
            {
              term_target: "します",
              pronunciation: ["します", "Shimasu"],
              specific_note: "",
            },
            {
              term_target: "やります",
              pronunciation: ["やります", "Yarimasu"],
              specific_note: "口語/進行",
            },
          ],
          example: { sentence: "宿題をします。", translation: "做作業。" },
          usage_note: "執行動作。",
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
          example: {
            sentence: "こんにちはと言います。",
            translation: "說你好。",
          },
          usage_note: "Iimasu 是單方面說，Hanashimasu 是對話。",
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
          example: {
            sentence: "あなたを知っています。",
            translation: "我認識你。",
          },
          usage_note: "Shitteimasu 表示已有知識。",
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
          example: {
            sentence: "そう思います。",
            translation: "我也這麼覺得。",
          },
          usage_note: "表達意見用 Omoimasu。",
          image_file: "think.png",
        },
        {
          id: "v-09",
          term_zh: "看見",
          related_terms: [
            {
              term_target: "見ます",
              pronunciation: ["みます", "Mimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "映画を見ます。", translation: "看電影。" },
          usage_note: "觀看。",
          image_file: "see.png",
        },
        {
          id: "v-10",
          term_zh: "做出（製造）",
          related_terms: [
            {
              term_target: "作ります",
              pronunciation: ["つくります", "Tsukurimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "料理を作ります。", translation: "做飯。" },
          usage_note: "製造。",
          image_file: "make.png",
        },
        {
          id: "v-11",
          term_zh: "來",
          related_terms: [
            {
              term_target: "来ます",
              pronunciation: ["きます", "Kimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "ここへ来ます。", translation: "來這裡。" },
          usage_note: "前來。",
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
          example: { sentence: "水がいります。", translation: "需要水。" },
          usage_note: "Irimasu 常用於具體物品。",
          image_file: "need.png",
        },
        {
          id: "v-13",
          term_zh: "使用",
          related_terms: [
            {
              term_target: "使います",
              pronunciation: ["つかいます", "Tsukaimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "ペンを使います。", translation: "用筆。" },
          usage_note: "利用工具。",
          image_file: "use.png",
        },
        {
          id: "v-14",
          term_zh: "找到",
          related_terms: [
            {
              term_target: "見つけます",
              pronunciation: ["みつけます", "Mitsukemasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "仕事を見つけます。", translation: "找工作。" },
          usage_note: "發現。",
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
          example: { sentence: "これをあげます。", translation: "給你這個。" },
          usage_note: "授受動詞需注意方向。",
          image_file: "give.png",
        },
        {
          id: "v-16",
          term_zh: "告訴",
          related_terms: [
            {
              term_target: "教えます",
              pronunciation: ["おしえます", "Oshiemasu"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "名前を教えてください。",
            translation: "請告訴我名字。",
          },
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
              specific_note: "",
            },
            {
              term_target: "仕事します",
              pronunciation: ["しごとします", "Shigoto shimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "ここで働きます。", translation: "在這工作。" },
          usage_note: "勞動。",
          image_file: "work.png",
        },
        {
          id: "v-18",
          term_zh: "喜歡",
          related_terms: [
            {
              term_target: "好きです",
              pronunciation: ["すきです", "Suki desu"],
              specific_note: "",
            },
          ],
          example: { sentence: "猫が好きです。", translation: "我喜歡貓。" },
          usage_note: "形容動詞，助詞用 ga。",
          image_file: "like.png",
        },
        {
          id: "v-19",
          term_zh: "起床",
          related_terms: [
            {
              term_target: "起きます",
              pronunciation: ["おきます", "Okimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "早く起きます。", translation: "早起。" },
          usage_note: "起床。",
          image_file: "wake_up.png",
        },
        {
          id: "v-20",
          term_zh: "說話",
          related_terms: [
            {
              term_target: "話します",
              pronunciation: ["はなします", "Hanashimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "日本語を話します。", translation: "說日文。" },
          usage_note: "交談。",
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
          example: { sentence: "聞こえますか？", translation: "聽得見嗎？" },
          usage_note: "Kikimasu 有主動聽或問的意思。",
          image_file: "hear.png",
        },
        {
          id: "v-22",
          term_zh: "寫",
          related_terms: [
            {
              term_target: "書きます",
              pronunciation: ["かきます", "Kakimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "名前を書きます。", translation: "寫名字。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "本を読みます。", translation: "看書。" },
          usage_note: "讀文字。",
          image_file: "read.png",
        },
        {
          id: "v-24",
          term_zh: "等待",
          related_terms: [
            {
              term_target: "待ちます",
              pronunciation: ["まちます", "Machimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "待ってください。", translation: "請等一下。" },
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
          example: {
            sentence: "これをやってみます。",
            translation: "試試看這個。",
          },
          usage_note: "動詞Te形 + mimasu。",
          image_file: "try.png",
        },
        {
          id: "v-26",
          term_zh: "付錢",
          related_terms: [
            {
              term_target: "払います",
              pronunciation: ["はらいます", "Haraimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "お金を払います。", translation: "付錢。" },
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
              specific_note: "",
            },
          ],
          example: {
            sentence: "好きなのを選びます。",
            translation: "選喜歡的。",
          },
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
              specific_note: "",
            },
          ],
          example: { sentence: "部屋に入ります。", translation: "進房間。" },
          usage_note: "進入。",
          image_file: "enter.png",
        },
        {
          id: "v-29",
          term_zh: "住",
          related_terms: [
            {
              term_target: "住みます",
              pronunciation: ["すみます", "Sumimasu"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "東京に住んでいます。",
            translation: "住在東京。",
          },
          usage_note: "居住。",
          image_file: "live.png",
        },
        {
          id: "v-30",
          term_zh: "到達",
          related_terms: [
            {
              term_target: "着きます",
              pronunciation: ["つきます", "Tsukimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "駅に着きます。", translation: "到達車站。" },
          usage_note: "抵達。",
          image_file: "arrive.png",
        },
        {
          id: "v-31",
          term_zh: "走路",
          related_terms: [
            {
              term_target: "歩きます",
              pronunciation: ["あるきます", "Arukimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "歩いて帰ります。", translation: "走路回家。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "ドアを開けます。", translation: "開門。" },
          usage_note: "開啟。",
          image_file: "open.png",
        },
        {
          id: "v-33",
          term_zh: "關閉",
          related_terms: [
            {
              term_target: "閉めます",
              pronunciation: ["しめます", "Shimemasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "窓を閉めます。", translation: "關窗。" },
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
          example: { sentence: "手伝ってください。", translation: "請幫我。" },
          usage_note: "一般幫忙用 Tetsudaimasu。",
          image_file: "help.png",
        },
        {
          id: "v-35",
          term_zh: "帶來",
          related_terms: [
            {
              term_target: "持ってきます",
              pronunciation: ["もってきます", "Mottekimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "傘を持ってきます。", translation: "帶傘來。" },
          usage_note: "攜帶。",
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
          example: { sentence: "水がいります。", translation: "需要水。" },
          usage_note: "Irimasu 是自動詞，助詞用 ga。",
          image_file: "need.png",
        },
        {
          id: "v-37",
          term_zh: "使用",
          related_terms: [
            {
              term_target: "使います",
              pronunciation: ["つかいます", "Tsukaimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "ペンを使います。", translation: "用筆。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "先生になります。", translation: "變成老師。" },
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
          example: { sentence: "勉強を始めます。", translation: "開始讀書。" },
          usage_note: "區分人為開始或自然開始。",
          image_file: "start.png",
        },
        {
          id: "v-40",
          term_zh: "開始",
          related_terms: [
            {
              term_target: "始めます",
              pronunciation: ["はじめます", "Hajimemasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "会議を始めます。", translation: "會議開始。" },
          usage_note: "同上。",
          image_file: "begin.png",
        },
        {
          id: "v-41",
          term_zh: "結束",
          related_terms: [
            {
              term_target: "終わります",
              pronunciation: ["おわります", "Owarimasu"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "仕事が終わります。",
            translation: "工作結束。",
          },
          usage_note: "完成。",
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
          example: { sentence: "車が止まります。", translation: "車子停下。" },
          usage_note: "停止。",
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
          example: { sentence: "単語を覚えます。", translation: "記單字。" },
          usage_note: "記憶。",
          image_file: "remember.png",
        },
        {
          id: "v-44",
          term_zh: "談話",
          related_terms: [
            {
              term_target: "話します",
              pronunciation: ["はなします", "Hanashimasu"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "友達と話します。",
            translation: "跟朋友說話。",
          },
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
              specific_note: "",
            },
          ],
          example: { sentence: "友達に会います。", translation: "見朋友。" },
          usage_note: "會面。",
          image_file: "meet.png",
        },
        {
          id: "v-46",
          term_zh: "乘坐（工具）",
          related_terms: [
            {
              term_target: "乗ります",
              pronunciation: ["のります", "Norimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "バスに乗ります。", translation: "搭公車。" },
          usage_note: "搭乘。",
          image_file: "take.png",
        },
        {
          id: "v-47",
          term_zh: "放",
          related_terms: [
            {
              term_target: "置きます",
              pronunciation: ["おきます", "Okimasu"],
              specific_note: "",
            },
          ],
          example: { sentence: "ここに置きます。", translation: "放這裡。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "ご飯を食べます。", translation: "吃飯。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "もう寝ます。", translation: "要睡了。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "メールを送ります。", translation: "寄信。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "車を運転します。", translation: "開車。" },
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
              specific_note: "",
            },
          ],
          example: {
            sentence: "日本語を勉強します。",
            translation: "讀日文。",
          },
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
              specific_note: "",
            },
          ],
          example: { sentence: "家へ帰ります。", translation: "回家。" },
          usage_note: "歸返。",
          image_file: "go_back.png",
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
              specific_note: "",
            },
            {
              term_target: "よい",
              pronunciation: ["よい", "Yoi"],
              specific_note: "變化形",
            },
          ],
          example: { sentence: "いい天気です。", translation: "好天氣。" },
          usage_note: "正面。",
          image_file: "good.png",
        },
        {
          id: "adj-02",
          term_zh: "壞的",
          related_terms: [
            {
              term_target: "悪い",
              pronunciation: ["わるい", "Warui"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "気分が悪いです。",
            translation: "不舒服/心情不好。",
          },
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
              specific_note: "",
            },
          ],
          example: { sentence: "新しいスマホ。", translation: "新手機。" },
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
          example: { sentence: "一番好きです。", translation: "最喜歡。" },
          usage_note: "順序或程度。",
          image_file: "first.png",
        },
        {
          id: "adj-05",
          term_zh: "上一個",
          related_terms: [
            {
              term_target: "前の",
              pronunciation: ["まえの", "Mae no"],
              specific_note: "",
            },
          ],
          example: { sentence: "前の日。", translation: "前一天。" },
          usage_note: "之前的。",
          image_file: "last.png",
        },
        {
          id: "adj-06",
          term_zh: "下一個",
          related_terms: [
            {
              term_target: "次の",
              pronunciation: ["つぎの", "Tsugi no"],
              specific_note: "",
            },
          ],
          example: { sentence: "次の駅。", translation: "下一站。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "長い髪。", translation: "長髮。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "大きい家。", translation: "大房子。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "小さいサイズ。", translation: "小尺寸。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "人が多い。", translation: "人很多。" },
          usage_note: "數量多。",
          image_file: "many.png",
        },
        {
          id: "adj-11",
          term_zh: "高的",
          related_terms: [
            {
              term_target: "高い",
              pronunciation: ["たかい", "Takai"],
              specific_note: "",
            },
          ],
          example: { sentence: "背が高い。", translation: "個子高。" },
          usage_note: "高度。",
          image_file: "tall.png",
        },
        {
          id: "adj-12",
          term_zh: "年輕的",
          related_terms: [
            {
              term_target: "若い",
              pronunciation: ["わかい", "Wakai"],
              specific_note: "",
            },
          ],
          example: { sentence: "若い人。", translation: "年輕人。" },
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
          example: { sentence: "古い本。", translation: "舊書。" },
          usage_note: "Furui 形容物品。",
          image_file: "old.png",
        },
        {
          id: "adj-14",
          term_zh: "近的",
          related_terms: [
            {
              term_target: "近い",
              pronunciation: ["ちかい", "Chikai"],
              specific_note: "",
            },
          ],
          example: { sentence: "駅に近い。", translation: "離車站近。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "家から遠い。", translation: "離家遠。" },
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
          example: { sentence: "足が速い。", translation: "跑得快。" },
          usage_note: "發音相同，漢字不同。",
          image_file: "fast.png",
        },
        {
          id: "adj-17",
          term_zh: "慢的",
          related_terms: [
            {
              term_target: "遅い",
              pronunciation: ["おそい", "Osoi"],
              specific_note: "",
            },
          ],
          example: { sentence: "歩くのが遅い。", translation: "走得慢。" },
          usage_note: "速度慢。",
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
          example: { sentence: "お湯が熱いです。", translation: "熱水很燙。" },
          usage_note: "天氣用「暑」，物體用「熱」。",
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
          example: { sentence: "今日は寒いです。", translation: "今天好冷。" },
          usage_note: "天氣用「寒」，物體用「冷」。",
          image_file: "cold.png",
        },
        {
          id: "adj-20",
          term_zh: "乾淨的",
          related_terms: [
            {
              term_target: "きれい",
              pronunciation: ["きれい", "Kirei"],
              specific_note: "",
            },
          ],
          example: { sentence: "きれいな部屋。", translation: "乾淨的房間。" },
          usage_note: "也可指美麗。",
          image_file: "clean.png",
        },
        {
          id: "adj-21",
          term_zh: "髒的",
          related_terms: [
            {
              term_target: "汚い",
              pronunciation: ["きたない", "Kitanai"],
              specific_note: "",
            },
          ],
          example: { sentence: "手が汚いです。", translation: "手很髒。" },
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
          example: { sentence: "これは簡単です。", translation: "這很簡單。" },
          usage_note: "容易。",
          image_file: "easy.png",
        },
        {
          id: "adj-23",
          term_zh: "困難的",
          related_terms: [
            {
              term_target: "難しい",
              pronunciation: ["むずかしい", "Muzukashii"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "日本語は難しいです。",
            translation: "日文很難。",
          },
          usage_note: "難。",
          image_file: "difficult.png",
        },
        {
          id: "adj-24",
          term_zh: "正確的",
          related_terms: [
            {
              term_target: "正しい",
              pronunciation: ["ただしい", "Tadashii"],
              specific_note: "",
            },
          ],
          example: { sentence: "正しい答え。", translation: "正確答案。" },
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
          example: {
            sentence: "それは間違いです。",
            translation: "那是錯的。",
          },
          usage_note: "Machigai 是名詞。",
          image_file: "wrong.png",
        },
        {
          id: "adj-26",
          term_zh: "重要的",
          related_terms: [
            {
              term_target: "大切",
              pronunciation: ["たいせつ", "Taisetsu"],
              specific_note: "珍貴",
            },
            {
              term_target: "重要",
              pronunciation: ["じゅうよう", "Juuyou"],
              specific_note: "重要",
            },
          ],
          example: { sentence: "大切な友達。", translation: "重要的朋友。" },
          usage_note: "Taisetsu 帶有珍惜情感。",
          image_file: "important.png",
        },
        {
          id: "adj-27",
          term_zh: "不同的",
          related_terms: [
            {
              term_target: "違う",
              pronunciation: ["ちがう", "Chigau"],
              specific_note: "",
            },
          ],
          example: { sentence: "色が違う。", translation: "顏色不同。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "本当の話。", translation: "真的事。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "面白い映画。", translation: "有趣的電影。" },
          usage_note: "好笑或有意思。",
          image_file: "interesting.png",
        },
        {
          id: "adj-30",
          term_zh: "美麗的",
          related_terms: [
            {
              term_target: "美しい",
              pronunciation: ["うつくしい", "Utsukushii"],
              specific_note: "美麗",
            },
            {
              term_target: "きれい",
              pronunciation: ["きれい", "Kirei"],
              specific_note: "漂亮/乾淨",
            },
          ],
          example: { sentence: "美しい花。", translation: "美麗的花。" },
          usage_note: "形容人或景物。",
          image_file: "beautiful.png",
        },
        {
          id: "adj-31",
          term_zh: "便宜的",
          related_terms: [
            {
              term_target: "安い",
              pronunciation: ["やすい", "Yasui"],
              specific_note: "",
            },
          ],
          example: { sentence: "これは安いです。", translation: "這很便宜。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "値段が高いです。", translation: "價格很貴。" },
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
          example: {
            sentence: "お腹が空きました。",
            translation: "肚子餓了。",
          },
          usage_note: "慣用語。",
          image_file: "hungry.png",
        },
        {
          id: "adj-34",
          term_zh: "疲累的",
          related_terms: [
            {
              term_target: "疲れた",
              pronunciation: ["つかれた", "Tsukareta"],
              specific_note: "動詞過去式作形容",
            },
          ],
          example: { sentence: "疲れました。", translation: "累了。" },
          usage_note: "狀態。",
          image_file: "tired.png",
        },
        {
          id: "adj-35",
          term_zh: "忙碌的",
          related_terms: [
            {
              term_target: "忙しい",
              pronunciation: ["いそがしい", "Isogashii"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "仕事が忙しいです。",
            translation: "工作很忙。",
          },
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
              specific_note: "高興",
            },
            {
              term_target: "楽しい",
              pronunciation: ["たのしい", "Tanoshii"],
              specific_note: "快樂/有趣",
            },
          ],
          example: {
            sentence: "会えて嬉しいです。",
            translation: "見到你很高興。",
          },
          usage_note: "Ureshii 是心情高興。",
          image_file: "happy.png",
        },
        {
          id: "adj-37",
          term_zh: "悲傷的",
          related_terms: [
            {
              term_target: "悲しい",
              pronunciation: ["かなしい", "Kanashii"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "悲しいニュース。",
            translation: "悲傷的新聞。",
          },
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
          example: { sentence: "似ている色。", translation: "相似的顏色。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "有名な人。", translation: "有名的人。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "外国の車。", translation: "外國車。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "彼は頭がいい。", translation: "他很聰明。" },
          usage_note: "腦袋好。",
          image_file: "intelligent.png",
        },
        {
          id: "adj-42",
          term_zh: "危險的",
          related_terms: [
            {
              term_target: "危ない",
              pronunciation: ["あぶない", "Abunai"],
              specific_note: "",
            },
            {
              term_target: "危険",
              pronunciation: ["きけん", "Kiken"],
              specific_note: "名詞/那形容詞",
            },
          ],
          example: { sentence: "危ない！", translation: "危險！" },
          usage_note: "警示。",
          image_file: "dangerous.png",
        },
        {
          id: "adj-43",
          term_zh: "仁慈的",
          related_terms: [
            {
              term_target: "親切",
              pronunciation: ["しんせつ", "Shinsetsu"],
              specific_note: "親切",
            },
            {
              term_target: "優しい",
              pronunciation: ["やさしい", "Yasashii"],
              specific_note: "溫柔",
            },
          ],
          example: { sentence: "親切な人。", translation: "親切的人。" },
          usage_note: "溫柔。",
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
          example: { sentence: "全ての人。", translation: "所有的人。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "お気に入りの店。", translation: "喜愛的店。" },
          usage_note: "中意。",
          image_file: "favorite.png",
        },
        {
          id: "adj-46",
          term_zh: "美味的",
          related_terms: [
            {
              term_target: "おいしい",
              pronunciation: ["おいしい", "Oishii"],
              specific_note: "",
            },
            {
              term_target: "うまい",
              pronunciation: ["うまい", "Umai"],
              specific_note: "口語/男性常用",
            },
          ],
          example: { sentence: "おいしい料理。", translation: "美味的食物。" },
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
          example: { sentence: "時間がありません。", translation: "沒時間。" },
          usage_note: "時刻。",
          image_file: "time.png",
        },
        {
          id: "n-02",
          term_zh: "人們",
          related_terms: [
            {
              term_target: "人",
              pronunciation: ["ひと", "Hito"],
              specific_note: "",
            },
            {
              term_target: "人々",
              pronunciation: ["ひとびと", "Hitobito"],
              specific_note: "人們(複數)",
            },
          ],
          example: { sentence: "あの人。", translation: "那個人。" },
          usage_note: "泛指人。",
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
          example: { sentence: "お金がありません。", translation: "沒錢。" },
          usage_note: "前面加O較禮貌。",
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
          example: { sentence: "子供がいます。", translation: "有孩子。" },
          usage_note: "兒童。",
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
          example: { sentence: "水を飲みます。", translation: "喝水。" },
          usage_note: "日文分冷熱水。",
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
          example: {
            sentence: "おいしい食べ物。",
            translation: "好吃的食物。",
          },
          usage_note: "泛指食物。",
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
          example: { sentence: "私の友達。", translation: "我朋友。" },
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
          example: { sentence: "大家族。", translation: "大家庭。" },
          usage_note: "家人。",
          image_file: "family.png",
        },
        {
          id: "n-09",
          term_zh: "學生",
          related_terms: [
            {
              term_target: "学生",
              pronunciation: ["がくせい", "Gakusei"],
              specific_note: "",
            },
          ],
          example: { sentence: "私は学生です。", translation: "我是學生。" },
          usage_note: "在學者。",
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
          example: { sentence: "日本の文化。", translation: "日本文化。" },
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
          example: { sentence: "問題ありません。", translation: "沒問題。" },
          usage_note: "難題。",
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
          example: { sentence: "会社へ行きます。", translation: "去公司。" },
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
              specific_note: "",
            },
            {
              term_target: "男",
              pronunciation: ["おとこ", "Otoko"],
              specific_note: "",
            },
          ],
          example: { sentence: "男性用。", translation: "男性用。" },
          usage_note: "性別。",
          image_file: "man.png",
        },
        {
          id: "n-14",
          term_zh: "女性",
          related_terms: [
            {
              term_target: "女性",
              pronunciation: ["じょせい", "Josei"],
              specific_note: "",
            },
            {
              term_target: "女",
              pronunciation: ["おんな", "Onna"],
              specific_note: "",
            },
          ],
          example: { sentence: "女性用。", translation: "女性用。" },
          usage_note: "性別。",
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
          example: { sentence: "学校へ行きます。", translation: "去學校。" },
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
          example: { sentence: "先生、こんにちは。", translation: "老師好。" },
          usage_note: "師長。",
          image_file: "teacher.png",
        },
        {
          id: "n-17",
          term_zh: "影片／電影",
          related_terms: [
            {
              term_target: "映画",
              pronunciation: ["えいが", "Eiga"],
              specific_note: "",
            },
          ],
          example: { sentence: "映画を見ます。", translation: "看電影。" },
          usage_note: "影片。",
          image_file: "movie.png",
        },
        {
          id: "n-18",
          term_zh: "手機",
          related_terms: [
            {
              term_target: "携帯",
              pronunciation: ["けいたい", "Keitai"],
              specific_note: "手機",
            },
            {
              term_target: "スマホ",
              pronunciation: ["すまほ", "Sumaho"],
              specific_note: "智慧型手機",
            },
          ],
          example: { sentence: "私のスマホ。", translation: "我手機。" },
          usage_note: "現代常用 Sumaho。",
          image_file: "phone.png",
        },
        {
          id: "n-19",
          term_zh: "電腦",
          related_terms: [
            {
              term_target: "パソコン",
              pronunciation: ["ぱそこん", "Pasokon"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "パソコンを使います。",
            translation: "用電腦。",
          },
          usage_note: "PC。",
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
          example: { sentence: "車を運転します。", translation: "開車。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "市場で買います。", translation: "在市場買。" },
          usage_note: "市集。",
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
          example: { sentence: "服を買います。", translation: "買衣服。" },
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
          example: { sentence: "店に入ります。", translation: "進店裡。" },
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
          example: { sentence: "バスに乗ります。", translation: "搭公車。" },
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
          example: { sentence: "この道。", translation: "這條路。" },
          usage_note: "道路。",
          image_file: "street.png",
        },
        {
          id: "n-26",
          term_zh: "房子／家",
          related_terms: [
            {
              term_target: "家",
              pronunciation: ["いえ", "Ie"],
              specific_note: "",
            },
          ],
          example: { sentence: "大きい家。", translation: "大房子。" },
          usage_note: "住宅。",
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
              specific_note: "謙稱",
            },
          ],
          example: { sentence: "私のお母さん。", translation: "我媽媽。" },
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
              specific_note: "謙稱",
            },
          ],
          example: { sentence: "私のお父さん。", translation: "我爸爸。" },
          usage_note: "對外人稱自己爸爸用 Chichi。",
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
              term_target: "お兄さん",
              pronunciation: ["おにいさん", "Oniisan"],
              specific_note: "哥哥",
            },
            {
              term_target: "弟",
              pronunciation: ["おとうと", "Otouto"],
              specific_note: "弟弟",
            },
          ],
          example: { sentence: "私の兄。", translation: "我的哥哥。" },
          usage_note: "兄弟。",
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
              term_target: "お姉さん",
              pronunciation: ["おねえさん", "Oneesan"],
              specific_note: "姊姊",
            },
            {
              term_target: "妹",
              pronunciation: ["いもうと", "Imouto"],
              specific_note: "妹妹",
            },
          ],
          example: { sentence: "私の姉。", translation: "我的姊姊。" },
          usage_note: "姐妹。",
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
          example: { sentence: "中国語を話します。", translation: "說中文。" },
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
          example: { sentence: "朝ごはん。", translation: "早餐。" },
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
          example: { sentence: "夜ごはん。", translation: "晚餐。" },
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
          example: { sentence: "切符を買います。", translation: "買車票。" },
          usage_note: "車票用 Kippu。",
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
          example: { sentence: "カバンを持ちます。", translation: "拿包包。" },
          usage_note: "提包。",
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
          example: { sentence: "コップの水。", translation: "杯子裡的水。" },
          usage_note: "杯具。",
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
          example: { sentence: "医者に行きます。", translation: "看醫生。" },
          usage_note: "醫師。",
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
          example: { sentence: "警察を呼びます。", translation: "叫警察。" },
          usage_note: "警察。",
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
          example: { sentence: "病院へ行きます。", translation: "去醫院。" },
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
          example: { sentence: "席がありますか？", translation: "有位子嗎？" },
          usage_note: "位子。",
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
          example: { sentence: "ドアを開けます。", translation: "開門。" },
          usage_note: "門戶。",
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
          example: { sentence: "私の部屋。", translation: "我房間。" },
          usage_note: "室內。",
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
          example: { sentence: "駅はどこですか？", translation: "車站在哪？" },
          usage_note: "站點。",
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
          example: { sentence: "地下鉄の駅。", translation: "地鐵站。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "電車で行きます。", translation: "搭電車去。" },
          usage_note: "列車。",
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
          example: { sentence: "空港へ行きます。", translation: "去機場。" },
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
          example: { sentence: "荷物が多い。", translation: "行李很多。" },
          usage_note: "包裹。",
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
          example: { sentence: "地図を見ます。", translation: "看地圖。" },
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
          example: {
            sentence: "カウンターで払います。",
            translation: "櫃檯結帳。",
          },
          usage_note: "服務台。",
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
          example: { sentence: "ロビーで待ちます。", translation: "大廳等。" },
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
          example: { sentence: "予約しました。", translation: "預約了。" },
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
          example: {
            sentence: "チェックインお願いします。",
            translation: "麻煩辦理入住。",
          },
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
          example: {
            sentence: "チェックアウトは何時ですか？",
            translation: "退房是幾點？",
          },
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
          example: { sentence: "飲み物は？", translation: "飲料呢？" },
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
          example: {
            sentence: "メニューをください。",
            translation: "請給菜單。",
          },
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
          ],
          example: {
            sentence: "昼ごはんを食べます。",
            translation: "吃午餐。",
          },
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
          ],
          example: {
            sentence: "晩ごはんを食べます。",
            translation: "吃晚餐。",
          },
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
              specific_note: "",
            },
          ],
          example: {
            sentence: "お会計お願いします。",
            translation: "麻煩結帳。",
          },
          usage_note: "買單。",
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
          example: { sentence: "値段が高い。", translation: "價錢高。" },
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
              specific_note: "",
            },
          ],
          example: {
            sentence: "レシートください。",
            translation: "請給收據。",
          },
          usage_note: "統一發票。",
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
          example: {
            sentence: "サイズが合わない。",
            translation: "尺寸不合。",
          },
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
          example: { sentence: "入口はどこ？", translation: "入口在哪？" },
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
          example: { sentence: "出口はあそこ。", translation: "出口在那。" },
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
          example: {
            sentence: "台湾から来ました。",
            translation: "來自台灣。",
          },
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
          example: {
            sentence: "私は台湾人です。",
            translation: "我是台灣人。",
          },
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
          example: { sentence: "全部好き。", translation: "全部喜歡。" },
          usage_note: "所有。",
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
          example: { sentence: "財布を忘れた。", translation: "忘了錢包。" },
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
          example: { sentence: "身分証を見せる。", translation: "出示證件。" },
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
          example: {
            sentence: "パスポートを見せます。",
            translation: "出示護照。",
          },
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
          example: { sentence: "いいレストラン。", translation: "好的餐廳。" },
          usage_note: "食堂。",
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
          example: {
            sentence: "ホテルを予約します。",
            translation: "訂飯店。",
          },
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
          example: { sentence: "場所はどこ？", translation: "地點在哪？" },
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
          example: { sentence: "店員を呼ぶ。", translation: "叫店員。" },
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
          example: { sentence: "スーパーで買う。", translation: "在超市買。" },
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
          example: { sentence: "ホームで待つ。", translation: "在月台等。" },
          usage_note: "車站月台。",
          image_file: "platform.png",
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
          example: { sentence: "今、行きます。", translation: "現在去。" },
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
          example: {
            sentence: "とてもおいしいです。",
            translation: "非常好吃。",
          },
          usage_note: "強調。",
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
          example: { sentence: "本当に？", translation: "真的嗎？" },
          usage_note: "確認或強調。",
          image_file: "really.png",
        },
        {
          id: "adv-04",
          term_zh: "好好地／很好地",
          related_terms: [
            {
              term_target: "よく",
              pronunciation: ["よく", "Yoku"],
              specific_note: "",
            },
          ],
          example: { sentence: "よく寝ました。", translation: "睡得很好。" },
          usage_note: "好地。",
          image_file: "well.png",
        },
        {
          id: "adv-05",
          term_zh: "經常",
          related_terms: [
            {
              term_target: "よく",
              pronunciation: ["よく", "Yoku"],
              specific_note: "",
            },
          ],
          example: { sentence: "よく来ます。", translation: "常來。" },
          usage_note: "頻率。",
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
          example: {
            sentence: "たいてい6時に起きます。",
            translation: "通常六點起床。",
          },
          usage_note: "習慣。",
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
          example: { sentence: "もう食べました。", translation: "已經吃了。" },
          usage_note: "完成。",
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
          example: { sentence: "これだけです。", translation: "只有這個。" },
          usage_note: "唯一。",
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
          example: { sentence: "また来ます。", translation: "會再來。" },
          usage_note: "重複。",
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
          example: { sentence: "10分ぐらい。", translation: "大約10分鐘。" },
          usage_note: "概數。",
          image_file: "about.png",
        },
        {
          id: "adv-11",
          term_zh: "一點點",
          related_terms: [
            {
              term_target: "少し",
              pronunciation: ["すこし", "Sukoshi"],
              specific_note: "",
            },
          ],
          example: { sentence: "少し辛い。", translation: "一點點辣。" },
          usage_note: "少量。",
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
          example: { sentence: "私も。", translation: "我也是。" },
          usage_note: "也。",
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
          example: {
            sentence: "たぶん大丈夫です。",
            translation: "大概沒問題。",
          },
          usage_note: "不確定。",
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
          example: { sentence: "あとでやります。", translation: "之後做。" },
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
          example: { sentence: "すぐに行きます。", translation: "馬上去。" },
          usage_note: "不久後。",
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
          example: {
            sentence: "一緒に行きましょう。",
            translation: "一起去吧。",
          },
          usage_note: "共同。",
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
          example: { sentence: "まだです。", translation: "還沒。" },
          usage_note: "持續。",
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
          example: {
            sentence: "普通はそうです。",
            translation: "一般是那樣。",
          },
          usage_note: "通常。",
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
          example: {
            sentence: "すぐに来てください。",
            translation: "請立刻來。",
          },
          usage_note: "馬上。",
          image_file: "immediately.png",
        },
        {
          id: "adv-20",
          term_zh: "也不",
          related_terms: [
            {
              term_target: "も...ない",
              pronunciation: ["...も...ない", "...mo ...nai"],
              specific_note: "",
            },
          ],
          example: { sentence: "私も食べません。", translation: "我也不吃。" },
          usage_note: "兩者都不。",
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
          example: { sentence: "これは何ですか？", translation: "這是什麼？" },
          usage_note: "問事物。",
          image_file: "what.png",
        },
        {
          id: "q-02",
          term_zh: "如何",
          related_terms: [
            {
              term_target: "どうやって",
              pronunciation: ["どうやって", "Douyatte"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "どうやって行きますか？",
            translation: "怎麼去？",
          },
          usage_note: "問方法。",
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
          example: { sentence: "いつ行きますか？", translation: "何時去？" },
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
          example: { sentence: "どこですか？", translation: "在哪裡？" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "あれは誰ですか？", translation: "那是誰？" },
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
              specific_note: "正式",
            },
            {
              term_target: "どうして",
              pronunciation: ["どうして", "Doushite"],
              specific_note: "常用",
            },
          ],
          example: { sentence: "どうしてですか？", translation: "為什麼？" },
          usage_note: "問原因。",
          image_file: "why.png",
        },
        {
          id: "q-07",
          term_zh: "哪一個",
          related_terms: [
            {
              term_target: "どれ",
              pronunciation: ["どれ", "Dore"],
              specific_note: "",
            },
          ],
          example: { sentence: "どれですか？", translation: "哪一個？" },
          usage_note: "選擇。",
          image_file: "which.png",
        },
        {
          id: "q-08",
          term_zh: "多少（數量）",
          related_terms: [
            {
              term_target: "いくら",
              pronunciation: ["いくら", "Ikura"],
              specific_note: "金額",
            },
            {
              term_target: "いくつ",
              pronunciation: ["いくつ", "Ikutsu"],
              specific_note: "個數",
            },
          ],
          example: {
            sentence: "いくつありますか？",
            translation: "有多少個？",
          },
          usage_note: "問數量。",
          image_file: "how_much.png",
        },
        {
          id: "q-09",
          term_zh: "多久（時間）",
          related_terms: [
            {
              term_target: "どのくらい",
              pronunciation: ["どのくらい", "Dono kurai"],
              specific_note: "",
            },
          ],
          example: {
            sentence: "どのくらいかかりますか？",
            translation: "要花多久？",
          },
          usage_note: "時間長度。",
          image_file: "how_long.png",
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
          example: { sentence: "今、行きます。", translation: "現在去。" },
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
          example: { sentence: "今日は暑いです。", translation: "今天很熱。" },
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
          example: { sentence: "また明日。", translation: "明天見。" },
          usage_note: "隔天。",
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
          example: {
            sentence: "昨日は楽しかったです。",
            translation: "昨天很開心。",
          },
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
          example: {
            sentence: "ここに来てください。",
            translation: "請來這裡。",
          },
          usage_note: "近處。",
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
          example: { sentence: "あそこに行きます。", translation: "去那裡。" },
          usage_note: "Soko(對方那), Asoko(遠處)。",
          image_file: "there.png",
        },
        {
          id: "tp-07",
          term_zh: "天（日期）",
          related_terms: [
            {
              term_target: "日",
              pronunciation: ["ひ", "Hi"],
              specific_note: "",
            },
          ],
          example: { sentence: "ある日。", translation: "某一天。" },
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
              specific_note: "",
            },
          ],
          example: { sentence: "今年。", translation: "今年。" },
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
          example: { sentence: "今月。", translation: "這個月。" },
          usage_note: "月份。",
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
          example: { sentence: "来週。", translation: "下週。" },
          usage_note: "星期。",
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
          example: { sentence: "朝ごはん。", translation: "早餐。" },
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
          example: { sentence: "午後2時。", translation: "下午2點。" },
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
          example: { sentence: "夜ごはん。", translation: "晚餐。" },
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
              specific_note: "",
            },
            {
              term_target: "お昼",
              pronunciation: ["おひる", "Ohiru"],
              specific_note: "午餐/中午",
            },
          ],
          example: { sentence: "お昼です。", translation: "是中午。" },
          usage_note: "12點。",
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
          example: { sentence: "駅の前。", translation: "車站前。" },
          usage_note: "前方。",
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
          example: { sentence: "ドアの後ろ。", translation: "門後。" },
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
          example: { sentence: "左に曲がります。", translation: "左轉。" },
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
          example: {
            sentence: "右を見てください。",
            translation: "請看右邊。",
          },
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
              specific_note: "旁邊",
            },
            {
              term_target: "隣",
              pronunciation: ["となり", "Tonari"],
              specific_note: "隔壁",
            },
          ],
          example: { sentence: "私の隣。", translation: "我旁邊。" },
          usage_note: "側邊。",
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
          example: { sentence: "駅の向かい。", translation: "車站對面。" },
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
          example: { sentence: "春が来た。", translation: "春天來了。" },
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
          example: { sentence: "暑い夏。", translation: "炎熱的夏天。" },
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
          example: { sentence: "秋が好き。", translation: "喜歡秋天。" },
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
          example: { sentence: "冬は寒い。", translation: "冬天很冷。" },
          usage_note: "季節。",
          image_file: "winter.png",
        },
      ],
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
              specific_note: "",
            },
          ],
          example: { sentence: "ゼロです。", translation: "是零。" },
          usage_note: "零。",
          image_file: "zero.png",
        },
        {
          id: "num-1",
          term_zh: "1",
          related_terms: [
            {
              term_target: "一",
              pronunciation: ["いち", "Ichi"],
              specific_note: "數數",
            },
            {
              term_target: "一つ",
              pronunciation: ["ひとつ", "Hitotsu"],
              specific_note: "個數",
            },
          ],
          example: { sentence: "一つください。", translation: "請給我一個。" },
          usage_note: "數數用Ichi，點餐常用Hitotsu。",
          image_file: "one.png",
        },
        {
          id: "num-2",
          term_zh: "2",
          related_terms: [
            {
              term_target: "二",
              pronunciation: ["に", "Ni"],
              specific_note: "數數",
            },
            {
              term_target: "二つ",
              pronunciation: ["ふたつ", "Futatsu"],
              specific_note: "個數",
            },
          ],
          example: { sentence: "二つください。", translation: "請給我兩個。" },
          usage_note: "數數用Ni，點餐常用Futatsu。",
          image_file: "two.png",
        },
        {
          id: "num-3",
          term_zh: "3",
          related_terms: [
            {
              term_target: "三",
              pronunciation: ["さん", "San"],
              specific_note: "數數",
            },
            {
              term_target: "三つ",
              pronunciation: ["みっつ", "Mittsu"],
              specific_note: "個數",
            },
          ],
          example: { sentence: "三つください。", translation: "請給我三個。" },
          usage_note: "數數用San，點餐常用Mittsu。",
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
          example: { sentence: "四時。", translation: "四點 (Yoji)。" },
          usage_note: "通常念Yon。",
          image_file: "four.png",
        },
        {
          id: "num-5",
          term_zh: "5",
          related_terms: [
            {
              term_target: "五",
              pronunciation: ["ご", "Go"],
              specific_note: "數數",
            },
            {
              term_target: "五つ",
              pronunciation: ["いつつ", "Itsutsu"],
              specific_note: "個數",
            },
          ],
          example: { sentence: "五つください。", translation: "請給我五個。" },
          usage_note: "五。",
          image_file: "five.png",
        },
        {
          id: "num-6",
          term_zh: "6",
          related_terms: [
            {
              term_target: "六",
              pronunciation: ["ろく", "Roku"],
              specific_note: "數數",
            },
            {
              term_target: "六つ",
              pronunciation: ["むっつ", "Muttsu"],
              specific_note: "個數",
            },
          ],
          example: { sentence: "六つ。", translation: "六個。" },
          usage_note: "六。",
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
          example: { sentence: "七時。", translation: "七點 (Shichiji)。" },
          usage_note: "通常念Nana。",
          image_file: "seven.png",
        },
        {
          id: "num-8",
          term_zh: "8",
          related_terms: [
            {
              term_target: "八",
              pronunciation: ["はち", "Hachi"],
              specific_note: "數數",
            },
            {
              term_target: "八つ",
              pronunciation: ["やっつ", "Yattsu"],
              specific_note: "個數",
            },
          ],
          example: { sentence: "八つ。", translation: "八個。" },
          usage_note: "八。",
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
              specific_note: "時間",
            },
          ],
          example: { sentence: "九時。", translation: "九點 (Kuji)。" },
          usage_note: "通常念Kyuu。",
          image_file: "nine.png",
        },
        {
          id: "num-10",
          term_zh: "10",
          related_terms: [
            {
              term_target: "十",
              pronunciation: ["じゅう", "Juu"],
              specific_note: "數數",
            },
            {
              term_target: "十個",
              pronunciation: ["じゅっこ", "Jukko"],
              specific_note: "個數",
            },
          ],
          example: { sentence: "十個。", translation: "十個。" },
          usage_note: "十。",
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
          example: { sentence: "11時。", translation: "11點。" },
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
          example: { sentence: "12月。", translation: "12月。" },
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
          example: { sentence: "15分。", translation: "15分。" },
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
          example: { sentence: "二十円。", translation: "二十圓。" },
          usage_note: "二十。",
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
          example: { sentence: "五十人。", translation: "五十人。" },
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
          example: { sentence: "百円。", translation: "一百圓。" },
          usage_note: "百。",
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
          example: { sentence: "一千円。", translation: "一千圓。" },
          usage_note: "千。",
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
          example: { sentence: "一万円。", translation: "一萬圓。" },
          usage_note: "一萬。",
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
          example: { sentence: "私は学生です。", translation: "我是學生。" },
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
          example: {
            sentence: "私の名前は田中です。",
            translation: "我的名字叫田中。",
          },
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
          example: { sentence: "私は勉強します。", translation: "我讀書。" },
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
          example: {
            sentence: "私は食べています。",
            translation: "我正在吃。",
          },
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
          example: {
            sentence: "私は運転できます。",
            translation: "我會開車。",
          },
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
          example: {
            sentence: "私は読書が好きです。",
            translation: "我喜歡閱讀。",
          },
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
          example: {
            sentence: "私は学生でした。",
            translation: "我曾經是學生。",
          },
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
          example: {
            sentence: "宿題をしました。",
            translation: "我做完功課了。",
          },
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
          example: {
            sentence: "もう食べました。",
            translation: "已經吃過了。",
          },
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
          example: {
            sentence: "日本へ行ったことがあります。",
            translation: "我曾去過日本。",
          },
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
          example: { sentence: "行くつもりです。", translation: "我打算去。" },
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
          example: {
            sentence: "あなたは学生ですか？",
            translation: "你是學生嗎？",
          },
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
          example: {
            sentence: "勉強していますか？",
            translation: "你在讀書嗎？",
          },
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
          example: {
            sentence: "行ったことがありますか？",
            translation: "你有去過嗎？",
          },
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
          example: { sentence: "いつ寝ますか？", translation: "你何時睡？" },
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
          example: {
            sentence: "いつ学校へ行きますか？",
            translation: "你何時去學校？",
          },
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
          example: {
            sentence: "どこで買いますか？",
            translation: "你在哪買？",
          },
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
          example: {
            sentence: "どうやって行きますか？",
            translation: "你怎麼去？",
          },
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
          example: {
            sentence: "どうやって学校へ行きますか？",
            translation: "你怎麼去學校？",
          },
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
          example: {
            sentence: "私は学生ではありません。",
            translation: "我不是學生。",
          },
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
          example: { sentence: "食べません。", translation: "我不吃。" },
          usage_note: "動詞否定。",
          image_file: "i_dont.png",
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
          example: {
            sentence: "運転できません。",
            translation: "我不會開車。",
          },
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
          example: {
            sentence: "一度も食べたことがありません。",
            translation: "我一次都沒吃過。",
          },
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
          example: {
            sentence: "行かなくてもいいです。",
            translation: "我不必去。",
          },
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
          example: {
            sentence: "もし安いなら、買います。",
            translation: "如果便宜的話我就買。",
          },
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
          example: {
            sentence: "子供の時。",
            translation: "小時候(當我是孩子時)。",
          },
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
          example: {
            sentence: "手伝ってくれますか？",
            translation: "可以幫我嗎？",
          },
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
          example: { sentence: "行きましょう。", translation: "走吧。" },
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
          example: {
            sentence: "いいと思います。",
            translation: "我認為很好。",
          },
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
          example: { sentence: "行きたいです。", translation: "我想去。" },
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
          example: {
            sentence: "働かなければなりません。",
            translation: "我必須工作。",
          },
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
          example: {
            sentence: "食べるのは楽しいです。",
            translation: "吃東西是開心的。",
          },
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
          example: {
            sentence: "掃除を手伝ってくれませんか？",
            translation: "你可以幫我打掃嗎？",
          },
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
          example: {
            sentence: "写真を撮ってもいいですか？",
            translation: "我可以拍照嗎？",
          },
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
          example: {
            sentence: "それが好きではありません。",
            translation: "我不喜歡那個。",
          },
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
          example: {
            sentence: "これの方が好きです。",
            translation: "我比較喜歡這個。",
          },
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
          example: {
            sentence: "これはあれより高いです。",
            translation: "這比那個貴。",
          },
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
          example: { sentence: "犬がいます。", translation: "有一隻狗。" },
          usage_note: "存在 (生物用Imasu)。",
          image_file: "there_is.png",
        },
      ],
    },
  ],
};
