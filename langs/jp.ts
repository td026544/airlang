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
              pronunciation: ["Hai"],
              specific_note: "肯定",
              segments: [{ text: "はい", meaning: "是的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "はい、そうです。",
              translation: "是的，沒錯。",
              segments: [
                { text: "はい", meaning: "是的", tail: "、" },
                { text: "そう", meaning: "那樣", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "はい、わかります。",
              translation: "是的，我明白。",
              segments: [
                { text: "はい", meaning: "是的", tail: "、" },
                { text: "わかります", meaning: "明白/懂", tail: "。" },
              ],
            },
            {
              sentence: "はい、お願いします。",
              translation: "好的，麻煩你了。",
              segments: [
                { text: "はい", meaning: "是的", tail: "、" },
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "願",
                  furigana: "ねが",
                  meaning: "請求/願望",
                  tail: "",
                },
                { text: "い", meaning: "(名詞語尾)", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Iie"],
              specific_note: "否定",
              segments: [{ text: "いいえ", meaning: "不/不是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "いいえ、違います。",
              translation: "不，不是那樣的。",
              segments: [
                { text: "いいえ", meaning: "不", tail: "、" },
                {
                  text: "違",
                  furigana: "ちが",
                  meaning: "不同/錯誤",
                  tail: "",
                },
                { text: "います", meaning: "是 (狀態)", tail: "。" },
              ],
            },
            {
              sentence: "いいえ、結構です。",
              translation: "不用了，謝謝 (婉拒)。",
              segments: [
                { text: "いいえ", meaning: "不", tail: "、" },
                {
                  text: "結構",
                  furigana: "けっこう",
                  meaning: "足夠/很好",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "いいえ、そうではありません。",
              translation: "不，並非如此。",
              segments: [
                { text: "いいえ", meaning: "不", tail: "、" },
                { text: "そう", meaning: "那樣", tail: "" },
                { text: "では", meaning: "並 (否定提示)", tail: "" },
                { text: "ありません", meaning: "不是/沒有", tail: "。" },
              ],
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
              pronunciation: ["Konnichiwa"],
              specific_note: "通用",
              segments: [{ text: "こんにちは", meaning: "你好", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "こんにちは、元気ですか？",
              translation: "你好，你好嗎？",
              segments: [
                { text: "こんにちは", meaning: "你好", tail: "、" },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "健康/精神",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "" },
                { text: "か", meaning: "嗎 (疑問詞)", tail: "？" },
              ],
            },
            {
              sentence: "みなさん、こんにちは。",
              translation: "大家好。",
              segments: [
                { text: "みなさん", meaning: "大家", tail: "、" },
                { text: "こんにちは", meaning: "你好", tail: "。" },
              ],
            },
            {
              sentence: "こんにちは、いい天気ですね。",
              translation: "你好，天氣真好呢。",
              segments: [
                { text: "こんにちは", meaning: "你好", tail: "、" },
                { text: "いい", meaning: "好的", tail: "" },
                { text: "天気", furigana: "てんき", meaning: "天氣", tail: "" },
                { text: "です", meaning: "是", tail: "" },
                { text: "ね", meaning: "呢 (感嘆)", tail: "。" },
              ],
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
              pronunciation: ["Arigatou gozaimasu"],
              specific_note: "禮貌",
              segments: [
                { text: "ありがとう", meaning: "謝謝", tail: "" },
                { text: "ございます", meaning: "(禮貌語尾)", tail: "" },
              ],
            },
            {
              term_target: "ありがとう",
              pronunciation: ["Arigatou"],
              specific_note: "平輩",
              segments: [{ text: "ありがとう", meaning: "謝謝", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "手伝ってくれてありがとうございます。",
              translation: "謝謝你的幫忙。",
              segments: [
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "くれて", meaning: "給予(恩惠)", tail: "" },
                { text: "ありがとう", meaning: "謝謝", tail: "" },
                { text: "ございます", meaning: "(禮貌語尾)", tail: "。" },
              ],
            },
            {
              sentence: "本当にありがとうございます。",
              translation: "真的非常感謝。",
              segments: [
                { text: "本", furigana: "ほん", meaning: "本", tail: "" },
                { text: "当", furigana: "とう", meaning: "當", tail: "" },
                { text: "に", meaning: "地 (副詞化)", tail: "" },
                { text: "ありがとう", meaning: "謝謝", tail: "" },
                { text: "ございます", meaning: "(禮貌語尾)", tail: "。" },
              ],
            },
            {
              sentence: "いろいろありがとう。",
              translation: "感謝你做的這一切 (謝謝你的多方照顧)。",
              segments: [
                { text: "いろいろ", meaning: "各式各樣/多方", tail: "" },
                { text: "ありがとう", meaning: "謝謝", tail: "。" },
              ],
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
              pronunciation: ["Gomennasai"],
              specific_note: "道歉",
              segments: [{ text: "ごめんなさい", meaning: "對不起", tail: "" }],
            },
            {
              term_target: "すみません",
              pronunciation: ["Sumimasen"],
              specific_note: "輕微歉意",
              segments: [
                { text: "すみません", meaning: "不好意思/對不起", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "遅れてごめんなさい。",
              translation: "抱歉我遲到了。",
              segments: [
                { text: "遅", furigana: "おく", meaning: "遲到/晚", tail: "" },
                { text: "れて", meaning: "(動詞連接)", tail: "" },
                { text: "ごめんなさい", meaning: "對不起", tail: "。" },
              ],
            },
            {
              sentence: "本当にごめんなさい。",
              translation: "真的非常對不起。",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "に",
                },
                { text: "ごめんなさい", meaning: "對不起", tail: "。" },
              ],
            },
            {
              sentence: "ごめんなさい、忘れました。",
              translation: "對不起，我忘記了。",
              segments: [
                { text: "ごめんなさい", meaning: "對不起", tail: "、" },
                { text: "忘", furigana: "わす", meaning: "忘記", tail: "" },
                { text: "れました", meaning: "了 (過去式)", tail: "。" },
              ],
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
              pronunciation: ["Sumimasen"],
              specific_note: "發問前",
              segments: [
                { text: "すみません", meaning: "不好意思/請問", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "すみません、駅はどこですか？",
              translation: "不好意思請問，車站在哪裡？",
              segments: [
                { text: "すみません", meaning: "不好意思", tail: "、" },
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "は", meaning: "主題標記", tail: "" },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "すみません、注文をお願いします。",
              translation: "不好意思，我要點餐。",
              segments: [
                { text: "すみません", meaning: "不好意思", tail: "、" },
                {
                  text: "注文",
                  furigana: "ちゅうもん",
                  meaning: "點餐/訂單",
                  tail: "",
                },
                { text: "を", meaning: "受詞標記", tail: "" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "いします", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "すみません、ちょっといいですか？",
              translation: "不好意思，可以打擾一下嗎？",
              segments: [
                { text: "すみません", meaning: "不好意思", tail: "、" },
                { text: "ちょっと", meaning: "稍微/一下", tail: "" },
                { text: "いい", meaning: "可以/好", tail: "" },
                { text: "ですか", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Wakarimasen"],
              specific_note: "無法理解",
              segments: [
                { text: "わかりません", meaning: "不懂/不知道", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本語がわかりません。",
              translation: "我不懂日文。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "語", furigana: "ご", meaning: "語言", tail: "" },
                { text: "が", meaning: "主詞標記", tail: "" },
                { text: "わかりません", meaning: "不懂", tail: "。" },
              ],
            },
            {
              sentence: "意味がわかりません。",
              translation: "我不懂這是什麼意思。",
              segments: [
                { text: "意味", furigana: "いみ", meaning: "意思", tail: "" },
                { text: "が", meaning: "主詞標記", tail: "" },
                { text: "わかりません", meaning: "不懂", tail: "。" },
              ],
            },
            {
              sentence: "すみません、よくわかりません。",
              translation: "抱歉，我不太明白。",
              segments: [
                { text: "すみません", meaning: "抱歉", tail: "、" },
                { text: "よく", meaning: "不太/清楚地", tail: "" },
                { text: "わかりません", meaning: "不懂", tail: "。" },
              ],
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
              pronunciation: ["Toire wa doko desu ka?"],
              specific_note: "通用",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "" },
                { text: "は", meaning: "主題標記", tail: "" },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              term_target: "お手洗いはどこですか？",
              pronunciation: ["Otearai wa doko desu ka?"],
              specific_note: "禮貌",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "手洗",
                  furigana: "てあら",
                  meaning: "洗手間",
                  tail: "",
                },
                { text: "い", meaning: "(名詞語尾)", tail: "" },
                { text: "は", meaning: "主題標記", tail: "" },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "すみません、トイレはどこですか？",
              translation: "請問廁所在哪？",
              segments: [
                { text: "すみません", meaning: "請問", tail: "、" },
                { text: "トイレ", meaning: "廁所", tail: "" },
                { text: "は", meaning: "主題標記", tail: "" },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "あそこにトイレがありますか？",
              translation: "那邊有廁所嗎？",
              segments: [
                { text: "あそこ", meaning: "那裡", tail: "に" },
                { text: "トイレ", meaning: "廁所", tail: "" },
                { text: "が", meaning: "主詞標記", tail: "" },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎 (疑問)", tail: "？" },
              ],
            },
            {
              sentence: "トイレを借りてもいいですか？",
              translation: "可以借用廁所嗎？",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "を" },
                { text: "借", furigana: "か", meaning: "借", tail: "" },
                { text: "りても", meaning: "即使...也", tail: "" },
                { text: "いい", meaning: "可以/好", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
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
              pronunciation: ["Ikura desu ka?"],
              specific_note: "詢價",
              segments: [
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是...嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これはいくらですか？",
              translation: "這個多少錢？",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "全部でいくらですか？",
              translation: "全部總共多少錢？",
              segments: [
                {
                  text: "全部",
                  furigana: "ぜんぶ",
                  meaning: "全部",
                  tail: "で",
                },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "チケットはいくらですか？",
              translation: "票價是多少？",
              segments: [
                { text: "チケット", meaning: "票/券", tail: "は" },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
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
              pronunciation: ["Kore o onegaishimasu"],
              specific_note: "購買/點餐",
              segments: [
                { text: "これ", meaning: "這個", tail: "を" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "いします", meaning: "做 (敬語)", tail: "" },
              ],
            },
            {
              term_target: "これをください",
              pronunciation: ["Kore o kudasai"],
              specific_note: "索取",
              segments: [
                { text: "これ", meaning: "這個", tail: "を" },
                { text: "ください", meaning: "請給我", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これをお願いします。",
              translation: "我要這個 (麻煩給我這個)。",
              segments: [
                { text: "これ", meaning: "這個", tail: "を" },
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "願",
                  furigana: "ねが",
                  meaning: "請求/拜託",
                  tail: "",
                },
                { text: "いします", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "これをください。",
              translation: "請給我這個。",
              segments: [
                { text: "これ", meaning: "這個", tail: "を" },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "あれもお願いします。",
              translation: "那個也麻煩給我。",
              segments: [
                { text: "あれ", meaning: "那個", tail: "も" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "いします", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["...o kudasai"],
              specific_note: "索取",
              segments: [
                { text: "...", meaning: "某物", tail: "" },
                { text: "を", meaning: "受詞標記", tail: "" },
                { text: "ください", meaning: "請給我", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "水をください。",
              translation: "請給我水。",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "を" },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "メニューをください。",
              translation: "請給我菜單。",
              segments: [
                { text: "メニュー", meaning: "菜單", tail: "を" },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "レシートをください。",
              translation: "請給我收據。",
              segments: [
                { text: "レシート", meaning: "收據", tail: "を" },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
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
              pronunciation: ["Kore wa nan desu ka?"],
              specific_note: "疑問",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは何ですか？辛いですか？",
              translation: "這是什麼？會辣嗎？",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
                { text: "辛", furigana: "から", meaning: "辣的", tail: "" },
                { text: "い", meaning: "的 (形容詞尾)", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "あれは何ですか？",
              translation: "那邊那個是什麼？",
              segments: [
                { text: "あれ", meaning: "那裡那個", tail: "は" },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "これは日本語で何ですか？",
              translation: "這個用日文怎麼說？",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "語", furigana: "ご", meaning: "語", tail: "で" },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
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
              pronunciation: ["Tetsudatte kudasai"],
              specific_note: "一般協助",
              segments: [
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請...", tail: "" },
              ],
            },
            {
              term_target: "助けて",
              pronunciation: ["Tasukete"],
              specific_note: "緊急救命",
              segments: [
                { text: "助", furigana: "たす", meaning: "救", tail: "" },
                { text: "けて", meaning: "(動詞連接)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ちょっと手伝ってください。",
              translation: "請幫我一下。",
              segments: [
                { text: "ちょっと", meaning: "稍微/一下", tail: "" },
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請...", tail: "。" },
              ],
            },
            {
              sentence: "誰か助けて！",
              translation: "誰來救救我！(緊急)",
              segments: [
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "か" },
                { text: "助", furigana: "たす", meaning: "救命", tail: "" },
                { text: "けて", meaning: "(動詞連接)", tail: "！" },
              ],
            },
            {
              sentence: "荷物を運ぶのを手伝ってください。",
              translation: "請幫我搬行李。",
              segments: [
                {
                  text: "荷物",
                  furigana: "にもつ",
                  meaning: "行李",
                  tail: "を",
                },
                { text: "運", furigana: "はこ", meaning: "搬運", tail: "" },
                { text: "ぶ", meaning: "(動詞語尾)", tail: "" },
                { text: "のを", meaning: "這件事(受詞)", tail: "" },
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請...", tail: "。" },
              ],
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
              pronunciation: ["Mou ichido onegaishimasu"],
              specific_note: "請求重複",
              segments: [
                { text: "もう", meaning: "再/已經", tail: "" },
                { text: "一度", furigana: "いちど", meaning: "一次", tail: "" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "いします", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "すみません、もう一度お願いします。",
              translation: "不好意思，請再說一次。",
              segments: [
                { text: "すみません", meaning: "不好意思", tail: "、" },
                { text: "もう", meaning: "再", tail: "" },
                { text: "一度", furigana: "いちど", meaning: "一次", tail: "" },
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "願",
                  furigana: "ねが",
                  meaning: "請求/拜託",
                  tail: "",
                },
                { text: "いします", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "もう一度言ってもらえますか？",
              translation: "能請您再說一次嗎？",
              segments: [
                { text: "もう", meaning: "再", tail: "" },
                { text: "一度", furigana: "いちど", meaning: "一次", tail: "" },
                { text: "言", furigana: "い", meaning: "說", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "もらえますか", meaning: "能(請您)...嗎", tail: "？" },
              ],
            },
            {
              sentence: "え？なんですって？",
              translation: "蛤？你說什麼？(口語)",
              segments: [
                { text: "え", meaning: "蛤/咦", tail: "？" },
                { text: "なん", meaning: "什麼", tail: "" },
                { text: "ですって", meaning: "你說...", tail: "？" },
              ],
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
              pronunciation: ["Yukkuri onegaishimasu"],
              specific_note: "請求慢速",
              segments: [
                { text: "ゆっくり", meaning: "慢慢地", tail: "" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "いします", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "もっとゆっくりお願いします。",
              translation: "請再講慢一點。",
              segments: [
                { text: "もっと", meaning: "更加", tail: "" },
                { text: "ゆっくり", meaning: "慢慢地", tail: "" },
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "願",
                  furigana: "ねが",
                  meaning: "請求/拜託",
                  tail: "",
                },
                { text: "いします", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "少しゆっくり話してください。",
              translation: "請說慢一點點。",
              segments: [
                {
                  text: "少",
                  furigana: "すこ",
                  meaning: "稍微/一點",
                  tail: "",
                },
                { text: "し", meaning: "(形容詞語尾)", tail: "" },
                { text: "ゆっくり", meaning: "慢慢地", tail: "" },
                { text: "話", furigana: "はな", meaning: "說話", tail: "" },
                { text: "してください", meaning: "請...", tail: "。" },
              ],
            },
            {
              sentence: "早すぎてわかりません。",
              translation: "太快了我聽不懂。",
              segments: [
                { text: "早", furigana: "はや", meaning: "快", tail: "" },
                { text: "すぎて", meaning: "太過...", tail: "" },
                { text: "わかりません", meaning: "不懂", tail: "。" },
              ],
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
              pronunciation: ["Naruhodo"],
              specific_note: "理解",
              segments: [{ text: "なるほど", meaning: "原來如此", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "なるほど、わかりました。",
              translation: "原來如此，我懂了。",
              segments: [
                { text: "なるほど", meaning: "原來如此", tail: "、" },
                { text: "わかりました", meaning: "懂了/明白了", tail: "。" },
              ],
            },
            {
              sentence: "あ、なるほど！",
              translation: "啊，原來是這樣！",
              segments: [
                { text: "あ", meaning: "啊", tail: "、" },
                { text: "なるほど", meaning: "原來如此", tail: "！" },
              ],
            },
            {
              sentence: "そうですか、なるほど。",
              translation: "是這樣啊，原來如此。",
              segments: [
                { text: "そうですか", meaning: "是這樣嗎", tail: "、" },
                { text: "なるほど", meaning: "原來如此", tail: "。" },
              ],
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
              pronunciation: ["Ohayou gozaimasu"],
              specific_note: "禮貌",
              segments: [
                { text: "おはよう", meaning: "早安", tail: "" },
                { text: "ございます", meaning: "(禮貌語尾)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "おはようございます。",
              translation: "早安。",
              segments: [
                { text: "おはよう", meaning: "早安", tail: "" },
                { text: "ございます", meaning: "(禮貌語尾)", tail: "。" },
              ],
            },
            {
              sentence: "先生、おはようございます。",
              translation: "老師早安。",
              segments: [
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師/醫生",
                  tail: "、",
                },
                { text: "おはよう", meaning: "早安", tail: "" },
                { text: "ございます", meaning: "(禮貌語尾)", tail: "。" },
              ],
            },
            {
              sentence: "おはよう！",
              translation: "早！(對朋友/家人)",
              segments: [{ text: "おはよう", meaning: "早安", tail: "！" }],
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
              pronunciation: ["Konbanwa"],
              specific_note: "晚上見面",
              segments: [{ text: "こんばんは", meaning: "晚上好", tail: "" }],
            },
            {
              term_target: "おやすみなさい",
              pronunciation: ["Oyasuminasai"],
              specific_note: "睡前/道別",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "やす", meaning: "休息", tail: "" },
                { text: "みなさい", meaning: "請... (命令形)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "こんばんは。",
              translation: "晚上好。",
              segments: [{ text: "こんばんは", meaning: "晚上好", tail: "。" }],
            },
            {
              sentence: "みなさん、こんばんは。",
              translation: "大家晚安(晚上好)。",
              segments: [
                { text: "みなさん", meaning: "大家", tail: "、" },
                { text: "こんばんは", meaning: "晚上好", tail: "。" },
              ],
            },
            {
              sentence: "そろそろ寝ます、おやすみなさい。",
              translation: "我要睡了，晚安。",
              segments: [
                { text: "そろそろ", meaning: "差不多/快要", tail: "" },
                { text: "寝", furigana: "ね", meaning: "睡覺", tail: "" },
                { text: "ます", meaning: "(動詞語尾)", tail: "、" },
                { text: "おやすみなさい", meaning: "晚安", tail: "。" },
              ],
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
              pronunciation: ["Sayounara"],
              specific_note: "正式/久別",
              segments: [{ text: "さようなら", meaning: "再見", tail: "" }],
            },
            {
              term_target: "失礼します",
              pronunciation: ["Shitsurei shimasu"],
              specific_note: "商務/先離開",
              segments: [
                {
                  text: "失礼",
                  furigana: "しつれい",
                  meaning: "失禮/告辭",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "では、失礼します。",
              translation: "那麼，我先告辭了。",
              segments: [
                { text: "では", meaning: "那麼", tail: "、" },
                {
                  text: "失礼",
                  furigana: "しつれい",
                  meaning: "失禮了",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "さようなら、また明日。",
              translation: "再見，明天見。",
              segments: [
                { text: "さようなら", meaning: "再見", tail: "、" },
                { text: "また", meaning: "再", tail: "" },
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "じゃあ、またね。",
              translation: "那待會見囉 (口語)。",
              segments: [
                { text: "じゃあ", meaning: "那麼", tail: "、" },
                { text: "また", meaning: "再", tail: "" },
                { text: "ね", meaning: "喔/呢", tail: "。" },
              ],
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
              pronunciation: ["Ogenki desu ka?"],
              specific_note: "問候",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "精神/健康",
                  tail: "",
                },
                { text: "ですか", meaning: "是...嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お元気ですか？",
              translation: "您最近好嗎？",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "精神/健康",
                  tail: "",
                },
                { text: "ですか", meaning: "是...嗎", tail: "？" },
              ],
            },
            {
              sentence: "最近どうですか？",
              translation: "最近如何？",
              segments: [
                {
                  text: "最近",
                  furigana: "さいきん",
                  meaning: "最近",
                  tail: "",
                },
                { text: "どう", meaning: "如何", tail: "" },
                { text: "ですか", meaning: "是...嗎", tail: "？" },
              ],
            },
            {
              sentence: "元気？",
              translation: "好嗎？(朋友間)",
              segments: [
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "有精神",
                  tail: "？",
                },
              ],
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
              pronunciation: ["Hontou desu ka?"],
              specific_note: "疑問",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "",
                },
                { text: "ですか", meaning: "是...嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "えっ、本当ですか？",
              translation: "咦，真的嗎？",
              segments: [
                { text: "えっ", meaning: "咦", tail: "、" },
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "",
                },
                { text: "ですか", meaning: "是...嗎", tail: "？" },
              ],
            },
            {
              sentence: "本当に？信じられない。",
              translation: "真的？真不敢相信。",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "に",
                },
                { text: "？", tail: "" },
                { text: "信", furigana: "しん", meaning: "相信", tail: "" },
                { text: "じられない", meaning: "無法...", tail: "。" },
              ],
            },
            {
              sentence: "マジで？",
              translation: "真假？(年輕人口語)",
              segments: [
                { text: "マジ", meaning: "真的", tail: "で" },
                { text: "？", tail: "" },
              ],
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
              pronunciation: ["Sugoi"],
              specific_note: "讚嘆",
              segments: [{ text: "すごい", meaning: "厲害/棒", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "それはすごいですね！",
              translation: "那真是太厲害了！",
              segments: [
                { text: "それ", meaning: "那個", tail: "は" },
                { text: "すごい", meaning: "厲害/棒", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "！" },
              ],
            },
            {
              sentence: "すごい！おめでとう。",
              translation: "太棒了！恭喜。",
              segments: [
                { text: "すごい", meaning: "厲害/棒", tail: "！" },
                { text: "おめでとう", meaning: "恭喜", tail: "。" },
              ],
            },
            {
              sentence: "日本語がすごいですね。",
              translation: "你的日文真棒。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "語", furigana: "ご", meaning: "語", tail: "が" },
                { text: "すごい", meaning: "厲害", tail: "" },
                { text: "ですね", meaning: "呢", tail: "。" },
              ],
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
              pronunciation: ["Hajimemashite"],
              specific_note: "初次見面",
              segments: [
                { text: "はじめまして", meaning: "初次見面", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "はじめまして、よろしく。",
              translation: "初次見面，請多指教。",
              segments: [
                { text: "はじめまして", meaning: "初次見面", tail: "、" },
                { text: "よろしく", meaning: "指教/拜託", tail: "。" },
              ],
            },
            {
              sentence: "どうぞよろしくお願いします。",
              translation: "請多多指教 (正式)。",
              segments: [
                { text: "どうぞ", meaning: "請", tail: "" },
                { text: "よろしく", meaning: "指教", tail: "" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "拜託", tail: "" },
                { text: "いします", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お会いできて嬉しいです。",
              translation: "很高興能見到您。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "会", furigana: "あ", meaning: "見面", tail: "" },
                { text: "いできて", meaning: "能夠...", tail: "" },
                { text: "嬉", furigana: "うれ", meaning: "高興", tail: "" },
                { text: "しい", meaning: "的 (形容詞尾)", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
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
              pronunciation: ["Zannen desu"],
              specific_note: "遺憾",
              segments: [
                {
                  text: "残念",
                  furigana: "ざんねん",
                  meaning: "可惜/遺憾",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "それは残念です。",
              translation: "那真是太可惜了。",
              segments: [
                { text: "それ", meaning: "那個", tail: "は" },
                {
                  text: "残念",
                  furigana: "ざんねん",
                  meaning: "可惜",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "行けなくて残念です。",
              translation: "很遺憾我不能去。",
              segments: [
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "けなくて", meaning: "不能...", tail: "" },
                {
                  text: "残念",
                  furigana: "ざんねん",
                  meaning: "遺憾",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "残念ですが、また今度。",
              translation: "真可惜，下次吧。",
              segments: [
                {
                  text: "残念",
                  furigana: "ざんねん",
                  meaning: "可惜",
                  tail: "",
                },
                { text: "ですが", meaning: "雖然...但是", tail: "、" },
                { text: "また", meaning: "再/又", tail: "" },
                {
                  text: "今度",
                  furigana: "こんど",
                  meaning: "下次",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Sore"],
              specific_note: "代名詞 (對方附近)",
              segments: [{ text: "それ", meaning: "那個", tail: "" }],
            },
            {
              term_target: "あれ",
              pronunciation: ["Are"],
              specific_note: "代名詞 (遠處)",
              segments: [{ text: "あれ", meaning: "那個 (遠)", tail: "" }],
            },
            {
              term_target: "その",
              pronunciation: ["Sono"],
              specific_note: "連體詞 (接名詞)",
              segments: [{ text: "その", meaning: "那個...", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "それは何ですか？",
              translation: "那個(你手邊的)是什麼？",
              segments: [
                { text: "それ", meaning: "那個", tail: "は" },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "その服はかわいいです。",
              translation: "那件衣服(你穿的)很可愛。",
              segments: [
                { text: "その", meaning: "那個", tail: "" },
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "は" },
                { text: "かわいい", meaning: "可愛", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "あれを見てください。",
              translation: "請看那邊(遠處)那個。",
              segments: [
                { text: "あれ", meaning: "那裡那個", tail: "を" },
                { text: "見", furigana: "み", meaning: "看", tail: "て" },
                { text: "ください", meaning: "請...", tail: "。" },
              ],
            },
          ],
          usage_note:
            "Sore/Are 單獨使用；Sono 後面必接名詞。Sore/Sono 指對方處，Are 指遠處。",
          image_file: "that.png",
        },
        {
          id: "pro-02",
          term_zh: "我",
          related_terms: [
            {
              term_target: "私",
              pronunciation: ["Watashi"],
              specific_note: "通用",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
              ],
            },
            {
              term_target: "僕",
              pronunciation: ["Boku"],
              specific_note: "男性自稱(平輩)",
              segments: [
                { text: "僕", furigana: "ぼく", meaning: "我 (男)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は台湾人です。",
              translation: "我是台灣人。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
                { text: "人", furigana: "じん", meaning: "人", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "私は寿司が好きです。",
              translation: "我喜歡壽司。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "寿司", furigana: "すし", meaning: "壽司", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "僕もそう思います。",
              translation: "我(男性)也這麼認為。",
              segments: [
                { text: "僕", furigana: "ぼく", meaning: "我", tail: "も" },
                { text: "そう", meaning: "那樣", tail: "" },
                { text: "思", furigana: "おも", meaning: "想/認為", tail: "" },
                { text: "います", meaning: "(動詞語尾)", tail: "。" },
              ],
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
              pronunciation: ["Anata"],
              specific_note: "",
              segments: [{ text: "あなた", meaning: "你", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あなたは学生ですか？",
              translation: "你是學生嗎？",
              segments: [
                { text: "あなた", meaning: "你", tail: "は" },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "" },
                { text: "か", meaning: "嗎 (疑問)", tail: "？" },
              ],
            },
            {
              sentence: "これはあなたのペンですか？",
              translation: "這是你的筆嗎？",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "あなた", meaning: "你", tail: "の" },
                { text: "ペン", meaning: "筆", tail: "" },
                { text: "です", meaning: "是", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "あなたはどう思いますか？",
              translation: "你覺得呢？",
              segments: [
                { text: "あなた", meaning: "你", tail: "は" },
                { text: "どう", meaning: "如何", tail: "" },
                { text: "思", furigana: "おも", meaning: "認為", tail: "" },
                { text: "います", meaning: "(動詞語尾)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
          ],
          usage_note:
            "日文常省略「你」，或直接稱呼對方名字(如:田中さん)以示禮貌。",
          image_file: "you.png",
        },
        {
          id: "pro-04",
          term_zh: "他",
          related_terms: [
            {
              term_target: "彼",
              pronunciation: ["Kare"],
              specific_note: "男性/男朋友",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼は先生です。",
              translation: "他是老師。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼はとても親切です。",
              translation: "他非常親切。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "とても", meaning: "非常", tail: "" },
                {
                  text: "親切",
                  furigana: "しんせつ",
                  meaning: "親切",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼は私の彼氏です。",
              translation: "他是我的男朋友。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                {
                  text: "彼氏",
                  furigana: "かれし",
                  meaning: "男朋友",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
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
              pronunciation: ["Kare no"],
              specific_note: "",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "の" },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼の車。",
              translation: "他的車。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "の" },
                { text: "車", furigana: "くるま", meaning: "車", tail: "。" },
              ],
            },
            {
              sentence: "彼の名前を知っていますか？",
              translation: "你知道他的名字嗎？",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "の" },
                {
                  text: "名前",
                  furigana: "なまえ",
                  meaning: "名字",
                  tail: "を",
                },
                { text: "知", furigana: "し", meaning: "知道", tail: "って" },
                { text: "います", meaning: "(狀態)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "これは彼のカバンです。",
              translation: "這是他的包包。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "彼", furigana: "かれ", meaning: "他", tail: "の" },
                { text: "カバン", meaning: "包包", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
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
              pronunciation: ["Watashitachi"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私たちは家族です。",
              translation: "我們是家人。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "は" },
                { text: "家族", furigana: "かぞく", meaning: "家人", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "私たちは台湾から来ました。",
              translation: "我們來自台灣。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "は" },
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "から",
                },
                { text: "来", furigana: "き", meaning: "來", tail: "ました" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "私たちは行きましょう。",
              translation: "我們走吧。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "は" },
                { text: "行", furigana: "い", meaning: "去/走", tail: "き" },
                { text: "ましょう", meaning: "吧 (勸誘)", tail: "。" },
              ],
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
              pronunciation: ["Kanojo"],
              specific_note: "女性/女朋友",
              segments: [
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她/女友",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼女は元気です。",
              translation: "她很有精神。",
              segments: [
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她",
                  tail: "は",
                },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "有精神",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼女は日本語を話します。",
              translation: "她會說日文。",
              segments: [
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她",
                  tail: "は",
                },
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "を",
                },
                { text: "話", furigana: "はな", meaning: "說", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "彼女は私の友達です。",
              translation: "她是我的朋友。",
              segments: [
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她",
                  tail: "は",
                },
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
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
              pronunciation: ["Karera"],
              specific_note: "",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "ら", meaning: "們", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼らは学生です。",
              translation: "他們是學生。",
              segments: [
                {
                  text: "彼ら",
                  furigana: "かれら",
                  meaning: "他們",
                  tail: "は",
                },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼らは忙しいです。",
              translation: "他們很忙。",
              segments: [
                {
                  text: "彼ら",
                  furigana: "かれら",
                  meaning: "他們",
                  tail: "は",
                },
                { text: "忙", furigana: "いそが", meaning: "忙", tail: "しい" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼らはどこに行きますか？",
              translation: "他們要去哪裡？",
              segments: [
                {
                  text: "彼ら",
                  furigana: "かれら",
                  meaning: "他們",
                  tail: "は",
                },
                { text: "どこ", meaning: "哪裡", tail: "に" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Kore"],
              specific_note: "代名詞",
              segments: [{ text: "これ", meaning: "這個", tail: "" }],
            },
            {
              term_target: "この",
              pronunciation: ["Kono"],
              specific_note: "連體詞(+名詞)",
              segments: [{ text: "この", meaning: "這...", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "これはペンです。",
              translation: "這是筆 (Kore)。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "ペン", meaning: "筆", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これをお願いします。",
              translation: "麻煩給我這個 (Kore)。",
              segments: [
                { text: "これ", meaning: "這個", tail: "を" },
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "願",
                  furigana: "ねが",
                  meaning: "請求/拜託",
                  tail: "",
                },
                { text: "いします", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "この本は面白いです。",
              translation: "這本書很有趣 (Kono + 名詞)。",
              segments: [
                { text: "この", meaning: "這本", tail: "" },
                { text: "本", furigana: "ほん", meaning: "書", tail: "は" },
                {
                  text: "面白",
                  furigana: "おもしろ",
                  meaning: "有趣",
                  tail: "い",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
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
              pronunciation: ["Kanojo no"],
              specific_note: "",
              segments: [
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她",
                  tail: "の",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼女のカバン。",
              translation: "她的包包。",
              segments: [
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她",
                  tail: "の",
                },
                { text: "カバン", meaning: "包包", tail: "。" },
              ],
            },
            {
              sentence: "彼女の趣味は旅行です。",
              translation: "她的興趣是旅行。",
              segments: [
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她",
                  tail: "の",
                },
                {
                  text: "趣味",
                  furigana: "しゅみ",
                  meaning: "興趣",
                  tail: "は",
                },
                {
                  text: "旅行",
                  furigana: "りょこう",
                  meaning: "旅行",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これは彼女の席です。",
              translation: "這是她的位子。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她",
                  tail: "の",
                },
                { text: "席", furigana: "せき", meaning: "座位", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
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
              pronunciation: ["Anata no"],
              specific_note: "",
              segments: [{ text: "あなた", meaning: "你", tail: "の" }],
            },
          ],
          examples: [
            {
              sentence: "あなたの名前。",
              translation: "你的名字。",
              segments: [
                { text: "あなた", meaning: "你", tail: "の" },
                {
                  text: "名前",
                  furigana: "なまえ",
                  meaning: "名字",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "これはあなたの携帯ですか？",
              translation: "這是你的手機嗎？",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "あなた", meaning: "你", tail: "の" },
                {
                  text: "携帯",
                  furigana: "けいたい",
                  meaning: "手機",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "あなたの番です。",
              translation: "換你了 (是你的回合)。",
              segments: [
                { text: "あなた", meaning: "你", tail: "の" },
                {
                  text: "番",
                  furigana: "ばん",
                  meaning: "順序/回合",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
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
              pronunciation: ["Karera no"],
              specific_note: "",
              segments: [
                {
                  text: "彼ら",
                  furigana: "かれら",
                  meaning: "他們",
                  tail: "の",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼らの家。",
              translation: "他們的家。",
              segments: [
                {
                  text: "彼ら",
                  furigana: "かれら",
                  meaning: "他們",
                  tail: "の",
                },
                { text: "家", furigana: "いえ", meaning: "家", tail: "。" },
              ],
            },
            {
              sentence: "彼らの意見に賛成です。",
              translation: "我贊成他們的意見。",
              segments: [
                {
                  text: "彼ら",
                  furigana: "かれら",
                  meaning: "他們",
                  tail: "の",
                },
                {
                  text: "意見",
                  furigana: "いけん",
                  meaning: "意見",
                  tail: "に",
                },
                {
                  text: "賛成",
                  furigana: "さんせい",
                  meaning: "贊成",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これは彼らの荷物です。",
              translation: "這是他們的行李。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                {
                  text: "彼ら",
                  furigana: "かれら",
                  meaning: "他們",
                  tail: "の",
                },
                { text: "荷物", furigana: "にもつ", meaning: "行李", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
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
              pronunciation: ["Watashitachi no"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "の" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私たちの学校。",
              translation: "我們的學校。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "の" },
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ようこそ、私たちの家へ。",
              translation: "歡迎來我們家。",
              segments: [
                { text: "ようこそ", meaning: "歡迎", tail: "、" },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "の" },
                { text: "家", furigana: "いえ", meaning: "家", tail: "へ" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "私たちのチームが勝ちました。",
              translation: "我們的隊伍贏了。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "の" },
                { text: "チーム", meaning: "隊伍", tail: "が" },
                { text: "勝", furigana: "か", meaning: "贏", tail: "ちました" },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Korera"],
              specific_note: "",
              segments: [{ text: "これら", meaning: "這些", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "これらは本です。",
              translation: "這些是書。",
              segments: [
                { text: "これら", meaning: "這些", tail: "は" },
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これらは全て無料です。",
              translation: "這些全部都是免費的。",
              segments: [
                { text: "これら", meaning: "這些", tail: "は" },
                { text: "全", furigana: "すべ", meaning: "全部", tail: "て" },
                {
                  text: "無料",
                  furigana: "むりょう",
                  meaning: "免費",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これらを片付けてください。",
              translation: "請把這些整理一下。",
              segments: [
                { text: "これら", meaning: "這些", tail: "を" },
                {
                  text: "片付",
                  furigana: "かたづ",
                  meaning: "整理",
                  tail: "けて",
                },
                { text: "ください", meaning: "請...", tail: "。" },
              ],
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
              pronunciation: ["Sorera"],
              specific_note: "中距離",
              segments: [{ text: "それら", meaning: "那些", tail: "" }],
            },
            {
              term_target: "あれら",
              pronunciation: ["Arera"],
              specific_note: "遠距離",
              segments: [{ text: "あれら", meaning: "那些 (遠)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あれらは鳥です。",
              translation: "那些(遠處)是鳥。",
              segments: [
                { text: "あれら", meaning: "那些", tail: "は" },
                { text: "鳥", furigana: "とり", meaning: "鳥", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "それらは何ですか？",
              translation: "那些(你旁邊的)是什麼？",
              segments: [
                { text: "それら", meaning: "那些", tail: "は" },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "それらは重要です。",
              translation: "那些是很重要的。",
              segments: [
                { text: "それら", meaning: "那些", tail: "は" },
                {
                  text: "重要",
                  furigana: "じゅうよう",
                  meaning: "重要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
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
              pronunciation: ["Desu"],
              specific_note: "肯定助動詞",
              segments: [{ text: "です", meaning: "是 (敬語)", tail: "" }],
            },
            {
              term_target: "だ",
              pronunciation: ["Da"],
              specific_note: "常體",
              segments: [{ text: "だ", meaning: "是 (常體)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "私は学生です。",
              translation: "我是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "これは私の本です。",
              translation: "這是我的書。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "あそこは図書館です。",
              translation: "那裡是圖書館。",
              segments: [
                { text: "あそこ", meaning: "那裡", tail: "は" },
                {
                  text: "図書館",
                  furigana: "としょかん",
                  meaning: "圖書館",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Arimasu"],
              specific_note: "物品/植物",
              segments: [
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
            {
              term_target: "います",
              pronunciation: ["Imasu"],
              specific_note: "人/動物",
              segments: [
                { text: "い", meaning: "有/在", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お金があります。",
              translation: "我有錢。",
              segments: [
                { text: "お金", furigana: "かね", meaning: "錢", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "冷蔵庫にビールがあります。",
              translation: "冰箱裡有啤酒 (無生命)。",
              segments: [
                {
                  text: "冷蔵庫",
                  furigana: "れいぞうこ",
                  meaning: "冰箱",
                  tail: "に",
                },
                { text: "ビール", meaning: "啤酒", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "あそこに猫がいます。",
              translation: "那裡有一隻貓 (有生命)。",
              segments: [
                { text: "あそこ", meaning: "那裡", tail: "に" },
                { text: "猫", furigana: "ねこ", meaning: "貓", tail: "が" },
                { text: "い", meaning: "有/在", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
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
              pronunciation: ["Ikimasu"],
              specific_note: "",
              segments: [
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "家へ行きます。",
              translation: "去家裡(回家)。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "へ" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "明日、東京へ行きます。",
              translation: "我明天要去東京。",
              segments: [
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "、",
                },
                {
                  text: "東京",
                  furigana: "とうきょう",
                  meaning: "東京",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "一緒にカラオケに行きませんか？",
              translation: "要不要一起去唱卡拉OK？",
              segments: [
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "に",
                },
                { text: "カラオケ", meaning: "卡拉OK", tail: "に" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きません", meaning: "不做 (否定敬語)", tail: "" },
                { text: "か", meaning: "嗎 (邀請)", tail: "？" },
              ],
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
              pronunciation: ["Moraimasu"],
              specific_note: "得到(收受)",
              segments: [
                { text: "もらい", meaning: "得到", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
            {
              term_target: "とります",
              pronunciation: ["Torimasu"],
              specific_note: "拿取",
              segments: [
                { text: "とり", meaning: "拿", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "プレゼントをもらいます。",
              translation: "收到禮物。",
              segments: [
                { text: "プレゼント", meaning: "禮物", tail: "を" },
                { text: "もらい", meaning: "得到", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "友達からメールをもらいました。",
              translation: "收到了朋友的郵件。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "から",
                },
                { text: "メール", meaning: "郵件", tail: "を" },
                { text: "もらい", meaning: "得到", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "塩をとってください。",
              translation: "請幫我拿鹽巴。",
              segments: [
                { text: "塩", furigana: "しお", meaning: "鹽", tail: "を" },
                { text: "と", meaning: "拿", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Shimasu"],
              specific_note: "",
              segments: [
                { text: "し", meaning: "做", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
            {
              term_target: "やります",
              pronunciation: ["Yarimasu"],
              specific_note: "口語/進行",
              segments: [
                { text: "やり", meaning: "做/搞", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "宿題をします。",
              translation: "做作業。",
              segments: [
                {
                  text: "宿題",
                  furigana: "しゅくだい",
                  meaning: "作業",
                  tail: "を",
                },
                { text: "し", meaning: "做", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "テニスをします。",
              translation: "打網球。",
              segments: [
                { text: "テニス", meaning: "網球", tail: "を" },
                { text: "し", meaning: "做/打", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "今、何をしていますか？",
              translation: "你現在在做什麼？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "何", furigana: "なに", meaning: "什麼", tail: "を" },
                { text: "し", meaning: "做", tail: "" },
                { text: "て", meaning: "(正在)", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Iimasu"],
              specific_note: "說內容",
              segments: [
                { text: "言", furigana: "い", meaning: "說", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
              ],
            },
            {
              term_target: "話します",
              pronunciation: ["Hanashimasu"],
              specific_note: "說語言/交談",
              segments: [
                { text: "話", furigana: "はな", meaning: "說話", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "こんにちはと言います。",
              translation: "說你好。",
              segments: [
                { text: "こんにちは", meaning: "你好", tail: "と" },
                { text: "言", furigana: "い", meaning: "說", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ゆっくり話してください。",
              translation: "請說慢一點。",
              segments: [
                { text: "ゆっくり", meaning: "慢慢地", tail: "" },
                { text: "話", furigana: "はな", meaning: "說", tail: "" },
                { text: "して", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "彼は「はい」と言いました。",
              translation: "他說了「好」。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "「", tail: "" },
                { text: "はい", meaning: "好", tail: "" },
                { text: "」", tail: "と" },
                { text: "言", furigana: "い", meaning: "說", tail: "" },
                { text: "いました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Shitteimasu"],
              specific_note: "狀態",
              segments: [
                { text: "知", furigana: "し", meaning: "知", tail: "" },
                { text: "って", meaning: "(狀態)", tail: "" },
                { text: "います", meaning: "有/在 (敬語)", tail: "" },
              ],
            },
            {
              term_target: "わかります",
              pronunciation: ["Wakarimasu"],
              specific_note: "理解",
              segments: [{ text: "わかります", meaning: "明白/懂", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あなたを知っています。",
              translation: "我認識(知道)你。",
              segments: [
                { text: "あなた", meaning: "你", tail: "を" },
                { text: "知", furigana: "し", meaning: "知道", tail: "" },
                { text: "って", meaning: "(狀態)", tail: "" },
                { text: "います", meaning: "有/在 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "このニュースを知っていますか？",
              translation: "你知道這則新聞嗎？",
              segments: [
                { text: "この", meaning: "這則", tail: "" },
                { text: "ニュース", meaning: "新聞", tail: "を" },
                { text: "知", furigana: "し", meaning: "知道", tail: "" },
                { text: "って", meaning: "(狀態)", tail: "" },
                { text: "います", meaning: "有/在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "意味がわかりますか？",
              translation: "懂意思嗎？",
              segments: [
                { text: "意味", furigana: "いみ", meaning: "意思", tail: "が" },
                { text: "わかります", meaning: "懂", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Omoimasu"],
              specific_note: "覺得/認為",
              segments: [
                { text: "思", furigana: "おも", meaning: "想", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
              ],
            },
            {
              term_target: "考えます",
              pronunciation: ["Kangaemasu"],
              specific_note: "思考/考慮",
              segments: [
                { text: "考", furigana: "かんが", meaning: "思考", tail: "" },
                { text: "えます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "そう思います。",
              translation: "我也這麼覺得。",
              segments: [
                { text: "そう", meaning: "那樣", tail: "" },
                { text: "思", furigana: "おも", meaning: "覺得", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "明日は晴れると思います。",
              translation: "我覺得明天會放晴。",
              segments: [
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "は",
                },
                { text: "晴", furigana: "は", meaning: "放晴", tail: "" },
                { text: "れる", meaning: "會 (動詞)", tail: "と" },
                { text: "思", furigana: "おも", meaning: "覺得", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "将来について考えます。",
              translation: "思考關於未來的事。",
              segments: [
                {
                  text: "将来",
                  furigana: "しょうらい",
                  meaning: "將來",
                  tail: "",
                },
                { text: "について", meaning: "關於", tail: "" },
                { text: "考", furigana: "かんが", meaning: "思考", tail: "" },
                { text: "えます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Mimasu"],
              specific_note: "",
              segments: [
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "映画を見ます。",
              translation: "看電影。",
              segments: [
                {
                  text: "映画",
                  furigana: "えいが",
                  meaning: "電影",
                  tail: "を",
                },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "テレビを見ます。",
              translation: "看電視。",
              segments: [
                { text: "テレビ", meaning: "電視", tail: "を" },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ちょっと見せてください。",
              translation: "請讓我看一下。",
              segments: [
                { text: "ちょっと", meaning: "稍微", tail: "" },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "せて", meaning: "讓 (使役)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Tsukurimasu"],
              specific_note: "",
              segments: [
                { text: "作", furigana: "つく", meaning: "做", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "料理を作ります。",
              translation: "做飯。",
              segments: [
                {
                  text: "料理",
                  furigana: "りょうり",
                  meaning: "料理",
                  tail: "を",
                },
                { text: "作", furigana: "つく", meaning: "做", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ケーキを作りました。",
              translation: "我做了蛋糕。",
              segments: [
                { text: "ケーキ", meaning: "蛋糕", tail: "を" },
                { text: "作", furigana: "つく", meaning: "做", tail: "" },
                { text: "りました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "日本で作られました。",
              translation: "這是日本製造的。",
              segments: [
                {
                  text: "日本",
                  furigana: "にほん",
                  meaning: "日本",
                  tail: "で",
                },
                { text: "作", furigana: "つく", meaning: "製造", tail: "" },
                { text: "られました", meaning: "被 (被動/過去)", tail: "。" },
              ],
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
              pronunciation: ["Kimasu"],
              specific_note: "",
              segments: [
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ここへ来ます。",
              translation: "來這裡。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "へ" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "また来てください。",
              translation: "請再來玩。",
              segments: [
                { text: "また", meaning: "再/又", tail: "" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "て", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "バスが来ました。",
              translation: "公車來了。",
              segments: [
                { text: "バス", meaning: "公車", tail: "が" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Irimasu"],
              specific_note: "動詞",
              segments: [
                { text: "いり", meaning: "要", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
            {
              term_target: "必要です",
              pronunciation: ["Hitsuyou desu"],
              specific_note: "形容動詞",
              segments: [
                {
                  text: "必要",
                  furigana: "ひつよう",
                  meaning: "必要",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "水がいります。",
              translation: "需要水。",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "が" },
                { text: "いり", meaning: "要", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "パスポートがいります。",
              translation: "需要護照。",
              segments: [
                { text: "パスポート", meaning: "護照", tail: "が" },
                { text: "いり", meaning: "要", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "袋はいりますか？",
              translation: "需要袋子嗎？",
              segments: [
                { text: "袋", furigana: "ふくろ", meaning: "袋子", tail: "は" },
                { text: "いり", meaning: "要", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Tsukaimasu"],
              specific_note: "",
              segments: [
                { text: "使", furigana: "つか", meaning: "使用", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ペンを使います。",
              translation: "用筆。",
              segments: [
                { text: "ペン", meaning: "筆", tail: "を" },
                { text: "使", furigana: "つか", meaning: "用", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "パソコンを使います。",
              translation: "使用電腦。",
              segments: [
                { text: "パソコン", meaning: "電腦", tail: "を" },
                { text: "使", furigana: "つか", meaning: "用", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "このトイレを使ってください。",
              translation: "請使用這個廁所。",
              segments: [
                { text: "この", meaning: "這個", tail: "" },
                { text: "トイレ", meaning: "廁所", tail: "を" },
                { text: "使", furigana: "つか", meaning: "使用", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Mitsukemasu"],
              specific_note: "",
              segments: [
                { text: "見", furigana: "み", meaning: "看/找", tail: "" },
                { text: "つけます", meaning: "到/做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "仕事を見つけます。",
              translation: "找工作。",
              segments: [
                {
                  text: "仕事",
                  furigana: "しごと",
                  meaning: "工作",
                  tail: "を",
                },
                { text: "見", furigana: "み", meaning: "找", tail: "" },
                { text: "つけます", meaning: "到 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "鍵を見つけました。",
              translation: "我找到鑰匙了。",
              segments: [
                { text: "鍵", furigana: "かぎ", meaning: "鑰匙", tail: "を" },
                { text: "見", furigana: "み", meaning: "找", tail: "" },
                { text: "つけました", meaning: "到了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "新しい店を見つけました。",
              translation: "發現了一家新店。",
              segments: [
                { text: "新", furigana: "あたら", meaning: "新", tail: "" },
                { text: "しい", meaning: "的", tail: "" },
                { text: "店", furigana: "みせ", meaning: "店", tail: "を" },
                { text: "見", furigana: "み", meaning: "找", tail: "" },
                { text: "つけました", meaning: "到了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Agemasu"],
              specific_note: "我給別人",
              segments: [
                { text: "あげ", meaning: "給", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
            {
              term_target: "くれます",
              pronunciation: ["Kuremasu"],
              specific_note: "別人給我",
              segments: [
                { text: "くれ", meaning: "給(我)", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これをあげます。",
              translation: "給你這個。",
              segments: [
                { text: "これ", meaning: "這個", tail: "を" },
                { text: "あげ", meaning: "給", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "母に花をあげました。",
              translation: "送花給媽媽。",
              segments: [
                { text: "母", furigana: "はは", meaning: "媽媽", tail: "に" },
                { text: "花", furigana: "はな", meaning: "花", tail: "を" },
                { text: "あげ", meaning: "給/送", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "彼がプレゼントをくれました。",
              translation: "他給了我禮物。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "が" },
                { text: "プレゼント", meaning: "禮物", tail: "を" },
                { text: "くれ", meaning: "給(我)", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
          ],
          usage_note:
            "授受動詞需注意方向：Agemasu (給出去)，Kuremasu (給進來)。",
          image_file: "give.png",
        },
        {
          id: "v-16",
          term_zh: "告訴",
          related_terms: [
            {
              term_target: "教えます",
              pronunciation: ["Oshiemasu"],
              specific_note: "",
              segments: [
                { text: "教", furigana: "おし", meaning: "教/告訴", tail: "" },
                { text: "えます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "名前を教えてください。",
              translation: "請告訴我名字。",
              segments: [
                {
                  text: "名前",
                  furigana: "なまえ",
                  meaning: "名字",
                  tail: "を",
                },
                { text: "教", furigana: "おし", meaning: "告訴", tail: "" },
                { text: "えて", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "道を教えてもらえませんか？",
              translation: "可以告訴我路怎麼走嗎？",
              segments: [
                { text: "道", furigana: "みち", meaning: "路", tail: "を" },
                { text: "教", furigana: "おし", meaning: "告訴", tail: "" },
                { text: "えて", meaning: "(動詞連接)", tail: "" },
                { text: "もらえ", meaning: "能(請您)...", tail: "" },
                { text: "ません", meaning: "不/嗎 (否定敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "英語を教えています。",
              translation: "我在教英文。",
              segments: [
                {
                  text: "英語",
                  furigana: "えいご",
                  meaning: "英文",
                  tail: "を",
                },
                { text: "教", furigana: "おし", meaning: "教", tail: "" },
                { text: "えて", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Hatarakimasu"],
              specific_note: "",
              segments: [
                { text: "働", furigana: "はたら", meaning: "工作", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
              ],
            },
            {
              term_target: "仕事します",
              pronunciation: ["Shigoto shimasu"],
              specific_note: "",
              segments: [
                { text: "仕事", furigana: "しごと", meaning: "工作", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ここで働きます。",
              translation: "在這工作。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "で" },
                { text: "働", furigana: "はたら", meaning: "工作", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "毎日働きます。",
              translation: "每天工作。",
              segments: [
                {
                  text: "毎日",
                  furigana: "まいにち",
                  meaning: "每天",
                  tail: "",
                },
                { text: "働", furigana: "はたら", meaning: "工作", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "銀行で働いています。",
              translation: "正在銀行工作。",
              segments: [
                {
                  text: "銀行",
                  furigana: "ぎんこう",
                  meaning: "銀行",
                  tail: "で",
                },
                { text: "働", furigana: "はたら", meaning: "工作", tail: "" },
                { text: "いて", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Suki desu"],
              specific_note: "",
              segments: [
                { text: "好", furigana: "す", meaning: "喜歡", tail: "" },
                { text: "き", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "猫が好きです。",
              translation: "我喜歡貓。",
              segments: [
                { text: "猫", furigana: "ねこ", meaning: "貓", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "" },
                { text: "き", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "日本料理が好きです。",
              translation: "我喜歡日本料理。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                {
                  text: "料理",
                  furigana: "りょうり",
                  meaning: "料理",
                  tail: "が",
                },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "" },
                { text: "き", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "あなたは誰が好きですか？",
              translation: "你喜歡誰？",
              segments: [
                { text: "あなた", meaning: "你", tail: "は" },
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "" },
                { text: "き", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Okimasu"],
              specific_note: "",
              segments: [
                { text: "起", furigana: "お", meaning: "起床", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "早く起きます。",
              translation: "早起。",
              segments: [
                { text: "早", furigana: "はや", meaning: "早", tail: "く" },
                { text: "起", furigana: "お", meaning: "起床", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "毎朝６時に起きます。",
              translation: "每天早上六點起床。",
              segments: [
                {
                  text: "毎朝",
                  furigana: "まいあさ",
                  meaning: "每天早上",
                  tail: "",
                },
                {
                  text: "６時",
                  furigana: "ろくじ",
                  meaning: "六點",
                  tail: "に",
                },
                { text: "起", furigana: "お", meaning: "起床", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "まだ起きていますか？",
              translation: "你還醒著嗎？",
              segments: [
                { text: "まだ", meaning: "還", tail: "" },
                { text: "起", furigana: "お", meaning: "起床/醒", tail: "" },
                { text: "きて", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Hanashimasu"],
              specific_note: "",
              segments: [
                { text: "話", furigana: "はな", meaning: "說話", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本語を話します。",
              translation: "說日文。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "を",
                },
                { text: "話", furigana: "はな", meaning: "說", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "先生と話しました。",
              translation: "跟老師說過話了。",
              segments: [
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "と",
                },
                { text: "話", furigana: "はな", meaning: "說", tail: "" },
                { text: "しました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "英語が話せますか？",
              translation: "你會說英文嗎？",
              segments: [
                {
                  text: "英語",
                  furigana: "えいご",
                  meaning: "英文",
                  tail: "が",
                },
                { text: "話", furigana: "はな", meaning: "說", tail: "" },
                { text: "せます", meaning: "能... (可能形敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Kikoemasu"],
              specific_note: "自然聽見",
              segments: [
                { text: "聞", furigana: "き", meaning: "聽", tail: "" },
                { text: "こえます", meaning: "見/到 (敬語)", tail: "" },
              ],
            },
            {
              term_target: "聞きます",
              pronunciation: ["Kikimasu"],
              specific_note: "聆聽/詢問",
              segments: [
                { text: "聞", furigana: "き", meaning: "聽/問", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "聞こえますか？",
              translation: "聽得見嗎？",
              segments: [
                { text: "聞", furigana: "き", meaning: "聽", tail: "" },
                { text: "こえます", meaning: "見/到 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "音楽を聞きます。",
              translation: "聽音樂 (Kikimasu)。",
              segments: [
                {
                  text: "音楽",
                  furigana: "おんがく",
                  meaning: "音樂",
                  tail: "を",
                },
                { text: "聞", furigana: "き", meaning: "聽", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "波の音が聞こえます。",
              translation: "聽得見海浪的聲音 (Kikoemasu)。",
              segments: [
                { text: "波", furigana: "なみ", meaning: "海浪", tail: "の" },
                { text: "音", furigana: "おと", meaning: "聲音", tail: "が" },
                { text: "聞", furigana: "き", meaning: "聽", tail: "" },
                { text: "こえます", meaning: "見 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Kakimasu"],
              specific_note: "",
              segments: [
                { text: "書", furigana: "か", meaning: "寫", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "名前を書きます。",
              translation: "寫名字。",
              segments: [
                {
                  text: "名前",
                  furigana: "なまえ",
                  meaning: "名字",
                  tail: "を",
                },
                { text: "書", furigana: "か", meaning: "寫", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "手紙を書きます。",
              translation: "寫信。",
              segments: [
                { text: "手紙", furigana: "てがみ", meaning: "信", tail: "を" },
                { text: "書", furigana: "か", meaning: "寫", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ここに住所を書いてください。",
              translation: "請在這裡寫下地址。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "に" },
                {
                  text: "住所",
                  furigana: "じゅうしょ",
                  meaning: "地址",
                  tail: "を",
                },
                { text: "書", furigana: "か", meaning: "寫", tail: "" },
                { text: "いて", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Yomimasu"],
              specific_note: "",
              segments: [
                { text: "読", furigana: "よ", meaning: "讀", tail: "" },
                { text: "みます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "本を読みます。",
              translation: "看書。",
              segments: [
                { text: "本", furigana: "ほん", meaning: "書", tail: "を" },
                { text: "読", furigana: "よ", meaning: "讀", tail: "" },
                { text: "みます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "新聞を読みます。",
              translation: "看報紙。",
              segments: [
                {
                  text: "新聞",
                  furigana: "しんぶん",
                  meaning: "報紙",
                  tail: "を",
                },
                { text: "読", furigana: "よ", meaning: "讀", tail: "" },
                { text: "みます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "この漢字が読めません。",
              translation: "我不懂(讀不出)這個漢字。",
              segments: [
                { text: "この", meaning: "這個", tail: "" },
                {
                  text: "漢字",
                  furigana: "かんじ",
                  meaning: "漢字",
                  tail: "が",
                },
                { text: "読", furigana: "よ", meaning: "讀", tail: "" },
                {
                  text: "めません",
                  meaning: "不能... (可能/否定)",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Machimasu"],
              specific_note: "",
              segments: [
                { text: "待", furigana: "ま", meaning: "等", tail: "" },
                { text: "ちます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "待ってください。",
              translation: "請等一下。",
              segments: [
                { text: "待", furigana: "ま", meaning: "等", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "バスを待っています。",
              translation: "正在等公車。",
              segments: [
                { text: "バス", meaning: "公車", tail: "を" },
                { text: "待", furigana: "ま", meaning: "等", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "友達を１時間待ちました。",
              translation: "等朋友等了一小時。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "を",
                },
                {
                  text: "１時間",
                  furigana: "いちじかん",
                  meaning: "一小時",
                  tail: "",
                },
                { text: "待", furigana: "ま", meaning: "等", tail: "" },
                { text: "ちました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Yattemimasu"],
              specific_note: "試做",
              segments: [
                { text: "やって", meaning: "做(連接形)", tail: "" },
                { text: "みます", meaning: "試試看", tail: "" },
              ],
            },
            {
              term_target: "食べてみます",
              pronunciation: ["Tabetemimasu"],
              specific_note: "試吃",
              segments: [
                { text: "食べ", furigana: "たべ", meaning: "吃", tail: "" },
                { text: "て", meaning: "(連接形)", tail: "" },
                { text: "みます", meaning: "試試看", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これをやってみます。",
              translation: "試試看做這個。",
              segments: [
                { text: "これ", meaning: "這個", tail: "を" },
                { text: "やって", meaning: "做(連接形)", tail: "" },
                { text: "みます", meaning: "試試看", tail: "。" },
              ],
            },
            {
              sentence: "その服を着てみます。",
              translation: "試穿那件衣服。",
              segments: [
                { text: "その", meaning: "那件", tail: "" },
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "を" },
                { text: "着", furigana: "き", meaning: "穿", tail: "" },
                { text: "て", meaning: "(連接形)", tail: "" },
                { text: "みます", meaning: "試試看", tail: "。" },
              ],
            },
            {
              sentence: "頑張ってみます。",
              translation: "我會努力試試看。",
              segments: [
                { text: "頑張", furigana: "がんば", meaning: "努力", tail: "" },
                { text: "って", meaning: "(連接形)", tail: "" },
                { text: "みます", meaning: "試試看", tail: "。" },
              ],
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
              pronunciation: ["Haraimasu"],
              specific_note: "",
              segments: [
                { text: "払", furigana: "はら", meaning: "付", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お金を払います。",
              translation: "付錢。",
              segments: [
                { text: "お金", furigana: "かね", meaning: "錢", tail: "を" },
                { text: "払", furigana: "はら", meaning: "付", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "カードで払います。",
              translation: "用卡付款。",
              segments: [
                { text: "カード", meaning: "卡片", tail: "で" },
                { text: "払", furigana: "はら", meaning: "付", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私が払います。",
              translation: "我來付。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "が" },
                { text: "払", furigana: "はら", meaning: "付", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Erabimasu"],
              specific_note: "",
              segments: [
                { text: "選", furigana: "えら", meaning: "選", tail: "" },
                { text: "びます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "好きなのを選びます。",
              translation: "選喜歡的。",
              segments: [
                { text: "好", furigana: "す", meaning: "喜歡", tail: "" },
                { text: "きなの", meaning: "的(東西)", tail: "を" },
                { text: "選", furigana: "えら", meaning: "選", tail: "" },
                { text: "びます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "どちらを選びますか？",
              translation: "你要選哪一個？",
              segments: [
                { text: "どちら", meaning: "哪一個", tail: "を" },
                { text: "選", furigana: "えら", meaning: "選", tail: "" },
                { text: "びます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "プレゼントを選びます。",
              translation: "挑選禮物。",
              segments: [
                { text: "プレゼント", meaning: "禮物", tail: "を" },
                { text: "選", furigana: "えら", meaning: "選", tail: "" },
                { text: "びます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Hairimasu"],
              specific_note: "",
              segments: [
                { text: "入", furigana: "はい", meaning: "進", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "部屋に入ります。",
              translation: "進房間。",
              segments: [
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "に" },
                { text: "入", furigana: "はい", meaning: "進", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お風呂に入ります。",
              translation: "洗澡 (進入浴缸)。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "風呂",
                  furigana: "ふろ",
                  meaning: "澡堂/浴缸",
                  tail: "に",
                },
                { text: "入", furigana: "はい", meaning: "進", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "どうぞ、中に入ってください。",
              translation: "請進來裡面。",
              segments: [
                { text: "どうぞ", meaning: "請", tail: "、" },
                { text: "中", furigana: "なか", meaning: "裡面", tail: "に" },
                { text: "入", furigana: "はい", meaning: "進", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Sumimasu"],
              specific_note: "",
              segments: [
                { text: "住", furigana: "す", meaning: "住", tail: "" },
                { text: "みます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "東京に住んでいます。",
              translation: "住在東京。",
              segments: [
                {
                  text: "東京",
                  furigana: "とうきょう",
                  meaning: "東京",
                  tail: "に",
                },
                { text: "住", furigana: "す", meaning: "住", tail: "" },
                { text: "んで", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "どこに住んでいますか？",
              translation: "你住在哪裡？",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "に" },
                { text: "住", furigana: "す", meaning: "住", tail: "" },
                { text: "んで", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "日本に住みたいです。",
              translation: "我想住在日本。",
              segments: [
                {
                  text: "日本",
                  furigana: "にほん",
                  meaning: "日本",
                  tail: "に",
                },
                { text: "住", furigana: "す", meaning: "住", tail: "" },
                { text: "みたい", meaning: "想", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Tsukimasu"],
              specific_note: "",
              segments: [
                { text: "着", furigana: "つ", meaning: "到", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "駅に着きます。",
              translation: "到達車站。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "に" },
                { text: "着", furigana: "つ", meaning: "到", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "何時に着きますか？",
              translation: "幾點會到？",
              segments: [
                {
                  text: "何時",
                  furigana: "なんじ",
                  meaning: "幾點",
                  tail: "に",
                },
                { text: "着", furigana: "つ", meaning: "到", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "空港に着きました。",
              translation: "抵達機場了。",
              segments: [
                {
                  text: "空港",
                  furigana: "くうこう",
                  meaning: "機場",
                  tail: "に",
                },
                { text: "着", furigana: "つ", meaning: "到", tail: "" },
                { text: "きました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Arukimasu"],
              specific_note: "",
              segments: [
                { text: "歩", furigana: "ある", meaning: "走", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "歩いて帰ります。",
              translation: "走路回家。",
              segments: [
                { text: "歩", furigana: "ある", meaning: "走", tail: "" },
                { text: "いて", meaning: "(動詞連接)", tail: "" },
                { text: "帰", furigana: "かえ", meaning: "回", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "駅まで歩きます。",
              translation: "走到車站。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "まで" },
                { text: "歩", furigana: "ある", meaning: "走", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ここから歩いて５分です。",
              translation: "從這裡走路5分鐘。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "から" },
                { text: "歩", furigana: "ある", meaning: "走", tail: "" },
                { text: "いて", meaning: "(動詞連接)", tail: "" },
                {
                  text: "５分",
                  furigana: "ごふん",
                  meaning: "五分鐘",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Akemasu"],
              specific_note: "",
              segments: [
                { text: "開", furigana: "あ", meaning: "開", tail: "" },
                { text: "けます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ドアを開けます。",
              translation: "開門。",
              segments: [
                { text: "ドア", meaning: "門", tail: "を" },
                { text: "開", furigana: "あ", meaning: "開", tail: "" },
                { text: "けます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "窓を開けてください。",
              translation: "請開窗戶。",
              segments: [
                { text: "窓", furigana: "まど", meaning: "窗戶", tail: "を" },
                { text: "開", furigana: "あ", meaning: "開", tail: "" },
                { text: "けて", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "プレゼントを開けます。",
              translation: "打開禮物。",
              segments: [
                { text: "プレゼント", meaning: "禮物", tail: "を" },
                { text: "開", furigana: "あ", meaning: "開", tail: "" },
                { text: "けます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Shimemasu"],
              specific_note: "",
              segments: [
                { text: "閉", furigana: "し", meaning: "關", tail: "" },
                { text: "めます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "窓を閉めます。",
              translation: "關窗。",
              segments: [
                { text: "窓", furigana: "まど", meaning: "窗戶", tail: "を" },
                { text: "閉", furigana: "し", meaning: "關", tail: "" },
                { text: "めます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ドアを閉めてください。",
              translation: "請關門。",
              segments: [
                { text: "ドア", meaning: "門", tail: "を" },
                { text: "閉", furigana: "し", meaning: "關", tail: "" },
                { text: "めて", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "店を閉めます。",
              translation: "打烊(關店)。",
              segments: [
                { text: "店", furigana: "みせ", meaning: "店", tail: "を" },
                { text: "閉", furigana: "し", meaning: "關", tail: "" },
                { text: "めます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Tetsudaimasu"],
              specific_note: "幫忙做事",
              segments: [
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
              ],
            },
            {
              term_target: "助けます",
              pronunciation: ["Tasukemasu"],
              specific_note: "救助",
              segments: [
                { text: "助", furigana: "たす", meaning: "救", tail: "" },
                { text: "けます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "手伝ってください。",
              translation: "請幫我。",
              segments: [
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "母を手伝います。",
              translation: "幫忙媽媽。",
              segments: [
                { text: "母", furigana: "はは", meaning: "媽媽", tail: "を" },
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "助けて！",
              translation: "救命！(Tasukete)",
              segments: [
                { text: "助", furigana: "たす", meaning: "救", tail: "" },
                { text: "けて", meaning: "(動詞連接)", tail: "！" },
              ],
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
              pronunciation: ["Mottekimasu"],
              specific_note: "",
              segments: [
                { text: "持", furigana: "も", meaning: "拿/帶", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "きます", meaning: "來 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "傘を持ってきます。",
              translation: "帶傘來。",
              segments: [
                { text: "傘", furigana: "かさ", meaning: "傘", tail: "を" },
                { text: "持", furigana: "も", meaning: "拿/帶", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "きます", meaning: "來 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "飲み物を持ってきます。",
              translation: "拿飲料來。",
              segments: [
                { text: "飲", furigana: "の", meaning: "喝", tail: "" },
                { text: "み", meaning: "(連接)", tail: "" },
                { text: "物", furigana: "もの", meaning: "東西", tail: "を" },
                { text: "持", furigana: "も", meaning: "拿/帶", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "きます", meaning: "來 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "明日、宿題を持ってきてください。",
              translation: "請明天帶作業來。",
              segments: [
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "、",
                },
                {
                  text: "宿題",
                  furigana: "しゅくだい",
                  meaning: "作業",
                  tail: "を",
                },
                { text: "持", furigana: "も", meaning: "帶", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "き", meaning: "來", tail: "" },
                { text: "て", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Irimasu"],
              specific_note: "動詞/物品",
              segments: [
                { text: "いり", meaning: "要", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
            {
              term_target: "必要です",
              pronunciation: ["Hitsuyou desu"],
              specific_note: "形容動詞",
              segments: [
                {
                  text: "必要",
                  furigana: "ひつよう",
                  meaning: "必要",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "水がいります。",
              translation: "需要水。",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "が" },
                { text: "いり", meaning: "要", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "袋はいりますか？",
              translation: "需要袋子嗎？",
              segments: [
                { text: "袋", furigana: "ふくろ", meaning: "袋子", tail: "は" },
                { text: "いり", meaning: "要", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "これはいりません。",
              translation: "我不需要這個。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "いり", meaning: "要", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["Tsukaimasu"],
              specific_note: "",
              segments: [
                { text: "使", furigana: "つか", meaning: "使用", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ペンを使います。",
              translation: "用筆。",
              segments: [
                { text: "ペン", meaning: "筆", tail: "を" },
                { text: "使", furigana: "つか", meaning: "用", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "箸を使います。",
              translation: "用筷子。",
              segments: [
                { text: "箸", furigana: "はし", meaning: "筷子", tail: "を" },
                { text: "使", furigana: "つか", meaning: "用", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "頭を使ってください。",
              translation: "請動動腦。",
              segments: [
                {
                  text: "頭",
                  furigana: "あたま",
                  meaning: "頭/腦",
                  tail: "を",
                },
                { text: "使", furigana: "つか", meaning: "用", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Narimasu"],
              specific_note: "",
              segments: [
                { text: "なり", meaning: "變", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "先生になります。",
              translation: "變成老師。",
              segments: [
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "に",
                },
                { text: "なり", meaning: "變", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "元気になりました。",
              translation: "變健康(有精神)了。",
              segments: [
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "健康/精神",
                  tail: "に",
                },
                { text: "なり", meaning: "變", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "寒くなりました。",
              translation: "變冷了。",
              segments: [
                { text: "寒", furigana: "さむ", meaning: "冷", tail: "く" },
                { text: "なり", meaning: "變", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Hajimemasu"],
              specific_note: "他動詞/我開始",
              segments: [
                { text: "始", furigana: "はじ", meaning: "開始", tail: "" },
                { text: "めます", meaning: "做 (敬語)", tail: "" },
              ],
            },
            {
              term_target: "始まります",
              pronunciation: ["Hajimarimasu"],
              specific_note: "自動詞/某事開始",
              segments: [
                { text: "始", furigana: "はじ", meaning: "開始", tail: "" },
                { text: "まります", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "勉強を始めます。",
              translation: "開始讀書。",
              segments: [
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書/學習",
                  tail: "を",
                },
                { text: "始", furigana: "はじ", meaning: "開始", tail: "" },
                { text: "めます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "会議が始まります。",
              translation: "會議開始了。",
              segments: [
                {
                  text: "会議",
                  furigana: "かいぎ",
                  meaning: "會議",
                  tail: "が",
                },
                { text: "始", furigana: "はじ", meaning: "開始", tail: "" },
                { text: "まります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "そろそろ始めましょう。",
              translation: "差不多該開始了。",
              segments: [
                { text: "そろそろ", meaning: "差不多", tail: "" },
                { text: "始", furigana: "はじ", meaning: "開始", tail: "" },
                { text: "めましょう", meaning: "吧 (勸誘)", tail: "。" },
              ],
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
              pronunciation: ["Owarimasu"],
              specific_note: "",
              segments: [
                { text: "終", furigana: "お", meaning: "結束", tail: "" },
                { text: "わります", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "仕事が終わります。",
              translation: "工作結束。",
              segments: [
                {
                  text: "仕事",
                  furigana: "しごと",
                  meaning: "工作",
                  tail: "が",
                },
                { text: "終", furigana: "お", meaning: "結束", tail: "" },
                { text: "わります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "夏休みが終わりました。",
              translation: "暑假結束了。",
              segments: [
                {
                  text: "夏休",
                  furigana: "なつやす",
                  meaning: "暑假",
                  tail: "み",
                },
                { text: "が", meaning: "主詞標記", tail: "" },
                { text: "終", furigana: "お", meaning: "結束", tail: "" },
                { text: "わりました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "もう終わりましたか？",
              translation: "已經結束了嗎？",
              segments: [
                { text: "もう", meaning: "已經", tail: "" },
                { text: "終", furigana: "お", meaning: "結束", tail: "" },
                { text: "わりました", meaning: "了 (過去敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Tomarimasu"],
              specific_note: "自動詞",
              segments: [
                { text: "止", furigana: "と", meaning: "停", tail: "" },
                { text: "まります", meaning: "做 (敬語)", tail: "" },
              ],
            },
            {
              term_target: "止めます",
              pronunciation: ["Tomemasu"],
              specific_note: "他動詞",
              segments: [
                { text: "止", furigana: "と", meaning: "停", tail: "" },
                { text: "めます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "車が止まります。",
              translation: "車子停下。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "が" },
                { text: "止", furigana: "と", meaning: "停", tail: "" },
                { text: "まります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ここで止めてください。",
              translation: "請停在這裡 (對司機說)。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "で" },
                { text: "止", furigana: "と", meaning: "停", tail: "" },
                { text: "めて", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "時計が止まりました。",
              translation: "時鐘停了。",
              segments: [
                {
                  text: "時計",
                  furigana: "とけい",
                  meaning: "時鐘",
                  tail: "が",
                },
                { text: "止", furigana: "と", meaning: "停", tail: "" },
                { text: "まりました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Oboeteimasu"],
              specific_note: "狀態",
              segments: [
                { text: "覚", furigana: "おぼ", meaning: "記", tail: "" },
                { text: "えて", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "有/在 (敬語)", tail: "" },
              ],
            },
            {
              term_target: "覚えます",
              pronunciation: ["Oboemasu"],
              specific_note: "動作",
              segments: [
                { text: "覚", furigana: "おぼ", meaning: "記/背", tail: "" },
                { text: "えます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "単語を覚えます。",
              translation: "背單字。",
              segments: [
                {
                  text: "単語",
                  furigana: "たんご",
                  meaning: "單字",
                  tail: "を",
                },
                { text: "覚", furigana: "おぼ", meaning: "背", tail: "" },
                { text: "えます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私のことを覚えていますか？",
              translation: "你記得我嗎？",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "こと", meaning: "事情", tail: "を" },
                { text: "覚", furigana: "おぼ", meaning: "記", tail: "" },
                { text: "えて", meaning: "(狀態)", tail: "" },
                { text: "います", meaning: "有/在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "電話番号を覚えていません。",
              translation: "我不記得電話號碼。",
              segments: [
                { text: "電話", furigana: "でんわ", meaning: "電話", tail: "" },
                {
                  text: "番号",
                  furigana: "ばんごう",
                  meaning: "號碼",
                  tail: "を",
                },
                { text: "覚", furigana: "おぼ", meaning: "記", tail: "" },
                { text: "えて", meaning: "(狀態)", tail: "" },
                { text: "いません", meaning: "沒有 (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["Hanashimasu"],
              specific_note: "",
              segments: [
                { text: "話", furigana: "はな", meaning: "說話", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "友達と話します。",
              translation: "跟朋友說話。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "と",
                },
                { text: "話", furigana: "はな", meaning: "說", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "社長と話しました。",
              translation: "跟社長談過了。",
              segments: [
                {
                  text: "社長",
                  furigana: "しゃちょう",
                  meaning: "社長",
                  tail: "と",
                },
                { text: "話", furigana: "はな", meaning: "說", tail: "" },
                { text: "しました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "もっと話したいです。",
              translation: "我想多聊聊。",
              segments: [
                { text: "もっと", meaning: "更/多", tail: "" },
                { text: "話", furigana: "はな", meaning: "說", tail: "" },
                { text: "したい", meaning: "想做", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Aimasu"],
              specific_note: "",
              segments: [
                { text: "会", furigana: "あ", meaning: "見面", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "友達に会います。",
              translation: "見朋友。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "に",
                },
                { text: "会", furigana: "あ", meaning: "見", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "また会いましょう。",
              translation: "下次見。",
              segments: [
                { text: "また", meaning: "下次/再", tail: "" },
                { text: "会", furigana: "あ", meaning: "見", tail: "" },
                { text: "いましょう", meaning: "吧 (勸誘)", tail: "。" },
              ],
            },
            {
              sentence: "駅で会いましょう。",
              translation: "在車站見面吧。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "で" },
                { text: "会", furigana: "あ", meaning: "見", tail: "" },
                { text: "いましょう", meaning: "吧 (勸誘)", tail: "。" },
              ],
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
              pronunciation: ["Norimasu"],
              specific_note: "",
              segments: [
                { text: "乗", furigana: "の", meaning: "搭乘", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "バスに乗ります。",
              translation: "搭公車。",
              segments: [
                { text: "バス", meaning: "公車", tail: "に" },
                { text: "乗", furigana: "の", meaning: "搭", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "電車に乗ります。",
              translation: "搭電車。",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "に",
                },
                { text: "乗", furigana: "の", meaning: "搭", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "タクシーに乗りましょう。",
              translation: "搭計程車吧。",
              segments: [
                { text: "タクシー", meaning: "計程車", tail: "に" },
                { text: "乗", furigana: "の", meaning: "搭", tail: "" },
                { text: "りましょう", meaning: "吧 (勸誘)", tail: "。" },
              ],
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
              pronunciation: ["Okimasu"],
              specific_note: "",
              segments: [
                { text: "置", furigana: "お", meaning: "放", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ここに置きます。",
              translation: "放這裡。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "に" },
                { text: "置", furigana: "お", meaning: "放", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "荷物を置いてください。",
              translation: "請放下行李。",
              segments: [
                {
                  text: "荷物",
                  furigana: "にもつ",
                  meaning: "行李",
                  tail: "を",
                },
                { text: "置", furigana: "お", meaning: "放", tail: "" },
                { text: "いて", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "傘をどこに置きましたか？",
              translation: "你把傘放在哪裡了？",
              segments: [
                { text: "傘", furigana: "かさ", meaning: "傘", tail: "を" },
                { text: "どこ", meaning: "哪裡", tail: "に" },
                { text: "置", furigana: "お", meaning: "放", tail: "" },
                { text: "きました", meaning: "了 (過去敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Tabemasu"],
              specific_note: "",
              segments: [
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ご飯を食べます。",
              translation: "吃飯。",
              segments: [
                { text: "ご飯", furigana: "ごはん", meaning: "飯", tail: "を" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "野菜を食べてください。",
              translation: "請吃蔬菜。",
              segments: [
                {
                  text: "野菜",
                  furigana: "やさい",
                  meaning: "蔬菜",
                  tail: "を",
                },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べて", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "何を食べたいですか？",
              translation: "你想吃什麼？",
              segments: [
                { text: "何", furigana: "なに", meaning: "什麼", tail: "を" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べたい", meaning: "想做", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Nemasu"],
              specific_note: "",
              segments: [
                { text: "寝", furigana: "ね", meaning: "睡", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "もう寝ます。",
              translation: "要睡了。",
              segments: [
                { text: "もう", meaning: "已經/要", tail: "" },
                { text: "寝", furigana: "ね", meaning: "睡", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "昨日、よく寝ました。",
              translation: "昨天睡得很好。",
              segments: [
                {
                  text: "昨日",
                  furigana: "きのう",
                  meaning: "昨天",
                  tail: "、",
                },
                { text: "よく", meaning: "很好地", tail: "" },
                { text: "寝", furigana: "ね", meaning: "睡", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "１１時に寝ます。",
              translation: "11點睡覺。",
              segments: [
                {
                  text: "１１時",
                  furigana: "じゅういちじ",
                  meaning: "11點",
                  tail: "に",
                },
                { text: "寝", furigana: "ね", meaning: "睡", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Okurimasu"],
              specific_note: "",
              segments: [
                { text: "送", furigana: "おく", meaning: "送/寄", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "メールを送ります。",
              translation: "寄信。",
              segments: [
                { text: "メール", meaning: "郵件", tail: "を" },
                { text: "送", furigana: "おく", meaning: "送/寄", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "荷物を送ります。",
              translation: "寄包裹。",
              segments: [
                {
                  text: "荷物",
                  furigana: "にもつ",
                  meaning: "行李/包裹",
                  tail: "を",
                },
                { text: "送", furigana: "おく", meaning: "送/寄", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "友達に手紙を送りました。",
              translation: "寄信給朋友。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "に",
                },
                { text: "手紙", furigana: "てがみ", meaning: "信", tail: "を" },
                { text: "送", furigana: "おく", meaning: "送/寄", tail: "" },
                { text: "りました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Untenshimasu"],
              specific_note: "",
              segments: [
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "します", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "車を運転します。",
              translation: "開車。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "を" },
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "運転できますか？",
              translation: "你會開車嗎？",
              segments: [
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "できます", meaning: "會/能 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "安全に運転してください。",
              translation: "請小心駕駛。",
              segments: [
                {
                  text: "安全",
                  furigana: "あんぜん",
                  meaning: "安全",
                  tail: "に",
                },
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "して", meaning: "做(連接形)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Benkyoushimasu"],
              specific_note: "",
              segments: [
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書/學習",
                  tail: "",
                },
                { text: "します", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本語を勉強します。",
              translation: "讀日文。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "を",
                },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書",
                  tail: "",
                },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "図書館で勉強します。",
              translation: "在圖書館讀書。",
              segments: [
                {
                  text: "図書館",
                  furigana: "としょかん",
                  meaning: "圖書館",
                  tail: "で",
                },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書",
                  tail: "",
                },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "歴史を勉強しています。",
              translation: "正在讀歷史。",
              segments: [
                {
                  text: "歴史",
                  furigana: "れきし",
                  meaning: "歷史",
                  tail: "を",
                },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書",
                  tail: "",
                },
                { text: "して", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Kaerimasu"],
              specific_note: "",
              segments: [
                { text: "帰", furigana: "かえ", meaning: "回", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "家へ帰ります。",
              translation: "回家。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "へ" },
                { text: "帰", furigana: "かえ", meaning: "回", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "国へ帰ります。",
              translation: "回國。",
              segments: [
                {
                  text: "国",
                  furigana: "くに",
                  meaning: "國家/故鄉",
                  tail: "へ",
                },
                { text: "帰", furigana: "かえ", meaning: "回", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "気をつけて帰ってください。",
              translation: "請小心慢走(回家)。",
              segments: [
                { text: "気", furigana: "き", meaning: "精神/心", tail: "を" },
                { text: "つけ", meaning: "附上/注意", tail: "" },
                { text: "て", meaning: "(連接形)", tail: "" },
                { text: "帰", furigana: "かえ", meaning: "回", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Wakarimasu"],
              specific_note: "",
              segments: [
                { text: "分", furigana: "わ", meaning: "懂/分", tail: "" },
                { text: "かります", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "はい、分かりました。",
              translation: "好的，了解了。",
              segments: [
                { text: "はい", meaning: "好", tail: "、" },
                { text: "分", furigana: "わ", meaning: "懂", tail: "" },
                { text: "かりました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "日本語が分かりますか？",
              translation: "你懂日文嗎？",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "が",
                },
                { text: "分", furigana: "わ", meaning: "懂", tail: "" },
                { text: "かります", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "よく分かりません。",
              translation: "不太清楚。",
              segments: [
                { text: "よく", meaning: "不太", tail: "" },
                { text: "分", furigana: "わ", meaning: "懂", tail: "" },
                { text: "かりません", meaning: "不 (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["Ii"],
              specific_note: "伊形容詞",
              segments: [{ text: "いい", meaning: "好", tail: "" }],
            },
            {
              term_target: "よい",
              pronunciation: ["Yoi"],
              specific_note: "變化形",
              segments: [{ text: "よい", meaning: "好", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "いい天気です。",
              translation: "好天氣。",
              segments: [
                { text: "いい", meaning: "好", tail: "" },
                { text: "天気", furigana: "てんき", meaning: "天氣", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "それはいい考えです。",
              translation: "那是個好主意。",
              segments: [
                { text: "それ", meaning: "那個", tail: "は" },
                { text: "いい", meaning: "好", tail: "" },
                {
                  text: "考",
                  furigana: "かんが",
                  meaning: "想法/主意",
                  tail: "え",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "調子がいいです。",
              translation: "狀況很好。",
              segments: [
                {
                  text: "調子",
                  furigana: "ちょうし",
                  meaning: "狀況",
                  tail: "が",
                },
                { text: "いい", meaning: "好", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Warui"],
              specific_note: "伊形容詞",
              segments: [
                { text: "悪", furigana: "わる", meaning: "壞", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "気分が悪いです。",
              translation: "不舒服/心情不好。",
              segments: [
                {
                  text: "気分",
                  furigana: "きぶん",
                  meaning: "心情/身體",
                  tail: "が",
                },
                { text: "悪", furigana: "わる", meaning: "壞", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "天気が悪いです。",
              translation: "天氣不好。",
              segments: [
                {
                  text: "天気",
                  furigana: "てんき",
                  meaning: "天氣",
                  tail: "が",
                },
                { text: "悪", furigana: "わる", meaning: "壞", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "悪い夢を見ました。",
              translation: "做了惡夢。",
              segments: [
                { text: "悪", furigana: "わる", meaning: "壞", tail: "い" },
                { text: "夢", furigana: "ゆめ", meaning: "夢", tail: "を" },
                { text: "見", furigana: "み", meaning: "看/做", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Atarashii"],
              specific_note: "伊形容詞",
              segments: [
                { text: "新", furigana: "あたら", meaning: "新", tail: "しい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "新しいスマホ。",
              translation: "新手機。",
              segments: [
                { text: "新", furigana: "あたら", meaning: "新", tail: "しい" },
                { text: "スマホ", meaning: "智慧型手機", tail: "。" },
              ],
            },
            {
              sentence: "新しい友達ができました。",
              translation: "交了新朋友。",
              segments: [
                { text: "新", furigana: "あたら", meaning: "新", tail: "しい" },
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "が",
                },
                { text: "でき", meaning: "完成/交到", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "明けましておめでとう。",
              translation: "新年快樂。",
              segments: [
                {
                  text: "明",
                  furigana: "あ",
                  meaning: "開/過",
                  tail: "けまして",
                },
                { text: "おめでとう", meaning: "恭喜", tail: "。" },
              ],
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
              pronunciation: ["Ichiban"],
              specific_note: "最/第一名",
              segments: [
                {
                  text: "一番",
                  furigana: "いちばん",
                  meaning: "第一/最",
                  tail: "",
                },
              ],
            },
            {
              term_target: "最初",
              pronunciation: ["Saisho"],
              specific_note: "最初",
              segments: [
                {
                  text: "最初",
                  furigana: "さいしょ",
                  meaning: "最初",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "一番好きです。",
              translation: "最喜歡。",
              segments: [
                { text: "一番", furigana: "いちばん", meaning: "最", tail: "" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "これが一番いいです。",
              translation: "這個最好。",
              segments: [
                { text: "これ", meaning: "這個", tail: "が" },
                { text: "一番", furigana: "いちばん", meaning: "最", tail: "" },
                { text: "いい", meaning: "好", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "最初のページ。",
              translation: "第一頁。",
              segments: [
                {
                  text: "最初",
                  furigana: "さいしょ",
                  meaning: "最初",
                  tail: "の",
                },
                { text: "ページ", meaning: "頁", tail: "。" },
              ],
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
              pronunciation: ["Mae no"],
              specific_note: "連體詞",
              segments: [
                { text: "前", furigana: "まえ", meaning: "前", tail: "の" },
              ],
            },
          ],
          examples: [
            {
              sentence: "前の日。",
              translation: "前一天。",
              segments: [
                { text: "前", furigana: "まえ", meaning: "前", tail: "の" },
                { text: "日", furigana: "ひ", meaning: "日", tail: "。" },
              ],
            },
            {
              sentence: "前のページに戻ってください。",
              translation: "請回到上一頁。",
              segments: [
                { text: "前", furigana: "まえ", meaning: "前", tail: "の" },
                { text: "ページ", meaning: "頁", tail: "に" },
                { text: "戻", furigana: "もど", meaning: "回", tail: "って" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "駅の前にいます。",
              translation: "在車站前面。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "の" },
                { text: "前", furigana: "まえ", meaning: "前面", tail: "に" },
                { text: "い", meaning: "在", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
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
              pronunciation: ["Tsugi no"],
              specific_note: "連體詞",
              segments: [
                { text: "次", furigana: "つぎ", meaning: "下一個", tail: "の" },
              ],
            },
          ],
          examples: [
            {
              sentence: "次の駅。",
              translation: "下一站。",
              segments: [
                { text: "次", furigana: "つぎ", meaning: "下一個", tail: "の" },
                { text: "駅", furigana: "えき", meaning: "車站", tail: "。" },
              ],
            },
            {
              sentence: "次は誰ですか？",
              translation: "下一位是誰？",
              segments: [
                { text: "次", furigana: "つぎ", meaning: "下一個", tail: "は" },
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "また次の機会に。",
              translation: "下次還有機會 (婉拒用)。",
              segments: [
                { text: "また", meaning: "再/下次", tail: "" },
                { text: "次", furigana: "つぎ", meaning: "下一個", tail: "の" },
                {
                  text: "機会",
                  furigana: "きかい",
                  meaning: "機會",
                  tail: "に",
                },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Nagai"],
              specific_note: "伊形容詞",
              segments: [
                { text: "長", furigana: "なが", meaning: "長", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "長い髪。",
              translation: "長髮。",
              segments: [
                { text: "長", furigana: "なが", meaning: "長", tail: "い" },
                { text: "髪", furigana: "かみ", meaning: "頭髮", tail: "。" },
              ],
            },
            {
              sentence: "足が長いです。",
              translation: "腿很長。",
              segments: [
                { text: "足", furigana: "あし", meaning: "腳/腿", tail: "が" },
                { text: "長", furigana: "なが", meaning: "長", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "話が長いです。",
              translation: "話很多(故事很長)。",
              segments: [
                { text: "話", furigana: "はなし", meaning: "話", tail: "が" },
                { text: "長", furigana: "なが", meaning: "長", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Ookii"],
              specific_note: "伊形容詞",
              segments: [
                { text: "大", furigana: "おお", meaning: "大", tail: "きい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "大きい家。",
              translation: "大房子。",
              segments: [
                { text: "大", furigana: "おお", meaning: "大", tail: "きい" },
                { text: "家", furigana: "いえ", meaning: "家", tail: "。" },
              ],
            },
            {
              sentence: "声が大きいです。",
              translation: "聲音很大。",
              segments: [
                { text: "声", furigana: "こえ", meaning: "聲音", tail: "が" },
                { text: "大", furigana: "おお", meaning: "大", tail: "きい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "もっと大きいサイズはありますか？",
              translation: "有更大的尺寸嗎？",
              segments: [
                { text: "もっと", meaning: "更", tail: "" },
                { text: "大", furigana: "おお", meaning: "大", tail: "きい" },
                { text: "サイズ", meaning: "尺寸", tail: "は" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Chiisai"],
              specific_note: "伊形容詞",
              segments: [
                { text: "小", furigana: "ちい", meaning: "小", tail: "さい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "小さいサイズ。",
              translation: "小尺寸。",
              segments: [
                { text: "小", furigana: "ちい", meaning: "小", tail: "さい" },
                { text: "サイズ", meaning: "尺寸", tail: "。" },
              ],
            },
            {
              sentence: "字が小さいです。",
              translation: "字很小。",
              segments: [
                { text: "字", furigana: "じ", meaning: "字", tail: "が" },
                { text: "小", furigana: "ちい", meaning: "小", tail: "さい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "小さい頃。",
              translation: "小時候。",
              segments: [
                { text: "小", furigana: "ちい", meaning: "小", tail: "さい" },
                { text: "頃", furigana: "ころ", meaning: "時候", tail: "。" },
              ],
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
              pronunciation: ["Ooi"],
              specific_note: "伊形容詞",
              segments: [
                { text: "多", furigana: "おお", meaning: "多", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "人が多い。",
              translation: "人很多。",
              segments: [
                { text: "人", furigana: "ひと", meaning: "人", tail: "が" },
                { text: "多", furigana: "おお", meaning: "多", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "車が多いです。",
              translation: "車很多。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "が" },
                { text: "多", furigana: "おお", meaning: "多", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "雨の日が多い。",
              translation: "下雨的日子很多。",
              segments: [
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "の" },
                { text: "日", furigana: "ひ", meaning: "日/天", tail: "が" },
                { text: "多", furigana: "おお", meaning: "多", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
          ],
          usage_note:
            "數量多。注意 Ooi 不可直接修飾名詞 (不能說 Ooi hito，要說 Hito ga ooi)。",
          image_file: "many.png",
        },
        {
          id: "adj-11",
          term_zh: "高的",
          related_terms: [
            {
              term_target: "高い",
              pronunciation: ["Takai"],
              specific_note: "伊形容詞",
              segments: [
                { text: "高", furigana: "たか", meaning: "高", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "背が高い。",
              translation: "個子高。",
              segments: [
                { text: "背", furigana: "せ", meaning: "身高/背", tail: "が" },
                { text: "高", furigana: "たか", meaning: "高", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "高い山。",
              translation: "高山。",
              segments: [
                { text: "高", furigana: "たか", meaning: "高", tail: "い" },
                { text: "山", furigana: "やま", meaning: "山", tail: "。" },
              ],
            },
            {
              sentence: "プライドが高い。",
              translation: "自尊心很高。",
              segments: [
                { text: "プライド", meaning: "自尊心", tail: "が" },
                { text: "高", furigana: "たか", meaning: "高", tail: "い" },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Wakai"],
              specific_note: "伊形容詞",
              segments: [
                { text: "若", furigana: "わか", meaning: "年輕", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "若い人。",
              translation: "年輕人。",
              segments: [
                { text: "若", furigana: "わか", meaning: "年輕", tail: "い" },
                { text: "人", furigana: "ひと", meaning: "人", tail: "。" },
              ],
            },
            {
              sentence: "彼は若いです。",
              translation: "他很年輕。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "若", furigana: "わか", meaning: "年輕", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "若く見えます。",
              translation: "看起來很年輕。",
              segments: [
                { text: "若", furigana: "わか", meaning: "年輕", tail: "く" },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "えます", meaning: "起來/能見 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Furui"],
              specific_note: "物品舊",
              segments: [
                { text: "古", furigana: "ふる", meaning: "舊/老", tail: "い" },
              ],
            },
            {
              term_target: "年寄り",
              pronunciation: ["Toshiyori"],
              specific_note: "老人(名詞)",
              segments: [
                {
                  text: "年寄",
                  furigana: "としよ",
                  meaning: "老人",
                  tail: "り",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "古い本。",
              translation: "舊書。",
              segments: [
                { text: "古", furigana: "ふる", meaning: "舊", tail: "い" },
                { text: "本", furigana: "ほん", meaning: "書", tail: "。" },
              ],
            },
            {
              sentence: "古い友達。",
              translation: "老朋友。",
              segments: [
                { text: "古", furigana: "ふる", meaning: "老", tail: "い" },
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "建物が古いです。",
              translation: "建築物很舊。",
              segments: [
                {
                  text: "建物",
                  furigana: "たてもの",
                  meaning: "建築物",
                  tail: "が",
                },
                { text: "古", furigana: "ふる", meaning: "舊", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Chikai"],
              specific_note: "伊形容詞",
              segments: [
                { text: "近", furigana: "ちか", meaning: "近", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "駅に近い。",
              translation: "離車站近。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "に" },
                { text: "近", furigana: "ちか", meaning: "近", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "近い未来。",
              translation: "不久的將來。",
              segments: [
                { text: "近", furigana: "ちか", meaning: "近", tail: "い" },
                {
                  text: "未来",
                  furigana: "みらい",
                  meaning: "未來",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "家から近いです。",
              translation: "離家很近。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "から" },
                { text: "近", furigana: "ちか", meaning: "近", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Tooi"],
              specific_note: "伊形容詞",
              segments: [
                { text: "遠", furigana: "とお", meaning: "遠", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "家から遠い。",
              translation: "離家遠。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "から" },
                { text: "遠", furigana: "とお", meaning: "遠", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "遠い国。",
              translation: "遙遠的國家。",
              segments: [
                { text: "遠", furigana: "とお", meaning: "遠", tail: "い" },
                { text: "国", furigana: "くに", meaning: "國家", tail: "。" },
              ],
            },
            {
              sentence: "駅は遠いですか？",
              translation: "車站遠嗎？",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "は" },
                { text: "遠", furigana: "とお", meaning: "遠", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Hayai"],
              specific_note: "速度",
              segments: [
                { text: "速", furigana: "はや", meaning: "快", tail: "い" },
              ],
            },
            {
              term_target: "早い",
              pronunciation: ["Hayai"],
              specific_note: "時間早",
              segments: [
                { text: "早", furigana: "はや", meaning: "早", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "足が速い。",
              translation: "跑得快。",
              segments: [
                { text: "足", furigana: "あし", meaning: "腳/跑", tail: "が" },
                { text: "速", furigana: "はや", meaning: "快", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "話すのが速い。",
              translation: "說話速度快。",
              segments: [
                { text: "話", furigana: "はな", meaning: "說", tail: "す" },
                { text: "の", meaning: "的(名詞化)", tail: "が" },
                { text: "速", furigana: "はや", meaning: "快", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "朝が早いです。",
              translation: "早上起得早。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: "が" },
                { text: "早", furigana: "はや", meaning: "早", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Osoi"],
              specific_note: "伊形容詞",
              segments: [
                { text: "遅", furigana: "おそ", meaning: "慢/晚", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "歩くのが遅い。",
              translation: "走得慢。",
              segments: [
                { text: "歩", furigana: "ある", meaning: "走", tail: "く" },
                { text: "の", meaning: "的(名詞化)", tail: "が" },
                { text: "遅", furigana: "おそ", meaning: "慢", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "遅くなってすみません。",
              translation: "抱歉我遲到了(慢了)。",
              segments: [
                { text: "遅", furigana: "おそ", meaning: "晚/慢", tail: "く" },
                { text: "なって", meaning: "變", tail: "" },
                { text: "すみません", meaning: "對不起", tail: "。" },
              ],
            },
            {
              sentence: "ネットが遅いです。",
              translation: "網路很慢。",
              segments: [
                { text: "ネット", meaning: "網路", tail: "が" },
                { text: "遅", furigana: "おそ", meaning: "慢", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Atsui"],
              specific_note: "天氣",
              segments: [
                { text: "暑", furigana: "あつ", meaning: "熱", tail: "い" },
              ],
            },
            {
              term_target: "熱い",
              pronunciation: ["Atsui"],
              specific_note: "物品",
              segments: [
                { text: "熱", furigana: "あつ", meaning: "燙/熱", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今日は暑いです。",
              translation: "今天很熱 (氣溫)。",
              segments: [
                {
                  text: "今日",
                  furigana: "きょう",
                  meaning: "今天",
                  tail: "は",
                },
                { text: "暑", furigana: "あつ", meaning: "熱", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お湯が熱いです。",
              translation: "熱水很燙。",
              segments: [
                { text: "お湯", furigana: "ゆ", meaning: "熱水", tail: "が" },
                { text: "熱", furigana: "あつ", meaning: "燙", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "熱いコーヒー。",
              translation: "熱咖啡。",
              segments: [
                { text: "熱", furigana: "あつ", meaning: "熱", tail: "い" },
                { text: "コーヒー", meaning: "咖啡", tail: "。" },
              ],
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
              pronunciation: ["Samui"],
              specific_note: "天氣",
              segments: [
                { text: "寒", furigana: "さむ", meaning: "冷", tail: "い" },
              ],
            },
            {
              term_target: "冷たい",
              pronunciation: ["Tsumetai"],
              specific_note: "物品",
              segments: [
                {
                  text: "冷",
                  furigana: "つめ",
                  meaning: "冷/冰",
                  tail: "たい",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "今日は寒いです。",
              translation: "今天好冷 (氣溫)。",
              segments: [
                {
                  text: "今日",
                  furigana: "きょう",
                  meaning: "今天",
                  tail: "は",
                },
                { text: "寒", furigana: "さむ", meaning: "冷", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "水が冷たいです。",
              translation: "水是冰的 (觸感)。",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "が" },
                { text: "冷", furigana: "つめ", meaning: "冰", tail: "たい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "冷たい飲み物。",
              translation: "冷飲。",
              segments: [
                { text: "冷", furigana: "つめ", meaning: "冰", tail: "たい" },
                { text: "飲", furigana: "の", meaning: "喝", tail: "み" },
                { text: "物", furigana: "もの", meaning: "東西", tail: "。" },
              ],
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
              pronunciation: ["Kirei"],
              specific_note: "那形容詞",
              segments: [{ text: "きれい", meaning: "乾淨/漂亮", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "きれいな部屋。",
              translation: "乾淨的房間。",
              segments: [
                { text: "きれい", meaning: "乾淨", tail: "な" },
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "。" },
              ],
            },
            {
              sentence: "手がきれいです。",
              translation: "手很乾淨(漂亮)。",
              segments: [
                { text: "手", furigana: "て", meaning: "手", tail: "が" },
                { text: "きれい", meaning: "乾淨/漂亮", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "空気がきれいです。",
              translation: "空氣很清新。",
              segments: [
                {
                  text: "空気",
                  furigana: "くうき",
                  meaning: "空氣",
                  tail: "が",
                },
                { text: "きれい", meaning: "乾淨/清新", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Kitanai"],
              specific_note: "伊形容詞",
              segments: [
                { text: "汚", furigana: "きたな", meaning: "髒", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "手が汚いです。",
              translation: "手很髒。",
              segments: [
                { text: "手", furigana: "て", meaning: "手", tail: "が" },
                { text: "汚", furigana: "きたな", meaning: "髒", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "部屋が汚い。",
              translation: "房間很亂(髒)。",
              segments: [
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "が" },
                { text: "汚", furigana: "きたな", meaning: "髒", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "汚い言葉。",
              translation: "髒話。",
              segments: [
                { text: "汚", furigana: "きたな", meaning: "髒", tail: "い" },
                {
                  text: "言葉",
                  furigana: "ことば",
                  meaning: "話/語言",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Kantan"],
              specific_note: "那形容詞",
              segments: [
                {
                  text: "簡単",
                  furigana: "かんたん",
                  meaning: "簡單",
                  tail: "",
                },
              ],
            },
            {
              term_target: "易しい",
              pronunciation: ["Yasashii"],
              specific_note: "伊形容詞",
              segments: [
                { text: "易", furigana: "やさ", meaning: "容易", tail: "しい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは簡単です。",
              translation: "這很簡單。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                {
                  text: "簡単",
                  furigana: "かんたん",
                  meaning: "簡單",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "簡単な問題。",
              translation: "簡單的問題。",
              segments: [
                {
                  text: "簡単",
                  furigana: "かんたん",
                  meaning: "簡單",
                  tail: "な",
                },
                {
                  text: "問題",
                  furigana: "もんだい",
                  meaning: "問題",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "日本語は易しいですか？",
              translation: "日文容易嗎？",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "は",
                },
                { text: "易", furigana: "やさ", meaning: "容易", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Muzukashii"],
              specific_note: "伊形容詞",
              segments: [
                { text: "難", furigana: "むずか", meaning: "難", tail: "しい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本語は難しいです。",
              translation: "日文很難。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "は",
                },
                { text: "難", furigana: "むずか", meaning: "難", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "難しい問題。",
              translation: "難題。",
              segments: [
                { text: "難", furigana: "むずか", meaning: "難", tail: "しい" },
                {
                  text: "問題",
                  furigana: "もんだい",
                  meaning: "問題",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "説明するのが難しい。",
              translation: "很難解釋。",
              segments: [
                {
                  text: "説明",
                  furigana: "せつめい",
                  meaning: "說明",
                  tail: "する",
                },
                { text: "の", meaning: "的(名詞化)", tail: "が" },
                { text: "難", furigana: "むずか", meaning: "難", tail: "しい" },
                { text: "。", tail: "" },
              ],
            },
          ],
          usage_note:
            "困難。日本人婉拒時也常說「Chotto muzukashii (有點困難)」。",
          image_file: "difficult.png",
        },
        {
          id: "adj-24",
          term_zh: "正確的",
          related_terms: [
            {
              term_target: "正しい",
              pronunciation: ["Tadashii"],
              specific_note: "伊形容詞",
              segments: [
                { text: "正", furigana: "ただ", meaning: "正確", tail: "しい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "正しい答え。",
              translation: "正確答案。",
              segments: [
                { text: "正", furigana: "ただ", meaning: "正確", tail: "しい" },
                { text: "答", furigana: "こた", meaning: "答案", tail: "え" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "正しい使い方。",
              translation: "正確的使用方法。",
              segments: [
                { text: "正", furigana: "ただ", meaning: "正確", tail: "しい" },
                { text: "使", furigana: "つか", meaning: "使用", tail: "い" },
                { text: "方", furigana: "かた", meaning: "方法", tail: "。" },
              ],
            },
            {
              sentence: "それは正しいですか？",
              translation: "那是正確的嗎？",
              segments: [
                { text: "それ", meaning: "那個", tail: "は" },
                { text: "正", furigana: "ただ", meaning: "正確", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Machigai"],
              specific_note: "名詞",
              segments: [
                {
                  text: "間違",
                  furigana: "まちが",
                  meaning: "錯誤",
                  tail: "い",
                },
              ],
            },
            {
              term_target: "違う",
              pronunciation: ["Chigau"],
              specific_note: "動詞/形容詞",
              segments: [
                {
                  text: "違",
                  furigana: "ちが",
                  meaning: "不同/錯",
                  tail: "う",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "それは間違いです。",
              translation: "那是錯的。",
              segments: [
                { text: "それ", meaning: "那個", tail: "は" },
                {
                  text: "間違",
                  furigana: "まちが",
                  meaning: "錯誤",
                  tail: "い",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "番号が違います。",
              translation: "號碼不對。",
              segments: [
                {
                  text: "番号",
                  furigana: "ばんごう",
                  meaning: "號碼",
                  tail: "が",
                },
                { text: "違", furigana: "ちが", meaning: "不同/錯", tail: "" },
                { text: "います", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "間違い電話。",
              translation: "打錯電話。",
              segments: [
                {
                  text: "間違",
                  furigana: "まちが",
                  meaning: "錯誤",
                  tail: "い",
                },
                {
                  text: "電話",
                  furigana: "でんわ",
                  meaning: "電話",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Taisetsu"],
              specific_note: "那形容詞/珍貴",
              segments: [
                {
                  text: "大切",
                  furigana: "たいせつ",
                  meaning: "重要/珍貴",
                  tail: "",
                },
              ],
            },
            {
              term_target: "重要",
              pronunciation: ["Juuyou"],
              specific_note: "那形容詞/重要",
              segments: [
                {
                  text: "重要",
                  furigana: "じゅうよう",
                  meaning: "重要",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "大切な友達。",
              translation: "重要的朋友。",
              segments: [
                {
                  text: "大切",
                  furigana: "たいせつ",
                  meaning: "重要",
                  tail: "な",
                },
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "家族が大切です。",
              translation: "家人很重要。",
              segments: [
                {
                  text: "家族",
                  furigana: "かぞく",
                  meaning: "家人",
                  tail: "が",
                },
                {
                  text: "大切",
                  furigana: "たいせつ",
                  meaning: "重要",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "重要な会議。",
              translation: "重要會議。",
              segments: [
                {
                  text: "重要",
                  furigana: "じゅうよう",
                  meaning: "重要",
                  tail: "な",
                },
                {
                  text: "会議",
                  furigana: "かいぎ",
                  meaning: "會議",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Chigau"],
              specific_note: "動詞",
              segments: [
                { text: "違", furigana: "ちが", meaning: "不同", tail: "う" },
              ],
            },
          ],
          examples: [
            {
              sentence: "色が違う。",
              translation: "顏色不同。",
              segments: [
                { text: "色", furigana: "いろ", meaning: "顏色", tail: "が" },
                { text: "違", furigana: "ちが", meaning: "不同", tail: "う" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "ちょっと違います。",
              translation: "稍微有點不一樣。",
              segments: [
                { text: "ちょっと", meaning: "稍微", tail: "" },
                { text: "違", furigana: "ちが", meaning: "不同", tail: "" },
                { text: "います", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "違う店に行きましょう。",
              translation: "去別家店吧。",
              segments: [
                { text: "違", furigana: "ちが", meaning: "不同", tail: "う" },
                { text: "店", furigana: "みせ", meaning: "店", tail: "に" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きましょう", meaning: "吧 (敬語勸誘)", tail: "。" },
              ],
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
              pronunciation: ["Hontou no"],
              specific_note: "連體詞",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "の",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "本当の話。",
              translation: "真的事。",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "の",
                },
                {
                  text: "話",
                  furigana: "はなし",
                  meaning: "話/事情",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "本当の気持ち。",
              translation: "真正的心情。",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "の",
                },
                { text: "気持", furigana: "きも", meaning: "心情", tail: "ち" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "これは本当ですか？",
              translation: "這是真的嗎？",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Omoshiroi"],
              specific_note: "伊形容詞",
              segments: [
                {
                  text: "面白",
                  furigana: "おもしろ",
                  meaning: "有趣",
                  tail: "い",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "面白い映画。",
              translation: "有趣的電影。",
              segments: [
                {
                  text: "面白",
                  furigana: "おもしろ",
                  meaning: "有趣",
                  tail: "い",
                },
                {
                  text: "映画",
                  furigana: "えいが",
                  meaning: "電影",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "この本は面白いです。",
              translation: "這本書很有趣。",
              segments: [
                { text: "この", meaning: "這本", tail: "" },
                { text: "本", furigana: "ほん", meaning: "書", tail: "は" },
                {
                  text: "面白",
                  furigana: "おもしろ",
                  meaning: "有趣",
                  tail: "い",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "面白い人ですね。",
              translation: "真是有趣(好笑)的人呢。",
              segments: [
                {
                  text: "面白",
                  furigana: "おもしろ",
                  meaning: "有趣",
                  tail: "い",
                },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "ね", meaning: "呢 (感嘆)", tail: "。" },
              ],
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
              pronunciation: ["Utsukushii"],
              specific_note: "伊形容詞/美麗",
              segments: [
                {
                  text: "美",
                  furigana: "うつく",
                  meaning: "美麗",
                  tail: "しい",
                },
              ],
            },
            {
              term_target: "きれい",
              pronunciation: ["Kirei"],
              specific_note: "那形容詞/漂亮",
              segments: [{ text: "きれい", meaning: "漂亮", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "美しい花。",
              translation: "美麗的花。",
              segments: [
                {
                  text: "美",
                  furigana: "うつく",
                  meaning: "美麗",
                  tail: "しい",
                },
                { text: "花", furigana: "はな", meaning: "花", tail: "。" },
              ],
            },
            {
              sentence: "景色が美しいです。",
              translation: "景色很美。",
              segments: [
                {
                  text: "景色",
                  furigana: "けしき",
                  meaning: "景色",
                  tail: "が",
                },
                {
                  text: "美",
                  furigana: "うつく",
                  meaning: "美麗",
                  tail: "しい",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "きれいな海。",
              translation: "漂亮的海。",
              segments: [
                { text: "きれい", meaning: "漂亮", tail: "な" },
                { text: "海", furigana: "うみ", meaning: "海", tail: "。" },
              ],
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
              pronunciation: ["Yasui"],
              specific_note: "伊形容詞",
              segments: [
                { text: "安", furigana: "やす", meaning: "便宜", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは安いです。",
              translation: "這很便宜。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "安", furigana: "やす", meaning: "便宜", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "安い店。",
              translation: "便宜的店。",
              segments: [
                { text: "安", furigana: "やす", meaning: "便宜", tail: "い" },
                { text: "店", furigana: "みせ", meaning: "店", tail: "。" },
              ],
            },
            {
              sentence: "安く買えました。",
              translation: "買得很便宜。",
              segments: [
                { text: "安", furigana: "やす", meaning: "便宜", tail: "く" },
                { text: "買", furigana: "か", meaning: "買", tail: "" },
                { text: "えました", meaning: "能...了 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Takai"],
              specific_note: "伊形容詞",
              segments: [
                { text: "高", furigana: "たか", meaning: "貴", tail: "い" },
              ],
            },
          ],
          examples: [
            {
              sentence: "値段が高いです。",
              translation: "價格很貴。",
              segments: [
                {
                  text: "値段",
                  furigana: "ねだん",
                  meaning: "價格",
                  tail: "が",
                },
                { text: "高", furigana: "たか", meaning: "貴", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "高い時計。",
              translation: "昂貴的手錶。",
              segments: [
                { text: "高", furigana: "たか", meaning: "貴", tail: "い" },
                {
                  text: "時計",
                  furigana: "とけい",
                  meaning: "手錶",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ちょっと高いですね。",
              translation: "有點貴呢。",
              segments: [
                { text: "ちょっと", meaning: "稍微", tail: "" },
                { text: "高", furigana: "たか", meaning: "貴", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "ね", meaning: "呢 (感嘆)", tail: "。" },
              ],
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
              pronunciation: ["Onaka ga suita"],
              specific_note: "慣用語",
              segments: [
                { text: "お腹", furigana: "なか", meaning: "肚子", tail: "が" },
                { text: "空", furigana: "す", meaning: "空", tail: "いた" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お腹が空きました。",
              translation: "肚子餓了。",
              segments: [
                { text: "お腹", furigana: "なか", meaning: "肚子", tail: "が" },
                { text: "空", furigana: "す", meaning: "空", tail: "" },
                { text: "きました", meaning: "了 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お腹空いた！",
              translation: "肚子餓了！(口語)",
              segments: [
                { text: "お腹", furigana: "なか", meaning: "肚子", tail: "" },
                { text: "空", furigana: "す", meaning: "空", tail: "いた" },
                { text: "！", tail: "" },
              ],
            },
            {
              sentence: "何か食べたいです。",
              translation: "想吃點東西。",
              segments: [
                { text: "何", furigana: "なに", meaning: "什麼", tail: "か" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べたい", meaning: "想做", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Tsukareta"],
              specific_note: "動詞過去式",
              segments: [
                { text: "疲", furigana: "つか", meaning: "累", tail: "れた" },
              ],
            },
          ],
          examples: [
            {
              sentence: "疲れました。",
              translation: "累了。",
              segments: [
                { text: "疲", furigana: "つか", meaning: "累", tail: "" },
                { text: "れました", meaning: "了 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "疲れています。",
              translation: "正處於疲累狀態。",
              segments: [
                { text: "疲", furigana: "つか", meaning: "累", tail: "" },
                { text: "れて", meaning: "了", tail: "" },
                { text: "います", meaning: "在 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "疲れた顔。",
              translation: "疲累的臉。",
              segments: [
                { text: "疲", furigana: "つか", meaning: "累", tail: "れた" },
                { text: "顔", furigana: "かお", meaning: "臉", tail: "。" },
              ],
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
              pronunciation: ["Isogashii"],
              specific_note: "伊形容詞",
              segments: [
                { text: "忙", furigana: "いそが", meaning: "忙", tail: "しい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "仕事が忙しいです。",
              translation: "工作很忙。",
              segments: [
                {
                  text: "仕事",
                  furigana: "しごと",
                  meaning: "工作",
                  tail: "が",
                },
                { text: "忙", furigana: "いそが", meaning: "忙", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "忙しいですか？",
              translation: "你忙嗎？",
              segments: [
                { text: "忙", furigana: "いそが", meaning: "忙", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "最近忙しいです。",
              translation: "最近很忙。",
              segments: [
                {
                  text: "最近",
                  furigana: "さいきん",
                  meaning: "最近",
                  tail: "",
                },
                { text: "忙", furigana: "いそが", meaning: "忙", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Ureshii"],
              specific_note: "伊形容詞/高興",
              segments: [
                { text: "嬉", furigana: "うれ", meaning: "高興", tail: "しい" },
              ],
            },
            {
              term_target: "楽しい",
              pronunciation: ["Tanoshii"],
              specific_note: "伊形容詞/快樂",
              segments: [
                { text: "楽", furigana: "たの", meaning: "快樂", tail: "しい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "会えて嬉しいです。",
              translation: "見到你很高興。",
              segments: [
                { text: "会", furigana: "あ", meaning: "見面", tail: "" },
                { text: "えて", meaning: "能夠", tail: "" },
                { text: "嬉", furigana: "うれ", meaning: "高興", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "プレゼントをもらって嬉しい。",
              translation: "收到禮物很開心。",
              segments: [
                { text: "プレゼント", meaning: "禮物", tail: "を" },
                { text: "もらって", meaning: "得到", tail: "" },
                { text: "嬉", furigana: "うれ", meaning: "高興", tail: "しい" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "楽しい旅行。",
              translation: "快樂的旅行。",
              segments: [
                { text: "楽", furigana: "たの", meaning: "快樂", tail: "しい" },
                {
                  text: "旅行",
                  furigana: "りょこう",
                  meaning: "旅行",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Kanashii"],
              specific_note: "伊形容詞",
              segments: [
                { text: "悲", furigana: "かな", meaning: "悲傷", tail: "しい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "悲しいニュース。",
              translation: "悲傷的新聞。",
              segments: [
                { text: "悲", furigana: "かな", meaning: "悲傷", tail: "しい" },
                { text: "ニュース", meaning: "新聞", tail: "。" },
              ],
            },
            {
              sentence: "悲しい映画。",
              translation: "悲傷的電影。",
              segments: [
                { text: "悲", furigana: "かな", meaning: "悲傷", tail: "しい" },
                {
                  text: "映画",
                  furigana: "えいが",
                  meaning: "電影",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "とても悲しいです。",
              translation: "非常難過。",
              segments: [
                { text: "とても", meaning: "非常", tail: "" },
                { text: "悲", furigana: "かな", meaning: "悲傷", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Niteiru"],
              specific_note: "狀態",
              segments: [
                { text: "似", furigana: "に", meaning: "像", tail: "ている" },
              ],
            },
          ],
          examples: [
            {
              sentence: "似ている色。",
              translation: "相似的顏色。",
              segments: [
                { text: "似", furigana: "に", meaning: "像", tail: "" },
                { text: "ている", meaning: "的 (狀態)", tail: "" },
                { text: "色", furigana: "いろ", meaning: "顏色", tail: "。" },
              ],
            },
            {
              sentence: "彼らは似ています。",
              translation: "他們長得很像。",
              segments: [
                {
                  text: "彼ら",
                  furigana: "かれら",
                  meaning: "他們",
                  tail: "は",
                },
                { text: "似", furigana: "に", meaning: "像", tail: "" },
                { text: "て", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "是/在 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "母に似ています。",
              translation: "跟媽媽很像。",
              segments: [
                { text: "母", furigana: "はは", meaning: "媽媽", tail: "に" },
                { text: "似", furigana: "に", meaning: "像", tail: "" },
                { text: "て", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "是/在 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Yuumei"],
              specific_note: "那形容詞",
              segments: [
                {
                  text: "有名",
                  furigana: "ゆうめい",
                  meaning: "有名",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "有名な人。",
              translation: "有名的人。",
              segments: [
                {
                  text: "有名",
                  furigana: "ゆうめい",
                  meaning: "有名",
                  tail: "な",
                },
                { text: "人", furigana: "ひと", meaning: "人", tail: "。" },
              ],
            },
            {
              sentence: "この店は有名です。",
              translation: "這家店很有名。",
              segments: [
                { text: "この", meaning: "這家", tail: "" },
                { text: "店", furigana: "みせ", meaning: "店", tail: "は" },
                {
                  text: "有名",
                  furigana: "ゆうめい",
                  meaning: "有名",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "日本で有名です。",
              translation: "在日本很有名。",
              segments: [
                {
                  text: "日本",
                  furigana: "にほん",
                  meaning: "日本",
                  tail: "で",
                },
                {
                  text: "有名",
                  furigana: "ゆうめい",
                  meaning: "有名",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Gaikoku no"],
              specific_note: "連體詞",
              segments: [
                {
                  text: "外国",
                  furigana: "がいこく",
                  meaning: "外國",
                  tail: "の",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "外国の車。",
              translation: "外國車。",
              segments: [
                {
                  text: "外国",
                  furigana: "がいこく",
                  meaning: "外國",
                  tail: "の",
                },
                { text: "車", furigana: "くるま", meaning: "車", tail: "。" },
              ],
            },
            {
              sentence: "外国の文化。",
              translation: "外國文化。",
              segments: [
                {
                  text: "外国",
                  furigana: "がいこく",
                  meaning: "外國",
                  tail: "の",
                },
                {
                  text: "文化",
                  furigana: "ぶんか",
                  meaning: "文化",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "外国に行きたいです。",
              translation: "想去國外。",
              segments: [
                {
                  text: "外国",
                  furigana: "がいこく",
                  meaning: "外國",
                  tail: "に",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きたい", meaning: "想做", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Atama ga ii"],
              specific_note: "慣用語",
              segments: [
                { text: "頭", furigana: "あたま", meaning: "頭", tail: "が" },
                { text: "いい", meaning: "好", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼は頭がいい。",
              translation: "他很聰明。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "頭", furigana: "あたま", meaning: "頭", tail: "が" },
                { text: "いい", meaning: "好", tail: "。" },
              ],
            },
            {
              sentence: "頭がいい人。",
              translation: "聰明的人。",
              segments: [
                { text: "頭", furigana: "あたま", meaning: "頭", tail: "が" },
                { text: "いい", meaning: "好", tail: "" },
                { text: "人", furigana: "ひと", meaning: "人", tail: "。" },
              ],
            },
            {
              sentence: "イルカは頭がいいです。",
              translation: "海豚很聰明。",
              segments: [
                { text: "イルカ", meaning: "海豚", tail: "は" },
                { text: "頭", furigana: "あたま", meaning: "頭", tail: "が" },
                { text: "いい", meaning: "好", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Abunai"],
              specific_note: "伊形容詞",
              segments: [
                { text: "危", furigana: "あぶ", meaning: "危險", tail: "ない" },
              ],
            },
            {
              term_target: "危険",
              pronunciation: ["Kiken"],
              specific_note: "那形容詞",
              segments: [
                { text: "危険", furigana: "きけん", meaning: "危險", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "危ない！",
              translation: "危險！(小心！)",
              segments: [
                { text: "危", furigana: "あぶ", meaning: "危險", tail: "ない" },
                { text: "！", tail: "" },
              ],
            },
            {
              sentence: "そこは危ないです。",
              translation: "那裡很危險。",
              segments: [
                { text: "そこ", meaning: "那裡", tail: "は" },
                { text: "危", furigana: "あぶ", meaning: "危險", tail: "ない" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "危険な場所。",
              translation: "危險的地方。",
              segments: [
                {
                  text: "危険",
                  furigana: "きけん",
                  meaning: "危險",
                  tail: "な",
                },
                {
                  text: "場所",
                  furigana: "ばしょ",
                  meaning: "場所",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Shinsetsu"],
              specific_note: "那形容詞/親切",
              segments: [
                {
                  text: "親切",
                  furigana: "しんせつ",
                  meaning: "親切",
                  tail: "",
                },
              ],
            },
            {
              term_target: "優しい",
              pronunciation: ["Yasashii"],
              specific_note: "伊形容詞/溫柔",
              segments: [
                { text: "優", furigana: "やさ", meaning: "溫柔", tail: "しい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "親切な人。",
              translation: "親切的人。",
              segments: [
                {
                  text: "親切",
                  furigana: "しんせつ",
                  meaning: "親切",
                  tail: "な",
                },
                { text: "人", furigana: "ひと", meaning: "人", tail: "。" },
              ],
            },
            {
              sentence: "彼は優しいです。",
              translation: "他很溫柔。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "優", furigana: "やさ", meaning: "溫柔", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ご親切にありがとうございます。",
              translation: "謝謝您的親切(好意)。",
              segments: [
                { text: "ご", meaning: "(美化語)", tail: "" },
                {
                  text: "親切",
                  furigana: "しんせつ",
                  meaning: "親切",
                  tail: "に",
                },
                { text: "ありがとう", meaning: "謝謝", tail: "" },
                { text: "ございます", meaning: "(敬語)", tail: "。" },
              ],
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
              pronunciation: ["Subete"],
              specific_note: "全部",
              segments: [
                { text: "全", furigana: "すべ", meaning: "全部", tail: "て" },
              ],
            },
            {
              term_target: "毎",
              pronunciation: ["Mai"],
              specific_note: "每",
              segments: [
                { text: "毎", furigana: "まい", meaning: "每", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "全ての人。",
              translation: "所有的人。",
              segments: [
                { text: "全", furigana: "すべ", meaning: "全部", tail: "て" },
                { text: "の", meaning: "的", tail: "" },
                { text: "人", furigana: "ひと", meaning: "人", tail: "。" },
              ],
            },
            {
              sentence: "全て終わりました。",
              translation: "全部結束了。",
              segments: [
                { text: "全", furigana: "すべ", meaning: "全部", tail: "て" },
                { text: "終", furigana: "お", meaning: "結束", tail: "" },
                { text: "わりました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "毎日。",
              translation: "每一天。",
              segments: [
                {
                  text: "毎日",
                  furigana: "まいにち",
                  meaning: "每天",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Okiniiri"],
              specific_note: "名詞",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "気", furigana: "き", meaning: "心/意", tail: "に" },
                { text: "入", furigana: "い", meaning: "入", tail: "り" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お気に入りの店。",
              translation: "喜愛的店。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "気", furigana: "き", meaning: "心", tail: "に" },
                { text: "入", furigana: "い", meaning: "入", tail: "り" },
                { text: "の", meaning: "的", tail: "" },
                { text: "店", furigana: "みせ", meaning: "店", tail: "。" },
              ],
            },
            {
              sentence: "これは私のお気に入りです。",
              translation: "這是我中意的(東西)。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "気", furigana: "き", meaning: "心", tail: "に" },
                { text: "入", furigana: "い", meaning: "入", tail: "り" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お気に入りの曲。",
              translation: "喜愛的歌曲。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "気", furigana: "き", meaning: "心", tail: "に" },
                { text: "入", furigana: "い", meaning: "入", tail: "り" },
                { text: "の", meaning: "的", tail: "" },
                { text: "曲", furigana: "きょく", meaning: "歌曲", tail: "。" },
              ],
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
              pronunciation: ["Oishii"],
              specific_note: "伊形容詞",
              segments: [{ text: "おいしい", meaning: "好吃/美味", tail: "" }],
            },
            {
              term_target: "うまい",
              pronunciation: ["Umai"],
              specific_note: "口語/男性常用",
              segments: [{ text: "うまい", meaning: "好吃/厲害", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "おいしい料理。",
              translation: "美味的食物。",
              segments: [
                { text: "おいしい", meaning: "美味", tail: "" },
                {
                  text: "料理",
                  furigana: "りょうり",
                  meaning: "料理",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "これ、おいしい！",
              translation: "這個好好吃！",
              segments: [
                { text: "これ", meaning: "這個", tail: "、" },
                { text: "おいしい", meaning: "好吃", tail: "！" },
              ],
            },
            {
              sentence: "うまい！",
              translation: "好吃！(豪邁語氣)",
              segments: [{ text: "うまい", meaning: "好吃/爽", tail: "！" }],
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
              pronunciation: ["Jikan"],
              specific_note: "",
              segments: [
                { text: "時間", furigana: "じかん", meaning: "時間", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "時間がありません。",
              translation: "沒時間。",
              segments: [
                {
                  text: "時間",
                  furigana: "じかん",
                  meaning: "時間",
                  tail: "が",
                },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ません", meaning: "沒有 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "今、時間がありますか？",
              translation: "你現在有時間嗎？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                {
                  text: "時間",
                  furigana: "じかん",
                  meaning: "時間",
                  tail: "が",
                },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "約束の時間。",
              translation: "約好的時間。",
              segments: [
                {
                  text: "約束",
                  furigana: "やくそく",
                  meaning: "約定/約會",
                  tail: "の",
                },
                {
                  text: "時間",
                  furigana: "じかん",
                  meaning: "時間",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Hito"],
              specific_note: "單數/泛指",
              segments: [
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
              ],
            },
            {
              term_target: "人々",
              pronunciation: ["Hitobito"],
              specific_note: "複數(群體)",
              segments: [
                {
                  text: "人々",
                  furigana: "ひとびと",
                  meaning: "人們",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "あの人は誰ですか？",
              translation: "那個人是誰？",
              segments: [
                { text: "あの", meaning: "那個", tail: "" },
                { text: "人", furigana: "ひと", meaning: "人", tail: "は" },
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "多くの人々。",
              translation: "很多人(群眾)。",
              segments: [
                { text: "多", furigana: "おお", meaning: "多", tail: "くの" },
                {
                  text: "人々",
                  furigana: "ひとびと",
                  meaning: "人們",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "優しい人。",
              translation: "溫柔的人。",
              segments: [
                { text: "優", furigana: "やさ", meaning: "溫柔", tail: "しい" },
                { text: "人", furigana: "ひと", meaning: "人", tail: "。" },
              ],
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
              pronunciation: ["Okane"],
              specific_note: "",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "金", furigana: "かね", meaning: "錢", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お金がありません。",
              translation: "沒錢。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "金", furigana: "かね", meaning: "錢", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ません", meaning: "沒有 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お金を払います。",
              translation: "付錢。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "金", furigana: "かね", meaning: "錢", tail: "を" },
                { text: "払", furigana: "はら", meaning: "付", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お金持ち。",
              translation: "有錢人。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "金", furigana: "かね", meaning: "錢", tail: "" },
                { text: "持", furigana: "も", meaning: "持有者", tail: "ち" },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Kodomo"],
              specific_note: "",
              segments: [
                { text: "子供", furigana: "こども", meaning: "孩子", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "子供がいます。",
              translation: "有孩子。",
              segments: [
                {
                  text: "子供",
                  furigana: "こども",
                  meaning: "孩子",
                  tail: "が",
                },
                { text: "い", meaning: "有/在", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "元気な子供。",
              translation: "很有精神的孩子。",
              segments: [
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "健康/精神",
                  tail: "な",
                },
                {
                  text: "子供",
                  furigana: "こども",
                  meaning: "孩子",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "子供用。",
              translation: "兒童用。",
              segments: [
                { text: "子供", furigana: "こども", meaning: "兒童", tail: "" },
                { text: "用", furigana: "よう", meaning: "專用", tail: "。" },
              ],
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
              pronunciation: ["Mizu"],
              specific_note: "冷水",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "" },
              ],
            },
            {
              term_target: "お湯",
              pronunciation: ["Oyu"],
              specific_note: "熱水",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "湯", furigana: "ゆ", meaning: "熱水", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "水を飲みます。",
              translation: "喝水。",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "を" },
                { text: "飲", furigana: "の", meaning: "喝", tail: "" },
                { text: "みます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "冷たい水をお願いします。",
              translation: "麻煩給我冰水。",
              segments: [
                { text: "冷", furigana: "つめ", meaning: "冷", tail: "たい" },
                { text: "水", furigana: "みず", meaning: "水", tail: "を" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "い", meaning: "(名詞化)", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お湯を沸かします。",
              translation: "燒開水(熱水)。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "湯", furigana: "ゆ", meaning: "熱水", tail: "を" },
                { text: "沸", furigana: "わ", meaning: "燒(水)", tail: "" },
                { text: "かします", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Tabemono"],
              specific_note: "",
              segments: [
                { text: "食", furigana: "た", meaning: "食", tail: "べ" },
                { text: "物", furigana: "もの", meaning: "物", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "おいしい食べ物。",
              translation: "好吃的食物。",
              segments: [
                { text: "おいしい", meaning: "好吃", tail: "" },
                { text: "食", furigana: "た", meaning: "食", tail: "べ" },
                { text: "物", furigana: "もの", meaning: "物", tail: "。" },
              ],
            },
            {
              sentence: "好きな食べ物は何ですか？",
              translation: "喜歡的食物是什麼？",
              segments: [
                { text: "好", furigana: "す", meaning: "喜歡", tail: "きな" },
                { text: "食", furigana: "た", meaning: "食", tail: "べ" },
                { text: "物", furigana: "もの", meaning: "物", tail: "は" },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "食べ物を買います。",
              translation: "買吃的。",
              segments: [
                { text: "食", furigana: "た", meaning: "食", tail: "べ" },
                { text: "物", furigana: "もの", meaning: "物", tail: "を" },
                { text: "買", furigana: "か", meaning: "買", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Tomodachi"],
              specific_note: "",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "私の友達。",
              translation: "我朋友。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "友達と遊びます。",
              translation: "跟朋友玩。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "と",
                },
                { text: "遊", furigana: "あそ", meaning: "玩", tail: "" },
                { text: "びます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "友達を作ります。",
              translation: "交朋友。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "を",
                },
                { text: "作", furigana: "つく", meaning: "交/做", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Kazoku"],
              specific_note: "",
              segments: [
                { text: "家族", furigana: "かぞく", meaning: "家人", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "大家族。",
              translation: "大家庭。",
              segments: [
                { text: "大", furigana: "だい", meaning: "大", tail: "" },
                {
                  text: "家族",
                  furigana: "かぞく",
                  meaning: "家庭",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "家族は何人ですか？",
              translation: "你家有幾個人？",
              segments: [
                {
                  text: "家族",
                  furigana: "かぞく",
                  meaning: "家人",
                  tail: "は",
                },
                { text: "何", furigana: "なん", meaning: "幾", tail: "" },
                { text: "人", furigana: "にん", meaning: "人", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "家族写真。",
              translation: "全家福照片。",
              segments: [
                { text: "家族", furigana: "かぞく", meaning: "家庭", tail: "" },
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Gakusei"],
              specific_note: "泛指(常指大學生)",
              segments: [
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
              ],
            },
            {
              term_target: "生徒",
              pronunciation: ["Seito"],
              specific_note: "國高中生",
              segments: [
                { text: "生徒", furigana: "せいと", meaning: "學生", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は学生です。",
              translation: "我是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "真面目な学生。",
              translation: "認真的學生。",
              segments: [
                {
                  text: "真面目",
                  furigana: "まじめ",
                  meaning: "認真",
                  tail: "な",
                },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "学生証を見せてください。",
              translation: "請出示學生證。",
              segments: [
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "証", furigana: "しょう", meaning: "證", tail: "を" },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "せて", meaning: "讓 (使役)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Bunka"],
              specific_note: "",
              segments: [
                { text: "文化", furigana: "ぶんか", meaning: "文化", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本の文化。",
              translation: "日本文化。",
              segments: [
                {
                  text: "日本",
                  furigana: "にほん",
                  meaning: "日本",
                  tail: "の",
                },
                {
                  text: "文化",
                  furigana: "ぶんか",
                  meaning: "文化",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "異文化。",
              translation: "異國文化。",
              segments: [
                { text: "異", furigana: "い", meaning: "異", tail: "" },
                {
                  text: "文化",
                  furigana: "ぶんか",
                  meaning: "文化",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "文化の日。",
              translation: "文化日(日本節日)。",
              segments: [
                {
                  text: "文化",
                  furigana: "ぶんか",
                  meaning: "文化",
                  tail: "の",
                },
                { text: "日", furigana: "ひ", meaning: "日", tail: "。" },
              ],
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
              pronunciation: ["Mondai"],
              specific_note: "",
              segments: [
                {
                  text: "問題",
                  furigana: "もんだい",
                  meaning: "問題",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "問題ありません。",
              translation: "沒問題。",
              segments: [
                {
                  text: "問題",
                  furigana: "もんだい",
                  meaning: "問題",
                  tail: "",
                },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ません", meaning: "沒有 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "大きな問題。",
              translation: "大問題。",
              segments: [
                { text: "大", furigana: "おお", meaning: "大", tail: "きな" },
                {
                  text: "問題",
                  furigana: "もんだい",
                  meaning: "問題",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "問題を解決します。",
              translation: "解決問題。",
              segments: [
                {
                  text: "問題",
                  furigana: "もんだい",
                  meaning: "問題",
                  tail: "を",
                },
                {
                  text: "解決",
                  furigana: "かいけつ",
                  meaning: "解決",
                  tail: "",
                },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Kaisha"],
              specific_note: "",
              segments: [
                {
                  text: "会社",
                  furigana: "かいしゃ",
                  meaning: "公司",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "会社へ行きます。",
              translation: "去公司。",
              segments: [
                {
                  text: "会社",
                  furigana: "かいしゃ",
                  meaning: "公司",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "会社で働いています。",
              translation: "在公司工作。",
              segments: [
                {
                  text: "会社",
                  furigana: "かいしゃ",
                  meaning: "公司",
                  tail: "で",
                },
                { text: "働", furigana: "はたら", meaning: "工作", tail: "" },
                { text: "いて", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "会社を辞めます。",
              translation: "辭職(離開公司)。",
              segments: [
                {
                  text: "会社",
                  furigana: "かいしゃ",
                  meaning: "公司",
                  tail: "を",
                },
                { text: "辞", furigana: "や", meaning: "辭", tail: "" },
                { text: "めます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Dansei"],
              specific_note: "正式",
              segments: [
                {
                  text: "男性",
                  furigana: "だんせい",
                  meaning: "男性",
                  tail: "",
                },
              ],
            },
            {
              term_target: "男",
              pronunciation: ["Otoko"],
              specific_note: "口語/性別",
              segments: [
                { text: "男", furigana: "おとこ", meaning: "男人", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "男性用トイレ。",
              translation: "男廁。",
              segments: [
                {
                  text: "男性",
                  furigana: "だんせい",
                  meaning: "男性",
                  tail: "",
                },
                { text: "用", furigana: "よう", meaning: "專用", tail: "" },
                { text: "トイレ", meaning: "廁所", tail: "。" },
              ],
            },
            {
              sentence: "あの男性は誰ですか？",
              translation: "那名男性是誰？",
              segments: [
                { text: "あの", meaning: "那個", tail: "" },
                {
                  text: "男性",
                  furigana: "だんせい",
                  meaning: "男性",
                  tail: "は",
                },
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "かっこいい男。",
              translation: "很帥的男人。",
              segments: [
                { text: "かっこいい", meaning: "帥氣", tail: "" },
                { text: "男", furigana: "おとこ", meaning: "男人", tail: "。" },
              ],
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
              pronunciation: ["Josei"],
              specific_note: "正式",
              segments: [
                {
                  text: "女性",
                  furigana: "じょせい",
                  meaning: "女性",
                  tail: "",
                },
              ],
            },
            {
              term_target: "女",
              pronunciation: ["Onna"],
              specific_note: "口語/性別",
              segments: [
                { text: "女", furigana: "おんな", meaning: "女人", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "女性用トイレ。",
              translation: "女廁。",
              segments: [
                {
                  text: "女性",
                  furigana: "じょせい",
                  meaning: "女性",
                  tail: "",
                },
                { text: "用", furigana: "よう", meaning: "專用", tail: "" },
                { text: "トイレ", meaning: "廁所", tail: "。" },
              ],
            },
            {
              sentence: "きれいな女性。",
              translation: "漂亮的女性。",
              segments: [
                { text: "きれい", meaning: "漂亮", tail: "な" },
                {
                  text: "女性",
                  furigana: "じょせい",
                  meaning: "女性",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "女性に人気があります。",
              translation: "受女性歡迎。",
              segments: [
                {
                  text: "女性",
                  furigana: "じょせい",
                  meaning: "女性",
                  tail: "に",
                },
                {
                  text: "人気",
                  furigana: "にんき",
                  meaning: "受歡迎/人氣",
                  tail: "が",
                },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
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
              pronunciation: ["Gakkou"],
              specific_note: "",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "学校へ行きます。",
              translation: "去學校。",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "学校はどこですか？",
              translation: "學校在哪裡？",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "は",
                },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "学校の近く。",
              translation: "學校附近。",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "の",
                },
                { text: "近", furigana: "ちか", meaning: "附近", tail: "く" },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Sensei"],
              specific_note: "",
              segments: [
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "先生、こんにちは。",
              translation: "老師好。",
              segments: [
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "、",
                },
                { text: "こんにちは", meaning: "你好", tail: "。" },
              ],
            },
            {
              sentence: "日本語の先生。",
              translation: "日文老師。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "の",
                },
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "先生に聞きます。",
              translation: "問老師。",
              segments: [
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "に",
                },
                { text: "聞", furigana: "き", meaning: "問", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Eiga"],
              specific_note: "電影",
              segments: [
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
              ],
            },
            {
              term_target: "動画",
              pronunciation: ["Douga"],
              specific_note: "影片(如YouTube)",
              segments: [
                { text: "動画", furigana: "どうが", meaning: "影片", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "映画を見ます。",
              translation: "看電影。",
              segments: [
                {
                  text: "映画",
                  furigana: "えいが",
                  meaning: "電影",
                  tail: "を",
                },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "面白い動画。",
              translation: "有趣的影片。",
              segments: [
                {
                  text: "面白",
                  furigana: "おもしろ",
                  meaning: "有趣",
                  tail: "い",
                },
                {
                  text: "動画",
                  furigana: "どうが",
                  meaning: "影片",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "映画館に行きます。",
              translation: "去電影院。",
              segments: [
                {
                  text: "映画館",
                  furigana: "えいがかん",
                  meaning: "電影院",
                  tail: "に",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Keitai"],
              specific_note: "手機(統稱)",
              segments: [
                {
                  text: "携帯",
                  furigana: "けいたい",
                  meaning: "手機",
                  tail: "",
                },
              ],
            },
            {
              term_target: "スマホ",
              pronunciation: ["Sumaho"],
              specific_note: "智慧型手機",
              segments: [{ text: "スマホ", meaning: "智慧型手機", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "私のスマホ。",
              translation: "我的智慧型手機。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "スマホ", meaning: "智慧型手機", tail: "。" },
              ],
            },
            {
              sentence: "携帯を忘れました。",
              translation: "忘了帶手機。",
              segments: [
                {
                  text: "携帯",
                  furigana: "けいたい",
                  meaning: "手機",
                  tail: "を",
                },
                { text: "忘", furigana: "わす", meaning: "忘記", tail: "" },
                { text: "れました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "スマホを使います。",
              translation: "用手機。",
              segments: [
                { text: "スマホ", meaning: "智慧型手機", tail: "を" },
                { text: "使", furigana: "つか", meaning: "用", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Pasokon"],
              specific_note: "個人電腦",
              segments: [{ text: "パソコン", meaning: "電腦", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "パソコンを使います。",
              translation: "用電腦。",
              segments: [
                { text: "パソコン", meaning: "電腦", tail: "を" },
                { text: "使", furigana: "つか", meaning: "用", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "新しいパソコン。",
              translation: "新電腦。",
              segments: [
                { text: "新", furigana: "あたら", meaning: "新", tail: "しい" },
                { text: "パソコン", meaning: "電腦", tail: "。" },
              ],
            },
            {
              sentence: "パソコンが壊れました。",
              translation: "電腦壞了。",
              segments: [
                { text: "パソコン", meaning: "電腦", tail: "が" },
                { text: "壊", furigana: "こわ", meaning: "壞", tail: "" },
                { text: "れました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Kuruma"],
              specific_note: "",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "車を運転します。",
              translation: "開車。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "を" },
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "車で行きます。",
              translation: "開車(搭車)去。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "で" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "赤い車。",
              translation: "紅色的車。",
              segments: [
                { text: "赤", furigana: "あか", meaning: "紅", tail: "い" },
                { text: "車", furigana: "くるま", meaning: "車", tail: "。" },
              ],
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
              pronunciation: ["Ichiba"],
              specific_note: "傳統市場",
              segments: [
                { text: "市場", furigana: "いちば", meaning: "市場", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "市場で買います。",
              translation: "在市場買。",
              segments: [
                {
                  text: "市場",
                  furigana: "いちば",
                  meaning: "市場",
                  tail: "で",
                },
                { text: "買", furigana: "か", meaning: "買", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "魚市場。",
              translation: "魚市場。",
              segments: [
                { text: "魚", furigana: "うお", meaning: "魚", tail: "" },
                {
                  text: "市場",
                  furigana: "いちば",
                  meaning: "市場",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "夜市に行きます。",
              translation: "去夜市 (Yoichi)。",
              segments: [
                {
                  text: "夜市",
                  furigana: "よいち",
                  meaning: "夜市",
                  tail: "に",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Fuku"],
              specific_note: "",
              segments: [
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "服を買います。",
              translation: "買衣服。",
              segments: [
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "を" },
                { text: "買", furigana: "か", meaning: "買", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "服を着ます。",
              translation: "穿衣服。",
              segments: [
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "を" },
                { text: "着", furigana: "き", meaning: "穿", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "この服は安いです。",
              translation: "這件衣服很便宜。",
              segments: [
                { text: "この", meaning: "這件", tail: "" },
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "は" },
                { text: "安", furigana: "やす", meaning: "便宜", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Mise"],
              specific_note: "",
              segments: [
                { text: "店", furigana: "みせ", meaning: "店", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "店に入ります。",
              translation: "進店裡。",
              segments: [
                { text: "店", furigana: "みせ", meaning: "店", tail: "に" },
                { text: "入", furigana: "はい", meaning: "進", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "有名なお店。",
              translation: "有名的店。",
              segments: [
                {
                  text: "有名",
                  furigana: "ゆうめい",
                  meaning: "有名",
                  tail: "な",
                },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "店", furigana: "みせ", meaning: "店", tail: "。" },
              ],
            },
            {
              sentence: "店を開けます。",
              translation: "開店。",
              segments: [
                { text: "店", furigana: "みせ", meaning: "店", tail: "を" },
                { text: "開", furigana: "あ", meaning: "開", tail: "" },
                { text: "けます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Basu"],
              specific_note: "",
              segments: [{ text: "バス", meaning: "公車", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "バスに乗ります。",
              translation: "搭公車。",
              segments: [
                { text: "バス", meaning: "公車", tail: "に" },
                { text: "乗", furigana: "の", meaning: "搭乘", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "バスが来ました。",
              translation: "公車來了。",
              segments: [
                { text: "バス", meaning: "公車", tail: "が" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "バス停。",
              translation: "公車站牌。",
              segments: [
                { text: "バス", meaning: "公車", tail: "" },
                { text: "停", furigana: "てい", meaning: "站", tail: "。" },
              ],
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
              pronunciation: ["Michi"],
              specific_note: "",
              segments: [
                { text: "道", furigana: "みち", meaning: "路", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "この道。",
              translation: "這條路。",
              segments: [
                { text: "この", meaning: "這條", tail: "" },
                { text: "道", furigana: "みち", meaning: "路", tail: "。" },
              ],
            },
            {
              sentence: "道を渡ります。",
              translation: "過馬路。",
              segments: [
                { text: "道", furigana: "みち", meaning: "路", tail: "を" },
                { text: "渡", furigana: "わた", meaning: "渡過", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "道を聞きます。",
              translation: "問路。",
              segments: [
                { text: "道", furigana: "みち", meaning: "路", tail: "を" },
                { text: "聞", furigana: "き", meaning: "問", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Ie"],
              specific_note: "房子/家",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
              ],
            },
            {
              term_target: "うち",
              pronunciation: ["Uchi"],
              specific_note: "我家(歸屬感)",
              segments: [{ text: "うち", meaning: "我家", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "大きい家。",
              translation: "大房子。",
              segments: [
                { text: "大", furigana: "おお", meaning: "大", tail: "きい" },
                { text: "家", furigana: "いえ", meaning: "房子", tail: "。" },
              ],
            },
            {
              sentence: "家に帰ります。",
              translation: "回家。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "に" },
                { text: "帰", furigana: "かえ", meaning: "回", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私のうち。",
              translation: "我家。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "うち", meaning: "家", tail: "。" },
              ],
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
              pronunciation: ["Okaasan"],
              specific_note: "尊稱",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "母", furigana: "かあ", meaning: "媽媽", tail: "" },
                { text: "さん", meaning: "(尊稱)", tail: "" },
              ],
            },
            {
              term_target: "母",
              pronunciation: ["Haha"],
              specific_note: "謙稱(對外人說)",
              segments: [
                { text: "母", furigana: "はは", meaning: "家母", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私のお母さん。",
              translation: "我媽媽 (對家人說)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "母", furigana: "かあ", meaning: "媽媽", tail: "" },
                { text: "さん", meaning: "(尊稱)", tail: "。" },
              ],
            },
            {
              sentence: "母は料理が得意です。",
              translation: "家母擅長做菜 (對外人說)。",
              segments: [
                { text: "母", furigana: "はは", meaning: "家母", tail: "は" },
                {
                  text: "料理",
                  furigana: "りょうり",
                  meaning: "料理",
                  tail: "が",
                },
                { text: "得意", furigana: "とくい", meaning: "擅長", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お母さんは元気ですか？",
              translation: "令堂身體好嗎？(問別人)",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "母", furigana: "かあ", meaning: "媽媽", tail: "" },
                { text: "さん", meaning: "(尊稱)", tail: "は" },
                { text: "元気", furigana: "げんき", meaning: "健康", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
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
              pronunciation: ["Otoosan"],
              specific_note: "尊稱",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "父", furigana: "とう", meaning: "爸爸", tail: "" },
                { text: "さん", meaning: "(尊稱)", tail: "" },
              ],
            },
            {
              term_target: "父",
              pronunciation: ["Chichi"],
              specific_note: "謙稱(對外人說)",
              segments: [
                { text: "父", furigana: "ちち", meaning: "家父", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私のお父さん。",
              translation: "我爸爸 (對家人說)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "父", furigana: "とう", meaning: "爸爸", tail: "" },
                { text: "さん", meaning: "(尊稱)", tail: "。" },
              ],
            },
            {
              sentence: "父は会社員です。",
              translation: "家父是公司職員 (對外人說)。",
              segments: [
                { text: "父", furigana: "ちち", meaning: "家父", tail: "は" },
                {
                  text: "会社員",
                  furigana: "かいしゃいん",
                  meaning: "公司職員",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お父さんによろしく。",
              translation: "請代我向令尊問好。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "父", furigana: "とう", meaning: "爸爸", tail: "" },
                { text: "さん", meaning: "(尊稱)", tail: "に" },
                { text: "よろしく", meaning: "問好", tail: "。" },
              ],
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
              pronunciation: ["Kyoudai"],
              specific_note: "泛指",
              segments: [
                {
                  text: "兄弟",
                  furigana: "きょうだい",
                  meaning: "兄弟",
                  tail: "",
                },
              ],
            },
            {
              term_target: "兄",
              pronunciation: ["Ani"],
              specific_note: "哥哥(謙稱)",
              segments: [
                { text: "兄", furigana: "あに", meaning: "哥哥", tail: "" },
              ],
            },
            {
              term_target: "弟",
              pronunciation: ["Otouto"],
              specific_note: "弟弟",
              segments: [
                { text: "弟", furigana: "おとうと", meaning: "弟弟", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "兄弟がいますか？",
              translation: "你有兄弟姊妹嗎？",
              segments: [
                {
                  text: "兄弟",
                  furigana: "きょうだい",
                  meaning: "兄弟",
                  tail: "が",
                },
                { text: "い", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "私の兄。",
              translation: "我的哥哥。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "兄", furigana: "あに", meaning: "哥哥", tail: "。" },
              ],
            },
            {
              sentence: "弟は学生です。",
              translation: "弟弟是學生。",
              segments: [
                {
                  text: "弟",
                  furigana: "おとうと",
                  meaning: "弟弟",
                  tail: "は",
                },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Shimai"],
              specific_note: "泛指",
              segments: [
                { text: "姉妹", furigana: "しまい", meaning: "姐妹", tail: "" },
              ],
            },
            {
              term_target: "姉",
              pronunciation: ["Ane"],
              specific_note: "姊姊(謙稱)",
              segments: [
                { text: "姉", furigana: "あね", meaning: "姊姊", tail: "" },
              ],
            },
            {
              term_target: "妹",
              pronunciation: ["Imouto"],
              specific_note: "妹妹",
              segments: [
                { text: "妹", furigana: "いもうと", meaning: "妹妹", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "三姉妹。",
              translation: "三姊妹。",
              segments: [
                { text: "三", furigana: "さん", meaning: "三", tail: "" },
                {
                  text: "姉妹",
                  furigana: "しまい",
                  meaning: "姐妹",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "私の姉。",
              translation: "我的姊姊。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "姉", furigana: "あね", meaning: "姊姊", tail: "。" },
              ],
            },
            {
              sentence: "妹と遊びます。",
              translation: "跟妹妹玩。",
              segments: [
                {
                  text: "妹",
                  furigana: "いもうと",
                  meaning: "妹妹",
                  tail: "と",
                },
                { text: "遊", furigana: "あそ", meaning: "玩", tail: "" },
                { text: "びます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Chuugokugo"],
              specific_note: "",
              segments: [
                {
                  text: "中国",
                  furigana: "ちゅうごく",
                  meaning: "中國",
                  tail: "",
                },
                { text: "語", furigana: "ご", meaning: "語", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "中国語を話します。",
              translation: "說中文。",
              segments: [
                {
                  text: "中国語",
                  furigana: "ちゅうごくご",
                  meaning: "中文",
                  tail: "を",
                },
                { text: "話", furigana: "はな", meaning: "說", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "中国語のメニュー。",
              translation: "中文菜單。",
              segments: [
                {
                  text: "中国語",
                  furigana: "ちゅうごくご",
                  meaning: "中文",
                  tail: "の",
                },
                { text: "メニュー", meaning: "菜單", tail: "。" },
              ],
            },
            {
              sentence: "中国語を勉強しています。",
              translation: "正在學中文。",
              segments: [
                {
                  text: "中国語",
                  furigana: "ちゅうごくご",
                  meaning: "中文",
                  tail: "を",
                },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "學習",
                  tail: "",
                },
                { text: "して", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Asa"],
              specific_note: "",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早晨", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "朝ごはん。",
              translation: "早餐。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早晨", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "。" },
              ],
            },
            {
              sentence: "朝早く起きます。",
              translation: "一早起床。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早晨", tail: "" },
                { text: "早", furigana: "はや", meaning: "早", tail: "く" },
                { text: "起", furigana: "お", meaning: "起", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "いい朝ですね。",
              translation: "美好的早晨。",
              segments: [
                { text: "いい", meaning: "好", tail: "" },
                { text: "朝", furigana: "あさ", meaning: "早晨", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "ね", meaning: "呢 (感嘆)", tail: "。" },
              ],
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
              pronunciation: ["Yoru"],
              specific_note: "",
              segments: [
                { text: "夜", furigana: "よる", meaning: "夜晚", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "夜ごはん。",
              translation: "晚餐。",
              segments: [
                { text: "夜", furigana: "よる", meaning: "夜晚", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "。" },
              ],
            },
            {
              sentence: "夜遅く。",
              translation: "深夜。",
              segments: [
                { text: "夜", furigana: "よる", meaning: "夜晚", tail: "" },
                { text: "遅", furigana: "おそ", meaning: "晚", tail: "く" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "夜景がきれい。",
              translation: "夜景很美。",
              segments: [
                {
                  text: "夜景",
                  furigana: "やけい",
                  meaning: "夜景",
                  tail: "が",
                },
                { text: "きれい", meaning: "漂亮", tail: "。" },
              ],
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
              pronunciation: ["Kippu"],
              specific_note: "車票",
              segments: [
                { text: "切符", furigana: "きっぷ", meaning: "車票", tail: "" },
              ],
            },
            {
              term_target: "チケット",
              pronunciation: ["Chiketto"],
              specific_note: "入場券",
              segments: [{ text: "チケット", meaning: "票", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "切符を買います。",
              translation: "買車票。",
              segments: [
                {
                  text: "切符",
                  furigana: "きっぷ",
                  meaning: "車票",
                  tail: "を",
                },
                { text: "買", furigana: "か", meaning: "買", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "電車の切符。",
              translation: "電車票。",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "の",
                },
                {
                  text: "切符",
                  furigana: "きっぷ",
                  meaning: "車票",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "コンサートのチケット。",
              translation: "演唱會門票。",
              segments: [
                { text: "コンサート", meaning: "演唱會", tail: "の" },
                { text: "チケット", meaning: "門票", tail: "。" },
              ],
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
              pronunciation: ["Kaban"],
              specific_note: "",
              segments: [{ text: "カバン", meaning: "包包", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "カバンを持ちます。",
              translation: "拿包包。",
              segments: [
                { text: "カバン", meaning: "包包", tail: "を" },
                { text: "持", furigana: "も", meaning: "拿", tail: "" },
                { text: "ちます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "重いカバン。",
              translation: "很重的包包。",
              segments: [
                { text: "重", furigana: "おも", meaning: "重", tail: "い" },
                { text: "カバン", meaning: "包包", tail: "。" },
              ],
            },
            {
              sentence: "カバンに入れます。",
              translation: "放進包包裡。",
              segments: [
                { text: "カバン", meaning: "包包", tail: "に" },
                { text: "入", furigana: "い", meaning: "放進", tail: "" },
                { text: "れます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Koppu"],
              specific_note: "",
              segments: [{ text: "コップ", meaning: "杯子", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "コップの水。",
              translation: "杯子裡的水。",
              segments: [
                { text: "コップ", meaning: "杯子", tail: "の" },
                { text: "水", furigana: "みず", meaning: "水", tail: "。" },
              ],
            },
            {
              sentence: "コップを洗います。",
              translation: "洗杯子。",
              segments: [
                { text: "コップ", meaning: "杯子", tail: "を" },
                { text: "洗", furigana: "あら", meaning: "洗", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "プラスチックのコップ。",
              translation: "塑膠杯。",
              segments: [
                { text: "プラスチック", meaning: "塑膠", tail: "の" },
                { text: "コップ", meaning: "杯子", tail: "。" },
              ],
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
              pronunciation: ["Isha"],
              specific_note: "",
              segments: [
                { text: "医者", furigana: "いしゃ", meaning: "醫生", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "医者に行きます。",
              translation: "去看醫生。",
              segments: [
                {
                  text: "医者",
                  furigana: "いしゃ",
                  meaning: "醫生",
                  tail: "に",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "彼は医者です。",
              translation: "他是醫生。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "医者", furigana: "いしゃ", meaning: "醫生", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "歯医者。",
              translation: "牙醫。",
              segments: [
                {
                  text: "歯医者",
                  furigana: "はいしゃ",
                  meaning: "牙醫",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Keisatsu"],
              specific_note: "",
              segments: [
                {
                  text: "警察",
                  furigana: "けいさつ",
                  meaning: "警察",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "警察を呼びます。",
              translation: "叫警察。",
              segments: [
                {
                  text: "警察",
                  furigana: "けいさつ",
                  meaning: "警察",
                  tail: "を",
                },
                { text: "呼", furigana: "よ", meaning: "叫", tail: "" },
                { text: "びます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "警察署。",
              translation: "警察局。",
              segments: [
                {
                  text: "警察",
                  furigana: "けいさつ",
                  meaning: "警察",
                  tail: "",
                },
                { text: "署", furigana: "しょ", meaning: "署/局", tail: "。" },
              ],
            },
            {
              sentence: "警察官。",
              translation: "警官(指人)。",
              segments: [
                {
                  text: "警察",
                  furigana: "けいさつ",
                  meaning: "警察",
                  tail: "",
                },
                { text: "官", furigana: "かん", meaning: "官", tail: "。" },
              ],
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
              pronunciation: ["Byouin"],
              specific_note: "",
              segments: [
                {
                  text: "病院",
                  furigana: "びょういん",
                  meaning: "醫院",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "病院へ行きます。",
              translation: "去醫院。",
              segments: [
                {
                  text: "病院",
                  furigana: "びょういん",
                  meaning: "醫院",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "大きい病院。",
              translation: "大醫院。",
              segments: [
                { text: "大", furigana: "おお", meaning: "大", tail: "きい" },
                {
                  text: "病院",
                  furigana: "びょういん",
                  meaning: "醫院",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "病院を出ます。",
              translation: "出院(離開醫院)。",
              segments: [
                {
                  text: "病院",
                  furigana: "びょういん",
                  meaning: "醫院",
                  tail: "を",
                },
                { text: "出", furigana: "で", meaning: "出", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Seki"],
              specific_note: "",
              segments: [
                { text: "席", furigana: "せき", meaning: "座位", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "席がありますか？",
              translation: "有位子嗎？",
              segments: [
                { text: "席", furigana: "せき", meaning: "座位", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "席に着きます。",
              translation: "就座。",
              segments: [
                { text: "席", furigana: "せき", meaning: "座位", tail: "に" },
                { text: "着", furigana: "つ", meaning: "就/到", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "予約席。",
              translation: "預約席。",
              segments: [
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "席", furigana: "せき", meaning: "座位", tail: "。" },
              ],
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
              pronunciation: ["Doa"],
              specific_note: "",
              segments: [{ text: "ドア", meaning: "門", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ドアを開けます。",
              translation: "開門。",
              segments: [
                { text: "ドア", meaning: "門", tail: "を" },
                { text: "開", furigana: "あ", meaning: "開", tail: "" },
                { text: "けます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ドアを閉めます。",
              translation: "關門。",
              segments: [
                { text: "ドア", meaning: "門", tail: "を" },
                { text: "閉", furigana: "し", meaning: "關", tail: "" },
                { text: "めます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ドアをノックします。",
              translation: "敲門。",
              segments: [
                { text: "ドア", meaning: "門", tail: "を" },
                { text: "ノック", meaning: "敲", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Heya"],
              specific_note: "",
              segments: [
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私の部屋。",
              translation: "我房間。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "。" },
              ],
            },
            {
              sentence: "部屋を掃除します。",
              translation: "打掃房間。",
              segments: [
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "を" },
                { text: "掃除", furigana: "そうじ", meaning: "打掃", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "広い部屋。",
              translation: "寬敞的房間。",
              segments: [
                { text: "広", furigana: "ひろ", meaning: "寬", tail: "い" },
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "。" },
              ],
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
              pronunciation: ["Eki"],
              specific_note: "",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "駅はどこですか？",
              translation: "車站在哪？",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "は" },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "駅の近く。",
              translation: "車站附近。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "の" },
                { text: "近", furigana: "ちか", meaning: "附近", tail: "く" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "駅前。",
              translation: "車站前。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "前", furigana: "まえ", meaning: "前", tail: "。" },
              ],
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
              pronunciation: ["Chikatetsu"],
              specific_note: "",
              segments: [
                {
                  text: "地下鉄",
                  furigana: "ちかてつ",
                  meaning: "地鐵",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "地下鉄の駅。",
              translation: "地鐵站。",
              segments: [
                {
                  text: "地下鉄",
                  furigana: "ちかてつ",
                  meaning: "地鐵",
                  tail: "の",
                },
                { text: "駅", furigana: "えき", meaning: "車站", tail: "。" },
              ],
            },
            {
              sentence: "地下鉄に乗ります。",
              translation: "搭地鐵。",
              segments: [
                {
                  text: "地下鉄",
                  furigana: "ちかてつ",
                  meaning: "地鐵",
                  tail: "に",
                },
                { text: "乗", furigana: "の", meaning: "搭", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "地下鉄の路線図。",
              translation: "地鐵路線圖。",
              segments: [
                {
                  text: "地下鉄",
                  furigana: "ちかてつ",
                  meaning: "地鐵",
                  tail: "の",
                },
                { text: "路線", furigana: "ろせん", meaning: "路線", tail: "" },
                { text: "図", furigana: "ず", meaning: "圖", tail: "。" },
              ],
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
              pronunciation: ["Densha"],
              specific_note: "電車(常用)",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "",
                },
              ],
            },
            {
              term_target: "汽車",
              pronunciation: ["Kisha"],
              specific_note: "火車(舊式)",
              segments: [
                { text: "汽車", furigana: "きしゃ", meaning: "火車", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "電車で行きます。",
              translation: "搭電車去。",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "で",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "電車が来ました。",
              translation: "電車來了。",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "が",
                },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "電車に乗ります。",
              translation: "上車。",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "に",
                },
                { text: "乗", furigana: "の", meaning: "搭", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Kuukou"],
              specific_note: "",
              segments: [
                {
                  text: "空港",
                  furigana: "くうこう",
                  meaning: "機場",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "空港へ行きます。",
              translation: "去機場。",
              segments: [
                {
                  text: "空港",
                  furigana: "くうこう",
                  meaning: "機場",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "成田空港。",
              translation: "成田機場。",
              segments: [
                { text: "成田", furigana: "なりた", meaning: "成田", tail: "" },
                {
                  text: "空港",
                  furigana: "くうこう",
                  meaning: "機場",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "空港に着きました。",
              translation: "抵達機場了。",
              segments: [
                {
                  text: "空港",
                  furigana: "くうこう",
                  meaning: "機場",
                  tail: "に",
                },
                { text: "着", furigana: "つ", meaning: "抵達", tail: "" },
                { text: "きました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Nimotsu"],
              specific_note: "",
              segments: [
                { text: "荷物", furigana: "にもつ", meaning: "行李", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "荷物が多い。",
              translation: "行李很多。",
              segments: [
                {
                  text: "荷物",
                  furigana: "にもつ",
                  meaning: "行李",
                  tail: "が",
                },
                { text: "多", furigana: "おお", meaning: "多", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "荷物を持ちます。",
              translation: "提行李。",
              segments: [
                {
                  text: "荷物",
                  furigana: "にもつ",
                  meaning: "行李",
                  tail: "を",
                },
                { text: "持", furigana: "も", meaning: "拿/提", tail: "" },
                { text: "ちます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "荷物を送ります。",
              translation: "寄行李。",
              segments: [
                {
                  text: "荷物",
                  furigana: "にもつ",
                  meaning: "行李",
                  tail: "を",
                },
                { text: "送", furigana: "おく", meaning: "寄/送", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Chizu"],
              specific_note: "",
              segments: [
                { text: "地図", furigana: "ちず", meaning: "地圖", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "地図を見ます。",
              translation: "看地圖。",
              segments: [
                { text: "地図", furigana: "ちず", meaning: "地圖", tail: "を" },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "地図を描きます。",
              translation: "畫地圖。",
              segments: [
                { text: "地図", furigana: "ちず", meaning: "地圖", tail: "を" },
                { text: "描", furigana: "か", meaning: "畫", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "グーグルマップ。",
              translation: "Google地圖。",
              segments: [
                { text: "グーグル", meaning: "Google", tail: "" },
                { text: "マップ", meaning: "地圖 (Map)", tail: "。" },
              ],
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
              pronunciation: ["Kauntaa"],
              specific_note: "",
              segments: [{ text: "カウンター", meaning: "櫃檯", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "カウンターで払います。",
              translation: "在櫃檯結帳。",
              segments: [
                { text: "カウンター", meaning: "櫃檯", tail: "で" },
                { text: "払", furigana: "はら", meaning: "付(錢)", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "案内カウンター。",
              translation: "服務台。",
              segments: [
                {
                  text: "案内",
                  furigana: "あんない",
                  meaning: "引導/服務",
                  tail: "",
                },
                { text: "カウンター", meaning: "櫃檯", tail: "。" },
              ],
            },
            {
              sentence: "カウンター席。",
              translation: "吧台座位。",
              segments: [
                { text: "カウンター", meaning: "吧台", tail: "" },
                { text: "席", furigana: "せき", meaning: "座位", tail: "。" },
              ],
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
              pronunciation: ["Robii"],
              specific_note: "",
              segments: [{ text: "ロビー", meaning: "大廳", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ロビーで待ちます。",
              translation: "在大廳等。",
              segments: [
                { text: "ロビー", meaning: "大廳", tail: "で" },
                { text: "待", furigana: "ま", meaning: "等", tail: "" },
                { text: "ちます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ロビーに集合。",
              translation: "在大廳集合。",
              segments: [
                { text: "ロビー", meaning: "大廳", tail: "に" },
                {
                  text: "集合",
                  furigana: "しゅうごう",
                  meaning: "集合",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ホテルのロビー。",
              translation: "飯店大廳。",
              segments: [
                { text: "ホテル", meaning: "飯店", tail: "の" },
                { text: "ロビー", meaning: "大廳", tail: "。" },
              ],
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
              pronunciation: ["Yoyaku"],
              specific_note: "",
              segments: [
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "予約しました。",
              translation: "預約了。",
              segments: [
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "しました", meaning: "做了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "予約をお願いします。",
              translation: "麻煩幫我預約。",
              segments: [
                {
                  text: "予約",
                  furigana: "よやく",
                  meaning: "預約",
                  tail: "を",
                },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "い", meaning: "(名詞化)", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "予約をキャンセルします。",
              translation: "取消預約。",
              segments: [
                {
                  text: "予約",
                  furigana: "よやく",
                  meaning: "預約",
                  tail: "を",
                },
                { text: "キャンセル", meaning: "取消", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Chekkuin"],
              specific_note: "",
              segments: [
                { text: "チェックイン", meaning: "入住 (Check-in)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "チェックインお願いします。",
              translation: "麻煩辦理入住。",
              segments: [
                { text: "チェックイン", meaning: "入住", tail: "" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "い", meaning: "(名詞化)", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "チェックインの時間。",
              translation: "入住時間。",
              segments: [
                { text: "チェックイン", meaning: "入住", tail: "の" },
                {
                  text: "時間",
                  furigana: "じかん",
                  meaning: "時間",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "チェックインカウンター。",
              translation: "入住櫃台。",
              segments: [
                { text: "チェックイン", meaning: "入住", tail: "" },
                { text: "カウンター", meaning: "櫃檯", tail: "。" },
              ],
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
              pronunciation: ["Chekkuauto"],
              specific_note: "",
              segments: [
                {
                  text: "チェックアウト",
                  meaning: "退房 (Check-out)",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "チェックアウトは何時ですか？",
              translation: "退房是幾點？",
              segments: [
                { text: "チェックアウト", meaning: "退房", tail: "は" },
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "チェックアウトをお願いします。",
              translation: "我要退房。",
              segments: [
                { text: "チェックアウト", meaning: "退房", tail: "を" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "い", meaning: "(名詞化)", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "チェックアウト前。",
              translation: "退房前。",
              segments: [
                { text: "チェックアウト", meaning: "退房", tail: "" },
                { text: "前", furigana: "まえ", meaning: "前", tail: "。" },
              ],
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
              pronunciation: ["Nomimono"],
              specific_note: "",
              segments: [
                { text: "飲", furigana: "の", meaning: "喝", tail: "" },
                { text: "み", meaning: "(連接)", tail: "" },
                { text: "物", furigana: "もの", meaning: "東西", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "飲み物は？",
              translation: "飲料呢？",
              segments: [
                { text: "飲", furigana: "の", meaning: "喝", tail: "" },
                { text: "み", meaning: "(連接)", tail: "" },
                { text: "物", furigana: "もの", meaning: "東西", tail: "は" },
                { text: "？", tail: "" },
              ],
            },
            {
              sentence: "飲み物を買います。",
              translation: "買飲料。",
              segments: [
                { text: "飲", furigana: "の", meaning: "喝", tail: "" },
                { text: "み", meaning: "(連接)", tail: "" },
                { text: "物", furigana: "もの", meaning: "東西", tail: "を" },
                { text: "買", furigana: "か", meaning: "買", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "冷たい飲み物。",
              translation: "冷飲。",
              segments: [
                {
                  text: "冷",
                  furigana: "つめ",
                  meaning: "冰/冷",
                  tail: "たい",
                },
                { text: "飲", furigana: "の", meaning: "喝", tail: "" },
                { text: "み", meaning: "(連接)", tail: "" },
                { text: "物", furigana: "もの", meaning: "東西", tail: "。" },
              ],
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
              pronunciation: ["Menyuu"],
              specific_note: "",
              segments: [{ text: "メニュー", meaning: "菜單", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "メニューをください。",
              translation: "請給菜單。",
              segments: [
                { text: "メニュー", meaning: "菜單", tail: "を" },
                { text: "ください", meaning: "請給", tail: "。" },
              ],
            },
            {
              sentence: "英語のメニュー。",
              translation: "英文菜單。",
              segments: [
                {
                  text: "英語",
                  furigana: "えいご",
                  meaning: "英文",
                  tail: "の",
                },
                { text: "メニュー", meaning: "菜單", tail: "。" },
              ],
            },
            {
              sentence: "メニューを見ます。",
              translation: "看菜單。",
              segments: [
                { text: "メニュー", meaning: "菜單", tail: "を" },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Hirugohan"],
              specific_note: "",
              segments: [
                { text: "昼", furigana: "ひる", meaning: "中午", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "" },
              ],
            },
            {
              term_target: "ランチ",
              pronunciation: ["Ranchi"],
              specific_note: "Lunch",
              segments: [{ text: "ランチ", meaning: "午餐", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "昼ごはんを食べます。",
              translation: "吃午餐。",
              segments: [
                { text: "昼", furigana: "ひる", meaning: "中午", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "を" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お昼ごはんを作ります。",
              translation: "做午餐。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "昼", furigana: "ひる", meaning: "中午", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "を" },
                { text: "作", furigana: "つく", meaning: "做", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ランチタイム。",
              translation: "午餐時間。",
              segments: [
                { text: "ランチ", meaning: "午餐", tail: "" },
                { text: "タイム", meaning: "時間 (Time)", tail: "。" },
              ],
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
              pronunciation: ["Bangohan"],
              specific_note: "",
              segments: [
                { text: "晩", furigana: "ばん", meaning: "晚上", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "" },
              ],
            },
            {
              term_target: "夕食",
              pronunciation: ["Yuushoku"],
              specific_note: "較正式",
              segments: [
                {
                  text: "夕食",
                  furigana: "ゆうしょく",
                  meaning: "晚餐",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "晩ごはんを食べます。",
              translation: "吃晚餐。",
              segments: [
                { text: "晩", furigana: "ばん", meaning: "晚上", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "を" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "晩ごはんを作ります。",
              translation: "煮晚餐。",
              segments: [
                { text: "晩", furigana: "ばん", meaning: "晚上", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "を" },
                { text: "作", furigana: "つく", meaning: "做/煮", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "夕食の時間。",
              translation: "晚餐時間。",
              segments: [
                {
                  text: "夕食",
                  furigana: "ゆうしょく",
                  meaning: "晚餐",
                  tail: "の",
                },
                {
                  text: "時間",
                  furigana: "じかん",
                  meaning: "時間",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Okaikei"],
              specific_note: "結帳",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "会計",
                  furigana: "かいけい",
                  meaning: "會計/帳單",
                  tail: "",
                },
              ],
            },
            {
              term_target: "伝票",
              pronunciation: ["Denpyou"],
              specific_note: "帳單明細",
              segments: [
                {
                  text: "伝票",
                  furigana: "でんぴょう",
                  meaning: "傳票/明細",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "お会計お願いします。",
              translation: "麻煩結帳。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "会計",
                  furigana: "かいけい",
                  meaning: "結帳",
                  tail: "",
                },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "い", meaning: "(名詞化)", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私が払います。",
              translation: "我來付帳。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "が" },
                { text: "払", furigana: "はら", meaning: "付", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "別々でお願いします。",
              translation: "麻煩分開結帳。",
              segments: [
                {
                  text: "別々",
                  furigana: "べつべつ",
                  meaning: "分開",
                  tail: "で",
                },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "願", furigana: "ねが", meaning: "請求", tail: "" },
                { text: "い", meaning: "(名詞化)", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Nedan"],
              specific_note: "",
              segments: [
                { text: "値段", furigana: "ねだん", meaning: "價錢", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "値段が高い。",
              translation: "價錢高。",
              segments: [
                {
                  text: "値段",
                  furigana: "ねだん",
                  meaning: "價錢",
                  tail: "が",
                },
                { text: "高", furigana: "たか", meaning: "貴", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "値段が安い。",
              translation: "價錢低。",
              segments: [
                {
                  text: "値段",
                  furigana: "ねだん",
                  meaning: "價錢",
                  tail: "が",
                },
                { text: "安", furigana: "やす", meaning: "便宜", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "値段を見ます。",
              translation: "看價錢。",
              segments: [
                {
                  text: "値段",
                  furigana: "ねだん",
                  meaning: "價錢",
                  tail: "を",
                },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Reshiito"],
              specific_note: "一般收據",
              segments: [{ text: "レシート", meaning: "收據", tail: "" }],
            },
            {
              term_target: "領収書",
              pronunciation: ["Ryoushuusho"],
              specific_note: "報帳用",
              segments: [
                {
                  text: "領収書",
                  furigana: "りょうしゅうしょ",
                  meaning: "收據/領收書",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "レシートください。",
              translation: "請給收據。",
              segments: [
                { text: "レシート", meaning: "收據", tail: "" },
                { text: "ください", meaning: "請給", tail: "。" },
              ],
            },
            {
              sentence: "レシートはいりません。",
              translation: "不用收據。",
              segments: [
                { text: "レシート", meaning: "收據", tail: "は" },
                { text: "いり", meaning: "需要", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "レシートを取ります。",
              translation: "拿收據。",
              segments: [
                { text: "レシート", meaning: "收據", tail: "を" },
                { text: "取", furigana: "と", meaning: "拿", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Saizu"],
              specific_note: "",
              segments: [{ text: "サイズ", meaning: "尺寸", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "サイズが合わない。",
              translation: "尺寸不合。",
              segments: [
                { text: "サイズ", meaning: "尺寸", tail: "が" },
                { text: "合", furigana: "あ", meaning: "合", tail: "" },
                { text: "わない", meaning: "不", tail: "。" },
              ],
            },
            {
              sentence: "大きいサイズ。",
              translation: "大尺寸。",
              segments: [
                { text: "大", furigana: "おお", meaning: "大", tail: "きい" },
                { text: "サイズ", meaning: "尺寸", tail: "。" },
              ],
            },
            {
              sentence: "サイズはありますか？",
              translation: "有這個尺寸嗎？",
              segments: [
                { text: "サイズ", meaning: "尺寸", tail: "は" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Iriguchi"],
              specific_note: "",
              segments: [
                { text: "入", furigana: "い", meaning: "入", tail: "" },
                { text: "口", furigana: "りぐち", meaning: "口", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "入口はどこ？",
              translation: "入口在哪？",
              segments: [
                {
                  text: "入口",
                  furigana: "いりぐち",
                  meaning: "入口",
                  tail: "は",
                },
                { text: "どこ", meaning: "哪裡", tail: "？" },
              ],
            },
            {
              sentence: "狭い入口。",
              translation: "狹窄的入口。",
              segments: [
                { text: "狭", furigana: "せま", meaning: "窄", tail: "い" },
                {
                  text: "入口",
                  furigana: "いりぐち",
                  meaning: "入口",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "正面入口。",
              translation: "正面入口。",
              segments: [
                {
                  text: "正面",
                  furigana: "しょうめん",
                  meaning: "正面",
                  tail: "",
                },
                {
                  text: "入口",
                  furigana: "いりぐち",
                  meaning: "入口",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Deguchi"],
              specific_note: "",
              segments: [
                { text: "出", furigana: "で", meaning: "出", tail: "" },
                { text: "口", furigana: "ぐち", meaning: "口", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "出口はあそこ。",
              translation: "出口在那。",
              segments: [
                {
                  text: "出口",
                  furigana: "でぐち",
                  meaning: "出口",
                  tail: "は",
                },
                { text: "あそこ", meaning: "那裡", tail: "。" },
              ],
            },
            {
              sentence: "非常出口。",
              translation: "緊急出口。",
              segments: [
                {
                  text: "非常",
                  furigana: "ひじょう",
                  meaning: "緊急/非常",
                  tail: "",
                },
                {
                  text: "出口",
                  furigana: "でぐち",
                  meaning: "出口",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "東口。",
              translation: "東邊出口。",
              segments: [
                { text: "東", furigana: "ひがし", meaning: "東", tail: "" },
                { text: "口", furigana: "ぐち", meaning: "口", tail: "。" },
              ],
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
              pronunciation: ["Taiwan"],
              specific_note: "",
              segments: [
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "台湾から来ました。",
              translation: "來自台灣。",
              segments: [
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "から",
                },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "台湾に行きます。",
              translation: "去台灣。",
              segments: [
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "に",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "台湾のお茶。",
              translation: "台灣的茶。",
              segments: [
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "の",
                },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "茶", furigana: "ちゃ", meaning: "茶", tail: "。" },
              ],
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
              pronunciation: ["Taiwanjin"],
              specific_note: "",
              segments: [
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
                { text: "人", furigana: "じん", meaning: "人", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は台湾人です。",
              translation: "我是台灣人。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
                { text: "人", furigana: "じん", meaning: "人", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "親切な台湾人。",
              translation: "親切的台灣人。",
              segments: [
                {
                  text: "親切",
                  furigana: "しんせつ",
                  meaning: "親切",
                  tail: "な",
                },
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
                { text: "人", furigana: "じん", meaning: "人", tail: "。" },
              ],
            },
            {
              sentence: "多くの台湾人。",
              translation: "很多台灣人。",
              segments: [
                { text: "多", furigana: "おお", meaning: "多", tail: "くの" },
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
                { text: "人", furigana: "じん", meaning: "人", tail: "。" },
              ],
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
              pronunciation: ["Zenbu"],
              specific_note: "",
              segments: [
                { text: "全部", furigana: "ぜんぶ", meaning: "全部", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "全部好き。",
              translation: "全部喜歡。",
              segments: [
                { text: "全部", furigana: "ぜんぶ", meaning: "全部", tail: "" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "全部食べました。",
              translation: "全都吃光了。",
              segments: [
                { text: "全部", furigana: "ぜんぶ", meaning: "全部", tail: "" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "それで全部です。",
              translation: "那就是全部了。",
              segments: [
                { text: "それ", meaning: "那個", tail: "で" },
                { text: "全部", furigana: "ぜんぶ", meaning: "全部", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Saifu"],
              specific_note: "",
              segments: [
                { text: "財布", furigana: "さいふ", meaning: "錢包", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "財布を忘れた。",
              translation: "忘了錢包。",
              segments: [
                {
                  text: "財布",
                  furigana: "さいふ",
                  meaning: "錢包",
                  tail: "を",
                },
                { text: "忘", furigana: "わす", meaning: "忘", tail: "" },
                { text: "れた", meaning: "了 (過去式)", tail: "。" },
              ],
            },
            {
              sentence: "財布を落としました。",
              translation: "錢包掉了。",
              segments: [
                {
                  text: "財布",
                  furigana: "さいふ",
                  meaning: "錢包",
                  tail: "を",
                },
                { text: "落", furigana: "お", meaning: "掉/落", tail: "" },
                { text: "としました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "新しい財布。",
              translation: "新錢包。",
              segments: [
                { text: "新", furigana: "あたら", meaning: "新", tail: "しい" },
                {
                  text: "財布",
                  furigana: "さいふ",
                  meaning: "錢包",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Mibunshou"],
              specific_note: "",
              segments: [
                { text: "身分", furigana: "みぶん", meaning: "身分", tail: "" },
                { text: "証", furigana: "しょう", meaning: "證", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "身分証を見せる。",
              translation: "出示證件。",
              segments: [
                { text: "身分", furigana: "みぶん", meaning: "身分", tail: "" },
                { text: "証", furigana: "しょう", meaning: "證", tail: "を" },
                { text: "見", furigana: "み", meaning: "給看", tail: "せる" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "身分証を持っていますか？",
              translation: "你有帶身分證嗎？",
              segments: [
                { text: "身分", furigana: "みぶん", meaning: "身分", tail: "" },
                { text: "証", furigana: "しょう", meaning: "證", tail: "を" },
                { text: "持", furigana: "も", meaning: "帶/拿", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "有/在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "身分証のコピー。",
              translation: "身分證影本。",
              segments: [
                { text: "身分", furigana: "みぶん", meaning: "身分", tail: "" },
                { text: "証", furigana: "しょう", meaning: "證", tail: "の" },
                { text: "コピー", meaning: "影本 (Copy)", tail: "。" },
              ],
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
              pronunciation: ["Pasupooto"],
              specific_note: "",
              segments: [{ text: "パスポート", meaning: "護照", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "パスポートを見せます。",
              translation: "出示護照。",
              segments: [
                { text: "パスポート", meaning: "護照", tail: "を" },
                { text: "見", furigana: "み", meaning: "給看", tail: "" },
                { text: "せます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "パスポートを忘れました。",
              translation: "忘了護照。",
              segments: [
                { text: "パスポート", meaning: "護照", tail: "を" },
                { text: "忘", furigana: "わす", meaning: "忘", tail: "" },
                { text: "れました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "パスポート番号。",
              translation: "護照號碼。",
              segments: [
                { text: "パスポート", meaning: "護照", tail: "" },
                {
                  text: "番号",
                  furigana: "ばんごう",
                  meaning: "號碼",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Resutoran"],
              specific_note: "",
              segments: [{ text: "レストラン", meaning: "餐廳", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "いいレストラン。",
              translation: "好的餐廳。",
              segments: [
                { text: "いい", meaning: "好", tail: "" },
                { text: "レストラン", meaning: "餐廳", tail: "。" },
              ],
            },
            {
              sentence: "フランス料理のレストラン。",
              translation: "法式餐廳。",
              segments: [
                { text: "フランス", meaning: "法國", tail: "" },
                {
                  text: "料理",
                  furigana: "りょうり",
                  meaning: "料理",
                  tail: "の",
                },
                { text: "レストラン", meaning: "餐廳", tail: "。" },
              ],
            },
            {
              sentence: "レストランを予約します。",
              translation: "預約餐廳。",
              segments: [
                { text: "レストラン", meaning: "餐廳", tail: "を" },
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Hoteru"],
              specific_note: "",
              segments: [{ text: "ホテル", meaning: "飯店", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ホテルを予約します。",
              translation: "訂飯店。",
              segments: [
                { text: "ホテル", meaning: "飯店", tail: "を" },
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "きれいなホテル。",
              translation: "漂亮的飯店。",
              segments: [
                { text: "きれい", meaning: "漂亮/乾淨", tail: "な" },
                { text: "ホテル", meaning: "飯店", tail: "。" },
              ],
            },
            {
              sentence: "ホテルに泊まります。",
              translation: "住飯店。",
              segments: [
                { text: "ホテル", meaning: "飯店", tail: "に" },
                { text: "泊", furigana: "と", meaning: "住/過夜", tail: "" },
                { text: "まります", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Basho"],
              specific_note: "",
              segments: [
                {
                  text: "場所",
                  furigana: "ばしょ",
                  meaning: "場所/地點",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "場所はどこ？",
              translation: "地點在哪？",
              segments: [
                {
                  text: "場所",
                  furigana: "ばしょ",
                  meaning: "地點",
                  tail: "は",
                },
                { text: "どこ", meaning: "哪裡", tail: "？" },
              ],
            },
            {
              sentence: "集合場所。",
              translation: "集合地點。",
              segments: [
                {
                  text: "集合",
                  furigana: "しゅうごう",
                  meaning: "集合",
                  tail: "",
                },
                {
                  text: "場所",
                  furigana: "ばしょ",
                  meaning: "地點",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "いい場所。",
              translation: "好地方。",
              segments: [
                { text: "いい", meaning: "好", tail: "" },
                {
                  text: "場所",
                  furigana: "ばしょ",
                  meaning: "地方",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Tenin"],
              specific_note: "",
              segments: [
                {
                  text: "店員",
                  furigana: "てんいん",
                  meaning: "店員",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "店員を呼ぶ。",
              translation: "叫店員。",
              segments: [
                {
                  text: "店員",
                  furigana: "てんいん",
                  meaning: "店員",
                  tail: "を",
                },
                { text: "呼", furigana: "よ", meaning: "叫", tail: "ぶ" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "店員に聞きます。",
              translation: "問店員。",
              segments: [
                {
                  text: "店員",
                  furigana: "てんいん",
                  meaning: "店員",
                  tail: "に",
                },
                { text: "聞", furigana: "き", meaning: "問", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "店員は忙しいです。",
              translation: "店員很忙。",
              segments: [
                {
                  text: "店員",
                  furigana: "てんいん",
                  meaning: "店員",
                  tail: "は",
                },
                { text: "忙", furigana: "いそが", meaning: "忙", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Suupaa"],
              specific_note: "",
              segments: [{ text: "スーパー", meaning: "超市", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "スーパーで買う。",
              translation: "在超市買。",
              segments: [
                { text: "スーパー", meaning: "超市", tail: "で" },
                { text: "買", furigana: "か", meaning: "買", tail: "う" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "スーパーに行きます。",
              translation: "去超市。",
              segments: [
                { text: "スーパー", meaning: "超市", tail: "に" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "安いスーパー。",
              translation: "便宜的超市。",
              segments: [
                { text: "安", furigana: "やす", meaning: "便宜", tail: "い" },
                { text: "スーパー", meaning: "超市", tail: "。" },
              ],
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
              pronunciation: ["Hoomu"],
              specific_note: "",
              segments: [{ text: "ホーム", meaning: "月台", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ホームで待つ。",
              translation: "在月台等。",
              segments: [
                { text: "ホーム", meaning: "月台", tail: "で" },
                { text: "待", furigana: "ま", meaning: "等", tail: "つ" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "何番ホームですか？",
              translation: "是幾號月台？",
              segments: [
                { text: "何", furigana: "なん", meaning: "幾", tail: "" },
                { text: "番", furigana: "ばん", meaning: "號", tail: "" },
                { text: "ホーム", meaning: "月台", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "1番ホーム。",
              translation: "第一月台。",
              segments: [
                { text: "1", meaning: "一", tail: "" },
                { text: "番", furigana: "ばん", meaning: "號", tail: "" },
                { text: "ホーム", meaning: "月台", tail: "。" },
              ],
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
              pronunciation: ["Ongaku"],
              specific_note: "",
              segments: [
                { text: "音", furigana: "おん", meaning: "音", tail: "" },
                { text: "楽", furigana: "がく", meaning: "樂", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "音楽を聴きます。",
              translation: "聽音樂。",
              segments: [
                {
                  text: "音楽",
                  furigana: "おんがく",
                  meaning: "音樂",
                  tail: "を",
                },
                { text: "聴", furigana: "き", meaning: "聽", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "好きな音楽。",
              translation: "喜歡的音樂。",
              segments: [
                { text: "好", furigana: "す", meaning: "喜歡", tail: "きな" },
                {
                  text: "音楽",
                  furigana: "おんがく",
                  meaning: "音樂",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "いい音楽ですね。",
              translation: "很好的音樂呢。",
              segments: [
                { text: "いい", meaning: "好", tail: "" },
                {
                  text: "音楽",
                  furigana: "おんがく",
                  meaning: "音樂",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "ね", meaning: "呢 (感嘆)", tail: "。" },
              ],
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
              pronunciation: ["Ame"],
              specific_note: "",
              segments: [
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "雨が降っています。",
              translation: "正在下雨。",
              segments: [
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "が" },
                { text: "降", furigana: "ふ", meaning: "下", tail: "" },
                { text: "って", meaning: "(動詞連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "雨が止みました。",
              translation: "雨停了。",
              segments: [
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "が" },
                { text: "止", furigana: "や", meaning: "停", tail: "" },
                { text: "みました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "激しい雨。",
              translation: "大雨。",
              segments: [
                { text: "激", furigana: "はげ", meaning: "劇烈", tail: "しい" },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "。" },
              ],
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
              pronunciation: ["Shashin"],
              specific_note: "",
              segments: [
                { text: "写", furigana: "しゃ", meaning: "照", tail: "" },
                { text: "真", furigana: "しん", meaning: "片", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "写真を撮ります。",
              translation: "拍照片。",
              segments: [
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "を",
                },
                { text: "撮", furigana: "と", meaning: "拍", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "写真を見せて。",
              translation: "讓我看照片。",
              segments: [
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "を",
                },
                { text: "見", furigana: "み", meaning: "給看", tail: "" },
                { text: "せて", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "一緒に写真を撮ろう。",
              translation: "一起拍照吧。",
              segments: [
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "に",
                },
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "を",
                },
                { text: "撮", furigana: "と", meaning: "拍", tail: "" },
                { text: "ろう", meaning: "吧 (勸誘)", tail: "。" },
              ],
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
              pronunciation: ["Hon"],
              specific_note: "",
              segments: [
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "本を読みます。",
              translation: "看書。",
              segments: [
                { text: "本", furigana: "ほん", meaning: "書", tail: "を" },
                { text: "読", furigana: "よ", meaning: "讀", tail: "" },
                { text: "みます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "本を買いました。",
              translation: "買了書。",
              segments: [
                { text: "本", furigana: "ほん", meaning: "書", tail: "を" },
                { text: "買", furigana: "か", meaning: "買", tail: "" },
                { text: "いました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "面白い本。",
              translation: "有趣的書。",
              segments: [
                {
                  text: "面白",
                  furigana: "おもしろ",
                  meaning: "有趣",
                  tail: "い",
                },
                { text: "本", furigana: "ほん", meaning: "書", tail: "。" },
              ],
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
              pronunciation: ["Toire"],
              specific_note: "",
              segments: [{ text: "トイレ", meaning: "廁所", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "トイレはどこですか？",
              translation: "廁所在哪裡？",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "は" },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "？" },
              ],
            },
            {
              sentence: "トイレに行きます。",
              translation: "去上廁所。",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "に" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "きれいなトイレ。",
              translation: "乾淨的廁所。",
              segments: [
                { text: "きれい", meaning: "乾淨", tail: "な" },
                { text: "トイレ", meaning: "廁所", tail: "。" },
              ],
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
              pronunciation: ["Tenki"],
              specific_note: "",
              segments: [
                { text: "天", furigana: "てん", meaning: "天", tail: "" },
                { text: "気", furigana: "き", meaning: "氣", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "いい天気ですね。",
              translation: "好天氣呢。",
              segments: [
                { text: "いい", meaning: "好", tail: "" },
                { text: "天気", furigana: "てんき", meaning: "天氣", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "ね", meaning: "呢 (感嘆)", tail: "。" },
              ],
            },
            {
              sentence: "明日の天気。",
              translation: "明天的天氣。",
              segments: [
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "の",
                },
                {
                  text: "天気",
                  furigana: "てんき",
                  meaning: "天氣",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "天気予報。",
              translation: "天氣預報。",
              segments: [
                { text: "天気", furigana: "てんき", meaning: "天氣", tail: "" },
                {
                  text: "予報",
                  furigana: "よほう",
                  meaning: "預報",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Messeeji"],
              specific_note: "",
              segments: [{ text: "メッセージ", meaning: "訊息", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "メッセージを送る。",
              translation: "傳訊息。",
              segments: [
                { text: "メッセージ", meaning: "訊息", tail: "を" },
                { text: "送", furigana: "おく", meaning: "傳/送", tail: "る" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "メッセージが来ました。",
              translation: "訊息來了。",
              segments: [
                { text: "メッセージ", meaning: "訊息", tail: "が" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "メッセージを残す。",
              translation: "留訊息。",
              segments: [
                { text: "メッセージ", meaning: "訊息", tail: "を" },
                { text: "残", furigana: "のこ", meaning: "留", tail: "す" },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Ima"],
              specific_note: "",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今、行きます。",
              translation: "我現在過去。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "今は忙しいです。",
              translation: "我現在很忙。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "は" },
                { text: "忙", furigana: "いそが", meaning: "忙", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "今、何時ですか？",
              translation: "現在幾點？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
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
              pronunciation: ["Totemo"],
              specific_note: "",
              segments: [{ text: "とても", meaning: "非常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "とてもおいしいです。",
              translation: "非常好吃。",
              segments: [
                { text: "とても", meaning: "非常", tail: "" },
                { text: "おいしい", meaning: "好吃", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "今日はとても暑いです。",
              translation: "今天非常熱。",
              segments: [
                {
                  text: "今日",
                  furigana: "きょう",
                  meaning: "今天",
                  tail: "は",
                },
                { text: "とても", meaning: "非常", tail: "" },
                { text: "暑", furigana: "あつ", meaning: "熱", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "とても楽しかったです。",
              translation: "非常開心。",
              segments: [
                { text: "とても", meaning: "非常", tail: "" },
                { text: "楽", furigana: "たの", meaning: "快樂", tail: "し" },
                { text: "かった", meaning: "了 (過去式)", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Hontou ni"],
              specific_note: "",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "に",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "本当に？",
              translation: "真的嗎？",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "に",
                },
                { text: "？", tail: "" },
              ],
            },
            {
              sentence: "本当にありがとうございます。",
              translation: "真的非常感謝。",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "に",
                },
                { text: "ありがとう", meaning: "謝謝", tail: "" },
                { text: "ございます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "それは本当ですか？",
              translation: "那是真的嗎？",
              segments: [
                { text: "それ", meaning: "那個", tail: "は" },
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Yoku"],
              specific_note: "程度",
              segments: [{ text: "よく", meaning: "很好地/充分地", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "よく寝ました。",
              translation: "睡得很好。",
              segments: [
                { text: "よく", meaning: "很好地", tail: "" },
                { text: "寝", furigana: "ね", meaning: "睡", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "よくできました。",
              translation: "做得很好(Good job)。",
              segments: [
                { text: "よく", meaning: "很好地", tail: "" },
                { text: "でき", meaning: "完成/做", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "よくわかりません。",
              translation: "不太清楚(無法很好地理解)。",
              segments: [
                { text: "よく", meaning: "不太/很好地", tail: "" },
                { text: "わかり", meaning: "懂", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["Yoku"],
              specific_note: "頻率",
              segments: [{ text: "よく", meaning: "經常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "よくここに来ます。",
              translation: "我常來這裡。",
              segments: [
                { text: "よく", meaning: "經常", tail: "" },
                { text: "ここ", meaning: "這裡", tail: "に" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "映画をよく見ますか？",
              translation: "你常看電影嗎？",
              segments: [
                {
                  text: "映画",
                  furigana: "えいが",
                  meaning: "電影",
                  tail: "を",
                },
                { text: "よく", meaning: "經常", tail: "" },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "彼はよく遅刻します。",
              translation: "他經常遲到。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "よく", meaning: "經常", tail: "" },
                { text: "遅刻", furigana: "ちこく", meaning: "遲到", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Taitei"],
              specific_note: "",
              segments: [{ text: "たいてい", meaning: "通常/大概", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "たいてい6時に起きます。",
              translation: "通常六點起床。",
              segments: [
                { text: "たいてい", meaning: "通常", tail: "" },
                { text: "6時", furigana: "ろくじ", meaning: "6點", tail: "に" },
                { text: "起", furigana: "お", meaning: "起", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "日曜日はたいてい家にいます。",
              translation: "星期天通常都在家。",
              segments: [
                {
                  text: "日曜日",
                  furigana: "にちようび",
                  meaning: "星期日",
                  tail: "は",
                },
                { text: "たいてい", meaning: "通常", tail: "" },
                { text: "家", furigana: "いえ", meaning: "家", tail: "に" },
                { text: "い", meaning: "在", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "朝ごはんはたいていパンです。",
              translation: "早餐通常是麵包。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "は" },
                { text: "たいてい", meaning: "通常", tail: "" },
                { text: "パン", meaning: "麵包", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Mou"],
              specific_note: "",
              segments: [{ text: "もう", meaning: "已經", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "もう食べました。",
              translation: "已經吃了。",
              segments: [
                { text: "もう", meaning: "已經", tail: "" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "もう12時です。",
              translation: "已經12點了。",
              segments: [
                { text: "もう", meaning: "已經", tail: "" },
                {
                  text: "12時",
                  furigana: "じゅうにじ",
                  meaning: "12點",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "もう帰りましたか？",
              translation: "已經回去了嗎？",
              segments: [
                { text: "もう", meaning: "已經", tail: "" },
                { text: "帰", furigana: "かえ", meaning: "回", tail: "" },
                { text: "りました", meaning: "了 (過去敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["...dake"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某物", tail: "" },
                { text: "だけ", meaning: "只有", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これだけです。",
              translation: "只有這個。",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "だけ", meaning: "只有", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "あなただけです。",
              translation: "只有你。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "だけ", meaning: "只有", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "5分だけ待ってください。",
              translation: "請等我五分鐘就好。",
              segments: [
                { text: "5分", furigana: "ごふん", meaning: "5分鐘", tail: "" },
                { text: "だけ", meaning: "只有/就", tail: "" },
                { text: "待", furigana: "ま", meaning: "等", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Mata"],
              specific_note: "",
              segments: [{ text: "また", meaning: "再次/又", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "また来ます。",
              translation: "會再來。",
              segments: [
                { text: "また", meaning: "再次", tail: "" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "また会いましょう。",
              translation: "下次見(再見面)。",
              segments: [
                { text: "また", meaning: "再次", tail: "" },
                { text: "会", furigana: "あ", meaning: "見", tail: "" },
                { text: "いましょう", meaning: "吧 (勸誘敬語)", tail: "。" },
              ],
            },
            {
              sentence: "また明日。",
              translation: "明天見。",
              segments: [
                { text: "また", meaning: "再/下次", tail: "" },
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Gurai"],
              specific_note: "",
              segments: [{ text: "ぐらい", meaning: "大約", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "10分ぐらいかかります。",
              translation: "大約花10分鐘。",
              segments: [
                {
                  text: "10分",
                  furigana: "じゅっぷん",
                  meaning: "10分鐘",
                  tail: "",
                },
                { text: "ぐらい", meaning: "大約", tail: "" },
                { text: "かかり", meaning: "花費", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "どれぐらい待ちますか？",
              translation: "要等大約多久？",
              segments: [
                { text: "どれ", meaning: "多少", tail: "" },
                { text: "ぐらい", meaning: "大約", tail: "" },
                { text: "待", furigana: "ま", meaning: "等", tail: "" },
                { text: "ちます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "3000円ぐらいです。",
              translation: "大約3000日圓。",
              segments: [
                { text: "3000", meaning: "三千", tail: "" },
                { text: "円", furigana: "えん", meaning: "日圓", tail: "" },
                { text: "ぐらい", meaning: "大約", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Sukoshi"],
              specific_note: "較正式",
              segments: [
                { text: "少", furigana: "すこ", meaning: "一點", tail: "し" },
              ],
            },
            {
              term_target: "ちょっと",
              pronunciation: ["Chotto"],
              specific_note: "口語",
              segments: [{ text: "ちょっと", meaning: "一點/稍微", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "少し辛いです。",
              translation: "有一點辣。",
              segments: [
                { text: "少", furigana: "すこ", meaning: "一點", tail: "し" },
                { text: "辛", furigana: "から", meaning: "辣", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "少し疲れました。",
              translation: "有點累了。",
              segments: [
                { text: "少", furigana: "すこ", meaning: "一點", tail: "し" },
                { text: "疲", furigana: "つか", meaning: "累", tail: "" },
                { text: "れました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "日本語が少し話せます。",
              translation: "會說一點點日文。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "が",
                },
                { text: "少", furigana: "すこ", meaning: "一點", tail: "し" },
                { text: "話", furigana: "はな", meaning: "說", tail: "" },
                { text: "せます", meaning: "能/會 (可能形敬語)", tail: "。" },
              ],
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
              pronunciation: ["...mo"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某物", tail: "" },
                { text: "も", meaning: "也", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私もそう思います。",
              translation: "我也這麼認為。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "そう", meaning: "那樣", tail: "" },
                { text: "思", furigana: "おも", meaning: "想/認為", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "これもください。",
              translation: "這個也請給我。",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "明日も雨です。",
              translation: "明天也是雨天。",
              segments: [
                { text: "明日", furigana: "あした", meaning: "明天", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Tabun"],
              specific_note: "",
              segments: [{ text: "たぶん", meaning: "或許/大概", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "たぶん大丈夫です。",
              translation: "大概沒問題。",
              segments: [
                { text: "たぶん", meaning: "或許", tail: "" },
                {
                  text: "大丈夫",
                  furigana: "だいじょうぶ",
                  meaning: "沒問題",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "たぶん彼は来ません。",
              translation: "他大概不會來。",
              segments: [
                { text: "たぶん", meaning: "或許", tail: "" },
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "たぶん雨が降るでしょう。",
              translation: "或許會下雨吧。",
              segments: [
                { text: "たぶん", meaning: "或許", tail: "" },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "が" },
                { text: "降", furigana: "ふ", meaning: "下", tail: "る" },
                { text: "でしょう", meaning: "吧 (推測敬語)", tail: "。" },
              ],
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
              pronunciation: ["Atode"],
              specific_note: "",
              segments: [{ text: "あと", meaning: "之後", tail: "で" }],
            },
          ],
          examples: [
            {
              sentence: "あとでやります。",
              translation: "稍後做。",
              segments: [
                { text: "あと", meaning: "之後", tail: "で" },
                { text: "やり", meaning: "做", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "あとで電話します。",
              translation: "晚點打電話給你。",
              segments: [
                { text: "あと", meaning: "之後", tail: "で" },
                { text: "電話", furigana: "でんわ", meaning: "電話", tail: "" },
                { text: "します", meaning: "做/打 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "またあとで。",
              translation: "待會見。",
              segments: [
                { text: "また", meaning: "再", tail: "" },
                { text: "あと", meaning: "之後", tail: "で" },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Sugu ni"],
              specific_note: "",
              segments: [{ text: "すぐ", meaning: "馬上", tail: "に" }],
            },
          ],
          examples: [
            {
              sentence: "すぐに行きます。",
              translation: "馬上去。",
              segments: [
                { text: "すぐ", meaning: "馬上", tail: "に" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "すぐに終わります。",
              translation: "很快就會結束。",
              segments: [
                { text: "すぐ", meaning: "馬上", tail: "に" },
                { text: "終", furigana: "お", meaning: "結束", tail: "" },
                { text: "わります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "すぐに戻ります。",
              translation: "馬上回來。",
              segments: [
                { text: "すぐ", meaning: "馬上", tail: "に" },
                { text: "戻", furigana: "もど", meaning: "回", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Issho ni"],
              specific_note: "",
              segments: [
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "に",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "一緒に行きましょう。",
              translation: "一起去吧。",
              segments: [
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "に",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きましょう", meaning: "吧 (勸誘敬語)", tail: "。" },
              ],
            },
            {
              sentence: "一緒に写真を撮りませんか？",
              translation: "要不要一起拍張照？",
              segments: [
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "に",
                },
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "を",
                },
                { text: "撮", furigana: "と", meaning: "拍", tail: "" },
                { text: "りません", meaning: "不...嗎 (否定疑問)", tail: "" },
                { text: "か", meaning: "嗎 (邀請)", tail: "？" },
              ],
            },
            {
              sentence: "彼と一緒にいます。",
              translation: "我和他在一起。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "と" },
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "に",
                },
                { text: "い", meaning: "在", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
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
              pronunciation: ["Mada"],
              specific_note: "",
              segments: [{ text: "まだ", meaning: "還/尚未", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "まだです。",
              translation: "還沒。",
              segments: [
                { text: "まだ", meaning: "還沒", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "まだ食べていません。",
              translation: "還沒吃。",
              segments: [
                { text: "まだ", meaning: "還", tail: "" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べて", meaning: "(連接)", tail: "" },
                { text: "いません", meaning: "沒有 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "まだ雨が降っています。",
              translation: "還在下雨。",
              segments: [
                { text: "まだ", meaning: "還", tail: "" },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "が" },
                { text: "降", furigana: "ふ", meaning: "下", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Futsuu"],
              specific_note: "",
              segments: [
                {
                  text: "普通",
                  furigana: "ふつう",
                  meaning: "普通/一般",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "普通はそうです。",
              translation: "一般來說是那樣。",
              segments: [
                {
                  text: "普通",
                  furigana: "ふつう",
                  meaning: "一般",
                  tail: "は",
                },
                { text: "そう", meaning: "那樣", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "朝は普通、パンを食べます。",
              translation: "早上一般都吃麵包。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: "は" },
                {
                  text: "普通",
                  furigana: "ふつう",
                  meaning: "一般",
                  tail: "、",
                },
                { text: "パン", meaning: "麵包", tail: "を" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "普通のサイズ。",
              translation: "普通尺寸。",
              segments: [
                {
                  text: "普通",
                  furigana: "ふつう",
                  meaning: "普通",
                  tail: "の",
                },
                { text: "サイズ", meaning: "尺寸", tail: "。" },
              ],
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
              pronunciation: ["Sugu ni"],
              specific_note: "",
              segments: [{ text: "すぐ", meaning: "立刻", tail: "に" }],
            },
          ],
          examples: [
            {
              sentence: "すぐに来てください。",
              translation: "請立刻來。",
              segments: [
                { text: "すぐ", meaning: "立刻", tail: "に" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "て", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "すぐに逃げてください。",
              translation: "請立刻逃跑。",
              segments: [
                { text: "すぐ", meaning: "立刻", tail: "に" },
                { text: "逃", furigana: "に", meaning: "逃", tail: "" },
                { text: "げて", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "すぐに始めましょう。",
              translation: "立刻開始吧。",
              segments: [
                { text: "すぐ", meaning: "立刻", tail: "に" },
                { text: "始", furigana: "はじ", meaning: "開始", tail: "" },
                { text: "めましょう", meaning: "吧 (勸誘敬語)", tail: "。" },
              ],
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
              pronunciation: ["...mo ...nai"],
              specific_note: "否定",
              segments: [
                { text: "...", meaning: "某物", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "ない", meaning: "不/沒有", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私も食べません。",
              translation: "我也不吃。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べません", meaning: "不... (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お金もありません。",
              translation: "也沒錢。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "金", furigana: "かね", meaning: "錢", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ません", meaning: "沒有 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "彼も知りません。",
              translation: "他也不知道。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "知", furigana: "し", meaning: "知", tail: "" },
                { text: "りません", meaning: "不... (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["Nani / Nan"],
              specific_note: "",
              segments: [
                { text: "何", furigana: "なに", meaning: "什麼", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは何ですか？",
              translation: "這是什麼？",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "何が好きですか？",
              translation: "你喜歡什麼？",
              segments: [
                { text: "何", furigana: "なに", meaning: "什麼", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "何をしていますか？",
              translation: "你在做什麼？",
              segments: [
                { text: "何", furigana: "なに", meaning: "什麼", tail: "を" },
                { text: "し", meaning: "做", tail: "て" },
                { text: "います", meaning: "正在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Douyatte"],
              specific_note: "問方法",
              segments: [
                { text: "どうやって", meaning: "如何/怎麼做", tail: "" },
              ],
            },
            {
              term_target: "どう",
              pronunciation: ["Dou"],
              specific_note: "問狀態",
              segments: [{ text: "どう", meaning: "如何", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "どうやって行きますか？",
              translation: "要怎麼去？(問交通方式)",
              segments: [
                { text: "どうやって", meaning: "如何", tail: "" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "これはどうやって使いますか？",
              translation: "這要怎麼用？",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "どうやって", meaning: "如何", tail: "" },
                { text: "使", furigana: "つか", meaning: "用", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "味はどうですか？",
              translation: "味道如何？",
              segments: [
                { text: "味", furigana: "あじ", meaning: "味道", tail: "は" },
                { text: "どう", meaning: "如何", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
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
              pronunciation: ["Itsu"],
              specific_note: "",
              segments: [{ text: "いつ", meaning: "何時", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "いつ行きますか？",
              translation: "什麼時候去？",
              segments: [
                { text: "いつ", meaning: "何時", tail: "" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "誕生日はいつですか？",
              translation: "生日是什麼時候？",
              segments: [
                {
                  text: "誕生日",
                  furigana: "たんじょうび",
                  meaning: "生日",
                  tail: "は",
                },
                { text: "いつ", meaning: "何時", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "いつ終わりますか？",
              translation: "什麼時候結束？",
              segments: [
                { text: "いつ", meaning: "何時", tail: "" },
                { text: "終", furigana: "お", meaning: "結束", tail: "" },
                { text: "わります", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Doko"],
              specific_note: "",
              segments: [{ text: "どこ", meaning: "哪裡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "トイレはどこですか？",
              translation: "廁所在哪裡？",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "は" },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "どこに住んでいますか？",
              translation: "你住在哪裡？",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "に" },
                { text: "住", furigana: "す", meaning: "住", tail: "" },
                { text: "んで", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "どこへ行きますか？",
              translation: "你要去哪裡？",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "へ" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Dare"],
              specific_note: "一般",
              segments: [
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
              ],
            },
            {
              term_target: "どなた",
              pronunciation: ["Donata"],
              specific_note: "禮貌",
              segments: [{ text: "どなた", meaning: "哪位 (敬語)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あれは誰ですか？",
              translation: "那是誰？",
              segments: [
                { text: "あれ", meaning: "那個", tail: "は" },
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "誰が来ますか？",
              translation: "誰會來？",
              segments: [
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "が" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "失礼ですが、どなたですか？",
              translation: "不好意思，請問您是哪位？",
              segments: [
                {
                  text: "失礼",
                  furigana: "しつれい",
                  meaning: "失禮",
                  tail: "",
                },
                { text: "ですが", meaning: "是...但是", tail: "、" },
                { text: "どなた", meaning: "哪位", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
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
              pronunciation: ["Naze"],
              specific_note: "正式/書面",
              segments: [{ text: "なぜ", meaning: "為什麼", tail: "" }],
            },
            {
              term_target: "どうして",
              pronunciation: ["Doushite"],
              specific_note: "口語/常用",
              segments: [{ text: "どうして", meaning: "為什麼", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "どうしてですか？",
              translation: "為什麼？",
              segments: [
                { text: "どうして", meaning: "為什麼", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "なぜ来なかったのですか？",
              translation: "為什麼沒有來？",
              segments: [
                { text: "なぜ", meaning: "為什麼", tail: "" },
                { text: "来", furigana: "こ", meaning: "來", tail: "" },
                { text: "なかった", meaning: "沒... (過去否定)", tail: "" },
                { text: "の", meaning: "的(強調)", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "どうして遅れましたか？",
              translation: "為什麼遲到了？",
              segments: [
                { text: "どうして", meaning: "為什麼", tail: "" },
                { text: "遅", furigana: "おく", meaning: "遲到", tail: "" },
                { text: "れました", meaning: "了 (過去敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Dore"],
              specific_note: "三個以上選一個",
              segments: [{ text: "どれ", meaning: "哪一個", tail: "" }],
            },
            {
              term_target: "どっち",
              pronunciation: ["Docchi"],
              specific_note: "二選一(口語)",
              segments: [{ text: "どっち", meaning: "哪邊/哪個", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "どれですか？",
              translation: "是哪一個？",
              segments: [
                { text: "どれ", meaning: "哪一個", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "どれが好きですか？",
              translation: "你喜歡哪一個？",
              segments: [
                { text: "どれ", meaning: "哪一個", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "あなたの傘はどれですか？",
              translation: "你的傘是哪一把？",
              segments: [
                { text: "あなた", meaning: "你", tail: "の" },
                { text: "傘", furigana: "かさ", meaning: "傘", tail: "は" },
                { text: "どれ", meaning: "哪一個", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
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
              pronunciation: ["Ikura"],
              specific_note: "金額",
              segments: [{ text: "いくら", meaning: "多少錢", tail: "" }],
            },
            {
              term_target: "いくつ",
              pronunciation: ["Ikutsu"],
              specific_note: "個數/年齡",
              segments: [{ text: "いくつ", meaning: "多少個/幾歲", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "これはいくらですか？",
              translation: "這個多少錢？",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "椅子はいくつありますか？",
              translation: "有多少張椅子？",
              segments: [
                { text: "椅子", furigana: "いす", meaning: "椅子", tail: "は" },
                { text: "いくつ", meaning: "多少個", tail: "" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "お子さんはおいくつですか？",
              translation: "您的孩子幾歲了？",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "子", furigana: "こ", meaning: "孩子", tail: "さん" },
                { text: "は", tail: "" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "いくつ", meaning: "幾歲", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
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
              pronunciation: ["Dono kurai"],
              specific_note: "",
              segments: [
                { text: "どのくらい", meaning: "多久/多少", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "どのくらいかかりますか？",
              translation: "要花多久時間？",
              segments: [
                { text: "どのくらい", meaning: "多久", tail: "" },
                { text: "かかり", meaning: "花費", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "どのくらい待ちましたか？",
              translation: "等了多久？",
              segments: [
                { text: "どのくらい", meaning: "多久", tail: "" },
                { text: "待", furigana: "ま", meaning: "等", tail: "" },
                { text: "ちました", meaning: "了 (過去敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "距離はどのくらいですか？",
              translation: "距離大約多遠？",
              segments: [
                {
                  text: "距離",
                  furigana: "きょり",
                  meaning: "距離",
                  tail: "は",
                },
                { text: "どのくらい", meaning: "多少", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
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
              pronunciation: ["Nanji"],
              specific_note: "",
              segments: [
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今、何時ですか？",
              translation: "現在幾點？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "何時に会いますか？",
              translation: "幾點見面？",
              segments: [
                {
                  text: "何時",
                  furigana: "なんじ",
                  meaning: "幾點",
                  tail: "に",
                },
                { text: "会", furigana: "あ", meaning: "見", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "何時に始まりますか？",
              translation: "幾點開始？",
              segments: [
                {
                  text: "何時",
                  furigana: "なんじ",
                  meaning: "幾點",
                  tail: "に",
                },
                { text: "始", furigana: "はじ", meaning: "開始", tail: "" },
                { text: "まります", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Nansai"],
              specific_note: "一般",
              segments: [
                {
                  text: "何歳",
                  furigana: "なんさい",
                  meaning: "幾歲",
                  tail: "",
                },
              ],
            },
            {
              term_target: "おいくつ",
              pronunciation: ["Oikutsu"],
              specific_note: "禮貌",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "いくつ", meaning: "幾歲", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "何歳ですか？",
              translation: "你幾歲？",
              segments: [
                {
                  text: "何歳",
                  furigana: "なんさい",
                  meaning: "幾歲",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "彼は何歳ですか？",
              translation: "他幾歲？",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                {
                  text: "何歳",
                  furigana: "なんさい",
                  meaning: "幾歲",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "失礼ですが、おいくつですか？",
              translation: "冒昧請問，您貴庚？(禮貌)",
              segments: [
                {
                  text: "失礼",
                  furigana: "しつれい",
                  meaning: "失禮",
                  tail: "",
                },
                { text: "ですが", meaning: "是...但是", tail: "、" },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "いくつ", meaning: "幾歲", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
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
              pronunciation: ["Ima"],
              specific_note: "",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今、行きます。",
              translation: "我現在過去。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "今は忙しいです。",
              translation: "現在很忙。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "は" },
                { text: "忙", furigana: "いそが", meaning: "忙", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "今、何時ですか？",
              translation: "現在幾點？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
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
              pronunciation: ["Kyou"],
              specific_note: "",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今日は暑いです。",
              translation: "今天很熱。",
              segments: [
                {
                  text: "今日",
                  furigana: "きょう",
                  meaning: "今天",
                  tail: "は",
                },
                { text: "暑", furigana: "あつ", meaning: "熱", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "今日、暇ですか？",
              translation: "你今天有空嗎？",
              segments: [
                {
                  text: "今日",
                  furigana: "きょう",
                  meaning: "今天",
                  tail: "、",
                },
                { text: "暇", furigana: "ひま", meaning: "空閒", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "今日は日曜日です。",
              translation: "今天是星期天。",
              segments: [
                {
                  text: "今日",
                  furigana: "きょう",
                  meaning: "今天",
                  tail: "は",
                },
                {
                  text: "日曜日",
                  furigana: "にちようび",
                  meaning: "星期日",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Ashita"],
              specific_note: "",
              segments: [
                { text: "明日", furigana: "あした", meaning: "明天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "また明日。",
              translation: "明天見。",
              segments: [
                { text: "また", meaning: "再/下次", tail: "" },
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "明日は雨です。",
              translation: "明天會下雨。",
              segments: [
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "は",
                },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "明日、映画を見ます。",
              translation: "明天要看電影。",
              segments: [
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "、",
                },
                {
                  text: "映画",
                  furigana: "えいが",
                  meaning: "電影",
                  tail: "を",
                },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Kinou"],
              specific_note: "",
              segments: [
                { text: "昨日", furigana: "きのう", meaning: "昨天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "昨日は楽しかったです。",
              translation: "昨天很開心。",
              segments: [
                {
                  text: "昨日",
                  furigana: "きのう",
                  meaning: "昨天",
                  tail: "は",
                },
                { text: "楽", furigana: "たの", meaning: "快樂", tail: "し" },
                { text: "かった", meaning: "了 (過去式)", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "昨日の夜。",
              translation: "昨天晚上。",
              segments: [
                {
                  text: "昨日",
                  furigana: "きのう",
                  meaning: "昨天",
                  tail: "の",
                },
                { text: "夜", furigana: "よる", meaning: "晚上", tail: "。" },
              ],
            },
            {
              sentence: "昨日、何をしましたか？",
              translation: "你昨天做了什麼？",
              segments: [
                {
                  text: "昨日",
                  furigana: "きのう",
                  meaning: "昨天",
                  tail: "、",
                },
                { text: "何", furigana: "なに", meaning: "什麼", tail: "を" },
                { text: "し", meaning: "做", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Koko"],
              specific_note: "",
              segments: [{ text: "ここ", meaning: "這裡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ここに来てください。",
              translation: "請來這裡。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "に" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "て", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "ここはどこですか？",
              translation: "這裡是哪裡？",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "は" },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "ここに置いてください。",
              translation: "請放在這裡。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "に" },
                { text: "置", furigana: "お", meaning: "放", tail: "" },
                { text: "いて", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["Soko"],
              specific_note: "對方那",
              segments: [{ text: "そこ", meaning: "那裡", tail: "" }],
            },
            {
              term_target: "あそこ",
              pronunciation: ["Asoko"],
              specific_note: "遠處",
              segments: [{ text: "あそこ", meaning: "那裡 (遠)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あそこに行きます。",
              translation: "去那裡 (遠處)。",
              segments: [
                { text: "あそこ", meaning: "那裡 (遠)", tail: "に" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "そこに座ってください。",
              translation: "請坐在那裡 (對方附近)。",
              segments: [
                { text: "そこ", meaning: "那裡", tail: "に" },
                { text: "座", furigana: "すわ", meaning: "坐", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "あそこにコンビニがあります。",
              translation: "那邊有一家便利商店。",
              segments: [
                { text: "あそこ", meaning: "那裡", tail: "に" },
                { text: "コンビニ", meaning: "便利商店", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
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
              pronunciation: ["Hi"],
              specific_note: "日子",
              segments: [
                { text: "日", furigana: "ひ", meaning: "日子", tail: "" },
              ],
            },
            {
              term_target: "一日",
              pronunciation: ["Ichinichi"],
              specific_note: "一天",
              segments: [
                {
                  text: "一日",
                  furigana: "いちにち",
                  meaning: "一天",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "ある日。",
              translation: "某一天。",
              segments: [
                { text: "ある", meaning: "某", tail: "" },
                { text: "日", furigana: "ひ", meaning: "天/日", tail: "。" },
              ],
            },
            {
              sentence: "いい日ですね。",
              translation: "真是美好的一天。",
              segments: [
                { text: "いい", meaning: "好", tail: "" },
                { text: "日", furigana: "ひ", meaning: "日子", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "ね", meaning: "呢 (感嘆)", tail: "。" },
              ],
            },
            {
              sentence: "一日中忙しい。",
              translation: "忙了一整天。",
              segments: [
                {
                  text: "一日",
                  furigana: "いちにち",
                  meaning: "一天",
                  tail: "",
                },
                { text: "中", furigana: "じゅう", meaning: "整/全", tail: "" },
                { text: "忙", furigana: "いそが", meaning: "忙", tail: "しい" },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Toshi"],
              specific_note: "年歲/年份",
              segments: [
                { text: "年", furigana: "とし", meaning: "年", tail: "" },
              ],
            },
            {
              term_target: "一年",
              pronunciation: ["Ichinen"],
              specific_note: "一年",
              segments: [
                {
                  text: "一年",
                  furigana: "いちねん",
                  meaning: "一年",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "今年。",
              translation: "今年 (Kotoshi)。",
              segments: [
                {
                  text: "今年",
                  furigana: "ことし",
                  meaning: "今年",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "来年。",
              translation: "明年 (Rainen)。",
              segments: [
                {
                  text: "来年",
                  furigana: "らいねん",
                  meaning: "明年",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "年に一回。",
              translation: "一年一次。",
              segments: [
                { text: "年", furigana: "ねん", meaning: "年", tail: "に" },
                {
                  text: "一回",
                  furigana: "いっかい",
                  meaning: "一次",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Tsuki"],
              specific_note: "",
              segments: [
                { text: "月", furigana: "つき", meaning: "月", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今月。",
              translation: "這個月 (Kongetsu)。",
              segments: [
                {
                  text: "今月",
                  furigana: "こんげつ",
                  meaning: "這個月",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "先月。",
              translation: "上個月 (Sengetsu)。",
              segments: [
                {
                  text: "先月",
                  furigana: "せんげつ",
                  meaning: "上個月",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "月が出ている。",
              translation: "月亮出來了。",
              segments: [
                { text: "月", furigana: "つき", meaning: "月亮", tail: "が" },
                { text: "出", furigana: "で", meaning: "出", tail: "" },
                { text: "て", meaning: "(連接)", tail: "" },
                { text: "いる", meaning: "在/了", tail: "。" },
              ],
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
              pronunciation: ["Shuu"],
              specific_note: "",
              segments: [
                { text: "週", furigana: "しゅう", meaning: "週", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "来週。",
              translation: "下週 (Raishuu)。",
              segments: [
                {
                  text: "来週",
                  furigana: "らいしゅう",
                  meaning: "下週",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "今週の土曜日。",
              translation: "這週六 (Konshuu)。",
              segments: [
                {
                  text: "今週",
                  furigana: "こんしゅう",
                  meaning: "這週",
                  tail: "の",
                },
                {
                  text: "土曜日",
                  furigana: "どようび",
                  meaning: "星期六",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "週に三回。",
              translation: "一週三次。",
              segments: [
                { text: "週", furigana: "しゅう", meaning: "週", tail: "に" },
                {
                  text: "三回",
                  furigana: "さんかい",
                  meaning: "三次",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Asa"],
              specific_note: "",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "朝ごはん。",
              translation: "早餐。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "。" },
              ],
            },
            {
              sentence: "毎朝コーヒーを飲みます。",
              translation: "每天早上喝咖啡。",
              segments: [
                {
                  text: "毎朝",
                  furigana: "まいあさ",
                  meaning: "每天早上",
                  tail: "",
                },
                { text: "コーヒー", meaning: "咖啡", tail: "を" },
                { text: "飲", furigana: "の", meaning: "喝", tail: "" },
                { text: "みます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "朝早く。",
              translation: "一早。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: "" },
                { text: "早", furigana: "はや", meaning: "早", tail: "く" },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Gogo"],
              specific_note: "",
              segments: [
                { text: "午後", furigana: "ごご", meaning: "下午", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "午後2時。",
              translation: "下午2點。",
              segments: [
                { text: "午後", furigana: "ごご", meaning: "下午", tail: "" },
                { text: "2時", furigana: "にじ", meaning: "2點", tail: "。" },
              ],
            },
            {
              sentence: "午後の紅茶。",
              translation: "午後紅茶。",
              segments: [
                { text: "午後", furigana: "ごご", meaning: "午後", tail: "の" },
                {
                  text: "紅茶",
                  furigana: "こうちゃ",
                  meaning: "紅茶",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "午後から雨です。",
              translation: "下午開始會下雨。",
              segments: [
                {
                  text: "午後",
                  furigana: "ごご",
                  meaning: "下午",
                  tail: "から",
                },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Yoru"],
              specific_note: "",
              segments: [
                { text: "夜", furigana: "よる", meaning: "晚上", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "夜ごはん。",
              translation: "晚餐。",
              segments: [
                { text: "夜", furigana: "よる", meaning: "晚", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "。" },
              ],
            },
            {
              sentence: "夜遅く。",
              translation: "深夜。",
              segments: [
                { text: "夜", furigana: "よる", meaning: "晚", tail: "" },
                { text: "遅", furigana: "おそ", meaning: "遲/晚", tail: "く" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "今日の夜、空いてますか？",
              translation: "今天晚上有空嗎？",
              segments: [
                {
                  text: "今日",
                  furigana: "きょう",
                  meaning: "今天",
                  tail: "の",
                },
                { text: "夜", furigana: "よる", meaning: "晚上", tail: "、" },
                { text: "空", furigana: "あ", meaning: "空", tail: "" },
                { text: "いて", meaning: "(連接)", tail: "" },
                { text: "ます", meaning: "有/在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Shougo"],
              specific_note: "12:00整",
              segments: [
                {
                  text: "正午",
                  furigana: "しょうご",
                  meaning: "正午",
                  tail: "",
                },
              ],
            },
            {
              term_target: "お昼",
              pronunciation: ["Ohiru"],
              specific_note: "午餐時間",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "昼", furigana: "ひる", meaning: "中午", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お昼です。",
              translation: "中午了(也是午餐時間)。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "昼", furigana: "ひる", meaning: "中午", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お昼を食べましょう。",
              translation: "吃午餐吧。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "昼", furigana: "ひる", meaning: "中午", tail: "を" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べましょう", meaning: "吧 (勸誘敬語)", tail: "。" },
              ],
            },
            {
              sentence: "正午に出発します。",
              translation: "正午出發。",
              segments: [
                {
                  text: "正午",
                  furigana: "しょうご",
                  meaning: "正午",
                  tail: "に",
                },
                {
                  text: "出発",
                  furigana: "しゅっぱつ",
                  meaning: "出發",
                  tail: "",
                },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Mae"],
              specific_note: "",
              segments: [
                { text: "前", furigana: "まえ", meaning: "前", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "駅の前。",
              translation: "車站前。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "の" },
                { text: "前", furigana: "まえ", meaning: "前面", tail: "。" },
              ],
            },
            {
              sentence: "前に進みます。",
              translation: "往前進。",
              segments: [
                { text: "前", furigana: "まえ", meaning: "前", tail: "に" },
                { text: "進", furigana: "すす", meaning: "前進", tail: "" },
                { text: "みます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "この前。",
              translation: "之前(不久前)。",
              segments: [
                { text: "この", meaning: "這個", tail: "" },
                { text: "前", furigana: "まえ", meaning: "前", tail: "。" },
              ],
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
              pronunciation: ["Ushiro"],
              specific_note: "",
              segments: [
                { text: "後", furigana: "うし", meaning: "後", tail: "ろ" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ドアの後ろ。",
              translation: "門後。",
              segments: [
                { text: "ドア", meaning: "門", tail: "の" },
                { text: "後", furigana: "うし", meaning: "後", tail: "ろ" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "後ろを見てください。",
              translation: "請看後面。",
              segments: [
                { text: "後", furigana: "うし", meaning: "後", tail: "ろ" },
                { text: "を", meaning: "受詞標記", tail: "" },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "て", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "車の後ろ。",
              translation: "車子後面。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "の" },
                { text: "後", furigana: "うし", meaning: "後", tail: "ろ" },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Hidari"],
              specific_note: "",
              segments: [
                { text: "左", furigana: "ひだり", meaning: "左", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "左に曲がります。",
              translation: "左轉。",
              segments: [
                { text: "左", furigana: "ひだり", meaning: "左", tail: "に" },
                { text: "曲", furigana: "ま", meaning: "轉", tail: "" },
                { text: "がります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "左手。",
              translation: "左手。",
              segments: [
                {
                  text: "左手",
                  furigana: "ひだりて",
                  meaning: "左手",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "一番左。",
              translation: "最左邊。",
              segments: [
                { text: "一番", furigana: "いちばん", meaning: "最", tail: "" },
                { text: "左", furigana: "ひだり", meaning: "左", tail: "。" },
              ],
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
              pronunciation: ["Migi"],
              specific_note: "",
              segments: [
                { text: "右", furigana: "みぎ", meaning: "右", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "右を見てください。",
              translation: "請看右邊。",
              segments: [
                { text: "右", furigana: "みぎ", meaning: "右", tail: "を" },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "て", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "右側。",
              translation: "右側。",
              segments: [
                { text: "右", furigana: "みぎ", meaning: "右", tail: "" },
                { text: "側", furigana: "がわ", meaning: "側", tail: "。" },
              ],
            },
            {
              sentence: "右折します。",
              translation: "右轉 (Usetsu, 較正式)。",
              segments: [
                { text: "右折", furigana: "うせつ", meaning: "右轉", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Yoko"],
              specific_note: "旁邊(水平)",
              segments: [
                { text: "横", furigana: "よこ", meaning: "旁邊", tail: "" },
              ],
            },
            {
              term_target: "隣",
              pronunciation: ["Tonari"],
              specific_note: "隔壁(同類)",
              segments: [
                { text: "隣", furigana: "となり", meaning: "隔壁", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私の隣。",
              translation: "我隔壁(的人/物)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                { text: "隣", furigana: "となり", meaning: "隔壁", tail: "。" },
              ],
            },
            {
              sentence: "横に座ります。",
              translation: "坐在旁邊。",
              segments: [
                { text: "横", furigana: "よこ", meaning: "旁邊", tail: "に" },
                { text: "座", furigana: "すわ", meaning: "坐", tail: "" },
                { text: "ります", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "隣の部屋。",
              translation: "隔壁房間。",
              segments: [
                { text: "隣", furigana: "となり", meaning: "隔壁", tail: "の" },
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "。" },
              ],
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
              pronunciation: ["Mukai"],
              specific_note: "",
              segments: [
                { text: "向", furigana: "む", meaning: "對面", tail: "かい" },
              ],
            },
          ],
          examples: [
            {
              sentence: "駅の向かい。",
              translation: "車站對面。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "の" },
                { text: "向", furigana: "む", meaning: "對面", tail: "かい" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "向かいの家。",
              translation: "對面的房子。",
              segments: [
                { text: "向", furigana: "む", meaning: "對面", tail: "かい" },
                { text: "の", meaning: "的", tail: "" },
                { text: "家", furigana: "いえ", meaning: "房子", tail: "。" },
              ],
            },
            {
              sentence: "斜め向かい。",
              translation: "斜對面。",
              segments: [
                { text: "斜", furigana: "なな", meaning: "斜", tail: "め" },
                { text: "向", furigana: "む", meaning: "對面", tail: "かい" },
                { text: "。", tail: "" },
              ],
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
              pronunciation: ["Haru"],
              specific_note: "",
              segments: [
                { text: "春", furigana: "はる", meaning: "春天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "春が来た。",
              translation: "春天來了。",
              segments: [
                { text: "春", furigana: "はる", meaning: "春天", tail: "が" },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "た", meaning: "了 (過去式)", tail: "。" },
              ],
            },
            {
              sentence: "春休み。",
              translation: "春假。",
              segments: [
                {
                  text: "春休",
                  furigana: "はるやす",
                  meaning: "春假",
                  tail: "み",
                },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "暖かい春。",
              translation: "溫暖的春天。",
              segments: [
                {
                  text: "暖",
                  furigana: "あたた",
                  meaning: "溫暖",
                  tail: "かい",
                },
                { text: "春", furigana: "はる", meaning: "春天", tail: "。" },
              ],
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
              pronunciation: ["Natsu"],
              specific_note: "",
              segments: [
                { text: "夏", furigana: "なつ", meaning: "夏天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "暑い夏。",
              translation: "炎熱的夏天。",
              segments: [
                { text: "暑", furigana: "あつ", meaning: "熱", tail: "い" },
                { text: "夏", furigana: "なつ", meaning: "夏天", tail: "。" },
              ],
            },
            {
              sentence: "夏休み。",
              translation: "暑假。",
              segments: [
                {
                  text: "夏休",
                  furigana: "なつやす",
                  meaning: "暑假",
                  tail: "み",
                },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "日本の夏。",
              translation: "日本的夏天。",
              segments: [
                {
                  text: "日本",
                  furigana: "にほん",
                  meaning: "日本",
                  tail: "の",
                },
                { text: "夏", furigana: "なつ", meaning: "夏天", tail: "。" },
              ],
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
              pronunciation: ["Aki"],
              specific_note: "",
              segments: [
                { text: "秋", furigana: "あき", meaning: "秋天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "秋が好き。",
              translation: "喜歡秋天。",
              segments: [
                { text: "秋", furigana: "あき", meaning: "秋天", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "秋の紅葉。",
              translation: "秋天的紅葉。",
              segments: [
                { text: "秋", furigana: "あき", meaning: "秋天", tail: "の" },
                {
                  text: "紅葉",
                  furigana: "こうよう",
                  meaning: "紅葉",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "食欲の秋。",
              translation: "食慾之秋。",
              segments: [
                {
                  text: "食欲",
                  furigana: "しょくよく",
                  meaning: "食慾",
                  tail: "の",
                },
                { text: "秋", furigana: "あき", meaning: "秋天", tail: "。" },
              ],
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
              pronunciation: ["Fuyu"],
              specific_note: "",
              segments: [
                { text: "冬", furigana: "ふゆ", meaning: "冬天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "冬は寒い。",
              translation: "冬天很冷。",
              segments: [
                { text: "冬", furigana: "ふゆ", meaning: "冬天", tail: "は" },
                { text: "寒", furigana: "さむ", meaning: "冷", tail: "い" },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "冬休み。",
              translation: "寒假。",
              segments: [
                {
                  text: "冬休",
                  furigana: "ふゆやす",
                  meaning: "寒假",
                  tail: "み",
                },
                { text: "。", tail: "" },
              ],
            },
            {
              sentence: "冬の北海道。",
              translation: "冬天的北海道。",
              segments: [
                { text: "冬", furigana: "ふゆ", meaning: "冬天", tail: "の" },
                {
                  text: "北海道",
                  furigana: "ほっかいどう",
                  meaning: "北海道",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "季節。",
          image_file: "winter.png",
        },
      ],
    },
    {
      id: "conjunctions",
      name: "連接詞",
      items: [
        {
          id: "conj-01",
          term_zh: "或者",
          related_terms: [
            {
              term_target: "または",
              pronunciation: ["Matawa"],
              specific_note: "正式/書面",
              segments: [{ text: "または", meaning: "或者", tail: "" }],
            },
            {
              term_target: "それとも",
              pronunciation: ["Soretomo"],
              specific_note: "用於疑問句",
              segments: [{ text: "それとも", meaning: "還是...", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "お茶ですか、それともコーヒーですか？",
              translation: "茶還是咖啡？",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "茶", furigana: "ちゃ", meaning: "茶", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "、" },
                { text: "それとも", meaning: "還是", tail: "" },
                { text: "コーヒー", meaning: "咖啡", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "これがいいですか、それともあれですか？",
              translation: "你想要這個還是那個？",
              segments: [
                { text: "これ", meaning: "這個", tail: "が" },
                { text: "いい", meaning: "好", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "、" },
                { text: "それとも", meaning: "還是", tail: "" },
                { text: "あれ", meaning: "那個", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "彼はアメリカ人ですか、それともイギリス人ですか？",
              translation: "他是美國人還是英國人？",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "アメリカ", meaning: "美國", tail: "" },
                { text: "人", furigana: "じん", meaning: "人", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "、" },
                { text: "それとも", meaning: "還是", tail: "" },
                { text: "イギリス", meaning: "英國", tail: "" },
                { text: "人", furigana: "じん", meaning: "人", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
          ],
          usage_note: "二選一。口語常用「〜か〜」。",
          image_file: "or.png",
        },
        {
          id: "conj-02",
          term_zh: "但是",
          related_terms: [
            {
              term_target: "でも",
              pronunciation: ["Demo"],
              specific_note: "口語常用",
              segments: [{ text: "でも", meaning: "但是", tail: "" }],
            },
            {
              term_target: "しかし",
              pronunciation: ["Shikashi"],
              specific_note: "較正式",
              segments: [{ text: "しかし", meaning: "可是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "好きですが、高いです。",
              translation: "我喜歡它，但是它很貴。",
              segments: [
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "が", meaning: "但是 (轉折)", tail: "、" },
                { text: "高", furigana: "たか", meaning: "貴", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "行きたいですが、行けません。",
              translation: "我想去，但是我不能去。",
              segments: [
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きたい", meaning: "想做", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "が", meaning: "但是 (轉折)", tail: "、" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "けません", meaning: "不能 (可能/否定)", tail: "。" },
              ],
            },
            {
              sentence: "彼は小さいですが、強いです。",
              translation: "他個子小但很強壯。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "小", furigana: "ちい", meaning: "小", tail: "さい" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
                { text: "が", meaning: "但是 (轉折)", tail: "、" },
                { text: "強", furigana: "つよ", meaning: "強", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
          ],
          usage_note: "語氣轉折。句中常用助詞「が」。",
          image_file: "but.png",
        },
        {
          id: "conj-03",
          term_zh: "所以",
          related_terms: [
            {
              term_target: "だから",
              pronunciation: ["Dakara"],
              specific_note: "口語",
              segments: [{ text: "だから", meaning: "所以", tail: "" }],
            },
            {
              term_target: "ので",
              pronunciation: ["Node"],
              specific_note: "接續詞",
              segments: [{ text: "ので", meaning: "因為/所以", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "お腹が空いたので、食べました。",
              translation: "我餓了，所以我吃了。",
              segments: [
                { text: "お腹", furigana: "なか", meaning: "肚子", tail: "が" },
                { text: "空", furigana: "す", meaning: "空", tail: "いた" },
                { text: "ので", meaning: "因為/所以", tail: "、" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "雨が降っているので、傘を持って行ってください。",
              translation: "正在下雨，所以帶把傘吧。",
              segments: [
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "が" },
                { text: "降", furigana: "ふ", meaning: "下", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "いる", meaning: "正在", tail: "" },
                { text: "ので", meaning: "所以", tail: "、" },
                { text: "傘", furigana: "かさ", meaning: "傘", tail: "を" },
                { text: "持", furigana: "も", meaning: "帶/拿", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "疲れていたので、寝ました。",
              translation: "我累了，所以我去睡覺。",
              segments: [
                { text: "疲", furigana: "つか", meaning: "累", tail: "" },
                { text: "れていた", meaning: "了 (過去狀態)", tail: "" },
                { text: "ので", meaning: "所以", tail: "、" },
                { text: "寝", furigana: "ね", meaning: "睡", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
          ],
          usage_note: "表示結果。",
          image_file: "so.png",
        },
        {
          id: "conj-04",
          term_zh: "以及／和",
          related_terms: [
            {
              term_target: "と",
              pronunciation: ["To"],
              specific_note: "連接名詞",
              segments: [{ text: "と", meaning: "和", tail: "" }],
            },
            {
              term_target: "そして",
              pronunciation: ["Soshite"],
              specific_note: "連接句子",
              segments: [{ text: "そして", meaning: "然後/以及", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あなたと私。",
              translation: "你和我。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "と", meaning: "和", tail: "" },
                { text: "私", furigana: "わたし", meaning: "我", tail: "。" },
              ],
            },
            {
              sentence: "黒と白。",
              translation: "黑色和白色。",
              segments: [
                { text: "黒", furigana: "くろ", meaning: "黑", tail: "" },
                { text: "と", meaning: "和", tail: "" },
                { text: "白", furigana: "しろ", meaning: "白", tail: "。" },
              ],
            },
            {
              sentence: "彼女は頭が良くて、美しいです。",
              translation: "她既聰明又漂亮 (用形容詞te形連接)。",
              segments: [
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她",
                  tail: "は",
                },
                { text: "頭", furigana: "あたま", meaning: "頭腦", tail: "が" },
                { text: "良", furigana: "よ", meaning: "好", tail: "" },
                { text: "くて", meaning: "且 (形容詞連接)", tail: "、" },
                {
                  text: "美",
                  furigana: "うつく",
                  meaning: "美麗",
                  tail: "しい",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
          ],
          usage_note: "連接兩者。",
          image_file: "and.png",
        },
        {
          id: "conj-05",
          term_zh: "因為",
          related_terms: [
            {
              term_target: "から",
              pronunciation: ["Kara"],
              specific_note: "主觀原因/口語",
              segments: [{ text: "から", meaning: "因為", tail: "" }],
            },
            {
              term_target: "なぜなら",
              pronunciation: ["Nazenara"],
              specific_note: "解釋原因/書面",
              segments: [{ text: "なぜなら", meaning: "因為...", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "お腹が空いたから、食べます。",
              translation: "我吃東西是因為我餓了。",
              segments: [
                { text: "お腹", furigana: "なか", meaning: "肚子", tail: "が" },
                { text: "空", furigana: "す", meaning: "空", tail: "いた" },
                { text: "から", meaning: "因為", tail: "、" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "忙しいから、行けません。",
              translation: "我不能去，因為我很忙。",
              segments: [
                { text: "忙", furigana: "いそが", meaning: "忙", tail: "しい" },
                { text: "から", meaning: "因為", tail: "、" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "けません", meaning: "不能 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "彼女は嬉しかったから、笑いました。",
              translation: "她笑了，因為她很開心。",
              segments: [
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她",
                  tail: "は",
                },
                { text: "嬉", furigana: "うれ", meaning: "高興", tail: "し" },
                { text: "かった", meaning: "了 (過去式)", tail: "" },
                { text: "から", meaning: "因為", tail: "、" },
                { text: "笑", furigana: "わら", meaning: "笑", tail: "" },
                { text: "いました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
          ],
          usage_note: "表示原因。日文中原因子句在前（加上から），結果在後。",
          image_file: "because.png",
        },
      ],
    },
    {
      id: "prepositions",
      name: "介系詞",
      items: [
        {
          id: "prep-01",
          term_zh: "和...一起",
          related_terms: [
            {
              term_target: "と一緒に",
              pronunciation: ["To issho ni"],
              specific_note: "伴隨",
              segments: [
                { text: "と", meaning: "和", tail: "" },
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "に",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "私と一緒に来てください。",
              translation: "跟我來。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "と" },
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "に",
                },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "て", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "家族と住んでいます。",
              translation: "我跟家人住。",
              segments: [
                {
                  text: "家族",
                  furigana: "かぞく",
                  meaning: "家人",
                  tail: "と",
                },
                { text: "住", furigana: "す", meaning: "住", tail: "" },
                { text: "んで", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ミルク入りコーヒー。",
              translation: "加牛奶的咖啡 (日文習慣用含入)。",
              segments: [
                { text: "ミルク", meaning: "牛奶", tail: "" },
                { text: "入", furigana: "い", meaning: "含/入", tail: "り" },
                { text: "コーヒー", meaning: "咖啡", tail: "。" },
              ],
            },
          ],
          usage_note: "名詞 + と (to)。",
          image_file: "with.png",
        },
        {
          id: "prep-02",
          term_zh: "從...",
          related_terms: [
            {
              term_target: "から",
              pronunciation: ["Kara"],
              specific_note: "來源",
              segments: [{ text: "から", meaning: "從/來自", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "台湾から来ました。",
              translation: "我來自台灣。",
              segments: [
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "から",
                },
                { text: "来", furigana: "き", meaning: "來", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お店は9時から5時までです。",
              translation: "商店從9點開到5點。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "店", furigana: "みせ", meaning: "店", tail: "は" },
                { text: "9時", furigana: "くじ", meaning: "9點", tail: "から" },
                { text: "5時", furigana: "ごじ", meaning: "5點", tail: "まで" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ここから遠いです。",
              translation: "離這裡很遠。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "から" },
                { text: "遠", furigana: "とお", meaning: "遠", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
          ],
          usage_note: "起點/來源。",
          image_file: "from.png",
        },
        {
          id: "prep-03",
          term_zh: "為了...",
          related_terms: [
            {
              term_target: "のために",
              pronunciation: ["No tame ni"],
              specific_note: "目的",
              segments: [
                { text: "の", meaning: "的", tail: "" },
                { text: "ため", meaning: "為了", tail: "に" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これはあなたのためです。",
              translation: "這是給你的 (為了你)。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "あなた", meaning: "你", tail: "の" },
                { text: "ため", meaning: "為了", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "手伝ってくれてありがとう。",
              translation: "謝謝你的幫忙 (日文結構不同，意譯)。",
              segments: [
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "くれて", meaning: "給我(恩惠)", tail: "" },
                { text: "ありがとう", meaning: "謝謝", tail: "。" },
              ],
            },
            {
              sentence: "鍵を探しています。",
              translation: "我在找我的鑰匙 (search for = sagasu)。",
              segments: [
                { text: "鍵", furigana: "かぎ", meaning: "鑰匙", tail: "を" },
                { text: "探", furigana: "さが", meaning: "找", tail: "" },
                { text: "して", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
            },
          ],
          usage_note: "名詞 + のために。",
          image_file: "for.png",
        },
        {
          id: "prep-04",
          term_zh: "...的",
          related_terms: [
            {
              term_target: "の",
              pronunciation: ["No"],
              specific_note: "所有格",
              segments: [{ text: "の", meaning: "的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "一杯のお茶。",
              translation: "一杯茶。",
              segments: [
                {
                  text: "一杯",
                  furigana: "いっぱい",
                  meaning: "一杯",
                  tail: "の",
                },
                { text: "お", meaning: "(美化語)", tail: "" },
                { text: "茶", furigana: "ちゃ", meaning: "茶", tail: "。" },
              ],
            },
            {
              sentence: "私の友達の一人。",
              translation: "我的一個朋友。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "の",
                },
                {
                  text: "一人",
                  furigana: "ひとり",
                  meaning: "一人",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "車の色。",
              translation: "車子的顏色。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "の" },
                { text: "色", furigana: "いろ", meaning: "顏色", tail: "。" },
              ],
            },
          ],
          usage_note: "名詞 + の + 名詞。",
          image_file: "of.png",
        },
        {
          id: "prep-05",
          term_zh: "在... (場所)",
          related_terms: [
            {
              term_target: "に",
              pronunciation: ["Ni"],
              specific_note: "存在位置",
              segments: [{ text: "に", meaning: "在(存在)", tail: "" }],
            },
            {
              term_target: "で",
              pronunciation: ["De"],
              specific_note: "動作場所",
              segments: [{ text: "で", meaning: "在(動作)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "私は家にいます。",
              translation: "我在家 (存在)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "家", furigana: "いえ", meaning: "家", tail: "に" },
                { text: "い", meaning: "在", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "彼女は部屋にいます。",
              translation: "她在房間裡。",
              segments: [
                {
                  text: "彼女",
                  furigana: "かのじょ",
                  meaning: "她",
                  tail: "は",
                },
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "に" },
                { text: "い", meaning: "在", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "5時に会いましょう。",
              translation: "5點見 (at也用於時間)。",
              segments: [
                { text: "5時", furigana: "ごじ", meaning: "5點", tail: "に" },
                { text: "会", furigana: "あ", meaning: "見", tail: "" },
                { text: "いましょう", meaning: "吧 (勸誘敬語)", tail: "。" },
              ],
            },
          ],
          usage_note: "Ni 指靜態存在，De 指動態發生地。",
          image_file: "at_in.png",
        },
        {
          id: "prep-06",
          term_zh: "往... (去)",
          related_terms: [
            {
              term_target: "へ",
              pronunciation: ["E"],
              specific_note: "方向",
              segments: [{ text: "へ", meaning: "往/向", tail: "" }],
            },
            {
              term_target: "に",
              pronunciation: ["Ni"],
              specific_note: "目的地",
              segments: [{ text: "に", meaning: "往/向", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "学校へ行きます。",
              translation: "去學校。",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "お誕生日おめでとう。",
              translation: "祝你生日快樂 (Happy Birthday to you)。",
              segments: [
                { text: "お", meaning: "(美化語)", tail: "" },
                {
                  text: "誕生日",
                  furigana: "たんじょうび",
                  meaning: "生日",
                  tail: "",
                },
                { text: "おめでとう", meaning: "恭喜", tail: "。" },
              ],
            },
            {
              sentence: "私にください。",
              translation: "把它給我 (Give to me)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "に" },
                { text: "ください", meaning: "請給", tail: "。" },
              ],
            },
          ],
          usage_note: "移動的方向或對象。",
          image_file: "to.png",
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
              pronunciation: ["Zero"],
              specific_note: "外來語",
              segments: [{ text: "ゼロ", meaning: "零", tail: "" }],
            },
            {
              term_target: "零",
              pronunciation: ["Rei"],
              specific_note: "漢字讀音",
              segments: [
                { text: "零", furigana: "れい", meaning: "零", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ゼロです。",
              translation: "是零。",
              segments: [
                { text: "ゼロ", meaning: "零", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "零度。",
              translation: "零度 (Reido)。",
              segments: [
                {
                  text: "零度",
                  furigana: "れいど",
                  meaning: "零度",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ゼロから始める。",
              translation: "從零開始。",
              segments: [
                { text: "ゼロ", meaning: "零", tail: "から" },
                { text: "始", furigana: "はじ", meaning: "開", tail: "" },
                { text: "める", meaning: "始 (動詞)", tail: "。" },
              ],
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
              pronunciation: ["Ichi"],
              specific_note: "數字",
              segments: [
                { text: "一", furigana: "いち", meaning: "一", tail: "" },
              ],
            },
            {
              term_target: "一つ",
              pronunciation: ["Hitotsu"],
              specific_note: "個數",
              segments: [
                { text: "一つ", furigana: "ひとつ", meaning: "一個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "一つください。",
              translation: "請給我一個。",
              segments: [
                {
                  text: "一つ",
                  furigana: "ひとつ",
                  meaning: "一個",
                  tail: "を",
                },
                { text: "ください", meaning: "請給", tail: "。" },
              ],
            },
            {
              sentence: "一階。",
              translation: "一樓 (Ikkai)。",
              segments: [
                {
                  text: "一階",
                  furigana: "いっかい",
                  meaning: "一樓",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "一番。",
              translation: "第一名 (Ichiban)。",
              segments: [
                {
                  text: "一番",
                  furigana: "いちばん",
                  meaning: "第一/最",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Ni"],
              specific_note: "數字",
              segments: [
                { text: "二", furigana: "に", meaning: "二", tail: "" },
              ],
            },
            {
              term_target: "二つ",
              pronunciation: ["Futatsu"],
              specific_note: "個數",
              segments: [
                { text: "二つ", furigana: "ふたつ", meaning: "兩個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "二つください。",
              translation: "請給我兩個。",
              segments: [
                {
                  text: "二つ",
                  furigana: "ふたつ",
                  meaning: "兩個",
                  tail: "を",
                },
                { text: "ください", meaning: "請給", tail: "。" },
              ],
            },
            {
              sentence: "二時。",
              translation: "兩點 (Niji)。",
              segments: [
                { text: "二", furigana: "に", meaning: "二", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "二階。",
              translation: "二樓 (Nikai)。",
              segments: [
                {
                  text: "二階",
                  furigana: "にかい",
                  meaning: "二樓",
                  tail: "。",
                },
              ],
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
              pronunciation: ["San"],
              specific_note: "數字",
              segments: [
                { text: "三", furigana: "さん", meaning: "三", tail: "" },
              ],
            },
            {
              term_target: "三つ",
              pronunciation: ["Mittsu"],
              specific_note: "個數",
              segments: [
                { text: "三つ", furigana: "みっつ", meaning: "三個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "三つください。",
              translation: "請給我三個。",
              segments: [
                {
                  text: "三つ",
                  furigana: "みっつ",
                  meaning: "三個",
                  tail: "を",
                },
                { text: "ください", meaning: "請給", tail: "。" },
              ],
            },
            {
              sentence: "三人。",
              translation: "三個人 (Sannin)。",
              segments: [
                { text: "三", furigana: "さん", meaning: "三", tail: "" },
                { text: "人", furigana: "にん", meaning: "人", tail: "。" },
              ],
            },
            {
              sentence: "三月。",
              translation: "三月 (Sangatsu)。",
              segments: [
                { text: "三", furigana: "さん", meaning: "三", tail: "" },
                { text: "月", furigana: "がつ", meaning: "月", tail: "。" },
              ],
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
              pronunciation: ["Yon"],
              specific_note: "常用",
              segments: [
                { text: "四", furigana: "よん", meaning: "四", tail: "" },
              ],
            },
            {
              term_target: "し",
              pronunciation: ["Shi"],
              specific_note: "月份/時間",
              segments: [{ text: "し", meaning: "四", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "四時。",
              translation: "四點 (Yoji)。",
              segments: [
                { text: "四", furigana: "よ", meaning: "四", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "四月。",
              translation: "四月 (Shigatsu)。",
              segments: [
                { text: "四", furigana: "し", meaning: "四", tail: "" },
                { text: "月", furigana: "がつ", meaning: "月", tail: "。" },
              ],
            },
            {
              sentence: "四つあります。",
              translation: "有四個 (Yottsu)。",
              segments: [
                {
                  text: "四つ",
                  furigana: "よっつ",
                  meaning: "四個",
                  tail: "が",
                },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
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
              pronunciation: ["Go"],
              specific_note: "數字",
              segments: [
                { text: "五", furigana: "ご", meaning: "五", tail: "" },
              ],
            },
            {
              term_target: "五つ",
              pronunciation: ["Itsutsu"],
              specific_note: "個數",
              segments: [
                { text: "五つ", furigana: "いつつ", meaning: "五個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "五つください。",
              translation: "請給我五個。",
              segments: [
                {
                  text: "五つ",
                  furigana: "いつつ",
                  meaning: "五個",
                  tail: "を",
                },
                { text: "ください", meaning: "請給", tail: "。" },
              ],
            },
            {
              sentence: "五円。",
              translation: "五圓 (Goen)。",
              segments: [
                { text: "五", furigana: "ご", meaning: "五", tail: "" },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
            {
              sentence: "五時。",
              translation: "五點 (Goji)。",
              segments: [
                { text: "五", furigana: "ご", meaning: "五", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
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
              pronunciation: ["Roku"],
              specific_note: "數字",
              segments: [
                { text: "六", furigana: "ろく", meaning: "六", tail: "" },
              ],
            },
            {
              term_target: "六つ",
              pronunciation: ["Muttsu"],
              specific_note: "個數",
              segments: [
                { text: "六つ", furigana: "むっつ", meaning: "六個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "六つ。",
              translation: "六個。",
              segments: [
                {
                  text: "六つ",
                  furigana: "むっつ",
                  meaning: "六個",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "六時。",
              translation: "六點 (Rokuji)。",
              segments: [
                { text: "六", furigana: "ろく", meaning: "六", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "六百。",
              translation: "六百 (Roppyaku)。",
              segments: [
                {
                  text: "六百",
                  furigana: "ろっぴゃく",
                  meaning: "六百",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Nana"],
              specific_note: "常用",
              segments: [
                { text: "七", furigana: "なな", meaning: "七", tail: "" },
              ],
            },
            {
              term_target: "しち",
              pronunciation: ["Shichi"],
              specific_note: "月份/時間",
              segments: [{ text: "しち", meaning: "七", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "七時。",
              translation: "七點 (Shichiji)。",
              segments: [
                { text: "七", furigana: "しち", meaning: "七", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "七つ。",
              translation: "七個 (Nanatsu)。",
              segments: [
                {
                  text: "七つ",
                  furigana: "ななつ",
                  meaning: "七個",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ラッキーセブン。",
              translation: "幸運七 (Lucky Seven)。",
              segments: [
                { text: "ラッキー", meaning: "幸運", tail: "" },
                { text: "セブン", meaning: "七 (Seven)", tail: "。" },
              ],
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
              pronunciation: ["Hachi"],
              specific_note: "數字",
              segments: [
                { text: "八", furigana: "はち", meaning: "八", tail: "" },
              ],
            },
            {
              term_target: "八つ",
              pronunciation: ["Yattsu"],
              specific_note: "個數",
              segments: [
                { text: "八つ", furigana: "やっつ", meaning: "八個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "八つ。",
              translation: "八個。",
              segments: [
                {
                  text: "八つ",
                  furigana: "やっつ",
                  meaning: "八個",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "八時。",
              translation: "八點 (Hachiji)。",
              segments: [
                { text: "八", furigana: "はち", meaning: "八", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "八百屋。",
              translation: "蔬菜店 (Yaoya)。",
              segments: [
                {
                  text: "八百屋",
                  furigana: "やおや",
                  meaning: "蔬菜店",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Kyuu"],
              specific_note: "常用",
              segments: [
                { text: "九", furigana: "きゅう", meaning: "九", tail: "" },
              ],
            },
            {
              term_target: "く",
              pronunciation: ["Ku"],
              specific_note: "時間/月份",
              segments: [{ text: "く", meaning: "九", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "九時。",
              translation: "九點 (Kuji)。",
              segments: [
                { text: "九", furigana: "く", meaning: "九", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "九月。",
              translation: "九月 (Kugatsu)。",
              segments: [
                { text: "九", furigana: "く", meaning: "九", tail: "" },
                { text: "月", furigana: "がつ", meaning: "月", tail: "。" },
              ],
            },
            {
              sentence: "九つ。",
              translation: "九個 (Kokonotsu)。",
              segments: [
                {
                  text: "九つ",
                  furigana: "ここのつ",
                  meaning: "九個",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Juu"],
              specific_note: "數字",
              segments: [
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
              ],
            },
            {
              term_target: "十",
              pronunciation: ["Too"],
              specific_note: "個數",
              segments: [
                { text: "十", furigana: "とお", meaning: "十個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "十個。",
              translation: "十個 (Jukko)。",
              segments: [
                { text: "十", furigana: "じゅっ", meaning: "十", tail: "" },
                { text: "個", furigana: "こ", meaning: "個", tail: "。" },
              ],
            },
            {
              sentence: "十時。",
              translation: "十點 (Juuji)。",
              segments: [
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "十日。",
              translation: "十號 (Tooka)。",
              segments: [
                {
                  text: "十日",
                  furigana: "とおか",
                  meaning: "十號/十天",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Juuichi"],
              specific_note: "",
              segments: [
                {
                  text: "十一",
                  furigana: "じゅういち",
                  meaning: "十一",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "11時。",
              translation: "11點。",
              segments: [
                { text: "11", meaning: "十一", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "十一月。",
              translation: "十一月 (Juuichigatsu)。",
              segments: [
                {
                  text: "十一",
                  furigana: "じゅういち",
                  meaning: "十一",
                  tail: "",
                },
                { text: "月", furigana: "がつ", meaning: "月", tail: "。" },
              ],
            },
            {
              sentence: "十一回。",
              translation: "十一次。",
              segments: [
                {
                  text: "十一",
                  furigana: "じゅういっ",
                  meaning: "十一",
                  tail: "",
                },
                { text: "回", furigana: "かい", meaning: "次", tail: "。" },
              ],
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
              pronunciation: ["Juuni"],
              specific_note: "",
              segments: [
                {
                  text: "十二",
                  furigana: "じゅうに",
                  meaning: "十二",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "12月。",
              translation: "12月 (Juunigatsu)。",
              segments: [
                { text: "12", meaning: "十二", tail: "" },
                { text: "月", furigana: "がつ", meaning: "月", tail: "。" },
              ],
            },
            {
              sentence: "十二時。",
              translation: "十二點。",
              segments: [
                {
                  text: "十二",
                  furigana: "じゅうに",
                  meaning: "十二",
                  tail: "",
                },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "十二支。",
              translation: "十二生肖 (Juunishi)。",
              segments: [
                {
                  text: "十二支",
                  furigana: "じゅうにし",
                  meaning: "十二生肖",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Juugo"],
              specific_note: "",
              segments: [
                {
                  text: "十五",
                  furigana: "じゅうご",
                  meaning: "十五",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "15分。",
              translation: "15分 (Juugofun)。",
              segments: [
                { text: "15", meaning: "十五", tail: "" },
                { text: "分", furigana: "ふん", meaning: "分", tail: "。" },
              ],
            },
            {
              sentence: "十五日。",
              translation: "15號 (Juugonichi)。",
              segments: [
                {
                  text: "十五",
                  furigana: "じゅうご",
                  meaning: "十五",
                  tail: "",
                },
                { text: "日", furigana: "にち", meaning: "號/日", tail: "。" },
              ],
            },
            {
              sentence: "十五歳。",
              translation: "十五歲。",
              segments: [
                {
                  text: "十五",
                  furigana: "じゅうご",
                  meaning: "十五",
                  tail: "",
                },
                { text: "歳", furigana: "さい", meaning: "歲", tail: "。" },
              ],
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
              pronunciation: ["Nijuu"],
              specific_note: "",
              segments: [
                {
                  text: "二十",
                  furigana: "にじゅう",
                  meaning: "二十",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "二十円。",
              translation: "二十圓。",
              segments: [
                {
                  text: "二十",
                  furigana: "にじゅう",
                  meaning: "二十",
                  tail: "",
                },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
            {
              sentence: "二十歳。",
              translation: "二十歲 (Hatachi, 特殊唸法)。",
              segments: [
                {
                  text: "二十歳",
                  furigana: "はたち",
                  meaning: "二十歲",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "二十日。",
              translation: "二十號 (Hatsuka)。",
              segments: [
                {
                  text: "二十日",
                  furigana: "はつか",
                  meaning: "二十號/二十天",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Gojuu"],
              specific_note: "",
              segments: [
                {
                  text: "五十",
                  furigana: "ごじゅう",
                  meaning: "五十",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "五十人。",
              translation: "五十人。",
              segments: [
                {
                  text: "五十",
                  furigana: "ごじゅう",
                  meaning: "五十",
                  tail: "",
                },
                { text: "人", furigana: "にん", meaning: "人", tail: "。" },
              ],
            },
            {
              sentence: "五十円。",
              translation: "五十圓。",
              segments: [
                {
                  text: "五十",
                  furigana: "ごじゅう",
                  meaning: "五十",
                  tail: "",
                },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
            {
              sentence: "五十回。",
              translation: "五十次 (Gojukkai)。",
              segments: [
                {
                  text: "五十",
                  furigana: "ごじゅっ",
                  meaning: "五十",
                  tail: "",
                },
                { text: "回", furigana: "かい", meaning: "次", tail: "。" },
              ],
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
              pronunciation: ["Hyaku"],
              specific_note: "",
              segments: [
                { text: "百", furigana: "ひゃく", meaning: "百", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "百円。",
              translation: "一百圓。",
              segments: [
                { text: "百", furigana: "ひゃく", meaning: "百", tail: "" },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
            {
              sentence: "百点。",
              translation: "一百分。",
              segments: [
                { text: "百", furigana: "ひゃく", meaning: "百", tail: "" },
                { text: "点", furigana: "てん", meaning: "分", tail: "。" },
              ],
            },
            {
              sentence: "三百。",
              translation: "三百 (Sanbyaku)。",
              segments: [
                {
                  text: "三百",
                  furigana: "さんびゃく",
                  meaning: "三百",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "百。注意300(Sanbyaku)、600(Roppyaku)、800(Happyaku)的音變。",
          image_file: "hundred.png",
        },
        {
          id: "num-1000",
          term_zh: "1000",
          related_terms: [
            {
              term_target: "千",
              pronunciation: ["Sen"],
              specific_note: "",
              segments: [
                { text: "千", furigana: "せん", meaning: "千", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "一千円。",
              translation: "一千圓。",
              segments: [
                {
                  text: "一千",
                  furigana: "いっせん",
                  meaning: "一千",
                  tail: "",
                },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
            {
              sentence: "三千。",
              translation: "三千 (Sanzen)。",
              segments: [
                {
                  text: "三千",
                  furigana: "さんぜん",
                  meaning: "三千",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "八千。",
              translation: "八千 (Hassen)。",
              segments: [
                {
                  text: "八千",
                  furigana: "はっせん",
                  meaning: "八千",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Ichiman"],
              specific_note: "",
              segments: [
                {
                  text: "一万",
                  furigana: "いちまん",
                  meaning: "一萬",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "一万円。",
              translation: "一萬圓。",
              segments: [
                {
                  text: "一万",
                  furigana: "いちまん",
                  meaning: "一萬",
                  tail: "",
                },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
            {
              sentence: "一万人。",
              translation: "一萬人。",
              segments: [
                {
                  text: "一万",
                  furigana: "いちまん",
                  meaning: "一萬",
                  tail: "",
                },
                { text: "人", furigana: "にん", meaning: "人", tail: "。" },
              ],
            },
            {
              sentence: "万一。",
              translation: "萬一 (Manichi)。",
              segments: [
                {
                  text: "万一",
                  furigana: "まんいち",
                  meaning: "萬一",
                  tail: "。",
                },
              ],
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
              pronunciation: ["Watashi wa ... desu"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "...", meaning: "某身分/狀態", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は学生です。",
              translation: "我是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私は台湾人です。",
              translation: "我是台灣人。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
                { text: "人", furigana: "じん", meaning: "人", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私は会社員です。",
              translation: "我是上班族。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "会社員",
                  furigana: "かいしゃいん",
                  meaning: "上班族",
                  tail: "",
                },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Watashi no namae wa ... desu"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                {
                  text: "名前",
                  furigana: "なまえ",
                  meaning: "名字",
                  tail: "は",
                },
                { text: "...", meaning: "某名字", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私の名前は田中です。",
              translation: "我的名字叫田中。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                {
                  text: "名前",
                  furigana: "なまえ",
                  meaning: "名字",
                  tail: "は",
                },
                { text: "田中", furigana: "たなか", meaning: "田中", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私の名前はリンです。",
              translation: "我的名字叫林。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                {
                  text: "名前",
                  furigana: "なまえ",
                  meaning: "名字",
                  tail: "は",
                },
                { text: "リン", meaning: "林", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私の名前はアリスです。",
              translation: "我的名字叫愛麗絲。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "の" },
                {
                  text: "名前",
                  furigana: "なまえ",
                  meaning: "名字",
                  tail: "は",
                },
                { text: "アリス", meaning: "愛麗絲", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Watashi wa ... shimasu"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "...", meaning: "某事", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は勉強します。",
              translation: "我讀書。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書",
                  tail: "",
                },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私はテニスをします。",
              translation: "我打網球。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "テニス", meaning: "網球", tail: "を" },
                { text: "します", meaning: "做/打 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私は明日、仕事をします。",
              translation: "我明天會工作。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "、",
                },
                {
                  text: "仕事",
                  furigana: "しごと",
                  meaning: "工作",
                  tail: "を",
                },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Watashi wa ... shiteimasu"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "...", meaning: "某事", tail: "" },
                { text: "して", meaning: "(進行中)", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は食べています。",
              translation: "我正在吃。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べて", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私は待っています。",
              translation: "我正在等。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "待", furigana: "ま", meaning: "等", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私は今、働いています。",
              translation: "我現在正在工作。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "働", furigana: "はたら", meaning: "工作", tail: "" },
                { text: "いて", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Watashi wa ... dekimasu"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "...", meaning: "某事", tail: "" },
                { text: "できます", meaning: "能/會 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は運転できます。",
              translation: "我會開車。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "開車/駕駛",
                  tail: "",
                },
                { text: "できます", meaning: "會 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私は日本語ができます。",
              translation: "我會日文。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "が",
                },
                { text: "できます", meaning: "會 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私は泳ぐことができます。",
              translation: "我會游泳。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "泳", furigana: "およ", meaning: "游", tail: "ぐ" },
                { text: "こと", meaning: "事情(名詞化)", tail: "が" },
                { text: "できます", meaning: "會 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Watashi wa ... ga suki desu"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "...", meaning: "某事", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は読書が好きです。",
              translation: "我喜歡閱讀。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "読書",
                  furigana: "どくしょ",
                  meaning: "讀書",
                  tail: "が",
                },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私は猫が好きです。",
              translation: "我喜歡貓。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "猫", furigana: "ねこ", meaning: "貓", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私は旅行が好きです。",
              translation: "我喜歡旅行。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "旅行",
                  furigana: "りょこう",
                  meaning: "旅行",
                  tail: "が",
                },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Watashi wa ... deshita"],
              specific_note: "狀態",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "...", meaning: "某狀態", tail: "" },
                { text: "でした", meaning: "是 (過去敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は学生でした。",
              translation: "我曾經是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "でした", meaning: "是 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "昨日は雨でした。",
              translation: "昨天是雨天。",
              segments: [
                {
                  text: "昨日",
                  furigana: "きのう",
                  meaning: "昨天",
                  tail: "は",
                },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
                { text: "でした", meaning: "是 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "ここは学校でした。",
              translation: "這裡曾經是學校。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "は" },
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "",
                },
                { text: "でした", meaning: "是 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Watashi wa ... shimashita"],
              specific_note: "動作",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "...", meaning: "某事", tail: "" },
                { text: "しました", meaning: "做了 (過去敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "宿題をしました。",
              translation: "我做完功課了。",
              segments: [
                {
                  text: "宿題",
                  furigana: "しゅくだい",
                  meaning: "功課",
                  tail: "を",
                },
                { text: "しました", meaning: "做了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "昨日、映画を見ました。",
              translation: "我昨天看了電影。",
              segments: [
                {
                  text: "昨日",
                  furigana: "きのう",
                  meaning: "昨天",
                  tail: "、",
                },
                {
                  text: "映画",
                  furigana: "えいが",
                  meaning: "電影",
                  tail: "を",
                },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "朝ごはんを食べました。",
              translation: "我吃過早餐了。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "を" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べました", meaning: "了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["Mou ... shimashita"],
              specific_note: "",
              segments: [
                { text: "もう", meaning: "已經", tail: "" },
                { text: "...", meaning: "某事", tail: "" },
                { text: "しました", meaning: "做了 (過去敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "もう食べました。",
              translation: "已經吃過了。",
              segments: [
                { text: "もう", meaning: "已經", tail: "" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "もう帰りました。",
              translation: "已經回去了。",
              segments: [
                { text: "もう", meaning: "已經", tail: "" },
                { text: "帰", furigana: "かえ", meaning: "回", tail: "" },
                { text: "りました", meaning: "了 (過去敬語)", tail: "。" },
              ],
            },
            {
              sentence: "もう予約しました。",
              translation: "已經預約了。",
              segments: [
                { text: "もう", meaning: "已經", tail: "" },
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "しました", meaning: "做了 (過去敬語)", tail: "。" },
              ],
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
              pronunciation: ["...e itta koto ga arimasu"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某地", tail: "へ" },
                { text: "行", furigana: "い", meaning: "去", tail: "った" },
                { text: "こと", meaning: "經驗(名詞化)", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本へ行ったことがあります。",
              translation: "我曾去過日本。",
              segments: [
                {
                  text: "日本",
                  furigana: "にほん",
                  meaning: "日本",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "った" },
                { text: "こと", meaning: "經驗", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "納豆を食べたことがあります。",
              translation: "我吃過納豆。",
              segments: [
                {
                  text: "納豆",
                  furigana: "なっとう",
                  meaning: "納豆",
                  tail: "を",
                },
                { text: "食", furigana: "た", meaning: "吃", tail: "べた" },
                { text: "こと", meaning: "經驗", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "彼に会ったことがあります。",
              translation: "我見過他。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "に" },
                { text: "会", furigana: "あ", meaning: "見", tail: "った" },
                { text: "こと", meaning: "經驗", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
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
              pronunciation: ["...tsumori desu"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某事", tail: "" },
                { text: "つもり", meaning: "打算", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "行くつもりです。",
              translation: "我打算去。",
              segments: [
                { text: "行", furigana: "い", meaning: "去", tail: "く" },
                { text: "つもり", meaning: "打算", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "車を買うつもりです。",
              translation: "我打算買車。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "を" },
                { text: "買", furigana: "か", meaning: "買", tail: "う" },
                { text: "つもり", meaning: "打算", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "明日、休むつもりです。",
              translation: "我明天打算請假。",
              segments: [
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "、",
                },
                { text: "休", furigana: "やす", meaning: "休", tail: "む" },
                { text: "つもり", meaning: "打算", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Anata wa ... desu ka?"],
              specific_note: "",
              segments: [
                { text: "あなた", meaning: "你", tail: "は" },
                { text: "...", meaning: "某身分/狀態", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "あなたは学生ですか？",
              translation: "你是學生嗎？",
              segments: [
                { text: "あなた", meaning: "你", tail: "は" },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "あなたは日本人ですか？",
              translation: "你是日本人嗎？",
              segments: [
                { text: "あなた", meaning: "你", tail: "は" },
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "人", furigana: "じん", meaning: "人", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "あなたは先生ですか？",
              translation: "你是老師嗎？",
              segments: [
                { text: "あなた", meaning: "你", tail: "は" },
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
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
              pronunciation: ["...shiteimasu ka?"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某事", tail: "" },
                { text: "して", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "勉強していますか？",
              translation: "你在讀書嗎？",
              segments: [
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書",
                  tail: "",
                },
                { text: "して", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "聞いていますか？",
              translation: "你有在聽嗎？",
              segments: [
                { text: "聞", furigana: "き", meaning: "聽", tail: "" },
                { text: "いて", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "今、何をしていますか？",
              translation: "你現在在做什麼？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "何", furigana: "なに", meaning: "什麼", tail: "を" },
                { text: "して", meaning: "做(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["...shita koto ga arimasu ka?"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某事", tail: "" },
                { text: "した", meaning: "做過(過去式)", tail: "" },
                { text: "こと", meaning: "經驗(名詞化)", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "行ったことがありますか？",
              translation: "你有去過嗎？",
              segments: [
                { text: "行", furigana: "い", meaning: "去", tail: "った" },
                { text: "こと", meaning: "經驗", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "食べたことがありますか？",
              translation: "你有吃過嗎？",
              segments: [
                { text: "食", furigana: "た", meaning: "吃", tail: "べた" },
                { text: "こと", meaning: "經驗", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "それを見たことがありますか？",
              translation: "你看過那個嗎？",
              segments: [
                { text: "それ", meaning: "那個", tail: "を" },
                { text: "見", furigana: "み", meaning: "看", tail: "た" },
                { text: "こと", meaning: "經驗", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Itsu ... shimasu ka?"],
              specific_note: "",
              segments: [
                { text: "いつ", meaning: "何時", tail: "" },
                { text: "...", meaning: "某事", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "いつ寝ますか？",
              translation: "你何時睡？",
              segments: [
                { text: "いつ", meaning: "何時", tail: "" },
                { text: "寝", furigana: "ね", meaning: "睡", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "いつ行きますか？",
              translation: "你什麼時候去？",
              segments: [
                { text: "いつ", meaning: "何時", tail: "" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "いつ終わりますか？",
              translation: "什麼時候結束？",
              segments: [
                { text: "いつ", meaning: "何時", tail: "" },
                { text: "終", furigana: "お", meaning: "結束", tail: "" },
                { text: "わります", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Itsu ...e ikimasu ka?"],
              specific_note: "",
              segments: [
                { text: "いつ", meaning: "何時", tail: "" },
                { text: "...", meaning: "某地", tail: "へ" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "いつ学校へ行きますか？",
              translation: "你何時去學校？",
              segments: [
                { text: "いつ", meaning: "何時", tail: "" },
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "いつ日本へ行きますか？",
              translation: "你何時去日本？",
              segments: [
                { text: "いつ", meaning: "何時", tail: "" },
                {
                  text: "日本",
                  furigana: "にほん",
                  meaning: "日本",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "いつ会社へ行きますか？",
              translation: "你何時去公司？",
              segments: [
                { text: "いつ", meaning: "何時", tail: "" },
                {
                  text: "会社",
                  furigana: "かいしゃ",
                  meaning: "公司",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Doko de ... shimasu ka?"],
              specific_note: "",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "で" },
                { text: "...", meaning: "某事", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "どこで買いますか？",
              translation: "你在哪買？",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "で" },
                { text: "買", furigana: "か", meaning: "買", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "どこで食べますか？",
              translation: "你要在哪裡吃？",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "で" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "どこで働いていますか？",
              translation: "你在哪裡工作？",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "で" },
                { text: "働", furigana: "はたら", meaning: "工作", tail: "" },
                { text: "いて", meaning: "(連接)", tail: "" },
                { text: "います", meaning: "正在 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Douyatte ... shimasu ka?"],
              specific_note: "",
              segments: [
                { text: "どうやって", meaning: "如何", tail: "" },
                { text: "...", meaning: "某事", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "どうやって行きますか？",
              translation: "你怎麼去？",
              segments: [
                { text: "どうやって", meaning: "如何", tail: "" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "どうやって食べますか？",
              translation: "這個怎麼吃？",
              segments: [
                { text: "どうやって", meaning: "如何", tail: "" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "どうやって使いますか？",
              translation: "這要怎麼用？",
              segments: [
                { text: "どうやって", meaning: "如何", tail: "" },
                { text: "使", furigana: "つか", meaning: "用", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Douyatte ...e ikimasu ka?"],
              specific_note: "",
              segments: [
                { text: "どうやって", meaning: "如何", tail: "" },
                { text: "...", meaning: "某地", tail: "へ" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "どうやって学校へ行きますか？",
              translation: "你怎麼去學校？",
              segments: [
                { text: "どうやって", meaning: "如何", tail: "" },
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "どうやって駅へ行きますか？",
              translation: "要怎麼去車站？",
              segments: [
                { text: "どうやって", meaning: "如何", tail: "" },
                { text: "駅", furigana: "えき", meaning: "車站", tail: "へ" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "どうやって空港へ行きますか？",
              translation: "要怎麼去機場？",
              segments: [
                { text: "どうやって", meaning: "如何", tail: "" },
                {
                  text: "空港",
                  furigana: "くうこう",
                  meaning: "機場",
                  tail: "へ",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["Watashi wa ... dewa arimasen"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "...", meaning: "某身分/狀態", tail: "" },
                { text: "では", meaning: "並 (否定提示)", tail: "" },
                { text: "ありません", meaning: "不是 (否定敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は学生ではありません。",
              translation: "我不是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "私は日本人ではありません。",
              translation: "我不是日本人。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "は" },
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "人", furigana: "じん", meaning: "人", tail: "" },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "これはペンではありません。",
              translation: "這不是筆。",
              segments: [
                { text: "これ", meaning: "這", tail: "は" },
                { text: "ペン", meaning: "筆", tail: "" },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是 (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["...masen"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某事", tail: "" },
                { text: "ません", meaning: "不... (否定敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "食べません。",
              translation: "我不吃。",
              segments: [
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べません", meaning: "不... (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "行きません。",
              translation: "我不去。",
              segments: [
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きません", meaning: "不... (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "わかりません。",
              translation: "我不懂。",
              segments: [
                { text: "わかり", meaning: "懂", tail: "" },
                { text: "ません", meaning: "不... (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["...dekimasen"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某事", tail: "" },
                {
                  text: "できません",
                  meaning: "不能/不會 (否定敬語)",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "運転できません。",
              translation: "我不會開車。",
              segments: [
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "開車",
                  tail: "",
                },
                { text: "できません", meaning: "不會 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "日本語ができません。",
              translation: "我不會日文。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "が",
                },
                { text: "できません", meaning: "不會 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "行くことができません。",
              translation: "我不能去。",
              segments: [
                { text: "行", furigana: "い", meaning: "去", tail: "く" },
                { text: "こと", meaning: "事情(名詞化)", tail: "が" },
                { text: "できません", meaning: "不能 (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["Ichido mo ... shita koto ga arimasen"],
              specific_note: "",
              segments: [
                {
                  text: "一度",
                  furigana: "いちど",
                  meaning: "一次",
                  tail: "も",
                },
                { text: "...", meaning: "某事", tail: "" },
                { text: "した", meaning: "做過(過去式)", tail: "" },
                { text: "こと", meaning: "經驗", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "一度も食べたことがありません。",
              translation: "我一次都沒吃過。",
              segments: [
                {
                  text: "一度",
                  furigana: "いちど",
                  meaning: "一次",
                  tail: "も",
                },
                { text: "食", furigana: "た", meaning: "吃", tail: "べた" },
                { text: "こと", meaning: "經驗", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "一度も行ったことがありません。",
              translation: "我一次都沒去過。",
              segments: [
                {
                  text: "一度",
                  furigana: "いちど",
                  meaning: "一次",
                  tail: "も",
                },
                { text: "行", furigana: "い", meaning: "去", tail: "った" },
                { text: "こと", meaning: "經驗", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "一度も見たことがありません。",
              translation: "我一次都沒看過。",
              segments: [
                {
                  text: "一度",
                  furigana: "いちど",
                  meaning: "一次",
                  tail: "も",
                },
                { text: "見", furigana: "み", meaning: "看", tail: "た" },
                { text: "こと", meaning: "經驗", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["...shinakutemo ii desu"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某事", tail: "" },
                { text: "しなく", meaning: "不做", tail: "ても" },
                { text: "いい", meaning: "好", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "行かなくてもいいです。",
              translation: "我不必去。",
              segments: [
                {
                  text: "行",
                  furigana: "い",
                  meaning: "去",
                  tail: "かなくても",
                },
                { text: "いい", meaning: "好", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "急がなくてもいいです。",
              translation: "你不必著急。",
              segments: [
                {
                  text: "急",
                  furigana: "いそ",
                  meaning: "急",
                  tail: "がなくても",
                },
                { text: "いい", meaning: "好", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "払わなくてもいいです。",
              translation: "不必付錢。",
              segments: [
                {
                  text: "払",
                  furigana: "はら",
                  meaning: "付",
                  tail: "わなくても",
                },
                { text: "いい", meaning: "好", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Moshi ... nara"],
              specific_note: "",
              segments: [
                { text: "もし", meaning: "如果", tail: "" },
                { text: "...", meaning: "某事", tail: "" },
                { text: "なら", meaning: "的話", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "もし安いなら、買います。",
              translation: "如果便宜的話我就買。",
              segments: [
                { text: "もし", meaning: "如果", tail: "" },
                { text: "安", furigana: "やす", meaning: "便宜", tail: "い" },
                { text: "なら", meaning: "的話", tail: "、" },
                { text: "買", furigana: "か", meaning: "買", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "もし明日晴れたら、行きます。",
              translation: "如果明天放晴，我就去。",
              segments: [
                { text: "もし", meaning: "如果", tail: "" },
                { text: "明日", furigana: "あした", meaning: "明天", tail: "" },
                { text: "晴", furigana: "は", meaning: "晴", tail: "れたら" },
                { text: "、", tail: "" },
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "もし時間があるなら、手伝ってください。",
              translation: "如果你有時間，請幫幫我。",
              segments: [
                { text: "もし", meaning: "如果", tail: "" },
                {
                  text: "時間",
                  furigana: "じかん",
                  meaning: "時間",
                  tail: "が",
                },
                { text: "ある", meaning: "有", tail: "なら" },
                { text: "、", tail: "" },
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
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
              pronunciation: ["...no toki"],
              specific_note: "",
              segments: [
                { text: "の", meaning: "的", tail: "" },
                { text: "時", furigana: "とき", meaning: "時候", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "子供の時。",
              translation: "小時候(當我是孩子時)。",
              segments: [
                {
                  text: "子供",
                  furigana: "こども",
                  meaning: "小孩",
                  tail: "の",
                },
                { text: "時", furigana: "とき", meaning: "時候", tail: "。" },
              ],
            },
            {
              sentence: "暇な時、テレビを見ます。",
              translation: "閒暇時我會看電視。",
              segments: [
                { text: "暇", furigana: "ひま", meaning: "閒暇", tail: "な" },
                { text: "時", furigana: "とき", meaning: "時候", tail: "、" },
                { text: "テレビ", meaning: "電視", tail: "を" },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "ます", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "寝る時、電気を消します。",
              translation: "睡覺時我會關燈。",
              segments: [
                { text: "寝", furigana: "ね", meaning: "睡", tail: "る" },
                { text: "時", furigana: "とき", meaning: "時候", tail: "、" },
                {
                  text: "電気",
                  furigana: "でんき",
                  meaning: "電燈",
                  tail: "を",
                },
                { text: "消", furigana: "け", meaning: "關/消", tail: "" },
                { text: "します", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["...shite kuremasu ka?"],
              specific_note: "",
              segments: [
                { text: "して", meaning: "做(連接)", tail: "" },
                { text: "くれます", meaning: "給我 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "手伝ってくれますか？",
              translation: "可以幫我嗎？",
              segments: [
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "くれます", meaning: "給我 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "教えてくれますか？",
              translation: "可以教我嗎？",
              segments: [
                { text: "教", furigana: "おし", meaning: "教", tail: "" },
                { text: "えて", meaning: "(連接)", tail: "" },
                { text: "くれます", meaning: "給我 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "待ってくれますか？",
              translation: "可以等我嗎？",
              segments: [
                { text: "待", furigana: "ま", meaning: "等", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "くれます", meaning: "給我 (敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["...shimashou"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某事", tail: "" },
                { text: "しましょう", meaning: "做吧 (勸誘敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "行きましょう。",
              translation: "走吧。",
              segments: [
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きましょう", meaning: "做吧 (勸誘敬語)", tail: "。" },
              ],
            },
            {
              sentence: "食べましょう。",
              translation: "吃吧。",
              segments: [
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                {
                  text: "べしましょう",
                  meaning: "做吧 (勸誘敬語)",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "休憩しましょう。",
              translation: "休息一下吧。",
              segments: [
                {
                  text: "休憩",
                  furigana: "きゅうけい",
                  meaning: "休息",
                  tail: "",
                },
                { text: "しましょう", meaning: "做吧 (勸誘敬語)", tail: "。" },
              ],
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
              term_target: "...だと思います",
              pronunciation: ["...to omoimasu"],
              specific_note: "",
              segments: [
                { text: "と", meaning: "這件事(引述)", tail: "" },
                { text: "思", furigana: "おも", meaning: "想/認為", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "いいと思います。",
              translation: "我認為很好。",
              segments: [
                { text: "いい", meaning: "好", tail: "と" },
                { text: "思", furigana: "おも", meaning: "認為", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "おいしいと思います。",
              translation: "我覺得很好吃。",
              segments: [
                { text: "おいしい", meaning: "好吃", tail: "と" },
                { text: "思", furigana: "おも", meaning: "認為", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "彼は来ないと思います。",
              translation: "我想他不會來。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "は" },
                { text: "来", furigana: "こ", meaning: "來", tail: "ない" },
                { text: "と", meaning: "這件事", tail: "" },
                { text: "思", furigana: "おも", meaning: "認為", tail: "" },
                { text: "います", meaning: "做 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["...tai desu"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某事", tail: "" },
                { text: "たい", meaning: "想做", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "行きたいです。",
              translation: "我想去。",
              segments: [
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "きたい", meaning: "想做", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "食べたいです。",
              translation: "我想吃。",
              segments: [
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べたい", meaning: "想做", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "日本へ帰りたいです。",
              translation: "我想回日本。",
              segments: [
                {
                  text: "日本",
                  furigana: "にほん",
                  meaning: "日本",
                  tail: "へ",
                },
                { text: "帰", furigana: "かえ", meaning: "回", tail: "" },
                { text: "りたい", meaning: "想做", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["...shinakereba narimasen"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某事", tail: "" },
                { text: "しなけれ", meaning: "若不做", tail: "ば" },
                { text: "なり", meaning: "不行/成", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "働かなければなりません。",
              translation: "我必須工作。",
              segments: [
                { text: "働", furigana: "はたら", meaning: "工作", tail: "" },
                { text: "かなけれ", meaning: "若不做", tail: "ば" },
                { text: "なり", meaning: "不行", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "勉強しなければなりません。",
              translation: "我必須唸書。",
              segments: [
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書",
                  tail: "",
                },
                { text: "しなけれ", meaning: "若不做", tail: "ば" },
                { text: "なり", meaning: "不行", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "行かなければなりません。",
              translation: "我得走了。",
              segments: [
                { text: "行", furigana: "い", meaning: "去", tail: "" },
                { text: "かなけれ", meaning: "若不做", tail: "ば" },
                { text: "なり", meaning: "不行", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["...suru no wa ... desu"],
              specific_note: "",
              segments: [
                { text: "する", meaning: "做", tail: "" },
                { text: "の", meaning: "事情(名詞化)", tail: "は" },
                { text: "...", meaning: "如何", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "食べるのは楽しいです。",
              translation: "吃東西是開心的。",
              segments: [
                { text: "食", furigana: "た", meaning: "吃", tail: "べる" },
                { text: "の", meaning: "事情", tail: "は" },
                { text: "楽", furigana: "たの", meaning: "快樂", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "日本語を話すのは難しいです。",
              translation: "說日文是困難的。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "を",
                },
                { text: "話", furigana: "はな", meaning: "說", tail: "す" },
                { text: "の", meaning: "事情", tail: "は" },
                { text: "難", furigana: "むずか", meaning: "難", tail: "しい" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "泳ぐのは好きです。",
              translation: "我喜歡游泳(這件事)。",
              segments: [
                { text: "泳", furigana: "およ", meaning: "游", tail: "ぐ" },
                { text: "の", meaning: "事情", tail: "は" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["Tetsudatte kuremasen ka?"],
              specific_note: "",
              segments: [
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "くれ", meaning: "給我", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "" },
                { text: "か", meaning: "嗎 (疑問)", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "掃除を手伝ってくれませんか？",
              translation: "你可以幫我打掃嗎？",
              segments: [
                {
                  text: "掃除",
                  furigana: "そうじ",
                  meaning: "打掃",
                  tail: "を",
                },
                { text: "手伝", furigana: "てつだ", meaning: "幫忙", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "くれ", meaning: "給我", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "荷物を持ってくれませんか？",
              translation: "可以幫我拿行李嗎？",
              segments: [
                {
                  text: "荷物",
                  furigana: "にもつ",
                  meaning: "行李",
                  tail: "を",
                },
                { text: "持", furigana: "も", meaning: "拿", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "くれ", meaning: "給我", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
            },
            {
              sentence: "写真を撮ってくれませんか？",
              translation: "可以幫我拍照嗎？",
              segments: [
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "を",
                },
                { text: "撮", furigana: "と", meaning: "拍", tail: "" },
                { text: "って", meaning: "(連接)", tail: "" },
                { text: "くれ", meaning: "給我", tail: "" },
                { text: "ません", meaning: "不 (否定敬語)", tail: "" },
                { text: "か", meaning: "嗎", tail: "？" },
              ],
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
              pronunciation: ["...temo ii desu ka?"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某事", tail: "" },
                { text: "ても", meaning: "即使", tail: "" },
                { text: "いい", meaning: "好", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
          ],
          examples: [
            {
              sentence: "写真を撮ってもいいですか？",
              translation: "我可以拍照嗎？",
              segments: [
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "を",
                },
                { text: "撮", furigana: "と", meaning: "拍", tail: "" },
                { text: "っても", meaning: "即使", tail: "" },
                { text: "いい", meaning: "好", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "ここに入ってもいいですか？",
              translation: "我可以進去嗎？",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "に" },
                { text: "入", furigana: "はい", meaning: "進", tail: "" },
                { text: "っても", meaning: "即使", tail: "" },
                { text: "いい", meaning: "好", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
            },
            {
              sentence: "これを食べてもいいですか？",
              translation: "我可以吃這個嗎？",
              segments: [
                { text: "これ", meaning: "這個", tail: "を" },
                { text: "食", furigana: "た", meaning: "吃", tail: "" },
                { text: "べても", meaning: "即使", tail: "" },
                { text: "いい", meaning: "好", tail: "" },
                { text: "ですか", meaning: "是嗎 (敬語)", tail: "？" },
              ],
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
              pronunciation: ["...ga suki dewa arimasen"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某物", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是 (否定敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "それが好きではありません。",
              translation: "我不喜歡那個。",
              segments: [
                { text: "それ", meaning: "那個", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "納豆が好きではありません。",
              translation: "我不喜歡納豆。",
              segments: [
                {
                  text: "納豆",
                  furigana: "なっとう",
                  meaning: "納豆",
                  tail: "が",
                },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是 (否定敬語)", tail: "。" },
              ],
            },
            {
              sentence: "運動が好きではありません。",
              translation: "我不喜歡運動。",
              segments: [
                {
                  text: "運動",
                  furigana: "うんどう",
                  meaning: "運動",
                  tail: "が",
                },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是 (否定敬語)", tail: "。" },
              ],
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
              pronunciation: ["...no hou ga suki desu"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "某物", tail: "の" },
                { text: "方", furigana: "ほう", meaning: "這方面", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これの方が好きです。",
              translation: "我比較喜歡這個。",
              segments: [
                { text: "これ", meaning: "這個", tail: "の" },
                { text: "方", furigana: "ほう", meaning: "這方面", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "猫の方が好きです。",
              translation: "我比較喜歡貓。",
              segments: [
                { text: "猫", furigana: "ねこ", meaning: "貓", tail: "の" },
                { text: "方", furigana: "ほう", meaning: "這方面", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "夏より冬の方が好きです。",
              translation: "比起夏天，我更喜歡冬天。",
              segments: [
                { text: "夏", furigana: "なつ", meaning: "夏天", tail: "" },
                { text: "より", meaning: "比", tail: "" },
                { text: "冬", furigana: "ふゆ", meaning: "冬天", tail: "の" },
                { text: "方", furigana: "ほう", meaning: "這方面", tail: "が" },
                { text: "好", furigana: "す", meaning: "喜歡", tail: "き" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["A wa B yori ... desu"],
              specific_note: "",
              segments: [
                { text: "A", meaning: "A", tail: "は" },
                { text: "B", meaning: "B", tail: "" },
                { text: "より", meaning: "比", tail: "" },
                { text: "...", meaning: "如何", tail: "" },
                { text: "です", meaning: "是 (敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これはあれより高いです。",
              translation: "這比那個貴。",
              segments: [
                { text: "これ", meaning: "這個", tail: "は" },
                { text: "あれ", meaning: "那個", tail: "" },
                { text: "より", meaning: "比", tail: "" },
                { text: "高", furigana: "たか", meaning: "高/貴", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "新幹線はバスより速いです。",
              translation: "新幹線比公車快。",
              segments: [
                {
                  text: "新幹線",
                  furigana: "しんかんせん",
                  meaning: "新幹線",
                  tail: "は",
                },
                { text: "バス", meaning: "公車", tail: "" },
                { text: "より", meaning: "比", tail: "" },
                { text: "速", furigana: "はや", meaning: "快", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "今日は昨日より暑いです。",
              translation: "今天比昨天熱。",
              segments: [
                {
                  text: "今日",
                  furigana: "きょう",
                  meaning: "今天",
                  tail: "は",
                },
                { text: "昨日", furigana: "きのう", meaning: "昨天", tail: "" },
                { text: "より", meaning: "比", tail: "" },
                { text: "暑", furigana: "あつ", meaning: "熱", tail: "い" },
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
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
              pronunciation: ["...ga arimasu"],
              specific_note: "物品",
              segments: [
                { text: "...", meaning: "某物", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
            {
              term_target: "...がいます",
              pronunciation: ["...ga imasu"],
              specific_note: "生物",
              segments: [
                { text: "...", meaning: "某人/動物", tail: "が" },
                { text: "い", meaning: "有/在", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "犬がいます。",
              translation: "有一隻狗。",
              segments: [
                { text: "犬", furigana: "いぬ", meaning: "狗", tail: "が" },
                { text: "い", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "トイレがあります。",
              translation: "有廁所。",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "が" },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "時間があります。",
              translation: "有時間。",
              segments: [
                {
                  text: "時間",
                  furigana: "じかん",
                  meaning: "時間",
                  tail: "が",
                },
                { text: "あり", meaning: "有", tail: "" },
                { text: "ます", meaning: "(敬語)", tail: "。" },
              ],
            },
          ],
          usage_note: "存在 (生物用Imasu)。",
          image_file: "there_is.png",
        },
      ],
    },
  ],
};
