import { AppData } from '../types';

export const vietnameseData: AppData =
{
  "meta": {
    "source_language": "zh-TW",
    "target_language": "vi-VN",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 越南文完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)"
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
            { "term_target": "Xin chào", "pronunciation": ["/sin˧ tɕaːw˨˩/"], "specific_note": "通用/正式" },
            { "term_target": "Chào bạn", "pronunciation": ["/tɕaːw˨˩ ɓaːn˧˨ˀ/"], "specific_note": "平輩/朋友" }
          ],
          "example": { "sentence": "Xin chào, bạn khỏe không?", "translation": "你好，你好嗎？" },
          "usage_note": "對長輩建議說 Chào + 稱謂 (例如 Chào anh)。",
          "image_file": "hello.png"
        },
        {
          "id": "greet-002",
          "term_zh": "再見",
          "related_terms": [
            { "term_target": "Tạm biệt", "pronunciation": ["/taːm˧˨ˀ ɓiət̚˧˨ˀ/"], "specific_note": "正式" },
            { "term_target": "Hẹn gặp lại", "pronunciation": ["/hɛn˧˨ˀ ɣap̚˧˨ˀ laːj˧˨ˀ/"], "specific_note": "再見(約定)" }
          ],
          "example": { "sentence": "Tạm biệt, hẹn gặp lại.", "translation": "再見，下次見。" },
          "usage_note": "口語常直接說 Bye Bye。",
          "image_file": "goodbye.png"
        },
        {
          "id": "greet-003",
          "term_zh": "謝謝你",
          "related_terms": [
            { "term_target": "Cảm ơn", "pronunciation": ["/kaːm˧˩ ʔəːn˧/"], "specific_note": "通用" },
            { "term_target": "Cảm ơn nhiều", "pronunciation": ["/kaːm˧˩ ʔəːn˧ ɲiəw˨˩/"], "specific_note": "多謝" }
          ],
          "example": { "sentence": "Cảm ơn rất nhiều.", "translation": "非常謝謝你。" },
          "usage_note": "發音像台語的「感恩」。",
          "image_file": "thank_you.png"
        },
        {
          "id": "greet-004",
          "term_zh": "對不起",
          "related_terms": [
            { "term_target": "Xin lỗi", "pronunciation": ["/sin˧ loj˦ˀ˥/"], "specific_note": "通用" }
          ],
          "example": { "sentence": "Xin lỗi, tôi đến muộn.", "translation": "對不起，我遲到了。" },
          "usage_note": "做錯事道歉或請求讓路時使用。",
          "image_file": "sorry.png"
        },
        {
          "id": "greet-005",
          "term_zh": "早安",
          "related_terms": [
            { "term_target": "Chào buổi sáng", "pronunciation": ["/tɕaːw˨˩ ɓuəj˧˩ saːŋ˧˥/"], "specific_note": "" }
          ],
          "example": { "sentence": "Chào buổi sáng.", "translation": "早安。" },
          "usage_note": "Buổi sáng 是「早上」。",
          "image_file": "good_morning.png"
        },
        {
          "id": "greet-006",
          "term_zh": "請問...",
          "related_terms": [
            { "term_target": "Xin hỏi", "pronunciation": ["/sin˧ hɔj˧˩/"], "specific_note": "發問前" },
            { "term_target": "Cho tôi hỏi", "pronunciation": ["/tɕɔ˧ toj˧ hɔj˧˩/"], "specific_note": "讓我問一下" }
          ],
          "example": { "sentence": "Xin hỏi, đây là đâu?", "translation": "請問，這是哪裡？" },
          "usage_note": "禮貌發問前使用。",
          "image_file": "excuse_me.png"
        },
        {
          "id": "greet-007",
          "term_zh": "借過",
          "related_terms": [
            { "term_target": "Cho tôi qua", "pronunciation": ["/tɕɔ˧ toj˧ kwaː˧/"], "specific_note": "讓我過" },
            { "term_target": "Xin lỗi", "pronunciation": ["/sin˧ loj˦ˀ˥/"], "specific_note": "不好意思" }
          ],
          "example": { "sentence": "Xin lỗi, cho tôi qua một chút.", "translation": "不好意思，讓我過一下。" },
          "usage_note": "Cho tôi qua 語意明確。",
          "image_file": "excuse_me_pass.png"
        },
        {
          "id": "greet-008",
          "term_zh": "我不懂",
          "related_terms": [
            { "term_target": "Tôi không hiểu", "pronunciation": ["/toj˧ xoŋ͡m˧ hiəw˧˩/"], "specific_note": "" }
          ],
          "example": { "sentence": "Xin lỗi, tôi không hiểu.", "translation": "抱歉，我不懂。" },
          "usage_note": "Hiểu 是「明白/懂」。",
          "image_file": "dont_understand.png"
        },
        {
          "id": "greet-009",
          "term_zh": "這是什麼？",
          "related_terms": [
            { "term_target": "Cái này là cái gì?", "pronunciation": ["/kaːj˧˥ naj˨˩ laː˨˩ kaːj˧˥ zi˨˩/"], "specific_note": "" }
          ],
          "example": { "sentence": "Cái này là cái gì?", "translation": "這是什麼？" },
          "usage_note": "Cái này (這個) + là (是) + cái gì (什麼)。",
          "image_file": "what_is_this.png"
        },
        {
          "id": "greet-010",
          "term_zh": "我想要這個",
          "related_terms": [
            { "term_target": "Tôi muốn cái này", "pronunciation": ["/toj˧ muən˧˥ kaːj˧˥ naj˨˩/"], "specific_note": "我想要" },
            { "term_target": "Cho tôi cái này", "pronunciation": ["/tɕɔ˧ toj˧ kaːj˧˥ naj˨˩/"], "specific_note": "給我這個(購買時)" }
          ],
          "example": { "sentence": "Tôi muốn mua cái này.", "translation": "我想買這個。" },
          "usage_note": "買東西直接說 Cho tôi cái này 也很自然。",
          "image_file": "i_want_this.png"
        },
        {
          "id": "greet-011",
          "term_zh": "請給我...",
          "related_terms": [
            { "term_target": "Cho tôi...", "pronunciation": ["/tɕɔ˧ toj˧/"], "specific_note": "" }
          ],
          "example": { "sentence": "Cho tôi một ly nước.", "translation": "請給我一杯水。" },
          "usage_note": "Cho (給) + Tôi (我)。",
          "image_file": "please_give_me.png"
        },
        {
          "id": "greet-012",
          "term_zh": "廁所在哪裡？",
          "related_terms": [
            { "term_target": "Nhà vệ sinh ở đâu?", "pronunciation": ["/ɲaː˨˩ ve˧˨ˀ siɲ˧ əː˧˩ ɗəw˧/"], "specific_note": "" }
          ],
          "example": { "sentence": "Xin hỏi, nhà vệ sinh ở đâu?", "translation": "請問，廁所在哪？" },
          "usage_note": "Nhà vệ sinh (衛生間) + ở đâu (在哪)。",
          "image_file": "where_bathroom.png"
        },
        {
          "id": "greet-013",
          "term_zh": "多少錢？",
          "related_terms": [
            { "term_target": "Bao nhiêu tiền?", "pronunciation": ["/ɓaːw˧ ɲiəw˧ tiən˨˩/"], "specific_note": "" }
          ],
          "example": { "sentence": "Cái này bao nhiêu tiền?", "translation": "這個多少錢？" },
          "usage_note": "購物必備。",
          "image_file": "how_much.png"
        },
        {
          "id": "greet-014",
          "term_zh": "請幫我",
          "related_terms": [
            { "term_target": "Làm ơn giúp tôi", "pronunciation": ["/laːm˨˩ əːn˧ zup̚˧˥ toj˧/"], "specific_note": "禮貌請求" },
            { "term_target": "Cứu tôi với", "pronunciation": ["/kɨəw˧˥ toj˧ vəj˧˥/"], "specific_note": "緊急救命" }
          ],
          "example": { "sentence": "Làm ơn giúp tôi với.", "translation": "拜託幫幫我。" },
          "usage_note": "一般協助用 Giúp tôi。",
          "image_file": "help_me.png"
        },
        {
          "id": "greet-015",
          "term_zh": "你可以再說一次嗎？",
          "related_terms": [
            { "term_target": "Bạn nói lại được không?", "pronunciation": ["/ɓaːn˧˨ˀ nɔj˧˥ laːj˧˨ˀ ɗɨək̚˧˨ˀ xoŋ͡m˧/"], "specific_note": "" }
          ],
          "example": { "sentence": "Xin lỗi, bạn nói lại được không?", "translation": "抱歉，能再說一次嗎？" },
          "usage_note": "Nói lại (再說) + được không (行嗎)。",
          "image_file": "say_again.png"
        },
        {
          "id": "greet-016",
          "term_zh": "你可以講慢一點嗎？",
          "related_terms": [
            { "term_target": "Bạn nói chậm lại được không?", "pronunciation": ["/ɓaːn˧˨ˀ nɔj˧˥ tɕəm˧˨ˀ laːj˧˨ˀ ɗɨək̚˧˨ˀ xoŋ͡m˧/"], "specific_note": "" }
          ],
          "example": { "sentence": "Làm ơn nói chậm lại.", "translation": "請講慢一點。" },
          "usage_note": "Chậm (慢) + Lại (下來)。",
          "image_file": "speak_slowly.png"
        }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個/它", "related_terms": [{ "term_target": "cái đó", "pronunciation": ["/kaːj˧˥ ɗɔ˧˥/"], "specific_note": "那個" }, { "term_target": "nó", "pronunciation": ["/nɔ˧˥/"], "specific_note": "它/他(卑稱)" }], "example": {"sentence": "Cái đó là gì?", "translation": "那是什麼？"}, "usage_note": "Cái đó 指物，Nó 指動物或小孩。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "tôi", "pronunciation": ["/toj˧/"], "specific_note": "通用/正式" }, { "term_target": "em", "pronunciation": ["/ɛm˧/"], "specific_note": "對長輩自稱" }, { "term_target": "anh / chị", "pronunciation": ["/aɲ˧/  /tɕi˧˨ˀ/"], "specific_note": "對晚輩自稱" }], "example": {"sentence": "Tôi là người Đài Loan.", "translation": "我是台灣人。"}, "usage_note": "初學者建議用 Tôi。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "bạn", "pronunciation": ["/ɓaːn˧˨ˀ/"], "specific_note": "朋友/平輩" }, { "term_target": "anh / chị", "pronunciation": ["/aɲ˧/  /tɕi˧˨ˀ/"], "specific_note": "尊稱(男/女)" }], "example": {"sentence": "Bạn tên là gì?", "translation": "你叫什麼名字？"}, "usage_note": "越南文稱呼很複雜，一般可用 Bạn。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他", "related_terms": [{ "term_target": "anh ấy", "pronunciation": ["/aɲ˧ əj˧˥/"], "specific_note": "" }], "example": {"sentence": "Anh ấy là giáo viên.", "translation": "他是老師。"}, "usage_note": "Anh (哥哥) + ấy (那個) = 他。", "image_file": "he.png" },
        { "id": "pro-05", "term_zh": "她的", "related_terms": [{ "term_target": "của cô ấy", "pronunciation": ["/kuə˧˩ ko˧ əj˧˥/"], "specific_note": "" }], "example": {"sentence": "Túi của cô ấy.", "translation": "她的包包。"}, "usage_note": "Của (的) + Cô ấy (她)。", "image_file": "her.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "chúng tôi", "pronunciation": ["/tɕuŋ͡m˧˥ toj˧/"], "specific_note": "排除聽者" }, { "term_target": "chúng ta", "pronunciation": ["/tɕuŋ͡m˧˥ taː˧/"], "specific_note": "包含聽者" }], "example": {"sentence": "Chúng tôi là sinh viên.", "translation": "我們是大學生(跟你無關)。"}, "usage_note": "注意區分包含/排除。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "她", "related_terms": [{ "term_target": "cô ấy", "pronunciation": ["/ko˧ əj˧˥/"], "specific_note": "年輕女性" }, { "term_target": "chị ấy", "pronunciation": ["/tɕi˧˨ˀ əj˧˥/"], "specific_note": "稍長女性" }], "example": {"sentence": "Cô ấy rất đẹp.", "translation": "她很漂亮。"}, "usage_note": "Cô (小姐/阿姨) + ấy。", "image_file": "she.png" },
        { "id": "pro-08", "term_zh": "他們", "related_terms": [{ "term_target": "họ", "pronunciation": ["/hɔ˧˨ˀ/"], "specific_note": "通用" }, { "term_target": "các anh ấy", "pronunciation": ["/kaːk̚˧˥ aɲ˧ əj˧˥/"], "specific_note": "那些男人" }], "example": {"sentence": "Họ đang ăn.", "translation": "他們在吃。"}, "usage_note": "Họ 是最常用的第三人稱複數。", "image_file": "they.png" },
        { "id": "pro-09", "term_zh": "這個", "related_terms": [{ "term_target": "cái này", "pronunciation": ["/kaːj˧˥ naj˨˩/"], "specific_note": "" }], "example": {"sentence": "Cái này ngon.", "translation": "這個好吃。"}, "usage_note": "近處。", "image_file": "this.png" },
        { "id": "pro-10", "term_zh": "那個（指示詞）", "related_terms": [{ "term_target": "cái đó", "pronunciation": ["/kaːj˧˥ ɗɔ˧˥/"], "specific_note": "中距離" }, { "term_target": "cái kia", "pronunciation": ["/kaːj˧˥ kiə˧/"], "specific_note": "遠距離" }], "example": {"sentence": "Cái đó là của tôi.", "translation": "那是我的。"}, "usage_note": "Cái kia 指更遠的地方。", "image_file": "that_obj.png" },
        { "id": "pro-11", "term_zh": "他的", "related_terms": [{ "term_target": "của anh ấy", "pronunciation": ["/kuə˧˩ aɲ˧ əj˧˥/"], "specific_note": "" }], "example": {"sentence": "Xe của anh ấy.", "translation": "他的車。"}, "usage_note": "所有格。", "image_file": "his.png" },
        { "id": "pro-12", "term_zh": "你的", "related_terms": [{ "term_target": "của bạn", "pronunciation": ["/kuə˧˩ ɓaːn˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Tên của bạn.", "translation": "你的名字。"}, "usage_note": "Của + 對方稱呼。", "image_file": "your.png" },
        { "id": "pro-13", "term_zh": "他們的", "related_terms": [{ "term_target": "của họ", "pronunciation": ["/kuə˧˩ hɔ˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Nhà của họ.", "translation": "他們的家。"}, "usage_note": "所有格。", "image_file": "their.png" },
        { "id": "pro-14", "term_zh": "我們的", "related_terms": [{ "term_target": "của chúng tôi", "pronunciation": ["/kuə˧˩ tɕuŋ͡m˧˥ toj˧/"], "specific_note": "" }], "example": {"sentence": "Trường của chúng tôi.", "translation": "我們的學校。"}, "usage_note": "所有格。", "image_file": "our.png" },
        { "id": "pro-15", "term_zh": "這些", "related_terms": [{ "term_target": "những cái này", "pronunciation": ["/ɲɨŋ˧ˀ˥ kaːj˧˥ naj˨˩/"], "specific_note": "" }], "example": {"sentence": "Những cái này là sách.", "translation": "這些是書。"}, "usage_note": "Những 表示複數。", "image_file": "these.png" },
        { "id": "pro-16", "term_zh": "那些", "related_terms": [{ "term_target": "những cái đó", "pronunciation": ["/ɲɨŋ˧ˀ˥ kaːj˧˥ ɗɔ˧˥/"], "specific_note": "" }], "example": {"sentence": "Những cái đó là chim.", "translation": "那些是鳥。"}, "usage_note": "遠處複數。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "là", "pronunciation": ["/laː˨˩/"], "specific_note": "" }], "example": {"sentence": "Tôi là học sinh.", "translation": "我是學生。"}, "usage_note": "連結主詞和補語。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "có", "pronunciation": ["/kɔ˧˥/"], "specific_note": "" }], "example": {"sentence": "Tôi có tiền.", "translation": "我有錢。"}, "usage_note": "擁有或存在。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "đi", "pronunciation": ["/ɗi˧/"], "specific_note": "" }], "example": {"sentence": "Đi về nhà.", "translation": "回家。"}, "usage_note": "移動。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "lấy", "pronunciation": ["/ləj˧˥/"], "specific_note": "拿取" }, { "term_target": "nhận", "pronunciation": ["/ɲən˧˨ˀ/"], "specific_note": "收到" }], "example": {"sentence": "Lấy cái này.", "translation": "拿這個。"}, "usage_note": "Nhận quà (收到禮物)。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "làm", "pronunciation": ["/laːm˨˩/"], "specific_note": "" }], "example": {"sentence": "Làm bài tập.", "translation": "做作業。"}, "usage_note": "通用動詞。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "nói", "pronunciation": ["/nɔj˧˥/"], "specific_note": "" }], "example": {"sentence": "Nói tiếng Việt.", "translation": "說越南語。"}, "usage_note": "說話。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "biết", "pronunciation": ["/ɓiət̚˧˥/"], "specific_note": "知道" }, { "term_target": "quen", "pronunciation": ["/kwɛn˧/"], "specific_note": "認識(人)" }], "example": {"sentence": "Tôi biết.", "translation": "我知道。"}, "usage_note": "Biết đường (識路), Quen bạn (認識朋友)。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "nghĩ", "pronunciation": ["/ŋi˧ˀ˥/"], "specific_note": "思考" }, { "term_target": "muốn", "pronunciation": ["/muən˧˥/"], "specific_note": "想要" }], "example": {"sentence": "Tôi nghĩ vậy.", "translation": "我想是這樣。"}, "usage_note": "Nghĩ 是動腦思考，Muốn 是願望。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "thấy", "pronunciation": ["/tʰəj˧˥/"], "specific_note": "看見" }, { "term_target": "nhìn", "pronunciation": ["/ɲiːn˨˩/"], "specific_note": "注視/看" }, { "term_target": "xem", "pronunciation": ["/sɛm˧/"], "specific_note": "觀看(電視/書)" }], "example": {"sentence": "Tôi thấy bạn.", "translation": "我看到你了。"}, "usage_note": "Thấy 是結果，Nhìn/Xem 是動作。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "làm", "pronunciation": ["/laːm˨˩/"], "specific_note": "" }, { "term_target": "chế tạo", "pronunciation": ["/tɕe˧˥ taːw˧˨ˀ/"], "specific_note": "製造" }], "example": {"sentence": "Làm bánh.", "translation": "做蛋糕。"}, "usage_note": "日常多用 Làm。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "đến", "pronunciation": ["/ɗen˧˥/"], "specific_note": "抵達/來" }, { "term_target": "tới", "pronunciation": ["/təj˧˥/"], "specific_note": "到/來" }], "example": {"sentence": "Đến đây.", "translation": "來這裡。"}, "usage_note": "兩者常通用。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "cần", "pronunciation": ["/kən˨˩/"], "specific_note": "" }], "example": {"sentence": "Tôi cần nước.", "translation": "我需要水。"}, "usage_note": "需要。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "dùng", "pronunciation": ["/zuŋ͡m˨˩/"], "specific_note": "通用" }, { "term_target": "sử dụng", "pronunciation": ["/sɨ˧˩ zuŋ͡m˧˨ˀ/"], "specific_note": "正式" }], "example": {"sentence": "Dùng bút.", "translation": "用筆。"}, "usage_note": "口語常用 Dùng。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "tìm thấy", "pronunciation": ["/tiːm˨˩ tʰəj˧˥/"], "specific_note": "" }], "example": {"sentence": "Tìm thấy rồi.", "translation": "找到了。"}, "usage_note": "Tìm (找) + Thấy (見)。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "cho", "pronunciation": ["/tɕɔ˧/"], "specific_note": "" }], "example": {"sentence": "Cho tôi cái này.", "translation": "給我這個。"}, "usage_note": "給予。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "nói cho", "pronunciation": ["/nɔj˧˥ tɕɔ˧/"], "specific_note": "說給...聽" }, { "term_target": "kể", "pronunciation": ["/ke˧˩/"], "specific_note": "講述(故事)" }, { "term_target": "bảo", "pronunciation": ["/ɓaːw˧˩/"], "specific_note": "告訴/吩咐" }], "example": {"sentence": "Nói cho tôi biết.", "translation": "告訴我(讓我知道)。"}, "usage_note": "Nói cho + 人 + biết (知道)。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "làm việc", "pronunciation": ["/laːm˨˩ viək̚˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Tôi đang làm việc.", "translation": "我正在工作。"}, "usage_note": "勞動。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "thích", "pronunciation": ["/tʰic̚˧˥/"], "specific_note": "" }], "example": {"sentence": "Tôi thích bạn.", "translation": "我喜歡你。"}, "usage_note": "喜好。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "thức dậy", "pronunciation": ["/tʰɨk̚˧˥ zəj˧˨ˀ/"], "specific_note": "醒來/起床" }, { "term_target": "ngủ dậy", "pronunciation": ["/ŋu˧˩ zəj˧˨ˀ/"], "specific_note": "睡醒" }], "example": {"sentence": "Thức dậy sớm.", "translation": "早起。"}, "usage_note": "起床。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "nói chuyện", "pronunciation": ["/nɔj˧˥ tɕwiən˧˨ˀ/"], "specific_note": "交談/聊天" }], "example": {"sentence": "Nói chuyện với bạn.", "translation": "跟你說話。"}, "usage_note": "交談。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "nghe", "pronunciation": ["/ŋɛ˧/"], "specific_note": "聽/聽見" }, { "term_target": "nghe thấy", "pronunciation": ["/ŋɛ˧ tʰəj˧˥/"], "specific_note": "聽到了" }], "example": {"sentence": "Bạn có nghe thấy không?", "translation": "你有聽到嗎？"}, "usage_note": "聽覺。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "viết", "pronunciation": ["/viət̚˧˥/"], "specific_note": "" }], "example": {"sentence": "Viết tên.", "translation": "寫名字。"}, "usage_note": "書寫。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "đọc", "pronunciation": ["/ɗawk͡p̚˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Đọc sách.", "translation": "看書。"}, "usage_note": "讀文字。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "đợi", "pronunciation": ["/ɗəːj˧˨ˀ/"], "specific_note": "" }, { "term_target": "chờ", "pronunciation": ["/tɕəː˨˩/"], "specific_note": "" }], "example": {"sentence": "Đợi tôi với.", "translation": "等我一下。"}, "usage_note": "兩者通用。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "thử", "pronunciation": ["/tʰɨ˧˩/"], "specific_note": "試(吃/穿)" }, { "term_target": "cố gắng", "pronunciation": ["/ko˧˥ ɣaŋ˧˥/"], "specific_note": "嘗試/努力" }], "example": {"sentence": "Thử món này.", "translation": "試試這道菜。"}, "usage_note": "試驗。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "trả tiền", "pronunciation": ["/tɕaː˧˩ tiən˨˩/"], "specific_note": "付錢" }, { "term_target": "thanh toán", "pronunciation": ["/tʰajŋ̟˧ taːn˧˥/"], "specific_note": "結帳(正式)" }], "example": {"sentence": "Tôi sẽ trả tiền.", "translation": "我會付錢。"}, "usage_note": "支付。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "chọn", "pronunciation": ["/tɕɔn˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Chọn một cái.", "translation": "選一個。"}, "usage_note": "挑選。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "vào", "pronunciation": ["/vaːw˨˩/"], "specific_note": "" }], "example": {"sentence": "Vào nhà.", "translation": "進屋。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "sống", "pronunciation": ["/soŋ͡m˧˥/"], "specific_note": "生活/生存" }, { "term_target": "ở", "pronunciation": ["/əː˧˩/"], "specific_note": "居住/在" }], "example": {"sentence": "Tôi sống ở Đài Bắc.", "translation": "我住在台北。"}, "usage_note": "居住。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "đến", "pronunciation": ["/ɗen˧˥/"], "specific_note": "" }, { "term_target": "tới", "pronunciation": ["/təj˧˥/"], "specific_note": "" }], "example": {"sentence": "Đến nơi rồi.", "translation": "到了。"}, "usage_note": "抵達。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "đi bộ", "pronunciation": ["/ɗi˧ ɓo˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Đi bộ về nhà.", "translation": "走路回家。"}, "usage_note": "步行。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "mở", "pronunciation": ["/məː˧˩/"], "specific_note": "" }], "example": {"sentence": "Mở cửa.", "translation": "開門。"}, "usage_note": "開啟。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "đóng", "pronunciation": ["/ɗawŋ͡m˧˥/"], "specific_note": "" }], "example": {"sentence": "Đóng cửa sổ.", "translation": "關窗。"}, "usage_note": "關上。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "giúp", "pronunciation": ["/zup̚˧˥/"], "specific_note": "通用" }, { "term_target": "giúp đỡ", "pronunciation": ["/zup̚˧˥ ɗə˧ˀ˥/"], "specific_note": "幫助(名詞/動詞)" }], "example": {"sentence": "Giúp tôi.", "translation": "幫我。"}, "usage_note": "協助。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "mang", "pronunciation": ["/maːŋ˧/"], "specific_note": "攜帶" }, { "term_target": "đem", "pronunciation": ["/ɗɛm˧/"], "specific_note": "帶/拿" }], "example": {"sentence": "Mang nước.", "translation": "帶水。"}, "usage_note": "攜帶。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "需要", "related_terms": [{ "term_target": "cần", "pronunciation": ["/kən˨˩/"], "specific_note": "" }], "example": {"sentence": "Tôi cần bạn.", "translation": "我需要你。"}, "usage_note": "必要。", "image_file": "need.png" },
        { "id": "v-37", "term_zh": "使用", "related_terms": [{ "term_target": "dùng", "pronunciation": ["/zuŋ͡m˨˩/"], "specific_note": "通用" }, { "term_target": "sử dụng", "pronunciation": ["/sɨ˧˩ zuŋ͡m˧˨ˀ/"], "specific_note": "正式" }], "example": {"sentence": "Dùng bút.", "translation": "用筆。"}, "usage_note": "口語多用 Dùng。", "image_file": "use.png" },
        { "id": "v-38", "term_zh": "變成", "related_terms": [{ "term_target": "trở thành", "pronunciation": ["/tɕəː˧˩ tʰaɲ˨˩/"], "specific_note": "成為" }, { "term_target": "biến thành", "pronunciation": ["/ɓiən˧˥ tʰaɲ˨˩/"], "specific_note": "變成" }], "example": {"sentence": "Trở thành giáo viên.", "translation": "成為老師。"}, "usage_note": "變化。", "image_file": "become.png" },
        { "id": "v-39", "term_zh": "開始", "related_terms": [{ "term_target": "bắt đầu", "pronunciation": ["/ɓat̚˧˥ ɗəw˨˩/"], "specific_note": "" }], "example": {"sentence": "Bắt đầu làm.", "translation": "開始做。"}, "usage_note": "開始。", "image_file": "start.png" },
        { "id": "v-40", "term_zh": "結束", "related_terms": [{ "term_target": "kết thúc", "pronunciation": ["/ket̚˧˥ tʰuk͡p̚˧˥/"], "specific_note": "結束" }, { "term_target": "xong", "pronunciation": ["/sawŋ͡m˧/"], "specific_note": "完畢/好了" }], "example": {"sentence": "Làm xong.", "translation": "做完了。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-41", "term_zh": "停止", "related_terms": [{ "term_target": "dừng", "pronunciation": ["/zɨŋ˨˩/"], "specific_note": "" }, { "term_target": "dừng lại", "pronunciation": ["/zɨŋ˨˩ laːj˧˨ˀ/"], "specific_note": "停下來" }], "example": {"sentence": "Dừng xe.", "translation": "停車。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-42", "term_zh": "記住", "related_terms": [{ "term_target": "nhớ", "pronunciation": ["/ɲəː˧˥/"], "specific_note": "記得/想念" }, { "term_target": "ghi nhớ", "pronunciation": ["/ɣi˧ ɲəː˧˥/"], "specific_note": "牢記" }], "example": {"sentence": "Tôi nhớ bạn.", "translation": "我記得你 (或我想你)。"}, "usage_note": "記憶。", "image_file": "remember.png" },
        { "id": "v-43", "term_zh": "談話", "related_terms": [{ "term_target": "nói chuyện", "pronunciation": ["/nɔj˧˥ tɕwiən˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Nói chuyện với tôi.", "translation": "跟我說話。"}, "usage_note": "交談。", "image_file": "talk.png" },
        { "id": "v-44", "term_zh": "見面", "related_terms": [{ "term_target": "gặp", "pronunciation": ["/ɣap̚˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Gặp bạn bè.", "translation": "見朋友。"}, "usage_note": "會面。", "image_file": "meet.png" },
        { "id": "v-45", "term_zh": "乘坐（工具）", "related_terms": [{ "term_target": "đi", "pronunciation": ["/ɗi˧/"], "specific_note": "去/搭乘" }, { "term_target": "bắt", "pronunciation": ["/ɓat̚˧˥/"], "specific_note": "抓/搭(車)" }], "example": {"sentence": "Đi xe buýt.", "translation": "搭公車。"}, "usage_note": "搭乘。", "image_file": "take.png" },
        { "id": "v-46", "term_zh": "放", "related_terms": [{ "term_target": "đặt", "pronunciation": ["/ɗat̚˧˨ˀ/"], "specific_note": "放置/預定" }, { "term_target": "để", "pronunciation": ["/ɗe˧˩/"], "specific_note": "放/讓" }], "example": {"sentence": "Để ở đây.", "translation": "放這裡。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-47", "term_zh": "吃", "related_terms": [{ "term_target": "ăn", "pronunciation": ["/an˧/"], "specific_note": "" }], "example": {"sentence": "Ăn cơm.", "translation": "吃飯。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-48", "term_zh": "睡覺", "related_terms": [{ "term_target": "ngủ", "pronunciation": ["/ŋu˧˩/"], "specific_note": "" }], "example": {"sentence": "Đi ngủ.", "translation": "去睡覺。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-49", "term_zh": "寄送", "related_terms": [{ "term_target": "gửi", "pronunciation": ["/ɣɨj˧˩/"], "specific_note": "" }], "example": {"sentence": "Gửi thư.", "translation": "寄信。"}, "usage_note": "傳送。", "image_file": "send.png" },
        { "id": "v-50", "term_zh": "開車", "related_terms": [{ "term_target": "lái xe", "pronunciation": ["/laːj˧˥ sɛ˧/"], "specific_note": "" }], "example": {"sentence": "Lái xe đi làm.", "translation": "開車上班。"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-51", "term_zh": "讀書", "related_terms": [{ "term_target": "học", "pronunciation": ["/hawk͡p̚˧˨ˀ/"], "specific_note": "學習" }, { "term_target": "đọc sách", "pronunciation": ["/ɗawk͡p̚˧˨ˀ sajc̚˧˥/"], "specific_note": "閱讀書籍" }], "example": {"sentence": "Học tiếng Việt.", "translation": "學越南語。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-52", "term_zh": "回去", "related_terms": [{ "term_target": "về", "pronunciation": ["/ve˨˩/"], "specific_note": "" }, { "term_target": "quay lại", "pronunciation": ["/kwaj˧ laːj˧˨ˀ/"], "specific_note": "返回" }], "example": {"sentence": "Về nhà.", "translation": "回家。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "tốt", "pronunciation": ["/tot̚˧˥/"], "specific_note": "" }], "example": {"sentence": "Người tốt.", "translation": "好人。"}, "usage_note": "正面。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "xấu", "pronunciation": ["/səw˧˥/"], "specific_note": "" }], "example": {"sentence": "Người xấu.", "translation": "壞人。"}, "usage_note": "負面。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "mới", "pronunciation": ["/məːj˧˥/"], "specific_note": "" }], "example": {"sentence": "Sách mới.", "translation": "新書。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "đầu tiên", "pronunciation": ["/ɗəw˨˩ tiən˧/"], "specific_note": "首先" }, { "term_target": "thứ nhất", "pronunciation": ["/tʰɨ˧˥ ɲət̚˧˥/"], "specific_note": "第一" }], "example": {"sentence": "Ngày đầu tiên.", "translation": "第一天。"}, "usage_note": "順序。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "trước", "pronunciation": ["/tɕɨək̚˧˥/"], "specific_note": "之前/上一個" }], "example": {"sentence": "Tuần trước.", "translation": "上週。"}, "usage_note": "過去的。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "sau", "pronunciation": ["/saw˧/"], "specific_note": "之後" }, { "term_target": "tiếp theo", "pronunciation": ["/tiəp̚˧˥ tʰɛw˧/"], "specific_note": "接續" }], "example": {"sentence": "Tuần sau.", "translation": "下週。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "dài", "pronunciation": ["/zaːj˨˩/"], "specific_note": "" }], "example": {"sentence": "Tóc dài.", "translation": "長髮。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "to", "pronunciation": ["/tɔ˧/"], "specific_note": "大(口語)" }, { "term_target": "lớn", "pronunciation": ["/ləːn˧˥/"], "specific_note": "大(正式/長大)" }], "example": {"sentence": "Nhà to.", "translation": "大房子。"}, "usage_note": "體積大。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "nhỏ", "pronunciation": ["/ɲɔ˧˩/"], "specific_note": "小" }, { "term_target": "bé", "pronunciation": ["/ɓɛ˧˥/"], "specific_note": "小/幼小" }], "example": {"sentence": "Con mèo nhỏ.", "translation": "小貓。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "nhiều", "pronunciation": ["/ɲiəw˨˩/"], "specific_note": "" }], "example": {"sentence": "Nhiều người.", "translation": "很多人。"}, "usage_note": "數量多。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "cao", "pronunciation": ["/kaːw˧/"], "specific_note": "" }], "example": {"sentence": "Nhà cao.", "translation": "高樓。"}, "usage_note": "高度。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "trẻ", "pronunciation": ["/tɕɛ˧˩/"], "specific_note": "" }], "example": {"sentence": "Người trẻ.", "translation": "年輕人。"}, "usage_note": "年紀小。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的", "related_terms": [{ "term_target": "già", "pronunciation": ["/zaː˨˩/"], "specific_note": "人" }, { "term_target": "cũ", "pronunciation": ["/ku˧ˀ˥/"], "specific_note": "物" }], "example": {"sentence": "Người già.", "translation": "老人。"}, "usage_note": "區分人與物。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "gần", "pronunciation": ["/ɣən˨˩/"], "specific_note": "" }], "example": {"sentence": "Gần nhà.", "translation": "離家近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "xa", "pronunciation": ["/saː˧/"], "specific_note": "" }], "example": {"sentence": "Xa nhà.", "translation": "離家遠。"}, "usage_note": "距離遠。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "nhanh", "pronunciation": ["/ɲaɲ˧/"], "specific_note": "" }], "example": {"sentence": "Đi nhanh.", "translation": "走快點。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "chậm", "pronunciation": ["/tɕəm˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Đi chậm.", "translation": "走得慢。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "nóng", "pronunciation": ["/nawŋ͡m˧˥/"], "specific_note": "" }], "example": {"sentence": "Trời nóng.", "translation": "天熱。"}, "usage_note": "高溫。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "lạnh", "pronunciation": ["/lajŋ̟˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Trời lạnh.", "translation": "天冷。"}, "usage_note": "低溫。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "sạch", "pronunciation": ["/sac̚˧˨ˀ/"], "specific_note": "" }, { "term_target": "sạch sẽ", "pronunciation": ["/sac̚˧˨ˀ sɛ˧ˀ˥/"], "specific_note": "乾淨(強調)" }], "example": {"sentence": "Nhà sạch.", "translation": "乾淨的房子。"}, "usage_note": "無髒汙。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "bẩn", "pronunciation": ["/ɓən˧˩/"], "specific_note": "北越常用" }, { "term_target": "dơ", "pronunciation": ["/zəː˧/"], "specific_note": "南越常用" }], "example": {"sentence": "Tay bẩn.", "translation": "手很髒。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "dễ", "pronunciation": ["/ze˧ˀ˥/"], "specific_note": "" }], "example": {"sentence": "Bài tập dễ.", "translation": "作業簡單。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "khó", "pronunciation": ["/xɔ˧˥/"], "specific_note": "" }], "example": {"sentence": "Việc khó.", "translation": "困難的工作。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "đúng", "pronunciation": ["/ɗuŋ͡m˧˥/"], "specific_note": "" }], "example": {"sentence": "Làm đúng.", "translation": "做對了。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "sai", "pronunciation": ["/saːj˧/"], "specific_note": "" }], "example": {"sentence": "Làm sai.", "translation": "做錯了。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "quan trọng", "pronunciation": ["/kwaːn˧ tɕawŋ͡m˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Người quan trọng.", "translation": "重要的人。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "khác", "pronunciation": ["/xalːk̚˧˥/"], "specific_note": "" }, { "term_target": "khác nhau", "pronunciation": ["/xalːk̚˧˥ ɲaw˧/"], "specific_note": "互相不同" }], "example": {"sentence": "Người khác.", "translation": "別人(不同的人)。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "thật", "pronunciation": ["/tʰət̚˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Sự thật.", "translation": "事實。"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "thú vị", "pronunciation": ["/tʰu˧˥ vi˧˨ˀ/"], "specific_note": "有意思" }, { "term_target": "hay", "pronunciation": ["/haj˧/"], "specific_note": "好/有趣(電影/書)" }], "example": {"sentence": "Phim hay.", "translation": "好看的電影。"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "đẹp", "pronunciation": ["/ɗɛp̚˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Hoa đẹp.", "translation": "美麗的花。"}, "usage_note": "漂亮。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "rẻ", "pronunciation": ["/zɛ˧˩/"], "specific_note": "" }], "example": {"sentence": "Giá rẻ.", "translation": "價格便宜。"}, "usage_note": "價格低。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "đắt", "pronunciation": ["/ɗat̚˧˥/"], "specific_note": "北越常用" }, { "term_target": "mắc", "pronunciation": ["/mak̚˧˥/"], "specific_note": "南越常用" }], "example": {"sentence": "Quá đắt.", "translation": "太貴了。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "đói", "pronunciation": ["/ɗɔj˧˥/"], "specific_note": "" }, { "term_target": "đói bụng", "pronunciation": ["/ɗɔj˧˥ ɓuŋ͡m˧˨ˀ/"], "specific_note": "肚子餓" }], "example": {"sentence": "Tôi đói.", "translation": "我餓了。"}, "usage_note": "餓。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "mệt", "pronunciation": ["/met̚˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Tôi mệt.", "translation": "我累了。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "bận", "pronunciation": ["/ɓən˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Tôi bận.", "translation": "我很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "vui", "pronunciation": ["/vuj˧/"], "specific_note": "開心" }, { "term_target": "hạnh phúc", "pronunciation": ["/hajŋ̟˧˨ˀ fuk͡p̚˧˥/"], "specific_note": "幸福/快樂" }], "example": {"sentence": "Rất vui.", "translation": "很高興。"}, "usage_note": "心情。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "buồn", "pronunciation": ["/ɓuən˨˩/"], "specific_note": "" }], "example": {"sentence": "Tôi buồn.", "translation": "我難過。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "giống", "pronunciation": ["/zoŋ͡m˧˥/"], "specific_note": "像" }, { "term_target": "giống nhau", "pronunciation": ["/zoŋ͡m˧˥ ɲaw˧/"], "specific_note": "相像" }], "example": {"sentence": "Hai người giống nhau.", "translation": "兩個人很像。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "nổi tiếng", "pronunciation": ["/noj˧˩ tiəŋ˧˥/"], "specific_note": "" }], "example": {"sentence": "Người nổi tiếng.", "translation": "名人。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "nước ngoài", "pronunciation": ["/nɨək̚˧˥ ŋwaːj˨˩/"], "specific_note": "" }], "example": {"sentence": "Người nước ngoài.", "translation": "外國人。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "thông minh", "pronunciation": ["/tʰoŋ͡m˧ miɲ˧/"], "specific_note": "" }], "example": {"sentence": "Bé thông minh.", "translation": "聰明的孩子。"}, "usage_note": "腦袋好。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "nguy hiểm", "pronunciation": ["/ŋwi˧ hiəm˧˩/"], "specific_note": "" }], "example": {"sentence": "Rất nguy hiểm.", "translation": "很危險。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "tốt bụng", "pronunciation": ["/tot̚˧˥ ɓuŋ͡m˧˨ˀ/"], "specific_note": "好心" }, { "term_target": "hiền", "pronunciation": ["/hiən˨˩/"], "specific_note": "和善" }], "example": {"sentence": "Anh ấy tốt bụng.", "translation": "他心腸好。"}, "usage_note": "溫柔。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "tất cả", "pronunciation": ["/tət̚˧˥ kaː˧˩/"], "specific_note": "所有/全部" }, { "term_target": "mỗi", "pronunciation": ["/moj˧ˀ˥/"], "specific_note": "每一個" }], "example": {"sentence": "Tất cả mọi người.", "translation": "所有人。"}, "usage_note": "全部。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "yêu thích", "pronunciation": ["/iəw˧ tʰic̚˧˥/"], "specific_note": "" }], "example": {"sentence": "Món ăn yêu thích.", "translation": "喜愛的食物。"}, "usage_note": "中意。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "ngon", "pronunciation": ["/ŋɔn˧/"], "specific_note": "" }], "example": {"sentence": "Món này ngon.", "translation": "這道菜好吃。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "thời gian", "pronunciation": ["/tʰəːj˨˩ zaːn˧/"], "specific_note": "時間(抽象)" }, { "term_target": "giờ", "pronunciation": ["/zəː˨˩/"], "specific_note": "小時/點鐘" }], "example": {"sentence": "Có thời gian không?", "translation": "有時間嗎？"}, "usage_note": "時刻/時間。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "người", "pronunciation": ["/ŋɨəj˨˩/"], "specific_note": "人" }, { "term_target": "mọi người", "pronunciation": ["/mɔj˧˨ˀ ŋɨəj˨˩/"], "specific_note": "大家/人們" }], "example": {"sentence": "Nhiều người.", "translation": "很多人。"}, "usage_note": "泛指人。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "tiền", "pronunciation": ["/tiən˨˩/"], "specific_note": "" }], "example": {"sentence": "Không có tiền.", "translation": "沒錢。"}, "usage_note": "不可數。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "trẻ em", "pronunciation": ["/tɕɛ˧˩ ɛm˧/"], "specific_note": "兒童" }, { "term_target": "con", "pronunciation": ["/kɔn˧/"], "specific_note": "孩子(子女)" }], "example": {"sentence": "Trẻ em đang chơi.", "translation": "小孩在玩。"}, "usage_note": "兒童。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "nước", "pronunciation": ["/nɨək̚˧˥/"], "specific_note": "" }], "example": {"sentence": "Uống nước.", "translation": "喝水。"}, "usage_note": "不可數。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "đồ ăn", "pronunciation": ["/ɗo˨˩ an˧/"], "specific_note": "" }, { "term_target": "thức ăn", "pronunciation": ["/tʰɨk̚˧˥ an˧/"], "specific_note": "" }], "example": {"sentence": "Đồ ăn ngon.", "translation": "好吃的食物。"}, "usage_note": "吃的東西。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "bạn", "pronunciation": ["/ɓaːn˧˨ˀ/"], "specific_note": "" }, { "term_target": "bạn bè", "pronunciation": ["/ɓaːn˧˨ˀ ɓɛ˨˩/"], "specific_note": "朋友們" }], "example": {"sentence": "Bạn của tôi.", "translation": "我朋友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "gia đình", "pronunciation": ["/zaː˧ ɗiɲ˨˩/"], "specific_note": "" }], "example": {"sentence": "Gia đình tôi.", "translation": "我家(人)。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "học sinh", "pronunciation": ["/hawk͡p̚˧˨ˀ siɲ˧/"], "specific_note": "中小學生" }, { "term_target": "sinh viên", "pronunciation": ["/siɲ˧ viən˧/"], "specific_note": "大學生" }], "example": {"sentence": "Tôi là học sinh.", "translation": "我是學生。"}, "usage_note": "在學者。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "văn hóa", "pronunciation": ["/van˧ hwaː˧˥/"], "specific_note": "" }], "example": {"sentence": "Văn hóa Việt Nam.", "translation": "越南文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "vấn đề", "pronunciation": ["/vən˧˥ ɗe˨˩/"], "specific_note": "議題/麻煩" }, { "term_target": "câu hỏi", "pronunciation": ["/kəw˧ hɔj˧˩/"], "specific_note": "提問" }], "example": {"sentence": "Không có vấn đề.", "translation": "沒問題。"}, "usage_note": "難題。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "công ty", "pronunciation": ["/koŋ͡m˧ ti˧/"], "specific_note": "" }], "example": {"sentence": "Đi đến công ty.", "translation": "去公司。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "nam", "pronunciation": ["/naːm˧/"], "specific_note": "性別" }, { "term_target": "đàn ông", "pronunciation": ["/ɗaːn˨˩ oŋ͡m˧/"], "specific_note": "男人" }], "example": {"sentence": "Nhà vệ sinh nam.", "translation": "男廁。"}, "usage_note": "性別。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "nữ", "pronunciation": ["/nɨ˧ˀ˥/"], "specific_note": "性別" }, { "term_target": "phụ nữ", "pronunciation": ["/fu˧˨ˀ nɨ˧ˀ˥/"], "specific_note": "婦女" }], "example": {"sentence": "Nhà vệ sinh nữ.", "translation": "女廁。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "trường học", "pronunciation": ["/tɕɨəŋ˨˩ hawk͡p̚˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Đi trường học.", "translation": "去學校。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "giáo viên", "pronunciation": ["/zaːw˧˥ viən˧/"], "specific_note": "教師(職業)" }, { "term_target": "thầy / cô", "pronunciation": ["/tʰəj˨˩/  /ko˧/"], "specific_note": "稱呼(男/女)" }], "example": {"sentence": "Chào thầy.", "translation": "老師好(男)。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "phim", "pronunciation": ["/fiːm˧/"], "specific_note": "" }], "example": {"sentence": "Xem phim.", "translation": "看電影。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "điện thoại", "pronunciation": ["/ɗiən˧˨ˀ tʰwaːj˧˨ˀ/"], "specific_note": "電話/手機" }], "example": {"sentence": "Điện thoại của tôi.", "translation": "我手機。"}, "usage_note": "電話。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "máy tính", "pronunciation": ["/maːj˧˥ tiŋ˧˥/"], "specific_note": "" }], "example": {"sentence": "Dùng máy tính.", "translation": "用電腦。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "xe", "pronunciation": ["/sɛ˧/"], "specific_note": "車(泛指)" }, { "term_target": "ô tô", "pronunciation": ["/o˧ to˧/"], "specific_note": "汽車" }], "example": {"sentence": "Lái xe.", "translation": "開車。"}, "usage_note": "汽車。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "chợ", "pronunciation": ["/tɕə˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Đi chợ.", "translation": "去市場。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "quần áo", "pronunciation": ["/kwən˨˩ aːw˧˥/"], "specific_note": "" }], "example": {"sentence": "Mua quần áo.", "translation": "買衣服。"}, "usage_note": "衣物。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "cửa hàng", "pronunciation": ["/kɨə˧˩ haːŋ˨˩/"], "specific_note": "" }], "example": {"sentence": "Vào cửa hàng.", "translation": "進店裡。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "xe buýt", "pronunciation": ["/sɛ˧ ɓwit̚˧˥/"], "specific_note": "" }], "example": {"sentence": "Đi xe buýt.", "translation": "搭公車。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "đường", "pronunciation": ["/ɗɨəŋ˨˩/"], "specific_note": "" }, { "term_target": "phố", "pronunciation": ["/fo˧˥/"], "specific_note": "街" }], "example": {"sentence": "Trên đường.", "translation": "在路上。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "nhà", "pronunciation": ["/ɲaː˨˩/"], "specific_note": "" }], "example": {"sentence": "Về nhà.", "translation": "回家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "mẹ", "pronunciation": ["/mɛ˧˨ˀ/"], "specific_note": "北越常用" }, { "term_target": "má", "pronunciation": ["/maː˧˥/"], "specific_note": "南越常用" }], "example": {"sentence": "Mẹ tôi.", "translation": "我媽媽。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "bố", "pronunciation": ["/ɓo˧˥/"], "specific_note": "北越常用" }, { "term_target": "ba", "pronunciation": ["/ɓaː˧/"], "specific_note": "南越常用" }], "example": {"sentence": "Bố tôi.", "translation": "我爸爸。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "anh trai", "pronunciation": ["/aɲ˧ tɕaːj˧/"], "specific_note": "哥哥" }, { "term_target": "em trai", "pronunciation": ["/ɛm˧ tɕaːj˧/"], "specific_note": "弟弟" }], "example": {"sentence": "Anh trai tôi.", "translation": "我哥哥。"}, "usage_note": "兄弟。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "chị gái", "pronunciation": ["/tɕi˧˨ˀ ɣaːj˧˥/"], "specific_note": "姊姊" }, { "term_target": "em gái", "pronunciation": ["/ɛm˧ ɣaːj˧˥/"], "specific_note": "妹妹" }], "example": {"sentence": "Chị gái tôi.", "translation": "我姊姊。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "tiếng Trung", "pronunciation": ["/tiəŋ˧˥ tɕuŋ͡m˧/"], "specific_note": "" }, { "term_target": "tiếng Hoa", "pronunciation": ["/tiəŋ˧˥ hwaː˧/"], "specific_note": "南越常用" }], "example": {"sentence": "Nói tiếng Trung.", "translation": "說中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "buổi sáng", "pronunciation": ["/ɓuəj˧˩ saːŋ˧˥/"], "specific_note": "" }], "example": {"sentence": "Vào buổi sáng.", "translation": "在早晨。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "buổi tối", "pronunciation": ["/ɓuəj˧˩ toj˧˥/"], "specific_note": "晚上" }, { "term_target": "đêm", "pronunciation": ["/ɗem˧/"], "specific_note": "深夜" }], "example": {"sentence": "Chào buổi tối.", "translation": "晚安(問候)。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "vé", "pronunciation": ["/vɛ˧˥/"], "specific_note": "" }], "example": {"sentence": "Một vé.", "translation": "一張票。"}, "usage_note": "票。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "túi", "pronunciation": ["/tuj˧˥/"], "specific_note": "袋子/包" }, { "term_target": "cặp", "pronunciation": ["/kap̚˧˨ˀ/"], "specific_note": "書包/公事包" }], "example": {"sentence": "Túi xách.", "translation": "手提包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "cốc", "pronunciation": ["/kəwk͡p̚˧˥/"], "specific_note": "北越常用" }, { "term_target": "ly", "pronunciation": ["/li˧/"], "specific_note": "南越常用" }], "example": {"sentence": "Cốc nước.", "translation": "一杯水。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "bác sĩ", "pronunciation": ["/ɓaːk̚˧˥ si˧ˀ˥/"], "specific_note": "" }], "example": {"sentence": "Gặp bác sĩ.", "translation": "看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "cảnh sát", "pronunciation": ["/kajŋ̟˧˩ saːt̚˧˥/"], "specific_note": "" }, { "term_target": "công an", "pronunciation": ["/koŋ͡m˧ aːn˧/"], "specific_note": "公安" }], "example": {"sentence": "Gọi cảnh sát.", "translation": "叫警察。"}, "usage_note": "警察。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "bệnh viện", "pronunciation": ["/ɓejŋ̟˧˨ˀ viən˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Đi bệnh viện.", "translation": "去醫院。"}, "usage_note": "醫療院所。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "chỗ ngồi", "pronunciation": ["/tɕo˧ˀ˥ ŋoj˨˩/"], "specific_note": "" }, { "term_target": "ghế", "pronunciation": ["/ɣe˧˥/"], "specific_note": "椅子" }], "example": {"sentence": "Có chỗ ngồi không?", "translation": "有位子嗎？"}, "usage_note": "位子。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "cửa", "pronunciation": ["/kɨə˧˩/"], "specific_note": "" }], "example": {"sentence": "Mở cửa.", "translation": "開門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "phòng", "pronunciation": ["/fawŋ͡m˨˩/"], "specific_note": "" }], "example": {"sentence": "Phòng của tôi.", "translation": "我房間。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "ga", "pronunciation": ["/ɣaː˧/"], "specific_note": "火車站" }, { "term_target": "bến xe", "pronunciation": ["/ɓen˧˥ sɛ˧/"], "specific_note": "公車站" }], "example": {"sentence": "Ga tàu hỏa.", "translation": "火車站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "tàu điện ngầm", "pronunciation": ["/taːw˨˩ ɗiən˧˨ˀ ŋəm˨˩/"], "specific_note": "" }], "example": {"sentence": "Ga tàu điện ngầm.", "translation": "地鐵站。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "tàu hỏa", "pronunciation": ["/taːw˨˩ hwaː˧˩/"], "specific_note": "" }, { "term_target": "xe lửa", "pronunciation": ["/sɛ˧ lɨə˧˩/"], "specific_note": "南越常用" }], "example": {"sentence": "Đi tàu hỏa.", "translation": "搭火車。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "sân bay", "pronunciation": ["/sən˧ ɓaj˧/"], "specific_note": "" }], "example": {"sentence": "Đi sân bay.", "translation": "去機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "hành lý", "pronunciation": ["/haɲ˨˩ li˧˥/"], "specific_note": "" }], "example": {"sentence": "Nhiều hành lý.", "translation": "很多行李。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "bản đồ", "pronunciation": ["/ɓaːn˧˩ ɗo˨˩/"], "specific_note": "" }], "example": {"sentence": "Xem bản đồ.", "translation": "看地圖。"}, "usage_note": "指引。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "quầy", "pronunciation": ["/kwəj˨˩/"], "specific_note": "" }], "example": {"sentence": "Tại quầy.", "translation": "在櫃檯。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "sảnh", "pronunciation": ["/sajŋ̟˧˩/"], "specific_note": "" }], "example": {"sentence": "Đợi ở sảnh.", "translation": "在大廳等。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "đặt trước", "pronunciation": ["/ɗat̚˧˨ˀ tɕɨək̚˧˥/"], "specific_note": "" }], "example": {"sentence": "Tôi đã đặt trước.", "translation": "我預約了。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "nhận phòng", "pronunciation": ["/ɲən˧˨ˀ fawŋ͡m˨˩/"], "specific_note": "領房" }, { "term_target": "check-in", "pronunciation": ["/tʃek in/"], "specific_note": "借詞" }], "example": {"sentence": "Tôi muốn nhận phòng.", "translation": "我要辦理入住。"}, "usage_note": "Check-in。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "trả phòng", "pronunciation": ["/tɕaː˧˩ fawŋ͡m˨˩/"], "specific_note": "還房" }, { "term_target": "check-out", "pronunciation": ["/tʃek aut/"], "specific_note": "借詞" }], "example": {"sentence": "Giờ trả phòng.", "translation": "退房時間。"}, "usage_note": "Check-out。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "đồ uống", "pronunciation": ["/ɗo˨˩ uəŋ˧˥/"], "specific_note": "" }], "example": {"sentence": "Đồ uống gì?", "translation": "什麼飲料？"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "thực đơn", "pronunciation": ["/tʰɨk̚˧˨ˀ ɗəːn˧/"], "specific_note": "" }, { "term_target": "menu", "pronunciation": ["/me nu/"], "specific_note": "借詞" }], "example": {"sentence": "Cho tôi thực đơn.", "translation": "請給菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "bữa trưa", "pronunciation": ["/ɓɨə˧ˀ˥ tɕɨə˧/"], "specific_note": "" }], "example": {"sentence": "Ăn bữa trưa.", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "bữa tối", "pronunciation": ["/ɓɨə˧ˀ˥ toj˧˥/"], "specific_note": "" }], "example": {"sentence": "Ăn bữa tối.", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "hóa đơn", "pronunciation": ["/hwaː˧˥ ɗəːn˧/"], "specific_note": "發票/單據" }, { "term_target": "tính tiền", "pronunciation": ["/tiɲ˧˥ tiən˨˩/"], "specific_note": "算錢(口語)" }], "example": {"sentence": "Tính tiền nhé.", "translation": "結帳喔。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "giá", "pronunciation": ["/zaː˧˥/"], "specific_note": "" }, { "term_target": "giá tiền", "pronunciation": ["/zaː˧˥ tiən˨˩/"], "specific_note": "" }], "example": {"sentence": "Giá bao nhiêu?", "translation": "價格多少？"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "biên lai", "pronunciation": ["/ɓiən˧ laːj˧/"], "specific_note": "" }], "example": {"sentence": "Cho tôi biên lai.", "translation": "請給收據。"}, "usage_note": "證明。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "cỡ", "pronunciation": ["/kəː˧ˀ˥/"], "specific_note": "" }, { "term_target": "size", "pronunciation": ["/saj/"], "specific_note": "借詞" }], "example": {"sentence": "Cỡ lớn.", "translation": "大尺寸。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "lối vào", "pronunciation": ["/loj˧˥ vaːw˨˩/"], "specific_note": "" }], "example": {"sentence": "Lối vào ở đâu?", "translation": "入口在哪？"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "lối ra", "pronunciation": ["/loj˧˥ zaː˧/"], "specific_note": "" }], "example": {"sentence": "Lối ra ở kia.", "translation": "出口在那。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "Đài Loan", "pronunciation": ["/ɗaːj˨˩ lwaːn˧/"], "specific_note": "" }], "example": {"sentence": "Tôi yêu Đài Loan.", "translation": "我愛台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "台灣人", "related_terms": [{ "term_target": "người Đài Loan", "pronunciation": ["/ŋɨəj˨˩ ɗaːj˨˩ lwaːn˧/"], "specific_note": "" }], "example": {"sentence": "Tôi là người Đài Loan.", "translation": "我是台灣人。"}, "usage_note": "國籍。", "image_file": "taiwanese.png" },
        { "id": "n-66", "term_zh": "一切事物", "related_terms": [{ "term_target": "tất cả", "pronunciation": ["/tət̚˧˥ kaː˧˩/"], "specific_note": "全部" }, { "term_target": "mọi thứ", "pronunciation": ["/mɔj˧˨ˀ tʰɨ˧˥/"], "specific_note": "每件事物" }], "example": {"sentence": "Thích tất cả.", "translation": "全部喜歡。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-67", "term_zh": "錢包", "related_terms": [{ "term_target": "ví", "pronunciation": ["/vi˧˥/"], "specific_note": "北越常用" }, { "term_target": "bóp", "pronunciation": ["/ɓɔp̚˧˥/"], "specific_note": "南越常用" }], "example": {"sentence": "Quên ví.", "translation": "忘了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-68", "term_zh": "身分證", "related_terms": [{ "term_target": "chứng minh thư", "pronunciation": ["/tɕɨŋ˧˥ miɲ˧ tʰɨ˧/"], "specific_note": "舊稱" }, { "term_target": "căn cước công dân", "pronunciation": ["/kan˧ kɨək̚˧˥ koŋ͡m˧ zən˧/"], "specific_note": "現稱(CCCD)" }], "example": {"sentence": "Xem chứng minh thư.", "translation": "出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-69", "term_zh": "護照", "related_terms": [{ "term_target": "hộ chiếu", "pronunciation": ["/ho˧˨ˀ tɕiəw˧˥/"], "specific_note": "" }], "example": {"sentence": "Hộ chiếu của bạn.", "translation": "你的護照。"}, "usage_note": "出國必備。", "image_file": "passport.png" },
        { "id": "n-70", "term_zh": "餐廳", "related_terms": [{ "term_target": "nhà hàng", "pronunciation": ["/ɲaː˨˩ haːŋ˨˩/"], "specific_note": "較正式" }, { "term_target": "quán ăn", "pronunciation": ["/kwaːn˧˥ an˧/"], "specific_note": "小吃店" }], "example": {"sentence": "Nhà hàng ngon.", "translation": "好的餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-71", "term_zh": "飯店", "related_terms": [{ "term_target": "khách sạn", "pronunciation": ["/xajc̚˧˥ saːn˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Đặt khách sạn.", "translation": "訂飯店。"}, "usage_note": "住宿。", "image_file": "hotel.png" },
        { "id": "n-72", "term_zh": "場所", "related_terms": [{ "term_target": "địa điểm", "pronunciation": ["/ɗiə˧˨ˀ ɗiəm˧˩/"], "specific_note": "地點" }, { "term_target": "nơi", "pronunciation": ["/nəːj˧/"], "specific_note": "地方" }], "example": {"sentence": "Địa điểm đẹp.", "translation": "好地方。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-73", "term_zh": "用品店員", "related_terms": [{ "term_target": "nhân viên", "pronunciation": ["/ɲən˧ viən˧/"], "specific_note": "" }], "example": {"sentence": "Hỏi nhân viên.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-74", "term_zh": "超市", "related_terms": [{ "term_target": "siêu thị", "pronunciation": ["/siəw˧ tʰi˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Đi siêu thị.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-75", "term_zh": "月台", "related_terms": [{ "term_target": "sân ga", "pronunciation": ["/sən˧ ɣaː˧/"], "specific_note": "" }], "example": {"sentence": "Đợi ở sân ga.", "translation": "在月台等。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "bây giờ", "pronunciation": ["/ɓəj˧ zəː˨˩/"], "specific_note": "" }], "example": {"sentence": "Bây giờ đi.", "translation": "現在去。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "rất", "pronunciation": ["/zət̚˧˥/"], "specific_note": "很" }, { "term_target": "lắm", "pronunciation": ["/lam˧˥/"], "specific_note": "置於形容詞後" }], "example": {"sentence": "Rất ngon.", "translation": "非常好吃。"}, "usage_note": "Rất 放前，Lắm 放後。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "thật sự", "pronunciation": ["/tʰət̚˧˨ˀ sɨ˧˨ˀ/"], "specific_note": "真實地" }, { "term_target": "thật", "pronunciation": ["/tʰət̚˧˨ˀ/"], "specific_note": "真的" }], "example": {"sentence": "Thật à?", "translation": "真的嗎？"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "tốt", "pronunciation": ["/tot̚˧˥/"], "specific_note": "" }, { "term_target": "giỏi", "pronunciation": ["/zɔj˧˩/"], "specific_note": "優秀/棒" }], "example": {"sentence": "Làm tốt lắm.", "translation": "做得很好。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "thường", "pronunciation": ["/tʰɨəŋ˨˩/"], "specific_note": "" }, { "term_target": "hay", "pronunciation": ["/haj˧/"], "specific_note": "常" }], "example": {"sentence": "Tôi thường đi.", "translation": "我常去。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "thường thường", "pronunciation": ["/tʰɨəŋ˨˩ tʰɨəŋ˨˩/"], "specific_note": "" }], "example": {"sentence": "Thường thường là vậy.", "translation": "通常是那樣。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "đã", "pronunciation": ["/ɗaː˧ˀ˥/"], "specific_note": "置於動詞前" }, { "term_target": "rồi", "pronunciation": ["/zoj˨˩/"], "specific_note": "置於句尾" }], "example": {"sentence": "Ăn rồi.", "translation": "吃過了。"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "chỉ", "pronunciation": ["/tɕi˧˩/"], "specific_note": "" }], "example": {"sentence": "Chỉ có một.", "translation": "只有一個。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "lại", "pronunciation": ["/laːj˧˨ˀ/"], "specific_note": "" }, { "term_target": "nữa", "pronunciation": ["/nɨə˧ˀ˥/"], "specific_note": "再/又" }], "example": {"sentence": "Gặp lại.", "translation": "再見面。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "khoảng", "pronunciation": ["/xwaːŋ˧˩/"], "specific_note": "" }], "example": {"sentence": "Khoảng 10 phút.", "translation": "大約10分鐘。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "một chút", "pronunciation": ["/mot̚˧˨ˀ tɕut̚˧˥/"], "specific_note": "" }, { "term_target": "hơi", "pronunciation": ["/həːj˧/"], "specific_note": "有點(形容詞前)" }], "example": {"sentence": "Hơi cay.", "translation": "有點辣。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "cũng", "pronunciation": ["/kuŋ͡m˧ˀ˥/"], "specific_note": "" }], "example": {"sentence": "Tôi cũng vậy.", "translation": "我也是。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "có lẽ", "pronunciation": ["/kɔ˧˥ lɛ˧ˀ˥/"], "specific_note": "" }], "example": {"sentence": "Có lẽ đúng.", "translation": "也許是對的。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "sau", "pronunciation": ["/saw˧/"], "specific_note": "" }, { "term_target": "sau đó", "pronunciation": ["/saw˧ ɗɔ˧˥/"], "specific_note": "那之後" }], "example": {"sentence": "Gặp lại sau.", "translation": "待會見。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "sớm", "pronunciation": ["/səːm˧˥/"], "specific_note": "早/快" }, { "term_target": "nhanh", "pronunciation": ["/ɲaɲ˧/"], "specific_note": "快速" }], "example": {"sentence": "Đến sớm.", "translation": "早點到。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "cùng nhau", "pronunciation": ["/kuŋ˨˩ ɲaw˧/"], "specific_note": "" }], "example": {"sentence": "Đi cùng nhau.", "translation": "一起去。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "vẫn", "pronunciation": ["/vən˧ˀ˥/"], "specific_note": "" }], "example": {"sentence": "Vẫn chưa.", "translation": "還沒。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "thông thường", "pronunciation": ["/tʰoŋ͡m˧ tʰɨəŋ˨˩/"], "specific_note": "" }], "example": {"sentence": "Thông thường là vậy.", "translation": "一般是那樣。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "ngay lập tức", "pronunciation": ["/ŋaj˧ ləp̚˧˨ˀ tɨk̚˧˥/"], "specific_note": "" }, { "term_target": "ngay", "pronunciation": ["/ŋaj˧/"], "specific_note": "馬上" }], "example": {"sentence": "Làm ngay.", "translation": "馬上去做。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "cũng không", "pronunciation": ["/kuŋ͡m˧ˀ˥ xoŋ͡m˧/"], "specific_note": "" }], "example": {"sentence": "Tôi cũng không biết.", "translation": "我也不知道。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "cái gì", "pronunciation": ["/kaːj˧˥ zi˨˩/"], "specific_note": "名詞" }, { "term_target": "gì", "pronunciation": ["/zi˨˩/"], "specific_note": "後綴" }], "example": {"sentence": "Cái gì đây?", "translation": "這是什麼？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "như thế nào", "pronunciation": ["/ɲɨ˧ tʰe˧˥ naːw˨˩/"], "specific_note": "怎麼樣" }, { "term_target": "làm sao", "pronunciation": ["/laːm˨˩ saːw˧/"], "specific_note": "怎麼(做)" }], "example": {"sentence": "Đi như thế nào?", "translation": "怎麼去？"}, "usage_note": "問狀況。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "khi nào", "pronunciation": ["/xi˧ naːw˨˩/"], "specific_note": "未來/過去皆可" }, { "term_target": "bao giờ", "pronunciation": ["/ɓaːw˧ zəː˨˩/"], "specific_note": "何時" }], "example": {"sentence": "Khi nào đi?", "translation": "何時去？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "ở đâu", "pronunciation": ["/əː˧˩ ɗəw˧/"], "specific_note": "在哪" }, { "term_target": "đâu", "pronunciation": ["/ɗəw˧/"], "specific_note": "哪裡" }], "example": {"sentence": "Bạn ở đâu?", "translation": "你在哪裡？"}, "usage_note": "問地點。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "ai", "pronunciation": ["/aːj˧/"], "specific_note": "" }], "example": {"sentence": "Là ai?", "translation": "是誰？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "tại sao", "pronunciation": ["/taːj˧˨ˀ saːw˧/"], "specific_note": "正式" }, { "term_target": "sao", "pronunciation": ["/saːw˧/"], "specific_note": "口語" }], "example": {"sentence": "Tại sao?", "translation": "為什麼？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "cái nào", "pronunciation": ["/kaːj˧˥ naːw˨˩/"], "specific_note": "" }], "example": {"sentence": "Thích cái nào?", "translation": "喜歡哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "bao nhiêu", "pronunciation": ["/ɓaːw˧ ɲiəw˧/"], "specific_note": "多少(大於10)" }, { "term_target": "mấy", "pronunciation": ["/məj˧˥/"], "specific_note": "幾(小於10)" }], "example": {"sentence": "Bao nhiêu tiền?", "translation": "多少錢？"}, "usage_note": "問價格用 Bao nhiêu。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "bao lâu", "pronunciation": ["/ɓaːw˧ ləw˧/"], "specific_note": "" }], "example": {"sentence": "Mất bao lâu?", "translation": "要花多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "bây giờ", "pronunciation": ["/ɓəj˧ zəː˨˩/"], "specific_note": "" }], "example": {"sentence": "Bây giờ đi.", "translation": "現在去。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "hôm nay", "pronunciation": ["/hom˧ naj˧/"], "specific_note": "" }], "example": {"sentence": "Hôm nay nóng.", "translation": "今天很熱。"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "ngày mai", "pronunciation": ["/ŋaːj˨˩ maːj˧/"], "specific_note": "" }], "example": {"sentence": "Hẹn ngày mai.", "translation": "明天見。"}, "usage_note": "隔天。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "hôm qua", "pronunciation": ["/hom˧ kwaː˧/"], "specific_note": "" }], "example": {"sentence": "Hôm qua vui.", "translation": "昨天很開心。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "ở đây", "pronunciation": ["/əː˧˩ ɗəj˧/"], "specific_note": "" }, { "term_target": "đây", "pronunciation": ["/ɗəj˧/"], "specific_note": "" }], "example": {"sentence": "Đến đây.", "translation": "來這裡。"}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "ở đó", "pronunciation": ["/əː˧˩ ɗɔ˧˥/"], "specific_note": "中距離" }, { "term_target": "ở kia", "pronunciation": ["/əː˧˩ kiə˧/"], "specific_note": "遠距離" }], "example": {"sentence": "Đi ra đó.", "translation": "去那裡。"}, "usage_note": "遠處。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "ngày", "pronunciation": ["/ŋaːj˨˩/"], "specific_note": "" }], "example": {"sentence": "Một ngày.", "translation": "一天。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "năm", "pronunciation": ["/nam˧/"], "specific_note": "" }], "example": {"sentence": "Năm nay.", "translation": "今年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "tháng", "pronunciation": ["/tʰaːŋ˧˥/"], "specific_note": "" }], "example": {"sentence": "Tháng này.", "translation": "這個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "tuần", "pronunciation": ["/twən˨˩/"], "specific_note": "" }], "example": {"sentence": "Tuần sau.", "translation": "下週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "buổi sáng", "pronunciation": ["/ɓuəj˧˩ saːŋ˧˥/"], "specific_note": "" }], "example": {"sentence": "Ăn sáng.", "translation": "吃早餐。"}, "usage_note": "上午。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "buổi chiều", "pronunciation": ["/ɓuəj˧˩ tɕiəw˨˩/"], "specific_note": "" }], "example": {"sentence": "Hẹn buổi chiều.", "translation": "下午見。"}, "usage_note": "PM。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "buổi tối", "pronunciation": ["/ɓuəj˧˩ toj˧˥/"], "specific_note": "晚上" }, { "term_target": "đêm", "pronunciation": ["/ɗem˧/"], "specific_note": "深夜" }], "example": {"sentence": "Chào buổi tối.", "translation": "晚安(問候)。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "buổi trưa", "pronunciation": ["/ɓuəj˧˩ tɕɨə˧/"], "specific_note": "" }], "example": {"sentence": "Nghỉ trưa.", "translation": "午休。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "phía trước", "pronunciation": ["/fiə˧˥ tɕɨək̚˧˥/"], "specific_note": "" }], "example": {"sentence": "Đi phía trước.", "translation": "走前面。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "phía sau", "pronunciation": ["/fiə˧˥ saw˧/"], "specific_note": "" }], "example": {"sentence": "Ở phía sau.", "translation": "在後面。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "bên trái", "pronunciation": ["/ɓen˧ tɕaːj˧˥/"], "specific_note": "" }], "example": {"sentence": "Rẽ trái.", "translation": "左轉。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "bên phải", "pronunciation": ["/ɓen˧ faːj˧˩/"], "specific_note": "" }], "example": {"sentence": "Rẽ phải.", "translation": "右轉。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "bên cạnh", "pronunciation": ["/ɓen˧ kaɲ˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Ngồi bên cạnh.", "translation": "坐旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "đối diện", "pronunciation": ["/ɗoj˧˥ ziən˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Cửa hàng đối diện.", "translation": "對面商店。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "mùa xuân", "pronunciation": ["/muə˨˩ swən˧/"], "specific_note": "" }], "example": {"sentence": "Mùa xuân đẹp.", "translation": "春天很美。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "mùa hè", "pronunciation": ["/muə˨˩ hɛ˨˩/"], "specific_note": "" }], "example": {"sentence": "Mùa hè nóng.", "translation": "夏天很熱。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "mùa thu", "pronunciation": ["/muə˨˩ tʰu˧/"], "specific_note": "" }], "example": {"sentence": "Mùa thu mát.", "translation": "秋天涼爽。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "mùa đông", "pronunciation": ["/muə˨˩ ɗəwŋ͡m˧/"], "specific_note": "" }], "example": {"sentence": "Mùa đông lạnh.", "translation": "冬天很冷。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "không", "pronunciation": ["/xoŋ͡m˧/"], "specific_note": "" }], "example": {"sentence": "Số không.", "translation": "零。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "một", "pronunciation": ["/mot̚˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "Một cái.", "translation": "一個。"}, "usage_note": "一。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "hai", "pronunciation": ["/haːj˧/"], "specific_note": "" }], "example": {"sentence": "Hai người.", "translation": "兩個人。"}, "usage_note": "二。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "ba", "pronunciation": ["/ɓaː˧/"], "specific_note": "" }], "example": {"sentence": "Ba ngày.", "translation": "三天。"}, "usage_note": "三。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "bốn", "pronunciation": ["/ɓon˧˥/"], "specific_note": "" }], "example": {"sentence": "Bốn giờ.", "translation": "四點。"}, "usage_note": "四。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "năm", "pronunciation": ["/nam˧/"], "specific_note": "" }, { "term_target": "lăm", "pronunciation": ["/lam˧/"], "specific_note": "十位數後(如15)" }], "example": {"sentence": "Năm phút.", "translation": "五分鐘。"}, "usage_note": "15 是 mười lăm，不是 mười năm。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "sáu", "pronunciation": ["/saw˧˥/"], "specific_note": "" }], "example": {"sentence": "Sáu cái.", "translation": "六個。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "bảy", "pronunciation": ["/ɓəj˧˩/"], "specific_note": "" }], "example": {"sentence": "Bảy ngày.", "translation": "七天。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "tám", "pronunciation": ["/taːm˧˥/"], "specific_note": "" }], "example": {"sentence": "Tám tuổi.", "translation": "八歲。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "chín", "pronunciation": ["/tɕiːn˧˥/"], "specific_note": "" }], "example": {"sentence": "Chín giờ.", "translation": "九點。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "mười", "pronunciation": ["/mɨəj˨˩/"], "specific_note": "" }, { "term_target": "chục", "pronunciation": ["/tɕuk͡p̚˧˨ˀ/"], "specific_note": "口語/十個" }], "example": {"sentence": "Mười cái.", "translation": "十個。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "mười một", "pronunciation": ["/mɨəj˨˩ mot̚˧˨ˀ/"], "specific_note": "" }], "example": {"sentence": "11 giờ.", "translation": "11點。"}, "usage_note": "十一。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "mười hai", "pronunciation": ["/mɨəj˨˩ haːj˧/"], "specific_note": "" }], "example": {"sentence": "12 tháng.", "translation": "12個月。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "mười lăm", "pronunciation": ["/mɨəj˨˩ lam˧/"], "specific_note": "" }], "example": {"sentence": "15 phút.", "translation": "15分。"}, "usage_note": "注意 Lăm。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "hai mươi", "pronunciation": ["/haːj˧ mɨəj˧/"], "specific_note": "" }, { "term_target": "hai chục", "pronunciation": ["/haːj˧ tɕuk͡p̚˧˨ˀ/"], "specific_note": "口語" }], "example": {"sentence": "Hai mươi tuổi.", "translation": "20歲。"}, "usage_note": "二十。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "năm mươi", "pronunciation": ["/nam˧ mɨəj˧/"], "specific_note": "" }], "example": {"sentence": "Năm mươi phần trăm.", "translation": "50%。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "một trăm", "pronunciation": ["/mot̚˧˨ˀ tɕam˧/"], "specific_note": "" }], "example": {"sentence": "Một trăm điểm.", "translation": "一百分。"}, "usage_note": "百。", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "một nghìn", "pronunciation": ["/mot̚˧˨ˀ ŋiːn˨˩/"], "specific_note": "北越" }, { "term_target": "một ngàn", "pronunciation": ["/mot̚˧˨ˀ ŋaːn˨˩/"], "specific_note": "南越" }], "example": {"sentence": "Một nghìn đồng.", "translation": "一千元。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "mười nghìn", "pronunciation": ["/mɨəj˨˩ ŋiːn˨˩/"], "specific_note": "一萬" }, { "term_target": "một vạn", "pronunciation": ["/mot̚˧˨ˀ vaːn˧˨ˀ/"], "specific_note": "漢越詞/少用" }], "example": {"sentence": "Mười nghìn đồng.", "translation": "一萬元。"}, "usage_note": "越南文習慣說「十千」，不常說「萬」。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是/覺得～", "related_terms": [{ "term_target": "Tôi là ...", "pronunciation": ["/toj˧ laː˨˩/"], "specific_note": "是" }, { "term_target": "Tôi cảm thấy ...", "pronunciation": ["/toj˧ kaːm˧˩ tʰəj˧˥/"], "specific_note": "覺得" }], "example": {"sentence": "Tôi là học sinh.", "translation": "我是學生。"}, "usage_note": "本質/身分。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫～", "related_terms": [{ "term_target": "Tên tôi là ...", "pronunciation": ["/ten˧ toj˧ laː˨˩/"], "specific_note": "" }], "example": {"sentence": "Tên tôi là Nam.", "translation": "我的名字叫南。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做～", "related_terms": [{ "term_target": "Tôi làm ...", "pronunciation": ["/toj˧ laːm˨˩/"], "specific_note": "" }], "example": {"sentence": "Tôi làm bài tập.", "translation": "我做功課。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做～", "related_terms": [{ "term_target": "Tôi đang ...", "pronunciation": ["/toj˧ ɗaːŋ˧/"], "specific_note": "" }], "example": {"sentence": "Tôi đang ăn.", "translation": "我正在吃。"}, "usage_note": "進行式。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠～", "related_terms": [{ "term_target": "Tôi có thể ...", "pronunciation": ["/toj˧ kɔ˧˥ tʰe˧˩/"], "specific_note": "" }], "example": {"sentence": "Tôi có thể bơi.", "translation": "我會游泳。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做～", "related_terms": [{ "term_target": "Tôi thích ...", "pronunciation": ["/toj˧ tʰic̚˧˥/"], "specific_note": "" }], "example": {"sentence": "Tôi thích đọc sách.", "translation": "我喜歡閱讀。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經～", "related_terms": [{ "term_target": "Tôi đã ...", "pronunciation": ["/toj˧ ɗaː˧ˀ˥/"], "specific_note": "" }, { "term_target": "Tôi từng ...", "pronunciation": ["/toj˧ tɨŋ˨˩/"], "specific_note": "曾經" }], "example": {"sentence": "Tôi đã là sinh viên.", "translation": "我曾經是大學生。"}, "usage_note": "過去狀態。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過～", "related_terms": [{ "term_target": "Tôi đã ... rồi", "pronunciation": ["/toj˧ ɗaː˧ˀ˥ ... zoj˨˩/"], "specific_note": "" }], "example": {"sentence": "Tôi đã làm rồi.", "translation": "我做過了。"}, "usage_note": "過去動作。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過～", "related_terms": [{ "term_target": "Tôi đã ...", "pronunciation": ["/toj˧ ɗaː˧ˀ˥/"], "specific_note": "" }], "example": {"sentence": "Tôi đã ăn.", "translation": "我已經吃了。"}, "usage_note": "完成式。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過～", "related_terms": [{ "term_target": "Tôi đã từng đi ...", "pronunciation": ["/toj˧ ɗaː˧ˀ˥ tɨŋ˨˩ ɗi/"], "specific_note": "" }], "example": {"sentence": "Tôi đã từng đi Nhật.", "translation": "我曾經去過日本。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算～", "related_terms": [{ "term_target": "Tôi sẽ ...", "pronunciation": ["/toj˧ sɛ˧ˀ˥/"], "specific_note": "將要" }, { "term_target": "Tôi định ...", "pronunciation": ["/toj˧ ɗiɲ˧˨ˀ/"], "specific_note": "打算" }], "example": {"sentence": "Tôi sẽ đi.", "translation": "我將要去。"}, "usage_note": "未來意。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是～嗎？", "related_terms": [{ "term_target": "Bạn có phải là ... không?", "pronunciation": ["/ɓaːn˧˨ˀ kɔ˧˥ faːj˧˩ laː˨˩ ... xoŋ͡m˧/"], "specific_note": "" }], "example": {"sentence": "Bạn có phải là học sinh không?", "translation": "你是學生嗎？"}, "usage_note": "問狀態。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做～嗎？", "related_terms": [{ "term_target": "Bạn đang ... à?", "pronunciation": ["/ɓaːn˧˨ˀ ɗaːŋ˧ ... aː˨˩/"], "specific_note": "" }], "example": {"sentence": "Bạn đang ăn à?", "translation": "你在吃嗎？"}, "usage_note": "進行疑問。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經～嗎？", "related_terms": [{ "term_target": "Bạn đã từng ... chưa?", "pronunciation": ["/ɓaːn˧˨ˀ ɗaː˧ˀ˥ tɨŋ˨˩ ... tɕɨə˧/"], "specific_note": "" }], "example": {"sentence": "Bạn đã từng đi chưa?", "translation": "你有去過嗎？"}, "usage_note": "問經驗。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做（某事）？", "related_terms": [{ "term_target": "Khi nào bạn ...?", "pronunciation": ["/xi˧ naːw˨˩ ɓaːn˧˨ˀ .../"], "specific_note": "" }], "example": {"sentence": "Khi nào bạn ngủ?", "translation": "你何時睡？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去（某地）？", "related_terms": [{ "term_target": "Khi nào bạn đi ...?", "pronunciation": ["/xi˧ naːw˨˩ ɓaːn˧˨ˀ ɗi .../"], "specific_note": "" }], "example": {"sentence": "Khi nào bạn đi học?", "translation": "你何時去上學？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做（某事）？", "related_terms": [{ "term_target": "Bạn ... ở đâu?", "pronunciation": ["/ɓaːn˧˨ˀ ... əː˧˩ ɗəw˧/"], "specific_note": "" }], "example": {"sentence": "Bạn sống ở đâu?", "translation": "你住哪裡？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做（某事）？", "related_terms": [{ "term_target": "Bạn ... như thế nào?", "pronunciation": ["/ɓaːn˧˨ˀ ... ɲɨ˧ tʰe˧˥ naːw˨˩/"], "specific_note": "" }], "example": {"sentence": "Bạn đi như thế nào?", "translation": "你怎麼去？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去（某地）？", "related_terms": [{ "term_target": "Bạn đi ... bằng gì?", "pronunciation": ["/ɓaːn˧˨ˀ ɗi ... ɓaŋ˨˩ zi˨˩/"], "specific_note": "" }], "example": {"sentence": "Bạn đi học bằng gì?", "translation": "你怎麼去上學(搭什麼車)？"}, "usage_note": "問交通工具。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是～", "related_terms": [{ "term_target": "Tôi không phải là ...", "pronunciation": ["/toj˧ xoŋ͡m˧ faːj˧˩ laː˨˩ .../"], "specific_note": "" }], "example": {"sentence": "Tôi không phải là bác sĩ.", "translation": "我不是醫生。"}, "usage_note": "否定身分。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做～", "related_terms": [{ "term_target": "Tôi không ...", "pronunciation": ["/toj˧ xoŋ͡m˧ .../"], "specific_note": "" }], "example": {"sentence": "Tôi không hút thuốc.", "translation": "我不抽菸。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能～", "related_terms": [{ "term_target": "Tôi không thể ...", "pronunciation": ["/toj˧ xoŋ͡m˧ tʰe˧˩ .../"], "specific_note": "" }], "example": {"sentence": "Tôi không thể đi.", "translation": "我不能去。"}, "usage_note": "否定能力。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾～", "related_terms": [{ "term_target": "Tôi chưa bao giờ ...", "pronunciation": ["/toj˧ tɕɨə˧ ɓaːw˧ zəː˨˩ .../"], "specific_note": "" }], "example": {"sentence": "Tôi chưa bao giờ ăn.", "translation": "我一次都沒吃過。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必～", "related_terms": [{ "term_target": "Tôi không cần ...", "pronunciation": ["/toj˧ xoŋ͡m˧ kən˨˩ .../"], "specific_note": "" }], "example": {"sentence": "Tôi không cần đi.", "translation": "我不必去。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果～的話，就～", "related_terms": [{ "term_target": "Nếu ..., thì ...", "pronunciation": ["/new˧˥ ..., tʰi˨˩ .../"], "specific_note": "" }], "example": {"sentence": "Nếu thích, thì mua.", "translation": "如果喜歡，就買。"}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當～時，就～", "related_terms": [{ "term_target": "Khi ..., ...", "pronunciation": ["/xi˧ ..., .../"], "specific_note": "" }], "example": {"sentence": "Khi ăn, tôi vui.", "translation": "當我吃東西時，我很開心。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你～", "related_terms": [{ "term_target": "Bạn có thể ... không?", "pronunciation": ["/ɓaːn˧˨ˀ kɔ˧˥ tʰe˧˩ ... xoŋ͡m˧/"], "specific_note": "" }], "example": {"sentence": "Bạn có thể giúp tôi không?", "translation": "可以幫我嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做～吧！", "related_terms": [{ "term_target": "Hãy cùng ...", "pronunciation": ["/haj˧ˀ˥ kuŋ˨˩ .../"], "specific_note": "" }], "example": {"sentence": "Hãy cùng đi.", "translation": "我們走吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為～", "related_terms": [{ "term_target": "Tôi nghĩ ...", "pronunciation": ["/toj˧ ŋi˧ˀ˥ .../"], "specific_note": "" }], "example": {"sentence": "Tôi nghĩ là tốt.", "translation": "我認為很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做～", "related_terms": [{ "term_target": "Tôi muốn ...", "pronunciation": ["/toj˧ muən˧˥ .../"], "specific_note": "" }], "example": {"sentence": "Tôi muốn đi.", "translation": "我想去。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做～", "related_terms": [{ "term_target": "Tôi phải ...", "pronunciation": ["/toj˧ faːj˧˩ .../"], "specific_note": "" }], "example": {"sentence": "Tôi phải làm việc.", "translation": "我必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "Làm ... thì ...", "pronunciation": ["/laːm˨˩ ... tʰi˨˩ .../"], "specific_note": "" }], "example": {"sentence": "Ăn thì vui.", "translation": "吃東西是開心的。"}, "usage_note": "描述動作。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我…嗎？", "related_terms": [{ "term_target": "Bạn có thể giúp tôi ... không?", "pronunciation": ["/ɓaːn˧˨ˀ kɔ˧˥ tʰe˧˩ zup̚˧˥ toj˧ ... xoŋ͡m˧/"], "specific_note": "" }], "example": {"sentence": "Bạn có thể giúp tôi dọn dẹp không?", "translation": "你可以幫我打掃嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以…嗎？", "related_terms": [{ "term_target": "Tôi có thể ... không?", "pronunciation": ["/toj˧ kɔ˧˥ tʰe˧˩ ... xoŋ͡m˧/"], "specific_note": "" }], "example": {"sentence": "Tôi có thể vào không?", "translation": "我可以進來嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡…", "related_terms": [{ "term_target": "Tôi không thích ...", "pronunciation": ["/toj˧ xoŋ͡m˧ tʰic̚˧˥ .../"], "specific_note": "" }], "example": {"sentence": "Tôi không thích nó.", "translation": "我不喜歡它。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡…", "related_terms": [{ "term_target": "Tôi thích ... hơn", "pronunciation": ["/toj˧ tʰic̚˧˥ ... hơːn˧/"], "specific_note": "" }], "example": {"sentence": "Tôi thích trà hơn.", "translation": "我比較喜歡茶。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更…", "related_terms": [{ "term_target": "A ... hơn B", "pronunciation": ["/A ... hơːn˧ B/"], "specific_note": "" }], "example": {"sentence": "Cái này đắt hơn cái kia.", "translation": "這比那個貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有…（存在）", "related_terms": [{ "term_target": "Có ...", "pronunciation": ["/kɔ˧˥ .../"], "specific_note": "" }], "example": {"sentence": "Có con chó.", "translation": "有一隻狗。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}