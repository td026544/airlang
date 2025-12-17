import { AppData } from '../types';

export const russianData: AppData ={
  "meta": {
    "source_language": "zh-TW",
    "target_language": "ru-RU",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 俄文完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)"
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
            { "term_target": "Здравствуйте", "pronunciation": ["/ˈzdravstvʊjtʲɪ/"], "specific_note": "正式/通用" },
            { "term_target": "Привет", "pronunciation": ["/prʲɪˈvʲet/"], "specific_note": "非正式/朋友" }
          ],
          "example": { "sentence": "Здравствуйте, как дела?", "translation": "你好，你好嗎？" },
          "usage_note": "對長輩或陌生人務必用 Здравствуйте。",
          "image_file": "hello.png"
        },
        {
          "id": "greet-002",
          "term_zh": "再見",
          "related_terms": [
            { "term_target": "До свидания", "pronunciation": ["/də svʲɪˈdanʲɪjə/"], "specific_note": "正式" },
            { "term_target": "Пока", "pronunciation": ["/pɐˈka/"], "specific_note": "非正式" }
          ],
          "example": { "sentence": "До свидания, до скорого.", "translation": "再見，待會見。" },
          "usage_note": "朋友間常用 Пока。",
          "image_file": "goodbye.png"
        },
        {
          "id": "greet-003",
          "term_zh": "謝謝你",
          "related_terms": [
            { "term_target": "Спасибо", "pronunciation": ["/spɐˈsʲibə/"], "specific_note": "通用" },
            { "term_target": "Большое спасибо", "pronunciation": ["/bɐlʲˈʂojə spɐˈsʲibə/"], "specific_note": "非常感謝" }
          ],
          "example": { "sentence": "Большое спасибо за помощь.", "translation": "非常謝謝你的幫忙。" },
          "usage_note": "回應可用 Пожалуйста (不客氣)。",
          "image_file": "thank_you.png"
        },
        {
          "id": "greet-004",
          "term_zh": "對不起",
          "related_terms": [
            { "term_target": "Извините", "pronunciation": ["/ɪzvʲɪˈnʲitʲɪ/"], "specific_note": "正式/藉過" },
            { "term_target": "Простите", "pronunciation": ["/prɐˈstʲitʲɪ/"], "specific_note": "原諒我" }
          ],
          "example": { "sentence": "Извините, я опоздал.", "translation": "對不起，我遲到了。" },
          "usage_note": "Извините 萬用，也可用於「不好意思」。",
          "image_file": "sorry.png"
        },
        {
          "id": "greet-005",
          "term_zh": "早安",
          "related_terms": [
            { "term_target": "Доброе утро", "pronunciation": ["/ˈdobrəjə ˈutrə/"], "specific_note": "" }
          ],
          "example": { "sentence": "Доброе утро, мама.", "translation": "早安，媽。" },
          "usage_note": "通常用於午餐前。",
          "image_file": "good_morning.png"
        },
        {
          "id": "greet-006",
          "term_zh": "請問...",
          "related_terms": [
            { "term_target": "Извините", "pronunciation": ["/ɪzvʲɪˈnʲitʲɪ/"], "specific_note": "引起注意" },
            { "term_target": "Скажите, пожалуйста", "pronunciation": ["/skɐˈʐɨtʲɪ pɐˈʐaɫstə/"], "specific_note": "請問(請告訴我)" }
          ],
          "example": { "sentence": "Скажите, пожалуйста, где туалет?", "translation": "請問，廁所在哪裡？" },
          "usage_note": "問路時常用 Скажите, пожалуйста。",
          "image_file": "excuse_me.png"
        },
        {
          "id": "greet-007",
          "term_zh": "借過",
          "related_terms": [
            { "term_target": "Разрешите пройти", "pronunciation": ["/rəzrʲɪˈʂɨtʲɪ prɐjˈtʲi/"], "specific_note": "允許我通過" },
            { "term_target": "Извините", "pronunciation": ["/ɪzvʲɪˈnʲitʲɪ/"], "specific_note": "通用" }
          ],
          "example": { "sentence": "Извините, разрешите пройти.", "translation": "不好意思，藉過一下。" },
          "usage_note": "請求讓路。",
          "image_file": "excuse_me_pass.png"
        },
        {
          "id": "greet-008",
          "term_zh": "我不懂",
          "related_terms": [
            { "term_target": "Я не понимаю", "pronunciation": ["/ja nʲɪ pənʲɪˈmaju/"], "specific_note": "" }
          ],
          "example": { "sentence": "Извините, я не понимаю по-русски.", "translation": "抱歉，我不懂俄文。" },
          "usage_note": "Понимать 是「理解/懂」。",
          "image_file": "dont_understand.png"
        },
        {
          "id": "greet-009",
          "term_zh": "這是什麼？",
          "related_terms": [
            { "term_target": "Что это?", "pronunciation": ["/ʃto ˈɛtə/"], "specific_note": "" }
          ],
          "example": { "sentence": "Что это? Это еда?", "translation": "這是什麼？是食物嗎？" },
          "usage_note": "指著東西問。",
          "image_file": "what_is_this.png"
        },
        {
          "id": "greet-010",
          "term_zh": "我想要這個",
          "related_terms": [
            { "term_target": "Я хочу это", "pronunciation": ["/ja xɐˈtɕu ˈɛtə/"], "specific_note": "直接" },
            { "term_target": "Можно мне это", "pronunciation": ["/ˈmoʐnə mnʲe ˈɛtə/"], "specific_note": "禮貌(可以給我這個嗎)" }
          ],
          "example": { "sentence": "Я хочу это, пожалуйста.", "translation": "麻煩我要這個。" },
          "usage_note": "Можно мне... 是非常道地的請求方式。",
          "image_file": "i_want_this.png"
        },
        {
          "id": "greet-011",
          "term_zh": "請給我...",
          "related_terms": [
            { "term_target": "Дайте мне, пожалуйста...", "pronunciation": ["/ˈdajtʲɪ mnʲe pɐˈʐaɫstə/"], "specific_note": "正式" }
          ],
          "example": { "sentence": "Дайте мне воды, пожалуйста.", "translation": "請給我水。" },
          "usage_note": "Дать (給) 的命令式 + мне (我)。",
          "image_file": "please_give_me.png"
        },
        {
          "id": "greet-012",
          "term_zh": "廁所在哪裡？",
          "related_terms": [
            { "term_target": "Где туалет?", "pronunciation": ["/gdʲe tʊɐˈlʲet/"], "specific_note": "" }
          ],
          "example": { "sentence": "Извините, где туалет?", "translation": "不好意思，廁所在哪裡？" },
          "usage_note": "旅遊必備。",
          "image_file": "where_bathroom.png"
        },
        {
          "id": "greet-013",
          "term_zh": "多少錢？",
          "related_terms": [
            { "term_target": "Сколько стоит?", "pronunciation": ["/ˈskolʲkə ˈstoɪt/"], "specific_note": "" }
          ],
          "example": { "sentence": "Сколько это стоит?", "translation": "這多少錢？" },
          "usage_note": "購物用語。",
          "image_file": "how_much.png"
        },
        {
          "id": "greet-014",
          "term_zh": "請幫我",
          "related_terms": [
            { "term_target": "Помогите мне, пожалуйста", "pronunciation": ["/pəmɐˈgʲitʲɪ mnʲe pɐˈʐaɫstə/"], "specific_note": "正式" }
          ],
          "example": { "sentence": "Помогите мне с багажом.", "translation": "請幫我拿行李。" },
          "usage_note": "Помочь 是「幫助」。",
          "image_file": "help_me.png"
        },
        {
          "id": "greet-015",
          "term_zh": "你可以再說一次嗎？",
          "related_terms": [
            { "term_target": "Повторите, пожалуйста", "pronunciation": ["/pəftɐˈrʲitʲɪ pɐˈʐaɫstə/"], "specific_note": "正式" }
          ],
          "example": { "sentence": "Я не услышал, повторите, пожалуйста.", "translation": "沒聽到，能再說一次嗎？" },
          "usage_note": "Повторить 是「重複」。",
          "image_file": "say_again.png"
        },
        {
          "id": "greet-016",
          "term_zh": "你可以講慢一點嗎？",
          "related_terms": [
            { "term_target": "Говорите медленнее, пожалуйста", "pronunciation": ["/gəvɐˈrʲitʲɪ ˈmʲedlʲɪnːɪje pɐˈʐaɫstə/"], "specific_note": "" }
          ],
          "example": { "sentence": "Пожалуйста, говорите медленнее.", "translation": "拜託講慢一點。" },
          "usage_note": "Медленно 意思是「慢」。",
          "image_file": "speak_slowly.png"
        }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個/它", "related_terms": [{ "term_target": "это", "pronunciation": ["/ˈɛtə/"], "specific_note": "這個/那個" }, { "term_target": "то", "pronunciation": ["/to/"], "specific_note": "那個(遠)" }], "example": {"sentence": "Что это?", "translation": "那是什麼？"}, "usage_note": "Это 是最常用的指示代詞。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "я", "pronunciation": ["/ja/"], "specific_note": "" }], "example": {"sentence": "Я из Тайваня.", "translation": "我來自台灣。"}, "usage_note": "第一人稱。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "ты", "pronunciation": ["/tɨ/"], "specific_note": "非正式" }, { "term_target": "вы", "pronunciation": ["/vɨ/"], "specific_note": "正式/尊稱/複數" }], "example": {"sentence": "Кто ты?", "translation": "你是誰？"}, "usage_note": "陌生人或長輩建議用 Вы。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他", "related_terms": [{ "term_target": "он", "pronunciation": ["/on/"], "specific_note": "" }], "example": {"sentence": "Он мой отец.", "translation": "他是我爸。"}, "usage_note": "男性及陽性名詞。", "image_file": "he.png" },
        { "id": "pro-05", "term_zh": "她的", "related_terms": [{ "term_target": "её", "pronunciation": ["/jɪˈjo/"], "specific_note": "" }], "example": {"sentence": "Её сумка.", "translation": "她的包包。"}, "usage_note": "所有格。", "image_file": "her.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "мы", "pronunciation": ["/mɨ/"], "specific_note": "" }], "example": {"sentence": "Мы семья.", "translation": "我們是家人。"}, "usage_note": "第一人稱複數。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "她", "related_terms": [{ "term_target": "она", "pronunciation": ["/ɐˈna/"], "specific_note": "" }], "example": {"sentence": "Она красивая.", "translation": "她很漂亮。"}, "usage_note": "女性及陰性名詞。", "image_file": "she.png" },
        { "id": "pro-08", "term_zh": "他們", "related_terms": [{ "term_target": "они", "pronunciation": ["/ɐˈnʲi/"], "specific_note": "" }], "example": {"sentence": "Они едят.", "translation": "他們在吃。"}, "usage_note": "第三人稱複數。", "image_file": "they.png" },
        { "id": "pro-09", "term_zh": "這個", "related_terms": [{ "term_target": "этот", "pronunciation": ["/ˈɛtət/"], "specific_note": "陽性" }, { "term_target": "эта", "pronunciation": ["/ˈɛtə/"], "specific_note": "陰性" }, { "term_target": "это", "pronunciation": ["/ˈɛtə/"], "specific_note": "中性/通用" }], "example": {"sentence": "Это мое.", "translation": "這是我的。"}, "usage_note": "需隨名詞性別變化。", "image_file": "this.png" },
        { "id": "pro-10", "term_zh": "那個（指示詞）", "related_terms": [{ "term_target": "тот", "pronunciation": ["/tot/"], "specific_note": "陽性" }, { "term_target": "та", "pronunciation": ["/ta/"], "specific_note": "陰性" }, { "term_target": "то", "pronunciation": ["/to/"], "specific_note": "中性" }], "example": {"sentence": "Я хочу то.", "translation": "我想要那個。"}, "usage_note": "指較遠的。", "image_file": "that_obj.png" },
        { "id": "pro-11", "term_zh": "他的", "related_terms": [{ "term_target": "его", "pronunciation": ["/jɪˈvo/"], "specific_note": "" }], "example": {"sentence": "Его машина.", "translation": "他的車。"}, "usage_note": "注意發音是 yevo。", "image_file": "his.png" },
        { "id": "pro-12", "term_zh": "你的", "related_terms": [{ "term_target": "твой", "pronunciation": ["/tvoj/"], "specific_note": "非正式" }, { "term_target": "ваш", "pronunciation": ["/vaʃ/"], "specific_note": "正式/複數" }], "example": {"sentence": "Твое имя.", "translation": "你的名字(中性名詞)。"}, "usage_note": "需隨名詞性別變化。", "image_file": "your.png" },
        { "id": "pro-13", "term_zh": "他們的", "related_terms": [{ "term_target": "их", "pronunciation": ["/ix/"], "specific_note": "" }], "example": {"sentence": "Их дом.", "translation": "他們的家。"}, "usage_note": "不隨名詞變化。", "image_file": "their.png" },
        { "id": "pro-14", "term_zh": "我們的", "related_terms": [{ "term_target": "наш", "pronunciation": ["/naʃ/"], "specific_note": "陽性" }, { "term_target": "наша", "pronunciation": ["/ˈnaʂə/"], "specific_note": "陰性" }], "example": {"sentence": "Наш друг.", "translation": "我們的朋友。"}, "usage_note": "需隨名詞性別變化。", "image_file": "our.png" },
        { "id": "pro-15", "term_zh": "這些", "related_terms": [{ "term_target": "эти", "pronunciation": ["/ˈɛtʲɪ/"], "specific_note": "" }], "example": {"sentence": "Эти книги.", "translation": "這些書。"}, "usage_note": "複數。", "image_file": "these.png" },
        { "id": "pro-16", "term_zh": "那些", "related_terms": [{ "term_target": "те", "pronunciation": ["/tʲe/"], "specific_note": "" }], "example": {"sentence": "Те птицы.", "translation": "那些鳥。"}, "usage_note": "遠處複數。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "быть", "pronunciation": ["/bɨtʲ/"], "specific_note": "原形" }, { "term_target": "-", "pronunciation": [""], "specific_note": "現在式常省略" }], "example": {"sentence": "Я студент.", "translation": "我是學生 (省略動詞)。"}, "usage_note": "現在式中通常省略 '是'。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "иметь", "pronunciation": ["/ɪˈmʲetʲ/"], "specific_note": "擁有" }, { "term_target": "у меня есть", "pronunciation": ["/u mʲɪˈnʲa jestʲ/"], "specific_note": "我有(常用結構)" }], "example": {"sentence": "У меня есть деньги.", "translation": "我有錢。"}, "usage_note": "常用 'У ... есть' 結構。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "идти", "pronunciation": ["/ɪˈtʲi/"], "specific_note": "走路去(單向)" }, { "term_target": "ехать", "pronunciation": ["/ˈjexətʲ/"], "specific_note": "搭車去(單向)" }], "example": {"sentence": "Я иду домой.", "translation": "我(走路)回家。"}, "usage_note": "俄文運動動詞區分方式和方向。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "получать", "pronunciation": ["/pəlʊˈtɕatʲ/"], "specific_note": "收到" }, { "term_target": "брать", "pronunciation": ["/bratʲ/"], "specific_note": "拿取" }], "example": {"sentence": "Получить работу.", "translation": "得到工作。"}, "usage_note": "獲得。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "делать", "pronunciation": ["/ˈdʲelətʲ/"], "specific_note": "" }], "example": {"sentence": "Делать домашнее задание.", "translation": "做作業。"}, "usage_note": "通用動詞。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "говорить", "pronunciation": ["/gəvɐˈrʲitʲ/"], "specific_note": "說話/講語言" }, { "term_target": "сказать", "pronunciation": ["/skɐˈzatʲ/"], "specific_note": "說出(完成體)" }], "example": {"sentence": "Скажи привет.", "translation": "說你好。"}, "usage_note": "Говорить 是過程，Сказать 是結果。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "знать", "pronunciation": ["/znatʲ/"], "specific_note": "" }], "example": {"sentence": "Я не знаю.", "translation": "我不知道。"}, "usage_note": "知曉。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "думать", "pronunciation": ["/ˈdumətʲ/"], "specific_note": "" }], "example": {"sentence": "Я так думаю.", "translation": "我想是的。"}, "usage_note": "思考。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "видеть", "pronunciation": ["/ˈvʲidʲɪtʲ/"], "specific_note": "看見(能力)" }, { "term_target": "смотреть", "pronunciation": ["/smɐˈtrʲetʲ/"], "specific_note": "觀看(動作)" }], "example": {"sentence": "Я вижу тебя.", "translation": "我看到你。"}, "usage_note": "Видеть(看見), Смотреть(看)。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "делать", "pronunciation": ["/ˈdʲelətʲ/"], "specific_note": "" }, { "term_target": "готовить", "pronunciation": ["/gɐˈtovʲɪtʲ/"], "specific_note": "烹飪/準備" }], "example": {"sentence": "Готовить кофе.", "translation": "煮咖啡。"}, "usage_note": "與「做」同字。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "приходить", "pronunciation": ["/prʲɪxɐˈdʲitʲ/"], "specific_note": "走路來" }, { "term_target": "приезжать", "pronunciation": ["/prʲɪjɪˈʐːatʲ/"], "specific_note": "搭車來" }], "example": {"sentence": "Приходи сюда.", "translation": "來這裡。"}, "usage_note": "過來。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "нуждаться", "pronunciation": ["/nʊˈʐdat͡sə/"], "specific_note": "動詞" }, { "term_target": "нужно", "pronunciation": ["/ˈnuʐnə/"], "specific_note": "副詞(需要...)" }], "example": {"sentence": "Мне нужна вода.", "translation": "我需要水。"}, "usage_note": "常用 Мне нужно/нужна... 結構。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "использовать", "pronunciation": ["/ɪˈspolʲzəvətʲ/"], "specific_note": "" }], "example": {"sentence": "Использовать ручку.", "translation": "用原子筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "находить", "pronunciation": ["/nəxɐˈdʲitʲ/"], "specific_note": "未完成體" }, { "term_target": "найти", "pronunciation": ["/nɐjˈtʲi/"], "specific_note": "完成體" }], "example": {"sentence": "Найти работу.", "translation": "找到工作。"}, "usage_note": "發現/找到。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "давать", "pronunciation": ["/dɐˈvatʲ/"], "specific_note": "未完成體" }, { "term_target": "дать", "pronunciation": ["/datʲ/"], "specific_note": "完成體" }], "example": {"sentence": "Дай мне это.", "translation": "給我那個。"}, "usage_note": "給予。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "рассказывать", "pronunciation": ["/rɐˈskazɨvətʲ/"], "specific_note": "講述" }, { "term_target": "сказать", "pronunciation": ["/skɐˈzatʲ/"], "specific_note": "告訴" }], "example": {"sentence": "Расскажи мне.", "translation": "告訴我(故事/經過)。"}, "usage_note": "告知。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "работать", "pronunciation": ["/rɐˈbotətʲ/"], "specific_note": "" }], "example": {"sentence": "Я работаю здесь.", "translation": "我在這工作。"}, "usage_note": "勞動。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "нравиться", "pronunciation": ["/ˈnravʲɪt͡sə/"], "specific_note": "使...喜歡" }, { "term_target": "любить", "pronunciation": ["/lʲʉˈbʲitʲ/"], "specific_note": "愛/喜愛" }], "example": {"sentence": "Мне нравится.", "translation": "我喜歡 (字面:它使我喜歡)。"}, "usage_note": "Нравиться 結構特殊 (Мне нравится...)。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "вставать", "pronunciation": ["/fstɐˈvatʲ/"], "specific_note": "起床(動作)" }, { "term_target": "просыпаться", "pronunciation": ["/prəsɨˈpat͡sə/"], "specific_note": "醒來" }], "example": {"sentence": "Я встаю в 7.", "translation": "我七點起床。"}, "usage_note": "起床。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "говорить", "pronunciation": ["/gəvɐˈrʲitʲ/"], "specific_note": "" }], "example": {"sentence": "Говорить по-русски.", "translation": "說俄文。"}, "usage_note": "講語言。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "слышать", "pronunciation": ["/ˈsɫɨʂətʲ/"], "specific_note": "聽見(能力)" }, { "term_target": "слушать", "pronunciation": ["/ˈsɫuʂətʲ/"], "specific_note": "聆聽(動作)" }], "example": {"sentence": "Ты меня слышишь?", "translation": "你聽得到我嗎？"}, "usage_note": "聽。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "писать", "pronunciation": ["/pʲɪˈsatʲ/"], "specific_note": "" }], "example": {"sentence": "Писать имя.", "translation": "寫名字。"}, "usage_note": "書寫。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "читать", "pronunciation": ["/tɕɪˈtatʲ/"], "specific_note": "" }], "example": {"sentence": "Читать книгу.", "translation": "看書。"}, "usage_note": "閱讀。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "ждать", "pronunciation": ["/ʐdatʲ/"], "specific_note": "" }], "example": {"sentence": "Жди меня.", "translation": "等我。"}, "usage_note": "等候。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "пробовать", "pronunciation": ["/ˈprobəvətʲ/"], "specific_note": "嘗試/品嘗" }, { "term_target": "пытаться", "pronunciation": ["/pɨˈtat͡sə/"], "specific_note": "試圖" }], "example": {"sentence": "Попробуй это.", "translation": "試試這個(食物)。"}, "usage_note": "試驗。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "платить", "pronunciation": ["/plɐˈtʲitʲ/"], "specific_note": "" }], "example": {"sentence": "Платить по счету.", "translation": "付帳單。"}, "usage_note": "支付。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "выбирать", "pronunciation": ["/vɨbʲɪˈratʲ/"], "specific_note": "" }], "example": {"sentence": "Выбери один.", "translation": "選一個。"}, "usage_note": "挑選。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "входить", "pronunciation": ["/fxɐˈdʲitʲ/"], "specific_note": "" }], "example": {"sentence": "Входить в комнату.", "translation": "進房間。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "жить", "pronunciation": ["/ʐɨtʲ/"], "specific_note": "" }], "example": {"sentence": "Я живу в Тайбэе.", "translation": "我住台北。"}, "usage_note": "居住/生活。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "прибывать", "pronunciation": ["/prʲɪbɨˈvatʲ/"], "specific_note": "" }, { "term_target": "приезжать", "pronunciation": ["/prʲɪjɪˈʐːatʲ/"], "specific_note": "抵達(乘車)" }], "example": {"sentence": "Прибыть вовремя.", "translation": "準時到達。"}, "usage_note": "抵達。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "ходить", "pronunciation": ["/xɐˈdʲitʲ/"], "specific_note": "步行(多向)" }, { "term_target": "гулять", "pronunciation": ["/gʊˈlʲatʲ/"], "specific_note": "散步" }], "example": {"sentence": "Идти пешком домой.", "translation": "走路回家。"}, "usage_note": "步行。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "открывать", "pronunciation": ["/ɐtkrɨˈvatʲ/"], "specific_note": "" }], "example": {"sentence": "Открыть дверь.", "translation": "開門。"}, "usage_note": "開啟。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "закрывать", "pronunciation": ["/zəkrɨˈvatʲ/"], "specific_note": "" }], "example": {"sentence": "Закрыть окно.", "translation": "關窗。"}, "usage_note": "關上。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "помогать", "pronunciation": ["/pəmɐˈgatʲ/"], "specific_note": "" }], "example": {"sentence": "Помоги мне.", "translation": "幫我。"}, "usage_note": "協助。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "приносить", "pronunciation": ["/prʲɪnɐˈsʲitʲ/"], "specific_note": "" }], "example": {"sentence": "Принеси воды.", "translation": "帶水來。"}, "usage_note": "攜帶至此。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "變成", "related_terms": [{ "term_target": "становиться", "pronunciation": ["/stənɐˈvʲit͡sə/"], "specific_note": "" }], "example": {"sentence": "Стать учителем.", "translation": "變成老師。"}, "usage_note": "變化。", "image_file": "become.png" },
        { "id": "v-37", "term_zh": "開始", "related_terms": [{ "term_target": "начинать", "pronunciation": ["/nətɕɪˈnatʲ/"], "specific_note": "" }], "example": {"sentence": "Начать сейчас.", "translation": "現在開始。"}, "usage_note": "開始。", "image_file": "start.png" },
        { "id": "v-38", "term_zh": "結束", "related_terms": [{ "term_target": "заканчивать", "pronunciation": ["/zɐˈkantɕɪvətʲ/"], "specific_note": "" }], "example": {"sentence": "Закончить работу.", "translation": "工作結束。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-39", "term_zh": "停止", "related_terms": [{ "term_target": "останавливаться", "pronunciation": ["/ɐstɐˈnavlʲɪvət͡sə/"], "specific_note": "" }, { "term_target": "перестать", "pronunciation": ["/pʲɪrʲɪˈstatʲ/"], "specific_note": "停止做某事" }], "example": {"sentence": "Остановись здесь.", "translation": "停在這裡。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-40", "term_zh": "記住", "related_terms": [{ "term_target": "помнить", "pronunciation": ["/ˈpomnʲɪtʲ/"], "specific_note": "記得" }, { "term_target": "запомнить", "pronunciation": ["/zɐˈpomnʲɪtʲ/"], "specific_note": "記住(動作)" }], "example": {"sentence": "Запомни меня.", "translation": "記住我。"}, "usage_note": "記憶。", "image_file": "remember.png" },
        { "id": "v-41", "term_zh": "談話", "related_terms": [{ "term_target": "разговаривать", "pronunciation": ["/rəzgɐˈvarʲɪvətʲ/"], "specific_note": "" }], "example": {"sentence": "Разговаривать с тобой.", "translation": "跟你談話。"}, "usage_note": "交談。", "image_file": "talk.png" },
        { "id": "v-42", "term_zh": "見面", "related_terms": [{ "term_target": "встречать", "pronunciation": ["/fstrʲɪˈtɕatʲ/"], "specific_note": "遇見/迎接" }, { "term_target": "встречаться", "pronunciation": ["/fstrʲɪˈtɕat͡sə/"], "specific_note": "見面(互相)" }], "example": {"sentence": "Встретиться с друзьями.", "translation": "跟朋友碰面。"}, "usage_note": "會面。", "image_file": "meet.png" },
        { "id": "v-43", "term_zh": "乘坐（工具）", "related_terms": [{ "term_target": "ехать на", "pronunciation": ["/ˈjexətʲ na/"], "specific_note": "搭乘..." }, { "term_target": "брать", "pronunciation": ["/bratʲ/"], "specific_note": "拿" }], "example": {"sentence": "Ехать на автобусе.", "translation": "搭公車。"}, "usage_note": "俄文用「在...上行駛」。", "image_file": "take.png" },
        { "id": "v-44", "term_zh": "放", "related_terms": [{ "term_target": "класть", "pronunciation": ["/kɫastʲ/"], "specific_note": "平放" }, { "term_target": "ставить", "pronunciation": ["/ˈstavʲɪtʲ/"], "specific_note": "豎放" }], "example": {"sentence": "Положи это сюда.", "translation": "放這裡。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-45", "term_zh": "吃", "related_terms": [{ "term_target": "есть", "pronunciation": ["/jestʲ/"], "specific_note": "" }], "example": {"sentence": "Есть обед.", "translation": "吃午餐。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-46", "term_zh": "睡覺", "related_terms": [{ "term_target": "спать", "pronunciation": ["/spatʲ/"], "specific_note": "" }], "example": {"sentence": "Я иду спать.", "translation": "我要去睡覺了。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-47", "term_zh": "寄送", "related_terms": [{ "term_target": "отправлять", "pronunciation": ["/ɐtprɐˈvlʲatʲ/"], "specific_note": "" }], "example": {"sentence": "Отправить письмо.", "translation": "寄信。"}, "usage_note": "傳送。", "image_file": "send.png" },
        { "id": "v-48", "term_zh": "開車", "related_terms": [{ "term_target": "водить", "pronunciation": ["/vɐˈdʲitʲ/"], "specific_note": "" }], "example": {"sentence": "Водить машину.", "translation": "開車。"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-49", "term_zh": "讀書", "related_terms": [{ "term_target": "учиться", "pronunciation": ["/uˈtɕit͡sə/"], "specific_note": "學習" }, { "term_target": "изучать", "pronunciation": ["/ɪzʊˈtɕatʲ/"], "specific_note": "研讀(接名詞)" }], "example": {"sentence": "Изучать русский.", "translation": "讀俄文。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-50", "term_zh": "回去", "related_terms": [{ "term_target": "возвращаться", "pronunciation": ["/vəzvrɐˈɕːat͡sə/"], "specific_note": "" }], "example": {"sentence": "Возвращаться домой.", "translation": "回家。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "хороший", "pronunciation": ["/xɐˈroʂɨj/"], "specific_note": "" }], "example": {"sentence": "Хорошая работа.", "translation": "做得好。"}, "usage_note": "形容詞需隨名詞性別變化。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "плохой", "pronunciation": ["/pɫɐˈxoj/"], "specific_note": "" }], "example": {"sentence": "Плохой день.", "translation": "壞的一天。"}, "usage_note": "負面。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "новый", "pronunciation": ["/ˈnovɨj/"], "specific_note": "" }], "example": {"sentence": "Новый телефон.", "translation": "新手機。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "первый", "pronunciation": ["/ˈpʲervɨj/"], "specific_note": "" }], "example": {"sentence": "Первый раз.", "translation": "第一次。"}, "usage_note": "順序。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "прошлый", "pronunciation": ["/ˈproʂɫɨj/"], "specific_note": "" }], "example": {"sentence": "На прошлой неделе.", "translation": "上週。"}, "usage_note": "過去的。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "следующий", "pronunciation": ["/ˈslʲedʊjʉɕːɪj/"], "specific_note": "" }], "example": {"sentence": "Следующая станция.", "translation": "下一站。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "длинный", "pronunciation": ["/ˈdlʲinːɨj/"], "specific_note": "" }], "example": {"sentence": "Длинные волосы.", "translation": "長髮。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "большой", "pronunciation": ["/bɐlʲˈʂoj/"], "specific_note": "" }], "example": {"sentence": "Большой дом.", "translation": "大房子。"}, "usage_note": "體積大。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "маленький", "pronunciation": ["/ˈmalʲɪnʲkʲɪj/"], "specific_note": "" }], "example": {"sentence": "Маленький кот.", "translation": "小貓。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "много", "pronunciation": ["/ˈmnogə/"], "specific_note": "副詞/代詞" }, { "term_target": "многие", "pronunciation": ["/ˈmnogʲɪje/"], "specific_note": "許多(人)" }], "example": {"sentence": "Много людей.", "translation": "很多人。"}, "usage_note": "數量多。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "высокий", "pronunciation": ["/vɨˈsokʲɪj/"], "specific_note": "" }], "example": {"sentence": "Высокое здание.", "translation": "高樓。"}, "usage_note": "高度。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "молодой", "pronunciation": ["/məɫɐˈdoj/"], "specific_note": "" }], "example": {"sentence": "Молодой человек.", "translation": "年輕人。"}, "usage_note": "年紀小。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的/舊的", "related_terms": [{ "term_target": "старый", "pronunciation": ["/ˈstarɨj/"], "specific_note": "" }], "example": {"sentence": "Старая книга.", "translation": "舊書。"}, "usage_note": "人或物皆可。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "близкий", "pronunciation": ["/ˈblʲizkʲɪj/"], "specific_note": "形容詞" }, { "term_target": "близко", "pronunciation": ["/ˈblʲizkə/"], "specific_note": "副詞" }], "example": {"sentence": "Это близко.", "translation": "很近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "далёкий", "pronunciation": ["/dɐˈlʲokʲɪj/"], "specific_note": "形容詞" }, { "term_target": "далеко", "pronunciation": ["/dəlʲɪˈko/"], "specific_note": "副詞" }], "example": {"sentence": "Это далеко.", "translation": "很遠。"}, "usage_note": "距離遠。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "быстрый", "pronunciation": ["/ˈbɨstrɨj/"], "specific_note": "" }], "example": {"sentence": "Быстрая машина.", "translation": "快車。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "медленный", "pronunciation": ["/ˈmʲedlʲɪnːɨj/"], "specific_note": "" }], "example": {"sentence": "Медленный интернет.", "translation": "網路慢。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "горячий", "pronunciation": ["/gɐˈrʲatɕɪj/"], "specific_note": "物品" }, { "term_target": "жаркий", "pronunciation": ["/ˈʐarkʲɪj/"], "specific_note": "天氣" }], "example": {"sentence": "Горячая вода.", "translation": "熱水。"}, "usage_note": "高溫。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "холодный", "pronunciation": ["/xɐˈlodnɨj/"], "specific_note": "" }], "example": {"sentence": "Холодный напиток.", "translation": "冷飲。"}, "usage_note": "低溫。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "чистый", "pronunciation": ["/ˈtɕistɨj/"], "specific_note": "" }], "example": {"sentence": "Чистая комната.", "translation": "乾淨的房間。"}, "usage_note": "無髒汙。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "грязный", "pronunciation": ["/ˈgrʲaznɨj/"], "specific_note": "" }], "example": {"sentence": "Грязные руки.", "translation": "髒手。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "простой", "pronunciation": ["/prɐˈstoj/"], "specific_note": "" }, { "term_target": "лёгкий", "pronunciation": ["/ˈlʲɵxkʲɪj/"], "specific_note": "容易/輕" }], "example": {"sentence": "Это просто.", "translation": "這很簡單(副詞)。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "трудный", "pronunciation": ["/ˈtrudnɨj/"], "specific_note": "費力" }, { "term_target": "сложный", "pronunciation": ["/ˈsloʐnɨj/"], "specific_note": "複雜" }], "example": {"sentence": "Это трудно.", "translation": "很難(副詞)。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "правильный", "pronunciation": ["/ˈpravʲɪlʲnɨj/"], "specific_note": "" }], "example": {"sentence": "Правильный ответ.", "translation": "正確答案。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "неправильный", "pronunciation": ["/nʲɪˈpravʲɪlʲnɨj/"], "specific_note": "" }, { "term_target": "ошибочный", "pronunciation": ["/ɐˈʂɨbətɕnɨj/"], "specific_note": "有誤的" }], "example": {"sentence": "Это неправильно.", "translation": "是錯的。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "важный", "pronunciation": ["/ˈvaʐnɨj/"], "specific_note": "" }], "example": {"sentence": "Важная встреча.", "translation": "重要會議。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "разный", "pronunciation": ["/ˈraznɨj/"], "specific_note": "各種" }, { "term_target": "другой", "pronunciation": ["/drʊˈgoj/"], "specific_note": "另一個/不同" }], "example": {"sentence": "Разные цвета.", "translation": "不同顏色。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "настоящий", "pronunciation": ["/nəstɐˈjaɕːɪj/"], "specific_note": "" }, { "term_target": "реальный", "pronunciation": ["/rʲɪˈalʲnɨj/"], "specific_note": "" }], "example": {"sentence": "Настоящая любовь.", "translation": "真愛。"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "интересный", "pronunciation": ["/ɪntʲɪˈrʲesnɨj/"], "specific_note": "" }], "example": {"sentence": "Интересная книга.", "translation": "有趣的書。"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "красивый", "pronunciation": ["/krɐˈsʲivɨj/"], "specific_note": "" }], "example": {"sentence": "Красивый цветок.", "translation": "美麗的花。"}, "usage_note": "形容人或景物。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "дешёвый", "pronunciation": ["/dʲɪˈʂovɨj/"], "specific_note": "" }], "example": {"sentence": "Это дёшево.", "translation": "這很便宜(副詞)。"}, "usage_note": "價格低。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "дорогой", "pronunciation": ["/dərɐˈgoj/"], "specific_note": "" }], "example": {"sentence": "Слишком дорого.", "translation": "太貴了(副詞)。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "голодный", "pronunciation": ["/gɐˈlodnɨj/"], "specific_note": "" }], "example": {"sentence": "Я голоден.", "translation": "我餓了(短尾形容詞)。"}, "usage_note": "餓。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "уставший", "pronunciation": ["/ʊˈstavʂɨj/"], "specific_note": "" }], "example": {"sentence": "Я устал.", "translation": "我累了(動詞過去式)。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "занятой", "pronunciation": ["/zənʲɪˈtoj/"], "specific_note": "人" }, { "term_target": "занят", "pronunciation": ["/ˈzanʲɪt/"], "specific_note": "短尾(現在狀態)" }], "example": {"sentence": "Я занят.", "translation": "我很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "счастливый", "pronunciation": ["/ɕːɪˈslʲivɨj/"], "specific_note": "幸福/快樂" }, { "term_target": "рад", "pronunciation": ["/rat/"], "specific_note": "高興(短尾)" }], "example": {"sentence": "Я рад.", "translation": "我很高興。"}, "usage_note": "心情。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "грустный", "pronunciation": ["/ˈgrusnɨj/"], "specific_note": "" }], "example": {"sentence": "Грустная история.", "translation": "悲傷的故事。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "похожий", "pronunciation": ["/pɐˈxoʐɨj/"], "specific_note": "" }], "example": {"sentence": "Они похожи.", "translation": "他們很像。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "известный", "pronunciation": ["/ɪzˈvʲesnɨj/"], "specific_note": "" }], "example": {"sentence": "Известный актер.", "translation": "知名演員。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "иностранный", "pronunciation": ["/ɪnɐˈstranːɨj/"], "specific_note": "" }], "example": {"sentence": "Иностранный язык.", "translation": "外語。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "умный", "pronunciation": ["/ˈumnɨj/"], "specific_note": "" }], "example": {"sentence": "Умный ребенок.", "translation": "聰明的孩子。"}, "usage_note": "腦袋好。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "опасный", "pronunciation": ["/ɐˈpasnɨj/"], "specific_note": "" }], "example": {"sentence": "Это опасно.", "translation": "這很危險(副詞)。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "добрый", "pronunciation": ["/ˈdobrɨj/"], "specific_note": "善良" }], "example": {"sentence": "Добрый человек.", "translation": "好人。"}, "usage_note": "溫柔。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "весь / вся / всё / все", "pronunciation": ["/vʲesʲ/"], "specific_note": "全部" }, { "term_target": "каждый", "pronunciation": ["/ˈkaʐdɨj/"], "specific_note": "每一個" }], "example": {"sentence": "Весь день.", "translation": "整天。"}, "usage_note": "全部。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "любимый", "pronunciation": ["/lʲʉˈbʲimɨj/"], "specific_note": "" }], "example": {"sentence": "Любимая еда.", "translation": "最愛的食物。"}, "usage_note": "中意。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "вкусный", "pronunciation": ["/ˈvkusnɨj/"], "specific_note": "" }], "example": {"sentence": "Вкусная еда.", "translation": "好吃的食物。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "время", "pronunciation": ["/ˈvrʲemʲə/"], "specific_note": "中性" }], "example": {"sentence": "Сколько времени?", "translation": "幾點了？"}, "usage_note": "時刻/時間。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "люди", "pronunciation": ["/ˈlʲudʲɪ/"], "specific_note": "複數" }, { "term_target": "человек", "pronunciation": ["/tɕɪlɐˈvʲek/"], "specific_note": "單數/人" }], "example": {"sentence": "Много людей.", "translation": "很多人。"}, "usage_note": "泛指人。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "деньги", "pronunciation": ["/ˈdʲenʲgʲɪ/"], "specific_note": "複數" }], "example": {"sentence": "Нет денег.", "translation": "沒錢。"}, "usage_note": "只有複數形式。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "ребёнок", "pronunciation": ["/rʲɪˈbʲonək/"], "specific_note": "陽性" }, { "term_target": "дети", "pronunciation": ["/ˈdʲetʲɪ/"], "specific_note": "複數" }], "example": {"sentence": "Маленький ребёнок.", "translation": "小孩。"}, "usage_note": "兒童。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "вода", "pronunciation": ["/vɐˈda/"], "specific_note": "陰性" }], "example": {"sentence": "Пить воду.", "translation": "喝水。"}, "usage_note": "不可數。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "еда", "pronunciation": ["/jɪˈda/"], "specific_note": "陰性" }], "example": {"sentence": "Вкусная еда.", "translation": "好吃的食物。"}, "usage_note": "吃的東西。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "друг", "pronunciation": ["/druk/"], "specific_note": "陽性" }, { "term_target": "подруга", "pronunciation": ["/pɐˈdrugə/"], "specific_note": "陰性" }], "example": {"sentence": "Мой друг.", "translation": "我朋友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "семья", "pronunciation": ["/sʲɪˈmʲja/"], "specific_note": "陰性" }], "example": {"sentence": "Большая семья.", "translation": "大家庭。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "студент", "pronunciation": ["/stʊˈdʲent/"], "specific_note": "大學生" }, { "term_target": "ученик", "pronunciation": ["/ʊtɕɪˈnʲik/"], "specific_note": "中小學生" }], "example": {"sentence": "Я студент.", "translation": "我是學生。"}, "usage_note": "在學者。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "культура", "pronunciation": ["/kʊlʲˈturə/"], "specific_note": "陰性" }], "example": {"sentence": "Русская культура.", "translation": "俄羅斯文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "проблема", "pronunciation": ["/prɐˈblʲemə/"], "specific_note": "陰性" }, { "term_target": "вопрос", "pronunciation": ["/vɐˈpros/"], "specific_note": "陽性(疑問)" }], "example": {"sentence": "Нет проблем.", "translation": "沒問題。"}, "usage_note": "難題。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "компания", "pronunciation": ["/kɐmˈpanʲɪjə/"], "specific_note": "陰性" }, { "term_target": "фирма", "pronunciation": ["/ˈfʲirmə/"], "specific_note": "陰性" }], "example": {"sentence": "Большая компания.", "translation": "大公司。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "мужчина", "pronunciation": ["/mʊˈɕːinə/"], "specific_note": "陽性" }], "example": {"sentence": "Он мужчина.", "translation": "他是男人。"}, "usage_note": "雖然結尾是a，但是陽性。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "женщина", "pronunciation": ["/ˈʐenɕːɪnə/"], "specific_note": "陰性" }], "example": {"sentence": "Она женщина.", "translation": "她是女人。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "школа", "pronunciation": ["/ˈʂkolə/"], "specific_note": "陰性" }], "example": {"sentence": "Идти в школу.", "translation": "去學校。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "учитель", "pronunciation": ["/ʊˈtɕitʲɪlʲ/"], "specific_note": "陽性" }], "example": {"sentence": "Учитель русского.", "translation": "俄文老師。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "фильм", "pronunciation": ["/fʲilʲm/"], "specific_note": "陽性" }, { "term_target": "кино", "pronunciation": ["/kʲɪˈno/"], "specific_note": "中性" }], "example": {"sentence": "Смотреть фильм.", "translation": "看電影。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "телефон", "pronunciation": ["/tʲɪlʲɪˈfon/"], "specific_note": "陽性" }, { "term_target": "мобильник", "pronunciation": ["/mɐˈbʲilʲnʲɪk/"], "specific_note": "陽性(口語)" }], "example": {"sentence": "Мой телефон.", "translation": "我手機。"}, "usage_note": "電話。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "компьютер", "pronunciation": ["/kɐmˈpʲjutər/"], "specific_note": "陽性" }], "example": {"sentence": "Использовать компьютер.", "translation": "用電腦。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "машина", "pronunciation": ["/mɐˈʂɨnə/"], "specific_note": "陰性" }, { "term_target": "автомобиль", "pronunciation": ["/ɐftəmɐˈbʲilʲ/"], "specific_note": "陽性" }], "example": {"sentence": "Водить машину.", "translation": "開車。"}, "usage_note": "汽車。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "рынок", "pronunciation": ["/ˈrɨnək/"], "specific_note": "陽性" }], "example": {"sentence": "Идти на рынок.", "translation": "去市場。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "одежда", "pronunciation": ["/ɐˈdʲeʐdə/"], "specific_note": "陰性" }], "example": {"sentence": "Покупать одежду.", "translation": "買衣服。"}, "usage_note": "不可數。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "магазин", "pronunciation": ["/məgɐˈzʲin/"], "specific_note": "陽性" }], "example": {"sentence": "В магазине.", "translation": "在店裡。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "автобус", "pronunciation": ["/ɐfˈtobʊs/"], "specific_note": "陽性" }], "example": {"sentence": "Ехать на автобусе.", "translation": "搭公車。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "улица", "pronunciation": ["/ˈulʲɪt͡sə/"], "specific_note": "陰性" }], "example": {"sentence": "На улице.", "translation": "在街上。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "дом", "pronunciation": ["/dom/"], "specific_note": "陽性" }], "example": {"sentence": "Мой дом.", "translation": "我家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "мать", "pronunciation": ["/matʲ/"], "specific_note": "陰性" }, { "term_target": "мама", "pronunciation": ["/ˈmamə/"], "specific_note": "陰性(常用)" }], "example": {"sentence": "Моя мама.", "translation": "我媽媽。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "отец", "pronunciation": ["/ɐˈtʲet͡s/"], "specific_note": "陽性" }, { "term_target": "папа", "pronunciation": ["/ˈpapə/"], "specific_note": "陽性(常用)" }], "example": {"sentence": "Мой папа.", "translation": "我爸爸。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "брат", "pronunciation": ["/brat/"], "specific_note": "陽性" }], "example": {"sentence": "Мой брат.", "translation": "我兄弟。"}, "usage_note": "兄弟。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "сестра", "pronunciation": ["/sʲɪˈstra/"], "specific_note": "陰性" }], "example": {"sentence": "Моя сестра.", "translation": "我姐妹。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "китайский", "pronunciation": ["/kʲɪˈtajskʲɪj/"], "specific_note": "" }], "example": {"sentence": "Говорить по-китайски.", "translation": "說中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "утро", "pronunciation": ["/ˈutrə/"], "specific_note": "中性" }], "example": {"sentence": "Утром.", "translation": "在早晨。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "ночь", "pronunciation": ["/notɕ/"], "specific_note": "陰性" }], "example": {"sentence": "Спокойной ночи.", "translation": "晚安。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "билет", "pronunciation": ["/bʲɪˈlʲet/"], "specific_note": "陽性" }], "example": {"sentence": "Один билет, пожалуйста.", "translation": "請給我一張票。"}, "usage_note": "票。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "сумка", "pronunciation": ["/ˈsumkə/"], "specific_note": "陰性" }], "example": {"sentence": "Большая сумка.", "translation": "大包包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "чашка", "pronunciation": ["/ˈtɕaʂkə/"], "specific_note": "陰性" }, { "term_target": "стакан", "pronunciation": ["/stɐˈkan/"], "specific_note": "陽性(玻璃杯)" }], "example": {"sentence": "Чашка чая.", "translation": "一杯茶。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "врач", "pronunciation": ["/vratɕ/"], "specific_note": "陽性" }, { "term_target": "доктор", "pronunciation": ["/ˈdoktər/"], "specific_note": "陽性" }], "example": {"sentence": "Идти к врачу.", "translation": "看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "полиция", "pronunciation": ["/pɐˈlʲit͡sɨjə/"], "specific_note": "陰性" }], "example": {"sentence": "Звонить в полицию.", "translation": "叫警察。"}, "usage_note": "警察。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "больница", "pronunciation": ["/bɐlʲˈnʲit͡sə/"], "specific_note": "陰性" }], "example": {"sentence": "В больнице.", "translation": "在醫院。"}, "usage_note": "醫療院所。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "место", "pronunciation": ["/ˈmʲestə/"], "specific_note": "中性" }], "example": {"sentence": "Свободное место.", "translation": "空位。"}, "usage_note": "位子。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "дверь", "pronunciation": ["/dvʲerʲ/"], "specific_note": "陰性" }], "example": {"sentence": "Открыть дверь.", "translation": "開門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "комната", "pronunciation": ["/ˈkomnətə/"], "specific_note": "陰性" }], "example": {"sentence": "Моя комната.", "translation": "我房間。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "вокзал", "pronunciation": ["/vɐgˈzaɫ/"], "specific_note": "陽性(火車站)" }, { "term_target": "станция", "pronunciation": ["/ˈstant͡sɨjə/"], "specific_note": "陰性" }], "example": {"sentence": "На вокзале.", "translation": "在車站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "метро", "pronunciation": ["/mʲɪˈtro/"], "specific_note": "中性" }], "example": {"sentence": "Станция метро.", "translation": "地鐵站。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "поезд", "pronunciation": ["/ˈpojɪst/"], "specific_note": "陽性" }], "example": {"sentence": "Ехать на поезде.", "translation": "搭火車。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "аэропорт", "pronunciation": ["/ɐɪrɐˈport/"], "specific_note": "陽性" }], "example": {"sentence": "В аэропорту.", "translation": "在機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "багаж", "pronunciation": ["/bɐˈgaʂ/"], "specific_note": "陽性" }], "example": {"sentence": "Много багажа.", "translation": "很多行李。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "карта", "pronunciation": ["/ˈkartə/"], "specific_note": "陰性" }], "example": {"sentence": "Смотреть на карту.", "translation": "看地圖。"}, "usage_note": "指引。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "стойка", "pronunciation": ["/ˈstojkə/"], "specific_note": "陰性" }, { "term_target": "касса", "pronunciation": ["/ˈkasːə/"], "specific_note": "陰性(售票處)" }], "example": {"sentence": "На стойке регистрации.", "translation": "在登記櫃檯。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "лобби", "pronunciation": ["/ˈlobːʲɪ/"], "specific_note": "中性" }, { "term_target": "холл", "pronunciation": ["/xoɫ/"], "specific_note": "陽性" }], "example": {"sentence": "В холле.", "translation": "在大廳。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "бронирование", "pronunciation": ["/brɐˈnʲirəvənʲɪje/"], "specific_note": "中性" }, { "term_target": "бронь", "pronunciation": ["/bronʲ/"], "specific_note": "陰性(口語)" }], "example": {"sentence": "Сделать бронирование.", "translation": "做預約。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "регистрация", "pronunciation": ["/rʲɪgʲɪˈstrat͡sɨjə/"], "specific_note": "陰性" }], "example": {"sentence": "Регистрация заезда.", "translation": "辦理入住。"}, "usage_note": "Check-in。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "выезд", "pronunciation": ["/ˈvɨjɪst/"], "specific_note": "陽性" }], "example": {"sentence": "Время выезда.", "translation": "退房時間。"}, "usage_note": "Check-out。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "напиток", "pronunciation": ["/nɐˈpʲitək/"], "specific_note": "陽性" }], "example": {"sentence": "Холодный напиток.", "translation": "冷飲。"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "меню", "pronunciation": ["/mʲɪˈnʲu/"], "specific_note": "中性" }], "example": {"sentence": "Меню, пожалуйста.", "translation": "請給菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "обед", "pronunciation": ["/ɐˈbʲet/"], "specific_note": "陽性" }], "example": {"sentence": "Есть обед.", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "ужин", "pronunciation": ["/ˈuʐɨn/"], "specific_note": "陽性" }], "example": {"sentence": "Есть ужин.", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "счёт", "pronunciation": ["/ɕːot/"], "specific_note": "陽性" }], "example": {"sentence": "Счёт, пожалуйста.", "translation": "麻煩結帳。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "цена", "pronunciation": ["/t͡sɨˈna/"], "specific_note": "陰性" }], "example": {"sentence": "Хорошая цена.", "translation": "好價格。"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "чек", "pronunciation": ["/tɕek/"], "specific_note": "陽性" }, { "term_target": "квитанция", "pronunciation": ["/kvʲɪˈtant͡sɨjə/"], "specific_note": "陰性" }], "example": {"sentence": "Чек, пожалуйста.", "translation": "請給收據。"}, "usage_note": "證明。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "размер", "pronunciation": ["/rɐzˈmʲer/"], "specific_note": "陽性" }], "example": {"sentence": "Большой размер.", "translation": "大尺寸。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "вход", "pronunciation": ["/fxot/"], "specific_note": "陽性" }], "example": {"sentence": "Где вход?", "translation": "入口在哪？"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "выход", "pronunciation": ["/ˈvɨxət/"], "specific_note": "陽性" }], "example": {"sentence": "Здесь выход.", "translation": "出口在這。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "Тайвань", "pronunciation": ["/tɐjˈvanʲ/"], "specific_note": "陽性" }], "example": {"sentence": "Я из Тайваня.", "translation": "我來自台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "一切事物", "related_terms": [{ "term_target": "всё", "pronunciation": ["/fsʲo/"], "specific_note": "" }], "example": {"sentence": "Всё хорошо.", "translation": "一切都好。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-66", "term_zh": "錢包", "related_terms": [{ "term_target": "кошелёк", "pronunciation": ["/kəʂɨˈlʲok/"], "specific_note": "陽性" }], "example": {"sentence": "Потерял кошелёк.", "translation": "掉了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-67", "term_zh": "身分證", "related_terms": [{ "term_target": "удостоверение личности", "pronunciation": ["/ʊdəstəvʲɪˈrʲenʲɪje ˈlʲitɕnəsʲtʲɪ/"], "specific_note": "中性" }], "example": {"sentence": "Покажите удостоверение.", "translation": "出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-68", "term_zh": "餐廳", "related_terms": [{ "term_target": "ресторан", "pronunciation": ["/rʲɪstɐˈran/"], "specific_note": "陽性" }], "example": {"sentence": "Хороший ресторан.", "translation": "好餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-69", "term_zh": "場所", "related_terms": [{ "term_target": "место", "pronunciation": ["/ˈmʲestə/"], "specific_note": "中性" }], "example": {"sentence": "Красивое место.", "translation": "好地方。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-70", "term_zh": "用品店員", "related_terms": [{ "term_target": "продавец", "pronunciation": ["/prədɐˈvʲet͡s/"], "specific_note": "陽性" }], "example": {"sentence": "Спросить продавца.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-71", "term_zh": "超市", "related_terms": [{ "term_target": "супермаркет", "pronunciation": ["/sʊpʲɪrˈmarkʲɪt/"], "specific_note": "陽性" }], "example": {"sentence": "Идти в супермаркет.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-72", "term_zh": "月台", "related_terms": [{ "term_target": "платформа", "pronunciation": ["/pɫɐtˈformə/"], "specific_note": "陰性" }], "example": {"sentence": "Платформа номер один.", "translation": "第一月台。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "сейчас", "pronunciation": ["/sʲɪˈtɕas/"], "specific_note": "" }], "example": {"sentence": "Сделай это сейчас.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "очень", "pronunciation": ["/ˈotɕɪnʲ/"], "specific_note": "" }], "example": {"sentence": "Очень хорошо.", "translation": "非常好。"}, "usage_note": "強調。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "действительно", "pronunciation": ["/dʲɪjˈstvʲitʲɪlʲnə/"], "specific_note": "" }, { "term_target": "правда", "pronunciation": ["/ˈpravdə/"], "specific_note": "口語" }], "example": {"sentence": "Правда?", "translation": "真的嗎？"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "хорошо", "pronunciation": ["/xərɐˈʂo/"], "specific_note": "" }], "example": {"sentence": "Спать хорошо.", "translation": "睡得好。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "часто", "pronunciation": ["/ˈtɕastə/"], "specific_note": "" }], "example": {"sentence": "Я часто прихожу.", "translation": "我常來。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "обычно", "pronunciation": ["/ɐˈbɨtɕnə/"], "specific_note": "" }], "example": {"sentence": "Обычно я хожу пешком.", "translation": "通常我走路。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "уже", "pronunciation": ["/ʊˈʐɛ/"], "specific_note": "" }], "example": {"sentence": "Уже готово.", "translation": "已經做好了。"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "только", "pronunciation": ["/ˈtolʲkə/"], "specific_note": "" }], "example": {"sentence": "Только один.", "translation": "只有一個。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "снова", "pronunciation": ["/ˈsnovə/"], "specific_note": "" }, { "term_target": "опять", "pronunciation": ["/ɐˈpʲatʲ/"], "specific_note": "" }], "example": {"sentence": "Попробуй снова.", "translation": "再試一次。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "примерно", "pronunciation": ["/prʲɪˈmʲernə/"], "specific_note": "" }, { "term_target": "около", "pronunciation": ["/ˈokələ/"], "specific_note": "" }], "example": {"sentence": "Около 10 минут.", "translation": "大約10分鐘。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "немного", "pronunciation": ["/nʲɪˈmnogə/"], "specific_note": "" }, { "term_target": "чуть-чуть", "pronunciation": ["/tɕʉtʲ tɕʉtʲ/"], "specific_note": "一點點(口語)" }], "example": {"sentence": "Немного остро.", "translation": "一點點辣。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "тоже", "pronunciation": ["/ˈtoʐɨ/"], "specific_note": "" }, { "term_target": "также", "pronunciation": ["/ˈtagʐɨ/"], "specific_note": "" }], "example": {"sentence": "Я тоже.", "translation": "我也是。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "может быть", "pronunciation": ["/ˈmoʐɨd bɨtʲ/"], "specific_note": "" }], "example": {"sentence": "Может быть позже.", "translation": "也許等下。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "позже", "pronunciation": ["/ˈpoʑːɨ/"], "specific_note": "" }, { "term_target": "потом", "pronunciation": ["/pɐˈtom/"], "specific_note": "" }], "example": {"sentence": "Увидимся позже.", "translation": "待會見。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "скоро", "pronunciation": ["/ˈskorə/"], "specific_note": "" }], "example": {"sentence": "Увидимся скоро.", "translation": "待會見(很快見)。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "вместе", "pronunciation": ["/ˈvmʲesʲtʲɪ/"], "specific_note": "" }], "example": {"sentence": "Идти вместе.", "translation": "一起去。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "всё ещё", "pronunciation": ["/fsʲo jɪˈɕːo/"], "specific_note": "" }], "example": {"sentence": "Всё ещё здесь.", "translation": "還在這裡。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "обычно", "pronunciation": ["/ɐˈbɨtɕnə/"], "specific_note": "" }], "example": {"sentence": "Обычно это так.", "translation": "一般是那樣。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "немедленно", "pronunciation": ["/nʲɪˈmʲedlʲɪnːə/"], "specific_note": "" }, { "term_target": "сразу", "pronunciation": ["/ˈsrazʊ/"], "specific_note": "馬上" }], "example": {"sentence": "Приходи немедленно.", "translation": "立刻來。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "тоже не", "pronunciation": ["/ˈtoʐɨ nʲe/"], "specific_note": "" }], "example": {"sentence": "Я тоже не знаю.", "translation": "我也不知道。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "что", "pronunciation": ["/ʃto/"], "specific_note": "" }], "example": {"sentence": "Что это?", "translation": "這是什麼？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "как", "pronunciation": ["/kak/"], "specific_note": "" }], "example": {"sentence": "Как дела?", "translation": "你好嗎？"}, "usage_note": "問狀況。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "когда", "pronunciation": ["/kɐgˈda/"], "specific_note": "" }], "example": {"sentence": "Когда мы идем?", "translation": "何時去？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "где", "pronunciation": ["/gdʲe/"], "specific_note": "在哪裡(位置)" }, { "term_target": "куда", "pronunciation": ["/kʊˈda/"], "specific_note": "去哪裡(方向)" }], "example": {"sentence": "Где ты?", "translation": "你在哪？"}, "usage_note": "注意區分位置與方向。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "кто", "pronunciation": ["/kto/"], "specific_note": "" }], "example": {"sentence": "Кто это?", "translation": "那是誰？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "почему", "pronunciation": ["/pətɕɪˈmu/"], "specific_note": "" }], "example": {"sentence": "Почему?", "translation": "為什麼？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "какой", "pronunciation": ["/kɐˈkoj/"], "specific_note": "" }], "example": {"sentence": "Какой?", "translation": "哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "сколько", "pronunciation": ["/ˈskolʲkə/"], "specific_note": "" }], "example": {"sentence": "Сколько стоит?", "translation": "多少錢？"}, "usage_note": "問數量/價格。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "как долго", "pronunciation": ["/kak ˈdoɫgə/"], "specific_note": "" }], "example": {"sentence": "Как долго?", "translation": "要多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "сейчас", "pronunciation": ["/sʲɪˈtɕas/"], "specific_note": "" }], "example": {"sentence": "Сделай это сейчас.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "сегодня", "pronunciation": ["/sʲɪˈvodnʲə/"], "specific_note": "" }], "example": {"sentence": "Сегодня жарко.", "translation": "今天很熱。"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "завтра", "pronunciation": ["/ˈzavtrə/"], "specific_note": "" }], "example": {"sentence": "До завтра.", "translation": "明天見。"}, "usage_note": "隔天。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "вчера", "pronunciation": ["/ftɕɪˈra/"], "specific_note": "" }], "example": {"sentence": "Вчера я был там.", "translation": "昨天我去了。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "здесь", "pronunciation": ["/zdʲesʲ/"], "specific_note": "位置" }, { "term_target": "сюда", "pronunciation": ["/sʲʊˈda/"], "specific_note": "方向" }], "example": {"sentence": "Иди сюда.", "translation": "來這。"}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "там", "pronunciation": ["/tam/"], "specific_note": "位置" }, { "term_target": "туда", "pronunciation": ["/tʊˈda/"], "specific_note": "方向" }], "example": {"sentence": "Иди туда.", "translation": "去那。"}, "usage_note": "遠處。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "день", "pronunciation": ["/dʲenʲ/"], "specific_note": "" }], "example": {"sentence": "Один день.", "translation": "一天。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "год", "pronunciation": ["/got/"], "specific_note": "" }], "example": {"sentence": "В этом году.", "translation": "今年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "месяц", "pronunciation": ["/ˈmʲesʲɪt͡s/"], "specific_note": "" }], "example": {"sentence": "Этот месяц.", "translation": "這個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "неделя", "pronunciation": ["/nʲɪˈdʲelʲə/"], "specific_note": "" }], "example": {"sentence": "На следующей неделе.", "translation": "下週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "утро", "pronunciation": ["/ˈutrə/"], "specific_note": "" }], "example": {"sentence": "Утром.", "translation": "在早上。"}, "usage_note": "上午。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "день", "pronunciation": ["/dʲenʲ/"], "specific_note": "" }, { "term_target": "после полудня", "pronunciation": ["/ˈposlʲɪ pɐˈludnʲə/"], "specific_note": "午後" }], "example": {"sentence": "Днём.", "translation": "下午/白天。"}, "usage_note": "PM。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "вечер", "pronunciation": ["/ˈvʲetɕɪr/"], "specific_note": "傍晚" }, { "term_target": "ночь", "pronunciation": ["/notɕ/"], "specific_note": "深夜" }], "example": {"sentence": "Доброй ночи.", "translation": "晚安。"}, "usage_note": "睡前。", "image_file": "night.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "полдень", "pronunciation": ["/ˈpoldʲɪnʲ/"], "specific_note": "" }], "example": {"sentence": "В полдень.", "translation": "在中午。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "впереди", "pronunciation": ["/fpʲɪrʲɪˈdʲi/"], "specific_note": "位置" }, { "term_target": "перед", "pronunciation": ["/ˈpʲerʲɪt/"], "specific_note": "在...前面" }], "example": {"sentence": "Впереди меня.", "translation": "在我前面。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "сзади", "pronunciation": ["/ˈzzadʲɪ/"], "specific_note": "位置" }, { "term_target": "за", "pronunciation": ["/za/"], "specific_note": "在...後面" }], "example": {"sentence": "Сзади.", "translation": "在後面。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "слева", "pronunciation": ["/ˈslʲevə/"], "specific_note": "位置" }, { "term_target": "налево", "pronunciation": ["nɐˈlʲevə/"], "specific_note": "方向" }], "example": {"sentence": "Повернуть налево.", "translation": "左轉。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "справа", "pronunciation": ["/ˈspravə/"], "specific_note": "位置" }, { "term_target": "направо", "pronunciation": ["/nɐˈpravə/"], "specific_note": "方向" }], "example": {"sentence": "Повернуть направо.", "translation": "右轉。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "рядом", "pronunciation": ["/ˈrʲadəm/"], "specific_note": "" }], "example": {"sentence": "Рядом со мной.", "translation": "在我旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "напротив", "pronunciation": ["/nɐˈprotʲɪf/"], "specific_note": "" }], "example": {"sentence": "Напротив банка.", "translation": "銀行對面。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "весна", "pronunciation": ["/vʲɪˈsna/"], "specific_note": "" }], "example": {"sentence": "Весна пришла.", "translation": "春天來了。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "лето", "pronunciation": ["/ˈlʲetə/"], "specific_note": "" }], "example": {"sentence": "Жаркое лето.", "translation": "炎熱的夏天。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "осень", "pronunciation": ["/ˈosʲɪnʲ/"], "specific_note": "" }], "example": {"sentence": "Золотая осень.", "translation": "金色的秋天。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "зима", "pronunciation": ["/zʲɪˈma/"], "specific_note": "" }], "example": {"sentence": "Холодная зима.", "translation": "寒冷的冬天。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "ноль", "pronunciation": ["/nolʲ/"], "specific_note": "" }], "example": {"sentence": "Ноль градусов.", "translation": "零度。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "один", "pronunciation": ["/ɐˈdʲin/"], "specific_note": "" }], "example": {"sentence": "Один день.", "translation": "一天。"}, "usage_note": "一。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "два", "pronunciation": ["/dva/"], "specific_note": "" }], "example": {"sentence": "Два дня.", "translation": "兩天。"}, "usage_note": "二。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "три", "pronunciation": ["/trʲi/"], "specific_note": "" }], "example": {"sentence": "Три человека.", "translation": "三人。"}, "usage_note": "三。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "четыре", "pronunciation": ["/tɕɪˈtɨrʲɪ/"], "specific_note": "" }], "example": {"sentence": "Четыре сезона.", "translation": "四季。"}, "usage_note": "四。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "пять", "pronunciation": ["/pʲatʲ/"], "specific_note": "" }], "example": {"sentence": "Пять рублей.", "translation": "五盧布。"}, "usage_note": "五。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "шесть", "pronunciation": ["/ʂestʲ/"], "specific_note": "" }], "example": {"sentence": "Шесть часов.", "translation": "六小時。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "семь", "pronunciation": ["/sʲemʲ/"], "specific_note": "" }], "example": {"sentence": "Семь дней.", "translation": "七天。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "восемь", "pronunciation": ["/ˈvosʲɪmʲ/"], "specific_note": "" }], "example": {"sentence": "Восемь лет.", "translation": "八歲。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "девять", "pronunciation": ["/ˈdʲevʲɪtʲ/"], "specific_note": "" }], "example": {"sentence": "Девять часов.", "translation": "九點。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "десять", "pronunciation": ["/ˈdʲesʲɪtʲ/"], "specific_note": "" }], "example": {"sentence": "Десять рублей.", "translation": "十盧布。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "одиннадцать", "pronunciation": ["/ɐˈdʲinːət͡sətʲ/"], "specific_note": "" }], "example": {"sentence": "Одиннадцать лет.", "translation": "11歲。"}, "usage_note": "十一。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "двенадцать", "pronunciation": ["/dvʲɪˈnat͡sətʲ/"], "specific_note": "" }], "example": {"sentence": "Двенадцать месяцев.", "translation": "12個月。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "пятнадцать", "pronunciation": ["/pʲɪtˈnat͡sətʲ/"], "specific_note": "" }], "example": {"sentence": "Пятнадцать минут.", "translation": "15分鐘。"}, "usage_note": "十五。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "двадцать", "pronunciation": ["/ˈdvat͡sətʲ/"], "specific_note": "" }], "example": {"sentence": "Двадцать рублей.", "translation": "20盧布。"}, "usage_note": "二十。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "пятьдесят", "pronunciation": ["/pʲɪdʲːɪˈsʲat/"], "specific_note": "" }], "example": {"sentence": "Пятьдесят процентов.", "translation": "50%。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "сто", "pronunciation": ["/sto/"], "specific_note": "" }], "example": {"sentence": "Сто баллов.", "translation": "一百分。"}, "usage_note": "百。", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "тысяча", "pronunciation": ["/ˈtɨsʲɪtɕə/"], "specific_note": "" }], "example": {"sentence": "Тысяча рублей.", "translation": "一千盧布。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "десять тысяч", "pronunciation": ["/ˈdʲesʲɪtʲ ˈtɨsʲɪtɕ/"], "specific_note": "" }], "example": {"sentence": "Десять тысяч долларов.", "translation": "一萬元。"}, "usage_note": "一萬。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是/覺得～", "related_terms": [{ "term_target": "Я...", "pronunciation": ["/ja/"], "specific_note": "是(省略系動詞)" }], "example": {"sentence": "Я студент.", "translation": "我是學生。"}, "usage_note": "現在式常省略系動詞。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫～", "related_terms": [{ "term_target": "Меня зовут...", "pronunciation": ["/mʲɪˈnʲa zɐˈvut/"], "specific_note": "我被叫做..." }], "example": {"sentence": "Меня зовут Иван.", "translation": "我的名字叫伊凡。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做～", "related_terms": [{ "term_target": "Я делаю...", "pronunciation": ["/ja ˈdʲeɫəjʉ/"], "specific_note": "" }], "example": {"sentence": "Я делаю домашнее задание.", "translation": "我做作業。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做～", "related_terms": [{ "term_target": "Я (verbo)... сейчас", "pronunciation": ["/ja ... sʲɪˈtɕas/"], "specific_note": "現在做" }], "example": {"sentence": "Я ем сейчас.", "translation": "我正在吃。"}, "usage_note": "現在進行。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠～", "related_terms": [{ "term_target": "Я могу...", "pronunciation": ["/ja mɐˈgu/"], "specific_note": "" }], "example": {"sentence": "Я могу плавать.", "translation": "我會游泳。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做～", "related_terms": [{ "term_target": "Мне нравится...", "pronunciation": ["/mnʲe ˈnravʲɪt͡sə/"], "specific_note": "使我喜歡" }, { "term_target": "Я люблю...", "pronunciation": ["/ja lʲʉˈblʲu/"], "specific_note": "我愛" }], "example": {"sentence": "Мне нравится читать.", "translation": "我喜歡閱讀。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經～", "related_terms": [{ "term_target": "Я был...", "pronunciation": ["/ja bɨl/"], "specific_note": "陽性" }, { "term_target": "Я была...", "pronunciation": ["/ja bɨˈla/"], "specific_note": "陰性" }], "example": {"sentence": "Я был студентом.", "translation": "我曾經是學生。"}, "usage_note": "過去狀態。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過～", "related_terms": [{ "term_target": "Я сделал...", "pronunciation": ["/ja ˈzdʲeɫəɫ/"], "specific_note": "完成體" }], "example": {"sentence": "Я сделал домашнее задание.", "translation": "我做完功課了。"}, "usage_note": "過去動作。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過～", "related_terms": [{ "term_target": "Я уже...", "pronunciation": ["/ja ʊˈʐɛ/"], "specific_note": "" }], "example": {"sentence": "Я уже поел.", "translation": "我已經吃過了。"}, "usage_note": "完成。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過～", "related_terms": [{ "term_target": "Я был в...", "pronunciation": ["/ja bɨl v/"], "specific_note": "" }], "example": {"sentence": "Я был в Москве.", "translation": "我曾經去過莫斯科。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算～", "related_terms": [{ "term_target": "Я собираюсь...", "pronunciation": ["/ja səbʲɪˈrajʉsʲ/"], "specific_note": "" }], "example": {"sentence": "Я собираюсь пойти.", "translation": "我打算去。"}, "usage_note": "未來意。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是～嗎？", "related_terms": [{ "term_target": "Ты...?", "pronunciation": ["/tɨ/"], "specific_note": "非正式" }, { "term_target": "Вы...?", "pronunciation": ["/vɨ/"], "specific_note": "正式" }], "example": {"sentence": "Ты студент?", "translation": "你是學生嗎？"}, "usage_note": "問身分。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做～嗎？", "related_terms": [{ "term_target": "Ты делаешь...?", "pronunciation": ["/tɨ ˈdʲeɫəjɪʂ/"], "specific_note": "" }], "example": {"sentence": "Ты занимаешься спортом?", "translation": "你有運動嗎？"}, "usage_note": "一般疑問句。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經～嗎？", "related_terms": [{ "term_target": "Ты когда-нибудь...?", "pronunciation": ["/tɨ kɐgˈda nʲɪbʊtʲ/"], "specific_note": "" }], "example": {"sentence": "Ты когда-нибудь был в России?", "translation": "你有去過俄羅斯嗎？"}, "usage_note": "問經驗。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做（某事）？", "related_terms": [{ "term_target": "Когда ты...?", "pronunciation": ["/kɐgˈda tɨ/"], "specific_note": "" }], "example": {"sentence": "Когда ты спишь?", "translation": "你何時睡？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去（某地）？", "related_terms": [{ "term_target": "Когда ты идёшь в...?", "pronunciation": ["/kɐgˈda tɨ ɪˈdʲoʂ v/"], "specific_note": "" }], "example": {"sentence": "Когда ты идёшь в школу?", "translation": "你何時去學校？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做（某事）？", "related_terms": [{ "term_target": "Где ты...?", "pronunciation": ["/gdʲe tɨ/"], "specific_note": "" }], "example": {"sentence": "Где ты живёшь?", "translation": "你住哪裡？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做（某事）？", "related_terms": [{ "term_target": "Как ты...?", "pronunciation": ["/kak tɨ/"], "specific_note": "" }], "example": {"sentence": "Как ты готовишь?", "translation": "你怎麼煮？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去（某地）？", "related_terms": [{ "term_target": "Как ты добираешься до...?", "pronunciation": ["/kak tɨ dəbʲɪˈraɪʂsʲə də/"], "specific_note": "" }], "example": {"sentence": "Как ты добираешься до школы?", "translation": "你怎麼去學校？"}, "usage_note": "問交通方式。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是～", "related_terms": [{ "term_target": "Я не...", "pronunciation": ["/ja nʲe/"], "specific_note": "" }], "example": {"sentence": "Я не врач.", "translation": "我不是醫生。"}, "usage_note": "否定身分。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做～", "related_terms": [{ "term_target": "Я не (verbo)...", "pronunciation": ["/ja nʲe/"], "specific_note": "" }], "example": {"sentence": "Я не курю.", "translation": "我不抽菸。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能～", "related_terms": [{ "term_target": "Я не могу...", "pronunciation": ["/ja nʲɪ mɐˈgu/"], "specific_note": "" }], "example": {"sentence": "Я не могу идти.", "translation": "我不能去。"}, "usage_note": "否定能力。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾～", "related_terms": [{ "term_target": "Я никогда не...", "pronunciation": ["/ja nʲɪkɐgˈda nʲe/"], "specific_note": "" }], "example": {"sentence": "Я никогда не ел это.", "translation": "我沒吃過這個。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必～", "related_terms": [{ "term_target": "Мне не нужно...", "pronunciation": ["/mnʲe nʲɪ ˈnuʐnə/"], "specific_note": "" }], "example": {"sentence": "Мне не нужно идти.", "translation": "我不必去。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果～的話，就～", "related_terms": [{ "term_target": "Если..., то...", "pronunciation": ["/ˈjeslʲɪ ... to/"], "specific_note": "" }], "example": {"sentence": "Если ты хочешь, то пошли.", "translation": "如果你想，我們走。"}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當～時，就～", "related_terms": [{ "term_target": "Когда..., ...", "pronunciation": ["/kɐgˈda/"], "specific_note": "" }], "example": {"sentence": "Когда я ем, я счастлив.", "translation": "當我吃東西時，我很開心。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你～", "related_terms": [{ "term_target": "Ты можешь...?", "pronunciation": ["/tɨ ˈmoʐɨʂ/"], "specific_note": "" }], "example": {"sentence": "Ты можешь мне помочь?", "translation": "可以幫我嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做～吧！", "related_terms": [{ "term_target": "Давай...", "pronunciation": ["/dɐˈvaj/"], "specific_note": "" }], "example": {"sentence": "Давай поедим.", "translation": "我們去吃吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為～", "related_terms": [{ "term_target": "Я думаю...", "pronunciation": ["/ja ˈduməjʉ/"], "specific_note": "" }], "example": {"sentence": "Я думаю, это хорошо.", "translation": "我認為這很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做～", "related_terms": [{ "term_target": "Я хочу...", "pronunciation": ["/ja xɐˈtɕu/"], "specific_note": "" }], "example": {"sentence": "Я хочу пойти.", "translation": "我想去。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做～", "related_terms": [{ "term_target": "Я должен...", "pronunciation": ["/ja ˈdoɫʐɨn/"], "specific_note": "陽性" }, { "term_target": "Я должна...", "pronunciation": ["/ja dɐɫˈʐna/"], "specific_note": "陰性" }], "example": {"sentence": "Я должен работать.", "translation": "我必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "Это... (infinitivo)", "pronunciation": ["/ˈɛtə/"], "specific_note": "" }], "example": {"sentence": "Это хорошо есть.", "translation": "吃東西是很好的。"}, "usage_note": "描述動作。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我…嗎？", "related_terms": [{ "term_target": "Ты можешь помочь мне...?", "pronunciation": ["/tɨ ˈmoʐɨʂ pɐˈmotɕ mnʲe/"], "specific_note": "" }], "example": {"sentence": "Ты можешь помочь мне убрать?", "translation": "你可以幫我打掃嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以…嗎？", "related_terms": [{ "term_target": "Можно мне...?", "pronunciation": ["/ˈmoʐnə mnʲe/"], "specific_note": "" }], "example": {"sentence": "Можно мне войти?", "translation": "我可以進來嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡…", "related_terms": [{ "term_target": "Мне не нравится...", "pronunciation": ["/mnʲe nʲɪ ˈnravʲɪt͡sə/"], "specific_note": "" }], "example": {"sentence": "Мне это не нравится.", "translation": "我不喜歡這個。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡…", "related_terms": [{ "term_target": "Я предпочитаю...", "pronunciation": ["/ja prʲɪtpətɕɪˈtaju/"], "specific_note": "" }], "example": {"sentence": "Я предпочитаю чай.", "translation": "我比較喜歡茶。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更…", "related_terms": [{ "term_target": "А более ... чем Б", "pronunciation": ["/a ˈbolʲɪje ... tɕem b/"], "specific_note": "" }], "example": {"sentence": "Это дороже, чем то.", "translation": "這比那個貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有…（存在）", "related_terms": [{ "term_target": "Там есть...", "pronunciation": ["/tam jestʲ/"], "specific_note": "" }], "example": {"sentence": "Там есть собака.", "translation": "那裡有一隻狗。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}