import { AppData } from '../types';

export const englishData: AppData ={
  "meta": {
    "source_language": "zh-TW",
    "target_language": "en-US",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 英文完整版 (包含所有原始列表單字與完整句型 - KK音標版)"
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
            { "term_target": "Hello", "pronunciation": ["/həˈloʊ/"], "specific_note": "通用" }
          ],
          "example": { "sentence": "Hello, how are you?", "translation": "你好，你好嗎？" },
          "usage_note": "最通用的問候。",
          "image_file": "hello.png"
        },
        {
          "id": "greet-002",
          "term_zh": "再見",
          "related_terms": [
            { "term_target": "Good bye", "pronunciation": ["/gʊd baɪ/"], "specific_note": "正式" }
          ],
          "example": { "sentence": "Good bye, see you.", "translation": "再見，待會見。" },
          "usage_note": "口語常說 Bye-bye。",
          "image_file": "goodbye.png"
        },
        {
          "id": "greet-003",
          "term_zh": "謝謝你",
          "related_terms": [
            { "term_target": "Thank you", "pronunciation": ["/ˈθæŋk ju/"], "specific_note": "" }
          ],
          "example": { "sentence": "Thank you very much.", "translation": "非常謝謝你。" },
          "usage_note": "咬舌音 th 很重要。",
          "image_file": "thank_you.png"
        },
        {
          "id": "greet-004",
          "term_zh": "對不起",
          "related_terms": [
            { "term_target": "I'm sorry", "pronunciation": ["/aɪm ˈsɑri/"], "specific_note": "道歉" }
          ],
          "example": { "sentence": "I'm sorry for the mistake.", "translation": "抱歉我弄錯了。" },
          "usage_note": "做錯事時使用。",
          "image_file": "sorry.png"
        },
        {
          "id": "greet-005",
          "term_zh": "早安",
          "related_terms": [
            { "term_target": "Good morning", "pronunciation": ["/gʊd ˈmɔrnɪŋ/"], "specific_note": "" }
          ],
          "example": { "sentence": "Good morning.", "translation": "早安。" },
          "usage_note": "中午12點前使用。",
          "image_file": "good_morning.png"
        },
        {
          "id": "greet-006",
          "term_zh": "請問...",
          "related_terms": [
            { "term_target": "Excuse me...", "pronunciation": ["/ɪkˈskjus mi/"], "specific_note": "發問前" }
          ],
          "example": { "sentence": "Excuse me, where is the station?", "translation": "請問車站哪裡？" },
          "usage_note": "引起注意時使用。",
          "image_file": "excuse_me.png"
        },
        {
          "id": "greet-007",
          "term_zh": "借過",
          "related_terms": [
            { "term_target": "Excuse me", "pronunciation": ["/ɪkˈskjus mi/"], "specific_note": "通過時" }
          ],
          "example": { "sentence": "Excuse me, coming through.", "translation": "借過，我要過去。" },
          "usage_note": "請求讓路。",
          "image_file": "excuse_me_pass.png"
        },
        {
          "id": "greet-008",
          "term_zh": "我不懂",
          "related_terms": [
            { "term_target": "I don't understand", "pronunciation": ["/aɪ doʊnt ˌʌndɚˈstænd/"], "specific_note": "" }
          ],
          "example": { "sentence": "Sorry, I don't understand.", "translation": "抱歉，我不懂。" },
          "usage_note": "聽不懂時直接說。",
          "image_file": "dont_understand.png"
        },
        {
          "id": "greet-009",
          "term_zh": "這是什麼？",
          "related_terms": [
            { "term_target": "What is this?", "pronunciation": ["/hwɑt ɪz ðɪs/"], "specific_note": "" }
          ],
          "example": { "sentence": "What is this?", "translation": "這是什麼？" },
          "usage_note": "指著東西問。",
          "image_file": "what_is_this.png"
        },
        {
          "id": "greet-010",
          "term_zh": "我想要這個",
          "related_terms": [
            { "term_target": "I want this", "pronunciation": ["/aɪ wɑnt ðɪs/"], "specific_note": "直接" }
          ],
          "example": { "sentence": "I want this one.", "translation": "我要這個。" },
          "usage_note": "直接表達購買意願。",
          "image_file": "i_want_this.png"
        },
        {
          "id": "greet-011",
          "term_zh": "請給我...",
          "related_terms": [
            { "term_target": "Please give me...", "pronunciation": ["/pliz gɪv mi/"], "specific_note": "" }
          ],
          "example": { "sentence": "Please give me water.", "translation": "請給我水。" },
          "usage_note": "索取物品。",
          "image_file": "please_give_me.png"
        },
        {
          "id": "greet-012",
          "term_zh": "廁所在哪裡？",
          "related_terms": [
            { "term_target": "Where is the bathroom?", "pronunciation": ["/wɛr ɪz ðə ˈbæθˌrum/"], "specific_note": "" }
          ],
          "example": { "sentence": "Excuse me, where is the bathroom?", "translation": "請問廁所在哪？" },
          "usage_note": "出國最重要的一句話。",
          "image_file": "where_bathroom.png"
        },
        {
          "id": "greet-013",
          "term_zh": "多少錢？",
          "related_terms": [
            { "term_target": "How much is it?", "pronunciation": ["/haʊ mʌtʃ ɪz ɪt/"], "specific_note": "" }
          ],
          "example": { "sentence": "How much is it?", "translation": "這多少錢？" },
          "usage_note": "購物必備。",
          "image_file": "how_much.png"
        },
        {
          "id": "greet-014",
          "term_zh": "請幫我",
          "related_terms": [
            { "term_target": "Please help me", "pronunciation": ["/pliz hɛlp mi/"], "specific_note": "" }
          ],
          "example": { "sentence": "Please help me.", "translation": "請幫我。" },
          "usage_note": "尋求協助。",
          "image_file": "help_me.png"
        },
        {
          "id": "greet-015",
          "term_zh": "你可以再說一次嗎？",
          "related_terms": [
            { "term_target": "Can you say that again?", "pronunciation": ["/kæn ju seɪ ðæt əˈgɛn/"], "specific_note": "" }
          ],
          "example": { "sentence": "Sorry, can you say that again?", "translation": "抱歉，能再說一次嗎？" },
          "usage_note": "沒聽清楚時使用。",
          "image_file": "say_again.png"
        },
        {
          "id": "greet-016",
          "term_zh": "你可以講慢一點嗎？",
          "related_terms": [
            { "term_target": "Can you speak slowly?", "pronunciation": ["/kæn ju spik ˈsloʊli/"], "specific_note": "" }
          ],
          "example": { "sentence": "Can you speak slowly?", "translation": "可以講慢一點嗎？" },
          "usage_note": "外國人講太快時使用。",
          "image_file": "speak_slowly.png"
        }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個", "related_terms": [{ "term_target": "that", "pronunciation": ["/ðæt/"], "specific_note": "指示詞" }, { "term_target": "it", "pronunciation": ["/ɪt/"], "specific_note": "代名詞" }], "example": {"sentence": "What is that?", "translation": "那是什麼？"}, "usage_note": "It指無生命或動物，That指遠處。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "I", "pronunciation": ["/aɪ/"], "specific_note": "" }], "example": {"sentence": "I am a student.", "translation": "我是學生。"}, "usage_note": "永遠大寫。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "you", "pronunciation": ["/ju/"], "specific_note": "" }], "example": {"sentence": "You are nice.", "translation": "你很好。"}, "usage_note": "單複數同形。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他", "related_terms": [{ "term_target": "he", "pronunciation": ["/hi/"], "specific_note": "" }], "example": {"sentence": "He is my dad.", "translation": "他是我爸。"}, "usage_note": "男性。", "image_file": "he.png" },
        { "id": "pro-05", "term_zh": "他的", "related_terms": [{ "term_target": "his", "pronunciation": ["/hɪz/"], "specific_note": "" }], "example": {"sentence": "His car.", "translation": "他的車。"}, "usage_note": "所有格。", "image_file": "his.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "we", "pronunciation": ["/wi/"], "specific_note": "" }], "example": {"sentence": "We are family.", "translation": "我們是家人。"}, "usage_note": "第一人稱複數。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "她", "related_terms": [{ "term_target": "she", "pronunciation": ["/ʃi/"], "specific_note": "" }], "example": {"sentence": "She is my mom.", "translation": "她是我媽。"}, "usage_note": "女性。", "image_file": "she.png" },
        { "id": "pro-08", "term_zh": "他們", "related_terms": [{ "term_target": "they", "pronunciation": ["/ðeɪ/"], "specific_note": "" }], "example": {"sentence": "They are students.", "translation": "他們是學生。"}, "usage_note": "第三人稱複數。", "image_file": "they.png" },
        { "id": "pro-09", "term_zh": "這個", "related_terms": [{ "term_target": "this", "pronunciation": ["/ðɪs/"], "specific_note": "" }], "example": {"sentence": "This is mine.", "translation": "這是我的。"}, "usage_note": "近處單數。", "image_file": "this.png" },
        { "id": "pro-10", "term_zh": "那個（指示詞）", "related_terms": [{ "term_target": "that", "pronunciation": ["/ðæt/"], "specific_note": "" }], "example": {"sentence": "That is yours.", "translation": "那是你的。"}, "usage_note": "遠處單數。", "image_file": "that_obj.png" },
        { "id": "pro-11", "term_zh": "她的", "related_terms": [{ "term_target": "her", "pronunciation": ["/hɝ/"], "specific_note": "" }], "example": {"sentence": "Her bag.", "translation": "她的包包。"}, "usage_note": "所有格。", "image_file": "her.png" },
        { "id": "pro-12", "term_zh": "你的", "related_terms": [{ "term_target": "your", "pronunciation": ["/jʊr/"], "specific_note": "" }], "example": {"sentence": "Your turn.", "translation": "換你了。"}, "usage_note": "所有格。", "image_file": "your.png" },
        { "id": "pro-13", "term_zh": "他們的", "related_terms": [{ "term_target": "their", "pronunciation": ["/ðɛr/"], "specific_note": "" }], "example": {"sentence": "Their house.", "translation": "他們的房子。"}, "usage_note": "所有格。", "image_file": "their.png" },
        { "id": "pro-14", "term_zh": "我們的", "related_terms": [{ "term_target": "our", "pronunciation": ["/ˈaʊr/"], "specific_note": "" }], "example": {"sentence": "Our school.", "translation": "我們的學校。"}, "usage_note": "所有格。", "image_file": "our.png" },
        { "id": "pro-15", "term_zh": "這些", "related_terms": [{ "term_target": "these", "pronunciation": ["/ðiz/"], "specific_note": "" }], "example": {"sentence": "These are books.", "translation": "這些是書。"}, "usage_note": "近處複數。", "image_file": "these.png" },
        { "id": "pro-16", "term_zh": "那些", "related_terms": [{ "term_target": "those", "pronunciation": ["/ðoʊz/"], "specific_note": "" }], "example": {"sentence": "Those are birds.", "translation": "那些是鳥。"}, "usage_note": "遠處複數。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "am", "pronunciation": ["/æm/"], "specific_note": "I" }, { "term_target": "are", "pronunciation": ["/ɑr/"], "specific_note": "You/We/They" }, { "term_target": "is", "pronunciation": ["/ɪz/"], "specific_note": "He/She/It" }], "example": {"sentence": "I am happy.", "translation": "我很快樂。"}, "usage_note": "Be動詞。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "have", "pronunciation": ["/hæv/"], "specific_note": "" }, { "term_target": "has", "pronunciation": ["/hæz/"], "specific_note": "第三人稱單數" }], "example": {"sentence": "I have a car.", "translation": "我有一台車。"}, "usage_note": "擁有。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "go", "pronunciation": ["/goʊ/"], "specific_note": "" }], "example": {"sentence": "Go home.", "translation": "回家。"}, "usage_note": "離開去某處。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "get", "pronunciation": ["/gɛt/"], "specific_note": "" }], "example": {"sentence": "Get a gift.", "translation": "收到禮物。"}, "usage_note": "獲得/拿取。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "do", "pronunciation": ["/du/"], "specific_note": "" }], "example": {"sentence": "Do homework.", "translation": "做功課。"}, "usage_note": "執行動作。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "say", "pronunciation": ["/seɪ/"], "specific_note": "" }], "example": {"sentence": "Say hello.", "translation": "說你好。"}, "usage_note": "說出內容。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "know", "pronunciation": ["/noʊ/"], "specific_note": "" }], "example": {"sentence": "I know you.", "translation": "我認識你。"}, "usage_note": "K不發音。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "think", "pronunciation": ["/θɪŋk/"], "specific_note": "" }], "example": {"sentence": "I think so.", "translation": "我也這麼覺得。"}, "usage_note": "思考/認為。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "see", "pronunciation": ["/si/"], "specific_note": "" }], "example": {"sentence": "I see you.", "translation": "我看到你了。"}, "usage_note": "自然看見。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "make", "pronunciation": ["/meɪk/"], "specific_note": "" }], "example": {"sentence": "Make coffee.", "translation": "泡咖啡。"}, "usage_note": "產生新東西。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "come", "pronunciation": ["/kʌm/"], "specific_note": "" }], "example": {"sentence": "Come here.", "translation": "來這裡。"}, "usage_note": "過來。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "need", "pronunciation": ["/nid/"], "specific_note": "" }], "example": {"sentence": "I need water.", "translation": "我需要水。"}, "usage_note": "必要。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "use", "pronunciation": ["/juz/"], "specific_note": "" }], "example": {"sentence": "Use a pen.", "translation": "用筆。"}, "usage_note": "利用。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "find", "pronunciation": ["/faɪnd/"], "specific_note": "" }], "example": {"sentence": "Find a job.", "translation": "找工作。"}, "usage_note": "發現。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "give", "pronunciation": ["/gɪv/"], "specific_note": "" }], "example": {"sentence": "Give me that.", "translation": "給我那個。"}, "usage_note": "交付。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "tell", "pronunciation": ["/tɛl/"], "specific_note": "" }], "example": {"sentence": "Tell me why.", "translation": "告訴我為什麼。"}, "usage_note": "告知。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "work", "pronunciation": ["/wɝk/"], "specific_note": "" }], "example": {"sentence": "I work here.", "translation": "我在這工作。"}, "usage_note": "上班。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "like", "pronunciation": ["/laɪk/"], "specific_note": "" }], "example": {"sentence": "I like it.", "translation": "我喜歡它。"}, "usage_note": "喜好。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "wake up", "pronunciation": ["/weɪk ʌp/"], "specific_note": "" }], "example": {"sentence": "Wake up now.", "translation": "現在醒來。"}, "usage_note": "醒來。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "speak", "pronunciation": ["/spik/"], "specific_note": "" }], "example": {"sentence": "Speak English.", "translation": "說英文。"}, "usage_note": "講語言。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "hear", "pronunciation": ["/hɪr/"], "specific_note": "" }], "example": {"sentence": "Can you hear me?", "translation": "聽得到我嗎？"}, "usage_note": "聽覺。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "write", "pronunciation": ["/raɪt/"], "specific_note": "" }], "example": {"sentence": "Write a name.", "translation": "寫名字。"}, "usage_note": "書寫。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "read", "pronunciation": ["/rid/"], "specific_note": "" }], "example": {"sentence": "Read a book.", "translation": "看書。"}, "usage_note": "閱讀。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "wait", "pronunciation": ["/weɪt/"], "specific_note": "" }], "example": {"sentence": "Wait for me.", "translation": "等我。"}, "usage_note": "等候。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "try", "pronunciation": ["/traɪ/"], "specific_note": "" }], "example": {"sentence": "Try this.", "translation": "試試這個。"}, "usage_note": "試驗。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "pay", "pronunciation": ["/peɪ/"], "specific_note": "" }], "example": {"sentence": "Pay the bill.", "translation": "付帳單。"}, "usage_note": "支付。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "choose", "pronunciation": ["/tʃuz/"], "specific_note": "" }], "example": {"sentence": "Choose one.", "translation": "選一個。"}, "usage_note": "挑選。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "enter", "pronunciation": ["/ˈɛntɚ/"], "specific_note": "" }], "example": {"sentence": "Enter the room.", "translation": "進房間。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "live", "pronunciation": ["/lɪv/"], "specific_note": "" }], "example": {"sentence": "I live here.", "translation": "我住這裡。"}, "usage_note": "居住。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "arrive", "pronunciation": ["/əˈraɪv/"], "specific_note": "" }], "example": {"sentence": "Arrive late.", "translation": "晚到。"}, "usage_note": "抵達。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "walk", "pronunciation": ["/wɔk/"], "specific_note": "" }], "example": {"sentence": "Walk home.", "translation": "走路回家。"}, "usage_note": "步行。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "open", "pronunciation": ["/ˈoʊpən/"], "specific_note": "" }], "example": {"sentence": "Open the door.", "translation": "開門。"}, "usage_note": "開啟。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "close", "pronunciation": ["/kloʊz/"], "specific_note": "" }], "example": {"sentence": "Close the window.", "translation": "關窗。"}, "usage_note": "關上。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "help", "pronunciation": ["/hɛlp/"], "specific_note": "" }], "example": {"sentence": "Help me.", "translation": "幫我。"}, "usage_note": "協助。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "bring", "pronunciation": ["/brɪŋ/"], "specific_note": "" }], "example": {"sentence": "Bring water.", "translation": "帶水來。"}, "usage_note": "攜帶。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "需要", "related_terms": [{ "term_target": "need", "pronunciation": ["/nid/"], "specific_note": "" }], "example": {"sentence": "I need help.", "translation": "我需要幫忙。"}, "usage_note": "必要。", "image_file": "need_verb.png" },
        { "id": "v-37", "term_zh": "使用", "related_terms": [{ "term_target": "use", "pronunciation": ["/juz/"], "specific_note": "" }], "example": {"sentence": "Use phone.", "translation": "用手機。"}, "usage_note": "利用。", "image_file": "use_verb.png" },
        { "id": "v-38", "term_zh": "變成", "related_terms": [{ "term_target": "become", "pronunciation": ["/bɪˈkʌm/"], "specific_note": "" }], "example": {"sentence": "Become a doctor.", "translation": "變成醫生。"}, "usage_note": "變化。", "image_file": "become.png" },
        { "id": "v-39", "term_zh": "開始", "related_terms": [{ "term_target": "start", "pronunciation": ["/stɑrt/"], "specific_note": "" }], "example": {"sentence": "Start now.", "translation": "現在開始。"}, "usage_note": "開始。", "image_file": "start.png" },
        { "id": "v-40", "term_zh": "開始", "related_terms": [{ "term_target": "begin", "pronunciation": ["/bɪˈgɪn/"], "specific_note": "" }], "example": {"sentence": "Begin class.", "translation": "開始上課。"}, "usage_note": "同Start。", "image_file": "begin.png" },
        { "id": "v-41", "term_zh": "結束", "related_terms": [{ "term_target": "finish", "pronunciation": ["/ˈfɪnɪʃ/"], "specific_note": "" }], "example": {"sentence": "Finish work.", "translation": "工作結束。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-42", "term_zh": "停止", "related_terms": [{ "term_target": "stop", "pronunciation": ["/stɑp/"], "specific_note": "" }], "example": {"sentence": "Stop here.", "translation": "停這裡。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-43", "term_zh": "記住", "related_terms": [{ "term_target": "remember", "pronunciation": ["/rɪˈmɛmbɚ/"], "specific_note": "" }], "example": {"sentence": "Remember me.", "translation": "記得我。"}, "usage_note": "記憶。", "image_file": "remember.png" },
        { "id": "v-44", "term_zh": "談話", "related_terms": [{ "term_target": "talk", "pronunciation": ["/tɔk/"], "specific_note": "" }], "example": {"sentence": "Talk to me.", "translation": "跟我說話。"}, "usage_note": "交談。", "image_file": "talk.png" },
        { "id": "v-45", "term_zh": "見面", "related_terms": [{ "term_target": "meet", "pronunciation": ["/mit/"], "specific_note": "" }], "example": {"sentence": "Meet friends.", "translation": "見朋友。"}, "usage_note": "會面。", "image_file": "meet.png" },
        { "id": "v-46", "term_zh": "乘坐（工具）", "related_terms": [{ "term_target": "take", "pronunciation": ["/teɪk/"], "specific_note": "" }], "example": {"sentence": "Take a bus.", "translation": "搭公車。"}, "usage_note": "搭乘。", "image_file": "take.png" },
        { "id": "v-47", "term_zh": "放", "related_terms": [{ "term_target": "put", "pronunciation": ["/pʊt/"], "specific_note": "" }], "example": {"sentence": "Put it down.", "translation": "放下它。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-48", "term_zh": "吃", "related_terms": [{ "term_target": "eat", "pronunciation": ["/it/"], "specific_note": "" }], "example": {"sentence": "Eat dinner.", "translation": "吃晚餐。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-49", "term_zh": "睡覺", "related_terms": [{ "term_target": "sleep", "pronunciation": ["/slip/"], "specific_note": "" }], "example": {"sentence": "Go to sleep.", "translation": "去睡覺。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-50", "term_zh": "寄送", "related_terms": [{ "term_target": "send", "pronunciation": ["/sɛnd/"], "specific_note": "" }], "example": {"sentence": "Send email.", "translation": "寄信。"}, "usage_note": "傳送。", "image_file": "send.png" },
        { "id": "v-51", "term_zh": "開車", "related_terms": [{ "term_target": "drive", "pronunciation": ["/draɪv/"], "specific_note": "" }], "example": {"sentence": "Drive a car.", "translation": "開車。"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-52", "term_zh": "讀書", "related_terms": [{ "term_target": "study", "pronunciation": ["/ˈstʌdi/"], "specific_note": "" }], "example": {"sentence": "Study hard.", "translation": "用功讀書。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-53", "term_zh": "回去", "related_terms": [{ "term_target": "go back", "pronunciation": ["/goʊ bæk/"], "specific_note": "" }], "example": {"sentence": "Go back home.", "translation": "回家。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "good", "pronunciation": ["/gʊd/"], "specific_note": "" }], "example": {"sentence": "Good job.", "translation": "做得好。"}, "usage_note": "正面。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "bad", "pronunciation": ["/bæd/"], "specific_note": "" }], "example": {"sentence": "Bad boy.", "translation": "壞男孩。"}, "usage_note": "負面。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "new", "pronunciation": ["/nu/"], "specific_note": "" }], "example": {"sentence": "New phone.", "translation": "新手機。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "first", "pronunciation": ["/fɝst/"], "specific_note": "" }], "example": {"sentence": "First time.", "translation": "第一次。"}, "usage_note": "順序。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "last", "pronunciation": ["/læst/"], "specific_note": "" }], "example": {"sentence": "Last week.", "translation": "上週。"}, "usage_note": "最後或上一個。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "next", "pronunciation": ["/nɛkst/"], "specific_note": "" }], "example": {"sentence": "Next station.", "translation": "下一站。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "long", "pronunciation": ["/lɔŋ/"], "specific_note": "" }], "example": {"sentence": "Long hair.", "translation": "長髮。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "big", "pronunciation": ["/bɪg/"], "specific_note": "" }], "example": {"sentence": "Big house.", "translation": "大房子。"}, "usage_note": "體積大。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "small", "pronunciation": ["/smɔl/"], "specific_note": "" }], "example": {"sentence": "Small size.", "translation": "小尺寸。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "many", "pronunciation": ["/ˈmɛni/"], "specific_note": "可數" }], "example": {"sentence": "Many people.", "translation": "很多人。"}, "usage_note": "數量多。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "tall", "pronunciation": ["/tɔl/"], "specific_note": "" }], "example": {"sentence": "Tall building.", "translation": "高樓。"}, "usage_note": "高度。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "young", "pronunciation": ["/jʌŋ/"], "specific_note": "" }], "example": {"sentence": "Young man.", "translation": "年輕人。"}, "usage_note": "年紀小。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的", "related_terms": [{ "term_target": "old", "pronunciation": ["/oʊld/"], "specific_note": "" }], "example": {"sentence": "Old book.", "translation": "舊書。"}, "usage_note": "人或物皆可。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "near", "pronunciation": ["/nɪr/"], "specific_note": "" }], "example": {"sentence": "Near here.", "translation": "在這附近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "far", "pronunciation": ["/fɑr/"], "specific_note": "" }], "example": {"sentence": "Far away.", "translation": "很遠。"}, "usage_note": "距離遠。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "fast", "pronunciation": ["/fæst/"], "specific_note": "" }], "example": {"sentence": "Run fast.", "translation": "跑得快。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "slow", "pronunciation": ["/sloʊ/"], "specific_note": "" }], "example": {"sentence": "Walk slow.", "translation": "走得慢。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "hot", "pronunciation": ["/hɑt/"], "specific_note": "" }], "example": {"sentence": "Hot water.", "translation": "熱水。"}, "usage_note": "高溫。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "cold", "pronunciation": ["/koʊld/"], "specific_note": "" }], "example": {"sentence": "Cold drink.", "translation": "冷飲。"}, "usage_note": "低溫。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "clean", "pronunciation": ["/klin/"], "specific_note": "" }], "example": {"sentence": "Clean room.", "translation": "乾淨的房間。"}, "usage_note": "無髒汙。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "dirty", "pronunciation": ["/ˈdɝti/"], "specific_note": "" }], "example": {"sentence": "Dirty hands.", "translation": "髒手。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "easy", "pronunciation": ["/ˈizi/"], "specific_note": "" }], "example": {"sentence": "It is easy.", "translation": "這很簡單。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "difficult", "pronunciation": ["/ˈdɪfəˌkʌlt/"], "specific_note": "" }], "example": {"sentence": "It is difficult.", "translation": "很難。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "correct", "pronunciation": ["/kəˈrɛkt/"], "specific_note": "" }], "example": {"sentence": "Correct answer.", "translation": "正確答案。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "wrong", "pronunciation": ["/rɔŋ/"], "specific_note": "" }], "example": {"sentence": "Wrong way.", "translation": "錯的路。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "important", "pronunciation": ["/ɪmˈpɔrtənt/"], "specific_note": "" }], "example": {"sentence": "Important meeting.", "translation": "重要會議。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "different", "pronunciation": ["/ˈdɪfrənt/"], "specific_note": "" }], "example": {"sentence": "Different color.", "translation": "不同顏色。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "real", "pronunciation": ["/riəl/"], "specific_note": "" }], "example": {"sentence": "Real gold.", "translation": "真金。"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "interesting", "pronunciation": ["/ˈɪntrɪstɪŋ/"], "specific_note": "" }], "example": {"sentence": "Interesting book.", "translation": "有趣的書。"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "beautiful", "pronunciation": ["/ˈbjutəfəl/"], "specific_note": "" }], "example": {"sentence": "Beautiful flower.", "translation": "美麗的花。"}, "usage_note": "形容人或景物。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "cheap", "pronunciation": ["/tʃip/"], "specific_note": "" }], "example": {"sentence": "It is cheap.", "translation": "很便宜。"}, "usage_note": "價格低。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "expensive", "pronunciation": ["/ɪkˈspɛnsɪv/"], "specific_note": "" }], "example": {"sentence": "Too expensive.", "translation": "太貴了。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "hungry", "pronunciation": ["/ˈhʌŋgri/"], "specific_note": "" }], "example": {"sentence": "I am hungry.", "translation": "我餓了。"}, "usage_note": "餓。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "tired", "pronunciation": ["/taɪrd/"], "specific_note": "" }], "example": {"sentence": "I am tired.", "translation": "我累了。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "busy", "pronunciation": ["/ˈbɪzi/"], "specific_note": "" }], "example": {"sentence": "I am busy.", "translation": "我很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "happy", "pronunciation": ["/ˈhæpi/"], "specific_note": "" }], "example": {"sentence": "Happy birthday.", "translation": "生日快樂。"}, "usage_note": "高興。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "sad", "pronunciation": ["/sæd/"], "specific_note": "" }], "example": {"sentence": "Sad story.", "translation": "悲傷的故事。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "similar", "pronunciation": ["/ˈsɪməlɚ/"], "specific_note": "" }], "example": {"sentence": "Similar color.", "translation": "相似的顏色。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "famous", "pronunciation": ["/ˈfeɪməs/"], "specific_note": "" }], "example": {"sentence": "Famous singer.", "translation": "知名歌手。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "foreign", "pronunciation": ["/ˈfɔrən/"], "specific_note": "" }], "example": {"sentence": "Foreign country.", "translation": "外國。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "intelligent", "pronunciation": ["/ɪnˈtɛlədʒənt/"], "specific_note": "" }], "example": {"sentence": "Intelligent student.", "translation": "聰明的學生。"}, "usage_note": "智能高。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "dangerous", "pronunciation": ["/ˈdeɪndʒərəs/"], "specific_note": "" }], "example": {"sentence": "It is dangerous.", "translation": "這很危險。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "kind", "pronunciation": ["/kaɪnd/"], "specific_note": "" }], "example": {"sentence": "Kind person.", "translation": "好心人。"}, "usage_note": "溫柔。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "every", "pronunciation": ["/ˈɛvri/"], "specific_note": "" }], "example": {"sentence": "Every day.", "translation": "每一天。"}, "usage_note": "每一個。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "favorite", "pronunciation": ["/ˈfeɪvərɪt/"], "specific_note": "" }], "example": {"sentence": "Favorite food.", "translation": "最愛的食物。"}, "usage_note": "中意。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "delicious", "pronunciation": ["/dɪˈlɪʃəs/"], "specific_note": "" }], "example": {"sentence": "Delicious food.", "translation": "美味的食物。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "time", "pronunciation": ["/taɪm/"], "specific_note": "" }], "example": {"sentence": "What time is it?", "translation": "現在幾點？"}, "usage_note": "時刻/時間。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "people", "pronunciation": ["/ˈpipəl/"], "specific_note": "" }], "example": {"sentence": "Many people.", "translation": "很多人。"}, "usage_note": "複數。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "money", "pronunciation": ["/ˈmʌni/"], "specific_note": "" }], "example": {"sentence": "No money.", "translation": "沒錢。"}, "usage_note": "不可數。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "child", "pronunciation": ["/tʃaɪld/"], "specific_note": "" }], "example": {"sentence": "Small child.", "translation": "小孩。"}, "usage_note": "兒童。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "water", "pronunciation": ["/ˈwɑtɚ/"], "specific_note": "" }], "example": {"sentence": "Drink water.", "translation": "喝水。"}, "usage_note": "不可數。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "food", "pronunciation": ["/fud/"], "specific_note": "" }], "example": {"sentence": "Good food.", "translation": "好吃的食物。"}, "usage_note": "吃的東西。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "friend", "pronunciation": ["/frɛnd/"], "specific_note": "" }], "example": {"sentence": "My friend.", "translation": "我朋友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "family", "pronunciation": ["/ˈfæməli/"], "specific_note": "" }], "example": {"sentence": "Big family.", "translation": "大家庭。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "student", "pronunciation": ["/ˈstudənt/"], "specific_note": "" }], "example": {"sentence": "I am a student.", "translation": "我是學生。"}, "usage_note": "在學者。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "culture", "pronunciation": ["/ˈkʌltʃɚ/"], "specific_note": "" }], "example": {"sentence": "Local culture.", "translation": "當地文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "problem", "pronunciation": ["/ˈprɑbləm/"], "specific_note": "" }], "example": {"sentence": "No problem.", "translation": "沒問題。"}, "usage_note": "難題。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "company", "pronunciation": ["/ˈkʌmpəni/"], "specific_note": "" }], "example": {"sentence": "Big company.", "translation": "大公司。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "man", "pronunciation": ["/mæn/"], "specific_note": "" }], "example": {"sentence": "He is a man.", "translation": "他是男人。"}, "usage_note": "性別。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "woman", "pronunciation": ["/ˈwʊmən/"], "specific_note": "" }], "example": {"sentence": "She is a woman.", "translation": "她是女人。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "school", "pronunciation": ["/skul/"], "specific_note": "" }], "example": {"sentence": "Go to school.", "translation": "去學校。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "teacher", "pronunciation": ["/ˈtitʃɚ/"], "specific_note": "" }], "example": {"sentence": "English teacher.", "translation": "英文老師。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "movie", "pronunciation": ["/ˈmuvi/"], "specific_note": "" }], "example": {"sentence": "Watch a movie.", "translation": "看電影。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "phone", "pronunciation": ["/foʊn/"], "specific_note": "" }], "example": {"sentence": "My phone.", "translation": "我手機。"}, "usage_note": "電話。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "computer", "pronunciation": ["/kəmˈpjutɚ/"], "specific_note": "" }], "example": {"sentence": "Use computer.", "translation": "用電腦。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "car", "pronunciation": ["/kɑr/"], "specific_note": "" }], "example": {"sentence": "Drive a car.", "translation": "開車。"}, "usage_note": "汽車。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "market", "pronunciation": ["/ˈmɑrkɪt/"], "specific_note": "" }], "example": {"sentence": "Night market.", "translation": "夜市。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "clothes", "pronunciation": ["/kloʊðz/"], "specific_note": "" }], "example": {"sentence": "Buy clothes.", "translation": "買衣服。"}, "usage_note": "衣物。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "shop", "pronunciation": ["/ʃɑp/"], "specific_note": "" }], "example": {"sentence": "Coffee shop.", "translation": "咖啡店。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "bus", "pronunciation": ["/bʌs/"], "specific_note": "" }], "example": {"sentence": "Take a bus.", "translation": "搭公車。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "street", "pronunciation": ["/strit/"], "specific_note": "" }], "example": {"sentence": "On the street.", "translation": "在街上。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "house", "pronunciation": ["/haʊs/"], "specific_note": "" }], "example": {"sentence": "My house.", "translation": "我家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "mother", "pronunciation": ["/ˈmʌðɚ/"], "specific_note": "" }], "example": {"sentence": "My mother.", "translation": "我媽媽。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "father", "pronunciation": ["/ˈfɑðɚ/"], "specific_note": "" }], "example": {"sentence": "My father.", "translation": "我爸爸。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "brother", "pronunciation": ["/ˈbrʌðɚ/"], "specific_note": "" }], "example": {"sentence": "My brother.", "translation": "我兄弟。"}, "usage_note": "兄弟。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "sister", "pronunciation": ["/ˈsɪstɚ/"], "specific_note": "" }], "example": {"sentence": "My sister.", "translation": "我姐妹。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "Chinese", "pronunciation": ["/tʃaɪˈniz/"], "specific_note": "" }], "example": {"sentence": "Speak Chinese.", "translation": "說中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "morning", "pronunciation": ["/ˈmɔrnɪŋ/"], "specific_note": "" }], "example": {"sentence": "In the morning.", "translation": "在早晨。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "night", "pronunciation": ["/naɪt/"], "specific_note": "" }], "example": {"sentence": "Good night.", "translation": "晚安。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "ticket", "pronunciation": ["/ˈtɪkɪt/"], "specific_note": "" }], "example": {"sentence": "One ticket.", "translation": "一張票。"}, "usage_note": "票。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "bag", "pronunciation": ["/bæg/"], "specific_note": "" }], "example": {"sentence": "Big bag.", "translation": "大包包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "cup", "pronunciation": ["/kʌp/"], "specific_note": "" }], "example": {"sentence": "Cup of tea.", "translation": "一杯茶。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "doctor", "pronunciation": ["/ˈdɑktɚ/"], "specific_note": "" }], "example": {"sentence": "See a doctor.", "translation": "看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "police", "pronunciation": ["/pəˈlis/"], "specific_note": "" }], "example": {"sentence": "Call police.", "translation": "叫警察。"}, "usage_note": "警察。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "hospital", "pronunciation": ["/ˈhɑspɪtəl/"], "specific_note": "" }], "example": {"sentence": "Go to hospital.", "translation": "去醫院。"}, "usage_note": "醫療院所。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "seat", "pronunciation": ["/sit/"], "specific_note": "" }], "example": {"sentence": "Take a seat.", "translation": "請坐。"}, "usage_note": "位子。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "door", "pronunciation": ["/dɔr/"], "specific_note": "" }], "example": {"sentence": "Open the door.", "translation": "開門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "room", "pronunciation": ["/rum/"], "specific_note": "" }], "example": {"sentence": "My room.", "translation": "我房間。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "station", "pronunciation": ["/ˈsteɪʃən/"], "specific_note": "" }], "example": {"sentence": "Bus station.", "translation": "公車站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "subway", "pronunciation": ["/ˈsʌbˌweɪ/"], "specific_note": "" }], "example": {"sentence": "MRT station.", "translation": "捷運站。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "train", "pronunciation": ["/treɪn/"], "specific_note": "" }], "example": {"sentence": "By train.", "translation": "搭火車。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "airport", "pronunciation": ["/ˈɛrˌpɔrt/"], "specific_note": "" }], "example": {"sentence": "Go to airport.", "translation": "去機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "luggage", "pronunciation": ["/ˈlʌgɪdʒ/"], "specific_note": "" }], "example": {"sentence": "Heavy luggage.", "translation": "很重的行李。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "map", "pronunciation": ["/mæp/"], "specific_note": "" }], "example": {"sentence": "Google map.", "translation": "谷歌地圖。"}, "usage_note": "指引。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "counter", "pronunciation": ["/ˈkaʊntɚ/"], "specific_note": "" }], "example": {"sentence": "At the counter.", "translation": "在櫃檯。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "lobby", "pronunciation": ["/ˈlɑbi/"], "specific_note": "" }], "example": {"sentence": "Wait in lobby.", "translation": "在大廳等。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "reservation", "pronunciation": ["/ˌrɛzɚˈveɪʃən/"], "specific_note": "" }], "example": {"sentence": "Make a reservation.", "translation": "做預約。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "check-in", "pronunciation": ["/tʃɛk ɪn/"], "specific_note": "" }], "example": {"sentence": "Check-in time.", "translation": "入住時間。"}, "usage_note": "Check-in。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "check-out", "pronunciation": ["/tʃɛk aʊt/"], "specific_note": "" }], "example": {"sentence": "Check-out now.", "translation": "現在退房。"}, "usage_note": "Check-out。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "drink", "pronunciation": ["/drɪŋk/"], "specific_note": "" }], "example": {"sentence": "Cold drink.", "translation": "冷飲。"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "menu", "pronunciation": ["/ˈmɛnju/"], "specific_note": "" }], "example": {"sentence": "Menu please.", "translation": "請給菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "lunch", "pronunciation": ["/lʌntʃ/"], "specific_note": "" }], "example": {"sentence": "Eat lunch.", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "dinner", "pronunciation": ["/ˈdɪnɚ/"], "specific_note": "" }], "example": {"sentence": "Eat dinner.", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "bill", "pronunciation": ["/bɪl/"], "specific_note": "" }], "example": {"sentence": "Check the bill.", "translation": "確認帳單。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "price", "pronunciation": ["/praɪs/"], "specific_note": "" }], "example": {"sentence": "Good price.", "translation": "好價格。"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "receipt", "pronunciation": ["/rɪˈsit/"], "specific_note": "" }], "example": {"sentence": "Receipt please.", "translation": "請給收據。"}, "usage_note": "統一發票。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "size", "pronunciation": ["/saɪz/"], "specific_note": "" }], "example": {"sentence": "Big size.", "translation": "大尺寸。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "entrance", "pronunciation": ["/ˈɛntrəns/"], "specific_note": "" }], "example": {"sentence": "Main entrance.", "translation": "正門入口。"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "exit", "pronunciation": ["/ˈɛgzɪt/"], "specific_note": "" }], "example": {"sentence": "Exit here.", "translation": "這裡出口。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "Taiwan", "pronunciation": ["/taɪˈwɑn/"], "specific_note": "" }], "example": {"sentence": "I love Taiwan.", "translation": "我愛台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "台灣人", "related_terms": [{ "term_target": "Taiwanese", "pronunciation": ["/ˌtaɪwɑˈniz/"], "specific_note": "" }], "example": {"sentence": "I am Taiwanese.", "translation": "我是台灣人。"}, "usage_note": "國籍。", "image_file": "taiwanese.png" },
        { "id": "n-66", "term_zh": "一切事物", "related_terms": [{ "term_target": "everything", "pronunciation": ["/ˈɛvriˌθɪŋ/"], "specific_note": "" }], "example": {"sentence": "Everything is good.", "translation": "一切都好。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-67", "term_zh": "錢包", "related_terms": [{ "term_target": "wallet", "pronunciation": ["/ˈwɑlɪt/"], "specific_note": "" }], "example": {"sentence": "Lost wallet.", "translation": "掉了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-68", "term_zh": "身分證", "related_terms": [{ "term_target": "ID", "pronunciation": ["/aɪ di/"], "specific_note": "" }], "example": {"sentence": "Show ID.", "translation": "出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-69", "term_zh": "護照", "related_terms": [{ "term_target": "passport", "pronunciation": ["/ˈpæsˌpɔrt/"], "specific_note": "" }], "example": {"sentence": "Show passport.", "translation": "出示護照。"}, "usage_note": "出國必備。", "image_file": "passport.png" },
        { "id": "n-70", "term_zh": "餐廳", "related_terms": [{ "term_target": "restaurant", "pronunciation": ["/ˈrɛstərənt/"], "specific_note": "" }], "example": {"sentence": "Nice restaurant.", "translation": "好餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-71", "term_zh": "飯店", "related_terms": [{ "term_target": "hotel", "pronunciation": ["/hoʊˈtɛl/"], "specific_note": "" }], "example": {"sentence": "Book a hotel.", "translation": "訂飯店。"}, "usage_note": "住宿。", "image_file": "hotel.png" },
        { "id": "n-72", "term_zh": "場所", "related_terms": [{ "term_target": "place", "pronunciation": ["/pleɪs/"], "specific_note": "" }], "example": {"sentence": "Good place.", "translation": "好地方。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-73", "term_zh": "用品店員", "related_terms": [{ "term_target": "clerk", "pronunciation": ["/klɝk/"], "specific_note": "" }], "example": {"sentence": "Ask the clerk.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-74", "term_zh": "超市", "related_terms": [{ "term_target": "supermarket", "pronunciation": ["/ˈsupɚˌmɑrkɪt/"], "specific_note": "" }], "example": {"sentence": "Go to supermarket.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-75", "term_zh": "月台", "related_terms": [{ "term_target": "platform", "pronunciation": ["/ˈplætˌfɔrm/"], "specific_note": "" }], "example": {"sentence": "Platform 1.", "translation": "第一月台。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "now", "pronunciation": ["/naʊ/"], "specific_note": "" }], "example": {"sentence": "Do it now.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "very", "pronunciation": ["/ˈvɛri/"], "specific_note": "" }], "example": {"sentence": "Very good.", "translation": "非常好。"}, "usage_note": "強調。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "really", "pronunciation": ["/ˈriəli/"], "specific_note": "" }], "example": {"sentence": "Really?", "translation": "真的嗎？"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "well", "pronunciation": ["/wɛl/"], "specific_note": "" }], "example": {"sentence": "Sleep well.", "translation": "睡個好覺。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "often", "pronunciation": ["/ˈɔfən/"], "specific_note": "" }], "example": {"sentence": "I often come here.", "translation": "我常來這。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "usually", "pronunciation": ["/ˈjuʒʊəli/"], "specific_note": "" }], "example": {"sentence": "Usually at 6.", "translation": "通常在六點。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "already", "pronunciation": ["/ɔlˈrɛdi/"], "specific_note": "" }], "example": {"sentence": "Already done.", "translation": "已經做好了。"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "only", "pronunciation": ["/ˈoʊnli/"], "specific_note": "" }], "example": {"sentence": "Only one.", "translation": "只有一個。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "again", "pronunciation": ["/əˈgɛn/"], "specific_note": "" }], "example": {"sentence": "Try again.", "translation": "再試一次。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "about", "pronunciation": ["/əˈbaʊt/"], "specific_note": "" }], "example": {"sentence": "About 10 minutes.", "translation": "大約10分鐘。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "a little", "pronunciation": ["/ə ˈlɪtḷ/"], "specific_note": "" }], "example": {"sentence": "A little spicy.", "translation": "一點點辣。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "also", "pronunciation": ["/ˈɔlsoʊ/"], "specific_note": "" }], "example": {"sentence": "I also like it.", "translation": "我也喜歡它。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "maybe", "pronunciation": ["/ˈmeɪbi/"], "specific_note": "" }], "example": {"sentence": "Maybe later.", "translation": "也許等下。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "later", "pronunciation": ["/ˈleɪtɚ/"], "specific_note": "" }], "example": {"sentence": "See you later.", "translation": "待會見。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "soon", "pronunciation": ["/sun/"], "specific_note": "" }], "example": {"sentence": "See you soon.", "translation": "待會見。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "together", "pronunciation": ["/təˈgɛðɚ/"], "specific_note": "" }], "example": {"sentence": "Go together.", "translation": "一起去。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "still", "pronunciation": ["/stɪl/"], "specific_note": "" }], "example": {"sentence": "Still here.", "translation": "還在這裡。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "normally", "pronunciation": ["/ˈnɔrmḷi/"], "specific_note": "" }], "example": {"sentence": "Normally I walk.", "translation": "一般我走路。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "immediately", "pronunciation": ["/ɪˈmidiətli/"], "specific_note": "" }], "example": {"sentence": "Go immediately.", "translation": "立刻去。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "neither", "pronunciation": ["/ˈniðɚ/"], "specific_note": "" }], "example": {"sentence": "Me neither.", "translation": "我也不。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "what", "pronunciation": ["/hwɑt/"], "specific_note": "" }], "example": {"sentence": "What is it?", "translation": "它是什麼？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "how", "pronunciation": ["/haʊ/"], "specific_note": "" }], "example": {"sentence": "How are you?", "translation": "你好嗎？"}, "usage_note": "問狀況。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "when", "pronunciation": ["/hwɛn/"], "specific_note": "" }], "example": {"sentence": "When to go?", "translation": "何時去？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "where", "pronunciation": ["/wɛr/"], "specific_note": "" }], "example": {"sentence": "Where are you?", "translation": "你在哪？"}, "usage_note": "問地點。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "who", "pronunciation": ["/hu/"], "specific_note": "" }], "example": {"sentence": "Who is he?", "translation": "他是誰？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "why", "pronunciation": ["/hwaɪ/"], "specific_note": "" }], "example": {"sentence": "Why?", "translation": "為什麼？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "which", "pronunciation": ["/hwɪtʃ/"], "specific_note": "" }], "example": {"sentence": "Which one?", "translation": "哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "how much", "pronunciation": ["/haʊ mʌtʃ/"], "specific_note": "" }], "example": {"sentence": "How much?", "translation": "多少錢？"}, "usage_note": "不可數。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "how long", "pronunciation": ["/haʊ lɔŋ/"], "specific_note": "" }], "example": {"sentence": "How long?", "translation": "要多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "now", "pronunciation": ["/naʊ/"], "specific_note": "" }], "example": {"sentence": "Do it now.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "today", "pronunciation": ["/təˈdeɪ/"], "specific_note": "" }], "example": {"sentence": "Not today.", "translation": "不是今天。"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "tomorrow", "pronunciation": ["/təˈmɔroʊ/"], "specific_note": "" }], "example": {"sentence": "See you tomorrow.", "translation": "明天見。"}, "usage_note": "隔天。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "yesterday", "pronunciation": ["/ˈjɛstɚdeɪ/"], "specific_note": "" }], "example": {"sentence": "Yesterday morning.", "translation": "昨天早上。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "here", "pronunciation": ["/hɪr/"], "specific_note": "" }], "example": {"sentence": "Come here.", "translation": "來這。"}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "there", "pronunciation": ["/ðɛr/"], "specific_note": "" }], "example": {"sentence": "Go there.", "translation": "去那。"}, "usage_note": "遠處。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "day", "pronunciation": ["/deɪ/"], "specific_note": "" }], "example": {"sentence": "One day.", "translation": "一天。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "year", "pronunciation": ["/jɪr/"], "specific_note": "" }], "example": {"sentence": "This year.", "translation": "今年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "month", "pronunciation": ["/mʌnθ/"], "specific_note": "" }], "example": {"sentence": "This month.", "translation": "這個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "week", "pronunciation": ["/wik/"], "specific_note": "" }], "example": {"sentence": "Next week.", "translation": "下週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "morning", "pronunciation": ["/ˈmɔrnɪŋ/"], "specific_note": "" }], "example": {"sentence": "In the morning.", "translation": "在早上。"}, "usage_note": "上午。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "afternoon", "pronunciation": ["/ˌæftɚˈnun/"], "specific_note": "" }], "example": {"sentence": "Good afternoon.", "translation": "午安。"}, "usage_note": "PM。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "evening", "pronunciation": ["/ˈivnɪŋ/"], "specific_note": "" }], "example": {"sentence": "Good evening.", "translation": "晚安(傍晚見面)。"}, "usage_note": "傍晚到睡前。", "image_file": "evening.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "noon", "pronunciation": ["/nun/"], "specific_note": "" }], "example": {"sentence": "At noon.", "translation": "在中午。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "in front of", "pronunciation": ["/ɪn frʌnt ʌv/"], "specific_note": "" }], "example": {"sentence": "In front of you.", "translation": "在你前面。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "behind", "pronunciation": ["/bɪˈhaɪnd/"], "specific_note": "" }], "example": {"sentence": "Behind the door.", "translation": "門後。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "left", "pronunciation": ["/lɛft/"], "specific_note": "" }], "example": {"sentence": "Turn left.", "translation": "左轉。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "right", "pronunciation": ["/raɪt/"], "specific_note": "" }], "example": {"sentence": "Turn right.", "translation": "右轉。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "beside / next to", "pronunciation": ["/bɪˈsaɪd/"], "specific_note": "" }], "example": {"sentence": "Sit beside me.", "translation": "坐我旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "across from", "pronunciation": ["/əˈkrɔs frʌm/"], "specific_note": "" }], "example": {"sentence": "Across from bank.", "translation": "銀行對面。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "spring", "pronunciation": ["/sprɪŋ/"], "specific_note": "" }], "example": {"sentence": "Spring is here.", "translation": "春天來了。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "summer", "pronunciation": ["/ˈsʌmɚ/"], "specific_note": "" }], "example": {"sentence": "Hot summer.", "translation": "炎熱的夏天。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "autumn / fall", "pronunciation": ["/ˈɔtəm/"], "specific_note": "" }], "example": {"sentence": "Cool autumn.", "translation": "涼爽的秋天。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "winter", "pronunciation": ["/ˈwɪntɚ/"], "specific_note": "" }], "example": {"sentence": "Cold winter.", "translation": "寒冷的冬天。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "zero", "pronunciation": ["/ˈzɪroʊ/"], "specific_note": "" }], "example": {"sentence": "Zero point.", "translation": "零分。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "one", "pronunciation": ["/wʌn/"], "specific_note": "" }], "example": {"sentence": "One apple.", "translation": "一顆蘋果。"}, "usage_note": "一。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "two", "pronunciation": ["/tu/"], "specific_note": "" }], "example": {"sentence": "Two days.", "translation": "兩天。"}, "usage_note": "二。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "three", "pronunciation": ["/θri/"], "specific_note": "" }], "example": {"sentence": "Three people.", "translation": "三人。"}, "usage_note": "咬舌音。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "four", "pronunciation": ["/fɔr/"], "specific_note": "" }], "example": {"sentence": "Four seasons.", "translation": "四季。"}, "usage_note": "四。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "five", "pronunciation": ["/faɪv/"], "specific_note": "" }], "example": {"sentence": "Five stars.", "translation": "五星。"}, "usage_note": "五。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "six", "pronunciation": ["/sɪks/"], "specific_note": "" }], "example": {"sentence": "Six o'clock.", "translation": "六點。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "seven", "pronunciation": ["/ˈsɛvən/"], "specific_note": "" }], "example": {"sentence": "Seven days.", "translation": "七天。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "eight", "pronunciation": ["/eɪt/"], "specific_note": "" }], "example": {"sentence": "Eight years old.", "translation": "八歲。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "nine", "pronunciation": ["/naɪn/"], "specific_note": "" }], "example": {"sentence": "Nine PM.", "translation": "晚上九點。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "ten", "pronunciation": ["/tɛn/"], "specific_note": "" }], "example": {"sentence": "Ten dollars.", "translation": "十元。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "eleven", "pronunciation": ["/ɪˈlɛvən/"], "specific_note": "" }], "example": {"sentence": "Eleven o'clock.", "translation": "11點。"}, "usage_note": "十一。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "twelve", "pronunciation": ["/twɛlv/"], "specific_note": "" }], "example": {"sentence": "Twelve months.", "translation": "12個月。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "fifteen", "pronunciation": ["/fɪfˈtin/"], "specific_note": "" }], "example": {"sentence": "Fifteen minutes.", "translation": "15分鐘。"}, "usage_note": "十五。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "twenty", "pronunciation": ["/ˈtwɛnti/"], "specific_note": "" }], "example": {"sentence": "Twenty minutes.", "translation": "20分鐘。"}, "usage_note": "二十。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "fifty", "pronunciation": ["/ˈfɪfti/"], "specific_note": "" }], "example": {"sentence": "Fifty percent.", "translation": "50%。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "one hundred", "pronunciation": ["/wʌn ˈhʌndrəd/"], "specific_note": "" }], "example": {"sentence": "100 points.", "translation": "一百分。"}, "usage_note": "百。", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "one thousand", "pronunciation": ["/wʌn ˈθaʊzənd/"], "specific_note": "" }], "example": {"sentence": "1000 years.", "translation": "一千年。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "ten thousand", "pronunciation": ["/tɛn ˈθaʊzənd/"], "specific_note": "" }], "example": {"sentence": "Ten thousand dollars.", "translation": "一萬元。"}, "usage_note": "一萬。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是/覺得～", "related_terms": [{ "term_target": "I am ～", "pronunciation": ["/aɪ æm/"], "specific_note": "" }], "example": {"sentence": "I am happy.", "translation": "我很快樂。"}, "usage_note": "狀態。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫～", "related_terms": [{ "term_target": "My name is ～", "pronunciation": ["/maɪ neɪm ɪz/"], "specific_note": "" }], "example": {"sentence": "My name is John.", "translation": "我的名字叫約翰。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做～", "related_terms": [{ "term_target": "I (verb)", "pronunciation": ["/aɪ/"], "specific_note": "" }], "example": {"sentence": "I work here.", "translation": "我在這裡工作。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做～", "related_terms": [{ "term_target": "I am ～ing", "pronunciation": ["/aɪ æm ...ɪŋ/"], "specific_note": "" }], "example": {"sentence": "I am eating.", "translation": "我正在吃。"}, "usage_note": "進行式。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠～", "related_terms": [{ "term_target": "I can ～", "pronunciation": ["/aɪ kæn/"], "specific_note": "" }], "example": {"sentence": "I can swim.", "translation": "我會游泳。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做～", "related_terms": [{ "term_target": "I like ～ing", "pronunciation": ["/aɪ laɪk ...ɪŋ/"], "specific_note": "" }], "example": {"sentence": "I like reading.", "translation": "我喜歡閱讀。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經～", "related_terms": [{ "term_target": "I was ～", "pronunciation": ["/aɪ wʌz/"], "specific_note": "狀態" }], "example": {"sentence": "I was a student.", "translation": "我曾經是學生。"}, "usage_note": "過去狀態。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過～", "related_terms": [{ "term_target": "I (verb)ed", "pronunciation": ["/aɪ ...d/"], "specific_note": "動作" }], "example": {"sentence": "I walked home.", "translation": "我走路回家。"}, "usage_note": "過去動作。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過～", "related_terms": [{ "term_target": "I have (pp)", "pronunciation": ["/aɪ hæv/"], "specific_note": "" }], "example": {"sentence": "I have finished.", "translation": "我已經完成了。"}, "usage_note": "完成式。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過～", "related_terms": [{ "term_target": "I have been to ～", "pronunciation": ["/aɪ hæv bɪn tu/"], "specific_note": "" }], "example": {"sentence": "I have been to Japan.", "translation": "我曾經去過日本。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算～", "related_terms": [{ "term_target": "I will ～", "pronunciation": ["/aɪ wɪl/"], "specific_note": "" }], "example": {"sentence": "I will go.", "translation": "我將要去。"}, "usage_note": "未來式。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是～嗎？", "related_terms": [{ "term_target": "Are you ～ ?", "pronunciation": ["/ɑr ju/"], "specific_note": "" }], "example": {"sentence": "Are you ready?", "translation": "準備好了嗎？"}, "usage_note": "問狀態。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做～嗎？", "related_terms": [{ "term_target": "Do you ～ ?", "pronunciation": ["/du ju/"], "specific_note": "" }], "example": {"sentence": "Do you eat spicy food?", "translation": "你吃辣嗎？"}, "usage_note": "問習慣或意願。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經～嗎？", "related_terms": [{ "term_target": "Have you ever ～ ?", "pronunciation": ["/hæv ju ˈɛvɚ/"], "specific_note": "" }], "example": {"sentence": "Have you ever seen snow?", "translation": "你曾經看過雪嗎？"}, "usage_note": "問經驗。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做（某事）？", "related_terms": [{ "term_target": "When do you ～ ?", "pronunciation": ["/hwɛn du ju/"], "specific_note": "" }], "example": {"sentence": "When do you sleep?", "translation": "你何時睡覺？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去（某地）？", "related_terms": [{ "term_target": "When do you go to ～ ?", "pronunciation": ["/hwɛn du ju goʊ tu/"], "specific_note": "" }], "example": {"sentence": "When do you go to school?", "translation": "你何時去學校？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做（某事）？", "related_terms": [{ "term_target": "Where do you ～ ?", "pronunciation": ["/wɛr du ju/"], "specific_note": "" }], "example": {"sentence": "Where do you live?", "translation": "你住哪裡？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做（某事）？", "related_terms": [{ "term_target": "How do you ～ ?", "pronunciation": ["/haʊ du ju/"], "specific_note": "" }], "example": {"sentence": "How do you cook?", "translation": "你怎麼煮？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去（某地）？", "related_terms": [{ "term_target": "How do you go to ～ ?", "pronunciation": ["/haʊ du ju goʊ tu/"], "specific_note": "" }], "example": {"sentence": "How do you go to school?", "translation": "你怎麼去學校？"}, "usage_note": "問交通方式。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是～", "related_terms": [{ "term_target": "I am not ～", "pronunciation": ["/aɪ æm nɑt/"], "specific_note": "" }], "example": {"sentence": "I am not tired.", "translation": "我不累。"}, "usage_note": "否定狀態。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做～", "related_terms": [{ "term_target": "I don't ～", "pronunciation": ["/aɪ doʊnt/"], "specific_note": "" }], "example": {"sentence": "I don't smoke.", "translation": "我不抽菸。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能～", "related_terms": [{ "term_target": "I can't ～", "pronunciation": ["/aɪ kænt/"], "specific_note": "" }], "example": {"sentence": "I can't swim.", "translation": "我不會游泳。"}, "usage_note": "否定能力。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾～", "related_terms": [{ "term_target": "I have never ～", "pronunciation": ["/aɪ hæv ˈnɛvɚ/"], "specific_note": "" }], "example": {"sentence": "I have never eaten this.", "translation": "我沒吃過這個。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必～", "related_terms": [{ "term_target": "I don't have to ～", "pronunciation": ["/aɪ doʊnt hæv tu/"], "specific_note": "" }], "example": {"sentence": "I don't have to go.", "translation": "我不必去。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果～的話，就～", "related_terms": [{ "term_target": "If ..., ...", "pronunciation": ["/ɪf/"], "specific_note": "" }], "example": {"sentence": "If you like, take it.", "translation": "如果你喜歡，拿去吧。"}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當～時，就～", "related_terms": [{ "term_target": "When ..., ...", "pronunciation": ["/hwɛn/"], "specific_note": "" }], "example": {"sentence": "When I eat, I am happy.", "translation": "當我吃東西時，我很開心。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你～", "related_terms": [{ "term_target": "Can you ～ ?", "pronunciation": ["/kæn ju/"], "specific_note": "" }], "example": {"sentence": "Can you help me?", "translation": "請你幫我好嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做～吧！", "related_terms": [{ "term_target": "Let's ～", "pronunciation": ["/lɛts/"], "specific_note": "" }], "example": {"sentence": "Let's go.", "translation": "我們走吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為～", "related_terms": [{ "term_target": "I think ～", "pronunciation": ["/aɪ θɪŋk/"], "specific_note": "" }], "example": {"sentence": "I think it is good.", "translation": "我認為這很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做～", "related_terms": [{ "term_target": "I want to ～", "pronunciation": ["/aɪ wɑnt tu/"], "specific_note": "" }], "example": {"sentence": "I want to go.", "translation": "我想走。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做～", "related_terms": [{ "term_target": "I have to ～", "pronunciation": ["/aɪ hæv tu/"], "specific_note": "" }], "example": {"sentence": "I have to work.", "translation": "我必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "It is ... to ～", "pronunciation": ["/ɪt ɪz ... tu/"], "specific_note": "" }], "example": {"sentence": "It is good to eat.", "translation": "吃東西是很好的。"}, "usage_note": "描述動作。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我…嗎？", "related_terms": [{ "term_target": "Can you help me ... ?", "pronunciation": ["/kæn ju hɛlp mi/"], "specific_note": "" }], "example": {"sentence": "Can you help me clean?", "translation": "你可以幫我打掃嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以…嗎？", "related_terms": [{ "term_target": "Can I ... ?", "pronunciation": ["/kæn aɪ/"], "specific_note": "" }], "example": {"sentence": "Can I go?", "translation": "我可以走嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡…", "related_terms": [{ "term_target": "I don't like ...", "pronunciation": ["/aɪ doʊnt laɪk/"], "specific_note": "" }], "example": {"sentence": "I don't like it.", "translation": "我不喜歡它。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡…", "related_terms": [{ "term_target": "I prefer ...", "pronunciation": ["/aɪ prɪˈfɝ/"], "specific_note": "" }], "example": {"sentence": "I prefer tea.", "translation": "我比較喜歡茶。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更…", "related_terms": [{ "term_target": "A is more ... than B", "pronunciation": ["/... mɔr ... ðæn .../"], "specific_note": "" }], "example": {"sentence": "This is more expensive than that.", "translation": "這比那個貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有…（存在）", "related_terms": [{ "term_target": "There is / There are", "pronunciation": ["/ðɛr ɪz / ðɛr ɑr/"], "specific_note": "" }], "example": {"sentence": "There is a dog.", "translation": "那裡有一隻狗。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}