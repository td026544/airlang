import { AppData } from '../types';

export const indonesianData: AppData ={
  "meta": {
    "source_language": "zh-TW",
    "target_language": "id-ID",
    "version": "3.2",
    "description": "台灣人快速語言學習 - 印尼語完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)"
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
          "term_target": "Ya",
          "pronunciation": ["/ja/"],
          "specific_note": "肯定"
        },
        {
          "term_target": "Iya",
          "pronunciation": ["/iˈja/"],
          "specific_note": "口語 (對/沒錯)"
        }
      ],
      "example": {
        "sentence": "Ya, betul.",
        "translation": "是的，沒錯。"
      },
      "usage_note": "Iya 比 Ya 聽起來比較柔和、口語。",
      "image_file": "yes.png"
    },
    {
      "id": "greet-002",
      "term_zh": "不是",
      "related_terms": [
        {
          "term_target": "Tidak",
          "pronunciation": ["/ˈtidak/"],
          "specific_note": "否定(動作/形容)"
        },
        {
          "term_target": "Bukan",
          "pronunciation": ["/ˈbukan/"],
          "specific_note": "否定(名詞)"
        },
        {
          "term_target": "Enggak",
          "pronunciation": ["/əŋˈɡak/"],
          "specific_note": "口語(不)"
        }
      ],
      "example": {
        "sentence": "Tidak, terima kasih.",
        "translation": "不了，謝謝。"
      },
      "usage_note": "口語常說 Enggak 或 Gak。",
      "image_file": "no.png"
    },
    {
      "id": "greet-003",
      "term_zh": "你好",
      "related_terms": [
        {
          "term_target": "Halo",
          "pronunciation": ["/ˈhalo/"],
          "specific_note": "通用"
        }
      ],
      "example": {
        "sentence": "Halo, apa kabar?",
        "translation": "你好，你好嗎？"
      },
      "usage_note": "印尼人打招呼很常用 Halo。",
      "image_file": "hello.png"
    },
    {
      "id": "greet-004",
      "term_zh": "謝謝你",
      "related_terms": [
        {
          "term_target": "Terima kasih",
          "pronunciation": ["/təˈrima ˈkasih/"],
          "specific_note": "通用"
        },
        {
          "term_target": "Makasih",
          "pronunciation": ["/maˈkasih/"],
          "specific_note": "口語"
        }
      ],
      "example": {
        "sentence": "Terima kasih banyak.",
        "translation": "非常謝謝你。"
      },
      "usage_note": "回應可用 Sama-sama (不客氣)。",
      "image_file": "thank_you.png"
    },
    {
      "id": "greet-005",
      "term_zh": "對不起",
      "related_terms": [
        {
          "term_target": "Maaf",
          "pronunciation": ["/maˈaf/"],
          "specific_note": "通用"
        },
        {
          "term_target": "Mohon maaf",
          "pronunciation": ["/ˈmohon maˈaf/"],
          "specific_note": "正式/請求原諒"
        }
      ],
      "example": {
        "sentence": "Maaf, saya terlambat.",
        "translation": "對不起，我遲到了。"
      },
      "usage_note": "Maaf 既是道歉也是不好意思。",
      "image_file": "sorry.png"
    },
    {
      "id": "greet-006",
      "term_zh": "請問...",
      "related_terms": [
        {
          "term_target": "Permisi",
          "pronunciation": ["/pərˈmisi/"],
          "specific_note": "引起注意"
        },
        {
          "term_target": "Numpang tanya",
          "pronunciation": ["/ˈnumpaŋ ˈtaɲa/"],
          "specific_note": "借問一下"
        }
      ],
      "example": {
        "sentence": "Permisi, stasiun di mana?",
        "translation": "不好意思請問，車站在哪？"
      },
      "usage_note": "發問前用 Permisi 最禮貌。",
      "image_file": "excuse_me.png"
    },
    {
      "id": "greet-007",
      "term_zh": "我不懂",
      "related_terms": [
        {
          "term_target": "Saya tidak mengerti",
          "pronunciation": ["/ˈsaja ˈtidak məˈŋərti/"],
          "specific_note": "不明白"
        }
      ],
      "example": {
        "sentence": "Maaf, saya tidak mengerti Bahasa Indonesia.",
        "translation": "抱歉，我不懂印尼語。"
      },
      "usage_note": "Tidak (不) + Mengerti (懂)。",
      "image_file": "dont_understand.png"
    },
    {
      "id": "greet-008",
      "term_zh": "廁所在哪裡？",
      "related_terms": [
        {
          "term_target": "Di mana toilet?",
          "pronunciation": ["/di ˈmana ˈtoilet/"],
          "specific_note": "通用"
        },
        {
          "term_target": "Di mana kamar kecil?",
          "pronunciation": ["/di ˈmana ˈkamar ˈkətʃil/"],
          "specific_note": "較正式"
        }
      ],
      "example": {
        "sentence": "Permisi, di mana toilet?",
        "translation": "請問，廁所在哪裡？"
      },
      "usage_note": "WC (發音 Wé-sé) 也很常用。",
      "image_file": "where_bathroom.png"
    },
    {
      "id": "greet-009",
      "term_zh": "借過",
      "related_terms": [
        {
          "term_target": "Permisi",
          "pronunciation": ["/pərˈmisi/"],
          "specific_note": "通用"
        },
        {
          "term_target": "Numpang lewat",
          "pronunciation": ["/ˈnumpaŋ ˈlewat/"],
          "specific_note": "借過一下"
        }
      ],
      "example": {
        "sentence": "Permisi, saya mau lewat.",
        "translation": "借過，我要過去。"
      },
      "usage_note": "通過人群時說 Permisi。",
      "image_file": "excuse_me_pass.png"
    },
    {
      "id": "greet-010",
      "term_zh": "多少錢？",
      "related_terms": [
        {
          "term_target": "Berapa harganya?",
          "pronunciation": ["/bəˈrapa harˈɡaɲa/"],
          "specific_note": "詢價"
        },
        {
          "term_target": "Berapa ini?",
          "pronunciation": ["/bəˈrapa ˈini/"],
          "specific_note": "這個多少?"
        }
      ],
      "example": {
        "sentence": "Berapa harganya?",
        "translation": "多少錢？"
      },
      "usage_note": "Berapa 意思是「多少」。",
      "image_file": "how_much.png"
    },
    {
      "id": "greet-011",
      "term_zh": "我想要這個",
      "related_terms": [
        {
          "term_target": "Saya mau ini",
          "pronunciation": ["/ˈsaja ˈmau ˈini/"],
          "specific_note": "我要這個"
        }
      ],
      "example": {
        "sentence": "Saya mau ini satu.",
        "translation": "我要一個這個。"
      },
      "usage_note": "Mau 是「想要」。",
      "image_file": "i_want_this.png"
    },
    {
      "id": "greet-012",
      "term_zh": "請給我...",
      "related_terms": [
        {
          "term_target": "Minta...",
          "pronunciation": ["/ˈminta/"],
          "specific_note": "索取/點餐"
        }
      ],
      "example": {
        "sentence": "Minta air.",
        "translation": "請給我水 (或我要點水)。"
      },
      "usage_note": "餐廳點餐常用 Minta。",
      "image_file": "please_give_me.png"
    },
    {
      "id": "greet-013",
      "term_zh": "這是什麼？",
      "related_terms": [
        {
          "term_target": "Apa ini?",
          "pronunciation": ["/ˈapa ˈini/"],
          "specific_note": "疑問"
        }
      ],
      "example": {
        "sentence": "Apa ini? Enak?",
        "translation": "這是什麼？好吃嗎？"
      },
      "usage_note": "指著東西問。",
      "image_file": "what_is_this.png"
    },
    {
      "id": "greet-014",
      "term_zh": "請幫我",
      "related_terms": [
        {
          "term_target": "Tolong saya",
          "pronunciation": ["/ˈtoloŋ ˈsaja/"],
          "specific_note": "請求協助"
        },
        {
          "term_target": "Bantu saya",
          "pronunciation": ["/ˈbantu ˈsaja/"],
          "specific_note": "幫我"
        }
      ],
      "example": {
        "sentence": "Tolong bantu saya.",
        "translation": "請幫幫我。"
      },
      "usage_note": "Tolong 是請求幫忙的關鍵字。",
      "image_file": "help_me.png"
    },
    {
      "id": "greet-015",
      "term_zh": "你可以再說一次嗎？",
      "related_terms": [
        {
          "term_target": "Bisa ulangi?",
          "pronunciation": ["/ˈbisa uˈlaŋi/"],
          "specific_note": "能重複嗎"
        }
      ],
      "example": {
        "sentence": "Maaf, bisa ulangi lagi?",
        "translation": "抱歉，能再說一次嗎？"
      },
      "usage_note": "Ulangi 是「重複」。",
      "image_file": "say_again.png"
    },
    {
      "id": "greet-016",
      "term_zh": "你可以講慢一點嗎？",
      "related_terms": [
        {
          "term_target": "Bicara pelan-pelan",
          "pronunciation": ["/biˈtʃara pəˈlan pəˈlan/"],
          "specific_note": "講慢一點"
        }
      ],
      "example": {
        "sentence": "Tolong bicara pelan-pelan.",
        "translation": "拜託講慢一點。"
      },
      "usage_note": "Pelan-pelan 意思是「慢慢地」。",
      "image_file": "speak_slowly.png"
    },
    {
      "id": "greet-017",
      "term_zh": "原來如此",
      "related_terms": [
        {
          "term_target": "Oh, begitu",
          "pronunciation": ["/oh bəˈɡitu/"],
          "specific_note": "喔，是這樣"
        },
        {
          "term_target": "Saya mengerti",
          "pronunciation": ["/ˈsaja məˈŋərti/"],
          "specific_note": "我懂了"
        }
      ],
      "example": {
        "sentence": "Oh, begitu! Saya baru tahu.",
        "translation": "噢，原來如此！我剛知道。"
      },
      "usage_note": "Begitu 意思是「那樣」。",
      "image_file": "i_see.png"
    },
    {
      "id": "greet-018",
      "term_zh": "早安",
      "related_terms": [
        {
          "term_target": "Selamat pagi",
          "pronunciation": ["/səˈlamat ˈpaɡi/"],
          "specific_note": "早上 10-11點前"
        }
      ],
      "example": {
        "sentence": "Selamat pagi semuanya.",
        "translation": "大家早安。"
      },
      "usage_note": "11點到下午3點左右說 Selamat siang (午安)。",
      "image_file": "good_morning.png"
    },
    {
      "id": "greet-019",
      "term_zh": "晚上好 (晚安)",
      "related_terms": [
        {
          "term_target": "Selamat malam",
          "pronunciation": ["/səˈlamat ˈmalam/"],
          "specific_note": "天黑後/睡前"
        }
      ],
      "example": {
        "sentence": "Selamat malam, sampai besok.",
        "translation": "晚安，明天見。"
      },
      "usage_note": "Selamat malam 通用於晚上問候與道別。",
      "image_file": "good_evening.png"
    },
    {
      "id": "greet-020",
      "term_zh": "再見",
      "related_terms": [
        {
          "term_target": "Selamat tinggal",
          "pronunciation": ["/səˈlamat ˈtiŋɡal/"],
          "specific_note": "對留下來的人說"
        },
        {
          "term_target": "Selamat jalan",
          "pronunciation": ["/səˈlamat ˈdʒalan/"],
          "specific_note": "對離開的人說"
        },
        {
          "term_target": "Sampai jumpa",
          "pronunciation": ["/ˈsampai ˈdʒumpa/"],
          "specific_note": "下次見(通用)"
        }
      ],
      "example": {
        "sentence": "Sampai jumpa lagi.",
        "translation": "下次見囉。"
      },
      "usage_note": "Sampai jumpa 是最保險通用的說法。",
      "image_file": "goodbye.png"
    },
    {
      "id": "greet-021",
      "term_zh": "你好嗎",
      "related_terms": [
        {
          "term_target": "Apa kabar?",
          "pronunciation": ["/ˈapa ˈkabar/"],
          "specific_note": "問候"
        }
      ],
      "example": {
        "sentence": "Halo, apa kabar?",
        "translation": "嗨，你好嗎？"
      },
      "usage_note": "回答常用 Baik (好)。",
      "image_file": "how_are_you.png"
    },
    {
      "id": "greet-022",
      "term_zh": "真的嗎",
      "related_terms": [
        {
          "term_target": "Benarkah?",
          "pronunciation": ["/bəˈnarkah/"],
          "specific_note": "正式"
        },
        {
          "term_target": "Masa?",
          "pronunciation": ["/ˈmasa/"],
          "specific_note": "口語 (是喔?)"
        }
      ],
      "example": {
        "sentence": "Masa? Saya tidak percaya.",
        "translation": "真的假的？我不信。"
      },
      "usage_note": "Masa 是非常口語的驚訝語氣。",
      "image_file": "really.png"
    },
    {
      "id": "greet-023",
      "term_zh": "太棒了",
      "related_terms": [
        {
          "term_target": "Hebat",
          "pronunciation": ["/ˈhebat/"],
          "specific_note": "厲害"
        },
        {
          "term_target": "Keren",
          "pronunciation": ["/ˈkərɛn/"],
          "specific_note": "酷/帥/棒"
        }
      ],
      "example": {
        "sentence": "Wah, hebat sekali!",
        "translation": "哇，太厲害了！"
      },
      "usage_note": "Keren 常用來形容人或東西很酷。",
      "image_file": "awesome.png"
    },
    {
      "id": "greet-024",
      "term_zh": "很高興認識你",
      "related_terms": [
        {
          "term_target": "Salam kenal",
          "pronunciation": ["/ˈsalam ˈkənal/"],
          "specific_note": "初次見面"
        },
        {
          "term_target": "Senang bertemu denganmu",
          "pronunciation": ["/ˈsənaŋ bərˈtəmu dəˈŋanmu/"],
          "specific_note": "很高興見到你"
        }
      ],
      "example": {
        "sentence": "Halo, salam kenal.",
        "translation": "你好，很高興認識你。"
      },
      "usage_note": "Salam kenal 簡短又道地。",
      "image_file": "nice_to_meet_you.png"
    },
    {
      "id": "greet-025",
      "term_zh": "真可惜",
      "related_terms": [
        {
          "term_target": "Sayang sekali",
          "pronunciation": ["/ˈsajaŋ səˈkali/"],
          "specific_note": "真遺憾"
        }
      ],
      "example": {
        "sentence": "Yah, sayang sekali.",
        "translation": "哎呀，真可惜。"
      },
      "usage_note": "Sayang 也可以指「親愛的」，看語境。",
      "image_file": "too_bad.png"
    }
      ]
    },
    {
      "id": "pronouns",
      "name": "主詞（代名詞）",
      "items": [
        { "id": "pro-01", "term_zh": "那個/它", "related_terms": [{ "term_target": "itu", "pronunciation": ["/ˈitu/"], "specific_note": "那個/它" }, { "term_target": "dia", "pronunciation": ["/ˈdia/"], "specific_note": "它(擬人化/動物)" }], "example": {"sentence": "Apa itu?", "translation": "那是什麼？"}, "usage_note": "Itu 指遠處或上文提過的事物。", "image_file": "that.png" },
        { "id": "pro-02", "term_zh": "我", "related_terms": [{ "term_target": "saya", "pronunciation": ["/ˈsaja/"], "specific_note": "正式/通用" }, { "term_target": "aku", "pronunciation": ["/ˈaku/"], "specific_note": "非正式/親密" }], "example": {"sentence": "Saya orang Taiwan.", "translation": "我是台灣人。"}, "usage_note": "對陌生人或長輩務必用 Saya。", "image_file": "i.png" },
        { "id": "pro-03", "term_zh": "你", "related_terms": [{ "term_target": "Anda", "pronunciation": ["/ˈanda/"], "specific_note": "正式" }, { "term_target": "kamu", "pronunciation": ["/ˈkamu/"], "specific_note": "非正式" }, { "term_target": "Bapak / Ibu", "pronunciation": ["/ˈbapak/", "/ˈibu/"], "specific_note": "尊稱(先生/女士)" }], "example": {"sentence": "Siapa nama Anda?", "translation": "您叫什麼名字？"}, "usage_note": "稱呼對方 Bapak/Ibu 最禮貌。", "image_file": "you.png" },
        { "id": "pro-04", "term_zh": "他/她", "related_terms": [{ "term_target": "dia", "pronunciation": ["/ˈdia/"], "specific_note": "通用" }, { "term_target": "beliau", "pronunciation": ["/bəˈliau/"], "specific_note": "尊稱(長輩)" }], "example": {"sentence": "Dia guru saya.", "translation": "他/她是我的老師。"}, "usage_note": "印尼語代名詞不分性別。", "image_file": "he_she.png" },
        { "id": "pro-05", "term_zh": "他的/她的", "related_terms": [{ "term_target": "-nya", "pronunciation": ["/ɲa/"], "specific_note": "後綴" }, { "term_target": "dia", "pronunciation": ["/ˈdia/"], "specific_note": "名詞後" }], "example": {"sentence": "Mobilnya.", "translation": "他的/她的車。"}, "usage_note": "通常加在名詞後，如 Mobilnya (Mobil + nya)。", "image_file": "his_her.png" },
        { "id": "pro-06", "term_zh": "我們", "related_terms": [{ "term_target": "kita", "pronunciation": ["/ˈkita/"], "specific_note": "包含聽者" }, { "term_target": "kami", "pronunciation": ["/ˈkami/"], "specific_note": "排除聽者" }], "example": {"sentence": "Kita keluarga.", "translation": "我們是家人(包含你)。"}, "usage_note": "Kita(咱們)，Kami(我們)。", "image_file": "we.png" },
        { "id": "pro-07", "term_zh": "他們", "related_terms": [{ "term_target": "mereka", "pronunciation": ["/məˈreka/"], "specific_note": "" }], "example": {"sentence": "Mereka makan.", "translation": "他們在吃。"}, "usage_note": "第三人稱複數。", "image_file": "they.png" },
        { "id": "pro-08", "term_zh": "這個", "related_terms": [{ "term_target": "ini", "pronunciation": ["/ˈini/"], "specific_note": "" }], "example": {"sentence": "Ini punya saya.", "translation": "這是我的。"}, "usage_note": "近處。", "image_file": "this.png" },
        { "id": "pro-09", "term_zh": "那個（指示詞）", "related_terms": [{ "term_target": "itu", "pronunciation": ["/ˈitu/"], "specific_note": "" }], "example": {"sentence": "Saya mau itu.", "translation": "我想要那個。"}, "usage_note": "遠處。", "image_file": "that_obj.png" },
        { "id": "pro-10", "term_zh": "你的", "related_terms": [{ "term_target": "-mu", "pronunciation": ["/mu/"], "specific_note": "非正式後綴" }, { "term_target": "Anda", "pronunciation": ["/ˈanda/"], "specific_note": "正式(名詞後)" }], "example": {"sentence": "Nama Anda.", "translation": "您的名字。"}, "usage_note": "放在名詞後面表示所有格。", "image_file": "your.png" },
        { "id": "pro-11", "term_zh": "他們的", "related_terms": [{ "term_target": "mereka", "pronunciation": ["/məˈreka/"], "specific_note": "名詞後" }], "example": {"sentence": "Rumah mereka.", "translation": "他們的家。"}, "usage_note": "放在名詞後面。", "image_file": "their.png" },
        { "id": "pro-12", "term_zh": "我們的", "related_terms": [{ "term_target": "kita / kami", "pronunciation": ["/ˈkita/", "/ˈkami/"], "specific_note": "名詞後" }], "example": {"sentence": "Sekolah kami.", "translation": "我們的學校。"}, "usage_note": "放在名詞後面。", "image_file": "our.png" },
        { "id": "pro-13", "term_zh": "這些", "related_terms": [{ "term_target": "ini", "pronunciation": ["/ˈini/"], "specific_note": "" }], "example": {"sentence": "Buku-buku ini.", "translation": "這些書。"}, "usage_note": "印尼語指示詞不分單複數，複數由名詞重複表示。", "image_file": "these.png" },
        { "id": "pro-14", "term_zh": "那些", "related_terms": [{ "term_target": "itu", "pronunciation": ["/ˈitu/"], "specific_note": "" }], "example": {"sentence": "Burung-burung itu.", "translation": "那些鳥。"}, "usage_note": "同上。", "image_file": "those.png" }
      ]
    },
    {
      "id": "verbs",
      "name": "動詞",
      "items": [
        { "id": "v-01", "term_zh": "是", "related_terms": [{ "term_target": "adalah", "pronunciation": ["/aˈdalah/"], "specific_note": "正式/定義" }, { "term_target": "-", "pronunciation": [""], "specific_note": "口語常省略" }], "example": {"sentence": "Saya adalah pelajar.", "translation": "我是學生。"}, "usage_note": "口語中常省略 '是'，直接說 Saya pelajar。", "image_file": "be.png" },
        { "id": "v-02", "term_zh": "有（擁有）", "related_terms": [{ "term_target": "punya", "pronunciation": ["/ˈpuɲa/"], "specific_note": "擁有" }, { "term_target": "ada", "pronunciation": ["/ˈada/"], "specific_note": "存在/有" }], "example": {"sentence": "Saya punya uang.", "translation": "我有錢。"}, "usage_note": "Punya (擁有權)，Ada (存在/那裡有)。", "image_file": "have.png" },
        { "id": "v-03", "term_zh": "去", "related_terms": [{ "term_target": "pergi", "pronunciation": ["/pərˈɡi/"], "specific_note": "去/離開" }, { "term_target": "ke", "pronunciation": ["/kə/"], "specific_note": "去(介係詞)" }], "example": {"sentence": "Saya pergi ke pasar.", "translation": "我去市場。"}, "usage_note": "Pergi (動作)，Ke (方向)。", "image_file": "go.png" },
        { "id": "v-04", "term_zh": "得到／拿", "related_terms": [{ "term_target": "dapat", "pronunciation": ["/ˈdapat/"], "specific_note": "得到" }, { "term_target": "ambil", "pronunciation": ["/ˈambil/"], "specific_note": "拿取" }], "example": {"sentence": "Dapat hadiah.", "translation": "得到禮物。"}, "usage_note": "Ambil 是主動拿。", "image_file": "get.png" },
        { "id": "v-05", "term_zh": "做", "related_terms": [{ "term_target": "lakukan", "pronunciation": ["/laˈkukan/"], "specific_note": "執行" }, { "term_target": "buat", "pronunciation": ["/ˈbuat/"], "specific_note": "做/製造" }], "example": {"sentence": "Lakukan PR.", "translation": "做作業。"}, "usage_note": "Buat 常用於口語或製作。", "image_file": "do.png" },
        { "id": "v-06", "term_zh": "說（講）", "related_terms": [{ "term_target": "bilang", "pronunciation": ["/ˈbilaŋ/"], "specific_note": "說(口語)" }, { "term_target": "berkata", "pronunciation": ["/bərˈkata/"], "specific_note": "說道" }, { "term_target": "bicara", "pronunciation": ["/biˈtʃara/"], "specific_note": "講話/交談" }], "example": {"sentence": "Bilang halo.", "translation": "說你好。"}, "usage_note": "Bilang 最口語。", "image_file": "say.png" },
        { "id": "v-07", "term_zh": "知道", "related_terms": [{ "term_target": "tahu", "pronunciation": ["/ˈtahu/"], "specific_note": "知曉" }, { "term_target": "kenal", "pronunciation": ["/kəˈnal/"], "specific_note": "認識(人)" }], "example": {"sentence": "Saya tidak tahu.", "translation": "我不知道。"}, "usage_note": "Tahu (事)，Kenal (人)。", "image_file": "know.png" },
        { "id": "v-08", "term_zh": "想／思考", "related_terms": [{ "term_target": "pikir", "pronunciation": ["/ˈpikir/"], "specific_note": "思考" }, { "term_target": "kira", "pronunciation": ["/ˈkira/"], "specific_note": "猜想/認為" }], "example": {"sentence": "Saya pikir begitu.", "translation": "我想是這樣。"}, "usage_note": "Berpikir 是動詞形。", "image_file": "think.png" },
        { "id": "v-09", "term_zh": "看見", "related_terms": [{ "term_target": "lihat", "pronunciation": ["/ˈlihat/"], "specific_note": "看/看見" }, { "term_target": "nonton", "pronunciation": ["/ˈnonton/"], "specific_note": "觀看(電視/電影)" }], "example": {"sentence": "Saya lihat kamu.", "translation": "我看到你。"}, "usage_note": "Melihat (正式)。", "image_file": "see.png" },
        { "id": "v-10", "term_zh": "做出（製造）", "related_terms": [{ "term_target": "buat", "pronunciation": ["/ˈbuat/"], "specific_note": "" }, { "term_target": "bikin", "pronunciation": ["/ˈbikin/"], "specific_note": "口語" }], "example": {"sentence": "Buat kopi.", "translation": "泡咖啡。"}, "usage_note": "Membuat (正式)。", "image_file": "make.png" },
        { "id": "v-11", "term_zh": "來", "related_terms": [{ "term_target": "datang", "pronunciation": ["/ˈdataŋ/"], "specific_note": "" }], "example": {"sentence": "Datang ke sini.", "translation": "來這裡。"}, "usage_note": "抵達或過來。", "image_file": "come.png" },
        { "id": "v-12", "term_zh": "需要", "related_terms": [{ "term_target": "perlu", "pronunciation": ["/ˈpərlu/"], "specific_note": "需要(必要)" }, { "term_target": "butuh", "pronunciation": ["/ˈbutuh/"], "specific_note": "需要(需求)" }], "example": {"sentence": "Saya perlu air.", "translation": "我需要水。"}, "usage_note": "兩者常通用。", "image_file": "need.png" },
        { "id": "v-13", "term_zh": "使用", "related_terms": [{ "term_target": "pakai", "pronunciation": ["/ˈpakai/"], "specific_note": "用/穿戴" }, { "term_target": "gunakan", "pronunciation": ["/ɡuˈnakan/"], "specific_note": "使用(正式)" }], "example": {"sentence": "Pakai pulpen.", "translation": "用原子筆。"}, "usage_note": "Pakai 很常用，也指穿衣服。", "image_file": "use.png" },
        { "id": "v-14", "term_zh": "找到", "related_terms": [{ "term_target": "temukan", "pronunciation": ["/təˈmukan/"], "specific_note": "發現" }, { "term_target": "cari", "pronunciation": ["/ˈtʃari/"], "specific_note": "尋找" }], "example": {"sentence": "Temukan pekerjaan.", "translation": "找到工作。"}, "usage_note": "Mencari (找)，Menemukan (找到)。", "image_file": "find.png" },
        { "id": "v-15", "term_zh": "給", "related_terms": [{ "term_target": "beri", "pronunciation": ["/bəˈri/"], "specific_note": "給" }, { "term_target": "kasih", "pronunciation": ["/ˈkasih/"], "specific_note": "給(口語)" }], "example": {"sentence": "Beri saya itu.", "translation": "給我那個。"}, "usage_note": "Memberi (正式)。", "image_file": "give.png" },
        { "id": "v-16", "term_zh": "告訴", "related_terms": [{ "term_target": "beritahu", "pronunciation": ["/bəriˈtahu/"], "specific_note": "告知" }, { "term_target": "bilang", "pronunciation": ["/ˈbilaŋ/"], "specific_note": "說(口語)" }], "example": {"sentence": "Beritahu saya.", "translation": "告訴我。"}, "usage_note": "Kasih tahu (口語：給知道)。", "image_file": "tell.png" },
        { "id": "v-17", "term_zh": "工作", "related_terms": [{ "term_target": "kerja", "pronunciation": ["/ˈkərdʒa/"], "specific_note": "" }], "example": {"sentence": "Saya kerja di sini.", "translation": "我在這工作。"}, "usage_note": "Bekerja (正式)。", "image_file": "work.png" },
        { "id": "v-18", "term_zh": "喜歡", "related_terms": [{ "term_target": "suka", "pronunciation": ["/ˈsuka/"], "specific_note": "" }], "example": {"sentence": "Saya suka itu.", "translation": "我喜歡那個。"}, "usage_note": "Menyukai (正式)。", "image_file": "like.png" },
        { "id": "v-19", "term_zh": "起床", "related_terms": [{ "term_target": "bangun", "pronunciation": ["/ˈbaŋun/"], "specific_note": "" }], "example": {"sentence": "Bangun pagi.", "translation": "早起。"}, "usage_note": "醒來或起床。", "image_file": "wake_up.png" },
        { "id": "v-20", "term_zh": "說話", "related_terms": [{ "term_target": "bicara", "pronunciation": ["/biˈtʃara/"], "specific_note": "講話" }, { "term_target": "ngomong", "pronunciation": ["/ˈŋomoŋ/"], "specific_note": "說(口語)" }], "example": {"sentence": "Bicara Bahasa Indonesia.", "translation": "說印尼語。"}, "usage_note": "Berbicara (正式)。", "image_file": "speak.png" },
        { "id": "v-21", "term_zh": "聽見", "related_terms": [{ "term_target": "dengar", "pronunciation": ["/ˈdəŋar/"], "specific_note": "" }], "example": {"sentence": "Dengar saya?", "translation": "聽得到我嗎？"}, "usage_note": "Mendengar (正式)。", "image_file": "hear.png" },
        { "id": "v-22", "term_zh": "寫", "related_terms": [{ "term_target": "tulis", "pronunciation": ["/ˈtulis/"], "specific_note": "" }], "example": {"sentence": "Tulis nama.", "translation": "寫名字。"}, "usage_note": "Menulis (正式)。", "image_file": "write.png" },
        { "id": "v-23", "term_zh": "閱讀", "related_terms": [{ "term_target": "baca", "pronunciation": ["/ˈbatʃa/"], "specific_note": "" }], "example": {"sentence": "Baca buku.", "translation": "看書。"}, "usage_note": "Membaca (正式)。", "image_file": "read.png" },
        { "id": "v-24", "term_zh": "等待", "related_terms": [{ "term_target": "tunggu", "pronunciation": ["/ˈtuŋɡu/"], "specific_note": "" }], "example": {"sentence": "Tunggu sebentar.", "translation": "等一下。"}, "usage_note": "Menunggu (正式)。", "image_file": "wait.png" },
        { "id": "v-25", "term_zh": "嘗試", "related_terms": [{ "term_target": "coba", "pronunciation": ["/ˈtʃoba/"], "specific_note": "" }], "example": {"sentence": "Coba ini.", "translation": "試試這個。"}, "usage_note": "Mencoba (正式)。", "image_file": "try.png" },
        { "id": "v-26", "term_zh": "付錢", "related_terms": [{ "term_target": "bayar", "pronunciation": ["/ˈbajar/"], "specific_note": "" }], "example": {"sentence": "Bayar tagihan.", "translation": "付帳單。"}, "usage_note": "Membayar (正式)。", "image_file": "pay.png" },
        { "id": "v-27", "term_zh": "選擇", "related_terms": [{ "term_target": "pilih", "pronunciation": ["/ˈpilih/"], "specific_note": "" }], "example": {"sentence": "Pilih satu.", "translation": "選一個。"}, "usage_note": "Memilih (正式)。", "image_file": "choose.png" },
        { "id": "v-28", "term_zh": "進入", "related_terms": [{ "term_target": "masuk", "pronunciation": ["/ˈmasuk/"], "specific_note": "" }], "example": {"sentence": "Masuk kamar.", "translation": "進房間。"}, "usage_note": "進入。", "image_file": "enter.png" },
        { "id": "v-29", "term_zh": "住", "related_terms": [{ "term_target": "tinggal", "pronunciation": ["/ˈtiŋɡal/"], "specific_note": "" }], "example": {"sentence": "Saya tinggal di Taipei.", "translation": "我住台北。"}, "usage_note": "居住。", "image_file": "live.png" },
        { "id": "v-30", "term_zh": "到達", "related_terms": [{ "term_target": "sampai", "pronunciation": ["/ˈsampai/"], "specific_note": "到達" }, { "term_target": "tiba", "pronunciation": ["/ˈtiba/"], "specific_note": "抵達(正式)" }], "example": {"sentence": "Sudah sampai.", "translation": "到了。"}, "usage_note": "Sampai 也可指「直到」。", "image_file": "arrive.png" },
        { "id": "v-31", "term_zh": "走路", "related_terms": [{ "term_target": "jalan kaki", "pronunciation": ["/ˈdʒalan ˈkaki/"], "specific_note": "" }], "example": {"sentence": "Jalan kaki pulang.", "translation": "走路回家。"}, "usage_note": "Jalan (走/路) + Kaki (腳)。", "image_file": "walk.png" },
        { "id": "v-32", "term_zh": "打開", "related_terms": [{ "term_target": "buka", "pronunciation": ["/ˈbuka/"], "specific_note": "" }], "example": {"sentence": "Buka pintu.", "translation": "開門。"}, "usage_note": "Membuka (正式)。", "image_file": "open.png" },
        { "id": "v-33", "term_zh": "關閉", "related_terms": [{ "term_target": "tutup", "pronunciation": ["/ˈtutup/"], "specific_note": "" }], "example": {"sentence": "Tutup jendela.", "translation": "關窗。"}, "usage_note": "Menutup (正式)。", "image_file": "close.png" },
        { "id": "v-34", "term_zh": "幫助", "related_terms": [{ "term_target": "bantu", "pronunciation": ["/ˈbantu/"], "specific_note": "協助" }, { "term_target": "tolong", "pronunciation": ["/ˈtoloŋ/"], "specific_note": "幫忙/請求" }], "example": {"sentence": "Bantu saya.", "translation": "幫我。"}, "usage_note": "Membantu (正式)。", "image_file": "help.png" },
        { "id": "v-35", "term_zh": "帶來", "related_terms": [{ "term_target": "bawa", "pronunciation": ["/ˈbawa/"], "specific_note": "" }], "example": {"sentence": "Bawa air.", "translation": "帶水來。"}, "usage_note": "Membawa (正式)，也指「帶走」。", "image_file": "bring.png" },
        { "id": "v-36", "term_zh": "變成", "related_terms": [{ "term_target": "jadi", "pronunciation": ["/ˈdʒadi/"], "specific_note": "" }], "example": {"sentence": "Jadi guru.", "translation": "變成老師。"}, "usage_note": "Menjadi (正式)。", "image_file": "become.png" },
        { "id": "v-37", "term_zh": "開始", "related_terms": [{ "term_target": "mulai", "pronunciation": ["/ˈmulai/"], "specific_note": "" }], "example": {"sentence": "Mulai sekarang.", "translation": "現在開始。"}, "usage_note": "Memulai (正式)。", "image_file": "start.png" },
        { "id": "v-38", "term_zh": "結束", "related_terms": [{ "term_target": "selesai", "pronunciation": ["/səˈləsai/"], "specific_note": "完成" }, { "term_target": "tamat", "pronunciation": ["/ˈtamat/"], "specific_note": "結束(電影/故事)" }], "example": {"sentence": "Kerja selesai.", "translation": "工作結束。"}, "usage_note": "完成。", "image_file": "finish.png" },
        { "id": "v-39", "term_zh": "停止", "related_terms": [{ "term_target": "berhenti", "pronunciation": ["/bərˈhənti/"], "specific_note": "停下" }, { "term_target": "stop", "pronunciation": ["/stop/"], "specific_note": "口語" }], "example": {"sentence": "Berhenti di sini.", "translation": "停在這裡。"}, "usage_note": "停止。", "image_file": "stop.png" },
        { "id": "v-40", "term_zh": "記住", "related_terms": [{ "term_target": "ingat", "pronunciation": ["/ˈiŋat/"], "specific_note": "" }], "example": {"sentence": "Ingat saya?", "translation": "記得我嗎？"}, "usage_note": "Mengingat (正式)。", "image_file": "remember.png" },
        { "id": "v-41", "term_zh": "談話", "related_terms": [{ "term_target": "bicara", "pronunciation": ["/biˈtʃara/"], "specific_note": "" }, { "term_target": "ngobrol", "pronunciation": ["/ˈŋobrol/"], "specific_note": "聊天(口語)" }], "example": {"sentence": "Ngobrol dengan teman.", "translation": "跟朋友聊天。"}, "usage_note": "交談。", "image_file": "talk.png" },
        { "id": "v-42", "term_zh": "見面", "related_terms": [{ "term_target": "bertemu", "pronunciation": ["/bərˈtəmu/"], "specific_note": "見面" }, { "term_target": "ketemu", "pronunciation": ["/kəˈtəmu/"], "specific_note": "碰面(口語)" }], "example": {"sentence": "Bertemu teman.", "translation": "見朋友。"}, "usage_note": "會面。", "image_file": "meet.png" },
        { "id": "v-43", "term_zh": "乘坐", "related_terms": [{ "term_target": "naik", "pronunciation": ["/ˈnaik/"], "specific_note": "上車/搭乘" }], "example": {"sentence": "Naik bus.", "translation": "搭公車。"}, "usage_note": "搭乘交通工具用 Naik。", "image_file": "take.png" },
        { "id": "v-44", "term_zh": "放", "related_terms": [{ "term_target": "taruh", "pronunciation": ["/ˈtaruh/"], "specific_note": "放" }, { "term_target": "letakkan", "pronunciation": ["/ləˈtakkan/"], "specific_note": "放置(正式)" }], "example": {"sentence": "Taruh di sini.", "translation": "放這裡。"}, "usage_note": "放置。", "image_file": "put.png" },
        { "id": "v-45", "term_zh": "吃", "related_terms": [{ "term_target": "makan", "pronunciation": ["/ˈmakan/"], "specific_note": "" }], "example": {"sentence": "Makan nasi.", "translation": "吃飯。"}, "usage_note": "進食。", "image_file": "eat.png" },
        { "id": "v-46", "term_zh": "睡覺", "related_terms": [{ "term_target": "tidur", "pronunciation": ["/ˈtidur/"], "specific_note": "" }], "example": {"sentence": "Pergi tidur.", "translation": "去睡覺。"}, "usage_note": "睡眠。", "image_file": "sleep.png" },
        { "id": "v-47", "term_zh": "寄送", "related_terms": [{ "term_target": "kirim", "pronunciation": ["/ˈkirim/"], "specific_note": "" }], "example": {"sentence": "Kirim email.", "translation": "寄信。"}, "usage_note": "Mengirim (正式)。", "image_file": "send.png" },
        { "id": "v-48", "term_zh": "開車", "related_terms": [{ "term_target": "nyetir", "pronunciation": ["/ˈɲətir/"], "specific_note": "開車(口語)" }, { "term_target": "mengemudi", "pronunciation": ["/məŋəˈmudi/"], "specific_note": "駕駛(正式)" }], "example": {"sentence": "Bisa nyetir?", "translation": "會開車嗎？"}, "usage_note": "駕駛。", "image_file": "drive.png" },
        { "id": "v-49", "term_zh": "讀書", "related_terms": [{ "term_target": "belajar", "pronunciation": ["/bəˈladʒar/"], "specific_note": "學習" }, { "term_target": "baca", "pronunciation": ["/ˈbatʃa/"], "specific_note": "閱讀" }], "example": {"sentence": "Belajar Bahasa Indonesia.", "translation": "學印尼語。"}, "usage_note": "學習。", "image_file": "study.png" },
        { "id": "v-50", "term_zh": "回去", "related_terms": [{ "term_target": "pulang", "pronunciation": ["/ˈpulaŋ/"], "specific_note": "回家/回去" }, { "term_target": "kembali", "pronunciation": ["/kəmˈbali/"], "specific_note": "返回" }], "example": {"sentence": "Pulang ke rumah.", "translation": "回家。"}, "usage_note": "歸返。", "image_file": "go_back.png" }
      ]
    },
    {
      "id": "adjectives",
      "name": "形容詞",
      "items": [
        { "id": "adj-01", "term_zh": "好的", "related_terms": [{ "term_target": "bagus", "pronunciation": ["/ˈbaɡus/"], "specific_note": "品質好" }, { "term_target": "baik", "pronunciation": ["/ˈbaik/"], "specific_note": "人好/狀況好" }], "example": {"sentence": "Sangat bagus.", "translation": "非常好。"}, "usage_note": "問候回答用 Baik。", "image_file": "good.png" },
        { "id": "adj-02", "term_zh": "壞的", "related_terms": [{ "term_target": "buruk", "pronunciation": ["/ˈburuk/"], "specific_note": "壞/糟" }, { "term_target": "jelek", "pronunciation": ["/ˈdʒəlɛk/"], "specific_note": "醜/差" }], "example": {"sentence": "Cuaca buruk.", "translation": "天氣壞。"}, "usage_note": "負面。", "image_file": "bad.png" },
        { "id": "adj-03", "term_zh": "新的", "related_terms": [{ "term_target": "baru", "pronunciation": ["/ˈbaru/"], "specific_note": "" }], "example": {"sentence": "HP baru.", "translation": "新手機。"}, "usage_note": "全新。", "image_file": "new.png" },
        { "id": "adj-04", "term_zh": "第一天／第一的", "related_terms": [{ "term_target": "pertama", "pronunciation": ["/pərˈtama/"], "specific_note": "" }], "example": {"sentence": "Hari pertama.", "translation": "第一天。"}, "usage_note": "順序。", "image_file": "first.png" },
        { "id": "adj-05", "term_zh": "上一個", "related_terms": [{ "term_target": "lalu", "pronunciation": ["/ˈlalu/"], "specific_note": "過去的" }, { "term_target": "kemarin", "pronunciation": ["/kəˈmarin/"], "specific_note": "昨天" }], "example": {"sentence": "Minggu lalu.", "translation": "上週。"}, "usage_note": "過去的。", "image_file": "last.png" },
        { "id": "adj-06", "term_zh": "下一個", "related_terms": [{ "term_target": "depan", "pronunciation": ["/ˈdəpan/"], "specific_note": "前面/未來" }, { "term_target": "berikutnya", "pronunciation": ["/bəriˈkutɲa/"], "specific_note": "下一個" }], "example": {"sentence": "Minggu depan.", "translation": "下週。"}, "usage_note": "接下來。", "image_file": "next.png" },
        { "id": "adj-07", "term_zh": "長的", "related_terms": [{ "term_target": "panjang", "pronunciation": ["/ˈpandʒaŋ/"], "specific_note": "長度" }, { "term_target": "lama", "pronunciation": ["/ˈlama/"], "specific_note": "時間久" }], "example": {"sentence": "Rambut panjang.", "translation": "長髮。"}, "usage_note": "長度。", "image_file": "long.png" },
        { "id": "adj-08", "term_zh": "大的", "related_terms": [{ "term_target": "besar", "pronunciation": ["/bəˈsar/"], "specific_note": "" }], "example": {"sentence": "Rumah besar.", "translation": "大房子。"}, "usage_note": "體積大。", "image_file": "big.png" },
        { "id": "adj-09", "term_zh": "小的", "related_terms": [{ "term_target": "kecil", "pronunciation": ["/kəˈtʃil/"], "specific_note": "" }], "example": {"sentence": "Kucing kecil.", "translation": "小貓。"}, "usage_note": "體積小。", "image_file": "small.png" },
        { "id": "adj-10", "term_zh": "多的", "related_terms": [{ "term_target": "banyak", "pronunciation": ["/ˈbaɲak/"], "specific_note": "" }], "example": {"sentence": "Banyak orang.", "translation": "很多人。"}, "usage_note": "數量多。", "image_file": "many.png" },
        { "id": "adj-11", "term_zh": "高的", "related_terms": [{ "term_target": "tinggi", "pronunciation": ["/ˈtiŋɡi/"], "specific_note": "" }], "example": {"sentence": "Gedung tinggi.", "translation": "高樓。"}, "usage_note": "高度。", "image_file": "tall.png" },
        { "id": "adj-12", "term_zh": "年輕的", "related_terms": [{ "term_target": "muda", "pronunciation": ["/ˈmuda/"], "specific_note": "" }], "example": {"sentence": "Orang muda.", "translation": "年輕人。"}, "usage_note": "年紀小。", "image_file": "young.png" },
        { "id": "adj-13", "term_zh": "老的/舊的", "related_terms": [{ "term_target": "tua", "pronunciation": ["/ˈtua/"], "specific_note": "人老" }, { "term_target": "lama", "pronunciation": ["/ˈlama/"], "specific_note": "物品舊" }], "example": {"sentence": "Buku lama.", "translation": "舊書。"}, "usage_note": "區分人與物。", "image_file": "old.png" },
        { "id": "adj-14", "term_zh": "近的", "related_terms": [{ "term_target": "dekat", "pronunciation": ["/dəˈkat/"], "specific_note": "" }], "example": {"sentence": "Dekat sini.", "translation": "在這附近。"}, "usage_note": "距離近。", "image_file": "near.png" },
        { "id": "adj-15", "term_zh": "遠的", "related_terms": [{ "term_target": "jauh", "pronunciation": ["/ˈdʒauh/"], "specific_note": "" }], "example": {"sentence": "Jauh sekali.", "translation": "很遠。"}, "usage_note": "距離遠。", "image_file": "far.png" },
        { "id": "adj-16", "term_zh": "快的", "related_terms": [{ "term_target": "cepat", "pronunciation": ["/tʃəˈpat/"], "specific_note": "" }], "example": {"sentence": "Lari cepat.", "translation": "跑得快。"}, "usage_note": "速度快。", "image_file": "fast.png" },
        { "id": "adj-17", "term_zh": "慢的", "related_terms": [{ "term_target": "lambat", "pronunciation": ["/ˈlambat/"], "specific_note": "遲緩" }, { "term_target": "pelan", "pronunciation": ["/pəˈlan/"], "specific_note": "慢(速度)" }], "example": {"sentence": "Jalan pelan.", "translation": "走得慢。"}, "usage_note": "速度慢。", "image_file": "slow.png" },
        { "id": "adj-18", "term_zh": "熱的", "related_terms": [{ "term_target": "panas", "pronunciation": ["/ˈpanas/"], "specific_note": "" }], "example": {"sentence": "Air panas.", "translation": "熱水。"}, "usage_note": "高溫。", "image_file": "hot.png" },
        { "id": "adj-19", "term_zh": "冷的", "related_terms": [{ "term_target": "dingin", "pronunciation": ["/ˈdiŋin/"], "specific_note": "" }], "example": {"sentence": "Minuman dingin.", "translation": "冷飲。"}, "usage_note": "低溫。", "image_file": "cold.png" },
        { "id": "adj-20", "term_zh": "乾淨的", "related_terms": [{ "term_target": "bersih", "pronunciation": ["/bərˈsih/"], "specific_note": "" }], "example": {"sentence": "Kamar bersih.", "translation": "乾淨的房間。"}, "usage_note": "無髒汙。", "image_file": "clean.png" },
        { "id": "adj-21", "term_zh": "髒的", "related_terms": [{ "term_target": "kotor", "pronunciation": ["/ˈkotor/"], "specific_note": "" }], "example": {"sentence": "Tangan kotor.", "translation": "髒手。"}, "usage_note": "不乾淨。", "image_file": "dirty.png" },
        { "id": "adj-22", "term_zh": "簡單的", "related_terms": [{ "term_target": "mudah", "pronunciation": ["/ˈmudah/"], "specific_note": "容易" }, { "term_target": "gampang", "pronunciation": ["/ˈɡampaŋ/"], "specific_note": "簡單(口語)" }], "example": {"sentence": "Itu mudah.", "translation": "那很簡單。"}, "usage_note": "容易。", "image_file": "easy.png" },
        { "id": "adj-23", "term_zh": "困難的", "related_terms": [{ "term_target": "sulit", "pronunciation": ["/ˈsulit/"], "specific_note": "難" }, { "term_target": "susah", "pronunciation": ["/ˈsusah/"], "specific_note": "辛苦/難" }], "example": {"sentence": "Bahasa itu sulit.", "translation": "那語言很難。"}, "usage_note": "難。", "image_file": "difficult.png" },
        { "id": "adj-24", "term_zh": "正確的", "related_terms": [{ "term_target": "benar", "pronunciation": ["/bəˈnar/"], "specific_note": "對" }, { "term_target": "betul", "pronunciation": ["/bəˈtul/"], "specific_note": "沒錯" }], "example": {"sentence": "Jawabannya benar.", "translation": "答案正確。"}, "usage_note": "對的。", "image_file": "correct.png" },
        { "id": "adj-25", "term_zh": "錯誤的", "related_terms": [{ "term_target": "salah", "pronunciation": ["/ˈsalah/"], "specific_note": "" }], "example": {"sentence": "Itu salah.", "translation": "那是錯的。"}, "usage_note": "不對。", "image_file": "wrong.png" },
        { "id": "adj-26", "term_zh": "重要的", "related_terms": [{ "term_target": "penting", "pronunciation": ["/ˈpəntiŋ/"], "specific_note": "" }], "example": {"sentence": "Hal penting.", "translation": "重要的事。"}, "usage_note": "關鍵。", "image_file": "important.png" },
        { "id": "adj-27", "term_zh": "不同的", "related_terms": [{ "term_target": "beda", "pronunciation": ["/ˈbeda/"], "specific_note": "" }, { "term_target": "berbeda", "pronunciation": ["/bərˈbeda/"], "specific_note": "有差別" }], "example": {"sentence": "Warna beda.", "translation": "不同顏色。"}, "usage_note": "差異。", "image_file": "different.png" },
        { "id": "adj-28", "term_zh": "真的／真實的", "related_terms": [{ "term_target": "asli", "pronunciation": ["/ˈasli/"], "specific_note": "正版/原" }, { "term_target": "nyata", "pronunciation": ["/ˈɲata/"], "specific_note": "真實" }], "example": {"sentence": "Cinta nyata.", "translation": "真愛。"}, "usage_note": "真實。", "image_file": "real.png" },
        { "id": "adj-29", "term_zh": "有趣的", "related_terms": [{ "term_target": "menarik", "pronunciation": ["/məˈnarik/"], "specific_note": "有吸引力" }, { "term_target": "lucu", "pronunciation": ["/ˈlutʃu/"], "specific_note": "好笑/可愛" }], "example": {"sentence": "Buku menarik.", "translation": "有趣的書。"}, "usage_note": "有意思。", "image_file": "interesting.png" },
        { "id": "adj-30", "term_zh": "美麗的", "related_terms": [{ "term_target": "indah", "pronunciation": ["/ˈindah/"], "specific_note": "美麗(景)" }, { "term_target": "cantik", "pronunciation": ["/ˈtʃantik/"], "specific_note": "漂亮(女)" }], "example": {"sentence": "Pemandangan indah.", "translation": "美麗的風景。"}, "usage_note": "形容人或景物。", "image_file": "beautiful.png" },
        { "id": "adj-31", "term_zh": "便宜的", "related_terms": [{ "term_target": "murah", "pronunciation": ["/ˈmurah/"], "specific_note": "" }], "example": {"sentence": "Harganya murah.", "translation": "價格便宜。"}, "usage_note": "價格低。", "image_file": "cheap.png" },
        { "id": "adj-32", "term_zh": "昂貴的", "related_terms": [{ "term_target": "mahal", "pronunciation": ["/ˈmahal/"], "specific_note": "" }], "example": {"sentence": "Terlalu mahal.", "translation": "太貴了。"}, "usage_note": "價格高。", "image_file": "expensive.png" },
        { "id": "adj-33", "term_zh": "飢餓的", "related_terms": [{ "term_target": "lapar", "pronunciation": ["/ˈlapar/"], "specific_note": "" }], "example": {"sentence": "Saya lapar.", "translation": "我餓了。"}, "usage_note": "餓。", "image_file": "hungry.png" },
        { "id": "adj-34", "term_zh": "疲累的", "related_terms": [{ "term_target": "lelah", "pronunciation": ["/ˈləlah/"], "specific_note": "疲乏" }, { "term_target": "capek", "pronunciation": ["/ˈtʃapɛk/"], "specific_note": "累(口語)" }], "example": {"sentence": "Saya capek.", "translation": "我累了。"}, "usage_note": "狀態。", "image_file": "tired.png" },
        { "id": "adj-35", "term_zh": "忙碌的", "related_terms": [{ "term_target": "sibuk", "pronunciation": ["/ˈsibuk/"], "specific_note": "" }], "example": {"sentence": "Saya sibuk.", "translation": "我很忙。"}, "usage_note": "沒空。", "image_file": "busy.png" },
        { "id": "adj-36", "term_zh": "高興的", "related_terms": [{ "term_target": "senang", "pronunciation": ["/ˈsənaŋ/"], "specific_note": "高興/喜歡" }, { "term_target": "bahagia", "pronunciation": ["/baˈhaɡia/"], "specific_note": "幸福" }], "example": {"sentence": "Senang bertemu Anda.", "translation": "很高興見到你。"}, "usage_note": "心情。", "image_file": "happy.png" },
        { "id": "adj-37", "term_zh": "悲傷的", "related_terms": [{ "term_target": "sedih", "pronunciation": ["/ˈsədih/"], "specific_note": "" }], "example": {"sentence": "Cerita sedih.", "translation": "悲傷的故事。"}, "usage_note": "難過。", "image_file": "sad.png" },
        { "id": "adj-38", "term_zh": "相似的", "related_terms": [{ "term_target": "mirip", "pronunciation": ["/ˈmirip/"], "specific_note": "" }], "example": {"sentence": "Wajah mirip.", "translation": "臉很像。"}, "usage_note": "類似。", "image_file": "similar.png" },
        { "id": "adj-39", "term_zh": "有名的", "related_terms": [{ "term_target": "terkenal", "pronunciation": ["/tərˈkənal/"], "specific_note": "" }], "example": {"sentence": "Orang terkenal.", "translation": "名人。"}, "usage_note": "知名。", "image_file": "famous.png" },
        { "id": "adj-40", "term_zh": "外國的", "related_terms": [{ "term_target": "asing", "pronunciation": ["/ˈasiŋ/"], "specific_note": "外國/陌生" }, { "term_target": "luar negeri", "pronunciation": ["/ˈluar nəˈɡəri/"], "specific_note": "國外" }], "example": {"sentence": "Orang asing.", "translation": "外國人。"}, "usage_note": "國外。", "image_file": "foreign.png" },
        { "id": "adj-41", "term_zh": "聰明的", "related_terms": [{ "term_target": "pintar", "pronunciation": ["/ˈpintar/"], "specific_note": "聰明/擅長" }, { "term_target": "cerdas", "pronunciation": ["/ˈtʃərdas/"], "specific_note": "智能高" }], "example": {"sentence": "Anak pintar.", "translation": "聰明的孩子。"}, "usage_note": "腦袋好。", "image_file": "intelligent.png" },
        { "id": "adj-42", "term_zh": "危險的", "related_terms": [{ "term_target": "berbahaya", "pronunciation": ["/bərbaˈhaja/"], "specific_note": "" }], "example": {"sentence": "Itu berbahaya.", "translation": "那很危險。"}, "usage_note": "警示。", "image_file": "dangerous.png" },
        { "id": "adj-43", "term_zh": "仁慈的", "related_terms": [{ "term_target": "baik hati", "pronunciation": ["/ˈbaik ˈhati/"], "specific_note": "好心" }], "example": {"sentence": "Orang baik hati.", "translation": "好心人。"}, "usage_note": "溫柔。", "image_file": "kind.png" },
        { "id": "adj-44", "term_zh": "所有的／每一個", "related_terms": [{ "term_target": "semua", "pronunciation": ["/səˈmua/"], "specific_note": "全部" }, { "term_target": "setiap", "pronunciation": ["/səˈtiap/"], "specific_note": "每一個" }], "example": {"sentence": "Setiap hari.", "translation": "每一天。"}, "usage_note": "全部。", "image_file": "every.png" },
        { "id": "adj-45", "term_zh": "喜愛的", "related_terms": [{ "term_target": "favorit", "pronunciation": ["/faˈvorit/"], "specific_note": "" }, { "term_target": "kesukaan", "pronunciation": ["/kəsuˈkaan/"], "specific_note": "愛好" }], "example": {"sentence": "Makanan favorit.", "translation": "最愛的食物。"}, "usage_note": "中意。", "image_file": "favorite.png" },
        { "id": "adj-46", "term_zh": "美味的", "related_terms": [{ "term_target": "enak", "pronunciation": ["/ˈɛnak/"], "specific_note": "好吃/舒服" }, { "term_target": "lezat", "pronunciation": ["/ləˈzat/"], "specific_note": "美味" }], "example": {"sentence": "Makanan enak.", "translation": "好吃的食物。"}, "usage_note": "好吃。", "image_file": "delicious.png" }
      ]
    },
    {
      "id": "nouns",
      "name": "名詞",
      "items": [
        { "id": "n-01", "term_zh": "時間", "related_terms": [{ "term_target": "waktu", "pronunciation": ["/ˈwaktu/"], "specific_note": "時間" }, { "term_target": "jam", "pronunciation": ["/dʒam/"], "specific_note": "小時/點鐘" }], "example": {"sentence": "Tidak ada waktu.", "translation": "沒時間。"}, "usage_note": "時刻/時間。", "image_file": "time.png" },
        { "id": "n-02", "term_zh": "人們", "related_terms": [{ "term_target": "orang", "pronunciation": ["/ˈoraŋ/"], "specific_note": "人" }, { "term_target": "orang-orang", "pronunciation": ["/ˈoraŋ ˈoraŋ/"], "specific_note": "人們(複數)" }], "example": {"sentence": "Banyak orang.", "translation": "很多人。"}, "usage_note": "泛指人。", "image_file": "people.png" },
        { "id": "n-03", "term_zh": "金錢", "related_terms": [{ "term_target": "uang", "pronunciation": ["/uaŋ/"], "specific_note": "" }], "example": {"sentence": "Tidak ada uang.", "translation": "沒錢。"}, "usage_note": "錢。", "image_file": "money.png" },
        { "id": "n-04", "term_zh": "孩子", "related_terms": [{ "term_target": "anak", "pronunciation": ["/ˈanak/"], "specific_note": "孩子/子女" }, { "term_target": "anak kecil", "pronunciation": ["/ˈanak kəˈtʃil/"], "specific_note": "小孩" }], "example": {"sentence": "Anak kecil.", "translation": "小孩。"}, "usage_note": "兒童。", "image_file": "child.png" },
        { "id": "n-05", "term_zh": "水", "related_terms": [{ "term_target": "air", "pronunciation": ["/air/"], "specific_note": "" }], "example": {"sentence": "Minum air.", "translation": "喝水。"}, "usage_note": "液體。", "image_file": "water.png" },
        { "id": "n-06", "term_zh": "食物", "related_terms": [{ "term_target": "makanan", "pronunciation": ["/maˈkanan/"], "specific_note": "" }], "example": {"sentence": "Makanan enak.", "translation": "好吃的食物。"}, "usage_note": "吃的東西。", "image_file": "food.png" },
        { "id": "n-07", "term_zh": "朋友", "related_terms": [{ "term_target": "teman", "pronunciation": ["/ˈtəman/"], "specific_note": "" }], "example": {"sentence": "Teman saya.", "translation": "我朋友。"}, "usage_note": "友人。", "image_file": "friend.png" },
        { "id": "n-08", "term_zh": "家庭", "related_terms": [{ "term_target": "keluarga", "pronunciation": ["/kəluˈarɡa/"], "specific_note": "" }], "example": {"sentence": "Keluarga besar.", "translation": "大家庭。"}, "usage_note": "家人。", "image_file": "family.png" },
        { "id": "n-09", "term_zh": "學生", "related_terms": [{ "term_target": "pelajar", "pronunciation": ["/pəˈladʒar/"], "specific_note": "學生" }, { "term_target": "mahasiswa", "pronunciation": ["/mahaˈsiswa/"], "specific_note": "大學生" }], "example": {"sentence": "Saya pelajar.", "translation": "我是學生。"}, "usage_note": "在學者。", "image_file": "student.png" },
        { "id": "n-10", "term_zh": "文化", "related_terms": [{ "term_target": "budaya", "pronunciation": ["/buˈdaja/"], "specific_note": "" }], "example": {"sentence": "Budaya Indonesia.", "translation": "印尼文化。"}, "usage_note": "文化。", "image_file": "culture.png" },
        { "id": "n-11", "term_zh": "問題", "related_terms": [{ "term_target": "masalah", "pronunciation": ["/maˈsalah/"], "specific_note": "麻煩/問題" }, { "term_target": "pertanyaan", "pronunciation": ["/pərtaˈɲaan/"], "specific_note": "提問" }], "example": {"sentence": "Tidak ada masalah.", "translation": "沒問題。"}, "usage_note": "難題。", "image_file": "problem.png" },
        { "id": "n-12", "term_zh": "公司", "related_terms": [{ "term_target": "perusahaan", "pronunciation": ["/pəruˈsahaan/"], "specific_note": "企業" }, { "term_target": "kantor", "pronunciation": ["/ˈkantor/"], "specific_note": "辦公室" }], "example": {"sentence": "Pergi ke kantor.", "translation": "去辦公室(公司)。"}, "usage_note": "上班地點。", "image_file": "company.png" },
        { "id": "n-13", "term_zh": "男性", "related_terms": [{ "term_target": "laki-laki", "pronunciation": ["/ˈlaki ˈlaki/"], "specific_note": "男性/男人" }, { "term_target": "pria", "pronunciation": ["/pria/"], "specific_note": "男士" }], "example": {"sentence": "Dia laki-laki.", "translation": "他是男生。"}, "usage_note": "性別。", "image_file": "man.png" },
        { "id": "n-14", "term_zh": "女性", "related_terms": [{ "term_target": "perempuan", "pronunciation": ["/pərəmˈpuan/"], "specific_note": "女性/女人" }, { "term_target": "wanita", "pronunciation": ["/waˈnita/"], "specific_note": "女士" }], "example": {"sentence": "Dia perempuan.", "translation": "她是女生。"}, "usage_note": "性別。", "image_file": "woman.png" },
        { "id": "n-15", "term_zh": "學校", "related_terms": [{ "term_target": "sekolah", "pronunciation": ["/səˈkolah/"], "specific_note": "" }], "example": {"sentence": "Pergi ke sekolah.", "translation": "去學校。"}, "usage_note": "教育機構。", "image_file": "school.png" },
        { "id": "n-16", "term_zh": "老師", "related_terms": [{ "term_target": "guru", "pronunciation": ["/ˈɡuru/"], "specific_note": "中小學老師" }, { "term_target": "dosen", "pronunciation": ["/ˈdosɛn/"], "specific_note": "大學講師" }], "example": {"sentence": "Guru Bahasa.", "translation": "語言老師。"}, "usage_note": "師長。", "image_file": "teacher.png" },
        { "id": "n-17", "term_zh": "影片／電影", "related_terms": [{ "term_target": "film", "pronunciation": ["/fɪlm/"], "specific_note": "電影" }, { "term_target": "video", "pronunciation": ["/fiˈdeo/"], "specific_note": "影片" }], "example": {"sentence": "Nonton film.", "translation": "看電影。"}, "usage_note": "影片。", "image_file": "movie.png" },
        { "id": "n-18", "term_zh": "手機", "related_terms": [{ "term_target": "HP", "pronunciation": ["/ha pe/"], "specific_note": "Handphone" }, { "term_target": "ponsel", "pronunciation": ["/ˈponsɛl/"], "specific_note": "電話" }], "example": {"sentence": "HP saya.", "translation": "我手機。"}, "usage_note": "口語常說 HP。", "image_file": "phone.png" },
        { "id": "n-19", "term_zh": "電腦", "related_terms": [{ "term_target": "komputer", "pronunciation": ["/komˈputər/"], "specific_note": "" }], "example": {"sentence": "Pakai komputer.", "translation": "用電腦。"}, "usage_note": "PC。", "image_file": "computer.png" },
        { "id": "n-20", "term_zh": "車", "related_terms": [{ "term_target": "mobil", "pronunciation": ["/ˈmobil/"], "specific_note": "汽車" }, { "term_target": "kendaraan", "pronunciation": ["/kəndaˈraan/"], "specific_note": "車輛(泛指)" }], "example": {"sentence": "Naik mobil.", "translation": "搭汽車。"}, "usage_note": "汽車。", "image_file": "car.png" },
        { "id": "n-21", "term_zh": "市場", "related_terms": [{ "term_target": "pasar", "pronunciation": ["/ˈpasar/"], "specific_note": "" }], "example": {"sentence": "Pergi ke pasar.", "translation": "去市場。"}, "usage_note": "市集。", "image_file": "market.png" },
        { "id": "n-22", "term_zh": "衣服", "related_terms": [{ "term_target": "baju", "pronunciation": ["/ˈbadʒu/"], "specific_note": "衣服(上衣)" }, { "term_target": "pakaian", "pronunciation": ["/paˈkaian/"], "specific_note": "衣物/服裝" }], "example": {"sentence": "Beli baju.", "translation": "買衣服。"}, "usage_note": "衣物。", "image_file": "clothes.png" },
        { "id": "n-23", "term_zh": "商店", "related_terms": [{ "term_target": "toko", "pronunciation": ["/ˈtoko/"], "specific_note": "" }], "example": {"sentence": "Toko baju.", "translation": "服飾店。"}, "usage_note": "店家。", "image_file": "shop.png" },
        { "id": "n-24", "term_zh": "巴士", "related_terms": [{ "term_target": "bus", "pronunciation": ["/bis/"], "specific_note": "發音近bis" }], "example": {"sentence": "Naik bus.", "translation": "搭公車。"}, "usage_note": "公車。", "image_file": "bus.png" },
        { "id": "n-25", "term_zh": "街道", "related_terms": [{ "term_target": "jalan", "pronunciation": ["/ˈdʒalan/"], "specific_note": "" }], "example": {"sentence": "Di jalan.", "translation": "在路上。"}, "usage_note": "道路。", "image_file": "street.png" },
        { "id": "n-26", "term_zh": "房子／家", "related_terms": [{ "term_target": "rumah", "pronunciation": ["/ˈrumah/"], "specific_note": "" }], "example": {"sentence": "Rumah saya.", "translation": "我家。"}, "usage_note": "住宅。", "image_file": "house.png" },
        { "id": "n-27", "term_zh": "母親", "related_terms": [{ "term_target": "ibu", "pronunciation": ["/ˈibu/"], "specific_note": "母親/女士" }, { "term_target": "mama", "pronunciation": ["/ˈmama/"], "specific_note": "媽媽" }], "example": {"sentence": "Ibu saya.", "translation": "我母親。"}, "usage_note": "媽媽。", "image_file": "mother.png" },
        { "id": "n-28", "term_zh": "父親", "related_terms": [{ "term_target": "bapak", "pronunciation": ["/ˈbapak/"], "specific_note": "父親/先生" }, { "term_target": "ayah", "pronunciation": ["/ˈajah/"], "specific_note": "父親" }], "example": {"sentence": "Bapak saya.", "translation": "我父親。"}, "usage_note": "爸爸。", "image_file": "father.png" },
        { "id": "n-29", "term_zh": "兄弟", "related_terms": [{ "term_target": "saudara laki-laki", "pronunciation": ["/sauˈdara ˈlaki ˈlaki/"], "specific_note": "兄弟" }, { "term_target": "kakak", "pronunciation": ["/ˈkakak/"], "specific_note": "哥哥/姊姊" }, { "term_target": "adik", "pronunciation": ["/ˈadik/"], "specific_note": "弟弟/妹妹" }], "example": {"sentence": "Kakak laki-laki.", "translation": "哥哥。"}, "usage_note": "Kakak/Adik 不分性別，需加 Laki-laki 區分。", "image_file": "brother.png" },
        { "id": "n-30", "term_zh": "姐妹", "related_terms": [{ "term_target": "saudara perempuan", "pronunciation": ["/sauˈdara pərəmˈpuan/"], "specific_note": "姊妹" }, { "term_target": "kakak perempuan", "pronunciation": ["/ˈkakak pərəmˈpuan/"], "specific_note": "姊姊" }], "example": {"sentence": "Adik perempuan.", "translation": "妹妹。"}, "usage_note": "姐妹。", "image_file": "sister.png" },
        { "id": "n-31", "term_zh": "中文", "related_terms": [{ "term_target": "Bahasa Mandarin", "pronunciation": ["/baˈhasa manˈdarin/"], "specific_note": "" }], "example": {"sentence": "Bicara Bahasa Mandarin.", "translation": "說中文。"}, "usage_note": "語言。", "image_file": "chinese.png" },
        { "id": "n-32", "term_zh": "早晨", "related_terms": [{ "term_target": "pagi", "pronunciation": ["/ˈpaɡi/"], "specific_note": "" }], "example": {"sentence": "Di pagi hari.", "translation": "在早晨。"}, "usage_note": "早上。", "image_file": "morning.png" },
        { "id": "n-33", "term_zh": "夜晚", "related_terms": [{ "term_target": "malam", "pronunciation": ["/ˈmalam/"], "specific_note": "" }], "example": {"sentence": "Selamat malam.", "translation": "晚安。"}, "usage_note": "夜晚。", "image_file": "night.png" },
        { "id": "n-34", "term_zh": "票／車票", "related_terms": [{ "term_target": "tiket", "pronunciation": ["/ˈtikɛt/"], "specific_note": "票/券" }, { "term_target": "karcis", "pronunciation": ["/ˈkartʃis/"], "specific_note": "車票/門票" }], "example": {"sentence": "Tiket pesawat.", "translation": "機票。"}, "usage_note": "票。", "image_file": "ticket.png" },
        { "id": "n-35", "term_zh": "包包", "related_terms": [{ "term_target": "tas", "pronunciation": ["/tas/"], "specific_note": "" }], "example": {"sentence": "Tas besar.", "translation": "大包包。"}, "usage_note": "提包。", "image_file": "bag.png" },
        { "id": "n-36", "term_zh": "杯子", "related_terms": [{ "term_target": "gelas", "pronunciation": ["/ɡəˈlas/"], "specific_note": "玻璃杯" }, { "term_target": "cangkir", "pronunciation": ["/ˈtʃaŋkir/"], "specific_note": "有耳杯" }], "example": {"sentence": "Gelas air.", "translation": "一杯水。"}, "usage_note": "杯具。", "image_file": "cup.png" },
        { "id": "n-37", "term_zh": "醫生", "related_terms": [{ "term_target": "dokter", "pronunciation": ["/ˈdɔktər/"], "specific_note": "" }], "example": {"sentence": "Ke dokter.", "translation": "看醫生。"}, "usage_note": "醫師。", "image_file": "doctor.png" },
        { "id": "n-38", "term_zh": "警察", "related_terms": [{ "term_target": "polisi", "pronunciation": ["/poˈlisi/"], "specific_note": "" }], "example": {"sentence": "Panggil polisi.", "translation": "叫警察。"}, "usage_note": "警察。", "image_file": "police.png" },
        { "id": "n-39", "term_zh": "醫院", "related_terms": [{ "term_target": "rumah sakit", "pronunciation": ["/ˈrumah ˈsakit/"], "specific_note": "" }], "example": {"sentence": "Pergi ke rumah sakit.", "translation": "去醫院。"}, "usage_note": "Rumah (屋) + Sakit (病)。", "image_file": "hospital.png" },
        { "id": "n-40", "term_zh": "座位", "related_terms": [{ "term_target": "tempat duduk", "pronunciation": ["/ˈtəmpat ˈduduk/"], "specific_note": "" }], "example": {"sentence": "Ada tempat duduk?", "translation": "有位子嗎？"}, "usage_note": "Tempat (地方) + Duduk (坐)。", "image_file": "seat.png" },
        { "id": "n-41", "term_zh": "門", "related_terms": [{ "term_target": "pintu", "pronunciation": ["/ˈpintu/"], "specific_note": "" }], "example": {"sentence": "Buka pintu.", "translation": "開門。"}, "usage_note": "門戶。", "image_file": "door.png" },
        { "id": "n-42", "term_zh": "房間", "related_terms": [{ "term_target": "kamar", "pronunciation": ["/ˈkamar/"], "specific_note": "" }], "example": {"sentence": "Kamar saya.", "translation": "我房間。"}, "usage_note": "室內。", "image_file": "room.png" },
        { "id": "n-43", "term_zh": "車站", "related_terms": [{ "term_target": "stasiun", "pronunciation": ["/staˈsiun/"], "specific_note": "火車站" }, { "term_target": "terminal", "pronunciation": ["/tərˈminal/"], "specific_note": "公車總站" }], "example": {"sentence": "Stasiun kereta.", "translation": "火車站。"}, "usage_note": "站點。", "image_file": "station.png" },
        { "id": "n-44", "term_zh": "地鐵", "related_terms": [{ "term_target": "MRT", "pronunciation": ["/ɛm ar ti/"], "specific_note": "" }], "example": {"sentence": "Naik MRT.", "translation": "搭捷運。"}, "usage_note": "地下鐵。", "image_file": "subway.png" },
        { "id": "n-45", "term_zh": "火車", "related_terms": [{ "term_target": "kereta api", "pronunciation": ["/kəˈreta ˈapi/"], "specific_note": "" }], "example": {"sentence": "Naik kereta api.", "translation": "搭火車。"}, "usage_note": "列車。", "image_file": "train.png" },
        { "id": "n-46", "term_zh": "機場", "related_terms": [{ "term_target": "bandara", "pronunciation": ["/banˈdara/"], "specific_note": "" }], "example": {"sentence": "Ke bandara.", "translation": "去機場。"}, "usage_note": "搭飛機處。", "image_file": "airport.png" },
        { "id": "n-47", "term_zh": "行李", "related_terms": [{ "term_target": "bagasi", "pronunciation": ["/baˈɡasi/"], "specific_note": "托運" }, { "term_target": "barang", "pronunciation": ["/ˈbaraŋ/"], "specific_note": "物品/行李" }], "example": {"sentence": "Banyak barang.", "translation": "很多行李。"}, "usage_note": "包裹。", "image_file": "luggage.png" },
        { "id": "n-48", "term_zh": "地圖", "related_terms": [{ "term_target": "peta", "pronunciation": ["/ˈpəta/"], "specific_note": "" }], "example": {"sentence": "Lihat peta.", "translation": "看地圖。"}, "usage_note": "指引。", "image_file": "map.png" },
        { "id": "n-49", "term_zh": "行政櫃檯／票口", "related_terms": [{ "term_target": "loket", "pronunciation": ["/ˈlokɛt/"], "specific_note": "售票口" }, { "term_target": "resepsionis", "pronunciation": ["/rəsɛpsioˈnis/"], "specific_note": "接待櫃檯" }], "example": {"sentence": "Beli di loket.", "translation": "在票口買。"}, "usage_note": "服務台。", "image_file": "counter.png" },
        { "id": "n-50", "term_zh": "大廳", "related_terms": [{ "term_target": "lobi", "pronunciation": ["/ˈlobi/"], "specific_note": "" }], "example": {"sentence": "Tunggu di lobi.", "translation": "在大廳等。"}, "usage_note": "接待處。", "image_file": "lobby.png" },
        { "id": "n-51", "term_zh": "預定", "related_terms": [{ "term_target": "reservasi", "pronunciation": ["/rəsərˈvasi/"], "specific_note": "" }, { "term_target": "booking", "pronunciation": ["/ˈbukiŋ/"], "specific_note": "借詞" }], "example": {"sentence": "Sudah reservasi.", "translation": "已經預約了。"}, "usage_note": "預約。", "image_file": "reservation.png" },
        { "id": "n-52", "term_zh": "入住", "related_terms": [{ "term_target": "check-in", "pronunciation": ["/tʃɛk in/"], "specific_note": "借詞" }, { "term_target": "masuk", "pronunciation": ["/ˈmasuk/"], "specific_note": "進入" }], "example": {"sentence": "Mau check-in.", "translation": "要辦理入住。"}, "usage_note": "Check-in。", "image_file": "check_in.png" },
        { "id": "n-53", "term_zh": "退房", "related_terms": [{ "term_target": "check-out", "pronunciation": ["/tʃɛk aut/"], "specific_note": "借詞" }, { "term_target": "keluar", "pronunciation": ["/kəˈluar/"], "specific_note": "出去" }], "example": {"sentence": "Jam check-out.", "translation": "退房時間。"}, "usage_note": "Check-out。", "image_file": "check_out.png" },
        { "id": "n-54", "term_zh": "飲料", "related_terms": [{ "term_target": "minuman", "pronunciation": ["/miˈnuman/"], "specific_note": "" }], "example": {"sentence": "Pesan minuman.", "translation": "點飲料。"}, "usage_note": "飲品。", "image_file": "drink.png" },
        { "id": "n-55", "term_zh": "菜單", "related_terms": [{ "term_target": "menu", "pronunciation": ["/ˈmɛnu/"], "specific_note": "" }], "example": {"sentence": "Minta menu.", "translation": "請給菜單。"}, "usage_note": "Menu。", "image_file": "menu.png" },
        { "id": "n-56", "term_zh": "午餐", "related_terms": [{ "term_target": "makan siang", "pronunciation": ["/ˈmakan ˈsiaŋ/"], "specific_note": "" }], "example": {"sentence": "Makan siang.", "translation": "吃午餐。"}, "usage_note": "中餐。", "image_file": "lunch.png" },
        { "id": "n-57", "term_zh": "晚餐", "related_terms": [{ "term_target": "makan malam", "pronunciation": ["/ˈmakan ˈmalam/"], "specific_note": "" }], "example": {"sentence": "Makan malam.", "translation": "吃晚餐。"}, "usage_note": "晚餐。", "image_file": "dinner.png" },
        { "id": "n-58", "term_zh": "帳單", "related_terms": [{ "term_target": "bon", "pronunciation": ["/bon/"], "specific_note": "單據" }, { "term_target": "tagihan", "pronunciation": ["/taˈɡihan/"], "specific_note": "帳單" }], "example": {"sentence": "Minta bon.", "translation": "麻煩結帳。"}, "usage_note": "買單。", "image_file": "bill.png" },
        { "id": "n-59", "term_zh": "價錢", "related_terms": [{ "term_target": "harga", "pronunciation": ["/ˈharɡa/"], "specific_note": "" }], "example": {"sentence": "Harga murah.", "translation": "價格便宜。"}, "usage_note": "價格。", "image_file": "price.png" },
        { "id": "n-60", "term_zh": "收據", "related_terms": [{ "term_target": "resi", "pronunciation": ["/ˈrɛsi/"], "specific_note": "" }, { "term_target": "kuitansi", "pronunciation": ["/kuiˈtansi/"], "specific_note": "" }], "example": {"sentence": "Minta resi.", "translation": "請給收據。"}, "usage_note": "統一發票。", "image_file": "receipt.png" },
        { "id": "n-61", "term_zh": "尺寸", "related_terms": [{ "term_target": "ukuran", "pronunciation": ["/uˈkuran/"], "specific_note": "" }, { "term_target": "size", "pronunciation": ["/sais/"], "specific_note": "借詞" }], "example": {"sentence": "Ukuran besar.", "translation": "大尺寸。"}, "usage_note": "大小。", "image_file": "size.png" },
        { "id": "n-62", "term_zh": "入口", "related_terms": [{ "term_target": "pintu masuk", "pronunciation": ["/ˈpintu ˈmasuk/"], "specific_note": "" }], "example": {"sentence": "Di mana pintu masuk?", "translation": "入口在哪？"}, "usage_note": "進去的地方。", "image_file": "entrance.png" },
        { "id": "n-63", "term_zh": "出口", "related_terms": [{ "term_target": "pintu keluar", "pronunciation": ["/ˈpintu kəˈluar/"], "specific_note": "" }], "example": {"sentence": "Itu pintu keluar.", "translation": "那是出口。"}, "usage_note": "出去的地方。", "image_file": "exit.png" },
        { "id": "n-64", "term_zh": "台灣", "related_terms": [{ "term_target": "Taiwan", "pronunciation": ["/taiˈwan/"], "specific_note": "" }], "example": {"sentence": "Dari Taiwan.", "translation": "來自台灣。"}, "usage_note": "地名。", "image_file": "taiwan.png" },
        { "id": "n-65", "term_zh": "一切事物", "related_terms": [{ "term_target": "semuanya", "pronunciation": ["/səmuˈaɲa/"], "specific_note": "" }], "example": {"sentence": "Saya suka semuanya.", "translation": "我全部都喜歡。"}, "usage_note": "所有。", "image_file": "everything.png" },
        { "id": "n-66", "term_zh": "錢包", "related_terms": [{ "term_target": "dompet", "pronunciation": ["/ˈdompɛt/"], "specific_note": "" }], "example": {"sentence": "Dompet hilang.", "translation": "掉了錢包。"}, "usage_note": "皮夾。", "image_file": "wallet.png" },
        { "id": "n-67", "term_zh": "身分證", "related_terms": [{ "term_target": "KTP", "pronunciation": ["/ka te pe/"], "specific_note": "身分證" }, { "term_target": "kartu identitas", "pronunciation": ["/ˈkartu idɛnˈtitas/"], "specific_note": "證件" }], "example": {"sentence": "Lihat KTP.", "translation": "看出示證件。"}, "usage_note": "ID。", "image_file": "id.png" },
        { "id": "n-68", "term_zh": "餐廳", "related_terms": [{ "term_target": "restoran", "pronunciation": ["/rɛstoˈran/"], "specific_note": "正式" }, { "term_target": "rumah makan", "pronunciation": ["/ˈrumah ˈmakan/"], "specific_note": "餐館" }], "example": {"sentence": "Restoran enak.", "translation": "好吃的餐廳。"}, "usage_note": "食堂。", "image_file": "restaurant.png" },
        { "id": "n-69", "term_zh": "飯店", "related_terms": [{ "term_target": "hotel", "pronunciation": ["/hoˈtɛl/"], "specific_note": "" }], "example": {"sentence": "Pesan hotel.", "translation": "訂飯店。"}, "usage_note": "住宿。", "image_file": "hotel.png" },
        { "id": "n-70", "term_zh": "場所", "related_terms": [{ "term_target": "tempat", "pronunciation": ["/ˈtəmpat/"], "specific_note": "" }], "example": {"sentence": "Tempat bagus.", "translation": "好地方。"}, "usage_note": "地點。", "image_file": "place.png" },
        { "id": "n-71", "term_zh": "用品店員", "related_terms": [{ "term_target": "pramuniaga", "pronunciation": ["/pramuˈniaɡa/"], "specific_note": "店員" }, { "term_target": "pelayan", "pronunciation": ["/pəˈlajan/"], "specific_note": "服務員" }], "example": {"sentence": "Tanya pelayan.", "translation": "問店員。"}, "usage_note": "工作人員。", "image_file": "clerk.png" },
        { "id": "n-72", "term_zh": "超市", "related_terms": [{ "term_target": "supermarket", "pronunciation": ["/supərˈmarkət/"], "specific_note": "" }], "example": {"sentence": "Ke supermarket.", "translation": "去超市。"}, "usage_note": "量販店。", "image_file": "supermarket.png" },
        { "id": "n-73", "term_zh": "月台", "related_terms": [{ "term_target": "peron", "pronunciation": ["/ˈpɛron/"], "specific_note": "" }], "example": {"sentence": "Peron satu.", "translation": "第一月台。"}, "usage_note": "車站月台。", "image_file": "platform.png" }
      ]
    },
    {
      "id": "adverbs",
      "name": "副詞",
      "items": [
        { "id": "adv-01", "term_zh": "現在", "related_terms": [{ "term_target": "sekarang", "pronunciation": ["/səˈkaraŋ/"], "specific_note": "" }], "example": {"sentence": "Pergi sekarang.", "translation": "現在去。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "adv-02", "term_zh": "非常", "related_terms": [{ "term_target": "sangat", "pronunciation": ["/ˈsaŋat/"], "specific_note": "很" }, { "term_target": "sekali", "pronunciation": ["/səˈkali/"], "specific_note": "非常(後置)" }], "example": {"sentence": "Sangat bagus.", "translation": "非常好。"}, "usage_note": "強調。", "image_file": "very.png" },
        { "id": "adv-03", "term_zh": "真的", "related_terms": [{ "term_target": "sungguh", "pronunciation": ["/ˈsuŋɡuh/"], "specific_note": "" }, { "term_target": "benarkah", "pronunciation": ["/bəˈnarkah/"], "specific_note": "真的嗎?" }], "example": {"sentence": "Benarkah?", "translation": "真的嗎？"}, "usage_note": "確認或強調。", "image_file": "really.png" },
        { "id": "adv-04", "term_zh": "好好地／很好地", "related_terms": [{ "term_target": "dengan baik", "pronunciation": ["/ˈdəŋan ˈbaik/"], "specific_note": "" }], "example": {"sentence": "Tidur dengan baik.", "translation": "睡得好。"}, "usage_note": "好地。", "image_file": "well.png" },
        { "id": "adv-05", "term_zh": "經常", "related_terms": [{ "term_target": "sering", "pronunciation": ["/ˈsəriŋ/"], "specific_note": "" }], "example": {"sentence": "Sering datang.", "translation": "常來。"}, "usage_note": "頻率。", "image_file": "often.png" },
        { "id": "adv-06", "term_zh": "通常", "related_terms": [{ "term_target": "biasanya", "pronunciation": ["/biˈasaɲa/"], "specific_note": "" }], "example": {"sentence": "Biasanya jam 6.", "translation": "通常六點。"}, "usage_note": "習慣。", "image_file": "usually.png" },
        { "id": "adv-07", "term_zh": "已經", "related_terms": [{ "term_target": "sudah", "pronunciation": ["/ˈsudah/"], "specific_note": "" }], "example": {"sentence": "Sudah makan.", "translation": "已經吃過了。"}, "usage_note": "完成。", "image_file": "already.png" },
        { "id": "adv-08", "term_zh": "只有", "related_terms": [{ "term_target": "hanya", "pronunciation": ["/ˈhaɲa/"], "specific_note": "" }, { "term_target": "cuma", "pronunciation": ["/ˈtʃuma/"], "specific_note": "口語" }], "example": {"sentence": "Hanya satu.", "translation": "只有一個。"}, "usage_note": "唯一。", "image_file": "only.png" },
        { "id": "adv-09", "term_zh": "再次", "related_terms": [{ "term_target": "lagi", "pronunciation": ["/ˈlaɡi/"], "specific_note": "" }], "example": {"sentence": "Coba lagi.", "translation": "再試一次。"}, "usage_note": "重複。", "image_file": "again.png" },
        { "id": "adv-10", "term_zh": "大約", "related_terms": [{ "term_target": "kira-kira", "pronunciation": ["/ˈkira ˈkira/"], "specific_note": "" }, { "term_target": "sekitar", "pronunciation": ["/səˈkitar/"], "specific_note": "" }], "example": {"sentence": "Kira-kira 10 menit.", "translation": "大約10分鐘。"}, "usage_note": "概數。", "image_file": "about.png" },
        { "id": "adv-11", "term_zh": "一點點", "related_terms": [{ "term_target": "sedikit", "pronunciation": ["/səˈdikit/"], "specific_note": "" }], "example": {"sentence": "Sedikit pedas.", "translation": "一點點辣。"}, "usage_note": "少量。", "image_file": "a_little.png" },
        { "id": "adv-12", "term_zh": "也是", "related_terms": [{ "term_target": "juga", "pronunciation": ["/ˈdʒuɡa/"], "specific_note": "" }], "example": {"sentence": "Saya juga.", "translation": "我也是。"}, "usage_note": "也。", "image_file": "also.png" },
        { "id": "adv-13", "term_zh": "或許", "related_terms": [{ "term_target": "mungkin", "pronunciation": ["/ˈmuŋkin/"], "specific_note": "" }], "example": {"sentence": "Mungkin nanti.", "translation": "也許等下。"}, "usage_note": "不確定。", "image_file": "maybe.png" },
        { "id": "adv-14", "term_zh": "之後", "related_terms": [{ "term_target": "nanti", "pronunciation": ["/ˈnanti/"], "specific_note": "稍後" }, { "term_target": "kemudian", "pronunciation": ["/kəˈmudian/"], "specific_note": "然後" }], "example": {"sentence": "Sampai jumpa nanti.", "translation": "待會見。"}, "usage_note": "稍後。", "image_file": "later.png" },
        { "id": "adv-15", "term_zh": "很快", "related_terms": [{ "term_target": "segera", "pronunciation": ["/səˈɡəra/"], "specific_note": "盡快" }, { "term_target": "sebentar lagi", "pronunciation": ["/səˈbəntar ˈlaɡi/"], "specific_note": "馬上/很快" }], "example": {"sentence": "Segera datang.", "translation": "快到了。"}, "usage_note": "不久後。", "image_file": "soon.png" },
        { "id": "adv-16", "term_zh": "一起", "related_terms": [{ "term_target": "bersama", "pronunciation": ["/bərˈsama/"], "specific_note": "" }, { "term_target": "bareng", "pronunciation": ["/ˈbareŋ/"], "specific_note": "口語" }], "example": {"sentence": "Pergi bersama.", "translation": "一起去。"}, "usage_note": "共同。", "image_file": "together.png" },
        { "id": "adv-17", "term_zh": "仍然", "related_terms": [{ "term_target": "masih", "pronunciation": ["/ˈmasih/"], "specific_note": "" }], "example": {"sentence": "Masih di sini.", "translation": "還在這裡。"}, "usage_note": "持續。", "image_file": "still.png" },
        { "id": "adv-18", "term_zh": "一般來說", "related_terms": [{ "term_target": "biasanya", "pronunciation": ["/biˈasaɲa/"], "specific_note": "" }, { "term_target": "umumnya", "pronunciation": ["/ˈumumɲa/"], "specific_note": "一般而言" }], "example": {"sentence": "Umumnya begitu.", "translation": "一般是那樣。"}, "usage_note": "通常。", "image_file": "normally.png" },
        { "id": "adv-19", "term_zh": "立刻", "related_terms": [{ "term_target": "segera", "pronunciation": ["/səˈɡəra/"], "specific_note": "" }, { "term_target": "langsung", "pronunciation": ["/ˈlaŋsuŋ/"], "specific_note": "直接/馬上" }], "example": {"sentence": "Langsung pergi.", "translation": "立刻去。"}, "usage_note": "馬上。", "image_file": "immediately.png" },
        { "id": "adv-20", "term_zh": "也不", "related_terms": [{ "term_target": "juga tidak", "pronunciation": ["/ˈdʒuɡa ˈtidak/"], "specific_note": "" }], "example": {"sentence": "Saya juga tidak tahu.", "translation": "我也不知道。"}, "usage_note": "兩者都不。", "image_file": "neither.png" }
      ]
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "items": [
        { "id": "q-01", "term_zh": "什麼", "related_terms": [{ "term_target": "apa", "pronunciation": ["/ˈapa/"], "specific_note": "" }], "example": {"sentence": "Apa ini?", "translation": "這是什麼？"}, "usage_note": "問事物。", "image_file": "what.png" },
        { "id": "q-02", "term_zh": "如何", "related_terms": [{ "term_target": "bagaimana", "pronunciation": ["/baɡaiˈmana/"], "specific_note": "" }, { "term_target": "gimana", "pronunciation": ["/ɡiˈmana/"], "specific_note": "口語" }], "example": {"sentence": "Apa kabar?", "translation": "你好嗎(狀況如何)？"}, "usage_note": "問狀況。", "image_file": "how.png" },
        { "id": "q-03", "term_zh": "何時", "related_terms": [{ "term_target": "kapan", "pronunciation": ["/ˈkapan/"], "specific_note": "" }], "example": {"sentence": "Kapan pergi?", "translation": "何時去？"}, "usage_note": "問時間。", "image_file": "when.png" },
        { "id": "q-04", "term_zh": "哪裡", "related_terms": [{ "term_target": "di mana", "pronunciation": ["/di ˈmana/"], "specific_note": "在哪" }, { "term_target": "ke mana", "pronunciation": ["/kə ˈmana/"], "specific_note": "去哪" }], "example": {"sentence": "Di mana kamu?", "translation": "你在哪？"}, "usage_note": "注意介係詞 Di (在) 與 Ke (去)。", "image_file": "where.png" },
        { "id": "q-05", "term_zh": "誰", "related_terms": [{ "term_target": "siapa", "pronunciation": ["/siˈapa/"], "specific_note": "" }], "example": {"sentence": "Siapa itu?", "translation": "那是誰？"}, "usage_note": "問人。", "image_file": "who.png" },
        { "id": "q-06", "term_zh": "為什麼", "related_terms": [{ "term_target": "kenapa", "pronunciation": ["/kəˈnapa/"], "specific_note": "" }, { "term_target": "mengapa", "pronunciation": ["/məˈŋapa/"], "specific_note": "正式" }], "example": {"sentence": "Kenapa?", "translation": "為什麼？"}, "usage_note": "問原因。", "image_file": "why.png" },
        { "id": "q-07", "term_zh": "哪一個", "related_terms": [{ "term_target": "yang mana", "pronunciation": ["/jaŋ ˈmana/"], "specific_note": "" }], "example": {"sentence": "Yang mana?", "translation": "哪一個？"}, "usage_note": "選擇。", "image_file": "which.png" },
        { "id": "q-08", "term_zh": "多少（數量）", "related_terms": [{ "term_target": "berapa", "pronunciation": ["/bəˈrapa/"], "specific_note": "" }], "example": {"sentence": "Berapa harganya?", "translation": "多少錢？"}, "usage_note": "問數量/價格。", "image_file": "how_much.png" },
        { "id": "q-09", "term_zh": "多久（時間）", "related_terms": [{ "term_target": "berapa lama", "pronunciation": ["/bəˈrapa ˈlama/"], "specific_note": "" }], "example": {"sentence": "Berapa lama?", "translation": "要多久？"}, "usage_note": "時間長度。", "image_file": "how_long.png" }
      ]
    },
    {
      "id": "time_place",
      "name": "表達場所和時間的單字",
      "items": [
        { "id": "tp-01", "term_zh": "現在", "related_terms": [{ "term_target": "sekarang", "pronunciation": ["/səˈkaraŋ/"], "specific_note": "" }], "example": {"sentence": "Sekarang juga.", "translation": "現在立刻。"}, "usage_note": "目前。", "image_file": "now.png" },
        { "id": "tp-02", "term_zh": "今天", "related_terms": [{ "term_target": "hari ini", "pronunciation": ["/ˈhari ˈini/"], "specific_note": "" }], "example": {"sentence": "Hari ini panas.", "translation": "今天很熱。"}, "usage_note": "本日。", "image_file": "today.png" },
        { "id": "tp-03", "term_zh": "明天", "related_terms": [{ "term_target": "besok", "pronunciation": ["/ˈbɛsok/"], "specific_note": "" }], "example": {"sentence": "Sampai besok.", "translation": "明天見。"}, "usage_note": "隔天。", "image_file": "tomorrow.png" },
        { "id": "tp-04", "term_zh": "昨天", "related_terms": [{ "term_target": "kemarin", "pronunciation": ["/kəˈmarin/"], "specific_note": "" }], "example": {"sentence": "Kemarin saya pergi.", "translation": "昨天我去了。"}, "usage_note": "前一天。", "image_file": "yesterday.png" },
        { "id": "tp-05", "term_zh": "這裡", "related_terms": [{ "term_target": "di sini", "pronunciation": ["/di ˈsini/"], "specific_note": "" }], "example": {"sentence": "Datang ke sini.", "translation": "來這。"}, "usage_note": "近處。", "image_file": "here.png" },
        { "id": "tp-06", "term_zh": "那裡", "related_terms": [{ "term_target": "di situ", "pronunciation": ["/di ˈsitu/"], "specific_note": "中距離" }, { "term_target": "di sana", "pronunciation": ["/di ˈsana/"], "specific_note": "遠距離" }], "example": {"sentence": "Pergi ke sana.", "translation": "去那。"}, "usage_note": "遠處。", "image_file": "there.png" },
        { "id": "tp-07", "term_zh": "天（日期）", "related_terms": [{ "term_target": "hari", "pronunciation": ["/ˈhari/"], "specific_note": "" }], "example": {"sentence": "Satu hari.", "translation": "一天。"}, "usage_note": "日子。", "image_file": "day.png" },
        { "id": "tp-08", "term_zh": "年", "related_terms": [{ "term_target": "tahun", "pronunciation": ["/ˈtahun/"], "specific_note": "" }], "example": {"sentence": "Tahun ini.", "translation": "今年。"}, "usage_note": "年度。", "image_file": "year.png" },
        { "id": "tp-09", "term_zh": "月", "related_terms": [{ "term_target": "bulan", "pronunciation": ["/ˈbulan/"], "specific_note": "" }], "example": {"sentence": "Bulan ini.", "translation": "這個月。"}, "usage_note": "月份。", "image_file": "month.png" },
        { "id": "tp-10", "term_zh": "週", "related_terms": [{ "term_target": "minggu", "pronunciation": ["/ˈmiŋɡu/"], "specific_note": "週/星期日" }, { "term_target": "pekan", "pronunciation": ["/ˈpəkan/"], "specific_note": "週(正式)" }], "example": {"sentence": "Minggu depan.", "translation": "下週。"}, "usage_note": "星期。", "image_file": "week.png" },
        { "id": "tp-11", "term_zh": "早上", "related_terms": [{ "term_target": "pagi", "pronunciation": ["/ˈpaɡi/"], "specific_note": "" }], "example": {"sentence": "Pagi hari.", "translation": "在早上。"}, "usage_note": "上午。", "image_file": "morning.png" },
        { "id": "tp-12", "term_zh": "下午", "related_terms": [{ "term_target": "siang", "pronunciation": ["/ˈsiaŋ/"], "specific_note": "中午-下午3點" }, { "term_target": "sore", "pronunciation": ["/ˈsore/"], "specific_note": "下午3點-6點" }], "example": {"sentence": "Selamat siang.", "translation": "午安。"}, "usage_note": "注意 Siang 與 Sore 的區別。", "image_file": "afternoon.png" },
        { "id": "tp-13", "term_zh": "晚上", "related_terms": [{ "term_target": "malam", "pronunciation": ["/ˈmalam/"], "specific_note": "" }], "example": {"sentence": "Selamat malam.", "translation": "晚安。"}, "usage_note": "太陽下山後。", "image_file": "night.png" },
        { "id": "tp-14", "term_zh": "中午", "related_terms": [{ "term_target": "tengah hari", "pronunciation": ["/ˈtəŋah ˈhari/"], "specific_note": "" }, { "term_target": "siang", "pronunciation": ["/ˈsiaŋ/"], "specific_note": "" }], "example": {"sentence": "Makan siang.", "translation": "午餐。"}, "usage_note": "12點。", "image_file": "noon.png" },
        { "id": "tp-15", "term_zh": "前面", "related_terms": [{ "term_target": "depan", "pronunciation": ["/dəˈpan/"], "specific_note": "" }], "example": {"sentence": "Di depan saya.", "translation": "在我前面。"}, "usage_note": "前方。", "image_file": "front.png" },
        { "id": "tp-16", "term_zh": "後面", "related_terms": [{ "term_target": "belakang", "pronunciation": ["/bəˈlakaŋ/"], "specific_note": "" }], "example": {"sentence": "Di belakang.", "translation": "在後面。"}, "usage_note": "後方。", "image_file": "behind.png" },
        { "id": "tp-17", "term_zh": "左邊", "related_terms": [{ "term_target": "kiri", "pronunciation": ["/ˈkiri/"], "specific_note": "" }], "example": {"sentence": "Belok kiri.", "translation": "左轉。"}, "usage_note": "左。", "image_file": "left.png" },
        { "id": "tp-18", "term_zh": "右邊", "related_terms": [{ "term_target": "kanan", "pronunciation": ["/ˈkanan/"], "specific_note": "" }], "example": {"sentence": "Belok kanan.", "translation": "右轉。"}, "usage_note": "右。", "image_file": "right.png" },
        { "id": "tp-19", "term_zh": "旁邊", "related_terms": [{ "term_target": "samping", "pronunciation": ["/ˈsampiŋ/"], "specific_note": "" }, { "term_target": "sebelah", "pronunciation": ["/səˈbəlah/"], "specific_note": "" }], "example": {"sentence": "Di samping saya.", "translation": "在我旁邊。"}, "usage_note": "側邊。", "image_file": "beside.png" },
        { "id": "tp-20", "term_zh": "對面", "related_terms": [{ "term_target": "seberang", "pronunciation": ["/səˈbəraŋ/"], "specific_note": "" }], "example": {"sentence": "Di seberang jalan.", "translation": "在對街。"}, "usage_note": "對側。", "image_file": "across_from.png" },
        { "id": "tp-21", "term_zh": "春天", "related_terms": [{ "term_target": "musim semi", "pronunciation": ["/ˈmusim ˈsəmi/"], "specific_note": "" }], "example": {"sentence": "Musim semi indah.", "translation": "春天很美。"}, "usage_note": "季節。", "image_file": "spring.png" },
        { "id": "tp-22", "term_zh": "夏天", "related_terms": [{ "term_target": "musim panas", "pronunciation": ["/ˈmusim ˈpanas/"], "specific_note": "" }], "example": {"sentence": "Musim panas panas.", "translation": "夏天很熱。"}, "usage_note": "季節。", "image_file": "summer.png" },
        { "id": "tp-23", "term_zh": "秋天", "related_terms": [{ "term_target": "musim gugur", "pronunciation": ["/ˈmusim ˈɡuɡur/"], "specific_note": "" }], "example": {"sentence": "Musim gugur sejuk.", "translation": "秋天涼爽。"}, "usage_note": "季節。", "image_file": "autumn.png" },
        { "id": "tp-24", "term_zh": "冬天", "related_terms": [{ "term_target": "musim dingin", "pronunciation": ["/ˈmusim ˈdiŋin/"], "specific_note": "" }], "example": {"sentence": "Musim dingin dingin.", "translation": "冬天很冷。"}, "usage_note": "季節。", "image_file": "winter.png" }
      ]
    },
    {
      "id": "numbers",
      "name": "基本的數字",
      "items": [
        { "id": "num-0", "term_zh": "0", "related_terms": [{ "term_target": "nol", "pronunciation": ["/nol/"], "specific_note": "" }], "example": {"sentence": "Nol derajat.", "translation": "零度。"}, "usage_note": "零。", "image_file": "zero.png" },
        { "id": "num-1", "term_zh": "1", "related_terms": [{ "term_target": "satu", "pronunciation": ["/ˈsatu/"], "specific_note": "" }], "example": {"sentence": "Satu orang.", "translation": "一個人。"}, "usage_note": "一。", "image_file": "one.png" },
        { "id": "num-2", "term_zh": "2", "related_terms": [{ "term_target": "dua", "pronunciation": ["/ˈdua/"], "specific_note": "" }], "example": {"sentence": "Dua hari.", "translation": "兩天。"}, "usage_note": "二。", "image_file": "two.png" },
        { "id": "num-3", "term_zh": "3", "related_terms": [{ "term_target": "tiga", "pronunciation": ["/ˈtiɡa/"], "specific_note": "" }], "example": {"sentence": "Tiga kali.", "translation": "三次。"}, "usage_note": "三。", "image_file": "three.png" },
        { "id": "num-4", "term_zh": "4", "related_terms": [{ "term_target": "empat", "pronunciation": ["/əmˈpat/"], "specific_note": "" }], "example": {"sentence": "Empat musim.", "translation": "四季。"}, "usage_note": "四。", "image_file": "four.png" },
        { "id": "num-5", "term_zh": "5", "related_terms": [{ "term_target": "lima", "pronunciation": ["/ˈlima/"], "specific_note": "" }], "example": {"sentence": "Lima ribu.", "translation": "五千。"}, "usage_note": "五。", "image_file": "five.png" },
        { "id": "num-6", "term_zh": "6", "related_terms": [{ "term_target": "enam", "pronunciation": ["/əˈnam/"], "specific_note": "" }], "example": {"sentence": "Enam jam.", "translation": "六小時。"}, "usage_note": "六。", "image_file": "six.png" },
        { "id": "num-7", "term_zh": "7", "related_terms": [{ "term_target": "tujuh", "pronunciation": ["/ˈtudʒuh/"], "specific_note": "" }], "example": {"sentence": "Tujuh hari.", "translation": "七天。"}, "usage_note": "七。", "image_file": "seven.png" },
        { "id": "num-8", "term_zh": "8", "related_terms": [{ "term_target": "delapan", "pronunciation": ["/dəˈlapan/"], "specific_note": "" }], "example": {"sentence": "Delapan tahun.", "translation": "八歲。"}, "usage_note": "八。", "image_file": "eight.png" },
        { "id": "num-9", "term_zh": "9", "related_terms": [{ "term_target": "sembilan", "pronunciation": ["/səmˈbilan/"], "specific_note": "" }], "example": {"sentence": "Jam sembilan.", "translation": "九點。"}, "usage_note": "九。", "image_file": "nine.png" },
        { "id": "num-10", "term_zh": "10", "related_terms": [{ "term_target": "sepuluh", "pronunciation": ["/səˈpuluh/"], "specific_note": "" }], "example": {"sentence": "Sepuluh ribu.", "translation": "一萬。"}, "usage_note": "十。", "image_file": "ten.png" },
        { "id": "num-11", "term_zh": "11", "related_terms": [{ "term_target": "sebelas", "pronunciation": ["/səˈbəlas/"], "specific_note": "" }], "example": {"sentence": "Sebelas orang.", "translation": "11人。"}, "usage_note": "十一。", "image_file": "eleven.png" },
        { "id": "num-12", "term_zh": "12", "related_terms": [{ "term_target": "dua belas", "pronunciation": ["/ˈdua ˈbəlas/"], "specific_note": "" }], "example": {"sentence": "Dua belas bulan.", "translation": "12個月。"}, "usage_note": "十二。", "image_file": "twelve.png" },
        { "id": "num-15", "term_zh": "15", "related_terms": [{ "term_target": "lima belas", "pronunciation": ["/ˈlima ˈbəlas/"], "specific_note": "" }], "example": {"sentence": "Lima belas menit.", "translation": "15分鐘。"}, "usage_note": "十五。", "image_file": "fifteen.png" },
        { "id": "num-20", "term_zh": "20", "related_terms": [{ "term_target": "dua puluh", "pronunciation": ["/ˈdua ˈpuluh/"], "specific_note": "" }], "example": {"sentence": "Dua puluh ribu.", "translation": "兩萬。"}, "usage_note": "二十。", "image_file": "twenty.png" },
        { "id": "num-50", "term_zh": "50", "related_terms": [{ "term_target": "lima puluh", "pronunciation": ["/ˈlima ˈpuluh/"], "specific_note": "" }], "example": {"sentence": "Lima puluh persen.", "translation": "50%。"}, "usage_note": "五十。", "image_file": "fifty.png" },
        { "id": "num-100", "term_zh": "100", "related_terms": [{ "term_target": "seratus", "pronunciation": ["/səˈratus/"], "specific_note": "" }], "example": {"sentence": "Seratus poin.", "translation": "一百分。"}, "usage_note": "百。", "image_file": "hundred.png" },
        { "id": "num-1000", "term_zh": "1000", "related_terms": [{ "term_target": "seribu", "pronunciation": ["/səˈribu/"], "specific_note": "" }], "example": {"sentence": "Seribu rupiah.", "translation": "一千印尼盾。"}, "usage_note": "千。", "image_file": "thousand.png" },
        { "id": "num-10000", "term_zh": "10000", "related_terms": [{ "term_target": "sepuluh ribu", "pronunciation": ["/səˈpuluh ˈribu/"], "specific_note": "" }], "example": {"sentence": "Sepuluh ribu rupiah.", "translation": "一萬印尼盾。"}, "usage_note": "一萬。", "image_file": "ten_thousand.png" }
      ]
    },
    {
      "id": "grammar",
      "name": "基本句型",
      "items": [
        { "id": "g-01", "term_zh": "我是/覺得～", "related_terms": [{ "term_target": "Saya adalah ...", "pronunciation": ["/ˈsaja aˈdalah/"], "specific_note": "是(可省略)" }, { "term_target": "Saya merasa ...", "pronunciation": ["/ˈsaja məˈrasa/"], "specific_note": "覺得" }], "example": {"sentence": "Saya (adalah) pelajar.", "translation": "我是學生。"}, "usage_note": "Adalah 常用於定義。", "image_file": "i_am.png" },
        { "id": "g-02", "term_zh": "我的名字叫～", "related_terms": [{ "term_target": "Nama saya ...", "pronunciation": ["/ˈnama ˈsaja/"], "specific_note": "" }], "example": {"sentence": "Nama saya Budi.", "translation": "我的名字叫Budi。"}, "usage_note": "自我介紹。", "image_file": "my_name_is.png" },
        { "id": "g-03", "term_zh": "我做～", "related_terms": [{ "term_target": "Saya melakukan ...", "pronunciation": ["/ˈsaja məlaˈkukan/"], "specific_note": "" }], "example": {"sentence": "Saya melakukan pekerjaan.", "translation": "我做工作。"}, "usage_note": "一般動作。", "image_file": "i_do.png" },
        { "id": "g-04", "term_zh": "我正在做～", "related_terms": [{ "term_target": "Saya sedang ...", "pronunciation": ["/ˈsaja səˈdaŋ/"], "specific_note": "" }], "example": {"sentence": "Saya sedang makan.", "translation": "我正在吃。"}, "usage_note": "進行式。", "image_file": "ing.png" },
        { "id": "g-05", "term_zh": "我能夠～", "related_terms": [{ "term_target": "Saya bisa ...", "pronunciation": ["/ˈsaja ˈbisa/"], "specific_note": "" }], "example": {"sentence": "Saya bisa berenang.", "translation": "我會游泳。"}, "usage_note": "能力。", "image_file": "can.png" },
        { "id": "g-06", "term_zh": "我喜歡做～", "related_terms": [{ "term_target": "Saya suka ...", "pronunciation": ["/ˈsaja ˈsuka/"], "specific_note": "" }], "example": {"sentence": "Saya suka membaca.", "translation": "我喜歡閱讀。"}, "usage_note": "興趣。", "image_file": "like_ing.png" },
        { "id": "g-07", "term_zh": "我曾經～", "related_terms": [{ "term_target": "Saya pernah ...", "pronunciation": ["/ˈsaja ˈpərnah/"], "specific_note": "" }], "example": {"sentence": "Saya pernah ke sana.", "translation": "我曾經去過那裡。"}, "usage_note": "經驗。", "image_file": "i_was.png" },
        { "id": "g-08", "term_zh": "我做過～", "related_terms": [{ "term_target": "Saya sudah ...", "pronunciation": ["/ˈsaja ˈsudah/"], "specific_note": "已經做" }], "example": {"sentence": "Saya sudah makan.", "translation": "我吃過了。"}, "usage_note": "過去動作。", "image_file": "i_did.png" },
        { "id": "g-09", "term_zh": "我已做過～", "related_terms": [{ "term_target": "Saya sudah ...", "pronunciation": ["/ˈsaja ˈsudah/"], "specific_note": "" }], "example": {"sentence": "Saya sudah selesai.", "translation": "我已經完成了。"}, "usage_note": "完成式。", "image_file": "i_have_done.png" },
        { "id": "g-10", "term_zh": "我曾去過～", "related_terms": [{ "term_target": "Saya pernah ke ...", "pronunciation": ["/ˈsaja ˈpərnah kə/"], "specific_note": "" }], "example": {"sentence": "Saya pernah ke Bali.", "translation": "我曾經去過峇里島。"}, "usage_note": "經驗。", "image_file": "have_been_to.png" },
        { "id": "g-11", "term_zh": "我打算～", "related_terms": [{ "term_target": "Saya akan ...", "pronunciation": ["/ˈsaja ˈakan/"], "specific_note": "" }], "example": {"sentence": "Saya akan pergi.", "translation": "我將要去。"}, "usage_note": "未來式。", "image_file": "i_will.png" },
        { "id": "g-12", "term_zh": "你是～嗎？", "related_terms": [{ "term_target": "Apakah Anda ... ?", "pronunciation": ["/aˈpakah ˈanda/"], "specific_note": "" }], "example": {"sentence": "Apakah Anda pelajar?", "translation": "你是學生嗎？"}, "usage_note": "問身分。", "image_file": "are_you.png" },
        { "id": "g-13", "term_zh": "你在做～嗎？", "related_terms": [{ "term_target": "Apakah Anda sedang ... ?", "pronunciation": ["/aˈpakah ˈanda səˈdaŋ/"], "specific_note": "" }], "example": {"sentence": "Apakah Anda sedang makan?", "translation": "你在吃嗎？"}, "usage_note": "進行疑問。", "image_file": "do_you.png" },
        { "id": "g-14", "term_zh": "你曾經～嗎？", "related_terms": [{ "term_target": "Apakah Anda pernah ... ?", "pronunciation": ["/aˈpakah ˈanda ˈpərnah/"], "specific_note": "" }], "example": {"sentence": "Apakah Anda pernah ke Indonesia?", "translation": "你去過印尼嗎？"}, "usage_note": "問經驗。", "image_file": "have_you_ever.png" },
        { "id": "g-15", "term_zh": "你何時做（某事）？", "related_terms": [{ "term_target": "Kapan Anda ... ?", "pronunciation": ["/ˈkapan ˈanda/"], "specific_note": "" }], "example": {"sentence": "Kapan Anda tidur?", "translation": "你何時睡？"}, "usage_note": "問時間點。", "image_file": "when_do_you.png" },
        { "id": "g-16", "term_zh": "你什麼時候去（某地）？", "related_terms": [{ "term_target": "Kapan Anda pergi ke ... ?", "pronunciation": ["/ˈkapan ˈanda pərˈɡi kə/"], "specific_note": "" }], "example": {"sentence": "Kapan Anda pergi ke sekolah?", "translation": "你何時去學校？"}, "usage_note": "問去的時間。", "image_file": "when_go_to.png" },
        { "id": "g-17", "term_zh": "你在哪裡做（某事）？", "related_terms": [{ "term_target": "Di mana Anda ... ?", "pronunciation": ["/di ˈmana ˈanda/"], "specific_note": "" }], "example": {"sentence": "Di mana Anda tinggal?", "translation": "你住哪裡？"}, "usage_note": "問地點。", "image_file": "where_do_you.png" },
        { "id": "g-18", "term_zh": "你如何做（某事）？", "related_terms": [{ "term_target": "Bagaimana Anda ... ?", "pronunciation": ["/baɡaiˈmana ˈanda/"], "specific_note": "" }], "example": {"sentence": "Bagaimana Anda masak?", "translation": "你怎麼煮？"}, "usage_note": "問方法。", "image_file": "how_do_you.png" },
        { "id": "g-19", "term_zh": "你怎麼去（某地）？", "related_terms": [{ "term_target": "Bagaimana Anda pergi ke ... ?", "pronunciation": ["/baɡaiˈmana ˈanda pərˈɡi kə/"], "specific_note": "" }], "example": {"sentence": "Bagaimana Anda pergi ke kantor?", "translation": "你怎麼去辦公室？"}, "usage_note": "問交通方式。", "image_file": "how_go_to.png" },
        { "id": "g-20", "term_zh": "我不是～", "related_terms": [{ "term_target": "Saya bukan ...", "pronunciation": ["/ˈsaja ˈbukan/"], "specific_note": "否定名詞" }, { "term_target": "Saya tidak ...", "pronunciation": ["/ˈsaja ˈtidak/"], "specific_note": "否定形容詞" }], "example": {"sentence": "Saya bukan dokter.", "translation": "我不是醫生。"}, "usage_note": "否定身分用 Bukan。", "image_file": "i_am_not.png" },
        { "id": "g-21", "term_zh": "我不做～", "related_terms": [{ "term_target": "Saya tidak ...", "pronunciation": ["/ˈsaja ˈtidak/"], "specific_note": "否定動詞" }], "example": {"sentence": "Saya tidak merokok.", "translation": "我不抽菸。"}, "usage_note": "否定動作。", "image_file": "i_dont.png" },
        { "id": "g-22", "term_zh": "我不能～", "related_terms": [{ "term_target": "Saya tidak bisa ...", "pronunciation": ["/ˈsaja ˈtidak ˈbisa/"], "specific_note": "" }], "example": {"sentence": "Saya tidak bisa pergi.", "translation": "我不能去。"}, "usage_note": "否定能力。", "image_file": "i_cant.png" },
        { "id": "g-23", "term_zh": "我未曾～", "related_terms": [{ "term_target": "Saya belum pernah ...", "pronunciation": ["/ˈsaja bəˈlum ˈpərnah/"], "specific_note": "" }], "example": {"sentence": "Saya belum pernah makan ini.", "translation": "我沒吃過這個。"}, "usage_note": "無此經驗。", "image_file": "i_have_never.png" },
        { "id": "g-24", "term_zh": "我不必～", "related_terms": [{ "term_target": "Saya tidak perlu ...", "pronunciation": ["/ˈsaja ˈtidak ˈpərlu/"], "specific_note": "" }], "example": {"sentence": "Saya tidak perlu pergi.", "translation": "我不必去。"}, "usage_note": "無義務。", "image_file": "i_dont_have_to.png" },
        { "id": "g-25", "term_zh": "如果～的話，就～", "related_terms": [{ "term_target": "Jika ..., maka ...", "pronunciation": ["/ˈdʒika ... ˈmaka/"], "specific_note": "" }, { "term_target": "Kalau ...", "pronunciation": ["/ˈkalau/"], "specific_note": "口語" }], "example": {"sentence": "Kalau suka, beli.", "translation": "如果喜歡，就買。"}, "usage_note": "假設條件。", "image_file": "if.png" },
        { "id": "g-26", "term_zh": "當～時，就～", "related_terms": [{ "term_target": "Ketika ..., ...", "pronunciation": ["/kəˈtika/"], "specific_note": "" }], "example": {"sentence": "Ketika makan, saya senang.", "translation": "當我吃東西時，我很開心。"}, "usage_note": "時間條件。", "image_file": "when_condition.png" },
        { "id": "g-27", "term_zh": "請你～", "related_terms": [{ "term_target": "Bisakah Anda ... ?", "pronunciation": ["/biˈsakah ˈanda/"], "specific_note": "" }], "example": {"sentence": "Bisakah Anda bantu saya?", "translation": "可以幫我嗎？"}, "usage_note": "請求。", "image_file": "can_you.png" },
        { "id": "g-28", "term_zh": "我們來做～吧！", "related_terms": [{ "term_target": "Ayo ...", "pronunciation": ["/ˈajo/"], "specific_note": "" }, { "term_target": "Mari ...", "pronunciation": ["/ˈmari/"], "specific_note": "正式" }], "example": {"sentence": "Ayo pergi.", "translation": "我們走吧。"}, "usage_note": "提議。", "image_file": "lets.png" },
        { "id": "g-29", "term_zh": "我認為～", "related_terms": [{ "term_target": "Saya pikir ...", "pronunciation": ["/ˈsaja ˈpikir/"], "specific_note": "" }, { "term_target": "Menurut saya ...", "pronunciation": ["/məˈnurut ˈsaja/"], "specific_note": "對我來說" }], "example": {"sentence": "Menurut saya bagus.", "translation": "我認為這很好。"}, "usage_note": "表達想法。", "image_file": "i_think.png" },
        { "id": "g-30", "term_zh": "我想做～", "related_terms": [{ "term_target": "Saya ingin ...", "pronunciation": ["/ˈsaja ˈiŋin/"], "specific_note": "想" }, { "term_target": "Saya mau ...", "pronunciation": ["/ˈsaja ˈmau/"], "specific_note": "要" }], "example": {"sentence": "Saya ingin pergi.", "translation": "我想去。"}, "usage_note": "慾望。", "image_file": "want_to.png" },
        { "id": "g-31", "term_zh": "我必須做～", "related_terms": [{ "term_target": "Saya harus ...", "pronunciation": ["/ˈsaja ˈharus/"], "specific_note": "" }], "example": {"sentence": "Saya harus kerja.", "translation": "我必須工作。"}, "usage_note": "義務。", "image_file": "i_have_to.png" },
        { "id": "g-32", "term_zh": "做某事是怎樣的", "related_terms": [{ "term_target": "... itu ...", "pronunciation": ["/ˈitu/"], "specific_note": "" }], "example": {"sentence": "Makan itu menyenangkan.", "translation": "吃東西是開心的。"}, "usage_note": "描述動作。", "image_file": "it_is_to.png" },
        { "id": "g-33", "term_zh": "你可以幫我…嗎？", "related_terms": [{ "term_target": "Bisa bantu saya ... ?", "pronunciation": ["/ˈbisa ˈbantu ˈsaja/"], "specific_note": "" }], "example": {"sentence": "Bisa bantu saya bersihkan?", "translation": "你可以幫我打掃嗎？"}, "usage_note": "尋求協助。", "image_file": "can_you_help.png" },
        { "id": "g-34", "term_zh": "我可以…嗎？", "related_terms": [{ "term_target": "Bolehkah saya ... ?", "pronunciation": ["/boˈlɛhkah ˈsaja/"], "specific_note": "" }], "example": {"sentence": "Bolehkah saya masuk?", "translation": "我可以進來嗎？"}, "usage_note": "請求許可。", "image_file": "can_i.png" },
        { "id": "g-35", "term_zh": "我不喜歡…", "related_terms": [{ "term_target": "Saya tidak suka ...", "pronunciation": ["/ˈsaja ˈtidak ˈsuka/"], "specific_note": "" }], "example": {"sentence": "Saya tidak suka itu.", "translation": "我不喜歡它。"}, "usage_note": "表達反感。", "image_file": "i_dont_like.png" },
        { "id": "g-36", "term_zh": "我比較喜歡…", "related_terms": [{ "term_target": "Saya lebih suka ...", "pronunciation": ["/ˈsaja ˈləbih ˈsuka/"], "specific_note": "" }], "example": {"sentence": "Saya lebih suka teh.", "translation": "我比較喜歡茶。"}, "usage_note": "偏好。", "image_file": "prefer.png" },
        { "id": "g-37", "term_zh": "A 比 B 更…", "related_terms": [{ "term_target": "A lebih ... daripada B", "pronunciation": ["/A ˈləbih ... dariˈpada B/"], "specific_note": "" }], "example": {"sentence": "Ini lebih mahal daripada itu.", "translation": "這比那個貴。"}, "usage_note": "比較級。", "image_file": "more_than.png" },
        { "id": "g-38", "term_zh": "有…（存在）", "related_terms": [{ "term_target": "Ada ...", "pronunciation": ["/ˈada/"], "specific_note": "" }], "example": {"sentence": "Ada anjing.", "translation": "有一隻狗。"}, "usage_note": "存在。", "image_file": "there_is.png" }
      ]
    }
  ]
}