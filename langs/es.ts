import { AppData } from '../types';

export const spanishData: AppData =
{
  "meta": {
    "source_language": "zh-TW",
    "target_language": "es-ES",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 西班牙文完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)"
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
            { "term_target": "Hola", "pronunciation": ["/ˈola/"], "specific_note": "通用" }
          ],
          "example": { "sentence": "Hola, ¿cómo estás?", "translation": "你好，你好嗎？" },
          "usage_note": "最常用的問候語，H 不發音。",
          "image_file": "hello.png"
        },
        {
          "id": "greet-002",
          "term_zh": "再見",
          "related_terms": [
            { "term_target": "Adiós", "pronunciation": ["/aˈdjos/"], "specific_note": "正式/長時間" },
            { "term_target": "Hasta luego", "pronunciation": ["/ˈasta ˈlweɣo/"], "specific_note": "待會見" },
            { "term_target": "Chao", "pronunciation": ["/tʃao/"], "specific_note": "口語" }
          ],
          "example": { "sentence": "Adiós, nos vemos.", "translation": "再見，我們再見。" },
          "usage_note": "Chao 在拉美和西班牙都很常用。",
          "image_file": "goodbye.png"
        },
        {
          "id": "greet-003",
          "term_zh": "謝謝你",
          "related_terms": [
            { "term_target": "Gracias", "pronunciation": ["/ˈgɾaθjas/"], "specific_note": "通用" },
            { "term_target": "Muchas gracias", "pronunciation": ["/ˈmutʃas ˈgɾaθjas/"], "specific_note": "非常感謝" }
          ],
          "example": { "sentence": "Muchas gracias por tu ayuda.", "translation": "非常謝謝你的幫忙。" },
          "usage_note": "回應可用 De nada (不客氣)。",
          "image_file": "thank_you.png"
        },
        {
          "id": "greet-004",
          "term_zh": "對不起",
          "related_terms": [
            { "term_target": "Lo siento", "pronunciation": ["/lo ˈsjento/"], "specific_note": "表達歉意/遺憾" },
            { "term_target": "Perdón", "pronunciation": ["/peɾˈdon/"], "specific_note": "請求原諒/藉過" }
          ],
          "example": { "sentence": "Lo siento, llegué tarde.", "translation": "對不起，我遲到了。" },
          "usage_note": "Lo siento 語氣較重，Perdón 較輕微。",
          "image_file": "sorry.png"
        },
        {
          "id": "greet-005",
          "term_zh": "早安",
          "related_terms": [
            { "term_target": "Buenos días", "pronunciation": ["/ˈbwenos ˈdias/"], "specific_note": "" }
          ],
          "example": { "sentence": "Buenos días, mamá.", "translation": "早安，媽。" },
          "usage_note": "通常用於午餐前。",
          "image_file": "good_morning.png"
        },
        {
          "id": "greet-006",
          "term_zh": "請問...",
          "related_terms": [
            { "term_target": "Perdón", "pronunciation": ["/peɾˈdon/"], "specific_note": "引起注意" },
            { "term_target": "Disculpe", "pronunciation": ["/disˈkulpe/"], "specific_note": "正式/尊稱" }
          ],
          "example": { "sentence": "Disculpe, ¿dónde está el baño?", "translation": "請問，廁所在哪裡？" },
          "usage_note": "對陌生人建議用 Disculpe (Usted形式)。",
          "image_file": "excuse_me.png"
        },
        {
          "id": "greet-007",
          "term_zh": "借過",
          "related_terms": [
            { "term_target": "Permiso", "pronunciation": ["/peɾˈmiso/"], "specific_note": "拉美常用" },
            { "term_target": "Perdón", "pronunciation": ["/peɾˈdon/"], "specific_note": "西班牙常用" }
          ],
          "example": { "sentence": "Con permiso, voy a pasar.", "translation": "借過，我要過去。" },
          "usage_note": "請求讓路時使用。",
          "image_file": "excuse_me_pass.png"
        },
        {
          "id": "greet-008",
          "term_zh": "我不懂",
          "related_terms": [
            { "term_target": "No entiendo", "pronunciation": ["/no enˈtjendo/"], "specific_note": "" }
          ],
          "example": { "sentence": "Lo siento, no entiendo español.", "translation": "抱歉，我不懂西班牙文。" },
          "usage_note": "Entender 是「理解/懂」。",
          "image_file": "dont_understand.png"
        },
        {
          "id": "greet-009",
          "term_zh": "這是什麼？",
          "related_terms": [
            { "term_target": "¿Qué es esto?", "pronunciation": ["/ˈke es ˈesto/"], "specific_note": "" }
          ],
          "example": { "sentence": "¿Qué es esto? ¿Es comida?", "translation": "這是什麼？是食物嗎？" },
          "usage_note": "Esto 指這個東西(中性)。",
          "image_file": "what_is_this.png"
        },
        {
          "id": "greet-010",
          "term_zh": "我想要這個",
          "related_terms": [
            { "term_target": "Quiero esto", "pronunciation": ["/ˈkjeɾo ˈesto/"], "specific_note": "直接" },
            { "term_target": "Me gustaría esto", "pronunciation": ["/me ɣustaˈɾia ˈesto/"], "specific_note": "禮貌" }
          ],
          "example": { "sentence": "Quiero esto, por favor.", "translation": "我要這個，麻煩了。" },
          "usage_note": "Quiero 是 Querer (想要) 的第一人稱變位。",
          "image_file": "i_want_this.png"
        },
        {
          "id": "greet-011",
          "term_zh": "請給我...",
          "related_terms": [
            { "term_target": "Deme...", "pronunciation": ["/ˈdeme/"], "specific_note": "正式(對Usted)" },
            { "term_target": "Dame...", "pronunciation": ["/ˈdame/"], "specific_note": "非正式(對Tú)" }
          ],
          "example": { "sentence": "Deme agua, por favor.", "translation": "請給我水。" },
          "usage_note": "Dar (給) 的命令式 + me (我)。",
          "image_file": "please_give_me.png"
        },
        {
          "id": "greet-012",
          "term_zh": "廁所在哪裡？",
          "related_terms": [
            { "term_target": "¿Dónde está el baño?", "pronunciation": ["/ˈdonde esˈta el ˈbaɲo/"], "specific_note": "" }
          ],
          "example": { "sentence": "Perdón, ¿dónde está el baño?", "translation": "不好意思，廁所在哪裡？" },
          "usage_note": "旅遊必備。",
          "image_file": "where_bathroom.png"
        },
        {
          "id": "greet-013",
          "term_zh": "多少錢？",
          "related_terms": [
            { "term_target": "¿Cuánto cuesta?", "pronunciation": ["/ˈkwanto ˈkwesta/"], "specific_note": "單數物品" },
            { "term_target": "¿Cuánto es?", "pronunciation": ["/ˈkwanto es/"], "specific_note": "總共" }
          ],
          "example": { "sentence": "¿Cuánto cuesta esto?", "translation": "這多少錢？" },
          "usage_note": "Cuesta 是 Costar (花費) 的變位。",
          "image_file": "how_much.png"
        },
        {
          "id": "greet-014",
          "term_zh": "請幫我",
          "related_terms": [
            { "term_target": "Ayúdeme, por favor", "pronunciation": ["/aˈjudeme poɾ faˈβoɾ/"], "specific_note": "正式" },
            { "term_target": "Ayúdame", "pronunciation": ["/aˈjudame/"], "specific_note": "非正式" }
          ],
          "example": { "sentence": "Ayúdeme con la maleta.", "translation": "請幫我拿行李。" },
          "usage_note": "Ayudar 是「幫助」。",
          "image_file": "help_me.png"
        },
        {
          "id": "greet-015",
          "term_zh": "你可以再說一次嗎？",
          "related_terms": [
            { "term_target": "¿Puede repetir?", "pronunciation": ["/ˈpwede repeˈtiɾ/"], "specific_note": "正式" },
            { "term_target": "¿Puedes repetir?", "pronunciation": ["/ˈpweðes repeˈtiɾ/"], "specific_note": "非正式" }
          ],
          "example": { "sentence": "No escuché, ¿puede repetir?", "translation": "沒聽到，能再說一次嗎？" },
          "usage_note": "Poder (能夠) + Repetir (重複)。",
          "image_file": "say_again.png"
        },
        {
          "id": "greet-016",
          "term_zh": "你可以講慢一點嗎？",
          "related_terms": [
            { "term_target": "¿Puede hablar más despacio?", "pronunciation": ["/ˈpwede aˈβlaɾ mas desˈpaθjo/"], "specific_note": "正式" }
          ],
          "example": { "sentence": "Por favor, hable más despacio.", "translation": "拜託講慢一點。" },
          "usage_note": "Despacio 意思是「慢」。",
          "image_file": "speak_slowly.png"
        }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個/它", "related_terms": [{ "term_target": "eso", "pronunciation": ["/ˈeso/"], "specific_note": "中性/那件事" }, { "term_target": "ese / esa", "pronunciation": ["/ˈese/", "/ˈesa/"], "specific_note": "陽/陰性" }], "example": {"sentence": "¿Qué es eso?", "translation": "那是什麼？"}, "usage_note": "不知性別或指事情用 Eso。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "yo", "pronunciation": ["/jo/"], "specific_note": "" }], "example": {"sentence": "Yo soy de Taiwán.", "translation": "我來自台灣。"}, "usage_note": "第一人稱。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "tú", "pronunciation": ["/tu/"], "specific_note": "非正式" }, { "term_target": "usted", "pronunciation": ["/usˈted/"], "specific_note": "正式/尊稱" }], "example": {"sentence": "¿Tú eres estudiante?", "translation": "你是學生嗎？"}, "usage_note": "陌生人或長輩建議用 Usted。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他", "related_terms": [{ "term_target": "él", "pronunciation": ["/el/"], "specific_note": "" }], "example": {"sentence": "Él es mi padre.", "translation": "他是我爸。"}, "usage_note": "注意有重音符號。", "image_file": "he.png" },
        { "id": "pro-05", "term_zh": "他的", "related_terms": [{ "term_target": "su", "pronunciation": ["/su/"], "specific_note": "單數受詞" }, { "term_target": "sus", "pronunciation": ["/sus/"], "specific_note": "複數受詞" }], "example": {"sentence": "Su coche.", "translation": "他的車。"}, "usage_note": "不管擁有者性別，只看受詞單複數。", "image_file": "his.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "nosotros", "pronunciation": ["/noˈsotɾos/"], "specific_note": "陽性/混合" }, { "term_target": "nosotras", "pronunciation": ["/noˈsotɾas/"], "specific_note": "陰性" }], "example": {"sentence": "Nosotros somos familia.", "translation": "我們是家人。"}, "usage_note": "全女用 Nosotras，有男有女用 Nosotros。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "她", "related_terms": [{ "term_target": "ella", "pronunciation": ["/ˈeʎa/"], "specific_note": "" }], "example": {"sentence": "Ella es bonita.", "translation": "她很漂亮。"}, "usage_note": "LL發音近似「Y」。", "image_file": "she.png" },
        { "id": "pro-08", "term_zh": "他們", "related_terms": [{ "term_target": "ellos", "pronunciation": ["/ˈeʎos/"], "specific_note": "陽性/混合" }, { "term_target": "ellas", "pronunciation": ["/ˈeʎas/"], "specific_note": "陰性" }], "example": {"sentence": "Ellos comen.", "translation": "他們在吃。"}, "usage_note": "第三人稱複數。", "image_file": "they.png" },
        { "id": "pro-09", "term_zh": "這個", "related_terms": [{ "term_target": "esto", "pronunciation": ["/ˈesto/"], "specific_note": "中性/這件事" }, { "term_target": "este / esta", "pronunciation": ["/ˈeste/", "/ˈesta/"], "specific_note": "陽/陰性" }], "example": {"sentence": "Esto es mío.", "translation": "這是我的。"}, "usage_note": "不知物體性別用 Esto。", "image_file": "this.png" },
        { "id": "pro-11", "term_zh": "她的", "related_terms": [{ "term_target": "su", "pronunciation": ["/su/"], "specific_note": "" }], "example": {"sentence": "Su bolsa.", "translation": "她的包包。"}, "usage_note": "與「他的」同形。", "image_file": "her.png" },
        { "id": "pro-12", "term_zh": "你的", "related_terms": [{ "term_target": "tu", "pronunciation": ["/tu/"], "specific_note": "非正式" }, { "term_target": "su", "pronunciation": ["/su/"], "specific_note": "正式(您的)" }], "example": {"sentence": "Tu nombre.", "translation": "你的名字。"}, "usage_note": "Tu 無重音。", "image_file": "your.png" },
        { "id": "pro-13", "term_zh": "他們的", "related_terms": [{ "term_target": "su", "pronunciation": ["/su/"], "specific_note": "單數受詞" }, { "term_target": "sus", "pronunciation": ["/sus/"], "specific_note": "複數受詞" }], "example": {"sentence": "Su casa.", "translation": "他們的家。"}, "usage_note": "同 His/Her。", "image_file": "their.png" },
        { "id": "pro-14", "term_zh": "我們的", "related_terms": [{ "term_target": "nuestro", "pronunciation": ["/ˈnwestɾo/"], "specific_note": "陽性" }, { "term_target": "nuestra", "pronunciation": ["/ˈnwestɾa/"], "specific_note": "陰性" }], "example": {"sentence": "Nuestro amigo.", "translation": "我們的朋友。"}, "usage_note": "需隨後面的名詞變性。", "image_file": "our.png" },
        { "id": "pro-15", "term_zh": "這些", "related_terms": [{ "term_target": "estos", "pronunciation": ["/ˈestos/"], "specific_note": "陽性" }, { "term_target": "estas", "pronunciation": ["/ˈestas/"], "specific_note": "陰性" }], "example": {"sentence": "Estos libros.", "translation": "這些書。"}, "usage_note": "近處複數。", "image_file": "these.png" },
        { "id": "pro-16", "term_zh": "那些", "related_terms": [{ "term_target": "esos", "pronunciation": ["/ˈesos/"], "specific_note": "陽性" }, { "term_target": "esas", "pronunciation": ["/ˈesas/"], "specific_note": "陰性" }], "example": {"sentence": "Esos pájaros.", "translation": "那些鳥。"}, "usage_note": "遠處複數。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "ser", "pronunciation": ["/seɾ/"], "specific_note": "本質/身分" }, { "term_target": "estar", "pronunciation": ["/esˈtaɾ/"], "specific_note": "狀態/位置" }], "example": {"sentence": "Soy estudiante. Estoy feliz.", "translation": "我是學生。我很快樂。"}, "usage_note": "Ser 用於永久屬性，Estar 用於暫時狀態或地點。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "tener", "pronunciation": ["/teˈneɾ/"], "specific_note": "擁有" }, { "term_target": "haber", "pronunciation": ["/aˈβeɾ/"], "specific_note": "存在(Hay)/助動詞" }], "example": {"sentence": "Tengo dinero. Hay un perro.", "translation": "我有錢。有一隻狗。"}, "usage_note": "擁有用 Tener，那裡有...用 Hay。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "ir", "pronunciation": ["/iɾ/"], "specific_note": "" }], "example": {"sentence": "Voy a casa.", "translation": "我要回家。", }, "usage_note": "不規則動詞。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "conseguir", "pronunciation": ["/konseˈɣiɾ/"], "specific_note": "獲得" }, { "term_target": "obtener", "pronunciation": ["/obteˈneɾ/"], "specific_note": "取得" }], "example": {"sentence": "Conseguir trabajo.", "translation": "找到(得到)工作。"}, "usage_note": "獲得。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "hacer", "pronunciation": ["/aˈθeɾ/"], "specific_note": "" }], "example": {"sentence": "Hacer la tarea.", "translation": "做作業。"}, "usage_note": "H 不發音。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "decir", "pronunciation": ["/deˈθiɾ/"], "specific_note": "說出" }, { "term_target": "hablar", "pronunciation": ["/aˈβlaɾ/"], "specific_note": "講話/交談" }], "example": {"sentence": "Di hola.", "translation": "說你好。"}, "usage_note": "Hablar 用於語言能力或動作，Decir 用於內容。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "saber", "pronunciation": ["/saˈβeɾ/"], "specific_note": "知識/技能" }, { "term_target": "conocer", "pronunciation": ["/konoˈθeɾ/"], "specific_note": "認識人/地方" }], "example": {"sentence": "No sé. Conozco a Juan.", "translation": "我不知道。我認識胡安。"}, "usage_note": "區分知識與熟悉度。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "pensar", "pronunciation": ["/penˈsaɾ/"], "specific_note": "" }], "example": {"sentence": "Pienso que sí.", "translation": "我想是的。"}, "usage_note": "思考。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "ver", "pronunciation": ["/beɾ/"], "specific_note": "" }], "example": {"sentence": "Veo un pájaro.", "translation": "我看見一隻鳥。"}, "usage_note": "看。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "hacer", "pronunciation": ["/aˈθeɾ/"], "specific_note": "" }], "example": {"sentence": "Hacer café.", "translation": "煮咖啡。"}, "usage_note": "與「做」同字。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "venir", "pronunciation": ["/beˈniɾ/"], "specific_note": "" }], "example": {"sentence": "Ven aquí.", "translation": "來這裡。"}, "usage_note": "過來。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "necesitar", "pronunciation": ["/neθesiˈtaɾ/"], "specific_note": "" }], "example": {"sentence": "Necesito agua.", "translation": "我需要水。"}, "usage_note": "需要。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "usar", "pronunciation": ["/uˈsaɾ/"], "specific_note": "" }], "example": {"sentence": "Usar un bolígrafo.", "translation": "用原子筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "encontrar", "pronunciation": ["/enkonˈtɾaɾ/"], "specific_note": "" }], "example": {"sentence": "Encontrar trabajo.", "translation": "找工作。"}, "usage_note": "發現/找到。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "dar", "pronunciation": ["/daɾ/"], "specific_note": "" }], "example": {"sentence": "Dame eso.", "translation": "給我那個。"}, "usage_note": "給予。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "decir", "pronunciation": ["/deˈθiɾ/"], "specific_note": "告訴" }, { "term_target": "contar", "pronunciation": ["/konˈtaɾ/"], "specific_note": "講述(故事)" }], "example": {"sentence": "Dime la verdad.", "translation": "告訴我真相。"}, "usage_note": "告知。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "trabajar", "pronunciation": ["/tɾaβaˈxaɾ/"], "specific_note": "" }], "example": {"sentence": "Trabajo aquí.", "translation": "我在這工作。"}, "usage_note": "勞動。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "gustar", "pronunciation": ["/gusˈtaɾ/"], "specific_note": "" }], "example": {"sentence": "Me gusta.", "translation": "我喜歡。"}, "usage_note": "用法特殊：Me gusta (單數), Me gustan (複數)。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "levantarse", "pronunciation": ["/leβanˈtaɾse/"], "specific_note": "起床(起身)" }, { "term_target": "despertarse", "pronunciation": ["/despeɾˈtaɾse/"], "specific_note": "醒來" }], "example": {"sentence": "Me levanto a las 7.", "translation": "我七點起床。"}, "usage_note": "反身動詞。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "hablar", "pronunciation": ["/aˈβlaɾ/"], "specific_note": "" }], "example": {"sentence": "Hablar español.", "translation": "說西班牙文。"}, "usage_note": "講語言/說話。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "oír", "pronunciation": ["/oˈiɾ/"], "specific_note": "聽見" }, { "term_target": "escuchar", "pronunciation": ["/eskuˈtʃaɾ/"], "specific_note": "聆聽" }], "example": {"sentence": "¿Me oyes?", "translation": "聽得到我嗎？"}, "usage_note": "Oír(能力), Escuchar(專注)。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "escribir", "pronunciation": ["/eskɾiˈβiɾ/"], "specific_note": "" }], "example": {"sentence": "Escribir un nombre.", "translation": "寫名字。"}, "usage_note": "書寫。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "leer", "pronunciation": ["/leˈeɾ/"], "specific_note": "" }], "example": {"sentence": "Leer un libro.", "translation": "看書。"}, "usage_note": "閱讀。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "esperar", "pronunciation": ["/espeˈɾaɾ/"], "specific_note": "" }], "example": {"sentence": "Espérame.", "translation": "等我。"}, "usage_note": "也有「希望」的意思。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "probar", "pronunciation": ["/pɾoˈβaɾ/"], "specific_note": "試吃/試用" }, { "term_target": "intentar", "pronunciation": ["/intenˈtaɾ/"], "specific_note": "企圖" }], "example": {"sentence": "Prueba esto.", "translation": "試試這個(食物)。"}, "usage_note": "Probar(體驗), Intentar(嘗試做)。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "pagar", "pronunciation": ["/paˈɣaɾ/"], "specific_note": "" }], "example": {"sentence": "Pagar la cuenta.", "translation": "付帳單。"}, "usage_note": "支付。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "elegir", "pronunciation": ["/eleˈxiɾ/"], "specific_note": "" }, { "term_target": "escoger", "pronunciation": ["/eskoˈxeɾ/"], "specific_note": "" }], "example": {"sentence": "Elige uno.", "translation": "選一個。"}, "usage_note": "兩者通用。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "entrar", "pronunciation": ["/enˈtɾaɾ/"], "specific_note": "" }], "example": {"sentence": "Entrar en la casa.", "translation": "進屋。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "vivir", "pronunciation": ["/biˈβiɾ/"], "specific_note": "" }], "example": {"sentence": "Vivo en Taipéi.", "translation": "我住台北。"}, "usage_note": "居住/生活。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "llegar", "pronunciation": ["/ʎeˈɣaɾ/"], "specific_note": "" }], "example": {"sentence": "Llegar a tiempo.", "translation": "準時到達。"}, "usage_note": "抵達。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "caminar", "pronunciation": ["/kamiˈnaɾ/"], "specific_note": "" }, { "term_target": "andar", "pronunciation": ["/anˈdaɾ/"], "specific_note": "" }], "example": {"sentence": "Caminar a casa.", "translation": "走路回家。"}, "usage_note": "步行。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "abrir", "pronunciation": ["/aˈβɾiɾ/"], "specific_note": "" }], "example": {"sentence": "Abrir la puerta.", "translation": "開門。"}, "usage_note": "開啟。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "cerrar", "pronunciation": ["/θeˈraɾ/"], "specific_note": "" }], "example": {"sentence": "Cerrar la ventana.", "translation": "關窗。"}, "usage_note": "關上。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "ayudar", "pronunciation": ["/aʝuˈdaɾ/"], "specific_note": "" }], "example": {"sentence": "Ayúdame.", "translation": "幫我。"}, "usage_note": "協助。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "traer", "pronunciation": ["/tɾaˈeɾ/"], "specific_note": "" }], "example": {"sentence": "Trae agua.", "translation": "帶水來。"}, "usage_note": "攜帶至此。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "需要", "related_terms": [{ "term_target": "necesitar", "pronunciation": ["/neθesiˈtaɾ/"], "specific_note": "" }], "example": {"sentence": "Necesito agua.", "translation": "我需要水。"}, "usage_note": "需要。", "image_file": "need.png" },
        { "id": "v-37", "term_zh": "使用", "related_terms": [{ "term_target": "usar", "pronunciation": ["/uˈsaɾ/"], "specific_note": "" }], "example": {"sentence": "Usar un bolígrafo.", "translation": "用原子筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-38", "term_zh": "變成", "related_terms": [{ "term_target": "convertirse en", "pronunciation": ["/kombeɾˈtiɾse en/"], "specific_note": "" }], "example": {"sentence": "Se convirtió en rey.", "translation": "他變成了國王。"}, "usage_note": "變化。", "image_file": "become.png" },
        { "id": "v-39", "term_zh": "開始", "related_terms": [{ "term_target": "empezar", "pronunciation": ["/empeˈθaɾ/"], "specific_note": "" }, { "term_target": "comenzar", "pronunciation": ["/komenˈθaɾ/"], "specific_note": "" }], "example": {"sentence": "Empezar ahora.", "translation": "現在開始。"}, "usage_note": "兩者通用。", "image_file": "start.png" },
        { "id": "v-40", "term_zh": "開始", "related_terms": [{ "term_target": "comenzar", "pronunciation": ["/komenˈθaɾ/"], "specific_note": "" }], "example": {"sentence": "Comenzar el juego.", "translation": "遊戲開始。"}, "usage_note": "同上。", "image_file": "begin.png" },
        { "id": "v-41", "term_zh": "結束", "related_terms": [{ "term_target": "terminar", "pronunciation": ["/teɾmiˈnaɾ/"], "specific_note": "" }, { "term_target": "acabar", "pronunciation": ["/akaˈβaɾ/"], "specific_note": "" }], "example": {"sentence": "Terminar el trabajo.", "translation": "工作結束。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-42", "term_zh": "停止", "related_terms": [{ "term_target": "parar", "pronunciation": ["/paˈɾaɾ/"], "specific_note": "" }], "example": {"sentence": "Para aquí.", "translation": "停在這裡。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-43", "term_zh": "記住", "related_terms": [{ "term_target": "recordar", "pronunciation": ["/rekoɾˈdaɾ/"], "specific_note": "" }], "example": {"sentence": "Recuérdame.", "translation": "記得我。"}, "usage_note": "記憶。", "image_file": "remember.png" },
        { "id": "v-44", "term_zh": "談話", "related_terms": [{ "term_target": "hablar", "pronunciation": ["/aˈβlaɾ/"], "specific_note": "" }, { "term_target": "conversar", "pronunciation": ["/kombeɾˈsaɾ/"], "specific_note": "" }], "example": {"sentence": "Hablar contigo.", "translation": "跟你談話。"}, "usage_note": "交談。", "image_file": "talk.png" },
        { "id": "v-45", "term_zh": "見面", "related_terms": [{ "term_target": "encontrarse", "pronunciation": ["/enkonˈtɾaɾse/"], "specific_note": "偶遇/碰面" }, { "term_target": "conocer", "pronunciation": ["/konoˈθeɾ/"], "specific_note": "初次見面" }], "example": {"sentence": "Encontrarse con amigos.", "translation": "跟朋友碰面。"}, "usage_note": "Conocer 是認識。", "image_file": "meet.png" },
        { "id": "v-46", "term_zh": "乘坐（工具）", "related_terms": [{ "term_target": "tomar", "pronunciation": ["/toˈmaɾ/"], "specific_note": "通用" }, { "term_target": "coger", "pronunciation": ["/koˈxeɾ/"], "specific_note": "西班牙用(拉美慎用)" }], "example": {"sentence": "Tomar un autobús.", "translation": "搭公車。"}, "usage_note": "Coger 在拉美有不雅含義。", "image_file": "take.png" },
        { "id": "v-47", "term_zh": "放", "related_terms": [{ "term_target": "poner", "pronunciation": ["/poˈneɾ/"], "specific_note": "" }], "example": {"sentence": "Ponlo aquí.", "translation": "放這裡。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-48", "term_zh": "吃", "related_terms": [{ "term_target": "comer", "pronunciation": ["/koˈmeɾ/"], "specific_note": "" }], "example": {"sentence": "Comer algo.", "translation": "吃點東西。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-49", "term_zh": "睡覺", "related_terms": [{ "term_target": "dormir", "pronunciation": ["/doɾˈmiɾ/"], "specific_note": "" }], "example": {"sentence": "Me voy a dormir.", "translation": "我要去睡覺了。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-50", "term_zh": "寄送", "related_terms": [{ "term_target": "enviar", "pronunciation": ["/emˈbjaɾ/"], "specific_note": "" }, { "term_target": "mandar", "pronunciation": ["/manˈdaɾ/"], "specific_note": "" }], "example": {"sentence": "Enviar un correo.", "translation": "寄信。"}, "usage_note": "傳送。", "image_file": "send.png" },
        { "id": "v-51", "term_zh": "開車", "related_terms": [{ "term_target": "conducir", "pronunciation": ["/konduˈθiɾ/"], "specific_note": "西班牙" }, { "term_target": "manejar", "pronunciation": ["/maneˈxaɾ/"], "specific_note": "拉美" }], "example": {"sentence": "Conducir un coche.", "translation": "開車。"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-52", "term_zh": "讀書", "related_terms": [{ "term_target": "estudiar", "pronunciation": ["/estuˈdjaɾ/"], "specific_note": "" }], "example": {"sentence": "Estudiar español.", "translation": "讀西班牙文。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-53", "term_zh": "回去", "related_terms": [{ "term_target": "volver", "pronunciation": ["/bolˈbeɾ/"], "specific_note": "" }, { "term_target": "regresar", "pronunciation": ["/reɣɾeˈsaɾ/"], "specific_note": "" }], "example": {"sentence": "Volver a casa.", "translation": "回家。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "bueno/a", "pronunciation": ["/ˈbweno/"], "specific_note": "" }], "example": {"sentence": "Buen trabajo.", "translation": "做得好。"}, "usage_note": "陽性單數名詞前用 Buen。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "malo/a", "pronunciation": ["/ˈmalo/"], "specific_note": "" }], "example": {"sentence": "Mal día.", "translation": "壞的一天。"}, "usage_note": "陽性單數名詞前用 Mal。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "nuevo/a", "pronunciation": ["/ˈnweβo/"], "specific_note": "" }], "example": {"sentence": "Teléfono nuevo.", "translation": "新手機。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "primero/a", "pronunciation": ["/pɾiˈmeɾo/"], "specific_note": "" }], "example": {"sentence": "Primera vez.", "translation": "第一次。"}, "usage_note": "陽性單數名詞前用 Primer。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "pasado/a", "pronunciation": ["/paˈsado/"], "specific_note": "" }, { "term_target": "anterior", "pronunciation": ["/anteˈɾjoɾ/"], "specific_note": "" }], "example": {"sentence": "La semana pasada.", "translation": "上週。"}, "usage_note": "過去的。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "próximo/a", "pronunciation": ["/ˈpɾoksimo/"], "specific_note": "" }, { "term_target": "siguiente", "pronunciation": ["/siˈɣjente/"], "specific_note": "" }], "example": {"sentence": "La próxima estación.", "translation": "下一站。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "largo/a", "pronunciation": ["/ˈlaɾɣo/"], "specific_note": "" }], "example": {"sentence": "Pelo largo.", "translation": "長髮。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "grande", "pronunciation": ["/ˈgɾande/"], "specific_note": "" }], "example": {"sentence": "Casa grande.", "translation": "大房子。"}, "usage_note": "單數名詞前用 Gran。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "pequeño/a", "pronunciation": ["/peˈkeɲo/"], "specific_note": "" }], "example": {"sentence": "Gato pequeño.", "translation": "小貓。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "mucho/a", "pronunciation": ["/ˈmutʃo/"], "specific_note": "" }], "example": {"sentence": "Mucha gente.", "translation": "很多人。"}, "usage_note": "數量多。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "alto/a", "pronunciation": ["/ˈalto/"], "specific_note": "" }], "example": {"sentence": "Edificio alto.", "translation": "高樓。"}, "usage_note": "高度。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "joven", "pronunciation": ["/ˈxoβen/"], "specific_note": "" }], "example": {"sentence": "Hombre joven.", "translation": "年輕人。"}, "usage_note": "年紀小。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的", "related_terms": [{ "term_target": "viejo/a", "pronunciation": ["/ˈbjexo/"], "specific_note": "物" }, { "term_target": "mayor", "pronunciation": ["/maˈʝoɾ/"], "specific_note": "人(較禮貌)" }], "example": {"sentence": "Libro viejo.", "translation": "舊書。"}, "usage_note": "形容人直接用 Viejo 有時不禮貌。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "cerca", "pronunciation": ["/ˈθeɾka/"], "specific_note": "副詞用法" }, { "term_target": "cercano/a", "pronunciation": ["/θeɾˈkano/"], "specific_note": "形容詞" }], "example": {"sentence": "Está cerca.", "translation": "很近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "lejos", "pronunciation": ["/ˈlexos/"], "specific_note": "副詞用法" }, { "term_target": "lejano/a", "pronunciation": ["/leˈxano/"], "specific_note": "形容詞" }], "example": {"sentence": "Está lejos.", "translation": "很遠。"}, "usage_note": "距離遠。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "rápido/a", "pronunciation": ["/ˈrapiðo/"], "specific_note": "" }], "example": {"sentence": "Coche rápido.", "translation": "快車。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "lento/a", "pronunciation": ["/ˈlento/"], "specific_note": "" }], "example": {"sentence": "Internet lento.", "translation": "網路慢。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "caliente", "pronunciation": ["/kaˈljente/"], "specific_note": "物品" }, { "term_target": "caluroso/a", "pronunciation": ["/kaluˈɾoso/"], "specific_note": "天氣" }], "example": {"sentence": "Agua caliente.", "translation": "熱水。"}, "usage_note": "天氣熱也可用 Hace calor。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "frío/a", "pronunciation": ["/ˈfɾio/"], "specific_note": "" }], "example": {"sentence": "Bebida fría.", "translation": "冷飲。"}, "usage_note": "低溫。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "limpio/a", "pronunciation": ["/ˈlimpjo/"], "specific_note": "" }], "example": {"sentence": "Habitación limpia.", "translation": "乾淨的房間。"}, "usage_note": "無髒汙。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "sucio/a", "pronunciation": ["/ˈsuθjo/"], "specific_note": "" }], "example": {"sentence": "Manos sucias.", "translation": "髒手。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "fácil", "pronunciation": ["/ˈfaθil/"], "specific_note": "" }], "example": {"sentence": "Es fácil.", "translation": "這很簡單。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "difícil", "pronunciation": ["/diˈfiθil/"], "specific_note": "" }], "example": {"sentence": "Es difícil.", "translation": "很難。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "correcto/a", "pronunciation": ["/koˈrekto/"], "specific_note": "" }], "example": {"sentence": "Respuesta correcta.", "translation": "正確答案。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "incorrecto/a", "pronunciation": ["/inkoˈrekto/"], "specific_note": "形容詞" }, { "term_target": "error", "pronunciation": ["/eˈroɾ/"], "specific_note": "名詞" }], "example": {"sentence": "Es incorrecto.", "translation": "是錯的。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "importante", "pronunciation": ["/impoɾˈtante/"], "specific_note": "" }], "example": {"sentence": "Reunión importante.", "translation": "重要會議。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "diferente", "pronunciation": ["/difeˈɾente/"], "specific_note": "" }], "example": {"sentence": "Color diferente.", "translation": "不同顏色。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "real", "pronunciation": ["/reˈal/"], "specific_note": "真實" }, { "term_target": "verdadero/a", "pronunciation": ["/beɾdaˈdeɾo/"], "specific_note": "真的" }], "example": {"sentence": "Amor verdadero.", "translation": "真愛。"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "interesante", "pronunciation": ["/inteɾeˈsante/"], "specific_note": "" }], "example": {"sentence": "Libro interesante.", "translation": "有趣的書。"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "hermoso/a", "pronunciation": ["/eɾˈmoso/"], "specific_note": "美麗" }, { "term_target": "bonito/a", "pronunciation": ["/boˈnito/"], "specific_note": "漂亮" }], "example": {"sentence": "Flor hermosa.", "translation": "美麗的花。"}, "usage_note": "形容人或景物。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "barato/a", "pronunciation": ["/baˈɾato/"], "specific_note": "" }], "example": {"sentence": "Es barato.", "translation": "很便宜。"}, "usage_note": "價格低。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "caro/a", "pronunciation": ["/ˈkaɾo/"], "specific_note": "" }], "example": {"sentence": "Demasiado caro.", "translation": "太貴了。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "hambriento/a", "pronunciation": ["/amˈbɾjento/"], "specific_note": "" }], "example": {"sentence": "Tengo hambre.", "translation": "我餓了(我有飢餓)。"}, "usage_note": "西文常用 Tener hambre (有飢餓)。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "cansado/a", "pronunciation": ["/kanˈsado/"], "specific_note": "" }], "example": {"sentence": "Estoy cansado.", "translation": "我累了。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "ocupado/a", "pronunciation": ["/okuˈpado/"], "specific_note": "" }], "example": {"sentence": "Estoy ocupado.", "translation": "我很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "feliz", "pronunciation": ["/feˈliθ/"], "specific_note": "幸福/快樂" }, { "term_target": "contento/a", "pronunciation": ["/konˈtento/"], "specific_note": "高興/滿意" }], "example": {"sentence": "Estoy feliz.", "translation": "我很快樂。"}, "usage_note": "心情。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "triste", "pronunciation": ["/ˈtɾiste/"], "specific_note": "" }], "example": {"sentence": "Historia triste.", "translation": "悲傷的故事。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "similar", "pronunciation": ["/simiˈlaɾ/"], "specific_note": "" }, { "term_target": "parecido/a", "pronunciation": ["/paɾeˈθiðo/"], "specific_note": "" }], "example": {"sentence": "Son similares.", "translation": "他們很像。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "famoso/a", "pronunciation": ["/faˈmoso/"], "specific_note": "" }], "example": {"sentence": "Actor famoso.", "translation": "知名演員。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "extranjero/a", "pronunciation": ["/extɾaŋˈxeɾo/"], "specific_note": "" }], "example": {"sentence": "País extranjero.", "translation": "外國。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "inteligente", "pronunciation": ["/inteliˈxente/"], "specific_note": "" }], "example": {"sentence": "Chico inteligente.", "translation": "聰明的男孩。"}, "usage_note": "腦袋好。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "peligroso/a", "pronunciation": ["/peliˈɣɾoso/"], "specific_note": "" }], "example": {"sentence": "Es peligroso.", "translation": "這很危險。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "amable", "pronunciation": ["/aˈmaβle/"], "specific_note": "" }], "example": {"sentence": "Persona amable.", "translation": "親切的人。"}, "usage_note": "親切/友善。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "todo/a", "pronunciation": ["/ˈtodo/"], "specific_note": "全部" }, { "term_target": "cada", "pronunciation": ["/ˈkaða/"], "specific_note": "每一個" }], "example": {"sentence": "Todos los días.", "translation": "每一天(所有日子)。"}, "usage_note": "全部。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "favorito/a", "pronunciation": ["/faβoˈɾito/"], "specific_note": "" }], "example": {"sentence": "Comida favorita.", "translation": "最愛的食物。"}, "usage_note": "中意。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "delicioso/a", "pronunciation": ["/deliˈθjoso/"], "specific_note": "" }, { "term_target": "rico/a", "pronunciation": ["/ˈriko/"], "specific_note": "口語/富有" }], "example": {"sentence": "Comida rica.", "translation": "好吃的食物。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "tiempo", "pronunciation": ["/ˈtjempo/"], "specific_note": "長度/天氣" }, { "term_target": "hora", "pronunciation": ["/ˈoɾa/"], "specific_note": "時刻" }], "example": {"sentence": "¿Qué hora es?", "translation": "現在幾點？"}, "usage_note": "時刻/時間。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "gente", "pronunciation": ["/ˈxente/"], "specific_note": "集合名詞" }, { "term_target": "personas", "pronunciation": ["/peɾˈsonas/"], "specific_note": "複數" }], "example": {"sentence": "Mucha gente.", "translation": "很多人。"}, "usage_note": "Gente 是單數名詞但表複數意。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "dinero", "pronunciation": ["/diˈneɾo/"], "specific_note": "" }], "example": {"sentence": "No tengo dinero.", "translation": "沒錢。"}, "usage_note": "不可數。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "niño/a", "pronunciation": ["/ˈniɲo/"], "specific_note": "男孩/女孩" }, { "term_target": "hijo/a", "pronunciation": ["/ˈixo/"], "specific_note": "兒子/女兒" }], "example": {"sentence": "Niño pequeño.", "translation": "小孩。"}, "usage_note": "兒童。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "agua", "pronunciation": ["/ˈaɣwa/"], "specific_note": "" }], "example": {"sentence": "Beber agua.", "translation": "喝水。"}, "usage_note": "陰性名詞，但單數前用 El agua。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "comida", "pronunciation": ["/koˈmiða/"], "specific_note": "" }], "example": {"sentence": "Comida rica.", "translation": "好吃的食物。"}, "usage_note": "吃的東西。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "amigo/a", "pronunciation": ["/aˈmiɣo/"], "specific_note": "" }], "example": {"sentence": "Mi amigo.", "translation": "我朋友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "familia", "pronunciation": ["/faˈmilja/"], "specific_note": "" }], "example": {"sentence": "Familia grande.", "translation": "大家庭。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "estudiante", "pronunciation": ["/estuˈðjante/"], "specific_note": "" }, { "term_target": "alumno/a", "pronunciation": ["/aˈlumno/"], "specific_note": "" }], "example": {"sentence": "Soy estudiante.", "translation": "我是學生。"}, "usage_note": "Estudiante 不分陰陽。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "cultura", "pronunciation": ["/kulˈtuɾa/"], "specific_note": "" }], "example": {"sentence": "Cultura local.", "translation": "當地文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "problema", "pronunciation": ["/pɾoˈβlema/"], "specific_note": "" }], "example": {"sentence": "No hay problema.", "translation": "沒問題。"}, "usage_note": "陽性名詞 (El problema)。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "empresa", "pronunciation": ["/emˈpɾesa/"], "specific_note": "" }, { "term_target": "compañía", "pronunciation": ["/kompaˈɲia/"], "specific_note": "" }], "example": {"sentence": "Empresa grande.", "translation": "大公司。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "hombre", "pronunciation": ["/ˈombɾe/"], "specific_note": "" }], "example": {"sentence": "Es un hombre.", "translation": "他是男人。"}, "usage_note": "性別。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "mujer", "pronunciation": ["/muˈxeɾ/"], "specific_note": "" }], "example": {"sentence": "Es una mujer.", "translation": "她是女人。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "escuela", "pronunciation": ["/esˈkwela/"], "specific_note": "" }], "example": {"sentence": "Ir a la escuela.", "translation": "去學校。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "profesor/a", "pronunciation": ["/pɾofeˈsoɾ/"], "specific_note": "" }, { "term_target": "maestro/a", "pronunciation": ["/maˈestɾo/"], "specific_note": "小學老師/師傅" }], "example": {"sentence": "Profesor de español.", "translation": "西班牙文老師。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "película", "pronunciation": ["/peˈlikula/"], "specific_note": "電影" }, { "term_target": "video", "pronunciation": ["/ˈbideo/"], "specific_note": "影片" }], "example": {"sentence": "Ver una película.", "translation": "看電影。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "móvil", "pronunciation": ["/ˈmoβil/"], "specific_note": "西班牙" }, { "term_target": "celular", "pronunciation": ["/θeluˈlaɾ/"], "specific_note": "拉美" }], "example": {"sentence": "Mi móvil.", "translation": "我手機。"}, "usage_note": "地區習慣不同。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "ordenador", "pronunciation": ["/oɾdenaˈdoɾ/"], "specific_note": "西班牙" }, { "term_target": "computadora", "pronunciation": ["/komputaˈdoɾa/"], "specific_note": "拉美" }], "example": {"sentence": "Usar el ordenador.", "translation": "用電腦。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "coche", "pronunciation": ["/ˈkotʃe/"], "specific_note": "西班牙" }, { "term_target": "carro", "pronunciation": ["/ˈkaro/"], "specific_note": "拉美" }, { "term_target": "auto", "pronunciation": ["/ˈauto/"], "specific_note": "通用" }], "example": {"sentence": "Conducir un coche.", "translation": "開車。"}, "usage_note": "地區習慣不同。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "mercado", "pronunciation": ["/meɾˈkaðo/"], "specific_note": "" }], "example": {"sentence": "Mercado nocturno.", "translation": "夜市。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "ropa", "pronunciation": ["/ˈropa/"], "specific_note": "" }], "example": {"sentence": "Comprar ropa.", "translation": "買衣服。"}, "usage_note": "集合名詞(單數)。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "tienda", "pronunciation": ["/ˈtjenda/"], "specific_note": "" }], "example": {"sentence": "Tienda de ropa.", "translation": "服飾店。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "autobús", "pronunciation": ["/autoˈβus/"], "specific_note": "" }], "example": {"sentence": "Tomar el autobús.", "translation": "搭公車。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "calle", "pronunciation": ["/ˈkaʎe/"], "specific_note": "" }], "example": {"sentence": "En la calle.", "translation": "在街上。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "casa", "pronunciation": ["/ˈkasa/"], "specific_note": "" }], "example": {"sentence": "Mi casa.", "translation": "我家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "madre", "pronunciation": ["/ˈmaðɾe/"], "specific_note": "正式" }, { "term_target": "mamá", "pronunciation": ["/maˈma/"], "specific_note": "口語" }], "example": {"sentence": "Mi madre.", "translation": "我媽媽。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "padre", "pronunciation": ["/ˈpaðɾe/"], "specific_note": "正式" }, { "term_target": "papá", "pronunciation": ["/paˈpa/"], "specific_note": "口語" }], "example": {"sentence": "Mi padre.", "translation": "我爸爸。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "hermano", "pronunciation": ["/eɾˈmano/"], "specific_note": "" }], "example": {"sentence": "Mi hermano.", "translation": "我兄弟。"}, "usage_note": "兄弟。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "hermana", "pronunciation": ["/eɾˈmana/"], "specific_note": "" }], "example": {"sentence": "Mi hermana.", "translation": "我姐妹。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "chino", "pronunciation": ["/ˈtʃino/"], "specific_note": "" }], "example": {"sentence": "Hablar chino.", "translation": "說中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "mañana", "pronunciation": ["/maˈɲana/"], "specific_note": "" }], "example": {"sentence": "Por la mañana.", "translation": "在早晨。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "noche", "pronunciation": ["/ˈnotʃe/"], "specific_note": "" }], "example": {"sentence": "Buenas noches.", "translation": "晚安。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "billete", "pronunciation": ["/biˈʎete/"], "specific_note": "西班牙" }, { "term_target": "boleto", "pronunciation": ["/boˈleto/"], "specific_note": "拉美" }], "example": {"sentence": "Un billete, por favor.", "translation": "一張票，麻煩了。"}, "usage_note": "地區習慣不同。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "bolso", "pronunciation": ["/ˈbolso/"], "specific_note": "手提包" }, { "term_target": "mochila", "pronunciation": ["/moˈtʃila/"], "specific_note": "後背包" }], "example": {"sentence": "Bolso grande.", "translation": "大包包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "taza", "pronunciation": ["/ˈtaθa/"], "specific_note": "馬克杯" }, { "term_target": "vaso", "pronunciation": ["/ˈbaso/"], "specific_note": "玻璃杯" }], "example": {"sentence": "Taza de té.", "translation": "一杯茶。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "médico/a", "pronunciation": ["/ˈmeðiko/"], "specific_note": "" }, { "term_target": "doctor/a", "pronunciation": ["/dokˈtoɾ/"], "specific_note": "" }], "example": {"sentence": "Ir al médico.", "translation": "看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "policía", "pronunciation": ["/poliˈθia/"], "specific_note": "" }], "example": {"sentence": "Llamar a la policía.", "translation": "叫警察。"}, "usage_note": "警察。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "hospital", "pronunciation": ["/ospiˈtal/"], "specific_note": "" }], "example": {"sentence": "Ir al hospital.", "translation": "去醫院。"}, "usage_note": "H 不發音。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "asiento", "pronunciation": ["/aˈsjento/"], "specific_note": "" }], "example": {"sentence": "Tomar asiento.", "translation": "請坐。"}, "usage_note": "位子。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "puerta", "pronunciation": ["/ˈpweɾta/"], "specific_note": "" }], "example": {"sentence": "Abrir la puerta.", "translation": "開門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "habitación", "pronunciation": ["/aβitaˈθjon/"], "specific_note": "" }, { "term_target": "cuarto", "pronunciation": ["/ˈkwaɾto/"], "specific_note": "口語" }], "example": {"sentence": "Mi habitación.", "translation": "我房間。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "estación", "pronunciation": ["/estaˈθjon/"], "specific_note": "" }], "example": {"sentence": "Estación de tren.", "translation": "火車站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "metro", "pronunciation": ["/ˈmetɾo/"], "specific_note": "" }], "example": {"sentence": "Estación de metro.", "translation": "地鐵站。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "tren", "pronunciation": ["/tɾen/"], "specific_note": "" }], "example": {"sentence": "Viajar en tren.", "translation": "搭火車旅行。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "aeropuerto", "pronunciation": ["/aeɾoˈpweɾto/"], "specific_note": "" }], "example": {"sentence": "Ir al aeropuerto.", "translation": "去機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "equipaje", "pronunciation": ["/ekiˈpaxe/"], "specific_note": "" }, { "term_target": "maleta", "pronunciation": ["/maˈleta/"], "specific_note": "手提箱" }], "example": {"sentence": "Mucho equipaje.", "translation": "很多行李。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "mapa", "pronunciation": ["/ˈmapa/"], "specific_note": "" }], "example": {"sentence": "Mirar el mapa.", "translation": "看地圖。"}, "usage_note": "陽性名詞 (El mapa)。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "mostrador", "pronunciation": ["/mostɾaˈdoɾ/"], "specific_note": "" }], "example": {"sentence": "En el mostrador.", "translation": "在櫃檯。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "vestíbulo", "pronunciation": ["/besˈtiβulo/"], "specific_note": "" }], "example": {"sentence": "Esperar en el vestíbulo.", "translation": "在大廳等。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "reserva", "pronunciation": ["/reˈseɾβa/"], "specific_note": "" }], "example": {"sentence": "Hacer una reserva.", "translation": "做預約。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "registro", "pronunciation": ["/reˈxistɾo/"], "specific_note": "" }, { "term_target": "check-in", "pronunciation": ["/tʃek in/"], "specific_note": "常用借詞" }], "example": {"sentence": "Hacer el check-in.", "translation": "辦理入住。"}, "usage_note": "常用英文借詞。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "salida", "pronunciation": ["/saˈliða/"], "specific_note": "" }, { "term_target": "check-out", "pronunciation": ["/tʃek aut/"], "specific_note": "常用借詞" }], "example": {"sentence": "Hora de salida.", "translation": "退房時間。"}, "usage_note": "常用英文借詞。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "bebida", "pronunciation": ["/beˈβiða/"], "specific_note": "" }], "example": {"sentence": "Bebida fría.", "translation": "冷飲。"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "menú", "pronunciation": ["/meˈnu/"], "specific_note": "套餐/菜單" }, { "term_target": "carta", "pronunciation": ["/ˈkaɾta/"], "specific_note": "點菜單" }], "example": {"sentence": "El menú, por favor.", "translation": "請給菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "almuerzo", "pronunciation": ["/alˈmweɾθo/"], "specific_note": "" }], "example": {"sentence": "Comer el almuerzo.", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "cena", "pronunciation": ["/ˈθena/"], "specific_note": "" }], "example": {"sentence": "Comer la cena.", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "cuenta", "pronunciation": ["/ˈkwenta/"], "specific_note": "" }], "example": {"sentence": "La cuenta, por favor.", "translation": "麻煩結帳。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "precio", "pronunciation": ["/ˈpɾeθjo/"], "specific_note": "" }], "example": {"sentence": "Buen precio.", "translation": "好價格。"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "recibo", "pronunciation": ["/reˈθiβo/"], "specific_note": "" }], "example": {"sentence": "El recibo, por favor.", "translation": "請給收據。"}, "usage_note": "證明。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "talla", "pronunciation": ["/ˈtaʎa/"], "specific_note": "衣服/鞋子" }, { "term_target": "tamaño", "pronunciation": ["/taˈmaɲo/"], "specific_note": "物體大小" }], "example": {"sentence": "Talla grande.", "translation": "大尺寸。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "entrada", "pronunciation": ["/enˈtɾaða/"], "specific_note": "" }], "example": {"sentence": "Entrada principal.", "translation": "正門入口。"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "salida", "pronunciation": ["/saˈliða/"], "specific_note": "" }], "example": {"sentence": "Salida de emergencia.", "translation": "緊急出口。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "Taiwán", "pronunciation": ["/taiˈwan/"], "specific_note": "" }], "example": {"sentence": "Amo Taiwán.", "translation": "我愛台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "台灣人", "related_terms": [{ "term_target": "taiuanés/esa", "pronunciation": ["/tajwaˈnes/"], "specific_note": "" }], "example": {"sentence": "Soy taiuanés.", "translation": "我是台灣人。"}, "usage_note": "國籍。", "image_file": "taiwanese.png" },
        { "id": "n-66", "term_zh": "一切事物", "related_terms": [{ "term_target": "todo", "pronunciation": ["/ˈtodo/"], "specific_note": "" }], "example": {"sentence": "Todo está bien.", "translation": "一切都好。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-67", "term_zh": "錢包", "related_terms": [{ "term_target": "cartera", "pronunciation": ["/kaɾˈteɾa/"], "specific_note": "" }, { "term_target": "billetera", "pronunciation": ["/biʎeˈteɾa/"], "specific_note": "" }], "example": {"sentence": "Perdí mi cartera.", "translation": "掉了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-68", "term_zh": "身分證", "related_terms": [{ "term_target": "DNI", "pronunciation": ["/de ene i/"], "specific_note": "身分證" }, { "term_target": "identificación", "pronunciation": ["/identifikaˈθjon/"], "specific_note": "證件" }], "example": {"sentence": "Su identificación, por favor.", "translation": "請出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-69", "term_zh": "護照", "related_terms": [{ "term_target": "pasaporte", "pronunciation": ["/pasaˈpoɾte/"], "specific_note": "" }], "example": {"sentence": "Su pasaporte, por favor.", "translation": "請出示護照。"}, "usage_note": "出國必備。", "image_file": "passport.png" },
        { "id": "n-70", "term_zh": "餐廳", "related_terms": [{ "term_target": "restaurante", "pronunciation": ["/restauˈɾante/"], "specific_note": "" }], "example": {"sentence": "Buen restaurante.", "translation": "好餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-71", "term_zh": "飯店", "related_terms": [{ "term_target": "hotel", "pronunciation": ["/oˈtel/"], "specific_note": "" }], "example": {"sentence": "Reservar un hotel.", "translation": "訂飯店。"}, "usage_note": "H 不發音。", "image_file": "hotel.png" },
        { "id": "n-72", "term_zh": "場所", "related_terms": [{ "term_target": "lugar", "pronunciation": ["/luˈɣaɾ/"], "specific_note": "" }, { "term_target": "sitio", "pronunciation": ["/ˈsitjo/"], "specific_note": "" }], "example": {"sentence": "Buen lugar.", "translation": "好地方。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-73", "term_zh": "用品店員", "related_terms": [{ "term_target": "dependiente/a", "pronunciation": ["/depenˈdjente/"], "specific_note": "" }], "example": {"sentence": "Preguntar al dependiente.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-74", "term_zh": "超市", "related_terms": [{ "term_target": "supermercado", "pronunciation": ["/supeɾmeɾˈkaðo/"], "specific_note": "" }], "example": {"sentence": "Ir al supermercado.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-75", "term_zh": "月台", "related_terms": [{ "term_target": "andén", "pronunciation": ["/anˈden/"], "specific_note": "西班牙" }, { "term_target": "plataforma", "pronunciation": ["/plataˈfoɾma/"], "specific_note": "拉美" }], "example": {"sentence": "Andén 1.", "translation": "第一月台。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "ahora", "pronunciation": ["/aˈoɾa/"], "specific_note": "" }], "example": {"sentence": "Hazlo ahora.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "muy", "pronunciation": ["/muj/"], "specific_note": "" }], "example": {"sentence": "Muy bien.", "translation": "非常好。"}, "usage_note": "強調。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "realmente", "pronunciation": ["/realˈmente/"], "specific_note": "" }, { "term_target": "de verdad", "pronunciation": ["/de beɾˈðað/"], "specific_note": "" }], "example": {"sentence": "¿De verdad?", "translation": "真的嗎？"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "bien", "pronunciation": ["/bjen/"], "specific_note": "" }], "example": {"sentence": "Dormir bien.", "translation": "睡得好。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "a menudo", "pronunciation": ["/a meˈnuðo/"], "specific_note": "" }], "example": {"sentence": "Vengo a menudo.", "translation": "我常來。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "normalmente", "pronunciation": ["/noɾmalˈmente/"], "specific_note": "" }, { "term_target": "usualmente", "pronunciation": ["/uswalˈmente/"], "specific_note": "" }], "example": {"sentence": "Normalmente camino.", "translation": "通常我走路。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "ya", "pronunciation": ["/ʝa/"], "specific_note": "" }], "example": {"sentence": "Ya está hecho.", "translation": "已經做好了。"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "solo", "pronunciation": ["/ˈsolo/"], "specific_note": "" }, { "term_target": "solamente", "pronunciation": ["/solaˈmente/"], "specific_note": "" }], "example": {"sentence": "Solo uno.", "translation": "只有一個。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "otra vez", "pronunciation": ["/ˈotɾa beθ/"], "specific_note": "" }, { "term_target": "de nuevo", "pronunciation": ["/de ˈnweβo/"], "specific_note": "" }], "example": {"sentence": "Inténtalo otra vez.", "translation": "再試一次。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "alrededor de", "pronunciation": ["/alɾeðeˈðoɾ de/"], "specific_note": "" }, { "term_target": "unos", "pronunciation": ["/ˈunos/"], "specific_note": "" }], "example": {"sentence": "Unos 10 minutos.", "translation": "大約10分鐘。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "un poco", "pronunciation": ["/um ˈpoko/"], "specific_note": "" }], "example": {"sentence": "Un poco picante.", "translation": "一點點辣。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "también", "pronunciation": ["/tamˈbjen/"], "specific_note": "" }], "example": {"sentence": "Yo también.", "translation": "我也是。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "tal vez", "pronunciation": ["/tal ˈbeθ/"], "specific_note": "" }, { "term_target": "quizás", "pronunciation": ["/kiˈθas/"], "specific_note": "" }], "example": {"sentence": "Tal vez más tarde.", "translation": "也許等下。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "después", "pronunciation": ["/desˈpwes/"], "specific_note": "" }, { "term_target": "más tarde", "pronunciation": ["/mas ˈtaɾðe/"], "specific_note": "" }], "example": {"sentence": "Nos vemos más tarde.", "translation": "待會見。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "pronto", "pronunciation": ["/ˈpɾonto/"], "specific_note": "" }], "example": {"sentence": "Nos vemos pronto.", "translation": "待會見(很快見)。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "juntos", "pronunciation": ["/ˈxuntos/"], "specific_note": "" }], "example": {"sentence": "Ir juntos.", "translation": "一起去。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "todavía", "pronunciation": ["/toðaˈβia/"], "specific_note": "" }, { "term_target": "aún", "pronunciation": ["/aˈun/"], "specific_note": "" }], "example": {"sentence": "Todavía aquí.", "translation": "還在這裡。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "generalmente", "pronunciation": ["/xeneɾalˈmente/"], "specific_note": "" }], "example": {"sentence": "Generalmente es así.", "translation": "一般是那樣。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "inmediatamente", "pronunciation": ["/inmedjataˈmente/"], "specific_note": "" }], "example": {"sentence": "Ven inmediatamente.", "translation": "立刻來。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "tampoco", "pronunciation": ["/tamˈpoko/"], "specific_note": "" }], "example": {"sentence": "Yo tampoco.", "translation": "我也不。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "qué", "pronunciation": ["/ke/"], "specific_note": "" }], "example": {"sentence": "¿Qué es esto?", "translation": "這是什麼？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "cómo", "pronunciation": ["/ˈkomo/"], "specific_note": "" }], "example": {"sentence": "¿Cómo estás?", "translation": "你好嗎？"}, "usage_note": "問狀況。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "cuándo", "pronunciation": ["/ˈkwando/"], "specific_note": "" }], "example": {"sentence": "¿Cuándo vamos?", "translation": "何時去？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "dónde", "pronunciation": ["/ˈdonde/"], "specific_note": "" }], "example": {"sentence": "¿Dónde estás?", "translation": "你在哪？"}, "usage_note": "問地點。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "quién", "pronunciation": ["/kjen/"], "specific_note": "" }], "example": {"sentence": "¿Quién es él?", "translation": "他是誰？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "por qué", "pronunciation": ["/poɾ ˈke/"], "specific_note": "" }], "example": {"sentence": "¿Por qué?", "translation": "為什麼？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "cuál", "pronunciation": ["/kwal/"], "specific_note": "" }], "example": {"sentence": "¿Cuál prefieres?", "translation": "你喜歡哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "cuánto", "pronunciation": ["/ˈkwanto/"], "specific_note": "" }], "example": {"sentence": "¿Cuánto cuesta?", "translation": "多少錢？"}, "usage_note": "不可數/價格。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "cuánto tiempo", "pronunciation": ["/ˈkwanto ˈtjempo/"], "specific_note": "" }], "example": {"sentence": "¿Cuánto tiempo?", "translation": "要多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "ahora", "pronunciation": ["/aˈoɾa/"], "specific_note": "" }], "example": {"sentence": "Hazlo ahora.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "hoy", "pronunciation": ["/oi/"], "specific_note": "" }], "example": {"sentence": "Hoy hace calor.", "translation": "今天很熱。"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "mañana", "pronunciation": ["/maˈɲana/"], "specific_note": "" }], "example": {"sentence": "Hasta mañana.", "translation": "明天見。"}, "usage_note": "隔天。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "ayer", "pronunciation": ["/aˈʝeɾ/"], "specific_note": "" }], "example": {"sentence": "Ayer fui.", "translation": "昨天我去了。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "aquí", "pronunciation": ["/aˈki/"], "specific_note": "" }], "example": {"sentence": "Ven aquí.", "translation": "來這。"}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "allí / allá", "pronunciation": ["/aˈʎi/", "/aˈʎa/"], "specific_note": "" }], "example": {"sentence": "Ve allí.", "translation": "去那。"}, "usage_note": "遠處。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "día", "pronunciation": ["/ˈdia/"], "specific_note": "" }], "example": {"sentence": "Un día.", "translation": "一天。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "año", "pronunciation": ["/ˈaɲo/"], "specific_note": "" }], "example": {"sentence": "Este año.", "translation": "今年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "mes", "pronunciation": ["/mes/"], "specific_note": "" }], "example": {"sentence": "Este mes.", "translation": "這個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "semana", "pronunciation": ["/seˈmana/"], "specific_note": "" }], "example": {"sentence": "La próxima semana.", "translation": "下週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "mañana", "pronunciation": ["/maˈɲana/"], "specific_note": "" }], "example": {"sentence": "Por la mañana.", "translation": "在早上。"}, "usage_note": "上午 (同明天)。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "tarde", "pronunciation": ["/ˈtaɾðe/"], "specific_note": "" }], "example": {"sentence": "Por la tarde.", "translation": "下午。"}, "usage_note": "PM。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "noche", "pronunciation": ["/ˈnotʃe/"], "specific_note": "" }], "example": {"sentence": "Buenas noches.", "translation": "晚安。"}, "usage_note": "睡前。", "image_file": "night.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "mediodía", "pronunciation": ["/meðjoˈðia/"], "specific_note": "" }], "example": {"sentence": "Al mediodía.", "translation": "在中午。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "delante", "pronunciation": ["/deˈlante/"], "specific_note": "" }], "example": {"sentence": "Delante de mí.", "translation": "在我前面。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "detrás", "pronunciation": ["/deˈtɾas/"], "specific_note": "" }], "example": {"sentence": "Detrás de la puerta.", "translation": "門後。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "izquierda", "pronunciation": ["/iθˈkjeɾða/"], "specific_note": "" }], "example": {"sentence": "A la izquierda.", "translation": "左轉。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "derecha", "pronunciation": ["/deˈɾetʃa/"], "specific_note": "" }], "example": {"sentence": "A la derecha.", "translation": "右轉。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "al lado", "pronunciation": ["/al ˈlaðo/"], "specific_note": "" }], "example": {"sentence": "Al lado de mí.", "translation": "坐我旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "enfrente", "pronunciation": ["/emˈfɾente/"], "specific_note": "" }], "example": {"sentence": "Enfrente del banco.", "translation": "銀行對面。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "primavera", "pronunciation": ["/pɾimaˈβeɾa/"], "specific_note": "" }], "example": {"sentence": "La primavera.", "translation": "春天。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "verano", "pronunciation": ["/beˈɾano/"], "specific_note": "" }], "example": {"sentence": "Verano caluroso.", "translation": "炎熱的夏天。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "otoño", "pronunciation": ["/oˈtoɲo/"], "specific_note": "" }], "example": {"sentence": "Otoño fresco.", "translation": "涼爽的秋天。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "invierno", "pronunciation": ["/imˈbjeɾno/"], "specific_note": "" }], "example": {"sentence": "Invierno frío.", "translation": "寒冷的冬天。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "cero", "pronunciation": ["/ˈθeɾo/"], "specific_note": "" }], "example": {"sentence": "Cero grados.", "translation": "零度。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "uno", "pronunciation": ["/ˈuno/"], "specific_note": "" }], "example": {"sentence": "Un minuto.", "translation": "一分鐘。"}, "usage_note": "在陽性名詞前變 Un。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "dos", "pronunciation": ["/dos/"], "specific_note": "" }], "example": {"sentence": "Dos días.", "translation": "兩天。"}, "usage_note": "二。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "tres", "pronunciation": ["/tɾes/"], "specific_note": "" }], "example": {"sentence": "Tres personas.", "translation": "三人。"}, "usage_note": "三。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "cuatro", "pronunciation": ["/ˈkwatɾo/"], "specific_note": "" }], "example": {"sentence": "Cuatro estaciones.", "translation": "四季。"}, "usage_note": "四。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "cinco", "pronunciation": ["/ˈθinko/"], "specific_note": "" }], "example": {"sentence": "Cinco euros.", "translation": "五歐元。"}, "usage_note": "五。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "seis", "pronunciation": ["/seis/"], "specific_note": "" }], "example": {"sentence": "Seis horas.", "translation": "六小時。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "siete", "pronunciation": ["/ˈsjete/"], "specific_note": "" }], "example": {"sentence": "Siete días.", "translation": "七天。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "ocho", "pronunciation": ["/ˈotʃo/"], "specific_note": "" }], "example": {"sentence": "Ocho años.", "translation": "八歲。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "nueve", "pronunciation": ["/ˈnweβe/"], "specific_note": "" }], "example": {"sentence": "Nueve de la noche.", "translation": "晚上九點。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "diez", "pronunciation": ["/djeθ/"], "specific_note": "" }], "example": {"sentence": "Diez euros.", "translation": "十歐元。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "once", "pronunciation": ["/ˈonθe/"], "specific_note": "" }], "example": {"sentence": "Once años.", "translation": "11歲。"}, "usage_note": "十一。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "doce", "pronunciation": ["/ˈdoθe/"], "specific_note": "" }], "example": {"sentence": "Doce meses.", "translation": "12個月。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "quince", "pronunciation": ["/ˈkinθe/"], "specific_note": "" }], "example": {"sentence": "Quince minutos.", "translation": "15分鐘。"}, "usage_note": "十五。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "veinte", "pronunciation": ["/ˈbeinte/"], "specific_note": "" }], "example": {"sentence": "Veinte euros.", "translation": "20歐元。"}, "usage_note": "二十。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "cincuenta", "pronunciation": ["/θinˈkwenta/"], "specific_note": "" }], "example": {"sentence": "Cincuenta por ciento.", "translation": "50%。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "cien", "pronunciation": ["/θjen/"], "specific_note": "" }], "example": {"sentence": "Cien puntos.", "translation": "一百分。"}, "usage_note": "超過一百用 Ciento...", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "mil", "pronunciation": ["/mil/"], "specific_note": "" }], "example": {"sentence": "Mil gracias.", "translation": "萬分感謝(一千個謝謝)。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "diez mil", "pronunciation": ["/djeθ mil/"], "specific_note": "" }], "example": {"sentence": "Diez mil dólares.", "translation": "一萬元。"}, "usage_note": "一萬。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是/覺得～", "related_terms": [{ "term_target": "Soy...", "pronunciation": ["/soi/"], "specific_note": "本質/身分" }], "example": {"sentence": "Soy estudiante.", "translation": "我是學生。"}, "usage_note": "本質/身分。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫～", "related_terms": [{ "term_target": "Me llamo...", "pronunciation": ["/me ˈʎamo/"], "specific_note": "" }], "example": {"sentence": "Me llamo Juan.", "translation": "我的名字叫胡安。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做～", "related_terms": [{ "term_target": "Yo hago...", "pronunciation": ["/jo ˈaɣo/"], "specific_note": "" }], "example": {"sentence": "Hago la tarea.", "translation": "我做作業。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做～", "related_terms": [{ "term_target": "Estoy ...-ando/-iendo", "pronunciation": ["/esˈtoi/"], "specific_note": "" }], "example": {"sentence": "Estoy comiendo.", "translation": "我正在吃。"}, "usage_note": "進行式 Estar + 副動詞。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠～", "related_terms": [{ "term_target": "Puedo...", "pronunciation": ["/ˈpweðo/"], "specific_note": "" }], "example": {"sentence": "Puedo nadar.", "translation": "我會游泳。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做～", "related_terms": [{ "term_target": "Me gusta...", "pronunciation": ["/me ˈgusta/"], "specific_note": "" }], "example": {"sentence": "Me gusta leer.", "translation": "我喜歡閱讀。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經～", "related_terms": [{ "term_target": "Era / Fui...", "pronunciation": ["/ˈeɾa/", "/fwi/"], "specific_note": "" }], "example": {"sentence": "Era estudiante.", "translation": "我曾經是學生。"}, "usage_note": "過去狀態。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過～", "related_terms": [{ "term_target": "Hice...", "pronunciation": ["/ˈiθe/"], "specific_note": "" }], "example": {"sentence": "Hice mi tarea.", "translation": "我做了功課。"}, "usage_note": "過去動作。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過～", "related_terms": [{ "term_target": "He ... -ado/-ido", "pronunciation": ["/e/"], "specific_note": "" }], "example": {"sentence": "He comido.", "translation": "我已經吃過了。"}, "usage_note": "完成式 Haber + PP。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過～", "related_terms": [{ "term_target": "He ido a...", "pronunciation": ["/e ˈiði a/"], "specific_note": "" }], "example": {"sentence": "He ido a España.", "translation": "我曾經去過西班牙。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算～", "related_terms": [{ "term_target": "Voy a...", "pronunciation": ["/boi a/"], "specific_note": "" }], "example": {"sentence": "Voy a ir.", "translation": "我將要去。"}, "usage_note": "未來意。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是～嗎？", "related_terms": [{ "term_target": "¿Eres...?", "pronunciation": ["/ˈeɾes/"], "specific_note": "" }], "example": {"sentence": "¿Eres estudiante?", "translation": "你是學生嗎？"}, "usage_note": "問狀態。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做～嗎？", "related_terms": [{ "term_target": "¿Haces...?", "pronunciation": ["/ˈaθes/"], "specific_note": "" }], "example": {"sentence": "¿Haces deporte?", "translation": "你有運動嗎？"}, "usage_note": "一般疑問句。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經～嗎？", "related_terms": [{ "term_target": "¿Has...?", "pronunciation": ["/as/"], "specific_note": "" }], "example": {"sentence": "¿Has ido a España?", "translation": "你有去過西班牙嗎？"}, "usage_note": "問經驗(完成式)。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做（某事）？", "related_terms": [{ "term_target": "¿Cuándo...?", "pronunciation": ["/ˈkwando/"], "specific_note": "" }], "example": {"sentence": "¿Cuándo duermes?", "translation": "你何時睡？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去（某地）？", "related_terms": [{ "term_target": "¿Cuándo vas a...?", "pronunciation": ["/ˈkwando bas a/"], "specific_note": "" }], "example": {"sentence": "¿Cuándo vas a la escuela?", "translation": "你何時去學校？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做（某事）？", "related_terms": [{ "term_target": "¿Dónde...?", "pronunciation": ["/ˈdonde/"], "specific_note": "" }], "example": {"sentence": "¿Dónde vives?", "translation": "你住哪裡？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做（某事）？", "related_terms": [{ "term_target": "¿Cómo...?", "pronunciation": ["/ˈkomo/"], "specific_note": "" }], "example": {"sentence": "¿Cómo cocinas?", "translation": "你怎麼煮？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去（某地）？", "related_terms": [{ "term_target": "¿Cómo vas a...?", "pronunciation": ["/ˈkomo bas a/"], "specific_note": "" }], "example": {"sentence": "¿Cómo vas a la escuela?", "translation": "你怎麼去學校？"}, "usage_note": "問交通方式。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是～", "related_terms": [{ "term_target": "No soy...", "pronunciation": ["/no soi/"], "specific_note": "" }], "example": {"sentence": "No soy médico.", "translation": "我不是醫生。"}, "usage_note": "否定身分。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做～", "related_terms": [{ "term_target": "No (verbo)...", "pronunciation": ["/no/"], "specific_note": "" }], "example": {"sentence": "No fumo.", "translation": "我不抽菸。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能～", "related_terms": [{ "term_target": "No puedo...", "pronunciation": ["/no ˈpweðo/"], "specific_note": "" }], "example": {"sentence": "No puedo ir.", "translation": "我不能去。"}, "usage_note": "否定能力。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾～", "related_terms": [{ "term_target": "Nunca he...", "pronunciation": ["/ˈnuŋka e/"], "specific_note": "" }], "example": {"sentence": "Nunca he comido esto.", "translation": "我沒吃過這個。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必～", "related_terms": [{ "term_target": "No tengo que...", "pronunciation": ["/no ˈteŋgo ke/"], "specific_note": "" }], "example": {"sentence": "No tengo que ir.", "translation": "我不必去。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果～的話，就～", "related_terms": [{ "term_target": "Si ..., ...", "pronunciation": ["/si/"], "specific_note": "" }], "example": {"sentence": "Si quieres, vamos.", "translation": "如果你想，我們走。"}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當～時，就～", "related_terms": [{ "term_target": "Cuando ..., ...", "pronunciation": ["/ˈkwando/"], "specific_note": "" }], "example": {"sentence": "Cuando como, estoy feliz.", "translation": "當我吃東西時，我很開心。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你～", "related_terms": [{ "term_target": "¿Puedes...?", "pronunciation": ["/ˈpweðes/"], "specific_note": "" }], "example": {"sentence": "¿Puedes ayudarme?", "translation": "可以幫我嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做～吧！", "related_terms": [{ "term_target": "Vamos a...", "pronunciation": ["/ˈbamos a/"], "specific_note": "" }], "example": {"sentence": "Vamos a comer.", "translation": "我們去吃吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為～", "related_terms": [{ "term_target": "Creo que...", "pronunciation": ["/ˈkɾeo ke/"], "specific_note": "" }], "example": {"sentence": "Creo que es bueno.", "translation": "我認為這很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做～", "related_terms": [{ "term_target": "Quiero...", "pronunciation": ["/ˈkjeɾo/"], "specific_note": "" }], "example": {"sentence": "Quiero ir.", "translation": "我想去。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做～", "related_terms": [{ "term_target": "Tengo que...", "pronunciation": ["/ˈteŋgo ke/"], "specific_note": "" }], "example": {"sentence": "Tengo que trabajar.", "translation": "我必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "Es ... (infinitivo)", "pronunciation": ["/es/"], "specific_note": "" }], "example": {"sentence": "Es bueno comer.", "translation": "吃東西是很好的。"}, "usage_note": "描述動作。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我…嗎？", "related_terms": [{ "term_target": "¿Me puedes ayudar a ...?", "pronunciation": ["/me ˈpweðes aʝuˈðaɾ a/"], "specific_note": "" }], "example": {"sentence": "¿Me puedes ayudar a limpiar?", "translation": "你可以幫我打掃嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以…嗎？", "related_terms": [{ "term_target": "¿Puedo...?", "pronunciation": ["/ˈpweðo/"], "specific_note": "" }], "example": {"sentence": "¿Puedo entrar?", "translation": "我可以進來嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡…", "related_terms": [{ "term_target": "No me gusta...", "pronunciation": ["/no me ˈgusta/"], "specific_note": "" }], "example": {"sentence": "No me gusta esto.", "translation": "我不喜歡這個。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡…", "related_terms": [{ "term_target": "Prefiero...", "pronunciation": ["/pɾeˈfjeɾo/"], "specific_note": "" }], "example": {"sentence": "Prefiero té.", "translation": "我比較喜歡茶。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更…", "related_terms": [{ "term_target": "A es más ... que B", "pronunciation": ["/a es mas... ke be/"], "specific_note": "" }], "example": {"sentence": "Esto es más caro que eso.", "translation": "這比那個貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有…（存在）", "related_terms": [{ "term_target": "Hay...", "pronunciation": ["/ai/"], "specific_note": "" }], "example": {"sentence": "Hay un perro.", "translation": "有一隻狗。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}