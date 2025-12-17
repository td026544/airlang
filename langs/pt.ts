import { AppData } from '../types';

export const portugueseData: AppData ={
  "meta": {
    "source_language": "zh-TW",
    "target_language": "pt-PT",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 葡萄牙語完整版 (包含所有原始列表單字與完整句型 - IPA 發音版，兼顧巴西與歐洲葡語)"
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
            { "term_target": "Olá", "pronunciation": ["/oˈla/"], "specific_note": "通用" },
            { "term_target": "Oi", "pronunciation": ["/oj/"], "specific_note": "非正式(巴西常用)" },
            { "term_target": "Bom dia", "pronunciation": ["/bõ ˈdʒi.ɐ/"], "specific_note": "早安/你好" }
          ],
          "example": { "sentence": "Olá, como está?", "translation": "你好，你好嗎？" },
          "usage_note": "Olá 是最標準的問候。",
          "image_file": "hello.png"
        },
        {
          "id": "greet-002",
          "term_zh": "再見",
          "related_terms": [
            { "term_target": "Adeus", "pronunciation": ["/aˈdewʃ/"], "specific_note": "正式/長時間" },
            { "term_target": "Tchau", "pronunciation": ["/tʃaw/"], "specific_note": "口語" },
            { "term_target": "Até logo", "pronunciation": ["/aˈtɛ ˈlɔ.ɡu/"], "specific_note": "待會見" }
          ],
          "example": { "sentence": "Adeus, até amanhã.", "translation": "再見，明天見。" },
          "usage_note": "Tchau 是最常用的道別語。",
          "image_file": "goodbye.png"
        },
        {
          "id": "greet-003",
          "term_zh": "謝謝你",
          "related_terms": [
            { "term_target": "Obrigado", "pronunciation": ["/obɾiˈɡadu/"], "specific_note": "男性說" },
            { "term_target": "Obrigada", "pronunciation": ["/obɾiˈɡadɐ/"], "specific_note": "女性說" }
          ],
          "example": { "sentence": "Muito obrigado.", "translation": "非常謝謝你(男生說)。" },
          "usage_note": "詞尾隨說話者性別變化：男用 o，女用 a。",
          "image_file": "thank_you.png"
        },
        {
          "id": "greet-004",
          "term_zh": "對不起",
          "related_terms": [
            { "term_target": "Desculpe", "pronunciation": ["/dɨʃˈkul.pɨ/"], "specific_note": "道歉/藉過" },
            { "term_target": "Sinto muito", "pronunciation": ["/ˈsĩ.tu ˈmuj.tu/"], "specific_note": "遺憾/抱歉" }
          ],
          "example": { "sentence": "Desculpe, estou atrasado.", "translation": "對不起，我遲到了。" },
          "usage_note": "Desculpe 萬用，Sinto muito 用於表達遺憾。",
          "image_file": "sorry.png"
        },
        {
          "id": "greet-005",
          "term_zh": "早安",
          "related_terms": [
            { "term_target": "Bom dia", "pronunciation": ["/bõ ˈdʒi.ɐ/"], "specific_note": "" }
          ],
          "example": { "sentence": "Bom dia, mãe.", "translation": "早安，媽。" },
          "usage_note": "通常用於午餐前。",
          "image_file": "good_morning.png"
        },
        {
          "id": "greet-006",
          "term_zh": "請問...",
          "related_terms": [
            { "term_target": "Com licença", "pronunciation": ["/kõ liˈsẽ.sɐ/"], "specific_note": "借過/失陪" },
            { "term_target": "Por favor", "pronunciation": ["/puɾ faˈvoɾ/"], "specific_note": "請/麻煩" }
          ],
          "example": { "sentence": "Com licença, onde fica o banheiro?", "translation": "不好意思，請問廁所在哪？" },
          "usage_note": "發問前引起注意用 Com licença。",
          "image_file": "excuse_me.png"
        },
        {
          "id": "greet-007",
          "term_zh": "借過",
          "related_terms": [
            { "term_target": "Com licença", "pronunciation": ["/kõ liˈsẽ.sɐ/"], "specific_note": "通用" }
          ],
          "example": { "sentence": "Com licença, vou passar.", "translation": "借過，我要過去。" },
          "usage_note": "請求讓路。",
          "image_file": "excuse_me_pass.png"
        },
        {
          "id": "greet-008",
          "term_zh": "我不懂",
          "related_terms": [
            { "term_target": "Não entendo", "pronunciation": ["/nɐ̃w ẽˈtẽ.du/"], "specific_note": "" },
            { "term_target": "Não compreendo", "pronunciation": ["/nɐ̃w kõ.pɾiˈẽ.du/"], "specific_note": "不理解" }
          ],
          "example": { "sentence": "Desculpe, não entendo português.", "translation": "抱歉，我不懂葡萄牙語。" },
          "usage_note": "Entender 是「理解/懂」。",
          "image_file": "dont_understand.png"
        },
        {
          "id": "greet-009",
          "term_zh": "這是什麼？",
          "related_terms": [
            { "term_target": "O que é isto?", "pronunciation": ["/u ke ɛ ˈiʃ.tu/"], "specific_note": "" }
          ],
          "example": { "sentence": "O que é isto? É comida?", "translation": "這是什麼？是食物嗎？" },
          "usage_note": "Isto 指近處的東西。",
          "image_file": "what_is_this.png"
        },
        {
          "id": "greet-010",
          "term_zh": "我想要這個",
          "related_terms": [
            { "term_target": "Quero isto", "pronunciation": ["/ˈkɛ.ɾu ˈiʃ.tu/"], "specific_note": "直接" },
            { "term_target": "Gostaria disto", "pronunciation": ["/guʃ.tɐˈɾi.ɐ ˈdiʃ.tu/"], "specific_note": "禮貌" }
          ],
          "example": { "sentence": "Quero isto, por favor.", "translation": "我要這個，麻煩了。" },
          "usage_note": "Quero 是 Querer (想要) 的第一人稱。",
          "image_file": "i_want_this.png"
        },
        {
          "id": "greet-011",
          "term_zh": "請給我...",
          "related_terms": [
            { "term_target": "Dá-me...", "pronunciation": ["/ˈda.mɨ/"], "specific_note": "葡式" },
            { "term_target": "Me dá...", "pronunciation": ["/mi da/"], "specific_note": "巴式" }
          ],
          "example": { "sentence": "Dá-me água, por favor.", "translation": "請給我水。" },
          "usage_note": "Por favor (請) 必加。",
          "image_file": "please_give_me.png"
        },
        {
          "id": "greet-012",
          "term_zh": "廁所在哪裡？",
          "related_terms": [
            { "term_target": "Onde fica o banheiro?", "pronunciation": ["/ˈõ.dɨ ˈfi.kɐ u baˈɲej.ɾu/"], "specific_note": "巴西" },
            { "term_target": "Onde é a casa de banho?", "pronunciation": ["/ˈõ.dɨ ɛ a ˈka.zɐ dɨ ˈba.ɲu/"], "specific_note": "葡萄牙" }
          ],
          "example": { "sentence": "Com licença, onde fica o banheiro?", "translation": "不好意思，廁所在哪裡？" },
          "usage_note": "巴西用 Banheiro，葡萄牙用 Casa de banho。",
          "image_file": "where_bathroom.png"
        },
        {
          "id": "greet-013",
          "term_zh": "多少錢？",
          "related_terms": [
            { "term_target": "Quanto custa?", "pronunciation": ["/ˈkwɐ̃.tu ˈkuʃ.tɐ/"], "specific_note": "" }
          ],
          "example": { "sentence": "Quanto custa isto?", "translation": "這多少錢？" },
          "usage_note": "購物用語。",
          "image_file": "how_much.png"
        },
        {
          "id": "greet-014",
          "term_zh": "請幫我",
          "related_terms": [
            { "term_target": "Ajude-me, por favor", "pronunciation": ["/aˈʒu.dɨ mɨ puɾ faˈvoɾ/"], "specific_note": "葡式" },
            { "term_target": "Me ajude", "pronunciation": ["/mi aˈʒu.dʒi/"], "specific_note": "巴式" }
          ],
          "example": { "sentence": "Pode ajudar-me?", "translation": "您可以幫我嗎？" },
          "usage_note": "Ajudar 是「幫助」。",
          "image_file": "help_me.png"
        },
        {
          "id": "greet-015",
          "term_zh": "你可以再說一次嗎？",
          "related_terms": [
            { "term_target": "Pode repetir?", "pronunciation": ["/ˈpɔ.dɨ ʁɨ.pɨˈtiɾ/"], "specific_note": "" }
          ],
          "example": { "sentence": "Não percebi, pode repetir?", "translation": "我沒聽懂，能再說一次嗎？" },
          "usage_note": "Repetir 是「重複」。",
          "image_file": "say_again.png"
        },
        {
          "id": "greet-016",
          "term_zh": "你可以講慢一點嗎？",
          "related_terms": [
            { "term_target": "Pode falar mais devagar?", "pronunciation": ["/ˈpɔ.dɨ faˈlaɾ majʃ dɨ.vɐˈɡaɾ/"], "specific_note": "" }
          ],
          "example": { "sentence": "Por favor, fale mais devagar.", "translation": "拜託講慢一點。" },
          "usage_note": "Devagar 意思是「慢」。",
          "image_file": "speak_slowly.png"
        }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個/它", "related_terms": [{ "term_target": "isso", "pronunciation": ["/ˈi.su/"], "specific_note": "那個(中)" }, { "term_target": "aquilo", "pronunciation": ["/aˈki.lu/"], "specific_note": "那個(遠)" }], "example": {"sentence": "O que é isso?", "translation": "那是什麼？"}, "usage_note": "Isso 指對方附近，Aquilo 指遠處。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "eu", "pronunciation": ["/ew/"], "specific_note": "" }], "example": {"sentence": "Eu sou taiwanês.", "translation": "我是台灣人。"}, "usage_note": "第一人稱。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "tu", "pronunciation": ["/tu/"], "specific_note": "非正式(葡式常用)" }, { "term_target": "você", "pronunciation": ["/voˈse/"], "specific_note": "通用(巴式常用)" }], "example": {"sentence": "Quem é você?", "translation": "你是誰？"}, "usage_note": "巴西多用 Você，葡萄牙熟人用 Tu。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他", "related_terms": [{ "term_target": "ele", "pronunciation": ["/ˈe.lɨ/"], "specific_note": "" }], "example": {"sentence": "Ele é meu pai.", "translation": "他是我爸。"}, "usage_note": "男性。", "image_file": "he.png" },
        { "id": "pro-05", "term_zh": "她的", "related_terms": [{ "term_target": "dela", "pronunciation": ["/ˈdɛ.lɐ/"], "specific_note": "她的" }, { "term_target": "sua", "pronunciation": ["/ˈsu.ɐ/"], "specific_note": "她的/您的(易混淆)" }], "example": {"sentence": "A bolsa dela.", "translation": "她的包包。", }, "usage_note": "Dela (De + ela) 最清楚。", "image_file": "her.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "nós", "pronunciation": ["/nɔʃ/"], "specific_note": "" }, { "term_target": "a gente", "pronunciation": ["/a ˈʒẽ.tʃi/"], "specific_note": "口語(巴西)" }], "example": {"sentence": "Nós somos família.", "translation": "我們是家人。"}, "usage_note": "第一人稱複數。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "她", "related_terms": [{ "term_target": "ela", "pronunciation": ["/ˈɛ.lɐ/"], "specific_note": "" }], "example": {"sentence": "Ela é bonita.", "translation": "她很漂亮。"}, "usage_note": "女性。", "image_file": "she.png" },
        { "id": "pro-08", "term_zh": "他們", "related_terms": [{ "term_target": "eles", "pronunciation": ["/ˈe.lɨʃ/"], "specific_note": "陽性/混合" }, { "term_target": "elas", "pronunciation": ["/ˈɛ.lɐʃ/"], "specific_note": "陰性" }], "example": {"sentence": "Eles comem.", "translation": "他們在吃。"}, "usage_note": "第三人稱複數。", "image_file": "they.png" },
        { "id": "pro-09", "term_zh": "這個", "related_terms": [{ "term_target": "isto", "pronunciation": ["/ˈiʃ.tu/"], "specific_note": "這個(中)" }, { "term_target": "este / esta", "pronunciation": ["/ˈeʃ.tɨ/", "/ˈeʃ.tɐ/"], "specific_note": "m./f." }], "example": {"sentence": "Isto é meu.", "translation": "這是我的。"}, "usage_note": "Isto 代名詞，Este + 名詞。", "image_file": "this.png" },
        { "id": "pro-10", "term_zh": "那個（指示詞）", "related_terms": [{ "term_target": "isso", "pronunciation": ["/ˈi.su/"], "specific_note": "中距離" }, { "term_target": "aquilo", "pronunciation": ["/aˈki.lu/"], "specific_note": "遠距離" }], "example": {"sentence": "O que é aquilo?", "translation": "那裡那個是什麼？"}, "usage_note": "Aquilo 指遠處。", "image_file": "that_obj.png" },
        { "id": "pro-11", "term_zh": "他的", "related_terms": [{ "term_target": "dele", "pronunciation": ["/ˈde.lɨ/"], "specific_note": "他的" }, { "term_target": "seu", "pronunciation": ["/sew/"], "specific_note": "他的/您的" }], "example": {"sentence": "O carro dele.", "translation": "他的車。",}, "usage_note": "Dele (De + ele)。", "image_file": "his.png" },
        { "id": "pro-12", "term_zh": "你的", "related_terms": [{ "term_target": "teu / tua", "pronunciation": ["/tew/", "/ˈtu.ɐ/"], "specific_note": "非正式" }, { "term_target": "seu / sua", "pronunciation": ["/sew/", "/ˈsu.ɐ/"], "specific_note": "正式/通用(巴西)" }], "example": {"sentence": "O teu nome.", "translation": "你的名字。"}, "usage_note": "巴西常用 Seu/Sua 表示你的。", "image_file": "your.png" },
        { "id": "pro-13", "term_zh": "他們的", "related_terms": [{ "term_target": "deles", "pronunciation": ["/ˈde.lɨʃ/"], "specific_note": "他們的" }, { "term_target": "delas", "pronunciation": ["/ˈdɛ.lɐʃ/"], "specific_note": "她們的" }], "example": {"sentence": "A casa deles.", "translation": "他們的家。"}, "usage_note": "Deles (De + eles)。", "image_file": "their.png" },
        { "id": "pro-14", "term_zh": "我們的", "related_terms": [{ "term_target": "nosso / nossa", "pronunciation": ["/ˈnɔ.su/", "/ˈnɔ.sɐ/"], "specific_note": "" }], "example": {"sentence": "A nossa escola.", "translation": "我們的學校。"}, "usage_note": "隨名詞性別變化。", "image_file": "our.png" },
        { "id": "pro-15", "term_zh": "這些", "related_terms": [{ "term_target": "estes / estas", "pronunciation": ["/ˈeʃ.tɨʃ/", "/ˈeʃ.tɐʃ/"], "specific_note": "" }], "example": {"sentence": "Estes livros.", "translation": "這些書。"}, "usage_note": "複數。", "image_file": "these.png" },
        { "id": "pro-16", "term_zh": "那些", "related_terms": [{ "term_target": "esses / essas", "pronunciation": ["/ˈe.sɨʃ/", "/ˈe.sɐʃ/"], "specific_note": "中距離" }, { "term_target": "aqueles / aquelas", "pronunciation": ["/aˈke.lɨʃ/", "/aˈke.lɐʃ/"], "specific_note": "遠距離" }], "example": {"sentence": "Aqueles pássaros.", "translation": "那些鳥。"}, "usage_note": "遠處複數。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "ser", "pronunciation": ["/seɾ/"], "specific_note": "本質" }, { "term_target": "estar", "pronunciation": ["/eʃˈtaɾ/"], "specific_note": "狀態" }], "example": {"sentence": "Eu sou estudante.", "translation": "我是學生。"}, "usage_note": "Ser(永久)，Estar(暫時)。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "ter", "pronunciation": ["/teɾ/"], "specific_note": "擁有" }, { "term_target": "haver", "pronunciation": ["/aˈveɾ/"], "specific_note": "存在(Há)" }], "example": {"sentence": "Tenho dinheiro.", "translation": "我有錢。"}, "usage_note": "Há (Haver) 意思是「有/存在」。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "ir", "pronunciation": ["/iɾ/"], "specific_note": "" }], "example": {"sentence": "Vou para casa.", "translation": "我要回家。",  }, "usage_note": "不規則動詞。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "obter", "pronunciation": ["/obˈteɾ/"], "specific_note": "獲得" }, { "term_target": "pegar", "pronunciation": ["/pɨˈɡaɾ/"], "specific_note": "拿/抓(巴西常用)" }], "example": {"sentence": "Obter um trabalho.", "translation": "得到工作。"}, "usage_note": "Pegar 在巴西很常用。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "fazer", "pronunciation": ["/faˈzeɾ/"], "specific_note": "" }], "example": {"sentence": "Fazer o trabalho.", "translation": "做作業/工作。"}, "usage_note": "通用動詞。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "dizer", "pronunciation": ["/diˈzeɾ/"], "specific_note": "說出" }, { "term_target": "falar", "pronunciation": ["/faˈlaɾ/"], "specific_note": "講話/語言" }], "example": {"sentence": "Diz olá.", "translation": "說你好。"}, "usage_note": "Dizer 內容，Falar 語言或動作。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "saber", "pronunciation": ["/sɐˈbeɾ/"], "specific_note": "知識" }, { "term_target": "conhecer", "pronunciation": ["/ko.ɲɨˈseɾ/"], "specific_note": "認識人/地" }], "example": {"sentence": "Não sei.", "translation": "我不知道。"}, "usage_note": "區分知識與熟悉度。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "pensar", "pronunciation": ["/pẽˈsaɾ/"], "specific_note": "思考" }, { "term_target": "achar", "pronunciation": ["/aˈʃaɾ/"], "specific_note": "覺得/認為" }], "example": {"sentence": "Eu acho que sim.", "translation": "我覺得是。"}, "usage_note": "Achar (找/覺得)。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "ver", "pronunciation": ["/veɾ/"], "specific_note": "看見" }, { "term_target": "olhar", "pronunciation": ["/oˈʎaɾ/"], "specific_note": "看/注視" }], "example": {"sentence": "Eu vejo você.", "translation": "我看到你。"}, "usage_note": "Ver 是視覺，Olhar 是動作。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "fazer", "pronunciation": ["/faˈzeɾ/"], "specific_note": "" }, { "term_target": "criar", "pronunciation": ["/kɾiˈaɾ/"], "specific_note": "創造" }], "example": {"sentence": "Fazer café.", "translation": "煮咖啡。"}, "usage_note": "Fazer 最常用。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "vir", "pronunciation": ["/viɾ/"], "specific_note": "" }], "example": {"sentence": "Vem aqui.", "translation": "來這裡。"}, "usage_note": "過來。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "precisar", "pronunciation": ["/pɾɨ.siˈzaɾ/"], "specific_note": "" }], "example": {"sentence": "Preciso de água.", "translation": "我需要水。"}, "usage_note": "Precisar de ...。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "usar", "pronunciation": ["/uˈzaɾ/"], "specific_note": "" }], "example": {"sentence": "Usar uma caneta.", "translation": "用原子筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "encontrar", "pronunciation": ["/ẽ.kõˈtɾaɾ/"], "specific_note": "" }, { "term_target": "achar", "pronunciation": ["/aˈʃaɾ/"], "specific_note": "" }], "example": {"sentence": "Encontrar trabalho.", "translation": "找工作。"}, "usage_note": "Encontrar (遇見/找到)。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "dar", "pronunciation": ["/daɾ/"], "specific_note": "" }], "example": {"sentence": "Dá-me isso.", "translation": "給我那個。"}, "usage_note": "給予。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "dizer", "pronunciation": ["/diˈzeɾ/"], "specific_note": "說" }, { "term_target": "contar", "pronunciation": ["/kõˈtaɾ/"], "specific_note": "講述(故事)" }], "example": {"sentence": "Diz-me.", "translation": "告訴我。"}, "usage_note": "告知。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "trabalhar", "pronunciation": ["/tɾɐ.bɐˈʎaɾ/"], "specific_note": "" }], "example": {"sentence": "Trabalho aqui.", "translation": "我在這工作。"}, "usage_note": "勞動。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "gostar", "pronunciation": ["/guʃˈtaɾ/"], "specific_note": "" }], "example": {"sentence": "Gosto disso.", "translation": "我喜歡這個。"}, "usage_note": "Gostar de ... (必須加de)。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "acordar", "pronunciation": ["/a.kuɾˈdaɾ/"], "specific_note": "醒來" }, { "term_target": "levantar-se", "pronunciation": ["/lɨ.vɐ̃ˈtaɾ.sɨ/"], "specific_note": "起床(身)" }], "example": {"sentence": "Levanto-me às 7.", "translation": "我七點起床。"}, "usage_note": "反身動詞。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "falar", "pronunciation": ["/faˈlaɾ/"], "specific_note": "" }], "example": {"sentence": "Falar português.", "translation": "說葡萄牙語。"}, "usage_note": "講語言。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "ouvir", "pronunciation": ["/oˈviɾ/"], "specific_note": "聽見" }, { "term_target": "escutar", "pronunciation": ["/ʃkuˈtaɾ/"], "specific_note": "聆聽" }], "example": {"sentence": "Estás a ouvir?", "translation": "你有在聽嗎？"}, "usage_note": "Ouvir(能力), Escutar(專注)。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "escrever", "pronunciation": ["/ʃkɾɨˈveɾ/"], "specific_note": "" }], "example": {"sentence": "Escrever um nome.", "translation": "寫名字。"}, "usage_note": "書寫。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "ler", "pronunciation": ["/leɾ/"], "specific_note": "" }], "example": {"sentence": "Ler um livro.", "translation": "看書。"}, "usage_note": "閱讀。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "esperar", "pronunciation": ["/iʃ.pɨˈɾaɾ/"], "specific_note": "" }], "example": {"sentence": "Espera por mim.", "translation": "等我。"}, "usage_note": "也有「希望」的意思。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "tentar", "pronunciation": ["/tẽˈtaɾ/"], "specific_note": "試圖" }, { "term_target": "experimentar", "pronunciation": ["/iʃ.pɨ.ɾi.mẽˈtaɾ/"], "specific_note": "體驗/試吃" }], "example": {"sentence": "Experimenta isto.", "translation": "試試這個。"}, "usage_note": "試驗。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "pagar", "pronunciation": ["/paˈɡaɾ/"], "specific_note": "" }], "example": {"sentence": "Pagar a conta.", "translation": "付帳單。"}, "usage_note": "支付。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "escolher", "pronunciation": ["/iʃ.kuˈʎeɾ/"], "specific_note": "" }], "example": {"sentence": "Escolhe um.", "translation": "選一個。"}, "usage_note": "挑選。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "entrar", "pronunciation": ["/ẽˈtɾaɾ/"], "specific_note": "" }], "example": {"sentence": "Entrar na casa.", "translation": "進屋。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "morar", "pronunciation": ["/muˈɾaɾ/"], "specific_note": "居住" }, { "term_target": "viver", "pronunciation": ["/viˈveɾ/"], "specific_note": "生活/住" }], "example": {"sentence": "Moro em Taipé.", "translation": "我住台北。"}, "usage_note": "Morar 接地址/城市。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "chegar", "pronunciation": ["/ʃɨˈɡaɾ/"], "specific_note": "" }], "example": {"sentence": "Chegar a tempo.", "translation": "準時到達。"}, "usage_note": "抵達。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "andar", "pronunciation": ["/ɐ̃ˈdaɾ/"], "specific_note": "走" }, { "term_target": "caminhar", "pronunciation": ["/kɐ.miˈɲaɾ/"], "specific_note": "步行/散步" }], "example": {"sentence": "Andar a pé.", "translation": "走路去。"}, "usage_note": "步行。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "abrir", "pronunciation": ["/aˈbɾiɾ/"], "specific_note": "" }], "example": {"sentence": "Abrir a porta.", "translation": "開門。"}, "usage_note": "開啟。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "fechar", "pronunciation": ["/fɨˈʃaɾ/"], "specific_note": "" }], "example": {"sentence": "Fechar a janela.", "translation": "關窗。"}, "usage_note": "關上。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "ajudar", "pronunciation": ["/a.ʒuˈdaɾ/"], "specific_note": "" }], "example": {"sentence": "Ajuda-me.", "translation": "幫我。"}, "usage_note": "協助。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "trazer", "pronunciation": ["/tɾaˈzeɾ/"], "specific_note": "" }], "example": {"sentence": "Traz água.", "translation": "帶水來。"}, "usage_note": "攜帶至此。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "需要", "related_terms": [{ "term_target": "precisar", "pronunciation": ["/pɾɨ.siˈzaɾ/"], "specific_note": "" }], "example": {"sentence": "Preciso de água.", "translation": "我需要水。"}, "usage_note": "Precisar de ...。", "image_file": "need.png" },
        { "id": "v-37", "term_zh": "使用", "related_terms": [{ "term_target": "usar", "pronunciation": ["/uˈzaɾ/"], "specific_note": "" }], "example": {"sentence": "Usar uma caneta.", "translation": "用原子筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-38", "term_zh": "變成", "related_terms": [{ "term_target": "tornar-se", "pronunciation": ["/tuɾˈnaɾ.sɨ/"], "specific_note": "" }, { "term_target": "ficar", "pronunciation": ["/fiˈkaɾ/"], "specific_note": "變得(狀態)" }], "example": {"sentence": "Tornar-se professor.", "translation": "變成老師。"}, "usage_note": "變化。", "image_file": "become.png" },
        { "id": "v-39", "term_zh": "開始", "related_terms": [{ "term_target": "começar", "pronunciation": ["/ku.mɨˈsaɾ/"], "specific_note": "" }, { "term_target": "iniciar", "pronunciation": ["/i.ni.siˈaɾ/"], "specific_note": "啟動/開始" }], "example": {"sentence": "Começar agora.", "translation": "現在開始。"}, "usage_note": "兩者通用。", "image_file": "start.png" },
        { "id": "v-40", "term_zh": "結束", "related_terms": [{ "term_target": "terminar", "pronunciation": ["/tɨɾ.miˈnaɾ/"], "specific_note": "" }, { "term_target": "acabar", "pronunciation": ["/a.kɐˈbaɾ/"], "specific_note": "" }], "example": {"sentence": "Acabar o trabalho.", "translation": "工作結束。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-41", "term_zh": "停止", "related_terms": [{ "term_target": "parar", "pronunciation": ["/paˈɾaɾ/"], "specific_note": "" }], "example": {"sentence": "Pára aqui.", "translation": "停在這裡。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-42", "term_zh": "記住", "related_terms": [{ "term_target": "lembrar", "pronunciation": ["/lẽˈbɾaɾ/"], "specific_note": "" }, { "term_target": "recordar", "pronunciation": ["/ʁɨ.kuɾˈdaɾ/"], "specific_note": "回憶" }], "example": {"sentence": "Lembra-te de mim.", "translation": "記得我。"}, "usage_note": "記憶。", "image_file": "remember.png" },
        { "id": "v-43", "term_zh": "談話", "related_terms": [{ "term_target": "falar", "pronunciation": ["/faˈlaɾ/"], "specific_note": "" }, { "term_target": "conversar", "pronunciation": ["/kõ.vɨɾˈsaɾ/"], "specific_note": "交談" }], "example": {"sentence": "Falar contigo.", "translation": "跟你談話。"}, "usage_note": "交談。", "image_file": "talk.png" },
        { "id": "v-44", "term_zh": "見面", "related_terms": [{ "term_target": "encontrar", "pronunciation": ["/ẽ.kõˈtɾaɾ/"], "specific_note": "" }, { "term_target": "conhecer", "pronunciation": ["/ku.ɲɨˈseɾ/"], "specific_note": "認識/初次見" }], "example": {"sentence": "Encontrar amigos.", "translation": "跟朋友碰面。"}, "usage_note": "會面。", "image_file": "meet.png" },
        { "id": "v-45", "term_zh": "乘坐（工具）", "related_terms": [{ "term_target": "apanhar", "pronunciation": ["/a.pɐˈɲaɾ/"], "specific_note": "葡式" }, { "term_target": "pegar", "pronunciation": ["/pɨˈɡaɾ/"], "specific_note": "巴式" }, { "term_target": "tomar", "pronunciation": ["/tuˈmaɾ/"], "specific_note": "通用" }], "example": {"sentence": "Apanhar o autocarro.", "translation": "搭公車(PT)。"}, "usage_note": "搭乘/拿取。", "image_file": "take.png" },
        { "id": "v-46", "term_zh": "放", "related_terms": [{ "term_target": "pôr", "pronunciation": ["/poɾ/"], "specific_note": "" }, { "term_target": "colocar", "pronunciation": ["/ku.luˈkaɾ/"], "specific_note": "" }], "example": {"sentence": "Põe aqui.", "translation": "放這裡。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-47", "term_zh": "吃", "related_terms": [{ "term_target": "comer", "pronunciation": ["/kuˈmeɾ/"], "specific_note": "" }], "example": {"sentence": "Comer algo.", "translation": "吃點東西。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-48", "term_zh": "睡覺", "related_terms": [{ "term_target": "dormir", "pronunciation": ["/duɾˈmiɾ/"], "specific_note": "" }], "example": {"sentence": "Vou dormir.", "translation": "我要去睡覺了。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-49", "term_zh": "寄送", "related_terms": [{ "term_target": "enviar", "pronunciation": ["/ẽ.viˈaɾ/"], "specific_note": "" }, { "term_target": "mandar", "pronunciation": ["/mɐ̃ˈdaɾ/"], "specific_note": "" }], "example": {"sentence": "Enviar um email.", "translation": "寄信。"}, "usage_note": "傳送。", "image_file": "send.png" },
        { "id": "v-50", "term_zh": "開車", "related_terms": [{ "term_target": "conduzir", "pronunciation": ["/kõ.duˈziɾ/"], "specific_note": "葡式" }, { "term_target": "dirigir", "pronunciation": ["/dʒi.ɾiˈʒiʁ/"], "specific_note": "巴式" }], "example": {"sentence": "Conduzir um carro.", "translation": "開車。"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-51", "term_zh": "讀書", "related_terms": [{ "term_target": "estudar", "pronunciation": ["/iʃ.tuˈdaɾ/"], "specific_note": "" }], "example": {"sentence": "Estudar português.", "translation": "讀葡萄牙語。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-52", "term_zh": "回去", "related_terms": [{ "term_target": "voltar", "pronunciation": ["/voɫˈtaɾ/"], "specific_note": "" }, { "term_target": "regressar", "pronunciation": ["/ʁɨ.ɡɾɨˈsaɾ/"], "specific_note": "返回" }], "example": {"sentence": "Voltar a casa.", "translation": "回家。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "bom / boa", "pronunciation": ["/bõ/", "/ˈbo.ɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Bom trabalho.", "translation": "做得好。"}, "usage_note": "形容詞分陰陽性。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "mau / má", "pronunciation": ["/maw/", "/ma/"], "specific_note": "m/f" }, { "term_target": "ruim", "pronunciation": ["/ˈʁwĩ/"], "specific_note": "巴式常用" }], "example": {"sentence": "Mau dia.", "translation": "壞的一天。"}, "usage_note": "負面。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "novo / nova", "pronunciation": ["/ˈno.vu/", "/ˈnɔ.vɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Telemóvel novo.", "translation": "新手機。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "primeiro / primeira", "pronunciation": ["/pɾiˈmɐj.ɾu/", "/pɾiˈmɐj.ɾɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Primeira vez.", "translation": "第一次。"}, "usage_note": "順序。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "passado / passada", "pronunciation": ["/pɐˈsa.du/", "/pɐˈsa.dɐ/"], "specific_note": "m/f" }, { "term_target": "último / última", "pronunciation": ["/ˈul.ti.mu/", "/ˈul.ti.mɐ/"], "specific_note": "最後的" }], "example": {"sentence": "A semana passada.", "translation": "上週。"}, "usage_note": "過去的。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "próximo / próxima", "pronunciation": ["/ˈpɾɔ.si.mu/", "/ˈpɾɔ.si.mɐ/"], "specific_note": "m/f" }], "example": {"sentence": "A próxima estação.", "translation": "下一站。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "longo / longa", "pronunciation": ["/ˈlõ.ɡu/", "/ˈlõ.ɡɐ/"], "specific_note": "m/f" }, { "term_target": "comprido / comprida", "pronunciation": ["/kõˈpɾi.du/", "/kõˈpɾi.dɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Cabelo comprido.", "translation": "長髮。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "grande", "pronunciation": ["/ˈɡɾɐ̃.dɨ/"], "specific_note": "" }], "example": {"sentence": "Casa grande.", "translation": "大房子。"}, "usage_note": "體積大。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "pequeno / pequena", "pronunciation": ["/pɨˈke.nu/", "/pɨˈke.nɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Gato pequeno.", "translation": "小貓。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "muito / muita", "pronunciation": ["/ˈmuj.tu/", "/ˈmuj.tɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Muita gente.", "translation": "很多人。"}, "usage_note": "數量多。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "alto / alta", "pronunciation": ["/ˈaɫ.tu/", "/ˈaɫ.tɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Edifício alto.", "translation": "高樓。"}, "usage_note": "高度。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "jovem", "pronunciation": ["/ˈʒɔ.vɐ̃j/"], "specific_note": "" }], "example": {"sentence": "Homem jovem.", "translation": "年輕人。"}, "usage_note": "年紀小。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的", "related_terms": [{ "term_target": "velho / velha", "pronunciation": ["/ˈvɛ.ʎu/", "/ˈvɛ.ʎɐ/"], "specific_note": "m/f" }, { "term_target": "idoso / idosa", "pronunciation": ["/iˈdo.zu/", "/iˈdo.zɐ/"], "specific_note": "年長(禮貌)" }], "example": {"sentence": "Livro velho.", "translation": "舊書。"}, "usage_note": "Velho 用於物品，人建議用 Idoso。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "perto", "pronunciation": ["/ˈpɛɾ.tu/"], "specific_note": "" }], "example": {"sentence": "É perto.", "translation": "很近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "longe", "pronunciation": ["/ˈlõ.ʒɨ/"], "specific_note": "" }], "example": {"sentence": "É longe.", "translation": "很遠。"}, "usage_note": "距離遠。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "rápido / rápida", "pronunciation": ["/ˈʁa.pi.du/", "/ˈʁa.pi.dɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Carro rápido.", "translation": "快車。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "lento / lenta", "pronunciation": ["/ˈlẽ.tu/", "/ˈlẽ.tɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Internet lenta.", "translation": "網路慢。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "quente", "pronunciation": ["/ˈkẽ.tɨ/"], "specific_note": "" }], "example": {"sentence": "Água quente.", "translation": "熱水。"}, "usage_note": "高溫。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "frio / fria", "pronunciation": ["/ˈfɾi.u/", "/ˈfɾi.ɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Bebida fria.", "translation": "冷飲。"}, "usage_note": "低溫。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "limpo / limpa", "pronunciation": ["/ˈlĩ.pu/", "/ˈlĩ.pɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Quarto limpo.", "translation": "乾淨的房間。"}, "usage_note": "無髒汙。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "sujo / suja", "pronunciation": ["/ˈsu.ʒu/", "/ˈsu.ʒɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Mãos sujas.", "translation": "髒手。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "fácil", "pronunciation": ["/ˈfa.siɫ/"], "specific_note": "" }], "example": {"sentence": "É fácil.", "translation": "這很簡單。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "difícil", "pronunciation": ["/diˈfi.siɫ/"], "specific_note": "" }], "example": {"sentence": "É difícil.", "translation": "很難。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "correto / correta", "pronunciation": ["/kuˈʁɛ.tu/", "/kuˈʁɛ.tɐ/"], "specific_note": "m/f" }, { "term_target": "certo / certa", "pronunciation": ["/ˈsɛɾ.tu/", "/ˈsɛɾ.tɐ/"], "specific_note": "對的" }], "example": {"sentence": "Resposta correta.", "translation": "正確答案。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "errado / errada", "pronunciation": ["/iˈʁa.du/", "/iˈʁa.dɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Está errado.", "translation": "是錯的。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "importante", "pronunciation": ["/ĩ.puɾˈtɐ̃.tɨ/"], "specific_note": "" }], "example": {"sentence": "Reunião importante.", "translation": "重要會議。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "diferente", "pronunciation": ["/diˈfɾẽ.tɨ/"], "specific_note": "" }], "example": {"sentence": "Cor diferente.", "translation": "不同顏色。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "real", "pronunciation": ["/ʁiˈaɫ/"], "specific_note": "真實" }, { "term_target": "verdadeiro / verdadeira", "pronunciation": ["/vɨɾ.dɐˈdɐj.ɾu/", "/vɨɾ.dɐˈdɐj.ɾɐ/"], "specific_note": "真的" }], "example": {"sentence": "Amor verdadeiro.", "translation": "真愛。"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "interessante", "pronunciation": ["/ĩ.tɨ.ɾɨˈsɐ̃.tɨ/"], "specific_note": "有意思" }, { "term_target": "engraçado / engraçada", "pronunciation": ["/ẽ.ɡɾɐˈsa.du/", "/ẽ.ɡɾɐˈsa.dɐ/"], "specific_note": "好笑" }], "example": {"sentence": "Livro interessante.", "translation": "有趣的書。"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "bonito / bonita", "pronunciation": ["/buˈni.tu/", "/buˈni.tɐ/"], "specific_note": "漂亮" }, { "term_target": "lindo / linda", "pronunciation": ["/ˈlĩ.du/", "/ˈlĩ.dɐ/"], "specific_note": "美麗" }], "example": {"sentence": "Flor bonita.", "translation": "美麗的花。"}, "usage_note": "形容人或景物。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "barato / barata", "pronunciation": ["/bɐˈɾa.tu/", "/bɐˈɾa.tɐ/"], "specific_note": "m/f" }], "example": {"sentence": "É barato.", "translation": "這很便宜。"}, "usage_note": "價格低。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "caro / cara", "pronunciation": ["/ˈka.ɾu/", "/ˈka.ɾɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Demasiado caro.", "translation": "太貴了。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "com fome", "pronunciation": ["/kõ ˈfo.mɨ/"], "specific_note": "有飢餓(片語)" }, { "term_target": "faminto / faminta", "pronunciation": ["/fɐˈmĩ.tu/", "/fɐˈmĩ.tɐ/"], "specific_note": "飢餓的" }], "example": {"sentence": "Estou com fome.", "translation": "我餓了(我有飢餓)。"}, "usage_note": "常用 Estar com fome。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "cansado / cansada", "pronunciation": ["/kɐ̃ˈsa.du/", "/kɐ̃ˈsa.dɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Estou cansado.", "translation": "我累了。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "ocupado / ocupada", "pronunciation": ["/o.kuˈpa.du/", "/o.kuˈpa.dɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Estou ocupado.", "translation": "我很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "feliz", "pronunciation": ["/fɨˈliʃ/"], "specific_note": "幸福/快樂" }, { "term_target": "contente", "pronunciation": ["/kõˈtẽ.tɨ/"], "specific_note": "滿意/高興" }], "example": {"sentence": "Estou feliz.", "translation": "我很快樂。"}, "usage_note": "心情。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "triste", "pronunciation": ["/ˈtɾiʃ.tɨ/"], "specific_note": "" }], "example": {"sentence": "História triste.", "translation": "悲傷的故事。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "semelhante", "pronunciation": ["/sɨ.mɨˈʎɐ̃.tɨ/"], "specific_note": "" }, { "term_target": "parecido / parecida", "pronunciation": ["/pɐ.ɾɨˈsi.du/", "/pɐ.ɾɨˈsi.dɐ/"], "specific_note": "" }], "example": {"sentence": "Cor semelhante.", "translation": "相似的顏色。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "famoso / famosa", "pronunciation": ["/fɐˈmo.zu/", "/fɐˈmo.zɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Ator famoso.", "translation": "知名演員。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "estrangeiro / estrangeira", "pronunciation": ["/iʃ.tɾɐ̃ˈʒɐj.ɾu/", "/iʃ.tɾɐ̃ˈʒɐj.ɾɐ/"], "specific_note": "m/f" }], "example": {"sentence": "País estrangeiro.", "translation": "外國。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "inteligente", "pronunciation": ["/ĩ.tɨ.liˈʒẽ.tɨ/"], "specific_note": "" }], "example": {"sentence": "Criança inteligente.", "translation": "聰明的孩子。"}, "usage_note": "腦袋好。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "perigoso / perigosa", "pronunciation": ["/pɨ.ɾiˈɡo.zu/", "/pɨ.ɾiˈɡo.zɐ/"], "specific_note": "m/f" }], "example": {"sentence": "É perigoso.", "translation": "這很危險。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "gentil", "pronunciation": ["/ʒẽˈtiɫ/"], "specific_note": "" }, { "term_target": "amável", "pronunciation": ["/ɐˈma.vɛɫ/"], "specific_note": "和藹" }], "example": {"sentence": "Pessoa gentil.", "translation": "好心人。"}, "usage_note": "溫柔。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "todo / toda / todos / todas", "pronunciation": ["/ˈto.du/", "/ˈto.dɐ/", "/ˈto.duʃ/", "/ˈto.dɐʃ/"], "specific_note": "全部" }, { "term_target": "cada", "pronunciation": ["/ˈka.dɐ/"], "specific_note": "每一個" }], "example": {"sentence": "Todos os dias.", "translation": "每一天(所有日子)。"}, "usage_note": "全部。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "favorito / favorita", "pronunciation": ["/fɐ.vuˈɾi.tu/", "/fɐ.vuˈɾi.tɐ/"], "specific_note": "m/f" }], "example": {"sentence": "Comida favorita.", "translation": "最愛的食物。"}, "usage_note": "中意。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "delicioso / deliciosa", "pronunciation": ["/dɨ.liˈsjo.zu/", "/dɨ.liˈsjo.zɐ/"], "specific_note": "m/f" }, { "term_target": "saboroso / saborosa", "pronunciation": ["/sɐ.buˈɾo.zu/", "/sɐ.buˈɾo.zɐ/"], "specific_note": "有味道的" }], "example": {"sentence": "Prato delicioso.", "translation": "美味的菜。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "tempo", "pronunciation": ["/ˈtẽ.pu/"], "specific_note": "m. (時間/天氣)" }, { "term_target": "hora", "pronunciation": ["/ˈɔ.ɾɐ/"], "specific_note": "f. (時刻)" }], "example": {"sentence": "Que horas são?", "translation": "現在幾點？"}, "usage_note": "時刻/時間。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "gente", "pronunciation": ["/ˈʒẽ.tɨ/"], "specific_note": "f. (集合)" }, { "term_target": "pessoas", "pronunciation": ["/pɨˈso.ɐʃ/"], "specific_note": "f. pl." }], "example": {"sentence": "Muita gente.", "translation": "很多人。"}, "usage_note": "泛指人。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "dinheiro", "pronunciation": ["/diˈɲɐj.ɾu/"], "specific_note": "m." }], "example": {"sentence": "Não tenho dinheiro.", "translation": "沒錢。"}, "usage_note": "不可數。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "criança", "pronunciation": ["/kɾiˈɐ̃.sɐ/"], "specific_note": "f." }, { "term_target": "filho / filha", "pronunciation": ["/ˈfi.ʎu/", "/ˈfi.ʎɐ/"], "specific_note": "兒子/女兒" }], "example": {"sentence": "Criança pequena.", "translation": "小孩。"}, "usage_note": "Criança 不分性別都是陰性。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "água", "pronunciation": ["/ˈa.ɡwɐ/"], "specific_note": "f." }], "example": {"sentence": "Beber água.", "translation": "喝水。"}, "usage_note": "不可數。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "comida", "pronunciation": ["/kuˈmi.dɐ/"], "specific_note": "f." }], "example": {"sentence": "Comida boa.", "translation": "好吃的食物。"}, "usage_note": "吃的東西。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "amigo / amiga", "pronunciation": ["/aˈmi.ɡu/", "/aˈmi.ɡɐ/"], "specific_note": "m./f." }], "example": {"sentence": "Meu amigo.", "translation": "我朋友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "família", "pronunciation": ["/fɐˈmi.ljɐ/"], "specific_note": "f." }], "example": {"sentence": "Família grande.", "translation": "大家庭。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "estudante", "pronunciation": ["/iʃ.tuˈdɐ̃.tɨ/"], "specific_note": "m./f." }, { "term_target": "aluno / aluna", "pronunciation": ["/aˈlu.nu/", "/aˈlu.nɐ/"], "specific_note": "m./f." }], "example": {"sentence": "Sou estudante.", "translation": "我是學生。"}, "usage_note": "Estudante 不分陰陽。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "cultura", "pronunciation": ["/kuɫˈtu.ɾɐ/"], "specific_note": "f." }], "example": {"sentence": "Cultura portuguesa.", "translation": "葡萄牙文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "problema", "pronunciation": ["/pɾuˈble.mɐ/"], "specific_note": "m." }], "example": {"sentence": "Sem problema.", "translation": "沒問題。"}, "usage_note": "陽性名詞 (O problema)。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "empresa", "pronunciation": ["/ẽˈpɾe.zɐ/"], "specific_note": "f." }], "example": {"sentence": "Empresa grande.", "translation": "大公司。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "homem", "pronunciation": ["/ˈɔ.mɐ̃j/"], "specific_note": "m." }], "example": {"sentence": "É um homem.", "translation": "他是男人。"}, "usage_note": "性別。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "mulher", "pronunciation": ["/muˈʎɛɾ/"], "specific_note": "f." }], "example": {"sentence": "É uma mulher.", "translation": "她是女人。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "escola", "pronunciation": ["/iʃˈkɔ.lɐ/"], "specific_note": "f." }], "example": {"sentence": "Ir à escola.", "translation": "去學校。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "professor / professora", "pronunciation": ["/pɾu.fɨˈsoɾ/", "/pɾu.fɨˈso.ɾɐ/"], "specific_note": "m./f." }], "example": {"sentence": "Professor de português.", "translation": "葡萄牙文老師。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "filme", "pronunciation": ["/ˈfiɫ.mɨ/"], "specific_note": "m." }], "example": {"sentence": "Ver um filme.", "translation": "看電影。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "telemóvel", "pronunciation": ["/tɛ.lɛˈmɔ.vɛɫ/"], "specific_note": "m. (葡式)" }, { "term_target": "celular", "pronunciation": ["/se.luˈlaʁ/"], "specific_note": "m. (巴式)" }], "example": {"sentence": "O meu telemóvel.", "translation": "我手機。"}, "usage_note": "地區習慣不同。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "computador", "pronunciation": ["/kõ.pu.tɐˈdoɾ/"], "specific_note": "m." }], "example": {"sentence": "Usar o computador.", "translation": "用電腦。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "carro", "pronunciation": ["/ˈka.ʁu/"], "specific_note": "m." }], "example": {"sentence": "Conduzir o carro.", "translation": "開車。"}, "usage_note": "汽車。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "mercado", "pronunciation": ["/mɨɾˈka.du/"], "specific_note": "m." }], "example": {"sentence": "Mercado noturno.", "translation": "夜市。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "roupa", "pronunciation": ["/ˈʁo.pɐ/"], "specific_note": "f." }], "example": {"sentence": "Comprar roupa.", "translation": "買衣服。"}, "usage_note": "集合名詞(單數)。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "loja", "pronunciation": ["/ˈlɔ.ʒɐ/"], "specific_note": "f." }], "example": {"sentence": "Loja de roupa.", "translation": "服飾店。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "autocarro", "pronunciation": ["/aw.toˈka.ʁu/"], "specific_note": "m. (葡式)" }, { "term_target": "ônibus", "pronunciation": ["/ˈo.ni.bus/"], "specific_note": "m. (巴式)" }], "example": {"sentence": "Apanhar o autocarro.", "translation": "搭公車。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "rua", "pronunciation": ["/ˈʁu.ɐ/"], "specific_note": "f." }], "example": {"sentence": "Na rua.", "translation": "在街上。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "casa", "pronunciation": ["/ˈka.zɐ/"], "specific_note": "f." }], "example": {"sentence": "Minha casa.", "translation": "我家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "mãe", "pronunciation": ["/mɐ̃j/"], "specific_note": "f." }], "example": {"sentence": "Minha mãe.", "translation": "我媽媽。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "pai", "pronunciation": ["/paj/"], "specific_note": "m." }], "example": {"sentence": "Meu pai.", "translation": "我爸爸。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "irmão", "pronunciation": ["/iɾˈmɐ̃w/"], "specific_note": "m." }], "example": {"sentence": "Meu irmão.", "translation": "我兄弟。"}, "usage_note": "兄弟。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "irmã", "pronunciation": ["/iɾˈmɐ̃/"], "specific_note": "f." }], "example": {"sentence": "Minha irmã.", "translation": "我姐妹。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "chinês", "pronunciation": ["/ʃiˈneʃ/"], "specific_note": "m." }], "example": {"sentence": "Falar chinês.", "translation": "說中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "manhã", "pronunciation": ["/mɐˈɲɐ̃/"], "specific_note": "f." }], "example": {"sentence": "De manhã.", "translation": "在早晨。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "noite", "pronunciation": ["/ˈnoj.tɨ/"], "specific_note": "f." }], "example": {"sentence": "Boa noite.", "translation": "晚安。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "bilhete", "pronunciation": ["/biˈʎe.tɨ/"], "specific_note": "m." }, { "term_target": "passagem", "pronunciation": ["/pɐˈsa.ʒɐ̃j/"], "specific_note": "f. (巴式)" }], "example": {"sentence": "Um bilhete, por favor.", "translation": "一張票，麻煩了。"}, "usage_note": "票。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "mala", "pronunciation": ["/ˈma.lɐ/"], "specific_note": "f. (行李箱/包)" }, { "term_target": "bolsa", "pronunciation": ["/ˈboɫ.sɐ/"], "specific_note": "f. (手提包)" }], "example": {"sentence": "Mala grande.", "translation": "大包包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "chávena", "pronunciation": ["/ˈʃa.vɨ.nɐ/"], "specific_note": "f. (茶杯)" }, { "term_target": "copo", "pronunciation": ["/ˈkɔ.pu/"], "specific_note": "m. (玻璃杯)" }], "example": {"sentence": "Chávena de chá.", "translation": "一杯茶。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "médico / médica", "pronunciation": ["/ˈmɛ.di.ku/", "/ˈmɛ.di.kɐ/"], "specific_note": "m./f." }], "example": {"sentence": "Ir ao médico.", "translation": "看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "polícia", "pronunciation": ["/puˈli.sjɐ/"], "specific_note": "f." }], "example": {"sentence": "Chamar a polícia.", "translation": "叫警察。"}, "usage_note": "警察。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "hospital", "pronunciation": ["/ɔʃ.piˈtaɫ/"], "specific_note": "m." }], "example": {"sentence": "Ir ao hospital.", "translation": "去醫院。"}, "usage_note": "醫療院所。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "lugar", "pronunciation": ["/luˈɡaɾ/"], "specific_note": "m." }, { "term_target": "assento", "pronunciation": ["/aˈsẽ.tu/"], "specific_note": "m." }], "example": {"sentence": "Tomar o lugar.", "translation": "請坐。"}, "usage_note": "位子。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "porta", "pronunciation": ["/ˈpɔɾ.tɐ/"], "specific_note": "f." }], "example": {"sentence": "Abrir a porta.", "translation": "開門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "quarto", "pronunciation": ["/ˈkwaɾ.tu/"], "specific_note": "m." }, { "term_target": "sala", "pronunciation": ["/ˈsa.lɐ/"], "specific_note": "f. (廳/室)" }], "example": {"sentence": "O meu quarto.", "translation": "我房間。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "estação", "pronunciation": ["/iʃ.tɐˈsɐ̃w/"], "specific_note": "f." }], "example": {"sentence": "Estação de comboios.", "translation": "火車站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "metro", "pronunciation": ["/ˈmɛ.tɾu/"], "specific_note": "m." }], "example": {"sentence": "Estação de metro.", "translation": "地鐵站。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "comboio", "pronunciation": ["/kõˈbɔj.u/"], "specific_note": "m. (葡式)" }, { "term_target": "trem", "pronunciation": ["/tɾẽj/"], "specific_note": "m. (巴式)" }], "example": {"sentence": "Viajar de comboio.", "translation": "搭火車旅行。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "aeroporto", "pronunciation": ["/a.ɛ.ɾoˈpoɾ.tu/"], "specific_note": "m." }], "example": {"sentence": "Ir ao aeroporto.", "translation": "去機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "bagagem", "pronunciation": ["/bɐˈɡa.ʒɐ̃j/"], "specific_note": "f." }], "example": {"sentence": "Muita bagagem.", "translation": "很多行李。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "mapa", "pronunciation": ["/ˈma.pɐ/"], "specific_note": "m." }], "example": {"sentence": "Olhar o mapa.", "translation": "看地圖。"}, "usage_note": "陽性名詞 (O mapa)。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "balcão", "pronunciation": ["/baɫˈkɐ̃w/"], "specific_note": "m." }, { "term_target": "guichê", "pronunciation": ["/ɡiˈʃe/"], "specific_note": "m. (售票口)" }], "example": {"sentence": "No balcão.", "translation": "在櫃檯。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "saguão", "pronunciation": ["/saˈɡwɐ̃w/"], "specific_note": "m." }, { "term_target": "hall", "pronunciation": ["/hɔl/"], "specific_note": "m." }], "example": {"sentence": "Esperar no saguão.", "translation": "在大廳等。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "reserva", "pronunciation": ["/ʁɨˈzɛɾ.vɐ/"], "specific_note": "f." }], "example": {"sentence": "Fazer uma reserva.", "translation": "做預約。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "check-in", "pronunciation": ["/tʃɛk in/"], "specific_note": "m." }, { "term_target": "registo", "pronunciation": ["/ʁɨˈʒiʃ.tu/"], "specific_note": "m." }], "example": {"sentence": "Fazer o check-in.", "translation": "辦理入住。"}, "usage_note": "Check-in。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "check-out", "pronunciation": ["/tʃɛk awt/"], "specific_note": "m." }, { "term_target": "saída", "pronunciation": ["/sɐˈi.dɐ/"], "specific_note": "f." }], "example": {"sentence": "Hora de saída.", "translation": "退房時間。"}, "usage_note": "Check-out。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "bebida", "pronunciation": ["/bɨˈbi.dɐ/"], "specific_note": "f." }], "example": {"sentence": "Bebida fresca.", "translation": "冷飲。"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "menu", "pronunciation": ["/mɛˈnu/"], "specific_note": "m." }, { "term_target": "ementa", "pronunciation": ["/iˈmẽ.tɐ/"], "specific_note": "f. (葡式)" }], "example": {"sentence": "O menu, por favor.", "translation": "請給菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "almoço", "pronunciation": ["/aɫˈmo.su/"], "specific_note": "m." }], "example": {"sentence": "Comer o almoço.", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "jantar", "pronunciation": ["/ʒɐ̃ˈtaɾ/"], "specific_note": "m." }], "example": {"sentence": "Comer o jantar.", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "conta", "pronunciation": ["/ˈkõ.tɐ/"], "specific_note": "f." }], "example": {"sentence": "A conta, por favor.", "translation": "麻煩結帳。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "preço", "pronunciation": ["/ˈpɾe.su/"], "specific_note": "m." }], "example": {"sentence": "Bom preço.", "translation": "好價格。"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "recibo", "pronunciation": ["/ʁɨˈsi.bu/"], "specific_note": "m." }, { "term_target": "talão", "pronunciation": ["/tɐˈlɐ̃w/"], "specific_note": "m. (小票)" }], "example": {"sentence": "O recibo, por favor.", "translation": "請給收據。"}, "usage_note": "證明。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "tamanho", "pronunciation": ["/tɐˈmɐ.ɲu/"], "specific_note": "m." }], "example": {"sentence": "Tamanho grande.", "translation": "大尺寸。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "entrada", "pronunciation": ["/ẽˈtɾa.dɐ/"], "specific_note": "f." }], "example": {"sentence": "Entrada principal.", "translation": "正門入口。"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "saída", "pronunciation": ["/sɐˈi.dɐ/"], "specific_note": "f." }], "example": {"sentence": "Saída de emergência.", "translation": "緊急出口。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "Taiwan", "pronunciation": ["/tajˈwan/"], "specific_note": "" }], "example": {"sentence": "Eu amo Taiwan.", "translation": "我愛台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "台灣人", "related_terms": [{ "term_target": "taiwanês / taiwanesa", "pronunciation": ["/taj.wɐˈneʃ/", "/taj.wɐˈne.zɐ/"], "specific_note": "m./f." }], "example": {"sentence": "Sou taiwanês.", "translation": "我是台灣人。"}, "usage_note": "國籍。", "image_file": "taiwanese.png" },
        { "id": "n-66", "term_zh": "一切事物", "related_terms": [{ "term_target": "tudo", "pronunciation": ["/ˈtu.du/"], "specific_note": "" }], "example": {"sentence": "Tudo bem.", "translation": "一切都好。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-67", "term_zh": "錢包", "related_terms": [{ "term_target": "carteira", "pronunciation": ["/kɐɾˈtɐj.ɾɐ/"], "specific_note": "f." }], "example": {"sentence": "Perdi a carteira.", "translation": "掉了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-68", "term_zh": "身分證", "related_terms": [{ "term_target": "cartão de cidadão", "pronunciation": ["/kɐɾˈtɐ̃w dɨ si.dɐˈdɐ̃w/"], "specific_note": "m. (葡式)" }, { "term_target": "identidade", "pronunciation": ["/i.dẽ.tʃiˈda.dʒi/"], "specific_note": "f. (巴式)" }], "example": {"sentence": "Mostrar a identificação.", "translation": "出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-69", "term_zh": "護照", "related_terms": [{ "term_target": "passaporte", "pronunciation": ["/pɐ.sɐˈpɔɾ.tɨ/"], "specific_note": "m." }], "example": {"sentence": "O seu passaporte.", "translation": "您的護照。"}, "usage_note": "出國必備。", "image_file": "passport.png" },
        { "id": "n-70", "term_zh": "餐廳", "related_terms": [{ "term_target": "restaurante", "pronunciation": ["/ʁɨʃ.tawˈɾɐ̃.tɨ/"], "specific_note": "m." }], "example": {"sentence": "Bom restaurante.", "translation": "好餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-71", "term_zh": "場所", "related_terms": [{ "term_target": "lugar", "pronunciation": ["/luˈɡaɾ/"], "specific_note": "m." }, { "term_target": "sítio", "pronunciation": ["/ˈsi.tju/"], "specific_note": "m." }], "example": {"sentence": "Bom lugar.", "translation": "好地方。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-72", "term_zh": "用品店員", "related_terms": [{ "term_target": "empregado / empregada", "pronunciation": ["/ẽ.pɾɨˈɡa.du/", "/ẽ.pɾɨˈɡa.dɐ/"], "specific_note": "m./f." }, { "term_target": "atendente", "pronunciation": ["/a.tẽˈdẽ.tɨ/"], "specific_note": "接待員" }], "example": {"sentence": "Perguntar ao empregado.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-73", "term_zh": "超市", "related_terms": [{ "term_target": "supermercado", "pronunciation": ["/su.pɛɾ.mɨɾˈka.du/"], "specific_note": "m." }], "example": {"sentence": "Ir ao supermercado.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-74", "term_zh": "月台", "related_terms": [{ "term_target": "plataforma", "pronunciation": ["/plɐ.tɐˈfɔɾ.mɐ/"], "specific_note": "f." }, { "term_target": "cais", "pronunciation": ["/kajʃ/"], "specific_note": "m. (葡式)" }], "example": {"sentence": "Plataforma 1.", "translation": "第一月台。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "agora", "pronunciation": ["/aˈɡɔ.ɾɐ/"], "specific_note": "" }], "example": {"sentence": "Faz agora.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "muito", "pronunciation": ["/ˈmuj.tu/"], "specific_note": "" }], "example": {"sentence": "Muito bom.", "translation": "非常好。"}, "usage_note": "強調。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "realmente", "pronunciation": ["/ʁjaɫˈmẽ.tɨ/"], "specific_note": "" }, { "term_target": "a sério", "pronunciation": ["/a ˈsɛ.ɾju/"], "specific_note": "說真的" }], "example": {"sentence": "A sério?", "translation": "真的嗎？"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "bem", "pronunciation": ["/bɐ̃j/"], "specific_note": "" }], "example": {"sentence": "Dormir bem.", "translation": "睡得好。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "frequentemente", "pronunciation": ["/fɾɨ.kwẽ.tɨˈmẽ.tɨ/"], "specific_note": "" }, { "term_target": "muitas vezes", "pronunciation": ["/ˈmuj.tɐʃ ˈve.zɨʃ/"], "specific_note": "很多次" }], "example": {"sentence": "Venho frequentemente.", "translation": "我常來。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "normalmente", "pronunciation": ["/nɔɾ.maɫˈmẽ.tɨ/"], "specific_note": "" }], "example": {"sentence": "Normalmente caminho.", "translation": "通常我走路。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "já", "pronunciation": ["/ʒa/"], "specific_note": "" }], "example": {"sentence": "Já está feito.", "translation": "已經做好了。"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "só", "pronunciation": ["/sɔ/"], "specific_note": "" }, { "term_target": "apenas", "pronunciation": ["/aˈpe.nɐʃ/"], "specific_note": "" }], "example": {"sentence": "Só um.", "translation": "只有一個。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "outra vez", "pronunciation": ["/ˈo.tɾɐ veʃ/"], "specific_note": "" }, { "term_target": "de novo", "pronunciation": ["/dɨ ˈno.vu/"], "specific_note": "" }], "example": {"sentence": "Tenta outra vez.", "translation": "再試一次。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "cerca de", "pronunciation": ["/ˈseɾ.kɐ dɨ/"], "specific_note": "" }, { "term_target": "mais ou menos", "pronunciation": ["/majz‿o ˈme.nuʃ/"], "specific_note": "多或少" }], "example": {"sentence": "Cerca de 10 minutos.", "translation": "大約10分鐘。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "um pouco", "pronunciation": ["/ũ ˈpo.ku/"], "specific_note": "" }], "example": {"sentence": "Um pouco picante.", "translation": "一點點辣。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "também", "pronunciation": ["/tɐ̃ˈbɐ̃j/"], "specific_note": "" }], "example": {"sentence": "Eu também.", "translation": "我也是。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "talvez", "pronunciation": ["/taɫˈveʃ/"], "specific_note": "" }], "example": {"sentence": "Talvez mais tarde.", "translation": "也許等下。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "mais tarde", "pronunciation": ["/majʃ ˈtaɾ.dɨ/"], "specific_note": "稍後" }, { "term_target": "depois", "pronunciation": ["/dɨˈpojʃ/"], "specific_note": "然後" }], "example": {"sentence": "Até mais tarde.", "translation": "待會見。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "em breve", "pronunciation": ["/ẽj ˈbɾɛ.vɨ/"], "specific_note": "" }, { "term_target": "logo", "pronunciation": ["/ˈlɔ.ɡu/"], "specific_note": "" }], "example": {"sentence": "Até breve.", "translation": "待會見(很快見)。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "juntos", "pronunciation": ["/ˈʒũ.tuʃ/"], "specific_note": "" }], "example": {"sentence": "Ir juntos.", "translation": "一起去。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "ainda", "pronunciation": ["/aˈĩ.dɐ/"], "specific_note": "" }], "example": {"sentence": "Ainda aqui.", "translation": "還在這裡。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "geralmente", "pronunciation": ["/ʒɨ.ɾaɫˈmẽ.tɨ/"], "specific_note": "" }], "example": {"sentence": "Geralmente é assim.", "translation": "一般是那樣。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "imediatamente", "pronunciation": ["/i.mɨ.djɐ.tɐˈmẽ.tɨ/"], "specific_note": "" }], "example": {"sentence": "Vem imediatamente.", "translation": "立刻來。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "nem", "pronunciation": ["/nɐ̃j/"], "specific_note": "" }, { "term_target": "tampouco", "pronunciation": ["/tɐ̃ˈpo.ku/"], "specific_note": "" }], "example": {"sentence": "Eu também não.", "translation": "我也不(葡文常用 Eu também não)。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "o que", "pronunciation": ["/u ke/"], "specific_note": "" }, { "term_target": "que", "pronunciation": ["/ke/"], "specific_note": "" }], "example": {"sentence": "O que é isto?", "translation": "這是什麼？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "como", "pronunciation": ["/ˈko.mu/"], "specific_note": "" }], "example": {"sentence": "Como estás?", "translation": "你好嗎？"}, "usage_note": "問狀況。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "quando", "pronunciation": ["/ˈkwɐ̃.du/"], "specific_note": "" }], "example": {"sentence": "Quando vamos?", "translation": "何時去？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "onde", "pronunciation": ["/ˈõ.dɨ/"], "specific_note": "" }], "example": {"sentence": "Onde estás?", "translation": "你在哪？"}, "usage_note": "問地點。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "quem", "pronunciation": ["/kɐ̃j/"], "specific_note": "" }], "example": {"sentence": "Quem é ele?", "translation": "他是誰？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "porquê", "pronunciation": ["/puɾˈke/"], "specific_note": "" }], "example": {"sentence": "Porquê?", "translation": "為什麼？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "qual", "pronunciation": ["/kwaɫ/"], "specific_note": "" }], "example": {"sentence": "Qual preferes?", "translation": "你喜歡哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "quanto", "pronunciation": ["/ˈkwɐ̃.tu/"], "specific_note": "" }], "example": {"sentence": "Quanto custa?", "translation": "多少錢？"}, "usage_note": "不可數/價格。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "quanto tempo", "pronunciation": ["/ˈkwɐ̃.tu ˈtẽ.pu/"], "specific_note": "" }], "example": {"sentence": "Quanto tempo?", "translation": "要多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "agora", "pronunciation": ["/aˈɡɔ.ɾɐ/"], "specific_note": "" }], "example": {"sentence": "Faz agora.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "hoje", "pronunciation": ["/ˈo.ʒɨ/"], "specific_note": "" }], "example": {"sentence": "Hoje está calor.", "translation": "今天很熱。"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "amanhã", "pronunciation": ["/ɐ.mɐˈɲɐ̃/"], "specific_note": "" }], "example": {"sentence": "Até amanhã.", "translation": "明天見。"}, "usage_note": "隔天。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "ontem", "pronunciation": ["/ˈõ.tɐ̃j/"], "specific_note": "" }], "example": {"sentence": "Ontem fui.", "translation": "昨天我去了。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "aqui", "pronunciation": ["/aˈki/"], "specific_note": "" }], "example": {"sentence": "Vem aqui.", "translation": "來這。"}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "ali", "pronunciation": ["/aˈli/"], "specific_note": "中距離" }, { "term_target": "lá", "pronunciation": ["/la/"], "specific_note": "遠距離" }], "example": {"sentence": "Vai lá.", "translation": "去那。"}, "usage_note": "遠處。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "dia", "pronunciation": ["/ˈdi.ɐ/"], "specific_note": "" }], "example": {"sentence": "Um dia.", "translation": "一天。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "ano", "pronunciation": ["/ˈɐ.nu/"], "specific_note": "" }], "example": {"sentence": "Este ano.", "translation": "今年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "mês", "pronunciation": ["/meʃ/"], "specific_note": "" }], "example": {"sentence": "Este mês.", "translation": "這個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "semana", "pronunciation": ["/sɨˈmɐ.nɐ/"], "specific_note": "" }], "example": {"sentence": "A próxima semana.", "translation": "下週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "manhã", "pronunciation": ["/mɐˈɲɐ̃/"], "specific_note": "" }], "example": {"sentence": "De manhã.", "translation": "在早上。"}, "usage_note": "上午。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "tarde", "pronunciation": ["/ˈtaɾ.dɨ/"], "specific_note": "" }], "example": {"sentence": "Boa tarde.", "translation": "午安。"}, "usage_note": "PM。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "noite", "pronunciation": ["/ˈnoj.tɨ/"], "specific_note": "" }], "example": {"sentence": "Boa noite.", "translation": "晚安。"}, "usage_note": "傍晚到睡前。", "image_file": "evening.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "meio-dia", "pronunciation": ["/ˈmɐj.u ˈdi.ɐ/"], "specific_note": "" }], "example": {"sentence": "Ao meio-dia.", "translation": "在中午。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "frente", "pronunciation": ["/ˈfɾẽ.tɨ/"], "specific_note": "" }], "example": {"sentence": "À frente.", "translation": "在前面。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "trás", "pronunciation": ["/tɾaʃ/"], "specific_note": "" }, { "term_target": "atrás", "pronunciation": ["/aˈtɾaʃ/"], "specific_note": "在後面" }], "example": {"sentence": "Atrás da porta.", "translation": "門後。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "esquerda", "pronunciation": ["/iʃˈkeɾ.dɐ/"], "specific_note": "" }], "example": {"sentence": "À esquerda.", "translation": "左轉。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "direita", "pronunciation": ["/diˈɾɐj.tɐ/"], "specific_note": "" }], "example": {"sentence": "À direita.", "translation": "右轉。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "ao lado", "pronunciation": ["/aw ˈla.du/"], "specific_note": "" }], "example": {"sentence": "Ao meu lado.", "translation": "在我旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "em frente", "pronunciation": ["/ɐ̃j ˈfɾẽ.tɨ/"], "specific_note": "" }], "example": {"sentence": "Em frente ao banco.", "translation": "銀行對面。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "primavera", "pronunciation": ["/pɾi.mɐˈvɛ.ɾɐ/"], "specific_note": "" }], "example": {"sentence": "A primavera.", "translation": "春天。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "verão", "pronunciation": ["/vɨˈɾɐ̃w/"], "specific_note": "" }], "example": {"sentence": "Verão quente.", "translation": "炎熱的夏天。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "outono", "pronunciation": ["/oˈto.nu/"], "specific_note": "" }], "example": {"sentence": "Outono fresco.", "translation": "涼爽的秋天。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "inverno", "pronunciation": ["/ĩˈvɛɾ.nu/"], "specific_note": "" }], "example": {"sentence": "Inverno frio.", "translation": "寒冷的冬天。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "zero", "pronunciation": ["/ˈzɛ.ɾu/"], "specific_note": "" }], "example": {"sentence": "Zero graus.", "translation": "零度。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "um", "pronunciation": ["/ũ/"], "specific_note": "m." }, { "term_target": "uma", "pronunciation": ["/ˈu.mɐ/"], "specific_note": "f." }], "example": {"sentence": "Um minuto.", "translation": "一分鐘。"}, "usage_note": "一(分陰陽)。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "dois", "pronunciation": ["/dojʃ/"], "specific_note": "m." }, { "term_target": "duas", "pronunciation": ["/ˈdu.ɐʃ/"], "specific_note": "f." }], "example": {"sentence": "Dois dias.", "translation": "兩天。"}, "usage_note": "二(分陰陽)。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "três", "pronunciation": ["/tɾeʃ/"], "specific_note": "" }], "example": {"sentence": "Três pessoas.", "translation": "三人。"}, "usage_note": "三。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "quatro", "pronunciation": ["/ˈkwa.tɾu/"], "specific_note": "" }], "example": {"sentence": "Quatro estações.", "translation": "四季。"}, "usage_note": "四。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "cinco", "pronunciation": ["/ˈsĩ.ku/"], "specific_note": "" }], "example": {"sentence": "Cinco euros.", "translation": "五歐元。"}, "usage_note": "五。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "seis", "pronunciation": ["/sɐjʃ/"], "specific_note": "" }], "example": {"sentence": "Seis horas.", "translation": "六小時。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "sete", "pronunciation": ["/ˈsɛ.tɨ/"], "specific_note": "" }], "example": {"sentence": "Sete dias.", "translation": "七天。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "oito", "pronunciation": ["/ˈoj.tu/"], "specific_note": "" }], "example": {"sentence": "Oito anos.", "translation": "八歲。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "nove", "pronunciation": ["/ˈnɔ.vɨ/"], "specific_note": "" }], "example": {"sentence": "Nove horas.", "translation": "九點。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "dez", "pronunciation": ["/dɛʃ/"], "specific_note": "" }], "example": {"sentence": "Dez euros.", "translation": "十歐元。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "onze", "pronunciation": ["/ˈõ.zɨ/"], "specific_note": "" }], "example": {"sentence": "Onze anos.", "translation": "11歲。"}, "usage_note": "十一。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "doze", "pronunciation": ["/ˈdo.zɨ/"], "specific_note": "" }], "example": {"sentence": "Doze meses.", "translation": "12個月。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "quinze", "pronunciation": ["/ˈkĩ.zɨ/"], "specific_note": "" }], "example": {"sentence": "Quinze minutos.", "translation": "15分鐘。"}, "usage_note": "十五。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "vinte", "pronunciation": ["/ˈvĩ.tɨ/"], "specific_note": "" }], "example": {"sentence": "Vinte euros.", "translation": "20歐元。"}, "usage_note": "二十。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "cinquenta", "pronunciation": ["/sĩˈkwẽ.tɐ/"], "specific_note": "" }], "example": {"sentence": "Cinquenta por cento.", "translation": "50%。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "cem", "pronunciation": ["/sɐ̃j/"], "specific_note": "" }], "example": {"sentence": "Cem pontos.", "translation": "一百分。"}, "usage_note": "百。", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "mil", "pronunciation": ["/miɫ/"], "specific_note": "" }], "example": {"sentence": "Mil obrigados.", "translation": "萬分感謝(一千個謝謝)。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "dez mil", "pronunciation": ["/dɛʃ miɫ/"], "specific_note": "" }], "example": {"sentence": "Dez mil dólares.", "translation": "一萬元。"}, "usage_note": "一萬。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是...", "related_terms": [{ "term_target": "Eu sou...", "pronunciation": ["/ew so/"], "specific_note": "" }], "example": {"sentence": "Eu sou estudante.", "translation": "我是學生。"}, "usage_note": "本質/身分。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫...", "related_terms": [{ "term_target": "Chamo-me...", "pronunciation": ["/ˈʃɐ.mu mɨ/"], "specific_note": "" }], "example": {"sentence": "Chamo-me João.", "translation": "我的名字叫約翰。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做...", "related_terms": [{ "term_target": "Eu faço...", "pronunciation": ["/ew ˈfa.su/"], "specific_note": "" }], "example": {"sentence": "Eu faço o trabalho.", "translation": "我做作業。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做...", "related_terms": [{ "term_target": "Estou a ...", "pronunciation": ["/iʃˈto a/"], "specific_note": "葡式" }, { "term_target": "Estou ...-ando/-endo", "pronunciation": ["/isˈto/"], "specific_note": "巴式" }], "example": {"sentence": "Estou a comer.", "translation": "我正在吃。"}, "usage_note": "進行式。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠...", "related_terms": [{ "term_target": "Posso...", "pronunciation": ["/ˈpɔ.su/"], "specific_note": "" }], "example": {"sentence": "Posso nadar.", "translation": "我會游泳。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做...", "related_terms": [{ "term_target": "Gosto de...", "pronunciation": ["/ˈɡɔʃ.tu dɨ/"], "specific_note": "" }], "example": {"sentence": "Gosto de ler.", "translation": "我喜歡閱讀。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經...", "related_terms": [{ "term_target": "Eu era...", "pronunciation": ["/ew ˈɛ.ɾɐ/"], "specific_note": "狀態" }], "example": {"sentence": "Eu era estudante.", "translation": "我曾經是學生。"}, "usage_note": "過去狀態。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過...", "related_terms": [{ "term_target": "Eu fiz...", "pronunciation": ["/ew fiʃ/"], "specific_note": "動作" }], "example": {"sentence": "Eu fiz o trabalho.", "translation": "我做了功課。"}, "usage_note": "過去動作。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過...", "related_terms": [{ "term_target": "Já fiz...", "pronunciation": ["/ʒa fiʃ/"], "specific_note": "" }], "example": {"sentence": "Já comi.", "translation": "我已經吃過了。"}, "usage_note": "完成式。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過...", "related_terms": [{ "term_target": "Já estive em...", "pronunciation": ["/ʒa iʃˈti.vɨ ɐ̃j/"], "specific_note": "" }], "example": {"sentence": "Já estive em Portugal.", "translation": "我曾經去過葡萄牙。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算...", "related_terms": [{ "term_target": "Vou...", "pronunciation": ["/vo/"], "specific_note": "將要" }], "example": {"sentence": "Vou partir.", "translation": "我將要離開。"}, "usage_note": "未來式。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是...嗎？", "related_terms": [{ "term_target": "Tu és...?", "pronunciation": ["/tu ɛʃ/"], "specific_note": "非正式" }, { "term_target": "Você é...?", "pronunciation": ["/voˈse ɛ/"], "specific_note": "通用" }], "example": {"sentence": "Tu és estudante?", "translation": "你是學生嗎？"}, "usage_note": "問狀態。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做...嗎？", "related_terms": [{ "term_target": "Fazes...?", "pronunciation": ["/ˈfa.zɨʃ/"], "specific_note": "" }], "example": {"sentence": "Fazes desporto?", "translation": "你有運動嗎？"}, "usage_note": "一般疑問句。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經...嗎？", "related_terms": [{ "term_target": "Já...?", "pronunciation": ["/ʒa/"], "specific_note": "" }], "example": {"sentence": "Já viste isto?", "translation": "你有看過這個嗎？"}, "usage_note": "問經驗。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做...？", "related_terms": [{ "term_target": "Quando...?", "pronunciation": ["/ˈkwɐ̃.du/"], "specific_note": "" }], "example": {"sentence": "Quando dormes?", "translation": "你何時睡？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去...？", "related_terms": [{ "term_target": "Quando vais a...?", "pronunciation": ["/ˈkwɐ̃.du vajz a/"], "specific_note": "" }], "example": {"sentence": "Quando vais à escola?", "translation": "你何時去學校？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做...？", "related_terms": [{ "term_target": "Onde...?", "pronunciation": ["/ˈõ.dɨ/"], "specific_note": "" }], "example": {"sentence": "Onde moras?", "translation": "你住哪裡？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做...？", "related_terms": [{ "term_target": "Como fazes...?", "pronunciation": ["/ˈko.mu ˈfa.zɨʃ/"], "specific_note": "" }], "example": {"sentence": "Como fazes isto?", "translation": "你怎麼做這個？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去...？", "related_terms": [{ "term_target": "Como vais para...?", "pronunciation": ["/ˈko.mu vajʃ ˈpa.ɾɐ/"], "specific_note": "" }], "example": {"sentence": "Como vais para a escola?", "translation": "你怎麼去學校？"}, "usage_note": "問交通方式。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是...", "related_terms": [{ "term_target": "Eu não sou...", "pronunciation": ["/ew nɐ̃w so/"], "specific_note": "" }], "example": {"sentence": "Eu não sou médico.", "translation": "我不是醫生。"}, "usage_note": "否定身分。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做...", "related_terms": [{ "term_target": "Eu não (verbo)...", "pronunciation": ["/ew nɐ̃w/"], "specific_note": "" }], "example": {"sentence": "Eu não fumo.", "translation": "我不抽菸。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能...", "related_terms": [{ "term_target": "Não posso...", "pronunciation": ["/nɐ̃w ˈpɔ.su/"], "specific_note": "" }], "example": {"sentence": "Não posso ir.", "translation": "我不能去。"}, "usage_note": "否定能力。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾...", "related_terms": [{ "term_target": "Nunca...", "pronunciation": ["/ˈnũ.kɐ/"], "specific_note": "" }], "example": {"sentence": "Nunca comi isto.", "translation": "我沒吃過這個。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必...", "related_terms": [{ "term_target": "Não tenho de...", "pronunciation": ["/nɐ̃w ˈtɐ̃.ɲu dɨ/"], "specific_note": "" }], "example": {"sentence": "Não tenho de ir.", "translation": "我不必去。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果...的話", "related_terms": [{ "term_target": "Se..., ...", "pronunciation": ["/sɨ/"], "specific_note": "" }], "example": {"sentence": "Se quiseres, vamos.", "translation": "如果你想，我們走。"}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當...時", "related_terms": [{ "term_target": "Quando..., ...", "pronunciation": ["/ˈkwɐ̃.du/"], "specific_note": "" }], "example": {"sentence": "Quando como, estou feliz.", "translation": "當我吃東西時，我很開心。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你...好嗎？", "related_terms": [{ "term_target": "Podes...?", "pronunciation": ["/ˈpɔ.dɨʃ/"], "specific_note": "非正式" }, { "term_target": "Pode...?", "pronunciation": ["/ˈpɔ.dɨ/"], "specific_note": "正式" }], "example": {"sentence": "Podes ajudar-me?", "translation": "可以幫我嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做...吧！", "related_terms": [{ "term_target": "Vamos...", "pronunciation": ["/ˈvɐ.muʃ/"], "specific_note": "" }], "example": {"sentence": "Vamos comer.", "translation": "我們去吃吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為...", "related_terms": [{ "term_target": "Eu acho que...", "pronunciation": ["/ew ˈa.ʃu kɨ/"], "specific_note": "" }], "example": {"sentence": "Eu acho que é bom.", "translation": "我認為這很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做...", "related_terms": [{ "term_target": "Quero...", "pronunciation": ["/ˈkɛ.ɾu/"], "specific_note": "" }], "example": {"sentence": "Quero partir.", "translation": "我想離開。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做...", "related_terms": [{ "term_target": "Tenho de...", "pronunciation": ["/ˈtɐ̃.ɲu dɨ/"], "specific_note": "" }], "example": {"sentence": "Tenho de trabalhar.", "translation": "我必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "É ... (infinitivo)", "pronunciation": ["/ɛ/"], "specific_note": "" }], "example": {"sentence": "É bom comer.", "translation": "吃東西是很好的。"}, "usage_note": "描述動作。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我...嗎？", "related_terms": [{ "term_target": "Podes ajudar-me a...?", "pronunciation": ["/ˈpɔ.dɨʃ a.ʒuˈdaɾ mɨ a/"], "specific_note": "" }], "example": {"sentence": "Podes ajudar-me a limpar?", "translation": "你可以幫我打掃嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以...嗎？", "related_terms": [{ "term_target": "Posso...?", "pronunciation": ["/ˈpɔ.su/"], "specific_note": "" }], "example": {"sentence": "Posso entrar?", "translation": "我可以進來嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡...", "related_terms": [{ "term_target": "Não gosto de...", "pronunciation": ["/nɐ̃w ˈɡɔʃ.tu dɨ/"], "specific_note": "" }], "example": {"sentence": "Não gosto disto.", "translation": "我不喜歡這個。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡...", "related_terms": [{ "term_target": "Prefiro...", "pronunciation": ["/pɾɨˈfi.ɾu/"], "specific_note": "" }], "example": {"sentence": "Prefiro chá.", "translation": "我比較喜歡茶。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更...", "related_terms": [{ "term_target": "A é mais ... do que B", "pronunciation": ["/A ɛ majʃ ... du kɨ B/"], "specific_note": "" }], "example": {"sentence": "Isto é mais caro do que aquilo.", "translation": "這比那個貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有...（存在）", "related_terms": [{ "term_target": "Há...", "pronunciation": ["/a/"], "specific_note": "" }], "example": {"sentence": "Há um cão.", "translation": "有一隻狗。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}