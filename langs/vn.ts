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
      name: "常用句",
      items: [
        {
          id: "greet-001",
          term_zh: "是的",
          related_terms: [
            {
              term_target: "Vâng",
              pronunciation: ["/vəŋ˧/"],
              specific_note: "禮貌/對長輩",
            },
            {
              term_target: "Đúng",
              pronunciation: ["/ɗuŋ͡m˧˥/"],
              specific_note: "正確/沒錯",
            },
            {
              term_target: "Có",
              pronunciation: ["/kɔ˧˥/"],
              specific_note: "有/是",
            },
          ],
          examples: [
            {
              sentence: "Vâng, tôi biết rồi.",
              translation: "是的，我知道了 (對長輩)。",
            },
            {
              sentence: "Đúng, chính xác là vậy.",
              translation: "是的，正是那樣。",
            },
            {
              sentence: "Có, tôi có đi.",
              translation: "有的，我有去。",
            },
          ],
          usage_note: "對長輩說話，開頭一定要加 Vâng 或 Dạ 表示禮貌。",
          image_file: "yes.png",
        },
        {
          id: "greet-002",
          term_zh: "不是",
          related_terms: [
            {
              term_target: "Không",
              pronunciation: ["/xoŋ͡m˧/"],
              specific_note: "否定/沒有",
            },
            {
              term_target: "Không phải",
              pronunciation: ["/xoŋ͡m˧ faːj˧˩/"],
              specific_note: "不是",
            },
          ],
          examples: [
            {
              sentence: "Không, cảm ơn.",
              translation: "不了，謝謝。",
            },
            {
              sentence: "Tôi không thích.",
              translation: "我不喜歡。",
            },
            {
              sentence: "Không phải tôi.",
              translation: "不是我。",
            },
          ],
          usage_note: "Không 既是「不」也是「沒有」。",
          image_file: "no.png",
        },
        {
          id: "greet-003",
          term_zh: "你好",
          related_terms: [
            {
              term_target: "Xin chào",
              pronunciation: ["/sin˧ tɕaːw˨˩/"],
              specific_note: "通用/正式",
            },
            {
              term_target: "Chào bạn",
              pronunciation: ["/tɕaːw˨˩ ɓaːn˧˨ˀ/"],
              specific_note: "平輩/朋友",
            },
          ],
          examples: [
            {
              sentence: "Xin chào mọi người.",
              translation: "大家好。",
            },
            {
              sentence: "Chào anh, khỏe không?",
              translation: "你好 (對哥哥輩)，好嗎？",
            },
            {
              sentence: "Chào em.",
              translation: "你好 (對弟妹輩)。",
            },
          ],
          usage_note: "對長輩建議說 Chào + 稱謂 (例如 Chào anh/chị/bác)。",
          image_file: "hello.png",
        },
        {
          id: "greet-004",
          term_zh: "謝謝你",
          related_terms: [
            {
              term_target: "Cảm ơn",
              pronunciation: ["/kaːm˧˩ ʔəːn˧/"],
              specific_note: "通用",
            },
            {
              term_target: "Cảm ơn nhiều",
              pronunciation: ["/kaːm˧˩ ʔəːn˧ ɲiəw˨˩/"],
              specific_note: "多謝",
            },
          ],
          examples: [
            {
              sentence: "Cảm ơn rất nhiều.",
              translation: "非常謝謝你。",
            },
            {
              sentence: "Cảm ơn anh đã giúp đỡ.",
              translation: "謝謝你的幫忙 (對男性長輩)。",
            },
            {
              sentence: "Xin cảm ơn.",
              translation: "謝謝 (較正式)。",
            },
          ],
          usage_note: "發音像台語的「感恩」。",
          image_file: "thank_you.png",
        },
        {
          id: "greet-005",
          term_zh: "對不起",
          related_terms: [
            {
              term_target: "Xin lỗi",
              pronunciation: ["/sin˧ loj˦ˀ˥/"],
              specific_note: "通用",
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, tôi đến muộn.",
              translation: "對不起，我遲到了。",
            },
            {
              sentence: "Xin lỗi vì đã làm phiền.",
              translation: "抱歉打擾了。",
            },
            {
              sentence: "Thật sự xin lỗi.",
              translation: "真的很抱歉。",
            },
          ],
          usage_note: "做錯事道歉，或請求讓路、插話時使用。",
          image_file: "sorry.png",
        },
        {
          id: "greet-006",
          term_zh: "請問...",
          related_terms: [
            {
              term_target: "Cho tôi hỏi",
              pronunciation: ["/tɕɔ˧ toj˧ hɔj˧˩/"],
              specific_note: "讓我問一下",
            },
            {
              term_target: "Xin hỏi",
              pronunciation: ["/sin˧ hɔj˧˩/"],
              specific_note: "請問(較正式)",
            },
          ],
          examples: [
            {
              sentence: "Cho tôi hỏi, đây là đâu?",
              translation: "請問一下，這是哪裡？",
            },
            {
              sentence: "Xin hỏi, bây giờ là mấy giờ?",
              translation: "請問，現在幾點了？",
            },
            {
              sentence: "Làm ơn cho tôi hỏi...",
              translation: "麻煩請問一下...",
            },
          ],
          usage_note: "路邊問路最常用的開頭。",
          image_file: "excuse_me.png",
        },
        {
          id: "greet-007",
          term_zh: "我不懂",
          related_terms: [
            {
              term_target: "Tôi không hiểu",
              pronunciation: ["/toj˧ xoŋ͡m˧ hiəw˧˩/"],
              specific_note: "無法理解",
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, tôi không hiểu tiếng Việt.",
              translation: "抱歉，我不懂越南文。",
            },
            {
              sentence: "Tôi không hiểu ý bạn.",
              translation: "我不懂你的意思。",
            },
            {
              sentence: "Bạn nói gì? Tôi không hiểu.",
              translation: "你說什麼？我不懂。",
            },
          ],
          usage_note: "Hiểu 是「明白/懂」。",
          image_file: "dont_understand.png",
        },
        {
          id: "greet-008",
          term_zh: "廁所在哪裡？",
          related_terms: [
            {
              term_target: "Nhà vệ sinh ở đâu?",
              pronunciation: ["/ɲaː˨˩ ve˧˨ˀ siɲ˧ əː˧˩ ɗəw˧/"],
              specific_note: "通用",
            },
          ],
          examples: [
            {
              sentence: "Xin hỏi, nhà vệ sinh ở đâu?",
              translation: "請問，廁所在哪？",
            },
            {
              sentence: "Ở đây có nhà vệ sinh không?",
              translation: "這裡有廁所嗎？",
            },
            {
              sentence: "Toilet ở phía nào?",
              translation: "廁所在哪一邊？",
            },
          ],
          usage_note: "Nhà vệ sinh (衛生間) + ở đâu (在哪)。",
          image_file: "where_bathroom.png",
        },
        {
          id: "greet-009",
          term_zh: "借過",
          related_terms: [
            {
              term_target: "Cho tôi qua",
              pronunciation: ["/tɕɔ˧ toj˧ kwaː˧/"],
              specific_note: "讓我過",
            },
            {
              term_target: "Xin lỗi",
              pronunciation: ["/sin˧ loj˦ˀ˥/"],
              specific_note: "不好意思",
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, cho tôi qua một chút.",
              translation: "不好意思，讓我過一下。",
            },
            {
              sentence: "Cho tôi đi nhờ.",
              translation: "借過 (讓我通過)。",
            },
            {
              sentence: "Nhờ một chút.",
              translation: "借過一下 (口語)。",
            },
          ],
          usage_note: "人多擁擠時大聲說 Cho tôi qua。",
          image_file: "excuse_me_pass.png",
        },
        {
          id: "greet-010",
          term_zh: "多少錢？",
          related_terms: [
            {
              term_target: "Bao nhiêu tiền?",
              pronunciation: ["/ɓaːw˧ ɲiəw˧ tiən˨˩/"],
              specific_note: "詢價",
            },
            {
              term_target: "Cái này bao nhiêu?",
              pronunciation: ["/kaːj˧˥ naj˨˩ ɓaːw˧ ɲiəw˧/"],
              specific_note: "這個多少？",
            },
          ],
          examples: [
            {
              sentence: "Cái này bao nhiêu tiền?",
              translation: "這個多少錢？",
            },
            {
              sentence: "Tổng cộng bao nhiêu?",
              translation: "總共多少錢？",
            },
            {
              sentence: "Giá bao nhiêu?",
              translation: "價格是多少？",
            },
          ],
          usage_note: "Bao nhiêu 是「多少」。",
          image_file: "how_much.png",
        },
        {
          id: "greet-011",
          term_zh: "我想要這個",
          related_terms: [
            {
              term_target: "Tôi muốn cái này",
              pronunciation: ["/toj˧ muən˧˥ kaːj˧˥ naj˨˩/"],
              specific_note: "我想要",
            },
            {
              term_target: "Lấy cho tôi cái này",
              pronunciation: ["/ləj˧˥ tɕɔ˧ toj˧ kaːj˧˥ naj˨˩/"],
              specific_note: "拿這個給我(購買)",
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn mua cái này.",
              translation: "我想買這個。",
            },
            {
              sentence: "Lấy cho tôi cái kia.",
              translation: "拿那個給我。",
            },
            {
              sentence: "Cho tôi xem cái này.",
              translation: "讓我看看這個。",
            },
          ],
          usage_note: "指著菜單說 Cái này (這個) 也可以。",
          image_file: "i_want_this.png",
        },
        {
          id: "greet-012",
          term_zh: "請給我...",
          related_terms: [
            {
              term_target: "Cho tôi...",
              pronunciation: ["/tɕɔ˧ toj˧/"],
              specific_note: "索取",
            },
          ],
          examples: [
            {
              sentence: "Cho tôi một ly nước.",
              translation: "請給我一杯水。",
            },
            {
              sentence: "Cho tôi xin thực đơn.",
              translation: "請給我菜單。",
            },
            {
              sentence: "Cho tôi thêm đá.",
              translation: "請給我加冰塊。",
            },
          ],
          usage_note: "Cho (給) + Tôi (我)。",
          image_file: "please_give_me.png",
        },
        {
          id: "greet-013",
          term_zh: "這是什麼？",
          related_terms: [
            {
              term_target: "Cái này là cái gì?",
              pronunciation: ["/kaːj˧˥ naj˨˩ laː˨˩ kaːj˧˥ zi˨˩/"],
              specific_note: "疑問",
            },
          ],
          examples: [
            {
              sentence: "Cái này là cái gì? Ăn được không?",
              translation: "這是什麼？能吃嗎？",
            },
            {
              sentence: "Đây là món gì?",
              translation: "這是什麼菜？",
            },
            {
              sentence: "Cái kia là gì?",
              translation: "那是這什麼？",
            },
          ],
          usage_note: "口語常簡化為 Cái gì đây? (這是啥)。",
          image_file: "what_is_this.png",
        },
        {
          id: "greet-014",
          term_zh: "請幫我",
          related_terms: [
            {
              term_target: "Giúp tôi với",
              pronunciation: ["/zup̚˧˥ toj˧ vəj˧˥/"],
              specific_note: "請求協助",
            },
            {
              term_target: "Làm ơn giúp tôi",
              pronunciation: ["/laːm˨˩ əːn˧ zup̚˧˥ toj˧/"],
              specific_note: "禮貌請求",
            },
          ],
          examples: [
            {
              sentence: "Bạn có thể giúp tôi không?",
              translation: "你可以幫我嗎？",
            },
            {
              sentence: "Cứu tôi với!",
              translation: "救命！(緊急)",
            },
            {
              sentence: "Làm ơn giúp tôi một tay.",
              translation: "拜託幫我一把。",
            },
          ],
          usage_note: "遇到的困難程度不同，語氣也不同。",
          image_file: "help_me.png",
        },
        {
          id: "greet-015",
          term_zh: "你可以再說一次嗎？",
          related_terms: [
            {
              term_target: "Nói lại được không?",
              pronunciation: ["/nɔj˧˥ laːj˧˨ˀ ɗɨək̚˧˨ˀ xoŋ͡m˧/"],
              specific_note: "能再說一次嗎",
            },
          ],
          examples: [
            {
              sentence: "Xin lỗi, bạn nói lại được không?",
              translation: "抱歉，能再說一次嗎？",
            },
            {
              sentence: "Tôi nghe không rõ, nói lại đi.",
              translation: "我沒聽清楚，再說一次吧。",
            },
            {
              sentence: "Bạn có thể nói lại lần nữa không?",
              translation: "你可以再說一遍嗎？",
            },
          ],
          usage_note: "Nói lại (再說) + được không (行嗎)。",
          image_file: "say_again.png",
        },
        {
          id: "greet-016",
          term_zh: "你可以講慢一點嗎？",
          related_terms: [
            {
              term_target: "Nói chậm lại",
              pronunciation: ["/nɔj˧˥ tɕəm˧˨ˀ laːj˧˨ˀ/"],
              specific_note: "講慢一點",
            },
          ],
          examples: [
            {
              sentence: "Làm ơn nói chậm lại.",
              translation: "請講慢一點。",
            },
            {
              sentence: "Bạn nói nhanh quá.",
              translation: "你說得太快了。",
            },
            {
              sentence: "Nói từ từ thôi.",
              translation: "慢慢說就好。",
            },
          ],
          usage_note: "Chậm (慢) + Lại (下來)。",
          image_file: "speak_slowly.png",
        },
        {
          id: "greet-017",
          term_zh: "原來如此",
          related_terms: [
            {
              term_target: "Ra là vậy",
              pronunciation: ["/zaː˧ laː˨˩ vəj˧˨ˀ/"],
              specific_note: "原來是這樣",
            },
            {
              term_target: "Tôi hiểu rồi",
              pronunciation: ["/toj˧ hiəw˧˩ zoj˨˩/"],
              specific_note: "我懂了",
            },
          ],
          examples: [
            {
              sentence: "À, ra là vậy!",
              translation: "啊，原來如此！",
            },
            {
              sentence: "Thì ra là thế.",
              translation: "原來是這樣啊。",
            },
            {
              sentence: "Tôi hiểu rồi, cảm ơn.",
              translation: "我懂了，謝謝。",
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
              pronunciation: ["/tɕaːw˨˩ ɓuəj˧˩ saːŋ˧˥/"],
              specific_note: "正式",
            },
          ],
          examples: [
            {
              sentence: "Chào buổi sáng mọi người.",
              translation: "大家早安。",
            },
            {
              sentence: "Chúc bạn buổi sáng tốt lành.",
              translation: "祝你有個美好的早晨。",
            },
            {
              sentence: "Sáng nay thế nào?",
              translation: "今早還好嗎？",
            },
          ],
          usage_note: "越南人平時多直接說 Xin chào，少特地分早晚安。",
          image_file: "good_morning.png",
        },
        {
          id: "greet-019",
          term_zh: "晚上好 (晚安)",
          related_terms: [
            {
              term_target: "Chào buổi tối",
              pronunciation: ["/tɕaːw˨˩ ɓuəj˧˩ toj˧˥/"],
              specific_note: "晚上見面",
            },
            {
              term_target: "Chúc ngủ ngon",
              pronunciation: ["/tɕuk̚˧˥ ŋu˧˩ ŋɔn˧/"],
              specific_note: "睡前 (祝好夢)",
            },
          ],
          examples: [
            {
              sentence: "Chào buổi tối.",
              translation: "晚上好 (見面)。",
            },
            {
              sentence: "Chúc ngủ ngon nhé.",
              translation: "晚安囉 (睡前)。",
            },
            {
              sentence: "Ngủ ngon và mơ đẹp.",
              translation: "睡個好覺做個好夢。",
            },
          ],
          usage_note: "睡前道別一定要說 Chúc ngủ ngon。",
          image_file: "good_evening.png",
        },
        {
          id: "greet-020",
          term_zh: "再見",
          related_terms: [
            {
              term_target: "Tạm biệt",
              pronunciation: ["/taːm˧˨ˀ ɓiət̚˧˨ˀ/"],
              specific_note: "正式",
            },
            {
              term_target: "Hẹn gặp lại",
              pronunciation: ["/hɛn˧˨ˀ ɣap̚˧˨ˀ laːj˧˨ˀ/"],
              specific_note: "再見(約定)",
            },
          ],
          examples: [
            {
              sentence: "Tạm biệt, hẹn gặp lại.",
              translation: "再見，下次見。",
            },
            {
              sentence: "Hẹn gặp lại ngày mai.",
              translation: "明天見。",
            },
            {
              sentence: "Tôi về đây.",
              translation: "我先回去了 (口語道別)。",
            },
          ],
          usage_note: "口語常直接說 Bye Bye。",
          image_file: "goodbye.png",
        },
        {
          id: "greet-021",
          term_zh: "你好嗎",
          related_terms: [
            {
              term_target: "Bạn khỏe không?",
              pronunciation: ["/ɓaːn˧˨ˀ xwɛ˧˩ xoŋ͡m˧/"],
              specific_note: "問候健康",
            },
          ],
          examples: [
            {
              sentence: "Lâu rồi không gặp, bạn khỏe không?",
              translation: "好久不見，你好嗎？",
            },
            {
              sentence: "Dạo này thế nào?",
              translation: "最近如何？",
            },
            {
              sentence: "Mọi việc ổn không?",
              translation: "一切都好嗎？",
            },
          ],
          usage_note: "通常用於許久不見的朋友。",
          image_file: "how_are_you.png",
        },
        {
          id: "greet-022",
          term_zh: "真的嗎",
          related_terms: [
            {
              term_target: "Thật không?",
              pronunciation: ["/tʰət̚˧˨ˀ xoŋ͡m˧/"],
              specific_note: "疑問",
            },
            {
              term_target: "Thật á?",
              pronunciation: ["/tʰət̚˧˨ˀ aː˧˥/"],
              specific_note: "口語 (真的喔?)",
            },
          ],
          examples: [
            {
              sentence: "Thật không? Tôi không tin.",
              translation: "真的嗎？我不信。",
            },
            {
              sentence: "Bạn nói thật chứ?",
              translation: "你說真的嗎？",
            },
            {
              sentence: "Không thể tin được.",
              translation: "難以置信。",
            },
          ],
          usage_note: "表示驚訝或懷疑。",
          image_file: "really.png",
        },
        {
          id: "greet-023",
          term_zh: "太棒了",
          related_terms: [
            {
              term_target: "Tuyệt vời",
              pronunciation: ["/twiət̚˧˨ˀ vəːj˨˩/"],
              specific_note: "極好",
            },
            {
              term_target: "Hay quá",
              pronunciation: ["/haj˧ kwaː˧˥/"],
              specific_note: "好厲害",
            },
          ],
          examples: [
            {
              sentence: "Cái này tuyệt vời quá!",
              translation: "這真是太棒了！",
            },
            {
              sentence: "Bạn làm tốt lắm.",
              translation: "你做得很好。",
            },
            {
              sentence: "Hay quá đi!",
              translation: "太厲害了！",
            },
          ],
          usage_note: "Tuyệt vời 是很高的讚賞。",
          image_file: "awesome.png",
        },
        {
          id: "greet-024",
          term_zh: "很高興認識你",
          related_terms: [
            {
              term_target: "Rất vui được gặp bạn",
              pronunciation: ["/zat̚˧˥ vuj˧ ɗɨək̚˧˨ˀ ɣap̚˧˨ˀ ɓaːn˧˨ˀ/"],
              specific_note: "初次見面",
            },
          ],
          examples: [
            {
              sentence: "Xin chào, rất vui được gặp bạn.",
              translation: "你好，很高興認識你。",
            },
            {
              sentence: "Rất hân hạnh được làm quen.",
              translation: "很榮幸能認識你 (正式)。",
            },
            {
              sentence: "Mong được giúp đỡ.",
              translation: "希望能得到您的幫助 (請多指教)。",
            },
          ],
          usage_note: "正式場合的開場白。",
          image_file: "nice_to_meet_you.png",
        },
        {
          id: "greet-025",
          term_zh: "真可惜",
          related_terms: [
            {
              term_target: "Tiếc quá",
              pronunciation: ["/tiək̚˧˥ kwaː˧˥/"],
              specific_note: "遺憾",
            },
          ],
          examples: [
            {
              sentence: "Ôi, tiếc quá đi.",
              translation: "噢，真可惜啊。",
            },
            {
              sentence: "Thật là đáng tiếc.",
              translation: "真是太遺憾了。",
            },
            {
              sentence: "Tiếc quá, tôi bận rồi.",
              translation: "真可惜，我有事(忙)了。",
            },
          ],
          usage_note: "對錯失機會或壞消息表示遺憾。",
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
              term_target: "nó",
              pronunciation: ["/nɔ˧˥/"],
              specific_note: "代名詞 (動物/事物/小孩)",
            },
          ],
          examples: [
            {
              sentence: "Nó ở đâu?",
              translation: "它在哪裡？",
            },
            {
              sentence: "Nó rất dễ thương.",
              translation: "它很可愛。",
            },
            {
              sentence: "Tôi không thích nó.",
              translation: "我不喜歡它。",
            },
          ],
          usage_note: "專指動物或物品。口語中也可用於指小孩或很熟的平輩(他/她)。",
          image_file: "it.png",
        },
        {
          id: "pro-02",
          term_zh: "我",
          related_terms: [
            {
              term_target: "tôi",
              pronunciation: ["/toj˧/"],
              specific_note: "通用/正式",
            },
            {
              term_target: "em",
              pronunciation: ["/ɛm˧/"],
              specific_note: "對長輩自稱",
            },
            {
              term_target: "anh / chị",
              pronunciation: ["/aɲ˧/  /tɕi˧˨ˀ/"],
              specific_note: "對晚輩自稱",
            },
          ],
          examples: [
            {
              sentence: "Tôi là người Đài Loan.",
              translation: "我是台灣人。",
            },
            {
              sentence: "Em chào anh.",
              translation: "你好 (晚輩對男性長輩說)。",
            },
            {
              sentence: "Chị đang ăn cơm.",
              translation: "我正在吃飯 (女性長輩對晚輩說)。",
            },
          ],
          usage_note: "初學者建議用 Tôi。熟悉後需依輩分變換自稱。",
          image_file: "i.png",
        },
        {
          id: "pro-03",
          term_zh: "你",
          related_terms: [
            {
              term_target: "bạn",
              pronunciation: ["/ɓaːn˧˨ˀ/"],
              specific_note: "朋友/平輩",
            },
            {
              term_target: "anh / chị",
              pronunciation: ["/aɲ˧/  /tɕi˧˨ˀ/"],
              specific_note: "尊稱(男/女)",
            },
          ],
          examples: [
            {
              sentence: "Bạn tên là gì?",
              translation: "你叫什麼名字？",
            },
            {
              sentence: "Anh đi đâu đấy?",
              translation: "你要去哪裡？(對男性長輩)",
            },
            {
              sentence: "Chị có khỏe không?",
              translation: "妳好嗎？(對女性長輩)",
            },
          ],
          usage_note: "對長輩稱 Anh/Chị，對晚輩稱 Em，平輩或陌生人可用 Bạn。",
          image_file: "you.png",
        },
        {
          id: "pro-04",
          term_zh: "他",
          related_terms: [
            {
              term_target: "anh ấy",
              pronunciation: ["/aɲ˧ əj˧˥/"],
              specific_note: "年輕男性",
            },
            {
              term_target: "ông ấy",
              pronunciation: ["/oŋ͡m˧ əj˧˥/"],
              specific_note: "年長男性",
            },
          ],
          examples: [
            {
              sentence: "Anh ấy là giáo viên.",
              translation: "他是老師。",
            },
            {
              sentence: "Anh ấy đang làm việc.",
              translation: "他正在工作。",
            },
            {
              sentence: "Ông ấy là bác sĩ.",
              translation: "他(那位先生)是醫生。",
            },
          ],
          usage_note: "稱謂 (Anh) + ấy (那個) = 他。",
          image_file: "he.png",
        },
        {
          id: "pro-05",
          term_zh: "她的",
          related_terms: [
            {
              term_target: "của cô ấy",
              pronunciation: ["/kuə˧˩ ko˧ əj˧˥/"],
              specific_note: "年輕女性",
            },
            {
              term_target: "của chị ấy",
              pronunciation: ["/kuə˧˩ tɕi˧˨ˀ əj˧˥/"],
              specific_note: "稍長女性",
            },
          ],
          examples: [
            {
              sentence: "Túi của cô ấy.",
              translation: "她的包包。",
            },
            {
              sentence: "Nhà của chị ấy rất đẹp.",
              translation: "她的房子很漂亮。",
            },
            {
              sentence: "Đây là xe của cô ấy.",
              translation: "這是她的車。",
            },
          ],
          usage_note: "Của (的) + Cô ấy (她)。",
          image_file: "her.png",
        },
        {
          id: "pro-06",
          term_zh: "我們",
          related_terms: [
            {
              term_target: "chúng tôi",
              pronunciation: ["/tɕuŋ͡m˧˥ toj˧/"],
              specific_note: "排除聽者",
            },
            {
              term_target: "chúng ta",
              pronunciation: ["/tɕuŋ͡m˧˥ taː˧/"],
              specific_note: "包含聽者",
            },
          ],
          examples: [
            {
              sentence: "Chúng tôi là sinh viên.",
              translation: "我們是大學生 (不包含你)。",
            },
            {
              sentence: "Chúng ta đi thôi.",
              translation: "我們走吧 (包含你)。",
            },
            {
              sentence: "Chúng tôi đến từ Việt Nam.",
              translation: "我們來自越南。",
            },
          ],
          usage_note: "Chúng tôi (我方)，Chúng ta (咱們)。",
          image_file: "we.png",
        },
        {
          id: "pro-07",
          term_zh: "她",
          related_terms: [
            {
              term_target: "cô ấy",
              pronunciation: ["/ko˧ əj˧˥/"],
              specific_note: "年輕女性",
            },
            {
              term_target: "chị ấy",
              pronunciation: ["/tɕi˧˨ˀ əj˧˥/"],
              specific_note: "稍長女性",
            },
          ],
          examples: [
            {
              sentence: "Cô ấy rất đẹp.",
              translation: "她很漂亮。",
            },
            {
              sentence: "Chị ấy đang nấu ăn.",
              translation: "她正在煮飯。",
            },
            {
              sentence: "Cô ấy là bạn tôi.",
              translation: "她是我的朋友。",
            },
          ],
          usage_note: "Cô (小姐/阿姨) + ấy。",
          image_file: "she.png",
        },
        {
          id: "pro-08",
          term_zh: "他們",
          related_terms: [
            {
              term_target: "họ",
              pronunciation: ["/hɔ˧˨ˀ/"],
              specific_note: "通用",
            },
            {
              term_target: "bọn họ",
              pronunciation: ["/ɓɔn˧˨ˀ hɔ˧˨ˀ/"],
              specific_note: "他們(較口語)",
            },
          ],
          examples: [
            {
              sentence: "Họ đang ăn.",
              translation: "他們在吃。",
            },
            {
              sentence: "Họ là ai?",
              translation: "他們是誰？",
            },
            {
              sentence: "Tôi không biết họ.",
              translation: "我不認識他們。",
            },
          ],
          usage_note: "Họ 是最常用的第三人稱複數。",
          image_file: "they.png",
        },
        {
          id: "pro-09",
          term_zh: "這個",
          related_terms: [
            {
              term_target: "cái này",
              pronunciation: ["/kaːj˧˥ naj˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Cái này ngon.",
              translation: "這個好吃。",
            },
            {
              sentence: "Tôi lấy cái này.",
              translation: "我要這個。",
            },
            {
              sentence: "Cái này bao nhiêu tiền?",
              translation: "這個多少錢？",
            },
          ],
          usage_note: "近處。",
          image_file: "this.png",
        },
        {
          id: "pro-10",
          term_zh: "那個",
          related_terms: [
            {
              term_target: "cái đó",
              pronunciation: ["/kaːj˧˥ ɗɔ˧˥/"],
              specific_note: "中距離",
            },
            {
              term_target: "cái kia",
              pronunciation: ["/kaːj˧˥ kiə˧/"],
              specific_note: "遠距離",
            },
          ],
          examples: [
            {
              sentence: "Cái đó là của tôi.",
              translation: "那是我的。",
            },
            {
              sentence: "Cái kia đẹp hơn.",
              translation: "那個(遠處)比較漂亮。",
            },
            {
              sentence: "Đưa cho tôi cái đó.",
              translation: "把那個給我。",
            },
          ],
          usage_note: "Cái đó 指對方處，Cái kia 指更遠的地方。",
          image_file: "that.png",
        },
        {
          id: "pro-11",
          term_zh: "他的",
          related_terms: [
            {
              term_target: "của anh ấy",
              pronunciation: ["/kuə˧˩ aɲ˧ əj˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Xe của anh ấy.",
              translation: "他的車。",
            },
            {
              sentence: "Đây là nhà của anh ấy.",
              translation: "這是他的家。",
            },
            {
              sentence: "Sách của anh ấy.",
              translation: "他的書。",
            },
          ],
          usage_note: "所有格 Của + 人稱。",
          image_file: "his.png",
        },
        {
          id: "pro-12",
          term_zh: "你的",
          related_terms: [
            {
              term_target: "của bạn",
              pronunciation: ["/kuə˧˩ ɓaːn˧˨ˀ/"],
              specific_note: "平輩",
            },
            {
              term_target: "của anh / chị",
              pronunciation: ["/kuə˧˩ aɲ˧/"],
              specific_note: "尊稱",
            },
          ],
          examples: [
            {
              sentence: "Tên của bạn là gì?",
              translation: "你的名字是什麼？",
            },
            {
              sentence: "Điện thoại của bạn.",
              translation: "你的電話。",
            },
            {
              sentence: "Của anh đây.",
              translation: "這是你的(東西)。",
            },
          ],
          usage_note: "Của + 對方稱呼。",
          image_file: "your.png",
        },
        {
          id: "pro-13",
          term_zh: "他們的",
          related_terms: [
            {
              term_target: "của họ",
              pronunciation: ["/kuə˧˩ hɔ˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Nhà của họ.",
              translation: "他們的家。",
            },
            {
              sentence: "Ý kiến của họ.",
              translation: "他們的意見。",
            },
            {
              sentence: "Con của họ.",
              translation: "他們的孩子。",
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
              term_target: "của chúng tôi",
              pronunciation: ["/kuə˧˩ tɕuŋ͡m˧˥ toj˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Trường của chúng tôi.",
              translation: "我們的學校。",
            },
            {
              sentence: "Đây là bí mật của chúng tôi.",
              translation: "這是我們的秘密。",
            },
            {
              sentence: "Nhà của chúng ta.",
              translation: "我們的家 (含聽者)。",
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
              term_target: "những cái này",
              pronunciation: ["/ɲɨŋ˧ˀ˥ kaːj˧˥ naj˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Những cái này là sách.",
              translation: "這些是書。",
            },
            {
              sentence: "Những cái này rất đắt.",
              translation: "這些很貴。",
            },
            {
              sentence: "Tôi thích những cái này.",
              translation: "我喜歡這些。",
            },
          ],
          usage_note: "Những (複數) + cái này (這個)。",
          image_file: "these.png",
        },
        {
          id: "pro-16",
          term_zh: "那些",
          related_terms: [
            {
              term_target: "những cái đó",
              pronunciation: ["/ɲɨŋ˧ˀ˥ kaːj˧˥ ɗɔ˧˥/"],
              specific_note: "中距離",
            },
            {
              term_target: "những cái kia",
              pronunciation: ["/ɲɨŋ˧ˀ˥ kaːj˧˥ kiə˧/"],
              specific_note: "遠距離",
            },
          ],
          examples: [
            {
              sentence: "Những cái đó là chim.",
              translation: "那些是鳥。",
            },
            {
              sentence: "Những cái kia là gì?",
              translation: "那些是什麼？",
            },
            {
              sentence: "Tôi không cần những cái đó.",
              translation: "我不需要那些。",
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
              term_target: "là",
              pronunciation: ["/laː˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi là học sinh.",
              translation: "我是學生。",
            },
            {
              sentence: "Đây là nhà của tôi.",
              translation: "這是我家。",
            },
            {
              sentence: "Anh ấy là bác sĩ.",
              translation: "他是醫生。",
            },
          ],
          usage_note: "連結主詞和補語 (A là B)。",
          image_file: "be.png",
        },
        {
          id: "v-02",
          term_zh: "有（擁有）",
          related_terms: [
            { term_target: "có", pronunciation: ["/kɔ˧˥/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Tôi có tiền.",
              translation: "我有錢。",
            },
            {
              sentence: "Bạn có rảnh không?",
              translation: "你有空嗎？",
            },
            {
              sentence: "Ở đây có wifi không?",
              translation: "這裡有 wifi 嗎？",
            },
          ],
          usage_note: "表示擁有或存在。",
          image_file: "have.png",
        },
        {
          id: "v-03",
          term_zh: "去",
          related_terms: [
            { term_target: "đi", pronunciation: ["/ɗi˧/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Đi về nhà.",
              translation: "回家。",
            },
            {
              sentence: "Tôi đi làm.",
              translation: "我去上班。",
            },
            {
              sentence: "Chúng ta đi thôi.",
              translation: "我們走吧。",
            },
          ],
          usage_note: "移動。",
          image_file: "go.png",
        },
        {
          id: "v-04",
          term_zh: "得到／拿",
          related_terms: [
            {
              term_target: "lấy",
              pronunciation: ["/ləj˧˥/"],
              specific_note: "拿取",
            },
            {
              term_target: "nhận",
              pronunciation: ["/ɲən˧˨ˀ/"],
              specific_note: "收到",
            },
          ],
          examples: [
            {
              sentence: "Lấy cho tôi cái này.",
              translation: "拿這個給我。",
            },
            {
              sentence: "Tôi đã nhận được quà.",
              translation: "我已經收到禮物了。",
            },
            {
              sentence: "Bạn lấy cái nào?",
              translation: "你要拿哪一個？",
            },
          ],
          usage_note: "Lấy 是主動拿，Nhận 是被動收到。",
          image_file: "get.png",
        },
        {
          id: "v-05",
          term_zh: "做",
          related_terms: [
            {
              term_target: "làm",
              pronunciation: ["/laːm˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Làm bài tập.",
              translation: "做作業。",
            },
            {
              sentence: "Bạn đang làm gì?",
              translation: "你在做什麼？",
            },
            {
              sentence: "Tôi làm việc ở ngân hàng.",
              translation: "我在銀行工作。",
            },
          ],
          usage_note: "最通用的動詞。",
          image_file: "do.png",
        },
        {
          id: "v-06",
          term_zh: "說（講）",
          related_terms: [
            {
              term_target: "nói",
              pronunciation: ["/nɔj˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Nói tiếng Việt.",
              translation: "說越南語。",
            },
            {
              sentence: "Đừng nói chuyện.",
              translation: "不要講話。",
            },
            {
              sentence: "Anh ấy nói gì?",
              translation: "他說了什麼？",
            },
          ],
          usage_note: "說話。",
          image_file: "say.png",
        },
        {
          id: "v-07",
          term_zh: "知道",
          related_terms: [
            {
              term_target: "biết",
              pronunciation: ["/ɓiət̚˧˥/"],
              specific_note: "知道",
            },
            {
              term_target: "quen",
              pronunciation: ["/kwɛn˧/"],
              specific_note: "認識(人)",
            },
          ],
          examples: [
            {
              sentence: "Tôi biết rồi.",
              translation: "我知道了。",
            },
            {
              sentence: "Tôi không biết.",
              translation: "我不知道。",
            },
            {
              sentence: "Bạn có quen anh ấy không?",
              translation: "你認識他嗎？",
            },
          ],
          usage_note: "Biết 是知道資訊，Quen 是認識人或熟悉。",
          image_file: "know.png",
        },
        {
          id: "v-08",
          term_zh: "想／思考",
          related_terms: [
            {
              term_target: "nghĩ",
              pronunciation: ["/ŋi˧ˀ˥/"],
              specific_note: "思考",
            },
            {
              term_target: "muốn",
              pronunciation: ["/muən˧˥/"],
              specific_note: "想要",
            },
          ],
          examples: [
            {
              sentence: "Tôi nghĩ vậy.",
              translation: "我想是這樣。",
            },
            {
              sentence: "Để tôi nghĩ đã.",
              translation: "讓我想一想。",
            },
            {
              sentence: "Tôi muốn đi du lịch.",
              translation: "我想要去旅遊。",
            },
          ],
          usage_note: "Nghĩ 是動腦思考，Muốn 是願望。",
          image_file: "think.png",
        },
        {
          id: "v-09",
          term_zh: "看見",
          related_terms: [
            {
              term_target: "thấy",
              pronunciation: ["/tʰəj˧˥/"],
              specific_note: "看見(結果)",
            },
            {
              term_target: "nhìn",
              pronunciation: ["/ɲiːn˨˩/"],
              specific_note: "注視(動作)",
            },
            {
              term_target: "xem",
              pronunciation: ["/sɛm˧/"],
              specific_note: "觀看(電視/書)",
            },
          ],
          examples: [
            {
              sentence: "Tôi thấy bạn.",
              translation: "我看到你了。",
            },
            {
              sentence: "Nhìn kìa!",
              translation: "看那邊！",
            },
            {
              sentence: "Tôi đang xem tivi.",
              translation: "我正在看電視。",
            },
          ],
          usage_note: "Thấy 是結果，Nhìn/Xem 是動作。",
          image_file: "see.png",
        },
        {
          id: "v-10",
          term_zh: "做出（製造）",
          related_terms: [
            {
              term_target: "làm",
              pronunciation: ["/laːm˨˩/"],
              specific_note: "",
            },
            {
              term_target: "chế tạo",
              pronunciation: ["/tɕe˧˥ taːw˧˨ˀ/"],
              specific_note: "製造",
            },
          ],
          examples: [
            {
              sentence: "Làm bánh.",
              translation: "做蛋糕。",
            },
            {
              sentence: "Sản xuất tại Việt Nam.",
              translation: "越南製造。",
            },
            {
              sentence: "Làm ra tiền.",
              translation: "賺錢 (製造錢)。",
            },
          ],
          usage_note: "日常多用 Làm。",
          image_file: "make.png",
        },
        {
          id: "v-11",
          term_zh: "來",
          related_terms: [
            {
              term_target: "đến",
              pronunciation: ["/ɗen˧˥/"],
              specific_note: "抵達/來",
            },
            {
              term_target: "tới",
              pronunciation: ["/təj˧˥/"],
              specific_note: "到/來",
            },
          ],
          examples: [
            {
              sentence: "Đến đây.",
              translation: "來這裡。",
            },
            {
              sentence: "Khi nào bạn đến?",
              translation: "你什麼時候來？",
            },
            {
              sentence: "Xe buýt tới rồi.",
              translation: "公車來了。",
            },
          ],
          usage_note: "Đến 和 Tới 常通用。",
          image_file: "come.png",
        },
        {
          id: "v-12",
          term_zh: "需要",
          related_terms: [
            {
              term_target: "cần",
              pronunciation: ["/kən˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi cần nước.",
              translation: "我需要水。",
            },
            {
              sentence: "Bạn cần gì?",
              translation: "你需要什麼？",
            },
            {
              sentence: "Tôi cần giúp đỡ.",
              translation: "我需要幫忙。",
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
              term_target: "dùng",
              pronunciation: ["/zuŋ͡m˨˩/"],
              specific_note: "通用",
            },
            {
              term_target: "sử dụng",
              pronunciation: ["/sɨ˧˩ zuŋ͡m˧˨ˀ/"],
              specific_note: "正式",
            },
          ],
          examples: [
            {
              sentence: "Dùng bút.",
              translation: "用筆。",
            },
            {
              sentence: "Dùng đũa.",
              translation: "用筷子。",
            },
            {
              sentence: "Cái này dùng thế nào?",
              translation: "這個怎麼用？",
            },
          ],
          usage_note: "口語常用 Dùng。",
          image_file: "use.png",
        },
        {
          id: "v-14",
          term_zh: "找到",
          related_terms: [
            {
              term_target: "tìm thấy",
              pronunciation: ["/tiːm˨˩ tʰəj˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tìm thấy rồi.",
              translation: "找到了。",
            },
            {
              sentence: "Tôi không tìm thấy ví.",
              translation: "我找不到錢包。",
            },
            {
              sentence: "Bạn tìm thấy chưa?",
              translation: "你找到了嗎？",
            },
          ],
          usage_note: "Tìm (找) + Thấy (見)。",
          image_file: "find.png",
        },
        {
          id: "v-15",
          term_zh: "給",
          related_terms: [
            {
              term_target: "cho",
              pronunciation: ["/tɕɔ˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Cho tôi cái này.",
              translation: "給我這個。",
            },
            {
              sentence: "Tôi cho bạn.",
              translation: "我給你。",
            },
            {
              sentence: "Đưa cho tôi.",
              translation: "遞給我。",
            },
          ],
          usage_note: "給予。",
          image_file: "give.png",
        },
        {
          id: "v-16",
          term_zh: "告訴",
          related_terms: [
            {
              term_target: "nói cho",
              pronunciation: ["/nɔj˧˥ tɕɔ˧/"],
              specific_note: "說給...聽",
            },
            {
              term_target: "kể",
              pronunciation: ["/ke˧˩/"],
              specific_note: "講述(故事)",
            },
            {
              term_target: "bảo",
              pronunciation: ["/ɓaːw˧˩/"],
              specific_note: "告訴/吩咐",
            },
          ],
          examples: [
            {
              sentence: "Nói cho tôi biết.",
              translation: "告訴我(讓我知道)。",
            },
            {
              sentence: "Kể chuyện.",
              translation: "講故事。",
            },
            {
              sentence: "Mẹ bảo tôi...",
              translation: "媽媽告訴(吩咐)我...",
            },
          ],
          usage_note: "Nói cho + 人 + biết (知道)。",
          image_file: "tell.png",
        },
        {
          id: "v-17",
          term_zh: "工作",
          related_terms: [
            {
              term_target: "làm việc",
              pronunciation: ["/laːm˨˩ viək̚˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi đang làm việc.",
              translation: "我正在工作。",
            },
            {
              sentence: "Làm việc chăm chỉ.",
              translation: "努力工作。",
            },
            {
              sentence: "Bạn làm việc ở đâu?",
              translation: "你在哪裡工作？",
            },
          ],
          usage_note: "勞動。",
          image_file: "work.png",
        },
        {
          id: "v-18",
          term_zh: "喜歡",
          related_terms: [
            {
              term_target: "thích",
              pronunciation: ["/tʰic̚˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi thích bạn.",
              translation: "我喜歡你。",
            },
            {
              sentence: "Tôi thích cà phê.",
              translation: "我喜歡咖啡。",
            },
            {
              sentence: "Bạn thích cái nào?",
              translation: "你喜歡哪一個？",
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
              term_target: "thức dậy",
              pronunciation: ["/tʰɨk̚˧˥ zəj˧˨ˀ/"],
              specific_note: "醒來/起床",
            },
            {
              term_target: "ngủ dậy",
              pronunciation: ["/ŋu˧˩ zəj˧˨ˀ/"],
              specific_note: "睡醒",
            },
          ],
          examples: [
            {
              sentence: "Thức dậy sớm.",
              translation: "早起。",
            },
            {
              sentence: "Dậy đi!",
              translation: "起來啦！",
            },
            {
              sentence: "Tôi thường thức dậy lúc 7 giờ.",
              translation: "我通常7點起床。",
            },
          ],
          usage_note: "起床。",
          image_file: "wake_up.png",
        },
        {
          id: "v-20",
          term_zh: "說話",
          related_terms: [
            {
              term_target: "nói chuyện",
              pronunciation: ["/nɔj˧˥ tɕwiən˧˨ˀ/"],
              specific_note: "交談/聊天",
            },
          ],
          examples: [
            {
              sentence: "Nói chuyện với bạn.",
              translation: "跟你說話。",
            },
            {
              sentence: "Chúng ta cần nói chuyện.",
              translation: "我們需要談談。",
            },
            {
              sentence: "Đừng nói chuyện riêng.",
              translation: "不要私下說話(聊天)。",
            },
          ],
          usage_note: "交談。",
          image_file: "speak.png",
        },
        {
          id: "v-21",
          term_zh: "聽見",
          related_terms: [
            {
              term_target: "nghe",
              pronunciation: ["/ŋɛ˧/"],
              specific_note: "聽/聽見",
            },
            {
              term_target: "nghe thấy",
              pronunciation: ["/ŋɛ˧ tʰəj˧˥/"],
              specific_note: "聽到了",
            },
          ],
          examples: [
            {
              sentence: "Bạn có nghe thấy không?",
              translation: "你有聽到嗎？",
            },
            {
              sentence: "Tôi nghe nhạc.",
              translation: "我聽音樂。",
            },
            {
              sentence: "Nghe này!",
              translation: "聽這(聽我說)！",
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
              term_target: "viết",
              pronunciation: ["/viət̚˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Viết tên.",
              translation: "寫名字。",
            },
            {
              sentence: "Viết xuống.",
              translation: "寫下來。",
            },
            {
              sentence: "Tôi đang viết thư.",
              translation: "我正在寫信。",
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
              term_target: "đọc",
              pronunciation: ["/ɗawk͡p̚˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đọc sách.",
              translation: "看書。",
            },
            {
              sentence: "Đọc tin tức.",
              translation: "看新聞。",
            },
            {
              sentence: "Bạn đang đọc gì?",
              translation: "你在讀什麼？",
            },
          ],
          usage_note: "讀文字。",
          image_file: "read.png",
        },
        {
          id: "v-24",
          term_zh: "等待",
          related_terms: [
            {
              term_target: "đợi",
              pronunciation: ["/ɗəːj˧˨ˀ/"],
              specific_note: "",
            },
            {
              term_target: "chờ",
              pronunciation: ["/tɕəː˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đợi tôi với.",
              translation: "等我一下。",
            },
            {
              sentence: "Chờ một chút.",
              translation: "等一下。",
            },
            {
              sentence: "Tôi đang đợi xe buýt.",
              translation: "我正在等公車。",
            },
          ],
          usage_note: "兩者通用。",
          image_file: "wait.png",
        },
        {
          id: "v-25",
          term_zh: "嘗試",
          related_terms: [
            {
              term_target: "thử",
              pronunciation: ["/tʰɨ˧˩/"],
              specific_note: "試(吃/穿)",
            },
            {
              term_target: "cố gắng",
              pronunciation: ["/ko˧˥ ɣaŋ˧˥/"],
              specific_note: "嘗試/努力",
            },
          ],
          examples: [
            {
              sentence: "Thử món này.",
              translation: "試試這道菜。",
            },
            {
              sentence: "Thử lại lần nữa.",
              translation: "再試一次。",
            },
            {
              sentence: "Tôi sẽ cố gắng.",
              translation: "我會盡力(嘗試)。",
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
              term_target: "trả tiền",
              pronunciation: ["/tɕaː˧˩ tiən˨˩/"],
              specific_note: "付錢",
            },
            {
              term_target: "thanh toán",
              pronunciation: ["/tʰajŋ̟˧ taːn˧˥/"],
              specific_note: "結帳(正式)",
            },
          ],
          examples: [
            {
              sentence: "Tôi sẽ trả tiền.",
              translation: "我來付錢。",
            },
            {
              sentence: "Làm ơn thanh toán.",
              translation: "麻煩結帳。",
            },
            {
              sentence: "Bạn đã trả tiền chưa?",
              translation: "你付錢了嗎？",
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
              term_target: "chọn",
              pronunciation: ["/tɕɔn˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Chọn một cái.",
              translation: "選一個。",
            },
            {
              sentence: "Khó chọn quá.",
              translation: "太難選了。",
            },
            {
              sentence: "Tôi chọn cái màu đỏ.",
              translation: "我選紅色的那個。",
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
              term_target: "vào",
              pronunciation: ["/vaːw˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Vào nhà.",
              translation: "進屋。",
            },
            {
              sentence: "Mời vào.",
              translation: "請進。",
            },
            {
              sentence: "Không được vào.",
              translation: "禁止進入。",
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
              term_target: "sống",
              pronunciation: ["/soŋ͡m˧˥/"],
              specific_note: "生活/生存",
            },
            {
              term_target: "ở",
              pronunciation: ["/əː˧˩/"],
              specific_note: "居住/在",
            },
          ],
          examples: [
            {
              sentence: "Tôi sống ở Đài Bắc.",
              translation: "我住在台北(生活)。",
            },
            {
              sentence: "Bạn ở đâu?",
              translation: "你住哪裡？",
            },
            {
              sentence: "Tôi đang ở nhà.",
              translation: "我正在家。",
            },
          ],
          usage_note: "Ở 最常用於「在...」或「住」。",
          image_file: "live.png",
        },
        {
          id: "v-30",
          term_zh: "到達",
          related_terms: [
            {
              term_target: "đến",
              pronunciation: ["/ɗen˧˥/"],
              specific_note: "",
            },
            {
              term_target: "tới",
              pronunciation: ["/təj˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đến nơi rồi.",
              translation: "到了。",
            },
            {
              sentence: "Khi nào tới nơi?",
              translation: "什麼時候會到？",
            },
            {
              sentence: "Tôi vừa mới đến.",
              translation: "我剛到。",
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
              term_target: "đi bộ",
              pronunciation: ["/ɗi˧ ɓo˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi bộ về nhà.",
              translation: "走路回家。",
            },
            {
              sentence: "Chúng ta đi bộ đi.",
              translation: "我們走路去吧。",
            },
            {
              sentence: "Đi bộ tốt cho sức khỏe.",
              translation: "走路對健康很好。",
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
              term_target: "mở",
              pronunciation: ["/məː˧˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Mở cửa.",
              translation: "開門。",
            },
            {
              sentence: "Mở sách ra.",
              translation: "打開書。",
            },
            {
              sentence: "Cửa hàng mở cửa.",
              translation: "商店開門(營業)。",
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
              term_target: "đóng",
              pronunciation: ["/ɗawŋ͡m˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đóng cửa sổ.",
              translation: "關窗。",
            },
            {
              sentence: "Làm ơn đóng cửa.",
              translation: "請關門。",
            },
            {
              sentence: "Cửa hàng đóng cửa.",
              translation: "商店關門(打烊)。",
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
              term_target: "giúp",
              pronunciation: ["/zup̚˧˥/"],
              specific_note: "通用",
            },
            {
              term_target: "giúp đỡ",
              pronunciation: ["/zup̚˧˥ ɗə˧ˀ˥/"],
              specific_note: "幫助(名詞/動詞)",
            },
          ],
          examples: [
            {
              sentence: "Giúp tôi.",
              translation: "幫我。",
            },
            {
              sentence: "Cảm ơn đã giúp đỡ.",
              translation: "謝謝幫忙。",
            },
            {
              sentence: "Tôi có thể giúp gì cho bạn?",
              translation: "我可以幫你什麼嗎？",
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
              term_target: "mang",
              pronunciation: ["/maːŋ˧/"],
              specific_note: "攜帶",
            },
            {
              term_target: "đem",
              pronunciation: ["/ɗɛm˧/"],
              specific_note: "帶/拿",
            },
          ],
          examples: [
            {
              sentence: "Mang nước.",
              translation: "帶水。",
            },
            {
              sentence: "Mang về.",
              translation: "外帶 (帶回去)。",
            },
            {
              sentence: "Đừng quên mang ô.",
              translation: "別忘了帶傘。",
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
              term_target: "cần",
              pronunciation: ["/kən˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi cần bạn.",
              translation: "我需要你。",
            },
            {
              sentence: "Cần bao lâu?",
              translation: "需要多久？",
            },
            {
              sentence: "Bạn có cần túi không?",
              translation: "你需要袋子嗎？",
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
              term_target: "dùng",
              pronunciation: ["/zuŋ͡m˨˩/"],
              specific_note: "通用",
            },
            {
              term_target: "sử dụng",
              pronunciation: ["/sɨ˧˩ zuŋ͡m˧˨ˀ/"],
              specific_note: "正式",
            },
          ],
          examples: [
            {
              sentence: "Dùng bút.",
              translation: "用筆。",
            },
            {
              sentence: "Dùng tiếng Anh.",
              translation: "用英文。",
            },
            {
              sentence: "Dễ sử dụng.",
              translation: "容易使用。",
            },
          ],
          usage_note: "口語多用 Dùng。",
          image_file: "use.png",
        },
        {
          id: "v-38",
          term_zh: "變成",
          related_terms: [
            {
              term_target: "trở thành",
              pronunciation: ["/tɕəː˧˩ tʰaɲ˨˩/"],
              specific_note: "成為",
            },
            {
              term_target: "biến thành",
              pronunciation: ["/ɓiən˧˥ tʰaɲ˨˩/"],
              specific_note: "變成",
            },
          ],
          examples: [
            {
              sentence: "Trở thành giáo viên.",
              translation: "成為老師。",
            },
            {
              sentence: "Biến thành bướm.",
              translation: "變成蝴蝶。",
            },
            {
              sentence: "Trời trở lạnh.",
              translation: "天變冷了。",
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
              term_target: "bắt đầu",
              pronunciation: ["/ɓat̚˧˥ ɗəw˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bắt đầu làm.",
              translation: "開始做。",
            },
            {
              sentence: "Chúng ta bắt đầu thôi.",
              translation: "我們開始吧。",
            },
            {
              sentence: "Phim bắt đầu lúc 7 giờ.",
              translation: "電影7點開始。",
            },
          ],
          usage_note: "開始。",
          image_file: "start.png",
        },
        {
          id: "v-40",
          term_zh: "結束",
          related_terms: [
            {
              term_target: "kết thúc",
              pronunciation: ["/ket̚˧˥ tʰuk͡p̚˧˥/"],
              specific_note: "結束",
            },
            {
              term_target: "xong",
              pronunciation: ["/sawŋ͡m˧/"],
              specific_note: "完畢/好了",
            },
          ],
          examples: [
            {
              sentence: "Làm xong.",
              translation: "做完了。",
            },
            {
              sentence: "Ăn xong chưa?",
              translation: "吃飽了嗎？",
            },
            {
              sentence: "Cuộc họp kết thúc.",
              translation: "會議結束。",
            },
          ],
          usage_note: "完成。",
          image_file: "finish.png",
        },
        {
          id: "v-41",
          term_zh: "停止",
          related_terms: [
            {
              term_target: "dừng",
              pronunciation: ["/zɨŋ˨˩/"],
              specific_note: "",
            },
            {
              term_target: "dừng lại",
              pronunciation: ["/zɨŋ˨˩ laːj˧˨ˀ/"],
              specific_note: "停下來",
            },
          ],
          examples: [
            {
              sentence: "Dừng xe.",
              translation: "停車。",
            },
            {
              sentence: "Làm ơn dừng lại.",
              translation: "請停下來。",
            },
            {
              sentence: "Không dừng được.",
              translation: "停不下來。",
            },
          ],
          usage_note: "停止。",
          image_file: "stop.png",
        },
        {
          id: "v-42",
          term_zh: "記住",
          related_terms: [
            {
              term_target: "nhớ",
              pronunciation: ["/ɲəː˧˥/"],
              specific_note: "記得/想念",
            },
            {
              term_target: "ghi nhớ",
              pronunciation: ["/ɣi˧ ɲəː˧˥/"],
              specific_note: "牢記",
            },
          ],
          examples: [
            {
              sentence: "Tôi nhớ bạn.",
              translation: "我記得你 (或我想你)。",
            },
            {
              sentence: "Bạn có nhớ không?",
              translation: "你記得嗎？",
            },
            {
              sentence: "Nhớ mua sữa.",
              translation: "記得買牛奶。",
            },
          ],
          usage_note: "記憶。",
          image_file: "remember.png",
        },
        {
          id: "v-43",
          term_zh: "談話",
          related_terms: [
            {
              term_target: "nói chuyện",
              pronunciation: ["/nɔj˧˥ tɕwiən˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Nói chuyện với tôi.",
              translation: "跟我說話。",
            },
            {
              sentence: "Chúng tôi đang nói chuyện.",
              translation: "我們正在聊天。",
            },
            {
              sentence: "Tôi muốn nói chuyện với bạn.",
              translation: "我想跟你談談。",
            },
          ],
          usage_note: "交談。",
          image_file: "talk.png",
        },
        {
          id: "v-44",
          term_zh: "見面",
          related_terms: [
            {
              term_target: "gặp",
              pronunciation: ["/ɣap̚˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Gặp bạn bè.",
              translation: "見朋友。",
            },
            {
              sentence: "Hẹn gặp lại.",
              translation: "下次見。",
            },
            {
              sentence: "Gặp nhau ở đâu?",
              translation: "在哪裡見面？",
            },
          ],
          usage_note: "會面。",
          image_file: "meet.png",
        },
        {
          id: "v-45",
          term_zh: "乘坐（工具）",
          related_terms: [
            {
              term_target: "đi",
              pronunciation: ["/ɗi˧/"],
              specific_note: "去/搭乘",
            },
            {
              term_target: "bắt",
              pronunciation: ["/ɓat̚˧˥/"],
              specific_note: "抓/搭(車)",
            },
          ],
          examples: [
            {
              sentence: "Đi xe buýt.",
              translation: "搭公車。",
            },
            {
              sentence: "Bắt taxi.",
              translation: "搭計程車。",
            },
            {
              sentence: "Tôi đi xe máy.",
              translation: "我騎機車。",
            },
          ],
          usage_note: "搭乘。",
          image_file: "take.png",
        },
        {
          id: "v-46",
          term_zh: "放",
          related_terms: [
            {
              term_target: "đặt",
              pronunciation: ["/ɗat̚˧˨ˀ/"],
              specific_note: "放置/預定",
            },
            {
              term_target: "để",
              pronunciation: ["/ɗe˧˩/"],
              specific_note: "放/讓",
            },
          ],
          examples: [
            {
              sentence: "Để ở đây.",
              translation: "放這裡。",
            },
            {
              sentence: "Đặt trên bàn.",
              translation: "放在桌上。",
            },
            {
              sentence: "Để tôi làm.",
              translation: "讓我來做。",
            },
          ],
          usage_note: "放置。",
          image_file: "put.png",
        },
        {
          id: "v-47",
          term_zh: "吃",
          related_terms: [
            { term_target: "ăn", pronunciation: ["/an˧/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Ăn cơm.",
              translation: "吃飯。",
            },
            {
              sentence: "Ăn phở.",
              translation: "吃河粉。",
            },
            {
              sentence: "Bạn ăn chưa?",
              translation: "你吃了嗎？",
            },
          ],
          usage_note: "進食。",
          image_file: "eat.png",
        },
        {
          id: "v-48",
          term_zh: "睡覺",
          related_terms: [
            {
              term_target: "ngủ",
              pronunciation: ["/ŋu˧˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi ngủ.",
              translation: "去睡覺。",
            },
            {
              sentence: "Ngủ ngon.",
              translation: "睡個好覺 (晚安)。",
            },
            {
              sentence: "Tôi buồn ngủ.",
              translation: "我想睡覺 (睏了)。",
            },
          ],
          usage_note: "睡眠。",
          image_file: "sleep.png",
        },
        {
          id: "v-49",
          term_zh: "寄送",
          related_terms: [
            {
              term_target: "gửi",
              pronunciation: ["/ɣɨj˧˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Gửi thư.",
              translation: "寄信。",
            },
            {
              sentence: "Gửi tin nhắn.",
              translation: "傳訊息。",
            },
            {
              sentence: "Gửi tiền.",
              translation: "寄錢。",
            },
          ],
          usage_note: "傳送。",
          image_file: "send.png",
        },
        {
          id: "v-50",
          term_zh: "開車",
          related_terms: [
            {
              term_target: "lái xe",
              pronunciation: ["/laːj˧˥ sɛ˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Lái xe đi làm.",
              translation: "開車上班。",
            },
            {
              sentence: "Lái xe cẩn thận.",
              translation: "小心開車。",
            },
            {
              sentence: "Bạn biết lái xe không?",
              translation: "你會開車嗎？",
            },
          ],
          usage_note: "駕駛。",
          image_file: "drive.png",
        },
        {
          id: "v-51",
          term_zh: "讀書",
          related_terms: [
            {
              term_target: "học",
              pronunciation: ["/hawk͡p̚˧˨ˀ/"],
              specific_note: "學習",
            },
            {
              term_target: "đọc sách",
              pronunciation: ["/ɗawk͡p̚˧˨ˀ sajc̚˧˥/"],
              specific_note: "閱讀書籍",
            },
          ],
          examples: [
            {
              sentence: "Học tiếng Việt.",
              translation: "學越南語。",
            },
            {
              sentence: "Tôi đang học bài.",
              translation: "我正在溫習功課。",
            },
            {
              sentence: "Chăm chỉ học tập.",
              translation: "用功讀書。",
            },
          ],
          usage_note: "學習。",
          image_file: "study.png",
        },
        {
          id: "v-52",
          term_zh: "回去",
          related_terms: [
            { term_target: "về", pronunciation: ["/ve˨˩/"], specific_note: "" },
            {
              term_target: "quay lại",
              pronunciation: ["/kwaj˧ laːj˧˨ˀ/"],
              specific_note: "返回",
            },
          ],
          examples: [
            {
              sentence: "Về nhà.",
              translation: "回家。",
            },
            {
              sentence: "Tôi phải về rồi.",
              translation: "我得回去了。",
            },
            {
              sentence: "Khi nào bạn về nước?",
              translation: "你什麼時候回國？",
            },
          ],
          usage_note: "歸返。",
          image_file: "go_back.png",
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
              term_target: "tốt",
              pronunciation: ["/tot̚˧˥/"],
              specific_note: "好/良",
            },
          ],
          examples: [
            {
              sentence: "Bạn là người tốt.",
              translation: "你是個好人。",
            },
            {
              sentence: "Sức khỏe tốt.",
              translation: "身體健康(好)。",
            },
            {
              sentence: "Làm tốt lắm!",
              translation: "做得好！",
            },
          ],
          usage_note: "正面形容詞。",
          image_file: "good.png",
        },
        {
          id: "adj-02",
          term_zh: "壞的",
          related_terms: [
            {
              term_target: "xấu",
              pronunciation: ["/səw˧˥/"],
              specific_note: "壞/醜",
            },
          ],
          examples: [
            {
              sentence: "Người xấu.",
              translation: "壞人。",
            },
            {
              sentence: "Thời tiết xấu.",
              translation: "天氣不好。",
            },
            {
              sentence: "Chữ viết xấu.",
              translation: "字寫得很醜。",
            },
          ],
          usage_note: "指品德壞或外表醜。",
          image_file: "bad.png",
        },
        {
          id: "adj-03",
          term_zh: "新的",
          related_terms: [
            {
              term_target: "mới",
              pronunciation: ["/məːj˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Sách mới.",
              translation: "新書。",
            },
            {
              sentence: "Chúc mừng năm mới.",
              translation: "新年快樂。",
            },
            {
              sentence: "Tôi có điện thoại mới.",
              translation: "我有新手機。",
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
              term_target: "đầu tiên",
              pronunciation: ["/ɗəw˨˩ tiən˧/"],
              specific_note: "首先/最初",
            },
            {
              term_target: "thứ nhất",
              pronunciation: ["/tʰɨ˧˥ ɲət̚˧˥/"],
              specific_note: "第一(順序)",
            },
          ],
          examples: [
            {
              sentence: "Ngày đầu tiên.",
              translation: "第一天。",
            },
            {
              sentence: "Lần đầu tiên.",
              translation: "第一次。",
            },
            {
              sentence: "Người thứ nhất.",
              translation: "第一個人。",
            },
          ],
          usage_note: "順序用 Thứ nhất，最初用 Đầu tiên。",
          image_file: "first.png",
        },
        {
          id: "adj-05",
          term_zh: "上一個",
          related_terms: [
            {
              term_target: "trước",
              pronunciation: ["/tɕɨək̚˧˥/"],
              specific_note: "之前/上一個",
            },
          ],
          examples: [
            {
              sentence: "Tuần trước.",
              translation: "上週。",
            },
            {
              sentence: "Tháng trước.",
              translation: "上個月。",
            },
            {
              sentence: "Năm trước.",
              translation: "去年。",
            },
          ],
          usage_note: "過去的時間。",
          image_file: "last.png",
        },
        {
          id: "adj-06",
          term_zh: "下一個",
          related_terms: [
            {
              term_target: "sau",
              pronunciation: ["/saw˧/"],
              specific_note: "之後",
            },
            {
              term_target: "tiếp theo",
              pronunciation: ["/tiəp̚˧˥ tʰɛw˧/"],
              specific_note: "接續",
            },
          ],
          examples: [
            {
              sentence: "Tuần sau.",
              translation: "下週。",
            },
            {
              sentence: "Người tiếp theo.",
              translation: "下一位。",
            },
            {
              sentence: "Hẹn gặp lại sau.",
              translation: "稍後見。",
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
              term_target: "dài",
              pronunciation: ["/zaːj˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tóc dài.",
              translation: "長髮。",
            },
            {
              sentence: "Con đường dài.",
              translation: "長路。",
            },
            {
              sentence: "Cái váy này quá dài.",
              translation: "這條裙子太長了。",
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
              term_target: "to",
              pronunciation: ["/tɔ˧/"],
              specific_note: "大(口語)",
            },
            {
              term_target: "lớn",
              pronunciation: ["/ləːn˧˥/"],
              specific_note: "大(正式/長大)",
            },
          ],
          examples: [
            {
              sentence: "Nhà to.",
              translation: "大房子。",
            },
            {
              sentence: "Thành phố lớn.",
              translation: "大城市。",
            },
            {
              sentence: "Anh ấy lớn rồi.",
              translation: "他長大了。",
            },
          ],
          usage_note: "To 描述體積，Lớn 可描述規模或年齡。",
          image_file: "big.png",
        },
        {
          id: "adj-09",
          term_zh: "小的",
          related_terms: [
            {
              term_target: "nhỏ",
              pronunciation: ["/ɲɔ˧˩/"],
              specific_note: "小",
            },
            {
              term_target: "bé",
              pronunciation: ["/ɓɛ˧˥/"],
              specific_note: "小/幼小",
            },
          ],
          examples: [
            {
              sentence: "Cái túi nhỏ.",
              translation: "小包包。",
            },
            {
              sentence: "Con mèo bé.",
              translation: "小貓。",
            },
            {
              sentence: "Em bé.",
              translation: "嬰兒/小孩。",
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
              term_target: "nhiều",
              pronunciation: ["/ɲiəw˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Nhiều người.",
              translation: "很多人。",
            },
            {
              sentence: "Cảm ơn nhiều.",
              translation: "多謝。",
            },
            {
              sentence: "Tôi có nhiều tiền.",
              translation: "我有很多錢。",
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
              term_target: "cao",
              pronunciation: ["/kaːw˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Nhà cao tầng.",
              translation: "高樓。",
            },
            {
              sentence: "Anh ấy rất cao.",
              translation: "他很高。",
            },
            {
              sentence: "Giá cao.",
              translation: "價格高。",
            },
          ],
          usage_note: "高度或價格高。",
          image_file: "tall.png",
        },
        {
          id: "adj-12",
          term_zh: "年輕的",
          related_terms: [
            {
              term_target: "trẻ",
              pronunciation: ["/tɕɛ˧˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Người trẻ.",
              translation: "年輕人。",
            },
            {
              sentence: "Cô ấy trông rất trẻ.",
              translation: "她看起來很年輕。",
            },
            {
              sentence: "Tuổi trẻ.",
              translation: "青春/年輕歲月。",
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
              term_target: "già",
              pronunciation: ["/zaː˨˩/"],
              specific_note: "人",
            },
            {
              term_target: "cũ",
              pronunciation: ["/ku˧ˀ˥/"],
              specific_note: "物",
            },
          ],
          examples: [
            {
              sentence: "Người già.",
              translation: "老人。",
            },
            {
              sentence: "Sách cũ.",
              translation: "舊書。",
            },
            {
              sentence: "Xe cũ.",
              translation: "舊車。",
            },
          ],
          usage_note: "Già 用於生物，Cũ 用於物品。",
          image_file: "old.png",
        },
        {
          id: "adj-14",
          term_zh: "近的",
          related_terms: [
            {
              term_target: "gần",
              pronunciation: ["/ɣən˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Gần nhà.",
              translation: "離家近。",
            },
            {
              sentence: "Gần đây có chợ không?",
              translation: "這附近有市場嗎？",
            },
            {
              sentence: "Ngồi gần tôi.",
              translation: "坐我附近。",
            },
          ],
          usage_note: "距離近。",
          image_file: "near.png",
        },
        {
          id: "adj-15",
          term_zh: "遠的",
          related_terms: [
            { term_target: "xa", pronunciation: ["/saː˧/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Xa nhà.",
              translation: "離家遠。",
            },
            {
              sentence: "Đi xa.",
              translation: "去遠方。",
            },
            {
              sentence: "Cách đây không xa.",
              translation: "離這裡不遠。",
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
              term_target: "nhanh",
              pronunciation: ["/ɲaɲ˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi nhanh lên.",
              translation: "走快點。",
            },
            {
              sentence: "Nói nhanh quá.",
              translation: "說得太快了。",
            },
            {
              sentence: "Ăn nhanh.",
              translation: "吃很快。",
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
              term_target: "chậm",
              pronunciation: ["/tɕəm˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi chậm.",
              translation: "走得慢。",
            },
            {
              sentence: "Nói chậm lại.",
              translation: "說慢一點。",
            },
            {
              sentence: "Đồng hồ chạy chậm.",
              translation: "時鐘慢了。",
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
              term_target: "nóng",
              pronunciation: ["/nawŋ͡m˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Trời nóng.",
              translation: "天熱。",
            },
            {
              sentence: "Nước nóng.",
              translation: "熱水。",
            },
            {
              sentence: "Hôm nay nóng quá.",
              translation: "今天太熱了。",
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
              term_target: "lạnh",
              pronunciation: ["/lajŋ̟˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Trời lạnh.",
              translation: "天冷。",
            },
            {
              sentence: "Nước lạnh.",
              translation: "冷水。",
            },
            {
              sentence: "Tôi cảm thấy lạnh.",
              translation: "我覺得冷。",
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
              term_target: "sạch",
              pronunciation: ["/sac̚˧˨ˀ/"],
              specific_note: "",
            },
            {
              term_target: "sạch sẽ",
              pronunciation: ["/sac̚˧˨ˀ sɛ˧ˀ˥/"],
              specific_note: "乾淨(強調)",
            },
          ],
          examples: [
            {
              sentence: "Nhà sạch.",
              translation: "乾淨的房子。",
            },
            {
              sentence: "Nước sạch.",
              translation: "乾淨的水。",
            },
            {
              sentence: "Giữ gìn vệ sinh sạch sẽ.",
              translation: "保持衛生乾淨。",
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
              term_target: "bẩn",
              pronunciation: ["/ɓən˧˩/"],
              specific_note: "北越常用",
            },
            {
              term_target: "dơ",
              pronunciation: ["/zəː˧/"],
              specific_note: "南越常用",
            },
          ],
          examples: [
            {
              sentence: "Tay bẩn.",
              translation: "手很髒。",
            },
            {
              sentence: "Quần áo bẩn.",
              translation: "髒衣服。",
            },
            {
              sentence: "Đừng chạm vào, dơ lắm.",
              translation: "別碰，很髒(南越)。",
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
              term_target: "dễ",
              pronunciation: ["/ze˧ˀ˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bài tập dễ.",
              translation: "作業簡單。",
            },
            {
              sentence: "Dễ làm.",
              translation: "容易做。",
            },
            {
              sentence: "Tiếng Việt không dễ.",
              translation: "越南語不簡單。",
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
              term_target: "khó",
              pronunciation: ["/xɔ˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Việc khó.",
              translation: "困難的工作。",
            },
            {
              sentence: "Khó quá.",
              translation: "太難了。",
            },
            {
              sentence: "Tính tình khó chịu.",
              translation: "個性很難搞。",
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
              term_target: "đúng",
              pronunciation: ["/ɗuŋ͡m˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Làm đúng.",
              translation: "做對了。",
            },
            {
              sentence: "Câu trả lời đúng.",
              translation: "正確答案。",
            },
            {
              sentence: "Đúng rồi.",
              translation: "對了/沒錯。",
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
              term_target: "sai",
              pronunciation: ["/saːj˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Làm sai.",
              translation: "做錯了。",
            },
            {
              sentence: "Sai rồi.",
              translation: "錯了。",
            },
            {
              sentence: "Đi sai đường.",
              translation: "走錯路。",
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
              term_target: "quan trọng",
              pronunciation: ["/kwaːn˧ tɕawŋ͡m˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Người quan trọng.",
              translation: "重要的人。",
            },
            {
              sentence: "Việc này rất quan trọng.",
              translation: "這件事很重要。",
            },
            {
              sentence: "Cuộc họp quan trọng.",
              translation: "重要會議。",
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
              term_target: "khác",
              pronunciation: ["/xalːk̚˧˥/"],
              specific_note: "",
            },
            {
              term_target: "khác nhau",
              pronunciation: ["/xalːk̚˧˥ ɲaw˧/"],
              specific_note: "互相不同",
            },
          ],
          examples: [
            {
              sentence: "Người khác.",
              translation: "別人(不同的人)。",
            },
            {
              sentence: "Cái này khác.",
              translation: "這個不一樣。",
            },
            {
              sentence: "Hai cái khác nhau.",
              translation: "兩個不一樣。",
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
              term_target: "thật",
              pronunciation: ["/tʰət̚˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Sự thật.",
              translation: "事實。",
            },
            {
              sentence: "Người thật.",
              translation: "真人。",
            },
            {
              sentence: "Nói thật.",
              translation: "說實話。",
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
              term_target: "thú vị",
              pronunciation: ["/tʰu˧˥ vi˧˨ˀ/"],
              specific_note: "有意思",
            },
            {
              term_target: "hay",
              pronunciation: ["/haj˧/"],
              specific_note: "好/有趣(電影/書)",
            },
          ],
          examples: [
            {
              sentence: "Phim hay.",
              translation: "好看的電影。",
            },
            {
              sentence: "Câu chuyện thú vị.",
              translation: "有趣的故事。",
            },
            {
              sentence: "Rất hay.",
              translation: "很有趣/很好。",
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
              term_target: "đẹp",
              pronunciation: ["/ɗɛp̚˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Hoa đẹp.",
              translation: "美麗的花。",
            },
            {
              sentence: "Cô ấy rất đẹp.",
              translation: "她很漂亮。",
            },
            {
              sentence: "Cảnh đẹp.",
              translation: "美景。",
            },
          ],
          usage_note: "漂亮。",
          image_file: "beautiful.png",
        },
        {
          id: "adj-31",
          term_zh: "便宜的",
          related_terms: [
            { term_target: "rẻ", pronunciation: ["/zɛ˧˩/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Giá rẻ.",
              translation: "價格便宜。",
            },
            {
              sentence: "Cái này rẻ.",
              translation: "這個便宜。",
            },
            {
              sentence: "Rẻ quá.",
              translation: "太便宜了。",
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
              term_target: "đắt",
              pronunciation: ["/ɗat̚˧˥/"],
              specific_note: "北越常用",
            },
            {
              term_target: "mắc",
              pronunciation: ["/mak̚˧˥/"],
              specific_note: "南越常用",
            },
          ],
          examples: [
            {
              sentence: "Quá đắt.",
              translation: "太貴了。",
            },
            {
              sentence: "Giá đắt.",
              translation: "價格昂貴。",
            },
            {
              sentence: "Cái này mắc quá.",
              translation: "這個太貴了 (南越)。",
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
              term_target: "đói",
              pronunciation: ["/ɗɔj˧˥/"],
              specific_note: "",
            },
            {
              term_target: "đói bụng",
              pronunciation: ["/ɗɔj˧˥ ɓuŋ͡m˧˨ˀ/"],
              specific_note: "肚子餓",
            },
          ],
          examples: [
            {
              sentence: "Tôi đói.",
              translation: "我餓了。",
            },
            {
              sentence: "Tôi đói bụng quá.",
              translation: "我肚子好餓。",
            },
            {
              sentence: "Bạn có đói không?",
              translation: "你餓嗎？",
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
              term_target: "mệt",
              pronunciation: ["/met̚˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi mệt.",
              translation: "我累了。",
            },
            {
              sentence: "Làm việc mệt mỏi.",
              translation: "工作很累。",
            },
            {
              sentence: "Trông bạn có vẻ mệt.",
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
              term_target: "bận",
              pronunciation: ["/ɓən˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi bận.",
              translation: "我很忙。",
            },
            {
              sentence: "Tôi bận việc.",
              translation: "我忙著工作(事情)。",
            },
            {
              sentence: "Bạn có bận không?",
              translation: "你忙嗎？",
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
              term_target: "vui",
              pronunciation: ["/vuj˧/"],
              specific_note: "開心",
            },
            {
              term_target: "hạnh phúc",
              pronunciation: ["/hajŋ̟˧˨ˀ fuk͡p̚˧˥/"],
              specific_note: "幸福/快樂",
            },
          ],
          examples: [
            {
              sentence: "Rất vui.",
              translation: "很高興。",
            },
            {
              sentence: "Vui vẻ nhé.",
              translation: "祝你玩得開心。",
            },
            {
              sentence: "Gia đình hạnh phúc.",
              translation: "幸福的家庭。",
            },
          ],
          usage_note: "心情。",
          image_file: "happy.png",
        },
        {
          id: "adj-37",
          term_zh: "悲傷的",
          related_terms: [
            {
              term_target: "buồn",
              pronunciation: ["/ɓuən˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi buồn.",
              translation: "我難過。",
            },
            {
              sentence: "Chuyện buồn.",
              translation: "悲傷的故事。",
            },
            {
              sentence: "Đừng buồn nữa.",
              translation: "別再難過了。",
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
              term_target: "giống",
              pronunciation: ["/zoŋ͡m˧˥/"],
              specific_note: "像",
            },
            {
              term_target: "giống nhau",
              pronunciation: ["/zoŋ͡m˧˥ ɲaw˧/"],
              specific_note: "相像",
            },
          ],
          examples: [
            {
              sentence: "Hai người giống nhau.",
              translation: "兩個人很像。",
            },
            {
              sentence: "Giống như tôi.",
              translation: "像我一樣。",
            },
            {
              sentence: "Màu sắc giống nhau.",
              translation: "顏色很像。",
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
              term_target: "nổi tiếng",
              pronunciation: ["/noj˧˩ tiəŋ˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Người nổi tiếng.",
              translation: "名人。",
            },
            {
              sentence: "Nơi này rất nổi tiếng.",
              translation: "這地方很有名。",
            },
            {
              sentence: "Ca sĩ nổi tiếng.",
              translation: "知名歌手。",
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
              term_target: "nước ngoài",
              pronunciation: ["/nɨək̚˧˥ ŋwaːj˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Người nước ngoài.",
              translation: "外國人。",
            },
            {
              sentence: "Đi nước ngoài.",
              translation: "出國。",
            },
            {
              sentence: "Tiếng nước ngoài.",
              translation: "外語。",
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
              term_target: "thông minh",
              pronunciation: ["/tʰoŋ͡m˧ miɲ˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bé thông minh.",
              translation: "聰明的孩子。",
            },
            {
              sentence: "Điện thoại thông minh.",
              translation: "智慧型手機。",
            },
            {
              sentence: "Bạn thật thông minh.",
              translation: "你真聰明。",
            },
          ],
          usage_note: "腦袋好。",
          image_file: "intelligent.png",
        },
        {
          id: "adj-42",
          term_zh: "危險的",
          related_terms: [
            {
              term_target: "nguy hiểm",
              pronunciation: ["/ŋwi˧ hiəm˧˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Rất nguy hiểm.",
              translation: "很危險。",
            },
            {
              sentence: "Chỗ này nguy hiểm.",
              translation: "這地方危險。",
            },
            {
              sentence: "Cẩn thận, nguy hiểm!",
              translation: "小心，危險！",
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
              term_target: "tốt bụng",
              pronunciation: ["/tot̚˧˥ ɓuŋ͡m˧˨ˀ/"],
              specific_note: "好心",
            },
            {
              term_target: "hiền",
              pronunciation: ["/hiən˨˩/"],
              specific_note: "和善",
            },
          ],
          examples: [
            {
              sentence: "Anh ấy tốt bụng.",
              translation: "他心腸好。",
            },
            {
              sentence: "Cô giáo hiền.",
              translation: "老師很和善。",
            },
            {
              sentence: "Người tốt bụng.",
              translation: "好心人。",
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
              term_target: "tất cả",
              pronunciation: ["/tət̚˧˥ kaː˧˩/"],
              specific_note: "所有/全部",
            },
            {
              term_target: "mỗi",
              pronunciation: ["/moj˧ˀ˥/"],
              specific_note: "每一個",
            },
          ],
          examples: [
            {
              sentence: "Tất cả mọi người.",
              translation: "所有人。",
            },
            {
              sentence: "Mỗi ngày.",
              translation: "每一天。",
            },
            {
              sentence: "Tôi muốn tất cả.",
              translation: "我全都要。",
            },
          ],
          usage_note: "全部。",
          image_file: "every.png",
        },
        {
          id: "adj-45",
          term_zh: "喜愛的",
          related_terms: [
            {
              term_target: "yêu thích",
              pronunciation: ["/iəw˧ tʰic̚˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Món ăn yêu thích.",
              translation: "喜愛的食物。",
            },
            {
              sentence: "Bài hát yêu thích.",
              translation: "喜愛的歌曲。",
            },
            {
              sentence: "Sở thích của tôi.",
              translation: "我的嗜好(喜歡的事物)。",
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
              term_target: "ngon",
              pronunciation: ["/ŋɔn˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Món này ngon.",
              translation: "這道菜好吃。",
            },
            {
              sentence: "Ngon quá!",
              translation: "太好吃了！",
            },
            {
              sentence: "Ăn ngon miệng nhé.",
              translation: "祝你用餐愉快(吃得美味)。",
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
              term_target: "thời gian",
              pronunciation: ["/tʰəːj˨˩ zaːn˧/"],
              specific_note: "時間(抽象)",
            },
            {
              term_target: "giờ",
              pronunciation: ["/zəː˨˩/"],
              specific_note: "小時/點鐘",
            },
          ],
          examples: [
            {
              sentence: "Bạn có thời gian không?",
              translation: "你有時間嗎？",
            },
            {
              sentence: "Bây giờ là mấy giờ?",
              translation: "現在幾點？",
            },
            {
              sentence: "Tôi không có thời gian.",
              translation: "我沒時間。",
            },
          ],
          usage_note: "詢問幾點用 Giờ，詢問空閒用 Thời gian。",
          image_file: "time.png",
        },
        {
          id: "n-02",
          term_zh: "人們",
          related_terms: [
            {
              term_target: "người",
              pronunciation: ["/ŋɨəj˨˩/"],
              specific_note: "人",
            },
            {
              term_target: "mọi người",
              pronunciation: ["/mɔj˧˨ˀ ŋɨəj˨˩/"],
              specific_note: "大家/人們",
            },
          ],
          examples: [
            {
              sentence: "Ở đây có nhiều người.",
              translation: "這裡有很多人。",
            },
            {
              sentence: "Xin chào mọi người.",
              translation: "大家好。",
            },
            {
              sentence: "Người kia là ai?",
              translation: "那個人是誰？",
            },
          ],
          usage_note: "泛指人。",
          image_file: "people.png",
        },
        {
          id: "n-03",
          term_zh: "金錢",
          related_terms: [
            {
              term_target: "tiền",
              pronunciation: ["/tiən˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi không có tiền.",
              translation: "我沒錢。",
            },
            {
              sentence: "Cái này bao nhiêu tiền?",
              translation: "這個多少錢？",
            },
            {
              sentence: "Đổi tiền.",
              translation: "換錢。",
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
              term_target: "trẻ em",
              pronunciation: ["/tɕɛ˧˩ ɛm˧/"],
              specific_note: "兒童(泛指)",
            },
            {
              term_target: "con",
              pronunciation: ["/kɔn˧/"],
              specific_note: "孩子(子女)",
            },
          ],
          examples: [
            {
              sentence: "Trẻ em đang chơi.",
              translation: "小孩在玩。",
            },
            {
              sentence: "Tôi có hai người con.",
              translation: "我有兩個孩子。",
            },
            {
              sentence: "Vé cho trẻ em.",
              translation: "兒童票。",
            },
          ],
          usage_note: "公共場所標示多用 Trẻ em。",
          image_file: "child.png",
        },
        {
          id: "n-05",
          term_zh: "水",
          related_terms: [
            {
              term_target: "nước",
              pronunciation: ["/nɨək̚˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Cho tôi một ly nước.",
              translation: "給我一杯水。",
            },
            {
              sentence: "Nước uống.",
              translation: "飲用水。",
            },
            {
              sentence: "Tôi muốn uống nước.",
              translation: "我想喝水。",
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
              term_target: "đồ ăn",
              pronunciation: ["/ɗo˨˩ an˧/"],
              specific_note: "吃的東西",
            },
            {
              term_target: "thức ăn",
              pronunciation: ["/tʰɨk̚˧˥ an˧/"],
              specific_note: "食物/菜餚",
            },
          ],
          examples: [
            {
              sentence: "Đồ ăn ngon.",
              translation: "好吃的食物。",
            },
            {
              sentence: "Mua đồ ăn.",
              translation: "買吃的。",
            },
            {
              sentence: "Đồ ăn Việt Nam.",
              translation: "越南食物。",
            },
          ],
          usage_note: "口語常用 Đồ ăn。",
          image_file: "food.png",
        },
        {
          id: "n-07",
          term_zh: "朋友",
          related_terms: [
            {
              term_target: "bạn",
              pronunciation: ["/ɓaːn˧˨ˀ/"],
              specific_note: "",
            },
            {
              term_target: "bạn bè",
              pronunciation: ["/ɓaːn˧˨ˀ ɓɛ˨˩/"],
              specific_note: "朋友們",
            },
          ],
          examples: [
            {
              sentence: "Đây là bạn của tôi.",
              translation: "這是我的朋友。",
            },
            {
              sentence: "Đi chơi với bạn.",
              translation: "跟朋友出去玩。",
            },
            {
              sentence: "Bạn thân.",
              translation: "好朋友(死黨)。",
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
              term_target: "gia đình",
              pronunciation: ["/zaː˧ ɗiɲ˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Gia đình tôi.",
              translation: "我家(人)。",
            },
            {
              sentence: "Gia đình hạnh phúc.",
              translation: "幸福的家庭。",
            },
            {
              sentence: "Thăm gia đình.",
              translation: "探望家人。",
            },
          ],
          usage_note: "家人、家庭。",
          image_file: "family.png",
        },
        {
          id: "n-09",
          term_zh: "學生",
          related_terms: [
            {
              term_target: "học sinh",
              pronunciation: ["/hawk͡p̚˧˨ˀ siɲ˧/"],
              specific_note: "中小學生",
            },
            {
              term_target: "sinh viên",
              pronunciation: ["/siɲ˧ viən˧/"],
              specific_note: "大學生",
            },
          ],
          examples: [
            {
              sentence: "Tôi là sinh viên.",
              translation: "我是大學生。",
            },
            {
              sentence: "Học sinh giỏi.",
              translation: "好學生(成績好)。",
            },
            {
              sentence: "Thẻ sinh viên.",
              translation: "學生證。",
            },
          ],
          usage_note: "越南分很細，大學生通常自稱 Sinh viên。",
          image_file: "student.png",
        },
        {
          id: "n-10",
          term_zh: "文化",
          related_terms: [
            {
              term_target: "văn hóa",
              pronunciation: ["/van˧ hwaː˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Văn hóa Việt Nam.",
              translation: "越南文化。",
            },
            {
              sentence: "Tìm hiểu văn hóa.",
              translation: "了解文化。",
            },
            {
              sentence: "Văn hóa truyền thống.",
              translation: "傳統文化。",
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
              term_target: "vấn đề",
              pronunciation: ["/vən˧˥ ɗe˨˩/"],
              specific_note: "議題/麻煩",
            },
            {
              term_target: "câu hỏi",
              pronunciation: ["/kəw˧ hɔj˧˩/"],
              specific_note: "提問",
            },
          ],
          examples: [
            {
              sentence: "Không có vấn đề.",
              translation: "沒問題。",
            },
            {
              sentence: "Tôi có một câu hỏi.",
              translation: "我有個問題(想問)。",
            },
            {
              sentence: "Vấn đề lớn.",
              translation: "大問題。",
            },
          ],
          usage_note: "遇到麻煩用 Vấn đề，想發問用 Câu hỏi。",
          image_file: "problem.png",
        },
        {
          id: "n-12",
          term_zh: "公司",
          related_terms: [
            {
              term_target: "công ty",
              pronunciation: ["/koŋ͡m˧ ti˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi đến công ty.",
              translation: "去公司。",
            },
            {
              sentence: "Làm việc tại công ty.",
              translation: "在公司工作。",
            },
            {
              sentence: "Công ty của tôi.",
              translation: "我的公司。",
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
              term_target: "nam",
              pronunciation: ["/naːm˧/"],
              specific_note: "性別",
            },
            {
              term_target: "đàn ông",
              pronunciation: ["/ɗaːn˨˩ oŋ͡m˧/"],
              specific_note: "男人",
            },
          ],
          examples: [
            {
              sentence: "Nhà vệ sinh nam.",
              translation: "男廁。",
            },
            {
              sentence: "Anh ấy là đàn ông.",
              translation: "他是個男人。",
            },
            {
              sentence: "Bạn nam.",
              translation: "男朋友(或男性朋友)。",
            },
          ],
          usage_note: "廁所標示多用 Nam。",
          image_file: "man.png",
        },
        {
          id: "n-14",
          term_zh: "女性",
          related_terms: [
            {
              term_target: "nữ",
              pronunciation: ["/nɨ˧ˀ˥/"],
              specific_note: "性別",
            },
            {
              term_target: "phụ nữ",
              pronunciation: ["/fu˧˨ˀ nɨ˧ˀ˥/"],
              specific_note: "婦女",
            },
          ],
          examples: [
            {
              sentence: "Nhà vệ sinh nữ.",
              translation: "女廁。",
            },
            {
              sentence: "Phụ nữ Việt Nam.",
              translation: "越南婦女。",
            },
            {
              sentence: "Bạn nữ.",
              translation: "女朋友(或女性朋友)。",
            },
          ],
          usage_note: "廁所標示多用 Nữ。",
          image_file: "woman.png",
        },
        {
          id: "n-15",
          term_zh: "學校",
          related_terms: [
            {
              term_target: "trường học",
              pronunciation: ["/tɕɨəŋ˨˩ hawk͡p̚˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi trường học.",
              translation: "去學校。",
            },
            {
              sentence: "Trường học ở gần đây.",
              translation: "學校在這附近。",
            },
            {
              sentence: "Đến trường.",
              translation: "到校。",
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
              term_target: "giáo viên",
              pronunciation: ["/zaːw˧˥ viən˧/"],
              specific_note: "教師(職業)",
            },
            {
              term_target: "thầy / cô",
              pronunciation: ["/tʰəj˨˩/  /ko˧/"],
              specific_note: "稱呼(男/女)",
            },
          ],
          examples: [
            {
              sentence: "Em chào thầy.",
              translation: "老師好 (對男老師)。",
            },
            {
              sentence: "Cô giáo.",
              translation: "女老師。",
            },
            {
              sentence: "Hỏi giáo viên.",
              translation: "問老師。",
            },
          ],
          usage_note: "當面稱呼要用 Thầy (男) 或 Cô (女)。",
          image_file: "teacher.png",
        },
        {
          id: "n-17",
          term_zh: "影片／電影",
          related_terms: [
            {
              term_target: "phim",
              pronunciation: ["/fiːm˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Xem phim.",
              translation: "看電影。",
            },
            {
              sentence: "Phim hành động.",
              translation: "動作片。",
            },
            {
              sentence: "Đi rạp chiếu phim.",
              translation: "去電影院。",
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
              term_target: "điện thoại",
              pronunciation: ["/ɗiən˧˨ˀ tʰwaːj˧˨ˀ/"],
              specific_note: "電話/手機",
            },
          ],
          examples: [
            {
              sentence: "Số điện thoại.",
              translation: "電話號碼。",
            },
            {
              sentence: "Điện thoại mới.",
              translation: "新手機。",
            },
            {
              sentence: "Gọi điện thoại.",
              translation: "打電話。",
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
              term_target: "máy tính",
              pronunciation: ["/maːj˧˥ tiŋ˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Dùng máy tính.",
              translation: "用電腦。",
            },
            {
              sentence: "Máy tính xách tay.",
              translation: "筆記型電腦 (Laptop)。",
            },
            {
              sentence: "Máy tính bị hỏng.",
              translation: "電腦壞了。",
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
              term_target: "xe",
              pronunciation: ["/sɛ˧/"],
              specific_note: "車(泛指)",
            },
            {
              term_target: "ô tô",
              pronunciation: ["/o˧ to˧/"],
              specific_note: "汽車",
            },
          ],
          examples: [
            {
              sentence: "Lái xe.",
              translation: "開車。",
            },
            {
              sentence: "Mua xe ô tô.",
              translation: "買汽車。",
            },
            {
              sentence: "Gọi xe taxi.",
              translation: "叫計程車。",
            },
          ],
          usage_note: "Xe 泛指所有車輛，Ô tô 專指汽車。",
          image_file: "car.png",
        },
        {
          id: "n-21",
          term_zh: "市場",
          related_terms: [
            {
              term_target: "chợ",
              pronunciation: ["/tɕə˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi chợ.",
              translation: "去市場。",
            },
            {
              sentence: "Chợ đêm.",
              translation: "夜市。",
            },
            {
              sentence: "Chợ Bến Thành.",
              translation: "濱城市場。",
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
              term_target: "quần áo",
              pronunciation: ["/kwən˨˩ aːw˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Mua quần áo.",
              translation: "買衣服。",
            },
            {
              sentence: "Quần áo đẹp.",
              translation: "漂亮的衣服。",
            },
            {
              sentence: "Giặt quần áo.",
              translation: "洗衣服。",
            },
          ],
          usage_note: "衣物總稱。",
          image_file: "clothes.png",
        },
        {
          id: "n-23",
          term_zh: "商店",
          related_terms: [
            {
              term_target: "cửa hàng",
              pronunciation: ["/kɨə˧˩ haːŋ˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Vào cửa hàng.",
              translation: "進店裡。",
            },
            {
              sentence: "Cửa hàng tiện lợi.",
              translation: "便利商店。",
            },
            {
              sentence: "Mở cửa hàng.",
              translation: "開店。",
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
              term_target: "xe buýt",
              pronunciation: ["/sɛ˧ ɓwit̚˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi xe buýt.",
              translation: "搭公車。",
            },
            {
              sentence: "Đợi xe buýt.",
              translation: "等公車。",
            },
            {
              sentence: "Bến xe buýt.",
              translation: "公車站。",
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
              term_target: "đường",
              pronunciation: ["/ɗɨəŋ˨˩/"],
              specific_note: "",
            },
            {
              term_target: "phố",
              pronunciation: ["/fo˧˥/"],
              specific_note: "街",
            },
          ],
          examples: [
            {
              sentence: "Trên đường.",
              translation: "在路上。",
            },
            {
              sentence: "Sang đường.",
              translation: "過馬路。",
            },
            {
              sentence: "Món ăn đường phố.",
              translation: "街頭美食。",
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
              term_target: "nhà",
              pronunciation: ["/ɲaː˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Về nhà.",
              translation: "回家。",
            },
            {
              sentence: "Mua nhà.",
              translation: "買房子。",
            },
            {
              sentence: "Ở trong nhà.",
              translation: "在屋裡。",
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
              term_target: "mẹ",
              pronunciation: ["/mɛ˧˨ˀ/"],
              specific_note: "北越常用",
            },
            {
              term_target: "má",
              pronunciation: ["/maː˧˥/"],
              specific_note: "南越常用",
            },
          ],
          examples: [
            {
              sentence: "Mẹ tôi.",
              translation: "我媽媽。",
            },
            {
              sentence: "Con yêu mẹ.",
              translation: "我愛媽媽。",
            },
            {
              sentence: "Mẹ đang nấu ăn.",
              translation: "媽媽正在煮飯。",
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
              term_target: "bố",
              pronunciation: ["/ɓo˧˥/"],
              specific_note: "北越常用",
            },
            {
              term_target: "ba",
              pronunciation: ["/ɓaː˧/"],
              specific_note: "南越常用",
            },
          ],
          examples: [
            {
              sentence: "Bố tôi.",
              translation: "我爸爸。",
            },
            {
              sentence: "Hỏi bố.",
              translation: "問爸爸。",
            },
            {
              sentence: "Bố đang làm việc.",
              translation: "爸爸正在工作。",
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
              term_target: "anh trai",
              pronunciation: ["/aɲ˧ tɕaːj˧/"],
              specific_note: "哥哥",
            },
            {
              term_target: "em trai",
              pronunciation: ["/ɛm˧ tɕaːj˧/"],
              specific_note: "弟弟",
            },
          ],
          examples: [
            {
              sentence: "Anh trai tôi.",
              translation: "我哥哥。",
            },
            {
              sentence: "Đây là em trai tôi.",
              translation: "這是我弟弟。",
            },
            {
              sentence: "Anh em.",
              translation: "兄弟。",
            },
          ],
          usage_note: "需區分長幼。",
          image_file: "brother.png",
        },
        {
          id: "n-30",
          term_zh: "姐妹",
          related_terms: [
            {
              term_target: "chị gái",
              pronunciation: ["/tɕi˧˨ˀ ɣaːj˧˥/"],
              specific_note: "姊姊",
            },
            {
              term_target: "em gái",
              pronunciation: ["/ɛm˧ ɣaːj˧˥/"],
              specific_note: "妹妹",
            },
          ],
          examples: [
            {
              sentence: "Chị gái tôi.",
              translation: "我姊姊。",
            },
            {
              sentence: "Em gái rất dễ thương.",
              translation: "妹妹很可愛。",
            },
            {
              sentence: "Chị em.",
              translation: "姊妹。",
            },
          ],
          usage_note: "需區分長幼。",
          image_file: "sister.png",
        },
        {
          id: "n-31",
          term_zh: "中文",
          related_terms: [
            {
              term_target: "tiếng Trung",
              pronunciation: ["/tiəŋ˧˥ tɕuŋ͡m˧/"],
              specific_note: "",
            },
            {
              term_target: "tiếng Hoa",
              pronunciation: ["/tiəŋ˧˥ hwaː˧/"],
              specific_note: "南越常用",
            },
          ],
          examples: [
            {
              sentence: "Nói tiếng Trung.",
              translation: "說中文。",
            },
            {
              sentence: "Học tiếng Trung.",
              translation: "學中文。",
            },
            {
              sentence: "Tôi biết tiếng Trung.",
              translation: "我會中文。",
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
              term_target: "buổi sáng",
              pronunciation: ["/ɓuəj˧˩ saːŋ˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Vào buổi sáng.",
              translation: "在早晨。",
            },
            {
              sentence: "Chào buổi sáng.",
              translation: "早安。",
            },
            {
              sentence: "Ăn sáng.",
              translation: "吃早餐。",
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
              term_target: "buổi tối",
              pronunciation: ["/ɓuəj˧˩ toj˧˥/"],
              specific_note: "晚上",
            },
            {
              term_target: "đêm",
              pronunciation: ["/ɗem˧/"],
              specific_note: "深夜",
            },
          ],
          examples: [
            {
              sentence: "Chào buổi tối.",
              translation: "晚安(問候)。",
            },
            {
              sentence: "Ăn tối.",
              translation: "吃晚餐。",
            },
            {
              sentence: "Đêm khuya.",
              translation: "深夜。",
            },
          ],
          usage_note: "夜晚。",
          image_file: "night.png",
        },
        {
          id: "n-34",
          term_zh: "票／車票",
          related_terms: [
            { term_target: "vé", pronunciation: ["/vɛ˧˥/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Một vé.",
              translation: "一張票。",
            },
            {
              sentence: "Vé máy bay.",
              translation: "機票。",
            },
            {
              sentence: "Vé xem phim.",
              translation: "電影票。",
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
              term_target: "túi",
              pronunciation: ["/tuj˧˥/"],
              specific_note: "袋子/包",
            },
            {
              term_target: "cặp",
              pronunciation: ["/kap̚˧˨ˀ/"],
              specific_note: "書包/公事包",
            },
          ],
          examples: [
            {
              sentence: "Túi xách.",
              translation: "手提包。",
            },
            {
              sentence: "Cái túi này nặng.",
              translation: "這個包包很重。",
            },
            {
              sentence: "Ba lô.",
              translation: "後背包。",
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
              term_target: "cốc",
              pronunciation: ["/kəwk͡p̚˧˥/"],
              specific_note: "北越常用",
            },
            {
              term_target: "ly",
              pronunciation: ["/li˧/"],
              specific_note: "南越常用",
            },
          ],
          examples: [
            {
              sentence: "Cốc nước.",
              translation: "一杯水。",
            },
            {
              sentence: "Một ly cà phê.",
              translation: "一杯咖啡。",
            },
            {
              sentence: "Rửa cốc.",
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
              term_target: "bác sĩ",
              pronunciation: ["/ɓaːk̚˧˥ si˧ˀ˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Gặp bác sĩ.",
              translation: "看醫生。",
            },
            {
              sentence: "Tôi là bác sĩ.",
              translation: "我是醫生。",
            },
            {
              sentence: "Gọi bác sĩ.",
              translation: "叫醫生。",
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
              term_target: "cảnh sát",
              pronunciation: ["/kajŋ̟˧˩ saːt̚˧˥/"],
              specific_note: "",
            },
            {
              term_target: "công an",
              pronunciation: ["/koŋ͡m˧ aːn˧/"],
              specific_note: "公安",
            },
          ],
          examples: [
            {
              sentence: "Gọi cảnh sát.",
              translation: "叫警察。",
            },
            {
              sentence: "Đồn cảnh sát.",
              translation: "警察局。",
            },
            {
              sentence: "Hỏi công an.",
              translation: "問警察(公安)。",
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
              term_target: "bệnh viện",
              pronunciation: ["/ɓejŋ̟˧˨ˀ viən˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi bệnh viện.",
              translation: "去醫院。",
            },
            {
              sentence: "Gần bệnh viện.",
              translation: "醫院附近。",
            },
            {
              sentence: "Bệnh viện lớn.",
              translation: "大醫院。",
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
              term_target: "chỗ ngồi",
              pronunciation: ["/tɕo˧ˀ˥ ŋoj˨˩/"],
              specific_note: "",
            },
            {
              term_target: "ghế",
              pronunciation: ["/ɣe˧˥/"],
              specific_note: "椅子",
            },
          ],
          examples: [
            {
              sentence: "Có chỗ ngồi không?",
              translation: "有位子嗎？",
            },
            {
              sentence: "Đây là chỗ ngồi của tôi.",
              translation: "這是我的位子。",
            },
            {
              sentence: "Ngồi xuống ghế.",
              translation: "坐下。",
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
              term_target: "cửa",
              pronunciation: ["/kɨə˧˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Mở cửa.",
              translation: "開門。",
            },
            {
              sentence: "Đóng cửa.",
              translation: "關門。",
            },
            {
              sentence: "Cửa trước.",
              translation: "前門。",
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
              term_target: "phòng",
              pronunciation: ["/fawŋ͡m˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Phòng của tôi.",
              translation: "我房間。",
            },
            {
              sentence: "Phòng khách sạn.",
              translation: "飯店房間。",
            },
            {
              sentence: "Dọn phòng.",
              translation: "打掃房間。",
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
              term_target: "ga",
              pronunciation: ["/ɣaː˧/"],
              specific_note: "火車站",
            },
            {
              term_target: "bến xe",
              pronunciation: ["/ɓen˧˥ sɛ˧/"],
              specific_note: "公車站",
            },
          ],
          examples: [
            {
              sentence: "Ga tàu hỏa.",
              translation: "火車站。",
            },
            {
              sentence: "Bến xe buýt.",
              translation: "公車站。",
            },
            {
              sentence: "Nhà ga ở đâu?",
              translation: "車站在哪裡？",
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
              term_target: "tàu điện ngầm",
              pronunciation: ["/taːw˨˩ ɗiən˧˨ˀ ŋəm˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Ga tàu điện ngầm.",
              translation: "地鐵站。",
            },
            {
              sentence: "Đi tàu điện ngầm.",
              translation: "搭地鐵。",
            },
            {
              sentence: "Tàu điện ngầm nhanh.",
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
              term_target: "tàu hỏa",
              pronunciation: ["/taːw˨˩ hwaː˧˩/"],
              specific_note: "",
            },
            {
              term_target: "xe lửa",
              pronunciation: ["/sɛ˧ lɨə˧˩/"],
              specific_note: "南越常用",
            },
          ],
          examples: [
            {
              sentence: "Đi tàu hỏa.",
              translation: "搭火車。",
            },
            {
              sentence: "Vé tàu hỏa.",
              translation: "火車票。",
            },
            {
              sentence: "Ga tàu.",
              translation: "火車站。",
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
              term_target: "sân bay",
              pronunciation: ["/sən˧ ɓaj˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi sân bay.",
              translation: "去機場。",
            },
            {
              sentence: "Đến sân bay.",
              translation: "抵達機場。",
            },
            {
              sentence: "Sân bay quốc tế.",
              translation: "國際機場。",
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
              term_target: "hành lý",
              pronunciation: ["/haɲ˨˩ li˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Nhiều hành lý.",
              translation: "很多行李。",
            },
            {
              sentence: "Mất hành lý.",
              translation: "遺失行李。",
            },
            {
              sentence: "Ký gửi hành lý.",
              translation: "托運行李。",
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
              term_target: "bản đồ",
              pronunciation: ["/ɓaːn˧˩ ɗo˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Xem bản đồ.",
              translation: "看地圖。",
            },
            {
              sentence: "Google Maps.",
              translation: "谷歌地圖。",
            },
            {
              sentence: "Bản đồ thành phố.",
              translation: "城市地圖。",
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
              term_target: "quầy",
              pronunciation: ["/kwəj˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tại quầy.",
              translation: "在櫃檯。",
            },
            {
              sentence: "Quầy lễ tân.",
              translation: "接待櫃台。",
            },
            {
              sentence: "Quầy làm thủ tục.",
              translation: "辦理手續櫃台。",
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
              term_target: "sảnh",
              pronunciation: ["/sajŋ̟˧˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đợi ở sảnh.",
              translation: "在大廳等。",
            },
            {
              sentence: "Sảnh khách sạn.",
              translation: "飯店大廳。",
            },
            {
              sentence: "Gặp ở sảnh.",
              translation: "在大廳見。",
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
              term_target: "đặt trước",
              pronunciation: ["/ɗat̚˧˨ˀ tɕɨək̚˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi đã đặt trước.",
              translation: "我預約了。",
            },
            {
              sentence: "Đặt chỗ.",
              translation: "訂位。",
            },
            {
              sentence: "Hủy đặt trước.",
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
              term_target: "nhận phòng",
              pronunciation: ["/ɲən˧˨ˀ fawŋ͡m˨˩/"],
              specific_note: "領房",
            },
            {
              term_target: "check-in",
              pronunciation: ["/tʃek in/"],
              specific_note: "借詞",
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn nhận phòng.",
              translation: "我要辦理入住。",
            },
            {
              sentence: "Giờ nhận phòng.",
              translation: "入住時間。",
            },
            {
              sentence: "Quầy check-in.",
              translation: "入住櫃台。",
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
              term_target: "trả phòng",
              pronunciation: ["/tɕaː˧˩ fawŋ͡m˨˩/"],
              specific_note: "還房",
            },
            {
              term_target: "check-out",
              pronunciation: ["/tʃek aut/"],
              specific_note: "借詞",
            },
          ],
          examples: [
            {
              sentence: "Giờ trả phòng.",
              translation: "退房時間。",
            },
            {
              sentence: "Trả phòng ngay.",
              translation: "現在退房。",
            },
            {
              sentence: "Thanh toán khi trả phòng.",
              translation: "退房時付款。",
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
              term_target: "đồ uống",
              pronunciation: ["/ɗo˨˩ uəŋ˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đồ uống gì?",
              translation: "什麼飲料？",
            },
            {
              sentence: "Đồ uống lạnh.",
              translation: "冷飲。",
            },
            {
              sentence: "Gọi đồ uống.",
              translation: "點飲料。",
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
              term_target: "thực đơn",
              pronunciation: ["/tʰɨk̚˧˨ˀ ɗəːn˧/"],
              specific_note: "",
            },
            {
              term_target: "menu",
              pronunciation: ["/me nu/"],
              specific_note: "借詞",
            },
          ],
          examples: [
            {
              sentence: "Cho tôi thực đơn.",
              translation: "請給菜單。",
            },
            {
              sentence: "Xem thực đơn.",
              translation: "看菜單。",
            },
            {
              sentence: "Thực đơn tiếng Anh.",
              translation: "英文菜單。",
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
              term_target: "bữa trưa",
              pronunciation: ["/ɓɨə˧ˀ˥ tɕɨə˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Ăn bữa trưa.",
              translation: "吃午餐。",
            },
            {
              sentence: "Giờ ăn trưa.",
              translation: "午餐時間。",
            },
            {
              sentence: "Ăn trưa chưa?",
              translation: "吃午餐了嗎？",
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
              term_target: "bữa tối",
              pronunciation: ["/ɓɨə˧ˀ˥ toj˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Ăn bữa tối.",
              translation: "吃晚餐。",
            },
            {
              sentence: "Nấu bữa tối.",
              translation: "煮晚餐。",
            },
            {
              sentence: "Bữa tối muộn.",
              translation: "宵夜(很晚的晚餐)。",
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
              term_target: "hóa đơn",
              pronunciation: ["/hwaː˧˥ ɗəːn˧/"],
              specific_note: "發票/單據",
            },
            {
              term_target: "tính tiền",
              pronunciation: ["/tiɲ˧˥ tiən˨˩/"],
              specific_note: "算錢(口語)",
            },
          ],
          examples: [
            {
              sentence: "Tính tiền nhé.",
              translation: "結帳喔。",
            },
            {
              sentence: "Kiểm tra hóa đơn.",
              translation: "檢查帳單。",
            },
            {
              sentence: "Thanh toán hóa đơn.",
              translation: "付帳。",
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
              term_target: "giá",
              pronunciation: ["/zaː˧˥/"],
              specific_note: "",
            },
            {
              term_target: "giá tiền",
              pronunciation: ["/zaː˧˥ tiən˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Giá bao nhiêu?",
              translation: "價格多少？",
            },
            {
              sentence: "Giá cao.",
              translation: "價格高。",
            },
            {
              sentence: "Giá tốt.",
              translation: "價格好。",
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
              term_target: "biên lai",
              pronunciation: ["/ɓiən˧ laːj˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Cho tôi biên lai.",
              translation: "請給收據。",
            },
            {
              sentence: "Giữ biên lai.",
              translation: "保留收據。",
            },
            {
              sentence: "Hóa đơn đỏ.",
              translation: "紅發票 (正式收據)。",
            },
          ],
          usage_note: "證明。",
          image_file: "receipt.png",
        },
        {
          id: "n-61",
          term_zh: "尺寸",
          related_terms: [
            {
              term_target: "cỡ",
              pronunciation: ["/kəː˧ˀ˥/"],
              specific_note: "",
            },
            {
              term_target: "size",
              pronunciation: ["/saj/"],
              specific_note: "借詞",
            },
          ],
          examples: [
            {
              sentence: "Cỡ lớn.",
              translation: "大尺寸。",
            },
            {
              sentence: "Sai kích cỡ.",
              translation: "尺寸錯了。",
            },
            {
              sentence: "Cỡ nào?",
              translation: "多大尺寸？",
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
              term_target: "lối vào",
              pronunciation: ["/loj˧˥ vaːw˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Lối vào ở đâu?",
              translation: "入口在哪？",
            },
            {
              sentence: "Lối vào chính.",
              translation: "正門入口。",
            },
            {
              sentence: "Cấm vào.",
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
              term_target: "lối ra",
              pronunciation: ["/loj˧˥ zaː˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Lối ra ở kia.",
              translation: "出口在那。",
            },
            {
              sentence: "Lối thoát hiểm.",
              translation: "緊急出口。",
            },
            {
              sentence: "Lối ra ở đâu?",
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
              term_target: "Đài Loan",
              pronunciation: ["/ɗaːj˨˩ lwaːn˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi yêu Đài Loan.",
              translation: "我愛台灣。",
            },
            {
              sentence: "Du lịch Đài Loan.",
              translation: "台灣旅遊。",
            },
            {
              sentence: "Món ăn Đài Loan.",
              translation: "台灣食物。",
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
              term_target: "người Đài Loan",
              pronunciation: ["/ŋɨəj˨˩ ɗaːj˨˩ lwaːn˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi là người Đài Loan.",
              translation: "我是台灣人。",
            },
            {
              sentence: "Anh ấy là người Đài Loan.",
              translation: "他是台灣人。",
            },
            {
              sentence: "Nhiều người Đài Loan.",
              translation: "很多台灣人。",
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
              term_target: "tất cả",
              pronunciation: ["/tət̚˧˥ kaː˧˩/"],
              specific_note: "全部",
            },
            {
              term_target: "mọi thứ",
              pronunciation: ["/mɔj˧˨ˀ tʰɨ˧˥/"],
              specific_note: "每件事物",
            },
          ],
          examples: [
            {
              sentence: "Thích tất cả.",
              translation: "全部喜歡。",
            },
            {
              sentence: "Mọi thứ đều tốt.",
              translation: "一切都很好。",
            },
            {
              sentence: "Ăn hết tất cả.",
              translation: "全部吃光。",
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
              term_target: "ví",
              pronunciation: ["/vi˧˥/"],
              specific_note: "北越常用",
            },
            {
              term_target: "bóp",
              pronunciation: ["/ɓɔp̚˧˥/"],
              specific_note: "南越常用",
            },
          ],
          examples: [
            {
              sentence: "Quên ví.",
              translation: "忘了錢包。",
            },
            {
              sentence: "Mất ví.",
              translation: "丟了錢包。",
            },
            {
              sentence: "Tiền trong ví.",
              translation: "錢包裡的錢。",
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
              term_target: "chứng minh thư",
              pronunciation: ["/tɕɨŋ˧˥ miɲ˧ tʰɨ˧/"],
              specific_note: "舊稱",
            },
            {
              term_target: "căn cước công dân",
              pronunciation: ["/kan˧ kɨək̚˧˥ koŋ͡m˧ zən˧/"],
              specific_note: "現稱(CCCD)",
            },
          ],
          examples: [
            {
              sentence: "Xem chứng minh thư.",
              translation: "出示證件。",
            },
            {
              sentence: "Xuất trình giấy tờ.",
              translation: "出示文件。",
            },
            {
              sentence: "Bản sao căn cước.",
              translation: "身分證影本。",
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
              term_target: "hộ chiếu",
              pronunciation: ["/ho˧˨ˀ tɕiəw˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Hộ chiếu của bạn.",
              translation: "你的護照。",
            },
            {
              sentence: "Đưa hộ chiếu.",
              translation: "出示護照。",
            },
            {
              sentence: "Mất hộ chiếu.",
              translation: "護照遺失。",
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
              term_target: "nhà hàng",
              pronunciation: ["/ɲaː˨˩ haːŋ˨˩/"],
              specific_note: "較正式",
            },
            {
              term_target: "quán ăn",
              pronunciation: ["/kwaːn˧˥ an˧/"],
              specific_note: "小吃店",
            },
          ],
          examples: [
            {
              sentence: "Nhà hàng ngon.",
              translation: "好的餐廳。",
            },
            {
              sentence: "Đi nhà hàng.",
              translation: "去餐廳。",
            },
            {
              sentence: "Đặt bàn nhà hàng.",
              translation: "預訂餐廳。",
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
              term_target: "khách sạn",
              pronunciation: ["/xajc̚˧˥ saːn˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đặt khách sạn.",
              translation: "訂飯店。",
            },
            {
              sentence: "Khách sạn sang trọng.",
              translation: "豪華飯店。",
            },
            {
              sentence: "Địa chỉ khách sạn.",
              translation: "飯店地址。",
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
              term_target: "địa điểm",
              pronunciation: ["/ɗiə˧˨ˀ ɗiəm˧˩/"],
              specific_note: "地點",
            },
            {
              term_target: "nơi",
              pronunciation: ["/nəːj˧/"],
              specific_note: "地方",
            },
          ],
          examples: [
            {
              sentence: "Địa điểm đẹp.",
              translation: "好地方。",
            },
            {
              sentence: "Địa điểm gặp mặt.",
              translation: "見面地點。",
            },
            {
              sentence: "Địa điểm nổi tiếng.",
              translation: "著名景點。",
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
              term_target: "nhân viên",
              pronunciation: ["/ɲən˧ viən˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Hỏi nhân viên.",
              translation: "問店員。",
            },
            {
              sentence: "Gọi nhân viên.",
              translation: "叫店員。",
            },
            {
              sentence: "Nhân viên lịch sự.",
              translation: "有禮貌的店員。",
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
              term_target: "siêu thị",
              pronunciation: ["/siəw˧ tʰi˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi siêu thị.",
              translation: "去超市。",
            },
            {
              sentence: "Mua trong siêu thị.",
              translation: "在超市買。",
            },
            {
              sentence: "Siêu thị lớn.",
              translation: "大超市。",
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
              term_target: "sân ga",
              pronunciation: ["/sən˧ ɣaː˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đợi ở sân ga.",
              translation: "在月台等。",
            },
            {
              sentence: "Sân ga số mấy?",
              translation: "第幾號月台？",
            },
            {
              sentence: "Sân ga tàu.",
              translation: "火車月台。",
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
              term_target: "âm nhạc",
              pronunciation: ["/əm˧ ɲaːk̚˧˨ˀ/"],
              specific_note: "口語常簡稱 nhạc",
            },
          ],
          examples: [
            {
              sentence: "Nghe nhạc.",
              translation: "聽音樂。",
            },
            {
              sentence: "Nhạc hay.",
              translation: "好聽的音樂。",
            },
            {
              sentence: "Thích âm nhạc.",
              translation: "喜歡音樂。",
            },
          ],
          usage_note: "聽覺藝術。",
          image_file: "music.png",
        },
        {
          id: "n-77",
          term_zh: "雨",
          related_terms: [
            {
              term_target: "mưa",
              pronunciation: ["/mɨə˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Trời đang mưa.",
              translation: "正在下雨。",
            },
            {
              sentence: "Mưa to.",
              translation: "大雨。",
            },
            {
              sentence: "Tạnh mưa.",
              translation: "雨停了。",
            },
          ],
          usage_note: "自然現象。",
          image_file: "rain.png",
        },
        {
          id: "n-78",
          term_zh: "照片",
          related_terms: [
            {
              term_target: "ảnh",
              pronunciation: ["/ajŋ̟˧˩/"],
              specific_note: "北越常用",
            },
            {
              term_target: "hình",
              pronunciation: ["/hiɲ˨˩/"],
              specific_note: "南越常用",
            },
          ],
          examples: [
            {
              sentence: "Chụp ảnh.",
              translation: "拍照。",
            },
            {
              sentence: "Ảnh đẹp.",
              translation: "好看的照片。",
            },
            {
              sentence: "Xem ảnh.",
              translation: "看照片。",
            },
          ],
          usage_note: "影像。",
          image_file: "picture.png",
        },
        {
          id: "n-79",
          term_zh: "書",
          related_terms: [
            {
              term_target: "sách",
              pronunciation: ["/sajc̚˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đọc sách.",
              translation: "看書。",
            },
            {
              sentence: "Mua sách.",
              translation: "買書。",
            },
            {
              sentence: "Sách hay.",
              translation: "好書。",
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
              term_target: "nhà vệ sinh",
              pronunciation: ["/ɲaː˨˩ ve˧˨ˀ siɲ˧/"],
              specific_note: "較禮貌",
            },
            {
              term_target: "toilet",
              pronunciation: ["/tɔj˧ lɛt̚˧˥/"],
              specific_note: "外來語",
            },
          ],
          examples: [
            {
              sentence: "Nhà vệ sinh ở đâu?",
              translation: "廁所在哪裡？",
            },
            {
              sentence: " đi vệ sinh.",
              translation: "去上廁所。",
            },
            {
              sentence: "Nhà vệ sinh sạch.",
              translation: "乾淨的廁所。",
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
              term_target: "thời tiết",
              pronunciation: ["/tʰəːj˨˩ tiət̚˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Thời tiết đẹp.",
              translation: "好天氣。",
            },
            {
              sentence: "Thời tiết xấu.",
              translation: "壞天氣。",
            },
            {
              sentence: "Thời tiết thế nào?",
              translation: "天氣如何？",
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
              term_target: "tin nhắn",
              pronunciation: ["/tin˧ ɲan˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Gửi tin nhắn.",
              translation: "傳訊息。",
            },
            {
              sentence: "Nhận tin nhắn.",
              translation: "收到訊息。",
            },
            {
              sentence: "Đọc tin nhắn.",
              translation: "讀訊息。",
            },
          ],
          usage_note: "手機簡訊或留言。",
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
              term_target: "bây giờ",
              pronunciation: ["/ɓəj˧ zəː˨˩/"],
              specific_note: "現在(此時此刻)",
            },
            {
              term_target: "hiện tại",
              pronunciation: ["/hiən˧˨ˀ taːj˧˨ˀ/"],
              specific_note: "目前/現狀",
            },
          ],
          examples: [
            {
              sentence: "Bây giờ đi.",
              translation: "現在去。",
            },
            {
              sentence: "Bây giờ là mấy giờ?",
              translation: "現在幾點？",
            },
            {
              sentence: "Hiện tại tôi đang bận.",
              translation: "目前我很忙。",
            },
          ],
          usage_note: "Bây giờ 指時間點，Hiện tại 指狀態。",
          image_file: "now.png",
        },
        {
          id: "adv-02",
          term_zh: "非常",
          related_terms: [
            {
              term_target: "rất",
              pronunciation: ["/zət̚˧˥/"],
              specific_note: "很(放形容詞前)",
            },
            {
              term_target: "lắm",
              pronunciation: ["/lam˧˥/"],
              specific_note: "很(放形容詞後)",
            },
          ],
          examples: [
            {
              sentence: "Rất ngon.",
              translation: "非常好吃。",
            },
            {
              sentence: "Đẹp lắm.",
              translation: "漂亮極了。",
            },
            {
              sentence: "Tôi rất thích.",
              translation: "我非常喜歡。",
            },
          ],
          usage_note: "Rất + 形容詞；形容詞 + Lắm。",
          image_file: "very.png",
        },
        {
          id: "adv-03",
          term_zh: "真的",
          related_terms: [
            {
              term_target: "thật sự",
              pronunciation: ["/tʰət̚˧˨ˀ sɨ˧˨ˀ/"],
              specific_note: "真實地",
            },
            {
              term_target: "thật",
              pronunciation: ["/tʰət̚˧˨ˀ/"],
              specific_note: "真的",
            },
          ],
          examples: [
            {
              sentence: "Thật à?",
              translation: "真的嗎？",
            },
            {
              sentence: "Tôi thật sự xin lỗi.",
              translation: "我真的很抱歉。",
            },
            {
              sentence: "Nói thật đi.",
              translation: "說實話吧。",
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
              term_target: "tốt",
              pronunciation: ["/tot̚˧˥/"],
              specific_note: "好",
            },
            {
              term_target: "giỏi",
              pronunciation: ["/zɔj˧˩/"],
              specific_note: "優秀/棒",
            },
          ],
          examples: [
            {
              sentence: "Làm tốt lắm.",
              translation: "做得很好。",
            },
            {
              sentence: "Học giỏi.",
              translation: "很會讀書(優秀)。",
            },
            {
              sentence: "Ngủ ngon (ngủ tốt).",
              translation: "睡得好。",
            },
          ],
          usage_note: "Tốt 形容品質，Giỏi 形容能力。",
          image_file: "well.png",
        },
        {
          id: "adv-05",
          term_zh: "經常",
          related_terms: [
            {
              term_target: "thường",
              pronunciation: ["/tʰɨəŋ˨˩/"],
              specific_note: "",
            },
            {
              term_target: "hay",
              pronunciation: ["/haj˧/"],
              specific_note: "常(習慣)",
            },
          ],
          examples: [
            {
              sentence: "Tôi thường đi xem phim.",
              translation: "我常去看電影。",
            },
            {
              sentence: "Anh ấy hay quên.",
              translation: "他常常忘記。",
            },
            {
              sentence: "Thường xuyên.",
              translation: "經常。",
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
              term_target: "thường thường",
              pronunciation: ["/tʰɨəŋ˨˩ tʰɨəŋ˨˩/"],
              specific_note: "",
            },
            {
              term_target: "thông thường",
              pronunciation: ["/tʰoŋ͡m˧ tʰɨəŋ˨˩/"],
              specific_note: "一般而言",
            },
          ],
          examples: [
            {
              sentence: "Thường thường là vậy.",
              translation: "通常是那樣。",
            },
            {
              sentence: "Tôi thường thường đi ngủ lúc 10 giờ.",
              translation: "我通常10點睡覺。",
            },
            {
              sentence: "Thông thường thì không sao.",
              translation: "一般來說沒問題。",
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
              term_target: "đã",
              pronunciation: ["/ɗaː˧ˀ˥/"],
              specific_note: "置於動詞前",
            },
            {
              term_target: "rồi",
              pronunciation: ["/zoj˨˩/"],
              specific_note: "置於句尾",
            },
          ],
          examples: [
            {
              sentence: "Tôi ăn rồi.",
              translation: "我吃過了。",
            },
            {
              sentence: "Tôi đã làm xong.",
              translation: "我已經做完了。",
            },
            {
              sentence: "Đã lâu không gặp.",
              translation: "好久不見 (已經很久沒見)。",
            },
          ],
          usage_note: "完成時態。",
          image_file: "already.png",
        },
        {
          id: "adv-08",
          term_zh: "只有",
          related_terms: [
            {
              term_target: "chỉ",
              pronunciation: ["/tɕi˧˩/"],
              specific_note: "只",
            },
            {
              term_target: "chỉ có",
              pronunciation: ["/tɕi˧˩ kɔ˧˥/"],
              specific_note: "只有",
            },
          ],
          examples: [
            {
              sentence: "Chỉ có một cái.",
              translation: "只有一個。",
            },
            {
              sentence: "Chỉ mình tôi.",
              translation: "只有我自己。",
            },
            {
              sentence: "Tôi chỉ xem thôi.",
              translation: "我只是看看而已。",
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
              term_target: "lại",
              pronunciation: ["/laːj˧˨ˀ/"],
              specific_note: "",
            },
            {
              term_target: "nữa",
              pronunciation: ["/nɨə˧ˀ˥/"],
              specific_note: "再/又",
            },
          ],
          examples: [
            {
              sentence: "Gặp lại.",
              translation: "再見面。",
            },
            {
              sentence: "Làm lại lần nữa.",
              translation: "再做一次。",
            },
            {
              sentence: "Không bao giờ nữa.",
              translation: "再也不會了。",
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
              term_target: "khoảng",
              pronunciation: ["/xwaːŋ˧˩/"],
              specific_note: "",
            },
            {
              term_target: "tầm",
              pronunciation: ["/təm˨˩/"],
              specific_note: "大概(口語)",
            },
          ],
          examples: [
            {
              sentence: "Khoảng 10 phút.",
              translation: "大約10分鐘。",
            },
            {
              sentence: "Tầm 5 giờ.",
              translation: "大概5點。",
            },
            {
              sentence: "Khoảng bao nhiêu tiền?",
              translation: "大約多少錢？",
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
              term_target: "một chút",
              pronunciation: ["/mot̚˧˨ˀ tɕut̚˧˥/"],
              specific_note: "一點點(量)",
            },
            {
              term_target: "hơi",
              pronunciation: ["/həːj˧/"],
              specific_note: "有點(形容詞前)",
            },
          ],
          examples: [
            {
              sentence: "Chờ một chút.",
              translation: "等一下。",
            },
            {
              sentence: "Hơi cay.",
              translation: "有點辣。",
            },
            {
              sentence: "Biết một chút.",
              translation: "知道一點點。",
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
              term_target: "cũng",
              pronunciation: ["/kuŋ͡m˧ˀ˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi cũng vậy.",
              translation: "我也是。",
            },
            {
              sentence: "Cũng tốt.",
              translation: "也很好。",
            },
            {
              sentence: "Cái này cũng ngon.",
              translation: "這個也很好吃。",
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
              term_target: "có lẽ",
              pronunciation: ["/kɔ˧˥ lɛ˧ˀ˥/"],
              specific_note: "",
            },
            {
              term_target: "chắc là",
              pronunciation: ["/tɕak̚˧˥ laː˨˩/"],
              specific_note: "應該是",
            },
          ],
          examples: [
            {
              sentence: "Có lẽ đúng.",
              translation: "也許是對的。",
            },
            {
              sentence: "Chắc là anh ấy đến.",
              translation: "他應該會來。",
            },
            {
              sentence: "Có lẽ ngày mai mưa.",
              translation: "明天或許會下雨。",
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
              term_target: "sau",
              pronunciation: ["/saw˧/"],
              specific_note: "",
            },
            {
              term_target: "sau đó",
              pronunciation: ["/saw˧ ɗɔ˧˥/"],
              specific_note: "那之後",
            },
          ],
          examples: [
            {
              sentence: "Gặp lại sau.",
              translation: "待會見(之後見)。",
            },
            {
              sentence: "Sau đó thì sao?",
              translation: "然後呢(那之後怎樣)？",
            },
            {
              sentence: "Ăn cơm xong, sau đó đi ngủ.",
              translation: "吃完飯，然後去睡覺。",
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
              term_target: "sớm",
              pronunciation: ["/səːm˧˥/"],
              specific_note: "早/快",
            },
            {
              term_target: "nhanh",
              pronunciation: ["/ɲaɲ˧/"],
              specific_note: "快速",
            },
          ],
          examples: [
            {
              sentence: "Đến sớm.",
              translation: "早點到。",
            },
            {
              sentence: "Hẹn gặp lại sớm.",
              translation: "希望能很快再見到你。",
            },
            {
              sentence: "Làm nhanh lên.",
              translation: "快點做。",
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
              term_target: "cùng nhau",
              pronunciation: ["/kuŋ˨˩ ɲaw˧/"],
              specific_note: "",
            },
            {
              term_target: "cùng",
              pronunciation: ["/kuŋ˨˩/"],
              specific_note: "一起(簡略)",
            },
          ],
          examples: [
            {
              sentence: "Đi cùng nhau.",
              translation: "一起去。",
            },
            {
              sentence: "Chúng ta cùng làm.",
              translation: "我們一起做。",
            },
            {
              sentence: "Ăn cùng nhau.",
              translation: "一起吃飯。",
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
              term_target: "vẫn",
              pronunciation: ["/vən˧ˀ˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Vẫn chưa.",
              translation: "還沒。",
            },
            {
              sentence: "Tôi vẫn ở đây.",
              translation: "我還在這裡。",
            },
            {
              sentence: "Vẫn còn sớm.",
              translation: "還早。",
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
              term_target: "thông thường",
              pronunciation: ["/tʰoŋ͡m˧ tʰɨəŋ˨˩/"],
              specific_note: "",
            },
            {
              term_target: "bình thường",
              pronunciation: ["/ɓiɲ˨˩ tʰɨəŋ˨˩/"],
              specific_note: "平常/普通",
            },
          ],
          examples: [
            {
              sentence: "Thông thường là vậy.",
              translation: "一般是那樣。",
            },
            {
              sentence: "Bình thường tôi không ăn sáng.",
              translation: "平常我不吃早餐。",
            },
            {
              sentence: "Chuyện bình thường.",
              translation: "普通的事(沒什麼大不了)。",
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
              term_target: "ngay lập tức",
              pronunciation: ["/ŋaj˧ ləp̚˧˨ˀ tɨk̚˧˥/"],
              specific_note: "立刻",
            },
            {
              term_target: "ngay",
              pronunciation: ["/ŋaj˧/"],
              specific_note: "馬上",
            },
          ],
          examples: [
            {
              sentence: "Làm ngay.",
              translation: "馬上去做。",
            },
            {
              sentence: "Đi ngay lập tức.",
              translation: "立刻走。",
            },
            {
              sentence: "Gọi điện ngay.",
              translation: "馬上打電話。",
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
              term_target: "cũng không",
              pronunciation: ["/kuŋ͡m˧ˀ˥ xoŋ͡m˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi cũng không biết.",
              translation: "我也不知道。",
            },
            {
              sentence: "Cũng không thích.",
              translation: "也不喜歡。",
            },
            {
              sentence: "Anh ấy cũng không đi.",
              translation: "他也沒去。",
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
              term_target: "cái gì",
              pronunciation: ["/kaːj˧˥ zi˨˩/"],
              specific_note: "疑問代名詞",
            },
            {
              term_target: "gì",
              pronunciation: ["/zi˨˩/"],
              specific_note: "後綴(放在名詞/動詞後)",
            },
          ],
          examples: [
            {
              sentence: "Cái gì đây?",
              translation: "這是什麼？",
            },
            {
              sentence: "Bạn tên là gì?",
              translation: "你叫什麼名字？",
            },
            {
              sentence: "Bạn làm gì?",
              translation: "你在做什麼？",
            },
          ],
          usage_note: "Gì 通常放在句尾或動詞後。",
          image_file: "what.png",
        },
        {
          id: "q-02",
          term_zh: "如何",
          related_terms: [
            {
              term_target: "như thế nào",
              pronunciation: ["/ɲɨ˧ tʰe˧˥ naːw˨˩/"],
              specific_note: "怎麼樣(狀態/性質)",
            },
            {
              term_target: "làm sao",
              pronunciation: ["/laːm˨˩ saːw˧/"],
              specific_note: "怎麼(做)",
            },
          ],
          examples: [
            {
              sentence: "Đi như thế nào?",
              translation: "要怎麼去？(問路)",
            },
            {
              sentence: "Làm sao bây giờ?",
              translation: "現在該怎麼辦？",
            },
            {
              sentence: "Món này ăn như thế nào?",
              translation: "這道菜怎麼吃？",
            },
          ],
          usage_note: "Như thế nào 問性質或狀態，Làm sao 問方法或原因。",
          image_file: "how.png",
        },
        {
          id: "q-03",
          term_zh: "何時",
          related_terms: [
            {
              term_target: "khi nào",
              pronunciation: ["/xi˧ naːw˨˩/"],
              specific_note: "未來/過去皆可",
            },
            {
              term_target: "bao giờ",
              pronunciation: ["/ɓaːw˧ zəː˨˩/"],
              specific_note: "何時(通常指未來)",
            },
          ],
          examples: [
            {
              sentence: "Khi nào bạn đi?",
              translation: "你什麼時候去？",
            },
            {
              sentence: "Bao giờ về?",
              translation: "什麼時候回來？",
            },
            {
              sentence: "Khi nào bắt đầu?",
              translation: "什麼時候開始？",
            },
          ],
          usage_note: "Khi nào 置於句首或句尾皆可。",
          image_file: "when.png",
        },
        {
          id: "q-04",
          term_zh: "哪裡",
          related_terms: [
            {
              term_target: "ở đâu",
              pronunciation: ["/əː˧˩ ɗəw˧/"],
              specific_note: "在哪",
            },
            {
              term_target: "đâu",
              pronunciation: ["/ɗəw˧/"],
              specific_note: "哪裡",
            },
          ],
          examples: [
            {
              sentence: "Bạn ở đâu?",
              translation: "你在哪裡？",
            },
            {
              sentence: "Nhà vệ sinh ở đâu?",
              translation: "廁所在哪裡？",
            },
            {
              sentence: "Đi đâu đấy?",
              translation: "要去哪裡？",
            },
          ],
          usage_note: "問地點。",
          image_file: "where.png",
        },
        {
          id: "q-05",
          term_zh: "誰",
          related_terms: [
            { term_target: "ai", pronunciation: ["/aːj˧/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Bạn là ai?",
              translation: "你是誰？",
            },
            {
              sentence: "Ai đang nói?",
              translation: "誰在說話？",
            },
            {
              sentence: "Của ai?",
              translation: "是誰的？",
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
              term_target: "tại sao",
              pronunciation: ["/taːj˧˨ˀ saːw˧/"],
              specific_note: "正式",
            },
            {
              term_target: "sao",
              pronunciation: ["/saːw˧/"],
              specific_note: "口語",
            },
          ],
          examples: [
            {
              sentence: "Tại sao lại thế?",
              translation: "為什麼會這樣？",
            },
            {
              sentence: "Sao bạn buồn?",
              translation: "你為什麼難過？",
            },
            {
              sentence: "Tại sao không đi?",
              translation: "為什麼不去？",
            },
          ],
          usage_note: "口語常用 Sao。",
          image_file: "why.png",
        },
        {
          id: "q-07",
          term_zh: "哪一個",
          related_terms: [
            {
              term_target: "cái nào",
              pronunciation: ["/kaːj˧˥ naːw˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bạn thích cái nào?",
              translation: "你喜歡哪一個？",
            },
            {
              sentence: "Cái nào tốt hơn?",
              translation: "哪一個比較好？",
            },
            {
              sentence: "Lấy cái nào?",
              translation: "拿哪一個？",
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
              term_target: "bao nhiêu",
              pronunciation: ["/ɓaːw˧ ɲiəw˧/"],
              specific_note: "多少(大於10/問價格)",
            },
            {
              term_target: "mấy",
              pronunciation: ["/məj˧˥/"],
              specific_note: "幾(小於10)",
            },
          ],
          examples: [
            {
              sentence: "Bao nhiêu tiền?",
              translation: "多少錢？",
            },
            {
              sentence: "Mấy giờ rồi?",
              translation: "幾點了？",
            },
            {
              sentence: "Bạn có mấy người con?",
              translation: "你有幾個孩子？",
            },
          ],
          usage_note: "問價格必用 Bao nhiêu，問少量(如時間/小孩)用 Mấy。",
          image_file: "how_much.png",
        },
        {
          id: "q-09",
          term_zh: "多久（時間）",
          related_terms: [
            {
              term_target: "bao lâu",
              pronunciation: ["/ɓaːw˧ ləw˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Mất bao lâu?",
              translation: "要花多久？",
            },
            {
              sentence: "Bạn ở đây bao lâu rồi?",
              translation: "你在這裡多久了？",
            },
            {
              sentence: "Đợi bao lâu?",
              translation: "要等多久？",
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
            {
              term_target: "bây giờ",
              pronunciation: ["/ɓəj˧ zəː˨˩/"],
              specific_note: "現在(時間點)",
            },
            {
              term_target: "hiện tại",
              pronunciation: ["/hiən˧˨ˀ taːj˧˨ˀ/"],
              specific_note: "目前(狀態)",
            },
          ],
          examples: [
            {
              sentence: "Bây giờ đi.",
              translation: "現在去。",
            },
            {
              sentence: "Bây giờ là mấy giờ?",
              translation: "現在幾點？",
            },
            {
              sentence: "Hiện tại tôi đang bận.",
              translation: "目前我很忙。",
            },
          ],
          usage_note: "Bây giờ 指此時此刻。",
          image_file: "now.png",
        },
        {
          id: "tp-02",
          term_zh: "今天",
          related_terms: [
            {
              term_target: "hôm nay",
              pronunciation: ["/hom˧ naj˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Hôm nay trời nóng.",
              translation: "今天很熱。",
            },
            {
              sentence: "Hôm nay là thứ mấy?",
              translation: "今天星期幾？",
            },
            {
              sentence: "Tôi rảnh hôm nay.",
              translation: "我今天有空。",
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
              term_target: "ngày mai",
              pronunciation: ["/ŋaːj˨˩ maːj˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Hẹn ngày mai.",
              translation: "明天見。",
            },
            {
              sentence: "Ngày mai tôi bận.",
              translation: "明天我很忙。",
            },
            {
              sentence: "Sáng ngày mai.",
              translation: "明天早上。",
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
              term_target: "hôm qua",
              pronunciation: ["/hom˧ kwaː˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Hôm qua vui lắm.",
              translation: "昨天很開心。",
            },
            {
              sentence: "Tối hôm qua.",
              translation: "昨天晚上。",
            },
            {
              sentence: "Bạn làm gì hôm qua?",
              translation: "你昨天做了什麼？",
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
              term_target: "ở đây",
              pronunciation: ["/əː˧˩ ɗəj˧/"],
              specific_note: "在這",
            },
            {
              term_target: "đây",
              pronunciation: ["/ɗəj˧/"],
              specific_note: "這",
            },
          ],
          examples: [
            {
              sentence: "Đến đây.",
              translation: "來這裡。",
            },
            {
              sentence: "Tôi sống ở đây.",
              translation: "我住在這裡。",
            },
            {
              sentence: "Đây là đâu?",
              translation: "這裡是哪裡？",
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
              term_target: "ở đó",
              pronunciation: ["/əː˧˩ ɗɔ˧˥/"],
              specific_note: "中距離",
            },
            {
              term_target: "ở kia",
              pronunciation: ["/əː˧˩ kiə˧/"],
              specific_note: "遠距離",
            },
          ],
          examples: [
            {
              sentence: "Đi ra đó.",
              translation: "去那裡。",
            },
            {
              sentence: "Nhìn kìa (kia).",
              translation: "看那邊。",
            },
            {
              sentence: "Đó là nhà tôi.",
              translation: "那是我的家。",
            },
          ],
          usage_note: "Đó 指對方處，Kia 指遠處。",
          image_file: "there.png",
        },
        {
          id: "tp-07",
          term_zh: "天（日期）",
          related_terms: [
            {
              term_target: "ngày",
              pronunciation: ["/ŋaːj˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Một ngày.",
              translation: "一天。",
            },
            {
              sentence: "Mỗi ngày.",
              translation: "每天。",
            },
            {
              sentence: "Ngày vui vẻ.",
              translation: "愉快的一天。",
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
              term_target: "năm",
              pronunciation: ["/nam˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Năm nay.",
              translation: "今年。",
            },
            {
              sentence: "Năm ngoái.",
              translation: "去年。",
            },
            {
              sentence: "Chúc mừng năm mới.",
              translation: "新年快樂。",
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
              term_target: "tháng",
              pronunciation: ["/tʰaːŋ˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tháng này.",
              translation: "這個月。",
            },
            {
              sentence: "Tháng sau.",
              translation: "下個月。",
            },
            {
              sentence: "Một tháng.",
              translation: "一個月。",
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
              term_target: "tuần",
              pronunciation: ["/twən˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tuần sau.",
              translation: "下週。",
            },
            {
              sentence: "Cuối tuần.",
              translation: "週末。",
            },
            {
              sentence: "Hai tuần.",
              translation: "兩週。",
            },
          ],
          usage_note: "星期、週。",
          image_file: "week.png",
        },
        {
          id: "tp-11",
          term_zh: "早上",
          related_terms: [
            {
              term_target: "buổi sáng",
              pronunciation: ["/ɓuəj˧˩ saːŋ˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Ăn sáng.",
              translation: "吃早餐。",
            },
            {
              sentence: "Sáng nay.",
              translation: "今天早上。",
            },
            {
              sentence: "Chào buổi sáng.",
              translation: "早安。",
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
              term_target: "buổi chiều",
              pronunciation: ["/ɓuəj˧˩ tɕiəw˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Hẹn buổi chiều.",
              translation: "下午見。",
            },
            {
              sentence: "Chiều nay.",
              translation: "今天下午。",
            },
            {
              sentence: "2 giờ chiều.",
              translation: "下午兩點。",
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
              term_target: "buổi tối",
              pronunciation: ["/ɓuəj˧˩ toj˧˥/"],
              specific_note: "晚上",
            },
            {
              term_target: "đêm",
              pronunciation: ["/ɗem˧/"],
              specific_note: "深夜",
            },
          ],
          examples: [
            {
              sentence: "Chào buổi tối.",
              translation: "晚安(問候)。",
            },
            {
              sentence: "Tối nay.",
              translation: "今晚。",
            },
            {
              sentence: "Đêm khuya.",
              translation: "深夜。",
            },
          ],
          usage_note: "太陽下山後。",
          image_file: "night.png",
        },
        {
          id: "tp-14",
          term_zh: "中午",
          related_terms: [
            {
              term_target: "buổi trưa",
              pronunciation: ["/ɓuəj˧˩ tɕɨə˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Nghỉ trưa.",
              translation: "午休。",
            },
            {
              sentence: "Ăn trưa.",
              translation: "吃午餐。",
            },
            {
              sentence: "12 giờ trưa.",
              translation: "中午12點。",
            },
          ],
          usage_note: "12點前後。",
          image_file: "noon.png",
        },
        {
          id: "tp-15",
          term_zh: "前面",
          related_terms: [
            {
              term_target: "phía trước",
              pronunciation: ["/fiə˧˥ tɕɨək̚˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Đi phía trước.",
              translation: "走前面。",
            },
            {
              sentence: "Ở phía trước.",
              translation: "在前面。",
            },
            {
              sentence: "Nhìn phía trước.",
              translation: "看前面。",
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
              term_target: "phía sau",
              pronunciation: ["/fiə˧˥ saw˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Ở phía sau.",
              translation: "在後面。",
            },
            {
              sentence: "Quay lại phía sau.",
              translation: "向後轉。",
            },
            {
              sentence: "Cửa sau.",
              translation: "後門。",
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
              term_target: "bên trái",
              pronunciation: ["/ɓen˧ tɕaːj˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Rẽ trái.",
              translation: "左轉。",
            },
            {
              sentence: "Tay trái.",
              translation: "左手。",
            },
            {
              sentence: "Ở bên trái.",
              translation: "在左邊。",
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
              term_target: "bên phải",
              pronunciation: ["/ɓen˧ faːj˧˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Rẽ phải.",
              translation: "右轉。",
            },
            {
              sentence: "Tay phải.",
              translation: "右手。",
            },
            {
              sentence: "Đi bên phải.",
              translation: "靠右走。",
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
              term_target: "bên cạnh",
              pronunciation: ["/ɓen˧ kaɲ˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Ngồi bên cạnh.",
              translation: "坐旁邊。",
            },
            {
              sentence: "Ở bên cạnh tôi.",
              translation: "在我旁邊。",
            },
            {
              sentence: "Nhà bên cạnh.",
              translation: "隔壁房子。",
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
              term_target: "đối diện",
              pronunciation: ["/ɗoj˧˥ ziən˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Cửa hàng đối diện.",
              translation: "對面商店。",
            },
            {
              sentence: "Nhà tôi ở đối diện.",
              translation: "我家在對面。",
            },
            {
              sentence: "Ngồi đối diện.",
              translation: "坐對面。",
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
              term_target: "mùa xuân",
              pronunciation: ["/muə˨˩ swən˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Mùa xuân đẹp.",
              translation: "春天很美。",
            },
            {
              sentence: "Tết là mùa xuân.",
              translation: "春節是在春天。",
            },
            {
              sentence: "Du xuân.",
              translation: "春遊。",
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
              term_target: "mùa hè",
              pronunciation: ["/muə˨˩ hɛ˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Mùa hè nóng.",
              translation: "夏天很熱。",
            },
            {
              sentence: "Nghỉ hè.",
              translation: "放暑假。",
            },
            {
              sentence: "Đi biển mùa hè.",
              translation: "夏天去海邊。",
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
              term_target: "mùa thu",
              pronunciation: ["/muə˨˩ tʰu˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Mùa thu mát mẻ.",
              translation: "秋天涼爽。",
            },
            {
              sentence: "Lá mùa thu.",
              translation: "秋葉。",
            },
            {
              sentence: "Tết Trung Thu.",
              translation: "中秋節。",
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
              term_target: "mùa đông",
              pronunciation: ["/muə˨˩ ɗəwŋ͡m˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Mùa đông lạnh.",
              translation: "冬天很冷。",
            },
            {
              sentence: "Mặc ấm mùa đông.",
              translation: "冬天穿暖和點。",
            },
            {
              sentence: "Tuyết rơi mùa đông.",
              translation: "冬天下雪。",
            },
          ],
          usage_note: "季節。",
          image_file: "winter.png",
        },
      ],
    },
    {
    "id": "conjunctions",
    "name": "連接詞",
    "items": [
{
          "id": "conj-01",
          "term_zh": "或者",
          "related_terms": [
            {
              "term_target": "hoặc",
              "pronunciation": ["/hwak/"],
              "specific_note": "陳述句/正式"
            },
            {
              "term_target": "hay",
              "pronunciation": ["/hai/"],
              "specific_note": "問句/口語"
            }
          ],
          "examples": [
            {
              "sentence": "Trà hay cà phê?",
              "translation": "茶還是咖啡？(問句用 hay)"
            },
            {
              "sentence": "Bạn có thể đi xe buýt hoặc taxi.",
              "translation": "你可以搭公車或者計程車。(陳述句用 hoặc)"
            }
          ],
          "usage_note": "二選一 (Hay 用於問句，Hoặc 用於肯定句)。",
          "image_file": "or.png"
        },
      {
        "id": "conj-02",
        "term_zh": "但是",
        "related_terms": [
          {
            "term_target": "nhưng",
            "pronunciation": ["/nyng/"],
            "specific_note": ""
          }
        ],
        "examples": [
          {
            "sentence": "Tôi thích nó, nhưng nó đắt.",
            "translation": "我喜歡它，但是它很貴。"
          },
          {
            "sentence": "Tôi muốn đi, nhưng không thể.",
            "translation": "我想去，但是我不能去。"
          },
          {
            "sentence": "Anh ấy nhỏ bé nhưng khỏe mạnh.",
            "translation": "他個子小但很強壯。"
          }
        ],
        "usage_note": "語氣轉折。",
        "image_file": "but.png"
      },
      {
        "id": "conj-03",
        "term_zh": "所以",
        "related_terms": [
          {
            "term_target": "nên",
            "pronunciation": ["/nen/"],
            "specific_note": ""
          }
        ],
        "examples": [
          {
            "sentence": "Tôi đói bụng, nên tôi đã ăn.",
            "translation": "我餓了，所以我吃了。"
          },
          {
            "sentence": "Trời đang mưa, nên hãy mang theo ô.",
            "translation": "正在下雨，所以帶把傘吧。"
          },
          {
            "sentence": "Tôi mệt, nên tôi đi ngủ.",
            "translation": "我累了，所以我去睡覺。"
          }
        ],
        "usage_note": "表示結果。",
        "image_file": "so.png"
      },
      {
        "id": "conj-04",
        "term_zh": "以及／和",
        "related_terms": [
          {
            "term_target": "và",
            "pronunciation": ["/va:/"],
            "specific_note": ""
          }
        ],
        "examples": [
          {
            "sentence": "Bạn và tôi.",
            "translation": "你和我。"
          },
          {
            "sentence": "Đen và trắng.",
            "translation": "黑色和白色。"
          },
          {
            "sentence": "Cô ấy thông minh và xinh đẹp.",
            "translation": "她既聰明又漂亮。"
          }
        ],
        "usage_note": "連接兩者。",
        "image_file": "and.png"
      }
    ]
  },
  {
    "id": "prepositions",
    "name": "介系詞",
    "items": [
      {
        "id": "prep-01",
        "term_zh": "和...一起",
        "related_terms": [
          {
            "term_target": "với",
            "pronunciation": ["/vəi/"],
            "specific_note": "伴隨"
          }
        ],
        "examples": [
          {
            "sentence": "Đi với tôi.",
            "translation": "跟我來。"
          },
          {
            "sentence": "Tôi sống với gia đình.",
            "translation": "我跟家人住。"
          },
          {
            "sentence": "Cà phê với sữa.",
            "translation": "加牛奶的咖啡 (咖啡和奶)。"
          }
        ],
        "usage_note": "與某人/某物在一起。",
        "image_file": "with.png"
      },
      {
        "id": "prep-02",
        "term_zh": "從...",
        "related_terms": [
          {
            "term_target": "từ",
            "pronunciation": ["/tɨ/"],
            "specific_note": "來源"
          }
        ],
        "examples": [
          {
            "sentence": "Tôi đến từ Đài Loan.",
            "translation": "我來自台灣。"
          },
          {
            "sentence": "Cửa hàng mở cửa từ 9 giờ đến 5 giờ.",
            "translation": "商店從9點開到5點。"
          },
          {
            "sentence": "Cách xa nơi này.",
            "translation": "離這裡很遠 (遠離這裡)。"
          }
        ],
        "usage_note": "起點/來源。",
        "image_file": "from.png"
      },
      {
        "id": "prep-03",
        "term_zh": "為了... / 給...",
        "related_terms": [
          {
            "term_target": "cho",
            "pronunciation": ["/tʃɔ/"],
            "specific_note": "對象/給予"
          }
        ],
        "examples": [
          {
            "sentence": "Cái này cho bạn.",
            "translation": "這是給你的。"
          },
          {
            "sentence": "Cảm ơn vì đã giúp đỡ.",
            "translation": "謝謝你的幫忙 (感謝為了幫忙)。"
          },
          {
            "sentence": "Tôi đang tìm chìa khóa.",
            "translation": "我在找我的鑰匙 (tìm = 找)。"
          }
        ],
        "usage_note": "給某人 (Cho)。",
        "image_file": "for.png"
      },
      {
        "id": "prep-04",
        "term_zh": "...的",
        "related_terms": [
          {
            "term_target": "của",
            "pronunciation": ["/kua/"],
            "specific_note": "所有格"
          }
        ],
        "examples": [
          {
            "sentence": "Một tách trà.",
            "translation": "一杯茶 (越文量詞後常省略 '的')。"
          },
          {
            "sentence": "Một trong những người bạn của tôi.",
            "translation": "我的一個朋友。"
          },
          {
            "sentence": "Màu của xe.",
            "translation": "車子的顏色。"
          }
        ],
        "usage_note": "表示所屬關係。",
        "image_file": "of.png"
      },
      {
        "id": "prep-05",
        "term_zh": "在... (場所)",
        "related_terms": [
          {
            "term_target": "ở",
            "pronunciation": ["/ə:/"],
            "specific_note": "地點"
          },
          {
            "term_target": "trong",
            "pronunciation": ["/tʃawŋ/"],
            "specific_note": "裡面"
          }
        ],
        "examples": [
          {
            "sentence": "Tôi ở nhà.",
            "translation": "我在家。"
          },
          {
            "sentence": "Cô ấy ở trong phòng.",
            "translation": "她在房間裡。"
          },
          {
            "sentence": "Gặp nhau lúc 5 giờ.",
            "translation": "5點見 (時間用 lúc)。"
          }
        ],
        "usage_note": "Ở 指地點，Trong 指內部。",
        "image_file": "at_in.png"
      },
      {
        "id": "prep-06",
        "term_zh": "往... (去)",
        "related_terms": [
          {
            "term_target": "đến",
            "pronunciation": ["/den/"],
            "specific_note": "抵達/去"
          }
        ],
        "examples": [
          {
            "sentence": "Đi đến trường.",
            "translation": "去學校。"
          },
          {
            "sentence": "Chúc mừng sinh nhật.",
            "translation": "祝你生日快樂 (越文不需介係詞)。"
          },
          {
            "sentence": "Đưa cho tôi.",
            "translation": "把它給我 (給 = cho)。"
          }
        ],
        "usage_note": "目的地使用 đến。",
        "image_file": "to.png"
      }
    ]
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
              term_target: "không",
              pronunciation: ["/xoŋ͡m˧/"],
              specific_note: "零/不/沒有",
            },
          ],
          examples: [
            {
              sentence: "Số không.",
              translation: "零。",
            },
            {
              sentence: "Không có gì.",
              translation: "沒什麼(不客氣)。",
            },
            {
              sentence: "Bắt đầu từ số không.",
              translation: "從零開始。",
            },
          ],
          usage_note: "在電話號碼中讀作 không。",
          image_file: "zero.png",
        },
        {
          id: "num-1",
          term_zh: "1",
          related_terms: [
            {
              term_target: "một",
              pronunciation: ["/mot̚˧˨ˀ/"],
              specific_note: "",
            },
            {
              term_target: "mốt",
              pronunciation: ["/mot̚˧˥/"],
              specific_note: "21以上的尾數1",
            },
          ],
          examples: [
            {
              sentence: "Một cái.",
              translation: "一個。",
            },
            {
              sentence: "Hai mươi mốt.",
              translation: "二十一 (21)。",
            },
            {
              sentence: "Một mình.",
              translation: "一個人(獨自)。",
            },
          ],
          usage_note: "20以上的個位數1讀作 mốt。",
          image_file: "one.png",
        },
        {
          id: "num-2",
          term_zh: "2",
          related_terms: [
            {
              term_target: "hai",
              pronunciation: ["/haːj˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Hai người.",
              translation: "兩個人。",
            },
            {
              sentence: "Thứ hai.",
              translation: "星期一 (第二天)。",
            },
            {
              sentence: "Hai mươi.",
              translation: "二十 (20)。",
            },
          ],
          usage_note: "二。",
          image_file: "two.png",
        },
        {
          id: "num-3",
          term_zh: "3",
          related_terms: [
            { term_target: "ba", pronunciation: ["/ɓaː˧/"], specific_note: "" },
          ],
          examples: [
            {
              sentence: "Ba ngày.",
              translation: "三天。",
            },
            {
              sentence: "Thứ ba.",
              translation: "星期二 (第三天)。",
            },
            {
              sentence: "Ba mẹ.",
              translation: "爸媽 (Ba 也指爸爸)。",
            },
          ],
          usage_note: "三。",
          image_file: "three.png",
        },
        {
          id: "num-4",
          term_zh: "4",
          related_terms: [
            {
              term_target: "bốn",
              pronunciation: ["/ɓon˧˥/"],
              specific_note: "",
            },
            {
              term_target: "tư",
              pronunciation: ["/tɨ˧/"],
              specific_note: "24以上的尾數4",
            },
          ],
          examples: [
            {
              sentence: "Bốn giờ.",
              translation: "四點。",
            },
            {
              sentence: "Hai mươi tư.",
              translation: "二十四 (24)。",
            },
            {
              sentence: "Thứ tư.",
              translation: "星期三 (第四天)。",
            },
          ],
          usage_note: "20以上的個位數4通常讀作 tư。",
          image_file: "four.png",
        },
        {
          id: "num-5",
          term_zh: "5",
          related_terms: [
            {
              term_target: "năm",
              pronunciation: ["/nam˧/"],
              specific_note: "",
            },
            {
              term_target: "lăm",
              pronunciation: ["/lam˧/"],
              specific_note: "15以上的尾數5",
            },
          ],
          examples: [
            {
              sentence: "Năm phút.",
              translation: "五分鐘。",
            },
            {
              sentence: "Mười lăm.",
              translation: "十五 (15)。",
            },
            {
              sentence: "Năm mươi lăm.",
              translation: "五十五 (55)。",
            },
          ],
          usage_note: "10以上的個位數5讀作 lăm。",
          image_file: "five.png",
        },
        {
          id: "num-6",
          term_zh: "6",
          related_terms: [
            {
              term_target: "sáu",
              pronunciation: ["/saw˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Sáu cái.",
              translation: "六個。",
            },
            {
              sentence: "Thứ sáu.",
              translation: "星期五。",
            },
            {
              sentence: "Sáu giờ.",
              translation: "六點。",
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
              term_target: "bảy",
              pronunciation: ["/ɓəj˧˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bảy ngày.",
              translation: "七天。",
            },
            {
              sentence: "Thứ bảy.",
              translation: "星期六。",
            },
            {
              sentence: "Bảy giờ.",
              translation: "七點。",
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
              term_target: "tám",
              pronunciation: ["/taːm˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tám tuổi.",
              translation: "八歲。",
            },
            {
              sentence: "Tháng tám.",
              translation: "八月。",
            },
            {
              sentence: "Tám giờ.",
              translation: "八點。",
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
              term_target: "chín",
              pronunciation: ["/tɕiːn˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Chín giờ.",
              translation: "九點。",
            },
            {
              sentence: "Chín người.",
              translation: "九個人。",
            },
            {
              sentence: "Chín mươi.",
              translation: "九十 (90)。",
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
              term_target: "mười",
              pronunciation: ["/mɨəj˨˩/"],
              specific_note: "",
            },
            {
              term_target: "chục",
              pronunciation: ["/tɕuk͡p̚˧˨ˀ/"],
              specific_note: "口語/十個",
            },
          ],
          examples: [
            {
              sentence: "Mười cái.",
              translation: "十個。",
            },
            {
              sentence: "Một chục trứng.",
              translation: "十顆蛋。",
            },
            {
              sentence: "Mười giờ.",
              translation: "十點。",
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
              term_target: "mười một",
              pronunciation: ["/mɨəj˨˩ mot̚˧˨ˀ/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "11 giờ.",
              translation: "11點。",
            },
            {
              sentence: "Mười một tuổi.",
              translation: "11歲。",
            },
            {
              sentence: "Tháng mười một.",
              translation: "11月。",
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
              term_target: "mười hai",
              pronunciation: ["/mɨəj˨˩ haːj˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "12 tháng.",
              translation: "12個月。",
            },
            {
              sentence: "Mười hai giờ.",
              translation: "12點。",
            },
            {
              sentence: "Tháng mười hai.",
              translation: "12月。",
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
              term_target: "mười lăm",
              pronunciation: ["/mɨəj˨˩ lam˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "15 phút.",
              translation: "15分。",
            },
            {
              sentence: "Ngày mười lăm.",
              translation: "15號。",
            },
            {
              sentence: "Mười lăm tuổi.",
              translation: "15歲。",
            },
          ],
          usage_note: "注意：不是 mười năm，而是 mười lăm。",
          image_file: "fifteen.png",
        },
        {
          id: "num-20",
          term_zh: "20",
          related_terms: [
            {
              term_target: "hai mươi",
              pronunciation: ["/haːj˧ mɨəj˧/"],
              specific_note: "",
            },
            {
              term_target: "hai chục",
              pronunciation: ["/haːj˧ tɕuk͡p̚˧˨ˀ/"],
              specific_note: "口語",
            },
          ],
          examples: [
            {
              sentence: "Hai mươi tuổi.",
              translation: "20歲。",
            },
            {
              sentence: "Hai mươi nghìn.",
              translation: "兩萬(越南盾)。",
            },
            {
              sentence: "Hai chục cái.",
              translation: "二十個。",
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
              term_target: "năm mươi",
              pronunciation: ["/nam˧ mɨəj˧/"],
              specific_note: "",
            },
            {
              term_target: "năm chục",
              pronunciation: ["/nam˧ tɕuk͡p̚˧˨ˀ/"],
              specific_note: "口語",
            },
          ],
          examples: [
            {
              sentence: "Năm mươi phần trăm.",
              translation: "50%。",
            },
            {
              sentence: "Năm mươi người.",
              translation: "五十人。",
            },
            {
              sentence: "Năm chục nghìn.",
              translation: "五萬(越南盾)。",
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
              term_target: "một trăm",
              pronunciation: ["/mot̚˧˨ˀ tɕam˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Một trăm điểm.",
              translation: "一百分。",
            },
            {
              sentence: "Một trăm nghìn.",
              translation: "十萬(越南盾)。",
            },
            {
              sentence: "Một trăm người.",
              translation: "一百人。",
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
              term_target: "một nghìn",
              pronunciation: ["/mot̚˧˨ˀ ŋiːn˨˩/"],
              specific_note: "北越",
            },
            {
              term_target: "một ngàn",
              pronunciation: ["/mot̚˧˨ˀ ŋaːn˨˩/"],
              specific_note: "南越",
            },
          ],
          examples: [
            {
              sentence: "Một nghìn đồng.",
              translation: "一千元。",
            },
            {
              sentence: "Một ngàn năm.",
              translation: "一千年。",
            },
            {
              sentence: "Năm nghìn.",
              translation: "五千。",
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
              term_target: "mười nghìn",
              pronunciation: ["/mɨəj˨˩ ŋiːn˨˩/"],
              specific_note: "一萬",
            },
            {
              term_target: "một vạn",
              pronunciation: ["/mot̚˧˨ˀ vaːn˧˨ˀ/"],
              specific_note: "漢越詞/少用",
            },
          ],
          examples: [
            {
              sentence: "Mười nghìn đồng.",
              translation: "一萬元(越南盾)。",
            },
            {
              sentence: "Mười ngàn người.",
              translation: "一萬人。",
            },
            {
              sentence: "Hai mươi nghìn.",
              translation: "兩萬(越南盾)。",
            },
          ],
          usage_note: "越南文習慣說「十千」，很少說「萬」。",
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
              term_target: "Tôi là ...",
              pronunciation: ["/toj˧ laː˨˩/"],
              specific_note: "是",
            },
            {
              term_target: "Tôi cảm thấy ...",
              pronunciation: ["/toj˧ kaːm˧˩ tʰəj˧˥/"],
              specific_note: "覺得",
            },
          ],
          examples: [
            {
              sentence: "Tôi là học sinh.",
              translation: "我是學生。",
            },
            {
              sentence: "Tôi cảm thấy vui.",
              translation: "我覺得快樂。",
            },
            {
              sentence: "Tôi là người Việt Nam.",
              translation: "我是越南人。",
            },
          ],
          usage_note: "Là 用於身分，Cảm thấy 用於感受。",
          image_file: "i_am.png",
        },
        {
          id: "g-02",
          term_zh: "我的名字叫～",
          related_terms: [
            {
              term_target: "Tên tôi là ...",
              pronunciation: ["/ten˧ toj˧ laː˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tên tôi là Nam.",
              translation: "我的名字叫南。",
            },
            {
              sentence: "Tôi tên là Lan.",
              translation: "我叫蘭。",
            },
            {
              sentence: "Tên bạn là gì?",
              translation: "你的名字叫什麼？",
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
              term_target: "Tôi làm ...",
              pronunciation: ["/toj˧ laːm˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi làm bài tập.",
              translation: "我做功課。",
            },
            {
              sentence: "Tôi làm việc.",
              translation: "我工作。",
            },
            {
              sentence: "Tôi chơi thể thao.",
              translation: "我做運動(玩體育)。",
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
              term_target: "Tôi đang ...",
              pronunciation: ["/toj˧ ɗaːŋ˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi đang ăn.",
              translation: "我正在吃。",
            },
            {
              sentence: "Tôi đang đợi.",
              translation: "我正在等。",
            },
            {
              sentence: "Bạn đang làm gì?",
              translation: "你正在做什麼？",
            },
          ],
          usage_note: "進行式 (Đang + 動詞)。",
          image_file: "ing.png",
        },
        {
          id: "g-05",
          term_zh: "我能夠～",
          related_terms: [
            {
              term_target: "Tôi có thể ...",
              pronunciation: ["/toj˧ kɔ˧˥ tʰe˧˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi có thể bơi.",
              translation: "我會游泳。",
            },
            {
              sentence: "Tôi có thể giúp bạn.",
              translation: "我可以幫你。",
            },
            {
              sentence: "Tôi biết lái xe.",
              translation: "我會開車 (Biết 也表能力)。",
            },
          ],
          usage_note: "Có thể (能夠) 或 Biết (懂得)。",
          image_file: "can.png",
        },
        {
          id: "g-06",
          term_zh: "我喜歡做～",
          related_terms: [
            {
              term_target: "Tôi thích ...",
              pronunciation: ["/toj˧ tʰic̚˧˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi thích đọc sách.",
              translation: "我喜歡閱讀。",
            },
            {
              sentence: "Tôi thích đi du lịch.",
              translation: "我喜歡旅行。",
            },
            {
              sentence: "Tôi thích món này.",
              translation: "我喜歡這道菜。",
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
              term_target: "Tôi đã ...",
              pronunciation: ["/toj˧ ɗaː˧ˀ˥/"],
              specific_note: "",
            },
            {
              term_target: "Tôi từng ...",
              pronunciation: ["/toj˧ tɨŋ˨˩/"],
              specific_note: "曾經",
            },
          ],
          examples: [
            {
              sentence: "Tôi đã là sinh viên.",
              translation: "我曾經是大學生。",
            },
            {
              sentence: "Tôi từng sống ở đó.",
              translation: "我曾經住在那裡。",
            },
            {
              sentence: "Tôi đã nói rồi.",
              translation: "我已經說過了。",
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
              term_target: "Tôi đã ... rồi",
              pronunciation: ["/toj˧ ɗaː˧ˀ˥ ... zoj˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi đã làm rồi.",
              translation: "我做過了。",
            },
            {
              sentence: "Tôi đã xem phim này rồi.",
              translation: "我看過這部電影了。",
            },
            {
              sentence: "Tôi ăn rồi.",
              translation: "我吃過了。",
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
              term_target: "Tôi đã ...",
              pronunciation: ["/toj˧ ɗaː˧ˀ˥/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi đã ăn.",
              translation: "我已經吃了。",
            },
            {
              sentence: "Tôi đã mua vé.",
              translation: "我已經買票了。",
            },
            {
              sentence: "Tôi đã xong việc.",
              translation: "我已經做完工作了。",
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
              term_target: "Tôi đã từng đi ...",
              pronunciation: ["/toj˧ ɗaː˧ˀ˥ tɨŋ˨˩ ɗi/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi đã từng đi Nhật.",
              translation: "我曾經去過日本。",
            },
            {
              sentence: "Tôi từng đi Hà Nội.",
              translation: "我曾經去過河內。",
            },
            {
              sentence: "Bạn đã từng đi chưa?",
              translation: "你有去過嗎？",
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
              term_target: "Tôi sẽ ...",
              pronunciation: ["/toj˧ sɛ˧ˀ˥/"],
              specific_note: "將要",
            },
            {
              term_target: "Tôi định ...",
              pronunciation: ["/toj˧ ɗiɲ˧˨ˀ/"],
              specific_note: "打算",
            },
          ],
          examples: [
            {
              sentence: "Tôi sẽ đi.",
              translation: "我將要去。",
            },
            {
              sentence: "Tôi định mua xe.",
              translation: "我打算買車。",
            },
            {
              sentence: "Ngày mai tôi sẽ về.",
              translation: "明天我將回去。",
            },
          ],
          usage_note: "未來意。",
          image_file: "i_will.png",
        },
        {
          id: "g-12",
          term_zh: "你是～嗎？",
          related_terms: [
            {
              term_target: "Bạn có phải là ... không?",
              pronunciation: ["/ɓaːn˧˨ˀ kɔ˧˥ faːj˧˩ laː˨˩ ... xoŋ͡m˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bạn có phải là học sinh không?",
              translation: "你是學生嗎？",
            },
            {
              sentence: "Anh có phải là bác sĩ không?",
              translation: "你是醫生嗎？",
            },
            {
              sentence: "Đây có phải là nhà bạn không?",
              translation: "這是你家嗎？",
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
              term_target: "Bạn đang ... à?",
              pronunciation: ["/ɓaːn˧˨ˀ ɗaːŋ˧ ... aː˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bạn đang ăn à?",
              translation: "你在吃嗎？",
            },
            {
              sentence: "Bạn đang ngủ à?",
              translation: "你在睡覺嗎？",
            },
            {
              sentence: "Bạn đang làm gì?",
              translation: "你在做什麼？",
            },
          ],
          usage_note: "進行疑問。",
          image_file: "do_you.png",
        },
        {
          id: "g-14",
          term_zh: "你曾經～嗎？",
          related_terms: [
            {
              term_target: "Bạn đã từng ... chưa?",
              pronunciation: ["/ɓaːn˧˨ˀ ɗaː˧ˀ˥ tɨŋ˨˩ ... tɕɨə˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bạn đã từng đi chưa?",
              translation: "你有去過嗎？",
            },
            {
              sentence: "Bạn đã từng ăn phở chưa?",
              translation: "你有吃過河粉嗎？",
            },
            {
              sentence: "Chưa bao giờ.",
              translation: "從來沒有。",
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
              term_target: "Khi nào bạn ...?",
              pronunciation: ["/xi˧ naːw˨˩ ɓaːn˧˨ˀ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Khi nào bạn ngủ?",
              translation: "你何時睡？",
            },
            {
              sentence: "Khi nào bạn về?",
              translation: "你何時回來？",
            },
            {
              sentence: "Khi nào bắt đầu?",
              translation: "何時開始？",
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
              term_target: "Khi nào bạn đi ...?",
              pronunciation: ["/xi˧ naːw˨˩ ɓaːn˧˨ˀ ɗi .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Khi nào bạn đi học?",
              translation: "你何時去上學？",
            },
            {
              sentence: "Khi nào anh đi làm?",
              translation: "你(哥哥)何時去上班？",
            },
            {
              sentence: "Khi nào chúng ta đi?",
              translation: "我們何時出發？",
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
              term_target: "Bạn ... ở đâu?",
              pronunciation: ["/ɓaːn˧˨ˀ ... əː˧˩ ɗəw˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bạn sống ở đâu?",
              translation: "你住哪裡？",
            },
            {
              sentence: "Bạn làm việc ở đâu?",
              translation: "你在哪裡工作？",
            },
            {
              sentence: "Mua cái này ở đâu?",
              translation: "這個在哪裡買？",
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
              term_target: "Bạn ... như thế nào?",
              pronunciation: ["/ɓaːn˧˨ˀ ... ɲɨ˧ tʰe˧˥ naːw˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bạn đi như thế nào?",
              translation: "你怎麼去？",
            },
            {
              sentence: "Làm như thế nào?",
              translation: "該怎麼做？",
            },
            {
              sentence: "Sử dụng như thế nào?",
              translation: "怎麼使用？",
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
              term_target: "Bạn đi ... bằng gì?",
              pronunciation: ["/ɓaːn˧˨ˀ ɗi ... ɓaŋ˨˩ zi˨˩/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bạn đi học bằng gì?",
              translation: "你怎麼去上學(搭什麼車)？",
            },
            {
              sentence: "Đi sân bay bằng gì?",
              translation: "怎麼去機場？",
            },
            {
              sentence: "Tôi đi bằng xe máy.",
              translation: "我騎機車去。",
            },
          ],
          usage_note: "問交通工具。",
          image_file: "how_go_to.png",
        },
        {
          id: "g-20",
          term_zh: "我不是～",
          related_terms: [
            {
              term_target: "Tôi không phải là ...",
              pronunciation: ["/toj˧ xoŋ͡m˧ faːj˧˩ laː˨˩ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi không phải là bác sĩ.",
              translation: "我不是醫生。",
            },
            {
              sentence: "Tôi không phải người Việt.",
              translation: "我不是越南人。",
            },
            {
              sentence: "Không phải tôi.",
              translation: "不是我。",
            },
          ],
          usage_note: "否定身分。",
          image_file: "i_am_not.png",
        },
        {
          id: "g-21",
          term_zh: "我不做～",
          related_terms: [
            {
              term_target: "Tôi không ...",
              pronunciation: ["/toj˧ xoŋ͡m˧ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi không hút thuốc.",
              translation: "我不抽菸。",
            },
            {
              sentence: "Tôi không biết.",
              translation: "我不知道。",
            },
            {
              sentence: "Tôi không đi.",
              translation: "我不去。",
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
              term_target: "Tôi không thể ...",
              pronunciation: ["/toj˧ xoŋ͡m˧ tʰe˧˩ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi không thể đi.",
              translation: "我不能去。",
            },
            {
              sentence: "Tôi không thể ăn cay.",
              translation: "我不能吃辣。",
            },
            {
              sentence: "Không thể tin được.",
              translation: "難以置信 (不能相信)。",
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
              term_target: "Tôi chưa bao giờ ...",
              pronunciation: ["/toj˧ tɕɨə˧ ɓaːw˧ zəː˨˩ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi chưa bao giờ ăn.",
              translation: "我一次都沒吃過。",
            },
            {
              sentence: "Tôi chưa bao giờ gặp anh ấy.",
              translation: "我從未見過他。",
            },
            {
              sentence: "Chưa bao giờ đi.",
              translation: "沒去過。",
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
              term_target: "Tôi không cần ...",
              pronunciation: ["/toj˧ xoŋ͡m˧ kən˨˩ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi không cần đi.",
              translation: "我不必去。",
            },
            {
              sentence: "Bạn không cần trả tiền.",
              translation: "你不必付錢。",
            },
            {
              sentence: "Không cần lo lắng.",
              translation: "不必擔心。",
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
              term_target: "Nếu ..., thì ...",
              pronunciation: ["/new˧˥ ..., tʰi˨˩ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Nếu thích, thì mua.",
              translation: "如果喜歡，就買。",
            },
            {
              sentence: "Nếu mưa, thì ở nhà.",
              translation: "如果下雨，就在家。",
            },
            {
              sentence: "Nếu rảnh, thì đi chơi.",
              translation: "如果有空，就去玩。",
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
              term_target: "Khi ..., ...",
              pronunciation: ["/xi˧ ..., .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Khi ăn, tôi vui.",
              translation: "當我吃東西時，我很開心。",
            },
            {
              sentence: "Khi rảnh, tôi đọc sách.",
              translation: "當有空時，我看書。",
            },
            {
              sentence: "Khi nào xong, gọi tôi.",
              translation: "何時做完，叫我。",
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
              term_target: "Bạn có thể ... không?",
              pronunciation: ["/ɓaːn˧˨ˀ kɔ˧˥ tʰe˧˩ ... xoŋ͡m˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bạn có thể giúp tôi không?",
              translation: "可以幫我嗎？",
            },
            {
              sentence: "Bạn có thể nói chậm lại không?",
              translation: "你可以說慢一點嗎？",
            },
            {
              sentence: "Làm ơn.",
              translation: "拜託(請)。",
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
              term_target: "Hãy cùng ...",
              pronunciation: ["/haj˧ˀ˥ kuŋ˨˩ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Hãy cùng đi.",
              translation: "我們走吧。",
            },
            {
              sentence: "Đi thôi!",
              translation: "走吧！(口語)",
            },
            {
              sentence: "Hãy cùng ăn.",
              translation: "一起吃吧。",
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
              term_target: "Tôi nghĩ ...",
              pronunciation: ["/toj˧ ŋi˧ˀ˥ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi nghĩ là tốt.",
              translation: "我認為很好。",
            },
            {
              sentence: "Tôi nghĩ bạn đúng.",
              translation: "我認為你是對的。",
            },
            {
              sentence: "Tôi cũng nghĩ vậy.",
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
              term_target: "Tôi muốn ...",
              pronunciation: ["/toj˧ muən˧˥ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi muốn đi.",
              translation: "我想去。",
            },
            {
              sentence: "Tôi muốn mua cái này.",
              translation: "我想買這個。",
            },
            {
              sentence: "Tôi muốn về nhà.",
              translation: "我想回家。",
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
              term_target: "Tôi phải ...",
              pronunciation: ["/toj˧ faːj˧˩ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi phải làm việc.",
              translation: "我必須工作。",
            },
            {
              sentence: "Tôi phải đi rồi.",
              translation: "我得走了。",
            },
            {
              sentence: "Bạn phải cẩn thận.",
              translation: "你必須小心。",
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
              term_target: "Làm ... thì ...",
              pronunciation: ["/laːm˨˩ ... tʰi˨˩ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Ăn thì vui.",
              translation: "吃東西是開心的。",
            },
            {
              sentence: "Học tiếng Việt thì khó.",
              translation: "學越南語很難。",
            },
            {
              sentence: "Đi bộ thì tốt.",
              translation: "走路很好。",
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
              term_target: "Bạn có thể giúp tôi ... không?",
              pronunciation: ["/ɓaːn˧˨ˀ kɔ˧˥ tʰe˧˩ zup̚˧˥ toj˧ ... xoŋ͡m˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Bạn có thể giúp tôi dọn dẹp không?",
              translation: "你可以幫我打掃嗎？",
            },
            {
              sentence: "Giúp tôi với!",
              translation: "幫幫我！",
            },
            {
              sentence: "Làm ơn giúp tôi.",
              translation: "拜託幫我。",
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
              term_target: "Tôi có thể ... không?",
              pronunciation: ["/toj˧ kɔ˧˥ tʰe˧˩ ... xoŋ͡m˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi có thể vào không?",
              translation: "我可以進來嗎？",
            },
            {
              sentence: "Tôi có thể thử không?",
              translation: "我可以試試嗎？",
            },
            {
              sentence: "Tôi có thể ngồi đây không?",
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
              term_target: "Tôi không thích ...",
              pronunciation: ["/toj˧ xoŋ͡m˧ tʰic̚˧˥ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi không thích nó.",
              translation: "我不喜歡它。",
            },
            {
              sentence: "Tôi không thích chờ đợi.",
              translation: "我不喜歡等待。",
            },
            {
              sentence: "Tôi không thích ăn cay.",
              translation: "我不喜歡吃辣。",
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
              term_target: "Tôi thích ... hơn",
              pronunciation: ["/toj˧ tʰic̚˧˥ ... hơːn˧/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Tôi thích trà hơn.",
              translation: "我比較喜歡茶。",
            },
            {
              sentence: "Tôi thích cái này hơn.",
              translation: "我比較喜歡這個。",
            },
            {
              sentence: "Tôi thích ở nhà hơn.",
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
              term_target: "A ... hơn B",
              pronunciation: ["/A ... hơːn˧ B/"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Cái này đắt hơn cái kia.",
              translation: "這比那個貴。",
            },
            {
              sentence: "Anh ấy cao hơn tôi.",
              translation: "他比我高。",
            },
            {
              sentence: "Hôm nay nóng hơn hôm qua.",
              translation: "今天比昨天熱。",
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
              term_target: "Có ...",
              pronunciation: ["/kɔ˧˥ .../"],
              specific_note: "",
            },
          ],
          examples: [
            {
              sentence: "Có con chó.",
              translation: "有一隻狗。",
            },
            {
              sentence: "Ở đây có wifi không?",
              translation: "這裡有 wifi 嗎？",
            },
            {
              sentence: "Có người ở nhà.",
              translation: "有人在家。",
            },
          ],
          usage_note: "存在。",
          image_file: "there_is.png",
        },
      ],
    },
  ],
};
