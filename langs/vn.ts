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
      id: "greetings_vn",
      name: "越南語常用口語",
      items: [
        {
          id: "greet-001",
          term_zh: "是的",
          related_terms: [
            {
              term_target: "Vâng",
              pronunciation: ["/vəŋ/"],
              specific_note: "正式且有禮貌，北越最常用。",
              segments: [{ text: "Vâng", meaning: "是的", tail: "" }],
            },
            {
              term_target: "Dạ",
              pronunciation: ["/za̰ʔ/"],
              specific_note: "南越常用，或作為禮貌性的回應起手式。",
              segments: [{ text: "Dạ", meaning: "是的/好的", tail: "" }],
            },
            {
              term_target: "Ừ",
              pronunciation: ["/ɨ/"],
              specific_note: "平輩或對晚輩使用的非正式「嗯/對」。",
              segments: [{ text: "Ừ", meaning: "嗯", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dạ, đúng rồi ạ.",
              translation: "是的，沒錯喔。（非常禮貌）",
              segments: [
                { text: "Dạ", meaning: "禮貌起手式", tail: ", " },
                { text: "đúng", meaning: "對/正確", tail: " " },
                { text: "rồi", meaning: "了", tail: " " },
                { text: "ạ", meaning: "句尾敬語", tail: "." },
              ],
            },
            {
              sentence: "Vâng, em làm ngay.",
              translation: "好的，我馬上做。（職員對上司常用）",
              segments: [
                { text: "Vâng", meaning: "好的", tail: ", " },
                { text: "em", meaning: "我(弟妹輩)", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "ngay", meaning: "立刻", tail: "." },
              ],
            },
            {
              sentence: "Ừ, mình biết rồi.",
              translation: "嗯，我知道了。（朋友間）",
              segments: [
                { text: "Ừ", meaning: "嗯", tail: ", " },
                { text: "mình", meaning: "我(親近者)", tail: " " },
                { text: "biết", meaning: "知道", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "在越南，回答長輩時習慣在句首加『Dạ』，句尾加『ạ』。",
          image_file: "yes.png",
        },
        {
          id: "greet-002",
          term_zh: "不是",
          related_terms: [
            {
              term_target: "Không phải",
              pronunciation: ["/xoŋ fa᷉ːj/"],
              specific_note: "否定某種身分或事實。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "phải", meaning: "是/正確", tail: "" },
              ],
            },
            {
              term_target: "Chưa",
              pronunciation: ["/cɨə/"],
              specific_note: "尚未（用於回答還沒做某事）。",
              segments: [{ text: "Chưa", meaning: "還沒", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Không phải em đâu.",
              translation: "不是我啦。（撒嬌或委婉否認）",
              segments: [
                { text: "Không phải", meaning: "不是", tail: " " },
                { text: "em", meaning: "我(弟妹輩)", tail: " " },
                { text: "đâu", meaning: "才不(語助詞)", tail: "." },
              ],
            },
            {
              sentence: "Tôi chưa ăn cơm.",
              translation: "我還沒吃飯。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chưa", meaning: "還沒", tail: " " },
                { text: "ăn cơm", meaning: "吃飯", tail: "." },
              ],
            },
            {
              sentence: "Không, cảm ơn nhé.",
              translation: "不了，謝謝喔。（禮貌拒絕路邊推銷）",
              segments: [
                { text: "Không", meaning: "不", tail: ", " },
                { text: "cảm ơn", meaning: "謝謝", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note:
            "單純說『Không』比較生硬，針對不同問題，用『Không phải』或『Chưa』更道地。",
          image_file: "no.png",
        },
        {
          id: "greet-003",
          term_zh: "你好",
          related_terms: [
            {
              term_target: "Xin chào",
              pronunciation: ["/siɲ cə̂ːw/"],
              specific_note: "標準通用語。",
              segments: [{ text: "Xin chào", meaning: "你好", tail: "" }],
            },
            {
              term_target: "Alo",
              pronunciation: ["/aː lo/"],
              specific_note: "接電話專用問候語。",
              segments: [{ text: "Alo", meaning: "喂", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chào anh, đi đâu đấy?",
              translation: "哥哥好，你要去哪呀？（熟人間的熱情問候）",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "anh", meaning: "哥哥", tail: ", " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: " " },
                { text: "đấy", meaning: "呢/呀", tail: "?" },
              ],
            },
            {
              sentence: "Chào cả nhà nha!",
              translation: "大家好呀！（在群組打招呼）",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "cả nhà", meaning: "全家/大家", tail: " " },
                { text: "nha", meaning: "呀(親切)", tail: "!" },
              ],
            },
            {
              sentence: "Alo, cho hỏi ai đấy ạ?",
              translation: "喂，請問是哪位？",
              segments: [
                { text: "Alo", meaning: "喂", tail: ", " },
                { text: "cho hỏi", meaning: "請問", tail: " " },
                { text: "ai", meaning: "誰", tail: " " },
                { text: "đấy", meaning: "呢", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
              ],
            },
          ],
          usage_note:
            "越南人很少見面只說 Xin chào，通常會根據對方的輩分說『Chào + 稱謂』。",
          image_file: "hello.png",
        },
        {
          id: "greet-004",
          term_zh: "謝謝你",
          related_terms: [
            {
              term_target: "Cảm ơn",
              pronunciation: ["/kaːm ɜn/"],
              specific_note: "發音像台語的『感恩』。",
              segments: [{ text: "Cảm ơn", meaning: "謝謝", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cảm ơn bạn nhiều nhé!",
              translation: "非常謝謝你喔！",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "bạn", meaning: "你/朋友", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "nhé", meaning: "喔", tail: "!" },
              ],
            },
            {
              sentence: "Cảm ơn anh, đồ ăn ngon lắm.",
              translation: "謝謝哥，食物很好吃。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "anh", meaning: "哥哥", tail: ", " },
                { text: "đồ ăn", meaning: "食物", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
            {
              sentence: "Em cảm ơn chị đã giúp.",
              translation: "謝謝姊姊幫忙。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "cảm ơn", meaning: "謝謝", tail: " " },
                { text: "chị", meaning: "姊姊", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "giúp", meaning: "幫忙", tail: "." },
              ],
            },
          ],
          usage_note: "加上對方的稱謂會顯得更有誠意。",
          image_file: "thank_you.png",
        },
        {
          id: "greet-005",
          term_zh: "對不起",
          related_terms: [
            {
              term_target: "Xin lỗi",
              pronunciation: ["/siɲ lo᷉j/"],
              specific_note: "道歉、請求原諒。",
              segments: [{ text: "Xin lỗi", meaning: "對不起", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, tôi không cố ý.",
              translation: "抱歉，我不是故意的。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "cố ý", meaning: "故意", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi chị, em nhầm.",
              translation: "對不起姊姊，我弄錯了。",
              segments: [
                { text: "Xin lỗi", meaning: "對不起", tail: " " },
                { text: "chị", meaning: "姊姊", tail: ", " },
                { text: "em", meaning: "我", tail: " " },
                { text: "nhầm", meaning: "誤會/弄錯", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi vì sự chậm trễ này.",
              translation: "為這次的耽擱表示抱歉。（正式）",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: " " },
                { text: "vì", meaning: "因為", tail: " " },
                { text: "sự chậm trễ", meaning: "延遲", tail: " " },
                { text: "này", meaning: "這個", tail: "." },
              ],
            },
          ],
          usage_note: "道歉時低頭示意是越南的禮儀。",
          image_file: "sorry.png",
        },
        {
          id: "greet-006",
          term_zh: "不好意思",
          related_terms: [
            {
              term_target: "Cho hỏi",
              pronunciation: ["/cɔ hɔ̉ːj/"],
              specific_note: "提問前的起手式。",
              segments: [{ text: "Cho hỏi", meaning: "請問", tail: "" }],
            },
            {
              term_target: "Phiền bạn chút",
              pronunciation: ["/fiən ba̰ːn cụt/"],
              specific_note: "麻煩你一下。",
              segments: [
                { text: "Phiền", meaning: "麻煩", tail: " " },
                { text: "bạn", meaning: "你", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho hỏi, bưu điện ở đâu ạ?",
              translation: "不好意思請問，郵局在哪裡？",
              segments: [
                { text: "Cho hỏi", meaning: "請問", tail: ", " },
                { text: "bưu điện", meaning: "郵局", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
              ],
            },
            {
              sentence: "Xin lỗi, cho tôi đi nhờ một chút.",
              translation: "抱歉，借過一下。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "cho", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "đi nhờ", meaning: "借路過", tail: " " },
                { text: "một chút", meaning: "一點點", tail: "." },
              ],
            },
            {
              sentence: "Phiền anh cho em xem cái này.",
              translation: "麻煩哥哥讓我看一下這個。",
              segments: [
                { text: "Phiền", meaning: "麻煩", tail: " " },
                { text: "anh", meaning: "哥哥", tail: " " },
                { text: "cho", meaning: "讓", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
          ],
          usage_note: "請求陌生人幫忙時，先說『Cho hỏi』或『Phiền...』最道地。",
          image_file: "excuse_me.png",
        },
        {
          id: "greet-007",
          term_zh: "我不懂",
          related_terms: [
            {
              term_target: "Tôi không hiểu",
              pronunciation: ["/tôi xoŋ hiə̉ʊ/"],
              specific_note: "理解上的不懂。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "hiểu", meaning: "理解", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi không hiểu, bạn nói lại đi.",
              translation: "我不懂，你再說一次吧。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "hiểu", meaning: "理解", tail: ", " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "nói lại", meaning: "說回/再說", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Chỗ này khó hiểu quá.",
              translation: "這裡（這部分）太難懂了。",
              segments: [
                { text: "Chỗ này", meaning: "這部分", tail: " " },
                { text: "khó hiểu", meaning: "難理解", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Xin lỗi, tôi không rành tiếng Việt.",
              translation: "抱歉，我的越南語不太精通。",
              segments: [
                { text: "Xin lỗi", meaning: "抱歉", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "không rành", meaning: "不精通", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: "." },
              ],
            },
          ],
          usage_note:
            "若聽不懂對方意思，直接指著自己說『Tôi không hiểu』即可。",
          image_file: "dont_understand.png",
        },
        {
          id: "greet-008",
          term_zh: "廁所在哪裡？",
          related_terms: [
            {
              term_target: "Nhà vệ sinh ở đâu?",
              pronunciation: ["/ɲâː vê siɲ ə mɜʊ/"],
              specific_note: "旅遊救命句。",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nhà vệ sinh ở hướng nào ạ?",
              translation: "廁所在哪個方向呢？",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "hướng nào", meaning: "哪個方向", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
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
              sentence: "Bạn đi thẳng là thấy nhà vệ sinh.",
              translation: "你直走就會看到廁所。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đi thẳng", meaning: "直走", tail: " " },
                { text: "là", meaning: "就/是", tail: " " },
                { text: "thấy", meaning: "看到", tail: " " },
                { text: "nhà vệ sinh", meaning: "廁所", tail: "." },
              ],
            },
          ],
          usage_note: "口語中也常直接用法文縮寫稱呼：WC。",
          image_file: "where_bathroom.png",
        },
        {
          id: "greet-010",
          term_zh: "多少錢？",
          related_terms: [
            {
              term_target: "Bao nhiêu tiền?",
              pronunciation: ["/baʊ ɲiəʊ tiən/"],
              specific_note: "詢問價格常用語。",
              segments: [
                { text: "Bao nhiêu", meaning: "多少", tail: " " },
                { text: "tiền", meaning: "錢", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hết tất cả bao nhiêu tiền ạ?",
              translation: "全部總共多少錢？",
              segments: [
                { text: "Hết", meaning: "完/結束", tail: " " },
                { text: "tất cả", meaning: "全部", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tiền", meaning: "錢", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
              ],
            },
            {
              sentence: "Bát phở này giá thế nào?",
              translation: "這碗河粉價格多少？",
              segments: [
                { text: "Bát", meaning: "碗", tail: " " },
                { text: "phở", meaning: "河粉", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "giá", meaning: "價格", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Cái này đắt quá, bớt đi!",
              translation: "這個太貴了，便宜點吧！",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "đắt quá", meaning: "太貴", tail: ", " },
                { text: "bớt", meaning: "減去/便宜點", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note:
            "在越南傳統市場，問完價錢通常還可以說『Bớt đi』（便宜點）。",
          image_file: "how_much.png",
        },
        {
          id: "greet-011",
          term_zh: "我想要這個",
          related_terms: [
            {
              term_target: "Tôi lấy cái này",
              pronunciation: ["/tôi lɜ̌j kaːj nàːj/"],
              specific_note: "決定購買時使用。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "lấy", meaning: "拿", tail: " " },
                { text: "cái này", meaning: "這個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho mình lấy cái này nhé.",
              translation: "我要買這個喔。（點餐或挑選商品）",
              segments: [
                { text: "Cho mình", meaning: "給我", tail: " " },
                { text: "lấy", meaning: "拿/買", tail: " " },
                { text: "cái này", meaning: "這個", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Tôi chọn món này.",
              translation: "我選這道菜。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "chọn", meaning: "選擇", tail: " " },
                { text: "món này", meaning: "這道(菜)", tail: "." },
              ],
            },
            {
              sentence: "Lấy cho tôi hai cái này.",
              translation: "給我拿兩個這個。",
              segments: [
                { text: "Lấy", meaning: "拿", tail: " " },
                { text: "cho tôi", meaning: "給我", tail: " " },
                { text: "hai cái", meaning: "兩個", tail: " " },
                { text: "này", meaning: "這個", tail: "." },
              ],
            },
          ],
          usage_note: "買東西時，用『lấy』（拿）比『muốn』（想要）更自然。",
          image_file: "i_want_this.png",
        },
        {
          id: "greet-012",
          term_zh: "請給我...",
          related_terms: [
            {
              term_target: "Cho tôi...",
              pronunciation: ["/cɔ tôi/"],
              specific_note: "最常見的請求句式。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi một ly cà phê sữa đá.",
              translation: "請給我一杯冰奶咖啡。",
              segments: [
                { text: "Cho tôi", meaning: "給我", tail: " " },
                { text: "một ly", meaning: "一杯", tail: " " },
                { text: "cà phê sữa đá", meaning: "冰奶咖啡", tail: "." },
              ],
            },
            {
              sentence: "Cho tôi xin cái menu.",
              translation: "請給我菜單。",
              segments: [
                { text: "Cho tôi xin", meaning: "請給我", tail: " " },
                { text: "cái menu", meaning: "這菜單", tail: "." },
              ],
            },
            {
              sentence: "Làm ơn cho tôi thêm tương ớt.",
              translation: "麻煩再給我加點辣椒醬。",
              segments: [
                { text: "Làm ơn", meaning: "麻煩/請", tail: " " },
                { text: "cho tôi thêm", meaning: "給我加", tail: " " },
                { text: "tương ớt", meaning: "辣椒醬", tail: "." },
              ],
            },
          ],
          usage_note: "點餐時直接用『Cho tôi + 名字』即可。",
          image_file: "please_give_me.png",
        },
        {
          id: "greet-013",
          term_zh: "這是什麼？",
          related_terms: [
            {
              term_target: "Cái này là cái gì?",
              pronunciation: ["/kaːj nàːj là kaːj zi/"],
              specific_note: "詢問物品。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "cái gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đố bạn biết cái này là gì?",
              translation: "考考你，知道這是什麼嗎？",
              segments: [
                { text: "Đố bạn", meaning: "考考你", tail: " " },
                { text: "biết", meaning: "知道", tail: " " },
                { text: "cái này", meaning: "這個", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Món này gọi là gì vậy ạ?",
              translation: "請問這道菜叫什麼名字？",
              segments: [
                { text: "Món này", meaning: "這道菜", tail: " " },
                { text: "gọi là", meaning: "叫做", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "vậy", meaning: "呢/啊", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
              ],
            },
            {
              sentence: "Đây là tiếng Việt, phải không?",
              translation: "這是越南語，對嗎？",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: ", " },
                { text: "phải không", meaning: "對不對", tail: "?" },
              ],
            },
          ],
          usage_note: "詢問不認識的東西時，指著它說『Cái này là gì?』即可。",
          image_file: "what_is_this.png",
        },
        {
          id: "greet-014",
          term_zh: "請幫我",
          related_terms: [
            {
              term_target: "Giúp tôi với",
              pronunciation: ["/zup tôi və̂j/"],
              specific_note: "拜託幫忙我。",
              segments: [
                { text: "Giúp", meaning: "幫助", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "với", meaning: "拜託/吧", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cứu tôi với!",
              translation: "救命啊！（最緊急的呼救）",
              segments: [
                { text: "Cứu", meaning: "救", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "với", meaning: "吧/拜託", tail: "!" },
              ],
            },
            {
              sentence: "Bạn giúp mình một tay nhé.",
              translation: "你幫我個忙吧（幫我一把）。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "mình", meaning: "我", tail: " " },
                { text: "một tay", meaning: "一手/一把", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Làm ơn giúp tôi bê cái này.",
              translation: "麻煩幫我搬這個。",
              segments: [
                { text: "Làm ơn", meaning: "麻煩/請", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "bê", meaning: "搬/扛", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
          ],
          usage_note: "句尾加上『với』會讓語氣聽起來更有拜託、求助的感覺。",
          image_file: "help_me.png",
        },
        {
          id: "greet-015",
          term_zh: "你可以再說一次嗎？",
          related_terms: [
            {
              term_target: "Nói lại một lần nữa",
              pronunciation: ["/nɔ̂j la̰ːj một lə̀n nɨ̌ə/"],
              specific_note: "請求重複。",
              segments: [
                { text: "Nói lại", meaning: "再說", tail: " " },
                { text: "một lần nữa", meaning: "再一遍", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn nói gì cơ?",
              translation: "你說什麼呢？（語氣輕鬆的蛤？）",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "cơ", meaning: "呢(加強疑問)", tail: "?" },
              ],
            },
            {
              sentence: "Làm ơn nhắc lại giúp mình.",
              translation: "麻煩請幫我重複一遍。",
              segments: [
                { text: "Làm ơn", meaning: "麻煩/請", tail: " " },
                { text: "nhắc lại", meaning: "重複/提一遍", tail: " " },
                { text: "giúp mình", meaning: "幫我", tail: "." },
              ],
            },
            {
              sentence: "Tôi nghe chưa rõ, anh nói lại đi.",
              translation: "我還聽不清楚，哥哥再說一次吧。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "chưa rõ", meaning: "還不清楚", tail: ", " },
                { text: "anh", meaning: "哥哥", tail: " " },
                { text: "nói lại", meaning: "再說", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
          ],
          usage_note: "沒聽清楚時，說『Bạn nói gì cơ?』非常有母語感。",
          image_file: "say_again.png",
        },
        {
          id: "greet-016",
          term_zh: "你可以講慢一點嗎？",
          related_terms: [
            {
              term_target: "Nói chậm lại",
              pronunciation: ["/nɔ̂j cə̰ːm la̰ːj/"],
              specific_note: "請說慢點。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "chậm lại", meaning: "慢下來", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh nói chậm lại một chút nhé.",
              translation: "哥，請你講慢一點喔。",
              segments: [
                { text: "Anh", meaning: "哥哥", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "chậm lại", meaning: "慢下來", tail: " " },
                { text: "một chút", meaning: "一點點", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Nói chậm thôi, tôi mới học.",
              translation: "說慢點就好，我才剛學。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "thôi", meaning: "就好/罷了", tail: ", " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "mới học", meaning: "剛學", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南人講話通常很快，『Nói chậm lại』是初學者的必備口頭禪。",
          image_file: "speak_slowly.png",
        },
        {
          id: "greet-017",
          term_zh: "原來如此",
          related_terms: [
            {
              term_target: "Ra là vậy",
              pronunciation: ["/zaː là və̰ːj/"],
              specific_note: "恍然大悟。",
              segments: [
                { text: "Ra là vậy", meaning: "原來是這樣", tail: "" },
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
                { text: "hiểu", meaning: "懂/理解", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Hóa ra là như thế.",
              translation: "原來是這麼一回事啊。",
              segments: [
                { text: "Hóa ra", meaning: "原來", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "như thế", meaning: "那樣", tail: "." },
              ],
            },
          ],
          usage_note: "搭配『À』的聲音會更自然。",
          image_file: "i_see.png",
        },
        {
          id: "greet-018",
          term_zh: "早安",
          related_terms: [
            {
              term_target: "Chào buổi sáng",
              pronunciation: ["/cə̂ːw buə̉j saːŋ/"],
              specific_note: "正式早安。",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "buổi sáng", meaning: "早晨", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Sáng ra đã nóng thế này!",
              translation: "一早出來就這麼熱！（越南常見的抱怨式開場）",
              segments: [
                { text: "Sáng ra", meaning: "一早", tail: " " },
                { text: "đã", meaning: "就已經", tail: " " },
                { text: "nóng", meaning: "熱", tail: " " },
                { text: "thế này", meaning: "這樣", tail: "!" },
              ],
            },
            {
              sentence: "Chúc anh ngày mới tốt lành.",
              translation: "祝哥哥有美好的一天。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "anh", meaning: "哥哥", tail: " " },
                { text: "ngày mới", meaning: "新的一天", tail: " " },
                { text: "tốt lành", meaning: "美好/吉祥", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南人很少見面說 Chào buổi sáng，通常直接說 Chào anh/chị。",
          image_file: "good_morning.png",
        },
        {
          id: "greet-019",
          term_zh: "晚安",
          related_terms: [
            {
              term_target: "Chúc ngủ ngon",
              pronunciation: ["/cuk ŋủ ŋɔn/"],
              specific_note: "祝好夢。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "ngủ ngon", meaning: "睡得好/睡香", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ngủ ngon nhé, bạn yêu.",
              translation: "親愛的朋友，晚安喔。",
              segments: [
                { text: "Ngủ ngon", meaning: "晚安", tail: " " },
                { text: "nhé", meaning: "喔", tail: ", " },
                { text: "bạn yêu", meaning: "愛友/親愛的朋友", tail: "." },
              ],
            },
            {
              sentence: "Chào buổi tối, cả nhà đã ngủ chưa?",
              translation: "晚上好，大家睡了嗎？",
              segments: [
                { text: "Chào buổi tối", meaning: "晚上好", tail: ", " },
                { text: "cả nhà", meaning: "全家", tail: " " },
                { text: "đã", meaning: "已經", tail: " " },
                { text: "ngủ", meaning: "睡", tail: " " },
                { text: "chưa", meaning: "沒", tail: "?" },
              ],
            },
          ],
          usage_note:
            "『Ngủ ngon』是睡前說的，『Chào buổi tối』是晚上見面說的。",
          image_file: "good_evening.png",
        },
        {
          id: "greet-020",
          term_zh: "再見",
          related_terms: [
            {
              term_target: "Tạm biệt",
              pronunciation: ["/ta̰ːm biə̰ːt/"],
              specific_note: "正式告別。",
              segments: [{ text: "Tạm biệt", meaning: "再見", tail: "" }],
            },
            {
              term_target: "Gặp lại sau nhé",
              pronunciation: ["/ɣa̰ːp la̰ːj saʊ ɲé/"],
              specific_note: "待會見/下次見。",
              segments: [
                { text: "Gặp lại", meaning: "再見面", tail: " " },
                { text: "sau", meaning: "稍後/以後", tail: " " },
                { text: "nhé", meaning: "喔", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào nhé, mai gặp!",
              translation: "掰啦，明天見！",
              segments: [
                { text: "Chào", meaning: "拜/問候", tail: " " },
                { text: "nhé", meaning: "喔", tail: ", " },
                { text: "mai", meaning: "明天", tail: " " },
                { text: "gặp", meaning: "見面", tail: "!" },
              ],
            },
            {
              sentence: "Đi cẩn thận nhé!",
              translation: "慢走喔！（回家時常用的叮嚀）",
              segments: [
                { text: "Đi", meaning: "走/去", tail: " " },
                { text: "cẩn thận", meaning: "小心/謹慎", tail: " " },
                { text: "nhé", meaning: "喔", tail: "!" },
              ],
            },
          ],
          usage_note: "口語中也常直接說『Bye bye』。",
          image_file: "goodbye.png",
        },
        {
          id: "greet-021",
          term_zh: "你好嗎",
          related_terms: [
            {
              term_target: "Khỏe không?",
              pronunciation: ["/xwɛ̉ː xoŋ/"],
              specific_note: "好嗎/健康嗎？",
              segments: [
                { text: "Khỏe", meaning: "健康/好", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Dạo này anh thế nào?",
              translation: "最近你（哥哥）過得怎樣？",
              segments: [
                { text: "Dạo này", meaning: "最近", tail: " " },
                { text: "anh", meaning: "哥哥", tail: " " },
                { text: "thế nào", meaning: "如何/怎樣", tail: "?" },
              ],
            },
            {
              sentence: "Vẫn khỏe, cảm ơn bạn nhé.",
              translation: "還不錯（依舊好），謝謝你喔。",
              segments: [
                { text: "Vẫn", meaning: "依然", tail: " " },
                { text: "khỏe", meaning: "健康/好", tail: ", " },
                { text: "cảm ơn", meaning: "謝謝", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "熟人見面比較愛問『Dạo này thế nào?』（最近怎樣？）。",
          image_file: "how_are_you.png",
        },
        {
          id: "greet-022",
          term_zh: "真的嗎",
          related_terms: [
            {
              term_target: "Thật á?",
              pronunciation: ["/tʰə̰ːt aː/"],
              specific_note: "超驚訝的『真的假的？』。",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "á", meaning: "啊", tail: "?" },
              ],
            },
            {
              term_target: "Thật không?",
              pronunciation: ["/tʰə̰ːt xoŋ/"],
              specific_note: "確認是否為事實。",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "không", meaning: "不/嗎", tail: "?" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Thật á? Không tin được!",
              translation: "真的假的？不敢相信！",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "á", meaning: "啊", tail: "? " },
                { text: "Không tin", meaning: "不相信", tail: " " },
                { text: "được", meaning: "能", tail: "!" },
              ],
            },
            {
              sentence: "Bạn nói thật không đấy?",
              translation: "你是說真的嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nói thật", meaning: "說實話", tail: " " },
                { text: "không đấy", meaning: "不呢/嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "『Thật á?』帶有明顯的驚訝情緒。",
          image_file: "really_q.png",
        },
        {
          id: "greet-023",
          term_zh: "太棒了",
          related_terms: [
            {
              term_target: "Tuyệt vời",
              pronunciation: ["/tuiə̰ːt vɜ̀i/"],
              specific_note: "極度讚美。",
              segments: [{ text: "Tuyệt vời", meaning: "絕佳/太棒", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn giỏi quá, tuyệt vời!",
              translation: "你太厲害了，真棒！",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "giỏi", meaning: "厲害/聰明", tail: " " },
                { text: "quá", meaning: "太", tail: ", " },
                { text: "tuyệt vời", meaning: "棒極了", tail: "!" },
              ],
            },
            {
              sentence: "Cảnh ở đây đẹp tuyệt vời.",
              translation: "這裡的風景美極了。",
              segments: [
                { text: "Cảnh", meaning: "風景", tail: " " },
                { text: "ở đây", meaning: "這裡", tail: " " },
                { text: "đẹp", meaning: "美", tail: " " },
                { text: "tuyệt vời", meaning: "絕佳", tail: "." },
              ],
            },
          ],
          usage_note: "形容東西好吃也可以用『Tuyệt vời』。",
          image_file: "awesome.png",
        },
        {
          id: "greet-024",
          term_zh: "很高興認識你",
          related_terms: [
            {
              term_target: "Rất vui được gặp bạn",
              pronunciation: ["/zə̂ːt vui dɨə̰ːk ɣa̰ːp ba̰ːn/"],
              specific_note: "正式初次見面。",
              segments: [
                { text: "Rất vui", meaning: "很高興", tail: " " },
                { text: "được gặp", meaning: "能遇見", tail: " " },
                { text: "bạn", meaning: "你", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào anh, rất vui được làm quen.",
              translation: "哥你好，很高興認識你。（結識朋友常用）",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "anh", meaning: "哥哥", tail: ", " },
                { text: "rất vui", meaning: "很高興", tail: " " },
                { text: "được", meaning: "被/能", tail: " " },
                { text: "làm quen", meaning: "結識/認識", tail: "." },
              ],
            },
          ],
          usage_note:
            "商務場合說『được gặp』（見到面），交朋友說『làm quen』（結識）。",
          image_file: "nice_to_meet_you.png",
        },
        {
          id: "greet-025",
          term_zh: "真可惜",
          related_terms: [
            {
              term_target: "Tiếc quá",
              pronunciation: ["/tiə̌k kwaː/"],
              specific_note: "遺憾感嘆。",
              segments: [
                { text: "Tiếc", meaning: "可惜", tail: " " },
                { text: "quá", meaning: "太", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bạn không đi được à? Tiếc quá!",
              translation: "你不能去喔？真可惜！",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "không đi được", meaning: "不能去", tail: " " },
                { text: "à", meaning: "啊", tail: "? " },
                { text: "Tiếc quá", meaning: "太可惜了", tail: "!" },
              ],
            },
            {
              sentence: "Uầy, tiếc thế nhỉ!",
              translation: "哇，真可惜呢！（非常口語感嘆）",
              segments: [
                { text: "Uầy", meaning: "哇(感嘆詞)", tail: ", " },
                { text: "tiếc", meaning: "可惜", tail: " " },
                { text: "thế nhỉ", meaning: "這樣呢", tail: "!" },
              ],
            },
          ],
          usage_note: "聽到朋友沒辦法參加聚會時，這句是標準回應。",
          image_file: "too_bad.png",
        },
      ],
    },
    {
      id: "pronouns_vn",
      name: "主詞與代名詞",
      items: [
        {
          id: "pro-01",
          term_zh: "它",
          related_terms: [
            {
              term_target: "Nó",
              pronunciation: ["/nɔ̌/"],
              specific_note: "指無生命物、動物，或對極熟的朋友、晚輩的稱呼。",
              segments: [{ text: "Nó", meaning: "它", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nó hỏng rồi.",
              translation: "它壞掉了。",
              segments: [
                { text: "Nó", meaning: "它", tail: " " },
                { text: "hỏng", meaning: "壞掉", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Con mèo đó, nó đang ngủ.",
              translation: "那隻貓，它正在睡覺。",
              segments: [
                { text: "Con mèo", meaning: "貓", tail: " " },
                { text: "đó", meaning: "那", tail: ", " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ngủ", meaning: "睡覺", tail: "." },
              ],
            },
            {
              sentence: "Cái điện thoại này, nó đắt lắm.",
              translation: "這台手機，它很貴喔。",
              segments: [
                { text: "Cái điện thoại", meaning: "手機", tail: " " },
                { text: "này", meaning: "這", tail: ", " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "đắt", meaning: "貴", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
          ],
          usage_note:
            "跟英文的 it 很像，但在越南對晚輩或小孩有時也會自稱或稱呼對方為 nó，語氣較隨意。",
          image_file: "that.png",
        },
        {
          id: "pro-02",
          term_zh: "我",
          related_terms: [
            {
              term_target: "Tôi",
              pronunciation: ["/toːj/"],
              specific_note: "最中性、正式的「我」。外國人初學最保險的詞。",
              segments: [{ text: "Tôi", meaning: "我", tail: "" }],
            },
            {
              term_target: "Em",
              pronunciation: ["/ɛm/"],
              specific_note:
                "最常用的自稱。當你年紀比對方小，或是在餐廳點餐時自稱。",
              segments: [{ text: "Em", meaning: "我 (晚輩)", tail: "" }],
            },
            {
              term_target: "Mình",
              pronunciation: ["/miɲ/"],
              specific_note: "親近的朋友間自稱「我」，類似「人家」。",
              segments: [{ text: "Mình", meaning: "我 (親近)", tail: "" }],
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
              sentence: "Em lấy một ly trà sữa.",
              translation: "（點餐時）我要一杯奶茶。",
              segments: [
                { text: "Em", meaning: "我 (晚輩)", tail: " " },
                { text: "lấy", meaning: "拿/點", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "ly", meaning: "杯", tail: " " },
                { text: "trà sữa", meaning: "奶茶", tail: "." },
              ],
            },
            {
              sentence: "Mình không đi được, xin lỗi nha.",
              translation: "我不能去，抱歉啦。（對朋友說）",
              segments: [
                { text: "Mình", meaning: "我", tail: " " },
                { text: "không đi được", meaning: "不能去", tail: ", " },
                { text: "xin lỗi", meaning: "抱歉", tail: " " },
                { text: "nha", meaning: "唷", tail: "." },
              ],
            },
          ],
          usage_note:
            "去越南餐廳點餐，開頭用 Em (我) 會比用 Tôi (我) 聽起來更親切像當地人。",
          image_file: "i.png",
        },
        {
          id: "pro-03",
          term_zh: "你",
          related_terms: [
            {
              term_target: "Bạn",
              pronunciation: ["/ba̰ːn/"],
              specific_note: "中性的「你/朋友」，用於平輩或陌生人。",
              segments: [{ text: "Bạn", meaning: "你", tail: "" }],
            },
            {
              term_target: "Anh",
              pronunciation: ["/aːɲ/"],
              specific_note: "稱呼年紀稍長的男性（哥）。",
              segments: [{ text: "Anh", meaning: "哥哥/你", tail: "" }],
            },
            {
              term_target: "Chị",
              pronunciation: ["/cḭʔ/"],
              specific_note: "稱呼年紀稍長的女性（姊）。",
              segments: [{ text: "Chị", meaning: "姊姊/妳", tail: "" }],
            },
          ],
          examples: [
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
              sentence: "Anh ơi, cho em tính tiền.",
              translation: "帥哥（哥哥），我要結帳。",
              segments: [
                { text: "Anh", meaning: "哥哥", tail: " " },
                { text: "ơi", meaning: "喂/呼喚詞", tail: ", " },
                { text: "cho", meaning: "讓", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "tính tiền", meaning: "算錢", tail: "." },
              ],
            },
            {
              sentence: "Chị có khỏe không?",
              translation: "姊姊妳好嗎？",
              segments: [
                { text: "Chị", meaning: "姊姊", tail: " " },
                { text: "có", meaning: "有/是", tail: " " },
                { text: "khỏe", meaning: "好/健康", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note:
            "在越南，看到服務生比你大就叫 Anh/Chị，比你小就叫 Em，這就是最標準的「你」。",
          image_file: "you.png",
        },
        {
          id: "pro-04",
          term_zh: "他",
          related_terms: [
            {
              term_target: "Anh ấy",
              pronunciation: ["/aːɲ ə̌j/"],
              specific_note: "指那位男性（他）。",
              segments: [
                { text: "Anh", meaning: "哥哥", tail: " " },
                { text: "ấy", meaning: "那", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh ấy là đồng nghiệp của tôi.",
              translation: "他是我的同事。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "đồng nghiệp", meaning: "同事", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南語的「他」就是「哥哥+那」，組合起來就是「那位哥哥」。",
          image_file: "he.png",
        },
        {
          id: "pro-05",
          term_zh: "他的",
          related_terms: [
            {
              term_target: "Của anh ấy",
              pronunciation: ["/kuə̰ʔ aːɲ ə̌j/"],
              specific_note: "所有格形式。",
              segments: [
                { text: "Của", meaning: "的/屬於", tail: " " },
                { text: "anh ấy", meaning: "他", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đây là xe máy của anh ấy.",
              translation: "這是他的機車。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "xe máy", meaning: "機車", tail: " " },
                { text: "của anh ấy", meaning: "他的", tail: "." },
              ],
            },
          ],
          usage_note: "只要在代名詞前加個 Của 就變成「...的」。",
          image_file: "his.png",
        },
        {
          id: "pro-06",
          term_zh: "我們",
          related_terms: [
            {
              term_target: "Chúng tôi",
              pronunciation: ["/cuŋ̌ toːj/"],
              specific_note: "排他性「我們」（不包含對方，如向顧客介紹公司）。",
              segments: [
                { text: "Chúng", meaning: "群體", tail: " " },
                { text: "tôi", meaning: "我", tail: "" },
              ],
            },
            {
              term_target: "Chúng mình",
              pronunciation: ["/cuŋ̌ miɲ/"],
              specific_note: "包含性「我們」（包含對方，如約朋友去吃飯）。",
              segments: [
                { text: "Chúng", meaning: "群體", tail: " " },
                { text: "mình", meaning: "我/自己", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chúng mình đi uống cà phê đi!",
              translation: "我們去喝咖啡吧！（包含聽的人）",
              segments: [
                { text: "Chúng mình", meaning: "我們", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "uống", meaning: "喝", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note:
            "約台灣朋友去玩要用 Chúng mình，如果是跟老闆報告「我們組」要用 Chúng tôi。",
          image_file: "we.png",
        },
        {
          id: "pro-07",
          term_zh: "她",
          related_terms: [
            {
              term_target: "Chị ấy",
              pronunciation: ["/cḭʔ ə̌j/"],
              specific_note: "指那位女性（她）。",
              segments: [
                { text: "Chị", meaning: "姊姊", tail: " " },
                { text: "ấy", meaning: "那", tail: "" },
              ],
            },
            {
              term_target: "Cô ấy",
              pronunciation: ["/koː ə̌j/"],
              specific_note: "較正式或指年輕、單身女性（她）。",
              segments: [
                { text: "Cô", meaning: "阿姨/小姐", tail: " " },
                { text: "ấy", meaning: "那", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cô ấy đẹp quá!",
              translation: "她好漂亮喔！",
              segments: [
                { text: "Cô ấy", meaning: "她", tail: " " },
                { text: "đẹp", meaning: "漂亮", tail: " " },
                { text: "quá", meaning: "太/非常", tail: "!" },
              ],
            },
          ],
          usage_note: "如果你在聊一個剛認識的漂亮女生，用 Cô ấy 會很自然。",
          image_file: "she.png",
        },
        {
          id: "pro-08",
          term_zh: "他們",
          related_terms: [
            {
              term_target: "Họ",
              pronunciation: ["/hɔ̰ʔ/"],
              specific_note: "指「他們」這群人（較正式）。",
              segments: [{ text: "Họ", meaning: "他們", tail: "" }],
            },
            {
              term_target: "Chúng nó",
              pronunciation: ["/cuŋ̌ nɔ̌/"],
              specific_note: "指那些東西、動物，或較隨意稱呼一群小孩/朋友。",
              segments: [
                { text: "Chúng", meaning: "群體", tail: " " },
                { text: "nó", meaning: "它", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Họ đang họp.",
              translation: "他們正在開會。",
              segments: [
                { text: "Họ", meaning: "他們", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "họp", meaning: "開會", tail: "." },
              ],
            },
          ],
          usage_note: "Chúng nó 常用來指「那群傢伙」或「那些動物」。",
          image_file: "they.png",
        },
        {
          id: "pro-09",
          term_zh: "這個",
          related_terms: [
            {
              term_target: "Cái này",
              pronunciation: ["/kaːj nàːj/"],
              specific_note: "指近處的某個東西。",
              segments: [
                { text: "Cái", meaning: "物品量詞", tail: " " },
                { text: "này", meaning: "這", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cái này ngon lắm!",
              translation: "這個很好吃！",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "lắm", meaning: "非常", tail: "!" },
              ],
            },
            {
              sentence: "Cho tôi xem cái này.",
              translation: "給我看看這個。",
              segments: [
                { text: "Cho tôi", meaning: "給我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
          ],
          usage_note: "在市場點東西吃，手一指說『Cái này』準沒錯。",
          image_file: "this.png",
        },
        {
          id: "pro-10",
          term_zh: "那個",
          related_terms: [
            {
              term_target: "Cái đó",
              pronunciation: ["/kaːj dɔ̌/"],
              specific_note: "指稍遠處或剛提到過的東西。",
              segments: [
                { text: "Cái", meaning: "物品", tail: " " },
                { text: "đó", meaning: "那", tail: "" },
              ],
            },
            {
              term_target: "Cái kia",
              pronunciation: ["/kaːj kiə/"],
              specific_note: "指更遠處、對面的東西。",
              segments: [
                { text: "Cái", meaning: "物品", tail: " " },
                { text: "kia", meaning: "那邊", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cái đó giá bao nhiêu?",
              translation: "那個多少錢？",
              segments: [
                { text: "Cái đó", meaning: "那個", tail: " " },
                { text: "giá", meaning: "價格", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: "?" },
              ],
            },
          ],
          usage_note: "Cái đó 常用於對話中提到的事，Cái kia 則是用手指向遠方。",
          image_file: "that.png",
        },
        {
          id: "pro-11",
          term_zh: "她的",
          related_terms: [
            {
              term_target: "Của chị ấy",
              pronunciation: ["/kuə̰ʔ cḭʔ ə̌j/"],
              specific_note: "屬於她的。",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "chị ấy", meaning: "她", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đây là túi xách của chị ấy.",
              translation: "這是她的包包。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "túi xách", meaning: "包包", tail: " " },
                { text: "của chị ấy", meaning: "她的", tail: "." },
              ],
            },
          ],
          usage_note: "注意越南語的所有格順序跟中文相反：『東西 + 的 + 人』。",
          image_file: "her.png",
        },
        {
          id: "pro-12",
          term_zh: "你的",
          related_terms: [
            {
              term_target: "Của bạn",
              pronunciation: ["/kuə̰ʔ ba̰ːn/"],
              specific_note: "屬於你的。",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "bạn", meaning: "你", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Số điện thoại của bạn là gì?",
              translation: "你的電話號碼是多少？",
              segments: [
                { text: "Số điện thoại", meaning: "電話號碼", tail: " " },
                { text: "của bạn", meaning: "你的", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "詢問對方東西時常用這個格式。",
          image_file: "your.png",
        },
        {
          id: "pro-13",
          term_zh: "他們的",
          related_terms: [
            {
              term_target: "Của họ",
              pronunciation: ["/kuə̰ʔ hɔ̰ʔ/"],
              specific_note: "屬於他們的。",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "họ", meaning: "他們", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đó là nhà của họ.",
              translation: "那是他們的家。",
              segments: [
                { text: "Đó", meaning: "那", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "nhà", meaning: "家", tail: " " },
                { text: "của họ", meaning: "他們的", tail: "." },
              ],
            },
          ],
          usage_note: "họ 常用於指稱第三方的一群人。",
          image_file: "their.png",
        },
        {
          id: "pro-14",
          term_zh: "我們的",
          related_terms: [
            {
              term_target: "Của chúng mình",
              pronunciation: ["/kuə̰ʔ cuŋ̌ miɲ/"],
              specific_note: "我們（好友/情侶）的。",
              segments: [
                { text: "Của", meaning: "的", tail: " " },
                { text: "chúng mình", meaning: "我們", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đây là ảnh của chúng mình.",
              translation: "這是我們的照片。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "ảnh", meaning: "照片", tail: " " },
                { text: "của chúng mình", meaning: "我們的", tail: "." },
              ],
            },
          ],
          usage_note: "在 FB 打卡曬恩愛或放合照，常用 Của chúng mình。",
          image_file: "our.png",
        },
        {
          id: "pro-15",
          term_zh: "這些",
          related_terms: [
            {
              term_target: "Những cái này",
              pronunciation: ["/ɲɨŋ̌ kaːj nàːj/"],
              specific_note: "近處複數物品。",
              segments: [
                { text: "Những", meaning: "複數標記", tail: " " },
                { text: "cái này", meaning: "這個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Những cái này bao nhiêu tiền?",
              translation: "這些總共多少錢？",
              segments: [
                { text: "Những cái này", meaning: "這些", tail: " " },
                { text: "bao nhiêu tiền", meaning: "多少錢", tail: "?" },
              ],
            },
          ],
          usage_note: "Những 就像英文的複數 -s，放在名詞前面。",
          image_file: "these.png",
        },
        {
          id: "pro-16",
          term_zh: "那些",
          related_terms: [
            {
              term_target: "Những cái đó",
              pronunciation: ["/ɲɨŋ̌ kaːj dɔ̌/"],
              specific_note: "遠處複數物品。",
              segments: [
                { text: "Những", meaning: "複數標記", tail: " " },
                { text: "cái đó", meaning: "那個", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tôi thích những cái đó.",
              translation: "我喜歡那些。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "những cái đó", meaning: "那些", tail: "." },
              ],
            },
          ],
          usage_note: "同樣是在名詞前加個 Những 即可。",
          image_file: "those.png",
        },
      ],
    },
    {
      id: "verbs_vn",
      name: "常用動詞",
      items: [
        {
          id: "v-01",
          term_zh: "是",
          related_terms: [
            {
              term_target: "Là",
              pronunciation: ["/laː˨˩/"],
              specific_note: "用於連接兩個名詞（A 是 B）。",
              segments: [{ text: "Là", meaning: "是", tail: "" }],
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
              sentence: "Đây là cái gì?",
              translation: "這是什麼？",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "cái gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Đó là sự thật.",
              translation: "那是事實。",
              segments: [
                { text: "Đó", meaning: "那", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sự thật", meaning: "事實", tail: "." },
              ],
            },
          ],
          usage_note: "注意：如果是形容詞（如：我很忙），中間不需要加 là。",
          image_file: "be.png",
        },
        {
          id: "v-02",
          term_zh: "有",
          related_terms: [
            {
              term_target: "Có",
              pronunciation: ["/kɔ˧˥/"],
              specific_note: "擁有，或表達「有某物存在」。",
              segments: [{ text: "Có", meaning: "有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi có một câu hỏi.",
              translation: "我有個問題。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "một", meaning: "一個", tail: " " },
                { text: "câu hỏi", meaning: "問題", tail: "." },
              ],
            },
            {
              sentence: "Ở đây có WiFi không?",
              translation: "這裡有 WiFi 嗎？",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "WiFi", meaning: "WiFi", tail: " " },
                { text: "không", meaning: "嗎(疑問詞)", tail: "?" },
              ],
            },
            {
              sentence: "Bạn có tiền lẻ không?",
              translation: "你有零錢嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "tiền lẻ", meaning: "零錢", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "句尾加 không 就變成問句「有沒有...？」。",
          image_file: "have.png",
        },
        {
          id: "v-03",
          term_zh: "去",
          related_terms: [
            {
              term_target: "Đi",
              pronunciation: ["/ɗi˧˧/"],
              specific_note: "移動到某處，或作為命令句尾「吧」。",
              segments: [{ text: "Đi", meaning: "去", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi thôi!",
              translation: "走吧！",
              segments: [
                { text: "Đi", meaning: "走/去", tail: " " },
                { text: "thôi", meaning: "吧/罷了", tail: "!" },
              ],
            },
            {
              sentence: "Tôi đi làm đây.",
              translation: "我去上班囉。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "đi làm", meaning: "去上班", tail: " " },
                { text: "đây", meaning: "現在/這(語助)", tail: "." },
              ],
            },
            {
              sentence: "Cuối tuần bạn đi đâu?",
              translation: "週末你要去哪？",
              segments: [
                { text: "Cuối tuần", meaning: "週末", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "『Đi chơi』（去玩）是越南人社交最常用的詞。",
          image_file: "go.png",
        },
        {
          id: "v-04",
          term_zh: "拿 / 得到",
          related_terms: [
            {
              term_target: "Lấy",
              pronunciation: ["/ləj˧˥/"],
              specific_note: "用手拿、取走，點餐時也用這個字。",
              segments: [{ text: "Lấy", meaning: "拿/取", tail: "" }],
            },
            {
              term_target: "Được",
              pronunciation: ["/ɗɨəʔ˨˩/"],
              specific_note: "得到、獲取（通常指非實體或被動獲得）。",
              segments: [{ text: "Được", meaning: "得到", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lấy cho tôi cái này.",
              translation: "幫我拿這個。",
              segments: [
                { text: "Lấy", meaning: "拿", tail: " " },
                { text: "cho tôi", meaning: "給我", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
            {
              sentence: "Tôi được tặng quà.",
              translation: "我收到了禮物（被送禮物）。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "được", meaning: "得到/被(正面)", tail: " " },
                { text: "tặng", meaning: "送", tail: " " },
                { text: "quà", meaning: "禮物", tail: "." },
              ],
            },
            {
              sentence: "Bạn lấy mấy cái?",
              translation: "你要拿幾個？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "lấy", meaning: "拿", tail: " " },
                { text: "mấy", meaning: "幾", tail: " " },
                { text: "cái", meaning: "個", tail: "?" },
              ],
            },
          ],
          usage_note: "結帳要收據時會說『Lấy hóa đơn』。",
          image_file: "get.png",
        },
        {
          id: "v-05",
          term_zh: "做",
          related_terms: [
            {
              term_target: "Làm",
              pronunciation: ["/laːm˨˩/"],
              specific_note: "執行動作或製造東西。",
              segments: [{ text: "Làm", meaning: "做", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn đang làm gì đấy?",
              translation: "你在幹嘛？(正在做什麼？)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "đấy", meaning: "呢", tail: "?" },
              ],
            },
            {
              sentence: "Làm việc thôi!",
              translation: "開工吧！(去做事吧)",
              segments: [
                { text: "Làm việc", meaning: "工作", tail: " " },
                { text: "thôi", meaning: "吧", tail: "!" },
              ],
            },
            {
              sentence: "Làm ơn giúp tôi.",
              translation: "請幫幫我（做恩情）。",
              segments: [
                { text: "Làm ơn", meaning: "請/拜託", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "tôi", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "『Làm việc』是工作，『Làm xong』是做完了。",
          image_file: "do.png",
        },
        {
          id: "v-06",
          term_zh: "說",
          related_terms: [
            {
              term_target: "Nói",
              pronunciation: ["/nɔj˧˥/"],
              specific_note: "表達內容、講話。",
              segments: [{ text: "Nói", meaning: "說", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn nói gì cơ?",
              translation: "你說什麼？(沒聽清楚時)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "cơ", meaning: "呢(語助詞)", tail: "?" },
              ],
            },
            {
              sentence: "Nói thật đi.",
              translation: "說實話吧。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "thật", meaning: "真/實", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Đừng nói nữa.",
              translation: "別說了。",
              segments: [
                { text: "Đừng", meaning: "不要", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "nữa", meaning: "再/繼續", tail: "." },
              ],
            },
          ],
          usage_note: "講越南語是『Nói tiếng Việt』。",
          image_file: "say.png",
        },
        {
          id: "v-07",
          term_zh: "知道",
          related_terms: [
            {
              term_target: "Biết",
              pronunciation: ["/biət˧˥/"],
              specific_note: "理解事實、掌握技能或認識某人。",
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
              sentence: "Bạn có biết bơi không?",
              translation: "你會游泳嗎？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "biết", meaning: "知道/會", tail: " " },
                { text: "bơi", meaning: "游泳", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Ai mà biết được!",
              translation: "誰知道啊！(天曉得)",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "mà", meaning: "而/卻", tail: " " },
                { text: "biết", meaning: "知道", tail: " " },
                { text: "được", meaning: "能/得", tail: "!" },
              ],
            },
          ],
          usage_note: "『Biết rồi』是我知道了/懂了。",
          image_file: "know.png",
        },
        {
          id: "v-08",
          term_zh: "想 / 認為",
          related_terms: [
            {
              term_target: "Nghĩ",
              pronunciation: ["/ŋi˦ˀ˥/"],
              specific_note: "思考、覺得。",
              segments: [{ text: "Nghĩ", meaning: "想", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Để tôi nghĩ đã.",
              translation: "讓我想想先。",
              segments: [
                { text: "Để", meaning: "讓", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "đã", meaning: "先/已經", tail: "." },
              ],
            },
            {
              sentence: "Bạn nghĩ sao?",
              translation: "你覺得呢？(你怎麼想？)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nghĩ", meaning: "想", tail: " " },
                { text: "sao", meaning: "如何/怎樣", tail: "?" },
              ],
            },
          ],
          usage_note: "如果是「想念」要用『Nhớ』，如果是「想要」要用『Muốn』。",
          image_file: "think.png",
        },
        {
          id: "v-09",
          term_zh: "看 / 觀看 / 瞧瞧",
             related_terms: [
                {
                  term_target: "Xem",
                  pronunciation: ["/sɛm˧˧/"],
                  specific_note:
                    "指有目的性的看（看電影、看菜單、檢查、瞧一瞧）。",
                  segments: [{ text: "Xem", meaning: "看", tail: "" }],
                },
              ],
              examples: [
                {
                  sentence: "Để em xem chút.",
                  translation:
                    "讓我看一下。（買東西或被問到問題時最常用的口頭禪）",
                  segments: [
                    { text: "Để", meaning: "讓", tail: " " },
                    { text: "em", meaning: "我(弟妹)", tail: " " },
                    { text: "xem", meaning: "看", tail: " " },
                    { text: "chút", meaning: "一點/一下", tail: "." },
                  ],
                },
                {
                  sentence: "Cho em xem cái này.",
                  translation: "請給我看這個。（在店裡想看某件商品時說）",
                  segments: [
                    { text: "Cho", meaning: "讓/給", tail: " " },
                    { text: "em", meaning: "我", tail: " " },
                    { text: "xem", meaning: "看", tail: " " },
                    { text: "cái này", meaning: "這個", tail: "." },
                  ],
                },
                {
                  sentence: "Xem phim không anh?",
                  translation: "要看電影嗎？（邀約朋友、情侶時的道地說法）",
                  segments: [
                    { text: "Xem", meaning: "看", tail: " " },
                    { text: "phim", meaning: "電影", tail: " " },
                    { text: "không", meaning: "嗎", tail: " " },
                    { text: "anh", meaning: "哥(你)", tail: "?" },
                  ],
                },
                {
                  sentence: "Để anh xem giá nhé.",
                  translation: "讓我（哥）看看價格喔。",
                  segments: [
                    { text: "Để", meaning: "讓", tail: " " },
                    { text: "anh", meaning: "我(哥哥)", tail: " " },
                    { text: "xem", meaning: "看", tail: " " },
                    { text: "giá", meaning: "價格", tail: " " },
                    { text: "nhé", meaning: "喔", tail: "." },
                  ],
                },
              ],
              usage_note:
                "在餐廳點餐或在攤位挑選衣服時，如果還沒決定好，只要對店員說『Để em xem』，他們就會讓你慢慢選，不會一直催你喔。",
              image_file: "see.png",
        },
        {
          id: "v-10",
          term_zh: "製作 / 做出",
          related_terms: [
            {
              term_target: "Làm",
              pronunciation: ["/laːm˨˩/"],
              specific_note: "製造、煮飯。",
              segments: [{ text: "Làm", meaning: "做", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Làm cà phê.",
              translation: "沖咖啡/做咖啡。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: "." },
              ],
            },
            {
              sentence: "Cái này làm bằng gì?",
              translation: "這個是用什麼做的？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "bằng", meaning: "用/藉由", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "做菜通常說『Làm món ăn』或『Nấu ăn』。",
          image_file: "make.png",
        },
        {
          id: "v-11",
          term_zh: "來",
          related_terms: [
            {
              term_target: "Đến",
              pronunciation: ["/ɗen˧˥/"],
              specific_note: "到達、來到。",
              segments: [{ text: "Đến", meaning: "來", tail: "" }],
            },
            {
              term_target: "Tới",
              pronunciation: ["/təj˧˥/"],
              specific_note: "來到（較口語）。",
              segments: [{ text: "Tới", meaning: "來/到", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tới rồi!",
              translation: "到了！(外送員或司機常說)",
              segments: [
                { text: "Tới", meaning: "來/到", tail: " " },
                { text: "rồi", meaning: "了", tail: "!" },
              ],
            },
            {
              sentence: "Đến đây chơi.",
              translation: "來這裡玩。",
              segments: [
                { text: "Đến", meaning: "來", tail: " " },
                { text: "đây", meaning: "這裡", tail: " " },
                { text: "chơi", meaning: "玩", tail: "." },
              ],
            },
          ],
          usage_note: "『Chào mừng bạn đến...』（歡迎你來到...）。",
          image_file: "come.png",
        },
        {
          id: "v-12",
          term_zh: "需要",
          related_terms: [
            {
              term_target: "Cần",
              pronunciation: ["/kən˨˩/"],
              specific_note: "必要、需求。",
              segments: [{ text: "Cần", meaning: "需要", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tôi cần giúp đỡ.",
              translation: "我需要幫助。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "giúp đỡ", meaning: "幫助", tail: "." },
              ],
            },
            {
              sentence: "Bạn cần gì?",
              translation: "你需要什麼？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "cần", meaning: "需要", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "『Cần thiết』是必要的。",
          image_file: "need.png",
        },
        {
          id: "v-13",
          term_zh: "使用 / 用",
          related_terms: [
            {
              term_target: "Dùng",
              pronunciation: ["/zum˨˩/"],
              specific_note: "使用、食用（禮貌用語）。",
              segments: [{ text: "Dùng", meaning: "用", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dùng cái này đi.",
              translation: "用這個吧。",
              segments: [
                { text: "Dùng", meaning: "用", tail: " " },
                { text: "cái này", meaning: "這個", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Bạn dùng cơm chưa?",
              translation: "你用過餐了嗎？(較有禮貌的問候)",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "dùng", meaning: "用/吃", tail: " " },
                { text: "cơm", meaning: "飯", tail: " " },
                { text: "chưa", meaning: "沒/尚未", tail: "?" },
              ],
            },
          ],
          usage_note: "正式文件多用『Sử dụng』，口語多用『Dùng』。",
          image_file: "use.png",
        },
{
  "id": "v-14",
  "term_zh": "找 / 尋找",
  "related_terms": [
    {
      "term_target": "Tìm",
      "pronunciation": ["/tim˨˩/"],
      "specific_note": "指「尋找」的行為或動作過程。",
      "segments": [{ "text": "Tìm", "meaning": "找", "tail": "" }]
    }
  ],
  "examples": [
    {
      "sentence": "Anh tìm ai ạ?",
      "translation": "你（哥）在找誰呀？（進辦公室或去別人家時，對方最常問的一句話）",
      "segments": [
        { "text": "Anh", "meaning": "哥哥(你)", "tail": " " },
        { "text": "tìm", "meaning": "找", "tail": " " },
        { "text": "ai", "meaning": "誰", "tail": " " },
        { "text": "ạ", "meaning": "敬語", "tail": "?" }
      ]
    },
    {
      "sentence": "Em đang tìm việc làm.",
      "translation": "我正在找工作。",
      "segments": [
        { "text": "Em", "meaning": "我(弟妹)", "tail": " " },
        { "text": "đang", "meaning": "正在", "tail": " " },
        { "text": "tìm", "meaning": "找", "tail": " " },
        { "text": "việc làm", "meaning": "工作", "tail": "." }
      ]
    },
    {
      "sentence": "Để em tìm trên Google Maps.",
      "translation": "讓我用 Google Maps 找一下。（找路時非常道地的說法）",
      "segments": [
        { "text": "Để", "meaning": "讓", "tail": " " },
        { "text": "em", "meaning": "我", "tail": " " },
        { "text": "tìm", "meaning": "找", "tail": " " },
        { "text": "trên", "meaning": "在...之上", "tail": " " },
        { "text": "Google Maps", "meaning": "Google地圖", "tail": "." }
      ]
    },
    {
      "sentence": "Em đang tìm chìa khóa.",
      "translation": "我正在找鑰匙。",
      "segments": [
        { "text": "Em", "meaning": "我", "tail": " " },
        { "text": "đang", "meaning": "正在", "tail": " " },
        { "text": "tìm", "meaning": "找", "tail": " " },
        { "text": "chìa khóa", "meaning": "鑰匙", "tail": "." }
      ]
    }
  ],
  "usage_note": "『Tìm』是指尋找的動作。如果是結帳時店員『找錢』給你，越南語要用『Trả lại tiền thừa』或者是更簡單的『Thối tiền』，不能用 Tìm 喔！",
  "image_file": "find.png"
},
        {
          id: "v-15",
          term_zh: "給 / 送",
          related_terms: [
            {
              term_target: "Cho",
              pronunciation: ["/cɔ˧˧/"],
              specific_note: "給予、讓。",
              segments: [{ text: "Cho", meaning: "給", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho tôi một ly trà đá.",
              translation: "給我一杯冰茶。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "tôi", meaning: "我", tail: " " },
                { text: "một ly", meaning: "一杯", tail: " " },
                { text: "trà đá", meaning: "冰茶", tail: "." },
              ],
            },
            {
              sentence: "Đừng cho ai biết.",
              translation: "別讓任何人知道。",
              segments: [
                { text: "Đừng", meaning: "不要", tail: " " },
                { text: "cho", meaning: "讓/給", tail: " " },
                { text: "ai", meaning: "誰", tail: " " },
                { text: "biết", meaning: "知道", tail: "." },
              ],
            },
          ],
          usage_note: "如果是「送禮物」會用『Tặng』。",
          image_file: "give.png",
        },
        {
          id: "v-16",
          term_zh: "告訴 / 講述",
          related_terms: [
            {
              term_target: "Kể",
              pronunciation: ["/kɛ˦ˀ˥/"],
              specific_note: "敘述故事、講經歷。",
              segments: [{ text: "Kể", meaning: "告訴/敘述", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Kể chuyện đi.",
              translation: "講故事吧。",
              segments: [
                { text: "Kể", meaning: "講", tail: " " },
                { text: "chuyện", meaning: "故事/事情", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Kể cho tôi nghe.",
              translation: "講給我聽。",
              segments: [
                { text: "Kể", meaning: "講", tail: " " },
                { text: "cho tôi", meaning: "給我", tail: " " },
                { text: "nghe", meaning: "聽", tail: "." },
              ],
            },
          ],
          usage_note: "單純傳達資訊用『Bảo』或『Nói』。",
          image_file: "tell.png",
        },
        {
          id: "v-17",
          term_zh: "工作",
          related_terms: [
            {
              term_target: "Làm việc",
              pronunciation: ["/laːm˨˩ viək˨˩/"],
              specific_note: "上班、做事。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "việc", meaning: "事情/工作", tail: "" },
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
              sentence: "Hôm nay không phải làm việc.",
              translation: "今天不用上班。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "không phải", meaning: "不用/不是", tail: " " },
                { text: "làm việc", meaning: "工作", tail: "." },
              ],
            },
          ],
          usage_note: "越南人常問：『Bạn làm việc ở đâu?』（你在哪工作？）。",
          image_file: "work.png",
        },
        {
          id: "v-18",
          term_zh: "喜歡",
          related_terms: [
            {
              term_target: "Thích",
              pronunciation: ["/tʰik˧˥/"],
              specific_note: "喜愛、中意。",
              segments: [{ text: "Thích", meaning: "喜歡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em thích anh.",
              translation: "我喜歡你。(女對男告白常用)",
              segments: [
                { text: "Em", meaning: "我(弟妹輩)", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "anh", meaning: "你(哥哥輩)", tail: "." },
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
          usage_note: "喜歡做某事，直接在 thích 後面加動詞即可。",
          image_file: "like.png",
        },
        {
          id: "v-19",
          term_zh: "起床",
          related_terms: [
            {
              term_target: "Ngủ dậy",
              pronunciation: ["/ŋu˦ˀ˥ zəj˨˩/"],
              specific_note: "睡醒起床。",
              segments: [
                { text: "Ngủ", meaning: "睡", tail: " " },
                { text: "dậy", meaning: "起/醒", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Dậy đi!",
              translation: "起床啦！",
              segments: [
                { text: "Dậy", meaning: "起/醒", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
            {
              sentence: "Mấy giờ bạn dậy?",
              translation: "你幾點起床？",
              segments: [
                { text: "Mấy giờ", meaning: "幾點", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "dậy", meaning: "起/醒", tail: "?" },
              ],
            },
          ],
          usage_note: "通常簡稱『Dậy』即可。",
          image_file: "wake_up.png",
        },
        {
          id: "v-20",
          term_zh: "說話 / 聊天",
          related_terms: [
            {
              term_target: "Nói chuyện",
              pronunciation: ["/nɔj˧˥ cuiən˨˩/"],
              specific_note: "交談、聊八卦。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "chuyện", meaning: "事情/故事", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đang nói chuyện với ai đấy?",
              translation: "你在跟誰說話？",
              segments: [
                { text: "Đang", meaning: "正在", tail: " " },
                { text: "nói chuyện", meaning: "說話", tail: " " },
                { text: "với", meaning: "跟", tail: " " },
                { text: "ai", meaning: "誰", tail: " " },
                { text: "đấy", meaning: "呢", tail: "?" },
              ],
            },
            {
              sentence: "Chúng ta nói chuyện đi.",
              translation: "我們談談吧。",
              segments: [
                { text: "Chúng ta", meaning: "我們(含對方)", tail: " " },
                { text: "nói chuyện", meaning: "說話", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
          ],
          usage_note:
            "『Tám chuyện』是聊八卦的意思（源自廣東話的「三姑六婆」）。",
          image_file: "speak.png",
        },
        {
          id: "v-21",
          term_zh: "聽見 / 聽",
          related_terms: [
            {
              term_target: "Nghe",
              pronunciation: ["/ŋɛ˧˧/"],
              specific_note: "聽覺、接電話、聽音樂。",
              segments: [{ text: "Nghe", meaning: "聽", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Alo, anh nghe rõ không?",
              translation: "喂，哥你聽得清楚嗎？（電話常用）",
              segments: [
                { text: "Alo", meaning: "喂", tail: ", " },
                { text: "anh", meaning: "哥", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "rõ", meaning: "清楚", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Tôi thích nghe nhạc Việt.",
              translation: "我喜歡聽越南音樂。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "nhạc Việt", meaning: "越語音樂", tail: "." },
              ],
            },
            {
              sentence: "Đừng nghe nó nói linh tinh.",
              translation: "別聽它瞎說。",
              segments: [
                { text: "Đừng", meaning: "不要", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "nói linh tinh", meaning: "瞎說/亂講", tail: "." },
              ],
            },
          ],
          usage_note:
            "接電話的第一句通常就是『Alo, tôi nghe đây』（喂，我在聽）。",
          image_file: "hear.png",
        },
        {
          id: "v-22",
          term_zh: "寫",
          related_terms: [
            {
              term_target: "Viết",
              pronunciation: ["/viət˧˥/"],
              specific_note: "書寫、寫作。",
              segments: [{ text: "Viết", meaning: "寫", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Viết tên vào đây.",
              translation: "把名字寫在這裡。",
              segments: [
                { text: "Viết", meaning: "寫", tail: " " },
                { text: "tên", meaning: "名字", tail: " " },
                { text: "vào", meaning: "進入/到", tail: " " },
                { text: "đây", meaning: "這裡", tail: "." },
              ],
            },
            {
              sentence: "Em viết tin nhắn cho anh nhé.",
              translation: "我傳簡訊（寫訊息）給你喔。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "viết", meaning: "寫", tail: " " },
                { text: "tin nhắn", meaning: "訊息", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "寫簡訊或在 Zalo 留言都常用 viết。",
          image_file: "write.png",
        },
        {
          id: "v-23",
          term_zh: "閱讀 / 看",
          related_terms: [
            {
              term_target: "Đọc",
              pronunciation: ["/ɗɔk˨˩/"],
              specific_note: "閱讀、朗讀。",
              segments: [{ text: "Đọc", meaning: "閱讀", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bạn đang đọc gì đấy?",
              translation: "你在看什麼（書/報）呢？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "đọc", meaning: "閱讀", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "đấy", meaning: "呢", tail: "?" },
              ],
            },
            {
              sentence: "Để em đọc thực đơn.",
              translation: "讓我來看看菜單。",
              segments: [
                { text: "Để", meaning: "讓", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "đọc", meaning: "閱讀/看", tail: " " },
                { text: "thực đơn", meaning: "菜單", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南語區分得很細，『看書』要用 đọc，『看電影』要用 xem。",
          image_file: "read.png",
        },
{
  "id": "v-24",
  "term_zh": "等待 / 等",
  "related_terms": [
    {
      "term_target": "Đợi",
      "pronunciation": ["/ɗəj˧˨/"],
      "specific_note": "口語中最通用的「等」。",
      "segments": [{ "text": "Đợi", "meaning": "等/等待", "tail": "" }]
    }
  ],
  "examples": [
    {
      "sentence": "Đợi em một chút nhé!",
      "translation": "等我一下下喔！（最萬用的禮貌說法）",
      "segments": [
        { "text": "Đợi", "meaning": "等", "tail": " " },
        { "text": "em", "meaning": "我(弟妹輩)", "tail": " " },
        { "text": "một chút", "meaning": "一下下/一點點", "tail": " " },
        { "text": "nhé", "meaning": "喔(語助詞)", "tail": "!" }
      ]
    },
    {
      "sentence": "Anh đang đợi ai thế?",
      "translation": "你（哥）正在等誰呀？",
      "segments": [
        { "text": "Anh", "meaning": "哥哥(你)", "tail": " " },
        { "text": "đang", "meaning": "正在", "tail": " " },
        { "text": "đợi", "meaning": "等", "tail": " " },
        { "text": "ai", "meaning": "誰", "tail": " " },
        { "text": "thế", "meaning": "呢/呀", "tail": "?" }
      ]
    },
    {
      "sentence": "Đợi em tí nhé.",
      "translation": "等我一下喔。（比 một chút 更口語、更快速的用法）",
      "segments": [
        { "text": "Đợi", "meaning": "等", "tail": " " },
        { "text": "em", "meaning": "我", "tail": " " },
        { "text": "tí", "meaning": "一下(極短)", "tail": " " },
        { "text": "nhé", "meaning": "喔", "tail": "." }
      ]
    },
    {
      "sentence": "Đợi lâu quá rồi.",
      "translation": "等太久了啦。",
      "segments": [
        { "text": "Đợi", "meaning": "等", "tail": " " },
        { "text": "lâu", "meaning": "久", "tail": " " },
        { "text": "quá", "meaning": "太", "tail": " " },
        { "text": "rồi", "meaning": "了", "tail": "." }
      ]
    }
  ],
  "usage_note": "在越南跟司機、外送員或是朋友溝通時，『Đợi em một chút』是必備的神句，加個『nhé』會讓你的語氣聽起來非常友善。",
  "image_file": "wait.png"
},
        {
          id: "v-25",
          term_zh: "嘗試 / 試試",
          related_terms: [
            {
              term_target: "Thử",
              pronunciation: ["/tʰɨ˧˩/"],
              specific_note: "試吃、試穿、嘗試做某事。",
              segments: [{ text: "Thử", meaning: "嘗試", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ăn thử đi, ngon lắm!",
              translation: "試吃看看吧，很好吃喔！",
              segments: [
                { text: "Ăn thử", meaning: "試吃", tail: " " },
                { text: "đi", meaning: "吧", tail: ", " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "lắm", meaning: "非常", tail: "!" },
              ],
            },
            {
              sentence: "Em muốn mặc thử cái này.",
              translation: "我想要試穿這個。（買衣服常用）",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "mặc thử", meaning: "試穿", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南市場買衣服一定要問：『Có được mặc thử không?』（可以試穿嗎？）。",
          image_file: "try.png",
        },
{
  "id": "v-26",
  "term_zh": "付錢 / 結帳",
  "related_terms": [
    {
      "term_target": "Tính tiền",
      "pronunciation": ["/tiɲ˧˥ tiən˨˩/"],
      "specific_note": "口語中最通用的「算錢/結帳」。",
      "segments": [
        { "text": "Tính", "meaning": "計算", "tail": " " },
        { "text": "tiền", "meaning": "錢", "tail": "" }
      ]
    }
  ],
  "examples": [
    {
      "sentence": "Anh ơi, tính tiền!",
      "translation": "哥，結帳！（在越南餐廳最常用的喊法）",
      "segments": [
        { "text": "Anh ơi", "meaning": "呼喚哥哥/帥哥", "tail": ", " },
        { "text": "tính tiền", "meaning": "結帳/算錢", "tail": "!" }
      ]
    },
    {
      "sentence": "Cho em tính tiền ạ.",
      "translation": "我要結帳喔。（口語中帶有敬意的說法）",
      "segments": [
        { "text": "Cho em", "meaning": "讓我", "tail": " " },
        { "text": "tính tiền", "meaning": "結帳", "tail": " " },
        { "text": "ạ", "meaning": "敬語", "tail": "." }
      ]
    },
    {
      "sentence": "Hôm nay em mời.",
      "translation": "今天我請客。（我來付錢的意思）",
      "segments": [
        { "text": "Hôm nay", "meaning": "今天", "tail": " " },
        { "text": "em", "meaning": "我(弟妹輩)", "tail": " " },
        { "text": "mời", "meaning": "邀請/請客", "tail": "." }
      ]
    }
  ],
  "usage_note": "在餐廳想買單時，只要舉手對店員喊『Tính tiền!』即可。如果對方比你大，喊『Anh ơi, tính tiền』；比你小則喊『Em ơi, tính tiền』。",
  "image_file": "pay.png"
},
        {
          id: "v-27",
          term_zh: "選擇",
          related_terms: [
            {
              term_target: "Chọn",
              pronunciation: ["/cɔn˧˨/"],
              specific_note: "從多個中挑選一個。",
              segments: [{ text: "Chọn", meaning: "選擇", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Khó chọn quá!",
              translation: "太難選了啦！",
              segments: [
                { text: "Khó", meaning: "困難", tail: " " },
                { text: "chọn", meaning: "選擇", tail: " " },
                { text: "quá", meaning: "太/非常", tail: "!" },
              ],
            },
            {
              sentence: "Bạn chọn cái nào?",
              translation: "你選哪一個？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "chọn", meaning: "選擇", tail: " " },
                { text: "cái nào", meaning: "哪一個", tail: "?" },
              ],
            },
          ],
          usage_note: "『Lựa chọn』是更正式的選擇名詞。",
          image_file: "choose.png",
        },
        {
          id: "v-28",
          term_zh: "進入 / 進去",
          related_terms: [
            {
              term_target: "Vào",
              pronunciation: ["/vaːw˨˩/"],
              specific_note: "進入室內、交通工具或某個空間。",
              segments: [{ text: "Vào", meaning: "進", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mời anh vào nhà chơi.",
              translation: "請哥哥進屋坐坐。（去越南人家家訪時最常聽到）",
              segments: [
                { text: "Mời", meaning: "邀請/請", tail: " " },
                { text: "anh", meaning: "哥哥(你)", tail: " " },
                { text: "vào", meaning: "進", tail: " " },
                { text: "nhà", meaning: "家", tail: " " },
                { text: "chơi", meaning: "玩/坐坐", tail: "." },
              ],
            },
            {
              sentence: "Em đi vào trong nhé.",
              translation: "我進去裡面喔。",
              segments: [
                { text: "Em", meaning: "我(弟妹)", tail: " " },
                { text: "đi vào", meaning: "進去", tail: " " },
                { text: "trong", meaning: "裡面", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Lối vào ở đâu ạ?",
              translation: "請問入口在哪裡？",
              segments: [
                { text: "Lối vào", meaning: "入口/進去的路", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
              ],
            },
            {
              sentence: "Anh vào xe đi!",
              translation: "哥，上車吧！（進去車子裡）",
              segments: [
                { text: "Anh", meaning: "哥哥(你)", tail: " " },
                { text: "vào", meaning: "進/上", tail: " " },
                { text: "xe", meaning: "車", tail: " " },
                { text: "đi", meaning: "吧(祈使)", tail: "!" },
              ],
            },
          ],
          usage_note:
            "在越南看到門口寫著『Vào』就是入口的意思。對應的詞是『Ra』（出）。",
          image_file: "enter.png",
        },
        {
          id: "v-29",
          term_zh: "住 / 在 (場所)",
          related_terms: [
            {
              term_target: "Ở",
              pronunciation: ["/əː˧˩/"],
              specific_note: "指居住在某處，或表達人、物「在」某個地點。",
              segments: [{ text: "Ở", meaning: "住/在", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh ở đâu?",
              translation: "你（哥）住哪裡？ / 你現在在哪？",
              segments: [
                { text: "Anh", meaning: "哥哥(你)", tail: " " },
                { text: "ở", meaning: "住/在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Nhà em ở Quận 1.",
              translation: "我家住在第一郡。（自我介紹居住地常用的說法）",
              segments: [
                { text: "Nhà", meaning: "家", tail: " " },
                { text: "em", meaning: "我(弟妹)", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "Quận 1", meaning: "第一郡", tail: "." },
              ],
            },
            {
              sentence: "Em ở khách sạn nào?",
              translation: "妳住在（哪間）飯店？",
              segments: [
                { text: "Em", meaning: "妳(弟妹)", tail: " " },
                { text: "ở", meaning: "住/待在", tail: " " },
                { text: "khách sạn", meaning: "飯店", tail: " " },
                { text: "nào", meaning: "哪一個", tail: "?" },
              ],
            },
            {
              sentence: "Điện thoại ở trên bàn.",
              translation: "手機在桌子上面。",
              segments: [
                { text: "Điện thoại", meaning: "手機", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "trên", meaning: "上面", tail: " " },
                { text: "bàn", meaning: "桌子", tail: "." },
              ],
            },
          ],
          usage_note:
            "不管是問人住哪，還是問東西在哪，越南語都習慣把主詞放在最前面，然後接『ở đâu』。這對台灣學習者來說是非常直覺的句型！",
          image_file: "live.png",
        },
        {
          id: "v-30",
          term_zh: "到達",
          related_terms: [
            {
              term_target: "Tới",
              pronunciation: ["/təj˧˥/"],
              specific_note: "到站、到了。",
              segments: [{ text: "Tới", meaning: "到", tail: "" }],
            },
            {
              term_target: "Đến",
              pronunciation: ["/ɗen˧˥/"],
              specific_note: "到達、來到。",
              segments: [{ text: "Đến", meaning: "到", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em tới rồi đây!",
              translation: "我到了喔！（跟朋友碰面常用）",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "tới rồi", meaning: "到了", tail: " " },
                { text: "đây", meaning: "這喔/現在", tail: "!" },
              ],
            },
            {
              sentence: "Sắp đến nơi chưa anh?",
              translation: "帥哥（哥哥），快要到了嗎？（問司機）",
              segments: [
                { text: "Sắp", meaning: "快要", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "nơi", meaning: "地方", tail: " " },
                { text: "chưa", meaning: "沒/了嗎", tail: " " },
                { text: "anh", meaning: "哥哥", tail: "?" },
              ],
            },
          ],
          usage_note:
            "司機送到目的地後通常會說：『Tới nơi rồi ạ』（到地方了喔）。",
          image_file: "arrive.png",
        },
        {
          id: "v-31",
          term_zh: "走路 / 散步",
          related_terms: [
            {
              term_target: "Đi bộ",
              pronunciation: ["/ɗi˧˧ ɓo˧˨/"],
              specific_note: "步行、走步。",
              segments: [
                { text: "Đi", meaning: "去/走", tail: " " },
                { text: "bộ", meaning: "部(足部)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi bộ cho khỏe.",
              translation: "走路對身體好（為了健康）。",
              segments: [
                { text: "Đi bộ", meaning: "走路", tail: " " },
                { text: "cho", meaning: "給/為了", tail: " " },
                { text: "khỏe", meaning: "健康", tail: "." },
              ],
            },
            {
              sentence: "Nhà em gần đây, đi bộ được.",
              translation: "我家就在附近，走路可以到。",
              segments: [
                { text: "Nhà em", meaning: "我家", tail: " " },
                { text: "gần đây", meaning: "附近", tail: ", " },
                { text: "đi bộ", meaning: "走路", tail: " " },
                { text: "được", meaning: "可以/能", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南機車很多，如果你說要『Đi bộ』當地人可能會覺得你很特別。",
          image_file: "walk.png",
        },
        {
          id: "v-32",
          term_zh: "打開",
          related_terms: [
            {
              term_target: "Mở",
              pronunciation: ["/məː˧˩/"],
              specific_note: "開門、開燈、打開軟體。",
              segments: [{ text: "Mở", meaning: "開", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mở cửa giúp em với.",
              translation: "幫我開一下門。",
              segments: [
                { text: "Mở cửa", meaning: "開門", tail: " " },
                { text: "giúp", meaning: "幫助", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "với", meaning: "吧/伴隨", tail: "." },
              ],
            },
            {
              sentence: "Mấy giờ cửa hàng mở cửa?",
              translation: "店幾點開門？",
              segments: [
                { text: "Mấy giờ", meaning: "幾點", tail: " " },
                { text: "cửa hàng", meaning: "商店", tail: " " },
                { text: "mở cửa", meaning: "開門", tail: "?" },
              ],
            },
          ],
          usage_note: "『Mở WiFi』就是開啟 WiFi。",
          image_file: "open.png",
        },
        {
          id: "v-33",
          term_zh: "關閉 / 熄滅",
          related_terms: [
            {
              term_target: "Đóng",
              pronunciation: ["/ɗoŋ˧˥/"],
              specific_note: "關門、關窗、關閉（實體物）。",
              segments: [{ text: "Đóng", meaning: "關", tail: "" }],
            },
            {
              term_target: "Tắt",
              pronunciation: ["/tat˧˥/"],
              specific_note: "關燈、關火、關手機電源。",
              segments: [{ text: "Tắt", meaning: "關/熄", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đóng cửa lại đi.",
              translation: "把門關上吧。",
              segments: [
                { text: "Đóng cửa", meaning: "關門", tail: " " },
                { text: "lại", meaning: "回/起來", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Tắt đèn khi đi ra ngoài.",
              translation: "出去時要關燈。",
              segments: [
                { text: "Tắt đèn", meaning: "關燈", tail: " " },
                { text: "khi", meaning: "當...時", tail: " " },
                { text: "đi ra ngoài", meaning: "出去外面", tail: "." },
              ],
            },
          ],
          usage_note: "關電源類要用 Tắt，關門窗類要用 Đóng。",
          image_file: "close.png",
        },
        {
          id: "v-34",
          term_zh: "幫助",
          related_terms: [
            {
              term_target: "Giúp",
              pronunciation: ["/zup˧˥/"],
              specific_note: "幫忙、協助。",
              segments: [{ text: "Giúp", meaning: "幫", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cần em giúp gì không?",
              translation: "需要我幫什麼嗎？",
              segments: [
                { text: "Cần", meaning: "需要", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Cảm ơn chị đã giúp em.",
              translation: "謝謝姊姊幫了我。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "chị", meaning: "姊姊", tail: " " },
                { text: "đã giúp", meaning: "已經幫", tail: " " },
                { text: "em", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "求救時喊『Giúp tôi với!』。",
          image_file: "help.png",
        },
        {
          id: "v-35",
          term_zh: "帶來 / 攜帶",
          related_terms: [
            {
              term_target: "Mang",
              pronunciation: ["/maːŋ˧˧/"],
              specific_note: "攜帶、外帶。",
              segments: [{ text: "Mang", meaning: "帶", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ăn đây hay mang về?",
              translation: "內用還是外帶？（店員必問）",
              segments: [
                { text: "Ăn đây", meaning: "這吃(內用)", tail: " " },
                { text: "hay", meaning: "還是", tail: " " },
                { text: "mang về", meaning: "帶回(外帶)", tail: "?" },
              ],
            },
            {
              sentence: "Nhớ mang theo áo mưa.",
              translation: "記得帶上雨衣。",
              segments: [
                { text: "Nhớ", meaning: "記得", tail: " " },
                { text: "mang theo", meaning: "帶上/隨身帶", tail: " " },
                { text: "áo mưa", meaning: "雨衣", tail: "." },
              ],
            },
          ],
          usage_note: "在越南點餐，『Mang về』就是外帶的意思。",
          image_file: "bring.png",
        },
        {
          id: "v-41",
          term_zh: "結束 / 完成",
          related_terms: [
            {
              term_target: "Xong",
              pronunciation: ["/səwŋm/"],
              specific_note: "強調動作完成、結束。",
              segments: [{ text: "Xong", meaning: "完成/結束", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Làm xong chưa?",
              translation: "做完了沒？",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "xong", meaning: "完", tail: " " },
                { text: "chưa", meaning: "了沒", tail: "?" },
              ],
            },
            {
              sentence: "Ăn xong rồi đi.",
              translation: "吃完後再走。",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "xong", meaning: "完", tail: " " },
                { text: "rồi", meaning: "之後/了", tail: " " },
                { text: "đi", meaning: "走", tail: "." },
              ],
            },
            {
              sentence: "Thế là xong!",
              translation: "就這樣，搞定！（結束了）",
              segments: [
                { text: "Thế là", meaning: "就是這樣", tail: " " },
                { text: "xong", meaning: "結束/完工", tail: "!" },
              ],
            },
          ],
          usage_note: "越南人常把 xong 放在動詞後，表示動作的結束。",
          image_file: "finish.png",
        },
        {
          id: "v-42",
          term_zh: "停止 / 停下",
          related_terms: [
            {
              term_target: "Dừng lại",
              pronunciation: ["/zɨŋ˨˩ laːj˨˩/"],
              specific_note: "身體或車輛停下來。",
              segments: [
                { text: "Dừng", meaning: "停", tail: " " },
                { text: "lại", meaning: "下來", tail: "" },
              ],
            },
            {
              term_target: "Thôi",
              pronunciation: ["/tʰoːj/"],
              specific_note: "停止動作（算了、別再做）。",
              segments: [{ text: "Thôi", meaning: "停止/算了", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Dừng xe ở đây.",
              translation: "停在這邊。（對司機說）",
              segments: [
                { text: "Dừng xe", meaning: "停車", tail: " " },
                { text: "ở đây", meaning: "在這裡", tail: "." },
              ],
            },
            {
              sentence: "Thôi đi, đừng nói nữa.",
              translation: "算了啦，別再說了。",
              segments: [
                { text: "Thôi đi", meaning: "算了/停下", tail: ", " },
                { text: "đừng", meaning: "不要", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "nữa", meaning: "再/繼續", tail: "." },
              ],
            },
          ],
          usage_note: "叫 Grab 司機停車，直接喊『Dừng ở đây』即可。",
          image_file: "stop.png",
        },
        {
          id: "v-43",
          term_zh: "記住 / 想念",
          related_terms: [
            {
              term_target: "Nhớ",
              pronunciation: ["/ɲəː˧˥/"],
              specific_note: "同時有「記得」跟「思念」的意思。",
              segments: [{ text: "Nhớ", meaning: "記住/想念", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhớ nhé!",
              translation: "要記得喔！",
              segments: [
                { text: "Nhớ", meaning: "記得", tail: " " },
                { text: "nhé", meaning: "喔(語助詞)", tail: "!" },
              ],
            },
            {
              sentence: "Anh nhớ em lắm.",
              translation: "我（哥）好想妳（妹）。",
              segments: [
                { text: "Anh", meaning: "哥(我)", tail: " " },
                { text: "nhớ", meaning: "想念", tail: " " },
                { text: "em", meaning: "妹(妳)", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
            {
              sentence: "Em không nhớ đường.",
              translation: "我不記路（路癡常用）。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "nhớ", meaning: "記得", tail: " " },
                { text: "đường", meaning: "路", tail: "." },
              ],
            },
          ],
          usage_note: "在越南，對喜歡的人說『Em nhớ anh』是非常直白的情話。",
          image_file: "remember.png",
        },
        {
          id: "v-44",
          term_zh: "談話 / 聊",
          related_terms: [
            {
              term_target: "Nói chuyện",
              pronunciation: ["/nɔj˧˥ cuiən˨˩/"],
              specific_note: "一般的說話、聊天。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "chuyện", meaning: "事情", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nói chuyện sau nhé.",
              translation: "晚點聊喔。",
              segments: [
                { text: "Nói chuyện", meaning: "說話", tail: " " },
                { text: "sau", meaning: "之後", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Em đang nói chuyện với bạn.",
              translation: "我正在跟朋友聊天。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "nói chuyện", meaning: "說話", tail: " " },
                { text: "với", meaning: "跟", tail: " " },
                { text: "bạn", meaning: "朋友", tail: "." },
              ],
            },
          ],
          usage_note: "如果是「講八卦」，越南年輕人常說『Tám chuyện』。",
          image_file: "talk.png",
        },
        {
          id: "v-45",
          term_zh: "見面 / 遇到",
          related_terms: [
            {
              term_target: "Gặp",
              pronunciation: ["/ɣa̰ːp˨˩/"],
              specific_note: "與人會面。",
              segments: [{ text: "Gặp", meaning: "見面", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Gặp lại sau.",
              translation: "再見（晚點見）。",
              segments: [
                { text: "Gặp lại", meaning: "再見面", tail: " " },
                { text: "sau", meaning: "稍後", tail: "." },
              ],
            },
            {
              sentence: "Mai gặp nhé!",
              translation: "明天見喔！",
              segments: [
                { text: "Mai", meaning: "明天", tail: " " },
                { text: "gặp", meaning: "見面", tail: " " },
                { text: "nhé", meaning: "喔", tail: "!" },
              ],
            },
            {
              sentence: "Rất vui được gặp anh.",
              translation: "很高興見到你（哥）。",
              segments: [
                { text: "Rất vui", meaning: "很高興", tail: " " },
                { text: "được", meaning: "被/能", tail: " " },
                { text: "gặp", meaning: "見面", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: "." },
              ],
            },
          ],
          usage_note: "越南人常說『Hẹn gặp lại』作為正式的再見。",
          image_file: "meet.png",
        },
        {
          id: "v-46",
          term_zh: "去 / 搭乘 / ...吧",
          related_terms: [
            {
              term_target: "Đi",
              pronunciation: ["/ɗi˧˧/"],
              specific_note:
                "移動到某處、搭乘交通工具，或放在句尾表示「提議/吧」。",
              segments: [{ text: "Đi", meaning: "去/搭乘", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi Grab cho nhanh.",
              translation: "搭 Grab 比較快。（在越南移動最常用的說法）",
              segments: [
                { text: "Đi", meaning: "搭乘", tail: " " },
                { text: "Grab", meaning: "叫車軟體", tail: " " },
                { text: "cho", meaning: "給/為了", tail: " " },
                { text: "nhanh", meaning: "快", tail: "." },
              ],
            },
            {
              sentence: "Anh đi đâu đấy?",
              translation: "你要去哪呀？（越南人見面最常用的打招呼方式）",
              segments: [
                { text: "Anh", meaning: "哥哥(你)", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: " " },
                { text: "đấy", meaning: "呢/呀", tail: "?" },
              ],
            },
            {
              sentence: "Đi uống cà phê đi!",
              translation: "去喝咖啡吧！（揪團喝咖啡必備句）",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "uống", meaning: "喝", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: " " },
                { text: "đi", meaning: "吧(語助詞)", tail: "!" },
              ],
            },
            {
              sentence: "Em đi bộ được.",
              translation: "我走路可以（到）。（表示不用搭車時使用）",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đi bộ", meaning: "走路", tail: " " },
                { text: "được", meaning: "可以/能", tail: "." },
              ],
            },
          ],
          usage_note:
            "搭機車、公車、計程車通通都用『Đi』。另外，想約朋友做某事，在句尾加一個『đi』就很有熱情的感覺！",
          image_file: "take.png",
        },
        {
          id: "v-47",
          term_zh: "放 / 讓 / 留",
          related_terms: [
            {
              term_target: "Để",
              pronunciation: ["/ɗeː˧˩/"],
              specific_note: "物理上的放置，或口語中的「讓某人做某事」。",
              segments: [{ text: "Để", meaning: "放/讓", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Để em xem chút.",
              translation: "讓我看一下。（看菜單或挑商品時必說）",
              segments: [
                { text: "Để", meaning: "讓", tail: " " },
                { text: "em", meaning: "我(弟妹)", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "chút", meaning: "一點/一下", tail: "." },
              ],
            },
            {
              sentence: "Để ở đây ạ.",
              translation: "放在這裡喔。（告訴外送員或司機放哪裡）",
              segments: [
                { text: "Để", meaning: "放", tail: " " },
                { text: "ở đây", meaning: "在這裡", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "." },
              ],
            },
            {
              sentence: "Cứ để đó đi.",
              translation: "就放那裡吧。（不用收、不用動，在那裡就好）",
              segments: [
                { text: "Cứ", meaning: "儘管/就", tail: " " },
                { text: "để", meaning: "放/留", tail: " " },
                { text: "đó", meaning: "那裡", tail: " " },
                { text: "đi", meaning: "吧(語助詞)", tail: "." },
              ],
            },
            {
              sentence: "Để em làm cho.",
              translation: "讓我來做吧。（主動幫忙別人時的道地說法）",
              segments: [
                { text: "Để", meaning: "讓", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "cho", meaning: "給/幫忙", tail: "." },
              ],
            },
          ],
          usage_note:
            "Để 是一個超級萬用詞！想看東西、想幫忙、想叫人放東西，通通先說一個 Để 就對了。",
          image_file: "put.png",
        },
        {
          id: "v-48",
          term_zh: "吃",
          related_terms: [
            {
              term_target: "Ăn",
              pronunciation: ["/aŋ˧˧/"],
              specific_note: "最通用的「吃」。",
              segments: [{ text: "Ăn", meaning: "吃", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ăn gì chưa?",
              translation: "吃了沒？（最道地的問候語）",
              segments: [
                { text: "Ăn", meaning: "吃", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "chưa", meaning: "了沒", tail: "?" },
              ],
            },
            {
              sentence: "Ngon quá, ăn đi!",
              translation: "太好吃了，快吃吧！",
              segments: [
                { text: "Ngon", meaning: "好吃", tail: " " },
                { text: "quá", meaning: "太/非常", tail: ", " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "đi", meaning: "吧(祈使)", tail: "!" },
              ],
            },
            {
              sentence: "Tôi ăn chay.",
              translation: "我吃素。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "ăn chay", meaning: "吃素", tail: "." },
              ],
            },
          ],
          usage_note: "『Ăn cơm』雖然是吃飯，但也常用來泛指吃正餐。",
          image_file: "eat.png",
        },
        {
          id: "v-49",
          term_zh: "睡覺",
          related_terms: [
            {
              term_target: "Ngủ",
              pronunciation: ["/ŋu˦ˀ˥/"],
              specific_note: "睡覺。",
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
              sentence: "Chúc em ngủ ngon.",
              translation: "祝妳晚安（睡得好）。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "em", meaning: "妳", tail: " " },
                { text: "ngủ ngon", meaning: "睡好/晚安", tail: "." },
              ],
            },
          ],
          usage_note: "午覺在越南文化中很重要，稱為『Ngủ trưa』。",
          image_file: "sleep.png",
        },
        {
          id: "v-50",
          term_zh: "寄送 / 傳送",
          related_terms: [
            {
              term_target: "Gửi",
              pronunciation: ["/ɣɨːj˧˩/"],
              specific_note: "寄信、傳訊息、寄放東西。",
              segments: [{ text: "Gửi", meaning: "寄送", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Gửi định vị cho em.",
              translation: "傳定位給我。（找人必備句）",
              segments: [
                { text: "Gửi", meaning: "傳送", tail: " " },
                { text: "định vị", meaning: "定位", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "em", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Gửi xe ở đâu ạ?",
              translation: "請問機車停哪裡？（寄車）",
              segments: [
                { text: "Gửi xe", meaning: "寄車/停車", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
              ],
            },
            {
              sentence: "Gửi ảnh cho mình nhé.",
              translation: "把照片傳給我喔。",
              segments: [
                { text: "Gửi", meaning: "傳送", tail: " " },
                { text: "ảnh", meaning: "照片", tail: " " },
                { text: "cho mình", meaning: "給我", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "越南機車不能亂停，一定要找有看板寫『Gửi xe』的地方。",
          image_file: "send.png",
        },
        {
          id: "v-51",
          term_zh: "開車 / 駕駛",
          related_terms: [
            {
              term_target: "Lái",
              pronunciation: ["/laːj˧˥/"],
              specific_note: "駕駛汽車、機車。",
              segments: [{ text: "Lái", meaning: "駕駛", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lái xe cẩn thận nhé.",
              translation: "開車（騎車）小心喔。",
              segments: [
                { text: "Lái xe", meaning: "開車", tail: " " },
                { text: "cẩn thận", meaning: "小心", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Em đang lái xe, gọi sau nhé.",
              translation: "我正在開車，晚點打給你。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: " lái xe", meaning: "開車", tail: ", " },
                { text: "gọi", meaning: "打(電話)", tail: " " },
                { text: "sau", meaning: "之後", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "雖然騎機車正式是 Chạy xe，但一般說 Lái xe 也通。",
          image_file: "drive.png",
        },
        {
          id: "v-52",
          term_zh: "讀書 / 學習",
          related_terms: [
            {
              term_target: "Học",
              pronunciation: ["/hɔk˨˩/"],
              specific_note: "讀書、上學、模仿。",
              segments: [{ text: "Học", meaning: "讀書/學習", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em đang học tiếng Việt.",
              translation: "我正在學越南語。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "học", meaning: "學習", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: "." },
              ],
            },
            {
              sentence: "Học đi đôi với hành.",
              translation: "學以致用（學與行並行）。",
              segments: [
                { text: "Học", meaning: "學", tail: " " },
                { text: "đi đôi", meaning: "並行", tail: " " },
                { text: "với", meaning: "跟", tail: " " },
                { text: "hành", meaning: "行(實踐)", tail: "." },
              ],
            },
          ],
          usage_note: "上學叫『Đi học』。",
          image_file: "study.png",
        },
        {
          id: "v-53",
          term_zh: "回去 / 返回",
          related_terms: [
            {
              term_target: "Về",
              pronunciation: ["/veː˨˩/"],
              specific_note: "回到有歸屬感的地方（家、國、座席）。",
              segments: [{ text: "Về", meaning: "回去", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em về đây.",
              translation: "我走囉（回去了）。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "về", meaning: "回", tail: " " },
                { text: "đây", meaning: "這(語助)", tail: "." },
              ],
            },
            {
              sentence: "Khi nào anh về Đài Loan?",
              translation: "你什麼時候回台灣？",
              segments: [
                { text: "Khi nào", meaning: "什麼時候", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "về", meaning: "回", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "?" },
              ],
            },
            {
              sentence: "Về nhà đi.",
              translation: "回家吧。",
              segments: [
                { text: "Về", meaning: "回", tail: " " },
                { text: "nhà", meaning: "家", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
          ],
          usage_note: "越南語分得很清楚，去不熟的地方用 Đi，回熟的地方用 Về。",
          image_file: "go_back.png",
        },
        {
          id: "v-54",
          term_zh: "了解 / 明白",
          related_terms: [
            {
              term_target: "Hiểu",
              pronunciation: ["/hiə̉ʊ/"],
              specific_note: "理解意思、明白道理。",
              segments: [{ text: "Hiểu", meaning: "明白/了解", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Có hiểu không?",
              translation: "聽得懂嗎？（明白了沒？）",
              segments: [
                { text: "Có", meaning: "有/是否", tail: " " },
                { text: "hiểu", meaning: "明白", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Em hiểu rồi.",
              translation: "我懂了。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "hiểu", meaning: "明白", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Khó hiểu quá!",
              translation: "太難懂了啦！",
              segments: [
                { text: "Khó", meaning: "困難", tail: " " },
                { text: "hiểu", meaning: "明白", tail: " " },
                { text: "quá", meaning: "太/非常", tail: "!" },
              ],
            },
          ],
          usage_note: "如果你想說「我明白了」，最道地就是『Hiểu rồi』。",
          image_file: "understand.png",
        },
      ],
    },
    {
      id: "adjectives_vn",
      name: "常用形容詞",
      items: [
  {
  "id": "adj-01",
  "term_zh": "好的 / 良好的",
  "related_terms": [
    {
      "term_target": "Tốt",
      "pronunciation": ["/tot˧˥/"],
      "specific_note": "指品質好、人品好，或對某事有益處。",
      "segments": [{ "text": "Tốt", "meaning": "好", "tail": "" }]
    }
  ],
  "examples": [
    {
      "sentence": "Người đó rất tốt.",
      "translation": "那個人很好（心地善良）。",
      "segments": [
        { "text": "Người đó", "meaning": "那個人", "tail": " " },
        { "text": "rất", "meaning": "非常", "tail": " " },
        { "text": "tốt", "meaning": "好", "tail": "." }
      ]
    },
    {
      "sentence": "Sản phẩm này chất lượng tốt.",
      "translation": "這個產品品質很好。",
      "segments": [
        { "text": "Sản phẩm", "meaning": "產品", "tail": " " },
        { "text": "này", "meaning": "這", "tail": " " },
        { "text": "chất lượng", "meaning": "品質", "tail": " " },
        { "text": "tốt", "meaning": "好", "tail": "." }
      ]
    },
    {
      "sentence": "Tốt cho sức khỏe.",
      "translation": "對健康有益。",
      "segments": [
        { "text": "Tốt", "meaning": "好", "tail": " " },
        { "text": "cho", "meaning": "給/對於", "tail": " " },
        { "text": "sức khỏe", "meaning": "健康", "tail": "." }
      ]
    },
    {
      "sentence": "Tốt lắm!",
      "translation": "非常好！（誇獎別人的表現）",
      "segments": [
        { "text": "Tốt", "meaning": "好", "tail": " " },
        { "text": "lắm", "meaning": "非常", "tail": "!" }
      ]
    }
  ],
  "usage_note": "如果你想稱讚一個人『人很好』，或是買東西時強調『品質好』，請務必使用 Tốt。",
  "image_file": "good.png"
},
        {
          id: "adj-02",
          term_zh: "壞的 / 差的",
          related_terms: [
            {
              term_target: "Xấu",
              pronunciation: ["/səw˧˥/"],
              specific_note: "指外觀醜、人品壞或天氣差。",
              segments: [{ text: "Xấu", meaning: "壞/醜", tail: "" }],
            },
            {
              term_target: "Tệ",
              pronunciation: ["/tɛ˨˩˨/"],
              specific_note: "指糟糕、差勁。",
              segments: [{ text: "Tệ", meaning: "糟/差", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Thời tiết hôm nay xấu quá.",
              translation: "今天天氣太差了。",
              segments: [
                { text: "Thời tiết", meaning: "天氣", tail: " " },
                { text: "hôm nay", meaning: "今天", tail: " " },
                { text: "xấu", meaning: "壞/不好", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Cảm giác thật là tệ.",
              translation: "感覺真的很糟糕。",
              segments: [
                { text: "Cảm giác", meaning: "感覺", tail: " " },
                { text: "thật là", meaning: "真是", tail: " " },
                { text: "tệ", meaning: "糟糕", tail: "." },
              ],
            },
          ],
          usage_note: "說人「長得醜」也是用 Xấu，說「品質爛」可以用 Tệ。",
          image_file: "bad.png",
        },
        {
          id: "adj-03",
          term_zh: "新的",
          related_terms: [
            {
              term_target: "Mới",
              pronunciation: ["/məːj˧˥/"],
              specific_note: "物品新，也可以指「剛做完某事」。",
              segments: [{ text: "Mới", meaning: "新", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Xe máy mới của ai đấy?",
              translation: "這台新機車是誰的呀？",
              segments: [
                { text: "Xe máy", meaning: "機車", tail: " " },
                { text: "mới", meaning: "新", tail: " " },
                { text: "của ai", meaning: "誰的", tail: " " },
                { text: "đấy", meaning: "呢/呀", tail: "?" },
              ],
            },
            {
              sentence: "Chúc mừng năm mới!",
              translation: "新年快樂！（祝賀新春）",
              segments: [
                { text: "Chúc mừng", meaning: "祝賀", tail: " " },
                { text: "năm", meaning: "年", tail: " " },
                { text: "mới", meaning: "新", tail: "!" },
              ],
            },
          ],
          usage_note: "形容詞放在名詞後，所以是「機車 新 (Xe máy mới)」。",
          image_file: "new.png",
        },
        {
          id: "adj-04",
          term_zh: "第一的",
          related_terms: [
            {
              term_target: "Đầu tiên",
              pronunciation: ["/ɗəw˨˩ tiən˧˧/"],
              specific_note: "序位上的最初。",
              segments: [{ text: "Đầu tiên", meaning: "第一/最初", tail: "" }],
            },
            {
              term_target: "Thứ nhất",
              pronunciation: ["/tʰɨ˧˥ ɲat˧˥/"],
              specific_note: "第一名、第一個。",
              segments: [{ text: "Thứ nhất", meaning: "第一", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lần đầu tiên em tới Việt Nam.",
              translation: "這是我第一次來到越南。",
              segments: [
                { text: "Lần", meaning: "次", tail: " " },
                { text: "đầu tiên", meaning: "最初/第一", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "tới", meaning: "來到", tail: " " },
                { text: "Việt Nam", meaning: "越南", tail: "." },
              ],
            },
          ],
          usage_note: "形容「第一次」固定用 Lần đầu tiên。",
          image_file: "first.png",
        },
        {
          id: "adj-05",
          term_zh: "上一個 / 最後的",
          related_terms: [
            {
              term_target: "Trước",
              pronunciation: ["/cɨək˧˥/"],
              specific_note: "之前的、上一個。",
              segments: [{ text: "Trước", meaning: "前", tail: "" }],
            },
            {
              term_target: "Cuối cùng",
              pronunciation: ["/kuəj˧˥ kuŋ˨˩/"],
              specific_note: "最後一個。",
              segments: [{ text: "Cuối cùng", meaning: "最後", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tuần trước anh đi đâu?",
              translation: "上週你（哥）去哪了？",
              segments: [
                { text: "Tuần", meaning: "週", tail: " " },
                { text: "trước", meaning: "前/上一個", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Đây là cơ hội cuối cùng.",
              translation: "這是最後的機會。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "cơ hội", meaning: "機會", tail: " " },
                { text: "cuối cùng", meaning: "最後", tail: "." },
              ],
            },
          ],
          usage_note: "『上個月』叫 Tháng trước，『上週』叫 Tuần trước。",
          image_file: "last.png",
        },
        {
          id: "adj-06",
          term_zh: "下一個",
          related_terms: [
            {
              term_target: "Sau",
              pronunciation: ["/saːw˧˧/"],
              specific_note: "之後的、下一個。",
              segments: [{ text: "Sau", meaning: "後", tail: "" }],
            },
            {
              term_target: "Tiếp theo",
              pronunciation: ["/tiəp˧˥ tʰɛw˧˧/"],
              specific_note: "接下來的。",
              segments: [{ text: "Tiếp theo", meaning: "接下來", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hẹn gặp lại lần sau nhé.",
              translation: "下次見（約見下次）。",
              segments: [
                { text: "Hẹn gặp lại", meaning: "再見面", tail: " " },
                { text: "lần", meaning: "次", tail: " " },
                { text: "sau", meaning: "下一個/後", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Người tiếp theo là ai?",
              translation: "下一位是誰？",
              segments: [
                { text: "Người", meaning: "人", tail: " " },
                { text: "tiếp theo", meaning: "下一個", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
              ],
            },
          ],
          usage_note: "同樣，『下個月』是 Tháng sau，『下週』是 Tuần sau。",
          image_file: "next.png",
        },
{
  "id": "adj-07",
  "term_zh": "長的",
  "related_terms": [
    {
      "term_target": "Dài",
      "pronunciation": ["/zaːj˨˩/"],
      "specific_note": "指空間、長度或距離上的「長」。",
      "segments": [{ "text": "Dài", "meaning": "長", "tail": "" }]
    }
  ],
  "examples": [
    {
      "sentence": "Tóc chị dài quá!",
      "translation": "姊姊的頭髮好長喔！",
      "segments": [
        { "text": "Tóc", "meaning": "頭髮", "tail": " " },
        { "text": "chị", "meaning": "姊姊", "tail": " " },
        { "text": "dài", "meaning": "長", "tail": " " },
        { "text": "quá", "meaning": "太/真", "tail": "!" }
      ]
    },
    {
      "sentence": "Cái quần này hơi dài.",
      "translation": "這條褲子有一點點長。（試穿衣服時常用）",
      "segments": [
        { "text": "Cái quần", "meaning": "褲子", "tail": " " },
        { "text": "này", "meaning": "這", "tail": " " },
        { "text": "hơi", "meaning": "有點", "tail": " " },
        { "text": "dài", "meaning": "長", "tail": "." }
      ]
    },
    {
      "sentence": "Đường này dài lắm.",
      "translation": "這條路非常長。",
      "segments": [
        { "text": "Đường", "meaning": "馬路/路", "tail": " " },
        { "text": "này", "meaning": "這", "tail": " " },
        { "text": "dài", "meaning": "長", "tail": " " },
        { "text": "lắm", "meaning": "非常", "tail": "." }
      ]
    },
    {
      "sentence": "Em muốn mua một cái thước dài.",
      "translation": "我想買一把長尺。",
      "segments": [
        { "text": "Em", "meaning": "我", "tail": " " },
        { "text": "muốn", "meaning": "想", "tail": " " },
        { "text": "mua", "meaning": "買", "tail": " " },
        { "text": "một cái", "meaning": "一個", "tail": " " },
        { "text": "thước", "meaning": "尺", "tail": " " },
        { "text": "dài", "meaning": "長", "tail": "." }
      ]
    }
  ],
  "usage_note": "形容物理長度固定用 Dài。如果是指時間很久，記得要改用 Lâu 喔！",
  "image_file": "long.png"
},
        {
          id: "adj-08",
          term_zh: "大的",
          related_terms: [
            {
              term_target: "To",
              pronunciation: ["/tɔ˧˧/"],
              specific_note: "指體積大、聲音大。",
              segments: [{ text: "To", meaning: "大", tail: "" }],
            },
            {
              term_target: "Lớn",
              pronunciation: ["/lən˧˥/"],
              specific_note: "指規模大、長大、偉大。",
              segments: [{ text: "Lớn", meaning: "大/壯大", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nói to lên!",
              translation: "說大聲一點！",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "to", meaning: "大", tail: " " },
                { text: "lên", meaning: "起來", tail: "!" },
              ],
            },
            {
              sentence: "Thành phố này rất lớn.",
              translation: "這座城市非常大。",
              segments: [
                { text: "Thành phố", meaning: "城市", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "lớn", meaning: "大", tail: "." },
              ],
            },
          ],
          usage_note: "形容東西體積大，口語最愛用 To。",
          image_file: "big.png",
        },
        {
          id: "adj-09",
          term_zh: "小的",
          related_terms: [
            {
              term_target: "Nhỏ",
              pronunciation: ["/ɲɔ˧˩/"],
              specific_note: "指體積小、年紀小（北越常用）。",
              segments: [{ text: "Nhỏ", meaning: "小", tail: "" }],
            },
            {
              term_target: "Bé",
              pronunciation: ["/ɓɛ˧˥/"],
              specific_note: "指小、幼小（常用於小孩）。",
              segments: [{ text: "Bé", meaning: "小", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này nhỏ quá, có cái to không?",
              translation: "這個太小了，有大的嗎？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "nhỏ", meaning: "小", tail: " " },
                { text: "quá", meaning: "太", tail: ", " },
                { text: "có", meaning: "有", tail: " " },
                { text: "cái to", meaning: "大的(東西)", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "叫小孩子可以親切地叫 Bé ơi。",
          image_file: "small.png",
        },
        {
          id: "adj-10",
          term_zh: "多的 / 常",
          related_terms: [
            {
              term_target: "Nhiều",
              pronunciation: ["/ɲiəw˨˩/"],
              specific_note: "指數量多。",
              segments: [{ text: "Nhiều", meaning: "多", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cảm ơn anh nhiều nhé!",
              translation: "非常謝謝你（哥）喔！",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "anh", meaning: "哥哥", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "nhé", meaning: "喔", tail: "!" },
              ],
            },
            {
              sentence: "Ở đây nhiều người quá.",
              translation: "這裡人太多了。",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
          ],
          usage_note: "『喝很多水』叫 Uống nhiều nước。",
          image_file: "many.png",
        },
        {
          id: "adj-11",
          term_zh: "高的",
          related_terms: [
            {
              term_target: "Cao",
              pronunciation: ["/kaːw˧˧/"],
              specific_note: "指身高高、位置高。",
              segments: [{ text: "Cao", meaning: "高", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh ấy rất cao.",
              translation: "他很高。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "cao", meaning: "高", tail: "." },
              ],
            },
          ],
          usage_note: "物價高也可以說 Giá cao。",
          image_file: "tall.png",
        },
        {
          id: "adj-12",
          term_zh: "年輕的",
          related_terms: [
            {
              term_target: "Trẻ",
              pronunciation: ["/cɛ˧˩/"],
              specific_note: "指年紀輕。",
              segments: [{ text: "Trẻ", meaning: "年輕", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chị nhìn trẻ quá!",
              translation: "姊姊你看起來真年輕！",
              segments: [
                { text: "Chị", meaning: "姊姊", tail: " " },
                { text: "nhìn", meaning: "看起來", tail: " " },
                { text: "trẻ", meaning: "年輕", tail: " " },
                { text: "quá", meaning: "太", tail: "!" },
              ],
            },
          ],
          usage_note: "稱讚越南女性必備句：Trẻ đẹp (年輕漂亮)。",
          image_file: "young.png",
        },
        {
          id: "adj-13",
          term_zh: "老的 / 舊的",
          related_terms: [
            {
              term_target: "Già",
              pronunciation: ["/zaː˨˩/"],
              specific_note: "指人年老。",
              segments: [{ text: "Già", meaning: "老", tail: "" }],
            },
            {
              term_target: "Cũ",
              pronunciation: ["/ku˦ˀ˥/"],
              specific_note: "指物品陳舊。",
              segments: [{ text: "Cũ", meaning: "舊", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bố em già rồi.",
              translation: "我爸爸老了。",
              segments: [
                { text: "Bố em", meaning: "我爸爸", tail: " " },
                { text: "già", meaning: "老", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Sách cũ này của ai?",
              translation: "這本舊書是誰的？",
              segments: [
                { text: "Sách", meaning: "書", tail: " " },
                { text: "cũ", meaning: "舊", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "của ai", meaning: "誰的", tail: "?" },
              ],
            },
          ],
          usage_note: "注意區分：人老用 Già，東西舊用 Cũ。",
          image_file: "old.png",
        },
        {
          id: "adj-14",
          term_zh: "近的",
          related_terms: [
            {
              term_target: "Gần",
              pronunciation: ["/ɣən˨˩/"],
              specific_note: "指距離近。",
              segments: [{ text: "Gần", meaning: "近", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhà em ở gần đây.",
              translation: "我家住在這附近。",
              segments: [
                { text: "Nhà em", meaning: "我家", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "gần đây", meaning: "這附近", tail: "." },
              ],
            },
          ],
          usage_note: "『附近』通常說 Gần đây。",
          image_file: "near.png",
        },
        {
          id: "adj-15",
          term_zh: "遠的",
          related_terms: [
            {
              term_target: "Xa",
              pronunciation: ["/saː˧˧/"],
              specific_note: "指距離遠。",
              segments: [{ text: "Xa", meaning: "遠", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi sân bay có xa không?",
              translation: "去機場遠嗎？",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "sân bay", meaning: "機場", tail: " " },
                { text: "có", meaning: "是否", tail: " " },
                { text: "xa", meaning: "遠", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "問路常用：Cách đây bao xa? (離這多遠？)。",
          image_file: "far.png",
        },
        {
          id: "adj-16",
          term_zh: "快的",
          related_terms: [
            {
              term_target: "Nhanh",
              pronunciation: ["/ɲaɲ˧˧/"],
              specific_note: "指速度快。",
              segments: [{ text: "Nhanh", meaning: "快", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi nhanh lên!",
              translation: "快一點走！（趕時間常用）",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "nhanh", meaning: "快", tail: " " },
                { text: "lên", meaning: "起來", tail: "!" },
              ],
            },
            {
              sentence: "Làm nhanh nhé.",
              translation: "動作快點喔。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "nhanh", meaning: "快", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "『快點』就是 Nhanh lên。",
          image_file: "fast.png",
        },
        {
          id: "adj-17",
          term_zh: "慢的",
          related_terms: [
            {
              term_target: "Chậm",
              pronunciation: ["/cəm˨˩/"],
              specific_note: "指速度慢。",
              segments: [{ text: "Chậm", meaning: "慢", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh nói chậm một chút.",
              translation: "哥你講慢一點。",
              segments: [
                { text: "Anh", meaning: "哥哥", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "chậm", meaning: "慢", tail: " " },
                { text: "một chút", meaning: "一點點", tail: "." },
              ],
            },
          ],
          usage_note: "外國人必學：Nói chậm lại (講慢一點)。",
          image_file: "slow.png",
        },
        {
          id: "adj-18",
          term_zh: "熱的",
          related_terms: [
            {
              term_target: "Nóng",
              pronunciation: ["/nɔŋ˧˥/"],
              specific_note: "指天氣熱、溫度高。",
              segments: [{ text: "Nóng", meaning: "熱", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Trời nóng quá, đi uống bia đi!",
              translation: "天氣太熱了，去喝啤酒吧！",
              segments: [
                { text: "Trời", meaning: "天氣/天", tail: " " },
                { text: "nóng", meaning: "熱", tail: " " },
                { text: "quá", meaning: "太", tail: ", " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "uống", meaning: "喝", tail: " " },
                { text: "bia", meaning: "啤酒", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note: "點熱咖啡叫 Cà phê nóng。",
          image_file: "hot.png",
        },
        {
          id: "adj-19",
          term_zh: "冷的",
          related_terms: [
            {
              term_target: "Lạnh",
              pronunciation: ["/lan˨˩˨/"],
              specific_note: "指天氣冷、身體冷。",
              segments: [{ text: "Lạnh", meaning: "冷", tail: "" }],
            },
            {
              term_target: "Nguội",
              pronunciation: ["/ŋuəj˨˩/"],
              specific_note: "指食物變涼、不熱了。",
              segments: [{ text: "Nguội", meaning: "涼/冷(食物)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mùa đông ở Hà Nội rất lạnh.",
              translation: "河內的冬天很冷。",
              segments: [
                { text: "Mùa đông", meaning: "冬天", tail: " " },
                { text: "ở Hà Nội", meaning: "在河內", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
              ],
            },
          ],
          usage_note: "如果想要加冰塊的冷飲，要用 Đá (冰)。",
          image_file: "cold.png",
        },
        {
          id: "adj-20",
          term_zh: "乾淨的",
          related_terms: [
            {
              term_target: "Sạch",
              pronunciation: ["/sac˧˥/"],
              specific_note: "指乾淨、衛生。",
              segments: [{ text: "Sạch", meaning: "乾淨", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Quán này nhìn rất sạch sẽ.",
              translation: "這家店看起來很乾淨衛生。",
              segments: [
                { text: "Quán này", meaning: "這家店", tail: " " },
                { text: "nhìn", meaning: "看/看起來", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "sạch sẽ", meaning: "乾淨", tail: "." },
              ],
            },
          ],
          usage_note: "形容環境整潔常說 Sạch sẽ。",
          image_file: "clean.png",
        },
        {
          id: "adj-21",
          term_zh: "髒的",
          related_terms: [
            {
              term_target: "Bẩn",
              pronunciation: ["/ɓən˧˩/"],
              specific_note: "北越常用。",
              segments: [{ text: "Bẩn", meaning: "髒", tail: "" }],
            },
            {
              term_target: "Dơ",
              pronunciation: ["/zəː˧˧/"],
              specific_note: "南越常用。",
              segments: [{ text: "Dơ", meaning: "髒", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái bàn này bẩn quá, lau giúp em.",
              translation: "這張桌子好髒，幫我擦一下。",
              segments: [
                { text: "Cái bàn", meaning: "桌子", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "bẩn", meaning: "髒", tail: " " },
                { text: "quá", meaning: "太", tail: ", " },
                { text: "lau", meaning: "擦", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "em", meaning: "我", tail: "." },
              ],
            },
            {
              sentence: "Tay dơ rồi, đi rửa đi.",
              translation: "手髒了，去洗手吧。",
              segments: [
                { text: "Tay", meaning: "手", tail: " " },
                { text: "dơ", meaning: "髒", tail: " " },
                { text: "rồi", meaning: "了", tail: ", " },
                { text: "đi rửa", meaning: "去洗", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
          ],
          usage_note: "在路邊攤坐下前，如果覺得桌子髒，可以用這句叫店員。",
          image_file: "dirty.png",
        },
        {
          id: "adj-22",
          term_zh: "簡單的 / 容易的",
          related_terms: [
            {
              term_target: "Dễ",
              pronunciation: ["/ze˦ˀ˥/"],
              specific_note: "指事情不困難、容易上手。",
              segments: [{ text: "Dễ", meaning: "容易", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tiếng Việt có dễ không?",
              translation: "越南語容易嗎？",
              segments: [
                { text: "Tiếng Việt", meaning: "越南語", tail: " " },
                { text: "có", meaning: "有/是否", tail: " " },
                { text: "dễ", meaning: "容易", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Dễ như ăn cháo.",
              translation: "易如反掌（簡單得像喝粥）。",
              segments: [
                { text: "Dễ", meaning: "簡單", tail: " " },
                { text: "như", meaning: "像", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "cháo", meaning: "粥", tail: "." },
              ],
            },
          ],
          usage_note: "回答別人『很簡單』時，可以說『Dễ lắm!』。",
          image_file: "easy.png",
        },
        {
          id: "adj-23",
          term_zh: "困難的",
          related_terms: [
            {
              term_target: "Khó",
              pronunciation: ["/xɔ˧˥/"],
              specific_note: "指事情艱難或人很難搞。",
              segments: [{ text: "Khó", meaning: "困難", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Phát âm tiếng Việt khó quá!",
              translation: "越南語發音太難了！",
              segments: [
                { text: "Phát âm", meaning: "發音", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: " " },
                { text: "khó", meaning: "難", tail: " " },
                { text: "quá", meaning: "太", tail: "!" },
              ],
            },
            {
              sentence: "Ông sếp này khó tính lắm.",
              translation: "這個老闆（個性）很難搞。",
              segments: [
                { text: "Ông sếp", meaning: "老闆", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "khó tính", meaning: "難搞/挑剔", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
          ],
          usage_note: "形容一個人脾氣古怪或難相處時用 Khó tính。",
          image_file: "difficult.png",
        },
        {
          id: "adj-24",
          term_zh: "正確的 / 對的",
          related_terms: [
            {
              term_target: "Đúng",
              pronunciation: ["/ɗuŋ˧˥/"],
              specific_note: "事實正確或回答「是的」。",
              segments: [{ text: "Đúng", meaning: "對", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đúng rồi, chính là nó!",
              translation: "對了，就是它！",
              segments: [
                { text: "Đúng rồi", meaning: "對了", tail: ", " },
                { text: "chính là", meaning: "正是", tail: " " },
                { text: "nó", meaning: "它", tail: "!" },
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
          ],
          usage_note: "口語常說『Đúng rồi』來肯定別人的話。",
          image_file: "correct.png",
        },
        {
          id: "adj-25",
          term_zh: "錯誤的 / 錯了",
          related_terms: [
            {
              term_target: "Sai",
              pronunciation: ["/saːj˧˧/"],
              specific_note: "事實錯誤、弄錯號碼等。",
              segments: [{ text: "Sai", meaning: "錯", tail: "" }],
            },
            {
              term_target: "Nhầm",
              pronunciation: ["/ɲəm˨˩/"],
              specific_note: "搞混、弄錯（如找錯錢、認錯人）。",
              segments: [{ text: "Nhầm", meaning: "弄錯", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhầm số rồi anh ơi.",
              translation: "哥，（電話）打錯號碼了。",
              segments: [
                { text: "Nhầm số", meaning: "弄錯號碼", tail: " " },
                { text: "rồi", meaning: "了", tail: " " },
                { text: "anh ơi", meaning: "呼喚語", tail: "." },
              ],
            },
            {
              sentence: "Tính sai tiền rồi.",
              translation: "錢算錯了。（結帳發現不對時說）",
              segments: [
                { text: "Tính", meaning: "計算", tail: " " },
                { text: "sai", meaning: "錯", tail: " " },
                { text: "tiền", meaning: "錢", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "打錯電話、找錯錢，用 Nhầm 聽起來比較委婉。",
          image_file: "wrong.png",
        },
        {
          id: "adj-26",
          term_zh: "重要的",
          related_terms: [
            {
              term_target: "Quan trọng",
              pronunciation: ["/kwaːn˧˧ cɔŋ˨˩/"],
              specific_note: "重要、關鍵。",
              segments: [
                { text: "Quan", meaning: "關", tail: " " },
                { text: "trọng", meaning: "重", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Việc này rất quan trọng.",
              translation: "這件事非常重要。",
              segments: [
                { text: "Việc", meaning: "事情", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "quan trọng", meaning: "重要", tail: "." },
              ],
            },
            {
              sentence: "Không quan trọng đâu.",
              translation: "不重要啦（沒關係）。",
              segments: [
                { text: "Không", meaning: "不", tail: " " },
                { text: "quan trọng", meaning: "重要", tail: " " },
                { text: "đâu", meaning: "才不(語助詞)", tail: "." },
              ],
            },
          ],
          usage_note: "可以用於工作或任何關鍵時刻。",
          image_file: "important.png",
        },
        {
          id: "adj-27",
          term_zh: "不同的 / 其他的",
          related_terms: [
            {
              term_target: "Khác",
              pronunciation: ["/xaːk˧˥/"],
              specific_note: "指不相同，也可用於「另一個」。",
              segments: [{ text: "Khác", meaning: "不同", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hai cái này khác nhau chỗ nào?",
              translation: "這兩個哪裡不一樣？",
              segments: [
                { text: "Hai cái", meaning: "兩樣", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "khác nhau", meaning: "互相不同", tail: " " },
                { text: "chỗ nào", meaning: "哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Em muốn xem món khác.",
              translation: "我想看別的（東西/菜）。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "món khác", meaning: "別的項目", tail: "." },
              ],
            },
          ],
          usage_note:
            "在餐廳或商店不滿意時，可以說『Lấy cái khác』（拿別的）。",
          image_file: "different.png",
        },
        {
          id: "adj-28",
          term_zh: "真的",
          related_terms: [
            {
              term_target: "Thật",
              pronunciation: ["/tʰət˨˩/"],
              specific_note: "指真實、真話、真貨。",
              segments: [{ text: "Thật", meaning: "真", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Thật không?",
              translation: "真的嗎？",
              segments: [
                { text: "Thật", meaning: "真", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Hàng thật đấy.",
              translation: "這可是真貨喔。",
              segments: [
                { text: "Hàng", meaning: "貨/商品", tail: " " },
                { text: "thật", meaning: "真", tail: " " },
                { text: "đấy", meaning: "喔/呢", tail: "." },
              ],
            },
          ],
          usage_note: "常用於驚訝或確認事實。",
          image_file: "real.png",
        },
        {
          id: "adj-29",
          term_zh: "有趣的 / 好聽的",
          related_terms: [
            {
              term_target: "Hay",
              pronunciation: ["/haːj˧˧/"],
              specific_note: "口語極高頻，指電影、書、歌「好、精采」。",
              segments: [{ text: "Hay", meaning: "好/精采", tail: "" }],
            },
            {
              term_target: "Thú vị",
              pronunciation: ["/tʰu˧˥ vḭ˨˩/"],
              specific_note: "指事情有趣、耐人尋味。",
              segments: [{ text: "Thú vị", meaning: "有趣", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Phim này hay quá!",
              translation: "這部電影太精采（好看）了！",
              segments: [
                { text: "Phim", meaning: "電影", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "hay", meaning: "精采", tail: " " },
                { text: "quá", meaning: "太", tail: "!" },
              ],
            },
            {
              sentence: "Một câu hỏi thú vị.",
              translation: "一個有趣的問題。",
              segments: [
                { text: "Một", meaning: "一個", tail: " " },
                { text: "câu hỏi", meaning: "問題", tail: " " },
                { text: "thú vị", meaning: "有趣", tail: "." },
              ],
            },
          ],
          usage_note: "越南人稱讚一首歌或一本書好時，最常說的就是『Hay!』。",
          image_file: "interesting.png",
        },
        {
          id: "adj-30",
          term_zh: "美麗的",
          related_terms: [
            {
              term_target: "Đẹp",
              pronunciation: ["/ɗɛp˨˩/"],
              specific_note: "形容人、景、物、衣服都通用。",
              segments: [{ text: "Đẹp", meaning: "漂亮", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chị mặc áo này đẹp lắm.",
              translation: "姊姊穿這件衣服很漂亮。",
              segments: [
                { text: "Chị", meaning: "姊姊", tail: " " },
                { text: "mặc", meaning: "穿", tail: " " },
                { text: "áo này", meaning: "這衣服", tail: " " },
                { text: "đẹp", meaning: "漂亮", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
            {
              sentence: "Phong cảnh thật đẹp!",
              translation: "風景真美！",
              segments: [
                { text: "Phong cảnh", meaning: "風景", tail: " " },
                { text: "thật", meaning: "真", tail: " " },
                { text: "đẹp", meaning: "美", tail: "!" },
              ],
            },
          ],
          usage_note: "稱讚越南女生必備詞，也是越南語中最美的詞之一。",
          image_file: "beautiful.png",
        },
        {
          id: "adj-31",
          term_zh: "便宜的",
          related_terms: [
            {
              term_target: "Rẻ",
              pronunciation: ["/zɛ˧˩/"],
              specific_note: "指價格低廉。",
              segments: [{ text: "Rẻ", meaning: "便宜", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này có rẻ không?",
              translation: "這個便宜嗎？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "có", meaning: "有/是否", tail: " " },
                { text: "rẻ", meaning: "便宜", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Rẻ quá, mua đi!",
              translation: "太便宜了，買吧！",
              segments: [
                { text: "Rẻ quá", meaning: "太便宜", tail: ", " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note: "在越南市場殺價後成交，通常會說『Rẻ quá』。",
          image_file: "cheap.png",
        },
        {
          id: "adj-32",
          term_zh: "昂貴的",
          related_terms: [
            {
              term_target: "Đắt",
              pronunciation: ["/ɗat˧˥/"],
              specific_note: "北越常用「貴」。",
              segments: [{ text: "Đắt", meaning: "貴", tail: "" }],
            },
            {
              term_target: "Mắc",
              pronunciation: ["/mak˧˥/"],
              specific_note: "南越常用「貴」。",
              segments: [{ text: "Mắc", meaning: "貴", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mắc quá anh ơi, bớt đi!",
              translation: "哥，太貴了啦，算便宜點！",
              segments: [
                { text: "Mắc quá", meaning: "太貴", tail: " " },
                { text: "anh ơi", meaning: "呼喚帥哥/哥哥", tail: ", " },
                { text: "bớt đi", meaning: "減去吧/算便宜點", tail: "!" },
              ],
            },
            {
              sentence: "Cái gì cũng đắt.",
              translation: "什麼東西都很貴。",
              segments: [
                { text: "Cái gì", meaning: "什麼", tail: " " },
                { text: "cũng", meaning: "也/都", tail: " " },
                { text: "đắt", meaning: "貴", tail: "." },
              ],
            },
          ],
          usage_note:
            "南越（胡志明市）一定要說 Mắc quá，北越（河內）說 Đắt quá。",
          image_file: "expensive.png",
        },
        {
          id: "adj-33",
          term_zh: "飢餓的",
          related_terms: [
            {
              term_target: "Đói",
              pronunciation: ["/ɗɔj˧˥/"],
              specific_note: "肚子餓。",
              segments: [{ text: "Đói", meaning: "餓", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em đói bụng rồi.",
              translation: "我肚子餓了。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đói bụng", meaning: "肚子餓", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Đói muốn xỉu luôn.",
              translation: "餓到要暈倒了。",
              segments: [
                { text: "Đói", meaning: "餓", tail: " " },
                { text: "muốn xỉu", meaning: "想要暈倒", tail: " " },
                { text: "luôn", meaning: "一直/真的", tail: "." },
              ],
            },
          ],
          usage_note: "口語常在 Đói 後面加個 Bụng (肚子)。",
          image_file: "hungry.png",
        },
        {
          id: "adj-34",
          term_zh: "疲累的",
          related_terms: [
            {
              term_target: "Mệt",
              pronunciation: ["/mət˨˩/"],
              specific_note: "身體累、心情累。",
              segments: [{ text: "Mệt", meaning: "累", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hôm nay em mệt quá.",
              translation: "我今天太累了。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "mệt", meaning: "累", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Mệt nhưng mà vui.",
              translation: "很累但是很開心。",
              segments: [
                { text: "Mệt", meaning: "累", tail: " " },
                { text: "nhưng mà", meaning: "但是", tail: " " },
                { text: "vui", meaning: "開心", tail: "." },
              ],
            },
          ],
          usage_note: "越南人常嘆氣說『Mệt quá...』。",
          image_file: "tired.png",
        },
        {
          id: "adj-35",
          term_zh: "忙碌的",
          related_terms: [
            {
              term_target: "Bận",
              pronunciation: ["/ɓən˨˩/"],
              specific_note: "沒空、正在忙。",
              segments: [{ text: "Bận", meaning: "忙", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh đang bận, gọi lại sau nhé.",
              translation: "我（哥）正在忙，晚點再打來喔。",
              segments: [
                { text: "Anh", meaning: "哥(我)", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "bận", meaning: "忙", tail: ", " },
                { text: "gọi lại", meaning: "打回/再打", tail: " " },
                { text: "sau", meaning: "之後", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Cuối tuần em có bận không?",
              translation: "妳週末忙嗎？",
              segments: [
                { text: "Cuối tuần", meaning: "週末", tail: " " },
                { text: "em", meaning: "妳", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "bận", meaning: "忙", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "拒絕邀約常用：『Em bận rồi』（我忙了/我沒空）。",
          image_file: "busy.png",
        },
        {
          id: "adj-36",
          term_zh: "高興的 / 開心的",
          related_terms: [
            {
              term_target: "Vui",
              pronunciation: ["/vui˧˧/"],
              specific_note: "心情愉悅、好玩。",
              segments: [{ text: "Vui", meaning: "開心", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi chơi vui vẻ nhé!",
              translation: "去玩得開心喔！",
              segments: [
                { text: "Đi chơi", meaning: "去玩", tail: " " },
                { text: "vui vẻ", meaning: "開心/愉快", tail: " " },
                { text: "nhé", meaning: "喔", tail: "!" },
              ],
            },
          ],
          usage_note: "『Vui ghê!』是很道地的「好開心喔！」。",
          image_file: "happy.png",
        },
        {
          id: "adj-37",
          term_zh: "悲傷的 / 難過的",
          related_terms: [
            {
              term_target: "Buồn",
              pronunciation: ["/ɓuən˨˩/"],
              specific_note: "心情憂傷，也可用於「無聊」。",
              segments: [{ text: "Buồn", meaning: "悲傷", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em đừng buồn nữa.",
              translation: "妳別再難過了。",
              segments: [
                { text: "Em", meaning: "妳", tail: " " },
                { text: "đừng", meaning: "不要", tail: " " },
                { text: "buồn", meaning: "難過", tail: " " },
                { text: "nữa", meaning: "再/繼續", tail: "." },
              ],
            },
            {
              sentence: "Ở nhà một mình buồn quá.",
              translation: "一個人在家好無聊（鬱悶）。",
              segments: [
                { text: "Ở nhà", meaning: "在家", tail: " " },
                { text: "một mình", meaning: "一個人", tail: " " },
                { text: "buồn", meaning: "無聊/悶", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
          ],
          usage_note: "越南語的 Buồn 涵蓋了難過與無所事事的無聊感。",
          image_file: "sad.png",
        },
        {
          id: "adj-38",
          term_zh: "相似的 / 像",
          related_terms: [
            {
              term_target: "Giống",
              pronunciation: ["/zəwŋm˧˥/"],
              specific_note: "長得像、外觀或性質相似。",
              segments: [{ text: "Giống", meaning: "像/相似", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Con gái giống mẹ.",
              translation: "女兒長得像媽媽。",
              segments: [
                { text: "Con gái", meaning: "女兒", tail: " " },
                { text: "giống", meaning: "像", tail: " " },
                { text: "mẹ", meaning: "媽媽", tail: "." },
              ],
            },
            {
              sentence: "Hai cái này giống nhau.",
              translation: "這兩個一模一樣（彼此相似）。",
              segments: [
                { text: "Hai cái", meaning: "兩樣", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "giống nhau", meaning: "互相像", tail: "." },
              ],
            },
          ],
          usage_note: "形容兩樣東西一樣，要加一個 Nhau (互相)。",
          image_file: "similar.png",
        },
        {
          id: "adj-39",
          term_zh: "有名的",
          related_terms: [
            {
              term_target: "Nổi tiếng",
              pronunciation: ["/noːj˧˩ tiəŋ˧˥/"],
              specific_note: "知名、聲譽遠播。",
              segments: [
                { text: "Nổi", meaning: "浮/顯現", tail: " " },
                { text: "tiếng", meaning: "聲音/名聲", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Quán cà phê này rất nổi tiếng.",
              translation: "這家咖啡店非常有名。",
              segments: [
                { text: "Quán cà phê", meaning: "咖啡店", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "nổi tiếng", meaning: "有名", tail: "." },
              ],
            },
          ],
          usage_note: "旅遊推薦景點或餐廳常用這個詞。",
          image_file: "famous.png",
        },
        {
          id: "adj-40",
          term_zh: "外國的 / 國外",
          related_terms: [
            {
              term_target: "Nước ngoài",
              pronunciation: ["/nɨək˧˥ ŋwaːj˨˩/"],
              specific_note: "指外國、也指外國人。",
              segments: [
                { text: "Nước", meaning: "國家", tail: " " },
                { text: "ngoài", meaning: "外面", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em thích đi du lịch nước ngoài.",
              translation: "我喜歡去國外旅遊。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "đi du lịch", meaning: "去旅遊", tail: " " },
                { text: "nước ngoài", meaning: "國外", tail: "." },
              ],
            },
            {
              sentence: "Anh ấy là người nước ngoài.",
              translation: "他是外國人。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người nước ngoài", meaning: "外國人", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南人常稱外國人為『Người nước ngoài』，有時也會簡稱『Tây』（指西方人）。",
          image_file: "foreign.png",
        },
{
  "id": "adj-41",
  "term_zh": "聰明的",
  "related_terms": [
    {
      "term_target": "Thông minh",
      "pronunciation": ["/tʰəwŋm˧˧ miɲ˧˧/"],
      "specific_note": "形容頭腦靈活、理解力強（漢越音：聰明）。",
      "segments": [
        { "text": "Thông", "meaning": "通", "tail": " " },
        { "text": "minh", "meaning": "明", "tail": "" }
      ]
    }
  ],
  "examples": [
    {
      "sentence": "Con trai anh thông minh quá!",
      "translation": "你兒子真聰明！（誇獎小孩常用）",
      "segments": [
        { "text": "Con trai", "meaning": "兒子", "tail": " " },
        { "text": "anh", "meaning": "你(哥)", "tail": " " },
        { "text": "thông minh", "meaning": "聰明", "tail": " " },
        { "text": "quá", "meaning": "太/真", "tail": "!" }
      ]
    },
    {
      "sentence": "Cô ấy rất thông minh.",
      "translation": "她非常聰明。",
      "segments": [
        { "text": "Cô ấy", "meaning": "她", "tail": " " },
        { "text": "rất", "meaning": "非常", "tail": " " },
        { "text": "thông minh", "meaning": "聰明", "tail": "." }
      ]
    },
    {
      "sentence": "Đó là một câu hỏi thông minh.",
      "translation": "那是個聰明的問題。",
      "segments": [
        { "text": "Đó là", "meaning": "那是", "tail": " " },
        { "text": "một", "meaning": "一個", "tail": " " },
        { "text": "câu hỏi", "meaning": "問題", "tail": " " },
        { "text": "thông minh", "meaning": "聰明", "tail": "." }
      ]
    }
  ],
  "usage_note": "『Thông minh』是讚美他人智力最高頻且最安全的詞彙。在越南家庭作客時，用這句話誇獎對方的小孩非常受歡迎喔！",
  "image_file": "intelligent.png"
},
        {
          id: "adj-42",
          term_zh: "危險的",
          related_terms: [
            {
              term_target: "Nguy hiểm",
              pronunciation: ["/ŋwi˧˧ hiəm˧˩/"],
              specific_note: "指環境、行為或物品具有危險性。",
              segments: [
                { text: "Nguy", meaning: "危", tail: " " },
                { text: "hiểm", meaning: "險", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đừng đi ra đó, nguy hiểm lắm!",
              translation: "別去那邊，很危險喔！",
              segments: [
                { text: "Đừng", meaning: "不要", tail: " " },
                { text: "đi ra đó", meaning: "去那邊", tail: ", " },
                { text: "nguy hiểm", meaning: "危險", tail: " " },
                { text: "lắm", meaning: "非常", tail: "!" },
              ],
            },
            {
              sentence: "Đường này rất nguy hiểm.",
              translation: "這條路（交通狀況）很危險。",
              segments: [
                { text: "Đường", meaning: "路", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "nguy hiểm", meaning: "危險", tail: "." },
              ],
            },
          ],
          usage_note: "在越南過馬路或騎車時，常會聽到當地人提醒這句。",
          image_file: "dangerous.png",
        },
        {
          id: "adj-43",
          term_zh: "好心的 / 仁慈的",
          related_terms: [
            {
              term_target: "Tốt bụng",
              pronunciation: ["/tot˧˥ ɓuŋm˧˨/"],
              specific_note: "直譯是「肚子好」，指人心地善良、愛幫助人。",
              segments: [
                { text: "Tốt", meaning: "好", tail: " " },
                { text: "bụng", meaning: "肚子/心腸", tail: "" },
              ],
            },
            {
              term_target: "Hiền",
              pronunciation: ["/hiən˨˩/"],
              specific_note: "指人的性格溫柔、和藹、不愛爭吵。",
              segments: [{ text: "Hiền", meaning: "賢/溫柔", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh ấy rất tốt bụng.",
              translation: "他心地非常好。",
              segments: [
                { text: "Anh ấy", meaning: "他", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "tốt bụng", meaning: "好心", tail: "." },
              ],
            },
            {
              sentence: "Chị ấy hiền lắm.",
              translation: "那位姊姊人很溫柔和藹。",
              segments: [
                { text: "Chị ấy", meaning: "她", tail: " " },
                { text: "hiền", meaning: "溫柔/賢慧", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
          ],
          usage_note:
            "想誇獎越南友人「人很好」，說 Tốt bụng 會讓他們覺得你很懂越南話。",
          image_file: "kind.png",
        },
        
{
  "id": "adj-44",
  "term_zh": "每一個 / 所有的 / 一切",
  "related_terms": [
    {
      "term_target": "Mọi",
      "pronunciation": ["/mɔj˧˨/"],
      "specific_note": "強調群體的全部。常用於「大家」、「萬物」、「到處」。",
      "segments": [{ "text": "Mọi", "meaning": "一切/所有", "tail": "" }]
    }
  ],
  "examples": [
    {
      "sentence": "Chào mọi người!",
      "translation": "大家好！（向一群人打招呼的最標準說法）",
      "segments": [
        { "text": "Chào", "meaning": "問候/你好", "tail": " " },
        { "text": "mọi người", "meaning": "大家/所有人", "tail": "!" }
      ]
    },
    {
      "sentence": "Mọi thứ đều ổn.",
      "translation": "一切都很好（沒問題）。",
      "segments": [
        { "text": "Mọi thứ", "meaning": "所有事情/萬物", "tail": " " },
        { "text": "đều", "meaning": "都", "tail": " " },
        { "text": "ổn", "meaning": "穩/OK", "tail": "." }
      ]
    },
    {
      "sentence": "Mọi lúc mọi nơi.",
      "translation": "隨時隨地（隨時、隨處）。",
      "segments": [
        { "text": "Mọi lúc", "meaning": "任何時候", "tail": " " },
        { "text": "mọi nơi", "meaning": "任何地方", "tail": "." }
      ]
    },
    {
      "sentence": "Cảm ơn mọi người.",
      "translation": "謝謝大家。",
      "segments": [
        { "text": "Cảm ơn", "meaning": "謝謝", "tail": " " },
        { "text": "mọi người", "meaning": "大家", "tail": "." }
      ]
    }
  ],
  "usage_note": "如果你要對一群人講話，開頭說『Chào mọi người』絕對不會錯。它比『Chào các bạn』聽起來更親切且包含所有人。",
  "image_file": "every.png"
},
        {
          id: "adj-45",
          term_zh: "最喜愛的",
          related_terms: [
            {
              term_target: "Yêu thích",
              pronunciation: ["/iəw˧˧ tʰik˧˥/"],
              specific_note: "指喜愛、熱愛。",
              segments: [
                { text: "Yêu", meaning: "愛", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "" },
              ],
            },
            {
              term_target: "Thích nhất",
              pronunciation: ["/tʰik˧˥ ɲat˧˥/"],
              specific_note: "最喜歡（最常用於口語）。",
              segments: [
                { text: "Thích", meaning: "喜歡", tail: " " },
                { text: "nhất", meaning: "第一/最", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Món ăn yêu thích của bạn là gì?",
              translation: "你最喜愛的菜是什麼？",
              segments: [
                { text: "Món ăn", meaning: "食物/菜餚", tail: " " },
                { text: "yêu thích", meaning: "喜愛", tail: " " },
                { text: "của bạn", meaning: "你的", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Em thích nhất là đi du lịch.",
              translation: "我最喜歡的就是去旅遊。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "thích nhất", meaning: "最喜歡", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "đi du lịch", meaning: "去旅遊", tail: "." },
              ],
            },
          ],
          usage_note:
            "口語中直接在喜歡 (Thích) 後面加最 (Nhất) 就等於 Favorite。",
          image_file: "favorite.png",
        },
        {
          id: "adj-46",
          term_zh: "美味的 / 好吃的",
          related_terms: [
            {
              term_target: "Ngon",
              pronunciation: ["/ŋɔn˧˧/"],
              specific_note: "最通用的「好吃」。",
              segments: [{ text: "Ngon", meaning: "美味", tail: "" }],
            },
            {
              term_target: "Ngon tuyệt",
              pronunciation: ["/ŋɔn˧˧ tuiət˨˩/"],
              specific_note: "絕頂美味、太好吃了。",
              segments: [
                { text: "Ngon", meaning: "好吃", tail: " " },
                { text: "tuyệt", meaning: "絕佳", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cái này ngon quá!",
              translation: "這個好好吃喔！",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "quá", meaning: "太/真", tail: "!" },
              ],
            },
            {
              sentence: "Bún chả ở đây ngon tuyệt!",
              translation: "這裡的烤肉米線簡直太美味了！",
              segments: [
                { text: "Bún chả", meaning: "烤肉米線", tail: " " },
                { text: "ở đây", meaning: "這裡", tail: " " },
                { text: "ngon tuyệt", meaning: "美味絕倫", tail: "!" },
              ],
            },
            {
              sentence: "Nhìn ngon thế!",
              translation: "看起來真好吃！（看到食物時的驚嘆）",
              segments: [
                { text: "Nhìn", meaning: "看/看起來", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "thế", meaning: "那麼/真(語氣)", tail: "!" },
              ],
            },
          ],
          usage_note: "對越南老闆說 Ngon 或者是 Ngon lắm，他們會非常開心。",
          image_file: "delicious.png",
        },
      ],
    },
    {
      id: "nouns_vn",
      name: "常用名詞",
      items: [
        {
          id: "n-01",
          term_zh: "時間",
          related_terms: [
            {
              term_target: "Thời gian",
              pronunciation: ["/tʰəj˨˩ zaːn˧˧/"],
              specific_note: "指抽象的時間概念。",
              segments: [{ text: "Thời gian", meaning: "時間", tail: "" }],
            },
            {
              term_target: "Giờ",
              pronunciation: ["/zəː˨˩/"],
              specific_note: "指鐘點、小時。",
              segments: [{ text: "Giờ", meaning: "小時/點", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bây giờ là mấy giờ?",
              translation: "現在幾點？",
              segments: [
                { text: "Bây giờ", meaning: "現在", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點", tail: "?" },
              ],
            },
            {
              sentence: "Em không có thời gian.",
              translation: "我沒時間。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "không có", meaning: "沒有", tail: " " },
                { text: "thời gian", meaning: "時間", tail: "." },
              ],
            },
          ],
          usage_note: "問現在幾點固定用『Mấy giờ?』。",
          image_file: "time.png",
        },
        {
          id: "n-02",
          term_zh: "人們 / 人",
          related_terms: [
            {
              term_target: "Người",
              pronunciation: ["/ŋɨəj˨˩/"],
              specific_note: "泛指人，也是人的量詞。",
              segments: [{ text: "Người", meaning: "人", tail: "" }],
            },
            {
              term_target: "Mọi người",
              pronunciation: ["/mɔj˧˨ ŋɨəj˨˩/"],
              specific_note: "大家、每個人。",
              segments: [
                { text: "Mọi", meaning: "每/所有", tail: " " },
                { text: "người", meaning: "人", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chào mọi người!",
              translation: "大家好！",
              segments: [
                { text: "Chào", meaning: "問候", tail: " " },
                { text: "mọi người", meaning: "大家", tail: "!" },
              ],
            },
            {
              sentence: "Gia đình em có bốn người.",
              translation: "我家有四口人。",
              segments: [
                { text: "Gia đình", meaning: "家庭", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "bốn", meaning: "四", tail: " " },
                { text: "người", meaning: "人/位", tail: "." },
              ],
            },
          ],
          usage_note: "越南語稱呼「台灣人」就是『Người Đài Loan』。",
          image_file: "people.png",
        },
        {
          id: "n-03",
          term_zh: "金錢",
          related_terms: [
            {
              term_target: "Tiền",
              pronunciation: ["/tiən˨˩/"],
              specific_note: "錢。",
              segments: [{ text: "Tiền", meaning: "錢", tail: "" }],
            },
            {
              term_target: "Tiền mặt",
              pronunciation: ["/tiən˨˩ mat˨˩/"],
              specific_note: "現金。",
              segments: [
                { text: "Tiền", meaning: "錢", tail: " " },
                { text: "mặt", meaning: "面", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em hết tiền rồi.",
              translation: "我沒錢了（錢花完了）。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "hết", meaning: "完/盡", tail: " " },
                { text: "tiền", meaning: "錢", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Trả bằng tiền mặt được không?",
              translation: "付現金可以嗎？",
              segments: [
                { text: "Trả", meaning: "付/還", tail: " " },
                { text: "bằng", meaning: "用/藉由", tail: " " },
                { text: "tiền mặt", meaning: "現金", tail: " " },
                { text: "được không", meaning: "可以嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "結帳常用的『算錢』叫 Tính tiền。",
          image_file: "money.png",
        },
        {
          id: "n-04",
          term_zh: "孩子",
          related_terms: [
            {
              term_target: "Con nít",
              pronunciation: ["/kɔn˧˧ nit˧˥/"],
              specific_note: "小孩（口語）。",
              segments: [
                { text: "Con", meaning: "孩子", tail: " " },
                { text: "nít", meaning: "幼小", tail: "" },
              ],
            },
            {
              term_target: "Trẻ em",
              pronunciation: ["/cɛ˧˩ ɛm˧˧/"],
              specific_note: "兒童（正式）。",
              segments: [
                { text: "Trẻ", meaning: "幼/少", tail: " " },
                { text: "em", meaning: "弟妹", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Con nít thích ăn kẹo.",
              translation: "小孩子喜歡吃糖果。",
              segments: [
                { text: "Con nít", meaning: "小孩", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "kẹo", meaning: "糖果", tail: "." },
              ],
            },
          ],
          usage_note: "在越南叫別人的小孩，常親切地叫 Bé。",
          image_file: "child.png",
        },
        {
          id: "n-05",
          term_zh: "水",
          related_terms: [
            {
              term_target: "Nước",
              pronunciation: ["/nɨək˧˥/"],
              specific_note: "水，也指國家或果汁。",
              segments: [{ text: "Nước", meaning: "水", tail: "" }],
            },
            {
              term_target: "Nước đá",
              pronunciation: ["/nɨək˧˥ ɗa˧˥/"],
              specific_note: "冰水。",
              segments: [
                { text: "Nước", meaning: "水", tail: " " },
                { text: "đá", meaning: "冰/石", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho em một ly nước lọc.",
              translation: "給我一杯（過濾）純淨水。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "ly", meaning: "杯", tail: " " },
                { text: "nước lọc", meaning: "純淨水", tail: "." },
              ],
            },
            {
              sentence: "Uống nước đi!",
              translation: "喝點水吧！",
              segments: [
                { text: "Uống", meaning: "喝", tail: " " },
                { text: "nước", meaning: "水", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note: "越南餐廳通常會提供免費的 Nước trà（茶水）。",
          image_file: "water.png",
        },
        {
          id: "n-06",
          term_zh: "食物 / 飯菜",
          related_terms: [
            {
              term_target: "Đồ ăn",
              pronunciation: ["/ɗo˨˩ aŋ˧˧/"],
              specific_note: "食物、東西吃。",
              segments: [
                { text: "Đồ", meaning: "東西", tail: " " },
                { text: "ăn", meaning: "吃", tail: "" },
              ],
            },
            {
              term_target: "Món ăn",
              pronunciation: ["/mɔn˧˥ aŋ˧˧/"],
              specific_note: "菜餚、料理。",
              segments: [
                { text: "Món", meaning: "菜/項", tail: " " },
                { text: "ăn", meaning: "吃", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đồ ăn Việt Nam rất ngon.",
              translation: "越南食物非常好吃。",
              segments: [
                { text: "Đồ ăn", meaning: "食物", tail: " " },
                { text: "Việt Nam", meaning: "越南", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "ngon", meaning: "好吃", tail: "." },
              ],
            },
            {
              sentence: "Đây là món gì?",
              translation: "這是什麼菜？",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "món", meaning: "菜", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "逛夜市找「好吃的東西」就說 Đồ ăn ngon。",
          image_file: "food.png",
        },
        {
          id: "n-07",
          term_zh: "朋友",
          related_terms: [
            {
              term_target: "Bạn",
              pronunciation: ["/ba̰ːn/"],
              specific_note: "朋友、你（平輩）。",
              segments: [{ text: "Bạn", meaning: "朋友", tail: "" }],
            },
            {
              term_target: "Bạn thân",
              pronunciation: ["/ba̰ːn tʰən˧˧/"],
              specific_note: "摯友、好麻吉。",
              segments: [
                { text: "Bạn", meaning: "朋友", tail: " " },
                { text: "thân", meaning: "親近", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chúng mình là bạn.",
              translation: "我們是朋友。",
              segments: [
                { text: "Chúng mình", meaning: "我們", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "bạn", meaning: "朋友", tail: "." },
              ],
            },
          ],
          usage_note: "在 FB 或 Zalo 加好友，越南語叫 Kết bạn。",
          image_file: "friend.png",
        },
        {
          id: "n-08",
          term_zh: "家庭",
          related_terms: [
            {
              term_target: "Gia đình",
              pronunciation: ["/zaː˧˧ ɗiɲ˨˩/"],
              specific_note: "家庭（正式）。",
              segments: [{ text: "Gia đình", meaning: "家庭", tail: "" }],
            },
            {
              term_target: "Nhà",
              pronunciation: ["/ɲaː˨˩/"],
              specific_note: "家、房子（口語）。",
              segments: [{ text: "Nhà", meaning: "家/房子", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em yêu gia đình mình.",
              translation: "我愛我的家人。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "yêu", meaning: "愛", tail: " " },
                { text: "gia đình", meaning: "家庭", tail: " " },
                { text: "mình", meaning: "自己/我的", tail: "." },
              ],
            },
            {
              sentence: "Nhà em ở Quận 1.",
              translation: "我家住在第一郡（胡志明市地名）。",
              segments: [
                { text: "Nhà", meaning: "家", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "Quận 1", meaning: "第一郡", tail: "." },
              ],
            },
          ],
          usage_note: "越南人常說『Về nhà』，意思是回家。",
          image_file: "family.png",
        },
        {
          id: "n-09",
          term_zh: "學生",
          related_terms: [
            {
              term_target: "Học sinh",
              pronunciation: ["/hɔk˨˩ siɲ˧˧/"],
              specific_note: "指國中小學生。",
              segments: [{ text: "Học sinh", meaning: "學生", tail: "" }],
            },
            {
              term_target: "Sinh viên",
              pronunciation: ["/siɲ˧˧ viən˧˧/"],
              specific_note: "指大學生。",
              segments: [{ text: "Sinh viên", meaning: "大學生", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em là sinh viên đại học.",
              translation: "我是大學生。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "sinh viên", meaning: "大學生", tail: " " },
                { text: "đại học", meaning: "大學", tail: "." },
              ],
            },
          ],
          usage_note: "學生對老師說話時，自稱一定要用 Em。",
          image_file: "student.png",
        },
        {
          id: "n-10",
          term_zh: "文化",
          related_terms: [
            {
              term_target: "Văn hóa",
              pronunciation: ["/văn˧˧ hɔə˧˥/"],
              specific_note: "文化。",
              segments: [{ text: "Văn hóa", meaning: "文化", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Văn hóa cà phê Việt Nam rất thú vị.",
              translation: "越南的咖啡文化非常有趣。",
              segments: [
                { text: "Văn hóa", meaning: "文化", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: " " },
                { text: "Việt Nam", meaning: "越南", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "thú vị", meaning: "有趣", tail: "." },
              ],
            },
          ],
          usage_note: "在越南，『文化』一詞也常用於形容一個人的素養。",
          image_file: "culture.png",
        },
        {
          id: "n-11",
          term_zh: "問題 / 事情",
          related_terms: [
            {
              term_target: "Vấn đề",
              pronunciation: ["/vən˧˥ ɗe˨˩/"],
              specific_note: "指需要解決的問題。",
              segments: [{ text: "Vấn đề", meaning: "問題", tail: "" }],
            },
            {
              term_target: "Câu hỏi",
              pronunciation: ["/kəw˧˧ hɔj˧˩/"],
              specific_note: "指提問、疑問。",
              segments: [{ text: "Câu hỏi", meaning: "問題/提問", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Không vấn đề gì.",
              translation: "沒問題（沒什麼大事）。",
              segments: [
                { text: "Không", meaning: "不/沒", tail: " " },
                { text: "vấn đề", meaning: "問題", tail: " " },
                { text: "gì", meaning: "什麼", tail: "." },
              ],
            },
            {
              sentence: "Em có một câu hỏi.",
              translation: "我有個問題（想請教）。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "một", meaning: "一個", tail: " " },
                { text: "câu hỏi", meaning: "提問", tail: "." },
              ],
            },
          ],
          usage_note: "如果是「沒關係」，口語最常用 Không sao đâu。",
          image_file: "problem.png",
        },
        {
          id: "n-12",
          term_zh: "公司",
          related_terms: [
            {
              term_target: "Công ty",
              pronunciation: ["/kəwŋm˧˧ ti˧˧/"],
              specific_note: "公司。",
              segments: [{ text: "Công ty", meaning: "公司", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Công ty của anh ở đâu?",
              translation: "你（哥）的公司在哪裡？",
              segments: [
                { text: "Công ty", meaning: "公司", tail: " " },
                { text: "của anh", meaning: "你的(哥)", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "許多台灣公司在越南設廠，通常會簡稱為 Cty。",
          image_file: "company.png",
        },
        {
          id: "n-13",
          term_zh: "男性",
          related_terms: [
            {
              term_target: "Đàn ông",
              pronunciation: ["/ɗaːn˨˩ əwŋm˧˧/"],
              specific_note: "男人（成年男性）。",
              segments: [{ text: "Đàn ông", meaning: "男人", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Người đàn ông đó là ai?",
              translation: "那個男人是誰？",
              segments: [
                { text: "Người đàn ông", meaning: "男人", tail: " " },
                { text: "đó", meaning: "那", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
              ],
            },
          ],
          usage_note: "如果要稱呼對方（你），常用 Anh 而不是 Đàn ông。",
          image_file: "man.png",
        },
        {
          id: "n-14",
          term_zh: "女性",
          related_terms: [
            {
              term_target: "Phụ nữ",
              pronunciation: ["/fṵ˨˩ nɨ˦ˀ˥/"],
              specific_note: "女人（較正式）。",
              segments: [{ text: "Phụ nữ", meaning: "女人", tail: "" }],
            },
            {
              term_target: "Đàn bà",
              pronunciation: ["/ɗaːn˨˩ ɓaː˨˩/"],
              specific_note: "女人（口語，有時較隨意）。",
              segments: [{ text: "Đàn bà", meaning: "女人", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Phụ nữ Việt Nam rất giỏi.",
              translation: "越南女性非常優秀（能幹）。",
              segments: [
                { text: "Phụ nữ", meaning: "女性", tail: " " },
                { text: "Việt Nam", meaning: "越南", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "giỏi", meaning: "優秀/擅長", tail: "." },
              ],
            },
          ],
          usage_note:
            "3月8日是越南很重要的『Ngày Quốc tế Phụ nữ』（國際婦女節）。",
          image_file: "woman.png",
        },
        {
          id: "n-15",
          term_zh: "學校",
          related_terms: [
            {
              term_target: "Trường học",
              pronunciation: ["/cɨəŋ˨˩ hɔk˨˩/"],
              specific_note: "學校。",
              segments: [{ text: "Trường học", meaning: "學校", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi học thôi!",
              translation: "去上學吧！",
              segments: [
                { text: "Đi học", meaning: "去上學", tail: " " },
                { text: "thôi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note: "通常簡稱為 Trường 即可。",
          image_file: "school.png",
        },
        {
          id: "n-16",
          term_zh: "老師",
          related_terms: [
            {
              term_target: "Thầy giáo",
              pronunciation: ["/tʰəj˨˩ zaːw˧˥/"],
              specific_note: "男老師。",
              segments: [
                { text: "Thầy", meaning: "師/父", tail: " " },
                { text: "giáo", meaning: "教", tail: "" },
              ],
            },
            {
              term_target: "Cô giáo",
              pronunciation: ["/koː˧˧ zaːw˧˥/"],
              specific_note: "女老師。",
              segments: [
                { text: "Cô", meaning: "姑/阿姨", tail: " " },
                { text: "giáo", meaning: "教", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em chào cô ạ!",
              translation: "老師好！（學生對女老師的標準問候）",
              segments: [
                { text: "Em", meaning: "我(學生)", tail: " " },
                { text: "chào", meaning: "問候", tail: " " },
                { text: "cô", meaning: "老師(女)", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "!" },
              ],
            },
          ],
          usage_note: "在越南，老師地位很高，打招呼一定要加 ạ 表示尊敬。",
          image_file: "teacher.png",
        },
        {
          id: "n-17",
          term_zh: "影片 / 電影",
          related_terms: [
            {
              term_target: "Phim",
              pronunciation: ["/fim˧˧/"],
              specific_note: "電影、影片（源自法語 Film）。",
              segments: [{ text: "Phim", meaning: "電影", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hôm nay xem phim gì?",
              translation: "今天看什麼電影？",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "phim", meaning: "電影", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "追劇在越南語叫 Cày phim。",
          image_file: "movie.png",
        },
        {
          id: "n-18",
          term_zh: "手機 / 電話",
          related_terms: [
            {
              term_target: "Điện thoại",
              pronunciation: ["/ɗiən˨˩ tʰɔəj˨˩/"],
              specific_note: "電話、手機。",
              segments: [{ text: "Điện thoại", meaning: "電話", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Số điện thoại của bạn là gì?",
              translation: "你的電話號碼是多少？",
              segments: [
                { text: "Số điện thoại", meaning: "電話號碼", tail: " " },
                { text: "của bạn", meaning: "你的", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
            {
              sentence: "Điện thoại em hết pin rồi.",
              translation: "我手機沒電了。",
              segments: [
                { text: "Điện thoại", meaning: "電話", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "hết pin", meaning: "沒電/盡電池", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "智慧型手機叫 Điện thoại thông minh。",
          image_file: "phone.png",
        },
        {
          id: "n-19",
          term_zh: "電腦",
          related_terms: [
            {
              term_target: "Máy tính",
              pronunciation: ["/maːj˧˥ tiɲ˧˥/"],
              specific_note: "電腦（含筆電、桌機）。",
              segments: [
                { text: "Máy", meaning: "機器", tail: " " },
                { text: "tính", meaning: "計算", tail: "" },
              ],
            },
            {
              term_target: "Laptop",
              pronunciation: ["/lap top/"],
              specific_note: "筆記型電腦（直接用英文音）。",
              segments: [{ text: "Laptop", meaning: "筆電", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Máy tính bị hỏng rồi.",
              translation: "電腦壞掉了。",
              segments: [
                { text: "Máy tính", meaning: "電腦", tail: " " },
                { text: "bị hỏng", meaning: "被壞/壞了", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note:
            "計算機也是叫 Máy tính，有時為了區分會說 Máy tính bỏ túi（口袋電腦）。",
          image_file: "computer.png",
        },
        {
          id: "n-20",
          term_zh: "車",
          related_terms: [
            {
              term_target: "Xe máy",
              pronunciation: ["/sɛ˧˧ maːj˧˥/"],
              specific_note: "機車（越南最主要的交通工具）。",
              segments: [{ text: "Xe máy", meaning: "機車", tail: "" }],
            },
            {
              term_target: "Xe ô tô",
              pronunciation: ["/sɛ˧˧ oː˧˧ toː˧˧/"],
              specific_note: "汽車。",
              segments: [{ text: "Xe ô tô", meaning: "汽車", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi xe máy cho nhanh.",
              translation: "騎機車比較快。",
              segments: [
                { text: "Đi", meaning: "走/騎", tail: " " },
                { text: "xe máy", meaning: "機車", tail: " " },
                { text: "cho", meaning: "給/為了", tail: " " },
                { text: "nhanh", meaning: "快", tail: "." },
              ],
            },
            {
              sentence: "Em đang lái xe.",
              translation: "我正在開車/騎車。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "lái xe", meaning: "開車/駕駛", tail: "." },
              ],
            },
          ],
          usage_note: "在越南，『Xe』通常預設指的是機車。",
          image_file: "car.png",
        },
        {
          id: "n-21",
          term_zh: "市場",
          related_terms: [
            {
              term_target: "Chợ",
              pronunciation: ["/cəː˧˨/"],
              specific_note: "傳統市集、市場。",
              segments: [{ text: "Chợ", meaning: "市場", tail: "" }],
            },
            {
              term_target: "Siêu thị",
              pronunciation: ["/siəw˧˧ tʰi˨˩/"],
              specific_note: "超市。",
              segments: [{ text: "Siêu thị", meaning: "超市", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi chợ mua đồ ăn.",
              translation: "去市場買菜（買食物）。",
              segments: [
                { text: "Đi chợ", meaning: "去市場", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "đồ ăn", meaning: "食物", tail: "." },
              ],
            },
            {
              sentence: "Chợ đêm Bến Thành rất vui.",
              translation: "檳城市場的夜市很好玩。",
              segments: [
                { text: "Chợ đêm", meaning: "夜市", tail: " " },
                { text: "Bến Thành", meaning: "檳城(地名)", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "vui", meaning: "好玩/開心", tail: "." },
              ],
            },
          ],
          usage_note: "『Đi chợ』在越南語中也泛指去採買下廚用的食材。",
          image_file: "market.png",
        },
        {
          id: "n-22",
          term_zh: "衣服",
          related_terms: [
            {
              term_target: "Quần áo",
              pronunciation: ["/kwən˨˩ aːw˧˥/"],
              specific_note: "衣服（褲子與上衣的總稱）。",
              segments: [
                { text: "Quần", meaning: "褲子", tail: " " },
                { text: "áo", meaning: "衣服", tail: "" },
              ],
            },
            {
              term_target: "Áo dài",
              pronunciation: ["/aːw˧˥ zaːj˨˩/"],
              specific_note: "越南長襖（國服）。",
              segments: [{ text: "Áo dài", meaning: "長衫/國服", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mặc quần áo mới đi chơi.",
              translation: "穿新衣服出去玩。",
              segments: [
                { text: "Mặc", meaning: "穿", tail: " " },
                { text: "quần áo", meaning: "衣服", tail: " " },
                { text: "mới", meaning: "新", tail: " " },
                { text: "đi chơi", meaning: "去玩", tail: "." },
              ],
            },
            {
              sentence: "Giặt quần áo giúp em.",
              translation: "幫我洗衣服。",
              segments: [
                { text: "Giặt", meaning: "洗(衣物)", tail: " " },
                { text: "quần áo", meaning: "衣服", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "em", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "單說 Áo 通常指上衣，Quần 指褲子。",
          image_file: "clothes.png",
        },
        {
          id: "n-23",
          term_zh: "商店 / 店",
          related_terms: [
            {
              term_target: "Quán",
              pronunciation: ["/kwaːn˧˥/"],
              specific_note: "小店、攤販、食店。",
              segments: [{ text: "Quán", meaning: "店", tail: "" }],
            },
            {
              term_target: "Cửa hàng",
              pronunciation: ["/kɨə˧˩ haːŋ˨˩/"],
              specific_note: "較正式的商店、店鋪。",
              segments: [
                { text: "Cửa", meaning: "門", tail: " " },
                { text: "hàng", meaning: "貨/行", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Quán cà phê này đẹp quá.",
              translation: "這家咖啡店好漂亮。",
              segments: [
                { text: "Quán cà phê", meaning: "咖啡店", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "đẹp", meaning: "美", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Cửa hàng đóng cửa rồi.",
              translation: "商店已經關門了。",
              segments: [
                { text: "Cửa hàng", meaning: "商店", tail: " " },
                { text: "đóng cửa", meaning: "關門", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "路邊的小吃店或咖啡廳多用 Quán，專賣店多用 Cửa hàng。",
          image_file: "shop.png",
        },
        {
          id: "n-24",
          term_zh: "巴士 / 公車",
          related_terms: [
            {
              term_target: "Xe buýt",
              pronunciation: ["/sɛ˧˧ ɓwit˧˥/"],
              specific_note: "公車（源自英語 Bus）。",
              segments: [
                { text: "Xe", meaning: "車", tail: " " },
                { text: "buýt", meaning: "巴士", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi làm bằng xe buýt.",
              translation: "搭公車去上班。",
              segments: [
                { text: "Đi làm", meaning: "去上班", tail: " " },
                { text: "bằng", meaning: "搭乘/藉由", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: "." },
              ],
            },
            {
              sentence: "Trạm xe buýt ở đâu?",
              translation: "公車站點在哪裡？",
              segments: [
                { text: "Trạm", meaning: "站點", tail: " " },
                { text: "xe buýt", meaning: "公車", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "越南的大城市（河內、胡志明市）公車系統非常發達。",
          image_file: "bus.png",
        },
        {
          id: "n-25",
          term_zh: "街道 / 路",
          related_terms: [
            {
              term_target: "Đường",
              pronunciation: ["/ɗɨəŋ˨˩/"],
              specific_note: "馬路、道路、街道。",
              segments: [{ text: "Đường", meaning: "路", tail: "" }],
            },
            {
              term_target: "Phố",
              pronunciation: ["/fo˧˥/"],
              specific_note: "街道、市區街弄。",
              segments: [{ text: "Phố", meaning: "街", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sang đường cẩn thận.",
              translation: "過馬路要小心。",
              segments: [
                { text: "Sang đường", meaning: "橫穿馬路", tail: " " },
                { text: "cẩn thận", meaning: "小心", tail: "." },
              ],
            },
            {
              sentence: "Phố đi bộ rất đông người.",
              translation: "步行街（廣場）人非常多。",
              segments: [
                { text: "Phố đi bộ", meaning: "步行街", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "đông người", meaning: "擠滿人/多人", tail: "." },
              ],
            },
          ],
          usage_note: "在越南城市中，大路叫 Đường，老街區常叫 Phố。",
          image_file: "street.png",
        },
        {
          id: "n-26",
          term_zh: "房子 / 家",
          related_terms: [
            {
              term_target: "Nhà",
              pronunciation: ["/ɲaː˨˩/"],
              specific_note: "家、房屋。",
              segments: [{ text: "Nhà", meaning: "家", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em về nhà đây.",
              translation: "我回家囉。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "về nhà", meaning: "回家", tail: " " },
                { text: "đây", meaning: "這喔/現在", tail: "." },
              ],
            },
            {
              sentence: "Nhà anh ở đâu?",
              translation: "你（哥）家住在哪？",
              segments: [
                { text: "Nhà anh", meaning: "你家", tail: " " },
                { text: "ở đâu", meaning: "在哪", tail: "?" },
              ],
            },
          ],
          usage_note: "Nhà 同時指實體的建築物和心理上的「家」。",
          image_file: "house.png",
        },
        {
          id: "n-27",
          term_zh: "母親",
          related_terms: [
            {
              term_target: "Mẹ",
              pronunciation: ["/mɛ˧˨/"],
              specific_note: "媽媽（北越、公用語）。",
              segments: [{ text: "Mẹ", meaning: "媽媽", tail: "" }],
            },
            {
              term_target: "Má",
              pronunciation: ["/maː˧˥/"],
              specific_note: "媽媽（南越常用）。",
              segments: [{ text: "Má", meaning: "阿母/媽", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mẹ ơi, con đói!",
              translation: "媽！我餓了！",
              segments: [
                { text: "Mẹ ơi", meaning: "媽媽呀", tail: ", " },
                { text: "con", meaning: "孩子(我)", tail: " " },
                { text: "đói", meaning: "餓", tail: "!" },
              ],
            },
            {
              sentence: "Con yêu mẹ lắm.",
              translation: "我很愛媽媽。",
              segments: [
                { text: "Con", meaning: "孩子(我)", tail: " " },
                { text: "yêu", meaning: "愛", tail: " " },
                { text: "mẹ", meaning: "媽媽", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
          ],
          usage_note: "稱呼自己媽媽時，語氣要撒嬌一點加個『ơi』。",
          image_file: "mother.png",
        },
        {
          id: "n-28",
          term_zh: "父親",
          related_terms: [
            {
              term_target: "Bố",
              pronunciation: ["/ɓo˧˥/"],
              specific_note: "爸爸（北越常用）。",
              segments: [{ text: "Bố", meaning: "爸爸", tail: "" }],
            },
            {
              term_target: "Ba",
              pronunciation: ["/ɓaː˧˧/"],
              specific_note: "爸爸（南越常用）。",
              segments: [{ text: "Ba", meaning: "老爸", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bố em đi làm rồi.",
              translation: "我爸爸去上班了。",
              segments: [
                { text: "Bố em", meaning: "我爸爸", tail: " " },
                { text: "đi làm", meaning: "去上班", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "北越習慣喊 Bố，南越則大都喊 Ba。",
          image_file: "father.png",
        },
        {
          id: "n-29",
          term_zh: "兄弟",
          related_terms: [
            {
              term_target: "Anh trai",
              pronunciation: ["/aːɲ˧˧ caːj˧˧/"],
              specific_note: "親哥哥。",
              segments: [
                { text: "Anh", meaning: "兄", tail: " " },
                { text: "trai", meaning: "男", tail: "" },
              ],
            },
            {
              term_target: "Em trai",
              pronunciation: ["/ɛm˧˧ caːj˧˧/"],
              specific_note: "親弟弟。",
              segments: [
                { text: "Em", meaning: "弟/妹", tail: " " },
                { text: "trai", meaning: "男", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh trai em rất hiền.",
              translation: "我哥哥人很溫柔。",
              segments: [
                { text: "Anh trai", meaning: "親哥哥", tail: " " },
                { text: "em", meaning: "我的", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "hiền", meaning: "溫柔/和藹", tail: "." },
              ],
            },
          ],
          usage_note: "越南語會嚴格區分年齡。比自己大叫 Anh，比自己小叫 Em。",
          image_file: "brother.png",
        },
        {
          id: "n-30",
          term_zh: "姐妹",
          related_terms: [
            {
              term_target: "Chị gái",
              pronunciation: ["/cḭʔ˨˩ ɣaːj˧˥/"],
              specific_note: "親姊姊。",
              segments: [
                { text: "Chị", meaning: "姊", tail: " " },
                { text: "gái", meaning: "女", tail: "" },
              ],
            },
            {
              term_target: "Em gái",
              pronunciation: ["/ɛm˧˧ ɣaːj˧˥/"],
              specific_note: "親妹妹。",
              segments: [
                { text: "Em", meaning: "弟/妹", tail: " " },
                { text: "gái", meaning: "女", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em gái chị bao nhiêu tuổi?",
              translation: "妳妹妹幾歲了？",
              segments: [
                { text: "Em gái", meaning: "親妹妹", tail: " " },
                { text: "chị", meaning: "妳(姊)", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "?" },
              ],
            },
          ],
          usage_note: "同樣，姊姊叫 Chị，妹妹叫 Em。",
          image_file: "sister.png",
        },
        {
          id: "n-31",
          term_zh: "中文",
          related_terms: [
            {
              term_target: "Tiếng Trung",
              pronunciation: ["/tiəŋ˧˥ cuŋ˧˧/"],
              specific_note: "中文、漢語（最通用）。",
              segments: [
                { text: "Tiếng", meaning: "語言", tail: " " },
                { text: "Trung", meaning: "中", tail: "" },
              ],
            },
            {
              term_target: "Tiếng Hoa",
              pronunciation: ["/tiəŋ˧˥ hɔə˧˧/"],
              specific_note: "華語（南方華人社區常用）。",
              segments: [
                { text: "Tiếng", meaning: "語言", tail: " " },
                { text: "Hoa", meaning: "華", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh nói tiếng Trung giỏi quá!",
              translation: "你（哥）中文說得真好！",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "tiếng Trung", meaning: "中文", tail: " " },
                { text: "giỏi", meaning: "擅長/好", tail: " " },
                { text: "quá", meaning: "太/真", tail: "!" },
              ],
            },
          ],
          usage_note:
            "在越南，『Tiếng Trung』專指語言，『Người Trung Quốc』是指中國人。",
          image_file: "chinese.png",
        },
        {
          id: "n-32",
          term_zh: "早晨 / 早上",
          related_terms: [
            {
              term_target: "Buổi sáng",
              pronunciation: ["/ɓuəj˧˩ saːŋ˧˥/"],
              specific_note: "早晨（約 5:00 - 10:00）。",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "sáng", meaning: "明亮/早", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Sáng nay anh ăn gì?",
              translation: "今天早上你吃什麼？",
              segments: [
                { text: "Sáng nay", meaning: "今天早上", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "口語常簡稱為 Sáng。早餐叫 Ăn sáng。",
          image_file: "morning.png",
        },
        {
          id: "n-33",
          term_zh: "夜晚",
          related_terms: [
            {
              term_target: "Buổi tối",
              pronunciation: ["/ɓuəj˧˩ tôj˧˥/"],
              specific_note: "晚上（約 18:00 - 22:00）。",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "tối", meaning: "黑/晚", tail: "" },
              ],
            },
            {
              term_target: "Ban đêm",
              pronunciation: ["/ɓaːn˧˧ ɗem˧˧/"],
              specific_note: "深夜（半夜）。",
              segments: [
                { text: "Ban", meaning: "時段標記", tail: " " },
                { text: "đêm", meaning: "夜", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chúc em ngủ ngon.",
              translation: "祝妳晚安（睡好）。",
              segments: [
                { text: "Chúc", meaning: "祝", tail: " " },
                { text: "em", meaning: "妳", tail: " " },
                { text: "ngủ ngon", meaning: "睡好/晚安", tail: "." },
              ],
            },
          ],
          usage_note:
            "晚上見面打招呼說『Chào buổi tối』，睡覺前說『Ngủ ngon』。",
          image_file: "night.png",
        },
        {
          id: "n-34",
          term_zh: "票 / 車票",
          related_terms: [
            {
              term_target: "Vé",
              pronunciation: ["/vɛ˧˥/"],
              specific_note: "各種票券。",
              segments: [{ text: "Vé", meaning: "票", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mua vé ở đâu ạ?",
              translation: "請問票在哪裡買？",
              segments: [
                { text: "Mua vé", meaning: "買票", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
              ],
            },
            {
              sentence: "Cho em hai vé xem phim.",
              translation: "給我兩張電影票。",
              segments: [
                { text: "Cho em", meaning: "給我", tail: " " },
                { text: "hai", meaning: "二", tail: " " },
                { text: "vé xem phim", meaning: "電影票", tail: "." },
              ],
            },
          ],
          usage_note: "票的量詞是 Tấm (張)，一張票叫 Một tấm vé。",
          image_file: "ticket.png",
        },
        {
          id: "n-35",
          term_zh: "包包",
          related_terms: [
            {
              term_target: "Túi xách",
              pronunciation: ["/tuj˧˥ sak˧˥/"],
              specific_note: "手提包、側背包。",
              segments: [
                { text: "Túi", meaning: "袋子", tail: " " },
                { text: "xách", meaning: "提/拎", tail: "" },
              ],
            },
            {
              term_target: "Cặp",
              pronunciation: ["/kap˨˩/"],
              specific_note: "書包、公事包。",
              segments: [{ text: "Cặp", meaning: "包/夾", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Túi xách này đẹp quá!",
              translation: "這個包包好漂亮喔！",
              segments: [
                { text: "Túi xách", meaning: "包包", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "đẹp", meaning: "美", tail: " " },
                { text: "quá", meaning: "太", tail: "!" },
              ],
            },
          ],
          usage_note: "在越南買伴手禮常會用到這個字。",
          image_file: "bag.png",
        },
        {
          id: "n-36",
          term_zh: "杯子",
          related_terms: [
            {
              term_target: "Ly",
              pronunciation: ["/li˧˧/"],
              specific_note: "杯子（南越通用語，指各種杯子）。",
              segments: [{ text: "Ly", meaning: "杯子", tail: "" }],
            },
            {
              term_target: "Cái cốc",
              pronunciation: ["/kaːj˧˥ kəwk˧˥/"],
              specific_note: "杯子（北越常用）。",
              segments: [{ text: "Cái cốc", meaning: "杯子", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho em một ly cà phê sữa đá.",
              translation: "給我一杯冰牛奶咖啡。",
              segments: [
                { text: "Cho em", meaning: "給我", tail: " " },
                { text: "một ly", meaning: "一杯", tail: " " },
                { text: "cà phê sữa đá", meaning: "冰奶咖", tail: "." },
              ],
            },
          ],
          usage_note: "在胡志明市點飲料，單位請用 Ly。",
          image_file: "cup.png",
        },
        {
          id: "n-37",
          term_zh: "醫生",
          related_terms: [
            {
              term_target: "Bác sĩ",
              pronunciation: ["/ɓaːk˧˥ si˦ˀ˥/"],
              specific_note: "醫師、大夫。",
              segments: [
                { text: "Bác", meaning: "伯父", tail: " " },
                { text: "sĩ", meaning: "士", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi khám bác sĩ.",
              translation: "去看醫生（檢查）。",
              segments: [
                { text: "Đi khám", meaning: "去檢查", tail: " " },
                { text: "bác sĩ", meaning: "醫生", tail: "." },
              ],
            },
          ],
          usage_note: "跟醫生說話可以直接稱呼為 Bác sĩ。",
          image_file: "doctor.png",
        },
        {
          id: "n-38",
          term_zh: "警察",
          related_terms: [
            {
              term_target: "Công an",
              pronunciation: ["/kəwŋm˧˧ aːn˧˧/"],
              specific_note: "公安、警察（越南常用稱呼）。",
              segments: [{ text: "Công an", meaning: "公安", tail: "" }],
            },
            {
              term_target: "Cảnh sát",
              pronunciation: ["/kaɲ˧˩ sat˧˥/"],
              specific_note: "警察（指具體兵種，如交警）。",
              segments: [{ text: "Cảnh sát", meaning: "警察", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cảnh sát giao thông.",
              translation: "交通警察（路邊最常見）。",
              segments: [
                { text: "Cảnh sát", meaning: "警察", tail: " " },
                { text: "giao thông", meaning: "交通", tail: "." },
              ],
            },
            {
              sentence: "Gọi công an đi!",
              translation: "快叫警察（公安）！",
              segments: [
                { text: "Gọi", meaning: "叫/打電話", tail: " " },
                { text: "공안", meaning: "公安", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note:
            "越南路邊維持交通的制服人員大都稱為 Cảnh sát giao thông。",
          image_file: "police.png",
        },
        {
          id: "n-39",
          term_zh: "醫院",
          related_terms: [
            {
              term_target: "Bệnh viện",
              pronunciation: ["/ɓə̰jɲ˨˩ viən˨˩/"],
              specific_note: "醫院。",
              segments: [
                { text: "Bệnh", meaning: "病", tail: " " },
                { text: "viện", meaning: "院", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bệnh viện ở gần đây không?",
              translation: "這附近有醫院嗎？",
              segments: [
                { text: "Bệnh viện", meaning: "醫院", tail: " " },
                { text: "ở gần đây", meaning: "在附近", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "醫院的縮寫常看到 BV。",
          image_file: "hospital.png",
        },
        {
          id: "n-40",
          term_zh: "座位 / 地方",
          related_terms: [
            {
              term_target: "Chỗ ngồi",
              pronunciation: ["/co˦ˀ˥ ŋoːj˨˩/"],
              specific_note: "座位、坐的地方。",
              segments: [
                { text: "Chỗ", meaning: "地方", tail: " " },
                { text: "ngồi", meaning: "坐", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ở đây còn chỗ không?",
              translation: "這裡還有位子嗎？",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "còn", meaning: "剩/還", tail: " " },
                { text: "chỗ", meaning: "位子", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Mời ngồi chỗ này.",
              translation: "請坐這裡。",
              segments: [
                { text: "Mời", meaning: "請", tail: " " },
                { text: "ngồi", meaning: "坐", tail: " " },
                { text: "chỗ này", meaning: "這地方/這位子", tail: "." },
              ],
            },
          ],
          usage_note: "在擁擠的小店併桌，開口問『Còn chỗ không?』很有用。",
          image_file: "seat.png",
        },
        {
          id: "n-41",
          term_zh: "門",
          related_terms: [
            {
              term_target: "Cửa",
              pronunciation: ["/kɨə˧˩/"],
              specific_note: "泛指所有的門。",
              segments: [{ text: "Cửa", meaning: "門", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đóng cửa giúp em.",
              translation: "幫我關個門。",
              segments: [
                { text: "Đóng cửa", meaning: "關門", tail: " " },
                { text: "giúp", meaning: "幫助", tail: " " },
                { text: "em", meaning: "我(弟妹)", tail: "." },
              ],
            },
            {
              sentence: "Có người gõ cửa.",
              translation: "有人在敲門。",
              segments: [
                { text: "Có người", meaning: "有人", tail: " " },
                { text: "gõ cửa", meaning: "敲門", tail: "." },
              ],
            },
          ],
          usage_note: "『開門』是 Mở cửa，『關門』是 Đóng cửa。",
          image_file: "door.png",
        },
        {
          id: "n-42",
          term_zh: "房間",
          related_terms: [
            {
              term_target: "Phòng",
              pronunciation: ["/fɔŋ˨˩/"],
              specific_note: "房間（漢越音：房）。",
              segments: [{ text: "Phòng", meaning: "房間", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Phòng của em ở đâu?",
              translation: "我的房間在哪裡？",
              segments: [
                { text: "Phòng", meaning: "房間", tail: " " },
                { text: "của em", meaning: "我的", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Dọn phòng giúp chị nhé.",
              translation: "（對房務員說）請幫我打掃一下房間喔。",
              segments: [
                { text: "Dọn phòng", meaning: "打掃房間", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "chị", meaning: "姊姊(我)", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "飯店的單人房叫 Phòng đơn，雙人房叫 Phòng đôi。",
          image_file: "room.png",
        },
        {
          id: "n-43",
          term_zh: "車站",
          related_terms: [
            {
              term_target: "Bến xe",
              pronunciation: ["/ɓen˧˥ sɛ˧˧/"],
              specific_note: "指巴士站、客運站。",
              segments: [
                { text: "Bến", meaning: "泊/站", tail: " " },
                { text: "xe", meaning: "車", tail: "" },
              ],
            },
            {
              term_target: "Ga",
              pronunciation: ["/zaː˧˧/"],
              specific_note: "指火車站、捷運站。",
              segments: [{ text: "Ga", meaning: "火車站", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bến xe miền Tây ở đâu?",
              translation: "（胡志明市）西部客運站在哪？",
              segments: [
                { text: "Bến xe", meaning: "客運站", tail: " " },
                { text: "miền Tây", meaning: "西部/西區", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "如果是路邊的公車候車亭，要說 Trạm xe buýt。",
          image_file: "station.png",
        },
        {
          id: "n-44",
          term_zh: "地鐵 / 捷運",
          related_terms: [
            {
              term_target: "Tàu điện",
              pronunciation: ["/taːw˨˩ ɗiən˨˩/"],
              specific_note: "電車、捷運（漢越音：火車 電）。",
              segments: [
                { text: "Tàu", meaning: "船/火車", tail: " " },
                { text: "điện", meaning: "電", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi tàu điện cho nhanh.",
              translation: "搭捷運比較快。",
              segments: [
                { text: "Đi", meaning: "搭乘/去", tail: " " },
                { text: "tàu điện", meaning: "捷運", tail: " " },
                { text: "cho", meaning: "給/為了", tail: " " },
                { text: "nhanh", meaning: "快", tail: "." },
              ],
            },
          ],
          usage_note:
            "河內已有捷運（Tàu điện cát linh），胡志明市則還在建設中。",
          image_file: "subway.png",
        },
        {
          id: "n-45",
          term_zh: "火車",
          related_terms: [
            {
              term_target: "Tàu hỏa",
              pronunciation: ["/taːw˨˩ hɔə˧˩/"],
              specific_note: "火車（漢越音：火車 火）。",
              segments: [
                { text: "Tàu", meaning: "車/船", tail: " " },
                { text: "hỏa", meaning: "火", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tàu hỏa sắp chạy rồi.",
              translation: "火車快要開了。",
              segments: [
                { text: "Tàu hỏa", meaning: "火車", tail: " " },
                { text: "sắp", meaning: "即將", tail: " " },
                { text: "chạy", meaning: "跑/行駛", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "搭火車可以體驗從河內到胡志明市的統一鐵路。",
          image_file: "train.png",
        },
        {
          id: "n-46",
          term_zh: "機場",
          related_terms: [
            {
              term_target: "Sân bay",
              pronunciation: ["/sən˧˧ ɓaːj˧˧/"],
              specific_note: "機場（ bay 意為飛）。",
              segments: [
                { text: "Sân", meaning: "場/院子", tail: " " },
                { text: "bay", meaning: "飛", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho em ra sân bay Tân Sơn Nhất.",
              translation: "（對司機說）請載我去新山一機場。",
              segments: [
                { text: "Cho em ra", meaning: "帶我去(出)", tail: " " },
                { text: "sân bay", meaning: "機場", tail: " " },
                { text: "Tân Sơn Nhất", meaning: "新山一(機場名)", tail: "." },
              ],
            },
          ],
          usage_note: "胡志明市機場叫 Tân Sơn Nhất，河內機場叫 Nội Bài。",
          image_file: "airport.png",
        },
        {
          id: "n-47",
          term_zh: "行李",
          related_terms: [
            {
              term_target: "Hành lý",
              pronunciation: ["/ha̰ːɲ˨˩ li˧˥/"],
              specific_note: "行李（漢越音：行李）。",
              segments: [
                { text: "Hành", meaning: "行", tail: "" },
                { text: "lý", meaning: "李", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hành lý của em nặng quá.",
              translation: "我的行李太重了。",
              segments: [
                { text: "Hành lý", meaning: "行李", tail: " " },
                { text: "của em", meaning: "我的", tail: " " },
                { text: "nặng", meaning: "重", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
          ],
          usage_note: "隨身行李叫 Hành lý xách tay。",
          image_file: "luggage.png",
        },
        {
          id: "n-48",
          term_zh: "地圖",
          related_terms: [
            {
              term_target: "Bản đồ",
              pronunciation: ["/ɓaːn˧˩ ɗo˨˩/"],
              specific_note: "地圖（漢越音：版圖）。",
              segments: [
                { text: "Bản", meaning: "版", tail: " " },
                { text: "đồ", meaning: "圖", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Để em xem bản đồ.",
              translation: "讓我看一下地圖。",
              segments: [
                { text: "Để em", meaning: "讓我", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "bản đồ", meaning: "地圖", tail: "." },
              ],
            },
          ],
          usage_note: "在越南通常直接說『Google Maps』大家也聽得懂。",
          image_file: "map.png",
        },
        {
          id: "n-49",
          term_zh: "櫃檯 / 服務台",
          related_terms: [
            {
              term_target: "Quầy",
              pronunciation: ["/kwej˨˩/"],
              specific_note: "櫃檯。",
              segments: [{ text: "Quầy", meaning: "櫃檯", tail: "" }],
            },
            {
              term_target: "Quầy lễ tân",
              pronunciation: ["/kwej˨˩ le˦ˀ˥ tən˧˧/"],
              specific_note: "飯店前台、接待處。",
              segments: [
                { text: "Quầy", meaning: "櫃檯", tail: " " },
                { text: "lễ tân", meaning: "禮賓/接待", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Gửi hành lý ở quầy lễ tân.",
              translation: "把行李寄放在前台。",
              segments: [
                { text: "Gửi", meaning: "寄放", tail: " " },
                { text: "hành lý", meaning: "行李", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "quầy lễ tân", meaning: "前台", tail: "." },
              ],
            },
          ],
          usage_note: "結帳櫃檯也可以叫 Quầy thu ngân。",
          image_file: "counter.png",
        },
        {
          id: "n-50",
          term_zh: "大廳 / 門廳",
          related_terms: [
            {
              term_target: "Sảnh",
              pronunciation: ["/saɲ˧˩/"],
              specific_note: "大廳。",
              segments: [{ text: "Sảnh", meaning: "廳", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Gặp nhau ở sảnh khách sạn nhé.",
              translation: "我們在飯店大廳見面喔。",
              segments: [
                { text: "Gặp nhau", meaning: "互相見面", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "sảnh", meaning: "大廳", tail: " " },
                { text: "khách sạn", meaning: "飯店", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "機場候機廳叫 Sảnh chờ。",
          image_file: "lobby.png",
        },
        {
          id: "n-51",
          term_zh: "預約 / 訂位",
          related_terms: [
            {
              term_target: "Đặt trước",
              pronunciation: ["/ɗat˨˩ cɨək˧˥/"],
              specific_note: "事先預約、預訂。",
              segments: [
                { text: "Đặt", meaning: "訂", tail: " " },
                { text: "trước", meaning: "先", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em có đặt trước rồi.",
              translation: "我已經預約過了。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "có", meaning: "有/是", tail: " " },
                { text: "đặt trước", meaning: "預約", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "『預約醫生』常用 Đặt lịch khám。",
          image_file: "reservation.png",
        },
        {
          id: "n-52",
          term_zh: "入住",
          related_terms: [
            {
              term_target: "Nhận phòng",
              pronunciation: ["/ɲən˨˩ fɔŋ˨˩/"],
              specific_note: "飯店入住（直譯：領房間）。",
              segments: [
                { text: "Nhận", meaning: "領取/接收", tail: " " },
                { text: "phòng", meaning: "房間", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mấy giờ được nhận phòng ạ?",
              translation: "請問幾點可以入住？",
              segments: [
                { text: "Mấy giờ", meaning: "幾點", tail: " " },
                { text: "được", meaning: "得以/可以", tail: " " },
                { text: "nhận phòng", meaning: "入住", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
              ],
            },
          ],
          usage_note: "越南飯店入住時間通常是 14:00。",
          image_file: "check_in.png",
        },
        {
          id: "n-53",
          term_zh: "退房",
          related_terms: [
            {
              term_target: "Trả phòng",
              pronunciation: ["/caː˧˩ fɔŋ˨˩/"],
              specific_note: "飯店退房（直譯：還房間）。",
              segments: [
                { text: "Trả", meaning: "還/付", tail: " " },
                { text: "phòng", meaning: "房間", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em muốn trả phòng.",
              translation: "我要退房。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想要", tail: " " },
                { text: "trả phòng", meaning: "退房", tail: "." },
              ],
            },
          ],
          usage_note: "越南飯店退房時間通常是 12:00。",
          image_file: "check_out.png",
        },
        {
          id: "n-54",
          term_zh: "飲料",
          related_terms: [
            {
              term_target: "Đồ uống",
              pronunciation: ["/ɗo˨˩ uəŋ˧˥/"],
              specific_note: "飲料、東西喝（北越常用）。",
              segments: [
                { text: "Đồ", meaning: "東西", tail: " " },
                { text: "uống", meaning: "喝", tail: "" },
              ],
            },
            {
              term_target: "Thức uống",
              pronunciation: ["/tʰɨk˧˥ uəŋ˧˥/"],
              specific_note: "飲品（南越常用）。",
              segments: [{ text: "Thức uống", meaning: "飲料", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh muốn dùng đồ uống gì?",
              translation: "（服務員問）哥，您想要用什麼飲料？",
              segments: [
                { text: "Anh", meaning: "哥哥(您)", tail: " " },
                { text: "muốn dùng", meaning: "想要用", tail: " " },
                { text: "đồ uống", meaning: "飲料", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "水也叫 Nước，口語中常用 Nước 代替所有飲料。",
          image_file: "drink.png",
        },
        {
          id: "n-55",
          term_zh: "菜單",
          related_terms: [
            {
              term_target: "Menu",
              pronunciation: ["/mɛ˧˧ nu˧˧/"],
              specific_note: "直接用英文外來語（極通用）。",
              segments: [{ text: "Menu", meaning: "菜單", tail: "" }],
            },
            {
              term_target: "Thực đơn",
              pronunciation: ["/tʰɨk˨˩ ɗən˧˧/"],
              specific_note: "菜單（漢越音：食單）。",
              segments: [
                { text: "Thực", meaning: "食", tail: " " },
                { text: "đơn", meaning: "單", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho em xin cái menu.",
              translation: "請給我看一下菜單。",
              segments: [
                { text: "Cho em xin", meaning: "請給我", tail: " " },
                { text: "cái menu", meaning: "這菜單", tail: "." },
              ],
            },
          ],
          usage_note: "在餐廳直接說『Menu』老闆都聽得懂。",
          image_file: "menu.png",
        },
        {
          id: "n-56",
          term_zh: "午餐",
          related_terms: [
            {
              term_target: "Cơm trưa",
              pronunciation: ["/kəm˧˧ cɨə˧˧/"],
              specific_note: "午餐（直譯：午飯）。",
              segments: [
                { text: "Cơm", meaning: "飯", tail: " " },
                { text: "trưa", meaning: "中午", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi ăn cơm trưa đi!",
              translation: "去吃午餐吧！",
              segments: [
                { text: "Đi ăn", meaning: "去吃", tail: " " },
                { text: "cơm trưa", meaning: "午餐", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note: "越南上班族午休時間通常會吃 Cơm tấm（碎米飯）。",
          image_file: "lunch.png",
        },
        {
          id: "n-57",
          term_zh: "晚餐",
          related_terms: [
            {
              term_target: "Cơm tối",
              pronunciation: ["/kəm˧˧ tôj˧˥/"],
              specific_note: "晚餐（直譯：晚飯）。",
              segments: [
                { text: "Cơm", meaning: "飯", tail: " " },
                { text: "tối", meaning: "晚上", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cơm tối xong rồi.",
              translation: "晚餐準備好了。",
              segments: [
                { text: "Cơm tối", meaning: "晚餐", tail: " " },
                { text: "xong rồi", meaning: "完成了/好了", tail: "." },
              ],
            },
          ],
          usage_note: "晚餐後喝杯 Nước mía（甘蔗汁）是當地日常。",
          image_file: "dinner.png",
        },
        {
          id: "n-58",
          term_zh: "帳單 / 結帳",
          related_terms: [
            {
              term_target: "Hóa đơn",
              pronunciation: ["/hɔə˧˥ ɗən˧˧/"],
              specific_note: "實體帳單、發票。",
              segments: [{ text: "Hóa đơn", meaning: "帳單", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho em xem hóa đơn.",
              translation: "給我看一下帳單。",
              segments: [
                { text: "Cho em xem", meaning: "給我看", tail: " " },
                { text: "hóa đơn", meaning: "帳單", tail: "." },
              ],
            },
            {
              sentence: "Anh ơi, tính tiền!",
              translation: "哥，結帳！（最道地的喊法）",
              segments: [
                { text: "Anh ơi", meaning: "呼喚帥哥", tail: ", " },
                { text: "tính tiền", meaning: "結帳/算錢", tail: "!" },
              ],
            },
          ],
          usage_note: "在餐廳結帳，直接喊『Tính tiền』比問『帳單在哪』更常用。",
          image_file: "bill.png",
        },
        {
          id: "n-59",
          term_zh: "價格",
          related_terms: [
            {
              term_target: "Giá",
              pronunciation: ["/zaː˧˥/"],
              specific_note: "價錢、價格。",
              segments: [{ text: "Giá", meaning: "價格", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Giá này hơi đắt.",
              translation: "這價格有點貴。",
              segments: [
                { text: "Giá", meaning: "價格", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "hơi", meaning: "有點", tail: " " },
                { text: "đắt", meaning: "貴", tail: "." },
              ],
            },
            {
              sentence: "Giá bao nhiêu vậy?",
              translation: "價格是多少啊？",
              segments: [
                { text: "Giá", meaning: "價格", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "vậy", meaning: "呢/啊", tail: "?" },
              ],
            },
          ],
          usage_note: "詢問總價通常用『Hết bao nhiêu tiền?』。",
          image_file: "price.png",
        },
        {
          id: "n-60",
          term_zh: "收據 / 發票",
          related_terms: [
            {
              term_target: "Biên lai",
              pronunciation: ["/ɓiən˧˧ laːj˧˧/"],
              specific_note: "收據（漢越音：邊來）。",
              segments: [{ text: "Biên lai", meaning: "收據", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Lấy cho em biên lai.",
              translation: "請拿收據給我。",
              segments: [
                { text: "Lấy", meaning: "拿", tail: " " },
                { text: "cho em", meaning: "給我", tail: " " },
                { text: "biên lai", meaning: "收據", tail: "." },
              ],
            },
          ],
          usage_note: "在超市買東西拿到的那一長條通常也直接叫 Hóa đơn。",
          image_file: "receipt.png",
        },
        {
          id: "n-61",
          term_zh: "尺寸 / 大小",
          related_terms: [
            {
              term_target: "Kích cỡ",
              pronunciation: ["/kic˧˥ kəː˦ˀ˥/"],
              specific_note: "正式的尺寸用法。",
              segments: [{ text: "Kích cỡ", meaning: "尺寸", tail: "" }],
            },
            {
              term_target: "Size",
              pronunciation: ["/saɪz/"],
              specific_note: "越南口語非常常用英文音直接講 Size。",
              segments: [{ text: "Size", meaning: "尺寸(外來語)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho em size M.",
              translation: "給我 M 號。",
              segments: [
                { text: "Cho", meaning: "給", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "size M", meaning: "M號", tail: "." },
              ],
            },
            {
              sentence: "Cái này có size to hơn không?",
              translation: "這個有更大一點的尺寸嗎？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "size", meaning: "尺寸", tail: " " },
                { text: "to hơn", meaning: "更大", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note:
            "在越南買衣服直接講「Size」加上大中小（S, M, L）大家都懂。",
          image_file: "size.png",
        },
        {
          id: "n-62",
          term_zh: "入口",
          related_terms: [
            {
              term_target: "Lối vào",
              pronunciation: ["/loj˧˥ vaːw˨˩/"],
              specific_note: "進去的路。",
              segments: [
                { text: "Lối", meaning: "小徑/路", tail: " " },
                { text: "vào", meaning: "進", tail: "" },
              ],
            },
            {
              term_target: "Cổng vào",
              pronunciation: ["/koŋm˧˩ vaːw˨˩/"],
              specific_note: "進去的大門。",
              segments: [
                { text: "Cổng", meaning: "大門", tail: " " },
                { text: "vào", meaning: "進", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Lối vào ở đằng kia.",
              translation: "入口在那邊。",
              segments: [
                { text: "Lối vào", meaning: "入口", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đằng kia", meaning: "那邊", tail: "." },
              ],
            },
          ],
          usage_note:
            "在百貨公司或停車場找門，看標示牌上的『Vào』或『Lối vào』。",
          image_file: "entrance.png",
        },
        {
          id: "n-63",
          term_zh: "出口",
          related_terms: [
            {
              term_target: "Lối ra",
              pronunciation: ["/loj˧˥ zaː˧˧/"],
              specific_note: "出去的路。",
              segments: [
                { text: "Lối", meaning: "路", tail: " " },
                { text: "ra", meaning: "出", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Lối ra ở đâu ạ?",
              translation: "請問出口在哪裡？",
              segments: [
                { text: "Lối ra", meaning: "出口", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
              ],
            },
          ],
          usage_note: "通常大門標示會寫單一個『Ra』字。",
          image_file: "exit.png",
        },
        {
          id: "n-64",
          term_zh: "台灣",
          related_terms: [
            {
              term_target: "Đài Loan",
              pronunciation: ["/ɗaːj˨˩ lɔəŋ˧˧/"],
              specific_note: "地名（漢越音：台灣）。",
              segments: [{ text: "Đài Loan", meaning: "台灣", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em nhớ Đài Loan lắm.",
              translation: "我很想念台灣。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "nhớ", meaning: "想念", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
          ],
          usage_note: "向越南朋友介紹自己家鄉時必備。",
          image_file: "taiwan.png",
        },
        {
          id: "n-65",
          term_zh: "台灣人",
          related_terms: [
            {
              term_target: "Người Đài Loan",
              pronunciation: ["/ŋɨəj˨˩ ɗaːj˨˩ lɔəŋ˧˧/"],
              specific_note: "台灣的人。",
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
                { text: "người Đài Loan", meaning: "台灣人", tail: "." },
              ],
            },
          ],
          usage_note: "越南人對台灣人通常很熱情，記得學會這一句。",
          image_file: "taiwanese.png",
        },
        {
          id: "n-66",
          term_zh: "一切事物 / 全部",
          related_terms: [
            {
              term_target: "Mọi thứ",
              pronunciation: ["/mɔj˧˨ tʰɨ˧˥/"],
              specific_note: "所有的事物。",
              segments: [
                { text: "Mọi", meaning: "所有", tail: " " },
                { text: "thứ", meaning: "樣/東西", tail: "" },
              ],
            },
            {
              term_target: "Tất cả",
              pronunciation: ["/tət˧˥ kaː˧˩/"],
              specific_note: "全部（包含人或物）。",
              segments: [{ text: "Tất cả", meaning: "全部", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mọi thứ đều ổn.",
              translation: "一切都好（一切都OK）。",
              segments: [
                { text: "Mọi thứ", meaning: "一切", tail: " " },
                { text: "đều", meaning: "都", tail: " " },
                { text: "ổn", meaning: "穩/OK", tail: "." },
              ],
            },
            {
              sentence: "Cảm ơn anh vì tất cả.",
              translation: "謝謝你（為我做的）這一切。",
              segments: [
                { text: "Cảm ơn", meaning: "謝謝", tail: " " },
                { text: "anh", meaning: "哥哥(你)", tail: " " },
                { text: "vì", meaning: "因為", tail: " " },
                { text: "tất cả", meaning: "全部/這一切", tail: "." },
              ],
            },
          ],
          usage_note: "『一切都好』常說 Mọi thứ đều tốt。",
          image_file: "everything.png",
        },
        {
          id: "n-67",
          term_zh: "錢包",
          related_terms: [
            {
              term_target: "Ví",
              pronunciation: ["/vi˧˥/"],
              specific_note: "錢包（北越常用，泛指皮夾）。",
              segments: [{ text: "Ví", meaning: "錢包", tail: "" }],
            },
            {
              term_target: "Bóp",
              pronunciation: ["/ɓɔp˧˥/"],
              specific_note: "錢包（南越常用）。",
              segments: [{ text: "Bóp", meaning: "錢包/夾子", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em quên mang ví rồi.",
              translation: "我忘記帶錢包了。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "quên", meaning: "忘記", tail: " " },
                { text: "mang", meaning: "帶", tail: " " },
                { text: "ví", meaning: "錢包", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "在胡志明市，當地人習慣說 Bóp。",
          image_file: "wallet.png",
        },
        {
          id: "n-68",
          term_zh: "身分證 / 證件",
          related_terms: [
            {
              term_target: "CCCD",
              pronunciation: ["/se˧˧ se˧˧ se˧˧ ze˧˧/"],
              specific_note: "越南公民身分證縮寫（最常用）。",
              segments: [{ text: "CCCD", meaning: "身分證", tail: "" }],
            },
            {
              term_target: "Chứng minh thư",
              pronunciation: ["/cɨŋ˧˥ miɲ˧˧ tʰɨ˧˧/"],
              specific_note: "舊稱的身分證（漢越音：證明書）。",
              segments: [
                { text: "Chứng minh thư", meaning: "身分證", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cho em xem CCCD.",
              translation: "請給我看一下身分證。（辦理手續時）",
              segments: [
                { text: "Cho em xem", meaning: "讓我看/請出示", tail: " " },
                { text: "CCCD", meaning: "身分證", tail: "." },
              ],
            },
          ],
          usage_note:
            "在越南買 SIM 卡或住飯店，工作人員常會跟你要 CCCD（或 Passport）。",
          image_file: "id.png",
        },
        {
          id: "n-69",
          term_zh: "護照",
          related_terms: [
            {
              term_target: "Hộ chiếu",
              pronunciation: ["/ho˨˩ ciəw˧˥/"],
              specific_note: "護照（漢越音：護照）。",
              segments: [{ text: "Hộ chiếu", meaning: "護照", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đây là hộ chiếu của em.",
              translation: "這是我的護照。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "hộ chiếu", meaning: "護照", tail: " " },
                { text: "của em", meaning: "我的", tail: "." },
              ],
            },
          ],
          usage_note: "出國必備，漢越音發音跟台語護照很像。",
          image_file: "passport.png",
        },
        {
          id: "n-70",
          term_zh: "餐廳",
          related_terms: [
            {
              term_target: "Nhà hàng",
              pronunciation: ["/ɲaː˨˩ haːŋ˨˩/"],
              specific_note: "較正式的大型餐廳（漢越音：家行）。",
              segments: [{ text: "Nhà hàng", meaning: "餐廳", tail: "" }],
            },
            {
              term_target: "Quán ăn",
              pronunciation: ["/kwaːn˧˥ aŋ˧˧/"],
              specific_note: "一般的小吃店、飯館。",
              segments: [{ text: "Quán ăn", meaning: "食店", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi nhà hàng ăn tối.",
              translation: "去餐廳吃晚餐。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "nhà hàng", meaning: "餐廳", tail: " " },
                { text: "ăn tối", meaning: "吃晚餐", tail: "." },
              ],
            },
          ],
          usage_note: "越南路邊攤通常用 Quán，高檔一點有冷氣的叫 Nhà hàng。",
          image_file: "restaurant.png",
        },
        {
          id: "n-71",
          term_zh: "飯店 / 酒店",
          related_terms: [
            {
              term_target: "Khách sạn",
              pronunciation: ["/xac˧˥ saːn˨˩/"],
              specific_note: "正式的飯店（漢越音：客棧）。",
              segments: [{ text: "Khách sạn", meaning: "飯店", tail: "" }],
            },
            {
              term_target: "Nhà nghỉ",
              pronunciation: ["/ɲaː˨˩ ŋi˦ˀ˥/"],
              specific_note: "簡易的小型旅店（直譯：休息之家）。",
              segments: [{ text: "Nhà nghỉ", meaning: "旅社", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Khách sạn này sạch lắm.",
              translation: "這間飯店非常乾淨。",
              segments: [
                { text: "Khách sạn", meaning: "飯店", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "sạch", meaning: "乾淨", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
          ],
          usage_note: "找正規大飯店要認明『Khách sạn』標誌。",
          image_file: "hotel.png",
        },
        {
          id: "n-72",
          term_zh: "場所 / 地方",
          related_terms: [
            {
              term_target: "Chỗ",
              pronunciation: ["/co˦ˀ˥/"],
              specific_note: "口語指「地方、空位」。",
              segments: [{ text: "Chỗ", meaning: "地方", tail: "" }],
            },
            {
              term_target: "Địa điểm",
              pronunciation: ["/ɗiə˨˩ ɗiəm˧˩/"],
              specific_note: "正式的地點、場所（漢越音：地點）。",
              segments: [{ text: "Địa điểm", meaning: "地點", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chỗ này có ai ngồi chưa?",
              translation: "這地方（這位子）有人坐了嗎？",
              segments: [
                { text: "Chỗ này", meaning: "這地方", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "ai", meaning: "誰", tail: " " },
                { text: "ngồi", meaning: "坐", tail: " " },
                { text: "chưa", meaning: "沒/了嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "併桌時問『Chỗ này được không?』（這地方行嗎？）很實用。",
          image_file: "place.png",
        },
        {
          id: "n-73",
          term_zh: "店員 / 職員",
          related_terms: [
            {
              term_target: "Nhân viên",
              pronunciation: ["/ɲən˧˧ viən˧˧/"],
              specific_note: "職員、員工（漢越音：人員）。",
              segments: [{ text: "Nhân viên", meaning: "職員", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em là nhân viên bán hàng.",
              translation: "我是銷售店員。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "nhân viên", meaning: "人員", tail: " " },
                { text: "bán hàng", meaning: "賣貨/銷售", tail: "." },
              ],
            },
          ],
          usage_note: "服務生叫 Nhân viên phục vụ。",
          image_file: "clerk.png",
        },
        {
          id: "n-74",
          term_zh: "超市",
          related_terms: [
            {
              term_target: "Siêu thị",
              pronunciation: ["/siəw˧˧ tʰi˨˩/"],
              specific_note: "超市（漢越音：超市）。",
              segments: [{ text: "Siêu thị", meaning: "超市", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi siêu thị mua hoa quả.",
              translation: "去超市買水果。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "siêu thị", meaning: "超市", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "hoa quả", meaning: "花果/水果", tail: "." },
              ],
            },
          ],
          usage_note: "越南連鎖超市如 WinMart, Big C 隨處可見。",
          image_file: "supermarket.png",
        },
        {
          id: "n-75",
          term_zh: "月台 / 站台",
          related_terms: [
            {
              term_target: "Sân ga",
              pronunciation: ["/sən˧˧ zaː˧˧/"],
              specific_note: "車站的月台、候車場。",
              segments: [
                { text: "Sân", meaning: "場/院", tail: " " },
                { text: "ga", meaning: "火車站", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hẹn gặp anh ở sân ga nhé.",
              translation: "約在車站月台見喔。",
              segments: [
                { text: "Hẹn gặp", meaning: "約見", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "sân ga", meaning: "月台", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "Ga 來自法文 Gare，指火車站。",
          image_file: "platform.png",
        },
{
  "id": "n-76",
  "term_zh": "音樂",
  "related_terms": [
    {
      "term_target": "Nhạc",
      "pronunciation": ["/ɲa̰ːk˨˩/"],
      "specific_note": "音樂（漢越音：樂）。口語中最道地、最通用的說法。",
      "segments": [{ "text": "Nhạc", "meaning": "音樂", "tail": "" }]
    }
  ],
  "examples": [
    {
      "sentence": "Em thích nghe nhạc.",
      "translation": "我喜歡聽音樂。",
      "segments": [
        { "text": "Em", "meaning": "我", "tail": " " },
        { "text": "thích", "meaning": "喜歡", "tail": " " },
        { "text": "nghe", "meaning": "聽", "tail": " " },
        { "text": "nhạc", "meaning": "音樂", "tail": "." }
      ]
    },
    {
      "sentence": "Nhạc này hay quá!",
      "translation": "這音樂真好聽！（聽到喜歡的歌時必說）",
      "segments": [
        { "text": "Nhạc", "meaning": "音樂", "tail": " " },
        { "text": "này", "meaning": "這", "tail": " " },
        { "text": "hay", "meaning": "好聽/精采", "tail": " " },
        { "text": "quá", "meaning": "太/真", "tail": "!" }
      ]
    },
    {
      "sentence": "Mở nhạc đi anh.",
      "translation": "哥，放點音樂吧。（在車上或聚會時常用）",
      "segments": [
        { "text": "Mở", "meaning": "開啟/放", "tail": " " },
        { "text": "nhạc", "meaning": "音樂", "tail": " " },
        { "text": "đi", "meaning": "吧(語助詞)", "tail": " " },
        { "text": "anh", "meaning": "哥哥(你)", "tail": "." }
      ]
    },
    {
      "sentence": "Nhạc trẻ Việt Nam rất sôi động.",
      "translation": "越南流行音樂非常熱鬧好聽。",
      "segments": [
        { "text": "Nhạc trẻ", "meaning": "流行音樂", "tail": " " },
        { "text": "Việt Nam", "meaning": "越南", "tail": " " },
        { "text": "rất", "meaning": "非常", "tail": " " },
        { "text": "sôi động", "meaning": "熱鬧/活躍", "tail": "." }
      ]
    }
  ],
  "usage_note": "雖然『Âm nhạc』是正式名稱，但在日常生活中，不管是聽歌 (Nghe nhạc) 還是流行音樂 (Nhạc trẻ)，越南人都只會用單音節的『Nhạc』。",
  "image_file": "music.png"
},
        {
          id: "n-77",
          term_zh: "雨",
          related_terms: [
            {
              term_target: "Mưa",
              pronunciation: ["/mɨə˧˧/"],
              specific_note: "下雨。",
              segments: [{ text: "Mưa", meaning: "雨", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Trời đang mưa to lắm.",
              translation: "天正在下大雨喔。",
              segments: [
                { text: "Trời", meaning: "天空/天", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "mưa to", meaning: "雨大", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
          ],
          usage_note: "雨衣叫 Áo mưa。",
          image_file: "rain.png",
        },
        {
          id: "n-78",
          term_zh: "照片 / 圖片",
          related_terms: [
            {
              term_target: "Ảnh",
              pronunciation: ["/a̰ːɲ˨˩/"],
              specific_note: "照片。",
              segments: [{ text: "Ảnh", meaning: "照片", tail: "" }],
            },
            {
              term_target: "Hình",
              pronunciation: ["/hiɲ˨˩/"],
              specific_note: "圖片、影像（南越常用）。",
              segments: [{ text: "Hình", meaning: "圖片/形", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chụp ảnh giúp em với!",
              translation: "幫我拍張照！",
              segments: [
                { text: "Chụp ảnh", meaning: "拍照", tail: " " },
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "với", meaning: "吧/伴隨", tail: "!" },
              ],
            },
          ],
          usage_note: "如果是自拍，越南人常用英文 Selfie。",
          image_file: "picture.png",
        },
        {
          id: "n-79",
          term_zh: "書",
          related_terms: [
            {
              term_target: "Sách",
              pronunciation: ["/sac˧˥/"],
              specific_note: "書籍。",
              segments: [{ text: "Sách", meaning: "書", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cuốn sách này rất hay.",
              translation: "這本書非常精采。",
              segments: [
                { text: "Cuốn", meaning: "本(量詞)", tail: " " },
                { text: "sách", meaning: "書", tail: " " },
                { text: "này", meaning: "這", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "hay", meaning: "好/精采", tail: "." },
              ],
            },
          ],
          usage_note: "書的量詞是 Cuốn 或 Quyển。",
          image_file: "book.png",
        },
        {
          id: "n-80",
          term_zh: "廁所",
          related_terms: [
            {
              term_target: "Nhà vệ sinh",
              pronunciation: ["/ɲaː˨˩ vê siɲ˧˧/"],
              specific_note: "洗手間（直譯：衛生屋）。",
              segments: [
                { text: "Nhà", meaning: "屋", tail: " " },
                { text: "vệ sinh", meaning: "衛生", tail: "" },
              ],
            },
            {
              term_target: "Toilet",
              pronunciation: ["/tɔj lèt/"],
              specific_note: "外來語，非常通用。",
              segments: [{ text: "Toilet", meaning: "廁所", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nhà vệ sinh ở hướng nào?",
              translation: "廁所在哪個方向？",
              segments: [
                { text: "Nhà vệ sinh", meaning: "廁所", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "hướng nào", meaning: "哪向", tail: "?" },
              ],
            },
          ],
          usage_note: "如果是在外面找廁所，直接問『Toilet ở đâu?』最簡單。",
          image_file: "restroom.png",
        },
        {
          id: "n-81",
          term_zh: "天氣",
          related_terms: [
            {
              term_target: "Thời tiết",
              pronunciation: ["/tʰəj˨˩ tiət˧˥/"],
              specific_note: "天氣（漢越音：時節）。",
              segments: [{ text: "Thời tiết", meaning: "天氣", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Thời tiết hôm nay thế nào?",
              translation: "今天天氣如何？",
              segments: [
                { text: "Thời tiết", meaning: "天氣", tail: " " },
                { text: "hôm nay", meaning: "今天", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
          ],
          usage_note: "越南氣候分雨季與乾季，對行程規劃很重要。",
          image_file: "weather.png",
        },
        {
          id: "n-82",
          term_zh: "訊息 / 簡訊",
          related_terms: [
            {
              term_target: "Tin nhắn",
              pronunciation: ["/tin˧˧ ɲan˧˥/"],
              specific_note: "訊息、簡訊。",
              segments: [
                { text: "Tin", meaning: "訊息", tail: " " },
                { text: "nhắn", meaning: "留言/吩咐", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đợi tin nhắn của em nhé.",
              translation: "等我的訊息喔。",
              segments: [
                { text: "Đợi", meaning: "等待", tail: " " },
                { text: "tin nhắn", meaning: "訊息", tail: " " },
                { text: "của em", meaning: "我的", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "傳簡訊常用的動詞是 Gửi (傳) 或 Nhắn tin (傳訊)。",
          image_file: "message.png",
        },
      ],
    },
    {
      id: "adverbs_vn",
      name: "常用副詞",
      items: [
        {
          id: "adv-01",
          term_zh: "現在",
          related_terms: [
            {
              term_target: "Bây giờ",
              pronunciation: ["/ɓəj˧˧ zəː˨˩/"],
              specific_note: "目前的時刻。",
              segments: [
                { text: "Bây", meaning: "當下", tail: " " },
                { text: "giờ", meaning: "小時/時刻", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bây giờ đi luôn không?",
              translation: "現在馬上走嗎？",
              segments: [
                { text: "Bây giờ", meaning: "現在", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "luôn", meaning: "直接/立刻", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Em đang bận bây giờ.",
              translation: "我現在正忙。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "bận", meaning: "忙", tail: " " },
                { text: "bây giờ", meaning: "現在", tail: "." },
              ],
            },
          ],
          usage_note: "越南語常把時間放在句首或句尾，放在句首強調感較強。",
          image_file: "now.png",
        },
        {
          id: "adv-02",
          term_zh: "非常 / 很",
          related_terms: [
            {
              term_target: "Rất",
              pronunciation: ["/zət˧˥/"],
              specific_note: "放在形容詞前，程度一般。",
              segments: [{ text: "Rất", meaning: "很/非常", tail: "" }],
            },
            {
              term_target: "Lắm",
              pronunciation: ["/lam˧˥/"],
              specific_note: "放在句尾，口語極高頻。",
              segments: [{ text: "Lắm", meaning: "非常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này ngon lắm!",
              translation: "這個非常好吃！",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "ngon", meaning: "好吃", tail: " " },
                { text: "lắm", meaning: "非常", tail: "!" },
              ],
            },
            {
              sentence: "Hôm nay rất nóng.",
              translation: "今天很熱。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "rất", meaning: "很", tail: " " },
                { text: "nóng", meaning: "熱", tail: "." },
              ],
            },
          ],
          usage_note: "口語中稱讚東西「很...」時，習慣用『形容詞 + Lắm』。",
          image_file: "very.png",
        },
{
  "id": "adv-03",
  "term_zh": "真的 / 確實",
  "related_terms": [
    {
      "term_target": "Thật sự",
      "pronunciation": ["/tʰət˨˩ sɨ̰˨˩/"],
      "specific_note": "強調某種情感、態度或事實的真實性。",
      "segments": [
        { "text": "Thật", "meaning": "真", "tail": " " },
        { "text": "sự", "meaning": "事", "tail": "" }
      ]
    }
  ],
  "examples": [
    {
      "sentence": "Em thật sự thích anh.",
      "translation": "我真的喜歡你（哥）。",
      "segments": [
        { "text": "Em", "meaning": "我(弟妹)", "tail": " " },
        { "text": "thật sự", "meaning": "真的", "tail": " " },
        { "text": "thích", "meaning": "喜歡", "tail": " " },
        { "text": "anh", "meaning": "哥(你)", "tail": "." }
      ]
    },
    {
      "sentence": "Em thật sự xin lỗi.",
      "translation": "我真的很抱歉。",
      "segments": [
        { "text": "Em", "meaning": "我", "tail": " " },
        { "text": "thật sự", "meaning": "真的", "tail": " " },
        { "text": "xin lỗi", "meaning": "抱歉", "tail": "." }
      ]
    },
    {
      "sentence": "Việc này thật sự quan trọng.",
      "translation": "這件事真的很重要。",
      "segments": [
        { "text": "Việc", "meaning": "事", "tail": " " },
        { "text": "này", "meaning": "這", "tail": " " },
        { "text": "thật sự", "meaning": "真的", "tail": " " },
        { "text": "quan trọng", "meaning": "重要", "tail": "." }
      ]
    }
  ],
  "usage_note": "當你想表達內心由衷的想法時，使用 Thật sự 會讓對方感覺你更誠懇。",
  "image_file": "really.png"
},
        {
          id: "adv-04",
          term_zh: "好好地 / 很好地",
          related_terms: [
            {
              term_target: "Giỏi",
              pronunciation: ["/zɔj˧˩/"],
              specific_note: "指能力很好、很棒。",
              segments: [{ text: "Giỏi", meaning: "好/厲害", tail: "" }],
            },
            {
              term_target: "Tốt",
              pronunciation: ["/tot˧˥/"],
              specific_note: "指性質好、表現好。",
              segments: [{ text: "Tốt", meaning: "好", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Làm tốt lắm!",
              translation: "做得好！（誇獎別人）",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "tốt", meaning: "好", tail: " " },
                { text: "lắm", meaning: "非常", tail: "!" },
              ],
            },
            {
              sentence: "Bạn nói tiếng Việt giỏi quá.",
              translation: "你越南語說得真好。",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: " " },
                { text: "giỏi", meaning: "好/擅長", tail: " " },
                { text: "quá", meaning: "真/太", tail: "." },
              ],
            },
          ],
          usage_note: "誇獎小孩子或下屬常用『Giỏi lắm』或『Tốt lắm』。",
          image_file: "well.png",
        },
{
  "id": "adv-05",
  "term_zh": "經常 / 常",
  "related_terms": [
    {
      "term_target": "Hay",
      "pronunciation": ["/haːj˧˧/"],
      "specific_note": "口語中最通用的「常」。當它放在動詞前表示頻率。",
      "segments": [{ "text": "Hay", "meaning": "常/經常", "tail": "" }]
    }
  ],
  "examples": [
    {
      "sentence": "Em hay ăn ở đây.",
      "translation": "我常在這邊吃。",
      "segments": [
        { "text": "Em", "meaning": "我", "tail": " " },
        { "text": "hay", "meaning": "常", "tail": " " },
        { "text": "ăn", "meaning": "吃", "tail": " " },
        { "text": "ở đây", "meaning": "在這邊", "tail": "." }
      ]
    },
    {
      "sentence": "Anh có hay đi bơi không?",
      "translation": "你（哥）常去游泳嗎？",
      "segments": [
        { "text": "Anh", "meaning": "哥哥(你)", "tail": " " },
        { "text": "có", "meaning": "是否", "tail": " " },
        { "text": "hay", "meaning": "常", "tail": " " },
        { "text": "đi bơi", "meaning": "去游泳", "tail": " " },
        { "text": "không", "meaning": "嗎", "tail": "?" }
      ]
    },
    {
      "sentence": "Sao em hay quên thế?",
      "translation": "妳怎麼常忘記呀？",
      "segments": [
        { "text": "Sao", "meaning": "怎麼/為何", "tail": " " },
        { "text": "em", "meaning": "妳", "tail": " " },
        { "text": "hay", "meaning": "常", "tail": " " },
        { "text": "quên", "meaning": "忘記", "tail": " " },
        { "text": "thế", "meaning": "那樣/呀", "tail": "?" }
      ]
    },
    {
      "sentence": "Dạo này anh hay bận lắm.",
      "translation": "最近我（哥）常變得很忙。",
      "segments": [
        { "text": "Dạo này", "meaning": "最近", "tail": " " },
        { "text": "anh", "meaning": "哥哥(我)", "tail": " " },
        { "text": "hay", "meaning": "常", "tail": " " },
        { "text": "bận", "meaning": "忙", "tail": " " },
        { "text": "lắm", "meaning": "非常", "tail": "." }
      ]
    }
  ],
  "usage_note": "Hay 除了當『常』，在句尾或形容詞位子時，也代表『精采、好聽』（如：Nhạc hay = 音樂好聽）。",
  "image_file": "often.png"
},
        {
          id: "adv-06",
          term_zh: "通常",
          related_terms: [
            {
              term_target: "Thường",
              pronunciation: ["/tʰɨəŋ˨˩/"],
              specific_note: "一般的習慣。",
              segments: [{ text: "Thường", meaning: "常/通常", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Thường thì em đi làm lúc 8 giờ.",
              translation: "通常我8點去上班。",
              segments: [
                { text: "Thường thì", meaning: "通常的話", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "đi làm", meaning: "去上班", tail: " " },
                { text: "lúc", meaning: "在(時間)", tail: " " },
                { text: "8 giờ", meaning: "八點", tail: "." },
              ],
            },
          ],
          usage_note: "Thường 放在主詞前後皆可。",
          image_file: "usually.png",
        },
        {
          id: "adv-07",
          term_zh: "已經",
          related_terms: [
            {
              term_target: "Rồi",
              pronunciation: ["/zoj˨˩/"],
              specific_note: "放在句尾，表示動作已完成。",
              segments: [{ text: "Rồi", meaning: "了/已經", tail: "" }],
            },
            {
              term_target: "Đã",
              pronunciation: ["/ɗa˦ˀ˥/"],
              specific_note: "放在動詞前，強調過去式。",
              segments: [{ text: "Đã", meaning: "已經", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em ăn cơm rồi.",
              translation: "我吃過飯了。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "ăn cơm", meaning: "吃飯", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Anh biết rồi!",
              translation: "我知道了！（常用口頭禪）",
              segments: [
                { text: "Anh", meaning: "我(哥)", tail: " " },
                { text: "biết", meaning: "知道", tail: " " },
                { text: "rồi", meaning: "了", tail: "!" },
              ],
            },
          ],
          usage_note: "越南語最常用的「已經」就是句尾的 Rồi，非常有靈魂。",
          image_file: "already.png",
        },
        {
          id: "adv-08",
          term_zh: "只有 / 才",
          related_terms: [
            {
              term_target: "Chỉ",
              pronunciation: ["/ci˧˩/"],
              specific_note: "限定數量或範圍。",
              segments: [{ text: "Chỉ", meaning: "只/只有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Chỉ có một cái thôi.",
              translation: "只有一個而已。",
              segments: [
                { text: "Chỉ", meaning: "只", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "một cái", meaning: "一個", tail: " " },
                { text: "thôi", meaning: "而已/罷了", tail: "." },
              ],
            },
          ],
          usage_note: "『Chỉ... thôi』是常用的固定搭法，表示「僅僅...而已」。",
          image_file: "only.png",
        },
        {
          id: "adv-09",
          term_zh: "再次 / 又",
          related_terms: [
            {
              term_target: "Lại",
              pronunciation: ["/laːj˨˩/"],
              specific_note: "動作重複發生。",
              segments: [{ text: "Lại", meaning: "又/再次", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Nói lại đi.",
              translation: "再說一次吧。",
              segments: [
                { text: "Nói", meaning: "說", tail: " " },
                { text: "lại", meaning: "再次", tail: " " },
                { text: "đi", meaning: "吧", tail: "." },
              ],
            },
            {
              sentence: "Hẹn gặp lại!",
              translation: "再見！（約定再次見面）",
              segments: [
                { text: "Hẹn", meaning: "約定", tail: " " },
                { text: "gặp lại", meaning: "再見面", tail: "!" },
              ],
            },
          ],
          usage_note: "『Lại nữa à?』意思是「又來了喔？」。",
          image_file: "again.png",
        },
        {
          id: "adv-10",
          term_zh: "大約 / 左右",
          related_terms: [
            {
              term_target: "Khoảng",
              pronunciation: ["/xwaːŋ˧˩/"],
              specific_note: "用於時間、距離、數量的估計。",
              segments: [{ text: "Khoảng", meaning: "大約", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Khoảng bao nhiêu tiền?",
              translation: "大約多少錢？",
              segments: [
                { text: "Khoảng", meaning: "大約", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tiền", meaning: "錢", tail: "?" },
              ],
            },
            {
              sentence: "Đợi em khoảng 5 phút.",
              translation: "等我大約5分鐘。",
              segments: [
                { text: "Đợi", meaning: "等", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "khoảng", meaning: "大約", tail: " " },
                { text: "5 phút", meaning: "五分鐘", tail: "." },
              ],
            },
          ],
          usage_note: "問路或問時間預算時，Khoảng 非常好用。",
          image_file: "about.png",
        },
        {
          id: "adv-11",
          term_zh: "一點點 / 有點",
          related_terms: [
            {
              term_target: "Một chút",
              pronunciation: ["/mot˨˩ cụt˧˥/"],
              specific_note: "指份量或時間的一點點。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "chút", meaning: "點點", tail: "" },
              ],
            },
            {
              term_target: "Hơi",
              pronunciation: ["/həːj˧˧/"],
              specific_note: "指程度上的「有一點」。",
              segments: [{ text: "Hơi", meaning: "稍微/有點", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho em một chút tương ớt.",
              translation: "給我一點點辣椒醬。",
              segments: [
                { text: "Cho em", meaning: "給我", tail: " " },
                { text: "một chút", meaning: "一點點", tail: " " },
                { text: "tương ớt", meaning: "辣椒醬", tail: "." },
              ],
            },
            {
              sentence: "Cái này hơi đắt.",
              translation: "這個有點貴。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "hơi", meaning: "有點", tail: " " },
                { text: "đắt", meaning: "貴", tail: "." },
              ],
            },
          ],
          usage_note: "點餐要少辣、少糖，可以說『Một chút thôi』。",
          image_file: "a_little.png",
        },
        {
          id: "adv-12",
          term_zh: "也是 / 也",
          related_terms: [
            {
              term_target: "Cũng",
              pronunciation: ["/kuŋ˦ˀ˥/"],
              specific_note: "表示同樣的情況。",
              segments: [{ text: "Cũng", meaning: "也", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em cũng thế.",
              translation: "我也是。（回覆對方的問候或意見）",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "thế", meaning: "那樣/如此", tail: "." },
              ],
            },
          ],
          usage_note: "常用於回覆：『Em cũng thích』 (我也喜歡)。",
          image_file: "also.png",
        },
        {
          id: "adv-13",
          term_zh: "或許 / 可能",
          related_terms: [
            {
              term_target: "Có lẽ",
              pronunciation: ["/kɔ˧˥ lɛ˦ˀ˥/"],
              specific_note: "推測可能性。",
              segments: [
                { text: "Có", meaning: "有", tail: "" },
                { text: "lẽ", meaning: "理/道理", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Có lẽ mai em sẽ đến.",
              translation: "或許明天我會來。",
              segments: [
                { text: "Có lẽ", meaning: "或許", tail: " " },
                { text: "mai", meaning: "明天", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "sẽ", meaning: "將會", tail: " " },
                { text: "đến", meaning: "來", tail: "." },
              ],
            },
          ],
          usage_note: "用於不確定的回答。",
          image_file: "maybe.png",
        },
        {
          id: "adv-14",
          term_zh: "之後 / 等一下",
          related_terms: [
            {
              term_target: "Sau",
              pronunciation: ["/saːw˧˧/"],
              specific_note: "時間上的後續。",
              segments: [{ text: "Sau", meaning: "之後", tail: "" }],
            },
            {
              term_target: "Lát nữa",
              pronunciation: ["/lat˧˥ nɨə˦ˀ˥/"],
              specific_note: "待會、等一下。",
              segments: [
                { text: "Lát", meaning: "片刻", tail: " " },
                { text: "nữa", meaning: "再/更加", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Lát nữa gặp nhé.",
              translation: "等一下見喔。",
              segments: [
                { text: "Lát nữa", meaning: "待會", tail: " " },
                { text: "gặp", meaning: "見面", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "『Sau đó』是「在那之後」。",
          image_file: "later.png",
        },
        {
          id: "adv-15",
          term_zh: "很快 / 快要",
          related_terms: [
            {
              term_target: "Sắp",
              pronunciation: ["/sap˧˥/"],
              specific_note: "指即將發生。",
              segments: [{ text: "Sắp", meaning: "快要", tail: "" }],
            },
            {
              term_target: "Nhanh",
              pronunciation: ["/ɲaɲ˧˧/"],
              specific_note: "指動作迅速。",
              segments: [{ text: "Nhanh", meaning: "快", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sắp đến nơi rồi.",
              translation: "快要到了。（搭 Grab 常用）",
              segments: [
                { text: "Sắp", meaning: "快要", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "nơi", meaning: "地方", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Đi nhanh lên!",
              translation: "走快點！",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "nhanh", meaning: "快", tail: " " },
                { text: "lên", meaning: "起來", tail: "!" },
              ],
            },
          ],
          usage_note: "催促別人時，句尾一定要加一個『lên』。",
          image_file: "soon.png",
        },
        {
          id: "adv-16",
          term_zh: "一起",
          related_terms: [
            {
              term_target: "Cùng nhau",
              pronunciation: ["/kuŋ˨˩ ɲaːw˧˧/"],
              specific_note: "共同做某事。",
              segments: [
                { text: "Cùng", meaning: "同", tail: " " },
                { text: "nhau", meaning: "互相", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chúng mình cùng nhau đi ăn nhé.",
              translation: "我們一起去吃飯喔。",
              segments: [
                { text: "Chúng mình", meaning: "我們", tail: " " },
                { text: "cùng nhau", meaning: "一起", tail: " " },
                { text: "đi ăn", meaning: "去吃", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "約朋友做某事，加上 Cùng nhau 會顯得很親近。",
          image_file: "together.png",
        },
        {
          id: "adv-17",
          term_zh: "仍然 / 還在",
          related_terms: [
            {
              term_target: "Vẫn",
              pronunciation: ["/vən˦ˀ˥/"],
              specific_note: "狀態持續。",
              segments: [{ text: "Vẫn", meaning: "仍然", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em vẫn đang ở nhà.",
              translation: "我還在家裡。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "vẫn", meaning: "仍然", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "nhà", meaning: "家", tail: "." },
              ],
            },
          ],
          usage_note: "問候常用：『Vẫn khỏe chứ?』 (還好嗎/還健康吧？)。",
          image_file: "still.png",
        },
        {
          id: "adv-18",
          term_zh: "一般來說 / 平常",
          related_terms: [
            {
              term_target: "Bình thường",
              pronunciation: ["/ɓiɲ˨˩ tʰɨəŋ˨˩/"],
              specific_note: "正常、平常狀況。",
              segments: [
                { text: "Bình", meaning: "平", tail: " " },
                { text: "thường", meaning: "常", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Bình thường em không ăn cay.",
              translation: "平常我不吃辣。",
              segments: [
                { text: "Bình thường", meaning: "平常", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "ăn cay", meaning: "吃辣", tail: "." },
              ],
            },
          ],
          usage_note: "回答最近過得如何，也可以回『Bình thường』 (一般般)。",
          image_file: "normally.png",
        },
        {
          id: "adv-19",
          term_zh: "立刻 / 馬上",
          related_terms: [
            {
              term_target: "Ngay",
              pronunciation: ["/ŋaj˧˧/"],
              specific_note: "時間上的緊迫。",
              segments: [{ text: "Ngay", meaning: "立刻", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Làm ngay đi!",
              translation: "立刻做吧！",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "ngay", meaning: "立刻", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
            {
              sentence: "Đến ngay đây.",
              translation: "（我）馬上到。",
              segments: [
                { text: "Đến", meaning: "到", tail: " " },
                { text: "ngay", meaning: "立刻", tail: " " },
                { text: "đây", meaning: "這", tail: "." },
              ],
            },
          ],
          usage_note: "『Ngay lập tức』是更正式的「立即」。",
          image_file: "immediately.png",
        },
        {
          id: "adv-20",
          term_zh: "也不 / 也沒",
          related_terms: [
            {
              term_target: "Cũng không",
              pronunciation: ["/kuŋ˦ˀ˥ xoŋ˧˧/"],
              specific_note: "否定句中的「也」。",
              segments: [
                { text: "Cũng", meaning: "也", tail: " " },
                { text: "không", meaning: "不", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em cũng không biết.",
              translation: "我也不知道。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "biết", meaning: "知道", tail: "." },
              ],
            },
          ],
          usage_note: "對應英文的 neither 或 also not。",
          image_file: "neither.png",
        },
      ],
    },
    {
      id: "questions_vn",
      name: "常用疑問詞",
      items: [
        {
          id: "q-01",
          term_zh: "什麼",
          related_terms: [
            {
              term_target: "Gì",
              pronunciation: ["/zi˨˩/"],
              specific_note: "放在動詞或名詞後，詢問「什麼」。",
              segments: [{ text: "Gì", meaning: "什麼", tail: "" }],
            },
            {
              term_target: "Cái gì",
              pronunciation: ["/kaːj˧˥ zi˨˩/"],
              specific_note: "詢問具體「什麼東西」。",
              segments: [
                { text: "Cái", meaning: "個/物", tail: " " },
                { text: "gì", meaning: "什麼", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cái này là cái gì?",
              translation: "這是什麼東西？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
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
              sentence: "Anh đang làm gì đấy?",
              translation: "你（哥）在幹嘛？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "làm", meaning: "做", tail: " " },
                { text: "gì", meaning: "什麼", tail: " " },
                { text: "đấy", meaning: "呢/呀", tail: "?" },
              ],
            },
          ],
          usage_note:
            "注意詞序：『做什麼』要說『Làm gì』，跟中文一樣，但問句不用倒裝。",
          image_file: "what.png",
        },
        {
          id: "q-02",
          term_zh: "如何 / 怎樣",
          related_terms: [
            {
              term_target: "Thế nào",
              pronunciation: ["/tʰe˧˥ naːw˨˩/"],
              specific_note: "詢問狀況或意見。",
              segments: [
                { text: "Thế", meaning: "樣/勢", tail: " " },
                { text: "nào", meaning: "哪", tail: "" },
              ],
            },
            {
              term_target: "Sao",
              pronunciation: ["/saːw˧˧/"],
              specific_note: "為什麼、怎麼了（口語常用）。",
              segments: [{ text: "Sao", meaning: "如何/為什麼", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sức khỏe anh thế nào?",
              translation: "你（哥）身體狀況如何？",
              segments: [
                { text: "Sức khỏe", meaning: "健康/身體", tail: " " },
                { text: "anh", meaning: "哥哥", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Bạn thấy món này thế nào?",
              translation: "你覺得這道菜怎麼樣？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "thấy", meaning: "覺得", tail: " " },
                { text: "món này", meaning: "這道菜", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
            {
              sentence: "Làm sao bây giờ?",
              translation: "現在該怎麼辦？",
              segments: [
                { text: "Làm sao", meaning: "如何做/怎辦", tail: " " },
                { text: "bây giờ", meaning: "現在", tail: "?" },
              ],
            },
          ],
          usage_note:
            "詢問進度或天氣常用 Thế nào，遇到困難問怎麼辦常用 Làm sao。",
          image_file: "how.png",
        },
        {
          id: "q-03",
          term_zh: "何時",
          related_terms: [
            {
              term_target: "Khi nào",
              pronunciation: ["/xi˧˧ naːw˨˩/"],
              specific_note: "通用詢問時間（過去或未來）。",
              segments: [
                { text: "Khi", meaning: "當...時", tail: " " },
                { text: "nào", meaning: "哪", tail: "" },
              ],
            },
            {
              term_target: "Bao giờ",
              pronunciation: ["/ɓaːw˧˧ zəː˨˩/"],
              specific_note: "常用於詢問未來「什麼時候」。",
              segments: [
                { text: "Bao", meaning: "多", tail: " " },
                { text: "giờ", meaning: "點/時", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Khi nào anh về nước?",
              translation: "你（哥）什麼時候回國？",
              segments: [
                { text: "Khi nào", meaning: "什麼時候", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "về nước", meaning: "回國", tail: "?" },
              ],
            },
            {
              sentence: "Bao giờ thì cơm chín?",
              translation: "飯什麼時候會煮好？",
              segments: [
                { text: "Bao giờ", meaning: "何時", tail: " " },
                { text: "thì", meaning: "則/就", tail: " " },
                { text: "cơm", meaning: "飯", tail: " " },
                { text: "chín", meaning: "熟", tail: "?" },
              ],
            },
          ],
          usage_note: "問時間時，Khi nào 放在句首問未來，放在句尾問過去。",
          image_file: "when.png",
        },
        {
          id: "q-04",
          term_zh: "哪裡",
          related_terms: [
            {
              term_target: "Ở đâu",
              pronunciation: ["/əː˧˩ ɗəw˧˧/"],
              specific_note: "詢問所在地點。",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: "" },
              ],
            },
            {
              term_target: "Đâu",
              pronunciation: ["/ɗəw˧˧/"],
              specific_note: "單獨使用，放在動詞後詢問「去哪」。",
              segments: [{ text: "Đâu", meaning: "哪裡", tail: "" }],
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
              sentence: "Anh đi đâu đấy?",
              translation: "你要去哪呀？（越南路邊最常見的打招呼）",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "đâu", meaning: "哪裡", tail: " " },
                { text: "đấy", meaning: "呢/呀", tail: "?" },
              ],
            },
            {
              sentence: "Mua cái này ở đâu?",
              translation: "這個在哪裡買？",
              segments: [
                { text: "Mua", meaning: "買", tail: " " },
                { text: "cái này", meaning: "這個", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
          ],
          usage_note:
            "越南人見面問『Đi đâu đấy?』通常只是像台灣人問『飽了沒』一樣的寒暄。",
          image_file: "where.png",
        },
        {
          id: "q-05",
          term_zh: "誰",
          related_terms: [
            {
              term_target: "Ai",
              pronunciation: ["/aːj˧˧/"],
              specific_note: "詢問人身分。",
              segments: [{ text: "Ai", meaning: "誰", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ai đấy?",
              translation: "是誰呀？（有人敲門時問）",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "đấy", meaning: "呢/呀", tail: "?" },
              ],
            },
            {
              sentence: "Người đó là ai?",
              translation: "那個人是誰？",
              segments: [
                { text: "Người đó", meaning: "那個人", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "ai", meaning: "誰", tail: "?" },
              ],
            },
            {
              sentence: "Ai nói với bạn thế?",
              translation: "誰跟你那樣說的？",
              segments: [
                { text: "Ai", meaning: "誰", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "với", meaning: "跟", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "thế", meaning: "那樣", tail: "?" },
              ],
            },
          ],
          usage_note: "Ai 可以放在句首當主詞，也可以放在句尾當賓語。",
          image_file: "who.png",
        },
        {
          id: "q-06",
          term_zh: "為什麼",
          related_terms: [
            {
              term_target: "Tại sao",
              pronunciation: ["/taːj˨˩ saːw˧˧/"],
              specific_note: "正式、完整的為什麼。",
              segments: [
                { text: "Tại", meaning: "由於", tail: " " },
                { text: "sao", meaning: "如何", tail: "" },
              ],
            },
            {
              term_target: "Sao",
              pronunciation: ["/saːw˧˧/"],
              specific_note: "口語化的為什麼。",
              segments: [{ text: "Sao", meaning: "為何", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tại sao bạn lại khóc?",
              translation: "你為什麼哭了？",
              segments: [
                { text: "Tại sao", meaning: "為什麼", tail: " " },
                { text: "bạn", meaning: "你", tail: " " },
                { text: "lại", meaning: "卻/又", tail: " " },
                { text: "khóc", meaning: "哭", tail: "?" },
              ],
            },
            {
              sentence: "Sao anh không ăn?",
              translation: "為什麼你（哥）不吃？",
              segments: [
                { text: "Sao", meaning: "為何", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "ăn", meaning: "吃", tail: "?" },
              ],
            },
          ],
          usage_note:
            "Tại sao 通常放在句首，Sao 則非常靈活，常出現在朋友對話中。",
          image_file: "why.png",
        },
        {
          id: "q-07",
          term_zh: "哪一個",
          related_terms: [
            {
              term_target: "Nào",
              pronunciation: ["/naːw˨˩/"],
              specific_note: "放在量詞或名詞後，表示「哪個」。",
              segments: [{ text: "Nào", meaning: "哪", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái nào tốt hơn?",
              translation: "哪一個比較好？",
              segments: [
                { text: "Cái nào", meaning: "哪一個", tail: " " },
                { text: "tốt hơn", meaning: "更好", tail: "?" },
              ],
            },
            {
              sentence: "Bạn là người nước nào?",
              translation: "你是哪國人？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "người", meaning: "人", tail: " " },
                { text: "nước nào", meaning: "哪國", tail: "?" },
              ],
            },
          ],
          usage_note: "『Người nước nào?』是認識外國新朋友的第一句話。",
          image_file: "which.png",
        },
        {
          id: "q-08",
          term_zh: "多少 (數量/錢)",
          related_terms: [
            {
              term_target: "Bao nhiêu",
              pronunciation: ["/ɓaːw˧˧ ɲiəw˧˧/"],
              specific_note: "詢問 10 以上的數量或價錢。",
              segments: [
                { text: "Bao", meaning: "多", tail: " " },
                { text: "nhiêu", meaning: "少", tail: "" },
              ],
            },
            {
              term_target: "Mấy",
              pronunciation: ["/məj˧˥/"],
              specific_note: "詢問 10 以下的數量。",
              segments: [{ text: "Mấy", meaning: "幾", tail: "" }],
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
              sentence: "Nhà bạn có mấy người?",
              translation: "你家有幾口人？",
              segments: [
                { text: "Nhà bạn", meaning: "你家", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "mấy", meaning: "幾", tail: " " },
                { text: "người", meaning: "人", tail: "?" },
              ],
            },
          ],
          usage_note: "問價格永遠用 Bao nhiêu，問幾點或家裡幾個人用 Mấy。",
          image_file: "how_much.png",
        },
        {
          id: "q-09",
          term_zh: "多久",
          related_terms: [
            {
              term_target: "Bao lâu",
              pronunciation: ["/ɓaːw˧˧ ləw˧˧/"],
              specific_note: "詢問時間長度。",
              segments: [
                { text: "Bao", meaning: "多", tail: " " },
                { text: "lâu", meaning: "久", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi taxi mất bao lâu?",
              translation: "搭計程車要花多久時間？",
              segments: [
                { text: "Đi taxi", meaning: "搭計程車", tail: " " },
                { text: "mất", meaning: "花費/損失", tail: " " },
                { text: "bao lâu", meaning: "多久", tail: "?" },
              ],
            },
            {
              sentence: "Bạn học tiếng Việt bao lâu rồi?",
              translation: "你學越南語多久了？",
              segments: [
                { text: "Bạn", meaning: "你", tail: " " },
                { text: "học", meaning: "學習", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: " " },
                { text: "bao lâu", meaning: "多久", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
          ],
          usage_note: "詢問路程或學習時間常用 Bao lâu。",
          image_file: "how_long.png",
        },
        {
          id: "q-10",
          term_zh: "幾點",
          related_terms: [
            {
              term_target: "Mấy giờ",
              pronunciation: ["/məj˧˥ zəː˨˩/"],
              specific_note: "詢問具體鐘點。",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "giờ", meaning: "點/小時", tail: "" },
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
              sentence: "Mấy giờ anh đến?",
              translation: "你（哥）幾點會到？",
              segments: [
                { text: "Mấy giờ", meaning: "幾點", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "đến", meaning: "來到", tail: "?" },
              ],
            },
          ],
          usage_note: "這是在越南約時間最重要的一句話。",
          image_file: "what_time.png",
        },
        {
          id: "q-11",
          term_zh: "幾歲",
          related_terms: [
            {
              term_target: "Bao nhiêu tuổi",
              pronunciation: ["/ɓaːw˧˧ ɲiəw˧˧ tuiəj˧˩/"],
              specific_note: "詢問成年人年齡。",
              segments: [
                { text: "Bao nhiêu", meaning: "多少", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "" },
              ],
            },
            {
              term_target: "Mấy tuổi",
              pronunciation: ["/məj˧˥ tuiəj˧˩/"],
              specific_note: "詢問小孩年齡（10歲以下）。",
              segments: [
                { text: "Mấy", meaning: "幾", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em bao nhiêu tuổi rồi?",
              translation: "妳幾歲了？（問稍微年輕的女性）",
              segments: [
                { text: "Em", meaning: "妳(弟妹輩)", tail: " " },
                { text: "bao nhiêu tuổi", meaning: "幾歲", tail: " " },
                { text: "rồi", meaning: "了", tail: "?" },
              ],
            },
            {
              sentence: "Bé mấy tuổi rồi ạ?",
              translation: "小朋友幾歲了呀？",
              segments: [
                { text: "Bé", meaning: "小孩", tail: " " },
                { text: "mấy tuổi", meaning: "幾歲", tail: " " },
                { text: "rồi", meaning: "了", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "?" },
              ],
            },
          ],
          usage_note:
            "在越南，問年齡是為了決定該怎麼稱呼對方（哥哥、姊姊、叔叔），所以並不沒禮貌喔！",
          image_file: "how_old.png",
        },
      ],
    },
    {
      id: "time_place_vn",
      name: "表達場所和時間的單字",
      items: [
        {
          id: "tp-01",
          term_zh: "現在",
          related_terms: [
            {
              term_target: "Bây giờ",
              pronunciation: ["/ɓəj˧˧ zəː˨˩/"],
              specific_note: "目前的時刻。",
              segments: [
                { text: "Bây", meaning: "當下", tail: " " },
                { text: "giờ", meaning: "小時/時刻", tail: "" },
              ],
            },
            {
              term_target: "Giờ",
              pronunciation: ["/zəː˨˩/"],
              specific_note: "口語簡化說法。",
              segments: [{ text: "Giờ", meaning: "現在", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bây giờ đi luôn nhé!",
              translation: "現在就馬上走喔！",
              segments: [
                { text: "Bây giờ", meaning: "現在", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "luôn", meaning: "直接/馬上", tail: " " },
                { text: "nhé", meaning: "喔(語助)", tail: "!" },
              ],
            },
            {
              sentence: "Giờ em đang ở đâu?",
              translation: "妳現在在哪裡？",
              segments: [
                { text: "Giờ", meaning: "現在", tail: " " },
                { text: "em", meaning: "妳", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "口語中常縮短成 Giờ，聽起來很俐落。",
          image_file: "now.png",
        },
        {
          id: "tp-02",
          term_zh: "今天",
          related_terms: [
            {
              term_target: "Hôm nay",
              pronunciation: ["/hom˧˧ naj˧˧/"],
              specific_note: "本日。",
              segments: [
                { text: "Hôm", meaning: "天/日", tail: " " },
                { text: "nay", meaning: "這", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hôm nay nóng quá!",
              translation: "今天太熱了！",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "nóng", meaning: "熱", tail: " " },
                { text: "quá", meaning: "太/真", tail: "!" },
              ],
            },
          ],
          usage_note: "越南人見面常說『Hôm nay thế nào?』（今天過得怎樣？）。",
          image_file: "today.png",
        },
        {
          id: "tp-03",
          term_zh: "明天",
          related_terms: [
            {
              term_target: "Ngày mai",
              pronunciation: ["/ŋaj˨˩ maj˧˧/"],
              specific_note: "隔天。",
              segments: [
                { text: "Ngày", meaning: "日", tail: " " },
                { text: "mai", meaning: "明", tail: "" },
              ],
            },
            {
              term_target: "Mai",
              pronunciation: ["/maj˧˧/"],
              specific_note: "口語縮寫。",
              segments: [{ text: "Mai", meaning: "明天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mai gặp lại nhé.",
              translation: "明天見喔。",
              segments: [
                { text: "Mai", meaning: "明天", tail: " " },
                { text: "gặp lại", meaning: "再見面", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
          ],
          usage_note: "朋友道別最常用『Mai gặp!』（明天見）。",
          image_file: "tomorrow.png",
        },
        {
          id: "tp-04",
          term_zh: "昨天",
          related_terms: [
            {
              term_target: "Hôm qua",
              pronunciation: ["/hom˧˧ kwaː˧˧/"],
              specific_note: "前一天。",
              segments: [
                { text: "Hôm", meaning: "天", tail: " " },
                { text: "qua", meaning: "過/過去", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hôm qua vui ghê!",
              translation: "昨天真開心！",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "vui", meaning: "開心", tail: " " },
                { text: "ghê", meaning: "真/厲害(語助)", tail: "!" },
              ],
            },
          ],
          usage_note: "指時間時放在句首或句尾都可以。",
          image_file: "yesterday.png",
        },
        {
          id: "tp-05",
          term_zh: "這裡",
          related_terms: [
            {
              term_target: "Ở đây",
              pronunciation: ["/əː˧˩ ɗəj˧˧/"],
              specific_note: "在這邊。",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đây", meaning: "這", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Lại đây chơi.",
              translation: "來這玩。",
              segments: [
                { text: "Lại", meaning: "來到", tail: " " },
                { text: "đây", meaning: "這/這裡", tail: " " },
                { text: "chơi", meaning: "玩", tail: "." },
              ],
            },
            {
              sentence: "Dừng ở đây ạ.",
              translation: "（對司機說）停在這裡喔。",
              segments: [
                { text: "Dừng", meaning: "停", tail: " " },
                { text: "ở đây", meaning: "這裡", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "." },
              ],
            },
          ],
          usage_note: "『Ăn đây hay mang về?』意思是「在這裡吃還是外帶？」。",
          image_file: "here.png",
        },
        {
          id: "tp-06",
          term_zh: "那裡",
          related_terms: [
            {
              term_target: "Ở đó",
              pronunciation: ["/əː˧˩ ɗɔ˧˥/"],
              specific_note: "在那裡（剛提到的或稍遠處）。",
              segments: [
                { text: "Ở", meaning: "在", tail: " " },
                { text: "đó", meaning: "那", tail: "" },
              ],
            },
            {
              term_target: "Đằng kia",
              pronunciation: ["/ɗaŋ˨˩ kiə˧˧/"],
              specific_note: "在那邊（視覺上較遠的地方）。",
              segments: [
                { text: "Đằng", meaning: "方/向", tail: " " },
                { text: "kia", meaning: "那", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nhìn đằng kia kìa!",
              translation: "看那邊那邊！",
              segments: [
                { text: "Nhìn", meaning: "看", tail: " " },
                { text: "đằng kia", meaning: "那邊", tail: " " },
                { text: "kìa", meaning: "喏/那個(加強)", tail: "!" },
              ],
            },
          ],
          usage_note: "問路看到對方指著遠處，通常會聽到 Đằng kia。",
          image_file: "there.png",
        },
        {
          id: "tp-07",
          term_zh: "天 / 日",
          related_terms: [
            {
              term_target: "Ngày",
              pronunciation: ["/ŋaj˨˩/"],
              specific_note: "日子、天。",
              segments: [{ text: "Ngày", meaning: "天", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mỗi ngày em đều học tiếng Việt.",
              translation: "我每天都學越南語。",
              segments: [
                { text: "Mỗi ngày", meaning: "每天", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "đều", meaning: "都", tail: " " },
                { text: "học", meaning: "學", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: "." },
              ],
            },
          ],
          usage_note: "『Ngày lễ』是節日。",
          image_file: "day.png",
        },
        {
          id: "tp-08",
          term_zh: "年",
          related_terms: [
            {
              term_target: "Năm",
              pronunciation: ["/năm˧˧/"],
              specific_note: "年份、歲。",
              segments: [{ text: "Năm", meaning: "年", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Năm nay em bao nhiêu tuổi?",
              translation: "你今年幾歲？",
              segments: [
                { text: "Năm nay", meaning: "今年", tail: " " },
                { text: "em", meaning: "你", tail: " " },
                { text: "bao nhiêu", meaning: "多少", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "?" },
              ],
            },
          ],
          usage_note: "注意：去年叫 Năm ngoái，而不是 Năm trước。",
          image_file: "year.png",
        },
        {
          id: "tp-09",
          term_zh: "月",
          related_terms: [
            {
              term_target: "Tháng",
              pronunciation: ["/tʰaːŋ˧˥/"],
              specific_note: "月份。",
              segments: [{ text: "Tháng", meaning: "月", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tháng sau em về Đài Loan.",
              translation: "下個月我回台灣。",
              segments: [
                { text: "Tháng sau", meaning: "下個月", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "về", meaning: "回", tail: " " },
                { text: "Đài Loan", meaning: "台灣", tail: "." },
              ],
            },
          ],
          usage_note: "月份名稱很簡單：Tháng 1, Tháng 2... 直接加數字。",
          image_file: "month.png",
        },
        {
          id: "tp-10",
          term_zh: "週 / 星期",
          related_terms: [
            {
              term_target: "Tuần",
              pronunciation: ["/tuən˨˩/"],
              specific_note: "週（漢越音：週）。",
              segments: [{ text: "Tuần", meaning: "週", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cuối tuần đi chơi đi!",
              translation: "週末去玩吧！",
              segments: [
                { text: "Cuối tuần", meaning: "週末", tail: " " },
                { text: "đi chơi", meaning: "去玩", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note:
            "『週一』不叫 Thứ 1，而是從 Thứ 2 開始算（因為週日是第一個日子）。",
          image_file: "week.png",
        },
        {
          id: "tp-11",
          term_zh: "早上",
          related_terms: [
            {
              term_target: "Buổi sáng",
              pronunciation: ["/ɓuəj˧˩ saːŋ˧˥/"],
              specific_note: "早晨（5:00 - 11:00）。",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "sáng", meaning: "早/亮", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Sáng nay anh ăn gì?",
              translation: "今天早上你吃什麼？",
              segments: [
                { text: "Sáng nay", meaning: "今天早上", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "gì", meaning: "什麼", tail: "?" },
              ],
            },
          ],
          usage_note: "早餐叫 Ăn sáng。",
          image_file: "morning.png",
        },
        {
          id: "tp-12",
          term_zh: "下午",
          related_terms: [
            {
              term_target: "Buổi chiều",
              pronunciation: ["/ɓuəj˧˩ ciəw˨˩/"],
              specific_note: "下午（14:00 - 18:00）。",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "chiều", meaning: "下午", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Chiều nay em rảnh không?",
              translation: "今天下午妳有空嗎？",
              segments: [
                { text: "Chiều nay", meaning: "今天下午", tail: " " },
                { text: "em", meaning: "妳", tail: " " },
                { text: "rảnh", meaning: "有空", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "『Chiều tà』是指傍晚太陽下山時。",
          image_file: "afternoon.png",
        },
        {
          id: "tp-13",
          term_zh: "晚上",
          related_terms: [
            {
              term_target: "Buổi tối",
              pronunciation: ["/ɓuəj˧˩ toj˧˥/"],
              specific_note: "晚上（18:00 - 22:00）。",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "tối", meaning: "黑/晚", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tối nay đi uống bia không?",
              translation: "今晚去喝啤酒嗎？",
              segments: [
                { text: "Tối nay", meaning: "今晚", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "uống", meaning: "喝", tail: " " },
                { text: "bia", meaning: "啤酒", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "晚上見面打招呼用『Chào buổi tối』。",
          image_file: "evening.png",
        },
        {
          id: "tp-14",
          term_zh: "中午",
          related_terms: [
            {
              term_target: "Buổi trưa",
              pronunciation: ["/ɓuəj˧˩ cɨə˧˧/"],
              specific_note: "中午（11:00 - 14:00）。",
              segments: [
                { text: "Buổi", meaning: "時段", tail: " " },
                { text: "trưa", meaning: "中午", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nghỉ trưa một chút.",
              translation: "午休一下。",
              segments: [
                { text: "Nghỉ trưa", meaning: "午休", tail: " " },
                { text: "một chút", meaning: "一點點", tail: "." },
              ],
            },
          ],
          usage_note: "越南人有非常強烈的午睡（Ngủ trưa）習慣。",
          image_file: "noon.png",
        },
        {
          id: "tp-15",
          term_zh: "前面",
          related_terms: [
            {
              term_target: "Đằng trước",
              pronunciation: ["/ɗaŋ˨˩ cɨək˧˥/"],
              specific_note: "在前方。",
              segments: [
                { text: "Đằng", meaning: "向/面", tail: " " },
                { text: "trước", meaning: "前", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nhà em ở ngay đằng trước.",
              translation: "我家就在前面。",
              segments: [
                { text: "Nhà em", meaning: "我家", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "ngay", meaning: "就/立刻", tail: " " },
                { text: "đằng trước", meaning: "前面", tail: "." },
              ],
            },
          ],
          usage_note: "指方向時很常用。",
          image_file: "front.png",
        },
        {
          id: "tp-16",
          term_zh: "後面",
          related_terms: [
            {
              term_target: "Đằng sau",
              pronunciation: ["/ɗaŋ˨˩ saːw˧˧/"],
              specific_note: "在後方。",
              segments: [
                { text: "Đằng", meaning: "面", tail: " " },
                { text: "sau", meaning: "後", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Đi cửa đằng sau.",
              translation: "走後門。",
              segments: [
                { text: "Đi", meaning: "走", tail: " " },
                { text: "cửa", meaning: "門", tail: " " },
                { text: "đằng sau", meaning: "後面", tail: "." },
              ],
            },
          ],
          usage_note: "『Phía sau』也是後面的意思，較為正式。",
          image_file: "behind.png",
        },
        {
          id: "tp-17",
          term_zh: "左邊",
          related_terms: [
            {
              term_target: "Bên trái",
              pronunciation: ["/ɓen˧˧ caːj˧˥/"],
              specific_note: "左側。",
              segments: [
                { text: "Bên", meaning: "側/邊", tail: " " },
                { text: "trái", meaning: "左", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Rẽ trái nhé anh.",
              translation: "哥，（等下）左轉喔。",
              segments: [
                { text: "Rẽ trái", meaning: "左轉", tail: " " },
                { text: "nhé", meaning: "喔", tail: " " },
                { text: "anh", meaning: "你(司機)", tail: "." },
              ],
            },
          ],
          usage_note: "搭車指路必備。",
          image_file: "left.png",
        },
        {
          id: "tp-18",
          term_zh: "右邊",
          related_terms: [
            {
              term_target: "Bên phải",
              pronunciation: ["/ɓen˧˧ faːj˧˩/"],
              specific_note: "右側。",
              segments: [
                { text: "Bên", meaning: "側/邊", tail: " " },
                { text: "phải", meaning: "右", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nó ở bên phải đường.",
              translation: "它在馬路右邊。",
              segments: [
                { text: "Nó", meaning: "它", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "bên phải", meaning: "右邊", tail: " " },
                { text: "đường", meaning: "路", tail: "." },
              ],
            },
          ],
          usage_note: "注意：Phải 同時也有「必須、正確」的意思。",
          image_file: "right.png",
        },
        {
          id: "tp-19",
          term_zh: "旁邊",
          related_terms: [
            {
              term_target: "Bên cạnh",
              pronunciation: ["/ɓen˧˧ ka̰ːɲ˨˩/"],
              specific_note: "在身邊、隔壁。",
              segments: [
                { text: "Bên", meaning: "側", tail: " " },
                { text: "cạnh", meaning: "邊/稜", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Ngồi bên cạnh em.",
              translation: "坐在我旁邊。",
              segments: [
                { text: "Ngồi", meaning: "坐", tail: " " },
                { text: "bên cạnh", meaning: "旁邊", tail: " " },
                { text: "em", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "形容位置很靠近。",
          image_file: "beside.png",
        },
        {
          id: "tp-20",
          term_zh: "對面",
          related_terms: [
            {
              term_target: "Đối diện",
              pronunciation: ["/ɗoj˧˥ ziən˨˩/"],
              specific_note: "正對著（漢越音：對面）。",
              segments: [
                { text: "Đối", meaning: "對", tail: "" },
                { text: "diện", meaning: "面", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Khách sạn ở đối diện chợ.",
              translation: "飯店在市場對面。",
              segments: [
                { text: "Khách sạn", meaning: "飯店", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "đối diện", meaning: "對面", tail: " " },
                { text: "chợ", meaning: "市場", tail: "." },
              ],
            },
          ],
          usage_note: "找標的物時非常好用。",
          image_file: "across_from.png",
        },
        {
          id: "tp-21",
          term_zh: "春天",
          related_terms: [
            {
              term_target: "Mùa xuân",
              pronunciation: ["/muə˨˩ swən˧˧/"],
              specific_note: "一年之始（漢越音：季節 春）。",
              segments: [
                { text: "Mùa", meaning: "季節", tail: " " },
                { text: "xuân", meaning: "春", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa xuân có Tết.",
              translation: "春天有春節（過年）。",
              segments: [
                { text: "Mùa xuân", meaning: "春天", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "Tết", meaning: "春節/過年", tail: "." },
              ],
            },
          ],
          usage_note: "春天是越南最重要的季節，因為有農曆新年。",
          image_file: "spring.png",
        },
        {
          id: "tp-22",
          term_zh: "夏天",
          related_terms: [
            {
              term_target: "Mùa hè",
              pronunciation: ["/muə˨˩ hɛ˨˩/"],
              specific_note: "北越常用此詞。",
              segments: [
                { text: "Mùa", meaning: "季節", tail: " " },
                { text: "hè", meaning: "夏", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa hè đi tắm biển.",
              translation: "夏天去海水浴場（游泳）。",
              segments: [
                { text: "Mùa hè", meaning: "夏天", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "tắm biển", meaning: "洗澡大海/游泳", tail: "." },
              ],
            },
          ],
          usage_note: "南越人有時會說 Mùa nắng (陽光季/旱季)。",
          image_file: "summer.png",
        },
        {
          id: "tp-23",
          term_zh: "秋天",
          related_terms: [
            {
              term_target: "Mùa thu",
              pronunciation: ["/muə˨˩ tʰu˧˧/"],
              specific_note: "漢越音：季節 秋。",
              segments: [
                { text: "Mùa", meaning: "季節", tail: " " },
                { text: "thu", meaning: "秋", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa thu Hà Nội rất đẹp.",
              translation: "河內的秋天非常美。",
              segments: [
                { text: "Mùa thu", meaning: "秋天", tail: " " },
                { text: "Hà Nội", meaning: "河內", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "đẹp", meaning: "美", tail: "." },
              ],
            },
          ],
          usage_note: "河內的秋天是越南最浪漫的旅遊時節。",
          image_file: "autumn.png",
        },
        {
          id: "tp-24",
          term_zh: "冬天",
          related_terms: [
            {
              term_target: "Mùa đông",
              pronunciation: ["/muə˨˩ ɗəwŋm˧˧/"],
              specific_note: "漢越音：季節 冬。",
              segments: [
                { text: "Mùa", meaning: "季節", tail: " " },
                { text: "đông", meaning: "冬", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mùa đông rất lạnh.",
              translation: "冬天非常冷。",
              segments: [
                { text: "Mùa đông", meaning: "冬天", tail: " " },
                { text: "rất", meaning: "非常", tail: " " },
                { text: "lạnh", meaning: "冷", tail: "." },
              ],
            },
          ],
          usage_note: "南越沒有冬天，但北越（如河內）冬天會低於10度喔！",
          image_file: "winter.png",
        },
      ],
    },
    {
      id: "conjunctions_vn",
      name: "常用連接詞",
      items: [
        {
          id: "conj-01",
          term_zh: "或者 / 還是",
          related_terms: [
            {
              term_target: "Hay",
              pronunciation: ["/haj˧˧/"],
              specific_note: "專用於問句中的「或者」（二選一）。",
              segments: [{ text: "Hay", meaning: "或者/還是", tail: "" }],
            },
            {
              term_target: "Hoặc",
              pronunciation: ["/hwək˨˩/"],
              specific_note: "用於肯定句中的「或者」。",
              segments: [{ text: "Hoặc", meaning: "或者", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Uống trà hay cà phê?",
              translation: "喝茶還是咖啡？",
              segments: [
                { text: "Uống", meaning: "喝", tail: " " },
                { text: "trà", meaning: "茶", tail: " " },
                { text: "hay", meaning: "還是", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: "?" },
              ],
            },
            {
              sentence: "Hôm nay hoặc ngày mai đều được.",
              translation: "今天或者明天都可以。",
              segments: [
                { text: "Hôm nay", meaning: "今天", tail: " " },
                { text: "hoặc", meaning: "或者", tail: " " },
                { text: "ngày mai", meaning: "明天", tail: " " },
                { text: "đều được", meaning: "都可以", tail: "." },
              ],
            },
            {
              sentence: "Anh đi bằng Grab hay taxi?",
              translation: "你搭 Grab 還是計程車？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "đi", meaning: "去/搭乘", tail: " " },
                { text: "bằng", meaning: "藉由", tail: " " },
                { text: "Grab", meaning: "叫車軟體", tail: " " },
                { text: "hay", meaning: "還是", tail: " " },
                { text: "taxi", meaning: "計程車", tail: "?" },
              ],
            },
          ],
          usage_note:
            "問別人要選哪個，請務必用 Hay。如果是陳述事實，則用 Hoặc。",
          image_file: "or.png",
        },
        {
          id: "conj-02",
          term_zh: "但是",
          related_terms: [
            {
              term_target: "Nhưng",
              pronunciation: ["/ɲɨŋ˧˧/"],
              specific_note: "最通用的「但是」。",
              segments: [{ text: "Nhưng", meaning: "但是", tail: "" }],
            },
            {
              term_target: "Nhưng mà",
              pronunciation: ["/ɲɨŋ˧˧ maː˨˩/"],
              specific_note: "更口語的說法，語氣較軟。",
              segments: [
                { text: "Nhưng", meaning: "但", tail: " " },
                { text: "mà", meaning: "而/語氣助詞", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Cái này đẹp nhưng đắt quá.",
              translation: "這個漂亮，但是太貴了。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "đẹp", meaning: "漂亮", tail: " " },
                { text: "nhưng", meaning: "但是", tail: " " },
                { text: "đắt", meaning: "貴", tail: " " },
                { text: "quá", meaning: "太", tail: "." },
              ],
            },
            {
              sentence: "Em muốn đi, nhưng mà em bận.",
              translation: "我想去，但是我很忙。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "đi", meaning: "去", tail: ", " },
                { text: "nhưng mà", meaning: "但是", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "bận", meaning: "忙", tail: "." },
              ],
            },
          ],
          usage_note: "口語中越南人常連讀為『Nhưng mà』。",
          image_file: "but.png",
        },
        {
          id: "conj-03",
          term_zh: "所以 / 因而",
          related_terms: [
            {
              term_target: "Nên",
              pronunciation: ["/nen˧˧/"],
              specific_note: "表示結果，最常用。",
              segments: [{ text: "Nên", meaning: "所以", tail: "" }],
            },
            {
              term_target: "Cho nên",
              pronunciation: ["/cɔ˧˧ nen˧˧/"],
              specific_note: "較正式或強調結果。",
              segments: [
                { text: "Cho", meaning: "使", tail: " " },
                { text: "nên", meaning: "所以", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em đói nên em ăn.",
              translation: "我餓了，所以我吃東西。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đói", meaning: "餓", tail: " " },
                { text: "nên", meaning: "所以", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "ăn", meaning: "吃", tail: "." },
              ],
            },
            {
              sentence: "Trời mưa nên đi taxi đi.",
              translation: "下雨了，所以搭計程車吧。",
              segments: [
                { text: "Trời mưa", meaning: "天雨/下雨", tail: " " },
                { text: "nên", meaning: "所以", tail: " " },
                { text: "đi", meaning: "搭乘/去", tail: " " },
                { text: "taxi", meaning: "計程車", tail: " " },
                { text: "đi", meaning: "吧(祈使)", tail: "." },
              ],
            },
          ],
          usage_note: "口語中單用一個 Nên 放在句子中間連接結果非常方便。",
          image_file: "so.png",
        },
        {
          id: "conj-04",
          term_zh: "和 / 跟 / 以及",
          related_terms: [
            {
              term_target: "Và",
              pronunciation: ["/vaː˨˩/"],
              specific_note: "標準的「和」，用於連結兩個並列的東西。",
              segments: [{ text: "Và", meaning: "和", tail: "" }],
            },
            {
              term_target: "Với",
              pronunciation: ["/vəj˧˥/"],
              specific_note: "口語中常當作「跟...一起」。",
              segments: [{ text: "Với", meaning: "跟/與", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh và em.",
              translation: "你和我。",
              segments: [
                { text: "Anh", meaning: "哥(你)", tail: " " },
                { text: "và", meaning: "和", tail: " " },
                { text: "em", meaning: "妹(我)", tail: "." },
              ],
            },
            {
              sentence: "Cho em bánh mì với trứng.",
              translation: "給我一份麵包（和）加蛋。",
              segments: [
                { text: "Cho em", meaning: "給我", tail: " " },
                { text: "bánh mì", meaning: "法國麵包", tail: " " },
                { text: "với", meaning: "跟/與", tail: " " },
                { text: "trứng", meaning: "雞蛋", tail: "." },
              ],
            },
          ],
          usage_note:
            "點餐時想在主要食物外加點東西，用 Với 會比 Và 更有「加點」的感覺。",
          image_file: "and.png",
        },
        {
          id: "conj-05",
          term_zh: "因為",
          related_terms: [
            {
              term_target: "Vì",
              pronunciation: ["/vi˨˩/"],
              specific_note: "解釋原因，最簡便。",
              segments: [{ text: "Vì", meaning: "因", tail: "" }],
            },
            {
              term_target: "Tại vì",
              pronunciation: ["/taːj˨˩ vi˨˩/"],
              specific_note: "更強烈地強調原因，類似「都是因為...」。",
              segments: [
                { text: "Tại", meaning: "由於", tail: " " },
                { text: "vì", meaning: "因為", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em đến muộn vì tắc đường.",
              translation: "我遲到了，因為塞車。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đến muộn", meaning: "來晚/遲到", tail: " " },
                { text: "vì", meaning: "因為", tail: " " },
                { text: "tắc đường", meaning: "塞車/堵路", tail: "." },
              ],
            },
            {
              sentence: "Em thích vì nó tốt.",
              translation: "我喜歡是因為它很好。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "vì", meaning: "因為", tail: " " },
                { text: "nó", meaning: "它", tail: " " },
                { text: "tốt", meaning: "好", tail: "." },
              ],
            },
          ],
          usage_note: "越南交通繁忙，『Tắc đường』（塞車）是遲到最常用的理由。",
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
          term_zh: "和...一起 / 與",
          related_terms: [
            {
              term_target: "Với",
              pronunciation: ["/vəj˧˥/"],
              specific_note: "伴隨某人或在飲料中添加東西。",
              segments: [{ text: "Với", meaning: "和/與/加", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi chơi với em nhé.",
              translation: "跟我一起去玩喔。",
              segments: [
                { text: "Đi chơi", meaning: "去玩", tail: " " },
                { text: "với", meaning: "和", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "nhé", meaning: "喔", tail: "." },
              ],
            },
            {
              sentence: "Cà phê sữa với nhiều đá.",
              translation: "奶咖（加）多一點冰塊。",
              segments: [
                { text: "Cà phê sữa", meaning: "奶咖", tail: " " },
                { text: "với", meaning: "加/與", tail: " " },
                { text: "nhiều", meaning: "多", tail: " " },
                { text: "đá", meaning: "冰塊", tail: "." },
              ],
            },
          ],
          usage_note: "點餐時想加料（如加蛋、加冰）可以用 với。",
          image_file: "with.png",
        },
        {
          id: "prep-02",
          term_zh: "從... / 來自",
          related_terms: [
            {
              term_target: "Từ",
              pronunciation: ["/tɨ˨˩/"],
              specific_note: "時間或空間的起點。",
              segments: [{ text: "Từ", meaning: "從", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em đến từ Đài Loan.",
              translation: "我來自台灣。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
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
                { text: "sáng", meaning: "早上", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "tối", meaning: "晚上", tail: "." },
              ],
            },
          ],
          usage_note: "自我介紹必備：『Đến từ + 地名』。",
          image_file: "from.png",
        },
        {
          id: "prep-03",
          term_zh: "給 / 為了",
          related_terms: [
            {
              term_target: "Cho",
              pronunciation: ["/cɔ˧˧/"],
              specific_note: "給予某人，或為了某個對象。",
              segments: [{ text: "Cho", meaning: "給/為了", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này cho anh.",
              translation: "這個給你（哥）。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "anh", meaning: "哥(你)", tail: "." },
              ],
            },
            {
              sentence: "Làm cho vui thôi.",
              translation: "只是做開心的而已（為了好玩）。",
              segments: [
                { text: "Làm", meaning: "做", tail: " " },
                { text: "cho", meaning: "為了/使", tail: " " },
                { text: "vui", meaning: "開心", tail: " " },
                { text: "thôi", meaning: "而已", tail: "." },
              ],
            },
          ],
          usage_note: "Cho 可以當動詞「給」，也可以當介系詞「為」。",
          image_file: "for.png",
        },
        {
          id: "prep-04",
          term_zh: "...的 (所有格)",
          related_terms: [
            {
              term_target: "Của",
              pronunciation: ["/kuə˧˩/"],
              specific_note: "屬於...的。",
              segments: [{ text: "Của", meaning: "的", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đây là xe của em.",
              translation: "這是我的車。",
              segments: [
                { text: "Đây", meaning: "這", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "xe", meaning: "車", tail: " " },
                { text: "của", meaning: "的", tail: " " },
                { text: "em", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "結構與中文相反：『物品 + Của + 人』。",
          image_file: "of.png",
        },
        {
          id: "prep-05",
          term_zh: "在... (場所/時間)",
          related_terms: [
            {
              term_target: "Ở",
              pronunciation: ["/əː˧˩/"],
              specific_note: "指地點（在某處）。",
              segments: [{ text: "Ở", meaning: "在", tail: "" }],
            },
            {
              term_target: "Lúc",
              pronunciation: ["/luk˧˥/"],
              specific_note: "指時間（在某點）。",
              segments: [{ text: "Lúc", meaning: "在(時間)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em ở khách sạn.",
              translation: "我在飯店。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "ở", meaning: "在", tail: " " },
                { text: "khách sạn", meaning: "飯店", tail: "." },
              ],
            },
            {
              sentence: "Gặp nhau lúc 7 giờ.",
              translation: "7點見面。",
              segments: [
                { text: "Gặp nhau", meaning: "見面", tail: " " },
                { text: "lúc", meaning: "在", tail: " " },
                { text: "7 giờ", meaning: "七點", tail: "." },
              ],
            },
          ],
          usage_note: "問人在哪裡用 Ở đâu?，問什麼時候用 Lúc nào?。",
          image_file: "at_in.png",
        },
        {
          id: "prep-06",
          term_zh: "往... / 到...",
          related_terms: [
            {
              term_target: "Đến",
              pronunciation: ["/ɗen˧˥/"],
              specific_note: "抵達目的地。",
              segments: [{ text: "Đến", meaning: "到", tail: "" }],
            },
            {
              term_target: "Tới",
              pronunciation: ["/təj˧˥/"],
              specific_note: "到、往（口語常用）。",
              segments: [{ text: "Tới", meaning: "到/往", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi tới trường.",
              translation: "去學校。",
              segments: [
                { text: "Đi", meaning: "去", tail: " " },
                { text: "tới", meaning: "到/往", tail: " " },
                { text: "trường", meaning: "學校", tail: "." },
              ],
            },
          ],
          usage_note: "搭 Grab 告訴司機目的地時可以說『Tới + 地點』。",
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
              pronunciation: ["/xoŋ˧˧/"],
              specific_note: "零。報電話號碼或編號時常用。",
              segments: [{ text: "Không", meaning: "零", tail: "" }],
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
              translation: "零度。",
              segments: [
                { text: "Không", meaning: "零", tail: " " },
                { text: "độ", meaning: "度", tail: "." },
              ],
            },
          ],
          usage_note: "Không 同時也是『不』的意思，要看語境區分喔。",
          image_file: "zero.png",
        },
        {
          id: "num-1",
          term_zh: "1",
          related_terms: [
            {
              term_target: "Một",
              pronunciation: ["/mot˨˩/"],
              specific_note: "一。發音很像台語的「莫」。",
              segments: [{ text: "Một", meaning: "一", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cho em một ly trà sữa.",
              translation: "給我一杯奶茶。",
              segments: [
                { text: "Cho em", meaning: "給我", tail: " " },
                { text: "một", meaning: "一", tail: " " },
                { text: "ly", meaning: "杯", tail: " " },
                { text: "trà sữa", meaning: "奶茶", tail: "." },
              ],
            },
          ],
          usage_note: "如果是在 21, 31... 等尾數，1 會唸成 mốt。",
          image_file: "one.png",
        },
        {
          id: "num-2",
          term_zh: "2",
          related_terms: [
            {
              term_target: "Hai",
              pronunciation: ["/haːj˧˧/"],
              specific_note: "二。發音就像中文的「嗨」。",
              segments: [{ text: "Hai", meaning: "二", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hai người ạ.",
              translation: "（用餐）兩位喔。",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "người", meaning: "人/位", tail: " " },
                { text: "ạ", meaning: "敬語", tail: "." },
              ],
            },
          ],
          usage_note: "點餐、報人數最常用。",
          image_file: "two.png",
        },
        {
          id: "num-3",
          term_zh: "3",
          related_terms: [
            {
              term_target: "Ba",
              pronunciation: ["/ɓaː˧˧/"],
              specific_note: "三。發音像中文的「爸」。",
              segments: [{ text: "Ba", meaning: "三", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Một, hai, ba, dô!",
              translation: "一、二、三，乾杯！",
              segments: [
                { text: "Một, hai, ba", meaning: "1, 2, 3", tail: ", " },
                { text: "dô", meaning: "進(乾杯口號)", tail: "!" },
              ],
            },
          ],
          usage_note: "Ba 在南越也是「爸爸」的意思。",
          image_file: "three.png",
        },
        {
          id: "num-4",
          term_zh: "4",
          related_terms: [
            {
              term_target: "Bốn",
              pronunciation: ["/ɓon˧˥/"],
              specific_note: "四。",
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
          ],
          usage_note: "序數「第四」會唸成 Tư。",
          image_file: "four.png",
        },
        {
          id: "num-5",
          term_zh: "5",
          related_terms: [
            {
              term_target: "Năm",
              pronunciation: ["/năm˧˧/"],
              specific_note: "五。發音像中文的「男」。",
              segments: [{ text: "Năm", meaning: "五", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Năm phút nữa.",
              translation: "再五分鐘。",
              segments: [
                { text: "Năm", meaning: "五", tail: " " },
                { text: "phút", meaning: "分鐘", tail: " " },
                { text: "nữa", meaning: "再/更加", tail: "." },
              ],
            },
          ],
          usage_note: "當 5 出現在尾數（如15, 25）時，會變音唸成 lăm。",
          image_file: "five.png",
        },
        {
          id: "num-6",
          term_zh: "6",
          related_terms: [
            {
              term_target: "Sáu",
              pronunciation: ["/saːw˧˥/"],
              specific_note: "六。",
              segments: [{ text: "Sáu", meaning: "六", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Sáu giờ sáng.",
              translation: "早上六點。",
              segments: [
                { text: "Sáu", meaning: "六", tail: " " },
                { text: "giờ", meaning: "點", tail: " " },
                { text: "sáng", meaning: "早", tail: "." },
              ],
            },
          ],
          usage_note: "發音像中文的「掃」（上聲）。",
          image_file: "six.png",
        },
        {
          id: "num-7",
          term_zh: "7",
          related_terms: [
            {
              term_target: "Bảy",
              pronunciation: ["/ɓaj˧˩/"],
              specific_note: "七。",
              segments: [{ text: "Bảy", meaning: "七", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Thứ Bảy.",
              translation: "星期六（注意：越南週六是第7個日子）。",
              segments: [
                { text: "Thứ", meaning: "序數/第", tail: " " },
                { text: "Bảy", meaning: "七", tail: "." },
              ],
            },
          ],
          usage_note: "發音像中文的「百」（問項調）。",
          image_file: "seven.png",
        },
        {
          id: "num-8",
          term_zh: "8",
          related_terms: [
            {
              term_target: "Tám",
              pronunciation: ["/taːm˧˥/"],
              specific_note: "八。",
              segments: [{ text: "Tám", meaning: "八", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Tám nghìn.",
              translation: "八千。",
              segments: [
                { text: "Tám", meaning: "八", tail: " " },
                { text: "nghìn", meaning: "千", tail: "." },
              ],
            },
          ],
          usage_note: "發音像中文的「擔」（去聲）。",
          image_file: "eight.png",
        },
        {
          id: "num-9",
          term_zh: "9",
          related_terms: [
            {
              term_target: "Chín",
              pronunciation: ["/cin˧˥/"],
              specific_note: "九。同時也是「成熟、煮熟」的意思。",
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
          ],
          usage_note: "發音像中文的「進」。",
          image_file: "nine.png",
        },
        {
          id: "num-10",
          term_zh: "10",
          related_terms: [
            {
              term_target: "Mười",
              pronunciation: ["/mɨəj˨˩/"],
              specific_note: "十。",
              segments: [{ text: "Mười", meaning: "十", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mười điểm!",
              translation: "十分！（滿分、太棒了）",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "điểm", meaning: "分", tail: "!" },
              ],
            },
          ],
          usage_note: "發音像中文的「每」（玄聲）。",
          image_file: "ten.png",
        },
        {
          id: "num-11",
          term_zh: "11",
          related_terms: [
            {
              term_target: "Mười một",
              pronunciation: ["/mɨəj˨˩ mot˨˩/"],
              specific_note: "十一。",
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
          ],
          usage_note: "11 到 19 的邏輯跟中文一樣：『十 + 個位數』。",
          image_file: "eleven.png",
        },
        {
          id: "num-12",
          term_zh: "12",
          related_terms: [
            {
              term_target: "Mười hai",
              pronunciation: ["/mɨəj˨˩ haːj˧˧/"],
              specific_note: "十二。",
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
          ],
          usage_note: "十二個月即一年。",
          image_file: "twelve.png",
        },
        {
          id: "num-15",
          term_zh: "15",
          related_terms: [
            {
              term_target: "Mười lăm",
              pronunciation: ["/mɨəj˨˩ lăm˧˧/"],
              specific_note: "十五（注意 5 變音為 lăm）。",
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
                { text: "phút", meaning: "分鐘", tail: "." },
              ],
            },
          ],
          usage_note: "這是新手最常唸錯的地方，不要唸成 Mười năm 喔！",
          image_file: "fifteen.png",
        },
        {
          id: "num-20",
          term_zh: "20",
          related_terms: [
            {
              term_target: "Hai mươi",
              pronunciation: ["/haːj˧˧ mɨəj˧˧/"],
              specific_note: "二十。",
              segments: [
                { text: "Hai", meaning: "二", tail: " " },
                { text: "mươi", meaning: "十(十位數專用)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Hai mươi tuổi.",
              translation: "二十歲。",
              segments: [
                { text: "Hai mươi", meaning: "二十", tail: " " },
                { text: "tuổi", meaning: "歲", tail: "." },
              ],
            },
          ],
          usage_note: "當 10 在十位數時，發音由 mười 變為平聲的 mươi。",
          image_file: "twenty.png",
        },
        {
          id: "num-50",
          term_zh: "50",
          related_terms: [
            {
              term_target: "Năm mươi",
              pronunciation: ["/năm˧˧ mɨəj˧˧/"],
              specific_note: "五十。",
              segments: [
                { text: "Năm", meaning: "五", tail: " " },
                { text: "mươi", meaning: "十", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Năm mươi phần trăm.",
              translation: "百分之五十（五成）。",
              segments: [
                { text: "Năm mươi", meaning: "五十", tail: " " },
                { text: "phần trăm", meaning: "百分比", tail: "." },
              ],
            },
          ],
          usage_note: "這裡的 5 在開頭，所以唸 năm 而不是 lăm。",
          image_file: "fifty.png",
        },
        {
          id: "num-100",
          term_zh: "100",
          related_terms: [
            {
              term_target: "Một trăm",
              pronunciation: ["/mot˨˩ cam˧˧/"],
              specific_note: "一百。",
              segments: [
                { text: "Một", meaning: "一", tail: " " },
                { text: "trăm", meaning: "百", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Một trăm phần trăm!",
              translation: "百分之百！（越南乾杯口號：乾啦！）",
              segments: [
                { text: "Một trăm", meaning: "一百", tail: " " },
                { text: "phần trăm", meaning: "百分之百", tail: "!" },
              ],
            },
          ],
          usage_note: "越南乾杯時喊這句最有氣氛。",
          image_file: "hundred.png",
        },
        {
          id: "num-1000",
          term_zh: "1000",
          related_terms: [
            {
              term_target: "Nghìn",
              pronunciation: ["/ŋiɲ˨˩/"],
              specific_note: "千（北越常用）。",
              segments: [{ text: "Nghìn", meaning: "千", tail: "" }],
            },
            {
              term_target: "Ngàn",
              pronunciation: ["/ŋaːn˨˩/"],
              specific_note: "千（南越常用）。",
              segments: [{ text: "Ngàn", meaning: "千", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Năm ngàn đồng.",
              translation: "五千越南盾。",
              segments: [
                { text: "Năm", meaning: "五", tail: " " },
                { text: "ngàn", meaning: "千", tail: " " },
                { text: "đồng", meaning: "盾(貨幣)", tail: "." },
              ],
            },
          ],
          usage_note: "越南盾面額大，報價通常以「千 (K)」為單位。",
          image_file: "thousand.png",
        },
        {
          id: "num-10000",
          term_zh: "10000",
          related_terms: [
            {
              term_target: "Mười ngàn",
              pronunciation: ["/mɨəj˨˩ ŋaːn˨˩/"],
              specific_note: "一萬（直譯為：十千）。",
              segments: [
                { text: "Mười", meaning: "十", tail: " " },
                { text: "ngàn", meaning: "千", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mười ngàn một cái.",
              translation: "一萬塊（十千）一個。",
              segments: [
                { text: "Mười ngàn", meaning: "一萬", tail: " " },
                { text: "một cái", meaning: "一個", tail: "." },
              ],
            },
          ],
          usage_note:
            "越南語沒有專門的『萬』，是以千為進位，所以一萬要說『十千』。",
          image_file: "ten_thousand.png",
        },
      ],
    },
    {
      id: "grammar_vn",
      name: "基礎句型與語法",
      items: [
        {
          id: "g-01",
          term_zh: "我是... / 我覺得... (狀態)",
          related_terms: [
            {
              term_target: "Tôi là... / Em... (adjective)",
              pronunciation: ["/toːj˧˧ laː˨˩/", "/ɛm˧˧/"],
              specific_note: "注意：越南語形容詞前不需要加「是 (là)」。",
              segments: [
                { text: "Tôi", meaning: "我", tail: " " },
                { text: "là", meaning: "是(接名詞)", tail: " " },
                { text: "...", meaning: "...", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em đói quá.",
              translation: "我好餓喔。",
              segments: [
                { text: "Em", meaning: "我(弟妹)", tail: " " },
                { text: "đói", meaning: "餓", tail: " " },
                { text: "quá", meaning: "太/真", tail: "." },
              ],
            },
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
              sentence: "Em mệt lắm.",
              translation: "我很累。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "mệt", meaning: "累", tail: " " },
                { text: "lắm", meaning: "非常", tail: "." },
              ],
            },
          ],
          usage_note:
            "只有『我是(名詞)』才要加 là。形容心境或身體狀況直接說『我+形容詞』就好。",
          image_file: "i_am.png",
        },
        {
          id: "g-02",
          term_zh: "我的名字叫～",
          related_terms: [
            {
              term_target: "Tên em là ～",
              pronunciation: ["/ten˧˧ ɛm˧˧ laː˨˩/"],
              specific_note: "自我介紹最常用的句型。",
              segments: [
                { text: "Tên", meaning: "名字", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "là", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Tên em là Lan.",
              translation: "我的名字叫蘭。",
              segments: [
                { text: "Tên em", meaning: "我的名字", tail: " " },
                { text: "là", meaning: "是", tail: " " },
                { text: "Lan", meaning: "蘭(人名)", tail: "." },
              ],
            },
            {
              sentence: "Em tên là Hùng, rất vui được gặp anh.",
              translation: "我名字叫雄，很高興見到你(哥)。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "tên là", meaning: "名叫", tail: " " },
                { text: "Hùng", meaning: "雄", tail: ", " },
                { text: "rất vui", meaning: "很高興", tail: " " },
                { text: "được gặp", meaning: "得以遇見", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: "." },
              ],
            },
          ],
          usage_note: "自我介紹也可以簡化成『Em là + 名字』。",
          image_file: "my_name_is.png",
        },
        {
          id: "g-03",
          term_zh: "我做～ (習慣)",
          related_terms: [
            {
              term_target: "Em (verb)",
              pronunciation: ["/ɛm˧˧/"],
              specific_note: "一般現在式。",
              segments: [{ text: "Em", meaning: "我", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em làm việc ở đây.",
              translation: "我在這裡工作。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "ở đây", meaning: "在這裡", tail: "." },
              ],
            },
            {
              sentence: "Sáng nào em cũng uống cà phê.",
              translation: "每天早上我都會喝咖啡。",
              segments: [
                { text: "Sáng nào", meaning: "每個早上", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "cũng", meaning: "也/都", tail: " " },
                { text: "uống", meaning: "喝", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: "." },
              ],
            },
          ],
          usage_note: "直接用『主詞 + 動詞』即可表達習慣。",
          image_file: "i_do.png",
        },
        {
          id: "g-04",
          term_zh: "我正在做～",
          related_terms: [
            {
              term_target: "Em đang ～",
              pronunciation: ["/ɛm˧˧ ɗaŋ˧˧/"],
              specific_note: "正在進行的動作。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em đang ăn cơm.",
              translation: "我正在吃飯。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "ăn cơm", meaning: "吃飯", tail: "." },
              ],
            },
            {
              sentence: "Đợi chút, anh đang lái xe.",
              translation: "等一下，我（哥）正在開車。",
              segments: [
                { text: "Đợi chút", meaning: "等一下", tail: ", " },
                { text: "anh", meaning: "哥(我)", tail: " " },
                { text: "đang", meaning: "正在", tail: " " },
                { text: "lái xe", meaning: "開車", tail: "." },
              ],
            },
          ],
          usage_note: "『Đang』直接放在動詞前面即可。",
          image_file: "ing.png",
        },
        {
          id: "g-05",
          term_zh: "我能夠 / 會～",
          related_terms: [
            {
              term_target: "Em biết... / ...được",
              pronunciation: ["/ɓiət˧˥/", "/ɗɨəʔ˨˩/"],
              specific_note: "技能用 biết，許可或結果用 được。",
              segments: [{ text: "biết", meaning: "知道/會", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em biết nói tiếng Việt một chút.",
              translation: "我會說一點點越南語。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "biết", meaning: "會", tail: " " },
                { text: "nói", meaning: "說", tail: " " },
                { text: "tiếng Việt", meaning: "越南語", tail: " " },
                { text: "một chút", meaning: "一點點", tail: "." },
              ],
            },
            {
              sentence: "Cái này ăn được không?",
              translation: "這個能吃嗎？",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "được", meaning: "能/可以", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "表達「可以」常用『動詞 + được』放在句尾。",
          image_file: "can.png",
        },
        {
          id: "g-06",
          term_zh: "我喜歡做～",
          related_terms: [
            {
              term_target: "Em thích ～",
              pronunciation: ["/ɛm˧˧ tʰik˧˥/"],
              specific_note: "表達喜好。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em thích đi du lịch.",
              translation: "我喜歡去旅行。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "đi du lịch", meaning: "去旅遊", tail: "." },
              ],
            },
            {
              sentence: "Anh thích uống bia không?",
              translation: "你（哥）喜歡喝啤酒嗎？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "uống bia", meaning: "喝啤酒", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "喜歡做某事，直接在 thích 後面加動詞，不用像英文加 ing。",
          image_file: "like_ing.png",
        },
        {
          id: "g-07",
          term_zh: "我曾經～ (過去狀態)",
          related_terms: [
            {
              term_target: "Em đã từng là ～",
              pronunciation: ["/ɗa˦ˀ˥ tɨŋ˨˩ laː˨˩/"],
              specific_note: "強調過去的經驗。",
              segments: [
                { text: "đã từng", meaning: "曾經", tail: " " },
                { text: "là", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em đã từng là sinh viên ở đây.",
              translation: "我以前曾在這邊當學生。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "đã từng là", meaning: "曾經是", tail: " " },
                { text: "sinh viên", meaning: "學生", tail: " " },
                { text: "ở đây", meaning: "在這裡", tail: "." },
              ],
            },
          ],
          usage_note: "越南語主要靠『Đã』表示過去發生過的事。",
          image_file: "i_was.png",
        },
        {
          id: "g-08",
          term_zh: "我做過～ (過去動作)",
          related_terms: [
            {
              term_target: "Em đã (verb)",
              pronunciation: ["/ɗa˦ˀ˥/"],
              specific_note: "發生過的動作。",
              segments: [{ text: "đã", meaning: "已經(過去式助詞)", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Hôm qua em đã xem phim đó.",
              translation: "昨天我看了那部電影。",
              segments: [
                { text: "Hôm qua", meaning: "昨天", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "đã", meaning: "已經/做了", tail: " " },
                { text: "xem", meaning: "看", tail: " " },
                { text: "phim đó", meaning: "那電影", tail: "." },
              ],
            },
          ],
          usage_note: "口語中如果已經有『昨天』，有時會省略 Đã。",
          image_file: "i_did.png",
        },
        {
          id: "g-09",
          term_zh: "我已做過～ (完成)",
          related_terms: [
            {
              term_target: "(verb) rồi",
              pronunciation: ["/zoj˨˩/"],
              specific_note: "放在句尾表示「了、已經」。",
              segments: [{ text: "rồi", meaning: "了/已經", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em làm xong rồi.",
              translation: "我已經做完了。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "làm xong", meaning: "做完", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
            {
              sentence: "Anh ăn rồi.",
              translation: "我（哥）吃過了。",
              segments: [
                { text: "Anh", meaning: "哥(我)", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "句尾的『Rồi』是越南語最靈魂的字，表示動作告一段落。",
          image_file: "i_have_done.png",
        },
        {
          id: "g-10",
          term_zh: "我曾去過～",
          related_terms: [
            {
              term_target: "Em đã từng đi ～",
              pronunciation: ["/ɗa˦ˀ˥ tɨŋ˨˩ ɗi˧˧/"],
              specific_note: "強調人生經驗。",
              segments: [
                { text: "đã từng", meaning: "曾經", tail: " " },
                { text: "đi", meaning: "去", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh đã từng đi Đà Lạt chưa?",
              translation: "你（哥）去過大叻了嗎？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "đã từng", meaning: "曾經", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "Đà Lạt", meaning: "大叻(地名)", tail: " " },
                { text: "chưa", meaning: "了嗎/還沒", tail: "?" },
              ],
            },
          ],
          usage_note:
            "問別人有沒有經驗，常用句型是『已經曾經...了沒？(đã từng...chưa?)』。",
          image_file: "have_been_to.png",
        },
        {
          id: "g-11",
          term_zh: "我打算 / 將會～",
          related_terms: [
            {
              term_target: "Em sẽ ～",
              pronunciation: ["/sɛ˦ˀ˥/"],
              specific_note: "未來式。",
              segments: [{ text: "sẽ", meaning: "將會", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Mai em sẽ gọi cho anh.",
              translation: "明天我會打電話給你（哥）。",
              segments: [
                { text: "Mai", meaning: "明天", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "sẽ", meaning: "將會", tail: " " },
                { text: "gọi", meaning: "打電話", tail: " " },
                { text: "cho", meaning: "給", tail: " " },
                { text: "anh", meaning: "哥(你)", tail: "." },
              ],
            },
          ],
          usage_note: "口語中如果已經有『等一下』或『明天』，sẽ 有時會被省略。",
          image_file: "i_will.png",
        },
        {
          id: "g-12",
          term_zh: "你是...嗎？ (狀態)",
          related_terms: [
            {
              term_target: "Anh có... không?",
              pronunciation: ["/kɔ˧˥/ ... /xoŋ˧˧/"],
              specific_note: "最通用的疑問句型。",
              segments: [
                { text: "có", meaning: "是否", tail: " " },
                { text: "...", meaning: "...", tail: " " },
                { text: "không", meaning: "嗎/不", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh có mệt không?",
              translation: "你（哥）累嗎？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "có", meaning: "有/是否", tail: " " },
                { text: "mệt", meaning: "累", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Món này có cay không?",
              translation: "這道菜辣嗎？",
              segments: [
                { text: "Món này", meaning: "這道菜", tail: " " },
                { text: "có", meaning: "是否", tail: " " },
                { text: "cay", meaning: "辣", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "問狀態或形容詞，固定套用『Có + Adj + Không?』。",
          image_file: "are_you.png",
        },
        {
          id: "g-13",
          term_zh: "你在做...嗎？",
          related_terms: [
            {
              term_target: "Anh (verb) không?",
              pronunciation: ["/xoŋ˧˧/"],
              specific_note: "詢問意願或正在進行的動作。",
              segments: [{ text: "không", meaning: "嗎", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh uống cà phê không?",
              translation: "你（哥）要喝咖啡嗎？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "uống", meaning: "喝", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
            {
              sentence: "Anh có hiểu không?",
              translation: "你懂嗎？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "có", meaning: "是否", tail: " " },
                { text: "hiểu", meaning: "明白", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "詢問對方意願（要不要...）時，直接在動詞後加 không。",
          image_file: "do_you.png",
        },
        {
          id: "g-14",
          term_zh: "你曾經...嗎？",
          related_terms: [
            {
              term_target: "Anh đã từng... chưa?",
              pronunciation: ["/ɗa˦ˀ˥ tɨŋ˨˩/ ... /cɨə˧˧/"],
              specific_note: "問經驗（了嗎？/過了嗎？）",
              segments: [
                { text: "đã từng", meaning: "曾經", tail: " " },
                { text: "...", meaning: "...", tail: " " },
                { text: "chưa", meaning: "沒/了嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh đã từng ăn phở chưa?",
              translation: "你（哥）吃過河粉了嗎？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "đã từng", meaning: "曾經", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "phở", meaning: "河粉", tail: " " },
                { text: "chưa", meaning: "了嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "這是越南人最愛問外國人的問題格式。",
          image_file: "have_you_ever.png",
        },
        {
          id: "g-15",
          term_zh: "你何時做（某事）？",
          related_terms: [
            {
              term_target: "Khi nào anh (verb)?",
              pronunciation: ["/xi˧˧ naːw˨˩/"],
              specific_note: "詢問未來的時間點。",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Khi nào anh đi làm?",
              translation: "你什麼時候去上班？",
              segments: [
                { text: "Khi nào", meaning: "何時", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "đi làm", meaning: "去上班", tail: "?" },
              ],
            },
          ],
          usage_note: "Khi nào 放在句首通常是指「未來」的時間。",
          image_file: "when_do_you.png",
        },
        {
          id: "g-16",
          term_zh: "你什麼時候去（某地）？",
          related_terms: [
            {
              term_target: "Mấy giờ anh đi ～ ?",
              pronunciation: ["/məj˧˥ zəː˨˩/"],
              specific_note: "詢問具體幾點鐘。",
              segments: [
                { text: "Mấy giờ", meaning: "幾點", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "đi", meaning: "去", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Mấy giờ anh đi sân bay?",
              translation: "你幾點去機場？",
              segments: [
                { text: "Mấy giờ", meaning: "幾點", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "sân bay", meaning: "機場", tail: "?" },
              ],
            },
          ],
          usage_note: "約定具體時間時，用 Mấy giờ 會比 Khi nào 更明確。",
          image_file: "when_go_to.png",
        },
        {
          id: "g-17",
          term_zh: "你在哪裡做（某事）？",
          related_terms: [
            {
              term_target: "Anh (verb) ở đâu?",
              pronunciation: ["/əː˧˩ ɗəw˧˧/"],
              specific_note: "詢問地點，置於動詞後。",
              segments: [{ text: "ở đâu", meaning: "在哪裡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh sống ở đâu?",
              translation: "你（哥）住在哪裡？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "sống", meaning: "生活/居住", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
            {
              sentence: "Anh làm việc ở đâu?",
              translation: "你在哪裡工作？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "làm việc", meaning: "工作", tail: " " },
                { text: "ở đâu", meaning: "在哪裡", tail: "?" },
              ],
            },
          ],
          usage_note: "詢問地點時，要把『在哪裡』放在動詞後面喔！",
          image_file: "where_do_you.png",
        },
        {
          id: "g-18",
          term_zh: "你如何做（某事）？",
          related_terms: [
            {
              term_target: "Anh (verb) thế nào?",
              pronunciation: ["/tʰe˧˥ naːw˨˩/"],
              specific_note: "詢問方法或感受。",
              segments: [{ text: "thế nào", meaning: "如何/怎樣", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Anh thấy món này thế nào?",
              translation: "你覺得這道菜怎麼樣？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "thấy", meaning: "覺得/看見", tail: " " },
                { text: "món này", meaning: "這菜", tail: " " },
                { text: "thế nào", meaning: "如何", tail: "?" },
              ],
            },
          ],
          usage_note: "問別人意見時，這句話非常道地。",
          image_file: "how_do_you.png",
        },
        {
          id: "g-19",
          term_zh: "你怎麼去（某地）？",
          related_terms: [
            {
              term_target: "Anh đi ～ bằng gì?",
              pronunciation: ["/ɓaŋ˨˩ zi˨˩/"],
              specific_note: "詢問交通工具。",
              segments: [
                { text: "bằng gì", meaning: "用什麼/搭什麼", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh đi làm bằng gì?",
              translation: "你怎麼去上班？（搭什麼去）",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "đi làm", meaning: "去上班", tail: " " },
                { text: "bằng gì", meaning: "搭什麼/用什麼", tail: "?" },
              ],
            },
          ],
          usage_note:
            "越南人常問這句，你可以回答『Đi bằng xe máy』（騎機車）。",
          image_file: "how_go_to.png",
        },
        {
          id: "g-20",
          term_zh: "我不是～",
          related_terms: [
            {
              term_target: "Em không phải là ～",
              pronunciation: ["/ɛm˧˧ xoŋ˧˧ faːj˧˩ laː˨˩/"],
              specific_note: "否定身分或事實。",
              segments: [{ text: "không phải là", meaning: "不是", tail: "" }],
            },
            {
              term_target: "Em không ～ (adjective)",
              pronunciation: ["/ɛm˧˧ xoŋ˧˧/"],
              specific_note: "否定狀態（我不...）。",
              segments: [{ text: "không", meaning: "不", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em không phải là người Nhật.",
              translation: "我不是日本人。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "không phải là", meaning: "不是", tail: " " },
                { text: "người Nhật", meaning: "日本人", tail: "." },
              ],
            },
            {
              sentence: "Em không mệt.",
              translation: "我不累。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "mệt", meaning: "累", tail: "." },
              ],
            },
          ],
          usage_note:
            "否定身分要用『không phải là』，否定累、餓、熱等形容詞只要用『không』就好。",
          image_file: "i_am_not.png",
        },
        {
          id: "g-21",
          term_zh: "我不做～",
          related_terms: [
            {
              term_target: "Em không (verb)",
              pronunciation: ["/ɛm˧˧ xoŋ˧˧/"],
              specific_note: "否定動作或意願。",
              segments: [{ text: "không", meaning: "不", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em không ăn cay.",
              translation: "我不吃辣。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "ăn cay", meaning: "吃辣", tail: "." },
              ],
            },
            {
              sentence: "Em không biết.",
              translation: "我不知道。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "biết", meaning: "知道", tail: "." },
              ],
            },
          ],
          usage_note: "『我不懂』是 Em không hiểu。",
          image_file: "i_dont.png",
        },
        {
          id: "g-22",
          term_zh: "我不能～",
          related_terms: [
            {
              term_target: "Em không ... được",
              pronunciation: ["/xoŋ˧˧/ ... /ɗɨəʔ˨˩/"],
              specific_note: "表示無法完成某事。",
              segments: [
                { text: "không", meaning: "不", tail: " ... " },
                { text: "được", meaning: "得/能", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em không đi được.",
              translation: "我不能去（沒辦法去）。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "đi", meaning: "去", tail: " " },
                { text: "được", meaning: "能", tail: "." },
              ],
            },
            {
              sentence: "Em không nghe được.",
              translation: "我聽不到（聽不見）。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "không", meaning: "不", tail: " " },
                { text: "nghe", meaning: "聽", tail: " " },
                { text: "được", meaning: "能", tail: "." },
              ],
            },
          ],
          usage_note: "否定能力時，通常在動詞前後加上 không...được。",
          image_file: "i_cant.png",
        },
        {
          id: "g-23",
          term_zh: "我未曾～",
          related_terms: [
            {
              term_target: "Em chưa bao giờ ～",
              pronunciation: ["/ɛm˧˧ cɨə˧˧ ɓaːw˧˧ zəː˨˩/"],
              specific_note: "表示從來沒有過的經驗。",
              segments: [{ text: "chưa bao giờ", meaning: "從未", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em chưa bao giờ ăn món này.",
              translation: "我從來沒吃過這道菜。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "chưa bao giờ", meaning: "從未", tail: " " },
                { text: "ăn", meaning: "吃", tail: " " },
                { text: "món này", meaning: "這道菜", tail: "." },
              ],
            },
          ],
          usage_note: "比起單說『未(chưa)』，『chưa bao giờ』語氣更強烈。",
          image_file: "i_have_never.png",
        },
        {
          id: "g-24",
          term_zh: "我不必～",
          related_terms: [
            {
              term_target: "Em không cần phải ～",
              pronunciation: ["/ɛm˧˧ xoŋ˧˧ kən˨˩ faːj˧˩/"],
              specific_note: "沒有義務或需要。",
              segments: [
                { text: "không cần phải", meaning: "不必/不需要", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh không cần phải trả tiền.",
              translation: "你（哥）不必付錢（我請客）。",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "không cần phải", meaning: "不必", tail: " " },
                { text: "trả tiền", meaning: "付錢", tail: "." },
              ],
            },
          ],
          usage_note: "不想麻煩別人時，可以客氣地說這句。",
          image_file: "i_dont_have_to.png",
        },
        {
          id: "g-25",
          term_zh: "如果～的話，就～",
          related_terms: [
            {
              term_target: "Nếu... thì...",
              pronunciation: ["/nɛw˧˥/ ... /tʰi˨˩/"],
              specific_note: "假設句型。",
              segments: [
                { text: "Nếu", meaning: "如果", tail: " ... " },
                { text: "thì", meaning: "就", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Nếu anh thích thì cứ lấy đi.",
              translation: "如果你（哥）喜歡的話，就拿去吧。",
              segments: [
                { text: "Nếu", meaning: "如果", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "thì", meaning: "就", tail: " " },
                { text: "cứ lấy đi", meaning: "儘管拿去吧", tail: "." },
              ],
            },
          ],
          usage_note: "如果省略 Nếu，單用 Thì 也可以表達「那就...」。",
          image_file: "if.png",
        },
        {
          id: "g-26",
          term_zh: "當～時，就～",
          related_terms: [
            {
              term_target: "Khi... thì...",
              pronunciation: ["/xi˧˧/ ... /tʰi˨˩/"],
              specific_note: "時間點的聯結。",
              segments: [
                { text: "Khi", meaning: "當...時", tail: " ... " },
                { text: "thì", meaning: "就", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Khi nào đến thì gọi em.",
              translation: "什麼時候到的話（當你到時），就打給我。",
              segments: [
                { text: "Khi nào", meaning: "什麼時候", tail: " " },
                { text: "đến", meaning: "到", tail: " " },
                { text: "thì", meaning: "就", tail: " " },
                { text: "gọi", meaning: "打電話給", tail: " " },
                { text: "em", meaning: "我", tail: "." },
              ],
            },
          ],
          usage_note: "口語中常把 Khi 放在句首引導時間。",
          image_file: "when_condition.png",
        },
        {
          id: "g-27",
          term_zh: "請你～",
          related_terms: [
            {
              term_target: "Anh... giúp em được không?",
              pronunciation: ["/zṵp ɛm ɗɨəʔ˨˩ xoŋ˧˧/"],
              specific_note: "委婉的請求方式。",
              segments: [
                { text: "giúp", meaning: "幫", tail: " " },
                { text: "được không", meaning: "可以嗎", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Anh chụp ảnh giúp em được không?",
              translation: "你能幫我拍張照嗎？",
              segments: [
                { text: "Anh", meaning: "你(哥)", tail: " " },
                { text: "chụp ảnh", meaning: "拍照", tail: " " },
                { text: "giúp em", meaning: "幫我", tail: " " },
                { text: "được không", meaning: "可以嗎", tail: "?" },
              ],
            },
          ],
          usage_note:
            "在越南，請求別人幫忙，句尾加個『được không?』會更有禮貌。",
          image_file: "can_you.png",
        },
        {
          id: "g-28",
          term_zh: "我們來做～吧！",
          related_terms: [
            {
              term_target: "... đi!",
              pronunciation: ["/ɗi˧˧/"],
              specific_note: "放在句尾表示提議或命令。",
              segments: [{ text: "đi", meaning: "走/吧", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Đi ăn đi!",
              translation: "去吃飯吧！",
              segments: [
                { text: "Đi ăn", meaning: "去吃", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
            {
              sentence: "Chúng mình đi uống cà phê đi!",
              translation: "我們去喝咖啡吧！",
              segments: [
                { text: "Chúng mình", meaning: "我們", tail: " " },
                { text: "đi uống", meaning: "去喝", tail: " " },
                { text: "cà phê", meaning: "咖啡", tail: " " },
                { text: "đi", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note: "雖然『Đi』是走的意思，但在句尾它是最強大的揪團助詞。",
          image_file: "lets.png",
        },
        {
          id: "g-29",
          term_zh: "我認為～",
          related_terms: [
            {
              term_target: "Em nghĩ là ～",
              pronunciation: ["/ɛm˧˧ ŋi˦ˀ˥ laː˨˩/"],
              specific_note: "表達主觀想法。",
              segments: [
                { text: "nghĩ", meaning: "想/認為", tail: " " },
                { text: "là", meaning: "是", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em nghĩ là anh đúng rồi.",
              translation: "我覺得你（哥）是對的。",
              segments: [
                { text: "Em nghĩ là", meaning: "我認為是", tail: " " },
                { text: "anh", meaning: "你(哥)", tail: " " },
                { text: "đúng rồi", meaning: "對了", tail: "." },
              ],
            },
          ],
          usage_note: "表達個人意見時的起手式。",
          image_file: "i_think.png",
        },
        {
          id: "g-30",
          term_zh: "我想做～",
          related_terms: [
            {
              term_target: "Em muốn ～",
              pronunciation: ["/ɛm˧˧ muən˧˥/"],
              specific_note: "表達願望。",
              segments: [{ text: "muốn", meaning: "想要", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em muốn mua cái này.",
              translation: "我想買這個。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "muốn", meaning: "想", tail: " " },
                { text: "mua", meaning: "買", tail: " " },
                { text: "cái này", meaning: "這個", tail: "." },
              ],
            },
          ],
          usage_note: "買東西、點餐時最直接的說法。",
          image_file: "want_to.png",
        },
        {
          id: "g-31",
          term_zh: "我必須做～",
          related_terms: [
            {
              term_target: "Em phải ～",
              pronunciation: ["/ɛm˧˧ faːj˧˩/"],
              specific_note: "義務或必然性。",
              segments: [{ text: "phải", meaning: "必須", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Bây giờ em phải đi rồi.",
              translation: "我現在必須走了。",
              segments: [
                { text: "Bây giờ", meaning: "現在", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "phải", meaning: "必須", tail: " " },
                { text: "đi", meaning: "走", tail: " " },
                { text: "rồi", meaning: "了", tail: "." },
              ],
            },
          ],
          usage_note: "要趕場或回家時的常用藉口。",
          image_file: "i_have_to.png",
        },
        {
          id: "g-32",
          term_zh: "做某事是...的",
          related_terms: [
            {
              term_target: "(Verb) thật là (adj)",
              pronunciation: ["/tʰət˨˩ laː˨˩/"],
              specific_note: "描述某種行為的性質。",
              segments: [{ text: "thật là", meaning: "真是/實在是", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Gặp anh thật là vui.",
              translation: "見到你（哥）真開心。",
              segments: [
                { text: "Gặp", meaning: "見面", tail: " " },
                { text: "anh", meaning: "哥哥(你)", tail: " " },
                { text: "thật là", meaning: "真是", tail: " " },
                { text: "vui", meaning: "開心", tail: "." },
              ],
            },
          ],
          usage_note: "這比英文的 It is... 結構更直接，把重點動作放在最前面。",
          image_file: "it_is_to.png",
        },
        {
          id: "g-33",
          term_zh: "你可以幫我…嗎？",
          related_terms: [
            {
              term_target: "Giúp em ... với",
              pronunciation: ["/zup˧˥ ɛm/ ... /vəj˧˥/"],
              specific_note: "求助時最道地的說法。",
              segments: [
                { text: "Giúp", meaning: "幫", tail: " " },
                { text: "với", meaning: "吧/伴隨", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Giúp em tìm ví với!",
              translation: "幫我找一下錢包！",
              segments: [
                { text: "Giúp", meaning: "幫助", tail: " " },
                { text: "em", meaning: "我", tail: " " },
                { text: "tìm", meaning: "找", tail: " " },
                { text: "ví", meaning: "錢包", tail: " " },
                { text: "với", meaning: "吧", tail: "!" },
              ],
            },
          ],
          usage_note: "句尾加個『với』，拜託別人的語氣會更誠懇。",
          image_file: "can_you_help.png",
        },
        {
          id: "g-34",
          term_zh: "我可以…嗎？",
          related_terms: [
            {
              term_target: "Em ... được không?",
              pronunciation: ["/ɗɨəʔ˨˩ xoŋ˧˧/"],
              specific_note: "請求許可。",
              segments: [{ text: "được không", meaning: "可以嗎", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em ngồi đây được không?",
              translation: "我可以坐這裡嗎？",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "ngồi", meaning: "坐", tail: " " },
                { text: "đây", meaning: "這裡", tail: " " },
                { text: "được không", meaning: "可以嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "不管是問路、併桌或借東西，最後都加這句就對了。",
          image_file: "can_i.png",
        },
        {
          id: "g-35",
          term_zh: "我不喜歡…",
          related_terms: [
            {
              term_target: "Em không thích ...",
              pronunciation: ["/xoŋ˧˧ tʰik˧˥/"],
              specific_note: "表達反感。",
              segments: [{ text: "không thích", meaning: "不喜歡", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Em không thích chờ lâu.",
              translation: "我不喜歡等很久。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "không thích", meaning: "不喜歡", tail: " " },
                { text: "chờ", meaning: "等", tail: " " },
                { text: "lâu", meaning: "久", tail: "." },
              ],
            },
          ],
          usage_note: "拒絕推銷或邀約時很乾脆的說法。",
          image_file: "i_dont_like.png",
        },
        {
          id: "g-36",
          term_zh: "我比較喜歡…",
          related_terms: [
            {
              term_target: "Em thích ... hơn",
              pronunciation: ["/tʰik˧˥/ ... /həːn˧˧/"],
              specific_note: "比較之後的偏好。",
              segments: [
                { text: "thích", meaning: "喜歡", tail: " ... " },
                { text: "hơn", meaning: "更/勝過", tail: "" },
              ],
            },
          ],
          examples: [
            {
              sentence: "Em thích uống trà hơn.",
              translation: "我比較喜歡喝茶（相對於咖啡）。",
              segments: [
                { text: "Em", meaning: "我", tail: " " },
                { text: "thích", meaning: "喜歡", tail: " " },
                { text: "uống trà", meaning: "喝茶", tail: " " },
                { text: "hơn", meaning: "更", tail: "." },
              ],
            },
          ],
          usage_note: "把 Hơn 放在最後面，就是「比較喜歡」的意思。",
          image_file: "prefer.png",
        },
        {
          id: "g-37",
          term_zh: "A 比 B 更…",
          related_terms: [
            {
              term_target: "A (adj) hơn B",
              pronunciation: ["/həːn˧˧/"],
              specific_note: "基礎比較句型。",
              segments: [{ text: "hơn", meaning: "更", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Cái này đắt hơn cái kia.",
              translation: "這個比那個貴。",
              segments: [
                { text: "Cái này", meaning: "這個", tail: " " },
                { text: "đắt", meaning: "貴", tail: " " },
                { text: "hơn", meaning: "更", tail: " " },
                { text: "cái kia", meaning: "那個", tail: "." },
              ],
            },
          ],
          usage_note: "不需要加英文的 more，直接在形容詞後加 Hơn 就好。",
          image_file: "more_than.png",
        },
        {
          id: "g-38",
          term_zh: "有…（存在）",
          related_terms: [
            {
              term_target: "Có ～",
              pronunciation: ["/kɔ˧˥/"],
              specific_note: "不分單複數，代表「有某物」。",
              segments: [{ text: "Có", meaning: "有", tail: "" }],
            },
          ],
          examples: [
            {
              sentence: "Ở đây có WiFi không?",
              translation: "這裡有 WiFi 嗎？",
              segments: [
                { text: "Ở đây", meaning: "這裡", tail: " " },
                { text: "có", meaning: "有", tail: " " },
                { text: "WiFi", meaning: "WiFi", tail: " " },
                { text: "không", meaning: "嗎", tail: "?" },
              ],
            },
          ],
          usage_note: "問路、找廁所、找東西，開頭通通可以用 Có。",
          image_file: "there_is.png",
        },
      ],
    },
  ],
};
