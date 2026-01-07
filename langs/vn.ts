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
      id: "greetings",
      name: "常用句 (越南語)",
      items: [
        {
          id: "greet-001",
          term_zh: "是的 / 對",
          related_terms: [
            {
              term_target: "Vâng",
              pronunciation: ["/vəŋ/"],
              specific_note: "肯定(北部/標準)",
              segments: [{ text: "Vâng", meaning: "是", tail: "" }],
            },
            {
              term_target: "Dạ",
              pronunciation: ["/za/"],
              specific_note: "肯定(南部/敬語)",
              segments: [{ text: "Dạ", meaning: "是", tail: "" }],
            },
            {
              term_target: "Đúng",
              pronunciation: ["/ɗuŋ͡m/"],
              specific_note: "正確",
              segments: [{ text: "Đúng", meaning: "對/正確", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dạ, đúng rồi.",
              translation: "是的，沒錯。",
              segments: [
                { text: "Dạ", meaning: "是 (語氣詞)", tail: ", " },
                { text: "đúng", meaning: "對/正確", tail: " " },
                { text: "rồi", meaning: "了 (表示狀態)", tail: "." },
              ],
            },
            {
              sentence: "Dạ có.",
              translation: "有的 / 是的 (回答有或沒有時)。",
              segments: [
                { text: "Dạ", meaning: "敬語助詞", tail: " " },
                { text: "có", meaning: "有", tail: "." },
              ],
            },
            {
              sentence: "Vâng, tôi hiểu.",
              translation: "是的，我明白了。",
              segments: [
                { text: "Vâng", meaning: "是", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "hiểu", meaning: "明白", tail: "." },
              ],
            },
          ],
          usage_note: "「Dạ」在句首非常常用，表示禮貌與尊敬。",
          image_file: "yes.png",
        },
        {
          id: "greet-002",
          term_zh: "不是 / 沒有",
          related_terms: [
            {
              term_target: "Không",
              pronunciation: ["/xəwŋ͡m/"],
              specific_note: "否定",
              segments: [{ text: "Không", meaning: "不/空/無", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dạ không, cảm ơn.",
              translation: "不了，謝謝 (禮貌拒絕)。",
              segments: [
                { text: "Dạ", meaning: "敬語", tail: " " },
                { text: "không", meaning: "不", tail: ", " },
                { text: "cảm ơn", meaning: "感謝", tail: "." },
              ],
            },
            {
              sentence: "Không phải đâu.",
              translation: "不是那樣的 / 誤會了。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "phải", meaning: "是/對", tail: " " },
                { text: "đâu", meaning: "哪裡 (加強語氣)", tail: "." },
              ],
            },
            {
              sentence: "Không sao.",
              translation: "沒關係 / 沒事。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "sao", meaning: "怎樣/事情", tail: "." },
              ],
            },
          ],
          usage_note: "搖頭並微笑說 Không。",
          image_file: "no.png",
        },
        {
          id: "greet-003",
          term_zh: "你好",
          related_terms: [
            {
              term_target: "Xin chào",
              pronunciation: ["/sin t͡ʃaːw/"],
              specific_note: "通用",
              segments: [
                { text: "Xin", meaning: "請/求", tail: " " },
                { text: "chào", meaning: "打招呼", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Xin chào!",
              translation: "你好！(最標準)。",
              segments: [
                { text: "Xin", meaning: "請", tail: " " },
                { text: "chào", meaning: "招呼", tail: "!" },
              ],
            },
            {
              sentence: "Em chào anh.",
              translation: "哥哥好 (對年長男性的稱呼)。",
              segments: [
                { text: "Em", meaning: "弟/妹 (自稱)", tail: " " },
                { text: "chào", meaning: "招呼", tail: " " },
                { text: "anh", meaning: "哥 (對方)", tail: "." },
              ],
            },
            {
              sentence: "Chào chị, khỏe không?",
              translation: "姊姊好，你好嗎？",
              segments: [
                { text: "Chào", meaning: "招呼", tail: " " },
                { text: "chị", meaning: "姊 (對方)", tail: ", " },
                { text: "khỏe", meaning: "健康", tail: " " },
                { text: "không", meaning: "嗎 (疑問詞)", tail: "?" },
              ],
            },
          ],
          usage_note: "對長輩要說 Chào + 稱謂 (如 Chào anh/chị)。",
          image_file: "hello.png",
        },
        {
          id: "greet-004",
          term_zh: "謝謝你",
          related_terms: [
            {
              term_target: "Cảm ơn",
              pronunciation: ["/kaːm ən/"],
              specific_note: "漢語:感恩",
              segments: [
                { text: "Cảm", meaning: "感", tail: " " },
                { text: "ơn", meaning: "恩", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cảm ơn nhiều.",
              translation: "非常感謝。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "nhiều", meaning: "多", tail: "." },
              ],
            },
            {
              sentence: "Cảm ơn anh đã giúp.",
              translation: "謝謝大哥幫忙。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "anh", meaning: "哥", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "giúp", meaning: "幫忙", tail: "." },
              ],
            },
            {
              sentence: "Không có chi.",
              translation: "不客氣 (回應謝謝)。",
              segments: [
                { text: "Không", meaning: "沒有", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "chi", meaning: "什麼", tail: "." },
              ],
            },
          ],
          usage_note: "發音類似台語的「感恩」。",
          image_file: "thank_you.png",
        },
        {
          id: "greet-005",
          term_zh: "對不起",
          related_terms: [
            {
              term_target: "Xin lỗi",
              pronunciation: ["/sin loj/"],
              specific_note: "道歉",
              segments: [
                { text: "Xin", meaning: "請", tail: " " },
                { text: "lỗi", meaning: "錯/過失", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, tôi đến muộn.",
              translation: "抱歉，我遲到了。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đến", meaning: "來/到", tail: " " },
                { text: "muộn", meaning: "晚", tail: "." },
              ],
            },
            {
              sentence: "Thành thật xin lỗi.",
              translation: "誠摯地道歉。",
              segments: [
                { text: "Thành thật", meaning: "誠實/誠懇", tail: " " },
                { text: "xin lỗi", meaning: "道歉", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi nhé!",
              translation: "抱歉喔！(平輩/朋友間)。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: " " },
                { text: "nhé", meaning: "喔 (語助詞)", tail: "!" },
              ],
            },
          ],
          usage_note: "Lỗi 的發音有跌聲，要壓低喉嚨。",
          image_file: "sorry.png",
        },
        {
          id: "greet-006",
          term_zh: "不好意思 (請問)",
          related_terms: [
            {
              term_target: "Cho hỏi...",
              pronunciation: ["/tʃɔ hɔj/"],
              specific_note: "發問前",
              segments: [
                { text: "Cho", meaning: "給/讓", tail: " " },
                { text: "hỏi", meaning: "問", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, cho tôi hỏi.",
              translation: "不好意思，請問一下。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "cho", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "hỏi", meaning: "問", tail: "." },
              ],
            },
            {
              sentence: "Em ơi! Cho anh hỏi.",
              translation: "服務生(弟弟/妹妹)！請問一下。",
              segments: [
                { text: "Em", meaning: "弟/妹", tail: " " },
                { text: "ơi", meaning: "喂 (呼喚詞)", tail: "! " },
                { text: "Cho", meaning: "讓", tail: " " },
                { text: "anh", meaning: "我(哥)", tail: " " },
                { text: "hỏi", meaning: "問", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi, cho tôi đi qua.",
              translation: "不好意思，借過一下。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "cho", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "qua", meaning: "過", tail: "." },
              ],
            },
            {
              sentence: "Phiền bạn một chút.",
              translation: "麻煩你一下。",
              segments: [
                { text: "Phiền", meaning: "麻煩/煩", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "một chút", meaning: "一點點", tail: "." },
              ],
            },
          ],
          usage_note: "餐廳叫人常用 Em ơi (對年輕店員)。",
          image_file: "excuse_me.png",
        },
        {
          id: "greet-007",
          term_zh: "我不懂",
          related_terms: [
            {
              term_target: "Tôi không hiểu",
              pronunciation: ["/toj xəwŋ͡m hiəw/"],
              specific_note: "",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "hiểu", meaning: "懂/理解", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, tôi không hiểu.",
              translation: "抱歉，我不懂。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "hiểu", meaning: "懂", tail: "." },
              ],
            },
            {
              sentence: "Tôi không biết tiếng Việt.",
              translation: "我不會(懂)越南語。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "biết", meaning: "知道/會", tail: " " },
                { text: "tiếng", meaning: "語言", tail: " " },
                { text: "Việt", meaning: "越", tail: "." },
              ],
            },
            {
              sentence: "Bạn nói gì? Tôi không hiểu.",
              translation: "你說什麼？我不懂。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "gì", meaning: "什麼", tail: "? " },
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "hiểu", meaning: "懂", tail: "." },
              ],
            },
          ],
          usage_note: "聽不懂時，可以指著耳朵搖手。",
          image_file: "dont_understand.png",
        },
        {
          id: "greet-008",
          term_zh: "廁所在哪裡？",
          related_terms: [
            {
              term_target: "Nhà vệ sinh ở đâu?",
              pronunciation: ["/ɲaː ve siŋ ə ɗəw/"],
              specific_note: "關鍵句",
              segments: [
                { text: "Nhà", meaning: "房/屋", tail: " " },
                { text: "vệ sinh", meaning: "衛生", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho hỏi, nhà vệ sinh ở đâu?",
              translation: "請問，洗手間在哪裡？",
              segments: [
                { text: "Cho hỏi", meaning: "請問", tail: ", " },
                { text: "nhà vệ sinh", meaning: "洗手間", tail: " " },
                { text: "ở đâu", meaning: "在哪", tail: "?" },
              ],
            },
            {
              sentence: "Toilet ở đâu?",
              translation: "廁所在哪？(講 Toilet 也通)。",
              segments: [
                { text: "Toilet", meaning: "廁所(英)", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
            {
              sentence: "Ở đây có nhà vệ sinh không?",
              translation: "這裡有洗手間嗎？",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "Nhà vệ sinh (家衛生) = 廁所。",
          image_file: "where_bathroom.png",
        },
        {
          id: "greet-010",
          term_zh: "多少錢？",
          related_terms: [
            {
              term_target: "Bao nhiêu tiền?",
              pronunciation: ["/baːw ɲiəw tiən/"],
              specific_note: "購物",
              segments: [
                { text: "Bao nhiêu", meaning: "多少", tail: " " },
                { text: "tiền", meaning: "錢", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cái này bao nhiêu tiền?",
              translation: "這個多少錢？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tiền", meaning: "錢", tail: "?" },
              ],
            },
            {
              sentence: "Bao nhiêu?",
              translation: "多少？(簡短問法)。",
              segments: [{ text: "Bao nhiêu", meaning: "多少", tail: "?" }],
            },
            {
              sentence: "Có giảm giá không?",
              translation: "有打折嗎？(殺價必備)。",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "giảm", meaning: "減", tail: " " },
                { text: "giá", meaning: "價", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "市場買東西記得一定要問價錢。",
          image_file: "how_much.png",
        },
        {
          id: "greet-011",
          term_zh: "我想要這個",
          related_terms: [
            {
              term_target: "Tôi lấy cái này",
              pronunciation: ["/toj ləj kaj naj/"],
              specific_note: "購買確認",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "lấy", meaning: "拿/取/買", tail: " " },
                { text: "cái này", meaning: "這個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi lấy cái này.",
              translation: "我要買這個。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "lấy", meaning: "拿", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi xem cái này.",
              translation: "給我看看這個。",
              segments: [
                { text: "Cho", meaning: "給/讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "Tôi muốn mua cái này.",
              translation: "我想買這個。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想/要", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
          ],
          usage_note: "指著商品說這句即可。",
          image_file: "i_want_this.png",
        },
        {
          id: "greet-012",
          term_zh: "請給我...",
          related_terms: [
            {
              term_target: "Cho tôi...",
              pronunciation: ["/tʃɔ toj/"],
              specific_note: "點餐/索取",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi một ly nước.",
              translation: "請給我一杯水。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "ly", meaning: "杯", tail: " " },
                { text: "nước", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "Em ơi, cho anh tính tiền.",
              translation: "服務生，買單(給我算錢)。",
              segments: [
                { text: "Em", meaning: "弟/妹", tail: " " },
                { text: "ơi", meaning: "喂", tail: ", " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "anh", meaning: "哥(我)", tail: " " },
                { text: "tính", meaning: "算", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi cái menu.",
              translation: "請給我菜單。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "cái", meaning: "個(量詞)", tail: " " },
                { text: "menu", meaning: "菜單", tail: "." },
              ],
            },
          ],
          usage_note: "Cho + 人 + 東西 = 給某人某物。",
          image_file: "please_give_me.png",
        },
        {
          id: "greet-013",
          term_zh: "這是什麼？",
          related_terms: [
            {
              term_target: "Cái gì đây?",
              pronunciation: ["/kaj zi ɗəj/"],
              specific_note: "",
              segments: [
                { text: "Cái", meaning: "個(東西)", tail: " " },
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
              sentence: "Cái này tiếng Việt gọi là gì?",
              translation: "這個越南語叫什麼？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: " " },
                { text: "gọi", meaning: "叫", tail: " " },
                { text: "là", meaning: "做/是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Cái này ăn được không?",
              translation: "這個可以吃嗎？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "được", meaning: "行/可以", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "看到新奇的食物或水果時可以用。",
          image_file: "what_is_this.png",
        },
        {
          id: "greet-014",
          term_zh: "請幫我",
          related_terms: [
            {
              term_target: "Giúp tôi với",
              pronunciation: ["/zup toj vəj/"],
              specific_note: "求助",
              segments: [
                { text: "Giúp", meaning: "幫忙", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "với", meaning: "跟/吧(語助詞)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Làm ơn giúp tôi.",
              translation: "拜託幫幫我。",
              segments: [
                { text: "Làm ơn", meaning: "做恩(拜託)", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
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
              sentence: "Giúp em một tay.",
              translation: "幫我(自稱晚輩)一把。",
              segments: [
                { text: "Giúp", meaning: "幫", tail: " " },
                { text: "em", meaning: "我(弟妹)", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "tay", meaning: "手", tail: "." },
              ],
            },
          ],
          usage_note: "遇到困難或緊急狀況時使用。",
          image_file: "help_me.png",
        },
        {
          id: "greet-015",
          term_zh: "你可以再說一次嗎？",
          related_terms: [
            {
              term_target: "Nhắc lại được không?",
              pronunciation: ["/ɲak laj ɗəək xəwŋ͡m/"],
              specific_note: "",
              segments: [
                { text: "Nhắc", meaning: "提/講", tail: " " },
                { text: "lại", meaning: "重來/再", tail: " " },
                { text: "được", meaning: "可以", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, nói lại đi.",
              translation: "抱歉，請再說一次。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "đi", meaning: "吧(語助詞)", tail: "." },
              ],
            },
            {
              sentence: "Bạn nói lại được không?",
              translation: "你可以再說一遍嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "được", meaning: "可以", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Hả? Gì cơ?",
              translation: "蛤？什麼？(非常口語，對平輩用)。",
              segments: [
                { text: "Hả", meaning: "蛤", tail: "? " },
                { text: "Gì", meaning: "什麼", tail: " " },
                { text: "cơ", meaning: "啊(語氣詞)", tail: "?" },
              ],
            },
          ],
          usage_note: "沒聽清楚時很有用。",
          image_file: "say_again.png",
        },
        {
          id: "greet-016",
          term_zh: "你可以講慢一點嗎？",
          related_terms: [
            {
              term_target: "Nói chậm lại",
              pronunciation: ["/nɔj tʃəm laj/"],
              specific_note: "",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "lại", meaning: "下來", tail: "" },
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
              sentence: "Nói từ từ thôi.",
              translation: "慢慢說就好。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "từ từ", meaning: "慢慢地", tail: " " },
                { text: "thôi", meaning: "罷了/就好", tail: "." },
              ],
            },
            {
              sentence: "Tôi nghe không kịp.",
              translation: "我來不及聽 (聽不懂)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "kịp", meaning: "及時/趕上", tail: "." },
              ],
            },
          ],
          usage_note: "Chậm (慢) 是關鍵字。",
          image_file: "speak_slowly.png",
        },
        {
          id: "greet-017",
          term_zh: "原來如此",
          related_terms: [
            {
              term_target: "Ra là vậy",
              pronunciation: ["/za la vəj/"],
              specific_note: "理解",
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
              sentence: "Thì ra là thế.",
              translation: "原來是這樣啊。",
              segments: [
                { text: "Thì ra", meaning: "原來/發現", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "thế", meaning: "那樣", tail: "." },
              ],
            },
            {
              sentence: "Hiểu rồi, cảm ơn.",
              translation: "懂了，謝謝。",
              segments: [
                { text: "Hiểu", meaning: "懂", tail: " " },
                { text: "rồi", meaning: "了", tail: ", " },
                { text: "cảm ơn", meaning: "謝謝", tail: "." },
              ],
            },
          ],
          usage_note: "表示恍然大悟。",
          image_file: "i_see.png",
        },
        {
          id: "greet-018",
          term_zh: "早安",
          related_terms: [
            {
              term_target: "Chào buổi sáng",
              pronunciation: ["/tʃaːw buəj saːŋ/"],
              specific_note: "",
              segments: [
                { text: "Chào", meaning: "招呼", tail: " " },
                { text: "buổi", meaning: "時段", tail: " " },
                { text: "sáng", meaning: "早/亮", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào buổi sáng!",
              translation: "早安！",
              segments: [
                { text: "Chào", meaning: "招呼", tail: " " },
                { text: "buổi sáng", meaning: "早上", tail: "." },
              ],
            },
            {
              sentence: "Chào cả nhà.",
              translation: "大家好 (全家/全群組)。",
              segments: [
                { text: "Chào", meaning: "招呼", tail: " " },
                { text: "cả", meaning: "所有/全", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Dậy chưa?",
              translation: "起床沒？(熟人問早)。",
              segments: [
                { text: "Dậy", meaning: "起床/起來", tail: " " },
                { text: "chưa", meaning: "還沒/了嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "越南人日常常只說 Xin chào 或 Chào + 名字。",
          image_file: "good_morning.png",
        },
        {
          id: "greet-019",
          term_zh: "晚上好 (晚安)",
          related_terms: [
            {
              term_target: "Chào buổi tối",
              pronunciation: ["/tʃaːw buəj toj/"],
              specific_note: "見面",
              segments: [
                { text: "Chào", meaning: "招呼", tail: " " },
                { text: "buổi", meaning: "時段", tail: " " },
                { text: "tối", meaning: "晚/暗", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào buổi tối vui vẻ.",
              translation: "祝你有個愉快的夜晚。",
              segments: [
                { text: "Chào", meaning: "招呼", tail: " " },
                { text: "buổi tối", meaning: "晚上", tail: " " },
                { text: "vui vẻ", meaning: "開心", tail: "." },
              ],
            },
            {
              sentence: "Ăn tối chưa?",
              translation: "吃晚餐了嗎？(晚上常見問候)。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "tối", meaning: "晚(餐)", tail: " " },
                { text: "chưa", meaning: "還沒/了嗎", tail: "?" },
              ],
            },
            {
              sentence: "Chúc ngủ ngon.",
              translation: "祝你睡得好 (這是睡前道別的晚安)。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "ngủ", meaning: "睡", tail: " " },
                { text: "ngon", meaning: "香/好吃", tail: "." },
              ],
            },
          ],
          usage_note: "見面說 Chào buổi tối，睡覺說 Chúc ngủ ngon。",
          image_file: "good_evening.png",
        },
        {
          id: "greet-020",
          term_zh: "再見",
          related_terms: [
            {
              term_target: "Tạm biệt",
              pronunciation: ["/tam biət/"],
              specific_note: "暫別",
              segments: [
                { text: "Tạm", meaning: "暫時", tail: " " },
                { text: "biệt", meaning: "別離", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tạm biệt nhé.",
              translation: "再見囉。",
              segments: [
                { text: "Tạm biệt", meaning: "再見", tail: " " },
                { text: "nhé", meaning: "喔(語氣詞)", tail: "." },
              ],
            },
            {
              sentence: "Hẹn gặp lại.",
              translation: "後會有期 / 下次見。",
              segments: [
                { text: "Hẹn", meaning: "約定", tail: " " },
                { text: "gặp", meaning: "見面", tail: " " },
                { text: "lại", meaning: "再", tail: "." },
              ],
            },
            {
              sentence: "Bye bye!",
              translation: "掰掰！(年輕人常用)。",
              segments: [{ text: "Bye bye", meaning: "掰掰", tail: "!" }],
            },
          ],
          usage_note: "口語也常直接說 Bye。",
          image_file: "goodbye.png",
        },
        {
          id: "greet-021",
          term_zh: "你好嗎",
          related_terms: [
            {
              term_target: "Khỏe không?",
              pronunciation: ["/xwɛ xəwŋ͡m/"],
              specific_note: "問健康",
              segments: [
                { text: "Khỏe", meaning: "健康/好", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn khỏe không?",
              translation: "你好嗎？(身體健康嗎？)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "khỏe", meaning: "健康", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Dạo này thế nào?",
              translation: "最近怎樣？",
              segments: [
                { text: "Dạo này", meaning: "最近/這陣子", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Vẫn bình thường.",
              translation: "還可以 / 老樣子。",
              segments: [
                { text: "Vẫn", meaning: "仍然", tail: " " },
                { text: "bình thường", meaning: "平常/普通", tail: "." },
              ],
            },
          ],
          usage_note: "越南人重視健康，所以問候常用「Khỏe」(強壯/健康)。",
          image_file: "how_are_you.png",
        },
        {
          id: "greet-022",
          term_zh: "真的嗎",
          related_terms: [
            {
              term_target: "Thật hả?",
              pronunciation: ["/tʰət ha/"],
              specific_note: "疑問",
              segments: [
                { text: "Thật", meaning: "真實", tail: " " },
                { text: "hả", meaning: "蛤/啊", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Thật không?",
              translation: "真的嗎？/ 真的假的？",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "không", meaning: "不(反問)", tail: "?" },
              ],
            },
            {
              sentence: "Không tin được!",
              translation: "難以置信！",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "tin", meaning: "相信", tail: " " },
                { text: "được", meaning: "能/行", tail: "!" },
              ],
            },
            {
              sentence: "Thiệt hả?",
              translation: "真假？(南方口音常用 Thiệt)。",
              segments: [
                { text: "Thiệt", meaning: "真", tail: " " },
                { text: "hả", meaning: "蛤", tail: "?" },
              ],
            },
          ],
          usage_note: "表示驚訝時使用。",
          image_file: "really_q.png",
        },
        {
          id: "greet-023",
          term_zh: "太棒了",
          related_terms: [
            {
              term_target: "Tuyệt vời",
              pronunciation: ["/twiət vəj/"],
              specific_note: "讚嘆",
              segments: [
                { text: "Tuyệt", meaning: "絕/極", tail: " " },
                { text: "vời", meaning: "佳/遠", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tuyệt quá!",
              translation: "太讚了！",
              segments: [
                { text: "Tuyệt", meaning: "絕佳", tail: " " },
                { text: "quá", meaning: "太/過度", tail: "!" },
              ],
            },
            {
              sentence: "Hay quá!",
              translation: "太好了！/ 好厲害！(常用於表演/點子)。",
              segments: [
                { text: "Hay", meaning: "好/有趣/精彩", tail: " " },
                { text: "quá", meaning: "太", tail: "!" },
              ],
            },
            {
              sentence: "Đỉnh!",
              translation: "頂！(年輕人流行語，指超強)。",
              segments: [{ text: "Đỉnh", meaning: "頂峰/巔峰", tail: "!" }],
            },
          ],
          usage_note: "Quá (太) 是加強語氣的常用詞。",
          image_file: "awesome.png",
        },
        {
          id: "greet-024",
          term_zh: "很高興認識你",
          related_terms: [
            {
              term_target: "Rất vui được gặp bạn",
              pronunciation: ["/zət vuj ɗəək gap ban/"],
              specific_note: "初次見面",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "開心", tail: " " },
                { text: "được", meaning: "獲得/被", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "bạn", meaning: "你", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào, rất vui được làm quen.",
              translation: "你好，很高興能認識(結交)你。",
              segments: [
                { text: "Chào", meaning: "你好", tail: ", " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "開心", tail: " " },
                { text: "được", meaning: "能", tail: " " },
                { text: "làm quen", meaning: "做朋友/認識", tail: "." },
              ],
            },
            {
              sentence: "Hân hạnh được gặp anh.",
              translation: "很榮幸見到你 (較正式)。",
              segments: [
                { text: "Hân hạnh", meaning: "欣幸/榮幸", tail: " " },
                { text: "được", meaning: "能", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "anh", meaning: "哥", tail: "." },
              ],
            },
            {
              sentence: "Rất vui được biết bạn.",
              translation: "很高興認識(知道)你。",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "開心", tail: " " },
                { text: "được", meaning: "能", tail: " " },
                { text: "biết", meaning: "知道", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
          ],
          usage_note: "交換名片或握手時說。",
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
                { text: "Tiếc", meaning: "可惜/惋惜", tail: " " },
                { text: "quá", meaning: "太", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tiếc thật!",
              translation: "真是可惜！",
              segments: [
                { text: "Tiếc", meaning: "可惜", tail: " " },
                { text: "thật", meaning: "真", tail: "!" },
              ],
            },
            {
              sentence: "Xui ghê.",
              translation: "真倒楣 / 運氣真差。",
              segments: [
                { text: "Xui", meaning: "倒楣/衰", tail: " " },
                { text: "ghê", meaning: "可怕/厲害", tail: "." },
              ],
            },
            {
              sentence: "Thôi kệ đi.",
              translation: "算了 / 隨它去吧 (自我安慰)。",
              segments: [
                { text: "Thôi", meaning: "罷了/停", tail: " " },
                { text: "kệ", meaning: "管它的", tail: " " },
                { text: "đi", meaning: "去/吧", tail: "." },
              ],
            },
          ],
          usage_note: "聽到壞消息或錯過機會時使用。",
          image_file: "too_bad.png",
        },
      ],
    },
    {
      id: "pronouns",
      name: "主詞與代名詞 (越南語)",
      items: [
        {
          id: "pro-01",
          term_zh: "它",
          related_terms: [
            {
              term_target: "Nó",
              pronunciation: ["/nɔ/"],
              specific_note: "指動物/物品/晚輩",
              segments: [{ text: "Nó", meaning: "它/牠", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Con mèo này dễ thương, nó tên là Mi.",
              translation: "這隻貓很可愛，它叫 Mi。",
              segments: [
                { text: "Con", meaning: "隻(動物量詞)", tail: " " },
                { text: "mèo", meaning: "貓", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "dễ thương", meaning: "可愛", tail: ", " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "Mi", meaning: "咪(名)", tail: "." },
              ],
            },
            {
              sentence: "Cái máy này hư rồi, nó không chạy.",
              translation: "這台機器壞了，它不動了。",
              segments: [
                { text: "Cái", meaning: "個/台", tail: " " },
                { text: "máy", meaning: "機器", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "hư", meaning: "壞", tail: " " },
                { text: "rồi", meaning: "了", tail: ", " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "chạy", meaning: "跑/運作", tail: "." },
              ],
            },
            {
              sentence: "Nó đi đâu rồi?",
              translation: "它(譬如狗)跑去哪了？",
              segments: [
                { text: "Nó", meaning: "它", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
          ],
          usage_note: "注意：講天氣(下雨)時不用 Nó，而是說「Trời」(天)。",
          image_file: "that.png",
        },
        {
          id: "pro-02",
          term_zh: "我",
          related_terms: [
            {
              term_target: "Tôi",
              pronunciation: ["/toj/"],
              specific_note: "正式/通用",
              segments: [{ text: "Tôi", meaning: "我", tail: "" }],
            },
            {
              term_target: "Em",
              pronunciation: ["/ɛm/"],
              specific_note: "自稱(對長輩/情人)",
              segments: [{ text: "Em", meaning: "我(弟妹)", tail: "" }],
            },
            {
              term_target: "Mình",
              pronunciation: ["/mɨn/"],
              specific_note: "親密/朋友",
              segments: [{ text: "Mình", meaning: "我(自己)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi là người Đài Loan.",
              translation: "我是台灣人 (標準介紹)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Em đói bụng quá.",
              translation: "我好餓 (對朋友/情人撒嬌)。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đói", meaning: "餓", tail: " " },
                { text: "bụng", meaning: "肚子", tail: " " },
                { text: "quá", meaning: "太/好", tail: "." },
              ],
            },
            {
              sentence: "Mình đi trước nhé.",
              translation: "我先走囉 (平輩朋友)。",
              segments: [
                { text: "Mình", meaning: "我", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "trước", meaning: "先/前", tail: " " },
                { text: "nhé", meaning: "喔(語助詞)", tail: "." },
              ],
            },
          ],
          usage_note: "Tôi 很正式。日常生活中通常依輩分自稱 Anh/Chị/Em。",
          image_file: "i.png",
        },
        {
          id: "pro-03",
          term_zh: "你",
          related_terms: [
            {
              term_target: "Bạn",
              pronunciation: ["/ban/"],
              specific_note: "朋友/平輩通用",
              segments: [{ text: "Bạn", meaning: "朋友/你", tail: "" }],
            },
            {
              term_target: "Anh",
              pronunciation: ["/aɲ/"],
              specific_note: "稱呼男性(哥)",
              segments: [{ text: "Anh", meaning: "哥(你)", tail: "" }],
            },
            {
              term_target: "Chị",
              pronunciation: ["/tʃi/"],
              specific_note: "稱呼女性(姊)",
              segments: [{ text: "Chị", meaning: "姊(你)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn tên là gì?",
              translation: "你叫什麼名字？(標準問法)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Anh đi đâu đấy?",
              translation: "哥(你)要去哪裡？",
              segments: [
                { text: "Anh", meaning: "哥", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: " " },
                { text: "đấy", meaning: "那(語助詞)", tail: "?" },
              ],
            },
            {
              sentence: "Chị ăn cơm chưa?",
              translation: "姊(你)吃飯了嗎？",
              segments: [
                { text: "Chị", meaning: "姊", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "cơm", meaning: "飯", tail: " " },
                { text: "chưa", meaning: "還沒/了嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "看到男的叫 Anh，女的叫 Chị，比你小的叫 Em。",
          image_file: "you.png",
        },
        {
          id: "pro-04",
          term_zh: "他 (男性)",
          related_terms: [
            {
              term_target: "Anh ấy",
              pronunciation: ["/aɲ əj/"],
              specific_note: "年輕男性",
              segments: [
                { text: "Anh", meaning: "哥/男", tail: " " },
                { text: "ấy", meaning: "那(指代)", tail: "" },
              ],
            },
            {
              term_target: "Ông ấy",
              pronunciation: ["/əwŋ͡m əj/"],
              specific_note: "年長男性",
              segments: [
                { text: "Ông", meaning: "先生/爺爺", tail: " " },
                { text: "ấy", meaning: "那", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh ấy là bạn trai tôi.",
              translation: "他是我的男朋友。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "bạn trai", meaning: "男朋友", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy làm việc ở đây.",
              translation: "他在這裡工作。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Ông ấy rất giàu.",
              translation: "他(那位先生)很有錢。",
              segments: [
                { text: "Ông ấy", meaning: "他", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "giàu", meaning: "富裕", tail: "." },
              ],
            },
          ],
          usage_note: "稱謂(Anh/Ông/Chú) + ấy = 他。",
          image_file: "he.png",
        },
        {
          id: "pro-05",
          term_zh: "他的",
          related_terms: [
            {
              term_target: "Của anh ấy",
              pronunciation: ["/kuə aɲ əj/"],
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
              sentence: "Nhà anh ấy đẹp lắm.",
              translation: "他家很漂亮 (口語常省略 Của)。",
              segments: [
                { text: "Nhà", meaning: "房子/家", tail: " " },
                { text: "anh ấy", meaning: "他", tail: " " },
                { text: "đẹp", meaning: "漂亮", tail: " " },
                { text: "lắm", meaning: "很/非常", tail: "." },
              ],
            },
            {
              sentence: "Tên anh ấy là Nam.",
              translation: "他的名字叫阿南。",
              segments: [
                { text: "Tên", meaning: "名字", tail: " " },
                { text: "anh ấy", meaning: "他", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "Nam", meaning: "南", tail: "." },
              ],
            },
          ],
          usage_note: "結構：物品 + (Của) + 人。",
          image_file: "his.png",
        },
        {
          id: "pro-06",
          term_zh: "我們",
          related_terms: [
            {
              term_target: "Chúng tôi",
              pronunciation: ["/tʃuŋ͡m toj/"],
              specific_note: "排除聽話者",
              segments: [
                { text: "Chúng", meaning: "眾/們", tail: " " },
                { text: "tôi", meaning: "我", tail: "" },
              ],
            },
            {
              term_target: "Chúng ta",
              pronunciation: ["/tʃuŋ͡m ta/"],
              specific_note: "包含聽話者",
              segments: [
                { text: "Chúng", meaning: "眾", tail: " " },
                { text: "ta", meaning: "咱/我們", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chúng tôi là sinh viên.",
              translation: "我們是大學生 (跟別人介紹自己團體)。",
              segments: [
                { text: "Chúng tôi", meaning: "我們(排除你)", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sinh viên", meaning: "大學生", tail: "." },
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
              translation: "我們去玩吧 (朋友間口語：Tụi mình)。",
              segments: [
                { text: "Tụi mình", meaning: "我們(親密)", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "chơi", meaning: "玩", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "跟對方說「我們一起做...」要用 Chúng ta。",
          image_file: "we.png",
        },
        {
          id: "pro-07",
          term_zh: "她 (女性)",
          related_terms: [
            {
              term_target: "Cô ấy",
              pronunciation: ["/ko əj/"],
              specific_note: "年輕女性/老師",
              segments: [
                { text: "Cô", meaning: "小姐/姑/老師", tail: " " },
                { text: "ấy", meaning: "那", tail: "" },
              ],
            },
            {
              term_target: "Chị ấy",
              pronunciation: ["/tʃi əj/"],
              specific_note: "姊姊輩",
              segments: [
                { text: "Chị", meaning: "姊", tail: " " },
                { text: "ấy", meaning: "那", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cô ấy đẹp quá.",
              translation: "她好漂亮。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "đẹp", meaning: "漂亮", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Chị ấy là sếp tôi.",
              translation: "她是我的老闆。",
              segments: [
                { text: "Chị ấy", meaning: "她(姊)", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sếp", meaning: "老闆/上司", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy thích uống cà phê.",
              translation: "她喜歡喝咖啡。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "uống", meaning: "喝", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: "." },
              ],
            },
          ],
          usage_note: "稱謂(Cô/Chị/Bà) + ấy = 她。",
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
              term_target: "Các anh ấy",
              pronunciation: ["/kak aɲ əj/"],
              specific_note: "那些男生",
              segments: [
                { text: "Các", meaning: "各/眾(複數)", tail: " " },
                { text: "anh ấy", meaning: "他", tail: "" },
              ],
            },
          ],
          examples: [
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
              sentence: "Họ là người nước ngoài.",
              translation: "他們是外國人。",
              segments: [
                { text: "Họ", meaning: "他們", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "nước", meaning: "國", tail: " " },
                { text: "ngoài", meaning: "外", tail: "." },
              ],
            },
            {
              sentence: "Mấy người đó đi đâu rồi?",
              translation: "那幾個人(他們)去哪了？",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "đó", meaning: "那", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
          ],
          usage_note: "Họ 是最安全的通用詞。",
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
              term_target: "Người này",
              pronunciation: ["/ŋɨəj naj/"],
              specific_note: "指人",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "này", meaning: "這", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cái này ngon lắm.",
              translation: "這個很好吃。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích cái này.",
              translation: "我喜歡這個。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
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
          usage_note: "Này = 這。量詞(Cái/Con/Người) + Này。",
          image_file: "this.png",
        },
        {
          id: "pro-10",
          term_zh: "那個",
          related_terms: [
            {
              term_target: "Cái đó",
              pronunciation: ["/kaj ɗɔ/"],
              specific_note: "指物品(剛提過)",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "đó", meaning: "那", tail: "" },
              ],
            },
            {
              term_target: "Cái kia",
              pronunciation: ["/kaj kiə/"],
              specific_note: "指物品(遠處)",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "kia", meaning: "那(遠)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi xem cái đó.",
              translation: "給我看看那個。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "cái đó", meaning: "那個", tail: "." },
              ],
            },
            {
              sentence: "Cái kia là cái gì?",
              translation: "那邊那個是什麼？",
              segments: [
                { text: "Cái kia", meaning: "那個(遠)", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "cái gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Tôi không lấy cái đó.",
              translation: "我不拿(買)那個。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "lấy", meaning: "拿/取", tail: " " },
                { text: "cái đó", meaning: "那個", tail: "." },
              ],
            },
          ],
          usage_note: "Đó (剛提到的/那裡)，Kia (遠方的那裡)。",
          image_file: "that.png",
        },
        {
          id: "pro-11",
          term_zh: "她的",
          related_terms: [
            {
              term_target: "Của cô ấy",
              pronunciation: ["/kuə ko əj/"],
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
              sentence: "Đây là túi của chị ấy.",
              translation: "這是她的包包。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "túi", meaning: "包/袋", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "chị ấy", meaning: "她(姊)", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích áo của cô ấy.",
              translation: "我喜歡她的衣服。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "áo", meaning: "衣服", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "cô ấy", meaning: "她", tail: "." },
              ],
            },
          ],
          usage_note: "一樣可省略 Của，直接說 Tóc cô ấy (她頭髮)。",
          image_file: "her.png",
        },
        {
          id: "pro-12",
          term_zh: "你的",
          related_terms: [
            {
              term_target: "Của bạn",
              pronunciation: ["/kuə ban/"],
              specific_note: "通用",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tên bạn là gì?",
              translation: "你的名字是什麼？(省略了 Của)。",
              segments: [
                { text: "Tên", meaning: "名字", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Đây có phải là điện thoại của bạn không?",
              translation: "這是你的手機嗎？",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "có phải là", meaning: "是否是", tail: " " },
                { text: "điện thoại", meaning: "電話/手機", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Đừng quên chìa khóa của anh.",
              translation: "別忘了你的鑰匙 (對男性說)。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "quên", meaning: "忘記", tail: " " },
                { text: "chìa khóa", meaning: "鑰匙", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "anh", meaning: "哥(你)", tail: "." },
              ],
            },
          ],
          usage_note: "口語常省略 Của，變成「名詞 + 你」。",
          image_file: "your.png",
        },
        {
          id: "pro-13",
          term_zh: "他們的",
          related_terms: [
            {
              term_target: "Của họ",
              pronunciation: ["/kuə hɔ/"],
              specific_note: "",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "họ", meaning: "他們", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nhà của họ to lắm.",
              translation: "他們的房子很大。",
              segments: [
                { text: "Nhà", meaning: "房子", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "họ", meaning: "他們", tail: " " },
                { text: "to", meaning: "大", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Con của họ rất ngoan.",
              translation: "他們的孩子很乖。",
              segments: [
                { text: "Con", meaning: "孩子", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "họ", meaning: "他們", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "ngoan", meaning: "乖", tail: "." },
              ],
            },
            {
              sentence: "Tôi biết bố mẹ họ.",
              translation: "我認識他們的父母。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "認識/知道", tail: " " },
                { text: "bố mẹ", meaning: "父母", tail: " " },
                { text: "họ", meaning: "他們", tail: "." },
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
              pronunciation: ["/kuə tʃuŋ͡m toj/"],
              specific_note: "排除聽話者",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "chúng tôi", meaning: "我們", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đây là nhà của chúng tôi.",
              translation: "這是我們的家。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "nhà", meaning: "家", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "chúng tôi", meaning: "我們", tail: "." },
              ],
            },
            {
              sentence: "Chào mừng đến công ty chúng tôi.",
              translation: "歡迎來到我們公司。",
              segments: [
                { text: "Chào mừng", meaning: "歡迎", tail: " " },
                { text: "đến", meaning: "來到", tail: " " },
                { text: "công ty", meaning: "公司", tail: " " },
                { text: "chúng tôi", meaning: "我們", tail: "." },
              ],
            },
            {
              sentence: "Đội của chúng ta thắng rồi!",
              translation: "我們這隊贏了！(包含聽話者)。",
              segments: [
                { text: "Đội", meaning: "隊伍", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "chúng ta", meaning: "咱們", tail: " " },
                { text: "thắng", meaning: "贏", tail: " " },
                { text: "rồi", meaning: "了", tail: "!" },
              ],
            },
          ],
          usage_note: "區分 Chúng tôi (不含你) 和 Chúng ta (含你)。",
          image_file: "our.png",
        },
        {
          id: "pro-15",
          term_zh: "這些",
          related_terms: [
            {
              term_target: "Những cái này",
              pronunciation: ["/ɲɨŋ kaj naj/"],
              specific_note: "複數物品",
              segments: [
                { text: "Những", meaning: "些(複數)", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Những quả táo này ngọt lắm.",
              translation: "這些蘋果很甜。",
              segments: [
                { text: "Những", meaning: "這些", tail: " " },
                { text: "quả", meaning: "顆(果實)", tail: " " },
                { text: "táo", meaning: "蘋果", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "ngọt", meaning: "甜", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Mấy cái này của bạn hả?",
              translation: "這幾個是你的嗎？(口語：Mấy 代替 Những)。",
              segments: [
                { text: "Mấy", meaning: "幾/些", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "hả", meaning: "蛤(疑問)", tail: "?" },
              ],
            },
            {
              sentence: "Tôi thích những đôi giày này.",
              translation: "我喜歡這些鞋子。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "những", meaning: "些", tail: " " },
                { text: "đôi", meaning: "雙", tail: " " },
                { text: "giày", meaning: "鞋", tail: " " },
                { text: "này", meaning: "這", tail: "." },
              ],
            },
          ],
          usage_note: "Những 表示複數 + Này (這)。",
          image_file: "these.png",
        },
        {
          id: "pro-16",
          term_zh: "那些",
          related_terms: [
            {
              term_target: "Những cái đó",
              pronunciation: ["/ɲɨŋ kaj ɗɔ/"],
              specific_note: "複數物品",
              segments: [
                { text: "Những", meaning: "些", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "đó", meaning: "那", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Những bông hoa đó đẹp quá.",
              translation: "那些花好漂亮。",
              segments: [
                { text: "Những", meaning: "那些", tail: " " },
                { text: "bông", meaning: "朵", tail: " " },
                { text: "hoa", meaning: "花", tail: " " },
                { text: "đó", meaning: "那", tail: " " },
                { text: "đẹp", meaning: "美", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Những người đó là ai?",
              translation: "那些人是誰？",
              segments: [
                { text: "Những", meaning: "些", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "đó", meaning: "那", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
              ],
            },
            {
              sentence: "Tôi muốn mua mấy cái bánh đó.",
              translation: "我想買那幾個餅乾。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "mấy", meaning: "幾(些)", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "bánh", meaning: "餅", tail: " " },
                { text: "đó", meaning: "那", tail: "." },
              ],
            },
          ],
          usage_note: "Những 表示複數 + Đó (那)。",
          image_file: "those.png",
        },
      ],
    },
    {
      id: "verbs",
      name: "常用動詞 (越南語)",
      items: [
        {
          id: "v-01",
          term_zh: "是",
          related_terms: [
            {
              term_target: "Là",
              pronunciation: ["/la/"],
              specific_note: "定義/等於",
              segments: [{ text: "Là", meaning: "是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi là người Việt Nam.",
              translation: "我是越南人。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "Việt Nam", meaning: "越南", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy là giáo viên.",
              translation: "他是一位老師。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "giáo viên", meaning: "老師", tail: "." },
              ],
            },
            {
              sentence: "Đây là bạn tôi.",
              translation: "這是我的朋友。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "bạn", meaning: "朋友", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南語的「是」專指身分或定義，形容詞前不需要加 (如：我很開心 = Tôi rất vui)。",
          image_file: "be.png",
        },
        {
          id: "v-02",
          term_zh: "有（擁有）",
          related_terms: [
            {
              term_target: "Có",
              pronunciation: ["/kɔ/"],
              specific_note: "",
              segments: [{ text: "Có", meaning: "有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi có xe máy.",
              translation: "我有一台機車。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "xe máy", meaning: "機車", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy có con mèo.",
              translation: "她有一隻貓。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "con", meaning: "隻", tail: " " },
                { text: "mèo", meaning: "貓", tail: "." },
              ],
            },
            {
              sentence: "Bạn có câu hỏi gì không?",
              translation: "你有任何問題嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "câu hỏi", meaning: "問題", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "除了「擁有」，Có 也用在 Yes/No 問句 (Có... không)。",
          image_file: "have.png",
        },
        {
          id: "v-03",
          term_zh: "去",
          related_terms: [
            {
              term_target: "Đi",
              pronunciation: ["/ɗi/"],
              specific_note: "",
              segments: [{ text: "Đi", meaning: "去/走", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đi làm.",
              translation: "我去上班。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "làm", meaning: "做(上班)", tail: "." },
              ],
            },
            {
              sentence: "Đi thôi!",
              translation: "走吧！/ 出發吧！",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "thôi", meaning: "罷了/語助詞", tail: "!" },
              ],
            },
            {
              sentence: "Bạn đi đâu đấy?",
              translation: "你要去哪裡？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: " " },
                { text: "đấy", meaning: "那(語助詞)", tail: "?" },
              ],
            },
          ],
          usage_note: "Đi 既是「去某地」，也是走路的「走」。",
          image_file: "go.png",
        },
        {
          id: "v-04",
          term_zh: "得到 / 拿 / 收",
          related_terms: [
            {
              term_target: "Lấy",
              pronunciation: ["/ləj/"],
              specific_note: "拿取/娶/嫁",
              segments: [{ text: "Lấy", meaning: "拿", tail: "" }],
            },
            {
              term_target: "Nhận",
              pronunciation: ["/ɲən/"],
              specific_note: "收到/領取",
              segments: [{ text: "Nhận", meaning: "收", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đã nhận được quà.",
              translation: "我已經收到禮物了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "nhận", meaning: "收", tail: " " },
                { text: "được", meaning: "到/得", tail: " " },
                { text: "quà", meaning: "禮物", tail: "." },
              ],
            },
            {
              sentence: "Lấy cho tôi cái kia.",
              translation: "幫我拿那個 (拿給我不需用 get)。",
              segments: [
                { text: "Lấy", meaning: "拿", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "cái kia", meaning: "那個", tail: "." },
              ],
            },
            {
              sentence: "Bạn nhận được email chưa?",
              translation: "你收到電子郵件了嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nhận", meaning: "收", tail: " " },
                { text: "được", meaning: "到", tail: " " },
                { text: "email", meaning: "電郵", tail: " " },
                { text: "chưa", meaning: "還沒/了嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "主動去拿用 Lấy，被動收到用 Nhận。",
          image_file: "get.png",
        },
        {
          id: "v-05",
          term_zh: "做",
          related_terms: [
            {
              term_target: "Làm",
              pronunciation: ["/lam/"],
              specific_note: "",
              segments: [{ text: "Làm", meaning: "做", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đang làm bài tập.",
              translation: "我正在做功課。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "bài tập", meaning: "練習題/功課", tail: "." },
              ],
            },
            {
              sentence: "Cứ làm đi.",
              translation: "儘管做吧 / 做就對了。",
              segments: [
                { text: "Cứ", meaning: "儘管/繼續", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Bạn làm nghề gì?",
              translation: "你做什麼工作？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "nghề", meaning: "職業", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "最萬用的動詞，做菜、做事、上班都用它。",
          image_file: "do.png",
        },
        {
          id: "v-06",
          term_zh: "說（講）",
          related_terms: [
            {
              term_target: "Nói",
              pronunciation: ["/nɔj/"],
              specific_note: "",
              segments: [{ text: "Nói", meaning: "說", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đừng nói chuyện.",
              translation: "別講話 / 別聊天。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "chuyện", meaning: "故事/事情", tail: "." },
              ],
            },
            {
              sentence: "Bạn nói gì cơ?",
              translation: "你剛剛說什麼？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "cơ", meaning: "啊(語助詞)", tail: "?" },
              ],
            },
            {
              sentence: "Nói đi!",
              translation: "說呀！",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note: "Nói chuyện = 說故事 = 聊天/講話。",
          image_file: "say.png",
        },
        {
          id: "v-07",
          term_zh: "知道",
          related_terms: [
            {
              term_target: "Biết",
              pronunciation: ["/biət/"],
              specific_note: "知道事情/技能",
              segments: [{ text: "Biết", meaning: "知道", tail: "" }],
            },
            {
              term_target: "Quen",
              pronunciation: ["/kwɛn/"],
              specific_note: "認識某人",
              segments: [{ text: "Quen", meaning: "熟識", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi biết rồi.",
              translation: "我知道了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "知道", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi không biết bơi.",
              translation: "我不會(知道)游泳。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "biết", meaning: "會/知道", tail: " " },
                { text: "bơi", meaning: "游泳", tail: "." },
              ],
            },
            {
              sentence: "Bạn có quen anh ấy không?",
              translation: "你認識他嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "quen", meaning: "認識/熟", tail: " " },
                { text: "anh ấy", meaning: "他", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "知道事情用 Biết，認識朋友用 Quen。",
          image_file: "know.png",
        },
        {
          id: "v-08",
          term_zh: "想／思考",
          related_terms: [
            {
              term_target: "Nghĩ",
              pronunciation: ["/ŋi/"],
              specific_note: "思考",
              segments: [{ text: "Nghĩ", meaning: "想", tail: "" }],
            },
            {
              term_target: "Thấy",
              pronunciation: ["/tʰəj/"],
              specific_note: "覺得/認為",
              segments: [{ text: "Thấy", meaning: "感到/看見", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi cũng nghĩ vậy.",
              translation: "我也這麼認為(想)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "vậy", meaning: "那樣", tail: "." },
              ],
            },
            {
              sentence: "Để tôi nghĩ đã.",
              translation: "讓我想一想。",
              segments: [
                { text: "Để", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "đã", meaning: "先/已經", tail: "." },
              ],
            },
            {
              sentence: "Tôi thấy bạn đúng.",
              translation: "我覺得你是對的。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thấy", meaning: "覺得/看見", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đúng", meaning: "對", tail: "." },
              ],
            },
          ],
          usage_note: "表達「觀點」常用 Thấy (覺得)，動腦筋用 Nghĩ (思考)。",
          image_file: "think.png",
        },
        {
          id: "v-09",
          term_zh: "看見",
          related_terms: [
            {
              term_target: "Thấy",
              pronunciation: ["/tʰəj/"],
              specific_note: "看到(結果)",
              segments: [{ text: "Thấy", meaning: "看見", tail: "" }],
            },
            {
              term_target: "Nhìn",
              pronunciation: ["/ɲin/"],
              specific_note: "看(動作)",
              segments: [{ text: "Nhìn", meaning: "注視", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi không thấy gì cả.",
              translation: "我什麼都沒看見。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "thấy", meaning: "看見", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "cả", meaning: "全部/都", tail: "." },
              ],
            },
            {
              sentence: "Bạn có thấy chìa khóa đâu không?",
              translation: "你有看到鑰匙在哪嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "thấy", meaning: "看見", tail: " " },
                { text: "chìa khóa", meaning: "鑰匙", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Nhìn kìa!",
              translation: "看那邊！",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "kìa", meaning: "那裡(遠)", tail: "!" },
              ],
            },
          ],
          usage_note: "Nhìn 是盯著看，Thấy 是看到了。",
          image_file: "see.png",
        },
        {
          id: "v-10",
          term_zh: "做出 / 泡(飲料)",
          related_terms: [
            {
              term_target: "Làm",
              pronunciation: ["/lam/"],
              specific_note: "製作",
              segments: [{ text: "Làm", meaning: "做", tail: "" }],
            },
            {
              term_target: "Pha",
              pronunciation: ["/fa/"],
              specific_note: "泡/調製",
              segments: [{ text: "Pha", meaning: "沖泡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Pha cà phê.",
              translation: "泡咖啡。",
              segments: [
                { text: "Pha", meaning: "泡", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: "." },
              ],
            },
            {
              sentence: "Đừng làm ồn.",
              translation: "不要製造噪音(做吵)。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "ồn", meaning: "吵雜", tail: "." },
              ],
            },
            {
              sentence: "Tôi làm sai rồi.",
              translation: "我搞錯了 (做錯了)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "sai", meaning: "錯", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "Make 飲料用 Pha，Make 錯誤/東西用 Làm。",
          image_file: "make.png",
        },
        {
          id: "v-11",
          term_zh: "來",
          related_terms: [
            {
              term_target: "Đến",
              pronunciation: ["/ɗen/"],
              specific_note: "抵達",
              segments: [{ text: "Đến", meaning: "到/來", tail: "" }],
            },
            {
              term_target: "Lại",
              pronunciation: ["/laj/"],
              specific_note: "靠近",
              segments: [{ text: "Lại", meaning: "來/回", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lại đây.",
              translation: "過來這裡。",
              segments: [
                { text: "Lại", meaning: "來", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Mời vào.",
              translation: "請進 (來裡面)。",
              segments: [
                { text: "Mời", meaning: "邀請/請", tail: " " },
                { text: "vào", meaning: "進/入", tail: "." },
              ],
            },
            {
              sentence: "Khi nào bạn đến?",
              translation: "你什麼時候會來(到)？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đến", meaning: "到", tail: "?" },
              ],
            },
          ],
          usage_note: "叫人過來用 Lại đây，講抵達目的地用 Đến。",
          image_file: "come.png",
        },
        {
          id: "v-12",
          term_zh: "需要",
          related_terms: [
            {
              term_target: "Cần",
              pronunciation: ["/kən/"],
              specific_note: "",
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
              sentence: "Tôi cần bạn giúp.",
              translation: "我需要你幫忙。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "giúp", meaning: "幫", tail: "." },
              ],
            },
            {
              sentence: "Chúng ta cần nói chuyện.",
              translation: "我們需要談談。",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "chuyện", meaning: "事", tail: "." },
              ],
            },
          ],
          usage_note: "Cần + 名詞/動詞 皆可。",
          image_file: "need.png",
        },
        {
          id: "v-13",
          term_zh: "使用",
          related_terms: [
            {
              term_target: "Dùng",
              pronunciation: ["/zuŋ͡m/"],
              specific_note: "口語",
              segments: [{ text: "Dùng", meaning: "用", tail: "" }],
            },
            {
              term_target: "Sử dụng",
              pronunciation: ["/sɨ zuŋ͡m/"],
              specific_note: "正式",
              segments: [{ text: "Sử dụng", meaning: "使用", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dùng bút này đi.",
              translation: "用這支筆吧。",
              segments: [
                { text: "Dùng", meaning: "用", tail: " " },
                { text: "bút", meaning: "筆", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Tôi mượn điện thoại được không?",
              translation: "我可以借(用)你的手機嗎？",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "mượn", meaning: "借", tail: " " },
                { text: "điện thoại", meaning: "電話", tail: " " },
                { text: "được", meaning: "行", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
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
          usage_note: "日常說 Dùng，寫作或說明書說 Sử dụng。",
          image_file: "use.png",
        },
        {
          id: "v-14",
          term_zh: "找到",
          related_terms: [
            {
              term_target: "Tìm",
              pronunciation: ["/tim/"],
              specific_note: "尋找(動作)",
              segments: [{ text: "Tìm", meaning: "找", tail: "" }],
            },
            {
              term_target: "Tìm thấy",
              pronunciation: ["/tim tʰəj/"],
              specific_note: "找到了(結果)",
              segments: [
                { text: "Tìm", meaning: "找", tail: " " },
                { text: "thấy", meaning: "見", tail: "" },
              ],
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
                { text: "việc", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "Tôi không tìm thấy chìa khóa.",
              translation: "我找不到鑰匙。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "tìm thấy", meaning: "找到", tail: " " },
                { text: "chìa khóa", meaning: "鑰匙", tail: "." },
              ],
            },
            {
              sentence: "Bạn tìm thấy chưa?",
              translation: "你找到了嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "tìm thấy", meaning: "找到", tail: " " },
                { text: "chưa", meaning: "還沒/了嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "Tìm 是過程，Tìm thấy 是結果。",
          image_file: "find.png",
        },
        {
          id: "v-15",
          term_zh: "給",
          related_terms: [
            {
              term_target: "Cho",
              pronunciation: ["/tʃɔ/"],
              specific_note: "給予",
              segments: [{ text: "Cho", meaning: "給", tail: "" }],
            },
            {
              term_target: "Đưa",
              pronunciation: ["/ɗɨə/"],
              specific_note: "遞給/交給",
              segments: [{ text: "Đưa", meaning: "遞", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đưa cho tôi cái đó.",
              translation: "把那個遞給我。",
              segments: [
                { text: "Đưa", meaning: "遞", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "cái đó", meaning: "那個", tail: "." },
              ],
            },
            {
              sentence: "Giúp tôi một tay.",
              translation: "幫我一把 (Give me a hand)。",
              segments: [
                { text: "Giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "tay", meaning: "手", tail: "." },
              ],
            },
            {
              sentence: "Đừng bao giờ bỏ cuộc.",
              translation: "永不放棄 (Never give up)。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "bao giờ", meaning: "何時(永遠)", tail: " " },
                { text: "bỏ cuộc", meaning: "放棄", tail: "." },
              ],
            },
          ],
          usage_note: "一般送禮或給東西用 Cho，傳遞東西用 Đưa。",
          image_file: "give.png",
        },
        {
          id: "v-16",
          term_zh: "告訴",
          related_terms: [
            {
              term_target: "Nói (cho)",
              pronunciation: ["/nɔj/"],
              specific_note: "告訴(某人)",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "cho", meaning: "給", tail: "" },
              ],
            },
            {
              term_target: "Kể",
              pronunciation: ["/ke/"],
              specific_note: "講述(故事)",
              segments: [{ text: "Kể", meaning: "講", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nói cho tôi biết tại sao.",
              translation: "告訴我為什麼。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "知道", tail: " " },
                { text: "tại sao", meaning: "為什麼", tail: "." },
              ],
            },
            {
              sentence: "Nói thật đi.",
              translation: "說實話 (Tell the truth)。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "thật", meaning: "真", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Đừng nói với ai.",
              translation: "不要告訴任何人。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "với", meaning: "跟/對", tail: " " },
                { text: "ai", meaning: "誰", tail: "." },
              ],
            },
          ],
          usage_note: "Nói cho (說給..聽) = Tell。",
          image_file: "tell.png",
        },
        {
          id: "v-17",
          term_zh: "工作",
          related_terms: [
            {
              term_target: "Làm việc",
              pronunciation: ["/lam viək/"],
              specific_note: "上班/做事",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "việc", meaning: "事", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi làm việc ở đây.",
              translation: "我在這工作。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Máy tính không chạy.",
              translation: "電腦不運作(壞了)。",
              segments: [
                { text: "Máy tính", meaning: "電腦", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "chạy", meaning: "跑/運作", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy làm việc chăm chỉ.",
              translation: "她工作很認真。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "chăm chỉ", meaning: "勤勞/認真", tail: "." },
              ],
            },
          ],
          usage_note: "機器運作通常用 Chạy (跑)，人工作用 Làm việc。",
          image_file: "work.png",
        },
        {
          id: "v-18",
          term_zh: "喜歡",
          related_terms: [
            {
              term_target: "Thích",
              pronunciation: ["/tʰik/"],
              specific_note: "",
              segments: [{ text: "Thích", meaning: "喜歡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi thích nó.",
              translation: "我喜歡它。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "nó", meaning: "它", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích ăn pizza.",
              translation: "我喜歡吃披薩。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "pizza", meaning: "披薩", tail: "." },
              ],
            },
            {
              sentence: "Bạn có thích anh ấy không?",
              translation: "你喜歡他嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "anh ấy", meaning: "他", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "Thích + 名詞 或 Thích + 動詞 都可以。",
          image_file: "like.png",
        },
        {
          id: "v-19",
          term_zh: "起床",
          related_terms: [
            {
              term_target: "Thức dậy",
              pronunciation: ["/tʰɨk zəj/"],
              specific_note: "醒來",
              segments: [
                { text: "Thức", meaning: "醒", tail: " " },
                { text: "dậy", meaning: "起", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Dậy đi.",
              translation: "起床啦 (口語)。",
              segments: [
                { text: "Dậy", meaning: "起來", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Tôi thường dậy lúc 7 giờ.",
              translation: "我通常7點起床。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thường", meaning: "經常", tail: " " },
                { text: "dậy", meaning: "起來", tail: " " },
                { text: "lúc", meaning: "在...時刻", tail: " " },
                { text: "7", meaning: "七", tail: " " },
                { text: "giờ", meaning: "點/小時", tail: "." },
              ],
            },
            {
              sentence: "Dậy đi! Muộn rồi.",
              translation: "起床！遲到了。",
              segments: [
                { text: "Dậy", meaning: "起來", tail: " " },
                { text: "đi", meaning: "吧", tail: "! " },
                { text: "Muộn", meaning: "晚", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "日常口語常省略成 Dậy (起)。",
          image_file: "wake_up.png",
        },
        {
          id: "v-20",
          term_zh: "說話 (講語言)",
          related_terms: [
            {
              term_target: "Nói",
              pronunciation: ["/nɔj/"],
              specific_note: "講",
              segments: [{ text: "Nói", meaning: "說", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nói tiếng Anh.",
              translation: "說英文。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "tiếng", meaning: "語言", tail: " " },
                { text: "Anh", meaning: "英", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi gặp Tom được không?",
              translation: "我可以跟湯姆說話嗎？(電話用語: 讓我見Tom)。",
              segments: [
                { text: "Cho", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "gặp", meaning: "遇見", tail: " " },
                { text: "Tom", meaning: "湯姆", tail: " " },
                { text: "được", meaning: "行", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Làm ơn nói chậm lại.",
              translation: "請說慢一點。",
              segments: [
                { text: "Làm ơn", meaning: "拜託", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "lại", meaning: "下來", tail: "." },
              ],
            },
          ],
          usage_note: "說某種語言用 Nói + 語言名。",
          image_file: "speak.png",
        },
        {
          id: "v-21",
          term_zh: "聽見",
          related_terms: [
            {
              term_target: "Nghe",
              pronunciation: ["/ŋɛ/"],
              specific_note: "聽(動作)",
              segments: [{ text: "Nghe", meaning: "聽", tail: "" }],
            },
            {
              term_target: "Nghe thấy",
              pronunciation: ["/ŋɛ tʰəj/"],
              specific_note: "聽到了(結果)",
              segments: [
                { text: "Nghe", meaning: "聽", tail: " " },
                { text: "thấy", meaning: "見/覺", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn nghe rõ không?",
              translation: "你聽得清楚嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "rõ", meaning: "清楚", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi không nghe thấy gì.",
              translation: "我什麼都沒聽到。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不/沒", tail: " " },
                { text: "nghe thấy", meaning: "聽到", tail: " " },
                { text: "gì", meaning: "什麼", tail: "." },
              ],
            },
            {
              sentence: "Nghe này!",
              translation: "聽我說！/ 聽著！",
              segments: [
                { text: "Nghe", meaning: "聽", tail: " " },
                { text: "này", meaning: "這(語助詞)", tail: "!" },
              ],
            },
          ],
          usage_note: "講電話或訊號不好時常問「Nghe rõ không?」。",
          image_file: "hear.png",
        },
        {
          id: "v-22",
          term_zh: "寫",
          related_terms: [
            {
              term_target: "Viết",
              pronunciation: ["/viət/"],
              specific_note: "",
              segments: [{ text: "Viết", meaning: "寫", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Viết tên bạn vào đây.",
              translation: "把你的名字寫在這裡。",
              segments: [
                { text: "Viết", meaning: "寫", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "vào", meaning: "進/入", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Tôi đang viết email.",
              translation: "我正在寫電子郵件。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "viết", meaning: "寫", tail: " " },
                { text: "email", meaning: "電郵", tail: "." },
              ],
            },
            {
              sentence: "Đừng viết bậy.",
              translation: "不要亂寫。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "viết", meaning: "寫", tail: " " },
                { text: "bậy", meaning: "亂/錯", tail: "." },
              ],
            },
          ],
          usage_note: "書寫動作。",
          image_file: "write.png",
        },
        {
          id: "v-23",
          term_zh: "閱讀",
          related_terms: [
            {
              term_target: "Đọc",
              pronunciation: ["/ɗɔk/"],
              specific_note: "",
              segments: [{ text: "Đọc", meaning: "讀", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi thích đọc sách.",
              translation: "我喜歡看書。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "đọc", meaning: "閱讀", tail: " " },
                { text: "sách", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "Đọc tin nhắn đi.",
              translation: "讀(看)訊息吧。",
              segments: [
                { text: "Đọc", meaning: "讀", tail: " " },
                { text: "tin nhắn", meaning: "訊息/簡訊", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Bạn biết đọc tiếng Việt không?",
              translation: "你會讀越南文嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "biết", meaning: "會/懂", tail: " " },
                { text: "đọc", meaning: "讀", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "看書、看報紙、看訊息都用 Đọc。",
          image_file: "read.png",
        },
        {
          id: "v-24",
          term_zh: "等待",
          related_terms: [
            {
              term_target: "Đợi",
              pronunciation: ["/ɗəj/"],
              specific_note: "北部/通用",
              segments: [{ text: "Đợi", meaning: "等", tail: "" }],
            },
            {
              term_target: "Chờ",
              pronunciation: ["/tʃə/"],
              specific_note: "南部/通用",
              segments: [{ text: "Chờ", meaning: "等", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đợi tôi một chút.",
              translation: "等我一下。",
              segments: [
                { text: "Đợi", meaning: "等", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "một chút", meaning: "一點點/一下", tail: "." },
              ],
            },
            {
              sentence: "Bạn đang chờ ai?",
              translation: "你在等誰？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "chờ", meaning: "等", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
              ],
            },
            {
              sentence: "Làm ơn đợi ở đây.",
              translation: "麻煩在這裡等。",
              segments: [
                { text: "Làm ơn", meaning: "拜託/麻煩", tail: " " },
                { text: "đợi", meaning: "等", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
              ],
            },
          ],
          usage_note: "Đợi 和 Chờ 大部分情況可通用。",
          image_file: "wait.png",
        },
        {
          id: "v-25",
          term_zh: "嘗試 / 盡力",
          related_terms: [
            {
              term_target: "Thử",
              pronunciation: ["/tʰɨ/"],
              specific_note: "試驗(Try out)",
              segments: [{ text: "Thử", meaning: "試", tail: "" }],
            },
            {
              term_target: "Cố gắng",
              pronunciation: ["/ko gaŋ/"],
              specific_note: "盡力(Try hard)",
              segments: [{ text: "Cố gắng", meaning: "努力", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ăn thử món này đi.",
              translation: "試吃看看這道菜。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "thử", meaning: "試", tail: " " },
                { text: "món", meaning: "道(菜)", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Mặc thử xem có vừa không.",
              translation: "試穿看看合不合身。",
              segments: [
                { text: "Mặc", meaning: "穿", tail: " " },
                { text: "thử", meaning: "試", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "có", meaning: "有/是否", tail: " " },
                { text: "vừa", meaning: "合適", tail: " " },
                { text: "không", meaning: "嗎", tail: "." },
              ],
            },
            {
              sentence: "Tôi sẽ cố gắng hết sức.",
              translation: "我會盡全力的 (Try my best)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "sẽ", meaning: "將會", tail: " " },
                { text: "cố gắng", meaning: "努力", tail: " " },
                { text: "hết sức", meaning: "盡力/竭盡", tail: "." },
              ],
            },
          ],
          usage_note: "試衣服、試吃用「Thử」；加油努力用「Cố gắng」。",
          image_file: "try.png",
        },
        {
          id: "v-26",
          term_zh: "付錢",
          related_terms: [
            {
              term_target: "Trả tiền",
              pronunciation: ["/tʃa tiən/"],
              specific_note: "口語",
              segments: [
                { text: "Trả", meaning: "付/還", tail: " " },
                { text: "tiền", meaning: "錢", tail: "" },
              ],
            },
            {
              term_target: "Thanh toán",
              pronunciation: ["/tʰaɲ tɔan/"],
              specific_note: "正式/餐廳",
              segments: [
                { text: "Thanh toán", meaning: "結帳/清算", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em ơi, tính tiền!",
              translation: "服務生，買單！(最道地說法)。",
              segments: [
                { text: "Em", meaning: "弟/妹", tail: " " },
                { text: "ơi", meaning: "喂", tail: ", " },
                { text: "tính", meaning: "算", tail: " " },
                { text: "tiền", meaning: "錢", tail: "!" },
              ],
            },
            {
              sentence: "Để tôi trả tiền.",
              translation: "讓我來付錢。",
              segments: [
                { text: "Để", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "trả", meaning: "付", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Bạn có thể thanh toán bằng thẻ.",
              translation: "你可以用卡付款。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có thể", meaning: "可以", tail: " " },
                { text: "thanh toán", meaning: "結帳", tail: " " },
                { text: "bằng", meaning: "用/藉由", tail: " " },
                { text: "thẻ", meaning: "卡", tail: "." },
              ],
            },
          ],
          usage_note: "餐廳結帳大喊「Tính tiền」(算錢) 即可。",
          image_file: "pay.png",
        },
        {
          id: "v-27",
          term_zh: "選擇",
          related_terms: [
            {
              term_target: "Chọn",
              pronunciation: ["/tʃɔn/"],
              specific_note: "",
              segments: [{ text: "Chọn", meaning: "選", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn chọn cái nào?",
              translation: "你選哪一個？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "chọn", meaning: "選", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "nào", meaning: "哪", tail: "?" },
              ],
            },
            {
              sentence: "Khó chọn quá.",
              translation: "太難選了。",
              segments: [
                { text: "Khó", meaning: "難", tail: " " },
                { text: "chọn", meaning: "選", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Hãy chọn một số.",
              translation: "請選一個號碼。",
              segments: [
                { text: "Hãy", meaning: "請/祈使詞", tail: " " },
                { text: "chọn", meaning: "選", tail: " " },
                { text: "một", meaning: "一個", tail: " " },
                { text: "số", meaning: "數字", tail: "." },
              ],
            },
          ],
          usage_note: "挑選物品或做決定。",
          image_file: "choose.png",
        },
        {
          id: "v-28",
          term_zh: "進入",
          related_terms: [
            {
              term_target: "Vào",
              pronunciation: ["/vaːw/"],
              specific_note: "進入空間",
              segments: [{ text: "Vào", meaning: "進", tail: "" }],
            },
            {
              term_target: "Nhập",
              pronunciation: ["/ɲəp/"],
              specific_note: "輸入資料",
              segments: [{ text: "Nhập", meaning: "輸入", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mời vào nhà.",
              translation: "請進屋。",
              segments: [
                { text: "Mời", meaning: "請", tail: " " },
                { text: "vào", meaning: "進", tail: " " },
                { text: "nhà", meaning: "家/屋", tail: "." },
              ],
            },
            {
              sentence: "Không được vào.",
              translation: "禁止進入 (不能進)。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "được", meaning: "可以/被允許", tail: " " },
                { text: "vào", meaning: "進", tail: "." },
              ],
            },
            {
              sentence: "Vui lòng nhập mật khẩu.",
              translation: "請輸入密碼。",
              segments: [
                { text: "Vui lòng", meaning: "請/樂意", tail: " " },
                { text: "nhập", meaning: "輸入", tail: " " },
                { text: "mật khẩu", meaning: "密碼", tail: "." },
              ],
            },
          ],
          usage_note: "身體移動用 Vào，打字輸入用 Nhập。",
          image_file: "enter.png",
        },
        {
          id: "v-29",
          term_zh: "住",
          related_terms: [
            {
              term_target: "Sống",
              pronunciation: ["/səwŋ͡m/"],
              specific_note: "生活/生存",
              segments: [{ text: "Sống", meaning: "活/住", tail: "" }],
            },
            {
              term_target: "Ở",
              pronunciation: ["/ə/"],
              specific_note: "居住/待在",
              segments: [{ text: "Ở", meaning: "在/住", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn sống ở đâu?",
              translation: "你住在哪裡？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "sống", meaning: "生活", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Tôi ở Hà Nội.",
              translation: "我住在河內。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ở", meaning: "住/在", tail: " " },
                { text: "Hà Nội", meaning: "河內", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy sống một mình.",
              translation: "他一個人住(生活)。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "sống", meaning: "生活", tail: " " },
                { text: "một mình", meaning: "獨自", tail: "." },
              ],
            },
          ],
          usage_note: "問地址常用 Ở đâu (在哪)，問定居城市可用 Sống ở đâu。",
          image_file: "live.png",
        },
        {
          id: "v-30",
          term_zh: "到達",
          related_terms: [
            {
              term_target: "Đến",
              pronunciation: ["/ɗen/"],
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
              sentence: "Khi nào chúng ta đến nơi?",
              translation: "我們什麼時候會到(目的地)？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "chúng ta", meaning: "我們", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "nơi", meaning: "地方/目的地", tail: "?" },
              ],
            },
            {
              sentence: "Xe buýt đến rồi.",
              translation: "公車到了。",
              segments: [
                { text: "Xe buýt", meaning: "公車", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi mới tới.",
              translation: "我剛到。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "mới", meaning: "剛剛/新", tail: " " },
                { text: "tới", meaning: "到", tail: "." },
              ],
            },
          ],
          usage_note: "Đến 和 Tới 都可以表示到達。",
          image_file: "arrive.png",
        },
        {
          id: "v-31",
          term_zh: "走路",
          related_terms: [
            {
              term_target: "Đi bộ",
              pronunciation: ["/ɗi bo/"],
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
              sentence: "Chúng ta đi bộ nhé.",
              translation: "我們走路吧。",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "đi bộ", meaning: "走路", tail: " " },
                { text: "nhé", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Đi bộ tốt cho sức khỏe.",
              translation: "走路對健康很好。",
              segments: [
                { text: "Đi bộ", meaning: "走路", tail: " " },
                { text: "tốt", meaning: "好", tail: " " },
                { text: "cho", meaning: "給/對", tail: " " },
                { text: "sức khỏe", meaning: "健康", tail: "." },
              ],
            },
          ],
          usage_note: "單說 Đi 只是「去」，強調雙腳走要說 Đi bộ。",
          image_file: "walk.png",
        },
        {
          id: "v-32",
          term_zh: "打開",
          related_terms: [
            {
              term_target: "Mở",
              pronunciation: ["/mə/"],
              specific_note: "開門/開機",
              segments: [{ text: "Mở", meaning: "開", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Làm ơn mở cửa.",
              translation: "麻煩開門。",
              segments: [
                { text: "Làm ơn", meaning: "麻煩", tail: " " },
                { text: "mở", meaning: "開", tail: " " },
                { text: "cửa", meaning: "門", tail: "." },
              ],
            },
            {
              sentence: "Mở sách trang 10.",
              translation: "打開書本第10頁。",
              segments: [
                { text: "Mở", meaning: "打開", tail: " " },
                { text: "sách", meaning: "書", tail: " " },
                { text: "trang", meaning: "頁", tail: " " },
                { text: "10", meaning: "十", tail: "." },
              ],
            },
            {
              sentence: "Mấy giờ quán mở cửa?",
              translation: "店幾點開門？",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "quán", meaning: "店", tail: " " },
                { text: "mở cửa", meaning: "開門", tail: "?" },
              ],
            },
          ],
          usage_note: "開門、開燈、開店都用 Mở。",
          image_file: "open.png",
        },
        {
          id: "v-33",
          term_zh: "關閉",
          related_terms: [
            {
              term_target: "Đóng",
              pronunciation: ["/ɗawŋ͡m/"],
              specific_note: "關門/蓋上",
              segments: [{ text: "Đóng", meaning: "關", tail: "" }],
            },
            {
              term_target: "Tắt",
              pronunciation: ["/tat/"],
              specific_note: "關電器/燈",
              segments: [{ text: "Tắt", meaning: "熄滅", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đóng cửa lại đi.",
              translation: "把門關上吧。",
              segments: [
                { text: "Đóng", meaning: "關", tail: " " },
                { text: "cửa", meaning: "門", tail: " " },
                { text: "lại", meaning: "起來/回", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Nhớ tắt đèn.",
              translation: "記得關燈。",
              segments: [
                { text: "Nhớ", meaning: "記得", tail: " " },
                { text: "tắt", meaning: "關(電)", tail: " " },
                { text: "đèn", meaning: "燈", tail: "." },
              ],
            },
            {
              sentence: "Quán đóng cửa rồi.",
              translation: "店已經打烊了。",
              segments: [
                { text: "Quán", meaning: "店", tail: " " },
                { text: "đóng cửa", meaning: "關門", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "物理關閉用 Đóng，電器電源用 Tắt。",
          image_file: "close.png",
        },
        {
          id: "v-34",
          term_zh: "幫助",
          related_terms: [
            {
              term_target: "Giúp",
              pronunciation: ["/zup/"],
              specific_note: "口語",
              segments: [{ text: "Giúp", meaning: "幫", tail: "" }],
            },
            {
              term_target: "Giúp đỡ",
              pronunciation: ["/zup ɗə/"],
              specific_note: "完整",
              segments: [
                { text: "Giúp", meaning: "幫", tail: " " },
                { text: "đỡ", meaning: "助/扶", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cứu tôi với!",
              translation: "救命！(緊急求助)",
              segments: [
                { text: "Cứu", meaning: "救", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "với", meaning: "吧/語助詞", tail: "!" },
              ],
            },
            {
              sentence: "Bạn có thể giúp tôi không?",
              translation: "你可以幫我嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có thể", meaning: "可以", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Cảm ơn bạn đã giúp đỡ.",
              translation: "謝謝你的幫忙。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "giúp đỡ", meaning: "幫助", tail: "." },
              ],
            },
          ],
          usage_note: "口語常說 Giúp，書面或鄭重說 Giúp đỡ。",
          image_file: "help.png",
        },
        {
          id: "v-35",
          term_zh: "帶來 / 帶去",
          related_terms: [
            {
              term_target: "Mang",
              pronunciation: ["/maŋ/"],
              specific_note: "攜帶(北部/通用)",
              segments: [{ text: "Mang", meaning: "帶", tail: "" }],
            },
            {
              term_target: "Đem",
              pronunciation: ["/ɗɛm/"],
              specific_note: "攜帶(南部)",
              segments: [{ text: "Đem", meaning: "帶", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mang về.",
              translation: "帶走 / 外帶。",
              segments: [
                { text: "Mang", meaning: "帶", tail: " " },
                { text: "về", meaning: "回", tail: "." },
              ],
            },
            {
              sentence: "Đừng quên mang ô.",
              translation: "別忘了帶傘。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "quên", meaning: "忘", tail: " " },
                { text: "mang", meaning: "帶", tail: " " },
                { text: "ô", meaning: "傘", tail: "." },
              ],
            },
            {
              sentence: "Mang cho tôi cái kia.",
              translation: "把那個帶給我。",
              segments: [
                { text: "Mang", meaning: "帶", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "cái kia", meaning: "那個", tail: "." },
              ],
            },
          ],
          usage_note: "買東西外帶常說「Mang về」。",
          image_file: "bring.png",
        },
        {
          id: "v-36",
          term_zh: "需要",
          related_terms: [
            {
              term_target: "Cần",
              pronunciation: ["/kən/"],
              specific_note: "需要",
              segments: [{ text: "Cần", meaning: "需要", tail: "" }],
            },
            {
              term_target: "Phải",
              pronunciation: ["/faj/"],
              specific_note: "必須/得",
              segments: [{ text: "Phải", meaning: "必須", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi cần đi vệ sinh.",
              translation: "我需要去洗手間。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "vệ sinh", meaning: "衛生(廁所)", tail: "." },
              ],
            },
            {
              sentence: "Tôi phải đi bây giờ.",
              translation: "我現在得走了 (必須走)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "phải", meaning: "必須", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "bây giờ", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Bạn có cần túi không?",
              translation: "你需要袋子嗎？(商店常用)。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "túi", meaning: "袋子", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "Cần 是需求，Phải 是義務或必要。",
          image_file: "need.png",
        },
        {
          id: "v-37",
          term_zh: "使用",
          related_terms: [
            {
              term_target: "Dùng",
              pronunciation: ["/zuŋ͡m/"],
              specific_note: "標準",
              segments: [{ text: "Dùng", meaning: "用", tail: "" }],
            },
            {
              term_target: "Xài",
              pronunciation: ["/saj/"],
              specific_note: "口語(南方)",
              segments: [{ text: "Xài", meaning: "用/花", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này xài tốt lắm.",
              translation: "這東西很好用 (南方口語)。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "xài", meaning: "用", tail: " " },
                { text: "tốt", meaning: "好", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Bạn dùng đũa được không?",
              translation: "你會用筷子嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "dùng", meaning: "用", tail: " " },
                { text: "đũa", meaning: "筷子", tail: " " },
                { text: "được", meaning: "行/會", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi đang xài wifi chùa.",
              translation: "我正在用免費wifi。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "xài", meaning: "用", tail: " " },
                { text: "wifi", meaning: "Wifi", tail: " " },
                { text: "chùa", meaning: "廟(引申為免費)", tail: "." },
              ],
            },
          ],
          usage_note: "Dùng 是通用語，Xài 較口語且常用於花錢/用東西。",
          image_file: "use.png",
        },
        {
          id: "v-38",
          term_zh: "變成 / 成為",
          related_terms: [
            {
              term_target: "Trở thành",
              pronunciation: ["/tʃə tʰaɲ/"],
              specific_note: "成為",
              segments: [
                { text: "Trở", meaning: "變/轉", tail: " " },
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
                { text: "muốn", meaning: "想", tail: " " },
                { text: "trở thành", meaning: "成為", tail: " " },
                { text: "bác sĩ", meaning: "醫生", tail: "." },
              ],
            },
            {
              sentence: "Trời trở lạnh rồi.",
              translation: "天變冷了。",
              segments: [
                { text: "Trời", meaning: "天", tail: " " },
                { text: "trở", meaning: "變/轉", tail: " " },
                { text: "lạnh", meaning: "冷", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Ước mơ thành sự thật.",
              translation: "夢想成真。",
              segments: [
                { text: "Ước mơ", meaning: "夢想", tail: " " },
                { text: "thành", meaning: "成", tail: " " },
                { text: "sự thật", meaning: "事實/真", tail: "." },
              ],
            },
          ],
          usage_note: "描述職業或身分變化用 Trở thành。",
          image_file: "become.png",
        },
        {
          id: "v-39",
          term_zh: "開始",
          related_terms: [
            {
              term_target: "Bắt đầu",
              pronunciation: ["/bat ɗəw/"],
              specific_note: "",
              segments: [
                { text: "Bắt", meaning: "抓/捕", tail: " " },
                { text: "đầu", meaning: "頭/首", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chúng ta bắt đầu thôi.",
              translation: "我們開始吧。",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "bắt đầu", meaning: "開始", tail: " " },
                { text: "thôi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Phim bắt đầu lúc mấy giờ?",
              translation: "電影幾點開始？",
              segments: [
                { text: "Phim", meaning: "電影", tail: " " },
                { text: "bắt đầu", meaning: "開始", tail: " " },
                { text: "lúc", meaning: "在...時候", tail: " " },
                { text: "mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點", tail: "?" },
              ],
            },
            {
              sentence: "Bắt đầu từ đâu?",
              translation: "從哪裡開始？",
              segments: [
                { text: "Bắt đầu", meaning: "開始", tail: " " },
                { text: "từ", meaning: "從", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "Bắt đầu = 抓頭 = 開始。",
          image_file: "start.png",
        },
        {
          id: "v-41",
          term_zh: "結束 / 完成",
          related_terms: [
            {
              term_target: "Xong",
              pronunciation: ["/sawŋ͡m/"],
              specific_note: "做完/完了",
              segments: [{ text: "Xong", meaning: "完", tail: "" }],
            },
            {
              term_target: "Kết thúc",
              pronunciation: ["/ket tʰuk/"],
              specific_note: "正式結束",
              segments: [{ text: "Kết thúc", meaning: "結束", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi làm xong việc rồi.",
              translation: "我工作做完了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "xong", meaning: "完", tail: " " },
                { text: "việc", meaning: "工作", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi chưa ăn xong.",
              translation: "我還沒吃完。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa", meaning: "還沒", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "xong", meaning: "完", tail: "." },
              ],
            },
            {
              sentence: "Phim kết thúc rồi.",
              translation: "電影結束了。",
              segments: [
                { text: "Phim", meaning: "電影", tail: " " },
                { text: "kết thúc", meaning: "結束", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "口語最常用「動詞 + Xong」(做完了)。",
          image_file: "finish.png",
        },
        {
          id: "v-42",
          term_zh: "停止",
          related_terms: [
            {
              term_target: "Dừng",
              pronunciation: ["/zɨŋ/"],
              specific_note: "停下動作",
              segments: [{ text: "Dừng", meaning: "停", tail: "" }],
            },
            {
              term_target: "Thôi",
              pronunciation: ["/tʰoj/"],
              specific_note: "罷了/停止",
              segments: [{ text: "Thôi", meaning: "停/罷", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dừng xe ở đây.",
              translation: "在這裡停車。",
              segments: [
                { text: "Dừng", meaning: "停", tail: " " },
                { text: "xe", meaning: "車", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Thôi đi! Đừng nói nữa.",
              translation: "夠了(停吧)！別再說了。",
              segments: [
                { text: "Thôi", meaning: "停/罷", tail: " " },
                { text: "đi", meaning: "吧", tail: "! " },
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "nữa", meaning: "再/更多", tail: "." },
              ],
            },
            {
              sentence: "Xe buýt đã dừng lại.",
              translation: "公車已經停下來了。",
              segments: [
                { text: "Xe buýt", meaning: "公車", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "dừng", meaning: "停", tail: " " },
                { text: "lại", meaning: "下來", tail: "." },
              ],
            },
          ],
          usage_note: "叫人住手或閉嘴常用「Thôi đi」。",
          image_file: "stop.png",
        },
        {
          id: "v-43",
          term_zh: "記住 / 想念",
          related_terms: [
            {
              term_target: "Nhớ",
              pronunciation: ["/ɲə/"],
              specific_note: "記得/想念",
              segments: [{ text: "Nhớ", meaning: "記/想", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhớ gọi cho mẹ nhé.",
              translation: "記得打電話給媽媽喔。",
              segments: [
                { text: "Nhớ", meaning: "記得", tail: " " },
                { text: "gọi", meaning: "打(電話)", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "mẹ", meaning: "媽", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Tôi không nhớ tên anh ấy.",
              translation: "我不記得他的名字。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "nhớ", meaning: "記得", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "anh ấy", meaning: "他", tail: "." },
              ],
            },
            {
              sentence: "Em nhớ anh.",
              translation: "我想你 (男女朋友/夫妻常用)。",
              segments: [
                { text: "Em", meaning: "我(妹)", tail: " " },
                { text: "nhớ", meaning: "想念", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: "." },
              ],
            },
          ],
          usage_note: "Nhớ 既是「記得」也是「想念」，看上下文。",
          image_file: "remember.png",
        },
        {
          id: "v-44",
          term_zh: "談話",
          related_terms: [
            {
              term_target: "Nói chuyện",
              pronunciation: ["/nɔj tʃwiən/"],
              specific_note: "聊天/交談",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "chuyện", meaning: "故事/事", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nói chuyện với tôi đi.",
              translation: "跟我說說話吧。",
              segments: [
                { text: "Nói chuyện", meaning: "說話", tail: " " },
                { text: "với", meaning: "跟/與", tail: " " },
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
              sentence: "Đừng nói chuyện với người lạ.",
              translation: "不要跟陌生人說話。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "nói chuyện", meaning: "說話", tail: " " },
                { text: "với", meaning: "跟", tail: " " },
                { text: "người lạ", meaning: "陌生人", tail: "." },
              ],
            },
          ],
          usage_note: "Nói 是單純「說」，Nói chuyện 是雙向「交談」。",
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
              segments: [{ text: "Gặp", meaning: "見/遇", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Gặp bạn bè.",
              translation: "見朋友。",
              segments: [
                { text: "Gặp", meaning: "見", tail: " " },
                { text: "bạn bè", meaning: "朋友", tail: "." },
              ],
            },
            {
              sentence: "Rất vui được gặp bạn.",
              translation: "很高興認識(見到)你。",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "開心", tail: " " },
                { text: "được", meaning: "能/被", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Hẹn gặp lại.",
              translation: "再見 (約定再見面)。",
              segments: [
                { text: "Hẹn", meaning: "約/約定", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "lại", meaning: "再", tail: "." },
              ],
            },
          ],
          usage_note: "見面。",
          image_file: "meet.png",
        },
        {
          id: "v-46",
          term_zh: "乘坐 / 拿 / 吃(藥)",
          related_terms: [
            {
              term_target: "Đi",
              pronunciation: ["/ɗi/"],
              specific_note: "搭乘(交通)",
              segments: [{ text: "Đi", meaning: "走/搭", tail: "" }],
            },
            {
              term_target: "Uống",
              pronunciation: ["/uəŋ͡m/"],
              specific_note: "吃(藥)/喝",
              segments: [{ text: "Uống", meaning: "喝/服", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đi xe buýt đi làm.",
              translation: "我搭(走)公車去上班。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "搭/走", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "làm", meaning: "上班", tail: "." },
              ],
            },
            {
              sentence: "Nghỉ ngơi một chút đi.",
              translation: "休息一下吧 (Take a break)。",
              segments: [
                { text: "Nghỉ ngơi", meaning: "休息", tail: " " },
                { text: "một chút", meaning: "一點/一下", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Nhớ uống thuốc nhé.",
              translation: "記得吃藥喔 (越南語用「喝」藥)。",
              segments: [
                { text: "Nhớ", meaning: "記得", tail: " " },
                { text: "uống", meaning: "喝/服用", tail: " " },
                { text: "thuốc", meaning: "藥", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note:
            "英文 Take 用法多，越南語要分開：搭車用 Đi，吃藥用 Uống。",
          image_file: "take.png",
        },
        {
          id: "v-47",
          term_zh: "放 / 穿(鞋)",
          related_terms: [
            {
              term_target: "Để",
              pronunciation: ["/ɗe/"],
              specific_note: "放置",
              segments: [{ text: "Để", meaning: "放/留", tail: "" }],
            },
            {
              term_target: "Đi / Mang",
              pronunciation: ["/ɗi/", "/maŋ/"],
              specific_note: "穿(鞋襪)",
              segments: [
                { text: "Đi", meaning: "穿(鞋)", tail: " / " },
                { text: "Mang", meaning: "穿(鞋)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Để nó xuống.",
              translation: "把它放下。",
              segments: [
                { text: "Để", meaning: "放", tail: " " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "xuống", meaning: "下", tail: "." },
              ],
            },
            {
              sentence: "Đi giày vào đi.",
              translation: "把鞋子穿上吧。",
              segments: [
                { text: "Đi", meaning: "穿(腳部)", tail: " " },
                { text: "giày", meaning: "鞋", tail: " " },
                { text: "vào", meaning: "進/上", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Tôi nên để cái này ở đâu?",
              translation: "我該把這個放哪裡？",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nên", meaning: "應該", tail: " " },
                { text: "để", meaning: "放", tail: " " },
                { text: "cái này", meaning: "這個", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "穿衣服用 Mặc，穿鞋子用 Đi 或 Mang。",
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
              sentence: "Ăn tối chưa?",
              translation: "吃晚餐了嗎？",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "tối", meaning: "晚(餐)", tail: " " },
                { text: "chưa", meaning: "還沒/了嗎", tail: "?" },
              ],
            },
            {
              sentence: "Bạn muốn ăn gì?",
              translation: "你想吃什麼？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Đừng ăn nhiều quá.",
              translation: "別吃太多。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
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
              term_target: "Ngủ",
              pronunciation: ["/ŋu/"],
              specific_note: "",
              segments: [{ text: "Ngủ", meaning: "睡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi ngủ đi.",
              translation: "去睡覺吧。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "ngủ", meaning: "睡", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Hôm qua tôi ngủ không ngon.",
              translation: "我昨天沒睡好。",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "ngủ", meaning: "睡", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "ngon", meaning: "香/好", tail: "." },
              ],
            },
            {
              sentence: "Em bé đang ngủ.",
              translation: "寶寶正在睡覺。",
              segments: [
                { text: "Em bé", meaning: "嬰兒/寶寶", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ngủ", meaning: "睡", tail: "." },
              ],
            },
          ],
          usage_note: "祝人晚安說 Chúc ngủ ngon。",
          image_file: "sleep.png",
        },
        {
          id: "v-50",
          term_zh: "寄送",
          related_terms: [
            {
              term_target: "Gửi",
              pronunciation: ["/gɨj/"],
              specific_note: "",
              segments: [{ text: "Gửi", meaning: "寄", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Gửi email cho tôi.",
              translation: "寄Email給我。",
              segments: [
                { text: "Gửi", meaning: "寄", tail: " " },
                { text: "email", meaning: "電郵", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Gửi tin nhắn.",
              translation: "傳(寄)訊息。",
              segments: [
                { text: "Gửi", meaning: "傳/寄", tail: " " },
                { text: "tin nhắn", meaning: "訊息", tail: "." },
              ],
            },
            {
              sentence: "Tôi đã gửi quà cho bạn.",
              translation: "我已經寄禮物給你了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "gửi", meaning: "寄", tail: " " },
                { text: "quà", meaning: "禮物", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
          ],
          usage_note: "寄信、傳訊息、寄包裹都用 Gửi。",
          image_file: "send.png",
        },
        {
          id: "v-51",
          term_zh: "開車",
          related_terms: [
            {
              term_target: "Lái xe",
              pronunciation: ["/laj sɛ/"],
              specific_note: "駕駛",
              segments: [
                { text: "Lái", meaning: "駕駛", tail: " " },
                { text: "xe", meaning: "車", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi biết lái xe.",
              translation: "我會開車。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "會/懂", tail: " " },
                { text: "lái xe", meaning: "開車", tail: "." },
              ],
            },
            {
              sentence: "Lái xe cẩn thận nhé.",
              translation: "開車小心喔。",
              segments: [
                { text: "Lái xe", meaning: "開車", tail: " " },
                { text: "cẩn thận", meaning: "小心/謹慎", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy đang lái xe.",
              translation: "他正在開車。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "lái xe", meaning: "開車", tail: "." },
              ],
            },
          ],
          usage_note: "Lái 也可以指駕駛船、飛機。",
          image_file: "drive.png",
        },
        {
          id: "v-52",
          term_zh: "讀書 / 學習",
          related_terms: [
            {
              term_target: "Học",
              pronunciation: ["/hawk/"],
              specific_note: "",
              segments: [{ text: "Học", meaning: "學", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Học hành chăm chỉ.",
              translation: "用功讀書(學習)。",
              segments: [
                { text: "Học hành", meaning: "學習", tail: " " },
                { text: "chăm chỉ", meaning: "勤奮/認真", tail: "." },
              ],
            },
            {
              sentence: "Tôi học tiếng Việt.",
              translation: "我學越南語。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "học", meaning: "學", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy đang ôn thi.",
              translation: "她正在複習考試(讀書)。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ôn", meaning: "溫習", tail: " " },
                { text: "thi", meaning: "考試", tail: "." },
              ],
            },
          ],
          usage_note: "Học 是廣泛的學習。",
          image_file: "study.png",
        },
        {
          id: "v-53",
          term_zh: "回去",
          related_terms: [
            {
              term_target: "Về",
              pronunciation: ["/ve/"],
              specific_note: "回(家/國)",
              segments: [{ text: "Về", meaning: "回", tail: "" }],
            },
            {
              term_target: "Quay lại",
              pronunciation: ["/kwaj laj/"],
              specific_note: "返回/轉回",
              segments: [
                { text: "Quay", meaning: "轉", tail: " " },
                { text: "lại", meaning: "回", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn về nhà.",
              translation: "我想回家。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "về", meaning: "回", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Về chỗ ngồi đi.",
              translation: "回你的座位去。",
              segments: [
                { text: "Về", meaning: "回", tail: " " },
                { text: "chỗ ngồi", meaning: "座位", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Chúng ta quay lại thôi.",
              translation: "我們折返(回去)吧。",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "quay lại", meaning: "返回", tail: " " },
                { text: "thôi", meaning: "吧", tail: "." },
              ],
            },
          ],
          usage_note: "回家一定用 Về，走回頭路用 Quay lại。",
          image_file: "go_back.png",
        },
        {
          id: "v-54",
          term_zh: "了解 / 懂",
          related_terms: [
            {
              term_target: "Hiểu",
              pronunciation: ["/hiəw/"],
              specific_note: "",
              segments: [{ text: "Hiểu", meaning: "懂", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi hiểu rồi.",
              translation: "我懂了(了解了)。",
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
              sentence: "Tôi không hiểu tiếng Pháp.",
              translation: "我不懂法文。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "hiểu", meaning: "懂", tail: " " },
                { text: "tiếng Pháp", meaning: "法語", tail: "." },
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
      name: "常用形容詞 (越南語)",
      items: [
        {
          id: "adj-01",
          term_zh: "好的",
          related_terms: [
            {
              term_target: "Tốt",
              pronunciation: ["/tot/"],
              specific_note: "品質好/人好",
              segments: [{ text: "Tốt", meaning: "好", tail: "" }],
            },
            {
              term_target: "Ngon",
              pronunciation: ["/ŋɔn/"],
              specific_note: "好吃/好喝",
              segments: [{ text: "Ngon", meaning: "美味", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Người này rất tốt.",
              translation: "這個人很好。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Chúc một ngày tốt lành.",
              translation: "祝你有美好的一天。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "một", meaning: "一個", tail: " " },
                { text: "ngày", meaning: "天", tail: " " },
                { text: "tốt lành", meaning: "美好/吉祥", tail: "." },
              ],
            },
            {
              sentence: "Món này ngon quá!",
              translation: "這道菜太好吃了！(食物的好用 Ngon)。",
              segments: [
                { text: "Món", meaning: "道(菜)", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "quá", meaning: "太", tail: "!" },
              ],
            },
          ],
          usage_note: "人品好用 Tốt，食物好用 Ngon，能力好用 Giỏi。",
          image_file: "good.png",
        },
        {
          id: "adj-02",
          term_zh: "壞的",
          related_terms: [
            {
              term_target: "Xấu",
              pronunciation: ["/səw/"],
              specific_note: "品德/外表/天氣",
              segments: [{ text: "Xấu", meaning: "壞/醜", tail: "" }],
            },
            {
              term_target: "Hư",
              pronunciation: ["/hɨ/"],
              specific_note: "損壞/變質",
              segments: [{ text: "Hư", meaning: "壞掉", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hôm nay trời xấu.",
              translation: "今天天氣不好(壞)。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "trời", meaning: "天", tail: " " },
                { text: "xấu", meaning: "壞", tail: "." },
              ],
            },
            {
              sentence: "Người xấu.",
              translation: "壞人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "xấu", meaning: "壞", tail: "." },
              ],
            },
            {
              sentence: "Xe của tôi bị hư rồi.",
              translation: "我的車壞掉了。",
              segments: [
                { text: "Xe", meaning: "車", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "bị", meaning: "被/遭", tail: " " },
                { text: "hư", meaning: "壞", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "Xấu 還有「醜」的意思。",
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
              sentence: "Chúc mừng năm mới!",
              translation: "新年快樂！",
              segments: [
                { text: "Chúc mừng", meaning: "祝賀", tail: " " },
                { text: "năm", meaning: "年", tail: " " },
                { text: "mới", meaning: "新", tail: "!" },
              ],
            },
            {
              sentence: "Tôi có điện thoại mới.",
              translation: "我有新手機。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "điện thoại", meaning: "電話", tail: " " },
                { text: "mới", meaning: "新", tail: "." },
              ],
            },
            {
              sentence: "Bạn mới đến à?",
              translation: "你剛(新)到的嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "mới", meaning: "剛剛/新", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "à", meaning: "啊(語助詞)", tail: "?" },
              ],
            },
          ],
          usage_note: "除了形容詞，Mới 也當副詞「剛剛」。",
          image_file: "new.png",
        },
        {
          id: "adj-04",
          term_zh: "第一 / 首先",
          related_terms: [
            {
              term_target: "Đầu tiên",
              pronunciation: ["/ɗəw tiən/"],
              specific_note: "時間/順序",
              segments: [
                { text: "Đầu", meaning: "頭", tail: " " },
                { text: "tiên", meaning: "先", tail: "" },
              ],
            },
            {
              term_target: "Thứ nhất",
              pronunciation: ["/tʰɨ ɲət/"],
              specific_note: "排名",
              segments: [
                { text: "Thứ", meaning: "第", tail: " " },
                { text: "nhất", meaning: "一", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đây là lần đầu tiên.",
              translation: "這是第一次。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "lần", meaning: "次", tail: " " },
                { text: "đầu tiên", meaning: "首先/第一", tail: "." },
              ],
            },
            {
              sentence: "Ai là người đầu tiên?",
              translation: "誰是第一個人？",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "đầu tiên", meaning: "第一", tail: "?" },
              ],
            },
            {
              sentence: "Đứng thứ nhất.",
              translation: "排名第一。",
              segments: [
                { text: "Đứng", meaning: "站/位居", tail: " " },
                { text: "thứ nhất", meaning: "第一", tail: "." },
              ],
            },
          ],
          usage_note: "第一次說 Lần đầu tiên，第一名說 Thứ nhất。",
          image_file: "first.png",
        },
        {
          id: "adj-05",
          term_zh: "上一個 / 最後",
          related_terms: [
            {
              term_target: "Trước",
              pronunciation: ["/tʃɨək/"],
              specific_note: "之前的(Last week)",
              segments: [{ text: "Trước", meaning: "前/先", tail: "" }],
            },
            {
              term_target: "Cuối cùng",
              pronunciation: ["/kwoj kuŋ͡m/"],
              specific_note: "最終的(Final)",
              segments: [
                { text: "Cuối", meaning: "末/底", tail: " " },
                { text: "cùng", meaning: "窮盡", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tuần trước tôi đi Đà Nẵng.",
              translation: "上週我去峴港。",
              segments: [
                { text: "Tuần", meaning: "週", tail: " " },
                { text: "trước", meaning: "前/上", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "Đà Nẵng", meaning: "峴港", tail: "." },
              ],
            },
            {
              sentence: "Đây là cơ hội cuối cùng.",
              translation: "這是最後一次機會。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "cơ hội", meaning: "機會", tail: " " },
                { text: "cuối cùng", meaning: "最後", tail: "." },
              ],
            },
            {
              sentence: "Tháng trước.",
              translation: "上個月。",
              segments: [
                { text: "Tháng", meaning: "月", tail: " " },
                { text: "trước", meaning: "前/上", tail: "." },
              ],
            },
          ],
          usage_note:
            "時間的「上一個」用 Trước (前)，順序的「最後」用 Cuối cùng。",
          image_file: "last.png",
        },
        {
          id: "adj-06",
          term_zh: "下一個",
          related_terms: [
            {
              term_target: "Sau",
              pronunciation: ["/saw/"],
              specific_note: "時間(Next week)",
              segments: [{ text: "Sau", meaning: "後", tail: "" }],
            },
            {
              term_target: "Tiếp theo",
              pronunciation: ["/tiəp tʰɛw/"],
              specific_note: "順序(Next one)",
              segments: [
                { text: "Tiếp", meaning: "接", tail: " " },
                { text: "theo", meaning: "跟隨", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hẹn gặp lại tuần sau.",
              translation: "下週見。",
              segments: [
                { text: "Hẹn", meaning: "約", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "tuần", meaning: "週", tail: " " },
                { text: "sau", meaning: "後/下", tail: "." },
              ],
            },
            {
              sentence: "Ai là người tiếp theo?",
              translation: "下一位是誰？",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "tiếp theo", meaning: "接下來", tail: "?" },
              ],
            },
            {
              sentence: "Trạm kế tiếp.",
              translation: "下一站 (公車/捷運廣播常用 Kế tiếp)。",
              segments: [
                { text: "Trạm", meaning: "站", tail: " " },
                { text: "kế tiếp", meaning: "繼/接續", tail: "." },
              ],
            },
          ],
          usage_note: "時間用 Sau (後)，排隊順序用 Tiếp theo。",
          image_file: "next.png",
        },
        {
          id: "adj-07",
          term_zh: "長的 / 久的",
          related_terms: [
            {
              term_target: "Dài",
              pronunciation: ["/zaːj/"],
              specific_note: "長度",
              segments: [{ text: "Dài", meaning: "長", tail: "" }],
            },
            {
              term_target: "Lâu",
              pronunciation: ["/ləw/"],
              specific_note: "時間",
              segments: [{ text: "Lâu", meaning: "久", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tóc cô ấy rất dài.",
              translation: "她的頭髮很長。",
              segments: [
                { text: "Tóc", meaning: "頭髮", tail: " " },
                { text: "cô ấy", meaning: "她", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "dài", meaning: "長", tail: "." },
              ],
            },
            {
              sentence: "Đã bao lâu rồi?",
              translation: "已經多久了？",
              segments: [
                { text: "Đã", meaning: "已經", tail: " " },
                { text: "bao", meaning: "多少", tail: " " },
                { text: "lâu", meaning: "久", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
            {
              sentence: "Chờ lâu quá.",
              translation: "等太久了。",
              segments: [
                { text: "Chờ", meaning: "等", tail: " " },
                { text: "lâu", meaning: "久", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
          ],
          usage_note: "Dài 指物體長度，Lâu 指時間長度。",
          image_file: "long.png",
        },
        {
          id: "adj-08",
          term_zh: "大的",
          related_terms: [
            {
              term_target: "To",
              pronunciation: ["/tɔ/"],
              specific_note: "體積(北部常用)",
              segments: [{ text: "To", meaning: "大", tail: "" }],
            },
            {
              term_target: "Lớn",
              pronunciation: ["/ləːn/"],
              specific_note: "規模/年紀(南部)",
              segments: [{ text: "Lớn", meaning: "大", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái nhà này to quá.",
              translation: "這間房子好大。",
              segments: [
                { text: "Cái", meaning: "間", tail: " " },
                { text: "nhà", meaning: "房", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "to", meaning: "大", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy lớn hơn tôi.",
              translation: "他比我大 (年紀)。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "lớn", meaning: "大", tail: " " },
                { text: "hơn", meaning: "比/更", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Thành phố lớn.",
              translation: "大城市。",
              segments: [
                { text: "Thành phố", meaning: "城市", tail: " " },
                { text: "lớn", meaning: "大", tail: "." },
              ],
            },
          ],
          usage_note: "To 指具體大小，Lớn 可指抽象規模或年紀。",
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
              specific_note: "可愛/年紀小",
              segments: [{ text: "Bé", meaning: "小/幼", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này nhỏ quá.",
              translation: "這個太小了 (尺寸)。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "nhỏ", meaning: "小", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Em bé dễ thương.",
              translation: "小寶寶很可愛。",
              segments: [
                { text: "Em bé", meaning: "小孩/嬰兒", tail: " " },
                { text: "dễ thương", meaning: "可愛", tail: "." },
              ],
            },
            {
              sentence: "Chuyện nhỏ.",
              translation: "小事 (沒問題)。",
              segments: [
                { text: "Chuyện", meaning: "事情", tail: " " },
                { text: "nhỏ", meaning: "小", tail: "." },
              ],
            },
          ],
          usage_note: "Nhỏ 是通用的小，Bé 常用在小孩 (Em bé)。",
          image_file: "small.png",
        },
        {
          id: "adj-10",
          term_zh: "多的",
          related_terms: [
            {
              term_target: "Nhiều",
              pronunciation: ["/ɲiəw/"],
              specific_note: "",
              segments: [{ text: "Nhiều", meaning: "多", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ở đây có nhiều người.",
              translation: "這裡有很多人。",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Bao nhiêu tiền?",
              translation: "多少錢？(包=包容/多大範圍, Nhiêu=多)。",
              segments: [
                { text: "Bao nhiêu", meaning: "多少", tail: " " },
                { text: "tiền", meaning: "錢", tail: "?" },
              ],
            },
            {
              sentence: "Cảm ơn nhiều.",
              translation: "多謝 (非常感謝)。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "nhiều", meaning: "多", tail: "." },
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
              term_target: "Cao",
              pronunciation: ["/kaːw/"],
              specific_note: "",
              segments: [{ text: "Cao", meaning: "高", tail: "" }],
            },
          ],
          examples: [
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
              sentence: "Tòa nhà cao tầng.",
              translation: "高樓大廈。",
              segments: [
                { text: "Tòa nhà", meaning: "大樓", tail: " " },
                { text: "cao", meaning: "高", tail: " " },
                { text: "tầng", meaning: "層", tail: "." },
              ],
            },
            {
              sentence: "Bạn cao bao nhiêu?",
              translation: "你多高？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "cao", meaning: "高", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: "?" },
              ],
            },
          ],
          usage_note: "身高或物體高度。",
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
              sentence: "Cô ấy còn trẻ.",
              translation: "她還年輕。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "còn", meaning: "還", tail: " " },
                { text: "trẻ", meaning: "年輕", tail: "." },
              ],
            },
            {
              sentence: "Trẻ em.",
              translation: "兒童 (年輕的人)。",
              segments: [
                { text: "Trẻ", meaning: "幼/年輕", tail: " " },
                { text: "em", meaning: "弟妹/孩子", tail: "." },
              ],
            },
            {
              sentence: "Nhìn bạn rất trẻ.",
              translation: "你看起來很年輕。",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "trẻ", meaning: "年輕", tail: "." },
              ],
            },
          ],
          usage_note: "年紀小。",
          image_file: "young.png",
        },
        {
          id: "adj-13",
          term_zh: "老的 / 舊的",
          related_terms: [
            {
              term_target: "Già",
              pronunciation: ["/za/"],
              specific_note: "人(老)",
              segments: [{ text: "Già", meaning: "老", tail: "" }],
            },
            {
              term_target: "Cũ",
              pronunciation: ["/ku/"],
              specific_note: "物品(舊)",
              segments: [{ text: "Cũ", meaning: "舊", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ông ấy già rồi.",
              translation: "他老了 (指人)。",
              segments: [
                { text: "Ông ấy", meaning: "他(老先生)", tail: " " },
                { text: "già", meaning: "老", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Sách cũ.",
              translation: "舊書 (指物品)。",
              segments: [
                { text: "Sách", meaning: "書", tail: " " },
                { text: "cũ", meaning: "舊", tail: "." },
              ],
            },
            {
              sentence: "Người già.",
              translation: "老人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "già", meaning: "老", tail: "." },
              ],
            },
          ],
          usage_note: "非常重要：人老用 Già，東西舊用 Cũ，不可混用。",
          image_file: "old.png",
        },
        {
          id: "adj-14",
          term_zh: "近的",
          related_terms: [
            {
              term_target: "Gần",
              pronunciation: ["/gən/"],
              specific_note: "",
              segments: [{ text: "Gần", meaning: "近", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhà tôi ở gần đây.",
              translation: "我家在這附近(近這裡)。",
              segments: [
                { text: "Nhà", meaning: "家", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "gần", meaning: "近", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Có gần không?",
              translation: "近嗎？",
              segments: [
                { text: "Có", meaning: "有/是否", tail: " " },
                { text: "gần", meaning: "近", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Gần xong rồi.",
              translation: "快(將近)做完了。",
              segments: [
                { text: "Gần", meaning: "將近", tail: " " },
                { text: "xong", meaning: "完", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
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
              term_target: "Xa",
              pronunciation: ["/sa/"],
              specific_note: "",
              segments: [{ text: "Xa", meaning: "遠", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhà tôi rất xa.",
              translation: "我家很遠。",
              segments: [
                { text: "Nhà", meaning: "家", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "xa", meaning: "遠", tail: "." },
              ],
            },
            {
              sentence: "Đi xa.",
              translation: "出遠門 (去遠)。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "xa", meaning: "遠", tail: "." },
              ],
            },
            {
              sentence: "Cách đây không xa.",
              translation: "離這裡不遠。",
              segments: [
                { text: "Cách", meaning: "距離", tail: " " },
                { text: "đây", meaning: "這", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "xa", meaning: "遠", tail: "." },
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
                { text: "lên", meaning: "起來/上", tail: "!" },
              ],
            },
            {
              sentence: "Thời gian trôi nhanh quá.",
              translation: "時間過得太快了。",
              segments: [
                { text: "Thời gian", meaning: "時間", tail: " " },
                { text: "trôi", meaning: "流逝/漂", tail: " " },
                { text: "nhanh", meaning: "快", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
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
              term_target: "Chậm",
              pronunciation: ["/tʃəm/"],
              specific_note: "",
              segments: [{ text: "Chậm", meaning: "慢", tail: "" }],
            },
          ],
          examples: [
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
              sentence: "Đi chậm thôi.",
              translation: "走慢一點就好。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "thôi", meaning: "罷了/就好", tail: "." },
              ],
            },
            {
              sentence: "Mạng chậm quá.",
              translation: "網路太慢了。",
              segments: [
                { text: "Mạng", meaning: "網絡", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
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
              term_target: "Nóng",
              pronunciation: ["/nawŋ͡m/"],
              specific_note: "",
              segments: [{ text: "Nóng", meaning: "熱", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hôm nay trời nóng.",
              translation: "今天天氣熱。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "trời", meaning: "天", tail: " " },
                { text: "nóng", meaning: "熱", tail: "." },
              ],
            },
            {
              sentence: "Nước nóng.",
              translation: "熱水。",
              segments: [
                { text: "Nước", meaning: "水", tail: " " },
                { text: "nóng", meaning: "熱", tail: "." },
              ],
            },
            {
              sentence: "Cẩn thận, nóng đấy!",
              translation: "小心，很燙喔！",
              segments: [
                { text: "Cẩn thận", meaning: "小心", tail: ", " },
                { text: "nóng", meaning: "熱/燙", tail: " " },
                { text: "đấy", meaning: "那(語助詞)", tail: "!" },
              ],
            },
          ],
          usage_note: "天氣熱或物體燙都用 Nóng。",
          image_file: "hot.png",
        },
        {
          id: "adj-19",
          term_zh: "冷的",
          related_terms: [
            {
              term_target: "Lạnh",
              pronunciation: ["/laɲ/"],
              specific_note: "",
              segments: [{ text: "Lạnh", meaning: "冷", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Trời lạnh quá.",
              translation: "天氣好冷。",
              segments: [
                { text: "Trời", meaning: "天", tail: " " },
                { text: "lạnh", meaning: "冷", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Tôi cảm thấy lạnh.",
              translation: "我覺得冷。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cảm thấy", meaning: "覺得", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
              ],
            },
            {
              sentence: "Nước lạnh.",
              translation: "冷水/冰水。",
              segments: [
                { text: "Nước", meaning: "水", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
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
              term_target: "Sạch",
              pronunciation: ["/sat͡ʃ/"],
              specific_note: "",
              segments: [{ text: "Sạch", meaning: "乾淨", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Phòng sạch sẽ.",
              translation: "房間乾淨 (Sạch sẽ 是 Sạch 的加強詞)。",
              segments: [
                { text: "Phòng", meaning: "房", tail: " " },
                { text: "sạch sẽ", meaning: "乾淨", tail: "." },
              ],
            },
            {
              sentence: "Nước này sạch không?",
              translation: "這水乾淨嗎？",
              segments: [
                { text: "Nước", meaning: "水", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "sạch", meaning: "乾淨", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Ăn ở sạch sẽ.",
              translation: "愛乾淨 (生活習慣好)。",
              segments: [
                { text: "Ăn ở", meaning: "生活/起居", tail: " " },
                { text: "sạch sẽ", meaning: "乾淨", tail: "." },
              ],
            },
          ],
          usage_note: "口語常說 Sạch sẽ。",
          image_file: "clean.png",
        },
        {
          id: "adj-21",
          term_zh: "髒的",
          related_terms: [
            {
              term_target: "Bẩn",
              pronunciation: ["/bən/"],
              specific_note: "髒(北部/通用)",
              segments: [{ text: "Bẩn", meaning: "髒", tail: "" }],
            },
            {
              term_target: "Dơ",
              pronunciation: ["/jə/"],
              specific_note: "髒(南部)",
              segments: [{ text: "Dơ", meaning: "髒", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tay bạn bẩn quá.",
              translation: "你的手好髒。",
              segments: [
                { text: "Tay", meaning: "手", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "bẩn", meaning: "髒", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Đừng chạm vào, dơ lắm.",
              translation: "別碰，很髒 (南部口語)。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "chạm", meaning: "碰/觸", tail: " " },
                { text: "vào", meaning: "進", tail: ", " },
                { text: "dơ", meaning: "髒", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Quần áo bẩn.",
              translation: "髒衣服。",
              segments: [
                { text: "Quần áo", meaning: "衣服", tail: " " },
                { text: "bẩn", meaning: "髒", tail: "." },
              ],
            },
          ],
          usage_note: "Bẩn 和 Dơ 意思完全一樣。",
          image_file: "dirty.png",
        },
        {
          id: "adj-22",
          term_zh: "簡單的",
          related_terms: [
            {
              term_target: "Dễ",
              pronunciation: ["/ze/"],
              specific_note: "容易",
              segments: [{ text: "Dễ", meaning: "簡單", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tiếng Việt không dễ.",
              translation: "越南語不簡單。",
              segments: [
                { text: "Tiếng Việt", meaning: "越南語", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "dễ", meaning: "簡單", tail: "." },
              ],
            },
            {
              sentence: "Bài này dễ lắm.",
              translation: "這題(課)很簡單。",
              segments: [
                { text: "Bài", meaning: "課/題", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "dễ", meaning: "簡單", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Dễ thương.",
              translation: "可愛 (字面義：容易受傷/憐愛)。",
              segments: [
                { text: "Dễ", meaning: "易", tail: " " },
                { text: "thương", meaning: "愛/憐", tail: "." },
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
              term_target: "Khó",
              pronunciation: ["/xɔ/"],
              specific_note: "難",
              segments: [{ text: "Khó", meaning: "難", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Việc này rất khó.",
              translation: "這件事很難。",
              segments: [
                { text: "Việc", meaning: "事/工作", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "khó", meaning: "難", tail: "." },
              ],
            },
            {
              sentence: "Khó nói lắm.",
              translation: "很難啟齒(說)。",
              segments: [
                { text: "Khó", meaning: "難", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Khó tính.",
              translation: "難搞 / 挑惕 (指個性)。",
              segments: [
                { text: "Khó", meaning: "難", tail: " " },
                { text: "tính", meaning: "個性", tail: "." },
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
              term_target: "Đúng",
              pronunciation: ["/ɗuŋ͡m/"],
              specific_note: "對",
              segments: [{ text: "Đúng", meaning: "對", tail: "" }],
            },
            {
              term_target: "Chính xác",
              pronunciation: ["/tʃiɲ sak/"],
              specific_note: "精確",
              segments: [{ text: "Chính xác", meaning: "準確", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đúng rồi!",
              translation: "對了！/ 沒錯！",
              segments: [
                { text: "Đúng", meaning: "對", tail: " " },
                { text: "rồi", meaning: "了", tail: "!" },
              ],
            },
            {
              sentence: "Bạn nói đúng.",
              translation: "你說得對。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "đúng", meaning: "對", tail: "." },
              ],
            },
            {
              sentence: "Không đúng.",
              translation: "不對。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "đúng", meaning: "對", tail: "." },
              ],
            },
          ],
          usage_note: "口語最常用 Đúng。",
          image_file: "correct.png",
        },
        {
          id: "adj-25",
          term_zh: "錯誤的",
          related_terms: [
            {
              term_target: "Sai",
              pronunciation: ["/saj/"],
              specific_note: "錯",
              segments: [{ text: "Sai", meaning: "錯", tail: "" }],
            },
            {
              term_target: "Nhầm",
              pronunciation: ["/ɲəm/"],
              specific_note: "搞混/弄錯",
              segments: [{ text: "Nhầm", meaning: "誤", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn làm sai rồi.",
              translation: "你做錯了。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "sai", meaning: "錯", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi, nhầm số.",
              translation: "抱歉，打錯(號碼)了。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "nhầm", meaning: "錯/誤", tail: " " },
                { text: "số", meaning: "號碼", tail: "." },
              ],
            },
            {
              sentence: "Đúng hay sai?",
              translation: "對還是錯？",
              segments: [
                { text: "Đúng", meaning: "對", tail: " " },
                { text: "hay", meaning: "或", tail: " " },
                { text: "sai", meaning: "錯", tail: "?" },
              ],
            },
          ],
          usage_note: "行為錯誤用 Sai，不小心搞混用 Nhầm。",
          image_file: "wrong.png",
        },
        {
          id: "adj-26",
          term_zh: "重要的",
          related_terms: [
            {
              term_target: "Quan trọng",
              pronunciation: ["/kwan tʃawŋ͡m/"],
              specific_note: "漢語:關重",
              segments: [
                { text: "Quan", meaning: "關", tail: " " },
                { text: "trọng", meaning: "重", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Việc này rất quan trọng.",
              translation: "這件事很重要。",
              segments: [
                { text: "Việc", meaning: "事", tail: " " },
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
            {
              sentence: "Không quan trọng đâu.",
              translation: "沒那麼重要啦。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "quan trọng", meaning: "重要", tail: " " },
                { text: "đâu", meaning: "哪(語助詞)", tail: "." },
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
              term_target: "Khác",
              pronunciation: ["/xak/"],
              specific_note: "",
              segments: [{ text: "Khác", meaning: "異/其他", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn cái khác.",
              translation: "我想要別的(另一個)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "khác", meaning: "其他/不同", tail: "." },
              ],
            },
            {
              sentence: "Hai cái này khác nhau.",
              translation: "這兩個不一樣。",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "khác", meaning: "不同", tail: " " },
                { text: "nhau", meaning: "彼此/互相", tail: "." },
              ],
            },
            {
              sentence: "Không khác gì.",
              translation: "沒什麼兩樣 (沒差)。",
              segments: [
                { text: "Không", meaning: "沒", tail: " " },
                { text: "khác", meaning: "差", tail: " " },
                { text: "gì", meaning: "什麼", tail: "." },
              ],
            },
          ],
          usage_note: "差異。",
          image_file: "different.png",
        },
        {
          id: "adj-28",
          term_zh: "真的 / 真實的",
          related_terms: [
            {
              term_target: "Thật",
              pronunciation: ["/tʰət/"],
              specific_note: "真實",
              segments: [{ text: "Thật", meaning: "真/實", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Thật không?",
              translation: "真的嗎？",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "không", meaning: "不(反問)", tail: "?" },
              ],
            },
            {
              sentence: "Nói thật đi.",
              translation: "說實話吧。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "thật", meaning: "實話", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Hàng thật.",
              translation: "正版貨 (真貨)。",
              segments: [
                { text: "Hàng", meaning: "貨/商品", tail: " " },
                { text: "thật", meaning: "真", tail: "." },
              ],
            },
          ],
          usage_note: "Thật 放在形容詞前也表示「真...」(如 Thật đẹp 真美)。",
          image_file: "real.png",
        },
        {
          id: "adj-29",
          term_zh: "有趣的",
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
              specific_note: "精彩/好看",
              segments: [{ text: "Hay", meaning: "好/棒", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Quyển sách này rất hay.",
              translation: "這本書很有趣(好看)。",
              segments: [
                { text: "Quyển sách", meaning: "書本", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "hay", meaning: "棒/精彩", tail: "." },
              ],
            },
            {
              sentence: "Chuyện này thú vị đấy.",
              translation: "這件事很有趣喔。",
              segments: [
                { text: "Chuyện", meaning: "事", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "thú vị", meaning: "趣味", tail: " " },
                { text: "đấy", meaning: "喔(語助詞)", tail: "." },
              ],
            },
            {
              sentence: "Phim hay lắm.",
              translation: "電影很好看。",
              segments: [
                { text: "Phim", meaning: "電影", tail: " " },
                { text: "hay", meaning: "精彩", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
          ],
          usage_note: "書/電影/音樂通常用 Hay；事情/想法用 Thú vị。",
          image_file: "interesting.png",
        },
        {
          id: "adj-30",
          term_zh: "美麗的",
          related_terms: [
            {
              term_target: "Đẹp",
              pronunciation: ["/ɗɛp/"],
              specific_note: "通用",
              segments: [{ text: "Đẹp", meaning: "美/漂亮", tail: "" }],
            },
            {
              term_target: "Xinh",
              pronunciation: ["/siɲ/"],
              specific_note: "可愛/俏麗",
              segments: [{ text: "Xinh", meaning: "漂亮", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cô ấy đẹp quá.",
              translation: "她好美。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "đẹp", meaning: "美", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Cảnh đẹp.",
              translation: "風景優美。",
              segments: [
                { text: "Cảnh", meaning: "風景", tail: " " },
                { text: "đẹp", meaning: "美", tail: "." },
              ],
            },
            {
              sentence: "Em gái bạn xinh thế.",
              translation: "你妹妹真漂亮(俏)。",
              segments: [
                { text: "Em gái", meaning: "妹妹", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "xinh", meaning: "俏/美", tail: " " },
                { text: "thế", meaning: "那樣/真", tail: "." },
              ],
            },
          ],
          usage_note: "形容人或景物。Đẹp 比較正式/大氣，Xinh 比較嬌小/可愛。",
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
              sentence: "Cái này rẻ quá.",
              translation: "這個太便宜了。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "rẻ", meaning: "便宜", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Có cái nào rẻ hơn không?",
              translation: "有更便宜的嗎？",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "cái nào", meaning: "哪個", tail: " " },
                { text: "rẻ", meaning: "便宜", tail: " " },
                { text: "hơn", meaning: "更/比", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Giá rẻ.",
              translation: "價格便宜。",
              segments: [
                { text: "Giá", meaning: "價格", tail: " " },
                { text: "rẻ", meaning: "便宜", tail: "." },
              ],
            },
          ],
          usage_note: "殺價必備單字。",
          image_file: "cheap.png",
        },
        {
          id: "adj-32",
          term_zh: "昂貴的",
          related_terms: [
            {
              term_target: "Đắt",
              pronunciation: ["/ɗat/"],
              specific_note: "貴(北部/通用)",
              segments: [{ text: "Đắt", meaning: "貴", tail: "" }],
            },
            {
              term_target: "Mắc",
              pronunciation: ["/mak/"],
              specific_note: "貴(南部)",
              segments: [{ text: "Mắc", meaning: "貴", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đắt quá, giảm giá đi.",
              translation: "太貴了，打折吧。",
              segments: [
                { text: "Đắt", meaning: "貴", tail: " " },
                { text: "quá", meaning: "太", tail: ", " },
                { text: "giảm giá", meaning: "減價", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Cái này hơi mắc.",
              translation: "這個有點貴 (南部口語)。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "hơi", meaning: "稍微", tail: " " },
                { text: "mắc", meaning: "貴", tail: "." },
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
          ],
          usage_note: "北越說 Đắt，南越說 Mắc。",
          image_file: "expensive.png",
        },
        {
          id: "adj-33",
          term_zh: "飢餓的",
          related_terms: [
            {
              term_target: "Đói",
              pronunciation: ["/ɗɔj/"],
              specific_note: "",
              segments: [{ text: "Đói", meaning: "餓", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đói bụng quá.",
              translation: "我肚子好餓。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đói", meaning: "餓", tail: " " },
                { text: "bụng", meaning: "肚子", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Bạn đói chưa?",
              translation: "你餓了嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đói", meaning: "餓", tail: " " },
                { text: "chưa", meaning: "還沒/了嗎", tail: "?" },
              ],
            },
            {
              sentence: "Đói mềm người.",
              translation: "餓得發軟 (餓扁了)。",
              segments: [
                { text: "Đói", meaning: "餓", tail: " " },
                { text: "mềm", meaning: "軟", tail: " " },
                { text: "người", meaning: "人/身體", tail: "." },
              ],
            },
          ],
          usage_note: "可以單說 Đói 或完整說 Đói bụng (餓肚子)。",
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
              sentence: "Hôm nay tôi rất mệt.",
              translation: "我今天很累。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "mệt", meaning: "累", tail: "." },
              ],
            },
            {
              sentence: "Nhìn bạn có vẻ mệt.",
              translation: "你看起來好像很累。",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "có vẻ", meaning: "看起來/似乎", tail: " " },
                { text: "mệt", meaning: "累", tail: "." },
              ],
            },
            {
              sentence: "Mệt mỏi quá.",
              translation: "太疲勞了。",
              segments: [
                { text: "Mệt mỏi", meaning: "疲憊", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
          ],
          usage_note: "身體或心理累都可用。",
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
              sentence: "Tôi đang bận.",
              translation: "我正在忙。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
              ],
            },
            {
              sentence: "Công việc bận rộn.",
              translation: "工作忙碌。",
              segments: [
                { text: "Công việc", meaning: "工作", tail: " " },
                { text: "bận rộn", meaning: "忙碌", tail: "." },
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
          usage_note: "沒空。",
          image_file: "busy.png",
        },
        {
          id: "adj-36",
          term_zh: "高興的",
          related_terms: [
            {
              term_target: "Vui",
              pronunciation: ["/vuj/"],
              specific_note: "開心",
              segments: [{ text: "Vui", meaning: "樂", tail: "" }],
            },
            {
              term_target: "Hạnh phúc",
              pronunciation: ["/haɲ fuk/"],
              specific_note: "幸福",
              segments: [{ text: "Hạnh phúc", meaning: "幸福", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi rất vui.",
              translation: "我很開心。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "開心", tail: "." },
              ],
            },
            {
              sentence: "Vui vẻ nhé!",
              translation: "玩得開心喔！(祝你愉快)。",
              segments: [
                { text: "Vui vẻ", meaning: "快樂/愉快", tail: " " },
                { text: "nhé", meaning: "喔", tail: "!" },
              ],
            },
            {
              sentence: "Tin vui.",
              translation: "好消息 (開心的消息)。",
              segments: [
                { text: "Tin", meaning: "消息", tail: " " },
                { text: "vui", meaning: "樂", tail: "." },
              ],
            },
          ],
          usage_note: "日常開心用 Vui。",
          image_file: "happy.png",
        },
        {
          id: "adj-37",
          term_zh: "悲傷的",
          related_terms: [
            {
              term_target: "Buồn",
              pronunciation: ["/buən/"],
              specific_note: "",
              segments: [{ text: "Buồn", meaning: "難過/悶", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sao bạn buồn vậy?",
              translation: "你為什麼那麼難過？",
              segments: [
                { text: "Sao", meaning: "為什麼", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "buồn", meaning: "難過", tail: " " },
                { text: "vậy", meaning: "那樣", tail: "?" },
              ],
            },
            {
              sentence: "Chuyện buồn.",
              translation: "悲傷的故事/事情。",
              segments: [
                { text: "Chuyện", meaning: "故事", tail: " " },
                { text: "buồn", meaning: "悲傷", tail: "." },
              ],
            },
            {
              sentence: "Đừng buồn nữa.",
              translation: "別再難過了。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "buồn", meaning: "難過", tail: " " },
                { text: "nữa", meaning: "再/更多", tail: "." },
              ],
            },
          ],
          usage_note: "無聊也可以說 Buồn (Buồn chán)。",
          image_file: "sad.png",
        },
        {
          id: "adj-38",
          term_zh: "相似的",
          related_terms: [
            {
              term_target: "Giống",
              pronunciation: ["/zoŋ͡m/"],
              specific_note: "像/同",
              segments: [{ text: "Giống", meaning: "像", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hai người nhìn giống nhau.",
              translation: "兩個人看起來很像。",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "nhìn", meaning: "看", tail: " " },
                { text: "giống", meaning: "像", tail: " " },
                { text: "nhau", meaning: "彼此", tail: "." },
              ],
            },
            {
              sentence: "Cái này giống cái kia.",
              translation: "這個跟那個很像。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "giống", meaning: "像", tail: " " },
                { text: "cái kia", meaning: "那個", tail: "." },
              ],
            },
            {
              sentence: "Bạn giống bố.",
              translation: "你像爸爸。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giống", meaning: "像", tail: " " },
                { text: "bố", meaning: "爸", tail: "." },
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
              term_target: "Nổi tiếng",
              pronunciation: ["/noj tiəŋ/"],
              specific_note: "知名",
              segments: [
                { text: "Nổi", meaning: "浮/起", tail: " " },
                { text: "tiếng", meaning: "名聲/聲音", tail: "" },
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
              sentence: "Nơi này rất nổi tiếng.",
              translation: "這地方很有名。",
              segments: [
                { text: "Nơi", meaning: "地方", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "nổi tiếng", meaning: "有名", tail: "." },
              ],
            },
            {
              sentence: "Món ăn nổi tiếng.",
              translation: "有名的菜(美食)。",
              segments: [
                { text: "Món ăn", meaning: "食物/菜", tail: " " },
                { text: "nổi tiếng", meaning: "有名", tail: "." },
              ],
            },
          ],
          usage_note: "Nổi tiếng (浮聲) = 聲名大噪。",
          image_file: "famous.png",
        },
        {
          id: "adj-40",
          term_zh: "外國的",
          related_terms: [
            {
              term_target: "Nước ngoài",
              pronunciation: ["/nɨək ŋwai/"],
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
                { text: "nước ngoài", meaning: "外國", tail: "." },
              ],
            },
            {
              sentence: "Đi du lịch nước ngoài.",
              translation: "去國外旅遊。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "du lịch", meaning: "旅遊", tail: " " },
                { text: "nước ngoài", meaning: "國外", tail: "." },
              ],
            },
            {
              sentence: "Công ty nước ngoài.",
              translation: "外商公司。",
              segments: [
                { text: "Công ty", meaning: "公司", tail: " " },
                { text: "nước ngoài", meaning: "國外", tail: "." },
              ],
            },
          ],
          usage_note: "Nước (國) + Ngoài (外)。",
          image_file: "foreign.png",
        },
        {
          id: "adj-41",
          term_zh: "聰明的",
          related_terms: [
            {
              term_target: "Thông minh",
              pronunciation: ["/tʰəwŋ͡m miɲ/"],
              specific_note: "智商高",
              segments: [
                { text: "Thông", meaning: "通", tail: " " },
                { text: "minh", meaning: "明", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cậu bé này rất thông minh.",
              translation: "這小男孩很聰明。",
              segments: [
                { text: "Cậu bé", meaning: "小男孩", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "thông minh", meaning: "聰明", tail: "." },
              ],
            },
            {
              sentence: "Con chó thông minh.",
              translation: "聰明的狗。",
              segments: [
                { text: "Con", meaning: "隻", tail: " " },
                { text: "chó", meaning: "狗", tail: " " },
                { text: "thông minh", meaning: "聰明", tail: "." },
              ],
            },
            {
              sentence: "Điện thoại thông minh.",
              translation: "智慧型手機 (Smart phone)。",
              segments: [
                { text: "Điện thoại", meaning: "電話", tail: " " },
                { text: "thông minh", meaning: "聰明/智慧", tail: "." },
              ],
            },
          ],
          usage_note: "形容人、動物或高科技產品。",
          image_file: "intelligent.png",
        },
        {
          id: "adj-42",
          term_zh: "危險的",
          related_terms: [
            {
              term_target: "Nguy hiểm",
              pronunciation: ["/ŋwi hiəm/"],
              specific_note: "漢語:危險",
              segments: [
                { text: "Nguy", meaning: "危", tail: " " },
                { text: "hiểm", meaning: "險", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chỗ này nguy hiểm lắm.",
              translation: "這裡很危險。",
              segments: [
                { text: "Chỗ", meaning: "地方", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "nguy hiểm", meaning: "危險", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
              ],
            },
            {
              sentence: "Cẩn thận, nguy hiểm!",
              translation: "小心，危險！",
              segments: [
                { text: "Cẩn thận", meaning: "小心", tail: ", " },
                { text: "nguy hiểm", meaning: "危險", tail: "!" },
              ],
            },
            {
              sentence: "Động vật nguy hiểm.",
              translation: "危險動物。",
              segments: [
                { text: "Động vật", meaning: "動物", tail: " " },
                { text: "nguy hiểm", meaning: "危險", tail: "." },
              ],
            },
          ],
          usage_note: "警示用語。",
          image_file: "dangerous.png",
        },
        {
          id: "adj-43",
          term_zh: "仁慈的 / 好心的",
          related_terms: [
            {
              term_target: "Tốt bụng",
              pronunciation: ["/tot buŋ͡m/"],
              specific_note: "心腸好",
              segments: [
                { text: "Tốt", meaning: "好", tail: " " },
                { text: "bụng", meaning: "肚子/心腸", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh ấy rất tốt bụng.",
              translation: "他非常好心。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "tốt bụng", meaning: "好心", tail: "." },
              ],
            },
            {
              sentence: "Người tốt bụng.",
              translation: "好心人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "tốt bụng", meaning: "好心", tail: "." },
              ],
            },
            {
              sentence: "Cảm ơn bạn, bạn tốt bụng quá.",
              translation: "謝謝你，你人真好。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "bạn", meaning: "你", tail: ", " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "tốt bụng", meaning: "好心", tail: " " },
                { text: "quá", meaning: "太/真", tail: "." },
              ],
            },
          ],
          usage_note: "越南人認為心思在肚子裡，所以好心叫「好肚」。",
          image_file: "kind.png",
        },
        {
          id: "adj-44",
          term_zh: "所有的 / 每一個",
          related_terms: [
            {
              term_target: "Mỗi",
              pronunciation: ["/məj/"],
              specific_note: "每一(個)",
              segments: [{ text: "Mỗi", meaning: "每", tail: "" }],
            },
            {
              term_target: "Mọi",
              pronunciation: ["/mɔj/"],
              specific_note: "所有/大家",
              segments: [{ text: "Mọi", meaning: "所有", tail: "" }],
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
              translation: "大家好 (所有的人)。",
              segments: [
                { text: "Chào", meaning: "招呼", tail: " " },
                { text: "mọi", meaning: "所有", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Mỗi người một cái.",
              translation: "一人一個 (每人一個)。",
              segments: [
                { text: "Mỗi", meaning: "每", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "cái", meaning: "個", tail: "." },
              ],
            },
          ],
          usage_note: "Mỗi 強調個體(Each)，Mọi 強調群體(Every/All)。",
          image_file: "every.png",
        },
        {
          id: "adj-45",
          term_zh: "喜愛的 / 最愛的",
          related_terms: [
            {
              term_target: "Yêu thích",
              pronunciation: ["/iəw tʰik/"],
              specific_note: "喜愛(形容詞)",
              segments: [
                { text: "Yêu", meaning: "愛", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "" },
              ],
            },
            {
              term_target: "Thích nhất",
              pronunciation: ["/tʰik ɲət/"],
              specific_note: "最喜歡(動詞片語)",
              segments: [
                { text: "Thích", meaning: "喜歡", tail: " " },
                { text: "nhất", meaning: "最", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Món ăn yêu thích của tôi.",
              translation: "我最喜愛的食物。",
              segments: [
                { text: "Món ăn", meaning: "食物", tail: " " },
                { text: "yêu thích", meaning: "喜愛", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Bạn thích màu gì nhất?",
              translation: "你最喜歡什麼顏色？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "màu", meaning: "顏色", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "nhất", meaning: "最", tail: "?" },
              ],
            },
            {
              sentence: "Đây là bài hát tôi thích nhất.",
              translation: "這是我最喜歡的一首歌。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "bài hát", meaning: "歌", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "nhất", meaning: "最", tail: "." },
              ],
            },
          ],
          usage_note:
            "口語中常用「Thích... nhất」(喜歡...最) 來表達 Favorite。",
          image_file: "favorite.png",
        },
        {
          id: "adj-46",
          term_zh: "美味的",
          related_terms: [
            {
              term_target: "Ngon",
              pronunciation: ["/ŋɔn/"],
              specific_note: "",
              segments: [{ text: "Ngon", meaning: "好吃/好喝", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Món này ngon quá!",
              translation: "這道菜太好吃了！",
              segments: [
                { text: "Món", meaning: "道(菜)", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "quá", meaning: "太/極", tail: "!" },
              ],
            },
            {
              sentence: "Nhìn ngon thế.",
              translation: "看起來真好吃。",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "thế", meaning: "那樣/真", tail: "." },
              ],
            },
            {
              sentence: "Chúc ngon miệng.",
              translation: "祝你用餐愉快 (祝好胃口)。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "ngon", meaning: "香/好", tail: " " },
                { text: "miệng", meaning: "嘴巴", tail: "." },
              ],
            },
          ],
          usage_note: "Ngon 既可以形容食物好吃，也可以形容飲料好喝。",
          image_file: "delicious.png",
        },
      ],
    },
    {
      id: "nouns",
      name: "常用名詞 (越南語)",
      items: [
        {
          id: "n-01",
          term_zh: "時間",
          related_terms: [
            {
              term_target: "Thời gian",
              pronunciation: ["/tʰəj zan/"],
              specific_note: "抽象概念",
              segments: [
                { text: "Thời", meaning: "時", tail: " " },
                { text: "gian", meaning: "間", tail: "" },
              ],
            },
            {
              term_target: "Giờ",
              pronunciation: ["/zə/"],
              specific_note: "時刻/點鐘",
              segments: [{ text: "Giờ", meaning: "點/小時", tail: "" }],
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
              sentence: "Tôi không có thời gian.",
              translation: "我沒有時間。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "沒有", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "thời gian", meaning: "時間", tail: "." },
              ],
            },
            {
              sentence: "Thời gian là vàng.",
              translation: "時間就是金錢 (字面: 時間是金子)。",
              segments: [
                { text: "Thời gian", meaning: "時間", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "vàng", meaning: "金子", tail: "." },
              ],
            },
          ],
          usage_note: "問時間用 Giờ，講空閒用 Thời gian。",
          image_file: "time.png",
        },
        {
          id: "n-02",
          term_zh: "人們 / 人",
          related_terms: [
            {
              term_target: "Người",
              pronunciation: ["/ŋɨəj/"],
              specific_note: "人",
              segments: [{ text: "Người", meaning: "人", tail: "" }],
            },
            {
              term_target: "Mọi người",
              pronunciation: ["/mɔj ŋɨəj/"],
              specific_note: "大家/人們",
              segments: [
                { text: "Mọi", meaning: "所有", tail: " " },
                { text: "người", meaning: "人", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đông người quá.",
              translation: "人好多 (太擠了)。",
              segments: [
                { text: "Đông", meaning: "擁擠/多", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Mọi người đang nói chuyện.",
              translation: "大家(人們)正在聊天。",
              segments: [
                { text: "Mọi người", meaning: "大家", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "nói chuyện", meaning: "聊天", tail: "." },
              ],
            },
            {
              sentence: "Nhà tôi có 5 người.",
              translation: "我家有五口人。",
              segments: [
                { text: "Nhà", meaning: "家", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "5", meaning: "五", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
          ],
          usage_note: "泛指「人」或量詞。",
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
              translation: "沒錢了 (花光了)。",
              segments: [
                { text: "Hết", meaning: "結束/光", tail: " " },
                { text: "tiền", meaning: "錢", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi cần rút tiền.",
              translation: "我需要領錢。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "rút", meaning: "拔/領", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi mượn tiền được không?",
              translation: "可以借我錢嗎？",
              segments: [
                { text: "Cho", meaning: "給/讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "mượn", meaning: "借入", tail: " " },
                { text: "tiền", meaning: "錢", tail: " " },
                { text: "được không", meaning: "可以嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "生活必備單字。",
          image_file: "money.png",
        },
        {
          id: "n-04",
          term_zh: "孩子 / 小孩",
          related_terms: [
            {
              term_target: "Con",
              pronunciation: ["/kɔn/"],
              specific_note: "兒女/稱呼晚輩",
              segments: [{ text: "Con", meaning: "子/女", tail: "" }],
            },
            {
              term_target: "Trẻ con",
              pronunciation: ["/tʃɛ kɔn/"],
              specific_note: "兒童(泛指)",
              segments: [
                { text: "Trẻ", meaning: "幼", tail: " " },
                { text: "con", meaning: "子", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Con nít mà!",
              translation: "小孩子嘛！(指不懂事)。",
              segments: [
                { text: "Con nít", meaning: "小孩子(口語)", tail: " " },
                { text: "mà", meaning: "嘛(語助詞)", tail: "!" },
              ],
            },
            {
              sentence: "Em bé đang ngủ.",
              translation: "小寶寶正在睡覺。",
              segments: [
                { text: "Em bé", meaning: "嬰兒/寶寶", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ngủ", meaning: "睡", tail: "." },
              ],
            },
            {
              sentence: "Chị ấy có hai đứa con.",
              translation: "她有兩個孩子。",
              segments: [
                { text: "Chị ấy", meaning: "她", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "hai", meaning: "二", tail: " " },
                { text: "đứa", meaning: "個(指小孩)", tail: " " },
                { text: "con", meaning: "孩子", tail: "." },
              ],
            },
          ],
          usage_note: "自己的小孩用 Con，別人的小孩或泛指用 Trẻ con / Em bé。",
          image_file: "child.png",
        },
        {
          id: "n-05",
          term_zh: "水",
          related_terms: [
            {
              term_target: "Nước",
              pronunciation: ["/nɨək/"],
              specific_note: "",
              segments: [{ text: "Nước", meaning: "水/國", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi xin nước lọc.",
              translation: "請給我白開水。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xin", meaning: "請求", tail: " " },
                { text: "nước lọc", meaning: "過濾水/白水", tail: "." },
              ],
            },
            {
              sentence: "Uống nhiều nước.",
              translation: "多喝水。",
              segments: [
                { text: "Uống", meaning: "喝", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "nước", meaning: "水", tail: "." },
              ],
            },
            {
              sentence: "Nước này lạnh quá.",
              translation: "這水太冷了。",
              segments: [
                { text: "Nước", meaning: "水", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "lạnh", meaning: "冷", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
          ],
          usage_note: "Nước 也有「國家」的意思 (如 Nước Việt Nam)。",
          image_file: "water.png",
        },
        {
          id: "n-06",
          term_zh: "食物",
          related_terms: [
            {
              term_target: "Đồ ăn",
              pronunciation: ["/ɗo an/"],
              specific_note: "口語",
              segments: [
                { text: "Đồ", meaning: "東西", tail: " " },
                { text: "ăn", meaning: "吃", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đồ ăn ngon quá.",
              translation: "食物很好吃。",
              segments: [
                { text: "Đồ ăn", meaning: "食物", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Bạn có đồ ăn không?",
              translation: "你有吃的嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "đồ ăn", meaning: "食物", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi thích đồ ăn Việt Nam.",
              translation: "我喜歡越南食物。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "đồ ăn", meaning: "食物", tail: " " },
                { text: "Việt Nam", meaning: "越南", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思就是「吃的東西」。",
          image_file: "food.png",
        },
        {
          id: "n-07",
          term_zh: "朋友",
          related_terms: [
            {
              term_target: "Bạn",
              pronunciation: ["/ban/"],
              specific_note: "朋友/你",
              segments: [{ text: "Bạn", meaning: "朋友", tail: "" }],
            },
            {
              term_target: "Bạn bè",
              pronunciation: ["/ban bɛ/"],
              specific_note: "朋友們(泛指)",
              segments: [
                { text: "Bạn", meaning: "伴", tail: " " },
                { text: "bè", meaning: "群", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đây là bạn tôi.",
              translation: "這是我朋友。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "bạn", meaning: "朋友", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Bạn thân.",
              translation: "好朋友 (死黨/閨蜜)。",
              segments: [
                { text: "Bạn", meaning: "朋友", tail: " " },
                { text: "thân", meaning: "親/深", tail: "." },
              ],
            },
            {
              sentence: "Đi chơi với bạn bè.",
              translation: "跟朋友出去玩。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "chơi", meaning: "玩", tail: " " },
                { text: "với", meaning: "跟/與", tail: " " },
                { text: "bạn bè", meaning: "朋友們", tail: "." },
              ],
            },
          ],
          usage_note: "Bạn 也是「你」的代名詞。",
          image_file: "friend.png",
        },
        {
          id: "n-08",
          term_zh: "家庭",
          related_terms: [
            {
              term_target: "Gia đình",
              pronunciation: ["/za ɗiɲ/"],
              specific_note: "正式",
              segments: [
                { text: "Gia", meaning: "家", tail: " " },
                { text: "đình", meaning: "庭", tail: "" },
              ],
            },
            {
              term_target: "Nhà",
              pronunciation: ["/ɲa/"],
              specific_note: "口語/房子",
              segments: [{ text: "Nhà", meaning: "家/屋", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Gia đình tôi có 4 người.",
              translation: "我家(庭)有四個人。",
              segments: [
                { text: "Gia đình", meaning: "家庭", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "4", meaning: "四", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Tôi yêu gia đình.",
              translation: "我愛我的家人。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "yêu", meaning: "愛", tail: " " },
                { text: "gia đình", meaning: "家庭", tail: "." },
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
          ],
          usage_note: "Gia đình 指成員關係，Nhà 指房子或口語的家。",
          image_file: "family.png",
        },
        {
          id: "n-09",
          term_zh: "學生",
          related_terms: [
            {
              term_target: "Học sinh",
              pronunciation: ["/hawk siɲ/"],
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
              sentence: "Các em học sinh.",
              translation: "各位同學 (老師稱呼學生)。",
              segments: [
                { text: "Các", meaning: "各/諸位", tail: " " },
                { text: "em", meaning: "弟妹/晚輩", tail: " " },
                { text: "học sinh", meaning: "學生", tail: "." },
              ],
            },
          ],
          usage_note: "區分：Học sinh (中小學) vs Sinh viên (大學)。",
          image_file: "student.png",
        },
        {
          id: "n-10",
          term_zh: "文化",
          related_terms: [
            {
              term_target: "Văn hóa",
              pronunciation: ["/van hɔa/"],
              specific_note: "漢語:文化",
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
              sentence: "Tôi thích tìm hiểu văn hóa.",
              translation: "我喜歡了解(探索)文化。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "tìm hiểu", meaning: "探索/了解", tail: " " },
                { text: "văn hóa", meaning: "文化", tail: "." },
              ],
            },
            {
              sentence: "Sốc văn hóa.",
              translation: "文化衝擊。",
              segments: [
                { text: "Sốc", meaning: "休克/衝擊(Shock)", tail: " " },
                { text: "văn hóa", meaning: "文化", tail: "." },
              ],
            },
          ],
          usage_note: "發音跟中文「文化」非常像。",
          image_file: "culture.png",
        },
        {
          id: "n-11",
          term_zh: "問題",
          related_terms: [
            {
              term_target: "Vấn đề",
              pronunciation: ["/vən ɗe/"],
              specific_note: "難題/議題",
              segments: [
                { text: "Vấn", meaning: "問", tail: " " },
                { text: "đề", meaning: "題", tail: "" },
              ],
            },
            {
              term_target: "Câu hỏi",
              pronunciation: ["/kəw hɔj/"],
              specific_note: "提問",
              segments: [
                { text: "Câu", meaning: "句", tail: " " },
                { text: "hỏi", meaning: "問", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Không sao, không có vấn đề gì.",
              translation: "沒關係，沒什麼問題。",
              segments: [
                { text: "Không sao", meaning: "沒事", tail: ", " },
                { text: "không", meaning: "沒", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "vấn đề", meaning: "問題", tail: " " },
                { text: "gì", meaning: "什麼", tail: "." },
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
            {
              sentence: "Giải quyết vấn đề.",
              translation: "解決問題。",
              segments: [
                { text: "Giải quyết", meaning: "解決", tail: " " },
                { text: "vấn đề", meaning: "問題", tail: "." },
              ],
            },
          ],
          usage_note: "要發問時用 Câu hỏi，遇到麻煩用 Vấn đề。",
          image_file: "problem.png",
        },
        {
          id: "n-12",
          term_zh: "公司",
          related_terms: [
            {
              term_target: "Công ty",
              pronunciation: ["/kəwŋ͡m ti/"],
              specific_note: "漢語:公司",
              segments: [
                { text: "Công", meaning: "公", tail: " " },
                { text: "ty", meaning: "司", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Công ty lớn.",
              translation: "大公司。",
              segments: [
                { text: "Công ty", meaning: "公司", tail: " " },
                { text: "lớn", meaning: "大", tail: "." },
              ],
            },
            {
              sentence: "Tôi làm việc ở công ty này.",
              translation: "我在這家公司工作。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "công ty", meaning: "公司", tail: " " },
                { text: "này", meaning: "這", tail: "." },
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
          usage_note: "上班地點。",
          image_file: "company.png",
        },
        {
          id: "n-13",
          term_zh: "男性 / 男人",
          related_terms: [
            {
              term_target: "Đàn ông",
              pronunciation: ["/ɗan əwŋ͡m/"],
              specific_note: "成年男子",
              segments: [
                { text: "Đàn", meaning: "群/類", tail: " " },
                { text: "ông", meaning: "公/翁", tail: "" },
              ],
            },
            {
              term_target: "Nam",
              pronunciation: ["/nam/"],
              specific_note: "性別(填表用)",
              segments: [{ text: "Nam", meaning: "男", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh ấy là đàn ông.",
              translation: "他是個男人。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "đàn ông", meaning: "男人", tail: "." },
              ],
            },
            {
              sentence: "Người đàn ông đó.",
              translation: "那個男人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "đàn ông", meaning: "男人", tail: " " },
                { text: "đó", meaning: "那", tail: "." },
              ],
            },
            {
              sentence: "Chàng trai trẻ.",
              translation: "年輕男子(帥哥)。",
              segments: [
                { text: "Chàng trai", meaning: "男子/男生", tail: " " },
                { text: "trẻ", meaning: "年輕", tail: "." },
              ],
            },
          ],
          usage_note: "一般對話稱 Anh (哥)，泛指性別用 Đàn ông。",
          image_file: "man.png",
        },
        {
          id: "n-14",
          term_zh: "女性 / 女人",
          related_terms: [
            {
              term_target: "Phụ nữ",
              pronunciation: ["/fu nɨ/"],
              specific_note: "成年女子",
              segments: [
                { text: "Phụ", meaning: "婦", tail: " " },
                { text: "nữ", meaning: "女", tail: "" },
              ],
            },
            {
              term_target: "Nữ",
              pronunciation: ["/nɨ/"],
              specific_note: "性別(填表用)",
              segments: [{ text: "Nữ", meaning: "女", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cô ấy là phụ nữ hiện đại.",
              translation: "她是現代女性。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "phụ nữ", meaning: "婦女", tail: " " },
                { text: "hiện đại", meaning: "現代", tail: "." },
              ],
            },
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
              sentence: "Cô gái xinh đẹp.",
              translation: "漂亮的女生(女孩)。",
              segments: [
                { text: "Cô gái", meaning: "女孩/女生", tail: " " },
                { text: "xinh đẹp", meaning: "漂亮", tail: "." },
              ],
            },
          ],
          usage_note: "年輕未婚多用 Cô gái，成熟或統稱用 Phụ nữ。",
          image_file: "woman.png",
        },
        {
          id: "n-15",
          term_zh: "學校",
          related_terms: [
            {
              term_target: "Trường học",
              pronunciation: ["/tʃɨəŋ hawk/"],
              specific_note: "",
              segments: [
                { text: "Trường", meaning: "場/校", tail: " " },
                { text: "học", meaning: "學", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đi học.",
              translation: "我去上學。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去/走", tail: " " },
                { text: "học", meaning: "學", tail: "." },
              ],
            },
            {
              sentence: "Trường học ở gần đây.",
              translation: "學校在這附近。",
              segments: [
                { text: "Trường học", meaning: "學校", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "gần", meaning: "近", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Trường đại học.",
              translation: "大學 (大場學)。",
              segments: [
                { text: "Trường", meaning: "學校", tail: " " },
                { text: "đại", meaning: "大", tail: " " },
                { text: "học", meaning: "學", tail: "." },
              ],
            },
          ],
          usage_note: "口語常簡稱為 Trường。",
          image_file: "school.png",
        },
        {
          id: "n-16",
          term_zh: "老師",
          related_terms: [
            {
              term_target: "Giáo viên",
              pronunciation: ["/zaːw viən/"],
              specific_note: "職業名稱",
              segments: [
                { text: "Giáo", meaning: "教", tail: " " },
                { text: "viên", meaning: "員", tail: "" },
              ],
            },
            {
              term_target: "Thầy / Cô",
              pronunciation: ["/tʰəj/", "/ko/"],
              specific_note: "稱呼(男/女)",
              segments: [
                { text: "Thầy", meaning: "男師", tail: " / " },
                { text: "Cô", meaning: "女師", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em chào thầy ạ.",
              translation: "老師(男)好。",
              segments: [
                { text: "Em", meaning: "學生自稱", tail: " " },
                { text: "chào", meaning: "招呼", tail: " " },
                { text: "thầy", meaning: "老師", tail: " " },
                { text: "ạ", meaning: "敬語助詞", tail: "." },
              ],
            },
            {
              sentence: "Cô giáo dạy tiếng Anh.",
              translation: "英文女老師。",
              segments: [
                { text: "Cô giáo", meaning: "女老師", tail: " " },
                { text: "dạy", meaning: "教", tail: " " },
                { text: "tiếng Anh", meaning: "英文", tail: "." },
              ],
            },
            {
              sentence: "Nghe lời thầy cô.",
              translation: "聽老師的話。",
              segments: [
                { text: "Nghe", meaning: "聽", tail: " " },
                { text: "lời", meaning: "話語", tail: " " },
                { text: "thầy cô", meaning: "老師們", tail: "." },
              ],
            },
          ],
          usage_note: "當面稱呼絕對不能叫 Giáo viên，一定要叫 Thầy 或 Cô。",
          image_file: "teacher.png",
        },
        {
          id: "n-17",
          term_zh: "電影 / 影片",
          related_terms: [
            {
              term_target: "Phim",
              pronunciation: ["/fim/"],
              specific_note: "外來語(Film)",
              segments: [{ text: "Phim", meaning: "片/電影", tail: "" }],
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
              sentence: "Phim này hay lắm.",
              translation: "這部電影很好看。",
              segments: [
                { text: "Phim", meaning: "電影", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "hay", meaning: "精彩/好", tail: " " },
                { text: "lắm", meaning: "很", tail: "." },
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
          usage_note: "電影、電視劇都統稱 Phim。",
          image_file: "movie.png",
        },
        {
          id: "n-18",
          term_zh: "手機 / 電話",
          related_terms: [
            {
              term_target: "Điện thoại",
              pronunciation: ["/ɗiən tʰwaj/"],
              specific_note: "漢語:電話",
              segments: [
                { text: "Điện", meaning: "電", tail: " " },
                { text: "thoại", meaning: "話", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Số điện thoại của bạn là gì?",
              translation: "你的電話號碼是多少？",
              segments: [
                { text: "Số", meaning: "號碼", tail: " " },
                { text: "điện thoại", meaning: "電話", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Nghe điện thoại đi.",
              translation: "接(聽)電話吧。",
              segments: [
                { text: "Nghe", meaning: "聽", tail: " " },
                { text: "điện thoại", meaning: "電話", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Điện thoại di động.",
              translation: "行動電話 (手機)。",
              segments: [
                { text: "Điện thoại", meaning: "電話", tail: " " },
                { text: "di động", meaning: "移動", tail: "." },
              ],
            },
          ],
          usage_note: "口語常簡稱 ĐT。",
          image_file: "phone.png",
        },
        {
          id: "n-19",
          term_zh: "電腦",
          related_terms: [
            {
              term_target: "Máy tính",
              pronunciation: ["/maj tiɲ/"],
              specific_note: "",
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
              sentence: "Máy tính bị hư.",
              translation: "電腦壞了。",
              segments: [
                { text: "Máy tính", meaning: "電腦", tail: " " },
                { text: "bị", meaning: "被/遭", tail: " " },
                { text: "hư", meaning: "壞", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思是「計算機」。",
          image_file: "computer.png",
        },
        {
          id: "n-20",
          term_zh: "車 / 汽車",
          related_terms: [
            {
              term_target: "Xe hơi",
              pronunciation: ["/sɛ həj/"],
              specific_note: "汽車(南部)",
              segments: [
                { text: "Xe", meaning: "車", tail: " " },
                { text: "hơi", meaning: "氣/汽", tail: "" },
              ],
            },
            {
              term_target: "Ô tô",
              pronunciation: ["/o to/"],
              specific_note: "汽車(北部)",
              segments: [{ text: "Ô tô", meaning: "Auto", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lái xe.",
              translation: "開車 / 駕駛。",
              segments: [
                { text: "Lái", meaning: "駕駛", tail: " " },
                { text: "xe", meaning: "車", tail: "." },
              ],
            },
            {
              sentence: "Lên xe đi.",
              translation: "上車吧。",
              segments: [
                { text: "Lên", meaning: "上", tail: " " },
                { text: "xe", meaning: "車", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Xe màu đỏ.",
              translation: "紅色的車。",
              segments: [
                { text: "Xe", meaning: "車", tail: " " },
                { text: "màu", meaning: "顏色", tail: " " },
                { text: "đỏ", meaning: "紅", tail: "." },
              ],
            },
          ],
          usage_note:
            "單說 Xe 通常指機車 (Xe máy)，指汽車要說清楚 Xe hơi/Ô tô。",
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
              specific_note: "超級市場",
              segments: [
                { text: "Siêu", meaning: "超", tail: " " },
                { text: "thị", meaning: "市", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi chợ.",
              translation: "去市場 (買菜)。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "chợ", meaning: "市場", tail: "." },
              ],
            },
            {
              sentence: "Chợ đêm.",
              translation: "夜市。",
              segments: [
                { text: "Chợ", meaning: "市場", tail: " " },
                { text: "đêm", meaning: "夜", tail: "." },
              ],
            },
            {
              sentence: "Chợ Bến Thành ở đâu?",
              translation: "濱城市場在哪裡？",
              segments: [
                { text: "Chợ", meaning: "市場", tail: " " },
                { text: "Bến Thành", meaning: "濱城(名)", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
          ],
          usage_note: "傳統市場是越南生活重心。",
          image_file: "market.png",
        },
        {
          id: "n-22",
          term_zh: "衣服",
          related_terms: [
            {
              term_target: "Quần áo",
              pronunciation: ["/kwən aːw/"],
              specific_note: "衣物總稱",
              segments: [
                { text: "Quần", meaning: "褲", tail: " " },
                { text: "áo", meaning: "衣", tail: "" },
              ],
            },
            {
              term_target: "Đồ",
              pronunciation: ["/ɗo/"],
              specific_note: "口語/東西",
              segments: [{ text: "Đồ", meaning: "物品/衣服", tail: "" }],
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
              sentence: "Thay đồ đi.",
              translation: "去換衣服吧。",
              segments: [
                { text: "Thay", meaning: "換", tail: " " },
                { text: "đồ", meaning: "衣服(口語)", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Giặt quần áo.",
              translation: "洗衣服。",
              segments: [
                { text: "Giặt", meaning: "洗(衣)", tail: " " },
                { text: "quần áo", meaning: "衣服", tail: "." },
              ],
            },
          ],
          usage_note: "正式說 Quần áo，口語常說 Đồ (如 Mua đồ 買東西/衣服)。",
          image_file: "clothes.png",
        },
        {
          id: "n-23",
          term_zh: "商店",
          related_terms: [
            {
              term_target: "Cửa hàng",
              pronunciation: ["/kɨə haŋ/"],
              specific_note: "一般商店",
              segments: [
                { text: "Cửa", meaning: "門", tail: " " },
                { text: "hàng", meaning: "行/貨", tail: "" },
              ],
            },
            {
              term_target: "Quán",
              pronunciation: ["/kwan/"],
              specific_note: "飲食店/小店",
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
          usage_note: "賣吃的喝的多用 Quán，賣物品多用 Cửa hàng。",
          image_file: "shop.png",
        },
        {
          id: "n-24",
          term_zh: "公車 / 巴士",
          related_terms: [
            {
              term_target: "Xe buýt",
              pronunciation: ["/sɛ bit/"],
              specific_note: "Bus",
              segments: [
                { text: "Xe", meaning: "車", tail: " " },
                { text: "buýt", meaning: "巴士(Bus)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đi học bằng xe buýt.",
              translation: "我搭公車去上學。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "học", meaning: "學", tail: " " },
                { text: "bằng", meaning: "藉由", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: "." },
              ],
            },
            {
              sentence: "Trạm xe buýt ở đâu?",
              translation: "公車站牌在哪裡？",
              segments: [
                { text: "Trạm", meaning: "站", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
            {
              sentence: "Lên xe đi.",
              translation: "上車吧。",
              segments: [
                { text: "Lên", meaning: "上", tail: " " },
                { text: "xe", meaning: "車", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
          ],
          usage_note: "大眾運輸工具。",
          image_file: "bus.png",
        },
        {
          id: "n-25",
          term_zh: "街道 / 路",
          related_terms: [
            {
              term_target: "Đường",
              pronunciation: ["/ɗɨəŋ/"],
              specific_note: "路/街",
              segments: [{ text: "Đường", meaning: "路/道", tail: "" }],
            },
            {
              term_target: "Phố",
              pronunciation: ["/fo/"],
              specific_note: "市街",
              segments: [{ text: "Phố", meaning: "街", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sang đường.",
              translation: "過馬路。",
              segments: [
                { text: "Sang", meaning: "過/到", tail: " " },
                { text: "đường", meaning: "路", tail: "." },
              ],
            },
            {
              sentence: "Nhà mặt phố.",
              translation: "臨街的房子 (店面)。",
              segments: [
                { text: "Nhà", meaning: "房", tail: " " },
                { text: "mặt", meaning: "面", tail: " " },
                { text: "phố", meaning: "街", tail: "." },
              ],
            },
            {
              sentence: "Đường này hay tắc đường.",
              translation: "這條路常塞車。",
              segments: [
                { text: "Đường", meaning: "路", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "hay", meaning: "經常", tail: " " },
                { text: "tắc", meaning: "堵塞", tail: " " },
                { text: "đường", meaning: "路", tail: "." },
              ],
            },
          ],
          usage_note: "地址上常用 Đường (如：Đường Nguyễn Huệ)。",
          image_file: "street.png",
        },
        {
          id: "n-26",
          term_zh: "房子 / 家",
          related_terms: [
            {
              term_target: "Nhà",
              pronunciation: ["/ɲa/"],
              specific_note: "通用",
              segments: [{ text: "Nhà", meaning: "家/屋", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Về nhà.",
              translation: "回家。",
              segments: [
                { text: "Về", meaning: "回", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Nhà tôi ở đây.",
              translation: "我家在這裡。",
              segments: [
                { text: "Nhà", meaning: "家", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
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
          usage_note: "既指建築物(House)也指家庭(Home)。",
          image_file: "house.png",
        },
        {
          id: "n-27",
          term_zh: "母親 / 媽媽",
          related_terms: [
            {
              term_target: "Mẹ",
              pronunciation: ["/mɛ/"],
              specific_note: "北部/通用",
              segments: [{ text: "Mẹ", meaning: "媽", tail: "" }],
            },
            {
              term_target: "Má",
              pronunciation: ["/ma/"],
              specific_note: "南部",
              segments: [{ text: "Má", meaning: "媽", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mẹ ơi!",
              translation: "媽咪！(呼喚時)。",
              segments: [
                { text: "Mẹ", meaning: "媽", tail: " " },
                { text: "ơi", meaning: "喂/啊", tail: "!" },
              ],
            },
            {
              sentence: "Con yêu mẹ.",
              translation: "我愛媽媽。",
              segments: [
                { text: "Con", meaning: "孩子(我)", tail: " " },
                { text: "yêu", meaning: "愛", tail: " " },
                { text: "mẹ", meaning: "媽", tail: "." },
              ],
            },
            {
              sentence: "Mẹ nấu ăn rất ngon.",
              translation: "媽媽煮飯很好吃。",
              segments: [
                { text: "Mẹ", meaning: "媽", tail: " " },
                { text: "nấu ăn", meaning: "煮飯", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "ngon", meaning: "好吃", tail: "." },
              ],
            },
          ],
          usage_note: "北越叫 Mẹ，南越叫 Má。",
          image_file: "mother.png",
        },
        {
          id: "n-28",
          term_zh: "父親 / 爸爸",
          related_terms: [
            {
              term_target: "Bố",
              pronunciation: ["/bo/"],
              specific_note: "北部",
              segments: [{ text: "Bố", meaning: "爸", tail: "" }],
            },
            {
              term_target: "Ba",
              pronunciation: ["/ba/"],
              specific_note: "南部/通用",
              segments: [{ text: "Ba", meaning: "爸", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bố đang làm việc.",
              translation: "爸爸正在工作。",
              segments: [
                { text: "Bố", meaning: "爸", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "làm việc", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "Ba ơi, đi chơi đi.",
              translation: "爸爸，去玩吧 (南部說法)。",
              segments: [
                { text: "Ba", meaning: "爸", tail: " " },
                { text: "ơi", meaning: "啊/喂", tail: ", " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "chơi", meaning: "玩", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Giống bố.",
              translation: "長得像爸爸。",
              segments: [
                { text: "Giống", meaning: "像", tail: " " },
                { text: "bố", meaning: "爸", tail: "." },
              ],
            },
          ],
          usage_note: "北越叫 Bố，南越叫 Ba。",
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
                { text: "Anh", meaning: "兄", tail: " " },
                { text: "trai", meaning: "男", tail: "" },
              ],
            },
            {
              term_target: "Em trai",
              pronunciation: ["/ɛm tʃaj/"],
              specific_note: "弟弟",
              segments: [
                { text: "Em", meaning: "弟/妹", tail: " " },
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
              sentence: "Hai anh em.",
              translation: "兩兄弟 (或兄妹)。",
              segments: [
                { text: "Hai", meaning: "兩", tail: " " },
                { text: "anh", meaning: "兄", tail: " " },
                { text: "em", meaning: "弟", tail: "." },
              ],
            },
          ],
          usage_note: "越南語必須區分長幼：大的叫 Anh，小的叫 Em。",
          image_file: "brother.png",
        },
        {
          id: "n-30",
          term_zh: "姐妹 (姊姊/妹妹)",
          related_terms: [
            {
              term_target: "Chị gái",
              pronunciation: ["/tʃi gaj/"],
              specific_note: "姊姊",
              segments: [
                { text: "Chị", meaning: "姊", tail: " " },
                { text: "gái", meaning: "女", tail: "" },
              ],
            },
            {
              term_target: "Em gái",
              pronunciation: ["/ɛm gaj/"],
              specific_note: "妹妹",
              segments: [
                { text: "Em", meaning: "弟/妹", tail: " " },
                { text: "gái", meaning: "女", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chị gái tôi đã kết hôn.",
              translation: "我姊姊已經結婚了。",
              segments: [
                { text: "Chị gái", meaning: "姊姊", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "kết hôn", meaning: "結婚", tail: "." },
              ],
            },
            {
              sentence: "Em gái đang đi học.",
              translation: "妹妹正在上學。",
              segments: [
                { text: "Em gái", meaning: "妹妹", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "đi học", meaning: "上學", tail: "." },
              ],
            },
            {
              sentence: "Hai chị em.",
              translation: "兩姊妹 (或姊弟)。",
              segments: [
                { text: "Hai", meaning: "兩", tail: " " },
                { text: "chị", meaning: "姊", tail: " " },
                { text: "em", meaning: "妹", tail: "." },
              ],
            },
          ],
          usage_note: "必須區分長幼：大的叫 Chị，小的叫 Em。",
          image_file: "sister.png",
        },
        {
          id: "n-31",
          term_zh: "中文 / 華語",
          related_terms: [
            {
              term_target: "Tiếng Trung",
              pronunciation: ["/tiəŋ tʃuŋ͡m/"],
              specific_note: "通用",
              segments: [
                { text: "Tiếng", meaning: "語", tail: " " },
                { text: "Trung", meaning: "中", tail: "" },
              ],
            },
            {
              term_target: "Tiếng Hoa",
              pronunciation: ["/tiəŋ hɔa/"],
              specific_note: "南方常用",
              segments: [
                { text: "Tiếng", meaning: "語", tail: " " },
                { text: "Hoa", meaning: "華", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi nói tiếng Trung.",
              translation: "我說中文。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "tiếng Trung", meaning: "中文", tail: "." },
              ],
            },
            {
              sentence: "Học tiếng Trung có khó không?",
              translation: "學中文難嗎？",
              segments: [
                { text: "Học", meaning: "學", tail: " " },
                { text: "tiếng Trung", meaning: "中文", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "khó", meaning: "難", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Người Hoa.",
              translation: "華人。",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "Hoa", meaning: "華", tail: "." },
              ],
            },
          ],
          usage_note: "指語言用 Tiếng Trung 或 Tiếng Hoa。",
          image_file: "chinese.png",
        },
        {
          id: "n-32",
          term_zh: "早晨 / 早上",
          related_terms: [
            {
              term_target: "Buổi sáng",
              pronunciation: ["/buəj saːŋ/"],
              specific_note: "時段",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "sáng", meaning: "早/亮", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào buổi sáng.",
              translation: "早安。",
              segments: [
                { text: "Chào", meaning: "招呼", tail: " " },
                { text: "buổi sáng", meaning: "早上", tail: "." },
              ],
            },
            {
              sentence: "Ăn sáng.",
              translation: "吃早餐。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "sáng", meaning: "早", tail: "." },
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
          ],
          usage_note: "Sáng 本身也是形容詞「亮」。",
          image_file: "morning.png",
        },
        {
          id: "n-33",
          term_zh: "夜晚 / 晚上",
          related_terms: [
            {
              term_target: "Buổi tối",
              pronunciation: ["/buəj toj/"],
              specific_note: "晚上(6-10點)",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "tối", meaning: "晚/暗", tail: "" },
              ],
            },
            {
              term_target: "Ban đêm",
              pronunciation: ["/ban ɗem/"],
              specific_note: "深夜",
              segments: [
                { text: "Ban", meaning: "班/時", tail: " " },
                { text: "đêm", meaning: "夜", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào buổi tối.",
              translation: "晚安 (見面時)。",
              segments: [
                { text: "Chào", meaning: "招呼", tail: " " },
                { text: "buổi tối", meaning: "晚上", tail: "." },
              ],
            },
            {
              sentence: "Ăn tối.",
              translation: "吃晚餐。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "tối", meaning: "晚", tail: "." },
              ],
            },
            {
              sentence: "Chúc ngủ ngon.",
              translation: "晚安 (睡覺前)。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "ngủ", meaning: "睡", tail: " " },
                { text: "ngon", meaning: "香/好", tail: "." },
              ],
            },
          ],
          usage_note: "生活中的「晚上」多用 Buổi tối。",
          image_file: "night.png",
        },
        {
          id: "n-34",
          term_zh: "票",
          related_terms: [
            {
              term_target: "Vé",
              pronunciation: ["/vɛ/"],
              specific_note: "票券",
              segments: [{ text: "Vé", meaning: "票", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Vé máy bay.",
              translation: "飛機票。",
              segments: [
                { text: "Vé", meaning: "票", tail: " " },
                { text: "máy bay", meaning: "飛機", tail: "." },
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
              sentence: "Vé xe buýt.",
              translation: "公車票。",
              segments: [
                { text: "Vé", meaning: "票", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: "." },
              ],
            },
          ],
          usage_note: "門票、車票、機票都用 Vé。",
          image_file: "ticket.png",
        },
        {
          id: "n-35",
          term_zh: "包包",
          related_terms: [
            {
              term_target: "Túi",
              pronunciation: ["/tuj/"],
              specific_note: "袋子/包包",
              segments: [{ text: "Túi", meaning: "袋", tail: "" }],
            },
            {
              term_target: "Ba lô",
              pronunciation: ["/ba lo/"],
              specific_note: "背包",
              segments: [{ text: "Ba lô", meaning: "背包", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái túi này đẹp quá.",
              translation: "這包包好漂亮。",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "túi", meaning: "袋/包", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "đẹp", meaning: "美", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Túi xách.",
              translation: "手提包。",
              segments: [
                { text: "Túi", meaning: "袋", tail: " " },
                { text: "xách", meaning: "提", tail: "." },
              ],
            },
            {
              sentence: "Quên mang túi.",
              translation: "忘了帶包包。",
              segments: [
                { text: "Quên", meaning: "忘", tail: " " },
                { text: "mang", meaning: "帶", tail: " " },
                { text: "túi", meaning: "包", tail: "." },
              ],
            },
          ],
          usage_note: "Túi 泛指各種袋子或包包。",
          image_file: "bag.png",
        },
        {
          id: "n-36",
          term_zh: "杯子",
          related_terms: [
            {
              term_target: "Ly",
              pronunciation: ["/li/"],
              specific_note: "南部/玻璃杯",
              segments: [{ text: "Ly", meaning: "杯", tail: "" }],
            },
            {
              term_target: "Cốc",
              pronunciation: ["/kəwk/"],
              specific_note: "北部/杯子",
              segments: [{ text: "Cốc", meaning: "杯", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Một ly cà phê đá.",
              translation: "一杯冰咖啡。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "ly", meaning: "杯", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: " " },
                { text: "đá", meaning: "冰/石", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi mượn cái cốc.",
              translation: "借我一個杯子。",
              segments: [
                { text: "Cho", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "mượn", meaning: "借", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "cốc", meaning: "杯子", tail: "." },
              ],
            },
            {
              sentence: "Ly nước.",
              translation: "水杯 (一杯水)。",
              segments: [
                { text: "Ly", meaning: "杯", tail: " " },
                { text: "nước", meaning: "水", tail: "." },
              ],
            },
          ],
          usage_note: "北越說 Cốc，南越說 Ly。",
          image_file: "cup.png",
        },
        {
          id: "n-37",
          term_zh: "醫生",
          related_terms: [
            {
              term_target: "Bác sĩ",
              pronunciation: ["/bak si/"],
              specific_note: "漢語:博士",
              segments: [
                { text: "Bác", meaning: "伯", tail: " " },
                { text: "sĩ", meaning: "士", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi khám bác sĩ.",
              translation: "去看醫生。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "khám", meaning: "檢查/看診", tail: " " },
                { text: "bác sĩ", meaning: "醫生", tail: "." },
              ],
            },
            {
              sentence: "Bác sĩ ơi, tôi bị đau.",
              translation: "醫生，我很痛。",
              segments: [
                { text: "Bác sĩ", meaning: "醫生", tail: " " },
                { text: "ơi", meaning: "啊/喂", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "bị", meaning: "被/遭", tail: " " },
                { text: "đau", meaning: "痛", tail: "." },
              ],
            },
            {
              sentence: "Làm bác sĩ.",
              translation: "當醫生。",
              segments: [
                { text: "Làm", meaning: "做/當", tail: " " },
                { text: "bác sĩ", meaning: "醫生", tail: "." },
              ],
            },
          ],
          usage_note: "稱呼醫生時直接叫 Bác sĩ。",
          image_file: "doctor.png",
        },
        {
          id: "n-38",
          term_zh: "警察 / 公安",
          related_terms: [
            {
              term_target: "Công an",
              pronunciation: ["/kəwŋ͡m an/"],
              specific_note: "公安(常用)",
              segments: [
                { text: "Công", meaning: "公", tail: " " },
                { text: "an", meaning: "安", tail: "" },
              ],
            },
            {
              term_target: "Cảnh sát",
              pronunciation: ["/kaɲ sat/"],
              specific_note: "警察",
              segments: [
                { text: "Cảnh", meaning: "警", tail: " " },
                { text: "sát", meaning: "察", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Gọi công an đi!",
              translation: "叫警察(公安)！",
              segments: [
                { text: "Gọi", meaning: "叫/打電話", tail: " " },
                { text: "công an", meaning: "公安", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
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
              sentence: "Đồn công an.",
              translation: "派出所 (公安局)。",
              segments: [
                { text: "Đồn", meaning: "屯/局", tail: " " },
                { text: "công an", meaning: "公安", tail: "." },
              ],
            },
          ],
          usage_note: "越南最常說 Công an。",
          image_file: "police.png",
        },
        {
          id: "n-39",
          term_zh: "醫院",
          related_terms: [
            {
              term_target: "Bệnh viện",
              pronunciation: ["/beɲ viən/"],
              specific_note: "漢語:病院",
              segments: [
                { text: "Bệnh", meaning: "病", tail: " " },
                { text: "viện", meaning: "院", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đưa tôi đến bệnh viện.",
              translation: "送我(帶我)去醫院。",
              segments: [
                { text: "Đưa", meaning: "送/遞", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "bệnh viện", meaning: "醫院", tail: "." },
              ],
            },
            {
              sentence: "Nằm bệnh viện.",
              translation: "住院 (躺醫院)。",
              segments: [
                { text: "Nằm", meaning: "躺", tail: " " },
                { text: "bệnh viện", meaning: "醫院", tail: "." },
              ],
            },
            {
              sentence: "Bệnh viện ở đâu?",
              translation: "醫院在哪裡？",
              segments: [
                { text: "Bệnh viện", meaning: "醫院", tail: " " },
                { text: "ở đâu", meaning: "在哪", tail: "?" },
              ],
            },
          ],
          usage_note: "醫療機構。",
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
              pronunciation: ["/tʃo ŋoj/"],
              specific_note: "座位(空間)",
              segments: [
                { text: "Chỗ", meaning: "地方", tail: " " },
                { text: "ngồi", meaning: "坐", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mời ngồi.",
              translation: "請坐。",
              segments: [
                { text: "Mời", meaning: "邀請/請", tail: " " },
                { text: "ngồi", meaning: "坐", tail: "." },
              ],
            },
            {
              sentence: "Còn chỗ không?",
              translation: "還有位子嗎？",
              segments: [
                { text: "Còn", meaning: "還/剩", tail: " " },
                { text: "chỗ", meaning: "位子", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Cái ghế này.",
              translation: "這張椅子。",
              segments: [
                { text: "Cái", meaning: "張/個", tail: " " },
                { text: "ghế", meaning: "椅子", tail: " " },
                { text: "này", meaning: "這", tail: "." },
              ],
            },
          ],
          usage_note: "Ghế 是實體的椅子，Chỗ 是空間位子。",
          image_file: "seat.png",
        },
        {
          id: "n-41",
          term_zh: "門",
          related_terms: [
            {
              term_target: "Cửa",
              pronunciation: ["/kɨə/"],
              specific_note: "",
              segments: [{ text: "Cửa", meaning: "門", tail: "" }],
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
              sentence: "Đóng cửa lại.",
              translation: "把門關上。",
              segments: [
                { text: "Đóng", meaning: "關", tail: " " },
                { text: "cửa", meaning: "門", tail: " " },
                { text: "lại", meaning: "入/合", tail: "." },
              ],
            },
            {
              sentence: "Ai đang ở ngoài cửa?",
              translation: "誰在門外？",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "ngoài", meaning: "外", tail: " " },
                { text: "cửa", meaning: "門", tail: "?" },
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
              term_target: "Phòng",
              pronunciation: ["/fawŋ͡m/"],
              specific_note: "房",
              segments: [{ text: "Phòng", meaning: "房間", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đây là phòng của tôi.",
              translation: "這是我的房間。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "phòng", meaning: "房", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
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
          usage_note: "室內空間都用 Phòng (如：Phòng họp 會議室)。",
          image_file: "room.png",
        },
        {
          id: "n-43",
          term_zh: "車站",
          related_terms: [
            {
              term_target: "Ga",
              pronunciation: ["/ga/"],
              specific_note: "火車/捷運站",
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
                { text: "Ga", meaning: "站", tail: " " },
                { text: "Hà Nội", meaning: "河內", tail: "." },
              ],
            },
            {
              sentence: "Ra bến xe.",
              translation: "去(出)車站。",
              segments: [
                { text: "Ra", meaning: "出/去", tail: " " },
                { text: "bến xe", meaning: "車站", tail: "." },
              ],
            },
            {
              sentence: "Gặp nhau ở ga.",
              translation: "在車站見。",
              segments: [
                { text: "Gặp", meaning: "見", tail: " " },
                { text: "nhau", meaning: "彼此", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "ga", meaning: "車站", tail: "." },
              ],
            },
          ],
          usage_note: "火車用 Ga，公車總站用 Bến，路邊站牌用 Trạm。",
          image_file: "station.png",
        },
        {
          id: "n-44",
          term_zh: "地鐵 / 捷運",
          related_terms: [
            {
              term_target: "Tàu điện",
              pronunciation: ["/taw ɗiən/"],
              specific_note: "電車/捷運",
              segments: [
                { text: "Tàu", meaning: "船/車", tail: " " },
                { text: "điện", meaning: "電", tail: "" },
              ],
            },
            {
              term_target: "Metro",
              pronunciation: ["/mɛtro/"],
              specific_note: "外來語",
              segments: [{ text: "Metro", meaning: "捷運", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi tàu điện.",
              translation: "搭捷運/電車。",
              segments: [
                { text: "Đi", meaning: "搭/去", tail: " " },
                { text: "tàu điện", meaning: "電車", tail: "." },
              ],
            },
            {
              sentence: "Ga Metro ở đâu?",
              translation: "捷運站在哪？",
              segments: [
                { text: "Ga", meaning: "站", tail: " " },
                { text: "Metro", meaning: "捷運", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
              ],
            },
            {
              sentence: "Tàu điện ngầm.",
              translation: "地下鐵。",
              segments: [
                { text: "Tàu điện", meaning: "電車", tail: " " },
                { text: "ngầm", meaning: "地下/潛", tail: "." },
              ],
            },
          ],
          usage_note: "越南捷運系統習慣稱 Metro 或 Tàu điện。",
          image_file: "subway.png",
        },
        {
          id: "n-45",
          term_zh: "火車",
          related_terms: [
            {
              term_target: "Tàu hỏa",
              pronunciation: ["/taw hɔa/"],
              specific_note: "全稱",
              segments: [
                { text: "Tàu", meaning: "船/艦/車", tail: " " },
                { text: "hỏa", meaning: "火", tail: "" },
              ],
            },
            {
              term_target: "Tàu",
              pronunciation: ["/taw/"],
              specific_note: "簡稱",
              segments: [{ text: "Tàu", meaning: "火車", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đi bằng tàu hỏa.",
              translation: "我搭火車去。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "bằng", meaning: "藉由", tail: " " },
                { text: "tàu hỏa", meaning: "火車", tail: "." },
              ],
            },
            {
              sentence: "Mua vé tàu.",
              translation: "買火車票。",
              segments: [
                { text: "Mua", meaning: "買", tail: " " },
                { text: "vé", meaning: "票", tail: " " },
                { text: "tàu", meaning: "火車", tail: "." },
              ],
            },
            {
              sentence: "Tàu sắp chạy rồi.",
              translation: "火車快開了。",
              segments: [
                { text: "Tàu", meaning: "火車", tail: " " },
                { text: "sắp", meaning: "快要", tail: " " },
                { text: "chạy", meaning: "跑/行駛", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "Tàu 本意是船，後來指大型交通工具，火車全稱 Tàu hỏa。",
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
                { text: "Sân", meaning: "院子/場", tail: " " },
                { text: "bay", meaning: "飛", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ra sân bay.",
              translation: "去機場 (越南語習慣用 Ra=出)。",
              segments: [
                { text: "Ra", meaning: "出/去", tail: " " },
                { text: "sân bay", meaning: "機場", tail: "." },
              ],
            },
            {
              sentence: "Sân bay Nội Bài.",
              translation: "內排機場 (河內)。",
              segments: [
                { text: "Sân bay", meaning: "機場", tail: " " },
                { text: "Nội Bài", meaning: "內排", tail: "." },
              ],
            },
            {
              sentence: "Đến sân bay sớm.",
              translation: "早點到機場。",
              segments: [
                { text: "Đến", meaning: "到", tail: " " },
                { text: "sân bay", meaning: "機場", tail: " " },
                { text: "sớm", meaning: "早", tail: "." },
              ],
            },
          ],
          usage_note: "飛的場地 = 機場。",
          image_file: "airport.png",
        },
        {
          id: "n-47",
          term_zh: "行李",
          related_terms: [
            {
              term_target: "Hành lý",
              pronunciation: ["/haɲ li/"],
              specific_note: "漢語:行李",
              segments: [
                { text: "Hành", meaning: "行", tail: " " },
                { text: "lý", meaning: "李", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hành lý ký gửi.",
              translation: "托運行李。",
              segments: [
                { text: "Hành lý", meaning: "行李", tail: " " },
                { text: "ký gửi", meaning: "寄送/托運", tail: "." },
              ],
            },
            {
              sentence: "Hành lý của tôi đâu?",
              translation: "我的行李在哪？",
              segments: [
                { text: "Hành lý", meaning: "行李", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Hành lý xách tay.",
              translation: "手提行李。",
              segments: [
                { text: "Hành lý", meaning: "行李", tail: " " },
                { text: "xách tay", meaning: "手提", tail: "." },
              ],
            },
          ],
          usage_note: "旅行用的包裹。",
          image_file: "luggage.png",
        },
        {
          id: "n-48",
          term_zh: "地圖",
          related_terms: [
            {
              term_target: "Bản đồ",
              pronunciation: ["/ban ɗo/"],
              specific_note: "漢語:版圖",
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
              sentence: "Bản đồ thành phố.",
              translation: "城市地圖。",
              segments: [
                { text: "Bản đồ", meaning: "地圖", tail: " " },
                { text: "thành phố", meaning: "城市", tail: "." },
              ],
            },
            {
              sentence: "Tìm trên bản đồ.",
              translation: "在地圖上找。",
              segments: [
                { text: "Tìm", meaning: "找", tail: " " },
                { text: "trên", meaning: "在...上", tail: " " },
                { text: "bản đồ", meaning: "地圖", tail: "." },
              ],
            },
          ],
          usage_note: "指引。",
          image_file: "map.png",
        },
        {
          id: "n-49",
          term_zh: "櫃檯",
          related_terms: [
            {
              term_target: "Quầy",
              pronunciation: ["/kwəj/"],
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
              sentence: "Thanh toán tại quầy.",
              translation: "在櫃檯結帳。",
              segments: [
                { text: "Thanh toán", meaning: "付款", tail: " " },
                { text: "tại", meaning: "在", tail: " " },
                { text: "quầy", meaning: "櫃檯", tail: "." },
              ],
            },
            {
              sentence: "Quầy bán vé.",
              translation: "售票口。",
              segments: [
                { text: "Quầy", meaning: "櫃檯", tail: " " },
                { text: "bán", meaning: "賣", tail: " " },
                { text: "vé", meaning: "票", tail: "." },
              ],
            },
          ],
          usage_note: "任何服務台或售票處都叫 Quầy。",
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
              segments: [{ text: "Sảnh", meaning: "廳/堂", tail: "" }],
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
                { text: "Gặp", meaning: "見", tail: " " },
                { text: "nhau", meaning: "彼此", tail: " " },
                { text: "tại", meaning: "在", tail: " " },
                { text: "sảnh", meaning: "大廳", tail: "." },
              ],
            },
          ],
          usage_note: "飯店或機場的公共大廳。",
          image_file: "lobby.png",
        },
        {
          id: "n-51",
          term_zh: "預定 / 訂位",
          related_terms: [
            {
              term_target: "Đặt trước",
              pronunciation: ["/ɗat tʃɨək/"],
              specific_note: "預約(動作)",
              segments: [
                { text: "Đặt", meaning: "訂/放", tail: " " },
                { text: "trước", meaning: "先/前", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn đặt bàn.",
              translation: "我想要訂位 (餐廳)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "đặt", meaning: "訂", tail: " " },
                { text: "bàn", meaning: "桌子", tail: "." },
              ],
            },
            {
              sentence: "Tôi đã đặt phòng trước rồi.",
              translation: "我已經預訂房間了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "đặt", meaning: "訂", tail: " " },
                { text: "phòng", meaning: "房", tail: " " },
                { text: "trước", meaning: "先", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Bạn có đặt trước không?",
              translation: "你有預約嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "đặt trước", meaning: "預訂", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "Đặt 是動詞，指「訂」或「放置」。",
          image_file: "reservation.png",
        },
        {
          id: "n-52",
          term_zh: "入住 (Check-in)",
          related_terms: [
            {
              term_target: "Nhận phòng",
              pronunciation: ["/ɲən fawŋ͡m/"],
              specific_note: "領房",
              segments: [
                { text: "Nhận", meaning: "領/收", tail: " " },
                { text: "phòng", meaning: "房", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn nhận phòng.",
              translation: "我要辦理入住。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "nhận phòng", meaning: "領房(Check-in)", tail: "." },
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
              sentence: "Làm thủ tục nhận phòng.",
              translation: "辦理入住手續。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "thủ tục", meaning: "手續", tail: " " },
                { text: "nhận phòng", meaning: "入住", tail: "." },
              ],
            },
          ],
          usage_note: "字面意思是「接收房間」。",
          image_file: "check_in.png",
        },
        {
          id: "n-53",
          term_zh: "退房 (Check-out)",
          related_terms: [
            {
              term_target: "Trả phòng",
              pronunciation: ["/tʃa fawŋ͡m/"],
              specific_note: "還房",
              segments: [
                { text: "Trả", meaning: "還/付", tail: " " },
                { text: "phòng", meaning: "房", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn trả phòng.",
              translation: "我要退房。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "trả phòng", meaning: "還房(Check-out)", tail: "." },
              ],
            },
            {
              sentence: "12 giờ phải trả phòng.",
              translation: "12點必須退房。",
              segments: [
                { text: "12 giờ", meaning: "12點", tail: " " },
                { text: "phải", meaning: "必須", tail: " " },
                { text: "trả phòng", meaning: "退房", tail: "." },
              ],
            },
            {
              sentence: "Đã trả phòng chưa?",
              translation: "退房了嗎？",
              segments: [
                { text: "Đã", meaning: "已經", tail: " " },
                { text: "trả phòng", meaning: "退房", tail: " " },
                { text: "chưa", meaning: "還沒/了嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "字面意思是「歸還房間」。",
          image_file: "check_out.png",
        },
        {
          id: "n-54",
          term_zh: "飲料",
          related_terms: [
            {
              term_target: "Đồ uống",
              pronunciation: ["/ɗo uəŋ͡m/"],
              specific_note: "",
              segments: [
                { text: "Đồ", meaning: "東西", tail: " " },
                { text: "uống", meaning: "喝", tail: "" },
              ],
            },
            {
              term_target: "Nước",
              pronunciation: ["/nɨək/"],
              specific_note: "口語/水",
              segments: [{ text: "Nước", meaning: "水", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn muốn uống nước gì?",
              translation: "你想喝什麼飲料(水)？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "uống", meaning: "喝", tail: " " },
                { text: "nước", meaning: "水/飲料", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Thực đơn đồ uống.",
              translation: "飲料單。",
              segments: [
                { text: "Thực đơn", meaning: "菜單", tail: " " },
                { text: "đồ uống", meaning: "飲料", tail: "." },
              ],
            },
            {
              sentence: "Đồ uống lạnh.",
              translation: "冷飲。",
              segments: [
                { text: "Đồ uống", meaning: "飲料", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
              ],
            },
          ],
          usage_note: "口語常直接說 Nước (水) 來代表飲料。",
          image_file: "drink.png",
        },
        {
          id: "n-55",
          term_zh: "菜單",
          related_terms: [
            {
              term_target: "Thực đơn",
              pronunciation: ["/tʰɨk ɗən/"],
              specific_note: "正式",
              segments: [
                { text: "Thực", meaning: "食", tail: " " },
                { text: "đơn", meaning: "單", tail: "" },
              ],
            },
            {
              term_target: "Menu",
              pronunciation: ["/mɛnu/"],
              specific_note: "口語",
              segments: [{ text: "Menu", meaning: "菜單", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi xem thực đơn.",
              translation: "給我看菜單。",
              segments: [
                { text: "Cho", meaning: "給/讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "thực đơn", meaning: "菜單", tail: "." },
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
            {
              sentence: "Gọi món theo thực đơn.",
              translation: "照菜單點菜。",
              segments: [
                { text: "Gọi món", meaning: "點菜", tail: " " },
                { text: "theo", meaning: "跟著/照", tail: " " },
                { text: "thực đơn", meaning: "菜單", tail: "." },
              ],
            },
          ],
          usage_note: "口語直接說 Menu 也可以。",
          image_file: "menu.png",
        },
        {
          id: "n-56",
          term_zh: "午餐",
          related_terms: [
            {
              term_target: "Bữa trưa",
              pronunciation: ["/bɨa tʃɨə/"],
              specific_note: "",
              segments: [
                { text: "Bữa", meaning: "餐", tail: " " },
                { text: "trưa", meaning: "中午", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ăn trưa chưa?",
              translation: "吃午餐了嗎？(口語省略 Bữa)。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "trưa", meaning: "午(餐)", tail: " " },
                { text: "chưa", meaning: "還沒/了嗎", tail: "?" },
              ],
            },
            {
              sentence: "Đi ăn trưa thôi.",
              translation: "去吃午餐吧。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "trưa", meaning: "午餐", tail: " " },
                { text: "thôi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Nghỉ trưa.",
              translation: "午休。",
              segments: [
                { text: "Nghỉ", meaning: "休息", tail: " " },
                { text: "trưa", meaning: "中午", tail: "." },
              ],
            },
          ],
          usage_note: "名詞是 Bữa trưa，動詞常說 Ăn trưa。",
          image_file: "lunch.png",
        },
        {
          id: "n-57",
          term_zh: "晚餐",
          related_terms: [
            {
              term_target: "Bữa tối",
              pronunciation: ["/bɨa toj/"],
              specific_note: "",
              segments: [
                { text: "Bữa", meaning: "餐", tail: " " },
                { text: "tối", meaning: "晚上", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ăn tối nhé.",
              translation: "吃晚餐喔。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "tối", meaning: "晚(餐)", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Mời bạn ăn tối.",
              translation: "請你吃晚餐。",
              segments: [
                { text: "Mời", meaning: "邀請/請", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "ăn tối", meaning: "吃晚餐", tail: "." },
              ],
            },
            {
              sentence: "Nấu bữa tối.",
              translation: "煮晚餐。",
              segments: [
                { text: "Nấu", meaning: "煮", tail: " " },
                { text: "bữa tối", meaning: "晚餐", tail: "." },
              ],
            },
          ],
          usage_note: "名詞是 Bữa tối，動詞常說 Ăn tối。",
          image_file: "dinner.png",
        },
        {
          id: "n-58",
          term_zh: "帳單 / 買單",
          related_terms: [
            {
              term_target: "Hóa đơn",
              pronunciation: ["/hɔa ɗən/"],
              specific_note: "帳單/發票",
              segments: [
                { text: "Hóa", meaning: "貨/化", tail: " " },
                { text: "đơn", meaning: "單", tail: "" },
              ],
            },
            {
              term_target: "Tính tiền",
              pronunciation: ["/tiɲ tiən/"],
              specific_note: "算錢(口語)",
              segments: [
                { text: "Tính", meaning: "算", tail: " " },
                { text: "tiền", meaning: "錢", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em ơi, tính tiền!",
              translation: "服務生，買單！(最常用)。",
              segments: [
                { text: "Em", meaning: "弟/妹", tail: " " },
                { text: "ơi", meaning: "喂", tail: ", " },
                { text: "tính tiền", meaning: "買單", tail: "!" },
              ],
            },
            {
              sentence: "Cho tôi hóa đơn.",
              translation: "給我帳單(或發票)。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "hóa đơn", meaning: "帳單", tail: "." },
              ],
            },
            {
              sentence: "Thanh toán hóa đơn.",
              translation: "支付帳單。",
              segments: [
                { text: "Thanh toán", meaning: "結帳/支付", tail: " " },
                { text: "hóa đơn", meaning: "帳單", tail: "." },
              ],
            },
          ],
          usage_note: "吃飯結帳喊 Tính tiền，索取單據說 Hóa đơn。",
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
              term_target: "Giá tiền",
              pronunciation: ["/za tiən/"],
              specific_note: "價錢",
              segments: [
                { text: "Giá", meaning: "價", tail: " " },
                { text: "tiền", meaning: "錢", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Giá bao nhiêu?",
              translation: "價格多少？",
              segments: [
                { text: "Giá", meaning: "價格", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: "?" },
              ],
            },
            {
              sentence: "Giảm giá.",
              translation: "降價 / 打折。",
              segments: [
                { text: "Giảm", meaning: "減", tail: " " },
                { text: "giá", meaning: "價", tail: "." },
              ],
            },
            {
              sentence: "Giá cao quá.",
              translation: "價格太高了。",
              segments: [
                { text: "Giá", meaning: "價格", tail: " " },
                { text: "cao", meaning: "高", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
          ],
          usage_note: "詢問時常用 Bao nhiêu tiền (多少錢)。",
          image_file: "price.png",
        },
        {
          id: "n-60",
          term_zh: "收據",
          related_terms: [
            {
              term_target: "Biên lai",
              pronunciation: ["/biən laj/"],
              specific_note: "收據",
              segments: [
                { text: "Biên", meaning: "邊", tail: " " },
                { text: "lai", meaning: "來", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Lấy biên lai.",
              translation: "拿收據。",
              segments: [
                { text: "Lấy", meaning: "拿/取", tail: " " },
                { text: "biên lai", meaning: "收據", tail: "." },
              ],
            },
            {
              sentence: "Giữ lại biên lai.",
              translation: "保留收據。",
              segments: [
                { text: "Giữ", meaning: "保存/守", tail: " " },
                { text: "lại", meaning: "下來", tail: " " },
                { text: "biên lai", meaning: "收據", tail: "." },
              ],
            },
            {
              sentence: "Ký tên vào biên lai.",
              translation: "在收據上簽名。",
              segments: [
                { text: "Ký", meaning: "簽", tail: " " },
                { text: "tên", meaning: "名", tail: " " },
                { text: "vào", meaning: "進/入", tail: " " },
                { text: "biên lai", meaning: "收據", tail: "." },
              ],
            },
          ],
          usage_note: "購物多用 Hóa đơn，繳費憑證多用 Biên lai。",
          image_file: "receipt.png",
        },
        {
          id: "n-61",
          term_zh: "尺寸",
          related_terms: [
            {
              term_target: "Size",
              pronunciation: ["/sai/"],
              specific_note: "外來語(常用)",
              segments: [{ text: "Size", meaning: "尺寸", tail: "" }],
            },
            {
              term_target: "Cỡ",
              pronunciation: ["/kə/"],
              specific_note: "尺碼",
              segments: [{ text: "Cỡ", meaning: "尺寸", tail: "" }],
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
              sentence: "Bạn mặc size gì?",
              translation: "你穿什麼尺寸？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "mặc", meaning: "穿", tail: " " },
                { text: "size", meaning: "尺寸", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Không đúng cỡ.",
              translation: "尺寸不對。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "đúng", meaning: "對/準確", tail: " " },
                { text: "cỡ", meaning: "尺寸", tail: "." },
              ],
            },
          ],
          usage_note: "買衣服直接說 Size S/M/L 即可。",
          image_file: "size.png",
        },
        {
          id: "n-62",
          term_zh: "入口",
          related_terms: [
            {
              term_target: "Lối vào",
              pronunciation: ["/loj vaːw/"],
              specific_note: "通道",
              segments: [
                { text: "Lối", meaning: "路/徑", tail: " " },
                { text: "vào", meaning: "進", tail: "" },
              ],
            },
            {
              term_target: "Cửa vào",
              pronunciation: ["/kɨə vaːw/"],
              specific_note: "門",
              segments: [
                { text: "Cửa", meaning: "門", tail: " " },
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
              translation: "禁止進入 (No entrance)。",
              segments: [
                { text: "Cấm", meaning: "禁止", tail: " " },
                { text: "vào", meaning: "進", tail: "." },
              ],
            },
          ],
          usage_note: "找入口時問「Lối vào」。",
          image_file: "entrance.png",
        },
        {
          id: "n-63",
          term_zh: "出口",
          related_terms: [
            {
              term_target: "Lối ra",
              pronunciation: ["/loj za/"],
              specific_note: "通道",
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
              translation: "緊急出口。",
              segments: [
                { text: "Lối", meaning: "路", tail: " " },
                { text: "thoát", meaning: "逃/脫", tail: " " },
                { text: "hiểm", meaning: "險", tail: "." },
              ],
            },
          ],
          usage_note: "看到 Exit 標誌通常會寫「Lối ra」。",
          image_file: "exit.png",
        },
        {
          id: "n-64",
          term_zh: "台灣",
          related_terms: [
            {
              term_target: "Đài Loan",
              pronunciation: ["/ɗaːj lwan/"],
              specific_note: "地名",
              segments: [
                { text: "Đài", meaning: "臺", tail: " " },
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
              translation: "歡迎來台灣。",
              segments: [
                { text: "Chào mừng", meaning: "歡迎", tail: " " },
                { text: "đến", meaning: "來到", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Đài Loan rất đẹp.",
              translation: "台灣很美。",
              segments: [
                { text: "Đài Loan", meaning: "台灣", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "đẹp", meaning: "美", tail: "." },
              ],
            },
          ],
          usage_note: "一定要學會的地名。",
          image_file: "taiwan.png",
        },
        {
          id: "n-65",
          term_zh: "台灣人",
          related_terms: [
            {
              term_target: "Người Đài Loan",
              pronunciation: ["/ŋɨəj ɗaːj lwan/"],
              specific_note: "國籍",
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
              sentence: "Cô ấy là người Đài Loan.",
              translation: "她是台灣人。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích món ăn Đài Loan.",
              translation: "我喜歡台灣菜(食物)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "món ăn", meaning: "食物", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
          ],
          usage_note: "自我介紹必備：Tôi là người Đài Loan.",
          image_file: "taiwanese.png",
        },
        {
          id: "n-66",
          term_zh: "一切 / 所有事物",
          related_terms: [
            {
              term_target: "Mọi thứ",
              pronunciation: ["/mɔj tʰɨ/"],
              specific_note: "一切",
              segments: [
                { text: "Mọi", meaning: "每/諸", tail: " " },
                { text: "thứ", meaning: "東西/事", tail: "" },
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
              sentence: "Mọi thứ đều ổn.",
              translation: "一切都好。",
              segments: [
                { text: "Mọi thứ", meaning: "一切", tail: " " },
                { text: "đều", meaning: "都", tail: " " },
                { text: "ổn", meaning: "穩/好", tail: "." },
              ],
            },
            {
              sentence: "Tất cả đã sẵn sàng.",
              translation: "一切(全部)都準備好了。",
              segments: [
                { text: "Tất cả", meaning: "全部", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "sẵn sàng", meaning: "準備就緒", tail: "." },
              ],
            },
            {
              sentence: "Cảm ơn vì tất cả.",
              translation: "感謝這一切。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "vì", meaning: "因為", tail: " " },
                { text: "tất cả", meaning: "全部", tail: "." },
              ],
            },
          ],
          usage_note: "泛指所有事情用 Mọi thứ，指總數量用 Tất cả。",
          image_file: "everything.png",
        },
        {
          id: "n-67",
          term_zh: "錢包",
          related_terms: [
            {
              term_target: "Ví",
              pronunciation: ["/vi/"],
              specific_note: "北部/通用",
              segments: [{ text: "Ví", meaning: "皮夾", tail: "" }],
            },
            {
              term_target: "Bóp",
              pronunciation: ["/bɔp/"],
              specific_note: "南部",
              segments: [{ text: "Bóp", meaning: "錢包", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi bị mất ví.",
              translation: "我的錢包掉了(被弄丟)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "bị", meaning: "被/遭", tail: " " },
                { text: "mất", meaning: "失去", tail: " " },
                { text: "ví", meaning: "錢包", tail: "." },
              ],
            },
            {
              sentence: "Ví của tôi hết tiền.",
              translation: "我錢包沒錢了。",
              segments: [
                { text: "Ví", meaning: "錢包", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "hết", meaning: "完/盡", tail: " " },
                { text: "tiền", meaning: "錢", tail: "." },
              ],
            },
            {
              sentence: "Nhặt được cái bóp.",
              translation: "撿到一個錢包 (南方口語)。",
              segments: [
                { text: "Nhặt", meaning: "撿", tail: " " },
                { text: "được", meaning: "到/得", tail: " " },
                { text: "cái", meaning: "個", tail: " " },
                { text: "bóp", meaning: "錢包", tail: "." },
              ],
            },
          ],
          usage_note: "北越用 Ví，南越用 Bóp。",
          image_file: "wallet.png",
        },
        {
          id: "n-68",
          term_zh: "身分證",
          related_terms: [
            {
              term_target: "Căn cước",
              pronunciation: ["/kan kɨək/"],
              specific_note: "新式身分證",
              segments: [
                { text: "Căn cước", meaning: "身分證(晶片)", tail: "" },
              ],
            },
            {
              term_target: "Giấy tờ",
              pronunciation: ["/zəj tə/"],
              specific_note: "證件(統稱)",
              segments: [{ text: "Giấy tờ", meaning: "文件/證件", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho xem giấy tờ.",
              translation: "請出示證件。",
              segments: [
                { text: "Cho", meaning: "讓/給", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "giấy tờ", meaning: "證件", tail: "." },
              ],
            },
            {
              sentence: "Bạn có mang căn cước không?",
              translation: "你有帶身分證嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "mang", meaning: "帶", tail: " " },
                { text: "căn cước", meaning: "身分證", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Kiểm tra giấy tờ.",
              translation: "檢查證件。",
              segments: [
                { text: "Kiểm tra", meaning: "檢查", tail: " " },
                { text: "giấy tờ", meaning: "證件", tail: "." },
              ],
            },
          ],
          usage_note: "現在越南主要使用 Căn cước (晶片身分證)。",
          image_file: "id.png",
        },
        {
          id: "n-69",
          term_zh: "護照",
          related_terms: [
            {
              term_target: "Hộ chiếu",
              pronunciation: ["/ho tʃiəw/"],
              specific_note: "漢語:護照",
              segments: [
                { text: "Hộ", meaning: "護/户", tail: " " },
                { text: "chiếu", meaning: "照", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi xem hộ chiếu.",
              translation: "給我看你的護照。",
              segments: [
                { text: "Cho", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "hộ chiếu", meaning: "護照", tail: "." },
              ],
            },
            {
              sentence: "Tôi bị mất hộ chiếu.",
              translation: "我弄丟了護照。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "bị", meaning: "被/遭", tail: " " },
                { text: "mất", meaning: "丟失", tail: " " },
                { text: "hộ chiếu", meaning: "護照", tail: "." },
              ],
            },
            {
              sentence: "Mang theo hộ chiếu.",
              translation: "隨身攜帶護照。",
              segments: [
                { text: "Mang", meaning: "帶", tail: " " },
                { text: "theo", meaning: "跟隨/隨身", tail: " " },
                { text: "hộ chiếu", meaning: "護照", tail: "." },
              ],
            },
          ],
          usage_note: "住宿Check-in時必備。",
          image_file: "passport.png",
        },
        {
          id: "n-70",
          term_zh: "餐廳",
          related_terms: [
            {
              term_target: "Nhà hàng",
              pronunciation: ["/ɲa haŋ/"],
              specific_note: "正式餐廳",
              segments: [
                { text: "Nhà", meaning: "家/房", tail: " " },
                { text: "hàng", meaning: "行/店", tail: "" },
              ],
            },
            {
              term_target: "Quán ăn",
              pronunciation: ["/kwan an/"],
              specific_note: "小餐館",
              segments: [
                { text: "Quán", meaning: "店", tail: " " },
                { text: "ăn", meaning: "吃", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nhà hàng sang trọng.",
              translation: "高級(豪華)餐廳。",
              segments: [
                { text: "Nhà hàng", meaning: "餐廳", tail: " " },
                { text: "sang trọng", meaning: "莊重/豪華", tail: "." },
              ],
            },
            {
              sentence: "Đi ăn nhà hàng.",
              translation: "去餐廳吃飯。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
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
          usage_note: "Nhà hàng 是有規模的，路邊小店叫 Quán。",
          image_file: "restaurant.png",
        },
        {
          id: "n-71",
          term_zh: "飯店",
          related_terms: [
            {
              term_target: "Khách sạn",
              pronunciation: ["/xat͡ʃ san/"],
              specific_note: "漢語:客棧",
              segments: [
                { text: "Khách", meaning: "客", tail: " " },
                { text: "sạn", meaning: "棧", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đặt khách sạn.",
              translation: "預訂飯店。",
              segments: [
                { text: "Đặt", meaning: "訂", tail: " " },
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
          usage_note: "住宿的地方。",
          image_file: "hotel.png",
        },
        {
          id: "n-72",
          term_zh: "地方 / 場所",
          related_terms: [
            {
              term_target: "Nơi",
              pronunciation: ["/nəj/"],
              specific_note: "地點(抽象/大)",
              segments: [{ text: "Nơi", meaning: "地方", tail: "" }],
            },
            {
              term_target: "Chỗ",
              pronunciation: ["/tʃo/"],
              specific_note: "位置(具體/小)",
              segments: [{ text: "Chỗ", meaning: "處/位子", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nơi này đẹp quá.",
              translation: "這地方好美。",
              segments: [
                { text: "Nơi", meaning: "地方", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "đẹp", meaning: "美", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Nhầm chỗ rồi.",
              translation: "走錯地方(位子)了。",
              segments: [
                { text: "Nhầm", meaning: "錯/誤", tail: " " },
                { text: "chỗ", meaning: "地方", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Đây là một nơi nổi tiếng.",
              translation: "這是一個有名的地方。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "một", meaning: "一個", tail: " " },
                { text: "nơi", meaning: "地方", tail: " " },
                { text: "nổi tiếng", meaning: "有名", tail: "." },
              ],
            },
          ],
          usage_note: "風景名勝用 Nơi，停車位或座位用 Chỗ。",
          image_file: "place.png",
        },
        {
          id: "n-73",
          term_zh: "店員 / 職員",
          related_terms: [
            {
              term_target: "Nhân viên",
              pronunciation: ["/ɲən viən/"],
              specific_note: "漢語:人員",
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
                { text: "nhân viên", meaning: "店員/職員", tail: "." },
              ],
            },
            {
              sentence: "Nhân viên phục vụ.",
              translation: "服務生。",
              segments: [
                { text: "Nhân viên", meaning: "人員", tail: " " },
                { text: "phục vụ", meaning: "服務", tail: "." },
              ],
            },
            {
              sentence: "Tôi là nhân viên bán hàng.",
              translation: "我是銷售員 (賣貨員)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "nhân viên", meaning: "職員", tail: " " },
                { text: "bán", meaning: "賣", tail: " " },
                { text: "hàng", meaning: "貨", tail: "." },
              ],
            },
          ],
          usage_note: "各種工作人員都通稱 Nhân viên。",
          image_file: "clerk.png",
        },
        {
          id: "n-74",
          term_zh: "超市",
          related_terms: [
            {
              term_target: "Siêu thị",
              pronunciation: ["/siəw tʰi/"],
              specific_note: "漢語:超市",
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
              sentence: "Gần đây có siêu thị không?",
              translation: "這附近有超市嗎？",
              segments: [
                { text: "Gần đây", meaning: "附近", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "siêu thị", meaning: "超市", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "大型賣場。",
          image_file: "supermarket.png",
        },
        {
          id: "n-75",
          term_zh: "月台",
          related_terms: [
            {
              term_target: "Sân ga",
              pronunciation: ["/sən ga/"],
              specific_note: "火車月台",
              segments: [
                { text: "Sân", meaning: "場/院", tail: " " },
                { text: "ga", meaning: "車站", tail: "" },
              ],
            },
            {
              term_target: "Cửa ra",
              pronunciation: ["/kɨə za/"],
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
              translation: "第一月台 (車站)。",
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
              sentence: "Xe lửa sắp vào ga.",
              translation: "火車快進站了。",
              segments: [
                { text: "Xe lửa", meaning: "火車(南)", tail: " " },
                { text: "sắp", meaning: "快要", tail: " " },
                { text: "vào", meaning: "進", tail: " " },
                { text: "ga", meaning: "站", tail: "." },
              ],
            },
          ],
          usage_note: "火車用 Sân ga，機場常用 Cửa (Gate)。",
          image_file: "platform.png",
        },
        {
          id: "n-76",
          term_zh: "音樂",
          related_terms: [
            {
              term_target: "Nhạc",
              pronunciation: ["/ɲak/"],
              specific_note: "口語",
              segments: [{ text: "Nhạc", meaning: "樂", tail: "" }],
            },
            {
              term_target: "Âm nhạc",
              pronunciation: ["/əm ɲak/"],
              specific_note: "正式",
              segments: [
                { text: "Âm", meaning: "音", tail: " " },
                { text: "nhạc", meaning: "樂", tail: "" },
              ],
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
              sentence: "Tôi thích nhạc trẻ.",
              translation: "我喜歡流行音樂 (年輕音樂)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "nhạc", meaning: "音樂", tail: " " },
                { text: "trẻ", meaning: "年輕", tail: "." },
              ],
            },
            {
              sentence: "Nhạc to quá.",
              translation: "音樂太大聲了。",
              segments: [
                { text: "Nhạc", meaning: "音樂", tail: " " },
                { text: "to", meaning: "大", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
          ],
          usage_note: "口語都說 Nhạc。",
          image_file: "music.png",
        },
        {
          id: "n-77",
          term_zh: "雨",
          related_terms: [
            {
              term_target: "Mưa",
              pronunciation: ["/mɨa/"],
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
                { text: "mưa", meaning: "雨/下雨", tail: "." },
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
              sentence: "Tôi không thích mưa.",
              translation: "我不喜歡下雨。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "mưa", meaning: "雨", tail: "." },
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
              term_target: "Ảnh",
              pronunciation: ["/aɲ/"],
              specific_note: "北部/通用",
              segments: [{ text: "Ảnh", meaning: "影/照片", tail: "" }],
            },
            {
              term_target: "Hình",
              pronunciation: ["/hiɲ/"],
              specific_note: "南部",
              segments: [{ text: "Hình", meaning: "形/照片", tail: "" }],
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
              sentence: "Xem ảnh.",
              translation: "看照片。",
              segments: [
                { text: "Xem", meaning: "看", tail: " " },
                { text: "ảnh", meaning: "照片", tail: "." },
              ],
            },
            {
              sentence: "Chụp hộ tôi tấm ảnh.",
              translation: "幫我拍張照。",
              segments: [
                { text: "Chụp", meaning: "拍", tail: " " },
                { text: "hộ", meaning: "幫忙", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "tấm", meaning: "張", tail: " " },
                { text: "ảnh", meaning: "照片", tail: "." },
              ],
            },
          ],
          usage_note: "北越說 Ảnh，南越說 Hình。",
          image_file: "picture.png",
        },
        {
          id: "n-79",
          term_zh: "書",
          related_terms: [
            {
              term_target: "Sách",
              pronunciation: ["/sat͡ʃ/"],
              specific_note: "漢語:冊",
              segments: [{ text: "Sách", meaning: "書", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đọc sách.",
              translation: "看(讀)書。",
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
                { text: "ra", meaning: "出來", tail: "." },
              ],
            },
            {
              sentence: "Đây là sách của tôi.",
              translation: "這是我的書。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sách", meaning: "書", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "書籍。",
          image_file: "book.png",
        },
        {
          id: "n-80",
          term_zh: "廁所 / 洗手間",
          related_terms: [
            {
              term_target: "Nhà vệ sinh",
              pronunciation: ["/ɲa ve siɲ/"],
              specific_note: "標準",
              segments: [
                { text: "Nhà", meaning: "房", tail: " " },
                { text: "vệ sinh", meaning: "衛生", tail: "" },
              ],
            },
            {
              term_target: "Toilet",
              pronunciation: ["/tɔj lɛt/"],
              specific_note: "外來語",
              segments: [{ text: "Toilet", meaning: "廁所", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhà vệ sinh ở đâu?",
              translation: "廁所在哪裡？",
              segments: [
                { text: "Nhà vệ sinh", meaning: "洗手間", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "?" },
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
              translation: "乾淨的廁所。",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "sạch", meaning: "乾淨", tail: "." },
              ],
            },
          ],
          usage_note: "最實用的問路詞。",
          image_file: "restroom.png",
        },
        {
          id: "n-81",
          term_zh: "天氣",
          related_terms: [
            {
              term_target: "Thời tiết",
              pronunciation: ["/tʰəj tiət/"],
              specific_note: "漢語:時節",
              segments: [
                { text: "Thời", meaning: "時", tail: " " },
                { text: "tiết", meaning: "節/氣候", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Thời tiết đẹp.",
              translation: "好天氣。",
              segments: [
                { text: "Thời tiết", meaning: "天氣", tail: " " },
                { text: "đẹp", meaning: "美/好", tail: "." },
              ],
            },
            {
              sentence: "Thời tiết xấu.",
              translation: "壞天氣。",
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
          usage_note: "氣候。",
          image_file: "weather.png",
        },
        {
          id: "n-82",
          term_zh: "訊息",
          related_terms: [
            {
              term_target: "Tin nhắn",
              pronunciation: ["/tin ɲan/"],
              specific_note: "簡訊/留言",
              segments: [
                { text: "Tin", meaning: "信/訊", tail: " " },
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
              sentence: "Để lại tin nhắn.",
              translation: "留言。",
              segments: [
                { text: "Để lại", meaning: "留下", tail: " " },
                { text: "tin nhắn", meaning: "訊息", tail: "." },
              ],
            },
            {
              sentence: "Tôi nhận được tin nhắn.",
              translation: "我收到訊息了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nhận", meaning: "收", tail: " " },
                { text: "được", meaning: "到", tail: " " },
                { text: "tin nhắn", meaning: "訊息", tail: "." },
              ],
            },
          ],
          usage_note: "手機簡訊或Line訊息都叫 Tin nhắn。",
          image_file: "message.png",
        },
      ],
    },
    {
      id: "adverbs",
      name: "常用副詞 (越南語)",
      items: [
        {
          id: "adv-01",
          term_zh: "現在",
          related_terms: [
            {
              term_target: "Bây giờ",
              pronunciation: ["/bəj zə/"],
              specific_note: "現在",
              segments: [
                { text: "Bây", meaning: "現", tail: " " },
                { text: "giờ", meaning: "時", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Làm ngay bây giờ.",
              translation: "現在立刻做。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "ngay", meaning: "立刻", tail: " " },
                { text: "bây giờ", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Bây giờ tôi bận.",
              translation: "我現在很忙。",
              segments: [
                { text: "Bây giờ", meaning: "現在", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
              ],
            },
            {
              sentence: "Bạn đang ở đâu?",
              translation: "你現在在哪裡？(省略了現在)。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "口語常簡稱為 Giờ (如 Giờ đi đâu? 現在去哪？)。",
          image_file: "now.png",
        },
        {
          id: "adv-02",
          term_zh: "非常",
          related_terms: [
            {
              term_target: "Rất",
              pronunciation: ["/zət/"],
              specific_note: "放形容詞前",
              segments: [{ text: "Rất", meaning: "很/非常", tail: "" }],
            },
            {
              term_target: "Lắm",
              pronunciation: ["/lam/"],
              specific_note: "放形容詞後",
              segments: [{ text: "Lắm", meaning: "很/甚", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Rất tốt.",
              translation: "非常好。",
              segments: [
                { text: "Rất", meaning: "非常", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Cảm ơn nhiều lắm.",
              translation: "非常感謝 (感謝很多)。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
            {
              sentence: "Hôm nay trời rất nóng.",
              translation: "今天非常熱。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "trời", meaning: "天", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "nóng", meaning: "熱", tail: "." },
              ],
            },
          ],
          usage_note: "Rất + 形容詞 = 形容詞 + Lắm。",
          image_file: "very.png",
        },
        {
          id: "adv-03",
          term_zh: "真的",
          related_terms: [
            {
              term_target: "Thật sự",
              pronunciation: ["/tʰət sɨ/"],
              specific_note: "確實/真的",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "sự", meaning: "事", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Thật á?",
              translation: "真的嗎？(口語)。",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "á", meaning: "啊(語助詞)", tail: "?" },
              ],
            },
            {
              sentence: "Tôi thực sự thích nó.",
              translation: "我真的喜歡它。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thực sự", meaning: "確實/真的", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "nó", meaning: "它", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy rất tốt.",
              translation: "她人真的很好 (用「很」來強調)。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
          ],
          usage_note: "Thật sự 強調真實性。",
          image_file: "really.png",
        },
        {
          id: "adv-04",
          term_zh: "好好地 / 很好地",
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
              segments: [{ text: "Giỏi", meaning: "優秀", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ngủ ngon.",
              translation: "睡好 (晚安)。",
              segments: [
                { text: "Ngủ", meaning: "睡", tail: " " },
                { text: "ngon", meaning: "香/好", tail: "." },
              ],
            },
            {
              sentence: "Làm tốt lắm!",
              translation: "做得好 (Well done)！",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "tốt", meaning: "好", tail: " " },
                { text: "lắm", meaning: "很", tail: "!" },
              ],
            },
            {
              sentence: "Tôi thấy không khỏe.",
              translation: "我覺得不舒服 (不健康/不好)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thấy", meaning: "覺得", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "khỏe", meaning: "健康", tail: "." },
              ],
            },
          ],
          usage_note: "形容動作做得好用 Tốt 或 Giỏi。",
          image_file: "well.png",
        },
        {
          id: "adv-05",
          term_zh: "經常",
          related_terms: [
            {
              term_target: "Thường",
              pronunciation: ["/tʰɨəŋ/"],
              specific_note: "常",
              segments: [{ text: "Thường", meaning: "常", tail: "" }],
            },
            {
              term_target: "Hay",
              pronunciation: ["/haj/"],
              specific_note: "口語/常",
              segments: [{ text: "Hay", meaning: "常/愛", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi thường đến đây.",
              translation: "我常來這裡。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thường", meaning: "常", tail: " " },
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
                { text: "tập thể dục", meaning: "做體操/運動", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Ở đây hay mưa.",
              translation: "這裡常下雨。",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "hay", meaning: "常", tail: " " },
                { text: "mưa", meaning: "下雨", tail: "." },
              ],
            },
          ],
          usage_note: "Hay + 動詞 = 常做某事。",
          image_file: "often.png",
        },
        {
          id: "adv-06",
          term_zh: "通常",
          related_terms: [
            {
              term_target: "Thông thường",
              pronunciation: ["/tʰəwŋ͡m tʰɨəŋ/"],
              specific_note: "一般來說",
              segments: [
                { text: "Thông", meaning: "通", tail: " " },
                { text: "thường", meaning: "常", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Thông thường là 6 giờ.",
              translation: "通常是六點。",
              segments: [
                { text: "Thông thường", meaning: "通常", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "6", meaning: "六", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Tôi thường dậy lúc 7 giờ.",
              translation: "我通常(習慣)7點起床。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thường", meaning: "常", tail: " " },
                { text: "dậy", meaning: "起", tail: " " },
                { text: "lúc", meaning: "在", tail: " " },
                { text: "7", meaning: "七", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Bạn thường làm gì?",
              translation: "你通常做什麼？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thường", meaning: "常", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "習慣性動作。",
          image_file: "usually.png",
        },
        {
          id: "adv-07",
          term_zh: "已經",
          related_terms: [
            {
              term_target: "Đã",
              pronunciation: ["/ɗa/"],
              specific_note: "過去式標記",
              segments: [{ text: "Đã", meaning: "已經", tail: "" }],
            },
            {
              term_target: "Rồi",
              pronunciation: ["/zoj/"],
              specific_note: "句尾助詞(了)",
              segments: [{ text: "Rồi", meaning: "了/完", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Xong rồi.",
              translation: "已經好了 (做完了)。",
              segments: [
                { text: "Xong", meaning: "完", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Đã 10 giờ rồi.",
              translation: "已經10點了。",
              segments: [
                { text: "Đã", meaning: "已經", tail: " " },
                { text: "10", meaning: "十", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi ăn rồi.",
              translation: "我吃過了 (已經吃了)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "動詞 + Rồi = 已經做了。",
          image_file: "already.png",
        },
        {
          id: "adv-08",
          term_zh: "只有",
          related_terms: [
            {
              term_target: "Chỉ",
              pronunciation: ["/tʃi/"],
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
              sentence: "Tôi chỉ có 100 nghìn.",
              translation: "我只有10萬(越盾)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chỉ", meaning: "只", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "100", meaning: "一百", tail: " " },
                { text: "nghìn", meaning: "千", tail: "." },
              ],
            },
            {
              sentence: "Chỉ bạn mới giúp được tôi.",
              translation: "只有你能幫我。",
              segments: [
                { text: "Chỉ", meaning: "只", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "mới", meaning: "才", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "được", meaning: "得", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "限定。",
          image_file: "only.png",
        },
        {
          id: "adv-09",
          term_zh: "再次 / 又",
          related_terms: [
            {
              term_target: "Lại",
              pronunciation: ["/laj/"],
              specific_note: "重複",
              segments: [{ text: "Lại", meaning: "再", tail: "" }],
            },
            {
              term_target: "Nữa",
              pronunciation: ["/nɨa/"],
              specific_note: "更多/再",
              segments: [{ text: "Nữa", meaning: "再", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Thử lại.",
              translation: "再試一次。",
              segments: [
                { text: "Thử", meaning: "試", tail: " " },
                { text: "lại", meaning: "再/重來", tail: "." },
              ],
            },
            {
              sentence: "Nói lại đi.",
              translation: "請再說一次。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Không bao giờ làm thế nữa.",
              translation: "再也不會那樣做了。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "bao giờ", meaning: "何時(永遠)", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "thế", meaning: "那樣", tail: " " },
                { text: "nữa", meaning: "再", tail: "." },
              ],
            },
          ],
          usage_note: "動詞 + Lại = 重做；句尾 + Nữa = 再一次。",
          image_file: "again.png",
        },
        {
          id: "adv-10",
          term_zh: "大約",
          related_terms: [
            {
              term_target: "Khoảng",
              pronunciation: ["/xwaŋ/"],
              specific_note: "大概",
              segments: [{ text: "Khoảng", meaning: "大約", tail: "" }],
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
              sentence: "Khoảng 5 cây số.",
              translation: "大約5公里。",
              segments: [
                { text: "Khoảng", meaning: "大約", tail: " " },
                { text: "5", meaning: "五", tail: " " },
                { text: "cây số", meaning: "公里", tail: "." },
              ],
            },
            {
              sentence: "Giá khoảng 50 nghìn.",
              translation: "價格大約5萬(越盾)。",
              segments: [
                { text: "Giá", meaning: "價格", tail: " " },
                { text: "khoảng", meaning: "大約", tail: " " },
                { text: "50", meaning: "五十", tail: " " },
                { text: "nghìn", meaning: "千", tail: "." },
              ],
            },
          ],
          usage_note: "用於時間、距離、金錢。",
          image_file: "about.png",
        },
        {
          id: "adv-11",
          term_zh: "一點點",
          related_terms: [
            {
              term_target: "Một chút",
              pronunciation: ["/mot tʃut/"],
              specific_note: "一點",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "chút", meaning: "點/些", tail: "" },
              ],
            },
            {
              term_target: "Xíu",
              pronunciation: ["/siu/"],
              specific_note: "一點點(口語)",
              segments: [{ text: "Xíu", meaning: "小/少", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cay một chút.",
              translation: "有一點辣。",
              segments: [
                { text: "Cay", meaning: "辣", tail: " " },
                { text: "một chút", meaning: "一點", tail: "." },
              ],
            },
            {
              sentence: "Tôi hơi mệt một chút.",
              translation: "我有一點累。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "hơi", meaning: "稍微", tail: " " },
                { text: "mệt", meaning: "累", tail: " " },
                { text: "một chút", meaning: "一點", tail: "." },
              ],
            },
            {
              sentence: "Chờ xíu nhé.",
              translation: "等一下下喔 (口語)。",
              segments: [
                { text: "Chờ", meaning: "等", tail: " " },
                { text: "xíu", meaning: "一下", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "少量。",
          image_file: "a_little.png",
        },
        {
          id: "adv-12",
          term_zh: "也 / 也是",
          related_terms: [
            {
              term_target: "Cũng",
              pronunciation: ["/kuŋ͡m/"],
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
                { text: "giáo viên", meaning: "老師", tail: "." },
              ],
            },
            {
              sentence: "Tôi cũng vậy.",
              translation: "我也是 (Me too)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "vậy", meaning: "那樣", tail: "." },
              ],
            },
          ],
          usage_note: "放在動詞前面。",
          image_file: "also.png",
        },
        {
          id: "adv-13",
          term_zh: "或許 / 也許",
          related_terms: [
            {
              term_target: "Có lẽ",
              pronunciation: ["/kɔ lɛ/"],
              specific_note: "可能/或許",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "lẽ", meaning: "理", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Có lẽ để sau.",
              translation: "也許以後吧。",
              segments: [
                { text: "Có lẽ", meaning: "或許", tail: " " },
                { text: "để", meaning: "留/放", tail: " " },
                { text: "sau", meaning: "以後", tail: "." },
              ],
            },
            {
              sentence: "Có lẽ bạn đúng.",
              translation: "也許你是對的。",
              segments: [
                { text: "Có lẽ", meaning: "或許", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đúng", meaning: "對", tail: "." },
              ],
            },
            {
              sentence: "Chắc là vậy.",
              translation: "應該是吧 (大概)。",
              segments: [
                { text: "Chắc", meaning: "肯定/大概", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "vậy", meaning: "那樣", tail: "." },
              ],
            },
          ],
          usage_note: "表示不確定。",
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
              term_target: "Lát nữa",
              pronunciation: ["/lat nɨa/"],
              specific_note: "等一下",
              segments: [
                { text: "Lát", meaning: "片刻", tail: " " },
                { text: "nữa", meaning: "再", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hẹn gặp lại sau.",
              translation: "待會見(以後見)。",
              segments: [
                { text: "Hẹn", meaning: "約", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "sau", meaning: "後", tail: "." },
              ],
            },
            {
              sentence: "Gọi tôi sau nhé.",
              translation: "晚點打給我。",
              segments: [
                { text: "Gọi", meaning: "打(電話)", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "sau", meaning: "後", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Hai năm sau.",
              translation: "兩年後。",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "năm", meaning: "年", tail: " " },
                { text: "sau", meaning: "後", tail: "." },
              ],
            },
          ],
          usage_note: "時間先後。",
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
              segments: [{ text: "Sớm", meaning: "早/快", tail: "" }],
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
              sentence: "Hẹn gặp lại sớm.",
              translation: "希望能很快再見到你。",
              segments: [
                { text: "Hẹn", meaning: "約", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "sớm", meaning: "早", tail: "." },
              ],
            },
            {
              sentence: "Sớm khỏi bệnh nhé.",
              translation: "早日康復。",
              segments: [
                { text: "Sớm", meaning: "早", tail: " " },
                { text: "khỏi", meaning: "痊癒", tail: " " },
                { text: "bệnh", meaning: "病", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Sắp đến rồi.",
              translation: "快到了。",
              segments: [
                { text: "Sắp", meaning: "快要", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "時間短。",
          image_file: "soon.png",
        },
        {
          id: "adv-16",
          term_zh: "一起",
          related_terms: [
            {
              term_target: "Cùng nhau",
              pronunciation: ["/kuŋ͡m ɲaw/"],
              specific_note: "共同",
              segments: [
                { text: "Cùng", meaning: "同", tail: " " },
                { text: "nhau", meaning: "彼此", tail: "" },
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
              sentence: "Chúng ta làm cùng nhau.",
              translation: "我們一起做。",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "cùng nhau", meaning: "一起", tail: "." },
              ],
            },
            {
              sentence: "Chúng tôi ở bên nhau.",
              translation: "我們在一起。",
              segments: [
                { text: "Chúng tôi", meaning: "我們", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "bên", meaning: "邊", tail: " " },
                { text: "nhau", meaning: "彼此", tail: "." },
              ],
            },
          ],
          usage_note: "共同行動。",
          image_file: "together.png",
        },
        {
          id: "adv-17",
          term_zh: "仍然 / 還",
          related_terms: [
            {
              term_target: "Vẫn",
              pronunciation: ["/vən/"],
              specific_note: "還/依舊",
              segments: [{ text: "Vẫn", meaning: "仍", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Vẫn ở đây.",
              translation: "還在這裡。",
              segments: [
                { text: "Vẫn", meaning: "還", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Tôi vẫn đói.",
              translation: "我還是很餓。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "vẫn", meaning: "還", tail: " " },
                { text: "đói", meaning: "餓", tail: "." },
              ],
            },
            {
              sentence: "Bạn vẫn làm việc à?",
              translation: "你還在工作啊？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "vẫn", meaning: "還", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "à", meaning: "啊", tail: "?" },
              ],
            },
          ],
          usage_note: "狀態持續。",
          image_file: "still.png",
        },
        {
          id: "adv-18",
          term_zh: "一般來說 / 通常",
          related_terms: [
            {
              term_target: "Bình thường",
              pronunciation: ["/biɲ tʰɨəŋ/"],
              specific_note: "普通/平常",
              segments: [
                { text: "Bình", meaning: "平", tail: " " },
                { text: "thường", meaning: "常", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bình thường tôi đi bộ.",
              translation: "平常我走路。",
              segments: [
                { text: "Bình thường", meaning: "平常", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đi bộ", meaning: "走路", tail: "." },
              ],
            },
            {
              sentence: "Mọi chuyện bình thường.",
              translation: "一切正常。",
              segments: [
                { text: "Mọi", meaning: "所有", tail: " " },
                { text: "chuyện", meaning: "事", tail: " " },
                { text: "bình thường", meaning: "正常", tail: "." },
              ],
            },
            {
              sentence: "Cũng bình thường.",
              translation: "也就普普通通。",
              segments: [
                { text: "Cũng", meaning: "也", tail: " " },
                { text: "bình thường", meaning: "普通", tail: "." },
              ],
            },
          ],
          usage_note: "常態。",
          image_file: "normally.png",
        },
        {
          id: "adv-19",
          term_zh: "立刻 / 馬上",
          related_terms: [
            {
              term_target: "Ngay",
              pronunciation: ["/ŋaj/"],
              specific_note: "立即",
              segments: [{ text: "Ngay", meaning: "立刻", tail: "" }],
            },
            {
              term_target: "Liền",
              pronunciation: ["/liən/"],
              specific_note: "緊接",
              segments: [{ text: "Liền", meaning: "連/馬上", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi ngay.",
              translation: "馬上去。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
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
              sentence: "Tôi cần giúp ngay.",
              translation: "我需要立刻的協助。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "ngay", meaning: "立刻", tail: "." },
              ],
            },
          ],
          usage_note: "Ngay (立刻)，Liền (接著)。",
          image_file: "immediately.png",
        },
        {
          id: "adv-20",
          term_zh: "也不",
          related_terms: [
            {
              term_target: "Cũng không",
              pronunciation: ["/kuŋ͡m xəwŋ͡m/"],
              specific_note: "也不",
              segments: [
                { text: "Cũng", meaning: "也", tail: " " },
                { text: "không", meaning: "不", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi cũng không biết.",
              translation: "我也不知道。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "biết", meaning: "知道", tail: "." },
              ],
            },
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
              sentence: "Cả hai đều không tốt.",
              translation: "兩個都不好。",
              segments: [
                { text: "Cả", meaning: "全", tail: " " },
                { text: "hai", meaning: "二", tail: " " },
                { text: "đều", meaning: "都", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
          ],
          usage_note: "否定附和。",
          image_file: "neither.png",
        },
      ],
    },
    {
      id: "questions",
      name: "疑問詞 (越南語)",
      items: [
        {
          id: "q-01",
          term_zh: "什麼",
          related_terms: [
            {
              term_target: "Gì",
              pronunciation: ["/zi/"],
              specific_note: "什麼",
              segments: [{ text: "Gì", meaning: "什麼", tail: "" }],
            },
            {
              term_target: "Cái gì",
              pronunciation: ["/kaj zi/"],
              specific_note: "什麼東西",
              segments: [
                { text: "Cái", meaning: "個(東西)", tail: " " },
                { text: "gì", meaning: "什麼", tail: "" },
              ],
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
              translation: "你想吃什麼？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "放在動詞後面，如：做什麼 (Làm gì)。",
          image_file: "what.png",
        },
        {
          id: "q-02",
          term_zh: "如何 / 怎麼樣",
          related_terms: [
            {
              term_target: "Thế nào",
              pronunciation: ["/tʰe naːw/"],
              specific_note: "怎麼樣(狀態)",
              segments: [
                { text: "Thế", meaning: "態/勢", tail: " " },
                { text: "nào", meaning: "哪", tail: "" },
              ],
            },
            {
              term_target: "Làm sao",
              pronunciation: ["/lam saːw/"],
              specific_note: "怎麼(方法)",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "sao", meaning: "星/怎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn thấy thế nào?",
              translation: "你覺得怎麼樣？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thấy", meaning: "覺得", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Làm thế nào để đi đến đó?",
              translation: "要如何去那裡？",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "thế nào", meaning: "如何", tail: " " },
                { text: "để", meaning: "為了", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "đó", meaning: "那裡", tail: "?" },
              ],
            },
            {
              sentence: "Dạo này thế nào?",
              translation: "最近好嗎(怎麼樣)？",
              segments: [
                { text: "Dạo này", meaning: "最近", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
          ],
          usage_note: "問意見或狀態用 Thế nào。",
          image_file: "how.png",
        },
        {
          id: "q-03",
          term_zh: "何時",
          related_terms: [
            {
              term_target: "Khi nào",
              pronunciation: ["/xi naːw/"],
              specific_note: "何時",
              segments: [
                { text: "Khi", meaning: "時", tail: " " },
                { text: "nào", meaning: "哪", tail: "" },
              ],
            },
            {
              term_target: "Bao giờ",
              pronunciation: ["/baːw zə/"],
              specific_note: "幾時(口語)",
              segments: [
                { text: "Bao", meaning: "多少", tail: " " },
                { text: "giờ", meaning: "點/時", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Khi nào bạn đi?",
              translation: "你什麼時候去？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: "?" },
              ],
            },
            {
              sentence: "Sinh nhật bạn là khi nào?",
              translation: "你的生日是什麼時候？",
              segments: [
                { text: "Sinh nhật", meaning: "生日", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "khi nào", meaning: "何時", tail: "?" },
              ],
            },
            {
              sentence: "Bao giờ về nhà?",
              translation: "幾時(什麼時候)回家？",
              segments: [
                { text: "Bao giờ", meaning: "幾時", tail: " " },
                { text: "về", meaning: "回", tail: " " },
                { text: "nhà", meaning: "家", tail: "?" },
              ],
            },
          ],
          usage_note: "問時間點。",
          image_file: "when.png",
        },
        {
          id: "q-04",
          term_zh: "哪裡",
          related_terms: [
            {
              term_target: "Ở đâu",
              pronunciation: ["/ə ɗəw/"],
              specific_note: "在哪",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn đang ở đâu?",
              translation: "你現在在哪裡？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Nhà vệ sinh ở đâu?",
              translation: "廁所在哪裡？",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Bạn sống ở đâu?",
              translation: "你住在哪裡？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "sống", meaning: "住/生活", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
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
              term_target: "Ai",
              pronunciation: ["/aːj/"],
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
              sentence: "Ai đang gọi đó?",
              translation: "是誰在打電話(呼叫)？",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "gọi", meaning: "叫/打電話", tail: " " },
                { text: "đó", meaning: "那(語助詞)", tail: "?" },
              ],
            },
            {
              sentence: "Bạn đi cùng ai?",
              translation: "你跟誰一起去？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "cùng", meaning: "一起/同", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
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
              term_target: "Tại sao",
              pronunciation: ["/taj saːw/"],
              specific_note: "正式",
              segments: [
                { text: "Tại", meaning: "在/因", tail: " " },
                { text: "sao", meaning: "怎/何", tail: "" },
              ],
            },
            {
              term_target: "Sao",
              pronunciation: ["/saːw/"],
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
              sentence: "Sao bạn đến muộn?",
              translation: "你為什麼遲到？",
              segments: [
                { text: "Sao", meaning: "為何", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "muộn", meaning: "晚", tail: "?" },
              ],
            },
            {
              sentence: "Tại sao bạn thích nó?",
              translation: "你為什麼喜歡它？",
              segments: [
                { text: "Tại sao", meaning: "為什麼", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "nó", meaning: "它", tail: "?" },
              ],
            },
          ],
          usage_note: "回答通常用 Vì (因為)。",
          image_file: "why.png",
        },
        {
          id: "q-07",
          term_zh: "哪一個",
          related_terms: [
            {
              term_target: "Nào",
              pronunciation: ["/naːw/"],
              specific_note: "置於名詞後",
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
              sentence: "Đi đường nào?",
              translation: "走哪條路？",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "đường", meaning: "路", tail: " " },
                { text: "nào", meaning: "哪", tail: "?" },
              ],
            },
          ],
          usage_note: "注意順序：名詞 + Nào (如：Người nào 哪個人)。",
          image_file: "which.png",
        },
        {
          id: "q-08",
          term_zh: "多少 (錢/數量)",
          related_terms: [
            {
              term_target: "Bao nhiêu",
              pronunciation: ["/baːw ɲiəw/"],
              specific_note: "數量多/價格",
              segments: [
                { text: "Bao", meaning: "包/多大", tail: " " },
                { text: "nhiêu", meaning: "多", tail: "" },
              ],
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
              sentence: "Cái này bao nhiêu?",
              translation: "這個多少(錢)？",
              segments: [
                { text: "Cái", meaning: "個", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: "?" },
              ],
            },
            {
              sentence: "Bạn cần bao nhiêu nước?",
              translation: "你需要多少水？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "nước", meaning: "水", tail: "?" },
              ],
            },
          ],
          usage_note: "問價格必用 Bao nhiêu。",
          image_file: "how_much.png",
        },
        {
          id: "q-09",
          term_zh: "多久 (時間)",
          related_terms: [
            {
              term_target: "Bao lâu",
              pronunciation: ["/baːw ləw/"],
              specific_note: "時間長度",
              segments: [
                { text: "Bao", meaning: "多大範圍", tail: " " },
                { text: "lâu", meaning: "久", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mất bao lâu?",
              translation: "要花(失去)多久？",
              segments: [
                { text: "Mất", meaning: "失去/花費", tail: " " },
                { text: "bao lâu", meaning: "多久", tail: "?" },
              ],
            },
            {
              sentence: "Bạn ở đây bao lâu rồi?",
              translation: "你在這裡多久了？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "ở", meaning: "待/在", tail: " " },
                { text: "đây", meaning: "這", tail: " " },
                { text: "bao lâu", meaning: "多久", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
            {
              sentence: "Chờ bao lâu?",
              translation: "要等多久？",
              segments: [
                { text: "Chờ", meaning: "等", tail: " " },
                { text: "bao lâu", meaning: "多久", tail: "?" },
              ],
            },
          ],
          usage_note: "問時間長短用 Bao lâu。",
          image_file: "how_long.png",
        },
        {
          id: "q-10",
          term_zh: "幾點",
          related_terms: [
            {
              term_target: "Mấy giờ",
              pronunciation: ["/məj zə/"],
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
              translation: "現在幾點了？",
              segments: [
                { text: "Bây giờ", meaning: "現在", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點", tail: "?" },
              ],
            },
            {
              sentence: "Chúng ta gặp nhau mấy giờ?",
              translation: "我們幾點見面？",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "nhau", meaning: "彼此", tail: " " },
                { text: "mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點", tail: "?" },
              ],
            },
            {
              sentence: "Mấy giờ bắt đầu?",
              translation: "幾點開始？",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "bắt đầu", meaning: "開始", tail: "?" },
              ],
            },
          ],
          usage_note:
            "Mấy 用於問數量較少(如時間0-12)，Bao nhiêu 用於數量較多。",
          image_file: "what_time.png",
        },
        {
          id: "q-11",
          term_zh: "幾歲",
          related_terms: [
            {
              term_target: "Bao nhiêu tuổi",
              pronunciation: ["/baːw ɲiəw tuəj/"],
              specific_note: "成年人",
              segments: [
                { text: "Bao nhiêu", meaning: "多少", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "" },
              ],
            },
            {
              term_target: "Mấy tuổi",
              pronunciation: ["/məj tuəj/"],
              specific_note: "小孩(10歲下)",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn bao nhiêu tuổi?",
              translation: "你幾歲？(一般詢問)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "?" },
              ],
            },
            {
              sentence: "Em bé mấy tuổi rồi?",
              translation: "寶寶幾歲了？",
              segments: [
                { text: "Em bé", meaning: "寶寶", tail: " " },
                { text: "mấy", meaning: "幾", tail: " " },
                { text: "tuổi", meaning: "歲", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
            {
              sentence: "Anh ấy bao nhiêu tuổi?",
              translation: "他幾歲？",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "?" },
              ],
            },
          ],
          usage_note: "對長輩問年紀要加敬語，或用 Bao nhiêu tuổi 較禮貌。",
          image_file: "how_old.png",
        },
      ],
    },
    {
      id: "time_place",
      name: "表達場所和時間的單字 (越南語)",
      items: [
        {
          id: "tp-01",
          term_zh: "現在",
          related_terms: [
            {
              term_target: "Bây giờ",
              pronunciation: ["/bəj zə/"],
              specific_note: "標準",
              segments: [
                { text: "Bây", meaning: "現", tail: " " },
                { text: "giờ", meaning: "時", tail: "" },
              ],
            },
            {
              term_target: "Giờ",
              pronunciation: ["/zə/"],
              specific_note: "口語",
              segments: [{ text: "Giờ", meaning: "現在/點", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Làm ngay bây giờ.",
              translation: "現在立刻做。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "ngay", meaning: "立刻", tail: " " },
                { text: "bây giờ", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Bây giờ bạn ở đâu?",
              translation: "你現在在哪裡？",
              segments: [
                { text: "Bây giờ", meaning: "現在", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
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
          usage_note: "口語常把 Bây giờ 簡化為 Giờ。",
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
                { text: "nay", meaning: "今/這", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Không phải hôm nay.",
              translation: "不是今天。",
              segments: [
                { text: "Không phải", meaning: "不是", tail: " " },
                { text: "hôm nay", meaning: "今天", tail: "." },
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
              pronunciation: ["/ŋaj maːj/"],
              specific_note: "標準",
              segments: [
                { text: "Ngày", meaning: "日", tail: " " },
                { text: "mai", meaning: "明/晨", tail: "" },
              ],
            },
            {
              term_target: "Mai",
              pronunciation: ["/maːj/"],
              specific_note: "口語",
              segments: [{ text: "Mai", meaning: "明", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hẹn gặp lại ngày mai.",
              translation: "明天見。",
              segments: [
                { text: "Hẹn", meaning: "約", tail: " " },
                { text: "gặp", meaning: "見", tail: " " },
                { text: "lại", meaning: "再", tail: " " },
                { text: "ngày mai", meaning: "明天", tail: "." },
              ],
            },
            {
              sentence: "Mai là sinh nhật tôi.",
              translation: "明天是我生日。",
              segments: [
                { text: "Mai", meaning: "明天", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sinh nhật", meaning: "生日", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Mai bạn có rảnh không?",
              translation: "你明天有空嗎？",
              segments: [
                { text: "Mai", meaning: "明天", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "rảnh", meaning: "空閒", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
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
              term_target: "Hôm qua",
              pronunciation: ["/hom kwa/"],
              specific_note: "",
              segments: [
                { text: "Hôm", meaning: "日", tail: " " },
                { text: "qua", meaning: "過/去", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Sáng hôm qua.",
              translation: "昨天早上。",
              segments: [
                { text: "Sáng", meaning: "早上", tail: " " },
                { text: "hôm qua", meaning: "昨天", tail: "." },
              ],
            },
            {
              sentence: "Hôm qua bạn đi đâu?",
              translation: "你昨天去哪裡？",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Hôm qua trời mưa.",
              translation: "昨天下雨了。",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "trời", meaning: "天", tail: " " },
                { text: "mưa", meaning: "雨", tail: "." },
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
              pronunciation: ["/ə ɗəj/"],
              specific_note: "在這",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這", tail: "" },
              ],
            },
            {
              term_target: "Đây",
              pronunciation: ["/ɗəj/"],
              specific_note: "這",
              segments: [{ text: "Đây", meaning: "這", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lại đây.",
              translation: "過來這裡。",
              segments: [
                { text: "Lại", meaning: "來/靠近", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Tôi đang ở đây.",
              translation: "我正在這裡。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở đây", meaning: "在這裡", tail: "." },
              ],
            },
            {
              sentence: "Có gần đây không?",
              translation: "離這裡近嗎？",
              segments: [
                { text: "Có", meaning: "有/是否", tail: " " },
                { text: "gần", meaning: "近", tail: " " },
                { text: "đây", meaning: "這", tail: " " },
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
              pronunciation: ["/ə ɗɔ/"],
              specific_note: "在那(中距離)",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đó", meaning: "那", tail: "" },
              ],
            },
            {
              term_target: "Ở kia",
              pronunciation: ["/ə kiə/"],
              specific_note: "在那(遠距離)",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "kia", meaning: "那(遠)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi đến đó.",
              translation: "去那裡。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "đó", meaning: "那裡", tail: "." },
              ],
            },
            {
              sentence: "Nhìn kìa.",
              translation: "看那邊 (指遠處)。",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "kìa", meaning: "那邊", tail: "." },
              ],
            },
            {
              sentence: "Ai ở đó vậy?",
              translation: "誰在那裡？",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "ở đó", meaning: "在那", tail: " " },
                { text: "vậy", meaning: "啊/呀", tail: "?" },
              ],
            },
          ],
          usage_note: "Đó (那)，Kia (那邊/遠處)。",
          image_file: "there.png",
        },
        {
          id: "tp-07",
          term_zh: "天 (日期)",
          related_terms: [
            {
              term_target: "Ngày",
              pronunciation: ["/ŋaj/"],
              specific_note: "",
              segments: [{ text: "Ngày", meaning: "日/天", tail: "" }],
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
                { text: "một", meaning: "一個", tail: " " },
                { text: "ngày", meaning: "天", tail: " " },
                { text: "tốt lành", meaning: "美好", tail: "." },
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
          usage_note: "計算時間的單位。",
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
                { text: "nay", meaning: "今/這", tail: "." },
              ],
            },
            {
              sentence: "Chúc mừng năm mới.",
              translation: "新年快樂。",
              segments: [
                { text: "Chúc mừng", meaning: "祝賀", tail: " " },
                { text: "năm", meaning: "年", tail: " " },
                { text: "mới", meaning: "新", tail: "." },
              ],
            },
            {
              sentence: "Năm ngoái.",
              translation: "去年。",
              segments: [
                { text: "Năm", meaning: "年", tail: " " },
                { text: "ngoái", meaning: "過往/頭", tail: "." },
              ],
            },
          ],
          usage_note: "去年叫 Năm ngoái，明年叫 Năm sau。",
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
                { text: "sau", meaning: "後/下", tail: "." },
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
              pronunciation: ["/twiən/"],
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
                { text: "sau", meaning: "後/下", tail: "." },
              ],
            },
            {
              sentence: "Mỗi tuần một lần.",
              translation: "一週一次。",
              segments: [
                { text: "Mỗi", meaning: "每", tail: " " },
                { text: "tuần", meaning: "週", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "lần", meaning: "次", tail: "." },
              ],
            },
            {
              sentence: "Cuối tuần vui vẻ.",
              translation: "週末愉快。",
              segments: [
                { text: "Cuối", meaning: "末/底", tail: " " },
                { text: "tuần", meaning: "週", tail: " " },
                { text: "vui vẻ", meaning: "快樂", tail: "." },
              ],
            },
          ],
          usage_note: "週末 = Cuối tuần。",
          image_file: "week.png",
        },
        {
          id: "tp-11",
          term_zh: "早上",
          related_terms: [
            {
              term_target: "Buổi sáng",
              pronunciation: ["/buəj saːŋ/"],
              specific_note: "",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "sáng", meaning: "早/亮", tail: "" },
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
                { text: "Chào", meaning: "招呼", tail: " " },
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
              pronunciation: ["/buəj tʃiəw/"],
              specific_note: "",
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
                { text: "Chào", meaning: "招呼", tail: " " },
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
                { text: "chủ nhật", meaning: "週日", tail: "." },
              ],
            },
          ],
          usage_note: "中午12點後到太陽下山。",
          image_file: "afternoon.png",
        },
        {
          id: "tp-13",
          term_zh: "晚上",
          related_terms: [
            {
              term_target: "Buổi tối",
              pronunciation: ["/buəj toj/"],
              specific_note: "",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "tối", meaning: "晚/暗", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào buổi tối.",
              translation: "晚安 (問候)。",
              segments: [
                { text: "Chào", meaning: "招呼", tail: " " },
                { text: "buổi tối", meaning: "晚上", tail: "." },
              ],
            },
            {
              sentence: "Tối nay rảnh không?",
              translation: "今晚有空嗎？",
              segments: [
                { text: "Tối", meaning: "晚", tail: " " },
                { text: "nay", meaning: "今", tail: " " },
                { text: "rảnh", meaning: "空閒", tail: " " },
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
          usage_note: "太陽下山後。",
          image_file: "evening.png",
        },
        {
          id: "tp-14",
          term_zh: "中午",
          related_terms: [
            {
              term_target: "Buổi trưa",
              pronunciation: ["/buəj tʃɨə/"],
              specific_note: "",
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
              sentence: "Ăn trưa.",
              translation: "吃午餐。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "trưa", meaning: "午(餐)", tail: "." },
              ],
            },
            {
              sentence: "Nghỉ trưa.",
              translation: "午休。",
              segments: [
                { text: "Nghỉ", meaning: "休息", tail: " " },
                { text: "trưa", meaning: "中午", tail: "." },
              ],
            },
          ],
          usage_note: "約11:00-13:00。",
          image_file: "noon.png",
        },
        {
          id: "tp-15",
          term_zh: "前面",
          related_terms: [
            {
              term_target: "Phía trước",
              pronunciation: ["/fiə tʃɨək/"],
              specific_note: "",
              segments: [
                { text: "Phía", meaning: "方/邊", tail: " " },
                { text: "trước", meaning: "前", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ở phía trước bạn.",
              translation: "在你前面。",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "phía trước", meaning: "前面", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Đợi ở trước ga.",
              translation: "在車站前等。",
              segments: [
                { text: "Đợi", meaning: "等", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "trước", meaning: "前", tail: " " },
                { text: "ga", meaning: "車站", tail: "." },
              ],
            },
            {
              sentence: "Đừng đứng đằng trước.",
              translation: "不要站在前面 (口語常說 Đằng trước)。",
              segments: [
                { text: "Đừng", meaning: "別", tail: " " },
                { text: "đứng", meaning: "站", tail: " " },
                { text: "đằng trước", meaning: "前面", tail: "." },
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
              term_target: "Phía sau",
              pronunciation: ["/fiə saw/"],
              specific_note: "",
              segments: [
                { text: "Phía", meaning: "方", tail: " " },
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
              sentence: "Nhìn ra sau.",
              translation: "向後看。",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "ra", meaning: "往/出", tail: " " },
                { text: "sau", meaning: "後", tail: "." },
              ],
            },
            {
              sentence: "Đi ra đằng sau.",
              translation: "去後面 (口語常說 Đằng sau)。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "ra", meaning: "往", tail: " " },
                { text: "đằng sau", meaning: "後面", tail: "." },
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
                { text: "Rẽ", meaning: "轉彎", tail: " " },
                { text: "trái", meaning: "左", tail: "." },
              ],
            },
            {
              sentence: "Ở bên trái.",
              translation: "在左邊。",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "bên trái", meaning: "左邊", tail: "." },
              ],
            },
            {
              sentence: "Tay trái.",
              translation: "左手。",
              segments: [
                { text: "Tay", meaning: "手", tail: " " },
                { text: "trái", meaning: "左", tail: "." },
              ],
            },
          ],
          usage_note: "左側。",
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
                { text: "Rẽ", meaning: "轉彎", tail: " " },
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
              sentence: "Tay phải.",
              translation: "右手。",
              segments: [
                { text: "Tay", meaning: "手", tail: " " },
                { text: "phải", meaning: "右", tail: "." },
              ],
            },
          ],
          usage_note: "Phải 也有「正確」或「必須」的意思，看上下文。",
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
                { text: "cạnh", meaning: "旁/側", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ngồi cạnh tôi.",
              translation: "坐我旁邊。",
              segments: [
                { text: "Ngồi", meaning: "坐", tail: " " },
                { text: "cạnh", meaning: "旁", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Kế bên ngân hàng.",
              translation: "在銀行隔壁 (口語常說 Kế bên)。",
              segments: [
                { text: "Kế bên", meaning: "隔壁/旁邊", tail: " " },
                { text: "ngân hàng", meaning: "銀行", tail: "." },
              ],
            },
            {
              sentence: "Ai ngồi bên cạnh?",
              translation: "誰坐旁邊？",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "ngồi", meaning: "坐", tail: " " },
                { text: "bên cạnh", meaning: "旁邊", tail: "?" },
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
              pronunciation: ["/ɗoj ziən/"],
              specific_note: "漢語:對面",
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
              sentence: "Ngồi đối diện.",
              translation: "坐對面。",
              segments: [
                { text: "Ngồi", meaning: "坐", tail: " " },
                { text: "đối diện", meaning: "對面", tail: "." },
              ],
            },
            {
              sentence: "Cửa hàng ở đối diện.",
              translation: "商店在對面。",
              segments: [
                { text: "Cửa hàng", meaning: "商店", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đối diện", meaning: "對面", tail: "." },
              ],
            },
          ],
          usage_note: "找路時常用。",
          image_file: "across_from.png",
        },
        {
          id: "tp-21",
          term_zh: "春天",
          related_terms: [
            {
              term_target: "Mùa xuân",
              pronunciation: ["/muə swən/"],
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
                { text: "đến", meaning: "到", tail: " " },
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
          usage_note: "農曆年在春天，叫 Tết。",
          image_file: "spring.png",
        },
        {
          id: "tp-22",
          term_zh: "夏天",
          related_terms: [
            {
              term_target: "Mùa hè",
              pronunciation: ["/muə hɛ/"],
              specific_note: "口語",
              segments: [
                { text: "Mùa", meaning: "季", tail: " " },
                { text: "hè", meaning: "夏", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa hè nóng.",
              translation: "夏天很熱。",
              segments: [
                { text: "Mùa hè", meaning: "夏天", tail: " " },
                { text: "nóng", meaning: "熱", tail: "." },
              ],
            },
            {
              sentence: "Đi bơi vào mùa hè.",
              translation: "夏天去游泳。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "bơi", meaning: "游", tail: " " },
                { text: "vào", meaning: "在", tail: " " },
                { text: "mùa hè", meaning: "夏天", tail: "." },
              ],
            },
            {
              sentence: "Nghỉ hè.",
              translation: "暑假 (夏休)。",
              segments: [
                { text: "Nghỉ", meaning: "休息", tail: " " },
                { text: "hè", meaning: "夏", tail: "." },
              ],
            },
          ],
          usage_note: "正式說法是 Mùa hạ，但口語多說 Mùa hè。",
          image_file: "summer.png",
        },
        {
          id: "tp-23",
          term_zh: "秋天",
          related_terms: [
            {
              term_target: "Mùa thu",
              pronunciation: ["/muə tʰu/"],
              specific_note: "",
              segments: [
                { text: "Mùa", meaning: "季", tail: " " },
                { text: "thu", meaning: "秋", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa thu mát mẻ.",
              translation: "秋天很涼爽。",
              segments: [
                { text: "Mùa thu", meaning: "秋天", tail: " " },
                { text: "mát mẻ", meaning: "涼爽", tail: "." },
              ],
            },
            {
              sentence: "Lá mùa thu.",
              translation: "秋天的葉子。",
              segments: [
                { text: "Lá", meaning: "葉", tail: " " },
                { text: "mùa thu", meaning: "秋天", tail: "." },
              ],
            },
            {
              sentence: "Mùa thu Hà Nội.",
              translation: "河內的秋天 (很有名)。",
              segments: [
                { text: "Mùa thu", meaning: "秋天", tail: " " },
                { text: "Hà Nội", meaning: "河內", tail: "." },
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
              term_target: "Mùa đông",
              pronunciation: ["/muə ɗəwŋ͡m/"],
              specific_note: "",
              segments: [
                { text: "Mùa", meaning: "季", tail: " " },
                { text: "đông", meaning: "冬", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa đông lạnh.",
              translation: "冬天很冷。",
              segments: [
                { text: "Mùa đông", meaning: "冬天", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
              ],
            },
            {
              sentence: "Bạn thích mùa đông không?",
              translation: "你喜歡冬天嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "mùa đông", meaning: "冬天", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Mùa đông có tuyết.",
              translation: "冬天有雪 (沙壩 Sapa 會有)。",
              segments: [
                { text: "Mùa đông", meaning: "冬天", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "tuyết", meaning: "雪", tail: "." },
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
      name: "連接詞 (越南語)",
      items: [
        {
          id: "conj-01",
          term_zh: "或者 / 還是",
          related_terms: [
            {
              term_target: "Hay",
              pronunciation: ["/haj/"],
              specific_note: "常用於問句",
              segments: [{ text: "Hay", meaning: "或者/還是", tail: "" }],
            },
            {
              term_target: "Hoặc",
              pronunciation: ["/hwak/"],
              specific_note: "常用於肯定句",
              segments: [{ text: "Hoặc", meaning: "或是", tail: "" }],
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
              sentence: "Bạn đi hay tôi đi?",
              translation: "你去還是我去？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "hay", meaning: "還是", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: "?" },
              ],
            },
          ],
          usage_note: "做選擇時用 Hay。",
          image_file: "or.png",
        },
        {
          id: "conj-02",
          term_zh: "但是",
          related_terms: [
            {
              term_target: "Nhưng",
              pronunciation: ["/ɲɨŋ/"],
              specific_note: "轉折",
              segments: [{ text: "Nhưng", meaning: "但是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi thích nhưng không mua.",
              translation: "我喜歡，但是不買。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "nhưng", meaning: "但是", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "mua", meaning: "買", tail: "." },
              ],
            },
            {
              sentence: "Đẹp nhưng đắt.",
              translation: "很美但是很貴。",
              segments: [
                { text: "Đẹp", meaning: "美", tail: " " },
                { text: "nhưng", meaning: "但是", tail: " " },
                { text: "đắt", meaning: "貴", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi nhưng tôi bận.",
              translation: "抱歉，但我很忙。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: " " },
                { text: "nhưng", meaning: "但是", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
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
              specific_note: "結果",
              segments: [{ text: "Nên", meaning: "所以", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Trời mưa nên tôi ở nhà.",
              translation: "下雨了，所以我待在家。",
              segments: [
                { text: "Trời mưa", meaning: "下雨", tail: " " },
                { text: "nên", meaning: "所以", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Mệt quá nên đi ngủ.",
              translation: "太累了，所以去睡覺。",
              segments: [
                { text: "Mệt", meaning: "累", tail: " " },
                { text: "quá", meaning: "太", tail: " " },
                { text: "nên", meaning: "所以", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "ngủ", meaning: "睡", tail: "." },
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
              specific_note: "和",
              segments: [{ text: "Và", meaning: "和", tail: "" }],
            },
            {
              term_target: "Với",
              pronunciation: ["/vəj/"],
              specific_note: "跟/與",
              segments: [{ text: "Với", meaning: "跟", tail: "" }],
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
              sentence: "Bánh mì và trứng.",
              translation: "麵包加(和)蛋。",
              segments: [
                { text: "Bánh mì", meaning: "麵包", tail: " " },
                { text: "và", meaning: "和", tail: " " },
                { text: "trứng", meaning: "蛋", tail: "." },
              ],
            },
            {
              sentence: "Đi với tôi nhé.",
              translation: "跟我一起去吧。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "với", meaning: "跟/和", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "連接兩者。口語中 With (Với) 常被用來代替 And。",
          image_file: "and.png",
        },
        {
          id: "conj-05",
          term_zh: "因為",
          related_terms: [
            {
              term_target: "Vì",
              pronunciation: ["/vi/"],
              specific_note: "通用",
              segments: [{ text: "Vì", meaning: "因為", tail: "" }],
            },
            {
              term_target: "Tại",
              pronunciation: ["/taj/"],
              specific_note: "歸咎/因為",
              segments: [{ text: "Tại", meaning: "因為", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tại sao? Vì tôi thích.",
              translation: "為什麼？因為我喜歡。",
              segments: [
                { text: "Tại sao", meaning: "為什麼", tail: "? " },
                { text: "Vì", meaning: "因為", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi vì đến muộn.",
              translation: "抱歉因為遲到了。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: " " },
                { text: "vì", meaning: "因為", tail: " " },
                { text: "đến", meaning: "來", tail: " " },
                { text: "muộn", meaning: "晚", tail: "." },
              ],
            },
            {
              sentence: "Tại kẹt xe.",
              translation: "因為塞車 (歸咎於塞車)。",
              segments: [
                { text: "Tại", meaning: "因為/怪", tail: " " },
                { text: "kẹt xe", meaning: "塞車", tail: "." },
              ],
            },
          ],
          usage_note: "最常用 Vì。壞事的原因有時用 Tại。",
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
              specific_note: "跟/和",
              segments: [{ text: "Với", meaning: "和", tail: "" }],
            },
            {
              term_target: "Cùng",
              pronunciation: ["/kuŋ͡m/"],
              specific_note: "一起",
              segments: [{ text: "Cùng", meaning: "共/同", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi với tôi.",
              translation: "跟我走(來)。",
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
                { text: "sống", meaning: "住/生活", tail: " " },
                { text: "với", meaning: "跟", tail: " " },
                { text: "gia đình", meaning: "家庭", tail: "." },
              ],
            },
            {
              sentence: "Bánh mì với trứng.",
              translation: "麵包配(加)蛋。",
              segments: [
                { text: "Bánh mì", meaning: "麵包", tail: " " },
                { text: "với", meaning: "加/和", tail: " " },
                { text: "trứng", meaning: "蛋", tail: "." },
              ],
            },
          ],
          usage_note: "表示伴隨關係。",
          image_file: "with.png",
        },
        {
          id: "prep-02",
          term_zh: "從...",
          related_terms: [
            {
              term_target: "Từ",
              pronunciation: ["/tɨ/"],
              specific_note: "來源/起點",
              segments: [{ text: "Từ", meaning: "從/自", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đến từ Đài Loan.",
              translation: "我來自台灣。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đến", meaning: "來到", tail: " " },
                { text: "từ", meaning: "從", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
            {
              sentence: "Từ sáng đến tối.",
              translation: "從早到晚。",
              segments: [
                { text: "Từ", meaning: "從", tail: " " },
                { text: "sáng", meaning: "早", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "tối", meaning: "晚", tail: "." },
              ],
            },
            {
              sentence: "Cách đây không xa.",
              translation: "離(從)這裡不遠。",
              segments: [
                { text: "Cách", meaning: "距離", tail: " " },
                { text: "đây", meaning: "這", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "xa", meaning: "遠", tail: "." },
              ],
            },
          ],
          usage_note: "表示時間或地點的起點。",
          image_file: "from.png",
        },
        {
          id: "prep-03",
          term_zh: "為了 / 給",
          related_terms: [
            {
              term_target: "Cho",
              pronunciation: ["/tʃɔ/"],
              specific_note: "給/為",
              segments: [{ text: "Cho", meaning: "給", tail: "" }],
            },
            {
              term_target: "Để",
              pronunciation: ["/ɗe/"],
              specific_note: "為了(目的)",
              segments: [{ text: "Để", meaning: "為了", tail: "" }],
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
              sentence: "Tốt cho sức khỏe.",
              translation: "對(為了)健康好。",
              segments: [
                { text: "Tốt", meaning: "好", tail: " " },
                { text: "cho", meaning: "給/對", tail: " " },
                { text: "sức khỏe", meaning: "健康", tail: "." },
              ],
            },
            {
              sentence: "Tôi học để đi làm.",
              translation: "我為了工作而學習。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "học", meaning: "學", tail: " " },
                { text: "để", meaning: "為了", tail: " " },
                { text: "đi làm", meaning: "上班", tail: "." },
              ],
            },
          ],
          usage_note: "給人用 Cho，表目的用 Để。",
          image_file: "for.png",
        },
        {
          id: "prep-04",
          term_zh: "...的",
          related_terms: [
            {
              term_target: "Của",
              pronunciation: ["/kuə/"],
              specific_note: "所有格",
              segments: [{ text: "Của", meaning: "的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sách của tôi.",
              translation: "我的書。",
              segments: [
                { text: "Sách", meaning: "書", tail: " " },
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
            {
              sentence: "Bạn của anh ấy.",
              translation: "他的朋友。",
              segments: [
                { text: "Bạn", meaning: "朋友", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "anh ấy", meaning: "他", tail: "." },
              ],
            },
          ],
          usage_note: "物品 + Của + 主人。",
          image_file: "of.png",
        },
        {
          id: "prep-05",
          term_zh: "在... (場所)",
          related_terms: [
            {
              term_target: "Ở",
              pronunciation: ["/ə/"],
              specific_note: "位於",
              segments: [{ text: "Ở", meaning: "在", tail: "" }],
            },
            {
              term_target: "Trong",
              pronunciation: ["/tʃawŋ͡m/"],
              specific_note: "裡面",
              segments: [{ text: "Trong", meaning: "內", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi đang ở nhà.",
              translation: "我正在家。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Ở đây.",
              translation: "在這裡。",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
            {
              sentence: "Trong phòng.",
              translation: "在房間裡。",
              segments: [
                { text: "Trong", meaning: "裡面", tail: " " },
                { text: "phòng", meaning: "房間", tail: "." },
              ],
            },
          ],
          usage_note: "最通用的「在」是 Ở。",
          image_file: "at_in.png",
        },
        {
          id: "prep-06",
          term_zh: "往... (去/給)",
          related_terms: [
            {
              term_target: "Đến",
              pronunciation: ["/ɗen/"],
              specific_note: "去/到",
              segments: [{ text: "Đến", meaning: "到", tail: "" }],
            },
            {
              term_target: "Cho",
              pronunciation: ["/tʃɔ/"],
              specific_note: "給/對",
              segments: [{ text: "Cho", meaning: "給", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi đến trường.",
              translation: "去(到)學校。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
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
              sentence: "Đưa nó cho tôi.",
              translation: "把它給我。",
              segments: [
                { text: "Đưa", meaning: "遞", tail: " " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "移動方向用 Đến，對象用 Cho。",
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
              pronunciation: ["/xəwŋ͡m/"],
              specific_note: "",
              segments: [{ text: "Không", meaning: "零/不", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Số không.",
              translation: "數字零。",
              segments: [
                { text: "Số", meaning: "數字", tail: " " },
                { text: "không", meaning: "零", tail: "." },
              ],
            },
            {
              sentence: "Không độ.",
              translation: "零度 (或綠茶品牌)。",
              segments: [
                { text: "Không", meaning: "零", tail: " " },
                { text: "độ", meaning: "度", tail: "." },
              ],
            },
            {
              sentence: "Bắt đầu từ số không.",
              translation: "從零開始。",
              segments: [
                { text: "Bắt đầu", meaning: "開始", tail: " " },
                { text: "từ", meaning: "從", tail: " " },
                { text: "số không", meaning: "零", tail: "." },
              ],
            },
          ],
          usage_note: "與「不」是同一個字。",
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
              sentence: "Một cái.",
              translation: "一個。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "cái", meaning: "個", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi một vé.",
              translation: "給我一張票。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
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
          usage_note: "一。",
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
              sentence: "Hai người.",
              translation: "兩個人。",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Thứ hai.",
              translation: "星期一 (第二天)。",
              segments: [
                { text: "Thứ", meaning: "第/序", tail: " " },
                { text: "hai", meaning: "二", tail: "." },
              ],
            },
          ],
          usage_note: "越南語星期一叫「Thứ hai」(第二天)。",
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
              translation: "三點。",
              segments: [
                { text: "Ba", meaning: "三", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Thứ ba.",
              translation: "星期二 (第三天)。",
              segments: [
                { text: "Thứ", meaning: "第", tail: " " },
                { text: "ba", meaning: "三", tail: "." },
              ],
            },
          ],
          usage_note: "也是「爸爸」(Ba) 的意思 (南越)。",
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
                { text: "mùa", meaning: "季", tail: "." },
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
          usage_note: "四。",
          image_file: "four.png",
        },
        {
          id: "num-5",
          term_zh: "5",
          related_terms: [
            {
              term_target: "Năm",
              pronunciation: ["/nam/"],
              specific_note: "單獨使用",
              segments: [{ text: "Năm", meaning: "五", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Năm sao.",
              translation: "五星。",
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
              sentence: "Năm người.",
              translation: "五個人。",
              segments: [
                { text: "Năm", meaning: "五", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
          ],
          usage_note: "單獨念 Năm，在十位數後(如15)念 Lăm。",
          image_file: "five.png",
        },
        {
          id: "num-6",
          term_zh: "6",
          related_terms: [
            {
              term_target: "Sáu",
              pronunciation: ["/saw/"],
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
                { text: "Thứ", meaning: "第", tail: " " },
                { text: "sáu", meaning: "六", tail: "." },
              ],
            },
            {
              sentence: "Sáu quả trứng.",
              translation: "六顆蛋。",
              segments: [
                { text: "Sáu", meaning: "六", tail: " " },
                { text: "quả", meaning: "顆", tail: " " },
                { text: "trứng", meaning: "蛋", tail: "." },
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
                { text: "Thứ", meaning: "第", tail: " " },
                { text: "bảy", meaning: "七", tail: "." },
              ],
            },
            {
              sentence: "Bảy giờ sáng.",
              translation: "早上七點。",
              segments: [
                { text: "Bảy", meaning: "七", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "sáng", meaning: "早", tail: "." },
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
              sentence: "Hẹn tám giờ.",
              translation: "約八點。",
              segments: [
                { text: "Hẹn", meaning: "約", tail: " " },
                { text: "tám", meaning: "八", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Tháng tám.",
              translation: "八月。",
              segments: [
                { text: "Tháng", meaning: "月", tail: " " },
                { text: "tám", meaning: "八", tail: "." },
              ],
            },
          ],
          usage_note: "Tám 也有「八卦/聊天」的意思。",
          image_file: "eight.png",
        },
        {
          id: "num-9",
          term_zh: "9",
          related_terms: [
            {
              term_target: "Chín",
              pronunciation: ["/tʃin/"],
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
              sentence: "Chín nghìn.",
              translation: "九千(越盾)。",
              segments: [
                { text: "Chín", meaning: "九", tail: " " },
                { text: "nghìn", meaning: "千", tail: "." },
              ],
            },
            {
              sentence: "Số chín.",
              translation: "九號。",
              segments: [
                { text: "Số", meaning: "號", tail: " " },
                { text: "chín", meaning: "九", tail: "." },
              ],
            },
          ],
          usage_note: "與「熟」(食物熟了) 同音。",
          image_file: "nine.png",
        },
        {
          id: "num-10",
          term_zh: "10",
          related_terms: [
            {
              term_target: "Mười",
              pronunciation: ["/mɨəj/"],
              specific_note: "",
              segments: [{ text: "Mười", meaning: "十", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mười nghìn.",
              translation: "一萬 (十千) 越盾。",
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
          usage_note: "十。",
          image_file: "ten.png",
        },
        {
          id: "num-11",
          term_zh: "11",
          related_terms: [
            {
              term_target: "Mười một",
              pronunciation: ["/mɨəj mot/"],
              specific_note: "",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "một", meaning: "一", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mười một giờ.",
              translation: "十一點。",
              segments: [
                { text: "Mười một", meaning: "十一", tail: " " },
                { text: "giờ", meaning: "點", tail: "." },
              ],
            },
            {
              sentence: "Tháng mười một.",
              translation: "十一月。",
              segments: [
                { text: "Tháng", meaning: "月", tail: " " },
                { text: "mười một", meaning: "十一", tail: "." },
              ],
            },
            {
              sentence: "Có mười một người.",
              translation: "有十一個人。",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "mười một", meaning: "十一", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
          ],
          usage_note: "10 (Mười) + 1 (Một)。",
          image_file: "eleven.png",
        },
        {
          id: "num-12",
          term_zh: "12",
          related_terms: [
            {
              term_target: "Mười hai",
              pronunciation: ["/mɨəj haj/"],
              specific_note: "",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "hai", meaning: "二", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mười hai tháng.",
              translation: "十二個月。",
              segments: [
                { text: "Mười hai", meaning: "十二", tail: " " },
                { text: "tháng", meaning: "月", tail: "." },
              ],
            },
            {
              sentence: "Mười hai giờ trưa.",
              translation: "中午十二點。",
              segments: [
                { text: "Mười hai", meaning: "十二", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "trưa", meaning: "中午", tail: "." },
              ],
            },
            {
              sentence: "Lớp mười hai.",
              translation: "十二年級 (高三)。",
              segments: [
                { text: "Lớp", meaning: "班/級", tail: " " },
                { text: "mười hai", meaning: "十二", tail: "." },
              ],
            },
          ],
          usage_note: "10 (Mười) + 2 (Hai)。",
          image_file: "twelve.png",
        },
        {
          id: "num-15",
          term_zh: "15",
          related_terms: [
            {
              term_target: "Mười lăm",
              pronunciation: ["/mɨəj lam/"],
              specific_note: "注意: Năm變Lăm",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "lăm", meaning: "五(變音)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mười lăm phút.",
              translation: "十五分鐘。",
              segments: [
                { text: "Mười lăm", meaning: "十五", tail: " " },
                { text: "phút", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "Cô ấy mười lăm tuổi.",
              translation: "她十五歲。",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "mười lăm", meaning: "十五", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "." },
              ],
            },
            {
              sentence: "Ngày mười lăm.",
              translation: "十五號 (農曆十五)。",
              segments: [
                { text: "Ngày", meaning: "日", tail: " " },
                { text: "mười lăm", meaning: "十五", tail: "." },
              ],
            },
          ],
          usage_note: "重要規則：10位數是Mười時，5讀作 Lăm。",
          image_file: "fifteen.png",
        },
        {
          id: "num-20",
          term_zh: "20",
          related_terms: [
            {
              term_target: "Hai mươi",
              pronunciation: ["/haj mɨəj/"],
              specific_note: "標準",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "mươi", meaning: "十(位數)", tail: "" },
              ],
            },
            {
              term_target: "Hai chục",
              pronunciation: ["/haj tʃʊkp/"],
              specific_note: "口語",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "chục", meaning: "十(個)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hai mươi phút.",
              translation: "二十分鐘。",
              segments: [
                { text: "Hai mươi", meaning: "二十", tail: " " },
                { text: "phút", meaning: "分", tail: "." },
              ],
            },
            {
              sentence: "Hai mươi nghìn.",
              translation: "兩萬越盾。",
              segments: [
                { text: "Hai mươi", meaning: "二十", tail: " " },
                { text: "nghìn", meaning: "千", tail: "." },
              ],
            },
            {
              sentence: "Tôi hai mươi tuổi.",
              translation: "我二十歲。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "hai mươi", meaning: "二十", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "." },
              ],
            },
          ],
          usage_note: "整數 20, 30... 用 Mươi。",
          image_file: "twenty.png",
        },
        {
          id: "num-50",
          term_zh: "50",
          related_terms: [
            {
              term_target: "Năm mươi",
              pronunciation: ["/nam mɨəj/"],
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
              translation: "百分之五十 (50%)。",
              segments: [
                { text: "Năm mươi", meaning: "五十", tail: " " },
                { text: "phần trăm", meaning: "百分之", tail: "." },
              ],
            },
            {
              sentence: "Năm mươi người.",
              translation: "五十人。",
              segments: [
                { text: "Năm mươi", meaning: "五十", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Năm mươi nghìn.",
              translation: "五萬越盾。",
              segments: [
                { text: "Năm mươi", meaning: "五十", tail: " " },
                { text: "nghìn", meaning: "千", tail: "." },
              ],
            },
          ],
          usage_note: "50 = Năm + Mươi。",
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
              translation: "百分之百。",
              segments: [
                { text: "Một trăm", meaning: "一百", tail: " " },
                { text: "phần trăm", meaning: "百分比", tail: "." },
              ],
            },
            {
              sentence: "Hơn một trăm.",
              translation: "超過一百。",
              segments: [
                { text: "Hơn", meaning: "超過/更", tail: " " },
                { text: "một trăm", meaning: "一百", tail: "." },
              ],
            },
          ],
          usage_note: "百 = Trăm。",
          image_file: "hundred.png",
        },
        {
          id: "num-1000",
          term_zh: "1000",
          related_terms: [
            {
              term_target: "Một nghìn",
              pronunciation: ["/mot ŋin/"],
              specific_note: "北部/標準",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "nghìn", meaning: "千", tail: "" },
              ],
            },
            {
              term_target: "Một ngàn",
              pronunciation: ["/mot ŋaːn/"],
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
              sentence: "Một nghìn đồng.",
              translation: "一千越盾 (最小紙鈔)。",
              segments: [
                { text: "Một nghìn", meaning: "一千", tail: " " },
                { text: "đồng", meaning: "盾(貨幣)", tail: "." },
              ],
            },
            {
              sentence: "Năm nghìn.",
              translation: "五千。",
              segments: [
                { text: "Năm", meaning: "五", tail: " " },
                { text: "nghìn", meaning: "千", tail: "." },
              ],
            },
          ],
          usage_note: "北越 Nghìn，南越 Ngàn，都是千的意思。",
          image_file: "thousand.png",
        },
        {
          id: "num-10000",
          term_zh: "10000",
          related_terms: [
            {
              term_target: "Mười nghìn",
              pronunciation: ["/mɨəj ŋin/"],
              specific_note: "一萬",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "nghìn", meaning: "千", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mười nghìn đồng.",
              translation: "一萬越盾。",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "nghìn", meaning: "千", tail: " " },
                { text: "đồng", meaning: "盾", tail: "." },
              ],
            },
            {
              sentence: "Một vạn bước.",
              translation: "一萬步 (雖有「萬/Vạn」字，但錢習慣說十千)。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "vạn", meaning: "萬", tail: " " },
                { text: "bước", meaning: "步", tail: "." },
              ],
            },
            {
              sentence: "Năm mươi nghìn.",
              translation: "五萬 (50千)。",
              segments: [
                { text: "Năm mươi", meaning: "五十", tail: " " },
                { text: "nghìn", meaning: "千", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南貨幣沒有「萬」的單位，一萬要說「十千」(Mười nghìn/ngàn)。",
          image_file: "ten_thousand.png",
        },
      ],
    },
    {
      id: "grammar",
      name: "常用句型與文法 (越南語)",
      items: [
        {
          id: "g-01",
          term_zh: "我是 / 我覺得...",
          related_terms: [
            {
              term_target: "Tôi...",
              pronunciation: ["/toj/"],
              specific_note: "狀態/身分",
              segments: [{ text: "Tôi", meaning: "我", tail: "..." }],
            },
          ],
          examples: [
            {
              sentence: "Tôi rất vui.",
              translation: "我很快樂 (形容詞前不加是)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
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
              sentence: "Tôi là sinh viên.",
              translation: "我是學生 (名詞前要加是)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sinh viên", meaning: "學生", tail: "." },
              ],
            },
          ],
          usage_note: "形容詞直接接主詞後，名詞前才加 Là。",
          image_file: "i_am.png",
        },
        {
          id: "g-02",
          term_zh: "我的名字叫...",
          related_terms: [
            {
              term_target: "Tên tôi là...",
              pronunciation: ["/ten toj la/"],
              specific_note: "自我介紹",
              segments: [
                { text: "Tên", meaning: "名字", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tên tôi là Nam.",
              translation: "我的名字叫阿南。",
              segments: [
                { text: "Tên", meaning: "名字", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "Nam", meaning: "南(人名)", tail: "." },
              ],
            },
            {
              sentence: "Tôi tên là Linh.",
              translation: "我叫小靈。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "tên", meaning: "名/叫", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "Linh", meaning: "靈(人名)", tail: "." },
              ],
            },
            {
              sentence: "Chào, tôi là Tom.",
              translation: "嗨，我是湯姆。",
              segments: [
                { text: "Chào", meaning: "你好", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "Tom", meaning: "湯姆", tail: "." },
              ],
            },
          ],
          usage_note: "也可簡說：Tôi tên + 名字。",
          image_file: "my_name_is.png",
        },
        {
          id: "g-03",
          term_zh: "我做... (習慣/事實)",
          related_terms: [
            {
              term_target: "Tôi + 動詞",
              pronunciation: ["/toj/"],
              specific_note: "一般現在式",
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
                { text: "ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
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
          usage_note: "直接加動詞即可，不需變化。",
          image_file: "i_do.png",
        },
        {
          id: "g-04",
          term_zh: "我正在做...",
          related_terms: [
            {
              term_target: "Tôi đang...",
              pronunciation: ["/toj ɗaŋ/"],
              specific_note: "進行式",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đang ăn cơm.",
              translation: "我正在吃飯。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "cơm", meaning: "飯", tail: "." },
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
          usage_note: "關鍵字：Đang (正在)。",
          image_file: "ing.png",
        },
        {
          id: "g-05",
          term_zh: "我會 / 我能夠...",
          related_terms: [
            {
              term_target: "Tôi có thể",
              pronunciation: ["/toj kɔ tʰe/"],
              specific_note: "能夠",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "có thể", meaning: "可以/能夠", tail: "..." },
              ],
            },
            {
              term_target: "Tôi biết",
              pronunciation: ["/toj biət/"],
              specific_note: "懂得/會(技能)",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "biết", meaning: "懂/會", tail: "..." },
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
              sentence: "Tôi nói được tiếng Anh.",
              translation: "我能說英文 (能力)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "được", meaning: "得/行", tail: " " },
                { text: "tiếng Anh", meaning: "英文", tail: "." },
              ],
            },
            {
              sentence: "Tôi có thể giúp bạn.",
              translation: "我可以幫你 (意願/許可)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "có thể", meaning: "可以", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
          ],
          usage_note: "技能用 Biết，可能性用 Có thể。",
          image_file: "can.png",
        },
        {
          id: "g-06",
          term_zh: "我喜歡做...",
          related_terms: [
            {
              term_target: "Tôi thích...",
              pronunciation: ["/toj tʰik/"],
              specific_note: "喜好",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi thích đọc sách.",
              translation: "我喜歡閱讀。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "đọc", meaning: "讀", tail: " " },
                { text: "sách", meaning: "書", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích đi du lịch.",
              translation: "我喜歡去旅行。",
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
          usage_note: "Thích + 動詞/名詞 皆可。",
          image_file: "like_ing.png",
        },
        {
          id: "g-07",
          term_zh: "我曾經... (過去狀態)",
          related_terms: [
            {
              term_target: "Hồi đó tôi...",
              pronunciation: ["/hoj ɗɔ toj/"],
              specific_note: "以前/當時",
              segments: [
                { text: "Hồi đó", meaning: "那時候", tail: " " },
                { text: "tôi", meaning: "我", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hồi đó tôi là sinh viên.",
              translation: "我那時候是學生。",
              segments: [
                { text: "Hồi đó", meaning: "那時候", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sinh viên", meaning: "學生", tail: "." },
              ],
            },
            {
              sentence: "Hôm qua tôi ở nhà.",
              translation: "昨天我在家。",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Lúc đó tôi rất bận.",
              translation: "那時候我很忙。",
              segments: [
                { text: "Lúc đó", meaning: "那時", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
              ],
            },
          ],
          usage_note: "通常加上時間詞 (Hôm qua, Hồi đó) 來表示過去。",
          image_file: "i_was.png",
        },
        {
          id: "g-08",
          term_zh: "我做了... (過去動作)",
          related_terms: [
            {
              term_target: "Tôi đã...",
              pronunciation: ["/toj ɗa/"],
              specific_note: "過去式",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已經(過去)", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đã đi bộ về nhà.",
              translation: "我走路回家了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
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
                { text: "đã", meaning: "已經", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "phim", meaning: "電影", tail: " " },
                { text: "đó", meaning: "那", tail: "." },
              ],
            },
            {
              sentence: "Hôm qua tôi đã mua nó.",
              translation: "昨天我買了它。",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "nó", meaning: "它", tail: "." },
              ],
            },
          ],
          usage_note: "關鍵字：Đã (放在動詞前)。",
          image_file: "i_did.png",
        },
        {
          id: "g-09",
          term_zh: "我已經做過... (完成)",
          related_terms: [
            {
              term_target: "...rồi",
              pronunciation: ["/zoj/"],
              specific_note: "句尾助詞",
              segments: [
                { text: "...", meaning: "(動作)", tail: " " },
                { text: "rồi", meaning: "了/過", tail: "" },
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
              sentence: "Tôi ăn cơm rồi.",
              translation: "我吃飽(過)了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ăn cơm", meaning: "吃飯", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Tôi mất chìa khóa rồi.",
              translation: "我把鑰匙弄丟了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "mất", meaning: "弄丟", tail: " " },
                { text: "chìa khóa", meaning: "鑰匙", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "動詞 + Rồi = 完成。",
          image_file: "i_have_done.png",
        },
        {
          id: "g-10",
          term_zh: "我曾經去過...",
          related_terms: [
            {
              term_target: "Tôi đã từng đi...",
              pronunciation: ["/toj ɗa tɨŋ ɗi/"],
              specific_note: "經驗",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã từng", meaning: "曾經", tail: " " },
                { text: "đi", meaning: "去", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đã từng đi Nhật Bản.",
              translation: "我曾經去過日本。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đã từng", meaning: "曾經", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "Nhật Bản", meaning: "日本", tail: "." },
              ],
            },
            {
              sentence: "Tôi đi Đài Bắc rồi.",
              translation: "我去過台北了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "Đài Bắc", meaning: "台北", tail: " " },
                { text: "rồi", meaning: "了/過", tail: "." },
              ],
            },
            {
              sentence: "Tôi đến đó hai lần rồi.",
              translation: "我去過那裡兩次了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "đó", meaning: "那裡", tail: " " },
                { text: "hai lần", meaning: "兩次", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "強調「曾經」用 Đã từng，強調「去過」用 Đi... rồi。",
          image_file: "have_been_to.png",
        },
        {
          id: "g-11",
          term_zh: "我打算 / 將要...",
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
                { text: "gọi", meaning: "打電話", tail: " " },
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
                { text: "cố gắng", meaning: "努力", tail: "." },
              ],
            },
          ],
          usage_note: "關鍵字：Sẽ (放在動詞前)。",
          image_file: "i_will.png",
        },
        {
          id: "g-12",
          term_zh: "你是...嗎？",
          related_terms: [
            {
              term_target: "Bạn có... không?",
              pronunciation: ["/ban kɔ ... xəwŋ͡m/"],
              specific_note: "問形容詞",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "...", meaning: "(形容詞)", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              term_target: "Bạn là... à?",
              pronunciation: ["/ban la ... a/"],
              specific_note: "問身分",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "...", meaning: "(名詞)", tail: " " },
                { text: "à", meaning: "啊/嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn có mệt không?",
              translation: "你累嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有/是否", tail: " " },
                { text: "mệt", meaning: "累", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
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
              sentence: "Bạn là học sinh à?",
              translation: "你是學生嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "học sinh", meaning: "學生", tail: " " },
                { text: "à", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "形容詞用 Có... không，名詞用 Là... à。",
          image_file: "are_you.png",
        },
        {
          id: "g-13",
          term_zh: "你有/會...嗎？",
          related_terms: [
            {
              term_target: "Bạn có... không?",
              pronunciation: ["/ban kɔ ... xəwŋ͡m/"],
              specific_note: "通用問句",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有/是否", tail: " " },
                { text: "...", meaning: "(動詞)", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          examples: [
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
              sentence: "Bạn có ăn cay được không?",
              translation: "你能吃辣嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "cay", meaning: "辣", tail: " " },
                { text: "được", meaning: "行", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "Có... không 是最萬用的 Yes/No 問句結構。",
          image_file: "do_you.png",
        },
        {
          id: "g-14",
          term_zh: "你曾經...嗎？",
          related_terms: [
            {
              term_target: "Bạn đã từng... chưa?",
              pronunciation: ["/ban ɗa tɨŋ ... tʃɨə/"],
              specific_note: "經驗",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đã từng", meaning: "曾經", tail: " " },
                { text: "...", meaning: "(動作)", tail: " " },
                { text: "chưa", meaning: "還沒/嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn ăn bún chả chưa?",
              translation: "你吃過烤肉米線了嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "bún chả", meaning: "烤肉米線", tail: " " },
                { text: "chưa", meaning: "還沒/了嗎", tail: "?" },
              ],
            },
            {
              sentence: "Bạn đã từng đi Hà Nội chưa?",
              translation: "你曾經去過河內嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đã từng", meaning: "曾經", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "Hà Nội", meaning: "河內", tail: " " },
                { text: "chưa", meaning: "了嗎", tail: "?" },
              ],
            },
            {
              sentence: "Bạn xem phim này chưa?",
              translation: "你看過這部電影了嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "phim này", meaning: "這部電影", tail: " " },
                { text: "chưa", meaning: "了嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "問「有沒有做過」句尾用 Chưa (還沒)，而不是 Không (不)。",
          image_file: "have_you_ever.png",
        },
        {
          id: "g-15",
          term_zh: "你何時做...？",
          related_terms: [
            {
              term_target: "Khi nào bạn...?",
              pronunciation: ["/xi naːw ban/"],
              specific_note: "問時間",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "bạn", meaning: "你", tail: "..." },
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
              sentence: "Bao giờ bạn rảnh?",
              translation: "你幾時有空？(口語)",
              segments: [
                { text: "Bao giờ", meaning: "幾時", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "rảnh", meaning: "有空", tail: "?" },
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
          ],
          usage_note: "Khi nào 可以放句首或句尾。",
          image_file: "when_do_you.png",
        },
        {
          id: "g-16",
          term_zh: "你何時去...？",
          related_terms: [
            {
              term_target: "Khi nào bạn đi...?",
              pronunciation: ["/xi naːw ban ɗi/"],
              specific_note: "問出發時間",
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
                { text: "đi", meaning: "去", tail: " " },
                { text: "học", meaning: "學", tail: "?" },
              ],
            },
            {
              sentence: "Mấy giờ bạn đi làm?",
              translation: "你幾點去上班？",
              segments: [
                { text: "Mấy giờ", meaning: "幾點", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "làm", meaning: "工作", tail: "?" },
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
          usage_note: "問具體時間用 Mấy giờ，問大概時間用 Khi nào。",
          image_file: "when_go_to.png",
        },
        {
          id: "g-17",
          term_zh: "你在哪裡做...？",
          related_terms: [
            {
              term_target: "Bạn... ở đâu?",
              pronunciation: ["/ban ... ə ɗəw/"],
              specific_note: "問地點",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "...", meaning: "(動作)", tail: " " },
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
                { text: "sống", meaning: "住", tail: " " },
                { text: "ở đâu", meaning: "在哪", tail: "?" },
              ],
            },
            {
              sentence: "Bạn làm việc ở đâu?",
              translation: "你在哪裡工作？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "ở đâu", meaning: "在哪", tail: "?" },
              ],
            },
            {
              sentence: "Bạn mua cái này ở đâu?",
              translation: "你在哪裡買這個的？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "cái này", meaning: "這個", tail: " " },
                { text: "ở đâu", meaning: "在哪", tail: "?" },
              ],
            },
          ],
          usage_note: "地點疑問詞 Ở đâu 通常放句尾。",
          image_file: "where_do_you.png",
        },
        {
          id: "g-18",
          term_zh: "你如何做...？",
          related_terms: [
            {
              term_target: "Làm sao",
              pronunciation: ["/lam saːw/"],
              specific_note: "問方法",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "sao", meaning: "怎", tail: "" },
              ],
            },
            {
              term_target: "Thế nào",
              pronunciation: ["/tʰe naːw/"],
              specific_note: "問狀態",
              segments: [{ text: "Thế nào", meaning: "如何", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn thấy thế nào?",
              translation: "你覺得如何？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thấy", meaning: "覺得", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Làm sao dùng cái này?",
              translation: "這個怎麼用？",
              segments: [
                { text: "Làm sao", meaning: "怎麼", tail: " " },
                { text: "dùng", meaning: "用", tail: " " },
                { text: "cái này", meaning: "這個", tail: "?" },
              ],
            },
            {
              sentence: "Bạn nấu món này thế nào?",
              translation: "你怎麼煮這道菜的？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nấu", meaning: "煮", tail: " " },
                { text: "món này", meaning: "這道菜", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
          ],
          usage_note: "問「方法」常用 Làm sao 或 Như thế nào。",
          image_file: "how_do_you.png",
        },
        {
          id: "g-19",
          term_zh: "你怎麼去...？",
          related_terms: [
            {
              term_target: "Bạn đi... bằng gì?",
              pronunciation: ["/ban ɗi ... baŋ zi/"],
              specific_note: "問交通工具",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "...", meaning: "(地名)", tail: " " },
                { text: "bằng", meaning: "用/藉由", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn đi làm bằng gì?",
              translation: "你怎麼去上班？(搭什麼車)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi làm", meaning: "上班", tail: " " },
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
              sentence: "Tôi đi bằng xe máy.",
              translation: "我騎機車去。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "bằng", meaning: "用", tail: " " },
                { text: "xe máy", meaning: "機車", tail: "." },
              ],
            },
          ],
          usage_note: "Bằng gì = 用什麼(工具)。",
          image_file: "how_go_to.png",
        },
        {
          id: "g-20",
          term_zh: "我不是 / 我不覺得...",
          related_terms: [
            {
              term_target: "Tôi không...",
              pronunciation: ["/toj xəwŋ͡m/"],
              specific_note: "否定狀態",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: "..." },
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
              sentence: "Tôi không sẵn sàng.",
              translation: "我還沒準備好。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "sẵn sàng", meaning: "準備好", tail: "." },
              ],
            },
            {
              sentence: "Tôi không phải là bác sĩ.",
              translation: "我不是醫生 (名詞前加 phải là)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "phải", meaning: "是(強調)", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "bác sĩ", meaning: "醫生", tail: "." },
              ],
            },
          ],
          usage_note: "形容詞直接加 Không，名詞前加 Không phải là。",
          image_file: "i_am_not.png",
        },
        {
          id: "g-21",
          term_zh: "我不做...",
          related_terms: [
            {
              term_target: "Tôi không...",
              pronunciation: ["/toj xəwŋ͡m/"],
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
                { text: "hút", meaning: "吸/抽", tail: " " },
                { text: "thuốc", meaning: "菸/藥", tail: "." },
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
          usage_note: "關鍵字：Không (放在動詞前)。",
          image_file: "i_dont.png",
        },
        {
          id: "g-22",
          term_zh: "我不能 / 不會...",
          related_terms: [
            {
              term_target: "Tôi không thể...",
              pronunciation: ["/toj xəwŋ͡m tʰe/"],
              specific_note: "無法",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "thể", meaning: "能", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi không biết bơi.",
              translation: "我不會游泳 (技能)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "biết", meaning: "會/懂", tail: " " },
                { text: "bơi", meaning: "游泳", tail: "." },
              ],
            },
            {
              sentence: "Tôi không nghe được.",
              translation: "我聽不到 (能力受限)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "được", meaning: "得/到", tail: "." },
              ],
            },
            {
              sentence: "Hôm nay tôi không đi được.",
              translation: "我今天不能去。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "được", meaning: "行/成", tail: "." },
              ],
            },
          ],
          usage_note: "不會(技能)用 Không biết，不能(情況)用 Không... được。",
          image_file: "i_cant.png",
        },
        {
          id: "g-23",
          term_zh: "我從未...",
          related_terms: [
            {
              term_target: "Tôi chưa bao giờ...",
              pronunciation: ["/toj tʃɨə baːw zə/"],
              specific_note: "經驗",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa", meaning: "還沒", tail: " " },
                { text: "bao giờ", meaning: "何時(從未)", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi chưa bao giờ ăn cái này.",
              translation: "我從未吃過這個。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa bao giờ", meaning: "從未", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "Tôi chưa từng đến đó.",
              translation: "我從未去過那裡。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa", meaning: "未", tail: " " },
                { text: "từng", meaning: "曾經", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "đó", meaning: "那裡", tail: "." },
              ],
            },
            {
              sentence: "Tôi chưa bao giờ thấy.",
              translation: "我從未見過。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa bao giờ", meaning: "從未", tail: " " },
                { text: "thấy", meaning: "看見", tail: "." },
              ],
            },
          ],
          usage_note: "Chưa bao giờ = Never。",
          image_file: "i_have_never.png",
        },
        {
          id: "g-24",
          term_zh: "我不必...",
          related_terms: [
            {
              term_target: "Tôi không cần...",
              pronunciation: ["/toj xəwŋ͡m kən/"],
              specific_note: "不需要",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "cần", meaning: "需要", tail: "..." },
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
              translation: "我今天不必工作。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "phải", meaning: "必須/得", tail: " " },
                { text: "làm việc", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "Tôi không cần trả tiền.",
              translation: "我不必付錢。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không cần", meaning: "不需要", tail: " " },
                { text: "trả tiền", meaning: "付錢", tail: "." },
              ],
            },
          ],
          usage_note: "Không cần (不需要) 或 Không phải (不用/非必須)。",
          image_file: "i_dont_have_to.png",
        },
        {
          id: "g-25",
          term_zh: "如果...的話",
          related_terms: [
            {
              term_target: "Nếu...",
              pronunciation: ["/new/"],
              specific_note: "假設",
              segments: [{ text: "Nếu", meaning: "如果", tail: "..." }],
            },
          ],
          examples: [
            {
              sentence: "Nếu bạn thích, cứ lấy đi.",
              translation: "如果你喜歡，就拿去吧。",
              segments: [
                { text: "Nếu", meaning: "如果", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "thích", meaning: "喜歡", tail: ", " },
                { text: "cứ", meaning: "儘管", tail: " " },
                { text: "lấy", meaning: "拿", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Nếu trời mưa, tôi sẽ ở nhà.",
              translation: "如果下雨，我會待在家。",
              segments: [
                { text: "Nếu", meaning: "如果", tail: " " },
                { text: "trời mưa", meaning: "下雨", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "sẽ", meaning: "將會", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
            {
              sentence: "Nếu mệt thì đi ngủ.",
              translation: "如果累了就去睡覺。",
              segments: [
                { text: "Nếu", meaning: "如果", tail: " " },
                { text: "mệt", meaning: "累", tail: " " },
                { text: "thì", meaning: "則/就", tail: " " },
                { text: "đi ngủ", meaning: "去睡", tail: "." },
              ],
            },
          ],
          usage_note: "關鍵字：Nếu (如果) ... Thì (就/則)。",
          image_file: "if.png",
        },
        {
          id: "g-26",
          term_zh: "當...的時候",
          related_terms: [
            {
              term_target: "Khi...",
              pronunciation: ["/xi/"],
              specific_note: "時間點",
              segments: [{ text: "Khi", meaning: "當/時", tail: "..." }],
            },
          ],
          examples: [
            {
              sentence: "Khi tôi ăn, tôi rất vui.",
              translation: "當我吃東西時，我很開心。",
              segments: [
                { text: "Khi", meaning: "當", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "ăn", meaning: "吃", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "開心", tail: "." },
              ],
            },
            {
              sentence: "Khi nào đến nơi, gọi tôi nhé.",
              translation: "當你到的時候，打給我。",
              segments: [
                { text: "Khi nào", meaning: "何時/當", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "nơi", meaning: "地方", tail: ", " },
                { text: "gọi", meaning: "叫/打電話", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Lúc rảnh rỗi, tôi đọc sách.",
              translation: "有空的時候(當有空時)，我會看書。",
              segments: [
                { text: "Lúc", meaning: "時刻/當", tail: " " },
                { text: "rảnh rỗi", meaning: "空閒", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đọc", meaning: "讀", tail: " " },
                { text: "sách", meaning: "書", tail: "." },
              ],
            },
          ],
          usage_note: "Khi 或 Lúc 都可以表示「當...時」。",
          image_file: "when_condition.png",
        },
        {
          id: "g-27",
          term_zh: "請你...好嗎？(請求)",
          related_terms: [
            {
              term_target: "Bạn có thể... không?",
              pronunciation: ["/ban kɔ tʰe ... xəwŋ͡m/"],
              specific_note: "禮貌請求",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có thể", meaning: "可以", tail: " " },
                { text: "...", meaning: "(動作)", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn có thể giúp tôi không?",
              translation: "你可以幫我嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có thể", meaning: "可以", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Mở cửa giúp tôi được không?",
              translation: "幫我開個門可以嗎？",
              segments: [
                { text: "Mở", meaning: "開", tail: " " },
                { text: "cửa", meaning: "門", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "được không", meaning: "行嗎", tail: "?" },
              ],
            },
            {
              sentence: "Chờ một chút nhé.",
              translation: "請等一下喔 (較隨意的請求)。",
              segments: [
                { text: "Chờ", meaning: "等", tail: " " },
                { text: "một chút", meaning: "一下", tail: " " },
                { text: "nhé", meaning: "好嗎/喔", tail: "." },
              ],
            },
          ],
          usage_note: "句尾加 Được không? (行嗎?) 或 Giúp tôi (幫我)。",
          image_file: "can_you_help.png",
        },
        {
          id: "g-28",
          term_zh: "我們...吧！(提議)",
          related_terms: [
            {
              term_target: "Chúng ta... đi",
              pronunciation: ["/tʃuŋ͡m ta ... ɗi/"],
              specific_note: "建議",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "...", meaning: "(動作)", tail: " " },
                { text: "đi", meaning: "吧/走", tail: "!" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chúng ta đi thôi.",
              translation: "我們走吧。",
              segments: [
                { text: "Chúng ta", meaning: "我們", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "thôi", meaning: "罷了/吧", tail: "." },
              ],
            },
            {
              sentence: "Ăn cơm đi.",
              translation: "吃飯吧。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "cơm", meaning: "飯", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Nghỉ một lát nhé.",
              translation: "我們休息一下吧。",
              segments: [
                { text: "Nghỉ", meaning: "休息", tail: " " },
                { text: "một lát", meaning: "片刻", tail: " " },
                { text: "nhé", meaning: "吧/喔", tail: "." },
              ],
            },
          ],
          usage_note: "句尾加 Đi 或 Nhé 表示提議或催促。",
          image_file: "lets.png",
        },
        {
          id: "g-29",
          term_zh: "我認為...",
          related_terms: [
            {
              term_target: "Tôi nghĩ (là)...",
              pronunciation: ["/toj ŋi la/"],
              specific_note: "想法",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nghĩ", meaning: "想/認為", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi nghĩ nó tốt.",
              translation: "我認為那很好。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Tôi nghĩ bạn đúng.",
              translation: "我覺得你是對的。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nghĩ", meaning: "認為", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đúng", meaning: "對", tail: "." },
              ],
            },
            {
              sentence: "Tôi cũng nghĩ vậy.",
              translation: "我也這麼認為。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "vậy", meaning: "那樣", tail: "." },
              ],
            },
          ],
          usage_note: "表達個人意見。",
          image_file: "i_think.png",
        },
        {
          id: "g-30",
          term_zh: "我想要...",
          related_terms: [
            {
              term_target: "Tôi muốn...",
              pronunciation: ["/toj muon/"],
              specific_note: "意願",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn đi.",
              translation: "我想走(去)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "đi", meaning: "走", tail: "." },
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
          usage_note: "Muốn + 動詞/名詞。",
          image_file: "want_to.png",
        },
        {
          id: "g-31",
          term_zh: "我必須...",
          related_terms: [
            {
              term_target: "Tôi phải...",
              pronunciation: ["/toj faj/"],
              specific_note: "義務",
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
                { text: "phải", meaning: "得/必須", tail: " " },
                { text: "làm việc", meaning: "工作", tail: "." },
              ],
            },
            {
              sentence: "Tôi phải đi bây giờ.",
              translation: "我現在得走了。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "phải", meaning: "必須", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "bây giờ", meaning: "現在", tail: "." },
              ],
            },
            {
              sentence: "Tôi phải học bài.",
              translation: "我必須讀書(做功課)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "phải", meaning: "必須", tail: " " },
                { text: "học", meaning: "學", tail: " " },
                { text: "bài", meaning: "課/功課", tail: "." },
              ],
            },
          ],
          usage_note: "Phải 表示責任或義務。",
          image_file: "i_have_to.png",
        },
        {
          id: "g-32",
          term_zh: "做(某事)是...的",
          related_terms: [
            {
              term_target: "Làm ... thì ...",
              pronunciation: ["/lam ... tʰi/"],
              specific_note: "評價動作",
              segments: [
                { text: "Làm", meaning: "做", tail: "..." },
                { text: "thì", meaning: "就/是", tail: "..." },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ăn rau rất tốt.",
              translation: "吃蔬菜很好。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "rau", meaning: "菜", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
            {
              sentence: "Rất vui được gặp bạn.",
              translation: "很高興(能)認識你。",
              segments: [
                { text: "Rất", meaning: "很", tail: " " },
                { text: "vui", meaning: "開心", tail: " " },
                { text: "được", meaning: "能夠/被", tail: " " },
                { text: "gặp", meaning: "遇見", tail: " " },
                { text: "bạn", meaning: "你", tail: "." },
              ],
            },
            {
              sentence: "Học tiếng Việt rất thú vị.",
              translation: "學越南語很有趣。",
              segments: [
                { text: "Học", meaning: "學", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "thú vị", meaning: "有趣", tail: "." },
              ],
            },
          ],
          usage_note: "越南語直接用「動詞片語 + 形容詞」即可。",
          image_file: "it_is_to.png",
        },
        {
          id: "g-33",
          term_zh: "你可以幫我...嗎？",
          related_terms: [
            {
              term_target: "Bạn giúp tôi... được không?",
              pronunciation: ["/ban zup toj ... ɗəək xəwŋ͡m/"],
              specific_note: "請求協助",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
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
                { text: "dọn dẹp", meaning: "打掃/整理", tail: " " },
                { text: "được không", meaning: "可以嗎", tail: "?" },
              ],
            },
            {
              sentence: "Giúp tôi việc này nhé.",
              translation: "幫我做這件事喔。",
              segments: [
                { text: "Giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "việc", meaning: "事", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "nhé", meaning: "好嗎", tail: "." },
              ],
            },
            {
              sentence: "Bạn tìm giúp tôi được không?",
              translation: "你可以幫我找嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "tìm", meaning: "找", tail: " " },
                { text: "giúp", meaning: "幫忙", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "được không", meaning: "行嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "Giúp = Help。",
          image_file: "can_you_help.png",
        },
        {
          id: "g-34",
          term_zh: "我可以...嗎？",
          related_terms: [
            {
              term_target: "Tôi có thể... không?",
              pronunciation: ["/toj kɔ tʰe ... xəwŋ͡m/"],
              specific_note: "請求許可",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "có thể", meaning: "可以", tail: " " },
                { text: "...", meaning: "(動作)", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi đi được không?",
              translation: "我可以走(離開)嗎？",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "được không", meaning: "可以嗎", tail: "?" },
              ],
            },
            {
              sentence: "Cho tôi xin nước.",
              translation: "請給我水 (我可以要水嗎)。",
              segments: [
                { text: "Cho", meaning: "給/讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "xin", meaning: "請求", tail: " " },
                { text: "nước", meaning: "水", tail: "." },
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
          usage_note: "句尾用 Được không (行嗎/可以嗎) 最自然。",
          image_file: "can_i.png",
        },
        {
          id: "g-35",
          term_zh: "我不喜歡...",
          related_terms: [
            {
              term_target: "Tôi không thích...",
              pronunciation: ["/toj xəwŋ͡m tʰik/"],
              specific_note: "",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "..." },
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
              sentence: "Tôi ghét chờ đợi.",
              translation: "我討厭等待。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ghét", meaning: "討厭", tail: " " },
                { text: "chờ đợi", meaning: "等待", tail: "." },
              ],
            },
          ],
          usage_note: "討厭可以用 Ghét。",
          image_file: "i_dont_like.png",
        },
        {
          id: "g-36",
          term_zh: "我比較喜歡...",
          related_terms: [
            {
              term_target: "Tôi thích... hơn",
              pronunciation: ["/toj tʰik ... hən/"],
              specific_note: "偏好",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "...", meaning: "(某物)", tail: " " },
                { text: "hơn", meaning: "更/比", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi thích trà hơn.",
              translation: "我比較喜歡茶 (我喜歡茶更多)。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "trà", meaning: "茶", tail: " " },
                { text: "hơn", meaning: "更", tail: "." },
              ],
            },
            {
              sentence: "Tôi thích chó hơn mèo.",
              translation: "比起貓，我更喜歡狗。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "chó", meaning: "狗", tail: " " },
                { text: "hơn", meaning: "比...更", tail: " " },
                { text: "mèo", meaning: "貓", tail: "." },
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
          usage_note: "比較級關鍵字：Hơn (更/比)。",
          image_file: "prefer.png",
        },
        {
          id: "g-37",
          term_zh: "A 比 B 更...",
          related_terms: [
            {
              term_target: "A ... hơn B",
              pronunciation: ["/A ... hən B/"],
              specific_note: "比較級",
              segments: [
                { text: "A", meaning: "A", tail: " " },
                { text: "...", meaning: "(形容詞)", tail: " " },
                { text: "hơn", meaning: "更/比", tail: " " },
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
              sentence: "Anh ấy cao hơn cô ấy.",
              translation: "他比她高。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "cao", meaning: "高", tail: " " },
                { text: "hơn", meaning: "比", tail: " " },
                { text: "cô ấy", meaning: "她", tail: "." },
              ],
            },
            {
              sentence: "Câu này khó hơn.",
              translation: "這一題(句)比較難。",
              segments: [
                { text: "Câu", meaning: "句/題", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "khó", meaning: "難", tail: " " },
                { text: "hơn", meaning: "更", tail: "." },
              ],
            },
          ],
          usage_note: "A + 形容詞 + Hơn + B。",
          image_file: "more_than.png",
        },
        {
          id: "g-38",
          term_zh: "有... (存在)",
          related_terms: [
            {
              term_target: "Có...",
              pronunciation: ["/kɔ/"],
              specific_note: "有",
              segments: [{ text: "Có", meaning: "有", tail: "..." }],
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
              sentence: "Ở đây có nhiều người.",
              translation: "這裡有很多人。",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "người", meaning: "人", tail: "." },
              ],
            },
            {
              sentence: "Có vấn đề gì không?",
              translation: "有什麼問題嗎？",
              segments: [
                { text: "Có", meaning: "有", tail: " " },
                { text: "vấn đề", meaning: "問題", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "",
          image_file: "there_is.png",
        },
      ],
    },
  ],
};
