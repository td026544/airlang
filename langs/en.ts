import { AppData } from "../types";

export const englishData: AppData = {
  meta: {
    source_language: "zh-TW",
    target_language: "en-US",
    version: "3.2",
    description:
      "台灣人快速語言學習 - 英文完整版 (包含所有原始列表單字與完整句型 - KK音標版)",
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
              term_target: "Yes",
              pronunciation: ["/jɛs/"],
              specific_note: "肯定",
            },
          ],
          examples: [
            {
              sentence: "Yes, I do.",
              translation: "是的，我願意/我有。",
            },
            {
              sentence: "Yes, please.",
              translation: "是的，麻煩你了。",
            },
            {
              sentence: "Yes, you are right.",
              translation: "是的，你是對的。",
            },
          ],
          usage_note: "回答問題或表示同意。",
          image_file: "yes.png",
        },
        {
          id: "greet-002",
          term_zh: "不是",
          related_terms: [
            {
              term_target: "No",
              pronunciation: ["/noʊ/"],
              specific_note: "否定",
            },
          ],
          examples: [
            {
              sentence: "No, thank you.",
              translation: "不了，謝謝。",
            },
            {
              sentence: "No, I don't think so.",
              translation: "不，我不這麼認為。",
            },
            {
              sentence: "No problem.",
              translation: "沒問題 / 不客氣。",
            },
          ],
          usage_note: "拒絕或否認時使用。",
          image_file: "no.png",
        },
        {
          id: "greet-003",
          term_zh: "你好",
          related_terms: [
            {
              term_target: "Hello",
              pronunciation: ["/həˈloʊ/"],
              specific_note: "通用",
            },
          ],
          examples: [
            {
              sentence: "Hello, how are you?",
              translation: "你好，你好嗎？",
            },
            {
              sentence: "Hello! Nice to see you.",
              translation: "哈囉！很高興見到你。",
            },
            {
              sentence: "Hello, may I speak to Tom?",
              translation: "喂(電話中)，請問我可以跟 Tom 說話嗎？",
            },
          ],
          usage_note: "最通用的問候。",
          image_file: "hello.png",
        },
        {
          id: "greet-004",
          term_zh: "謝謝你",
          related_terms: [
            {
              term_target: "Thank you",
              pronunciation: ["/ˈθæŋk ju/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Thank you very much.",
              translation: "非常謝謝你。",
            },
            {
              sentence: "Thank you for your help.",
              translation: "謝謝你的幫忙。",
            },
            {
              sentence: "No, thank you.",
              translation: "不用了，謝謝。",
            },
          ],
          usage_note: "咬舌音 th 很重要。",
          image_file: "thank_you.png",
        },
        {
          id: "greet-005",
          term_zh: "對不起",
          related_terms: [
            {
              term_target: "I'm sorry",
              pronunciation: ["/aɪm ˈsɑri/"],
              specific_note: "道歉",
            },
          ],
          examples: [
            {
              sentence: "I'm sorry for the mistake.",
              translation: "抱歉我弄錯了。",
            },
            {
              sentence: "I'm sorry I'm late.",
              translation: "對不起，我遲到了。",
            },
            {
              sentence: "I'm so sorry to hear that.",
              translation: "聽到這個消息我很遺憾。",
            },
          ],
          usage_note: "做錯事時使用。",
          image_file: "sorry.png",
        },
        {
          id: "greet-006",
          term_zh: "請問...",
          related_terms: [
            {
              term_target: "Excuse me...",
              pronunciation: ["/ɪkˈskjus mi/"],
              specific_note: "發問前",
            },
          ],
          examples: [
            {
              sentence: "Excuse me, where is the station?",
              translation: "請問車站哪裡？",
            },
            {
              sentence: "Excuse me, is this seat taken?",
              translation: "請問這個位子有人坐嗎？",
            },
            {
              sentence: "Excuse me, do you have the time?",
              translation: "請問現在幾點了？",
            },
          ],
          usage_note: "引起注意時使用。",
          image_file: "excuse_me.png",
        },
        {
          id: "greet-007",
          term_zh: "我不懂",
          related_terms: [
            {
              term_target: "I don't understand",
              pronunciation: ["/aɪ doʊnt ˌʌndɚˈstænd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Sorry, I don't understand.",
              translation: "抱歉，我不懂。",
            },
            {
              sentence: "I don't understand English.",
              translation: "我不懂英文。",
            },
            {
              sentence: "I don't understand what you mean.",
              translation: "我不懂你是什麼意思。",
            },
          ],
          usage_note: "聽不懂時直接說。",
          image_file: "dont_understand.png",
        },
        {
          id: "greet-008",
          term_zh: "廁所在哪裡？",
          related_terms: [
            {
              term_target: "Where is the bathroom?",
              pronunciation: ["/wɛr ɪz ðə ˈbæθˌrum/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Excuse me, where is the bathroom?",
              translation: "請問廁所在哪？",
            },
            {
              sentence: "Is there a bathroom nearby?",
              translation: "這附近有廁所嗎？",
            },
            {
              sentence: "Can I use your bathroom?",
              translation: "我可以借用你的廁所嗎？",
            },
          ],
          usage_note: "出國最重要的一句話。",
          image_file: "where_bathroom.png",
        },
        {
          id: "greet-009",
          term_zh: "借過",
          related_terms: [
            {
              term_target: "Excuse me",
              pronunciation: ["/ɪkˈskjus mi/"],
              specific_note: "通過時",
            },
          ],
          examples: [
            {
              sentence: "Excuse me, coming through.",
              translation: "借過，我要過去。",
            },
            {
              sentence: "Excuse me, please let me pass.",
              translation: "不好意思，請讓我過一下。",
            },
          ],
          usage_note: "請求讓路。",
          image_file: "excuse_me_pass.png",
        },
        {
          id: "greet-010",
          term_zh: "多少錢？",
          related_terms: [
            {
              term_target: "How much is it?",
              pronunciation: ["/haʊ mʌtʃ ɪz ɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "How much is it?",
              translation: "這多少錢？",
            },
            {
              sentence: "How much does this cost?",
              translation: "這個要多少錢？",
            },
            {
              sentence: "How much for two?",
              translation: "兩個多少錢？",
            },
          ],
          usage_note: "購物必備。",
          image_file: "how_much.png",
        },
        {
          id: "greet-011",
          term_zh: "我想要這個",
          related_terms: [
            {
              term_target: "I want this",
              pronunciation: ["/aɪ wɑnt ðɪs/"],
              specific_note: "直接",
            },
          ],
          examples: [
            {
              sentence: "I want this one.",
              translation: "我要這個。",
            },
            {
              sentence: "I want this, please.",
              translation: "麻煩我要這個。",
            },
            {
              sentence: "I'll take this one.",
              translation: "我買這個了。",
            },
          ],
          usage_note: "直接表達購買意願。",
          image_file: "i_want_this.png",
        },
        {
          id: "greet-012",
          term_zh: "請給我...",
          related_terms: [
            {
              term_target: "Please give me...",
              pronunciation: ["/pliz gɪv mi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Please give me water.",
              translation: "請給我水。",
            },
            {
              sentence: "Please give me a menu.",
              translation: "請給我菜單。",
            },
            {
              sentence: "Please give me a discount.",
              translation: "請給我打個折。",
            },
          ],
          usage_note: "索取物品。",
          image_file: "please_give_me.png",
        },
        {
          id: "greet-013",
          term_zh: "這是什麼？",
          related_terms: [
            {
              term_target: "What is this?",
              pronunciation: ["/hwɑt ɪz ðɪs/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "What is this?",
              translation: "這是什麼？",
            },
            {
              sentence: "What is this called in English?",
              translation: "這個用英文怎麼說？",
            },
            {
              sentence: "Do you know what this is?",
              translation: "你知道這是什麼嗎？",
            },
          ],
          usage_note: "指著東西問。",
          image_file: "what_is_this.png",
        },
        {
          id: "greet-014",
          term_zh: "請幫我",
          related_terms: [
            {
              term_target: "Please help me",
              pronunciation: ["/pliz hɛlp mi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Please help me.",
              translation: "請幫我。",
            },
            {
              sentence: "Can you help me, please?",
              translation: "拜託可以幫幫我嗎？",
            },
            {
              sentence: "Help me move this table.",
              translation: "幫我搬這張桌子。",
            },
          ],
          usage_note: "尋求協助。",
          image_file: "help_me.png",
        },
        {
          id: "greet-015",
          term_zh: "你可以再說一次嗎？",
          related_terms: [
            {
              term_target: "Can you say that again?",
              pronunciation: ["/kæn ju seɪ ðæt əˈgɛn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Sorry, can you say that again?",
              translation: "抱歉，能再說一次嗎？",
            },
            {
              sentence: "Can you repeat that?",
              translation: "可以請你重複一遍嗎？",
            },
            {
              sentence: "Say that again, please.",
              translation: "請再說一次。",
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
              term_target: "Can you speak slowly?",
              pronunciation: ["/kæn ju spik ˈsloʊli/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Can you speak slowly?",
              translation: "可以講慢一點嗎？",
            },
            {
              sentence: "Please speak more slowly.",
              translation: "請說慢一點。",
            },
            {
              sentence: "Could you slow down a bit?",
              translation: "可以稍微慢一點嗎？",
            },
          ],
          usage_note: "外國人講太快時使用。",
          image_file: "speak_slowly.png",
        },
        {
          id: "greet-017",
          term_zh: "原來如此",
          related_terms: [
            {
              term_target: "I see",
              pronunciation: ["/aɪ si/"],
              specific_note: "理解",
            },
          ],
          examples: [
            {
              sentence: "Oh, I see. I understand now.",
              translation: "噢，原來如此。我現在懂了。",
            },
            {
              sentence: "I see what you mean.",
              translation: "我懂你的意思了。",
            },
            {
              sentence: "Ah, I see!",
              translation: "啊，原來是這樣！",
            },
          ],
          usage_note: "表示明白了某件事。",
          image_file: "i_see.png",
        },
        {
          id: "greet-018",
          term_zh: "早安",
          related_terms: [
            {
              term_target: "Good morning",
              pronunciation: ["/gʊd ˈmɔrnɪŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Good morning.",
              translation: "早安。",
            },
            {
              sentence: "Good morning, everyone.",
              translation: "大家早安。",
            },
            {
              sentence: "Morning! How did you sleep?",
              translation: "早！你睡得好嗎？",
            },
          ],
          usage_note: "中午12點前使用。",
          image_file: "good_morning.png",
        },
        {
          id: "greet-019",
          term_zh: "晚上好 (晚安)",
          related_terms: [
            {
              term_target: "Good evening",
              pronunciation: ["/gʊd ˈivnɪŋ/"],
              specific_note: "晚上見面",
            },
          ],
          examples: [
            {
              sentence: "Good evening, everyone.",
              translation: "大家晚安 (晚上好)。",
            },
            {
              sentence: "Good evening, Mr. Smith.",
              translation: "史密斯先生晚安。",
            },
            {
              sentence: "Good evening! Table for two?",
              translation: "晚安！兩位用餐嗎？",
            },
          ],
          usage_note: "這是見面問候。睡前道別要說 Good night。",
          image_file: "good_evening.png",
        },
        {
          id: "greet-020",
          term_zh: "再見",
          related_terms: [
            {
              term_target: "Good bye",
              pronunciation: ["/gʊd baɪ/"],
              specific_note: "正式",
            },
          ],
          examples: [
            {
              sentence: "Good bye, see you.",
              translation: "再見，待會見。",
            },
            {
              sentence: "Good bye for now.",
              translation: "暫時先這樣，再見。",
            },
            {
              sentence: "Ok, bye-bye!",
              translation: "好喔，掰掰！",
            },
          ],
          usage_note: "口語常說 Bye-bye。",
          image_file: "goodbye.png",
        },
        {
          id: "greet-021",
          term_zh: "你好嗎",
          related_terms: [
            {
              term_target: "How are you?",
              pronunciation: ["/haʊ ɑr ju/"],
              specific_note: "問候",
            },
          ],
          examples: [
            {
              sentence: "How are you doing?",
              translation: "你最近好嗎？",
            },
            {
              sentence: "Hi, how are you today?",
              translation: "嗨，你今天好嗎？",
            },
            {
              sentence: "How are you feeling?",
              translation: "你感覺如何？(通常問健康)",
            },
          ],
          usage_note: "見面時的日常寒暄。",
          image_file: "how_are_you.png",
        },
        {
          id: "greet-022",
          term_zh: "真的嗎",
          related_terms: [
            {
              term_target: "Really?",
              pronunciation: ["/ˈrɪli/"],
              specific_note: "疑問",
            },
          ],
          examples: [
            {
              sentence: "Really? Are you sure?",
              translation: "真的嗎？你確定？",
            },
            {
              sentence: "I got the job! Really?",
              translation: "我得到工作了！真的嗎？",
            },
            {
              sentence: "Oh really? That is interesting.",
              translation: "喔真的嗎？真有趣。",
            },
          ],
          usage_note: "表示驚訝或懷疑。",
          image_file: "really_q.png",
        },
        {
          id: "greet-023",
          term_zh: "太棒了",
          related_terms: [
            {
              term_target: "Awesome!",
              pronunciation: ["/ˈɔsəm/"],
              specific_note: "讚嘆",
            },
          ],
          examples: [
            {
              sentence: "That is awesome!",
              translation: "那真是太棒了！",
            },
            {
              sentence: "You look awesome.",
              translation: "你看起來棒極了。",
            },
            {
              sentence: "The movie was awesome.",
              translation: "那部電影太讚了。",
            },
          ],
          usage_note: "形容極好、令人敬畏的事物。",
          image_file: "awesome.png",
        },
        {
          id: "greet-024",
          term_zh: "很高興認識你",
          related_terms: [
            {
              term_target: "Nice to meet you",
              pronunciation: ["/naɪs tu mit ju/"],
              specific_note: "初次見面",
            },
          ],
          examples: [
            {
              sentence: "Nice to meet you, too.",
              translation: "我也很高興認識你。",
            },
            {
              sentence: "Hello, I'm John. Nice to meet you.",
              translation: "你好我是約翰，很高興認識你。",
            },
            {
              sentence: "It's nice to meet you.",
              translation: "很高興認識你。",
            },
          ],
          usage_note: "僅限第一次見面時使用。",
          image_file: "nice_to_meet_you.png",
        },
        {
          id: "greet-025",
          term_zh: "真可惜",
          related_terms: [
            {
              term_target: "That's too bad",
              pronunciation: ["/ðæts tu bæd/"],
              specific_note: "遺憾",
            },
          ],
          examples: [
            {
              sentence: "That's too bad, maybe next time.",
              translation: "真可惜，也許下次吧。",
            },
            {
              sentence: "It rained all day? That's too bad.",
              translation: "下了一整天雨？真可惜。",
            },
            {
              sentence: "You can't come? That's too bad.",
              translation: "你不能來？那太可惜了。",
            },
          ],
          usage_note: "對壞消息表示同情或遺憾。",
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
          term_zh: "那個 / 它",
          related_terms: [
            {
              term_target: "that",
              pronunciation: ["/ðæt/"],
              specific_note: "指示詞",
            },
            {
              term_target: "it",
              pronunciation: ["/ɪt/"],
              specific_note: "代名詞",
            },
          ],
          examples: [
            {
              sentence: "What is that over there?",
              translation: "那邊那個是什麼？",
            },
            {
              sentence: "That is a great idea.",
              translation: "那真是個好主意。",
            },
            {
              sentence: "It is raining outside.",
              translation: "外面正在下雨。",
            },
          ],
          usage_note: "It 指無生命或動物，That 指遠處的事物。",
          image_file: "that.png",
        },
        {
          id: "pro-02",
          term_zh: "我",
          related_terms: [
            { term_target: "I", pronunciation: ["/aɪ/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "I am a student.",
              translation: "我是學生。",
            },
            {
              sentence: "I like to read books.",
              translation: "我喜歡看書。",
            },
            {
              sentence: "I don't know the answer.",
              translation: "我不知道答案。",
            },
          ],
          usage_note: "永遠大寫。",
          image_file: "i.png",
        },
        {
          id: "pro-03",
          term_zh: "你",
          related_terms: [
            { term_target: "you", pronunciation: ["/ju/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "You are very kind.",
              translation: "你人真好。",
            },
            {
              sentence: "Where are you going?",
              translation: "你要去哪裡？",
            },
            {
              sentence: "You look beautiful today.",
              translation: "你今天看起來很美。",
            },
          ],
          usage_note: "單複數同形（你、你們都用 You）。",
          image_file: "you.png",
        },
        {
          id: "pro-04",
          term_zh: "他",
          related_terms: [
            { term_target: "he", pronunciation: ["/hi/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "He is my father.",
              translation: "他是我父親。",
            },
            {
              sentence: "He plays basketball well.",
              translation: "他籃球打得很好。",
            },
            {
              sentence: "Is he coming with us?",
              translation: "他要跟我們一起來嗎？",
            },
          ],
          usage_note: "男性。",
          image_file: "he.png",
        },
        {
          id: "pro-05",
          term_zh: "他的",
          related_terms: [
            { term_target: "his", pronunciation: ["/hɪz/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "This is his car.",
              translation: "這是他的車。",
            },
            {
              sentence: "What is his name?",
              translation: "他叫什麼名字？",
            },
            {
              sentence: "His family lives in Taipei.",
              translation: "他的家人住在台北。",
            },
          ],
          usage_note: "所有格。",
          image_file: "his.png",
        },
        {
          id: "pro-06",
          term_zh: "我們",
          related_terms: [
            { term_target: "we", pronunciation: ["/wi/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "We are family.",
              translation: "我們是家人。",
            },
            {
              sentence: "We need to leave now.",
              translation: "我們現在得走了。",
            },
            {
              sentence: "Can we go to the park?",
              translation: "我們可以去公園嗎？",
            },
          ],
          usage_note: "第一人稱複數。",
          image_file: "we.png",
        },
        {
          id: "pro-07",
          term_zh: "她",
          related_terms: [
            { term_target: "she", pronunciation: ["/ʃi/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "She is my mother.",
              translation: "她是我媽媽。",
            },
            {
              sentence: "She loves listening to music.",
              translation: "她喜歡聽音樂。",
            },
            {
              sentence: "She is a teacher.",
              translation: "她是一位老師。",
            },
          ],
          usage_note: "女性。",
          image_file: "she.png",
        },
        {
          id: "pro-08",
          term_zh: "他們",
          related_terms: [
            {
              term_target: "they",
              pronunciation: ["/ðeɪ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "They are studying.",
              translation: "他們正在讀書。",
            },
            {
              sentence: "They are my friends.",
              translation: "他們是我的朋友。",
            },
            {
              sentence: "Where are they?",
              translation: "他們在哪裡？",
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
              term_target: "this",
              pronunciation: ["/ðɪs/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "This is my favorite song.",
              translation: "這是我最喜歡的歌。",
            },
            {
              sentence: "I want to buy this.",
              translation: "我想要買這個。",
            },
            {
              sentence: "This is delicious.",
              translation: "這個很好吃。",
            },
          ],
          usage_note: "近處單數。",
          image_file: "this.png",
        },
        {
          id: "pro-10",
          term_zh: "那個（指示詞）",
          related_terms: [
            {
              term_target: "that",
              pronunciation: ["/ðæt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "That is not mine.",
              translation: "那不是我的。",
            },
            {
              sentence: "Look at that bird.",
              translation: "看那隻鳥。",
            },
            {
              sentence: "That sounds great.",
              translation: "那聽起來很棒。",
            },
          ],
          usage_note: "遠處單數。",
          image_file: "that_obj.png",
        },
        {
          id: "pro-11",
          term_zh: "她的",
          related_terms: [
            { term_target: "her", pronunciation: ["/hɝ/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Her hair is long.",
              translation: "她的頭髮很長。",
            },
            {
              sentence: "I like her dress.",
              translation: "我喜歡她的洋裝。",
            },
            {
              sentence: "This is her book.",
              translation: "這是她的書。",
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
              term_target: "your",
              pronunciation: ["/jʊr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "What is your name?",
              translation: "你叫什麼名字？",
            },
            {
              sentence: "Is this your phone?",
              translation: "這是你的手機嗎？",
            },
            {
              sentence: "Don't forget your keys.",
              translation: "別忘了你的鑰匙。",
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
              term_target: "their",
              pronunciation: ["/ðɛr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Their house is big.",
              translation: "他們的房子很大。",
            },
            {
              sentence: "I know their parents.",
              translation: "我認識他們的父母。",
            },
            {
              sentence: "Their dog is very cute.",
              translation: "他們的狗很可愛。",
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
              term_target: "our",
              pronunciation: ["/ˈaʊr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "This is our school.",
              translation: "這是我們的學校。",
            },
            {
              sentence: "Welcome to our home.",
              translation: "歡迎來我們家。",
            },
            {
              sentence: "Our team won the game.",
              translation: "我們這隊贏了比賽。",
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
              term_target: "these",
              pronunciation: ["/ðiz/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "These apples are sweet.",
              translation: "這些蘋果很甜。",
            },
            {
              sentence: "Are these yours?",
              translation: "這些是你的嗎？",
            },
            {
              sentence: "I like these shoes.",
              translation: "我喜歡這雙鞋。",
            },
          ],
          usage_note: "近處複數。",
          image_file: "these.png",
        },
        {
          id: "pro-16",
          term_zh: "那些",
          related_terms: [
            {
              term_target: "those",
              pronunciation: ["/ðoʊz/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Those flowers are beautiful.",
              translation: "那些花很漂亮。",
            },
            {
              sentence: "Who are those people?",
              translation: "那些人是誰？",
            },
            {
              sentence: "I want those cookies.",
              translation: "我想要那些餅乾。",
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
            { term_target: "am", pronunciation: ["/æm/"], specific_note: "I" },
            {
              term_target: "are",
              pronunciation: ["/ɑr/"],
              specific_note: "You/We/They",
            },
            {
              term_target: "is",
              pronunciation: ["/ɪz/"],
              specific_note: "He/She/It",
            },
          ],
          examples: [
            {
              sentence: "I am happy.",
              translation: "我很快樂。",
            },
            {
              sentence: "He is a teacher.",
              translation: "他是一位老師。",
            },
            {
              sentence: "They are my friends.",
              translation: "他們是我的朋友。",
            },
          ],
          usage_note: "Be動詞。",
          image_file: "be.png",
        },
        {
          id: "v-02",
          term_zh: "有（擁有）",
          related_terms: [
            {
              term_target: "have",
              pronunciation: ["/hæv/"],
              specific_note: "",
            },
            {
              term_target: "has",
              pronunciation: ["/hæz/"],
              specific_note: "第三人稱單數",
            },
          ],
          examples: [
            {
              sentence: "I have a car.",
              translation: "我有一台車。",
            },
            {
              sentence: "She has a cute cat.",
              translation: "她有一隻可愛的貓。",
            },
            {
              sentence: "Do you have any questions?",
              translation: "你有任何問題嗎？",
            },
          ],
          usage_note: "擁有。",
          image_file: "have.png",
        },
        {
          id: "v-03",
          term_zh: "去",
          related_terms: [
            { term_target: "go", pronunciation: ["/goʊ/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Go home.",
              translation: "回家。",
            },
            {
              sentence: "I go to school by bus.",
              translation: "我搭公車去上學。",
            },
            {
              sentence: "Let's go!",
              translation: "我們走吧！",
            },
          ],
          usage_note: "離開去某處。",
          image_file: "go.png",
        },
        {
          id: "v-04",
          term_zh: "得到／拿",
          related_terms: [
            { term_target: "get", pronunciation: ["/gɛt/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Get a gift.",
              translation: "收到禮物。",
            },
            {
              sentence: "I need to get some sleep.",
              translation: "我需要睡一會兒。",
            },
            {
              sentence: "Did you get my email?",
              translation: "你有收到我的信嗎？",
            },
          ],
          usage_note: "獲得/拿取。",
          image_file: "get.png",
        },
        {
          id: "v-05",
          term_zh: "做",
          related_terms: [
            { term_target: "do", pronunciation: ["/du/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Do homework.",
              translation: "做功課。",
            },
            {
              sentence: "Just do it.",
              translation: "做就對了。",
            },
            {
              sentence: "What do you do?",
              translation: "你是做什麼工作的？",
            },
          ],
          usage_note: "執行動作。",
          image_file: "do.png",
        },
        {
          id: "v-06",
          term_zh: "說（講）",
          related_terms: [
            { term_target: "say", pronunciation: ["/seɪ/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Say hello.",
              translation: "說你好。",
            },
            {
              sentence: "What did you say?",
              translation: "你剛剛說什麼？",
            },
            {
              sentence: "Don't say that.",
              translation: "別那樣說。",
            },
          ],
          usage_note: "說出內容。",
          image_file: "say.png",
        },
        {
          id: "v-07",
          term_zh: "知道",
          related_terms: [
            {
              term_target: "know",
              pronunciation: ["/noʊ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I know you.",
              translation: "我認識你。",
            },
            {
              sentence: "I don't know the answer.",
              translation: "我不知道答案。",
            },
            {
              sentence: "Do you know him?",
              translation: "你認識他嗎？",
            },
          ],
          usage_note: "K不發音。",
          image_file: "know.png",
        },
        {
          id: "v-08",
          term_zh: "想／思考",
          related_terms: [
            {
              term_target: "think",
              pronunciation: ["/θɪŋk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I think so.",
              translation: "我也這麼覺得。",
            },
            {
              sentence: "Let me think about it.",
              translation: "讓我想一想。",
            },
            {
              sentence: "I think you are right.",
              translation: "我覺得你是對的。",
            },
          ],
          usage_note: "思考/認為。",
          image_file: "think.png",
        },
        {
          id: "v-09",
          term_zh: "看見",
          related_terms: [
            { term_target: "see", pronunciation: ["/si/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "I see you.",
              translation: "我看到你了。",
            },
            {
              sentence: "Can you see the bird?",
              translation: "你看得到那隻鳥嗎？",
            },
            {
              sentence: "I see what you mean.",
              translation: "我懂你的意思了。",
            },
          ],
          usage_note: "自然看見。",
          image_file: "see.png",
        },
        {
          id: "v-10",
          term_zh: "做出（製造）",
          related_terms: [
            {
              term_target: "make",
              pronunciation: ["/meɪk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Make coffee.",
              translation: "泡咖啡。",
            },
            {
              sentence: "Don't make noise.",
              translation: "不要製造噪音。",
            },
            {
              sentence: "I made a mistake.",
              translation: "我犯了一個錯。",
            },
          ],
          usage_note: "產生新東西。",
          image_file: "make.png",
        },
        {
          id: "v-11",
          term_zh: "來",
          related_terms: [
            {
              term_target: "come",
              pronunciation: ["/kʌm/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Come here.",
              translation: "來這裡。",
            },
            {
              sentence: "Please come in.",
              translation: "請進。",
            },
            {
              sentence: "When will you come?",
              translation: "你什麼時候會來？",
            },
          ],
          usage_note: "過來。",
          image_file: "come.png",
        },
        {
          id: "v-12",
          term_zh: "需要",
          related_terms: [
            {
              term_target: "need",
              pronunciation: ["/nid/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I need water.",
              translation: "我需要水。",
            },
            {
              sentence: "I need your help.",
              translation: "我需要你的幫忙。",
            },
            {
              sentence: "We need to talk.",
              translation: "我們需要談談。",
            },
          ],
          usage_note: "必要。",
          image_file: "need.png",
        },
        {
          id: "v-13",
          term_zh: "使用",
          related_terms: [
            { term_target: "use", pronunciation: ["/juz/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Use a pen.",
              translation: "用筆。",
            },
            {
              sentence: "Can I use your phone?",
              translation: "我可以用你的手機嗎？",
            },
            {
              sentence: "How do I use this?",
              translation: "這個要怎麼用？",
            },
          ],
          usage_note: "利用。",
          image_file: "use.png",
        },
        {
          id: "v-14",
          term_zh: "找到",
          related_terms: [
            {
              term_target: "find",
              pronunciation: ["/faɪnd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Find a job.",
              translation: "找工作。",
            },
            {
              sentence: "I can't find my keys.",
              translation: "我找不到鑰匙。",
            },
            {
              sentence: "Did you find it?",
              translation: "你找到了嗎？",
            },
          ],
          usage_note: "發現。",
          image_file: "find.png",
        },
        {
          id: "v-15",
          term_zh: "給",
          related_terms: [
            {
              term_target: "give",
              pronunciation: ["/gɪv/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Give me that.",
              translation: "給我那個。",
            },
            {
              sentence: "Please give me a hand.",
              translation: "請幫我一把。",
            },
            {
              sentence: "Never give up.",
              translation: "永不放棄。",
            },
          ],
          usage_note: "交付。",
          image_file: "give.png",
        },
        {
          id: "v-16",
          term_zh: "告訴",
          related_terms: [
            {
              term_target: "tell",
              pronunciation: ["/tɛl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tell me why.",
              translation: "告訴我為什麼。",
            },
            {
              sentence: "Tell me the truth.",
              translation: "告訴我真相。",
            },
            {
              sentence: "Don't tell anyone.",
              translation: "不要告訴任何人。",
            },
          ],
          usage_note: "告知。",
          image_file: "tell.png",
        },
        {
          id: "v-17",
          term_zh: "工作",
          related_terms: [
            {
              term_target: "work",
              pronunciation: ["/wɝk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I work here.",
              translation: "我在這工作。",
            },
            {
              sentence: "My computer doesn't work.",
              translation: "我的電腦壞了(不運作)。",
            },
            {
              sentence: "She works hard.",
              translation: "她工作很認真。",
            },
          ],
          usage_note: "上班。",
          image_file: "work.png",
        },
        {
          id: "v-18",
          term_zh: "喜歡",
          related_terms: [
            {
              term_target: "like",
              pronunciation: ["/laɪk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I like it.",
              translation: "我喜歡它。",
            },
            {
              sentence: "I like pizza.",
              translation: "我喜歡披薩。",
            },
            {
              sentence: "Do you like him?",
              translation: "你喜歡他嗎？",
            },
          ],
          usage_note: "喜好。",
          image_file: "like.png",
        },
        {
          id: "v-19",
          term_zh: "起床",
          related_terms: [
            {
              term_target: "wake up",
              pronunciation: ["/weɪk ʌp/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Wake up now.",
              translation: "現在醒來。",
            },
            {
              sentence: "I usually wake up at 7.",
              translation: "我通常7點起床。",
            },
            {
              sentence: "Wake up! You are late.",
              translation: "醒醒！你遲到了。",
            },
          ],
          usage_note: "醒來。",
          image_file: "wake_up.png",
        },
        {
          id: "v-20",
          term_zh: "說話",
          related_terms: [
            {
              term_target: "speak",
              pronunciation: ["/spik/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Speak English.",
              translation: "說英文。",
            },
            {
              sentence: "Can I speak to Tom?",
              translation: "我可以跟湯姆說話嗎？(電話中)",
            },
            {
              sentence: "Please speak slowly.",
              translation: "請說慢一點。",
            },
          ],
          usage_note: "講語言。",
          image_file: "speak.png",
        },
        {
          id: "v-21",
          term_zh: "聽見",
          related_terms: [
            {
              term_target: "hear",
              pronunciation: ["/hɪr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Can you hear me?",
              translation: "聽得到我嗎？",
            },
            {
              sentence: "I didn't hear you.",
              translation: "我沒聽到你說話。",
            },
            {
              sentence: "Did you hear that noise?",
              translation: "你有聽到那個聲音嗎？",
            },
          ],
          usage_note: "聽覺。",
          image_file: "hear.png",
        },
        {
          id: "v-22",
          term_zh: "寫",
          related_terms: [
            {
              term_target: "write",
              pronunciation: ["/raɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Write a name.",
              translation: "寫名字。",
            },
            {
              sentence: "Please write it down.",
              translation: "請把它寫下來。",
            },
            {
              sentence: "She writes books.",
              translation: "她寫書。",
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
              term_target: "read",
              pronunciation: ["/rid/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Read a book.",
              translation: "看書。",
            },
            {
              sentence: "I like reading news.",
              translation: "我喜歡看新聞。",
            },
            {
              sentence: "Can you read this email?",
              translation: "你可以讀這封信嗎？",
            },
          ],
          usage_note: "閱讀。",
          image_file: "read.png",
        },
        {
          id: "v-24",
          term_zh: "等待",
          related_terms: [
            {
              term_target: "wait",
              pronunciation: ["/weɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Wait for me.",
              translation: "等我。",
            },
            {
              sentence: "Wait a minute.",
              translation: "等一下。",
            },
            {
              sentence: "I am waiting for the bus.",
              translation: "我在等公車。",
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
              term_target: "try",
              pronunciation: ["/traɪ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Try this.",
              translation: "試試這個。",
            },
            {
              sentence: "Please try again.",
              translation: "請再試一次。",
            },
            {
              sentence: "I will try my best.",
              translation: "我會盡力而為。",
            },
          ],
          usage_note: "試驗。",
          image_file: "try.png",
        },
        {
          id: "v-26",
          term_zh: "付錢",
          related_terms: [
            { term_target: "pay", pronunciation: ["/peɪ/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Pay the bill.",
              translation: "付帳單。",
            },
            {
              sentence: "I will pay for dinner.",
              translation: "晚餐我請客(我付錢)。",
            },
            {
              sentence: "How much did you pay?",
              translation: "你付了多少錢？",
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
              term_target: "choose",
              pronunciation: ["/tʃuz/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Choose one.",
              translation: "選一個。",
            },
            {
              sentence: "It's hard to choose.",
              translation: "很難選擇。",
            },
            {
              sentence: "Choose wisely.",
              translation: "明智地選擇。",
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
              term_target: "enter",
              pronunciation: ["/ˈɛntɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Enter the room.",
              translation: "進房間。",
            },
            {
              sentence: "Do not enter.",
              translation: "禁止進入。",
            },
            {
              sentence: "Please enter your password.",
              translation: "請輸入你的密碼。",
            },
          ],
          usage_note: "進入。",
          image_file: "enter.png",
        },
        {
          id: "v-29",
          term_zh: "住",
          related_terms: [
            {
              term_target: "live",
              pronunciation: ["/lɪv/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I live here.",
              translation: "我住這裡。",
            },
            {
              sentence: "Where do you live?",
              translation: "你住在哪裡？",
            },
            {
              sentence: "They live in Japan.",
              translation: "他們住在日本。",
            },
          ],
          usage_note: "居住。",
          image_file: "live.png",
        },
        {
          id: "v-30",
          term_zh: "到達",
          related_terms: [
            {
              term_target: "arrive",
              pronunciation: ["/əˈraɪv/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Arrive late.",
              translation: "晚到。",
            },
            {
              sentence: "When do we arrive?",
              translation: "我們什麼時候到？",
            },
            {
              sentence: "The train has arrived.",
              translation: "火車已經到了。",
            },
          ],
          usage_note: "抵達。",
          image_file: "arrive.png",
        },
        {
          id: "v-31",
          term_zh: "走路",
          related_terms: [
            {
              term_target: "walk",
              pronunciation: ["/wɔk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Walk home.",
              translation: "走路回家。",
            },
            {
              sentence: "Let's go for a walk.",
              translation: "我們去散步吧。",
            },
            {
              sentence: "Don't run, walk.",
              translation: "別跑，用走的。",
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
              term_target: "open",
              pronunciation: ["/ˈoʊpən/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Open the door.",
              translation: "開門。",
            },
            {
              sentence: "The store is open.",
              translation: "商店開著。",
            },
            {
              sentence: "Please open your book.",
              translation: "請打開你的書。",
            },
          ],
          usage_note: "開啟。",
          image_file: "open.png",
        },
        {
          id: "v-33",
          term_zh: "關閉",
          related_terms: [
            {
              term_target: "close",
              pronunciation: ["/kloʊz/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Close the window.",
              translation: "關窗。",
            },
            {
              sentence: "The shop is closed.",
              translation: "店已經關了。",
            },
            {
              sentence: "Close your eyes.",
              translation: "閉上你的眼睛。",
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
              term_target: "help",
              pronunciation: ["/hɛlp/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Help me.",
              translation: "幫我。",
            },
            {
              sentence: "Can I help you?",
              translation: "需要我幫忙嗎？",
            },
            {
              sentence: "Thanks for your help.",
              translation: "謝謝你的幫忙。",
            },
          ],
          usage_note: "協助。",
          image_file: "help.png",
        },
        {
          id: "v-35",
          term_zh: "帶來",
          related_terms: [
            {
              term_target: "bring",
              pronunciation: ["/brɪŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bring water.",
              translation: "帶水來。",
            },
            {
              sentence: "Bring your friend.",
              translation: "帶你朋友來。",
            },
            {
              sentence: "Don't forget to bring money.",
              translation: "別忘了帶錢。",
            },
          ],
          usage_note: "攜帶。",
          image_file: "bring.png",
        },
        {
          id: "v-36",
          term_zh: "需要",
          related_terms: [
            {
              term_target: "need",
              pronunciation: ["/nid/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I need help.",
              translation: "我需要幫忙。",
            },
            {
              sentence: "He needs a break.",
              translation: "他需要休息。",
            },
            {
              sentence: "I need to go now.",
              translation: "我現在得走了。",
            },
          ],
          usage_note: "必要。",
          image_file: "need.png",
        },
        {
          id: "v-37",
          term_zh: "使用",
          related_terms: [
            { term_target: "use", pronunciation: ["/juz/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Use phone.",
              translation: "用手機。",
            },
            {
              sentence: "Use this tool.",
              translation: "使用這個工具。",
            },
            {
              sentence: "Do not use the elevator.",
              translation: "請勿使用電梯。",
            },
          ],
          usage_note: "利用。",
          image_file: "use.png",
        },
        {
          id: "v-38",
          term_zh: "變成",
          related_terms: [
            {
              term_target: "become",
              pronunciation: ["/bɪˈkʌm/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Become a doctor.",
              translation: "變成醫生。",
            },
            {
              sentence: "It became dark.",
              translation: "天色變暗了。",
            },
            {
              sentence: "He wants to become a teacher.",
              translation: "他想成為一名老師。",
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
              term_target: "start",
              pronunciation: ["/stɑrt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Start now.",
              translation: "現在開始。",
            },
            {
              sentence: "Let's start.",
              translation: "我們開始吧。",
            },
            {
              sentence: "The movie starts at 8.",
              translation: "電影8點開始。",
            },
          ],
          usage_note: "開始。",
          image_file: "start.png",
        },
        {
          id: "v-40",
          term_zh: "開始",
          related_terms: [
            {
              term_target: "begin",
              pronunciation: ["/bɪˈgɪn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Begin class.",
              translation: "開始上課。",
            },
            {
              sentence: "Let the game begin.",
              translation: "讓遊戲開始吧。",
            },
            {
              sentence: "Where should I begin?",
              translation: "我該從哪裡開始？",
            },
          ],
          usage_note: "同Start。",
          image_file: "begin.png",
        },
        {
          id: "v-41",
          term_zh: "結束",
          related_terms: [
            {
              term_target: "finish",
              pronunciation: ["/ˈfɪnɪʃ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Finish work.",
              translation: "工作結束。",
            },
            {
              sentence: "I haven't finished yet.",
              translation: "我還沒做完。",
            },
            {
              sentence: "Did you finish your food?",
              translation: "你吃完了嗎？",
            },
          ],
          usage_note: "完成。",
          image_file: "finish.png",
        },
        {
          id: "v-42",
          term_zh: "停止",
          related_terms: [
            {
              term_target: "stop",
              pronunciation: ["/stɑp/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Stop here.",
              translation: "停這裡。",
            },
            {
              sentence: "Please stop talking.",
              translation: "請停止說話。",
            },
            {
              sentence: "The bus stopped.",
              translation: "公車停了。",
            },
          ],
          usage_note: "停止。",
          image_file: "stop.png",
        },
        {
          id: "v-43",
          term_zh: "記住",
          related_terms: [
            {
              term_target: "remember",
              pronunciation: ["/rɪˈmɛmbɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Remember me.",
              translation: "記得我。",
            },
            {
              sentence: "I don't remember.",
              translation: "我不記得了。",
            },
            {
              sentence: "Remember to call mom.",
              translation: "記得打電話給媽媽。",
            },
          ],
          usage_note: "記憶。",
          image_file: "remember.png",
        },
        {
          id: "v-44",
          term_zh: "談話",
          related_terms: [
            {
              term_target: "talk",
              pronunciation: ["/tɔk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Talk to me.",
              translation: "跟我說話。",
            },
            {
              sentence: "We need to talk.",
              translation: "我們需要談談。",
            },
            {
              sentence: "Don't talk to strangers.",
              translation: "不要跟陌生人說話。",
            },
          ],
          usage_note: "交談。",
          image_file: "talk.png",
        },
        {
          id: "v-45",
          term_zh: "見面",
          related_terms: [
            {
              term_target: "meet",
              pronunciation: ["/mit/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Meet friends.",
              translation: "見朋友。",
            },
            {
              sentence: "Nice to meet you.",
              translation: "很高興認識你。",
            },
            {
              sentence: "Let's meet at the park.",
              translation: "我們在公園碰面吧。",
            },
          ],
          usage_note: "會面。",
          image_file: "meet.png",
        },
        {
          id: "v-46",
          term_zh: "乘坐（工具）",
          related_terms: [
            {
              term_target: "take",
              pronunciation: ["/teɪk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Take a bus.",
              translation: "搭公車。",
            },
            {
              sentence: "Take a break.",
              translation: "休息一下。",
            },
            {
              sentence: "Take this medicine.",
              translation: "吃這藥。",
            },
          ],
          usage_note: "搭乘。",
          image_file: "take.png",
        },
        {
          id: "v-47",
          term_zh: "放",
          related_terms: [
            { term_target: "put", pronunciation: ["/pʊt/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Put it down.",
              translation: "放下它。",
            },
            {
              sentence: "Put on your shoes.",
              translation: "穿上你的鞋子。",
            },
            {
              sentence: "Where should I put this?",
              translation: "這個我要放哪裡？",
            },
          ],
          usage_note: "放置。",
          image_file: "put.png",
        },
        {
          id: "v-48",
          term_zh: "吃",
          related_terms: [
            { term_target: "eat", pronunciation: ["/it/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Eat dinner.",
              translation: "吃晚餐。",
            },
            {
              sentence: "What do you want to eat?",
              translation: "你想吃什麼？",
            },
            {
              sentence: "Don't eat too much.",
              translation: "不要吃太多。",
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
              term_target: "sleep",
              pronunciation: ["/slip/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Go to sleep.",
              translation: "去睡覺。",
            },
            {
              sentence: "I didn't sleep well.",
              translation: "我沒睡好。",
            },
            {
              sentence: "The baby is sleeping.",
              translation: "寶寶在睡覺。",
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
              term_target: "send",
              pronunciation: ["/sɛnd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Send email.",
              translation: "寄信。",
            },
            {
              sentence: "Send me a message.",
              translation: "傳訊息給我。",
            },
            {
              sentence: "I sent a gift to you.",
              translation: "我寄了一個禮物給你。",
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
              term_target: "drive",
              pronunciation: ["/draɪv/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Drive a car.",
              translation: "開車。",
            },
            {
              sentence: "Can you drive?",
              translation: "你會開車嗎？",
            },
            {
              sentence: "Please drive safely.",
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
              term_target: "study",
              pronunciation: ["/ˈstʌdi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Study hard.",
              translation: "用功讀書。",
            },
            {
              sentence: "I study English every day.",
              translation: "我每天讀英文。",
            },
            {
              sentence: "She is studying for a test.",
              translation: "她正在為考試讀書。",
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
              term_target: "go back",
              pronunciation: ["/goʊ bæk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Go back home.",
              translation: "回家。",
            },
            {
              sentence: "Go back to your seat.",
              translation: "回你的座位。",
            },
            {
              sentence: "Let's go back.",
              translation: "我們回去吧。",
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
              term_target: "understand",
              pronunciation: ["/ˌʌndɚˈstænd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I understand.",
              translation: "我懂了。",
            },
            {
              sentence: "Do you understand?",
              translation: "你明白嗎？",
            },
            {
              sentence: "I don't understand French.",
              translation: "我不懂法文。",
            },
          ],
          usage_note: "明白意思。",
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
              term_target: "good",
              pronunciation: ["/gʊd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Good job.",
              translation: "做得好。",
            },
            {
              sentence: "Have a good day.",
              translation: "祝你有美好的一天。",
            },
            {
              sentence: "This is a good book.",
              translation: "這是一本好書。",
            },
          ],
          usage_note: "正面。",
          image_file: "good.png",
        },
        {
          id: "adj-02",
          term_zh: "壞的",
          related_terms: [
            { term_target: "bad", pronunciation: ["/bæd/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Bad boy.",
              translation: "壞男孩。",
            },
            {
              sentence: "Smoking is bad for health.",
              translation: "吸菸對健康不好。",
            },
            {
              sentence: "I have some bad news.",
              translation: "我有一些壞消息。",
            },
          ],
          usage_note: "負面。",
          image_file: "bad.png",
        },
        {
          id: "adj-03",
          term_zh: "新的",
          related_terms: [
            { term_target: "new", pronunciation: ["/nu/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "New phone.",
              translation: "新手機。",
            },
            {
              sentence: "Happy New Year!",
              translation: "新年快樂！",
            },
            {
              sentence: "I made a new friend.",
              translation: "我交了一個新朋友。",
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
              term_target: "first",
              pronunciation: ["/fɝst/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "First time.",
              translation: "第一次。",
            },
            {
              sentence: "Who is the first one?",
              translation: "誰是第一個？",
            },
            {
              sentence: "First of all, thank you.",
              translation: "首先，謝謝你。",
            },
          ],
          usage_note: "順序。",
          image_file: "first.png",
        },
        {
          id: "adj-05",
          term_zh: "上一個",
          related_terms: [
            {
              term_target: "last",
              pronunciation: ["/læst/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Last week.",
              translation: "上週。",
            },
            {
              sentence: "This is the last chance.",
              translation: "這是最後一次機會。",
            },
            {
              sentence: "Last night was fun.",
              translation: "昨晚很有趣。",
            },
          ],
          usage_note: "最後或上一個。",
          image_file: "last.png",
        },
        {
          id: "adj-06",
          term_zh: "下一個",
          related_terms: [
            {
              term_target: "next",
              pronunciation: ["/nɛkst/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Next station.",
              translation: "下一站。",
            },
            {
              sentence: "See you next time.",
              translation: "下次見。",
            },
            {
              sentence: "Who is next?",
              translation: "下一位是誰？",
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
              term_target: "long",
              pronunciation: ["/lɔŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Long hair.",
              translation: "長髮。",
            },
            {
              sentence: "It's a long story.",
              translation: "這說來話長。",
            },
            {
              sentence: "How long will it take?",
              translation: "這要花多久時間？",
            },
          ],
          usage_note: "長度。",
          image_file: "long.png",
        },
        {
          id: "adj-08",
          term_zh: "大的",
          related_terms: [
            { term_target: "big", pronunciation: ["/bɪg/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Big house.",
              translation: "大房子。",
            },
            {
              sentence: "That is a big dog.",
              translation: "那是隻大狗。",
            },
            {
              sentence: "I have a big dream.",
              translation: "我有一個大夢想。",
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
              term_target: "small",
              pronunciation: ["/smɔl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Small size.",
              translation: "小尺寸。",
            },
            {
              sentence: "It's a small world.",
              translation: "世界真小。",
            },
            {
              sentence: "He has small hands.",
              translation: "他的手很小。",
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
              term_target: "many",
              pronunciation: ["/ˈmɛni/"],
              specific_note: "可數",
            },
          ],
          examples: [
            {
              sentence: "Many people.",
              translation: "很多人。",
            },
            {
              sentence: "How many apples?",
              translation: "有多少蘋果？",
            },
            {
              sentence: "I have many friends.",
              translation: "我有很多朋友。",
            },
          ],
          usage_note: "數量多。",
          image_file: "many.png",
        },
        {
          id: "adj-11",
          term_zh: "高的",
          related_terms: [
            {
              term_target: "tall",
              pronunciation: ["/tɔl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tall building.",
              translation: "高樓。",
            },
            {
              sentence: "He is tall.",
              translation: "他很高。",
            },
            {
              sentence: "How tall are you?",
              translation: "你多高？",
            },
          ],
          usage_note: "高度。",
          image_file: "tall.png",
        },
        {
          id: "adj-12",
          term_zh: "年輕的",
          related_terms: [
            {
              term_target: "young",
              pronunciation: ["/jʌŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Young man.",
              translation: "年輕人。",
            },
            {
              sentence: "She looks very young.",
              translation: "她看起來很年輕。",
            },
            {
              sentence: "When I was young.",
              translation: "當我年輕的時候。",
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
              term_target: "old",
              pronunciation: ["/oʊld/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Old book.",
              translation: "舊書。",
            },
            {
              sentence: "How old are you?",
              translation: "你幾歲？",
            },
            {
              sentence: "This car is very old.",
              translation: "這台車很舊。",
            },
          ],
          usage_note: "人或物皆可。",
          image_file: "old.png",
        },
        {
          id: "adj-14",
          term_zh: "近的",
          related_terms: [
            {
              term_target: "near",
              pronunciation: ["/nɪr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Near here.",
              translation: "在這附近。",
            },
            {
              sentence: "Is the station near?",
              translation: "車站近嗎？",
            },
            {
              sentence: "Come near me.",
              translation: "靠近我。",
            },
          ],
          usage_note: "距離近。",
          image_file: "near.png",
        },
        {
          id: "adj-15",
          term_zh: "遠的",
          related_terms: [
            { term_target: "far", pronunciation: ["/fɑr/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Far away.",
              translation: "很遠。",
            },
            {
              sentence: "How far is it?",
              translation: "那有多遠？",
            },
            {
              sentence: "It's not too far.",
              translation: "不會太遠。",
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
              term_target: "fast",
              pronunciation: ["/fæst/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Run fast.",
              translation: "跑得快。",
            },
            {
              sentence: "Fast food.",
              translation: "速食。",
            },
            {
              sentence: "Time goes fast.",
              translation: "時間過得很快。",
            },
          ],
          usage_note: "速度快。",
          image_file: "fast.png",
        },
        {
          id: "adj-17",
          term_zh: "慢的",
          related_terms: [
            {
              term_target: "slow",
              pronunciation: ["/sloʊ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Walk slow.",
              translation: "走得慢。",
            },
            {
              sentence: "Slow down, please.",
              translation: "請慢一點。",
            },
            {
              sentence: "The internet is slow.",
              translation: "網路很慢。",
            },
          ],
          usage_note: "速度慢。",
          image_file: "slow.png",
        },
        {
          id: "adj-18",
          term_zh: "熱的",
          related_terms: [
            { term_target: "hot", pronunciation: ["/hɑt/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Hot water.",
              translation: "熱水。",
            },
            {
              sentence: "It is hot today.",
              translation: "今天很熱。",
            },
            {
              sentence: "Be careful, it's hot.",
              translation: "小心，很燙。",
            },
          ],
          usage_note: "高溫。",
          image_file: "hot.png",
        },
        {
          id: "adj-19",
          term_zh: "冷的",
          related_terms: [
            {
              term_target: "cold",
              pronunciation: ["/koʊld/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Cold drink.",
              translation: "冷飲。",
            },
            {
              sentence: "It is cold outside.",
              translation: "外面很冷。",
            },
            {
              sentence: "I have a cold.",
              translation: "我感冒了 (作名詞用)。",
            },
          ],
          usage_note: "低溫。",
          image_file: "cold.png",
        },
        {
          id: "adj-20",
          term_zh: "乾淨的",
          related_terms: [
            {
              term_target: "clean",
              pronunciation: ["/klin/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Clean room.",
              translation: "乾淨的房間。",
            },
            {
              sentence: "Keep your hands clean.",
              translation: "保持雙手乾淨。",
            },
            {
              sentence: "The water is clean.",
              translation: "這水很乾淨。",
            },
          ],
          usage_note: "無髒汙。",
          image_file: "clean.png",
        },
        {
          id: "adj-21",
          term_zh: "髒的",
          related_terms: [
            {
              term_target: "dirty",
              pronunciation: ["/ˈdɝti/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Dirty hands.",
              translation: "髒手。",
            },
            {
              sentence: "My shoes are dirty.",
              translation: "我的鞋子髒了。",
            },
            {
              sentence: "Don't touch, it's dirty.",
              translation: "別碰，很髒。",
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
              term_target: "easy",
              pronunciation: ["/ˈizi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "It is easy.",
              translation: "這很簡單。",
            },
            {
              sentence: "Take it easy.",
              translation: "放輕鬆。",
            },
            {
              sentence: "English is easy.",
              translation: "英文很簡單。",
            },
          ],
          usage_note: "容易。",
          image_file: "easy.png",
        },
        {
          id: "adj-23",
          term_zh: "困難的",
          related_terms: [
            {
              term_target: "difficult",
              pronunciation: ["/ˈdɪfəˌkʌlt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "It is difficult.",
              translation: "很難。",
            },
            {
              sentence: "This question is difficult.",
              translation: "這個問題很難。",
            },
            {
              sentence: "Life can be difficult.",
              translation: "生活有時很艱難。",
            },
          ],
          usage_note: "難。",
          image_file: "difficult.png",
        },
        {
          id: "adj-24",
          term_zh: "正確的",
          related_terms: [
            {
              term_target: "correct",
              pronunciation: ["/kəˈrɛkt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Correct answer.",
              translation: "正確答案。",
            },
            {
              sentence: "Is this correct?",
              translation: "這正確嗎？",
            },
            {
              sentence: "You made the correct choice.",
              translation: "你做了正確的選擇。",
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
              term_target: "wrong",
              pronunciation: ["/rɔŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Wrong way.",
              translation: "錯的路。",
            },
            {
              sentence: "Something is wrong.",
              translation: "有點不對勁。",
            },
            {
              sentence: "Sorry, wrong number.",
              translation: "抱歉，打錯電話了。",
            },
          ],
          usage_note: "不對。",
          image_file: "wrong.png",
        },
        {
          id: "adj-26",
          term_zh: "重要的",
          related_terms: [
            {
              term_target: "important",
              pronunciation: ["/ɪmˈpɔrtənt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Important meeting.",
              translation: "重要會議。",
            },
            {
              sentence: "This is very important.",
              translation: "這非常重要。",
            },
            {
              sentence: "Family is important.",
              translation: "家人很重要。",
            },
          ],
          usage_note: "關鍵。",
          image_file: "important.png",
        },
        {
          id: "adj-27",
          term_zh: "不同的",
          related_terms: [
            {
              term_target: "different",
              pronunciation: ["/ˈdɪfrənt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Different color.",
              translation: "不同顏色。",
            },
            {
              sentence: "We have different ideas.",
              translation: "我們有不同的想法。",
            },
            {
              sentence: "It is different from mine.",
              translation: "這跟我的不一樣。",
            },
          ],
          usage_note: "差異。",
          image_file: "different.png",
        },
        {
          id: "adj-28",
          term_zh: "真的／真實的",
          related_terms: [
            {
              term_target: "real",
              pronunciation: ["/riəl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Real gold.",
              translation: "真金。",
            },
            {
              sentence: "Is this real?",
              translation: "這是真的嗎？",
            },
            {
              sentence: "Keep it real.",
              translation: "保持真實（做自己）。",
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
              term_target: "interesting",
              pronunciation: ["/ˈɪntrɪstɪŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Interesting book.",
              translation: "有趣的書。",
            },
            {
              sentence: "That sounds interesting.",
              translation: "聽起來很有趣。",
            },
            {
              sentence: "She is an interesting person.",
              translation: "她是個有趣的人。",
            },
          ],
          usage_note: "有意思。",
          image_file: "interesting.png",
        },
        {
          id: "adj-30",
          term_zh: "美麗的",
          related_terms: [
            {
              term_target: "beautiful",
              pronunciation: ["/ˈbjutəfəl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Beautiful flower.",
              translation: "美麗的花。",
            },
            {
              sentence: "You are beautiful.",
              translation: "你很美。",
            },
            {
              sentence: "What a beautiful day.",
              translation: "多美好的一天。",
            },
          ],
          usage_note: "形容人或景物。",
          image_file: "beautiful.png",
        },
        {
          id: "adj-31",
          term_zh: "便宜的",
          related_terms: [
            {
              term_target: "cheap",
              pronunciation: ["/tʃip/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "It is cheap.",
              translation: "很便宜。",
            },
            {
              sentence: "Cheap flights.",
              translation: "便宜的機票。",
            },
            {
              sentence: "I bought a cheap watch.",
              translation: "我買了一支便宜的手錶。",
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
              term_target: "expensive",
              pronunciation: ["/ɪkˈspɛnsɪv/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Too expensive.",
              translation: "太貴了。",
            },
            {
              sentence: "Expensive car.",
              translation: "昂貴的車。",
            },
            {
              sentence: "It looks expensive.",
              translation: "這看起來很貴。",
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
              term_target: "hungry",
              pronunciation: ["/ˈhʌŋgri/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I am hungry.",
              translation: "我餓了。",
            },
            {
              sentence: "Are you hungry?",
              translation: "你餓了嗎？",
            },
            {
              sentence: "The baby is hungry.",
              translation: "寶寶餓了。",
            },
          ],
          usage_note: "餓。",
          image_file: "hungry.png",
        },
        {
          id: "adj-34",
          term_zh: "疲累的",
          related_terms: [
            {
              term_target: "tired",
              pronunciation: ["/taɪrd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I am tired.",
              translation: "我累了。",
            },
            {
              sentence: "I am tired of waiting.",
              translation: "我等累了。",
            },
            {
              sentence: "You look tired.",
              translation: "你看起來很累。",
            },
          ],
          usage_note: "狀態。",
          image_file: "tired.png",
        },
        {
          id: "adj-35",
          term_zh: "忙碌的",
          related_terms: [
            {
              term_target: "busy",
              pronunciation: ["/ˈbɪzi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I am busy.",
              translation: "我很忙。",
            },
            {
              sentence: "Busy street.",
              translation: "繁忙的街道。",
            },
            {
              sentence: "Are you busy now?",
              translation: "你現在忙嗎？",
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
              term_target: "happy",
              pronunciation: ["/ˈhæpi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Happy birthday.",
              translation: "生日快樂。",
            },
            {
              sentence: "I am so happy.",
              translation: "我好開心。",
            },
            {
              sentence: "Are you happy?",
              translation: "你快樂嗎？",
            },
          ],
          usage_note: "高興。",
          image_file: "happy.png",
        },
        {
          id: "adj-37",
          term_zh: "悲傷的",
          related_terms: [
            { term_target: "sad", pronunciation: ["/sæd/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Sad story.",
              translation: "悲傷的故事。",
            },
            {
              sentence: "Why are you sad?",
              translation: "你為什麼難過？",
            },
            {
              sentence: "Don't be sad.",
              translation: "別難過。",
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
              term_target: "similar",
              pronunciation: ["/ˈsɪməlɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Similar color.",
              translation: "相似的顏色。",
            },
            {
              sentence: "They look similar.",
              translation: "他們看起來很像。",
            },
            {
              sentence: "We have similar tastes.",
              translation: "我們品味相似。",
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
              term_target: "famous",
              pronunciation: ["/ˈfeɪməs/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Famous singer.",
              translation: "知名歌手。",
            },
            {
              sentence: "This place is famous for food.",
              translation: "這地方以美食聞名。",
            },
            {
              sentence: "He wants to be famous.",
              translation: "他想出名。",
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
              term_target: "foreign",
              pronunciation: ["/ˈfɔrən/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Foreign country.",
              translation: "外國。",
            },
            {
              sentence: "Foreign language.",
              translation: "外語。",
            },
            {
              sentence: "She likes foreign movies.",
              translation: "她喜歡外國電影。",
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
              term_target: "intelligent",
              pronunciation: ["/ɪnˈtɛlədʒənt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Intelligent student.",
              translation: "聰明的學生。",
            },
            {
              sentence: "That is an intelligent question.",
              translation: "那是個聰明的問題。",
            },
            {
              sentence: "Dolphins are intelligent animals.",
              translation: "海豚是聰明的動物。",
            },
          ],
          usage_note: "智能高。",
          image_file: "intelligent.png",
        },
        {
          id: "adj-42",
          term_zh: "危險的",
          related_terms: [
            {
              term_target: "dangerous",
              pronunciation: ["/ˈdeɪndʒərəs/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "It is dangerous.",
              translation: "這很危險。",
            },
            {
              sentence: "Dangerous dog.",
              translation: "危險的狗。",
            },
            {
              sentence: "Don't go there, it's dangerous.",
              translation: "別去那裡，很危險。",
            },
          ],
          usage_note: "警示。",
          image_file: "dangerous.png",
        },
        {
          id: "adj-43",
          term_zh: "仁慈的",
          related_terms: [
            {
              term_target: "kind",
              pronunciation: ["/kaɪnd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Kind person.",
              translation: "好心人。",
            },
            {
              sentence: "She is very kind to me.",
              translation: "她對我很好。",
            },
            {
              sentence: "Thank you for your kind words.",
              translation: "謝謝你的讚美。",
            },
          ],
          usage_note: "溫柔。",
          image_file: "kind.png",
        },
        {
          id: "adj-44",
          term_zh: "所有的／每一個",
          related_terms: [
            {
              term_target: "every",
              pronunciation: ["/ˈɛvri/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Every day.",
              translation: "每一天。",
            },
            {
              sentence: "Every student has a book.",
              translation: "每個學生都有一本書。",
            },
            {
              sentence: "I enjoy every moment.",
              translation: "我享受每一刻。",
            },
          ],
          usage_note: "每一個。",
          image_file: "every.png",
        },
        {
          id: "adj-45",
          term_zh: "喜愛的",
          related_terms: [
            {
              term_target: "favorite",
              pronunciation: ["/ˈfeɪvərɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Favorite food.",
              translation: "最愛的食物。",
            },
            {
              sentence: "What is your favorite color?",
              translation: "你最喜歡什麼顏色？",
            },
            {
              sentence: "This is my favorite song.",
              translation: "這是我最喜歡的歌。",
            },
          ],
          usage_note: "中意。",
          image_file: "favorite.png",
        },
        {
          id: "adj-46",
          term_zh: "美味的",
          related_terms: [
            {
              term_target: "delicious",
              pronunciation: ["/dɪˈlɪʃəs/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Delicious food.",
              translation: "美味的食物。",
            },
            {
              sentence: "This cake is delicious.",
              translation: "這蛋糕很好吃。",
            },
            {
              sentence: "It looks delicious.",
              translation: "這看起來很好吃。",
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
              term_target: "time",
              pronunciation: ["/taɪm/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "What time is it?",
              translation: "現在幾點？",
            },
            {
              sentence: "I don't have time.",
              translation: "我沒時間。",
            },
            {
              sentence: "Time is money.",
              translation: "時間就是金錢。",
            },
          ],
          usage_note: "時刻/時間。",
          image_file: "time.png",
        },
        {
          id: "n-02",
          term_zh: "人們",
          related_terms: [
            {
              term_target: "people",
              pronunciation: ["/ˈpipəl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Many people.",
              translation: "很多人。",
            },
            {
              sentence: "People are talking.",
              translation: "人們在交談。",
            },
            {
              sentence: "There are 5 people in my family.",
              translation: "我家有五口人。",
            },
          ],
          usage_note: "複數。",
          image_file: "people.png",
        },
        {
          id: "n-03",
          term_zh: "金錢",
          related_terms: [
            {
              term_target: "money",
              pronunciation: ["/ˈmʌni/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "No money.",
              translation: "沒錢。",
            },
            {
              sentence: "I need some money.",
              translation: "我需要一些錢。",
            },
            {
              sentence: "Can you lend me money?",
              translation: "你可以借我錢嗎？",
            },
          ],
          usage_note: "不可數。",
          image_file: "money.png",
        },
        {
          id: "n-04",
          term_zh: "孩子",
          related_terms: [
            {
              term_target: "child",
              pronunciation: ["/tʃaɪld/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Small child.",
              translation: "小孩。",
            },
            {
              sentence: "The child is sleeping.",
              translation: "孩子正在睡覺。",
            },
            {
              sentence: "She has one child.",
              translation: "她有一個孩子。",
            },
          ],
          usage_note: "兒童。",
          image_file: "child.png",
        },
        {
          id: "n-05",
          term_zh: "水",
          related_terms: [
            {
              term_target: "water",
              pronunciation: ["/ˈwɑtɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Drink water.",
              translation: "喝水。",
            },
            {
              sentence: "Can I have some water?",
              translation: "我可以喝點水嗎？",
            },
            {
              sentence: "The water is cold.",
              translation: "這水是冷的。",
            },
          ],
          usage_note: "不可數。",
          image_file: "water.png",
        },
        {
          id: "n-06",
          term_zh: "食物",
          related_terms: [
            {
              term_target: "food",
              pronunciation: ["/fud/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Good food.",
              translation: "好吃的食物。",
            },
            {
              sentence: "Do you have any food?",
              translation: "你有食物嗎？",
            },
            {
              sentence: "I love spicy food.",
              translation: "我喜歡辣的食物。",
            },
          ],
          usage_note: "吃的東西。",
          image_file: "food.png",
        },
        {
          id: "n-07",
          term_zh: "朋友",
          related_terms: [
            {
              term_target: "friend",
              pronunciation: ["/frɛnd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "My friend.",
              translation: "我朋友。",
            },
            {
              sentence: "We are best friends.",
              translation: "我們是最好的朋友。",
            },
            {
              sentence: "He is a good friend.",
              translation: "他是個好朋友。",
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
              term_target: "family",
              pronunciation: ["/ˈfæməli/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Big family.",
              translation: "大家庭。",
            },
            {
              sentence: "I love my family.",
              translation: "我愛我的家人。",
            },
            {
              sentence: "My family lives in Taipei.",
              translation: "我的家人住在台北。",
            },
          ],
          usage_note: "家人。",
          image_file: "family.png",
        },
        {
          id: "n-09",
          term_zh: "學生",
          related_terms: [
            {
              term_target: "student",
              pronunciation: ["/ˈstudənt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I am a student.",
              translation: "我是學生。",
            },
            {
              sentence: "She is a good student.",
              translation: "她是個好學生。",
            },
            {
              sentence: "The students are studying.",
              translation: "學生們正在讀書。",
            },
          ],
          usage_note: "在學者。",
          image_file: "student.png",
        },
        {
          id: "n-10",
          term_zh: "文化",
          related_terms: [
            {
              term_target: "culture",
              pronunciation: ["/ˈkʌltʃɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Local culture.",
              translation: "當地文化。",
            },
            {
              sentence: "I like Japanese culture.",
              translation: "我喜歡日本文化。",
            },
            {
              sentence: "Culture is important.",
              translation: "文化很重要。",
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
              term_target: "problem",
              pronunciation: ["/ˈprɑbləm/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "No problem.",
              translation: "沒問題。",
            },
            {
              sentence: "We have a big problem.",
              translation: "我們有個大問題。",
            },
            {
              sentence: "Can you solve the problem?",
              translation: "你能解決這個問題嗎？",
            },
          ],
          usage_note: "難題。",
          image_file: "problem.png",
        },
        {
          id: "n-12",
          term_zh: "公司",
          related_terms: [
            {
              term_target: "company",
              pronunciation: ["/ˈkʌmpəni/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Big company.",
              translation: "大公司。",
            },
            {
              sentence: "I work for this company.",
              translation: "我在這家公司工作。",
            },
            {
              sentence: "He started his own company.",
              translation: "他開了自己的公司。",
            },
          ],
          usage_note: "上班地點。",
          image_file: "company.png",
        },
        {
          id: "n-13",
          term_zh: "男性",
          related_terms: [
            { term_target: "man", pronunciation: ["/mæn/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "He is a man.",
              translation: "他是男人。",
            },
            {
              sentence: "That man is tall.",
              translation: "那個男人很高。",
            },
            {
              sentence: "A young man.",
              translation: "一位年輕男子。",
            },
          ],
          usage_note: "性別。",
          image_file: "man.png",
        },
        {
          id: "n-14",
          term_zh: "女性",
          related_terms: [
            {
              term_target: "woman",
              pronunciation: ["/ˈwʊmən/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "She is a woman.",
              translation: "她是女人。",
            },
            {
              sentence: "A beautiful woman.",
              translation: "一位美麗的女子。",
            },
            {
              sentence: "That woman is a doctor.",
              translation: "那位女士是醫生。",
            },
          ],
          usage_note: "性別。",
          image_file: "woman.png",
        },
        {
          id: "n-15",
          term_zh: "學校",
          related_terms: [
            {
              term_target: "school",
              pronunciation: ["/skul/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Go to school.",
              translation: "去學校。",
            },
            {
              sentence: "The school is near here.",
              translation: "學校在附近。",
            },
            {
              sentence: "I walk to school.",
              translation: "我走路上學。",
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
              term_target: "teacher",
              pronunciation: ["/ˈtitʃɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "English teacher.",
              translation: "英文老師。",
            },
            {
              sentence: "My teacher is kind.",
              translation: "我的老師很親切。",
            },
            {
              sentence: "Listen to the teacher.",
              translation: "聽老師說話。",
            },
          ],
          usage_note: "師長。",
          image_file: "teacher.png",
        },
        {
          id: "n-17",
          term_zh: "影片／電影",
          related_terms: [
            {
              term_target: "movie",
              pronunciation: ["/ˈmuvi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Watch a movie.",
              translation: "看電影。",
            },
            {
              sentence: "Let's see a movie.",
              translation: "我們去看電影吧。",
            },
            {
              sentence: "That movie was sad.",
              translation: "那部電影很感傷。",
            },
          ],
          usage_note: "影片。",
          image_file: "movie.png",
        },
        {
          id: "n-18",
          term_zh: "手機",
          related_terms: [
            {
              term_target: "phone",
              pronunciation: ["/foʊn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "My phone.",
              translation: "我手機。",
            },
            {
              sentence: "Where is my phone?",
              translation: "我的手機在哪？",
            },
            {
              sentence: "Please answer the phone.",
              translation: "請接電話。",
            },
          ],
          usage_note: "電話。",
          image_file: "phone.png",
        },
        {
          id: "n-19",
          term_zh: "電腦",
          related_terms: [
            {
              term_target: "computer",
              pronunciation: ["/kəmˈpjutɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Use computer.",
              translation: "用電腦。",
            },
            {
              sentence: "My computer is slow.",
              translation: "我的電腦很慢。",
            },
            {
              sentence: "I need a new computer.",
              translation: "我需要一台新電腦。",
            },
          ],
          usage_note: "PC。",
          image_file: "computer.png",
        },
        {
          id: "n-20",
          term_zh: "車",
          related_terms: [
            { term_target: "car", pronunciation: ["/kɑr/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Drive a car.",
              translation: "開車。",
            },
            {
              sentence: "Get in the car.",
              translation: "上車。",
            },
            {
              sentence: "His car is red.",
              translation: "他的車是紅色的。",
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
              term_target: "market",
              pronunciation: ["/ˈmɑrkɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Night market.",
              translation: "夜市。",
            },
            {
              sentence: "Go to the market.",
              translation: "去市場。",
            },
            {
              sentence: "The market is crowded.",
              translation: "市場很擁擠。",
            },
          ],
          usage_note: "市集。",
          image_file: "market.png",
        },
        {
          id: "n-22",
          term_zh: "衣服",
          related_terms: [
            {
              term_target: "clothes",
              pronunciation: ["/kloʊðz/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Buy clothes.",
              translation: "買衣服。",
            },
            {
              sentence: "Put on your clothes.",
              translation: "穿上衣服。",
            },
            {
              sentence: "These clothes are dirty.",
              translation: "這些衣服髒了。",
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
              term_target: "shop",
              pronunciation: ["/ʃɑp/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Coffee shop.",
              translation: "咖啡店。",
            },
            {
              sentence: "The shop is closed.",
              translation: "商店關門了。",
            },
            {
              sentence: "This is a gift shop.",
              translation: "這是家禮品店。",
            },
          ],
          usage_note: "店家。",
          image_file: "shop.png",
        },
        {
          id: "n-24",
          term_zh: "巴士",
          related_terms: [
            { term_target: "bus", pronunciation: ["/bʌs/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Take a bus.",
              translation: "搭公車。",
            },
            {
              sentence: "The bus is late.",
              translation: "公車遲到了。",
            },
            {
              sentence: "Get off the bus.",
              translation: "下公車。",
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
              term_target: "street",
              pronunciation: ["/strit/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "On the street.",
              translation: "在街上。",
            },
            {
              sentence: "Cross the street.",
              translation: "過馬路。",
            },
            {
              sentence: "A busy street.",
              translation: "繁忙的街道。",
            },
          ],
          usage_note: "道路。",
          image_file: "street.png",
        },
        {
          id: "n-26",
          term_zh: "房子／家",
          related_terms: [
            {
              term_target: "house",
              pronunciation: ["/haʊs/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "My house.",
              translation: "我家。",
            },
            {
              sentence: "Come to my house.",
              translation: "來我家。",
            },
            {
              sentence: "They bought a house.",
              translation: "他們買了房子。",
            },
          ],
          usage_note: "住宅。",
          image_file: "house.png",
        },
        {
          id: "n-27",
          term_zh: "母親",
          related_terms: [
            {
              term_target: "mother",
              pronunciation: ["/ˈmʌðɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "My mother.",
              translation: "我媽媽。",
            },
            {
              sentence: "I help my mother.",
              translation: "我幫我媽媽。",
            },
            {
              sentence: "Mother is cooking.",
              translation: "媽媽在煮飯。",
            },
          ],
          usage_note: "媽媽。",
          image_file: "mother.png",
        },
        {
          id: "n-28",
          term_zh: "父親",
          related_terms: [
            {
              term_target: "father",
              pronunciation: ["/ˈfɑðɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "My father.",
              translation: "我爸爸。",
            },
            {
              sentence: "Like father, like son.",
              translation: "有其父必有其子。",
            },
            {
              sentence: "My father is at work.",
              translation: "我父親在工作。",
            },
          ],
          usage_note: "爸爸。",
          image_file: "father.png",
        },
        {
          id: "n-29",
          term_zh: "兄弟",
          related_terms: [
            {
              term_target: "brother",
              pronunciation: ["/ˈbrʌðɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "My brother.",
              translation: "我兄弟。",
            },
            {
              sentence: "I have two brothers.",
              translation: "我有兩個兄弟。",
            },
            {
              sentence: "He is my older brother.",
              translation: "他是我哥哥。",
            },
          ],
          usage_note: "兄弟。",
          image_file: "brother.png",
        },
        {
          id: "n-30",
          term_zh: "姐妹",
          related_terms: [
            {
              term_target: "sister",
              pronunciation: ["/ˈsɪstɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "My sister.",
              translation: "我姐妹。",
            },
            {
              sentence: "My sister is cute.",
              translation: "我妹妹很可愛。",
            },
            {
              sentence: "Do you have a sister?",
              translation: "你有姐妹嗎？",
            },
          ],
          usage_note: "姐妹。",
          image_file: "sister.png",
        },
        {
          id: "n-31",
          term_zh: "中文",
          related_terms: [
            {
              term_target: "Chinese",
              pronunciation: ["/tʃaɪˈniz/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Speak Chinese.",
              translation: "說中文。",
            },
            {
              sentence: "Chinese is hard.",
              translation: "中文很難。",
            },
            {
              sentence: "I am learning Chinese.",
              translation: "我正在學中文。",
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
              term_target: "morning",
              pronunciation: ["/ˈmɔrnɪŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "In the morning.",
              translation: "在早晨。",
            },
            {
              sentence: "Good morning.",
              translation: "早安。",
            },
            {
              sentence: "I run in the morning.",
              translation: "我早上跑步。",
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
              term_target: "night",
              pronunciation: ["/naɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Good night.",
              translation: "晚安。",
            },
            {
              sentence: "It was a long night.",
              translation: "那是一個漫長的夜晚。",
            },
            {
              sentence: "I study at night.",
              translation: "我晚上讀書。",
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
              term_target: "ticket",
              pronunciation: ["/ˈtɪkɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "One ticket.",
              translation: "一張票。",
            },
            {
              sentence: "Where is your ticket?",
              translation: "你的票在哪裡？",
            },
            {
              sentence: "Buy a train ticket.",
              translation: "買一張火車票。",
            },
          ],
          usage_note: "票。",
          image_file: "ticket.png",
        },
        {
          id: "n-35",
          term_zh: "包包",
          related_terms: [
            { term_target: "bag", pronunciation: ["/bæg/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Big bag.",
              translation: "大包包。",
            },
            {
              sentence: "Open your bag.",
              translation: "打開你的包包。",
            },
            {
              sentence: "I lost my bag.",
              translation: "我的包包不見了。",
            },
          ],
          usage_note: "提包。",
          image_file: "bag.png",
        },
        {
          id: "n-36",
          term_zh: "杯子",
          related_terms: [
            { term_target: "cup", pronunciation: ["/kʌp/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Cup of tea.",
              translation: "一杯茶。",
            },
            {
              sentence: "A cup of coffee, please.",
              translation: "請給我一杯咖啡。",
            },
            {
              sentence: "Wash the cup.",
              translation: "洗杯子。",
            },
          ],
          usage_note: "杯具。",
          image_file: "cup.png",
        },
        {
          id: "n-37",
          term_zh: "醫生",
          related_terms: [
            {
              term_target: "doctor",
              pronunciation: ["/ˈdɑktɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "See a doctor.",
              translation: "看醫生。",
            },
            {
              sentence: "The doctor is busy.",
              translation: "醫生很忙。",
            },
            {
              sentence: "You should call a doctor.",
              translation: "你應該叫醫生。",
            },
          ],
          usage_note: "醫師。",
          image_file: "doctor.png",
        },
        {
          id: "n-38",
          term_zh: "警察",
          related_terms: [
            {
              term_target: "police",
              pronunciation: ["/pəˈlis/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Call police.",
              translation: "叫警察。",
            },
            {
              sentence: "The police are coming.",
              translation: "警察來了。",
            },
            {
              sentence: "Ask a police officer.",
              translation: "問警察。",
            },
          ],
          usage_note: "警察。",
          image_file: "police.png",
        },
        {
          id: "n-39",
          term_zh: "醫院",
          related_terms: [
            {
              term_target: "hospital",
              pronunciation: ["/ˈhɑspɪtəl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Go to hospital.",
              translation: "去醫院。",
            },
            {
              sentence: "The hospital is big.",
              translation: "這間醫院很大。",
            },
            {
              sentence: "He is in the hospital.",
              translation: "他在醫院裡。",
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
              term_target: "seat",
              pronunciation: ["/sit/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Take a seat.",
              translation: "請坐。",
            },
            {
              sentence: "Is this seat taken?",
              translation: "這位子有人坐嗎？",
            },
            {
              sentence: "Please have a seat.",
              translation: "請入座。",
            },
          ],
          usage_note: "位子。",
          image_file: "seat.png",
        },
        {
          id: "n-41",
          term_zh: "門",
          related_terms: [
            {
              term_target: "door",
              pronunciation: ["/dɔr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Open the door.",
              translation: "開門。",
            },
            {
              sentence: "Close the door, please.",
              translation: "請關門。",
            },
            {
              sentence: "Someone is at the door.",
              translation: "有人在門口。",
            },
          ],
          usage_note: "門戶。",
          image_file: "door.png",
        },
        {
          id: "n-42",
          term_zh: "房間",
          related_terms: [
            {
              term_target: "room",
              pronunciation: ["/rum/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "My room.",
              translation: "我房間。",
            },
            {
              sentence: "Clean your room.",
              translation: "打掃你的房間。",
            },
            {
              sentence: "This room is small.",
              translation: "這個房間很小。",
            },
          ],
          usage_note: "室內。",
          image_file: "room.png",
        },
        {
          id: "n-43",
          term_zh: "車站",
          related_terms: [
            {
              term_target: "station",
              pronunciation: ["/ˈsteɪʃən/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bus station.",
              translation: "公車站。",
            },
            {
              sentence: "Meet at the station.",
              translation: "在車站見。",
            },
            {
              sentence: "The station is crowded.",
              translation: "車站很擁擠。",
            },
          ],
          usage_note: "站點。",
          image_file: "station.png",
        },
        {
          id: "n-44",
          term_zh: "地鐵",
          related_terms: [
            {
              term_target: "subway",
              pronunciation: ["/ˈsʌbˌweɪ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "MRT station.",
              translation: "捷運站。",
            },
            {
              sentence: "Take the subway.",
              translation: "搭地鐵。",
            },
            {
              sentence: "The subway is fast.",
              translation: "地鐵很快。",
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
              term_target: "train",
              pronunciation: ["/treɪn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "By train.",
              translation: "搭火車。",
            },
            {
              sentence: "The train is leaving.",
              translation: "火車要開了。",
            },
            {
              sentence: "I missed the train.",
              translation: "我錯過了火車。",
            },
          ],
          usage_note: "列車。",
          image_file: "train.png",
        },
        {
          id: "n-46",
          term_zh: "機場",
          related_terms: [
            {
              term_target: "airport",
              pronunciation: ["/ˈɛrˌpɔrt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Go to airport.",
              translation: "去機場。",
            },
            {
              sentence: "Arrive at the airport.",
              translation: "抵達機場。",
            },
            {
              sentence: "The airport is far.",
              translation: "機場很遠。",
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
              term_target: "luggage",
              pronunciation: ["/ˈlʌgɪdʒ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Heavy luggage.",
              translation: "很重的行李。",
            },
            {
              sentence: "Check your luggage.",
              translation: "托運你的行李。",
            },
            {
              sentence: "Where is my luggage?",
              translation: "我的行李在哪裡？",
            },
          ],
          usage_note: "包裹。",
          image_file: "luggage.png",
        },
        {
          id: "n-48",
          term_zh: "地圖",
          related_terms: [
            { term_target: "map", pronunciation: ["/mæp/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Google map.",
              translation: "谷歌地圖。",
            },
            {
              sentence: "Look at the map.",
              translation: "看地圖。",
            },
            {
              sentence: "Do you have a map?",
              translation: "你有地圖嗎？",
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
              term_target: "counter",
              pronunciation: ["/ˈkaʊntɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "At the counter.",
              translation: "在櫃檯。",
            },
            {
              sentence: "Go to the front counter.",
              translation: "去前台。",
            },
            {
              sentence: "Pay at the counter.",
              translation: "在櫃檯結帳。",
            },
          ],
          usage_note: "服務台。",
          image_file: "counter.png",
        },
        {
          id: "n-50",
          term_zh: "大廳",
          related_terms: [
            {
              term_target: "lobby",
              pronunciation: ["/ˈlɑbi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Wait in lobby.",
              translation: "在大廳等。",
            },
            {
              sentence: "Meet in the lobby.",
              translation: "在大廳碰面。",
            },
            {
              sentence: "The hotel lobby is nice.",
              translation: "飯店大廳很不錯。",
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
              term_target: "reservation",
              pronunciation: ["/ˌrɛzɚˈveɪʃən/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Make a reservation.",
              translation: "做預約。",
            },
            {
              sentence: "I have a reservation.",
              translation: "我有預約。",
            },
            {
              sentence: "Cancel the reservation.",
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
              term_target: "check-in",
              pronunciation: ["/tʃɛk ɪn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Check-in time.",
              translation: "入住時間。",
            },
            {
              sentence: "We need to check-in.",
              translation: "我們需要辦理入住。",
            },
            {
              sentence: "Where is the check-in desk?",
              translation: "入住櫃台在哪裡？",
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
              term_target: "check-out",
              pronunciation: ["/tʃɛk aʊt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Check-out now.",
              translation: "現在退房。",
            },
            {
              sentence: "Check-out time is 11.",
              translation: "退房時間是11點。",
            },
            {
              sentence: "We already checked out.",
              translation: "我們已經退房了。",
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
              term_target: "drink",
              pronunciation: ["/drɪŋk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Cold drink.",
              translation: "冷飲。",
            },
            {
              sentence: "Buy a drink.",
              translation: "買飲料。",
            },
            {
              sentence: "What drink do you want?",
              translation: "你想要什麼飲料？",
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
              term_target: "menu",
              pronunciation: ["/ˈmɛnju/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Menu please.",
              translation: "請給菜單。",
            },
            {
              sentence: "Look at the menu.",
              translation: "看菜單。",
            },
            {
              sentence: "Can I see the menu?",
              translation: "我可以看菜單嗎？",
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
              term_target: "lunch",
              pronunciation: ["/lʌntʃ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Eat lunch.",
              translation: "吃午餐。",
            },
            {
              sentence: "Time for lunch.",
              translation: "午餐時間到了。",
            },
            {
              sentence: "What's for lunch?",
              translation: "午餐吃什麼？",
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
              term_target: "dinner",
              pronunciation: ["/ˈdɪnɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Eat dinner.",
              translation: "吃晚餐。",
            },
            {
              sentence: "Cook dinner.",
              translation: "煮晚餐。",
            },
            {
              sentence: "Dinner is ready.",
              translation: "晚餐好了。",
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
              term_target: "bill",
              pronunciation: ["/bɪl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Check the bill.",
              translation: "確認帳單。",
            },
            {
              sentence: "Can I have the bill?",
              translation: "可以給我帳單嗎？",
            },
            {
              sentence: "I will pay the bill.",
              translation: "我來付帳。",
            },
          ],
          usage_note: "買單。",
          image_file: "bill.png",
        },
        {
          id: "n-59",
          term_zh: "價錢",
          related_terms: [
            {
              term_target: "price",
              pronunciation: ["/praɪs/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Good price.",
              translation: "好價格。",
            },
            {
              sentence: "What is the price?",
              translation: "價格是多少？",
            },
            {
              sentence: "The price is high.",
              translation: "價格很高。",
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
              term_target: "receipt",
              pronunciation: ["/rɪˈsit/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Receipt please.",
              translation: "請給收據。",
            },
            {
              sentence: "Keep the receipt.",
              translation: "保留收據。",
            },
            {
              sentence: "Do you need a receipt?",
              translation: "你需要收據嗎？",
            },
          ],
          usage_note: "統一發票。",
          image_file: "receipt.png",
        },
        {
          id: "n-61",
          term_zh: "尺寸",
          related_terms: [
            {
              term_target: "size",
              pronunciation: ["/saɪz/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Big size.",
              translation: "大尺寸。",
            },
            {
              sentence: "What size do you wear?",
              translation: "你穿什麼尺寸？",
            },
            {
              sentence: "It is the wrong size.",
              translation: "尺寸不對。",
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
              term_target: "entrance",
              pronunciation: ["/ˈɛntrəns/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Main entrance.",
              translation: "正門入口。",
            },
            {
              sentence: "Where is the entrance?",
              translation: "入口在哪裡？",
            },
            {
              sentence: "No entrance.",
              translation: "禁止進入。",
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
              term_target: "exit",
              pronunciation: ["/ˈɛgzɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Exit here.",
              translation: "這裡出口。",
            },
            {
              sentence: "Emergency exit.",
              translation: "緊急出口。",
            },
            {
              sentence: "Where is the exit?",
              translation: "出口在哪裡？",
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
              term_target: "Taiwan",
              pronunciation: ["/taɪˈwɑn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I love Taiwan.",
              translation: "我愛台灣。",
            },
            {
              sentence: "Welcome to Taiwan.",
              translation: "歡迎來台灣。",
            },
            {
              sentence: "Taiwan is beautiful.",
              translation: "台灣很美。",
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
              term_target: "Taiwanese",
              pronunciation: ["/ˌtaɪwɑˈniz/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I am Taiwanese.",
              translation: "我是台灣人。",
            },
            {
              sentence: "She is Taiwanese.",
              translation: "她是台灣人。",
            },
            {
              sentence: "I like Taiwanese food.",
              translation: "我喜歡台灣食物。",
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
              term_target: "everything",
              pronunciation: ["/ˈɛvriˌθɪŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Everything is good.",
              translation: "一切都好。",
            },
            {
              sentence: "Everything is ready.",
              translation: "一切準備就緒。",
            },
            {
              sentence: "Thanks for everything.",
              translation: "感謝這一切。",
            },
          ],
          usage_note: "所有。",
          image_file: "everything.png",
        },
        {
          id: "n-67",
          term_zh: "錢包",
          related_terms: [
            {
              term_target: "wallet",
              pronunciation: ["/ˈwɑlɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Lost wallet.",
              translation: "掉了錢包。",
            },
            {
              sentence: "My wallet is empty.",
              translation: "我的錢包空了。",
            },
            {
              sentence: "I found a wallet.",
              translation: "我撿到一個錢包。",
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
              term_target: "ID",
              pronunciation: ["/aɪ di/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Show ID.",
              translation: "出示證件。",
            },
            {
              sentence: "Do you have ID?",
              translation: "你有身分證件嗎？",
            },
            {
              sentence: "Check the ID.",
              translation: "檢查身分證。",
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
              term_target: "passport",
              pronunciation: ["/ˈpæsˌpɔrt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Show passport.",
              translation: "出示護照。",
            },
            {
              sentence: "I lost my passport.",
              translation: "我弄丟了護照。",
            },
            {
              sentence: "Bring your passport.",
              translation: "帶上你的護照。",
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
              term_target: "restaurant",
              pronunciation: ["/ˈrɛstərənt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Nice restaurant.",
              translation: "好餐廳。",
            },
            {
              sentence: "Let's eat at a restaurant.",
              translation: "我們去餐廳吃吧。",
            },
            {
              sentence: "Which restaurant is good?",
              translation: "哪間餐廳好吃？",
            },
          ],
          usage_note: "食堂。",
          image_file: "restaurant.png",
        },
        {
          id: "n-71",
          term_zh: "飯店",
          related_terms: [
            {
              term_target: "hotel",
              pronunciation: ["/hoʊˈtɛl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Book a hotel.",
              translation: "訂飯店。",
            },
            {
              sentence: "Stay at a hotel.",
              translation: "住飯店。",
            },
            {
              sentence: "This hotel is nice.",
              translation: "這間飯店不錯。",
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
              term_target: "place",
              pronunciation: ["/pleɪs/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Good place.",
              translation: "好地方。",
            },
            {
              sentence: "Wrong place.",
              translation: "走錯地方。",
            },
            {
              sentence: "This is a famous place.",
              translation: "這是個有名的地方。",
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
              term_target: "clerk",
              pronunciation: ["/klɝk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Ask the clerk.",
              translation: "問店員。",
            },
            {
              sentence: "The clerk is helpful.",
              translation: "店員很熱心。",
            },
            {
              sentence: "I am a clerk.",
              translation: "我是店員。",
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
              term_target: "supermarket",
              pronunciation: ["/ˈsupɚˌmɑrkɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Go to supermarket.",
              translation: "去超市。",
            },
            {
              sentence: "Buy food at the supermarket.",
              translation: "在超市買食物。",
            },
            {
              sentence: "Is there a supermarket nearby?",
              translation: "這附近有超市嗎？",
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
              term_target: "platform",
              pronunciation: ["/ˈplætˌfɔrm/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Platform 1.",
              translation: "第一月台。",
            },
            {
              sentence: "Wait on the platform.",
              translation: "在月台等。",
            },
            {
              sentence: "Which platform is for Taipei?",
              translation: "去台北要在哪個月台？",
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
              term_target: "music",
              pronunciation: ["/ˈmjuzɪk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Listen to music.",
              translation: "聽音樂。",
            },
            {
              sentence: "I like pop music.",
              translation: "我喜歡流行音樂。",
            },
            {
              sentence: "The music is loud.",
              translation: "音樂很大聲。",
            },
          ],
          usage_note: "旋律。",
          image_file: "music.png",
        },
        {
          id: "n-77",
          term_zh: "雨",
          related_terms: [
            {
              term_target: "rain",
              pronunciation: ["/reɪn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "It is raining.",
              translation: "正在下雨。",
            },
            {
              sentence: "Heavy rain.",
              translation: "大雨。",
            },
            {
              sentence: "I don't like rain.",
              translation: "我不喜歡下雨。",
            },
          ],
          usage_note: "天氣現象。",
          image_file: "rain.png",
        },
        {
          id: "n-78",
          term_zh: "照片",
          related_terms: [
            {
              term_target: "picture",
              pronunciation: ["/ˈpɪktʃɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Take a picture.",
              translation: "拍張照。",
            },
            {
              sentence: "Look at this picture.",
              translation: "看這張照片。",
            },
            {
              sentence: "Can you take a picture of us?",
              translation: "可以幫我們拍張照嗎？",
            },
          ],
          usage_note: "相片/圖片。",
          image_file: "picture.png",
        },
        {
          id: "n-79",
          term_zh: "書",
          related_terms: [
            {
              term_target: "book",
              pronunciation: ["/bʊk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Read a book.",
              translation: "看書。",
            },
            {
              sentence: "Open the book.",
              translation: "打開書。",
            },
            {
              sentence: "This is my book.",
              translation: "這是我的書。",
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
              term_target: "toilet",
              pronunciation: ["/ˈtɔɪlɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Where is the toilet?",
              translation: "廁所在哪？",
            },
            {
              sentence: "Go to the toilet.",
              translation: "去上廁所。",
            },
            {
              sentence: "The toilet is clean.",
              translation: "廁所很乾淨。",
            },
          ],
          usage_note: "洗手間。",
          image_file: "toilet.png",
        },
        {
          id: "n-81",
          term_zh: "天氣",
          related_terms: [
            {
              term_target: "weather",
              pronunciation: ["/ˈwɛðɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Good weather.",
              translation: "好天氣。",
            },
            {
              sentence: "Bad weather.",
              translation: "壞天氣。",
            },
            {
              sentence: "How is the weather?",
              translation: "天氣如何？",
            },
          ],
          usage_note: "氣候。",
          image_file: "weather.png",
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
            { term_target: "now", pronunciation: ["/naʊ/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Do it now.",
              translation: "現在做。",
            },
            {
              sentence: "I am busy now.",
              translation: "我現在很忙。",
            },
            {
              sentence: "Where are you now?",
              translation: "你現在在哪裡？",
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
              term_target: "very",
              pronunciation: ["/ˈvɛri/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Very good.",
              translation: "非常好。",
            },
            {
              sentence: "Thank you very much.",
              translation: "非常謝謝你。",
            },
            {
              sentence: "It is very hot today.",
              translation: "今天非常熱。",
            },
          ],
          usage_note: "強調。",
          image_file: "very.png",
        },
        {
          id: "adv-03",
          term_zh: "真的",
          related_terms: [
            {
              term_target: "really",
              pronunciation: ["/ˈriəli/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Really?",
              translation: "真的嗎？",
            },
            {
              sentence: "I really like it.",
              translation: "我真的很喜歡它。",
            },
            {
              sentence: "She is really nice.",
              translation: "她人真的很好。",
            },
          ],
          usage_note: "確認或強調。",
          image_file: "really.png",
        },
        {
          id: "adv-04",
          term_zh: "好好地／很好地",
          related_terms: [
            {
              term_target: "well",
              pronunciation: ["/wɛl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Sleep well.",
              translation: "睡個好覺。",
            },
            {
              sentence: "Well done!",
              translation: "做得好！",
            },
            {
              sentence: "I don't feel well.",
              translation: "我身體不舒服。",
            },
          ],
          usage_note: "好地。",
          image_file: "well.png",
        },
        {
          id: "adv-05",
          term_zh: "經常",
          related_terms: [
            {
              term_target: "often",
              pronunciation: ["/ˈɔfən/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I often come here.",
              translation: "我常來這。",
            },
            {
              sentence: "How often do you exercise?",
              translation: "你多久運動一次？",
            },
            {
              sentence: "It rains often here.",
              translation: "這裡經常下雨。",
            },
          ],
          usage_note: "頻率。",
          image_file: "often.png",
        },
        {
          id: "adv-06",
          term_zh: "通常",
          related_terms: [
            {
              term_target: "usually",
              pronunciation: ["/ˈjuʒʊəli/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Usually at 6.",
              translation: "通常在六點。",
            },
            {
              sentence: "I usually get up at 7.",
              translation: "我通常7點起床。",
            },
            {
              sentence: "What do you usually do?",
              translation: "你通常做什麼？",
            },
          ],
          usage_note: "習慣。",
          image_file: "usually.png",
        },
        {
          id: "adv-07",
          term_zh: "已經",
          related_terms: [
            {
              term_target: "already",
              pronunciation: ["/ɔlˈrɛdi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Already done.",
              translation: "已經做好了。",
            },
            {
              sentence: "It is already 10 o'clock.",
              translation: "已經10點了。",
            },
            {
              sentence: "I have already eaten.",
              translation: "我已經吃過了。",
            },
          ],
          usage_note: "完成。",
          image_file: "already.png",
        },
        {
          id: "adv-08",
          term_zh: "只有",
          related_terms: [
            {
              term_target: "only",
              pronunciation: ["/ˈoʊnli/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Only one.",
              translation: "只有一個。",
            },
            {
              sentence: "I only have 100 dollars.",
              translation: "我只有100元。",
            },
            {
              sentence: "Only you can help me.",
              translation: "只有你能幫我。",
            },
          ],
          usage_note: "唯一。",
          image_file: "only.png",
        },
        {
          id: "adv-09",
          term_zh: "再次",
          related_terms: [
            {
              term_target: "again",
              pronunciation: ["/əˈgɛn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Try again.",
              translation: "再試一次。",
            },
            {
              sentence: "Say that again, please.",
              translation: "請再說一次。",
            },
            {
              sentence: "Never do that again.",
              translation: "別再那樣做了。",
            },
          ],
          usage_note: "重複。",
          image_file: "again.png",
        },
        {
          id: "adv-10",
          term_zh: "大約",
          related_terms: [
            {
              term_target: "about",
              pronunciation: ["/əˈbaʊt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "About 10 minutes.",
              translation: "大約10分鐘。",
            },
            {
              sentence: "It is about 5 kilometers.",
              translation: "大約5公里。",
            },
            {
              sentence: "It costs about $50.",
              translation: "大約50元。",
            },
          ],
          usage_note: "概數。",
          image_file: "about.png",
        },
        {
          id: "adv-11",
          term_zh: "一點點",
          related_terms: [
            {
              term_target: "a little",
              pronunciation: ["/ə ˈlɪtḷ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "A little spicy.",
              translation: "一點點辣。",
            },
            {
              sentence: "I am a little tired.",
              translation: "我有一點累。",
            },
            {
              sentence: "Just a little, please.",
              translation: "麻煩只要一點點。",
            },
          ],
          usage_note: "少量。",
          image_file: "a_little.png",
        },
        {
          id: "adv-12",
          term_zh: "也是",
          related_terms: [
            {
              term_target: "also",
              pronunciation: ["/ˈɔlsoʊ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I also like it.",
              translation: "我也喜歡它。",
            },
            {
              sentence: "She is also a teacher.",
              translation: "她也是一位老師。",
            },
            {
              sentence: "I am hungry, also thirsty.",
              translation: "我又餓又渴。",
            },
          ],
          usage_note: "也。",
          image_file: "also.png",
        },
        {
          id: "adv-13",
          term_zh: "或許",
          related_terms: [
            {
              term_target: "maybe",
              pronunciation: ["/ˈmeɪbi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Maybe later.",
              translation: "也許等下。",
            },
            {
              sentence: "Maybe you are right.",
              translation: "也許你是對的。",
            },
            {
              sentence: "Call me maybe.",
              translation: "或許打給我。",
            },
          ],
          usage_note: "不確定。",
          image_file: "maybe.png",
        },
        {
          id: "adv-14",
          term_zh: "之後",
          related_terms: [
            {
              term_target: "later",
              pronunciation: ["/ˈleɪtɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "See you later.",
              translation: "待會見。",
            },
            {
              sentence: "Call me later.",
              translation: "待會打給我。",
            },
            {
              sentence: "Two years later.",
              translation: "兩年後。",
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
              term_target: "soon",
              pronunciation: ["/sun/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "See you soon.",
              translation: "待會見。",
            },
            {
              sentence: "Get well soon.",
              translation: "早日康復。",
            },
            {
              sentence: "Coming soon.",
              translation: "即將到來。",
            },
          ],
          usage_note: "不久後。",
          image_file: "soon.png",
        },
        {
          id: "adv-16",
          term_zh: "一起",
          related_terms: [
            {
              term_target: "together",
              pronunciation: ["/təˈgɛðɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Go together.",
              translation: "一起去。",
            },
            {
              sentence: "Let's work together.",
              translation: "我們一起工作吧。",
            },
            {
              sentence: "We are together.",
              translation: "我們在一起。",
            },
          ],
          usage_note: "共同。",
          image_file: "together.png",
        },
        {
          id: "adv-17",
          term_zh: "仍然",
          related_terms: [
            {
              term_target: "still",
              pronunciation: ["/stɪl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Still here.",
              translation: "還在這裡。",
            },
            {
              sentence: "I am still hungry.",
              translation: "我還是很餓。",
            },
            {
              sentence: "Are you still working?",
              translation: "你還在工作嗎？",
            },
          ],
          usage_note: "持續。",
          image_file: "still.png",
        },
        {
          id: "adv-18",
          term_zh: "一般來說",
          related_terms: [
            {
              term_target: "normally",
              pronunciation: ["/ˈnɔrmḷi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Normally I walk.",
              translation: "一般我走路。",
            },
            {
              sentence: "Normally, it takes 1 hour.",
              translation: "一般來說要花一小時。",
            },
            {
              sentence: "The store is normally open.",
              translation: "這家店通常是開的。",
            },
          ],
          usage_note: "通常。",
          image_file: "normally.png",
        },
        {
          id: "adv-19",
          term_zh: "立刻",
          related_terms: [
            {
              term_target: "immediately",
              pronunciation: ["/ɪˈmidiətli/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Go immediately.",
              translation: "立刻去。",
            },
            {
              sentence: "Stop immediately.",
              translation: "立刻停止。",
            },
            {
              sentence: "I need help immediately.",
              translation: "我需要立刻的協助。",
            },
          ],
          usage_note: "馬上。",
          image_file: "immediately.png",
        },
        {
          id: "adv-20",
          term_zh: "也不",
          related_terms: [
            {
              term_target: "neither",
              pronunciation: ["/ˈniðɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Me neither.",
              translation: "我也不。",
            },
            {
              sentence: "Neither do I.",
              translation: "我也不。",
            },
            {
              sentence: "Neither one is good.",
              translation: "兩個都不好。",
            },
          ],
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
              term_target: "what",
              pronunciation: ["/hwɑt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "What is it?",
              translation: "它是什麼？",
            },
            {
              sentence: "What is your name?",
              translation: "你叫什麼名字？",
            },
            {
              sentence: "What do you want?",
              translation: "你想要什麼？",
            },
          ],
          usage_note: "問事物。",
          image_file: "what.png",
        },
        {
          id: "q-02",
          term_zh: "如何",
          related_terms: [
            { term_target: "how", pronunciation: ["/haʊ/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "How are you?",
              translation: "你好嗎？",
            },
            {
              sentence: "How do you do that?",
              translation: "你是怎麼做到的？",
            },
            {
              sentence: "How old are you?",
              translation: "你幾歲？",
            },
          ],
          usage_note: "問狀況。",
          image_file: "how_ara_you.png",
        },
        {
          id: "q-03",
          term_zh: "何時",
          related_terms: [
            {
              term_target: "when",
              pronunciation: ["/hwɛn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "When to go?",
              translation: "何時去？",
            },
            {
              sentence: "When is your birthday?",
              translation: "你的生日是什麼時候？",
            },
            {
              sentence: "When does the bus arrive?",
              translation: "公車什麼時候會到？",
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
              term_target: "where",
              pronunciation: ["/wɛr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Where are you?",
              translation: "你在哪？",
            },
            {
              sentence: "Where is the bathroom?",
              translation: "廁所在哪裡？",
            },
            {
              sentence: "Where do you live?",
              translation: "你住在哪裡？",
            },
          ],
          usage_note: "問地點。",
          image_file: "where.png",
        },
        {
          id: "q-05",
          term_zh: "誰",
          related_terms: [
            { term_target: "who", pronunciation: ["/hu/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Who is he?",
              translation: "他是誰？",
            },
            {
              sentence: "Who are you?",
              translation: "你是誰？",
            },
            {
              sentence: "Who is calling?",
              translation: "是誰打來的？",
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
              term_target: "why",
              pronunciation: ["/hwaɪ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Why?",
              translation: "為什麼？",
            },
            {
              sentence: "Why are you late?",
              translation: "你為什麼遲到？",
            },
            {
              sentence: "Why do you like it?",
              translation: "你為什麼喜歡它？",
            },
          ],
          usage_note: "問原因。",
          image_file: "why.png",
        },
        {
          id: "q-07",
          term_zh: "哪一個",
          related_terms: [
            {
              term_target: "which",
              pronunciation: ["/hwɪtʃ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Which one?",
              translation: "哪一個？",
            },
            {
              sentence: "Which color do you like?",
              translation: "你喜歡哪個顏色？",
            },
            {
              sentence: "Which way is north?",
              translation: "哪邊是北方？",
            },
          ],
          usage_note: "選擇。",
          image_file: "which.png",
        },
        {
          id: "q-08",
          term_zh: "多少（數量）",
          related_terms: [
            {
              term_target: "how much",
              pronunciation: ["/haʊ mʌtʃ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "How much?",
              translation: "多少錢？",
            },
            {
              sentence: "How much is this?",
              translation: "這個多少錢？",
            },
            {
              sentence: "How much water do you need?",
              translation: "你需要多少水？",
            },
          ],
          usage_note: "不可數。",
          image_file: "how_much.png",
        },
        {
          id: "q-09",
          term_zh: "多久（時間）",
          related_terms: [
            {
              term_target: "how long",
              pronunciation: ["/haʊ lɔŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "How long?",
              translation: "要多久？",
            },
            {
              sentence: "How long will it take?",
              translation: "這會花多久時間？",
            },
            {
              sentence: "How long have you lived here?",
              translation: "你在這裡住多久了？",
            },
          ],
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
            { term_target: "now", pronunciation: ["/naʊ/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Do it now.",
              translation: "現在做。",
            },
            {
              sentence: "Where are you now?",
              translation: "你現在在哪裡？",
            },
            {
              sentence: "I am busy right now.",
              translation: "我現在正忙。",
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
              term_target: "today",
              pronunciation: ["/təˈdeɪ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Not today.",
              translation: "不是今天。",
            },
            {
              sentence: "How are you today?",
              translation: "你今天好嗎？",
            },
            {
              sentence: "Today is Monday.",
              translation: "今天是星期一。",
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
              term_target: "tomorrow",
              pronunciation: ["/təˈmɔroʊ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "See you tomorrow.",
              translation: "明天見。",
            },
            {
              sentence: "Tomorrow is my birthday.",
              translation: "明天是我的生日。",
            },
            {
              sentence: "Are you free tomorrow?",
              translation: "你明天有空嗎？",
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
              term_target: "yesterday",
              pronunciation: ["/ˈjɛstɚdeɪ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Yesterday morning.",
              translation: "昨天早上。",
            },
            {
              sentence: "Where were you yesterday?",
              translation: "你昨天在哪裡？",
            },
            {
              sentence: "It rained yesterday.",
              translation: "昨天下雨了。",
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
              term_target: "here",
              pronunciation: ["/hɪr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Come here.",
              translation: "來這。",
            },
            {
              sentence: "I am here.",
              translation: "我在這。",
            },
            {
              sentence: "Is it near here?",
              translation: "離這裡近嗎？",
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
              term_target: "there",
              pronunciation: ["/ðɛr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Go there.",
              translation: "去那。",
            },
            {
              sentence: "Look over there.",
              translation: "看那邊。",
            },
            {
              sentence: "Who is there?",
              translation: "誰在那裡？",
            },
          ],
          usage_note: "遠處。",
          image_file: "there.png",
        },
        {
          id: "tp-07",
          term_zh: "天（日期）",
          related_terms: [
            { term_target: "day", pronunciation: ["/deɪ/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "One day.",
              translation: "一天。",
            },
            {
              sentence: "Have a nice day.",
              translation: "祝你有美好的一天。",
            },
            {
              sentence: "Every day.",
              translation: "每一天。",
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
              term_target: "year",
              pronunciation: ["/jɪr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "This year.",
              translation: "今年。",
            },
            {
              sentence: "Happy New Year.",
              translation: "新年快樂。",
            },
            {
              sentence: "Last year.",
              translation: "去年。",
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
              term_target: "month",
              pronunciation: ["/mʌnθ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "This month.",
              translation: "這個月。",
            },
            {
              sentence: "Next month.",
              translation: "下個月。",
            },
            {
              sentence: "12 months in a year.",
              translation: "一年有12個月。",
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
              term_target: "week",
              pronunciation: ["/wik/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Next week.",
              translation: "下週。",
            },
            {
              sentence: "Once a week.",
              translation: "一週一次。",
            },
            {
              sentence: "Have a good week.",
              translation: "祝你這週愉快。",
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
              term_target: "morning",
              pronunciation: ["/ˈmɔrnɪŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "In the morning.",
              translation: "在早上。",
            },
            {
              sentence: "Good morning.",
              translation: "早安。",
            },
            {
              sentence: "I run in the morning.",
              translation: "我早上跑步。",
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
              term_target: "afternoon",
              pronunciation: ["/ˌæftɚˈnun/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Good afternoon.",
              translation: "午安。",
            },
            {
              sentence: "See you this afternoon.",
              translation: "今天下午見。",
            },
            {
              sentence: "Sunday afternoon.",
              translation: "星期天下午。",
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
              term_target: "evening",
              pronunciation: ["/ˈivnɪŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Good evening.",
              translation: "晚安(傍晚見面)。",
            },
            {
              sentence: "Are you free this evening?",
              translation: "你今晚有空嗎？",
            },
            {
              sentence: "I watch TV in the evening.",
              translation: "我晚上看電視。",
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
              term_target: "noon",
              pronunciation: ["/nun/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "At noon.",
              translation: "在中午。",
            },
            {
              sentence: "We eat lunch at noon.",
              translation: "我們中午吃午餐。",
            },
            {
              sentence: "Before noon.",
              translation: "中午之前。",
            },
          ],
          usage_note: "12點。",
          image_file: "noon.png",
        },
        {
          id: "tp-15",
          term_zh: "前面",
          related_terms: [
            {
              term_target: "in front of",
              pronunciation: ["/ɪn frʌnt ʌv/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "In front of you.",
              translation: "在你前面。",
            },
            {
              sentence: "Wait in front of the station.",
              translation: "在車站前等。",
            },
            {
              sentence: "Don't stand in front of me.",
              translation: "不要站在我前面。",
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
              term_target: "behind",
              pronunciation: ["/bɪˈhaɪnd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Behind the door.",
              translation: "門後。",
            },
            {
              sentence: "Look behind you.",
              translation: "看你後面。",
            },
            {
              sentence: "Stay behind the yellow line.",
              translation: "待在黃線後面。",
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
              term_target: "left",
              pronunciation: ["/lɛft/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Turn left.",
              translation: "左轉。",
            },
            {
              sentence: "On your left.",
              translation: "在你的左邊。",
            },
            {
              sentence: "Look to the left.",
              translation: "向左看。",
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
              term_target: "right",
              pronunciation: ["/raɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Turn right.",
              translation: "右轉。",
            },
            {
              sentence: "On the right side.",
              translation: "在右邊。",
            },
            {
              sentence: "Use your right hand.",
              translation: "用你的右手。",
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
              term_target: "beside / next to",
              pronunciation: ["/bɪˈsaɪd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Sit beside me.",
              translation: "坐我旁邊。",
            },
            {
              sentence: "Next to the bank.",
              translation: "在銀行旁邊。",
            },
            {
              sentence: "Who is sitting next to you?",
              translation: "誰坐在你旁邊？",
            },
          ],
          usage_note: "側邊。",
          image_file: "beside.png",
        },
        {
          id: "tp-20",
          term_zh: "對面",
          related_terms: [
            {
              term_target: "across from",
              pronunciation: ["/əˈkrɔs frʌm/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Across from bank.",
              translation: "銀行對面。",
            },
            {
              sentence: "He sits across from me.",
              translation: "他坐在我對面。",
            },
            {
              sentence: "The store is across the street.",
              translation: "商店在街對面。",
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
              term_target: "spring",
              pronunciation: ["/sprɪŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Spring is here.",
              translation: "春天來了。",
            },
            {
              sentence: "I like spring.",
              translation: "我喜歡春天。",
            },
            {
              sentence: "Flowers bloom in spring.",
              translation: "花朵在春天盛開。",
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
              term_target: "summer",
              pronunciation: ["/ˈsʌmɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Hot summer.",
              translation: "炎熱的夏天。",
            },
            {
              sentence: "I go swimming in summer.",
              translation: "我夏天去游泳。",
            },
            {
              sentence: "Summer vacation.",
              translation: "暑假。",
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
              term_target: "autumn / fall",
              pronunciation: ["/ˈɔtəm/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Cool autumn.",
              translation: "涼爽的秋天。",
            },
            {
              sentence: "I like autumn leaves.",
              translation: "我喜歡秋天的落葉。",
            },
            {
              sentence: "Fall is coming.",
              translation: "秋天快到了。",
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
              term_target: "winter",
              pronunciation: ["/ˈwɪntɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Cold winter.",
              translation: "寒冷的冬天。",
            },
            {
              sentence: "Do you like winter?",
              translation: "你喜歡冬天嗎？",
            },
            {
              sentence: "It snows in winter.",
              translation: "冬天下雪。",
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
            { term_target: "or", pronunciation: ["/ɔr/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Tea or coffee?",
              translation: "茶還是咖啡？",
            },
            {
              sentence: "Do you want this or that?",
              translation: "你想要這個還是那個？",
            },
            {
              sentence: "Is he American or British?",
              translation: "他是美國人還是英國人？",
            },
          ],
          usage_note: "二選一。",
          image_file: "or.png",
        },
        {
          id: "conj-02",
          term_zh: "但是",
          related_terms: [
            { term_target: "but", pronunciation: ["/bʌt/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "I like it, but it's expensive.",
              translation: "我喜歡它，但是它很貴。",
            },
            {
              sentence: "I want to go, but I can't.",
              translation: "我想去，但是我不能去。",
            },
            {
              sentence: "He is small but strong.",
              translation: "他個子小但很強壯。",
            },
          ],
          usage_note: "語氣轉折。",
          image_file: "but.png",
        },
        {
          id: "conj-03",
          term_zh: "所以",
          related_terms: [
            { term_target: "so", pronunciation: ["/soʊ/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "I was hungry, so I ate.",
              translation: "我餓了，所以我吃了。",
            },
            {
              sentence: "It is raining, so take an umbrella.",
              translation: "正在下雨，所以帶把傘吧。",
            },
            {
              sentence: "I was tired, so I went to bed.",
              translation: "我累了，所以我去睡覺。",
            },
          ],
          usage_note: "表示結果。",
          image_file: "so.png",
        },
        {
          id: "conj-04",
          term_zh: "以及／和",
          related_terms: [
            { term_target: "and", pronunciation: ["/ænd/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "You and me.",
              translation: "你和我。",
            },
            {
              sentence: "Black and white.",
              translation: "黑色和白色。",
            },
            {
              sentence: "She is smart and beautiful.",
              translation: "她既聰明又漂亮。",
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
              term_target: "because",
              pronunciation: ["/bɪˈkɔz/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I eat because I am hungry.",
              translation: "我吃東西是因為我餓了。",
            },
            {
              sentence: "I cannot go because I am busy.",
              translation: "我不能去，因為我很忙。",
            },
            {
              sentence: "She smiled because she was happy.",
              translation: "她笑了，因為她很開心。",
            },
          ],
          usage_note: "表示原因。",
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
              term_target: "with",
              pronunciation: ["/wɪθ/"],
              specific_note: "伴隨",
            },
          ],
          examples: [
            {
              sentence: "Come with me.",
              translation: "跟我來。",
            },
            {
              sentence: "I live with my family.",
              translation: "我跟家人住。",
            },
            {
              sentence: "Coffee with milk.",
              translation: "加牛奶的咖啡。",
            },
          ],
          usage_note: "與某人/某物在一起。",
          image_file: "with.png",
        },
        {
          id: "prep-02",
          term_zh: "從...",
          related_terms: [
            {
              term_target: "from",
              pronunciation: ["/frʌm/"],
              specific_note: "來源",
            },
          ],
          examples: [
            {
              sentence: "I am from Taiwan.",
              translation: "我來自台灣。",
            },
            {
              sentence: "The store is open from 9 to 5.",
              translation: "商店從9點開到5點。",
            },
            {
              sentence: "It is far from here.",
              translation: "離這裡很遠。",
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
              term_target: "for",
              pronunciation: ["/fɔr/"],
              specific_note: "目的",
            },
          ],
          examples: [
            {
              sentence: "This is for you.",
              translation: "這是給你的。",
            },
            {
              sentence: "Thank you for your help.",
              translation: "謝謝你的幫忙。",
            },
            {
              sentence: "I am looking for my keys.",
              translation: "我在找我的鑰匙。",
            },
          ],
          usage_note: "對象/用途。",
          image_file: "for.png",
        },
        {
          id: "prep-04",
          term_zh: "...的",
          related_terms: [
            {
              term_target: "of",
              pronunciation: ["/ʌv/"],
              specific_note: "所有格",
            },
          ],
          examples: [
            {
              sentence: "A cup of tea.",
              translation: "一杯茶。",
            },
            {
              sentence: "One of my friends.",
              translation: "我的一個朋友。",
            },
            {
              sentence: "The color of the car.",
              translation: "車子的顏色。",
            },
          ],
          usage_note: "所屬/關聯。",
          image_file: "of.png",
        },
        {
          id: "prep-05",
          term_zh: "在... (場所)",
          related_terms: [
            {
              term_target: "at",
              pronunciation: ["/æt/"],
              specific_note: "地點(小)",
            },
            {
              term_target: "in",
              pronunciation: ["/ɪn/"],
              specific_note: "空間內/大城市",
            },
          ],
          examples: [
            {
              sentence: "I am at home.",
              translation: "我在家。",
            },
            {
              sentence: "She is in the room.",
              translation: "她在房間裡。",
            },
            {
              sentence: "See you at 5 o'clock.",
              translation: "5點見 (at也用於時間)。",
            },
          ],
          usage_note: "At 指點，In 指空間內部。",
          image_file: "at_in.png",
        },
        {
          id: "prep-06",
          term_zh: "往... (去)",
          related_terms: [
            {
              term_target: "to",
              pronunciation: ["/tu/"],
              specific_note: "方向",
            },
          ],
          examples: [
            {
              sentence: "Go to school.",
              translation: "去學校。",
            },
            {
              sentence: "Happy Birthday to you.",
              translation: "祝你生日快樂。",
            },
            {
              sentence: "Give it to me.",
              translation: "把它給我。",
            },
          ],
          usage_note: "目的地/方向。",
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
              term_target: "zero",
              pronunciation: ["/ˈzɪroʊ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Zero point.",
              translation: "零分。",
            },
            {
              sentence: "It is zero degrees today.",
              translation: "今天零度。",
            },
            {
              sentence: "I have zero experience.",
              translation: "我毫無經驗。",
            },
          ],
          usage_note: "零。",
          image_file: "zero.png",
        },
        {
          id: "num-1",
          term_zh: "1",
          related_terms: [
            { term_target: "one", pronunciation: ["/wʌn/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "One apple.",
              translation: "一顆蘋果。",
            },
            {
              sentence: "One ticket, please.",
              translation: "請給我一張票。",
            },
            {
              sentence: "I have one brother.",
              translation: "我有一個兄弟。",
            },
          ],
          usage_note: "一。",
          image_file: "one.png",
        },
        {
          id: "num-2",
          term_zh: "2",
          related_terms: [
            { term_target: "two", pronunciation: ["/tu/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Two days.",
              translation: "兩天。",
            },
            {
              sentence: "Table for two, please.",
              translation: "請給我們兩人的位子。",
            },
            {
              sentence: "I have two cats.",
              translation: "我有兩隻貓。",
            },
          ],
          usage_note: "二。",
          image_file: "two.png",
        },
        {
          id: "num-3",
          term_zh: "3",
          related_terms: [
            {
              term_target: "three",
              pronunciation: ["/θri/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Three people.",
              translation: "三人。",
            },
            {
              sentence: "See you in three minutes.",
              translation: "三分鐘後見。",
            },
            {
              sentence: "I bought three books.",
              translation: "我買了三本書。",
            },
          ],
          usage_note: "咬舌音。",
          image_file: "three.png",
        },
        {
          id: "num-4",
          term_zh: "4",
          related_terms: [
            {
              term_target: "four",
              pronunciation: ["/fɔr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Four seasons.",
              translation: "四季。",
            },
            {
              sentence: "Four o'clock.",
              translation: "四點鐘。",
            },
            {
              sentence: "Table number four.",
              translation: "四號桌。",
            },
          ],
          usage_note: "四。",
          image_file: "four.png",
        },
        {
          id: "num-5",
          term_zh: "5",
          related_terms: [
            {
              term_target: "five",
              pronunciation: ["/faɪv/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Five stars.",
              translation: "五星。",
            },
            {
              sentence: "Give me five minutes.",
              translation: "給我五分鐘。",
            },
            {
              sentence: "She is five years old.",
              translation: "她五歲。",
            },
          ],
          usage_note: "五。",
          image_file: "five.png",
        },
        {
          id: "num-6",
          term_zh: "6",
          related_terms: [
            {
              term_target: "six",
              pronunciation: ["/sɪks/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Six o'clock.",
              translation: "六點。",
            },
            {
              sentence: "There are six eggs.",
              translation: "有六顆蛋。",
            },
            {
              sentence: "I wake up at six.",
              translation: "我六點起床。",
            },
          ],
          usage_note: "六。",
          image_file: "six.png",
        },
        {
          id: "num-7",
          term_zh: "7",
          related_terms: [
            {
              term_target: "seven",
              pronunciation: ["/ˈsɛvən/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Seven days.",
              translation: "七天。",
            },
            {
              sentence: "Seven-Eleven.",
              translation: "7-11便利商店。",
            },
            {
              sentence: "Lucky seven.",
              translation: "幸運數字七。",
            },
          ],
          usage_note: "七。",
          image_file: "seven.png",
        },
        {
          id: "num-8",
          term_zh: "8",
          related_terms: [
            {
              term_target: "eight",
              pronunciation: ["/eɪt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Eight years old.",
              translation: "八歲。",
            },
            {
              sentence: "See you at eight.",
              translation: "八點見。",
            },
            {
              sentence: "I slept for eight hours.",
              translation: "我睡了八個小時。",
            },
          ],
          usage_note: "八。",
          image_file: "eight.png",
        },
        {
          id: "num-9",
          term_zh: "9",
          related_terms: [
            {
              term_target: "nine",
              pronunciation: ["/naɪn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Nine PM.",
              translation: "晚上九點。",
            },
            {
              sentence: "Nine dollars.",
              translation: "九塊錢。",
            },
            {
              sentence: "Number nine.",
              translation: "九號。",
            },
          ],
          usage_note: "九。",
          image_file: "nine.png",
        },
        {
          id: "num-10",
          term_zh: "10",
          related_terms: [
            { term_target: "ten", pronunciation: ["/tɛn/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Ten dollars.",
              translation: "十元。",
            },
            {
              sentence: "Count to ten.",
              translation: "數到十。",
            },
            {
              sentence: "Top ten.",
              translation: "前十名。",
            },
          ],
          usage_note: "十。",
          image_file: "ten.png",
        },
        {
          id: "num-11",
          term_zh: "11",
          related_terms: [
            {
              term_target: "eleven",
              pronunciation: ["/ɪˈlɛvən/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Eleven o'clock.",
              translation: "11點。",
            },
            {
              sentence: "Chapter eleven.",
              translation: "第11章。",
            },
            {
              sentence: "There are eleven players.",
              translation: "有11名球員。",
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
              term_target: "twelve",
              pronunciation: ["/twɛlv/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Twelve months.",
              translation: "12個月。",
            },
            {
              sentence: "It is twelve noon.",
              translation: "現在是中午12點。",
            },
            {
              sentence: "A box of twelve.",
              translation: "一盒12個。",
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
              term_target: "fifteen",
              pronunciation: ["/fɪfˈtin/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Fifteen minutes.",
              translation: "15分鐘。",
            },
            {
              sentence: "She is fifteen.",
              translation: "她15歲。",
            },
            {
              sentence: "Room fifteen.",
              translation: "15號房。",
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
              term_target: "twenty",
              pronunciation: ["/ˈtwɛnti/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Twenty minutes.",
              translation: "20分鐘。",
            },
            {
              sentence: "Twenty dollars.",
              translation: "20元。",
            },
            {
              sentence: "I am twenty years old.",
              translation: "我20歲。",
            },
          ],
          usage_note: "二十。",
          image_file: "twenty.png",
        },
        {
          id: "num-50",
          term_zh: "50",
          related_terms: [
            {
              term_target: "fifty",
              pronunciation: ["/ˈfɪfti/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Fifty percent.",
              translation: "50%。",
            },
            {
              sentence: "Fifty people.",
              translation: "50個人。",
            },
            {
              sentence: "It costs fifty dollars.",
              translation: "這個要50元。",
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
              term_target: "one hundred",
              pronunciation: ["/wʌn ˈhʌndrəd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "100 points.",
              translation: "一百分。",
            },
            {
              sentence: "One hundred percent.",
              translation: "百分之百。",
            },
            {
              sentence: "More than one hundred.",
              translation: "超過一百個。",
            },
          ],
          usage_note: "百。",
          image_file: "hundred.png",
        },
        {
          id: "num-1000",
          term_zh: "1000",
          related_terms: [
            {
              term_target: "one thousand",
              pronunciation: ["/wʌn ˈθaʊzənd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "1000 years.",
              translation: "一千年。",
            },
            {
              sentence: "One thousand dollars.",
              translation: "一千元。",
            },
            {
              sentence: "A thousand thanks.",
              translation: "非常感謝（一千個謝謝）。",
            },
          ],
          usage_note: "千。",
          image_file: "thousand.png",
        },
        {
          id: "num-10000",
          term_zh: "10000",
          related_terms: [
            {
              term_target: "ten thousand",
              pronunciation: ["/tɛn ˈθaʊzənd/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Ten thousand dollars.",
              translation: "一萬元。",
            },
            {
              sentence: "Ten thousand steps.",
              translation: "一萬步。",
            },
            {
              sentence: "Over ten thousand fans.",
              translation: "超過一萬名粉絲。",
            },
          ],
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
              term_target: "I am ～",
              pronunciation: ["/aɪ æm/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I am happy.",
              translation: "我很快樂。",
            },
            {
              sentence: "I am tired.",
              translation: "我很累。",
            },
            {
              sentence: "I am a student.",
              translation: "我是學生。",
            },
          ],
          usage_note: "狀態。",
          image_file: "i_am.png",
        },
        {
          id: "g-02",
          term_zh: "我的名字叫～",
          related_terms: [
            {
              term_target: "My name is ～",
              pronunciation: ["/maɪ neɪm ɪz/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "My name is John.",
              translation: "我的名字叫約翰。",
            },
            {
              sentence: "My name is Mary.",
              translation: "我的名字叫瑪麗。",
            },
            {
              sentence: "Hello, my name is Tom.",
              translation: "哈囉，我的名字叫湯姆。",
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
              term_target: "I (verb)",
              pronunciation: ["/aɪ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I work here.",
              translation: "我在這裡工作。",
            },
            {
              sentence: "I play tennis.",
              translation: "我打網球。",
            },
            {
              sentence: "I love music.",
              translation: "我熱愛音樂。",
            },
          ],
          usage_note: "一般動作。",
          image_file: "i_do.png",
        },
        {
          id: "g-04",
          term_zh: "我正在做～",
          related_terms: [
            {
              term_target: "I am ～ing",
              pronunciation: ["/aɪ æm ...ɪŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I am eating.",
              translation: "我正在吃。",
            },
            {
              sentence: "I am working now.",
              translation: "我現在正在工作。",
            },
            {
              sentence: "I am waiting for you.",
              translation: "我正在等你。",
            },
          ],
          usage_note: "進行式。",
          image_file: "ing.png",
        },
        {
          id: "g-05",
          term_zh: "我能夠～",
          related_terms: [
            {
              term_target: "I can ～",
              pronunciation: ["/aɪ kæn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I can swim.",
              translation: "我會游泳。",
            },
            {
              sentence: "I can speak English.",
              translation: "我會說英文。",
            },
            {
              sentence: "I can help you.",
              translation: "我可以幫你。",
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
              term_target: "I like ～ing",
              pronunciation: ["/aɪ laɪk ...ɪŋ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I like reading.",
              translation: "我喜歡閱讀。",
            },
            {
              sentence: "I like traveling.",
              translation: "我喜歡旅行。",
            },
            {
              sentence: "I like eating pizza.",
              translation: "我喜歡吃披薩。",
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
              term_target: "I was ～",
              pronunciation: ["/aɪ wʌz/"],
              specific_note: "狀態",
            },
          ],
          examples: [
            {
              sentence: "I was a student.",
              translation: "我曾經是學生。",
            },
            {
              sentence: "I was busy yesterday.",
              translation: "我昨天很忙。",
            },
            {
              sentence: "I was at home.",
              translation: "我當時在家。",
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
              term_target: "I (verb)ed",
              pronunciation: ["/aɪ ...d/"],
              specific_note: "動作",
            },
          ],
          examples: [
            {
              sentence: "I walked home.",
              translation: "我走路回家。",
            },
            {
              sentence: "I watched a movie.",
              translation: "我看了一部電影。",
            },
            {
              sentence: "I played basketball.",
              translation: "我打了籃球。",
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
              term_target: "I have (pp)",
              pronunciation: ["/aɪ hæv/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I have finished.",
              translation: "我已經完成了。",
            },
            {
              sentence: "I have lost my keys.",
              translation: "我弄丟了鑰匙。",
            },
            {
              sentence: "I have seen that movie.",
              translation: "我看過那部電影了。",
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
              term_target: "I have been to ～",
              pronunciation: ["/aɪ hæv bɪn tu/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I have been to Japan.",
              translation: "我曾經去過日本。",
            },
            {
              sentence: "I have been to Taipei 101.",
              translation: "我去過台北101。",
            },
            {
              sentence: "I have been there twice.",
              translation: "我去過那裡兩次。",
            },
          ],
          usage_note: "經驗。",
          image_file: "have_been_to.png",
        },
        {
          id: "g-11",
          term_zh: "我打算～",
          related_terms: [
            {
              term_target: "I will ～",
              pronunciation: ["/aɪ wɪl/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I will go.",
              translation: "我將要去。",
            },
            {
              sentence: "I will call you.",
              translation: "我會打電話給你。",
            },
            {
              sentence: "I will do my best.",
              translation: "我會盡力。",
            },
          ],
          usage_note: "未來式。",
          image_file: "i_will.png",
        },
        {
          id: "g-12",
          term_zh: "你是～嗎？",
          related_terms: [
            {
              term_target: "Are you ～ ?",
              pronunciation: ["/ɑr ju/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Are you ready?",
              translation: "準備好了嗎？",
            },
            {
              sentence: "Are you hungry?",
              translation: "你餓了嗎？",
            },
            {
              sentence: "Are you a student?",
              translation: "你是學生嗎？",
            },
          ],
          usage_note: "問狀態。",
          image_file: "are_you.png",
        },
        {
          id: "g-13",
          term_zh: "你在做～嗎？",
          related_terms: [
            {
              term_target: "Do you ～ ?",
              pronunciation: ["/du ju/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Do you eat spicy food?",
              translation: "你吃辣嗎？",
            },
            {
              sentence: "Do you like music?",
              translation: "你喜歡音樂嗎？",
            },
            {
              sentence: "Do you understand?",
              translation: "你懂嗎？",
            },
          ],
          usage_note: "問習慣或意願。",
          image_file: "do_you.png",
        },
        {
          id: "g-14",
          term_zh: "你曾經～嗎？",
          related_terms: [
            {
              term_target: "Have you ever ～ ?",
              pronunciation: ["/hæv ju ˈɛvɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Have you ever seen snow?",
              translation: "你曾經看過雪嗎？",
            },
            {
              sentence: "Have you ever been to Taiwan?",
              translation: "你曾經去過台灣嗎？",
            },
            {
              sentence: "Have you ever eaten stinky tofu?",
              translation: "你曾經吃過臭豆腐嗎？",
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
              term_target: "When do you ～ ?",
              pronunciation: ["/hwɛn du ju/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "When do you sleep?",
              translation: "你何時睡覺？",
            },
            {
              sentence: "When do you start work?",
              translation: "你何時開始工作？",
            },
            {
              sentence: "When do you exercise?",
              translation: "你何時運動？",
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
              term_target: "When do you go to ～ ?",
              pronunciation: ["/hwɛn du ju goʊ tu/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "When do you go to school?",
              translation: "你何時去學校？",
            },
            {
              sentence: "When do you go to work?",
              translation: "你何時去工作？",
            },
            {
              sentence: "When do you go home?",
              translation: "你何時回家？",
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
              term_target: "Where do you ～ ?",
              pronunciation: ["/wɛr du ju/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Where do you live?",
              translation: "你住哪裡？",
            },
            {
              sentence: "Where do you work?",
              translation: "你在哪裡工作？",
            },
            {
              sentence: "Where do you buy food?",
              translation: "你在哪裡買食物？",
            },
          ],
          usage_note: "問地點。",
          image_file: "where_do_you.png",
        },
        {
          id: "g-18",
          term_zh: "你如何做（某事）？",
          related_terms: [
            {
              term_target: "How do you ～ ?",
              pronunciation: ["/haʊ du ju/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "How do you cook?",
              translation: "你怎麼煮？",
            },
            {
              sentence: "How do you spell your name?",
              translation: "你的名字怎麼拼？",
            },
            {
              sentence: "How do you feel?",
              translation: "你覺得如何？",
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
              term_target: "How do you go to ～ ?",
              pronunciation: ["/haʊ du ju goʊ tu/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "How do you go to school?",
              translation: "你怎麼去學校？",
            },
            {
              sentence: "How do you go to the airport?",
              translation: "你怎麼去機場？",
            },
            {
              sentence: "How do you go to work?",
              translation: "你怎麼去工作？",
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
              term_target: "I am not ～",
              pronunciation: ["/aɪ æm nɑt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I am not tired.",
              translation: "我不累。",
            },
            {
              sentence: "I am not ready.",
              translation: "我還沒準備好。",
            },
            {
              sentence: "I am not a doctor.",
              translation: "我不是醫生。",
            },
          ],
          usage_note: "否定狀態。",
          image_file: "i_am_not.png",
        },
        {
          id: "g-21",
          term_zh: "我不做～",
          related_terms: [
            {
              term_target: "I don't ～",
              pronunciation: ["/aɪ doʊnt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I don't smoke.",
              translation: "我不抽菸。",
            },
            {
              sentence: "I don't know.",
              translation: "我不知道。",
            },
            {
              sentence: "I don't understand.",
              translation: "我不懂。",
            },
          ],
          usage_note: "否定動作。",
          image_file: "i_dont_understand.png",
        },
        {
          id: "g-22",
          term_zh: "我不能～",
          related_terms: [
            {
              term_target: "I can't ～",
              pronunciation: ["/aɪ kænt/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I can't swim.",
              translation: "我不會游泳。",
            },
            {
              sentence: "I can't hear you.",
              translation: "我聽不到你說話。",
            },
            {
              sentence: "I can't go today.",
              translation: "我今天不能去。",
            },
          ],
          usage_note: "否定能力。",
          image_file: "i_cant.png",
        },
        {
          id: "g-23",
          term_zh: "我未曾～",
          related_terms: [
            {
              term_target: "I have never ～",
              pronunciation: ["/aɪ hæv ˈnɛvɚ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I have never eaten this.",
              translation: "我沒吃過這個。",
            },
            {
              sentence: "I have never been there.",
              translation: "我從沒去過那裡。",
            },
            {
              sentence: "I have never seen that.",
              translation: "我從沒看過那個。",
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
              term_target: "I don't have to ～",
              pronunciation: ["/aɪ doʊnt hæv tu/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I don't have to go.",
              translation: "我不必去。",
            },
            {
              sentence: "I don't have to work today.",
              translation: "我今天不必工作。",
            },
            {
              sentence: "I don't have to pay.",
              translation: "我不必付錢。",
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
              term_target: "If ..., ...",
              pronunciation: ["/ɪf/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "If you like, take it.",
              translation: "如果你喜歡，拿去吧。",
            },
            {
              sentence: "If it rains, stay home.",
              translation: "如果下雨，就待在家。",
            },
            {
              sentence: "If you are tired, sleep.",
              translation: "如果你累了，就睡覺。",
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
              term_target: "When ..., ...",
              pronunciation: ["/hwɛn/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "When I eat, I am happy.",
              translation: "當我吃東西時，我很開心。",
            },
            {
              sentence: "When you arrive, call me.",
              translation: "當你到達時，打給我。",
            },
            {
              sentence: "When I have time, I read.",
              translation: "當我有空時，我會看書。",
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
              term_target: "Can you ～ ?",
              pronunciation: ["/kæn ju/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Can you help me?",
              translation: "請你幫我好嗎？",
            },
            {
              sentence: "Can you open the door?",
              translation: "你可以開門嗎？",
            },
            {
              sentence: "Can you wait a moment?",
              translation: "你可以等一下嗎？",
            },
          ],
          usage_note: "請求。",
          image_file: "can_you.png",
        },
        {
          id: "g-28",
          term_zh: "我們來做～吧！",
          related_terms: [
            {
              term_target: "Let's ～",
              pronunciation: ["/lɛts/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Let's go.",
              translation: "我們走吧。",
            },
            {
              sentence: "Let's eat.",
              translation: "我們吃吧。",
            },
            {
              sentence: "Let's take a break.",
              translation: "我們休息一下吧。",
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
              term_target: "I think ～",
              pronunciation: ["/aɪ θɪŋk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I think it is good.",
              translation: "我認為這很好。",
            },
            {
              sentence: "I think you are right.",
              translation: "我認為你是對的。",
            },
            {
              sentence: "I think so too.",
              translation: "我也這麼認為。",
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
              term_target: "I want to ～",
              pronunciation: ["/aɪ wɑnt tu/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I want to go.",
              translation: "我想走。",
            },
            {
              sentence: "I want to buy this.",
              translation: "我想買這個。",
            },
            {
              sentence: "I want to see a movie.",
              translation: "我想看電影。",
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
              term_target: "I have to ～",
              pronunciation: ["/aɪ hæv tu/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I have to work.",
              translation: "我必須工作。",
            },
            {
              sentence: "I have to go now.",
              translation: "我現在得走了。",
            },
            {
              sentence: "I have to study.",
              translation: "我必須讀書。",
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
              term_target: "It is ... to ～",
              pronunciation: ["/ɪt ɪz ... tu/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "It is good to eat.",
              translation: "吃東西是很好的。",
            },
            {
              sentence: "It is nice to meet you.",
              translation: "很高興認識你。",
            },
            {
              sentence: "It is important to learn.",
              translation: "學習是很重要的。",
            },
          ],
          usage_note: "描述動作。",
          image_file: "it_is_to.png",
        },
        {
          id: "g-33",
          term_zh: "你可以幫我…嗎？",
          related_terms: [
            {
              term_target: "Can you help me ... ?",
              pronunciation: ["/kæn ju hɛlp mi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Can you help me clean?",
              translation: "你可以幫我打掃嗎？",
            },
            {
              sentence: "Can you help me with this?",
              translation: "你可以幫我弄這個嗎？",
            },
            {
              sentence: "Can you help me find it?",
              translation: "你可以幫我找它嗎？",
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
              term_target: "Can I ... ?",
              pronunciation: ["/kæn aɪ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Can I go?",
              translation: "我可以走嗎？",
            },
            {
              sentence: "Can I have some water?",
              translation: "我可以喝點水嗎？",
            },
            {
              sentence: "Can I sit here?",
              translation: "我可以坐這裡嗎？",
            },
          ],
          usage_note: "請求許可。",
          image_file: "can_i.png",
        },
        {
          id: "g-35",
          term_zh: "我不喜歡…",
          related_terms: [
            {
              term_target: "I don't like ...",
              pronunciation: ["/aɪ doʊnt laɪk/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I don't like it.",
              translation: "我不喜歡它。",
            },
            {
              sentence: "I don't like natto.",
              translation: "我不喜歡納豆。",
            },
            {
              sentence: "I don't like waiting.",
              translation: "我不喜歡等待。",
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
              term_target: "I prefer ...",
              pronunciation: ["/aɪ prɪˈfɝ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "I prefer tea.",
              translation: "我比較喜歡茶。",
            },
            {
              sentence: "I prefer cats.",
              translation: "我比較喜歡貓。",
            },
            {
              sentence: "I prefer to stay home.",
              translation: "我比較喜歡待在家。",
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
              term_target: "A is more ... than B",
              pronunciation: ["/... mɔr ... ðæn .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "This is more expensive than that.",
              translation: "這比那個貴。",
            },
            {
              sentence: "He is more famous than her.",
              translation: "他比她更有名。",
            },
            {
              sentence: "This problem is more difficult.",
              translation: "這個問題更困難。",
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
              term_target: "There is / There are",
              pronunciation: ["/ðɛr ɪz / ðɛr ɑr/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "There is a dog.",
              translation: "那裡有一隻狗。",
            },
            {
              sentence: "There are many people.",
              translation: "那裡有很多人。",
            },
            {
              sentence: "There is a problem.",
              translation: "有一個問題。",
            },
          ],
          usage_note: "存在。",
          image_file: "there_is.png",
        },
      ],
    },
  ],
};
