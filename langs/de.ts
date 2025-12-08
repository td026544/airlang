import { AppData } from '../types';

export const germanData: AppData =
{
  "meta": {
    "source_language": "zh-TW",
    "target_language": "de-DE",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 德文完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)"
  },
  "categories": [
    {
      "id": "greetings",
      "name": "常用句",
      "items": [
        {
          "id": "greet-001",
          "term_zh": "你好",
          "related_terms": [
            { "term_target": "Hallo", "pronunciation": ["/ˈhalo/"], "specific_note": "通用" },
            { "term_target": "Guten Tag", "pronunciation": ["/ˌɡuːtn̩ ˈtaːk/"], "specific_note": "白天通用" }
          ],
          "example": { "sentence": "Hallo, wie geht's?", "translation": "你好，你好嗎？" },
          "usage_note": "最常用的問候語。",
          "image_file": "hello.png"
        },
        {
          "id": "greet-002",
          "term_zh": "再見",
          "related_terms": [
            { "term_target": "Auf Wiedersehen", "pronunciation": ["/aʊf ˈviːdɐzeːən/"], "specific_note": "正式" },
            { "term_target": "Tschüss", "pronunciation": ["/tʃyːs/"], "specific_note": "非正式/口語" }
          ],
          "example": { "sentence": "Auf Wiedersehen, bis bald.", "translation": "再見，待會見。" },
          "usage_note": "朋友間常用 Tschüss。",
          "image_file": "goodbye.png"
        },
        {
          "id": "greet-003",
          "term_zh": "謝謝你",
          "related_terms": [
            { "term_target": "Danke", "pronunciation": ["/ˈdaŋkə/"], "specific_note": "通用" },
            { "term_target": "Vielen Dank", "pronunciation": ["/ˈfiːlən daŋk/"], "specific_note": "非常感謝" }
          ],
          "example": { "sentence": "Vielen Dank für Ihre Hilfe.", "translation": "非常謝謝您的幫忙。" },
          "usage_note": "回應可用 Bitte (不客氣)。",
          "image_file": "thank_you.png"
        },
        {
          "id": "greet-004",
          "term_zh": "對不起",
          "related_terms": [
            { "term_target": "Entschuldigung", "pronunciation": ["/ɛntˈʃʊldɪɡʊŋ/"], "specific_note": "道歉/藉過" },
            { "term_target": "Tut mir leid", "pronunciation": ["/tuːt miːɐ̯ laɪt/"], "specific_note": "我很抱歉/遺憾" }
          ],
          "example": { "sentence": "Tut mir leid, ich bin zu spät.", "translation": "對不起，我遲到了。" },
          "usage_note": "Entschuldigung 萬用，Tut mir leid 表達遺憾。",
          "image_file": "sorry.png"
        },
        {
          "id": "greet-005",
          "term_zh": "早安",
          "related_terms": [
            { "term_target": "Guten Morgen", "pronunciation": ["/ˌɡuːtn̩ ˈmɔʁɡn̩/"], "specific_note": "" }
          ],
          "example": { "sentence": "Guten Morgen, Mama.", "translation": "早安，媽。" },
          "usage_note": "通常用於上午10-11點前。",
          "image_file": "good_morning.png"
        },
        {
          "id": "greet-006",
          "term_zh": "請問...",
          "related_terms": [
            { "term_target": "Entschuldigung", "pronunciation": ["/ɛntˈʃʊldɪɡʊŋ/"], "specific_note": "引起注意" },
            { "term_target": "Darf ich fragen...", "pronunciation": ["/daʁf ɪç ˈfʁaːɡn̩/"], "specific_note": "我可以問嗎..." }
          ],
          "example": { "sentence": "Entschuldigung, wo ist die Toilette?", "translation": "請問，廁所在哪裡？" },
          "usage_note": "發問前用 Entschuldigung 很禮貌。",
          "image_file": "excuse_me.png"
        },
        {
          "id": "greet-007",
          "term_zh": "借過",
          "related_terms": [
            { "term_target": "Entschuldigung", "pronunciation": ["/ɛntˈʃʊldɪɡʊŋ/"], "specific_note": "通用" },
            { "term_target": "Darf ich mal vorbei?", "pronunciation": ["/daʁf ɪç maːl foːɐ̯ˈbaɪ/"], "specific_note": "讓我過一下" }
          ],
          "example": { "sentence": "Entschuldigung, darf ich mal vorbei?", "translation": "不好意思，藉過一下。" },
          "usage_note": "請求讓路。",
          "image_file": "excuse_me_pass.png"
        },
        {
          "id": "greet-008",
          "term_zh": "我不懂",
          "related_terms": [
            { "term_target": "Ich verstehe nicht", "pronunciation": ["/ɪç fɛɐ̯ˈʃteːə nɪçt/"], "specific_note": "" }
          ],
          "example": { "sentence": "Entschuldigung, ich verstehe nicht.", "translation": "抱歉，我不懂。" },
          "usage_note": "Verstehen 是「理解/懂」。",
          "image_file": "dont_understand.png"
        },
        {
          "id": "greet-009",
          "term_zh": "這是什麼？",
          "related_terms": [
            { "term_target": "Was ist das?", "pronunciation": ["/vas ɪst das/"], "specific_note": "" }
          ],
          "example": { "sentence": "Was ist das? Ist das Essen?", "translation": "這是什麼？是食物嗎？" },
          "usage_note": "Das 指這個東西(中性)。",
          "image_file": "what_is_this.png"
        },
        {
          "id": "greet-010",
          "term_zh": "我想要這個",
          "related_terms": [
            { "term_target": "Ich möchte das", "pronunciation": ["/ɪç ˈmœçtə das/"], "specific_note": "想要(禮貌)" },
            { "term_target": "Ich will das", "pronunciation": ["/ɪç vɪl das/"], "specific_note": "我要(直接)" }
          ],
          "example": { "sentence": "Ich möchte das, bitte.", "translation": "麻煩我要這個。" },
          "usage_note": "Möchte 是 Mögen (喜歡) 的虛擬式，比 Will 禮貌。",
          "image_file": "i_want_this.png"
        },
        {
          "id": "greet-011",
          "term_zh": "請給我...",
          "related_terms": [
            { "term_target": "Ich hätte gerne...", "pronunciation": ["/ɪç ˈhɛtə ˈɡɛʁnə/"], "specific_note": "我想要...(點餐常用)" },
            { "term_target": "Geben Sie mir bitte...", "pronunciation": ["/ˈɡeːbn̩ ziː miːɐ̯ ˈbɪtə/"], "specific_note": "請給我..." }
          ],
          "example": { "sentence": "Ich hätte gerne Wasser.", "translation": "請給我水。" },
          "usage_note": "Ich hätte gerne 是最道地的點餐用語。",
          "image_file": "please_give_me.png"
        },
        {
          "id": "greet-012",
          "term_zh": "廁所在哪裡？",
          "related_terms": [
            { "term_target": "Wo ist die Toilette?", "pronunciation": ["/vo ɪst di toˈlɛtə/"], "specific_note": "" }
          ],
          "example": { "sentence": "Entschuldigung, wo ist die Toilette?", "translation": "不好意思，廁所在哪裡？" },
          "usage_note": "旅遊必備。",
          "image_file": "where_bathroom.png"
        },
        {
          "id": "greet-013",
          "term_zh": "多少錢？",
          "related_terms": [
            { "term_target": "Wie viel kostet das?", "pronunciation": ["/vi fiːl ˈkɔstət das/"], "specific_note": "這多少錢" },
            { "term_target": "Was kostet das?", "pronunciation": ["/vas ˈkɔstət das/"], "specific_note": "這要多少" }
          ],
          "example": { "sentence": "Wie viel kostet das?", "translation": "這多少錢？" },
          "usage_note": "Kosten 是花費。",
          "image_file": "how_much.png"
        },
        {
          "id": "greet-014",
          "term_zh": "請幫我",
          "related_terms": [
            { "term_target": "Helfen Sie mir bitte", "pronunciation": ["/ˈhɛlfn̩ ziː miːɐ̯ ˈbɪtə/"], "specific_note": "正式" },
            { "term_target": "Hilf mir bitte", "pronunciation": ["/hɪlf miːɐ̯ ˈbɪtə/"], "specific_note": "非正式" }
          ],
          "example": { "sentence": "Können Sie mir bitte helfen?", "translation": "能請您幫我嗎？" },
          "usage_note": "Helfen 是「幫助」。",
          "image_file": "help_me.png"
        },
        {
          "id": "greet-015",
          "term_zh": "你可以再說一次嗎？",
          "related_terms": [
            { "term_target": "Können Sie das wiederholen?", "pronunciation": ["/ˈkœnən ziː das viːdɐˈhoːlən/"], "specific_note": "正式" },
            { "term_target": "Wie bitte?", "pronunciation": ["/viː ˈbɪtə/"], "specific_note": "蛤？(請再說一次)" }
          ],
          "example": { "sentence": "Wie bitte? Ich habe nicht verstanden.", "translation": "請再說一次，我沒聽懂。" },
          "usage_note": "Wie bitte? 是最簡單常用的說法。",
          "image_file": "say_again.png"
        },
        {
          "id": "greet-016",
          "term_zh": "你可以講慢一點嗎？",
          "related_terms": [
            { "term_target": "Können Sie langsamer sprechen?", "pronunciation": ["/ˈkœnən ziː ˈlaŋzamɐ ˈʃpʁɛçn̩/"], "specific_note": "正式" }
          ],
          "example": { "sentence": "Bitte sprechen Sie langsamer.", "translation": "拜託請講慢一點。" },
          "usage_note": "Langsam 意思是「慢」。",
          "image_file": "speak_slowly.png"
        }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個/它", "related_terms": [{ "term_target": "das", "pronunciation": ["/das/"], "specific_note": "那個(指示代詞)" }, { "term_target": "es", "pronunciation": ["/ɛs/"], "specific_note": "它(中性代詞)" }], "example": {"sentence": "Was ist das?", "translation": "那是什麼？"}, "usage_note": "Das 可指代任何未知性別的事物。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "ich", "pronunciation": ["/ɪç/"], "specific_note": "" }], "example": {"sentence": "Ich bin Taiwaner.", "translation": "我是台灣人。"}, "usage_note": "第一人稱單數。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "du", "pronunciation": ["/duː/"], "specific_note": "非正式(朋友/家人)" }, { "term_target": "Sie", "pronunciation": ["/ziː/"], "specific_note": "正式(尊稱)" }], "example": {"sentence": "Wer bist du?", "translation": "你是誰？"}, "usage_note": "陌生人或長輩務必用 Sie (大寫)。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他", "related_terms": [{ "term_target": "er", "pronunciation": ["/eːɐ̯/"], "specific_note": "" }], "example": {"sentence": "Er ist mein Vater.", "translation": "他是我爸。"}, "usage_note": "男性。", "image_file": "he.png" },
        { "id": "pro-05", "term_zh": "他的", "related_terms": [{ "term_target": "sein", "pronunciation": ["/zaɪn/"], "specific_note": "" }], "example": {"sentence": "Sein Auto.", "translation": "他的車。"}, "usage_note": "需隨後面的名詞性別變化 (例如：Seine Mutter)。", "image_file": "his.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "wir", "pronunciation": ["/viːɐ̯/"], "specific_note": "" }], "example": {"sentence": "Wir sind Familie.", "translation": "我們是家人。"}, "usage_note": "第一人稱複數。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "她", "related_terms": [{ "term_target": "sie", "pronunciation": ["/ziː/"], "specific_note": "" }], "example": {"sentence": "Sie ist nett.", "translation": "她很親切。"}, "usage_note": "小寫 sie (句首除外)。", "image_file": "she.png" },
        { "id": "pro-08", "term_zh": "他們", "related_terms": [{ "term_target": "sie", "pronunciation": ["/ziː/"], "specific_note": "" }], "example": {"sentence": "Sie essen.", "translation": "他們在吃。"}, "usage_note": "小寫 sie，動詞變化為複數。", "image_file": "they.png" },
        { "id": "pro-09", "term_zh": "這個", "related_terms": [{ "term_target": "das", "pronunciation": ["/das/"], "specific_note": "代名詞" }, { "term_target": "dieser / diese / dieses", "pronunciation": ["/ˈdiːzɐ/"], "specific_note": "指示代詞(陽/陰/中)" }], "example": {"sentence": "Das ist meins.", "translation": "這是我的。"}, "usage_note": "泛指用 Das，特定用 Dieser/Diese/Dieses。", "image_file": "this.png" },
        { "id": "pro-10", "term_zh": "那個（指示詞）", "related_terms": [{ "term_target": "das", "pronunciation": ["/das/"], "specific_note": "代名詞" }, { "term_target": "jener / jene / jenes", "pronunciation": ["/ˈjeːnɐ/"], "specific_note": "指示代詞(較遠/書面)" }], "example": {"sentence": "Das ist ein Buch.", "translation": "那是一本書。"}, "usage_note": "口語常用 Das 指代那個。", "image_file": "that_obj.png" },
        { "id": "pro-11", "term_zh": "她的", "related_terms": [{ "term_target": "ihr", "pronunciation": ["/iːɐ̯/"], "specific_note": "" }], "example": {"sentence": "Ihre Tasche.", "translation": "她的包包。", }, "usage_note": "需隨後面的名詞性別變化。", "image_file": "her.png" },
        { "id": "pro-12", "term_zh": "你的", "related_terms": [{ "term_target": "dein", "pronunciation": ["/daɪn/"], "specific_note": "非正式" }, { "term_target": "Ihr", "pronunciation": ["/iːɐ̯/"], "specific_note": "正式(您的)" }], "example": {"sentence": "Dein Name.", "translation": "你的名字。"}, "usage_note": "您的 Ihr 需大寫。", "image_file": "your.png" },
        { "id": "pro-13", "term_zh": "他們的", "related_terms": [{ "term_target": "ihr", "pronunciation": ["/iːɐ̯/"], "specific_note": "" }], "example": {"sentence": "Ihr Haus.", "translation": "他們的家。"}, "usage_note": "小寫 ihr。", "image_file": "their.png" },
        { "id": "pro-14", "term_zh": "我們的", "related_terms": [{ "term_target": "unser", "pronunciation": ["/ˈʊnzɐ/"], "specific_note": "" }], "example": {"sentence": "Unsere Schule.", "translation": "我們的學校。"}, "usage_note": "需隨名詞性別變化。", "image_file": "our.png" },
        { "id": "pro-15", "term_zh": "這些", "related_terms": [{ "term_target": "diese", "pronunciation": ["/ˈdiːzə/"], "specific_note": "" }], "example": {"sentence": "Diese Bücher.", "translation": "這些書。"}, "usage_note": "複數。", "image_file": "these.png" },
        { "id": "pro-16", "term_zh": "那些", "related_terms": [{ "term_target": "jene", "pronunciation": ["/ˈjeːnə/"], "specific_note": "書面/遠處" }, { "term_target": "die", "pronunciation": ["/diː/"], "specific_note": "口語常用" }], "example": {"sentence": "Die da.", "translation": "那些(那邊的)。"}, "usage_note": "Die da 常用於口語指代那些。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "sein", "pronunciation": ["/zaɪn/"], "specific_note": "原形" }, { "term_target": "bin / bist / ist", "pronunciation": ["/bɪn/", "/bɪst/", "/ɪst/"], "specific_note": "變位" }], "example": {"sentence": "Ich bin Student.", "translation": "我是學生。"}, "usage_note": "不規則變化。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "haben", "pronunciation": ["/ˈhaːbn̩/"], "specific_note": "原形" }, { "term_target": "habe / hast / hat", "pronunciation": ["/ˈhaːbə/", "/hast/", "/hat/"], "specific_note": "變位" }], "example": {"sentence": "Ich habe Geld.", "translation": "我有錢。"}, "usage_note": "擁有。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "gehen", "pronunciation": ["/ˈɡeːən/"], "specific_note": "走路去" }, { "term_target": "fahren", "pronunciation": ["/ˈfaːʁən/"], "specific_note": "搭車/開車去" }], "example": {"sentence": "Ich gehe nach Hause.", "translation": "我回家。"}, "usage_note": "德文區分移動方式。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "bekommen", "pronunciation": ["/bəˈkɔmən/"], "specific_note": "得到/收到" }, { "term_target": "nehmen", "pronunciation": ["/ˈneːmən/"], "specific_note": "拿取" }], "example": {"sentence": "Einen Job bekommen.", "translation": "得到工作。"}, "usage_note": "Bekommen 是獲得。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "machen", "pronunciation": ["/ˈmaxn̩/"], "specific_note": "" }, { "term_target": "tun", "pronunciation": ["/tuːn/"], "specific_note": "" }], "example": {"sentence": "Hausaufgaben machen.", "translation": "做作業。"}, "usage_note": "Machen 最常用。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "sagen", "pronunciation": ["/ˈzaːɡn̩/"], "specific_note": "說出內容" }, { "term_target": "sprechen", "pronunciation": ["/ˈʃpʁɛçn̩/"], "specific_note": "講話/交談" }], "example": {"sentence": "Sag Hallo.", "translation": "說你好。"}, "usage_note": "Sagen 說出，Sprechen 講語言或對話。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "wissen", "pronunciation": ["/ˈvɪsn̩/"], "specific_note": "知識" }, { "term_target": "kennen", "pronunciation": ["/ˈkɛnən/"], "specific_note": "認識人/地" }], "example": {"sentence": "Ich weiß nicht.", "translation": "我不知道。"}, "usage_note": "區分知識與熟悉度。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "denken", "pronunciation": ["/ˈdɛŋkn̩/"], "specific_note": "" }, { "term_target": "glauben", "pronunciation": ["/ˈɡlaʊbn̩/"], "specific_note": "認為/相信" }], "example": {"sentence": "Ich denke schon.", "translation": "我想是的。"}, "usage_note": "思考。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "sehen", "pronunciation": ["/ˈzeːən/"], "specific_note": "" }], "example": {"sentence": "Ich sehe dich.", "translation": "我看到你。"}, "usage_note": "看。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "machen", "pronunciation": ["/ˈmaxn̩/"], "specific_note": "" }, { "term_target": "herstellen", "pronunciation": ["/ˈheːɐ̯ˌʃtɛlən/"], "specific_note": "生產" }], "example": {"sentence": "Kaffee machen.", "translation": "煮咖啡。"}, "usage_note": "日常多用 Machen。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "kommen", "pronunciation": ["/ˈkɔmən/"], "specific_note": "" }], "example": {"sentence": "Komm her.", "translation": "來這裡。"}, "usage_note": "過來。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "brauchen", "pronunciation": ["/ˈbʁaʊxn̩/"], "specific_note": "" }], "example": {"sentence": "Ich brauche Wasser.", "translation": "我需要水。"}, "usage_note": "需要。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "benutzen", "pronunciation": ["/bəˈnʊt͡sn̩/"], "specific_note": "" }, { "term_target": "verwenden", "pronunciation": ["/fɛɐ̯ˈvɛndn̩/"], "specific_note": "" }], "example": {"sentence": "Einen Stift benutzen.", "translation": "用筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "finden", "pronunciation": ["/ˈfɪndn̩/"], "specific_note": "" }], "example": {"sentence": "Arbeit finden.", "translation": "找工作。"}, "usage_note": "發現/覺得。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "geben", "pronunciation": ["/ˈɡeːbn̩/"], "specific_note": "" }], "example": {"sentence": "Gib mir das.", "translation": "給我那個。"}, "usage_note": "給予。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "sagen", "pronunciation": ["/ˈzaːɡn̩/"], "specific_note": "說" }, { "term_target": "erzählen", "pronunciation": ["/ɛɐ̯ˈt͡sɛːlən/"], "specific_note": "講述" }], "example": {"sentence": "Sag mir die Wahrheit.", "translation": "告訴我真相。"}, "usage_note": "告知。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "arbeiten", "pronunciation": ["/ˈaʁbaɪtn̩/"], "specific_note": "" }], "example": {"sentence": "Ich arbeite hier.", "translation": "我在這工作。"}, "usage_note": "勞動。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "mögen", "pronunciation": ["/ˈmøːɡn̩/"], "specific_note": "" }, { "term_target": "gefallen", "pronunciation": ["/ɡəˈfalən/"], "specific_note": "令人喜歡" }], "example": {"sentence": "Ich mag dich.", "translation": "我喜歡你。"}, "usage_note": "喜好。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "aufstehen", "pronunciation": ["/ˈaʊfˌʃteːən/"], "specific_note": "起身" }, { "term_target": "aufwachen", "pronunciation": ["/ˈaʊfˌvaxn̩/"], "specific_note": "醒來" }], "example": {"sentence": "Ich stehe um 7 Uhr auf.", "translation": "我七點起床。"}, "usage_note": "可分動詞 (auf-stehen)。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "sprechen", "pronunciation": ["/ˈʃpʁɛçn̩/"], "specific_note": "" }, { "term_target": "reden", "pronunciation": ["/ˈʁeːdn̩/"], "specific_note": "交談" }], "example": {"sentence": "Deutsch sprechen.", "translation": "說德文。"}, "usage_note": "講語言。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "hören", "pronunciation": ["/ˈhøːʁən/"], "specific_note": "" }, { "term_target": "zuhören", "pronunciation": ["/ˈt͡suːˌhøːʁən/"], "specific_note": "聆聽" }], "example": {"sentence": "Hörst du mich?", "translation": "聽得到我嗎？"}, "usage_note": "聽。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "schreiben", "pronunciation": ["/ˈʃʁaɪbn̩/"], "specific_note": "" }], "example": {"sentence": "Einen Namen schreiben.", "translation": "寫名字。"}, "usage_note": "書寫。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "lesen", "pronunciation": ["/ˈleːzn̩/"], "specific_note": "" }], "example": {"sentence": "Ein Buch lesen.", "translation": "看書。"}, "usage_note": "閱讀。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "warten", "pronunciation": ["/ˈvaʁtn̩/"], "specific_note": "" }], "example": {"sentence": "Warte auf mich.", "translation": "等我。"}, "usage_note": "等候。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "probieren", "pronunciation": ["/pʁoˈbiːʁən/"], "specific_note": "試吃/試做" }, { "term_target": "versuchen", "pronunciation": ["/fɛɐ̯ˈzuːxn̩/"], "specific_note": "企圖" }], "example": {"sentence": "Probier das.", "translation": "試試這個(食物)。"}, "usage_note": "試驗。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "bezahlen", "pronunciation": ["/bəˈt͡saːlən/"], "specific_note": "" }], "example": {"sentence": "Die Rechnung bezahlen.", "translation": "付帳單。"}, "usage_note": "支付。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "wählen", "pronunciation": ["/ˈvɛːlən/"], "specific_note": "" }, { "term_target": "aussuchen", "pronunciation": ["/ˈaʊsˌzuːxn̩/"], "specific_note": "挑選" }], "example": {"sentence": "Wähl eins.", "translation": "選一個。"}, "usage_note": "挑選。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "eintreten", "pronunciation": ["/ˈaɪnˌtʁeːtn̩/"], "specific_note": "進入(較正式)" }, { "term_target": "hereinkommen", "pronunciation": ["/hɛˈʁaɪnˌkɔmən/"], "specific_note": "進來" }], "example": {"sentence": "Bitte eintreten.", "translation": "請進。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "wohnen", "pronunciation": ["/ˈvoːnən/"], "specific_note": "居住" }, { "term_target": "leben", "pronunciation": ["/ˈleːbn̩/"], "specific_note": "生活" }], "example": {"sentence": "Ich wohne in Taipeh.", "translation": "我住台北。"}, "usage_note": "Wohnen(住址), Leben(生活在)。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "ankommen", "pronunciation": ["/ˈanˌkɔmən/"], "specific_note": "" }], "example": {"sentence": "Pünktlich ankommen.", "translation": "準時到達。"}, "usage_note": "可分動詞 (an-kommen)。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "gehen", "pronunciation": ["/ˈɡeːən/"], "specific_note": "走" }, { "term_target": "laufen", "pronunciation": ["/ˈlaʊfn̩/"], "specific_note": "走/跑" }], "example": {"sentence": "Zu Fuß gehen.", "translation": "走路去。"}, "usage_note": "步行。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "öffnen", "pronunciation": ["/ˈœfnən/"], "specific_note": "" }, { "term_target": "aufmachen", "pronunciation": ["/ˈaʊfˌmaxn̩/"], "specific_note": "口語" }], "example": {"sentence": "Die Tür öffnen.", "translation": "開門。"}, "usage_note": "開啟。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "schließen", "pronunciation": ["/ˈʃliːsn̩/"], "specific_note": "" }, { "term_target": "zumachen", "pronunciation": ["/ˈt͡suːˌmaxn̩/"], "specific_note": "口語" }], "example": {"sentence": "Das Fenster schließen.", "translation": "關窗。"}, "usage_note": "關上。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "helfen", "pronunciation": ["/ˈhɛlfn̩/"], "specific_note": "" }], "example": {"sentence": "Hilf mir.", "translation": "幫我。"}, "usage_note": "協助。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "bringen", "pronunciation": ["/ˈbʁɪŋən/"], "specific_note": "" }], "example": {"sentence": "Wasser bringen.", "translation": "帶水來。"}, "usage_note": "攜帶。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "需要", "related_terms": [{ "term_target": "brauchen", "pronunciation": ["/ˈbʁaʊxn̩/"], "specific_note": "" }], "example": {"sentence": "Ich brauche Wasser.", "translation": "我需要水。"}, "usage_note": "需要。", "image_file": "need.png" },
        { "id": "v-37", "term_zh": "使用", "related_terms": [{ "term_target": "benutzen", "pronunciation": ["/bəˈnʊt͡sn̩/"], "specific_note": "" }], "example": {"sentence": "Einen Stift benutzen.", "translation": "用筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-38", "term_zh": "變成", "related_terms": [{ "term_target": "werden", "pronunciation": ["/ˈveːɐ̯dn̩/"], "specific_note": "" }], "example": {"sentence": "Lehrer werden.", "translation": "變成老師。"}, "usage_note": "變化/將要。", "image_file": "become.png" },
        { "id": "v-39", "term_zh": "開始", "related_terms": [{ "term_target": "anfangen", "pronunciation": ["/ˈanˌfaŋən/"], "specific_note": "" }, { "term_target": "beginnen", "pronunciation": ["/bəˈɡɪnən/"], "specific_note": "" }], "example": {"sentence": "Jetzt anfangen.", "translation": "現在開始。"}, "usage_note": "可分 (an-fangen)。", "image_file": "start.png" },
        { "id": "v-40", "term_zh": "結束", "related_terms": [{ "term_target": "beenden", "pronunciation": ["/bəˈʔɛndn̩/"], "specific_note": "結束(某事)" }, { "term_target": "aufhören", "pronunciation": ["/ˈaʊfˌhøːʁən/"], "specific_note": "停止/結束" }], "example": {"sentence": "Die Arbeit beenden.", "translation": "工作結束。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-41", "term_zh": "停止", "related_terms": [{ "term_target": "stoppen", "pronunciation": ["/ˈstɔpn̩/"], "specific_note": "" }, { "term_target": "anhalten", "pronunciation": ["/ˈanˌhaltn̩/"], "specific_note": "停下" }], "example": {"sentence": "Hier stoppen.", "translation": "停在這裡。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-42", "term_zh": "記住", "related_terms": [{ "term_target": "sich erinnern", "pronunciation": ["/zɪç ɛɐ̯ˈʔɪnɐn/"], "specific_note": "回憶起" }, { "term_target": "merken", "pronunciation": ["/ˈmɛʁkn̩/"], "specific_note": "記住" }], "example": {"sentence": "Ich erinnere mich.", "translation": "我記得。"}, "usage_note": "反身動詞。", "image_file": "remember.png" },
        { "id": "v-43", "term_zh": "談話", "related_terms": [{ "term_target": "reden", "pronunciation": ["/ˈʁeːdn̩/"], "specific_note": "" }, { "term_target": "sprechen", "pronunciation": ["/ˈʃpʁɛçn̩/"], "specific_note": "" }], "example": {"sentence": "Mit Freunden reden.", "translation": "跟朋友聊天。"}, "usage_note": "交談。", "image_file": "talk.png" },
        { "id": "v-44", "term_zh": "見面", "related_terms": [{ "term_target": "treffen", "pronunciation": ["/ˈtʁɛfn̩/"], "specific_note": "" }], "example": {"sentence": "Freunde treffen.", "translation": "見朋友。"}, "usage_note": "會面。", "image_file": "meet.png" },
        { "id": "v-45", "term_zh": "乘坐（工具）", "related_terms": [{ "term_target": "nehmen", "pronunciation": ["/ˈneːmən/"], "specific_note": "搭乘/拿" }, { "term_target": "fahren mit", "pronunciation": ["/ˈfaːʁən mɪt/"], "specific_note": "搭乘..." }], "example": {"sentence": "Den Bus nehmen.", "translation": "搭公車。"}, "usage_note": "搭乘。", "image_file": "take.png" },
        { "id": "v-46", "term_zh": "放", "related_terms": [{ "term_target": "legen", "pronunciation": ["/ˈleːɡn̩/"], "specific_note": "平放" }, { "term_target": "stellen", "pronunciation": ["/ˈʃtɛlən/"], "specific_note": "豎放" }], "example": {"sentence": "Leg es hierhin.", "translation": "平放這裡。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-47", "term_zh": "吃", "related_terms": [{ "term_target": "essen", "pronunciation": ["/ˈɛsn̩/"], "specific_note": "" }], "example": {"sentence": "Mittagessen essen.", "translation": "吃午餐。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-48", "term_zh": "睡覺", "related_terms": [{ "term_target": "schlafen", "pronunciation": ["/ˈʃlaːfn̩/"], "specific_note": "" }], "example": {"sentence": "Ich gehe schlafen.", "translation": "我要去睡覺了。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-49", "term_zh": "寄送", "related_terms": [{ "term_target": "senden", "pronunciation": ["/ˈzɛndn̩/"], "specific_note": "" }, { "term_target": "schicken", "pronunciation": ["/ˈʃɪkn̩/"], "specific_note": "" }], "example": {"sentence": "Eine E-Mail senden.", "translation": "寄信。"}, "usage_note": "傳送。", "image_file": "send.png" },
        { "id": "v-50", "term_zh": "開車", "related_terms": [{ "term_target": "fahren", "pronunciation": ["/ˈfaːʁən/"], "specific_note": "" }], "example": {"sentence": "Auto fahren.", "translation": "開車。"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-51", "term_zh": "讀書", "related_terms": [{ "term_target": "lernen", "pronunciation": ["/ˈlɛʁnən/"], "specific_note": "學習" }, { "term_target": "studieren", "pronunciation": ["/ʃtuˈdiːʁən/"], "specific_note": "上大學/研究" }], "example": {"sentence": "Deutsch lernen.", "translation": "學德文。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-52", "term_zh": "回去", "related_terms": [{ "term_target": "zurückgehen", "pronunciation": ["/tsuˈʁʏkˌɡeːən/"], "specific_note": "" }], "example": {"sentence": "Nach Hause zurückgehen.", "translation": "回家。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "gut", "pronunciation": ["/ɡuːt/"], "specific_note": "" }], "example": {"sentence": "Gute Arbeit.", "translation": "做得好。"}, "usage_note": "正面。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "schlecht", "pronunciation": ["/ʃlɛçt/"], "specific_note": "" }], "example": {"sentence": "Schlechter Tag.", "translation": "壞的一天。"}, "usage_note": "負面。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "neu", "pronunciation": ["/nɔʏ/"], "specific_note": "" }], "example": {"sentence": "Neues Handy.", "translation": "新手機。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "erste", "pronunciation": ["/ˈeːɐ̯stə/"], "specific_note": "" }], "example": {"sentence": "Das erste Mal.", "translation": "第一次。"}, "usage_note": "順序。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "letzte", "pronunciation": ["/ˈlɛt͡stə/"], "specific_note": "最後的/上一個" }], "example": {"sentence": "Letzte Woche.", "translation": "上週。"}, "usage_note": "過去的。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "nächste", "pronunciation": ["/ˈnɛːçstə/"], "specific_note": "" }], "example": {"sentence": "Nächste Station.", "translation": "下一站。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "lang", "pronunciation": ["/laŋ/"], "specific_note": "" }], "example": {"sentence": "Langes Haar.", "translation": "長髮。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "groß", "pronunciation": ["/ɡʁoːs/"], "specific_note": "" }], "example": {"sentence": "Großes Haus.", "translation": "大房子。"}, "usage_note": "體積大。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "klein", "pronunciation": ["/klaɪn/"], "specific_note": "" }], "example": {"sentence": "Kleine Katze.", "translation": "小貓。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "viel", "pronunciation": ["/fiːl/"], "specific_note": "不可數" }, { "term_target": "viele", "pronunciation": ["/ˈfiːlə/"], "specific_note": "可數" }], "example": {"sentence": "Viele Leute.", "translation": "很多人。"}, "usage_note": "數量多。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "hoch", "pronunciation": ["/hoːx/"], "specific_note": "物體" }, { "term_target": "groß", "pronunciation": ["/ɡʁoːs/"], "specific_note": "人" }], "example": {"sentence": "Hohes Gebäude.", "translation": "高樓。"}, "usage_note": "高度。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "jung", "pronunciation": ["/jʊŋ/"], "specific_note": "" }], "example": {"sentence": "Junger Mann.", "translation": "年輕人。"}, "usage_note": "年紀小。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的", "related_terms": [{ "term_target": "alt", "pronunciation": ["/alt/"], "specific_note": "" }], "example": {"sentence": "Altes Buch.", "translation": "舊書。"}, "usage_note": "人或物皆可。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "nah", "pronunciation": ["/naː/"], "specific_note": "" }], "example": {"sentence": "In der Nähe.", "translation": "在這附近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "weit", "pronunciation": ["/vaɪt/"], "specific_note": "" }], "example": {"sentence": "Es ist weit.", "translation": "很遠。"}, "usage_note": "距離遠。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "schnell", "pronunciation": ["/ʃnɛl/"], "specific_note": "" }], "example": {"sentence": "Schnelles Auto.", "translation": "快車。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "langsam", "pronunciation": ["/ˈlaŋzam/"], "specific_note": "" }], "example": {"sentence": "Langsames Internet.", "translation": "網路慢。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "heiß", "pronunciation": ["/haɪs/"], "specific_note": "" }], "example": {"sentence": "Heißes Wasser.", "translation": "熱水。"}, "usage_note": "高溫。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "kalt", "pronunciation": ["/kalt/"], "specific_note": "" }], "example": {"sentence": "Kaltes Getränk.", "translation": "冷飲。"}, "usage_note": "低溫。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "sauber", "pronunciation": ["/ˈzaʊbɐ/"], "specific_note": "" }], "example": {"sentence": "Sauberes Zimmer.", "translation": "乾淨的房間。"}, "usage_note": "無髒汙。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "schmutzig", "pronunciation": ["/ˈʃmʊt͡sɪç/"], "specific_note": "" }], "example": {"sentence": "Schmutzige Hände.", "translation": "髒手。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "einfach", "pronunciation": ["/ˈaɪnfan/"], "specific_note": "" }], "example": {"sentence": "Es ist einfach.", "translation": "這很簡單。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "schwierig", "pronunciation": ["/ˈʃviːʁɪç/"], "specific_note": "" }], "example": {"sentence": "Es ist schwierig.", "translation": "很難。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "richtig", "pronunciation": ["/ˈʁɪçtɪç/"], "specific_note": "" }], "example": {"sentence": "Richtige Antwort.", "translation": "正確答案。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "falsch", "pronunciation": ["/falʃ/"], "specific_note": "" }], "example": {"sentence": "Das ist falsch.", "translation": "是錯的。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "wichtig", "pronunciation": ["/ˈvɪçtɪç/"], "specific_note": "" }], "example": {"sentence": "Wichtiger Termin.", "translation": "重要會議。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "anders", "pronunciation": ["/ˈandɐs/"], "specific_note": "" }, { "term_target": "verschieden", "pronunciation": ["/fɛɐ̯ˈʃiːdn̩/"], "specific_note": "各種/不同" }], "example": {"sentence": "Andere Farbe.", "translation": "不同顏色。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "echt", "pronunciation": ["/ɛçt/"], "specific_note": "真的" }, { "term_target": "wirklich", "pronunciation": ["/ˈvɪʁklɪç/"], "specific_note": "真實的" }], "example": {"sentence": "Echtes Gold.", "translation": "真金。"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "interessant", "pronunciation": ["/ɪntəʁɛˈsant/"], "specific_note": "有意思" }], "example": {"sentence": "Interessantes Buch.", "translation": "有趣的書。"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "schön", "pronunciation": ["/ʃøːn/"], "specific_note": "" }], "example": {"sentence": "Schöne Blume.", "translation": "美麗的花。"}, "usage_note": "形容人或景物。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "billig", "pronunciation": ["/ˈbɪlɪç/"], "specific_note": "" }, { "term_target": "günstig", "pronunciation": ["/ˈɡʏnstɪç/"], "specific_note": "划算" }], "example": {"sentence": "Es ist billig.", "translation": "這很便宜。"}, "usage_note": "價格低。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "teuer", "pronunciation": ["/ˈtɔʏɐ/"], "specific_note": "" }], "example": {"sentence": "Zu teuer.", "translation": "太貴了。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "hungrig", "pronunciation": ["/ˈhʊŋʁɪç/"], "specific_note": "" }], "example": {"sentence": "Ich habe Hunger.", "translation": "我餓了(我有飢餓)。"}, "usage_note": "名詞用法較常見。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "müde", "pronunciation": ["/ˈmyːdə/"], "specific_note": "" }], "example": {"sentence": "Ich bin müde.", "translation": "我累了。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "beschäftigt", "pronunciation": ["/bəˈʃɛftɪçt/"], "specific_note": "" }], "example": {"sentence": "Ich bin beschäftigt.", "translation": "我很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "glücklich", "pronunciation": ["/ˈɡlʏklɪç/"], "specific_note": "幸福/快樂" }, { "term_target": "froh", "pronunciation": ["/fʁoː/"], "specific_note": "高興" }], "example": {"sentence": "Frohes Fest.", "translation": "佳節愉快。"}, "usage_note": "心情。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "traurig", "pronunciation": ["/ˈtʁaʊʁɪç/"], "specific_note": "" }], "example": {"sentence": "Traurige Geschichte.", "translation": "悲傷的故事。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "ähnlich", "pronunciation": ["/ˈɛːnlɪç/"], "specific_note": "" }], "example": {"sentence": "Sie sehen ähnlich aus.", "translation": "他們看起來很像。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "berühmt", "pronunciation": ["/bəˈʁyːmt/"], "specific_note": "" }], "example": {"sentence": "Berühmter Schauspieler.", "translation": "知名演員。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "ausländisch", "pronunciation": ["/ˈaʊsˌlɛndɪʃ/"], "specific_note": "" }], "example": {"sentence": "Ausland.", "translation": "外國。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "klug", "pronunciation": ["/kluːk/"], "specific_note": "聰明" }, { "term_target": "intelligent", "pronunciation": ["/ɪntɛliˈɡɛnt/"], "specific_note": "智能高" }], "example": {"sentence": "Kluges Kind.", "translation": "聰明的孩子。"}, "usage_note": "腦袋好。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "gefährlich", "pronunciation": ["/ɡəˈfɛːɐ̯lɪç/"], "specific_note": "" }], "example": {"sentence": "Es ist gefährlich.", "translation": "這很危險。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "nett", "pronunciation": ["/nɛt/"], "specific_note": "人好" }, { "term_target": "freundlich", "pronunciation": ["/ˈfʁɔʏntlɪç/"], "specific_note": "友善" }], "example": {"sentence": "Netter Mensch.", "translation": "好人。"}, "usage_note": "友善。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "alle", "pronunciation": ["/ˈalə/"], "specific_note": "所有" }, { "term_target": "jeder", "pronunciation": ["/ˈjeːdɐ/"], "specific_note": "每一個" }], "example": {"sentence": "Den ganzen Tag.", "translation": "整天。"}, "usage_note": "全部。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "Lieblings-", "pronunciation": ["/ˈliːplɪŋs/"], "specific_note": "前綴" }], "example": {"sentence": "Lieblingsessen.", "translation": "最愛的食物。"}, "usage_note": "前綴詞 (如 Lieblingsbuch)。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "lecker", "pronunciation": ["/ˈlɛkɐ/"], "specific_note": "" }], "example": {"sentence": "Leckeres Essen.", "translation": "美味的食物。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "Zeit", "pronunciation": ["/t͡saɪt/"], "specific_note": "陰性" }], "example": {"sentence": "Keine Zeit.", "translation": "沒時間。"}, "usage_note": "時刻/時間。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "Leute", "pronunciation": ["/ˈlɔʏtə/"], "specific_note": "複數" }, { "term_target": "Menschen", "pronunciation": ["/ˈmɛnʃn̩/"], "specific_note": "人類" }], "example": {"sentence": "Viele Leute.", "translation": "很多人。"}, "usage_note": "泛指人。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "Geld", "pronunciation": ["/ɡɛlt/"], "specific_note": "中性" }], "example": {"sentence": "Kein Geld.", "translation": "沒錢。"}, "usage_note": "不可數。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "Kind", "pronunciation": ["/kɪnt/"], "specific_note": "中性" }], "example": {"sentence": "Kleines Kind.", "translation": "小孩。"}, "usage_note": "兒童。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "Wasser", "pronunciation": ["/ˈvasɐ/"], "specific_note": "中性" }], "example": {"sentence": "Wasser trinken.", "translation": "喝水。"}, "usage_note": "中性 (Das Wasser)。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "Essen", "pronunciation": ["/ˈɛsn̩/"], "specific_note": "中性" }], "example": {"sentence": "Leckeres Essen.", "translation": "好吃的食物。"}, "usage_note": "泛指食物。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "Freund", "pronunciation": ["/fʁɔʏnt/"], "specific_note": "陽性" }], "example": {"sentence": "Mein Freund.", "translation": "我朋友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "Familie", "pronunciation": ["faˈmiːli̯ə/"], "specific_note": "陰性" }], "example": {"sentence": "Große Familie.", "translation": "大家庭。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "Student", "pronunciation": ["/ʃtuˈdɛnt/"], "specific_note": "大學生(陽)" }, { "term_target": "Schüler", "pronunciation": ["/ˈʃyːlɐ/"], "specific_note": "中小學生(陽)" }], "example": {"sentence": "Ich bin Student.", "translation": "我是學生。"}, "usage_note": "在學者。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "Kultur", "pronunciation": ["kʊlˈtuːɐ̯/"], "specific_note": "陰性" }], "example": {"sentence": "Deutsche Kultur.", "translation": "德國文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "Problem", "pronunciation": ["pʁoˈbleːm/"], "specific_note": "中性" }], "example": {"sentence": "Kein Problem.", "translation": "沒問題。"}, "usage_note": "難題。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "Firma", "pronunciation": ["/ˈfɪʁma/"], "specific_note": "陰性" }], "example": {"sentence": "Große Firma.", "translation": "大公司。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "Mann", "pronunciation": ["/man/"], "specific_note": "陽性" }], "example": {"sentence": "Er ist ein Mann.", "translation": "他是男人。"}, "usage_note": "性別。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "Frau", "pronunciation": ["/fʁaʊ/"], "specific_note": "陰性" }], "example": {"sentence": "Sie ist eine Frau.", "translation": "她是女人。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "Schule", "pronunciation": ["/ˈʃuːlə/"], "specific_note": "陰性" }], "example": {"sentence": "Zur Schule gehen.", "translation": "去學校。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "Lehrer", "pronunciation": ["/ˈleːʁɐ/"], "specific_note": "陽性" }], "example": {"sentence": "Deutschlehrer.", "translation": "德文老師。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "Film", "pronunciation": ["/fɪlm/"], "specific_note": "陽性" }], "example": {"sentence": "Film schauen.", "translation": "看電影。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "Handy", "pronunciation": ["/ˈhɛndi/"], "specific_note": "中性" }], "example": {"sentence": "Mein Handy.", "translation": "我手機。"}, "usage_note": "電話。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "Computer", "pronunciation": ["kɔmˈpjuːtɐ/"], "specific_note": "陽性" }], "example": {"sentence": "Computer benutzen.", "translation": "用電腦。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "Auto", "pronunciation": ["/ˈaʊto/"], "specific_note": "中性" }], "example": {"sentence": "Auto fahren.", "translation": "開車。"}, "usage_note": "汽車。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "Markt", "pronunciation": ["/maʁkt/"], "specific_note": "陽性" }], "example": {"sentence": "Zum Markt.", "translation": "去市場。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "Kleidung", "pronunciation": ["/ˈklaɪdʊŋ/"], "specific_note": "陰性" }], "example": {"sentence": "Kleidung kaufen.", "translation": "買衣服。"}, "usage_note": "衣物。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "Geschäft", "pronunciation": ["/ɡəˈʃɛft/"], "specific_note": "中性" }, { "term_target": "Laden", "pronunciation": ["/ˈlaːdn̩/"], "specific_note": "陽性" }], "example": {"sentence": "Ins Geschäft.", "translation": "進店裡。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "Bus", "pronunciation": ["/bʊs/"], "specific_note": "陽性" }], "example": {"sentence": "Bus nehmen.", "translation": "搭公車。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "Straße", "pronunciation": ["/ˈʃtʁaːsə/"], "specific_note": "陰性" }], "example": {"sentence": "Auf der Straße.", "translation": "在街上。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "Haus", "pronunciation": ["/haʊs/"], "specific_note": "中性" }], "example": {"sentence": "Mein Haus.", "translation": "我家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "Mutter", "pronunciation": ["/ˈmʊtɐ/"], "specific_note": "陰性" }], "example": {"sentence": "Meine Mutter.", "translation": "我媽媽。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "Vater", "pronunciation": ["/ˈfaːtɐ/"], "specific_note": "陽性" }], "example": {"sentence": "Mein Vater.", "translation": "我爸爸。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "Bruder", "pronunciation": ["/ˈbʁuːdɐ/"], "specific_note": "陽性" }], "example": {"sentence": "Mein Bruder.", "translation": "我兄弟。"}, "usage_note": "兄弟。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "Schwester", "pronunciation": ["/ˈʃvɛstɐ/"], "specific_note": "陰性" }], "example": {"sentence": "Meine Schwester.", "translation": "我姐妹。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "Chinesisch", "pronunciation": ["çiˈneːzɪʃ/"], "specific_note": "中性" }], "example": {"sentence": "Chinesisch sprechen.", "translation": "說中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "Morgen", "pronunciation": ["/ˈmɔʁɡn̩/"], "specific_note": "陽性" }], "example": {"sentence": "Am Morgen.", "translation": "在早晨。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "Nacht", "pronunciation": ["/naxt/"], "specific_note": "陰性" }], "example": {"sentence": "Gute Nacht.", "translation": "晚安。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "Ticket", "pronunciation": ["/ˈtɪkɪt/"], "specific_note": "中性" }, { "term_target": "Fahrkarte", "pronunciation": ["/ˈfaːɐ̯ˌkaʁtə/"], "specific_note": "陰性" }], "example": {"sentence": "Ein Ticket, bitte.", "translation": "請給我一張票。"}, "usage_note": "票。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "Tasche", "pronunciation": ["/ˈtaʃə/"], "specific_note": "陰性" }], "example": {"sentence": "Große Tasche.", "translation": "大包包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "Tasse", "pronunciation": ["/ˈtasə/"], "specific_note": "陰性(有把手)" }, { "term_target": "Becher", "pronunciation": ["/ˈbɛçɐ/"], "specific_note": "陽性(無把手)" }], "example": {"sentence": "Tasse Tee.", "translation": "一杯茶。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "Arzt", "pronunciation": ["/aːɐ̯t͡st/"], "specific_note": "陽性" }], "example": {"sentence": "Zum Arzt gehen.", "translation": "看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "Polizei", "pronunciation": ["/poliˈt͡saɪ/"], "specific_note": "陰性" }], "example": {"sentence": "Polizei rufen.", "translation": "叫警察。"}, "usage_note": "警察。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "Krankenhaus", "pronunciation": ["/ˈkʁaŋkn̩ˌhaʊs/"], "specific_note": "中性" }], "example": {"sentence": "Ins Krankenhaus.", "translation": "去醫院。"}, "usage_note": "醫療院所。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "Sitzplatz", "pronunciation": ["/ˈzɪt͡sˌplat͡s/"], "specific_note": "陽性" }], "example": {"sentence": "Platz nehmen.", "translation": "請坐。"}, "usage_note": "位子。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "Tür", "pronunciation": ["/tyːɐ̯/"], "specific_note": "陰性" }], "example": {"sentence": "Tür öffnen.", "translation": "開門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "Zimmer", "pronunciation": ["/ˈt͡sɪmɐ/"], "specific_note": "中性" }], "example": {"sentence": "Mein Zimmer.", "translation": "我房間。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "Bahnhof", "pronunciation": ["/ˈbaːnhoːf/"], "specific_note": "陽性" }], "example": {"sentence": "Zum Bahnhof.", "translation": "去車站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "U-Bahn", "pronunciation": ["/ˈuːbaːn/"], "specific_note": "陰性" }], "example": {"sentence": "U-Bahn Station.", "translation": "地鐵站。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "Zug", "pronunciation": ["/t͡suːk/"], "specific_note": "陽性" }], "example": {"sentence": "Zug fahren.", "translation": "搭火車。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "Flughafen", "pronunciation": ["/ˈfluːkhaːfn̩/"], "specific_note": "陽性" }], "example": {"sentence": "Zum Flughafen.", "translation": "去機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "Gepäck", "pronunciation": ["/ɡəˈpɛk/"], "specific_note": "中性" }], "example": {"sentence": "Viel Gepäck.", "translation": "很多行李。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "Karte", "pronunciation": ["/ˈkaʁtə/"], "specific_note": "陰性" }], "example": {"sentence": "Auf die Karte schauen.", "translation": "看地圖。"}, "usage_note": "指引。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "Schalter", "pronunciation": ["/ˈʃaltɐ/"], "specific_note": "陽性" }], "example": {"sentence": "Am Schalter.", "translation": "在櫃檯。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "Lobby", "pronunciation": ["/ˈlɔbi/"], "specific_note": "陰性" }], "example": {"sentence": "In der Lobby.", "translation": "在大廳。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "Reservierung", "pronunciation": ["/ʁezɛʁˈviːʁʊŋ/"], "specific_note": "陰性" }], "example": {"sentence": "Habe Reservierung.", "translation": "有預約。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "Check-in", "pronunciation": ["/tʃɛk ˈɪn/"], "specific_note": "陽性" }], "example": {"sentence": "Zum Check-in.", "translation": "辦理入住。"}, "usage_note": "Check-in。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "Check-out", "pronunciation": ["/tʃɛk ˈaʊt/"], "specific_note": "陽性" }], "example": {"sentence": "Check-out Zeit.", "translation": "退房時間。"}, "usage_note": "Check-out。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "Getränk", "pronunciation": ["/ɡəˈtʁɛŋk/"], "specific_note": "中性" }], "example": {"sentence": "Kaltes Getränk.", "translation": "冷飲。"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "Speisekarte", "pronunciation": ["/ˈʃpaɪzəˌkaʁtə/"], "specific_note": "陰性" }], "example": {"sentence": "Die Karte, bitte.", "translation": "請給菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "Mittagessen", "pronunciation": ["/ˈmɪtaːkˌʔɛsn̩/"], "specific_note": "中性" }], "example": {"sentence": "Zum Mittagessen.", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "Abendessen", "pronunciation": ["/ˈaːbn̩tˌʔɛsn̩/"], "specific_note": "中性" }], "example": {"sentence": "Zum Abendessen.", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "Rechnung", "pronunciation": ["/ˈʁɛçnʊŋ/"], "specific_note": "陰性" }], "example": {"sentence": "Die Rechnung, bitte.", "translation": "麻煩結帳。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "Preis", "pronunciation": ["/pʁaɪs/"], "specific_note": "陽性" }], "example": {"sentence": "Guter Preis.", "translation": "好價格。"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "Quittung", "pronunciation": ["/ˈkvɪtʊŋ/"], "specific_note": "陰性" }], "example": {"sentence": "Die Quittung, bitte.", "translation": "請給收據。"}, "usage_note": "證明。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "Größe", "pronunciation": ["/ˈɡʁøːsə/"], "specific_note": "陰性" }], "example": {"sentence": "Große Größe.", "translation": "大尺寸。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "Eingang", "pronunciation": ["/ˈaɪnˌɡaŋ/"], "specific_note": "陽性" }], "example": {"sentence": "Wo ist der Eingang?", "translation": "入口在哪？"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "Ausgang", "pronunciation": ["/ˈaʊsˌɡaŋ/"], "specific_note": "陽性" }], "example": {"sentence": "Hier ist der Ausgang.", "translation": "出口在這。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "Taiwan", "pronunciation": ["/taɪˈvaːn/"], "specific_note": "中性" }], "example": {"sentence": "Ich mag Taiwan.", "translation": "我愛台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "台灣人", "related_terms": [{ "term_target": "Taiwaner", "pronunciation": ["/taɪˈvaːnɐ/"], "specific_note": "陽性" }, { "term_target": "Taiwanerin", "pronunciation": ["/taɪˈvaːnəʁɪn/"], "specific_note": "陰性" }], "example": {"sentence": "Ich bin Taiwaner.", "translation": "我是台灣人。"}, "usage_note": "國籍。", "image_file": "taiwanese.png" },
        { "id": "n-66", "term_zh": "一切事物", "related_terms": [{ "term_target": "Alles", "pronunciation": ["/ˈaləs/"], "specific_note": "" }], "example": {"sentence": "Alles ist gut.", "translation": "一切都好。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-67", "term_zh": "錢包", "related_terms": [{ "term_target": "Geldbeutel", "pronunciation": ["/ˈɡɛltˌbɔʏtl̩/"], "specific_note": "陽性" }], "example": {"sentence": "Geldbeutel verloren.", "translation": "掉了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-68", "term_zh": "身分證", "related_terms": [{ "term_target": "Ausweis", "pronunciation": ["/ˈaʊsˌvaɪs/"], "specific_note": "陽性" }], "example": {"sentence": "Ausweis zeigen.", "translation": "出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-69", "term_zh": "護照", "related_terms": [{ "term_target": "Reisepass", "pronunciation": ["/ˈʁaɪzəˌpas/"], "specific_note": "陽性" }], "example": {"sentence": "Reisepass zeigen.", "translation": "出示護照。"}, "usage_note": "出國必備。", "image_file": "passport.png" },
        { "id": "n-70", "term_zh": "餐廳", "related_terms": [{ "term_target": "Restaurant", "pronunciation": ["/ʁɛstoˈʁã/"], "specific_note": "中性" }], "example": {"sentence": "Gutes Restaurant.", "translation": "好餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-71", "term_zh": "飯店", "related_terms": [{ "term_target": "Hotel", "pronunciation": ["hoˈtɛl/"], "specific_note": "中性" }], "example": {"sentence": "Hotel buchen.", "translation": "訂飯店。"}, "usage_note": "住宿。", "image_file": "hotel.png" },
        { "id": "n-72", "term_zh": "場所", "related_terms": [{ "term_target": "Ort", "pronunciation": ["/ɔʁt/"], "specific_note": "陽性" }, { "term_target": "Platz", "pronunciation": ["/plat͡s/"], "specific_note": "陽性(廣場/位子)" }], "example": {"sentence": "Schöner Ort.", "translation": "好地方。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-73", "term_zh": "用品店員", "related_terms": [{ "term_target": "Verkäufer", "pronunciation": ["/fɛɐ̯ˈkɔʏfɐ/"], "specific_note": "陽性" }], "example": {"sentence": "Verkäufer fragen.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-74", "term_zh": "超市", "related_terms": [{ "term_target": "Supermarkt", "pronunciation": ["/ˈzuːpɐˌmaʁkt/"], "specific_note": "陽性" }], "example": {"sentence": "Zum Supermarkt.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-75", "term_zh": "月台", "related_terms": [{ "term_target": "Gleis", "pronunciation": ["/ɡlaɪs/"], "specific_note": "中性" }], "example": {"sentence": "Gleis 1.", "translation": "第一月台。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    }
  ]
}