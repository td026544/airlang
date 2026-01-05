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
              pronunciation: ["hai"],
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
                { text: "です", meaning: "是 (敬語)", tail: "。" },
              ],
            },
            {
              sentence: "はい、わかりました。",
              translation: "好的，我知道了。",
              segments: [
                { text: "はい", meaning: "是的", tail: "、" },
                { text: "わかりました", meaning: "明白了", tail: "。" },
              ],
            },
            {
              sentence: "はい！元気です。",
              translation: "是！我很得好。",
              segments: [
                { text: "はい", meaning: "是的", tail: "！" },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "精神/健康",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "最基本的肯定回答，也可用於回應點名。",
          image_file: "yes.png",
        },
        {
          id: "greet-002",
          term_zh: "不是",
          related_terms: [
            {
              term_target: "いいえ",
              pronunciation: ["iie"],
              specific_note: "否定",
              segments: [{ text: "いいえ", meaning: "不/不是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "いいえ、違います。",
              translation: "不，不是這樣的(弄錯了)。",
              segments: [
                { text: "いいえ", meaning: "不", tail: "、" },
                {
                  text: "違います",
                  furigana: "ちがいます",
                  meaning: "不一樣/錯了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "いいえ、結構です。",
              translation: "不用了，沒關係 (委婉拒絕)。",
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
              sentence: "いいえ、とんでもないです。",
              translation: "哪裡的話，別客氣 (被稱讚時的謙虛回應)。",
              segments: [
                { text: "いいえ", meaning: "不", tail: "、" },
                { text: "とんでもない", meaning: "沒那回事", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "標準的否定，口語朋友間常用「ううん」。",
          image_file: "no.png",
        },
        {
          id: "greet-003",
          term_zh: "你好",
          related_terms: [
            {
              term_target: "こんにちは",
              pronunciation: ["konnichiwa"],
              specific_note: "白天通用",
              segments: [{ text: "こんにちは", meaning: "你好", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "こんにちは、いい天気ですね。",
              translation: "你好，今天天氣真好呢。",
              segments: [
                { text: "こんにちは", meaning: "你好", tail: "、" },
                { text: "いい", meaning: "好的", tail: " " },
                { text: "天気", furigana: "てんき", meaning: "天氣", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "あ、田中さん、こんにちは。",
              translation: "啊，田中先生/小姐，你好。",
              segments: [
                { text: "あ", meaning: "啊", tail: "、" },
                {
                  text: "田中",
                  furigana: "たなか",
                  meaning: "田中(姓氏)",
                  tail: "",
                },
                { text: "さん", meaning: "先生/小姐", tail: "、" },
                { text: "こんにちは", meaning: "你好", tail: "。" },
              ],
            },
            {
              sentence: "皆さん、こんにちは。",
              translation: "大家你好。",
              segments: [
                {
                  text: "皆さん",
                  furigana: "みなさん",
                  meaning: "大家/諸位",
                  tail: "、",
                },
                { text: "こんにちは", meaning: "你好", tail: "。" },
              ],
            },
          ],
          usage_note: "主要用於白天 (約早上10點至下午5點)。",
          image_file: "hello.png",
        },
        {
          id: "greet-004",
          term_zh: "謝謝你",
          related_terms: [
            {
              term_target: "ありがとうございます",
              pronunciation: ["arigatou gozaimasu"],
              specific_note: "有禮貌",
              segments: [
                { text: "ありがとう", meaning: "謝謝", tail: "" },
                { text: "ございます", meaning: "極/表示禮貌", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "本当にありがとうございます。",
              translation: "真的非常謝謝你。",
              segments: [
                {
                  text: "本当に",
                  furigana: "ほんとうに",
                  meaning: "真地/非常",
                  tail: " ",
                },
                { text: "ありがとう", meaning: "謝謝", tail: "" },
                { text: "ございます", meaning: "(敬語結尾)", tail: "。" },
              ],
            },
            {
              sentence: "手伝ってくれてありがとう。",
              translation: "謝謝你幫我也 (平輩/晚輩用)。",
              segments: [
                {
                  text: "手伝って",
                  furigana: "てつだって",
                  meaning: "幫忙",
                  tail: "",
                },
                { text: "くれて", meaning: "給我", tail: "" },
                { text: "ありがとう", meaning: "謝謝", tail: "。" },
              ],
            },
            {
              sentence: "どうもありがとうございました。",
              translation: "剛才非常感謝 (針對已結束的事)。",
              segments: [
                { text: "どうも", meaning: "很/實在", tail: " " },
                { text: "ありがとう", meaning: "謝謝", tail: "" },
                {
                  text: "ございました",
                  meaning: "了 (過去式敬語)",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "「ございます」表示現在或未來，「ございました」用於感謝過去發生的事。",
          image_file: "thank_you.png",
        },
        {
          id: "greet-005",
          term_zh: "對不起",
          related_terms: [
            {
              term_target: "ごめんなさい",
              pronunciation: ["gomennasai"],
              specific_note: "道歉",
              segments: [{ text: "ごめんなさい", meaning: "對不起", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "遅れてごめんなさい。",
              translation: "對不起我遲到了。",
              segments: [
                {
                  text: "遅れて",
                  furigana: "おくれて",
                  meaning: "遲到",
                  tail: "",
                },
                { text: "ごめんなさい", meaning: "對不起", tail: "。" },
              ],
            },
            {
              sentence: "本当にごめんなさい。",
              translation: "真的很對不起。",
              segments: [
                {
                  text: "本当に",
                  furigana: "ほんとうに",
                  meaning: "真地",
                  tail: " ",
                },
                { text: "ごめんなさい", meaning: "對不起", tail: "。" },
              ],
            },
            {
              sentence: "あ、ごめん！",
              translation: "啊，抱歉！(對朋友/家人)。",
              segments: [
                { text: "あ", meaning: "啊", tail: "、" },
                { text: "ごめん", meaning: "抱歉", tail: "！" },
              ],
            },
          ],
          usage_note: "用於做錯事時的道歉。輕微的不好意思可用「すみません」。",
          image_file: "sorry.png",
        },
        {
          id: "greet-006",
          term_zh: "不好意思",
          related_terms: [
            {
              term_target: "すみません",
              pronunciation: ["sumimasen"],
              specific_note: "引起注意/輕微道歉",
              segments: [{ text: "すみません", meaning: "不好意思", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "すみません、注文をお願いします。",
              translation: "不好意思，我要點餐。",
              segments: [
                { text: "すみません", meaning: "不好意思", tail: "、" },
                {
                  text: "注文",
                  furigana: "ちゅうもん",
                  meaning: "點餐/訂購",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "麻煩了/請求",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "すみません、駅はどこですか。",
              translation: "請問一下，車站在哪裡？",
              segments: [
                { text: "すみません", meaning: "不好意思", tail: "、" },
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "あ、すみません。",
              translation: "啊，不好意思 (例如撞到人或勞煩別人時)。",
              segments: [
                { text: "あ", meaning: "啊", tail: "、" },
                { text: "すみません", meaning: "對不起", tail: "。" },
              ],
            },
            {
              sentence: "すみません、通ります。",
              translation: "不好意思，借過一下。",
              segments: [
                { text: "すみません", meaning: "不好意思", tail: "、" },
                {
                  text: "通ります",
                  furigana: "とおります",
                  meaning: "通過",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "日本最萬用的詞，可用於道歉、道謝或叫人。",
          image_file: "excuse_me.png",
        },
        {
          id: "greet-007",
          term_zh: "我不懂",
          related_terms: [
            {
              term_target: "わかりません",
              pronunciation: ["wakarimasen"],
              specific_note: "不明白",
              segments: [
                { text: "わかり", meaning: "明白/懂", tail: "" },
                { text: "ません", meaning: "不 (否定)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "すみません、日本語がわかりません。",
              translation: "抱歉，我不懂日文。",
              segments: [
                { text: "すみません", meaning: "抱歉", tail: "、" },
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "わかりません", meaning: "不懂", tail: "。" },
              ],
            },
            {
              sentence: "意味がよくわかりません。",
              translation: "不太懂這是什麼意思。",
              segments: [
                { text: "意味", furigana: "いみ", meaning: "意思", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "よく", meaning: "好好地/很", tail: " " },
                { text: "わかりません", meaning: "不懂", tail: "。" },
              ],
            },
            {
              sentence: "いいえ、わかりません。",
              translation: "不，我不知道 (回答問題時)。",
              segments: [
                { text: "いいえ", meaning: "不", tail: "、" },
                { text: "わかりません", meaning: "不知道", tail: "。" },
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
              term_target: "トイレはどこですか",
              pronunciation: ["toire wa doko desu ka"],
              specific_note: "",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "すみません、トイレはどこですか。",
              translation: "不好意思，請問廁所在哪裡？",
              segments: [
                { text: "すみません", meaning: "不好意思", tail: "、" },
                { text: "トイレ", meaning: "廁所", tail: "" },
                { text: "は", meaning: "在", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "この近くにトイレはありますか。",
              translation: "這附近有廁所嗎？",
              segments: [
                { text: "この", meaning: "這", tail: " " },
                { text: "近く", furigana: "ちかく", meaning: "附近", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "トイレ", meaning: "廁所", tail: "" },
                { text: "は", meaning: "(強調)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "トイレを借りてもいいですか。",
              translation: "可以借用一下廁所嗎？(便利商店常用)",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "借りて", furigana: "かりて", meaning: "借", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "ですか", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日本通常講「トイレ」(Toilet) 即可，手洗い (Temarai) 較文雅。",
          image_file: "where_bathroom.png",
        },
        {
          id: "greet-010",
          term_zh: "多少錢？",
          related_terms: [
            {
              term_target: "いくらですか",
              pronunciation: ["ikura desu ka"],
              specific_note: "",
              segments: [
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "です", meaning: "是", tail: "" },
                { text: "か", meaning: "嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これはいくらですか。",
              translation: "這個多少錢？",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "全部でいくらですか。",
              translation: "全部總共多少錢？",
              segments: [
                { text: "全部", furigana: "ぜんぶ", meaning: "全部", tail: "" },
                { text: "で", meaning: "合計用", tail: " " },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "そのランチはいくらですか。",
              translation: "那份午餐套餐多少錢？",
              segments: [
                { text: "その", meaning: "那個", tail: " " },
                { text: "ランチ", meaning: "午餐", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "購物結帳必備。",
          image_file: "how_much.png",
        },
        {
          id: "greet-011",
          term_zh: "我想要這個",
          related_terms: [
            {
              term_target: "これをください",
              pronunciation: ["kore o kudasai"],
              specific_note: "購買時",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: "" },
                { text: "ください", meaning: "請給我", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "はい、これをください。",
              translation: "好，我要買這個 (請給我這個)。",
              segments: [
                { text: "はい", meaning: "好", tail: "、" },
                { text: "これ", meaning: "這個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "あれをください。",
              translation: "我要那個 (指著遠處)。",
              segments: [
                { text: "あれ", meaning: "那個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "このセットをください。",
              translation: "我要這個套餐。",
              segments: [
                { text: "この", meaning: "這個", tail: " " },
                { text: "セット", meaning: "套餐/組合", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
          ],
          usage_note:
            "在日本點餐或購物時，比起說「我想要(want)」，說「請給我(give me)」更自然。",
          image_file: "i_want_this.png",
        },
        {
          id: "greet-012",
          term_zh: "請給我...",
          related_terms: [
            {
              term_target: "...をください",
              pronunciation: ["...o kudasai"],
              specific_note: "",
              segments: [
                { text: "...", meaning: "...", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お水をください。",
              translation: "請給我水。",
              segments: [
                {
                  text: "お水",
                  furigana: "おみず",
                  meaning: "水 (禮貌)",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "メニューをください。",
              translation: "請給我菜單。",
              segments: [
                { text: "メニュー", meaning: "菜單", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "レシートをください。",
              translation: "請給我收據/發票。",
              segments: [
                { text: "レシート", meaning: "收據", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
          ],
          usage_note: "把想要的東西名詞放在前面即可。",
          image_file: "please_give_me.png",
        },
        {
          id: "greet-013",
          term_zh: "這是什麼？",
          related_terms: [
            {
              term_target: "これは何ですか",
              pronunciation: ["kore wa nan desu ka"],
              specific_note: "",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは何ですか。",
              translation: "這是什麼？",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "中身は何ですか。",
              translation: "裡面是什麼？(問食物內餡時)",
              segments: [
                {
                  text: "中身",
                  furigana: "なかみ",
                  meaning: "內容物/裡面",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "これは日本語で何ですか。",
              translation: "這個用日文怎麼說(是什麼)？",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "",
                },
                { text: "で", meaning: "用", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "指著東西問最快。",
          image_file: "what_is_this.png",
        },
        {
          id: "greet-014",
          term_zh: "請幫我",
          related_terms: [
            {
              term_target: "手伝ってください",
              pronunciation: ["tetsudatte kudasai"],
              specific_note: "請求協助",
              segments: [
                {
                  text: "手伝って",
                  furigana: "てつだって",
                  meaning: "幫忙",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ちょっと手伝ってください。",
              translation: "請幫我一下。",
              segments: [
                { text: "ちょっと", meaning: "稍微/一下", tail: " " },
                {
                  text: "手伝って",
                  furigana: "てつだって",
                  meaning: "幫忙",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "荷物を運ぶのを手伝ってください。",
              translation: "請幫我搬行李。",
              segments: [
                { text: "荷物", furigana: "にもつ", meaning: "行李", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "運ぶ", furigana: "はこぶ", meaning: "搬運", tail: "" },
                { text: "の", meaning: "這件事", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "手伝って",
                  furigana: "てつだって",
                  meaning: "幫忙",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "すみません、手伝ってもらえませんか。",
              translation: "不好意思，能請你幫個忙嗎？(更委婉)",
              segments: [
                { text: "すみません", meaning: "不好意思", tail: "、" },
                {
                  text: "手伝って",
                  furigana: "てつだって",
                  meaning: "幫忙",
                  tail: "",
                },
                { text: "もらえませんか", meaning: "能請你...嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「手伝う」是指幫忙做某事。如果是遇到危險要喊救命，請說「助けて (tasukete)」。",
          image_file: "help_me.png",
        },
        {
          id: "greet-015",
          term_zh: "你可以再說一次嗎？",
          related_terms: [
            {
              term_target: "もう一度お願いします",
              pronunciation: ["mou ichido onegaishimasu"],
              specific_note: "",
              segments: [
                { text: "もう", meaning: "再/另外", tail: "" },
                { text: "一度", furigana: "いちど", meaning: "一次", tail: "" },
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "拜託了",
                  tail: "",
                },
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
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "拜託了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "もう一度言ってもらえますか。",
              translation: "可以請你再說一遍嗎？",
              segments: [
                { text: "もう", meaning: "再", tail: "" },
                { text: "一度", furigana: "いちど", meaning: "一次", tail: "" },
                { text: "言って", furigana: "いって", meaning: "說", tail: "" },
                { text: "もらえますか", meaning: "能請你...嗎", tail: "。" },
              ],
            },
            {
              sentence: "え？もう一度？",
              translation: "蛤？再一次？(對朋友)",
              segments: [
                { text: "え", meaning: "蛤/咦", tail: "？" },
                { text: "もう", meaning: "再", tail: "" },
                {
                  text: "一度",
                  furigana: "いちど",
                  meaning: "一次",
                  tail: "？",
                },
              ],
            },
          ],
          usage_note: "沒聽清楚時很有用，日本人會很樂意重複。",
          image_file: "say_again.png",
        },
        {
          id: "greet-016",
          term_zh: "你可以講慢一點嗎？",
          related_terms: [
            {
              term_target: "ゆっくり話してください",
              pronunciation: ["yukkuri hanashite kudasai"],
              specific_note: "",
              segments: [
                { text: "ゆっくり", meaning: "慢慢地", tail: "" },
                {
                  text: "話して",
                  furigana: "はなして",
                  meaning: "說話",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "すみません、もっとゆっくり話してください。",
              translation: "不好意思，請再講慢一點。",
              segments: [
                { text: "すみません", meaning: "不好意思", tail: "、" },
                { text: "もっと", meaning: "更", tail: " " },
                { text: "ゆっくり", meaning: "慢慢地", tail: " " },
                {
                  text: "話して",
                  furigana: "はなして",
                  meaning: "說",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "もう少しゆっくりお願いします。",
              translation: "麻煩再稍微慢一點。",
              segments: [
                { text: "もう", meaning: "再", tail: "" },
                {
                  text: "少し",
                  furigana: "すこし",
                  meaning: "一點/稍微",
                  tail: " ",
                },
                { text: "ゆっくり", meaning: "慢慢地", tail: " " },
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "拜託了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "日本語が下手なので、ゆっくり話してください。",
              translation: "我日文不太好，請講慢一點。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "下手", furigana: "へた", meaning: "不擅長", tail: "" },
                { text: "なので", meaning: "因為...", tail: "、" },
                { text: "ゆっくり", meaning: "慢慢地", tail: "" },
                {
                  text: "話して",
                  furigana: "はなして",
                  meaning: "說",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note: "關鍵字是「ゆっくり」(Yukkuri - 慢慢地)。",
          image_file: "speak_slowly.png",
        },
        {
          id: "greet-017",
          term_zh: "原來如此",
          related_terms: [
            {
              term_target: "なるほど",
              pronunciation: ["naruhodo"],
              specific_note: "理解/附和",
              segments: [{ text: "なるほど", meaning: "原來如此", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あ、なるほど。わかりました。",
              translation: "啊，原來如此，我懂了。",
              segments: [
                { text: "あ", meaning: "啊", tail: "、" },
                { text: "なるほど", meaning: "原來如此", tail: "。" },
                { text: "わかりました", meaning: "明白了", tail: "。" },
              ],
            },
            {
              sentence: "なるほど、それはいいですね。",
              translation: "原來如此，那樣很不錯呢。",
              segments: [
                { text: "なるほど", meaning: "原來如此", tail: "、" },
                { text: "それ", meaning: "那個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いい", meaning: "好的/不錯", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "へえ、なるほど。",
              translation: "嘿～原來是這樣啊 (單純附和)。",
              segments: [
                { text: "へえ", meaning: "嘿~/哇", tail: "、" },
                { text: "なるほど", meaning: "原來如此", tail: "。" },
              ],
            },
          ],
          usage_note: "表示理解對方的邏輯，是很常用的附和語。",
          image_file: "i_see.png",
        },
        {
          id: "greet-018",
          term_zh: "早安",
          related_terms: [
            {
              term_target: "おはようございます",
              pronunciation: ["ohayou gozaimasu"],
              specific_note: "早上問候",
              segments: [
                { text: "おはよう", meaning: "早", tail: "" },
                { text: "ございます", meaning: "(敬語結尾)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "おはようございます。",
              translation: "早安 (有禮貌)。",
              segments: [
                { text: "おはよう", meaning: "早", tail: "" },
                { text: "ございます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "田中さん、おはようございます。",
              translation: "田中先生/小姐，早安。",
              segments: [
                { text: "田中", furigana: "たなか", meaning: "田中", tail: "" },
                { text: "さん", meaning: "先生/小姐", tail: "、" },
                { text: "おはよう", meaning: "早", tail: "" },
                { text: "ございます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "おはよう！",
              translation: "早！(對朋友/家人/晚輩)。",
              segments: [{ text: "おはよう", meaning: "早", tail: "！" }],
            },
          ],
          usage_note: "通常在早上10點或11點前使用。",
          image_file: "good_morning.png",
        },
        {
          id: "greet-019",
          term_zh: "晚上好 (晚安)",
          related_terms: [
            {
              term_target: "こんばんは",
              pronunciation: ["konbanwa"],
              specific_note: "晚上見面",
              segments: [{ text: "こんばんは", meaning: "晚上好", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "こんばんは、元気ですか。",
              translation: "晚上好，你好嗎？",
              segments: [
                { text: "こんばんは", meaning: "晚上好", tail: "、" },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "精神/健康",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "皆さん、こんばんは。",
              translation: "大家晚安(晚上好)。",
              segments: [
                {
                  text: "皆さん",
                  furigana: "みなさん",
                  meaning: "大家",
                  tail: "、",
                },
                { text: "こんばんは", meaning: "晚上好", tail: "。" },
              ],
            },
            {
              sentence: "あ、こんばんは。",
              translation: "啊，晚上好 (晚上遇到鄰居)。",
              segments: [
                { text: "あ", meaning: "啊", tail: "、" },
                { text: "こんばんは", meaning: "晚上好", tail: "。" },
              ],
            },
          ],
          usage_note:
            "這是晚上見面時的招呼。如果是睡前要說「晚安」，請用「おやすみなさい」。",
          image_file: "good_evening.png",
        },
        {
          id: "greet-020",
          term_zh: "再見",
          related_terms: [
            {
              term_target: "さようなら",
              pronunciation: ["sayounara"],
              specific_note: "道別",
              segments: [{ text: "さようなら", meaning: "再見", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "先生、さようなら。",
              translation: "老師，再見 (學校常用)。",
              segments: [
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "、",
                },
                { text: "さようなら", meaning: "再見", tail: "。" },
              ],
            },
            {
              sentence: "じゃあ、またね。",
              translation: "那，下次見囉 (朋友常用)。",
              segments: [
                { text: "じゃあ", meaning: "那麼", tail: "、" },
                { text: "また", meaning: "再次/下次", tail: "" },
                { text: "ね", meaning: "吧/喔", tail: "。" },
              ],
            },
            {
              sentence: "お先に失礼します。",
              translation: "我先走了 (職場必備，下班時說)。",
              segments: [
                { text: "お先", furigana: "おさき", meaning: "先", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                {
                  text: "失礼",
                  furigana: "しつれい",
                  meaning: "失禮/不好意思",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「さようなら」有時給人很久不見的感覺。朋友間常說「またね (matane)」，公司說「お先に失礼します」。",
          image_file: "goodbye.png",
        },
        {
          id: "greet-021",
          term_zh: "你好嗎",
          related_terms: [
            {
              term_target: "お元気ですか",
              pronunciation: ["ogenki desu ka"],
              specific_note: "問候健康",
              segments: [
                { text: "お", meaning: "(尊稱)", tail: "" },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "精神/健康",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お元気ですか。",
              translation: "你好嗎？(身體好嗎？)",
              segments: [
                { text: "お", meaning: "(尊稱)", tail: "" },
                { text: "元気", furigana: "げんき", meaning: "健康", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "久しぶり！元気？",
              translation: "好久不見！你好嗎？(對朋友)。",
              segments: [
                {
                  text: "久しぶり",
                  furigana: "ひさしぶり",
                  meaning: "好久不見",
                  tail: "！",
                },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "精神/好",
                  tail: "？",
                },
              ],
            },
            {
              sentence: "はい、元気です。",
              translation: "是的，我很好。",
              segments: [
                { text: "はい", meaning: "是的", tail: "、" },
                { text: "元気", furigana: "げんき", meaning: "健康", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日文中通常用於「許久不見」的人。如果是天天見面的同事同學，通常只說「おはよう」(早安) 而不問你好嗎。",
          image_file: "how_are_you.png",
        },
        {
          id: "greet-022",
          term_zh: "真的嗎",
          related_terms: [
            {
              term_target: "本当ですか",
              pronunciation: ["hontou desu ka"],
              specific_note: "疑問/驚訝",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "えっ、本当ですか。",
              translation: "欸？真的嗎？",
              segments: [
                { text: "えっ", meaning: "欸", tail: "、" },
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "それは本当ですか。",
              translation: "那件事是真的嗎？",
              segments: [
                { text: "それ", meaning: "那個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "マジで？",
              translation: "真假？(年輕人口語，很常用)。",
              segments: [
                { text: "マジ", meaning: "認真/真假", tail: "" },
                { text: "で", meaning: "地", tail: "？" },
              ],
            },
          ],
          usage_note:
            "標準說法是「本当ですか」，朋友間常說「マジで？」(Majide)。",
          image_file: "really_q.png",
        },
        {
          id: "greet-023",
          term_zh: "太棒了",
          related_terms: [
            {
              term_target: "すごい",
              pronunciation: ["sugoi"],
              specific_note: "厲害/讚嘆",
              segments: [{ text: "すごい", meaning: "厲害的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "それはすごいですね！",
              translation: "那真是太厲害了！",
              segments: [
                { text: "それ", meaning: "那個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "すごい", meaning: "厲害", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "！" },
              ],
            },
            {
              sentence: "わあ、すごい！",
              translation: "哇，好厲害！",
              segments: [
                { text: "わあ", meaning: "哇", tail: "、" },
                { text: "すごい", meaning: "厲害", tail: "！" },
              ],
            },
            {
              sentence: "日本語がすごい上手ですね。",
              translation: "你的日文超棒的耶。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "すごい", meaning: "厲害/非常", tail: " " },
                {
                  text: "上手",
                  furigana: "じょうず",
                  meaning: "擅長",
                  tail: "",
                },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
          ],
          usage_note: "看到任何厲害的、驚人的事物都可以說「すごい」(Sugoi)。",
          image_file: "awesome.png",
        },
        {
          id: "greet-024",
          term_zh: "很高興認識你",
          related_terms: [
            {
              term_target: "はじめまして",
              pronunciation: ["hajimemashite"],
              specific_note: "初次見面",
              segments: [
                { text: "はじめまして", meaning: "初次見面", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "はじめまして、田中です。",
              translation: "初次見面，我是田中。",
              segments: [
                { text: "はじめまして", meaning: "初次見面", tail: "、" },
                { text: "田中", furigana: "たなか", meaning: "田中", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "どうぞよろしく。",
              translation: "請多指教 (很高興認識你)。",
              segments: [
                { text: "どうぞ", meaning: "請", tail: " " },
                { text: "よろしく", meaning: "指教/關照", tail: "。" },
              ],
            },
            {
              sentence: "こちらこそ、はじめまして。",
              translation: "哪裡哪裡，我也很高興認識你。",
              segments: [
                { text: "こちら", meaning: "我這方", tail: "" },
                { text: "こそ", meaning: "才", tail: "、" },
                { text: "はじめまして", meaning: "初次見面", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日本人通常會說「はじめまして」(開頭) 和「よろしくおねがいします」(結尾)。",
          image_file: "nice_to_meet_you.png",
        },
        {
          id: "greet-025",
          term_zh: "真可惜",
          related_terms: [
            {
              term_target: "残念です",
              pronunciation: ["zannen desu"],
              specific_note: "遺憾",
              segments: [
                {
                  text: "残念",
                  furigana: "ざんねん",
                  meaning: "遺憾/可惜",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "それは残念ですね。",
              translation: "那真是太可惜了 (聽到壞消息)。",
              segments: [
                { text: "それ", meaning: "那個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "残念",
                  furigana: "ざんねん",
                  meaning: "可惜",
                  tail: "",
                },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "行けなくて残念です。",
              translation: "很遺憾我不能去。",
              segments: [
                {
                  text: "行けなくて",
                  furigana: "いけなくて",
                  meaning: "不能去",
                  tail: " ",
                },
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
              sentence: "あー、残念！",
              translation: "啊～真可惜！(例如比賽輸了或賣完了)。",
              segments: [
                { text: "あー", meaning: "啊", tail: "、" },
                {
                  text: "残念",
                  furigana: "ざんねん",
                  meaning: "可惜",
                  tail: "！",
                },
              ],
            },
          ],
          usage_note: "對無法實現的事、壞消息表示同情或遺憾。",
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
          term_zh: "它 (那個)",
          related_terms: [
            {
              term_target: "それ",
              pronunciation: ["sore"],
              specific_note: "指事物",
              segments: [{ text: "それ", meaning: "那個/它", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "それはいいですね。",
              translation: "那樣(它)很不錯呢。",
              segments: [
                { text: "それ", meaning: "那", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いい", meaning: "好的", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "それは何ですか。",
              translation: "那(它)是什麼？",
              segments: [
                { text: "それ", meaning: "那", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "それは面白い話です。",
              translation: "那(它)是個有趣的故事。",
              segments: [
                { text: "それ", meaning: "那", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "面白い",
                  furigana: "おもしろい",
                  meaning: "有趣的",
                  tail: " ",
                },
                {
                  text: "話",
                  furigana: "はなし",
                  meaning: "故事/話",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "日文沒有單純的「It」。指代剛提過的事物常用「それ」。",
          image_file: "that.png",
        },
        {
          id: "pro-02",
          term_zh: "我",
          related_terms: [
            {
              term_target: "私",
              pronunciation: ["watashi"],
              specific_note: "通用",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は学生です。",
              translation: "我是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
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
              sentence: "私がやります。",
              translation: "我來做 (強調是我)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "が", meaning: "(強調主詞)", tail: " " },
                { text: "やります", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "私はコーヒーが好きです。",
              translation: "我喜歡咖啡。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "コーヒー", meaning: "咖啡", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "男女通用。男性對朋友可用「僕 (boku)」或「俺 (ore)」。",
          image_file: "i.png",
        },
        {
          id: "pro-03",
          term_zh: "你",
          related_terms: [
            {
              term_target: "あなた",
              pronunciation: ["anata"],
              specific_note: "一般稱呼",
              segments: [{ text: "あなた", meaning: "你", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あなたは学生ですか。",
              translation: "你是學生嗎？",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "これはあなたのペンですか。",
              translation: "這是你的筆嗎？",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "あなた", meaning: "你", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "ペン", meaning: "筆", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "あなたも行きますか。",
              translation: "你也要去嗎？",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "も", meaning: "也", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日本人知道對方姓氏時，通常直接叫「田中先生」而不說「你」。",
          image_file: "you.png",
        },
        {
          id: "pro-04",
          term_zh: "他",
          related_terms: [
            {
              term_target: "彼",
              pronunciation: ["kare"],
              specific_note: "男性",
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
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
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
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "とても", meaning: "非常", tail: " " },
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
              sentence: "彼はまだ来ません。",
              translation: "他還沒來。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "まだ", meaning: "還", tail: " " },
                {
                  text: "来ません",
                  furigana: "きません",
                  meaning: "不來(沒來)",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "「彼」在特定語境下也有「男朋友」的意思。",
          image_file: "he.png",
        },
        {
          id: "pro-05",
          term_zh: "他的",
          related_terms: [
            {
              term_target: "彼の",
              pronunciation: ["kare no"],
              specific_note: "",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "の", meaning: "的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは彼の鞄です。",
              translation: "這是他的包包。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "鞄", furigana: "かばん", meaning: "包包", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼の名前は何ですか。",
              translation: "他的名字叫什麼？",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "名前", furigana: "なまえ", meaning: "名字", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "彼の日本語は上手です。",
              translation: "他的日文很好。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "上手",
                  furigana: "じょうず",
                  meaning: "擅長/好",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "所有格，加上「の」。",
          image_file: "his.png",
        },
        {
          id: "pro-06",
          term_zh: "我們",
          related_terms: [
            {
              term_target: "私たち",
              pronunciation: ["watashitachi"],
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
                { text: "たち", meaning: "們", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "家族", furigana: "かぞく", meaning: "家人", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "私たちは台湾人です。",
              translation: "我們是台灣人。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "台湾人",
                  furigana: "たいわんじん",
                  meaning: "台灣人",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これから私たちは食事に行きます。",
              translation: "等一下我們要去吃飯。",
              segments: [
                { text: "これから", meaning: "現在/接下來", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "食事",
                  furigana: "しょくじ",
                  meaning: "吃飯",
                  tail: "",
                },
                { text: "に", meaning: "去(目的)", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "加上「たち (tachi)」變成複數。",
          image_file: "we.png",
        },
        {
          id: "pro-07",
          term_zh: "她",
          related_terms: [
            {
              term_target: "彼女",
              pronunciation: ["kanojo"],
              specific_note: "女性",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼女は私の姉です。",
              translation: "她是我的姊姊。",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "姉", furigana: "あね", meaning: "姊姊", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼女は歌が上手です。",
              translation: "她很會唱歌。",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "歌", furigana: "うた", meaning: "歌", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                {
                  text: "上手",
                  furigana: "じょうず",
                  meaning: "擅長",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼女は医者です。",
              translation: "她是一位醫生。",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "医者", furigana: "いしゃ", meaning: "醫生", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "「彼女」在特定語境下也有「女朋友」的意思。",
          image_file: "she.png",
        },
        {
          id: "pro-08",
          term_zh: "他們",
          related_terms: [
            {
              term_target: "彼ら",
              pronunciation: ["karera"],
              specific_note: "",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "ら", meaning: "們", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼らはサッカーをしています。",
              translation: "他們正在踢足球。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "ら", meaning: "們", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "サッカー", meaning: "足球", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "して", meaning: "做", tail: "" },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "彼らは私の友達です。",
              translation: "他們是我的朋友。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "ら", meaning: "們", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼らはどこに行きましたか。",
              translation: "他們去哪裡了？",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "ら", meaning: "們", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "に", meaning: "往", tail: " " },
                {
                  text: "行きました",
                  furigana: "いきました",
                  meaning: "去了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "如果群體中全是女生可用「彼女たち」，混和或男性群體用「彼ら」。",
          image_file: "they.png",
        },
        {
          id: "pro-09",
          term_zh: "這個",
          related_terms: [
            {
              term_target: "これ",
              pronunciation: ["kore"],
              specific_note: "近處",
              segments: [{ text: "これ", meaning: "這個", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "これは私のです。",
              translation: "這個是我的。",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これはおいしいですね。",
              translation: "這個很好吃耶。",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "おいしい", meaning: "好吃", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "これにします。",
              translation: "我要這個 (點餐時)。",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "に", meaning: "(選擇)", tail: " " },
                { text: "します", meaning: "決定做/要", tail: "。" },
              ],
            },
          ],
          usage_note: "指離說話者很近的東西。",
          image_file: "this.png",
        },
        {
          id: "pro-10",
          term_zh: "那個",
          related_terms: [
            {
              term_target: "あれ",
              pronunciation: ["are"],
              specific_note: "遠處",
              segments: [{ text: "あれ", meaning: "那個(遠)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あれは何ですか。",
              translation: "那個是什麼？(指遠方)",
              segments: [
                { text: "あれ", meaning: "那個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "あれは私の車です。",
              translation: "那輛是我的車。",
              segments: [
                { text: "あれ", meaning: "那個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "車", furigana: "くるま", meaning: "車", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "あれを見てください。",
              translation: "請看那邊。",
              segments: [
                { text: "あれ", meaning: "那個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "見て", furigana: "みて", meaning: "看", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note:
            "指離雙方都很遠的東西。如果是「離聽話者近」的那個，日文要說「それ (Sore)」。",
          image_file: "that.png",
        },
        {
          id: "pro-11",
          term_zh: "她的",
          related_terms: [
            {
              term_target: "彼女の",
              pronunciation: ["kanojo no"],
              specific_note: "",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "の", meaning: "的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼女の髪は長いです。",
              translation: "她的頭髮很長。",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "髪", furigana: "かみ", meaning: "頭髮", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "長い", furigana: "ながい", meaning: "長的", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これは彼女の本です。",
              translation: "這是她的書。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼女の笑顔は素敵です。",
              translation: "她的笑容很迷人。",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "笑顔", furigana: "えがお", meaning: "笑容", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "素敵",
                  furigana: "すてき",
                  meaning: "美好的/迷人的",
                  tail: "",
                },
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
              pronunciation: ["anata no"],
              specific_note: "",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "の", meaning: "的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "あなたの名前は何ですか。",
              translation: "你的名字是什麼？",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "名前", furigana: "なまえ", meaning: "名字", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "これはあなたの傘ですか。",
              translation: "這是你的傘嗎？",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "あなた", meaning: "你", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "傘", furigana: "かさ", meaning: "傘", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "あなたの趣味は何ですか。",
              translation: "你的興趣是什麼？",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "趣味", furigana: "しゅみ", meaning: "興趣", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "如果知道對方的姓氏，說「田中先生的(Tanaka san no)」會比「你的(Anata no)」更有禮貌。",
          image_file: "your.png",
        },
        {
          id: "pro-13",
          term_zh: "他們的",
          related_terms: [
            {
              term_target: "彼らの",
              pronunciation: ["karera no"],
              specific_note: "",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "ら", meaning: "們", tail: "" },
                { text: "の", meaning: "的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼らの家は大きいです。",
              translation: "他們的家很大。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "ら", meaning: "們", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "家", furigana: "いえ", meaning: "家/房子", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "大きい",
                  furigana: "おおきい",
                  meaning: "大的",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "私は彼らの両親を知っています。",
              translation: "我認識他們的父母。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "ら", meaning: "們", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "両親",
                  furigana: "りょうしん",
                  meaning: "雙親",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "知って",
                  furigana: "しって",
                  meaning: "知道/認識",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
            {
              sentence: "彼らの先生は優しいです。",
              translation: "他們的老師很溫柔。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "ら", meaning: "們", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "優しい",
                  furigana: "やさしい",
                  meaning: "溫柔/親切",
                  tail: "",
                },
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
              pronunciation: ["watashitachi no"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "" },
                { text: "の", meaning: "的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ここは私たちの学校です。",
              translation: "這裡是我們的學校。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "ようこそ、私たちの家へ。",
              translation: "歡迎來我們的家。",
              segments: [
                { text: "ようこそ", meaning: "歡迎", tail: "、" },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "へ", meaning: "往", tail: "。" },
              ],
            },
            {
              sentence: "私たちのチームが勝ちました。",
              translation: "我們這隊贏了。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "チーム", meaning: "隊伍", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "勝ちました",
                  furigana: "かちました",
                  meaning: "贏了",
                  tail: "。",
                },
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
              pronunciation: ["korera"],
              specific_note: "近處複數",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "ら", meaning: "些(複數)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これらは私の本です。",
              translation: "這些是我的書。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "ら", meaning: "些", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これらは全部おいしいです。",
              translation: "這些全都很好吃。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "ら", meaning: "些", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "全部", furigana: "ぜんぶ", meaning: "全部", tail: "" },
                { text: "おいしい", meaning: "好吃", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これらは日本のお菓子です。",
              translation: "這些是日本的點心。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "ら", meaning: "些", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "お菓子",
                  furigana: "おかし",
                  meaning: "點心",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "口語中有時會省略「ら」，直接用「これ」代表複數。",
          image_file: "these.png",
        },
        {
          id: "pro-16",
          term_zh: "那些",
          related_terms: [
            {
              term_target: "あれら",
              pronunciation: ["arera"],
              specific_note: "遠處複數",
              segments: [
                { text: "あれ", meaning: "那(遠)", tail: "" },
                { text: "ら", meaning: "些(複數)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "あれらは何ですか。",
              translation: "那些是什麼？",
              segments: [
                { text: "あれ", meaning: "那", tail: "" },
                { text: "ら", meaning: "些", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "あれらは古い建物です。",
              translation: "那些是古老的建築。",
              segments: [
                { text: "あれ", meaning: "那", tail: "" },
                { text: "ら", meaning: "些", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "古い",
                  furigana: "ふるい",
                  meaning: "舊的/古老",
                  tail: " ",
                },
                {
                  text: "建物",
                  furigana: "たてもの",
                  meaning: "建築物",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "あれらは全て100円です。",
              translation: "那些全都是100圓。",
              segments: [
                { text: "あれ", meaning: "那", tail: "" },
                { text: "ら", meaning: "些", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "全て",
                  furigana: "すべて",
                  meaning: "全部",
                  tail: " ",
                },
                {
                  text: "100円",
                  furigana: "ひゃくえん",
                  meaning: "一百圓",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "指離雙方都很遠的複數物品。如果是離聽話者近的那些，用「それら」。",
          image_file: "those.png",
        },
      ],
    },
    {
      id: "verbs-1",
      name: "動詞",
      items: [
        {
          id: "v-01",
          term_zh: "是 / 在",
          related_terms: [
            {
              term_target: "です",
              pronunciation: ["desu"],
              specific_note: "斷定/是",
              segments: [{ text: "です", meaning: "是", tail: "" }],
            },
            {
              term_target: "います",
              pronunciation: ["imasu"],
              specific_note: "存在(人/動物)",
              segments: [{ text: "います", meaning: "在/有", tail: "" }],
            },
            {
              term_target: "あります",
              pronunciation: ["arimasu"],
              specific_note: "存在(物品)",
              segments: [{ text: "あります", meaning: "在/有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "私は学生です。",
              translation: "我是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
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
              sentence: "田中さんはあそこにいます。",
              translation: "田中先生在那裡 (人)。",
              segments: [
                { text: "田中", furigana: "たなか", meaning: "田中", tail: "" },
                { text: "さん", meaning: "先生", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "あそこ", meaning: "那裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "います", meaning: "在", tail: "。" },
              ],
            },
            {
              sentence: "コンビニはあそこにあります。",
              translation: "便利商店在那裡 (建築物)。",
              segments: [
                { text: "コンビニ", meaning: "便利商店", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "あそこ", meaning: "那裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "あります", meaning: "在", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日文的「是」依對象不同而分：名詞用「です」，生物存在用「います」，物品存在用「あります」。",
          image_file: "be.png",
        },
        {
          id: "v-02",
          term_zh: "有（擁有）",
          related_terms: [
            {
              term_target: "あります",
              pronunciation: ["arimasu"],
              specific_note: "擁有/存在",
              segments: [{ text: "あります", meaning: "有", tail: "" }],
            },
            {
              term_target: "持っています",
              pronunciation: ["motteimasu"],
              specific_note: "持有",
              segments: [
                { text: "持っています", meaning: "持有/有", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は車を持っています。",
              translation: "我有一台車 (持有)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "車", furigana: "くるま", meaning: "車", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "持っています",
                  furigana: "もっています",
                  meaning: "持有",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "お金がありません。",
              translation: "我沒有錢。",
              segments: [
                { text: "お金", furigana: "おかね", meaning: "錢", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "ありません", meaning: "沒有", tail: "。" },
              ],
            },
            {
              sentence: "質問があります。",
              translation: "我有一個問題。",
              segments: [
                {
                  text: "質問",
                  furigana: "しつもん",
                  meaning: "問題",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "。" },
              ],
            },
          ],
          usage_note:
            "抽象的事物(如時間、錢)通常用「あります」。具體的物品常用「持っています」。",
          image_file: "have.png",
        },
        {
          id: "v-03",
          term_zh: "去",
          related_terms: [
            {
              term_target: "行きます",
              pronunciation: ["ikimasu"],
              specific_note: "",
              segments: [{ text: "行きます", meaning: "去", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "学校へ行きます。",
              translation: "我要去學校。",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "",
                },
                { text: "へ", meaning: "往(方向)", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "一緒に買い物に行きましょう。",
              translation: "我們一起去買東西吧。",
              segments: [
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "",
                },
                { text: "に", meaning: "地", tail: " " },
                {
                  text: "買い物",
                  furigana: "かいもの",
                  meaning: "購物",
                  tail: "",
                },
                { text: "に", meaning: "去(目的)", tail: " " },
                {
                  text: "行きましょう",
                  furigana: "いきましょう",
                  meaning: "去吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "旅行に行きたいです。",
              translation: "我想要去旅行。",
              segments: [
                {
                  text: "旅行",
                  furigana: "りょこう",
                  meaning: "旅行",
                  tail: "",
                },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きたい",
                  furigana: "いきたい",
                  meaning: "想去",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "目的地後面的助詞可以用「へ (e)」或「に (ni)」。",
          image_file: "go.png",
        },
        {
          id: "v-04",
          term_zh: "得到／拿",
          related_terms: [
            {
              term_target: "もらいます",
              pronunciation: ["moraimasu"],
              specific_note: "接受/收到",
              segments: [{ text: "もらいます", meaning: "收到", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "プレゼントをもらいました。",
              translation: "我收到了禮物。",
              segments: [
                { text: "プレゼント", meaning: "禮物", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "もらいました", meaning: "收到了", tail: "。" },
              ],
            },
            {
              sentence: "これをもらってもいいですか。",
              translation: "這個可以給我(拿走)嗎？",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "もらって", meaning: "拿/收", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "ですか", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "領収書をもらえますか。",
              translation: "可以給我收據嗎？",
              segments: [
                {
                  text: "領収書",
                  furigana: "りょうしゅうしょ",
                  meaning: "收據",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "もらえます", meaning: "能拿/能給", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日文常用「もらいます (Moraimasu)」來表示「Get (收到/得到)」。",
          image_file: "get.png",
        },
        {
          id: "v-05",
          term_zh: "做",
          related_terms: [
            {
              term_target: "します",
              pronunciation: ["shimasu"],
              specific_note: "執行動作",
              segments: [{ text: "します", meaning: "做", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "宿題をします。",
              translation: "做功課。",
              segments: [
                {
                  text: "宿題",
                  furigana: "しゅくだい",
                  meaning: "功課/作業",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "何をしていますか。",
              translation: "你正在做什麼？",
              segments: [
                { text: "何", furigana: "なに", meaning: "什麼", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "して", meaning: "做", tail: "" },
                { text: "います", meaning: "正在", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "サッカーをします。",
              translation: "我要踢足球 (做運動)。",
              segments: [
                { text: "サッカー", meaning: "足球", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "します", meaning: "做/玩", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「名詞 + します」非常萬用，如「運動します (做運動)」、「勉強します (讀書/做學習)」。",
          image_file: "do.png",
        },
        {
          id: "v-06",
          term_zh: "說（講）",
          related_terms: [
            {
              term_target: "言います",
              pronunciation: ["iimasu"],
              specific_note: "說內容",
              segments: [{ text: "言います", meaning: "說", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "もう一度言ってください。",
              translation: "請再說一次。",
              segments: [
                { text: "もう", meaning: "再", tail: "" },
                {
                  text: "一度",
                  furigana: "いちど",
                  meaning: "一次",
                  tail: " ",
                },
                { text: "言って", furigana: "いって", meaning: "說", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "彼は「はい」と言いました。",
              translation: "他說了「好」。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "はい", meaning: "好/是的", tail: "" },
                { text: "と", meaning: "(引用助詞)", tail: " " },
                {
                  text: "言いました",
                  furigana: "いいました",
                  meaning: "說了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "何と言いましたか。",
              translation: "你(剛剛)說了什麼？",
              segments: [
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "と", meaning: "(引用助詞)", tail: " " },
                {
                  text: "言いました",
                  furigana: "いいました",
                  meaning: "說了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "引用說話內容時，使用助詞「と (to)」。",
          image_file: "say.png",
        },
        {
          id: "v-07",
          term_zh: "知道",
          related_terms: [
            {
              term_target: "知っています",
              pronunciation: ["shitteimasu"],
              specific_note: "知道資訊/認識人",
              segments: [
                { text: "知って", furigana: "しって", meaning: "知", tail: "" },
                { text: "います", meaning: "狀態", tail: "" },
              ],
            },
            {
              term_target: "わかります",
              pronunciation: ["wakarimasu"],
              specific_note: "明白/懂",
              segments: [{ text: "わかります", meaning: "明白", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "彼を知っていますか。",
              translation: "你認識(知道)他嗎？",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "知って",
                  furigana: "しって",
                  meaning: "知道",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "そのニュースは知っています。",
              translation: "那則新聞我知道。",
              segments: [
                { text: "その", meaning: "那則", tail: " " },
                { text: "ニュース", meaning: "新聞", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "知って",
                  furigana: "しって",
                  meaning: "知道",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
            {
              sentence: "いいえ、知りません。",
              translation: "不，我不知道。",
              segments: [
                { text: "いいえ", meaning: "不", tail: "、" },
                {
                  text: "知りません",
                  furigana: "しりません",
                  meaning: "不知道",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "肯定時用「知っています」，否定時習慣用「知りません (shirimasen)」。",
          image_file: "know.png",
        },
        {
          id: "v-08",
          term_zh: "想／思考",
          related_terms: [
            {
              term_target: "思います",
              pronunciation: ["omoimasu"],
              specific_note: "覺得/意見",
              segments: [{ text: "思います", meaning: "想/覺得", tail: "" }],
            },
            {
              term_target: "考えます",
              pronunciation: ["kangaemasu"],
              specific_note: "考慮/思考",
              segments: [{ text: "考えます", meaning: "考慮", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "そう思います。",
              translation: "我也這麼覺得。",
              segments: [
                { text: "そう", meaning: "那樣", tail: " " },
                {
                  text: "思います",
                  furigana: "おもいます",
                  meaning: "想/覺得",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "いいと思います。",
              translation: "我覺得不錯。",
              segments: [
                { text: "いい", meaning: "好的", tail: " " },
                { text: "と", meaning: "(引用助詞)", tail: " " },
                {
                  text: "思います",
                  furigana: "おもいます",
                  meaning: "想/覺得",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "よく考えてください。",
              translation: "請好好考慮一下。",
              segments: [
                { text: "よく", meaning: "好好地", tail: " " },
                {
                  text: "考えて",
                  furigana: "かんがえて",
                  meaning: "考慮",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note:
            "表達意見時多用「思います (omoimasu)」。邏輯思考用「考えます (kangaemasu)」。",
          image_file: "think.png",
        },
        {
          id: "v-09",
          term_zh: "看見",
          related_terms: [
            {
              term_target: "見ます",
              pronunciation: ["mimasu"],
              specific_note: "看/觀賞",
              segments: [{ text: "見ます", meaning: "看", tail: "" }],
            },
            {
              term_target: "見えます",
              pronunciation: ["miemasu"],
              specific_note: "看得到(能力)",
              segments: [{ text: "見えます", meaning: "看得到", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "映画を見ました。",
              translation: "我看了電影。",
              segments: [
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見ました",
                  furigana: "みました",
                  meaning: "看了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "富士山が見えます。",
              translation: "看得到富士山。",
              segments: [
                {
                  text: "富士山",
                  furigana: "ふじさん",
                  meaning: "富士山",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "見えます",
                  furigana: "みえます",
                  meaning: "看得到",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "黒板の字が見えません。",
              translation: "我看不到黑板的字。",
              segments: [
                {
                  text: "黒板",
                  furigana: "こくばん",
                  meaning: "黑板",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                { text: "字", furigana: "じ", meaning: "字", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "見えません",
                  furigana: "みえません",
                  meaning: "看不到",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "主動去看用「見ます」，自然映入眼簾或能力上可見用「見えます」。",
          image_file: "see.png",
        },
        {
          id: "v-10",
          term_zh: "做出（製造）",
          related_terms: [
            {
              term_target: "作ります",
              pronunciation: ["tsukurimasu"],
              specific_note: "",
              segments: [{ text: "作ります", meaning: "製作", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "夕食を作ります。",
              translation: "我要做晚餐。",
              segments: [
                {
                  text: "夕食",
                  furigana: "ゆうしょく",
                  meaning: "晚餐",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "作ります",
                  furigana: "つくります",
                  meaning: "製作",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ケーキを作ったことがありますか。",
              translation: "你有做過蛋糕嗎？",
              segments: [
                { text: "ケーキ", meaning: "蛋糕", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "作った",
                  furigana: "つくった",
                  meaning: "做了",
                  tail: " ",
                },
                { text: "こと", meaning: "經驗/事", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "日本で作られました。",
              translation: "這是在日本製造的。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "で", meaning: "在", tail: " " },
                {
                  text: "作られました",
                  furigana: "つくられました",
                  meaning: "被製造",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "泛指製作料理、物品。",
          image_file: "make.png",
        },
        {
          id: "v-11",
          term_zh: "來",
          related_terms: [
            {
              term_target: "来ます",
              pronunciation: ["kimasu"],
              specific_note: "",
              segments: [{ text: "来ます", meaning: "來", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ここに来てください。",
              translation: "請來這裡。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "に", meaning: "到", tail: " " },
                { text: "来て", furigana: "きて", meaning: "來", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "また来ます。",
              translation: "我會再來的。",
              segments: [
                { text: "また", meaning: "再次", tail: " " },
                {
                  text: "来ます",
                  furigana: "きます",
                  meaning: "來",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "バスが来ました。",
              translation: "公車來了。",
              segments: [
                { text: "バス", meaning: "公車", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "移動到說話者所在的地方。",
          image_file: "come.png",
        },
        {
          id: "v-12",
          term_zh: "需要",
          related_terms: [
            {
              term_target: "要ります",
              pronunciation: ["irimasu"],
              specific_note: "需要(動詞)",
              segments: [{ text: "要ります", meaning: "需要", tail: "" }],
            },
            {
              term_target: "必要です",
              pronunciation: ["hitsuyou desu"],
              specific_note: "必要的(形容詞)",
              segments: [
                {
                  text: "必要",
                  furigana: "ひつよう",
                  meaning: "必要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "袋は要りますか。",
              translation: "請問需要袋子嗎？(商店用語)",
              segments: [
                { text: "袋", furigana: "ふくろ", meaning: "袋子", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "要ります",
                  furigana: "いります",
                  meaning: "需要",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "お金が要ります。",
              translation: "需要錢。",
              segments: [
                { text: "お金", furigana: "おかね", meaning: "錢", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "要ります",
                  furigana: "いります",
                  meaning: "需要",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "予約が必要です。",
              translation: "預約是必要的 (需要預約)。",
              segments: [
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "必要",
                  furigana: "ひつよう",
                  meaning: "必要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "「要ります」的助詞通常用「が (ga)」。",
          image_file: "need.png",
        },
        {
          id: "v-13",
          term_zh: "使用",
          related_terms: [
            {
              term_target: "使います",
              pronunciation: ["tsukaimasu"],
              specific_note: "",
              segments: [{ text: "使います", meaning: "使用", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "箸を使います。",
              translation: "使用筷子。",
              segments: [
                { text: "箸", furigana: "はし", meaning: "筷子", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "使います",
                  furigana: "つかいます",
                  meaning: "使用",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "これを使ってもいいですか。",
              translation: "我可以用這個嗎？",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "使って",
                  furigana: "つかって",
                  meaning: "用",
                  tail: "",
                },
                { text: "も", meaning: "也", tail: "" },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "ですか", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "クレジットカードは使えますか。",
              translation: "可以用信用卡嗎？(能力/可能性)",
              segments: [
                { text: "クレジットカード", meaning: "信用卡", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "使えます",
                  furigana: "つかえます",
                  meaning: "能用",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "利用工具或手段。",
          image_file: "use.png",
        },
        {
          id: "v-14",
          term_zh: "找到",
          related_terms: [
            {
              term_target: "見つけます",
              pronunciation: ["mitsukemasu"],
              specific_note: "發現/找到",
              segments: [{ text: "見つけます", meaning: "找到", tail: "" }],
            },
            {
              term_target: "探します",
              pronunciation: ["sagashimasu"],
              specific_note: "尋找(過程)",
              segments: [{ text: "探します", meaning: "尋找", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "鍵を見つけました。",
              translation: "我找到鑰匙了。",
              segments: [
                { text: "鍵", furigana: "かぎ", meaning: "鑰匙", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見つけました",
                  furigana: "みつけました",
                  meaning: "找到了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "仕事を探しています。",
              translation: "我正在找工作。",
              segments: [
                { text: "仕事", furigana: "しごと", meaning: "工作", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "探して",
                  furigana: "さがして",
                  meaning: "尋找",
                  tail: "",
                },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "見つかりましたか。",
              translation: "找到了嗎？(自動詞，指東西被發現)",
              segments: [
                {
                  text: "見つかりました",
                  furigana: "みつかりました",
                  meaning: "被發現/找到",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「探します」是尋找的過程，「見つけます」是發現的那一刻。",
          image_file: "find.png",
        },
        {
          id: "v-15",
          term_zh: "給",
          related_terms: [
            {
              term_target: "あげます",
              pronunciation: ["agemasu"],
              specific_note: "我給別人",
              segments: [{ text: "あげます", meaning: "給", tail: "" }],
            },
            {
              term_target: "くれます",
              pronunciation: ["kuremasu"],
              specific_note: "別人給我",
              segments: [{ text: "くれます", meaning: "給(我)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "友達にプレゼントをあげます。",
              translation: "我要給朋友禮物。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "に", meaning: "給(對象)", tail: " " },
                { text: "プレゼント", meaning: "禮物", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "あげます", meaning: "給", tail: "。" },
              ],
            },
            {
              sentence: "彼がこれをくれました。",
              translation: "他給了我這個。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "これ", meaning: "這個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "くれました", meaning: "給了(我)", tail: "。" },
              ],
            },
            {
              sentence: "水をください。",
              translation: "請給我水。",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日文的「給」有方向性，自己給別人用「あげます」，別人給自己用「くれます」。",
          image_file: "give.png",
        },
        {
          id: "v-16",
          term_zh: "告訴",
          related_terms: [
            {
              term_target: "教えます",
              pronunciation: ["oshiemasu"],
              specific_note: "教導/告知",
              segments: [{ text: "教えます", meaning: "教/告訴", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "名前を教えてください。",
              translation: "請告訴我名字。",
              segments: [
                { text: "名前", furigana: "なまえ", meaning: "名字", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "教えて",
                  furigana: "おしえて",
                  meaning: "告訴",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "道を教えてもらえますか。",
              translation: "可以告訴我路怎麼走嗎？",
              segments: [
                { text: "道", furigana: "みち", meaning: "路", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "教えて",
                  furigana: "おしえて",
                  meaning: "告訴",
                  tail: "",
                },
                { text: "もらえます", meaning: "能(請你)做", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "彼に伝えておきます。",
              translation: "我會轉告(告訴)他。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "に", meaning: "對(對象)", tail: " " },
                {
                  text: "伝えて",
                  furigana: "つたえて",
                  meaning: "傳達",
                  tail: "",
                },
                { text: "おきます", meaning: "事先做", tail: "。" },
              ],
            },
          ],
          usage_note: "告知資訊、電話、名字都常用「教えます」。",
          image_file: "tell.png",
        },
        {
          id: "v-17",
          term_zh: "工作",
          related_terms: [
            {
              term_target: "働きます",
              pronunciation: ["hatarakimasu"],
              specific_note: "勞動",
              segments: [{ text: "働きます", meaning: "工作", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "私は銀行で働いています。",
              translation: "我在銀行工作。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "銀行",
                  furigana: "ぎんこう",
                  meaning: "銀行",
                  tail: "",
                },
                { text: "で", meaning: "在", tail: " " },
                {
                  text: "働いて",
                  furigana: "はたらいて",
                  meaning: "工作",
                  tail: "",
                },
                { text: "います", meaning: "正在/狀態", tail: "。" },
              ],
            },
            {
              sentence: "明日は仕事です。",
              translation: "明天要工作 (明天是工作日)。",
              segments: [
                { text: "明日", furigana: "あした", meaning: "明天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "仕事", furigana: "しごと", meaning: "工作", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "働きすぎないでください。",
              translation: "請不要工作過度。",
              segments: [
                {
                  text: "働き",
                  furigana: "はたらき",
                  meaning: "工作",
                  tail: "",
                },
                { text: "すぎない", meaning: "不過度", tail: "" },
                { text: "で", meaning: "地", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「働きます」是動詞，「仕事 (shigoto)」是名詞，也可以說「仕事をします」。",
          image_file: "work.png",
        },
        {
          id: "v-18",
          term_zh: "喜歡",
          related_terms: [
            {
              term_target: "好きです",
              pronunciation: ["suki desu"],
              specific_note: "",
              segments: [
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は猫が好きです。",
              translation: "我喜歡貓。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "猫", furigana: "ねこ", meaning: "貓", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
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
                  tail: "",
                },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "あなたが好きです。",
              translation: "我喜歡你。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "在日文中「喜歡」是形容動詞(Na形容詞)，前面的助詞要用「が (ga)」。",
          image_file: "like.png",
        },
        {
          id: "v-19",
          term_zh: "起床",
          related_terms: [
            {
              term_target: "起きます",
              pronunciation: ["okimasu"],
              specific_note: "",
              segments: [{ text: "起きます", meaning: "起床", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "毎朝７時に起きます。",
              translation: "我每天早上七點起床。",
              segments: [
                {
                  text: "毎朝",
                  furigana: "まいあさ",
                  meaning: "每天早上",
                  tail: "",
                },
                { text: "７時", furigana: "しちじ", meaning: "七點", tail: "" },
                { text: "に", meaning: "在(時間)", tail: " " },
                {
                  text: "起きます",
                  furigana: "おきます",
                  meaning: "起床",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "早く起きてください。",
              translation: "請早點起床。",
              segments: [
                {
                  text: "早く",
                  furigana: "はやく",
                  meaning: "早早地",
                  tail: " ",
                },
                {
                  text: "起きて",
                  furigana: "おきて",
                  meaning: "起床",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "まだ起きていますか。",
              translation: "你還醒著嗎？",
              segments: [
                { text: "まだ", meaning: "還", tail: " " },
                {
                  text: "起きて",
                  furigana: "おきて",
                  meaning: "醒/起",
                  tail: "",
                },
                { text: "います", meaning: "正在/狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "「起きます」同時有「起床」和「醒著」的意思。",
          image_file: "wake_up.png",
        },
        {
          id: "v-20",
          term_zh: "說話",
          related_terms: [
            {
              term_target: "話します",
              pronunciation: ["hanashimasu"],
              specific_note: "交談/講語言",
              segments: [{ text: "話します", meaning: "說話", tail: "" }],
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
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "話します",
                  furigana: "はなします",
                  meaning: "說",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "友達と話します。",
              translation: "和朋友聊天(說話)。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "と", meaning: "和", tail: " " },
                {
                  text: "話します",
                  furigana: "はなします",
                  meaning: "說話",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ゆっくり話してください。",
              translation: "請慢慢說。",
              segments: [
                { text: "ゆっくり", meaning: "慢慢地", tail: " " },
                {
                  text: "話して",
                  furigana: "はなして",
                  meaning: "說",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note:
            "講某種語言，或者雙向的交談用「話します」。單方面告知用「言います」。",
          image_file: "speak.png",
        },
        {
          id: "v-21",
          term_zh: "聽見",
          related_terms: [
            {
              term_target: "聞こえます",
              pronunciation: ["kikoemasu"],
              specific_note: "聽得到(能力/自然)",
              segments: [{ text: "聞こえます", meaning: "聽見", tail: "" }],
            },
            {
              term_target: "聞きます",
              pronunciation: ["kikimasu"],
              specific_note: "聽/詢問",
              segments: [{ text: "聞きます", meaning: "聽", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "聞こえますか。",
              translation: "聽得到嗎？(確認對方是否聽見)",
              segments: [
                { text: "聞こえます", meaning: "聽見", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "音が聞こえました。",
              translation: "我聽到了聲音。",
              segments: [
                { text: "音", furigana: "おと", meaning: "聲音", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "聞こえました", meaning: "聽見了", tail: "。" },
              ],
            },
            {
              sentence: "よく聞こえません。",
              translation: "我聽不太清楚。",
              segments: [
                { text: "よく", meaning: "清楚地/很好地", tail: " " },
                { text: "聞こえません", meaning: "聽不見", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「聞こえます」是指聲音自然傳入耳朵；如果是主動去「聽音樂」，則用「音楽を聞きます (kikimasu)」。",
          image_file: "hear.png",
        },
        {
          id: "v-22",
          term_zh: "寫",
          related_terms: [
            {
              term_target: "書きます",
              pronunciation: ["kakimasu"],
              specific_note: "",
              segments: [{ text: "書きます", meaning: "寫", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "名前を書いてください。",
              translation: "請寫下名字。",
              segments: [
                { text: "名前", furigana: "なまえ", meaning: "名字", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "書いて", furigana: "かいて", meaning: "寫", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "手紙を書きます。",
              translation: "我要寫信。",
              segments: [
                { text: "手紙", furigana: "てがみ", meaning: "信", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "書きます",
                  furigana: "かきます",
                  meaning: "寫",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ここに住所を書いてもいいですか。",
              translation: "我可以把地址寫在這裡嗎？",
              segments: [
                { text: "ここ", meaning: "這裡", tail: " " },
                { text: "に", meaning: "在", tail: " " },
                {
                  text: "住所",
                  furigana: "じゅうしょ",
                  meaning: "地址",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "書いて", furigana: "かいて", meaning: "寫", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "ですか", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "書寫文字、繪畫(描きます)都可用。",
          image_file: "write.png",
        },
        {
          id: "v-23",
          term_zh: "閱讀",
          related_terms: [
            {
              term_target: "読みます",
              pronunciation: ["yomimasu"],
              specific_note: "",
              segments: [{ text: "読みます", meaning: "讀", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "本を読みます。",
              translation: "看書 (讀書)。",
              segments: [
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "読みます",
                  furigana: "よみます",
                  meaning: "讀",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "空気を読んでください。",
              translation: "請讀空氣 (察言觀色)。",
              segments: [
                {
                  text: "空気",
                  furigana: "くうき",
                  meaning: "空氣/氣氛",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "読んで", furigana: "よんで", meaning: "讀", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "この漢字は読めますか。",
              translation: "你看得懂(能讀)這個漢字嗎？",
              segments: [
                { text: "この", meaning: "這個", tail: " " },
                { text: "漢字", furigana: "かんじ", meaning: "漢字", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "読めます",
                  furigana: "よめます",
                  meaning: "能讀",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "閱讀書籍、報紙、訊息。",
          image_file: "read.png",
        },
        {
          id: "v-24",
          term_zh: "等待",
          related_terms: [
            {
              term_target: "待ちます",
              pronunciation: ["machimasu"],
              specific_note: "",
              segments: [{ text: "待ちます", meaning: "等待", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ちょっと待ってください。",
              translation: "請稍等一下。",
              segments: [
                { text: "ちょっと", meaning: "稍微", tail: " " },
                { text: "待って", furigana: "まって", meaning: "等", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "友達を待っています。",
              translation: "我正在等朋友。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "待って", furigana: "まって", meaning: "等", tail: "" },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "ここで待ちましょう。",
              translation: "我們在這裡等吧。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "で", meaning: "在", tail: " " },
                {
                  text: "待ちましょう",
                  furigana: "まちましょう",
                  meaning: "等吧",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "等候人或時間。",
          image_file: "wait.png",
        },
        {
          id: "v-25",
          term_zh: "嘗試",
          related_terms: [
            {
              term_target: "試します",
              pronunciation: ["tameshimasu"],
              specific_note: "試驗/測試",
              segments: [{ text: "試します", meaning: "嘗試", tail: "" }],
            },
            {
              term_target: "...てみます",
              pronunciation: ["...temimasu"],
              specific_note: "試著做...",
              segments: [
                { text: "て", meaning: "(連接詞)", tail: "" },
                { text: "みます", meaning: "試試看", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これを試してください。",
              translation: "請試試看這個 (試用)。",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "試して",
                  furigana: "ためして",
                  meaning: "嘗試",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "食べてみます。",
              translation: "我會吃吃看。",
              segments: [
                { text: "食べて", furigana: "たべて", meaning: "吃", tail: "" },
                { text: "みます", meaning: "試試看", tail: "。" },
              ],
            },
            {
              sentence: "もう一度やってみて。",
              translation: "你再試著做一次看看。",
              segments: [
                { text: "もう", meaning: "再", tail: "" },
                {
                  text: "一度",
                  furigana: "いちど",
                  meaning: "一次",
                  tail: " ",
                },
                { text: "やって", meaning: "做", tail: "" },
                { text: "みて", meaning: "試試看", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日文常將動詞改成 te形 + mimasu (みます) 來表示「試著做某動作」。",
          image_file: "try.png",
        },
        {
          id: "v-26",
          term_zh: "付錢",
          related_terms: [
            {
              term_target: "払います",
              pronunciation: ["haraimasu"],
              specific_note: "",
              segments: [{ text: "払います", meaning: "支付", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "カードで払います。",
              translation: "我要用信用卡付錢。",
              segments: [
                { text: "カード", meaning: "卡片", tail: "" },
                { text: "で", meaning: "用", tail: " " },
                {
                  text: "払います",
                  furigana: "はらいます",
                  meaning: "付錢",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "私が払います。",
              translation: "我來付 (我請客)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "払います",
                  furigana: "はらいます",
                  meaning: "付錢",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "別々に払えますか。",
              translation: "我們可以分開付嗎？",
              segments: [
                {
                  text: "別々",
                  furigana: "べつべつ",
                  meaning: "分開",
                  tail: "",
                },
                { text: "に", meaning: "地", tail: " " },
                {
                  text: "払えます",
                  furigana: "はらえます",
                  meaning: "能付",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "結帳時常用。",
          image_file: "pay.png",
        },
        {
          id: "v-27",
          term_zh: "選擇",
          related_terms: [
            {
              term_target: "選びます",
              pronunciation: ["erabimasu"],
              specific_note: "",
              segments: [{ text: "選びます", meaning: "選擇", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "好きなものを選んでください。",
              translation: "請選擇你喜歡的東西。",
              segments: [
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "な", meaning: "的", tail: "" },
                { text: "もの", meaning: "東西", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "選んで",
                  furigana: "えらんで",
                  meaning: "選",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "プレゼントを選びます。",
              translation: "挑選禮物。",
              segments: [
                { text: "プレゼント", meaning: "禮物", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "選びます",
                  furigana: "えらびます",
                  meaning: "選擇",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "どれを選びますか。",
              translation: "你要選哪一個？",
              segments: [
                { text: "どれ", meaning: "哪一個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "選びます",
                  furigana: "えらびます",
                  meaning: "選擇",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "從選項中挑選。",
          image_file: "choose.png",
        },
        {
          id: "v-28",
          term_zh: "進入",
          related_terms: [
            {
              term_target: "入ります",
              pronunciation: ["hairimasu"],
              specific_note: "",
              segments: [{ text: "入ります", meaning: "進入", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "部屋に入ります。",
              translation: "進入房間。",
              segments: [
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "" },
                { text: "に", meaning: "進(方向)", tail: " " },
                {
                  text: "入ります",
                  furigana: "はいります",
                  meaning: "進入",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "お風呂に入ります。",
              translation: "洗澡 (進入浴缸)。",
              segments: [
                {
                  text: "お風呂",
                  furigana: "おふろ",
                  meaning: "澡堂/浴缸",
                  tail: "",
                },
                { text: "に", meaning: "進", tail: " " },
                {
                  text: "入ります",
                  furigana: "はいります",
                  meaning: "進入",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "中に入ってもいいですか。",
              translation: "我可以進去裡面嗎？",
              segments: [
                { text: "中", furigana: "なか", meaning: "裡面", tail: "" },
                { text: "に", meaning: "進", tail: " " },
                {
                  text: "入って",
                  furigana: "はいって",
                  meaning: "進入",
                  tail: "",
                },
                { text: "も", meaning: "也", tail: "" },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "ですか", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "注意發音是「hairimasu」。助詞通常用「に (ni)」表示進入的地點。",
          image_file: "enter.png",
        },
        {
          id: "v-29",
          term_zh: "住",
          related_terms: [
            {
              term_target: "住みます",
              pronunciation: ["sumimasu"],
              specific_note: "",
              segments: [{ text: "住みます", meaning: "居住", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "東京に住んでいます。",
              translation: "我住在東京。",
              segments: [
                {
                  text: "東京",
                  furigana: "とうきょう",
                  meaning: "東京",
                  tail: "",
                },
                { text: "に", meaning: "在(地點)", tail: " " },
                { text: "住んで", furigana: "すんで", meaning: "住", tail: "" },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
            {
              sentence: "どこに住んでいますか。",
              translation: "你住在哪裡？",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "住んで", furigana: "すんで", meaning: "住", tail: "" },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "一人で住んでいます。",
              translation: "我一個人住。",
              segments: [
                { text: "一人", furigana: "ひとり", meaning: "一人", tail: "" },
                { text: "で", meaning: "狀態", tail: " " },
                { text: "住んで", furigana: "すんで", meaning: "住", tail: "" },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
          ],
          usage_note:
            "表示居住狀態時，必須用進行式「住んでいます (sundeimasu)」。",
          image_file: "live.png",
        },
        {
          id: "v-30",
          term_zh: "到達",
          related_terms: [
            {
              term_target: "着きます",
              pronunciation: ["tsukimasu"],
              specific_note: "抵達",
              segments: [{ text: "着きます", meaning: "到達", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "駅に着きました。",
              translation: "我到車站了。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "に", meaning: "在(地點)", tail: " " },
                {
                  text: "着きました",
                  furigana: "つきました",
                  meaning: "到達了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "何時に着きますか。",
              translation: "幾點會到？",
              segments: [
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
                { text: "に", meaning: "在(時間)", tail: " " },
                {
                  text: "着きます",
                  furigana: "つきます",
                  meaning: "到達",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "今、着いたばかりです。",
              translation: "我才剛到。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                {
                  text: "着いた",
                  furigana: "ついた",
                  meaning: "到了",
                  tail: " ",
                },
                { text: "ばかり", meaning: "剛剛", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
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
              pronunciation: ["arukimasu"],
              specific_note: "",
              segments: [{ text: "歩きます", meaning: "走", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "駅まで歩きます。",
              translation: "走到車站。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "まで", meaning: "直到", tail: " " },
                {
                  text: "歩きます",
                  furigana: "あるきます",
                  meaning: "走",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "歩いて行きます。",
              translation: "走路去 (用走的方式去)。",
              segments: [
                {
                  text: "歩いて",
                  furigana: "あるいて",
                  meaning: "走著",
                  tail: " ",
                },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "よく歩きますね。",
              translation: "你很會走(很常走路)呢。",
              segments: [
                { text: "よく", meaning: "經常/很", tail: " " },
                {
                  text: "歩きます",
                  furigana: "あるきます",
                  meaning: "走",
                  tail: "",
                },
                { text: "ね", meaning: "呢", tail: "。" },
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
              pronunciation: ["akemasu"],
              specific_note: "他動詞(人去開)",
              segments: [{ text: "開けます", meaning: "打開", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ドアを開けてください。",
              translation: "請開門。",
              segments: [
                { text: "ドア", meaning: "門", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "開けて", furigana: "あけて", meaning: "開", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "窓を開けましょうか。",
              translation: "要我幫你開窗戶嗎？",
              segments: [
                { text: "窓", furigana: "まど", meaning: "窗戶", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "開けましょう",
                  furigana: "あけましょう",
                  meaning: "開吧",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "店を開けます。",
              translation: "我要開店了(開始營業)。",
              segments: [
                { text: "店", furigana: "みせ", meaning: "店", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "開けます",
                  furigana: "あけます",
                  meaning: "開",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "人去打開某物用「開けます」。",
          image_file: "open.png",
        },
        {
          id: "v-33",
          term_zh: "關閉",
          related_terms: [
            {
              term_target: "閉めます",
              pronunciation: ["shimemasu"],
              specific_note: "他動詞(人去關)",
              segments: [{ text: "閉めます", meaning: "關閉", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ドアを閉めてください。",
              translation: "請關門。",
              segments: [
                { text: "ドア", meaning: "門", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "閉めて", furigana: "しめて", meaning: "關", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "カーテンを閉めます。",
              translation: "把窗簾拉上(關上)。",
              segments: [
                { text: "カーテン", meaning: "窗簾", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "閉めます",
                  furigana: "しめます",
                  meaning: "關",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "本を閉じてください。",
              translation: "請把書闔上。",
              segments: [
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "閉じて",
                  furigana: "とじて",
                  meaning: "闔上",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note:
            "關門窗用「閉めます(shimemasu)」，闔上書本或眼睛常用「閉じます(tojimasu)」。",
          image_file: "close.png",
        },
        {
          id: "v-34",
          term_zh: "幫助",
          related_terms: [
            {
              term_target: "手伝います",
              pronunciation: ["tetsudaimasu"],
              specific_note: "幫忙做事",
              segments: [{ text: "手伝います", meaning: "幫忙", tail: "" }],
            },
            {
              term_target: "助けます",
              pronunciation: ["tasukemasu"],
              specific_note: "救援/救助",
              segments: [{ text: "助けます", meaning: "救助", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "仕事を手伝ってください。",
              translation: "請幫我工作。",
              segments: [
                { text: "仕事", furigana: "しごと", meaning: "工作", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "手伝って",
                  furigana: "てつだって",
                  meaning: "幫忙",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "母を手伝います。",
              translation: "幫媽媽的忙。",
              segments: [
                { text: "母", furigana: "はは", meaning: "母親", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "手伝います",
                  furigana: "てつだいます",
                  meaning: "幫忙",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "助けて！",
              translation: "救命！(遇到危險時)",
              segments: [
                {
                  text: "助けて",
                  furigana: "たすけて",
                  meaning: "救命/幫幫我",
                  tail: "！",
                },
              ],
            },
          ],
          usage_note: "日常協助用「手伝います」，緊急救援用「助けます」。",
          image_file: "help.png",
        },
        {
          id: "v-35",
          term_zh: "帶來",
          related_terms: [
            {
              term_target: "持ってきます",
              pronunciation: ["mottekimasu"],
              specific_note: "帶來物品",
              segments: [
                { text: "持って", meaning: "拿著", tail: "" },
                { text: "きます", meaning: "來", tail: "" },
              ],
            },
            {
              term_target: "連れてきます",
              pronunciation: ["tsuretekimasu"],
              specific_note: "帶來人/動物",
              segments: [
                { text: "連れて", meaning: "帶著", tail: "" },
                { text: "きます", meaning: "來", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "傘を持ってきました。",
              translation: "我帶傘來了。",
              segments: [
                { text: "傘", furigana: "かさ", meaning: "傘", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "持ってきました",
                  furigana: "もってきました",
                  meaning: "帶來了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "友達を連れてきます。",
              translation: "我會帶朋友來。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "連れてきます",
                  furigana: "つれてきます",
                  meaning: "帶來(人)",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "お弁当を持ってきてください。",
              translation: "請帶便當來。",
              segments: [
                {
                  text: "お弁当",
                  furigana: "おべんとう",
                  meaning: "便當",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "持ってきて",
                  furigana: "もってきて",
                  meaning: "帶來",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note: "帶東西用「持って～」，帶人或動物用「連れて～」。",
          image_file: "bring.png",
        },
        {
          id: "v-36",
          term_zh: "需要 (必要)",
          related_terms: [
            {
              term_target: "必要です",
              pronunciation: ["hitsuyou desu"],
              specific_note: "必要的",
              segments: [
                {
                  text: "必要",
                  furigana: "ひつよう",
                  meaning: "必要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "助けが必要です。",
              translation: "需要幫忙 (幫忙是必要的)。",
              segments: [
                { text: "助け", furigana: "たすけ", meaning: "協助", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "必要",
                  furigana: "ひつよう",
                  meaning: "必要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "パスポートが必要です。",
              translation: "需要護照。",
              segments: [
                { text: "パスポート", meaning: "護照", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "必要",
                  furigana: "ひつよう",
                  meaning: "必要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "休憩が必要です。",
              translation: "需要休息。",
              segments: [
                {
                  text: "休憩",
                  furigana: "きゅうけい",
                  meaning: "休息",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "必要",
                  furigana: "ひつよう",
                  meaning: "必要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "除了動詞「要ります」，日文也常用形容動詞「必要」來表達 Need。",
          image_file: "need.png",
        },
        {
          id: "v-37",
          term_zh: "使用 (利用)",
          related_terms: [
            {
              term_target: "利用します",
              pronunciation: ["riyoushimasu"],
              specific_note: "利用/使用設施",
              segments: [
                { text: "利用", furigana: "りよう", meaning: "利用", tail: "" },
                { text: "します", meaning: "做", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "バスを利用します。",
              translation: "利用(搭乘)公車。",
              segments: [
                { text: "バス", meaning: "公車", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "利用", furigana: "りよう", meaning: "利用", tail: "" },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "この機会を利用してください。",
              translation: "請利用這個機會。",
              segments: [
                { text: "この", meaning: "這個", tail: " " },
                { text: "機会", furigana: "きかい", meaning: "機會", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "利用", furigana: "りよう", meaning: "利用", tail: "" },
                { text: "して", meaning: "做", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "図書館を利用します。",
              translation: "使用圖書館。",
              segments: [
                {
                  text: "図書館",
                  furigana: "としょかん",
                  meaning: "圖書館",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "利用", furigana: "りよう", meaning: "利用", tail: "" },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「使います」是通用詞，「利用します」多用於設施、服務或機會。",
          image_file: "use.png",
        },
        {
          id: "v-38",
          term_zh: "變成",
          related_terms: [
            {
              term_target: "なります",
              pronunciation: ["narimasu"],
              specific_note: "成為/變化",
              segments: [{ text: "なります", meaning: "變成", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "医者になりたいです。",
              translation: "我想成為醫生。",
              segments: [
                { text: "医者", furigana: "いしゃ", meaning: "醫生", tail: "" },
                { text: "に", meaning: "成為(結果)", tail: " " },
                { text: "なりたい", meaning: "想變成", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "静かになりました。",
              translation: "變安靜了。",
              segments: [
                { text: "静か", furigana: "しずか", meaning: "安靜", tail: "" },
                { text: "に", meaning: "成(結果)", tail: " " },
                { text: "なりました", meaning: "變成了", tail: "。" },
              ],
            },
            {
              sentence: "寒くなりましたね。",
              translation: "變冷了呢。",
              segments: [
                {
                  text: "寒く",
                  furigana: "さむく",
                  meaning: "冷地",
                  tail: " ",
                },
                { text: "なりました", meaning: "變成了", tail: "" },
                { text: "ね", meaning: "呢", tail: "。" },
              ],
            },
          ],
          usage_note: "變化。名詞+に+なります；形容詞去i+く+なります。",
          image_file: "become.png",
        },
        {
          id: "v-39",
          term_zh: "開始",
          related_terms: [
            {
              term_target: "始めます",
              pronunciation: ["hajimemasu"],
              specific_note: "開始(某事)",
              segments: [{ text: "始めます", meaning: "開始", tail: "" }],
            },
            {
              term_target: "始まります",
              pronunciation: ["hajimarimasu"],
              specific_note: "開始(發生)",
              segments: [{ text: "始まります", meaning: "開始", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "会議を始めます。",
              translation: "開始開會 (我們來開始會議)。",
              segments: [
                { text: "会議", furigana: "かいぎ", meaning: "會議", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "始めます",
                  furigana: "はじめます",
                  meaning: "開始",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "映画が始まります。",
              translation: "電影要開始了。",
              segments: [
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "始まります",
                  furigana: "はじまります",
                  meaning: "開始",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "さあ、始めましょう。",
              translation: "來，我們開始吧。",
              segments: [
                { text: "さあ", meaning: "來吧/那麼", tail: "、" },
                {
                  text: "始めましょう",
                  furigana: "はじめましょう",
                  meaning: "開始吧",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "人去開始某事用「始めます」，某事自然開始用「始まります」。",
          image_file: "start.png",
        },
        {
          id: "v-41",
          term_zh: "結束",
          related_terms: [
            {
              term_target: "終わります",
              pronunciation: ["owarimasu"],
              specific_note: "結束(自動詞)",
              segments: [{ text: "終わります", meaning: "結束", tail: "" }],
            },
            {
              term_target: "終えます",
              pronunciation: ["oemasu"],
              specific_note: "做完(他動詞)",
              segments: [{ text: "終えます", meaning: "做完", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "仕事が終わりました。",
              translation: "工作結束了。",
              segments: [
                { text: "仕事", furigana: "しごと", meaning: "工作", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "終わりました",
                  furigana: "おわりました",
                  meaning: "結束了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "もう終わりましたか。",
              translation: "已經結束(做完)了嗎？",
              segments: [
                { text: "もう", meaning: "已經", tail: " " },
                {
                  text: "終わりました",
                  furigana: "おわりました",
                  meaning: "結束",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "宿題を終えました。",
              translation: "我做完功課了。",
              segments: [
                {
                  text: "宿題",
                  furigana: "しゅくだい",
                  meaning: "功課",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "終えました",
                  furigana: "おえました",
                  meaning: "做完了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "事情自然結束用「終わります」，人主動把事情做完用「終えます」。",
          image_file: "finish.png",
        },
        {
          id: "v-42",
          term_zh: "停止",
          related_terms: [
            {
              term_target: "止まります",
              pronunciation: ["tomarimasu"],
              specific_note: "停下(移動中)",
              segments: [{ text: "止まります", meaning: "停止", tail: "" }],
            },
            {
              term_target: "やめます",
              pronunciation: ["yamemasu"],
              specific_note: "放棄/不做",
              segments: [{ text: "やめます", meaning: "辭職/停止", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ここで止めてください。",
              translation: "請停在這裡 (搭計程車時)。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "で", meaning: "在", tail: " " },
                {
                  text: "止めて",
                  furigana: "とめて",
                  meaning: "停下(他動詞)",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "電車が止まりました。",
              translation: "電車停駛了(停下來了)。",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "止まりました",
                  furigana: "とまりました",
                  meaning: "停了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "タバコをやめました。",
              translation: "我戒菸了(停止抽菸)。",
              segments: [
                { text: "タバコ", meaning: "香菸", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "やめました", meaning: "停止/戒了", tail: "。" },
              ],
            },
          ],
          usage_note:
            "移動的東西停下來用「止まります」，停止做某個動作或習慣用「やめます」。",
          image_file: "stop.png",
        },
        {
          id: "v-43",
          term_zh: "記住",
          related_terms: [
            {
              term_target: "覚えています",
              pronunciation: ["oboeteimasu"],
              specific_note: "記得(狀態)",
              segments: [
                {
                  text: "覚えて",
                  furigana: "おぼえて",
                  meaning: "記",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私のことを覚えていますか。",
              translation: "你記得我嗎？",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: "" },
                { text: "こと", meaning: "事情/關於", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "覚えて",
                  furigana: "おぼえて",
                  meaning: "記",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "この単語を覚えてください。",
              translation: "請背(記住)這個單字。",
              segments: [
                { text: "この", meaning: "這個", tail: " " },
                { text: "単語", furigana: "たんご", meaning: "單字", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "覚えて",
                  furigana: "おぼえて",
                  meaning: "記住",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "いいえ、覚えていません。",
              translation: "不，我不記得了。",
              segments: [
                { text: "いいえ", meaning: "不", tail: "、" },
                {
                  text: "覚えて",
                  furigana: "おぼえて",
                  meaning: "記",
                  tail: "",
                },
                { text: "いません", meaning: "沒有(狀態)", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「覚えます」是背誦的動作，「覚えています」是記得的狀態。",
          image_file: "remember.png",
        },
        {
          id: "v-44",
          term_zh: "談話 (聊天)",
          related_terms: [
            {
              term_target: "話します",
              pronunciation: ["hanashimasu"],
              specific_note: "對話",
              segments: [{ text: "話します", meaning: "說話", tail: "" }],
            },
            {
              term_target: "しゃべります",
              pronunciation: ["shaberimasu"],
              specific_note: "聊天/閒聊",
              segments: [{ text: "しゃべります", meaning: "聊天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "後で話しましょう。",
              translation: "待會再談吧。",
              segments: [
                {
                  text: "後で",
                  furigana: "あとで",
                  meaning: "稍後",
                  tail: " ",
                },
                {
                  text: "話しましょう",
                  furigana: "はなしましょう",
                  meaning: "談吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "彼とよくしゃべります。",
              translation: "我常跟他聊天。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "と", meaning: "和", tail: " " },
                { text: "よく", meaning: "經常", tail: " " },
                { text: "しゃべります", meaning: "聊天", tail: "。" },
              ],
            },
            {
              sentence: "先生と話したいです。",
              translation: "我想跟老師談談。",
              segments: [
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "",
                },
                { text: "と", meaning: "和", tail: " " },
                {
                  text: "話したい",
                  furigana: "はなしたい",
                  meaning: "想談",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "雙向的溝通、商量通常用「話します」。輕鬆的閒聊可以用「しゃべります」。",
          image_file: "talk.png",
        },
        {
          id: "v-45",
          term_zh: "見面",
          related_terms: [
            {
              term_target: "会います",
              pronunciation: ["aimasu"],
              specific_note: "",
              segments: [{ text: "会います", meaning: "見面", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "また会いましょう。",
              translation: "下次再見吧。",
              segments: [
                { text: "また", meaning: "再次", tail: " " },
                {
                  text: "会いましょう",
                  furigana: "あいましょう",
                  meaning: "見面吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "駅で友達に会います。",
              translation: "要在車站跟朋友見面。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "で", meaning: "在(地點)", tail: " " },
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "に", meaning: "與(對象)", tail: " " },
                {
                  text: "会います",
                  furigana: "あいます",
                  meaning: "見面",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "あなたに会いたいです。",
              translation: "我想見你。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "に", meaning: "與(對象)", tail: " " },
                {
                  text: "会いたい",
                  furigana: "あいたい",
                  meaning: "想見",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "見面的對象助詞要用「に (ni)」，不用「を (o)」。",
          image_file: "meet.png",
        },
        {
          id: "v-46",
          term_zh: "乘坐（工具）",
          related_terms: [
            {
              term_target: "乗ります",
              pronunciation: ["norimasu"],
              specific_note: "搭乘",
              segments: [{ text: "乗ります", meaning: "乘坐", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "バスに乗ります。",
              translation: "搭公車。",
              segments: [
                { text: "バス", meaning: "公車", tail: "" },
                { text: "に", meaning: "上(對象)", tail: " " },
                {
                  text: "乗ります",
                  furigana: "のります",
                  meaning: "搭乘",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "タクシーに乗りましょう。",
              translation: "我們搭計程車吧。",
              segments: [
                { text: "タクシー", meaning: "計程車", tail: "" },
                { text: "に", meaning: "上(對象)", tail: " " },
                {
                  text: "乗りましょう",
                  furigana: "のりましょう",
                  meaning: "搭吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "自転車に乗れますか。",
              translation: "你會騎腳踏車嗎？",
              segments: [
                {
                  text: "自転車",
                  furigana: "じてんしゃ",
                  meaning: "腳踏車",
                  tail: "",
                },
                { text: "に", meaning: "上(對象)", tail: " " },
                {
                  text: "乗れます",
                  furigana: "のれます",
                  meaning: "能騎/搭",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日文的「Take」有很多種：搭車用「乗ります」，吃藥用「飲みます」，休息用「休みます」。",
          image_file: "take.png",
        },
        {
          id: "v-47",
          term_zh: "放",
          related_terms: [
            {
              term_target: "置きます",
              pronunciation: ["okimasu"],
              specific_note: "放置",
              segments: [{ text: "置きます", meaning: "放", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ここに荷物を置いてください。",
              translation: "請把行李放這裡。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "荷物", furigana: "にもつ", meaning: "行李", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "置いて", furigana: "おいて", meaning: "放", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "机の上に置きます。",
              translation: "放在桌子上。",
              segments: [
                { text: "机", furigana: "つくえ", meaning: "桌子", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "上", furigana: "うえ", meaning: "上面", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                {
                  text: "置きます",
                  furigana: "おきます",
                  meaning: "放",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "傘をどこに置きましたか。",
              translation: "你把傘放在哪裡了？",
              segments: [
                { text: "傘", furigana: "かさ", meaning: "傘", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                {
                  text: "置きました",
                  furigana: "おきました",
                  meaning: "放了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "把東西放置在某處。",
          image_file: "put.png",
        },
        {
          id: "v-48",
          term_zh: "吃",
          related_terms: [
            {
              term_target: "食べます",
              pronunciation: ["tabemasu"],
              specific_note: "",
              segments: [{ text: "食べます", meaning: "吃", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ご飯を食べましょう。",
              translation: "我們去吃飯吧。",
              segments: [
                { text: "ご飯", furigana: "ごはん", meaning: "飯", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "食べましょう",
                  furigana: "たべましょう",
                  meaning: "吃吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "お腹が空いたので、何か食べたいです。",
              translation: "肚子餓了，想吃點東西。",
              segments: [
                { text: "お腹", furigana: "おなか", meaning: "肚子", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "空いた",
                  furigana: "すいた",
                  meaning: "空了/餓了",
                  tail: "",
                },
                { text: "ので", meaning: "因為...", tail: "、" },
                { text: "何", furigana: "なに", meaning: "什麼", tail: "" },
                { text: "か", meaning: "某(東西)", tail: " " },
                {
                  text: "食べたい",
                  furigana: "たべたい",
                  meaning: "想吃",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "もう食べましたか。",
              translation: "你吃過了嗎？",
              segments: [
                { text: "もう", meaning: "已經", tail: " " },
                {
                  text: "食べました",
                  furigana: "たべました",
                  meaning: "吃了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "食用。",
          image_file: "eat.png",
        },
        {
          id: "v-49",
          term_zh: "睡覺",
          related_terms: [
            {
              term_target: "寝ます",
              pronunciation: ["nemasu"],
              specific_note: "",
              segments: [{ text: "寝ます", meaning: "睡覺", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "もう寝ます。",
              translation: "我要睡了。",
              segments: [
                { text: "もう", meaning: "現在/已經", tail: " " },
                {
                  text: "寝ます",
                  furigana: "ねます",
                  meaning: "睡",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "昨日はよく寝ましたか。",
              translation: "昨天有睡好嗎？",
              segments: [
                { text: "昨日", furigana: "きのう", meaning: "昨天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "よく", meaning: "好好地", tail: " " },
                {
                  text: "寝ました",
                  furigana: "ねました",
                  meaning: "睡了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "赤ちゃんが寝ています。",
              translation: "寶寶正在睡覺。",
              segments: [
                {
                  text: "赤ちゃん",
                  furigana: "あかちゃん",
                  meaning: "嬰兒",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "寝て", furigana: "ねて", meaning: "睡", tail: "" },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
          ],
          usage_note: "躺下睡覺。",
          image_file: "sleep.png",
        },
        {
          id: "v-50",
          term_zh: "寄送",
          related_terms: [
            {
              term_target: "送ります",
              pronunciation: ["okurimasu"],
              specific_note: "",
              segments: [{ text: "送ります", meaning: "寄送", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "メールを送ります。",
              translation: "寄電子郵件。",
              segments: [
                { text: "メール", meaning: "郵件/信", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "送ります",
                  furigana: "おくります",
                  meaning: "寄",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "荷物を送りたいです。",
              translation: "我想要寄包裹(行李)。",
              segments: [
                {
                  text: "荷物",
                  furigana: "にもつ",
                  meaning: "行李/包裹",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "送りたい",
                  furigana: "おくりたい",
                  meaning: "想寄",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼を家まで送ります。",
              translation: "我送他回家 (送行/載送)。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "まで", meaning: "直到", tail: " " },
                {
                  text: "送ります",
                  furigana: "おくります",
                  meaning: "送",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "可用於寄信、寄東西，或是送人回家。",
          image_file: "send.png",
        },
        {
          id: "v-51",
          term_zh: "開車",
          related_terms: [
            {
              term_target: "運転します",
              pronunciation: ["untenshimasu"],
              specific_note: "駕駛",
              segments: [
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "車を運転します。",
              translation: "開車。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "運転できますか。",
              translation: "你會開車嗎？",
              segments: [
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "できます", meaning: "能夠", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "安全に運転してください。",
              translation: "請小心(安全)駕駛。",
              segments: [
                {
                  text: "安全",
                  furigana: "あんぜん",
                  meaning: "安全",
                  tail: "",
                },
                { text: "に", meaning: "地", tail: " " },
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "して", meaning: "做", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note: "專指駕駛交通工具。",
          image_file: "drive.png",
        },
        {
          id: "v-52",
          term_zh: "讀書 (學習)",
          related_terms: [
            {
              term_target: "勉強します",
              pronunciation: ["benkyoushimasu"],
              specific_note: "用功/學習",
              segments: [
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書/學習",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本語を勉強しています。",
              translation: "我正在學日文。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "學習",
                  tail: "",
                },
                { text: "して", meaning: "做", tail: "" },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "一生懸命勉強します。",
              translation: "我會拼命(努力)讀書。",
              segments: [
                {
                  text: "一生懸命",
                  furigana: "いっしょうけんめい",
                  meaning: "拼命/努力",
                  tail: " ",
                },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "學習",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "テストのために勉強します。",
              translation: "為了考試而唸書。",
              segments: [
                { text: "テスト", meaning: "考試", tail: "" },
                { text: "の", meaning: "的", tail: "" },
                { text: "ため", meaning: "緣故/為了", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "學習",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
          ],
          usage_note: "「読みます」是閱讀文字，「勉強します」是學習知識。",
          image_file: "study.png",
        },
        {
          id: "v-53",
          term_zh: "回去",
          related_terms: [
            {
              term_target: "帰ります",
              pronunciation: ["kaerimasu"],
              specific_note: "回家/回國",
              segments: [{ text: "帰ります", meaning: "回家", tail: "" }],
            },
            {
              term_target: "戻ります",
              pronunciation: ["modorimasu"],
              specific_note: "折返/回原位",
              segments: [{ text: "戻ります", meaning: "返回", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "家に帰ります。",
              translation: "回家。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "に", meaning: "回(方向)", tail: " " },
                {
                  text: "帰ります",
                  furigana: "かえります",
                  meaning: "回去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "気をつけて帰ってください。",
              translation: "請小心慢走(回家)。",
              segments: [
                { text: "気", furigana: "き", meaning: "心/精神", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "つけて", meaning: "附上/小心", tail: " " },
                {
                  text: "帰って",
                  furigana: "かえって",
                  meaning: "回去",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "席に戻ります。",
              translation: "回座位 (暫離後返回)。",
              segments: [
                { text: "席", furigana: "せき", meaning: "座位", tail: "" },
                { text: "に", meaning: "回(方向)", tail: " " },
                {
                  text: "戻ります",
                  furigana: "もどります",
                  meaning: "折返",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "回歸最終歸屬(家、國)用「帰ります」；暫時離開後回來用「戻ります」。",
          image_file: "go_back.png",
        },
        {
          id: "v-54",
          term_zh: "了解 (明白)",
          related_terms: [
            {
              term_target: "わかります",
              pronunciation: ["wakarimasu"],
              specific_note: "懂/理解",
              segments: [{ text: "わかります", meaning: "明白", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "はい、わかりました。",
              translation: "好的，我知道了(懂了)。",
              segments: [
                { text: "はい", meaning: "是的", tail: "、" },
                { text: "わかりました", meaning: "明白了", tail: "。" },
              ],
            },
            {
              sentence: "意味がわかりますか。",
              translation: "你懂意思嗎？",
              segments: [
                { text: "意味", furigana: "いみ", meaning: "意思", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "わかります", meaning: "懂", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "全然わかりません。",
              translation: "完全不懂。",
              segments: [
                {
                  text: "全然",
                  furigana: "ぜんぜん",
                  meaning: "完全(接否定)",
                  tail: " ",
                },
                { text: "わかりません", meaning: "不懂", tail: "。" },
              ],
            },
          ],
          usage_note: "表示理解內容或狀況。",
          image_file: "understand.png",
        },
      ],
    },
    {
      id: "adjectives-1",
      name: "形容詞",
      items: [
        {
          id: "adj-01",
          term_zh: "好的",
          related_terms: [
            {
              term_target: "いい",
              pronunciation: ["ii"],
              specific_note: "口語常用",
              segments: [{ text: "いい", meaning: "好的", tail: "" }],
            },
            {
              term_target: "よい",
              pronunciation: ["yoi"],
              specific_note: "正式/書面",
              segments: [{ text: "よい", meaning: "好的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "いい天気ですね。",
              translation: "天氣真好呢。",
              segments: [
                { text: "いい", meaning: "好的", tail: " " },
                { text: "天気", furigana: "てんき", meaning: "天氣", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "彼はいい人です。",
              translation: "他是個好人。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いい", meaning: "好的", tail: " " },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "それはいい考えです。",
              translation: "那真是個好主意。",
              segments: [
                { text: "それ", meaning: "那", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いい", meaning: "好的", tail: " " },
                {
                  text: "考え",
                  furigana: "かんがえ",
                  meaning: "想法/主意",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「いい」是最通用的「好」。如果要說「不好」，要用「よくない (yokunai)」。",
          image_file: "good.png",
        },
        {
          id: "adj-02",
          term_zh: "壞的",
          related_terms: [
            {
              term_target: "悪い",
              pronunciation: ["warui"],
              specific_note: "",
              segments: [
                { text: "悪い", furigana: "わるい", meaning: "壞的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "タバコは体に悪いです。",
              translation: "抽菸對身體不好。",
              segments: [
                { text: "タバコ", meaning: "香菸", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "体", furigana: "からだ", meaning: "身體", tail: "" },
                { text: "に", meaning: "對...", tail: " " },
                {
                  text: "悪い",
                  furigana: "わるい",
                  meaning: "壞/不好",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "悪いニュースがあります。",
              translation: "有個壞消息。",
              segments: [
                {
                  text: "悪い",
                  furigana: "わるい",
                  meaning: "壞的",
                  tail: " ",
                },
                { text: "ニュース", meaning: "新聞/消息", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "。" },
              ],
            },
            {
              sentence: "仲が悪い。",
              translation: "感情不好 (關係很差)。",
              segments: [
                {
                  text: "仲",
                  furigana: "なか",
                  meaning: "交情/關係",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "悪い",
                  furigana: "わるい",
                  meaning: "壞的",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "除了形容品質壞，也可以用來形容「天氣不好」或「運氣不好」。",
          image_file: "bad.png",
        },
        {
          id: "adj-03",
          term_zh: "新的",
          related_terms: [
            {
              term_target: "新しい",
              pronunciation: ["atarashii"],
              specific_note: "",
              segments: [
                {
                  text: "新しい",
                  furigana: "あたらしい",
                  meaning: "新的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "新しいスマホを買いました。",
              translation: "我買了新手機。",
              segments: [
                {
                  text: "新しい",
                  furigana: "あたらしい",
                  meaning: "新的",
                  tail: " ",
                },
                { text: "スマホ", meaning: "智慧型手機", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "買いました",
                  furigana: "かいました",
                  meaning: "買了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "あけましておめでとう。",
              translation: "新年快樂 (恭喜新的一年開始)。",
              segments: [
                { text: "あけまして", meaning: "開年/過年", tail: " " },
                { text: "おめでとう", meaning: "恭喜", tail: "。" },
              ],
            },
            {
              sentence: "これは新しいモデルです。",
              translation: "這是新型號。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "新しい",
                  furigana: "あたらしい",
                  meaning: "新的",
                  tail: " ",
                },
                { text: "モデル", meaning: "型號/款式", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "形容物品全新。",
          image_file: "new.png",
        },
        {
          id: "adj-04",
          term_zh: "最初的 (第一)",
          related_terms: [
            {
              term_target: "最初",
              pronunciation: ["saisho"],
              specific_note: "最初/開始",
              segments: [
                {
                  text: "最初",
                  furigana: "さいしょ",
                  meaning: "最初",
                  tail: "",
                },
              ],
            },
            {
              term_target: "初めて",
              pronunciation: ["hajimete"],
              specific_note: "初次(經驗)",
              segments: [
                {
                  text: "初めて",
                  furigana: "はじめて",
                  meaning: "初次",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本は初めてですか。",
              translation: "你是第一次來日本嗎？",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "初めて",
                  furigana: "はじめて",
                  meaning: "第一次",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "最初の角を曲がります。",
              translation: "在第一個轉角轉彎。",
              segments: [
                {
                  text: "最初",
                  furigana: "さいしょ",
                  meaning: "最初/第一",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                { text: "角", furigana: "かど", meaning: "轉角", tail: "" },
                { text: "を", meaning: "(通過點助詞)", tail: " " },
                {
                  text: "曲がります",
                  furigana: "まがります",
                  meaning: "轉彎",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "一番好きな食べ物は何ですか。",
              translation: "你最(第一)喜歡的食物是什麼？",
              segments: [
                {
                  text: "一番",
                  furigana: "いちばん",
                  meaning: "第一/最",
                  tail: " ",
                },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "な", meaning: "的", tail: " " },
                {
                  text: "食べ物",
                  furigana: "たべもの",
                  meaning: "食物",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "順序的第一用「最初」，經驗的第一次用「初めて」，程度的第一(最)用「一番」。",
          image_file: "first.png",
        },
        {
          id: "adj-05",
          term_zh: "最後的 (上一個)",
          related_terms: [
            {
              term_target: "最後",
              pronunciation: ["saigo"],
              specific_note: "末尾/最終",
              segments: [
                { text: "最後", furigana: "さいご", meaning: "最後", tail: "" },
              ],
            },
            {
              term_target: "前の",
              pronunciation: ["mae no"],
              specific_note: "之前的/上一個",
              segments: [
                { text: "前", furigana: "まえ", meaning: "前", tail: "" },
                { text: "の", meaning: "的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これが最後のチャンスです。",
              translation: "這是最後的機會。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "最後", furigana: "さいご", meaning: "最後", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "チャンス", meaning: "機會", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "先週、映画を見ました。",
              translation: "上週我看了電影。",
              segments: [
                {
                  text: "先週",
                  furigana: "せんしゅう",
                  meaning: "上週",
                  tail: "、",
                },
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見ました",
                  furigana: "みました",
                  meaning: "看了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "前のページを見てください。",
              translation: "請看上一頁。",
              segments: [
                {
                  text: "前",
                  furigana: "まえ",
                  meaning: "前/上一個",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                { text: "ページ", meaning: "頁", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "見て", furigana: "みて", meaning: "看", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note:
            "順序的最後用「最後」，時間上的上一個常用「先～(senshuu)」或「前の～(mae no)」。",
          image_file: "last.png",
        },
        {
          id: "adj-06",
          term_zh: "下一個",
          related_terms: [
            {
              term_target: "次",
              pronunciation: ["tsugi"],
              specific_note: "",
              segments: [
                {
                  text: "次",
                  furigana: "つぎ",
                  meaning: "次/下一個",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "次は新宿です。",
              translation: "下一站是新宿。",
              segments: [
                { text: "次", furigana: "つぎ", meaning: "下一個", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "新宿",
                  furigana: "しんじゅく",
                  meaning: "新宿(地名)",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "次のページを読んでください。",
              translation: "請讀下一頁。",
              segments: [
                { text: "次", furigana: "つぎ", meaning: "下一個", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "ページ", meaning: "頁", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "読んで", furigana: "よんで", meaning: "讀", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "また今度。",
              translation: "下次見 (下次再約)。",
              segments: [
                { text: "また", meaning: "再次", tail: " " },
                {
                  text: "今度",
                  furigana: "こんど",
                  meaning: "這次/下次",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "日文中「次 (tsugi)」是名詞，接續另一個名詞時要加「の (no)」，如「次の駅」。",
          image_file: "next.png",
        },
        {
          id: "adj-07",
          term_zh: "長的",
          related_terms: [
            {
              term_target: "長い",
              pronunciation: ["nagai"],
              specific_note: "",
              segments: [
                { text: "長い", furigana: "ながい", meaning: "長的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼女は髪が長いです。",
              translation: "她的頭髮很長。",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "髪", furigana: "かみ", meaning: "頭髮", tail: "" },
                { text: "が", meaning: "(特徵助詞)", tail: " " },
                { text: "長い", furigana: "ながい", meaning: "長", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "話が長いです。",
              translation: "話很長 (說來話長)。",
              segments: [
                {
                  text: "話",
                  furigana: "はなし",
                  meaning: "話/故事",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "長い", furigana: "ながい", meaning: "長", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "長い間、待っていました。",
              translation: "我等了很長一段時間。",
              segments: [
                { text: "長い", furigana: "ながい", meaning: "長", tail: " " },
                { text: "間", furigana: "あいだ", meaning: "期間", tail: "、" },
                { text: "待って", furigana: "まって", meaning: "等", tail: "" },
                { text: "いました", meaning: "了(狀態)", tail: "。" },
              ],
            },
          ],
          usage_note: "可用於長度或時間。",
          image_file: "long.png",
        },
        {
          id: "adj-08",
          term_zh: "大的",
          related_terms: [
            {
              term_target: "大きい",
              pronunciation: ["ookii"],
              specific_note: "",
              segments: [
                {
                  text: "大きい",
                  furigana: "おおきい",
                  meaning: "大的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "大きい家ですね。",
              translation: "好大的房子啊。",
              segments: [
                {
                  text: "大きい",
                  furigana: "おおきい",
                  meaning: "大",
                  tail: " ",
                },
                { text: "家", furigana: "いえ", meaning: "房子", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "声が大きいです。",
              translation: "聲音很大。",
              segments: [
                { text: "声", furigana: "こえ", meaning: "聲音", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "大きい",
                  furigana: "おおきい",
                  meaning: "大",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "服が大きすぎます。",
              translation: "衣服太大了。",
              segments: [
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "大き", furigana: "おおき", meaning: "大", tail: "" },
                { text: "すぎます", meaning: "過度/太", tail: "。" },
              ],
            },
          ],
          usage_note: "形容體積或音量大。",
          image_file: "big.png",
        },
        {
          id: "adj-09",
          term_zh: "小的",
          related_terms: [
            {
              term_target: "小さい",
              pronunciation: ["chiisai"],
              specific_note: "",
              segments: [
                {
                  text: "小さい",
                  furigana: "ちいさい",
                  meaning: "小的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "小さい鞄が欲しいです。",
              translation: "我想要一個小包包。",
              segments: [
                {
                  text: "小さい",
                  furigana: "ちいさい",
                  meaning: "小",
                  tail: " ",
                },
                { text: "鞄", furigana: "かばん", meaning: "包包", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                {
                  text: "欲しい",
                  furigana: "ほしい",
                  meaning: "想要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "字が小さくて読めません。",
              translation: "字太小了讀不出來。",
              segments: [
                { text: "字", furigana: "じ", meaning: "字", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "小さくて",
                  furigana: "ちいさくて",
                  meaning: "小而...",
                  tail: " ",
                },
                {
                  text: "読めません",
                  furigana: "よめません",
                  meaning: "無法讀",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "小さい声で話します。",
              translation: "小聲地說話。",
              segments: [
                {
                  text: "小さい",
                  furigana: "ちいさい",
                  meaning: "小",
                  tail: " ",
                },
                { text: "声", furigana: "こえ", meaning: "聲音", tail: "" },
                { text: "で", meaning: "用", tail: " " },
                {
                  text: "話します",
                  furigana: "はなします",
                  meaning: "說話",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "形容體積或音量小。",
          image_file: "small.png",
        },
        {
          id: "adj-10",
          term_zh: "多的",
          related_terms: [
            {
              term_target: "多い",
              pronunciation: ["ooi"],
              specific_note: "",
              segments: [
                { text: "多い", furigana: "おおい", meaning: "多的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今日は人が多いです。",
              translation: "今天人很多。",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "多い", furigana: "おおい", meaning: "多", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "車が多すぎます。",
              translation: "車子太多了。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "多", furigana: "おお", meaning: "多", tail: "" },
                { text: "すぎます", meaning: "過度/太", tail: "。" },
              ],
            },
            {
              sentence: "多くの人が来ました。",
              translation: "很多人來了。",
              segments: [
                { text: "多く", furigana: "おおく", meaning: "許多", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "注意：日文習慣說「人が多い (人是多的)」，不常直接說「多い人」。如果要接名詞，用「多くの人」。",
          image_file: "many.png",
        },
        {
          id: "adj-11",
          term_zh: "高的 (身高/價格)",
          related_terms: [
            {
              term_target: "高い",
              pronunciation: ["takai"],
              specific_note: "高/貴",
              segments: [
                {
                  text: "高い",
                  furigana: "たかい",
                  meaning: "高/貴",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "背が高いですね。",
              translation: "你個子很高呢。",
              segments: [
                { text: "背", furigana: "せ", meaning: "身高/背", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "高い", furigana: "たかい", meaning: "高", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "高いビル。",
              translation: "高樓大廈。",
              segments: [
                { text: "高い", furigana: "たかい", meaning: "高", tail: " " },
                { text: "ビル", meaning: "大樓", tail: "" },
                { text: "。", meaning: "", tail: "" },
              ],
            },
            {
              sentence: "これは高すぎます。",
              translation: "這個太貴了 (價格高)。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "高", furigana: "たか", meaning: "貴", tail: "" },
                { text: "すぎます", meaning: "太/過度", tail: "。" },
              ],
            },
          ],
          usage_note: "「高い」同時表示高度高和價格貴。",
          image_file: "tall.png",
        },
        {
          id: "adj-12",
          term_zh: "年輕的",
          related_terms: [
            {
              term_target: "若い",
              pronunciation: ["wakai"],
              specific_note: "",
              segments: [
                { text: "若い", furigana: "わかい", meaning: "年輕", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼は若いです。",
              translation: "他很年輕。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "若い", furigana: "わかい", meaning: "年輕", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "若く見えますね。",
              translation: "你看起來很年輕呢。",
              segments: [
                {
                  text: "若く",
                  furigana: "わかく",
                  meaning: "年輕地",
                  tail: " ",
                },
                {
                  text: "見えます",
                  furigana: "みえます",
                  meaning: "看得見/看起來",
                  tail: "",
                },
                { text: "ね", meaning: "呢", tail: "。" },
              ],
            },
            {
              sentence: "若い人は元気です。",
              translation: "年輕人很有精神。",
              segments: [
                {
                  text: "若い",
                  furigana: "わかい",
                  meaning: "年輕",
                  tail: " ",
                },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "精神/健康",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "形容年紀輕。",
          image_file: "young.png",
        },
        {
          id: "adj-13",
          term_zh: "舊的 (老的)",
          related_terms: [
            {
              term_target: "古い",
              pronunciation: ["furui"],
              specific_note: "物品老舊",
              segments: [
                { text: "古い", furigana: "ふるい", meaning: "舊", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは古い本です。",
              translation: "這是舊書。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "古い", furigana: "ふるい", meaning: "舊", tail: " " },
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "古い建物。",
              translation: "古老的建築物。",
              segments: [
                {
                  text: "古い",
                  furigana: "ふるい",
                  meaning: "舊/古老",
                  tail: " ",
                },
                {
                  text: "建物",
                  furigana: "たてもの",
                  meaning: "建築物",
                  tail: ".",
                },
                { text: "。", meaning: "", tail: "" },
              ],
            },
            {
              sentence: "車が古いです。",
              translation: "車子很舊。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "古い", furigana: "ふるい", meaning: "舊", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「古い」只能用來形容物品。形容人很老要說「年寄り (toshiyori)」，直接說人「古い」很失禮。",
          image_file: "old.png",
        },
        {
          id: "adj-14",
          term_zh: "近的",
          related_terms: [
            {
              term_target: "近い",
              pronunciation: ["chikai"],
              specific_note: "",
              segments: [
                { text: "近い", furigana: "ちかい", meaning: "近", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "駅は近いです。",
              translation: "車站很近。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "近い", furigana: "ちかい", meaning: "近", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "この近くにコンビニはありますか。",
              translation: "這附近有便利商店嗎？",
              segments: [
                { text: "この", meaning: "這", tail: " " },
                { text: "近く", furigana: "ちかく", meaning: "附近", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "コンビニ", meaning: "便利商店", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "もっと近くに来て。",
              translation: "靠近一點。",
              segments: [
                { text: "もっと", meaning: "更", tail: " " },
                { text: "近く", furigana: "ちかく", meaning: "近", tail: "" },
                { text: "に", meaning: "往", tail: " " },
                { text: "来て", furigana: "きて", meaning: "來", tail: "。" },
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
              pronunciation: ["tooi"],
              specific_note: "",
              segments: [
                { text: "遠い", furigana: "とおい", meaning: "遠", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "家から遠いです。",
              translation: "離家很遠。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "から", meaning: "從", tail: " " },
                { text: "遠い", furigana: "とおい", meaning: "遠", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "学校は遠くないです。",
              translation: "學校不會很遠。",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "遠く", furigana: "とおく", meaning: "遠", tail: "" },
                { text: "ない", meaning: "不", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "遠い場所。",
              translation: "遙遠的地方。",
              segments: [
                { text: "遠い", furigana: "とおい", meaning: "遠", tail: " " },
                {
                  text: "場所",
                  furigana: "ばしょ",
                  meaning: "場所/地方",
                  tail: ".",
                },
                { text: "。", meaning: "", tail: "" },
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
              pronunciation: ["hayai"],
              specific_note: "速度快",
              segments: [
                { text: "速い", furigana: "はやい", meaning: "快", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "新幹線は速いです。",
              translation: "新幹線很快。",
              segments: [
                {
                  text: "新幹線",
                  furigana: "しんかんせん",
                  meaning: "新幹線",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "速い", furigana: "はやい", meaning: "快", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "速く走ります。",
              translation: "跑得很快。",
              segments: [
                {
                  text: "速く",
                  furigana: "はやく",
                  meaning: "快地",
                  tail: " ",
                },
                {
                  text: "走ります",
                  furigana: "はしります",
                  meaning: "跑",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "話すのが速いです。",
              translation: "講話很快。",
              segments: [
                { text: "話す", furigana: "はなす", meaning: "說話", tail: "" },
                { text: "の", meaning: "這件事", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "速い", furigana: "はやい", meaning: "快", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "速度快用「速い」。如果是時間早，要用「早い」。",
          image_file: "fast.png",
        },
        {
          id: "adj-17",
          term_zh: "慢的",
          related_terms: [
            {
              term_target: "遅い",
              pronunciation: ["osoi"],
              specific_note: "",
              segments: [
                {
                  text: "遅い",
                  furigana: "おそい",
                  meaning: "慢/遲",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "歩くのが遅いです。",
              translation: "走路很慢。",
              segments: [
                { text: "歩く", furigana: "あるく", meaning: "走", tail: "" },
                { text: "の", meaning: "這件事", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "遅い", furigana: "おそい", meaning: "慢", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "ネットが遅いです。",
              translation: "網路很慢。",
              segments: [
                { text: "ネット", meaning: "網路", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "遅い", furigana: "おそい", meaning: "慢", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "遅くなりました。",
              translation: "我遲到了 (變得晚了)。",
              segments: [
                {
                  text: "遅く",
                  furigana: "おそく",
                  meaning: "慢/晚",
                  tail: " ",
                },
                { text: "なりました", meaning: "變成了", tail: "。" },
              ],
            },
          ],
          usage_note: "形容速度慢，或是時間晚(遲到)都可以用。",
          image_file: "slow.png",
        },
        {
          id: "adj-18",
          term_zh: "熱的 (天氣)",
          related_terms: [
            {
              term_target: "暑い",
              pronunciation: ["atsui"],
              specific_note: "氣溫",
              segments: [
                {
                  text: "暑い",
                  furigana: "あつい",
                  meaning: "熱(天氣)",
                  tail: "",
                },
              ],
            },
            {
              term_target: "熱い",
              pronunciation: ["atsui"],
              specific_note: "物體/觸感",
              segments: [
                {
                  text: "熱い",
                  furigana: "あつい",
                  meaning: "燙/熱",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "今日は暑いですね。",
              translation: "今天好熱啊 (天氣)。",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "暑い", furigana: "あつい", meaning: "熱", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "熱いお茶。",
              translation: "熱茶。",
              segments: [
                {
                  text: "熱い",
                  furigana: "あつい",
                  meaning: "熱/燙",
                  tail: " ",
                },
                { text: "お茶", furigana: "おちゃ", meaning: "茶", tail: "" },
                { text: "。", meaning: "", tail: "" },
              ],
            },
            {
              sentence: "気をつけて、熱いですよ。",
              translation: "小心，很燙喔。",
              segments: [
                { text: "気", furigana: "き", meaning: "心", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "つけて", meaning: "附上/小心", tail: "、" },
                { text: "熱い", furigana: "あつい", meaning: "燙", tail: "" },
                { text: "ですよ", meaning: "喔", tail: "。" },
              ],
            },
          ],
          usage_note:
            "發音都是 Atsui，但寫成漢字不同。天氣用「暑」，東西燙用「熱」。",
          image_file: "hot.png",
        },
        {
          id: "adj-19",
          term_zh: "冷的 (天氣)",
          related_terms: [
            {
              term_target: "寒い",
              pronunciation: ["samui"],
              specific_note: "氣溫",
              segments: [
                {
                  text: "寒い",
                  furigana: "さむい",
                  meaning: "冷(天氣)",
                  tail: "",
                },
              ],
            },
            {
              term_target: "冷たい",
              pronunciation: ["tsumetai"],
              specific_note: "物體/觸感",
              segments: [
                {
                  text: "冷たい",
                  furigana: "つめたい",
                  meaning: "冰/涼",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "外は寒いです。",
              translation: "外面很冷。",
              segments: [
                { text: "外", furigana: "そと", meaning: "外面", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "寒い", furigana: "さむい", meaning: "冷", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "冷たい飲み物。",
              translation: "冷飲 (冰涼的飲料)。",
              segments: [
                {
                  text: "冷たい",
                  furigana: "つめたい",
                  meaning: "冰涼的",
                  tail: " ",
                },
                {
                  text: "飲み物",
                  furigana: "のみもの",
                  meaning: "飲料",
                  tail: "",
                },
                { text: "。", meaning: "", tail: "" },
              ],
            },
            {
              sentence: "手が冷たいです。",
              translation: "手很冰。",
              segments: [
                { text: "手", furigana: "て", meaning: "手", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "冷たい",
                  furigana: "つめたい",
                  meaning: "冰冷",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "覺得冷(氣溫)用「寒い」，摸起來冰涼用「冷たい」。",
          image_file: "cold.png",
        },
        {
          id: "adj-20",
          term_zh: "乾淨的 (漂亮的)",
          related_terms: [
            {
              term_target: "きれい",
              pronunciation: ["kirei"],
              specific_note: "Na形容詞",
              segments: [{ text: "きれい", meaning: "漂亮/乾淨", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "きれいな部屋ですね。",
              translation: "真是乾淨的房間啊。",
              segments: [
                { text: "きれい", meaning: "乾淨", tail: "" },
                { text: "な", meaning: "的", tail: " " },
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "手をきれいに洗います。",
              translation: "把手洗乾淨。",
              segments: [
                { text: "手", furigana: "て", meaning: "手", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "きれいに", meaning: "乾淨地", tail: " " },
                {
                  text: "洗います",
                  furigana: "あらいます",
                  meaning: "洗",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "景色がきれいです。",
              translation: "風景很漂亮。",
              segments: [
                { text: "景色", furigana: "けしき", meaning: "風景", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "きれい", meaning: "漂亮", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「きれい」同時有「乾淨」和「漂亮」的意思。注意它是Na形容詞，接名詞時要說「きれい『な』」。",
          image_file: "clean.png",
        },
        {
          id: "adj-21",
          term_zh: "髒的",
          related_terms: [
            {
              term_target: "汚い",
              pronunciation: ["kitanai"],
              specific_note: "不乾淨",
              segments: [
                {
                  text: "汚い",
                  furigana: "きたない",
                  meaning: "髒的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "手が汚いです。",
              translation: "手很髒。",
              segments: [
                { text: "手", furigana: "て", meaning: "手", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "汚い", furigana: "きたない", meaning: "髒", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "部屋が汚くなりました。",
              translation: "房間變髒了。",
              segments: [
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "汚く",
                  furigana: "きたなく",
                  meaning: "髒地",
                  tail: " ",
                },
                { text: "なりました", meaning: "變成了", tail: "。" },
              ],
            },
            {
              sentence: "触らないで、汚いから。",
              translation: "不要碰，因為很髒。",
              segments: [
                {
                  text: "触らないで",
                  furigana: "さわらないで",
                  meaning: "別碰",
                  tail: "、",
                },
                { text: "汚い", furigana: "きたない", meaning: "髒", tail: "" },
                { text: "から", meaning: "因為", tail: "。" },
              ],
            },
          ],
          usage_note: "形容環境或身體不乾淨，有時也指字跡潦草。",
          image_file: "dirty.png",
        },
        {
          id: "adj-22",
          term_zh: "簡單的",
          related_terms: [
            {
              term_target: "簡単",
              pronunciation: ["kantan"],
              specific_note: "容易",
              segments: [
                {
                  text: "簡単",
                  furigana: "かんたん",
                  meaning: "簡單",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは簡単です。",
              translation: "這個很簡單。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "簡単",
                  furigana: "かんたん",
                  meaning: "簡單",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
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
                  tail: "",
                },
                { text: "な", meaning: "的", tail: " " },
                {
                  text: "問題",
                  furigana: "もんだい",
                  meaning: "問題",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "使い方が簡単です。",
              translation: "使用方法很簡單。",
              segments: [
                {
                  text: "使い方",
                  furigana: "つかいかた",
                  meaning: "使用方法",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "簡単",
                  furigana: "かんたん",
                  meaning: "簡單",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "Na形容詞，修飾名詞時要加「な」。",
          image_file: "easy.png",
        },
        {
          id: "adj-23",
          term_zh: "困難的",
          related_terms: [
            {
              term_target: "難しい",
              pronunciation: ["muzukashii"],
              specific_note: "難",
              segments: [
                {
                  text: "難しい",
                  furigana: "むずかしい",
                  meaning: "困難的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本語は難しいですか。",
              translation: "日文很難嗎？",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "難しい",
                  furigana: "むずかしい",
                  meaning: "難",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "難しい顔をしていますね。",
              translation: "你一臉凝重(困難)的表情呢。",
              segments: [
                {
                  text: "難しい",
                  furigana: "むずかしい",
                  meaning: "困難/凝重",
                  tail: " ",
                },
                { text: "顔", furigana: "かお", meaning: "臉/表情", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "して", meaning: "做/呈現", tail: "" },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "ね", meaning: "呢", tail: "。" },
              ],
            },
            {
              sentence: "それはちょっと難しいです。",
              translation: "那有點困難... (委婉拒絕常用)。",
              segments: [
                { text: "それ", meaning: "那", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "ちょっと", meaning: "稍微/有點", tail: " " },
                {
                  text: "難しい",
                  furigana: "むずかしい",
                  meaning: "困難",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日本人想拒絕時，常說「ちょっと難しい (有點難)」來代替直接說不。",
          image_file: "difficult.png",
        },
        {
          id: "adj-24",
          term_zh: "正確的",
          related_terms: [
            {
              term_target: "正しい",
              pronunciation: ["tadashii"],
              specific_note: "",
              segments: [
                {
                  text: "正しい",
                  furigana: "ただしい",
                  meaning: "正確的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "正しい答え。",
              translation: "正確答案。",
              segments: [
                {
                  text: "正しい",
                  furigana: "ただしい",
                  meaning: "正確的",
                  tail: " ",
                },
                {
                  text: "答え",
                  furigana: "こたえ",
                  meaning: "答案",
                  tail: ".",
                },
              ],
            },
            {
              sentence: "これは正しいですか。",
              translation: "這樣做正確嗎？(這是對的嗎？)",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "正しい",
                  furigana: "ただしい",
                  meaning: "正確",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "合っています。",
              translation: "是正確的 (符合的)。",
              segments: [
                {
                  text: "合って",
                  furigana: "あって",
                  meaning: "符合/對",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
          ],
          usage_note:
            "口語中確認「對不對」時，常說「合っていますか (atteimasuka)」。",
          image_file: "correct.png",
        },
        {
          id: "adj-25",
          term_zh: "錯誤的 (錯)",
          related_terms: [
            {
              term_target: "間違い",
              pronunciation: ["machigai"],
              specific_note: "名詞/形容用",
              segments: [
                {
                  text: "間違い",
                  furigana: "まちがい",
                  meaning: "錯誤",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "間違い電話です。",
              translation: "你打錯電話了 (錯誤電話)。",
              segments: [
                {
                  text: "間違い",
                  furigana: "まちがい",
                  meaning: "錯誤",
                  tail: "",
                },
                { text: "電話", furigana: "でんわ", meaning: "電話", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "道が違います。",
              translation: "路走錯了 (路不一樣)。",
              segments: [
                { text: "道", furigana: "みち", meaning: "路", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "違います",
                  furigana: "ちがいます",
                  meaning: "不同/錯",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "私の間違いです。",
              translation: "是我的錯。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "間違い",
                  furigana: "まちがい",
                  meaning: "錯誤",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日文常用動詞「違う (chigau - 不同/不對)」來表示 Wrong。名詞則用「間違い (machigai)」。",
          image_file: "wrong.png",
        },
        {
          id: "adj-26",
          term_zh: "重要的",
          related_terms: [
            {
              term_target: "大切",
              pronunciation: ["taisetsu"],
              specific_note: "珍貴/重要",
              segments: [
                {
                  text: "大切",
                  furigana: "たいせつ",
                  meaning: "重要",
                  tail: "",
                },
              ],
            },
            {
              term_target: "重要",
              pronunciation: ["juuyou"],
              specific_note: "客觀重要",
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
              sentence: "大切な人。",
              translation: "重要的人 (心愛的人)。",
              segments: [
                {
                  text: "大切",
                  furigana: "たいせつ",
                  meaning: "重要",
                  tail: "",
                },
                { text: "な", meaning: "的", tail: " " },
                { text: "人", furigana: "ひと", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "これは私にとって大切です。",
              translation: "這對我來說很珍貴。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "にとって", meaning: "對...而言", tail: " " },
                {
                  text: "大切",
                  furigana: "たいせつ",
                  meaning: "重要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "重要な会議。",
              translation: "重要的會議。",
              segments: [
                {
                  text: "重要",
                  furigana: "じゅうよう",
                  meaning: "重要",
                  tail: "",
                },
                { text: "な", meaning: "的", tail: " " },
                {
                  text: "会議",
                  furigana: "かいぎ",
                  meaning: "會議",
                  tail: ".",
                },
              ],
            },
          ],
          usage_note:
            "「大切」帶有珍惜的情感，「重要」較偏向公事或客觀事實。Na形容詞。",
          image_file: "important.png",
        },
        {
          id: "adj-27",
          term_zh: "不同的",
          related_terms: [
            {
              term_target: "違う",
              pronunciation: ["chigau"],
              specific_note: "不同/不一樣",
              segments: [
                { text: "違う", furigana: "ちがう", meaning: "不同", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "色が違います。",
              translation: "顏色不一樣。",
              segments: [
                { text: "色", furigana: "いろ", meaning: "顏色", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "違います",
                  furigana: "ちがいます",
                  meaning: "不同",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "みんな違って、みんないい。",
              translation: "大家都不一樣，大家都很好 (名句)。",
              segments: [
                { text: "みんな", meaning: "大家", tail: "" },
                {
                  text: "違って",
                  furigana: "ちがって",
                  meaning: "不同",
                  tail: "、",
                },
                { text: "みんな", meaning: "大家", tail: "" },
                { text: "いい", meaning: "好", tail: "。" },
              ],
            },
            {
              sentence: "違う店に行きましょう。",
              translation: "去別家(不同)店吧。",
              segments: [
                {
                  text: "違う",
                  furigana: "ちがう",
                  meaning: "不同",
                  tail: " ",
                },
                { text: "店", furigana: "みせ", meaning: "店", tail: "" },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きましょう",
                  furigana: "いきましょう",
                  meaning: "去吧",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "「違う」在文法上是動詞，但在語意上常用來表示形容詞「不同的」。",
          image_file: "different.png",
        },
        {
          id: "adj-28",
          term_zh: "真的／真實的",
          related_terms: [
            {
              term_target: "本当",
              pronunciation: ["hontou"],
              specific_note: "真實/真的",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "",
                },
              ],
            },
            {
              term_target: "本物",
              pronunciation: ["honmono"],
              specific_note: "真貨/實物",
              segments: [
                {
                  text: "本物",
                  furigana: "ほんもの",
                  meaning: "真貨",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは本物の金です。",
              translation: "這是真金。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "本物",
                  furigana: "ほんもの",
                  meaning: "真貨",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                { text: "金", furigana: "きん", meaning: "金子", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "本当の話。",
              translation: "真實的故事(真話)。",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真實",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "話",
                  furigana: "はなし",
                  meaning: "話/故事",
                  tail: ".",
                },
              ],
            },
            {
              sentence: "夢ではありません、本当です。",
              translation: "不是夢，是真的。",
              segments: [
                { text: "夢", furigana: "ゆめ", meaning: "夢", tail: "" },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是", tail: "、" },
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "「本当」用於事實真假，「本物」用於物品真偽。",
          image_file: "real.png",
        },
        {
          id: "adj-29",
          term_zh: "有趣的",
          related_terms: [
            {
              term_target: "面白い",
              pronunciation: ["omoshiroi"],
              specific_note: "",
              segments: [
                {
                  text: "面白い",
                  furigana: "おもしろい",
                  meaning: "有趣的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "この本は面白いです。",
              translation: "這本書很有趣。",
              segments: [
                { text: "この", meaning: "這", tail: " " },
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "面白い",
                  furigana: "おもしろい",
                  meaning: "有趣",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "面白い人ですね。",
              translation: "真是個有趣的人啊 (幽默)。",
              segments: [
                {
                  text: "面白い",
                  furigana: "おもしろい",
                  meaning: "有趣",
                  tail: " ",
                },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "面白そう！",
              translation: "看起來很有趣！",
              segments: [
                {
                  text: "面白",
                  furigana: "おもしろ",
                  meaning: "有趣",
                  tail: "",
                },
                { text: "そう", meaning: "看起來", tail: "！" },
              ],
            },
          ],
          usage_note: "好笑的、有意思的都可以用。",
          image_file: "interesting.png",
        },
        {
          id: "adj-30",
          term_zh: "美麗的 (漂亮的)",
          related_terms: [
            {
              term_target: "美しい",
              pronunciation: ["utsukushii"],
              specific_note: "美麗/優美",
              segments: [
                {
                  text: "美しい",
                  furigana: "うつくしい",
                  meaning: "美麗的",
                  tail: "",
                },
              ],
            },
            {
              term_target: "きれい",
              pronunciation: ["kirei"],
              specific_note: "漂亮/乾淨",
              segments: [{ text: "きれい", meaning: "漂亮", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "美しい花。",
              translation: "美麗的花。",
              segments: [
                {
                  text: "美しい",
                  furigana: "うつくしい",
                  meaning: "美麗",
                  tail: " ",
                },
                { text: "花", furigana: "はな", meaning: "花", tail: "." },
              ],
            },
            {
              sentence: "あなたは美しいです。",
              translation: "你很美。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "美しい",
                  furigana: "うつくしい",
                  meaning: "美麗",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "きれいな景色ですね。",
              translation: "真漂亮的景色。",
              segments: [
                { text: "きれい", meaning: "漂亮", tail: "" },
                { text: "な", meaning: "的", tail: " " },
                { text: "景色", furigana: "けしき", meaning: "景色", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「美しい」是比較文學、正式的「美」，口語常說「きれい」。",
          image_file: "beautiful.png",
        },
        {
          id: "adj-31",
          term_zh: "便宜的",
          related_terms: [
            {
              term_target: "安い",
              pronunciation: ["yasui"],
              specific_note: "",
              segments: [
                {
                  text: "安い",
                  furigana: "やすい",
                  meaning: "便宜的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは安いです。",
              translation: "這個很便宜。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "安い", furigana: "やすい", meaning: "便宜", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "安いチケットを探しています。",
              translation: "我在找便宜的票。",
              segments: [
                {
                  text: "安い",
                  furigana: "やすい",
                  meaning: "便宜",
                  tail: " ",
                },
                { text: "チケット", meaning: "票", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "探して",
                  furigana: "さがして",
                  meaning: "找",
                  tail: "",
                },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "安くておいしい。",
              translation: "便宜又好吃。",
              segments: [
                {
                  text: "安くて",
                  furigana: "やすくて",
                  meaning: "便宜而且",
                  tail: " ",
                },
                { text: "おいしい", meaning: "好吃", tail: "." },
              ],
            },
          ],
          usage_note: "價格低廉。",
          image_file: "cheap.png",
        },
        {
          id: "adj-32",
          term_zh: "昂貴的",
          related_terms: [
            {
              term_target: "高い",
              pronunciation: ["takai"],
              specific_note: "價格高",
              segments: [
                { text: "高い", furigana: "たかい", meaning: "貴的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本は物価が高いです。",
              translation: "日本物價很高(貴)。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "物価", furigana: "ぶっか", meaning: "物價", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "高い",
                  furigana: "たかい",
                  meaning: "高/貴",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "高すぎて買えません。",
              translation: "太貴了買不起。",
              segments: [
                { text: "高", furigana: "たか", meaning: "貴", tail: "" },
                { text: "すぎて", meaning: "太過於...", tail: " " },
                {
                  text: "買えません",
                  furigana: "かえません",
                  meaning: "不能買",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "高い時計。",
              translation: "昂貴的手錶。",
              segments: [
                { text: "高い", furigana: "たかい", meaning: "貴", tail: " " },
                {
                  text: "時計",
                  furigana: "とけい",
                  meaning: "時鐘/手錶",
                  tail: ".",
                },
              ],
            },
          ],
          usage_note: "與「高(tall)」是同一個字。",
          image_file: "expensive.png",
        },
        {
          id: "adj-33",
          term_zh: "飢餓的",
          related_terms: [
            {
              term_target: "お腹が空いた",
              pronunciation: ["onaka ga suita"],
              specific_note: "肚子餓了(片語)",
              segments: [
                { text: "お腹", furigana: "おなか", meaning: "肚子", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: "" },
                {
                  text: "空いた",
                  furigana: "すいた",
                  meaning: "空了/餓了",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "お腹が空きました。",
              translation: "我肚子餓了 (有禮貌)。",
              segments: [
                { text: "お腹", furigana: "おなか", meaning: "肚子", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "空きました",
                  furigana: "すきました",
                  meaning: "餓了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "お腹ペコペコです。",
              translation: "肚子餓扁了 (擬聲詞，口語)。",
              segments: [
                {
                  text: "お腹",
                  furigana: "おなか",
                  meaning: "肚子",
                  tail: " ",
                },
                { text: "ペコペコ", meaning: "餓扁的樣子", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "何か食べたい。",
              translation: "想吃點什麼 (因為餓了)。",
              segments: [
                { text: "何", furigana: "なに", meaning: "什麼", tail: "" },
                { text: "か", meaning: "某(東西)", tail: " " },
                {
                  text: "食べたい",
                  furigana: "たべたい",
                  meaning: "想吃",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "日文沒有單一形容詞「Hungry」，而是說「肚子空了(verb past tense)」。",
          image_file: "hungry.png",
        },
        {
          id: "adj-34",
          term_zh: "疲累的",
          related_terms: [
            {
              term_target: "疲れた",
              pronunciation: ["tsukareta"],
              specific_note: "累了(狀態)",
              segments: [
                {
                  text: "疲れた",
                  furigana: "つかれた",
                  meaning: "累了",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "疲れました。",
              translation: "我累了 (有禮貌)。",
              segments: [
                {
                  text: "疲れました",
                  furigana: "つかれました",
                  meaning: "累了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "疲れているみたいですね。",
              translation: "你看起來很累呢。",
              segments: [
                {
                  text: "疲れて",
                  furigana: "つかれて",
                  meaning: "累",
                  tail: "",
                },
                { text: "いる", meaning: "狀態", tail: " " },
                { text: "みたい", meaning: "好像/看起來", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "仕事で疲れました。",
              translation: "因為工作而累了。",
              segments: [
                { text: "仕事", furigana: "しごと", meaning: "工作", tail: "" },
                { text: "で", meaning: "因為", tail: " " },
                {
                  text: "疲れました",
                  furigana: "つかれました",
                  meaning: "累了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "日文用動詞的過去式「疲れた」來表示「累了」這種狀態，而不是形容詞。",
          image_file: "tired.png",
        },
        {
          id: "adj-35",
          term_zh: "忙碌的",
          related_terms: [
            {
              term_target: "忙しい",
              pronunciation: ["isogashii"],
              specific_note: "",
              segments: [
                {
                  text: "忙しい",
                  furigana: "いそがしい",
                  meaning: "忙碌的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "今、忙しいですか。",
              translation: "你現在忙嗎？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                {
                  text: "忙しい",
                  furigana: "いそがしい",
                  meaning: "忙",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "仕事が忙しいです。",
              translation: "工作很忙。",
              segments: [
                { text: "仕事", furigana: "しごと", meaning: "工作", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "忙しい",
                  furigana: "いそがしい",
                  meaning: "忙",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "毎日忙しいです。",
              translation: "每天都很忙。",
              segments: [
                {
                  text: "毎日",
                  furigana: "まいにち",
                  meaning: "每天",
                  tail: " ",
                },
                {
                  text: "忙しい",
                  furigana: "いそがしい",
                  meaning: "忙",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "形容沒時間。",
          image_file: "busy.png",
        },
        {
          id: "adj-36",
          term_zh: "高興的 (快樂)",
          related_terms: [
            {
              term_target: "嬉しい",
              pronunciation: ["ureshii"],
              specific_note: "開心/喜悅",
              segments: [
                {
                  text: "嬉しい",
                  furigana: "うれしい",
                  meaning: "開心",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "会えて嬉しいです。",
              translation: "很高興能見到你。",
              segments: [
                {
                  text: "会えて",
                  furigana: "あえて",
                  meaning: "能見面",
                  tail: " ",
                },
                {
                  text: "嬉しい",
                  furigana: "うれしい",
                  meaning: "開心",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "それは嬉しいニュースですね。",
              translation: "那真是個令人開心的消息。",
              segments: [
                { text: "それ", meaning: "那", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "嬉しい",
                  furigana: "うれしい",
                  meaning: "開心",
                  tail: " ",
                },
                { text: "ニュース", meaning: "新聞/消息", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "お誕生日おめでとう。",
              translation: "生日快樂 (恭喜)。",
              segments: [
                {
                  text: "お誕生日",
                  furigana: "おたんじょうび",
                  meaning: "生日",
                  tail: " ",
                },
                { text: "おめでとう", meaning: "恭喜", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「嬉しい」是心裡的喜悅。注意：日文的「Happy Birthday」不說 Happy，而說「恭喜 (omedetou)」。",
          image_file: "happy.png",
        },
        {
          id: "adj-37",
          term_zh: "悲傷的 (難過)",
          related_terms: [
            {
              term_target: "悲しい",
              pronunciation: ["kanashii"],
              specific_note: "",
              segments: [
                {
                  text: "悲しい",
                  furigana: "かなしい",
                  meaning: "悲傷的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "悲しい映画。",
              translation: "悲傷的電影。",
              segments: [
                {
                  text: "悲しい",
                  furigana: "かなしい",
                  meaning: "悲傷",
                  tail: " ",
                },
                {
                  text: "映画",
                  furigana: "えいが",
                  meaning: "電影",
                  tail: ".",
                },
              ],
            },
            {
              sentence: "悲しまないで。",
              translation: "別難過。",
              segments: [
                {
                  text: "悲しまない",
                  furigana: "かなしまない",
                  meaning: "不悲傷",
                  tail: "",
                },
                { text: "で", meaning: "請(口語)", tail: "。" },
              ],
            },
            {
              sentence: "とても悲しいです。",
              translation: "我很難過。",
              segments: [
                { text: "とても", meaning: "非常", tail: " " },
                {
                  text: "悲しい",
                  furigana: "かなしい",
                  meaning: "難過",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "內心難過。",
          image_file: "sad.png",
        },
        {
          id: "adj-38",
          term_zh: "相似的",
          related_terms: [
            {
              term_target: "似ている",
              pronunciation: ["niteiru"],
              specific_note: "長得像(狀態)",
              segments: [
                { text: "似て", furigana: "にて", meaning: "像", tail: "" },
                { text: "いる", meaning: "狀態", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "顔が似ています。",
              translation: "臉長得很像。",
              segments: [
                { text: "顔", furigana: "かお", meaning: "臉", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "似て", furigana: "にて", meaning: "像", tail: "" },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
            {
              sentence: "似ている色。",
              translation: "相似的顏色。",
              segments: [
                { text: "似て", furigana: "にて", meaning: "像", tail: "" },
                { text: "いる", meaning: "的", tail: " " },
                { text: "色", furigana: "いろ", meaning: "顏色", tail: "." },
              ],
            },
            {
              sentence: "親子だからそっくりです。",
              translation: "因為是親子所以一模一樣。",
              segments: [
                { text: "親子", furigana: "おやこ", meaning: "親子", tail: "" },
                { text: "だから", meaning: "所以", tail: " " },
                { text: "そっくり", meaning: "一模一樣", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日文用動詞狀態「似ている (正在像...)」來表示「相似的」。",
          image_file: "similar.png",
        },
        {
          id: "adj-39",
          term_zh: "有名的",
          related_terms: [
            {
              term_target: "有名",
              pronunciation: ["yuumei"],
              specific_note: "Na形容詞",
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
              sentence: "彼は有名な歌手です。",
              translation: "他是知名的歌手。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "有名",
                  furigana: "ゆうめい",
                  meaning: "有名",
                  tail: "",
                },
                { text: "な", meaning: "的", tail: " " },
                { text: "歌手", furigana: "かしゅ", meaning: "歌手", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "この店はラーメンで有名です。",
              translation: "這家店的拉麵很有名。",
              segments: [
                { text: "この", meaning: "這", tail: " " },
                { text: "店", furigana: "みせ", meaning: "店", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "ラーメン", meaning: "拉麵", tail: "" },
                { text: "で", meaning: "因...", tail: " " },
                {
                  text: "有名",
                  furigana: "ゆうめい",
                  meaning: "有名",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "有名になりたいです。",
              translation: "我想變得有名。",
              segments: [
                {
                  text: "有名",
                  furigana: "ゆうめい",
                  meaning: "有名",
                  tail: "",
                },
                { text: "に", meaning: "成(結果)", tail: " " },
                { text: "なりたい", meaning: "想變", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "Na形容詞，接名詞時要說「有名『な』」。",
          image_file: "famous.png",
        },
        {
          id: "adj-40",
          term_zh: "外國的",
          related_terms: [
            {
              term_target: "外国の",
              pronunciation: ["gaikoku no"],
              specific_note: "外國+的",
              segments: [
                {
                  text: "外国",
                  furigana: "がいこく",
                  meaning: "外國",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "外国に行きたいです。",
              translation: "我想去國外。",
              segments: [
                {
                  text: "外国",
                  furigana: "がいこく",
                  meaning: "外國",
                  tail: "",
                },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きたい",
                  furigana: "いきたい",
                  meaning: "想去",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "外国語を勉強しています。",
              translation: "我正在學外語。",
              segments: [
                {
                  text: "外国語",
                  furigana: "がいこくご",
                  meaning: "外語",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "學習",
                  tail: "",
                },
                { text: "して", meaning: "做", tail: "" },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "海外旅行。",
              translation: "海外旅行。",
              segments: [
                {
                  text: "海外",
                  furigana: "かいがい",
                  meaning: "海外",
                  tail: " ",
                },
                {
                  text: "旅行",
                  furigana: "りょこう",
                  meaning: "旅行",
                  tail: ".",
                },
              ],
            },
          ],
          usage_note:
            "「外国 (gaikoku)」是名詞，當形容詞用時加「の」。或者用「海外 (kaigai)」。",
          image_file: "foreign.png",
        },
        {
          id: "adj-41",
          term_zh: "聰明的",
          related_terms: [
            {
              term_target: "頭がいい",
              pronunciation: ["atama ga ii"],
              specific_note: "頭腦好",
              segments: [
                { text: "頭", furigana: "あたま", meaning: "頭", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "いい", meaning: "好", tail: "" },
              ],
            },
            {
              term_target: "賢い",
              pronunciation: ["kashikoi"],
              specific_note: "賢明/智慧",
              segments: [
                {
                  text: "賢い",
                  furigana: "かしこい",
                  meaning: "聰明",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼は頭がいいです。",
              translation: "他很聰明。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "頭", furigana: "あたま", meaning: "頭腦", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "いい", meaning: "好", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "賢い学生。",
              translation: "聰明的學生。",
              segments: [
                {
                  text: "賢い",
                  furigana: "かしこい",
                  meaning: "聰明",
                  tail: " ",
                },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: ".",
                },
              ],
            },
            {
              sentence: "イルカは賢い動物です。",
              translation: "海豚是聰明的動物。",
              segments: [
                { text: "イルカ", meaning: "海豚", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "賢い",
                  furigana: "かしこい",
                  meaning: "聰明",
                  tail: " ",
                },
                {
                  text: "動物",
                  furigana: "どうぶつ",
                  meaning: "動物",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "日常最常用「頭がいい」。",
          image_file: "intelligent.png",
        },
        {
          id: "adj-42",
          term_zh: "危險的",
          related_terms: [
            {
              term_target: "危ない",
              pronunciation: ["abunai"],
              specific_note: "危險/小心",
              segments: [
                {
                  text: "危ない",
                  furigana: "あぶない",
                  meaning: "危險",
                  tail: "",
                },
              ],
            },
            {
              term_target: "危険",
              pronunciation: ["kiken"],
              specific_note: "危險(名詞/Na形)",
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
                {
                  text: "危ない",
                  furigana: "あぶない",
                  meaning: "危險",
                  tail: "！",
                },
              ],
            },
            {
              sentence: "ここは危険です。",
              translation: "這裡很危險。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "危険", furigana: "きけん", meaning: "危險", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "夜道は危ないです。",
              translation: "夜路很危險。",
              segments: [
                { text: "夜道", furigana: "よみち", meaning: "夜路", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "危ない",
                  furigana: "あぶない",
                  meaning: "危險",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "提醒別人小心時大喊「危ない (Abunai)!」。",
          image_file: "dangerous.png",
        },
        {
          id: "adj-43",
          term_zh: "仁慈的 (親切)",
          related_terms: [
            {
              term_target: "優しい",
              pronunciation: ["yasashii"],
              specific_note: "溫柔/仁慈",
              segments: [
                {
                  text: "優しい",
                  furigana: "やさしい",
                  meaning: "溫柔",
                  tail: "",
                },
              ],
            },
            {
              term_target: "親切",
              pronunciation: ["shinsetsu"],
              specific_note: "親切(Na形)",
              segments: [
                {
                  text: "親切",
                  furigana: "しんせつ",
                  meaning: "親切",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "彼はとても優しいです。",
              translation: "他非常溫柔(仁慈)。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "とても", meaning: "非常", tail: " " },
                {
                  text: "優しい",
                  furigana: "やさしい",
                  meaning: "溫柔",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "親切な人。",
              translation: "親切的人。",
              segments: [
                {
                  text: "親切",
                  furigana: "しんせつ",
                  meaning: "親切",
                  tail: "",
                },
                { text: "な", meaning: "的", tail: " " },
                { text: "人", furigana: "ひと", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "ご親切にありがとうございます。",
              translation: "謝謝你的親切 (好意)。",
              segments: [
                { text: "ご", meaning: "(尊稱)", tail: "" },
                {
                  text: "親切",
                  furigana: "しんせつ",
                  meaning: "親切",
                  tail: "",
                },
                { text: "に", meaning: "對...", tail: " " },
                { text: "ありがとう", meaning: "謝謝", tail: "" },
                { text: "ございます", meaning: "(敬語)", tail: "。" },
              ],
            },
          ],
          usage_note: "性格好、體貼。",
          image_file: "kind.png",
        },
        {
          id: "adj-44",
          term_zh: "所有的／每一個",
          related_terms: [
            {
              term_target: "毎〜",
              pronunciation: ["mai..."],
              specific_note: "每...",
              segments: [
                { text: "毎", furigana: "まい", meaning: "每", tail: "" },
              ],
            },
            {
              term_target: "みんな",
              pronunciation: ["minna"],
              specific_note: "大家/所有",
              segments: [{ text: "みんな", meaning: "大家", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "毎日、コーヒーを飲みます。",
              translation: "我每天喝咖啡。",
              segments: [
                {
                  text: "毎日",
                  furigana: "まいにち",
                  meaning: "每天",
                  tail: "、",
                },
                { text: "コーヒー", meaning: "咖啡", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "飲みます",
                  furigana: "のみます",
                  meaning: "喝",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "みんな持っています。",
              translation: "大家(每個人)都有。",
              segments: [
                { text: "みんな", meaning: "大家", tail: " " },
                {
                  text: "持って",
                  furigana: "もって",
                  meaning: "持有",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
            {
              sentence: "毎朝、早起きします。",
              translation: "每天早上都早起。",
              segments: [
                {
                  text: "毎朝",
                  furigana: "まいあさ",
                  meaning: "每朝",
                  tail: "、",
                },
                {
                  text: "早起き",
                  furigana: "はやおき",
                  meaning: "早起",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
          ],
          usage_note:
            "時間用「毎 (mai)」，人或物用「みんな (minna)」或「全部 (zenbu)」。",
          image_file: "every.png",
        },
        {
          id: "adj-45",
          term_zh: "最喜愛的",
          related_terms: [
            {
              term_target: "一番好きな",
              pronunciation: ["ichiban suki na"],
              specific_note: "第一喜歡的",
              segments: [
                {
                  text: "一番",
                  furigana: "いちばん",
                  meaning: "第一/最",
                  tail: " ",
                },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
              ],
            },
            {
              term_target: "お気に入り",
              pronunciation: ["okiniiri"],
              specific_note: "中意的",
              segments: [
                {
                  text: "お気に入り",
                  furigana: "おきにいり",
                  meaning: "中意/最愛",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "一番好きな食べ物。",
              translation: "最喜歡的食物。",
              segments: [
                {
                  text: "一番",
                  furigana: "いちばん",
                  meaning: "最",
                  tail: " ",
                },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "な", meaning: "的", tail: " " },
                {
                  text: "食べ物",
                  furigana: "たべもの",
                  meaning: "食物",
                  tail: ".",
                },
              ],
            },
            {
              sentence: "これは私のお気に入りです。",
              translation: "這是我的最愛(中意的物品)。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "お気に入り",
                  furigana: "おきにいり",
                  meaning: "最愛",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "一番好きな色は何ですか。",
              translation: "你最喜歡的顏色是什麼？",
              segments: [
                {
                  text: "一番",
                  furigana: "いちばん",
                  meaning: "最",
                  tail: " ",
                },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "な", meaning: "的", tail: " " },
                { text: "色", furigana: "いろ", meaning: "顏色", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "日文沒有單字「Favorite」，要說「第一喜歡的」。",
          image_file: "favorite.png",
        },
        {
          id: "adj-46",
          term_zh: "美味的",
          related_terms: [
            {
              term_target: "おいしい",
              pronunciation: ["oishii"],
              specific_note: "好吃",
              segments: [{ text: "おいしい", meaning: "好吃", tail: "" }],
            },
            {
              term_target: "うまい",
              pronunciation: ["umai"],
              specific_note: "好吃(男性/口語)",
              segments: [{ text: "うまい", meaning: "美味/厲害", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "おいしいです！",
              translation: "真好吃！",
              segments: [
                { text: "おいしい", meaning: "好吃", tail: "" },
                { text: "です", meaning: "是", tail: "！" },
              ],
            },
            {
              sentence: "このケーキはとてもおいしいです。",
              translation: "這個蛋糕非常好吃。",
              segments: [
                { text: "この", meaning: "這個", tail: " " },
                { text: "ケーキ", meaning: "蛋糕", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "とても", meaning: "非常", tail: " " },
                { text: "おいしい", meaning: "好吃", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "おいしそうですね。",
              translation: "看起來很好吃呢。",
              segments: [
                { text: "おいし", meaning: "好吃(去i)", tail: "" },
                { text: "そう", meaning: "看起來", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
          ],
          usage_note: "「うまい」較粗獷，女性或正式場合建議用「おいしい」。",
          image_file: "delicious.png",
        },
      ],
    },
    {
      id: "nouns-1",
      name: "名詞",
      items: [
        {
          id: "n-01",
          term_zh: "時間",
          related_terms: [
            {
              term_target: "時間",
              pronunciation: ["jikan"],
              specific_note: "",
              segments: [
                { text: "時間", furigana: "じかん", meaning: "時間", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今、何時ですか。",
              translation: "現在幾點？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "時間がありません。",
              translation: "我沒有時間。",
              segments: [
                { text: "時間", furigana: "じかん", meaning: "時間", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "ありません", meaning: "沒有", tail: "。" },
              ],
            },
            {
              sentence: "時間がありますか。",
              translation: "你有空(時間)嗎？",
              segments: [
                { text: "時間", furigana: "じかん", meaning: "時間", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "指時間的長度或時刻。",
          image_file: "time.png",
        },
        {
          id: "n-02",
          term_zh: "人們 (人)",
          related_terms: [
            {
              term_target: "人",
              pronunciation: ["hito"],
              specific_note: "人/人們",
              segments: [
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "人が多いですね。",
              translation: "人很多呢。",
              segments: [
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "多い", furigana: "おおい", meaning: "多", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "あの人は誰ですか。",
              translation: "那個人是誰？",
              segments: [
                { text: "あの", meaning: "那個", tail: " " },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "家族は５人です。",
              translation: "我家有五個人。",
              segments: [
                { text: "家族", furigana: "かぞく", meaning: "家人", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "５人", furigana: "ごにん", meaning: "五人", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "日文的「人」單複數同形。",
          image_file: "people.png",
        },
        {
          id: "n-03",
          term_zh: "金錢",
          related_terms: [
            {
              term_target: "お金",
              pronunciation: ["okane"],
              specific_note: "",
              segments: [
                { text: "お金", furigana: "おかね", meaning: "錢", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お金が足りません。",
              translation: "錢不夠。",
              segments: [
                { text: "お金", furigana: "おかね", meaning: "錢", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "足りません",
                  furigana: "たりません",
                  meaning: "不足/不夠",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "お金を払います。",
              translation: "我要付錢。",
              segments: [
                { text: "お金", furigana: "おかね", meaning: "錢", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "払います",
                  furigana: "はらいます",
                  meaning: "支付",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "お金持ちになりたいです。",
              translation: "我想變成有錢人。",
              segments: [
                {
                  text: "お金持ち",
                  furigana: "おかねもち",
                  meaning: "有錢人",
                  tail: "",
                },
                { text: "に", meaning: "成為(結果)", tail: " " },
                { text: "なりたい", meaning: "想變成", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "加上「お (o)」比較禮貌，通常都說「お金」。",
          image_file: "money.png",
        },
        {
          id: "n-04",
          term_zh: "孩子",
          related_terms: [
            {
              term_target: "子供",
              pronunciation: ["kodomo"],
              specific_note: "",
              segments: [
                { text: "子供", furigana: "こども", meaning: "小孩", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "子供がいますか。",
              translation: "你有小孩嗎？",
              segments: [
                { text: "子供", furigana: "こども", meaning: "小孩", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "います", meaning: "有/在", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "子供が遊んでいます。",
              translation: "小孩正在玩。",
              segments: [
                { text: "子供", furigana: "こども", meaning: "小孩", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "遊んで",
                  furigana: "あそんで",
                  meaning: "玩",
                  tail: "",
                },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "元気な子供です。",
              translation: "很有精神的孩子。",
              segments: [
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "有精神",
                  tail: "",
                },
                { text: "な", meaning: "的", tail: " " },
                { text: "子供", furigana: "こども", meaning: "孩子", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "可指兒童或自己的子女。",
          image_file: "child.png",
        },
        {
          id: "n-05",
          term_zh: "水",
          related_terms: [
            {
              term_target: "水",
              pronunciation: ["mizu"],
              specific_note: "",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お水をください。",
              translation: "請給我水。",
              segments: [
                {
                  text: "お水",
                  furigana: "おみず",
                  meaning: "水(禮貌)",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "水を飲みます。",
              translation: "我要喝水。",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "飲みます",
                  furigana: "のみます",
                  meaning: "喝",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "水が出ません。",
              translation: "水沒出來 (停水了)。",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "出ません",
                  furigana: "でません",
                  meaning: "不出來",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "日文的「水」通常指冷水或常溫水，熱水要說「お湯 (oyu)」。",
          image_file: "water.png",
        },
        {
          id: "n-06",
          term_zh: "食物",
          related_terms: [
            {
              term_target: "食べ物",
              pronunciation: ["tabemono"],
              specific_note: "",
              segments: [
                {
                  text: "食べ物",
                  furigana: "たべもの",
                  meaning: "食物",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "好きな食べ物は何ですか。",
              translation: "你喜歡的食物是什麼？",
              segments: [
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "な", meaning: "的", tail: " " },
                {
                  text: "食べ物",
                  furigana: "たべもの",
                  meaning: "食物",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "おいしい食べ物。",
              translation: "好吃的食物。",
              segments: [
                { text: "おいしい", meaning: "好吃", tail: " " },
                {
                  text: "食べ物",
                  furigana: "たべもの",
                  meaning: "食物",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "食べ物を買います。",
              translation: "買吃的東西。",
              segments: [
                {
                  text: "食べ物",
                  furigana: "たべもの",
                  meaning: "食物",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "買います",
                  furigana: "かいます",
                  meaning: "買",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "泛指所有能吃的東西。",
          image_file: "food.png",
        },
        {
          id: "n-07",
          term_zh: "朋友",
          related_terms: [
            {
              term_target: "友達",
              pronunciation: ["tomodachi"],
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
              sentence: "彼は私の友達です。",
              translation: "他是我的朋友。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "友達と遊びます。",
              translation: "跟朋友一起玩。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "と", meaning: "和", tail: " " },
                {
                  text: "遊びます",
                  furigana: "あそびます",
                  meaning: "玩",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "いい友達を持ちました。",
              translation: "我交到了好朋友。",
              segments: [
                { text: "いい", meaning: "好的", tail: " " },
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "持ちました",
                  furigana: "もちました",
                  meaning: "擁有了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "朋友。",
          image_file: "friend.png",
        },
        {
          id: "n-08",
          term_zh: "家庭 (家人)",
          related_terms: [
            {
              term_target: "家族",
              pronunciation: ["kazoku"],
              specific_note: "",
              segments: [
                {
                  text: "家族",
                  furigana: "かぞく",
                  meaning: "家人/家庭",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "家族は何人ですか。",
              translation: "你家裡有幾個人？",
              segments: [
                { text: "家族", furigana: "かぞく", meaning: "家人", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "何人",
                  furigana: "なんにん",
                  meaning: "幾人",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "家族と一緒に住んでいます。",
              translation: "我和家人住在一起。",
              segments: [
                { text: "家族", furigana: "かぞく", meaning: "家人", tail: "" },
                { text: "と", meaning: "和", tail: " " },
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "",
                },
                { text: "に", meaning: "地", tail: " " },
                { text: "住んで", furigana: "すんで", meaning: "住", tail: "" },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
            {
              sentence: "家族に会いたいです。",
              translation: "我想見我的家人。",
              segments: [
                { text: "家族", furigana: "かぞく", meaning: "家人", tail: "" },
                { text: "に", meaning: "與(對象)", tail: " " },
                {
                  text: "会いたい",
                  furigana: "あいたい",
                  meaning: "想見",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "指家庭成員。",
          image_file: "family.png",
        },
        {
          id: "n-09",
          term_zh: "學生",
          related_terms: [
            {
              term_target: "学生",
              pronunciation: ["gakusei"],
              specific_note: "",
              segments: [
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は学生です。",
              translation: "我是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
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
              sentence: "彼は大学生です。",
              translation: "他是大學生。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "大学生",
                  furigana: "だいがくせい",
                  meaning: "大學生",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
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
                  tail: "",
                },
                { text: "な", meaning: "的", tail: " " },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: ".",
                },
              ],
            },
          ],
          usage_note: "小學生~大學生都可用，但小學生常單獨稱「小学生」。",
          image_file: "student.png",
        },
        {
          id: "n-10",
          term_zh: "文化",
          related_terms: [
            {
              term_target: "文化",
              pronunciation: ["bunka"],
              specific_note: "",
              segments: [
                { text: "文化", furigana: "ぶんか", meaning: "文化", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本の文化が好きです。",
              translation: "我喜歡日本文化。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "文化", furigana: "ぶんか", meaning: "文化", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "異文化を学びます。",
              translation: "學習異國文化。",
              segments: [
                {
                  text: "異文化",
                  furigana: "いぶんか",
                  meaning: "異文化",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "学びます",
                  furigana: "まなびます",
                  meaning: "學習",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "食文化。",
              translation: "飲食文化。",
              segments: [
                {
                  text: "食文化",
                  furigana: "しょくぶんか",
                  meaning: "飲食文化",
                  tail: "。",
                },
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
              pronunciation: ["mondai"],
              specific_note: "難題/考題",
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
                { text: "ありません", meaning: "沒有", tail: "。" },
              ],
            },
            {
              sentence: "それは問題ですね。",
              translation: "那真是個問題呢 (那很傷腦筋)。",
              segments: [
                { text: "それ", meaning: "那", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "問題",
                  furigana: "もんだい",
                  meaning: "問題",
                  tail: "",
                },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "次の問題。",
              translation: "下一道題目。",
              segments: [
                { text: "次", furigana: "つぎ", meaning: "下一個", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "問題",
                  furigana: "もんだい",
                  meaning: "問題/題目",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "指麻煩事或考試題目。要發問的問題用「質問 (shitsumon)」。",
          image_file: "problem.png",
        },
        {
          id: "n-12",
          term_zh: "公司",
          related_terms: [
            {
              term_target: "会社",
              pronunciation: ["kaisha"],
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
              translation: "去公司 (上班)。",
              segments: [
                {
                  text: "会社",
                  furigana: "かいしゃ",
                  meaning: "公司",
                  tail: "",
                },
                { text: "へ", meaning: "往", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "大きい会社です。",
              translation: "是一間大公司。",
              segments: [
                {
                  text: "大きい",
                  furigana: "おおきい",
                  meaning: "大的",
                  tail: " ",
                },
                {
                  text: "会社",
                  furigana: "かいしゃ",
                  meaning: "公司",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "会社を辞めました。",
              translation: "我辭職了 (辭掉公司)。",
              segments: [
                {
                  text: "会社",
                  furigana: "かいしゃ",
                  meaning: "公司",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "辞めました",
                  furigana: "やめました",
                  meaning: "辭了",
                  tail: "。",
                },
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
              term_target: "男の人",
              pronunciation: ["otoko no hito"],
              specific_note: "男人",
              segments: [
                { text: "男", furigana: "おとこ", meaning: "男", tail: "" },
                { text: "の", meaning: "的", tail: "" },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "あの男の人は誰ですか。",
              translation: "那個男人是誰？",
              segments: [
                { text: "あの", meaning: "那個", tail: " " },
                {
                  text: "男の人",
                  furigana: "おとこのひと",
                  meaning: "男人",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "背が高い男の人。",
              translation: "個子很高的男人。",
              segments: [
                { text: "背", furigana: "せ", meaning: "身高", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "高い", furigana: "たかい", meaning: "高", tail: " " },
                {
                  text: "男の人",
                  furigana: "おとこのひと",
                  meaning: "男人",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "かっこいい男の人ですね。",
              translation: "真是個帥氣的男人呢。",
              segments: [
                { text: "かっこいい", meaning: "帥氣", tail: " " },
                {
                  text: "男の人",
                  furigana: "おとこのひと",
                  meaning: "男人",
                  tail: "",
                },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
          ],
          usage_note: "口語常用「男の人」。單說「男 (otoko)」有時較粗魯。",
          image_file: "man.png",
        },
        {
          id: "n-14",
          term_zh: "女性",
          related_terms: [
            {
              term_target: "女の人",
              pronunciation: ["onna no hito"],
              specific_note: "女人",
              segments: [
                { text: "女", furigana: "おんな", meaning: "女", tail: "" },
                { text: "の", meaning: "的", tail: "" },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "きれいな女の人。",
              translation: "漂亮的女人。",
              segments: [
                { text: "きれい", meaning: "漂亮", tail: "" },
                { text: "な", meaning: "的", tail: " " },
                {
                  text: "女の人",
                  furigana: "おんなのひと",
                  meaning: "女人",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "彼女は女の人です。",
              translation: "她是女生(女人)。",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "女の人",
                  furigana: "おんなのひと",
                  meaning: "女人",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "優しい女の人。",
              translation: "溫柔的女性。",
              segments: [
                {
                  text: "優しい",
                  furigana: "やさしい",
                  meaning: "溫柔的",
                  tail: " ",
                },
                {
                  text: "女の人",
                  furigana: "おんなのひと",
                  meaning: "女人",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "口語常用「女の人」。單說「女 (onna)」有時較粗魯。",
          image_file: "woman.png",
        },
        {
          id: "n-15",
          term_zh: "學校",
          related_terms: [
            {
              term_target: "学校",
              pronunciation: ["gakkou"],
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
                  tail: "",
                },
                { text: "へ", meaning: "往", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "学校はどこですか。",
              translation: "學校在哪裡？",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "学校で勉強します。",
              translation: "在學校讀書。",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "",
                },
                { text: "で", meaning: "在(地點)", tail: " " },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書/學習",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
          ],
          usage_note: "學校。",
          image_file: "school.png",
        },
        {
          id: "n-16",
          term_zh: "老師",
          related_terms: [
            {
              term_target: "先生",
              pronunciation: ["sensei"],
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
              sentence: "日本語の先生。",
              translation: "日文老師。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "先生、質問があります。",
              translation: "老師，我有問題。",
              segments: [
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "、",
                },
                {
                  text: "質問",
                  furigana: "しつもん",
                  meaning: "問題",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "。" },
              ],
            },
            {
              sentence: "先生は元気です。",
              translation: "老師很健康(有精神)。",
              segments: [
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "健康/精神",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "對醫生、律師、作家也可以稱呼為「先生」。",
          image_file: "teacher.png",
        },
        {
          id: "n-17",
          term_zh: "影片／電影",
          related_terms: [
            {
              term_target: "映画",
              pronunciation: ["eiga"],
              specific_note: "電影",
              segments: [
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "映画を見ます。",
              translation: "我要看電影。",
              segments: [
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見ます",
                  furigana: "みます",
                  meaning: "看",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "どんな映画が好きですか。",
              translation: "你喜歡什麼樣的電影？",
              segments: [
                { text: "どんな", meaning: "什麼樣的", tail: " " },
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
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
                  tail: "",
                },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "電影。",
          image_file: "movie.png",
        },
        {
          id: "n-18",
          term_zh: "電話 (手機)",
          related_terms: [
            {
              term_target: "電話",
              pronunciation: ["denwa"],
              specific_note: "電話/通話",
              segments: [
                { text: "電話", furigana: "でんわ", meaning: "電話", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "電話をかけます。",
              translation: "打電話。",
              segments: [
                { text: "電話", furigana: "でんわ", meaning: "電話", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "かけます", meaning: "打/掛", tail: "。" },
              ],
            },
            {
              sentence: "電話に出てください。",
              translation: "請接電話。",
              segments: [
                { text: "電話", furigana: "でんわ", meaning: "電話", tail: "" },
                { text: "に", meaning: "(對象助詞)", tail: " " },
                {
                  text: "出て",
                  furigana: "でて",
                  meaning: "出席/接",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "電話番号は何番ですか。",
              translation: "電話號碼是幾號？",
              segments: [
                { text: "電話", furigana: "でんわ", meaning: "電話", tail: "" },
                {
                  text: "番号",
                  furigana: "ばんごう",
                  meaning: "號碼",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "何番",
                  furigana: "なんばん",
                  meaning: "幾號",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "一般電話用「電話」，智慧型手機口語常說「スマホ (sumaho)」。",
          image_file: "phone.png",
        },
        {
          id: "n-19",
          term_zh: "電腦",
          related_terms: [
            {
              term_target: "パソコン",
              pronunciation: ["pasokon"],
              specific_note: "PC",
              segments: [{ text: "パソコン", meaning: "電腦", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "パソコンを使います。",
              translation: "使用電腦。",
              segments: [
                { text: "パソコン", meaning: "電腦", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "使います",
                  furigana: "つかいます",
                  meaning: "使用",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "パソコンが壊れました。",
              translation: "電腦壞掉了。",
              segments: [
                { text: "パソコン", meaning: "電腦", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "壊れました",
                  furigana: "こわれました",
                  meaning: "壞了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "新しいパソコンが欲しいです。",
              translation: "我想要一台新電腦。",
              segments: [
                {
                  text: "新しい",
                  furigana: "あたらしい",
                  meaning: "新的",
                  tail: " ",
                },
                { text: "パソコン", meaning: "電腦", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                {
                  text: "欲しい",
                  furigana: "ほしい",
                  meaning: "想要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "來自 Personal Computer 的縮寫，比「コンピューター」更常用。",
          image_file: "computer.png",
        },
        {
          id: "n-20",
          term_zh: "車",
          related_terms: [
            {
              term_target: "車",
              pronunciation: ["kuruma"],
              specific_note: "汽車",
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
                { text: "車", furigana: "くるま", meaning: "車", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "車で来ました。",
              translation: "我開車(搭車)來的。",
              segments: [
                { text: "車", furigana: "くるま", meaning: "車", tail: "" },
                { text: "で", meaning: "用/搭乘", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "新しい車を買いました。",
              translation: "我買了新車。",
              segments: [
                {
                  text: "新しい",
                  furigana: "あたらしい",
                  meaning: "新的",
                  tail: " ",
                },
                { text: "車", furigana: "くるま", meaning: "車", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "買いました",
                  furigana: "かいました",
                  meaning: "買了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "泛指汽車。",
          image_file: "car.png",
        },
        {
          id: "n-21",
          term_zh: "市場",
          related_terms: [
            {
              term_target: "市場",
              pronunciation: ["ichiba"],
              specific_note: "傳統市場",
              segments: [
                { text: "市場", furigana: "いちば", meaning: "市場", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "市場で魚を買います。",
              translation: "在市場買魚。",
              segments: [
                { text: "市場", furigana: "いちば", meaning: "市場", tail: "" },
                { text: "で", meaning: "在(地點)", tail: " " },
                { text: "魚", furigana: "さかな", meaning: "魚", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "買います",
                  furigana: "かいます",
                  meaning: "買",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "夜市に行きましょう。",
              translation: "我們去夜市吧 (台灣情境)。",
              segments: [
                { text: "夜市", furigana: "よいち", meaning: "夜市", tail: "" },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きましょう",
                  furigana: "いきましょう",
                  meaning: "去吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "朝の市場は賑やかです。",
              translation: "早上的市場很熱鬧。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "市場", furigana: "いちば", meaning: "市場", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "賑やか",
                  furigana: "にぎやか",
                  meaning: "熱鬧",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "現代日本人買菜多去「スーパー (supermarket)」，「市場」多指生鮮批發或傳統市集。",
          image_file: "market.png",
        },
        {
          id: "n-22",
          term_zh: "衣服",
          related_terms: [
            {
              term_target: "服",
              pronunciation: ["fuku"],
              specific_note: "衣物總稱",
              segments: [
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "新しい服が欲しいです。",
              translation: "我想要新衣服。",
              segments: [
                {
                  text: "新しい",
                  furigana: "あたらしい",
                  meaning: "新的",
                  tail: " ",
                },
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                {
                  text: "欲しい",
                  furigana: "ほしい",
                  meaning: "想要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "服を着替えます。",
              translation: "更換衣服。",
              segments: [
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "着替えます",
                  furigana: "きがえます",
                  meaning: "換穿",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "この服は大きすぎます。",
              translation: "這件衣服太大了。",
              segments: [
                { text: "この", meaning: "這件", tail: " " },
                { text: "服", furigana: "ふく", meaning: "衣服", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "大き", furigana: "おおき", meaning: "大", tail: "" },
                { text: "すぎます", meaning: "太過於...", tail: "。" },
              ],
            },
          ],
          usage_note: "泛指身上穿的衣物。",
          image_file: "clothes.png",
        },
        {
          id: "n-23",
          term_zh: "商店",
          related_terms: [
            {
              term_target: "店",
              pronunciation: ["mise"],
              specific_note: "",
              segments: [
                { text: "店", furigana: "みせ", meaning: "店", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "あの店はおいしいです。",
              translation: "那家店(的菜)很好吃。",
              segments: [
                { text: "あの", meaning: "那家", tail: " " },
                { text: "店", furigana: "みせ", meaning: "店", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "おいしい", meaning: "好吃", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "店に入りましょう。",
              translation: "進去店裡吧。",
              segments: [
                { text: "店", furigana: "みせ", meaning: "店", tail: "" },
                { text: "に", meaning: "進(方向)", tail: " " },
                {
                  text: "入りましょう",
                  furigana: "はいりましょう",
                  meaning: "進去吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "この店は有名です。",
              translation: "這家店很有名。",
              segments: [
                { text: "この", meaning: "這家", tail: " " },
                { text: "店", furigana: "みせ", meaning: "店", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "有名",
                  furigana: "ゆうめい",
                  meaning: "有名",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "各種店家的總稱。",
          image_file: "shop.png",
        },
        {
          id: "n-24",
          term_zh: "巴士 (公車)",
          related_terms: [
            {
              term_target: "バス",
              pronunciation: ["basu"],
              specific_note: "",
              segments: [{ text: "バス", meaning: "公車", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "バス停。",
              translation: "公車站。",
              segments: [
                { text: "バス", meaning: "公車", tail: "" },
                { text: "停", furigana: "てい", meaning: "站/亭", tail: "." },
              ],
            },
            {
              sentence: "バスに乗って行きます。",
              translation: "搭公車去。",
              segments: [
                { text: "バス", meaning: "公車", tail: "" },
                { text: "に", meaning: "搭乘", tail: " " },
                {
                  text: "乗って",
                  furigana: "のって",
                  meaning: "搭",
                  tail: " ",
                },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "バスが来ました。",
              translation: "公車來了。",
              segments: [
                { text: "バス", meaning: "公車", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "外來語 Bus。",
          image_file: "bus.png",
        },
        {
          id: "n-25",
          term_zh: "街道 (路)",
          related_terms: [
            {
              term_target: "道",
              pronunciation: ["michi"],
              specific_note: "道路",
              segments: [
                { text: "道", furigana: "みち", meaning: "路", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "道を渡ります。",
              translation: "過馬路。",
              segments: [
                { text: "道", furigana: "みち", meaning: "路", tail: "" },
                { text: "を", meaning: "(通過點助詞)", tail: " " },
                {
                  text: "渡ります",
                  furigana: "わたります",
                  meaning: "渡過/穿越",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "道を教えてください。",
              translation: "請告訴我路怎麼走。",
              segments: [
                { text: "道", furigana: "みち", meaning: "路", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "教えて",
                  furigana: "おしえて",
                  meaning: "教/告訴",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "この道は狭いです。",
              translation: "這條路很窄。",
              segments: [
                { text: "この", meaning: "這條", tail: " " },
                { text: "道", furigana: "みち", meaning: "路", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "狭い", furigana: "せまい", meaning: "狹窄", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "指一般的道路或街道。",
          image_file: "street.png",
        },
        {
          id: "n-26",
          term_zh: "房子 (家)",
          related_terms: [
            {
              term_target: "家",
              pronunciation: ["ie"],
              specific_note: "房屋/家",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "大きい家。",
              translation: "大房子。",
              segments: [
                {
                  text: "大きい",
                  furigana: "おおきい",
                  meaning: "大的",
                  tail: " ",
                },
                { text: "家", furigana: "いえ", meaning: "房子", tail: "." },
              ],
            },
            {
              sentence: "家に帰ります。",
              translation: "回家。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "に", meaning: "回(方向)", tail: " " },
                {
                  text: "帰ります",
                  furigana: "かえります",
                  meaning: "回去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "私の家に来ませんか。",
              translation: "要不要來我家？",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "に", meaning: "來", tail: " " },
                {
                  text: "来ません",
                  furigana: "きません",
                  meaning: "不來",
                  tail: "",
                },
                { text: "か", meaning: "嗎(邀約)", tail: "。" },
              ],
            },
          ],
          usage_note: "指物理上的建築物或歸屬的家。",
          image_file: "house.png",
        },
        {
          id: "n-27",
          term_zh: "母親",
          related_terms: [
            {
              term_target: "母",
              pronunciation: ["haha"],
              specific_note: "我的母親",
              segments: [
                { text: "母", furigana: "はは", meaning: "母親", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "母は料理が上手です。",
              translation: "我媽媽很會做菜。",
              segments: [
                { text: "母", furigana: "はは", meaning: "母親", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "料理",
                  furigana: "りょうり",
                  meaning: "料理",
                  tail: "",
                },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                {
                  text: "上手",
                  furigana: "じょうず",
                  meaning: "擅長",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "母に電話しました。",
              translation: "我打電話給媽媽了。",
              segments: [
                { text: "母", furigana: "はは", meaning: "母親", tail: "" },
                { text: "に", meaning: "對(對象)", tail: " " },
                { text: "電話", furigana: "でんわ", meaning: "電話", tail: "" },
                { text: "しました", meaning: "做了(打)", tail: "。" },
              ],
            },
            {
              sentence: "お母さんは元気ですか。",
              translation: "令堂(你母親)身體好嗎？",
              segments: [
                {
                  text: "お母さん",
                  furigana: "おかあさん",
                  meaning: "母親(敬稱)",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "元気", furigana: "げんき", meaning: "健康", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "對別人稱呼自己的母親用「母 (haha)」，稱呼別人的母親或叫自己的媽媽用「お母さん (okaasan)」。",
          image_file: "mother.png",
        },
        {
          id: "n-28",
          term_zh: "父親",
          related_terms: [
            {
              term_target: "父",
              pronunciation: ["chichi"],
              specific_note: "我的父親",
              segments: [
                { text: "父", furigana: "ちち", meaning: "父親", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "父は会社員です。",
              translation: "我爸爸是公司職員。",
              segments: [
                { text: "父", furigana: "ちち", meaning: "父親", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "会社員",
                  furigana: "かいしゃいん",
                  meaning: "公司職員",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "父と似ています。",
              translation: "我跟爸爸長得很像。",
              segments: [
                { text: "父", furigana: "ちち", meaning: "父親", tail: "" },
                { text: "と", meaning: "和", tail: " " },
                { text: "似て", furigana: "にて", meaning: "像", tail: "" },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
            {
              sentence: "お父さんは家にいますか。",
              translation: "令尊(你父親)在家嗎？",
              segments: [
                {
                  text: "お父さん",
                  furigana: "おとうさん",
                  meaning: "父親(敬稱)",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "います", meaning: "在", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "對別人稱呼自己的父親用「父 (chichi)」，稱呼別人的父親或叫自己的爸爸用「お父さん (otousan)」。",
          image_file: "father.png",
        },
        {
          id: "n-29",
          term_zh: "兄弟",
          related_terms: [
            {
              term_target: "兄弟",
              pronunciation: ["kyoudai"],
              specific_note: "兄弟姊妹",
              segments: [
                {
                  text: "兄弟",
                  furigana: "きょうだい",
                  meaning: "兄弟",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "兄弟がいますか。",
              translation: "你有兄弟姊妹嗎？",
              segments: [
                {
                  text: "兄弟",
                  furigana: "きょうだい",
                  meaning: "兄弟",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "います", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "兄が一人います。",
              translation: "我有一個哥哥。",
              segments: [
                {
                  text: "兄",
                  furigana: "あに",
                  meaning: "哥哥(自稱)",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "一人", furigana: "ひとり", meaning: "一人", tail: "" },
                { text: "います", meaning: "有", tail: "。" },
              ],
            },
            {
              sentence: "弟と喧嘩しました。",
              translation: "我和弟弟吵架了。",
              segments: [
                { text: "弟", furigana: "おとうと", meaning: "弟弟", tail: "" },
                { text: "と", meaning: "和", tail: " " },
                { text: "喧嘩", furigana: "けんか", meaning: "吵架", tail: "" },
                { text: "しました", meaning: "做了", tail: "。" },
              ],
            },
          ],
          usage_note:
            "日文「兄弟」可泛指兄弟姊妹。具體稱呼：兄(あに)、弟(おとうと)。",
          image_file: "brother.png",
        },
        {
          id: "n-30",
          term_zh: "姐妹",
          related_terms: [
            {
              term_target: "姉妹",
              pronunciation: ["shimai"],
              specific_note: "姐妹",
              segments: [
                { text: "姉妹", furigana: "しまい", meaning: "姐妹", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "姉がいます。",
              translation: "我有姊姊。",
              segments: [
                {
                  text: "姉",
                  furigana: "あね",
                  meaning: "姊姊(自稱)",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "います", meaning: "有", tail: "。" },
              ],
            },
            {
              sentence: "妹は可愛いです。",
              translation: "妹妹很可愛。",
              segments: [
                { text: "妹", furigana: "いもうと", meaning: "妹妹", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "可愛い",
                  furigana: "かわいい",
                  meaning: "可愛",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "私たちは姉妹です。",
              translation: "我們是姐妹。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "姉妹", furigana: "しまい", meaning: "姐妹", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "具體稱呼：姉(あね - 姊)、妹(いもうと - 妹)。",
          image_file: "sister.png",
        },
        {
          id: "n-31",
          term_zh: "中文",
          related_terms: [
            {
              term_target: "中国語",
              pronunciation: ["chuugokugo"],
              specific_note: "",
              segments: [
                {
                  text: "中国語",
                  furigana: "ちゅうごくご",
                  meaning: "中文",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "中国語が話せますか。",
              translation: "你會說中文嗎？",
              segments: [
                {
                  text: "中国語",
                  furigana: "ちゅうごくご",
                  meaning: "中文",
                  tail: "",
                },
                { text: "が", meaning: "(能力對象)", tail: " " },
                {
                  text: "話せます",
                  furigana: "はなせます",
                  meaning: "能說",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "中国語を勉強しています。",
              translation: "我正在學中文。",
              segments: [
                {
                  text: "中国語",
                  furigana: "ちゅうごくご",
                  meaning: "中文",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "學習",
                  tail: "",
                },
                { text: "して", meaning: "做", tail: "" },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "中国語の先生。",
              translation: "中文老師。",
              segments: [
                {
                  text: "中国語",
                  furigana: "ちゅうごくご",
                  meaning: "中文",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "日文中「國名 + 語」表示語言。",
          image_file: "chinese.png",
        },
        {
          id: "n-32",
          term_zh: "早晨 (早上)",
          related_terms: [
            {
              term_target: "朝",
              pronunciation: ["asa"],
              specific_note: "",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "毎朝、コーヒーを飲みます。",
              translation: "每天早上喝咖啡。",
              segments: [
                {
                  text: "毎朝",
                  furigana: "まいあさ",
                  meaning: "每朝",
                  tail: "、",
                },
                { text: "コーヒー", meaning: "咖啡", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "飲みます",
                  furigana: "のみます",
                  meaning: "喝",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "朝ごはんを食べましたか。",
              translation: "吃過早餐了嗎？",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早", tail: "" },
                { text: "ごはん", meaning: "飯", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "食べました",
                  furigana: "たべました",
                  meaning: "吃了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "朝早く起きます。",
              translation: "早上很早起床。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: " " },
                { text: "早く", furigana: "はやく", meaning: "早", tail: " " },
                {
                  text: "起きます",
                  furigana: "おきます",
                  meaning: "起床",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "上午。",
          image_file: "morning.png",
        },
        {
          id: "n-33",
          term_zh: "夜晚",
          related_terms: [
            {
              term_target: "夜",
              pronunciation: ["yoru"],
              specific_note: "",
              segments: [
                { text: "夜", furigana: "よる", meaning: "夜晚", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "夜は寒いです。",
              translation: "晚上很冷。",
              segments: [
                { text: "夜", furigana: "よる", meaning: "晚上", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "寒い", furigana: "さむい", meaning: "冷", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "夜遅くまで働きます。",
              translation: "工作到很晚。",
              segments: [
                { text: "夜", furigana: "よる", meaning: "夜", tail: " " },
                { text: "遅く", furigana: "おそく", meaning: "晚", tail: "" },
                { text: "まで", meaning: "直到", tail: " " },
                {
                  text: "働きます",
                  furigana: "はたらきます",
                  meaning: "工作",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "きれいな夜景。",
              translation: "美麗的夜景。",
              segments: [
                { text: "きれい", meaning: "漂亮", tail: "" },
                { text: "な", meaning: "的", tail: " " },
                {
                  text: "夜景",
                  furigana: "やけい",
                  meaning: "夜景",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "太陽下山後。",
          image_file: "night.png",
        },
        {
          id: "n-34",
          term_zh: "車票 (票)",
          related_terms: [
            {
              term_target: "切符",
              pronunciation: ["kippu"],
              specific_note: "車票",
              segments: [
                { text: "切符", furigana: "きっぷ", meaning: "車票", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "切符を買います。",
              translation: "買票。",
              segments: [
                { text: "切符", furigana: "きっぷ", meaning: "票", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "買います",
                  furigana: "かいます",
                  meaning: "買",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "切符をなくしました。",
              translation: "我把票弄丟了。",
              segments: [
                { text: "切符", furigana: "きっぷ", meaning: "票", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "なくしました", meaning: "弄丟了", tail: "。" },
              ],
            },
            {
              sentence: "電車の切符。",
              translation: "火車票(電車票)。",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                { text: "切符", furigana: "きっぷ", meaning: "票", tail: "。" },
              ],
            },
          ],
          usage_note:
            "交通工具的票用「切符」，演唱會或門票用「チケット (chiketto)」。",
          image_file: "ticket.png",
        },
        {
          id: "n-35",
          term_zh: "包包",
          related_terms: [
            {
              term_target: "鞄",
              pronunciation: ["kaban"],
              specific_note: "",
              segments: [
                { text: "鞄", furigana: "かばん", meaning: "包包", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "重い鞄。",
              translation: "很重的包包。",
              segments: [
                { text: "重い", furigana: "おもい", meaning: "重", tail: " " },
                { text: "鞄", furigana: "かばん", meaning: "包包", tail: "." },
              ],
            },
            {
              sentence: "鞄を忘れました。",
              translation: "我忘記帶包包了(忘在那裡)。",
              segments: [
                { text: "鞄", furigana: "かばん", meaning: "包包", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "忘れました",
                  furigana: "わすれました",
                  meaning: "忘記了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "その鞄はいくらですか。",
              translation: "那個包包多少錢？",
              segments: [
                { text: "その", meaning: "那個", tail: " " },
                { text: "鞄", furigana: "かばん", meaning: "包包", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "泛指各類包包。",
          image_file: "bag.png",
        },
        {
          id: "n-36",
          term_zh: "杯子",
          related_terms: [
            {
              term_target: "コップ",
              pronunciation: ["koppu"],
              specific_note: "無耳杯",
              segments: [{ text: "コップ", meaning: "杯子", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "コップを洗います。",
              translation: "洗杯子。",
              segments: [
                { text: "コップ", meaning: "杯子", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "洗います",
                  furigana: "あらいます",
                  meaning: "洗",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "水を入れたコップ。",
              translation: "裝了水的杯子。",
              segments: [
                { text: "水", furigana: "みず", meaning: "水", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "入れた",
                  furigana: "いれた",
                  meaning: "放入了",
                  tail: " ",
                },
                { text: "コップ", meaning: "杯子", tail: "。" },
              ],
            },
            {
              sentence: "コーヒーカップ。",
              translation: "咖啡杯 (有把手用 cup)。",
              segments: [
                { text: "コーヒー", meaning: "咖啡", tail: "" },
                { text: "カップ", meaning: "杯子", tail: "。" },
              ],
            },
          ],
          usage_note:
            "喝水用的玻璃杯或塑膠杯叫「コップ」，有把手的(如馬克杯)叫「カップ (kappu)」。",
          image_file: "cup.png",
        },
        {
          id: "n-37",
          term_zh: "醫生",
          related_terms: [
            {
              term_target: "医者",
              pronunciation: ["isha"],
              specific_note: "職業名",
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
                { text: "医者", furigana: "いしゃ", meaning: "醫生", tail: "" },
                { text: "に", meaning: "找(對象)", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "彼は医者です。",
              translation: "他是醫生。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "医者", furigana: "いしゃ", meaning: "醫生", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "いいお医者さん。",
              translation: "好的醫生 (親切稱呼)。",
              segments: [
                { text: "いい", meaning: "好的", tail: " " },
                {
                  text: "お医者さん",
                  furigana: "おいしゃさん",
                  meaning: "醫生",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "職業叫「医者」。面對面稱呼醫生時要叫「先生 (sensei)」。",
          image_file: "doctor.png",
        },
        {
          id: "n-38",
          term_zh: "警察",
          related_terms: [
            {
              term_target: "警察",
              pronunciation: ["keisatsu"],
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
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "呼びます",
                  furigana: "よびます",
                  meaning: "呼叫",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "警察官。",
              translation: "警官 (個人)。",
              segments: [
                {
                  text: "警察官",
                  furigana: "けいさつかん",
                  meaning: "警官",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "交番に行きます。",
              translation: "去派出所。",
              segments: [
                {
                  text: "交番",
                  furigana: "こうばん",
                  meaning: "派出所",
                  tail: "",
                },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "機構叫警察，路邊的小派出所叫「交番 (koban)」。",
          image_file: "police.png",
        },
        {
          id: "n-39",
          term_zh: "醫院",
          related_terms: [
            {
              term_target: "病院",
              pronunciation: ["byouin"],
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
              sentence: "病院に行きます。",
              translation: "去醫院 (看病)。",
              segments: [
                {
                  text: "病院",
                  furigana: "びょういん",
                  meaning: "醫院",
                  tail: "",
                },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "大きい病院。",
              translation: "大醫院。",
              segments: [
                {
                  text: "大きい",
                  furigana: "おおきい",
                  meaning: "大的",
                  tail: " ",
                },
                {
                  text: "病院",
                  furigana: "びょういん",
                  meaning: "醫院",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "彼は入院しています。",
              translation: "他正在住院。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "入院",
                  furigana: "にゅういん",
                  meaning: "住院",
                  tail: "",
                },
                { text: "して", meaning: "做", tail: "" },
                { text: "います", meaning: "正在/狀態", tail: "。" },
              ],
            },
          ],
          usage_note: "注意發音，不要讀成「美容院 (biyouin)」。",
          image_file: "hospital.png",
        },
        {
          id: "n-40",
          term_zh: "座位",
          related_terms: [
            {
              term_target: "席",
              pronunciation: ["seki"],
              specific_note: "",
              segments: [
                { text: "席", furigana: "せき", meaning: "座位", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "この席は空いていますか。",
              translation: "這個位子有人坐嗎 (是空的嗎)？",
              segments: [
                { text: "この", meaning: "這個", tail: " " },
                { text: "席", furigana: "せき", meaning: "座位", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "空いて",
                  furigana: "あいて",
                  meaning: "空著",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "席に着いてください。",
              translation: "請就座。",
              segments: [
                { text: "席", furigana: "せき", meaning: "座位", tail: "" },
                { text: "に", meaning: "在/就", tail: " " },
                {
                  text: "着いて",
                  furigana: "ついて",
                  meaning: "抵達/就位",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "席を予約します。",
              translation: "訂位。",
              segments: [
                { text: "席", furigana: "せき", meaning: "位子", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
          ],
          usage_note: "泛指座位。",
          image_file: "seat.png",
        },
        {
          id: "n-41",
          term_zh: "門",
          related_terms: [
            {
              term_target: "ドア",
              pronunciation: ["doa"],
              specific_note: "西式門",
              segments: [{ text: "ドア", meaning: "門", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ドアを開けてください。",
              translation: "請開門。",
              segments: [
                { text: "ドア", meaning: "門", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "開けて", furigana: "あけて", meaning: "開", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "ドアを閉めます。",
              translation: "我要關門了。",
              segments: [
                { text: "ドア", meaning: "門", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "閉めます",
                  furigana: "しめます",
                  meaning: "關",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ドアの鍵。",
              translation: "門的鑰匙。",
              segments: [
                { text: "ドア", meaning: "門", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "鍵", furigana: "かぎ", meaning: "鑰匙", tail: "。" },
              ],
            },
          ],
          usage_note:
            "泛指一般的門。如果是日式拉門叫「障子 (shouji)」或「襖 (fusuma)」。",
          image_file: "door.png",
        },
        {
          id: "n-42",
          term_zh: "房間",
          related_terms: [
            {
              term_target: "部屋",
              pronunciation: ["heya"],
              specific_note: "",
              segments: [
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私の部屋。",
              translation: "我的房間。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "。" },
              ],
            },
            {
              sentence: "部屋を掃除します。",
              translation: "打掃房間。",
              segments: [
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "掃除", furigana: "そうじ", meaning: "打掃", tail: "" },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "広い部屋ですね。",
              translation: "好寬敞的房間啊。",
              segments: [
                {
                  text: "広い",
                  furigana: "ひろい",
                  meaning: "寬廣",
                  tail: " ",
                },
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
          ],
          usage_note: "私人房間或空間。",
          image_file: "room.png",
        },
        {
          id: "n-43",
          term_zh: "車站",
          related_terms: [
            {
              term_target: "駅",
              pronunciation: ["eki"],
              specific_note: "",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "駅はどこですか。",
              translation: "車站哪裡？",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "次の駅で降ります。",
              translation: "在下一站下車。",
              segments: [
                { text: "次", furigana: "つぎ", meaning: "下一", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "で", meaning: "在(地點)", tail: " " },
                {
                  text: "降ります",
                  furigana: "おります",
                  meaning: "下車",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "駅の近く。",
              translation: "車站附近。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "近く",
                  furigana: "ちかく",
                  meaning: "附近",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "火車、地鐵、新幹線的站都叫「駅」。",
          image_file: "station.png",
        },
        {
          id: "n-44",
          term_zh: "地鐵 (捷運)",
          related_terms: [
            {
              term_target: "地下鉄",
              pronunciation: ["chikatetsu"],
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
              sentence: "地下鉄に乗ります。",
              translation: "搭乘地鐵。",
              segments: [
                {
                  text: "地下鉄",
                  furigana: "ちかてつ",
                  meaning: "地鐵",
                  tail: "",
                },
                { text: "に", meaning: "上(交通工具)", tail: " " },
                {
                  text: "乗ります",
                  furigana: "のります",
                  meaning: "搭乘",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "地下鉄の駅。",
              translation: "地鐵站。",
              segments: [
                {
                  text: "地下鉄",
                  furigana: "ちかてつ",
                  meaning: "地鐵",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                { text: "駅", furigana: "えき", meaning: "站", tail: "。" },
              ],
            },
            {
              sentence: "地下鉄で行きます。",
              translation: "搭地鐵去 (用走的去)。",
              segments: [
                {
                  text: "地下鉄",
                  furigana: "ちかてつ",
                  meaning: "地鐵",
                  tail: "",
                },
                { text: "で", meaning: "用/搭乘", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "在東京常說「メトロ (Metro)」或「都営 (Toei)」，統稱是「地下鉄」。",
          image_file: "subway.png",
        },
        {
          id: "n-45",
          term_zh: "火車 (電車)",
          related_terms: [
            {
              term_target: "電車",
              pronunciation: ["densha"],
              specific_note: "電力火車",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "電車が来ました。",
              translation: "電車來了。",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "電車で東京へ行きます。",
              translation: "搭火車去東京。",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "",
                },
                { text: "で", meaning: "搭乘", tail: " " },
                {
                  text: "東京",
                  furigana: "とうきょう",
                  meaning: "東京",
                  tail: "",
                },
                { text: "へ", meaning: "往", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "満員電車。",
              translation: "客滿的電車 (擠沙丁魚)。",
              segments: [
                {
                  text: "満員",
                  furigana: "まんいん",
                  meaning: "滿員",
                  tail: "",
                },
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "日本最普遍的交通工具。長途火車有時叫「列車 (ressha)」，但口語多用「電車」。",
          image_file: "train.png",
        },
        {
          id: "n-46",
          term_zh: "機場",
          related_terms: [
            {
              term_target: "空港",
              pronunciation: ["kuukou"],
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
                  tail: "",
                },
                { text: "へ", meaning: "往", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "成田空港。",
              translation: "成田機場。",
              segments: [
                {
                  text: "成田",
                  furigana: "なりた",
                  meaning: "成田(地名)",
                  tail: "",
                },
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
                  tail: "",
                },
                { text: "に", meaning: "在(地點)", tail: " " },
                {
                  text: "着きました",
                  furigana: "つきました",
                  meaning: "抵達了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "搭飛機的地方。",
          image_file: "airport.png",
        },
        {
          id: "n-47",
          term_zh: "行李",
          related_terms: [
            {
              term_target: "荷物",
              pronunciation: ["nimotsu"],
              specific_note: "隨身行李/包裹",
              segments: [
                { text: "荷物", furigana: "にもつ", meaning: "行李", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "荷物を預けます。",
              translation: "寄放行李 (或托運)。",
              segments: [
                { text: "荷物", furigana: "にもつ", meaning: "行李", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "預けます",
                  furigana: "あずけます",
                  meaning: "寄放/托運",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "荷物は多いですか。",
              translation: "行李很多嗎？",
              segments: [
                { text: "荷物", furigana: "にもつ", meaning: "行李", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "多い", furigana: "おおい", meaning: "多", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "重い荷物。",
              translation: "很重的行李。",
              segments: [
                {
                  text: "重い",
                  furigana: "おもい",
                  meaning: "重的",
                  tail: " ",
                },
                {
                  text: "荷物",
                  furigana: "にもつ",
                  meaning: "行李",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "泛指所有帶著的物品、包裹或行李箱。",
          image_file: "luggage.png",
        },
        {
          id: "n-48",
          term_zh: "地圖",
          related_terms: [
            {
              term_target: "地図",
              pronunciation: ["chizu"],
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
                { text: "地図", furigana: "ちず", meaning: "地圖", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見ます",
                  furigana: "みます",
                  meaning: "看",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "地図を書いてください。",
              translation: "請畫地圖給我。",
              segments: [
                { text: "地図", furigana: "ちず", meaning: "地圖", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "書いて",
                  furigana: "かいて",
                  meaning: "畫/寫",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "地図アプリ。",
              translation: "地圖 App。",
              segments: [
                { text: "地図", furigana: "ちず", meaning: "地圖", tail: " " },
                { text: "アプリ", meaning: "應用程式", tail: "。" },
              ],
            },
          ],
          usage_note: "Google Maps 日文也常說「グーグルマップ」。",
          image_file: "map.png",
        },
        {
          id: "n-49",
          term_zh: "行政櫃檯／票口",
          related_terms: [
            {
              term_target: "受付",
              pronunciation: ["uketsuke"],
              specific_note: "接待處/櫃檯",
              segments: [
                {
                  text: "受付",
                  furigana: "うけつけ",
                  meaning: "櫃檯/接待",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "受付で聞いてください。",
              translation: "請在櫃檯詢問。",
              segments: [
                {
                  text: "受付",
                  furigana: "うけつけ",
                  meaning: "櫃檯",
                  tail: "",
                },
                { text: "で", meaning: "在(地點)", tail: " " },
                { text: "聞いて", furigana: "きいて", meaning: "問", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "受付はあそこです。",
              translation: "櫃檯在那裡。",
              segments: [
                {
                  text: "受付",
                  furigana: "うけつけ",
                  meaning: "櫃檯",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "あそこ", meaning: "那裡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "ホテルの受付。",
              translation: "飯店櫃檯。",
              segments: [
                { text: "ホテル", meaning: "飯店", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "受付",
                  furigana: "うけつけ",
                  meaning: "櫃檯",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "一般接待處用「受付」。車站賣票的窗口叫「窓口 (madoguchi)」。",
          image_file: "counter.png",
        },
        {
          id: "n-50",
          term_zh: "大廳",
          related_terms: [
            {
              term_target: "ロビー",
              pronunciation: ["robii"],
              specific_note: "",
              segments: [{ text: "ロビー", meaning: "大廳", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ロビーで待ちます。",
              translation: "在大廳等。",
              segments: [
                { text: "ロビー", meaning: "大廳", tail: "" },
                { text: "で", meaning: "在", tail: " " },
                {
                  text: "待ちます",
                  furigana: "まちます",
                  meaning: "等",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "広いロビー。",
              translation: "寬敞的大廳。",
              segments: [
                {
                  text: "広い",
                  furigana: "ひろい",
                  meaning: "寬廣的",
                  tail: " ",
                },
                { text: "ロビー", meaning: "大廳", tail: "。" },
              ],
            },
            {
              sentence: "ロビーに集合してください。",
              translation: "請在大廳集合。",
              segments: [
                { text: "ロビー", meaning: "大廳", tail: "" },
                { text: "に", meaning: "在(地點)", tail: " " },
                {
                  text: "集合",
                  furigana: "しゅうごう",
                  meaning: "集合",
                  tail: "",
                },
                { text: "して", meaning: "做", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note: "飯店或大樓的接待大廳。",
          image_file: "lobby.png",
        },
        {
          id: "n-51",
          term_zh: "預定 (預約)",
          related_terms: [
            {
              term_target: "予約",
              pronunciation: ["yoyaku"],
              specific_note: "",
              segments: [
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "予約をしました。",
              translation: "我已經預約了。",
              segments: [
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "しました", meaning: "做了", tail: "。" },
              ],
            },
            {
              sentence: "予約がありますか。",
              translation: "你有預約嗎？",
              segments: [
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "レストランを予約します。",
              translation: "預約餐廳。",
              segments: [
                { text: "レストラン", meaning: "餐廳", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
          ],
          usage_note: "餐廳、飯店、機票的預訂。",
          image_file: "reservation.png",
        },
        {
          id: "n-52",
          term_zh: "入住",
          related_terms: [
            {
              term_target: "チェックイン",
              pronunciation: ["chekkuin"],
              specific_note: "",
              segments: [{ text: "チェックイン", meaning: "入住", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "チェックインをお願いします。",
              translation: "我要辦理入住 (Check-in)。",
              segments: [
                { text: "チェックイン", meaning: "入住", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "麻煩了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "チェックインは何時ですか。",
              translation: "幾點可以入住？",
              segments: [
                { text: "チェックイン", meaning: "入住", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "今、チェックインします。",
              translation: "我現在要辦理入住。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "チェックイン", meaning: "入住", tail: "" },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
          ],
          usage_note: "直接使用外來語 Check-in。",
          image_file: "check_in.png",
        },
        {
          id: "n-53",
          term_zh: "退房",
          related_terms: [
            {
              term_target: "チェックアウト",
              pronunciation: ["chekkuauto"],
              specific_note: "",
              segments: [{ text: "チェックアウト", meaning: "退房", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "チェックアウトしたいです。",
              translation: "我想要退房。",
              segments: [
                { text: "チェックアウト", meaning: "退房", tail: "" },
                { text: "したい", meaning: "想做", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "チェックアウトは11時です。",
              translation: "退房時間是11點。",
              segments: [
                { text: "チェックアウト", meaning: "退房", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "11時",
                  furigana: "じゅういちじ",
                  meaning: "11點",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "チェックアウトをお願いします。",
              translation: "麻煩幫我辦理退房。",
              segments: [
                { text: "チェックアウト", meaning: "退房", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "麻煩了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "直接使用外來語 Check-out。",
          image_file: "check_out.png",
        },
        {
          id: "n-54",
          term_zh: "飲料",
          related_terms: [
            {
              term_target: "飲み物",
              pronunciation: ["nomimono"],
              specific_note: "",
              segments: [
                {
                  text: "飲み物",
                  furigana: "のみもの",
                  meaning: "飲料",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "飲み物は要りますか。",
              translation: "需要飲料嗎？",
              segments: [
                {
                  text: "飲み物",
                  furigana: "のみもの",
                  meaning: "飲料",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "要ります",
                  furigana: "いります",
                  meaning: "需要",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "冷たい飲み物。",
              translation: "冷飲。",
              segments: [
                {
                  text: "冷たい",
                  furigana: "つめたい",
                  meaning: "冰冷的",
                  tail: " ",
                },
                {
                  text: "飲み物",
                  furigana: "のみもの",
                  meaning: "飲料",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "飲み物を買います。",
              translation: "買飲料。",
              segments: [
                {
                  text: "飲み物",
                  furigana: "のみもの",
                  meaning: "飲料",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "買います",
                  furigana: "かいます",
                  meaning: "買",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "喝的東西。",
          image_file: "drink.png",
        },
        {
          id: "n-55",
          term_zh: "菜單",
          related_terms: [
            {
              term_target: "メニュー",
              pronunciation: ["menyuu"],
              specific_note: "",
              segments: [{ text: "メニュー", meaning: "菜單", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "メニューをください。",
              translation: "請給我菜單。",
              segments: [
                { text: "メニュー", meaning: "菜單", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "メニューを見せてください。",
              translation: "請讓我看菜單。",
              segments: [
                { text: "メニュー", meaning: "菜單", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見せて",
                  furigana: "みせて",
                  meaning: "展示/給看",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "英語のメニューはありますか。",
              translation: "有英文菜單嗎？",
              segments: [
                { text: "英語", furigana: "えいご", meaning: "英文", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "メニュー", meaning: "菜單", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "餐廳必備單字。",
          image_file: "menu.png",
        },
        {
          id: "n-56",
          term_zh: "午餐",
          related_terms: [
            {
              term_target: "昼ご飯",
              pronunciation: ["hirugohan"],
              specific_note: "午餐/中飯",
              segments: [
                {
                  text: "昼ご飯",
                  furigana: "ひるごはん",
                  meaning: "午餐",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "昼ご飯を食べます。",
              translation: "吃午餐。",
              segments: [
                {
                  text: "昼ご飯",
                  furigana: "ひるごはん",
                  meaning: "午餐",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "食べます",
                  furigana: "たべます",
                  meaning: "吃",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "一緒に昼ご飯に行きましょう。",
              translation: "一起去吃午餐吧。",
              segments: [
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "",
                },
                { text: "に", meaning: "地", tail: " " },
                {
                  text: "昼ご飯",
                  furigana: "ひるごはん",
                  meaning: "午餐",
                  tail: "",
                },
                { text: "に", meaning: "去(目的)", tail: " " },
                {
                  text: "行きましょう",
                  furigana: "いきましょう",
                  meaning: "去吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "今日のランチは何ですか。",
              translation: "今天的午餐是什麼？",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "ランチ", meaning: "午餐(Lunch)", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "口語常用「昼ご飯」或外來語「ランチ (ranchi)」。",
          image_file: "lunch.png",
        },
        {
          id: "n-57",
          term_zh: "晚餐",
          related_terms: [
            {
              term_target: "晩ご飯",
              pronunciation: ["bangohan"],
              specific_note: "晚餐/晚飯",
              segments: [
                {
                  text: "晩ご飯",
                  furigana: "ばんごはん",
                  meaning: "晚餐",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "晩ご飯を作ります。",
              translation: "做晚餐。",
              segments: [
                {
                  text: "晩ご飯",
                  furigana: "ばんごはん",
                  meaning: "晚餐",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "作ります",
                  furigana: "つくります",
                  meaning: "製作/煮",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "晩ご飯は何が食べたいですか。",
              translation: "晚餐想吃什麼？",
              segments: [
                {
                  text: "晩ご飯",
                  furigana: "ばんごはん",
                  meaning: "晚餐",
                  tail: "",
                },
                { text: "は", meaning: "對於...", tail: " " },
                { text: "何", furigana: "なに", meaning: "什麼", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                {
                  text: "食べたい",
                  furigana: "たべたい",
                  meaning: "想吃",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "夕食の時間です。",
              translation: "晚餐時間到了。",
              segments: [
                {
                  text: "夕食",
                  furigana: "ゆうしょく",
                  meaning: "晚餐(較正式)",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                { text: "時間", furigana: "じかん", meaning: "時間", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "口語常用「晩ご飯」，稍正式可用「夕食 (yuushoku)」。",
          image_file: "dinner.png",
        },
        {
          id: "n-58",
          term_zh: "帳單 (結帳)",
          related_terms: [
            {
              term_target: "お会計",
              pronunciation: ["okaikei"],
              specific_note: "結帳",
              segments: [
                {
                  text: "お会計",
                  furigana: "おかいけい",
                  meaning: "結帳/買單",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "お会計をお願いします。",
              translation: "麻煩結帳。",
              segments: [
                {
                  text: "お会計",
                  furigana: "おかいけい",
                  meaning: "結帳",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "麻煩了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "別々にお願いします。",
              translation: "麻煩分開結帳。",
              segments: [
                {
                  text: "別々",
                  furigana: "べつべつ",
                  meaning: "分開",
                  tail: "",
                },
                { text: "に", meaning: "地", tail: " " },
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "麻煩了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "会計はどこですか。",
              translation: "結帳櫃檯在哪裡？",
              segments: [
                {
                  text: "会計",
                  furigana: "かいけい",
                  meaning: "結帳/會計",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "在餐廳要買單時，請說「お会計 (okaikei)」。",
          image_file: "bill.png",
        },
        {
          id: "n-59",
          term_zh: "價錢",
          related_terms: [
            {
              term_target: "値段",
              pronunciation: ["nedan"],
              specific_note: "",
              segments: [
                { text: "値段", furigana: "ねだん", meaning: "價錢", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "値段が高いです。",
              translation: "價錢很貴(高)。",
              segments: [
                { text: "値段", furigana: "ねだん", meaning: "價錢", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "高い",
                  furigana: "たかい",
                  meaning: "高/貴",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "値段を見ます。",
              translation: "看價錢。",
              segments: [
                { text: "値段", furigana: "ねだん", meaning: "價錢", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見ます",
                  furigana: "みます",
                  meaning: "看",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "いい値段ですね。",
              translation: "價格不斐(反語) / 價格合理。",
              segments: [
                { text: "いい", meaning: "好", tail: " " },
                { text: "値段", furigana: "ねだん", meaning: "價錢", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
          ],
          usage_note: "詢問多少錢時通常直接說「いくら (ikura)」。",
          image_file: "price.png",
        },
        {
          id: "n-60",
          term_zh: "收據",
          related_terms: [
            {
              term_target: "レシート",
              pronunciation: ["reshiito"],
              specific_note: "發票/收據",
              segments: [{ text: "レシート", meaning: "收據", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "レシートをください。",
              translation: "請給我收據。",
              segments: [
                { text: "レシート", meaning: "收據", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "レシートは要りません。",
              translation: "不需要收據。",
              segments: [
                { text: "レシート", meaning: "收據", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "要りません",
                  furigana: "いりません",
                  meaning: "不需要",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "領収書をお願いします。",
              translation: "麻煩給我手寫收據(報帳用)。",
              segments: [
                {
                  text: "領収書",
                  furigana: "りょうしゅうしょ",
                  meaning: "領收書/正式收據",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "麻煩了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "一般購物明細叫「レシート」，公司報帳用的正式收據叫「領収書 (ryoushuusho)」。",
          image_file: "receipt.png",
        },
        {
          id: "n-61",
          term_zh: "尺寸",
          related_terms: [
            {
              term_target: "サイズ",
              pronunciation: ["saizu"],
              specific_note: "",
              segments: [{ text: "サイズ", meaning: "尺寸", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "サイズは大丈夫ですか。",
              translation: "尺寸還可以(合適)嗎？",
              segments: [
                { text: "サイズ", meaning: "尺寸", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "大丈夫",
                  furigana: "だいじょうぶ",
                  meaning: "沒問題",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "Ｌサイズをお願いします。",
              translation: "我要L號(尺寸)。",
              segments: [
                { text: "Ｌ", meaning: "L", tail: "" },
                { text: "サイズ", meaning: "尺寸", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "麻煩了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "違うサイズはありますか。",
              translation: "有不同的尺寸嗎？",
              segments: [
                {
                  text: "違う",
                  furigana: "ちがう",
                  meaning: "不同的",
                  tail: " ",
                },
                { text: "サイズ", meaning: "尺寸", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "買衣服鞋子時必備。",
          image_file: "size.png",
        },
        {
          id: "n-62",
          term_zh: "入口",
          related_terms: [
            {
              term_target: "入り口",
              pronunciation: ["iriguchi"],
              specific_note: "",
              segments: [
                {
                  text: "入り口",
                  furigana: "いりぐち",
                  meaning: "入口",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "入り口はどこですか。",
              translation: "入口在哪裡？",
              segments: [
                {
                  text: "入り口",
                  furigana: "いりぐち",
                  meaning: "入口",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "あそこが入り口です。",
              translation: "那裡是入口。",
              segments: [
                { text: "あそこ", meaning: "那裡", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "入り口",
                  furigana: "いりぐち",
                  meaning: "入口",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "駅の入り口。",
              translation: "車站入口。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "入り口",
                  furigana: "いりぐち",
                  meaning: "入口",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "漢字寫作「入口」或「入り口」。",
          image_file: "entrance.png",
        },
        {
          id: "n-63",
          term_zh: "出口",
          related_terms: [
            {
              term_target: "出口",
              pronunciation: ["deguchi"],
              specific_note: "",
              segments: [
                { text: "出口", furigana: "でぐち", meaning: "出口", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "出口はこちらです。",
              translation: "出口在這邊。",
              segments: [
                { text: "出口", furigana: "でぐち", meaning: "出口", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "こちら", meaning: "這邊", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "東口。",
              translation: "東邊出口 (車站常用)。",
              segments: [
                {
                  text: "東口",
                  furigana: "ひがしぐち",
                  meaning: "東口",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "非常口。",
              translation: "緊急出口。",
              segments: [
                {
                  text: "非常口",
                  furigana: "ひじょうぐち",
                  meaning: "緊急出口",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "車站出口常加上方位，如「西口 (nishiguchi)」、「北口 (kitaguchi)」。",
          image_file: "exit.png",
        },
        {
          id: "n-64",
          term_zh: "台灣",
          related_terms: [
            {
              term_target: "台湾",
              pronunciation: ["taiwan"],
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
              sentence: "私は台湾から来ました。",
              translation: "我來自台灣。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
                { text: "から", meaning: "從", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "台湾に行きたいです。",
              translation: "我想去台灣。",
              segments: [
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きたい",
                  furigana: "いきたい",
                  meaning: "想去",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "台湾は暑いです。",
              translation: "台灣很熱。",
              segments: [
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "暑い", furigana: "あつい", meaning: "熱", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "介紹自己家鄉時使用。",
          image_file: "taiwan.png",
        },
        {
          id: "n-65",
          term_zh: "台灣人",
          related_terms: [
            {
              term_target: "台湾人",
              pronunciation: ["taiwanjin"],
              specific_note: "",
              segments: [
                {
                  text: "台湾人",
                  furigana: "たいわんじん",
                  meaning: "台灣人",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は台湾人です。",
              translation: "我是台灣人。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "台湾人",
                  furigana: "たいわんじん",
                  meaning: "台灣人",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼は台湾人ですか。",
              translation: "他是台灣人嗎？",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "台湾人",
                  furigana: "たいわんじん",
                  meaning: "台灣人",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "台湾人は親切です。",
              translation: "台灣人很親切。",
              segments: [
                {
                  text: "台湾人",
                  furigana: "たいわんじん",
                  meaning: "台灣人",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "親切",
                  furigana: "しんせつ",
                  meaning: "親切",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "「國家名 + 人(jin)」表示該國人。",
          image_file: "taiwanese.png",
        },
        {
          id: "n-66",
          term_zh: "一切 (全部)",
          related_terms: [
            {
              term_target: "全部",
              pronunciation: ["zenbu"],
              specific_note: "具體/所有",
              segments: [
                { text: "全部", furigana: "ぜんぶ", meaning: "全部", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これで全部ですか。",
              translation: "這樣就是全部了嗎 (沒別的了嗎)？",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "で", meaning: "以...", tail: " " },
                { text: "全部", furigana: "ぜんぶ", meaning: "全部", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "全部食べました。",
              translation: "全部都吃掉了。",
              segments: [
                {
                  text: "全部",
                  furigana: "ぜんぶ",
                  meaning: "全部",
                  tail: " ",
                },
                {
                  text: "食べました",
                  furigana: "たべました",
                  meaning: "吃了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "全部でいくらですか。",
              translation: "全部加起來多少錢？",
              segments: [
                { text: "全部", furigana: "ぜんぶ", meaning: "全部", tail: "" },
                { text: "で", meaning: "合計", tail: " " },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "購物、點餐結尾時很常用。",
          image_file: "everything.png",
        },
        {
          id: "n-67",
          term_zh: "錢包",
          related_terms: [
            {
              term_target: "財布",
              pronunciation: ["saifu"],
              specific_note: "",
              segments: [
                { text: "財布", furigana: "さいふ", meaning: "錢包", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "財布を忘れました。",
              translation: "我忘記帶錢包了。",
              segments: [
                { text: "財布", furigana: "さいふ", meaning: "錢包", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "忘れました",
                  furigana: "わすれました",
                  meaning: "忘記了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "財布を落としました。",
              translation: "我弄丟(掉)了錢包。",
              segments: [
                { text: "財布", furigana: "さいふ", meaning: "錢包", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "落としました",
                  furigana: "おとしました",
                  meaning: "弄掉了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "新しい財布。",
              translation: "新錢包。",
              segments: [
                {
                  text: "新しい",
                  furigana: "あたらしい",
                  meaning: "新的",
                  tail: " ",
                },
                {
                  text: "財布",
                  furigana: "さいふ",
                  meaning: "錢包",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "皮夾或零錢包的總稱。",
          image_file: "wallet.png",
        },
        {
          id: "n-68",
          term_zh: "身分證 (證件)",
          related_terms: [
            {
              term_target: "身分証",
              pronunciation: ["mibunshou"],
              specific_note: "身分證件",
              segments: [
                {
                  text: "身分証",
                  furigana: "みぶんしょう",
                  meaning: "身分證",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "身分証を見せてください。",
              translation: "請出示身分證件。",
              segments: [
                {
                  text: "身分証",
                  furigana: "みぶんしょう",
                  meaning: "身分證",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見せて",
                  furigana: "みせて",
                  meaning: "給看",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "身分証を持っていますか。",
              translation: "你有帶身分證件嗎？",
              segments: [
                {
                  text: "身分証",
                  furigana: "みぶんしょう",
                  meaning: "身分證",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "持って",
                  furigana: "もって",
                  meaning: "帶/持有",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "パスポートも身分証です。",
              translation: "護照也是身分證件。",
              segments: [
                { text: "パスポート", meaning: "護照", tail: "" },
                { text: "も", meaning: "也", tail: " " },
                {
                  text: "身分証",
                  furigana: "みぶんしょう",
                  meaning: "身分證",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "外國人的身分證通常是「在留カード (居留卡)」或護照。",
          image_file: "id.png",
        },
        {
          id: "n-69",
          term_zh: "護照",
          related_terms: [
            {
              term_target: "パスポート",
              pronunciation: ["pasupooto"],
              specific_note: "",
              segments: [{ text: "パスポート", meaning: "護照", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "パスポートをお願いします。",
              translation: "麻煩出示護照。",
              segments: [
                { text: "パスポート", meaning: "護照", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "お願いします",
                  furigana: "おねがいします",
                  meaning: "麻煩了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "パスポートを忘れました。",
              translation: "我忘了帶護照。",
              segments: [
                { text: "パスポート", meaning: "護照", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "忘れました",
                  furigana: "わすれました",
                  meaning: "忘記了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "パスポートを持っています。",
              translation: "我有帶護照。",
              segments: [
                { text: "パスポート", meaning: "護照", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "持って",
                  furigana: "もって",
                  meaning: "帶/持有",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
          ],
          usage_note: "飯店入住或免稅購物時必備。",
          image_file: "passport.png",
        },
        {
          id: "n-70",
          term_zh: "餐廳",
          related_terms: [
            {
              term_target: "レストラン",
              pronunciation: ["resutoran"],
              specific_note: "",
              segments: [{ text: "レストラン", meaning: "餐廳", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "レストランに行きます。",
              translation: "去餐廳。",
              segments: [
                { text: "レストラン", meaning: "餐廳", tail: "" },
                { text: "に", meaning: "去(地點)", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "いいレストランを知っていますか。",
              translation: "你知道不錯的餐廳嗎？",
              segments: [
                { text: "いい", meaning: "好的", tail: " " },
                { text: "レストラン", meaning: "餐廳", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "知って",
                  furigana: "しって",
                  meaning: "知道",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "レストランで食事します。",
              translation: "在餐廳吃飯。",
              segments: [
                { text: "レストラン", meaning: "餐廳", tail: "" },
                { text: "で", meaning: "在(地點)", tail: " " },
                {
                  text: "食事",
                  furigana: "しょくじ",
                  meaning: "用餐",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
          ],
          usage_note:
            "一般指西式餐廳。日式餐廳可稱為「お店 (omise)」或「食堂 (shokudou)」。",
          image_file: "restaurant.png",
        },
        {
          id: "n-71",
          term_zh: "飯店",
          related_terms: [
            {
              term_target: "ホテル",
              pronunciation: ["hoteru"],
              specific_note: "",
              segments: [{ text: "ホテル", meaning: "飯店", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ホテルを予約しました。",
              translation: "我訂了飯店。",
              segments: [
                { text: "ホテル", meaning: "飯店", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "予約", furigana: "よやく", meaning: "預約", tail: "" },
                { text: "しました", meaning: "做了", tail: "。" },
              ],
            },
            {
              sentence: "ホテルに泊まります。",
              translation: "住在飯店 (過夜)。",
              segments: [
                { text: "ホテル", meaning: "飯店", tail: "" },
                { text: "に", meaning: "在(地點)", tail: " " },
                {
                  text: "泊まります",
                  furigana: "とまります",
                  meaning: "住宿/過夜",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ホテルの部屋。",
              translation: "飯店的房間。",
              segments: [
                { text: "ホテル", meaning: "飯店", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "。" },
              ],
            },
          ],
          usage_note: "住宿設施。",
          image_file: "hotel.png",
        },
        {
          id: "n-72",
          term_zh: "場所 (地方)",
          related_terms: [
            {
              term_target: "場所",
              pronunciation: ["basho"],
              specific_note: "地點",
              segments: [
                { text: "場所", furigana: "ばしょ", meaning: "場所", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "場所がわかりません。",
              translation: "我不知道地點在哪。",
              segments: [
                {
                  text: "場所",
                  furigana: "ばしょ",
                  meaning: "場所/地點",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "わかりません", meaning: "不知道", tail: "。" },
              ],
            },
            {
              sentence: "いい場所ですね。",
              translation: "真是個好地方。",
              segments: [
                { text: "いい", meaning: "好的", tail: " " },
                { text: "場所", furigana: "ばしょ", meaning: "地方", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "待ち合わせ場所。",
              translation: "會合地點。",
              segments: [
                {
                  text: "待ち合わせ",
                  furigana: "まちあわせ",
                  meaning: "會合/碰頭",
                  tail: " ",
                },
                {
                  text: "場所",
                  furigana: "ばしょ",
                  meaning: "地點",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "指具體的地點。",
          image_file: "place.png",
        },
        {
          id: "n-73",
          term_zh: "店員",
          related_terms: [
            {
              term_target: "店員",
              pronunciation: ["tenin"],
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
              sentence: "店員に聞きます。",
              translation: "問店員。",
              segments: [
                {
                  text: "店員",
                  furigana: "てんいん",
                  meaning: "店員",
                  tail: "",
                },
                { text: "に", meaning: "對(對象)", tail: " " },
                {
                  text: "聞きます",
                  furigana: "ききます",
                  meaning: "詢問",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "店員を呼んでください。",
              translation: "請叫店員過來。",
              segments: [
                {
                  text: "店員",
                  furigana: "てんいん",
                  meaning: "店員",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "呼んで",
                  furigana: "よんで",
                  meaning: "呼叫",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "親切な店員。",
              translation: "親切的店員。",
              segments: [
                {
                  text: "親切",
                  furigana: "しんせつ",
                  meaning: "親切",
                  tail: "",
                },
                { text: "な", meaning: "的", tail: " " },
                {
                  text: "店員",
                  furigana: "てんいん",
                  meaning: "店員",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "呼喚店員時，通常直接喊「すみません (sumimasen)」。",
          image_file: "clerk.png",
        },
        {
          id: "n-74",
          term_zh: "超市",
          related_terms: [
            {
              term_target: "スーパー",
              pronunciation: ["suupaa"],
              specific_note: "",
              segments: [{ text: "スーパー", meaning: "超市", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "スーパーに行きます。",
              translation: "去超市。",
              segments: [
                { text: "スーパー", meaning: "超市", tail: "" },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "スーパーで買いました。",
              translation: "在超市買的。",
              segments: [
                { text: "スーパー", meaning: "超市", tail: "" },
                { text: "で", meaning: "在(地點)", tail: " " },
                {
                  text: "買いました",
                  furigana: "かいました",
                  meaning: "買了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "安いスーパー。",
              translation: "便宜的超市。",
              segments: [
                {
                  text: "安い",
                  furigana: "やすい",
                  meaning: "便宜的",
                  tail: " ",
                },
                { text: "スーパー", meaning: "超市", tail: "。" },
              ],
            },
          ],
          usage_note: "Supermarket 的縮寫。",
          image_file: "supermarket.png",
        },
        {
          id: "n-75",
          term_zh: "月台",
          related_terms: [
            {
              term_target: "ホーム",
              pronunciation: ["hoomu"],
              specific_note: "月台",
              segments: [{ text: "ホーム", meaning: "月台", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ホームで待ちます。",
              translation: "在月台等。",
              segments: [
                { text: "ホーム", meaning: "月台", tail: "" },
                { text: "で", meaning: "在", tail: " " },
                {
                  text: "待ちます",
                  furigana: "まちます",
                  meaning: "等待",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "２番線ホーム。",
              translation: "2號月台。",
              segments: [
                { text: "２", meaning: "二", tail: "" },
                {
                  text: "番線",
                  furigana: "ばんせん",
                  meaning: "號線(月台)",
                  tail: " ",
                },
                { text: "ホーム", meaning: "月台", tail: "。" },
              ],
            },
            {
              sentence: "電車がホームに入ります。",
              translation: "電車進站(月台)了。",
              segments: [
                {
                  text: "電車",
                  furigana: "でんしゃ",
                  meaning: "電車",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "ホーム", meaning: "月台", tail: "" },
                { text: "に", meaning: "進(方向)", tail: " " },
                {
                  text: "入ります",
                  furigana: "はいります",
                  meaning: "進入",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "Platform 的簡稱。幾號月台常說「〇番線 (bansen)」。",
          image_file: "platform.png",
        },
        {
          id: "n-76",
          term_zh: "音樂",
          related_terms: [
            {
              term_target: "音楽",
              pronunciation: ["ongaku"],
              specific_note: "",
              segments: [
                {
                  text: "音楽",
                  furigana: "おんがく",
                  meaning: "音樂",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "音楽を聞きます。",
              translation: "聽音樂。",
              segments: [
                {
                  text: "音楽",
                  furigana: "おんがく",
                  meaning: "音樂",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "聞きます",
                  furigana: "ききます",
                  meaning: "聽",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "どんな音楽が好きですか。",
              translation: "你喜歡什麼樣的音樂？",
              segments: [
                { text: "どんな", meaning: "怎樣的", tail: " " },
                {
                  text: "音楽",
                  furigana: "おんがく",
                  meaning: "音樂",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "日本の音楽。",
              translation: "日本音樂。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "音楽",
                  furigana: "おんがく",
                  meaning: "音樂",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "音樂。",
          image_file: "music.png",
        },
        {
          id: "n-77",
          term_zh: "雨",
          related_terms: [
            {
              term_target: "雨",
              pronunciation: ["ame"],
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
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "降って",
                  furigana: "ふって",
                  meaning: "降/下",
                  tail: "",
                },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "明日は雨です。",
              translation: "明天是雨天。",
              segments: [
                { text: "明日", furigana: "あした", meaning: "明天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "激しい雨。",
              translation: "大雨 (激烈的雨)。",
              segments: [
                {
                  text: "激しい",
                  furigana: "はげしい",
                  meaning: "激烈的",
                  tail: " ",
                },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "。" },
              ],
            },
          ],
          usage_note:
            "注意重音，「雨 (a-me)」是高低音，跟「飴 (a-me - 糖果)」的低高音不同。",
          image_file: "rain.png",
        },
        {
          id: "n-78",
          term_zh: "照片",
          related_terms: [
            {
              term_target: "写真",
              pronunciation: ["shashin"],
              specific_note: "",
              segments: [
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "",
                },
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
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "撮ります",
                  furigana: "とります",
                  meaning: "拍",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "写真を撮ってもいいですか。",
              translation: "可以拍照嗎？",
              segments: [
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "撮って", furigana: "とって", meaning: "拍", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "ですか", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "いい写真ですね。",
              translation: "這照片拍得真好。",
              segments: [
                { text: "いい", meaning: "好的", tail: " " },
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "",
                },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
          ],
          usage_note: "寫真。",
          image_file: "picture.png",
        },
        {
          id: "n-79",
          term_zh: "書",
          related_terms: [
            {
              term_target: "本",
              pronunciation: ["hon"],
              specific_note: "",
              segments: [
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "本を読みます。",
              translation: "看書 (讀書)。",
              segments: [
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "読みます",
                  furigana: "よみます",
                  meaning: "讀",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "本を買いました。",
              translation: "我買了書。",
              segments: [
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "買いました",
                  furigana: "かいました",
                  meaning: "買了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "面白い本。",
              translation: "有趣的書。",
              segments: [
                {
                  text: "面白い",
                  furigana: "おもしろい",
                  meaning: "有趣的",
                  tail: " ",
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
              pronunciation: ["toire"],
              specific_note: "",
              segments: [{ text: "トイレ", meaning: "廁所", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "トイレはどこですか。",
              translation: "廁所在哪裡？",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "トイレに行きたいです。",
              translation: "我想去廁所。",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "" },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きたい",
                  furigana: "いきたい",
                  meaning: "想去",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "きれいなトイレ。",
              translation: "乾淨的廁所。",
              segments: [
                { text: "きれい", meaning: "乾淨", tail: "" },
                { text: "な", meaning: "的", tail: " " },
                { text: "トイレ", meaning: "廁所", tail: "。" },
              ],
            },
          ],
          usage_note: "日本也常用「お手洗い (otearai)」，比トイレ更文雅一點。",
          image_file: "restroom.png",
        },
        {
          id: "n-81",
          term_zh: "天氣",
          related_terms: [
            {
              term_target: "天気",
              pronunciation: ["tenki"],
              specific_note: "",
              segments: [
                { text: "天気", furigana: "てんき", meaning: "天氣", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "いい天気ですね。",
              translation: "天氣真好呢。",
              segments: [
                { text: "いい", meaning: "好的", tail: " " },
                { text: "天気", furigana: "てんき", meaning: "天氣", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "明日の天気。",
              translation: "明天的天氣。",
              segments: [
                { text: "明日", furigana: "あした", meaning: "明天", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "天気",
                  furigana: "てんき",
                  meaning: "天氣",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "天気が悪いです。",
              translation: "天氣不好。",
              segments: [
                { text: "天気", furigana: "てんき", meaning: "天氣", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "悪い", furigana: "わるい", meaning: "壞", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "問候常用語。",
          image_file: "weather.png",
        },
        {
          id: "n-82",
          term_zh: "訊息",
          related_terms: [
            {
              term_target: "メッセージ",
              pronunciation: ["messeiji"],
              specific_note: "",
              segments: [{ text: "メッセージ", meaning: "訊息", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "メッセージを送ります。",
              translation: "傳送訊息。",
              segments: [
                { text: "メッセージ", meaning: "訊息", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "送ります",
                  furigana: "おくります",
                  meaning: "寄/送",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "メッセージが来ました。",
              translation: "訊息來了 (收到訊息)。",
              segments: [
                { text: "メッセージ", meaning: "訊息", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "彼からのメッセージ。",
              translation: "來自他的訊息。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "から", meaning: "從/來自", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "メッセージ", meaning: "訊息", tail: "。" },
              ],
            },
          ],
          usage_note: "LINE或簡訊都可用。",
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
              pronunciation: ["ima"],
              specific_note: "",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今、やります。",
              translation: "我現在做。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "やります", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "今、忙しいです。",
              translation: "我現在很忙。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                {
                  text: "忙しい",
                  furigana: "いそがしい",
                  meaning: "忙碌",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "今、どこですか。",
              translation: "你現在在哪裡？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "此時此刻。",
          image_file: "now.png",
        },
        {
          id: "adv-02",
          term_zh: "非常",
          related_terms: [
            {
              term_target: "とても",
              pronunciation: ["totemo"],
              specific_note: "程度高",
              segments: [{ text: "とても", meaning: "非常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "とてもいいですね。",
              translation: "非常好呢。",
              segments: [
                { text: "とても", meaning: "非常", tail: " " },
                { text: "いい", meaning: "好", tail: "" },
                { text: "ですね", meaning: "是呢", tail: "。" },
              ],
            },
            {
              sentence: "本当にありがとうございます。",
              translation: "非常謝謝你 (真的非常感謝)。",
              segments: [
                {
                  text: "本当に",
                  furigana: "ほんとうに",
                  meaning: "真的/非常",
                  tail: " ",
                },
                { text: "ありがとう", meaning: "謝謝", tail: "" },
                { text: "ございます", meaning: "(敬語)", tail: "。" },
              ],
            },
            {
              sentence: "今日はとても暑いです。",
              translation: "今天非常熱。",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "とても", meaning: "非常", tail: " " },
                { text: "暑い", furigana: "あつい", meaning: "熱", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "強調程度。口語中也常說「すごく (sugoku)」。",
          image_file: "very.png",
        },
        {
          id: "adv-03",
          term_zh: "真的",
          related_terms: [
            {
              term_target: "本当に",
              pronunciation: ["hontou ni"],
              specific_note: "",
              segments: [
                {
                  text: "本当に",
                  furigana: "ほんとうに",
                  meaning: "真的",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "本当ですか。",
              translation: "真的嗎？",
              segments: [
                {
                  text: "本当",
                  furigana: "ほんとう",
                  meaning: "真的",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "本当に好きです。",
              translation: "我真的很喜歡。",
              segments: [
                {
                  text: "本当に",
                  furigana: "ほんとうに",
                  meaning: "真的",
                  tail: " ",
                },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼女は本当に優しいです。",
              translation: "她人真的很好(溫柔)。",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "本当に",
                  furigana: "ほんとうに",
                  meaning: "真的",
                  tail: " ",
                },
                {
                  text: "優しい",
                  furigana: "やさしい",
                  meaning: "溫柔",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "強調真實性。",
          image_file: "really.png",
        },
        {
          id: "adv-04",
          term_zh: "好好地／很好地",
          related_terms: [
            {
              term_target: "よく",
              pronunciation: ["yoku"],
              specific_note: "好地/經常",
              segments: [{ text: "よく", meaning: "好地", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "よく寝ました。",
              translation: "我睡得很好。",
              segments: [
                { text: "よく", meaning: "好地", tail: " " },
                {
                  text: "寝ました",
                  furigana: "ねました",
                  meaning: "睡了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "よくできました。",
              translation: "做得好 (完成得很好)。",
              segments: [
                { text: "よく", meaning: "好地", tail: " " },
                { text: "できました", meaning: "完成了/做到了", tail: "。" },
              ],
            },
            {
              sentence: "気分がよくないです。",
              translation: "我身體不舒服 (感覺不好)。",
              segments: [
                {
                  text: "気分",
                  furigana: "きぶん",
                  meaning: "心情/身體狀況",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "よく", meaning: "好", tail: "" },
                { text: "ない", meaning: "不", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "「よく」是形容詞「いい (好)」的副詞形。",
          image_file: "well.png",
        },
        {
          id: "adv-05",
          term_zh: "經常",
          related_terms: [
            {
              term_target: "よく",
              pronunciation: ["yoku"],
              specific_note: "頻率高",
              segments: [{ text: "よく", meaning: "經常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ここによく来ます。",
              translation: "我常來這裡。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "に", meaning: "來(地點)", tail: " " },
                { text: "よく", meaning: "經常", tail: " " },
                {
                  text: "来ます",
                  furigana: "きます",
                  meaning: "來",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "よく映画を見ますか。",
              translation: "你常看電影嗎？",
              segments: [
                { text: "よく", meaning: "經常", tail: " " },
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "見ます", furigana: "みます", meaning: "看", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "ここではよく雨が降ります。",
              translation: "這裡經常下雨。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "では", meaning: "在...是", tail: " " },
                { text: "よく", meaning: "經常", tail: " " },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "降ります",
                  furigana: "ふります",
                  meaning: "下/降",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "「よく」既可以表示「做得好」，也可以表示「頻率高」，看上下文判斷。",
          image_file: "often.png",
        },
        {
          id: "adv-06",
          term_zh: "通常",
          related_terms: [
            {
              term_target: "たいてい",
              pronunciation: ["taitei"],
              specific_note: "大抵/大部分",
              segments: [{ text: "たいてい", meaning: "通常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "たいてい６時に帰ります。",
              translation: "通常六點回家。",
              segments: [
                { text: "たいてい", meaning: "通常", tail: " " },
                { text: "６時", furigana: "ろくじ", meaning: "六點", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                {
                  text: "帰ります",
                  furigana: "かえります",
                  meaning: "回家",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "朝はたいていパンを食べます。",
              translation: "早上通常吃麵包。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "たいてい", meaning: "通常", tail: " " },
                { text: "パン", meaning: "麵包", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "食べます",
                  furigana: "たべます",
                  meaning: "吃",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "日曜日はたいてい家にいます。",
              translation: "星期天通常待在家。",
              segments: [
                {
                  text: "日曜日",
                  furigana: "にちようび",
                  meaning: "星期天",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "たいてい", meaning: "通常", tail: " " },
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "います", meaning: "在", tail: "。" },
              ],
            },
          ],
          usage_note: "表示大部分的情況或習慣。",
          image_file: "usually.png",
        },
        {
          id: "adv-07",
          term_zh: "已經",
          related_terms: [
            {
              term_target: "もう",
              pronunciation: ["mou"],
              specific_note: "完成",
              segments: [{ text: "もう", meaning: "已經", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "もう終わりました。",
              translation: "已經結束了。",
              segments: [
                { text: "もう", meaning: "已經", tail: " " },
                {
                  text: "終わりました",
                  furigana: "おわりました",
                  meaning: "結束了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "もう１０時です。",
              translation: "已經10點了。",
              segments: [
                { text: "もう", meaning: "已經", tail: " " },
                {
                  text: "１０時",
                  furigana: "じゅうじ",
                  meaning: "十點",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "もう食べましたか。",
              translation: "你已經吃過了嗎？",
              segments: [
                { text: "もう", meaning: "已經", tail: " " },
                {
                  text: "食べました",
                  furigana: "たべました",
                  meaning: "吃了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "表示動作完成或狀態改變。",
          image_file: "already.png",
        },
        {
          id: "adv-08",
          term_zh: "只有",
          related_terms: [
            {
              term_target: "だけ",
              pronunciation: ["dake"],
              specific_note: "限定",
              segments: [{ text: "だけ", meaning: "只有/僅", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "これだけです。",
              translation: "只有這個。",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "だけ", meaning: "只有", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "１００円だけあります。",
              translation: "我只有100圓。",
              segments: [
                {
                  text: "１００円",
                  furigana: "ひゃくえん",
                  meaning: "一百圓",
                  tail: "",
                },
                { text: "だけ", meaning: "只有", tail: " " },
                { text: "あります", meaning: "有", tail: "。" },
              ],
            },
            {
              sentence: "あなただけです。",
              translation: "只有你。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "だけ", meaning: "只有", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "放在名詞後面，表示限定。",
          image_file: "only.png",
        },
        {
          id: "adv-09",
          term_zh: "再次",
          related_terms: [
            {
              term_target: "また",
              pronunciation: ["mata"],
              specific_note: "又/再",
              segments: [{ text: "また", meaning: "再次", tail: "" }],
            },
            {
              term_target: "もう一度",
              pronunciation: ["mou ichido"],
              specific_note: "再一次",
              segments: [
                { text: "もう", meaning: "再", tail: "" },
                { text: "一度", furigana: "いちど", meaning: "一次", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "また来てください。",
              translation: "請再來喔。",
              segments: [
                { text: "また", meaning: "再次", tail: " " },
                { text: "来て", furigana: "きて", meaning: "來", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "もう一度言ってください。",
              translation: "請再說一次。",
              segments: [
                { text: "もう", meaning: "再", tail: "" },
                {
                  text: "一度",
                  furigana: "いちど",
                  meaning: "一次",
                  tail: " ",
                },
                { text: "言って", furigana: "いって", meaning: "說", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "また会いましょう。",
              translation: "下次再見。",
              segments: [
                { text: "また", meaning: "再次", tail: " " },
                {
                  text: "会いましょう",
                  furigana: "あいましょう",
                  meaning: "見面吧",
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
              pronunciation: ["gurai"],
              specific_note: "左右/大約",
              segments: [{ text: "ぐらい", meaning: "大約", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "１０分ぐらいかかります。",
              translation: "大約要花10分鐘。",
              segments: [
                {
                  text: "１０分",
                  furigana: "じゅっぷん",
                  meaning: "十分鐘",
                  tail: "",
                },
                { text: "ぐらい", meaning: "左右", tail: " " },
                { text: "かかります", meaning: "花費(時間/錢)", tail: "。" },
              ],
            },
            {
              sentence: "５キロぐらいです。",
              translation: "大約5公里。",
              segments: [
                { text: "５キロ", meaning: "五公里", tail: "" },
                { text: "ぐらい", meaning: "左右", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "５０ドルぐらい。",
              translation: "大約50元。",
              segments: [
                { text: "５０ドル", meaning: "五十元", tail: "" },
                { text: "ぐらい", meaning: "左右", tail: "。" },
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
              pronunciation: ["sukoshi"],
              specific_note: "少量",
              segments: [
                { text: "少し", furigana: "すこし", meaning: "一點", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "少し辛いです。",
              translation: "有一點辣。",
              segments: [
                {
                  text: "少し",
                  furigana: "すこし",
                  meaning: "一點",
                  tail: " ",
                },
                { text: "辛い", furigana: "からい", meaning: "辣", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "少し疲れました。",
              translation: "有點累了。",
              segments: [
                {
                  text: "少し",
                  furigana: "すこし",
                  meaning: "一點",
                  tail: " ",
                },
                {
                  text: "疲れました",
                  furigana: "つかれました",
                  meaning: "累了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "少しだけください。",
              translation: "請給我一點點就好。",
              segments: [
                { text: "少し", furigana: "すこし", meaning: "一點", tail: "" },
                { text: "だけ", meaning: "只有", tail: " " },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
          ],
          usage_note: "口語中也常說「ちょっと (chotto)」。",
          image_file: "a_little.png",
        },
        {
          id: "adv-12",
          term_zh: "也是",
          related_terms: [
            {
              term_target: "も",
              pronunciation: ["mo"],
              specific_note: "助詞",
              segments: [{ text: "も", meaning: "也", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "私も好きです。",
              translation: "我也喜歡。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "も", meaning: "也", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "彼女も先生です。",
              translation: "她也是老師。",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "も", meaning: "也", tail: " " },
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
              sentence: "私もです。",
              translation: "我也是 (Me too)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "も", meaning: "也", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "日文用助詞「も」來表示「也」，接在名詞後面。",
          image_file: "also.png",
        },
        {
          id: "adv-13",
          term_zh: "或許",
          related_terms: [
            {
              term_target: "たぶん",
              pronunciation: ["tabun"],
              specific_note: "大概/也許",
              segments: [{ text: "たぶん", meaning: "大概", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "たぶん後で。",
              translation: "大概等一下吧。",
              segments: [
                { text: "たぶん", meaning: "大概", tail: " " },
                {
                  text: "後で",
                  furigana: "あとで",
                  meaning: "稍後",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "たぶん合っています。",
              translation: "大概是對的。",
              segments: [
                { text: "たぶん", meaning: "大概", tail: " " },
                {
                  text: "合って",
                  furigana: "あって",
                  meaning: "符合/正確",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
            {
              sentence: "たぶんね。",
              translation: "也許吧。",
              segments: [
                { text: "たぶん", meaning: "也許", tail: "" },
                { text: "ね", meaning: "吧", tail: "。" },
              ],
            },
          ],
          usage_note: "表示不確定，機率約 50-80%。",
          image_file: "maybe.png",
        },
        {
          id: "adv-14",
          term_zh: "之後 (待會)",
          related_terms: [
            {
              term_target: "後で",
              pronunciation: ["atode"],
              specific_note: "稍後",
              segments: [
                { text: "後で", furigana: "あとで", meaning: "之後", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "また後で。",
              translation: "待會見。",
              segments: [
                { text: "また", meaning: "再次", tail: " " },
                {
                  text: "後で",
                  furigana: "あとで",
                  meaning: "之後",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "後で電話します。",
              translation: "我晚點打電話給你。",
              segments: [
                {
                  text: "後で",
                  furigana: "あとで",
                  meaning: "稍後",
                  tail: " ",
                },
                { text: "電話", furigana: "でんわ", meaning: "電話", tail: "" },
                { text: "します", meaning: "做(打)", tail: "。" },
              ],
            },
            {
              sentence: "２年後。",
              translation: "兩年後 (長時間用「後(go)」)。",
              segments: [
                { text: "２", meaning: "二", tail: "" },
                { text: "年", furigana: "ねん", meaning: "年", tail: "" },
                { text: "後", furigana: "ご", meaning: "後", tail: "。" },
              ],
            },
          ],
          usage_note: "當天稍晚用「後で (atode)」，時間單位後用「後 (go)」。",
          image_file: "later.png",
        },
        {
          id: "adv-15",
          term_zh: "很快 (不久)",
          related_terms: [
            {
              term_target: "すぐに",
              pronunciation: ["suguni"],
              specific_note: "馬上",
              segments: [{ text: "すぐに", meaning: "馬上", tail: "" }],
            },
            {
              term_target: "もうすぐ",
              pronunciation: ["mousugu"],
              specific_note: "即將",
              segments: [{ text: "もうすぐ", meaning: "即將", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "すぐに会いましょう。",
              translation: "我們快點見面吧。",
              segments: [
                { text: "すぐに", meaning: "立刻/馬上", tail: " " },
                {
                  text: "会いましょう",
                  furigana: "あいましょう",
                  meaning: "見面吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "もうすぐ着きます。",
              translation: "我快到了 (即將抵達)。",
              segments: [
                { text: "もうすぐ", meaning: "不久/快要", tail: " " },
                {
                  text: "着きます",
                  furigana: "つきます",
                  meaning: "到達",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "早くよくなってください。",
              translation: "請早日康復 (Get well soon)。",
              segments: [
                {
                  text: "早く",
                  furigana: "はやく",
                  meaning: "早早地",
                  tail: " ",
                },
                { text: "よく", meaning: "好", tail: "" },
                { text: "なって", meaning: "變成", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note: "「すぐに」指動作迅速，「もうすぐ」指時間快到了。",
          image_file: "soon.png",
        },
        {
          id: "adv-16",
          term_zh: "一起",
          related_terms: [
            {
              term_target: "一緒に",
              pronunciation: ["isshoni"],
              specific_note: "",
              segments: [
                {
                  text: "一緒に",
                  furigana: "いっしょに",
                  meaning: "一起",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "一緒に行きます。",
              translation: "一起去。",
              segments: [
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "",
                },
                { text: "に", meaning: "地", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "一緒に写真を撮りましょう。",
              translation: "我們一起拍照吧。",
              segments: [
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "",
                },
                { text: "に", meaning: "地", tail: " " },
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "撮りましょう",
                  furigana: "とりましょう",
                  meaning: "拍吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "私たちは一緒です。",
              translation: "我們在一起 (我們是一夥的)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "たち", meaning: "們", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "共同行動。",
          image_file: "together.png",
        },
        {
          id: "adv-17",
          term_zh: "仍然 (還)",
          related_terms: [
            {
              term_target: "まだ",
              pronunciation: ["mada"],
              specific_note: "尚未/還",
              segments: [{ text: "まだ", meaning: "還", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "まだここにいます。",
              translation: "還在這裡。",
              segments: [
                { text: "まだ", meaning: "還/仍然", tail: " " },
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "います", meaning: "在", tail: "。" },
              ],
            },
            {
              sentence: "まだお腹が空いています。",
              translation: "我還是很餓 (肚子還空著)。",
              segments: [
                { text: "まだ", meaning: "還", tail: " " },
                { text: "お腹", furigana: "おなか", meaning: "肚子", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "空いて", furigana: "すいて", meaning: "空", tail: "" },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
            {
              sentence: "まだ仕事中ですか。",
              translation: "你還在工作中嗎？",
              segments: [
                { text: "まだ", meaning: "還", tail: " " },
                { text: "仕事", furigana: "しごと", meaning: "工作", tail: "" },
                { text: "中", furigana: "ちゅう", meaning: "中", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "表示狀態持續或尚未完成。",
          image_file: "still.png",
        },
        {
          id: "adv-18",
          term_zh: "一般來說 (通常)",
          related_terms: [
            {
              term_target: "普通",
              pronunciation: ["futsuu"],
              specific_note: "普通/一般",
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
              sentence: "普通は歩きます。",
              translation: "一般來說我會走路。",
              segments: [
                { text: "普通", furigana: "ふつう", meaning: "一般", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "歩きます",
                  furigana: "あるきます",
                  meaning: "走",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "普通は１時間かかります。",
              translation: "一般要花一個小時。",
              segments: [
                { text: "普通", furigana: "ふつう", meaning: "一般", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "１時間",
                  furigana: "いちじかん",
                  meaning: "一小時",
                  tail: "",
                },
                { text: "かかります", meaning: "花費", tail: "。" },
              ],
            },
            {
              sentence: "味は普通です。",
              translation: "味道很普通。",
              segments: [
                { text: "味", furigana: "あじ", meaning: "味道", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "普通", furigana: "ふつう", meaning: "普通", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "表示正常情況。",
          image_file: "normally.png",
        },
        {
          id: "adv-19",
          term_zh: "立刻",
          related_terms: [
            {
              term_target: "すぐに",
              pronunciation: ["suguni"],
              specific_note: "馬上",
              segments: [{ text: "すぐに", meaning: "立刻", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "すぐに行ってください。",
              translation: "請立刻去。",
              segments: [
                { text: "すぐに", meaning: "立刻", tail: " " },
                { text: "行って", furigana: "いって", meaning: "去", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "すぐにやめます。",
              translation: "立刻停止。",
              segments: [
                { text: "すぐに", meaning: "立刻", tail: " " },
                { text: "やめます", meaning: "停止/放棄", tail: "。" },
              ],
            },
            {
              sentence: "すぐに助けが必要です。",
              translation: "需要立刻的協助。",
              segments: [
                { text: "すぐに", meaning: "立刻", tail: " " },
                { text: "助け", furigana: "たすけ", meaning: "協助", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "必要",
                  furigana: "ひつよう",
                  meaning: "必要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "沒有延遲。",
          image_file: "immediately.png",
        },
        {
          id: "adv-20",
          term_zh: "也不 (兩者都不)",
          related_terms: [
            {
              term_target: "どちらも...ない",
              pronunciation: ["dochiramo...nai"],
              specific_note: "兩者都不...",
              segments: [
                { text: "どちら", meaning: "哪邊", tail: "" },
                { text: "も", meaning: "都", tail: "" },
                { text: "ない", meaning: "不", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "どちらも好きじゃないです。",
              translation: "兩個都不喜歡 (Neither one is good)。",
              segments: [
                { text: "どちら", meaning: "哪邊(兩者)", tail: "" },
                { text: "も", meaning: "都", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "じゃ", meaning: "並", tail: "" },
                { text: "ない", meaning: "不", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "私も知りません。",
              translation: "我也不知道 (Me neither)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "も", meaning: "也", tail: " " },
                {
                  text: "知りません",
                  furigana: "しりません",
                  meaning: "不知道",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "どちらも食べません。",
              translation: "兩個都不吃。",
              segments: [
                { text: "どちら", meaning: "哪邊", tail: "" },
                { text: "も", meaning: "都", tail: " " },
                {
                  text: "食べません",
                  furigana: "たべません",
                  meaning: "不吃",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "日文沒有單一詞彙表示「Neither」，需配合否定形使用。",
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
              pronunciation: ["nani"],
              specific_note: "事物",
              segments: [
                { text: "何", furigana: "なに", meaning: "什麼", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "これは何ですか。",
              translation: "這是什麼？",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何", furigana: "なん", meaning: "什麼", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "何が好きですか。",
              translation: "你喜歡什麼？",
              segments: [
                { text: "何", furigana: "なに", meaning: "什麼", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "何を食べますか。",
              translation: "你要吃什麼？",
              segments: [
                { text: "何", furigana: "なに", meaning: "什麼", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "食べます",
                  furigana: "たべます",
                  meaning: "吃",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "後面接 d, t, n 開頭的音（如 desu）時唸「nan」，其他大多唸「nani」。",
          image_file: "what.png",
        },
        {
          id: "q-02",
          term_zh: "如何 (怎麼樣)",
          related_terms: [
            {
              term_target: "どう",
              pronunciation: ["dou"],
              specific_note: "詢問狀態",
              segments: [{ text: "どう", meaning: "如何", tail: "" }],
            },
            {
              term_target: "どうやって",
              pronunciation: ["douyatte"],
              specific_note: "詢問方法",
              segments: [{ text: "どうやって", meaning: "怎麼做", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "調子はどうですか。",
              translation: "身體(狀況)如何？",
              segments: [
                {
                  text: "調子",
                  furigana: "ちょうし",
                  meaning: "狀況",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どう", meaning: "如何", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "味はどうですか。",
              translation: "味道怎麼樣？",
              segments: [
                { text: "味", furigana: "あじ", meaning: "味道", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どう", meaning: "如何", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "駅までどうやって行きますか。",
              translation: "要怎麼去車站？(問交通方式)",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "まで", meaning: "直到", tail: " " },
                { text: "どうやって", meaning: "怎麼做", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "問感想或狀態用「どう」，問方法手段用「どうやって」。",
          image_file: "how.png",
        },
        {
          id: "q-03",
          term_zh: "何時",
          related_terms: [
            {
              term_target: "いつ",
              pronunciation: ["itsu"],
              specific_note: "",
              segments: [{ text: "いつ", meaning: "何時", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "誕生日はいつですか。",
              translation: "你的生日是什麼時候？",
              segments: [
                {
                  text: "誕生日",
                  furigana: "たんじょうび",
                  meaning: "生日",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いつ", meaning: "何時", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "いつ日本に来ましたか。",
              translation: "你什麼時候來日本的？",
              segments: [
                { text: "いつ", meaning: "何時", tail: " " },
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "に", meaning: "來(地點)", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "テストはいつですか。",
              translation: "考試是什麼時候？",
              segments: [
                { text: "テスト", meaning: "考試", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いつ", meaning: "何時", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "詢問時間點。",
          image_file: "when.png",
        },
        {
          id: "q-04",
          term_zh: "哪裡",
          related_terms: [
            {
              term_target: "どこ",
              pronunciation: ["doko"],
              specific_note: "",
              segments: [{ text: "どこ", meaning: "哪裡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "トイレはどこですか。",
              translation: "廁所在哪裡？",
              segments: [
                { text: "トイレ", meaning: "廁所", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "どこに住んでいますか。",
              translation: "你住在哪裡？",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "に", meaning: "在(地點)", tail: " " },
                { text: "住んで", furigana: "すんで", meaning: "住", tail: "" },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "どこへ行きますか。",
              translation: "你要去哪裡？",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "へ", meaning: "往(方向)", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "詢問地點。",
          image_file: "where.png",
        },
        {
          id: "q-05",
          term_zh: "誰",
          related_terms: [
            {
              term_target: "誰",
              pronunciation: ["dare"],
              specific_note: "一般",
              segments: [
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "あの人は誰ですか。",
              translation: "那個人是誰？",
              segments: [
                { text: "あの", meaning: "那個", tail: " " },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "誰が来ますか。",
              translation: "誰會來？",
              segments: [
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "来ます", furigana: "きます", meaning: "來", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "どなたですか。",
              translation: "請問是哪位？(更有禮貌)",
              segments: [
                { text: "どなた", meaning: "哪位(誰的敬語)", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "一般用「誰」，對長輩或客戶用「どなた (donata)」。",
          image_file: "who.png",
        },
        {
          id: "q-06",
          term_zh: "為什麼",
          related_terms: [
            {
              term_target: "どうして",
              pronunciation: ["doushite"],
              specific_note: "通用",
              segments: [{ text: "どうして", meaning: "為什麼", tail: "" }],
            },
            {
              term_target: "なぜ",
              pronunciation: ["naze"],
              specific_note: "較正式",
              segments: [{ text: "なぜ", meaning: "為什麼", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "どうしてですか。",
              translation: "為什麼？",
              segments: [
                { text: "どうして", meaning: "為什麼", tail: "" },
                { text: "ですか", meaning: "是嗎(呢)", tail: "。" },
              ],
            },
            {
              sentence: "どうして遅れましたか。",
              translation: "為什麼遲到了？",
              segments: [
                { text: "どうして", meaning: "為什麼", tail: " " },
                {
                  text: "遅れました",
                  furigana: "おくれました",
                  meaning: "遲到了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "なぜ泣いていますか。",
              translation: "你為什麼在哭？",
              segments: [
                { text: "なぜ", meaning: "為什麼", tail: " " },
                { text: "泣いて", furigana: "ないて", meaning: "哭", tail: "" },
                { text: "います", meaning: "正在", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「どうして」最常用；「なぜ」比較生硬；口語常用「なんで (nande)」。",
          image_file: "why.png",
        },
        {
          id: "q-07",
          term_zh: "哪一個",
          related_terms: [
            {
              term_target: "どれ",
              pronunciation: ["dore"],
              specific_note: "三個以上選一",
              segments: [{ text: "どれ", meaning: "哪一個", tail: "" }],
            },
            {
              term_target: "どちら",
              pronunciation: ["dochira"],
              specific_note: "二選一",
              segments: [{ text: "どちら", meaning: "哪邊/哪一個", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "どれですか。",
              translation: "是哪一個？",
              segments: [
                { text: "どれ", meaning: "哪一個", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "どれが好きですか。",
              translation: "你喜歡哪一個？(多個選項中)",
              segments: [
                { text: "どれ", meaning: "哪一個", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "どちらにしますか。",
              translation: "你要選哪一個？(二選一時)",
              segments: [
                { text: "どちら", meaning: "哪邊", tail: "" },
                { text: "に", meaning: "(決定助詞)", tail: " " },
                { text: "します", meaning: "做/決定", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "「どれ」用於三個以上選項，「どちら」用於兩個選項。",
          image_file: "which.png",
        },
        {
          id: "q-08",
          term_zh: "多少錢",
          related_terms: [
            {
              term_target: "いくら",
              pronunciation: ["ikura"],
              specific_note: "詢問價格",
              segments: [{ text: "いくら", meaning: "多少錢", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "これはいくらですか。",
              translation: "這個多少錢？",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "全部でいくらですか。",
              translation: "全部總共多少錢？",
              segments: [
                { text: "全部", furigana: "ぜんぶ", meaning: "全部", tail: "" },
                { text: "で", meaning: "合計", tail: " " },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "その鞄はいくらですか。",
              translation: "那個包包多少錢？",
              segments: [
                { text: "その", meaning: "那個", tail: " " },
                { text: "鞄", furigana: "かばん", meaning: "包包", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いくら", meaning: "多少錢", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "購物專用。",
          image_file: "how_much.png",
        },
        {
          id: "q-09",
          term_zh: "多久（時間）",
          related_terms: [
            {
              term_target: "どのくらい",
              pronunciation: ["dono kurai"],
              specific_note: "時間/長度",
              segments: [
                { text: "どの", meaning: "哪個", tail: "" },
                { text: "くらい", meaning: "大約/程度", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "時間はどのくらいかかりますか。",
              translation: "需要花多久時間？",
              segments: [
                { text: "時間", furigana: "じかん", meaning: "時間", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どの", meaning: "哪個", tail: "" },
                { text: "くらい", meaning: "程度", tail: " " },
                { text: "かかります", meaning: "花費", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "どのくらい待ちますか。",
              translation: "要等多久？",
              segments: [
                { text: "どの", meaning: "哪個", tail: "" },
                { text: "くらい", meaning: "程度", tail: " " },
                {
                  text: "待ちます",
                  furigana: "まちます",
                  meaning: "等待",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "日本にどのくらい住んでいますか。",
              translation: "你在日本住多久了？",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "どの", meaning: "哪個", tail: "" },
                { text: "くらい", meaning: "程度", tail: " " },
                { text: "住んで", furigana: "すんで", meaning: "住", tail: "" },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "詢問時間長度或距離長度。",
          image_file: "how_long.png",
        },
        {
          id: "q-10",
          term_zh: "幾點",
          related_terms: [
            {
              term_target: "何時",
              pronunciation: ["nanji"],
              specific_note: "",
              segments: [
                { text: "何", furigana: "なん", meaning: "何", tail: "" },
                { text: "時", furigana: "じ", meaning: "時", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今、何時ですか。",
              translation: "現在幾點？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "何時に会いますか。",
              translation: "我們幾點見面？",
              segments: [
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
                { text: "に", meaning: "在(時間)", tail: " " },
                {
                  text: "会います",
                  furigana: "あいます",
                  meaning: "見面",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "店は何時に閉まりますか。",
              translation: "店幾點關門？",
              segments: [
                { text: "店", furigana: "みせ", meaning: "店", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "何時", furigana: "なんじ", meaning: "幾點", tail: "" },
                { text: "に", meaning: "在(時間)", tail: " " },
                {
                  text: "閉まります",
                  furigana: "しまります",
                  meaning: "關閉",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "詢問具體時刻。",
          image_file: "what_time.png",
        },
        {
          id: "q-11",
          term_zh: "幾歲",
          related_terms: [
            {
              term_target: "何歳",
              pronunciation: ["nansai"],
              specific_note: "",
              segments: [
                { text: "何", furigana: "なん", meaning: "何", tail: "" },
                { text: "歳", furigana: "さい", meaning: "歲", tail: "" },
              ],
            },
            {
              term_target: "おいくつ",
              pronunciation: ["oikutsu"],
              specific_note: "幾歲(禮貌形)",
              segments: [{ text: "おいくつ", meaning: "幾歲", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あなたは何歳ですか。",
              translation: "你幾歲？",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "何歳",
                  furigana: "なんさい",
                  meaning: "幾歲",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "お子さんはおいくつですか。",
              translation: "您的小孩幾歲了？(禮貌)",
              segments: [
                {
                  text: "お子さん",
                  furigana: "おこさん",
                  meaning: "您的孩子",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "おいくつ", meaning: "幾歲", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "２０歳です。",
              translation: "我20歲。",
              segments: [
                {
                  text: "２０歳",
                  furigana: "はたち",
                  meaning: "20歲(特殊讀音)",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "一般用「何歳」，對長輩或不熟的人用「おいくつ」。注意20歲唸作「hatachi」。",
          image_file: "how_old.png",
        },
      ],
    },
    {
      id: "time_place",
      name: "表達場所和時間",
      items: [
        {
          id: "tp-01",
          term_zh: "現在",
          related_terms: [
            {
              term_target: "今",
              pronunciation: ["ima"],
              specific_note: "",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今、やります。",
              translation: "我現在做。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "やります", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "今、どこですか。",
              translation: "你現在在哪裡？",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "今、忙しいです。",
              translation: "我現在很忙。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                {
                  text: "忙しい",
                  furigana: "いそがしい",
                  meaning: "忙碌",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "此時此刻。",
          image_file: "now.png",
        },
        {
          id: "tp-02",
          term_zh: "今天",
          related_terms: [
            {
              term_target: "今日",
              pronunciation: ["kyou"],
              specific_note: "",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今日ではありません。",
              translation: "不是今天。",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "ではありません", meaning: "不是", tail: "。" },
              ],
            },
            {
              sentence: "今日は元気ですか。",
              translation: "你今天好嗎？",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "精神/健康",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "今日は月曜日です。",
              translation: "今天是星期一。",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "月曜日",
                  furigana: "げつようび",
                  meaning: "星期一",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
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
              pronunciation: ["ashita"],
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
                { text: "また", meaning: "再次", tail: " " },
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "明日は私の誕生日です。",
              translation: "明天是我的生日。",
              segments: [
                { text: "明日", furigana: "あした", meaning: "明天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "誕生日",
                  furigana: "たんじょうび",
                  meaning: "生日",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "明日は暇ですか。",
              translation: "你明天有空(閒)嗎？",
              segments: [
                { text: "明日", furigana: "あした", meaning: "明天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "暇",
                  furigana: "ひま",
                  meaning: "閒暇/有空",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "隔天。",
          image_file: "tomorrow.png",
        },
        {
          id: "tp-04",
          term_zh: "昨天",
          related_terms: [
            {
              term_target: "昨日",
              pronunciation: ["kinou"],
              specific_note: "",
              segments: [
                { text: "昨日", furigana: "きのう", meaning: "昨天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "昨日の朝。",
              translation: "昨天早上。",
              segments: [
                { text: "昨日", furigana: "きのう", meaning: "昨天", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "朝", furigana: "あさ", meaning: "早上", tail: "。" },
              ],
            },
            {
              sentence: "昨日はどこにいましたか。",
              translation: "你昨天在哪裡？",
              segments: [
                { text: "昨日", furigana: "きのう", meaning: "昨天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "いました", meaning: "在(過去式)", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "昨日は雨でした。",
              translation: "昨天是雨天。",
              segments: [
                { text: "昨日", furigana: "きのう", meaning: "昨天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
                { text: "でした", meaning: "是(過去式)", tail: "。" },
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
              pronunciation: ["koko"],
              specific_note: "",
              segments: [{ text: "ここ", meaning: "這裡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "ここに来てください。",
              translation: "請來這裡。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "に", meaning: "來", tail: " " },
                { text: "来て", furigana: "きて", meaning: "來", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "私はここにいます。",
              translation: "我在這裡。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "います", meaning: "在", tail: "。" },
              ],
            },
            {
              sentence: "この近くですか。",
              translation: "這附近嗎 (離這裡近嗎)？",
              segments: [
                { text: "この", meaning: "這(這裡的)", tail: " " },
                { text: "近く", furigana: "ちかく", meaning: "附近", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "近處。",
          image_file: "here.png",
        },
        {
          id: "tp-06",
          term_zh: "那裡",
          related_terms: [
            {
              term_target: "そこ",
              pronunciation: ["soko"],
              specific_note: "聽話者附近",
              segments: [{ text: "そこ", meaning: "那裡(中)", tail: "" }],
            },
            {
              term_target: "あそこ",
              pronunciation: ["asoko"],
              specific_note: "遠處",
              segments: [{ text: "あそこ", meaning: "那裡(遠)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あそこに行きます。",
              translation: "去那裡 (遠處)。",
              segments: [
                { text: "あそこ", meaning: "那裡", tail: "" },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "そこを見てください。",
              translation: "請看那裡 (你那邊)。",
              segments: [
                { text: "そこ", meaning: "那裡", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "見て", furigana: "みて", meaning: "看", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "誰があそこにいますか。",
              translation: "誰在那裡？",
              segments: [
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あそこ", meaning: "那裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "います", meaning: "在", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "離聽者近用「そこ」，離雙方都遠用「あそこ」。",
          image_file: "there.png",
        },
        {
          id: "tp-07",
          term_zh: "天（日期）",
          related_terms: [
            {
              term_target: "日",
              pronunciation: ["hi"],
              specific_note: "日子/天",
              segments: [
                { text: "日", furigana: "ひ", meaning: "日子", tail: "" },
              ],
            },
            {
              term_target: "一日",
              pronunciation: ["ichinichi"],
              specific_note: "一天",
              segments: [
                {
                  text: "一日",
                  furigana: "いちにち",
                  meaning: "一日",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "ある日。",
              translation: "有一天。",
              segments: [
                { text: "ある", meaning: "某", tail: " " },
                { text: "日", furigana: "ひ", meaning: "日子", tail: "。" },
              ],
            },
            {
              sentence: "よい一日を。",
              translation: "祝你有美好的一天。",
              segments: [
                { text: "よい", meaning: "好的", tail: " " },
                {
                  text: "一日",
                  furigana: "いちにち",
                  meaning: "一天",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: "。" },
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
          usage_note: "「日」有時唸 hi，有時唸 nichi/bi，依組合而定。",
          image_file: "day.png",
        },
        {
          id: "tp-08",
          term_zh: "年",
          related_terms: [
            {
              term_target: "年",
              pronunciation: ["toshi"],
              specific_note: "年份/年紀",
              segments: [
                { text: "年", furigana: "とし", meaning: "年", tail: "" },
              ],
            },
            {
              term_target: "一年",
              pronunciation: ["ichinen"],
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
              translation: "今年。",
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
              sentence: "あけましておめでとう。",
              translation: "新年快樂。",
              segments: [
                { text: "あけまして", meaning: "開年", tail: " " },
                { text: "おめでとう", meaning: "恭喜", tail: "。" },
              ],
            },
            {
              sentence: "去年。",
              translation: "去年。",
              segments: [
                {
                  text: "去年",
                  furigana: "きょねん",
                  meaning: "去年",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "單位用「年 (nen)」，名詞用「年 (toshi)」。",
          image_file: "year.png",
        },
        {
          id: "tp-09",
          term_zh: "月",
          related_terms: [
            {
              term_target: "月",
              pronunciation: ["tsuki"],
              specific_note: "月亮/月份",
              segments: [
                { text: "月", furigana: "つき", meaning: "月", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今月。",
              translation: "這個月。",
              segments: [
                {
                  text: "今月",
                  furigana: "こんげつ",
                  meaning: "今月",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "来月。",
              translation: "下個月。",
              segments: [
                {
                  text: "来月",
                  furigana: "らいげつ",
                  meaning: "來月/下個月",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "一年は１２ヶ月です。",
              translation: "一年有12個月。",
              segments: [
                {
                  text: "一年",
                  furigana: "いちねん",
                  meaning: "一年",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "１２ヶ月",
                  furigana: "じゅうにかげつ",
                  meaning: "十二個月",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "月份。",
          image_file: "month.png",
        },
        {
          id: "tp-10",
          term_zh: "週",
          related_terms: [
            {
              term_target: "週",
              pronunciation: ["shuu"],
              specific_note: "",
              segments: [
                { text: "週", furigana: "しゅう", meaning: "週", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "来週。",
              translation: "下週。",
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
              sentence: "週に一回。",
              translation: "一週一次。",
              segments: [
                { text: "週", furigana: "しゅう", meaning: "週", tail: "" },
                { text: "に", meaning: "在(頻率)", tail: " " },
                {
                  text: "一回",
                  furigana: "いっかい",
                  meaning: "一次",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "よい一週間を。",
              translation: "祝你有美好的一週。",
              segments: [
                { text: "よい", meaning: "好的", tail: " " },
                {
                  text: "一週間",
                  furigana: "いっしゅうかん",
                  meaning: "一週",
                  tail: "",
                },
                { text: "を", meaning: "(省略句尾)", tail: "。" },
              ],
            },
          ],
          usage_note: "星期。",
          image_file: "week.png",
        },
        {
          id: "tp-11",
          term_zh: "早上",
          related_terms: [
            {
              term_target: "朝",
              pronunciation: ["asa"],
              specific_note: "",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "朝に。",
              translation: "在早上。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: "" },
                { text: "に", meaning: "在(時間)", tail: "。" },
              ],
            },
            {
              sentence: "おはよう。",
              translation: "早安。",
              segments: [{ text: "おはよう", meaning: "早安", tail: "。" }],
            },
            {
              sentence: "朝走ります。",
              translation: "我早上跑步。",
              segments: [
                { text: "朝", furigana: "あさ", meaning: "早上", tail: " " },
                {
                  text: "走ります",
                  furigana: "はしります",
                  meaning: "跑",
                  tail: "。",
                },
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
              pronunciation: ["gogo"],
              specific_note: "",
              segments: [
                { text: "午後", furigana: "ごご", meaning: "下午", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "こんにちは。",
              translation: "午安 (白天問候)。",
              segments: [
                { text: "こんにちは", meaning: "你好/午安", tail: "。" },
              ],
            },
            {
              sentence: "今日の午後、会いましょう。",
              translation: "今天下午見。",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "午後", furigana: "ごご", meaning: "下午", tail: "、" },
                {
                  text: "会いましょう",
                  furigana: "あいましょう",
                  meaning: "見面吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "日曜日の午後。",
              translation: "星期天下午。",
              segments: [
                {
                  text: "日曜日",
                  furigana: "にちようび",
                  meaning: "星期天",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                { text: "午後", furigana: "ごご", meaning: "下午", tail: "。" },
              ],
            },
          ],
          usage_note: "午後。",
          image_file: "afternoon.png",
        },
        {
          id: "tp-13",
          term_zh: "晚上",
          related_terms: [
            {
              term_target: "夜",
              pronunciation: ["yoru"],
              specific_note: "",
              segments: [
                { text: "夜", furigana: "よる", meaning: "晚上", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "こんばんは。",
              translation: "晚安 (晚上問候)。",
              segments: [{ text: "こんばんは", meaning: "晚上好", tail: "。" }],
            },
            {
              sentence: "おやすみなさい。",
              translation: "晚安 (睡前)。",
              segments: [
                { text: "おやすみなさい", meaning: "晚安/休息吧", tail: "。" },
              ],
            },
            {
              sentence: "夜はテレビを見ます。",
              translation: "我晚上看電視。",
              segments: [
                { text: "夜", furigana: "よる", meaning: "晚上", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "テレビ", meaning: "電視", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見ます",
                  furigana: "みます",
                  meaning: "看",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "傍晚到睡前。",
          image_file: "evening.png",
        },
        {
          id: "tp-14",
          term_zh: "中午",
          related_terms: [
            {
              term_target: "昼",
              pronunciation: ["hiru"],
              specific_note: "白天/中午",
              segments: [
                { text: "昼", furigana: "ひる", meaning: "中午", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "お昼に。",
              translation: "在中午。",
              segments: [
                { text: "お昼", furigana: "おひる", meaning: "中午", tail: "" },
                { text: "に", meaning: "在(時間)", tail: "。" },
              ],
            },
            {
              sentence: "お昼ご飯を食べます。",
              translation: "我們吃午餐 (中午飯)。",
              segments: [
                {
                  text: "お昼ご飯",
                  furigana: "おひるごはん",
                  meaning: "午餐",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "食べます",
                  furigana: "たべます",
                  meaning: "吃",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "正午。",
              translation: "正午 (12點)。",
              segments: [
                {
                  text: "正午",
                  furigana: "しょうご",
                  meaning: "正午",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "白天或午餐時段。",
          image_file: "noon.png",
        },
        {
          id: "tp-15",
          term_zh: "前面",
          related_terms: [
            {
              term_target: "前",
              pronunciation: ["mae"],
              specific_note: "",
              segments: [
                { text: "前", furigana: "まえ", meaning: "前", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "あなたの前。",
              translation: "在你前面。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "前", furigana: "まえ", meaning: "前", tail: "。" },
              ],
            },
            {
              sentence: "駅の前で待っています。",
              translation: "在車站前等你。",
              segments: [
                { text: "駅", furigana: "えき", meaning: "車站", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "前", furigana: "まえ", meaning: "前", tail: "" },
                { text: "で", meaning: "在(地點)", tail: " " },
                { text: "待って", furigana: "まって", meaning: "等", tail: "" },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "私の前に立たないで。",
              translation: "不要站在我前面。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "前", furigana: "まえ", meaning: "前", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                {
                  text: "立たないで",
                  furigana: "たたないで",
                  meaning: "不要站",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "前方。",
          image_file: "front.png",
        },
        {
          id: "tp-16",
          term_zh: "後面",
          related_terms: [
            {
              term_target: "後ろ",
              pronunciation: ["ushiro"],
              specific_note: "",
              segments: [
                { text: "後ろ", furigana: "うしろ", meaning: "後面", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ドアの後ろ。",
              translation: "門後。",
              segments: [
                { text: "ドア", meaning: "門", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "後ろ",
                  furigana: "うしろ",
                  meaning: "後面",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "後ろを見て。",
              translation: "看後面。",
              segments: [
                { text: "後ろ", furigana: "うしろ", meaning: "後面", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "見て", furigana: "みて", meaning: "看", tail: "。" },
              ],
            },
            {
              sentence: "黄色い線の後ろに下がってください。",
              translation: "請退到黃線後面。",
              segments: [
                {
                  text: "黄色い",
                  furigana: "きいろい",
                  meaning: "黃色的",
                  tail: " ",
                },
                { text: "線", furigana: "せん", meaning: "線", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "後ろ", furigana: "うしろ", meaning: "後面", tail: "" },
                { text: "に", meaning: "往", tail: " " },
                {
                  text: "下がって",
                  furigana: "さがって",
                  meaning: "退後",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
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
              pronunciation: ["hidari"],
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
                { text: "左", furigana: "ひだり", meaning: "左", tail: "" },
                { text: "に", meaning: "往(方向)", tail: " " },
                {
                  text: "曲がります",
                  furigana: "まがります",
                  meaning: "轉彎",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "あなたの左。",
              translation: "在你的左邊。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "左", furigana: "ひだり", meaning: "左邊", tail: "。" },
              ],
            },
            {
              sentence: "左を見てください。",
              translation: "請向左看。",
              segments: [
                { text: "左", furigana: "ひだり", meaning: "左", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "見て", furigana: "みて", meaning: "看", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note: "方位。",
          image_file: "left.png",
        },
        {
          id: "tp-18",
          term_zh: "右邊",
          related_terms: [
            {
              term_target: "右",
              pronunciation: ["migi"],
              specific_note: "",
              segments: [
                { text: "右", furigana: "みぎ", meaning: "右", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "右に曲がります。",
              translation: "右轉。",
              segments: [
                { text: "右", furigana: "みぎ", meaning: "右", tail: "" },
                { text: "に", meaning: "往(方向)", tail: " " },
                {
                  text: "曲がります",
                  furigana: "まがります",
                  meaning: "轉彎",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "右側です。",
              translation: "在右側。",
              segments: [
                { text: "右", furigana: "みぎ", meaning: "右", tail: "" },
                { text: "側", furigana: "がわ", meaning: "側/邊", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "右手。",
              translation: "右手。",
              segments: [
                { text: "右", furigana: "みぎ", meaning: "右", tail: "" },
                { text: "手", furigana: "て", meaning: "手", tail: "。" },
              ],
            },
          ],
          usage_note: "方位。",
          image_file: "right.png",
        },
        {
          id: "tp-19",
          term_zh: "旁邊",
          related_terms: [
            {
              term_target: "隣",
              pronunciation: ["tonari"],
              specific_note: "緊鄰",
              segments: [
                {
                  text: "隣",
                  furigana: "となり",
                  meaning: "隔壁/旁邊",
                  tail: "",
                },
              ],
            },
            {
              term_target: "横",
              pronunciation: ["yoko"],
              specific_note: "側邊",
              segments: [
                { text: "横", furigana: "よこ", meaning: "旁邊", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私の隣に座ってください。",
              translation: "請坐我隔壁。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "隣", furigana: "となり", meaning: "隔壁", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                {
                  text: "座って",
                  furigana: "すわって",
                  meaning: "坐",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "銀行の隣。",
              translation: "在銀行隔壁。",
              segments: [
                {
                  text: "銀行",
                  furigana: "ぎんこう",
                  meaning: "銀行",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                { text: "隣", furigana: "となり", meaning: "隔壁", tail: "。" },
              ],
            },
            {
              sentence: "隣の人は誰ですか。",
              translation: "隔壁的人是誰？",
              segments: [
                {
                  text: "隣",
                  furigana: "となり",
                  meaning: "隔壁/旁邊",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                { text: "人", furigana: "ひと", meaning: "人", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "誰", furigana: "だれ", meaning: "誰", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「隣 (tonari)」指同類事物緊鄰，「横 (yoko)」指水平方向的旁邊。",
          image_file: "beside.png",
        },
        {
          id: "tp-20",
          term_zh: "對面",
          related_terms: [
            {
              term_target: "向かい",
              pronunciation: ["mukai"],
              specific_note: "",
              segments: [
                {
                  text: "向かい",
                  furigana: "むかい",
                  meaning: "對面",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "銀行の向かい。",
              translation: "銀行對面。",
              segments: [
                {
                  text: "銀行",
                  furigana: "ぎんこう",
                  meaning: "銀行",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "向かい",
                  furigana: "むかい",
                  meaning: "對面",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "彼は私の向かいに座っています。",
              translation: "他坐在我對面。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "向かい",
                  furigana: "むかい",
                  meaning: "對面",
                  tail: "",
                },
                { text: "に", meaning: "在", tail: " " },
                {
                  text: "座って",
                  furigana: "すわって",
                  meaning: "坐",
                  tail: "",
                },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "店の向かい。",
              translation: "店的對面。",
              segments: [
                { text: "店", furigana: "みせ", meaning: "店", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "向かい",
                  furigana: "むかい",
                  meaning: "對面",
                  tail: "。",
                },
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
              pronunciation: ["haru"],
              specific_note: "",
              segments: [
                { text: "春", furigana: "はる", meaning: "春天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "もうすぐ春です。",
              translation: "春天快到了。",
              segments: [
                { text: "もうすぐ", meaning: "快要", tail: " " },
                { text: "春", furigana: "はる", meaning: "春天", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "私は春が好きです。",
              translation: "我喜歡春天。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "春", furigana: "はる", meaning: "春天", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "春に花が咲きます。",
              translation: "花朵在春天盛開。",
              segments: [
                { text: "春", furigana: "はる", meaning: "春天", tail: "" },
                { text: "に", meaning: "在(時間)", tail: " " },
                { text: "花", furigana: "はな", meaning: "花", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "咲きます",
                  furigana: "さきます",
                  meaning: "開",
                  tail: "。",
                },
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
              pronunciation: ["natsu"],
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
                {
                  text: "暑い",
                  furigana: "あつい",
                  meaning: "熱的",
                  tail: " ",
                },
                { text: "夏", furigana: "なつ", meaning: "夏天", tail: "。" },
              ],
            },
            {
              sentence: "夏に泳ぎに行きます。",
              translation: "我夏天去游泳。",
              segments: [
                { text: "夏", furigana: "なつ", meaning: "夏天", tail: "" },
                { text: "に", meaning: "在(時間)", tail: " " },
                { text: "泳ぎ", furigana: "およぎ", meaning: "游泳", tail: "" },
                { text: "に", meaning: "去(目的)", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "夏休み。",
              translation: "暑假。",
              segments: [
                {
                  text: "夏休み",
                  furigana: "なつやすみ",
                  meaning: "暑假",
                  tail: "。",
                },
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
              pronunciation: ["aki"],
              specific_note: "",
              segments: [
                { text: "秋", furigana: "あき", meaning: "秋天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "涼しい秋。",
              translation: "涼爽的秋天。",
              segments: [
                {
                  text: "涼しい",
                  furigana: "すずしい",
                  meaning: "涼爽的",
                  tail: " ",
                },
                { text: "秋", furigana: "あき", meaning: "秋天", tail: "。" },
              ],
            },
            {
              sentence: "秋の紅葉。",
              translation: "秋天的紅葉。",
              segments: [
                { text: "秋", furigana: "あき", meaning: "秋天", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "紅葉",
                  furigana: "こうよう",
                  meaning: "紅葉",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "秋になりました。",
              translation: "秋天到了 (變成了秋天)。",
              segments: [
                { text: "秋", furigana: "あき", meaning: "秋天", tail: "" },
                { text: "に", meaning: "成(結果)", tail: " " },
                { text: "なりました", meaning: "變成了", tail: "。" },
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
              pronunciation: ["fuyu"],
              specific_note: "",
              segments: [
                { text: "冬", furigana: "ふゆ", meaning: "冬天", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "寒い冬。",
              translation: "寒冷的冬天。",
              segments: [
                {
                  text: "寒い",
                  furigana: "さむい",
                  meaning: "冷的",
                  tail: " ",
                },
                { text: "冬", furigana: "ふゆ", meaning: "冬天", tail: "。" },
              ],
            },
            {
              sentence: "冬が好きですか。",
              translation: "你喜歡冬天嗎？",
              segments: [
                { text: "冬", furigana: "ふゆ", meaning: "冬天", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "冬は雪が降ります。",
              translation: "冬天下雪。",
              segments: [
                { text: "冬", furigana: "ふゆ", meaning: "冬天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "雪", furigana: "ゆき", meaning: "雪", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "降ります",
                  furigana: "ふります",
                  meaning: "下/降",
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
              term_target: "か",
              pronunciation: ["ka"],
              specific_note: "名詞之間",
              segments: [{ text: "か", meaning: "或者", tail: "" }],
            },
            {
              term_target: "それとも",
              pronunciation: ["soretomo"],
              specific_note: "句子之間",
              segments: [{ text: "それとも", meaning: "還是...", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "コーヒーか紅茶。",
              translation: "咖啡還是紅茶？(二選一)",
              segments: [
                { text: "コーヒー", meaning: "咖啡", tail: "" },
                { text: "か", meaning: "或者", tail: " " },
                {
                  text: "紅茶",
                  furigana: "こうちゃ",
                  meaning: "紅茶",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "今日か明日、行きます。",
              translation: "今天或明天去。",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "か", meaning: "或者", tail: " " },
                {
                  text: "明日",
                  furigana: "あした",
                  meaning: "明天",
                  tail: "、",
                },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "ご飯にしますか、それとも麺にしますか。",
              translation: "要吃飯呢，還是要吃麵？",
              segments: [
                { text: "ご飯", furigana: "ごはん", meaning: "飯", tail: "" },
                { text: "に", meaning: "選擇", tail: " " },
                { text: "します", meaning: "做", tail: "" },
                { text: "か", meaning: "嗎", tail: "、" },
                { text: "それとも", meaning: "還是(連接詞)", tail: " " },
                { text: "麺", furigana: "めん", meaning: "麵", tail: "" },
                { text: "に", meaning: "選擇", tail: " " },
                { text: "します", meaning: "做", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "名詞A + か + 名詞B。問句連接用「それとも」。",
          image_file: "or.png",
        },
        {
          id: "conj-02",
          term_zh: "但是",
          related_terms: [
            {
              term_target: "でも",
              pronunciation: ["demo"],
              specific_note: "口語",
              segments: [{ text: "でも", meaning: "但是", tail: "" }],
            },
            {
              term_target: "しかし",
              pronunciation: ["shikashi"],
              specific_note: "正式",
              segments: [{ text: "しかし", meaning: "但是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "好きですが、高いです。",
              translation: "我很喜歡，但是很貴。(接在句中)",
              segments: [
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "" },
                { text: "が", meaning: "但是(接續助詞)", tail: "、" },
                { text: "高い", furigana: "たかい", meaning: "貴", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "行きたいです。でも、時間がない。",
              translation: "我想去。但是，沒有時間。",
              segments: [
                {
                  text: "行きたい",
                  furigana: "いきたい",
                  meaning: "想去",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
                { text: "でも", meaning: "但是", tail: "、" },
                { text: "時間", furigana: "じかん", meaning: "時間", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "ない", meaning: "沒有", tail: "。" },
              ],
            },
            {
              sentence: "小さいですが、強いです。",
              translation: "雖然小，但是很強壯。",
              segments: [
                {
                  text: "小さい",
                  furigana: "ちいさい",
                  meaning: "小",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "" },
                { text: "が", meaning: "但是(接續助詞)", tail: "、" },
                { text: "強い", furigana: "つよい", meaning: "強壯", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "句首用「でも」，句中連接用「～が (ga)」。",
          image_file: "but.png",
        },
        {
          id: "conj-03",
          term_zh: "所以",
          related_terms: [
            {
              term_target: "だから",
              pronunciation: ["dakara"],
              specific_note: "因此",
              segments: [{ text: "だから", meaning: "所以", tail: "" }],
            },
            {
              term_target: "ですから",
              pronunciation: ["desukara"],
              specific_note: "禮貌形",
              segments: [{ text: "ですから", meaning: "所以", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "お腹が空いた。だから食べました。",
              translation: "肚子餓了，所以我吃了。",
              segments: [
                { text: "お腹", furigana: "おなか", meaning: "肚子", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: "" },
                {
                  text: "空いた",
                  furigana: "すいた",
                  meaning: "餓了",
                  tail: "。",
                },
                { text: "だから", meaning: "所以", tail: " " },
                {
                  text: "食べました",
                  furigana: "たべました",
                  meaning: "吃了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "雨です。ですから傘を持って行きます。",
              translation: "下雨了，所以我帶傘去。",
              segments: [
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
                { text: "ですから", meaning: "所以", tail: " " },
                { text: "傘", furigana: "かさ", meaning: "傘", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "持って", furigana: "もって", meaning: "帶", tail: "" },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "疲れたので、寝ます。",
              translation: "因為累了，所以去睡覺 (連接句)。",
              segments: [
                {
                  text: "疲れた",
                  furigana: "つかれた",
                  meaning: "累了",
                  tail: "",
                },
                { text: "ので", meaning: "因為/所以", tail: "、" },
                {
                  text: "寝ます",
                  furigana: "ねます",
                  meaning: "睡覺",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "句首用「だから/ですから」，句中連接原因用「～ので (node)」或「～から (kara)」。",
          image_file: "so.png",
        },
        {
          id: "conj-04",
          term_zh: "以及／和",
          related_terms: [
            {
              term_target: "と",
              pronunciation: ["to"],
              specific_note: "名詞之間",
              segments: [{ text: "と", meaning: "和", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "あなたと私。",
              translation: "你和我。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "と", meaning: "和", tail: " " },
                { text: "私", furigana: "わたし", meaning: "我", tail: "。" },
              ],
            },
            {
              sentence: "パンと牛乳。",
              translation: "麵包和牛奶。",
              segments: [
                { text: "パン", meaning: "麵包", tail: "" },
                { text: "と", meaning: "和", tail: " " },
                {
                  text: "牛乳",
                  furigana: "ぎゅうにゅう",
                  meaning: "牛奶",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "彼女はきれいで優しいです。",
              translation: "她既漂亮又溫柔 (形容詞連接)。",
              segments: [
                { text: "彼女", furigana: "かのじょ", meaning: "她", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "きれい", meaning: "漂亮", tail: "" },
                { text: "で", meaning: "而且(Na形連接)", tail: " " },
                {
                  text: "優しい",
                  furigana: "やさしい",
                  meaning: "溫柔",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "名詞用「と」連接。形容詞用「て/で」形連接。",
          image_file: "and.png",
        },
        {
          id: "conj-05",
          term_zh: "因為",
          related_terms: [
            {
              term_target: "から",
              pronunciation: ["kara"],
              specific_note: "主觀原因",
              segments: [{ text: "から", meaning: "因為", tail: "" }],
            },
            {
              term_target: "ので",
              pronunciation: ["node"],
              specific_note: "客觀原因",
              segments: [{ text: "ので", meaning: "因為", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "お腹が空いたから、食べます。",
              translation: "因為肚子餓了，所以吃。",
              segments: [
                { text: "お腹", furigana: "おなか", meaning: "肚子", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: "" },
                {
                  text: "空いた",
                  furigana: "すいた",
                  meaning: "餓了",
                  tail: "",
                },
                { text: "から", meaning: "因為", tail: "、" },
                {
                  text: "食べます",
                  furigana: "たべます",
                  meaning: "吃",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "忙しいので、行けません。",
              translation: "因為很忙，所以不能去 (較客觀/禮貌)。",
              segments: [
                {
                  text: "忙しい",
                  furigana: "いそがしい",
                  meaning: "忙碌",
                  tail: "",
                },
                { text: "ので", meaning: "因為", tail: "、" },
                {
                  text: "行けません",
                  furigana: "いけません",
                  meaning: "不能去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "なぜなら、好きだからです。",
              translation: "因為，我喜歡啊 (倒裝解釋)。",
              segments: [
                { text: "なぜなら", meaning: "為什麼呢(因為)", tail: "、" },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "だから", meaning: "因為是...", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "通常放在原因句的最後面。「から」比較主觀，「ので」比較客觀禮貌。",
          image_file: "because.png",
        },
      ],
    },
    {
      id: "prepositions",
      name: "助詞",
      items: [
        {
          id: "prep-01",
          term_zh: "和...一起",
          related_terms: [
            {
              term_target: "と",
              pronunciation: ["to"],
              specific_note: "和/跟",
              segments: [{ text: "と", meaning: "和", tail: "" }],
            },
            {
              term_target: "一緒に",
              pronunciation: ["isshoni"],
              specific_note: "一起",
              segments: [
                {
                  text: "一緒に",
                  furigana: "いっしょに",
                  meaning: "一起",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "友達と行きます。",
              translation: "跟朋友去。",
              segments: [
                {
                  text: "友達",
                  furigana: "ともだち",
                  meaning: "朋友",
                  tail: "",
                },
                { text: "と", meaning: "和", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "家族と一緒に住んでいます。",
              translation: "我和家人住在一起。",
              segments: [
                { text: "家族", furigana: "かぞく", meaning: "家人", tail: "" },
                { text: "と", meaning: "和", tail: " " },
                {
                  text: "一緒",
                  furigana: "いっしょ",
                  meaning: "一起",
                  tail: "",
                },
                { text: "に", meaning: "地", tail: " " },
                { text: "住んで", furigana: "すんで", meaning: "住", tail: "" },
                { text: "います", meaning: "狀態", tail: "。" },
              ],
            },
            {
              sentence: "コーヒーとケーキ。",
              translation: "咖啡和蛋糕。",
              segments: [
                { text: "コーヒー", meaning: "咖啡", tail: "" },
                { text: "と", meaning: "和", tail: " " },
                { text: "ケーキ", meaning: "蛋糕", tail: "。" },
              ],
            },
          ],
          usage_note: "名詞 A + と + 名詞 B。",
          image_file: "with.png",
        },
        {
          id: "prep-02",
          term_zh: "從...",
          related_terms: [
            {
              term_target: "から",
              pronunciation: ["kara"],
              specific_note: "起點/來源",
              segments: [{ text: "から", meaning: "從...", tail: "" }],
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
                  tail: "",
                },
                { text: "から", meaning: "從/來自", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "９時から５時まで。",
              translation: "從9點到5點。",
              segments: [
                { text: "９時", furigana: "くじ", meaning: "九點", tail: "" },
                { text: "から", meaning: "從", tail: " " },
                { text: "５時", furigana: "ごじ", meaning: "五點", tail: "" },
                { text: "まで", meaning: "直到", tail: "。" },
              ],
            },
            {
              sentence: "ここから遠いです。",
              translation: "離(從)這裡很遠。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "から", meaning: "從", tail: " " },
                { text: "遠い", furigana: "とおい", meaning: "遠", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "時間或空間的起點。",
          image_file: "from.png",
        },
        {
          id: "prep-03",
          term_zh: "為了... (給...)",
          related_terms: [
            {
              term_target: "ために",
              pronunciation: ["tameni"],
              specific_note: "為了/目的",
              segments: [{ text: "ために", meaning: "為了", tail: "" }],
            },
            {
              term_target: "に",
              pronunciation: ["ni"],
              specific_note: "給(對象)",
              segments: [{ text: "に", meaning: "給/對", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "家族のために働きます。",
              translation: "為了家人工作。",
              segments: [
                { text: "家族", furigana: "かぞく", meaning: "家人", tail: "" },
                { text: "の", meaning: "的", tail: "" },
                { text: "ため", meaning: "緣故", tail: "" },
                { text: "に", meaning: "為了", tail: " " },
                {
                  text: "働きます",
                  furigana: "はたらきます",
                  meaning: "工作",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "これはあなたにです。",
              translation: "這是給你的。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "あなた", meaning: "你", tail: "" },
                { text: "に", meaning: "給(對象)", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "日本語の勉強のために。",
              translation: "為了學日文。",
              segments: [
                {
                  text: "日本語",
                  furigana: "にほんご",
                  meaning: "日文",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "學習",
                  tail: "",
                },
                { text: "の", meaning: "的", tail: "" },
                { text: "ため", meaning: "緣故", tail: "" },
                { text: "に", meaning: "為了", tail: "。" },
              ],
            },
          ],
          usage_note: "「Aのために」表示為了A的利益或目的。",
          image_file: "for.png",
        },
        {
          id: "prep-04",
          term_zh: "...的",
          related_terms: [
            {
              term_target: "の",
              pronunciation: ["no"],
              specific_note: "所有格",
              segments: [{ text: "の", meaning: "的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "私の本。",
              translation: "我的書。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "本", furigana: "ほん", meaning: "書", tail: "。" },
              ],
            },
            {
              sentence: "日本の文化。",
              translation: "日本的文化。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "文化",
                  furigana: "ぶんか",
                  meaning: "文化",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "机の上。",
              translation: "桌子的上面。",
              segments: [
                { text: "机", furigana: "つくえ", meaning: "桌子", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "上", furigana: "うえ", meaning: "上面", tail: "。" },
              ],
            },
          ],
          usage_note: "連接兩個名詞，表示所屬關係。",
          image_file: "of.png",
        },
        {
          id: "prep-05",
          term_zh: "在... (場所)",
          related_terms: [
            {
              term_target: "で",
              pronunciation: ["de"],
              specific_note: "動作發生的地點",
              segments: [{ text: "で", meaning: "在", tail: "" }],
            },
            {
              term_target: "に",
              pronunciation: ["ni"],
              specific_note: "存在的地點",
              segments: [{ text: "に", meaning: "在", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "レストランで食べます。",
              translation: "在餐廳吃飯 (動作地點)。",
              segments: [
                { text: "レストラン", meaning: "餐廳", tail: "" },
                { text: "で", meaning: "在", tail: " " },
                {
                  text: "食べます",
                  furigana: "たべます",
                  meaning: "吃",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "家にいます。",
              translation: "在家裡 (存在地點)。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "います", meaning: "在/有", tail: "。" },
              ],
            },
            {
              sentence: "３時に会いましょう。",
              translation: "3點見 (時間點也用「に」)。",
              segments: [
                { text: "３時", furigana: "さんじ", meaning: "三點", tail: "" },
                { text: "に", meaning: "在(時間)", tail: " " },
                {
                  text: "会いましょう",
                  furigana: "あいましょう",
                  meaning: "見面吧",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "做動作的地方用「で」，單純存在的地方用「に」。",
          image_file: "at_in.png",
        },
        {
          id: "prep-06",
          term_zh: "往... (方向/對象)",
          related_terms: [
            {
              term_target: "へ",
              pronunciation: ["e"],
              specific_note: "方向 (唸作 e)",
              segments: [{ text: "へ", meaning: "往", tail: "" }],
            },
            {
              term_target: "に",
              pronunciation: ["ni"],
              specific_note: "目的地/對象",
              segments: [{ text: "に", meaning: "給/去", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "日本へ行きます。",
              translation: "去日本 (移動方向)。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "へ", meaning: "往", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "あなたにあげます。",
              translation: "給你 (接受對象)。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "に", meaning: "給", tail: " " },
                { text: "あげます", meaning: "給", tail: "。" },
              ],
            },
            {
              sentence: "学校に行きます。",
              translation: "去學校 (目的地)。",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "",
                },
                { text: "に", meaning: "到", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "表示移動方向時，「へ (e)」和「に (ni)」常通用。",
          image_file: "to.png",
        },
      ],
    },
    {
      id: "numbers",
      name: "數字",
      items: [
        {
          id: "num-0",
          term_zh: "0",
          related_terms: [
            {
              term_target: "ゼロ",
              pronunciation: ["zero"],
              specific_note: "外來語",
              segments: [{ text: "ゼロ", meaning: "零", tail: "" }],
            },
            {
              term_target: "零",
              pronunciation: ["rei"],
              specific_note: "漢字音",
              segments: [
                { text: "零", furigana: "れい", meaning: "零", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "ゼロから始めます。",
              translation: "從零開始。",
              segments: [
                { text: "ゼロ", meaning: "零", tail: "" },
                { text: "から", meaning: "從", tail: " " },
                {
                  text: "始めます",
                  furigana: "はじめます",
                  meaning: "開始",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "気温は零度です。",
              translation: "氣溫是零度。",
              segments: [
                { text: "気温", furigana: "きおん", meaning: "氣溫", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "零度", furigana: "れいど", meaning: "零度", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "可能性はゼロです。",
              translation: "可能性為零。",
              segments: [
                {
                  text: "可能性",
                  furigana: "かのうせい",
                  meaning: "可能性",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "ゼロ", meaning: "零", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "口語常用「ゼロ」，氣溫或降雨機率用「零 (rei)」。",
          image_file: "zero.png",
        },
        {
          id: "num-1",
          term_zh: "1",
          related_terms: [
            {
              term_target: "一",
              pronunciation: ["ichi"],
              specific_note: "",
              segments: [
                { text: "一", furigana: "いち", meaning: "一", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "一番好きな。",
              translation: "最(第一)喜歡的。",
              segments: [
                { text: "一", furigana: "いち", meaning: "一", tail: "" },
                { text: "番", furigana: "ばん", meaning: "號/番", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "な", meaning: "的", tail: "." },
              ],
            },
            {
              sentence: "一つください。",
              translation: "請給我一個。",
              segments: [
                { text: "一つ", furigana: "ひとつ", meaning: "一個", tail: "" },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "一分待ってください。",
              translation: "請等一分鐘。",
              segments: [
                { text: "一", furigana: "いっ", meaning: "一", tail: "" },
                { text: "分", furigana: "ぷん", meaning: "分", tail: "" },
                { text: "待って", furigana: "まって", meaning: "等", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note:
            "單獨唸 ichi。量詞變化多：一個 (hitotsu), 一分鐘 (ippun)。",
          image_file: "one.png",
        },
        {
          id: "num-2",
          term_zh: "2",
          related_terms: [
            {
              term_target: "二",
              pronunciation: ["ni"],
              specific_note: "",
              segments: [
                { text: "二", furigana: "に", meaning: "二", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "二つあります。",
              translation: "有兩個。",
              segments: [
                { text: "二つ", furigana: "ふたつ", meaning: "兩個", tail: "" },
                { text: "あります", meaning: "有", tail: "。" },
              ],
            },
            {
              sentence: "二時です。",
              translation: "兩點了。",
              segments: [
                { text: "二", furigana: "に", meaning: "二", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "二人で来ました。",
              translation: "兩個人來的。",
              segments: [
                { text: "二人", furigana: "ふたり", meaning: "兩人", tail: "" },
                { text: "で", meaning: "以(人數)", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "單獨唸 ni。兩個 (futatsu), 兩人 (futari)。",
          image_file: "two.png",
        },
        {
          id: "num-3",
          term_zh: "3",
          related_terms: [
            {
              term_target: "三",
              pronunciation: ["san"],
              specific_note: "",
              segments: [
                { text: "三", furigana: "さん", meaning: "三", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "三つください。",
              translation: "請給我三個。",
              segments: [
                { text: "三つ", furigana: "みっつ", meaning: "三個", tail: "" },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "三月。",
              translation: "三月。",
              segments: [
                { text: "三", furigana: "さん", meaning: "三", tail: "" },
                { text: "月", furigana: "がつ", meaning: "月", tail: "。" },
              ],
            },
            {
              sentence: "三番目。",
              translation: "第三個 (順序)。",
              segments: [
                { text: "三", furigana: "さん", meaning: "三", tail: "" },
                { text: "番", furigana: "ばん", meaning: "號", tail: "" },
                { text: "目", furigana: "め", meaning: "第...", tail: "。" },
              ],
            },
          ],
          usage_note: "單獨唸 san。三個 (mittsu)。",
          image_file: "three.png",
        },
        {
          id: "num-4",
          term_zh: "4",
          related_terms: [
            {
              term_target: "四",
              pronunciation: ["yon / shi"],
              specific_note: "",
              segments: [
                { text: "四", furigana: "よん", meaning: "四", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "四つのお願い。",
              translation: "四個願望(請求)。",
              segments: [
                { text: "四つ", furigana: "よっつ", meaning: "四個", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "お願い",
                  furigana: "おねがい",
                  meaning: "請求",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "四時です。",
              translation: "四點了 (注意發音)。",
              segments: [
                { text: "四", furigana: "よ", meaning: "四", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "四月。",
              translation: "四月 (注意發音)。",
              segments: [
                { text: "四", furigana: "し", meaning: "四", tail: "" },
                { text: "月", furigana: "がつ", meaning: "月", tail: "。" },
              ],
            },
          ],
          usage_note:
            "唸法最多變。一般唸「yon」。時間唸「yo-ji」，月份唸「shi-gatsu」。",
          image_file: "four.png",
        },
        {
          id: "num-5",
          term_zh: "5",
          related_terms: [
            {
              term_target: "五",
              pronunciation: ["go"],
              specific_note: "",
              segments: [
                { text: "五", furigana: "ご", meaning: "五", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "五つ。",
              translation: "五個。",
              segments: [
                {
                  text: "五つ",
                  furigana: "いつつ",
                  meaning: "五個",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "五円。",
              translation: "五圓 (常象徵緣分)。",
              segments: [
                { text: "五", furigana: "ご", meaning: "五", tail: "" },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
            {
              sentence: "五分待ちます。",
              translation: "等五分鐘。",
              segments: [
                { text: "五", furigana: "ご", meaning: "五", tail: "" },
                { text: "分", furigana: "ふん", meaning: "分", tail: "" },
                {
                  text: "待ちます",
                  furigana: "まちます",
                  meaning: "等",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "單獨唸 go。五個 (itsutsu)。",
          image_file: "five.png",
        },
        {
          id: "num-6",
          term_zh: "6",
          related_terms: [
            {
              term_target: "六",
              pronunciation: ["roku"],
              specific_note: "",
              segments: [
                { text: "六", furigana: "ろく", meaning: "六", tail: "" },
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
              sentence: "六時半。",
              translation: "六點半。",
              segments: [
                { text: "六", furigana: "ろく", meaning: "六", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "" },
                { text: "半", furigana: "はん", meaning: "半", tail: "。" },
              ],
            },
            {
              sentence: "六百円。",
              translation: "六百圓。",
              segments: [
                {
                  text: "六百",
                  furigana: "ろっぴゃく",
                  meaning: "六百",
                  tail: "",
                },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
          ],
          usage_note: "單獨唸 roku。六個 (muttsu)。六百唸 roppyaku。",
          image_file: "six.png",
        },
        {
          id: "num-7",
          term_zh: "7",
          related_terms: [
            {
              term_target: "七",
              pronunciation: ["nana / shichi"],
              specific_note: "",
              segments: [
                { text: "七", furigana: "なな", meaning: "七", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "七つ。",
              translation: "七個。",
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
              sentence: "七時です。",
              translation: "七點了 (注意發音)。",
              segments: [
                { text: "七", furigana: "しち", meaning: "七", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "ラッキーセブン。",
              translation: "幸運七 (外來語)。",
              segments: [
                { text: "ラッキー", meaning: "幸運", tail: "" },
                { text: "セブン", meaning: "七", tail: "。" },
              ],
            },
          ],
          usage_note: "一般唸「nana」。時間唸「shichi-ji」。",
          image_file: "seven.png",
        },
        {
          id: "num-8",
          term_zh: "8",
          related_terms: [
            {
              term_target: "八",
              pronunciation: ["hachi"],
              specific_note: "",
              segments: [
                { text: "八", furigana: "はち", meaning: "八", tail: "" },
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
              translation: "八點。",
              segments: [
                { text: "八", furigana: "はち", meaning: "八", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "八百屋。",
              translation: "蔬菜店 (賣很多東西的店)。",
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
          usage_note: "單獨唸 hachi。八個 (yattsu)。八百唸 happyaku。",
          image_file: "eight.png",
        },
        {
          id: "num-9",
          term_zh: "9",
          related_terms: [
            {
              term_target: "九",
              pronunciation: ["kyuu / ku"],
              specific_note: "",
              segments: [
                { text: "九", furigana: "きゅう", meaning: "九", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "九つ。",
              translation: "九個。",
              segments: [
                {
                  text: "九つ",
                  furigana: "ここのつ",
                  meaning: "九個",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "九時です。",
              translation: "九點了 (注意發音)。",
              segments: [
                { text: "九", furigana: "く", meaning: "九", tail: "" },
                { text: "時", furigana: "じ", meaning: "點", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "九月。",
              translation: "九月 (注意發音)。",
              segments: [
                { text: "九", furigana: "く", meaning: "九", tail: "" },
                { text: "月", furigana: "がつ", meaning: "月", tail: "。" },
              ],
            },
          ],
          usage_note: "一般唸「kyuu」。時間與月份唸「ku」。",
          image_file: "nine.png",
        },
        {
          id: "num-10",
          term_zh: "10",
          related_terms: [
            {
              term_target: "十",
              pronunciation: ["juu"],
              specific_note: "",
              segments: [
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "十個ください。",
              translation: "請給我十個。",
              segments: [
                { text: "十", furigana: "じゅっ", meaning: "十", tail: "" },
                { text: "個", furigana: "こ", meaning: "個", tail: "" },
                { text: "ください", meaning: "請給我", tail: "。" },
              ],
            },
            {
              sentence: "十分です。",
              translation: "足夠了 / 十分鐘。",
              segments: [
                {
                  text: "十分",
                  furigana: "じゅうぶん",
                  meaning: "足夠",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "十人います。",
              translation: "有十個人。",
              segments: [
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
                { text: "人", furigana: "にん", meaning: "人", tail: "" },
                { text: "います", meaning: "有", tail: "。" },
              ],
            },
          ],
          usage_note: "單獨唸 juu。十個 (too)。",
          image_file: "ten.png",
        },
        {
          id: "num-11",
          term_zh: "11",
          related_terms: [
            {
              term_target: "十一",
              pronunciation: ["juuichi"],
              specific_note: "",
              segments: [
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
                { text: "一", furigana: "いち", meaning: "一", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "十一時。",
              translation: "11點。",
              segments: [
                {
                  text: "十一",
                  furigana: "じゅういち",
                  meaning: "十一",
                  tail: "",
                },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
            {
              sentence: "十一月。",
              translation: "11月。",
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
              sentence: "イレブン。",
              translation: "11 (外來語，常指7-11)。",
              segments: [{ text: "イレブン", meaning: "十一", tail: "。" }],
            },
          ],
          usage_note: "十(juu) + 一(ichi)。",
          image_file: "eleven.png",
        },
        {
          id: "num-12",
          term_zh: "12",
          related_terms: [
            {
              term_target: "十二",
              pronunciation: ["juuni"],
              specific_note: "",
              segments: [
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
                { text: "二", furigana: "に", meaning: "二", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "十二ヶ月。",
              translation: "12個月。",
              segments: [
                {
                  text: "十二",
                  furigana: "じゅうに",
                  meaning: "十二",
                  tail: "",
                },
                {
                  text: "ヶ月",
                  furigana: "かげつ",
                  meaning: "個月",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "昼の十二時。",
              translation: "中午12點。",
              segments: [
                { text: "昼", furigana: "ひる", meaning: "中午", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                {
                  text: "十二",
                  furigana: "じゅうに",
                  meaning: "十二",
                  tail: "",
                },
                { text: "時", furigana: "じ", meaning: "點", tail: "。" },
              ],
            },
          ],
          usage_note: "十(juu) + 二(ni)。",
          image_file: "twelve.png",
        },
        {
          id: "num-15",
          term_zh: "15",
          related_terms: [
            {
              term_target: "十五",
              pronunciation: ["juugo"],
              specific_note: "",
              segments: [
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
                { text: "五", furigana: "ご", meaning: "五", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "十五分。",
              translation: "15分鐘。",
              segments: [
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
                { text: "五", furigana: "ご", meaning: "五", tail: "" },
                { text: "分", furigana: "ふん", meaning: "分", tail: "。" },
              ],
            },
            {
              sentence: "十五歳。",
              translation: "15歲。",
              segments: [
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
                { text: "五", furigana: "ご", meaning: "五", tail: "" },
                { text: "歳", furigana: "さい", meaning: "歲", tail: "。" },
              ],
            },
          ],
          usage_note: "十(juu) + 五(go)。",
          image_file: "fifteen.png",
        },
        {
          id: "num-20",
          term_zh: "20",
          related_terms: [
            {
              term_target: "二十",
              pronunciation: ["nijuu"],
              specific_note: "",
              segments: [
                { text: "二", furigana: "に", meaning: "二", tail: "" },
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "二十日。",
              translation: "20號 (日期)。",
              segments: [
                {
                  text: "二十日",
                  furigana: "はつか",
                  meaning: "20日(特殊讀音)",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "二十歳。",
              translation: "20歲 (成年)。",
              segments: [
                {
                  text: "二十歳",
                  furigana: "はたち",
                  meaning: "20歲(特殊讀音)",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "二十分。",
              translation: "20分鐘。",
              segments: [
                { text: "二", furigana: "に", meaning: "二", tail: "" },
                { text: "十", furigana: "じゅっ", meaning: "十", tail: "" },
                { text: "分", furigana: "ぷん", meaning: "分", tail: "。" },
              ],
            },
          ],
          usage_note:
            "一般唸「nijuu」。但20歲唸「hatachi」，20號唸「hatsuka」。",
          image_file: "twenty.png",
        },
        {
          id: "num-50",
          term_zh: "50",
          related_terms: [
            {
              term_target: "五十",
              pronunciation: ["gojuu"],
              specific_note: "",
              segments: [
                { text: "五", furigana: "ご", meaning: "五", tail: "" },
                { text: "十", furigana: "じゅう", meaning: "十", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "五十音。",
              translation: "五十音。",
              segments: [
                {
                  text: "五十",
                  furigana: "ごじゅう",
                  meaning: "五十",
                  tail: "",
                },
                { text: "音", furigana: "おん", meaning: "音", tail: "。" },
              ],
            },
            {
              sentence: "五十円。",
              translation: "50圓。",
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
          ],
          usage_note: "五(go) + 十(juu)。",
          image_file: "fifty.png",
        },
        {
          id: "num-100",
          term_zh: "100",
          related_terms: [
            {
              term_target: "百",
              pronunciation: ["hyaku"],
              specific_note: "",
              segments: [
                { text: "百", furigana: "ひゃく", meaning: "百", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "百円ショップ。",
              translation: "百圓商店。",
              segments: [
                { text: "百", furigana: "ひゃく", meaning: "百", tail: "" },
                { text: "円", furigana: "えん", meaning: "圓", tail: " " },
                { text: "ショップ", meaning: "商店", tail: "。" },
              ],
            },
            {
              sentence: "百点。",
              translation: "一百分。",
              segments: [
                { text: "百", furigana: "ひゃく", meaning: "百", tail: "" },
                { text: "点", furigana: "てん", meaning: "點/分", tail: "。" },
              ],
            },
            {
              sentence: "三百円。",
              translation: "300圓 (注意發音)。",
              segments: [
                { text: "三", furigana: "さん", meaning: "三", tail: "" },
                {
                  text: "百",
                  furigana: "びゃく",
                  meaning: "百(濁音)",
                  tail: "",
                },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
          ],
          usage_note:
            "三百(sanbyaku)、六百(roppyaku)、八百(happyaku) 讀音特殊。",
          image_file: "hundred.png",
        },
        {
          id: "num-1000",
          term_zh: "1000",
          related_terms: [
            {
              term_target: "千",
              pronunciation: ["sen"],
              specific_note: "",
              segments: [
                { text: "千", furigana: "せん", meaning: "千", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "千円。",
              translation: "一千圓。",
              segments: [
                { text: "千", furigana: "せん", meaning: "千", tail: "" },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
            {
              sentence: "三千円。",
              translation: "三千圓 (注意發音)。",
              segments: [
                { text: "三", furigana: "さん", meaning: "三", tail: "" },
                { text: "千", furigana: "ぜん", meaning: "千(濁音)", tail: "" },
                { text: "円", furigana: "えん", meaning: "圓", tail: "。" },
              ],
            },
            {
              sentence: "八千。",
              translation: "八千 (注意發音)。",
              segments: [
                { text: "八", furigana: "はっ", meaning: "八", tail: "" },
                { text: "千", furigana: "せん", meaning: "千", tail: "。" },
              ],
            },
          ],
          usage_note: "三千(sanzen)、八千(hassen) 讀音特殊。",
          image_file: "thousand.png",
        },
        {
          id: "num-10000",
          term_zh: "10000",
          related_terms: [
            {
              term_target: "一万",
              pronunciation: ["ichiman"],
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
              sentence: "十万人。",
              translation: "十萬人。",
              segments: [
                {
                  text: "十万",
                  furigana: "じゅうまん",
                  meaning: "十萬",
                  tail: "",
                },
                { text: "人", furigana: "にん", meaning: "人", tail: "。" },
              ],
            },
            {
              sentence: "百万。",
              translation: "一百萬。",
              segments: [
                {
                  text: "百万",
                  furigana: "ひゃくまん",
                  meaning: "百萬",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "日文計數單位為「萬」，沒有「Thousand」的概念。一百萬是「hyakuman」。",
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
              term_target: "私は～です",
              pronunciation: ["watashi wa ... desu"],
              specific_note: "自我介紹/狀態",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "～", meaning: "...", tail: "" },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は学生です。",
              translation: "我是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
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
              sentence: "私は嬉しいです。",
              translation: "我很快樂(開心)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "嬉しい",
                  furigana: "うれしい",
                  meaning: "開心",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "私は会社員です。",
              translation: "我是公司職員。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "会社員",
                  furigana: "かいしゃいん",
                  meaning: "公司職員",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "A は B です (A 是 B)。",
          image_file: "i_am.png",
        },
        {
          id: "g-02",
          term_zh: "我的名字叫～",
          related_terms: [
            {
              term_target: "私の名前は～です",
              pronunciation: ["watashi no namae wa ... desu"],
              specific_note: "",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: "" },
                { text: "名前", furigana: "なまえ", meaning: "名字", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "～", meaning: "...", tail: "" },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私の名前は田中です。",
              translation: "我的名字是田中。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "名前", furigana: "なまえ", meaning: "名字", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "田中", furigana: "たなか", meaning: "田中", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "私の名前はジョンです。",
              translation: "我的名字是約翰。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "名前", furigana: "なまえ", meaning: "名字", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "ジョン", meaning: "約翰", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "リンと申します。",
              translation: "我姓林 (謙虛用法)。",
              segments: [
                { text: "リン", meaning: "林", tail: "" },
                { text: "と", meaning: "(引用助詞)", tail: " " },
                {
                  text: "申します",
                  furigana: "もうします",
                  meaning: "叫做(自謙)",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "自我介紹。",
          image_file: "my_name_is.png",
        },
        {
          id: "g-03",
          term_zh: "我做～ (習慣/未來)",
          related_terms: [
            {
              term_target: "私は～します",
              pronunciation: ["watashi wa ... shimasu"],
              specific_note: "習慣/將做",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "～", meaning: "...", tail: "" },
                { text: "します", meaning: "做(動詞Masu形)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私はテニスをします。",
              translation: "我打網球。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "テニス", meaning: "網球", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "します", meaning: "做/打", tail: "。" },
              ],
            },
            {
              sentence: "私は毎日勉強します。",
              translation: "我每天唸書。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "毎日",
                  furigana: "まいにち",
                  meaning: "每天",
                  tail: " ",
                },
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "念書/學習",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "。" },
              ],
            },
            {
              sentence: "ここで働きます。",
              translation: "我在這裡工作。",
              segments: [
                { text: "ここ", meaning: "這裡", tail: "" },
                { text: "で", meaning: "在", tail: " " },
                {
                  text: "働きます",
                  furigana: "はたらきます",
                  meaning: "工作",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "日文的現在式可表示「習慣」或「未來」。",
          image_file: "i_do.png",
        },
        {
          id: "g-04",
          term_zh: "我正在做～",
          related_terms: [
            {
              term_target: "～ています",
              pronunciation: ["...te imasu"],
              specific_note: "正在進行",
              segments: [
                { text: "～て", meaning: "(動詞Te形)", tail: "" },
                { text: "います", meaning: "正在", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は食べています。",
              translation: "我正在吃。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "食べて", furigana: "たべて", meaning: "吃", tail: "" },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "今、仕事をしています。",
              translation: "我現在正在工作。",
              segments: [
                { text: "今", furigana: "いま", meaning: "現在", tail: "、" },
                { text: "仕事", furigana: "しごと", meaning: "工作", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "して", meaning: "做", tail: "" },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
            {
              sentence: "あなたを待っています。",
              translation: "我正在等你。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "待って", furigana: "まって", meaning: "等", tail: "" },
                { text: "います", meaning: "正在", tail: "。" },
              ],
            },
          ],
          usage_note: "動詞 Te 形 + います。",
          image_file: "ing.png",
        },
        {
          id: "g-05",
          term_zh: "我能夠～ (會)",
          related_terms: [
            {
              term_target: "～ができます",
              pronunciation: ["...ga dekimasu"],
              specific_note: "能力",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "できます", meaning: "會/能夠", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は水泳ができます。",
              translation: "我會游泳。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "水泳",
                  furigana: "すいえい",
                  meaning: "游泳",
                  tail: "",
                },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "できます", meaning: "會", tail: "。" },
              ],
            },
            {
              sentence: "英語が話せます。",
              translation: "我會說英文 (動詞可能形)。",
              segments: [
                { text: "英語", furigana: "えいご", meaning: "英文", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                {
                  text: "話せます",
                  furigana: "はなせます",
                  meaning: "能說",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "運転ができます。",
              translation: "我會開車。",
              segments: [
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "できます", meaning: "會/能", tail: "。" },
              ],
            },
          ],
          usage_note:
            "名詞 + が + できます。若是動詞要變成名詞化 (動詞原形 + こと + が + できます)。",
          image_file: "can.png",
        },
        {
          id: "g-06",
          term_zh: "我喜歡做～",
          related_terms: [
            {
              term_target: "～のが好きです",
              pronunciation: ["...no ga suki desu"],
              specific_note: "愛好",
              segments: [
                { text: "～", meaning: "(動詞原形)", tail: "" },
                { text: "の", meaning: "(名詞化)", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "本を読むのが好きです。",
              translation: "我喜歡看書。",
              segments: [
                { text: "本", furigana: "ほん", meaning: "書", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "読む", furigana: "よむ", meaning: "閱讀", tail: "" },
                { text: "の", meaning: "這件事", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "旅行が好きです。",
              translation: "我喜歡旅行 (名詞直接接)。",
              segments: [
                {
                  text: "旅行",
                  furigana: "りょこう",
                  meaning: "旅行",
                  tail: "",
                },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "食べるのが大好きです。",
              translation: "我非常喜歡吃。",
              segments: [
                { text: "食べる", furigana: "たべる", meaning: "吃", tail: "" },
                { text: "の", meaning: "這件事", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                {
                  text: "大好き",
                  furigana: "だいすき",
                  meaning: "最喜歡/非常喜歡",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "動詞要變成名詞 (原形+の) 才能接「好き」。",
          image_file: "like_ing.png",
        },
        {
          id: "g-07",
          term_zh: "我曾經～ (過去狀態)",
          related_terms: [
            {
              term_target: "私は～でした",
              pronunciation: ["watashi wa ... deshita"],
              specific_note: "過去式",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "～", meaning: "...", tail: "" },
                { text: "でした", meaning: "是(過去式)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は学生でした。",
              translation: "我以前是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "でした", meaning: "是(過去)", tail: "。" },
              ],
            },
            {
              sentence: "昨日は忙しかったです。",
              translation: "昨天很忙 (形容詞過去式)。",
              segments: [
                { text: "昨日", furigana: "きのう", meaning: "昨天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "忙しかった",
                  furigana: "いそがしかった",
                  meaning: "忙碌(過去)",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "昔は先生でした。",
              translation: "我以前是老師。",
              segments: [
                { text: "昔", furigana: "むかし", meaning: "以前", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "先生",
                  furigana: "せんせい",
                  meaning: "老師",
                  tail: "",
                },
                { text: "でした", meaning: "是(過去)", tail: "。" },
              ],
            },
          ],
          usage_note: "名詞/Na形容詞用「でした」，i形容詞去i加「かったです」。",
          image_file: "i_was.png",
        },
        {
          id: "g-08",
          term_zh: "我做過～ (過去動作)",
          related_terms: [
            {
              term_target: "～しました",
              pronunciation: ["...shimashita"],
              specific_note: "做過(過去)",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "しました", meaning: "做了", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "家に帰りました。",
              translation: "我回家了。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "に", meaning: "回(方向)", tail: " " },
                {
                  text: "帰りました",
                  furigana: "かえりました",
                  meaning: "回去了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "映画を見ました。",
              translation: "我看了電影。",
              segments: [
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見ました",
                  furigana: "みました",
                  meaning: "看了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "テニスをしました。",
              translation: "我打了網球。",
              segments: [
                { text: "テニス", meaning: "網球", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "しました", meaning: "做了/打了", tail: "。" },
              ],
            },
          ],
          usage_note: "動詞 Masu 形改為 Mashita。",
          image_file: "i_did.png",
        },
        {
          id: "g-09",
          term_zh: "我已做過～ (完成)",
          related_terms: [
            {
              term_target: "もう～しました",
              pronunciation: ["mou ... shimashita"],
              specific_note: "已經...",
              segments: [
                { text: "もう", meaning: "已經", tail: " " },
                { text: "しました", meaning: "做了", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "もう終わりました。",
              translation: "已經結束了。",
              segments: [
                { text: "もう", meaning: "已經", tail: " " },
                {
                  text: "終わりました",
                  furigana: "おわりました",
                  meaning: "結束了",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "鍵をなくしました。",
              translation: "我弄丟了鑰匙 (結果狀態)。",
              segments: [
                { text: "鍵", furigana: "かぎ", meaning: "鑰匙", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "なくしました", meaning: "弄丟了", tail: "。" },
              ],
            },
            {
              sentence: "もうその映画を見ました。",
              translation: "我已經看過那部電影了。",
              segments: [
                { text: "もう", meaning: "已經", tail: " " },
                { text: "その", meaning: "那部", tail: " " },
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "見ました",
                  furigana: "みました",
                  meaning: "看了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note:
            "日文沒有現在完成式，通常用「もう (mou) + 過去式」來表示已經完成。",
          image_file: "i_have_done.png",
        },
        {
          id: "g-10",
          term_zh: "我曾去過～ (經驗)",
          related_terms: [
            {
              term_target: "～へ行ったことがあります",
              pronunciation: ["...e itta koto ga arimasu"],
              specific_note: "有...的經驗",
              segments: [
                { text: "～へ", meaning: "去...", tail: " " },
                {
                  text: "行った",
                  furigana: "いった",
                  meaning: "去了(Ta形)",
                  tail: " ",
                },
                { text: "こと", meaning: "事情/經驗", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "日本へ行ったことがあります。",
              translation: "我曾經去過日本。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "へ", meaning: "去", tail: " " },
                {
                  text: "行った",
                  furigana: "いった",
                  meaning: "去過",
                  tail: " ",
                },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "。" },
              ],
            },
            {
              sentence: "台北１０１に行ったことがあります。",
              translation: "我去過台北101。",
              segments: [
                { text: "台北１０１", meaning: "台北101", tail: "" },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行った",
                  furigana: "いった",
                  meaning: "去過",
                  tail: " ",
                },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "。" },
              ],
            },
            {
              sentence: "そこに二回行ったことがあります。",
              translation: "我去過那裡兩次。",
              segments: [
                { text: "そこ", meaning: "那裡", tail: "" },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "二回",
                  furigana: "にかい",
                  meaning: "兩次",
                  tail: " ",
                },
                {
                  text: "行った",
                  furigana: "いった",
                  meaning: "去過",
                  tail: " ",
                },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "。" },
              ],
            },
          ],
          usage_note: "動詞 Ta 形 + ことがあります。",
          image_file: "have_been_to.png",
        },
        {
          id: "g-11",
          term_zh: "我打算～ (未來)",
          related_terms: [
            {
              term_target: "～します",
              pronunciation: ["...shimasu"],
              specific_note: "意志/未來",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "します", meaning: "做(將會做)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私が行きます。",
              translation: "我會去 (我來去)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "が", meaning: "(強調主詞)", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "電話します。",
              translation: "我會打電話。",
              segments: [
                { text: "電話", furigana: "でんわ", meaning: "電話", tail: "" },
                { text: "します", meaning: "做(打)", tail: "。" },
              ],
            },
            {
              sentence: "頑張ります。",
              translation: "我會努力 (盡力)。",
              segments: [
                {
                  text: "頑張ります",
                  furigana: "がんばります",
                  meaning: "加油/努力",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "日文的現在式 (Masu形) 也代表未來意志。",
          image_file: "i_will.png",
        },
        {
          id: "g-12",
          term_zh: "你是～嗎？",
          related_terms: [
            {
              term_target: "あなたは～ですか",
              pronunciation: ["anata wa ... desu ka"],
              specific_note: "",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "～", meaning: "...", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "準備はいいですか。",
              translation: "準備好了嗎？",
              segments: [
                {
                  text: "準備",
                  furigana: "じゅんび",
                  meaning: "準備",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いい", meaning: "好/OK", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "お腹が空いていますか。",
              translation: "你餓了嗎？",
              segments: [
                { text: "お腹", furigana: "おなか", meaning: "肚子", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "空いて",
                  furigana: "すいて",
                  meaning: "空/餓",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "学生ですか。",
              translation: "你是學生嗎？",
              segments: [
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "句尾加「か (ka)」表示疑問。",
          image_file: "are_you.png",
        },
        {
          id: "g-13",
          term_zh: "你在做～嗎？",
          related_terms: [
            {
              term_target: "～しますか",
              pronunciation: ["...shimasu ka"],
              specific_note: "習慣/動作",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "します", meaning: "做", tail: "" },
                { text: "か", meaning: "嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "辛いものを食べますか。",
              translation: "你吃辣的東西嗎？(習慣)",
              segments: [
                { text: "辛い", furigana: "からい", meaning: "辣的", tail: "" },
                { text: "もの", meaning: "東西", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "食べます",
                  furigana: "たべます",
                  meaning: "吃",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "音楽が好きですか。",
              translation: "你喜歡音樂嗎？",
              segments: [
                {
                  text: "音楽",
                  furigana: "おんがく",
                  meaning: "音樂",
                  tail: "",
                },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
            {
              sentence: "わかりますか。",
              translation: "你懂嗎？",
              segments: [
                { text: "わかります", meaning: "明白/懂", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "詢問對方的習慣、意願或狀態。",
          image_file: "do_you.png",
        },
        {
          id: "g-14",
          term_zh: "你曾經～嗎？",
          related_terms: [
            {
              term_target: "～たことがありますか",
              pronunciation: ["...ta koto ga arimasu ka"],
              specific_note: "經驗",
              segments: [
                { text: "～た", meaning: "(動詞Ta形)", tail: " " },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "雪を見たことがありますか。",
              translation: "你看過雪嗎？",
              segments: [
                { text: "雪", furigana: "ゆき", meaning: "雪", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "見た", furigana: "みた", meaning: "看過", tail: " " },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "台湾に来たことがありますか。",
              translation: "你有來過台灣嗎？",
              segments: [
                {
                  text: "台湾",
                  furigana: "たいわん",
                  meaning: "台灣",
                  tail: "",
                },
                { text: "に", meaning: "來", tail: " " },
                { text: "来た", furigana: "きた", meaning: "來過", tail: " " },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "臭豆腐を食べたことがありますか。",
              translation: "你有吃過臭豆腐嗎？",
              segments: [
                {
                  text: "臭豆腐",
                  furigana: "しゅうどうふ",
                  meaning: "臭豆腐",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "食べた",
                  furigana: "たべた",
                  meaning: "吃過",
                  tail: " ",
                },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "詢問過往經驗。",
          image_file: "have_you_ever.png",
        },
        {
          id: "g-15",
          term_zh: "你何時做（某事）？",
          related_terms: [
            {
              term_target: "いつ～しますか",
              pronunciation: ["itsu ... shimasu ka"],
              specific_note: "",
              segments: [
                { text: "いつ", meaning: "何時", tail: " " },
                { text: "～", meaning: "...", tail: "" },
                { text: "します", meaning: "做", tail: "" },
                { text: "か", meaning: "嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "いつ寝ますか。",
              translation: "你什麼時候睡覺？",
              segments: [
                { text: "いつ", meaning: "何時", tail: " " },
                { text: "寝ます", furigana: "ねます", meaning: "睡", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "仕事はいつ始まりますか。",
              translation: "工作什麼時候開始？",
              segments: [
                { text: "仕事", furigana: "しごと", meaning: "工作", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "いつ", meaning: "何時", tail: " " },
                {
                  text: "始まります",
                  furigana: "はじまります",
                  meaning: "開始",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "いつ運動しますか。",
              translation: "你什麼時候運動？",
              segments: [
                { text: "いつ", meaning: "何時", tail: " " },
                {
                  text: "運動",
                  furigana: "うんどう",
                  meaning: "運動",
                  tail: "",
                },
                { text: "します", meaning: "做", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "詢問時間點。",
          image_file: "when_do_you.png",
        },
        {
          id: "g-16",
          term_zh: "你什麼時候去（某地）？",
          related_terms: [
            {
              term_target: "いつ～へ行きますか",
              pronunciation: ["itsu ... e ikimasu ka"],
              specific_note: "",
              segments: [
                { text: "いつ", meaning: "何時", tail: " " },
                { text: "～", meaning: "(地點)", tail: "" },
                { text: "へ", meaning: "往", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "いつ学校へ行きますか。",
              translation: "你什麼時候去學校？",
              segments: [
                { text: "いつ", meaning: "何時", tail: " " },
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "",
                },
                { text: "へ", meaning: "往", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "いつ会社に行きますか。",
              translation: "你什麼時候去上班(公司)？",
              segments: [
                { text: "いつ", meaning: "何時", tail: " " },
                {
                  text: "会社",
                  furigana: "かいしゃ",
                  meaning: "公司",
                  tail: "",
                },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "いつ帰りますか。",
              translation: "你什麼時候回去(家)？",
              segments: [
                { text: "いつ", meaning: "何時", tail: " " },
                {
                  text: "帰ります",
                  furigana: "かえります",
                  meaning: "回家",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "助詞「へ (e)」或「に (ni)」皆可。",
          image_file: "when_go_to.png",
        },
        {
          id: "g-17",
          term_zh: "你在哪裡做（某事）？",
          related_terms: [
            {
              term_target: "どこで～しますか",
              pronunciation: ["doko de ... shimasu ka"],
              specific_note: "",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "で", meaning: "在(地點)", tail: " " },
                { text: "～", meaning: "...", tail: "" },
                { text: "します", meaning: "做", tail: "" },
                { text: "か", meaning: "嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "どこに住んでいますか。",
              translation: "你住在哪裡？(居住地用に)",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "住んで", furigana: "すんで", meaning: "住", tail: "" },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "どこで働いていますか。",
              translation: "你在哪裡工作？(動作地用で)",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "で", meaning: "在", tail: " " },
                {
                  text: "働いて",
                  furigana: "はたらいて",
                  meaning: "工作",
                  tail: "",
                },
                { text: "います", meaning: "狀態", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "どこで買いましたか。",
              translation: "你在哪裡買的？",
              segments: [
                { text: "どこ", meaning: "哪裡", tail: "" },
                { text: "で", meaning: "在", tail: " " },
                {
                  text: "買いました",
                  furigana: "かいました",
                  meaning: "買了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "做動作的地點用「で」，居住或存在的地點用「に」。",
          image_file: "where_do_you.png",
        },
        {
          id: "g-18",
          term_zh: "你如何做（某事）？",
          related_terms: [
            {
              term_target: "どうやって～しますか",
              pronunciation: ["douyatte ... shimasu ka"],
              specific_note: "方法",
              segments: [
                { text: "どうやって", meaning: "怎麼做/如何", tail: " " },
                { text: "～", meaning: "...", tail: "" },
                { text: "します", meaning: "做", tail: "" },
                { text: "か", meaning: "嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "どうやって作りますか。",
              translation: "這要怎麼做(煮)？",
              segments: [
                { text: "どうやって", meaning: "如何", tail: " " },
                {
                  text: "作ります",
                  furigana: "つくります",
                  meaning: "製作",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "名前はどう書きますか。",
              translation: "名字要怎麼寫？",
              segments: [
                { text: "名前", furigana: "なまえ", meaning: "名字", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どう", meaning: "如何", tail: " " },
                {
                  text: "書きます",
                  furigana: "かきます",
                  meaning: "寫",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "気分はどうですか。",
              translation: "你覺得(身體狀況)如何？",
              segments: [
                {
                  text: "気分",
                  furigana: "きぶん",
                  meaning: "感覺/心情",
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "どう", meaning: "如何", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "問方法手段用「どうやって」，問感想狀態用「どう」。",
          image_file: "how_do_you.png",
        },
        {
          id: "g-19",
          term_zh: "你怎麼去（某地）？",
          related_terms: [
            {
              term_target: "どうやって～へ行きますか",
              pronunciation: ["douyatte ... e ikimasu ka"],
              specific_note: "交通方式",
              segments: [
                { text: "どうやって", meaning: "怎麼做", tail: " " },
                { text: "～へ", meaning: "往(地點)", tail: "" },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "学校までどうやって行きますか。",
              translation: "你怎麼去學校？",
              segments: [
                {
                  text: "学校",
                  furigana: "がっこう",
                  meaning: "學校",
                  tail: "",
                },
                { text: "まで", meaning: "直到", tail: " " },
                { text: "どうやって", meaning: "如何", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "空港までどうやって行きますか。",
              translation: "怎麼去機場？",
              segments: [
                {
                  text: "空港",
                  furigana: "くうこう",
                  meaning: "機場",
                  tail: "",
                },
                { text: "まで", meaning: "直到", tail: " " },
                { text: "どうやって", meaning: "如何", tail: " " },
                {
                  text: "行きます",
                  furigana: "いきます",
                  meaning: "去",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "何で来ましたか。",
              translation: "你搭什麼來的？",
              segments: [
                {
                  text: "何",
                  furigana: "なん",
                  meaning: "什麼(交通工具)",
                  tail: "",
                },
                { text: "で", meaning: "用/搭", tail: " " },
                {
                  text: "来ました",
                  furigana: "きました",
                  meaning: "來了",
                  tail: "",
                },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "問交通手段。「学校まで (made)」表示「到學校」。",
          image_file: "how_go_to.png",
        },
        {
          id: "g-20",
          term_zh: "我不是～",
          related_terms: [
            {
              term_target: "私は～ではありません",
              pronunciation: ["watashi wa ... dewa arimasen"],
              specific_note: "否定狀態",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "～", meaning: "...", tail: "" },
                { text: "では", meaning: "並(否定)", tail: "" },
                { text: "ありません", meaning: "不是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "私は学生ではありません。",
              translation: "我不是學生。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "学生",
                  furigana: "がくせい",
                  meaning: "學生",
                  tail: "",
                },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是", tail: "。" },
              ],
            },
            {
              sentence: "私は医者じゃありません。",
              translation: "我不是醫生 (口語)。",
              segments: [
                { text: "私", furigana: "わたし", meaning: "我", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "医者", furigana: "いしゃ", meaning: "醫生", tail: "" },
                { text: "じゃ", meaning: "並(口語)", tail: "" },
                { text: "ありません", meaning: "不是", tail: "。" },
              ],
            },
            {
              sentence: "元気ではありません。",
              translation: "我不怎麼好 (沒精神)。",
              segments: [
                {
                  text: "元気",
                  furigana: "げんき",
                  meaning: "健康/精神",
                  tail: "",
                },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "「ではありません」是禮貌否定，口語常用「じゃありません」或「じゃないです」。",
          image_file: "i_am_not.png",
        },
        {
          id: "g-21",
          term_zh: "我不做～",
          related_terms: [
            {
              term_target: "～ません",
              pronunciation: ["...masen"],
              specific_note: "否定動作",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "ません", meaning: "不做", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "タバコは吸いません。",
              translation: "我不抽菸。",
              segments: [
                { text: "タバコ", meaning: "香菸", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "吸い", furigana: "すい", meaning: "吸/抽", tail: "" },
                { text: "ません", meaning: "不", tail: "。" },
              ],
            },
            {
              sentence: "知りません。",
              translation: "我不知道。",
              segments: [
                { text: "知り", furigana: "しり", meaning: "知", tail: "" },
                { text: "ません", meaning: "不", tail: "。" },
              ],
            },
            {
              sentence: "肉を食べません。",
              translation: "我不吃肉。",
              segments: [
                { text: "肉", furigana: "にく", meaning: "肉", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "食べ", furigana: "たべ", meaning: "吃", tail: "" },
                { text: "ません", meaning: "不", tail: "。" },
              ],
            },
          ],
          usage_note: "動詞 Masu 形改成 Masen。",
          image_file: "i_dont.png",
        },
        {
          id: "g-22",
          term_zh: "我不能～ (不會)",
          related_terms: [
            {
              term_target: "～ができません",
              pronunciation: ["...ga dekimasen"],
              specific_note: "無能力",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "できません", meaning: "不能/不會", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "泳ぐことができません。",
              translation: "我不會游泳。",
              segments: [
                { text: "泳ぐ", furigana: "およぐ", meaning: "游泳", tail: "" },
                { text: "こと", meaning: "事情(名詞化)", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "できません", meaning: "不會", tail: "。" },
              ],
            },
            {
              sentence: "運転ができません。",
              translation: "我不會開車。",
              segments: [
                {
                  text: "運転",
                  furigana: "うんてん",
                  meaning: "駕駛",
                  tail: "",
                },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "できません", meaning: "不會", tail: "。" },
              ],
            },
            {
              sentence: "今日は行けません。",
              translation: "我今天不能去 (動詞可能形否定)。",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "行け", furigana: "いけ", meaning: "能去", tail: "" },
                { text: "ません", meaning: "不", tail: "。" },
              ],
            },
          ],
          usage_note: "能力否定用「できません」或動詞可能形否定。",
          image_file: "i_cant.png",
        },
        {
          id: "g-23",
          term_zh: "我未曾～ (沒做過)",
          related_terms: [
            {
              term_target: "～たことがありません",
              pronunciation: ["...ta koto ga arimasen"],
              specific_note: "無經驗",
              segments: [
                { text: "～た", meaning: "(動詞Ta形)", tail: " " },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "ありません", meaning: "沒有", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "それを食べたことがありません。",
              translation: "我沒吃過那個。",
              segments: [
                { text: "それ", meaning: "那個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "食べた",
                  furigana: "たべた",
                  meaning: "吃過",
                  tail: " ",
                },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "ありません", meaning: "沒有", tail: "。" },
              ],
            },
            {
              sentence: "日本に行ったことがありません。",
              translation: "我沒去過日本。",
              segments: [
                { text: "日本", furigana: "にほん", meaning: "日本", tail: "" },
                { text: "に", meaning: "去", tail: " " },
                {
                  text: "行った",
                  furigana: "いった",
                  meaning: "去過",
                  tail: " ",
                },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "ありません", meaning: "沒有", tail: "。" },
              ],
            },
            {
              sentence: "見たことがありません。",
              translation: "我沒看過。",
              segments: [
                { text: "見た", furigana: "みた", meaning: "看過", tail: " " },
                { text: "こと", meaning: "經驗", tail: " " },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "ありません", meaning: "沒有", tail: "。" },
              ],
            },
          ],
          usage_note: "動詞 Ta 形 + ことがありません。",
          image_file: "i_have_never.png",
        },
        {
          id: "g-24",
          term_zh: "我不必～",
          related_terms: [
            {
              term_target: "～なくてもいいです",
              pronunciation: ["...nakutemo ii desu"],
              specific_note: "無須",
              segments: [
                { text: "～なくても", meaning: "即使不...", tail: " " },
                { text: "いい", meaning: "好/可以", tail: "" },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "行かなくてもいいです。",
              translation: "不去也可以 (我不必去)。",
              segments: [
                {
                  text: "行か",
                  furigana: "いか",
                  meaning: "去(否定形)",
                  tail: "",
                },
                { text: "なくても", meaning: "即使不...", tail: "" },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "急がなくてもいいです。",
              translation: "不用急。",
              segments: [
                {
                  text: "急が",
                  furigana: "いそが",
                  meaning: "急(否定形)",
                  tail: "",
                },
                { text: "なくても", meaning: "即使不...", tail: "" },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "払わなくてもいいです。",
              translation: "不用付錢。",
              segments: [
                {
                  text: "払わ",
                  furigana: "はらわ",
                  meaning: "付(否定形)",
                  tail: "",
                },
                { text: "なくても", meaning: "即使不...", tail: "" },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "動詞 Nai 形去i + くても + いいです。",
          image_file: "i_dont_have_to.png",
        },
        {
          id: "g-25",
          term_zh: "如果～的話，就～",
          related_terms: [
            {
              term_target: "もし～なら、～",
              pronunciation: ["moshi ... nara ..."],
              specific_note: "假設",
              segments: [
                { text: "もし", meaning: "如果", tail: " " },
                { text: "～なら", meaning: "的話", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "もしよかったら、どうぞ。",
              translation: "如果不嫌棄的話，請用。",
              segments: [
                { text: "もし", meaning: "如果", tail: " " },
                { text: "よかったら", meaning: "好的話", tail: "、" },
                { text: "どうぞ", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "雨なら、行きません。",
              translation: "如果是雨天，就不去。",
              segments: [
                { text: "雨", furigana: "あめ", meaning: "雨", tail: "" },
                { text: "なら", meaning: "的話", tail: "、" },
                {
                  text: "行きません",
                  furigana: "いきません",
                  meaning: "不去",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "暇なら、手伝ってください。",
              translation: "如果你有空，請幫我。",
              segments: [
                { text: "暇", furigana: "ひま", meaning: "閒暇", tail: "" },
                { text: "なら", meaning: "的話", tail: "、" },
                {
                  text: "手伝って",
                  furigana: "てつだって",
                  meaning: "幫忙",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note: "「なら (nara)」接名詞/形容詞。「たら (tara)」接動詞。",
          image_file: "if.png",
        },
        {
          id: "g-26",
          term_zh: "當～時，就～",
          related_terms: [
            {
              term_target: "～時、～",
              pronunciation: ["...toki ..."],
              specific_note: "時候",
              segments: [
                {
                  text: "～時",
                  furigana: "とき",
                  meaning: "...的時候",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "ご飯を食べる時、手を洗います。",
              translation: "吃飯時會洗手。",
              segments: [
                { text: "ご飯", furigana: "ごはん", meaning: "飯", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "食べる",
                  furigana: "たべる",
                  meaning: "吃",
                  tail: " ",
                },
                { text: "時", furigana: "とき", meaning: "時候", tail: "、" },
                { text: "手", furigana: "て", meaning: "手", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "洗います",
                  furigana: "あらいます",
                  meaning: "洗",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "暇な時、何をしますか。",
              translation: "有空的時候，你會做什麼？",
              segments: [
                { text: "暇", furigana: "ひま", meaning: "閒暇", tail: "" },
                { text: "な", meaning: "的", tail: " " },
                { text: "時", furigana: "とき", meaning: "時候", tail: "、" },
                { text: "何", furigana: "なに", meaning: "什麼", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "します", meaning: "做", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "子供の時、よく遊びました。",
              translation: "小時候，經常玩耍。",
              segments: [
                { text: "子供", furigana: "こども", meaning: "小孩", tail: "" },
                { text: "の", meaning: "的", tail: " " },
                { text: "時", furigana: "とき", meaning: "時候", tail: "、" },
                { text: "よく", meaning: "經常", tail: " " },
                {
                  text: "遊びました",
                  furigana: "あそびました",
                  meaning: "玩了",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "名詞+の時；動詞/i形+時；Na形+な時。",
          image_file: "when_condition.png",
        },
        {
          id: "g-27",
          term_zh: "請你～ (請求)",
          related_terms: [
            {
              term_target: "～てください",
              pronunciation: ["...te kudasai"],
              specific_note: "請求動作",
              segments: [
                { text: "～て", meaning: "(動詞Te形)", tail: " " },
                { text: "ください", meaning: "請", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "手伝ってください。",
              translation: "請幫幫我。",
              segments: [
                {
                  text: "手伝って",
                  furigana: "てつだって",
                  meaning: "幫忙",
                  tail: "",
                },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "窓を開けてください。",
              translation: "請開窗。",
              segments: [
                { text: "窓", furigana: "まど", meaning: "窗戶", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "開けて", furigana: "あけて", meaning: "開", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
            {
              sentence: "ちょっと待ってください。",
              translation: "請稍等。",
              segments: [
                { text: "ちょっと", meaning: "稍微", tail: " " },
                { text: "待って", furigana: "まって", meaning: "等", tail: "" },
                { text: "ください", meaning: "請", tail: "。" },
              ],
            },
          ],
          usage_note: "動詞 Te 形 + ください。",
          image_file: "can_you_help.png",
        },
        {
          id: "g-28",
          term_zh: "我們來做～吧！ (提議)",
          related_terms: [
            {
              term_target: "～ましょう",
              pronunciation: ["...mashou"],
              specific_note: "提議/勸誘",
              segments: [
                { text: "～ましょう", meaning: "...吧(一起做)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "行きましょう。",
              translation: "我們走吧。",
              segments: [
                {
                  text: "行きましょう",
                  furigana: "いきましょう",
                  meaning: "去吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "食べましょう。",
              translation: "我們吃吧。",
              segments: [
                {
                  text: "食べましょう",
                  furigana: "たべましょう",
                  meaning: "吃吧",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "休憩しましょう。",
              translation: "我們休息一下吧。",
              segments: [
                {
                  text: "休憩",
                  furigana: "きゅうけい",
                  meaning: "休息",
                  tail: "",
                },
                { text: "しましょう", meaning: "做吧", tail: "。" },
              ],
            },
          ],
          usage_note: "動詞 Masu 形去掉 Masu 改 Mashou。",
          image_file: "lets.png",
        },
        {
          id: "g-29",
          term_zh: "我認為～",
          related_terms: [
            {
              term_target: "～と思います",
              pronunciation: ["...to omoimasu"],
              specific_note: "思考/意見",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "と", meaning: "(引用助詞)", tail: " " },
                {
                  text: "思います",
                  furigana: "おもいます",
                  meaning: "認為/想",
                  tail: "",
                },
              ],
            },
          ],
          examples: [
            {
              sentence: "いいと思います。",
              translation: "我覺得很不錯。",
              segments: [
                { text: "いい", meaning: "好", tail: "" },
                { text: "と", meaning: "(引用助詞)", tail: " " },
                {
                  text: "思います",
                  furigana: "おもいます",
                  meaning: "認為",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "彼は来ないと思います。",
              translation: "我覺得他不會來。",
              segments: [
                { text: "彼", furigana: "かれ", meaning: "他", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "来ない",
                  furigana: "こない",
                  meaning: "不來",
                  tail: "",
                },
                { text: "と", meaning: "(引用助詞)", tail: " " },
                {
                  text: "思います",
                  furigana: "おもいます",
                  meaning: "認為",
                  tail: "。",
                },
              ],
            },
            {
              sentence: "そう思います。",
              translation: "我也這麼覺得。",
              segments: [
                { text: "そう", meaning: "那樣", tail: "" },
                {
                  text: "思います",
                  furigana: "おもいます",
                  meaning: "認為",
                  tail: "。",
                },
              ],
            },
          ],
          usage_note: "常用於表達個人主觀看法。",
          image_file: "i_think.png",
        },
        {
          id: "g-30",
          term_zh: "我想做～ (願望)",
          related_terms: [
            {
              term_target: "～たいです",
              pronunciation: ["...tai desu"],
              specific_note: "想要...",
              segments: [
                { text: "～たい", meaning: "想做...", tail: "" },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "行きたいです。",
              translation: "我想去。",
              segments: [
                { text: "行き", furigana: "いき", meaning: "去", tail: "" },
                { text: "たい", meaning: "想", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これが買いたいです。",
              translation: "我想買這個。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "買い", furigana: "かい", meaning: "買", tail: "" },
                { text: "たい", meaning: "想", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "映画を見たいです。",
              translation: "我想看電影。",
              segments: [
                { text: "映画", furigana: "えいが", meaning: "電影", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "見", furigana: "み", meaning: "看", tail: "" },
                { text: "たい", meaning: "想", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "動詞 Masu 形去掉 Masu 改 Tai。助詞可以用「が」或「を」。",
          image_file: "want_to.png",
        },
        {
          id: "g-31",
          term_zh: "我必須做～",
          related_terms: [
            {
              term_target: "～なければなりません",
              pronunciation: ["...nakereba narimasen"],
              specific_note: "義務",
              segments: [
                { text: "～なければ", meaning: "如果不...", tail: "" },
                { text: "なりません", meaning: "不行", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "行かなければなりません。",
              translation: "我必須去。",
              segments: [
                { text: "行か", furigana: "いか", meaning: "去", tail: "" },
                { text: "なければ", meaning: "如果不", tail: "" },
                { text: "なりません", meaning: "不行", tail: "。" },
              ],
            },
            {
              sentence: "勉強しなければなりません。",
              translation: "我必須讀書。",
              segments: [
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書",
                  tail: "",
                },
                { text: "し", meaning: "做", tail: "" },
                { text: "なければ", meaning: "如果不", tail: "" },
                { text: "なりません", meaning: "不行", tail: "。" },
              ],
            },
            {
              sentence: "もう帰らなければなりません。",
              translation: "我必須回去了。",
              segments: [
                { text: "もう", meaning: "已經", tail: " " },
                { text: "帰ら", furigana: "かえら", meaning: "回", tail: "" },
                { text: "なければ", meaning: "如果不", tail: "" },
                { text: "なりません", meaning: "不行", tail: "。" },
              ],
            },
          ],
          usage_note:
            "字面是「如果不做的話是不行的」。口語常縮短為「～なきゃ (nakya)」。",
          image_file: "i_have_to.png",
        },
        {
          id: "g-32",
          term_zh: "做某事是怎樣的",
          related_terms: [
            {
              term_target: "～のは...です",
              pronunciation: ["...no wa ... desu"],
              specific_note: "動詞名詞化",
              segments: [
                { text: "～", meaning: "(動詞)", tail: "" },
                { text: "の", meaning: "(名詞化)", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "...", meaning: "(形容詞)", tail: "" },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "食べるのは楽しいです。",
              translation: "吃東西是快樂的。",
              segments: [
                { text: "食べる", furigana: "たべる", meaning: "吃", tail: "" },
                { text: "の", meaning: "這件事", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "楽しい",
                  furigana: "たのしい",
                  meaning: "快樂",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "勉強するのは大切です。",
              translation: "學習是很重要的。",
              segments: [
                {
                  text: "勉強",
                  furigana: "べんきょう",
                  meaning: "讀書",
                  tail: "",
                },
                { text: "する", meaning: "做", tail: "" },
                { text: "の", meaning: "這件事", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "大切",
                  furigana: "たいせつ",
                  meaning: "重要",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "あなたに会うのは嬉しいです。",
              translation: "見到你很開心。",
              segments: [
                { text: "あなた", meaning: "你", tail: "" },
                { text: "に", meaning: "與", tail: " " },
                { text: "会う", furigana: "あう", meaning: "見面", tail: "" },
                { text: "の", meaning: "這件事", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                {
                  text: "嬉しい",
                  furigana: "うれしい",
                  meaning: "開心",
                  tail: "",
                },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "將動詞用「の」名詞化後，可作為句子的主詞。",
          image_file: "it_is_to.png",
        },
        {
          id: "g-33",
          term_zh: "你可以幫我…嗎？",
          related_terms: [
            {
              term_target: "～てくれますか",
              pronunciation: ["...te kuremasu ka"],
              specific_note: "請求對方做",
              segments: [
                { text: "～て", meaning: "(動詞Te形)", tail: "" },
                { text: "くれます", meaning: "給(我)", tail: "" },
                { text: "か", meaning: "嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "手伝ってくれますか。",
              translation: "可以幫我嗎？(你願意幫我嗎)",
              segments: [
                {
                  text: "手伝って",
                  furigana: "てつだって",
                  meaning: "幫忙",
                  tail: "",
                },
                { text: "くれます", meaning: "給(我)", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "教えてくれますか。",
              translation: "可以告訴(教)我嗎？",
              segments: [
                {
                  text: "教えて",
                  furigana: "おしえて",
                  meaning: "教",
                  tail: "",
                },
                { text: "くれます", meaning: "給(我)", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "ドアを開けてくれますか。",
              translation: "可以幫我開門嗎？",
              segments: [
                { text: "ドア", meaning: "門", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "開けて", furigana: "あけて", meaning: "開", tail: "" },
                { text: "くれます", meaning: "給(我)", tail: "" },
                { text: "か", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note:
            "動詞 Te 形 + くれますか (稍微親切)。更禮貌可用「～てくださいませんか」。",
          image_file: "can_you_help.png",
        },
        {
          id: "g-34",
          term_zh: "我可以…嗎？ (許可)",
          related_terms: [
            {
              term_target: "～てもいいですか",
              pronunciation: ["...temo ii desu ka"],
              specific_note: "請求許可",
              segments: [
                { text: "～て", meaning: "(動詞Te形)", tail: "" },
                { text: "も", meaning: "即使...", tail: "" },
                { text: "いい", meaning: "可以/好", tail: "" },
                { text: "ですか", meaning: "是嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "入ってもいいですか。",
              translation: "我可以進去嗎？",
              segments: [
                {
                  text: "入って",
                  furigana: "はいって",
                  meaning: "進入",
                  tail: "",
                },
                { text: "も", meaning: "即使", tail: " " },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "ですか", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "写真を撮ってもいいですか。",
              translation: "我可以拍照嗎？",
              segments: [
                {
                  text: "写真",
                  furigana: "しゃしん",
                  meaning: "照片",
                  tail: "",
                },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                { text: "撮って", furigana: "とって", meaning: "拍", tail: "" },
                { text: "も", meaning: "即使", tail: " " },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "ですか", meaning: "嗎", tail: "。" },
              ],
            },
            {
              sentence: "これを使ってもいいですか。",
              translation: "我可以用這個嗎？",
              segments: [
                { text: "これ", meaning: "這個", tail: "" },
                { text: "を", meaning: "(受詞助詞)", tail: " " },
                {
                  text: "使って",
                  furigana: "つかって",
                  meaning: "用",
                  tail: "",
                },
                { text: "も", meaning: "即使", tail: " " },
                { text: "いい", meaning: "可以", tail: "" },
                { text: "ですか", meaning: "嗎", tail: "。" },
              ],
            },
          ],
          usage_note: "動詞 Te 形 + も + いいですか。",
          image_file: "can_i.png",
        },
        {
          id: "g-35",
          term_zh: "我不喜歡…",
          related_terms: [
            {
              term_target: "～が好きではありません",
              pronunciation: ["...ga suki dewa arimasen"],
              specific_note: "不喜歡",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "ではありません", meaning: "不是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "納豆が好きではありません。",
              translation: "我不喜歡納豆。",
              segments: [
                {
                  text: "納豆",
                  furigana: "なっとう",
                  meaning: "納豆",
                  tail: "",
                },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是", tail: "。" },
              ],
            },
            {
              sentence: "あまり好きじゃありません。",
              translation: "不太喜歡 (口語)。",
              segments: [
                { text: "あまり", meaning: "不太", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "じゃ", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是", tail: "。" },
              ],
            },
            {
              sentence: "待つのは好きではありません。",
              translation: "我不喜歡等待。",
              segments: [
                { text: "待つ", furigana: "まつ", meaning: "等待", tail: "" },
                { text: "の", meaning: "這件事", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "では", meaning: "並", tail: "" },
                { text: "ありません", meaning: "不是", tail: "。" },
              ],
            },
          ],
          usage_note:
            "直接說「嫌い (kirai - 討厭)」太強烈，通常用「不喜歡 (suki dewa arimasen)」。",
          image_file: "i_dont_like.png",
        },
        {
          id: "g-36",
          term_zh: "我比較喜歡…",
          related_terms: [
            {
              term_target: "～の方が好きです",
              pronunciation: ["...no hou ga suki desu"],
              specific_note: "比較",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "の", meaning: "之", tail: "" },
                { text: "方", furigana: "ほう", meaning: "方面/邊", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "猫の方が好きです。",
              translation: "我比較喜歡貓。",
              segments: [
                { text: "猫", furigana: "ねこ", meaning: "貓", tail: "" },
                { text: "の", meaning: "的", tail: "" },
                { text: "方", furigana: "ほう", meaning: "邊", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "紅茶よりコーヒーの方が好きです。",
              translation: "比起紅茶，我比較喜歡咖啡。",
              segments: [
                {
                  text: "紅茶",
                  furigana: "こうちゃ",
                  meaning: "紅茶",
                  tail: "",
                },
                { text: "より", meaning: "比", tail: " " },
                { text: "コーヒー", meaning: "咖啡", tail: "" },
                { text: "の", meaning: "的", tail: "" },
                { text: "方", furigana: "ほう", meaning: "邊", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "家にいる方が好きです。",
              translation: "我比較喜歡待在家。",
              segments: [
                { text: "家", furigana: "いえ", meaning: "家", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "いる", meaning: "待/在", tail: "" },
                { text: "方", furigana: "ほう", meaning: "方面", tail: "" },
                { text: "が", meaning: "(對象助詞)", tail: " " },
                { text: "好き", furigana: "すき", meaning: "喜歡", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "A 比 B 喜歡：B より A のほうが好き。",
          image_file: "prefer.png",
        },
        {
          id: "g-37",
          term_zh: "A 比 B 更… (比較級)",
          related_terms: [
            {
              term_target: "AはBより～",
              pronunciation: ["A wa B yori ..."],
              specific_note: "",
              segments: [
                { text: "A", meaning: "A", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "B", meaning: "B", tail: "" },
                { text: "より", meaning: "比/比起", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "今日は昨日より暑いです。",
              translation: "今天比昨天熱。",
              segments: [
                { text: "今日", furigana: "きょう", meaning: "今天", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "昨日", furigana: "きのう", meaning: "昨天", tail: "" },
                { text: "より", meaning: "比", tail: " " },
                { text: "暑い", furigana: "あつい", meaning: "熱", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
            {
              sentence: "これはあれより高いです。",
              translation: "這個比那個貴。",
              segments: [
                { text: "これ", meaning: "這", tail: "" },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "あれ", meaning: "那", tail: "" },
                { text: "より", meaning: "比", tail: " " },
                { text: "高い", furigana: "たかい", meaning: "貴", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
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
                  tail: "",
                },
                { text: "は", meaning: "(主詞助詞)", tail: " " },
                { text: "バス", meaning: "公車", tail: "" },
                { text: "より", meaning: "比", tail: " " },
                { text: "速い", furigana: "はやい", meaning: "快", tail: "" },
                { text: "です", meaning: "是", tail: "。" },
              ],
            },
          ],
          usage_note: "A 是主詞，B 是比較對象(接より)。",
          image_file: "more_than.png",
        },
        {
          id: "g-38",
          term_zh: "有…（存在）",
          related_terms: [
            {
              term_target: "～があります",
              pronunciation: ["...ga arimasu"],
              specific_note: "物體/植物",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有/在", tail: "" },
              ],
            },
            {
              term_target: "～がいます",
              pronunciation: ["...ga imasu"],
              specific_note: "人/動物",
              segments: [
                { text: "～", meaning: "...", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "います", meaning: "有/在", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "あそこにコンビニがあります。",
              translation: "那裡有便利商店。",
              segments: [
                { text: "あそこ", meaning: "那裡", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "コンビニ", meaning: "便利商店", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "。" },
              ],
            },
            {
              sentence: "部屋に猫がいます。",
              translation: "房間裡有貓 (生物用imasu)。",
              segments: [
                { text: "部屋", furigana: "へや", meaning: "房間", tail: "" },
                { text: "に", meaning: "在", tail: " " },
                { text: "猫", furigana: "ねこ", meaning: "貓", tail: "" },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "います", meaning: "有", tail: "。" },
              ],
            },
            {
              sentence: "問題があります。",
              translation: "有個問題 (抽象事物用arimasu)。",
              segments: [
                {
                  text: "問題",
                  furigana: "もんだい",
                  meaning: "問題",
                  tail: "",
                },
                { text: "が", meaning: "(主詞助詞)", tail: " " },
                { text: "あります", meaning: "有", tail: "。" },
              ],
            },
          ],
          usage_note: "無生命用「あります」，有生命用「います」。",
          image_file: "there_is.png",
        },
      ],
    },
  ],
};
