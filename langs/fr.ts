import { AppData } from '../types';

export const frenchData: AppData ={
  "meta": {
    "source_language": "zh-TW",
    "target_language": "fr-FR",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 法語完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)"
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
            { "term_target": "Bonjour", "pronunciation": ["/bɔ̃.ʒuʁ/"], "specific_note": "白天通用/正式" },
            { "term_target": "Salut", "pronunciation": ["/sa.ly/"], "specific_note": "朋友/平輩" }
          ],
          "example": { "sentence": "Bonjour, comment allez-vous ?", "translation": "你好，您好嗎？" },
          "usage_note": "Bonjour 是最標準的問候。",
          "image_file": "hello.png"
        },
        {
          "id": "greet-002",
          "term_zh": "再見",
          "related_terms": [
            { "term_target": "Au revoir", "pronunciation": ["/o ʁə.vwaʁ/"], "specific_note": "正式" },
            { "term_target": "Salut", "pronunciation": ["/sa.ly/"], "specific_note": "口語(Bye)" },
            { "term_target": "À bientôt", "pronunciation": ["/a bjɛ̃.to/"], "specific_note": "待會見" }
          ],
          "example": { "sentence": "Au revoir, à demain.", "translation": "再見，明天見。" },
          "usage_note": "Salut 既可以是你好也可以是再見。",
          "image_file": "goodbye.png"
        },
        {
          "id": "greet-003",
          "term_zh": "謝謝你",
          "related_terms": [
            { "term_target": "Merci", "pronunciation": ["/mɛʁ.si/"], "specific_note": "通用" },
            { "term_target": "Merci beaucoup", "pronunciation": ["/mɛʁ.si bo.ku/"], "specific_note": "非常感謝" }
          ],
          "example": { "sentence": "Merci beaucoup pour votre aide.", "translation": "非常謝謝您的幫忙。" },
          "usage_note": "回應可用 De rien (不客氣)。",
          "image_file": "thank_you.png"
        },
        {
          "id": "greet-004",
          "term_zh": "對不起",
          "related_terms": [
            { "term_target": "Désolé", "pronunciation": ["/de.zɔ.le/"], "specific_note": "抱歉(形容詞)" },
            { "term_target": "Pardon", "pronunciation": ["/paʁ.dɔ̃/"], "specific_note": "原諒我/藉過" }
          ],
          "example": { "sentence": "Je suis désolé, je suis en retard.", "translation": "對不起，我遲到了。" },
          "usage_note": "Désolé 是表達遺憾，Pardon 常用於碰撞或沒聽清。",
          "image_file": "sorry.png"
        },
        {
          "id": "greet-005",
          "term_zh": "早安",
          "related_terms": [
            { "term_target": "Bonjour", "pronunciation": ["/bɔ̃.ʒuʁ/"], "specific_note": "" }
          ],
          "example": { "sentence": "Bonjour Maman.", "translation": "早安，媽。" },
          "usage_note": "法語早安和你好都用 Bonjour。",
          "image_file": "good_morning.png"
        },
        {
          "id": "greet-006",
          "term_zh": "請問...",
          "related_terms": [
            { "term_target": "Excusez-moi", "pronunciation": ["/ɛk.sky.ze mwa/"], "specific_note": "引起注意(尊稱)" },
            { "term_target": "S'il vous plaît", "pronunciation": ["/sil vu plɛ/"], "specific_note": "麻煩一下/請" }
          ],
          "example": { "sentence": "Excusez-moi, où sont les toilettes ?", "translation": "請問，廁所在哪裡？" },
          "usage_note": "發問前用 Excusez-moi 很禮貌。",
          "image_file": "excuse_me.png"
        },
        {
          "id": "greet-007",
          "term_zh": "借過",
          "related_terms": [
            { "term_target": "Pardon", "pronunciation": ["/paʁ.dɔ̃/"], "specific_note": "通用" },
            { "term_target": "Excusez-moi", "pronunciation": ["/ɛk.sky.ze mwa/"], "specific_note": "正式" }
          ],
          "example": { "sentence": "Pardon, je voudrais passer.", "translation": "借過，我想過去。" },
          "usage_note": "請求讓路。",
          "image_file": "excuse_me_pass.png"
        },
        {
          "id": "greet-008",
          "term_zh": "我不懂",
          "related_terms": [
            { "term_target": "Je ne comprends pas", "pronunciation": ["/ʒə nə kɔ̃.pʁɑ̃ pa/"], "specific_note": "" }
          ],
          "example": { "sentence": "Désolé, je ne comprends pas le français.", "translation": "抱歉，我不懂法語。" },
          "usage_note": "Comprendre 是「理解/懂」。",
          "image_file": "dont_understand.png"
        },
        {
          "id": "greet-009",
          "term_zh": "這是什麼？",
          "related_terms": [
            { "term_target": "Qu'est-ce que c'est ?", "pronunciation": ["/kɛs kə sɛ/"], "specific_note": "" }
          ],
          "example": { "sentence": "Qu'est-ce que c'est ? C'est de la nourriture ?", "translation": "這是什麼？是食物嗎？" },
          "usage_note": "指著東西問。",
          "image_file": "what_is_this.png"
        },
        {
          "id": "greet-010",
          "term_zh": "我想要這個",
          "related_terms": [
            { "term_target": "Je voudrais ça", "pronunciation": ["/ʒə vu.dʁɛ sa/"], "specific_note": "我想要(禮貌)" },
            { "term_target": "Je veux ça", "pronunciation": ["/ʒə vø sa/"], "specific_note": "我要(直接)" }
          ],
          "example": { "sentence": "Je voudrais ça, s'il vous plaît.", "translation": "麻煩給我這個。" },
          "usage_note": "購物點餐建議用 Je voudrais (條件式) 比較禮貌。",
          "image_file": "i_want_this.png"
        },
        {
          "id": "greet-011",
          "term_zh": "請給我...",
          "related_terms": [
            { "term_target": "Donnez-moi ..., s'il vous plaît", "pronunciation": ["/dɔ.ne mwa ... sil vu plɛ/"], "specific_note": "請給我" },
            { "term_target": "Je prends ...", "pronunciation": ["/ʒə pʁɑ̃/"], "specific_note": "我要...(點餐)" }
          ],
          "example": { "sentence": "Donnez-moi de l'eau, s'il vous plaît.", "translation": "請給我水。" },
          "usage_note": "S'il vous plaît (請) 必加。",
          "image_file": "please_give_me.png"
        },
        {
          "id": "greet-012",
          "term_zh": "廁所在哪裡？",
          "related_terms": [
            { "term_target": "Où sont les toilettes ?", "pronunciation": ["/u sɔ̃ le twa.lɛt/"], "specific_note": "" }
          ],
          "example": { "sentence": "Excusez-moi, où sont les toilettes ?", "translation": "不好意思，廁所在哪裡？" },
          "usage_note": "旅遊必備。",
          "image_file": "where_bathroom.png"
        },
        {
          "id": "greet-013",
          "term_zh": "多少錢？",
          "related_terms": [
            { "term_target": "C'est combien ?", "pronunciation": ["/sɛ kɔ̃.bjɛ̃/"], "specific_note": "這多少錢" },
            { "term_target": "Ça coûte combien ?", "pronunciation": ["/sa kut kɔ̃.bjɛ̃/"], "specific_note": "這花費多少" }
          ],
          "example": { "sentence": "C'est combien ?", "translation": "這多少錢？" },
          "usage_note": "購物用語。",
          "image_file": "how_much.png"
        },
        {
          "id": "greet-014",
          "term_zh": "請幫我",
          "related_terms": [
            { "term_target": "Aidez-moi, s'il vous plaît", "pronunciation": ["/e.de mwa sil vu plɛ/"], "specific_note": "正式" },
            { "term_target": "Au secours", "pronunciation": ["/o s.kuʁ/"], "specific_note": "救命(緊急)" }
          ],
          "example": { "sentence": "Pouvez-vous m'aider ?", "translation": "您可以幫我嗎？" },
          "usage_note": "Aider 是「幫助」。",
          "image_file": "help_me.png"
        },
        {
          "id": "greet-015",
          "term_zh": "你可以再說一次嗎？",
          "related_terms": [
            { "term_target": "Pouvez-vous répéter ?", "pronunciation": ["/pu.ve vu ʁe.pe.te/"], "specific_note": "正式" },
            { "term_target": "Pardon ?", "pronunciation": ["/paʁ.dɔ̃/"], "specific_note": "蛤?(口語)" }
          ],
          "example": { "sentence": "Je n'ai pas compris, pouvez-vous répéter ?", "translation": "我沒聽懂，能再說一次嗎？" },
          "usage_note": "Répéter 是「重複」。",
          "image_file": "say_again.png"
        },
        {
          "id": "greet-016",
          "term_zh": "你可以講慢一點嗎？",
          "related_terms": [
            { "term_target": "Pouvez-vous parler plus lentement ?", "pronunciation": ["/pu.ve vu paʁ.le ply lɑ̃t.mɑ̃/"], "specific_note": "正式" }
          ],
          "example": { "sentence": "S'il vous plaît, parlez plus lentement.", "translation": "拜託講慢一點。" },
          "usage_note": "Lentement 意思是「慢地」。",
          "image_file": "speak_slowly.png"
        }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個/它", "related_terms": [{ "term_target": "ça", "pronunciation": ["/sa/"], "specific_note": "那個(口語)" }, { "term_target": "cela", "pronunciation": ["/sə.la/"], "specific_note": "那個(書面)" }], "example": {"sentence": "Qu'est-ce que c'est que ça ?", "translation": "那是什麼？"}, "usage_note": "Ça 是最常用的指示代名詞。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "je", "pronunciation": ["/ʒə/"], "specific_note": "主詞" }, { "term_target": "moi", "pronunciation": ["/mwa/"], "specific_note": "強調/受詞" }], "example": {"sentence": "Je suis Taïwanais.", "translation": "我是台灣人。"}, "usage_note": "母音前變成 J' (如 J'aime)。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "tu", "pronunciation": ["/ty/"], "specific_note": "非正式" }, { "term_target": "vous", "pronunciation": ["/vu/"], "specific_note": "正式/複數" }], "example": {"sentence": "Qui es-tu ?", "translation": "你是誰？"}, "usage_note": "對陌生人或長輩務必用 Vous。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他", "related_terms": [{ "term_target": "il", "pronunciation": ["/il/"], "specific_note": "" }], "example": {"sentence": "Il est mon père.", "translation": "他是我爸。"}, "usage_note": "男性。", "image_file": "he.png" },
        { "id": "pro-05", "term_zh": "她的", "related_terms": [{ "term_target": "son / sa / ses", "pronunciation": ["/sɔ̃/", "/sa/", "/se/"], "specific_note": "依物品性別" }], "example": {"sentence": "Son sac.", "translation": "她的包包(Sac是陽性)。"}, "usage_note": "所有格依「物品」性別，不依擁有者。", "image_file": "her.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "nous", "pronunciation": ["/nu/"], "specific_note": "標準" }, { "term_target": "on", "pronunciation": ["/ɔ̃/"], "specific_note": "口語(動詞用單數)" }], "example": {"sentence": "Nous sommes une famille.", "translation": "我們是家人。"}, "usage_note": "口語常用 On 代替 Nous。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "她", "related_terms": [{ "term_target": "elle", "pronunciation": ["/ɛl/"], "specific_note": "" }], "example": {"sentence": "Elle est belle.", "translation": "她很漂亮。"}, "usage_note": "女性。", "image_file": "she.png" },
        { "id": "pro-08", "term_zh": "他們", "related_terms": [{ "term_target": "ils", "pronunciation": ["/il/"], "specific_note": "陽性/混合" }, { "term_target": "elles", "pronunciation": ["/ɛl/"], "specific_note": "陰性" }], "example": {"sentence": "Ils mangent.", "translation": "他們在吃。"}, "usage_note": "S 不發音，母音前連誦。", "image_file": "they.png" },
        { "id": "pro-09", "term_zh": "這個", "related_terms": [{ "term_target": "ceci", "pronunciation": ["/sə.si/"], "specific_note": "這個" }, { "term_target": "ça", "pronunciation": ["/sa/"], "specific_note": "通用" }], "example": {"sentence": "Ceci est à moi.", "translation": "這是我的。"}, "usage_note": "Ça 最常用。", "image_file": "this.png" },
        { "id": "pro-10", "term_zh": "那個（指示詞）", "related_terms": [{ "term_target": "ce / cet / cette", "pronunciation": ["/sə/", "/sɛt/", "/sɛt/"], "specific_note": "這/那(+名詞)" }], "example": {"sentence": "Ce livre.", "translation": "這本書。"}, "usage_note": "Ce (陽), Cet (陽母音前), Cette (陰)。", "image_file": "that_obj.png" },
        { "id": "pro-11", "term_zh": "他的", "related_terms": [{ "term_target": "son / sa / ses", "pronunciation": ["/sɔ̃/", "/sa/", "/se/"], "specific_note": "" }], "example": {"sentence": "Sa voiture.", "translation": "他的車(Voiture是陰性)。"}, "usage_note": "同 Her，依物品性別變化。", "image_file": "his.png" },
        { "id": "pro-12", "term_zh": "你的", "related_terms": [{ "term_target": "ton / ta / tes", "pronunciation": ["/tɔ̃/", "/ta/", "/te/"], "specific_note": "非正式" }, { "term_target": "votre / vos", "pronunciation": ["/vɔtʁ/", "/vo/"], "specific_note": "正式/複數" }], "example": {"sentence": "Ton nom.", "translation": "你的名字。"}, "usage_note": "依物品性別變化。", "image_file": "your.png" },
        { "id": "pro-13", "term_zh": "他們的", "related_terms": [{ "term_target": "leur", "pronunciation": ["/lœʁ/"], "specific_note": "單數物" }, { "term_target": "leurs", "pronunciation": ["/lœʁ/"], "specific_note": "複數物" }], "example": {"sentence": "Leur maison.", "translation": "他們的家。"}, "usage_note": "發音相同。", "image_file": "their.png" },
        { "id": "pro-14", "term_zh": "我們的", "related_terms": [{ "term_target": "notre", "pronunciation": ["/nɔtʁ/"], "specific_note": "單數物" }, { "term_target": "nos", "pronunciation": ["/no/"], "specific_note": "複數物" }], "example": {"sentence": "Notre école.", "translation": "我們的學校。"}, "usage_note": "Nos amis (我們的朋友們)。", "image_file": "our.png" },
        { "id": "pro-15", "term_zh": "這些", "related_terms": [{ "term_target": "ces", "pronunciation": ["/se/"], "specific_note": "形容詞" }, { "term_target": "ceux-ci / celles-ci", "pronunciation": ["/sø.si/", "/sɛl.si/"], "specific_note": "代名詞" }], "example": {"sentence": "Ces livres.", "translation": "這些書。"}, "usage_note": "Ces + 名詞。", "image_file": "these.png" },
        { "id": "pro-16", "term_zh": "那些", "related_terms": [{ "term_target": "ces", "pronunciation": ["/se/"], "specific_note": "形容詞" }, { "term_target": "ceux-là / celles-là", "pronunciation": ["/sø.la/", "/sɛl.la/"], "specific_note": "代名詞" }], "example": {"sentence": "Ces oiseaux.", "translation": "那些鳥。"}, "usage_note": "Ces 可指這些或那些。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "être", "pronunciation": ["/ɛtʁ/"], "specific_note": "原形" }, { "term_target": "suis / es / est", "pronunciation": ["/sɥi/", "/ɛ/", "/ɛ/"], "specific_note": "變位" }], "example": {"sentence": "Je suis étudiant.", "translation": "我是學生。"}, "usage_note": "不規則變化。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "avoir", "pronunciation": ["/a.vwaʁ/"], "specific_note": "原形" }, { "term_target": "ai / as / a", "pronunciation": ["/e/", "/a/", "/a/"], "specific_note": "變位" }], "example": {"sentence": "J'ai de l'argent.", "translation": "我有錢。"}, "usage_note": "Je + ai = J'ai。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "aller", "pronunciation": ["/a.le/"], "specific_note": "" }], "example": {"sentence": "Je vais à la maison.", "translation": "我要回家。" }, "usage_note": "不規則動詞。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "obtenir", "pronunciation": ["/ɔp.tə.niʁ/"], "specific_note": "獲得" }, { "term_target": "prendre", "pronunciation": ["/pʁɑ̃dʁ/"], "specific_note": "拿/取" }], "example": {"sentence": "Obtenir un travail.", "translation": "得到工作。"}, "usage_note": "Prendre 也用於搭車/吃喝。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "faire", "pronunciation": ["/fɛʁ/"], "specific_note": "" }], "example": {"sentence": "Faire les devoirs.", "translation": "做作業。"}, "usage_note": "通用動詞。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "dire", "pronunciation": ["/diʁ/"], "specific_note": "說" }, { "term_target": "parler", "pronunciation": ["/paʁ.le/"], "specific_note": "講/說話" }], "example": {"sentence": "Dis bonjour.", "translation": "說你好。"}, "usage_note": "Dire 內容，Parler 語言或動作。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "savoir", "pronunciation": ["/sa.vwaʁ/"], "specific_note": "知識" }, { "term_target": "connaître", "pronunciation": ["/kɔ.nɛtʁ/"], "specific_note": "認識人/地" }], "example": {"sentence": "Je ne sais pas.", "translation": "我不知道。"}, "usage_note": "區分知識與熟悉度。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "penser", "pronunciation": ["/pɑ̃.se/"], "specific_note": "" }], "example": {"sentence": "Je pense que oui.", "translation": "我想是的。"}, "usage_note": "思考/認為。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "voir", "pronunciation": ["/vwaʁ/"], "specific_note": "看見" }, { "term_target": "regarder", "pronunciation": ["/ʁə.ɡaʁ.de/"], "specific_note": "注視/觀看" }], "example": {"sentence": "Je te vois.", "translation": "我看到你。"}, "usage_note": "Voir 是視覺能力，Regarder 是動作。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "faire", "pronunciation": ["/fɛʁ/"], "specific_note": "" }, { "term_target": "fabriquer", "pronunciation": ["/fa.bʁi.ke/"], "specific_note": "製造" }], "example": {"sentence": "Faire du café.", "translation": "煮咖啡。"}, "usage_note": "Faire 最常用。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "venir", "pronunciation": ["/və.niʁ/"], "specific_note": "" }], "example": {"sentence": "Viens ici.", "translation": "來這裡。"}, "usage_note": "過來。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "avoir besoin de", "pronunciation": ["/a.vwaʁ bə.zwɛ̃ də/"], "specific_note": "片語" }], "example": {"sentence": "J'ai besoin d'eau.", "translation": "我需要水。"}, "usage_note": "固定用法。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "utiliser", "pronunciation": ["/y.ti.li.ze/"], "specific_note": "" }], "example": {"sentence": "Utiliser un stylo.", "translation": "用原子筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "trouver", "pronunciation": ["/tʁu.ve/"], "specific_note": "" }], "example": {"sentence": "Trouver un travail.", "translation": "找工作。"}, "usage_note": "發現/找到。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "donner", "pronunciation": ["/dɔ.ne/"], "specific_note": "" }], "example": {"sentence": "Donne-moi ça.", "translation": "給我那個。"}, "usage_note": "給予。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "dire", "pronunciation": ["/diʁ/"], "specific_note": "" }, { "term_target": "raconter", "pronunciation": ["/ʁa.kɔ̃.te/"], "specific_note": "講述(故事)" }], "example": {"sentence": "Dis-moi.", "translation": "告訴我。"}, "usage_note": "告知。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "travailler", "pronunciation": ["/tʁa.va.je/"], "specific_note": "" }], "example": {"sentence": "Je travaille ici.", "translation": "我在這工作。"}, "usage_note": "勞動。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "aimer", "pronunciation": ["/e.me/"], "specific_note": "" }], "example": {"sentence": "J'aime ça.", "translation": "我喜歡這個。"}, "usage_note": "Aimer 也是愛。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "se lever", "pronunciation": ["/sə lə.ve/"], "specific_note": "起床" }, { "term_target": "se réveiller", "pronunciation": ["/sə ʁe.ve.je/"], "specific_note": "醒來" }], "example": {"sentence": "Je me lève à 7h.", "translation": "我七點起床。"}, "usage_note": "反身動詞。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "parler", "pronunciation": ["/paʁ.le/"], "specific_note": "" }], "example": {"sentence": "Parler français.", "translation": "說法語。"}, "usage_note": "講語言。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "entendre", "pronunciation": ["/ɑ̃.tɑ̃dʁ/"], "specific_note": "聽見" }, { "term_target": "écouter", "pronunciation": ["/e.ku.te/"], "specific_note": "聆聽" }], "example": {"sentence": "Tu m'entends ?", "translation": "你聽得到我嗎？"}, "usage_note": "Entendre(能力), Écouter(專注)。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "écrire", "pronunciation": ["/e.kʁiʁ/"], "specific_note": "" }], "example": {"sentence": "Écrire un nom.", "translation": "寫名字。"}, "usage_note": "書寫。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "lire", "pronunciation": ["/liʁ/"], "specific_note": "" }], "example": {"sentence": "Lire un livre.", "translation": "看書。"}, "usage_note": "閱讀。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "attendre", "pronunciation": ["/a.tɑ̃dʁ/"], "specific_note": "" }], "example": {"sentence": "Attends-moi.", "translation": "等我。"}, "usage_note": "等候。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "essayer", "pronunciation": ["/e.se.je/"], "specific_note": "試做" }, { "term_target": "goûter", "pronunciation": ["/gu.te/"], "specific_note": "品嚐" }], "example": {"sentence": "Essaie ça.", "translation": "試試這個。"}, "usage_note": "試驗。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "payer", "pronunciation": ["/pe.je/"], "specific_note": "" }], "example": {"sentence": "Payer l'addition.", "translation": "付帳單。"}, "usage_note": "支付。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "choisir", "pronunciation": ["/ʃwa.ziʁ/"], "specific_note": "" }], "example": {"sentence": "Choisis-en un.", "translation": "選一個。"}, "usage_note": "挑選。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "entrer", "pronunciation": ["/ɑ̃.tʁe/"], "specific_note": "" }], "example": {"sentence": "Entrer dans la chambre.", "translation": "進房間。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "habiter", "pronunciation": ["/a.bi.te/"], "specific_note": "居住" }, { "term_target": "vivre", "pronunciation": ["/vivʁ/"], "specific_note": "生活" }], "example": {"sentence": "J'habite à Taipei.", "translation": "我住台北。"}, "usage_note": "Habiter 接地址/城市。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "arriver", "pronunciation": ["/a.ʁi.ve/"], "specific_note": "" }], "example": {"sentence": "Arriver à l'heure.", "translation": "準時到達。"}, "usage_note": "抵達。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "marcher", "pronunciation": ["/maʁ.ʃe/"], "specific_note": "" }], "example": {"sentence": "Marcher jusque chez soi.", "translation": "走路回家。"}, "usage_note": "步行。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "ouvrir", "pronunciation": ["/u.vʁiʁ/"], "specific_note": "" }], "example": {"sentence": "Ouvrir la porte.", "translation": "開門。"}, "usage_note": "開啟。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "fermer", "pronunciation": ["/fɛʁ.me/"], "specific_note": "" }], "example": {"sentence": "Fermer la fenêtre.", "translation": "關窗。"}, "usage_note": "關上。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "aider", "pronunciation": ["/e.de/"], "specific_note": "" }], "example": {"sentence": "Aidez-moi.", "translation": "幫我。"}, "usage_note": "協助。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "apporter", "pronunciation": ["/a.pɔʁ.te/"], "specific_note": "" }], "example": {"sentence": "Apporte de l'eau.", "translation": "帶水來。"}, "usage_note": "攜帶。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "需要", "related_terms": [{ "term_target": "avoir besoin de", "pronunciation": ["/a.vwaʁ bə.zwɛ̃ də/"], "specific_note": "" }], "example": {"sentence": "J'ai besoin d'eau.", "translation": "我需要水。"}, "usage_note": "需要。", "image_file": "need.png" },
        { "id": "v-37", "term_zh": "使用", "related_terms": [{ "term_target": "utiliser", "pronunciation": ["/y.ti.li.ze/"], "specific_note": "" }], "example": {"sentence": "Utiliser un stylo.", "translation": "用原子筆。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-38", "term_zh": "變成", "related_terms": [{ "term_target": "devenir", "pronunciation": ["/də.və.niʁ/"], "specific_note": "" }], "example": {"sentence": "Devenir professeur.", "translation": "變成老師。"}, "usage_note": "變化。", "image_file": "become.png" },
        { "id": "v-39", "term_zh": "開始", "related_terms": [{ "term_target": "commencer", "pronunciation": ["/kɔ.mɑ̃.se/"], "specific_note": "" }], "example": {"sentence": "Commencer maintenant.", "translation": "現在開始。"}, "usage_note": "開始。", "image_file": "start.png" },
        { "id": "v-40", "term_zh": "結束", "related_terms": [{ "term_target": "finir", "pronunciation": ["/fi.niʁ/"], "specific_note": "完成" }, { "term_target": "terminer", "pronunciation": ["/tɛʁ.mi.ne/"], "specific_note": "結束" }], "example": {"sentence": "Finir le travail.", "translation": "工作結束。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-41", "term_zh": "停止", "related_terms": [{ "term_target": "arrêter", "pronunciation": ["/a.ʁɛ.te/"], "specific_note": "" }], "example": {"sentence": "Arrête ici.", "translation": "停在這裡。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-42", "term_zh": "記住", "related_terms": [{ "term_target": "se souvenir", "pronunciation": ["/sə su.və.niʁ/"], "specific_note": "回憶" }, { "term_target": "rappeler", "pronunciation": ["/ʁa.pə.le/"], "specific_note": "記得" }], "example": {"sentence": "Je me souviens.", "translation": "我記得。"}, "usage_note": "反身動詞。", "image_file": "remember.png" },
        { "id": "v-43", "term_zh": "談話", "related_terms": [{ "term_target": "parler", "pronunciation": ["/paʁ.le/"], "specific_note": "" }, { "term_target": "discuter", "pronunciation": ["/dis.ky.te/"], "specific_note": "討論/聊天" }], "example": {"sentence": "Parler avec toi.", "translation": "跟你談話。"}, "usage_note": "交談。", "image_file": "talk.png" },
        { "id": "v-44", "term_zh": "見面", "related_terms": [{ "term_target": "rencontrer", "pronunciation": ["/ʁɑ̃.kɔ̃.tʁe/"], "specific_note": "" }], "example": {"sentence": "Rencontrer des amis.", "translation": "跟朋友碰面。"}, "usage_note": "會面。", "image_file": "meet.png" },
        { "id": "v-45", "term_zh": "乘坐（工具）", "related_terms": [{ "term_target": "prendre", "pronunciation": ["/pʁɑ̃dʁ/"], "specific_note": "" }], "example": {"sentence": "Prendre le bus.", "translation": "搭公車。"}, "usage_note": "搭乘/拿取。", "image_file": "take.png" },
        { "id": "v-46", "term_zh": "放", "related_terms": [{ "term_target": "mettre", "pronunciation": ["/mɛtʁ/"], "specific_note": "" }, { "term_target": "poser", "pronunciation": ["/po.ze/"], "specific_note": "放置" }], "example": {"sentence": "Mets-le ici.", "translation": "放這裡。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-47", "term_zh": "吃", "related_terms": [{ "term_target": "manger", "pronunciation": ["/mɑ̃.ʒe/"], "specific_note": "" }], "example": {"sentence": "Manger le déjeuner.", "translation": "吃午餐。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-48", "term_zh": "睡覺", "related_terms": [{ "term_target": "dormir", "pronunciation": ["/dɔʁ.miʁ/"], "specific_note": "" }], "example": {"sentence": "Je vais dormir.", "translation": "我要去睡覺了。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-49", "term_zh": "寄送", "related_terms": [{ "term_target": "envoyer", "pronunciation": ["/ɑ̃.vwa.je/"], "specific_note": "" }], "example": {"sentence": "Envoyer un mail.", "translation": "寄信。"}, "usage_note": "傳送。", "image_file": "send.png" },
        { "id": "v-50", "term_zh": "開車", "related_terms": [{ "term_target": "conduire", "pronunciation": ["/kɔ̃.dɥiʁ/"], "specific_note": "" }], "example": {"sentence": "Conduire une voiture.", "translation": "開車。"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-51", "term_zh": "讀書", "related_terms": [{ "term_target": "étudier", "pronunciation": ["/e.ty.dje/"], "specific_note": "研讀" }, { "term_target": "apprendre", "pronunciation": ["/a.pʁɑ̃dʁ/"], "specific_note": "學習" }], "example": {"sentence": "Étudier le français.", "translation": "讀法語。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-52", "term_zh": "回去", "related_terms": [{ "term_target": "rentrer", "pronunciation": ["/ʁɑ̃.tʁe/"], "specific_note": "" }, { "term_target": "retourner", "pronunciation": ["/ʁə.tuʁ.ne/"], "specific_note": "返回" }], "example": {"sentence": "Rentrer à la maison.", "translation": "回家。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "bon / bonne", "pronunciation": ["/bɔ̃/", "/bɔn/"], "specific_note": "m/f" }], "example": {"sentence": "Bon travail.", "translation": "做得好。"}, "usage_note": "形容詞分陰陽性。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "mauvais / mauvaise", "pronunciation": ["/mo.vɛ/", "/mo.vɛz/"], "specific_note": "m/f" }], "example": {"sentence": "Mauvais jour.", "translation": "壞的一天。"}, "usage_note": "負面。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "nouveau / nouvelle", "pronunciation": ["/nu.vo/", "/nu.vɛl/"], "specific_note": "m/f" }], "example": {"sentence": "Nouveau téléphone.", "translation": "新手機。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "premier / première", "pronunciation": ["/pʁə.mje/", "/pʁə.mjɛʁ/"], "specific_note": "m/f" }], "example": {"sentence": "Première fois.", "translation": "第一次。"}, "usage_note": "順序。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "dernier / dernière", "pronunciation": ["/dɛʁ.nje/", "/dɛʁ.njɛʁ/"], "specific_note": "m/f" }], "example": {"sentence": "La semaine dernière.", "translation": "上週。"}, "usage_note": "過去的/最後的。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "prochain / prochaine", "pronunciation": ["/pʁɔ.ʃɛ̃/", "/pʁɔ.ʃɛn/"], "specific_note": "m/f" }], "example": {"sentence": "La prochaine station.", "translation": "下一站。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "long / longue", "pronunciation": ["/lɔ̃/", "/lɔ̃g/"], "specific_note": "m/f" }], "example": {"sentence": "Cheveux longs.", "translation": "長髮。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "grand / grande", "pronunciation": ["/gʁɑ̃/", "/gʁɑ̃d/"], "specific_note": "m/f" }], "example": {"sentence": "Grande maison.", "translation": "大房子。"}, "usage_note": "體積大。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "petit / petite", "pronunciation": ["/pə.ti/", "/pə.tit/"], "specific_note": "m/f" }], "example": {"sentence": "Petit chat.", "translation": "小貓。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "beaucoup", "pronunciation": ["/bo.ku/"], "specific_note": "副詞" }, { "term_target": "nombreux", "pronunciation": ["/nɔ̃.bʁø/"], "specific_note": "形容詞" }], "example": {"sentence": "Beaucoup de gens.", "translation": "很多人。"}, "usage_note": "Beaucoup de + 名詞。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "haut / haute", "pronunciation": ["/o/", "/ot/"], "specific_note": "物體" }, { "term_target": "grand / grande", "pronunciation": ["/gʁɑ̃/", "/gʁɑ̃d/"], "specific_note": "人" }], "example": {"sentence": "Grand bâtiment.", "translation": "高樓。"}, "usage_note": "高度。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "jeune", "pronunciation": ["/ʒœn/"], "specific_note": "" }], "example": {"sentence": "Jeune homme.", "translation": "年輕人。"}, "usage_note": "不分陰陽。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的", "related_terms": [{ "term_target": "vieux / vieille", "pronunciation": ["/vjø/", "/vjɛj/"], "specific_note": "m/f" }], "example": {"sentence": "Vieux livre.", "translation": "舊書。"}, "usage_note": "人或物皆可。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "proche", "pronunciation": ["/pʁɔʃ/"], "specific_note": "" }, { "term_target": "près", "pronunciation": ["/pʁɛ/"], "specific_note": "副詞" }], "example": {"sentence": "C'est proche.", "translation": "很近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "loin", "pronunciation": ["/lwɛ̃/"], "specific_note": "副詞" }, { "term_target": "lointain / lointaine", "pronunciation": ["/lwɛ̃.tɛ̃/", "/lwɛ̃.tɛn/"], "specific_note": "形容詞" }], "example": {"sentence": "C'est loin.", "translation": "很遠。"}, "usage_note": "距離遠。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "rapide", "pronunciation": ["/ʁa.pid/"], "specific_note": "" }, { "term_target": "vite", "pronunciation": ["/vit/"], "specific_note": "副詞" }], "example": {"sentence": "Voiture rapide.", "translation": "快車。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "lent / lente", "pronunciation": ["/lɑ̃/", "/lɑ̃t/"], "specific_note": "m/f" }], "example": {"sentence": "Internet lent.", "translation": "網路慢。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "chaud / chaude", "pronunciation": ["/ʃo/", "/ʃod/"], "specific_note": "m/f" }], "example": {"sentence": "Eau chaude.", "translation": "熱水。"}, "usage_note": "高溫。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "froid / froide", "pronunciation": ["/fʁwa/", "/fʁwad/"], "specific_note": "m/f" }], "example": {"sentence": "Boisson froide.", "translation": "冷飲。"}, "usage_note": "低溫。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "propre", "pronunciation": ["/pʁɔpʁ/"], "specific_note": "" }], "example": {"sentence": "Chambre propre.", "translation": "乾淨的房間。"}, "usage_note": "放在名詞後表乾淨，名前表「自己的」。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "sale", "pronunciation": ["/sal/"], "specific_note": "" }], "example": {"sentence": "Mains sales.", "translation": "髒手。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "facile", "pronunciation": ["/fa.sil/"], "specific_note": "" }], "example": {"sentence": "C'est facile.", "translation": "這很簡單。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "difficile", "pronunciation": ["/di.fi.sil/"], "specific_note": "" }], "example": {"sentence": "C'est difficile.", "translation": "很難。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "correct / correcte", "pronunciation": ["/kɔ.ʁɛkt/"], "specific_note": "m/f" }, { "term_target": "juste", "pronunciation": ["/ʒyst/"], "specific_note": "正確/公平" }], "example": {"sentence": "Réponse correcte.", "translation": "正確答案。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "faux / fausse", "pronunciation": ["/fo/", "/fos/"], "specific_note": "m/f" }], "example": {"sentence": "C'est faux.", "translation": "是錯的。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "important / importante", "pronunciation": ["/ɛ̃.pɔʁ.tɑ̃/", "/ɛ̃.pɔʁ.tɑ̃t/"], "specific_note": "m/f" }], "example": {"sentence": "Réunion importante.", "translation": "重要會議。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "différent / différente", "pronunciation": ["/di.fe.ʁɑ̃/", "/di.fe.ʁɑ̃t/"], "specific_note": "m/f" }], "example": {"sentence": "Couleur différente.", "translation": "不同顏色。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "vrai / vraie", "pronunciation": ["/vʁɛ/"], "specific_note": "m/f" }, { "term_target": "réel / réelle", "pronunciation": ["/ʁe.ɛl/"], "specific_note": "m/f" }], "example": {"sentence": "Amour vrai.", "translation": "真愛。"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "intéressant / intéressante", "pronunciation": ["/ɛ̃.te.ʁɛ.sɑ̃/", "/ɛ̃.te.ʁɛ.sɑ̃t/"], "specific_note": "m/f" }], "example": {"sentence": "Livre intéressant.", "translation": "有趣的書。"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "beau / belle", "pronunciation": ["/bo/", "/bɛl/"], "specific_note": "m/f" }], "example": {"sentence": "Belle fleur.", "translation": "美麗的花。"}, "usage_note": "形容人或景物。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "pas cher", "pronunciation": ["/pa ʃɛʁ/"], "specific_note": "" }, { "term_target": "bon marché", "pronunciation": ["/bɔ̃ maʁ.ʃe/"], "specific_note": "" }], "example": {"sentence": "C'est pas cher.", "translation": "這不貴(便宜)。"}, "usage_note": "價格低。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "cher / chère", "pronunciation": ["/ʃɛʁ/"], "specific_note": "m/f" }], "example": {"sentence": "Trop cher.", "translation": "太貴了。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "avoir faim", "pronunciation": ["/a.vwaʁ fɛ̃/"], "specific_note": "片語" }], "example": {"sentence": "J'ai faim.", "translation": "我餓了(我有飢餓)。"}, "usage_note": "法語用名詞 Faim (飢餓)。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "fatigué / fatiguée", "pronunciation": ["/fa.ti.ge/"], "specific_note": "m/f" }], "example": {"sentence": "Je suis fatigué.", "translation": "我累了。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "occupé / occupée", "pronunciation": ["/ɔ.ky.pe/"], "specific_note": "m/f" }], "example": {"sentence": "Je suis occupé.", "translation": "我很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "heureux / heureuse", "pronunciation": ["/œ.ʁø/", "/œ.ʁøz/"], "specific_note": "幸福/快樂" }, { "term_target": "content / contente", "pronunciation": ["/kɔ̃.tɑ̃/", "/kɔ̃.tɑ̃t/"], "specific_note": "滿意/高興" }], "example": {"sentence": "Je suis heureux.", "translation": "我很快樂。"}, "usage_note": "心情。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "triste", "pronunciation": ["/tʁist/"], "specific_note": "" }], "example": {"sentence": "Histoire triste.", "translation": "悲傷的故事。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "similaire", "pronunciation": ["/si.mi.lɛʁ/"], "specific_note": "" }], "example": {"sentence": "Couleur similaire.", "translation": "相似的顏色。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "célèbre", "pronunciation": ["/se.lɛbʁ/"], "specific_note": "" }, { "term_target": "connu / connue", "pronunciation": ["/kɔ.ny/"], "specific_note": "知名/認識" }], "example": {"sentence": "Acteur célèbre.", "translation": "知名演員。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "étranger / étrangère", "pronunciation": ["/e.tʁɑ̃.ʒe/", "/e.tʁɑ̃.ʒɛʁ/"], "specific_note": "m/f" }], "example": {"sentence": "Pays étranger.", "translation": "外國。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "intelligent / intelligente", "pronunciation": ["/ɛ̃.te.li.ʒɑ̃/", "/ɛ̃.te.li.ʒɑ̃t/"], "specific_note": "m/f" }], "example": {"sentence": "Enfant intelligent.", "translation": "聰明的孩子。"}, "usage_note": "腦袋好。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "dangereux / dangereuse", "pronunciation": ["/dɑ̃.ʒə.ʁø/", "/dɑ̃.ʒə.ʁøz/"], "specific_note": "m/f" }], "example": {"sentence": "C'est dangereux.", "translation": "這很危險。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "gentil / gentille", "pronunciation": ["/ʒɑ̃.ti/", "/ʒɑ̃.tij/"], "specific_note": "好心" }], "example": {"sentence": "Personne gentille.", "translation": "好心人。"}, "usage_note": "溫柔。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "tout / toute / tous / toutes", "pronunciation": ["/tu/", "/tut/", "/tu(s)/", "/tut/"], "specific_note": "全部" }, { "term_target": "chaque", "pronunciation": ["/ʃak/"], "specific_note": "每一個" }], "example": {"sentence": "Tous les jours.", "translation": "每一天。"}, "usage_note": "全部。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "préféré / préférée", "pronunciation": ["/pʁe.fe.ʁe/"], "specific_note": "m/f" }], "example": {"sentence": "Nourriture préférée.", "translation": "最愛的食物。"}, "usage_note": "中意。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "délicieux / délicieuse", "pronunciation": ["/de.li.sjø/", "/de.li.sjøz/"], "specific_note": "m/f" }], "example": {"sentence": "Plat délicieux.", "translation": "美味的菜。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "temps", "pronunciation": ["/tɑ̃/"], "specific_note": "m." }, { "term_target": "heure", "pronunciation": ["/œʁ/"], "specific_note": "f. (時刻)" }], "example": {"sentence": "Quelle heure est-il ?", "translation": "現在幾點？"}, "usage_note": "時刻/時間。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "gens", "pronunciation": ["/ʒɑ̃/"], "specific_note": "m. pl." }, { "term_target": "personnes", "pronunciation": ["/pɛʁ.sɔn/"], "specific_note": "f. pl." }], "example": {"sentence": "Beaucoup de gens.", "translation": "很多人。"}, "usage_note": "泛指人。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "argent", "pronunciation": ["/aʁ.ʒɑ̃/"], "specific_note": "m." }], "example": {"sentence": "Pas d'argent.", "translation": "沒錢。"}, "usage_note": "不可數。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "enfant", "pronunciation": ["/ɑ̃.fɑ̃/"], "specific_note": "m./f." }], "example": {"sentence": "Petit enfant.", "translation": "小孩。"}, "usage_note": "兒童。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "eau", "pronunciation": ["/o/"], "specific_note": "f." }], "example": {"sentence": "Boire de l'eau.", "translation": "喝水。"}, "usage_note": "不可數。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "nourriture", "pronunciation": ["/nu.ʁi.tyʁ/"], "specific_note": "f." }], "example": {"sentence": "Bonne nourriture.", "translation": "好吃的食物。"}, "usage_note": "吃的東西。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "ami / amie", "pronunciation": ["/a.mi/"], "specific_note": "m./f." }], "example": {"sentence": "Mon ami.", "translation": "我朋友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "famille", "pronunciation": ["/fa.mij/"], "specific_note": "f." }], "example": {"sentence": "Grande famille.", "translation": "大家庭。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "étudiant / étudiante", "pronunciation": ["/e.ty.djɑ̃/", "/e.ty.djɑ̃t/"], "specific_note": "m./f." }], "example": {"sentence": "Je suis étudiant.", "translation": "我是學生。"}, "usage_note": "在學者。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "culture", "pronunciation": ["/kyl.tyʁ/"], "specific_note": "f." }], "example": {"sentence": "Culture française.", "translation": "法國文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "problème", "pronunciation": ["/pʁɔ.blɛm/"], "specific_note": "m." }], "example": {"sentence": "Pas de problème.", "translation": "沒問題。"}, "usage_note": "難題。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "entreprise", "pronunciation": ["/ɑ̃.tʁə.pʁiz/"], "specific_note": "f." }, { "term_target": "société", "pronunciation": ["/sɔ.sje.te/"], "specific_note": "f." }], "example": {"sentence": "Grande entreprise.", "translation": "大公司。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "homme", "pronunciation": ["/ɔm/"], "specific_note": "m." }], "example": {"sentence": "C'est un homme.", "translation": "他是男人。"}, "usage_note": "性別。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "femme", "pronunciation": ["/fam/"], "specific_note": "f." }], "example": {"sentence": "C'est une femme.", "translation": "她是女人。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "école", "pronunciation": ["/e.kɔl/"], "specific_note": "f." }], "example": {"sentence": "Aller à l'école.", "translation": "去學校。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "professeur", "pronunciation": ["/pʁɔ.fɛ.sœʁ/"], "specific_note": "m." }], "example": {"sentence": "Professeur de français.", "translation": "法語老師。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "film", "pronunciation": ["/film/"], "specific_note": "m." }], "example": {"sentence": "Regarder un film.", "translation": "看電影。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "téléphone", "pronunciation": ["/te.le.fɔn/"], "specific_note": "m." }, { "term_target": "portable", "pronunciation": ["/pɔʁ.tabl/"], "specific_note": "m. (手機)" }], "example": {"sentence": "Mon portable.", "translation": "我手機。"}, "usage_note": "電話。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "ordinateur", "pronunciation": ["/ɔʁ.di.na.tœʁ/"], "specific_note": "m." }], "example": {"sentence": "Utiliser l'ordinateur.", "translation": "用電腦。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "voiture", "pronunciation": ["/vwa.tyʁ/"], "specific_note": "f." }], "example": {"sentence": "Conduire une voiture.", "translation": "開車。"}, "usage_note": "汽車。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "marché", "pronunciation": ["/maʁ.ʃe/"], "specific_note": "m." }], "example": {"sentence": "Aller au marché.", "translation": "去市場。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "vêtements", "pronunciation": ["/vɛt.mɑ̃/"], "specific_note": "m. pl." }], "example": {"sentence": "Acheter des vêtements.", "translation": "買衣服。"}, "usage_note": "衣物。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "magasin", "pronunciation": ["/ma.ga.zɛ̃/"], "specific_note": "m." }, { "term_target": "boutique", "pronunciation": ["/bu.tik/"], "specific_note": "f." }], "example": {"sentence": "Entrer dans le magasin.", "translation": "進店裡。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "bus", "pronunciation": ["/bys/"], "specific_note": "m." }], "example": {"sentence": "Prendre le bus.", "translation": "搭公車。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "rue", "pronunciation": ["/ʁy/"], "specific_note": "f." }], "example": {"sentence": "Dans la rue.", "translation": "在街上。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "maison", "pronunciation": ["/mɛ.zɔ̃/"], "specific_note": "f." }], "example": {"sentence": "Ma maison.", "translation": "我家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "mère", "pronunciation": ["/mɛʁ/"], "specific_note": "f." }, { "term_target": "maman", "pronunciation": ["/ma.mɑ̃/"], "specific_note": "f. (口語)" }], "example": {"sentence": "Ma mère.", "translation": "我媽媽。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "père", "pronunciation": ["/pɛʁ/"], "specific_note": "m." }, { "term_target": "papa", "pronunciation": ["/pa.pa/"], "specific_note": "m. (口語)" }], "example": {"sentence": "Mon père.", "translation": "我爸爸。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "frère", "pronunciation": ["/fʁɛʁ/"], "specific_note": "m." }], "example": {"sentence": "Mon frère.", "translation": "我兄弟。"}, "usage_note": "兄弟。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "sœur", "pronunciation": ["/sœʁ/"], "specific_note": "f." }], "example": {"sentence": "Ma sœur.", "translation": "我姐妹。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "chinois", "pronunciation": ["/ʃi.nwa/"], "specific_note": "m." }], "example": {"sentence": "Parler chinois.", "translation": "說中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "matin", "pronunciation": ["/ma.tɛ̃/"], "specific_note": "m." }], "example": {"sentence": "Le matin.", "translation": "在早晨。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "nuit", "pronunciation": ["/nɥi/"], "specific_note": "f." }], "example": {"sentence": "Bonne nuit.", "translation": "晚安。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "billet", "pronunciation": ["/bi.jɛ/"], "specific_note": "m." }, { "term_target": "ticket", "pronunciation": ["/ti.kɛ/"], "specific_note": "m." }], "example": {"sentence": "Un billet, s'il vous plaît.", "translation": "請給我一張票。"}, "usage_note": "票。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "sac", "pronunciation": ["/sak/"], "specific_note": "m." }], "example": {"sentence": "Grand sac.", "translation": "大包包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "tasse", "pronunciation": ["/tɑs/"], "specific_note": "f. (有耳)" }, { "term_target": "verre", "pronunciation": ["/vɛʁ/"], "specific_note": "m. (玻璃杯)" }], "example": {"sentence": "Tasse de thé.", "translation": "一杯茶。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "médecin", "pronunciation": ["/med.sɛ̃/"], "specific_note": "m." }], "example": {"sentence": "Voir un médecin.", "translation": "看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "police", "pronunciation": ["/pɔ.lis/"], "specific_note": "f." }], "example": {"sentence": "Appeler la police.", "translation": "叫警察。"}, "usage_note": "警察。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "hôpital", "pronunciation": ["/ɔ.pi.tal/"], "specific_note": "m." }], "example": {"sentence": "Aller à l'hôpital.", "translation": "去醫院。"}, "usage_note": "醫療院所。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "siège", "pronunciation": ["/sjɛʒ/"], "specific_note": "m." }, { "term_target": "place", "pronunciation": ["/plas/"], "specific_note": "f." }], "example": {"sentence": "Prendre un siège.", "translation": "請坐。"}, "usage_note": "位子。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "porte", "pronunciation": ["/pɔʁt/"], "specific_note": "f." }], "example": {"sentence": "Ouvrir la porte.", "translation": "開門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "chambre", "pronunciation": ["/ʃɑ̃bʁ/"], "specific_note": "f." }], "example": {"sentence": "Ma chambre.", "translation": "我房間。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "gare", "pronunciation": ["/gaʁ/"], "specific_note": "f. (火車)" }, { "term_target": "station", "pronunciation": ["/sta.sjɔ̃/"], "specific_note": "f. (地鐵/公車)" }], "example": {"sentence": "Gare du Nord.", "translation": "北站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "métro", "pronunciation": ["/me.tʁo/"], "specific_note": "m." }], "example": {"sentence": "Station de métro.", "translation": "地鐵站。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "train", "pronunciation": ["/tʁɛ̃/"], "specific_note": "m." }], "example": {"sentence": "Voyager en train.", "translation": "搭火車旅行。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "aéroport", "pronunciation": ["/a.e.ʁɔ.pɔʁ/"], "specific_note": "m." }], "example": {"sentence": "Aller à l'aéroport.", "translation": "去機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "bagages", "pronunciation": ["/ba.gaʒ/"], "specific_note": "m. pl." }], "example": {"sentence": "Beaucoup de bagages.", "translation": "很多行李。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "carte", "pronunciation": ["/kaʁt/"], "specific_note": "f." }, { "term_target": "plan", "pronunciation": ["/plɑ̃/"], "specific_note": "m." }], "example": {"sentence": "Regarder la carte.", "translation": "看地圖。"}, "usage_note": "指引。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "guichet", "pronunciation": ["/gi.ʃɛ/"], "specific_note": "m." }, { "term_target": "comptoir", "pronunciation": ["/kɔ̃.twaʁ/"], "specific_note": "m." }], "example": {"sentence": "Au guichet.", "translation": "在櫃檯。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "hall", "pronunciation": ["/ɔl/"], "specific_note": "m." }, { "term_target": "réception", "pronunciation": ["/ʁe.sɛp.sjɔ̃/"], "specific_note": "f." }], "example": {"sentence": "Attendre dans le hall.", "translation": "在大廳等。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "réservation", "pronunciation": ["/ʁe.zɛʁ.va.sjɔ̃/"], "specific_note": "f." }], "example": {"sentence": "Faire une réservation.", "translation": "做預約。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "enregistrement", "pronunciation": ["/ɑ̃.ʁə.ʒis.tʁə.mɑ̃/"], "specific_note": "m." }, { "term_target": "check-in", "pronunciation": ["/tʃɛk in/"], "specific_note": "m. (借詞)" }], "example": {"sentence": "Faire l'enregistrement.", "translation": "辦理入住。"}, "usage_note": "Check-in。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "départ", "pronunciation": ["/de.paʁ/"], "specific_note": "m." }, { "term_target": "check-out", "pronunciation": ["/tʃɛk aʊt/"], "specific_note": "m. (借詞)" }], "example": {"sentence": "Heure de départ.", "translation": "退房時間。"}, "usage_note": "Check-out。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "boisson", "pronunciation": ["/bwa.sɔ̃/"], "specific_note": "f." }], "example": {"sentence": "Boisson froide.", "translation": "冷飲。"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "menu", "pronunciation": ["/mə.ny/"], "specific_note": "m." }, { "term_target": "carte", "pronunciation": ["/kaʁt/"], "specific_note": "f." }], "example": {"sentence": "Le menu, s'il vous plaît.", "translation": "請給菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "déjeuner", "pronunciation": ["/de.ʒœ.ne/"], "specific_note": "m." }], "example": {"sentence": "Manger le déjeuner.", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "dîner", "pronunciation": ["/di.ne/"], "specific_note": "m." }], "example": {"sentence": "Manger le dîner.", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "addition", "pronunciation": ["/a.di.sjɔ̃/"], "specific_note": "f." }], "example": {"sentence": "L'addition, s'il vous plaît.", "translation": "麻煩結帳。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "prix", "pronunciation": ["/pʁi/"], "specific_note": "m." }], "example": {"sentence": "Bon prix.", "translation": "好價格。"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "reçu", "pronunciation": ["/ʁə.sy/"], "specific_note": "m." }, { "term_target": "ticket", "pronunciation": ["/ti.kɛ/"], "specific_note": "m." }], "example": {"sentence": "Le reçu, s'il vous plaît.", "translation": "請給收據。"}, "usage_note": "證明。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "taille", "pronunciation": ["/taj/"], "specific_note": "f." }], "example": {"sentence": "Grande taille.", "translation": "大尺寸。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "entrée", "pronunciation": ["/ɑ̃.tʁe/"], "specific_note": "f." }], "example": {"sentence": "Entrée principale.", "translation": "正門入口。"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "sortie", "pronunciation": ["/sɔʁ.ti/"], "specific_note": "f." }], "example": {"sentence": "Sortie de secours.", "translation": "緊急出口。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "Taïwan", "pronunciation": ["/taj.wan/"], "specific_note": "m." }], "example": {"sentence": "J'aime Taïwan.", "translation": "我愛台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "一切事物", "related_terms": [{ "term_target": "tout", "pronunciation": ["/tu/"], "specific_note": "m." }], "example": {"sentence": "Tout est bien.", "translation": "一切都好。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-66", "term_zh": "錢包", "related_terms": [{ "term_target": "portefeuille", "pronunciation": ["/pɔʁ.tə.fœj/"], "specific_note": "m." }], "example": {"sentence": "Perdu mon portefeuille.", "translation": "掉了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-67", "term_zh": "身分證", "related_terms": [{ "term_target": "carte d'identité", "pronunciation": ["/kaʁt di.dɑ̃.ti.te/"], "specific_note": "f." }], "example": {"sentence": "Montrer la carte d'identité.", "translation": "出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-68", "term_zh": "餐廳", "related_terms": [{ "term_target": "restaurant", "pronunciation": ["/ʁɛs.tɔ.ʁɑ̃/"], "specific_note": "m." }], "example": {"sentence": "Bon restaurant.", "translation": "好餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-69", "term_zh": "飯店", "related_terms": [{ "term_target": "hôtel", "pronunciation": ["/o.tɛl/"], "specific_note": "m." }], "example": {"sentence": "Réserver un hôtel.", "translation": "訂飯店。"}, "usage_note": "住宿。", "image_file": "hotel.png" },
        { "id": "n-70", "term_zh": "場所", "related_terms": [{ "term_target": "endroit", "pronunciation": ["/ɑ̃.dʁwa/"], "specific_note": "m." }, { "term_target": "lieu", "pronunciation": ["/ljø/"], "specific_note": "m." }], "example": {"sentence": "Bel endroit.", "translation": "好地方。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-71", "term_zh": "用品店員", "related_terms": [{ "term_target": "vendeur / vendeuse", "pronunciation": ["/vɑ̃.dœʁ/", "/vɑ̃.døz/"], "specific_note": "m./f." }], "example": {"sentence": "Demander au vendeur.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-72", "term_zh": "超市", "related_terms": [{ "term_target": "supermarché", "pronunciation": ["/sy.pɛʁ.maʁ.ʃe/"], "specific_note": "m." }], "example": {"sentence": "Aller au supermarché.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-73", "term_zh": "月台", "related_terms": [{ "term_target": "quai", "pronunciation": ["/ke/"], "specific_note": "m." }], "example": {"sentence": "Quai 1.", "translation": "第一月台。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "maintenant", "pronunciation": ["/mɛ̃t.nɑ̃/"], "specific_note": "" }], "example": {"sentence": "Fais-le maintenant.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "très", "pronunciation": ["/tʁɛ/"], "specific_note": "" }], "example": {"sentence": "Très bien.", "translation": "非常好。"}, "usage_note": "強調。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "vraiment", "pronunciation": ["/vʁɛ.mɑ̃/"], "specific_note": "" }], "example": {"sentence": "Vraiment ?", "translation": "真的嗎？"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "bien", "pronunciation": ["/bjɛ̃/"], "specific_note": "" }], "example": {"sentence": "Bien dormir.", "translation": "睡得好。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "souvent", "pronunciation": ["/su.vɑ̃/"], "specific_note": "" }], "example": {"sentence": "Je viens souvent.", "translation": "我常來。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "d'habitude", "pronunciation": ["/da.bi.tyd/"], "specific_note": "" }, { "term_target": "normalement", "pronunciation": ["/nɔʁ.mal.mɑ̃/"], "specific_note": "" }], "example": {"sentence": "D'habitude je marche.", "translation": "通常我走路。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "déjà", "pronunciation": ["/de.ʒa/"], "specific_note": "" }], "example": {"sentence": "C'est déjà fait.", "translation": "已經做好了。"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "seulement", "pronunciation": ["/sœl.mɑ̃/"], "specific_note": "" }, { "term_target": "juste", "pronunciation": ["/ʒyst/"], "specific_note": "僅僅" }], "example": {"sentence": "Seulement un.", "translation": "只有一個。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "encore", "pronunciation": ["/ɑ̃.kɔʁ/"], "specific_note": "" }, { "term_target": "de nouveau", "pronunciation": ["/də nu.vo/"], "specific_note": "重新" }], "example": {"sentence": "Essaie encore.", "translation": "再試一次。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "environ", "pronunciation": ["/ɑ̃.vi.ʁɔ̃/"], "specific_note": "" }], "example": {"sentence": "Environ 10 minutes.", "translation": "大約10分鐘。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "un peu", "pronunciation": ["/œ̃ pø/"], "specific_note": "" }], "example": {"sentence": "Un peu épicé.", "translation": "一點點辣。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "aussi", "pronunciation": ["/o.si/"], "specific_note": "" }], "example": {"sentence": "Moi aussi.", "translation": "我也是。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "peut-être", "pronunciation": ["/pø.tɛtʁ/"], "specific_note": "" }], "example": {"sentence": "Peut-être plus tard.", "translation": "也許等下。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "plus tard", "pronunciation": ["/ply taʁ/"], "specific_note": "稍後" }, { "term_target": "après", "pronunciation": ["/a.pʁɛ/"], "specific_note": "在...之後" }], "example": {"sentence": "À plus tard.", "translation": "待會見。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "bientôt", "pronunciation": ["/bjɛ̃.to/"], "specific_note": "" }, { "term_target": "vite", "pronunciation": ["/vit/"], "specific_note": "快速" }], "example": {"sentence": "À bientôt.", "translation": "待會見(很快見)。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "ensemble", "pronunciation": ["/ɑ̃.sɑ̃bl/"], "specific_note": "" }], "example": {"sentence": "Aller ensemble.", "translation": "一起去。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "encore", "pronunciation": ["/ɑ̃.kɔʁ/"], "specific_note": "" }, { "term_target": "toujours", "pronunciation": ["/tu.ʒuʁ/"], "specific_note": "" }], "example": {"sentence": "Toujours ici.", "translation": "還在這裡。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "normalement", "pronunciation": ["/nɔʁ.mal.mɑ̃/"], "specific_note": "" }, { "term_target": "en général", "pronunciation": ["/ɑ̃ ʒe.ne.ʁal/"], "specific_note": "" }], "example": {"sentence": "Normalement, c'est comme ça.", "translation": "一般是那樣。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "tout de suite", "pronunciation": ["/tu d‿sɥit/"], "specific_note": "馬上" }, { "term_target": "immédiatement", "pronunciation": ["/i.me.djat.mɑ̃/"], "specific_note": "立即" }], "example": {"sentence": "Viens tout de suite.", "translation": "立刻來。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "non plus", "pronunciation": ["/nɔ̃ ply/"], "specific_note": "" }], "example": {"sentence": "Moi non plus.", "translation": "我也不。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "quoi", "pronunciation": ["/kwa/"], "specific_note": "口語/句尾" }, { "term_target": "que", "pronunciation": ["/kə/"], "specific_note": "正式/句首" }], "example": {"sentence": "C'est quoi ?", "translation": "這是什麼？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "comment", "pronunciation": ["/kɔ.mɑ̃/"], "specific_note": "" }], "example": {"sentence": "Comment ça va ?", "translation": "你好嗎？"}, "usage_note": "問狀況。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "quand", "pronunciation": ["/kɑ̃/"], "specific_note": "" }], "example": {"sentence": "Quand on y va ?", "translation": "何時去？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "où", "pronunciation": ["/u/"], "specific_note": "" }], "example": {"sentence": "Où es-tu ?", "translation": "你在哪？"}, "usage_note": "問地點。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "qui", "pronunciation": ["/ki/"], "specific_note": "" }], "example": {"sentence": "Qui est-ce ?", "translation": "那是誰？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "pourquoi", "pronunciation": ["/puʁ.kwa/"], "specific_note": "" }], "example": {"sentence": "Pourquoi ?", "translation": "為什麼？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "lequel / laquelle", "pronunciation": ["/lə.kɛl/", "/la.kɛl/"], "specific_note": "m./f." }, { "term_target": "quel", "pronunciation": ["/kɛl/"], "specific_note": "形容詞" }], "example": {"sentence": "Lequel préfères-tu ?", "translation": "你喜歡哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "combien", "pronunciation": ["/kɔ̃.bjɛ̃/"], "specific_note": "" }], "example": {"sentence": "Combien ça coûte ?", "translation": "多少錢？"}, "usage_note": "不可數/價格。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "combien de temps", "pronunciation": ["/kɔ̃.bjɛ̃ də tɑ̃/"], "specific_note": "" }], "example": {"sentence": "Combien de temps ?", "translation": "要多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "maintenant", "pronunciation": ["/mɛ̃t.nɑ̃/"], "specific_note": "" }], "example": {"sentence": "Fais-le maintenant.", "translation": "現在做。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "aujourd'hui", "pronunciation": ["/o.ʒuʁ.dɥi/"], "specific_note": "" }], "example": {"sentence": "Aujourd'hui, il fait chaud.", "translation": "今天很熱。"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "demain", "pronunciation": ["/də.mɛ̃/"], "specific_note": "" }], "example": {"sentence": "À demain.", "translation": "明天見。"}, "usage_note": "隔天。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "hier", "pronunciation": ["/jɛʁ/"], "specific_note": "" }], "example": {"sentence": "Hier j'étais là.", "translation": "昨天我去了。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "ici", "pronunciation": ["/i.si/"], "specific_note": "" }], "example": {"sentence": "Viens ici.", "translation": "來這。"}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "là-bas", "pronunciation": ["/la.ba/"], "specific_note": "" }], "example": {"sentence": "Va là-bas.", "translation": "去那。"}, "usage_note": "遠處。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "jour", "pronunciation": ["/ʒuʁ/"], "specific_note": "" }], "example": {"sentence": "Un jour.", "translation": "一天。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "an", "pronunciation": ["/ɑ̃/"], "specific_note": "m. (數量)" }, { "term_target": "année", "pronunciation": ["/a.ne/"], "specific_note": "f. (過程)" }], "example": {"sentence": "Cette année.", "translation": "今年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "mois", "pronunciation": ["/mwa/"], "specific_note": "" }], "example": {"sentence": "Ce mois-ci.", "translation": "這個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "semaine", "pronunciation": ["/sə.mɛn/"], "specific_note": "" }], "example": {"sentence": "La semaine prochaine.", "translation": "下週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "matin", "pronunciation": ["/ma.tɛ̃/"], "specific_note": "" }], "example": {"sentence": "Le matin.", "translation": "在早上。"}, "usage_note": "上午。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "après-midi", "pronunciation": ["/a.pʁɛ.mi.di/"], "specific_note": "" }], "example": {"sentence": "Bon après-midi.", "translation": "午安。"}, "usage_note": "PM。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "soir", "pronunciation": ["/swaʁ/"], "specific_note": "晚間" }, { "term_target": "nuit", "pronunciation": ["/nɥi/"], "specific_note": "夜晚(睡覺)" }], "example": {"sentence": "Bonsoir.", "translation": "晚安(晚上好)。"}, "usage_note": "傍晚到睡前。", "image_file": "evening.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "midi", "pronunciation": ["/mi.di/"], "specific_note": "" }], "example": {"sentence": "À midi.", "translation": "在中午。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "devant", "pronunciation": ["/də.vɑ̃/"], "specific_note": "" }], "example": {"sentence": "Devant moi.", "translation": "在我前面。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "derrière", "pronunciation": ["/dɛ.ʁjɛʁ/"], "specific_note": "" }], "example": {"sentence": "Derrière la porte.", "translation": "門後。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "gauche", "pronunciation": ["/goʃ/"], "specific_note": "" }], "example": {"sentence": "À gauche.", "translation": "左轉。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "droite", "pronunciation": ["/dʁwat/"], "specific_note": "" }], "example": {"sentence": "À droite.", "translation": "右轉。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "à côté", "pronunciation": ["/a ko.te/"], "specific_note": "" }], "example": {"sentence": "À côté de moi.", "translation": "坐我旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "en face", "pronunciation": ["/ɑ̃ fas/"], "specific_note": "" }], "example": {"sentence": "En face de la banque.", "translation": "銀行對面。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "printemps", "pronunciation": ["/pʁɛ̃.tɑ̃/"], "specific_note": "" }], "example": {"sentence": "Le printemps.", "translation": "春天。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "été", "pronunciation": ["/e.te/"], "specific_note": "" }], "example": {"sentence": "Été chaud.", "translation": "炎熱的夏天。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "automne", "pronunciation": ["/o.tɔn/"], "specific_note": "" }], "example": {"sentence": "Automne frais.", "translation": "涼爽的秋天。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "hiver", "pronunciation": ["/i.vɛʁ/"], "specific_note": "" }], "example": {"sentence": "Hiver froid.", "translation": "寒冷的冬天。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "zéro", "pronunciation": ["/ze.ʁo/"], "specific_note": "" }], "example": {"sentence": "Zéro degré.", "translation": "零度。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "un", "pronunciation": ["/œ̃/"], "specific_note": "" }], "example": {"sentence": "Une minute.", "translation": "一分鐘(Une 為陰性)。"}, "usage_note": "一。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "deux", "pronunciation": ["/dø/"], "specific_note": "" }], "example": {"sentence": "Deux jours.", "translation": "兩天。"}, "usage_note": "二。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "trois", "pronunciation": ["/tʁwa/"], "specific_note": "" }], "example": {"sentence": "Trois personnes.", "translation": "三人。"}, "usage_note": "三。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "quatre", "pronunciation": ["/katʁ/"], "specific_note": "" }], "example": {"sentence": "Quatre saisons.", "translation": "四季。"}, "usage_note": "四。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "cinq", "pronunciation": ["/sɛ̃k/"], "specific_note": "" }], "example": {"sentence": "Cinq euros.", "translation": "五歐元。"}, "usage_note": "五。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "six", "pronunciation": ["/sis/"], "specific_note": "" }], "example": {"sentence": "Six heures.", "translation": "六小時。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "sept", "pronunciation": ["/sɛt/"], "specific_note": "" }], "example": {"sentence": "Sept jours.", "translation": "七天。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "huit", "pronunciation": ["/ɥit/"], "specific_note": "" }], "example": {"sentence": "Huit ans.", "translation": "八歲。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "neuf", "pronunciation": ["/nœf/"], "specific_note": "" }], "example": {"sentence": "Neuf heures.", "translation": "九點。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "dix", "pronunciation": ["/dis/"], "specific_note": "" }], "example": {"sentence": "Dix euros.", "translation": "十歐元。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "onze", "pronunciation": ["/ɔ̃z/"], "specific_note": "" }], "example": {"sentence": "Onze ans.", "translation": "11歲。"}, "usage_note": "十一。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "douze", "pronunciation": ["/duz/"], "specific_note": "" }], "example": {"sentence": "Douze mois.", "translation": "12個月。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "quinze", "pronunciation": ["/kɛ̃z/"], "specific_note": "" }], "example": {"sentence": "Quinze minutes.", "translation": "15分鐘。"}, "usage_note": "十五。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "vingt", "pronunciation": ["/vɛ̃/"], "specific_note": "" }], "example": {"sentence": "Vingt euros.", "translation": "20歐元。"}, "usage_note": "二十。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "cinquante", "pronunciation": ["/sɛ̃.kɑ̃t/"], "specific_note": "" }], "example": {"sentence": "Cinquante pour cent.", "translation": "50%。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "cent", "pronunciation": ["/sɑ̃/"], "specific_note": "" }], "example": {"sentence": "Cent points.", "translation": "一百分。"}, "usage_note": "百。", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "mille", "pronunciation": ["/mil/"], "specific_note": "" }], "example": {"sentence": "Mille mercis.", "translation": "萬分感謝(一千個謝謝)。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "dix mille", "pronunciation": ["/di mil/"], "specific_note": "" }], "example": {"sentence": "Dix mille dollars.", "translation": "一萬元。"}, "usage_note": "一萬。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是...", "related_terms": [{ "term_target": "Je suis...", "pronunciation": ["/ʒə sɥi/"], "specific_note": "" }], "example": {"sentence": "Je suis étudiant.", "translation": "我是學生。"}, "usage_note": "本質/身分。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫...", "related_terms": [{ "term_target": "Je m'appelle...", "pronunciation": ["/ʒə ma.pɛl/"], "specific_note": "" }], "example": {"sentence": "Je m'appelle Jean.", "translation": "我的名字叫Jean。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做...", "related_terms": [{ "term_target": "Je fais...", "pronunciation": ["/ʒə fɛ/"], "specific_note": "" }], "example": {"sentence": "Je fais mes devoirs.", "translation": "我做作業。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做...", "related_terms": [{ "term_target": "Je suis en train de...", "pronunciation": ["/ʒə sɥi ɑ̃ tʁɛ̃ də/"], "specific_note": "" }], "example": {"sentence": "Je suis en train de manger.", "translation": "我正在吃。"}, "usage_note": "進行式。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠...", "related_terms": [{ "term_target": "Je peux...", "pronunciation": ["/ʒə pø/"], "specific_note": "" }], "example": {"sentence": "Je peux nager.", "translation": "我會游泳。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做...", "related_terms": [{ "term_target": "J'aime...", "pronunciation": ["/ʒɛm/"], "specific_note": "" }], "example": {"sentence": "J'aime lire.", "translation": "我喜歡閱讀。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經...", "related_terms": [{ "term_target": "J'étais...", "pronunciation": ["/ʒe.tɛ/"], "specific_note": "狀態" }], "example": {"sentence": "J'étais étudiant.", "translation": "我曾經是學生。"}, "usage_note": "過去狀態 (Imparfait)。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過...", "related_terms": [{ "term_target": "J'ai fait...", "pronunciation": ["/ʒe fɛ/"], "specific_note": "動作" }], "example": {"sentence": "J'ai fait mes devoirs.", "translation": "我做了功課。"}, "usage_note": "過去動作 (Passé Composé)。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過...", "related_terms": [{ "term_target": "J'ai déjà...", "pronunciation": ["/ʒe de.ʒa/"], "specific_note": "" }], "example": {"sentence": "J'ai déjà mangé.", "translation": "我已經吃過了。"}, "usage_note": "完成式。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過...", "related_terms": [{ "term_target": "Je suis allé à...", "pronunciation": ["/ʒə sɥi.z‿a.le a/"], "specific_note": "" }], "example": {"sentence": "Je suis allé en France.", "translation": "我曾經去過法國。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算...", "related_terms": [{ "term_target": "Je vais...", "pronunciation": ["/ʒə vɛ/"], "specific_note": "將要" }], "example": {"sentence": "Je vais partir.", "translation": "我將要離開。"}, "usage_note": "未來式 (Futur Proche)。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是...嗎？", "related_terms": [{ "term_target": "Es-tu... ?", "pronunciation": ["/ɛ ty/"], "specific_note": "非正式" }, { "term_target": "Êtes-vous... ?", "pronunciation": ["/ɛt vu/"], "specific_note": "正式" }], "example": {"sentence": "Es-tu étudiant ?", "translation": "你是學生嗎？"}, "usage_note": "問狀態。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做...嗎？", "related_terms": [{ "term_target": "Fais-tu... ?", "pronunciation": ["/fɛ ty/"], "specific_note": "" }, { "term_target": "Est-ce que tu fais... ?", "pronunciation": ["/ɛs kə ty fɛ/"], "specific_note": "常用" }], "example": {"sentence": "Est-ce que tu fais du sport ?", "translation": "你有運動嗎？"}, "usage_note": "一般疑問句。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經...嗎？", "related_terms": [{ "term_target": "As-tu déjà... ?", "pronunciation": ["/a ty de.ʒa/"], "specific_note": "" }], "example": {"sentence": "As-tu déjà vu ça ?", "translation": "你有看過這個嗎？"}, "usage_note": "問經驗。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做...？", "related_terms": [{ "term_target": "Quand est-ce que tu... ?", "pronunciation": ["/kɑ̃ ɛs kə ty/"], "specific_note": "" }], "example": {"sentence": "Quand est-ce que tu dors ?", "translation": "你何時睡？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去...？", "related_terms": [{ "term_target": "Quand vas-tu à... ?", "pronunciation": ["/kɑ̃ va ty a/"], "specific_note": "" }], "example": {"sentence": "Quand vas-tu à l'école ?", "translation": "你何時去學校？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做...？", "related_terms": [{ "term_target": "Où est-ce que tu... ?", "pronunciation": ["/u ɛs kə ty/"], "specific_note": "" }], "example": {"sentence": "Où est-ce que tu habites ?", "translation": "你住哪裡？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做...？", "related_terms": [{ "term_target": "Comment fais-tu... ?", "pronunciation": ["/kɔ.mɑ̃ fɛ ty/"], "specific_note": "" }], "example": {"sentence": "Comment fais-tu ça ?", "translation": "你怎麼做這個？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去...？", "related_terms": [{ "term_target": "Comment vas-tu à... ?", "pronunciation": ["/kɔ.mɑ̃ va ty a/"], "specific_note": "" }], "example": {"sentence": "Comment vas-tu à l'école ?", "translation": "你怎麼去學校？"}, "usage_note": "問交通方式。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是...", "related_terms": [{ "term_target": "Je ne suis pas...", "pronunciation": ["/ʒə nə sɥi pa/"], "specific_note": "" }], "example": {"sentence": "Je ne suis pas médecin.", "translation": "我不是醫生。"}, "usage_note": "否定身分。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做...", "related_terms": [{ "term_target": "Je ne (verbe) pas...", "pronunciation": ["/ʒə nə ... pa/"], "specific_note": "" }], "example": {"sentence": "Je ne fume pas.", "translation": "我不抽菸。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能...", "related_terms": [{ "term_target": "Je ne peux pas...", "pronunciation": ["/ʒə nə pø pa/"], "specific_note": "" }], "example": {"sentence": "Je ne peux pas y aller.", "translation": "我不能去。"}, "usage_note": "否定能力。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾...", "related_terms": [{ "term_target": "Je n'ai jamais...", "pronunciation": ["/ʒə ne ʒa.mɛ/"], "specific_note": "" }], "example": {"sentence": "Je n'ai jamais mangé ça.", "translation": "我沒吃過這個。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必...", "related_terms": [{ "term_target": "Je ne suis pas obligé de...", "pronunciation": ["/ʒə nə sɥi pa z‿ɔ.bli.ʒe də/"], "specific_note": "" }], "example": {"sentence": "Je ne suis pas obligé de partir.", "translation": "我不必走。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果...的話", "related_terms": [{ "term_target": "Si..., ...", "pronunciation": ["/si/"], "specific_note": "" }], "example": {"sentence": "Si tu veux, on y va.", "translation": "如果你想，我們走。"}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當...時", "related_terms": [{ "term_target": "Quand..., ...", "pronunciation": ["/kɑ̃/"], "specific_note": "" }], "example": {"sentence": "Quand je mange, je suis content.", "translation": "當我吃東西時，我很開心。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你...好嗎？", "related_terms": [{ "term_target": "Peux-tu... ?", "pronunciation": ["/pø ty/"], "specific_note": "非正式" }, { "term_target": "Pouvez-vous... ?", "pronunciation": ["/pu.ve vu/"], "specific_note": "正式" }], "example": {"sentence": "Peux-tu m'aider ?", "translation": "可以幫我嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做...吧！", "related_terms": [{ "term_target": "Allons...", "pronunciation": ["/a.lɔ̃/"], "specific_note": "正式" }, { "term_target": "On y va...", "pronunciation": ["/ɔ̃ ni va/"], "specific_note": "口語" }], "example": {"sentence": "Allons manger.", "translation": "我們去吃吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為...", "related_terms": [{ "term_target": "Je pense que...", "pronunciation": ["/ʒə pɑ̃s kə/"], "specific_note": "" }], "example": {"sentence": "Je pense que c'est bien.", "translation": "我認為這很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做...", "related_terms": [{ "term_target": "Je veux...", "pronunciation": ["/ʒə vø/"], "specific_note": "" }], "example": {"sentence": "Je veux partir.", "translation": "我想離開。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做...", "related_terms": [{ "term_target": "Je dois...", "pronunciation": ["/ʒə dwa/"], "specific_note": "" }], "example": {"sentence": "Je dois travailler.", "translation": "我必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "C'est ... de (infinitif)", "pronunciation": ["/sɛ ... də/"], "specific_note": "" }], "example": {"sentence": "C'est bien de manger.", "translation": "吃東西是很好的。"}, "usage_note": "描述動作。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我...嗎？", "related_terms": [{ "term_target": "Peux-tu m'aider à... ?", "pronunciation": ["/pø ty me.de a/"], "specific_note": "" }], "example": {"sentence": "Peux-tu m'aider à nettoyer ?", "translation": "你可以幫我打掃嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以...嗎？", "related_terms": [{ "term_target": "Puis-je... ?", "pronunciation": ["/pɥi ʒ/"], "specific_note": "正式" }, { "term_target": "Est-ce que je peux... ?", "pronunciation": ["/ɛs kə ʒə pø/"], "specific_note": "常用" }], "example": {"sentence": "Est-ce que je peux entrer ?", "translation": "我可以進來嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡...", "related_terms": [{ "term_target": "Je n'aime pas...", "pronunciation": ["/ʒə nɛm pa/"], "specific_note": "" }], "example": {"sentence": "Je n'aime pas ça.", "translation": "我不喜歡這個。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡...", "related_terms": [{ "term_target": "Je préfère...", "pronunciation": ["/ʒə pʁe.fɛʁ/"], "specific_note": "" }], "example": {"sentence": "Je préfère le thé.", "translation": "我比較喜歡茶。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更...", "related_terms": [{ "term_target": "A est plus ... que B", "pronunciation": ["/A ɛ ply ... kə B/"], "specific_note": "" }], "example": {"sentence": "C'est plus cher que ça.", "translation": "這比那個貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有...（存在）", "related_terms": [{ "term_target": "Il y a...", "pronunciation": ["/il j‿a/"], "specific_note": "" }], "example": {"sentence": "Il y a un chien.", "translation": "有一隻狗。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}