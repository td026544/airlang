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
        { "id": "pro-11", "term_zh": "她的", "related_terms": [{ "term_target": "ihr", "pronunciation": ["/iːɐ̯/"], "specific_note": "" }], "example": {"sentence": "Ihre Tasche.", "translation": "她的包包。"}, "usage_note": "需隨後面的名詞性別變化。", "image_file": "her.png" },
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
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "Geschäft", "pronunciation": ["/ɡəˈʃɛft/"], "specific_note": "中性" }, { "term_target": "Laden", "pronunciation": ["/ˈlaːdn̩/"], "specific_note": "陽性" }], "example": {"sentence": "Ins Geschäft.", "translation": "進店裡。"}, "usage_note": "Das Geschäft / Der Laden。", "image_file": "shop.png" },
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
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "Tasse", "pronunciation": ["/ˈtasə/"], "specific_note": "陰性(有把手)" }, { "term_target": "Becher", "pronunciation": ["/ˈbɛçɐ/"], "specific_note": "陽性(無把手)" }], "example": {"sentence": "Tasse Tee.", "translation": "一杯茶。"}, "usage_note": "Die Tasse / Der Becher。", "image_file": "cup.png" },
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
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "Getränk", "pronunciation": ["/ɡəˈtʁɛŋk/"], "specific_note": "中性" }], "example": {"sentence": "Kaltes Getränk.", "translation": "冷飲。"}, "usage_note": "中性 (Das Getränk)。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "Speisekarte", "pronunciation": ["/ˈʃpaɪzəˌkaʁtə/"], "specific_note": "陰性" }], "example": {"sentence": "Die Karte, bitte.", "translation": "請給菜單。"}, "usage_note": "陰性 (Die Speisekarte)。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "Mittagessen", "pronunciation": ["/ˈmɪtaːkˌʔɛsn̩/"], "specific_note": "中性" }], "example": {"sentence": "Zum Mittagessen.", "translation": "吃午餐。"}, "usage_note": "中性 (Das Mittagessen)。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "Abendessen", "pronunciation": ["/ˈaːbn̩tˌʔɛsn̩/"], "specific_note": "中性" }], "example": {"sentence": "Zum Abendessen.", "translation": "吃晚餐。"}, "usage_note": "中性 (Das Abendessen)。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "Rechnung", "pronunciation": ["/ˈʁɛçnʊŋ/"], "specific_note": "陰性" }], "example": {"sentence": "Die Rechnung, bitte.", "translation": "麻煩結帳。"}, "usage_note": "陰性 (Die Rechnung)。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "Preis", "pronunciation": ["/pʁaɪs/"], "specific_note": "陽性" }], "example": {"sentence": "Guter Preis.", "translation": "好價格。"}, "usage_note": "陽性 (Der Preis)。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "Quittung", "pronunciation": ["/ˈkvɪtʊŋ/"], "specific_note": "陰性" }], "example": {"sentence": "Die Quittung, bitte.", "translation": "請給收據。"}, "usage_note": "陰性 (Die Quittung)。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "Größe", "pronunciation": ["/ˈɡʁøːsə/"], "specific_note": "陰性" }], "example": {"sentence": "Große Größe.", "translation": "大尺寸。"}, "usage_note": "陰性 (Die Größe)。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "Eingang", "pronunciation": ["/ˈaɪnˌɡaŋ/"], "specific_note": "陽性" }], "example": {"sentence": "Wo ist der Eingang?", "translation": "入口在哪？"}, "usage_note": "陽性 (Der Eingang)。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "Ausgang", "pronunciation": ["/ˈaʊsˌɡaŋ/"], "specific_note": "陽性" }], "example": {"sentence": "Hier ist der Ausgang.", "translation": "出口在這。"}, "usage_note": "陽性 (Der Ausgang)。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "Taiwan", "pronunciation": ["/taɪˈvaːn/"], "specific_note": "中性" }], "example": {"sentence": "Ich mag Taiwan.", "translation": "我愛台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "台灣人", "related_terms": [{ "term_target": "Taiwaner", "pronunciation": ["/taɪˈvaːnɐ/"], "specific_note": "陽性" }, { "term_target": "Taiwanerin", "pronunciation": ["/taɪˈvaːnəʁɪn/"], "specific_note": "陰性" }], "example": {"sentence": "Ich bin Taiwaner.", "translation": "我是台灣人。"}, "usage_note": "國籍。", "image_file": "taiwanese.png" },
        { "id": "n-66", "term_zh": "一切事物", "related_terms": [{ "term_target": "Alles", "pronunciation": ["/ˈaləs/"], "specific_note": "" }], "example": {"sentence": "Alles ist gut.", "translation": "一切都好。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-67", "term_zh": "錢包", "related_terms": [{ "term_target": "Geldbeutel", "pronunciation": ["/ˈɡɛltˌbɔʏtl̩/"], "specific_note": "陽性" }], "example": {"sentence": "Geldbeutel verloren.", "translation": "掉了錢包。"}, "usage_note": "陽性 (Der Geldbeutel)。", "image_file": "wallet.png" },
        { "id": "n-68", "term_zh": "身分證", "related_terms": [{ "term_target": "Ausweis", "pronunciation": ["/ˈaʊsˌvaɪs/"], "specific_note": "陽性" }], "example": {"sentence": "Ausweis zeigen.", "translation": "出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-69", "term_zh": "護照", "related_terms": [{ "term_target": "Reisepass", "pronunciation": ["/ˈʁaɪzəˌpas/"], "specific_note": "陽性" }], "example": {"sentence": "Reisepass zeigen.", "translation": "出示護照。"}, "usage_note": "出國必備。", "image_file": "passport.png" },
        { "id": "n-70", "term_zh": "餐廳", "related_terms": [{ "term_target": "Restaurant", "pronunciation": ["/ʁɛstoˈʁã/"], "specific_note": "中性" }], "example": {"sentence": "Gutes Restaurant.", "translation": "好餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-71", "term_zh": "飯店", "related_terms": [{ "term_target": "Hotel", "pronunciation": ["hoˈtɛl/"], "specific_note": "中性" }], "example": {"sentence": "Hotel buchen.", "translation": "訂飯店。"}, "usage_note": "住宿。", "image_file": "hotel.png" },
        { "id": "n-72", "term_zh": "場所", "related_terms": [{ "term_target": "Ort", "pronunciation": ["/ɔʁt/"], "specific_note": "陽性" }, { "term_target": "Platz", "pronunciation": ["/plat͡s/"], "specific_note": "陽性(廣場/位子)" }], "example": {"sentence": "Schöner Ort.", "translation": "好地方。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-73", "term_zh": "用品店員", "related_terms": [{ "term_target": "Verkäufer", "pronunciation": ["/fɛɐ̯ˈkɔʏfɐ/"], "specific_note": "陽性" }], "example": {"sentence": "Verkäufer fragen.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-74", "term_zh": "超市", "related_terms": [{ "term_target": "Supermarkt", "pronunciation": ["/ˈzuːpɐˌmaʁkt/"], "specific_note": "陽性" }], "example": {"sentence": "Zum Supermarkt.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-75", "term_zh": "月台", "related_terms": [{ "term_target": "Gleis", "pronunciation": ["/ɡlaɪs/"], "specific_note": "中性" }], "example": {"sentence": "Gleis 1.", "translation": "第一月台。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "Jetzt", "pronunciation": ["/jɛt͡st/"], "specific_note": "" }], "example": {"sentence": "Mach es jetzt.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "Sehr", "pronunciation": ["/zeːɐ̯/"], "specific_note": "" }], "example": {"sentence": "Sehr gut.", "translation": "非常好。"}, "usage_note": "強調。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "Wirklich", "pronunciation": ["/ˈvɪʁklɪç/"], "specific_note": "" }], "example": {"sentence": "Wirklich?", "translation": "真的嗎？"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "Gut", "pronunciation": ["/ɡuːt/"], "specific_note": "" }], "example": {"sentence": "Schlaf gut.", "translation": "睡個好覺。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "Oft", "pronunciation": ["/ɔft/"], "specific_note": "" }], "example": {"sentence": "Ich komme oft.", "translation": "我常來。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "Normalerweise", "pronunciation": ["/nɔʁˈmaːləˌvaɪzə/"], "specific_note": "" }], "example": {"sentence": "Normalerweise um 6.", "translation": "通常在六點。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "Schon", "pronunciation": ["/ʃoːn/"], "specific_note": "" }, { "term_target": "Bereits", "pronunciation": ["/bəˈʁaɪt͡s/"], "specific_note": "正式" }], "example": {"sentence": "Schon fertig.", "translation": "已經做好了。"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "Nur", "pronunciation": ["/nuːɐ̯/"], "specific_note": "" }], "example": {"sentence": "Nur einer.", "translation": "只有一個。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "Noch einmal", "pronunciation": ["/nɔx ˈaɪnmaːl/"], "specific_note": "" }, { "term_target": "Wieder", "pronunciation": ["/ˈviːdɐ/"], "specific_note": "又" }], "example": {"sentence": "Versuch es noch einmal.", "translation": "再試一次。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "Ungefähr", "pronunciation": ["/ˈʊnɡəˌfɛːɐ̯/"], "specific_note": "" }, { "term_target": "Etwa", "pronunciation": ["/ˈɛtva/"], "specific_note": "" }], "example": {"sentence": "Ungefähr 10 Minuten.", "translation": "大約10分鐘。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "Ein bisschen", "pronunciation": ["/aɪn ˈbɪsçən/"], "specific_note": "" }], "example": {"sentence": "Ein bisschen scharf.", "translation": "一點點辣。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "Auch", "pronunciation": ["/aʊx/"], "specific_note": "" }], "example": {"sentence": "Ich auch.", "translation": "我也是。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "Vielleicht", "pronunciation": ["/fiˈlaɪçt/"], "specific_note": "" }], "example": {"sentence": "Vielleicht später.", "translation": "也許等下。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "Später", "pronunciation": ["/ˈʃpɛːtɐ/"], "specific_note": "稍後" }, { "term_target": "Danach", "pronunciation": ["/daˈnaːx/"], "specific_note": "然後" }], "example": {"sentence": "Bis später.", "translation": "待會見。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "Bald", "pronunciation": ["/balt/"], "specific_note": "" }], "example": {"sentence": "Bis bald.", "translation": "待會見(很快見)。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "Zusammen", "pronunciation": ["/t͡suˈzamən/"], "specific_note": "" }, { "term_target": "Gemeinsam", "pronunciation": ["/ɡəˈmaɪnzaːm/"], "specific_note": "共同" }], "example": {"sentence": "Zusammen gehen.", "translation": "一起去。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "Immer noch", "pronunciation": ["/ˈɪmɐ nɔx/"], "specific_note": "" }, { "term_target": "Noch", "pronunciation": ["/nɔx/"], "specific_note": "還" }], "example": {"sentence": "Immer noch hier.", "translation": "還在這裡。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "Allgemein", "pronunciation": ["/alɡəˈmaɪn/"], "specific_note": "" }, { "term_target": "In der Regel", "pronunciation": ["/ɪn deːɐ̯ ˈʁeːɡl̩/"], "specific_note": "通常" }], "example": {"sentence": "Allgemein gesagt.", "translation": "一般來說。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "Sofort", "pronunciation": ["/zoˈfɔʁt/"], "specific_note": "" }], "example": {"sentence": "Komm sofort.", "translation": "立刻來。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "Auch nicht", "pronunciation": ["/aʊx nɪçt/"], "specific_note": "" }, { "term_target": "Weder ... noch ...", "pronunciation": ["/ˈveːdɐ ... nɔx/"], "specific_note": "既不...也不..." }], "example": {"sentence": "Ich auch nicht.", "translation": "我也不。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "Was", "pronunciation": ["/vas/"], "specific_note": "" }], "example": {"sentence": "Was ist das?", "translation": "這是什麼？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "Wie", "pronunciation": ["/viː/"], "specific_note": "" }], "example": {"sentence": "Wie geht es dir?", "translation": "你好嗎？"}, "usage_note": "問狀況。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "Wann", "pronunciation": ["/van/"], "specific_note": "" }], "example": {"sentence": "Wann gehen wir?", "translation": "何時去？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "Wo", "pronunciation": ["/voː/"], "specific_note": "在哪裡" }, { "term_target": "Wohin", "pronunciation": ["/voˈhɪn/"], "specific_note": "去哪裡(方向)" }], "example": {"sentence": "Wo bist du?", "translation": "你在哪？"}, "usage_note": "Wo(靜態)，Wohin(動態)。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "Wer", "pronunciation": ["/veːɐ̯/"], "specific_note": "" }], "example": {"sentence": "Wer ist das?", "translation": "那是誰？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "Warum", "pronunciation": ["/vaˈʁʊm/"], "specific_note": "" }], "example": {"sentence": "Warum?", "translation": "為什麼？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "Welcher / Welche / Welches", "pronunciation": ["/ˈvɛlçɐ/", "/ˈvɛlçə/", "/ˈvɛlçəs/"], "specific_note": "m/f/n" }], "example": {"sentence": "Welches?", "translation": "哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "Wie viel", "pronunciation": ["/viː fiːl/"], "specific_note": "不可數" }, { "term_target": "Wie viele", "pronunciation": ["/viː ˈfiːlə/"], "specific_note": "可數" }], "example": {"sentence": "Wie viel kostet das?", "translation": "多少錢？"}, "usage_note": "問數量/價格。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "Wie lange", "pronunciation": ["/viː ˈlaŋə/"], "specific_note": "" }], "example": {"sentence": "Wie lange?", "translation": "要多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "Jetzt", "pronunciation": ["/jɛt͡st/"], "specific_note": "" }], "example": {"sentence": "Mach es jetzt.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "Heute", "pronunciation": ["/ˈhɔʏtə/"], "specific_note": "" }], "example": {"sentence": "Heute ist es warm.", "translation": "今天很熱。"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "Morgen", "pronunciation": ["/ˈmɔʁɡn̩/"], "specific_note": "" }], "example": {"sentence": "Bis morgen.", "translation": "明天見。"}, "usage_note": "隔天(小寫morgen)。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "Gestern", "pronunciation": ["/ˈɡɛstɐn/"], "specific_note": "" }], "example": {"sentence": "Gestern war ich da.", "translation": "昨天我去了。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "Hier", "pronunciation": ["/hiːɐ̯/"], "specific_note": "" }], "example": {"sentence": "Komm her.", "translation": "來這。"}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "Dort", "pronunciation": ["/dɔʁt/"], "specific_note": "" }, { "term_target": "Da", "pronunciation": ["/daː/"], "specific_note": "那裡(指著)" }], "example": {"sentence": "Geh dort hin.", "translation": "去那。"}, "usage_note": "遠處。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "Tag", "pronunciation": ["/taːk/"], "specific_note": "m." }], "example": {"sentence": "Ein Tag.", "translation": "一天。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "Jahr", "pronunciation": ["/jaːɐ̯/"], "specific_note": "n." }], "example": {"sentence": "Dieses Jahr.", "translation": "今年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "Monat", "pronunciation": ["/ˈmoːnat/"], "specific_note": "m." }], "example": {"sentence": "Diesen Monat.", "translation": "這個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "Woche", "pronunciation": ["/ˈvɔxə/"], "specific_note": "f." }], "example": {"sentence": "Nächste Woche.", "translation": "下週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "Morgen", "pronunciation": ["/ˈmɔʁɡn̩/"], "specific_note": "m." }], "example": {"sentence": "Am Morgen.", "translation": "在早上。"}, "usage_note": "上午 (大寫)。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "Nachmittag", "pronunciation": ["/ˈnaːxˌmɪtaːk/"], "specific_note": "m." }], "example": {"sentence": "Am Nachmittag.", "translation": "下午。"}, "usage_note": "PM。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "Abend", "pronunciation": ["/ˈaːbn̩t/"], "specific_note": "m. (晚間)" }, { "term_target": "Nacht", "pronunciation": ["/naxt/"], "specific_note": "f. (夜晚/睡覺)" }], "example": {"sentence": "Gute Nacht.", "translation": "晚安。"}, "usage_note": "傍晚到睡前用 Abend。", "image_file": "night.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "Mittag", "pronunciation": ["/ˈmɪtaːk/"], "specific_note": "m." }], "example": {"sentence": "Am Mittag.", "translation": "在中午。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "Vorne", "pronunciation": ["/ˈfɔʁnə/"], "specific_note": "副詞" }, { "term_target": "Vor", "pronunciation": ["/foːɐ̯/"], "specific_note": "介系詞" }], "example": {"sentence": "Da vorne.", "translation": "在前面。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "Hinten", "pronunciation": ["/ˈhɪntn̩/"], "specific_note": "副詞" }, { "term_target": "Hinter", "pronunciation": ["/ˈhɪntɐ/"], "specific_note": "介系詞" }], "example": {"sentence": "Da hinten.", "translation": "在後面。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "Links", "pronunciation": ["/lɪŋks/"], "specific_note": "" }], "example": {"sentence": "Nach links.", "translation": "左轉。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "Rechts", "pronunciation": ["/ʁɛçt͡s/"], "specific_note": "" }], "example": {"sentence": "Nach rechts.", "translation": "右轉。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "Neben", "pronunciation": ["/ˈneːbn̩/"], "specific_note": "" }], "example": {"sentence": "Neben mir.", "translation": "在我旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "Gegenüber", "pronunciation": ["/ɡeːɡn̩ˈʔyːbɐ/"], "specific_note": "" }], "example": {"sentence": "Gegenüber der Bank.", "translation": "銀行對面。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "Frühling", "pronunciation": ["/ˈfʁyːlɪŋ/"], "specific_note": "m." }], "example": {"sentence": "Der Frühling.", "translation": "春天。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "Sommer", "pronunciation": ["/ˈzɔmɐ/"], "specific_note": "m." }], "example": {"sentence": "Heißer Sommer.", "translation": "炎熱的夏天。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "Herbst", "pronunciation": ["/hɛʁpst/"], "specific_note": "m." }], "example": {"sentence": "Kühler Herbst.", "translation": "涼爽的秋天。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "Winter", "pronunciation": ["/ˈvɪntɐ/"], "specific_note": "m." }], "example": {"sentence": "Kalter Winter.", "translation": "寒冷的冬天。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "Null", "pronunciation": ["/nʊl/"], "specific_note": "" }], "example": {"sentence": "Null Grad.", "translation": "零度。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "Eins", "pronunciation": ["/aɪns/"], "specific_note": "" }], "example": {"sentence": "Eine Minute.", "translation": "一分鐘(Eine 陰性)。"}, "usage_note": "一。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "Zwei", "pronunciation": ["/t͡svaɪ/"], "specific_note": "" }], "example": {"sentence": "Zwei Tage.", "translation": "兩天。"}, "usage_note": "二。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "Drei", "pronunciation": ["/dʁaɪ/"], "specific_note": "" }], "example": {"sentence": "Drei Personen.", "translation": "三人。"}, "usage_note": "三。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "Vier", "pronunciation": ["/fiːɐ̯/"], "specific_note": "" }], "example": {"sentence": "Vier Jahreszeiten.", "translation": "四季。"}, "usage_note": "四。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "Fünf", "pronunciation": ["/fʏnf/"], "specific_note": "" }], "example": {"sentence": "Fünf Euro.", "translation": "五歐元。"}, "usage_note": "五。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "Sechs", "pronunciation": ["/zɛks/"], "specific_note": "" }], "example": {"sentence": "Sechs Stunden.", "translation": "六小時。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "Sieben", "pronunciation": ["/ˈziːbn̩/"], "specific_note": "" }], "example": {"sentence": "Sieben Tage.", "translation": "七天。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "Acht", "pronunciation": ["/axt/"], "specific_note": "" }], "example": {"sentence": "Acht Jahre.", "translation": "八歲。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "Neun", "pronunciation": ["/nɔʏn/"], "specific_note": "" }], "example": {"sentence": "Neun Uhr.", "translation": "九點。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "Zehn", "pronunciation": ["/t͡seːn/"], "specific_note": "" }], "example": {"sentence": "Zehn Euro.", "translation": "十歐元。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "Elf", "pronunciation": ["/ɛlf/"], "specific_note": "" }], "example": {"sentence": "Elf Jahre.", "translation": "11歲。"}, "usage_note": "十一。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "Zwölf", "pronunciation": ["/t͡svœlf/"], "specific_note": "" }], "example": {"sentence": "Zwölf Monate.", "translation": "12個月。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "Fünfzehn", "pronunciation": ["/ˈfʏnft͡seːn/"], "specific_note": "" }], "example": {"sentence": "Fünfzehn Minuten.", "translation": "15分鐘。"}, "usage_note": "十五。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "Zwanzig", "pronunciation": ["/ˈt͡svant͡sɪç/"], "specific_note": "" }], "example": {"sentence": "Zwanzig Euro.", "translation": "20歐元。"}, "usage_note": "二十。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "Fünfzig", "pronunciation": ["/ˈfʏnft͡sɪç/"], "specific_note": "" }], "example": {"sentence": "Fünfzig Prozent.", "translation": "50%。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "Hundert", "pronunciation": ["/ˈhʊndɐt/"], "specific_note": "" }], "example": {"sentence": "Hundert Punkte.", "translation": "一百分。"}, "usage_note": "百。", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "Tausend", "pronunciation": ["/ˈtaʊzn̩t/"], "specific_note": "" }], "example": {"sentence": "Tausend Dank.", "translation": "萬分感謝。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "Zehntausend", "pronunciation": ["/ˈt͡seːnˌtaʊzn̩t/"], "specific_note": "" }], "example": {"sentence": "Zehntausend Euro.", "translation": "一萬歐元。"}, "usage_note": "一萬。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是/覺得～", "related_terms": [{ "term_target": "Ich bin...", "pronunciation": ["/ɪç bɪn/"], "specific_note": "" }], "example": {"sentence": "Ich bin Student.", "translation": "我是學生。"}, "usage_note": "本質/身分。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫～", "related_terms": [{ "term_target": "Ich heiße...", "pronunciation": ["/ɪç ˈhaɪsə/"], "specific_note": "" }, { "term_target": "Mein Name ist...", "pronunciation": ["/maɪn ˈnaːmə ɪst/"], "specific_note": "" }], "example": {"sentence": "Ich heiße Hans.", "translation": "我叫漢斯。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做～", "related_terms": [{ "term_target": "Ich mache...", "pronunciation": ["/ɪç ˈmaxə/"], "specific_note": "" }], "example": {"sentence": "Ich mache Hausaufgaben.", "translation": "我做功課。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做～", "related_terms": [{ "term_target": "Ich (verbo)... gerade", "pronunciation": ["/ɪç ... ɡəˈʁaːdə/"], "specific_note": "" }], "example": {"sentence": "Ich esse gerade.", "translation": "我正在吃。"}, "usage_note": "加 gerade 表示正在。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠～", "related_terms": [{ "term_target": "Ich kann...", "pronunciation": ["/ɪç kan/"], "specific_note": "" }], "example": {"sentence": "Ich kann schwimmen.", "translation": "我會游泳。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做～", "related_terms": [{ "term_target": "Ich mag...", "pronunciation": ["/ɪç maːk/"], "specific_note": "" }], "example": {"sentence": "Ich mag lesen.", "translation": "我喜歡閱讀。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經～", "related_terms": [{ "term_target": "Ich war...", "pronunciation": ["/ɪç vaːɐ̯/"], "specific_note": "狀態" }], "example": {"sentence": "Ich war Student.", "translation": "我曾經是學生。"}, "usage_note": "過去狀態 (Präteritum)。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過～", "related_terms": [{ "term_target": "Ich habe ... gemacht", "pronunciation": ["/ɪç haːbə ... ɡəˈmaxt/"], "specific_note": "" }], "example": {"sentence": "Ich habe Hausaufgaben gemacht.", "translation": "我做了功課。"}, "usage_note": "過去動作 (Perfekt)。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過～", "related_terms": [{ "term_target": "Ich habe schon...", "pronunciation": ["/ɪç haːbə ʃoːn/"], "specific_note": "" }], "example": {"sentence": "Ich habe schon gegessen.", "translation": "我已經吃過了。"}, "usage_note": "完成式。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過～", "related_terms": [{ "term_target": "Ich war schon mal in...", "pronunciation": ["/ɪç vaːɐ̯ ʃoːn maːl ɪn/"], "specific_note": "" }], "example": {"sentence": "Ich war schon mal in Deutschland.", "translation": "我曾去過德國。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算～", "related_terms": [{ "term_target": "Ich werde...", "pronunciation": ["/ɪç veːɐ̯də/"], "specific_note": "將要" }, { "term_target": "Ich habe vor...", "pronunciation": ["/ɪç haːbə foːɐ̯/"], "specific_note": "計劃" }], "example": {"sentence": "Ich werde gehen.", "translation": "我將要去。"}, "usage_note": "未來式。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是～嗎？", "related_terms": [{ "term_target": "Bist du...?", "pronunciation": ["/bɪst duː/"], "specific_note": "非正式" }, { "term_target": "Sind Sie...?", "pronunciation": ["/zɪnt ziː/"], "specific_note": "正式" }], "example": {"sentence": "Bist du Student?", "translation": "你是學生嗎？"}, "usage_note": "問狀態。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做～嗎？", "related_terms": [{ "term_target": "Machst du...?", "pronunciation": ["/maxst duː/"], "specific_note": "" }], "example": {"sentence": "Machst du Sport?", "translation": "你有運動嗎？"}, "usage_note": "一般疑問句。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經～嗎？", "related_terms": [{ "term_target": "Hast du schon mal...?", "pronunciation": ["/hast duː ʃoːn maːl/"], "specific_note": "" }], "example": {"sentence": "Hast du das schon mal gesehen?", "translation": "你有看過這個嗎？"}, "usage_note": "問經驗。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做（某事）？", "related_terms": [{ "term_target": "Wann...?", "pronunciation": ["/van/"], "specific_note": "" }], "example": {"sentence": "Wann schläfst du?", "translation": "你何時睡？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去（某地）？", "related_terms": [{ "term_target": "Wann gehst du zu...?", "pronunciation": ["/van geːst duː tsu/"], "specific_note": "" }], "example": {"sentence": "Wann gehst du zur Schule?", "translation": "你何時去學校？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做（某事）？", "related_terms": [{ "term_target": "Wo...?", "pronunciation": ["/voː/"], "specific_note": "" }], "example": {"sentence": "Wo wohnst du?", "translation": "你住哪裡？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做（某事）？", "related_terms": [{ "term_target": "Wie...?", "pronunciation": ["/viː/"], "specific_note": "" }], "example": {"sentence": "Wie machst du das?", "translation": "你怎麼做這個？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去（某地）？", "related_terms": [{ "term_target": "Wie kommst du zu...?", "pronunciation": ["/viː kɔmst duː tsu/"], "specific_note": "" }], "example": {"sentence": "Wie kommst du zur Schule?", "translation": "你怎麼去學校？"}, "usage_note": "問交通方式。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是～", "related_terms": [{ "term_target": "Ich bin kein...", "pronunciation": ["/ɪç bɪn kaɪn/"], "specific_note": "否定名詞" }, { "term_target": "Ich bin nicht...", "pronunciation": ["/ɪç bɪn nɪçt/"], "specific_note": "否定形容詞" }], "example": {"sentence": "Ich bin kein Arzt.", "translation": "我不是醫生。"}, "usage_note": "否定名詞用 Kein。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做～", "related_terms": [{ "term_target": "Ich (verbo) nicht", "pronunciation": ["/ɪç ... nɪçt/"], "specific_note": "" }], "example": {"sentence": "Ich rauche nicht.", "translation": "我不抽菸。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能～", "related_terms": [{ "term_target": "Ich kann nicht...", "pronunciation": ["/ɪç kan nɪçt/"], "specific_note": "" }], "example": {"sentence": "Ich kann nicht gehen.", "translation": "我不能去。"}, "usage_note": "否定能力。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾～", "related_terms": [{ "term_target": "Ich habe noch nie...", "pronunciation": ["/ɪç haːbə nɔx niː/"], "specific_note": "" }], "example": {"sentence": "Ich habe das noch nie gegessen.", "translation": "我沒吃過這個。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必～", "related_terms": [{ "term_target": "Ich muss nicht...", "pronunciation": ["/ɪç mʊs nɪçt/"], "specific_note": "" }], "example": {"sentence": "Ich muss nicht gehen.", "translation": "我不必去。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果～的話，就～", "related_terms": [{ "term_target": "Wenn..., (dann)...", "pronunciation": ["/vɛn ... dan/"], "specific_note": "" }], "example": {"sentence": "Wenn du willst, gehen wir.", "translation": "如果你想，我們走。",}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當～時，就～", "related_terms": [{ "term_target": "Wenn...", "pronunciation": ["/vɛn/"], "specific_note": "現在/未來/重複" }, { "term_target": "Als...", "pronunciation": ["/als/"], "specific_note": "過去發生一次" }], "example": {"sentence": "Wenn ich esse, bin ich glücklich.", "translation": "當我吃東西時，我很開心。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你～", "related_terms": [{ "term_target": "Kannst du...?", "pronunciation": ["/kanst duː/"], "specific_note": "非正式" }, { "term_target": "Können Sie...?", "pronunciation": ["/kœnən ziː/"], "specific_note": "正式" }], "example": {"sentence": "Kannst du mir helfen?", "translation": "可以幫我嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做～吧！", "related_terms": [{ "term_target": "Lass uns...", "pronunciation": ["/las ʊns/"], "specific_note": "" }], "example": {"sentence": "Lass uns gehen.", "translation": "我們走吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為～", "related_terms": [{ "term_target": "Ich denke...", "pronunciation": ["/ɪç dɛŋkə/"], "specific_note": "" }], "example": {"sentence": "Ich denke, es ist gut.", "translation": "我認為這很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做～", "related_terms": [{ "term_target": "Ich will...", "pronunciation": ["/ɪç vɪl/"], "specific_note": "直接" }, { "term_target": "Ich möchte...", "pronunciation": ["/ɪç ˈmœçtə/"], "specific_note": "禮貌" }], "example": {"sentence": "Ich will gehen.", "translation": "我想去。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做～", "related_terms": [{ "term_target": "Ich muss...", "pronunciation": ["/ɪç mʊs/"], "specific_note": "" }], "example": {"sentence": "Ich muss arbeiten.", "translation": "我必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "Es ist ... zu (infinitiv)", "pronunciation": ["/ɛs ɪst ... tsu/"], "specific_note": "" }], "example": {"sentence": "Es ist gut zu essen.", "translation": "吃東西是很好的。"}, "usage_note": "描述動作。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我…嗎？", "related_terms": [{ "term_target": "Kannst du mir helfen...?", "pronunciation": ["/kanst duː miːɐ̯ ˈhɛlfn̩/"], "specific_note": "" }], "example": {"sentence": "Kannst du mir beim Putzen helfen?", "translation": "你可以幫我打掃嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以…嗎？", "related_terms": [{ "term_target": "Darf ich...?", "pronunciation": ["/daʁf ɪç/"], "specific_note": "" }], "example": {"sentence": "Darf ich reinkommen?", "translation": "我可以進來嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡…", "related_terms": [{ "term_target": "Ich mag ... nicht", "pronunciation": ["/ɪç maːk ... nɪçt/"], "specific_note": "" }], "example": {"sentence": "Ich mag das nicht.", "translation": "我不喜歡這個。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡…", "related_terms": [{ "term_target": "Ich bevorzuge...", "pronunciation": ["/ɪç bəˈfoːɐ̯t͡suːɡə/"], "specific_note": "" }], "example": {"sentence": "Ich bevorzuge Tee.", "translation": "我比較喜歡茶。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更…", "related_terms": [{ "term_target": "A ist ...er als B", "pronunciation": ["/a ɪst ...ɐ als be/"], "specific_note": "" }], "example": {"sentence": "Das ist teurer als das.", "translation": "這比那個貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有…（存在）", "related_terms": [{ "term_target": "Es gibt...", "pronunciation": ["/ɛs ɡiːpt/"], "specific_note": "" }], "example": {"sentence": "Es gibt einen Hund.", "translation": "有一隻狗。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}