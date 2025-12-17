import { AppData } from '../types';

export const italianData: AppData ={
  "meta": {
    "source_language": "zh-TW",
    "target_language": "it-IT",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 義大利語完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)"
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
            { "term_target": "Ciao", "pronunciation": ["/ˈtʃao/"], "specific_note": "非正式/通用" },
            { "term_target": "Buongiorno", "pronunciation": ["/bwɔnˈdʒorno/"], "specific_note": "正式/白天" },
            { "term_target": "Salve", "pronunciation": ["/ˈsalve/"], "specific_note": "中性/通用" }
          ],
          "example": { "sentence": "Ciao, come stai?", "translation": "你好，你好嗎？" },
          "usage_note": "Ciao 既是你好也是再見。",
          "image_file": "hello.png"
        },
        {
          "id": "greet-002",
          "term_zh": "再見",
          "related_terms": [
            { "term_target": "Arrivederci", "pronunciation": ["/arriveˈdertʃi/"], "specific_note": "正式" },
            { "term_target": "Ciao", "pronunciation": ["/ˈtʃao/"], "specific_note": "非正式" },
            { "term_target": "A presto", "pronunciation": ["/a ˈprɛsto/"], "specific_note": "待會見" }
          ],
          "example": { "sentence": "Arrivederci, a domani.", "translation": "再見，明天見。" },
          "usage_note": "對長輩或陌生人建議用 Arrivederci。",
          "image_file": "goodbye.png"
        },
        {
          "id": "greet-003",
          "term_zh": "謝謝你",
          "related_terms": [
            { "term_target": "Grazie", "pronunciation": ["/ˈɡrattsje/"], "specific_note": "通用" },
            { "term_target": "Grazie mille", "pronunciation": ["/ˈɡrattsje ˈmille/"], "specific_note": "非常感謝" }
          ],
          "example": { "sentence": "Grazie mille per l'aiuto.", "translation": "非常謝謝你的幫忙。" },
          "usage_note": "回應可用 Prego (不客氣)。",
          "image_file": "thank_you.png"
        },
        {
          "id": "greet-004",
          "term_zh": "對不起",
          "related_terms": [
            { "term_target": "Mi dispiace", "pronunciation": ["/mi diˈspjatʃe/"], "specific_note": "表達遺憾/抱歉" },
            { "term_target": "Scusa", "pronunciation": ["/ˈskuza/"], "specific_note": "原諒我(對Tú)" },
            { "term_target": "Scusi", "pronunciation": ["/ˈskuzi/"], "specific_note": "原諒我(對Lei)" }
          ],
          "example": { "sentence": "Mi dispiace, sono in ritardo.", "translation": "對不起，我遲到了。" },
          "usage_note": "Scusa/Scusi 常用於藉過或引起注意。",
          "image_file": "sorry.png"
        },
        {
          "id": "greet-005",
          "term_zh": "早安",
          "related_terms": [
            { "term_target": "Buongiorno", "pronunciation": ["/bwɔnˈdʒorno/"], "specific_note": "" }
          ],
          "example": { "sentence": "Buongiorno mamma.", "translation": "早安，媽。" },
          "usage_note": "也可用於「你好」(白天)。",
          "image_file": "good_morning.png"
        },
        {
          "id": "greet-006",
          "term_zh": "請問...",
          "related_terms": [
            { "term_target": "Scusi", "pronunciation": ["/ˈskuzi/"], "specific_note": "正式/尊稱" },
            { "term_target": "Per favore", "pronunciation": ["/per faˈvore/"], "specific_note": "請/麻煩一下" }
          ],
          "example": { "sentence": "Scusi, dov'è il bagno?", "translation": "請問，廁所在哪裡？" },
          "usage_note": "發問前用 Scusi 很禮貌。",
          "image_file": "excuse_me.png"
        },
        {
          "id": "greet-007",
          "term_zh": "借過",
          "related_terms": [
            { "term_target": "Permesso", "pronunciation": ["/perˈmesso/"], "specific_note": "請求通過/進入" },
            { "term_target": "Scusa / Scusi", "pronunciation": ["/ˈskuza/", "/ˈskuzi/"], "specific_note": "不好意思" }
          ],
          "example": { "sentence": "Permesso, vorrei passare.", "translation": "借過，我想過去。" },
          "usage_note": "進入房間或穿過人群用 Permesso。",
          "image_file": "excuse_me_pass.png"
        },
        {
          "id": "greet-008",
          "term_zh": "我不懂",
          "related_terms": [
            { "term_target": "Non capisco", "pronunciation": ["/non kaˈpisko/"], "specific_note": "" }
          ],
          "example": { "sentence": "Mi dispiace, non capisco l'italiano.", "translation": "抱歉，我不懂義大利語。" },
          "usage_note": "Capire 是「理解/懂」。",
          "image_file": "dont_understand.png"
        },
        {
          "id": "greet-009",
          "term_zh": "這是什麼？",
          "related_terms": [
            { "term_target": "Che cos'è questo?", "pronunciation": ["/ke kɔˈzɛ ˈkwesto/"], "specific_note": "" }
          ],
          "example": { "sentence": "Che cos'è questo? È cibo?", "translation": "這是什麼？是食物嗎？" },
          "usage_note": "指著東西問。",
          "image_file": "what_is_this.png"
        },
        {
          "id": "greet-010",
          "term_zh": "我想要這個",
          "related_terms": [
            { "term_target": "Vorrei questo", "pronunciation": ["/vorˈrɛi ˈkwesto/"], "specific_note": "我想要(禮貌)" },
            { "term_target": "Voglio questo", "pronunciation": ["/ˈvɔʎʎo ˈkwesto/"], "specific_note": "我要(直接)" }
          ],
          "example": { "sentence": "Vorrei questo, per favore.", "translation": "麻煩給我這個。" },
          "usage_note": "購物點餐建議用 Vorrei (條件式) 比較禮貌。",
          "image_file": "i_want_this.png"
        },
        {
          "id": "greet-011",
          "term_zh": "請給我...",
          "related_terms": [
            { "term_target": "Mi dia ..., per favore", "pronunciation": ["/mi ˈdia ... per faˈvore/"], "specific_note": "請給我(正式)" },
            { "term_target": "Prendo ...", "pronunciation": ["/ˈprɛndo/"], "specific_note": "我要...(點餐)" }
          ],
          "example": { "sentence": "Mi dia dell'acqua, per favore.", "translation": "請給我水。" },
          "usage_note": "Per favore (請) 必加。",
          "image_file": "please_give_me.png"
        },
        {
          "id": "greet-012",
          "term_zh": "廁所在哪裡？",
          "related_terms": [
            { "term_target": "Dov'è il bagno?", "pronunciation": ["/doˈvɛ il ˈbaɲɲo/"], "specific_note": "" }
          ],
          "example": { "sentence": "Scusi, dov'è il bagno?", "translation": "不好意思，廁所在哪裡？" },
          "usage_note": "旅遊必備。",
          "image_file": "where_bathroom.png"
        },
        {
          "id": "greet-013",
          "term_zh": "多少錢？",
          "related_terms": [
            { "term_target": "Quanto costa?", "pronunciation": ["/ˈkwanto ˈkɔsta/"], "specific_note": "單個物品" },
            { "term_target": "Quant'è?", "pronunciation": ["/kwanˈtɛ/"], "specific_note": "總共多少" }
          ],
          "example": { "sentence": "Quanto costa questo?", "translation": "這多少錢？" },
          "usage_note": "購物用語。",
          "image_file": "how_much.png"
        },
        {
          "id": "greet-014",
          "term_zh": "請幫我",
          "related_terms": [
            { "term_target": "Mi aiuti, per favore", "pronunciation": ["/mi aˈjuti per faˈvore/"], "specific_note": "正式" },
            { "term_target": "Aiuto", "pronunciation": ["/aˈjuto/"], "specific_note": "救命(緊急)" }
          ],
          "example": { "sentence": "Può aiutarmi?", "translation": "您可以幫我嗎？" },
          "usage_note": "Aiutare 是「幫助」。",
          "image_file": "help_me.png"
        },
        {
          "id": "greet-015",
          "term_zh": "你可以再說一次嗎？",
          "related_terms": [
            { "term_target": "Può ripetere?", "pronunciation": ["/pwɔ riˈpɛtere/"], "specific_note": "正式" },
            { "term_target": "Come?", "pronunciation": ["/ˈkome/"], "specific_note": "蛤?(口語)" }
          ],
          "example": { "sentence": "Non ho capito, può ripetere?", "translation": "我沒聽懂，能再說一次嗎？" },
          "usage_note": "Ripetere 是「重複」。",
          "image_file": "say_again.png"
        },
        {
          "id": "greet-016",
          "term_zh": "你可以講慢一點嗎？",
          "related_terms": [
            { "term_target": "Può parlare più lentamente?", "pronunciation": ["/pwɔ parˈlare pju lentaˈmente/"], "specific_note": "正式" }
          ],
          "example": { "sentence": "Per favore, parli più lentamente.", "translation": "拜託講慢一點。" },
          "usage_note": "Lentamente 意思是「慢地」。",
          "image_file": "speak_slowly.png"
        }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個/它", "related_terms": [{ "term_target": "quello", "pronunciation": ["/ˈkwɛllo/"], "specific_note": "那個" }, { "term_target": "esso / essa", "pronunciation": ["/ˈesso/", "/ˈessa/"], "specific_note": "它(書面)" }], "example": {"sentence": "Che cos'è quello?", "translation": "那是什麼？"}, "usage_note": "口語常用 Quello 指示代詞。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "io", "pronunciation": ["/ˈio/"], "specific_note": "" }], "example": {"sentence": "Io sono taiwanese.", "translation": "我是台灣人。"}, "usage_note": "第一人稱。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "tu", "pronunciation": ["/tu/"], "specific_note": "非正式" }, { "term_target": "Lei", "pronunciation": ["/lɛi/"], "specific_note": "正式/尊稱" }], "example": {"sentence": "Chi sei tu?", "translation": "你是誰？"}, "usage_note": "對陌生人或長輩務必用 Lei (大寫)。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他", "related_terms": [{ "term_target": "lui", "pronunciation": ["/ˈlui/"], "specific_note": "" }], "example": {"sentence": "Lui è mio padre.", "translation": "他是我爸。"}, "usage_note": "男性。", "image_file": "he.png" },
        { "id": "pro-05", "term_zh": "她的", "related_terms": [{ "term_target": "suo / sua / suoi / sue", "pronunciation": ["/suo/", "/sua/", "/swɔi/", "/sue/"], "specific_note": "依物品性別" }], "example": {"sentence": "La sua borsa.", "translation": "她的包包(Borsa是陰性)。"}, "usage_note": "所有格依「物品」性別，不依擁有者。", "image_file": "her.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "noi", "pronunciation": ["/noi/"], "specific_note": "" }], "example": {"sentence": "Noi siamo una famiglia.", "translation": "我們是家人。"}, "usage_note": "第一人稱複數。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "她", "related_terms": [{ "term_target": "lei", "pronunciation": ["/lɛi/"], "specific_note": "" }], "example": {"sentence": "Lei è bella.", "translation": "她很漂亮。"}, "usage_note": "女性(小寫lei)。", "image_file": "she.png" },
        { "id": "pro-08", "term_zh": "他們", "related_terms": [{ "term_target": "loro", "pronunciation": ["/ˈloro/"], "specific_note": "" }], "example": {"sentence": "Loro mangiano.", "translation": "他們在吃。"}, "usage_note": "第三人稱複數(不分陰陽)。", "image_file": "they.png" },
        { "id": "pro-09", "term_zh": "這個", "related_terms": [{ "term_target": "questo / questa", "pronunciation": ["/ˈkwesto/", "/ˈkwesta/"], "specific_note": "m./f." }], "example": {"sentence": "Questo è mio.", "translation": "這是我的。"}, "usage_note": "依指代物性別變化。", "image_file": "this.png" },
        { "id": "pro-10", "term_zh": "那個（指示詞）", "related_terms": [{ "term_target": "quello / quella", "pronunciation": ["/ˈkwɛllo/", "/ˈkwɛlla/"], "specific_note": "m./f." }], "example": {"sentence": "Quel libro.", "translation": "那本書。", }, "usage_note": "依指代物性別變化。", "image_file": "that_obj.png" },
        { "id": "pro-11", "term_zh": "他的", "related_terms": [{ "term_target": "suo / sua", "pronunciation": ["/suo/", "/sua/"], "specific_note": "" }], "example": {"sentence": "La sua macchina.", "translation": "他的車(Macchina是陰性)。"}, "usage_note": "同 Her，依物品性別變化。", "image_file": "his.png" },
        { "id": "pro-12", "term_zh": "你的", "related_terms": [{ "term_target": "tuo / tua", "pronunciation": ["/tuo/", "/tua/"], "specific_note": "非正式" }, { "term_target": "Suo / Sua", "pronunciation": ["/suo/", "/sua/"], "specific_note": "正式" }], "example": {"sentence": "Il tuo nome.", "translation": "你的名字。"}, "usage_note": "依物品性別變化。", "image_file": "your.png" },
        { "id": "pro-13", "term_zh": "他們的", "related_terms": [{ "term_target": "loro", "pronunciation": ["/ˈloro/"], "specific_note": "" }], "example": {"sentence": "La loro casa.", "translation": "他們的家。"}, "usage_note": "Loro 不隨物品性別變化。", "image_file": "their.png" },
        { "id": "pro-14", "term_zh": "我們的", "related_terms": [{ "term_target": "nostro / nostra", "pronunciation": ["/ˈnɔstro/", "/ˈnɔstra/"], "specific_note": "" }], "example": {"sentence": "La nostra scuola.", "translation": "我們的學校。"}, "usage_note": "依物品性別變化。", "image_file": "our.png" },
        { "id": "pro-15", "term_zh": "這些", "related_terms": [{ "term_target": "questi / queste", "pronunciation": ["/ˈkwesti/", "/ˈkwestte/"], "specific_note": "m./f." }], "example": {"sentence": "Questi libri.", "translation": "這些書。"}, "usage_note": "複數。", "image_file": "these.png" },
        { "id": "pro-16", "term_zh": "那些", "related_terms": [{ "term_target": "quelli / quelle", "pronunciation": ["/ˈkwɛlli/", "/ˈkwɛlle/"], "specific_note": "m./f." }], "example": {"sentence": "Quegli uccelli.", "translation": "那些鳥。", }, "usage_note": "遠處複數。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "essere", "pronunciation": ["/ˈɛssere/"], "specific_note": "原形" }, { "term_target": "sono / sei / è", "pronunciation": ["/ˈsono/", "/sɛi/", "/ɛ/"], "specific_note": "變位" }], "example": {"sentence": "Io sono studente.", "translation": "我是學生。"}, "usage_note": "不規則變化。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "avere", "pronunciation": ["/aˈvere/"], "specific_note": "原形" }, { "term_target": "ho / hai / ha", "pronunciation": ["/ɔ/", "/ai/", "/a/"], "specific_note": "變位" }], "example": {"sentence": "Ho dei soldi.", "translation": "我有錢。"}, "usage_note": "H 不發音。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "andare", "pronunciation": ["/anˈdare/"], "specific_note": "" }], "example": {"sentence": "Vado a casa.", "translation": "我要回家。",  }, "usage_note": "不規則動詞。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "ottenere", "pronunciation": ["/otteˈnere/"], "specific_note": "獲得" }, { "term_target": "prendere", "pronunciation": ["/ˈprɛndere/"], "specific_note": "拿/取" }], "example": {"sentence": "Ottenere un lavoro.", "translation": "得到工作。"}, "usage_note": "Prendere 也用於搭車/吃喝。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "fare", "pronunciation": ["/ˈfare/"], "specific_note": "" }], "example": {"sentence": "Fare i compiti.", "translation": "做作業。"}, "usage_note": "通用動詞。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "dire", "pronunciation": ["/ˈdire/"], "specific_note": "說" }, { "term_target": "parlare", "pronunciation": ["/parˈlare/"], "specific_note": "講/說話" }], "example": {"sentence": "Dì ciao.", "translation": "說你好。"}, "usage_note": "Dire 內容，Parlare 語言或動作。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "sapere", "pronunciation": ["/saˈpere/"], "specific_note": "知識" }, { "term_target": "conoscere", "pronunciation": ["/koˈnoʃʃere/"], "specific_note": "認識人/地" }], "example": {"sentence": "Non lo so.", "translation": "我不知道。"}, "usage_note": "區分知識與熟悉度。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "pensare", "pronunciation": ["/penˈsare/"], "specific_note": "" }], "example": {"sentence": "Penso di sì.", "translation": "我想是的。"}, "usage_note": "思考/認為。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "vedere", "pronunciation": ["/veˈdere/"], "specific_note": "看見" }, { "term_target": "guardare", "pronunciation": ["/ɡwarˈdare/"], "specific_note": "注視/觀看" }], "example": {"sentence": "Ti vedo.", "translation": "我看到你。"}, "usage_note": "Vedere 是視覺能力，Guardare 是動作。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "fare", "pronunciation": ["/ˈfare/"], "specific_note": "" }, { "term_target": "produrre", "pronunciation": ["/proˈdurre/"], "specific_note": "製造/生產" }], "example": {"sentence": "Fare il caffè.", "translation": "煮咖啡。"}, "usage_note": "Fare 最常用。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "venire", "pronunciation": ["/veˈnire/"], "specific_note": "" }], "example": {"sentence": "Vieni qui.", "translation": "來這裡。"}, "usage_note": "過來。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "avere bisogno di", "pronunciation": ["/aˈvere biˈzoɲɲo di/"], "specific_note": "片語" }], "example": {"sentence": "Ho bisogno di acqua.", "translation": "我需要水。"}, "usage_note": "固定用法。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "usare", "pronunciation": ["/uˈzare/"], "specific_note": "" }], "example": {"sentence": "Usare una penna.", "translation": "用原子筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "trovare", "pronunciation": ["/troˈvare/"], "specific_note": "" }], "example": {"sentence": "Trovare un lavoro.", "translation": "找工作。"}, "usage_note": "發現/找到。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "dare", "pronunciation": ["/ˈdare/"], "specific_note": "" }], "example": {"sentence": "Dammi quello.", "translation": "給我那個。"}, "usage_note": "給予。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "dire", "pronunciation": ["/ˈdire/"], "specific_note": "" }, { "term_target": "raccontare", "pronunciation": ["/rakkonˈtare/"], "specific_note": "講述(故事)" }], "example": {"sentence": "Dimmi.", "translation": "告訴我。"}, "usage_note": "告知。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "lavorare", "pronunciation": ["/lavoˈrare/"], "specific_note": "" }], "example": {"sentence": "Lavoro qui.", "translation": "我在這工作。"}, "usage_note": "勞動。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "piacere", "pronunciation": ["/pjaˈtʃere/"], "specific_note": "" }], "example": {"sentence": "Mi piace.", "translation": "我喜歡(它使我喜歡)。"}, "usage_note": "用法特殊：Mi piace (單數), Mi piacciono (複數)。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "alzarsi", "pronunciation": ["/alˈtsarsi/"], "specific_note": "起床" }, { "term_target": "svegliarsi", "pronunciation": ["/zveʎˈʎarsi/"], "specific_note": "醒來" }], "example": {"sentence": "Mi alzo alle 7.", "translation": "我七點起床。"}, "usage_note": "反身動詞。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "parlare", "pronunciation": ["/parˈlare/"], "specific_note": "" }], "example": {"sentence": "Parlare italiano.", "translation": "說義大利語。"}, "usage_note": "講語言。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "sentire", "pronunciation": ["/senˈtire/"], "specific_note": "聽見" }, { "term_target": "ascoltare", "pronunciation": ["/askolˈtare/"], "specific_note": "聆聽" }], "example": {"sentence": "Mi senti?", "translation": "你聽得到我嗎？"}, "usage_note": "Sentire(能力), Ascoltare(專注)。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "scrivere", "pronunciation": ["/ˈskrivere/"], "specific_note": "" }], "example": {"sentence": "Scrivere un nome.", "translation": "寫名字。"}, "usage_note": "書寫。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "leggere", "pronunciation": ["/ˈlɛdʒdʒere/"], "specific_note": "" }], "example": {"sentence": "Leggere un libro.", "translation": "看書。"}, "usage_note": "閱讀。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "aspettare", "pronunciation": ["/aspetˈtare/"], "specific_note": "" }], "example": {"sentence": "Aspettami.", "translation": "等我。"}, "usage_note": "等候。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "provare", "pronunciation": ["/proˈvare/"], "specific_note": "試做/試吃" }, { "term_target": "cercare di", "pronunciation": ["/tʃerˈkare di/"], "specific_note": "試圖" }], "example": {"sentence": "Prova questo.", "translation": "試試這個。"}, "usage_note": "試驗。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "pagare", "pronunciation": ["/paˈɡare/"], "specific_note": "" }], "example": {"sentence": "Pagare il conto.", "translation": "付帳單。"}, "usage_note": "支付。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "scegliere", "pronunciation": ["/ˈʃeʎʎere/"], "specific_note": "" }], "example": {"sentence": "Scegline uno.", "translation": "選一個。"}, "usage_note": "挑選。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "entrare", "pronunciation": ["/enˈtrare/"], "specific_note": "" }], "example": {"sentence": "Entrare nella stanza.", "translation": "進房間。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "abitare", "pronunciation": ["/abiˈtare/"], "specific_note": "居住" }, { "term_target": "vivere", "pronunciation": ["/ˈvivere/"], "specific_note": "生活" }], "example": {"sentence": "Abito a Taipei.", "translation": "我住台北。"}, "usage_note": "Abitare 接地址/城市。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "arrivare", "pronunciation": ["/arriˈvare/"], "specific_note": "" }], "example": {"sentence": "Arrivare in tempo.", "translation": "準時到達。"}, "usage_note": "抵達。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "camminare", "pronunciation": ["/kammiˈnare/"], "specific_note": "" }], "example": {"sentence": "Camminare verso casa.", "translation": "走路回家。"}, "usage_note": "步行。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "aprire", "pronunciation": ["/aˈprire/"], "specific_note": "" }], "example": {"sentence": "Aprire la porta.", "translation": "開門。"}, "usage_note": "開啟。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "chiudere", "pronunciation": ["/ˈkjudere/"], "specific_note": "" }], "example": {"sentence": "Chiudere la finestra.", "translation": "關窗。"}, "usage_note": "關上。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "aiutare", "pronunciation": ["/ajuˈtare/"], "specific_note": "" }], "example": {"sentence": "Aiutami.", "translation": "幫我。"}, "usage_note": "協助。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "portare", "pronunciation": ["/porˈtare/"], "specific_note": "" }], "example": {"sentence": "Porta dell'acqua.", "translation": "帶水來。"}, "usage_note": "攜帶。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "需要", "related_terms": [{ "term_target": "avere bisogno di", "pronunciation": ["/aˈvere biˈzoɲɲo di/"], "specific_note": "" }], "example": {"sentence": "Ho bisogno di acqua.", "translation": "我需要水。"}, "usage_note": "需要。", "image_file": "need.png" },
        { "id": "v-37", "term_zh": "使用", "related_terms": [{ "term_target": "usare", "pronunciation": ["/uˈzare/"], "specific_note": "" }], "example": {"sentence": "Usare una penna.", "translation": "用原子筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-38", "term_zh": "變成", "related_terms": [{ "term_target": "diventare", "pronunciation": ["/divenˈtare/"], "specific_note": "" }], "example": {"sentence": "Diventare insegnante.", "translation": "變成老師。"}, "usage_note": "變化。", "image_file": "become.png" },
        { "id": "v-39", "term_zh": "開始", "related_terms": [{ "term_target": "cominciare", "pronunciation": ["/kominˈtʃare/"], "specific_note": "" }, { "term_target": "iniziare", "pronunciation": ["/iniˈttsjare/"], "specific_note": "" }], "example": {"sentence": "Cominciare ora.", "translation": "現在開始。"}, "usage_note": "兩者通用。", "image_file": "start.png" },
        { "id": "v-40", "term_zh": "結束", "related_terms": [{ "term_target": "finire", "pronunciation": ["/fiˈnire/"], "specific_note": "完成" }, { "term_target": "terminare", "pronunciation": ["/termiˈnare/"], "specific_note": "結束" }], "example": {"sentence": "Finire il lavoro.", "translation": "工作結束。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-41", "term_zh": "停止", "related_terms": [{ "term_target": "fermare", "pronunciation": ["/ferˈmare/"], "specific_note": "停下" }, { "term_target": "smettere", "pronunciation": ["/ˈzmɛttere/"], "specific_note": "停止做" }], "example": {"sentence": "Fermati qui.", "translation": "停在這裡。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-42", "term_zh": "記住", "related_terms": [{ "term_target": "ricordare", "pronunciation": ["/rikorˈdare/"], "specific_note": "" }], "example": {"sentence": "Mi ricordo.", "translation": "我記得。"}, "usage_note": "反身動詞 Ricordarsi。", "image_file": "remember.png" },
        { "id": "v-43", "term_zh": "談話", "related_terms": [{ "term_target": "parlare", "pronunciation": ["/parˈlare/"], "specific_note": "" }, { "term_target": "chiacchierare", "pronunciation": ["/kjakkjeˈrare/"], "specific_note": "聊天" }], "example": {"sentence": "Parlare con te.", "translation": "跟你談話。"}, "usage_note": "交談。", "image_file": "talk.png" },
        { "id": "v-44", "term_zh": "見面", "related_terms": [{ "term_target": "incontrare", "pronunciation": ["/inkonˈtrare/"], "specific_note": "" }], "example": {"sentence": "Incontrare amici.", "translation": "跟朋友碰面。"}, "usage_note": "會面。", "image_file": "meet.png" },
        { "id": "v-45", "term_zh": "乘坐（工具）", "related_terms": [{ "term_target": "prendere", "pronunciation": ["/ˈprɛndere/"], "specific_note": "" }], "example": {"sentence": "Prendere l'autobus.", "translation": "搭公車。"}, "usage_note": "搭乘/拿取。", "image_file": "take.png" },
        { "id": "v-46", "term_zh": "放", "related_terms": [{ "term_target": "mettere", "pronunciation": ["/ˈmettere/"], "specific_note": "" }], "example": {"sentence": "Mettilo qui.", "translation": "放這裡。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-47", "term_zh": "吃", "related_terms": [{ "term_target": "mangiare", "pronunciation": ["/manˈdʒare/"], "specific_note": "" }], "example": {"sentence": "Mangiare il pranzo.", "translation": "吃午餐。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-48", "term_zh": "睡覺", "related_terms": [{ "term_target": "dormire", "pronunciation": ["/dorˈmire/"], "specific_note": "" }], "example": {"sentence": "Vado a dormire.", "translation": "我要去睡覺了。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-49", "term_zh": "寄送", "related_terms": [{ "term_target": "inviare", "pronunciation": ["/inviˈare/"], "specific_note": "" }, { "term_target": "spedire", "pronunciation": ["/speˈdire/"], "specific_note": "寄送(郵件)" }], "example": {"sentence": "Inviare un'email.", "translation": "寄信。"}, "usage_note": "傳送。", "image_file": "send.png" },
        { "id": "v-50", "term_zh": "開車", "related_terms": [{ "term_target": "guidare", "pronunciation": ["/ɡwiˈdare/"], "specific_note": "" }], "example": {"sentence": "Guidare una macchina.", "translation": "開車。"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-51", "term_zh": "讀書", "related_terms": [{ "term_target": "studiare", "pronunciation": ["/stuˈdjare/"], "specific_note": "研讀" }, { "term_target": "imparare", "pronunciation": ["/impaˈrare/"], "specific_note": "學會" }], "example": {"sentence": "Studiare l'italiano.", "translation": "讀義大利語。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-52", "term_zh": "回去", "related_terms": [{ "term_target": "tornare", "pronunciation": ["/torˈnare/"], "specific_note": "" }, { "term_target": "ritornare", "pronunciation": ["/ritorˈnare/"], "specific_note": "返回" }], "example": {"sentence": "Tornare a casa.", "translation": "回家。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "buono/a", "pronunciation": ["/ˈbwɔno/"], "specific_note": "m/f" }], "example": {"sentence": "Buon lavoro.", "translation": "做得好。"}, "usage_note": "形容詞分陰陽性。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "cattivo/a", "pronunciation": ["/katˈtivo/"], "specific_note": "m/f" }], "example": {"sentence": "Cattiva giornata.", "translation": "壞的一天。"}, "usage_note": "負面。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "nuovo/a", "pronunciation": ["/ˈnwɔvo/"], "specific_note": "m/f" }], "example": {"sentence": "Nuovo telefono.", "translation": "新手機。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "primo/a", "pronunciation": ["/ˈprimo/"], "specific_note": "m/f" }], "example": {"sentence": "Prima volta.", "translation": "第一次。"}, "usage_note": "順序。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "scorso/a", "pronunciation": ["/ˈskorso/"], "specific_note": "m/f" }, { "term_target": "ultimo/a", "pronunciation": ["/ˈultimo/"], "specific_note": "最後的" }], "example": {"sentence": "La settimana scorsa.", "translation": "上週。"}, "usage_note": "過去的。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "prossimo/a", "pronunciation": ["/ˈprɔssimo/"], "specific_note": "m/f" }], "example": {"sentence": "La prossima stazione.", "translation": "下一站。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "lungo/a", "pronunciation": ["/ˈluŋɡo/"], "specific_note": "m/f" }], "example": {"sentence": "Capelli lunghi.", "translation": "長髮。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "grande", "pronunciation": ["/ˈɡrande/"], "specific_note": "" }], "example": {"sentence": "Grande casa.", "translation": "大房子。"}, "usage_note": "體積大。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "piccolo/a", "pronunciation": ["/ˈpikkolo/"], "specific_note": "m/f" }], "example": {"sentence": "Piccolo gatto.", "translation": "小貓。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "molto/a", "pronunciation": ["/ˈmolto/"], "specific_note": "" }], "example": {"sentence": "Molta gente.", "translation": "很多人。"}, "usage_note": "數量多。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "alto/a", "pronunciation": ["/ˈalto/"], "specific_note": "" }], "example": {"sentence": "Palazzo alto.", "translation": "高樓。"}, "usage_note": "高度。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "giovane", "pronunciation": ["/ˈdʒovane/"], "specific_note": "" }], "example": {"sentence": "Giovane uomo.", "translation": "年輕人。"}, "usage_note": "不分陰陽。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的", "related_terms": [{ "term_target": "vecchio/a", "pronunciation": ["/ˈvɛkkjo/"], "specific_note": "m/f" }, { "term_target": "anziano/a", "pronunciation": ["/anˈtsjano/"], "specific_note": "年長(禮貌)" }], "example": {"sentence": "Vecchio libro.", "translation": "舊書。"}, "usage_note": "Vecchi 用於物品，人建議用 Anziano。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "vicino/a", "pronunciation": ["/viˈtʃino/"], "specific_note": "" }], "example": {"sentence": "È vicino.", "translation": "很近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "lontano/a", "pronunciation": ["/lonˈtano/"], "specific_note": "" }], "example": {"sentence": "È lontano.", "translation": "很遠。"}, "usage_note": "距離遠。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "veloce", "pronunciation": ["/veˈlotʃe/"], "specific_note": "" }, { "term_target": "rapido/a", "pronunciation": ["/ˈrapido/"], "specific_note": "" }], "example": {"sentence": "Macchina veloce.", "translation": "快車。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "lento/a", "pronunciation": ["/ˈlɛnto/"], "specific_note": "" }], "example": {"sentence": "Internet lento.", "translation": "網路慢。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "caldo/a", "pronunciation": ["/ˈkaldo/"], "specific_note": "" }], "example": {"sentence": "Acqua calda.", "translation": "熱水。"}, "usage_note": "高溫。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "freddo/a", "pronunciation": ["/ˈfreddo/"], "specific_note": "" }], "example": {"sentence": "Bevanda fredda.", "translation": "冷飲。"}, "usage_note": "低溫。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "pulito/a", "pronunciation": ["/puˈlito/"], "specific_note": "" }], "example": {"sentence": "Stanza pulita.", "translation": "乾淨的房間。"}, "usage_note": "無髒汙。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "sporco/a", "pronunciation": ["/ˈspɔrko/"], "specific_note": "" }], "example": {"sentence": "Mani sporche.", "translation": "髒手。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "facile", "pronunciation": ["/ˈfatʃile/"], "specific_note": "" }], "example": {"sentence": "È facile.", "translation": "這很簡單。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "difficile", "pronunciation": ["/difˈfitʃile/"], "specific_note": "" }], "example": {"sentence": "È difficile.", "translation": "很難。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "corretto/a", "pronunciation": ["/korˈrɛtto/"], "specific_note": "" }, { "term_target": "giusto/a", "pronunciation": ["/ˈdʒusto/"], "specific_note": "對的/公平" }], "example": {"sentence": "Risposta corretta.", "translation": "正確答案。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "sbagliato/a", "pronunciation": ["/zbaʎˈʎato/"], "specific_note": "" }], "example": {"sentence": "È sbagliato.", "translation": "是錯的。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "importante", "pronunciation": ["/imporˈtante/"], "specific_note": "" }], "example": {"sentence": "Riunione importante.", "translation": "重要會議。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "diverso/a", "pronunciation": ["/diˈvɛrso/"], "specific_note": "" }], "example": {"sentence": "Colore diverso.", "translation": "不同顏色。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "vero/a", "pronunciation": ["/ˈvero/"], "specific_note": "真的" }, { "term_target": "reale", "pronunciation": ["/reˈale/"], "specific_note": "真實的" }], "example": {"sentence": "Amore vero.", "translation": "真愛。"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "interessante", "pronunciation": ["/interesˈsante/"], "specific_note": "有意思" }, { "term_target": "divertente", "pronunciation": ["/diverˈtɛnte/"], "specific_note": "好玩" }], "example": {"sentence": "Libro interessante.", "translation": "有趣的書。"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "bello/a", "pronunciation": ["/ˈbɛllo/"], "specific_note": "" }], "example": {"sentence": "Bellissimo fiore.", "translation": "美麗的花。"}, "usage_note": "形容人或景物。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "economico/a", "pronunciation": ["/ekoˈnɔmiko/"], "specific_note": "" }], "example": {"sentence": "È economico.", "translation": "這很便宜。"}, "usage_note": "價格低。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "costoso/a", "pronunciation": ["/kosˈtoso/"], "specific_note": "" }, { "term_target": "caro/a", "pronunciation": ["/ˈkaro/"], "specific_note": "" }], "example": {"sentence": "Troppo caro.", "translation": "太貴了。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "affamato/a", "pronunciation": ["/affaˈmato/"], "specific_note": "" }, { "term_target": "avere fame", "pronunciation": ["/aˈvere ˈfame/"], "specific_note": "有飢餓(常用)" }], "example": {"sentence": "Ho fame.", "translation": "我餓了(我有飢餓)。"}, "usage_note": "常用 Avere fame。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "stanco/a", "pronunciation": ["/ˈstaŋko/"], "specific_note": "" }], "example": {"sentence": "Sono stanco.", "translation": "我累了。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "occupato/a", "pronunciation": ["/okkuˈpato/"], "specific_note": "" }], "example": {"sentence": "Sono occupato.", "translation": "我很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "felice", "pronunciation": ["/feˈlitʃe/"], "specific_note": "幸福/快樂" }, { "term_target": "contento/a", "pronunciation": ["/konˈtɛnto/"], "specific_note": "滿意/高興" }], "example": {"sentence": "Sono felice.", "translation": "我很快樂。"}, "usage_note": "心情。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "triste", "pronunciation": ["/ˈtriste/"], "specific_note": "" }], "example": {"sentence": "Storia triste.", "translation": "悲傷的故事。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "simile", "pronunciation": ["/ˈsimile/"], "specific_note": "" }], "example": {"sentence": "Colore simile.", "translation": "相似的顏色。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "famoso/a", "pronunciation": ["/faˈmozo/"], "specific_note": "" }], "example": {"sentence": "Attore famoso.", "translation": "知名演員。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "straniero/a", "pronunciation": ["/straˈnjɛro/"], "specific_note": "" }], "example": {"sentence": "Paese straniero.", "translation": "外國。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "intelligente", "pronunciation": ["/intelliˈdʒɛnte/"], "specific_note": "" }], "example": {"sentence": "Bambino intelligente.", "translation": "聰明的孩子。"}, "usage_note": "腦袋好。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "pericoloso/a", "pronunciation": ["/perikoˈloso/"], "specific_note": "" }], "example": {"sentence": "È pericoloso.", "translation": "這很危險。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "gentile", "pronunciation": ["/dʒenˈtile/"], "specific_note": "" }], "example": {"sentence": "Persona gentile.", "translation": "好心人。"}, "usage_note": "溫柔。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "tutto/a", "pronunciation": ["/ˈtutto/"], "specific_note": "全部" }, { "term_target": "ogni", "pronunciation": ["/ˈoɲɲi/"], "specific_note": "每一個" }], "example": {"sentence": "Tutti i giorni.", "translation": "每一天(所有日子)。"}, "usage_note": "全部。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "preferito/a", "pronunciation": ["/prefeˈrito/"], "specific_note": "" }], "example": {"sentence": "Cibo preferito.", "translation": "最愛的食物。"}, "usage_note": "中意。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "delizioso/a", "pronunciation": ["/delitˈtsjoso/"], "specific_note": "" }, { "term_target": "buono/a", "pronunciation": ["/ˈbwɔno/"], "specific_note": "好吃" }], "example": {"sentence": "Piatto delizioso.", "translation": "美味的菜。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "tempo", "pronunciation": ["/ˈtɛmpo/"], "specific_note": "m. (時間/天氣)" }, { "term_target": "ora", "pronunciation": ["/ˈora/"], "specific_note": "f. (時刻)" }], "example": {"sentence": "Che ora è?", "translation": "現在幾點？"}, "usage_note": "時刻/時間。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "gente", "pronunciation": ["/ˈdʒɛnte/"], "specific_note": "f. (集合)" }, { "term_target": "persone", "pronunciation": ["/perˈsone/"], "specific_note": "f. pl." }], "example": {"sentence": "Molta gente.", "translation": "很多人。"}, "usage_note": "泛指人。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "soldi", "pronunciation": ["/ˈsɔldi/"], "specific_note": "m. pl." }, { "term_target": "denaro", "pronunciation": ["/deˈnaro/"], "specific_note": "m." }], "example": {"sentence": "Non ho soldi.", "translation": "沒錢。"}, "usage_note": "Soldi 最常用。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "bambino/a", "pronunciation": ["/bamˈbino/"], "specific_note": "m./f." }], "example": {"sentence": "Piccolo bambino.", "translation": "小孩。"}, "usage_note": "兒童。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "acqua", "pronunciation": ["/ˈakkwa/"], "specific_note": "f." }], "example": {"sentence": "Bere acqua.", "translation": "喝水。"}, "usage_note": "不可數。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "cibo", "pronunciation": ["/ˈtʃibo/"], "specific_note": "m." }], "example": {"sentence": "Buon cibo.", "translation": "好吃的食物。"}, "usage_note": "吃的東西。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "amico/a", "pronunciation": ["/aˈmiko/"], "specific_note": "m./f." }], "example": {"sentence": "Mio amico.", "translation": "我朋友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "famiglia", "pronunciation": ["/faˈmiʎʎa/"], "specific_note": "f." }], "example": {"sentence": "Grande famiglia.", "translation": "大家庭。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "studente", "pronunciation": ["/stuˈdɛnte/"], "specific_note": "m." }, { "term_target": "studentessa", "pronunciation": ["/studenˈtessa/"], "specific_note": "f." }], "example": {"sentence": "Sono studente.", "translation": "我是學生。"}, "usage_note": "在學者。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "cultura", "pronunciation": ["/kulˈtura/"], "specific_note": "f." }], "example": {"sentence": "Cultura italiana.", "translation": "義大利文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "problema", "pronunciation": ["/proˈblɛma/"], "specific_note": "m." }], "example": {"sentence": "Nessun problema.", "translation": "沒問題。"}, "usage_note": "陽性名詞 (Il problema)。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "azienda", "pronunciation": ["/adˈdzjɛnda/"], "specific_note": "f." }, { "term_target": "ditta", "pronunciation": ["/ˈditta/"], "specific_note": "f." }], "example": {"sentence": "Grande azienda.", "translation": "大公司。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "uomo", "pronunciation": ["/ˈwɔmo/"], "specific_note": "m." }], "example": {"sentence": "È un uomo.", "translation": "他是男人。"}, "usage_note": "性別。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "donna", "pronunciation": ["/ˈdɔnna/"], "specific_note": "f." }], "example": {"sentence": "È una donna.", "translation": "她是女人。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "scuola", "pronunciation": ["/ˈskwɔla/"], "specific_note": "f." }], "example": {"sentence": "Andare a scuola.", "translation": "去學校。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "insegnante", "pronunciation": ["/inseɲˈɲante/"], "specific_note": "m./f." }, { "term_target": "professore", "pronunciation": ["/profesˈsore/"], "specific_note": "m." }], "example": {"sentence": "Insegnante di italiano.", "translation": "義大利語老師。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "film", "pronunciation": ["/film/"], "specific_note": "m." }], "example": {"sentence": "Guardare un film.", "translation": "看電影。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "cellulare", "pronunciation": ["/tʃelluˈlare/"], "specific_note": "m." }, { "term_target": "telefonino", "pronunciation": ["/telefoˈnino/"], "specific_note": "m." }], "example": {"sentence": "Il mio cellulare.", "translation": "我手機。"}, "usage_note": "電話。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "computer", "pronunciation": ["/komˈpjuter/"], "specific_note": "m." }], "example": {"sentence": "Usare il computer.", "translation": "用電腦。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "macchina", "pronunciation": ["/ˈmakkina/"], "specific_note": "f." }, { "term_target": "auto", "pronunciation": ["/ˈauto/"], "specific_note": "f." }], "example": {"sentence": "Guidare la macchina.", "translation": "開車。"}, "usage_note": "汽車。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "mercato", "pronunciation": ["/merˈkato/"], "specific_note": "m." }], "example": {"sentence": "Andare al mercato.", "translation": "去市場。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "vestiti", "pronunciation": ["/vesˈtiti/"], "specific_note": "m. pl." }, { "term_target": "abbigliamento", "pronunciation": ["/abbiʎʎaˈmento/"], "specific_note": "m. (服裝)" }], "example": {"sentence": "Comprare vestiti.", "translation": "買衣服。"}, "usage_note": "衣物。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "negozio", "pronunciation": ["/neˈɡɔttsjo/"], "specific_note": "m." }], "example": {"sentence": "Negozio di vestiti.", "translation": "服飾店。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "autobus", "pronunciation": ["/ˈautobus/"], "specific_note": "m." }], "example": {"sentence": "Prendere l'autobus.", "translation": "搭公車。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "strada", "pronunciation": ["/ˈstrada/"], "specific_note": "f." }, { "term_target": "via", "pronunciation": ["/ˈvia/"], "specific_note": "f." }], "example": {"sentence": "Per strada.", "translation": "在街上。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "casa", "pronunciation": ["/ˈkaza/"], "specific_note": "f." }], "example": {"sentence": "La mia casa.", "translation": "我家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "madre", "pronunciation": ["/ˈmadre/"], "specific_note": "f." }, { "term_target": "mamma", "pronunciation": ["/ˈmamma/"], "specific_note": "f. (口語)" }], "example": {"sentence": "Mia madre.", "translation": "我媽媽。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "padre", "pronunciation": ["/ˈpadre/"], "specific_note": "m." }, { "term_target": "papà", "pronunciation": ["/paˈpa/"], "specific_note": "m. (口語)" }], "example": {"sentence": "Mio padre.", "translation": "我爸爸。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "fratello", "pronunciation": ["/fraˈtɛllo/"], "specific_note": "m." }], "example": {"sentence": "Mio fratello.", "translation": "我兄弟。"}, "usage_note": "兄弟。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "sorella", "pronunciation": ["/soˈrɛlla/"], "specific_note": "f." }], "example": {"sentence": "Mia sorella.", "translation": "我姐妹。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "cinese", "pronunciation": ["/tʃiˈneze/"], "specific_note": "m." }], "example": {"sentence": "Parlare cinese.", "translation": "說中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "mattina", "pronunciation": ["/matˈtina/"], "specific_note": "f." }], "example": {"sentence": "Di mattina.", "translation": "在早晨。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "notte", "pronunciation": ["/ˈnɔtte/"], "specific_note": "f." }], "example": {"sentence": "Buonanotte.", "translation": "晚安。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "biglietto", "pronunciation": ["/biʎˈʎetto/"], "specific_note": "m." }], "example": {"sentence": "Un biglietto, per favore.", "translation": "請給我一張票。"}, "usage_note": "票。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "borsa", "pronunciation": ["/ˈborsa/"], "specific_note": "f." }], "example": {"sentence": "Grande borsa.", "translation": "大包包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "tazza", "pronunciation": ["/ˈtattsa/"], "specific_note": "f. (有耳)" }, { "term_target": "bicchiere", "pronunciation": ["/bikˈkjɛre/"], "specific_note": "m. (玻璃杯)" }], "example": {"sentence": "Tazza di tè.", "translation": "一杯茶。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "medico", "pronunciation": ["/ˈmɛdiko/"], "specific_note": "m." }, { "term_target": "dottore", "pronunciation": ["/dotˈtore/"], "specific_note": "m." }], "example": {"sentence": "Vedere un medico.", "translation": "看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "polizia", "pronunciation": ["/poliˈttsja/"], "specific_note": "f." }], "example": {"sentence": "Chiamare la polizia.", "translation": "叫警察。"}, "usage_note": "警察。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "ospedale", "pronunciation": ["/ospeˈdale/"], "specific_note": "m." }], "example": {"sentence": "Andare all'ospedale.", "translation": "去醫院。"}, "usage_note": "醫療院所。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "posto", "pronunciation": ["/ˈpɔsto/"], "specific_note": "m." }, { "term_target": "sedile", "pronunciation": ["/seˈdile/"], "specific_note": "m." }], "example": {"sentence": "Prendere posto.", "translation": "請坐。"}, "usage_note": "位子。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "porta", "pronunciation": ["/ˈpɔrta/"], "specific_note": "f." }], "example": {"sentence": "Aprire la porta.", "translation": "開門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "camera", "pronunciation": ["/ˈkamera/"], "specific_note": "f." }, { "term_target": "stanza", "pronunciation": ["/ˈstantsa/"], "specific_note": "f." }], "example": {"sentence": "La mia camera.", "translation": "我房間。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "stazione", "pronunciation": ["/staˈttsjone/"], "specific_note": "f. (火車)" }, { "term_target": "fermata", "pronunciation": ["/ferˈmata/"], "specific_note": "f. (公車)" }], "example": {"sentence": "Stazione ferroviaria.", "translation": "火車站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "metropolitana", "pronunciation": ["/metropoliˈtana/"], "specific_note": "f." }, { "term_target": "metro", "pronunciation": ["/ˈmɛtro/"], "specific_note": "f. (簡稱)" }], "example": {"sentence": "Stazione metro.", "translation": "地鐵站。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "treno", "pronunciation": ["/ˈtrɛno/"], "specific_note": "m." }], "example": {"sentence": "Viaggiare in treno.", "translation": "搭火車旅行。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "aeroporto", "pronunciation": ["/aeroˈpɔrto/"], "specific_note": "m." }], "example": {"sentence": "Andare all'aeroporto.", "translation": "去機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "bagagli", "pronunciation": ["/baˈɡaʎʎi/"], "specific_note": "m. pl." }], "example": {"sentence": "Molti bagagli.", "translation": "很多行李。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "mappa", "pronunciation": ["/ˈmappa/"], "specific_note": "f." }, { "term_target": "cartina", "pronunciation": ["/karˈtina/"], "specific_note": "f." }], "example": {"sentence": "Guardare la mappa.", "translation": "看地圖。"}, "usage_note": "指引。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "biglietteria", "pronunciation": ["/biʎʎetteˈria/"], "specific_note": "f. (售票處)" }, { "term_target": "sportello", "pronunciation": ["/sporˈtɛllo/"], "specific_note": "m. (櫃檯)" }], "example": {"sentence": "Allo sportello.", "translation": "在櫃檯。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "hall", "pronunciation": ["/ɔl/"], "specific_note": "m. (借詞)" }, { "term_target": "atrio", "pronunciation": ["/ˈatrjo/"], "specific_note": "m." }], "example": {"sentence": "Aspettare nella hall.", "translation": "在大廳等。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "prenotazione", "pronunciation": ["/prenotaˈttsjone/"], "specific_note": "f." }], "example": {"sentence": "Fare una prenotazione.", "translation": "做預約。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "check-in", "pronunciation": ["/tʃek in/"], "specific_note": "m. (借詞)" }, { "term_target": "registrazione", "pronunciation": ["/redʒistraˈttsjone/"], "specific_note": "f." }], "example": {"sentence": "Fare il check-in.", "translation": "辦理入住。"}, "usage_note": "Check-in。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "check-out", "pronunciation": ["/tʃek aut/"], "specific_note": "m. (借詞)" }], "example": {"sentence": "Orario di check-out.", "translation": "退房時間。"}, "usage_note": "Check-out。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "bevanda", "pronunciation": ["/beˈvanda/"], "specific_note": "f." }, { "term_target": "bibita", "pronunciation": ["/ˈbibita/"], "specific_note": "f. (軟飲)" }], "example": {"sentence": "Bevanda fredda.", "translation": "冷飲。"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "menu", "pronunciation": ["/meˈnu/"], "specific_note": "m." }], "example": {"sentence": "Il menu, per favore.", "translation": "請給菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "pranzo", "pronunciation": ["/ˈprandzo/"], "specific_note": "m." }], "example": {"sentence": "Mangiare il pranzo.", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "cena", "pronunciation": ["/ˈtʃena/"], "specific_note": "f." }], "example": {"sentence": "Mangiare la cena.", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "conto", "pronunciation": ["/ˈkonto/"], "specific_note": "m." }], "example": {"sentence": "Il conto, per favore.", "translation": "麻煩結帳。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "prezzo", "pronunciation": ["/ˈprɛttso/"], "specific_note": "m." }], "example": {"sentence": "Buon prezzo.", "translation": "好價格。"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "ricevuta", "pronunciation": ["/ritʃeˈvuta/"], "specific_note": "f." }, { "term_target": "scontrino", "pronunciation": ["/skonˈtrino/"], "specific_note": "m. (小票)" }], "example": {"sentence": "La ricevuta, per favore.", "translation": "請給收據。"}, "usage_note": "證明。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "taglia", "pronunciation": ["/ˈtaʎʎa/"], "specific_note": "f. (衣服)" }, { "term_target": "misura", "pronunciation": ["/miˈzura/"], "specific_note": "f. (大小)" }], "example": {"sentence": "Taglia grande.", "translation": "大尺寸。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "entrata", "pronunciation": ["/enˈtrata/"], "specific_note": "f." }, { "term_target": "ingresso", "pronunciation": ["/inˈɡrɛsso/"], "specific_note": "m." }], "example": {"sentence": "Entrata principale.", "translation": "正門入口。"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "uscita", "pronunciation": ["/uʃˈʃita/"], "specific_note": "f." }], "example": {"sentence": "Uscita di sicurezza.", "translation": "緊急出口。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "Taiwan", "pronunciation": ["/tajˈwan/"], "specific_note": "" }], "example": {"sentence": "Amo Taiwan.", "translation": "我愛台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "一切事物", "related_terms": [{ "term_target": "tutto", "pronunciation": ["/ˈtutto/"], "specific_note": "" }], "example": {"sentence": "Tutto bene.", "translation": "一切都好。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-66", "term_zh": "錢包", "related_terms": [{ "term_target": "portafoglio", "pronunciation": ["/portaˈfɔʎʎo/"], "specific_note": "m." }], "example": {"sentence": "Perso il portafoglio.", "translation": "掉了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-67", "term_zh": "身分證", "related_terms": [{ "term_target": "carta d'identità", "pronunciation": ["/ˈkarta didɛntiˈta/"], "specific_note": "f." }], "example": {"sentence": "Mostrare la carta d'identità.", "translation": "出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-68", "term_zh": "餐廳", "related_terms": [{ "term_target": "ristorante", "pronunciation": ["/ristoˈrante/"], "specific_note": "m." }], "example": {"sentence": "Buon ristorante.", "translation": "好餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-69", "term_zh": "飯店", "related_terms": [{ "term_target": "hotel", "pronunciation": ["/oˈtɛl/"], "specific_note": "m." }, { "term_target": "albergo", "pronunciation": ["/alˈbɛrɡo/"], "specific_note": "m." }], "example": {"sentence": "Prenotare un hotel.", "translation": "訂飯店。"}, "usage_note": "住宿。", "image_file": "hotel.png" },
        { "id": "n-70", "term_zh": "場所", "related_terms": [{ "term_target": "posto", "pronunciation": ["/ˈpɔsto/"], "specific_note": "m." }, { "term_target": "luogo", "pronunciation": ["/ˈlwɔɡo/"], "specific_note": "m." }], "example": {"sentence": "Bel posto.", "translation": "好地方。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-71", "term_zh": "用品店員", "related_terms": [{ "term_target": "commesso/a", "pronunciation": ["/komˈmesso/"], "specific_note": "m./f." }], "example": {"sentence": "Chiedere al commesso.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-72", "term_zh": "超市", "related_terms": [{ "term_target": "supermercato", "pronunciation": ["/supermerˈkato/"], "specific_note": "m." }], "example": {"sentence": "Andare al supermercato.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-73", "term_zh": "月台", "related_terms": [{ "term_target": "binario", "pronunciation": ["/biˈnarjo/"], "specific_note": "m." }], "example": {"sentence": "Binario 1.", "translation": "第一月台。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "adesso", "pronunciation": ["/aˈdɛsso/"], "specific_note": "" }, { "term_target": "ora", "pronunciation": ["/ˈora/"], "specific_note": "" }], "example": {"sentence": "Fallo adesso.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "molto", "pronunciation": ["/ˈmolto/"], "specific_note": "" }], "example": {"sentence": "Molto bene.", "translation": "非常好。"}, "usage_note": "強調。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "veramente", "pronunciation": ["/veraˈmente/"], "specific_note": "" }, { "term_target": "davvero", "pronunciation": ["/davˈvero/"], "specific_note": "" }], "example": {"sentence": "Davvero?", "translation": "真的嗎？"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "bene", "pronunciation": ["/ˈbɛne/"], "specific_note": "" }], "example": {"sentence": "Dormire bene.", "translation": "睡得好。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "spesso", "pronunciation": ["/ˈspesso/"], "specific_note": "" }], "example": {"sentence": "Vengo spesso.", "translation": "我常來。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "di solito", "pronunciation": ["/di ˈsɔlito/"], "specific_note": "" }], "example": {"sentence": "Di solito cammino.", "translation": "通常我走路。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "già", "pronunciation": ["/dʒa/"], "specific_note": "" }], "example": {"sentence": "È già fatto.", "translation": "已經做好了。"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "solo", "pronunciation": ["/ˈsolo/"], "specific_note": "" }, { "term_target": "solamente", "pronunciation": ["/solaˈmente/"], "specific_note": "" }], "example": {"sentence": "Solo uno.", "translation": "只有一個。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "ancora", "pronunciation": ["/anˈkora/"], "specific_note": "" }, { "term_target": "di nuovo", "pronunciation": ["/di ˈnwɔvo/"], "specific_note": "" }], "example": {"sentence": "Prova ancora.", "translation": "再試一次。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "circa", "pronunciation": ["/ˈtʃirka/"], "specific_note": "" }], "example": {"sentence": "Circa 10 minuti.", "translation": "大約10分鐘。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "un po'", "pronunciation": ["/un pɔ/"], "specific_note": "" }], "example": {"sentence": "Un po' piccante.", "translation": "一點點辣。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "anche", "pronunciation": ["/ˈaŋke/"], "specific_note": "" }], "example": {"sentence": "Anch'io.", "translation": "我也是。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "forse", "pronunciation": ["/ˈforse/"], "specific_note": "" }], "example": {"sentence": "Forse più tardi.", "translation": "也許等下。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "più tardi", "pronunciation": ["/pju ˈtardi/"], "specific_note": "稍後" }, { "term_target": "dopo", "pronunciation": ["/ˈdopo/"], "specific_note": "之後" }], "example": {"sentence": "A più tardi.", "translation": "待會見。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "presto", "pronunciation": ["/ˈprɛsto/"], "specific_note": "" }], "example": {"sentence": "A presto.", "translation": "待會見(很快見)。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "insieme", "pronunciation": ["/inˈsjɛme/"], "specific_note": "" }], "example": {"sentence": "Andare insieme.", "translation": "一起去。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "ancora", "pronunciation": ["/anˈkora/"], "specific_note": "" }], "example": {"sentence": "Ancora qui.", "translation": "還在這裡。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "in generale", "pronunciation": ["/in dʒeneˈrale/"], "specific_note": "" }], "example": {"sentence": "In generale è così.", "translation": "一般是那樣。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "subito", "pronunciation": ["/ˈsubito/"], "specific_note": "" }], "example": {"sentence": "Vieni subito.", "translation": "立刻來。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "neanche", "pronunciation": ["/neˈaŋke/"], "specific_note": "" }], "example": {"sentence": "Neanch'io.", "translation": "我也不。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "che cosa", "pronunciation": ["/ke ˈkɔza/"], "specific_note": "" }, { "term_target": "cosa", "pronunciation": ["/ˈkɔza/"], "specific_note": "簡略" }], "example": {"sentence": "Che cos'è?", "translation": "這是什麼？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "come", "pronunciation": ["/ˈkome/"], "specific_note": "" }], "example": {"sentence": "Come stai?", "translation": "你好嗎？"}, "usage_note": "問狀況。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "quando", "pronunciation": ["/ˈkwando/"], "specific_note": "" }], "example": {"sentence": "Quando andiamo?", "translation": "何時去？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "dove", "pronunciation": ["/ˈdove/"], "specific_note": "" }], "example": {"sentence": "Dove sei?", "translation": "你在哪？"}, "usage_note": "問地點。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "chi", "pronunciation": ["/ki/"], "specific_note": "" }], "example": {"sentence": "Chi è?", "translation": "那是誰？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "perché", "pronunciation": ["/perˈke/"], "specific_note": "" }], "example": {"sentence": "Perché?", "translation": "為什麼？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "quale", "pronunciation": ["/ˈkwale/"], "specific_note": "" }], "example": {"sentence": "Quale preferisci?", "translation": "你喜歡哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "quanto", "pronunciation": ["/ˈkwanto/"], "specific_note": "" }], "example": {"sentence": "Quanto costa?", "translation": "多少錢？"}, "usage_note": "不可數/價格。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "quanto tempo", "pronunciation": ["/ˈkwanto ˈtɛmpo/"], "specific_note": "" }], "example": {"sentence": "Quanto tempo?", "translation": "要多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "adesso", "pronunciation": ["/aˈdɛsso/"], "specific_note": "" }, { "term_target": "ora", "pronunciation": ["/ˈora/"], "specific_note": "" }], "example": {"sentence": "Fallo adesso.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "oggi", "pronunciation": ["/ˈɔddʒi/"], "specific_note": "" }], "example": {"sentence": "Oggi fa caldo.", "translation": "今天很熱。"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "domani", "pronunciation": ["/doˈmani/"], "specific_note": "" }], "example": {"sentence": "A domani.", "translation": "明天見。"}, "usage_note": "隔天。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "ieri", "pronunciation": ["/ˈjɛri/"], "specific_note": "" }], "example": {"sentence": "Ieri ero lì.", "translation": "昨天我去了。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "qui", "pronunciation": ["/kwi/"], "specific_note": "" }, { "term_target": "qua", "pronunciation": ["/kwa/"], "specific_note": "" }], "example": {"sentence": "Vieni qui.", "translation": "來這。"}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "lì", "pronunciation": ["/li/"], "specific_note": "" }, { "term_target": "là", "pronunciation": ["/la/"], "specific_note": "" }], "example": {"sentence": "Vai là.", "translation": "去那。"}, "usage_note": "遠處。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "giorno", "pronunciation": ["/ˈdʒorno/"], "specific_note": "" }], "example": {"sentence": "Un giorno.", "translation": "一天。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "anno", "pronunciation": ["/ˈanno/"], "specific_note": "" }], "example": {"sentence": "Quest'anno.", "translation": "今年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "mese", "pronunciation": ["/ˈmeze/"], "specific_note": "" }], "example": {"sentence": "Questo mese.", "translation": "這個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "settimana", "pronunciation": ["/settiˈmana/"], "specific_note": "" }], "example": {"sentence": "La prossima settimana.", "translation": "下週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "mattina", "pronunciation": ["/matˈtina/"], "specific_note": "" }], "example": {"sentence": "Di mattina.", "translation": "在早上。"}, "usage_note": "上午。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "pomeriggio", "pronunciation": ["/pomeˈriddʒo/"], "specific_note": "" }], "example": {"sentence": "Buon pomeriggio.", "translation": "午安。"}, "usage_note": "PM。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "sera", "pronunciation": ["/ˈsera/"], "specific_note": "晚間" }, { "term_target": "notte", "pronunciation": ["/ˈnɔtte/"], "specific_note": "夜晚" }], "example": {"sentence": "Buonasera.", "translation": "晚安(晚上好)。"}, "usage_note": "傍晚到睡前。", "image_file": "evening.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "mezzogiorno", "pronunciation": ["/mɛddzoˈdʒorno/"], "specific_note": "" }], "example": {"sentence": "A mezzogiorno.", "translation": "在中午。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "davanti", "pronunciation": ["/daˈvanti/"], "specific_note": "" }], "example": {"sentence": "Davanti a me.", "translation": "在我前面。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "dietro", "pronunciation": ["/ˈdjɛtro/"], "specific_note": "" }], "example": {"sentence": "Dietro la porta.", "translation": "門後。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "sinistra", "pronunciation": ["/siˈnistra/"], "specific_note": "" }], "example": {"sentence": "A sinistra.", "translation": "左轉。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "destra", "pronunciation": ["/ˈdɛstra/"], "specific_note": "" }], "example": {"sentence": "A destra.", "translation": "右轉。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "accanto", "pronunciation": ["/akˈkanto/"], "specific_note": "" }, { "term_target": "vicino", "pronunciation": ["/viˈtʃino/"], "specific_note": "" }], "example": {"sentence": "Accanto a me.", "translation": "坐我旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "di fronte", "pronunciation": ["/di ˈfronte/"], "specific_note": "" }], "example": {"sentence": "Di fronte alla banca.", "translation": "銀行對面。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "primavera", "pronunciation": ["/primaˈvɛra/"], "specific_note": "" }], "example": {"sentence": "La primavera.", "translation": "春天。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "estate", "pronunciation": ["/esˈtate/"], "specific_note": "" }], "example": {"sentence": "Estate calda.", "translation": "炎熱的夏天。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "autunno", "pronunciation": ["/auˈtunno/"], "specific_note": "" }], "example": {"sentence": "Autunno fresco.", "translation": "涼爽的秋天。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "inverno", "pronunciation": ["/inˈvɛrno/"], "specific_note": "" }], "example": {"sentence": "Inverno freddo.", "translation": "寒冷的冬天。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "zero", "pronunciation": ["/ˈdzɛro/"], "specific_note": "" }], "example": {"sentence": "Zero gradi.", "translation": "零度。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "uno", "pronunciation": ["/ˈuno/"], "specific_note": "" }], "example": {"sentence": "Un minuto.", "translation": "一分鐘(Un/Una)。"}, "usage_note": "一。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "due", "pronunciation": ["/ˈdue/"], "specific_note": "" }], "example": {"sentence": "Due giorni.", "translation": "兩天。"}, "usage_note": "二。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "tre", "pronunciation": ["/tre/"], "specific_note": "" }], "example": {"sentence": "Tre persone.", "translation": "三人。"}, "usage_note": "三。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "quattro", "pronunciation": ["/ˈkwattro/"], "specific_note": "" }], "example": {"sentence": "Quattro stagioni.", "translation": "四季。"}, "usage_note": "四。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "cinque", "pronunciation": ["/ˈtʃiŋkwe/"], "specific_note": "" }], "example": {"sentence": "Cinque euro.", "translation": "五歐元。"}, "usage_note": "五。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "sei", "pronunciation": ["/sɛi/"], "specific_note": "" }], "example": {"sentence": "Sei ore.", "translation": "六小時。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "sette", "pronunciation": ["/ˈsɛtte/"], "specific_note": "" }], "example": {"sentence": "Sette giorni.", "translation": "七天。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "otto", "pronunciation": ["/ˈɔtto/"], "specific_note": "" }], "example": {"sentence": "Otto anni.", "translation": "八歲。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "nove", "pronunciation": ["/ˈnɔve/"], "specific_note": "" }], "example": {"sentence": "Nove ore.", "translation": "九點。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "dieci", "pronunciation": ["/ˈdjɛtʃi/"], "specific_note": "" }], "example": {"sentence": "Dieci euro.", "translation": "十歐元。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "undici", "pronunciation": ["/ˈunditʃi/"], "specific_note": "" }], "example": {"sentence": "Undici anni.", "translation": "11歲。"}, "usage_note": "十一。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "dodici", "pronunciation": ["/ˈdoditʃi/"], "specific_note": "" }], "example": {"sentence": "Dodici mesi.", "translation": "12個月。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "quindici", "pronunciation": ["/ˈkwinditʃi/"], "specific_note": "" }], "example": {"sentence": "Quindici minuti.", "translation": "15分鐘。"}, "usage_note": "十五。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "venti", "pronunciation": ["/ˈventi/"], "specific_note": "" }], "example": {"sentence": "Venti euro.", "translation": "20歐元。"}, "usage_note": "二十。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "cinquanta", "pronunciation": ["/tʃiŋˈkwanta/"], "specific_note": "" }], "example": {"sentence": "Cinquanta per cento.", "translation": "50%。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "cento", "pronunciation": ["/ˈtʃɛnto/"], "specific_note": "" }], "example": {"sentence": "Cento punti.", "translation": "一百分。"}, "usage_note": "百。", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "mille", "pronunciation": ["/ˈmille/"], "specific_note": "" }], "example": {"sentence": "Mille grazie.", "translation": "萬分感謝(一千個謝謝)。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "diecimila", "pronunciation": ["/djɛtʃiˈmila/"], "specific_note": "" }], "example": {"sentence": "Diecimila dollari.", "translation": "一萬元。"}, "usage_note": "一萬。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是...", "related_terms": [{ "term_target": "Io sono...", "pronunciation": ["/ˈio ˈsono/"], "specific_note": "" }], "example": {"sentence": "Io sono studente.", "translation": "我是學生。"}, "usage_note": "本質/身分。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫...", "related_terms": [{ "term_target": "Mi chiamo...", "pronunciation": ["/mi ˈkjamo/"], "specific_note": "" }], "example": {"sentence": "Mi chiamo Marco.", "translation": "我的名字叫馬可。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做...", "related_terms": [{ "term_target": "Io faccio...", "pronunciation": ["/ˈio ˈfattʃo/"], "specific_note": "" }], "example": {"sentence": "Io faccio i compiti.", "translation": "我做作業。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做...", "related_terms": [{ "term_target": "Sto ...-ando/-endo", "pronunciation": ["/stɔ/"], "specific_note": "" }], "example": {"sentence": "Sto mangiando.", "translation": "我正在吃。"}, "usage_note": "進行式 Stare + 副動詞。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠...", "related_terms": [{ "term_target": "Posso...", "pronunciation": ["/ˈpɔsso/"], "specific_note": "" }], "example": {"sentence": "Posso nuotare.", "translation": "我會游泳。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做...", "related_terms": [{ "term_target": "Mi piace...", "pronunciation": ["/mi ˈpjatʃe/"], "specific_note": "" }], "example": {"sentence": "Mi piace leggere.", "translation": "我喜歡閱讀。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經...", "related_terms": [{ "term_target": "Ero...", "pronunciation": ["/ˈɛro/"], "specific_note": "狀態" }], "example": {"sentence": "Ero studente.", "translation": "我曾經是學生。"}, "usage_note": "過去狀態 (Imperfetto)。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過...", "related_terms": [{ "term_target": "Ho fatto...", "pronunciation": ["/ɔ ˈfatto/"], "specific_note": "動作" }], "example": {"sentence": "Ho fatto i compiti.", "translation": "我做了功課。"}, "usage_note": "過去動作 (Passato Prossimo)。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過...", "related_terms": [{ "term_target": "Ho già...", "pronunciation": ["/ɔ dʒa/"], "specific_note": "" }], "example": {"sentence": "Ho già mangiato.", "translation": "我已經吃過了。"}, "usage_note": "完成式。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過...", "related_terms": [{ "term_target": "Sono stato a...", "pronunciation": ["/ˈsono ˈstato a/"], "specific_note": "" }], "example": {"sentence": "Sono stato in Italia.", "translation": "我曾經去過義大利。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算...", "related_terms": [{ "term_target": "Vado a...", "pronunciation": ["/ˈvado a/"], "specific_note": "將要" }], "example": {"sentence": "Vado a partire.", "translation": "我將要離開。"}, "usage_note": "未來式。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是...嗎？", "related_terms": [{ "term_target": "Sei...", "pronunciation": ["/sɛi/"], "specific_note": "非正式" }, { "term_target": "È...", "pronunciation": ["/ɛ/"], "specific_note": "正式" }], "example": {"sentence": "Sei studente?", "translation": "你是學生嗎？"}, "usage_note": "問狀態。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做...嗎？", "related_terms": [{ "term_target": "Fai...?", "pronunciation": ["/fai/"], "specific_note": "" }], "example": {"sentence": "Fai sport?", "translation": "你有運動嗎？"}, "usage_note": "一般疑問句。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經...嗎？", "related_terms": [{ "term_target": "Hai mai...?", "pronunciation": ["/ai mai/"], "specific_note": "" }], "example": {"sentence": "Hai mai visto questo?", "translation": "你有看過這個嗎？"}, "usage_note": "問經驗。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做...？", "related_terms": [{ "term_target": "Quando...?", "pronunciation": ["/ˈkwando/"], "specific_note": "" }], "example": {"sentence": "Quando dormi?", "translation": "你何時睡？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去...？", "related_terms": [{ "term_target": "Quando vai a...?", "pronunciation": ["/ˈkwando vai a/"], "specific_note": "" }], "example": {"sentence": "Quando vai a scuola?", "translation": "你何時去學校？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做...？", "related_terms": [{ "term_target": "Dove...?", "pronunciation": ["/ˈdove/"], "specific_note": "" }], "example": {"sentence": "Dove abiti?", "translation": "你住哪裡？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做...？", "related_terms": [{ "term_target": "Come fai...?", "pronunciation": ["/ˈkome fai/"], "specific_note": "" }], "example": {"sentence": "Come fai questo?", "translation": "你怎麼做這個？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去...？", "related_terms": [{ "term_target": "Come vai a...?", "pronunciation": ["/ˈkome vai a/"], "specific_note": "" }], "example": {"sentence": "Come vai a scuola?", "translation": "你怎麼去學校？"}, "usage_note": "問交通方式。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是...", "related_terms": [{ "term_target": "Non sono...", "pronunciation": ["/non ˈsono/"], "specific_note": "" }], "example": {"sentence": "Non sono medico.", "translation": "我不是醫生。"}, "usage_note": "否定身分。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做...", "related_terms": [{ "term_target": "Non (verbo)...", "pronunciation": ["/non/"], "specific_note": "" }], "example": {"sentence": "Non fumo.", "translation": "我不抽菸。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能...", "related_terms": [{ "term_target": "Non posso...", "pronunciation": ["/non ˈpɔsso/"], "specific_note": "" }], "example": {"sentence": "Non posso andare.", "translation": "我不能去。"}, "usage_note": "否定能力。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾...", "related_terms": [{ "term_target": "Non ho mai...", "pronunciation": ["/non ɔ mai/"], "specific_note": "" }], "example": {"sentence": "Non ho mai mangiato questo.", "translation": "我沒吃過這個。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必...", "related_terms": [{ "term_target": "Non devo...", "pronunciation": ["/non ˈdevo/"], "specific_note": "" }], "example": {"sentence": "Non devo andare.", "translation": "我不必去。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果...的話", "related_terms": [{ "term_target": "Se..., ...", "pronunciation": ["/se/"], "specific_note": "" }], "example": {"sentence": "Se vuoi, andiamo.", "translation": "如果你想，我們走。"}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當...時", "related_terms": [{ "term_target": "Quando..., ...", "pronunciation": ["/ˈkwando/"], "specific_note": "" }], "example": {"sentence": "Quando mangio, sono felice.", "translation": "當我吃東西時，我很開心。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你...好嗎？", "related_terms": [{ "term_target": "Puoi...?", "pronunciation": ["/pwɔi/"], "specific_note": "非正式" }, { "term_target": "Può...?", "pronunciation": ["/pwɔ/"], "specific_note": "正式" }], "example": {"sentence": "Puoi aiutarmi?", "translation": "可以幫我嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做...吧！", "related_terms": [{ "term_target": "Andiamo a...", "pronunciation": ["/anˈdjamo a/"], "specific_note": "" }], "example": {"sentence": "Andiamo a mangiare.", "translation": "我們去吃吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為...", "related_terms": [{ "term_target": "Penso che...", "pronunciation": ["/ˈpɛnso ke/"], "specific_note": "" }], "example": {"sentence": "Penso che sia buono.", "translation": "我認為這很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做...", "related_terms": [{ "term_target": "Voglio...", "pronunciation": ["/ˈvɔʎʎo/"], "specific_note": "" }], "example": {"sentence": "Voglio andare.", "translation": "我想離開。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做...", "related_terms": [{ "term_target": "Devo...", "pronunciation": ["/ˈdevo/"], "specific_note": "" }], "example": {"sentence": "Devo lavorare.", "translation": "我必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "È ... (infinito)", "pronunciation": ["/ɛ/"], "specific_note": "" }], "example": {"sentence": "È bello mangiare.", "translation": "吃東西是很好的。"}, "usage_note": "描述動作。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我...嗎？", "related_terms": [{ "term_target": "Puoi aiutarmi a...?", "pronunciation": ["/pwɔi ajuˈtarmi a/"], "specific_note": "" }], "example": {"sentence": "Puoi aiutarmi a pulire?", "translation": "你可以幫我打掃嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以...嗎？", "related_terms": [{ "term_target": "Posso...?", "pronunciation": ["/ˈpɔsso/"], "specific_note": "" }], "example": {"sentence": "Posso entrare?", "translation": "我可以進來嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡...", "related_terms": [{ "term_target": "Non mi piace...", "pronunciation": ["/non mi ˈpjatʃe/"], "specific_note": "" }], "example": {"sentence": "Non mi piace questo.", "translation": "我不喜歡這個。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡...", "related_terms": [{ "term_target": "Preferisco...", "pronunciation": ["/prefeˈrisko/"], "specific_note": "" }], "example": {"sentence": "Preferisco il tè.", "translation": "我比較喜歡茶。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更...", "related_terms": [{ "term_target": "A è più ... di B", "pronunciation": ["/A ɛ pju ... di B/"], "specific_note": "" }], "example": {"sentence": "Questo è più costoso di quello.", "translation": "這比那個貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有...（存在）", "related_terms": [{ "term_target": "C'è...", "pronunciation": ["/tʃɛ/"], "specific_note": "單數" }, { "term_target": "Ci sono...", "pronunciation": ["/tʃi ˈsono/"], "specific_note": "複數" }], "example": {"sentence": "C'è un cane.", "translation": "有一隻狗。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}