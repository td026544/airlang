import { AppData } from '../types';

export const thaiData: AppData =
{
  "meta": {
    "source_language": "zh-TW",
    "target_language": "th-TH",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 泰文完整版 (包含所有原始列表單字與完整句型 - 羅馬拼音版)"
  },
  "categories": [
    {
      "id": "greetings",
      "name": "常用句",
      "items": [
{
      "id": "greet-001",
      "term_zh": "是的",
      "related_terms": [
        {
          "term_target": "ใช่ครับ",
          "pronunciation": ["Chai Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ใช่ค่ะ",
          "pronunciation": ["Chai Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ใช่ครับ / ใช่ค่ะ",
        "translation": "是的。"
      },
      "usage_note": "單說 Kráp/Khâ 也可以表示「我在聽」或禮貌肯定的回應。",
      "image_file": "yes.png"
    },
    {
      "id": "greet-002",
      "term_zh": "不是",
      "related_terms": [
        {
          "term_target": "ไม่ใช่ครับ",
          "pronunciation": ["Mai chai Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ไม่ใช่ค่ะ",
          "pronunciation": ["Mai chai Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ไม่ใช่ครับ / ไม่ใช่ค่ะ",
        "translation": "不是喔。"
      },
      "usage_note": "Mai 是「不」，Chai 是「是」。",
      "image_file": "no.png"
    },
    {
      "id": "greet-003",
      "term_zh": "你好",
      "related_terms": [
        {
          "term_target": "สวัสดีครับ",
          "pronunciation": ["Sawatdee Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "สวัสดีค่ะ",
          "pronunciation": ["Sawatdee Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "สวัสดีครับ / สวัสดีค่ะ",
        "translation": "你好。"
      },
      "usage_note": "泰國全天通用 Sawatdee，不用分早晚安。",
      "image_file": "hello.png"
    },
    {
      "id": "greet-004",
      "term_zh": "謝謝你",
      "related_terms": [
        {
          "term_target": "ขอบคุณครับ",
          "pronunciation": ["Khop khun Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ขอบคุณค่ะ",
          "pronunciation": ["Khop khun Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ขอบคุณครับ / ขอบคุณค่ะ",
        "translation": "謝謝你。"
      },
      "usage_note": "加上 Mak (非常) 表示非常感謝。",
      "image_file": "thank_you.png"
    },
    {
      "id": "greet-005",
      "term_zh": "對不起",
      "related_terms": [
        {
          "term_target": "ขอโทษครับ",
          "pronunciation": ["Kho thot Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ขอโทษค่ะ",
          "pronunciation": ["Kho thot Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ขอโทษครับ / ขอโทษค่ะ",
        "translation": "對不起 / 不好意思。"
      },
      "usage_note": "萬用詞，道歉、藉過、引起注意都可用。",
      "image_file": "sorry.png"
    },
    {
      "id": "greet-006",
      "term_zh": "請問...",
      "related_terms": [
        {
          "term_target": "ขอถามหน่อยครับ",
          "pronunciation": ["Kho tham noi Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ขอถามหน่อยค่ะ",
          "pronunciation": ["Kho tham noi Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ขอถามหน่อยครับ / ขอถามหน่อยค่ะ",
        "translation": "不好意思，請問一下。"
      },
      "usage_note": "發問前使用，語氣較軟。",
      "image_file": "excuse_me.png"
    },
    {
      "id": "greet-007",
      "term_zh": "我不懂",
      "related_terms": [
        {
          "term_target": "ไม่เข้าใจครับ",
          "pronunciation": ["Mai khao jai Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ไม่เข้าใจค่ะ",
          "pronunciation": ["Mai khao jai Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ผมไม่เข้าใจครับ (男) / ฉันไม่เข้าใจค่ะ (女)",
        "translation": "我不懂。"
      },
      "usage_note": "Khao jai 是「明白」。",
      "image_file": "dont_understand.png"
    },
    {
      "id": "greet-008",
      "term_zh": "廁所在哪裡？",
      "related_terms": [
        {
          "term_target": "ห้องน้ำอยู่ที่ไหนครับ?",
          "pronunciation": ["Hong nam yu thi nai Kráp?"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ห้องน้ำอยู่ที่ไหนคะ?",
          "pronunciation": ["Hong nam yu thi nai Khá?"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ห้องน้ำอยู่ที่ไหนครับ? / ห้องน้ำอยู่ที่ไหนคะ?",
        "translation": "廁所在哪裡？"
      },
      "usage_note": "注意：女生疑問句用高音 Khá (คะ)。",
      "image_file": "where_bathroom.png"
    },
    {
      "id": "greet-009",
      "term_zh": "借過",
      "related_terms": [
        {
          "term_target": "ขอทางหน่อยครับ",
          "pronunciation": ["Kho thang noi Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ขอทางหน่อยค่ะ",
          "pronunciation": ["Kho thang noi Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ขอทางหน่อยครับ / ขอทางหน่อยค่ะ",
        "translation": "借過一下。"
      },
      "usage_note": "人多擁擠時使用。",
      "image_file": "excuse_me_pass.png"
    },
    {
      "id": "greet-010",
      "term_zh": "多少錢？",
      "related_terms": [
        {
          "term_target": "เท่าไหร่ครับ?",
          "pronunciation": ["Thao rai Kráp?"],
          "specific_note": "男生用"
        },
        {
          "term_target": "เท่าไหร่คะ?",
          "pronunciation": ["Thao rai Khá?"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "เท่าไหร่ครับ? / เท่าไหร่คะ?",
        "translation": "多少錢？"
      },
      "usage_note": "夜市殺價必備，女生問句用 Khá (คะ)。",
      "image_file": "how_much.png"
    },
    {
      "id": "greet-011",
      "term_zh": "我想要這個",
      "related_terms": [
        {
          "term_target": "เอาอันนี้ครับ",
          "pronunciation": ["Ao an ni Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "เอาอันนี้ค่ะ",
          "pronunciation": ["Ao an ni Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "เอาอันนี้ครับ / เอาอันนี้ค่ะ",
        "translation": "我要這個 (請給我這個)。"
      },
      "usage_note": "Ao 是「要/拿」，點餐購物最常用。",
      "image_file": "i_want_this.png"
    },
    {
      "id": "greet-012",
      "term_zh": "請給我...",
      "related_terms": [
        {
          "term_target": "ขอ...หน่อยครับ",
          "pronunciation": ["Kho ... noi Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ขอ...หน่อยค่ะ",
          "pronunciation": ["Kho ... noi Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ขอน้ำหน่อยครับ / ขอน้ำหน่อยค่ะ",
        "translation": "請給我水。"
      },
      "usage_note": "Kho (請求) ... Noi (一點/一下)。",
      "image_file": "please_give_me.png"
    },
    {
      "id": "greet-013",
      "term_zh": "這是什麼？",
      "related_terms": [
        {
          "term_target": "นี่คืออะไรครับ?",
          "pronunciation": ["Ni khue arai Kráp?"],
          "specific_note": "男生用"
        },
        {
          "term_target": "นี่คืออะไรคะ?",
          "pronunciation": ["Ni khue arai Khá?"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "นี่คืออะไรครับ? / นี่คืออะไรคะ?",
        "translation": "這是什麼？"
      },
      "usage_note": "女生問句用高音 Khá (คะ)。",
      "image_file": "what_is_this.png"
    },
    {
      "id": "greet-014",
      "term_zh": "請幫我",
      "related_terms": [
        {
          "term_target": "ช่วยด้วยครับ",
          "pronunciation": ["Chuai duai Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ช่วยด้วยค่ะ",
          "pronunciation": ["Chuai duai Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ช่วยด้วยครับ! / ช่วยด้วยค่ะ!",
        "translation": "救命！/ 請幫幫我！"
      },
      "usage_note": "一般請求幫忙用 Chuai noi。",
      "image_file": "help_me.png"
    },
    {
      "id": "greet-015",
      "term_zh": "你可以再說一次嗎？",
      "related_terms": [
        {
          "term_target": "พูดอีกทีได้ไหมครับ?",
          "pronunciation": ["Phut ik thi dai mai Kráp?"],
          "specific_note": "男生用"
        },
        {
          "term_target": "พูดอีกทีได้ไหมคะ?",
          "pronunciation": ["Phut ik thi dai mai Khá?"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "พูดอีกทีได้ไหมครับ? / พูดอีกทีได้ไหมคะ?",
        "translation": "能再說一次嗎？"
      },
      "usage_note": "Phut (說)，Ik thi (再一次)。",
      "image_file": "say_again.png"
    },
    {
      "id": "greet-016",
      "term_zh": "你可以講慢一點嗎？",
      "related_terms": [
        {
          "term_target": "พูดช้าๆ หน่อยครับ",
          "pronunciation": ["Phut cha cha noi Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "พูดช้าๆ หน่อยค่ะ",
          "pronunciation": ["Phut cha cha noi Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "พูดช้าๆ หน่อยครับ / พูดช้าๆ หน่อยค่ะ",
        "translation": "請講慢一點。"
      },
      "usage_note": "Cha cha 是「慢慢」。",
      "image_file": "speak_slowly.png"
    },
    {
      "id": "greet-017",
      "term_zh": "原來如此",
      "related_terms": [
        {
          "term_target": "เข้าใจแล้วครับ",
          "pronunciation": ["Khao jai laeo Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "เข้าใจแล้วค่ะ",
          "pronunciation": ["Khao jai laeo Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "เข้าใจแล้วครับ / เข้าใจแล้วค่ะ",
        "translation": "我懂了。"
      },
      "usage_note": "Laeo 表示「已經」。",
      "image_file": "i_see.png"
    },
    {
      "id": "greet-018",
      "term_zh": "再見",
      "related_terms": [
        {
          "term_target": "ลาก่อนครับ",
          "pronunciation": ["La gon Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ลาก่อนค่ะ",
          "pronunciation": ["La gon Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ลาก่อนครับ / ลาก่อนค่ะ",
        "translation": "再見了。"
      },
      "usage_note": "口語極常說 Bye Bye (不需加語尾助詞)。",
      "image_file": "goodbye.png"
    },
    {
      "id": "greet-019",
      "term_zh": "你好嗎",
      "related_terms": [
        {
          "term_target": "สบายดีไหมครับ?",
          "pronunciation": ["Sabai dee mai Kráp?"],
          "specific_note": "男生用"
        },
        {
          "term_target": "สบายดีไหมคะ?",
          "pronunciation": ["Sabai dee mai Khá?"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "สบายดีไหมครับ? / สบายดีไหมคะ?",
        "translation": "你過得好嗎？"
      },
      "usage_note": "回答用 Sabai dee (很好)。",
      "image_file": "how_are_you.png"
    },
    {
      "id": "greet-020",
      "term_zh": "真的嗎",
      "related_terms": [
        {
          "term_target": "จริงเหรอครับ?",
          "pronunciation": ["Jing ro Kráp?"],
          "specific_note": "男生用"
        },
        {
          "term_target": "จริงเหรอคะ?",
          "pronunciation": ["Jing ro Khá?"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "จริงเหรอครับ? / จริงเหรอคะ?",
        "translation": "真的嗎？"
      },
      "usage_note": "Jing 意思是「真」。",
      "image_file": "really.png"
    },
    {
      "id": "greet-021",
      "term_zh": "太棒了",
      "related_terms": [
        {
          "term_target": "สุดยอดครับ",
          "pronunciation": ["Sud yod Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "สุดยอดค่ะ",
          "pronunciation": ["Sud yod Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "สุดยอดครับ / สุดยอดค่ะ",
        "translation": "太厲害了！"
      },
      "usage_note": "Sud yod 原意是「頂峰」，引申為最棒。",
      "image_file": "awesome.png"
    },
    {
      "id": "greet-022",
      "term_zh": "很高興認識你",
      "related_terms": [
        {
          "term_target": "ยินดีที่ได้รู้จักครับ",
          "pronunciation": ["Yin dee thi dai ru jak Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "ยินดีที่ได้รู้จักค่ะ",
          "pronunciation": ["Yin dee thi dai ru jak Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "ยินดีที่ได้รู้จักครับ / ยินดีที่ได้รู้จักค่ะ",
        "translation": "很高興認識你。"
      },
      "usage_note": "初次見面的標準用語。",
      "image_file": "nice_to_meet_you.png"
    },
    {
      "id": "greet-023",
      "term_zh": "真可惜",
      "related_terms": [
        {
          "term_target": "เสียดายจังครับ",
          "pronunciation": ["Sia dai jang Kráp"],
          "specific_note": "男生用"
        },
        {
          "term_target": "เสียดายจังค่ะ",
          "pronunciation": ["Sia dai jang Khâ"],
          "specific_note": "女生用"
        }
      ],
      "example": {
        "sentence": "เสียดายจังครับ / เสียดายจังค่ะ",
        "translation": "真是太可惜了。"
      },
      "usage_note": "對錯失機會表示遺憾。",
      "image_file": "too_bad.png"
    }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個/它", "related_terms": [{ "term_target": "อันนั้น", "pronunciation": ["An nan"], "specific_note": "那個(物品)" }, { "term_target": "มัน", "pronunciation": ["Man"], "specific_note": "它/他(動物/卑稱)" }], "example": {"sentence": "อันนั้นคืออะไร?", "translation": "那個是什麼？"}, "usage_note": "指物體用 An nan。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "ผม", "pronunciation": ["Phom"], "specific_note": "男性用" }, { "term_target": "ฉัน", "pronunciation": ["Chan"], "specific_note": "女性/通用" }], "example": {"sentence": "ผมเป็นคนไต้หวัน", "translation": "我是台灣人(男)。"}, "usage_note": "性別區分很重要。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "คุณ", "pronunciation": ["Khun"], "specific_note": "禮貌/通用" }, { "term_target": "เธอ", "pronunciation": ["Thoe"], "specific_note": "對女性/熟人" }], "example": {"sentence": "คุณชื่ออะไร?", "translation": "你叫什麼名字？"}, "usage_note": "Khun 最安全有禮貌。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他", "related_terms": [{ "term_target": "เขา", "pronunciation": ["Khao"], "specific_note": "" }], "example": {"sentence": "เขาเป็นครู", "translation": "他是老師。"}, "usage_note": "不分男女，通常指他。", "image_file": "he.png" },
        { "id": "pro-05", "term_zh": "她", "related_terms": [{ "term_target": "เธอ", "pronunciation": ["Thoe"], "specific_note": "她/你" }, { "term_target": "เขา", "pronunciation": ["Khao"], "specific_note": "通用" }], "example": {"sentence": "เธอสวยมาก", "translation": "她很漂亮。"}, "usage_note": "Thoe 常用於指代女性。", "image_file": "she.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "เรา", "pronunciation": ["Rao"], "specific_note": "通用" }, { "term_target": "พวกเรา", "pronunciation": ["Phuak rao"], "specific_note": "強調複數" }], "example": {"sentence": "เราไปกันเถอะ", "translation": "我們走吧。"}, "usage_note": "Rao 最常用。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "他們", "related_terms": [{ "term_target": "พวกเขา", "pronunciation": ["Phuak khao"], "specific_note": "" }], "example": {"sentence": "พวกเขามาแล้ว", "translation": "他們來了。"}, "usage_note": "Phuak + 代名詞 = 複數。", "image_file": "they.png" },
        { "id": "pro-08", "term_zh": "這個", "related_terms": [{ "term_target": "อันนี้", "pronunciation": ["An ni"], "specific_note": "這個東西" }, { "term_target": "นี่", "pronunciation": ["Ni"], "specific_note": "這" }], "example": {"sentence": "อันนี้อร่อย", "translation": "這個好吃。"}, "usage_note": "An ni 指具體物品。", "image_file": "this.png" },
        { "id": "pro-09", "term_zh": "那個（指示詞）", "related_terms": [{ "term_target": "อันนั้น", "pronunciation": ["An nan"], "specific_note": "那個東西" }, { "term_target": "นั่น", "pronunciation": ["Nan"], "specific_note": "那" }], "example": {"sentence": "เอาอันนั้น", "translation": "我要那個。"}, "usage_note": "指較遠的物品。", "image_file": "that_obj.png" },
        { "id": "pro-10", "term_zh": "她的", "related_terms": [{ "term_target": "ของเขา", "pronunciation": ["Khong khao"], "specific_note": "通用的" }, { "term_target": "ของเธอ", "pronunciation": ["Khong thoe"], "specific_note": "女性的" }], "example": {"sentence": "กระเป๋าของเธอ", "translation": "她的包包。"}, "usage_note": "Khong (的) + 人稱。", "image_file": "her.png" },
        { "id": "pro-11", "term_zh": "你的", "related_terms": [{ "term_target": "ของคุณ", "pronunciation": ["Khong khun"], "specific_note": "" }], "example": {"sentence": "ชื่อของคุณ", "translation": "你的名字。"}, "usage_note": "所有格。", "image_file": "your.png" },
        { "id": "pro-12", "term_zh": "他的", "related_terms": [{ "term_target": "ของเขา", "pronunciation": ["Khong khao"], "specific_note": "" }], "example": {"sentence": "รถของเขา", "translation": "他的車。"}, "usage_note": "所有格。", "image_file": "his.png" },
        { "id": "pro-13", "term_zh": "他們的", "related_terms": [{ "term_target": "ของพวกเขา", "pronunciation": ["Khong phuak khao"], "specific_note": "" }], "example": {"sentence": "บ้านของพวกเขา", "translation": "他們的家。"}, "usage_note": "所有格。", "image_file": "their.png" },
        { "id": "pro-14", "term_zh": "我們的", "related_terms": [{ "term_target": "ของเรา", "pronunciation": ["Khong rao"], "specific_note": "" }], "example": {"sentence": "โรงเรียนของเรา", "translation": "我們的學校。"}, "usage_note": "所有格。", "image_file": "our.png" },
        { "id": "pro-15", "term_zh": "這些", "related_terms": [{ "term_target": "พวกนี้", "pronunciation": ["Phuak ni"], "specific_note": "" }, { "term_target": "เหล่านี้", "pronunciation": ["Lao ni"], "specific_note": "書面" }], "example": {"sentence": "พวกนี้คืออะไร?", "translation": "這些是什麼？"}, "usage_note": "Phuak ni 口語常用。", "image_file": "these.png" },
        { "id": "pro-16", "term_zh": "那些", "related_terms": [{ "term_target": "พวกนั้น", "pronunciation": ["Phuak nan"], "specific_note": "" }, { "term_target": "เหล่านั้น", "pronunciation": ["Lao nan"], "specific_note": "書面" }], "example": {"sentence": "พวกนั้นสวย", "translation": "那些很漂亮。"}, "usage_note": "Phuak nan 口語常用。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "เป็น", "pronunciation": ["Pen"], "specific_note": "身分/關係" }, { "term_target": "คือ", "pronunciation": ["Khue"], "specific_note": "定義/等於" }], "example": {"sentence": "ผมเป็นคนไทย", "translation": "我是泰國人。"}, "usage_note": "Pen 接形容詞或身分，Khue 用於解釋。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "มี", "pronunciation": ["Mi"], "specific_note": "" }], "example": {"sentence": "มีเงินไหม?", "translation": "有錢嗎？"}, "usage_note": "擁有或存在。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "ไป", "pronunciation": ["Pai"], "specific_note": "" }], "example": {"sentence": "ไปเที่ยว", "translation": "去玩。"}, "usage_note": "移動。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "ได้", "pronunciation": ["Dai"], "specific_note": "得到" }, { "term_target": "เอา", "pronunciation": ["Ao"], "specific_note": "拿/要" }], "example": {"sentence": "ได้รับของ", "translation": "收到東西。"}, "usage_note": "Dai 表示獲得，Ao 表示拿取意願。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "ทำ", "pronunciation": ["Tham"], "specific_note": "" }], "example": {"sentence": "ทำงาน", "translation": "工作(做工)。"}, "usage_note": "執行動作。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "พูด", "pronunciation": ["Phut"], "specific_note": "說話/語言" }, { "term_target": "บอก", "pronunciation": ["Bok"], "specific_note": "告訴" }], "example": {"sentence": "พูดไทยได้ไหม?", "translation": "會說泰文嗎？"}, "usage_note": "Phut 用於語言能力或動作。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "รู้", "pronunciation": ["Ru"], "specific_note": "知道事情" }, { "term_target": "รู้จัก", "pronunciation": ["Ru-jak"], "specific_note": "認識人/地" }], "example": {"sentence": "ผมไม่รู้", "translation": "我不知道。"}, "usage_note": "區分知道資訊與認識某人。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "คิด", "pronunciation": ["Khit"], "specific_note": "思考/想" }, { "term_target": "อยาก", "pronunciation": ["Yak"], "specific_note": "想要" }], "example": {"sentence": "คิดถึง", "translation": "想念(想+到)。"}, "usage_note": "Khit 是動腦，Yak 是慾望。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "เห็น", "pronunciation": ["Hen"], "specific_note": "看見" }, { "term_target": "ดู", "pronunciation": ["Du"], "specific_note": "觀看" }, { "term_target": "มอง", "pronunciation": ["Mong"], "specific_note": "注視" }], "example": {"sentence": "มองเห็นไหม?", "translation": "看得到嗎？"}, "usage_note": "Hen (看到), Du (看電視/電影)。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "ทำ", "pronunciation": ["Tham"], "specific_note": "" }, { "term_target": "สร้าง", "pronunciation": ["Sang"], "specific_note": "建造/創造" }], "example": {"sentence": "ทำอาหาร", "translation": "做飯。"}, "usage_note": "一般製造用 Tham。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "มา", "pronunciation": ["Ma"], "specific_note": "" }], "example": {"sentence": "มานี่", "translation": "來這。"}, "usage_note": "過來。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "ต้องการ", "pronunciation": ["Tong-kan"], "specific_note": "正式/強烈" }, { "term_target": "อยากได้", "pronunciation": ["Yak dai"], "specific_note": "想要得到" }], "example": {"sentence": "ฉันต้องการพักผ่อน", "translation": "我需要休息。"}, "usage_note": "Tong-kan 是需要。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "ใช้", "pronunciation": ["Chai"], "specific_note": "" }], "example": {"sentence": "ใช้มือถือ", "translation": "用手機。"}, "usage_note": "利用。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "หา", "pronunciation": ["Ha"], "specific_note": "找" }, { "term_target": "เจอ", "pronunciation": ["Je"], "specific_note": "遇到/找到" }], "example": {"sentence": "หาไม่เจอ", "translation": "找不到。"}, "usage_note": "Ha (找) + Mai Je (沒見到) = 找不到。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "ให้", "pronunciation": ["Hai"], "specific_note": "" }], "example": {"sentence": "ให้ฉัน", "translation": "給我。"}, "usage_note": "給予。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "บอก", "pronunciation": ["Bok"], "specific_note": "" }], "example": {"sentence": "บอกเขา", "translation": "告訴他。"}, "usage_note": "告知。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "ทำงาน", "pronunciation": ["Tham-ngan"], "specific_note": "" }], "example": {"sentence": "ไปทำงาน", "translation": "去工作。"}, "usage_note": "勞動。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "ชอบ", "pronunciation": ["Chop"], "specific_note": "" }], "example": {"sentence": "ผมชอบคุณ", "translation": "我喜歡你。"}, "usage_note": "喜好。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "ตื่น", "pronunciation": ["Tuen"], "specific_note": "醒來" }, { "term_target": "ตื่นนอน", "pronunciation": ["Tuen non"], "specific_note": "起床" }], "example": {"sentence": "ตื่นแล้ว", "translation": "醒了。"}, "usage_note": "起床。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "พูด", "pronunciation": ["Phut"], "specific_note": "講" }, { "term_target": "คุย", "pronunciation": ["Khui"], "specific_note": "聊天" }], "example": {"sentence": "คุยกัน", "translation": "聊天。"}, "usage_note": "交談用 Khui。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "ได้ยิน", "pronunciation": ["Dai-yin"], "specific_note": "聽到" }, { "term_target": "ฟัง", "pronunciation": ["Fang"], "specific_note": "聽(動作)" }], "example": {"sentence": "ไม่ได้ยิน", "translation": "沒聽到。"}, "usage_note": "Dai-yin 是能力，Fang 是動作。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "เขียน", "pronunciation": ["Khian"], "specific_note": "" }], "example": {"sentence": "เขียนชื่อ", "translation": "寫名字。"}, "usage_note": "書寫。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "อ่าน", "pronunciation": ["An"], "specific_note": "" }], "example": {"sentence": "อ่านหนังสือ", "translation": "看書(讀書)。"}, "usage_note": "閱讀。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "รอ", "pronunciation": ["Ro"], "specific_note": "" }, { "term_target": "คอย", "pronunciation": ["Khoi"], "specific_note": "等候" }], "example": {"sentence": "รอแป๊บนึง", "translation": "等一下下。"}, "usage_note": "Ro 最常用。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "ลอง", "pronunciation": ["Long"], "specific_note": "試試" }, { "term_target": "ชิม", "pronunciation": ["Chim"], "specific_note": "嚐味道" }], "example": {"sentence": "ลองดู", "translation": "試試看。"}, "usage_note": "Long 是試做，Chim 是試吃。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "จ่าย", "pronunciation": ["Jai"], "specific_note": "付" }, { "term_target": "จ่ายเงิน", "pronunciation": ["Jai ngoen"], "specific_note": "付錢" }], "example": {"sentence": "จ่ายเงินสด", "translation": "付現金。"}, "usage_note": "支付。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "เลือก", "pronunciation": ["Lueak"], "specific_note": "" }], "example": {"sentence": "เลือกไม่ถูก", "translation": "選不出來(不知道選哪個)。"}, "usage_note": "挑選。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "เข้า", "pronunciation": ["Khao"], "specific_note": "" }, { "term_target": "เข้าไป", "pronunciation": ["Khao pai"], "specific_note": "進去" }], "example": {"sentence": "เข้าห้อง", "translation": "進房間。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "อยู่", "pronunciation": ["Yu"], "specific_note": "在/住" }, { "term_target": "อาศัย", "pronunciation": ["A-sai"], "specific_note": "居住(正式)" }], "example": {"sentence": "คุณอยู่ที่ไหน?", "translation": "你住哪裡？"}, "usage_note": "Yu 既是「在」也是「住」。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "ถึง", "pronunciation": ["Thueng"], "specific_note": "" }], "example": {"sentence": "ถึงแล้ว", "translation": "到了。"}, "usage_note": "抵達。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "เดิน", "pronunciation": ["Doen"], "specific_note": "" }], "example": {"sentence": "เดินเล่น", "translation": "散步(走玩)。"}, "usage_note": "步行。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "เปิด", "pronunciation": ["Poet"], "specific_note": "" }], "example": {"sentence": "เปิดไฟ", "translation": "開燈。"}, "usage_note": "開門/開電器都用 Poet。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "ปิด", "pronunciation": ["Pit"], "specific_note": "" }], "example": {"sentence": "ปิดประตู", "translation": "關門。"}, "usage_note": "關上。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "ช่วย", "pronunciation": ["Chuai"], "specific_note": "" }], "example": {"sentence": "ช่วยหน่อย", "translation": "幫一下。"}, "usage_note": "協助。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "เอามา", "pronunciation": ["Ao ma"], "specific_note": "拿來" }, { "term_target": "พามา", "pronunciation": ["Pha ma"], "specific_note": "帶(人/動物)來" }], "example": {"sentence": "เอาน้ำมา", "translation": "拿水來。"}, "usage_note": "物體用 Ao，生命體用 Pha。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "需要", "related_terms": [{ "term_target": "ต้อง", "pronunciation": ["Tong"], "specific_note": "必須" }, { "term_target": "ต้องการ", "pronunciation": ["Tong-kan"], "specific_note": "需要(名詞)" }], "example": {"sentence": "ต้องไป", "translation": "必須去。"}, "usage_note": "必要。", "image_file": "need.png" },
        { "id": "v-37", "term_zh": "使用", "related_terms": [{ "term_target": "ใช้", "pronunciation": ["Chai"], "specific_note": "" }], "example": {"sentence": "ใช้อย่างไร", "translation": "怎麼用？"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-38", "term_zh": "變成", "related_terms": [{ "term_target": "กลายเป็น", "pronunciation": ["Klai pen"], "specific_note": "" }], "example": {"sentence": "กลายเป็นคนดี", "translation": "變成好人。"}, "usage_note": "變化。", "image_file": "become.png" },
        { "id": "v-39", "term_zh": "開始", "related_terms": [{ "term_target": "เริ่ม", "pronunciation": ["Roem"], "specific_note": "" }], "example": {"sentence": "เริ่มงาน", "translation": "開始工作。"}, "usage_note": "開始。", "image_file": "start.png" },
        { "id": "v-40", "term_zh": "開始", "related_terms": [{ "term_target": "เริ่มต้น", "pronunciation": ["Roem ton"], "specific_note": "起頭" }], "example": {"sentence": "เริ่มต้นใหม่", "translation": "重新開始。"}, "usage_note": "同 Start。", "image_file": "begin.png" },
        { "id": "v-41", "term_zh": "結束", "related_terms": [{ "term_target": "เสร็จ", "pronunciation": ["Set"], "specific_note": "做完" }, { "term_target": "จบ", "pronunciation": ["Jop"], "specific_note": "結束(課程/劇)" }], "example": {"sentence": "กินเสร็จแล้ว", "translation": "吃完了。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-42", "term_zh": "停止", "related_terms": [{ "term_target": "หยุด", "pronunciation": ["Yut"], "specific_note": "" }], "example": {"sentence": "หยุดพูด", "translation": "別說了(停止說話)。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-43", "term_zh": "記住", "related_terms": [{ "term_target": "จำ", "pronunciation": ["Jam"], "specific_note": "記" }, { "term_target": "จำได้", "pronunciation": ["Jam dai"], "specific_note": "記得" }], "example": {"sentence": "จำได้ไหม?", "translation": "記得嗎？"}, "usage_note": "記憶。", "image_file": "remember.png" },
        { "id": "v-44", "term_zh": "談話", "related_terms": [{ "term_target": "คุย", "pronunciation": ["Khui"], "specific_note": "聊天" }, { "term_target": "สนทนา", "pronunciation": ["Son-tha-na"], "specific_note": "對話(正式)" }], "example": {"sentence": "คุยกับเพื่อน", "translation": "跟朋友聊天。"}, "usage_note": "交談。", "image_file": "talk.png" },
        { "id": "v-45", "term_zh": "見面", "related_terms": [{ "term_target": "เจอ", "pronunciation": ["Je"], "specific_note": "見" }, { "term_target": "พบ", "pronunciation": ["Phop"], "specific_note": "會面(正式)" }], "example": {"sentence": "เจอกัน", "translation": "見面。"}, "usage_note": "會面。", "image_file": "meet.png" },
        { "id": "v-46", "term_zh": "乘坐（工具）", "related_terms": [{ "term_target": "นั่ง", "pronunciation": ["Nang"], "specific_note": "坐" }, { "term_target": "ขี่", "pronunciation": ["Khi"], "specific_note": "騎(機車/馬)" }], "example": {"sentence": "นั่งรถ", "translation": "坐車。"}, "usage_note": "搭乘。", "image_file": "take.png" },
        { "id": "v-47", "term_zh": "放", "related_terms": [{ "term_target": "วาง", "pronunciation": ["Wang"], "specific_note": "放置" }, { "term_target": "ใส่", "pronunciation": ["Sai"], "specific_note": "放入/穿" }], "example": {"sentence": "วางไว้ที่นี่", "translation": "放這裡。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-48", "term_zh": "吃", "related_terms": [{ "term_target": "กิน", "pronunciation": ["Kin"], "specific_note": "一般" }, { "term_target": "ทาน", "pronunciation": ["Than"], "specific_note": "禮貌" }], "example": {"sentence": "กินข้าว", "translation": "吃飯。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-49", "term_zh": "睡覺", "related_terms": [{ "term_target": "นอน", "pronunciation": ["Non"], "specific_note": "" }, { "term_target": "หลับ", "pronunciation": ["Lap"], "specific_note": "睡著" }], "example": {"sentence": "นอนหลับ", "translation": "睡著了。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-50", "term_zh": "寄送", "related_terms": [{ "term_target": "ส่ง", "pronunciation": ["Song"], "specific_note": "" }], "example": {"sentence": "ส่งข้อความ", "translation": "傳訊息。"}, "usage_note": "傳送。", "image_file": "send.png" },
        { "id": "v-51", "term_zh": "開車", "related_terms": [{ "term_target": "ขับรถ", "pronunciation": ["Khap rot"], "specific_note": "" }], "example": {"sentence": "ขับรถเป็นไหม?", "translation": "會開車嗎？"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-52", "term_zh": "讀書", "related_terms": [{ "term_target": "เรียน", "pronunciation": ["Rian"], "specific_note": "學習" }, { "term_target": "อ่านหนังสือ", "pronunciation": ["An nang sue"], "specific_note": "看書/溫習" }], "example": {"sentence": "ตั้งใจเรียน", "translation": "專心學習。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-53", "term_zh": "回去", "related_terms": [{ "term_target": "กลับ", "pronunciation": ["Klap"], "specific_note": "" }], "example": {"sentence": "กลับบ้าน", "translation": "回家。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "ดี", "pronunciation": ["Di"], "specific_note": "" }], "example": {"sentence": "คนดี", "translation": "好人。"}, "usage_note": "正面。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "ไม่ดี", "pronunciation": ["Mai di"], "specific_note": "不好" }, { "term_target": "เลว", "pronunciation": ["Leo"], "specific_note": "壞/邪惡" }], "example": {"sentence": "นิสัยไม่ดี", "translation": "習慣不好(壞習慣)。"}, "usage_note": "負面。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "ใหม่", "pronunciation": ["Mai"], "specific_note": "" }], "example": {"sentence": "ปีใหม่", "translation": "新年。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "แรก", "pronunciation": ["Raek"], "specific_note": "最初/第一" }, { "term_target": "ที่หนึ่ง", "pronunciation": ["Thi nueng"], "specific_note": "第一名" }], "example": {"sentence": "วันแรก", "translation": "第一天。"}, "usage_note": "順序。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "ที่แล้ว", "pronunciation": ["Thi laeo"], "specific_note": "過去的" }, { "term_target": "ก่อน", "pronunciation": ["Kon"], "specific_note": "之前" }], "example": {"sentence": "เดือนที่แล้ว", "translation": "上個月。"}, "usage_note": "過去的。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "หน้า", "pronunciation": ["Na"], "specific_note": "前方/下一個" }, { "term_target": "ถัดไป", "pronunciation": ["That pai"], "specific_note": "接下來" }], "example": {"sentence": "อาทิตย์หน้า", "translation": "下週。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "ยาว", "pronunciation": ["Yao"], "specific_note": "長度" }, { "term_target": "นาน", "pronunciation": ["Nan"], "specific_note": "時間久" }], "example": {"sentence": "ผมยาว", "translation": "長髮。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "ใหญ่", "pronunciation": ["Yai"], "specific_note": "" }, { "term_target": "โต", "pronunciation": ["To"], "specific_note": "長大" }], "example": {"sentence": "ตัวใหญ่", "translation": "體型大。"}, "usage_note": "體積大。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "เล็ก", "pronunciation": ["Lek"], "specific_note": "" }, { "term_target": "น้อย", "pronunciation": ["Noi"], "specific_note": "少/小" }], "example": {"sentence": "ห้องเล็ก", "translation": "小房間。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "มาก", "pronunciation": ["Mak"], "specific_note": "很/多" }, { "term_target": "เยอะ", "pronunciation": ["Yoe"], "specific_note": "很多" }], "example": {"sentence": "คนเยอะ", "translation": "人很多。"}, "usage_note": "數量多。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "สูง", "pronunciation": ["Sung"], "specific_note": "" }], "example": {"sentence": "เขาสูง", "translation": "他很高。"}, "usage_note": "高度。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "หนุ่ม", "pronunciation": ["Num"], "specific_note": "年輕(男)" }, { "term_target": "สาว", "pronunciation": ["Sao"], "specific_note": "年輕(女)" }], "example": {"sentence": "ยังหนุ่ม", "translation": "還年輕。"}, "usage_note": "年紀小。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的", "related_terms": [{ "term_target": "แก่", "pronunciation": ["Kae"], "specific_note": "人/生物" }, { "term_target": "เก่า", "pronunciation": ["Kao"], "specific_note": "物品" }], "example": {"sentence": "คนแก่", "translation": "老人。"}, "usage_note": "區分人與物。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "ใกล้", "pronunciation": ["Klai"], "specific_note": "三聲(falling tone)" }], "example": {"sentence": "ใกล้บ้าน", "translation": "離家近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "ไกล", "pronunciation": ["Klai"], "specific_note": "一聲(mid tone)" }], "example": {"sentence": "ไกลมาก", "translation": "很遠。"}, "usage_note": "距離遠 (注意與近的聲調不同)。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "เร็ว", "pronunciation": ["Reo"], "specific_note": "快速" }, { "term_target": "ไว", "pronunciation": ["Wai"], "specific_note": "敏捷" }], "example": {"sentence": "ขับรถเร็ว", "translation": "開快車。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "ช้า", "pronunciation": ["Cha"], "specific_note": "" }], "example": {"sentence": "ช้าๆ", "translation": "慢一點。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "ร้อน", "pronunciation": ["Ron"], "specific_note": "" }], "example": {"sentence": "อากาศร้อน", "translation": "天氣熱。"}, "usage_note": "高溫。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "หนาว", "pronunciation": ["Nao"], "specific_note": "天氣冷(發抖)" }, { "term_target": "เย็น", "pronunciation": ["Yen"], "specific_note": "涼/冰(物品)" }], "example": {"sentence": "น้ำเย็น", "translation": "冰水。"}, "usage_note": "低溫。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "สะอาด", "pronunciation": ["Sa-at"], "specific_note": "" }], "example": {"sentence": "ห้องสะอาด", "translation": "乾淨的房間。"}, "usage_note": "無髒汙。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "สกปรก", "pronunciation": ["Sok-ka-prok"], "specific_note": "" }], "example": {"sentence": "สกปรกมาก", "translation": "很髒。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "ง่าย", "pronunciation": ["Ngai"], "specific_note": "" }], "example": {"sentence": "ง่ายมาก", "translation": "很簡單。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "ยาก", "pronunciation": ["Yak"], "specific_note": "" }], "example": {"sentence": "ภาษาไทยยาก", "translation": "泰文很難。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "ถูก", "pronunciation": ["Thuk"], "specific_note": "" }, { "term_target": "ถูกต้อง", "pronunciation": ["Thuk tong"], "specific_note": "正確無誤" }], "example": {"sentence": "ทำถูกแล้ว", "translation": "做對了。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "ผิด", "pronunciation": ["Phit"], "specific_note": "" }], "example": {"sentence": "เข้าใจผิด", "translation": "誤會(理解錯)。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "สำคัญ", "pronunciation": ["Sam-khan"], "specific_note": "" }], "example": {"sentence": "คนสำคัญ", "translation": "重要的人。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "ต่างกัน", "pronunciation": ["Tang kan"], "specific_note": "" }, { "term_target": "ไม่เหมือนกัน", "pronunciation": ["Mai muean kan"], "specific_note": "不一樣" }], "example": {"sentence": "คิดต่างกัน", "translation": "想法不同。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "จริง", "pronunciation": ["Jing"], "specific_note": "" }], "example": {"sentence": "เรื่องจริง", "translation": "真實的事。"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "สนุก", "pronunciation": ["Sanuk"], "specific_note": "好玩/有趣" }, { "term_target": "น่าสนใจ", "pronunciation": ["Na son jai"], "specific_note": "感興趣" }], "example": {"sentence": "สนุกไหม?", "translation": "好玩嗎？"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "สวย", "pronunciation": ["Suai"], "specific_note": "漂亮(女/景)" }, { "term_target": "หล่อ", "pronunciation": ["Lo"], "specific_note": "帥(男)" }], "example": {"sentence": "ผู้หญิงสวย", "translation": "美女。"}, "usage_note": "形容人或景物。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "ถูก", "pronunciation": ["Thuk"], "specific_note": "" }], "example": {"sentence": "ราคาถูก", "translation": "價格便宜。"}, "usage_note": "價格低(Thuk 也有正確的意思)。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "แพง", "pronunciation": ["Phaeng"], "specific_note": "" }], "example": {"sentence": "แพงมาก", "translation": "很貴。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "หิว", "pronunciation": ["Hio"], "specific_note": "" }], "example": {"sentence": "หิวข้าว", "translation": "肚子餓(想吃飯)。"}, "usage_note": "餓。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "เหนื่อย", "pronunciation": ["Nueai"], "specific_note": "" }], "example": {"sentence": "ทำงานเหนื่อย", "translation": "工作累。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "ยุ่ง", "pronunciation": ["Yung"], "specific_note": "" }], "example": {"sentence": "ช่วงนี้ยุ่ง", "translation": "最近很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "ดีใจ", "pronunciation": ["Di jai"], "specific_note": "開心" }, { "term_target": "มีความสุข", "pronunciation": ["Mi khwam suk"], "specific_note": "幸福" }], "example": {"sentence": "ดีใจด้วย", "translation": "恭喜(為你高興)。"}, "usage_note": "心情。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "เศร้า", "pronunciation": ["Sao"], "specific_note": "" }, { "term_target": "เสียใจ", "pronunciation": ["Sia jai"], "specific_note": "傷心/遺憾" }], "example": {"sentence": "เพลงเศร้า", "translation": "悲傷的歌。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "คล้ายกัน", "pronunciation": ["Khlai kan"], "specific_note": "類似" }, { "term_target": "เหมือนกัน", "pronunciation": ["Muean kan"], "specific_note": "一樣" }], "example": {"sentence": "หน้าคล้ายกัน", "translation": "長得像。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "มีชื่อเสียง", "pronunciation": ["Mi chue siang"], "specific_note": "" }, { "term_target": "ดัง", "pronunciation": ["Dang"], "specific_note": "紅/響亮" }], "example": {"sentence": "ดาราดัง", "translation": "紅星(有名的明星)。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "ต่างชาติ", "pronunciation": ["Tang chat"], "specific_note": "外國籍" }, { "term_target": "ต่างประเทศ", "pronunciation": ["Tang prathet"], "specific_note": "外國(地點)" }], "example": {"sentence": "เพื่อนต่างชาติ", "translation": "外國朋友。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "ฉลาด", "pronunciation": ["Chalat"], "specific_note": "" }, { "term_target": "เก่ง", "pronunciation": ["Keng"], "specific_note": "厲害/棒" }], "example": {"sentence": "เด็กฉลาด", "translation": "聰明的孩子。"}, "usage_note": "腦袋好。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "อันตราย", "pronunciation": ["An-ta-rai"], "specific_note": "" }], "example": {"sentence": "ขับรถอันตราย", "translation": "開車危險。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "ใจดี", "pronunciation": ["Jai di"], "specific_note": "心好" }], "example": {"sentence": "เขาใจดี", "translation": "他人很好。"}, "usage_note": "溫柔/好心。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "ทุก", "pronunciation": ["Thuk"], "specific_note": "每" }, { "term_target": "ทั้งหมด", "pronunciation": ["Thang mot"], "specific_note": "全部" }], "example": {"sentence": "ทุกคน", "translation": "每個人(大家)。"}, "usage_note": "全部。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "ที่ชอบ", "pronunciation": ["Thi chop"], "specific_note": "" }, { "term_target": "โปรด", "pronunciation": ["Prot"], "specific_note": "喜愛/請" }], "example": {"sentence": "อาหารจานโปรด", "translation": "最愛的一道菜。"}, "usage_note": "中意。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "อร่อย", "pronunciation": ["Aroi"], "specific_note": "" }], "example": {"sentence": "อร่อยมาก", "translation": "非常好吃。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "เวลา", "pronunciation": ["Wela"], "specific_note": "" }], "example": {"sentence": "กี่โมง", "translation": "幾點？"}, "usage_note": "時刻/時間。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "คน", "pronunciation": ["Khon"], "specific_note": "人" }, { "term_target": "ประชาชน", "pronunciation": ["Prachachon"], "specific_note": "民眾" }], "example": {"sentence": "คนไทย", "translation": "泰國人。"}, "usage_note": "泛指人。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "เงิน", "pronunciation": ["Ngoen"], "specific_note": "" }], "example": {"sentence": "เก็บเงิน", "translation": "存錢/收錢。"}, "usage_note": "不可數。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "เด็ก", "pronunciation": ["Dek"], "specific_note": "兒童" }, { "term_target": "ลูก", "pronunciation": ["Luk"], "specific_note": "子女" }], "example": {"sentence": "เด็กๆ", "translation": "孩子們。"}, "usage_note": "兒童。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "น้ำ", "pronunciation": ["Nam"], "specific_note": "" }], "example": {"sentence": "ดื่มน้ำ", "translation": "喝水。"}, "usage_note": "不可數。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "อาหาร", "pronunciation": ["A-han"], "specific_note": "" }, { "term_target": "ของกิน", "pronunciation": ["Khong kin"], "specific_note": "吃的東西(口語)" }], "example": {"sentence": "ร้านอาหาร", "translation": "餐廳(賣食物的店)。"}, "usage_note": "吃的東西。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "เพื่อน", "pronunciation": ["Phuean"], "specific_note": "" }], "example": {"sentence": "เพื่อนสนิท", "translation": "密友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "ครอบครัว", "pronunciation": ["Khrop khrua"], "specific_note": "" }], "example": {"sentence": "รักครอบครัว", "translation": "愛家。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "นักเรียน", "pronunciation": ["Nak rian"], "specific_note": "中小學生" }, { "term_target": "นักศึกษา", "pronunciation": ["Nak suek sa"], "specific_note": "大學生" }], "example": {"sentence": "เป็นนักเรียน", "translation": "是學生。"}, "usage_note": "在學者。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "วัฒนธรรม", "pronunciation": ["Watthanatham"], "specific_note": "" }], "example": {"sentence": "วัฒนธรรมไทย", "translation": "泰國文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "ปัญหา", "pronunciation": ["Pan-ha"], "specific_note": "麻煩/問題" }, { "term_target": "คำถาม", "pronunciation": ["Kham tham"], "specific_note": "提問" }], "example": {"sentence": "มีปัญหา", "translation": "有問題。"}, "usage_note": "難題。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "บริษัท", "pronunciation": ["Borisat"], "specific_note": "" }], "example": {"sentence": "ทำงานบริษัท", "translation": "在公司上班。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "ผู้ชาย", "pronunciation": ["Phu chai"], "specific_note": "" }], "example": {"sentence": "ห้องน้ำชาย", "translation": "男廁。"}, "usage_note": "性別。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "ผู้หญิง", "pronunciation": ["Phu ying"], "specific_note": "" }], "example": {"sentence": "ห้องน้ำหญิง", "translation": "女廁。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "โรงเรียน", "pronunciation": ["Rong rian"], "specific_note": "" }, { "term_target": "มหาลัย", "pronunciation": ["Mahalai"], "specific_note": "大學(口語)" }], "example": {"sentence": "ไปโรงเรียน", "translation": "去上學。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "ครู", "pronunciation": ["Khru"], "specific_note": "中小學老師" }, { "term_target": "อาจารย์", "pronunciation": ["A-jan"], "specific_note": "教授/大學老師" }], "example": {"sentence": "วันครู", "translation": "教師節。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "หนัง", "pronunciation": ["Nang"], "specific_note": "電影" }, { "term_target": "วิดีโอ", "pronunciation": ["Widi-o"], "specific_note": "影片" }], "example": {"sentence": "โรงหนัง", "translation": "電影院。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "มือถือ", "pronunciation": ["Mue thue"], "specific_note": "手機(手持)" }, { "term_target": "โทรศัพท์", "pronunciation": ["Thorasap"], "specific_note": "電話" }], "example": {"sentence": "เล่นมือถือ", "translation": "玩手機。"}, "usage_note": "電話。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "คอมพิวเตอร์", "pronunciation": ["Khom-phiu-toe"], "specific_note": "" }, { "term_target": "คอม", "pronunciation": ["Khom"], "specific_note": "簡稱" }], "example": {"sentence": "ร้านคอม", "translation": "電腦店。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "รถ", "pronunciation": ["Rot"], "specific_note": "車(泛指)" }, { "term_target": "รถยนต์", "pronunciation": ["Rot yon"], "specific_note": "汽車" }], "example": {"sentence": "รถติด", "translation": "塞車。"}, "usage_note": "汽車。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "ตลาด", "pronunciation": ["Talat"], "specific_note": "" }, { "term_target": "ตลาดนัด", "pronunciation": ["Talat nat"], "specific_note": "夜市/市集" }], "example": {"sentence": "เดินตลาด", "translation": "逛市場。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "เสื้อผ้า", "pronunciation": ["Suea pha"], "specific_note": "衣物" }, { "term_target": "ชุด", "pronunciation": ["Chut"], "specific_note": "一套衣服" }], "example": {"sentence": "ซักเสื้อผ้า", "translation": "洗衣服。"}, "usage_note": "衣物。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "ร้านค้า", "pronunciation": ["Ran kha"], "specific_note": "" }, { "term_target": "ร้าน", "pronunciation": ["Ran"], "specific_note": "店" }], "example": {"sentence": "ร้านกาแฟ", "translation": "咖啡店。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "รถเมล์", "pronunciation": ["Rot me"], "specific_note": "公車(市區)" }, { "term_target": "รถบัส", "pronunciation": ["Rot bat"], "specific_note": "巴士(長途/遊覽)" }], "example": {"sentence": "ป้ายรถเมล์", "translation": "公車站牌。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "ถนน", "pronunciation": ["Thanon"], "specific_note": "大路" }, { "term_target": "ซอย", "pronunciation": ["Soi"], "specific_note": "巷" }], "example": {"sentence": "ข้ามถนน", "translation": "過馬路。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "บ้าน", "pronunciation": ["Ban"], "specific_note": "" }], "example": {"sentence": "อยู่บ้าน", "translation": "在家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "แม่", "pronunciation": ["Mae"], "specific_note": "" }], "example": {"sentence": "วันแม่", "translation": "母親節。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "พ่อ", "pronunciation": ["Pho"], "specific_note": "" }], "example": {"sentence": "วันพ่อ", "translation": "父親節。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "พี่ชาย", "pronunciation": ["Phi chai"], "specific_note": "哥哥" }, { "term_target": "น้องชาย", "pronunciation": ["Nong chai"], "specific_note": "弟弟" }], "example": {"sentence": "พี่น้อง", "translation": "兄弟姊妹。"}, "usage_note": "兄弟。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "พี่สาว", "pronunciation": ["Phi sao"], "specific_note": "姊姊" }, { "term_target": "น้องสาว", "pronunciation": ["Nong sao"], "specific_note": "妹妹" }], "example": {"sentence": "มีพี่สาว", "translation": "有姊姊。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "ภาษาจีน", "pronunciation": ["Phasa Jin"], "specific_note": "" }], "example": {"sentence": "เรียนภาษาจีน", "translation": "學中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "ตอนเช้า", "pronunciation": ["Ton chao"], "specific_note": "" }], "example": {"sentence": "ตื่นตอนเช้า", "translation": "早上醒來。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "กลางคืน", "pronunciation": ["Klang khuen"], "specific_note": "晚上" }, { "term_target": "ดึก", "pronunciation": ["Duek"], "specific_note": "深夜" }], "example": {"sentence": "เที่ยวดึก", "translation": "玩到很晚。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "ตั๋ว", "pronunciation": ["Tua"], "specific_note": "" }, { "term_target": "บัตร", "pronunciation": ["Bat"], "specific_note": "卡/票" }], "example": {"sentence": "ตั๋วหนัง", "translation": "電影票。"}, "usage_note": "票。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "กระเป๋า", "pronunciation": ["Krapao"], "specific_note": "" }], "example": {"sentence": "กระเป๋าตังค์", "translation": "錢包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "แก้ว", "pronunciation": ["Kaeo"], "specific_note": "玻璃杯/杯子" }, { "term_target": "ถ้วย", "pronunciation": ["Thuai"], "specific_note": "碗/杯(有耳)" }], "example": {"sentence": "แก้วน้ำ", "translation": "水杯。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "หมอ", "pronunciation": ["Mo"], "specific_note": "口語" }, { "term_target": "แพทย์", "pronunciation": ["Phaet"], "specific_note": "正式/醫學" }], "example": {"sentence": "ไปหาหมอ", "translation": "去看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "ตำรวจ", "pronunciation": ["Tam ruat"], "specific_note": "" }], "example": {"sentence": "สถานีตำรวจ", "translation": "警察局。"}, "usage_note": "警察。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "โรงพยาบาล", "pronunciation": ["Rong phayaban"], "specific_note": "" }], "example": {"sentence": "ถึงโรงพยาบาล", "translation": "到醫院。"}, "usage_note": "醫療院所。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "ที่นั่ง", "pronunciation": ["Thi nang"], "specific_note": "" }], "example": {"sentence": "จองที่นั่ง", "translation": "訂位。"}, "usage_note": "位子。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "ประตู", "pronunciation": ["Pratu"], "specific_note": "" }], "example": {"sentence": "เคาะประตู", "translation": "敲門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "ห้อง", "pronunciation": ["Hong"], "specific_note": "" }], "example": {"sentence": "ห้องนอน", "translation": "臥室(睡房)。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "สถานี", "pronunciation": ["Sathani"], "specific_note": "火車/捷運站" }, { "term_target": "ป้าย", "pronunciation": ["Pai"], "specific_note": "公車站牌" }], "example": {"sentence": "สถานีรถไฟ", "translation": "火車站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "รถไฟใต้ดิน", "pronunciation": ["Rot fai tai din"], "specific_note": "MRT(地下)" }, { "term_target": "รถไฟฟ้า", "pronunciation": ["Rot fai fa"], "specific_note": "BTS(空鐵)" }], "example": {"sentence": "นั่งรถไฟฟ้า", "translation": "搭捷運。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "รถไฟ", "pronunciation": ["Rot fai"], "specific_note": "" }], "example": {"sentence": "ตั๋วรถไฟ", "translation": "火車票。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "สนามบิน", "pronunciation": ["Sanam bin"], "specific_note": "" }], "example": {"sentence": "ไปสนามบิน", "translation": "去機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "กระเป๋าเดินทาง", "pronunciation": ["Krapao doen thang"], "specific_note": "旅行箱" }, { "term_target": "สัมภาระ", "pronunciation": ["Samphara"], "specific_note": "行李(正式)" }], "example": {"sentence": "รับกระเป๋า", "translation": "領行李。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "แผนที่", "pronunciation": ["Phaen thi"], "specific_note": "" }], "example": {"sentence": "ดูแผนที่", "translation": "看地圖。"}, "usage_note": "指引。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "เคาน์เตอร์", "pronunciation": ["Khao-toe"], "specific_note": "" }, { "term_target": "ช่องขายตั๋ว", "pronunciation": ["Chong khai tua"], "specific_note": "售票口" }], "example": {"sentence": "ติดต่อเคาน์เตอร์", "translation": "聯繫櫃檯。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "ล็อบบี้", "pronunciation": ["Lop-bi"], "specific_note": "" }, { "term_target": "โถง", "pronunciation": ["Thong"], "specific_note": "大廳/堂" }], "example": {"sentence": "นัดที่ล็อบบี้", "translation": "約在大廳。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "จอง", "pronunciation": ["Jong"], "specific_note": "" }], "example": {"sentence": "จองโต๊ะ", "translation": "訂位(桌)。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "เช็คอิน", "pronunciation": ["Chek-in"], "specific_note": "" }], "example": {"sentence": "เช็คอินที่ไหน", "translation": "在哪入住？"}, "usage_note": "Check-in。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "เช็คเอาท์", "pronunciation": ["Chek-ao"], "specific_note": "" }, { "term_target": "คืนห้อง", "pronunciation": ["Khuen hong"], "specific_note": "退房(還房)" }], "example": {"sentence": "คืนห้องเที่ยง", "translation": "中午退房。"}, "usage_note": "Check-out。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "เครื่องดื่ม", "pronunciation": ["Khrueang duem"], "specific_note": "" }, { "term_target": "น้ำ", "pronunciation": ["Nam"], "specific_note": "水/飲料" }], "example": {"sentence": "สั่งเครื่องดื่ม", "translation": "點飲料。"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "เมนู", "pronunciation": ["Menu"], "specific_note": "" }], "example": {"sentence": "ดูเมนู", "translation": "看菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "อาหารเที่ยง", "pronunciation": ["A-han thiang"], "specific_note": "" }, { "term_target": "ข้าวเที่ยง", "pronunciation": ["Khao thiang"], "specific_note": "午飯(口語)" }], "example": {"sentence": "กินข้าวเที่ยง", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "อาหารเย็น", "pronunciation": ["A-han yen"], "specific_note": "" }, { "term_target": "ข้าวเย็น", "pronunciation": ["Khao yen"], "specific_note": "晚飯(口語)" }], "example": {"sentence": "กินข้าวเย็น", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "บิล", "pronunciation": ["Bin"], "specific_note": "單據" }, { "term_target": "เช็คบิล", "pronunciation": ["Chek bin"], "specific_note": "結帳" }], "example": {"sentence": "เก็บเงิน", "translation": "收錢(結帳)。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "ราคา", "pronunciation": ["Rakha"], "specific_note": "" }], "example": {"sentence": "ราคาเท่าไหร่", "translation": "價格多少？"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "ใบเสร็จ", "pronunciation": ["Baiset"], "specific_note": "" }], "example": {"sentence": "ขอใบเสร็จ", "translation": "要收據。"}, "usage_note": "統一發票。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "ไซส์", "pronunciation": ["Sai"], "specific_note": "" }, { "term_target": "ขนาด", "pronunciation": ["Khanat"], "specific_note": "大小/規模" }], "example": {"sentence": "ไซส์ M", "translation": "M號。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "ทางเข้า", "pronunciation": ["Thang khao"], "specific_note": "" }], "example": {"sentence": "ป้ายทางเข้า", "translation": "入口標示。"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "ทางออก", "pronunciation": ["Thang ok"], "specific_note": "" }], "example": {"sentence": "ประตูทางออก", "translation": "出口門。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "ไต้หวัน", "pronunciation": ["Tai-wan"], "specific_note": "" }], "example": {"sentence": "ไปไต้หวัน", "translation": "去台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "台灣人", "related_terms": [{ "term_target": "คนไต้หวัน", "pronunciation": ["Khon Tai-wan"], "specific_note": "" }], "example": {"sentence": "เป็นคนไต้หวัน", "translation": "是台灣人。"}, "usage_note": "國籍。", "image_file": "taiwanese.png" },
        { "id": "n-66", "term_zh": "一切事物", "related_terms": [{ "term_target": "ทุกอย่าง", "pronunciation": ["Thuk yang"], "specific_note": "" }], "example": {"sentence": "ทำทุกอย่าง", "translation": "做所有事。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-67", "term_zh": "錢包", "related_terms": [{ "term_target": "กระเป๋าเงิน", "pronunciation": ["Krapao ngoen"], "specific_note": "錢包" }, { "term_target": "กระเป๋าสตางค์", "pronunciation": ["Krapao satang"], "specific_note": "錢包(正式)" }], "example": {"sentence": "ลืมกระเป๋าเงิน", "translation": "忘了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-68", "term_zh": "身分證", "related_terms": [{ "term_target": "บัตรประชาชน", "pronunciation": ["Bat prachachon"], "specific_note": "" }], "example": {"sentence": "พกบัตรประชาชน", "translation": "帶身分證。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-69", "term_zh": "護照", "related_terms": [{ "term_target": "พาสปอร์ต", "pronunciation": ["Phatsapo"], "specific_note": "借詞" }, { "term_target": "หนังสือเดินทาง", "pronunciation": ["Nang sue doen thang"], "specific_note": "正式" }], "example": {"sentence": "ทำพาสปอร์ต", "translation": "辦護照。"}, "usage_note": "出國必備。", "image_file": "passport.png" },
        { "id": "n-70", "term_zh": "餐廳", "related_terms": [{ "term_target": "ร้านอาหาร", "pronunciation": ["Ran a-han"], "specific_note": "" }, { "term_target": "ภัตตาคาร", "pronunciation": ["Phattakhan"], "specific_note": "大酒樓" }], "example": {"sentence": "จองร้านอาหาร", "translation": "訂餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-71", "term_zh": "飯店", "related_terms": [{ "term_target": "โรงแรม", "pronunciation": ["Rong raem"], "specific_note": "" }], "example": {"sentence": "พักโรงแรม", "translation": "住飯店。"}, "usage_note": "住宿。", "image_file": "hotel.png" },
        { "id": "n-72", "term_zh": "場所", "related_terms": [{ "term_target": "สถานที่", "pronunciation": ["Sathanthi"], "specific_note": "場所/地點" }, { "term_target": "ที่", "pronunciation": ["Thi"], "specific_note": "地方" }], "example": {"sentence": "สถานที่ท่องเที่ยว", "translation": "旅遊景點。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-73", "term_zh": "用品店員", "related_terms": [{ "term_target": "พนักงาน", "pronunciation": ["Phanak ngan"], "specific_note": "職員/員工" }, { "term_target": "คนขาย", "pronunciation": ["Khon khai"], "specific_note": "賣的人" }], "example": {"sentence": "เรียกพนักงาน", "translation": "叫店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-74", "term_zh": "超市", "related_terms": [{ "term_target": "ซูเปอร์มาร์เก็ต", "pronunciation": ["Supphoe"], "specific_note": "" }], "example": {"sentence": "เดินซูเปอร์", "translation": "逛超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-75", "term_zh": "月台", "related_terms": [{ "term_target": "ชานชาลา", "pronunciation": ["Chan chala"], "specific_note": "" }], "example": {"sentence": "รอที่ชานชาลา", "translation": "在月台等。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "ตอนนี้", "pronunciation": ["Ton ni"], "specific_note": "此刻" }, { "term_target": "เดี๋ยวนี้", "pronunciation": ["Diao ni"], "specific_note": "馬上/現在" }], "example": {"sentence": "ไปเดี๋ยวนี้", "translation": "現在去。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "มาก", "pronunciation": ["Mak"], "specific_note": "很/非常" }, { "term_target": "มากๆ", "pronunciation": ["Mak mak"], "specific_note": "超級" }], "example": {"sentence": "ชอบมาก", "translation": "很喜歡。"}, "usage_note": "強調。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "จริงๆ", "pronunciation": ["Jing jing"], "specific_note": "" }], "example": {"sentence": "รักจริงๆ", "translation": "真的愛。"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "ดี", "pronunciation": ["Di"], "specific_note": "" }], "example": {"sentence": "ทำดี", "translation": "做得好。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "บ่อยๆ", "pronunciation": ["Boi boi"], "specific_note": "" }], "example": {"sentence": "มาบ่อยๆ", "translation": "常來。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "ปกติ", "pronunciation": ["Pokkati"], "specific_note": "" }, { "term_target": "ธรรมดา", "pronunciation": ["Thammada"], "specific_note": "普通/平常" }], "example": {"sentence": "ปกติกินข้าว", "translation": "通常吃飯。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "แล้ว", "pronunciation": ["Laeo"], "specific_note": "放在句尾" }], "example": {"sentence": "ไปแล้ว", "translation": "去了。"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "เท่านั้น", "pronunciation": ["Thao nan"], "specific_note": "而已" }, { "term_target": "แค่", "pronunciation": ["Khae"], "specific_note": "僅僅" }], "example": {"sentence": "แค่ 5 บาท", "translation": "只要5銖。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "อีก", "pronunciation": ["Ik"], "specific_note": "再" }, { "term_target": "อีกครั้ง", "pronunciation": ["Ik krang"], "specific_note": "再一次" }], "example": {"sentence": "เอาอีก", "translation": "還要。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "ประมาณ", "pronunciation": ["Praman"], "specific_note": "" }, { "term_target": "ราวๆ", "pronunciation": ["Rao rao"], "specific_note": "左右" }], "example": {"sentence": "ประมาณ 100", "translation": "大約一百。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "นิดหน่อย", "pronunciation": ["Nit noi"], "specific_note": "" }], "example": {"sentence": "เจ็บนิดหน่อย", "translation": "有點痛。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "ก็...เหมือนกัน", "pronunciation": ["Ko ... muean kan"], "specific_note": "" }, { "term_target": "ด้วย", "pronunciation": ["Duai"], "specific_note": "也/一起(句尾)" }], "example": {"sentence": "我也ไป", "translation": "我也去。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "อาจจะ", "pronunciation": ["At ja"], "specific_note": "" }], "example": {"sentence": "อาจจะไม่ไป", "translation": "可能不去。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "ทีหลัง", "pronunciation": ["Thi lang"], "specific_note": "以後" }, { "term_target": "หลังจากนั้น", "pronunciation": ["Lang jak nan"], "specific_note": "在那之後" }], "example": {"sentence": "ค่อยคุยทีหลัง", "translation": "以後再談。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "เร็วๆ นี้", "pronunciation": ["Reo reo ni"], "specific_note": "最近/即將" }], "example": {"sentence": "จะมาเร็วๆ นี้", "translation": "快要來了。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "ด้วยกัน", "pronunciation": ["Duai kan"], "specific_note": "" }], "example": {"sentence": "กินด้วยกัน", "translation": "一起吃。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "ยัง", "pronunciation": ["Yang"], "specific_note": "還/仍" }], "example": {"sentence": "ยังอยู่ที่นี่", "translation": "還在這裡。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "โดยทั่วไป", "pronunciation": ["Doi thua pai"], "specific_note": "一般而言" }], "example": {"sentence": "โดยทั่วไปชอบ", "translation": "一般來說喜歡。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "ทันที", "pronunciation": ["Than thi"], "specific_note": "" }, { "term_target": "เดี๋ยวนี้", "pronunciation": ["Diao ni"], "specific_note": "現在馬上" }], "example": {"sentence": "ไปทันที", "translation": "立刻去。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "ก็ไม่...", "pronunciation": ["Ko mai ..."], "specific_note": "" }], "example": {"sentence": "ผมก็ไม่รู้", "translation": "我也不知道。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "อะไร", "pronunciation": ["A-rai"], "specific_note": "" }], "example": {"sentence": "ชื่ออะไร?", "translation": "什麼名字？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "อย่างไร", "pronunciation": ["Yang rai"], "specific_note": "書面" }, { "term_target": "ยังไง", "pronunciation": ["Yang ngai"], "specific_note": "口語" }], "example": {"sentence": "ทำยังไง?", "translation": "怎麼做？"}, "usage_note": "問狀況。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "เมื่อไหร่", "pronunciation": ["Muea rai"], "specific_note": "" }], "example": {"sentence": "กลับเมื่อไหร่?", "translation": "何時回來？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "ที่ไหน", "pronunciation": ["Thi nai"], "specific_note": "在哪" }, { "term_target": "ไหน", "pronunciation": ["Nai"], "specific_note": "哪(簡稱)" }], "example": {"sentence": "อยู่ไหน?", "translation": "在哪？"}, "usage_note": "問地點。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "ใคร", "pronunciation": ["Khrai"], "specific_note": "" }], "example": {"sentence": "ของใคร?", "translation": "誰的？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "ทำไม", "pronunciation": ["Thammai"], "specific_note": "" }], "example": {"sentence": "ทำไมมาช้า?", "translation": "為什麼晚來？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "อันไหน", "pronunciation": ["An nai"], "specific_note": "哪個(物)" }, { "term_target": "คนไหน", "pronunciation": ["Khon nai"], "specific_note": "哪位(人)" }], "example": {"sentence": "เอาอันไหน?", "translation": "要哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "เท่าไหร่", "pronunciation": ["Thao rai"], "specific_note": "金額/量" }, { "term_target": "กี่", "pronunciation": ["Ki"], "specific_note": "幾(可數)" }], "example": {"sentence": "กี่คน?", "translation": "幾個人？"}, "usage_note": "Ki 接量詞，Thao rai 問價錢/程度。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "นานแค่ไหน", "pronunciation": ["Nan khae nai"], "specific_note": "多長時間" }, { "term_target": "กี่ชั่วโมง", "pronunciation": ["Ki chua mong"], "specific_note": "幾小時" }], "example": {"sentence": "รอนานแค่ไหน?", "translation": "要等多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "ตอนนี้", "pronunciation": ["Ton ni"], "specific_note": "" }], "example": {"sentence": "ตอนนี้ว่าง", "translation": "現在有空。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "วันนี้", "pronunciation": ["Wan ni"], "specific_note": "" }], "example": {"sentence": "วันนี้ไปไหม?", "translation": "今天去嗎？"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "พรุ่งนี้", "pronunciation": ["Phrung ni"], "specific_note": "" }], "example": {"sentence": "พรุ่งนี้หยุด", "translation": "明天放假。"}, "usage_note": "隔天。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "เมื่อวาน", "pronunciation": ["Muea wan"], "specific_note": "" }], "example": {"sentence": "เมื่อวานฝนตก", "translation": "昨天在此。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "ที่นี่", "pronunciation": ["Thi ni"], "specific_note": "" }], "example": {"sentence": "อยู่ที่นี่", "translation": "在這裡。"}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "ที่นั่น", "pronunciation": ["Thi nan"], "specific_note": "中距離" }, { "term_target": "ที่โน่น", "pronunciation": ["Thi non"], "specific_note": "遠距離" }], "example": {"sentence": "ไปที่นั่น", "translation": "去那裡。"}, "usage_note": "遠處。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "วัน", "pronunciation": ["Wan"], "specific_note": "" }], "example": {"sentence": "วันเกิด", "translation": "生日(出生日)。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "ปี", "pronunciation": ["Pi"], "specific_note": "" }], "example": {"sentence": "ปีใหม่", "translation": "新年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "เดือน", "pronunciation": ["Duean"], "specific_note": "" }], "example": {"sentence": "เดือนหน้า", "translation": "下個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "อาทิตย์", "pronunciation": ["Athit"], "specific_note": "口語" }, { "term_target": "สัปดาห์", "pronunciation": ["Sap-da"], "specific_note": "正式" }], "example": {"sentence": "อาทิตย์หน้า", "translation": "下週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "ตอนเช้า", "pronunciation": ["Ton chao"], "specific_note": "" }], "example": {"sentence": "ตื่นตอนเช้า", "translation": "早上起床。"}, "usage_note": "上午。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "ตอนบ่าย", "pronunciation": ["Ton bai"], "specific_note": "" }], "example": {"sentence": "ง่วงตอนบ่าย", "translation": "下午睏。"}, "usage_note": "PM。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "ตอนเย็น", "pronunciation": ["Ton yen"], "specific_note": "傍晚" }, { "term_target": "ตอนค่ำ", "pronunciation": ["Ton kham"], "specific_note": "晚上(天黑)" }], "example": {"sentence": "กินข้าวเย็น", "translation": "吃晚餐。"}, "usage_note": "傍晚到睡前。", "image_file": "evening.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "ตอนเที่ยง", "pronunciation": ["Ton thiang"], "specific_note": "" }], "example": {"sentence": "พักเที่ยง", "translation": "午休。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "ข้างหน้า", "pronunciation": ["Khang na"], "specific_note": "" }], "example": {"sentence": "เดินข้างหน้า", "translation": "走前面。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "ข้างหลัง", "pronunciation": ["Khang lang"], "specific_note": "" }], "example": {"sentence": "นั่งข้างหลัง", "translation": "坐後面。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "ซ้าย", "pronunciation": ["Sai"], "specific_note": "" }, { "term_target": "ข้างซ้าย", "pronunciation": ["Khang sai"], "specific_note": "左側" }], "example": {"sentence": "เลี้ยวซ้าย", "translation": "左轉。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "ขวา", "pronunciation": ["Khwa"], "specific_note": "" }, { "term_target": "ข้างขวา", "pronunciation": ["Khang khwa"], "specific_note": "右側" }], "example": {"sentence": "เลี้ยวขวา", "translation": "右轉。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "ข้างๆ", "pronunciation": ["Khang khang"], "specific_note": "" }], "example": {"sentence": "อยู่ข้างๆ", "translation": "在旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "ตรงข้าม", "pronunciation": ["Trong kham"], "specific_note": "" }], "example": {"sentence": "ฝั่งตรงข้าม", "translation": "對面(對岸)。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "ฤดูใบไม้ผลิ", "pronunciation": ["Ruedu bai mai phli"], "specific_note": "" }], "example": {"sentence": "ชอบฤดูใบไม้ผลิ", "translation": "喜歡春天。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "ฤดูร้อน", "pronunciation": ["Ruedu ron"], "specific_note": "" }], "example": {"sentence": "ไทยร้อน", "translation": "泰國熱(夏天)。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "ฤดูใบไม้ร่วง", "pronunciation": ["Ruedu bai mai ruang"], "specific_note": "" }], "example": {"sentence": "ใบไม้ร่วง", "translation": "落葉(秋天)。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "ฤดูหนาว", "pronunciation": ["Ruedu nao"], "specific_note": "" }], "example": {"sentence": "หนาวมาก", "translation": "很冷(冬天)。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "ศูนย์", "pronunciation": ["Sun"], "specific_note": "" }], "example": {"sentence": "ศูนย์กลาง", "translation": "中心。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "หนึ่ง", "pronunciation": ["Nueng"], "specific_note": "" }], "example": {"sentence": "ที่หนึ่ง", "translation": "第一。"}, "usage_note": "一。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "สอง", "pronunciation": ["Song"], "specific_note": "" }], "example": {"sentence": "เบอร์สอง", "translation": "二號。"}, "usage_note": "二。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "สาม", "pronunciation": ["Sam"], "specific_note": "" }], "example": {"sentence": "สามคน", "translation": "三個人。"}, "usage_note": "三。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "สี่", "pronunciation": ["Si"], "specific_note": "" }], "example": {"sentence": "สี่โมง", "translation": "四點。"}, "usage_note": "四。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "ห้า", "pronunciation": ["Ha"], "specific_note": "" }], "example": {"sentence": "ห้าบาท", "translation": "五銖。"}, "usage_note": "五。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "หก", "pronunciation": ["Hok"], "specific_note": "" }], "example": {"sentence": "หกโมง", "translation": "六點。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "เจ็ด", "pronunciation": ["Jet"], "specific_note": "" }], "example": {"sentence": "เจ็ดวัน", "translation": "七天。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "แปด", "pronunciation": ["Paet"], "specific_note": "" }], "example": {"sentence": "แปดคน", "translation": "八人。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "เก้า", "pronunciation": ["Kao"], "specific_note": "" }], "example": {"sentence": "ก้าวหน้า", "translation": "進步(九)。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "สิบ", "pronunciation": ["Sip"], "specific_note": "" }], "example": {"sentence": "สิบบาท", "translation": "十銖。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "สิบเอ็ด", "pronunciation": ["Sip-et"], "specific_note": "" }], "example": {"sentence": "ชั้นสิบเอ็ด", "translation": "11樓。"}, "usage_note": "十一 (注意 Et)。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "สิบสอง", "pronunciation": ["Sip-song"], "specific_note": "" }], "example": {"sentence": "สิบสองคน", "translation": "12人。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "สิบห้า", "pronunciation": ["Sip-ha"], "specific_note": "" }], "example": {"sentence": "สิบห้านาที", "translation": "15分。"}, "usage_note": "十五。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "ยี่สิบ", "pronunciation": ["Yi-sip"], "specific_note": "" }], "example": {"sentence": "ยี่สิบบาท", "translation": "20銖。"}, "usage_note": "二十 (注意 Yi)。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "ห้าสิบ", "pronunciation": ["Ha-sip"], "specific_note": "" }], "example": {"sentence": "ห้าสิบคน", "translation": "50人。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "หนึ่งร้อย", "pronunciation": ["Nueng roi"], "specific_note": "" }], "example": {"sentence": "ร้อยเดียว", "translation": "一百而已。"}, "usage_note": "百。", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "หนึ่งพัน", "pronunciation": ["Nueng phan"], "specific_note": "" }], "example": {"sentence": "พันบาท", "translation": "一千銖。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "หนึ่งหมื่น", "pronunciation": ["Nueng muen"], "specific_note": "" }], "example": {"sentence": "หมื่นบาท", "translation": "一萬銖。"}, "usage_note": "一萬。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是/覺得～", "related_terms": [{ "term_target": "ผม/ฉัน เป็น...", "pronunciation": ["Phom/Chan pen..."], "specific_note": "是" }, { "term_target": "ผม/ฉัน รู้สึก...", "pronunciation": ["Phom/Chan ru-suek..."], "specific_note": "覺得" }], "example": {"sentence": "ผมเป็นคนไทย", "translation": "我是泰國人。"}, "usage_note": "狀態。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫～", "related_terms": [{ "term_target": "ผม/ฉัน ชื่อ...", "pronunciation": ["Phom/Chan chue..."], "specific_note": "" }], "example": {"sentence": "ผมชื่อสมชาย", "translation": "我叫Somchai。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做～", "related_terms": [{ "term_target": "ผม/ฉัน ทำ...", "pronunciation": ["Phom/Chan tham..."], "specific_note": "" }], "example": {"sentence": "ผมทำงาน", "translation": "我工作。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做～", "related_terms": [{ "term_target": "ผม/ฉัน กำลัง...", "pronunciation": ["Phom/Chan kamlang..."], "specific_note": "" }], "example": {"sentence": "ฉันกำลังกิน", "translation": "我正在吃。"}, "usage_note": "進行式。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠～", "related_terms": [{ "term_target": "ผม/ฉัน ...ได้", "pronunciation": ["Phom/Chan ... dai"], "specific_note": "" }], "example": {"sentence": "ผมทำได้", "translation": "我能做。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做～", "related_terms": [{ "term_target": "ผม/ฉัน ชอบ...", "pronunciation": ["Phom/Chan chop..."], "specific_note": "" }], "example": {"sentence": "ฉันชอบเที่ยว", "translation": "我喜歡玩。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經～", "related_terms": [{ "term_target": "ผม/ฉัน เคยเป็น...", "pronunciation": ["Phom/Chan khoei pen..."], "specific_note": "" }], "example": {"sentence": "ผมเคยเป็นครู", "translation": "我曾經是老師。"}, "usage_note": "過去狀態。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過～", "related_terms": [{ "term_target": "ผม/ฉัน เคย...", "pronunciation": ["Phom/Chan khoei..."], "specific_note": "" }], "example": {"sentence": "ฉันเคยไป", "translation": "我曾去過。"}, "usage_note": "過去動作。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過～", "related_terms": [{ "term_target": "ผม/ฉัน ...แล้ว", "pronunciation": ["Phom/Chan ... laeo"], "specific_note": "" }], "example": {"sentence": "กินแล้ว", "translation": "吃過了。"}, "usage_note": "完成式。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過～", "related_terms": [{ "term_target": "ผม/ฉัน เคยไป...", "pronunciation": ["Phom/Chan khoei pai..."], "specific_note": "" }], "example": {"sentence": "เคยไปไทย", "translation": "曾去過泰國。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算～", "related_terms": [{ "term_target": "ผม/ฉัน จะ...", "pronunciation": ["Phom/Chan ja..."], "specific_note": "" }], "example": {"sentence": "จะไปเที่ยว", "translation": "打算去玩。"}, "usage_note": "未來式。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是～嗎？", "related_terms": [{ "term_target": "คุณเป็น...ใช่ไหม?", "pronunciation": ["Khun pen ... chai mai?"], "specific_note": "" }], "example": {"sentence": "คุณเป็นครูใช่ไหม?", "translation": "你是老師嗎？"}, "usage_note": "問狀態。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做～嗎？", "related_terms": [{ "term_target": "คุณทำ...ไหม?", "pronunciation": ["Khun tham ... mai?"], "specific_note": "" }], "example": {"sentence": "ทำอาหารไหม?", "translation": "做飯嗎？"}, "usage_note": "問習慣或意願。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經～嗎？", "related_terms": [{ "term_target": "คุณเคย...ไหม?", "pronunciation": ["Khun khoei ... mai?"], "specific_note": "" }], "example": {"sentence": "เคยไปไหม?", "translation": "曾去過嗎？"}, "usage_note": "問經驗。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做（某事）？", "related_terms": [{ "term_target": "คุณ...เมื่อไหร่?", "pronunciation": ["Khun ... muea rai?"], "specific_note": "" }], "example": {"sentence": "ไปเมื่อไหร่?", "translation": "何時去？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去（某地）？", "related_terms": [{ "term_target": "คุณจะไป...เมื่อไหร่?", "pronunciation": ["Khun ja pai ... muea rai?"], "specific_note": "" }], "example": {"sentence": "จะไปไทยเมื่อไหร่?", "translation": "何時去泰國？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做（某事）？", "related_terms": [{ "term_target": "คุณทำ...ที่ไหน?", "pronunciation": ["Khun tham ... thi nai?"], "specific_note": "" }], "example": {"sentence": "กินข้าวที่ไหน?", "translation": "在哪吃飯？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做（某事）？", "related_terms": [{ "term_target": "คุณทำ...อย่างไร?", "pronunciation": ["Khun tham ... yang rai?"], "specific_note": "" }], "example": {"sentence": "ทำยังไง?", "translation": "怎麼做？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去（某地）？", "related_terms": [{ "term_target": "คุณไป...อย่างไร?", "pronunciation": ["Khun pai ... yang rai?"], "specific_note": "" }], "example": {"sentence": "ไปโรงเรียนยังไง?", "translation": "怎麼去學校？"}, "usage_note": "問交通方式。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是～", "related_terms": [{ "term_target": "ผม/ฉัน ไม่ใช่...", "pronunciation": ["Phom/Chan mai chai..."], "specific_note": "" }], "example": {"sentence": "ไม่ใช่หมอ", "translation": "不是醫生。"}, "usage_note": "否定身分。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做～", "related_terms": [{ "term_target": "ผม/ฉัน ไม่ทำ...", "pronunciation": ["Phom/Chan mai tham..."], "specific_note": "" }], "example": {"sentence": "ไม่ทำงาน", "translation": "不工作。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能～", "related_terms": [{ "term_target": "ผม/ฉัน ...ไม่ได้", "pronunciation": ["Phom/Chan ... mai dai"], "specific_note": "" }], "example": {"sentence": "ไปไม่ได้", "translation": "不能去。"}, "usage_note": "否定能力。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾～", "related_terms": [{ "term_target": "ผม/ฉัน ไม่เคย...", "pronunciation": ["Phom/Chan mai khoei..."], "specific_note": "" }], "example": {"sentence": "ไม่เคยเห็น", "translation": "沒看過。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必～", "related_terms": [{ "term_target": "ผม/ฉัน ไม่ต้อง...", "pronunciation": ["Phom/Chan mai tong..."], "specific_note": "" }], "example": {"sentence": "ไม่ต้องไป", "translation": "不必去。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果～的話，就～", "related_terms": [{ "term_target": "ถ้า... ก็...", "pronunciation": ["Tha ... ko ..."], "specific_note": "" }], "example": {"sentence": "ถ้าว่าง ก็ไป", "translation": "如果有空就去。"}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當～時，就～", "related_terms": [{ "term_target": "เมื่อ... ก็...", "pronunciation": ["Muea ... ko ..."], "specific_note": "" }], "example": {"sentence": "เมื่อหิว ก็กิน", "translation": "當餓時就吃。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你～", "related_terms": [{ "term_target": "คุณ...หน่อยได้ไหม?", "pronunciation": ["Khun ... noi dai mai?"], "specific_note": "" }], "example": {"sentence": "ช่วยหน่อยได้ไหม?", "translation": "請幫一下忙好嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做～吧！", "related_terms": [{ "term_target": "เรา...กันเถอะ", "pronunciation": ["Rao ... kan thoe"], "specific_note": "" }], "example": {"sentence": "ไปกันเถอะ", "translation": "走吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為～", "related_terms": [{ "term_target": "ผม/ฉัน คิดว่า...", "pronunciation": ["Phom/Chan khit wa..."], "specific_note": "" }], "example": {"sentence": "คิดว่าดี", "translation": "認為很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做～", "related_terms": [{ "term_target": "ผม/ฉัน อยาก...", "pronunciation": ["Phom/Chan yak..."], "specific_note": "" }], "example": {"sentence": "อยากกลับบ้าน", "translation": "想回家。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做～", "related_terms": [{ "term_target": "ผม/ฉัน ต้อง...", "pronunciation": ["Phom/Chan tong..."], "specific_note": "" }], "example": {"sentence": "ต้องทำงาน", "translation": "必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "การ... มัน...", "pronunciation": ["Kan ... man ..."], "specific_note": "" }], "example": {"sentence": "การเรียนมันยาก", "translation": "學習是困難的。"}, "usage_note": "描述動作。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我…嗎？", "related_terms": [{ "term_target": "ช่วยฉัน...ได้ไหม?", "pronunciation": ["Chuai chan ... dai mai?"], "specific_note": "" }], "example": {"sentence": "ช่วยฉันได้ไหม?", "translation": "可以幫我嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以…嗎？", "related_terms": [{ "term_target": "ผม/ฉัน ...ได้ไหม?", "pronunciation": ["Phom/Chan ... dai mai?"], "specific_note": "" }], "example": {"sentence": "ไปได้ไหม?", "translation": "可以去嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡…", "related_terms": [{ "term_target": "ผม/ฉัน ไม่ชอบ...", "pronunciation": ["Phom/Chan mai chop..."], "specific_note": "" }], "example": {"sentence": "ไม่ชอบเผ็ด", "translation": "不喜歡辣。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡…", "related_terms": [{ "term_target": "ผม/ฉัน ชอบ...มากกว่า", "pronunciation": ["Phom/Chan chop ... mak kwa"], "specific_note": "" }], "example": {"sentence": "ชอบอันนี้มากกว่า", "translation": "比較喜歡這個。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更…", "related_terms": [{ "term_target": "A ...กว่า B", "pronunciation": ["A ... kwa B"], "specific_note": "" }], "example": {"sentence": "นี้แพงกว่านั้น", "translation": "這比那貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有…（存在）", "related_terms": [{ "term_target": "มี...", "pronunciation": ["Mi..."], "specific_note": "" }], "example": {"sentence": "มีแมว", "translation": "有貓。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}