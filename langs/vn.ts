import { AppData } from "../types";

export const vietnameseData: AppData = {
  meta: {
    source_language: "zh-TW",
    target_language: "vi-VN",
    version: "3.2",
    description:
      "台灣人快速語言學習 - 越南文完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)",
  },
  categories: [
    {
      id: "greetings-vi",
      name: "越南語常用句",
      items: [
        {
          id: "greet-001",
          term_zh: "是的 / 對",
          related_terms: [
            {
              term_target: "Dạ",
              pronunciation: ["/za/"],
              specific_note: "禮貌應答(南部/通用)",
              segments: [{ text: "Dạ", meaning: "是的 (敬語)", tail: "" }],
            },
            {
              term_target: "Vâng",
              pronunciation: ["/vəŋ/"],
              specific_note: "禮貌應答(北部)",
              segments: [{ text: "Vâng", meaning: "是的", tail: "" }],
            },
            {
              term_target: "Đúng",
              pronunciation: ["/duŋ/"],
              specific_note: "正確/沒錯",
              segments: [{ text: "Đúng", meaning: "對/正確", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dạ, đúng rồi.",
              translation: "是的，沒錯 (超常用)。",
              segments: [
                { text: "Dạ", meaning: "是的(敬語)", tail: ", " },
                { text: "đúng", meaning: "對", tail: " " },
                { text: "rồi", meaning: "了(語氣詞)", tail: "." },
              ],
            },
            {
              sentence: "Có, tôi đi.",
              translation: "有，我會去。",
              segments: [
                { text: "Có", meaning: "有/是的", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: "." },
              ],
            },
            {
              sentence: "Vâng, mời vào.",
              translation: "是的，請進。",
              segments: [
                { text: "Vâng", meaning: "是的", tail: ", " },
                { text: "mời", meaning: "邀請/請", tail: " " },
                { text: "vào", meaning: "進來", tail: "." },
              ],
            },
          ],
          usage_note: "長輩叫你時一定要先回「Dạ」，這是越南最基本的禮貌。",
          image_file: "yes.png",
        },
        {
          id: "greet-002",
          term_zh: "不是 / 沒有",
          related_terms: [
            {
              term_target: "Không",
              pronunciation: ["/xoŋ/"],
              specific_note: "否定/不要",
              segments: [{ text: "Không", meaning: "不/沒有/空", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Không, cảm ơn.",
              translation: "不用了，謝謝 (拒絕攤販)。",
              segments: [
                { text: "Không", meaning: "不", tail: ", " },
                { text: "cảm ơn", meaning: "謝謝", tail: "." },
              ],
            },
            {
              sentence: "Không phải đâu.",
              translation: "不是那樣的 / 誤會了。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "phải", meaning: "是/對", tail: " " },
                { text: "đâu", meaning: "(強調語氣)", tail: "." },
              ],
            },
            {
              sentence: "Không sao.",
              translation: "沒關係 / 沒事。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "sao", meaning: "事情/怎樣", tail: "." },
              ],
            },
          ],
          usage_note: "搖手並微笑說「Không」是拒絕街頭推銷最好的方式。",
          image_file: "no.png",
        },
        {
          id: "greet-003",
          term_zh: "你好",
          related_terms: [
            {
              term_target: "Xin chào",
              pronunciation: ["/sin tʃaʊ/"],
              specific_note: "通用/正式",
              segments: [
                { text: "Xin", meaning: "請", tail: " " },
                { text: "chào", meaning: "問候", tail: "" },
              ],
            },
            {
              term_target: "Chào + 稱謂",
              pronunciation: ["/tʃaʊ/"],
              specific_note: "最道地用法",
              segments: [{ text: "Chào", meaning: "嗨/你好", tail: "..." }],
            },
          ],
          examples: [
            {
              sentence: "Chào anh!",
              translation: "大哥你好！(對年輕男性)。",
              segments: [
                { text: "Chào", meaning: "你好", tail: " " },
                { text: "anh", meaning: "哥哥", tail: "!" },
              ],
            },
            {
              sentence: "Chào chị!",
              translation: "大姐你好！(對年輕女性)。",
              segments: [
                { text: "Chào", meaning: "你好", tail: " " },
                { text: "chị", meaning: "姐姐", tail: "!" },
              ],
            },
            {
              sentence: "Xin chào, tôi là người Đài Loan.",
              translation: "你好，我是台灣人。",
              segments: [
                { text: "Xin chào", meaning: "你好", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
          ],
          usage_note:
            "看到男生叫 Anh，女生叫 Chị，長輩叫 Cô(女)/Chú(男)，比只說 Xin chào 更親切。",
          image_file: "hello.png",
        },
        {
          id: "greet-004",
          term_zh: "謝謝你",
          related_terms: [
            {
              term_target: "Cảm ơn",
              pronunciation: ["/kam ən/"],
              specific_note: "通用",
              segments: [{ text: "Cảm ơn", meaning: "感謝", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cảm ơn nhiều.",
              translation: "多謝 / 非常感謝。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "nhiều", meaning: "多", tail: "." },
              ],
            },
            {
              sentence: "Dạ, em cảm ơn.",
              translation: "好的，謝謝您 (晚輩對長輩)。",
              segments: [
                { text: "Dạ", meaning: "是的(敬語)", tail: ", " },
                { text: "em", meaning: "我(晚輩)", tail: " " },
                { text: "cảm ơn", meaning: "謝謝", tail: "." },
              ],
            },
            {
              sentence: "Cảm ơn anh nhé.",
              translation: "謝啦大哥！(語氣親切)。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "anh", meaning: "大哥", tail: " " },
                { text: "nhé", meaning: "喔(語氣詞)", tail: "." },
              ],
            },
          ],
          usage_note: "口語常會把聲調上揚說成「Cám ơn」。",
          image_file: "thank_you.png",
        },
        {
          id: "greet-005",
          term_zh: "對不起",
          related_terms: [
            {
              term_target: "Xin lỗi",
              pronunciation: ["/sin loj/"],
              specific_note: "道歉/借過",
              segments: [
                { text: "Xin", meaning: "請", tail: " " },
                { text: "lỗi", meaning: "過錯", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, tôi đến muộn.",
              translation: "抱歉，我遲到了。",
              segments: [
                { text: "Xin lỗi", meaning: "對不起", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đến", meaning: "來", tail: " " },
                { text: "muộn", meaning: "晚", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi, cho tôi qua.",
              translation: "不好意思，借過一下。",
              segments: [
                { text: "Xin lỗi", meaning: "不好意思", tail: ", " },
                { text: "cho", meaning: "讓/給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "qua", meaning: "通過", tail: "." },
              ],
            },
            {
              sentence: "Ồ, xin lỗi nhé!",
              translation: "噢，不好意思喔！(不小心碰到人)。",
              segments: [
                { text: "Ồ", meaning: "噢", tail: ", " },
                { text: "xin lỗi", meaning: "抱歉", tail: " " },
                { text: "nhé", meaning: "喔", tail: "!" },
              ],
            },
          ],
          usage_note:
            "在人擠人的地方要過路，說「Xin lỗi」(欣-囉-以) 大家就會讓開。",
          image_file: "sorry.png",
        },
        {
          id: "greet-006",
          term_zh: "不好意思 (呼喚人)",
          related_terms: [
            {
              term_target: "Anh ơi / Chị ơi",
              pronunciation: ["/aɲ əj/", "/ci əj/"],
              specific_note: "叫店員/服務生",
              segments: [
                { text: "Anh/Chị", meaning: "大哥/大姐", tail: " " },
                { text: "ơi", meaning: "喂(呼喚)", tail: "" },
              ],
            },
            {
              term_target: "Cho tôi hỏi",
              pronunciation: ["/cɔ toj hɔj/"],
              specific_note: "請問...",
              segments: [
                { text: "Cho", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "hỏi", meaning: "問", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em ơi! Tính tiền!",
              translation: "服務生(弟弟/妹妹)！結帳！",
              segments: [
                { text: "Em", meaning: "弟弟/妹妹", tail: " " },
                { text: "ơi", meaning: "喂", tail: "! " },
                { text: "Tính", meaning: "算", tail: " " },
                { text: "tiền", meaning: "錢", tail: "!" },
              ],
            },
            {
              sentence: "Chị ơi, cho xem menu.",
              translation: "大姐，給我看菜單。",
              segments: [
                { text: "Chị", meaning: "姐姐", tail: " " },
                { text: "ơi", meaning: "喂", tail: ", " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "menu", meaning: "菜單", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi hỏi, toilet ở đâu?",
              translation: "請問一下，廁所在哪？",
              segments: [
                { text: "Cho", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "hỏi", meaning: "問", tail: ", " },
                { text: "toilet", meaning: "廁所", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
          ],
          usage_note:
            "在越南餐廳不要舉手乾等，直接大聲喊「Em ơi」(對年輕店員) 才會有人理你。",
          image_file: "excuse_me.png",
        },
        {
          id: "greet-007",
          term_zh: "我不懂",
          related_terms: [
            {
              term_target: "Tôi không hiểu",
              pronunciation: ["/toj xoŋ hjəw/"],
              specific_note: "聽不懂",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "hiểu", meaning: "明白/懂", tail: "" },
              ],
            },
            {
              term_target: "Không biết",
              pronunciation: ["/xoŋ biət/"],
              specific_note: "不知道(資訊)",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "biết", meaning: "知道", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi không hiểu tiếng Việt.",
              translation: "我不懂越南語。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "hiểu", meaning: "懂", tail: " " },
                { text: "tiếng", meaning: "語言", tail: " " },
                { text: "Việt", meaning: "越", tail: "." },
              ],
            },
            {
              sentence: "Tôi không biết.",
              translation: "我不知道(這件事)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "biết", meaning: "知道", tail: "." },
              ],
            },
            {
              sentence: "Ý bạn là gì?",
              translation: "你是什麼意思？",
              segments: [
                { text: "Ý", meaning: "意思", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note:
            "聽不懂對方說話用「Không hiểu」，不知道路或事情用「Không biết」。",
          image_file: "dont_understand.png",
        },
        {
          id: "greet-008",
          term_zh: "廁所在哪裡？",
          related_terms: [
            {
              term_target: "Toilet ở đâu?",
              pronunciation: ["/tɔj let ə dəw/"],
              specific_note: "最簡單直接",
              segments: [
                { text: "Toilet", meaning: "廁所", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              term_target: "Nhà vệ sinh",
              pronunciation: ["/ɲa ve siŋ/"],
              specific_note: "正式名稱",
              segments: [{ text: "Nhà vệ sinh", meaning: "衛生間", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho hỏi, toilet ở đâu?",
              translation: "請問，廁所在哪裡？",
              segments: [
                { text: "Cho", meaning: "讓", tail: " " },
                { text: "hỏi", meaning: "問", tail: ", " },
                { text: "toilet", meaning: "廁所", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Ở đây có nhà vệ sinh không?",
              translation: "這裡有廁所嗎？",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi muốn đi toilet.",
              translation: "我想去廁所。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "toilet", meaning: "廁所", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南人日常對話中，說 Toilet (偷-列) 比說正式的 Nhà vệ sinh 更普遍。",
          image_file: "where_bathroom.png",
        },
        {
          id: "greet-010",
          term_zh: "多少錢？",
          related_terms: [
            {
              term_target: "Bao nhiêu tiền?",
              pronunciation: ["/baʊ ɲiəw tiən/"],
              specific_note: "購物必備",
              segments: [
                { text: "Bao nhiêu", meaning: "多少", tail: " " },
                { text: "tiền", meaning: "錢", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cái này bao nhiêu?",
              translation: "這個多少錢？(簡略說法)",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: "?" },
              ],
            },
            {
              sentence: "Tổng cộng bao nhiêu?",
              translation: "總共多少？(結帳時)",
              segments: [
                { text: "Tổng cộng", meaning: "總共", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: "?" },
              ],
            },
            {
              sentence: "Đắt quá! Bớt đi!",
              translation: "太貴了！算便宜點吧！(殺價用)",
              segments: [
                { text: "Đắt", meaning: "貴", tail: " " },
                { text: "quá", meaning: "太...了", tail: "! " },
                { text: "Bớt", meaning: "減少/降價", tail: " " },
                { text: "đi", meaning: "吧(語氣詞)", tail: "!" },
              ],
            },
          ],
          usage_note:
            "在市場可以省略「tiền」(錢)，直接指著東西問「Bao nhiêu?」(多少) 即可。",
          image_file: "how_much.png",
        },
        {
          id: "greet-011",
          term_zh: "我想要這個",
          related_terms: [
            {
              term_target: "Cho tôi cái này",
              pronunciation: ["/cɔ toj kaj naj/"],
              specific_note: "最自然說法",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: "" },
              ],
            },
            {
              term_target: "Tôi lấy cái này",
              pronunciation: ["/toj lej kaj naj/"],
              specific_note: "我買/拿這個",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "lấy", meaning: "拿/取", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi một phần này.",
              translation: "給我一份這個 (指著菜單)。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "phần", meaning: "份", tail: " " },
                { text: "này", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Lấy cho tôi hai cái.",
              translation: "給我拿兩個。",
              segments: [
                { text: "Lấy", meaning: "拿/取", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "hai", meaning: "二", tail: " " },
                { text: "cái", meaning: "個", tail: "." },
              ],
            },
            {
              sentence: "Tôi muốn mua cái này.",
              translation: "我想買這個。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: "." },
              ],
            },
          ],
          usage_note:
            "在越南買東西，用「Cho tôi...」(給我...) 比說「Tôi muốn...」(我想要...) 更道地。",
          image_file: "i_want_this.png",
        },
        {
          id: "greet-012",
          term_zh: "請給我...",
          related_terms: [
            {
              term_target: "Cho tôi...",
              pronunciation: ["/cɔ toj/"],
              specific_note: "通用請求",
              segments: [
                { text: "Cho", meaning: "給/讓", tail: " " },
                { text: "tôi", meaning: "我", tail: "..." },
              ],
            },
            {
              term_target: "Làm ơn...",
              pronunciation: ["/lam ən/"],
              specific_note: "拜託/麻煩",
              segments: [{ text: "Làm ơn", meaning: "拜託", tail: "..." }],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi xin cốc nước.",
              translation: "請給我一杯水。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xin", meaning: "請求", tail: " " },
                { text: "cốc", meaning: "杯", tail: " " },
                { text: "nước", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi xem menu.",
              translation: "給我看一下菜單。",
              segments: [
                { text: "Cho", meaning: "給/讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "menu", meaning: "菜單", tail: "." },
              ],
            },
            {
              sentence: "Làm ơn cho tôi thêm đá.",
              translation: "麻煩給我加點冰塊。",
              segments: [
                { text: "Làm ơn", meaning: "麻煩", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "thêm", meaning: "增加/加", tail: " " },
                { text: "đá", meaning: "冰", tail: "." },
              ],
            },
          ],
          usage_note:
            "在句尾加上「nhé」(喔) 會讓你的請求聽起來更禮貌且不生硬。",
          image_file: "please_give_me.png",
        },
        {
          id: "greet-013",
          term_zh: "這是什麼？",
          related_terms: [
            {
              term_target: "Cái gì đây?",
              pronunciation: ["/kaj zi dej/"],
              specific_note: "口語常用",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "đây", meaning: "這", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đây là cái gì?",
              translation: "這是什麼東西？",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Món này là gì?",
              translation: "這道菜是什麼？",
              segments: [
                { text: "Món", meaning: "菜/道", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Cái này gọi là gì?",
              translation: "這個叫做什麼？",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "gọi", meaning: "叫", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "看到路邊攤奇怪的食物，指著問「Cái gì đây?」就可以了。",
          image_file: "what_is_this.png",
        },
        {
          id: "greet-014",
          term_zh: "請幫我",
          related_terms: [
            {
              term_target: "Giúp tôi với",
              pronunciation: ["/zup toj vɤj/"],
              specific_note: "一般協助",
              segments: [
                { text: "Giúp", meaning: "幫忙", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "với", meaning: "(助詞)", tail: "" },
              ],
            },
            {
              term_target: "Cứu tôi với",
              pronunciation: ["/kɨu toj vɤj/"],
              specific_note: "緊急救命",
              segments: [
                { text: "Cứu", meaning: "救", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "với", meaning: "(助詞)", tail: "!" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Làm ơn giúp tôi một tay.",
              translation: "拜託幫我一把 (幫個忙)。",
              segments: [
                { text: "Làm ơn", meaning: "拜託", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "tay", meaning: "手", tail: "." },
              ],
            },
            {
              sentence: "Bạn giúp tôi được không?",
              translation: "你可以幫我嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "được", meaning: "可以", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Cứu với! Có trộm!",
              translation: "救命啊！有小偷！",
              segments: [
                { text: "Cứu", meaning: "救", tail: " " },
                { text: "với", meaning: "(助詞)", tail: "! " },
                { text: "Có", meaning: "有", tail: " " },
                { text: "trộm", meaning: "偷/竊賊", tail: "!" },
              ],
            },
          ],
          usage_note: "一般小忙說「Giúp tôi」，遇到危險大喊「Cứu tôi」(救我)。",
          image_file: "help_me.png",
        },
        {
          id: "greet-015",
          term_zh: "你可以再說一次嗎？",
          related_terms: [
            {
              term_target: "Nói lại đi",
              pronunciation: ["/nɔj laj di/"],
              specific_note: "口語",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "lại", meaning: "再/重來", tail: " " },
                { text: "đi", meaning: "吧", tail: "" },
              ],
            },
            {
              term_target: "Nhắc lại được không?",
              pronunciation: ["/ɲak laj dɨək xoŋ/"],
              specific_note: "禮貌",
              segments: [
                { text: "Nhắc", meaning: "提醒/重述", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "được", meaning: "可以", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, nói lại được không?",
              translation: "抱歉，可以再說一次嗎？",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "được", meaning: "可以", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi nghe không rõ.",
              translation: "我沒聽清楚。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "rõ", meaning: "清楚", tail: "." },
              ],
            },
            {
              sentence: "Hả? Cái gì cơ?",
              translation: "蛤？你說什麼？(熟人或驚訝時用)",
              segments: [
                { text: "Hả", meaning: "蛤", tail: "? " },
                { text: "Cái", meaning: "個", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "cơ", meaning: "(語氣詞)", tail: "?" },
              ],
            },
          ],
          usage_note:
            "聽不懂時，禮貌用「Xin lỗi, nói lại đi」，朋友間用「Hả?」。",
          image_file: "say_again.png",
        },
        {
          id: "greet-016",
          term_zh: "你可以講慢一點嗎？",
          related_terms: [
            {
              term_target: "Nói chậm thôi",
              pronunciation: ["/nɔj cəm tʰoj/"],
              specific_note: "請講慢點",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "thôi", meaning: "吧/罷了", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Làm ơn nói chậm lại.",
              translation: "拜託說慢一點。",
              segments: [
                { text: "Làm ơn", meaning: "拜託", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "lại", meaning: "下來", tail: "." },
              ],
            },
            {
              sentence: "Bạn nói nhanh quá.",
              translation: "你說太快了。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "nhanh", meaning: "快", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Từ từ thôi.",
              translation: "慢慢來 / 慢一點。",
              segments: [
                { text: "Từ từ", meaning: "慢慢地", tail: " " },
                { text: "thôi", meaning: "吧", tail: "." },
              ],
            },
          ],
          usage_note: "覺得對方太急躁或說太快，都可以用「Từ từ」(慢慢來)。",
          image_file: "speak_slowly.png",
        },
        {
          id: "greet-017",
          term_zh: "原來如此 / 我懂了",
          related_terms: [
            {
              term_target: "Hiểu rồi",
              pronunciation: ["/hjəw zoj/"],
              specific_note: "理解了",
              segments: [
                { text: "Hiểu", meaning: "懂", tail: " " },
                { text: "rồi", meaning: "了", tail: "" },
              ],
            },
            {
              term_target: "Ra là vậy",
              pronunciation: ["/za la vɜj/"],
              specific_note: "原來如此",
              segments: [
                { text: "Ra", meaning: "出來/原來", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "vậy", meaning: "這樣", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "À, tôi hiểu rồi.",
              translation: "啊，我懂了。",
              segments: [
                { text: "À", meaning: "啊", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "hiểu", meaning: "懂", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Thế à? Giờ mới biết.",
              translation: "是喔？現在才知道。",
              segments: [
                { text: "Thế", meaning: "那樣", tail: " " },
                { text: "à", meaning: "啊", tail: "? " },
                { text: "Giờ", meaning: "現在", tail: " " },
                { text: "mới", meaning: "才", tail: " " },
                { text: "biết", meaning: "知道", tail: "." },
              ],
            },
            {
              sentence: "Hóa ra là thế.",
              translation: "原來是這樣啊。",
              segments: [
                { text: "Hóa ra", meaning: "化出/原來", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "thế", meaning: "那樣", tail: "." },
              ],
            },
          ],
          usage_note:
            "「À」這個發音放在句首，跟中文的「啊！」一樣表示恍然大悟。",
          image_file: "i_see.png",
        },
        {
          id: "greet-018",
          term_zh: "早安",
          related_terms: [
            {
              term_target: "Chào buổi sáng",
              pronunciation: ["/tʃaʊ buəj saŋ/"],
              specific_note: "書面/正式",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "buổi sáng", meaning: "早上", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào cả nhà.",
              translation: "大家早 / 大家好 (最常用)。",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "cả", meaning: "全/所有", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Dậy chưa? Đi ăn sáng đi.",
              translation: "起床沒？去吃早餐吧。",
              segments: [
                { text: "Dậy", meaning: "起床", tail: " " },
                { text: "chưa", meaning: "尚未", tail: "? " },
                { text: "Đi", meaning: "去", tail: " " },
                { text: "ăn sáng", meaning: "吃早餐", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Chúc một ngày tốt lành.",
              translation: "祝你有美好的一天。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "ngày", meaning: "天", tail: " " },
                { text: "tốt lành", meaning: "美好", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南人口語很少說「Chào buổi sáng」，通常直接說「Xin chào」或「Chào + 名字」。",
          image_file: "good_morning.png",
        },
        {
          id: "greet-019",
          term_zh: "晚上好 (晚安)",
          related_terms: [
            {
              term_target: "Chào buổi tối",
              pronunciation: ["/tʃaʊ buəj toj/"],
              specific_note: "晚上見面",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "buổi tối", meaning: "晚上", tail: "" },
              ],
            },
            {
              term_target: "Chúc ngủ ngon",
              pronunciation: ["/cuc ŋu ŋɔn/"],
              specific_note: "睡前晚安",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "ngủ", meaning: "睡覺", tail: " " },
                { text: "ngon", meaning: "好/香甜", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào mọi người.",
              translation: "大家好 (晚上見面通用)。",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "mọi", meaning: "每/所有", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Tối nay ăn gì?",
              translation: "今晚吃什麼？",
              segments: [
                { text: "Tối", meaning: "晚上", tail: " " },
                { text: "nay", meaning: "今", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Muộn rồi, chúc ngủ ngon.",
              translation: "晚了，晚安 (去睡覺)。",
              segments: [
                { text: "Muộn", meaning: "晚", tail: " " },
                { text: "rồi", meaning: "了", tail: ", " },
                { text: "chúc", meaning: "祝", tail: " " },
                { text: "ngủ ngon", meaning: "睡好/晚安", tail: "." },
              ],
            },
          ],
          usage_note:
            "「Chào buổi tối」是見面打招呼，「Chúc ngủ ngon」是睡前道別，不要混用。",
          image_file: "good_evening.png",
        },
        {
          id: "greet-020",
          term_zh: "再見",
          related_terms: [
            {
              term_target: "Tạm biệt",
              pronunciation: ["/tam biət/"],
              specific_note: "正式/暫別",
              segments: [{ text: "Tạm biệt", meaning: "暫別", tail: "" }],
            },
            {
              term_target: "Bye bye",
              pronunciation: ["/bai bai/"],
              specific_note: "口語最常用",
              segments: [{ text: "Bye bye", meaning: "掰掰", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hẹn gặp lại nhé.",
              translation: "下次見喔。",
              segments: [
                { text: "Hẹn", meaning: "約定", tail: " " },
                { text: "gặp", meaning: "見面", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Về đây, bye bye!",
              translation: "我回去囉，掰掰！",
              segments: [
                { text: "Về", meaning: "回(家)", tail: " " },
                { text: "đây", meaning: "這裡/了", tail: ", " },
                { text: "bye bye", meaning: "掰掰", tail: "!" },
              ],
            },
            {
              sentence: "Tôi đi nhé.",
              translation: "我先走囉。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "走/去", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "年輕人或朋友間，直接說英文的「Bye bye」非常普遍。",
          image_file: "goodbye.png",
        },
        {
          id: "greet-021",
          term_zh: "你好嗎",
          related_terms: [
            {
              term_target: "Khỏe không?",
              pronunciation: ["/xwɛ xoŋ/"],
              specific_note: "問候健康",
              segments: [
                { text: "Khỏe", meaning: "健康/好", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Dạo này thế nào?",
              translation: "最近怎樣？",
              segments: [
                { text: "Dạo", meaning: "期間", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Bạn có khỏe không?",
              translation: "你身體好嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "khỏe", meaning: "健康", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Vẫn bình thường.",
              translation: "還是一樣 / 普普通通。",
              segments: [
                { text: "Vẫn", meaning: "仍然", tail: " " },
                { text: "bình thường", meaning: "平常", tail: "." },
              ],
            },
          ],
          usage_note:
            "熟人之間常問「Dạo này thế nào?」(最近怎樣) 來代替「Khỏe không?」。",
          image_file: "how_are_you.png",
        },
        {
          id: "greet-022",
          term_zh: "真的嗎",
          related_terms: [
            {
              term_target: "Thật á?",
              pronunciation: ["/tʰət a/"],
              specific_note: "驚訝語氣",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "á", meaning: "啊", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Thật không đấy?",
              translation: "真的假的啊？(懷疑)",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "đấy", meaning: "那(語氣詞)", tail: "?" },
              ],
            },
            {
              sentence: "Thiệt hả?",
              translation: "真的喔？(南部口語)",
              segments: [
                { text: "Thiệt", meaning: "真(南方音)", tail: " " },
                { text: "hả", meaning: "蛤/喔", tail: "?" },
              ],
            },
            {
              sentence: "Tin được không?",
              translation: "能信嗎？/ 真的嗎？",
              segments: [
                { text: "Tin", meaning: "相信", tail: " " },
                { text: "được", meaning: "可以", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "聽到八卦或難以置信的消息時使用，配上驚訝表情。",
          image_file: "really_q.png",
        },
        {
          id: "greet-023",
          term_zh: "太棒了",
          related_terms: [
            {
              term_target: "Tuyệt vời",
              pronunciation: ["/twiət vəj/"],
              specific_note: "絕佳/精彩",
              segments: [{ text: "Tuyệt vời", meaning: "絕佳", tail: "!" }],
            },
            {
              term_target: "Đỉnh",
              pronunciation: ["/diŋ/"],
              specific_note: "頂級/超讚(年輕人)",
              segments: [{ text: "Đỉnh", meaning: "頂/讚", tail: "!" }],
            },
          ],
          examples: [
            {
              sentence: "Tuyệt quá!",
              translation: "太讚了！",
              segments: [
                { text: "Tuyệt", meaning: "絕/棒", tail: " " },
                { text: "quá", meaning: "太...了", tail: "!" },
              ],
            },
            {
              sentence: "Bạn giỏi quá.",
              translation: "你太厲害了。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giỏi", meaning: "優秀/擅長", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Ngon tuyệt!",
              translation: "好吃的不得了！(誇獎食物)",
              segments: [
                { text: "Ngon", meaning: "好吃", tail: " " },
                { text: "tuyệt", meaning: "絕/極", tail: "!" },
              ],
            },
          ],
          usage_note:
            "年輕人看到很酷的事情常只說一個字：「Đỉnh!」(頂！/ 讚！)。",
          image_file: "awesome.png",
        },
        {
          id: "greet-024",
          term_zh: "很高興認識你",
          related_terms: [
            {
              term_target: "Rất vui được gặp bạn",
              pronunciation: ["/zət vui dɨək gap ban/"],
              specific_note: "初次見面",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "開心", tail: " " },
                { text: "được", meaning: "被/得到", tail: " " },
                { text: "gặp", meaning: "遇見", tail: " " },
                { text: "bạn", meaning: "你", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hân hạnh làm quen.",
              translation: "很榮幸認識你 (較正式)。",
              segments: [
                { text: "Hân hạnh", meaning: "榮幸", tail: " " },
                { text: "làm quen", meaning: "結識/做朋友", tail: "." },
              ],
            },
            {
              sentence: "Chào anh, tôi tên là Nam.",
              translation: "你好，我的名字是 Nam。",
              segments: [
                { text: "Chào", meaning: "你好", tail: " " },
                { text: "anh", meaning: "大哥", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "Nam", meaning: "南(人名)", tail: "." },
              ],
            },
            {
              sentence: "Rất vui được biết anh.",
              translation: "很高興認識(知道)你。",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "開心", tail: " " },
                { text: "được", meaning: "得到", tail: " " },
                { text: "biết", meaning: "知道", tail: " " },
                { text: "anh", meaning: "你(對男性)", tail: "." },
              ],
            },
          ],
          usage_note: "握手時或自我介紹後使用，展現友善。",
          image_file: "nice_to_meet_you.png",
        },
        {
          id: "greet-025",
          term_zh: "真可惜",
          related_terms: [
            {
              term_target: "Tiếc quá",
              pronunciation: ["/tiək kwa/"],
              specific_note: "遺憾",
              segments: [
                { text: "Tiếc", meaning: "可惜", tail: " " },
                { text: "quá", meaning: "太...了", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tiếc quá đi mất!",
              translation: "太可惜了吧！(語氣較強)",
              segments: [
                { text: "Tiếc", meaning: "可惜", tail: " " },
                { text: "quá", meaning: "太", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "mất", meaning: "失去/掉", tail: "!" },
              ],
            },
            {
              sentence: "Tội nghiệp ghê.",
              translation: "真可憐 (同情遭遇)。",
              segments: [
                { text: "Tội nghiệp", meaning: "可憐/罪業", tail: " " },
                { text: "ghê", meaning: "很/令人驚訝", tail: "." },
              ],
            },
            {
              sentence: "Xui thế.",
              translation: "真倒楣 / 運氣真差。",
              segments: [
                { text: "Xui", meaning: "倒楣", tail: " " },
                { text: "thế", meaning: "那樣", tail: "." },
              ],
            },
          ],
          usage_note: "錯過打折、朋友不能來參加聚會、或聽到壞消息時使用。",
          image_file: "too_bad.png",
        },
      ],
    },
    {
      id: "pronouns-vi",
      name: "主詞（代名詞）",
      items: [
        {
          id: "pro-01",
          term_zh: "它 (動物/事物)",
          related_terms: [
            {
              term_target: "Nó",
              pronunciation: ["/nɔ/"],
              specific_note: "指動物或小孩",
              segments: [{ text: "Nó", meaning: "它/他(卑稱)", tail: "" }],
            },
            {
              term_target: "Cái này",
              pronunciation: ["/kaj naj/"],
              specific_note: "指物品(這個)",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nó đang ngủ.",
              translation: "牠正在睡覺 (指貓狗)。",
              segments: [
                { text: "Nó", meaning: "牠", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ngủ", meaning: "睡", tail: "." },
              ],
            },
            {
              sentence: "Trời đang mưa.",
              translation: "(它)外面正在下雨 (天氣不用Nó)。",
              segments: [
                { text: "Trời", meaning: "天/老天爺", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "mưa", meaning: "下雨", tail: "." },
              ],
            },
            {
              sentence: "Cái này ngon không?",
              translation: "(它)這個好吃嗎？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note:
            "越南語的「它」Nó 通常指動物或晚輩，指天氣時會用「Trời」(天)。",
          image_file: "that.png",
        },
        {
          id: "pro-02",
          term_zh: "我",
          related_terms: [
            {
              term_target: "Tôi",
              pronunciation: ["/toj/"],
              specific_note: "通用/正式",
              segments: [{ text: "Tôi", meaning: "我", tail: "" }],
            },
            {
              term_target: "Em",
              pronunciation: ["/ɛm/"],
              specific_note: "晚輩自稱(最常用)",
              segments: [{ text: "Em", meaning: "弟弟/妹妹/我", tail: "" }],
            },
            {
              term_target: "Mình",
              pronunciation: ["/miŋ/"],
              specific_note: "朋友間自稱",
              segments: [{ text: "Mình", meaning: "自己/我", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi là người Đài Loan.",
              translation: "我是台灣人 (正式自我介紹)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Em đói bụng quá.",
              translation: "我肚子好餓 (對比自己大的人說)。",
              segments: [
                { text: "Em", meaning: "我(晚輩)", tail: " " },
                { text: "đói", meaning: "餓", tail: " " },
                { text: "bụng", meaning: "肚子", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Mình thích cái này.",
              translation: "我喜歡這個 (朋友間)。",
              segments: [
                { text: "Mình", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: "." },
              ],
            },
          ],
          usage_note:
            "對陌生人或正式場合用 Tôi，對年長者或服務生自稱 Em 以示禮貌。",
          image_file: "i.png",
        },
        {
          id: "pro-03",
          term_zh: "你",
          related_terms: [
            {
              term_target: "Bạn",
              pronunciation: ["/ban/"],
              specific_note: "朋友/平輩",
              segments: [{ text: "Bạn", meaning: "朋友/你", tail: "" }],
            },
            {
              term_target: "Anh",
              pronunciation: ["/aɲ/"],
              specific_note: "稱呼年長男性",
              segments: [{ text: "Anh", meaning: "哥哥/你", tail: "" }],
            },
            {
              term_target: "Chị",
              pronunciation: ["/ci/"],
              specific_note: "稱呼年長女性",
              segments: [{ text: "Chị", meaning: "姐姐/妳", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn tên là gì?",
              translation: "你叫什麼名字？(平輩/一般)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Anh đi đâu đấy?",
              translation: "哥你要去哪裡？(對男性)",
              segments: [
                { text: "Anh", meaning: "哥/你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: " " },
                { text: "đấy", meaning: "(語氣詞)", tail: "?" },
              ],
            },
            {
              sentence: "Chị đẹp quá.",
              translation: "姐妳真漂亮。(對女性)",
              segments: [
                { text: "Chị", meaning: "姐/妳", tail: " " },
                { text: "đẹp", meaning: "漂亮", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
          ],
          usage_note:
            "在越南，「你」沒有固定單字。男叫 Anh，女叫 Chị，晚輩叫 Em，平輩才叫 Bạn。",
          image_file: "you.png",
        },
        {
          id: "pro-04",
          term_zh: "他 (男性)",
          related_terms: [
            {
              term_target: "Anh ấy",
              pronunciation: ["/aɲ ɜj/"],
              specific_note: "年輕/中年男性",
              segments: [
                { text: "Anh", meaning: "哥", tail: " " },
                { text: "ấy", meaning: "那個/那位", tail: "" },
              ],
            },
            {
              term_target: "Ông ấy",
              pronunciation: ["/oŋ ɜj/"],
              specific_note: "年長男性",
              segments: [
                { text: "Ông", meaning: "爺爺/先生", tail: " " },
                { text: "ấy", meaning: "那位", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh ấy là bạn tôi.",
              translation: "他是我的朋友。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "bạn", meaning: "朋友", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy đẹp trai lắm.",
              translation: "他很帥。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "đẹp trai", meaning: "帥", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Ông ấy đang họp.",
              translation: "他(那位先生)正在開會。",
              segments: [
                { text: "Ông ấy", meaning: "他", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "họp", meaning: "開會", tail: "." },
              ],
            },
          ],
          usage_note: "通常在稱謂後面加「ấy」就會變成第三人稱「他」。",
          image_file: "he.png",
        },
        {
          id: "pro-05",
          term_zh: "他的",
          related_terms: [
            {
              term_target: "Của anh ấy",
              pronunciation: ["/kua aɲ ɜj/"],
              specific_note: "",
              segments: [
                { text: "Của", meaning: "的/屬於", tail: " " },
                { text: "anh ấy", meaning: "他", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đây là xe của anh ấy.",
              translation: "這是他的車。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "xe", meaning: "車", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "anh ấy", meaning: "他", tail: "." },
              ],
            },
            {
              sentence: "Nhà anh ấy to lắm.",
              translation: "他的房子很大 (口語常省略'của')。",
              segments: [
                { text: "Nhà", meaning: "房子", tail: " " },
                { text: "anh ấy", meaning: "他", tail: " " },
                { text: "to", meaning: "大", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Tên anh ấy là gì?",
              translation: "他的名字是什麼？",
              segments: [
                { text: "Tên", meaning: "名字", tail: " " },
                { text: "anh ấy", meaning: "他", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "「Của」意思是「的」，但在口語中經常被省略。",
          image_file: "his.png",
        },
        {
          id: "pro-06",
          term_zh: "我們",
          related_terms: [
            {
              term_target: "Chúng tôi",
              pronunciation: ["/cuŋm toj/"],
              specific_note: "正式/不含聽者",
              segments: [
                { text: "Chúng", meaning: "眾/們", tail: " " },
                { text: "tôi", meaning: "我", tail: "" },
              ],
            },
            {
              term_target: "Chúng ta",
              pronunciation: ["/cuŋm ta/"],
              specific_note: "包含聽者",
              segments: [
                { text: "Chúng", meaning: "們", tail: " " },
                { text: "ta", meaning: "咱/我們", tail: "" },
              ],
            },
            {
              term_target: "Tụi mình",
              pronunciation: ["/tuj miŋ/"],
              specific_note: "好朋友之間",
              segments: [{ text: "Tụi mình", meaning: "我們(死黨)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chúng tôi là người Việt.",
              translation: "我們是越南人 (介紹自己這群人)。",
              segments: [
                { text: "Chúng tôi", meaning: "我們", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "Việt", meaning: "越", tail: "." },
              ],
            },
            {
              sentence: "Chúng ta đi ăn đi!",
              translation: "我們(大家)去吃飯吧！",
              segments: [
                { text: "Chúng ta", meaning: "我們(包含你)", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
            {
              sentence: "Tụi mình đi chơi nhé.",
              translation: "我們出去玩吧 (朋友用)。",
              segments: [
                { text: "Tụi mình", meaning: "我們", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "chơi", meaning: "玩", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note:
            "邀請對方一起做某事用「Chúng ta」，只是陳述自己這方的事用「Chúng tôi」。",
          image_file: "we.png",
        },
        {
          id: "pro-07",
          term_zh: "她 (女性)",
          related_terms: [
            {
              term_target: "Cô ấy",
              pronunciation: ["/ko ɜj/"],
              specific_note: "年輕女性",
              segments: [
                { text: "Cô", meaning: "小姐/姑姑", tail: " " },
                { text: "ấy", meaning: "那位", tail: "" },
              ],
            },
            {
              term_target: "Chị ấy",
              pronunciation: ["/ci ɜj/"],
              specific_note: "稍微年長的女性",
              segments: [
                { text: "Chị", meaning: "姐姐", tail: " " },
                { text: "ấy", meaning: "那位", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cô ấy là giáo viên.",
              translation: "她是一位老師。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "giáo viên", meaning: "教師", tail: "." },
              ],
            },
            {
              sentence: "Chị ấy dễ thương quá.",
              translation: "她(那位姐姐)好可愛。",
              segments: [
                { text: "Chị ấy", meaning: "她", tail: " " },
                {
                  text: "dễ thương",
                  meaning: "可愛/易傷(惹人憐愛)",
                  tail: " ",
                },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy có đến không?",
              translation: "她會來嗎？",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "đến", meaning: "來", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "同樣在稱謂後加「ấy」。年輕未婚女性多用「Cô ấy」。",
          image_file: "she.png",
        },
        {
          id: "pro-08",
          term_zh: "他們",
          related_terms: [
            {
              term_target: "Họ",
              pronunciation: ["/hɔ/"],
              specific_note: "通用",
              segments: [{ text: "Họ", meaning: "他們", tail: "" }],
            },
            {
              term_target: "Các bạn",
              pronunciation: ["/kak ban/"],
              specific_note: "你們/他們(平輩)",
              segments: [
                { text: "Các", meaning: "各/諸位", tail: " " },
                { text: "bạn", meaning: "朋友", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Họ là sinh viên.",
              translation: "他們是大學生。",
              segments: [
                { text: "Họ", meaning: "他們", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sinh viên", meaning: "生員(大學生)", tail: "." },
              ],
            },
            {
              sentence: "Họ đang làm gì?",
              translation: "他們在做什麼？",
              segments: [
                { text: "Họ", meaning: "他們", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Họ giàu lắm.",
              translation: "他們很有錢。",
              segments: [
                { text: "Họ", meaning: "他們", tail: " " },
                { text: "giàu", meaning: "富裕", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
          ],
          usage_note: "「Họ」是最標準的說法，不分男女。",
          image_file: "they.png",
        },
        {
          id: "pro-09",
          term_zh: "這個",
          related_terms: [
            {
              term_target: "Cái này",
              pronunciation: ["/kaj naj/"],
              specific_note: "指物品",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: "" },
              ],
            },
            {
              term_target: "Đây",
              pronunciation: ["/dej/"],
              specific_note: "這裡/這",
              segments: [{ text: "Đây", meaning: "這", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này là cái gì?",
              translation: "這個是什麼？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Tôi mua cái này.",
              translation: "我要買這個。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "Cái này bao nhiêu tiền?",
              translation: "這個多少錢？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tiền", meaning: "錢", tail: "?" },
              ],
            },
          ],
          usage_note: "手指著近處的東西說「Cái này」。",
          image_file: "this.png",
        },
        {
          id: "pro-10",
          term_zh: "那個",
          related_terms: [
            {
              term_target: "Cái đó",
              pronunciation: ["/kaj dɔ/"],
              specific_note: "指物品",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "đó", meaning: "那", tail: "" },
              ],
            },
            {
              term_target: "Đó",
              pronunciation: ["/dɔ/"],
              specific_note: "那裡/那",
              segments: [{ text: "Đó", meaning: "那", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái đó là của tôi.",
              translation: "那個是我的。",
              segments: [
                { text: "Cái đó", meaning: "那個", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Cái đó đắt không?",
              translation: "那個貴嗎？",
              segments: [
                { text: "Cái đó", meaning: "那個", tail: " " },
                { text: "đắt", meaning: "貴", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Đó là ai?",
              translation: "那個人是誰？",
              segments: [
                { text: "Đó", meaning: "那", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
              ],
            },
          ],
          usage_note: "手指著遠處的東西說「Cái đó」或「Cái kia」。",
          image_file: "that.png",
        },
        {
          id: "pro-11",
          term_zh: "她的",
          related_terms: [
            {
              term_target: "Của cô ấy",
              pronunciation: ["/kua ko ɜj/"],
              specific_note: "",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "cô ấy", meaning: "她", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tóc cô ấy dài.",
              translation: "她的頭髮很長。",
              segments: [
                { text: "Tóc", meaning: "頭髮", tail: " " },
                { text: "cô ấy", meaning: "她", tail: " " },
                { text: "dài", meaning: "長", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích váy của cô ấy.",
              translation: "我喜歡她的裙子。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "váy", meaning: "裙子", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "cô ấy", meaning: "她", tail: "." },
              ],
            },
            {
              sentence: "Đây là sách của cô ấy.",
              translation: "這是她的書。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sách", meaning: "書", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "cô ấy", meaning: "她", tail: "." },
              ],
            },
          ],
          usage_note: "所有格「của」在口語中常被省略。",
          image_file: "her.png",
        },
        {
          id: "pro-12",
          term_zh: "你的",
          related_terms: [
            {
              term_target: "Của bạn",
              pronunciation: ["/kua ban/"],
              specific_note: "平輩通用",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tên bạn là gì?",
              translation: "你的名字是什麼？",
              segments: [
                { text: "Tên", meaning: "名字", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Cái này có phải của bạn không?",
              translation: "這個是你的嗎？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "có phải", meaning: "是否", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Đừng quên chìa khóa của bạn.",
              translation: "別忘了你的鑰匙。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "quên", meaning: "忘記", tail: " " },
                { text: "chìa khóa", meaning: "鑰匙", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
          ],
          usage_note: "如果是對長輩，要說「Của anh」(您的) 或「Của chị」。",
          image_file: "your.png",
        },
        {
          id: "pro-13",
          term_zh: "他們的",
          related_terms: [
            {
              term_target: "Của họ",
              pronunciation: ["/kua hɔ/"],
              specific_note: "",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "họ", meaning: "他們", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nhà của họ rất to.",
              translation: "他們的房子很大。",
              segments: [
                { text: "Nhà", meaning: "房子", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "họ", meaning: "他們", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "to", meaning: "大", tail: "." },
              ],
            },
            {
              sentence: "Tôi biết bố mẹ họ.",
              translation: "我認識他們的父母。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "知道/認識", tail: " " },
                { text: "bố mẹ", meaning: "父母", tail: " " },
                { text: "họ", meaning: "他們", tail: "." },
              ],
            },
            {
              sentence: "Chó của họ rất khôn.",
              translation: "他們的狗很聰明。",
              segments: [
                { text: "Chó", meaning: "狗", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "họ", meaning: "他們", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "khôn", meaning: "聰明/乖", tail: "." },
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
              term_target: "Của chúng tôi",
              pronunciation: ["/kua cuŋm toj/"],
              specific_note: "正式/對外",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "chúng tôi", meaning: "我們", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đây là trường của chúng tôi.",
              translation: "這是我們的學校。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "trường", meaning: "學校", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "chúng tôi", meaning: "我們", tail: "." },
              ],
            },
            {
              sentence: "Chào mừng đến nhà tôi.",
              translation: "歡迎來我們家 (口語常說'我家')。",
              segments: [
                { text: "Chào mừng", meaning: "歡迎", tail: " " },
                { text: "đến", meaning: "來", tail: " " },
                { text: "nhà", meaning: "家", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Đội của chúng tôi đã thắng.",
              translation: "我們這隊贏了。",
              segments: [
                { text: "Đội", meaning: "隊伍", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "chúng tôi", meaning: "我們", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "thắng", meaning: "贏", tail: "." },
              ],
            },
          ],
          usage_note:
            "口語中如果講「我們家」、「我們國」，常用「... mình」或「... tôi」代替。",
          image_file: "our.png",
        },
        {
          id: "pro-15",
          term_zh: "這些",
          related_terms: [
            {
              term_target: "Mấy cái này",
              pronunciation: ["/mɜj kaj naj/"],
              specific_note: "口語常用",
              segments: [
                { text: "Mấy", meaning: "幾/些", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: "" },
              ],
            },
            {
              term_target: "Những cái này",
              pronunciation: ["/ɲɨŋ kaj naj/"],
              specific_note: "較正式",
              segments: [
                { text: "Những", meaning: "些(複數)", tail: " " },
                { text: "cái này", meaning: "這個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mấy quả này ngọt lắm.",
              translation: "這些水果很甜。",
              segments: [
                { text: "Mấy", meaning: "些", tail: " " },
                { text: "quả", meaning: "果子", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "ngọt", meaning: "甜", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Mấy cái này của bạn à?",
              translation: "這些是你的嗎？",
              segments: [
                { text: "Mấy cái này", meaning: "這些", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "à", meaning: "啊/嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi thích mấy đôi này.",
              translation: "我喜歡這幾雙(鞋)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "mấy", meaning: "幾/些", tail: " " },
                { text: "đôi", meaning: "雙", tail: " " },
                { text: "này", meaning: "這", tail: "." },
              ],
            },
          ],
          usage_note: "越南語複數加「Mấy」或「Những」在前面。口語多用「Mấy」。",
          image_file: "these.png",
        },
        {
          id: "pro-16",
          term_zh: "那些",
          related_terms: [
            {
              term_target: "Mấy cái đó",
              pronunciation: ["/mɜj kaj dɔ/"],
              specific_note: "口語",
              segments: [
                { text: "Mấy", meaning: "些", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "đó", meaning: "那", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mấy hoa đó đẹp quá.",
              translation: "那些花好漂亮。",
              segments: [
                { text: "Mấy", meaning: "些", tail: " " },
                { text: "hoa", meaning: "花", tail: " " },
                { text: "đó", meaning: "那", tail: " " },
                { text: "đẹp", meaning: "漂亮", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Mấy người đó là ai?",
              translation: "那些人是誰？",
              segments: [
                { text: "Mấy", meaning: "些", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "đó", meaning: "那", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
              ],
            },
            {
              sentence: "Tôi muốn mua mấy cái đó.",
              translation: "我想要買那些。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "mấy cái đó", meaning: "那些", tail: "." },
              ],
            },
          ],
          usage_note: "遠處複數。",
          image_file: "those.png",
        },
      ],
    },
    {
      id: "verbs-vi",
      name: "常用動詞",
      items: [
        {
          id: "v-01",
          term_zh: "是",
          related_terms: [
            {
              term_target: "Là",
              pronunciation: ["/la/"],
              specific_note: "定義身分/物品時用",
              segments: [{ text: "Là", meaning: "是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi là người Việt.",
              translation: "我是越南人。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "Việt", meaning: "越", tail: "." },
              ],
            },
            {
              sentence: "Đây là cái gì?",
              translation: "這是什麼？",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Cô ấy đẹp lắm.",
              translation: "她很漂亮 (注意：形容詞前不加「是」)。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "đẹp", meaning: "漂亮", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
          ],
          usage_note:
            "只有在說「A是B」(名詞)時才用 Là。形容詞(如：我很快樂)不需要加 Là。",
          image_file: "be.png",
        },
        {
          id: "v-02",
          term_zh: "有",
          related_terms: [
            {
              term_target: "Có",
              pronunciation: ["/kɔ/"],
              specific_note: "擁有/存在",
              segments: [{ text: "Có", meaning: "有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi có tiền.",
              translation: "我有錢。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Bạn có người yêu chưa?",
              translation: "你有男/女朋友了嗎？(越南人很愛問)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "người yêu", meaning: "愛人", tail: " " },
                { text: "chưa", meaning: "尚未/沒", tail: "?" },
              ],
            },
            {
              sentence: "Ở đây có wifi không?",
              translation: "這裡有 Wifi 嗎？",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "wifi", meaning: "無線網路", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "既表示「擁有」(I have)，也表示「存在」(There is)。",
          image_file: "have.png",
        },
        {
          id: "v-03",
          term_zh: "去",
          related_terms: [
            {
              term_target: "Đi",
              pronunciation: ["/di/"],
              specific_note: "移動/離開",
              segments: [{ text: "Đi", meaning: "去/走", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi đâu đấy?",
              translation: "要去哪啊？(街頭常見打招呼方式，非真的查勤)",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: " " },
                { text: "đấy", meaning: "(語氣詞)", tail: "?" },
              ],
            },
            {
              sentence: "Tôi đi làm.",
              translation: "我去上班。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "làm", meaning: "做(工作)", tail: "." },
              ],
            },
            {
              sentence: "Đi ăn đi!",
              translation: "去吃飯吧！",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note: "「Đi + 動詞」表示去執行某動作，如 Đi ngủ (去睡覺)。",
          image_file: "go.png",
        },
        {
          id: "v-04",
          term_zh: "拿 / 取",
          related_terms: [
            {
              term_target: "Lấy",
              pronunciation: ["/lej/"],
              specific_note: "獲取物品",
              segments: [{ text: "Lấy", meaning: "拿", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lấy cho tôi cái này.",
              translation: "拿這個給我 (購物/點餐常用)。",
              segments: [
                { text: "Lấy", meaning: "拿", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "Tôi lấy hai cái.",
              translation: "我要(拿)兩個。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "lấy", meaning: "拿", tail: " " },
                { text: "hai", meaning: "二", tail: " " },
                { text: "cái", meaning: "個", tail: "." },
              ],
            },
            {
              sentence: "Quên lấy tiền rồi.",
              translation: "忘記拿錢了。",
              segments: [
                { text: "Quên", meaning: "忘記", tail: " " },
                { text: "lấy", meaning: "拿", tail: " " },
                { text: "tiền", meaning: "錢", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note:
            "在餐廳點菜或買東西時，用「Lấy」比用「Muốn」(想要) 更道地。",
          image_file: "get.png",
        },
        {
          id: "v-05",
          term_zh: "做",
          related_terms: [
            {
              term_target: "Làm",
              pronunciation: ["/lam/"],
              specific_note: "執行動作",
              segments: [{ text: "Làm", meaning: "做", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn đang làm gì?",
              translation: "你正在做什麼？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Làm nhanh lên.",
              translation: "做快一點。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "nhanh", meaning: "快", tail: " " },
                { text: "lên", meaning: "起來/上", tail: "." },
              ],
            },
            {
              sentence: "Tôi làm việc ở đây.",
              translation: "我在這裡工作(做事)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "ở đây", meaning: "在這裡", tail: "." },
              ],
            },
          ],
          usage_note: "Làm 也可以指「職業」，如：Tôi làm bác sĩ (我做醫生)。",
          image_file: "do.png",
        },
        {
          id: "v-06",
          term_zh: "說",
          related_terms: [
            {
              term_target: "Nói",
              pronunciation: ["/nɔj/"],
              specific_note: "表達",
              segments: [{ text: "Nói", meaning: "說", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nói lại đi.",
              translation: "再說一次。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "lại", meaning: "重來/再", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Đừng nói chuyện.",
              translation: "不要講話/聊天。",
              segments: [
                { text: "Đừng", meaning: "別/禁止", tail: " " },
                { text: "nói chuyện", meaning: "講話/聊天", tail: "." },
              ],
            },
            {
              sentence: "Nói to lên.",
              translation: "說大聲一點。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "to", meaning: "大", tail: " " },
                { text: "lên", meaning: "起來", tail: "." },
              ],
            },
          ],
          usage_note: "聽不清楚時，可以指著耳朵說「Nói to」(說大聲)。",
          image_file: "say.png",
        },
        {
          id: "v-07",
          term_zh: "知道",
          related_terms: [
            {
              term_target: "Biết",
              pronunciation: ["/biət/"],
              specific_note: "知曉",
              segments: [{ text: "Biết", meaning: "知道", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi không biết.",
              translation: "我不知道。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "biết", meaning: "知道", tail: "." },
              ],
            },
            {
              sentence: "Bạn biết tiếng Việt không?",
              translation: "你會(知道)越南語嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "biết", meaning: "知道/會", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Biết rồi, khổ lắm.",
              translation: "知道了，真囉唆 (口語抱怨)。",
              segments: [
                { text: "Biết", meaning: "知道", tail: " " },
                { text: "rồi", meaning: "了", tail: ", " },
                { text: "khổ", meaning: "苦", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
          ],
          usage_note: "Biết 也可以當「會」使用，如：Biết bơi (會游泳)。",
          image_file: "know.png",
        },
        {
          id: "v-08",
          term_zh: "想 / 思考",
          related_terms: [
            {
              term_target: "Nghĩ",
              pronunciation: ["/ŋi/"],
              specific_note: "腦中思考",
              segments: [{ text: "Nghĩ", meaning: "想", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Để tôi nghĩ đã.",
              translation: "讓我想一下。",
              segments: [
                { text: "Để", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "đã", meaning: "先/已經", tail: "." },
              ],
            },
            {
              sentence: "Bạn nghĩ sao?",
              translation: "你覺得呢？/ 你怎麼想？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "sao", meaning: "怎樣", tail: "?" },
              ],
            },
            {
              sentence: "Đừng nghĩ nhiều.",
              translation: "別想太多。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "nhiều", meaning: "多", tail: "." },
              ],
            },
          ],
          usage_note:
            "注意：「想念」是 Nhớ，「想要」是 Muốn，動腦筋才是 Nghĩ。",
          image_file: "think.png",
        },
        {
          id: "v-09",
          term_zh: "看見 / 覺得",
          related_terms: [
            {
              term_target: "Thấy",
              pronunciation: ["/tʰɜj/"],
              specific_note: "視覺/感覺",
              segments: [{ text: "Thấy", meaning: "看見/覺得", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Có thấy không?",
              translation: "有看到嗎？",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "thấy", meaning: "看見", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi thấy đói.",
              translation: "我覺得餓了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thấy", meaning: "覺得", tail: " " },
                { text: "đói", meaning: "餓", tail: "." },
              ],
            },
            {
              sentence: "Không thấy gì cả.",
              translation: "什麼都沒看到。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "thấy", meaning: "看見", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "cả", meaning: "皆/全", tail: "." },
              ],
            },
          ],
          usage_note: "Thấy 常用來表達身體感覺，如 Thấy mệt (覺得累)。",
          image_file: "see.png",
        },
        {
          id: "v-10",
          term_zh: "製作 / 弄",
          related_terms: [
            {
              term_target: "Làm",
              pronunciation: ["/lam/"],
              specific_note: "與「做」同字",
              segments: [{ text: "Làm", meaning: "做/製作", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Làm bánh mì.",
              translation: "做麵包。",
              segments: [
                { text: "Làm", meaning: "製作", tail: " " },
                { text: "bánh mì", meaning: "麵包", tail: "." },
              ],
            },
            {
              sentence: "Kiếm tiền.",
              translation: "賺錢 (字面意：找錢/做錢)。",
              segments: [
                { text: "Kiếm", meaning: "找/賺", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Làm ơn.",
              translation: "拜託 (字面意：做恩惠)。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "ơn", meaning: "恩惠", tail: "." },
              ],
            },
          ],
          usage_note: "越南語中 Make 和 Do 通常都用「Làm」。",
          image_file: "make.png",
        },
        {
          id: "v-11",
          term_zh: "來",
          related_terms: [
            {
              term_target: "Đến",
              pronunciation: ["/den/"],
              specific_note: "抵達",
              segments: [{ text: "Đến", meaning: "來/到", tail: "" }],
            },
            {
              term_target: "Lại",
              pronunciation: ["/laj/"],
              specific_note: "過來",
              segments: [{ text: "Lại", meaning: "來/靠近", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lại đây.",
              translation: "過來這裡。",
              segments: [
                { text: "Lại", meaning: "來", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Khi nào bạn đến?",
              translation: "你什麼時候到？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đến", meaning: "到/來", tail: "?" },
              ],
            },
            {
              sentence: "Mời vào.",
              translation: "請進 (不需要說Come)。",
              segments: [
                { text: "Mời", meaning: "邀請/請", tail: " " },
                { text: "vào", meaning: "進", tail: "." },
              ],
            },
          ],
          usage_note: "叫人過來用「Lại đây」，講抵達時間用「Đến」。",
          image_file: "come.png",
        },
        {
          id: "v-12",
          term_zh: "需要",
          related_terms: [
            {
              term_target: "Cần",
              pronunciation: ["/kən/"],
              specific_note: "必須",
              segments: [{ text: "Cần", meaning: "需要", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi cần nước.",
              translation: "我需要水。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "nước", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "Có cần giúp không?",
              translation: "需要幫忙嗎？",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Không cần đâu.",
              translation: "不用了 / 不需要。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "đâu", meaning: "(語氣詞)", tail: "." },
              ],
            },
          ],
          usage_note: "拒絕別人好意時，客氣地說「Không cần đâu」(不需要)。",
          image_file: "need.png",
        },
        {
          id: "v-13",
          term_zh: "使用 / 用",
          related_terms: [
            {
              term_target: "Dùng",
              pronunciation: ["/zuŋm/"],
              specific_note: "通用",
              segments: [{ text: "Dùng", meaning: "用", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dùng đũa.",
              translation: "用筷子。",
              segments: [
                { text: "Dùng", meaning: "用", tail: " " },
                { text: "đũa", meaning: "筷子", tail: "." },
              ],
            },
            {
              sentence: "Cái này dùng thế nào?",
              translation: "這個怎麼用？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "dùng", meaning: "用", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Tôi dùng cái này được không?",
              translation: "我可以用這個嗎？",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "dùng", meaning: "用", tail: " " },
                { text: "cái này", meaning: "這個", tail: " " },
                { text: "được", meaning: "可以", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "吃飯時服務生也會問「Dùng gì?」(用什麼=吃什麼?)。",
          image_file: "use.png",
        },
        {
          id: "v-14",
          term_zh: "找",
          related_terms: [
            {
              term_target: "Tìm",
              pronunciation: ["/tim/"],
              specific_note: "尋找",
              segments: [{ text: "Tìm", meaning: "找", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đang tìm việc.",
              translation: "我正在找工作。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "tìm", meaning: "找", tail: " " },
                { text: "việc", meaning: "事情/工作", tail: "." },
              ],
            },
            {
              sentence: "Không tìm thấy.",
              translation: "找不到 (沒找見)。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "tìm", meaning: "找", tail: " " },
                { text: "thấy", meaning: "見", tail: "." },
              ],
            },
            {
              sentence: "Bạn tìm ai?",
              translation: "你找誰？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "tìm", meaning: "找", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
              ],
            },
          ],
          usage_note: "「找」是 Tìm，「找到」是 Tìm thấy。",
          image_file: "find.png",
        },
        {
          id: "v-15",
          term_zh: "給",
          related_terms: [
            {
              term_target: "Cho",
              pronunciation: ["/cɔ/"],
              specific_note: "給予",
              segments: [{ text: "Cho", meaning: "給", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi.",
              translation: "給我。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Cho bạn này.",
              translation: "這給你 (遞東西時說)。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "này", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Làm ơn cho tôi đi qua.",
              translation: "拜託讓我過去 (給路)。",
              segments: [
                { text: "Làm ơn", meaning: "拜託", tail: " " },
                { text: "cho", meaning: "給/讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "qua", meaning: "過", tail: "." },
              ],
            },
          ],
          usage_note: "Cho 也有「讓」的意思，例如 Let me go = Cho tôi đi。",
          image_file: "give.png",
        },
        {
          id: "v-16",
          term_zh: "告訴",
          related_terms: [
            {
              term_target: "Bảo",
              pronunciation: ["/baʊ/"],
              specific_note: "告知/吩咐",
              segments: [{ text: "Bảo", meaning: "告訴", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nói cho tôi biết.",
              translation: "告訴我 (說讓我知道)。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "知道", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy bảo tôi...",
              translation: "他告訴我...",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "bảo", meaning: "告訴", tail: " " },
                { text: "tôi", meaning: "我", tail: "..." },
              ],
            },
            {
              sentence: "Đừng bảo ai nhé.",
              translation: "別告訴任何人喔。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "bảo", meaning: "告訴", tail: " " },
                { text: "ai", meaning: "誰", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "「Bảo」比較口語，常還有「叫某人做某事」的意思。",
          image_file: "tell.png",
        },
        {
          id: "v-17",
          term_zh: "工作",
          related_terms: [
            {
              term_target: "Làm việc",
              pronunciation: ["/lam viək/"],
              specific_note: "做事",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "việc", meaning: "事", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đang làm việc.",
              translation: "我正在工作。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "làm việc", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "Đi làm.",
              translation: "去上班。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "làm", meaning: "做(工)", tail: "." },
              ],
            },
            {
              sentence: "Làm việc chăm chỉ.",
              translation: "工作認真。",
              segments: [
                { text: "Làm việc", meaning: "工作", tail: " " },
                { text: "chăm chỉ", meaning: "勤勞", tail: "." },
              ],
            },
          ],
          usage_note: "日常說「去上班」通常簡稱「Đi làm」。",
          image_file: "work.png",
        },
        {
          id: "v-18",
          term_zh: "喜歡",
          related_terms: [
            {
              term_target: "Thích",
              pronunciation: ["/tʰik/"],
              specific_note: "喜好",
              segments: [{ text: "Thích", meaning: "喜歡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi thích Việt Nam.",
              translation: "我喜歡越南。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "Việt Nam", meaning: "越南", tail: "." },
              ],
            },
            {
              sentence: "Bạn có thích không?",
              translation: "你喜歡嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi thích ăn phở.",
              translation: "我喜歡吃河粉。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "phở", meaning: "河粉", tail: "." },
              ],
            },
          ],
          usage_note: "Thích 是最通用的喜歡，不論對人對物。",
          image_file: "like.png",
        },
        {
          id: "v-19",
          term_zh: "起床",
          related_terms: [
            {
              term_target: "Dậy",
              pronunciation: ["/zɜj/"],
              specific_note: "起身",
              segments: [{ text: "Dậy", meaning: "起/醒", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dậy đi!",
              translation: "起床啦！",
              segments: [
                { text: "Dậy", meaning: "起床", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
            {
              sentence: "Mấy giờ bạn dậy?",
              translation: "你幾點起床？",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "dậy", meaning: "起床", tail: "?" },
              ],
            },
            {
              sentence: "Mới ngủ dậy.",
              translation: "剛睡醒。",
              segments: [
                { text: "Mới", meaning: "剛", tail: " " },
                { text: "ngủ", meaning: "睡", tail: " " },
                { text: "dậy", meaning: "起", tail: "." },
              ],
            },
          ],
          usage_note: "雖然「Thức dậy」是正式的起床，但口語都說「Dậy」。",
          image_file: "wake_up.png",
        },
        {
          id: "v-20",
          term_zh: "說話 / 講",
          related_terms: [
            {
              term_target: "Nói",
              pronunciation: ["/nɔj/"],
              specific_note: "講語言",
              segments: [{ text: "Nói", meaning: "說", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nói tiếng Việt.",
              translation: "說越南語。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "tiếng", meaning: "語言", tail: " " },
                { text: "Việt", meaning: "越", tail: "." },
              ],
            },
            {
              sentence: "Bạn biết nói tiếng Anh không?",
              translation: "你會說英文嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "biết", meaning: "會", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "tiếng", meaning: "語言", tail: " " },
                { text: "Anh", meaning: "英", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Nói chậm thôi.",
              translation: "說慢一點。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "thôi", meaning: "罷了/吧", tail: "." },
              ],
            },
          ],
          usage_note: "講某種語言，用「Nói + tiếng + 國家名」。",
          image_file: "speak.png",
        },
        {
          id: "v-21",
          term_zh: "聽見 / 聽",
          related_terms: [
            {
              term_target: "Nghe",
              pronunciation: ["/ŋɛ/"],
              specific_note: "聽/聽見",
              segments: [{ text: "Nghe", meaning: "聽", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn có nghe rõ không?",
              translation: "你聽得清楚嗎？(講電話常用)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "rõ", meaning: "清楚", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi nghe nói...",
              translation: "我聽說...",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "nói", meaning: "說", tail: "..." },
              ],
            },
            {
              sentence: "Nghe nhạc.",
              translation: "聽音樂。",
              segments: [
                { text: "Nghe", meaning: "聽", tail: " " },
                { text: "nhạc", meaning: "音樂", tail: "." },
              ],
            },
          ],
          usage_note: "「Nghe」同時有「聽(動作)」和「聽見(結果)」的意思。",
          image_file: "hear.png",
        },
        {
          id: "v-22",
          term_zh: "寫",
          related_terms: [
            {
              term_target: "Viết",
              pronunciation: ["/viət/"],
              specific_note: "書寫",
              segments: [{ text: "Viết", meaning: "寫", tail: "" }],
            },
            {
              term_target: "Ghi",
              pronunciation: ["/ɣi/"],
              specific_note: "記錄/寫下",
              segments: [{ text: "Ghi", meaning: "記", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Viết tên vào đây.",
              translation: "把名字寫在這裡。",
              segments: [
                { text: "Viết", meaning: "寫", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "vào", meaning: "進/入", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Ghi lại đi.",
              translation: "記下來吧 (筆記)。",
              segments: [
                { text: "Ghi", meaning: "記錄", tail: " " },
                { text: "lại", meaning: "下來/留存", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Bạn viết đẹp thế.",
              translation: "你字寫得真好看。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "viết", meaning: "寫", tail: " " },
                { text: "đẹp", meaning: "漂亮", tail: " " },
                { text: "thế", meaning: "那樣/真", tail: "." },
              ],
            },
          ],
          usage_note: "填表格或簽名用「Viết」，做筆記或記帳常用「Ghi」。",
          image_file: "write.png",
        },
        {
          id: "v-23",
          term_zh: "閱讀",
          related_terms: [
            {
              term_target: "Đọc",
              pronunciation: ["/dɔkp/"],
              specific_note: "看書/讀",
              segments: [{ text: "Đọc", meaning: "讀", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đọc sách.",
              translation: "看書 / 讀書。",
              segments: [
                { text: "Đọc", meaning: "讀", tail: " " },
                { text: "sách", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "Đọc tin nhắn.",
              translation: "讀訊息。",
              segments: [
                { text: "Đọc", meaning: "讀", tail: " " },
                { text: "tin nhắn", meaning: "訊息/短信", tail: "." },
              ],
            },
            {
              sentence: "Đọc to lên.",
              translation: "唸大聲一點。",
              segments: [
                { text: "Đọc", meaning: "讀/唸", tail: " " },
                { text: "to", meaning: "大", tail: " " },
                { text: "lên", meaning: "起來", tail: "." },
              ],
            },
          ],
          usage_note: "中文說「看」書，越南語說「讀(Đọc)」書，不說 Xem sách。",
          image_file: "read.png",
        },
        {
          id: "v-24",
          term_zh: "等待",
          related_terms: [
            {
              term_target: "Đợi",
              pronunciation: ["/dəj/"],
              specific_note: "口語常用",
              segments: [{ text: "Đợi", meaning: "等", tail: "" }],
            },
            {
              term_target: "Chờ",
              pronunciation: ["/cə/"],
              specific_note: "通用",
              segments: [{ text: "Chờ", meaning: "等", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đợi một chút.",
              translation: "等一下。",
              segments: [
                { text: "Đợi", meaning: "等", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "chút", meaning: "點/下", tail: "." },
              ],
            },
            {
              sentence: "Chờ tôi với!",
              translation: "等等我！(追人時喊)",
              segments: [
                { text: "Chờ", meaning: "等", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "với", meaning: "(語氣助詞)", tail: "!" },
              ],
            },
            {
              sentence: "Đừng đợi tôi.",
              translation: "別等我。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "đợi", meaning: "等", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "「Đợi chút」是請人稍等最自然的說法。",
          image_file: "wait.png",
        },
        {
          id: "v-25",
          term_zh: "嘗試 / 試試",
          related_terms: [
            {
              term_target: "Thử",
              pronunciation: ["/tʰɨ/"],
              specific_note: "試驗/品嘗",
              segments: [{ text: "Thử", meaning: "試", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ăn thử đi.",
              translation: "吃吃看吧。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "thử", meaning: "試", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Mặc thử xem.",
              translation: "穿穿看 (買衣服時)。",
              segments: [
                { text: "Mặc", meaning: "穿", tail: " " },
                { text: "thử", meaning: "試", tail: " " },
                { text: "xem", meaning: "看", tail: "." },
              ],
            },
            {
              sentence: "Để tôi thử.",
              translation: "讓我試試。",
              segments: [
                { text: "Để", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "thử", meaning: "試", tail: "." },
              ],
            },
          ],
          usage_note:
            "試吃、試穿、試用，全部都把「Thử」放在動詞後面 (V + Thử)。",
          image_file: "try.png",
        },
        {
          id: "v-26",
          term_zh: "付錢 / 買單",
          related_terms: [
            {
              term_target: "Trả tiền",
              pronunciation: ["/tʃa tiən/"],
              specific_note: "付錢",
              segments: [
                { text: "Trả", meaning: "付/還", tail: " " },
                { text: "tiền", meaning: "錢", tail: "" },
              ],
            },
            {
              term_target: "Tính tiền",
              pronunciation: ["/tiŋ tiən/"],
              specific_note: "結帳(餐廳用)",
              segments: [
                { text: "Tính", meaning: "計算", tail: " " },
                { text: "tiền", meaning: "錢", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em ơi, tính tiền!",
              translation: "服務生，買單！",
              segments: [
                { text: "Em", meaning: "弟弟/妹妹", tail: " " },
                { text: "ơi", meaning: "喂", tail: ", " },
                { text: "tính tiền", meaning: "算錢/買單", tail: "!" },
              ],
            },
            {
              sentence: "Tôi trả tiền rồi.",
              translation: "我付過錢了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "trả tiền", meaning: "付錢", tail: " " },
                { text: "rồi", meaning: "了/已經", tail: "." },
              ],
            },
            {
              sentence: "Để tôi trả.",
              translation: "讓我來付 (請客)。",
              segments: [
                { text: "Để", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "trả", meaning: "付", tail: "." },
              ],
            },
          ],
          usage_note: "在餐廳大喊「Tính tiền」(丁-丁) 就是買單的意思。",
          image_file: "pay.png",
        },
        {
          id: "v-27",
          term_zh: "選擇 / 挑",
          related_terms: [
            {
              term_target: "Chọn",
              pronunciation: ["/cɔn/"],
              specific_note: "",
              segments: [{ text: "Chọn", meaning: "選", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chọn cái nào?",
              translation: "選哪個？",
              segments: [
                { text: "Chọn", meaning: "選", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "nào", meaning: "哪個", tail: "?" },
              ],
            },
            {
              sentence: "Bạn chọn đi.",
              translation: "你挑吧。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "chọn", meaning: "選", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Khó chọn quá.",
              translation: "好難選喔 (選擇障礙)。",
              segments: [
                { text: "Khó", meaning: "難", tail: " " },
                { text: "chọn", meaning: "選", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
          ],
          usage_note: "挑水果、選禮物都用「Chọn」。",
          image_file: "choose.png",
        },
        {
          id: "v-28",
          term_zh: "進入",
          related_terms: [
            {
              term_target: "Vào",
              pronunciation: ["/vaʊ/"],
              specific_note: "進去",
              segments: [{ text: "Vào", meaning: "進", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mời vào.",
              translation: "請進。",
              segments: [
                { text: "Mời", meaning: "邀請", tail: " " },
                { text: "vào", meaning: "進", tail: "." },
              ],
            },
            {
              sentence: "Đi vào trong.",
              translation: "進去裡面。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "vào", meaning: "進", tail: " " },
                { text: "trong", meaning: "裡面", tail: "." },
              ],
            },
            {
              sentence: "Không được vào.",
              translation: "禁止進入 (不能進)。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "được", meaning: "可以/准許", tail: " " },
                { text: "vào", meaning: "進", tail: "." },
              ],
            },
          ],
          usage_note: "「Vào」除了進門，輸入密碼也叫「Nhập」或「Vào」。",
          image_file: "enter.png",
        },
        {
          id: "v-29",
          term_zh: "住 / 待在",
          related_terms: [
            {
              term_target: "Ở",
              pronunciation: ["/ə/"],
              specific_note: "居住/在",
              segments: [{ text: "Ở", meaning: "在/住", tail: "" }],
            },
            {
              term_target: "Sống",
              pronunciation: ["/soŋm/"],
              specific_note: "生活/生存",
              segments: [{ text: "Sống", meaning: "活/生活", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn ở đâu?",
              translation: "你住哪裡？ / 你在哪裡？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "ở", meaning: "在/住", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Tôi sống ở Hà Nội.",
              translation: "我住在(生活在)河內。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "sống", meaning: "生活", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "Hà Nội", meaning: "河內", tail: "." },
              ],
            },
            {
              sentence: "Ở đây.",
              translation: "在這裡 / 住這裡。",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
          ],
          usage_note: "問人住哪或現在位置，通常用「Ở」就夠了。",
          image_file: "live.png",
        },
        {
          id: "v-30",
          term_zh: "到達 / 到了",
          related_terms: [
            {
              term_target: "Đến",
              pronunciation: ["/den/"],
              specific_note: "通用",
              segments: [{ text: "Đến", meaning: "到", tail: "" }],
            },
            {
              term_target: "Tới",
              pronunciation: ["/təj/"],
              specific_note: "南方常用",
              segments: [{ text: "Tới", meaning: "到", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đến chưa?",
              translation: "到了沒？",
              segments: [
                { text: "Đến", meaning: "到", tail: " " },
                { text: "chưa", meaning: "尚未/沒", tail: "?" },
              ],
            },
            {
              sentence: "Đến nơi rồi.",
              translation: "到目的地了。",
              segments: [
                { text: "Đến", meaning: "到", tail: " " },
                { text: "nơi", meaning: "地方", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Xe sắp đến.",
              translation: "車快到了。",
              segments: [
                { text: "Xe", meaning: "車", tail: " " },
                { text: "sắp", meaning: "快要", tail: " " },
                { text: "đến", meaning: "到", tail: "." },
              ],
            },
          ],
          usage_note: "搭計程車快到時，司機會說「Đến rồi」(到了)。",
          image_file: "arrive.png",
        },
        {
          id: "v-31",
          term_zh: "走路",
          related_terms: [
            {
              term_target: "Đi bộ",
              pronunciation: ["/di bo/"],
              specific_note: "",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "bộ", meaning: "部/步", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đi bộ đi học.",
              translation: "我走路去上學。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi bộ", meaning: "走路", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "học", meaning: "學", tail: "." },
              ],
            },
            {
              sentence: "Đi dạo.",
              translation: "去散步。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "dạo", meaning: "逛/遊蕩", tail: "." },
              ],
            },
            {
              sentence: "Phố đi bộ ở đâu?",
              translation: "步行街(徒步區)在哪？",
              segments: [
                { text: "Phố", meaning: "街", tail: " " },
                { text: "đi bộ", meaning: "走路", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
          ],
          usage_note: "「Phố đi bộ」是越南大城市週末常見的景點。",
          image_file: "walk.png",
        },
        {
          id: "v-32",
          term_zh: "打開 (門/書/店)",
          related_terms: [
            {
              term_target: "Mở",
              pronunciation: ["/mə/"],
              specific_note: "",
              segments: [{ text: "Mở", meaning: "開", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mở cửa ra.",
              translation: "把門打開。",
              segments: [
                { text: "Mở", meaning: "開", tail: " " },
                { text: "cửa", meaning: "門", tail: " " },
                { text: "ra", meaning: "出/開", tail: "." },
              ],
            },
            {
              sentence: "Quán có mở không?",
              translation: "店有開嗎？",
              segments: [
                { text: "Quán", meaning: "店", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "mở", meaning: "開", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Mở máy lạnh.",
              translation: "開冷氣 (電器也可用)。",
              segments: [
                { text: "Mở", meaning: "開", tail: " " },
                { text: "máy", meaning: "機器", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
              ],
            },
          ],
          usage_note: "開門、開店、開冷氣、開瓶蓋都用「Mở」。",
          image_file: "open.png",
        },
        {
          id: "v-33",
          term_zh: "關閉 / 關",
          related_terms: [
            {
              term_target: "Đóng",
              pronunciation: ["/dɔŋm/"],
              specific_note: "關門/蓋上",
              segments: [{ text: "Đóng", meaning: "關/闔", tail: "" }],
            },
            {
              term_target: "Tắt",
              pronunciation: ["/tat/"],
              specific_note: "關電器/火",
              segments: [{ text: "Tắt", meaning: "熄滅/關掉", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đóng cửa lại.",
              translation: "把門關上。",
              segments: [
                { text: "Đóng", meaning: "關", tail: " " },
                { text: "cửa", meaning: "門", tail: " " },
                { text: "lại", meaning: "回來/攏", tail: "." },
              ],
            },
            {
              sentence: "Quán đóng cửa rồi.",
              translation: "店已經關門了。",
              segments: [
                { text: "Quán", meaning: "店", tail: " " },
                { text: "đóng cửa", meaning: "關門", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tắt đèn.",
              translation: "關燈 (電器用 Tắt)。",
              segments: [
                { text: "Tắt", meaning: "關掉", tail: " " },
                { text: "đèn", meaning: "燈", tail: "." },
              ],
            },
          ],
          usage_note: "物理關閉用「Đóng」，關電源用「Tắt」。",
          image_file: "close.png",
        },
        {
          id: "v-34",
          term_zh: "幫助 / 救",
          related_terms: [
            {
              term_target: "Giúp",
              pronunciation: ["/zup/"],
              specific_note: "幫忙",
              segments: [{ text: "Giúp", meaning: "幫", tail: "" }],
            },
            {
              term_target: "Cứu",
              pronunciation: ["/kɨu/"],
              specific_note: "救命",
              segments: [{ text: "Cứu", meaning: "救", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Giúp tôi với.",
              translation: "幫幫我。",
              segments: [
                { text: "Giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "với", meaning: "(語氣助詞)", tail: "." },
              ],
            },
            {
              sentence: "Cần giúp gì không?",
              translation: "需要幫忙什麼嗎？",
              segments: [
                { text: "Cần", meaning: "需要", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Cứu tôi!",
              translation: "救我！(緊急)",
              segments: [
                { text: "Cứu", meaning: "救", tail: " " },
                { text: "tôi", meaning: "我", tail: "!" },
              ],
            },
          ],
          usage_note: "日常互助用「Giúp」，遇到危險喊「Cứu」。",
          image_file: "help.png",
        },
        {
          id: "v-35",
          term_zh: "帶 / 拿",
          related_terms: [
            {
              term_target: "Mang",
              pronunciation: ["/maŋ/"],
              specific_note: "攜帶(北)",
              segments: [{ text: "Mang", meaning: "帶", tail: "" }],
            },
            {
              term_target: "Đem",
              pronunciation: ["/dɛm/"],
              specific_note: "攜帶(南)",
              segments: [{ text: "Đem", meaning: "帶", tail: "" }],
            },
            {
              term_target: "Cầm",
              pronunciation: ["/kəm/"],
              specific_note: "拿著/握著",
              segments: [{ text: "Cầm", meaning: "拿", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mang về.",
              translation: "外帶 (帶回去)。",
              segments: [
                { text: "Mang", meaning: "帶", tail: " " },
                { text: "về", meaning: "回", tail: "." },
              ],
            },
            {
              sentence: "Nhớ mang tiền.",
              translation: "記得帶錢。",
              segments: [
                { text: "Nhớ", meaning: "記得/想念", tail: " " },
                { text: "mang", meaning: "帶", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Cầm lấy.",
              translation: "拿著 (遞東西給人)。",
              segments: [
                { text: "Cầm", meaning: "拿/握", tail: " " },
                { text: "lấy", meaning: "取", tail: "." },
              ],
            },
          ],
          usage_note: "買飲料要外帶，說「Mang về」即可。",
          image_file: "bring.png",
        },
        {
          id: "v-36",
          term_zh: "需要",
          related_terms: [
            {
              term_target: "Cần",
              pronunciation: ["/kən/"],
              specific_note: "必須",
              segments: [{ text: "Cần", meaning: "需要", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi cần đi vệ sinh.",
              translation: "我需要去廁所。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "vệ sinh", meaning: "衛生/廁所", tail: "." },
              ],
            },
            {
              sentence: "Chỉ cần 5 phút.",
              translation: "只需要5分鐘。",
              segments: [
                { text: "Chỉ", meaning: "只", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "5", meaning: "五", tail: " " },
                { text: "phút", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "Cần phải đi ngay.",
              translation: "必須馬上走。",
              segments: [
                { text: "Cần", meaning: "需", tail: " " },
                { text: "phải", meaning: "必須", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "ngay", meaning: "馬上/立即", tail: "." },
              ],
            },
          ],
          usage_note: "表示需求或必要性。",
          image_file: "need.png",
        },
        {
          id: "v-37",
          term_zh: "使用 / 用",
          related_terms: [
            {
              term_target: "Dùng",
              pronunciation: ["/zuŋm/"],
              specific_note: "口語",
              segments: [{ text: "Dùng", meaning: "用", tail: "" }],
            },
            {
              term_target: "Sử dụng",
              pronunciation: ["/sɨ zuŋm/"],
              specific_note: "正式",
              segments: [
                { text: "Sử", meaning: "使", tail: " " },
                { text: "dụng", meaning: "用", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Dùng đũa.",
              translation: "用筷子。",
              segments: [
                { text: "Dùng", meaning: "用", tail: " " },
                { text: "đũa", meaning: "筷子", tail: "." },
              ],
            },
            {
              sentence: "Bạn dùng gì?",
              translation: "你要用(吃)什麼？(點餐時)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "dùng", meaning: "用", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Cái này dùng thế nào?",
              translation: "這個怎麼用？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "dùng", meaning: "用", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
          ],
          usage_note: "在餐廳，「Dùng」也可以代表「吃/喝」，比較文雅。",
          image_file: "use.png",
        },
        {
          id: "v-38",
          term_zh: "變成 / 成為",
          related_terms: [
            {
              term_target: "Trở thành",
              pronunciation: ["/tʃə tʰaɲ/"],
              specific_note: "成為(名詞)",
              segments: [
                { text: "Trở", meaning: "轉/返", tail: " " },
                { text: "thành", meaning: "成", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn trở thành bác sĩ.",
              translation: "我想成為醫生。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "trở thành", meaning: "成為", tail: " " },
                { text: "bác sĩ", meaning: "醫生", tail: "." },
              ],
            },
            {
              sentence: "Cơm thành cháo.",
              translation: "飯變成粥了 (搞砸了/煮爛了)。",
              segments: [
                { text: "Cơm", meaning: "飯", tail: " " },
                { text: "thành", meaning: "成/變", tail: " " },
                { text: "cháo", meaning: "粥", tail: "." },
              ],
            },
            {
              sentence: "Trở nên xinh đẹp.",
              translation: "變得漂亮 (形容詞用Trở nên)。",
              segments: [
                { text: "Trở nên", meaning: "變得", tail: " " },
                { text: "xinh đẹp", meaning: "漂亮", tail: "." },
              ],
            },
          ],
          usage_note: "變+名詞用「Trở thành」，變+形容詞用「Trở nên」。",
          image_file: "become.png",
        },
        {
          id: "v-39",
          term_zh: "開始",
          related_terms: [
            {
              term_target: "Bắt đầu",
              pronunciation: ["/bat dəw/"],
              specific_note: "",
              segments: [
                { text: "Bắt", meaning: "抓/捕", tail: " " },
                { text: "đầu", meaning: "頭", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bắt đầu thôi!",
              translation: "開始吧！",
              segments: [
                { text: "Bắt đầu", meaning: "開始", tail: " " },
                { text: "thôi", meaning: "罷了/語氣詞", tail: "!" },
              ],
            },
            {
              sentence: "Khi nào bắt đầu?",
              translation: "什麼時候開始？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bắt đầu", meaning: "開始", tail: "?" },
              ],
            },
            {
              sentence: "Chúng ta bắt đầu làm việc.",
              translation: "我們開始工作。",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "bắt đầu", meaning: "開始", tail: " " },
                { text: "làm việc", meaning: "工作", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思是「抓頭」，引申為開始。",
          image_file: "start.png",
        },
        {
          id: "v-41",
          term_zh: "結束 / 完成",
          related_terms: [
            {
              term_target: "Xong",
              pronunciation: ["/sawŋm/"],
              specific_note: "口語最常用",
              segments: [{ text: "Xong", meaning: "完/結束", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Làm xong chưa?",
              translation: "做完了沒？",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "xong", meaning: "完", tail: " " },
                { text: "chưa", meaning: "尚未/沒", tail: "?" },
              ],
            },
            {
              sentence: "Tôi ăn xong rồi.",
              translation: "我吃飽(完)了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "xong", meaning: "完", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Hết giờ rồi.",
              translation: "時間到了 (結束了)。",
              segments: [
                { text: "Hết", meaning: "盡/完", tail: " " },
                { text: "giờ", meaning: "時間/點", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "口語中「Xong」放在動詞後面表示動作完成。",
          image_file: "finish.png",
        },
        {
          id: "v-42",
          term_zh: "停止 / 停",
          related_terms: [
            {
              term_target: "Dừng",
              pronunciation: ["/zɨŋ/"],
              specific_note: "動作停止",
              segments: [{ text: "Dừng", meaning: "停", tail: "" }],
            },
            {
              term_target: "Thôi",
              pronunciation: ["/tʰoj/"],
              specific_note: "停止做某事/罷了",
              segments: [{ text: "Thôi", meaning: "止/罷", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dừng xe ở đây.",
              translation: "車停這裡 (搭計程車用)。",
              segments: [
                { text: "Dừng", meaning: "停", tail: " " },
                { text: "xe", meaning: "車", tail: " " },
                { text: "ở đây", meaning: "在這", tail: "." },
              ],
            },
            {
              sentence: "Thôi đi!",
              translation: "夠了喔！/ 別鬧了！",
              segments: [
                { text: "Thôi", meaning: "停止", tail: " " },
                { text: "đi", meaning: "吧(語氣詞)", tail: "!" },
              ],
            },
            {
              sentence: "Đèn đỏ phải dừng lại.",
              translation: "紅燈必須停下來。",
              segments: [
                { text: "Đèn đỏ", meaning: "紅燈", tail: " " },
                { text: "phải", meaning: "必須", tail: " " },
                { text: "dừng", meaning: "停", tail: " " },
                { text: "lại", meaning: "下來", tail: "." },
              ],
            },
          ],
          usage_note: "叫司機停車用「Dừng」，叫人閉嘴或別鬧了用「Thôi」。",
          image_file: "stop.png",
        },
        {
          id: "v-43",
          term_zh: "記住 / 記得",
          related_terms: [
            {
              term_target: "Nhớ",
              pronunciation: ["/ɲə/"],
              specific_note: "",
              segments: [{ text: "Nhớ", meaning: "記/想念", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Có nhớ tôi không?",
              translation: "記得我嗎？",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "nhớ", meaning: "記得", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi không nhớ.",
              translation: "我不記得了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "nhớ", meaning: "記得", tail: "." },
              ],
            },
            {
              sentence: "Nhớ mua quà nhé.",
              translation: "記得買禮物喔。",
              segments: [
                { text: "Nhớ", meaning: "記得", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "quà", meaning: "禮物", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note:
            "注意：「Nhớ」有兩個意思，一個是「記得」，一個是「想念」(例如：Em nhớ anh - 我想你)。",
          image_file: "remember.png",
        },
        {
          id: "v-44",
          term_zh: "談話 / 聊天",
          related_terms: [
            {
              term_target: "Nói chuyện",
              pronunciation: ["/nɔj cwiən/"],
              specific_note: "交談",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "chuyện", meaning: "故事/事情", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nói chuyện với tôi đi.",
              translation: "跟我聊聊吧。",
              segments: [
                { text: "Nói chuyện", meaning: "說話", tail: " " },
                { text: "với", meaning: "和/跟", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Chúng ta cần nói chuyện.",
              translation: "我們需要談談。",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "nói chuyện", meaning: "談話", tail: "." },
              ],
            },
            {
              sentence: "Đừng nói chuyện riêng.",
              translation: "不要私下講話 (上課/開會時)。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "nói chuyện", meaning: "聊天", tail: " " },
                { text: "riêng", meaning: "私人的", tail: "." },
              ],
            },
          ],
          usage_note:
            "Nói 是單方面的「說」，Nói chuyện 是雙向的「聊天/談話」。",
          image_file: "talk.png",
        },
        {
          id: "v-45",
          term_zh: "見面",
          related_terms: [
            {
              term_target: "Gặp",
              pronunciation: ["/gap/"],
              specific_note: "",
              segments: [{ text: "Gặp", meaning: "遇見", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hẹn gặp lại.",
              translation: "再見 (約好再見面)。",
              segments: [
                { text: "Hẹn", meaning: "約定", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "lại", meaning: "再", tail: "." },
              ],
            },
            {
              sentence: "Rất vui được gặp bạn.",
              translation: "很高興認識(見到)你。",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "高興", tail: " " },
                { text: "được", meaning: "得到", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Tối nay gặp nhé.",
              translation: "今晚見喔。",
              segments: [
                { text: "Tối nay", meaning: "今晚", tail: " " },
                { text: "gặp", meaning: "見面", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "跟朋友約時間通常說「Hẹn gặp」(約見)。",
          image_file: "meet.png",
        },
        {
          id: "v-46",
          term_zh: "服用(藥) / 搭乘(車)",
          related_terms: [
            {
              term_target: "Uống thuốc",
              pronunciation: ["/uəŋ tʰuək/"],
              specific_note: "吃藥(直譯:喝藥)",
              segments: [
                { text: "Uống", meaning: "喝", tail: " " },
                { text: "thuốc", meaning: "藥", tail: "" },
              ],
            },
            {
              term_target: "Đi xe",
              pronunciation: ["/di sɛ/"],
              specific_note: "搭車(直譯:走車)",
              segments: [
                { text: "Đi", meaning: "去/搭", tail: " " },
                { text: "xe", meaning: "車", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đi xe buýt.",
              translation: "我搭公車。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "搭乘", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: "." },
              ],
            },
            {
              sentence: "Nhớ uống thuốc.",
              translation: "記得吃藥。",
              segments: [
                { text: "Nhớ", meaning: "記得", tail: " " },
                { text: "uống", meaning: "喝", tail: " " },
                { text: "thuốc", meaning: "藥", tail: "." },
              ],
            },
            {
              sentence: "Nghỉ ngơi đi.",
              translation: "休息一下吧 (Take a break)。",
              segments: [
                { text: "Nghỉ ngơi", meaning: "休息", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南語沒有萬用的「Take」。搭車用「Đi」，吃藥用「Uống」，休息用「Nghỉ」。",
          image_file: "take.png",
        },
        {
          id: "v-47",
          term_zh: "放 / 置",
          related_terms: [
            {
              term_target: "Để",
              pronunciation: ["/de/"],
              specific_note: "放置",
              segments: [{ text: "Để", meaning: "放", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Để ở đây.",
              translation: "放這裡。",
              segments: [
                { text: "Để", meaning: "放", tail: " " },
                { text: "ở đây", meaning: "在這", tail: "." },
              ],
            },
            {
              sentence: "Mặc áo vào.",
              translation: "把衣服穿上 (Put on 翻成 Mặc)。",
              segments: [
                { text: "Mặc", meaning: "穿", tail: " " },
                { text: "áo", meaning: "衣服", tail: " " },
                { text: "vào", meaning: "進/上", tail: "." },
              ],
            },
            {
              sentence: "Để tôi xem.",
              translation: "讓我看看 (Let/Put me see)。",
              segments: [
                { text: "Để", meaning: "讓/放", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xem", meaning: "看", tail: "." },
              ],
            },
          ],
          usage_note: "放東西用「Để」，穿衣服用「Mặc」，穿鞋用「Đi」。",
          image_file: "put.png",
        },
        {
          id: "v-48",
          term_zh: "吃",
          related_terms: [
            {
              term_target: "Ăn",
              pronunciation: ["/an/"],
              specific_note: "",
              segments: [{ text: "Ăn", meaning: "吃", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ăn cơm chưa?",
              translation: "吃飽了嗎？(越南人見面問候語)",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "cơm", meaning: "飯", tail: " " },
                { text: "chưa", meaning: "沒", tail: "?" },
              ],
            },
            {
              sentence: "Hôm nay ăn gì?",
              translation: "今天吃什麼？",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Mời ăn cơm.",
              translation: "請用餐 (吃飯前禮貌用語)。",
              segments: [
                { text: "Mời", meaning: "邀請/請", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "cơm", meaning: "飯", tail: "." },
              ],
            },
          ],
          usage_note:
            "「Ăn cơm chưa?」就像台灣人問「呷飽沒？」，是關心對方的意思。",
          image_file: "eat.png",
        },
        {
          id: "v-49",
          term_zh: "睡覺",
          related_terms: [
            {
              term_target: "Ngủ",
              pronunciation: ["/ŋu/"],
              specific_note: "",
              segments: [{ text: "Ngủ", meaning: "睡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi ngủ thôi.",
              translation: "去睡覺吧。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "ngủ", meaning: "睡", tail: " " },
                { text: "thôi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Chúc ngủ ngon.",
              translation: "晚安 (祝你睡得香)。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "ngủ", meaning: "睡", tail: " " },
                { text: "ngon", meaning: "好吃/香甜", tail: "." },
              ],
            },
            {
              sentence: "Ngủ quên.",
              translation: "睡過頭了。",
              segments: [
                { text: "Ngủ", meaning: "睡", tail: " " },
                { text: "quên", meaning: "忘記", tail: "." },
              ],
            },
          ],
          usage_note: "午睡可以說「Ngủ trưa」。",
          image_file: "sleep.png",
        },
        {
          id: "v-50",
          term_zh: "寄送 / 傳",
          related_terms: [
            {
              term_target: "Gửi",
              pronunciation: ["/ɣɨj/"],
              specific_note: "",
              segments: [{ text: "Gửi", meaning: "寄/送", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Gửi tin nhắn.",
              translation: "傳簡訊/訊息。",
              segments: [
                { text: "Gửi", meaning: "傳送", tail: " " },
                { text: "tin nhắn", meaning: "訊息", tail: "." },
              ],
            },
            {
              sentence: "Gửi xe ở đâu?",
              translation: "哪裡可以寄車(停車)？",
              segments: [
                { text: "Gửi", meaning: "寄放", tail: " " },
                { text: "xe", meaning: "車", tail: " " },
                { text: "ở đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Cho tôi gửi lời chào.",
              translation: "替我傳達問候。",
              segments: [
                { text: "Cho", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "gửi", meaning: "寄/傳", tail: " " },
                { text: "lLời chào", meaning: "問候", tail: "." },
              ],
            },
          ],
          usage_note:
            "在越南停車通常要收費且有人看管，這動作叫「Gửi xe」(寄車)。",
          image_file: "send.png",
        },
        {
          id: "v-51",
          term_zh: "開車 / 駕駛",
          related_terms: [
            {
              term_target: "Lái xe",
              pronunciation: ["/laj sɛ/"],
              specific_note: "駕駛車輛",
              segments: [
                { text: "Lái", meaning: "駕駛", tail: " " },
                { text: "xe", meaning: "車", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn biết lái xe không?",
              translation: "你會開車嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "biết", meaning: "會/知道", tail: " " },
                { text: "lái xe", meaning: "開車", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Lái xe cẩn thận nhé.",
              translation: "開車(騎車)小心喔。",
              segments: [
                { text: "Lái xe", meaning: "駕駛", tail: " " },
                { text: "cẩn thận", meaning: "謹慎/小心", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Tôi đang lái xe.",
              translation: "我正在開車。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "lái xe", meaning: "開車", tail: "." },
              ],
            },
          ],
          usage_note:
            "雖然「Lái」是駕駛，但日常騎機車也常直接說「Đi xe máy」(走機車)。",
          image_file: "drive.png",
        },
        {
          id: "v-52",
          term_zh: "學習 / 讀書",
          related_terms: [
            {
              term_target: "Học",
              pronunciation: ["/hɔkp/"],
              specific_note: "",
              segments: [{ text: "Học", meaning: "學", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Học tiếng Việt.",
              translation: "學越南語。",
              segments: [
                { text: "Học", meaning: "學", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: "." },
              ],
            },
            {
              sentence: "Học hành chăm chỉ.",
              translation: "用功讀書。",
              segments: [
                { text: "Học hành", meaning: "學習", tail: " " },
                { text: "chăm chỉ", meaning: "勤奮", tail: "." },
              ],
            },
            {
              sentence: "Con đi học đây.",
              translation: "我去上學囉 (小孩對父母說)。",
              segments: [
                { text: "Con", meaning: "孩兒/我", tail: " " },
                { text: "đi học", meaning: "上學/去學", tail: " " },
                { text: "đây", meaning: "了(語助詞)", tail: "." },
              ],
            },
          ],
          usage_note: "單純的「學」或「上學」都用 Hoc。",
          image_file: "study.png",
        },
        {
          id: "v-53",
          term_zh: "回去",
          related_terms: [
            {
              term_target: "Về",
              pronunciation: ["/ve/"],
              specific_note: "回家/返回",
              segments: [{ text: "Về", meaning: "回/歸", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi về nhà.",
              translation: "我回家。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "về", meaning: "回", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Khi nào về?",
              translation: "什麼時候回去？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "về", meaning: "回", tail: "?" },
              ],
            },
            {
              sentence: "Đi về thôi.",
              translation: "我們回去吧。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "về", meaning: "回", tail: " " },
                { text: "thôi", meaning: "吧", tail: "." },
              ],
            },
          ],
          usage_note: "越南人說「Về」通常就隱含了「回家」的意思。",
          image_file: "go_back.png",
        },
        {
          id: "v-54",
          term_zh: "了解 / 懂",
          related_terms: [
            {
              term_target: "Hiểu",
              pronunciation: ["/hjəw/"],
              specific_note: "明白意思",
              segments: [{ text: "Hiểu", meaning: "懂", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi hiểu rồi.",
              translation: "我懂了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "hiểu", meaning: "懂", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Bạn có hiểu không?",
              translation: "你懂嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "hiểu", meaning: "懂", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Không hiểu gì hết.",
              translation: "完全聽不懂 / 什麼都不懂。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "hiểu", meaning: "懂", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "hết", meaning: "完/全", tail: "." },
              ],
            },
          ],
          usage_note:
            "聽不懂對方說話時，直接搖頭說「Không hiểu」(空-hiew) 即可。",
          image_file: "understand.png",
        },
      ],
    },
    {
      id: "adjectives-vi",
      name: "常用形容詞",
      items: [
        {
          id: "adj-01",
          term_zh: "好的",
          related_terms: [
            {
              term_target: "Tốt",
              pronunciation: ["/tot/"],
              specific_note: "品質好/人品好",
              segments: [{ text: "Tốt", meaning: "好", tail: "" }],
            },
            {
              term_target: "Hay",
              pronunciation: ["/haj/"],
              specific_note: "有趣/精彩(書/電影)",
              segments: [{ text: "Hay", meaning: "好/有趣", tail: "" }],
            },
            {
              term_target: "Ngon",
              pronunciation: ["/ŋɔn/"],
              specific_note: "好吃/美味",
              segments: [{ text: "Ngon", meaning: "好吃", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Người tốt.",
              translation: "好人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Phim này hay lắm.",
              translation: "這部電影很好看(精彩)。",
              segments: [
                { text: "Phim", meaning: "電影", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "hay", meaning: "精彩/好", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Món này ngon.",
              translation: "這道菜很好吃。",
              segments: [
                { text: "Món", meaning: "菜", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "ngon", meaning: "好吃", tail: "." },
              ],
            },
          ],
          usage_note:
            "中文的「好」在越文分很細：人好用 Tốt，書/電影好用 Hay，食物好用 Ngon。",
          image_file: "good.png",
        },
        {
          id: "adj-02",
          term_zh: "壞的",
          related_terms: [
            {
              term_target: "Xấu",
              pronunciation: ["/səw/"],
              specific_note: "壞/醜",
              segments: [{ text: "Xấu", meaning: "壞", tail: "" }],
            },
            {
              term_target: "Hư",
              pronunciation: ["/hɨ/"],
              specific_note: "損壞/變質/不聽話",
              segments: [{ text: "Hư", meaning: "壞掉", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Người xấu.",
              translation: "壞人 (或醜人)。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "xấu", meaning: "壞/醜", tail: "." },
              ],
            },
            {
              sentence: "Xe bị hư rồi.",
              translation: "車子壞掉了。",
              segments: [
                { text: "Xe", meaning: "車", tail: " " },
                { text: "bị", meaning: "被/遭", tail: " " },
                { text: "hư", meaning: "壞", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tin xấu.",
              translation: "壞消息。",
              segments: [
                { text: "Tin", meaning: "消息/信", tail: " " },
                { text: "xấu", meaning: "壞", tail: "." },
              ],
            },
          ],
          usage_note: "東西壞掉用「Hư」，人品壞或長相醜用「Xấu」。",
          image_file: "bad.png",
        },
        {
          id: "adj-03",
          term_zh: "新的",
          related_terms: [
            {
              term_target: "Mới",
              pronunciation: ["/məj/"],
              specific_note: "",
              segments: [{ text: "Mới", meaning: "新", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Điện thoại mới.",
              translation: "新手機。",
              segments: [
                { text: "Điện thoại", meaning: "電話/手機", tail: " " },
                { text: "mới", meaning: "新", tail: "." },
              ],
            },
            {
              sentence: "Chúc Mừng Năm Mới!",
              translation: "新年快樂！",
              segments: [
                { text: "Chúc Mừng", meaning: "祝賀", tail: " " },
                { text: "Năm", meaning: "年", tail: " " },
                { text: "Mới", meaning: "新", tail: "!" },
              ],
            },
            {
              sentence: "Bạn mới.",
              translation: "新朋友。",
              segments: [
                { text: "Bạn", meaning: "朋友", tail: " " },
                { text: "mới", meaning: "新", tail: "." },
              ],
            },
          ],
          usage_note: "形容詞放在名詞後，所以是「手機 + 新」。",
          image_file: "new.png",
        },
        {
          id: "adj-04",
          term_zh: "第一 / 首先",
          related_terms: [
            {
              term_target: "Đầu tiên",
              pronunciation: ["/dəw tiən/"],
              specific_note: "首先/最初",
              segments: [{ text: "Đầu tiên", meaning: "第一/首先", tail: "" }],
            },
            {
              term_target: "Thứ nhất",
              pronunciation: ["/tʰɨ ɲət/"],
              specific_note: "排名第一",
              segments: [{ text: "Thứ nhất", meaning: "第一", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lần đầu tiên.",
              translation: "第一次。",
              segments: [
                { text: "Lần", meaning: "次", tail: " " },
                { text: "đầu tiên", meaning: "最初/第一", tail: "." },
              ],
            },
            {
              sentence: "Người đầu tiên.",
              translation: "第一個人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "đầu tiên", meaning: "第一", tail: "." },
              ],
            },
            {
              sentence: "Trước hết, cảm ơn bạn.",
              translation: "首先，謝謝你。",
              segments: [
                { text: "Trước hết", meaning: "首先/先", tail: ", " },
                { text: "cảm ơn", meaning: "謝謝", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
          ],
          usage_note: "順序上的第一常用「Đầu tiên」。",
          image_file: "first.png",
        },
        {
          id: "adj-05",
          term_zh: "上一個 / 最後",
          related_terms: [
            {
              term_target: "Trước",
              pronunciation: ["/tʃɨək/"],
              specific_note: "之前的(時間)",
              segments: [{ text: "Trước", meaning: "前", tail: "" }],
            },
            {
              term_target: "Cuối cùng",
              pronunciation: ["/kwoj kuŋm/"],
              specific_note: "最後的(順序)",
              segments: [{ text: "Cuối cùng", meaning: "最後", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tuần trước.",
              translation: "上週 (週 + 前)。",
              segments: [
                { text: "Tuần", meaning: "週/星期", tail: " " },
                { text: "trước", meaning: "前", tail: "." },
              ],
            },
            {
              sentence: "Cơ hội cuối cùng.",
              translation: "最後一次機會。",
              segments: [
                { text: "Cơ hội", meaning: "機會", tail: " " },
                { text: "cuối cùng", meaning: "最後", tail: "." },
              ],
            },
            {
              sentence: "Tối qua.",
              translation: "昨晚 (Last night)。",
              segments: [
                { text: "Tối", meaning: "晚", tail: " " },
                { text: "qua", meaning: "過/昨", tail: "." },
              ],
            },
          ],
          usage_note:
            "時間上的「上一個」用 Trước (前)，順序上的「最後」用 Cuối cùng。",
          image_file: "last.png",
        },
        {
          id: "adj-06",
          term_zh: "下一個",
          related_terms: [
            {
              term_target: "Tiếp theo",
              pronunciation: ["/tiəp tʰɛw/"],
              specific_note: "接下來",
              segments: [
                { text: "Tiếp theo", meaning: "接續/下一個", tail: "" },
              ],
            },
            {
              term_target: "Sau",
              pronunciation: ["/saw/"],
              specific_note: "之後的(時間)",
              segments: [{ text: "Sau", meaning: "後", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tuần sau.",
              translation: "下週 (週 + 後)。",
              segments: [
                { text: "Tuần", meaning: "週", tail: " " },
                { text: "sau", meaning: "後", tail: "." },
              ],
            },
            {
              sentence: "Ai tiếp theo?",
              translation: "下一位是誰？",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "tiếp theo", meaning: "下一個", tail: "?" },
              ],
            },
            {
              sentence: "Hẹn gặp lại lần sau.",
              translation: "下次見。",
              segments: [
                { text: "Hẹn", meaning: "約", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "lần", meaning: "次", tail: " " },
                { text: "sau", meaning: "後", tail: "." },
              ],
            },
          ],
          usage_note: "排隊時叫下一位常說「Người tiếp theo」。",
          image_file: "next.png",
        },
        {
          id: "adj-07",
          term_zh: "長的 / 久的",
          related_terms: [
            {
              term_target: "Dài",
              pronunciation: ["/zaɪ/"],
              specific_note: "長度",
              segments: [{ text: "Dài", meaning: "長", tail: "" }],
            },
            {
              term_target: "Lâu",
              pronunciation: ["/ləw/"],
              specific_note: "時間久",
              segments: [{ text: "Lâu", meaning: "久", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tóc dài.",
              translation: "長髮。",
              segments: [
                { text: "Tóc", meaning: "頭髮", tail: " " },
                { text: "dài", meaning: "長", tail: "." },
              ],
            },
            {
              sentence: "Chờ lâu quá.",
              translation: "等太久了。",
              segments: [
                { text: "Chờ", meaning: "等", tail: " " },
                { text: "lâu", meaning: "久", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Bao lâu rồi?",
              translation: "多久了？",
              segments: [
                { text: "Bao", meaning: "多", tail: " " },
                { text: "lâu", meaning: "久", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
          ],
          usage_note: "物體長用 Dài，時間久用 Lâu。",
          image_file: "long.png",
        },
        {
          id: "adj-08",
          term_zh: "大的",
          related_terms: [
            {
              term_target: "To",
              pronunciation: ["/tɔ/"],
              specific_note: "體積大(北/通用)",
              segments: [{ text: "To", meaning: "大", tail: "" }],
            },
            {
              term_target: "Lớn",
              pronunciation: ["/ləːn/"],
              specific_note: "長大/大(南/通用)",
              segments: [{ text: "Lớn", meaning: "大", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhà to.",
              translation: "大房子。",
              segments: [
                { text: "Nhà", meaning: "房子", tail: " " },
                { text: "to", meaning: "大", tail: "." },
              ],
            },
            {
              sentence: "Con chó này to quá.",
              translation: "這隻狗好大。",
              segments: [
                { text: "Con", meaning: "隻(動物量詞)", tail: " " },
                { text: "chó", meaning: "狗", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "to", meaning: "大", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy lớn rồi.",
              translation: "他長大了。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "lớn", meaning: "大/成長", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "To 偏向物理體積，Lớn 包含年紀或規模。",
          image_file: "big.png",
        },
        {
          id: "adj-09",
          term_zh: "小的",
          related_terms: [
            {
              term_target: "Nhỏ",
              pronunciation: ["/ɲɔ/"],
              specific_note: "通用",
              segments: [{ text: "Nhỏ", meaning: "小", tail: "" }],
            },
            {
              term_target: "Bé",
              pronunciation: ["/bɛ/"],
              specific_note: "年紀小/小巧",
              segments: [{ text: "Bé", meaning: "小/幼小", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này nhỏ quá.",
              translation: "這個太小了。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "nhỏ", meaning: "小", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Em bé.",
              translation: "小嬰兒 / 小朋友。",
              segments: [
                { text: "Em", meaning: "弟妹/孩童", tail: " " },
                { text: "bé", meaning: "小", tail: "." },
              ],
            },
            {
              sentence: "Chuyện nhỏ.",
              translation: "小事 (No problem)。",
              segments: [
                { text: "Chuyện", meaning: "事情", tail: " " },
                { text: "nhỏ", meaning: "小", tail: "." },
              ],
            },
          ],
          usage_note: "買衣服尺寸太小可以說「Nhỏ quá」。",
          image_file: "small.png",
        },
        {
          id: "adj-10",
          term_zh: "多的",
          related_terms: [
            {
              term_target: "Nhiều",
              pronunciation: ["/ɲiəw/"],
              specific_note: "數量多",
              segments: [{ text: "Nhiều", meaning: "多", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhiều người quá.",
              translation: "好多人。",
              segments: [
                { text: "Nhiều", meaning: "多", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Bao nhiêu tiền?",
              translation: "多少錢？(字面: 包多錢)",
              segments: [
                { text: "Bao", meaning: "包/概括", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "tiền", meaning: "錢", tail: "?" },
              ],
            },
            {
              sentence: "Cảm ơn nhiều.",
              translation: "多謝 / 非常感謝。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "nhiều", meaning: "多", tail: "." },
              ],
            },
          ],
          usage_note: "「Bao nhiêu」是詢問數量的固定用法。",
          image_file: "many.png",
        },
        {
          id: "adj-11",
          term_zh: "高的",
          related_terms: [
            {
              term_target: "Cao",
              pronunciation: ["/kaʊ/"],
              specific_note: "",
              segments: [{ text: "Cao", meaning: "高", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tòa nhà cao.",
              translation: "高樓 (高建築)。",
              segments: [
                { text: "Tòa", meaning: "座(量詞)", tail: " " },
                { text: "nhà", meaning: "房子", tail: " " },
                { text: "cao", meaning: "高", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy rất cao.",
              translation: "他很高。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "cao", meaning: "高", tail: "." },
              ],
            },
            {
              sentence: "Cao bao nhiêu?",
              translation: "多高？(身高/高度)",
              segments: [
                { text: "Cao", meaning: "高", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: "?" },
              ],
            },
          ],
          usage_note: "發音跟中文的「高」很像。",
          image_file: "tall.png",
        },
        {
          id: "adj-12",
          term_zh: "年輕的",
          related_terms: [
            {
              term_target: "Trẻ",
              pronunciation: ["/tʃɛ/"],
              specific_note: "",
              segments: [{ text: "Trẻ", meaning: "年輕", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Người trẻ.",
              translation: "年輕人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "trẻ", meaning: "年輕", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy nhìn trẻ quá.",
              translation: "她看起來好年輕。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "nhìn", meaning: "看/看起來", tail: " " },
                { text: "trẻ", meaning: "年輕", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Khi tôi còn trẻ.",
              translation: "當我還年輕的時候。",
              segments: [
                { text: "Khi", meaning: "當", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "còn", meaning: "還", tail: " " },
                { text: "trẻ", meaning: "年輕", tail: "." },
              ],
            },
          ],
          usage_note: "稱讚人可以用「Trẻ đẹp」(年輕漂亮)。",
          image_file: "young.png",
        },
        {
          id: "adj-13",
          term_zh: "老的 / 舊的",
          related_terms: [
            {
              term_target: "Già",
              pronunciation: ["/za/"],
              specific_note: "指人/動植物",
              segments: [{ text: "Già", meaning: "老", tail: "" }],
            },
            {
              term_target: "Cũ",
              pronunciation: ["/ku/"],
              specific_note: "指物品",
              segments: [{ text: "Cũ", meaning: "舊", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Người già.",
              translation: "老人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "già", meaning: "老", tail: "." },
              ],
            },
            {
              sentence: "Sách cũ.",
              translation: "舊書。",
              segments: [
                { text: "Sách", meaning: "書", tail: " " },
                { text: "cũ", meaning: "舊", tail: "." },
              ],
            },
            {
              sentence: "Bạn bao nhiêu tuổi?",
              translation: "你幾歲？(問年齡不用Old，用Tuổi)。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "?" },
              ],
            },
          ],
          usage_note: "人老了是「Già」，東西舊了是「Cũ」，不可混用。",
          image_file: "old.png",
        },
        {
          id: "adj-14",
          term_zh: "近的",
          related_terms: [
            {
              term_target: "Gần",
              pronunciation: ["/ɣən/"],
              specific_note: "",
              segments: [{ text: "Gần", meaning: "近", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Gần đây.",
              translation: "在這附近 / 最近。",
              segments: [
                { text: "Gần", meaning: "近", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Nhà vệ sinh có gần không?",
              translation: "廁所近嗎？",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "gần", meaning: "近", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Lại gần đây.",
              translation: "靠近一點 (過來近這裡)。",
              segments: [
                { text: "Lại", meaning: "來", tail: " " },
                { text: "gần", meaning: "近", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
          ],
          usage_note: "「Gần đây」也可以表示時間上的「最近」。",
          image_file: "near.png",
        },
        {
          id: "adj-15",
          term_zh: "遠的",
          related_terms: [
            {
              term_target: "Xa",
              pronunciation: ["/sa/"],
              specific_note: "",
              segments: [{ text: "Xa", meaning: "遠", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Rất xa.",
              translation: "很遠。",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "xa", meaning: "遠", tail: "." },
              ],
            },
            {
              sentence: "Bao xa?",
              translation: "有多遠？",
              segments: [
                { text: "Bao", meaning: "包/多", tail: " " },
                { text: "xa", meaning: "遠", tail: "?" },
              ],
            },
            {
              sentence: "Không xa lắm.",
              translation: "不會太遠。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "xa", meaning: "遠", tail: " " },
                { text: "lắm", meaning: "很/太", tail: "." },
              ],
            },
          ],
          usage_note: "問路時可以問「Có xa không?」(會遠嗎?)。",
          image_file: "far.png",
        },
        {
          id: "adj-16",
          term_zh: "快的",
          related_terms: [
            {
              term_target: "Nhanh",
              pronunciation: ["/ɲaɲ/"],
              specific_note: "",
              segments: [{ text: "Nhanh", meaning: "快", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chạy nhanh.",
              translation: "跑得快。",
              segments: [
                { text: "Chạy", meaning: "跑", tail: " " },
                { text: "nhanh", meaning: "快", tail: "." },
              ],
            },
            {
              sentence: "Nhanh lên!",
              translation: "快一點！",
              segments: [
                { text: "Nhanh", meaning: "快", tail: " " },
                { text: "lên", meaning: "起來", tail: "!" },
              ],
            },
            {
              sentence: "Thời gian trôi nhanh.",
              translation: "時間過得很快。",
              segments: [
                { text: "Thời gian", meaning: "時間", tail: " " },
                { text: "trôi", meaning: "流逝/漂", tail: " " },
                { text: "nhanh", meaning: "快", tail: "." },
              ],
            },
          ],
          usage_note: "趕時間時可以說「Nhanh lên」(快點)。",
          image_file: "fast.png",
        },
        {
          id: "adj-17",
          term_zh: "慢的",
          related_terms: [
            {
              term_target: "Chậm",
              pronunciation: ["/cəm/"],
              specific_note: "",
              segments: [{ text: "Chậm", meaning: "慢", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi chậm thôi.",
              translation: "走慢一點。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "thôi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Nói chậm lại.",
              translation: "說慢一點。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "lại", meaning: "下來", tail: "." },
              ],
            },
            {
              sentence: "Mạng chậm quá.",
              translation: "網路太慢了。",
              segments: [
                { text: "Mạng", meaning: "網/網路", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
          ],
          usage_note: "聽不懂外國人說話時，請說「Nói chậm」(說慢)。",
          image_file: "slow.png",
        },
        {
          id: "adj-18",
          term_zh: "熱的",
          related_terms: [
            {
              term_target: "Nóng",
              pronunciation: ["/nɔŋm/"],
              specific_note: "溫度高",
              segments: [{ text: "Nóng", meaning: "熱", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nước nóng.",
              translation: "熱水。",
              segments: [
                { text: "Nước", meaning: "水", tail: " " },
                { text: "nóng", meaning: "熱", tail: "." },
              ],
            },
            {
              sentence: "Trời nóng quá.",
              translation: "天氣太熱了。",
              segments: [
                { text: "Trời", meaning: "天", tail: " " },
                { text: "nóng", meaning: "熱", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Cẩn thận, nóng lắm.",
              translation: "小心，很燙。",
              segments: [
                { text: "Cẩn thận", meaning: "謹慎/小心", tail: ", " },
                { text: "nóng", meaning: "熱/燙", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
          ],
          usage_note: "越南南部終年炎熱，這句「Nóng quá」(太熱了) 很常聽到。",
          image_file: "hot.png",
        },
        {
          id: "adj-19",
          term_zh: "冷的",
          related_terms: [
            {
              term_target: "Lạnh",
              pronunciation: ["/laɲ/"],
              specific_note: "溫度低",
              segments: [{ text: "Lạnh", meaning: "冷", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nước lạnh.",
              translation: "冷水 / 冰水。",
              segments: [
                { text: "Nước", meaning: "水", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
              ],
            },
            {
              sentence: "Ngoài trời lạnh.",
              translation: "外面很冷。",
              segments: [
                { text: "Ngoài", meaning: "外", tail: " " },
                { text: "trời", meaning: "天", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
              ],
            },
            {
              sentence: "Tôi bị cảm lạnh.",
              translation: "我感冒了 (被冷感)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "bị", meaning: "被/遭", tail: " " },
                { text: "cảm", meaning: "感", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
              ],
            },
          ],
          usage_note: "喝飲料要加冰塊通常說「Cho đá」(給冰)，不常說冷。",
          image_file: "cold.png",
        },
        {
          id: "adj-20",
          term_zh: "乾淨的",
          related_terms: [
            {
              term_target: "Sạch",
              pronunciation: ["/sac/"],
              specific_note: "",
              segments: [{ text: "Sạch", meaning: "乾淨", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Phòng sạch sẽ.",
              translation: "乾淨的房間。",
              segments: [
                { text: "Phòng", meaning: "房間", tail: " " },
                { text: "sạch sẽ", meaning: "乾淨", tail: "." },
              ],
            },
            {
              sentence: "Nước sạch.",
              translation: "乾淨的水。",
              segments: [
                { text: "Nước", meaning: "水", tail: " " },
                { text: "sạch", meaning: "乾淨", tail: "." },
              ],
            },
            {
              sentence: "Rửa tay sạch.",
              translation: "把手洗乾淨。",
              segments: [
                { text: "Rửa", meaning: "洗", tail: " " },
                { text: "tay", meaning: "手", tail: " " },
                { text: "sạch", meaning: "乾淨", tail: "." },
              ],
            },
          ],
          usage_note: "Sạch 會讓人聯想到衛生、整潔。",
          image_file: "clean.png",
        },
        {
          id: "adj-21",
          term_zh: "髒的",
          related_terms: [
            {
              term_target: "Bẩn",
              pronunciation: ["/bən/"],
              specific_note: "髒(北)",
              segments: [{ text: "Bẩn", meaning: "髒", tail: "" }],
            },
            {
              term_target: "Dơ",
              pronunciation: ["/zə/"],
              specific_note: "髒(南)",
              segments: [{ text: "Dơ", meaning: "髒", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tay bẩn.",
              translation: "手髒。",
              segments: [
                { text: "Tay", meaning: "手", tail: " " },
                { text: "bẩn", meaning: "髒", tail: "." },
              ],
            },
            {
              sentence: "Giày của tôi bị dơ.",
              translation: "我的鞋子髒了。",
              segments: [
                { text: "Giày", meaning: "鞋子", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "bị", meaning: "被/遭", tail: " " },
                { text: "dơ", meaning: "髒", tail: "." },
              ],
            },
            {
              sentence: "Đừng chạm vào, bẩn lắm.",
              translation: "別碰，很髒。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "chạm", meaning: "觸碰", tail: " " },
                { text: "vào", meaning: "進/入", tail: ", " },
                { text: "bẩn", meaning: "髒", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
          ],
          usage_note: "北部習慣說 Bẩn，南部習慣說 Dơ。",
          image_file: "dirty.png",
        },
        {
          id: "adj-22",
          term_zh: "簡單的 / 容易的",
          related_terms: [
            {
              term_target: "Dễ",
              pronunciation: ["/ze/"],
              specific_note: "",
              segments: [{ text: "Dễ", meaning: "容易", tail: "" }],
            },
            {
              term_target: "Đơn giản",
              pronunciation: ["/dən zan/"],
              specific_note: "簡單(不複雜)",
              segments: [{ text: "Đơn giản", meaning: "簡單", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dễ lắm.",
              translation: "很簡單。",
              segments: [
                { text: "Dễ", meaning: "容易", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Tiếng Việt không dễ.",
              translation: "越南語不容易。",
              segments: [
                { text: "Tiếng Việt", meaning: "越南語", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "dễ", meaning: "容易", tail: "." },
              ],
            },
            {
              sentence: "Nghĩ đơn giản thôi.",
              translation: "想簡單一點就好。",
              segments: [
                { text: "Nghĩ", meaning: "想", tail: " " },
                { text: "đơn giản", meaning: "簡單", tail: " " },
                { text: "thôi", meaning: "罷了", tail: "." },
              ],
            },
          ],
          usage_note: "「Dễ」除了容易，也可以形容人「隨和/好相處」。",
          image_file: "easy.png",
        },
        {
          id: "adj-23",
          term_zh: "困難的",
          related_terms: [
            {
              term_target: "Khó",
              pronunciation: ["/xɔ/"],
              specific_note: "",
              segments: [{ text: "Khó", meaning: "難", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Khó quá.",
              translation: "太難了。",
              segments: [
                { text: "Khó", meaning: "難", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Câu hỏi này khó.",
              translation: "這個問題很難。",
              segments: [
                { text: "Câu hỏi", meaning: "問題", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "khó", meaning: "難", tail: "." },
              ],
            },
            {
              sentence: "Tính tình khó chịu.",
              translation: "個性很難搞(難受)。",
              segments: [
                { text: "Tính tình", meaning: "個性", tail: " " },
                { text: "khó", meaning: "難", tail: " " },
                { text: "chịu", meaning: "受/忍受", tail: "." },
              ],
            },
          ],
          usage_note: "「Khó」也可以形容人「挑剔/難搞」。",
          image_file: "difficult.png",
        },
        {
          id: "adj-24",
          term_zh: "正確的 / 對的",
          related_terms: [
            {
              term_target: "Đúng",
              pronunciation: ["/duŋm/"],
              specific_note: "",
              segments: [{ text: "Đúng", meaning: "對/正確", tail: "" }],
            },
            {
              term_target: "Chính xác",
              pronunciation: ["/ciɲ sak/"],
              specific_note: "精確",
              segments: [{ text: "Chính xác", meaning: "準確", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đúng rồi.",
              translation: "沒錯 / 對了。",
              segments: [
                { text: "Đúng", meaning: "對", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Cái này đúng không?",
              translation: "這個對嗎？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "đúng", meaning: "對", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Chính xác trăm phần trăm.",
              translation: "百分之百正確。",
              segments: [
                { text: "Chính xác", meaning: "精確", tail: " " },
                { text: "trăm", meaning: "百", tail: " " },
                { text: "phần", meaning: "分", tail: " " },
                { text: "trăm", meaning: "百", tail: "." },
              ],
            },
          ],
          usage_note: "口語中最常用「Đúng」來表示贊同。",
          image_file: "correct.png",
        },
        {
          id: "adj-25",
          term_zh: "錯誤的 / 錯的",
          related_terms: [
            {
              term_target: "Sai",
              pronunciation: ["/saɪ/"],
              specific_note: "",
              segments: [{ text: "Sai", meaning: "錯", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sai rồi.",
              translation: "錯了。",
              segments: [
                { text: "Sai", meaning: "錯", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Có gì đó sai sai.",
              translation: "有些地方怪怪的(錯錯的)。",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "đó", meaning: "那", tail: " " },
                { text: "sai sai", meaning: "錯錯(有點錯)", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi, nhầm số.",
              translation: "抱歉，打錯(弄錯)號碼了。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "nhầm", meaning: "錯/誤", tail: " " },
                { text: "số", meaning: "號碼", tail: "." },
              ],
            },
          ],
          usage_note: "做錯事或答案錯誤用「Sai」，打錯電話常用「Nhầm」(誤)。",
          image_file: "wrong.png",
        },
        {
          id: "adj-26",
          term_zh: "重要的",
          related_terms: [
            {
              term_target: "Quan trọng",
              pronunciation: ["/kwan cɔŋm/"],
              specific_note: "",
              segments: [
                { text: "Quan", meaning: "關", tail: " " },
                { text: "trọng", meaning: "重", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cuộc họp quan trọng.",
              translation: "重要會議。",
              segments: [
                { text: "Cuộc họp", meaning: "會議", tail: " " },
                { text: "quan trọng", meaning: "重要", tail: "." },
              ],
            },
            {
              sentence: "Điều này rất quan trọng.",
              translation: "這件事非常重要。",
              segments: [
                { text: "Điều", meaning: "事情/條", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "quan trọng", meaning: "重要", tail: "." },
              ],
            },
            {
              sentence: "Gia đình là quan trọng nhất.",
              translation: "家庭是最重要的。",
              segments: [
                { text: "Gia đình", meaning: "家庭", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "quan trọng", meaning: "重要", tail: " " },
                { text: "nhất", meaning: "最", tail: "." },
              ],
            },
          ],
          usage_note: "漢字詞「關重」，發音跟中文很像。",
          image_file: "important.png",
        },
        {
          id: "adj-27",
          term_zh: "不同的 / 不一樣",
          related_terms: [
            {
              term_target: "Khác",
              pronunciation: ["/xak/"],
              specific_note: "",
              segments: [{ text: "Khác", meaning: "不同/其他", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Màu khác.",
              translation: "別的顏色 (不同顏色)。",
              segments: [
                { text: "Màu", meaning: "顏色", tail: " " },
                { text: "khác", meaning: "不同", tail: "." },
              ],
            },
            {
              sentence: "Ý kiến khác nhau.",
              translation: "意見不同。",
              segments: [
                { text: "Ý kiến", meaning: "意見", tail: " " },
                { text: "khác", meaning: "異/不同", tail: " " },
                { text: "nhau", meaning: "互相", tail: "." },
              ],
            },
            {
              sentence: "Không giống nhau.",
              translation: "不一樣 (不相似)。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "giống", meaning: "像/同", tail: " " },
                { text: "nhau", meaning: "互相", tail: "." },
              ],
            },
          ],
          usage_note: "買東西想看別款，可以說「Cái khác」(別的)。",
          image_file: "different.png",
        },
        {
          id: "adj-28",
          term_zh: "真的",
          related_terms: [
            {
              term_target: "Thật",
              pronunciation: ["/tʰət/"],
              specific_note: "真實/真誠",
              segments: [{ text: "Thật", meaning: "真/實", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Vàng thật.",
              translation: "真金。",
              segments: [
                { text: "Vàng", meaning: "金", tail: " " },
                { text: "thật", meaning: "真", tail: "." },
              ],
            },
            {
              sentence: "Nói thật đấy.",
              translation: "說真的 (沒開玩笑)。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "thật", meaning: "真", tail: " " },
                { text: "đấy", meaning: "(語氣詞)", tail: "." },
              ],
            },
            {
              sentence: "Thật không?",
              translation: "真的嗎？",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "không", meaning: "不/嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "用在形容詞前表示程度，如「Thật đẹp」(真美)。",
          image_file: "real.png",
        },
        {
          id: "adj-29",
          term_zh: "有趣的 / 精彩的",
          related_terms: [
            {
              term_target: "Thú vị",
              pronunciation: ["/tʰu vi/"],
              specific_note: "有意思",
              segments: [
                { text: "Thú", meaning: "趣", tail: " " },
                { text: "vị", meaning: "味", tail: "" },
              ],
            },
            {
              term_target: "Hay",
              pronunciation: ["/haj/"],
              specific_note: "好/精彩",
              segments: [{ text: "Hay", meaning: "精彩", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Quyển sách thú vị.",
              translation: "有趣的書。",
              segments: [
                { text: "Quyển", meaning: "本(量詞)", tail: " " },
                { text: "sách", meaning: "書", tail: " " },
                { text: "thú vị", meaning: "趣味", tail: "." },
              ],
            },
            {
              sentence: "Nghe có vẻ thú vị.",
              translation: "聽起來很有趣。",
              segments: [
                { text: "Nghe", meaning: "聽", tail: " " },
                { text: "có vẻ", meaning: "似乎/有樣子", tail: " " },
                { text: "thú vị", meaning: "有趣", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy nói chuyện hay lắm.",
              translation: "她講話很有趣(很動聽)。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "nói chuyện", meaning: "講話", tail: " " },
                { text: "hay", meaning: "好/精彩", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
          ],
          usage_note: "「Hay」比較口語，「Thú vị」(趣味) 比較正式。",
          image_file: "interesting.png",
        },
        {
          id: "adj-30",
          term_zh: "美麗的",
          related_terms: [
            {
              term_target: "Đẹp",
              pronunciation: ["/dɛp/"],
              specific_note: "美/漂亮",
              segments: [{ text: "Đẹp", meaning: "美", tail: "" }],
            },
            {
              term_target: "Xinh",
              pronunciation: ["/siɲ/"],
              specific_note: "可愛/俏麗",
              segments: [{ text: "Xinh", meaning: "俏/漂亮", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hoa đẹp.",
              translation: "漂亮的花。",
              segments: [
                { text: "Hoa", meaning: "花", tail: " " },
                { text: "đẹp", meaning: "美", tail: "." },
              ],
            },
            {
              sentence: "Em đẹp lắm.",
              translation: "妳很美。",
              segments: [
                { text: "Em", meaning: "妹/妳", tail: " " },
                { text: "đẹp", meaning: "美", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Trời đẹp.",
              translation: "天氣好(美)。",
              segments: [
                { text: "Trời", meaning: "天", tail: " " },
                { text: "đẹp", meaning: "美", tail: "." },
              ],
            },
          ],
          usage_note:
            "「Xinh」通常專指年輕女生或小孩，「Đẹp」可以形容風景、物品或人。",
          image_file: "beautiful.png",
        },
        {
          id: "adj-31",
          term_zh: "便宜的",
          related_terms: [
            {
              term_target: "Rẻ",
              pronunciation: ["/zɛ/"],
              specific_note: "",
              segments: [{ text: "Rẻ", meaning: "便宜", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này rẻ.",
              translation: "這個便宜。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "rẻ", meaning: "便宜", tail: "." },
              ],
            },
            {
              sentence: "Vé máy bay giá rẻ.",
              translation: "廉價機票。",
              segments: [
                { text: "Vé", meaning: "票", tail: " " },
                { text: "máy bay", meaning: "飛機", tail: " " },
                { text: "giá", meaning: "價格", tail: " " },
                { text: "rẻ", meaning: "便宜", tail: "." },
              ],
            },
            {
              sentence: "Rẻ quá!",
              translation: "太便宜了！",
              segments: [
                { text: "Rẻ", meaning: "便宜", tail: " " },
                { text: "quá", meaning: "太...了", tail: "!" },
              ],
            },
          ],
          usage_note: "殺價時可以說「Không rẻ」(不便宜) 來嫌貴。",
          image_file: "cheap.png",
        },
        {
          id: "adj-32",
          term_zh: "昂貴的",
          related_terms: [
            {
              term_target: "Đắt",
              pronunciation: ["/dat/"],
              specific_note: "北/通用",
              segments: [{ text: "Đắt", meaning: "貴", tail: "" }],
            },
            {
              term_target: "Mắc",
              pronunciation: ["/mak/"],
              specific_note: "南/口語",
              segments: [{ text: "Mắc", meaning: "貴", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đắt quá!",
              translation: "太貴了！",
              segments: [
                { text: "Đắt", meaning: "貴", tail: " " },
                { text: "quá", meaning: "太...了", tail: "!" },
              ],
            },
            {
              sentence: "Xe đắt tiền.",
              translation: "昂貴的車。",
              segments: [
                { text: "Xe", meaning: "車", tail: " " },
                { text: "đắt", meaning: "貴", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Nhìn sang trọng.",
              translation: "看起來很高貴(貴氣)。",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "sang trọng", meaning: "莊重/高貴", tail: "." },
              ],
            },
          ],
          usage_note: "殺價必備句：Đắt quá (太貴了)。南部說 Mắc quá。",
          image_file: "expensive.png",
        },
        {
          id: "adj-33",
          term_zh: "飢餓的",
          related_terms: [
            {
              term_target: "Đói",
              pronunciation: ["/dɔj/"],
              specific_note: "",
              segments: [{ text: "Đói", meaning: "餓", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đói rồi.",
              translation: "我餓了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đói", meaning: "餓", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Bạn có đói không?",
              translation: "你餓嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "đói", meaning: "餓", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Đói bụng quá.",
              translation: "肚子好餓。",
              segments: [
                { text: "Đói", meaning: "餓", tail: " " },
                { text: "bụng", meaning: "肚子", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
          ],
          usage_note: "加上「bụng」(肚子) 說「Đói bụng」更口語。",
          image_file: "hungry.png",
        },
        {
          id: "adj-34",
          term_zh: "疲累的",
          related_terms: [
            {
              term_target: "Mệt",
              pronunciation: ["/met/"],
              specific_note: "",
              segments: [{ text: "Mệt", meaning: "累", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi mệt.",
              translation: "我累了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "mệt", meaning: "累", tail: "." },
              ],
            },
            {
              sentence: "Mệt chết đi được.",
              translation: "累死我了。",
              segments: [
                { text: "Mệt", meaning: "累", tail: " " },
                { text: "chết", meaning: "死", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "được", meaning: "得", tail: "." },
              ],
            },
            {
              sentence: "Trông bạn có vẻ mệt.",
              translation: "你看起來好像很累。",
              segments: [
                { text: "Trông", meaning: "看/望", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "có vẻ", meaning: "似乎", tail: " " },
                { text: "mệt", meaning: "累", tail: "." },
              ],
            },
          ],
          usage_note: "如果覺得煩，也可以說「Mệt quá」(好煩/心累)。",
          image_file: "tired.png",
        },
        {
          id: "adj-35",
          term_zh: "忙碌的",
          related_terms: [
            {
              term_target: "Bận",
              pronunciation: ["/bən/"],
              specific_note: "",
              segments: [{ text: "Bận", meaning: "忙", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi bận.",
              translation: "我忙。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
              ],
            },
            {
              sentence: "Đường dây bận.",
              translation: "電話佔線 (線路忙)。",
              segments: [
                { text: "Đường dây", meaning: "線路", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
              ],
            },
            {
              sentence: "Bạn có bận không?",
              translation: "你忙嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "bận", meaning: "忙", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "拒絕邀約最常用的藉口：「Tôi bận rồi」(我忙了/我有事)。",
          image_file: "busy.png",
        },
        {
          id: "adj-36",
          term_zh: "高興的 / 快樂的",
          related_terms: [
            {
              term_target: "Vui",
              pronunciation: ["/vuj/"],
              specific_note: "開心",
              segments: [{ text: "Vui", meaning: "樂/開心", tail: "" }],
            },
            {
              term_target: "Hạnh phúc",
              pronunciation: ["/haɲ fuk/"],
              specific_note: "幸福",
              segments: [
                { text: "Hạnh", meaning: "幸", tail: " " },
                { text: "phúc", meaning: "福", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chúc Mừng Sinh Nhật.",
              translation: "生日快樂 (祝賀 生日)。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "Mừng", meaning: "慶賀", tail: " " },
                { text: "Sinh", meaning: "生", tail: " " },
                { text: "Nhật", meaning: "日", tail: "." },
              ],
            },
            {
              sentence: "Tôi rất vui.",
              translation: "我很高興。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "高興", tail: "." },
              ],
            },
            {
              sentence: "Vui vẻ nhé.",
              translation: "玩得開心喔。",
              segments: [
                { text: "Vui vẻ", meaning: "快樂", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "日常開心用「Vui」，深層幸福感用「Hạnh phúc」。",
          image_file: "happy.png",
        },
        {
          id: "adj-37",
          term_zh: "悲傷的 / 難過",
          related_terms: [
            {
              term_target: "Buồn",
              pronunciation: ["/buən/"],
              specific_note: "",
              segments: [{ text: "Buồn", meaning: "愁/悲傷", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chuyện buồn.",
              translation: "悲傷的故事/事情。",
              segments: [
                { text: "Chuyện", meaning: "事情", tail: " " },
                { text: "buồn", meaning: "悲傷", tail: "." },
              ],
            },
            {
              sentence: "Tại sao bạn buồn?",
              translation: "你為什麼難過？",
              segments: [
                { text: "Tại sao", meaning: "為什麼", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "buồn", meaning: "難過", tail: "?" },
              ],
            },
            {
              sentence: "Đừng buồn nữa.",
              translation: "別再難過了。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "buồn", meaning: "難過", tail: " " },
                { text: "nữa", meaning: "再/繼續", tail: "." },
              ],
            },
          ],
          usage_note: "Buồn 也有「無聊」的意思，例如 Buồn quá (好無聊/好悶)。",
          image_file: "sad.png",
        },
        {
          id: "adj-38",
          term_zh: "相似的 / 像",
          related_terms: [
            {
              term_target: "Giống",
              pronunciation: ["/zom/"],
              specific_note: "像",
              segments: [{ text: "Giống", meaning: "像/同", tail: "" }],
            },
            {
              term_target: "Tương tự",
              pronunciation: ["/tɯəŋ tɯ/"],
              specific_note: "類似(書面)",
              segments: [{ text: "Tương tự", meaning: "類似", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Giống nhau.",
              translation: "一樣 / 相似 (互相像)。",
              segments: [
                { text: "Giống", meaning: "像", tail: " " },
                { text: "nhau", meaning: "互相", tail: "." },
              ],
            },
            {
              sentence: "Bạn giống mẹ.",
              translation: "你像媽媽。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giống", meaning: "像", tail: " " },
                { text: "mẹ", meaning: "媽", tail: "." },
              ],
            },
            {
              sentence: "Màu sắc tương tự.",
              translation: "顏色類似。",
              segments: [
                { text: "Màu sắc", meaning: "顏色", tail: " " },
                { text: "tương tự", meaning: "類似", tail: "." },
              ],
            },
          ],
          usage_note: "口語最常用「Giống」(像)。",
          image_file: "similar.png",
        },
        {
          id: "adj-39",
          term_zh: "有名的",
          related_terms: [
            {
              term_target: "Nổi tiếng",
              pronunciation: ["/noj tiəŋ/"],
              specific_note: "",
              segments: [
                { text: "Nổi", meaning: "浮/突起", tail: " " },
                { text: "tiếng", meaning: "聲/名聲", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ca sĩ nổi tiếng.",
              translation: "知名歌手。",
              segments: [
                { text: "Ca sĩ", meaning: "歌手", tail: " " },
                { text: "nổi tiếng", meaning: "有名", tail: "." },
              ],
            },
            {
              sentence: "Món ăn nổi tiếng.",
              translation: "有名的菜。",
              segments: [
                { text: "Món ăn", meaning: "食物/菜", tail: " " },
                { text: "nổi tiếng", meaning: "有名", tail: "." },
              ],
            },
            {
              sentence: "Nơi này rất nổi tiếng.",
              translation: "這地方很有名。",
              segments: [
                { text: "Nơi", meaning: "地方", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "nổi tiếng", meaning: "有名", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思就是「浮起聲名」。",
          image_file: "famous.png",
        },
        {
          id: "adj-40",
          term_zh: "外國的",
          related_terms: [
            {
              term_target: "Nước ngoài",
              pronunciation: ["/nɯək ŋwaaj/"],
              specific_note: "國外",
              segments: [
                { text: "Nước", meaning: "國/水", tail: " " },
                { text: "ngoài", meaning: "外", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Người nước ngoài.",
              translation: "外國人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "nước ngoài", meaning: "國外", tail: "." },
              ],
            },
            {
              sentence: "Tiếng nước ngoài.",
              translation: "外語。",
              segments: [
                { text: "Tiếng", meaning: "語言", tail: " " },
                { text: "nước ngoài", meaning: "國外", tail: "." },
              ],
            },
            {
              sentence: "Đi nước ngoài.",
              translation: "出國。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "nước ngoài", meaning: "國外", tail: "." },
              ],
            },
          ],
          usage_note:
            "Nước 也是「水」的意思，越南語中「國」和「水」是同一個字。",
          image_file: "foreign.png",
        },
        {
          id: "adj-41",
          term_zh: "聰明的",
          related_terms: [
            {
              term_target: "Thông minh",
              pronunciation: ["/tʰoŋm miɲ/"],
              specific_note: "",
              segments: [
                { text: "Thông", meaning: "通", tail: " " },
                { text: "minh", meaning: "明", tail: "" },
              ],
            },
            {
              term_target: "Khôn",
              pronunciation: ["/xon/"],
              specific_note: "乖巧/機靈",
              segments: [{ text: "Khôn", meaning: "聰明/乖", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Học sinh thông minh.",
              translation: "聰明的學生。",
              segments: [
                { text: "Học sinh", meaning: "學生", tail: " " },
                { text: "thông minh", meaning: "聰明", tail: "." },
              ],
            },
            {
              sentence: "Chó khôn quá.",
              translation: "這隻狗好聰明(乖)。",
              segments: [
                { text: "Chó", meaning: "狗", tail: " " },
                { text: "khôn", meaning: "機靈", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Bạn thật thông minh.",
              translation: "你真聰明。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thật", meaning: "真", tail: " " },
                { text: "thông minh", meaning: "聰明", tail: "." },
              ],
            },
          ],
          usage_note:
            "稱讚小孩或寵物常用「Khôn」，稱讚人智商高用「Thông minh」。",
          image_file: "intelligent.png",
        },
        {
          id: "adj-42",
          term_zh: "危險的",
          related_terms: [
            {
              term_target: "Nguy hiểm",
              pronunciation: ["/ŋwi hiəm/"],
              specific_note: "",
              segments: [
                { text: "Nguy", meaning: "危", tail: " " },
                { text: "hiểm", meaning: "險", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Rất nguy hiểm.",
              translation: "很危險。",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "nguy hiểm", meaning: "危險", tail: "." },
              ],
            },
            {
              sentence: "Chỗ này nguy hiểm.",
              translation: "這個地方很危險。",
              segments: [
                { text: "Chỗ", meaning: "地方", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "nguy hiểm", meaning: "危險", tail: "." },
              ],
            },
            {
              sentence: "Cẩn thận! Nguy hiểm!",
              translation: "小心！危險！",
              segments: [
                { text: "Cẩn thận", meaning: "小心", tail: "! " },
                { text: "Nguy hiểm", meaning: "危險", tail: "!" },
              ],
            },
          ],
          usage_note: "看到標示牌寫「Nguy hiểm」請務必遠離。",
          image_file: "dangerous.png",
        },
        {
          id: "adj-43",
          term_zh: "仁慈的 / 善良",
          related_terms: [
            {
              term_target: "Tốt bụng",
              pronunciation: ["/tot buŋm/"],
              specific_note: "好心(直譯:好肚)",
              segments: [
                { text: "Tốt", meaning: "好", tail: " " },
                { text: "bụng", meaning: "肚子/心腸", tail: "" },
              ],
            },
            {
              term_target: "Hiền",
              pronunciation: ["/hiən/"],
              specific_note: "溫和/乖",
              segments: [{ text: "Hiền", meaning: "賢/溫和", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Người tốt bụng.",
              translation: "好心人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "tốt bụng", meaning: "好心", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy hiền lắm.",
              translation: "她很溫柔(善良)。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "hiền", meaning: "溫和", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Cảm ơn lòng tốt của bạn.",
              translation: "謝謝你的好意。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "lòng tốt", meaning: "好意/好心", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
          ],
          usage_note:
            "形容人好心腸用「Tốt bụng」，形容個性溫和不兇用「Hiền」。",
          image_file: "kind.png",
        },
        {
          id: "adj-44",
          term_zh: "每一個 / 所有的",
          related_terms: [
            {
              term_target: "Mỗi",
              pronunciation: ["/moj/"],
              specific_note: "每一個(單數概念)",
              segments: [{ text: "Mỗi", meaning: "每", tail: "" }],
            },
            {
              term_target: "Mọi",
              pronunciation: ["/mɔj/"],
              specific_note: "所有的(複數概念)",
              segments: [{ text: "Mọi", meaning: "所有/每", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mỗi ngày.",
              translation: "每一天。",
              segments: [
                { text: "Mỗi", meaning: "每", tail: " " },
                { text: "ngày", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "Chào mọi người.",
              translation: "大家好 (問候所有人)。",
              segments: [
                { text: "Chào", meaning: "你好", tail: " " },
                { text: "mọi", meaning: "所有", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Mỗi người một cái.",
              translation: "一人一個。",
              segments: [
                { text: "Mỗi", meaning: "每", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "cái", meaning: "個", tail: "." },
              ],
            },
          ],
          usage_note: "強調個體用「Mỗi」，強調全體用「Mọi」。",
          image_file: "every.png",
        },
        {
          id: "adj-45",
          term_zh: "喜愛的 / 最愛",
          related_terms: [
            {
              term_target: "Yêu thích",
              pronunciation: ["/iəw tʰik/"],
              specific_note: "",
              segments: [
                { text: "Yêu", meaning: "愛", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Món ăn yêu thích.",
              translation: "最愛的食物。",
              segments: [
                { text: "Món ăn", meaning: "食物", tail: " " },
                { text: "yêu thích", meaning: "喜愛", tail: "." },
              ],
            },
            {
              sentence: "Đây là bài hát tôi thích nhất.",
              translation: "這是我最喜歡的歌。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "bài hát", meaning: "歌", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "nhất", meaning: "最", tail: "." },
              ],
            },
            {
              sentence: "Sở thích của bạn là gì?",
              translation: "你的愛好(興趣)是什麼？",
              segments: [
                { text: "Sở thích", meaning: "愛好", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "比起「Yêu thích」，口語更常說「Thích nhất」(最喜歡)。",
          image_file: "favorite.png",
        },
        {
          id: "adj-46",
          term_zh: "美味的 / 好吃",
          related_terms: [
            {
              term_target: "Ngon",
              pronunciation: ["/ŋɔn/"],
              specific_note: "好吃/好喝",
              segments: [{ text: "Ngon", meaning: "美味", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ngon quá!",
              translation: "太好吃了！",
              segments: [
                { text: "Ngon", meaning: "好吃", tail: " " },
                { text: "quá", meaning: "太...了", tail: "!" },
              ],
            },
            {
              sentence: "Món này rất ngon.",
              translation: "這道菜很好吃。",
              segments: [
                { text: "Món", meaning: "菜", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "ngon", meaning: "好吃", tail: "." },
              ],
            },
            {
              sentence: "Chúc ngon miệng.",
              translation: "祝你用餐愉快 (祝好胃口)。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "ngon", meaning: "好", tail: " " },
                { text: "miệng", meaning: "嘴/胃口", tail: "." },
              ],
            },
          ],
          usage_note: "越南人說「Ngon」不只食物，有時也形容正妹身材好 (口語)。",
          image_file: "delicious.png",
        },
      ],
    },
    {
      id: "nouns-vi",
      name: "常用名詞",
      items: [
        {
          id: "n-01",
          term_zh: "時間",
          related_terms: [
            {
              term_target: "Thời gian",
              pronunciation: ["/tʰəj zan/"],
              specific_note: "時間(概念)",
              segments: [
                { text: "Thời", meaning: "時", tail: " " },
                { text: "gian", meaning: "間", tail: "" },
              ],
            },
            {
              term_target: "Giờ",
              pronunciation: ["/zə/"],
              specific_note: "點鐘/小時",
              segments: [{ text: "Giờ", meaning: "小時/點", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mấy giờ rồi?",
              translation: "現在幾點了？",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
            {
              sentence: "Không có thời gian.",
              translation: "沒時間。",
              segments: [
                { text: "Không", meaning: "不/沒", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "thời gian", meaning: "時間", tail: "." },
              ],
            },
            {
              sentence: "Đúng giờ.",
              translation: "準時 (對的時間)。",
              segments: [
                { text: "Đúng", meaning: "對/準確", tail: " " },
                { text: "giờ", meaning: "時間", tail: "." },
              ],
            },
          ],
          usage_note: "問幾點用「Giờ」，講沒空用「Thời gian」。",
          image_file: "time.png",
        },
        {
          id: "n-02",
          term_zh: "人們 / 人",
          related_terms: [
            {
              term_target: "Người",
              pronunciation: ["/ŋɨəj/"],
              specific_note: "人(單複數通用)",
              segments: [{ text: "Người", meaning: "人", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhiều người quá.",
              translation: "好多人。",
              segments: [
                { text: "Nhiều", meaning: "多", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Người Việt Nam.",
              translation: "越南人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "Việt Nam", meaning: "越南", tail: "." },
              ],
            },
            {
              sentence: "Mọi người.",
              translation: "大家 (所有人)。",
              segments: [
                { text: "Mọi", meaning: "每/所有", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
          ],
          usage_note: "國家名 + Người = 該國人。",
          image_file: "people.png",
        },
        {
          id: "n-03",
          term_zh: "金錢",
          related_terms: [
            {
              term_target: "Tiền",
              pronunciation: ["/tiən/"],
              specific_note: "",
              segments: [{ text: "Tiền", meaning: "錢", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hết tiền rồi.",
              translation: "沒錢了 (錢用完了)。",
              segments: [
                { text: "Hết", meaning: "完/盡", tail: " " },
                { text: "tiền", meaning: "錢", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Bao nhiêu tiền?",
              translation: "多少錢？",
              segments: [
                { text: "Bao nhiêu", meaning: "多少", tail: " " },
                { text: "tiền", meaning: "錢", tail: "?" },
              ],
            },
            {
              sentence: "Rút tiền.",
              translation: "領錢 (提款)。",
              segments: [
                { text: "Rút", meaning: "拔/抽/領", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
          ],
          usage_note: "去ATM領錢就是「Rút tiền」。",
          image_file: "money.png",
        },
        {
          id: "n-04",
          term_zh: "孩子",
          related_terms: [
            {
              term_target: "Con",
              pronunciation: ["/kɔn/"],
              specific_note: "兒女/小孩",
              segments: [{ text: "Con", meaning: "孩子", tail: "" }],
            },
            {
              term_target: "Trẻ em",
              pronunciation: ["/tʃɛ ɛm/"],
              specific_note: "兒童(統稱)",
              segments: [
                { text: "Trẻ", meaning: "年輕", tail: " " },
                { text: "em", meaning: "弟妹", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Con của tôi.",
              translation: "我的孩子。",
              segments: [
                { text: "Con", meaning: "孩子", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Em bé đang ngủ.",
              translation: "小寶寶在睡覺。",
              segments: [
                { text: "Em bé", meaning: "嬰兒/小孩", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ngủ", meaning: "睡", tail: "." },
              ],
            },
            {
              sentence: "Nhà có 2 con.",
              translation: "家裡有兩個小孩。",
              segments: [
                { text: "Nhà", meaning: "家", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "2", meaning: "二", tail: " " },
                { text: "con", meaning: "孩子", tail: "." },
              ],
            },
          ],
          usage_note: "自己的小孩用「Con」，路邊的小朋友叫「Em bé」。",
          image_file: "child.png",
        },
        {
          id: "n-05",
          term_zh: "水",
          related_terms: [
            {
              term_target: "Nước",
              pronunciation: ["/nɯək/"],
              specific_note: "",
              segments: [{ text: "Nước", meaning: "水", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Uống nước.",
              translation: "喝水。",
              segments: [
                { text: "Uống", meaning: "喝", tail: " " },
                { text: "nước", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi xin nước.",
              translation: "請給我水。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xin", meaning: "請求", tail: " " },
                { text: "nước", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "Nước mắm.",
              translation: "魚露 (字面意: 魚醬水)。",
              segments: [
                { text: "Nước", meaning: "水/汁", tail: " " },
                { text: "mắm", meaning: "魚醬", tail: "." },
              ],
            },
          ],
          usage_note: "越南餐廳的免費茶水叫「Trà đá」(冰茶)。",
          image_file: "water.png",
        },
        {
          id: "n-06",
          term_zh: "食物",
          related_terms: [
            {
              term_target: "Đồ ăn",
              pronunciation: ["/do an/"],
              specific_note: "吃的東西",
              segments: [
                { text: "Đồ", meaning: "東西", tail: " " },
                { text: "ăn", meaning: "吃", tail: "" },
              ],
            },
            {
              term_target: "Thức ăn",
              pronunciation: ["/tʰɨk an/"],
              specific_note: "食物(較正式)",
              segments: [
                { text: "Thức", meaning: "食", tail: " " },
                { text: "ăn", meaning: "吃", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đồ ăn ngon.",
              translation: "好吃的食物。",
              segments: [
                { text: "Đồ ăn", meaning: "食物", tail: " " },
                { text: "ngon", meaning: "好吃", tail: "." },
              ],
            },
            {
              sentence: "Mua đồ ăn.",
              translation: "買吃的。",
              segments: [
                { text: "Mua", meaning: "買", tail: " " },
                { text: "đồ ăn", meaning: "食物", tail: "." },
              ],
            },
            {
              sentence: "Hết thức ăn rồi.",
              translation: "食物沒了 (賣完了/吃完了)。",
              segments: [
                { text: "Hết", meaning: "完/盡", tail: " " },
                { text: "thức ăn", meaning: "食物", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "口語最常說「Đồ ăn」，飲料叫「Đồ uống」。",
          image_file: "food.png",
        },
        {
          id: "n-07",
          term_zh: "朋友",
          related_terms: [
            {
              term_target: "Bạn",
              pronunciation: ["/ban/"],
              specific_note: "朋友/你(平輩)",
              segments: [{ text: "Bạn", meaning: "朋友", tail: "" }],
            },
            {
              term_target: "Bạn bè",
              pronunciation: ["/ban bɛ/"],
              specific_note: "朋友們(集合)",
              segments: [{ text: "Bạn bè", meaning: "朋友", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn tốt.",
              translation: "好朋友。",
              segments: [
                { text: "Bạn", meaning: "朋友", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Đi chơi với bạn.",
              translation: "跟朋友出去玩。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "chơi", meaning: "玩", tail: " " },
                { text: "với", meaning: "和", tail: " " },
                { text: "bạn", meaning: "朋友", tail: "." },
              ],
            },
            {
              sentence: "Kết bạn mới.",
              translation: "交新朋友。",
              segments: [
                { text: "Kết", meaning: "結/交", tail: " " },
                { text: "bạn", meaning: "朋友", tail: " " },
                { text: "mới", meaning: "新", tail: "." },
              ],
            },
          ],
          usage_note: "「Bạn」既是「朋友」也是平輩之間的代名詞「你」。",
          image_file: "friend.png",
        },
        {
          id: "n-08",
          term_zh: "家庭",
          related_terms: [
            {
              term_target: "Gia đình",
              pronunciation: ["/za diɲ/"],
              specific_note: "",
              segments: [
                { text: "Gia", meaning: "家", tail: " " },
                { text: "đình", meaning: "庭", tail: "" },
              ],
            },
            {
              term_target: "Nhà",
              pronunciation: ["/ɲa/"],
              specific_note: "家/房子",
              segments: [{ text: "Nhà", meaning: "家", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Gia đình tôi.",
              translation: "我的家庭(家人)。",
              segments: [
                { text: "Gia đình", meaning: "家庭", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Về nhà.",
              translation: "回家。",
              segments: [
                { text: "Về", meaning: "回", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Cả nhà vui vẻ.",
              translation: "全家快樂。",
              segments: [
                { text: "Cả", meaning: "全/整", tail: " " },
                { text: "nhà", meaning: "家", tail: " " },
                { text: "vui vẻ", meaning: "開心", tail: "." },
              ],
            },
          ],
          usage_note:
            "正式場合或指家庭成員用「Gia đình」，指地點或口語用「Nhà」。",
          image_file: "family.png",
        },
        {
          id: "n-09",
          term_zh: "學生",
          related_terms: [
            {
              term_target: "Học sinh",
              pronunciation: ["/hɔkp siɲ/"],
              specific_note: "中小學生",
              segments: [
                { text: "Học", meaning: "學", tail: " " },
                { text: "sinh", meaning: "生", tail: "" },
              ],
            },
            {
              term_target: "Sinh viên",
              pronunciation: ["/siɲ viən/"],
              specific_note: "大學生",
              segments: [
                { text: "Sinh", meaning: "生", tail: " " },
                { text: "viên", meaning: "員", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi là sinh viên.",
              translation: "我是大學生。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sinh viên", meaning: "大學生", tail: "." },
              ],
            },
            {
              sentence: "Học sinh giỏi.",
              translation: "好學生 (成績優秀)。",
              segments: [
                { text: "Học sinh", meaning: "學生", tail: " " },
                { text: "giỏi", meaning: "棒/優秀", tail: "." },
              ],
            },
            {
              sentence: "Thẻ sinh viên.",
              translation: "學生證。",
              segments: [
                { text: "Thẻ", meaning: "卡/證", tail: " " },
                { text: "sinh viên", meaning: "大學生", tail: "." },
              ],
            },
          ],
          usage_note: "越南語分很細：Học sinh (中小學)，Sinh viên (大學)。",
          image_file: "student.png",
        },
        {
          id: "n-10",
          term_zh: "文化",
          related_terms: [
            {
              term_target: "Văn hóa",
              pronunciation: ["/van hɔa/"],
              specific_note: "",
              segments: [
                { text: "Văn", meaning: "文", tail: " " },
                { text: "hóa", meaning: "化", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Văn hóa Việt Nam.",
              translation: "越南文化。",
              segments: [
                { text: "Văn hóa", meaning: "文化", tail: " " },
                { text: "Việt Nam", meaning: "越南", tail: "." },
              ],
            },
            {
              sentence: "Tìm hiểu văn hóa.",
              translation: "了解(探索)文化。",
              segments: [
                { text: "Tìm hiểu", meaning: "尋找了解", tail: " " },
                { text: "văn hóa", meaning: "文化", tail: "." },
              ],
            },
            {
              sentence: "Sốc văn hóa.",
              translation: "文化衝擊 (Culture shock)。",
              segments: [
                { text: "Sốc", meaning: "休克/衝擊", tail: " " },
                { text: "văn hóa", meaning: "文化", tail: "." },
              ],
            },
          ],
          usage_note: "發音跟中文的「文化」非常像。",
          image_file: "culture.png",
        },
        {
          id: "n-11",
          term_zh: "問題",
          related_terms: [
            {
              term_target: "Vấn đề",
              pronunciation: ["/vən de/"],
              specific_note: "難題/狀況",
              segments: [
                { text: "Vấn", meaning: "問", tail: " " },
                { text: "đề", meaning: "題", tail: "" },
              ],
            },
            {
              term_target: "Câu hỏi",
              pronunciation: ["/kəw hɔj/"],
              specific_note: "提問(Question)",
              segments: [
                { text: "Câu", meaning: "句", tail: " " },
                { text: "hỏi", meaning: "問", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Không có vấn đề.",
              translation: "沒問題 (No problem)。",
              segments: [
                { text: "Không", meaning: "沒", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "vấn đề", meaning: "問題", tail: "." },
              ],
            },
            {
              sentence: "Tôi có một câu hỏi.",
              translation: "我有一個問題 (想發問)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "câu hỏi", meaning: "提問", tail: "." },
              ],
            },
            {
              sentence: "Vấn đề lớn.",
              translation: "大問題。",
              segments: [
                { text: "Vấn đề", meaning: "問題", tail: " " },
                { text: "lớn", meaning: "大", tail: "." },
              ],
            },
          ],
          usage_note: "麻煩或狀況用「Vấn đề」，舉手發問用「Câu hỏi」。",
          image_file: "problem.png",
        },
        {
          id: "n-12",
          term_zh: "公司",
          related_terms: [
            {
              term_target: "Công ty",
              pronunciation: ["/koŋm ti/"],
              specific_note: "",
              segments: [
                { text: "Công", meaning: "公", tail: " " },
                { text: "ty", meaning: "司", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi đến công ty.",
              translation: "去公司。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "công ty", meaning: "公司", tail: "." },
              ],
            },
            {
              sentence: "Làm việc ở công ty.",
              translation: "在公司工作。",
              segments: [
                { text: "Làm việc", meaning: "工作", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "công ty", meaning: "公司", tail: "." },
              ],
            },
            {
              sentence: "Giám đốc công ty.",
              translation: "公司經理/董事。",
              segments: [
                { text: "Giám đốc", meaning: "監督/經理", tail: " " },
                { text: "công ty", meaning: "公司", tail: "." },
              ],
            },
          ],
          usage_note: "發音跟中文「公司」非常像。",
          image_file: "company.png",
        },
        {
          id: "n-13",
          term_zh: "男性 / 男人",
          related_terms: [
            {
              term_target: "Đàn ông",
              pronunciation: ["/dan oŋm/"],
              specific_note: "成年男子",
              segments: [{ text: "Đàn ông", meaning: "男人", tail: "" }],
            },
            {
              term_target: "Nam",
              pronunciation: ["/nam/"],
              specific_note: "性別(男)",
              segments: [{ text: "Nam", meaning: "男", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh ấy là đàn ông.",
              translation: "他是個男人 (強調成熟/性別)。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "đàn ông", meaning: "男人", tail: "." },
              ],
            },
            {
              sentence: "Nhà vệ sinh nam.",
              translation: "男廁。",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "nam", meaning: "男", tail: "." },
              ],
            },
            {
              sentence: "Bạn nam.",
              translation: "男性朋友 (或男朋友)。",
              segments: [
                { text: "Bạn", meaning: "朋友", tail: " " },
                { text: "nam", meaning: "男", tail: "." },
              ],
            },
          ],
          usage_note:
            "廁所標示通常寫「Nam」，口語講性別或成年男子說「Đàn ông」。",
          image_file: "man.png",
        },
        {
          id: "n-14",
          term_zh: "女性 / 女人",
          related_terms: [
            {
              term_target: "Phụ nữ",
              pronunciation: ["/fu nɨ/"],
              specific_note: "成年女子(婦女)",
              segments: [{ text: "Phụ nữ", meaning: "婦女", tail: "" }],
            },
            {
              term_target: "Nữ",
              pronunciation: ["/nɨ/"],
              specific_note: "性別(女)",
              segments: [{ text: "Nữ", meaning: "女", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ngày Quốc tế Phụ nữ.",
              translation: "國際婦女節。",
              segments: [
                { text: "Ngày", meaning: "日/節", tail: " " },
                { text: "Quốc tế", meaning: "國際", tail: " " },
                { text: "Phụ nữ", meaning: "婦女", tail: "." },
              ],
            },
            {
              sentence: "Nhà vệ sinh nữ.",
              translation: "女廁。",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "nữ", meaning: "女", tail: "." },
              ],
            },
            {
              sentence: "Con gái.",
              translation: "女孩 / 女兒 (口語常用)。",
              segments: [
                { text: "Con", meaning: "孩子", tail: " " },
                { text: "gái", meaning: "女/雌性", tail: "." },
              ],
            },
          ],
          usage_note:
            "廁所寫「Nữ」。口語形容年輕女生多用「Con gái」，成熟女性用「Phụ nữ」。",
          image_file: "woman.png",
        },
        {
          id: "n-15",
          term_zh: "學校",
          related_terms: [
            {
              term_target: "Trường học",
              pronunciation: ["/tʃɯəŋ hɔkp/"],
              specific_note: "",
              segments: [
                { text: "Trường", meaning: "場/校", tail: " " },
                { text: "học", meaning: "學", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi đến trường.",
              translation: "去學校。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "trường", meaning: "學校", tail: "." },
              ],
            },
            {
              sentence: "Trường tôi ở gần đây.",
              translation: "我的學校在這附近。",
              segments: [
                { text: "Trường", meaning: "學校", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "gần đây", meaning: "附近", tail: "." },
              ],
            },
            {
              sentence: "Cổng trường.",
              translation: "校門口。",
              segments: [
                { text: "Cổng", meaning: "門/拱門", tail: " " },
                { text: "trường", meaning: "學校", tail: "." },
              ],
            },
          ],
          usage_note: "口語常簡稱「Trường」，如「Trường Đại học」(大學)。",
          image_file: "school.png",
        },
        {
          id: "n-16",
          term_zh: "老師",
          related_terms: [
            {
              term_target: "Giáo viên",
              pronunciation: ["/zaʊ viən/"],
              specific_note: "職業稱呼",
              segments: [
                { text: "Giáo", meaning: "教", tail: " " },
                { text: "viên", meaning: "員", tail: "" },
              ],
            },
            {
              term_target: "Thầy / Cô",
              pronunciation: ["/tʰɜj/", "/ko/"],
              specific_note: "尊稱(男/女)",
              segments: [
                { text: "Thầy", meaning: "男老師", tail: " / " },
                { text: "Cô", meaning: "女老師", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Thầy ơi!",
              translation: "老師好！(叫男老師)",
              segments: [
                { text: "Thầy", meaning: "師父/男老師", tail: " " },
                { text: "ơi", meaning: "喂(呼喚)", tail: "!" },
              ],
            },
            {
              sentence: "Cô giáo.",
              translation: "女老師。",
              segments: [
                { text: "Cô", meaning: "姑/女老師", tail: " " },
                { text: "giáo", meaning: "教", tail: "." },
              ],
            },
            {
              sentence: "Tôi là giáo viên.",
              translation: "我是老師 (介紹職業)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "giáo viên", meaning: "教師", tail: "." },
              ],
            },
          ],
          usage_note:
            "當面叫老師一定要用「Thầy」(男) 或「Cô」(女)，不要叫 Giáo viên。",
          image_file: "teacher.png",
        },
        {
          id: "n-17",
          term_zh: "電影",
          related_terms: [
            {
              term_target: "Phim",
              pronunciation: ["/fim/"],
              specific_note: "",
              segments: [{ text: "Phim", meaning: "影片/電影", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi xem phim.",
              translation: "去看電影。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "phim", meaning: "電影", tail: "." },
              ],
            },
            {
              sentence: "Phim hay quá.",
              translation: "電影太好看了。",
              segments: [
                { text: "Phim", meaning: "電影", tail: " " },
                { text: "hay", meaning: "好看/精彩", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Rạp chiếu phim.",
              translation: "電影院。",
              segments: [
                { text: "Rạp", meaning: "棚/院", tail: " " },
                { text: "chiếu", meaning: "照/放映", tail: " " },
                { text: "phim", meaning: "電影", tail: "." },
              ],
            },
          ],
          usage_note: "源自法語 Film。",
          image_file: "movie.png",
        },
        {
          id: "n-18",
          term_zh: "電話 / 手機",
          related_terms: [
            {
              term_target: "Điện thoại",
              pronunciation: ["/diən tʰwaj/"],
              specific_note: "",
              segments: [
                { text: "Điện", meaning: "電", tail: " " },
                { text: "thoại", meaning: "話", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Số điện thoại.",
              translation: "電話號碼。",
              segments: [
                { text: "Số", meaning: "數/號碼", tail: " " },
                { text: "điện thoại", meaning: "電話", tail: "." },
              ],
            },
            {
              sentence: "Nghe điện thoại.",
              translation: "接電話 (聽電話)。",
              segments: [
                { text: "Nghe", meaning: "聽", tail: " " },
                { text: "điện thoại", meaning: "電話", tail: "." },
              ],
            },
            {
              sentence: "Mượn điện thoại.",
              translation: "借手機。",
              segments: [
                { text: "Mượn", meaning: "借", tail: " " },
                { text: "điện thoại", meaning: "電話/手機", tail: "." },
              ],
            },
          ],
          usage_note:
            "手機叫「Điện thoại di động」(移動電話)，但口語常簡稱「Điện thoại」。",
          image_file: "phone.png",
        },
        {
          id: "n-19",
          term_zh: "電腦",
          related_terms: [
            {
              term_target: "Máy tính",
              pronunciation: ["/maj tiɲ/"],
              specific_note: "計算機/電腦",
              segments: [
                { text: "Máy", meaning: "機器", tail: " " },
                { text: "tính", meaning: "計算", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Dùng máy tính.",
              translation: "用電腦。",
              segments: [
                { text: "Dùng", meaning: "用", tail: " " },
                { text: "máy tính", meaning: "電腦", tail: "." },
              ],
            },
            {
              sentence: "Máy tính xách tay.",
              translation: "筆記型電腦 (手提電腦)。",
              segments: [
                { text: "Máy tính", meaning: "電腦", tail: " " },
                { text: "xách", meaning: "提", tail: " " },
                { text: "tay", meaning: "手", tail: "." },
              ],
            },
            {
              sentence: "Sửa máy tính.",
              translation: "修電腦。",
              segments: [
                { text: "Sửa", meaning: "修理", tail: " " },
                { text: "máy tính", meaning: "電腦", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思是「計算機」，現在通用指電腦。",
          image_file: "computer.png",
        },
        {
          id: "n-20",
          term_zh: "車",
          related_terms: [
            {
              term_target: "Xe",
              pronunciation: ["/sɛ/"],
              specific_note: "車輛總稱",
              segments: [{ text: "Xe", meaning: "車", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi xe máy.",
              translation: "騎機車。",
              segments: [
                { text: "Đi", meaning: "走/騎", tail: " " },
                { text: "xe máy", meaning: "機車", tail: "." },
              ],
            },
            {
              sentence: "Gọi xe.",
              translation: "叫車 (Grab/計程車)。",
              segments: [
                { text: "Gọi", meaning: "叫/呼叫", tail: " " },
                { text: "xe", meaning: "車", tail: "." },
              ],
            },
            {
              sentence: "Kẹt xe.",
              translation: "塞車。",
              segments: [
                { text: "Kẹt", meaning: "卡住/堵塞", tail: " " },
                { text: "xe", meaning: "車", tail: "." },
              ],
            },
          ],
          usage_note:
            "在越南，如果不特別說明，Xe 通常指機車 (Xe máy)，汽車叫 Ô tô。",
          image_file: "car.png",
        },
        {
          id: "n-21",
          term_zh: "市場",
          related_terms: [
            {
              term_target: "Chợ",
              pronunciation: ["/tʃə/"],
              specific_note: "傳統市場",
              segments: [{ text: "Chợ", meaning: "市場", tail: "" }],
            },
            {
              term_target: "Siêu thị",
              pronunciation: ["/siəw tʰi/"],
              specific_note: "超市",
              segments: [{ text: "Siêu thị", meaning: "超市", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chợ đêm.",
              translation: "夜市。",
              segments: [
                { text: "Chợ", meaning: "市場", tail: " " },
                { text: "đêm", meaning: "夜晚", tail: "." },
              ],
            },
            {
              sentence: "Đi chợ mua rau.",
              translation: "去市場買菜。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "chợ", meaning: "市場", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "rau", meaning: "蔬菜", tail: "." },
              ],
            },
            {
              sentence: "Chợ Bến Thành ở đâu?",
              translation: "濱城市場在哪裡？",
              segments: [
                { text: "Chợ", meaning: "市場", tail: " " },
                { text: "Bến Thành", meaning: "濱城(地名)", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
          ],
          usage_note:
            "越南人說的「Chợ」通常指露天的傳統市場，這也是在地文化的核心。",
          image_file: "market.png",
        },
        {
          id: "n-22",
          term_zh: "衣服",
          related_terms: [
            {
              term_target: "Quần áo",
              pronunciation: ["/kwan aʊ/"],
              specific_note: "衣物總稱",
              segments: [
                { text: "Quần", meaning: "褲子", tail: " " },
                { text: "áo", meaning: "衣服", tail: "" },
              ],
            },
            {
              term_target: "Đồ",
              pronunciation: ["/do/"],
              specific_note: "口語(東西/衣服)",
              segments: [{ text: "Đồ", meaning: "東西/衣物", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mua quần áo mới.",
              translation: "買新衣服。",
              segments: [
                { text: "Mua", meaning: "買", tail: " " },
                { text: "quần áo", meaning: "衣服", tail: " " },
                { text: "mới", meaning: "新", tail: "." },
              ],
            },
            {
              sentence: "Mặc đồ đẹp.",
              translation: "穿漂亮的衣服。",
              segments: [
                { text: "Mặc", meaning: "穿", tail: " " },
                { text: "đồ", meaning: "衣服", tail: " " },
                { text: "đẹp", meaning: "漂亮", tail: "." },
              ],
            },
            {
              sentence: "Giặt quần áo.",
              translation: "洗衣服。",
              segments: [
                { text: "Giặt", meaning: "洗(衣物)", tail: " " },
                { text: "quần áo", meaning: "衣服", tail: "." },
              ],
            },
          ],
          usage_note: "「Quần áo」字面意思是褲子和衣服，泛指所有服裝。",
          image_file: "clothes.png",
        },
        {
          id: "n-23",
          term_zh: "商店 / 店",
          related_terms: [
            {
              term_target: "Cửa hàng",
              pronunciation: ["/kɨa haŋ/"],
              specific_note: "商店",
              segments: [
                { text: "Cửa", meaning: "門", tail: " " },
                { text: "hàng", meaning: "行/貨", tail: "" },
              ],
            },
            {
              term_target: "Quán",
              pronunciation: ["/kwan/"],
              specific_note: "小吃店/咖啡店",
              segments: [{ text: "Quán", meaning: "館/店", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Quán cà phê.",
              translation: "咖啡店。",
              segments: [
                { text: "Quán", meaning: "店", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: "." },
              ],
            },
            {
              sentence: "Cửa hàng tiện lợi.",
              translation: "便利商店。",
              segments: [
                { text: "Cửa hàng", meaning: "商店", tail: " " },
                { text: "tiện lợi", meaning: "便利", tail: "." },
              ],
            },
            {
              sentence: "Quán ăn ngon.",
              translation: "好吃的餐館。",
              segments: [
                { text: "Quán", meaning: "店", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "ngon", meaning: "好吃", tail: "." },
              ],
            },
          ],
          usage_note: "賣東西的叫「Cửa hàng」，吃喝的地方通常叫「Quán」。",
          image_file: "shop.png",
        },
        {
          id: "n-24",
          term_zh: "公車 / 巴士",
          related_terms: [
            {
              term_target: "Xe buýt",
              pronunciation: ["/sɛ bit/"],
              specific_note: "",
              segments: [
                { text: "Xe", meaning: "車", tail: " " },
                { text: "buýt", meaning: "巴士(Bus)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi xe buýt.",
              translation: "搭公車。",
              segments: [
                { text: "Đi", meaning: "搭/走", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: "." },
              ],
            },
            {
              sentence: "Trạm xe buýt ở đâu?",
              translation: "公車站牌在哪？",
              segments: [
                { text: "Trạm", meaning: "站", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Lên xe buýt.",
              translation: "上公車。",
              segments: [
                { text: "Lên", meaning: "上", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: "." },
              ],
            },
          ],
          usage_note: "「Buýt」直接來自英文 Bus 的發音。",
          image_file: "bus.png",
        },
        {
          id: "n-25",
          term_zh: "街道 / 路",
          related_terms: [
            {
              term_target: "Đường",
              pronunciation: ["/dɯəŋ/"],
              specific_note: "路/街道",
              segments: [{ text: "Đường", meaning: "路/街", tail: "" }],
            },
            {
              term_target: "Phố",
              pronunciation: ["/fo/"],
              specific_note: "市區街道",
              segments: [{ text: "Phố", meaning: "街", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Trên đường.",
              translation: "在路上。",
              segments: [
                { text: "Trên", meaning: "在...上", tail: " " },
                { text: "đường", meaning: "路", tail: "." },
              ],
            },
            {
              sentence: "Sang đường.",
              translation: "過馬路。",
              segments: [
                { text: "Sang", meaning: "過/往", tail: " " },
                { text: "đường", meaning: "路", tail: "." },
              ],
            },
            {
              sentence: "Đường này đi đâu?",
              translation: "這條路去哪裡？",
              segments: [
                { text: "Đường", meaning: "路", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
          ],
          usage_note:
            "問路時最常用「Đường」，「Phố」多用於路名 (如 Phố cổ - 古街)。",
          image_file: "street.png",
        },
        {
          id: "n-26",
          term_zh: "房子 / 家",
          related_terms: [
            {
              term_target: "Nhà",
              pronunciation: ["/ɲa/"],
              specific_note: "",
              segments: [{ text: "Nhà", meaning: "家/屋子", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhà tôi.",
              translation: "我家。",
              segments: [
                { text: "Nhà", meaning: "家", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Về nhà thôi.",
              translation: "回家吧。",
              segments: [
                { text: "Về", meaning: "回", tail: " " },
                { text: "nhà", meaning: "家", tail: " " },
                { text: "thôi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Mua nhà mới.",
              translation: "買新房子。",
              segments: [
                { text: "Mua", meaning: "買", tail: " " },
                { text: "nhà", meaning: "房子", tail: " " },
                { text: "mới", meaning: "新", tail: "." },
              ],
            },
          ],
          usage_note: "「Nhà」既指建築物(房子)，也指抽象的「家」。",
          image_file: "house.png",
        },
        {
          id: "n-27",
          term_zh: "母親 / 媽媽",
          related_terms: [
            {
              term_target: "Mẹ",
              pronunciation: ["/mɛ/"],
              specific_note: "最常用",
              segments: [{ text: "Mẹ", meaning: "媽", tail: "" }],
            },
            {
              term_target: "Má",
              pronunciation: ["/ma/"],
              specific_note: "南方常用",
              segments: [{ text: "Má", meaning: "媽", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mẹ ơi.",
              translation: "媽咪 / 媽~ (呼喚)。",
              segments: [
                { text: "Mẹ", meaning: "媽", tail: " " },
                { text: "ơi", meaning: "喂/喔", tail: "." },
              ],
            },
            {
              sentence: "Yêu mẹ lắm.",
              translation: "很愛媽媽。",
              segments: [
                { text: "Yêu", meaning: "愛", tail: " " },
                { text: "mẹ", meaning: "媽媽", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Mẹ đang nấu ăn.",
              translation: "媽媽正在煮飯。",
              segments: [
                { text: "Mẹ", meaning: "媽媽", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "nấu ăn", meaning: "做飯", tail: "." },
              ],
            },
          ],
          usage_note: "北部多叫 Mẹ，南部多叫 Má。",
          image_file: "mother.png",
        },
        {
          id: "n-28",
          term_zh: "父親 / 爸爸",
          related_terms: [
            {
              term_target: "Bố",
              pronunciation: ["/bo/"],
              specific_note: "北部常用",
              segments: [{ text: "Bố", meaning: "爸", tail: "" }],
            },
            {
              term_target: "Ba",
              pronunciation: ["/ba/"],
              specific_note: "南部常用",
              segments: [{ text: "Ba", meaning: "爸", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bố ơi.",
              translation: "爸爸 (呼喚)。",
              segments: [
                { text: "Bố", meaning: "爸", tail: " " },
                { text: "ơi", meaning: "喂", tail: "." },
              ],
            },
            {
              sentence: "Ba đi làm rồi.",
              translation: "爸爸去上班了 (南方口語)。",
              segments: [
                { text: "Ba", meaning: "爸", tail: " " },
                { text: "đi làm", meaning: "去工作", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Bố của tôi.",
              translation: "我的父親。",
              segments: [
                { text: "Bố", meaning: "父親", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "北部稱 Bố，南部稱 Ba，都是爸爸的意思。",
          image_file: "father.png",
        },
        {
          id: "n-29",
          term_zh: "兄弟 (哥哥/弟弟)",
          related_terms: [
            {
              term_target: "Anh trai",
              pronunciation: ["/aɲ tʃaj/"],
              specific_note: "哥哥",
              segments: [
                { text: "Anh", meaning: "哥", tail: " " },
                { text: "trai", meaning: "男", tail: "" },
              ],
            },
            {
              term_target: "Em trai",
              pronunciation: ["/ɛm tʃaj/"],
              specific_note: "弟弟",
              segments: [
                { text: "Em", meaning: "弟妹", tail: " " },
                { text: "trai", meaning: "男", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh trai tôi.",
              translation: "我哥哥。",
              segments: [
                { text: "Anh trai", meaning: "哥哥", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Em trai ngoan.",
              translation: "乖弟弟。",
              segments: [
                { text: "Em trai", meaning: "弟弟", tail: " " },
                { text: "ngoan", meaning: "乖", tail: "." },
              ],
            },
            {
              sentence: "Anh em tốt.",
              translation: "好兄弟。",
              segments: [
                { text: "Anh em", meaning: "兄弟", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
          ],
          usage_note: "越南語必須分長幼：哥哥是 Anh，弟弟是 Em。",
          image_file: "brother.png",
        },
        {
          id: "n-30",
          term_zh: "姐妹 (姐姐/妹妹)",
          related_terms: [
            {
              term_target: "Chị gái",
              pronunciation: ["/ci ɣaj/"],
              specific_note: "姐姐",
              segments: [
                { text: "Chị", meaning: "姐", tail: " " },
                { text: "gái", meaning: "女", tail: "" },
              ],
            },
            {
              term_target: "Em gái",
              pronunciation: ["/ɛm ɣaj/"],
              specific_note: "妹妹",
              segments: [
                { text: "Em", meaning: "弟妹", tail: " " },
                { text: "gái", meaning: "女", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chị gái tôi.",
              translation: "我姐姐。",
              segments: [
                { text: "Chị gái", meaning: "姐姐", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Em gái dễ thương.",
              translation: "可愛的妹妹。",
              segments: [
                { text: "Em gái", meaning: "妹妹", tail: " " },
                { text: "dễ thương", meaning: "可愛", tail: "." },
              ],
            },
            {
              sentence: "Chị em.",
              translation: "姐妹。",
              segments: [
                { text: "Chị", meaning: "姐", tail: " " },
                { text: "em", meaning: "妹", tail: "." },
              ],
            },
          ],
          usage_note: "同樣區分長幼：姐姐是 Chị，妹妹是 Em。",
          image_file: "sister.png",
        },
        {
          id: "n-31",
          term_zh: "中文 / 漢語",
          related_terms: [
            {
              term_target: "Tiếng Trung",
              pronunciation: ["/tiəŋ tʃuŋm/"],
              specific_note: "",
              segments: [
                { text: "Tiếng", meaning: "語言", tail: " " },
                { text: "Trung", meaning: "中", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nói tiếng Trung.",
              translation: "說中文。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "tiếng Trung", meaning: "中文", tail: "." },
              ],
            },
            {
              sentence: "Học tiếng Trung khó không?",
              translation: "學中文難嗎？",
              segments: [
                { text: "Học", meaning: "學", tail: " " },
                { text: "tiếng Trung", meaning: "中文", tail: " " },
                { text: "khó", meaning: "難", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi biết một chút tiếng Trung.",
              translation: "我會一點點中文。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "會/懂", tail: " " },
                { text: "một chút", meaning: "一點點", tail: " " },
                { text: "tiếng Trung", meaning: "中文", tail: "." },
              ],
            },
          ],
          usage_note: "指語言用 Tiếng Trung，指文字也常說 Chữ Hán (漢字)。",
          image_file: "chinese.png",
        },
        {
          id: "n-32",
          term_zh: "早晨",
          related_terms: [
            {
              term_target: "Buổi sáng",
              pronunciation: ["/buəj saŋ/"],
              specific_note: "",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "sáng", meaning: "亮/早", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào buổi sáng.",
              translation: "早安 (正式)。",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "buổi sáng", meaning: "早上", tail: "." },
              ],
            },
            {
              sentence: "Sáng nay.",
              translation: "今天早上。",
              segments: [
                { text: "Sáng", meaning: "早", tail: " " },
                { text: "nay", meaning: "今", tail: "." },
              ],
            },
            {
              sentence: "Ăn sáng.",
              translation: "吃早餐。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "sáng", meaning: "早餐/早", tail: "." },
              ],
            },
          ],
          usage_note: "口語常省略 Buổi，直接說 Sáng (例如：Sáng mai - 明早)。",
          image_file: "morning.png",
        },
        {
          id: "n-33",
          term_zh: "夜晚",
          related_terms: [
            {
              term_target: "Buổi tối",
              pronunciation: ["/buəj toj/"],
              specific_note: "晚上",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "tối", meaning: "暗/晚", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào buổi tối.",
              translation: "晚安 (見面時)。",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "buổi tối", meaning: "晚上", tail: "." },
              ],
            },
            {
              sentence: "Tối nay đi đâu?",
              translation: "今晚去哪？",
              segments: [
                { text: "Tối", meaning: "晚", tail: " " },
                { text: "nay", meaning: "今", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
            {
              sentence: "Ăn tối.",
              translation: "吃晚餐。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "tối", meaning: "晚/晚餐", tail: "." },
              ],
            },
          ],
          usage_note: "同樣常省略 Buổi，直接說 Tối (例如：Tối qua - 昨晚)。",
          image_file: "night.png",
        },
        {
          id: "n-34",
          term_zh: "票 / 車票",
          related_terms: [
            {
              term_target: "Vé",
              pronunciation: ["/vɛ/"],
              specific_note: "",
              segments: [{ text: "Vé", meaning: "票", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Vé xe buýt.",
              translation: "公車票。",
              segments: [
                { text: "Vé", meaning: "票", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: "." },
              ],
            },
            {
              sentence: "Mua vé ở đâu?",
              translation: "在哪裡買票？",
              segments: [
                { text: "Mua", meaning: "買", tail: " " },
                { text: "vé", meaning: "票", tail: " " },
                { text: "ở đâu", meaning: "在哪", tail: "?" },
              ],
            },
            {
              sentence: "Cho tôi xem vé.",
              translation: "給我看票 (驗票)。",
              segments: [
                { text: "Cho", meaning: "給/讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "vé", meaning: "票", tail: "." },
              ],
            },
          ],
          usage_note: "電影票、車票、門票都統稱「Vé」。",
          image_file: "ticket.png",
        },
        {
          id: "n-35",
          term_zh: "包包",
          related_terms: [
            {
              term_target: "Túi",
              pronunciation: ["/tuj/"],
              specific_note: "袋子/包",
              segments: [{ text: "Túi", meaning: "袋", tail: "" }],
            },
            {
              term_target: "Ba lô",
              pronunciation: ["/ba lo/"],
              specific_note: "後背包",
              segments: [{ text: "Ba lô", meaning: "背包", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Túi xách đẹp.",
              translation: "漂亮的手提包。",
              segments: [
                { text: "Túi xách", meaning: "手提包", tail: " " },
                { text: "đẹp", meaning: "美", tail: "." },
              ],
            },
            {
              sentence: "Quên mang túi.",
              translation: "忘記帶包包。",
              segments: [
                { text: "Quên", meaning: "忘記", tail: " " },
                { text: "mang", meaning: "帶", tail: " " },
                { text: "túi", meaning: "包", tail: "." },
              ],
            },
            {
              sentence: "Túi ni lông.",
              translation: "塑膠袋 (Nylon bag)。",
              segments: [
                { text: "Túi", meaning: "袋", tail: " " },
                { text: "ni lông", meaning: "尼龍/塑膠", tail: "." },
              ],
            },
          ],
          usage_note: "一般包包叫「Túi」，後背包叫「Ba lô」。",
          image_file: "bag.png",
        },
        {
          id: "n-36",
          term_zh: "杯子",
          related_terms: [
            {
              term_target: "Cốc",
              pronunciation: ["/kɔkp/"],
              specific_note: "杯子(北)",
              segments: [{ text: "Cốc", meaning: "杯", tail: "" }],
            },
            {
              term_target: "Ly",
              pronunciation: ["/li/"],
              specific_note: "杯子(南)",
              segments: [{ text: "Ly", meaning: "杯", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Một cốc nước.",
              translation: "一杯水。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "cốc", meaning: "杯", tail: " " },
                { text: "nước", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "Cụng ly!",
              translation: "乾杯！(南方常用)",
              segments: [
                { text: "Cụng", meaning: "碰", tail: " " },
                { text: "ly", meaning: "杯", tail: "!" },
              ],
            },
            {
              sentence: "Ly cà phê sữa.",
              translation: "一杯牛奶咖啡。",
              segments: [
                { text: "Ly", meaning: "杯", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: " " },
                { text: "sữa", meaning: "奶", tail: "." },
              ],
            },
          ],
          usage_note: "北部習慣說 Cốc，南部習慣說 Ly。",
          image_file: "cup.png",
        },
        {
          id: "n-37",
          term_zh: "醫生",
          related_terms: [
            {
              term_target: "Bác sĩ",
              pronunciation: ["/bak si/"],
              specific_note: "",
              segments: [
                { text: "Bác", meaning: "博", tail: " " },
                { text: "sĩ", meaning: "士", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi gặp bác sĩ.",
              translation: "去看醫生。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "bác sĩ", meaning: "醫生", tail: "." },
              ],
            },
            {
              sentence: "Bác sĩ ơi!",
              translation: "醫生！(呼喚)",
              segments: [
                { text: "Bác sĩ", meaning: "醫生", tail: " " },
                { text: "ơi", meaning: "喂", tail: "!" },
              ],
            },
            {
              sentence: "Tôi muốn làm bác sĩ.",
              translation: "我想當醫生。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "bác sĩ", meaning: "醫生", tail: "." },
              ],
            },
          ],
          usage_note: "越南語「博士」是 Tiến sĩ，「醫生」是 Bác sĩ，不要搞混。",
          image_file: "doctor.png",
        },
        {
          id: "n-38",
          term_zh: "警察",
          related_terms: [
            {
              term_target: "Công an",
              pronunciation: ["/koŋm an/"],
              specific_note: "公安(最常用)",
              segments: [
                { text: "Công", meaning: "公", tail: " " },
                { text: "an", meaning: "安", tail: "" },
              ],
            },
            {
              term_target: "Cảnh sát",
              pronunciation: ["/kaɲ sat/"],
              specific_note: "警察(交通/刑警)",
              segments: [
                { text: "Cảnh", meaning: "警", tail: " " },
                { text: "sát", meaning: "察", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Gọi công an đi.",
              translation: "叫警察(公安)吧。",
              segments: [
                { text: "Gọi", meaning: "叫", tail: " " },
                { text: "công an", meaning: "公安", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Cảnh sát giao thông.",
              translation: "交通警察。",
              segments: [
                { text: "Cảnh sát", meaning: "警察", tail: " " },
                { text: "giao thông", meaning: "交通", tail: "." },
              ],
            },
            {
              sentence: "Chú công an.",
              translation: "警察叔叔。",
              segments: [
                { text: "Chú", meaning: "叔叔", tail: " " },
                { text: "công an", meaning: "公安", tail: "." },
              ],
            },
          ],
          usage_note: "在越南，警察通常被稱為「Công an」(公安)。",
          image_file: "police.png",
        },
        {
          id: "n-39",
          term_zh: "醫院",
          related_terms: [
            {
              term_target: "Bệnh viện",
              pronunciation: ["/beɲ viən/"],
              specific_note: "",
              segments: [
                { text: "Bệnh", meaning: "病", tail: " " },
                { text: "viện", meaning: "院", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đưa tôi đến bệnh viện.",
              translation: "送我去醫院。",
              segments: [
                { text: "Đưa", meaning: "送/帶", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "bệnh viện", meaning: "醫院", tail: "." },
              ],
            },
            {
              sentence: "Bệnh viện lớn.",
              translation: "大醫院。",
              segments: [
                { text: "Bệnh viện", meaning: "醫院", tail: " " },
                { text: "lớn", meaning: "大", tail: "." },
              ],
            },
            {
              sentence: "Nằm viện.",
              translation: "住院 (躺醫院)。",
              segments: [
                { text: "Nằm", meaning: "躺/臥", tail: " " },
                { text: "viện", meaning: "院", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思就是「病院」。",
          image_file: "hospital.png",
        },
        {
          id: "n-40",
          term_zh: "座位 / 椅子",
          related_terms: [
            {
              term_target: "Ghế",
              pronunciation: ["/ɣe/"],
              specific_note: "椅子",
              segments: [{ text: "Ghế", meaning: "椅", tail: "" }],
            },
            {
              term_target: "Chỗ ngồi",
              pronunciation: ["/cɔ ŋoj/"],
              specific_note: "座位(位置)",
              segments: [
                { text: "Chỗ", meaning: "地方", tail: " " },
                { text: "ngồi", meaning: "坐", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mời ngồi ghế.",
              translation: "請坐(椅子)。",
              segments: [
                { text: "Mời", meaning: "請", tail: " " },
                { text: "ngồi", meaning: "坐", tail: " " },
                { text: "ghế", meaning: "椅子", tail: "." },
              ],
            },
            {
              sentence: "Hết chỗ ngồi rồi.",
              translation: "沒位子了。",
              segments: [
                { text: "Hết", meaning: "沒/完", tail: " " },
                { text: "chỗ ngồi", meaning: "座位", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Chỗ này có người chưa?",
              translation: "這個位子有人嗎？",
              segments: [
                { text: "Chỗ", meaning: "位子/地方", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "chưa", meaning: "沒", tail: "?" },
              ],
            },
          ],
          usage_note: "實體椅子叫「Ghế」，抽象的位子或空間叫「Chỗ」。",
          image_file: "seat.png",
        },
        {
          id: "n-41",
          term_zh: "門",
          related_terms: [
            {
              term_target: "Cửa",
              pronunciation: ["/kɨa/"],
              specific_note: "一般的門",
              segments: [{ text: "Cửa", meaning: "門", tail: "" }],
            },
            {
              term_target: "Cổng",
              pronunciation: ["/koŋm/"],
              specific_note: "大門/拱門",
              segments: [{ text: "Cổng", meaning: "門", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mở cửa.",
              translation: "開門。",
              segments: [
                { text: "Mở", meaning: "開", tail: " " },
                { text: "cửa", meaning: "門", tail: "." },
              ],
            },
            {
              sentence: "Đóng cửa lại.",
              translation: "把門關上。",
              segments: [
                { text: "Đóng", meaning: "關", tail: " " },
                { text: "cửa", meaning: "門", tail: " " },
                { text: "lại", meaning: "回來/攏", tail: "." },
              ],
            },
            {
              sentence: "Cổng trường.",
              translation: "校門口 (學校大門)。",
              segments: [
                { text: "Cổng", meaning: "大門", tail: " " },
                { text: "trường", meaning: "學校", tail: "." },
              ],
            },
          ],
          usage_note: "家裡的門叫「Cửa」，建築物外面的大門叫「Cổng」。",
          image_file: "door.png",
        },
        {
          id: "n-42",
          term_zh: "房間",
          related_terms: [
            {
              term_target: "Phòng",
              pronunciation: ["/fɔŋm/"],
              specific_note: "",
              segments: [{ text: "Phòng", meaning: "房", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Số phòng.",
              translation: "房號。",
              segments: [
                { text: "Số", meaning: "號碼", tail: " " },
                { text: "phòng", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "Dọn phòng.",
              translation: "打掃房間。",
              segments: [
                { text: "Dọn", meaning: "整理/打掃", tail: " " },
                { text: "phòng", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "Phòng ngủ.",
              translation: "臥室 (睡覺的房間)。",
              segments: [
                { text: "Phòng", meaning: "房", tail: " " },
                { text: "ngủ", meaning: "睡", tail: "." },
              ],
            },
          ],
          usage_note: "很多空間都用「Phòng + 功能」，如 Phòng khách (客廳)。",
          image_file: "room.png",
        },
        {
          id: "n-43",
          term_zh: "車站",
          related_terms: [
            {
              term_target: "Ga",
              pronunciation: ["/ɣa/"],
              specific_note: "火車站",
              segments: [{ text: "Ga", meaning: "站", tail: "" }],
            },
            {
              term_target: "Bến xe",
              pronunciation: ["/ben sɛ/"],
              specific_note: "客運/公車總站",
              segments: [
                { text: "Bến", meaning: "碼頭/站", tail: " " },
                { text: "xe", meaning: "車", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ga Hà Nội.",
              translation: "河內火車站。",
              segments: [
                { text: "Ga", meaning: "火車站", tail: " " },
                { text: "Hà Nội", meaning: "河內", tail: "." },
              ],
            },
            {
              sentence: "Bến xe Miền Tây.",
              translation: "西部客運站 (胡志明市)。",
              segments: [
                { text: "Bến xe", meaning: "客運站", tail: " " },
                { text: "Miền Tây", meaning: "西部", tail: "." },
              ],
            },
            {
              sentence: "Trạm xe buýt.",
              translation: "公車站牌 (路邊停靠站)。",
              segments: [
                { text: "Trạm", meaning: "站", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: "." },
              ],
            },
          ],
          usage_note: "火車用「Ga」，長途客運用「Bến」，市區公車亭用「Trạm」。",
          image_file: "station.png",
        },
        {
          id: "n-44",
          term_zh: "地鐵 / 捷運",
          related_terms: [
            {
              term_target: "Tàu điện ngầm",
              pronunciation: ["/taʊ diən ŋəm/"],
              specific_note: "地鐵",
              segments: [
                { text: "Tàu", meaning: "船/車", tail: " " },
                { text: "điện", meaning: "電", tail: " " },
                { text: "ngầm", meaning: "地下/暗", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi tàu điện.",
              translation: "搭捷運/電車。",
              segments: [
                { text: "Đi", meaning: "搭乘", tail: " " },
                { text: "tàu điện", meaning: "電車", tail: "." },
              ],
            },
            {
              sentence: "Ga tàu điện ở đâu?",
              translation: "捷運站在哪？",
              segments: [
                { text: "Ga", meaning: "站", tail: " " },
                { text: "tàu điện", meaning: "電車", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
            {
              sentence: "Tàu điện trên cao.",
              translation: "高架捷運 (河內常用)。",
              segments: [
                { text: "Tàu điện", meaning: "電車", tail: " " },
                { text: "trên", meaning: "在...上", tail: " " },
                { text: "cao", meaning: "高", tail: "." },
              ],
            },
          ],
          usage_note: "越南目前捷運系統剛起步，常用「Tàu điện」(電車) 統稱。",
          image_file: "subway.png",
        },
        {
          id: "n-45",
          term_zh: "火車",
          related_terms: [
            {
              term_target: "Tàu hỏa",
              pronunciation: ["/taʊ hɔa/"],
              specific_note: "北/通用",
              segments: [
                { text: "Tàu", meaning: "船/車", tail: " " },
                { text: "hỏa", meaning: "火", tail: "" },
              ],
            },
            {
              term_target: "Xe lửa",
              pronunciation: ["/sɛ lɨa/"],
              specific_note: "南/口語",
              segments: [
                { text: "Xe", meaning: "車", tail: " " },
                { text: "lửa", meaning: "火", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi bằng tàu hỏa.",
              translation: "搭火車去。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "bằng", meaning: "藉由", tail: " " },
                { text: "tàu hỏa", meaning: "火車", tail: "." },
              ],
            },
            {
              sentence: "Vé tàu.",
              translation: "火車票 (船票也通用)。",
              segments: [
                { text: "Vé", meaning: "票", tail: " " },
                { text: "tàu", meaning: "車/船", tail: "." },
              ],
            },
            {
              sentence: "Đường sắt.",
              translation: "鐵路。",
              segments: [
                { text: "Đường", meaning: "路", tail: " " },
                { text: "sắt", meaning: "鐵", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思真的就是「火(Hỏa/Lửa) + 車/船(Tàu/Xe)」。",
          image_file: "train.png",
        },
        {
          id: "n-46",
          term_zh: "機場",
          related_terms: [
            {
              term_target: "Sân bay",
              pronunciation: ["/sən baj/"],
              specific_note: "",
              segments: [
                { text: "Sân", meaning: "場/院子", tail: " " },
                { text: "bay", meaning: "飛", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ra sân bay.",
              translation: "去機場 (出發去機場)。",
              segments: [
                { text: "Ra", meaning: "出/往", tail: " " },
                { text: "sân bay", meaning: "機場", tail: "." },
              ],
            },
            {
              sentence: "Sân bay Tân Sơn Nhất.",
              translation: "新山一機場 (胡志明市)。",
              segments: [
                { text: "Sân bay", meaning: "機場", tail: " " },
                { text: "Tân Sơn Nhất", meaning: "新山一", tail: "." },
              ],
            },
            {
              sentence: "Đón ở sân bay.",
              translation: "在機場接機。",
              segments: [
                { text: "Đón", meaning: "接/迎", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "sân bay", meaning: "機場", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思就是「飛行的場地」。",
          image_file: "airport.png",
        },
        {
          id: "n-47",
          term_zh: "行李",
          related_terms: [
            {
              term_target: "Hành lý",
              pronunciation: ["/haɲ li/"],
              specific_note: "",
              segments: [
                { text: "Hành", meaning: "行", tail: " " },
                { text: "lý", meaning: "李", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ký gửi hành lý.",
              translation: "托運行李。",
              segments: [
                { text: "Ký gửi", meaning: "寄送/托運", tail: " " },
                { text: "hành lý", meaning: "行李", tail: "." },
              ],
            },
            {
              sentence: "Hành lý xách tay.",
              translation: "手提行李。",
              segments: [
                { text: "Hành lý", meaning: "行李", tail: " " },
                { text: "xách", meaning: "提", tail: " " },
                { text: "tay", meaning: "手", tail: "." },
              ],
            },
            {
              sentence: "Quên hành lý.",
              translation: "忘記(拿)行李。",
              segments: [
                { text: "Quên", meaning: "忘記", tail: " " },
                { text: "hành lý", meaning: "行李", tail: "." },
              ],
            },
          ],
          usage_note: "這是一個漢越詞，發音跟中文「行李」有點像。",
          image_file: "luggage.png",
        },
        {
          id: "n-48",
          term_zh: "地圖",
          related_terms: [
            {
              term_target: "Bản đồ",
              pronunciation: ["/ban do/"],
              specific_note: "",
              segments: [
                { text: "Bản", meaning: "版/本", tail: " " },
                { text: "đồ", meaning: "圖", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Xem bản đồ.",
              translation: "看地圖。",
              segments: [
                { text: "Xem", meaning: "看", tail: " " },
                { text: "bản đồ", meaning: "地圖", tail: "." },
              ],
            },
            {
              sentence: "Bản đồ Google.",
              translation: "谷歌地圖。",
              segments: [
                { text: "Bản đồ", meaning: "地圖", tail: " " },
                { text: "Google", meaning: "谷歌", tail: "." },
              ],
            },
            {
              sentence: "Chỉ đường trên bản đồ.",
              translation: "在地圖上指路。",
              segments: [
                { text: "Chỉ", meaning: "指", tail: " " },
                { text: "đường", meaning: "路", tail: " " },
                { text: "trên", meaning: "上", tail: " " },
                { text: "bản đồ", meaning: "地圖", tail: "." },
              ],
            },
          ],
          usage_note: "「版圖」的意思。",
          image_file: "map.png",
        },
        {
          id: "n-49",
          term_zh: "櫃檯",
          related_terms: [
            {
              term_target: "Quầy",
              pronunciation: ["/kwɜj/"],
              specific_note: "",
              segments: [{ text: "Quầy", meaning: "櫃檯", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Quầy lễ tân.",
              translation: "接待櫃檯 (前台)。",
              segments: [
                { text: "Quầy", meaning: "櫃檯", tail: " " },
                { text: "lễ tân", meaning: "禮賓/接待", tail: "." },
              ],
            },
            {
              sentence: "Quầy thanh toán.",
              translation: "結帳櫃檯。",
              segments: [
                { text: "Quầy", meaning: "櫃檯", tail: " " },
                { text: "thanh toán", meaning: "結帳/清算", tail: "." },
              ],
            },
            {
              sentence: "Hỏi ở quầy thông tin.",
              translation: "去服務台(訊息櫃檯)問。",
              segments: [
                { text: "Hỏi", meaning: "問", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "quầy", meaning: "櫃檯", tail: " " },
                { text: "thông tin", meaning: "信息", tail: "." },
              ],
            },
          ],
          usage_note: "任何服務性質的檯面都叫「Quầy」。",
          image_file: "counter.png",
        },
        {
          id: "n-50",
          term_zh: "大廳",
          related_terms: [
            {
              term_target: "Sảnh",
              pronunciation: ["/saɲ/"],
              specific_note: "",
              segments: [{ text: "Sảnh", meaning: "廳", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đợi ở sảnh.",
              translation: "在大廳等。",
              segments: [
                { text: "Đợi", meaning: "等", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "sảnh", meaning: "大廳", tail: "." },
              ],
            },
            {
              sentence: "Sảnh khách sạn.",
              translation: "飯店大廳。",
              segments: [
                { text: "Sảnh", meaning: "大廳", tail: " " },
                { text: "khách sạn", meaning: "飯店", tail: "." },
              ],
            },
            {
              sentence: "Gặp nhau tại sảnh.",
              translation: "在大廳碰面。",
              segments: [
                { text: "Gặp", meaning: "見面", tail: " " },
                { text: "nhau", meaning: "互相", tail: " " },
                { text: "tại", meaning: "在", tail: " " },
                { text: "sảnh", meaning: "大廳", tail: "." },
              ],
            },
          ],
          usage_note: "飯店或辦公大樓的一樓大廳。",
          image_file: "lobby.png",
        },
        {
          id: "n-51",
          term_zh: "預定 / 預約",
          related_terms: [
            {
              term_target: "Đặt trước",
              pronunciation: ["/dat tʃɨək/"],
              specific_note: "動作",
              segments: [
                { text: "Đặt", meaning: "訂/放", tail: " " },
                { text: "trước", meaning: "先/前", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn đặt phòng.",
              translation: "我想要訂房。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "đặt", meaning: "訂", tail: " " },
                { text: "phòng", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "Bạn đã đặt bàn chưa?",
              translation: "你訂位(桌子)了嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "đặt", meaning: "訂", tail: " " },
                { text: "bàn", meaning: "桌子", tail: " " },
                { text: "chưa", meaning: "沒", tail: "?" },
              ],
            },
            {
              sentence: "Hủy đặt phòng.",
              translation: "取消訂房。",
              segments: [
                { text: "Hủy", meaning: "毀/取消", tail: " " },
                { text: "đặt", meaning: "訂", tail: " " },
                { text: "phòng", meaning: "房", tail: "." },
              ],
            },
          ],
          usage_note: "「Đặt」是動詞，訂房、訂位、訂票都用這個字。",
          image_file: "reservation.png",
        },
        {
          id: "n-52",
          term_zh: "入住 (登記)",
          related_terms: [
            {
              term_target: "Nhận phòng",
              pronunciation: ["/ɲən fɔŋm/"],
              specific_note: "領房(Check-in)",
              segments: [
                { text: "Nhận", meaning: "領/接收", tail: " " },
                { text: "phòng", meaning: "房間", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn nhận phòng.",
              translation: "我要辦理入住。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "nhận", meaning: "領", tail: " " },
                { text: "phòng", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "Giờ nhận phòng là mấy giờ?",
              translation: "入住時間是幾點？",
              segments: [
                { text: "Giờ", meaning: "時間", tail: " " },
                { text: "nhận phòng", meaning: "入住", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "mấy giờ", meaning: "幾點", tail: "?" },
              ],
            },
            {
              sentence: "Check-in ở đâu?",
              translation: "在哪裡 Check-in？(年輕人常用英文)",
              segments: [
                { text: "Check-in", meaning: "入住", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
          ],
          usage_note:
            "正式說法是「Nhận phòng」(領房)，但說 Check-in 大家也懂。",
          image_file: "check_in.png",
        },
        {
          id: "n-53",
          term_zh: "退房",
          related_terms: [
            {
              term_target: "Trả phòng",
              pronunciation: ["/tʃa fɔŋm/"],
              specific_note: "還房(Check-out)",
              segments: [
                { text: "Trả", meaning: "還/歸還", tail: " " },
                { text: "phòng", meaning: "房間", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn trả phòng.",
              translation: "我要退房。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "trả", meaning: "還", tail: " " },
                { text: "phòng", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "12 giờ trả phòng.",
              translation: "12點退房。",
              segments: [
                { text: "12", meaning: "十二", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "trả phòng", meaning: "退房", tail: "." },
              ],
            },
            {
              sentence: "Đã trả phòng chưa?",
              translation: "退房了嗎？",
              segments: [
                { text: "Đã", meaning: "已經", tail: " " },
                { text: "trả phòng", meaning: "退房", tail: " " },
                { text: "chưa", meaning: "沒", tail: "?" },
              ],
            },
          ],
          usage_note: "字面意思是「把房間還回去」。",
          image_file: "check_out.png",
        },
        {
          id: "n-54",
          term_zh: "飲料",
          related_terms: [
            {
              term_target: "Đồ uống",
              pronunciation: ["/do uəŋ/"],
              specific_note: "",
              segments: [
                { text: "Đồ", meaning: "東西", tail: " " },
                { text: "uống", meaning: "喝", tail: "" },
              ],
            },
            {
              term_target: "Nước ngọt",
              pronunciation: ["/nɯək ŋɔt/"],
              specific_note: "汽水/甜飲料",
              segments: [
                { text: "Nước", meaning: "水", tail: " " },
                { text: "ngọt", meaning: "甜", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mua đồ uống.",
              translation: "買飲料。",
              segments: [
                { text: "Mua", meaning: "買", tail: " " },
                { text: "đồ uống", meaning: "飲料", tail: "." },
              ],
            },
            {
              sentence: "Bạn muốn uống gì?",
              translation: "你想喝什麼？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "uống", meaning: "喝", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Không mang đồ uống vào.",
              translation: "禁止攜帶飲料入內。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "mang", meaning: "帶", tail: " " },
                { text: "đồ uống", meaning: "飲料", tail: " " },
                { text: "vào", meaning: "進", tail: "." },
              ],
            },
          ],
          usage_note:
            "「Đồ uống」是飲料總稱，可樂雪碧這類叫「Nước ngọt」(甜水)。",
          image_file: "drink.png",
        },
        {
          id: "n-55",
          term_zh: "菜單",
          related_terms: [
            {
              term_target: "Thực đơn",
              pronunciation: ["/tʰɨk dən/"],
              specific_note: "正式",
              segments: [
                { text: "Thực", meaning: "食", tail: " " },
                { text: "đơn", meaning: "單", tail: "" },
              ],
            },
            {
              term_target: "Menu",
              pronunciation: ["/mɛ nu/"],
              specific_note: "口語常用",
              segments: [{ text: "Menu", meaning: "菜單", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi xem menu.",
              translation: "給我看菜單。",
              segments: [
                { text: "Cho", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "menu", meaning: "菜單", tail: "." },
              ],
            },
            {
              sentence: "Thực đơn hôm nay.",
              translation: "今日菜單。",
              segments: [
                { text: "Thực đơn", meaning: "菜單", tail: " " },
                { text: "hôm nay", meaning: "今天", tail: "." },
              ],
            },
            {
              sentence: "Trong menu có gì?",
              translation: "菜單裡有什麼？",
              segments: [
                { text: "Trong", meaning: "裡面", tail: " " },
                { text: "menu", meaning: "菜單", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note:
            "雖然有正式的「Thực đơn」，但年輕人跟店員都直接說「Menu」。",
          image_file: "menu.png",
        },
        {
          id: "n-56",
          term_zh: "午餐",
          related_terms: [
            {
              term_target: "Bữa trưa",
              pronunciation: ["/bɨa tʃɯa/"],
              specific_note: "午餐(名詞)",
              segments: [
                { text: "Bữa", meaning: "餐/頓", tail: " " },
                { text: "trưa", meaning: "中午", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ăn trưa.",
              translation: "吃午餐 (動詞)。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "trưa", meaning: "午餐", tail: "." },
              ],
            },
            {
              sentence: "Nghỉ trưa.",
              translation: "午休 (休息中午)。",
              segments: [
                { text: "Nghỉ", meaning: "休息", tail: " " },
                { text: "trưa", meaning: "中午", tail: "." },
              ],
            },
            {
              sentence: "Trưa nay ăn gì?",
              translation: "今天中午吃什麼？",
              segments: [
                { text: "Trưa", meaning: "中午", tail: " " },
                { text: "nay", meaning: "今", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "「Bữa trưa」是一頓午餐，「Ăn trưa」是吃午餐。",
          image_file: "lunch.png",
        },
        {
          id: "n-57",
          term_zh: "晚餐",
          related_terms: [
            {
              term_target: "Bữa tối",
              pronunciation: ["/bɨa toj/"],
              specific_note: "晚餐(名詞)",
              segments: [
                { text: "Bữa", meaning: "餐", tail: " " },
                { text: "tối", meaning: "晚上", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ăn tối.",
              translation: "吃晚餐。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "tối", meaning: "晚餐", tail: "." },
              ],
            },
            {
              sentence: "Mời ăn tối.",
              translation: "請吃晚餐 (邀約)。",
              segments: [
                { text: "Mời", meaning: "邀請", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "tối", meaning: "晚餐", tail: "." },
              ],
            },
            {
              sentence: "Chuẩn bị bữa tối.",
              translation: "準備晚餐。",
              segments: [
                { text: "Chuẩn bị", meaning: "準備", tail: " " },
                { text: "bữa tối", meaning: "晚餐", tail: "." },
              ],
            },
          ],
          usage_note: "同午餐，「Bữa tối」是名詞，「Ăn tối」是動作。",
          image_file: "dinner.png",
        },
        {
          id: "n-58",
          term_zh: "帳單 / 收據",
          related_terms: [
            {
              term_target: "Hóa đơn",
              pronunciation: ["/hɔa dən/"],
              specific_note: "帳單/發票",
              segments: [
                { text: "Hóa", meaning: "貨", tail: " " },
                { text: "đơn", meaning: "單", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tính tiền.",
              translation: "結帳 (算錢)。",
              segments: [
                { text: "Tính", meaning: "計算", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi hóa đơn.",
              translation: "給我帳單(發票)。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "hóa đơn", meaning: "帳單", tail: "." },
              ],
            },
            {
              sentence: "Hóa đơn điện nước.",
              translation: "水電費帳單。",
              segments: [
                { text: "Hóa đơn", meaning: "帳單", tail: " " },
                { text: "điện", meaning: "電", tail: " " },
                { text: "nước", meaning: "水", tail: "." },
              ],
            },
          ],
          usage_note:
            "在餐廳要結帳喊「Tính tiền」，要收據憑證才說「Lấy hóa đơn」。",
          image_file: "bill.png",
        },
        {
          id: "n-59",
          term_zh: "價錢",
          related_terms: [
            {
              term_target: "Giá",
              pronunciation: ["/za/"],
              specific_note: "價格",
              segments: [{ text: "Giá", meaning: "價", tail: "" }],
            },
            {
              term_target: "Giá cả",
              pronunciation: ["/za ka/"],
              specific_note: "行情/價位",
              segments: [{ text: "Giá cả", meaning: "價格", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Giá bao nhiêu?",
              translation: "價格多少？",
              segments: [
                { text: "Giá", meaning: "價", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: "?" },
              ],
            },
            {
              sentence: "Giá rẻ.",
              translation: "便宜的價格。",
              segments: [
                { text: "Giá", meaning: "價", tail: " " },
                { text: "rẻ", meaning: "便宜", tail: "." },
              ],
            },
            {
              sentence: "Giảm giá.",
              translation: "降價 / 打折。",
              segments: [
                { text: "Giảm", meaning: "減/降", tail: " " },
                { text: "giá", meaning: "價", tail: "." },
              ],
            },
          ],
          usage_note: "看到「Giảm giá」就是有特價打折。",
          image_file: "price.png",
        },
        {
          id: "n-60",
          term_zh: "收據 (憑證)",
          related_terms: [
            {
              term_target: "Biên lai",
              pronunciation: ["/biən laj/"],
              specific_note: "收據/收條",
              segments: [
                { text: "Biên", meaning: "編", tail: " " },
                { text: "lai", meaning: "來", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Giữ lại biên lai.",
              translation: "保留收據。",
              segments: [
                { text: "Giữ", meaning: "保留", tail: " " },
                { text: "lại", meaning: "下/住", tail: " " },
                { text: "biên lai", meaning: "收據", tail: "." },
              ],
            },
            {
              sentence: "Biên lai đóng tiền.",
              translation: "繳費收據。",
              segments: [
                { text: "Biên lai", meaning: "收據", tail: " " },
                { text: "đóng", meaning: "繳/交", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Có biên lai không?",
              translation: "有收據嗎？",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "biên lai", meaning: "收據", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note:
            "「Hóa đơn」通常指有明細的帳單發票，「Biên lai」偏向簡單的收款證明。",
          image_file: "receipt.png",
        },
        {
          id: "n-61",
          term_zh: "尺寸",
          related_terms: [
            {
              term_target: "Size",
              pronunciation: ["/saj/"],
              specific_note: "外來語(最常用)",
              segments: [{ text: "Size", meaning: "尺寸", tail: "" }],
            },
            {
              term_target: "Cỡ",
              pronunciation: ["/kə/"],
              specific_note: "越文說法",
              segments: [{ text: "Cỡ", meaning: "規格/尺寸", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Size lớn.",
              translation: "大尺寸。",
              segments: [
                { text: "Size", meaning: "尺寸", tail: " " },
                { text: "lớn", meaning: "大", tail: "." },
              ],
            },
            {
              sentence: "Bạn mặc size mấy?",
              translation: "你穿幾號(尺寸)？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "mặc", meaning: "穿", tail: " " },
                { text: "size", meaning: "尺寸", tail: " " },
                { text: "mấy", meaning: "幾", tail: "?" },
              ],
            },
            {
              sentence: "Không đúng cỡ.",
              translation: "尺寸不對。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "đúng", meaning: "對", tail: " " },
                { text: "cỡ", meaning: "尺寸", tail: "." },
              ],
            },
          ],
          usage_note: "買衣服直接說英文「Size」完全沒問題。",
          image_file: "size.png",
        },
        {
          id: "n-62",
          term_zh: "入口",
          related_terms: [
            {
              term_target: "Lối vào",
              pronunciation: ["/loj vaʊ/"],
              specific_note: "",
              segments: [
                { text: "Lối", meaning: "路/通道", tail: " " },
                { text: "vào", meaning: "進", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Lối vào chính.",
              translation: "正門入口。",
              segments: [
                { text: "Lối vào", meaning: "入口", tail: " " },
                { text: "chính", meaning: "主/正", tail: "." },
              ],
            },
            {
              sentence: "Lối vào ở đâu?",
              translation: "入口在哪裡？",
              segments: [
                { text: "Lối vào", meaning: "入口", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
            {
              sentence: "Cấm vào.",
              translation: "禁止進入 (常見標語)。",
              segments: [
                { text: "Cấm", meaning: "禁", tail: " " },
                { text: "vào", meaning: "進", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思就是「進去的路」。",
          image_file: "entrance.png",
        },
        {
          id: "n-63",
          term_zh: "出口",
          related_terms: [
            {
              term_target: "Lối ra",
              pronunciation: ["/loj za/"],
              specific_note: "",
              segments: [
                { text: "Lối", meaning: "路", tail: " " },
                { text: "ra", meaning: "出", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Lối ra ở đây.",
              translation: "出口在這裡。",
              segments: [
                { text: "Lối ra", meaning: "出口", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Lối thoát hiểm.",
              translation: "緊急出口 (逃生門)。",
              segments: [
                { text: "Lối", meaning: "路", tail: " " },
                { text: "thoát", meaning: "逃/脫", tail: " " },
                { text: "hiểm", meaning: "險", tail: "." },
              ],
            },
            {
              sentence: "Tìm lối ra.",
              translation: "找出口。",
              segments: [
                { text: "Tìm", meaning: "找", tail: " " },
                { text: "lối ra", meaning: "出口", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思就是「出去的路」。",
          image_file: "exit.png",
        },
        {
          id: "n-64",
          term_zh: "台灣",
          related_terms: [
            {
              term_target: "Đài Loan",
              pronunciation: ["/daj lwan/"],
              specific_note: "",
              segments: [
                { text: "Đài", meaning: "台", tail: " " },
                { text: "Loan", meaning: "灣", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi yêu Đài Loan.",
              translation: "我愛台灣。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "yêu", meaning: "愛", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Chào mừng đến Đài Loan.",
              translation: "歡迎來到台灣。",
              segments: [
                { text: "Chào mừng", meaning: "歡迎", tail: " " },
                { text: "đến", meaning: "來/到", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Đài Loan đẹp lắm.",
              translation: "台灣很美。",
              segments: [
                { text: "Đài Loan", meaning: "台灣", tail: " " },
                { text: "đẹp", meaning: "美", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
          ],
          usage_note: "發音跟閩南語的「台灣」有點像。",
          image_file: "taiwan.png",
        },
        {
          id: "n-65",
          term_zh: "台灣人",
          related_terms: [
            {
              term_target: "Người Đài Loan",
              pronunciation: ["/ŋɨəj daj lwan/"],
              specific_note: "",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi là người Đài Loan.",
              translation: "我是台灣人。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy là người Đài.",
              translation: "她是台灣人 (簡稱)。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "Đài", meaning: "台", tail: "." },
              ],
            },
            {
              sentence: "Thích món ăn Đài Loan.",
              translation: "喜歡台灣食物。",
              segments: [
                { text: "Thích", meaning: "喜歡", tail: " " },
                { text: "món ăn", meaning: "菜/食物", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
          ],
          usage_note: "自我介紹必備句型：Tôi là + 國籍。",
          image_file: "taiwanese.png",
        },
        {
          id: "n-66",
          term_zh: "一切 / 所有事物",
          related_terms: [
            {
              term_target: "Mọi thứ",
              pronunciation: ["/mɔj tʰɨ/"],
              specific_note: "每件事物",
              segments: [
                { text: "Mọi", meaning: "每", tail: " " },
                { text: "thứ", meaning: "東西/事物", tail: "" },
              ],
            },
            {
              term_target: "Tất cả",
              pronunciation: ["/tət ka/"],
              specific_note: "全部",
              segments: [{ text: "Tất cả", meaning: "全部", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mọi thứ đều tốt.",
              translation: "一切都很好。",
              segments: [
                { text: "Mọi thứ", meaning: "一切", tail: " " },
                { text: "đều", meaning: "都", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Cảm ơn vì tất cả.",
              translation: "感謝這一切(所有)。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "vì", meaning: "因為", tail: " " },
                { text: "tất cả", meaning: "全部", tail: "." },
              ],
            },
            {
              sentence: "Mọi thứ đã sẵn sàng.",
              translation: "一切都準備好了。",
              segments: [
                { text: "Mọi thứ", meaning: "一切", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "sẵn sàng", meaning: "準備好", tail: "." },
              ],
            },
          ],
          usage_note: "「Mọi thứ」強調每個個體，「Tất cả」強調總體。",
          image_file: "everything.png",
        },
        {
          id: "n-67",
          term_zh: "錢包",
          related_terms: [
            {
              term_target: "Ví",
              pronunciation: ["/vi/"],
              specific_note: "錢包(北)",
              segments: [{ text: "Ví", meaning: "錢包", tail: "" }],
            },
            {
              term_target: "Bóp",
              pronunciation: ["/bɔp/"],
              specific_note: "錢包(南)",
              segments: [{ text: "Bóp", meaning: "錢包", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mất ví rồi.",
              translation: "錢包不見了。",
              segments: [
                { text: "Mất", meaning: "遺失", tail: " " },
                { text: "ví", meaning: "錢包", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Ví hết tiền.",
              translation: "錢包沒錢了。",
              segments: [
                { text: "Ví", meaning: "錢包", tail: " " },
                { text: "hết", meaning: "完/盡", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Tôi nhặt được cái ví.",
              translation: "我撿到一個錢包。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nhặt", meaning: "撿", tail: " " },
                { text: "được", meaning: "到", tail: " " },
                { text: "cái ví", meaning: "錢包", tail: "." },
              ],
            },
          ],
          usage_note: "北部用 Ví，南部用 Bóp。",
          image_file: "wallet.png",
        },
        {
          id: "n-68",
          term_zh: "身分證",
          related_terms: [
            {
              term_target: "Căn cước",
              pronunciation: ["/kan kɯək/"],
              specific_note: "身分證(CCCD)",
              segments: [{ text: "Căn cước", meaning: "身分證", tail: "" }],
            },
            {
              term_target: "Giấy tờ",
              pronunciation: ["/zɜj tə/"],
              specific_note: "證件(統稱)",
              segments: [{ text: "Giấy tờ", meaning: "證件/文件", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho xem giấy tờ.",
              translation: "給我看證件 (警察檢查時)。",
              segments: [
                { text: "Cho", meaning: "給/讓", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "giấy tờ", meaning: "證件", tail: "." },
              ],
            },
            {
              sentence: "Mang theo căn cước.",
              translation: "帶身分證。",
              segments: [
                { text: "Mang", meaning: "帶", tail: " " },
                { text: "theo", meaning: "隨身", tail: " " },
                { text: "căn cước", meaning: "身分證", tail: "." },
              ],
            },
            {
              sentence: "Số căn cước.",
              translation: "身分證字號。",
              segments: [
                { text: "Số", meaning: "號碼", tail: " " },
                { text: "căn cước", meaning: "身分證", tail: "." },
              ],
            },
          ],
          usage_note:
            "現在越南多稱「Căn cước」(CCCD)，一般證件檢查說「Giấy tờ」即可。",
          image_file: "id.png",
        },
        {
          id: "n-69",
          term_zh: "護照",
          related_terms: [
            {
              term_target: "Hộ chiếu",
              pronunciation: ["/ho ciəw/"],
              specific_note: "",
              segments: [
                { text: "Hộ", meaning: "護", tail: " " },
                { text: "chiếu", meaning: "照", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho xem hộ chiếu.",
              translation: "請出示護照。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "hộ chiếu", meaning: "護照", tail: "." },
              ],
            },
            {
              sentence: "Mất hộ chiếu rồi.",
              translation: "護照弄丟了。",
              segments: [
                { text: "Mất", meaning: "遺失", tail: " " },
                { text: "hộ chiếu", meaning: "護照", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Số hộ chiếu của bạn.",
              translation: "你的護照號碼。",
              segments: [
                { text: "Số", meaning: "號碼", tail: " " },
                { text: "hộ chiếu", meaning: "護照", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
          ],
          usage_note: "入住飯店時通常需要扣押或出示「Hộ chiếu」。",
          image_file: "passport.png",
        },
        {
          id: "n-70",
          term_zh: "餐廳",
          related_terms: [
            {
              term_target: "Nhà hàng",
              pronunciation: ["/ɲa haŋ/"],
              specific_note: "較正式/大型",
              segments: [
                { text: "Nhà", meaning: "房/家", tail: " " },
                { text: "hàng", meaning: "行/店", tail: "" },
              ],
            },
            {
              term_target: "Quán ăn",
              pronunciation: ["/kwan an/"],
              specific_note: "小吃店/餐館",
              segments: [{ text: "Quán ăn", meaning: "餐館", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhà hàng đẹp.",
              translation: "漂亮的餐廳。",
              segments: [
                { text: "Nhà hàng", meaning: "餐廳", tail: " " },
                { text: "đẹp", meaning: "美", tail: "." },
              ],
            },
            {
              sentence: "Ăn ở nhà hàng.",
              translation: "在餐廳吃飯。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "nhà hàng", meaning: "餐廳", tail: "." },
              ],
            },
            {
              sentence: "Nhà hàng nào ngon?",
              translation: "哪間餐廳好吃？",
              segments: [
                { text: "Nhà hàng", meaning: "餐廳", tail: " " },
                { text: "nào", meaning: "哪", tail: " " },
                { text: "ngon", meaning: "好吃", tail: "?" },
              ],
            },
          ],
          usage_note: "路邊攤或小店叫「Quán」，高級一點的叫「Nhà hàng」。",
          image_file: "restaurant.png",
        },
        {
          id: "n-71",
          term_zh: "飯店 / 旅館",
          related_terms: [
            {
              term_target: "Khách sạn",
              pronunciation: ["/xac san/"],
              specific_note: "",
              segments: [
                { text: "Khách", meaning: "客", tail: " " },
                { text: "sạn", meaning: "棧", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đặt khách sạn.",
              translation: "訂飯店。",
              segments: [
                { text: "Đặt", meaning: "預訂", tail: " " },
                { text: "khách sạn", meaning: "飯店", tail: "." },
              ],
            },
            {
              sentence: "Ở khách sạn.",
              translation: "住飯店。",
              segments: [
                { text: "Ở", meaning: "住/在", tail: " " },
                { text: "khách sạn", meaning: "飯店", tail: "." },
              ],
            },
            {
              sentence: "Khách sạn này đẹp.",
              translation: "這間飯店很漂亮。",
              segments: [
                { text: "Khách sạn", meaning: "飯店", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "đẹp", meaning: "美", tail: "." },
              ],
            },
          ],
          usage_note: "「客棧」的漢越音。",
          image_file: "hotel.png",
        },
        {
          id: "n-72",
          term_zh: "地方 / 場所",
          related_terms: [
            {
              term_target: "Chỗ",
              pronunciation: ["/cɔ/"],
              specific_note: "地方(口語)",
              segments: [{ text: "Chỗ", meaning: "地方", tail: "" }],
            },
            {
              term_target: "Nơi",
              pronunciation: ["/nəj/"],
              specific_note: "地點",
              segments: [{ text: "Nơi", meaning: "處/地", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chỗ này tốt.",
              translation: "這個地方很好。",
              segments: [
                { text: "Chỗ", meaning: "地方", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Nhầm chỗ rồi.",
              translation: "搞錯地方了。",
              segments: [
                { text: "Nhầm", meaning: "錯/誤", tail: " " },
                { text: "chỗ", meaning: "地方", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Nơi nổi tiếng.",
              translation: "有名的地方(景點)。",
              segments: [
                { text: "Nơi", meaning: "地方", tail: " " },
                { text: "nổi tiếng", meaning: "有名", tail: "." },
              ],
            },
          ],
          usage_note: "指具體位置常用「Chỗ」，指景點或抽象地點用「Nơi」。",
          image_file: "place.png",
        },
        {
          id: "n-73",
          term_zh: "店員",
          related_terms: [
            {
              term_target: "Nhân viên",
              pronunciation: ["/ɲən viən/"],
              specific_note: "職員/店員",
              segments: [
                { text: "Nhân", meaning: "人", tail: " " },
                { text: "viên", meaning: "員", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hỏi nhân viên.",
              translation: "問店員。",
              segments: [
                { text: "Hỏi", meaning: "問", tail: " " },
                { text: "nhân viên", meaning: "店員", tail: "." },
              ],
            },
            {
              sentence: "Nhân viên nhiệt tình.",
              translation: "店員很熱情。",
              segments: [
                { text: "Nhân viên", meaning: "店員", tail: " " },
                { text: "nhiệt tình", meaning: "熱情", tail: "." },
              ],
            },
            {
              sentence: "Tôi là nhân viên.",
              translation: "我是店員(職員)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "nhân viên", meaning: "職員", tail: "." },
              ],
            },
          ],
          usage_note: "口語呼喚店員直接叫「Em ơi」(弟/妹) 即可，不用叫職稱。",
          image_file: "clerk.png",
        },
        {
          id: "n-74",
          term_zh: "超市",
          related_terms: [
            {
              term_target: "Siêu thị",
              pronunciation: ["/siəw tʰi/"],
              specific_note: "",
              segments: [
                { text: "Siêu", meaning: "超", tail: " " },
                { text: "thị", meaning: "市", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi siêu thị.",
              translation: "去超市。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "siêu thị", meaning: "超市", tail: "." },
              ],
            },
            {
              sentence: "Mua đồ ở siêu thị.",
              translation: "在超市買東西。",
              segments: [
                { text: "Mua", meaning: "買", tail: " " },
                { text: "đồ", meaning: "東西", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "siêu thị", meaning: "超市", tail: "." },
              ],
            },
            {
              sentence: "Siêu thị gần đây.",
              translation: "附近的超市。",
              segments: [
                { text: "Siêu thị", meaning: "超市", tail: " " },
                { text: "gần đây", meaning: "附近", tail: "." },
              ],
            },
          ],
          usage_note:
            "Mini mart 或 Circle K 這類便利店也可以廣義稱為「Siêu thị mini」。",
          image_file: "supermarket.png",
        },
        {
          id: "n-75",
          term_zh: "月台",
          related_terms: [
            {
              term_target: "Sân ga",
              pronunciation: ["/sən ɣa/"],
              specific_note: "火車月台",
              segments: [
                { text: "Sân", meaning: "場/院", tail: " " },
                { text: "ga", meaning: "站", tail: "" },
              ],
            },
            {
              term_target: "Cửa ra",
              pronunciation: ["/kɨa za/"],
              specific_note: "登機門/出口",
              segments: [
                { text: "Cửa", meaning: "門", tail: " " },
                { text: "ra", meaning: "出", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Sân ga số 1.",
              translation: "第一月台。",
              segments: [
                { text: "Sân ga", meaning: "月台", tail: " " },
                { text: "số", meaning: "號", tail: " " },
                { text: "1", meaning: "一", tail: "." },
              ],
            },
            {
              sentence: "Đợi ở sân ga.",
              translation: "在月台等。",
              segments: [
                { text: "Đợi", meaning: "等", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "sân ga", meaning: "月台", tail: "." },
              ],
            },
            {
              sentence: "Tàu đang vào ga.",
              translation: "火車正在進站。",
              segments: [
                { text: "Tàu", meaning: "火車", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "vào", meaning: "進", tail: " " },
                { text: "ga", meaning: "站", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南火車不像台灣多，月台(Sân ga)通常很簡單。機場登機門則叫 Cửa ra。",
          image_file: "platform.png",
        },
        {
          id: "n-76",
          term_zh: "音樂",
          related_terms: [
            {
              term_target: "Nhạc",
              pronunciation: ["/ɲak/"],
              specific_note: "樂",
              segments: [{ text: "Nhạc", meaning: "音樂", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nghe nhạc.",
              translation: "聽音樂。",
              segments: [
                { text: "Nghe", meaning: "聽", tail: " " },
                { text: "nhạc", meaning: "音樂", tail: "." },
              ],
            },
            {
              sentence: "Nhạc trẻ.",
              translation: "流行音樂 (年輕人的音樂)。",
              segments: [
                { text: "Nhạc", meaning: "音樂", tail: " " },
                { text: "trẻ", meaning: "年輕", tail: "." },
              ],
            },
            {
              sentence: "Nhạc to quá.",
              translation: "音樂太大聲了。",
              segments: [
                { text: "Nhạc", meaning: "音樂", tail: " " },
                { text: "to", meaning: "大", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
          ],
          usage_note: "喜歡聽什麼歌，可以說「Thích nhạc gì?」。",
          image_file: "music.png",
        },
        {
          id: "n-77",
          term_zh: "雨",
          related_terms: [
            {
              term_target: "Mưa",
              pronunciation: ["/mɯa/"],
              specific_note: "",
              segments: [{ text: "Mưa", meaning: "雨", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Trời đang mưa.",
              translation: "正在下雨。",
              segments: [
                { text: "Trời", meaning: "天", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "mưa", meaning: "下雨", tail: "." },
              ],
            },
            {
              sentence: "Mưa to.",
              translation: "大雨。",
              segments: [
                { text: "Mưa", meaning: "雨", tail: " " },
                { text: "to", meaning: "大", tail: "." },
              ],
            },
            {
              sentence: "Tôi ghét mưa.",
              translation: "我討厭雨。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ghét", meaning: "討厭", tail: " " },
                { text: "mưa", meaning: "雨", tail: "." },
              ],
            },
          ],
          usage_note: "「Áo mưa」是雨衣，在越南騎車必備。",
          image_file: "rain.png",
        },
        {
          id: "n-78",
          term_zh: "照片 / 圖片",
          related_terms: [
            {
              term_target: "Ảnh",
              pronunciation: ["/aɲ/"],
              specific_note: "照片(北)",
              segments: [{ text: "Ảnh", meaning: "影/像", tail: "" }],
            },
            {
              term_target: "Hình",
              pronunciation: ["/hiɲ/"],
              specific_note: "照片(南)",
              segments: [{ text: "Hình", meaning: "形/圖", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chụp ảnh.",
              translation: "拍照。",
              segments: [
                { text: "Chụp", meaning: "抓/拍", tail: " " },
                { text: "ảnh", meaning: "照片", tail: "." },
              ],
            },
            {
              sentence: "Xem hình.",
              translation: "看照片。",
              segments: [
                { text: "Xem", meaning: "看", tail: " " },
                { text: "hình", meaning: "照片", tail: "." },
              ],
            },
            {
              sentence: "Chụp hộ kiểu ảnh.",
              translation: "幫忙拍張照。",
              segments: [
                { text: "Chụp", meaning: "拍", tail: " " },
                { text: "hộ", meaning: "幫忙", tail: " " },
                { text: "kiểu", meaning: "張/樣式", tail: " " },
                { text: "ảnh", meaning: "照片", tail: "." },
              ],
            },
          ],
          usage_note: "請人幫忙拍照說「Chụp hộ」或「Chụp giùm」。",
          image_file: "picture.png",
        },
        {
          id: "n-79",
          term_zh: "書",
          related_terms: [
            {
              term_target: "Sách",
              pronunciation: ["/sac/"],
              specific_note: "",
              segments: [{ text: "Sách", meaning: "冊/書", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đọc sách.",
              translation: "看書 (讀書)。",
              segments: [
                { text: "Đọc", meaning: "讀", tail: " " },
                { text: "sách", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "Mở sách ra.",
              translation: "把書打開。",
              segments: [
                { text: "Mở", meaning: "開", tail: " " },
                { text: "sách", meaning: "書", tail: " " },
                { text: "ra", meaning: "出", tail: "." },
              ],
            },
            {
              sentence: "Sách của tôi.",
              translation: "我的書。",
              segments: [
                { text: "Sách", meaning: "書", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "書本是 Sách，筆記本是 Vở。",
          image_file: "book.png",
        },
        {
          id: "n-80",
          term_zh: "廁所 / 洗手間",
          related_terms: [
            {
              term_target: "Nhà vệ sinh",
              pronunciation: ["/ɲa ve siŋ/"],
              specific_note: "正式",
              segments: [
                { text: "Nhà", meaning: "房", tail: " " },
                { text: "vệ sinh", meaning: "衛生", tail: "" },
              ],
            },
            {
              term_target: "Toilet",
              pronunciation: ["/tɔj let/"],
              specific_note: "口語",
              segments: [{ text: "Toilet", meaning: "廁所", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhà vệ sinh ở đâu?",
              translation: "廁所在哪裡？",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Đi vệ sinh.",
              translation: "去上廁所。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "vệ sinh", meaning: "衛生", tail: "." },
              ],
            },
            {
              sentence: "Nhà vệ sinh sạch.",
              translation: "廁所很乾淨。",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "sạch", meaning: "乾淨", tail: "." },
              ],
            },
          ],
          usage_note: "在外面找廁所，直接問「Toilet」最快。",
          image_file: "restroom.png",
        },
        {
          id: "n-81",
          term_zh: "天氣",
          related_terms: [
            {
              term_target: "Thời tiết",
              pronunciation: ["/tʰəj tiət/"],
              specific_note: "",
              segments: [
                { text: "Thời", meaning: "時", tail: " " },
                { text: "tiết", meaning: "節", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Thời tiết đẹp.",
              translation: "天氣很好。",
              segments: [
                { text: "Thời tiết", meaning: "天氣", tail: " " },
                { text: "đẹp", meaning: "美/好", tail: "." },
              ],
            },
            {
              sentence: "Thời tiết xấu.",
              translation: "天氣不好(壞)。",
              segments: [
                { text: "Thời tiết", meaning: "天氣", tail: " " },
                { text: "xấu", meaning: "壞", tail: "." },
              ],
            },
            {
              sentence: "Thời tiết thế nào?",
              translation: "天氣如何？",
              segments: [
                { text: "Thời tiết", meaning: "天氣", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
          ],
          usage_note: "越南只有兩季：Mùa mưa (雨季) 和 Mùa khô (乾季)。",
          image_file: "weather.png",
        },
        {
          id: "n-82",
          term_zh: "訊息",
          related_terms: [
            {
              term_target: "Tin nhắn",
              pronunciation: ["/tin ɲan/"],
              specific_note: "短信/消息",
              segments: [
                { text: "Tin", meaning: "信/消息", tail: " " },
                { text: "nhắn", meaning: "寄語", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Gửi tin nhắn.",
              translation: "傳訊息。",
              segments: [
                { text: "Gửi", meaning: "寄/傳", tail: " " },
                { text: "tin nhắn", meaning: "訊息", tail: "." },
              ],
            },
            {
              sentence: "Để lại lời nhắn.",
              translation: "留下訊息(留言)。",
              segments: [
                { text: "Để", meaning: "留", tail: " " },
                { text: "lại", meaning: "下", tail: " " },
                { text: "lời nhắn", meaning: "留言", tail: "." },
              ],
            },
            {
              sentence: "Có tin nhắn.",
              translation: "有訊息。",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "tin nhắn", meaning: "訊息", tail: "." },
              ],
            },
          ],
          usage_note:
            "Zalo 是越南最常用的通訊軟體，說「Nhắn tin Zalo」就是傳Zalo訊息。",
          image_file: "message.png",
        },
      ],
    },
    {
      id: "adverbs-vi",
      name: "常用副詞",
      items: [
        {
          id: "adv-01",
          term_zh: "現在",
          related_terms: [
            {
              term_target: "Bây giờ",
              pronunciation: ["/bɜj zə/"],
              specific_note: "標準",
              segments: [
                { text: "Bây", meaning: "現", tail: " " },
                { text: "giờ", meaning: "時", tail: "" },
              ],
            },
            {
              term_target: "Giờ",
              pronunciation: ["/zə/"],
              specific_note: "口語簡稱",
              segments: [{ text: "Giờ", meaning: "現在", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Làm ngay bây giờ.",
              translation: "現在馬上做。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "ngay", meaning: "馬上", tail: " " },
                { text: "bây giờ", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Giờ tôi đang bận.",
              translation: "我現在正忙。",
              segments: [
                { text: "Giờ", meaning: "現在", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
              ],
            },
            {
              sentence: "Bạn đang ở đâu?",
              translation: "(現在)你在哪裡？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "口語常把「Bây giờ」簡化成「Giờ」。",
          image_file: "now.png",
        },
        {
          id: "adv-02",
          term_zh: "非常 / 很",
          related_terms: [
            {
              term_target: "Rất",
              pronunciation: ["/zət/"],
              specific_note: "放在形容詞前",
              segments: [{ text: "Rất", meaning: "很", tail: "" }],
            },
            {
              term_target: "Lắm",
              pronunciation: ["/lam/"],
              specific_note: "放在形容詞後",
              segments: [{ text: "Lắm", meaning: "很", tail: "" }],
            },
            {
              term_target: "Quá",
              pronunciation: ["/kwa/"],
              specific_note: "太...了(感嘆)",
              segments: [{ text: "Quá", meaning: "太", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Rất tốt.",
              translation: "很好。",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Cảm ơn nhiều lắm.",
              translation: "非常感謝。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Hôm nay nóng quá.",
              translation: "今天太熱了。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "nóng", meaning: "熱", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
          ],
          usage_note:
            "注意位置：Rất + 形容詞 (Rất đẹp)，形容詞 + Lắm (Đẹp lắm)。",
          image_file: "very.png",
        },
        {
          id: "adv-03",
          term_zh: "真的",
          related_terms: [
            {
              term_target: "Thật",
              pronunciation: ["/tʰət/"],
              specific_note: "",
              segments: [{ text: "Thật", meaning: "真", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Thật á?",
              translation: "真的嗎？(驚訝)",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "á", meaning: "啊", tail: "?" },
              ],
            },
            {
              sentence: "Tôi thích thật mà.",
              translation: "我是真的喜歡啦。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "thật", meaning: "真", tail: " " },
                { text: "mà", meaning: "嘛(語氣詞)", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy tốt thật.",
              translation: "她人真的很好。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "tốt", meaning: "好", tail: " " },
                { text: "thật", meaning: "真", tail: "." },
              ],
            },
          ],
          usage_note: "表示驚訝或強調事實。",
          image_file: "really.png",
        },
        {
          id: "adv-04",
          term_zh: "好好地 / 順利",
          related_terms: [
            {
              term_target: "Tốt",
              pronunciation: ["/tot/"],
              specific_note: "好",
              segments: [{ text: "Tốt", meaning: "好", tail: "" }],
            },
            {
              term_target: "Giỏi",
              pronunciation: ["/zɔj/"],
              specific_note: "棒/厲害",
              segments: [{ text: "Giỏi", meaning: "棒", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ngủ ngon.",
              translation: "睡好 (晚安)。",
              segments: [
                { text: "Ngủ", meaning: "睡", tail: " " },
                { text: "ngon", meaning: "香甜/好", tail: "." },
              ],
            },
            {
              sentence: "Làm tốt lắm!",
              translation: "做得好！(Well done)",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "tốt", meaning: "好", tail: " " },
                { text: "lắm", meaning: "很", tail: "!" },
              ],
            },
            {
              sentence: "Tôi thấy không khỏe.",
              translation: "我覺得不舒服 (Not well)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thấy", meaning: "覺得", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "khỏe", meaning: "健康/好", tail: "." },
              ],
            },
          ],
          usage_note: "身體好用「Khỏe」，表現好用「Tốt」或「Giỏi」。",
          image_file: "well.png",
        },
        {
          id: "adv-05",
          term_zh: "經常",
          related_terms: [
            {
              term_target: "Hay",
              pronunciation: ["/haj/"],
              specific_note: "口語最常用",
              segments: [{ text: "Hay", meaning: "常/愛", tail: "" }],
            },
            {
              term_target: "Thường",
              pronunciation: ["/tʰɯəŋ/"],
              specific_note: "通常",
              segments: [{ text: "Thường", meaning: "常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi hay đến đây.",
              translation: "我常來這裡。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "hay", meaning: "常", tail: " " },
                { text: "đến", meaning: "來", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Bạn có hay tập thể dục không?",
              translation: "你常運動嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "hay", meaning: "常", tail: " " },
                { text: "tập thể dục", meaning: "做運動", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Ở đây hay mưa.",
              translation: "這裡經常下雨。",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "hay", meaning: "常/愛", tail: " " },
                { text: "mưa", meaning: "下雨", tail: "." },
              ],
            },
          ],
          usage_note:
            "「Hay」除了「經常」，也有「有趣/好」的意思 (如: Phim hay - 好看的電影)。",
          image_file: "often.png",
        },
        {
          id: "adv-06",
          term_zh: "通常",
          related_terms: [
            {
              term_target: "Thường",
              pronunciation: ["/tʰɯəŋ/"],
              specific_note: "",
              segments: [{ text: "Thường", meaning: "常/通常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Thường thì 6 giờ.",
              translation: "通常是6點。",
              segments: [
                { text: "Thường", meaning: "通常", tail: " " },
                { text: "thì", meaning: "則/就", tail: " " },
                { text: "6", meaning: "六", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Tôi thường dậy lúc 7 giờ.",
              translation: "我通常7點起床。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thường", meaning: "通常", tail: " " },
                { text: "dậy", meaning: "起床", tail: " " },
                { text: "lúc", meaning: "時候(在)", tail: " " },
                { text: "7", meaning: "七", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Bạn thường làm gì?",
              translation: "你通常做什麼？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thường", meaning: "通常", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "習慣性的動作。",
          image_file: "usually.png",
        },
        {
          id: "adv-07",
          term_zh: "已經 / 了",
          related_terms: [
            {
              term_target: "Rồi",
              pronunciation: ["/zoj/"],
              specific_note: "句尾(最常用)",
              segments: [{ text: "Rồi", meaning: "了", tail: "" }],
            },
            {
              term_target: "Đã",
              pronunciation: ["/da/"],
              specific_note: "句首/句中(強調)",
              segments: [{ text: "Đã", meaning: "已經", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Xong rồi.",
              translation: "做好了 / 結束了。",
              segments: [
                { text: "Xong", meaning: "完", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "10 giờ rồi.",
              translation: "已經10點了。",
              segments: [
                { text: "10", meaning: "十", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi ăn rồi.",
              translation: "我吃飽了 (吃過了)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "口語中最常用「Rồi」放在句尾表示動作完成。",
          image_file: "already.png",
        },
        {
          id: "adv-08",
          term_zh: "只有",
          related_terms: [
            {
              term_target: "Chỉ",
              pronunciation: ["/ci/"],
              specific_note: "",
              segments: [{ text: "Chỉ", meaning: "只", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chỉ một cái.",
              translation: "只有一個。",
              segments: [
                { text: "Chỉ", meaning: "只", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "cái", meaning: "個", tail: "." },
              ],
            },
            {
              sentence: "Tôi chỉ có 100 ngàn.",
              translation: "我只有10萬(越南盾)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chỉ", meaning: "只", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "100", meaning: "一百", tail: " " },
                { text: "ngàn", meaning: "千", tail: "." },
              ],
            },
            {
              sentence: "Chỉ có bạn.",
              translation: "只有你。",
              segments: [
                { text: "Chỉ", meaning: "只", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
          ],
          usage_note: "表示唯一或數量少。",
          image_file: "only.png",
        },
        {
          id: "adv-09",
          term_zh: "再次 / 再",
          related_terms: [
            {
              term_target: "Lại",
              pronunciation: ["/laj/"],
              specific_note: "動作重覆",
              segments: [{ text: "Lại", meaning: "再/又", tail: "" }],
            },
            {
              term_target: "Nữa",
              pronunciation: ["/nɯa/"],
              specific_note: "更多/繼續",
              segments: [{ text: "Nữa", meaning: "再/還有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Thử lại đi.",
              translation: "再試一次。",
              segments: [
                { text: "Thử", meaning: "試", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Nói lại đi.",
              translation: "再說一次。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Đừng làm thế nữa.",
              translation: "別再那樣做了。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "thế", meaning: "那樣", tail: " " },
                { text: "nữa", meaning: "再/繼續", tail: "." },
              ],
            },
          ],
          usage_note: "重新做用「Lại」，繼續或追加用「Nữa」。",
          image_file: "again.png",
        },
        {
          id: "adv-10",
          term_zh: "大約",
          related_terms: [
            {
              term_target: "Khoảng",
              pronunciation: ["/xwaŋ/"],
              specific_note: "時間/距離/數量",
              segments: [{ text: "Khoảng", meaning: "大概/距離", tail: "" }],
            },
            {
              term_target: "Tầm",
              pronunciation: ["/təm/"],
              specific_note: "口語常用",
              segments: [{ text: "Tầm", meaning: "大概", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Khoảng 10 phút.",
              translation: "大約10分鐘。",
              segments: [
                { text: "Khoảng", meaning: "大約", tail: " " },
                { text: "10", meaning: "十", tail: " " },
                { text: "phút", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "Tầm 5 cây số.",
              translation: "大概5公里。",
              segments: [
                { text: "Tầm", meaning: "大概", tail: " " },
                { text: "5", meaning: "五", tail: " " },
                { text: "cây số", meaning: "公里", tail: "." },
              ],
            },
            {
              sentence: "Giá khoảng 50 ngàn.",
              translation: "價格大約5萬(越南盾)。",
              segments: [
                { text: "Giá", meaning: "價錢", tail: " " },
                { text: "khoảng", meaning: "大約", tail: " " },
                { text: "50", meaning: "五十", tail: " " },
                { text: "ngàn", meaning: "千", tail: "." },
              ],
            },
          ],
          usage_note: "講價錢或距離時，加個「Khoảng」或「Tầm」比較自然。",
          image_file: "about.png",
        },
        {
          id: "adv-11",
          term_zh: "一點點",
          related_terms: [
            {
              term_target: "Một chút",
              pronunciation: ["/mot cut/"],
              specific_note: "少量",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "chút", meaning: "點/少許", tail: "" },
              ],
            },
            {
              term_target: "Hơi",
              pronunciation: ["/həj/"],
              specific_note: "稍微(形容詞前)",
              segments: [{ text: "Hơi", meaning: "稍微/有點", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hơi cay.",
              translation: "有一點辣。",
              segments: [
                { text: "Hơi", meaning: "有點", tail: " " },
                { text: "cay", meaning: "辣", tail: "." },
              ],
            },
            {
              sentence: "Tôi hơi mệt.",
              translation: "我有點累。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "hơi", meaning: "有點", tail: " " },
                { text: "mệt", meaning: "累", tail: "." },
              ],
            },
            {
              sentence: "Một chút thôi.",
              translation: "一點點就好。",
              segments: [
                { text: "Một chút", meaning: "一點點", tail: " " },
                { text: "thôi", meaning: "罷了/而已", tail: "." },
              ],
            },
          ],
          usage_note:
            "形容程度用「Hơi」(如：有點貴 Hơi đắt)，形容數量用「Một chút」。",
          image_file: "a_little.png",
        },
        {
          id: "adv-12",
          term_zh: "也 / 也是",
          related_terms: [
            {
              term_target: "Cũng",
              pronunciation: ["/kuŋm/"],
              specific_note: "",
              segments: [{ text: "Cũng", meaning: "也", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi cũng thích.",
              translation: "我也喜歡。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy cũng là giáo viên.",
              translation: "她也是老師。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "giáo viên", meaning: "教師", tail: "." },
              ],
            },
            {
              sentence: "Tôi cũng vậy.",
              translation: "我也一樣 (Me too)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "vậy", meaning: "這樣", tail: "." },
              ],
            },
          ],
          usage_note: "附和別人時說「Tôi cũng vậy」(我也這樣)。",
          image_file: "also.png",
        },
        {
          id: "adv-13",
          term_zh: "或許 / 可能",
          related_terms: [
            {
              term_target: "Có lẽ",
              pronunciation: ["/kɔ lɛ/"],
              specific_note: "或許",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "lẽ", meaning: "道理", tail: "" },
              ],
            },
            {
              term_target: "Chắc là",
              pronunciation: ["/tʃak la/"],
              specific_note: "大概是(常用)",
              segments: [
                { text: "Chắc", meaning: "確定/穩", tail: " " },
                { text: "là", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Để sau nhé.",
              translation: "或許以後吧 (委婉拒絕)。",
              segments: [
                { text: "Để", meaning: "留/放", tail: " " },
                { text: "sau", meaning: "後", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Chắc bạn đúng.",
              translation: "大概你是對的。",
              segments: [
                { text: "Chắc", meaning: "大概", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đúng", meaning: "對", tail: "." },
              ],
            },
            {
              sentence: "Có thể.",
              translation: "有可能。",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "thể", meaning: "能/體", tail: "." },
              ],
            },
          ],
          usage_note: "不確定時用「Có thể」，猜測時用「Chắc là」。",
          image_file: "maybe.png",
        },
        {
          id: "adv-14",
          term_zh: "之後 / 稍後",
          related_terms: [
            {
              term_target: "Sau",
              pronunciation: ["/saw/"],
              specific_note: "以後",
              segments: [{ text: "Sau", meaning: "後", tail: "" }],
            },
            {
              term_target: "Tí nữa",
              pronunciation: ["/ti nɯa/"],
              specific_note: "等一下",
              segments: [
                { text: "Tí", meaning: "點/會兒", tail: " " },
                { text: "nữa", meaning: "再", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Gặp lại sau.",
              translation: "待會見。",
              segments: [
                { text: "Gặp", meaning: "見", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "sau", meaning: "後", tail: "." },
              ],
            },
            {
              sentence: "Gọi lại sau nhé.",
              translation: "待會再打給你。",
              segments: [
                { text: "Gọi", meaning: "打電話", tail: " " },
                { text: "lại", meaning: "回/再", tail: " " },
                { text: "sau", meaning: "後", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "2 năm sau.",
              translation: "兩年後。",
              segments: [
                { text: "2", meaning: "二", tail: " " },
                { text: "năm", meaning: "年", tail: " " },
                { text: "sau", meaning: "後", tail: "." },
              ],
            },
          ],
          usage_note: "「Tí nữa」指很短的時間後，「Sau」可指較長的時間。",
          image_file: "later.png",
        },
        {
          id: "adv-15",
          term_zh: "很快 / 不久",
          related_terms: [
            {
              term_target: "Sớm",
              pronunciation: ["/səm/"],
              specific_note: "早",
              segments: [{ text: "Sớm", meaning: "早", tail: "" }],
            },
            {
              term_target: "Sắp",
              pronunciation: ["/sap/"],
              specific_note: "快要",
              segments: [{ text: "Sắp", meaning: "即將", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hẹn gặp lại.",
              translation: "期待再相見 (See you soon)。",
              segments: [
                { text: "Hẹn", meaning: "約", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "lại", meaning: "再", tail: "." },
              ],
            },
            {
              sentence: "Khỏi bệnh sớm nhé.",
              translation: "早日康復。",
              segments: [
                { text: "Khỏi", meaning: "痊癒", tail: " " },
                { text: "bệnh", meaning: "病", tail: " " },
                { text: "sớm", meaning: "早", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Sắp đến rồi.",
              translation: "快到了 (Coming soon)。",
              segments: [
                { text: "Sắp", meaning: "快要", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "「Sớm」是時間早，「Sắp」是動作即將發生。",
          image_file: "soon.png",
        },
        {
          id: "adv-16",
          term_zh: "一起",
          related_terms: [
            {
              term_target: "Cùng nhau",
              pronunciation: ["/kuŋm ɲaʊ/"],
              specific_note: "",
              segments: [
                { text: "Cùng", meaning: "同", tail: " " },
                { text: "nhau", meaning: "互相", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi cùng nhau.",
              translation: "一起去。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "cùng nhau", meaning: "一起", tail: "." },
              ],
            },
            {
              sentence: "Làm việc chung.",
              translation: "一起工作 (共事)。",
              segments: [
                { text: "Làm việc", meaning: "工作", tail: " " },
                { text: "chung", meaning: "共同", tail: "." },
              ],
            },
            {
              sentence: "Chúng ta ở bên nhau.",
              translation: "我們在一起。",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "bên", meaning: "邊/旁", tail: " " },
                { text: "nhau", meaning: "互相", tail: "." },
              ],
            },
          ],
          usage_note: "簡單說「Cùng」也可以。",
          image_file: "together.png",
        },
        {
          id: "adv-17",
          term_zh: "仍然 / 還",
          related_terms: [
            {
              term_target: "Vẫn",
              pronunciation: ["/vən/"],
              specific_note: "依然",
              segments: [{ text: "Vẫn", meaning: "仍", tail: "" }],
            },
            {
              term_target: "Còn",
              pronunciation: ["/kɔn/"],
              specific_note: "還有/還在",
              segments: [{ text: "Còn", meaning: "還", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Vẫn ở đây.",
              translation: "還在這裡。",
              segments: [
                { text: "Vẫn", meaning: "仍然", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Tôi vẫn đói.",
              translation: "我還是很餓。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "vẫn", meaning: "仍然", tail: " " },
                { text: "đói", meaning: "餓", tail: "." },
              ],
            },
            {
              sentence: "Bạn còn làm việc không?",
              translation: "你還在工作嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "còn", meaning: "還", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "「Vẫn」強調狀態沒變，「Còn」強調還有剩餘或持續。",
          image_file: "still.png",
        },
        {
          id: "adv-18",
          term_zh: "一般來說 / 正常",
          related_terms: [
            {
              term_target: "Bình thường",
              pronunciation: ["/biɲ tʰɯəŋ/"],
              specific_note: "平常/正常",
              segments: [
                { text: "Bình", meaning: "平", tail: " " },
                { text: "thường", meaning: "常", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bình thường thôi.",
              translation: "還好啦 / 普普通通。",
              segments: [
                { text: "Bình thường", meaning: "平常", tail: " " },
                { text: "thôi", meaning: "罷了", tail: "." },
              ],
            },
            {
              sentence: "Mọi chuyện bình thường.",
              translation: "一切正常。",
              segments: [
                { text: "Mọi", meaning: "每", tail: " " },
                { text: "chuyện", meaning: "事", tail: " " },
                { text: "bình thường", meaning: "正常", tail: "." },
              ],
            },
            {
              sentence: "Bình thường tôi đi xe máy.",
              translation: "平常我騎機車。",
              segments: [
                { text: "Bình thường", meaning: "平常", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "騎", tail: " " },
                { text: "xe máy", meaning: "機車", tail: "." },
              ],
            },
          ],
          usage_note:
            "被人問「你好嗎？」，如果沒什麼特別的就回「Bình thường」。",
          image_file: "normally.png",
        },
        {
          id: "adv-19",
          term_zh: "立刻 / 馬上",
          related_terms: [
            {
              term_target: "Ngay",
              pronunciation: ["/ŋaj/"],
              specific_note: "立刻",
              segments: [{ text: "Ngay", meaning: "即刻", tail: "" }],
            },
            {
              term_target: "Luôn",
              pronunciation: ["/luən/"],
              specific_note: "總是/馬上(口語)",
              segments: [{ text: "Luôn", meaning: "馬上/一直", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi ngay.",
              translation: "馬上走。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "ngay", meaning: "立刻", tail: "." },
              ],
            },
            {
              sentence: "Dừng lại ngay.",
              translation: "立刻停下來。",
              segments: [
                { text: "Dừng", meaning: "停", tail: " " },
                { text: "lại", meaning: "下來", tail: " " },
                { text: "ngay", meaning: "立刻", tail: "." },
              ],
            },
            {
              sentence: "Ăn luôn.",
              translation: "現在就吃 (不等了)。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "luôn", meaning: "馬上", tail: "." },
              ],
            },
          ],
          usage_note: "南方人很喜歡用「Luôn」表示「現在立刻」。",
          image_file: "immediately.png",
        },
        {
          id: "adv-20",
          term_zh: "也不",
          related_terms: [
            {
              term_target: "Cũng không",
              pronunciation: ["/kuŋm xoŋ/"],
              specific_note: "也不",
              segments: [
                { text: "Cũng", meaning: "也", tail: " " },
                { text: "không", meaning: "不", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi cũng không.",
              translation: "我也不 (Me neither)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "không", meaning: "不", tail: "." },
              ],
            },
            {
              sentence: "Tôi cũng không làm thế.",
              translation: "我也不會那樣做。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "thế", meaning: "那樣", tail: "." },
              ],
            },
            {
              sentence: "Cả hai đều không tốt.",
              translation: "兩個都不好。",
              segments: [
                { text: "Cả hai", meaning: "兩者", tail: " " },
                { text: "đều", meaning: "都", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
          ],
          usage_note: "越南語沒有單獨的 Neither，通常用「Cũng không」(也不)。",
          image_file: "neither.png",
        },
      ],
    },
    {
      id: "questions-vi",
      name: "疑問詞",
      items: [
        {
          id: "q-01",
          term_zh: "什麼",
          related_terms: [
            {
              term_target: "Cái gì",
              pronunciation: ["/kaj zi/"],
              specific_note: "名詞(什麼東西)",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "gì", meaning: "什麼", tail: "" },
              ],
            },
            {
              term_target: "Gì",
              pronunciation: ["/zi/"],
              specific_note: "放在動詞後",
              segments: [{ text: "Gì", meaning: "什麼", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đây là cái gì?",
              translation: "這是什麼？",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "cái gì", meaning: "什麼東西", tail: "?" },
              ],
            },
            {
              sentence: "Bạn tên là gì?",
              translation: "你叫什麼名字？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Bạn muốn ăn gì?",
              translation: "你想要吃什麼？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "通常放在句尾。例如：做什麼 (Làm gì)、吃什麼 (Ăn gì)。",
          image_file: "what.png",
        },
        {
          id: "q-02",
          term_zh: "如何 / 怎麼樣",
          related_terms: [
            {
              term_target: "Thế nào",
              pronunciation: ["/tʰe naʊ/"],
              specific_note: "詢問狀況",
              segments: [
                { text: "Thế", meaning: "那樣/勢", tail: " " },
                { text: "nào", meaning: "哪", tail: "" },
              ],
            },
            {
              term_target: "Làm sao",
              pronunciation: ["/lam saʊ/"],
              specific_note: "怎麼做/為什麼",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "sao", meaning: "怎樣/星", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Dạo này thế nào?",
              translation: "最近怎麼樣？(問候)",
              segments: [
                { text: "Dạo này", meaning: "最近", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Đi bằng gì?",
              translation: "怎麼去？(問交通工具)",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "bằng", meaning: "用/藉由", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Làm thế nào?",
              translation: "要怎麼做？(問方法)",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "thế nào", meaning: "如何/那樣哪", tail: "?" },
              ],
            },
          ],
          usage_note:
            "問「怎麼去」用「Đi bằng gì」，問「狀況如何」用「Thế nào」。",
          image_file: "how.png",
        },
        {
          id: "q-03",
          term_zh: "何時 / 什麼時候",
          related_terms: [
            {
              term_target: "Khi nào",
              pronunciation: ["/xi naʊ/"],
              specific_note: "通用",
              segments: [
                { text: "Khi", meaning: "時/當", tail: " " },
                { text: "nào", meaning: "哪", tail: "" },
              ],
            },
            {
              term_target: "Bao giờ",
              pronunciation: ["/baʊ zə/"],
              specific_note: "口語常用",
              segments: [
                { text: "Bao", meaning: "多少", tail: " " },
                { text: "giờ", meaning: "時/點", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Khi nào đi?",
              translation: "什麼時候去？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "đi", meaning: "去", tail: "?" },
              ],
            },
            {
              sentence: "Bao giờ bạn về?",
              translation: "你什麼時候回來？",
              segments: [
                { text: "Bao giờ", meaning: "何時", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "về", meaning: "回", tail: "?" },
              ],
            },
            {
              sentence: "Khi nào rảnh?",
              translation: "什麼時候有空？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "rảnh", meaning: "閒暇", tail: "?" },
              ],
            },
          ],
          usage_note:
            "問過去的時間常把「Khi nào」放在句尾，問未來則放在句首或句尾皆可。",
          image_file: "when.png",
        },
        {
          id: "q-04",
          term_zh: "哪裡",
          related_terms: [
            {
              term_target: "Ở đâu",
              pronunciation: ["/ə dəw/"],
              specific_note: "在+哪裡",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "" },
              ],
            },
            {
              term_target: "Đâu",
              pronunciation: ["/dəw/"],
              specific_note: "哪兒",
              segments: [{ text: "Đâu", meaning: "哪", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn đang ở đâu?",
              translation: "你現在在哪裡？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Nhà vệ sinh ở đâu?",
              translation: "廁所在哪裡？",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "ở đâu", meaning: "在哪", tail: "?" },
              ],
            },
            {
              sentence: "Đi đâu đấy?",
              translation: "要去哪裡啊？(打招呼用)",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪", tail: " " },
                { text: "đấy", meaning: "(語氣詞)", tail: "?" },
              ],
            },
          ],
          usage_note: "尋找人事物的位置用「Ở đâu」。",
          image_file: "where.png",
        },
        {
          id: "q-05",
          term_zh: "誰",
          related_terms: [
            {
              term_target: "Ai",
              pronunciation: ["/aɪ/"],
              specific_note: "",
              segments: [{ text: "Ai", meaning: "誰", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh ấy là ai?",
              translation: "他是誰？",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
              ],
            },
            {
              sentence: "Ai đang nói thế?",
              translation: "誰在說話？(電話中：哪位？)",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "thế", meaning: "那樣/語氣詞", tail: "?" },
              ],
            },
            {
              sentence: "Bạn đi với ai?",
              translation: "你跟誰去？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "với", meaning: "和/跟", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
              ],
            },
          ],
          usage_note: "發音就像中文的「愛」，很好記。",
          image_file: "who.png",
        },
        {
          id: "q-06",
          term_zh: "為什麼",
          related_terms: [
            {
              term_target: "Tại sao",
              pronunciation: ["/taj saʊ/"],
              specific_note: "正式",
              segments: [
                { text: "Tại", meaning: "因為/在", tail: " " },
                { text: "sao", meaning: "什麼/怎", tail: "" },
              ],
            },
            {
              term_target: "Sao",
              pronunciation: ["/saʊ/"],
              specific_note: "口語",
              segments: [{ text: "Sao", meaning: "怎/為何", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tại sao?",
              translation: "為什麼？",
              segments: [{ text: "Tại sao", meaning: "為什麼", tail: "?" }],
            },
            {
              sentence: "Sao bạn buồn?",
              translation: "你為什麼難過？",
              segments: [
                { text: "Sao", meaning: "為何", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "buồn", meaning: "難過", tail: "?" },
              ],
            },
            {
              sentence: "Tại sao không?",
              translation: "為什麼不？(Why not?)",
              segments: [
                { text: "Tại sao", meaning: "為什麼", tail: " " },
                { text: "không", meaning: "不", tail: "?" },
              ],
            },
          ],
          usage_note: "口語中經常省略「Tại」，直接說「Sao」。",
          image_file: "why.png",
        },
        {
          id: "q-07",
          term_zh: "哪一個",
          related_terms: [
            {
              term_target: "Nào",
              pronunciation: ["/naʊ/"],
              specific_note: "放在名詞後",
              segments: [{ text: "Nào", meaning: "哪", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái nào?",
              translation: "哪一個？",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "nào", meaning: "哪", tail: "?" },
              ],
            },
            {
              sentence: "Bạn thích màu nào?",
              translation: "你喜歡哪個顏色？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "màu", meaning: "顏色", tail: " " },
                { text: "nào", meaning: "哪", tail: "?" },
              ],
            },
            {
              sentence: "Người nào?",
              translation: "哪個人？",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "nào", meaning: "哪", tail: "?" },
              ],
            },
          ],
          usage_note:
            "越南語結構是「名詞 + 哪」，例如：車哪 = 哪台車 (Xe nào)。",
          image_file: "which.png",
        },
        {
          id: "q-08",
          term_zh: "多少 (錢/數量)",
          related_terms: [
            {
              term_target: "Bao nhiêu",
              pronunciation: ["/baʊ ɲiəw/"],
              specific_note: "通用(問價格/大數量)",
              segments: [
                { text: "Bao", meaning: "包/多", tail: " " },
                { text: "nhiêu", meaning: "多", tail: "" },
              ],
            },
            {
              term_target: "Mấy",
              pronunciation: ["/mɜj/"],
              specific_note: "問小數量(如時間/幾歲)",
              segments: [{ text: "Mấy", meaning: "幾", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bao nhiêu tiền?",
              translation: "多少錢？",
              segments: [
                { text: "Bao nhiêu", meaning: "多少", tail: " " },
                { text: "tiền", meaning: "錢", tail: "?" },
              ],
            },
            {
              sentence: "Có bao nhiêu người?",
              translation: "有多少人？",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "người", meaning: "人", tail: "?" },
              ],
            },
            {
              sentence: "Mấy giờ rồi?",
              translation: "幾點了？(時間數量少，用Mấy)",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
          ],
          usage_note:
            "買東西問價錢一律用「Bao nhiêu」。問時間或小孩年紀用「Mấy」。",
          image_file: "how_much.png",
        },
        {
          id: "q-09",
          term_zh: "多久 (時間)",
          related_terms: [
            {
              term_target: "Bao lâu",
              pronunciation: ["/baʊ ləw/"],
              specific_note: "時間長度",
              segments: [
                { text: "Bao", meaning: "多", tail: " " },
                { text: "lâu", meaning: "久", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mất bao lâu?",
              translation: "要花多久時間？",
              segments: [
                { text: "Mất", meaning: "失去/花費", tail: " " },
                { text: "bao lâu", meaning: "多久", tail: "?" },
              ],
            },
            {
              sentence: "Đợi bao lâu?",
              translation: "要等多久？",
              segments: [
                { text: "Đợi", meaning: "等", tail: " " },
                { text: "bao lâu", meaning: "多久", tail: "?" },
              ],
            },
            {
              sentence: "Bạn học bao lâu rồi?",
              translation: "你學多久了？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "học", meaning: "學", tail: " " },
                { text: "bao lâu", meaning: "多久", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
          ],
          usage_note: "問「時間長短」專用。",
          image_file: "how_long.png",
        },
        {
          id: "q-10",
          term_zh: "幾點",
          related_terms: [
            {
              term_target: "Mấy giờ",
              pronunciation: ["/mɜj zə/"],
              specific_note: "",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點/時", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bây giờ là mấy giờ?",
              translation: "現在是幾點？",
              segments: [
                { text: "Bây giờ", meaning: "現在", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "mấy giờ", meaning: "幾點", tail: "?" },
              ],
            },
            {
              sentence: "Mấy giờ đi?",
              translation: "幾點出發？",
              segments: [
                { text: "Mấy giờ", meaning: "幾點", tail: " " },
                { text: "đi", meaning: "去/走", tail: "?" },
              ],
            },
            {
              sentence: "Mấy giờ cửa hàng mở?",
              translation: "商店幾點開？",
              segments: [
                { text: "Mấy giờ", meaning: "幾點", tail: " " },
                { text: "cửa hàng", meaning: "商店", tail: " " },
                { text: "mở", meaning: "開", tail: "?" },
              ],
            },
          ],
          usage_note: "跟朋友約時間必備句型。",
          image_file: "what_time.png",
        },
        {
          id: "q-11",
          term_zh: "幾歲",
          related_terms: [
            {
              term_target: "Bao nhiêu tuổi",
              pronunciation: ["/baʊ ɲiəw tuəj/"],
              specific_note: "成人/通用",
              segments: [
                { text: "Bao nhiêu", meaning: "多少", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "" },
              ],
            },
            {
              term_target: "Mấy tuổi",
              pronunciation: ["/mɜj tuəj/"],
              specific_note: "小孩(10歲以下)",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn bao nhiêu tuổi?",
              translation: "你幾歲？(一般問法)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "?" },
              ],
            },
            {
              sentence: "Em bé mấy tuổi?",
              translation: "小寶寶幾歲？",
              segments: [
                { text: "Em bé", meaning: "小寶寶", tail: " " },
                { text: "mấy", meaning: "幾", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "?" },
              ],
            },
            {
              sentence: "Năm nay bao nhiêu tuổi?",
              translation: "今年幾歲？",
              segments: [
                { text: "Năm nay", meaning: "今年", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "?" },
              ],
            },
          ],
          usage_note:
            "越南人很常問年齡，為了決定稱呼你「哥哥/姐姐」還是「弟弟/妹妹」。",
          image_file: "how_old.png",
        },
      ],
    },
    {
      id: "time_place-vi",
      name: "表達場所和時間的單字",
      items: [
        {
          id: "tp-01",
          term_zh: "現在",
          related_terms: [
            {
              term_target: "Bây giờ",
              pronunciation: ["/bɜj zə/"],
              specific_note: "正式/完整",
              segments: [
                { text: "Bây", meaning: "現", tail: " " },
                { text: "giờ", meaning: "時", tail: "" },
              ],
            },
            {
              term_target: "Giờ",
              pronunciation: ["/zə/"],
              specific_note: "口語簡稱",
              segments: [{ text: "Giờ", meaning: "現在", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Làm ngay bây giờ.",
              translation: "現在馬上做。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "ngay", meaning: "馬上", tail: " " },
                { text: "bây giờ", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Bạn đang ở đâu?",
              translation: "(現在)你在哪裡？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Giờ tôi đang bận.",
              translation: "我現在正忙。",
              segments: [
                { text: "Giờ", meaning: "現在", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
              ],
            },
          ],
          usage_note: "口語常省略「Bây」，直接說「Giờ」。",
          image_file: "now.png",
        },
        {
          id: "tp-02",
          term_zh: "今天",
          related_terms: [
            {
              term_target: "Hôm nay",
              pronunciation: ["/hom naj/"],
              specific_note: "",
              segments: [
                { text: "Hôm", meaning: "日/天", tail: " " },
                { text: "nay", meaning: "這/今", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hôm nay không được.",
              translation: "今天不行。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "được", meaning: "行/可以", tail: "." },
              ],
            },
            {
              sentence: "Hôm nay bạn thế nào?",
              translation: "你今天好嗎？",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Hôm nay là thứ hai.",
              translation: "今天是星期一。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "thứ hai", meaning: "星期一", tail: "." },
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
              term_target: "Ngày mai",
              pronunciation: ["/ŋaj maɪ/"],
              specific_note: "標準",
              segments: [
                { text: "Ngày", meaning: "日", tail: " " },
                { text: "mai", meaning: "明天", tail: "" },
              ],
            },
            {
              term_target: "Mai",
              pronunciation: ["/maɪ/"],
              specific_note: "口語簡稱",
              segments: [{ text: "Mai", meaning: "明天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mai gặp nhé.",
              translation: "明天見。",
              segments: [
                { text: "Mai", meaning: "明天", tail: " " },
                { text: "gặp", meaning: "見面", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Ngày mai là sinh nhật tôi.",
              translation: "明天是我的生日。",
              segments: [
                { text: "Ngày mai", meaning: "明天", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sinh nhật", meaning: "生日", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Mai rảnh không?",
              translation: "明天有空嗎？",
              segments: [
                { text: "Mai", meaning: "明天", tail: " " },
                { text: "rảnh", meaning: "有空", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "口語常省略「Ngày」，直接說「Mai」。",
          image_file: "tomorrow.png",
        },
        {
          id: "tp-04",
          term_zh: "昨天",
          related_terms: [
            {
              term_target: "Hôm qua",
              pronunciation: ["/hom kwa/"],
              specific_note: "",
              segments: [
                { text: "Hôm", meaning: "日", tail: " " },
                { text: "qua", meaning: "過/昨", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Sáng hôm qua.",
              translation: "昨天早上。",
              segments: [
                { text: "Sáng", meaning: "早晨", tail: " " },
                { text: "hôm qua", meaning: "昨天", tail: "." },
              ],
            },
            {
              sentence: "Hôm qua bạn ở đâu?",
              translation: "你昨天在哪裡？",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Hôm qua trời mưa.",
              translation: "昨天下雨了。",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "trời", meaning: "天", tail: " " },
                { text: "mưa", meaning: "下雨", tail: "." },
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
              term_target: "Ở đây",
              pronunciation: ["/ə dej/"],
              specific_note: "在這裡",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這", tail: "" },
              ],
            },
            {
              term_target: "Đây",
              pronunciation: ["/dej/"],
              specific_note: "這兒",
              segments: [{ text: "Đây", meaning: "這", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lại đây.",
              translation: "過來這裡。",
              segments: [
                { text: "Lại", meaning: "來", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Tôi đang ở đây.",
              translation: "我(正)在這裡。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Có gần đây không?",
              translation: "離這裡近嗎？",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "gần", meaning: "靠近", tail: " " },
                { text: "đây", meaning: "這裡", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
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
              term_target: "Ở đó",
              pronunciation: ["/ə dɔ/"],
              specific_note: "在那裡",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đó", meaning: "那", tail: "" },
              ],
            },
            {
              term_target: "Kia",
              pronunciation: ["/kiə/"],
              specific_note: "那邊(更遠)",
              segments: [{ text: "Kia", meaning: "那邊", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi ra đó.",
              translation: "去那裡。",
              segments: [
                { text: "Đi", meaning: "走/去", tail: " " },
                { text: "ra", meaning: "出/往", tail: " " },
                { text: "đó", meaning: "那裡", tail: "." },
              ],
            },
            {
              sentence: "Nhìn kia kìa.",
              translation: "看那邊。",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "kia", meaning: "那邊", tail: " " },
                { text: "kìa", meaning: "喔/瞧", tail: "." },
              ],
            },
            {
              sentence: "Ai ở đó thế?",
              translation: "誰在那裡？",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đó", meaning: "那裡", tail: " " },
                { text: "thế", meaning: "啊(語助詞)", tail: "?" },
              ],
            },
          ],
          usage_note: "一般用「Đó」，指著遠方用「Kia」。",
          image_file: "there.png",
        },
        {
          id: "tp-07",
          term_zh: "天 (日子)",
          related_terms: [
            {
              term_target: "Ngày",
              pronunciation: ["/ŋaj/"],
              specific_note: "",
              segments: [{ text: "Ngày", meaning: "天/日", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Một ngày.",
              translation: "一天。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "ngày", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "Chúc một ngày tốt lành.",
              translation: "祝你有美好的一天。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "ngày", meaning: "天", tail: " " },
                { text: "tốt lành", meaning: "美好/吉祥", tail: "." },
              ],
            },
            {
              sentence: "Mỗi ngày.",
              translation: "每一天。",
              segments: [
                { text: "Mỗi", meaning: "每", tail: " " },
                { text: "ngày", meaning: "天", tail: "." },
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
              term_target: "Năm",
              pronunciation: ["/nam/"],
              specific_note: "",
              segments: [{ text: "Năm", meaning: "年", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Năm nay.",
              translation: "今年。",
              segments: [
                { text: "Năm", meaning: "年", tail: " " },
                { text: "nay", meaning: "今", tail: "." },
              ],
            },
            {
              sentence: "Chúc Mừng Năm Mới.",
              translation: "新年快樂。",
              segments: [
                { text: "Chúc Mừng", meaning: "祝賀", tail: " " },
                { text: "Năm", meaning: "年", tail: " " },
                { text: "Mới", meaning: "新", tail: "." },
              ],
            },
            {
              sentence: "Năm ngoái.",
              translation: "去年。",
              segments: [
                { text: "Năm", meaning: "年", tail: " " },
                { text: "ngoái", meaning: "回頭/過去", tail: "." },
              ],
            },
          ],
          usage_note: "注意：「去年」是「Năm ngoái」，不是「Năm trước」。",
          image_file: "year.png",
        },
        {
          id: "tp-09",
          term_zh: "月",
          related_terms: [
            {
              term_target: "Tháng",
              pronunciation: ["/tʰaŋ/"],
              specific_note: "",
              segments: [{ text: "Tháng", meaning: "月", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tháng này.",
              translation: "這個月。",
              segments: [
                { text: "Tháng", meaning: "月", tail: " " },
                { text: "này", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Tháng sau.",
              translation: "下個月。",
              segments: [
                { text: "Tháng", meaning: "月", tail: " " },
                { text: "sau", meaning: "後", tail: "." },
              ],
            },
            {
              sentence: "Một năm có 12 tháng.",
              translation: "一年有12個月。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "năm", meaning: "年", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "12", meaning: "十二", tail: " " },
                { text: "tháng", meaning: "月", tail: "." },
              ],
            },
          ],
          usage_note: "月份。",
          image_file: "month.png",
        },
        {
          id: "tp-10",
          term_zh: "週 / 星期",
          related_terms: [
            {
              term_target: "Tuần",
              pronunciation: ["/twan/"],
              specific_note: "",
              segments: [{ text: "Tuần", meaning: "週", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tuần sau.",
              translation: "下週。",
              segments: [
                { text: "Tuần", meaning: "週", tail: " " },
                { text: "sau", meaning: "後", tail: "." },
              ],
            },
            {
              sentence: "Mỗi tuần một lần.",
              translation: "每週一次。",
              segments: [
                { text: "Mỗi", meaning: "每", tail: " " },
                { text: "tuần", meaning: "週", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "lần", meaning: "次", tail: "." },
              ],
            },
            {
              sentence: "Tuần mới vui vẻ.",
              translation: "祝這週愉快 (新的一週愉快)。",
              segments: [
                { text: "Tuần", meaning: "週", tail: " " },
                { text: "mới", meaning: "新", tail: " " },
                { text: "vui vẻ", meaning: "快樂", tail: "." },
              ],
            },
          ],
          usage_note: "一星期。",
          image_file: "week.png",
        },
        {
          id: "tp-11",
          term_zh: "早上",
          related_terms: [
            {
              term_target: "Buổi sáng",
              pronunciation: ["/buəj saŋ/"],
              specific_note: "時段",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "sáng", meaning: "亮/早", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Vào buổi sáng.",
              translation: "在早上。",
              segments: [
                { text: "Vào", meaning: "進入/在", tail: " " },
                { text: "buổi sáng", meaning: "早上", tail: "." },
              ],
            },
            {
              sentence: "Chào buổi sáng.",
              translation: "早安。",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "buổi sáng", meaning: "早上", tail: "." },
              ],
            },
            {
              sentence: "Tôi chạy bộ buổi sáng.",
              translation: "我早上跑步。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chạy bộ", meaning: "跑步", tail: " " },
                { text: "buổi sáng", meaning: "早上", tail: "." },
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
              term_target: "Buổi chiều",
              pronunciation: ["/buəj ciəw/"],
              specific_note: "時段",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "chiều", meaning: "下午/晚", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào buổi chiều.",
              translation: "午安。",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "buổi chiều", meaning: "下午", tail: "." },
              ],
            },
            {
              sentence: "Chiều nay gặp nhé.",
              translation: "今天下午見。",
              segments: [
                { text: "Chiều", meaning: "下午", tail: " " },
                { text: "nay", meaning: "今", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Chiều chủ nhật.",
              translation: "星期天下午。",
              segments: [
                { text: "Chiều", meaning: "下午", tail: " " },
                { text: "chủ nhật", meaning: "主日(週日)", tail: "." },
              ],
            },
          ],
          usage_note: "越南分中午(Trưa)和下午(Chiều)，通常1點後算 Chiều。",
          image_file: "afternoon.png",
        },
        {
          id: "tp-13",
          term_zh: "晚上",
          related_terms: [
            {
              term_target: "Buổi tối",
              pronunciation: ["/buəj toj/"],
              specific_note: "時段",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "tối", meaning: "暗/晚", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào buổi tối.",
              translation: "晚安 (見面)。",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "buổi tối", meaning: "晚上", tail: "." },
              ],
            },
            {
              sentence: "Tối nay rảnh không?",
              translation: "今晚有空嗎？",
              segments: [
                { text: "Tối", meaning: "晚", tail: " " },
                { text: "nay", meaning: "今", tail: " " },
                { text: "rảnh", meaning: "閒暇", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi xem tivi buổi tối.",
              translation: "我晚上看電視。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "tivi", meaning: "電視", tail: " " },
                { text: "buổi tối", meaning: "晚上", tail: "." },
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
              term_target: "Buổi trưa",
              pronunciation: ["/buəj tʃɯa/"],
              specific_note: "時段",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "trưa", meaning: "中午", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Vào buổi trưa.",
              translation: "在中午。",
              segments: [
                { text: "Vào", meaning: "在", tail: " " },
                { text: "buổi trưa", meaning: "中午", tail: "." },
              ],
            },
            {
              sentence: "Ăn cơm trưa.",
              translation: "吃中餐 (吃午飯)。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "cơm", meaning: "飯", tail: " " },
                { text: "trưa", meaning: "中午", tail: "." },
              ],
            },
            {
              sentence: "Trước buổi trưa.",
              translation: "中午之前。",
              segments: [
                { text: "Trước", meaning: "之前", tail: " " },
                { text: "buổi trưa", meaning: "中午", tail: "." },
              ],
            },
          ],
          usage_note: "11點到1點左右。",
          image_file: "noon.png",
        },
        {
          id: "tp-15",
          term_zh: "前面",
          related_terms: [
            {
              term_target: "Đằng trước",
              pronunciation: ["/daŋ tʃɨək/"],
              specific_note: "前方",
              segments: [
                { text: "Đằng", meaning: "方/邊", tail: " " },
                { text: "trước", meaning: "前", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ở đằng trước bạn.",
              translation: "在你前面。",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đằng trước", meaning: "前面", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Đợi ở trước cửa ga.",
              translation: "在車站門口前等。",
              segments: [
                { text: "Đợi", meaning: "等", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "trước", meaning: "前", tail: " " },
                { text: "cửa", meaning: "門", tail: " " },
                { text: "ga", meaning: "車站", tail: "." },
              ],
            },
            {
              sentence: "Đừng đứng chắn trước mặt tôi.",
              translation: "不要擋在我面前。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "đứng", meaning: "站", tail: " " },
                { text: "chắn", meaning: "擋", tail: " " },
                { text: "trước", meaning: "前", tail: " " },
                { text: "mặt", meaning: "臉/面", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "可以簡稱「Trước」。",
          image_file: "front.png",
        },
        {
          id: "tp-16",
          term_zh: "後面",
          related_terms: [
            {
              term_target: "Đằng sau",
              pronunciation: ["/daŋ saw/"],
              specific_note: "後方",
              segments: [
                { text: "Đằng", meaning: "方/邊", tail: " " },
                { text: "sau", meaning: "後", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Sau cánh cửa.",
              translation: "門後面。",
              segments: [
                { text: "Sau", meaning: "後", tail: " " },
                { text: "cánh cửa", meaning: "門扇", tail: "." },
              ],
            },
            {
              sentence: "Nhìn ra đằng sau kìa.",
              translation: "看後面那邊。",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "ra", meaning: "往/出", tail: " " },
                { text: "đằng sau", meaning: "後面", tail: " " },
                { text: "kìa", meaning: "那裡(語助)", tail: "." },
              ],
            },
            {
              sentence: "Đứng sau vạch kẻ.",
              translation: "站在線後面。",
              segments: [
                { text: "Đứng", meaning: "站", tail: " " },
                { text: "sau", meaning: "後", tail: " " },
                { text: "vạch kẻ", meaning: "畫線/標線", tail: "." },
              ],
            },
          ],
          usage_note: "可以簡稱「Sau」。",
          image_file: "behind.png",
        },
        {
          id: "tp-17",
          term_zh: "左邊",
          related_terms: [
            {
              term_target: "Bên trái",
              pronunciation: ["/ben tʃaj/"],
              specific_note: "",
              segments: [
                { text: "Bên", meaning: "邊", tail: " " },
                { text: "trái", meaning: "左", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Rẽ trái.",
              translation: "左轉。",
              segments: [
                { text: "Rẽ", meaning: "轉", tail: " " },
                { text: "trái", meaning: "左", tail: "." },
              ],
            },
            {
              sentence: "Ở bên trái bạn.",
              translation: "在你左邊。",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "bên trái", meaning: "左邊", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Nhìn sang trái.",
              translation: "向左看。",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "sang", meaning: "往/過", tail: " " },
                { text: "trái", meaning: "左", tail: "." },
              ],
            },
          ],
          usage_note: "「Tay trái」是左手。",
          image_file: "left.png",
        },
        {
          id: "tp-18",
          term_zh: "右邊",
          related_terms: [
            {
              term_target: "Bên phải",
              pronunciation: ["/ben faj/"],
              specific_note: "",
              segments: [
                { text: "Bên", meaning: "邊", tail: " " },
                { text: "phải", meaning: "右", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Rẽ phải.",
              translation: "右轉。",
              segments: [
                { text: "Rẽ", meaning: "轉", tail: " " },
                { text: "phải", meaning: "右", tail: "." },
              ],
            },
            {
              sentence: "Ở bên phải.",
              translation: "在右邊。",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "bên phải", meaning: "右邊", tail: "." },
              ],
            },
            {
              sentence: "Dùng tay phải.",
              translation: "用右手。",
              segments: [
                { text: "Dùng", meaning: "用", tail: " " },
                { text: "tay", meaning: "手", tail: " " },
                { text: "phải", meaning: "右", tail: "." },
              ],
            },
          ],
          usage_note: "「Tay phải」是右手，「Phải」也有「對/正確」的意思。",
          image_file: "right.png",
        },
        {
          id: "tp-19",
          term_zh: "旁邊",
          related_terms: [
            {
              term_target: "Bên cạnh",
              pronunciation: ["/ben kaɲ/"],
              specific_note: "",
              segments: [
                { text: "Bên", meaning: "邊", tail: " " },
                { text: "cạnh", meaning: "旁", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ngồi bên cạnh tôi.",
              translation: "坐我旁邊。",
              segments: [
                { text: "Ngồi", meaning: "坐", tail: " " },
                { text: "bên cạnh", meaning: "旁邊", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Bên cạnh ngân hàng.",
              translation: "在銀行旁邊。",
              segments: [
                { text: "Bên cạnh", meaning: "旁邊", tail: " " },
                { text: "ngân hàng", meaning: "銀行", tail: "." },
              ],
            },
            {
              sentence: "Ai ngồi cạnh bạn thế?",
              translation: "誰坐你旁邊啊？",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "ngồi", meaning: "坐", tail: " " },
                { text: "cạnh", meaning: "旁", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "thế", meaning: "啊", tail: "?" },
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
              term_target: "Đối diện",
              pronunciation: ["/doj ziən/"],
              specific_note: "",
              segments: [
                { text: "Đối", meaning: "對", tail: " " },
                { text: "diện", meaning: "面", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đối diện ngân hàng.",
              translation: "銀行對面。",
              segments: [
                { text: "Đối diện", meaning: "對面", tail: " " },
                { text: "ngân hàng", meaning: "銀行", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy ngồi đối diện tôi.",
              translation: "他坐我對面。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "ngồi", meaning: "坐", tail: " " },
                { text: "đối diện", meaning: "對面", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Cửa hàng ở bên kia đường.",
              translation: "商店在對面馬路。",
              segments: [
                { text: "Cửa hàng", meaning: "商店", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "bên kia", meaning: "那邊/對面", tail: " " },
                { text: "đường", meaning: "路", tail: "." },
              ],
            },
          ],
          usage_note: "面對面。",
          image_file: "across_from.png",
        },
        {
          id: "tp-21",
          term_zh: "春天",
          related_terms: [
            {
              term_target: "Mùa xuân",
              pronunciation: ["/mɯa swən/"],
              specific_note: "",
              segments: [
                { text: "Mùa", meaning: "季節", tail: " " },
                { text: "xuân", meaning: "春", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa xuân đến rồi.",
              translation: "春天來了。",
              segments: [
                { text: "Mùa xuân", meaning: "春天", tail: " " },
                { text: "đến", meaning: "來", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích mùa xuân.",
              translation: "我喜歡春天。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "mùa xuân", meaning: "春天", tail: "." },
              ],
            },
            {
              sentence: "Hoa nở vào mùa xuân.",
              translation: "花在春天盛開。",
              segments: [
                { text: "Hoa", meaning: "花", tail: " " },
                { text: "nở", meaning: "開", tail: " " },
                { text: "vào", meaning: "在(時間)", tail: " " },
                { text: "mùa xuân", meaning: "春天", tail: "." },
              ],
            },
          ],
          usage_note: "越南北部有四季，南部只有雨季和乾季。",
          image_file: "spring.png",
        },
        {
          id: "tp-22",
          term_zh: "夏天",
          related_terms: [
            {
              term_target: "Mùa hè",
              pronunciation: ["/mɯa hɛ/"],
              specific_note: "常用",
              segments: [
                { text: "Mùa", meaning: "季節", tail: " " },
                { text: "hè", meaning: "夏", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa hè nóng bức.",
              translation: "炎熱的夏天。",
              segments: [
                { text: "Mùa hè", meaning: "夏天", tail: " " },
                { text: "nóng bức", meaning: "悶熱", tail: "." },
              ],
            },
            {
              sentence: "Tôi đi bơi vào mùa hè.",
              translation: "我夏天去游泳。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "bơi", meaning: "游泳", tail: " " },
                { text: "vào", meaning: "在", tail: " " },
                { text: "mùa hè", meaning: "夏天", tail: "." },
              ],
            },
            {
              sentence: "Nghỉ hè.",
              translation: "暑假。",
              segments: [
                { text: "Nghỉ", meaning: "休息/放假", tail: " " },
                { text: "hè", meaning: "夏", tail: "." },
              ],
            },
          ],
          usage_note: "也可以說「Mùa hạ」，但口語多用「Mùa hè」。",
          image_file: "summer.png",
        },
        {
          id: "tp-23",
          term_zh: "秋天",
          related_terms: [
            {
              term_target: "Mùa thu",
              pronunciation: ["/mɯa tʰu/"],
              specific_note: "",
              segments: [
                { text: "Mùa", meaning: "季節", tail: " " },
                { text: "thu", meaning: "秋", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa thu mát mẻ.",
              translation: "涼爽的秋天。",
              segments: [
                { text: "Mùa thu", meaning: "秋天", tail: " " },
                { text: "mát mẻ", meaning: "涼爽", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích lá mùa thu.",
              translation: "我喜歡秋天的葉子。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "lá", meaning: "葉子", tail: " " },
                { text: "mùa thu", meaning: "秋天", tail: "." },
              ],
            },
            {
              sentence: "Mùa thu sắp đến rồi.",
              translation: "秋天快到了。",
              segments: [
                { text: "Mùa thu", meaning: "秋天", tail: " " },
                { text: "sắp", meaning: "快要", tail: " " },
                { text: "đến", meaning: "來", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "河內的秋天非常有名且美麗。",
          image_file: "autumn.png",
        },
        {
          id: "tp-24",
          term_zh: "冬天",
          related_terms: [
            {
              term_target: "Mùa đông",
              pronunciation: ["/mɯa doŋm/"],
              specific_note: "",
              segments: [
                { text: "Mùa", meaning: "季節", tail: " " },
                { text: "đông", meaning: "冬", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa đông lạnh.",
              translation: "寒冷的冬天。",
              segments: [
                { text: "Mùa đông", meaning: "冬天", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
              ],
            },
            {
              sentence: "Bạn có thích mùa đông không?",
              translation: "你喜歡冬天嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "mùa đông", meaning: "冬天", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Mùa đông có tuyết rơi.",
              translation: "冬天下雪 (越南沙壩偶爾會有)。",
              segments: [
                { text: "Mùa đông", meaning: "冬天", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "tuyết", meaning: "雪", tail: " " },
                { text: "rơi", meaning: "落", tail: "." },
              ],
            },
          ],
          usage_note: "季節。",
          image_file: "winter.png",
        },
      ],
    },
    {
      id: "conjunctions-vi",
      name: "連接詞",
      items: [
        {
          id: "conj-01",
          term_zh: "或者 / 還是",
          related_terms: [
            {
              term_target: "Hay",
              pronunciation: ["/haj/"],
              specific_note: "疑問句常用",
              segments: [{ text: "Hay", meaning: "還是", tail: "" }],
            },
            {
              term_target: "Hoặc",
              pronunciation: ["/hwak/"],
              specific_note: "陳述句常用",
              segments: [{ text: "Hoặc", meaning: "或者", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Trà hay cà phê?",
              translation: "茶還是咖啡？",
              segments: [
                { text: "Trà", meaning: "茶", tail: " " },
                { text: "hay", meaning: "還是", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: "?" },
              ],
            },
            {
              sentence: "Sáng hay chiều?",
              translation: "早上還是下午？",
              segments: [
                { text: "Sáng", meaning: "早上", tail: " " },
                { text: "hay", meaning: "還是", tail: " " },
                { text: "chiều", meaning: "下午", tail: "?" },
              ],
            },
            {
              sentence: "Bạn đi hoặc tôi đi.",
              translation: "你去或者我去 (二選一)。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "hoặc", meaning: "或者", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: "." },
              ],
            },
          ],
          usage_note: "問別人選哪一個時，一定要用「Hay」。",
          image_file: "or.png",
        },
        {
          id: "conj-02",
          term_zh: "但是",
          related_terms: [
            {
              term_target: "Nhưng",
              pronunciation: ["/ɲɨŋ/"],
              specific_note: "",
              segments: [{ text: "Nhưng", meaning: "但是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi thích, nhưng đắt quá.",
              translation: "我喜歡，但是太貴了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: ", " },
                { text: "nhưng", meaning: "但是", tail: " " },
                { text: "đắt", meaning: "貴", tail: " " },
                { text: "quá", meaning: "太...了", tail: "." },
              ],
            },
            {
              sentence: "Muốn đi nhưng bận.",
              translation: "想去但是很忙。",
              segments: [
                { text: "Muốn", meaning: "想要", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "nhưng", meaning: "但是", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi, nhưng tôi không biết.",
              translation: "抱歉，但我不知道。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "nhưng", meaning: "但是", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "biết", meaning: "知道", tail: "." },
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
              term_target: "Nên",
              pronunciation: ["/nen/"],
              specific_note: "口語常用",
              segments: [{ text: "Nên", meaning: "所以/應該", tail: "" }],
            },
            {
              term_target: "Cho nên",
              pronunciation: ["/cɔ nen/"],
              specific_note: "較完整",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "nên", meaning: "所以", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mưa to nên ở nhà.",
              translation: "雨很大，所以待在家。",
              segments: [
                { text: "Mưa", meaning: "雨", tail: " " },
                { text: "to", meaning: "大", tail: " " },
                { text: "nên", meaning: "所以", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Đói bụng nên đi ăn.",
              translation: "肚子餓了，所以去吃飯。",
              segments: [
                { text: "Đói", meaning: "餓", tail: " " },
                { text: "bụng", meaning: "肚子", tail: " " },
                { text: "nên", meaning: "所以", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "ăn", meaning: "吃", tail: "." },
              ],
            },
            {
              sentence: "Thích nên mua.",
              translation: "喜歡所以買了。",
              segments: [
                { text: "Thích", meaning: "喜歡", tail: " " },
                { text: "nên", meaning: "所以", tail: " " },
                { text: "mua", meaning: "買", tail: "." },
              ],
            },
          ],
          usage_note: "表示因果關係。",
          image_file: "so.png",
        },
        {
          id: "conj-04",
          term_zh: "以及 / 和",
          related_terms: [
            {
              term_target: "Và",
              pronunciation: ["/va/"],
              specific_note: "正式/書面",
              segments: [{ text: "Và", meaning: "和", tail: "" }],
            },
            {
              term_target: "Với",
              pronunciation: ["/vəj/"],
              specific_note: "口語(跟/與)",
              segments: [{ text: "Với", meaning: "跟/和", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi và bạn.",
              translation: "我和你。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "và", meaning: "和", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Cơm với phở.",
              translation: "飯跟河粉。",
              segments: [
                { text: "Cơm", meaning: "飯", tail: " " },
                { text: "với", meaning: "跟", tail: " " },
                { text: "phở", meaning: "河粉", tail: "." },
              ],
            },
            {
              sentence: "Ăn và uống.",
              translation: "吃和喝。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "và", meaning: "和", tail: " " },
                { text: "uống", meaning: "喝", tail: "." },
              ],
            },
          ],
          usage_note: "口語中連結名詞(A跟B)常說「Với」，連結動作常說「Và」。",
          image_file: "and.png",
        },
        {
          id: "conj-05",
          term_zh: "因為",
          related_terms: [
            {
              term_target: "Tại vì",
              pronunciation: ["/taj vi/"],
              specific_note: "因為(口語)",
              segments: [
                { text: "Tại", meaning: "在/歸咎", tail: " " },
                { text: "vì", meaning: "因為", tail: "" },
              ],
            },
            {
              term_target: "Vì",
              pronunciation: ["/vi/"],
              specific_note: "簡稱",
              segments: [{ text: "Vì", meaning: "因為", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Vì trời mưa.",
              translation: "因為下雨。",
              segments: [
                { text: "Vì", meaning: "因為", tail: " " },
                { text: "trời", meaning: "天", tail: " " },
                { text: "mưa", meaning: "下雨", tail: "." },
              ],
            },
            {
              sentence: "Tại vì tôi thích.",
              translation: "因為我喜歡。",
              segments: [
                { text: "Tại vì", meaning: "因為", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "." },
              ],
            },
            {
              sentence: "Đến muộn vì tắc đường.",
              translation: "遲到是因為塞車。",
              segments: [
                { text: "Đến", meaning: "到", tail: " " },
                { text: "muộn", meaning: "晚", tail: " " },
                { text: "vì", meaning: "因為", tail: " " },
                { text: "tắc đường", meaning: "塞車", tail: "." },
              ],
            },
          ],
          usage_note: "解釋原因必備。",
          image_file: "because.png",
        },
      ],
    },
    {
      id: "prepositions_vn",
      name: "介系詞",
      items: [
        {
          id: "prep-01",
          term_zh: "和...一起 / 跟",
          related_terms: [
            {
              term_target: "Với",
              pronunciation: ["/vəj/"],
              specific_note: "伴隨/和",
              segments: [{ text: "Với", meaning: "和/跟", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi với tôi.",
              translation: "跟我走。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "với", meaning: "跟", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Tôi sống với gia đình.",
              translation: "我跟家人住。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "sống", meaning: "生活/住", tail: " " },
                { text: "với", meaning: "跟", tail: " " },
                { text: "gia đình", meaning: "家庭", tail: "." },
              ],
            },
            {
              sentence: "Cà phê sữa.",
              translation: "加煉乳的咖啡 (越南語通常省略'與/加')。",
              segments: [
                { text: "Cà phê", meaning: "咖啡", tail: " " },
                { text: "sữa", meaning: "奶/煉乳", tail: "." },
              ],
            },
          ],
          usage_note:
            "雖然「和」是 Và，但在「跟某人一起做某事」時，口語習慣用 Với。",
          image_file: "with.png",
        },
        {
          id: "prep-02",
          term_zh: "從... (來源)",
          related_terms: [
            {
              term_target: "Từ",
              pronunciation: ["/tɯ/"],
              specific_note: "起點",
              segments: [{ text: "Từ", meaning: "從", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đến từ Đài Loan.",
              translation: "我來自台灣。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đến", meaning: "來", tail: " " },
                { text: "từ", meaning: "從", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Từ 8 giờ đến 5 giờ.",
              translation: "從8點到5點。",
              segments: [
                { text: "Từ", meaning: "從", tail: " " },
                { text: "8", meaning: "八", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "5", meaning: "五", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Cách đây không xa.",
              translation: "離這裡不遠 (距離用Cách)。",
              segments: [
                { text: "Cách", meaning: "距離/隔", tail: " " },
                { text: "đây", meaning: "這裡", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "xa", meaning: "遠", tail: "." },
              ],
            },
          ],
          usage_note: "時間或來源用「Từ」，物理距離常用「Cách」(相隔)。",
          image_file: "from.png",
        },
        {
          id: "prep-03",
          term_zh: "為了... / 給...",
          related_terms: [
            {
              term_target: "Cho",
              pronunciation: ["/cɔ/"],
              specific_note: "給/為了",
              segments: [{ text: "Cho", meaning: "給", tail: "" }],
            },
            {
              term_target: "Để",
              pronunciation: ["/de/"],
              specific_note: "為了(目的)",
              segments: [{ text: "Để", meaning: "為了/讓", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này cho bạn.",
              translation: "這是給你的。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Cảm ơn vì đã giúp.",
              translation: "謝謝你的幫忙 (因為幫忙而感謝)。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "vì", meaning: "因為", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "giúp", meaning: "幫忙", tail: "." },
              ],
            },
            {
              sentence: "Tôi đang tìm chìa khóa.",
              translation: "我在找鑰匙 (Look for = Tìm)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "tìm", meaning: "尋找", tail: " " },
                { text: "chìa khóa", meaning: "鑰匙", tail: "." },
              ],
            },
          ],
          usage_note: "「找東西」直接用「Tìm」即可，不需要加介系詞。",
          image_file: "for.png",
        },
        {
          id: "prep-04",
          term_zh: "...的 (所有格)",
          related_terms: [
            {
              term_target: "Của",
              pronunciation: ["/kua/"],
              specific_note: "所屬",
              segments: [{ text: "Của", meaning: "的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Một cốc trà.",
              translation: "一杯茶 (量詞直接接名詞)。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "cốc", meaning: "杯", tail: " " },
                { text: "trà", meaning: "茶", tail: "." },
              ],
            },
            {
              sentence: "Bạn của tôi.",
              translation: "我的朋友 (朋友+的+我)。",
              segments: [
                { text: "Bạn", meaning: "朋友", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Màu của xe.",
              translation: "車子的顏色。",
              segments: [
                { text: "Màu", meaning: "顏色", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "xe", meaning: "車", tail: "." },
              ],
            },
          ],
          usage_note:
            "「一杯...」在越南語不用「Của」，直接說「數量+單位+名詞」。",
          image_file: "of.png",
        },
        {
          id: "prep-05",
          term_zh: "在... (地點)",
          related_terms: [
            {
              term_target: "Ở",
              pronunciation: ["/ə/"],
              specific_note: "在(位置)",
              segments: [{ text: "Ở", meaning: "在", tail: "" }],
            },
            {
              term_target: "Trong",
              pronunciation: ["/tʃɔŋm/"],
              specific_note: "在...裡面",
              segments: [{ text: "Trong", meaning: "裡/內", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi ở nhà.",
              translation: "我在家。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy ở trong phòng.",
              translation: "她在房間裡。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "trong", meaning: "裡面", tail: " " },
                { text: "phòng", meaning: "房間", tail: "." },
              ],
            },
            {
              sentence: "Hẹn gặp lúc 5 giờ.",
              translation: "5點見 (時間用 Lúc)。",
              segments: [
                { text: "Hẹn gặp", meaning: "約見", tail: " " },
                { text: "lúc", meaning: "時候(在)", tail: " " },
                { text: "5", meaning: "五", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
          ],
          usage_note: "地點用「Ở」，時間點用「Lúc」或「Vào」。",
          image_file: "at_in.png",
        },
        {
          id: "prep-06",
          term_zh: "往... / 給...",
          related_terms: [
            {
              term_target: "Đến",
              pronunciation: ["/den/"],
              specific_note: "去/到",
              segments: [{ text: "Đến", meaning: "到", tail: "" }],
            },
            {
              term_target: "Cho",
              pronunciation: ["/cɔ/"],
              specific_note: "給/致",
              segments: [{ text: "Cho", meaning: "給", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi đến trường.",
              translation: "去學校。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "trường", meaning: "學校", tail: "." },
              ],
            },
            {
              sentence: "Chúc mừng sinh nhật bạn.",
              translation: "祝你生日快樂 (給你的祝福)。",
              segments: [
                { text: "Chúc mừng", meaning: "祝賀", tail: " " },
                { text: "sinh nhật", meaning: "生日", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Đưa cho tôi.",
              translation: "拿給我。",
              segments: [
                { text: "Đưa", meaning: "遞/送", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "移動方向用「Đến」，對象用「Cho」。",
          image_file: "to.png",
        },
      ],
    },
    {
      id: "numbers_vn",
      name: "基本的數字",
      items: [
        {
          id: "num-0",
          term_zh: "0",
          related_terms: [
            {
              term_target: "Không",
              pronunciation: ["/xoŋm/"],
              specific_note: "",
              segments: [{ text: "Không", meaning: "零/不", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Không điểm.",
              translation: "零分。",
              segments: [
                { text: "Không", meaning: "零", tail: " " },
                { text: "điểm", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "Trà xanh không độ.",
              translation: "零度綠茶 (越南知名飲料)。",
              segments: [
                { text: "Trà", meaning: "茶", tail: " " },
                { text: "xanh", meaning: "綠", tail: " " },
                { text: "không", meaning: "零", tail: " " },
                { text: "độ", meaning: "度", tail: "." },
              ],
            },
            {
              sentence: "Không có gì.",
              translation: "沒什麼 / 不客氣 (零個東西)。",
              segments: [
                { text: "Không", meaning: "沒", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "gì", meaning: "什麼", tail: "." },
              ],
            },
          ],
          usage_note: "「Không」同時代表數字0和否定詞「不」。",
          image_file: "zero.png",
        },
        {
          id: "num-1",
          term_zh: "1",
          related_terms: [
            {
              term_target: "Một",
              pronunciation: ["/mot/"],
              specific_note: "",
              segments: [{ text: "Một", meaning: "一", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Một quả táo.",
              translation: "一顆蘋果。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "quả", meaning: "果(量詞)", tail: " " },
                { text: "táo", meaning: "蘋果", tail: "." },
              ],
            },
            {
              sentence: "Cho một vé.",
              translation: "給一張票。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "vé", meaning: "票", tail: "." },
              ],
            },
            {
              sentence: "Một người.",
              translation: "一個人。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
          ],
          usage_note: "買東西時，豎起一根手指說「Một cái」(一個) 最快。",
          image_file: "one.png",
        },
        {
          id: "num-2",
          term_zh: "2",
          related_terms: [
            {
              term_target: "Hai",
              pronunciation: ["/haj/"],
              specific_note: "",
              segments: [{ text: "Hai", meaning: "二", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hai ngày.",
              translation: "兩天。",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "ngày", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "Bàn cho hai người.",
              translation: "兩人的位子(桌子)。",
              segments: [
                { text: "Bàn", meaning: "桌", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "hai", meaning: "二", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Xin chào (Hi).",
              translation: "嗨 (發音跟 Hai 很像)。",
              segments: [
                { text: "Xin", meaning: "請", tail: " " },
                { text: "chào", meaning: "問候", tail: "." },
              ],
            },
          ],
          usage_note: "發音同英文的 Hi，所以越南年輕人打招呼有時也會說 Hai。",
          image_file: "two.png",
        },
        {
          id: "num-3",
          term_zh: "3",
          related_terms: [
            {
              term_target: "Ba",
              pronunciation: ["/ba/"],
              specific_note: "",
              segments: [{ text: "Ba", meaning: "三", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ba người.",
              translation: "三個人。",
              segments: [
                { text: "Ba", meaning: "三", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Ba giờ.",
              translation: "三點鐘。",
              segments: [
                { text: "Ba", meaning: "三", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Ba mẹ.",
              translation: "爸媽 (Ba也指爸爸)。",
              segments: [
                { text: "Ba", meaning: "爸", tail: " " },
                { text: "mẹ", meaning: "媽", tail: "." },
              ],
            },
          ],
          usage_note: "「Ba」在南部也是「爸爸」的意思。",
          image_file: "three.png",
        },
        {
          id: "num-4",
          term_zh: "4",
          related_terms: [
            {
              term_target: "Bốn",
              pronunciation: ["/bon/"],
              specific_note: "",
              segments: [{ text: "Bốn", meaning: "四", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bốn mùa.",
              translation: "四季。",
              segments: [
                { text: "Bốn", meaning: "四", tail: " " },
                { text: "mùa", meaning: "季節", tail: "." },
              ],
            },
            {
              sentence: "Bốn giờ.",
              translation: "四點。",
              segments: [
                { text: "Bốn", meaning: "四", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Bàn số bốn.",
              translation: "四號桌。",
              segments: [
                { text: "Bàn", meaning: "桌", tail: " " },
                { text: "số", meaning: "號", tail: " " },
                { text: "bốn", meaning: "四", tail: "." },
              ],
            },
          ],
          usage_note: "發音像中文的「奔」。",
          image_file: "four.png",
        },
        {
          id: "num-5",
          term_zh: "5",
          related_terms: [
            {
              term_target: "Năm",
              pronunciation: ["/nam/"],
              specific_note: "單獨使用時",
              segments: [{ text: "Năm", meaning: "五", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Năm sao.",
              translation: "五星級。",
              segments: [
                { text: "Năm", meaning: "五", tail: " " },
                { text: "sao", meaning: "星", tail: "." },
              ],
            },
            {
              sentence: "Năm phút.",
              translation: "五分鐘。",
              segments: [
                { text: "Năm", meaning: "五", tail: " " },
                { text: "phút", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "Thứ năm.",
              translation: "星期四 (第五天)。",
              segments: [
                { text: "Thứ", meaning: "第/週", tail: " " },
                { text: "năm", meaning: "五", tail: "." },
              ],
            },
          ],
          usage_note: "注意：接在10後面時(15)念「Lăm」。",
          image_file: "five.png",
        },
        {
          id: "num-6",
          term_zh: "6",
          related_terms: [
            {
              term_target: "Sáu",
              pronunciation: ["/saʊ/"],
              specific_note: "",
              segments: [{ text: "Sáu", meaning: "六", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sáu giờ.",
              translation: "六點。",
              segments: [
                { text: "Sáu", meaning: "六", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Thứ sáu.",
              translation: "星期五 (第六天)。",
              segments: [
                { text: "Thứ", meaning: "第/週", tail: " " },
                { text: "sáu", meaning: "六", tail: "." },
              ],
            },
            {
              sentence: "Sáu người.",
              translation: "六個人。",
              segments: [
                { text: "Sáu", meaning: "六", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
          ],
          usage_note: "發音要上揚。",
          image_file: "six.png",
        },
        {
          id: "num-7",
          term_zh: "7",
          related_terms: [
            {
              term_target: "Bảy",
              pronunciation: ["/baj/"],
              specific_note: "",
              segments: [{ text: "Bảy", meaning: "七", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bảy ngày.",
              translation: "七天。",
              segments: [
                { text: "Bảy", meaning: "七", tail: " " },
                { text: "ngày", meaning: "天", tail: "." },
              ],
            },
            {
              sentence: "Thứ bảy.",
              translation: "星期六 (第七天)。",
              segments: [
                { text: "Thứ", meaning: "第/週", tail: " " },
                { text: "bảy", meaning: "七", tail: "." },
              ],
            },
            {
              sentence: "Bảy giờ.",
              translation: "七點。",
              segments: [
                { text: "Bảy", meaning: "七", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
          ],
          usage_note: "發音像中文的「擺」。",
          image_file: "seven.png",
        },
        {
          id: "num-8",
          term_zh: "8",
          related_terms: [
            {
              term_target: "Tám",
              pronunciation: ["/tam/"],
              specific_note: "",
              segments: [{ text: "Tám", meaning: "八", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tám tuổi.",
              translation: "八歲。",
              segments: [
                { text: "Tám", meaning: "八", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "." },
              ],
            },
            {
              sentence: "Tám giờ.",
              translation: "八點。",
              segments: [
                { text: "Tám", meaning: "八", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Tám chuyện.",
              translation: "八卦 / 聊天 (用數字8形容閒聊)。",
              segments: [
                { text: "Tám", meaning: "八/閒聊", tail: " " },
                { text: "chuyện", meaning: "事", tail: "." },
              ],
            },
          ],
          usage_note: "動詞「Tám」是「閒聊/八卦」的意思。",
          image_file: "eight.png",
        },
        {
          id: "num-9",
          term_zh: "9",
          related_terms: [
            {
              term_target: "Chín",
              pronunciation: ["/cin/"],
              specific_note: "",
              segments: [{ text: "Chín", meaning: "九", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chín giờ tối.",
              translation: "晚上九點。",
              segments: [
                { text: "Chín", meaning: "九", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "tối", meaning: "晚", tail: "." },
              ],
            },
            {
              sentence: "Chín người.",
              translation: "九個人。",
              segments: [
                { text: "Chín", meaning: "九", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Cơm chín rồi.",
              translation: "飯熟了 (Chín 也是熟的意思)。",
              segments: [
                { text: "Cơm", meaning: "飯", tail: " " },
                { text: "chín", meaning: "熟", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "「Chín」同時是數字9和食物「熟」的意思。",
          image_file: "nine.png",
        },
        {
          id: "num-10",
          term_zh: "10",
          related_terms: [
            {
              term_target: "Mười",
              pronunciation: ["/mɯəj/"],
              specific_note: "正式",
              segments: [{ text: "Mười", meaning: "十", tail: "" }],
            },
            {
              term_target: "Chục",
              pronunciation: ["/cuk/"],
              specific_note: "口語(十個)",
              segments: [{ text: "Chục", meaning: "十/打", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mười nghìn.",
              translation: "一萬 (十千)。",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "nghìn", meaning: "千", tail: "." },
              ],
            },
            {
              sentence: "Đếm đến mười.",
              translation: "數到十。",
              segments: [
                { text: "Đếm", meaning: "數", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "mười", meaning: "十", tail: "." },
              ],
            },
            {
              sentence: "Mười điểm.",
              translation: "十分 (滿分)。",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "điểm", meaning: "分", tail: "." },
              ],
            },
          ],
          usage_note: "在市場買水果常說「Một chục」(十個/一打)。",
          image_file: "ten.png",
        },
        {
          id: "num-11",
          term_zh: "11",
          related_terms: [
            {
              term_target: "Mười một",
              pronunciation: ["/mɯəj mot/"],
              specific_note: "十+一",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "một", meaning: "一", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mười một giờ.",
              translation: "11點。",
              segments: [
                { text: "Mười một", meaning: "十一", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Tháng mười một.",
              translation: "11月。",
              segments: [
                { text: "Tháng", meaning: "月", tail: " " },
                { text: "mười một", meaning: "十一", tail: "." },
              ],
            },
            {
              sentence: "Có mười một cầu thủ.",
              translation: "有11名球員。",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "mười một", meaning: "十一", tail: " " },
                { text: "cầu thủ", meaning: "球員", tail: "." },
              ],
            },
          ],
          usage_note: "數字 1 (Một) 在十位數後發音不變。",
          image_file: "eleven.png",
        },
        {
          id: "num-12",
          term_zh: "12",
          related_terms: [
            {
              term_target: "Mười hai",
              pronunciation: ["/mɯəj haj/"],
              specific_note: "十+二",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "hai", meaning: "二", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mười hai tháng.",
              translation: "12個月。",
              segments: [
                { text: "Mười hai", meaning: "十二", tail: " " },
                { text: "tháng", meaning: "月", tail: "." },
              ],
            },
            {
              sentence: "12 giờ trưa.",
              translation: "中午12點。",
              segments: [
                { text: "12", meaning: "十二", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "trưa", meaning: "中午", tail: "." },
              ],
            },
            {
              sentence: "Một tá.",
              translation: "一打 (12個)。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "tá", meaning: "打(量詞)", tail: "." },
              ],
            },
          ],
          usage_note: "越南語的「一打」叫「Một tá」。",
          image_file: "twelve.png",
        },
        {
          id: "num-15",
          term_zh: "15",
          related_terms: [
            {
              term_target: "Mười lăm",
              pronunciation: ["/mɯəj lam/"],
              specific_note: "五變音為Lăm",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "lăm", meaning: "五(變音)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mười lăm phút.",
              translation: "15分鐘。",
              segments: [
                { text: "Mười lăm", meaning: "十五", tail: " " },
                { text: "phút", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "Em 15 tuổi.",
              translation: "我15歲。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "15", meaning: "十五", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "." },
              ],
            },
            {
              sentence: "Ngày rằm.",
              translation: "農曆十五 (望日)。",
              segments: [
                { text: "Ngày", meaning: "日", tail: " " },
                { text: "rằm", meaning: "十五(農曆)", tail: "." },
              ],
            },
          ],
          usage_note: "注意！數字 5 (Năm) 在十位數後要變成「Lăm」。",
          image_file: "fifteen.png",
        },
        {
          id: "num-20",
          term_zh: "20",
          related_terms: [
            {
              term_target: "Hai mươi",
              pronunciation: ["/haj mɯəj/"],
              specific_note: "二+十",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "mươi", meaning: "十(位數)", tail: "" },
              ],
            },
            {
              term_target: "Hai chục",
              pronunciation: ["/haj cuk/"],
              specific_note: "口語(二十)",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "chục", meaning: "十(單位)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hai mươi phút.",
              translation: "20分鐘。",
              segments: [
                { text: "Hai mươi", meaning: "二十", tail: " " },
                { text: "phút", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "Hai mươi ngàn.",
              translation: "兩萬 (二十千)。",
              segments: [
                { text: "Hai mươi", meaning: "二十", tail: " " },
                { text: "ngàn", meaning: "千", tail: "." },
              ],
            },
            {
              sentence: "Tôi 20 tuổi.",
              translation: "我20歲。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "20", meaning: "二十", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "." },
              ],
            },
          ],
          usage_note: "20~90 的「十」要讀成「Mươi」。",
          image_file: "twenty.png",
        },
        {
          id: "num-50",
          term_zh: "50",
          related_terms: [
            {
              term_target: "Năm mươi",
              pronunciation: ["/nam mɯəj/"],
              specific_note: "",
              segments: [
                { text: "Năm", meaning: "五", tail: " " },
                { text: "mươi", meaning: "十(位數)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Năm mươi phần trăm.",
              translation: "50% (百分之五十)。",
              segments: [
                { text: "Năm mươi", meaning: "五十", tail: " " },
                { text: "phần", meaning: "分", tail: " " },
                { text: "trăm", meaning: "百", tail: "." },
              ],
            },
            {
              sentence: "Năm mươi người.",
              translation: "50個人。",
              segments: [
                { text: "Năm mươi", meaning: "五十", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Năm chục ngàn.",
              translation: "五萬 (五十千) - 口語常用。",
              segments: [
                { text: "Năm chục", meaning: "五十", tail: " " },
                { text: "ngàn", meaning: "千", tail: "." },
              ],
            },
          ],
          usage_note: "市場買菜常說「Năm chục」(五十) 代替「Năm mươi」。",
          image_file: "fifty.png",
        },
        {
          id: "num-100",
          term_zh: "100",
          related_terms: [
            {
              term_target: "Một trăm",
              pronunciation: ["/mot tʃam/"],
              specific_note: "",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "trăm", meaning: "百", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Một trăm điểm.",
              translation: "一百分。",
              segments: [
                { text: "Một trăm", meaning: "一百", tail: " " },
                { text: "điểm", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "Một trăm phần trăm.",
              translation: "百分之百 (喝酒乾杯用語)。",
              segments: [
                { text: "Một trăm", meaning: "一百", tail: " " },
                { text: "phần", meaning: "分", tail: " " },
                { text: "trăm", meaning: "百", tail: "." },
              ],
            },
            {
              sentence: "Hơn một trăm.",
              translation: "超過一百個。",
              segments: [
                { text: "Hơn", meaning: "超過", tail: " " },
                { text: "một trăm", meaning: "一百", tail: "." },
              ],
            },
          ],
          usage_note: "喝酒時大喊「Một trăm phần trăm」就是要乾杯的意思。",
          image_file: "hundred.png",
        },
        {
          id: "num-1000",
          term_zh: "1000",
          related_terms: [
            {
              term_target: "Một nghìn",
              pronunciation: ["/mot ŋin/"],
              specific_note: "北部",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "nghìn", meaning: "千", tail: "" },
              ],
            },
            {
              term_target: "Một ngàn",
              pronunciation: ["/mot ŋan/"],
              specific_note: "南部",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "ngàn", meaning: "千", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Một nghìn năm.",
              translation: "一千年。",
              segments: [
                { text: "Một nghìn", meaning: "一千", tail: " " },
                { text: "năm", meaning: "年", tail: "." },
              ],
            },
            {
              sentence: "Một ngàn đồng.",
              translation: "一千越南盾 (很小的幣值)。",
              segments: [
                { text: "Một ngàn", meaning: "一千", tail: " " },
                { text: "đồng", meaning: "盾(貨幣單位)", tail: "." },
              ],
            },
            {
              sentence: "Nghìn lẻ một đêm.",
              translation: "一千零一夜。",
              segments: [
                { text: "Nghìn", meaning: "千", tail: " " },
                { text: "lẻ", meaning: "零/單數", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "đêm", meaning: "夜", tail: "." },
              ],
            },
          ],
          usage_note: "「千」在北部講 Nghìn，南部講 Ngàn。",
          image_file: "thousand.png",
        },
        {
          id: "num-10000",
          term_zh: "10000 (一萬)",
          related_terms: [
            {
              term_target: "Mười nghìn",
              pronunciation: ["/mɯəj ŋin/"],
              specific_note: "十千(一萬)",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "nghìn", meaning: "千", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mười nghìn đồng.",
              translation: "一萬越南盾 (約台幣13元)。",
              segments: [
                { text: "Mười nghìn", meaning: "一萬(十千)", tail: " " },
                { text: "đồng", meaning: "盾", tail: "." },
              ],
            },
            {
              sentence: "Một vạn.",
              translation: "一萬 (漢越詞，口語少用)。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "vạn", meaning: "萬", tail: "." },
              ],
            },
            {
              sentence: "Mười ngàn một cái.",
              translation: "一萬塊一個。",
              segments: [
                { text: "Mười ngàn", meaning: "一萬", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "cái", meaning: "個", tail: "." },
              ],
            },
          ],
          usage_note:
            "重要！越南語沒有常用的「萬」，一萬要說「十千」(Mười nghìn)。",
          image_file: "ten_thousand.png",
        },
      ],
    },
    {
      id: "grammar-vi",
      name: "基本句型",
      items: [
        {
          id: "g-01",
          term_zh: "我是 / 我覺得～",
          related_terms: [
            {
              term_target: "Tôi là... / Tôi...",
              pronunciation: ["/toj la/"],
              specific_note: "接名詞用 là，接形容詞不用",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是(接名詞)", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi vui.",
              translation: "我很快樂 (形容詞前不用'是')。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "vui", meaning: "快樂", tail: "." },
              ],
            },
            {
              sentence: "Tôi mệt.",
              translation: "我很累。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "mệt", meaning: "累", tail: "." },
              ],
            },
            {
              sentence: "Tôi là học sinh.",
              translation: "我是學生。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "học sinh", meaning: "學生", tail: "." },
              ],
            },
          ],
          usage_note: "注意：越南語說「我累」而不是「我是累」。",
          image_file: "i_am.png",
        },
        {
          id: "g-02",
          term_zh: "我的名字叫～",
          related_terms: [
            {
              term_target: "Tôi tên là...",
              pronunciation: ["/toj ten la/"],
              specific_note: "",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "là", meaning: "是", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi tên là Nam.",
              translation: "我的名字叫 Nam。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "tên", meaning: "名", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "Nam", meaning: "南(人名)", tail: "." },
              ],
            },
            {
              sentence: "Tên tôi là Linh.",
              translation: "我的名字是 Linh。",
              segments: [
                { text: "Tên", meaning: "名字", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "Linh", meaning: "靈(人名)", tail: "." },
              ],
            },
            {
              sentence: "Xin chào, tôi là Tom.",
              translation: "你好，我是 Tom。",
              segments: [
                { text: "Xin chào", meaning: "你好", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "Tom", meaning: "湯姆", tail: "." },
              ],
            },
          ],
          usage_note: "自我介紹。",
          image_file: "my_name_is.png",
        },
        {
          id: "g-03",
          term_zh: "我做～ (習慣/事實)",
          related_terms: [
            {
              term_target: "Tôi + 動詞",
              pronunciation: ["/toj/"],
              specific_note: "主詞 + 動詞",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "làm", meaning: "做", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi làm việc ở đây.",
              translation: "我在這裡工作。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "ở đây", meaning: "在這裡", tail: "." },
              ],
            },
            {
              sentence: "Tôi chơi bóng đá.",
              translation: "我踢足球。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chơi", meaning: "玩/打", tail: " " },
                { text: "bóng đá", meaning: "足球", tail: "." },
              ],
            },
            {
              sentence: "Tôi yêu âm nhạc.",
              translation: "我熱愛音樂。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "yêu", meaning: "愛", tail: " " },
                { text: "âm nhạc", meaning: "音樂", tail: "." },
              ],
            },
          ],
          usage_note: "陳述一般事實。",
          image_file: "i_do.png",
        },
        {
          id: "g-04",
          term_zh: "我正在做～",
          related_terms: [
            {
              term_target: "Tôi đang...",
              pronunciation: ["/toj daŋ/"],
              specific_note: "進行式",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đang ăn.",
              translation: "我正在吃。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ăn", meaning: "吃", tail: "." },
              ],
            },
            {
              sentence: "Tôi đang làm việc.",
              translation: "我正在工作。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "làm việc", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "Tôi đang đợi bạn.",
              translation: "我正在等你。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "đợi", meaning: "等", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
          ],
          usage_note: "加個「Đang」就是進行式。",
          image_file: "ing.png",
        },
        {
          id: "g-05",
          term_zh: "我會 / 我能夠～",
          related_terms: [
            {
              term_target: "Tôi biết / có thể",
              pronunciation: ["/biət/", "/kɔ tʰe/"],
              specific_note: "Biết(技能)/Có thể(能力)",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "會/知道", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi biết bơi.",
              translation: "我會游泳 (技能)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "會/懂", tail: " " },
                { text: "bơi", meaning: "游泳", tail: "." },
              ],
            },
            {
              sentence: "Tôi biết nói tiếng Anh.",
              translation: "我會說英文。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "會", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "tiếng Anh", meaning: "英文", tail: "." },
              ],
            },
            {
              sentence: "Tôi có thể giúp bạn.",
              translation: "我可以(有能力)幫你。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "có thể", meaning: "可以", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
          ],
          usage_note: "學會的技能用「Biết」，許可或可能性用「Có thể」。",
          image_file: "can.png",
        },
        {
          id: "g-06",
          term_zh: "我喜歡做～",
          related_terms: [
            {
              term_target: "Tôi thích...",
              pronunciation: ["/toj tʰik/"],
              specific_note: "",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi thích đọc sách.",
              translation: "我喜歡看書。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "đọc", meaning: "讀", tail: " " },
                { text: "sách", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích đi du lịch.",
              translation: "我喜歡旅行。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "du lịch", meaning: "旅遊", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích ăn phở.",
              translation: "我喜歡吃河粉。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "phở", meaning: "河粉", tail: "." },
              ],
            },
          ],
          usage_note: "表達興趣。",
          image_file: "like_ing.png",
        },
        {
          id: "g-07",
          term_zh: "我曾經是/在～ (過去)",
          related_terms: [
            {
              term_target: "Tôi đã...",
              pronunciation: ["/toj da/"],
              specific_note: "過去式標記",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已經(過去)", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hồi đó tôi là sinh viên.",
              translation: "那時候我是學生。",
              segments: [
                { text: "Hồi đó", meaning: "那時/回", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sinh viên", meaning: "學生", tail: "." },
              ],
            },
            {
              sentence: "Hôm qua tôi bận.",
              translation: "我昨天很忙 (有時間狀語就不一定要加'đã')。",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
              ],
            },
            {
              sentence: "Lúc đó tôi ở nhà.",
              translation: "那時我在家。",
              segments: [
                { text: "Lúc đó", meaning: "那時", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南語通常加時間詞 (如：昨天) 來表示過去，不一定要加 Đã。",
          image_file: "i_was.png",
        },
        {
          id: "g-08",
          term_zh: "我做了～ (過去動作)",
          related_terms: [
            {
              term_target: "Tôi đã + 動詞",
              pronunciation: ["/toj da/"],
              specific_note: "強調已發生",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "làm", meaning: "做", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đã đi bộ về nhà.",
              translation: "我(那時)走路回家。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已", tail: " " },
                { text: "đi bộ", meaning: "走路", tail: " " },
                { text: "về", meaning: "回", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Tôi đã xem phim đó.",
              translation: "我看過那部電影了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "phim", meaning: "電影", tail: " " },
                { text: "đó", meaning: "那", tail: "." },
              ],
            },
            {
              sentence: "Hôm qua tôi chơi bóng đá.",
              translation: "我昨天打籃球。",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "chơi", meaning: "玩", tail: " " },
                { text: "bóng đá", meaning: "足球", tail: "." },
              ],
            },
          ],
          usage_note: "過去發生的事。",
          image_file: "i_did.png",
        },
        {
          id: "g-09",
          term_zh: "我已經做完了～",
          related_terms: [
            {
              term_target: "Tôi... rồi",
              pronunciation: ["/toj ... zoj/"],
              specific_note: "完成式",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "...", meaning: "做某事", tail: " " },
                { text: "rồi", meaning: "了/已經", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi làm xong rồi.",
              translation: "我做完了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "xong", meaning: "完", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi mất chìa khóa rồi.",
              translation: "我弄丟鑰匙了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "mất", meaning: "弄丟", tail: " " },
                { text: "chìa khóa", meaning: "鑰匙", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi ăn rồi.",
              translation: "我吃飽了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "句尾加「rồi」表示動作已經完成。",
          image_file: "i_have_done.png",
        },
        {
          id: "g-10",
          term_zh: "我曾去過～",
          related_terms: [
            {
              term_target: "Đã từng đi",
              pronunciation: ["/da tɯŋ di/"],
              specific_note: "曾經去",
              segments: [
                { text: "Đã từng", meaning: "曾經", tail: " " },
                { text: "đi", meaning: "去", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đã từng đi Nhật.",
              translation: "我曾經去過日本。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã từng", meaning: "曾經", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "Nhật", meaning: "日本", tail: "." },
              ],
            },
            {
              sentence: "Tôi đi Đài Bắc 101 rồi.",
              translation: "我去過台北101了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "Đài Bắc 101", meaning: "台北101", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi đến đó 2 lần rồi.",
              translation: "我去過那裡兩次了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "đó", meaning: "那裡", tail: " " },
                { text: "2 lần", meaning: "兩次", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "經驗。",
          image_file: "have_been_to.png",
        },
        {
          id: "g-11",
          term_zh: "我打算 / 將會～",
          related_terms: [
            {
              term_target: "Tôi sẽ...",
              pronunciation: ["/toj sɛ/"],
              specific_note: "未來式",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "sẽ", meaning: "將會", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi sẽ đi.",
              translation: "我會去。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "sẽ", meaning: "將會", tail: " " },
                { text: "đi", meaning: "去", tail: "." },
              ],
            },
            {
              sentence: "Tôi sẽ gọi cho bạn.",
              translation: "我會打電話給你。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "sẽ", meaning: "將會", tail: " " },
                { text: "gọi", meaning: "打(電話)", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Tôi sẽ cố gắng.",
              translation: "我會盡力。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "sẽ", meaning: "將會", tail: " " },
                { text: "cố gắng", meaning: "努力/盡力", tail: "." },
              ],
            },
          ],
          usage_note: "加上「Sẽ」表示未來要發生的事。",
          image_file: "i_will.png",
        },
        {
          id: "g-12",
          term_zh: "你是～嗎？",
          related_terms: [
            {
              term_target: "Bạn có... không?",
              pronunciation: ["/ban kɔ ... xoŋ/"],
              specific_note: "疑問句",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有/是否", tail: "..." },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn sẵn sàng chưa?",
              translation: "你準備好了嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "sẵn sàng", meaning: "準備好", tail: " " },
                { text: "chưa", meaning: "尚未/嗎", tail: "?" },
              ],
            },
            {
              sentence: "Bạn có đói không?",
              translation: "你餓嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "đói", meaning: "餓", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Bạn là học sinh phải không?",
              translation: "你是學生對吧？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "học sinh", meaning: "學生", tail: " " },
                { text: "phải không", meaning: "對不對", tail: "?" },
              ],
            },
          ],
          usage_note:
            "問形容詞用「Có... không」，問是不是某身分用「Là... phải không」。",
          image_file: "are_you.png",
        },
        {
          id: "g-13",
          term_zh: "你有做～嗎？",
          related_terms: [
            {
              term_target: "Bạn có... không?",
              pronunciation: ["/ban kɔ ... xoŋ/"],
              specific_note: "問動作",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: "..." },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn có ăn cay không?",
              translation: "你吃辣嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "cay", meaning: "辣", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Bạn thích âm nhạc không?",
              translation: "你喜歡音樂嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "âm nhạc", meaning: "音樂", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Bạn có hiểu không?",
              translation: "你懂嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "hiểu", meaning: "懂", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "詢問習慣或意願。",
          image_file: "do_you.png",
        },
        {
          id: "g-14",
          term_zh: "你曾經～嗎？",
          related_terms: [
            {
              term_target: "... bao giờ chưa?",
              pronunciation: ["/baʊ zə cɯa/"],
              specific_note: "問經驗",
              segments: [
                { text: "...", meaning: "做某事", tail: " " },
                { text: "bao giờ", meaning: "何時/曾", tail: " " },
                { text: "chưa", meaning: "尚未/嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn đã thấy tuyết bao giờ chưa?",
              translation: "你曾看過雪嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đã thấy", meaning: "看過", tail: " " },
                { text: "tuyết", meaning: "雪", tail: " " },
                { text: "bao giờ chưa", meaning: "曾經嗎", tail: "?" },
              ],
            },
            {
              sentence: "Bạn đi Đài Loan bao giờ chưa?",
              translation: "你有去過台灣嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: " " },
                { text: "bao giờ chưa", meaning: "曾經嗎", tail: "?" },
              ],
            },
            {
              sentence: "Ăn đậu hũ thối bao giờ chưa?",
              translation: "吃過臭豆腐了嗎？",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "đậu hũ thối", meaning: "臭豆腐", tail: " " },
                { text: "bao giờ chưa", meaning: "曾經嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "「Bao giờ chưa」是詢問過往經驗的常用句型。",
          image_file: "have_you_ever.png",
        },
        {
          id: "g-15",
          term_zh: "你何時做～？",
          related_terms: [
            {
              term_target: "Khi nào...",
              pronunciation: ["/xi naʊ/"],
              specific_note: "問時間",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bạn...", meaning: "你...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Khi nào bạn ngủ?",
              translation: "你什麼時候睡覺？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "ngủ", meaning: "睡", tail: "?" },
              ],
            },
            {
              sentence: "Khi nào bắt đầu làm việc?",
              translation: "什麼時候開始工作？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bắt đầu", meaning: "開始", tail: " " },
                { text: "làm việc", meaning: "工作", tail: "?" },
              ],
            },
            {
              sentence: "Bạn tập thể dục khi nào?",
              translation: "你什麼時候運動？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "tập thể dục", meaning: "做運動", tail: " " },
                { text: "khi nào", meaning: "何時", tail: "?" },
              ],
            },
          ],
          usage_note: "「Khi nào」可以放在句首或句尾。",
          image_file: "when_do_you.png",
        },
        {
          id: "g-16",
          term_zh: "你何時去～？",
          related_terms: [
            {
              term_target: "Khi nào bạn đi...",
              pronunciation: ["/xi naʊ ban di/"],
              specific_note: "",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Khi nào bạn đi học?",
              translation: "你什麼時候去上學？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đi học", meaning: "上學", tail: "?" },
              ],
            },
            {
              sentence: "Khi nào bạn đi làm?",
              translation: "你什麼時候去上班？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đi làm", meaning: "上班", tail: "?" },
              ],
            },
            {
              sentence: "Khi nào bạn về nhà?",
              translation: "你什麼時候回家？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "về", meaning: "回", tail: " " },
                { text: "nhà", meaning: "家", tail: "?" },
              ],
            },
          ],
          usage_note: "問出發時間。",
          image_file: "when_go_to.png",
        },
        {
          id: "g-17",
          term_zh: "你在哪裡做～？",
          related_terms: [
            {
              term_target: "Bạn... ở đâu?",
              pronunciation: ["/ban ... ə dəw/"],
              specific_note: "地點",
              segments: [
                { text: "Bạn", meaning: "你", tail: "..." },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn sống ở đâu?",
              translation: "你住在哪裡？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "sống", meaning: "生活/住", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Bạn làm việc ở đâu?",
              translation: "你在哪裡工作？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Mua đồ ăn ở đâu?",
              translation: "在哪裡買吃的？",
              segments: [
                { text: "Mua", meaning: "買", tail: " " },
                { text: "đồ ăn", meaning: "食物", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "問地點通常把「Ở đâu」放在句尾。",
          image_file: "where_do_you.png",
        },
        {
          id: "g-18",
          term_zh: "你如何做～？",
          related_terms: [
            {
              term_target: "Làm sao để...",
              pronunciation: ["/lam saʊ de/"],
              specific_note: "問方法",
              segments: [
                { text: "Làm sao", meaning: "如何", tail: " " },
                { text: "để", meaning: "去/為了", tail: "..." },
              ],
            },
            {
              term_target: "Thế nào",
              pronunciation: ["/tʰe naʊ/"],
              specific_note: "問狀態",
              segments: [{ text: "Thế nào", meaning: "怎麼樣", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Món này nấu thế nào?",
              translation: "這道菜怎麼煮？",
              segments: [
                { text: "Món", meaning: "菜", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "nấu", meaning: "煮", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Đánh vần tên bạn thế nào?",
              translation: "你的名字怎麼拼？",
              segments: [
                { text: "Đánh vần", meaning: "拼音", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Bạn thấy thế nào?",
              translation: "你覺得如何？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thấy", meaning: "覺得/看", tail: " " },
                { text: "thế nào", meaning: "怎麼樣", tail: "?" },
              ],
            },
          ],
          usage_note: "問操作方法或狀態。",
          image_file: "how_do_you.png",
        },
        {
          id: "g-19",
          term_zh: "你怎麼去～？(交通)",
          related_terms: [
            {
              term_target: "Đi... bằng gì?",
              pronunciation: ["/di ... baŋ zi/"],
              specific_note: "問交通工具",
              segments: [
                { text: "Đi", meaning: "去", tail: "..." },
                { text: "bằng", meaning: "用/藉由", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn đi học bằng gì?",
              translation: "你怎麼去上學？(搭什麼車)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi học", meaning: "上學", tail: " " },
                { text: "bằng", meaning: "用", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Bạn đi sân bay bằng gì?",
              translation: "你怎麼去機場？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "sân bay", meaning: "機場", tail: " " },
                { text: "bằng", meaning: "用", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Đi làm bằng xe máy.",
              translation: "騎機車去上班。",
              segments: [
                { text: "Đi làm", meaning: "上班", tail: " " },
                { text: "bằng", meaning: "用", tail: " " },
                { text: "xe máy", meaning: "機車", tail: "." },
              ],
            },
          ],
          usage_note: "問交通方式專用句型。",
          image_file: "how_go_to.png",
        },
        {
          id: "g-20",
          term_zh: "我不是～ / 我不～",
          related_terms: [
            {
              term_target: "Tôi không...",
              pronunciation: ["/toj xoŋm/"],
              specific_note: "否定形容詞/狀態",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: "..." },
              ],
            },
            {
              term_target: "Tôi không phải là...",
              pronunciation: ["/toj xoŋm faj la/"],
              specific_note: "否定名詞(身分)",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không phải là", meaning: "不是", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi không mệt.",
              translation: "我不累。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "mệt", meaning: "累", tail: "." },
              ],
            },
            {
              sentence: "Tôi chưa sẵn sàng.",
              translation: "我還沒準備好 (還沒=chưa)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa", meaning: "尚未", tail: " " },
                { text: "sẵn sàng", meaning: "準備好", tail: "." },
              ],
            },
            {
              sentence: "Tôi không phải là bác sĩ.",
              translation: "我不是醫生。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không phải là", meaning: "不是", tail: " " },
                { text: "bác sĩ", meaning: "醫生", tail: "." },
              ],
            },
          ],
          usage_note:
            "否定形容詞直接加「Không」，否定身分用「Không phải là」。",
          image_file: "i_am_not.png",
        },
        {
          id: "g-21",
          term_zh: "我不做～",
          related_terms: [
            {
              term_target: "Tôi không...",
              pronunciation: ["/toj xoŋm/"],
              specific_note: "否定動作",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi không hút thuốc.",
              translation: "我不抽菸。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "hút thuốc", meaning: "吸菸", tail: "." },
              ],
            },
            {
              sentence: "Tôi không biết.",
              translation: "我不知道。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "biết", meaning: "知道", tail: "." },
              ],
            },
            {
              sentence: "Tôi không hiểu.",
              translation: "我不懂。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "hiểu", meaning: "了解", tail: "." },
              ],
            },
          ],
          usage_note: "直接在動詞前加「Không」即可。",
          image_file: "i_dont.png",
        },
        {
          id: "g-22",
          term_zh: "我不能 / 我不會～",
          related_terms: [
            {
              term_target: "Tôi không thể",
              pronunciation: ["/toj xoŋm tʰe/"],
              specific_note: "不能(能力/狀況)",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không thể", meaning: "不能", tail: "" },
              ],
            },
            {
              term_target: "Tôi không biết",
              pronunciation: ["/toj xoŋm biət/"],
              specific_note: "不會(技能)",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không biết", meaning: "不會/不懂", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi không biết bơi.",
              translation: "我不會游泳 (技能)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không biết", meaning: "不會", tail: " " },
                { text: "bơi", meaning: "游泳", tail: "." },
              ],
            },
            {
              sentence: "Tôi không nghe được.",
              translation: "我聽不到 (結果)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "được", meaning: "到/得", tail: "." },
              ],
            },
            {
              sentence: "Hôm nay tôi không đi được.",
              translation: "我今天不能去 (狀況不允許)。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "được", meaning: "得/成", tail: "." },
              ],
            },
          ],
          usage_note:
            "「不能做」常說「Không... được」(做不到)，「沒學過不會」說「Không biết」。",
          image_file: "i_cant.png",
        },
        {
          id: "g-23",
          term_zh: "我從未～",
          related_terms: [
            {
              term_target: "Tôi chưa bao giờ",
              pronunciation: ["/toj cɯa baʊ zə/"],
              specific_note: "",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa", meaning: "尚未", tail: " " },
                { text: "bao giờ", meaning: "何時/曾", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi chưa bao giờ ăn món này.",
              translation: "我從沒吃過這個。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa bao giờ", meaning: "從未", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "món này", meaning: "這道菜", tail: "." },
              ],
            },
            {
              sentence: "Tôi chưa từng đi đến đó.",
              translation: "我從沒去過那裡。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa từng", meaning: "未曾", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "đó", meaning: "那裡", tail: "." },
              ],
            },
            {
              sentence: "Tôi chưa thấy bao giờ.",
              translation: "我從沒看過。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa", meaning: "未", tail: " " },
                { text: "thấy", meaning: "看見", tail: " " },
                { text: "bao giờ", meaning: "曾", tail: "." },
              ],
            },
          ],
          usage_note: "表示沒有經驗。",
          image_file: "i_have_never.png",
        },
        {
          id: "g-24",
          term_zh: "我不必～",
          related_terms: [
            {
              term_target: "Tôi không cần",
              pronunciation: ["/toj xoŋm kən/"],
              specific_note: "不需要",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "cần", meaning: "需要", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi không cần đi.",
              translation: "我不必去。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không cần", meaning: "不需要", tail: " " },
                { text: "đi", meaning: "去", tail: "." },
              ],
            },
            {
              sentence: "Hôm nay tôi không phải làm việc.",
              translation: "今天我不必工作。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không phải", meaning: "不用/不是", tail: " " },
                { text: "làm việc", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "Không cần trả tiền.",
              translation: "不用付錢。",
              segments: [
                { text: "Không cần", meaning: "不需要", tail: " " },
                { text: "trả", meaning: "付", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
          ],
          usage_note: "「Không cần」是不需要，「Không phải」是不必/不是。",
          image_file: "i_dont_have_to.png",
        },
        {
          id: "g-25",
          term_zh: "如果～的話，就～",
          related_terms: [
            {
              term_target: "Nếu... thì...",
              pronunciation: ["/new ... tʰi/"],
              specific_note: "",
              segments: [
                { text: "Nếu", meaning: "如果", tail: "..." },
                { text: "thì", meaning: "則/就", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nếu thích thì lấy đi.",
              translation: "如果喜歡就拿去吧。",
              segments: [
                { text: "Nếu", meaning: "如果", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "thì", meaning: "就", tail: " " },
                { text: "lấy", meaning: "拿", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Nếu mưa thì ở nhà.",
              translation: "如果下雨就待在家。",
              segments: [
                { text: "Nếu", meaning: "如果", tail: " " },
                { text: "mưa", meaning: "雨", tail: " " },
                { text: "thì", meaning: "就", tail: " " },
                { text: "ở", meaning: "待在", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Nếu mệt thì nghỉ.",
              translation: "如果累了就休息。",
              segments: [
                { text: "Nếu", meaning: "如果", tail: " " },
                { text: "mệt", meaning: "累", tail: " " },
                { text: "thì", meaning: "就", tail: " " },
                { text: "nghỉ", meaning: "休息", tail: "." },
              ],
            },
          ],
          usage_note: "標準的假設句型。",
          image_file: "if.png",
        },
        {
          id: "g-26",
          term_zh: "當～時",
          related_terms: [
            {
              term_target: "Khi...",
              pronunciation: ["/xi/"],
              specific_note: "",
              segments: [{ text: "Khi", meaning: "當...時", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Khi tôi ăn, tôi vui.",
              translation: "當我吃的時候，我很開心。",
              segments: [
                { text: "Khi", meaning: "當", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "ăn", meaning: "吃", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "vui", meaning: "開心", tail: "." },
              ],
            },
            {
              sentence: "Khi bạn đến, gọi tôi.",
              translation: "當你到了，打給我。",
              segments: [
                { text: "Khi", meaning: "當", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đến", meaning: "到", tail: ", " },
                { text: "gọi", meaning: "叫/打電話", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Khi rảnh, tôi đọc sách.",
              translation: "當有空時，我會看書。",
              segments: [
                { text: "Khi", meaning: "當", tail: " " },
                { text: "rảnh", meaning: "閒暇", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đọc", meaning: "讀", tail: " " },
                { text: "sách", meaning: "書", tail: "." },
              ],
            },
          ],
          usage_note: "放在句首或句中皆可。",
          image_file: "when_condition.png",
        },
        {
          id: "g-27",
          term_zh: "請你～ / 你可以～嗎？",
          related_terms: [
            {
              term_target: "Bạn có thể... không?",
              pronunciation: ["/ban kɔ tʰe ... xoŋm/"],
              specific_note: "正式請求",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có thể", meaning: "可以", tail: "..." },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              term_target: "... đi / ... giúp",
              pronunciation: ["/di/ /zup/"],
              specific_note: "口語請求",
              segments: [{ text: "Giúp", meaning: "幫忙", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn giúp tôi được không?",
              translation: "你可以幫我嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "được", meaning: "行/可以", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Mở cửa giúp tôi.",
              translation: "幫我開個門。",
              segments: [
                { text: "Mở", meaning: "開", tail: " " },
                { text: "cửa", meaning: "門", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Đợi một chút được không?",
              translation: "可以等一下嗎？",
              segments: [
                { text: "Đợi", meaning: "等", tail: " " },
                { text: "một chút", meaning: "一下", tail: " " },
                { text: "được", meaning: "行", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "加上「Giúp」(幫) 或「Được không」(行嗎) 會更有禮貌。",
          image_file: "can_you.png",
        },
        {
          id: "g-28",
          term_zh: "我們做～吧！(提議)",
          related_terms: [
            {
              term_target: "Chúng ta hãy...",
              pronunciation: ["/cuŋm ta haj/"],
              specific_note: "正式",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "hãy", meaning: "請/讓", tail: "..." },
              ],
            },
            {
              term_target: "... đi",
              pronunciation: ["/di/"],
              specific_note: "口語(吧)",
              segments: [{ text: "Đi", meaning: "去/吧", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi thôi.",
              translation: "走吧。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "thôi", meaning: "罷了/吧", tail: "." },
              ],
            },
            {
              sentence: "Ăn đi.",
              translation: "吃吧 / 我們吃吧。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Nghỉ giải lao thôi.",
              translation: "休息一下吧。",
              segments: [
                { text: "Nghỉ", meaning: "休息", tail: " " },
                { text: "giải lao", meaning: "解勞(休息)", tail: " " },
                { text: "thôi", meaning: "吧", tail: "." },
              ],
            },
          ],
          usage_note: "口語中最常用「動詞 + đi」或「動詞 + thôi」。",
          image_file: "lets.png",
        },
        {
          id: "g-29",
          term_zh: "我認為～",
          related_terms: [
            {
              term_target: "Tôi nghĩ...",
              pronunciation: ["/toj ŋi/"],
              specific_note: "",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nghĩ", meaning: "想/認為", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi nghĩ nó tốt.",
              translation: "我認為它很好。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nghĩ", meaning: "認為", tail: " " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Tôi nghĩ bạn đúng.",
              translation: "我覺得你是對的。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đúng", meaning: "對", tail: "." },
              ],
            },
            {
              sentence: "Tôi cũng nghĩ vậy.",
              translation: "我也這麼覺得。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "vậy", meaning: "那樣", tail: "." },
              ],
            },
          ],
          usage_note: "表達個人觀點。",
          image_file: "i_think.png",
        },
        {
          id: "g-30",
          term_zh: "我想要～",
          related_terms: [
            {
              term_target: "Tôi muốn...",
              pronunciation: ["/toj muən/"],
              specific_note: "想要",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想/要", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn đi.",
              translation: "我想去。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "đi", meaning: "去", tail: "." },
              ],
            },
            {
              sentence: "Tôi muốn mua cái này.",
              translation: "我想買這個。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "Tôi muốn xem phim.",
              translation: "我想看電影。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "phim", meaning: "電影", tail: "." },
              ],
            },
          ],
          usage_note: "表達意願。",
          image_file: "want_to.png",
        },
        {
          id: "g-31",
          term_zh: "我必須～",
          related_terms: [
            {
              term_target: "Tôi phải...",
              pronunciation: ["/toj faj/"],
              specific_note: "必須/得",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "phải", meaning: "必須", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi phải làm việc.",
              translation: "我必須工作。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "phải", meaning: "得", tail: " " },
                { text: "làm việc", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "Tôi phải đi bây giờ.",
              translation: "我現在得走了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "phải", meaning: "得", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "bây giờ", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Tôi phải học.",
              translation: "我得唸書。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "phải", meaning: "必須", tail: " " },
                { text: "học", meaning: "學", tail: "." },
              ],
            },
          ],
          usage_note: "表示義務或責任。",
          image_file: "i_have_to.png",
        },
        {
          id: "g-32",
          term_zh: "做某事是～的",
          related_terms: [
            {
              term_target: "... thì ...",
              pronunciation: ["/tʰi/"],
              specific_note: "結構:動詞+則+形容詞",
              segments: [
                { text: "Làm...", meaning: "做...", tail: " " },
                { text: "thì", meaning: "就/是", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ăn thì tốt.",
              translation: "吃東西是好的 (能吃是福)。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "thì", meaning: "則/是", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Rất vui được gặp bạn.",
              translation: "很高興認識你 (認識你是高興的)。",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "高興", tail: " " },
                { text: "được", meaning: "被/得到", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Học rất quan trọng.",
              translation: "學習很重要。",
              segments: [
                { text: "Học", meaning: "學習", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "quan trọng", meaning: "重要", tail: "." },
              ],
            },
          ],
          usage_note: "越南語直接把動詞當主詞用，不需要像英文加 It is。",
          image_file: "it_is_to.png",
        },
        {
          id: "g-33",
          term_zh: "你可以幫我...嗎？",
          related_terms: [
            {
              term_target: "Bạn giúp tôi... được không?",
              pronunciation: ["/ban zup toj ... dɯək xoŋm/"],
              specific_note: "",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: "..." },
                { text: "được không", meaning: "行嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn giúp tôi dọn dẹp được không?",
              translation: "你可以幫我打掃嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "dọn dẹp", meaning: "整理", tail: " " },
                { text: "được không", meaning: "行嗎", tail: "?" },
              ],
            },
            {
              sentence: "Bạn giúp tôi việc này được không?",
              translation: "你可以幫我這件事嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "việc này", meaning: "這件事", tail: " " },
                { text: "được không", meaning: "行嗎", tail: "?" },
              ],
            },
            {
              sentence: "Bạn giúp tôi tìm nó được không?",
              translation: "你可以幫我找它嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "tìm", meaning: "找", tail: " " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "được không", meaning: "行嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "請求協助的標準句型。",
          image_file: "can_you_help.png",
        },
        {
          id: "g-34",
          term_zh: "我可以...嗎？(許可)",
          related_terms: [
            {
              term_target: "Tôi... được không?",
              pronunciation: ["/toj ... dɯək xoŋm/"],
              specific_note: "",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "...", meaning: "做動作", tail: " " },
                { text: "được không", meaning: "行嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đi được không?",
              translation: "我可以走嗎？",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "được không", meaning: "可以嗎", tail: "?" },
              ],
            },
            {
              sentence: "Cho tôi xin chút nước được không?",
              translation: "可以給我一點水嗎？",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xin", meaning: "請求", tail: " " },
                { text: "chút", meaning: "點", tail: " " },
                { text: "nước", meaning: "水", tail: " " },
                { text: "được không", meaning: "行嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi ngồi đây được không?",
              translation: "我可以坐這裡嗎？",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ngồi", meaning: "坐", tail: " " },
                { text: "đây", meaning: "這", tail: " " },
                { text: "được không", meaning: "行嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "徵求同意。",
          image_file: "can_i.png",
        },
        {
          id: "g-35",
          term_zh: "我不喜歡",
          related_terms: [
            {
              term_target: "Tôi không thích",
              pronunciation: ["/toj xoŋm tʰik/"],
              specific_note: "",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi không thích nó.",
              translation: "我不喜歡它。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không thích", meaning: "不喜歡", tail: " " },
                { text: "nó", meaning: "它", tail: "." },
              ],
            },
            {
              sentence: "Tôi không thích sầu riêng.",
              translation: "我不喜歡榴槤。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không thích", meaning: "不喜歡", tail: " " },
                { text: "sầu riêng", meaning: "榴槤", tail: "." },
              ],
            },
            {
              sentence: "Tôi không thích chờ đợi.",
              translation: "我不喜歡等待。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không thích", meaning: "不喜歡", tail: " " },
                { text: "chờ đợi", meaning: "等待", tail: "." },
              ],
            },
          ],
          usage_note: "表達反感。",
          image_file: "i_dont_like.png",
        },
        {
          id: "g-36",
          term_zh: "我比較喜歡...",
          related_terms: [
            {
              term_target: "Tôi thích ... hơn",
              pronunciation: ["/toj tʰik ... hən/"],
              specific_note: "偏好",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "..." },
                { text: "hơn", meaning: "更/超過", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi thích trà hơn.",
              translation: "我比較喜歡茶。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "trà", meaning: "茶", tail: " " },
                { text: "hơn", meaning: "更", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích mèo hơn.",
              translation: "我比較喜歡貓。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "mèo", meaning: "貓", tail: " " },
                { text: "hơn", meaning: "更", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích ở nhà hơn.",
              translation: "我比較喜歡待在家。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "ở nhà", meaning: "在家", tail: " " },
                { text: "hơn", meaning: "更", tail: "." },
              ],
            },
          ],
          usage_note: "句尾加「hơn」表示「更...」。",
          image_file: "prefer.png",
        },
        {
          id: "g-37",
          term_zh: "A 比 B 更...",
          related_terms: [
            {
              term_target: "A ... hơn B",
              pronunciation: ["... hən ..."],
              specific_note: "比較級",
              segments: [
                { text: "A", meaning: "A", tail: " " },
                { text: "hơn", meaning: "更/勝過", tail: " " },
                { text: "B", meaning: "B", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cái này đắt hơn cái kia.",
              translation: "這個比那個貴。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "đắt", meaning: "貴", tail: " " },
                { text: "hơn", meaning: "比", tail: " " },
                { text: "cái kia", meaning: "那個", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy nổi tiếng hơn cô ấy.",
              translation: "他比她更有名。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "nổi tiếng", meaning: "有名", tail: " " },
                { text: "hơn", meaning: "比", tail: " " },
                { text: "cô ấy", meaning: "她", tail: "." },
              ],
            },
            {
              sentence: "Vấn đề này khó hơn.",
              translation: "這個問題更難 (省略了'比...')。",
              segments: [
                { text: "Vấn đề", meaning: "問題", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "khó", meaning: "難", tail: " " },
                { text: "hơn", meaning: "更", tail: "." },
              ],
            },
          ],
          usage_note: "「Hơn」是比較的關鍵字。",
          image_file: "more_than.png",
        },
        {
          id: "g-38",
          term_zh: "有 / 存在",
          related_terms: [
            {
              term_target: "Có",
              pronunciation: ["/kɔ/"],
              specific_note: "有(存在)",
              segments: [{ text: "Có", meaning: "有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Có một con chó.",
              translation: "(那裡)有一隻狗。",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "con", meaning: "隻", tail: " " },
                { text: "chó", meaning: "狗", tail: "." },
              ],
            },
            {
              sentence: "Có nhiều người.",
              translation: "有很多人。",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Có một vấn đề.",
              translation: "有一個問題。",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "vấn đề", meaning: "問題", tail: "." },
              ],
            },
          ],
          usage_note: "無論是「我擁有」還是「那裡存在」，越南語都用「Có」。",
          image_file: "there_is.png",
        },
      ],
    },
  ],
};
