import { AppData } from '../types';

export const koreanData: AppData ={
  "meta": {
    "source_language": "zh-TW",
    "target_language": "ko-KR",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 韓文完整版 (包含所有原始列表單字與完整句型 - 羅馬拼音版)"
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
          "term_target": "네",
          "pronunciation": ["Ne"],
          "specific_note": "肯定/禮貌"
        },
        {
          "term_target": "예",
          "pronunciation": ["Ye"],
          "specific_note": "更正式"
        }
      ],
      "example": {
        "sentence": "네, 맞아요.",
        "translation": "是的，沒錯。"
      },
      "usage_note": "Ne 也可以表示「我在聽」、「對」。",
      "image_file": "yes.png"
    },
    {
      "id": "greet-002",
      "term_zh": "不是",
      "related_terms": [
        {
          "term_target": "아니요",
          "pronunciation": ["Aniyo"],
          "specific_note": "否定"
        },
        {
          "term_target": "아니",
          "pronunciation": ["Ani"],
          "specific_note": "平輩 (不)"
        }
      ],
      "example": {
        "sentence": "아니요, 괜찮아요.",
        "translation": "不，沒關係。"
      },
      "usage_note": "禮貌否定請一定要加 yo。",
      "image_file": "no.png"
    },
    {
      "id": "greet-003",
      "term_zh": "你好",
      "related_terms": [
        {
          "term_target": "안녕하세요",
          "pronunciation": ["Annyeonghaseyo"],
          "specific_note": "通用/敬語"
        },
        {
          "term_target": "안녕",
          "pronunciation": ["Annyeong"],
          "specific_note": "平輩/朋友"
        }
      ],
      "example": {
        "sentence": "안녕하세요, 잘 지내세요?",
        "translation": "你好，你好嗎？"
      },
      "usage_note": "最通用的問候，早中晚皆可。",
      "image_file": "hello.png"
    },
    {
      "id": "greet-004",
      "term_zh": "謝謝你",
      "related_terms": [
        {
          "term_target": "감사합니다",
          "pronunciation": ["Gamsahamnida"],
          "specific_note": "正式/通用"
        },
        {
          "term_target": "고마워요",
          "pronunciation": ["Gomawoyo"],
          "specific_note": "較親近"
        }
      ],
      "example": {
        "sentence": "도와주셔서 감사합니다.",
        "translation": "謝謝你的幫忙。"
      },
      "usage_note": "Gamsahamnida 是最安全有禮貌的說法。",
      "image_file": "thank_you.png"
    },
    {
      "id": "greet-005",
      "term_zh": "對不起",
      "related_terms": [
        {
          "term_target": "죄송합니다",
          "pronunciation": ["Joesonghamnida"],
          "specific_note": "正式/道歉"
        },
        {
          "term_target": "미안해요",
          "pronunciation": ["Mianhaeyo"],
          "specific_note": "較親近"
        }
      ],
      "example": {
        "sentence": "늦어서 죄송합니다.",
        "translation": "抱歉我遲到了。"
      },
      "usage_note": "做錯事時使用，Joesonghamnida 最有誠意。",
      "image_file": "sorry.png"
    },
    {
      "id": "greet-006",
      "term_zh": "請問...",
      "related_terms": [
        {
          "term_target": "저기요",
          "pronunciation": ["Jeogiyo"],
          "specific_note": "引起注意 (那邊那位)"
        },
        {
          "term_target": "실례합니다",
          "pronunciation": ["Sillyehamnida"],
          "specific_note": "失禮了 (正式)"
        }
      ],
      "example": {
        "sentence": "저기요, 주문할게요.",
        "translation": "不好意思，我要點餐。"
      },
      "usage_note": "餐廳叫服務生或路邊問人都用 Jeogiyo。",
      "image_file": "excuse_me.png"
    },
    {
      "id": "greet-007",
      "term_zh": "我不懂",
      "related_terms": [
        {
          "term_target": "모르겠어요",
          "pronunciation": ["Moreugesseoyo"],
          "specific_note": "不知道/不懂"
        },
        {
          "term_target": "이해가 안 돼요",
          "pronunciation": ["Ihaega an dwaeyo"],
          "specific_note": "無法理解"
        }
      ],
      "example": {
        "sentence": "죄송해요, 무슨 말인지 모르겠어요.",
        "translation": "抱歉，我不知道你在說什麼。"
      },
      "usage_note": "聽不懂直接說 Moreugesseoyo。",
      "image_file": "dont_understand.png"
    },
    {
      "id": "greet-008",
      "term_zh": "廁所在哪裡？",
      "related_terms": [
        {
          "term_target": "화장실이 어디예요?",
          "pronunciation": ["Hwajangsiri eodiyeyo?"],
          "specific_note": "通用"
        }
      ],
      "example": {
        "sentence": "저기요, 화장실이 어디예요?",
        "translation": "不好意思，請問廁所在哪？"
      },
      "usage_note": "旅遊必備。",
      "image_file": "where_bathroom.png"
    },
    {
      "id": "greet-009",
      "term_zh": "借過",
      "related_terms": [
        {
          "term_target": "잠시만요",
          "pronunciation": ["Jamsimanyo"],
          "specific_note": "借過/等一下"
        },
        {
          "term_target": "지나갈게요",
          "pronunciation": ["Jinagalgeyo"],
          "specific_note": "我要過去了"
        }
      ],
      "example": {
        "sentence": "잠시만요, 내릴게요.",
        "translation": "借過，我要下車。"
      },
      "usage_note": "Jamsimanyo 原意是「請稍等」，引申為借過。",
      "image_file": "excuse_me_pass.png"
    },
    {
      "id": "greet-010",
      "term_zh": "多少錢？",
      "related_terms": [
        {
          "term_target": "얼마예요?",
          "pronunciation": ["Eolmayeyo?"],
          "specific_note": "詢價"
        }
      ],
      "example": {
        "sentence": "이거 얼마예요?",
        "translation": "這個多少錢？"
      },
      "usage_note": "購物用語。",
      "image_file": "how_much.png"
    },
    {
      "id": "greet-011",
      "term_zh": "我想要這個",
      "related_terms": [
        {
          "term_target": "이거 주세요",
          "pronunciation": ["Igeo juseyo"],
          "specific_note": "請給我這個 (購買)"
        }
      ],
      "example": {
        "sentence": "이거 주세요.",
        "translation": "我要這個 (請給我這個)。"
      },
      "usage_note": "Juseyo (請給我) 比 Wonhaeyo (想要) 更常用於購買。",
      "image_file": "i_want_this.png"
    },
    {
      "id": "greet-012",
      "term_zh": "請給我...",
      "related_terms": [
        {
          "term_target": "... 주세요",
          "pronunciation": ["... juseyo"],
          "specific_note": "索取/點餐"
        }
      ],
      "example": {
        "sentence": "물 좀 주세요.",
        "translation": "請給我一點水。"
      },
      "usage_note": "名詞 + Juseyo。",
      "image_file": "please_give_me.png"
    },
    {
      "id": "greet-013",
      "term_zh": "這是什麼？",
      "related_terms": [
        {
          "term_target": "이게 뭐예요?",
          "pronunciation": ["Ige mwoyeyo?"],
          "specific_note": "疑問"
        }
      ],
      "example": {
        "sentence": "이게 뭐예요? 매워요?",
        "translation": "這是什麼？會辣嗎？"
      },
      "usage_note": "指著東西問。",
      "image_file": "what_is_this.png"
    },
    {
      "id": "greet-014",
      "term_zh": "請幫我",
      "related_terms": [
        {
          "term_target": "도와주세요",
          "pronunciation": ["Dowajuseyo"],
          "specific_note": "請求幫助"
        }
      ],
      "example": {
        "sentence": "저 좀 도와주세요.",
        "translation": "請幫幫我。"
      },
      "usage_note": "遇到困難時使用。",
      "image_file": "help_me.png"
    },
    {
      "id": "greet-015",
      "term_zh": "你可以再說一次嗎？",
      "related_terms": [
        {
          "term_target": "다시 말해 주세요",
          "pronunciation": ["Dasi malhae juseyo"],
          "specific_note": "請再說一次"
        }
      ],
      "example": {
        "sentence": "네? 다시 말해 주세요.",
        "translation": "蛤？請再說一次。"
      },
      "usage_note": "Dasi (再次) + Malhae (說)。",
      "image_file": "say_again.png"
    },
    {
      "id": "greet-016",
      "term_zh": "你可以講慢一點嗎？",
      "related_terms": [
        {
          "term_target": "천천히 말해 주세요",
          "pronunciation": ["Cheoncheonhi malhae juseyo"],
          "specific_note": "請慢點說"
        }
      ],
      "example": {
        "sentence": "너무 빨라요, 천천히 말해 주세요.",
        "translation": "太快了，請講慢一點。"
      },
      "usage_note": "Cheoncheonhi 是「慢慢地」。",
      "image_file": "speak_slowly.png"
    },
    {
      "id": "greet-017",
      "term_zh": "原來如此",
      "related_terms": [
        {
          "term_target": "그렇군요",
          "pronunciation": ["Geureokunyo"],
          "specific_note": "原來是這樣啊"
        },
        {
          "term_target": "알겠어요",
          "pronunciation": ["Algesseoyo"],
          "specific_note": "我知道了"
        }
      ],
      "example": {
        "sentence": "아, 그렇군요! 이제 알겠어요.",
        "translation": "啊，原來如此！我現在懂了。"
      },
      "usage_note": "表示理解或附和。",
      "image_file": "i_see.png"
    },
    {
      "id": "greet-018",
      "term_zh": "早安",
      "related_terms": [
        {
          "term_target": "좋은 아침",
          "pronunciation": ["Joeun achim"],
          "specific_note": "早安 (直譯)"
        },
        {
          "term_target": "안녕하세요",
          "pronunciation": ["Annyeonghaseyo"],
          "specific_note": "通用"
        }
      ],
      "example": {
        "sentence": "좋은 아침입니다.",
        "translation": "早安。"
      },
      "usage_note": "其實韓國人早上通常也說 Annyeonghaseyo。",
      "image_file": "good_morning.png"
    },
    {
      "id": "greet-019",
      "term_zh": "晚上好 (晚安)",
      "related_terms": [
        {
          "term_target": "안녕하세요",
          "pronunciation": ["Annyeonghaseyo"],
          "specific_note": "晚上見面 (通用)"
        },
        {
          "term_target": "안녕히 주무세요",
          "pronunciation": ["Annyeonghi jumuseyo"],
          "specific_note": "睡前 (敬語)"
        },
        {
          "term_target": "잘 자요",
          "pronunciation": ["Jal jayo"],
          "specific_note": "睡前 (平輩)"
        }
      ],
      "example": {
        "sentence": "안녕히 주무세요.",
        "translation": "晚安 (請安息/睡覺)。"
      },
      "usage_note": "晚上見面一樣說 Annyeonghaseyo；睡前才用其他。",
      "image_file": "good_evening.png"
    },
    {
      "id": "greet-020",
      "term_zh": "再見",
      "related_terms": [
        {
          "term_target": "안녕히 가세요",
          "pronunciation": ["Annyeonghi gaseyo"],
          "specific_note": "對離開的人說 (慢走)"
        },
        {
          "term_target": "안녕히 계세요",
          "pronunciation": ["Annyeonghi gyeseyo"],
          "specific_note": "對留下的人說 (留步)"
        }
      ],
      "example": {
        "sentence": "안녕히 가세요, 또 만나요.",
        "translation": "慢走，再見。"
      },
      "usage_note": "如果兩個人都離開，互說 Annyeonghi gaseyo。",
      "image_file": "goodbye.png"
    },
    {
      "id": "greet-021",
      "term_zh": "你好嗎",
      "related_terms": [
        {
          "term_target": "잘 지냈어요?",
          "pronunciation": ["Jal jinaesseoyo?"],
          "specific_note": "過得好嗎"
        }
      ],
      "example": {
        "sentence": "오랜만이에요, 잘 지냈어요?",
        "translation": "好久不見，過得好嗎？"
      },
      "usage_note": "用於許久不見的寒暄。",
      "image_file": "how_are_you.png"
    },
    {
      "id": "greet-022",
      "term_zh": "真的嗎",
      "related_terms": [
        {
          "term_target": "진짜요?",
          "pronunciation": ["Jinjja-yo?"],
          "specific_note": "真的嗎(禮貌)"
        },
        {
          "term_target": "정말요?",
          "pronunciation": ["Jeongmal-yo?"],
          "specific_note": "真的嗎(正式)"
        }
      ],
      "example": {
        "sentence": "진짜요? 대박!",
        "translation": "真的嗎？太猛了！"
      },
      "usage_note": "Jinjja 是最常用的口語。",
      "image_file": "really.png"
    },
    {
      "id": "greet-023",
      "term_zh": "太棒了",
      "related_terms": [
        {
          "term_target": "대박",
          "pronunciation": ["Daebak"],
          "specific_note": "大發/厲害"
        },
        {
          "term_target": "짱",
          "pronunciation": ["Jjang"],
          "specific_note": "讚/第一"
        }
      ],
      "example": {
        "sentence": "와, 대박이다!",
        "translation": "哇，太厲害了(大發)！"
      },
      "usage_note": "Daebak 是韓劇迷最熟悉的讚嘆詞。",
      "image_file": "awesome.png"
    },
    {
      "id": "greet-024",
      "term_zh": "很高興認識你",
      "related_terms": [
        {
          "term_target": "반갑습니다",
          "pronunciation": ["Bangapseumnida"],
          "specific_note": "正式"
        },
        {
          "term_target": "반가워요",
          "pronunciation": ["Bangawoyo"],
          "specific_note": "較親近"
        }
      ],
      "example": {
        "sentence": "만나서 반갑습니다.",
        "translation": "見到你很高興。"
      },
      "usage_note": "初次見面的標準用語。",
      "image_file": "nice_to_meet_you.png"
    },
    {
      "id": "greet-025",
      "term_zh": "真可惜",
      "related_terms": [
        {
          "term_target": "아쉽네요",
          "pronunciation": ["Asipneyo"],
          "specific_note": "可惜/捨不得"
        }
      ],
      "example": {
        "sentence": "벌써 가요? 아쉽네요.",
        "translation": "已經要走了？真可惜/真捨不得。"
      },
      "usage_note": "對錯過機會或離別表示遺憾。",
      "image_file": "too_bad.png"
    }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個/它", "related_terms": [{ "term_target": "그거", "pronunciation": ["Geugeo"], "specific_note": "那個(對方那)" }, { "term_target": "그것", "pronunciation": ["Geugeot"], "specific_note": "書面語" }], "example": {"sentence": "그거 뭐예요?", "translation": "那個是什麼？"}, "usage_note": "指中距離或剛提過的事物。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "저", "pronunciation": ["Jeo"], "specific_note": "謙稱(對長輩)" }, { "term_target": "나", "pronunciation": ["Na"], "specific_note": "平語(對朋友)" }], "example": {"sentence": "저는 대만 사람입니다.", "translation": "我是台灣人。", }, "usage_note": "初學者建議用 Jeo。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "당신", "pronunciation": ["Dangsin"], "specific_note": "少用(書面/夫妻)" }, { "term_target": "너", "pronunciation": ["Neo"], "specific_note": "平語(對朋友)" }], "example": {"sentence": "너 뭐 해?", "translation": "你在做什麼？(平語)"}, "usage_note": "韓文很少直呼「你」，通常稱呼職稱或名字+ssi。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他", "related_terms": [{ "term_target": "그", "pronunciation": ["Geu"], "specific_note": "書面/歌詞" }, { "term_target": "그분", "pronunciation": ["Geubun"], "specific_note": "那位(敬語)" }], "example": {"sentence": "그분은 누구세요?", "translation": "那位是誰？"}, "usage_note": "口語常用 Geu saram (那個人)。", "image_file": "he.png" },
        { "id": "pro-05", "term_zh": "她", "related_terms": [{ "term_target": "그녀", "pronunciation": ["Geunyeo"], "specific_note": "書面/歌詞" }], "example": {"sentence": "그녀는 예뻐요.", "translation": "她很漂亮。"}, "usage_note": "口語常用 Geu yeoja (那個女生)。", "image_file": "she.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "우리", "pronunciation": ["Uri"], "specific_note": "通用" }, { "term_target": "저희", "pronunciation": ["Jeohui"], "specific_note": "謙稱" }], "example": {"sentence": "우리는 가족이에요.", "translation": "我們是家人。"}, "usage_note": "Uri 常用於表示親密關係(如 Uri nara 我國)。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "他們", "related_terms": [{ "term_target": "그들", "pronunciation": ["Geudeul"], "specific_note": "書面" }, { "term_target": "쟤네들", "pronunciation": ["Jyaenedeul"], "specific_note": "口語" }], "example": {"sentence": "그들은 학생이에요.", "translation": "他們是學生。"}, "usage_note": "複數加 deul。", "image_file": "they.png" },
        { "id": "pro-08", "term_zh": "這個", "related_terms": [{ "term_target": "이거", "pronunciation": ["Igeo"], "specific_note": "口語" }, { "term_target": "이것", "pronunciation": ["Igeot"], "specific_note": "書面" }], "example": {"sentence": "이거 주세요.", "translation": "請給我這個。"}, "usage_note": "近處。", "image_file": "this.png" },
        { "id": "pro-09", "term_zh": "那個（指示詞）", "related_terms": [{ "term_target": "저거", "pronunciation": ["Jeogeo"], "specific_note": "遠處" }, { "term_target": "그거", "pronunciation": ["Geugeo"], "specific_note": "聽者處" }], "example": {"sentence": "저거는 뭐예요?", "translation": "那裡那個是什麼？"}, "usage_note": "Jeogeo (遠處), Geugeo (對方那)。", "image_file": "that_obj.png" },
        { "id": "pro-10", "term_zh": "他的", "related_terms": [{ "term_target": "그의", "pronunciation": ["Geuui"], "specific_note": "" }], "example": {"sentence": "그의 차.", "translation": "他的車。"}, "usage_note": "Ui 發音常變 e。", "image_file": "his.png" },
        { "id": "pro-11", "term_zh": "她的", "related_terms": [{ "term_target": "그녀의", "pronunciation": ["Geunyeoui"], "specific_note": "" }], "example": {"sentence": "그녀의 가방.", "translation": "她的包包。"}, "usage_note": "所有格。", "image_file": "her.png" },
        { "id": "pro-12", "term_zh": "你的", "related_terms": [{ "term_target": "너의", "pronunciation": ["Neoui"], "specific_note": "平語" }, { "term_target": "당신의", "pronunciation": ["Dangsinui"], "specific_note": "書面" }], "example": {"sentence": "네 이름.", "translation": "你的名字。", }, "usage_note": "口語常用 Ne。", "image_file": "your.png" },
        { "id": "pro-13", "term_zh": "他們的", "related_terms": [{ "term_target": "그들의", "pronunciation": ["Geudeurui"], "specific_note": "" }], "example": {"sentence": "그들의 집.", "translation": "他們的家。"}, "usage_note": "所有格。", "image_file": "their.png" },
        { "id": "pro-14", "term_zh": "我們的", "related_terms": [{ "term_target": "우리의", "pronunciation": ["Uriui"], "specific_note": "" }, { "term_target": "우리", "pronunciation": ["Uri"], "specific_note": "口語省略" }], "example": {"sentence": "우리 학교.", "translation": "我們學校。"}, "usage_note": "口語常省略 ui。", "image_file": "our.png" },
        { "id": "pro-15", "term_zh": "這些", "related_terms": [{ "term_target": "이것들", "pronunciation": ["Igeotdeul"], "specific_note": "" }], "example": {"sentence": "이것들은 책이에요.", "translation": "這些是書。"}, "usage_note": "複數加 deul。", "image_file": "these.png" },
        { "id": "pro-16", "term_zh": "那些", "related_terms": [{ "term_target": "저것들", "pronunciation": ["Jeogeotdeul"], "specific_note": "遠處" }, { "term_target": "그것들", "pronunciation": ["Geugeotdeul"], "specific_note": "中距離" }], "example": {"sentence": "저것들은 새예요.", "translation": "那些是鳥。"}, "usage_note": "遠處複數。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "이에요", "pronunciation": ["Ieyo"], "specific_note": "有收音" }, { "term_target": "예요", "pronunciation": ["Yeyo"], "specific_note": "無收音" }], "example": {"sentence": "저는 학생이에요.", "translation": "我是學生。"}, "usage_note": "句尾助動詞。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "있어요", "pronunciation": ["Isseoyo"], "specific_note": "" }], "example": {"sentence": "돈이 있어요.", "translation": "我有錢。"}, "usage_note": "擁有或存在。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "가요", "pronunciation": ["Gayo"], "specific_note": "" }], "example": {"sentence": "집에 가요.", "translation": "回家。"}, "usage_note": "移動。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "받아요", "pronunciation": ["Badayo"], "specific_note": "收到" }, { "term_target": "가져요", "pronunciation": ["Gajyeoyo"], "specific_note": "拿有/持有" }], "example": {"sentence": "선물을 받아요.", "translation": "收到禮物。"}, "usage_note": "Badayo 是接受。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "해요", "pronunciation": ["Haeyo"], "specific_note": "" }], "example": {"sentence": "숙제를 해요.", "translation": "做作業。"}, "usage_note": "原形是 Hada。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "말해요", "pronunciation": ["Malhaeyo"], "specific_note": "" }], "example": {"sentence": "한국어로 말해요.", "translation": "說韓文。"}, "usage_note": "說話。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "알아요", "pronunciation": ["Arayo"], "specific_note": "" }], "example": {"sentence": "저는 알아요.", "translation": "我知道。"}, "usage_note": "知曉。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "생각해요", "pronunciation": ["Saenggakaeyo"], "specific_note": "思考" }, { "term_target": "싶어요", "pronunciation": ["Sipeoyo"], "specific_note": "想要(接動詞後)" }], "example": {"sentence": "그렇게 생각해요.", "translation": "我也這麼覺得。"}, "usage_note": "Saenggakada 是思考。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "봐요", "pronunciation": ["Bwayo"], "specific_note": "看" }, { "term_target": "보여요", "pronunciation": ["Boyeoyo"], "specific_note": "看得見" }], "example": {"sentence": "영화를 봐요.", "translation": "看電影。"}, "usage_note": "Bwayo 是主動看。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "만들어요", "pronunciation": ["Mandeureoyo"], "specific_note": "" }], "example": {"sentence": "음식을 만들어요.", "translation": "做菜。"}, "usage_note": "製造。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "와요", "pronunciation": ["Wayo"], "specific_note": "" }], "example": {"sentence": "여기로 와요.", "translation": "來這裡。"}, "usage_note": "過來。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "필요해요", "pronunciation": ["Piryohaeyo"], "specific_note": "" }], "example": {"sentence": "물이 필요해요.", "translation": "我需要水。"}, "usage_note": "需要。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "써요", "pronunciation": ["Sseoyo"], "specific_note": "用/寫/戴" }, { "term_target": "사용해요", "pronunciation": ["Sayonghaeyo"], "specific_note": "使用(正式)" }], "example": {"sentence": "펜을 써요.", "translation": "用筆。"}, "usage_note": "Sseuda (Sseoyo) 用途很廣。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "찾아요", "pronunciation": ["Chajayo"], "specific_note": "" }], "example": {"sentence": "길을 찾아요.", "translation": "找路。"}, "usage_note": "尋找或找到。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "줘요", "pronunciation": ["Jwoyo"], "specific_note": "我給別人/請給我" }, { "term_target": "드려요", "pronunciation": ["Deuryeoyo"], "specific_note": "給長輩(敬語)" }], "example": {"sentence": "이거 주세요.", "translation": "請給我這個。"}, "usage_note": "Juseyo 是請給我。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "알려줘요", "pronunciation": ["Allyeojwoyo"], "specific_note": "告知" }, { "term_target": "말해줘요", "pronunciation": ["Malhaejwoyo"], "specific_note": "說給我聽" }], "example": {"sentence": "이름을 알려줘요.", "translation": "告訴我名字。"}, "usage_note": "通知/告知。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "일해요", "pronunciation": ["Irhaeyo"], "specific_note": "" }], "example": {"sentence": "여기서 일해요.", "translation": "在這工作。"}, "usage_note": "勞動。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "좋아해요", "pronunciation": ["Joahaeyo"], "specific_note": "" }], "example": {"sentence": "고양이를 좋아해요.", "translation": "我喜歡貓。"}, "usage_note": "喜好。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "일어나요", "pronunciation": ["Ireonayo"], "specific_note": "" }], "example": {"sentence": "아침에 일어나요.", "translation": "早上起床。"}, "usage_note": "起床/站起來。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "이야기해요", "pronunciation": ["Iyagihaeyo"], "specific_note": "聊天/講話" }], "example": {"sentence": "친구와 이야기해요.", "translation": "跟朋友聊天。"}, "usage_note": "交談。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "들어요", "pronunciation": ["Deureoyo"], "specific_note": "聽" }, { "term_target": "들려요", "pronunciation": ["Deullyeoyo"], "specific_note": "聽得見" }], "example": {"sentence": "음악을 들어요.", "translation": "聽音樂。"}, "usage_note": "Deureoyo 是主動聽。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "써요", "pronunciation": ["Sseoyo"], "specific_note": "" }], "example": {"sentence": "이름을 써요.", "translation": "寫名字。"}, "usage_note": "書寫。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "읽어요", "pronunciation": ["Ilgeoyo"], "specific_note": "" }], "example": {"sentence": "책을 읽어요.", "translation": "看書。"}, "usage_note": "讀文字。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "기다려요", "pronunciation": ["Gidaryeoyo"], "specific_note": "" }], "example": {"sentence": "잠시만 기다려요.", "translation": "請等一下。"}, "usage_note": "等候。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "해봐요", "pronunciation": ["Haebwayo"], "specific_note": "試做" }, { "term_target": "먹어봐요", "pronunciation": ["Meogeobwayo"], "specific_note": "試吃" }], "example": {"sentence": "이거 해봐요.", "translation": "試試看這個。"}, "usage_note": "動詞 + bwayo。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "내요", "pronunciation": ["Naeyo"], "specific_note": "付/交" }, { "term_target": "계산해요", "pronunciation": ["Gyesanhaeyo"], "specific_note": "結帳" }], "example": {"sentence": "제가 낼게요.", "translation": "我來付錢。"}, "usage_note": "支付。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "골라요", "pronunciation": ["Gollayo"], "specific_note": "挑選" }, { "term_target": "선택해요", "pronunciation": ["Seontaekaeyo"], "specific_note": "選擇" }], "example": {"sentence": "하나 골라요.", "translation": "選一個。"}, "usage_note": "挑選。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "들어가요", "pronunciation": ["Deureogayo"], "specific_note": "進去" }, { "term_target": "들어와요", "pronunciation": ["Deureowayo"], "specific_note": "進來" }], "example": {"sentence": "방에 들어가요.", "translation": "進房間。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "살아요", "pronunciation": ["Sarayo"], "specific_note": "" }], "example": {"sentence": "서울에 살아요.", "translation": "住首爾。"}, "usage_note": "居住。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "도착해요", "pronunciation": ["Dochakaeyo"], "specific_note": "" }], "example": {"sentence": "도착했어요.", "translation": "到了。"}, "usage_note": "抵達。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "걸어요", "pronunciation": ["Georeoyo"], "specific_note": "" }], "example": {"sentence": "걸어서 가요.", "translation": "走路去。"}, "usage_note": "步行。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "열어요", "pronunciation": ["Yeoreoyo"], "specific_note": "開門/窗" }, { "term_target": "켜요", "pronunciation": ["Kyeoyo"], "specific_note": "開電器" }], "example": {"sentence": "문을 열어요.", "translation": "開門。"}, "usage_note": "開門/開燈不同字。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "닫아요", "pronunciation": ["Dadayo"], "specific_note": "關門/窗" }, { "term_target": "꺼요", "pronunciation": ["Kkeoyo"], "specific_note": "關電器" }], "example": {"sentence": "창문을 닫아요.", "translation": "關窗。"}, "usage_note": "關門/關燈不同字。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "도와줘요", "pronunciation": ["Dowajwoyo"], "specific_note": "" }], "example": {"sentence": "도와주세요.", "translation": "請幫我。"}, "usage_note": "協助。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "가져와요", "pronunciation": ["Gajyeowayo"], "specific_note": "" }], "example": {"sentence": "물을 가져와요.", "translation": "帶水來。"}, "usage_note": "攜帶。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "需要", "related_terms": [{ "term_target": "필요해요", "pronunciation": ["Piryohaeyo"], "specific_note": "需要(形容詞)" }], "example": {"sentence": "도움이 필요해요.", "translation": "我需要幫忙。"}, "usage_note": "需要是狀態。", "image_file": "need.png" },
        { "id": "v-37", "term_zh": "使用", "related_terms": [{ "term_target": "사용해요", "pronunciation": ["Sayonghaeyo"], "specific_note": "" }], "example": {"sentence": "컴퓨터를 사용해요.", "translation": "使用電腦。"}, "usage_note": "使用。", "image_file": "use.png" },
        { "id": "v-38", "term_zh": "變成", "related_terms": [{ "term_target": "돼요", "pronunciation": ["Dwaeyo"], "specific_note": "" }], "example": {"sentence": "선생님이 돼요.", "translation": "變成老師。"}, "usage_note": "變化。", "image_file": "become.png" },
        { "id": "v-39", "term_zh": "開始", "related_terms": [{ "term_target": "시작해요", "pronunciation": ["Sijakaeyo"], "specific_note": "" }], "example": {"sentence": "이제 시작해요.", "translation": "現在開始。"}, "usage_note": "開始。", "image_file": "start.png" },
        { "id": "v-40", "term_zh": "結束", "related_terms": [{ "term_target": "끝나요", "pronunciation": ["Kkeunnayo"], "specific_note": "結束(自動)" }, { "term_target": "끝내요", "pronunciation": ["Kkeunnaeyo"], "specific_note": "做完(他動)" }], "example": {"sentence": "일이 끝나요.", "translation": "工作結束。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-41", "term_zh": "停止", "related_terms": [{ "term_target": "멈춰요", "pronunciation": ["Meomchwoyo"], "specific_note": "停下" }, { "term_target": "그만해요", "pronunciation": ["Geumanhaeyo"], "specific_note": "停止做" }], "example": {"sentence": "여기서 멈춰요.", "translation": "停在這裡。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-42", "term_zh": "記住", "related_terms": [{ "term_target": "기억해요", "pronunciation": ["Gieokaeyo"], "specific_note": "" }], "example": {"sentence": "저를 기억해요?", "translation": "記得我嗎？"}, "usage_note": "記憶。", "image_file": "remember.png" },
        { "id": "v-43", "term_zh": "談話", "related_terms": [{ "term_target": "대화해요", "pronunciation": ["Daehwahaeyo"], "specific_note": "對話" }], "example": {"sentence": "친구와 대화해요.", "translation": "跟朋友談話。"}, "usage_note": "對談。", "image_file": "talk.png" },
        { "id": "v-44", "term_zh": "見面", "related_terms": [{ "term_target": "만나요", "pronunciation": ["Mannayo"], "specific_note": "" }], "example": {"sentence": "친구를 만나요.", "translation": "見朋友。"}, "usage_note": "會面。", "image_file": "meet.png" },
        { "id": "v-45", "term_zh": "乘坐（工具）", "related_terms": [{ "term_target": "타요", "pronunciation": ["Tayo"], "specific_note": "" }], "example": {"sentence": "버스를 타요.", "translation": "搭公車。"}, "usage_note": "搭乘。", "image_file": "take.png" },
        { "id": "v-46", "term_zh": "放", "related_terms": [{ "term_target": "놓아요", "pronunciation": ["Noayo"], "specific_note": "放平" }, { "term_target": "넣어요", "pronunciation": ["Neoeoyo"], "specific_note": "放入" }], "example": {"sentence": "여기에 놓아요.", "translation": "放這裡。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-47", "term_zh": "吃", "related_terms": [{ "term_target": "먹어요", "pronunciation": ["Meogeoyo"], "specific_note": "一般" }, { "term_target": "드세요", "pronunciation": ["Deuseyo"], "specific_note": "敬語" }], "example": {"sentence": "밥을 먹어요.", "translation": "吃飯。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-48", "term_zh": "睡覺", "related_terms": [{ "term_target": "자요", "pronunciation": ["Jayo"], "specific_note": "一般" }, { "term_target": "주무세요", "pronunciation": ["Jumuseyo"], "specific_note": "敬語" }], "example": {"sentence": "안녕히 주무세요.", "translation": "晚安(敬語)。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-49", "term_zh": "寄送", "related_terms": [{ "term_target": "보내요", "pronunciation": ["Bonaeyo"], "specific_note": "" }], "example": {"sentence": "문자를 보내요.", "translation": "寄簡訊。"}, "usage_note": "傳送。", "image_file": "send.png" },
        { "id": "v-50", "term_zh": "開車", "related_terms": [{ "term_target": "운전해요", "pronunciation": ["Unjeonhaeyo"], "specific_note": "" }], "example": {"sentence": "차를 운전해요.", "translation": "開車。"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-51", "term_zh": "讀書", "related_terms": [{ "term_target": "공부해요", "pronunciation": ["Gongbuhaeyo"], "specific_note": "" }], "example": {"sentence": "열심히 공부해요.", "translation": "用功讀書。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-52", "term_zh": "回去", "related_terms": [{ "term_target": "돌아가요", "pronunciation": ["Doragayo"], "specific_note": "返回" }, { "term_target": "돌아와요", "pronunciation": ["Dorawayo"], "specific_note": "回來" }], "example": {"sentence": "집으로 돌아가요.", "translation": "回家(回去)。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "좋아요", "pronunciation": ["Joayo"], "specific_note": "" }], "example": {"sentence": "날씨가 좋아요.", "translation": "天氣好。"}, "usage_note": "正面。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "나빠요", "pronunciation": ["Nappayo"], "specific_note": "" }], "example": {"sentence": "기분이 나빠요.", "translation": "心情不好。"}, "usage_note": "負面。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "새로운", "pronunciation": ["Saeroun"], "specific_note": "冠形詞" }, { "term_target": "새거", "pronunciation": ["Saegeo"], "specific_note": "新的(東西)" }], "example": {"sentence": "새로운 핸드폰.", "translation": "新手機。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "첫번째", "pronunciation": ["Cheotbeonjjae"], "specific_note": "第一" }, { "term_target": "처음", "pronunciation": ["Cheoeum"], "specific_note": "初次" }], "example": {"sentence": "첫번째 날.", "translation": "第一天。"}, "usage_note": "順序。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "지난", "pronunciation": ["Jinan"], "specific_note": "" }], "example": {"sentence": "지난 주.", "translation": "上週。"}, "usage_note": "過去的。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "다음", "pronunciation": ["Daeum"], "specific_note": "" }], "example": {"sentence": "다음 역.", "translation": "下一站。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "길어요", "pronunciation": ["Gireoyo"], "specific_note": "" }], "example": {"sentence": "머리가 길어요.", "translation": "頭髮長。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "커요", "pronunciation": ["Keoyo"], "specific_note": "" }], "example": {"sentence": "집이 커요.", "translation": "房子大。"}, "usage_note": "體積大。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "작아요", "pronunciation": ["Jagayo"], "specific_note": "" }], "example": {"sentence": "작은 사이즈.", "translation": "小尺寸。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "많아요", "pronunciation": ["Manayo"], "specific_note": "" }], "example": {"sentence": "사람이 많아요.", "translation": "人很多。"}, "usage_note": "數量多。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "높아요", "pronunciation": ["Nopayo"], "specific_note": "高度" }, { "term_target": "커요", "pronunciation": ["Keoyo"], "specific_note": "個子高" }], "example": {"sentence": "키가 커요.", "translation": "個子高。"}, "usage_note": "高度(Nopayo)，身高(Keoyo)。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "젊어요", "pronunciation": ["Jeolmeoyo"], "specific_note": "年輕" }, { "term_target": "어려요", "pronunciation": ["Eoryeoyo"], "specific_note": "年紀小" }], "example": {"sentence": "젊은 사람.", "translation": "年輕人。"}, "usage_note": "年紀小。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的", "related_terms": [{ "term_target": "늙었어요", "pronunciation": ["Neulgeosseoyo"], "specific_note": "人" }, { "term_target": "낡았어요", "pronunciation": ["Nalgasseoyo"], "specific_note": "物" }], "example": {"sentence": "낡은 차.", "translation": "舊車。"}, "usage_note": "人老(Neul-), 物舊(Nal-)。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "가까워요", "pronunciation": ["Gakkawoyo"], "specific_note": "" }], "example": {"sentence": "집이 가까워요.", "translation": "離家近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "멀어요", "pronunciation": ["Meoreoyo"], "specific_note": "" }], "example": {"sentence": "여기서 멀어요.", "translation": "離這很遠。"}, "usage_note": "距離遠。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "빨라요", "pronunciation": ["Ppallayo"], "specific_note": "" }], "example": {"sentence": "너무 빨라요.", "translation": "太快了。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "느려요", "pronunciation": ["Neuryeoyo"], "specific_note": "" }], "example": {"sentence": "버스가 느려요.", "translation": "公車很慢。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "더워요", "pronunciation": ["Deowoyo"], "specific_note": "天氣" }, { "term_target": "뜨거워요", "pronunciation": ["Tteugeowoyo"], "specific_note": "物品" }], "example": {"sentence": "날씨가 더워요.", "translation": "天氣熱。"}, "usage_note": "Deowoyo(天氣)，Tteugeowoyo(物品)。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "추워요", "pronunciation": ["Chuwoyo"], "specific_note": "天氣" }, { "term_target": "차가워요", "pronunciation": ["Chagawoyo"], "specific_note": "物品" }], "example": {"sentence": "너무 추워요.", "translation": "太冷了。"}, "usage_note": "Chuwoyo(天氣)，Chagawoyo(物品)。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "깨끗해요", "pronunciation": ["Kkaekkeutaeyo"], "specific_note": "" }], "example": {"sentence": "방이 깨끗해요.", "translation": "房間乾淨。"}, "usage_note": "無髒汙。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "더러워요", "pronunciation": ["Deoreowoyo"], "specific_note": "" }], "example": {"sentence": "손이 더러워요.", "translation": "手很髒。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "쉬워요", "pronunciation": ["Swiwoyo"], "specific_note": "" }, { "term_target": "간단해요", "pronunciation": ["Gandanhaeyo"], "specific_note": "簡單" }], "example": {"sentence": "이거 쉬워요.", "translation": "這很簡單。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "어려워요", "pronunciation": ["Eoryeowoyo"], "specific_note": "" }, { "term_target": "힘들어요", "pronunciation": ["Himdeureoyo"], "specific_note": "累/辛苦" }], "example": {"sentence": "한국어 어려워요.", "translation": "韓文很難。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "맞아요", "pronunciation": ["Majayo"], "specific_note": "對/沒錯" }, { "term_target": "정확해요", "pronunciation": ["Jeonghwakaeyo"], "specific_note": "準確" }], "example": {"sentence": "네, 맞아요.", "translation": "對，沒錯。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "틀려요", "pronunciation": ["Teullyeoyo"], "specific_note": "錯/不同" }], "example": {"sentence": "이건 틀려요.", "translation": "這錯了。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "중요해요", "pronunciation": ["Jung-yohaeyo"], "specific_note": "" }], "example": {"sentence": "중요한 약속.", "translation": "重要的約定。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "달라요", "pronunciation": ["Dallayo"], "specific_note": "不同" }], "example": {"sentence": "우리는 달라요.", "translation": "我們不同。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "진짜", "pronunciation": ["Jinjja"], "specific_note": "" }], "example": {"sentence": "진짜예요?", "translation": "真的嗎？"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "재미있어요", "pronunciation": ["Jaemiisseoyo"], "specific_note": "" }], "example": {"sentence": "영화가 재미있어요.", "translation": "電影有趣。"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "아름다워요", "pronunciation": ["Areumdawoyo"], "specific_note": "美麗(景/人)" }, { "term_target": "예뻐요", "pronunciation": ["Yeppeoyo"], "specific_note": "漂亮(人/物)" }], "example": {"sentence": "꽃이 예뻐요.", "translation": "花很漂亮。"}, "usage_note": "形容人或景物。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "싸요", "pronunciation": ["Ssayo"], "specific_note": "" }], "example": {"sentence": "이거 싸요.", "translation": "這很便宜。"}, "usage_note": "價格低。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "비싸요", "pronunciation": ["Bissayo"], "specific_note": "" }], "example": {"sentence": "너무 비싸요.", "translation": "太貴了。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "배고파요", "pronunciation": ["Baegopayo"], "specific_note": "" }], "example": {"sentence": "저 배고파요.", "translation": "我餓了。"}, "usage_note": "餓。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "피곤해요", "pronunciation": ["Pigonhaeyo"], "specific_note": "身體累" }, { "term_target": "힘들어요", "pronunciation": ["Himdeureoyo"], "specific_note": "辛苦/累" }], "example": {"sentence": "조금 피곤해요.", "translation": "有點累。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "바빠요", "pronunciation": ["Bappayo"], "specific_note": "" }], "example": {"sentence": "저는 바빠요.", "translation": "我很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "기뻐요", "pronunciation": ["Gippeoyo"], "specific_note": "高興" }, { "term_target": "행복해요", "pronunciation": ["Haengbokaeyo"], "specific_note": "幸福" }], "example": {"sentence": "만나서 반가워요.", "translation": "很高興見到你。", }, "usage_note": "Gippeoyo (心情高興)。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "슬퍼요", "pronunciation": ["Seulpeoyo"], "specific_note": "" }], "example": {"sentence": "슬픈 영화.", "translation": "悲傷的電影。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "비슷해요", "pronunciation": ["Biseutaeyo"], "specific_note": "" }], "example": {"sentence": "비슷하게 생겼어요.", "translation": "長得很像。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "유명해요", "pronunciation": ["Yumyeonghaeyo"], "specific_note": "" }], "example": {"sentence": "유명한 식당.", "translation": "有名的餐廳。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "외국의", "pronunciation": ["Oegugui"], "specific_note": "" }], "example": {"sentence": "외국 사람.", "translation": "外國人。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "똑똑해요", "pronunciation": ["Ttokttokaeyo"], "specific_note": "" }], "example": {"sentence": "그는 똑똑해요.", "translation": "他很聰明。"}, "usage_note": "腦袋好。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "위험해요", "pronunciation": ["Wiheomhaeyo"], "specific_note": "" }], "example": {"sentence": "거기는 위험해요.", "translation": "那裡危險。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "친절해요", "pronunciation": ["Chinjeolhaeyo"], "specific_note": "親切" }, { "term_target": "착해요", "pronunciation": ["Chakaeyo"], "specific_note": "善良" }], "example": {"sentence": "친절한 사람.", "translation": "親切的人。"}, "usage_note": "親切。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "모든", "pronunciation": ["Modeun"], "specific_note": "所有" }, { "term_target": "다", "pronunciation": ["Da"], "specific_note": "全部(副詞)" }], "example": {"sentence": "모든 사람.", "translation": "所有人。"}, "usage_note": "全部。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "가장 좋아하는", "pronunciation": ["Gajang joahaneun"], "specific_note": "最喜歡的" }], "example": {"sentence": "가장 좋아하는 가수.", "translation": "最愛的歌手。"}, "usage_note": "中意。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "맛있어요", "pronunciation": ["Masisseoyo"], "specific_note": "" }], "example": {"sentence": "맛있어요.", "translation": "好吃。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "시간", "pronunciation": ["Sigan"], "specific_note": "" }], "example": {"sentence": "시간 있어요?", "translation": "有時間嗎？"}, "usage_note": "時刻。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "사람들", "pronunciation": ["Saramdeul"], "specific_note": "人們" }, { "term_target": "사람", "pronunciation": ["Saram"], "specific_note": "人" }], "example": {"sentence": "많은 사람들.", "translation": "很多人。"}, "usage_note": "複數加 deul。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "돈", "pronunciation": ["Don"], "specific_note": "" }], "example": {"sentence": "돈이 없어요.", "translation": "沒錢。"}, "usage_note": "錢。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "아이", "pronunciation": ["Ai"], "specific_note": "" }, { "term_target": "어린이", "pronunciation": ["Eorini"], "specific_note": "兒童" }], "example": {"sentence": "아이가 있어요.", "translation": "有孩子。"}, "usage_note": "兒童。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "물", "pronunciation": ["Mul"], "specific_note": "" }], "example": {"sentence": "물 주세요.", "translation": "請給水。"}, "usage_note": "液體。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "음식", "pronunciation": ["Eumsik"], "specific_note": "" }], "example": {"sentence": "한국 음식.", "translation": "韓國食物。"}, "usage_note": "吃的東西。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "친구", "pronunciation": ["Chingu"], "specific_note": "" }], "example": {"sentence": "제 친구예요.", "translation": "是我朋友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "가족", "pronunciation": ["Gajok"], "specific_note": "" }], "example": {"sentence": "우리 가족.", "translation": "我們家人。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "학생", "pronunciation": ["Haksaeng"], "specific_note": "" }], "example": {"sentence": "저는 학생이에요.", "translation": "我是學生。"}, "usage_note": "在學者。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "문화", "pronunciation": ["Munhwa"], "specific_note": "" }], "example": {"sentence": "한국 문화.", "translation": "韓國文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "문제", "pronunciation": ["Munje"], "specific_note": "" }], "example": {"sentence": "문제 없어요.", "translation": "沒問題。"}, "usage_note": "難題。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "회사", "pronunciation": ["Hoesa"], "specific_note": "" }], "example": {"sentence": "회사에 가요.", "translation": "去公司。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "남자", "pronunciation": ["Namja"], "specific_note": "" }], "example": {"sentence": "남자 화장실.", "translation": "男廁。"}, "usage_note": "性別。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "여자", "pronunciation": ["Yeoja"], "specific_note": "" }], "example": {"sentence": "여자 친구.", "translation": "女朋友。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "학교", "pronunciation": ["Hakgyo"], "specific_note": "" }], "example": {"sentence": "학교에 가요.", "translation": "去學校。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "선생님", "pronunciation": ["Seonsaengnim"], "specific_note": "" }], "example": {"sentence": "안녕하세요 선생님.", "translation": "老師好。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "영화", "pronunciation": ["Yeonghwa"], "specific_note": "" }], "example": {"sentence": "영화를 봐요.", "translation": "看電影。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "휴대폰", "pronunciation": ["Hyudaepon"], "specific_note": "手機" }, { "term_target": "핸드폰", "pronunciation": ["Haendeupon"], "specific_note": "Handphone" }], "example": {"sentence": "제 휴대폰이에요.", "translation": "是我手機。"}, "usage_note": "外來語 Handphone 常用。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "컴퓨터", "pronunciation": ["Keompyuteo"], "specific_note": "" }], "example": {"sentence": "컴퓨터를 해요.", "translation": "用電腦。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "차", "pronunciation": ["Cha"], "specific_note": "車" }, { "term_target": "자동차", "pronunciation": ["Jadongcha"], "specific_note": "汽車" }], "example": {"sentence": "차를 타요.", "translation": "搭車。"}, "usage_note": "汽車。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "시장", "pronunciation": ["Sijang"], "specific_note": "" }], "example": {"sentence": "시장에 가요.", "translation": "去市場。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "옷", "pronunciation": ["Ot"], "specific_note": "" }], "example": {"sentence": "옷을 사요.", "translation": "買衣服。"}, "usage_note": "衣物。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "가게", "pronunciation": ["Gage"], "specific_note": "" }, { "term_target": "상점", "pronunciation": ["Sangjeom"], "specific_note": "商店" }], "example": {"sentence": "가게에 들어가요.", "translation": "進店裡。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "버스", "pronunciation": ["Beoseu"], "specific_note": "" }], "example": {"sentence": "버스를 타요.", "translation": "搭公車。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "길", "pronunciation": ["Gil"], "specific_note": "路" }, { "term_target": "거리", "pronunciation": ["Geori"], "specific_note": "街道" }], "example": {"sentence": "이 길로 가요.", "translation": "走這條路。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "집", "pronunciation": ["Jip"], "specific_note": "" }], "example": {"sentence": "우리 집.", "translation": "我家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "어머니", "pronunciation": ["Eomeoni"], "specific_note": "正式" }, { "term_target": "엄마", "pronunciation": ["Eomma"], "specific_note": "口語(媽)" }], "example": {"sentence": "저의 어머니.", "translation": "我媽媽。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "아버지", "pronunciation": ["Abeoji"], "specific_note": "正式" }, { "term_target": "아빠", "pronunciation": ["Appa"], "specific_note": "口語(爸)" }], "example": {"sentence": "저의 아버지.", "translation": "我爸爸。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "형제", "pronunciation": ["Hyeongje"], "specific_note": "兄弟" }, { "term_target": "형", "pronunciation": ["Hyeong"], "specific_note": "哥哥(男稱)" }, { "term_target": "오빠", "pronunciation": ["Oppa"], "specific_note": "哥哥(女稱)" }], "example": {"sentence": "형제 있어요?", "translation": "有兄弟嗎？"}, "usage_note": "兄弟。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "자매", "pronunciation": ["Jamae"], "specific_note": "姊妹" }, { "term_target": "누나", "pronunciation": ["Nuna"], "specific_note": "姊姊(男稱)" }, { "term_target": "언니", "pronunciation": ["Eonni"], "specific_note": "姊姊(女稱)" }], "example": {"sentence": "자매예요.", "translation": "是姊妹。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "중국어", "pronunciation": ["Junggugeo"], "specific_note": "" }], "example": {"sentence": "중국어를 해요.", "translation": "說中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "아침", "pronunciation": ["Achim"], "specific_note": "" }], "example": {"sentence": "아침 먹어요.", "translation": "吃早餐(早晨)。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "밤", "pronunciation": ["Bam"], "specific_note": "" }, { "term_target": "저녁", "pronunciation": ["Jeonyeok"], "specific_note": "晚上/晚餐" }], "example": {"sentence": "밤에 자요.", "translation": "晚上睡覺。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "표", "pronunciation": ["Pyo"], "specific_note": "" }], "example": {"sentence": "표를 사요.", "translation": "買票。"}, "usage_note": "入場券或車票。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "가방", "pronunciation": ["Gabang"], "specific_note": "" }], "example": {"sentence": "가방을 들어요.", "translation": "拿包包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "컵", "pronunciation": ["Keop"], "specific_note": "" }], "example": {"sentence": "컵 주세요.", "translation": "請給杯子。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "의사", "pronunciation": ["Uisa"], "specific_note": "" }], "example": {"sentence": "의사를 만나요.", "translation": "看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "경찰", "pronunciation": ["Gyeongchal"], "specific_note": "" }], "example": {"sentence": "경찰을 불러요.", "translation": "叫警察。"}, "usage_note": "求救用。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "병원", "pronunciation": ["Byeongwon"], "specific_note": "" }], "example": {"sentence": "병원에 가요.", "translation": "去醫院。"}, "usage_note": "醫療院所。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "좌석", "pronunciation": ["Jwaseok"], "specific_note": "座位" }, { "term_target": "자리", "pronunciation": ["Jari"], "specific_note": "位子" }], "example": {"sentence": "자리 있어요?", "translation": "有位子嗎？"}, "usage_note": "位子。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "문", "pronunciation": ["Mun"], "specific_note": "" }], "example": {"sentence": "문을 열어요.", "translation": "開門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "방", "pronunciation": ["Bang"], "specific_note": "" }], "example": {"sentence": "제 방이에요.", "translation": "我房間。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "역", "pronunciation": ["Yeok"], "specific_note": "" }], "example": {"sentence": "서울역.", "translation": "首爾站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "지하철", "pronunciation": ["Jihacheol"], "specific_note": "" }], "example": {"sentence": "지하철 역.", "translation": "地鐵站。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "기차", "pronunciation": ["Gicha"], "specific_note": "" }], "example": {"sentence": "기차 여행.", "translation": "火車旅行。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "공항", "pronunciation": ["Gonghang"], "specific_note": "" }], "example": {"sentence": "인천공항.", "translation": "仁川機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "짐", "pronunciation": ["Jim"], "specific_note": "" }], "example": {"sentence": "짐이 많아요.", "translation": "行李很多。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "지도", "pronunciation": ["Jido"], "specific_note": "" }], "example": {"sentence": "지도를 봐요.", "translation": "看地圖。"}, "usage_note": "指引。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "카운터", "pronunciation": ["Kaunteo"], "specific_note": "" }], "example": {"sentence": "카운터로 가세요.", "translation": "請去櫃檯。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "로비", "pronunciation": ["Robi"], "specific_note": "" }], "example": {"sentence": "로비에서 만나요.", "translation": "大廳見。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "예약", "pronunciation": ["Yeyak"], "specific_note": "" }], "example": {"sentence": "예약했어요.", "translation": "我預約了。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "체크인", "pronunciation": ["Chekeuin"], "specific_note": "" }], "example": {"sentence": "체크인 할게요.", "translation": "我要辦理入住。"}, "usage_note": "Check-in。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "체크아웃", "pronunciation": ["Chekeuaut"], "specific_note": "" }], "example": {"sentence": "체크아웃 시간.", "translation": "退房時間。"}, "usage_note": "Check-out。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "음료수", "pronunciation": ["Eumnyosu"], "specific_note": "" }], "example": {"sentence": "음료수 드실래요?", "translation": "要喝飲料嗎？"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "메뉴", "pronunciation": ["Menyu"], "specific_note": "" }], "example": {"sentence": "메뉴 주세요.", "translation": "請給菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "점심", "pronunciation": ["Jeomsim"], "specific_note": "" }], "example": {"sentence": "점심 먹어요.", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "저녁", "pronunciation": ["Jeonyeok"], "specific_note": "" }], "example": {"sentence": "저녁 먹어요.", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "계산서", "pronunciation": ["Gyesanseo"], "specific_note": "" }], "example": {"sentence": "계산서 주세요.", "translation": "麻煩結帳。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "가격", "pronunciation": ["Gagyeok"], "specific_note": "" }], "example": {"sentence": "가격이 싸요.", "translation": "價格便宜。"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "영수증", "pronunciation": ["Yeongsujeung"], "specific_note": "" }], "example": {"sentence": "영수증 주세요.", "translation": "請給收據。"}, "usage_note": "統一發票。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "사이즈", "pronunciation": ["Saijeu"], "specific_note": "" }], "example": {"sentence": "큰 사이즈.", "translation": "大尺寸。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "입구", "pronunciation": ["Ipgu"], "specific_note": "" }], "example": {"sentence": "입구가 어디예요?", "translation": "入口在哪？"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "출구", "pronunciation": ["Chulgu"], "specific_note": "" }], "example": {"sentence": "3번 출구.", "translation": "3號出口。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "대만", "pronunciation": ["Daeman"], "specific_note": "" }], "example": {"sentence": "대만에서 왔어요.", "translation": "來自台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "台灣人", "related_terms": [{ "term_target": "대만 사람", "pronunciation": ["Daeman saram"], "specific_note": "" }], "example": {"sentence": "저는 대만 사람입니다.", "translation": "我是台灣人。"}, "usage_note": "國籍。", "image_file": "taiwanese.png" },
        { "id": "n-66", "term_zh": "一切事物", "related_terms": [{ "term_target": "모든 것", "pronunciation": ["Modeun geot"], "specific_note": "" }], "example": {"sentence": "모든 것이 좋아요.", "translation": "一切都好。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-67", "term_zh": "錢包", "related_terms": [{ "term_target": "지갑", "pronunciation": ["Jigap"], "specific_note": "" }], "example": {"sentence": "지갑을 잃어버렸어요.", "translation": "掉了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-68", "term_zh": "身分證", "related_terms": [{ "term_target": "신분증", "pronunciation": ["Sinbunjeung"], "specific_note": "" }], "example": {"sentence": "신분증 주세요.", "translation": "請出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-69", "term_zh": "護照", "related_terms": [{ "term_target": "여권", "pronunciation": ["Yeogwon"], "specific_note": "" }], "example": {"sentence": "여권 보여주세요.", "translation": "請出示護照。"}, "usage_note": "出國必備。", "image_file": "passport.png" },
        { "id": "n-70", "term_zh": "餐廳", "related_terms": [{ "term_target": "식당", "pronunciation": ["Sikdang"], "specific_note": "" }, { "term_target": "레스토랑", "pronunciation": ["Resutorang"], "specific_note": "西餐廳" }], "example": {"sentence": "맛있는 식당.", "translation": "好吃的餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-71", "term_zh": "飯店", "related_terms": [{ "term_target": "호텔", "pronunciation": ["Hotel"], "specific_note": "" }], "example": {"sentence": "호텔 예약.", "translation": "訂飯店。"}, "usage_note": "住宿。", "image_file": "hotel.png" },
        { "id": "n-72", "term_zh": "場所", "related_terms": [{ "term_target": "장소", "pronunciation": ["Jangso"], "specific_note": "" }], "example": {"sentence": "약속 장소.", "translation": "約定地點。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-73", "term_zh": "用品店員", "related_terms": [{ "term_target": "점원", "pronunciation": ["Jeomwon"], "specific_note": "" }], "example": {"sentence": "점원에게 물어봐요.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-74", "term_zh": "超市", "related_terms": [{ "term_target": "슈퍼마켓", "pronunciation": ["Syupeomaket"], "specific_note": "" }], "example": {"sentence": "슈퍼마켓에 가요.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-75", "term_zh": "月台", "related_terms": [{ "term_target": "승강장", "pronunciation": ["Seunggangjang"], "specific_note": "" }], "example": {"sentence": "1번 승강장.", "translation": "第一月台。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "지금", "pronunciation": ["Jigeum"], "specific_note": "" }], "example": {"sentence": "지금 가요.", "translation": "現在去。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "매우", "pronunciation": ["Maeu"], "specific_note": "書面" }, { "term_target": "아주", "pronunciation": ["Aju"], "specific_note": "口語" }, { "term_target": "너무", "pronunciation": ["Neomu"], "specific_note": "太/非常" }], "example": {"sentence": "아주 좋아요.", "translation": "非常好。"}, "usage_note": "強調。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "정말", "pronunciation": ["Jeongmal"], "specific_note": "" }, { "term_target": "진짜", "pronunciation": ["Jinjja"], "specific_note": "口語" }], "example": {"sentence": "정말이에요?", "translation": "真的嗎？"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "잘", "pronunciation": ["Jal"], "specific_note": "" }], "example": {"sentence": "잘 자요.", "translation": "睡個好覺(好好睡)。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "자주", "pronunciation": ["Jaju"], "specific_note": "" }], "example": {"sentence": "자주 와요.", "translation": "常來。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "보통", "pronunciation": ["Botong"], "specific_note": "" }], "example": {"sentence": "보통 7시에 일어나요.", "translation": "通常七點起床。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "이미", "pronunciation": ["Imi"], "specific_note": "書面" }, { "term_target": "벌써", "pronunciation": ["Beolsseo"], "specific_note": "口語/驚訝" }], "example": {"sentence": "벌써 왔어요?", "translation": "已經來了嗎？"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "오직", "pronunciation": ["Ojik"], "specific_note": "唯獨" }, { "term_target": "만", "pronunciation": ["Man"], "specific_note": "只(助詞)" }], "example": {"sentence": "너만 좋아해.", "translation": "只喜歡你。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "다시", "pronunciation": ["Dasi"], "specific_note": "" }, { "term_target": "또", "pronunciation": ["Tto"], "specific_note": "又/再" }], "example": {"sentence": "다시 만나요.", "translation": "再見面吧。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "약", "pronunciation": ["Yak"], "specific_note": "大約" }, { "term_target": "쯤", "pronunciation": ["Jjeum"], "specific_note": "左右(接數字後)" }], "example": {"sentence": "1시쯤 만나요.", "translation": "大約1點見。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "조금", "pronunciation": ["Jogeum"], "specific_note": "" }], "example": {"sentence": "조금만 주세요.", "translation": "請給一點點。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "도", "pronunciation": ["Do"], "specific_note": "也(助詞)" }, { "term_target": "역시", "pronunciation": ["Yeoksi"], "specific_note": "果然/也是" }], "example": {"sentence": "나도.", "translation": "我也是。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "아마도", "pronunciation": ["Amado"], "specific_note": "" }], "example": {"sentence": "아마도 그럴 거예요.", "translation": "大概是那樣。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "나중에", "pronunciation": ["Najunge"], "specific_note": "稍後" }, { "term_target": "후에", "pronunciation": ["Hue"], "specific_note": "之後" }], "example": {"sentence": "나중에 봐요.", "translation": "待會見。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "곧", "pronunciation": ["Got"], "specific_note": "" }], "example": {"sentence": "곧 도착해요.", "translation": "快到了。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "같이", "pronunciation": ["Gachi"], "specific_note": "" }, { "term_target": "함께", "pronunciation": ["Hamkke"], "specific_note": "書面" }], "example": {"sentence": "같이 가요.", "translation": "一起去吧。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "아직", "pronunciation": ["Ajik"], "specific_note": "還/尚未" }, { "term_target": "여전히", "pronunciation": ["Yeojeonhi"], "specific_note": "依然" }], "example": {"sentence": "아직 안 왔어요.", "translation": "還沒來。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "일반적으로", "pronunciation": ["Ilbanjeogeuro"], "specific_note": "" }], "example": {"sentence": "일반적으로 그래요.", "translation": "一般是那樣。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "즉시", "pronunciation": ["Jeuksi"], "specific_note": "立即" }, { "term_target": "바로", "pronunciation": ["Baro"], "specific_note": "馬上" }], "example": {"sentence": "바로 갈게요.", "translation": "馬上去。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "도 ... 아니다", "pronunciation": ["Do ... anida"], "specific_note": "也...不" }], "example": {"sentence": "나도 몰라요.", "translation": "我也不知道。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "무엇", "pronunciation": ["Mueot"], "specific_note": "書面" }, { "term_target": "뭐", "pronunciation": ["Mwo"], "specific_note": "口語" }], "example": {"sentence": "이게 뭐예요?", "translation": "這是什麼？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "어떻게", "pronunciation": ["Eotteoke"], "specific_note": "" }], "example": {"sentence": "어떻게 가요?", "translation": "怎麼去？"}, "usage_note": "問方法。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "언제", "pronunciation": ["Eonje"], "specific_note": "" }], "example": {"sentence": "언제 와요?", "translation": "何時來？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "어디", "pronunciation": ["Eodi"], "specific_note": "" }], "example": {"sentence": "어디 가요?", "translation": "去哪裡？"}, "usage_note": "問地點。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "누구", "pronunciation": ["Nugu"], "specific_note": "" }], "example": {"sentence": "누구세요?", "translation": "哪位？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "왜", "pronunciation": ["Wae"], "specific_note": "" }], "example": {"sentence": "왜 그래요?", "translation": "怎麼了(為什麼那樣)？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "어느", "pronunciation": ["Eoneu"], "specific_note": "" }], "example": {"sentence": "어느 것이에요?", "translation": "是哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "얼마", "pronunciation": ["Eolma"], "specific_note": "多少錢/量" }, { "term_target": "몇", "pronunciation": ["Myeot"], "specific_note": "幾(可數)" }], "example": {"sentence": "얼마예요?", "translation": "多少錢？"}, "usage_note": "問價格。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "얼마나", "pronunciation": ["Eolmana"], "specific_note": "" }], "example": {"sentence": "얼마나 걸려요?", "translation": "要花多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "지금", "pronunciation": ["Jigeum"], "specific_note": "" }], "example": {"sentence": "지금 가요.", "translation": "現在去。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "오늘", "pronunciation": ["Oneul"], "specific_note": "" }], "example": {"sentence": "오늘은 더워요.", "translation": "今天很熱。"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "내일", "pronunciation": ["Naeil"], "specific_note": "" }], "example": {"sentence": "내일 봐요.", "translation": "明天見。"}, "usage_note": "隔天。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "어제", "pronunciation": ["Eoje"], "specific_note": "" }], "example": {"sentence": "어제 왔어요.", "translation": "昨天來了。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "여기", "pronunciation": ["Yeogi"], "specific_note": "" }], "example": {"sentence": "여기요.", "translation": "這裡。",}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "거기", "pronunciation": ["Geogi"], "specific_note": "中距離" }, { "term_target": "저기", "pronunciation": ["Jeogi"], "specific_note": "遠距離" }], "example": {"sentence": "저기 보세요.", "translation": "看那裡。", }, "usage_note": "Geogi(對方那), Jeogi(遠處)。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "일", "pronunciation": ["Il"], "specific_note": "日(日期)" }, { "term_target": "날", "pronunciation": ["Nal"], "specific_note": "日子" }], "example": {"sentence": "좋은 날.", "translation": "好日子。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "년", "pronunciation": ["Nyeon"], "specific_note": "年份" }, { "term_target": "해", "pronunciation": ["Hae"], "specific_note": "年" }], "example": {"sentence": "새해.", "translation": "新年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "월", "pronunciation": ["Wol"], "specific_note": "月份(1月,2月)" }, { "term_target": "달", "pronunciation": ["Dal"], "specific_note": "月(幾個)" }], "example": {"sentence": "이번 달.", "translation": "這個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "주", "pronunciation": ["Ju"], "specific_note": "" }], "example": {"sentence": "이번 주.", "translation": "這週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "아침", "pronunciation": ["Achim"], "specific_note": "" }], "example": {"sentence": "아침 먹어요.", "translation": "吃早餐。"}, "usage_note": "上午。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "오후", "pronunciation": ["Ohu"], "specific_note": "" }], "example": {"sentence": "오후 2시.", "translation": "下午2點。"}, "usage_note": "PM。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "저녁", "pronunciation": ["Jeonyeok"], "specific_note": "傍晚/晚餐" }, { "term_target": "밤", "pronunciation": ["Bam"], "specific_note": "夜晚" }], "example": {"sentence": "밤에 자요.", "translation": "晚上睡覺。"}, "usage_note": "太陽下山後。", "image_file": "night.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "정오", "pronunciation": ["Jeongo"], "specific_note": "正午" }, { "term_target": "낮", "pronunciation": ["Nat"], "specific_note": "白天" }], "example": {"sentence": "낮에 만나요.", "translation": "中午見。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "앞", "pronunciation": ["Ap"], "specific_note": "" }], "example": {"sentence": "역 앞에서 만나요.", "translation": "車站前見。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "뒤", "pronunciation": ["Dwi"], "specific_note": "" }], "example": {"sentence": "문 뒤에 있어요.", "translation": "在門後。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "왼쪽", "pronunciation": ["Oenjjok"], "specific_note": "" }], "example": {"sentence": "왼쪽으로 가요.", "translation": "往左走。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "오른쪽", "pronunciation": ["Oreunjjok"], "specific_note": "" }], "example": {"sentence": "오른쪽에 있어요.", "translation": "在右邊。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "옆", "pronunciation": ["Yeop"], "specific_note": "" }], "example": {"sentence": "제 옆에 앉아요.", "translation": "坐我旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "건너편", "pronunciation": ["Geonneopyeon"], "specific_note": "" }], "example": {"sentence": "길 건너편.", "translation": "路對面。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "봄", "pronunciation": ["Bom"], "specific_note": "" }], "example": {"sentence": "봄이 왔어요.", "translation": "春天來了。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "여름", "pronunciation": ["Yeoreum"], "specific_note": "" }], "example": {"sentence": "여름은 더워요.", "translation": "夏天很熱。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "가을", "pronunciation": ["Gaeul"], "specific_note": "" }], "example": {"sentence": "가을을 좋아해요.", "translation": "喜歡秋天。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "겨울", "pronunciation": ["Gyeoul"], "specific_note": "" }], "example": {"sentence": "겨울은 추워요.", "translation": "冬天很冷。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "영", "pronunciation": ["Yeong"], "specific_note": "數學" }, { "term_target": "공", "pronunciation": ["Gong"], "specific_note": "電話號碼" }], "example": {"sentence": "영하.", "translation": "零下。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "일", "pronunciation": ["Il"], "specific_note": "漢語" }, { "term_target": "하나", "pronunciation": ["Hana"], "specific_note": "固有" }], "example": {"sentence": "하나 주세요.", "translation": "請給我一個 (Hana)。"}, "usage_note": "數數用Hana，日期價格用Il。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "이", "pronunciation": ["I"], "specific_note": "漢語" }, { "term_target": "둘", "pronunciation": ["Dul"], "specific_note": "固有" }], "example": {"sentence": "두 명.", "translation": "兩個人 (Du myeong)。"}, "usage_note": "數數用Dul，日期價格用I。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "삼", "pronunciation": ["Sam"], "specific_note": "漢語" }, { "term_target": "셋", "pronunciation": ["Set"], "specific_note": "固有" }], "example": {"sentence": "세 개.", "translation": "三個 (Se gae)。"}, "usage_note": "數數用Set，日期價格用Sam。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "사", "pronunciation": ["Sa"], "specific_note": "漢語" }, { "term_target": "넷", "pronunciation": ["Net"], "specific_note": "固有" }], "example": {"sentence": "네 시.", "translation": "四點 (Ne si)。"}, "usage_note": "數數用Net，日期價格用Sa。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "오", "pronunciation": ["O"], "specific_note": "漢語" }, { "term_target": "다섯", "pronunciation": ["Daseot"], "specific_note": "固有" }], "example": {"sentence": "오 층.", "translation": "五樓 (O cheung)。"}, "usage_note": "五。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "육", "pronunciation": ["Yuk"], "specific_note": "漢語" }, { "term_target": "여섯", "pronunciation": ["Yeoseot"], "specific_note": "固有" }], "example": {"sentence": "여섯 살.", "translation": "六歲 (Yeoseot sal)。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "칠", "pronunciation": ["Chil"], "specific_note": "漢語" }, { "term_target": "일곱", "pronunciation": ["Ilgop"], "specific_note": "固有" }], "example": {"sentence": "칠 월.", "translation": "七月 (Chil wol)。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "팔", "pronunciation": ["Pal"], "specific_note": "漢語" }, { "term_target": "여덟", "pronunciation": ["Yeodeol"], "specific_note": "固有" }], "example": {"sentence": "팔 층.", "translation": "八樓 (Pal cheung)。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "구", "pronunciation": ["Gu"], "specific_note": "漢語" }, { "term_target": "아홉", "pronunciation": ["Ahop"], "specific_note": "固有" }], "example": {"sentence": "구 천원.", "translation": "九千元 (Gu cheonwon)。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "십", "pronunciation": ["Sip"], "specific_note": "漢語" }, { "term_target": "열", "pronunciation": ["Yeol"], "specific_note": "固有" }], "example": {"sentence": "열 개.", "translation": "十個 (Yeol gae)。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "십일", "pronunciation": ["Sibil"], "specific_note": "漢語" }, { "term_target": "열하나", "pronunciation": ["Yeolhana"], "specific_note": "固有" }], "example": {"sentence": "십일 일.", "translation": "11日。"}, "usage_note": "十一。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "십이", "pronunciation": ["Sibi"], "specific_note": "漢語" }, { "term_target": "열둘", "pronunciation": ["Yeoldul"], "specific_note": "固有" }], "example": {"sentence": "열두 시.", "translation": "12點 (Yeoldu si)。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "십오", "pronunciation": ["Sibo"], "specific_note": "漢語" }, { "term_target": "열다섯", "pronunciation": ["Yeoldaseot"], "specific_note": "固有" }], "example": {"sentence": "십오 분.", "translation": "15分。"}, "usage_note": "十五。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "이십", "pronunciation": ["Isip"], "specific_note": "漢語" }, { "term_target": "스물", "pronunciation": ["Seumul"], "specific_note": "固有" }], "example": {"sentence": "스무 살.", "translation": "20歲 (Seumu sal)。"}, "usage_note": "二十。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "오십", "pronunciation": ["Osip"], "specific_note": "漢語" }, { "term_target": "쉰", "pronunciation": ["Swin"], "specific_note": "固有" }], "example": {"sentence": "오십 원.", "translation": "50元。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "백", "pronunciation": ["Baek"], "specific_note": "" }], "example": {"sentence": "백 점.", "translation": "一百分。"}, "usage_note": "百。", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "천", "pronunciation": ["Cheon"], "specific_note": "" }], "example": {"sentence": "천 원.", "translation": "一千元。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "만", "pronunciation": ["Man"], "specific_note": "" }], "example": {"sentence": "만 원.", "translation": "一萬元。"}, "usage_note": "一萬。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是/覺得～", "related_terms": [{ "term_target": "저는 ...입니다 / 예요", "pronunciation": ["Jeoneun ...imnida / yeyo"], "specific_note": "" }], "example": {"sentence": "저는 학생이에요.", "translation": "我是學生。"}, "usage_note": "最基本的肯定句。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫～", "related_terms": [{ "term_target": "제 이름은 ...입니다", "pronunciation": ["Je ireumeun ...imnida"], "specific_note": "" }], "example": {"sentence": "제 이름은 민수입니다.", "translation": "我叫民秀。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做～", "related_terms": [{ "term_target": "저는 ...해요", "pronunciation": ["Jeoneun ...haeyo"], "specific_note": "" }], "example": {"sentence": "저는 운동해요.", "translation": "我運動。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做～", "related_terms": [{ "term_target": "...하고 있어요", "pronunciation": ["...hago isseoyo"], "specific_note": "" }], "example": {"sentence": "밥을 먹고 있어요.", "translation": "我正在吃飯。"}, "usage_note": "進行式。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠～", "related_terms": [{ "term_target": "...할 수 있어요", "pronunciation": ["...hal su isseoyo"], "specific_note": "" }], "example": {"sentence": "운전할 수 있어요.", "translation": "我會開車。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做～", "related_terms": [{ "term_target": "...을/를 좋아해요", "pronunciation": ["...eul/reul joahaeyo"], "specific_note": "" }], "example": {"sentence": "독서를 좋아해요.", "translation": "我喜歡閱讀。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經～", "related_terms": [{ "term_target": "저는 ...였어요", "pronunciation": ["Jeoneun ...yeosseoyo"], "specific_note": "過去狀態" }], "example": {"sentence": "저는 학생이었어요.", "translation": "我曾經是學生。"}, "usage_note": "過去狀態。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過～", "related_terms": [{ "term_target": "...했어요", "pronunciation": ["...haesseoyo"], "specific_note": "過去動作" }], "example": {"sentence": "숙제 했어요.", "translation": "我做完功課了。"}, "usage_note": "過去動作。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過～", "related_terms": [{ "term_target": "이미 ...했어요", "pronunciation": ["Imi ...haesseoyo"], "specific_note": "" }], "example": {"sentence": "이미 먹었어요.", "translation": "已經吃過了。"}, "usage_note": "完成式。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過～", "related_terms": [{ "term_target": "...가 본 적 있어요", "pronunciation": ["...ga bon jeok isseoyo"], "specific_note": "" }], "example": {"sentence": "한국에 가 본 적 있어요.", "translation": "我曾去過韓國。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算～", "related_terms": [{ "term_target": "...할 거예요", "pronunciation": ["...hal geoyeyo"], "specific_note": "" }], "example": {"sentence": "갈 거예요.", "translation": "我要去。"}, "usage_note": "未來意。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是～嗎？", "related_terms": [{ "term_target": "...입니까? / ...예요?", "pronunciation": ["...imnikka? / ...yeyo?"], "specific_note": "" }], "example": {"sentence": "학생이에요?", "translation": "你是學生嗎？"}, "usage_note": "確認身分。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做～嗎？", "related_terms": [{ "term_target": "...하고 있어요?", "pronunciation": ["...hago isseoyo?"], "specific_note": "" }], "example": {"sentence": "공부하고 있어요?", "translation": "你在讀書嗎？"}, "usage_note": "進行疑問。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經～嗎？", "related_terms": [{ "term_target": "...해 본 적 있어요?", "pronunciation": ["...hae bon jeok isseoyo?"], "specific_note": "" }], "example": {"sentence": "가 본 적 있어요?", "translation": "你有去過嗎？"}, "usage_note": "問經驗。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做（某事）？", "related_terms": [{ "term_target": "언제 ...해요?", "pronunciation": ["Eonje ...haeyo?"], "specific_note": "" }], "example": {"sentence": "언제 자요?", "translation": "你何時睡？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去（某地）？", "related_terms": [{ "term_target": "언제 ...에 가요?", "pronunciation": ["Eonje ...e gayo?"], "specific_note": "" }], "example": {"sentence": "언제 학교에 가요?", "translation": "你何時去學校？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做（某事）？", "related_terms": [{ "term_target": "어디서 ...해요?", "pronunciation": ["Eodiseo ...haeyo?"], "specific_note": "" }], "example": {"sentence": "어디서 사요?", "translation": "你在哪買？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做（某事）？", "related_terms": [{ "term_target": "어떻게 ...해요?", "pronunciation": ["Eotteoke ...haeyo?"], "specific_note": "" }], "example": {"sentence": "어떻게 가요?", "translation": "你怎麼去？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去（某地）？", "related_terms": [{ "term_target": "어떻게 ...에 가요?", "pronunciation": ["Eotteoke ...e gayo?"], "specific_note": "" }], "example": {"sentence": "어떻게 학교에 가요?", "translation": "你怎麼去學校？"}, "usage_note": "問交通方式。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是～", "related_terms": [{ "term_target": "...이/가 아니에요", "pronunciation": ["...i/ga anieyo"], "specific_note": "" }], "example": {"sentence": "학생이 아니에요.", "translation": "我不是學生。"}, "usage_note": "否定身分。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做～", "related_terms": [{ "term_target": "안 ...해요 / ...지 않아요", "pronunciation": ["An ...haeyo / ...ji anayo"], "specific_note": "" }], "example": {"sentence": "안 먹어요.", "translation": "我不吃。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能～", "related_terms": [{ "term_target": "못 ...해요 / ...할 수 없어요", "pronunciation": ["Mot ...haeyo / ...hal su eopseoyo"], "specific_note": "" }], "example": {"sentence": "운전할 수 없어요.", "translation": "我不會開車。"}, "usage_note": "能力否定。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾～", "related_terms": [{ "term_target": "...해 본 적 없어요", "pronunciation": ["...hae bon jeok eopseoyo"], "specific_note": "" }], "example": {"sentence": "먹어 본 적 없어요.", "translation": "我沒吃過這個。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必～", "related_terms": [{ "term_target": "...할 필요 없어요", "pronunciation": ["...hal piryo eopseoyo"], "specific_note": "" }], "example": {"sentence": "갈 필요 없어요.", "translation": "我不必去。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果～的話，就～", "related_terms": [{ "term_target": "만약 ...라면", "pronunciation": ["Manyak ...ramyeon"], "specific_note": "" }], "example": {"sentence": "싸다면 살게요.", "translation": "如果便宜的話我就買。"}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當～時，就～", "related_terms": [{ "term_target": "...할 때", "pronunciation": ["...hal ttae"], "specific_note": "" }], "example": {"sentence": "어렸을 때.", "translation": "小時候(當我是孩子時)。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你～", "related_terms": [{ "term_target": "...해 줄 수 있어요?", "pronunciation": ["...hae jul su isseoyo?"], "specific_note": "" }], "example": {"sentence": "도와줄 수 있어요?", "translation": "可以幫我嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做～吧！", "related_terms": [{ "term_target": "...합시다 / ...하자", "pronunciation": ["...hapsida / ...haja"], "specific_note": "" }], "example": {"sentence": "갑시다.", "translation": "走吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為～", "related_terms": [{ "term_target": "...라고 생각해요", "pronunciation": ["...rago saenggakaeyo"], "specific_note": "" }], "example": {"sentence": "좋다고 생각해요.", "translation": "我認為很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做～", "related_terms": [{ "term_target": "...하고 싶어요", "pronunciation": ["...hago sipeoyo"], "specific_note": "" }], "example": {"sentence": "가고 싶어요.", "translation": "我想去。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做～", "related_terms": [{ "term_target": "...해야 해요", "pronunciation": ["...haeya haeyo"], "specific_note": "" }], "example": {"sentence": "일해야 해요.", "translation": "我必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "...하는 것은 ...해요", "pronunciation": ["...haneun geoseun ...haeyo"], "specific_note": "" }], "example": {"sentence": "먹는 것은 즐거워요.", "translation": "吃東西是開心的。"}, "usage_note": "動詞名詞化。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我…嗎？", "related_terms": [{ "term_target": "도와줄 수 있어요?", "pronunciation": ["Dowajul su isseoyo?"], "specific_note": "" }], "example": {"sentence": "청소를 도와줄 수 있어요?", "translation": "你可以幫我打掃嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以…嗎？", "related_terms": [{ "term_target": "...해도 돼요?", "pronunciation": ["...haedo dwaeyo?"], "specific_note": "" }], "example": {"sentence": "사진 찍어도 돼요?", "translation": "我可以拍照嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡…", "related_terms": [{ "term_target": "...를 싫어해요 / 안 좋아해요", "pronunciation": ["...reul sireohaeyo / an joahaeyo"], "specific_note": "" }], "example": {"sentence": "그거 안 좋아해요.", "translation": "我不喜歡那個。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡…", "related_terms": [{ "term_target": "...를 더 좋아해요", "pronunciation": ["...reul deo joahaeyo"], "specific_note": "" }], "example": {"sentence": "이걸 더 좋아해요.", "translation": "我比較喜歡這個。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更…", "related_terms": [{ "term_target": "A가 B보다 더 ...해요", "pronunciation": ["Aga Bboda deo ...haeyo"], "specific_note": "" }], "example": {"sentence": "이게 저것보다 더 비싸요.", "translation": "這比那個貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有…（存在）", "related_terms": [{ "term_target": "...이/가 있어요", "pronunciation": ["...i/ga isseoyo"], "specific_note": "" }], "example": {"sentence": "강아지가 있어요.", "translation": "有一隻狗。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}