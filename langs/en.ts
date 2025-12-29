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
              segments: [{ text: "Yes", meaning: "是的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Yes, I do.",
              translation: "是的，我願意/我有。",
              segments: [
                { text: "Yes", meaning: "是的", tail: ", " },
                { text: "I", meaning: "我", tail: " " },
                { text: "do", meaning: "做/願意 (助動詞)", tail: "." },
              ],
            },
            {
              sentence: "Yes, please.",
              translation: "是的，麻煩你了。",
              segments: [
                { text: "Yes", meaning: "是的", tail: ", " },
                { text: "please", meaning: "請/麻煩了", tail: "." },
              ],
            },
            {
              sentence: "Yes, you are right.",
              translation: "是的，你是對的。",
              segments: [
                { text: "Yes", meaning: "是的", tail: ", " },
                { text: "you", meaning: "你", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "right", meaning: "對的/正確的", tail: "." },
              ],
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
              segments: [{ text: "No", meaning: "不/沒有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "No, thank you.",
              translation: "不了，謝謝。",
              segments: [
                { text: "No", meaning: "不", tail: ", " },
                { text: "thank", meaning: "感謝", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "No, I don't think so.",
              translation: "不，我不這麼認為。",
              segments: [
                { text: "No", meaning: "不", tail: ", " },
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不 (do not)", tail: " " },
                { text: "think", meaning: "認為/想", tail: " " },
                { text: "so", meaning: "如此/這樣", tail: "." },
              ],
            },
            {
              sentence: "No problem.",
              translation: "沒問題 / 不客氣。",
              segments: [
                { text: "No", meaning: "沒有", tail: " " },
                { text: "problem", meaning: "問題", tail: "." },
              ],
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
              segments: [{ text: "Hello", meaning: "你好", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hello, how are you?",
              translation: "你好，你好嗎？",
              segments: [
                { text: "Hello", meaning: "你好", tail: ", " },
                { text: "how", meaning: "如何", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
            },
            {
              sentence: "Hello! Nice to see you.",
              translation: "哈囉！很高興見到你。",
              segments: [
                { text: "Hello", meaning: "哈囉", tail: "! " },
                { text: "Nice", meaning: "很好的/高興的", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "see", meaning: "見到", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Hello, may I speak to Tom?",
              translation: "喂(電話中)，請問我可以跟 Tom 說話嗎？",
              segments: [
                { text: "Hello", meaning: "喂/你好", tail: ", " },
                { text: "may", meaning: "可以 (委婉)", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "speak", meaning: "說話", tail: " " },
                { text: "to", meaning: "對...", tail: " " },
                { text: "Tom", meaning: "湯姆 (人名)", tail: "?" },
              ],
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
              segments: [
                { text: "Thank", meaning: "感謝", tail: " " },
                { text: "you", meaning: "你", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Thank you very much.",
              translation: "非常謝謝你。",
              segments: [
                { text: "Thank", meaning: "感謝", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "very", meaning: "非常", tail: " " },
                { text: "much", meaning: "多/程度高", tail: "." },
              ],
            },
            {
              sentence: "Thank you for your help.",
              translation: "謝謝你的幫忙。",
              segments: [
                { text: "Thank", meaning: "感謝", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "for", meaning: "為了/因為", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "help", meaning: "幫忙", tail: "." },
              ],
            },
            {
              sentence: "No, thank you.",
              translation: "不用了，謝謝。",
              segments: [
                { text: "No", meaning: "不", tail: ", " },
                { text: "thank", meaning: "感謝", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
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
              segments: [
                { text: "I'm", meaning: "我是 (I am)", tail: " " },
                { text: "sorry", meaning: "抱歉的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I'm sorry for the mistake.",
              translation: "抱歉我弄錯了。",
              segments: [
                { text: "I'm", meaning: "我是", tail: " " },
                { text: "sorry", meaning: "抱歉的", tail: " " },
                { text: "for", meaning: "因為", tail: " " },
                { text: "the", meaning: "這個", tail: " " },
                { text: "mistake", meaning: "錯誤", tail: "." },
              ],
            },
            {
              sentence: "I'm sorry I'm late.",
              translation: "對不起，我遲到了。",
              segments: [
                { text: "I'm", meaning: "我是", tail: " " },
                { text: "sorry", meaning: "抱歉的", tail: " " },
                { text: "I'm", meaning: "我是", tail: " " },
                { text: "late", meaning: "遲到的", tail: "." },
              ],
            },
            {
              sentence: "I'm so sorry to hear that.",
              translation: "聽到這個消息我很遺憾。",
              segments: [
                { text: "I'm", meaning: "我是", tail: " " },
                { text: "so", meaning: "如此/非常", tail: " " },
                { text: "sorry", meaning: "遺憾的/抱歉的", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "hear", meaning: "聽到", tail: " " },
                { text: "that", meaning: "那件事", tail: "." },
              ],
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
              segments: [
                { text: "Excuse", meaning: "原諒", tail: " " },
                { text: "me", meaning: "我", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Excuse me, where is the station?",
              translation: "請問車站哪裡？",
              segments: [
                { text: "Excuse", meaning: "原諒", tail: " " },
                { text: "me", meaning: "我", tail: ", " },
                { text: "where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "station", meaning: "車站", tail: "?" },
              ],
            },
            {
              sentence: "Excuse me, is this seat taken?",
              translation: "請問這個位子有人坐嗎？",
              segments: [
                { text: "Excuse", meaning: "原諒", tail: " " },
                { text: "me", meaning: "我", tail: ", " },
                { text: "is", meaning: "是", tail: " " },
                { text: "this", meaning: "這個", tail: " " },
                { text: "seat", meaning: "座位", tail: " " },
                { text: "taken", meaning: "被佔用的", tail: "?" },
              ],
            },
            {
              sentence: "Excuse me, do you have the time?",
              translation: "請問現在幾點了？",
              segments: [
                { text: "Excuse", meaning: "原諒", tail: " " },
                { text: "me", meaning: "我", tail: ", " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "the", meaning: "這個", tail: " " },
                { text: "time", meaning: "時間", tail: "?" },
              ],
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
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "understand", meaning: "明白/懂", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Sorry, I don't understand.",
              translation: "抱歉，我不懂。",
              segments: [
                { text: "Sorry", meaning: "抱歉", tail: ", " },
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "understand", meaning: "明白", tail: "." },
              ],
            },
            {
              sentence: "I don't understand English.",
              translation: "我不懂英文。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "understand", meaning: "明白", tail: " " },
                { text: "English", meaning: "英文", tail: "." },
              ],
            },
            {
              sentence: "I don't understand what you mean.",
              translation: "我不懂你是什麼意思。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "understand", meaning: "明白", tail: " " },
                { text: "what", meaning: "什麼", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "mean", meaning: "意指/意思", tail: "." },
              ],
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
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "是/在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "bathroom", meaning: "廁所/浴室", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Excuse me, where is the bathroom?",
              translation: "請問廁所在哪？",
              segments: [
                { text: "Excuse", meaning: "原諒", tail: " " },
                { text: "me", meaning: "我", tail: ", " },
                { text: "where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "是/在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "bathroom", meaning: "廁所", tail: "?" },
              ],
            },
            {
              sentence: "Is there a bathroom nearby?",
              translation: "這附近有廁所嗎？",
              segments: [
                { text: "Is", meaning: "有/是", tail: " " },
                { text: "there", meaning: "那裡", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "bathroom", meaning: "廁所", tail: " " },
                { text: "nearby", meaning: "在附近", tail: "?" },
              ],
            },
            {
              sentence: "Can I use your bathroom?",
              translation: "我可以借用你的廁所嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "use", meaning: "使用", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "bathroom", meaning: "廁所", tail: "?" },
              ],
            },
          ],
          usage_note: "出國最重要的一句話。",
          image_file: "where_bathroom.png",
        },
        {
          id: "greet-010",
          term_zh: "多少錢？",
          related_terms: [
            {
              term_target: "How much is it?",
              pronunciation: ["/haʊ mʌtʃ ɪz ɪt/"],
              specific_note: "",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "much", meaning: "多", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "it", meaning: "它", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "How much is it?",
              translation: "這多少錢？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "much", meaning: "多", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "it", meaning: "它", tail: "?" },
              ],
            },
            {
              sentence: "How much does this cost?",
              translation: "這個要多少錢？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "much", meaning: "多", tail: " " },
                { text: "does", meaning: "(助動詞)", tail: " " },
                { text: "this", meaning: "這個", tail: " " },
                { text: "cost", meaning: "花費/值", tail: "?" },
              ],
            },
            {
              sentence: "How much for two?",
              translation: "兩個多少錢？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "much", meaning: "多", tail: " " },
                { text: "for", meaning: "為了/給", tail: " " },
                { text: "two", meaning: "兩個", tail: "?" },
              ],
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
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "this", meaning: "這個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I want this one.",
              translation: "我要這個。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "this", meaning: "這個", tail: " " },
                { text: "one", meaning: "一個/這一個", tail: "." },
              ],
            },
            {
              sentence: "I want this, please.",
              translation: "麻煩我要這個。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "this", meaning: "這個", tail: ", " },
                { text: "please", meaning: "請/麻煩", tail: "." },
              ],
            },
            {
              sentence: "I'll take this one.",
              translation: "我買這個了。",
              segments: [
                { text: "I'll", meaning: "我將會", tail: " " },
                { text: "take", meaning: "拿/買", tail: " " },
                { text: "this", meaning: "這個", tail: " " },
                { text: "one", meaning: "一個", tail: "." },
              ],
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
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "give", meaning: "給", tail: " " },
                { text: "me", meaning: "我", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Please give me water.",
              translation: "請給我水。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "give", meaning: "給", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "water", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "Please give me a menu.",
              translation: "請給我菜單。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "give", meaning: "給", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "a", meaning: "一份", tail: " " },
                { text: "menu", meaning: "菜單", tail: "." },
              ],
            },
            {
              sentence: "Please give me a discount.",
              translation: "請給我打個折。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "give", meaning: "給", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "discount", meaning: "折扣", tail: "." },
              ],
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
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "this", meaning: "這個", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "What is this?",
              translation: "這是什麼？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "this", meaning: "這個", tail: "?" },
              ],
            },
            {
              sentence: "What is this called in English?",
              translation: "這個用英文怎麼說？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "this", meaning: "這個", tail: " " },
                { text: "called", meaning: "被稱為", tail: " " },
                { text: "in", meaning: "用/在...裡面", tail: " " },
                { text: "English", meaning: "英文", tail: "?" },
              ],
            },
            {
              sentence: "Do you know what this is?",
              translation: "你知道這是什麼嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "know", meaning: "知道", tail: " " },
                { text: "what", meaning: "什麼", tail: " " },
                { text: "this", meaning: "這個", tail: " " },
                { text: "is", meaning: "是", tail: "?" },
              ],
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
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "help", meaning: "幫忙", tail: " " },
                { text: "me", meaning: "我", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Please help me.",
              translation: "請幫我。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "help", meaning: "幫忙", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Can you help me, please?",
              translation: "拜託可以幫幫我嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "help", meaning: "幫忙", tail: " " },
                { text: "me", meaning: "我", tail: ", " },
                { text: "please", meaning: "拜託", tail: "?" },
              ],
            },
            {
              sentence: "Help me move this table.",
              translation: "幫我搬這張桌子。",
              segments: [
                { text: "Help", meaning: "幫忙", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "move", meaning: "移動/搬", tail: " " },
                { text: "this", meaning: "這張", tail: " " },
                { text: "table", meaning: "桌子", tail: "." },
              ],
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
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "say", meaning: "說", tail: " " },
                { text: "that", meaning: "那個", tail: " " },
                { text: "again", meaning: "再一次", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Sorry, can you say that again?",
              translation: "抱歉，能再說一次嗎？",
              segments: [
                { text: "Sorry", meaning: "抱歉", tail: ", " },
                { text: "can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "say", meaning: "說", tail: " " },
                { text: "that", meaning: "那個", tail: " " },
                { text: "again", meaning: "再一次", tail: "?" },
              ],
            },
            {
              sentence: "Can you repeat that?",
              translation: "可以請你重複一遍嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "repeat", meaning: "重複", tail: " " },
                { text: "that", meaning: "那個", tail: "?" },
              ],
            },
            {
              sentence: "Say that again, please.",
              translation: "請再說一次。",
              segments: [
                { text: "Say", meaning: "說", tail: " " },
                { text: "that", meaning: "那個", tail: " " },
                { text: "again", meaning: "再一次", tail: ", " },
                { text: "please", meaning: "請", tail: "." },
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
              term_target: "Can you speak slowly?",
              pronunciation: ["/kæn ju spik ˈsloʊli/"],
              specific_note: "",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "speak", meaning: "說話", tail: " " },
                { text: "slowly", meaning: "慢地", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Can you speak slowly?",
              translation: "可以講慢一點嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "speak", meaning: "說話", tail: " " },
                { text: "slowly", meaning: "慢地", tail: "?" },
              ],
            },
            {
              sentence: "Please speak more slowly.",
              translation: "請說慢一點。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "speak", meaning: "說話", tail: " " },
                { text: "more", meaning: "更", tail: " " },
                { text: "slowly", meaning: "慢地", tail: "." },
              ],
            },
            {
              sentence: "Could you slow down a bit?",
              translation: "可以稍微慢一點嗎？",
              segments: [
                { text: "Could", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "slow", meaning: "慢", tail: " " },
                { text: "down", meaning: "下來/減速", tail: " " },
                { text: "a", meaning: "一點", tail: " " },
                { text: "bit", meaning: "點", tail: "?" },
              ],
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
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "see", meaning: "明白/看", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Oh, I see. I understand now.",
              translation: "噢，原來如此。我現在懂了。",
              segments: [
                { text: "Oh", meaning: "噢", tail: ", " },
                { text: "I", meaning: "我", tail: " " },
                { text: "see", meaning: "明白", tail: ". " },
                { text: "I", meaning: "我", tail: " " },
                { text: "understand", meaning: "懂", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "I see what you mean.",
              translation: "我懂你的意思了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "see", meaning: "明白", tail: " " },
                { text: "what", meaning: "什麼", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "mean", meaning: "意指/意思", tail: "." },
              ],
            },
            {
              sentence: "Ah, I see!",
              translation: "啊，原來是這樣！",
              segments: [
                { text: "Ah", meaning: "啊", tail: ", " },
                { text: "I", meaning: "我", tail: " " },
                { text: "see", meaning: "明白", tail: "!" },
              ],
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
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "morning", meaning: "早晨", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Good morning.",
              translation: "早安。",
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "morning", meaning: "早晨", tail: "." },
              ],
            },
            {
              sentence: "Good morning, everyone.",
              translation: "大家早安。",
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "morning", meaning: "早晨", tail: ", " },
                { text: "everyone", meaning: "大家", tail: "." },
              ],
            },
            {
              sentence: "Morning! How did you sleep?",
              translation: "早！你睡得好嗎？",
              segments: [
                { text: "Morning", meaning: "早晨", tail: "! " },
                { text: "How", meaning: "如何", tail: " " },
                { text: "did", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "sleep", meaning: "睡", tail: "?" },
              ],
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
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "evening", meaning: "傍晚/晚上", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Good evening, everyone.",
              translation: "大家晚安 (晚上好)。",
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "evening", meaning: "晚上", tail: ", " },
                { text: "everyone", meaning: "大家", tail: "." },
              ],
            },
            {
              sentence: "Good evening, Mr. Smith.",
              translation: "史密斯先生晚安。",
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "evening", meaning: "晚上", tail: ", " },
                { text: "Mr.", meaning: "先生", tail: " " },
                { text: "Smith", meaning: "史密斯", tail: "." },
              ],
            },
            {
              sentence: "Good evening! Table for two?",
              translation: "晚安！兩位用餐嗎？",
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "evening", meaning: "晚上", tail: "! " },
                { text: "Table", meaning: "桌子/位子", tail: " " },
                { text: "for", meaning: "給", tail: " " },
                { text: "two", meaning: "兩位", tail: "?" },
              ],
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
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "bye", meaning: "再見", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Good bye, see you.",
              translation: "再見，待會見。",
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "bye", meaning: "再見", tail: ", " },
                { text: "see", meaning: "見", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Good bye for now.",
              translation: "暫時先這樣，再見。",
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "bye", meaning: "再見", tail: " " },
                { text: "for", meaning: "為了", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Ok, bye-bye!",
              translation: "好喔，掰掰！",
              segments: [
                { text: "Ok", meaning: "好", tail: ", " },
                { text: "bye-bye", meaning: "掰掰", tail: "!" },
              ],
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
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "How are you doing?",
              translation: "你最近好嗎？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "doing", meaning: "做/過得", tail: "?" },
              ],
            },
            {
              sentence: "Hi, how are you today?",
              translation: "嗨，你今天好嗎？",
              segments: [
                { text: "Hi", meaning: "嗨", tail: ", " },
                { text: "how", meaning: "如何", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "today", meaning: "今天", tail: "?" },
              ],
            },
            {
              sentence: "How are you feeling?",
              translation: "你感覺如何？(通常問健康)",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "feeling", meaning: "感覺", tail: "?" },
              ],
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
              segments: [{ text: "Really", meaning: "真的", tail: "?" }],
            },
          ],
          examples: [
            {
              sentence: "Really? Are you sure?",
              translation: "真的嗎？你確定？",
              segments: [
                { text: "Really", meaning: "真的", tail: "? " },
                { text: "Are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "sure", meaning: "確定的", tail: "?" },
              ],
            },
            {
              sentence: "I got the job! Really?",
              translation: "我得到工作了！真的嗎？",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "got", meaning: "得到", tail: " " },
                { text: "the", meaning: "那份", tail: " " },
                { text: "job", meaning: "工作", tail: "! " },
                { text: "Really", meaning: "真的", tail: "?" },
              ],
            },
            {
              sentence: "Oh really? That is interesting.",
              translation: "喔真的嗎？真有趣。",
              segments: [
                { text: "Oh", meaning: "喔", tail: " " },
                { text: "really", meaning: "真的", tail: "? " },
                { text: "That", meaning: "那", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "interesting", meaning: "有趣的", tail: "." },
              ],
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
              segments: [{ text: "Awesome", meaning: "極好的", tail: "!" }],
            },
          ],
          examples: [
            {
              sentence: "That is awesome!",
              translation: "那真是太棒了！",
              segments: [
                { text: "That", meaning: "那", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "awesome", meaning: "極好的", tail: "!" },
              ],
            },
            {
              sentence: "You look awesome.",
              translation: "你看起來棒極了。",
              segments: [
                { text: "You", meaning: "你", tail: " " },
                { text: "look", meaning: "看起來", tail: " " },
                { text: "awesome", meaning: "極好的", tail: "." },
              ],
            },
            {
              sentence: "The movie was awesome.",
              translation: "那部電影太讚了。",
              segments: [
                { text: "The", meaning: "這部", tail: " " },
                { text: "movie", meaning: "電影", tail: " " },
                { text: "was", meaning: "是 (過去式)", tail: " " },
                { text: "awesome", meaning: "極好的", tail: "." },
              ],
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
              segments: [
                { text: "Nice", meaning: "好的", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "meet", meaning: "遇見", tail: " " },
                { text: "you", meaning: "你", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nice to meet you, too.",
              translation: "我也很高興認識你。",
              segments: [
                { text: "Nice", meaning: "好的", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "meet", meaning: "遇見", tail: " " },
                { text: "you", meaning: "你", tail: ", " },
                { text: "too", meaning: "也", tail: "." },
              ],
            },
            {
              sentence: "Hello, I'm John. Nice to meet you.",
              translation: "你好我是約翰，很高興認識你。",
              segments: [
                { text: "Hello", meaning: "你好", tail: ", " },
                { text: "I'm", meaning: "我是", tail: " " },
                { text: "John", meaning: "約翰", tail: ". " },
                { text: "Nice", meaning: "好的", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "meet", meaning: "遇見", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "It's nice to meet you.",
              translation: "很高興認識你。",
              segments: [
                { text: "It's", meaning: "它是", tail: " " },
                { text: "nice", meaning: "好的", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "meet", meaning: "遇見", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
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
              segments: [
                { text: "That's", meaning: "那是", tail: " " },
                { text: "too", meaning: "太", tail: " " },
                { text: "bad", meaning: "壞的/糟的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "That's too bad, maybe next time.",
              translation: "真可惜，也許下次吧。",
              segments: [
                { text: "That's", meaning: "那是", tail: " " },
                { text: "too", meaning: "太", tail: " " },
                { text: "bad", meaning: "糟的", tail: ", " },
                { text: "maybe", meaning: "也許", tail: " " },
                { text: "next", meaning: "下一次", tail: " " },
                { text: "time", meaning: "時間", tail: "." },
              ],
            },
            {
              sentence: "It rained all day? That's too bad.",
              translation: "下了一整天雨？真可惜。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "rained", meaning: "下雨", tail: " " },
                { text: "all", meaning: "整個", tail: " " },
                { text: "day", meaning: "天", tail: "? " },
                { text: "That's", meaning: "那是", tail: " " },
                { text: "too", meaning: "太", tail: " " },
                { text: "bad", meaning: "糟的", tail: "." },
              ],
            },
            {
              sentence: "You can't come? That's too bad.",
              translation: "你不能來？那太可惜了。",
              segments: [
                { text: "You", meaning: "你", tail: " " },
                { text: "can't", meaning: "不能", tail: " " },
                { text: "come", meaning: "來", tail: "? " },
                { text: "That's", meaning: "那是", tail: " " },
                { text: "too", meaning: "太", tail: " " },
                { text: "bad", meaning: "糟的", tail: "." },
              ],
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
          term_zh: "它",
          related_terms: [
            {
              term_target: "it",
              pronunciation: ["/ɪt/"],
              specific_note: "代名詞",
              segments: [{ text: "it", meaning: "它", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "It is raining outside.",
              translation: "外面正在下雨。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "raining", meaning: "下雨", tail: " " },
                { text: "outside", meaning: "外面", tail: "." },
              ],
            },
          ],
          usage_note: "It 指無生命或動物",
          image_file: "that.png",
        },
        {
          id: "pro-02",
          term_zh: "我",
          related_terms: [
            {
              term_target: "I",
              pronunciation: ["/aɪ/"],
              specific_note: "",
              segments: [{ text: "I", meaning: "我", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I am a student.",
              translation: "我是學生。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "student", meaning: "學生", tail: "." },
              ],
            },
            {
              sentence: "I like to read books.",
              translation: "我喜歡看書。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "read", meaning: "閱讀", tail: " " },
                { text: "books", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "I don't know the answer.",
              translation: "我不知道答案。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "know", meaning: "知道", tail: " " },
                { text: "the", meaning: "這個", tail: " " },
                { text: "answer", meaning: "答案", tail: "." },
              ],
            },
          ],
          usage_note: "永遠大寫。",
          image_file: "i.png",
        },
        {
          id: "pro-03",
          term_zh: "你",
          related_terms: [
            {
              term_target: "you",
              pronunciation: ["/ju/"],
              specific_note: "",
              segments: [{ text: "you", meaning: "你", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "You are very kind.",
              translation: "你人真好。",
              segments: [
                { text: "You", meaning: "你", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "very", meaning: "非常", tail: " " },
                { text: "kind", meaning: "親切/好", tail: "." },
              ],
            },
            {
              sentence: "Where are you going?",
              translation: "你要去哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "are", meaning: "正在", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "going", meaning: "去", tail: "?" },
              ],
            },
            {
              sentence: "You look beautiful today.",
              translation: "你今天看起來很美。",
              segments: [
                { text: "You", meaning: "你", tail: " " },
                { text: "look", meaning: "看起來", tail: " " },
                { text: "beautiful", meaning: "美麗", tail: " " },
                { text: "today", meaning: "今天", tail: "." },
              ],
            },
          ],
          usage_note: "單複數同形（你、你們都用 You）。",
          image_file: "you.png",
        },
        {
          id: "pro-04",
          term_zh: "他",
          related_terms: [
            {
              term_target: "he",
              pronunciation: ["/hi/"],
              specific_note: "",
              segments: [{ text: "he", meaning: "他", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "He is my father.",
              translation: "他是我父親。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "father", meaning: "父親", tail: "." },
              ],
            },
            {
              sentence: "He plays basketball well.",
              translation: "他籃球打得很好。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "plays", meaning: "打/玩", tail: " " },
                { text: "basketball", meaning: "籃球", tail: " " },
                { text: "well", meaning: "很好地", tail: "." },
              ],
            },
            {
              sentence: "Is he coming with us?",
              translation: "他要跟我們一起來嗎？",
              segments: [
                { text: "Is", meaning: "是/正在", tail: " " },
                { text: "he", meaning: "他", tail: " " },
                { text: "coming", meaning: "來", tail: " " },
                { text: "with", meaning: "和...一起", tail: " " },
                { text: "us", meaning: "我們", tail: "?" },
              ],
            },
          ],
          usage_note: "男性。",
          image_file: "he.png",
        },
        {
          id: "pro-05",
          term_zh: "他的",
          related_terms: [
            {
              term_target: "his",
              pronunciation: ["/hɪz/"],
              specific_note: "",
              segments: [{ text: "his", meaning: "他的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "This is his car.",
              translation: "這是他的車。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "his", meaning: "他的", tail: " " },
                { text: "car", meaning: "車", tail: "." },
              ],
            },
            {
              sentence: "What is his name?",
              translation: "他叫什麼名字？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "his", meaning: "他的", tail: " " },
                { text: "name", meaning: "名字", tail: "?" },
              ],
            },
            {
              sentence: "His family lives in Taipei.",
              translation: "他的家人住在台北。",
              segments: [
                { text: "His", meaning: "他的", tail: " " },
                { text: "family", meaning: "家庭/家人", tail: " " },
                { text: "lives", meaning: "住", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "Taipei", meaning: "台北", tail: "." },
              ],
            },
          ],
          usage_note: "所有格。",
          image_file: "his.png",
        },
        {
          id: "pro-06",
          term_zh: "我們",
          related_terms: [
            {
              term_target: "we",
              pronunciation: ["/wi/"],
              specific_note: "",
              segments: [{ text: "we", meaning: "我們", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "We are family.",
              translation: "我們是家人。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "family", meaning: "家人", tail: "." },
              ],
            },
            {
              sentence: "We need to leave now.",
              translation: "我們現在得走了。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "leave", meaning: "離開", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Can we go to the park?",
              translation: "我們可以去公園嗎？",
              segments: [
                { text: "Can", meaning: "可以/能", tail: " " },
                { text: "we", meaning: "我們", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "park", meaning: "公園", tail: "?" },
              ],
            },
          ],
          usage_note: "第一人稱複數。",
          image_file: "we.png",
        },
        {
          id: "pro-07",
          term_zh: "她",
          related_terms: [
            {
              term_target: "she",
              pronunciation: ["/ʃi/"],
              specific_note: "",
              segments: [{ text: "she", meaning: "她", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "She is my mother.",
              translation: "她是我媽媽。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "mother", meaning: "母親", tail: "." },
              ],
            },
            {
              sentence: "She loves listening to music.",
              translation: "她喜歡聽音樂。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "loves", meaning: "喜愛", tail: " " },
                { text: "listening", meaning: "聽", tail: " " },
                { text: "to", meaning: "...", tail: " " },
                { text: "music", meaning: "音樂", tail: "." },
              ],
            },
            {
              sentence: "She is a teacher.",
              translation: "她是一位老師。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "teacher", meaning: "老師", tail: "." },
              ],
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
              segments: [{ text: "they", meaning: "他們", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "They are studying.",
              translation: "他們正在讀書。",
              segments: [
                { text: "They", meaning: "他們", tail: " " },
                { text: "are", meaning: "正在", tail: " " },
                { text: "studying", meaning: "讀書", tail: "." },
              ],
            },
            {
              sentence: "They are my friends.",
              translation: "他們是我的朋友。",
              segments: [
                { text: "They", meaning: "他們", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "friends", meaning: "朋友", tail: "." },
              ],
            },
            {
              sentence: "Where are they?",
              translation: "他們在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "are", meaning: "在", tail: " " },
                { text: "they", meaning: "他們", tail: "?" },
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
              term_target: "this",
              pronunciation: ["/ðɪs/"],
              specific_note: "",
              segments: [{ text: "this", meaning: "這個", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "This is my favorite song.",
              translation: "這是我最喜歡的歌。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "favorite", meaning: "最喜愛的", tail: " " },
                { text: "song", meaning: "歌", tail: "." },
              ],
            },
            {
              sentence: "I want to buy this.",
              translation: "我想要買這個。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "buy", meaning: "買", tail: " " },
                { text: "this", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "This is delicious.",
              translation: "這個很好吃。",
              segments: [
                { text: "This", meaning: "這個", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "delicious", meaning: "好吃的", tail: "." },
              ],
            },
          ],
          usage_note: "近處單數。",
          image_file: "this.png",
        },
        {
          id: "pro-10",
          term_zh: "那個",
          related_terms: [
            {
              term_target: "that",
              pronunciation: ["/ðæt/"],
              specific_note: "",
              segments: [{ text: "that", meaning: "那個", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "That is not mine.",
              translation: "那不是我的。",
              segments: [
                { text: "That", meaning: "那個", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "not", meaning: "不", tail: " " },
                { text: "mine", meaning: "我的", tail: "." },
              ],
            },
            {
              sentence: "Look at that bird.",
              translation: "看那隻鳥。",
              segments: [
                { text: "Look", meaning: "看", tail: " " },
                { text: "at", meaning: "向", tail: " " },
                { text: "that", meaning: "那", tail: " " },
                { text: "bird", meaning: "鳥", tail: "." },
              ],
            },
            {
              sentence: "That sounds great.",
              translation: "那聽起來很棒。",
              segments: [
                { text: "That", meaning: "那", tail: " " },
                { text: "sounds", meaning: "聽起來", tail: " " },
                { text: "great", meaning: "很棒", tail: "." },
              ],
            },
          ],
          usage_note: "遠處單數。",
          image_file: "that.png",
        },
        {
          id: "pro-11",
          term_zh: "她的",
          related_terms: [
            {
              term_target: "her",
              pronunciation: ["/hɝ/"],
              specific_note: "",
              segments: [{ text: "her", meaning: "她的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Her hair is long.",
              translation: "她的頭髮很長。",
              segments: [
                { text: "Her", meaning: "她的", tail: " " },
                { text: "hair", meaning: "頭髮", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "long", meaning: "長的", tail: "." },
              ],
            },
            {
              sentence: "I like her dress.",
              translation: "我喜歡她的洋裝。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "her", meaning: "她的", tail: " " },
                { text: "dress", meaning: "洋裝", tail: "." },
              ],
            },
            {
              sentence: "This is her book.",
              translation: "這是她的書。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "her", meaning: "她的", tail: " " },
                { text: "book", meaning: "書", tail: "." },
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
              term_target: "your",
              pronunciation: ["/jʊr/"],
              specific_note: "",
              segments: [{ text: "your", meaning: "你的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "What is your name?",
              translation: "你叫什麼名字？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "name", meaning: "名字", tail: "?" },
              ],
            },
            {
              sentence: "Is this your phone?",
              translation: "這是你的手機嗎？",
              segments: [
                { text: "Is", meaning: "是", tail: " " },
                { text: "this", meaning: "這", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "phone", meaning: "手機", tail: "?" },
              ],
            },
            {
              sentence: "Don't forget your keys.",
              translation: "別忘了你的鑰匙。",
              segments: [
                { text: "Don't", meaning: "別", tail: " " },
                { text: "forget", meaning: "忘記", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "keys", meaning: "鑰匙", tail: "." },
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
              term_target: "their",
              pronunciation: ["/ðɛr/"],
              specific_note: "",
              segments: [{ text: "their", meaning: "他們的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Their house is big.",
              translation: "他們的房子很大。",
              segments: [
                { text: "Their", meaning: "他們的", tail: " " },
                { text: "house", meaning: "房子", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "big", meaning: "大的", tail: "." },
              ],
            },
            {
              sentence: "I know their parents.",
              translation: "我認識他們的父母。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "know", meaning: "認識", tail: " " },
                { text: "their", meaning: "他們的", tail: " " },
                { text: "parents", meaning: "父母", tail: "." },
              ],
            },
            {
              sentence: "Their dog is very cute.",
              translation: "他們的狗很可愛。",
              segments: [
                { text: "Their", meaning: "他們的", tail: " " },
                { text: "dog", meaning: "狗", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "very", meaning: "非常", tail: " " },
                { text: "cute", meaning: "可愛", tail: "." },
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
              term_target: "our",
              pronunciation: ["/ˈaʊr/"],
              specific_note: "",
              segments: [{ text: "our", meaning: "我們的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "This is our school.",
              translation: "這是我們的學校。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "our", meaning: "我們的", tail: " " },
                { text: "school", meaning: "學校", tail: "." },
              ],
            },
            {
              sentence: "Welcome to our home.",
              translation: "歡迎來我們家。",
              segments: [
                { text: "Welcome", meaning: "歡迎", tail: " " },
                { text: "to", meaning: "來", tail: " " },
                { text: "our", meaning: "我們的", tail: " " },
                { text: "home", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Our team won the game.",
              translation: "我們這隊贏了比賽。",
              segments: [
                { text: "Our", meaning: "我們的", tail: " " },
                { text: "team", meaning: "隊伍", tail: " " },
                { text: "won", meaning: "贏了", tail: " " },
                { text: "the", meaning: "這場", tail: " " },
                { text: "game", meaning: "比賽", tail: "." },
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
              term_target: "these",
              pronunciation: ["/ðiz/"],
              specific_note: "",
              segments: [{ text: "these", meaning: "這些", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "These apples are sweet.",
              translation: "這些蘋果很甜。",
              segments: [
                { text: "These", meaning: "這些", tail: " " },
                { text: "apples", meaning: "蘋果", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "sweet", meaning: "甜的", tail: "." },
              ],
            },
            {
              sentence: "Are these yours?",
              translation: "這些是你的嗎？",
              segments: [
                { text: "Are", meaning: "是", tail: " " },
                { text: "these", meaning: "這些", tail: " " },
                { text: "yours", meaning: "你的(東西)", tail: "?" },
              ],
            },
            {
              sentence: "I like these shoes.",
              translation: "我喜歡這雙鞋。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "these", meaning: "這些", tail: " " },
                { text: "shoes", meaning: "鞋子", tail: "." },
              ],
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
              segments: [{ text: "those", meaning: "那些", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Those flowers are beautiful.",
              translation: "那些花很漂亮。",
              segments: [
                { text: "Those", meaning: "那些", tail: " " },
                { text: "flowers", meaning: "花", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "beautiful", meaning: "漂亮的", tail: "." },
              ],
            },
            {
              sentence: "Who are those people?",
              translation: "那些人是誰？",
              segments: [
                { text: "Who", meaning: "誰", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "those", meaning: "那些", tail: " " },
                { text: "people", meaning: "人", tail: "?" },
              ],
            },
            {
              sentence: "I want those cookies.",
              translation: "我想要那些餅乾。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "those", meaning: "那些", tail: " " },
                { text: "cookies", meaning: "餅乾", tail: "." },
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
              term_target: "am",
              pronunciation: ["æm"],
              specific_note: "I",
              segments: [{ text: "am", meaning: "是", tail: "" }],
            },
            {
              term_target: "are",
              pronunciation: ["ɑr"],
              specific_note: "You/We/They",
              segments: [{ text: "are", meaning: "是", tail: "" }],
            },
            {
              term_target: "is",
              pronunciation: ["ɪz"],
              specific_note: "He/She/It",
              segments: [{ text: "is", meaning: "是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I am happy.",
              translation: "我很快樂。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "happy", meaning: "快樂的", tail: "." },
              ],
            },
            {
              sentence: "He is a teacher.",
              translation: "他是一位老師。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "teacher", meaning: "老師", tail: "." },
              ],
            },
            {
              sentence: "They are my friends.",
              translation: "他們是我的朋友。",
              segments: [
                { text: "They", meaning: "他們", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "friends", meaning: "朋友", tail: "." },
              ],
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
              pronunciation: ["hæv"],
              specific_note: "",
              segments: [{ text: "have", meaning: "有", tail: "" }],
            },
            {
              term_target: "has",
              pronunciation: ["hæz"],
              specific_note: "第三人稱單數",
              segments: [{ text: "has", meaning: "有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I have a car.",
              translation: "我有一台車。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "a", meaning: "一台", tail: " " },
                { text: "car", meaning: "車", tail: "." },
              ],
            },
            {
              sentence: "She has a cute cat.",
              translation: "她有一隻可愛的貓。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "has", meaning: "有", tail: " " },
                { text: "a", meaning: "一隻", tail: " " },
                { text: "cute", meaning: "可愛的", tail: " " },
                { text: "cat", meaning: "貓", tail: "." },
              ],
            },
            {
              sentence: "Do you have any questions?",
              translation: "你有任何問題嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "any", meaning: "任何", tail: " " },
                { text: "questions", meaning: "問題", tail: "?" },
              ],
            },
          ],
          usage_note: "擁有。",
          image_file: "have.png",
        },
        {
          id: "v-03",
          term_zh: "去",
          related_terms: [
            {
              term_target: "go",
              pronunciation: ["goʊ"],
              specific_note: "",
              segments: [{ text: "go", meaning: "去", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Go home.",
              translation: "回家。",
              segments: [
                { text: "Go", meaning: "去/回", tail: " " },
                { text: "home", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "I go to school by bus.",
              translation: "我搭公車去上學。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "school", meaning: "學校", tail: " " },
                { text: "by", meaning: "藉由", tail: " " },
                { text: "bus", meaning: "公車", tail: "." },
              ],
            },
            {
              sentence: "Let's go!",
              translation: "我們走吧！",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "go", meaning: "走", tail: "!" },
              ],
            },
          ],
          usage_note: "離開去某處。",
          image_file: "go.png",
        },
        {
          id: "v-04",
          term_zh: "得到／拿",
          related_terms: [
            {
              term_target: "get",
              pronunciation: ["gɛt"],
              specific_note: "",
              segments: [{ text: "get", meaning: "得到", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Get a gift.",
              translation: "收到禮物。",
              segments: [
                { text: "Get", meaning: "得到/收到", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "gift", meaning: "禮物", tail: "." },
              ],
            },
            {
              sentence: "I need to get some sleep.",
              translation: "我需要睡一會兒。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "get", meaning: "得到", tail: " " },
                { text: "some", meaning: "一些", tail: " " },
                { text: "sleep", meaning: "睡眠", tail: "." },
              ],
            },
            {
              sentence: "Did you get my email?",
              translation: "你有收到我的信嗎？",
              segments: [
                { text: "Did", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "get", meaning: "收到", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "email", meaning: "電子郵件", tail: "?" },
              ],
            },
          ],
          usage_note: "獲得/拿取。",
          image_file: "get.png",
        },
        {
          id: "v-05",
          term_zh: "做",
          related_terms: [
            {
              term_target: "do",
              pronunciation: ["du"],
              specific_note: "",
              segments: [{ text: "do", meaning: "做", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Do homework.",
              translation: "做功課。",
              segments: [
                { text: "Do", meaning: "做", tail: " " },
                { text: "homework", meaning: "功課", tail: "." },
              ],
            },
            {
              sentence: "Just do it.",
              translation: "做就對了。",
              segments: [
                { text: "Just", meaning: "就", tail: " " },
                { text: "do", meaning: "做", tail: " " },
                { text: "it", meaning: "它", tail: "." },
              ],
            },
            {
              sentence: "What do you do?",
              translation: "你是做什麼工作的？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "do", meaning: "做", tail: "?" },
              ],
            },
          ],
          usage_note: "執行動作。",
          image_file: "do.png",
        },
        {
          id: "v-06",
          term_zh: "說（講）",
          related_terms: [
            {
              term_target: "say",
              pronunciation: ["seɪ"],
              specific_note: "",
              segments: [{ text: "say", meaning: "說", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Say hello.",
              translation: "說你好。",
              segments: [
                { text: "Say", meaning: "說", tail: " " },
                { text: "hello", meaning: "你好", tail: "." },
              ],
            },
            {
              sentence: "What did you say?",
              translation: "你剛剛說什麼？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "did", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "say", meaning: "說", tail: "?" },
              ],
            },
            {
              sentence: "Don't say that.",
              translation: "別那樣說。",
              segments: [
                { text: "Don't", meaning: "別", tail: " " },
                { text: "say", meaning: "說", tail: " " },
                { text: "that", meaning: "那樣", tail: "." },
              ],
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
              pronunciation: ["noʊ"],
              specific_note: "",
              segments: [{ text: "know", meaning: "知道", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I know you.",
              translation: "我認識你。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "know", meaning: "認識/知道", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "I don't know the answer.",
              translation: "我不知道答案。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "know", meaning: "知道", tail: " " },
                { text: "the", meaning: "這個", tail: " " },
                { text: "answer", meaning: "答案", tail: "." },
              ],
            },
            {
              sentence: "Do you know him?",
              translation: "你認識他嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "know", meaning: "認識", tail: " " },
                { text: "him", meaning: "他", tail: "?" },
              ],
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
              pronunciation: ["θɪŋk"],
              specific_note: "",
              segments: [{ text: "think", meaning: "想", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I think so.",
              translation: "我也這麼覺得。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "think", meaning: "認為", tail: " " },
                { text: "so", meaning: "如此", tail: "." },
              ],
            },
            {
              sentence: "Let me think about it.",
              translation: "讓我想一想。",
              segments: [
                { text: "Let", meaning: "讓", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "think", meaning: "想", tail: " " },
                { text: "about", meaning: "關於", tail: " " },
                { text: "it", meaning: "它", tail: "." },
              ],
            },
            {
              sentence: "I think you are right.",
              translation: "我覺得你是對的。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "think", meaning: "覺得", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "right", meaning: "對的", tail: "." },
              ],
            },
          ],
          usage_note: "思考/認為。",
          image_file: "think.png",
        },
        {
          id: "v-09",
          term_zh: "看見",
          related_terms: [
            {
              term_target: "see",
              pronunciation: ["si"],
              specific_note: "",
              segments: [{ text: "see", meaning: "看見", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I see you.",
              translation: "我看到你了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "see", meaning: "看到", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Can you see the bird?",
              translation: "你看得到那隻鳥嗎？",
              segments: [
                { text: "Can", meaning: "能", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "see", meaning: "看見", tail: " " },
                { text: "the", meaning: "那隻", tail: " " },
                { text: "bird", meaning: "鳥", tail: "?" },
              ],
            },
            {
              sentence: "I see what you mean.",
              translation: "我懂你的意思了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "see", meaning: "明白", tail: " " },
                { text: "what", meaning: "什麼", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "mean", meaning: "意思", tail: "." },
              ],
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
              pronunciation: ["meɪk"],
              specific_note: "",
              segments: [{ text: "make", meaning: "製作", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Make coffee.",
              translation: "泡咖啡。",
              segments: [
                { text: "Make", meaning: "製作/泡", tail: " " },
                { text: "coffee", meaning: "咖啡", tail: "." },
              ],
            },
            {
              sentence: "Don't make noise.",
              translation: "不要製造噪音。",
              segments: [
                { text: "Don't", meaning: "不要", tail: " " },
                { text: "make", meaning: "製造", tail: " " },
                { text: "noise", meaning: "噪音", tail: "." },
              ],
            },
            {
              sentence: "I made a mistake.",
              translation: "我犯了一個錯。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "made", meaning: "造成", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "mistake", meaning: "錯誤", tail: "." },
              ],
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
              pronunciation: ["kʌm"],
              specific_note: "",
              segments: [{ text: "come", meaning: "來", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Come here.",
              translation: "來這裡。",
              segments: [
                { text: "Come", meaning: "來", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Please come in.",
              translation: "請進。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "come", meaning: "進", tail: " " },
                { text: "in", meaning: "入", tail: "." },
              ],
            },
            {
              sentence: "When will you come?",
              translation: "你什麼時候會來？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "will", meaning: "將會", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "come", meaning: "來", tail: "?" },
              ],
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
              pronunciation: ["nid"],
              specific_note: "",
              segments: [{ text: "need", meaning: "需要", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I need water.",
              translation: "我需要水。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "water", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "I need your help.",
              translation: "我需要你的幫忙。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "help", meaning: "幫忙", tail: "." },
              ],
            },
            {
              sentence: "We need to talk.",
              translation: "我們需要談談。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "talk", meaning: "談話", tail: "." },
              ],
            },
          ],
          usage_note: "必要。",
          image_file: "need.png",
        },
        {
          id: "v-13",
          term_zh: "使用",
          related_terms: [
            {
              term_target: "use",
              pronunciation: ["juz"],
              specific_note: "",
              segments: [{ text: "use", meaning: "使用", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Use a pen.",
              translation: "用筆。",
              segments: [
                { text: "Use", meaning: "用", tail: " " },
                { text: "a", meaning: "一支", tail: " " },
                { text: "pen", meaning: "筆", tail: "." },
              ],
            },
            {
              sentence: "Can I use your phone?",
              translation: "我可以用你的手機嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "use", meaning: "用", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "phone", meaning: "手機", tail: "?" },
              ],
            },
            {
              sentence: "How do I use this?",
              translation: "這個要怎麼用？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "use", meaning: "用", tail: " " },
                { text: "this", meaning: "這個", tail: "?" },
              ],
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
              pronunciation: ["faɪnd"],
              specific_note: "",
              segments: [{ text: "find", meaning: "找", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Find a job.",
              translation: "找工作。",
              segments: [
                { text: "Find", meaning: "找", tail: " " },
                { text: "a", meaning: "一份", tail: " " },
                { text: "job", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "I can't find my keys.",
              translation: "我找不到鑰匙。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "can't", meaning: "不能", tail: " " },
                { text: "find", meaning: "找到", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "keys", meaning: "鑰匙", tail: "." },
              ],
            },
            {
              sentence: "Did you find it?",
              translation: "你找到了嗎？",
              segments: [
                { text: "Did", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "find", meaning: "找到", tail: " " },
                { text: "it", meaning: "它", tail: "?" },
              ],
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
              pronunciation: ["gɪv"],
              specific_note: "",
              segments: [{ text: "give", meaning: "給", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Give me that.",
              translation: "給我那個。",
              segments: [
                { text: "Give", meaning: "給", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "that", meaning: "那個", tail: "." },
              ],
            },
            {
              sentence: "Please give me a hand.",
              translation: "請幫我一把。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "give", meaning: "給", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "a", meaning: "一隻", tail: " " },
                { text: "hand", meaning: "手(幫忙)", tail: "." },
              ],
            },
            {
              sentence: "Never give up.",
              translation: "永不放棄。",
              segments: [
                { text: "Never", meaning: "絕不", tail: " " },
                { text: "give", meaning: "給", tail: " " },
                { text: "up", meaning: "上(放棄)", tail: "." },
              ],
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
              pronunciation: ["tɛl"],
              specific_note: "",
              segments: [{ text: "tell", meaning: "告訴", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tell me why.",
              translation: "告訴我為什麼。",
              segments: [
                { text: "Tell", meaning: "告訴", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "why", meaning: "為什麼", tail: "." },
              ],
            },
            {
              sentence: "Tell me the truth.",
              translation: "告訴我真相。",
              segments: [
                { text: "Tell", meaning: "告訴", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "truth", meaning: "真相", tail: "." },
              ],
            },
            {
              sentence: "Don't tell anyone.",
              translation: "不要告訴任何人。",
              segments: [
                { text: "Don't", meaning: "別", tail: " " },
                { text: "tell", meaning: "告訴", tail: " " },
                { text: "anyone", meaning: "任何人", tail: "." },
              ],
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
              pronunciation: ["wɝk"],
              specific_note: "",
              segments: [{ text: "work", meaning: "工作", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I work here.",
              translation: "我在這工作。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "work", meaning: "工作", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "My computer doesn't work.",
              translation: "我的電腦壞了(不運作)。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "computer", meaning: "電腦", tail: " " },
                { text: "doesn't", meaning: "不", tail: " " },
                { text: "work", meaning: "運作", tail: "." },
              ],
            },
            {
              sentence: "She works hard.",
              translation: "她工作很認真。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "works", meaning: "工作", tail: " " },
                { text: "hard", meaning: "努力地", tail: "." },
              ],
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
              pronunciation: ["laɪk"],
              specific_note: "",
              segments: [{ text: "like", meaning: "喜歡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I like it.",
              translation: "我喜歡它。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "it", meaning: "它", tail: "." },
              ],
            },
            {
              sentence: "I like pizza.",
              translation: "我喜歡披薩。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "pizza", meaning: "披薩", tail: "." },
              ],
            },
            {
              sentence: "Do you like him?",
              translation: "你喜歡他嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "him", meaning: "他", tail: "?" },
              ],
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
              pronunciation: ["weɪk ʌp"],
              specific_note: "",
              segments: [
                { text: "wake", meaning: "醒", tail: " " },
                { text: "up", meaning: "起來", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Wake up now.",
              translation: "現在醒來。",
              segments: [
                { text: "Wake", meaning: "醒", tail: " " },
                { text: "up", meaning: "起來", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "I usually wake up at 7.",
              translation: "我通常7點起床。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "usually", meaning: "通常", tail: " " },
                { text: "wake", meaning: "醒", tail: " " },
                { text: "up", meaning: "起來", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "7", meaning: "七點", tail: "." },
              ],
            },
            {
              sentence: "Wake up! You are late.",
              translation: "醒醒！你遲到了。",
              segments: [
                { text: "Wake", meaning: "醒", tail: " " },
                { text: "up", meaning: "起來", tail: "! " },
                { text: "You", meaning: "你", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "late", meaning: "遲到", tail: "." },
              ],
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
              pronunciation: ["spik"],
              specific_note: "",
              segments: [{ text: "speak", meaning: "說", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Speak English.",
              translation: "說英文。",
              segments: [
                { text: "Speak", meaning: "說", tail: " " },
                { text: "English", meaning: "英文", tail: "." },
              ],
            },
            {
              sentence: "Can I speak to Tom?",
              translation: "我可以跟湯姆說話嗎？(電話中)",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "speak", meaning: "說話", tail: " " },
                { text: "to", meaning: "對", tail: " " },
                { text: "Tom", meaning: "湯姆", tail: "?" },
              ],
            },
            {
              sentence: "Please speak slowly.",
              translation: "請說慢一點。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "speak", meaning: "說", tail: " " },
                { text: "slowly", meaning: "慢地", tail: "." },
              ],
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
              pronunciation: ["hɪr"],
              specific_note: "",
              segments: [{ text: "hear", meaning: "聽見", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Can you hear me?",
              translation: "聽得到我嗎？",
              segments: [
                { text: "Can", meaning: "能", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "hear", meaning: "聽見", tail: " " },
                { text: "me", meaning: "我", tail: "?" },
              ],
            },
            {
              sentence: "I didn't hear you.",
              translation: "我沒聽到你說話。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "didn't", meaning: "沒有", tail: " " },
                { text: "hear", meaning: "聽見", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Did you hear that noise?",
              translation: "你有聽到那個聲音嗎？",
              segments: [
                { text: "Did", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "hear", meaning: "聽見", tail: " " },
                { text: "that", meaning: "那個", tail: " " },
                { text: "noise", meaning: "噪音", tail: "?" },
              ],
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
              pronunciation: ["raɪt"],
              specific_note: "",
              segments: [{ text: "write", meaning: "寫", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Write a name.",
              translation: "寫名字。",
              segments: [
                { text: "Write", meaning: "寫", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "name", meaning: "名字", tail: "." },
              ],
            },
            {
              sentence: "Please write it down.",
              translation: "請把它寫下來。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "write", meaning: "寫", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "down", meaning: "下", tail: "." },
              ],
            },
            {
              sentence: "She writes books.",
              translation: "她寫書。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "writes", meaning: "寫", tail: " " },
                { text: "books", meaning: "書", tail: "." },
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
              term_target: "read",
              pronunciation: ["rid"],
              specific_note: "",
              segments: [{ text: "read", meaning: "閱讀", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Read a book.",
              translation: "看書。",
              segments: [
                { text: "Read", meaning: "閱讀", tail: " " },
                { text: "a", meaning: "一本", tail: " " },
                { text: "book", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "I like reading news.",
              translation: "我喜歡看新聞。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "reading", meaning: "閱讀", tail: " " },
                { text: "news", meaning: "新聞", tail: "." },
              ],
            },
            {
              sentence: "Can you read this email?",
              translation: "你可以讀這封信嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "read", meaning: "閱讀", tail: " " },
                { text: "this", meaning: "這封", tail: " " },
                { text: "email", meaning: "電子郵件", tail: "?" },
              ],
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
              pronunciation: ["weɪt"],
              specific_note: "",
              segments: [{ text: "wait", meaning: "等待", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Wait for me.",
              translation: "等我。",
              segments: [
                { text: "Wait", meaning: "等", tail: " " },
                { text: "for", meaning: "為了", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Wait a minute.",
              translation: "等一下。",
              segments: [
                { text: "Wait", meaning: "等", tail: " " },
                { text: "a", meaning: "一", tail: " " },
                { text: "minute", meaning: "分鐘", tail: "." },
              ],
            },
            {
              sentence: "I am waiting for the bus.",
              translation: "我在等公車。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "正在", tail: " " },
                { text: "waiting", meaning: "等待", tail: " " },
                { text: "for", meaning: "為了", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "bus", meaning: "公車", tail: "." },
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
              term_target: "try",
              pronunciation: ["traɪ"],
              specific_note: "",
              segments: [{ text: "try", meaning: "嘗試", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Try this.",
              translation: "試試這個。",
              segments: [
                { text: "Try", meaning: "試", tail: " " },
                { text: "this", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "Please try again.",
              translation: "請再試一次。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "try", meaning: "試", tail: " " },
                { text: "again", meaning: "再次", tail: "." },
              ],
            },
            {
              sentence: "I will try my best.",
              translation: "我會盡力而為。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "will", meaning: "會", tail: " " },
                { text: "try", meaning: "嘗試", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "best", meaning: "最好", tail: "." },
              ],
            },
          ],
          usage_note: "試驗。",
          image_file: "try.png",
        },
        {
          id: "v-26",
          term_zh: "付錢",
          related_terms: [
            {
              term_target: "pay",
              pronunciation: ["peɪ"],
              specific_note: "",
              segments: [{ text: "pay", meaning: "付錢", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Pay the bill.",
              translation: "付帳單。",
              segments: [
                { text: "Pay", meaning: "付", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "bill", meaning: "帳單", tail: "." },
              ],
            },
            {
              sentence: "I will pay for dinner.",
              translation: "晚餐我請客(我付錢)。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "will", meaning: "會", tail: " " },
                { text: "pay", meaning: "付", tail: " " },
                { text: "for", meaning: "為了", tail: " " },
                { text: "dinner", meaning: "晚餐", tail: "." },
              ],
            },
            {
              sentence: "How much did you pay?",
              translation: "你付了多少錢？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "much", meaning: "多", tail: " " },
                { text: "did", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "pay", meaning: "付", tail: "?" },
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
              term_target: "choose",
              pronunciation: ["tʃuz"],
              specific_note: "",
              segments: [{ text: "choose", meaning: "選擇", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Choose one.",
              translation: "選一個。",
              segments: [
                { text: "Choose", meaning: "選擇", tail: " " },
                { text: "one", meaning: "一個", tail: "." },
              ],
            },
            {
              sentence: "It's hard to choose.",
              translation: "很難選擇。",
              segments: [
                { text: "It's", meaning: "它是", tail: " " },
                { text: "hard", meaning: "困難的", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "choose", meaning: "選擇", tail: "." },
              ],
            },
            {
              sentence: "Choose wisely.",
              translation: "明智地選擇。",
              segments: [
                { text: "Choose", meaning: "選擇", tail: " " },
                { text: "wisely", meaning: "明智地", tail: "." },
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
              term_target: "enter",
              pronunciation: ["ˈɛntɚ"],
              specific_note: "",
              segments: [{ text: "enter", meaning: "進入", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Enter the room.",
              translation: "進房間。",
              segments: [
                { text: "Enter", meaning: "進入", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "room", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "Do not enter.",
              translation: "禁止進入。",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "not", meaning: "不", tail: " " },
                { text: "enter", meaning: "進入", tail: "." },
              ],
            },
            {
              sentence: "Please enter your password.",
              translation: "請輸入你的密碼。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "enter", meaning: "輸入/進入", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "password", meaning: "密碼", tail: "." },
              ],
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
              pronunciation: ["lɪv"],
              specific_note: "",
              segments: [{ text: "live", meaning: "居住", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I live here.",
              translation: "我住這裡。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "live", meaning: "住", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Where do you live?",
              translation: "你住在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "live", meaning: "住", tail: "?" },
              ],
            },
            {
              sentence: "They live in Japan.",
              translation: "他們住在日本。",
              segments: [
                { text: "They", meaning: "他們", tail: " " },
                { text: "live", meaning: "住", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "Japan", meaning: "日本", tail: "." },
              ],
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
              pronunciation: ["əˈraɪv"],
              specific_note: "",
              segments: [{ text: "arrive", meaning: "到達", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Arrive late.",
              translation: "晚到。",
              segments: [
                { text: "Arrive", meaning: "到達", tail: " " },
                { text: "late", meaning: "遲", tail: "." },
              ],
            },
            {
              sentence: "When do we arrive?",
              translation: "我們什麼時候到？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "we", meaning: "我們", tail: " " },
                { text: "arrive", meaning: "到達", tail: "?" },
              ],
            },
            {
              sentence: "The train has arrived.",
              translation: "火車已經到了。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "train", meaning: "火車", tail: " " },
                { text: "has", meaning: "已經", tail: " " },
                { text: "arrived", meaning: "到達", tail: "." },
              ],
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
              pronunciation: ["wɔk"],
              specific_note: "",
              segments: [{ text: "walk", meaning: "走路", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Walk home.",
              translation: "走路回家。",
              segments: [
                { text: "Walk", meaning: "走路", tail: " " },
                { text: "home", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Let's go for a walk.",
              translation: "我們去散步吧。",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "for", meaning: "為了", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "walk", meaning: "散步", tail: "." },
              ],
            },
            {
              sentence: "Don't run, walk.",
              translation: "別跑，用走的。",
              segments: [
                { text: "Don't", meaning: "別", tail: " " },
                { text: "run", meaning: "跑", tail: ", " },
                { text: "walk", meaning: "走", tail: "." },
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
              term_target: "open",
              pronunciation: ["ˈoʊpən"],
              specific_note: "",
              segments: [{ text: "open", meaning: "打開", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Open the door.",
              translation: "開門。",
              segments: [
                { text: "Open", meaning: "打開", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "door", meaning: "門", tail: "." },
              ],
            },
            {
              sentence: "The store is open.",
              translation: "商店開著。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "store", meaning: "商店", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "open", meaning: "開著的", tail: "." },
              ],
            },
            {
              sentence: "Please open your book.",
              translation: "請打開你的書。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "open", meaning: "打開", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "book", meaning: "書", tail: "." },
              ],
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
              pronunciation: ["kloʊz"],
              specific_note: "",
              segments: [{ text: "close", meaning: "關閉", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Close the window.",
              translation: "關窗。",
              segments: [
                { text: "Close", meaning: "關", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "window", meaning: "窗戶", tail: "." },
              ],
            },
            {
              sentence: "The shop is closed.",
              translation: "店已經關了。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "shop", meaning: "商店", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "closed", meaning: "關閉的", tail: "." },
              ],
            },
            {
              sentence: "Close your eyes.",
              translation: "閉上你的眼睛。",
              segments: [
                { text: "Close", meaning: "閉上", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "eyes", meaning: "眼睛", tail: "." },
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
              term_target: "help",
              pronunciation: ["hɛlp"],
              specific_note: "",
              segments: [{ text: "help", meaning: "幫助", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Help me.",
              translation: "幫我。",
              segments: [
                { text: "Help", meaning: "幫助", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Can I help you?",
              translation: "需要我幫忙嗎？",
              segments: [
                { text: "Can", meaning: "能", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "help", meaning: "幫助", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
            },
            {
              sentence: "Thanks for your help.",
              translation: "謝謝你的幫忙。",
              segments: [
                { text: "Thanks", meaning: "謝謝", tail: " " },
                { text: "for", meaning: "為了", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "help", meaning: "幫助", tail: "." },
              ],
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
              pronunciation: ["brɪŋ"],
              specific_note: "",
              segments: [{ text: "bring", meaning: "帶來", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bring water.",
              translation: "帶水來。",
              segments: [
                { text: "Bring", meaning: "帶", tail: " " },
                { text: "water", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "Bring your friend.",
              translation: "帶你朋友來。",
              segments: [
                { text: "Bring", meaning: "帶", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "friend", meaning: "朋友", tail: "." },
              ],
            },
            {
              sentence: "Don't forget to bring money.",
              translation: "別忘了帶錢。",
              segments: [
                { text: "Don't", meaning: "別", tail: " " },
                { text: "forget", meaning: "忘記", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "bring", meaning: "帶", tail: " " },
                { text: "money", meaning: "錢", tail: "." },
              ],
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
              pronunciation: ["nid"],
              specific_note: "",
              segments: [{ text: "need", meaning: "需要", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I need help.",
              translation: "我需要幫忙。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "help", meaning: "幫忙", tail: "." },
              ],
            },
            {
              sentence: "He needs a break.",
              translation: "他需要休息。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "needs", meaning: "需要", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "break", meaning: "休息", tail: "." },
              ],
            },
            {
              sentence: "I need to go now.",
              translation: "我現在得走了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "go", meaning: "走", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
          ],
          usage_note: "必要。",
          image_file: "need.png",
        },
        {
          id: "v-37",
          term_zh: "使用",
          related_terms: [
            {
              term_target: "use",
              pronunciation: ["juz"],
              specific_note: "",
              segments: [{ text: "use", meaning: "使用", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Use phone.",
              translation: "用手機。",
              segments: [
                { text: "Use", meaning: "用", tail: " " },
                { text: "phone", meaning: "手機", tail: "." },
              ],
            },
            {
              sentence: "Use this tool.",
              translation: "使用這個工具。",
              segments: [
                { text: "Use", meaning: "使用", tail: " " },
                { text: "this", meaning: "這個", tail: " " },
                { text: "tool", meaning: "工具", tail: "." },
              ],
            },
            {
              sentence: "Do not use the elevator.",
              translation: "請勿使用電梯。",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "not", meaning: "不", tail: " " },
                { text: "use", meaning: "使用", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "elevator", meaning: "電梯", tail: "." },
              ],
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
              pronunciation: ["bɪˈkʌm"],
              specific_note: "",
              segments: [{ text: "become", meaning: "變成", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Become a doctor.",
              translation: "變成醫生。",
              segments: [
                { text: "Become", meaning: "成為", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "doctor", meaning: "醫生", tail: "." },
              ],
            },
            {
              sentence: "It became dark.",
              translation: "天色變暗了。",
              segments: [
                { text: "It", meaning: "它(天色)", tail: " " },
                { text: "became", meaning: "變得(過去式)", tail: " " },
                { text: "dark", meaning: "暗", tail: "." },
              ],
            },
            {
              sentence: "He wants to become a teacher.",
              translation: "他想成為一名老師。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "wants", meaning: "想要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "become", meaning: "成為", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "teacher", meaning: "老師", tail: "." },
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
              term_target: "start",
              pronunciation: ["stɑrt"],
              specific_note: "",
              segments: [{ text: "start", meaning: "開始", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Start now.",
              translation: "現在開始。",
              segments: [
                { text: "Start", meaning: "開始", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Let's start.",
              translation: "我們開始吧。",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "start", meaning: "開始", tail: "." },
              ],
            },
            {
              sentence: "The movie starts at 8.",
              translation: "電影8點開始。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "movie", meaning: "電影", tail: " " },
                { text: "starts", meaning: "開始", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "8", meaning: "八點", tail: "." },
              ],
            },
          ],
          usage_note: "開始。",
          image_file: "start.png",
        },
        {
          id: "v-41",
          term_zh: "結束",
          related_terms: [
            {
              term_target: "finish",
              pronunciation: ["ˈfɪnɪʃ"],
              specific_note: "",
              segments: [{ text: "finish", meaning: "結束", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Finish work.",
              translation: "工作結束。",
              segments: [
                { text: "Finish", meaning: "結束", tail: " " },
                { text: "work", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "I haven't finished yet.",
              translation: "我還沒做完。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "haven't", meaning: "還沒", tail: " " },
                { text: "finished", meaning: "完成", tail: " " },
                { text: "yet", meaning: "尚未", tail: "." },
              ],
            },
            {
              sentence: "Did you finish your food?",
              translation: "你吃完了嗎？",
              segments: [
                { text: "Did", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "finish", meaning: "吃完/完成", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "food", meaning: "食物", tail: "?" },
              ],
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
              pronunciation: ["stɑp"],
              specific_note: "",
              segments: [{ text: "stop", meaning: "停止", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Stop here.",
              translation: "停這裡。",
              segments: [
                { text: "Stop", meaning: "停", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Please stop talking.",
              translation: "請停止說話。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "stop", meaning: "停止", tail: " " },
                { text: "talking", meaning: "說話", tail: "." },
              ],
            },
            {
              sentence: "The bus stopped.",
              translation: "公車停了。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "bus", meaning: "公車", tail: " " },
                { text: "stopped", meaning: "停了", tail: "." },
              ],
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
              pronunciation: ["rɪˈmɛmbɚ"],
              specific_note: "",
              segments: [{ text: "remember", meaning: "記住", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Remember me.",
              translation: "記得我。",
              segments: [
                { text: "Remember", meaning: "記得", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "I don't remember.",
              translation: "我不記得了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "remember", meaning: "記得", tail: "." },
              ],
            },
            {
              sentence: "Remember to call mom.",
              translation: "記得打電話給媽媽。",
              segments: [
                { text: "Remember", meaning: "記得", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "call", meaning: "打給", tail: " " },
                { text: "mom", meaning: "媽媽", tail: "." },
              ],
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
              pronunciation: ["tɔk"],
              specific_note: "",
              segments: [{ text: "talk", meaning: "談話", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Talk to me.",
              translation: "跟我說話。",
              segments: [
                { text: "Talk", meaning: "說話", tail: " " },
                { text: "to", meaning: "對", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "We need to talk.",
              translation: "我們需要談談。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "talk", meaning: "談談", tail: "." },
              ],
            },
            {
              sentence: "Don't talk to strangers.",
              translation: "不要跟陌生人說話。",
              segments: [
                { text: "Don't", meaning: "不要", tail: " " },
                { text: "talk", meaning: "說話", tail: " " },
                { text: "to", meaning: "對", tail: " " },
                { text: "strangers", meaning: "陌生人", tail: "." },
              ],
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
              pronunciation: ["mit"],
              specific_note: "",
              segments: [{ text: "meet", meaning: "見面", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Meet friends.",
              translation: "見朋友。",
              segments: [
                { text: "Meet", meaning: "見", tail: " " },
                { text: "friends", meaning: "朋友", tail: "." },
              ],
            },
            {
              sentence: "Nice to meet you.",
              translation: "很高興認識你。",
              segments: [
                { text: "Nice", meaning: "好的/高興", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "meet", meaning: "遇見", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Let's meet at the park.",
              translation: "我們在公園碰面吧。",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "meet", meaning: "碰面", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "park", meaning: "公園", tail: "." },
              ],
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
              pronunciation: ["teɪk"],
              specific_note: "",
              segments: [{ text: "take", meaning: "乘坐/拿", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Take a bus.",
              translation: "搭公車。",
              segments: [
                { text: "Take", meaning: "搭乘", tail: " " },
                { text: "a", meaning: "一台", tail: " " },
                { text: "bus", meaning: "公車", tail: "." },
              ],
            },
            {
              sentence: "Take a break.",
              translation: "休息一下。",
              segments: [
                { text: "Take", meaning: "進行/拿", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "break", meaning: "休息", tail: "." },
              ],
            },
            {
              sentence: "Take this medicine.",
              translation: "吃這藥。",
              segments: [
                { text: "Take", meaning: "服用/拿", tail: " " },
                { text: "this", meaning: "這", tail: " " },
                { text: "medicine", meaning: "藥", tail: "." },
              ],
            },
          ],
          usage_note: "搭乘。",
          image_file: "take.png",
        },
        {
          id: "v-47",
          term_zh: "放",
          related_terms: [
            {
              term_target: "put",
              pronunciation: ["pʊt"],
              specific_note: "",
              segments: [{ text: "put", meaning: "放", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Put it down.",
              translation: "放下它。",
              segments: [
                { text: "Put", meaning: "放", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "down", meaning: "下", tail: "." },
              ],
            },
            {
              sentence: "Put on your shoes.",
              translation: "穿上你的鞋子。",
              segments: [
                { text: "Put", meaning: "放", tail: " " },
                { text: "on", meaning: "在...上(穿上)", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "shoes", meaning: "鞋子", tail: "." },
              ],
            },
            {
              sentence: "Where should I put this?",
              translation: "這個我要放哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "should", meaning: "應該", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "put", meaning: "放", tail: " " },
                { text: "this", meaning: "這個", tail: "?" },
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
              term_target: "eat",
              pronunciation: ["it"],
              specific_note: "",
              segments: [{ text: "eat", meaning: "吃", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Eat dinner.",
              translation: "吃晚餐。",
              segments: [
                { text: "Eat", meaning: "吃", tail: " " },
                { text: "dinner", meaning: "晚餐", tail: "." },
              ],
            },
            {
              sentence: "What do you want to eat?",
              translation: "你想吃什麼？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "eat", meaning: "吃", tail: "?" },
              ],
            },
            {
              sentence: "Don't eat too much.",
              translation: "不要吃太多。",
              segments: [
                { text: "Don't", meaning: "別", tail: " " },
                { text: "eat", meaning: "吃", tail: " " },
                { text: "too", meaning: "太", tail: " " },
                { text: "much", meaning: "多", tail: "." },
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
              term_target: "sleep",
              pronunciation: ["slip"],
              specific_note: "",
              segments: [{ text: "sleep", meaning: "睡覺", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Go to sleep.",
              translation: "去睡覺。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "to", meaning: "...", tail: " " },
                { text: "sleep", meaning: "睡覺", tail: "." },
              ],
            },
            {
              sentence: "I didn't sleep well.",
              translation: "我沒睡好。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "didn't", meaning: "沒有", tail: " " },
                { text: "sleep", meaning: "睡", tail: " " },
                { text: "well", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "The baby is sleeping.",
              translation: "寶寶在睡覺。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "baby", meaning: "寶寶", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "sleeping", meaning: "睡覺", tail: "." },
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
              term_target: "send",
              pronunciation: ["sɛnd"],
              specific_note: "",
              segments: [{ text: "send", meaning: "寄送", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Send email.",
              translation: "寄信。",
              segments: [
                { text: "Send", meaning: "寄送", tail: " " },
                { text: "email", meaning: "電子郵件", tail: "." },
              ],
            },
            {
              sentence: "Send me a message.",
              translation: "傳訊息給我。",
              segments: [
                { text: "Send", meaning: "傳送", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "message", meaning: "訊息", tail: "." },
              ],
            },
            {
              sentence: "I sent a gift to you.",
              translation: "我寄了一個禮物給你。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "sent", meaning: "寄了(過去式)", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "gift", meaning: "禮物", tail: " " },
                { text: "to", meaning: "給", tail: " " },
                { text: "you", meaning: "你", tail: "." },
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
              term_target: "drive",
              pronunciation: ["draɪv"],
              specific_note: "",
              segments: [{ text: "drive", meaning: "駕駛", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Drive a car.",
              translation: "開車。",
              segments: [
                { text: "Drive", meaning: "駕駛", tail: " " },
                { text: "a", meaning: "一台", tail: " " },
                { text: "car", meaning: "車", tail: "." },
              ],
            },
            {
              sentence: "Can you drive?",
              translation: "你會開車嗎？",
              segments: [
                { text: "Can", meaning: "會", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "drive", meaning: "開車", tail: "?" },
              ],
            },
            {
              sentence: "Please drive safely.",
              translation: "請小心駕駛。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "drive", meaning: "駕駛", tail: " " },
                { text: "safely", meaning: "安全地", tail: "." },
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
              term_target: "study",
              pronunciation: ["ˈstʌdi"],
              specific_note: "",
              segments: [{ text: "study", meaning: "學習", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Study hard.",
              translation: "用功讀書。",
              segments: [
                { text: "Study", meaning: "讀書", tail: " " },
                { text: "hard", meaning: "努力地", tail: "." },
              ],
            },
            {
              sentence: "I study English every day.",
              translation: "我每天讀英文。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "study", meaning: "讀", tail: " " },
                { text: "English", meaning: "英文", tail: " " },
                { text: "every", meaning: "每", tail: " " },
                { text: "day", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "She is studying for a test.",
              translation: "她正在為考試讀書。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "studying", meaning: "讀書", tail: " " },
                { text: "for", meaning: "為了", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "test", meaning: "考試", tail: "." },
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
              term_target: "go back",
              pronunciation: ["goʊ bæk"],
              specific_note: "",
              segments: [
                { text: "go", meaning: "去", tail: " " },
                { text: "back", meaning: "回", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Go back home.",
              translation: "回家。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "back", meaning: "回", tail: " " },
                { text: "home", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Go back to your seat.",
              translation: "回你的座位。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "back", meaning: "回", tail: " " },
                { text: "to", meaning: "到", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "seat", meaning: "座位", tail: "." },
              ],
            },
            {
              sentence: "Let's go back.",
              translation: "我們回去吧。",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "back", meaning: "回", tail: "." },
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
              term_target: "understand",
              pronunciation: ["ˌʌndɚˈstænd"],
              specific_note: "",
              segments: [{ text: "understand", meaning: "了解", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I understand.",
              translation: "我懂了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "understand", meaning: "了解", tail: "." },
              ],
            },
            {
              sentence: "Do you understand?",
              translation: "你明白嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "understand", meaning: "了解", tail: "?" },
              ],
            },
            {
              sentence: "I don't understand French.",
              translation: "我不懂法文。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "understand", meaning: "了解", tail: " " },
                { text: "French", meaning: "法文", tail: "." },
              ],
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
              segments: [{ text: "good", meaning: "好", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Good job.",
              translation: "做得好。",
              segments: [
                { text: "Good", meaning: "好", tail: " " },
                { text: "job", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "Have a good day.",
              translation: "祝你有美好的一天。",
              segments: [
                { text: "Have", meaning: "有", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "good", meaning: "美好的", tail: " " },
                { text: "day", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "This is a good book.",
              translation: "這是一本好書。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一本", tail: " " },
                { text: "good", meaning: "好", tail: " " },
                { text: "book", meaning: "書", tail: "." },
              ],
            },
          ],
          usage_note: "正面。",
          image_file: "good.png",
        },
        {
          id: "adj-02",
          term_zh: "壞的",
          related_terms: [
            {
              term_target: "bad",
              pronunciation: ["/bæd/"],
              specific_note: "",
              segments: [{ text: "bad", meaning: "壞", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bad boy.",
              translation: "壞男孩。",
              segments: [
                { text: "Bad", meaning: "壞", tail: " " },
                { text: "boy", meaning: "男孩", tail: "." },
              ],
            },
            {
              sentence: "Smoking is bad for health.",
              translation: "吸菸對健康不好。",
              segments: [
                { text: "Smoking", meaning: "吸菸", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "bad", meaning: "不好", tail: " " },
                { text: "for", meaning: "對...", tail: " " },
                { text: "health", meaning: "健康", tail: "." },
              ],
            },
            {
              sentence: "I have some bad news.",
              translation: "我有一些壞消息。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "some", meaning: "一些", tail: " " },
                { text: "bad", meaning: "壞", tail: " " },
                { text: "news", meaning: "消息", tail: "." },
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
              term_target: "new",
              pronunciation: ["/nu/"],
              specific_note: "",
              segments: [{ text: "new", meaning: "新", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "New phone.",
              translation: "新手機。",
              segments: [
                { text: "New", meaning: "新", tail: " " },
                { text: "phone", meaning: "手機", tail: "." },
              ],
            },
            {
              sentence: "Happy New Year!",
              translation: "新年快樂！",
              segments: [
                { text: "Happy", meaning: "快樂", tail: " " },
                { text: "New", meaning: "新", tail: " " },
                { text: "Year", meaning: "年", tail: "!" },
              ],
            },
            {
              sentence: "I made a new friend.",
              translation: "我交了一個新朋友。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "made", meaning: "交(朋友)", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "new", meaning: "新", tail: " " },
                { text: "friend", meaning: "朋友", tail: "." },
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
              term_target: "first",
              pronunciation: ["/fɝst/"],
              specific_note: "",
              segments: [{ text: "first", meaning: "第一", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "First time.",
              translation: "第一次。",
              segments: [
                { text: "First", meaning: "第一", tail: " " },
                { text: "time", meaning: "次", tail: "." },
              ],
            },
            {
              sentence: "Who is the first one?",
              translation: "誰是第一個？",
              segments: [
                { text: "Who", meaning: "誰", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "the", meaning: "這個", tail: " " },
                { text: "first", meaning: "第一", tail: " " },
                { text: "one", meaning: "個", tail: "?" },
              ],
            },
            {
              sentence: "First of all, thank you.",
              translation: "首先，謝謝你。",
              segments: [
                { text: "First", meaning: "第一", tail: " " },
                { text: "of", meaning: "的", tail: " " },
                { text: "all", meaning: "全部", tail: ", " },
                { text: "thank", meaning: "謝謝", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
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
              segments: [{ text: "last", meaning: "最後/上一個", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Last week.",
              translation: "上週。",
              segments: [
                { text: "Last", meaning: "上一個", tail: " " },
                { text: "week", meaning: "週", tail: "." },
              ],
            },
            {
              sentence: "This is the last chance.",
              translation: "這是最後一次機會。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "the", meaning: "這個", tail: " " },
                { text: "last", meaning: "最後", tail: " " },
                { text: "chance", meaning: "機會", tail: "." },
              ],
            },
            {
              sentence: "Last night was fun.",
              translation: "昨晚很有趣。",
              segments: [
                { text: "Last", meaning: "昨", tail: " " },
                { text: "night", meaning: "晚", tail: " " },
                { text: "was", meaning: "是(過去式)", tail: " " },
                { text: "fun", meaning: "有趣的", tail: "." },
              ],
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
              segments: [{ text: "next", meaning: "下一個", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Next station.",
              translation: "下一站。",
              segments: [
                { text: "Next", meaning: "下一", tail: " " },
                { text: "station", meaning: "站", tail: "." },
              ],
            },
            {
              sentence: "See you next time.",
              translation: "下次見。",
              segments: [
                { text: "See", meaning: "見", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "next", meaning: "下次", tail: " " },
                { text: "time", meaning: "時間", tail: "." },
              ],
            },
            {
              sentence: "Who is next?",
              translation: "下一位是誰？",
              segments: [
                { text: "Who", meaning: "誰", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "next", meaning: "下一個", tail: "?" },
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
              term_target: "long",
              pronunciation: ["/lɔŋ/"],
              specific_note: "",
              segments: [{ text: "long", meaning: "長", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Long hair.",
              translation: "長髮。",
              segments: [
                { text: "Long", meaning: "長", tail: " " },
                { text: "hair", meaning: "頭髮", tail: "." },
              ],
            },
            {
              sentence: "It's a long story.",
              translation: "這說來話長。",
              segments: [
                { text: "It's", meaning: "它是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "long", meaning: "長", tail: " " },
                { text: "story", meaning: "故事", tail: "." },
              ],
            },
            {
              sentence: "How long will it take?",
              translation: "這要花多久時間？",
              segments: [
                { text: "How", meaning: "多", tail: " " },
                { text: "long", meaning: "長(久)", tail: " " },
                { text: "will", meaning: "將會", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "take", meaning: "花費", tail: "?" },
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
              term_target: "big",
              pronunciation: ["/bɪg/"],
              specific_note: "",
              segments: [{ text: "big", meaning: "大", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Big house.",
              translation: "大房子。",
              segments: [
                { text: "Big", meaning: "大", tail: " " },
                { text: "house", meaning: "房子", tail: "." },
              ],
            },
            {
              sentence: "That is a big dog.",
              translation: "那是隻大狗。",
              segments: [
                { text: "That", meaning: "那", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一隻", tail: " " },
                { text: "big", meaning: "大", tail: " " },
                { text: "dog", meaning: "狗", tail: "." },
              ],
            },
            {
              sentence: "I have a big dream.",
              translation: "我有一個大夢想。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "big", meaning: "大", tail: " " },
                { text: "dream", meaning: "夢想", tail: "." },
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
              term_target: "small",
              pronunciation: ["/smɔl/"],
              specific_note: "",
              segments: [{ text: "small", meaning: "小", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Small size.",
              translation: "小尺寸。",
              segments: [
                { text: "Small", meaning: "小", tail: " " },
                { text: "size", meaning: "尺寸", tail: "." },
              ],
            },
            {
              sentence: "It's a small world.",
              translation: "世界真小。",
              segments: [
                { text: "It's", meaning: "它是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "small", meaning: "小", tail: " " },
                { text: "world", meaning: "世界", tail: "." },
              ],
            },
            {
              sentence: "He has small hands.",
              translation: "他的手很小。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "has", meaning: "有", tail: " " },
                { text: "small", meaning: "小", tail: " " },
                { text: "hands", meaning: "手", tail: "." },
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
              term_target: "many",
              pronunciation: ["/ˈmɛni/"],
              specific_note: "可數",
              segments: [{ text: "many", meaning: "許多", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Many people.",
              translation: "很多人。",
              segments: [
                { text: "Many", meaning: "許多", tail: " " },
                { text: "people", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "How many apples?",
              translation: "有多少蘋果？",
              segments: [
                { text: "How", meaning: "如何/多少", tail: " " },
                { text: "many", meaning: "多", tail: " " },
                { text: "apples", meaning: "蘋果", tail: "?" },
              ],
            },
            {
              sentence: "I have many friends.",
              translation: "我有很多朋友。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "many", meaning: "許多", tail: " " },
                { text: "friends", meaning: "朋友", tail: "." },
              ],
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
              segments: [{ text: "tall", meaning: "高", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tall building.",
              translation: "高樓。",
              segments: [
                { text: "Tall", meaning: "高", tail: " " },
                { text: "building", meaning: "建築物", tail: "." },
              ],
            },
            {
              sentence: "He is tall.",
              translation: "他很高。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "tall", meaning: "高", tail: "." },
              ],
            },
            {
              sentence: "How tall are you?",
              translation: "你多高？",
              segments: [
                { text: "How", meaning: "多", tail: " " },
                { text: "tall", meaning: "高", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
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
              segments: [{ text: "young", meaning: "年輕", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Young man.",
              translation: "年輕人。",
              segments: [
                { text: "Young", meaning: "年輕", tail: " " },
                { text: "man", meaning: "男人", tail: "." },
              ],
            },
            {
              sentence: "She looks very young.",
              translation: "她看起來很年輕。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "looks", meaning: "看起來", tail: " " },
                { text: "very", meaning: "非常", tail: " " },
                { text: "young", meaning: "年輕", tail: "." },
              ],
            },
            {
              sentence: "When I was young.",
              translation: "當我年輕的時候。",
              segments: [
                { text: "When", meaning: "當...時", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "was", meaning: "是(過去式)", tail: " " },
                { text: "young", meaning: "年輕", tail: "." },
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
              term_target: "old",
              pronunciation: ["/oʊld/"],
              specific_note: "",
              segments: [{ text: "old", meaning: "老/舊", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Old book.",
              translation: "舊書。",
              segments: [
                { text: "Old", meaning: "舊", tail: " " },
                { text: "book", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "How old are you?",
              translation: "你幾歲？",
              segments: [
                { text: "How", meaning: "多", tail: " " },
                { text: "old", meaning: "老(歲)", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
            },
            {
              sentence: "This car is very old.",
              translation: "這台車很舊。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "car", meaning: "車", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "very", meaning: "非常", tail: " " },
                { text: "old", meaning: "舊", tail: "." },
              ],
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
              segments: [{ text: "near", meaning: "近", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Near here.",
              translation: "在這附近。",
              segments: [
                { text: "Near", meaning: "靠近", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Is the station near?",
              translation: "車站近嗎？",
              segments: [
                { text: "Is", meaning: "是", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "station", meaning: "車站", tail: " " },
                { text: "near", meaning: "近", tail: "?" },
              ],
            },
            {
              sentence: "Come near me.",
              translation: "靠近我。",
              segments: [
                { text: "Come", meaning: "來", tail: " " },
                { text: "near", meaning: "靠近", tail: " " },
                { text: "me", meaning: "我", tail: "." },
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
              term_target: "far",
              pronunciation: ["/fɑr/"],
              specific_note: "",
              segments: [{ text: "far", meaning: "遠", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Far away.",
              translation: "很遠。",
              segments: [
                { text: "Far", meaning: "遠", tail: " " },
                { text: "away", meaning: "離開", tail: "." },
              ],
            },
            {
              sentence: "How far is it?",
              translation: "那有多遠？",
              segments: [
                { text: "How", meaning: "多", tail: " " },
                { text: "far", meaning: "遠", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "it", meaning: "它", tail: "?" },
              ],
            },
            {
              sentence: "It's not too far.",
              translation: "不會太遠。",
              segments: [
                { text: "It's", meaning: "它是", tail: " " },
                { text: "not", meaning: "不", tail: " " },
                { text: "too", meaning: "太", tail: " " },
                { text: "far", meaning: "遠", tail: "." },
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
              term_target: "fast",
              pronunciation: ["/fæst/"],
              specific_note: "",
              segments: [{ text: "fast", meaning: "快", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Run fast.",
              translation: "跑得快。",
              segments: [
                { text: "Run", meaning: "跑", tail: " " },
                { text: "fast", meaning: "快", tail: "." },
              ],
            },
            {
              sentence: "Fast food.",
              translation: "速食。",
              segments: [
                { text: "Fast", meaning: "快速", tail: " " },
                { text: "food", meaning: "食物", tail: "." },
              ],
            },
            {
              sentence: "Time goes fast.",
              translation: "時間過得很快。",
              segments: [
                { text: "Time", meaning: "時間", tail: " " },
                { text: "goes", meaning: "走", tail: " " },
                { text: "fast", meaning: "快", tail: "." },
              ],
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
              segments: [{ text: "slow", meaning: "慢", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Walk slow.",
              translation: "走得慢。",
              segments: [
                { text: "Walk", meaning: "走", tail: " " },
                { text: "slow", meaning: "慢", tail: "." },
              ],
            },
            {
              sentence: "Slow down, please.",
              translation: "請慢一點。",
              segments: [
                { text: "Slow", meaning: "慢", tail: " " },
                { text: "down", meaning: "下", tail: ", " },
                { text: "please", meaning: "請", tail: "." },
              ],
            },
            {
              sentence: "The internet is slow.",
              translation: "網路很慢。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "internet", meaning: "網路", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "slow", meaning: "慢", tail: "." },
              ],
            },
          ],
          usage_note: "速度慢。",
          image_file: "slow.png",
        },
        {
          id: "adj-18",
          term_zh: "熱的",
          related_terms: [
            {
              term_target: "hot",
              pronunciation: ["/hɑt/"],
              specific_note: "",
              segments: [{ text: "hot", meaning: "熱", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hot water.",
              translation: "熱水。",
              segments: [
                { text: "Hot", meaning: "熱", tail: " " },
                { text: "water", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "It is hot today.",
              translation: "今天很熱。",
              segments: [
                { text: "It", meaning: "它(天氣)", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "hot", meaning: "熱", tail: " " },
                { text: "today", meaning: "今天", tail: "." },
              ],
            },
            {
              sentence: "Be careful, it's hot.",
              translation: "小心，很燙。",
              segments: [
                { text: "Be", meaning: "要", tail: " " },
                { text: "careful", meaning: "小心", tail: ", " },
                { text: "it's", meaning: "它是", tail: " " },
                { text: "hot", meaning: "熱", tail: "." },
              ],
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
              segments: [{ text: "cold", meaning: "冷", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cold drink.",
              translation: "冷飲。",
              segments: [
                { text: "Cold", meaning: "冷", tail: " " },
                { text: "drink", meaning: "飲料", tail: "." },
              ],
            },
            {
              sentence: "It is cold outside.",
              translation: "外面很冷。",
              segments: [
                { text: "It", meaning: "它(天氣)", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "cold", meaning: "冷", tail: " " },
                { text: "outside", meaning: "外面", tail: "." },
              ],
            },
            {
              sentence: "I have a cold.",
              translation: "我感冒了 (作名詞用)。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "cold", meaning: "感冒", tail: "." },
              ],
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
              segments: [{ text: "clean", meaning: "乾淨", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Clean room.",
              translation: "乾淨的房間。",
              segments: [
                { text: "Clean", meaning: "乾淨", tail: " " },
                { text: "room", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "Keep your hands clean.",
              translation: "保持雙手乾淨。",
              segments: [
                { text: "Keep", meaning: "保持", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "hands", meaning: "手", tail: " " },
                { text: "clean", meaning: "乾淨", tail: "." },
              ],
            },
            {
              sentence: "The water is clean.",
              translation: "這水很乾淨。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "water", meaning: "水", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "clean", meaning: "乾淨", tail: "." },
              ],
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
              segments: [{ text: "dirty", meaning: "髒", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dirty hands.",
              translation: "髒手。",
              segments: [
                { text: "Dirty", meaning: "髒", tail: " " },
                { text: "hands", meaning: "手", tail: "." },
              ],
            },
            {
              sentence: "My shoes are dirty.",
              translation: "我的鞋子髒了。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "shoes", meaning: "鞋子", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "dirty", meaning: "髒", tail: "." },
              ],
            },
            {
              sentence: "Don't touch, it's dirty.",
              translation: "別碰，很髒。",
              segments: [
                { text: "Don't", meaning: "不要", tail: " " },
                { text: "touch", meaning: "碰", tail: ", " },
                { text: "it's", meaning: "它是", tail: " " },
                { text: "dirty", meaning: "髒", tail: "." },
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
              term_target: "easy",
              pronunciation: ["/ˈizi/"],
              specific_note: "",
              segments: [{ text: "easy", meaning: "簡單", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "It is easy.",
              translation: "這很簡單。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "easy", meaning: "簡單", tail: "." },
              ],
            },
            {
              sentence: "Take it easy.",
              translation: "放輕鬆。",
              segments: [
                { text: "Take", meaning: "拿", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "easy", meaning: "輕鬆", tail: "." },
              ],
            },
            {
              sentence: "English is easy.",
              translation: "英文很簡單。",
              segments: [
                { text: "English", meaning: "英文", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "easy", meaning: "簡單", tail: "." },
              ],
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
              segments: [{ text: "difficult", meaning: "困難", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "It is difficult.",
              translation: "很難。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "difficult", meaning: "困難", tail: "." },
              ],
            },
            {
              sentence: "This question is difficult.",
              translation: "這個問題很難。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "question", meaning: "問題", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "difficult", meaning: "困難", tail: "." },
              ],
            },
            {
              sentence: "Life can be difficult.",
              translation: "生活有時很艱難。",
              segments: [
                { text: "Life", meaning: "生活", tail: " " },
                { text: "can", meaning: "可能", tail: " " },
                { text: "be", meaning: "是", tail: " " },
                { text: "difficult", meaning: "困難", tail: "." },
              ],
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
              segments: [{ text: "correct", meaning: "正確", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Correct answer.",
              translation: "正確答案。",
              segments: [
                { text: "Correct", meaning: "正確", tail: " " },
                { text: "answer", meaning: "答案", tail: "." },
              ],
            },
            {
              sentence: "Is this correct?",
              translation: "這正確嗎？",
              segments: [
                { text: "Is", meaning: "是", tail: " " },
                { text: "this", meaning: "這", tail: " " },
                { text: "correct", meaning: "正確", tail: "?" },
              ],
            },
            {
              sentence: "You made the correct choice.",
              translation: "你做了正確的選擇。",
              segments: [
                { text: "You", meaning: "你", tail: " " },
                { text: "made", meaning: "做", tail: " " },
                { text: "the", meaning: "這個", tail: " " },
                { text: "correct", meaning: "正確", tail: " " },
                { text: "choice", meaning: "選擇", tail: "." },
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
              term_target: "wrong",
              pronunciation: ["/rɔŋ/"],
              specific_note: "",
              segments: [{ text: "wrong", meaning: "錯誤", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Wrong way.",
              translation: "錯的路。",
              segments: [
                { text: "Wrong", meaning: "錯", tail: " " },
                { text: "way", meaning: "路", tail: "." },
              ],
            },
            {
              sentence: "Something is wrong.",
              translation: "有點不對勁。",
              segments: [
                { text: "Something", meaning: "某事", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "wrong", meaning: "錯", tail: "." },
              ],
            },
            {
              sentence: "Sorry, wrong number.",
              translation: "抱歉，打錯電話了。",
              segments: [
                { text: "Sorry", meaning: "抱歉", tail: ", " },
                { text: "wrong", meaning: "錯", tail: " " },
                { text: "number", meaning: "號碼", tail: "." },
              ],
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
              segments: [{ text: "important", meaning: "重要", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Important meeting.",
              translation: "重要會議。",
              segments: [
                { text: "Important", meaning: "重要", tail: " " },
                { text: "meeting", meaning: "會議", tail: "." },
              ],
            },
            {
              sentence: "This is very important.",
              translation: "這非常重要。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "very", meaning: "非常", tail: " " },
                { text: "important", meaning: "重要", tail: "." },
              ],
            },
            {
              sentence: "Family is important.",
              translation: "家人很重要。",
              segments: [
                { text: "Family", meaning: "家人", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "important", meaning: "重要", tail: "." },
              ],
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
              segments: [{ text: "different", meaning: "不同", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Different color.",
              translation: "不同顏色。",
              segments: [
                { text: "Different", meaning: "不同", tail: " " },
                { text: "color", meaning: "顏色", tail: "." },
              ],
            },
            {
              sentence: "We have different ideas.",
              translation: "我們有不同的想法。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "different", meaning: "不同", tail: " " },
                { text: "ideas", meaning: "想法", tail: "." },
              ],
            },
            {
              sentence: "It is different from mine.",
              translation: "這跟我的不一樣。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "different", meaning: "不同", tail: " " },
                { text: "from", meaning: "從", tail: " " },
                { text: "mine", meaning: "我的", tail: "." },
              ],
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
              segments: [{ text: "real", meaning: "真實", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Real gold.",
              translation: "真金。",
              segments: [
                { text: "Real", meaning: "真", tail: " " },
                { text: "gold", meaning: "金", tail: "." },
              ],
            },
            {
              sentence: "Is this real?",
              translation: "這是真的嗎？",
              segments: [
                { text: "Is", meaning: "是", tail: " " },
                { text: "this", meaning: "這", tail: " " },
                { text: "real", meaning: "真", tail: "?" },
              ],
            },
            {
              sentence: "Keep it real.",
              translation: "保持真實（做自己）。",
              segments: [
                { text: "Keep", meaning: "保持", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "real", meaning: "真實", tail: "." },
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
              term_target: "interesting",
              pronunciation: ["/ˈɪntrɪstɪŋ/"],
              specific_note: "",
              segments: [{ text: "interesting", meaning: "有趣", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Interesting book.",
              translation: "有趣的書。",
              segments: [
                { text: "Interesting", meaning: "有趣", tail: " " },
                { text: "book", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "That sounds interesting.",
              translation: "聽起來很有趣。",
              segments: [
                { text: "That", meaning: "那", tail: " " },
                { text: "sounds", meaning: "聽起來", tail: " " },
                { text: "interesting", meaning: "有趣", tail: "." },
              ],
            },
            {
              sentence: "She is an interesting person.",
              translation: "她是個有趣的人。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "an", meaning: "一個", tail: " " },
                { text: "interesting", meaning: "有趣", tail: " " },
                { text: "person", meaning: "人", tail: "." },
              ],
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
              segments: [{ text: "beautiful", meaning: "美麗", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Beautiful flower.",
              translation: "美麗的花。",
              segments: [
                { text: "Beautiful", meaning: "美麗", tail: " " },
                { text: "flower", meaning: "花", tail: "." },
              ],
            },
            {
              sentence: "You are beautiful.",
              translation: "你很美。",
              segments: [
                { text: "You", meaning: "你", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "beautiful", meaning: "美麗", tail: "." },
              ],
            },
            {
              sentence: "What a beautiful day.",
              translation: "多美好的一天。",
              segments: [
                { text: "What", meaning: "多麼", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "beautiful", meaning: "美好", tail: " " },
                { text: "day", meaning: "天", tail: "." },
              ],
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
              segments: [{ text: "cheap", meaning: "便宜", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "It is cheap.",
              translation: "很便宜。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "cheap", meaning: "便宜", tail: "." },
              ],
            },
            {
              sentence: "Cheap flights.",
              translation: "便宜的機票。",
              segments: [
                { text: "Cheap", meaning: "便宜", tail: " " },
                { text: "flights", meaning: "班機", tail: "." },
              ],
            },
            {
              sentence: "I bought a cheap watch.",
              translation: "我買了一支便宜的手錶。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "bought", meaning: "買了", tail: " " },
                { text: "a", meaning: "一支", tail: " " },
                { text: "cheap", meaning: "便宜", tail: " " },
                { text: "watch", meaning: "手錶", tail: "." },
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
              term_target: "expensive",
              pronunciation: ["/ɪkˈspɛnsɪv/"],
              specific_note: "",
              segments: [{ text: "expensive", meaning: "昂貴", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Too expensive.",
              translation: "太貴了。",
              segments: [
                { text: "Too", meaning: "太", tail: " " },
                { text: "expensive", meaning: "貴", tail: "." },
              ],
            },
            {
              sentence: "Expensive car.",
              translation: "昂貴的車。",
              segments: [
                { text: "Expensive", meaning: "昂貴", tail: " " },
                { text: "car", meaning: "車", tail: "." },
              ],
            },
            {
              sentence: "It looks expensive.",
              translation: "這看起來很貴。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "looks", meaning: "看起來", tail: " " },
                { text: "expensive", meaning: "貴", tail: "." },
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
              term_target: "hungry",
              pronunciation: ["/ˈhʌŋgri/"],
              specific_note: "",
              segments: [{ text: "hungry", meaning: "飢餓", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I am hungry.",
              translation: "我餓了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "hungry", meaning: "餓", tail: "." },
              ],
            },
            {
              sentence: "Are you hungry?",
              translation: "你餓了嗎？",
              segments: [
                { text: "Are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "hungry", meaning: "餓", tail: "?" },
              ],
            },
            {
              sentence: "The baby is hungry.",
              translation: "寶寶餓了。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "baby", meaning: "寶寶", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "hungry", meaning: "餓", tail: "." },
              ],
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
              segments: [{ text: "tired", meaning: "累", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I am tired.",
              translation: "我累了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "tired", meaning: "累", tail: "." },
              ],
            },
            {
              sentence: "I am tired of waiting.",
              translation: "我等累了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "tired", meaning: "累", tail: " " },
                { text: "of", meaning: "關於", tail: " " },
                { text: "waiting", meaning: "等待", tail: "." },
              ],
            },
            {
              sentence: "You look tired.",
              translation: "你看起來很累。",
              segments: [
                { text: "You", meaning: "你", tail: " " },
                { text: "look", meaning: "看起來", tail: " " },
                { text: "tired", meaning: "累", tail: "." },
              ],
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
              segments: [{ text: "busy", meaning: "忙碌", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I am busy.",
              translation: "我很忙。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "busy", meaning: "忙", tail: "." },
              ],
            },
            {
              sentence: "Busy street.",
              translation: "繁忙的街道。",
              segments: [
                { text: "Busy", meaning: "繁忙", tail: " " },
                { text: "street", meaning: "街道", tail: "." },
              ],
            },
            {
              sentence: "Are you busy now?",
              translation: "你現在忙嗎？",
              segments: [
                { text: "Are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "busy", meaning: "忙", tail: " " },
                { text: "now", meaning: "現在", tail: "?" },
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
              term_target: "happy",
              pronunciation: ["/ˈhæpi/"],
              specific_note: "",
              segments: [{ text: "happy", meaning: "快樂", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Happy birthday.",
              translation: "生日快樂。",
              segments: [
                { text: "Happy", meaning: "快樂", tail: " " },
                { text: "birthday", meaning: "生日", tail: "." },
              ],
            },
            {
              sentence: "I am so happy.",
              translation: "我好開心。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "so", meaning: "如此", tail: " " },
                { text: "happy", meaning: "快樂", tail: "." },
              ],
            },
            {
              sentence: "Are you happy?",
              translation: "你快樂嗎？",
              segments: [
                { text: "Are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "happy", meaning: "快樂", tail: "?" },
              ],
            },
          ],
          usage_note: "高興。",
          image_file: "happy.png",
        },
        {
          id: "adj-37",
          term_zh: "悲傷的",
          related_terms: [
            {
              term_target: "sad",
              pronunciation: ["/sæd/"],
              specific_note: "",
              segments: [{ text: "sad", meaning: "悲傷", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sad story.",
              translation: "悲傷的故事。",
              segments: [
                { text: "Sad", meaning: "悲傷", tail: " " },
                { text: "story", meaning: "故事", tail: "." },
              ],
            },
            {
              sentence: "Why are you sad?",
              translation: "你為什麼難過？",
              segments: [
                { text: "Why", meaning: "為什麼", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "sad", meaning: "難過", tail: "?" },
              ],
            },
            {
              sentence: "Don't be sad.",
              translation: "別難過。",
              segments: [
                { text: "Don't", meaning: "別", tail: " " },
                { text: "be", meaning: "是", tail: " " },
                { text: "sad", meaning: "難過", tail: "." },
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
              term_target: "similar",
              pronunciation: ["/ˈsɪməlɚ/"],
              specific_note: "",
              segments: [{ text: "similar", meaning: "相似", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Similar color.",
              translation: "相似的顏色。",
              segments: [
                { text: "Similar", meaning: "相似", tail: " " },
                { text: "color", meaning: "顏色", tail: "." },
              ],
            },
            {
              sentence: "They look similar.",
              translation: "他們看起來很像。",
              segments: [
                { text: "They", meaning: "他們", tail: " " },
                { text: "look", meaning: "看起來", tail: " " },
                { text: "similar", meaning: "相似", tail: "." },
              ],
            },
            {
              sentence: "We have similar tastes.",
              translation: "我們品味相似。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "similar", meaning: "相似", tail: " " },
                { text: "tastes", meaning: "品味", tail: "." },
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
              term_target: "famous",
              pronunciation: ["/ˈfeɪməs/"],
              specific_note: "",
              segments: [{ text: "famous", meaning: "有名", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Famous singer.",
              translation: "知名歌手。",
              segments: [
                { text: "Famous", meaning: "有名", tail: " " },
                { text: "singer", meaning: "歌手", tail: "." },
              ],
            },
            {
              sentence: "This place is famous for food.",
              translation: "這地方以美食聞名。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "place", meaning: "地方", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "famous", meaning: "有名", tail: " " },
                { text: "for", meaning: "因...", tail: " " },
                { text: "food", meaning: "食物", tail: "." },
              ],
            },
            {
              sentence: "He wants to be famous.",
              translation: "他想出名。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "wants", meaning: "想要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "be", meaning: "成為", tail: " " },
                { text: "famous", meaning: "有名", tail: "." },
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
              term_target: "foreign",
              pronunciation: ["/ˈfɔrən/"],
              specific_note: "",
              segments: [{ text: "foreign", meaning: "外國", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Foreign country.",
              translation: "外國。",
              segments: [
                { text: "Foreign", meaning: "外國", tail: " " },
                { text: "country", meaning: "國家", tail: "." },
              ],
            },
            {
              sentence: "Foreign language.",
              translation: "外語。",
              segments: [
                { text: "Foreign", meaning: "外國", tail: " " },
                { text: "language", meaning: "語言", tail: "." },
              ],
            },
            {
              sentence: "She likes foreign movies.",
              translation: "她喜歡外國電影。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "likes", meaning: "喜歡", tail: " " },
                { text: "foreign", meaning: "外國", tail: " " },
                { text: "movies", meaning: "電影", tail: "." },
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
              term_target: "intelligent",
              pronunciation: ["/ɪnˈtɛlədʒənt/"],
              specific_note: "",
              segments: [{ text: "intelligent", meaning: "聰明", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Intelligent student.",
              translation: "聰明的學生。",
              segments: [
                { text: "Intelligent", meaning: "聰明", tail: " " },
                { text: "student", meaning: "學生", tail: "." },
              ],
            },
            {
              sentence: "That is an intelligent question.",
              translation: "那是個聰明的問題。",
              segments: [
                { text: "That", meaning: "那", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "an", meaning: "一個", tail: " " },
                { text: "intelligent", meaning: "聰明", tail: " " },
                { text: "question", meaning: "問題", tail: "." },
              ],
            },
            {
              sentence: "Dolphins are intelligent animals.",
              translation: "海豚是聰明的動物。",
              segments: [
                { text: "Dolphins", meaning: "海豚", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "intelligent", meaning: "聰明", tail: " " },
                { text: "animals", meaning: "動物", tail: "." },
              ],
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
              segments: [{ text: "dangerous", meaning: "危險", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "It is dangerous.",
              translation: "這很危險。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "dangerous", meaning: "危險", tail: "." },
              ],
            },
            {
              sentence: "Dangerous dog.",
              translation: "危險的狗。",
              segments: [
                { text: "Dangerous", meaning: "危險", tail: " " },
                { text: "dog", meaning: "狗", tail: "." },
              ],
            },
            {
              sentence: "Don't go there, it's dangerous.",
              translation: "別去那裡，很危險。",
              segments: [
                { text: "Don't", meaning: "別", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "there", meaning: "那裡", tail: ", " },
                { text: "it's", meaning: "它是", tail: " " },
                { text: "dangerous", meaning: "危險", tail: "." },
              ],
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
              segments: [{ text: "kind", meaning: "仁慈", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Kind person.",
              translation: "好心人。",
              segments: [
                { text: "Kind", meaning: "仁慈", tail: " " },
                { text: "person", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "She is very kind to me.",
              translation: "她對我很好。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "very", meaning: "非常", tail: " " },
                { text: "kind", meaning: "仁慈", tail: " " },
                { text: "to", meaning: "對", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Thank you for your kind words.",
              translation: "謝謝你的讚美。",
              segments: [
                { text: "Thank", meaning: "謝謝", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "for", meaning: "因", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "kind", meaning: "仁慈", tail: " " },
                { text: "words", meaning: "話語", tail: "." },
              ],
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
              segments: [{ text: "every", meaning: "每個", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Every day.",
              translation: "每一天。",
              segments: [
                { text: "Every", meaning: "每個", tail: " " },
                { text: "day", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "Every student has a book.",
              translation: "每個學生都有一本書。",
              segments: [
                { text: "Every", meaning: "每個", tail: " " },
                { text: "student", meaning: "學生", tail: " " },
                { text: "has", meaning: "有", tail: " " },
                { text: "a", meaning: "一", tail: " " },
                { text: "book", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "I enjoy every moment.",
              translation: "我享受每一刻。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "enjoy", meaning: "享受", tail: " " },
                { text: "every", meaning: "每個", tail: " " },
                { text: "moment", meaning: "時刻", tail: "." },
              ],
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
              segments: [{ text: "favorite", meaning: "最愛", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Favorite food.",
              translation: "最愛的食物。",
              segments: [
                { text: "Favorite", meaning: "最愛", tail: " " },
                { text: "food", meaning: "食物", tail: "." },
              ],
            },
            {
              sentence: "What is your favorite color?",
              translation: "你最喜歡什麼顏色？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "favorite", meaning: "最愛", tail: " " },
                { text: "color", meaning: "顏色", tail: "?" },
              ],
            },
            {
              sentence: "This is my favorite song.",
              translation: "這是我最喜歡的歌。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "favorite", meaning: "最愛", tail: " " },
                { text: "song", meaning: "歌", tail: "." },
              ],
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
              segments: [{ text: "delicious", meaning: "美味", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Delicious food.",
              translation: "美味的食物。",
              segments: [
                { text: "Delicious", meaning: "美味", tail: " " },
                { text: "food", meaning: "食物", tail: "." },
              ],
            },
            {
              sentence: "This cake is delicious.",
              translation: "這蛋糕很好吃。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "cake", meaning: "蛋糕", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "delicious", meaning: "美味", tail: "." },
              ],
            },
            {
              sentence: "It looks delicious.",
              translation: "這看起來很好吃。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "looks", meaning: "看起來", tail: " " },
                { text: "delicious", meaning: "美味", tail: "." },
              ],
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
              segments: [{ text: "time", meaning: "時間", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "What time is it?",
              translation: "現在幾點？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "time", meaning: "時間", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "it", meaning: "它(現在)", tail: "?" },
              ],
            },
            {
              sentence: "I don't have time.",
              translation: "我沒時間。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "沒有", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "time", meaning: "時間", tail: "." },
              ],
            },
            {
              sentence: "Time is money.",
              translation: "時間就是金錢。",
              segments: [
                { text: "Time", meaning: "時間", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "money", meaning: "金錢", tail: "." },
              ],
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
              segments: [{ text: "people", meaning: "人們", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Many people.",
              translation: "很多人。",
              segments: [
                { text: "Many", meaning: "許多", tail: " " },
                { text: "people", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "People are talking.",
              translation: "人們在交談。",
              segments: [
                { text: "People", meaning: "人們", tail: " " },
                { text: "are", meaning: "正在", tail: " " },
                { text: "talking", meaning: "交談", tail: "." },
              ],
            },
            {
              sentence: "There are 5 people in my family.",
              translation: "我家有五口人。",
              segments: [
                { text: "There", meaning: "那裡", tail: " " },
                { text: "are", meaning: "有", tail: " " },
                { text: "5", meaning: "五", tail: " " },
                { text: "people", meaning: "人", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "family", meaning: "家庭", tail: "." },
              ],
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
              segments: [{ text: "money", meaning: "金錢", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "No money.",
              translation: "沒錢。",
              segments: [
                { text: "No", meaning: "沒有", tail: " " },
                { text: "money", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "I need some money.",
              translation: "我需要一些錢。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "some", meaning: "一些", tail: " " },
                { text: "money", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Can you lend me money?",
              translation: "你可以借我錢嗎？",
              segments: [
                { text: "Can", meaning: "能", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "lend", meaning: "借", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "money", meaning: "錢", tail: "?" },
              ],
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
              segments: [{ text: "child", meaning: "孩子", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Small child.",
              translation: "小孩。",
              segments: [
                { text: "Small", meaning: "小的", tail: " " },
                { text: "child", meaning: "孩子", tail: "." },
              ],
            },
            {
              sentence: "The child is sleeping.",
              translation: "孩子正在睡覺。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "child", meaning: "孩子", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "sleeping", meaning: "睡覺", tail: "." },
              ],
            },
            {
              sentence: "She has one child.",
              translation: "她有一個孩子。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "has", meaning: "有", tail: " " },
                { text: "one", meaning: "一個", tail: " " },
                { text: "child", meaning: "孩子", tail: "." },
              ],
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
              segments: [{ text: "water", meaning: "水", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Drink water.",
              translation: "喝水。",
              segments: [
                { text: "Drink", meaning: "喝", tail: " " },
                { text: "water", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "Can I have some water?",
              translation: "我可以喝點水嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有/喝", tail: " " },
                { text: "some", meaning: "一些", tail: " " },
                { text: "water", meaning: "水", tail: "?" },
              ],
            },
            {
              sentence: "The water is cold.",
              translation: "這水是冷的。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "water", meaning: "水", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "cold", meaning: "冷的", tail: "." },
              ],
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
              segments: [{ text: "food", meaning: "食物", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Good food.",
              translation: "好吃的食物。",
              segments: [
                { text: "Good", meaning: "好的", tail: " " },
                { text: "food", meaning: "食物", tail: "." },
              ],
            },
            {
              sentence: "Do you have any food?",
              translation: "你有食物嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "any", meaning: "任何", tail: " " },
                { text: "food", meaning: "食物", tail: "?" },
              ],
            },
            {
              sentence: "I love spicy food.",
              translation: "我喜歡辣的食物。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "love", meaning: "愛", tail: " " },
                { text: "spicy", meaning: "辣的", tail: " " },
                { text: "food", meaning: "食物", tail: "." },
              ],
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
              segments: [{ text: "friend", meaning: "朋友", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "My friend.",
              translation: "我朋友。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "friend", meaning: "朋友", tail: "." },
              ],
            },
            {
              sentence: "We are best friends.",
              translation: "我們是最好的朋友。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "best", meaning: "最好的", tail: " " },
                { text: "friends", meaning: "朋友", tail: "." },
              ],
            },
            {
              sentence: "He is a good friend.",
              translation: "他是個好朋友。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "good", meaning: "好的", tail: " " },
                { text: "friend", meaning: "朋友", tail: "." },
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
              term_target: "family",
              pronunciation: ["/ˈfæməli/"],
              specific_note: "",
              segments: [{ text: "family", meaning: "家庭", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Big family.",
              translation: "大家庭。",
              segments: [
                { text: "Big", meaning: "大的", tail: " " },
                { text: "family", meaning: "家庭", tail: "." },
              ],
            },
            {
              sentence: "I love my family.",
              translation: "我愛我的家人。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "love", meaning: "愛", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "family", meaning: "家人", tail: "." },
              ],
            },
            {
              sentence: "My family lives in Taipei.",
              translation: "我的家人住在台北。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "family", meaning: "家人", tail: " " },
                { text: "lives", meaning: "居住", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "Taipei", meaning: "台北", tail: "." },
              ],
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
              segments: [{ text: "student", meaning: "學生", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I am a student.",
              translation: "我是學生。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "student", meaning: "學生", tail: "." },
              ],
            },
            {
              sentence: "She is a good student.",
              translation: "她是個好學生。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "good", meaning: "好的", tail: " " },
                { text: "student", meaning: "學生", tail: "." },
              ],
            },
            {
              sentence: "The students are studying.",
              translation: "學生們正在讀書。",
              segments: [
                { text: "The", meaning: "這些", tail: " " },
                { text: "students", meaning: "學生", tail: " " },
                { text: "are", meaning: "正在", tail: " " },
                { text: "studying", meaning: "讀書", tail: "." },
              ],
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
              segments: [{ text: "culture", meaning: "文化", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Local culture.",
              translation: "當地文化。",
              segments: [
                { text: "Local", meaning: "當地的", tail: " " },
                { text: "culture", meaning: "文化", tail: "." },
              ],
            },
            {
              sentence: "I like Japanese culture.",
              translation: "我喜歡日本文化。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "Japanese", meaning: "日本的", tail: " " },
                { text: "culture", meaning: "文化", tail: "." },
              ],
            },
            {
              sentence: "Culture is important.",
              translation: "文化很重要。",
              segments: [
                { text: "Culture", meaning: "文化", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "important", meaning: "重要的", tail: "." },
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
              term_target: "problem",
              pronunciation: ["/ˈprɑbləm/"],
              specific_note: "",
              segments: [{ text: "problem", meaning: "問題", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "No problem.",
              translation: "沒問題。",
              segments: [
                { text: "No", meaning: "沒有", tail: " " },
                { text: "problem", meaning: "問題", tail: "." },
              ],
            },
            {
              sentence: "We have a big problem.",
              translation: "我們有個大問題。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "big", meaning: "大的", tail: " " },
                { text: "problem", meaning: "問題", tail: "." },
              ],
            },
            {
              sentence: "Can you solve the problem?",
              translation: "你能解決這個問題嗎？",
              segments: [
                { text: "Can", meaning: "能", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "solve", meaning: "解決", tail: " " },
                { text: "the", meaning: "這個", tail: " " },
                { text: "problem", meaning: "問題", tail: "?" },
              ],
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
              segments: [{ text: "company", meaning: "公司", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Big company.",
              translation: "大公司。",
              segments: [
                { text: "Big", meaning: "大的", tail: " " },
                { text: "company", meaning: "公司", tail: "." },
              ],
            },
            {
              sentence: "I work for this company.",
              translation: "我在這家公司工作。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "work", meaning: "工作", tail: " " },
                { text: "for", meaning: "為", tail: " " },
                { text: "this", meaning: "這家", tail: " " },
                { text: "company", meaning: "公司", tail: "." },
              ],
            },
            {
              sentence: "He started his own company.",
              translation: "他開了自己的公司。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "started", meaning: "創立", tail: " " },
                { text: "his", meaning: "他的", tail: " " },
                { text: "own", meaning: "自己的", tail: " " },
                { text: "company", meaning: "公司", tail: "." },
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
              term_target: "man",
              pronunciation: ["/mæn/"],
              specific_note: "",
              segments: [{ text: "man", meaning: "男人", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "He is a man.",
              translation: "他是男人。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "man", meaning: "男人", tail: "." },
              ],
            },
            {
              sentence: "That man is tall.",
              translation: "那個男人很高。",
              segments: [
                { text: "That", meaning: "那個", tail: " " },
                { text: "man", meaning: "男人", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "tall", meaning: "高的", tail: "." },
              ],
            },
            {
              sentence: "A young man.",
              translation: "一位年輕男子。",
              segments: [
                { text: "A", meaning: "一位", tail: " " },
                { text: "young", meaning: "年輕的", tail: " " },
                { text: "man", meaning: "男子", tail: "." },
              ],
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
              segments: [{ text: "woman", meaning: "女人", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "She is a woman.",
              translation: "她是女人。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "woman", meaning: "女人", tail: "." },
              ],
            },
            {
              sentence: "A beautiful woman.",
              translation: "一位美麗的女子。",
              segments: [
                { text: "A", meaning: "一位", tail: " " },
                { text: "beautiful", meaning: "美麗的", tail: " " },
                { text: "woman", meaning: "女子", tail: "." },
              ],
            },
            {
              sentence: "That woman is a doctor.",
              translation: "那位女士是醫生。",
              segments: [
                { text: "That", meaning: "那位", tail: " " },
                { text: "woman", meaning: "女士", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "doctor", meaning: "醫生", tail: "." },
              ],
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
              segments: [{ text: "school", meaning: "學校", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Go to school.",
              translation: "去學校。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "school", meaning: "學校", tail: "." },
              ],
            },
            {
              sentence: "The school is near here.",
              translation: "學校在附近。",
              segments: [
                { text: "The", meaning: "這所", tail: " " },
                { text: "school", meaning: "學校", tail: " " },
                { text: "is", meaning: "在", tail: " " },
                { text: "near", meaning: "靠近", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "I walk to school.",
              translation: "我走路上學。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "walk", meaning: "走路", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "school", meaning: "學校", tail: "." },
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
              term_target: "teacher",
              pronunciation: ["/ˈtitʃɚ/"],
              specific_note: "",
              segments: [{ text: "teacher", meaning: "老師", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "English teacher.",
              translation: "英文老師。",
              segments: [
                { text: "English", meaning: "英文", tail: " " },
                { text: "teacher", meaning: "老師", tail: "." },
              ],
            },
            {
              sentence: "My teacher is kind.",
              translation: "我的老師很親切。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "teacher", meaning: "老師", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "kind", meaning: "親切的", tail: "." },
              ],
            },
            {
              sentence: "Listen to the teacher.",
              translation: "聽老師說話。",
              segments: [
                { text: "Listen", meaning: "聽", tail: " " },
                { text: "to", meaning: "...", tail: " " },
                { text: "the", meaning: "這位", tail: " " },
                { text: "teacher", meaning: "老師", tail: "." },
              ],
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
              segments: [{ text: "movie", meaning: "電影", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Watch a movie.",
              translation: "看電影。",
              segments: [
                { text: "Watch", meaning: "看", tail: " " },
                { text: "a", meaning: "一部", tail: " " },
                { text: "movie", meaning: "電影", tail: "." },
              ],
            },
            {
              sentence: "Let's see a movie.",
              translation: "我們去看電影吧。",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "see", meaning: "看", tail: " " },
                { text: "a", meaning: "一部", tail: " " },
                { text: "movie", meaning: "電影", tail: "." },
              ],
            },
            {
              sentence: "That movie was sad.",
              translation: "那部電影很感傷。",
              segments: [
                { text: "That", meaning: "那部", tail: " " },
                { text: "movie", meaning: "電影", tail: " " },
                { text: "was", meaning: "是", tail: " " },
                { text: "sad", meaning: "感傷的", tail: "." },
              ],
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
              segments: [{ text: "phone", meaning: "電話", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "My phone.",
              translation: "我手機。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "phone", meaning: "手機", tail: "." },
              ],
            },
            {
              sentence: "Where is my phone?",
              translation: "我的手機在哪？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "在", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "phone", meaning: "手機", tail: "?" },
              ],
            },
            {
              sentence: "Please answer the phone.",
              translation: "請接電話。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "answer", meaning: "接聽", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "phone", meaning: "電話", tail: "." },
              ],
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
              segments: [{ text: "computer", meaning: "電腦", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Use computer.",
              translation: "用電腦。",
              segments: [
                { text: "Use", meaning: "使用", tail: " " },
                { text: "computer", meaning: "電腦", tail: "." },
              ],
            },
            {
              sentence: "My computer is slow.",
              translation: "我的電腦很慢。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "computer", meaning: "電腦", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "slow", meaning: "慢的", tail: "." },
              ],
            },
            {
              sentence: "I need a new computer.",
              translation: "我需要一台新電腦。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "a", meaning: "一台", tail: " " },
                { text: "new", meaning: "新", tail: " " },
                { text: "computer", meaning: "電腦", tail: "." },
              ],
            },
          ],
          usage_note: "PC。",
          image_file: "computer.png",
        },
        {
          id: "n-20",
          term_zh: "車",
          related_terms: [
            {
              term_target: "car",
              pronunciation: ["/kɑr/"],
              specific_note: "",
              segments: [{ text: "car", meaning: "車", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Drive a car.",
              translation: "開車。",
              segments: [
                { text: "Drive", meaning: "開", tail: " " },
                { text: "a", meaning: "一輛", tail: " " },
                { text: "car", meaning: "車", tail: "." },
              ],
            },
            {
              sentence: "Get in the car.",
              translation: "上車。",
              segments: [
                { text: "Get", meaning: "進入", tail: " " },
                { text: "in", meaning: "在...裡", tail: " " },
                { text: "the", meaning: "這輛", tail: " " },
                { text: "car", meaning: "車", tail: "." },
              ],
            },
            {
              sentence: "His car is red.",
              translation: "他的車是紅色的。",
              segments: [
                { text: "His", meaning: "他的", tail: " " },
                { text: "car", meaning: "車", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "red", meaning: "紅色的", tail: "." },
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
              term_target: "market",
              pronunciation: ["/ˈmɑrkɪt/"],
              specific_note: "",
              segments: [{ text: "market", meaning: "市場", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Night market.",
              translation: "夜市。",
              segments: [
                { text: "Night", meaning: "夜", tail: " " },
                { text: "market", meaning: "市場", tail: "." },
              ],
            },
            {
              sentence: "Go to the market.",
              translation: "去市場。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "market", meaning: "市場", tail: "." },
              ],
            },
            {
              sentence: "The market is crowded.",
              translation: "市場很擁擠。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "market", meaning: "市場", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "crowded", meaning: "擁擠的", tail: "." },
              ],
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
              segments: [{ text: "clothes", meaning: "衣服", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Buy clothes.",
              translation: "買衣服。",
              segments: [
                { text: "Buy", meaning: "買", tail: " " },
                { text: "clothes", meaning: "衣服", tail: "." },
              ],
            },
            {
              sentence: "Put on your clothes.",
              translation: "穿上衣服。",
              segments: [
                { text: "Put", meaning: "穿", tail: " " },
                { text: "on", meaning: "上", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "clothes", meaning: "衣服", tail: "." },
              ],
            },
            {
              sentence: "These clothes are dirty.",
              translation: "這些衣服髒了。",
              segments: [
                { text: "These", meaning: "這些", tail: " " },
                { text: "clothes", meaning: "衣服", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "dirty", meaning: "髒的", tail: "." },
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
              term_target: "shop",
              pronunciation: ["/ʃɑp/"],
              specific_note: "",
              segments: [{ text: "shop", meaning: "商店", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Coffee shop.",
              translation: "咖啡店。",
              segments: [
                { text: "Coffee", meaning: "咖啡", tail: " " },
                { text: "shop", meaning: "店", tail: "." },
              ],
            },
            {
              sentence: "The shop is closed.",
              translation: "商店關門了。",
              segments: [
                { text: "The", meaning: "這家", tail: " " },
                { text: "shop", meaning: "店", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "closed", meaning: "關閉的", tail: "." },
              ],
            },
            {
              sentence: "This is a gift shop.",
              translation: "這是家禮品店。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一家", tail: " " },
                { text: "gift", meaning: "禮品", tail: " " },
                { text: "shop", meaning: "店", tail: "." },
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
              term_target: "bus",
              pronunciation: ["/bʌs/"],
              specific_note: "",
              segments: [{ text: "bus", meaning: "公車", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Take a bus.",
              translation: "搭公車。",
              segments: [
                { text: "Take", meaning: "搭乘", tail: " " },
                { text: "a", meaning: "一輛", tail: " " },
                { text: "bus", meaning: "公車", tail: "." },
              ],
            },
            {
              sentence: "The bus is late.",
              translation: "公車遲到了。",
              segments: [
                { text: "The", meaning: "這班", tail: " " },
                { text: "bus", meaning: "公車", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "late", meaning: "遲到的", tail: "." },
              ],
            },
            {
              sentence: "Get off the bus.",
              translation: "下公車。",
              segments: [
                { text: "Get", meaning: "下", tail: " " },
                { text: "off", meaning: "車", tail: " " },
                { text: "the", meaning: "這班", tail: " " },
                { text: "bus", meaning: "公車", tail: "." },
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
              term_target: "street",
              pronunciation: ["/strit/"],
              specific_note: "",
              segments: [{ text: "street", meaning: "街道", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "On the street.",
              translation: "在街上。",
              segments: [
                { text: "On", meaning: "在...上", tail: " " },
                { text: "the", meaning: "這條", tail: " " },
                { text: "street", meaning: "街道", tail: "." },
              ],
            },
            {
              sentence: "Cross the street.",
              translation: "過馬路。",
              segments: [
                { text: "Cross", meaning: "穿越", tail: " " },
                { text: "the", meaning: "這條", tail: " " },
                { text: "street", meaning: "街道", tail: "." },
              ],
            },
            {
              sentence: "A busy street.",
              translation: "繁忙的街道。",
              segments: [
                { text: "A", meaning: "一條", tail: " " },
                { text: "busy", meaning: "繁忙的", tail: " " },
                { text: "street", meaning: "街道", tail: "." },
              ],
            },
          ],
          usage_note: "道路。",
          image_file: "street.png",
        },
        {
          id: "n-26",
          term_zh: "房子/家",
          related_terms: [
            {
              term_target: "house",
              pronunciation: ["/haʊs/"],
              specific_note: "",
              segments: [{ text: "house", meaning: "房子", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "My house.",
              translation: "我家。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "house", meaning: "房子", tail: "." },
              ],
            },
            {
              sentence: "Come to my house.",
              translation: "來我家。",
              segments: [
                { text: "Come", meaning: "來", tail: " " },
                { text: "to", meaning: "到", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "house", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "They bought a house.",
              translation: "他們買了房子。",
              segments: [
                { text: "They", meaning: "他們", tail: " " },
                { text: "bought", meaning: "買了", tail: " " },
                { text: "a", meaning: "一間", tail: " " },
                { text: "house", meaning: "房子", tail: "." },
              ],
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
              segments: [{ text: "mother", meaning: "母親", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "My mother.",
              translation: "我媽媽。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "mother", meaning: "母親", tail: "." },
              ],
            },
            {
              sentence: "I help my mother.",
              translation: "我幫我媽媽。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "help", meaning: "幫忙", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "mother", meaning: "母親", tail: "." },
              ],
            },
            {
              sentence: "Mother is cooking.",
              translation: "媽媽在煮飯。",
              segments: [
                { text: "Mother", meaning: "母親", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "cooking", meaning: "做飯", tail: "." },
              ],
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
              segments: [{ text: "father", meaning: "父親", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "My father.",
              translation: "我爸爸。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "father", meaning: "父親", tail: "." },
              ],
            },
            {
              sentence: "Like father, like son.",
              translation: "有其父必有其子。",
              segments: [
                { text: "Like", meaning: "像", tail: " " },
                { text: "father", meaning: "父親", tail: ", " },
                { text: "like", meaning: "像", tail: " " },
                { text: "son", meaning: "兒子", tail: "." },
              ],
            },
            {
              sentence: "My father is at work.",
              translation: "我父親在工作。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "father", meaning: "父親", tail: " " },
                { text: "is", meaning: "在", tail: " " },
                { text: "at", meaning: "於", tail: " " },
                { text: "work", meaning: "工作", tail: "." },
              ],
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
              segments: [{ text: "brother", meaning: "兄弟", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "My brother.",
              translation: "我兄弟。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "brother", meaning: "兄弟", tail: "." },
              ],
            },
            {
              sentence: "I have two brothers.",
              translation: "我有兩個兄弟。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "two", meaning: "兩個", tail: " " },
                { text: "brothers", meaning: "兄弟", tail: "." },
              ],
            },
            {
              sentence: "He is my older brother.",
              translation: "他是我哥哥。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "older", meaning: "較年長的", tail: " " },
                { text: "brother", meaning: "兄弟", tail: "." },
              ],
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
              segments: [{ text: "sister", meaning: "姐妹", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "My sister.",
              translation: "我姐妹。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "sister", meaning: "姐妹", tail: "." },
              ],
            },
            {
              sentence: "My sister is cute.",
              translation: "我妹妹很可愛。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "sister", meaning: "姐妹", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "cute", meaning: "可愛的", tail: "." },
              ],
            },
            {
              sentence: "Do you have a sister?",
              translation: "你有姐妹嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "sister", meaning: "姐妹", tail: "?" },
              ],
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
              segments: [{ text: "Chinese", meaning: "中文", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Speak Chinese.",
              translation: "說中文。",
              segments: [
                { text: "Speak", meaning: "說", tail: " " },
                { text: "Chinese", meaning: "中文", tail: "." },
              ],
            },
            {
              sentence: "Chinese is hard.",
              translation: "中文很難。",
              segments: [
                { text: "Chinese", meaning: "中文", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "hard", meaning: "困難的", tail: "." },
              ],
            },
            {
              sentence: "I am learning Chinese.",
              translation: "我正在學中文。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "learning", meaning: "學習", tail: " " },
                { text: "Chinese", meaning: "中文", tail: "." },
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
              term_target: "morning",
              pronunciation: ["/ˈmɔrnɪŋ/"],
              specific_note: "",
              segments: [{ text: "morning", meaning: "早晨", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "In the morning.",
              translation: "在早晨。",
              segments: [
                { text: "In", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "morning", meaning: "早晨", tail: "." },
              ],
            },
            {
              sentence: "Good morning.",
              translation: "早安。",
              segments: [
                { text: "Good", meaning: "好的", tail: " " },
                { text: "morning", meaning: "早晨", tail: "." },
              ],
            },
            {
              sentence: "I run in the morning.",
              translation: "我早上跑步。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "run", meaning: "跑", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "morning", meaning: "早晨", tail: "." },
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
              term_target: "night",
              pronunciation: ["/naɪt/"],
              specific_note: "",
              segments: [{ text: "night", meaning: "夜晚", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Good night.",
              translation: "晚安。",
              segments: [
                { text: "Good", meaning: "好的", tail: " " },
                { text: "night", meaning: "夜晚", tail: "." },
              ],
            },
            {
              sentence: "It was a long night.",
              translation: "那是一個漫長的夜晚。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "was", meaning: "是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "long", meaning: "長的", tail: " " },
                { text: "night", meaning: "夜晚", tail: "." },
              ],
            },
            {
              sentence: "I study at night.",
              translation: "我晚上讀書。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "study", meaning: "讀書", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "night", meaning: "夜晚", tail: "." },
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
              term_target: "ticket",
              pronunciation: ["/ˈtɪkɪt/"],
              specific_note: "",
              segments: [{ text: "ticket", meaning: "票", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "One ticket.",
              translation: "一張票。",
              segments: [
                { text: "One", meaning: "一張", tail: " " },
                { text: "ticket", meaning: "票", tail: "." },
              ],
            },
            {
              sentence: "Where is your ticket?",
              translation: "你的票在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "ticket", meaning: "票", tail: "?" },
              ],
            },
            {
              sentence: "Buy a train ticket.",
              translation: "買一張火車票。",
              segments: [
                { text: "Buy", meaning: "買", tail: " " },
                { text: "a", meaning: "一張", tail: " " },
                { text: "train", meaning: "火車", tail: " " },
                { text: "ticket", meaning: "票", tail: "." },
              ],
            },
          ],
          usage_note: "票。",
          image_file: "ticket.png",
        },
        {
          id: "n-35",
          term_zh: "包包",
          related_terms: [
            {
              term_target: "bag",
              pronunciation: ["/bæg/"],
              specific_note: "",
              segments: [{ text: "bag", meaning: "包包", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Big bag.",
              translation: "大包包。",
              segments: [
                { text: "Big", meaning: "大的", tail: " " },
                { text: "bag", meaning: "包包", tail: "." },
              ],
            },
            {
              sentence: "Open your bag.",
              translation: "打開你的包包。",
              segments: [
                { text: "Open", meaning: "打開", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "bag", meaning: "包包", tail: "." },
              ],
            },
            {
              sentence: "I lost my bag.",
              translation: "我的包包不見了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "lost", meaning: "弄丟", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "bag", meaning: "包包", tail: "." },
              ],
            },
          ],
          usage_note: "提包。",
          image_file: "bag.png",
        },
        {
          id: "n-36",
          term_zh: "杯子",
          related_terms: [
            {
              term_target: "cup",
              pronunciation: ["/kʌp/"],
              specific_note: "",
              segments: [{ text: "cup", meaning: "杯子", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cup of tea.",
              translation: "一杯茶。",
              segments: [
                { text: "Cup", meaning: "杯子", tail: " " },
                { text: "of", meaning: "的", tail: " " },
                { text: "tea", meaning: "茶", tail: "." },
              ],
            },
            {
              sentence: "A cup of coffee, please.",
              translation: "請給我一杯咖啡。",
              segments: [
                { text: "A", meaning: "一", tail: " " },
                { text: "cup", meaning: "杯子", tail: " " },
                { text: "of", meaning: "的", tail: " " },
                { text: "coffee", meaning: "咖啡", tail: ", " },
                { text: "please", meaning: "請", tail: "." },
              ],
            },
            {
              sentence: "Wash the cup.",
              translation: "洗杯子。",
              segments: [
                { text: "Wash", meaning: "洗", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "cup", meaning: "杯子", tail: "." },
              ],
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
              segments: [{ text: "doctor", meaning: "醫生", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "See a doctor.",
              translation: "看醫生。",
              segments: [
                { text: "See", meaning: "看", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "doctor", meaning: "醫生", tail: "." },
              ],
            },
            {
              sentence: "The doctor is busy.",
              translation: "醫生很忙。",
              segments: [
                { text: "The", meaning: "這位", tail: " " },
                { text: "doctor", meaning: "醫生", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "busy", meaning: "忙碌的", tail: "." },
              ],
            },
            {
              sentence: "You should call a doctor.",
              translation: "你應該叫醫生。",
              segments: [
                { text: "You", meaning: "你", tail: " " },
                { text: "should", meaning: "應該", tail: " " },
                { text: "call", meaning: "叫", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "doctor", meaning: "醫生", tail: "." },
              ],
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
              segments: [{ text: "police", meaning: "警察", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Call police.",
              translation: "叫警察。",
              segments: [
                { text: "Call", meaning: "叫", tail: " " },
                { text: "police", meaning: "警察", tail: "." },
              ],
            },
            {
              sentence: "The police are coming.",
              translation: "警察來了。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "police", meaning: "警察", tail: " " },
                { text: "are", meaning: "正在", tail: " " },
                { text: "coming", meaning: "來", tail: "." },
              ],
            },
            {
              sentence: "Ask a police officer.",
              translation: "問警察。",
              segments: [
                { text: "Ask", meaning: "問", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "police", meaning: "警察", tail: " " },
                { text: "officer", meaning: "警官", tail: "." },
              ],
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
              segments: [{ text: "hospital", meaning: "醫院", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Go to hospital.",
              translation: "去醫院。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "hospital", meaning: "醫院", tail: "." },
              ],
            },
            {
              sentence: "The hospital is big.",
              translation: "這間醫院很大。",
              segments: [
                { text: "The", meaning: "這間", tail: " " },
                { text: "hospital", meaning: "醫院", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "big", meaning: "大的", tail: "." },
              ],
            },
            {
              sentence: "He is in the hospital.",
              translation: "他在醫院裡。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "is", meaning: "在", tail: " " },
                { text: "in", meaning: "在...裡", tail: " " },
                { text: "the", meaning: "這間", tail: " " },
                { text: "hospital", meaning: "醫院", tail: "." },
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
              term_target: "seat",
              pronunciation: ["/sit/"],
              specific_note: "",
              segments: [{ text: "seat", meaning: "座位", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Take a seat.",
              translation: "請坐。",
              segments: [
                { text: "Take", meaning: "坐", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "seat", meaning: "座位", tail: "." },
              ],
            },
            {
              sentence: "Is this seat taken?",
              translation: "這位子有人坐嗎？",
              segments: [
                { text: "Is", meaning: "是", tail: " " },
                { text: "this", meaning: "這個", tail: " " },
                { text: "seat", meaning: "座位", tail: " " },
                { text: "taken", meaning: "被佔用", tail: "?" },
              ],
            },
            {
              sentence: "Please have a seat.",
              translation: "請入座。",
              segments: [
                { text: "Please", meaning: "請", tail: " " },
                { text: "have", meaning: "有/坐", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "seat", meaning: "座位", tail: "." },
              ],
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
              segments: [{ text: "door", meaning: "門", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Open the door.",
              translation: "開門。",
              segments: [
                { text: "Open", meaning: "打開", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "door", meaning: "門", tail: "." },
              ],
            },
            {
              sentence: "Close the door, please.",
              translation: "請關門。",
              segments: [
                { text: "Close", meaning: "關閉", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "door", meaning: "門", tail: ", " },
                { text: "please", meaning: "請", tail: "." },
              ],
            },
            {
              sentence: "Someone is at the door.",
              translation: "有人在門口。",
              segments: [
                { text: "Someone", meaning: "有人", tail: " " },
                { text: "is", meaning: "在", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "door", meaning: "門", tail: "." },
              ],
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
              segments: [{ text: "room", meaning: "房間", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "My room.",
              translation: "我房間。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "room", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "Clean your room.",
              translation: "打掃你的房間。",
              segments: [
                { text: "Clean", meaning: "打掃", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "room", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "This room is small.",
              translation: "這個房間很小。",
              segments: [
                { text: "This", meaning: "這個", tail: " " },
                { text: "room", meaning: "房間", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "small", meaning: "小的", tail: "." },
              ],
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
              segments: [{ text: "station", meaning: "車站", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bus station.",
              translation: "公車站。",
              segments: [
                { text: "Bus", meaning: "公車", tail: " " },
                { text: "station", meaning: "站", tail: "." },
              ],
            },
            {
              sentence: "Meet at the station.",
              translation: "在車站見。",
              segments: [
                { text: "Meet", meaning: "見面", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "station", meaning: "車站", tail: "." },
              ],
            },
            {
              sentence: "The station is crowded.",
              translation: "車站很擁擠。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "station", meaning: "車站", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "crowded", meaning: "擁擠的", tail: "." },
              ],
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
              segments: [{ text: "subway", meaning: "地鐵", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "MRT station.",
              translation: "捷運站。",
              segments: [
                { text: "MRT", meaning: "捷運", tail: " " },
                { text: "station", meaning: "站", tail: "." },
              ],
            },
            {
              sentence: "Take the subway.",
              translation: "搭地鐵。",
              segments: [
                { text: "Take", meaning: "搭乘", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "subway", meaning: "地鐵", tail: "." },
              ],
            },
            {
              sentence: "The subway is fast.",
              translation: "地鐵很快。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "subway", meaning: "地鐵", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "fast", meaning: "快的", tail: "." },
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
              term_target: "train",
              pronunciation: ["/treɪn/"],
              specific_note: "",
              segments: [{ text: "train", meaning: "火車", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "By train.",
              translation: "搭火車。",
              segments: [
                { text: "By", meaning: "藉由", tail: " " },
                { text: "train", meaning: "火車", tail: "." },
              ],
            },
            {
              sentence: "The train is leaving.",
              translation: "火車要開了。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "train", meaning: "火車", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "leaving", meaning: "離開", tail: "." },
              ],
            },
            {
              sentence: "I missed the train.",
              translation: "我錯過了火車。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "missed", meaning: "錯過", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "train", meaning: "火車", tail: "." },
              ],
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
              segments: [{ text: "airport", meaning: "機場", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Go to airport.",
              translation: "去機場。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "airport", meaning: "機場", tail: "." },
              ],
            },
            {
              sentence: "Arrive at the airport.",
              translation: "抵達機場。",
              segments: [
                { text: "Arrive", meaning: "抵達", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "airport", meaning: "機場", tail: "." },
              ],
            },
            {
              sentence: "The airport is far.",
              translation: "機場很遠。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "airport", meaning: "機場", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "far", meaning: "遠的", tail: "." },
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
              term_target: "luggage",
              pronunciation: ["/ˈlʌgɪdʒ/"],
              specific_note: "",
              segments: [{ text: "luggage", meaning: "行李", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Heavy luggage.",
              translation: "很重的行李。",
              segments: [
                { text: "Heavy", meaning: "重的", tail: " " },
                { text: "luggage", meaning: "行李", tail: "." },
              ],
            },
            {
              sentence: "Check your luggage.",
              translation: "托運你的行李。",
              segments: [
                { text: "Check", meaning: "檢查/托運", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "luggage", meaning: "行李", tail: "." },
              ],
            },
            {
              sentence: "Where is my luggage?",
              translation: "我的行李在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "luggage", meaning: "行李", tail: "?" },
              ],
            },
          ],
          usage_note: "包裹。",
          image_file: "luggage.png",
        },
        {
          id: "n-48",
          term_zh: "地圖",
          related_terms: [
            {
              term_target: "map",
              pronunciation: ["/mæp/"],
              specific_note: "",
              segments: [{ text: "map", meaning: "地圖", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Google map.",
              translation: "谷歌地圖。",
              segments: [
                { text: "Google", meaning: "谷歌", tail: " " },
                { text: "map", meaning: "地圖", tail: "." },
              ],
            },
            {
              sentence: "Look at the map.",
              translation: "看地圖。",
              segments: [
                { text: "Look", meaning: "看", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "map", meaning: "地圖", tail: "." },
              ],
            },
            {
              sentence: "Do you have a map?",
              translation: "你有地圖嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "a", meaning: "一張", tail: " " },
                { text: "map", meaning: "地圖", tail: "?" },
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
              term_target: "counter",
              pronunciation: ["/ˈkaʊntɚ/"],
              specific_note: "",
              segments: [{ text: "counter", meaning: "櫃檯", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "At the counter.",
              translation: "在櫃檯。",
              segments: [
                { text: "At", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "counter", meaning: "櫃檯", tail: "." },
              ],
            },
            {
              sentence: "Go to the front counter.",
              translation: "去前台。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "front", meaning: "前", tail: " " },
                { text: "counter", meaning: "櫃檯", tail: "." },
              ],
            },
            {
              sentence: "Pay at the counter.",
              translation: "在櫃檯結帳。",
              segments: [
                { text: "Pay", meaning: "付費", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "counter", meaning: "櫃檯", tail: "." },
              ],
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
              segments: [{ text: "lobby", meaning: "大廳", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Wait in lobby.",
              translation: "在大廳等。",
              segments: [
                { text: "Wait", meaning: "等待", tail: " " },
                { text: "in", meaning: "在...裡", tail: " " },
                { text: "lobby", meaning: "大廳", tail: "." },
              ],
            },
            {
              sentence: "Meet in the lobby.",
              translation: "在大廳碰面。",
              segments: [
                { text: "Meet", meaning: "碰面", tail: " " },
                { text: "in", meaning: "在...裡", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "lobby", meaning: "大廳", tail: "." },
              ],
            },
            {
              sentence: "The hotel lobby is nice.",
              translation: "飯店大廳很不錯。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "hotel", meaning: "飯店", tail: " " },
                { text: "lobby", meaning: "大廳", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "nice", meaning: "好的", tail: "." },
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
              term_target: "reservation",
              pronunciation: ["/ˌrɛzɚˈveɪʃən/"],
              specific_note: "",
              segments: [{ text: "reservation", meaning: "預定", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Make a reservation.",
              translation: "做預約。",
              segments: [
                { text: "Make", meaning: "做", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "reservation", meaning: "預約", tail: "." },
              ],
            },
            {
              sentence: "I have a reservation.",
              translation: "我有預約。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "reservation", meaning: "預約", tail: "." },
              ],
            },
            {
              sentence: "Cancel the reservation.",
              translation: "取消預約。",
              segments: [
                { text: "Cancel", meaning: "取消", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "reservation", meaning: "預約", tail: "." },
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
              term_target: "check-in",
              pronunciation: ["/tʃɛk ɪn/"],
              specific_note: "",
              segments: [{ text: "check-in", meaning: "入住", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Check-in time.",
              translation: "入住時間。",
              segments: [
                { text: "Check-in", meaning: "入住", tail: " " },
                { text: "time", meaning: "時間", tail: "." },
              ],
            },
            {
              sentence: "We need to check-in.",
              translation: "我們需要辦理入住。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "check-in", meaning: "入住", tail: "." },
              ],
            },
            {
              sentence: "Where is the check-in desk?",
              translation: "入住櫃台在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "check-in", meaning: "入住", tail: " " },
                { text: "desk", meaning: "櫃檯", tail: "?" },
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
              term_target: "check-out",
              pronunciation: ["/tʃɛk aʊt/"],
              specific_note: "",
              segments: [{ text: "check-out", meaning: "退房", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Check-out now.",
              translation: "現在退房。",
              segments: [
                { text: "Check-out", meaning: "退房", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Check-out time is 11.",
              translation: "退房時間是11點。",
              segments: [
                { text: "Check-out", meaning: "退房", tail: " " },
                { text: "time", meaning: "時間", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "11", meaning: "十一點", tail: "." },
              ],
            },
            {
              sentence: "We already checked out.",
              translation: "我們已經退房了。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "already", meaning: "已經", tail: " " },
                { text: "checked", meaning: "退房(過去式)", tail: " " },
                { text: "out", meaning: "出去", tail: "." },
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
              term_target: "drink",
              pronunciation: ["/drɪŋk/"],
              specific_note: "",
              segments: [{ text: "drink", meaning: "飲料", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cold drink.",
              translation: "冷飲。",
              segments: [
                { text: "Cold", meaning: "冷的", tail: " " },
                { text: "drink", meaning: "飲料", tail: "." },
              ],
            },
            {
              sentence: "Buy a drink.",
              translation: "買飲料。",
              segments: [
                { text: "Buy", meaning: "買", tail: " " },
                { text: "a", meaning: "一杯", tail: " " },
                { text: "drink", meaning: "飲料", tail: "." },
              ],
            },
            {
              sentence: "What drink do you want?",
              translation: "你想要什麼飲料？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "drink", meaning: "飲料", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "want", meaning: "想要", tail: "?" },
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
              term_target: "menu",
              pronunciation: ["/ˈmɛnju/"],
              specific_note: "",
              segments: [{ text: "menu", meaning: "菜單", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Menu please.",
              translation: "請給菜單。",
              segments: [
                { text: "Menu", meaning: "菜單", tail: " " },
                { text: "please", meaning: "請", tail: "." },
              ],
            },
            {
              sentence: "Look at the menu.",
              translation: "看菜單。",
              segments: [
                { text: "Look", meaning: "看", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "menu", meaning: "菜單", tail: "." },
              ],
            },
            {
              sentence: "Can I see the menu?",
              translation: "我可以看菜單嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "see", meaning: "看", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "menu", meaning: "菜單", tail: "?" },
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
              term_target: "lunch",
              pronunciation: ["/lʌntʃ/"],
              specific_note: "",
              segments: [{ text: "lunch", meaning: "午餐", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Eat lunch.",
              translation: "吃午餐。",
              segments: [
                { text: "Eat", meaning: "吃", tail: " " },
                { text: "lunch", meaning: "午餐", tail: "." },
              ],
            },
            {
              sentence: "Time for lunch.",
              translation: "午餐時間到了。",
              segments: [
                { text: "Time", meaning: "時間", tail: " " },
                { text: "for", meaning: "為了", tail: " " },
                { text: "lunch", meaning: "午餐", tail: "." },
              ],
            },
            {
              sentence: "What's for lunch?",
              translation: "午餐吃什麼？",
              segments: [
                { text: "What's", meaning: "什麼是", tail: " " },
                { text: "for", meaning: "為了", tail: " " },
                { text: "lunch", meaning: "午餐", tail: "?" },
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
              term_target: "dinner",
              pronunciation: ["/ˈdɪnɚ/"],
              specific_note: "",
              segments: [{ text: "dinner", meaning: "晚餐", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Eat dinner.",
              translation: "吃晚餐。",
              segments: [
                { text: "Eat", meaning: "吃", tail: " " },
                { text: "dinner", meaning: "晚餐", tail: "." },
              ],
            },
            {
              sentence: "Cook dinner.",
              translation: "煮晚餐。",
              segments: [
                { text: "Cook", meaning: "煮", tail: " " },
                { text: "dinner", meaning: "晚餐", tail: "." },
              ],
            },
            {
              sentence: "Dinner is ready.",
              translation: "晚餐好了。",
              segments: [
                { text: "Dinner", meaning: "晚餐", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "ready", meaning: "準備好的", tail: "." },
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
              term_target: "bill",
              pronunciation: ["/bɪl/"],
              specific_note: "",
              segments: [{ text: "bill", meaning: "帳單", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Check the bill.",
              translation: "確認帳單。",
              segments: [
                { text: "Check", meaning: "檢查", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "bill", meaning: "帳單", tail: "." },
              ],
            },
            {
              sentence: "Can I have the bill?",
              translation: "可以給我帳單嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "bill", meaning: "帳單", tail: "?" },
              ],
            },
            {
              sentence: "I will pay the bill.",
              translation: "我來付帳。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "will", meaning: "將會", tail: " " },
                { text: "pay", meaning: "付", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "bill", meaning: "帳單", tail: "." },
              ],
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
              segments: [{ text: "price", meaning: "價錢", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Good price.",
              translation: "好價格。",
              segments: [
                { text: "Good", meaning: "好的", tail: " " },
                { text: "price", meaning: "價格", tail: "." },
              ],
            },
            {
              sentence: "What is the price?",
              translation: "價格是多少？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "price", meaning: "價格", tail: "?" },
              ],
            },
            {
              sentence: "The price is high.",
              translation: "價格很高。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "price", meaning: "價格", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "high", meaning: "高的", tail: "." },
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
              term_target: "receipt",
              pronunciation: ["/rɪˈsit/"],
              specific_note: "",
              segments: [{ text: "receipt", meaning: "收據", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Receipt please.",
              translation: "請給收據。",
              segments: [
                { text: "Receipt", meaning: "收據", tail: " " },
                { text: "please", meaning: "請", tail: "." },
              ],
            },
            {
              sentence: "Keep the receipt.",
              translation: "保留收據。",
              segments: [
                { text: "Keep", meaning: "保留", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "receipt", meaning: "收據", tail: "." },
              ],
            },
            {
              sentence: "Do you need a receipt?",
              translation: "你需要收據嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "a", meaning: "一張", tail: " " },
                { text: "receipt", meaning: "收據", tail: "?" },
              ],
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
              segments: [{ text: "size", meaning: "尺寸", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Big size.",
              translation: "大尺寸。",
              segments: [
                { text: "Big", meaning: "大", tail: " " },
                { text: "size", meaning: "尺寸", tail: "." },
              ],
            },
            {
              sentence: "What size do you wear?",
              translation: "你穿什麼尺寸？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "size", meaning: "尺寸", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "wear", meaning: "穿", tail: "?" },
              ],
            },
            {
              sentence: "It is the wrong size.",
              translation: "尺寸不對。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "wrong", meaning: "錯誤的", tail: " " },
                { text: "size", meaning: "尺寸", tail: "." },
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
              term_target: "entrance",
              pronunciation: ["/ˈɛntrəns/"],
              specific_note: "",
              segments: [{ text: "entrance", meaning: "入口", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Main entrance.",
              translation: "正門入口。",
              segments: [
                { text: "Main", meaning: "主要的", tail: " " },
                { text: "entrance", meaning: "入口", tail: "." },
              ],
            },
            {
              sentence: "Where is the entrance?",
              translation: "入口在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "entrance", meaning: "入口", tail: "?" },
              ],
            },
            {
              sentence: "No entrance.",
              translation: "禁止進入。",
              segments: [
                { text: "No", meaning: "沒有/禁止", tail: " " },
                { text: "entrance", meaning: "入口", tail: "." },
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
              term_target: "exit",
              pronunciation: ["/ˈɛgzɪt/"],
              specific_note: "",
              segments: [{ text: "exit", meaning: "出口", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Exit here.",
              translation: "這裡出口。",
              segments: [
                { text: "Exit", meaning: "出口", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Emergency exit.",
              translation: "緊急出口。",
              segments: [
                { text: "Emergency", meaning: "緊急", tail: " " },
                { text: "exit", meaning: "出口", tail: "." },
              ],
            },
            {
              sentence: "Where is the exit?",
              translation: "出口在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "exit", meaning: "出口", tail: "?" },
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
              term_target: "Taiwan",
              pronunciation: ["/taɪˈwɑn/"],
              specific_note: "",
              segments: [{ text: "Taiwan", meaning: "台灣", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I love Taiwan.",
              translation: "我愛台灣。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "love", meaning: "愛", tail: " " },
                { text: "Taiwan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Welcome to Taiwan.",
              translation: "歡迎來台灣。",
              segments: [
                { text: "Welcome", meaning: "歡迎", tail: " " },
                { text: "to", meaning: "來", tail: " " },
                { text: "Taiwan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Taiwan is beautiful.",
              translation: "台灣很美。",
              segments: [
                { text: "Taiwan", meaning: "台灣", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "beautiful", meaning: "美麗的", tail: "." },
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
              term_target: "Taiwanese",
              pronunciation: ["/ˌtaɪwɑˈniz/"],
              specific_note: "",
              segments: [{ text: "Taiwanese", meaning: "台灣人", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I am Taiwanese.",
              translation: "我是台灣人。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "Taiwanese", meaning: "台灣人", tail: "." },
              ],
            },
            {
              sentence: "She is Taiwanese.",
              translation: "她是台灣人。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "Taiwanese", meaning: "台灣人", tail: "." },
              ],
            },
            {
              sentence: "I like Taiwanese food.",
              translation: "我喜歡台灣食物。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "Taiwanese", meaning: "台灣的", tail: " " },
                { text: "food", meaning: "食物", tail: "." },
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
              term_target: "everything",
              pronunciation: ["/ˈɛvriˌθɪŋ/"],
              specific_note: "",
              segments: [{ text: "everything", meaning: "一切", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Everything is good.",
              translation: "一切都好。",
              segments: [
                { text: "Everything", meaning: "一切", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "good", meaning: "好的", tail: "." },
              ],
            },
            {
              sentence: "Everything is ready.",
              translation: "一切準備就緒。",
              segments: [
                { text: "Everything", meaning: "一切", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "ready", meaning: "準備好的", tail: "." },
              ],
            },
            {
              sentence: "Thanks for everything.",
              translation: "感謝這一切。",
              segments: [
                { text: "Thanks", meaning: "感謝", tail: " " },
                { text: "for", meaning: "因為", tail: " " },
                { text: "everything", meaning: "一切", tail: "." },
              ],
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
              segments: [{ text: "wallet", meaning: "錢包", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lost wallet.",
              translation: "掉了錢包。",
              segments: [
                { text: "Lost", meaning: "遺失的", tail: " " },
                { text: "wallet", meaning: "錢包", tail: "." },
              ],
            },
            {
              sentence: "My wallet is empty.",
              translation: "我的錢包空了。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "wallet", meaning: "錢包", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "empty", meaning: "空的", tail: "." },
              ],
            },
            {
              sentence: "I found a wallet.",
              translation: "我撿到一個錢包。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "found", meaning: "發現", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "wallet", meaning: "錢包", tail: "." },
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
              term_target: "ID",
              pronunciation: ["/aɪ di/"],
              specific_note: "",
              segments: [{ text: "ID", meaning: "身分證", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Show ID.",
              translation: "出示證件。",
              segments: [
                { text: "Show", meaning: "出示", tail: " " },
                { text: "ID", meaning: "身分證", tail: "." },
              ],
            },
            {
              sentence: "Do you have ID?",
              translation: "你有身分證件嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "ID", meaning: "身分證", tail: "?" },
              ],
            },
            {
              sentence: "Check the ID.",
              translation: "檢查身分證。",
              segments: [
                { text: "Check", meaning: "檢查", tail: " " },
                { text: "the", meaning: "這張", tail: " " },
                { text: "ID", meaning: "身分證", tail: "." },
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
              term_target: "passport",
              pronunciation: ["/ˈpæsˌpɔrt/"],
              specific_note: "",
              segments: [{ text: "passport", meaning: "護照", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Show passport.",
              translation: "出示護照。",
              segments: [
                { text: "Show", meaning: "出示", tail: " " },
                { text: "passport", meaning: "護照", tail: "." },
              ],
            },
            {
              sentence: "I lost my passport.",
              translation: "我弄丟了護照。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "lost", meaning: "弄丟", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "passport", meaning: "護照", tail: "." },
              ],
            },
            {
              sentence: "Bring your passport.",
              translation: "帶上你的護照。",
              segments: [
                { text: "Bring", meaning: "帶來", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "passport", meaning: "護照", tail: "." },
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
              term_target: "restaurant",
              pronunciation: ["/ˈrɛstərənt/"],
              specific_note: "",
              segments: [{ text: "restaurant", meaning: "餐廳", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nice restaurant.",
              translation: "好餐廳。",
              segments: [
                { text: "Nice", meaning: "好的", tail: " " },
                { text: "restaurant", meaning: "餐廳", tail: "." },
              ],
            },
            {
              sentence: "Let's eat at a restaurant.",
              translation: "我們去餐廳吃吧。",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "eat", meaning: "吃", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "a", meaning: "一家", tail: " " },
                { text: "restaurant", meaning: "餐廳", tail: "." },
              ],
            },
            {
              sentence: "Which restaurant is good?",
              translation: "哪間餐廳好吃？",
              segments: [
                { text: "Which", meaning: "哪一家", tail: " " },
                { text: "restaurant", meaning: "餐廳", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "good", meaning: "好的", tail: "?" },
              ],
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
              segments: [{ text: "hotel", meaning: "飯店", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Book a hotel.",
              translation: "訂飯店。",
              segments: [
                { text: "Book", meaning: "預訂", tail: " " },
                { text: "a", meaning: "一間", tail: " " },
                { text: "hotel", meaning: "飯店", tail: "." },
              ],
            },
            {
              sentence: "Stay at a hotel.",
              translation: "住飯店。",
              segments: [
                { text: "Stay", meaning: "停留/住", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "a", meaning: "一間", tail: " " },
                { text: "hotel", meaning: "飯店", tail: "." },
              ],
            },
            {
              sentence: "This hotel is nice.",
              translation: "這間飯店不錯。",
              segments: [
                { text: "This", meaning: "這間", tail: " " },
                { text: "hotel", meaning: "飯店", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "nice", meaning: "好的", tail: "." },
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
              term_target: "place",
              pronunciation: ["/pleɪs/"],
              specific_note: "",
              segments: [{ text: "place", meaning: "地方", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Good place.",
              translation: "好地方。",
              segments: [
                { text: "Good", meaning: "好的", tail: " " },
                { text: "place", meaning: "地方", tail: "." },
              ],
            },
            {
              sentence: "Wrong place.",
              translation: "走錯地方。",
              segments: [
                { text: "Wrong", meaning: "錯誤的", tail: " " },
                { text: "place", meaning: "地方", tail: "." },
              ],
            },
            {
              sentence: "This is a famous place.",
              translation: "這是個有名的地方。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "famous", meaning: "有名的", tail: " " },
                { text: "place", meaning: "地方", tail: "." },
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
              term_target: "clerk",
              pronunciation: ["/klɝk/"],
              specific_note: "",
              segments: [{ text: "clerk", meaning: "店員", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ask the clerk.",
              translation: "問店員。",
              segments: [
                { text: "Ask", meaning: "問", tail: " " },
                { text: "the", meaning: "這位", tail: " " },
                { text: "clerk", meaning: "店員", tail: "." },
              ],
            },
            {
              sentence: "The clerk is helpful.",
              translation: "店員很熱心。",
              segments: [
                { text: "The", meaning: "這位", tail: " " },
                { text: "clerk", meaning: "店員", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "helpful", meaning: "有幫助的", tail: "." },
              ],
            },
            {
              sentence: "I am a clerk.",
              translation: "我是店員。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "clerk", meaning: "店員", tail: "." },
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
              term_target: "supermarket",
              pronunciation: ["/ˈsupɚˌmɑrkɪt/"],
              specific_note: "",
              segments: [{ text: "supermarket", meaning: "超市", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Go to supermarket.",
              translation: "去超市。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "supermarket", meaning: "超市", tail: "." },
              ],
            },
            {
              sentence: "Buy food at the supermarket.",
              translation: "在超市買食物。",
              segments: [
                { text: "Buy", meaning: "買", tail: " " },
                { text: "food", meaning: "食物", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "the", meaning: "這家", tail: " " },
                { text: "supermarket", meaning: "超市", tail: "." },
              ],
            },
            {
              sentence: "Is there a supermarket nearby?",
              translation: "這附近有超市嗎？",
              segments: [
                { text: "Is", meaning: "有", tail: " " },
                { text: "there", meaning: "那裡", tail: " " },
                { text: "a", meaning: "一家", tail: " " },
                { text: "supermarket", meaning: "超市", tail: " " },
                { text: "nearby", meaning: "在附近", tail: "?" },
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
              term_target: "platform",
              pronunciation: ["/ˈplætˌfɔrm/"],
              specific_note: "",
              segments: [{ text: "platform", meaning: "月台", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Platform 1.",
              translation: "第一月台。",
              segments: [
                { text: "Platform", meaning: "月台", tail: " " },
                { text: "1", meaning: "一", tail: "." },
              ],
            },
            {
              sentence: "Wait on the platform.",
              translation: "在月台等。",
              segments: [
                { text: "Wait", meaning: "等待", tail: " " },
                { text: "on", meaning: "在...上", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "platform", meaning: "月台", tail: "." },
              ],
            },
            {
              sentence: "Which platform is for Taipei?",
              translation: "去台北要在哪個月台？",
              segments: [
                { text: "Which", meaning: "哪一個", tail: " " },
                { text: "platform", meaning: "月台", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "for", meaning: "往", tail: " " },
                { text: "Taipei", meaning: "台北", tail: "?" },
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
              term_target: "music",
              pronunciation: ["/ˈmjuzɪk/"],
              specific_note: "",
              segments: [{ text: "music", meaning: "音樂", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Listen to music.",
              translation: "聽音樂。",
              segments: [
                { text: "Listen", meaning: "聽", tail: " " },
                { text: "to", meaning: "...", tail: " " },
                { text: "music", meaning: "音樂", tail: "." },
              ],
            },
            {
              sentence: "I like pop music.",
              translation: "我喜歡流行音樂。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "pop", meaning: "流行", tail: " " },
                { text: "music", meaning: "音樂", tail: "." },
              ],
            },
            {
              sentence: "The music is loud.",
              translation: "音樂很大聲。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "music", meaning: "音樂", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "loud", meaning: "大聲的", tail: "." },
              ],
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
              segments: [{ text: "rain", meaning: "雨", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "It is raining.",
              translation: "正在下雨。",
              segments: [
                { text: "It", meaning: "它(天氣)", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "raining", meaning: "下雨", tail: "." },
              ],
            },
            {
              sentence: "Heavy rain.",
              translation: "大雨。",
              segments: [
                { text: "Heavy", meaning: "大", tail: " " },
                { text: "rain", meaning: "雨", tail: "." },
              ],
            },
            {
              sentence: "I don't like rain.",
              translation: "我不喜歡下雨。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "rain", meaning: "雨", tail: "." },
              ],
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
              segments: [{ text: "picture", meaning: "照片", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Take a picture.",
              translation: "拍張照。",
              segments: [
                { text: "Take", meaning: "拍", tail: " " },
                { text: "a", meaning: "一張", tail: " " },
                { text: "picture", meaning: "照片", tail: "." },
              ],
            },
            {
              sentence: "Look at this picture.",
              translation: "看這張照片。",
              segments: [
                { text: "Look", meaning: "看", tail: " " },
                { text: "at", meaning: "著", tail: " " },
                { text: "this", meaning: "這張", tail: " " },
                { text: "picture", meaning: "照片", tail: "." },
              ],
            },
            {
              sentence: "Can you take a picture of us?",
              translation: "可以幫我們拍張照嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "take", meaning: "拍", tail: " " },
                { text: "a", meaning: "一張", tail: " " },
                { text: "picture", meaning: "照片", tail: " " },
                { text: "of", meaning: "關於", tail: " " },
                { text: "us", meaning: "我們", tail: "?" },
              ],
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
              segments: [{ text: "book", meaning: "書", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Read a book.",
              translation: "看書。",
              segments: [
                { text: "Read", meaning: "閱讀", tail: " " },
                { text: "a", meaning: "一本", tail: " " },
                { text: "book", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "Open the book.",
              translation: "打開書。",
              segments: [
                { text: "Open", meaning: "打開", tail: " " },
                { text: "the", meaning: "這本", tail: " " },
                { text: "book", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "This is my book.",
              translation: "這是我的書。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "book", meaning: "書", tail: "." },
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
              term_target: "restroom",
              pronunciation: ["/ˈtɔɪlɪt/"],
              specific_note: "",
              segments: [{ text: "restroom", meaning: "廁所", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Where is the restroom?",
              translation: "廁所在哪？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "the", meaning: "這間", tail: " " },
                { text: "restroom", meaning: "廁所", tail: "?" },
              ],
            },
            {
              sentence: "Go to the restroom.",
              translation: "去上廁所。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "the", meaning: "這間", tail: " " },
                { text: "restroom", meaning: "廁所", tail: "." },
              ],
            },
            {
              sentence: "The restroom is clean.",
              translation: "廁所很乾淨。",
              segments: [
                { text: "The", meaning: "這間", tail: " " },
                { text: "restroom", meaning: "廁所", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "clean", meaning: "乾淨的", tail: "." },
              ],
            },
          ],
          usage_note: "洗手間。",
          image_file: "restroom.png",
        },
        {
          id: "n-81",
          term_zh: "天氣",
          related_terms: [
            {
              term_target: "weather",
              pronunciation: ["/ˈwɛðɚ/"],
              specific_note: "",
              segments: [{ text: "weather", meaning: "天氣", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Good weather.",
              translation: "好天氣。",
              segments: [
                { text: "Good", meaning: "好的", tail: " " },
                { text: "weather", meaning: "天氣", tail: "." },
              ],
            },
            {
              sentence: "Bad weather.",
              translation: "壞天氣。",
              segments: [
                { text: "Bad", meaning: "壞的", tail: " " },
                { text: "weather", meaning: "天氣", tail: "." },
              ],
            },
            {
              sentence: "How is the weather?",
              translation: "天氣如何？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "weather", meaning: "天氣", tail: "?" },
              ],
            },
          ],
          usage_note: "氣候。",
          image_file: "weather.png",
        },
        {
          id: "n-82",
          term_zh: "訊息",
          related_terms: [
            {
              term_target: "message",
              pronunciation: ["/ˈmɛsɪdʒ/"],
              specific_note: "",
              segments: [{ text: "message", meaning: "訊息", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Send a message.",
              translation: "傳訊息。",
              segments: [
                { text: "Send", meaning: "傳送", tail: " " },
                { text: "a", meaning: "一則", tail: " " },
                { text: "message", meaning: "訊息", tail: "." },
              ],
            },
            {
              sentence: "Leave a message.",
              translation: "留訊息。",
              segments: [
                { text: "Leave", meaning: "留下", tail: " " },
                { text: "a", meaning: "一則", tail: " " },
                { text: "message", meaning: "訊息", tail: "." },
              ],
            },
            {
              sentence: "I got a message.",
              translation: "我收到一則訊息。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "got", meaning: "得到", tail: " " },
                { text: "a", meaning: "一則", tail: " " },
                { text: "message", meaning: "訊息", tail: "." },
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
              term_target: "now",
              pronunciation: ["naʊ"],
              specific_note: "",
              segments: [{ text: "now", meaning: "現在", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Do it now.",
              translation: "現在做。",
              segments: [
                { text: "Do", meaning: "做", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "I am busy now.",
              translation: "我現在很忙。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "busy", meaning: "忙碌的", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Where are you now?",
              translation: "你現在在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "are", meaning: "在", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "now", meaning: "現在", tail: "?" },
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
              term_target: "very",
              pronunciation: ["ˈvɛri"],
              specific_note: "",
              segments: [{ text: "very", meaning: "非常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Very good.",
              translation: "非常好。",
              segments: [
                { text: "Very", meaning: "非常", tail: " " },
                { text: "good", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Thank you very much.",
              translation: "非常謝謝你。",
              segments: [
                { text: "Thank", meaning: "謝謝", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "very", meaning: "非常", tail: " " },
                { text: "much", meaning: "多", tail: "." },
              ],
            },
            {
              sentence: "It is very hot today.",
              translation: "今天非常熱。",
              segments: [
                { text: "It", meaning: "它(天氣)", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "very", meaning: "非常", tail: " " },
                { text: "hot", meaning: "熱", tail: " " },
                { text: "today", meaning: "今天", tail: "." },
              ],
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
              pronunciation: ["ˈriəli"],
              specific_note: "",
              segments: [{ text: "really", meaning: "真的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Really?",
              translation: "真的嗎？",
              segments: [{ text: "Really", meaning: "真的", tail: "?" }],
            },
            {
              sentence: "I really like it.",
              translation: "我真的很喜歡它。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "really", meaning: "真的", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "it", meaning: "它", tail: "." },
              ],
            },
            {
              sentence: "She is really nice.",
              translation: "她人真的很好。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "really", meaning: "真的", tail: " " },
                { text: "nice", meaning: "好/親切", tail: "." },
              ],
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
              pronunciation: ["wɛl"],
              specific_note: "",
              segments: [{ text: "well", meaning: "好地", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sleep well.",
              translation: "睡個好覺。",
              segments: [
                { text: "Sleep", meaning: "睡", tail: " " },
                { text: "well", meaning: "好地", tail: "." },
              ],
            },
            {
              sentence: "Well done!",
              translation: "做得好！",
              segments: [
                { text: "Well", meaning: "好地", tail: " " },
                { text: "done", meaning: "做完", tail: "!" },
              ],
            },
            {
              sentence: "I don't feel well.",
              translation: "我身體不舒服。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "feel", meaning: "感覺", tail: " " },
                { text: "well", meaning: "舒服/好", tail: "." },
              ],
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
              pronunciation: ["ˈɔfən"],
              specific_note: "",
              segments: [{ text: "often", meaning: "經常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I often come here.",
              translation: "我常來這。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "often", meaning: "經常", tail: " " },
                { text: "come", meaning: "來", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "How often do you exercise?",
              translation: "你多久運動一次？",
              segments: [
                { text: "How", meaning: "多", tail: " " },
                { text: "often", meaning: "常", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "exercise", meaning: "運動", tail: "?" },
              ],
            },
            {
              sentence: "It rains often here.",
              translation: "這裡經常下雨。",
              segments: [
                { text: "It", meaning: "它(天氣)", tail: " " },
                { text: "rains", meaning: "下雨", tail: " " },
                { text: "often", meaning: "經常", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
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
              pronunciation: ["ˈjuʒʊəli"],
              specific_note: "",
              segments: [{ text: "usually", meaning: "通常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Usually at 6.",
              translation: "通常在六點。",
              segments: [
                { text: "Usually", meaning: "通常", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "6", meaning: "六點", tail: "." },
              ],
            },
            {
              sentence: "I usually get up at 7.",
              translation: "我通常7點起床。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "usually", meaning: "通常", tail: " " },
                { text: "get", meaning: "...", tail: " " },
                { text: "up", meaning: "起床", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "7", meaning: "七點", tail: "." },
              ],
            },
            {
              sentence: "What do you usually do?",
              translation: "你通常做什麼？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "usually", meaning: "通常", tail: " " },
                { text: "do", meaning: "做", tail: "?" },
              ],
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
              pronunciation: ["ɔlˈrɛdi"],
              specific_note: "",
              segments: [{ text: "already", meaning: "已經", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Already done.",
              translation: "已經做好了。",
              segments: [
                { text: "Already", meaning: "已經", tail: " " },
                { text: "done", meaning: "完成", tail: "." },
              ],
            },
            {
              sentence: "It is already 10 o'clock.",
              translation: "已經10點了。",
              segments: [
                { text: "It", meaning: "它(時間)", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "already", meaning: "已經", tail: " " },
                { text: "10", meaning: "十", tail: " " },
                { text: "o'clock", meaning: "點鐘", tail: "." },
              ],
            },
            {
              sentence: "I have already eaten.",
              translation: "我已經吃過了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經(完成式助動詞)", tail: " " },
                { text: "already", meaning: "已經", tail: " " },
                { text: "eaten", meaning: "吃過", tail: "." },
              ],
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
              pronunciation: ["ˈoʊnli"],
              specific_note: "",
              segments: [{ text: "only", meaning: "只有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Only one.",
              translation: "只有一個。",
              segments: [
                { text: "Only", meaning: "只有", tail: " " },
                { text: "one", meaning: "一個", tail: "." },
              ],
            },
            {
              sentence: "I only have 100 dollars.",
              translation: "我只有100元。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "only", meaning: "只有", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "100", meaning: "一百", tail: " " },
                { text: "dollars", meaning: "元", tail: "." },
              ],
            },
            {
              sentence: "Only you can help me.",
              translation: "只有你能幫我。",
              segments: [
                { text: "Only", meaning: "只有", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "can", meaning: "能", tail: " " },
                { text: "help", meaning: "幫助", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
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
              pronunciation: ["əˈgɛn"],
              specific_note: "",
              segments: [{ text: "again", meaning: "再次", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Try again.",
              translation: "再試一次。",
              segments: [
                { text: "Try", meaning: "嘗試", tail: " " },
                { text: "again", meaning: "再次", tail: "." },
              ],
            },
            {
              sentence: "Say that again, please.",
              translation: "請再說一次。",
              segments: [
                { text: "Say", meaning: "說", tail: " " },
                { text: "that", meaning: "那個", tail: " " },
                { text: "again", meaning: "再次", tail: ", " },
                { text: "please", meaning: "請", tail: "." },
              ],
            },
            {
              sentence: "Never do that again.",
              translation: "別再那樣做了。",
              segments: [
                { text: "Never", meaning: "絕不", tail: " " },
                { text: "do", meaning: "做", tail: " " },
                { text: "that", meaning: "那個", tail: " " },
                { text: "again", meaning: "再次", tail: "." },
              ],
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
              pronunciation: ["əˈbaʊt"],
              specific_note: "",
              segments: [{ text: "about", meaning: "大約", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "About 10 minutes.",
              translation: "大約10分鐘。",
              segments: [
                { text: "About", meaning: "大約", tail: " " },
                { text: "10", meaning: "十", tail: " " },
                { text: "minutes", meaning: "分鐘", tail: "." },
              ],
            },
            {
              sentence: "It is about 5 kilometers.",
              translation: "大約5公里。",
              segments: [
                { text: "It", meaning: "它(距離)", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "about", meaning: "大約", tail: " " },
                { text: "5", meaning: "五", tail: " " },
                { text: "kilometers", meaning: "公里", tail: "." },
              ],
            },
            {
              sentence: "It costs about $50.",
              translation: "大約50元。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "costs", meaning: "花費", tail: " " },
                { text: "about", meaning: "大約", tail: " " },
                { text: "$50", meaning: "五十元", tail: "." },
              ],
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
              pronunciation: ["ə ˈlɪtḷ"],
              specific_note: "",
              segments: [
                { text: "a", meaning: "一", tail: " " },
                { text: "little", meaning: "點點", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "A little spicy.",
              translation: "一點點辣。",
              segments: [
                { text: "A", meaning: "一", tail: " " },
                { text: "little", meaning: "點點", tail: " " },
                { text: "spicy", meaning: "辣的", tail: "." },
              ],
            },
            {
              sentence: "I am a little tired.",
              translation: "我有一點累。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "a", meaning: "一", tail: " " },
                { text: "little", meaning: "點點", tail: " " },
                { text: "tired", meaning: "累的", tail: "." },
              ],
            },
            {
              sentence: "Just a little, please.",
              translation: "麻煩只要一點點。",
              segments: [
                { text: "Just", meaning: "只要", tail: " " },
                { text: "a", meaning: "一", tail: " " },
                { text: "little", meaning: "點點", tail: ", " },
                { text: "please", meaning: "請", tail: "." },
              ],
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
              pronunciation: ["ˈɔlsoʊ"],
              specific_note: "",
              segments: [{ text: "also", meaning: "也", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I also like it.",
              translation: "我也喜歡它。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "also", meaning: "也", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "it", meaning: "它", tail: "." },
              ],
            },
            {
              sentence: "She is also a teacher.",
              translation: "她也是一位老師。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "also", meaning: "也", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "teacher", meaning: "老師", tail: "." },
              ],
            },
            {
              sentence: "I am hungry, also thirsty.",
              translation: "我又餓又渴。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "hungry", meaning: "餓的", tail: ", " },
                { text: "also", meaning: "也", tail: " " },
                { text: "thirsty", meaning: "渴的", tail: "." },
              ],
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
              pronunciation: ["ˈmeɪbi"],
              specific_note: "",
              segments: [{ text: "maybe", meaning: "或許", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Maybe later.",
              translation: "也許等下。",
              segments: [
                { text: "Maybe", meaning: "或許", tail: " " },
                { text: "later", meaning: "等下/稍後", tail: "." },
              ],
            },
            {
              sentence: "Maybe you are right.",
              translation: "也許你是對的。",
              segments: [
                { text: "Maybe", meaning: "或許", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "right", meaning: "對的", tail: "." },
              ],
            },
            {
              sentence: "Call me maybe.",
              translation: "或許打給我。",
              segments: [
                { text: "Call", meaning: "打給", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "maybe", meaning: "或許", tail: "." },
              ],
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
              pronunciation: ["ˈleɪtɚ"],
              specific_note: "",
              segments: [{ text: "later", meaning: "稍後/晚點", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "See you later.",
              translation: "待會見。",
              segments: [
                { text: "See", meaning: "見", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "later", meaning: "稍後", tail: "." },
              ],
            },
            {
              sentence: "Call me later.",
              translation: "待會打給我。",
              segments: [
                { text: "Call", meaning: "打給", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "later", meaning: "稍後", tail: "." },
              ],
            },
            {
              sentence: "Two years later.",
              translation: "兩年後。",
              segments: [
                { text: "Two", meaning: "兩", tail: " " },
                { text: "years", meaning: "年", tail: " " },
                { text: "later", meaning: "之後", tail: "." },
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
              term_target: "soon",
              pronunciation: ["sun"],
              specific_note: "",
              segments: [{ text: "soon", meaning: "很快/不久", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "See you soon.",
              translation: "待會見。",
              segments: [
                { text: "See", meaning: "見", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "soon", meaning: "很快", tail: "." },
              ],
            },
            {
              sentence: "Get well soon.",
              translation: "早日康復。",
              segments: [
                { text: "Get", meaning: "變", tail: " " },
                { text: "well", meaning: "好", tail: " " },
                { text: "soon", meaning: "很快", tail: "." },
              ],
            },
            {
              sentence: "Coming soon.",
              translation: "即將到來。",
              segments: [
                { text: "Coming", meaning: "來臨", tail: " " },
                { text: "soon", meaning: "很快", tail: "." },
              ],
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
              pronunciation: ["təˈgɛðɚ"],
              specific_note: "",
              segments: [{ text: "together", meaning: "一起", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Go together.",
              translation: "一起去。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "together", meaning: "一起", tail: "." },
              ],
            },
            {
              sentence: "Let's work together.",
              translation: "我們一起工作吧。",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "work", meaning: "工作", tail: " " },
                { text: "together", meaning: "一起", tail: "." },
              ],
            },
            {
              sentence: "We are together.",
              translation: "我們在一起。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "are", meaning: "是/在", tail: " " },
                { text: "together", meaning: "在一起", tail: "." },
              ],
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
              pronunciation: ["stɪl"],
              specific_note: "",
              segments: [{ text: "still", meaning: "仍然", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Still here.",
              translation: "還在這裡。",
              segments: [
                { text: "Still", meaning: "仍然", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "I am still hungry.",
              translation: "我還是很餓。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "still", meaning: "仍然", tail: " " },
                { text: "hungry", meaning: "餓的", tail: "." },
              ],
            },
            {
              sentence: "Are you still working?",
              translation: "你還在工作嗎？",
              segments: [
                { text: "Are", meaning: "正在", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "still", meaning: "仍然", tail: " " },
                { text: "working", meaning: "工作", tail: "?" },
              ],
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
              pronunciation: ["ˈnɔrmḷi"],
              specific_note: "",
              segments: [
                { text: "normally", meaning: "通常/正常地", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Normally I walk.",
              translation: "一般我走路。",
              segments: [
                { text: "Normally", meaning: "通常", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "walk", meaning: "走路", tail: "." },
              ],
            },
            {
              sentence: "Normally, it takes 1 hour.",
              translation: "一般來說要花一小時。",
              segments: [
                { text: "Normally", meaning: "通常", tail: ", " },
                { text: "it", meaning: "它", tail: " " },
                { text: "takes", meaning: "花費", tail: " " },
                { text: "1", meaning: "一", tail: " " },
                { text: "hour", meaning: "小時", tail: "." },
              ],
            },
            {
              sentence: "The store is normally open.",
              translation: "這家店通常是開的。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "store", meaning: "店", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "normally", meaning: "通常", tail: " " },
                { text: "open", meaning: "開著的", tail: "." },
              ],
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
              pronunciation: ["ɪˈmidiətli"],
              specific_note: "",
              segments: [{ text: "immediately", meaning: "立刻", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Go immediately.",
              translation: "立刻去。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "immediately", meaning: "立刻", tail: "." },
              ],
            },
            {
              sentence: "Stop immediately.",
              translation: "立刻停止。",
              segments: [
                { text: "Stop", meaning: "停止", tail: " " },
                { text: "immediately", meaning: "立刻", tail: "." },
              ],
            },
            {
              sentence: "I need help immediately.",
              translation: "我需要立刻的協助。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "need", meaning: "需要", tail: " " },
                { text: "help", meaning: "幫助", tail: " " },
                { text: "immediately", meaning: "立刻", tail: "." },
              ],
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
              pronunciation: ["ˈniðɚ"],
              specific_note: "",
              segments: [{ text: "neither", meaning: "也不", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Me neither.",
              translation: "我也不。",
              segments: [
                { text: "Me", meaning: "我", tail: " " },
                { text: "neither", meaning: "也不", tail: "." },
              ],
            },
            {
              sentence: "Neither do I.",
              translation: "我也不。",
              segments: [
                { text: "Neither", meaning: "也不", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "I", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Neither one is good.",
              translation: "兩個都不好。",
              segments: [
                { text: "Neither", meaning: "兩者皆非", tail: " " },
                { text: "one", meaning: "一個", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "good", meaning: "好的", tail: "." },
              ],
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
              segments: [{ text: "what", meaning: "什麼", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "What is it?",
              translation: "它是什麼？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "it", meaning: "它", tail: "?" },
              ],
            },
            {
              sentence: "What is your name?",
              translation: "你叫什麼名字？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "name", meaning: "名字", tail: "?" },
              ],
            },
            {
              sentence: "What do you want?",
              translation: "你想要什麼？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "want", meaning: "想要", tail: "?" },
              ],
            },
          ],
          usage_note: "問事物。",
          image_file: "what.png",
        },
        {
          id: "q-02",
          term_zh: "如何",
          related_terms: [
            {
              term_target: "how",
              pronunciation: ["/haʊ/"],
              specific_note: "",
              segments: [{ text: "how", meaning: "如何", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "How are you?",
              translation: "你好嗎？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
            },
            {
              sentence: "How do you do that?",
              translation: "你是怎麼做到的？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "do", meaning: "做", tail: " " },
                { text: "that", meaning: "那個", tail: "?" },
              ],
            },
            {
              sentence: "How old are you?",
              translation: "你幾歲？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "old", meaning: "老(歲)", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
            },
          ],
          usage_note: "問狀況。",
          image_file: "how.png",
        },
        {
          id: "q-03",
          term_zh: "何時",
          related_terms: [
            {
              term_target: "when",
              pronunciation: ["/hwɛn/"],
              specific_note: "",
              segments: [{ text: "when", meaning: "何時", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "When to go?",
              translation: "何時去？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "go", meaning: "走", tail: "?" },
              ],
            },
            {
              sentence: "When is your birthday?",
              translation: "你的生日是什麼時候？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "birthday", meaning: "生日", tail: "?" },
              ],
            },
            {
              sentence: "When does the bus arrive?",
              translation: "公車什麼時候會到？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "does", meaning: "(助動詞)", tail: " " },
                { text: "the", meaning: "這班", tail: " " },
                { text: "bus", meaning: "公車", tail: " " },
                { text: "arrive", meaning: "抵達", tail: "?" },
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
              term_target: "where",
              pronunciation: ["/wɛr/"],
              specific_note: "",
              segments: [{ text: "where", meaning: "哪裡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Where are you?",
              translation: "你在哪？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "are", meaning: "在", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
            },
            {
              sentence: "Where is the bathroom?",
              translation: "廁所在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "is", meaning: "在", tail: " " },
                { text: "the", meaning: "這間", tail: " " },
                { text: "bathroom", meaning: "廁所", tail: "?" },
              ],
            },
            {
              sentence: "Where do you live?",
              translation: "你住在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "live", meaning: "居住", tail: "?" },
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
              term_target: "who",
              pronunciation: ["/hu/"],
              specific_note: "",
              segments: [{ text: "who", meaning: "誰", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Who is he?",
              translation: "他是誰？",
              segments: [
                { text: "Who", meaning: "誰", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "he", meaning: "他", tail: "?" },
              ],
            },
            {
              sentence: "Who are you?",
              translation: "你是誰？",
              segments: [
                { text: "Who", meaning: "誰", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
            },
            {
              sentence: "Who is calling?",
              translation: "是誰打來的？",
              segments: [
                { text: "Who", meaning: "誰", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "calling", meaning: "打電話", tail: "?" },
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
              term_target: "why",
              pronunciation: ["/hwaɪ/"],
              specific_note: "",
              segments: [{ text: "why", meaning: "為什麼", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Why?",
              translation: "為什麼？",
              segments: [{ text: "Why", meaning: "為什麼", tail: "?" }],
            },
            {
              sentence: "Why are you late?",
              translation: "你為什麼遲到？",
              segments: [
                { text: "Why", meaning: "為什麼", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "late", meaning: "遲到", tail: "?" },
              ],
            },
            {
              sentence: "Why do you like it?",
              translation: "你為什麼喜歡它？",
              segments: [
                { text: "Why", meaning: "為什麼", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "it", meaning: "它", tail: "?" },
              ],
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
              segments: [{ text: "which", meaning: "哪一個", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Which one?",
              translation: "哪一個？",
              segments: [
                { text: "Which", meaning: "哪一", tail: " " },
                { text: "one", meaning: "個", tail: "?" },
              ],
            },
            {
              sentence: "Which color do you like?",
              translation: "你喜歡哪個顏色？",
              segments: [
                { text: "Which", meaning: "哪一", tail: " " },
                { text: "color", meaning: "顏色", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "like", meaning: "喜歡", tail: "?" },
              ],
            },
            {
              sentence: "Which way is north?",
              translation: "哪邊是北方？",
              segments: [
                { text: "Which", meaning: "哪一", tail: " " },
                { text: "way", meaning: "條路/方向", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "north", meaning: "北方", tail: "?" },
              ],
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
              segments: [
                { text: "how", meaning: "如何", tail: " " },
                { text: "much", meaning: "多", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "How much?",
              translation: "多少錢？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "much", meaning: "多", tail: "?" },
              ],
            },
            {
              sentence: "How much is this?",
              translation: "這個多少錢？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "much", meaning: "多", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "this", meaning: "這個", tail: "?" },
              ],
            },
            {
              sentence: "How much water do you need?",
              translation: "你需要多少水？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "much", meaning: "多", tail: " " },
                { text: "water", meaning: "水", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "need", meaning: "需要", tail: "?" },
              ],
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
              segments: [
                { text: "how", meaning: "如何", tail: " " },
                { text: "long", meaning: "久", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "How long?",
              translation: "要多久？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "long", meaning: "久", tail: "?" },
              ],
            },
            {
              sentence: "How long will it take?",
              translation: "這會花多久時間？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "long", meaning: "久", tail: " " },
                { text: "will", meaning: "將會", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "take", meaning: "花費", tail: "?" },
              ],
            },
            {
              sentence: "How long have you lived here?",
              translation: "你在這裡住多久了？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "long", meaning: "久", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "lived", meaning: "居住", tail: " " },
                { text: "here", meaning: "這裡", tail: "?" },
              ],
            },
          ],
          usage_note: "時間長度。",
          image_file: "how_long.png",
        },
        {
          id: "q-10",
          term_zh: "幾點",
          related_terms: [
            {
              term_target: "what time",
              pronunciation: ["/hwɑt taɪm/"],
              specific_note: "",
              segments: [
                { text: "what", meaning: "什麼", tail: " " },
                { text: "time", meaning: "時間", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "What time is it?",
              translation: "現在幾點？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "time", meaning: "時間", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "it", meaning: "它(現在)", tail: "?" },
              ],
            },
            {
              sentence: "What time do we meet?",
              translation: "我們幾點見面？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "time", meaning: "時間", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "we", meaning: "我們", tail: " " },
                { text: "meet", meaning: "見面", tail: "?" },
              ],
            },
            {
              sentence: "What time does it start?",
              translation: "幾點開始？",
              segments: [
                { text: "What", meaning: "什麼", tail: " " },
                { text: "time", meaning: "時間", tail: " " },
                { text: "does", meaning: "(助動詞)", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "start", meaning: "開始", tail: "?" },
              ],
            },
          ],
          usage_note: "問具體時間。",
          image_file: "what_time.png",
        },
        {
          id: "q-11",
          term_zh: "幾歲",
          related_terms: [
            {
              term_target: "how old",
              pronunciation: ["/haʊ oʊld/"],
              specific_note: "",
              segments: [
                { text: "how", meaning: "如何", tail: " " },
                { text: "old", meaning: "老(歲)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "How old are you?",
              translation: "你幾歲？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "old", meaning: "老(歲)", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
            },
            {
              sentence: "How old is he?",
              translation: "他幾歲？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "old", meaning: "老(歲)", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "he", meaning: "他", tail: "?" },
              ],
            },
            {
              sentence: "How old is your cat?",
              translation: "你的貓幾歲了？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "old", meaning: "老(歲)", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "cat", meaning: "貓", tail: "?" },
              ],
            },
          ],
          usage_note: "問年齡。",
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
              term_target: "now",
              pronunciation: ["/naʊ/"],
              specific_note: "",
              segments: [{ text: "now", meaning: "現在", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Do it now.",
              translation: "現在做。",
              segments: [
                { text: "Do", meaning: "做", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Where are you now?",
              translation: "你現在在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "are", meaning: "在", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "now", meaning: "現在", tail: "?" },
              ],
            },
            {
              sentence: "I am busy right now.",
              translation: "我現在正忙。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "busy", meaning: "忙碌的", tail: " " },
                { text: "right", meaning: "正", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
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
              term_target: "today",
              pronunciation: ["/təˈdeɪ/"],
              specific_note: "",
              segments: [{ text: "today", meaning: "今天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Not today.",
              translation: "不是今天。",
              segments: [
                { text: "Not", meaning: "不是", tail: " " },
                { text: "today", meaning: "今天", tail: "." },
              ],
            },
            {
              sentence: "How are you today?",
              translation: "你今天好嗎？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "today", meaning: "今天", tail: "?" },
              ],
            },
            {
              sentence: "Today is Monday.",
              translation: "今天是星期一。",
              segments: [
                { text: "Today", meaning: "今天", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "Monday", meaning: "星期一", tail: "." },
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
              term_target: "tomorrow",
              pronunciation: ["/təˈmɔroʊ/"],
              specific_note: "",
              segments: [{ text: "tomorrow", meaning: "明天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "See you tomorrow.",
              translation: "明天見。",
              segments: [
                { text: "See", meaning: "見", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "tomorrow", meaning: "明天", tail: "." },
              ],
            },
            {
              sentence: "Tomorrow is my birthday.",
              translation: "明天是我的生日。",
              segments: [
                { text: "Tomorrow", meaning: "明天", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "birthday", meaning: "生日", tail: "." },
              ],
            },
            {
              sentence: "Are you free tomorrow?",
              translation: "你明天有空嗎？",
              segments: [
                { text: "Are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "free", meaning: "有空的", tail: " " },
                { text: "tomorrow", meaning: "明天", tail: "?" },
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
              term_target: "yesterday",
              pronunciation: ["/ˈjɛstɚdeɪ/"],
              specific_note: "",
              segments: [{ text: "yesterday", meaning: "昨天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Yesterday morning.",
              translation: "昨天早上。",
              segments: [
                { text: "Yesterday", meaning: "昨天", tail: " " },
                { text: "morning", meaning: "早晨", tail: "." },
              ],
            },
            {
              sentence: "Where were you yesterday?",
              translation: "你昨天在哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "were", meaning: "在(過去式)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "yesterday", meaning: "昨天", tail: "?" },
              ],
            },
            {
              sentence: "It rained yesterday.",
              translation: "昨天下雨了。",
              segments: [
                { text: "It", meaning: "它(天氣)", tail: " " },
                { text: "rained", meaning: "下雨(過去式)", tail: " " },
                { text: "yesterday", meaning: "昨天", tail: "." },
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
              term_target: "here",
              pronunciation: ["/hɪr/"],
              specific_note: "",
              segments: [{ text: "here", meaning: "這裡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Come here.",
              translation: "來這。",
              segments: [
                { text: "Come", meaning: "來", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "I am here.",
              translation: "我在這。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是/在", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Is it near here?",
              translation: "離這裡近嗎？",
              segments: [
                { text: "Is", meaning: "是", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "near", meaning: "靠近", tail: " " },
                { text: "here", meaning: "這裡", tail: "?" },
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
              term_target: "there",
              pronunciation: ["/ðɛr/"],
              specific_note: "",
              segments: [{ text: "there", meaning: "那裡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Go there.",
              translation: "去那。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "there", meaning: "那裡", tail: "." },
              ],
            },
            {
              sentence: "Look over there.",
              translation: "看那邊。",
              segments: [
                { text: "Look", meaning: "看", tail: " " },
                { text: "over", meaning: "越過/在", tail: " " },
                { text: "there", meaning: "那裡", tail: "." },
              ],
            },
            {
              sentence: "Who is there?",
              translation: "誰在那裡？",
              segments: [
                { text: "Who", meaning: "誰", tail: " " },
                { text: "is", meaning: "在", tail: " " },
                { text: "there", meaning: "那裡", tail: "?" },
              ],
            },
          ],
          usage_note: "遠處。",
          image_file: "there.png",
        },
        {
          id: "tp-07",
          term_zh: "天（日期）",
          related_terms: [
            {
              term_target: "day",
              pronunciation: ["/deɪ/"],
              specific_note: "",
              segments: [{ text: "day", meaning: "天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "One day.",
              translation: "一天。",
              segments: [
                { text: "One", meaning: "一", tail: " " },
                { text: "day", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "Have a nice day.",
              translation: "祝你有美好的一天。",
              segments: [
                { text: "Have", meaning: "有", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "nice", meaning: "美好的", tail: " " },
                { text: "day", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "Every day.",
              translation: "每一天。",
              segments: [
                { text: "Every", meaning: "每", tail: " " },
                { text: "day", meaning: "天", tail: "." },
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
              term_target: "year",
              pronunciation: ["/jɪr/"],
              specific_note: "",
              segments: [{ text: "year", meaning: "年", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "This year.",
              translation: "今年。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "year", meaning: "年", tail: "." },
              ],
            },
            {
              sentence: "Happy New Year.",
              translation: "新年快樂。",
              segments: [
                { text: "Happy", meaning: "快樂", tail: " " },
                { text: "New", meaning: "新", tail: " " },
                { text: "Year", meaning: "年", tail: "." },
              ],
            },
            {
              sentence: "Last year.",
              translation: "去年。",
              segments: [
                { text: "Last", meaning: "上個/最後", tail: " " },
                { text: "year", meaning: "年", tail: "." },
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
              term_target: "month",
              pronunciation: ["/mʌnθ/"],
              specific_note: "",
              segments: [{ text: "month", meaning: "月", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "This month.",
              translation: "這個月。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "month", meaning: "月", tail: "." },
              ],
            },
            {
              sentence: "Next month.",
              translation: "下個月。",
              segments: [
                { text: "Next", meaning: "下一個", tail: " " },
                { text: "month", meaning: "月", tail: "." },
              ],
            },
            {
              sentence: "12 months in a year.",
              translation: "一年有12個月。",
              segments: [
                { text: "12", meaning: "十二", tail: " " },
                { text: "months", meaning: "個月", tail: " " },
                { text: "in", meaning: "在...裡", tail: " " },
                { text: "a", meaning: "一", tail: " " },
                { text: "year", meaning: "年", tail: "." },
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
              term_target: "week",
              pronunciation: ["/wik/"],
              specific_note: "",
              segments: [{ text: "week", meaning: "週", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Next week.",
              translation: "下週。",
              segments: [
                { text: "Next", meaning: "下一", tail: " " },
                { text: "week", meaning: "週", tail: "." },
              ],
            },
            {
              sentence: "Once a week.",
              translation: "一週一次。",
              segments: [
                { text: "Once", meaning: "一次", tail: " " },
                { text: "a", meaning: "一", tail: " " },
                { text: "week", meaning: "週", tail: "." },
              ],
            },
            {
              sentence: "Have a good week.",
              translation: "祝你這週愉快。",
              segments: [
                { text: "Have", meaning: "有", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "good", meaning: "好的", tail: " " },
                { text: "week", meaning: "週", tail: "." },
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
              term_target: "morning",
              pronunciation: ["/ˈmɔrnɪŋ/"],
              specific_note: "",
              segments: [{ text: "morning", meaning: "早上", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "In the morning.",
              translation: "在早上。",
              segments: [
                { text: "In", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "morning", meaning: "早上", tail: "." },
              ],
            },
            {
              sentence: "Good morning.",
              translation: "早安。",
              segments: [
                { text: "Good", meaning: "好的", tail: " " },
                { text: "morning", meaning: "早晨", tail: "." },
              ],
            },
            {
              sentence: "I run in the morning.",
              translation: "我早上跑步。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "run", meaning: "跑", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "morning", meaning: "早上", tail: "." },
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
              term_target: "afternoon",
              pronunciation: ["/ˌæftɚˈnun/"],
              specific_note: "",
              segments: [{ text: "afternoon", meaning: "下午", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Good afternoon.",
              translation: "午安。",
              segments: [
                { text: "Good", meaning: "好的", tail: " " },
                { text: "afternoon", meaning: "下午", tail: "." },
              ],
            },
            {
              sentence: "See you this afternoon.",
              translation: "今天下午見。",
              segments: [
                { text: "See", meaning: "見", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "this", meaning: "這", tail: " " },
                { text: "afternoon", meaning: "下午", tail: "." },
              ],
            },
            {
              sentence: "Sunday afternoon.",
              translation: "星期天下午。",
              segments: [
                { text: "Sunday", meaning: "星期天", tail: " " },
                { text: "afternoon", meaning: "下午", tail: "." },
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
              term_target: "evening",
              pronunciation: ["/ˈivnɪŋ/"],
              specific_note: "",
              segments: [{ text: "evening", meaning: "晚上", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Good evening.",
              translation: "晚安(傍晚見面)。",
              segments: [
                { text: "Good", meaning: "好的", tail: " " },
                { text: "evening", meaning: "晚上", tail: "." },
              ],
            },
            {
              sentence: "Are you free this evening?",
              translation: "你今晚有空嗎？",
              segments: [
                { text: "Are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "free", meaning: "有空", tail: " " },
                { text: "this", meaning: "這", tail: " " },
                { text: "evening", meaning: "晚上", tail: "?" },
              ],
            },
            {
              sentence: "I watch TV in the evening.",
              translation: "我晚上看電視。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "watch", meaning: "看", tail: " " },
                { text: "TV", meaning: "電視", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "evening", meaning: "晚上", tail: "." },
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
              term_target: "noon",
              pronunciation: ["/nun/"],
              specific_note: "",
              segments: [{ text: "noon", meaning: "中午", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "At noon.",
              translation: "在中午。",
              segments: [
                { text: "At", meaning: "在", tail: " " },
                { text: "noon", meaning: "中午", tail: "." },
              ],
            },
            {
              sentence: "We eat lunch at noon.",
              translation: "我們中午吃午餐。",
              segments: [
                { text: "We", meaning: "我們", tail: " " },
                { text: "eat", meaning: "吃", tail: " " },
                { text: "lunch", meaning: "午餐", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "noon", meaning: "中午", tail: "." },
              ],
            },
            {
              sentence: "Before noon.",
              translation: "中午之前。",
              segments: [
                { text: "Before", meaning: "之前", tail: " " },
                { text: "noon", meaning: "中午", tail: "." },
              ],
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
              segments: [
                { text: "in", meaning: "在", tail: " " },
                { text: "front", meaning: "前", tail: " " },
                { text: "of", meaning: "的", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "In front of you.",
              translation: "在你前面。",
              segments: [
                { text: "In", meaning: "在", tail: " " },
                { text: "front", meaning: "前", tail: " " },
                { text: "of", meaning: "的", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Wait in front of the station.",
              translation: "在車站前等。",
              segments: [
                { text: "Wait", meaning: "等", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "front", meaning: "前", tail: " " },
                { text: "of", meaning: "的", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "station", meaning: "車站", tail: "." },
              ],
            },
            {
              sentence: "Don't stand in front of me.",
              translation: "不要站在我前面。",
              segments: [
                { text: "Don't", meaning: "不要", tail: " " },
                { text: "stand", meaning: "站", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "front", meaning: "前", tail: " " },
                { text: "of", meaning: "的", tail: " " },
                { text: "me", meaning: "我", tail: "." },
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
              term_target: "behind",
              pronunciation: ["/bɪˈhaɪnd/"],
              specific_note: "",
              segments: [{ text: "behind", meaning: "在後面", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Behind the door.",
              translation: "門後。",
              segments: [
                { text: "Behind", meaning: "在後面", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "door", meaning: "門", tail: "." },
              ],
            },
            {
              sentence: "Look behind you.",
              translation: "看你後面。",
              segments: [
                { text: "Look", meaning: "看", tail: " " },
                { text: "behind", meaning: "在後面", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Stay behind the yellow line.",
              translation: "待在黃線後面。",
              segments: [
                { text: "Stay", meaning: "待", tail: " " },
                { text: "behind", meaning: "在後面", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "yellow", meaning: "黃色", tail: " " },
                { text: "line", meaning: "線", tail: "." },
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
              term_target: "left",
              pronunciation: ["/lɛft/"],
              specific_note: "",
              segments: [{ text: "left", meaning: "左邊", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Turn left.",
              translation: "左轉。",
              segments: [
                { text: "Turn", meaning: "轉", tail: " " },
                { text: "left", meaning: "左邊", tail: "." },
              ],
            },
            {
              sentence: "On your left.",
              translation: "在你的左邊。",
              segments: [
                { text: "On", meaning: "在", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "left", meaning: "左邊", tail: "." },
              ],
            },
            {
              sentence: "Look to the left.",
              translation: "向左看。",
              segments: [
                { text: "Look", meaning: "看", tail: " " },
                { text: "to", meaning: "向", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "left", meaning: "左邊", tail: "." },
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
              term_target: "right",
              pronunciation: ["/raɪt/"],
              specific_note: "",
              segments: [{ text: "right", meaning: "右邊", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Turn right.",
              translation: "右轉。",
              segments: [
                { text: "Turn", meaning: "轉", tail: " " },
                { text: "right", meaning: "右邊", tail: "." },
              ],
            },
            {
              sentence: "On the right side.",
              translation: "在右邊。",
              segments: [
                { text: "On", meaning: "在", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "right", meaning: "右邊", tail: " " },
                { text: "side", meaning: "邊", tail: "." },
              ],
            },
            {
              sentence: "Use your right hand.",
              translation: "用你的右手。",
              segments: [
                { text: "Use", meaning: "使用", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "right", meaning: "右", tail: " " },
                { text: "hand", meaning: "手", tail: "." },
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
              term_target: "beside / next to",
              pronunciation: ["/bɪˈsaɪd/"],
              specific_note: "",
              segments: [{ text: "beside", meaning: "在旁邊", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sit beside me.",
              translation: "坐我旁邊。",
              segments: [
                { text: "Sit", meaning: "坐", tail: " " },
                { text: "beside", meaning: "在旁邊", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Next to the bank.",
              translation: "在銀行旁邊。",
              segments: [
                { text: "Next", meaning: "下一個", tail: " " },
                { text: "to", meaning: "至", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "bank", meaning: "銀行", tail: "." },
              ],
            },
            {
              sentence: "Who is sitting next to you?",
              translation: "誰坐在你旁邊？",
              segments: [
                { text: "Who", meaning: "誰", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "sitting", meaning: "坐", tail: " " },
                { text: "next", meaning: "旁邊", tail: " " },
                { text: "to", meaning: "在", tail: " " },
                { text: "you", meaning: "你", tail: "?" },
              ],
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
              segments: [
                { text: "across", meaning: "對面", tail: " " },
                { text: "from", meaning: "從", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Across from bank.",
              translation: "銀行對面。",
              segments: [
                { text: "Across", meaning: "對面", tail: " " },
                { text: "from", meaning: "從", tail: " " },
                { text: "bank", meaning: "銀行", tail: "." },
              ],
            },
            {
              sentence: "He sits across from me.",
              translation: "他坐在我對面。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "sits", meaning: "坐", tail: " " },
                { text: "across", meaning: "對面", tail: " " },
                { text: "from", meaning: "從", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "The store is across the street.",
              translation: "商店在街對面。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "store", meaning: "商店", tail: " " },
                { text: "is", meaning: "在", tail: " " },
                { text: "across", meaning: "對面", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "street", meaning: "街道", tail: "." },
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
              term_target: "spring",
              pronunciation: ["/sprɪŋ/"],
              specific_note: "",
              segments: [{ text: "spring", meaning: "春天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Spring is here.",
              translation: "春天來了。",
              segments: [
                { text: "Spring", meaning: "春天", tail: " " },
                { text: "is", meaning: "是/在", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "I like spring.",
              translation: "我喜歡春天。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "spring", meaning: "春天", tail: "." },
              ],
            },
            {
              sentence: "Flowers bloom in spring.",
              translation: "花朵在春天盛開。",
              segments: [
                { text: "Flowers", meaning: "花", tail: " " },
                { text: "bloom", meaning: "盛開", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "spring", meaning: "春天", tail: "." },
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
              term_target: "summer",
              pronunciation: ["/ˈsʌmɚ/"],
              specific_note: "",
              segments: [{ text: "summer", meaning: "夏天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hot summer.",
              translation: "炎熱的夏天。",
              segments: [
                { text: "Hot", meaning: "熱的", tail: " " },
                { text: "summer", meaning: "夏天", tail: "." },
              ],
            },
            {
              sentence: "I go swimming in summer.",
              translation: "我夏天去游泳。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "swimming", meaning: "游泳", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "summer", meaning: "夏天", tail: "." },
              ],
            },
            {
              sentence: "Summer vacation.",
              translation: "暑假。",
              segments: [
                { text: "Summer", meaning: "夏天", tail: " " },
                { text: "vacation", meaning: "假期", tail: "." },
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
              term_target: "autumn / fall",
              pronunciation: ["/ˈɔtəm/"],
              specific_note: "",
              segments: [{ text: "autumn", meaning: "秋天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cool autumn.",
              translation: "涼爽的秋天。",
              segments: [
                { text: "Cool", meaning: "涼爽的", tail: " " },
                { text: "autumn", meaning: "秋天", tail: "." },
              ],
            },
            {
              sentence: "I like autumn leaves.",
              translation: "我喜歡秋天的落葉。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "autumn", meaning: "秋天", tail: " " },
                { text: "leaves", meaning: "葉子", tail: "." },
              ],
            },
            {
              sentence: "Fall is coming.",
              translation: "秋天快到了。",
              segments: [
                { text: "Fall", meaning: "秋天", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "coming", meaning: "來臨", tail: "." },
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
              term_target: "winter",
              pronunciation: ["/ˈwɪntɚ/"],
              specific_note: "",
              segments: [{ text: "winter", meaning: "冬天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cold winter.",
              translation: "寒冷的冬天。",
              segments: [
                { text: "Cold", meaning: "冷的", tail: " " },
                { text: "winter", meaning: "冬天", tail: "." },
              ],
            },
            {
              sentence: "Do you like winter?",
              translation: "你喜歡冬天嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "winter", meaning: "冬天", tail: "?" },
              ],
            },
            {
              sentence: "It snows in winter.",
              translation: "冬天下雪。",
              segments: [
                { text: "It", meaning: "它(天氣)", tail: " " },
                { text: "snows", meaning: "下雪", tail: " " },
                { text: "in", meaning: "在", tail: " " },
                { text: "winter", meaning: "冬天", tail: "." },
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
              term_target: "or",
              pronunciation: ["/ɔr/"],
              specific_note: "",
              segments: [{ text: "or", meaning: "或者", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tea or coffee?",
              translation: "茶還是咖啡？",
              segments: [
                { text: "Tea", meaning: "茶", tail: " " },
                { text: "or", meaning: "或者", tail: " " },
                { text: "coffee", meaning: "咖啡", tail: "?" },
              ],
            },
            {
              sentence: "Do you want this or that?",
              translation: "你想要這個還是那個？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "this", meaning: "這個", tail: " " },
                { text: "or", meaning: "或者", tail: " " },
                { text: "that", meaning: "那個", tail: "?" },
              ],
            },
            {
              sentence: "Is he American or British?",
              translation: "他是美國人還是英國人？",
              segments: [
                { text: "Is", meaning: "是", tail: " " },
                { text: "he", meaning: "他", tail: " " },
                { text: "American", meaning: "美國人", tail: " " },
                { text: "or", meaning: "或者", tail: " " },
                { text: "British", meaning: "英國人", tail: "?" },
              ],
            },
          ],
          usage_note: "二選一。",
          image_file: "or.png",
        },
        {
          id: "conj-02",
          term_zh: "但是",
          related_terms: [
            {
              term_target: "but",
              pronunciation: ["/bʌt/"],
              specific_note: "",
              segments: [{ text: "but", meaning: "但是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I like it, but it's expensive.",
              translation: "我喜歡它，但是它很貴。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "it", meaning: "它", tail: ", " },
                { text: "but", meaning: "但是", tail: " " },
                { text: "it's", meaning: "它是", tail: " " },
                { text: "expensive", meaning: "昂貴的", tail: "." },
              ],
            },
            {
              sentence: "I want to go, but I can't.",
              translation: "我想去，但是我不能去。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "go", meaning: "走", tail: ", " },
                { text: "but", meaning: "但是", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "can't", meaning: "不能", tail: "." },
              ],
            },
            {
              sentence: "He is small but strong.",
              translation: "他個子小但很強壯。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "small", meaning: "小的", tail: " " },
                { text: "but", meaning: "但是", tail: " " },
                { text: "strong", meaning: "強壯的", tail: "." },
              ],
            },
          ],
          usage_note: "語氣轉折。",
          image_file: "but.png",
        },
        {
          id: "conj-03",
          term_zh: "所以",
          related_terms: [
            {
              term_target: "so",
              pronunciation: ["/soʊ/"],
              specific_note: "",
              segments: [{ text: "so", meaning: "所以", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I was hungry, so I ate.",
              translation: "我餓了，所以我吃了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "was", meaning: "是", tail: " " },
                { text: "hungry", meaning: "餓的", tail: ", " },
                { text: "so", meaning: "所以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "ate", meaning: "吃(過去式)", tail: "." },
              ],
            },
            {
              sentence: "It is raining, so take an umbrella.",
              translation: "正在下雨，所以帶把傘吧。",
              segments: [
                { text: "It", meaning: "它(天氣)", tail: " " },
                { text: "is", meaning: "正在", tail: " " },
                { text: "raining", meaning: "下雨", tail: ", " },
                { text: "so", meaning: "所以", tail: " " },
                { text: "take", meaning: "拿", tail: " " },
                { text: "an", meaning: "一把", tail: " " },
                { text: "umbrella", meaning: "雨傘", tail: "." },
              ],
            },
            {
              sentence: "I was tired, so I went to bed.",
              translation: "我累了，所以我去睡覺。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "was", meaning: "是", tail: " " },
                { text: "tired", meaning: "累的", tail: ", " },
                { text: "so", meaning: "所以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "went", meaning: "去(過去式)", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "bed", meaning: "床", tail: "." },
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
              term_target: "and",
              pronunciation: ["/ænd/"],
              specific_note: "",
              segments: [{ text: "and", meaning: "和", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "You and me.",
              translation: "你和我。",
              segments: [
                { text: "You", meaning: "你", tail: " " },
                { text: "and", meaning: "和", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Black and white.",
              translation: "黑色和白色。",
              segments: [
                { text: "Black", meaning: "黑", tail: " " },
                { text: "and", meaning: "和", tail: " " },
                { text: "white", meaning: "白", tail: "." },
              ],
            },
            {
              sentence: "She is smart and beautiful.",
              translation: "她既聰明又漂亮。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "smart", meaning: "聰明的", tail: " " },
                { text: "and", meaning: "和", tail: " " },
                { text: "beautiful", meaning: "美麗的", tail: "." },
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
              term_target: "because",
              pronunciation: ["/bɪˈkɔz/"],
              specific_note: "",
              segments: [{ text: "because", meaning: "因為", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I eat because I am hungry.",
              translation: "我吃東西是因為我餓了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "eat", meaning: "吃", tail: " " },
                { text: "because", meaning: "因為", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "hungry", meaning: "餓的", tail: "." },
              ],
            },
            {
              sentence: "I cannot go because I am busy.",
              translation: "我不能去，因為我很忙。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "cannot", meaning: "不能", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "because", meaning: "因為", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "busy", meaning: "忙碌的", tail: "." },
              ],
            },
            {
              sentence: "She smiled because she was happy.",
              translation: "她笑了，因為她很開心。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "smiled", meaning: "笑(過去式)", tail: " " },
                { text: "because", meaning: "因為", tail: " " },
                { text: "she", meaning: "她", tail: " " },
                { text: "was", meaning: "是(過去式)", tail: " " },
                { text: "happy", meaning: "快樂的", tail: "." },
              ],
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
              segments: [{ text: "with", meaning: "和", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Come with me.",
              translation: "跟我來。",
              segments: [
                { text: "Come", meaning: "來", tail: " " },
                { text: "with", meaning: "和", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "I live with my family.",
              translation: "我跟家人住。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "live", meaning: "住", tail: " " },
                { text: "with", meaning: "和", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "family", meaning: "家人", tail: "." },
              ],
            },
            {
              sentence: "Coffee with milk.",
              translation: "加牛奶的咖啡。",
              segments: [
                { text: "Coffee", meaning: "咖啡", tail: " " },
                { text: "with", meaning: "加(和)", tail: " " },
                { text: "milk", meaning: "牛奶", tail: "." },
              ],
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
              segments: [{ text: "from", meaning: "從", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I am from Taiwan.",
              translation: "我來自台灣。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "from", meaning: "來自", tail: " " },
                { text: "Taiwan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "The store is open from 9 to 5.",
              translation: "商店從9點開到5點。",
              segments: [
                { text: "The", meaning: "這家", tail: " " },
                { text: "store", meaning: "商店", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "open", meaning: "營業的", tail: " " },
                { text: "from", meaning: "從", tail: " " },
                { text: "9", meaning: "九點", tail: " " },
                { text: "to", meaning: "到", tail: " " },
                { text: "5", meaning: "五點", tail: "." },
              ],
            },
            {
              sentence: "It is far from here.",
              translation: "離這裡很遠。",
              segments: [
                { text: "It", meaning: "它(距離)", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "far", meaning: "遠的", tail: " " },
                { text: "from", meaning: "離", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
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
              term_target: "for",
              pronunciation: ["/fɔr/"],
              specific_note: "目的",
              segments: [{ text: "for", meaning: "為了", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "This is for you.",
              translation: "這是給你的。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "for", meaning: "給", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Thank you for your help.",
              translation: "謝謝你的幫忙。",
              segments: [
                { text: "Thank", meaning: "謝謝", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "for", meaning: "因為", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "help", meaning: "幫忙", tail: "." },
              ],
            },
            {
              sentence: "I am looking for my keys.",
              translation: "我在找我的鑰匙。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "正在", tail: " " },
                { text: "looking", meaning: "尋找", tail: " " },
                { text: "for", meaning: "...", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "keys", meaning: "鑰匙", tail: "." },
              ],
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
              segments: [{ text: "of", meaning: "的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "A cup of tea.",
              translation: "一杯茶。",
              segments: [
                { text: "A", meaning: "一", tail: " " },
                { text: "cup", meaning: "杯", tail: " " },
                { text: "of", meaning: "的", tail: " " },
                { text: "tea", meaning: "茶", tail: "." },
              ],
            },
            {
              sentence: "One of my friends.",
              translation: "我的一個朋友。",
              segments: [
                { text: "One", meaning: "一個", tail: " " },
                { text: "of", meaning: "屬於", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "friends", meaning: "朋友", tail: "." },
              ],
            },
            {
              sentence: "The color of the car.",
              translation: "車子的顏色。",
              segments: [
                { text: "The", meaning: "這", tail: " " },
                { text: "color", meaning: "顏色", tail: " " },
                { text: "of", meaning: "屬於", tail: " " },
                { text: "the", meaning: "這輛", tail: " " },
                { text: "car", meaning: "車", tail: "." },
              ],
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
              segments: [{ text: "at", meaning: "在", tail: "" }],
            },
            {
              term_target: "in",
              pronunciation: ["/ɪn/"],
              specific_note: "空間內/大城市",
              segments: [{ text: "in", meaning: "在...裡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "I am at home.",
              translation: "我在家。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "home", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "She is in the room.",
              translation: "她在房間裡。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "in", meaning: "在...裡", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "room", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "See you at 5 o'clock.",
              translation: "5點見 (at也用於時間)。",
              segments: [
                { text: "See", meaning: "見", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "5", meaning: "五", tail: " " },
                { text: "o'clock", meaning: "點鐘", tail: "." },
              ],
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
              segments: [{ text: "to", meaning: "往/向", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Go to school.",
              translation: "去學校。",
              segments: [
                { text: "Go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "school", meaning: "學校", tail: "." },
              ],
            },
            {
              sentence: "Happy Birthday to you.",
              translation: "祝你生日快樂。",
              segments: [
                { text: "Happy", meaning: "快樂", tail: " " },
                { text: "Birthday", meaning: "生日", tail: " " },
                { text: "to", meaning: "給", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Give it to me.",
              translation: "把它給我。",
              segments: [
                { text: "Give", meaning: "給", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "to", meaning: "給", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
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
              segments: [{ text: "zero", meaning: "零", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Zero point.",
              translation: "零分。",
              segments: [
                { text: "Zero", meaning: "零", tail: " " },
                { text: "point", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "It is zero degrees today.",
              translation: "今天零度。",
              segments: [
                { text: "It", meaning: "它(天氣)", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "zero", meaning: "零", tail: " " },
                { text: "degrees", meaning: "度", tail: " " },
                { text: "today", meaning: "今天", tail: "." },
              ],
            },
            {
              sentence: "I have zero experience.",
              translation: "我毫無經驗。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "zero", meaning: "零", tail: " " },
                { text: "experience", meaning: "經驗", tail: "." },
              ],
            },
          ],
          usage_note: "零。",
          image_file: "zero.png",
        },
        {
          id: "num-1",
          term_zh: "1",
          related_terms: [
            {
              term_target: "one",
              pronunciation: ["/wʌn/"],
              specific_note: "",
              segments: [{ text: "one", meaning: "一", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "One apple.",
              translation: "一顆蘋果。",
              segments: [
                { text: "One", meaning: "一顆", tail: " " },
                { text: "apple", meaning: "蘋果", tail: "." },
              ],
            },
            {
              sentence: "One ticket, please.",
              translation: "請給我一張票。",
              segments: [
                { text: "One", meaning: "一張", tail: " " },
                { text: "ticket", meaning: "票", tail: ", " },
                { text: "please", meaning: "請", tail: "." },
              ],
            },
            {
              sentence: "I have one brother.",
              translation: "我有一個兄弟。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "one", meaning: "一個", tail: " " },
                { text: "brother", meaning: "兄弟", tail: "." },
              ],
            },
          ],
          usage_note: "一。",
          image_file: "one.png",
        },
        {
          id: "num-2",
          term_zh: "2",
          related_terms: [
            {
              term_target: "two",
              pronunciation: ["/tu/"],
              specific_note: "",
              segments: [{ text: "two", meaning: "二", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Two days.",
              translation: "兩天。",
              segments: [
                { text: "Two", meaning: "兩", tail: " " },
                { text: "days", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "Table for two, please.",
              translation: "請給我們兩人的位子。",
              segments: [
                { text: "Table", meaning: "桌子", tail: " " },
                { text: "for", meaning: "給", tail: " " },
                { text: "two", meaning: "兩人", tail: ", " },
                { text: "please", meaning: "請", tail: "." },
              ],
            },
            {
              sentence: "I have two cats.",
              translation: "我有兩隻貓。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "two", meaning: "兩隻", tail: " " },
                { text: "cats", meaning: "貓", tail: "." },
              ],
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
              segments: [{ text: "three", meaning: "三", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Three people.",
              translation: "三人。",
              segments: [
                { text: "Three", meaning: "三", tail: " " },
                { text: "people", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "See you in three minutes.",
              translation: "三分鐘後見。",
              segments: [
                { text: "See", meaning: "見", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "in", meaning: "在...之後", tail: " " },
                { text: "three", meaning: "三", tail: " " },
                { text: "minutes", meaning: "分鐘", tail: "." },
              ],
            },
            {
              sentence: "I bought three books.",
              translation: "我買了三本書。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "bought", meaning: "買了", tail: " " },
                { text: "three", meaning: "三本", tail: " " },
                { text: "books", meaning: "書", tail: "." },
              ],
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
              segments: [{ text: "four", meaning: "四", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Four seasons.",
              translation: "四季。",
              segments: [
                { text: "Four", meaning: "四", tail: " " },
                { text: "seasons", meaning: "季節", tail: "." },
              ],
            },
            {
              sentence: "Four o'clock.",
              translation: "四點鐘。",
              segments: [
                { text: "Four", meaning: "四", tail: " " },
                { text: "o'clock", meaning: "點鐘", tail: "." },
              ],
            },
            {
              sentence: "Table number four.",
              translation: "四號桌。",
              segments: [
                { text: "Table", meaning: "桌子", tail: " " },
                { text: "number", meaning: "號碼", tail: " " },
                { text: "four", meaning: "四", tail: "." },
              ],
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
              segments: [{ text: "five", meaning: "五", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Five stars.",
              translation: "五星。",
              segments: [
                { text: "Five", meaning: "五", tail: " " },
                { text: "stars", meaning: "星", tail: "." },
              ],
            },
            {
              sentence: "Give me five minutes.",
              translation: "給我五分鐘。",
              segments: [
                { text: "Give", meaning: "給", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "five", meaning: "五", tail: " " },
                { text: "minutes", meaning: "分鐘", tail: "." },
              ],
            },
            {
              sentence: "She is five years old.",
              translation: "她五歲。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "five", meaning: "五", tail: " " },
                { text: "years", meaning: "歲", tail: " " },
                { text: "old", meaning: "老(歲)", tail: "." },
              ],
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
              segments: [{ text: "six", meaning: "六", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Six o'clock.",
              translation: "六點。",
              segments: [
                { text: "Six", meaning: "六", tail: " " },
                { text: "o'clock", meaning: "點鐘", tail: "." },
              ],
            },
            {
              sentence: "There are six eggs.",
              translation: "有六顆蛋。",
              segments: [
                { text: "There", meaning: "那裡", tail: " " },
                { text: "are", meaning: "有", tail: " " },
                { text: "six", meaning: "六", tail: " " },
                { text: "eggs", meaning: "蛋", tail: "." },
              ],
            },
            {
              sentence: "I wake up at six.",
              translation: "我六點起床。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "wake", meaning: "醒", tail: " " },
                { text: "up", meaning: "起", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "six", meaning: "六點", tail: "." },
              ],
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
              segments: [{ text: "seven", meaning: "七", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Seven days.",
              translation: "七天。",
              segments: [
                { text: "Seven", meaning: "七", tail: " " },
                { text: "days", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "Seven-Eleven.",
              translation: "7-11便利商店。",
              segments: [
                { text: "Seven", meaning: "七", tail: "-" },
                { text: "Eleven", meaning: "十一", tail: "." },
              ],
            },
            {
              sentence: "Lucky seven.",
              translation: "幸運數字七。",
              segments: [
                { text: "Lucky", meaning: "幸運的", tail: " " },
                { text: "seven", meaning: "七", tail: "." },
              ],
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
              segments: [{ text: "eight", meaning: "八", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Eight years old.",
              translation: "八歲。",
              segments: [
                { text: "Eight", meaning: "八", tail: " " },
                { text: "years", meaning: "歲", tail: " " },
                { text: "old", meaning: "老(歲)", tail: "." },
              ],
            },
            {
              sentence: "See you at eight.",
              translation: "八點見。",
              segments: [
                { text: "See", meaning: "見", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "eight", meaning: "八點", tail: "." },
              ],
            },
            {
              sentence: "I slept for eight hours.",
              translation: "我睡了八個小時。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "slept", meaning: "睡(過去式)", tail: " " },
                { text: "for", meaning: "持續", tail: " " },
                { text: "eight", meaning: "八", tail: " " },
                { text: "hours", meaning: "小時", tail: "." },
              ],
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
              segments: [{ text: "nine", meaning: "九", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nine PM.",
              translation: "晚上九點。",
              segments: [
                { text: "Nine", meaning: "九", tail: " " },
                { text: "PM", meaning: "下午", tail: "." },
              ],
            },
            {
              sentence: "Nine dollars.",
              translation: "九塊錢。",
              segments: [
                { text: "Nine", meaning: "九", tail: " " },
                { text: "dollars", meaning: "元", tail: "." },
              ],
            },
            {
              sentence: "Number nine.",
              translation: "九號。",
              segments: [
                { text: "Number", meaning: "號碼", tail: " " },
                { text: "nine", meaning: "九", tail: "." },
              ],
            },
          ],
          usage_note: "九。",
          image_file: "nine.png",
        },
        {
          id: "num-10",
          term_zh: "10",
          related_terms: [
            {
              term_target: "ten",
              pronunciation: ["/tɛn/"],
              specific_note: "",
              segments: [{ text: "ten", meaning: "十", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ten dollars.",
              translation: "十元。",
              segments: [
                { text: "Ten", meaning: "十", tail: " " },
                { text: "dollars", meaning: "元", tail: "." },
              ],
            },
            {
              sentence: "Count to ten.",
              translation: "數到十。",
              segments: [
                { text: "Count", meaning: "數", tail: " " },
                { text: "to", meaning: "到", tail: " " },
                { text: "ten", meaning: "十", tail: "." },
              ],
            },
            {
              sentence: "Top ten.",
              translation: "前十名。",
              segments: [
                { text: "Top", meaning: "頂尖", tail: " " },
                { text: "ten", meaning: "十", tail: "." },
              ],
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
              segments: [{ text: "eleven", meaning: "十一", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Eleven o'clock.",
              translation: "11點。",
              segments: [
                { text: "Eleven", meaning: "十一", tail: " " },
                { text: "o'clock", meaning: "點鐘", tail: "." },
              ],
            },
            {
              sentence: "Chapter eleven.",
              translation: "第11章。",
              segments: [
                { text: "Chapter", meaning: "章節", tail: " " },
                { text: "eleven", meaning: "十一", tail: "." },
              ],
            },
            {
              sentence: "There are eleven players.",
              translation: "有11名球員。",
              segments: [
                { text: "There", meaning: "那裡", tail: " " },
                { text: "are", meaning: "有", tail: " " },
                { text: "eleven", meaning: "十一", tail: " " },
                { text: "players", meaning: "球員", tail: "." },
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
              term_target: "twelve",
              pronunciation: ["/twɛlv/"],
              specific_note: "",
              segments: [{ text: "twelve", meaning: "十二", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Twelve months.",
              translation: "12個月。",
              segments: [
                { text: "Twelve", meaning: "十二", tail: " " },
                { text: "months", meaning: "個月", tail: "." },
              ],
            },
            {
              sentence: "It is twelve noon.",
              translation: "現在是中午12點。",
              segments: [
                { text: "It", meaning: "它(時間)", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "twelve", meaning: "十二點", tail: " " },
                { text: "noon", meaning: "中午", tail: "." },
              ],
            },
            {
              sentence: "A box of twelve.",
              translation: "一盒12個。",
              segments: [
                { text: "A", meaning: "一", tail: " " },
                { text: "box", meaning: "盒", tail: " " },
                { text: "of", meaning: "裝有...", tail: " " },
                { text: "twelve", meaning: "十二個", tail: "." },
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
              term_target: "fifteen",
              pronunciation: ["/fɪfˈtin/"],
              specific_note: "",
              segments: [{ text: "fifteen", meaning: "十五", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Fifteen minutes.",
              translation: "15分鐘。",
              segments: [
                { text: "Fifteen", meaning: "十五", tail: " " },
                { text: "minutes", meaning: "分鐘", tail: "." },
              ],
            },
            {
              sentence: "She is fifteen.",
              translation: "她15歲。",
              segments: [
                { text: "She", meaning: "她", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "fifteen", meaning: "十五歲", tail: "." },
              ],
            },
            {
              sentence: "Room fifteen.",
              translation: "15號房。",
              segments: [
                { text: "Room", meaning: "房間", tail: " " },
                { text: "fifteen", meaning: "十五", tail: "." },
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
              term_target: "twenty",
              pronunciation: ["/ˈtwɛnti/"],
              specific_note: "",
              segments: [{ text: "twenty", meaning: "二十", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Twenty minutes.",
              translation: "20分鐘。",
              segments: [
                { text: "Twenty", meaning: "二十", tail: " " },
                { text: "minutes", meaning: "分鐘", tail: "." },
              ],
            },
            {
              sentence: "Twenty dollars.",
              translation: "20元。",
              segments: [
                { text: "Twenty", meaning: "二十", tail: " " },
                { text: "dollars", meaning: "元", tail: "." },
              ],
            },
            {
              sentence: "I am twenty years old.",
              translation: "我20歲。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "twenty", meaning: "二十", tail: " " },
                { text: "years", meaning: "歲", tail: " " },
                { text: "old", meaning: "老(歲)", tail: "." },
              ],
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
              segments: [{ text: "fifty", meaning: "五十", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Fifty percent.",
              translation: "50%。",
              segments: [
                { text: "Fifty", meaning: "五十", tail: " " },
                { text: "percent", meaning: "百分比", tail: "." },
              ],
            },
            {
              sentence: "Fifty people.",
              translation: "50個人。",
              segments: [
                { text: "Fifty", meaning: "五十", tail: " " },
                { text: "people", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "It costs fifty dollars.",
              translation: "這個要50元。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "costs", meaning: "花費", tail: " " },
                { text: "fifty", meaning: "五十", tail: " " },
                { text: "dollars", meaning: "元", tail: "." },
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
              term_target: "one hundred",
              pronunciation: ["/wʌn ˈhʌndrəd/"],
              specific_note: "",
              segments: [
                { text: "one", meaning: "一", tail: " " },
                { text: "hundred", meaning: "百", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "100 points.",
              translation: "一百分。",
              segments: [
                { text: "100", meaning: "一百", tail: " " },
                { text: "points", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "One hundred percent.",
              translation: "百分之百。",
              segments: [
                { text: "One", meaning: "一", tail: " " },
                { text: "hundred", meaning: "百", tail: " " },
                { text: "percent", meaning: "百分比", tail: "." },
              ],
            },
            {
              sentence: "More than one hundred.",
              translation: "超過一百個。",
              segments: [
                { text: "More", meaning: "更", tail: " " },
                { text: "than", meaning: "比", tail: " " },
                { text: "one", meaning: "一", tail: " " },
                { text: "hundred", meaning: "百", tail: "." },
              ],
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
              segments: [
                { text: "one", meaning: "一", tail: " " },
                { text: "thousand", meaning: "千", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "1000 years.",
              translation: "一千年。",
              segments: [
                { text: "1000", meaning: "一千", tail: " " },
                { text: "years", meaning: "年", tail: "." },
              ],
            },
            {
              sentence: "One thousand dollars.",
              translation: "一千元。",
              segments: [
                { text: "One", meaning: "一", tail: " " },
                { text: "thousand", meaning: "千", tail: " " },
                { text: "dollars", meaning: "元", tail: "." },
              ],
            },
            {
              sentence: "A thousand thanks.",
              translation: "非常感謝（一千個謝謝）。",
              segments: [
                { text: "A", meaning: "一", tail: " " },
                { text: "thousand", meaning: "千", tail: " " },
                { text: "thanks", meaning: "謝謝", tail: "." },
              ],
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
              segments: [
                { text: "ten", meaning: "十", tail: " " },
                { text: "thousand", meaning: "千(一萬)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ten thousand dollars.",
              translation: "一萬元。",
              segments: [
                { text: "Ten", meaning: "十", tail: " " },
                { text: "thousand", meaning: "千(萬)", tail: " " },
                { text: "dollars", meaning: "元", tail: "." },
              ],
            },
            {
              sentence: "Ten thousand steps.",
              translation: "一萬步。",
              segments: [
                { text: "Ten", meaning: "十", tail: " " },
                { text: "thousand", meaning: "千(萬)", tail: " " },
                { text: "steps", meaning: "步", tail: "." },
              ],
            },
            {
              sentence: "Over ten thousand fans.",
              translation: "超過一萬名粉絲。",
              segments: [
                { text: "Over", meaning: "超過", tail: " " },
                { text: "ten", meaning: "十", tail: " " },
                { text: "thousand", meaning: "千(萬)", tail: " " },
                { text: "fans", meaning: "粉絲", tail: "." },
              ],
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
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I am happy.",
              translation: "我很快樂。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "happy", meaning: "快樂的", tail: "." },
              ],
            },
            {
              sentence: "I am tired.",
              translation: "我很累。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "tired", meaning: "累的", tail: "." },
              ],
            },
            {
              sentence: "I am a student.",
              translation: "我是學生。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "student", meaning: "學生", tail: "." },
              ],
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
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "name", meaning: "名字", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "My name is John.",
              translation: "我的名字叫約翰。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "name", meaning: "名字", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "John", meaning: "約翰", tail: "." },
              ],
            },
            {
              sentence: "My name is Mary.",
              translation: "我的名字叫瑪麗。",
              segments: [
                { text: "My", meaning: "我的", tail: " " },
                { text: "name", meaning: "名字", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "Mary", meaning: "瑪麗", tail: "." },
              ],
            },
            {
              sentence: "Hello, my name is Tom.",
              translation: "哈囉，我的名字叫湯姆。",
              segments: [
                { text: "Hello", meaning: "哈囉", tail: ", " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "name", meaning: "名字", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "Tom", meaning: "湯姆", tail: "." },
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
              term_target: "I (verb)",
              pronunciation: ["/aɪ/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "(verb)", meaning: "(動詞)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I work here.",
              translation: "我在這裡工作。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "work", meaning: "工作", tail: " " },
                { text: "here", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "I play tennis.",
              translation: "我打網球。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "play", meaning: "打", tail: " " },
                { text: "tennis", meaning: "網球", tail: "." },
              ],
            },
            {
              sentence: "I love music.",
              translation: "我熱愛音樂。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "love", meaning: "愛", tail: " " },
                { text: "music", meaning: "音樂", tail: "." },
              ],
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
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "正在", tail: " " },
                { text: "～ing", meaning: "做...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I am eating.",
              translation: "我正在吃。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "正在", tail: " " },
                { text: "eating", meaning: "吃", tail: "." },
              ],
            },
            {
              sentence: "I am working now.",
              translation: "我現在正在工作。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "正在", tail: " " },
                { text: "working", meaning: "工作", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "I am waiting for you.",
              translation: "我正在等你。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "正在", tail: " " },
                { text: "waiting", meaning: "等待", tail: " " },
                { text: "for", meaning: "...", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
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
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "can", meaning: "能夠", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I can swim.",
              translation: "我會游泳。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "can", meaning: "會", tail: " " },
                { text: "swim", meaning: "游泳", tail: "." },
              ],
            },
            {
              sentence: "I can speak English.",
              translation: "我會說英文。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "can", meaning: "會", tail: " " },
                { text: "speak", meaning: "說", tail: " " },
                { text: "English", meaning: "英文", tail: "." },
              ],
            },
            {
              sentence: "I can help you.",
              translation: "我可以幫你。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "can", meaning: "可以", tail: " " },
                { text: "help", meaning: "幫助", tail: " " },
                { text: "you", meaning: "你", tail: "." },
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
              term_target: "I like ～ing",
              pronunciation: ["/aɪ laɪk ...ɪŋ/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "～ing", meaning: "做...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I like reading.",
              translation: "我喜歡閱讀。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "reading", meaning: "閱讀", tail: "." },
              ],
            },
            {
              sentence: "I like traveling.",
              translation: "我喜歡旅行。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "traveling", meaning: "旅行", tail: "." },
              ],
            },
            {
              sentence: "I like eating pizza.",
              translation: "我喜歡吃披薩。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "eating", meaning: "吃", tail: " " },
                { text: "pizza", meaning: "披薩", tail: "." },
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
              term_target: "I was ～",
              pronunciation: ["/aɪ wʌz/"],
              specific_note: "狀態",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "was", meaning: "是(過去式)", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I was a student.",
              translation: "我曾經是學生。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "was", meaning: "是(過去式)", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "student", meaning: "學生", tail: "." },
              ],
            },
            {
              sentence: "I was busy yesterday.",
              translation: "我昨天很忙。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "was", meaning: "是(過去式)", tail: " " },
                { text: "busy", meaning: "忙碌的", tail: " " },
                { text: "yesterday", meaning: "昨天", tail: "." },
              ],
            },
            {
              sentence: "I was at home.",
              translation: "我當時在家。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "was", meaning: "在(過去式)", tail: " " },
                { text: "at", meaning: "在", tail: " " },
                { text: "home", meaning: "家", tail: "." },
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
              term_target: "I (verb)ed",
              pronunciation: ["/aɪ ...d/"],
              specific_note: "動作",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "(verb)ed", meaning: "(動詞過去式)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I walked home.",
              translation: "我走路回家。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "walked", meaning: "走(過去式)", tail: " " },
                { text: "home", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "I watched a movie.",
              translation: "我看了一部電影。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "watched", meaning: "看(過去式)", tail: " " },
                { text: "a", meaning: "一部", tail: " " },
                { text: "movie", meaning: "電影", tail: "." },
              ],
            },
            {
              sentence: "I played basketball.",
              translation: "我打了籃球。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "played", meaning: "打(過去式)", tail: " " },
                { text: "basketball", meaning: "籃球", tail: "." },
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
              term_target: "I have (pp)",
              pronunciation: ["/aɪ hæv/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "(pp)", meaning: "(過去分詞)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I have finished.",
              translation: "我已經完成了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "finished", meaning: "完成", tail: "." },
              ],
            },
            {
              sentence: "I have lost my keys.",
              translation: "我弄丟了鑰匙。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "lost", meaning: "遺失", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "keys", meaning: "鑰匙", tail: "." },
              ],
            },
            {
              sentence: "I have seen that movie.",
              translation: "我看過那部電影了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "seen", meaning: "看過", tail: " " },
                { text: "that", meaning: "那部", tail: " " },
                { text: "movie", meaning: "電影", tail: "." },
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
              term_target: "I have been to ～",
              pronunciation: ["/aɪ hæv bɪn tu/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "been", meaning: "去過", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I have been to Japan.",
              translation: "我曾經去過日本。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "been", meaning: "去過", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "Japan", meaning: "日本", tail: "." },
              ],
            },
            {
              sentence: "I have been to Taipei 101.",
              translation: "我去過台北101。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "been", meaning: "去過", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "Taipei 101", meaning: "台北101", tail: "." },
              ],
            },
            {
              sentence: "I have been there twice.",
              translation: "我去過那裡兩次。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "been", meaning: "去過", tail: " " },
                { text: "there", meaning: "那裡", tail: " " },
                { text: "twice", meaning: "兩次", tail: "." },
              ],
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
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "will", meaning: "將會", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I will go.",
              translation: "我將要去。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "will", meaning: "將會", tail: " " },
                { text: "go", meaning: "去", tail: "." },
              ],
            },
            {
              sentence: "I will call you.",
              translation: "我會打電話給你。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "will", meaning: "將會", tail: " " },
                { text: "call", meaning: "打電話", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "I will do my best.",
              translation: "我會盡力。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "will", meaning: "將會", tail: " " },
                { text: "do", meaning: "做", tail: " " },
                { text: "my", meaning: "我的", tail: " " },
                { text: "best", meaning: "最好", tail: "." },
              ],
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
              segments: [
                { text: "Are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "～", meaning: "...", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Are you ready?",
              translation: "準備好了嗎？",
              segments: [
                { text: "Are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "ready", meaning: "準備好的", tail: "?" },
              ],
            },
            {
              sentence: "Are you hungry?",
              translation: "你餓了嗎？",
              segments: [
                { text: "Are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "hungry", meaning: "餓的", tail: "?" },
              ],
            },
            {
              sentence: "Are you a student?",
              translation: "你是學生嗎？",
              segments: [
                { text: "Are", meaning: "是", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "student", meaning: "學生", tail: "?" },
              ],
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
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "～", meaning: "...", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Do you eat spicy food?",
              translation: "你吃辣嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "eat", meaning: "吃", tail: " " },
                { text: "spicy", meaning: "辣的", tail: " " },
                { text: "food", meaning: "食物", tail: "?" },
              ],
            },
            {
              sentence: "Do you like music?",
              translation: "你喜歡音樂嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "music", meaning: "音樂", tail: "?" },
              ],
            },
            {
              sentence: "Do you understand?",
              translation: "你懂嗎？",
              segments: [
                { text: "Do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "understand", meaning: "了解", tail: "?" },
              ],
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
              segments: [
                { text: "Have", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "ever", meaning: "曾經", tail: " " },
                { text: "～", meaning: "...", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Have you ever seen snow?",
              translation: "你曾經看過雪嗎？",
              segments: [
                { text: "Have", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "ever", meaning: "曾經", tail: " " },
                { text: "seen", meaning: "看過", tail: " " },
                { text: "snow", meaning: "雪", tail: "?" },
              ],
            },
            {
              sentence: "Have you ever been to Taiwan?",
              translation: "你曾經去過台灣嗎？",
              segments: [
                { text: "Have", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "ever", meaning: "曾經", tail: " " },
                { text: "been", meaning: "去過", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "Taiwan", meaning: "台灣", tail: "?" },
              ],
            },
            {
              sentence: "Have you ever eaten stinky tofu?",
              translation: "你曾經吃過臭豆腐嗎？",
              segments: [
                { text: "Have", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "ever", meaning: "曾經", tail: " " },
                { text: "eaten", meaning: "吃過", tail: " " },
                { text: "stinky", meaning: "臭", tail: " " },
                { text: "tofu", meaning: "豆腐", tail: "?" },
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
              term_target: "When do you ～ ?",
              pronunciation: ["/hwɛn du ju/"],
              specific_note: "",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "～", meaning: "...", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "When do you sleep?",
              translation: "你何時睡覺？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "sleep", meaning: "睡覺", tail: "?" },
              ],
            },
            {
              sentence: "When do you start work?",
              translation: "你何時開始工作？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "start", meaning: "開始", tail: " " },
                { text: "work", meaning: "工作", tail: "?" },
              ],
            },
            {
              sentence: "When do you exercise?",
              translation: "你何時運動？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "exercise", meaning: "運動", tail: "?" },
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
              term_target: "When do you go to ～ ?",
              pronunciation: ["/hwɛn du ju goʊ tu/"],
              specific_note: "",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "～", meaning: "...", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "When do you go to school?",
              translation: "你何時去學校？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "school", meaning: "學校", tail: "?" },
              ],
            },
            {
              sentence: "When do you go to work?",
              translation: "你何時去工作？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "work", meaning: "工作", tail: "?" },
              ],
            },
            {
              sentence: "When do you go home?",
              translation: "你何時回家？",
              segments: [
                { text: "When", meaning: "何時", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "home", meaning: "家", tail: "?" },
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
              term_target: "Where do you ～ ?",
              pronunciation: ["/wɛr du ju/"],
              specific_note: "",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "～", meaning: "...", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Where do you live?",
              translation: "你住哪裡？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "live", meaning: "居住", tail: "?" },
              ],
            },
            {
              sentence: "Where do you work?",
              translation: "你在哪裡工作？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "work", meaning: "工作", tail: "?" },
              ],
            },
            {
              sentence: "Where do you buy food?",
              translation: "你在哪裡買食物？",
              segments: [
                { text: "Where", meaning: "哪裡", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "buy", meaning: "買", tail: " " },
                { text: "food", meaning: "食物", tail: "?" },
              ],
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
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "～", meaning: "...", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "How do you cook?",
              translation: "你怎麼煮？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "cook", meaning: "煮", tail: "?" },
              ],
            },
            {
              sentence: "How do you spell your name?",
              translation: "你的名字怎麼拼？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "spell", meaning: "拼寫", tail: " " },
                { text: "your", meaning: "你的", tail: " " },
                { text: "name", meaning: "名字", tail: "?" },
              ],
            },
            {
              sentence: "How do you feel?",
              translation: "你覺得如何？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "feel", meaning: "感覺", tail: "?" },
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
              term_target: "How do you go to ～ ?",
              pronunciation: ["/haʊ du ju goʊ tu/"],
              specific_note: "",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "～", meaning: "...", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "How do you go to school?",
              translation: "你怎麼去學校？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "school", meaning: "學校", tail: "?" },
              ],
            },
            {
              sentence: "How do you go to the airport?",
              translation: "你怎麼去機場？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "airport", meaning: "機場", tail: "?" },
              ],
            },
            {
              sentence: "How do you go to work?",
              translation: "你怎麼去工作？",
              segments: [
                { text: "How", meaning: "如何", tail: " " },
                { text: "do", meaning: "(助動詞)", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "to", meaning: "往", tail: " " },
                { text: "work", meaning: "工作", tail: "?" },
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
              term_target: "I am not ～",
              pronunciation: ["/aɪ æm nɑt/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "not", meaning: "不", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I am not tired.",
              translation: "我不累。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "not", meaning: "不", tail: " " },
                { text: "tired", meaning: "累的", tail: "." },
              ],
            },
            {
              sentence: "I am not ready.",
              translation: "我還沒準備好。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "not", meaning: "不", tail: " " },
                { text: "ready", meaning: "準備好的", tail: "." },
              ],
            },
            {
              sentence: "I am not a doctor.",
              translation: "我不是醫生。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "not", meaning: "不", tail: " " },
                { text: "a", meaning: "一位", tail: " " },
                { text: "doctor", meaning: "醫生", tail: "." },
              ],
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
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I don't smoke.",
              translation: "我不抽菸。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "smoke", meaning: "抽菸", tail: "." },
              ],
            },
            {
              sentence: "I don't know.",
              translation: "我不知道。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "know", meaning: "知道", tail: "." },
              ],
            },
            {
              sentence: "I don't understand.",
              translation: "我不懂。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "understand", meaning: "了解", tail: "." },
              ],
            },
          ],
          usage_note: "否定動作。",
          image_file: "i_dont.png",
        },
        {
          id: "g-22",
          term_zh: "我不能～",
          related_terms: [
            {
              term_target: "I can't ～",
              pronunciation: ["/aɪ kænt/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "can't", meaning: "不能", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I can't swim.",
              translation: "我不會游泳。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "can't", meaning: "不能", tail: " " },
                { text: "swim", meaning: "游泳", tail: "." },
              ],
            },
            {
              sentence: "I can't hear you.",
              translation: "我聽不到你說話。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "can't", meaning: "不能", tail: " " },
                { text: "hear", meaning: "聽見", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "I can't go today.",
              translation: "我今天不能去。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "can't", meaning: "不能", tail: " " },
                { text: "go", meaning: "去", tail: " " },
                { text: "today", meaning: "今天", tail: "." },
              ],
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
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "never", meaning: "從未", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I have never eaten this.",
              translation: "我沒吃過這個。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "never", meaning: "從未", tail: " " },
                { text: "eaten", meaning: "吃過", tail: " " },
                { text: "this", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "I have never been there.",
              translation: "我從沒去過那裡。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "never", meaning: "從未", tail: " " },
                { text: "been", meaning: "去過", tail: " " },
                { text: "there", meaning: "那裡", tail: "." },
              ],
            },
            {
              sentence: "I have never seen that.",
              translation: "我從沒看過那個。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "已經", tail: " " },
                { text: "never", meaning: "從未", tail: " " },
                { text: "seen", meaning: "看過", tail: " " },
                { text: "that", meaning: "那個", tail: "." },
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
              term_target: "I don't have to ～",
              pronunciation: ["/aɪ doʊnt hæv tu/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "have", meaning: "有/必須", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I don't have to go.",
              translation: "我不必去。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "have", meaning: "必須", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "go", meaning: "走", tail: "." },
              ],
            },
            {
              sentence: "I don't have to work today.",
              translation: "我今天不必工作。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "have", meaning: "必須", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "work", meaning: "工作", tail: " " },
                { text: "today", meaning: "今天", tail: "." },
              ],
            },
            {
              sentence: "I don't have to pay.",
              translation: "我不必付錢。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "have", meaning: "必須", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "pay", meaning: "付費", tail: "." },
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
              term_target: "If ..., ...",
              pronunciation: ["/ɪf/"],
              specific_note: "",
              segments: [{ text: "If", meaning: "如果", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "If you like, take it.",
              translation: "如果你喜歡，拿去吧。",
              segments: [
                { text: "If", meaning: "如果", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "like", meaning: "喜歡", tail: ", " },
                { text: "take", meaning: "拿", tail: " " },
                { text: "it", meaning: "它", tail: "." },
              ],
            },
            {
              sentence: "If it rains, stay home.",
              translation: "如果下雨，就待在家。",
              segments: [
                { text: "If", meaning: "如果", tail: " " },
                { text: "it", meaning: "它(天氣)", tail: " " },
                { text: "rains", meaning: "下雨", tail: ", " },
                { text: "stay", meaning: "待在", tail: " " },
                { text: "home", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "If you are tired, sleep.",
              translation: "如果你累了，就睡覺。",
              segments: [
                { text: "If", meaning: "如果", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "tired", meaning: "累的", tail: ", " },
                { text: "sleep", meaning: "睡覺", tail: "." },
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
              term_target: "When ..., ...",
              pronunciation: ["/hwɛn/"],
              specific_note: "",
              segments: [{ text: "When", meaning: "當...時", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "When I eat, I am happy.",
              translation: "當我吃東西時，我很開心。",
              segments: [
                { text: "When", meaning: "當...時", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "eat", meaning: "吃", tail: ", " },
                { text: "I", meaning: "我", tail: " " },
                { text: "am", meaning: "是", tail: " " },
                { text: "happy", meaning: "快樂的", tail: "." },
              ],
            },
            {
              sentence: "When you arrive, call me.",
              translation: "當你到達時，打給我。",
              segments: [
                { text: "When", meaning: "當...時", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "arrive", meaning: "抵達", tail: ", " },
                { text: "call", meaning: "打電話給", tail: " " },
                { text: "me", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "When I have time, I read.",
              translation: "當我有空時，我會看書。",
              segments: [
                { text: "When", meaning: "當...時", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有", tail: " " },
                { text: "time", meaning: "時間", tail: ", " },
                { text: "I", meaning: "我", tail: " " },
                { text: "read", meaning: "閱讀", tail: "." },
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
              term_target: "Can you ～ ?",
              pronunciation: ["/kæn ju/"],
              specific_note: "",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "～", meaning: "...", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Can you help me?",
              translation: "請你幫我好嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "help", meaning: "幫助", tail: " " },
                { text: "me", meaning: "我", tail: "?" },
              ],
            },
            {
              sentence: "Can you open the door?",
              translation: "你可以開門嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "open", meaning: "打開", tail: " " },
                { text: "the", meaning: "這", tail: " " },
                { text: "door", meaning: "門", tail: "?" },
              ],
            },
            {
              sentence: "Can you wait a moment?",
              translation: "你可以等一下嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "wait", meaning: "等待", tail: " " },
                { text: "a", meaning: "一下", tail: " " },
                { text: "moment", meaning: "片刻", tail: "?" },
              ],
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
              segments: [{ text: "Let's", meaning: "讓我們...", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Let's go.",
              translation: "我們走吧。",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "go", meaning: "走", tail: "." },
              ],
            },
            {
              sentence: "Let's eat.",
              translation: "我們吃吧。",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "eat", meaning: "吃", tail: "." },
              ],
            },
            {
              sentence: "Let's take a break.",
              translation: "我們休息一下吧。",
              segments: [
                { text: "Let's", meaning: "讓我們", tail: " " },
                { text: "take", meaning: "進行", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "break", meaning: "休息", tail: "." },
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
              term_target: "I think ～",
              pronunciation: ["/aɪ θɪŋk/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "think", meaning: "認為", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I think it is good.",
              translation: "我認為這很好。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "think", meaning: "認為", tail: " " },
                { text: "it", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "good", meaning: "好的", tail: "." },
              ],
            },
            {
              sentence: "I think you are right.",
              translation: "我認為你是對的。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "think", meaning: "認為", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "are", meaning: "是", tail: " " },
                { text: "right", meaning: "對的", tail: "." },
              ],
            },
            {
              sentence: "I think so too.",
              translation: "我也這麼認為。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "think", meaning: "認為", tail: " " },
                { text: "so", meaning: "如此", tail: " " },
                { text: "too", meaning: "也", tail: "." },
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
              term_target: "I want to ～",
              pronunciation: ["/aɪ wɑnt tu/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I want to go.",
              translation: "我想走。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "go", meaning: "走", tail: "." },
              ],
            },
            {
              sentence: "I want to buy this.",
              translation: "我想買這個。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "buy", meaning: "買", tail: " " },
                { text: "this", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "I want to see a movie.",
              translation: "我想看電影。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "want", meaning: "想要", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "see", meaning: "看", tail: " " },
                { text: "a", meaning: "一部", tail: " " },
                { text: "movie", meaning: "電影", tail: "." },
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
              term_target: "I have to ～",
              pronunciation: ["/aɪ hæv tu/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "必須", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "～", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I have to work.",
              translation: "我必須工作。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "必須", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "work", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "I have to go now.",
              translation: "我現在得走了。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "必須", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "go", meaning: "走", tail: " " },
                { text: "now", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "I have to study.",
              translation: "我必須讀書。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "必須", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "study", meaning: "讀書", tail: "." },
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
              term_target: "It is ... to ～",
              pronunciation: ["/ɪt ɪz ... tu/"],
              specific_note: "",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "...", meaning: "...", tail: " " },
                { text: "to", meaning: "去", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "It is good to eat.",
              translation: "吃東西是很好的。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "good", meaning: "好的", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "eat", meaning: "吃", tail: "." },
              ],
            },
            {
              sentence: "It is nice to meet you.",
              translation: "很高興認識你。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "nice", meaning: "好的", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "meet", meaning: "遇見", tail: " " },
                { text: "you", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "It is important to learn.",
              translation: "學習是很重要的。",
              segments: [
                { text: "It", meaning: "它", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "important", meaning: "重要的", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "learn", meaning: "學習", tail: "." },
              ],
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
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "help", meaning: "幫助", tail: " " },
                { text: "me", meaning: "我", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Can you help me clean?",
              translation: "你可以幫我打掃嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "help", meaning: "幫助", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "clean", meaning: "打掃", tail: "?" },
              ],
            },
            {
              sentence: "Can you help me with this?",
              translation: "你可以幫我弄這個嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "help", meaning: "幫助", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "with", meaning: "處理", tail: " " },
                { text: "this", meaning: "這個", tail: "?" },
              ],
            },
            {
              sentence: "Can you help me find it?",
              translation: "你可以幫我找它嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "you", meaning: "你", tail: " " },
                { text: "help", meaning: "幫助", tail: " " },
                { text: "me", meaning: "我", tail: " " },
                { text: "find", meaning: "找到", tail: " " },
                { text: "it", meaning: "它", tail: "?" },
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
              term_target: "Can I ... ?",
              pronunciation: ["/kæn aɪ/"],
              specific_note: "",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "I", meaning: "我", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Can I go?",
              translation: "我可以走嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "go", meaning: "走", tail: "?" },
              ],
            },
            {
              sentence: "Can I have some water?",
              translation: "我可以喝點水嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "have", meaning: "有/喝", tail: " " },
                { text: "some", meaning: "一些", tail: " " },
                { text: "water", meaning: "水", tail: "?" },
              ],
            },
            {
              sentence: "Can I sit here?",
              translation: "我可以坐這裡嗎？",
              segments: [
                { text: "Can", meaning: "可以", tail: " " },
                { text: "I", meaning: "我", tail: " " },
                { text: "sit", meaning: "坐", tail: " " },
                { text: "here", meaning: "這裡", tail: "?" },
              ],
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
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "like", meaning: "喜歡", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I don't like it.",
              translation: "我不喜歡它。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "it", meaning: "它", tail: "." },
              ],
            },
            {
              sentence: "I don't like natto.",
              translation: "我不喜歡納豆。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "natto", meaning: "納豆", tail: "." },
              ],
            },
            {
              sentence: "I don't like waiting.",
              translation: "我不喜歡等待。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "don't", meaning: "不", tail: " " },
                { text: "like", meaning: "喜歡", tail: " " },
                { text: "waiting", meaning: "等待", tail: "." },
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
              term_target: "I prefer ...",
              pronunciation: ["/aɪ prɪˈfɝ/"],
              specific_note: "",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "prefer", meaning: "偏好", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "I prefer tea.",
              translation: "我比較喜歡茶。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "prefer", meaning: "偏好", tail: " " },
                { text: "tea", meaning: "茶", tail: "." },
              ],
            },
            {
              sentence: "I prefer cats.",
              translation: "我比較喜歡貓。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "prefer", meaning: "偏好", tail: " " },
                { text: "cats", meaning: "貓", tail: "." },
              ],
            },
            {
              sentence: "I prefer to stay home.",
              translation: "我比較喜歡待在家。",
              segments: [
                { text: "I", meaning: "我", tail: " " },
                { text: "prefer", meaning: "偏好", tail: " " },
                { text: "to", meaning: "去", tail: " " },
                { text: "stay", meaning: "待在", tail: " " },
                { text: "home", meaning: "家", tail: "." },
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
              term_target: "A is more ... than B",
              pronunciation: ["/... mɔr ... ðæn .../"],
              specific_note: "",
              segments: [
                { text: "A", meaning: "A", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "more", meaning: "更", tail: " " },
                { text: "...", meaning: "...", tail: " " },
                { text: "than", meaning: "比", tail: " " },
                { text: "B", meaning: "B", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "This is more expensive than that.",
              translation: "這比那個貴。",
              segments: [
                { text: "This", meaning: "這", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "more", meaning: "更", tail: " " },
                { text: "expensive", meaning: "貴的", tail: " " },
                { text: "than", meaning: "比", tail: " " },
                { text: "that", meaning: "那", tail: "." },
              ],
            },
            {
              sentence: "He is more famous than her.",
              translation: "他比她更有名。",
              segments: [
                { text: "He", meaning: "他", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "more", meaning: "更", tail: " " },
                { text: "famous", meaning: "有名的", tail: " " },
                { text: "than", meaning: "比", tail: " " },
                { text: "her", meaning: "她", tail: "." },
              ],
            },
            {
              sentence: "This problem is more difficult.",
              translation: "這個問題更困難。",
              segments: [
                { text: "This", meaning: "這個", tail: " " },
                { text: "problem", meaning: "問題", tail: " " },
                { text: "is", meaning: "是", tail: " " },
                { text: "more", meaning: "更", tail: " " },
                { text: "difficult", meaning: "困難的", tail: "." },
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
              term_target: "There is / There are",
              pronunciation: ["/ðɛr ɪz / ðɛr ɑr/"],
              specific_note: "",
              segments: [
                { text: "There", meaning: "那裡", tail: " " },
                { text: "is", meaning: "有(單數)", tail: " / " },
                { text: "There", meaning: "那裡", tail: " " },
                { text: "are", meaning: "有(複數)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "There is a dog.",
              translation: "那裡有一隻狗。",
              segments: [
                { text: "There", meaning: "那裡", tail: " " },
                { text: "is", meaning: "有", tail: " " },
                { text: "a", meaning: "一隻", tail: " " },
                { text: "dog", meaning: "狗", tail: "." },
              ],
            },
            {
              sentence: "There are many people.",
              translation: "那裡有很多人。",
              segments: [
                { text: "There", meaning: "那裡", tail: " " },
                { text: "are", meaning: "有", tail: " " },
                { text: "many", meaning: "許多", tail: " " },
                { text: "people", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "There is a problem.",
              translation: "有一個問題。",
              segments: [
                { text: "There", meaning: "那裡", tail: " " },
                { text: "is", meaning: "有", tail: " " },
                { text: "a", meaning: "一個", tail: " " },
                { text: "problem", meaning: "問題", tail: "." },
              ],
            },
          ],
          usage_note: "存在。",
          image_file: "there_is.png",
        },
      ],
    },
  ],
};
