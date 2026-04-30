import { AppData } from "../types";

export const indonesianData: AppData = {
  meta: {
    source_language: "zh-TW",
    target_language: "id-ID",
    version: "3.2",
    description:
      "台灣人快速語言學習 - 印尼語完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)",
  },
  categories: [
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
          "pronunciation": [
            "/ja/"
          ],
          "specific_note": "標準/正式",
          "segments": [
            {
              "text": "Ya",
              "meaning": "是",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "Iya",
          "pronunciation": [
            "/i.ja/"
          ],
          "specific_note": "口語/柔和",
          "segments": [
            {
              "text": "Iya",
              "meaning": "是的",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ya, betul.",
          "translation": "是的，沒錯。",
          "segments": [
            {
              "text": "Ya",
              "meaning": "是的",
              "tail": ", "
            },
            {
              "text": "betul",
              "meaning": "正確/對",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Iya, saya mau.",
          "translation": "是的，我要 (接受提議)。",
          "segments": [
            {
              "text": "Iya",
              "meaning": "是的 (口語)",
              "tail": ", "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要/願意",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ya, tentu saja.",
          "translation": "是的，當然可以。",
          "segments": [
            {
              "text": "Ya",
              "meaning": "是的",
              "tail": ", "
            },
            {
              "text": "tentu",
              "meaning": "確定/當然",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "就/僅 (強調詞)",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Iya 比 Ya 聽起來更柔和自然，朋友間常用。",
      "image_file": "yes.png"
    },
    {
      "id": "greet-002",
      "term_zh": "不是",
      "related_terms": [
        {
          "term_target": "Tidak",
          "pronunciation": [
            "/ti.dak/"
          ],
          "specific_note": "否定動作/形容詞",
          "segments": [
            {
              "text": "Tidak",
              "meaning": "不",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "Bukan",
          "pronunciation": [
            "/bu.kan/"
          ],
          "specific_note": "否定名詞/身份",
          "segments": [
            {
              "text": "Bukan",
              "meaning": "不是",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tidak, terima kasih.",
          "translation": "不用了，謝謝。",
          "segments": [
            {
              "text": "Tidak",
              "meaning": "不",
              "tail": ", "
            },
            {
              "text": "terima",
              "meaning": "接受",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "愛/給予",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Itu bukan saya.",
          "translation": "那不是我。",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "bukan",
              "meaning": "不是",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tidak apa-apa.",
          "translation": "沒關係 / 沒事。",
          "segments": [
            {
              "text": "Tidak",
              "meaning": "不/沒",
              "tail": " "
            },
            {
              "text": "apa-apa",
              "meaning": "什麼",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Tidak 用於「我不吃」，Bukan 用於「我不是學生」。",
      "image_file": "no.png"
    },
    {
      "id": "greet-003",
      "term_zh": "你好",
      "related_terms": [
        {
          "term_target": "Halo",
          "pronunciation": [
            "/ha.lo/"
          ],
          "specific_note": "通用",
          "segments": [
            {
              "text": "Halo",
              "meaning": "你好",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Halo, apa kabar?",
          "translation": "你好，你好嗎？",
          "segments": [
            {
              "text": "Halo",
              "meaning": "你好",
              "tail": ", "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": " "
            },
            {
              "text": "kabar",
              "meaning": "消息/新聞",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Halo, semua!",
          "translation": "大家好！",
          "segments": [
            {
              "text": "Halo",
              "meaning": "你好",
              "tail": ", "
            },
            {
              "text": "semua",
              "meaning": "所有/大家",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Halo, bisa bicara dengan Budi?",
          "translation": "喂(電話)，請問我可以跟 Budi 說話嗎？",
          "segments": [
            {
              "text": "Halo",
              "meaning": "喂",
              "tail": ", "
            },
            {
              "text": "bisa",
              "meaning": "能夠/可以",
              "tail": " "
            },
            {
              "text": "bicara",
              "meaning": "說話",
              "tail": " "
            },
            {
              "text": "dengan",
              "meaning": "和/跟",
              "tail": " "
            },
            {
              "text": "Budi",
              "meaning": "Budi(人名)",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "和英文 Hello 用法幾乎一樣。",
      "image_file": "hello.png"
    },
    {
      "id": "greet-004",
      "term_zh": "謝謝你",
      "related_terms": [
        {
          "term_target": "Terima kasih",
          "pronunciation": [
            "/tə.ri.ma ka.sɪh/"
          ],
          "specific_note": "標準",
          "segments": [
            {
              "text": "Terima",
              "meaning": "接受",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "愛/給予",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "Makasih",
          "pronunciation": [
            "/ma.ka.sɪh/"
          ],
          "specific_note": "口語簡稱",
          "segments": [
            {
              "text": "Makasih",
              "meaning": "謝啦",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Terima kasih banyak.",
          "translation": "非常謝謝你。",
          "segments": [
            {
              "text": "Terima",
              "meaning": "接受",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "給予",
              "tail": " "
            },
            {
              "text": "banyak",
              "meaning": "多/非常",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Makasih ya!",
          "translation": "謝啦！(口語)",
          "segments": [
            {
              "text": "Makasih",
              "meaning": "謝謝(簡稱)",
              "tail": " "
            },
            {
              "text": "ya",
              "meaning": "喔/呀(語氣詞)",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Terima kasih kembali.",
          "translation": "不客氣 (對方說謝謝時的回覆)。",
          "segments": [
            {
              "text": "Terima",
              "meaning": "接受",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "給予",
              "tail": " "
            },
            {
              "text": "kembali",
              "meaning": "返回/回到",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "日常口語常簡稱為 Makasih。",
      "image_file": "thank_you.png"
    },
    {
      "id": "greet-005",
      "term_zh": "對不起",
      "related_terms": [
        {
          "term_target": "Maaf",
          "pronunciation": [
            "/ma.ʔaf/"
          ],
          "specific_note": "道歉",
          "segments": [
            {
              "text": "Maaf",
              "meaning": "抱歉/原諒",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Maaf, saya terlambat.",
          "translation": "對不起，我遲到了。",
          "segments": [
            {
              "text": "Maaf",
              "meaning": "抱歉",
              "tail": ", "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "terlambat",
              "meaning": "遲到",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Maaf, saya salah.",
          "translation": "對不起，我錯了。",
          "segments": [
            {
              "text": "Maaf",
              "meaning": "抱歉",
              "tail": ", "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "salah",
              "meaning": "錯誤",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Minta maaf ya.",
          "translation": "請原諒我喔 (尋求原諒)。",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求/要",
              "tail": " "
            },
            {
              "text": "maaf",
              "meaning": "原諒",
              "tail": " "
            },
            {
              "text": "ya",
              "meaning": "喔(語氣詞)",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "做錯事或打擾別人時都可用。",
      "image_file": "sorry.png"
    },
    {
      "id": "greet-006",
      "term_zh": "不好意思",
      "related_terms": [
        {
          "term_target": "Permisi",
          "pronunciation": [
            "/pər.mi.si/"
          ],
          "specific_note": "借過/發問前",
          "segments": [
            {
              "text": "Permisi",
              "meaning": "允許/借過",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Permisi, numpang lewat.",
          "translation": "不好意思，借過一下。",
          "segments": [
            {
              "text": "Permisi",
              "meaning": "不好意思",
              "tail": ", "
            },
            {
              "text": "numpang",
              "meaning": "搭/藉由",
              "tail": " "
            },
            {
              "text": "lewat",
              "meaning": "經過",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Permisi, toilet di mana?",
          "translation": "不好意思，請問廁所在哪裡？",
          "segments": [
            {
              "text": "Permisi",
              "meaning": "不好意思",
              "tail": ", "
            },
            {
              "text": "toilet",
              "meaning": "廁所",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Permisi, boleh tanya?",
          "translation": "不好意思，可以問一下嗎？",
          "segments": [
            {
              "text": "Permisi",
              "meaning": "不好意思",
              "tail": ", "
            },
            {
              "text": "boleh",
              "meaning": "可以/允許",
              "tail": " "
            },
            {
              "text": "tanya",
              "meaning": "問",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Maaf, permisi.",
          "translation": "抱歉，借過/失陪了。",
          "segments": [
            {
              "text": "Maaf",
              "meaning": "抱歉",
              "tail": ", "
            },
            {
              "text": "permisi",
              "meaning": "准許(離開/經過)",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "經過人前或發問前必用。",
      "image_file": "excuse_me.png"
    },
    {
      "id": "greet-007",
      "term_zh": "我不懂",
      "related_terms": [
        {
          "term_target": "Saya tidak mengerti",
          "pronunciation": [
            "/sa.ja ti.dak mə.ŋər.ti/"
          ],
          "specific_note": "標準句",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "mengerti",
              "meaning": "明白/懂",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Maaf, saya tidak mengerti.",
          "translation": "抱歉，我不懂。",
          "segments": [
            {
              "text": "Maaf",
              "meaning": "抱歉",
              "tail": ", "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "mengerti",
              "meaning": "明白",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya tidak mengerti Bahasa Indonesia.",
          "translation": "我聽不懂印尼語。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "mengerti",
              "meaning": "明白",
              "tail": " "
            },
            {
              "text": "Bahasa",
              "meaning": "語言",
              "tail": " "
            },
            {
              "text": "Indonesia",
              "meaning": "印尼",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya nggak ngerti.",
          "translation": "我不懂 (口語)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "nggak",
              "meaning": "不(tidak的口語)",
              "tail": " "
            },
            {
              "text": "ngerti",
              "meaning": "懂(mengerti的口語)",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "正式場合說 Tidak mengerti，朋友間說 Nggak ngerti。",
      "image_file": "dont_understand.png"
    },
    {
      "id": "greet-008",
      "term_zh": "廁所在哪裡？",
      "related_terms": [
        {
          "term_target": "Toilet di mana?",
          "pronunciation": [
            "/tɔɪ.lɛt di ma.na/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Toilet",
              "meaning": "廁所",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Permisi, toilet di mana ya?",
          "translation": "不好意思，請問廁所在哪裡？",
          "segments": [
            {
              "text": "Permisi",
              "meaning": "借問",
              "tail": ", "
            },
            {
              "text": "toilet",
              "meaning": "廁所",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": " "
            },
            {
              "text": "ya",
              "meaning": "呢(語助詞)",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Ada kamar kecil di sini?",
          "translation": "這裡有洗手間嗎？",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "kamar",
              "meaning": "房間",
              "tail": " "
            },
            {
              "text": "kecil",
              "meaning": "小",
              "tail": " (洗手間) "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Boleh pinjam toiletnya?",
          "translation": "可以借用一下廁所嗎？(去別人家時用)",
          "segments": [
            {
              "text": "Boleh",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "pinjam",
              "meaning": "借",
              "tail": " "
            },
            {
              "text": "toiletnya",
              "meaning": "那個廁所",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Toilet 是最通用的詞，Kamar Kecil (小房間) 較委婉。",
      "image_file": "where_bathroom.png"
    },
    {
      "id": "greet-010",
      "term_zh": "多少錢？",
      "related_terms": [
        {
          "term_target": "Berapa harganya?",
          "pronunciation": [
            "/bə.ra.pa har.ga.ɲa/"
          ],
          "specific_note": "問價格",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "harganya",
              "meaning": "它的價格",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini berapa?",
          "translation": "這個多少錢？(最常用)",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這個",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Berapa totalnya?",
          "translation": "總共多少錢？",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "totalnya",
              "meaning": "它的總計",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Bisa kurang nggak?",
          "translation": "可以算便宜一點嗎？(殺價必備)",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "能夠/可以",
              "tail": " "
            },
            {
              "text": "kurang",
              "meaning": "減少/少",
              "tail": " "
            },
            {
              "text": "nggak",
              "meaning": "不(口語)",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "在傳統市場一定要問 Bisa kurang (能少一點嗎)。",
      "image_file": "how_much.png"
    },
    {
      "id": "greet-011",
      "term_zh": "我想要這個",
      "related_terms": [
        {
          "term_target": "Saya mau ini",
          "pronunciation": [
            "/sa.ja ma.u i.ni/"
          ],
          "specific_note": "直接",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya mau yang ini.",
          "translation": "我想要這一個。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "yang",
              "meaning": "那個...的(定語)",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya pesan ini satu.",
          "translation": "我要點一份這個 (餐廳用)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "pesan",
              "meaning": "訂/點餐",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": " "
            },
            {
              "text": "satu",
              "meaning": "一",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya ambil ini saja.",
          "translation": "我拿/買這個就好。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "ambil",
              "meaning": "拿/取",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "僅/就",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "手指著商品說 Saya mau ini 最簡單。",
      "image_file": "i_want_this.png"
    },
    {
      "id": "greet-012",
      "term_zh": "請給我...",
      "related_terms": [
        {
          "term_target": "Minta...",
          "pronunciation": [
            "/min.ta/"
          ],
          "specific_note": "索取",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求/要",
              "tail": "..."
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Minta air putih, ya.",
          "translation": "麻煩給我白開水。",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求",
              "tail": " "
            },
            {
              "text": "air",
              "meaning": "水",
              "tail": " "
            },
            {
              "text": "putih",
              "meaning": "白色",
              "tail": " "
            },
            {
              "text": "ya",
              "meaning": "喔",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Minta menunya dong.",
          "translation": "請給我菜單 (語氣親切)。",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求",
              "tail": " "
            },
            {
              "text": "menunya",
              "meaning": "那個菜單",
              "tail": " "
            },
            {
              "text": "dong",
              "meaning": "拜託/啦(請求語氣)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tolong ambilkan itu.",
          "translation": "請幫我拿那個。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "幫忙",
              "tail": " "
            },
            {
              "text": "ambilkan",
              "meaning": "幫忙拿",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那個",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Minta 用於「索取物品」，Tolong 用於「請求動作」。",
      "image_file": "please_give_me.png"
    },
    {
      "id": "greet-013",
      "term_zh": "這是什麼？",
      "related_terms": [
        {
          "term_target": "Apa ini?",
          "pronunciation": [
            "/a.pa i.ni/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Apa",
              "meaning": "什麼",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini apa?",
          "translation": "這是什麼？(語序可互換)",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這個",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Ini namanya apa?",
          "translation": "這叫做什麼名字？",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這個",
              "tail": " "
            },
            {
              "text": "namanya",
              "meaning": "它的名字",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Isinya apa?",
          "translation": "裡面是什麼/餡料是什麼？",
          "segments": [
            {
              "text": "Isinya",
              "meaning": "它的內容/餡",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "看到陌生食物時可以用 Isinya apa (裡面有什麼)。",
      "image_file": "what_is_this.png"
    },
    {
      "id": "greet-014",
      "term_zh": "請幫我",
      "related_terms": [
        {
          "term_target": "Tolong saya",
          "pronunciation": [
            "/tɔ.lɔŋ sa.ja/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "幫忙/救命",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tolong!",
          "translation": "救命！/ 幫忙！",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "幫忙",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Bisa bantu saya?",
          "translation": "可以幫我嗎？",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "能夠",
              "tail": " "
            },
            {
              "text": "bantu",
              "meaning": "協助",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Tolong bantu saya angkat ini.",
          "translation": "請幫我抬這個。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請/幫忙",
              "tail": " "
            },
            {
              "text": "bantu",
              "meaning": "協助",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "angkat",
              "meaning": "抬/舉",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Tolong 放在句首表示「請...」，單獨喊表示「救命」。",
      "image_file": "help_me.png"
    },
    {
      "id": "greet-015",
      "term_zh": "你可以再說一次嗎？",
      "related_terms": [
        {
          "term_target": "Bisa ulangi lagi?",
          "pronunciation": [
            "/bi.sa u.la.ŋi la.gi/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "ulangi",
              "meaning": "重複",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "再/又",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Maaf, bisa ulangi lagi?",
          "translation": "不好意思，能再說一次嗎？",
          "segments": [
            {
              "text": "Maaf",
              "meaning": "抱歉",
              "tail": ", "
            },
            {
              "text": "bisa",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "ulangi",
              "meaning": "重複",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "再一次",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Apa? Saya tidak dengar.",
          "translation": "什麼？我沒聽見。",
          "segments": [
            {
              "text": "Apa",
              "meaning": "什麼",
              "tail": "? "
            },
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "沒有",
              "tail": " "
            },
            {
              "text": "dengar",
              "meaning": "聽見",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sekali lagi, tolong.",
          "translation": "請再說一次。",
          "segments": [
            {
              "text": "Sekali",
              "meaning": "一次",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "再",
              "tail": ", "
            },
            {
              "text": "tolong",
              "meaning": "拜託/請",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "沒聽清楚時使用。",
      "image_file": "say_again.png"
    },
    {
      "id": "greet-016",
      "term_zh": "你可以講慢一點嗎？",
      "related_terms": [
        {
          "term_target": "Bisa bicara pelan-pelan?",
          "pronunciation": [
            "/bi.sa bi.tʃa.ra pə.lan pə.lan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "bicara",
              "meaning": "說話",
              "tail": " "
            },
            {
              "text": "pelan-pelan",
              "meaning": "慢慢地",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tolong bicara pelan-pelan.",
          "translation": "請慢慢說。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請",
              "tail": " "
            },
            {
              "text": "bicara",
              "meaning": "說話",
              "tail": " "
            },
            {
              "text": "pelan-pelan",
              "meaning": "慢慢地",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jangan cepat-cepat.",
          "translation": "不要那麼快。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "不要 (禁止)",
              "tail": " "
            },
            {
              "text": "cepat-cepat",
              "meaning": "快快地",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya masih belajar, tolong pelan-pelan.",
          "translation": "我還在學習，請慢一點。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "masih",
              "meaning": "還/仍然",
              "tail": " "
            },
            {
              "text": "belajar",
              "meaning": "學習",
              "tail": ", "
            },
            {
              "text": "tolong",
              "meaning": "拜託",
              "tail": " "
            },
            {
              "text": "pelan-pelan",
              "meaning": "慢慢地",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼人說話通常很快，這句很有用。",
      "image_file": "speak_slowly.png"
    },
    {
      "id": "greet-017",
      "term_zh": "原來如此",
      "related_terms": [
        {
          "term_target": "Oh, begitu",
          "pronunciation": [
            "/oh bə.gi.tu/"
          ],
          "specific_note": "理解",
          "segments": [
            {
              "text": "Oh",
              "meaning": "噢",
              "tail": ", "
            },
            {
              "text": "begitu",
              "meaning": "那樣/如此",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Oh, begitu. Saya mengerti.",
          "translation": "噢，原來如此，我懂了。",
          "segments": [
            {
              "text": "Oh",
              "meaning": "噢",
              "tail": ", "
            },
            {
              "text": "begitu",
              "meaning": "那樣",
              "tail": ". "
            },
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mengerti",
              "meaning": "明白",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Oh, pantas saja!",
          "translation": "噢，難怪！ (表示終於理解原因)",
          "segments": [
            {
              "text": "Oh",
              "meaning": "噢",
              "tail": ", "
            },
            {
              "text": "pantas",
              "meaning": "恰當/值得",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "就",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Jadi begitu ceritanya.",
          "translation": "原來故事是這樣的。",
          "segments": [
            {
              "text": "Jadi",
              "meaning": "所以/變成",
              "tail": " "
            },
            {
              "text": "begitu",
              "meaning": "那樣",
              "tail": " "
            },
            {
              "text": "ceritanya",
              "meaning": "那個故事",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "點頭並說 Oh, begitu 表示你在專心聽。",
      "image_file": "i_see.png"
    },
    {
      "id": "greet-018",
      "term_zh": "早安",
      "related_terms": [
        {
          "term_target": "Selamat pagi",
          "pronunciation": [
            "/sə.la.mat pa.gi/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀/平安",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早上",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Selamat pagi, Pak.",
          "translation": "早安，先生。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早上",
              "tail": ", "
            },
            {
              "text": "Pak",
              "meaning": "先生 (Bapak簡稱)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pagi!",
          "translation": "早！(口語)",
          "segments": [
            {
              "text": "Pagi",
              "meaning": "早",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Selamat pagi semuanya.",
          "translation": "大家早安。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早上",
              "tail": " "
            },
            {
              "text": "semuanya",
              "meaning": "全部/大家",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "大約 11:00 AM 之前使用。",
      "image_file": "good_morning.png"
    },
    {
      "id": "greet-019",
      "term_zh": "晚上好 (晚安)",
      "related_terms": [
        {
          "term_target": "Selamat malam",
          "pronunciation": [
            "/sə.la.mat ma.lam/"
          ],
          "specific_note": "天黑後",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "夜晚",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Selamat malam, Bu.",
          "translation": "晚安(晚上好)，女士。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": ", "
            },
            {
              "text": "Bu",
              "meaning": "女士/媽媽 (Ibu簡稱)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Malam!",
          "translation": "晚安！(口語簡稱)",
          "segments": [
            {
              "text": "Malam",
              "meaning": "晚上",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Selamat tidur.",
          "translation": "晚安 (睡前專用)。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "tidur",
              "meaning": "睡覺",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "見面說 Selamat malam，睡覺前說 Selamat tidur。",
      "image_file": "good_evening.png"
    },
    {
      "id": "greet-020",
      "term_zh": "再見",
      "related_terms": [
        {
          "term_target": "Sampai jumpa",
          "pronunciation": [
            "/sam.pai jum.pa/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Sampai",
              "meaning": "直到",
              "tail": " "
            },
            {
              "text": "jumpa",
              "meaning": "相遇",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sampai jumpa lagi.",
          "translation": "下次見。",
          "segments": [
            {
              "text": "Sampai",
              "meaning": "直到",
              "tail": " "
            },
            {
              "text": "jumpa",
              "meaning": "相遇",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "再/又",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hati-hati di jalan.",
          "translation": "路上小心 (印尼最常用的道別)。",
          "segments": [
            {
              "text": "Hati-hati",
              "meaning": "小心",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "jalan",
              "meaning": "路/街道",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dah!",
          "translation": "掰掰！(口語)",
          "segments": [
            {
              "text": "Dah",
              "meaning": "掰(Sudah的變體)",
              "tail": "!"
            }
          ]
        }
      ],
      "usage_note": "跟朋友分開時，說「Hati-hati (小心)」比說再見更貼心。",
      "image_file": "goodbye.png"
    },
    {
      "id": "greet-021",
      "term_zh": "你好嗎",
      "related_terms": [
        {
          "term_target": "Apa kabar?",
          "pronunciation": [
            "/a.pa ka.bar/"
          ],
          "specific_note": "問候",
          "segments": [
            {
              "text": "Apa",
              "meaning": "什麼",
              "tail": " "
            },
            {
              "text": "kabar",
              "meaning": "消息/新聞",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Apa kabar?",
          "translation": "你好嗎？",
          "segments": [
            {
              "text": "Apa",
              "meaning": "什麼",
              "tail": " "
            },
            {
              "text": "kabar",
              "meaning": "消息",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kabar baik.",
          "translation": "我很好 (回答 Apa kabar)。",
          "segments": [
            {
              "text": "Kabar",
              "meaning": "消息",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "好",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Gimana kabarnya?",
          "translation": "最近怎樣？(口語)",
          "segments": [
            {
              "text": "Gimana",
              "meaning": "如何(Bagaimana簡稱)",
              "tail": " "
            },
            {
              "text": "kabarnya",
              "meaning": "那個消息",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "標準回答是 Kabar baik (消息很好)。",
      "image_file": "how_are_you.png"
    },
    {
      "id": "greet-022",
      "term_zh": "真的嗎",
      "related_terms": [
        {
          "term_target": "Masa?",
          "pronunciation": [
            "/ma.sa/"
          ],
          "specific_note": "懷疑/驚訝",
          "segments": [
            {
              "text": "Masa",
              "meaning": "哪有可能/真的嗎",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Masa sih?",
          "translation": "真的假的啊？",
          "segments": [
            {
              "text": "Masa",
              "meaning": "真的嗎",
              "tail": " "
            },
            {
              "text": "sih",
              "meaning": "啊(語氣詞)",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Benarkah?",
          "translation": "是真的嗎？(較正式)",
          "segments": [
            {
              "text": "Benar",
              "meaning": "正確/真",
              "tail": ""
            },
            {
              "text": "kah",
              "meaning": "嗎(疑問詞綴)",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Serius?",
          "translation": "認真嗎？",
          "segments": [
            {
              "text": "Serius",
              "meaning": "嚴肅/認真",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "聊天時 Masa? 是最高頻的驚訝詞。",
      "image_file": "really_q.png"
    },
    {
      "id": "greet-023",
      "term_zh": "太棒了",
      "related_terms": [
        {
          "term_target": "Mantap!",
          "pronunciation": [
            "/man.tap/"
          ],
          "specific_note": "讚嘆",
          "segments": [
            {
              "text": "Mantap",
              "meaning": "穩固/極好/讚",
              "tail": "!"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wah, mantap!",
          "translation": "哇，太讚了！",
          "segments": [
            {
              "text": "Wah",
              "meaning": "哇",
              "tail": ", "
            },
            {
              "text": "mantap",
              "meaning": "極好",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Hebat kamu!",
          "translation": "你真棒！",
          "segments": [
            {
              "text": "Hebat",
              "meaning": "厲害/偉大",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Keren banget!",
          "translation": "超酷的！",
          "segments": [
            {
              "text": "Keren",
              "meaning": "酷/帥",
              "tail": " "
            },
            {
              "text": "banget",
              "meaning": "非常(口語)",
              "tail": "!"
            }
          ]
        }
      ],
      "usage_note": "吃到美食或看到好事都可以喊 Mantap。",
      "image_file": "awesome.png"
    },
    {
      "id": "greet-024",
      "term_zh": "很高興認識你",
      "related_terms": [
        {
          "term_target": "Salam kenal",
          "pronunciation": [
            "/sa.lam kə.nal/"
          ],
          "specific_note": "初次見面",
          "segments": [
            {
              "text": "Salam",
              "meaning": "問候/致意",
              "tail": " "
            },
            {
              "text": "kenal",
              "meaning": "認識",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Halo, salam kenal ya.",
          "translation": "你好，很高興認識你。",
          "segments": [
            {
              "text": "Halo",
              "meaning": "你好",
              "tail": ", "
            },
            {
              "text": "salam",
              "meaning": "問候",
              "tail": " "
            },
            {
              "text": "kenal",
              "meaning": "認識",
              "tail": " "
            },
            {
              "text": "ya",
              "meaning": "喔",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Senang bertemu dengan Anda.",
          "translation": "很高興遇見您 (正式)。",
          "segments": [
            {
              "text": "Senang",
              "meaning": "高興/快樂",
              "tail": " "
            },
            {
              "text": "bertemu",
              "meaning": "見面",
              "tail": " "
            },
            {
              "text": "dengan",
              "meaning": "和",
              "tail": " "
            },
            {
              "text": "Anda",
              "meaning": "您",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya Budi, salam kenal.",
          "translation": "我是 Budi，幸會。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "Budi",
              "meaning": "Budi(人名)",
              "tail": ", "
            },
            {
              "text": "salam",
              "meaning": "問候",
              "tail": " "
            },
            {
              "text": "kenal",
              "meaning": "認識",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Salam kenal 是印尼人交換名字時最常用的短句。",
      "image_file": "nice_to_meet_you.png"
    },
    {
      "id": "greet-025",
      "term_zh": "真可惜",
      "related_terms": [
        {
          "term_target": "Sayang sekali",
          "pronunciation": [
            "/sa.jaŋ se.ka.li/"
          ],
          "specific_note": "遺憾",
          "segments": [
            {
              "text": "Sayang",
              "meaning": "可惜/愛",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wah, sayang sekali.",
          "translation": "哇，真可惜。",
          "segments": [
            {
              "text": "Wah",
              "meaning": "哇",
              "tail": ", "
            },
            {
              "text": "sayang",
              "meaning": "可惜",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Yah, kasihan.",
          "translation": "唉，真可憐 (對人的同情)。",
          "segments": [
            {
              "text": "Yah",
              "meaning": "唉",
              "tail": ", "
            },
            {
              "text": "kasihan",
              "meaning": "可憐/同情",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu tidak bisa ikut? Sayang banget.",
          "translation": "你不能去？太可惜了。",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "bisa",
              "meaning": "能",
              "tail": " "
            },
            {
              "text": "ikut",
              "meaning": "跟隨/參加",
              "tail": "? "
            },
            {
              "text": "Sayang",
              "meaning": "可惜",
              "tail": " "
            },
            {
              "text": "banget",
              "meaning": "非常(口語)",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Sayang 既是「可惜」也是「親愛的/愛」，看語境。",
      "image_file": "too_bad.png"
    },
    {
      "id": "greet-026",
      "term_zh": "不客氣",
      "related_terms": [
        {
          "term_target": "Bitte",
          "pronunciation": ["/ˈbɪtə/"],
          "specific_note": "最通用",
          "segments": [{ "text": "Bitte", "meaning": "不客氣/請", "tail": "" }]
        },
        {
          "term_target": "Gern geschehen",
          "pronunciation": ["/ɡɛʁn ɡəˈʃeːən/"],
          "specific_note": "樂意之至",
          "segments": [
            { "text": "Gern", "meaning": "樂意地", "tail": " " },
            { "text": "geschehen", "meaning": "發生", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bitte schön!",
          "translation": "不客氣！(回應 Danke schön 最自然的方式)",
          "segments": [
            { "text": "Bitte", "meaning": "不客氣", "tail": " " },
            { "text": "schön", "meaning": "美好的", "tail": "!" }
          ]
        },
        {
          "sentence": "Gern geschehen.",
          "translation": "很樂意為您效勞 / 不客氣。",
          "segments": [
            { "text": "Gern", "meaning": "樂意地", "tail": " " },
            { "text": "geschehen", "meaning": "發生", "tail": "." }
          ]
        },
        {
          "sentence": "Kein Problem.",
          "translation": "沒問題 / 小事一樁。",
          "segments": [
            { "text": "Kein", "meaning": "沒有", "tail": " " },
            { "text": "Problem", "meaning": "問題", "tail": "." }
          ]
        }
      ],
      "usage_note": "當別人對你說 Danke (謝謝) 時，最簡單的回應就是 Bitte (不客氣)。",
      "image_file": "you_are_welcome.png"
    },
    {
      "id": "greet-027",
      "term_zh": "我不知道",
      "related_terms": [
        {
          "term_target": "Ich weiß es nicht",
          "pronunciation": ["/ɪç vaɪ̯s ɛs nɪçt/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "weiß", "meaning": "知道", "tail": " " },
            { "text": "es", "meaning": "這", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tut mir leid, ich weiß es nicht.",
          "translation": "抱歉，我不知道。",
          "segments": [
            { "text": "Tut", "meaning": "做", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "leid", "meaning": "遺憾", "tail": ", " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "weiß", "meaning": "知道", "tail": " " },
            { "text": "es", "meaning": "這", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Keine Ahnung.",
          "translation": "我毫無頭緒 / 沒概念。(超道地口語)",
          "segments": [
            { "text": "Keine", "meaning": "沒有", "tail": " " },
            { "text": "Ahnung", "meaning": "想法/頭緒", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bin mir nicht sicher.",
          "translation": "我不是很確定。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "mir", "meaning": "我自己", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "sicher", "meaning": "確定的", "tail": "." }
          ]
        }
      ],
      "usage_note": "被路人問路，或是聽不懂對方在講什麼時，直接說 Keine Ahnung 就能輕鬆脫身。",
      "image_file": "i_dont_know.png"
    },
    {
      "id": "greet-028",
      "term_zh": "可以刷卡嗎？",
      "related_terms": [
        {
          "term_target": "Kann ich mit Karte zahlen?",
          "pronunciation": ["/kan ɪç mɪt ˈkaʁtə ˈt͡saːlən/"],
          "specific_note": "",
          "segments": [
            { "text": "Kann", "meaning": "可以", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "mit", "meaning": "用", "tail": " " },
            { "text": "Karte", "meaning": "卡片", "tail": " " },
            { "text": "zahlen", "meaning": "支付", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kann ich mit Karte zahlen?",
          "translation": "我可以刷卡嗎？",
          "segments": [
            { "text": "Kann", "meaning": "可以", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "mit", "meaning": "用", "tail": " " },
            { "text": "Karte", "meaning": "卡片", "tail": " " },
            { "text": "zahlen", "meaning": "支付", "tail": "?" }
          ]
        },
        {
          "sentence": "Nehmen Sie Kreditkarten?",
          "translation": "你們收信用卡嗎？",
          "segments": [
            { "text": "Nehmen", "meaning": "拿/收取", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "Kreditkarten", "meaning": "信用卡", "tail": "?" }
          ]
        },
        {
          "sentence": "Nur Barzahlung.",
          "translation": "只收現金。(店家門口常貼的告示)",
          "segments": [
            { "text": "Nur", "meaning": "只有", "tail": " " },
            { "text": "Barzahlung", "meaning": "現金支付", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國是個非常熱愛使用現金的國家，許多小店或餐廳不收信用卡，進去消費前一定要先問這句！",
      "image_file": "pay_by_card.png"
    },
    {
      "id": "greet-029",
      "term_zh": "乾杯！",
      "related_terms": [
        {
          "term_target": "Prost!",
          "pronunciation": ["/pʁoːst/"],
          "specific_note": "喝啤酒時用",
          "segments": [{ "text": "Prost", "meaning": "乾杯", "tail": "!" }]
        },
        {
          "term_target": "Zum Wohl!",
          "pronunciation": ["/t͡sʊm voːl/"],
          "specific_note": "喝葡萄酒時用",
          "segments": [
            { "text": "Zum", "meaning": "致", "tail": " " },
            { "text": "Wohl", "meaning": "健康/福祉", "tail": "!" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Prost!",
          "translation": "乾杯！",
          "segments": [
            { "text": "Prost", "meaning": "乾杯", "tail": "!" }
          ]
        },
        {
          "sentence": "Auf unsere Freundschaft, Prost!",
          "translation": "敬我們的友誼，乾杯！",
          "segments": [
            { "text": "Auf", "meaning": "敬", "tail": " " },
            { "text": "unsere", "meaning": "我們的", "tail": " " },
            { "text": "Freundschaft", "meaning": "友誼", "tail": ", " },
            { "text": "Prost", "meaning": "乾杯", "tail": "!" }
          ]
        },
        {
          "sentence": "Zum Wohl!",
          "translation": "祝您健康！(高級餐廳喝葡萄酒時的優雅說法)",
          "segments": [
            { "text": "Zum", "meaning": "致", "tail": " " },
            { "text": "Wohl", "meaning": "健康", "tail": "!" }
          ]
        }
      ],
      "usage_note": "德國喝酒文化最重要的一環：碰杯說 Prost 的時候，眼睛一定要「直視對方的眼睛」，不然德國人會覺得你不禮貌喔！",
      "image_file": "cheers.png"
    },
    {
      "id": "greet-030",
      "term_zh": "開動囉 / 祝你胃口好",
      "related_terms": [
        {
          "term_target": "Guten Appetit",
          "pronunciation": ["/ˈɡuːtən apəˈtiːt/"],
          "specific_note": "",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Appetit", "meaning": "胃口", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Guten Appetit!",
          "translation": "請慢用 / 開動囉！",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Appetit", "meaning": "胃口", "tail": "!" }
          ]
        },
        {
          "sentence": "Danke, gleichfalls!",
          "translation": "謝謝，你也一樣！(別人對你說 Guten Appetit 時的最佳回應)",
          "segments": [
            { "text": "Danke", "meaning": "謝謝", "tail": ", " },
            { "text": "gleichfalls", "meaning": "同樣地", "tail": "!" }
          ]
        },
        {
          "sentence": "Lass es dir schmecken!",
          "translation": "祝你用餐愉快！(直譯：讓它對你來說是美味的)",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "dir", "meaning": "對你", "tail": " " },
            { "text": "schmecken", "meaning": "嚐起來美味", "tail": "!" }
          ]
        }
      ],
      "usage_note": "不管是在餐廳、公司食堂還是別人家裡，只要大家坐下來準備吃飯，第一句話一定是大聲說 Guten Appetit！",
      "image_file": "enjoy_meal.png"
    }
  ]
},
{
  "id": "pronouns",
  "name": "主詞（代名詞）",
  "items": [
    {
      "id": "pro-01",
      "term_zh": "它",
      "related_terms": [
        {
          "term_target": "Itu / Ini",
          "pronunciation": [
            "/i.tu/",
            "/i.ni/"
          ],
          "specific_note": "它/那/這",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那個",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Di luar sedang hujan.",
          "translation": "外面正在下雨 (印尼語通常省略虛主詞 It)。",
          "segments": [
            {
              "text": "Di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "luar",
              "meaning": "外面",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "hujan",
              "meaning": "下雨",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Itu kucing saya.",
          "translation": "它(那)是我的貓。",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那/它",
              "tail": " "
            },
            {
              "text": "kucing",
              "meaning": "貓",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語沒有專指動物或物品的「它」，通常用「這/那」或直接講名詞。",
      "image_file": "that.png"
    },
    {
      "id": "pro-02",
      "term_zh": "我",
      "related_terms": [
        {
          "term_target": "Saya",
          "pronunciation": [
            "/sa.ja/"
          ],
          "specific_note": "正式/標準",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "Aku",
          "pronunciation": [
            "/a.ku/"
          ],
          "specific_note": "非正式/親密",
          "segments": [
            {
              "text": "Aku",
              "meaning": "我",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya seorang mahasiswa.",
          "translation": "我是一名大學生。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "seorang",
              "meaning": "一位(量詞)",
              "tail": " "
            },
            {
              "text": "mahasiswa",
              "meaning": "大學生",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya suka baca buku.",
          "translation": "我喜歡看書。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "baca",
              "meaning": "讀",
              "tail": " "
            },
            {
              "text": "buku",
              "meaning": "書",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Aku nggak tahu.",
          "translation": "我不知道 (口語)。",
          "segments": [
            {
              "text": "Aku",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "nggak",
              "meaning": "不(tidak的縮寫)",
              "tail": " "
            },
            {
              "text": "tahu",
              "meaning": "知道",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "跟陌生人或長輩請務必用 Saya。",
      "image_file": "i.png"
    },
    {
      "id": "pro-03",
      "term_zh": "你",
      "related_terms": [
        {
          "term_target": "Kamu",
          "pronunciation": [
            "/ka.mu/"
          ],
          "specific_note": "普通/朋友",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "Anda",
          "pronunciation": [
            "/an.da/"
          ],
          "specific_note": "尊稱/正式",
          "segments": [
            {
              "text": "Anda",
              "meaning": "您",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kamu baik sekali.",
          "translation": "你人真好。",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "好/善良",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu mau ke mana?",
          "translation": "你要去哪裡？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要/要",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去/往",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Siapa nama Anda?",
          "translation": "請問您貴姓大名？(正式)",
          "segments": [
            {
              "text": "Siapa",
              "meaning": "誰",
              "tail": " "
            },
            {
              "text": "nama",
              "meaning": "名字",
              "tail": " "
            },
            {
              "text": "Anda",
              "meaning": "您",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "對長輩避免直接說 Kamu，通常直接稱呼對方的頭銜 (如 Pak/Bu)。",
      "image_file": "you.png"
    },
    {
      "id": "pro-04",
      "term_zh": "他",
      "related_terms": [
        {
          "term_target": "Dia",
          "pronunciation": [
            "/di.a/"
          ],
          "specific_note": "通用(不分性別)",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他/她",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dia ayah saya.",
          "translation": "他是我父親。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "ayah",
              "meaning": "父親",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia jago main basket.",
          "translation": "他很會打籃球。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "jago",
              "meaning": "擅長/高手",
              "tail": " "
            },
            {
              "text": "main",
              "meaning": "玩/打",
              "tail": " "
            },
            {
              "text": "basket",
              "meaning": "籃球",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia ikut nggak?",
          "translation": "他要一起來嗎？",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "ikut",
              "meaning": "跟隨/參加",
              "tail": " "
            },
            {
              "text": "nggak",
              "meaning": "不/嗎(口語)",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Dia 同時代表「他」與「她」。",
      "image_file": "he.png"
    },
    {
      "id": "pro-05",
      "term_zh": "他的",
      "related_terms": [
        {
          "term_target": "-nya",
          "pronunciation": [
            "/ɲa/"
          ],
          "specific_note": "字尾",
          "segments": [
            {
              "text": "-nya",
              "meaning": "他的/她的",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini mobilnya.",
          "translation": "這是他的車。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "mobilnya",
              "meaning": "車+他的",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Siapa namanya?",
          "translation": "他叫什麼名字？",
          "segments": [
            {
              "text": "Siapa",
              "meaning": "誰",
              "tail": " "
            },
            {
              "text": "namanya",
              "meaning": "名字+他的",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Keluarganya tinggal di Bali.",
          "translation": "他的家人住在峇里島。",
          "segments": [
            {
              "text": "Keluarganya",
              "meaning": "家人+他的",
              "tail": " "
            },
            {
              "text": "tinggal",
              "meaning": "住",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "Bali",
              "meaning": "峇里島",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "直接黏在名詞後面，例如 Nama (名字) -> Namanya (他的名字)。",
      "image_file": "his.png"
    },
    {
      "id": "pro-06",
      "term_zh": "我們",
      "related_terms": [
        {
          "term_target": "Kita",
          "pronunciation": [
            "/ki.ta/"
          ],
          "specific_note": "包含聽話者",
          "segments": [
            {
              "text": "Kita",
              "meaning": "咱們/我們",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "Kami",
          "pronunciation": [
            "/ka.mi/"
          ],
          "specific_note": "不含聽話者",
          "segments": [
            {
              "text": "Kami",
              "meaning": "我們(排除你)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kita adalah keluarga.",
          "translation": "我們是家人 (包含你在內)。",
          "segments": [
            {
              "text": "Kita",
              "meaning": "我們(包含)",
              "tail": " "
            },
            {
              "text": "adalah",
              "meaning": "是",
              "tail": " "
            },
            {
              "text": "keluarga",
              "meaning": "家人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kami harus pergi sekarang.",
          "translation": "我們得走了 (我不帶你走)。",
          "segments": [
            {
              "text": "Kami",
              "meaning": "我們(排除)",
              "tail": " "
            },
            {
              "text": "harus",
              "meaning": "必須",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "走/離開",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bisa kita pergi ke taman?",
          "translation": "我們可以去公園嗎？(邀對方一起)",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "kita",
              "meaning": "我們(包含)",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "taman",
              "meaning": "公園",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Kita = 咱們 (我和你)；Kami = 我們 (我和別人，不含你)。",
      "image_file": "we.png"
    },
    {
      "id": "pro-07",
      "term_zh": "她",
      "related_terms": [
        {
          "term_target": "Dia",
          "pronunciation": [
            "/di.a/"
          ],
          "specific_note": "通用(不分性別)",
          "segments": [
            {
              "text": "Dia",
              "meaning": "她/他",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dia ibu saya.",
          "translation": "她是我媽媽。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "她",
              "tail": " "
            },
            {
              "text": "ibu",
              "meaning": "媽媽",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia suka dengar musik.",
          "translation": "她喜歡聽音樂。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "她",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "dengar",
              "meaning": "聽",
              "tail": " "
            },
            {
              "text": "musik",
              "meaning": "音樂",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia seorang guru.",
          "translation": "她是一位老師。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "她",
              "tail": " "
            },
            {
              "text": "seorang",
              "meaning": "一位(量詞)",
              "tail": " "
            },
            {
              "text": "guru",
              "meaning": "老師",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "和「他」一樣都用 Dia。",
      "image_file": "she.png"
    },
    {
      "id": "pro-08",
      "term_zh": "他們",
      "related_terms": [
        {
          "term_target": "Mereka",
          "pronunciation": [
            "/mə.re.ka/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Mereka",
              "meaning": "他們",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mereka sedang belajar.",
          "translation": "他們正在唸書。",
          "segments": [
            {
              "text": "Mereka",
              "meaning": "他們",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "belajar",
              "meaning": "學習",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mereka teman-teman saya.",
          "translation": "他們是我的朋友們。",
          "segments": [
            {
              "text": "Mereka",
              "meaning": "他們",
              "tail": " "
            },
            {
              "text": "teman-teman",
              "meaning": "朋友們(複數)",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mereka di mana?",
          "translation": "他們在哪裡？",
          "segments": [
            {
              "text": "Mereka",
              "meaning": "他們",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "用於第三人稱複數。",
      "image_file": "they.png"
    },
    {
      "id": "pro-09",
      "term_zh": "這個",
      "related_terms": [
        {
          "term_target": "Ini",
          "pronunciation": [
            "/i.ni/"
          ],
          "specific_note": "近處",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這個",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini lagu favorit saya.",
          "translation": "這是我最喜歡的歌。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "lagu",
              "meaning": "歌曲",
              "tail": " "
            },
            {
              "text": "favorit",
              "meaning": "最喜愛的",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya mau beli ini.",
          "translation": "我想要買這個。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ini enak sekali.",
          "translation": "這個很好吃。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這個",
              "tail": " "
            },
            {
              "text": "enak",
              "meaning": "好吃/舒服",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "指靠近自己的東西。",
      "image_file": "this.png"
    },
    {
      "id": "pro-10",
      "term_zh": "那個",
      "related_terms": [
        {
          "term_target": "Itu",
          "pronunciation": [
            "/i.tu/"
          ],
          "specific_note": "遠處",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那個",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Itu bukan punya saya.",
          "translation": "那不是我的。",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "bukan",
              "meaning": "不是",
              "tail": " "
            },
            {
              "text": "punya",
              "meaning": "擁有/東西",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lihat burung itu.",
          "translation": "看那隻鳥。",
          "segments": [
            {
              "text": "Lihat",
              "meaning": "看",
              "tail": " "
            },
            {
              "text": "burung",
              "meaning": "鳥",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那個/那隻",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Itu kedengarannya bagus.",
          "translation": "那聽起來很棒。",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "kedengarannya",
              "meaning": "聽起來",
              "tail": " "
            },
            {
              "text": "bagus",
              "meaning": "棒/好",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "指離自己較遠的東西。",
      "image_file": "that.png"
    },
    {
      "id": "pro-11",
      "term_zh": "她的",
      "related_terms": [
        {
          "term_target": "-nya",
          "pronunciation": [
            "/ɲa/"
          ],
          "specific_note": "字尾",
          "segments": [
            {
              "text": "-nya",
              "meaning": "她的",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Rambutnya panjang.",
          "translation": "她的頭髮很長。",
          "segments": [
            {
              "text": "Rambutnya",
              "meaning": "頭髮+她的",
              "tail": " "
            },
            {
              "text": "panjang",
              "meaning": "長",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya suka gaunnya.",
          "translation": "我喜歡她的洋裝。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "gaunnya",
              "meaning": "洋裝+她的",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ini bukunya.",
          "translation": "這是她的書。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "bukunya",
              "meaning": "書+她的",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "與「他的」完全一樣，都用 -nya。",
      "image_file": "her.png"
    },
    {
      "id": "pro-12",
      "term_zh": "你的",
      "related_terms": [
        {
          "term_target": "-mu",
          "pronunciation": [
            "/mu/"
          ],
          "specific_note": "字尾(非正式)",
          "segments": [
            {
              "text": "-mu",
              "meaning": "你的",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Siapa namamu?",
          "translation": "你叫什麼名字？",
          "segments": [
            {
              "text": "Siapa",
              "meaning": "誰",
              "tail": " "
            },
            {
              "text": "namamu",
              "meaning": "名字+你的",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Ini HP-mu?",
          "translation": "這是你的手機嗎？",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "HP-mu",
              "meaning": "手機+你的",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Jangan lupa kuncimu.",
          "translation": "別忘了你的鑰匙。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別/不要",
              "tail": " "
            },
            {
              "text": "lupa",
              "meaning": "忘記",
              "tail": " "
            },
            {
              "text": "kuncimu",
              "meaning": "鑰匙+你的",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "熟人或朋友用 -mu。長輩用 Anda (Nama Anda)。",
      "image_file": "your.png"
    },
    {
      "id": "pro-13",
      "term_zh": "他們的",
      "related_terms": [
        {
          "term_target": "mereka",
          "pronunciation": [
            "/mə.re.ka/"
          ],
          "specific_note": "放在名詞後",
          "segments": [
            {
              "text": "mereka",
              "meaning": "他們的",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Rumah mereka besar.",
          "translation": "他們的房子很大。",
          "segments": [
            {
              "text": "Rumah",
              "meaning": "房子",
              "tail": " "
            },
            {
              "text": "mereka",
              "meaning": "他們的",
              "tail": " "
            },
            {
              "text": "besar",
              "meaning": "大",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya kenal orang tua mereka.",
          "translation": "我認識他們的父母。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "kenal",
              "meaning": "認識",
              "tail": " "
            },
            {
              "text": "orang tua",
              "meaning": "父母",
              "tail": " "
            },
            {
              "text": "mereka",
              "meaning": "他們的",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Anjing mereka lucu sekali.",
          "translation": "他們的狗很可愛。",
          "segments": [
            {
              "text": "Anjing",
              "meaning": "狗",
              "tail": " "
            },
            {
              "text": "mereka",
              "meaning": "他們的",
              "tail": " "
            },
            {
              "text": "lucu",
              "meaning": "可愛/好笑",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "直接放在名詞後面，如 Rumah mereka (房子+他們)。",
      "image_file": "their.png"
    },
    {
      "id": "pro-14",
      "term_zh": "我們的",
      "related_terms": [
        {
          "term_target": "kami / kita",
          "pronunciation": [
            "/ka.mi/",
            "/ki.ta/"
          ],
          "specific_note": "放在名詞後",
          "segments": [
            {
              "text": "kami",
              "meaning": "我們的(排除)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini sekolah kita.",
          "translation": "這是我們的學校 (也是你的學校)。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "sekolah",
              "meaning": "學校",
              "tail": " "
            },
            {
              "text": "kita",
              "meaning": "咱們的",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Selamat datang di rumah kami.",
          "translation": "歡迎來我們家 (你不是家人)。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "datang",
              "meaning": "來",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "rumah",
              "meaning": "家/房子",
              "tail": " "
            },
            {
              "text": "kami",
              "meaning": "我們的(排除你)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tim kita menang.",
          "translation": "我們這隊贏了。",
          "segments": [
            {
              "text": "Tim",
              "meaning": "隊伍",
              "tail": " "
            },
            {
              "text": "kita",
              "meaning": "我們的",
              "tail": " "
            },
            {
              "text": "menang",
              "meaning": "贏",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "同樣需區分 Kami (不含你) 與 Kita (包含你)。",
      "image_file": "our.png"
    },
    {
      "id": "pro-15",
      "term_zh": "這些",
      "related_terms": [
        {
          "term_target": "Ini",
          "pronunciation": [
            "/i.ni/"
          ],
          "specific_note": "複數同形",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這/這些",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Apel-apel ini manis.",
          "translation": "這些蘋果很甜。",
          "segments": [
            {
              "text": "Apel-apel",
              "meaning": "蘋果們(複數)",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "manis",
              "meaning": "甜",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Apa ini punya kamu?",
          "translation": "這些是你的嗎？",
          "segments": [
            {
              "text": "Apa",
              "meaning": "是否",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這些",
              "tail": " "
            },
            {
              "text": "punya",
              "meaning": "屬於",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya suka sepatu ini.",
          "translation": "我喜歡這雙鞋。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "sepatu",
              "meaning": "鞋子",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語「這」與「這些」都是 Ini，複數通常透過名詞重複表示 (Apel-apel)。",
      "image_file": "these.png"
    },
    {
      "id": "pro-16",
      "term_zh": "那些",
      "related_terms": [
        {
          "term_target": "Itu",
          "pronunciation": [
            "/i.tu/"
          ],
          "specific_note": "複數同形",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那/那些",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bunga-bunga itu cantik.",
          "translation": "那些花很漂亮。",
          "segments": [
            {
              "text": "Bunga-bunga",
              "meaning": "花朵們(複數)",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "cantik",
              "meaning": "漂亮",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Siapa orang-orang itu?",
          "translation": "那些人是誰？",
          "segments": [
            {
              "text": "Siapa",
              "meaning": "誰",
              "tail": " "
            },
            {
              "text": "orang-orang",
              "meaning": "人們",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那些",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya mau kue-kue itu.",
          "translation": "我想要那些餅乾。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "kue-kue",
              "meaning": "餅乾/糕點(複數)",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那些",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語「那」與「那些」都是 Itu，複數透過名詞重複表示。",
      "image_file": "those.png"
    }
  ]
},
{
  "id": "verbs",
  "name": "核心動詞",
  "items": [
    {
      "id": "v-01",
      "term_zh": "是",
      "related_terms": [
        {
          "term_target": "adalah",
          "pronunciation": [
            "/a.da.lah/"
          ],
          "specific_note": "正式(常省略)",
          "segments": [
            {
              "text": "adalah",
              "meaning": "是",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya senang.",
          "translation": "我是快樂的 (印尼語省略 Be 動詞)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "senang",
              "meaning": "快樂",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia guru.",
          "translation": "他是一位老師 (名詞前也常省略)。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "guru",
              "meaning": "老師",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Itu benar.",
          "translation": "那是對的。",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "benar",
              "meaning": "正確/真的",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語中，主詞和形容詞/名詞中間通常不需要加動詞。",
      "image_file": "be.png"
    },
    {
      "id": "v-02",
      "term_zh": "有（擁有）",
      "related_terms": [
        {
          "term_target": "punya",
          "pronunciation": [
            "/pu.ɲa/"
          ],
          "specific_note": "擁有",
          "segments": [
            {
              "text": "punya",
              "meaning": "擁有",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "ada",
          "pronunciation": [
            "/a.da/"
          ],
          "specific_note": "存在/那裡有",
          "segments": [
            {
              "text": "ada",
              "meaning": "有/在",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya punya mobil.",
          "translation": "我有一台車。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "punya",
              "meaning": "擁有",
              "tail": " "
            },
            {
              "text": "mobil",
              "meaning": "車",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ada pertanyaan?",
          "translation": "有問題嗎？(指問題是否存在)",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "pertanyaan",
              "meaning": "問題",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kamu punya uang?",
          "translation": "你有錢嗎？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "punya",
              "meaning": "擁有",
              "tail": " "
            },
            {
              "text": "uang",
              "meaning": "錢",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "持有物品用 Punya，問地方有沒有人用 Ada。",
      "image_file": "have.png"
    },
    {
      "id": "v-03",
      "term_zh": "去",
      "related_terms": [
        {
          "term_target": "pergi",
          "pronunciation": [
            "/pər.gi/"
          ],
          "specific_note": "離開去某處",
          "segments": [
            {
              "text": "pergi",
              "meaning": "去",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "ke",
          "pronunciation": [
            "/kə/"
          ],
          "specific_note": "往/去(介係詞)",
          "segments": [
            {
              "text": "ke",
              "meaning": "去/往",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya pergi ke kantor.",
          "translation": "我去辦公室。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "kantor",
              "meaning": "辦公室",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ayo pergi!",
          "translation": "我們走吧！",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來吧",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "走/去",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Mau ke mana?",
          "translation": "要去哪裡？(口語最常用)",
          "segments": [
            {
              "text": "Mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "口語常省略 Pergi，直接說 Mau ke...(想要去...)。",
      "image_file": "go.png"
    },
    {
      "id": "v-04",
      "term_zh": "得到／拿",
      "related_terms": [
        {
          "term_target": "dapat",
          "pronunciation": [
            "/da.pat/"
          ],
          "specific_note": "獲得",
          "segments": [
            {
              "text": "dapat",
              "meaning": "得到",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "ambil",
          "pronunciation": [
            "/am.bɪl/"
          ],
          "specific_note": "拿取",
          "segments": [
            {
              "text": "ambil",
              "meaning": "拿",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya dapat hadiah.",
          "translation": "我收到了禮物。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "dapat",
              "meaning": "得到",
              "tail": " "
            },
            {
              "text": "hadiah",
              "meaning": "禮物",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sudah dapat?",
          "translation": "得到了嗎？/拿到了嗎？",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "dapat",
              "meaning": "得到",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Tolong ambil buku itu.",
          "translation": "請幫我拿那本書。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請/幫忙",
              "tail": " "
            },
            {
              "text": "ambil",
              "meaning": "拿",
              "tail": " "
            },
            {
              "text": "buku",
              "meaning": "書",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那本",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Dapat 是被動收到，Ambil 是主動去拿。",
      "image_file": "get.png"
    },
    {
      "id": "v-05",
      "term_zh": "做",
      "related_terms": [
        {
          "term_target": "lakukan",
          "pronunciation": [
            "/la.ku.kan/"
          ],
          "specific_note": "執行",
          "segments": [
            {
              "text": "lakukan",
              "meaning": "做",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lagi ngapain?",
          "translation": "正在做什麼？(口語必學)",
          "segments": [
            {
              "text": "Lagi",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "ngapain",
              "meaning": "幹嘛/做什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kerjakan PR.",
          "translation": "做功課。",
          "segments": [
            {
              "text": "Kerjakan",
              "meaning": "做(工作/任務)",
              "tail": " "
            },
            {
              "text": "PR",
              "meaning": "功課 (Pekerjaan Rumah)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lakukan saja.",
          "translation": "做就對了。",
          "segments": [
            {
              "text": "Lakukan",
              "meaning": "執行/做",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "就",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語常用 Ngapain (正在幹嘛)。",
      "image_file": "do.png"
    },
    {
      "id": "v-06",
      "term_zh": "說（講）",
      "related_terms": [
        {
          "term_target": "bilang",
          "pronunciation": [
            "/bi.laŋ/"
          ],
          "specific_note": "口語常用",
          "segments": [
            {
              "text": "bilang",
              "meaning": "說",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dia bilang apa?",
          "translation": "他說了什麼？",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "bilang",
              "meaning": "說",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Jangan bilang siapa-siapa.",
          "translation": "別告訴任何人。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "bilang",
              "meaning": "說",
              "tail": " "
            },
            {
              "text": "siapa-siapa",
              "meaning": "誰/任何人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bilang halo.",
          "translation": "說你好 (打招呼)。",
          "segments": [
            {
              "text": "Bilang",
              "meaning": "說",
              "tail": " "
            },
            {
              "text": "halo",
              "meaning": "你好",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Bilang 是最通俗的「說」。",
      "image_file": "say.png"
    },
    {
      "id": "v-07",
      "term_zh": "知道",
      "related_terms": [
        {
          "term_target": "tahu",
          "pronunciation": [
            "/ta.u/"
          ],
          "specific_note": "曉得事實",
          "segments": [
            {
              "text": "tahu",
              "meaning": "知道",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "kenal",
          "pronunciation": [
            "/kə.nal/"
          ],
          "specific_note": "認識人",
          "segments": [
            {
              "text": "kenal",
              "meaning": "認識",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya tahu.",
          "translation": "我知道。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tahu",
              "meaning": "知道",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Aku nggak tau.",
          "translation": "我不知道 (口語發音為 Tau)。",
          "segments": [
            {
              "text": "Aku",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "nggak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "tau",
              "meaning": "知道(口語拼法)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu kenal dia?",
          "translation": "你認識他嗎？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "kenal",
              "meaning": "認識",
              "tail": " "
            },
            {
              "text": "dia",
              "meaning": "他",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Tahu 的 h 不發音，聽起來像 Tau。",
      "image_file": "know.png"
    },
    {
      "id": "v-08",
      "term_zh": "想／思考",
      "related_terms": [
        {
          "term_target": "pikir",
          "pronunciation": [
            "/pi.kɪr/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "pikir",
              "meaning": "想",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya pikir begitu.",
          "translation": "我想是這樣 (我覺得如此)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "pikir",
              "meaning": "想/認為",
              "tail": " "
            },
            {
              "text": "begitu",
              "meaning": "那樣",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pikir dulu.",
          "translation": "先想一想。",
          "segments": [
            {
              "text": "Pikir",
              "meaning": "思考",
              "tail": " "
            },
            {
              "text": "dulu",
              "meaning": "先/從前",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Menurutmu bagaimana?",
          "translation": "你覺得呢？(問想法)",
          "segments": [
            {
              "text": "Menurutmu",
              "meaning": "依照你/據你說",
              "tail": " "
            },
            {
              "text": "bagaimana",
              "meaning": "如何",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Saya pikir 用於表達「我的觀點」。",
      "image_file": "think.png"
    },
    {
      "id": "v-09",
      "term_zh": "看見",
      "related_terms": [
        {
          "term_target": "lihat",
          "pronunciation": [
            "/li.hat/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "lihat",
              "meaning": "看",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lihat itu!",
          "translation": "看那個！",
          "segments": [
            {
              "text": "Lihat",
              "meaning": "看",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那個",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Bisa lihat?",
          "translation": "看得到嗎？",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "能夠",
              "tail": " "
            },
            {
              "text": "lihat",
              "meaning": "看",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya tidak lihat.",
          "translation": "我沒看到。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "沒有",
              "tail": " "
            },
            {
              "text": "lihat",
              "meaning": "看",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語有時會簡化成 Liat。",
      "image_file": "see.png"
    },
    {
      "id": "v-10",
      "term_zh": "做出（製造）",
      "related_terms": [
        {
          "term_target": "bikin",
          "pronunciation": [
            "/bi.kɪn/"
          ],
          "specific_note": "口語",
          "segments": [
            {
              "text": "bikin",
              "meaning": "做/弄",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "membuat",
          "pronunciation": [
            "/məm.bu.at/"
          ],
          "specific_note": "正式",
          "segments": [
            {
              "text": "membuat",
              "meaning": "製作",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bikin kopi.",
          "translation": "泡咖啡。",
          "segments": [
            {
              "text": "Bikin",
              "meaning": "弄/做",
              "tail": " "
            },
            {
              "text": "kopi",
              "meaning": "咖啡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ibu membuat kue.",
          "translation": "媽媽做蛋糕。",
          "segments": [
            {
              "text": "Ibu",
              "meaning": "媽媽",
              "tail": " "
            },
            {
              "text": "membuat",
              "meaning": "製作",
              "tail": " "
            },
            {
              "text": "kue",
              "meaning": "蛋糕/糕點",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jangan bikin ribut.",
          "translation": "不要製造吵鬧。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "bikin",
              "meaning": "製造",
              "tail": " "
            },
            {
              "text": "ribut",
              "meaning": "吵鬧",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "日常生活中 Bikin 比 Membuat 更常用。",
      "image_file": "make.png"
    },
    {
      "id": "v-11",
      "term_zh": "來",
      "related_terms": [
        {
          "term_target": "datang",
          "pronunciation": [
            "/da.taŋ/"
          ],
          "specific_note": "抵達",
          "segments": [
            {
              "text": "datang",
              "meaning": "來",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sini!",
          "translation": "來這裡！(Ke sini 的簡稱)",
          "segments": [
            {
              "text": "Sini",
              "meaning": "這裡",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Dia belum datang.",
          "translation": "他還沒來。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "belum",
              "meaning": "尚未/還沒",
              "tail": " "
            },
            {
              "text": "datang",
              "meaning": "來",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Selamat datang.",
          "translation": "歡迎光臨 (祝賀來到)。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "datang",
              "meaning": "來",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "叫人過來通常直接說 Sini (這裡)。",
      "image_file": "come.png"
    },
    {
      "id": "v-12",
      "term_zh": "需要",
      "related_terms": [
        {
          "term_target": "butuh",
          "pronunciation": [
            "/bu.tuh/"
          ],
          "specific_note": "迫切",
          "segments": [
            {
              "text": "butuh",
              "meaning": "需要",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "perlu",
          "pronunciation": [
            "/pər.lu/"
          ],
          "specific_note": "必要",
          "segments": [
            {
              "text": "perlu",
              "meaning": "需要",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya butuh air.",
          "translation": "我需要水。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "butuh",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "air",
              "meaning": "水",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Butuh bantuan?",
          "translation": "需要幫忙嗎？",
          "segments": [
            {
              "text": "Butuh",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "bantuan",
              "meaning": "幫忙/援助",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Tidak perlu.",
          "translation": "不需要 / 不用。",
          "segments": [
            {
              "text": "Tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "perlu",
              "meaning": "需要",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Butuh 比 Perlu 語氣更強烈一點。",
      "image_file": "need.png"
    },
    {
      "id": "v-13",
      "term_zh": "使用",
      "related_terms": [
        {
          "term_target": "pakai",
          "pronunciation": [
            "/pa.kai/"
          ],
          "specific_note": "口語/通用",
          "segments": [
            {
              "text": "pakai",
              "meaning": "用/穿/戴",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pakai ini saja.",
          "translation": "用這個就好。",
          "segments": [
            {
              "text": "Pakai",
              "meaning": "用",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "僅/就",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Boleh pakai HP?",
          "translation": "可以用手機嗎？",
          "segments": [
            {
              "text": "Boleh",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "pakai",
              "meaning": "用",
              "tail": " "
            },
            {
              "text": "HP",
              "meaning": "手機",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Cara pakainya bagaimana?",
          "translation": "這要怎麼用？(使用方法)",
          "segments": [
            {
              "text": "Cara",
              "meaning": "方法",
              "tail": " "
            },
            {
              "text": "pakainya",
              "meaning": "用它",
              "tail": " "
            },
            {
              "text": "bagaimana",
              "meaning": "如何",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Pakai 萬用詞，穿衣服、戴帽子、用工具都用它。",
      "image_file": "use.png"
    },
    {
      "id": "v-14",
      "term_zh": "找到",
      "related_terms": [
        {
          "term_target": "ketemu",
          "pronunciation": [
            "/kə.tə.mu/"
          ],
          "specific_note": "遇見/發現",
          "segments": [
            {
              "text": "ketemu",
              "meaning": "找到/見到",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sudah ketemu!",
          "translation": "已經找到了！",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "ketemu",
              "meaning": "找到",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Nggak ketemu.",
          "translation": "找不到 / 沒找到。",
          "segments": [
            {
              "text": "Nggak",
              "meaning": "沒",
              "tail": " "
            },
            {
              "text": "ketemu",
              "meaning": "找到",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya cari kerja.",
          "translation": "我在找工作 (尋找過程用 Cari)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "cari",
              "meaning": "尋找",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Cari 是「尋找」的動作，Ketemu 是「找到」的結果。",
      "image_file": "find.png"
    },
    {
      "id": "v-15",
      "term_zh": "給",
      "related_terms": [
        {
          "term_target": "kasih",
          "pronunciation": [
            "/ka.sɪh/"
          ],
          "specific_note": "口語常用",
          "segments": [
            {
              "text": "kasih",
              "meaning": "給",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kasih saya itu.",
          "translation": "給我那個。",
          "segments": [
            {
              "text": "Kasih",
              "meaning": "給",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那個",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya mau kasih kado.",
          "translation": "我想要送(給)禮物。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "給",
              "tail": " "
            },
            {
              "text": "kado",
              "meaning": "禮物",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jangan menyerah.",
          "translation": "永不放棄 (這裡不用 Give)。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "menyerah",
              "meaning": "投降/放棄",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "正式場合用 Memberi，日常生活用 Kasih。",
      "image_file": "give.png"
    },
    {
      "id": "v-16",
      "term_zh": "告訴",
      "related_terms": [
        {
          "term_target": "kasih tahu",
          "pronunciation": [
            "/ka.sɪh ta.u/"
          ],
          "specific_note": "口語(給知道)",
          "segments": [
            {
              "text": "kasih",
              "meaning": "給",
              "tail": " "
            },
            {
              "text": "tahu",
              "meaning": "知道",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kasih tahu saya.",
          "translation": "告訴我。",
          "segments": [
            {
              "text": "Kasih",
              "meaning": "給",
              "tail": " "
            },
            {
              "text": "tahu",
              "meaning": "知道",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tolong beritahu dia.",
          "translation": "請告訴他。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請",
              "tail": " "
            },
            {
              "text": "beritahu",
              "meaning": "告知",
              "tail": " "
            },
            {
              "text": "dia",
              "meaning": "他",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jujur saja.",
          "translation": "老實說 (Tell the truth)。",
          "segments": [
            {
              "text": "Jujur",
              "meaning": "誠實",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "就",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Kasih tahu 字面意思是「給...知道」，就是告訴。",
      "image_file": "tell.png"
    },
    {
      "id": "v-17",
      "term_zh": "工作",
      "related_terms": [
        {
          "term_target": "kerja",
          "pronunciation": [
            "/kər.dʒa/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya kerja di bank.",
          "translation": "我在銀行工作。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "bank",
              "meaning": "銀行",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia kerja keras.",
          "translation": "他工作很努力。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": " "
            },
            {
              "text": "keras",
              "meaning": "硬/努力",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ini rusak.",
          "translation": "這個壞了 (doesn't work)。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這個",
              "tail": " "
            },
            {
              "text": "rusak",
              "meaning": "壞掉",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "物品運作正常通常說 Jalan (走) 或 Berfungsi (功能)。",
      "image_file": "work.png"
    },
    {
      "id": "v-18",
      "term_zh": "喜歡",
      "related_terms": [
        {
          "term_target": "suka",
          "pronunciation": [
            "/su.ka/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya suka nasi goreng.",
          "translation": "我喜歡炒飯。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "nasi",
              "meaning": "飯",
              "tail": " "
            },
            {
              "text": "goreng",
              "meaning": "炒/炸",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu suka?",
          "translation": "你喜歡嗎？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya suka dia.",
          "translation": "我喜歡他/她。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "dia",
              "meaning": "他",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Suka 也可以用來表示「經常」做某事。",
      "image_file": "like.png"
    },
    {
      "id": "v-19",
      "term_zh": "起床",
      "related_terms": [
        {
          "term_target": "bangun",
          "pronunciation": [
            "/ba.ŋun/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "bangun",
              "meaning": "起床/醒",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bangun!",
          "translation": "起床！",
          "segments": [
            {
              "text": "Bangun",
              "meaning": "起來",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Saya bangun jam 7.",
          "translation": "我七點起床。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "bangun",
              "meaning": "起床",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "點鐘",
              "tail": " "
            },
            {
              "text": "7",
              "meaning": "七",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bangun kesiangan.",
          "translation": "睡過頭了。",
          "segments": [
            {
              "text": "Bangun",
              "meaning": "起床",
              "tail": " "
            },
            {
              "text": "kesiangan",
              "meaning": "太晚/睡過頭",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Bangun 也有「建造」的意思，但在日常作息指起床。",
      "image_file": "wake_up.png"
    },
    {
      "id": "v-20",
      "term_zh": "說話",
      "related_terms": [
        {
          "term_target": "bicara",
          "pronunciation": [
            "/bi.tʃa.ra/"
          ],
          "specific_note": "講話(能力)",
          "segments": [
            {
              "text": "bicara",
              "meaning": "說話",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bisa bicara Inggris?",
          "translation": "會說英文嗎？",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "能夠",
              "tail": " "
            },
            {
              "text": "bicara",
              "meaning": "說話",
              "tail": " "
            },
            {
              "text": "Inggris",
              "meaning": "英國/英文",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Boleh saya bicara dengan Tom?",
          "translation": "我可以跟 Tom 說話嗎？",
          "segments": [
            {
              "text": "Boleh",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "bicara",
              "meaning": "說話",
              "tail": " "
            },
            {
              "text": "dengan",
              "meaning": "跟/和",
              "tail": " "
            },
            {
              "text": "Tom",
              "meaning": "湯姆",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Jangan bicara keras-keras.",
          "translation": "別講那麼大聲。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "bicara",
              "meaning": "說話",
              "tail": " "
            },
            {
              "text": "keras-keras",
              "meaning": "硬/大聲",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Ngomong 是更口語的說法 (如：Ngomong apa? 說什麼？)。",
      "image_file": "speak.png"
    },
    {
      "id": "v-21",
      "term_zh": "聽見",
      "related_terms": [
        {
          "term_target": "dengar",
          "pronunciation": [
            "/də.ŋar/"
          ],
          "specific_note": "聽見/聽到",
          "segments": [
            {
              "text": "dengar",
              "meaning": "聽",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bisa dengar saya?",
          "translation": "聽得到我嗎？",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "能夠",
              "tail": " "
            },
            {
              "text": "dengar",
              "meaning": "聽見",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya tidak dengar.",
          "translation": "我沒聽到。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "沒有",
              "tail": " "
            },
            {
              "text": "dengar",
              "meaning": "聽見",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dengar itu?",
          "translation": "有聽到那個嗎？",
          "segments": [
            {
              "text": "Dengar",
              "meaning": "聽見",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那個",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "聽音樂則是用 Mendengarkan (聆聽)。",
      "image_file": "hear.png"
    },
    {
      "id": "v-22",
      "term_zh": "寫",
      "related_terms": [
        {
          "term_target": "tulis",
          "pronunciation": [
            "/tu.lɪs/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tulis",
              "meaning": "寫",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tulis nama kamu.",
          "translation": "寫下你的名字。",
          "segments": [
            {
              "text": "Tulis",
              "meaning": "寫",
              "tail": " "
            },
            {
              "text": "nama",
              "meaning": "名字",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tolong tulis di sini.",
          "translation": "麻煩寫在這裡。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請/幫忙",
              "tail": " "
            },
            {
              "text": "tulis",
              "meaning": "寫",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia suka menulis.",
          "translation": "她喜歡寫作。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "她",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "menulis",
              "meaning": "寫作(正式)",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Tulis 是詞根，Menulis 是完整動詞形式。",
      "image_file": "write.png"
    },
    {
      "id": "v-23",
      "term_zh": "閱讀",
      "related_terms": [
        {
          "term_target": "baca",
          "pronunciation": [
            "/ba.tʃa/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "baca",
              "meaning": "讀",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Baca buku.",
          "translation": "讀書/看書。",
          "segments": [
            {
              "text": "Baca",
              "meaning": "讀",
              "tail": " "
            },
            {
              "text": "buku",
              "meaning": "書",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya suka baca berita.",
          "translation": "我喜歡看新聞。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "baca",
              "meaning": "讀",
              "tail": " "
            },
            {
              "text": "berita",
              "meaning": "新聞",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bisa baca ini?",
          "translation": "你看得懂(讀)這個嗎？",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "能夠",
              "tail": " "
            },
            {
              "text": "baca",
              "meaning": "讀",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Baca 既指朗讀也指閱讀。",
      "image_file": "read.png"
    },
    {
      "id": "v-24",
      "term_zh": "等待",
      "related_terms": [
        {
          "term_target": "tunggu",
          "pronunciation": [
            "/tuŋ.gu/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tunggu",
              "meaning": "等",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tunggu sebentar.",
          "translation": "等一下。",
          "segments": [
            {
              "text": "Tunggu",
              "meaning": "等",
              "tail": " "
            },
            {
              "text": "sebentar",
              "meaning": "一會兒",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tunggu saya.",
          "translation": "等我。",
          "segments": [
            {
              "text": "Tunggu",
              "meaning": "等",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya sedang tunggu teman.",
          "translation": "我正在等朋友。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "tunggu",
              "meaning": "等",
              "tail": " "
            },
            {
              "text": "teman",
              "meaning": "朋友",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "打電話時請對方等一下也說 Tunggu sebentar。",
      "image_file": "wait.png"
    },
    {
      "id": "v-25",
      "term_zh": "嘗試",
      "related_terms": [
        {
          "term_target": "coba",
          "pronunciation": [
            "/tʃo.ba/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "coba",
              "meaning": "試",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Coba ini.",
          "translation": "試試這個 (吃吃看/穿穿看)。",
          "segments": [
            {
              "text": "Coba",
              "meaning": "嘗試",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Coba lagi.",
          "translation": "再試一次。",
          "segments": [
            {
              "text": "Coba",
              "meaning": "試",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "再/又",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya mau coba.",
          "translation": "我想要試試看。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "coba",
              "meaning": "嘗試",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Coba 也常用於句首表示「試著...」。",
      "image_file": "try.png"
    },
    {
      "id": "v-26",
      "term_zh": "付錢",
      "related_terms": [
        {
          "term_target": "bayar",
          "pronunciation": [
            "/ba.jar/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "bayar",
              "meaning": "付錢",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bayar di mana?",
          "translation": "在哪裡付錢？",
          "segments": [
            {
              "text": "Bayar",
              "meaning": "付錢",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya yang bayar.",
          "translation": "我來付 (我請客)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "yang",
              "meaning": "那個...的人(強調)",
              "tail": " "
            },
            {
              "text": "bayar",
              "meaning": "付錢",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Berapa harus bayar?",
          "translation": "要付多少錢？",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "harus",
              "meaning": "必須",
              "tail": " "
            },
            {
              "text": "bayar",
              "meaning": "付",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "結帳時也可以說 Minta bon (請給帳單)。",
      "image_file": "pay.png"
    },
    {
      "id": "v-27",
      "term_zh": "選擇",
      "related_terms": [
        {
          "term_target": "pilih",
          "pronunciation": [
            "/pi.lɪh/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "pilih",
              "meaning": "選",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pilih satu.",
          "translation": "選一個。",
          "segments": [
            {
              "text": "Pilih",
              "meaning": "選",
              "tail": " "
            },
            {
              "text": "satu",
              "meaning": "一",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Susah pilih.",
          "translation": "很難選。",
          "segments": [
            {
              "text": "Susah",
              "meaning": "困難",
              "tail": " "
            },
            {
              "text": "pilih",
              "meaning": "選擇",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu pilih yang mana?",
          "translation": "你選哪一個？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "pilih",
              "meaning": "選",
              "tail": " "
            },
            {
              "text": "yang",
              "meaning": "那個",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡/哪個",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "挑選東西時用。",
      "image_file": "choose.png"
    },
    {
      "id": "v-28",
      "term_zh": "進入",
      "related_terms": [
        {
          "term_target": "masuk",
          "pronunciation": [
            "/ma.sʊk/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "masuk",
              "meaning": "進",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Silakan masuk.",
          "translation": "請進。",
          "segments": [
            {
              "text": "Silakan",
              "meaning": "請(邀請)",
              "tail": " "
            },
            {
              "text": "masuk",
              "meaning": "進入",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dilarang masuk.",
          "translation": "禁止進入。",
          "segments": [
            {
              "text": "Dilarang",
              "meaning": "被禁止",
              "tail": " "
            },
            {
              "text": "masuk",
              "meaning": "進入",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Masukkan kata sandi.",
          "translation": "輸入密碼。",
          "segments": [
            {
              "text": "Masukkan",
              "meaning": "放入/輸入",
              "tail": " "
            },
            {
              "text": "kata sandi",
              "meaning": "密碼",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Masuk angin (進風) 指「受風寒/感冒」，是印尼特有概念。",
      "image_file": "enter.png"
    },
    {
      "id": "v-29",
      "term_zh": "住",
      "related_terms": [
        {
          "term_target": "tinggal",
          "pronunciation": [
            "/tiŋ.gal/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tinggal",
              "meaning": "住/留下",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya tinggal di sini.",
          "translation": "我住在這裡。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tinggal",
              "meaning": "住",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu tinggal di mana?",
          "translation": "你住在哪裡？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "tinggal",
              "meaning": "住",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Selamat tinggal.",
          "translation": "再見 (留下來的人對離開的人說)。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "tinggal",
              "meaning": "留步",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Tinggal 也有「遺留」或「剩下」的意思。",
      "image_file": "live.png"
    },
    {
      "id": "v-30",
      "term_zh": "到達",
      "related_terms": [
        {
          "term_target": "sampai",
          "pronunciation": [
            "/sam.pai/"
          ],
          "specific_note": "抵達",
          "segments": [
            {
              "text": "sampai",
              "meaning": "到達",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "tiba",
          "pronunciation": [
            "/ti.ba/"
          ],
          "specific_note": "較正式",
          "segments": [
            {
              "text": "tiba",
              "meaning": "抵達",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sudah sampai?",
          "translation": "到了嗎？(最常用)",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "sampai",
              "meaning": "到達",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kapan kita sampai?",
          "translation": "我們什麼時候到？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "kita",
              "meaning": "我們",
              "tail": " "
            },
            {
              "text": "sampai",
              "meaning": "到達",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya baru sampai.",
          "translation": "我剛到。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "baru",
              "meaning": "剛剛/新",
              "tail": " "
            },
            {
              "text": "sampai",
              "meaning": "到達",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "日常口語多用 Sampai。",
      "image_file": "arrive.png"
    },
    {
      "id": "v-31",
      "term_zh": "走路",
      "related_terms": [
        {
          "term_target": "jalan kaki",
          "pronunciation": [
            "/dʒa.lan ka.ki/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "jalan",
              "meaning": "走/路",
              "tail": " "
            },
            {
              "text": "kaki",
              "meaning": "腳",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya jalan kaki ke sekolah.",
          "translation": "我走路去學校。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "jalan",
              "meaning": "走",
              "tail": " "
            },
            {
              "text": "kaki",
              "meaning": "腳",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "sekolah",
              "meaning": "學校",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ayo jalan-jalan.",
          "translation": "我們去散散步/逛逛吧。",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來吧",
              "tail": " "
            },
            {
              "text": "jalan-jalan",
              "meaning": "散步/逛街",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jauh kalau jalan kaki.",
          "translation": "走路的話很遠。",
          "segments": [
            {
              "text": "Jauh",
              "meaning": "遠",
              "tail": " "
            },
            {
              "text": "kalau",
              "meaning": "如果",
              "tail": " "
            },
            {
              "text": "jalan",
              "meaning": "走",
              "tail": " "
            },
            {
              "text": "kaki",
              "meaning": "腳",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "單說 Jalan 也可以指「車子在走(行駛)」，Jalan kaki (走腳) 才是人走路。",
      "image_file": "walk.png"
    },
    {
      "id": "v-32",
      "term_zh": "打開",
      "related_terms": [
        {
          "term_target": "buka",
          "pronunciation": [
            "/bu.ka/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "buka",
              "meaning": "開",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Buka pintu.",
          "translation": "開門。",
          "segments": [
            {
              "text": "Buka",
              "meaning": "開",
              "tail": " "
            },
            {
              "text": "pintu",
              "meaning": "門",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Toko sudah buka?",
          "translation": "商店開了嗎？",
          "segments": [
            {
              "text": "Toko",
              "meaning": "商店",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "buka",
              "meaning": "開",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Buka bukumu.",
          "translation": "打開你的書。",
          "segments": [
            {
              "text": "Buka",
              "meaning": "打開",
              "tail": " "
            },
            {
              "text": "bukumu",
              "meaning": "書+你的",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "開燈不用 Buka，要用 Nyalakan 或 Hidupkan。",
      "image_file": "open.png"
    },
    {
      "id": "v-33",
      "term_zh": "關閉",
      "related_terms": [
        {
          "term_target": "tutup",
          "pronunciation": [
            "/tu.tʊp/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tutup",
              "meaning": "關",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tutup jendelanya.",
          "translation": "把窗戶關上。",
          "segments": [
            {
              "text": "Tutup",
              "meaning": "關",
              "tail": " "
            },
            {
              "text": "jendelanya",
              "meaning": "那個窗戶",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Maaf, sudah tutup.",
          "translation": "抱歉，已經打烊(關)了。",
          "segments": [
            {
              "text": "Maaf",
              "meaning": "抱歉",
              "tail": ", "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "tutup",
              "meaning": "關",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tutup mata.",
          "translation": "閉上眼睛。",
          "segments": [
            {
              "text": "Tutup",
              "meaning": "關/蓋/閉",
              "tail": " "
            },
            {
              "text": "mata",
              "meaning": "眼睛",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "關燈不用 Tutup，要用 Matikan。",
      "image_file": "close.png"
    },
    {
      "id": "v-34",
      "term_zh": "幫助",
      "related_terms": [
        {
          "term_target": "bantu",
          "pronunciation": [
            "/ban.tu/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "bantu",
              "meaning": "幫",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bantu saya.",
          "translation": "幫我。",
          "segments": [
            {
              "text": "Bantu",
              "meaning": "幫助",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bisa bantu sebentar?",
          "translation": "可以幫一下忙嗎？",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "bantu",
              "meaning": "幫忙",
              "tail": " "
            },
            {
              "text": "sebentar",
              "meaning": "一下/一會兒",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Terima kasih bantuannya.",
          "translation": "謝謝你的幫忙。",
          "segments": [
            {
              "text": "Terima",
              "meaning": "接受",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "給予",
              "tail": " "
            },
            {
              "text": "bantuannya",
              "meaning": "那個協助",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Tolong 是請求別人(Please)，Bantu 是實際的幫忙動作(Assist)。",
      "image_file": "help.png"
    },
    {
      "id": "v-35",
      "term_zh": "帶來",
      "related_terms": [
        {
          "term_target": "bawa",
          "pronunciation": [
            "/ba.wa/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "bawa",
              "meaning": "帶",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bawa air.",
          "translation": "帶水。",
          "segments": [
            {
              "text": "Bawa",
              "meaning": "帶",
              "tail": " "
            },
            {
              "text": "air",
              "meaning": "水",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bawa pulang.",
          "translation": "外帶 / 帶回家。",
          "segments": [
            {
              "text": "Bawa",
              "meaning": "帶",
              "tail": " "
            },
            {
              "text": "pulang",
              "meaning": "回家",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jangan lupa bawa uang.",
          "translation": "別忘了帶錢。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "lupa",
              "meaning": "忘記",
              "tail": " "
            },
            {
              "text": "bawa",
              "meaning": "帶",
              "tail": " "
            },
            {
              "text": "uang",
              "meaning": "錢",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "點餐時說 Dibungkus (打包/外帶) 比 Bawa pulang 更常用。",
      "image_file": "bring.png"
    },
    {
      "id": "v-36",
      "term_zh": "需要",
      "related_terms": [
        {
          "term_target": "perlu",
          "pronunciation": [
            "/pər.lu/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "perlu",
              "meaning": "需要",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya perlu bantuan.",
          "translation": "我需要幫忙。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "perlu",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "bantuan",
              "meaning": "協助",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia perlu istirahat.",
          "translation": "他需要休息。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "perlu",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "istirahat",
              "meaning": "休息",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Perlu apa lagi?",
          "translation": "還需要什麼嗎？",
          "segments": [
            {
              "text": "Perlu",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "再/更多",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Perlu 是客觀需要，Butuh 是主觀渴求。",
      "image_file": "need.png"
    },
    {
      "id": "v-37",
      "term_zh": "使用",
      "related_terms": [
        {
          "term_target": "gunakan",
          "pronunciation": [
            "/gu.na.kan/"
          ],
          "specific_note": "正式",
          "segments": [
            {
              "text": "gunakan",
              "meaning": "利用/使用",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Gunakan sabuk pengaman.",
          "translation": "請繫(使用)安全帶。",
          "segments": [
            {
              "text": "Gunakan",
              "meaning": "使用",
              "tail": " "
            },
            {
              "text": "sabuk",
              "meaning": "帶子",
              "tail": " "
            },
            {
              "text": "pengaman",
              "meaning": "安全裝置",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Gunakan dengan bijak.",
          "translation": "明智地使用。",
          "segments": [
            {
              "text": "Gunakan",
              "meaning": "使用",
              "tail": " "
            },
            {
              "text": "dengan",
              "meaning": "以/用",
              "tail": " "
            },
            {
              "text": "bijak",
              "meaning": "明智",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dilarang menggunakan HP.",
          "translation": "禁止使用手機 (正式標語)。",
          "segments": [
            {
              "text": "Dilarang",
              "meaning": "禁止",
              "tail": " "
            },
            {
              "text": "menggunakan",
              "meaning": "使用(完整動詞)",
              "tail": " "
            },
            {
              "text": "HP",
              "meaning": "手機",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語說 Pakai，正式說 Gunakan。",
      "image_file": "use.png"
    },
    {
      "id": "v-38",
      "term_zh": "變成",
      "related_terms": [
        {
          "term_target": "jadi",
          "pronunciation": [
            "/dʒa.di/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "jadi",
              "meaning": "成為/所以",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dia mau jadi dokter.",
          "translation": "他想當(成為)醫生。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "jadi",
              "meaning": "成為",
              "tail": " "
            },
            {
              "text": "dokter",
              "meaning": "醫生",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jadi, kita pergi?",
          "translation": "所以，我們要去嗎？(Jadi 也有“所以”的意思)",
          "segments": [
            {
              "text": "Jadi",
              "meaning": "所以/成真",
              "tail": ", "
            },
            {
              "text": "kita",
              "meaning": "我們",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "去",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Mimpi jadi nyata.",
          "translation": "夢想成真。",
          "segments": [
            {
              "text": "Mimpi",
              "meaning": "夢",
              "tail": " "
            },
            {
              "text": "jadi",
              "meaning": "變成",
              "tail": " "
            },
            {
              "text": "nyata",
              "meaning": "真實",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Jadi 是非常高頻的字，可做動詞「成為」或連接詞「所以」。",
      "image_file": "become.png"
    },
    {
      "id": "v-39",
      "term_zh": "開始",
      "related_terms": [
        {
          "term_target": "mulai",
          "pronunciation": [
            "/mu.lai/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "mulai",
              "meaning": "開始",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mulai sekarang.",
          "translation": "從現在開始。",
          "segments": [
            {
              "text": "Mulai",
              "meaning": "開始",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ayo kita mulai.",
          "translation": "我們開始吧。",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來吧",
              "tail": " "
            },
            {
              "text": "kita",
              "meaning": "我們",
              "tail": " "
            },
            {
              "text": "mulai",
              "meaning": "開始",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Film mulai jam 8.",
          "translation": "電影八點開始。",
          "segments": [
            {
              "text": "Film",
              "meaning": "電影",
              "tail": " "
            },
            {
              "text": "mulai",
              "meaning": "開始",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "點鐘",
              "tail": " "
            },
            {
              "text": "8",
              "meaning": "八",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "開始做某事。",
      "image_file": "start.png"
    },
    {
      "id": "v-41",
      "term_zh": "結束",
      "related_terms": [
        {
          "term_target": "selesai",
          "pronunciation": [
            "/sə.lə.sai/"
          ],
          "specific_note": "完成/結束",
          "segments": [
            {
              "text": "selesai",
              "meaning": "結束",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kerja sudah selesai.",
          "translation": "工作結束了。",
          "segments": [
            {
              "text": "Kerja",
              "meaning": "工作",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "selesai",
              "meaning": "完成",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya belum selesai.",
          "translation": "我還沒做完。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "belum",
              "meaning": "還沒",
              "tail": " "
            },
            {
              "text": "selesai",
              "meaning": "完成",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Makanannya sudah habis?",
          "translation": "食物吃完了(結束)嗎？",
          "segments": [
            {
              "text": "Makanannya",
              "meaning": "那個食物",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "habis",
              "meaning": "光了/沒了",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "任務完成用 Selesai，東西用光用 Habis。",
      "image_file": "finish.png"
    },
    {
      "id": "v-42",
      "term_zh": "停止",
      "related_terms": [
        {
          "term_target": "berhenti",
          "pronunciation": [
            "/bər.hən.ti/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "berhenti",
              "meaning": "停止",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Berhenti di sini.",
          "translation": "停在這裡。",
          "segments": [
            {
              "text": "Berhenti",
              "meaning": "停",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tolong berhenti bicara.",
          "translation": "請停止說話。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請",
              "tail": " "
            },
            {
              "text": "berhenti",
              "meaning": "停止",
              "tail": " "
            },
            {
              "text": "bicara",
              "meaning": "說話",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Busnya berhenti.",
          "translation": "公車停了。",
          "segments": [
            {
              "text": "Busnya",
              "meaning": "那輛公車",
              "tail": " "
            },
            {
              "text": "berhenti",
              "meaning": "停止",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語有時會簡化為 Henti 或 Stop (借用英文)。",
      "image_file": "stop.png"
    },
    {
      "id": "v-43",
      "term_zh": "記住",
      "related_terms": [
        {
          "term_target": "ingat",
          "pronunciation": [
            "/i.ŋat/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "ingat",
              "meaning": "記得",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ingat saya?",
          "translation": "記得我嗎？",
          "segments": [
            {
              "text": "Ingat",
              "meaning": "記得",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya tidak ingat.",
          "translation": "我不記得了。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "ingat",
              "meaning": "記得",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ingat telepon ibu.",
          "translation": "記得打電話給媽媽。",
          "segments": [
            {
              "text": "Ingat",
              "meaning": "記得",
              "tail": " "
            },
            {
              "text": "telepon",
              "meaning": "打電話",
              "tail": " "
            },
            {
              "text": "ibu",
              "meaning": "媽媽",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Lupa (忘記) 是 Ingat 的相反詞。",
      "image_file": "remember.png"
    },
    {
      "id": "v-44",
      "term_zh": "談話",
      "related_terms": [
        {
          "term_target": "ngobrol",
          "pronunciation": [
            "/ŋo.brɔl/"
          ],
          "specific_note": "聊天(口語)",
          "segments": [
            {
              "text": "ngobrol",
              "meaning": "聊天",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "bicara",
          "pronunciation": [
            "/bi.tʃa.ra/"
          ],
          "specific_note": "說話(正式)",
          "segments": [
            {
              "text": "bicara",
              "meaning": "說話",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ayo ngobrol.",
          "translation": "來聊天吧。",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來",
              "tail": " "
            },
            {
              "text": "ngobrol",
              "meaning": "聊天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kita perlu bicara.",
          "translation": "我們需要談談 (嚴肅)。",
          "segments": [
            {
              "text": "Kita",
              "meaning": "我們",
              "tail": " "
            },
            {
              "text": "perlu",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "bicara",
              "meaning": "談話",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jangan ngomong sama orang asing.",
          "translation": "不要跟陌生人說話 (口語)。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "ngomong",
              "meaning": "講話",
              "tail": " "
            },
            {
              "text": "sama",
              "meaning": "跟/與",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "asing",
              "meaning": "陌生的/外國的",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "輕鬆聊天用 Ngobrol，嚴肅交談用 Bicara。",
      "image_file": "talk.png"
    },
    {
      "id": "v-45",
      "term_zh": "見面",
      "related_terms": [
        {
          "term_target": "ketemu",
          "pronunciation": [
            "/kə.tə.mu/"
          ],
          "specific_note": "口語常用",
          "segments": [
            {
              "text": "ketemu",
              "meaning": "見面/遇見",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "bertemu",
          "pronunciation": [
            "/bər.tə.mu/"
          ],
          "specific_note": "正式",
          "segments": [
            {
              "text": "bertemu",
              "meaning": "會面",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ketemu teman.",
          "translation": "見朋友。",
          "segments": [
            {
              "text": "Ketemu",
              "meaning": "見",
              "tail": " "
            },
            {
              "text": "teman",
              "meaning": "朋友",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Senang bertemu Anda.",
          "translation": "很高興認識你 (正式)。",
          "segments": [
            {
              "text": "Senang",
              "meaning": "高興",
              "tail": " "
            },
            {
              "text": "bertemu",
              "meaning": "見面",
              "tail": " "
            },
            {
              "text": "Anda",
              "meaning": "您",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ayo ketemu di taman.",
          "translation": "我們在公園碰面吧。",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來吧",
              "tail": " "
            },
            {
              "text": "ketemu",
              "meaning": "碰面",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "taman",
              "meaning": "公園",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Ketemu 最常用，既可以指「找到」也可以指「見面」。",
      "image_file": "meet.png"
    },
    {
      "id": "v-46",
      "term_zh": "乘坐（工具）",
      "related_terms": [
        {
          "term_target": "naik",
          "pronunciation": [
            "/na.ik/"
          ],
          "specific_note": "搭乘/上去",
          "segments": [
            {
              "text": "naik",
              "meaning": "搭乘",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Naik bus.",
          "translation": "搭公車。",
          "segments": [
            {
              "text": "Naik",
              "meaning": "搭/上",
              "tail": " "
            },
            {
              "text": "bus",
              "meaning": "公車",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Istirahat dulu.",
          "translation": "休息一下 (Take a break 不用 Naik)。",
          "segments": [
            {
              "text": "Istirahat",
              "meaning": "休息",
              "tail": " "
            },
            {
              "text": "dulu",
              "meaning": "先",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Minum obat ini.",
          "translation": "吃這藥 (吃藥用 Minum 喝)。",
          "segments": [
            {
              "text": "Minum",
              "meaning": "喝",
              "tail": " "
            },
            {
              "text": "obat",
              "meaning": "藥",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語搭車用 Naik (上)，吃藥用 Minum (喝)，休息用 Istirahat。",
      "image_file": "take.png"
    },
    {
      "id": "v-47",
      "term_zh": "放",
      "related_terms": [
        {
          "term_target": "taruh",
          "pronunciation": [
            "/ta.ruh/"
          ],
          "specific_note": "放置",
          "segments": [
            {
              "text": "taruh",
              "meaning": "放",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Taruh di bawah.",
          "translation": "放下 (放在下面)。",
          "segments": [
            {
              "text": "Taruh",
              "meaning": "放",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "bawah",
              "meaning": "下面",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pakai sepatumu.",
          "translation": "穿上你的鞋子 (穿不用 Taruh)。",
          "segments": [
            {
              "text": "Pakai",
              "meaning": "穿/用",
              "tail": " "
            },
            {
              "text": "sepatumu",
              "meaning": "鞋子+你的",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Taruh di mana?",
          "translation": "要放哪裡？",
          "segments": [
            {
              "text": "Taruh",
              "meaning": "放",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "口語常用 Taruh，正式用 Letakkan。",
      "image_file": "put.png"
    },
    {
      "id": "v-48",
      "term_zh": "吃",
      "related_terms": [
        {
          "term_target": "makan",
          "pronunciation": [
            "/ma.kan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "makan",
              "meaning": "吃",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Makan malam.",
          "translation": "吃晚餐。",
          "segments": [
            {
              "text": "Makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mau makan apa?",
          "translation": "你想吃什麼？",
          "segments": [
            {
              "text": "Mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Jangan makan terlalu banyak.",
          "translation": "不要吃太多。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "不要",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "terlalu",
              "meaning": "太/過分",
              "tail": " "
            },
            {
              "text": "banyak",
              "meaning": "多",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Makan pagi (早餐), Makan siang (午餐), Makan malam (晚餐)。",
      "image_file": "eat.png"
    },
    {
      "id": "v-49",
      "term_zh": "睡覺",
      "related_terms": [
        {
          "term_target": "tidur",
          "pronunciation": [
            "/ti.dʊr/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tidur",
              "meaning": "睡覺",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pergi tidur.",
          "translation": "去睡覺。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "tidur",
              "meaning": "睡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tidurnya nyenyak?",
          "translation": "睡得好(安穩)嗎？",
          "segments": [
            {
              "text": "Tidurnya",
              "meaning": "睡覺的情況",
              "tail": " "
            },
            {
              "text": "nyenyak",
              "meaning": "熟睡/安穩",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Bayi sedang tidur.",
          "translation": "寶寶在睡覺。",
          "segments": [
            {
              "text": "Bayi",
              "meaning": "嬰兒",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "tidur",
              "meaning": "睡",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "想睡覺可以說 Ngantuk (睏)。",
      "image_file": "sleep.png"
    },
    {
      "id": "v-50",
      "term_zh": "寄送",
      "related_terms": [
        {
          "term_target": "kirim",
          "pronunciation": [
            "/ki.rɪm/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "kirim",
              "meaning": "寄",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kirim email.",
          "translation": "寄信。",
          "segments": [
            {
              "text": "Kirim",
              "meaning": "寄",
              "tail": " "
            },
            {
              "text": "email",
              "meaning": "電子郵件",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kirim pesan ke saya.",
          "translation": "傳訊息給我。",
          "segments": [
            {
              "text": "Kirim",
              "meaning": "傳送",
              "tail": " "
            },
            {
              "text": "pesan",
              "meaning": "訊息",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "給/往",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya kirim paket.",
          "translation": "我寄包裹。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "kirim",
              "meaning": "寄",
              "tail": " "
            },
            {
              "text": "paket",
              "meaning": "包裹",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "寄東西或傳訊息都用 Kirim。",
      "image_file": "send.png"
    },
    {
      "id": "v-51",
      "term_zh": "開車",
      "related_terms": [
        {
          "term_target": "setir",
          "pronunciation": [
            "/sə.tɪr/"
          ],
          "specific_note": "駕駛(口語)",
          "segments": [
            {
              "text": "setir",
              "meaning": "駕駛/方向盤",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "bawa mobil",
          "pronunciation": [
            "/ba.wa mo.bɪl/"
          ],
          "specific_note": "帶車(常用)",
          "segments": [
            {
              "text": "bawa",
              "meaning": "帶/開",
              "tail": " "
            },
            {
              "text": "mobil",
              "meaning": "車",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya bawa mobil.",
          "translation": "我開車(字面：我帶車)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "bawa",
              "meaning": "帶/開",
              "tail": " "
            },
            {
              "text": "mobil",
              "meaning": "車",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bisa nyetir?",
          "translation": "你會開車嗎？",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "會",
              "tail": " "
            },
            {
              "text": "nyetir",
              "meaning": "駕駛(動詞化)",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Hati-hati di jalan.",
          "translation": "路上小心 (駕駛安全)。",
          "segments": [
            {
              "text": "Hati-hati",
              "meaning": "小心",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "jalan",
              "meaning": "路",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "日常最常說 Bawa mobil (開車) 或 Bawa motor (騎機車)。",
      "image_file": "drive.png"
    },
    {
      "id": "v-52",
      "term_zh": "讀書",
      "related_terms": [
        {
          "term_target": "belajar",
          "pronunciation": [
            "/bə.la.dʒar/"
          ],
          "specific_note": "學習",
          "segments": [
            {
              "text": "belajar",
              "meaning": "學習",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Belajar yang rajin.",
          "translation": "用功讀書 (勤勞地學)。",
          "segments": [
            {
              "text": "Belajar",
              "meaning": "學習",
              "tail": " "
            },
            {
              "text": "yang",
              "meaning": "那個...的",
              "tail": " "
            },
            {
              "text": "rajin",
              "meaning": "勤奮",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya belajar bahasa Inggris.",
          "translation": "我學英文。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "belajar",
              "meaning": "學習",
              "tail": " "
            },
            {
              "text": "bahasa",
              "meaning": "語言",
              "tail": " "
            },
            {
              "text": "Inggris",
              "meaning": "英文",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia sedang belajar untuk ujian.",
          "translation": "她正在為考試讀書。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "她",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "belajar",
              "meaning": "讀書",
              "tail": " "
            },
            {
              "text": "untuk",
              "meaning": "為了",
              "tail": " "
            },
            {
              "text": "ujian",
              "meaning": "考試",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Belajar 指學習過程，Baca buku 指閱讀動作。",
      "image_file": "study.png"
    },
    {
      "id": "v-53",
      "term_zh": "回去",
      "related_terms": [
        {
          "term_target": "pulang",
          "pronunciation": [
            "/pu.laŋ/"
          ],
          "specific_note": "回家/返回",
          "segments": [
            {
              "text": "pulang",
              "meaning": "回家",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "kembali",
          "pronunciation": [
            "/kəm.ba.li/"
          ],
          "specific_note": "回到某地",
          "segments": [
            {
              "text": "kembali",
              "meaning": "返回",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ayo pulang.",
          "translation": "回家吧。",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來吧",
              "tail": " "
            },
            {
              "text": "pulang",
              "meaning": "回家",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kapan kamu pulang?",
          "translation": "你什麼時候回家？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "pulang",
              "meaning": "回家",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kembali ke tempat duduk.",
          "translation": "回到座位。",
          "segments": [
            {
              "text": "Kembali",
              "meaning": "返回",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "tempat",
              "meaning": "地方",
              "tail": " "
            },
            {
              "text": "duduk",
              "meaning": "坐",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "下班/放學/回家統稱 Pulang。",
      "image_file": "go_back.png"
    },
    {
      "id": "v-54",
      "term_zh": "了解",
      "related_terms": [
        {
          "term_target": "mengerti",
          "pronunciation": [
            "/mə.ŋər.ti/"
          ],
          "specific_note": "明白意思",
          "segments": [
            {
              "text": "mengerti",
              "meaning": "明白",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "paham",
          "pronunciation": [
            "/pa.ham/"
          ],
          "specific_note": "理解概念",
          "segments": [
            {
              "text": "paham",
              "meaning": "理解",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya mengerti.",
          "translation": "我懂了。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mengerti",
              "meaning": "明白",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu paham?",
          "translation": "你理解嗎？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "paham",
              "meaning": "理解",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya nggak ngerti.",
          "translation": "我不懂 (口語：Mengerti 簡化為 Ngerti)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "nggak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "ngerti",
              "meaning": "懂",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Mengerti 和 Paham 在口語中常混用。",
      "image_file": "understand.png"
    }
    
  ]
},
{
  "id": "adjectives",
  "name": "形容詞",
  "items": [
    {
      "id": "adj-01",
      "term_zh": "好的",
      "related_terms": [
        {
          "term_target": "bagus",
          "pronunciation": [
            "/ba.gʊs/"
          ],
          "specific_note": "品質好/好看",
          "segments": [
            {
              "text": "bagus",
              "meaning": "棒/好",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "baik",
          "pronunciation": [
            "/ba.ik/"
          ],
          "specific_note": "人品好/沒事",
          "segments": [
            {
              "text": "baik",
              "meaning": "善良/好",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ide bagus!",
          "translation": "好主意！",
          "segments": [
            {
              "text": "Ide",
              "meaning": "主意",
              "tail": " "
            },
            {
              "text": "bagus",
              "meaning": "好",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Dia orang baik.",
          "translation": "他是个好人。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "善良/好",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kabar baik.",
          "translation": "好消息 (我很好)。",
          "segments": [
            {
              "text": "Kabar",
              "meaning": "消息",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "好",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "物品用 Bagus，個性用 Baik。",
      "image_file": "good.png"
    },
    {
      "id": "adj-02",
      "term_zh": "壞的",
      "related_terms": [
        {
          "term_target": "jelek",
          "pronunciation": [
            "/dʒə.lɛk/"
          ],
          "specific_note": "品質差/醜",
          "segments": [
            {
              "text": "jelek",
              "meaning": "醜/壞",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "buruk",
          "pronunciation": [
            "/bu.rʊk/"
          ],
          "specific_note": "情況糟",
          "segments": [
            {
              "text": "buruk",
              "meaning": "糟/惡劣",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sinyalnya jelek.",
          "translation": "訊號很差。",
          "segments": [
            {
              "text": "Sinyalnya",
              "meaning": "訊號+那",
              "tail": " "
            },
            {
              "text": "jelek",
              "meaning": "差",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kabar buruk.",
          "translation": "壞消息。",
          "segments": [
            {
              "text": "Kabar",
              "meaning": "消息",
              "tail": " "
            },
            {
              "text": "buruk",
              "meaning": "糟/壞",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jangan nakal.",
          "translation": "別調皮 (對小孩說壞/皮)。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "nakal",
              "meaning": "調皮/壞",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Jelek 也可以用來形容長相「醜」。",
      "image_file": "bad.png"
    },
    {
      "id": "adj-03",
      "term_zh": "新的",
      "related_terms": [
        {
          "term_target": "baru",
          "pronunciation": [
            "/ba.ru/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "baru",
              "meaning": "新",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini mobil baru.",
          "translation": "這是新車。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "mobil",
              "meaning": "車",
              "tail": " "
            },
            {
              "text": "baru",
              "meaning": "新",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Selamat Tahun Baru!",
          "translation": "新年快樂！",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "Tahun",
              "meaning": "年",
              "tail": " "
            },
            {
              "text": "Baru",
              "meaning": "新",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Saya punya teman baru.",
          "translation": "我交了新朋友。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "punya",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "teman",
              "meaning": "朋友",
              "tail": " "
            },
            {
              "text": "baru",
              "meaning": "新",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Baru 放在動詞前表示「剛剛」(Baru sampai 剛到)。放在名詞後表示「新的」。",
      "image_file": "new.png"
    },
    {
      "id": "adj-04",
      "term_zh": "第一天／第一的",
      "related_terms": [
        {
          "term_target": "pertama",
          "pronunciation": [
            "/pər.ta.ma/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "pertama",
              "meaning": "第一",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini pertama kali.",
          "translation": "這是第一次。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "pertama",
              "meaning": "第一",
              "tail": " "
            },
            {
              "text": "kali",
              "meaning": "次/回",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Siapa yang pertama?",
          "translation": "誰是第一個？",
          "segments": [
            {
              "text": "Siapa",
              "meaning": "誰",
              "tail": " "
            },
            {
              "text": "yang",
              "meaning": "那個",
              "tail": " "
            },
            {
              "text": "pertama",
              "meaning": "第一",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Anak pertama.",
          "translation": "長子/長女 (第一個孩子)。",
          "segments": [
            {
              "text": "Anak",
              "meaning": "孩子",
              "tail": " "
            },
            {
              "text": "pertama",
              "meaning": "第一",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "序數第一。",
      "image_file": "first.png"
    },
    {
      "id": "adj-05",
      "term_zh": "上一個",
      "related_terms": [
        {
          "term_target": "terakhir",
          "pronunciation": [
            "/tə.ra.khɪr/"
          ],
          "specific_note": "最後一個",
          "segments": [
            {
              "text": "terakhir",
              "meaning": "最後",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "lalu",
          "pronunciation": [
            "/la.lu/"
          ],
          "specific_note": "過去的/上週",
          "segments": [
            {
              "text": "lalu",
              "meaning": "過去",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Minggu lalu.",
          "translation": "上個星期。",
          "segments": [
            {
              "text": "Minggu",
              "meaning": "週/星期",
              "tail": " "
            },
            {
              "text": "lalu",
              "meaning": "過去",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ini yang terakhir.",
          "translation": "這是最後一個。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "yang",
              "meaning": "那個",
              "tail": " "
            },
            {
              "text": "terakhir",
              "meaning": "最後",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tadi malam.",
          "translation": "昨晚 (上一個晚上)。",
          "segments": [
            {
              "text": "Tadi",
              "meaning": "剛剛",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "時間的「上一個」用 Lalu (如 Minggu lalu)，順序的「最後」用 Terakhir。",
      "image_file": "last.png"
    },
    {
      "id": "adj-06",
      "term_zh": "下一個",
      "related_terms": [
        {
          "term_target": "selanjutnya",
          "pronunciation": [
            "/sə.lan.dʒut.ɲa/"
          ],
          "specific_note": "接下來",
          "segments": [
            {
              "text": "selanjutnya",
              "meaning": "下一個/接著",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "depan",
          "pronunciation": [
            "/də.pan/"
          ],
          "specific_note": "前面的/下週",
          "segments": [
            {
              "text": "depan",
              "meaning": "前面/未來",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Siapa selanjutnya?",
          "translation": "下一位是誰？",
          "segments": [
            {
              "text": "Siapa",
              "meaning": "誰",
              "tail": " "
            },
            {
              "text": "selanjutnya",
              "meaning": "接下來",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Minggu depan.",
          "translation": "下個星期。",
          "segments": [
            {
              "text": "Minggu",
              "meaning": "週",
              "tail": " "
            },
            {
              "text": "depan",
              "meaning": "前面(未來)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sampai jumpa lain kali.",
          "translation": "下次見。",
          "segments": [
            {
              "text": "Sampai",
              "meaning": "直到",
              "tail": " "
            },
            {
              "text": "jumpa",
              "meaning": "相遇",
              "tail": " "
            },
            {
              "text": "lain",
              "meaning": "別的",
              "tail": " "
            },
            {
              "text": "kali",
              "meaning": "次",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "時間的「下一個」用 Depan (如 Bulan depan 下個月)，順序用 Selanjutnya。",
      "image_file": "next.png"
    },
    {
      "id": "adj-07",
      "term_zh": "長的",
      "related_terms": [
        {
          "term_target": "panjang",
          "pronunciation": [
            "/pan.dʒaŋ/"
          ],
          "specific_note": "長度",
          "segments": [
            {
              "text": "panjang",
              "meaning": "長",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "lama",
          "pronunciation": [
            "/la.ma/"
          ],
          "specific_note": "時間久",
          "segments": [
            {
              "text": "lama",
              "meaning": "久",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Rambut panjang.",
          "translation": "長髮。",
          "segments": [
            {
              "text": "Rambut",
              "meaning": "頭髮",
              "tail": " "
            },
            {
              "text": "panjang",
              "meaning": "長",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sudah lama tidak bertemu.",
          "translation": "好久不見。",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "lama",
              "meaning": "久",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "沒",
              "tail": " "
            },
            {
              "text": "bertemu",
              "meaning": "見面",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Masih lama?",
          "translation": "還要很久嗎？",
          "segments": [
            {
              "text": "Masih",
              "meaning": "還/仍然",
              "tail": " "
            },
            {
              "text": "lama",
              "meaning": "久",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "物體長度用 Panjang，時間長度用 Lama。",
      "image_file": "long.png"
    },
    {
      "id": "adj-08",
      "term_zh": "大的",
      "related_terms": [
        {
          "term_target": "besar",
          "pronunciation": [
            "/bə.sar/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "besar",
              "meaning": "大",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Rumah besar.",
          "translation": "大房子。",
          "segments": [
            {
              "text": "Rumah",
              "meaning": "房子",
              "tail": " "
            },
            {
              "text": "besar",
              "meaning": "大",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ini terlalu besar.",
          "translation": "這太大了 (或說 Kebesaran)。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "terlalu",
              "meaning": "太",
              "tail": " "
            },
            {
              "text": "besar",
              "meaning": "大",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kota besar.",
          "translation": "大城市。",
          "segments": [
            {
              "text": "Kota",
              "meaning": "城市",
              "tail": " "
            },
            {
              "text": "besar",
              "meaning": "大",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語有時說 Gede。",
      "image_file": "big.png"
    },
    {
      "id": "adj-09",
      "term_zh": "小的",
      "related_terms": [
        {
          "term_target": "kecil",
          "pronunciation": [
            "/kə.tʃɪl/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "kecil",
              "meaning": "小",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Anak kecil.",
          "translation": "小孩 (小的人)。",
          "segments": [
            {
              "text": "Anak",
              "meaning": "孩子",
              "tail": " "
            },
            {
              "text": "kecil",
              "meaning": "小",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dunia ini kecil.",
          "translation": "世界真小。",
          "segments": [
            {
              "text": "Dunia",
              "meaning": "世界",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "kecil",
              "meaning": "小",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bajunya kekecilan.",
          "translation": "衣服太小了。",
          "segments": [
            {
              "text": "Bajunya",
              "meaning": "那件衣服",
              "tail": " "
            },
            {
              "text": "kekecilan",
              "meaning": "過小/太小",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Kekecilan 專指「尺寸太小」。",
      "image_file": "small.png"
    },
    {
      "id": "adj-10",
      "term_zh": "多的",
      "related_terms": [
        {
          "term_target": "banyak",
          "pronunciation": [
            "/ba.ɲak/"
          ],
          "specific_note": "數量",
          "segments": [
            {
              "text": "banyak",
              "meaning": "多",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Banyak orang.",
          "translation": "很多人。",
          "segments": [
            {
              "text": "Banyak",
              "meaning": "許多",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Berapa banyak?",
          "translation": "有多少？",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少(疑問詞)",
              "tail": " "
            },
            {
              "text": "banyak",
              "meaning": "量",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Terima kasih banyak.",
          "translation": "非常感謝 (謝意很多)。",
          "segments": [
            {
              "text": "Terima",
              "meaning": "接受",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "給予",
              "tail": " "
            },
            {
              "text": "banyak",
              "meaning": "多",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "既指「許多」也指「多」。",
      "image_file": "many.png"
    },
    {
      "id": "adj-11",
      "term_zh": "高的",
      "related_terms": [
        {
          "term_target": "tinggi",
          "pronunciation": [
            "/tiŋ.gi/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tinggi",
              "meaning": "高",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Gedung tinggi.",
          "translation": "高樓。",
          "segments": [
            {
              "text": "Gedung",
              "meaning": "建築/樓",
              "tail": " "
            },
            {
              "text": "tinggi",
              "meaning": "高",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia tinggi sekali.",
          "translation": "他非常高。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "tinggi",
              "meaning": "高",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Berapa tingginya?",
          "translation": "有多高 (高度是多少)？",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "tingginya",
              "meaning": "它的高度",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "形容人或建築物皆可。",
      "image_file": "tall.png"
    },
    {
      "id": "adj-12",
      "term_zh": "年輕的",
      "related_terms": [
        {
          "term_target": "muda",
          "pronunciation": [
            "/mu.da/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "muda",
              "meaning": "年輕",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Anak muda.",
          "translation": "年輕人。",
          "segments": [
            {
              "text": "Anak",
              "meaning": "孩子/人",
              "tail": " "
            },
            {
              "text": "muda",
              "meaning": "年輕",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia masih muda.",
          "translation": "他還年輕。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "masih",
              "meaning": "還/仍然",
              "tail": " "
            },
            {
              "text": "muda",
              "meaning": "年輕",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Warna hijau muda.",
          "translation": "淺綠色 (顏色+Muda=淺色)。",
          "segments": [
            {
              "text": "Warna",
              "meaning": "顏色",
              "tail": " "
            },
            {
              "text": "hijau",
              "meaning": "綠",
              "tail": " "
            },
            {
              "text": "muda",
              "meaning": "年輕/淺",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "形容顏色時 Muda 表示「淺色」。",
      "image_file": "young.png"
    },
    {
      "id": "adj-13",
      "term_zh": "老的",
      "related_terms": [
        {
          "term_target": "tua",
          "pronunciation": [
            "/tu.a/"
          ],
          "specific_note": "年紀大",
          "segments": [
            {
              "text": "tua",
              "meaning": "老",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Orang tua.",
          "translation": "老人 / 父母 (雙親)。",
          "segments": [
            {
              "text": "Orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "tua",
              "meaning": "老",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sudah tua.",
          "translation": "已經老了。",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "tua",
              "meaning": "老",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Teman lama.",
          "translation": "老朋友 (認識很久的朋友用 Lama)。",
          "segments": [
            {
              "text": "Teman",
              "meaning": "朋友",
              "tail": " "
            },
            {
              "text": "lama",
              "meaning": "久/舊",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Tua 指年齡，Lama 指時間久或舊東西。",
      "image_file": "old.png"
    },
    {
      "id": "adj-14",
      "term_zh": "近的",
      "related_terms": [
        {
          "term_target": "dekat",
          "pronunciation": [
            "/də.kat/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "dekat",
              "meaning": "近",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dekat sini.",
          "translation": "在這附近 (近這裡)。",
          "segments": [
            {
              "text": "Dekat",
              "meaning": "靠近",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Rumah saya dekat.",
          "translation": "我家很近。",
          "segments": [
            {
              "text": "Rumah",
              "meaning": "家",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "dekat",
              "meaning": "近",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Teman dekat.",
          "translation": "密友 / 親近的朋友。",
          "segments": [
            {
              "text": "Teman",
              "meaning": "朋友",
              "tail": " "
            },
            {
              "text": "dekat",
              "meaning": "近/親密",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "距離近或關係親密。",
      "image_file": "near.png"
    },
    {
      "id": "adj-15",
      "term_zh": "遠的",
      "related_terms": [
        {
          "term_target": "jauh",
          "pronunciation": [
            "/dʒa.uh/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "jauh",
              "meaning": "遠",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Jauh sekali.",
          "translation": "非常遠。",
          "segments": [
            {
              "text": "Jauh",
              "meaning": "遠",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tidak jauh.",
          "translation": "不遠。",
          "segments": [
            {
              "text": "Tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "jauh",
              "meaning": "遠",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Berapa jauh?",
          "translation": "有多遠？",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "jauh",
              "meaning": "遠",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "距離遠。",
      "image_file": "far.png"
    },
    {
      "id": "adj-16",
      "term_zh": "快的",
      "related_terms": [
        {
          "term_target": "cepat",
          "pronunciation": [
            "/tʃə.pat/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "cepat",
              "meaning": "快",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Jalan cepat.",
          "translation": "走快點 / 快走。",
          "segments": [
            {
              "text": "Jalan",
              "meaning": "走",
              "tail": " "
            },
            {
              "text": "cepat",
              "meaning": "快",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cepat sembuh!",
          "translation": "早日康復 (快點好起來)。",
          "segments": [
            {
              "text": "Cepat",
              "meaning": "快",
              "tail": " "
            },
            {
              "text": "sembuh",
              "meaning": "痊癒",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Jangan cepat-cepat.",
          "translation": "別那麼快。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "cepat-cepat",
              "meaning": "太快",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "催促別人時說 Cepat! Cepat! (快！快！)",
      "image_file": "fast.png"
    },
    {
      "id": "adj-17",
      "term_zh": "慢的",
      "related_terms": [
        {
          "term_target": "pelan",
          "pronunciation": [
            "/pə.lan/"
          ],
          "specific_note": "速度/聲音",
          "segments": [
            {
              "text": "pelan",
              "meaning": "慢/輕",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "lambat",
          "pronunciation": [
            "/lam.bat/"
          ],
          "specific_note": "進度/遲緩",
          "segments": [
            {
              "text": "lambat",
              "meaning": "慢",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pelan-pelan saja.",
          "translation": "慢慢來就好。",
          "segments": [
            {
              "text": "Pelan-pelan",
              "meaning": "慢慢地",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "就",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bicara pelan.",
          "translation": "講慢一點 / 小聲一點。",
          "segments": [
            {
              "text": "Bicara",
              "meaning": "說話",
              "tail": " "
            },
            {
              "text": "pelan",
              "meaning": "慢",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jam ini lambat.",
          "translation": "這時鐘慢了。",
          "segments": [
            {
              "text": "Jam",
              "meaning": "鐘/錶",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "lambat",
              "meaning": "遲緩",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Pelan-pelan (慢慢地) 非常常用，表示小心或從容。",
      "image_file": "slow.png"
    },
    {
      "id": "adj-18",
      "term_zh": "熱的",
      "related_terms": [
        {
          "term_target": "panas",
          "pronunciation": [
            "/pa.nas/"
          ],
          "specific_note": "溫度",
          "segments": [
            {
              "text": "panas",
              "meaning": "熱",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Air panas.",
          "translation": "熱水。",
          "segments": [
            {
              "text": "Air",
              "meaning": "水",
              "tail": " "
            },
            {
              "text": "panas",
              "meaning": "熱",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cuaca panas.",
          "translation": "天氣很熱。",
          "segments": [
            {
              "text": "Cuaca",
              "meaning": "天氣",
              "tail": " "
            },
            {
              "text": "panas",
              "meaning": "熱",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Awas panas!",
          "translation": "小心燙！",
          "segments": [
            {
              "text": "Awas",
              "meaning": "小心",
              "tail": " "
            },
            {
              "text": "panas",
              "meaning": "燙/熱",
              "tail": "!"
            }
          ]
        }
      ],
      "usage_note": "「辣」是 Pedas，不要搞混喔。",
      "image_file": "hot.png"
    },
    {
      "id": "adj-19",
      "term_zh": "冷的",
      "related_terms": [
        {
          "term_target": "dingin",
          "pronunciation": [
            "/di.ŋɪn/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "dingin",
              "meaning": "冷",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Air dingin.",
          "translation": "冷水 / 冰水。",
          "segments": [
            {
              "text": "Air",
              "meaning": "水",
              "tail": " "
            },
            {
              "text": "dingin",
              "meaning": "冷",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya kedinginan.",
          "translation": "我覺得很冷 (冷到了)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "kedinginan",
              "meaning": "感到冷",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "AC-nya dingin sekali.",
          "translation": "冷氣非常冷。",
          "segments": [
            {
              "text": "AC-nya",
              "meaning": "冷氣+那",
              "tail": " "
            },
            {
              "text": "dingin",
              "meaning": "冷",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "感冒 (生病) 是 Pilek 或 Masuk angin。",
      "image_file": "cold.png"
    },
    {
      "id": "adj-20",
      "term_zh": "乾淨的",
      "related_terms": [
        {
          "term_target": "bersih",
          "pronunciation": [
            "/bər.sɪh/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "bersih",
              "meaning": "乾淨",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kamar bersih.",
          "translation": "乾淨的房間。",
          "segments": [
            {
              "text": "Kamar",
              "meaning": "房間",
              "tail": " "
            },
            {
              "text": "bersih",
              "meaning": "乾淨",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Air bersih.",
          "translation": "淨水 / 乾淨的水。",
          "segments": [
            {
              "text": "Air",
              "meaning": "水",
              "tail": " "
            },
            {
              "text": "bersih",
              "meaning": "乾淨",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sudah bersih?",
          "translation": "乾淨了嗎？(洗好了嗎)",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "bersih",
              "meaning": "乾淨",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "髒是 Kotor。",
      "image_file": "clean.png"
    },
    {
      "id": "adj-21",
      "term_zh": "髒的",
      "related_terms": [
        {
          "term_target": "kotor",
          "pronunciation": [
            "/ko.tɔr/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "kotor",
              "meaning": "髒",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tangannya kotor.",
          "translation": "手髒了。",
          "segments": [
            {
              "text": "Tangannya",
              "meaning": "手+那",
              "tail": " "
            },
            {
              "text": "kotor",
              "meaning": "髒",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sepatu saya kotor.",
          "translation": "我的鞋子很髒。",
          "segments": [
            {
              "text": "Sepatu",
              "meaning": "鞋子",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "kotor",
              "meaning": "髒",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jangan sentuh, itu kotor.",
          "translation": "別碰，那很髒。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "sentuh",
              "meaning": "碰",
              "tail": ", "
            },
            {
              "text": "itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "kotor",
              "meaning": "髒",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "指不乾淨。",
      "image_file": "dirty.png"
    },
    {
      "id": "adj-22",
      "term_zh": "簡單的",
      "related_terms": [
        {
          "term_target": "gampang",
          "pronunciation": [
            "/gam.paŋ/"
          ],
          "specific_note": "口語常用",
          "segments": [
            {
              "text": "gampang",
              "meaning": "容易",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "mudah",
          "pronunciation": [
            "/mu.dah/"
          ],
          "specific_note": "標準/正式",
          "segments": [
            {
              "text": "mudah",
              "meaning": "簡單",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini gampang sekali.",
          "translation": "這非常簡單。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "gampang",
              "meaning": "簡單",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Soal ini mudah.",
          "translation": "這道題很簡單。",
          "segments": [
            {
              "text": "Soal",
              "meaning": "問題/題目",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "mudah",
              "meaning": "容易",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tenang, gampang kok.",
          "translation": "放心，很簡單啦。",
          "segments": [
            {
              "text": "Tenang",
              "meaning": "冷靜/放心",
              "tail": ", "
            },
            {
              "text": "gampang",
              "meaning": "簡單",
              "tail": " "
            },
            {
              "text": "kok",
              "meaning": "啦(語氣詞)",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語常說 Gampang banget (超級簡單)。",
      "image_file": "easy.png"
    },
    {
      "id": "adj-23",
      "term_zh": "困難的",
      "related_terms": [
        {
          "term_target": "susah",
          "pronunciation": [
            "/su.sah/"
          ],
          "specific_note": "口語常用",
          "segments": [
            {
              "text": "susah",
              "meaning": "難",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "sulit",
          "pronunciation": [
            "/su.lɪt/"
          ],
          "specific_note": "較正式",
          "segments": [
            {
              "text": "sulit",
              "meaning": "困難",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Susah dijelaskan.",
          "translation": "很難解釋。",
          "segments": [
            {
              "text": "Susah",
              "meaning": "難",
              "tail": " "
            },
            {
              "text": "dijelaskan",
              "meaning": "被解釋",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ujiannya sulit.",
          "translation": "考試很難。",
          "segments": [
            {
              "text": "Ujiannya",
              "meaning": "那個考試",
              "tail": " "
            },
            {
              "text": "sulit",
              "meaning": "困難",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cari kerja itu susah.",
          "translation": "找工作很難。",
          "segments": [
            {
              "text": "Cari",
              "meaning": "找",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那(件事)",
              "tail": " "
            },
            {
              "text": "susah",
              "meaning": "困難",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Susah 也可以形容生活艱苦。",
      "image_file": "difficult.png"
    },
    {
      "id": "adj-24",
      "term_zh": "正確的",
      "related_terms": [
        {
          "term_target": "benar",
          "pronunciation": [
            "/bə.nar/"
          ],
          "specific_note": "正確/真的",
          "segments": [
            {
              "text": "benar",
              "meaning": "對",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "betul",
          "pronunciation": [
            "/bə.tʊl/"
          ],
          "specific_note": "口語確認用",
          "segments": [
            {
              "text": "betul",
              "meaning": "正確",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Jawabanmu benar.",
          "translation": "你的答案是對的。",
          "segments": [
            {
              "text": "Jawabanmu",
              "meaning": "你的回答",
              "tail": " "
            },
            {
              "text": "benar",
              "meaning": "正確",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Itu tidak benar.",
          "translation": "那不是真的(不正確)。",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "benar",
              "meaning": "正確",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Betul sekali!",
          "translation": "完全正確！",
          "segments": [
            {
              "text": "Betul",
              "meaning": "對",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "!"
            }
          ]
        }
      ],
      "usage_note": "Benar 和 Betul 經常通用。",
      "image_file": "correct.png"
    },
    {
      "id": "adj-25",
      "term_zh": "錯誤的",
      "related_terms": [
        {
          "term_target": "salah",
          "pronunciation": [
            "/sa.lah/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "salah",
              "meaning": "錯",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Maaf, salah sambung.",
          "translation": "抱歉，打錯電話了 (接錯線)。",
          "segments": [
            {
              "text": "Maaf",
              "meaning": "抱歉",
              "tail": ", "
            },
            {
              "text": "salah",
              "meaning": "錯",
              "tail": " "
            },
            {
              "text": "sambung",
              "meaning": "連接",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Itu salah saya.",
          "translation": "那是我的錯。",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "salah",
              "meaning": "錯誤",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jalan ini salah.",
          "translation": "這條路錯了。",
          "segments": [
            {
              "text": "Jalan",
              "meaning": "路",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "salah",
              "meaning": "錯",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "指不對。",
      "image_file": "wrong.png"
    },
    {
      "id": "adj-26",
      "term_zh": "重要的",
      "related_terms": [
        {
          "term_target": "penting",
          "pronunciation": [
            "/pən.tiŋ/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "penting",
              "meaning": "重要",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini sangat penting.",
          "translation": "這非常重要。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "sangat",
              "meaning": "非常",
              "tail": " "
            },
            {
              "text": "penting",
              "meaning": "重要",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Keluarga itu penting.",
          "translation": "家人很重要。",
          "segments": [
            {
              "text": "Keluarga",
              "meaning": "家庭/家人",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那(強調)",
              "tail": " "
            },
            {
              "text": "penting",
              "meaning": "重要",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ada hal penting.",
          "translation": "有重要的事情。",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "hal",
              "meaning": "事情",
              "tail": " "
            },
            {
              "text": "penting",
              "meaning": "重要",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "關鍵。",
      "image_file": "important.png"
    },
    {
      "id": "adj-27",
      "term_zh": "不同的",
      "related_terms": [
        {
          "term_target": "beda",
          "pronunciation": [
            "/be.da/"
          ],
          "specific_note": "口語",
          "segments": [
            {
              "text": "beda",
              "meaning": "不同",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "berbeda",
          "pronunciation": [
            "/bər.be.da/"
          ],
          "specific_note": "正式",
          "segments": [
            {
              "text": "berbeda",
              "meaning": "有差別",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Warnanya beda.",
          "translation": "顏色不一樣。",
          "segments": [
            {
              "text": "Warnanya",
              "meaning": "顏色+它的",
              "tail": " "
            },
            {
              "text": "beda",
              "meaning": "不同",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kita berbeda.",
          "translation": "我們不一樣。",
          "segments": [
            {
              "text": "Kita",
              "meaning": "我們",
              "tail": " "
            },
            {
              "text": "berbeda",
              "meaning": "不同",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Beda rasa.",
          "translation": "味道不同。",
          "segments": [
            {
              "text": "Beda",
              "meaning": "不同",
              "tail": " "
            },
            {
              "text": "rasa",
              "meaning": "味道",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "日常口語多用 Beda。",
      "image_file": "different.png"
    },
    {
      "id": "adj-28",
      "term_zh": "真的／真實的",
      "related_terms": [
        {
          "term_target": "asli",
          "pronunciation": [
            "/as.li/"
          ],
          "specific_note": "真貨/原版",
          "segments": [
            {
              "text": "asli",
              "meaning": "真實/正版",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "nyata",
          "pronunciation": [
            "/ɲa.ta/"
          ],
          "specific_note": "現實存在",
          "segments": [
            {
              "text": "nyata",
              "meaning": "現實",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini kulit asli.",
          "translation": "這是真皮。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "kulit",
              "meaning": "皮",
              "tail": " "
            },
            {
              "text": "asli",
              "meaning": "真/原",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Orang asli Indonesia.",
          "translation": "土生土長的印尼人。",
          "segments": [
            {
              "text": "Orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "asli",
              "meaning": "原/真",
              "tail": " "
            },
            {
              "text": "Indonesia",
              "meaning": "印尼",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Terasa nyata.",
          "translation": "感覺很真實。",
          "segments": [
            {
              "text": "Terasa",
              "meaning": "感覺被...",
              "tail": " "
            },
            {
              "text": "nyata",
              "meaning": "真實",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "買東西怕買到假貨問 Ini asli? (這正版嗎)。",
      "image_file": "real.png"
    },
    {
      "id": "adj-29",
      "term_zh": "有趣的",
      "related_terms": [
        {
          "term_target": "menarik",
          "pronunciation": [
            "/mə.na.rɪk/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "menarik",
              "meaning": "吸引人/有趣",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Buku ini menarik.",
          "translation": "這本書很有趣。",
          "segments": [
            {
              "text": "Buku",
              "meaning": "書",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "menarik",
              "meaning": "有趣",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sangat menarik.",
          "translation": "非常有趣。",
          "segments": [
            {
              "text": "Sangat",
              "meaning": "非常",
              "tail": " "
            },
            {
              "text": "menarik",
              "meaning": "吸引人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ide yang menarik.",
          "translation": "有趣的點子。",
          "segments": [
            {
              "text": "Ide",
              "meaning": "點子",
              "tail": " "
            },
            {
              "text": "yang",
              "meaning": "那個...的",
              "tail": " "
            },
            {
              "text": "menarik",
              "meaning": "有趣",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "如果指好笑的有趣，用 Lucu。",
      "image_file": "interesting.png"
    },
    {
      "id": "adj-30",
      "term_zh": "美麗的",
      "related_terms": [
        {
          "term_target": "cantik",
          "pronunciation": [
            "/tʃan.tɪk/"
          ],
          "specific_note": "形容人(女)",
          "segments": [
            {
              "text": "cantik",
              "meaning": "漂亮",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "indah",
          "pronunciation": [
            "/in.dah/"
          ],
          "specific_note": "形容風景",
          "segments": [
            {
              "text": "indah",
              "meaning": "美麗",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kamu cantik sekali.",
          "translation": "你非常漂亮。",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "cantik",
              "meaning": "漂亮",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pemandangannya indah.",
          "translation": "風景很美。",
          "segments": [
            {
              "text": "Pemandangannya",
              "meaning": "風景+那",
              "tail": " "
            },
            {
              "text": "indah",
              "meaning": "美麗",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bunga ini cantik.",
          "translation": "這朵花很美。",
          "segments": [
            {
              "text": "Bunga",
              "meaning": "花",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "cantik",
              "meaning": "漂亮",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "稱讚男生帥要用 Ganteng。",
      "image_file": "beautiful.png"
    },
    {
      "id": "adj-31",
      "term_zh": "便宜的",
      "related_terms": [
        {
          "term_target": "murah",
          "pronunciation": [
            "/mu.rah/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "murah",
              "meaning": "便宜",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Harganya murah.",
          "translation": "價格便宜。",
          "segments": [
            {
              "text": "Harganya",
              "meaning": "價格",
              "tail": " "
            },
            {
              "text": "murah",
              "meaning": "便宜",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Murah banget!",
          "translation": "超便宜！(口語)",
          "segments": [
            {
              "text": "Murah",
              "meaning": "便宜",
              "tail": " "
            },
            {
              "text": "banget",
              "meaning": "非常",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Cari yang murah saja.",
          "translation": "找便宜的就好。",
          "segments": [
            {
              "text": "Cari",
              "meaning": "找",
              "tail": " "
            },
            {
              "text": "yang",
              "meaning": "那個...的",
              "tail": " "
            },
            {
              "text": "murah",
              "meaning": "便宜",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "僅/就",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Murah meriah 是成語，指「便宜又好/熱鬧」。",
      "image_file": "cheap.png"
    },
    {
      "id": "adj-32",
      "term_zh": "昂貴的",
      "related_terms": [
        {
          "term_target": "mahal",
          "pronunciation": [
            "/ma.hal/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "mahal",
              "meaning": "貴",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Terlalu mahal.",
          "translation": "太貴了。",
          "segments": [
            {
              "text": "Terlalu",
              "meaning": "太",
              "tail": " "
            },
            {
              "text": "mahal",
              "meaning": "貴",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mobil mahal.",
          "translation": "昂貴的車。",
          "segments": [
            {
              "text": "Mobil",
              "meaning": "車",
              "tail": " "
            },
            {
              "text": "mahal",
              "meaning": "貴",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mahal banget!",
          "translation": "貴死了！(口語)",
          "segments": [
            {
              "text": "Mahal",
              "meaning": "貴",
              "tail": " "
            },
            {
              "text": "banget",
              "meaning": "非常",
              "tail": "!"
            }
          ]
        }
      ],
      "usage_note": "殺價時可以說 Mahal banget, kurang dong (太貴了，少一點啦)。",
      "image_file": "expensive.png"
    },
    {
      "id": "adj-33",
      "term_zh": "飢餓的",
      "related_terms": [
        {
          "term_target": "lapar",
          "pronunciation": [
            "/la.par/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "lapar",
              "meaning": "餓",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya lapar.",
          "translation": "我餓了。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lapar",
              "meaning": "餓",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu lapar nggak?",
          "translation": "你餓不餓？(口語)",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "lapar",
              "meaning": "餓",
              "tail": " "
            },
            {
              "text": "nggak",
              "meaning": "不",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Perut saya lapar.",
          "translation": "我肚子餓。",
          "segments": [
            {
              "text": "Perut",
              "meaning": "肚子",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lapar",
              "meaning": "餓",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "渴是 Haus。",
      "image_file": "hungry.png"
    },
    {
      "id": "adj-34",
      "term_zh": "疲累的",
      "related_terms": [
        {
          "term_target": "capek",
          "pronunciation": [
            "/tʃa.pɛk/"
          ],
          "specific_note": "口語常用",
          "segments": [
            {
              "text": "capek",
              "meaning": "累",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "lelah",
          "pronunciation": [
            "/lə.lah/"
          ],
          "specific_note": "正式/書面",
          "segments": [
            {
              "text": "lelah",
              "meaning": "疲憊",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya capek.",
          "translation": "我累了。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "capek",
              "meaning": "累",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Capek kerja.",
          "translation": "工作很累。",
          "segments": [
            {
              "text": "Capek",
              "meaning": "累",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Istirahat kalau lelah.",
          "translation": "累了就休息。",
          "segments": [
            {
              "text": "Istirahat",
              "meaning": "休息",
              "tail": " "
            },
            {
              "text": "kalau",
              "meaning": "如果",
              "tail": " "
            },
            {
              "text": "lelah",
              "meaning": "累",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "生活中 90% 的情況都說 Capek。",
      "image_file": "tired.png"
    },
    {
      "id": "adj-35",
      "term_zh": "忙碌的",
      "related_terms": [
        {
          "term_target": "sibuk",
          "pronunciation": [
            "/si.bʊk/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sibuk",
              "meaning": "忙",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lagi sibuk?",
          "translation": "正在忙嗎？",
          "segments": [
            {
              "text": "Lagi",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "sibuk",
              "meaning": "忙",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya sibuk sekali.",
          "translation": "我非常忙。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sibuk",
              "meaning": "忙",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Maaf, saya sedang sibuk.",
          "translation": "抱歉，我現在很忙。",
          "segments": [
            {
              "text": "Maaf",
              "meaning": "抱歉",
              "tail": ", "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "sibuk",
              "meaning": "忙",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "沒空。",
      "image_file": "busy.png"
    },
    {
      "id": "adj-36",
      "term_zh": "高興的",
      "related_terms": [
        {
          "term_target": "senang",
          "pronunciation": [
            "/sə.naŋ/"
          ],
          "specific_note": "開心/喜歡",
          "segments": [
            {
              "text": "senang",
              "meaning": "高興",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "bahagia",
          "pronunciation": [
            "/ba.ha.gi.a/"
          ],
          "specific_note": "幸福/快樂",
          "segments": [
            {
              "text": "bahagia",
              "meaning": "幸福",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya senang mendengarnya.",
          "translation": "我很高興聽到這件事。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "senang",
              "meaning": "高興",
              "tail": " "
            },
            {
              "text": "mendengarnya",
              "meaning": "聽到它",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hidup bahagia.",
          "translation": "幸福的生活。",
          "segments": [
            {
              "text": "Hidup",
              "meaning": "生活/活著",
              "tail": " "
            },
            {
              "text": "bahagia",
              "meaning": "幸福/快樂",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu senang?",
          "translation": "你開心嗎？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "senang",
              "meaning": "開心",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Senang 是心情好，Bahagia 是深層的幸福。",
      "image_file": "happy.png"
    },
    {
      "id": "adj-37",
      "term_zh": "悲傷的",
      "related_terms": [
        {
          "term_target": "sedih",
          "pronunciation": [
            "/sə.dɪh/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sedih",
              "meaning": "難過",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Jangan sedih.",
          "translation": "別難過。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "sedih",
              "meaning": "難過",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cerita sedih.",
          "translation": "悲傷的故事。",
          "segments": [
            {
              "text": "Cerita",
              "meaning": "故事",
              "tail": " "
            },
            {
              "text": "sedih",
              "meaning": "悲傷",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya merasa sedih.",
          "translation": "我覺得難過。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "merasa",
              "meaning": "感覺",
              "tail": " "
            },
            {
              "text": "sedih",
              "meaning": "難過",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "難過。",
      "image_file": "sad.png"
    },
    {
      "id": "adj-38",
      "term_zh": "相似的",
      "related_terms": [
        {
          "term_target": "mirip",
          "pronunciation": [
            "/mi.rɪp/"
          ],
          "specific_note": "長得像",
          "segments": [
            {
              "text": "mirip",
              "meaning": "像",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "sama",
          "pronunciation": [
            "/sa.ma/"
          ],
          "specific_note": "一樣",
          "segments": [
            {
              "text": "sama",
              "meaning": "相同",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kalian mirip.",
          "translation": "你們長得很像。",
          "segments": [
            {
              "text": "Kalian",
              "meaning": "你們",
              "tail": " "
            },
            {
              "text": "mirip",
              "meaning": "像",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Suaranya mirip.",
          "translation": "聲音很像。",
          "segments": [
            {
              "text": "Suaranya",
              "meaning": "聲音+他的",
              "tail": " "
            },
            {
              "text": "mirip",
              "meaning": "像",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hampir sama.",
          "translation": "幾乎一樣。",
          "segments": [
            {
              "text": "Hampir",
              "meaning": "幾乎",
              "tail": " "
            },
            {
              "text": "sama",
              "meaning": "一樣",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Mirip 是看起來像，Sama 是完全一樣。",
      "image_file": "similar.png"
    },
    {
      "id": "adj-39",
      "term_zh": "有名的",
      "related_terms": [
        {
          "term_target": "terkenal",
          "pronunciation": [
            "/tər.kə.nal/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "terkenal",
              "meaning": "有名",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Artis terkenal.",
          "translation": "知名藝人。",
          "segments": [
            {
              "text": "Artis",
              "meaning": "藝人",
              "tail": " "
            },
            {
              "text": "terkenal",
              "meaning": "有名",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tempat ini terkenal.",
          "translation": "這地方很有名。",
          "segments": [
            {
              "text": "Tempat",
              "meaning": "地方",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "terkenal",
              "meaning": "有名",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Makanan terkenal.",
          "translation": "有名的食物。",
          "segments": [
            {
              "text": "Makanan",
              "meaning": "食物",
              "tail": " "
            },
            {
              "text": "terkenal",
              "meaning": "有名",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "被大眾認識。",
      "image_file": "famous.png"
    },
    {
      "id": "adj-40",
      "term_zh": "外國的",
      "related_terms": [
        {
          "term_target": "asing",
          "pronunciation": [
            "/a.siŋ/"
          ],
          "specific_note": "外國/陌生",
          "segments": [
            {
              "text": "asing",
              "meaning": "外國的",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "luar negeri",
          "pronunciation": [
            "/lu.ar nə.gə.ri/"
          ],
          "specific_note": "國外",
          "segments": [
            {
              "text": "luar negeri",
              "meaning": "國外",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Orang asing.",
          "translation": "外國人 (或陌生人)。",
          "segments": [
            {
              "text": "Orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "asing",
              "meaning": "外國/陌生",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bahasa asing.",
          "translation": "外語。",
          "segments": [
            {
              "text": "Bahasa",
              "meaning": "語言",
              "tail": " "
            },
            {
              "text": "asing",
              "meaning": "外國",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pergi ke luar negeri.",
          "translation": "去國外。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "luar negeri",
              "meaning": "國外",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Bule (布雷) 是印尼人對白人外國人的俗稱。",
      "image_file": "foreign.png"
    },
    {
      "id": "adj-41",
      "term_zh": "聰明的",
      "related_terms": [
        {
          "term_target": "pintar",
          "pronunciation": [
            "/pin.tar/"
          ],
          "specific_note": "聰明/擅長",
          "segments": [
            {
              "text": "pintar",
              "meaning": "聰明",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "cerdas",
          "pronunciation": [
            "/tʃər.das/"
          ],
          "specific_note": "智商高/睿智",
          "segments": [
            {
              "text": "cerdas",
              "meaning": "智能高",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dia anak pintar.",
          "translation": "他是個聰明的孩子。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "anak",
              "meaning": "孩子",
              "tail": " "
            },
            {
              "text": "pintar",
              "meaning": "聰明",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu pintar masak.",
          "translation": "你很會(聰明)做菜。",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "pintar",
              "meaning": "擅長",
              "tail": " "
            },
            {
              "text": "masak",
              "meaning": "煮飯",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Idenya cerdas.",
          "translation": "這點子很聰明。",
          "segments": [
            {
              "text": "Idenya",
              "meaning": "點子+那",
              "tail": " "
            },
            {
              "text": "cerdas",
              "meaning": "睿智",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Pintar 也可以用來形容「擅長」某事。",
      "image_file": "intelligent.png"
    },
    {
      "id": "adj-42",
      "term_zh": "危險的",
      "related_terms": [
        {
          "term_target": "berbahaya",
          "pronunciation": [
            "/bər.ba.ha.ja/"
          ],
          "specific_note": "形容詞",
          "segments": [
            {
              "text": "berbahaya",
              "meaning": "危險的",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "bahaya",
          "pronunciation": [
            "/ba.ha.ja/"
          ],
          "specific_note": "名詞/口語",
          "segments": [
            {
              "text": "bahaya",
              "meaning": "危險",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Awas, bahaya!",
          "translation": "小心，危險！",
          "segments": [
            {
              "text": "Awas",
              "meaning": "當心",
              "tail": ", "
            },
            {
              "text": "bahaya",
              "meaning": "危險",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Itu sangat berbahaya.",
          "translation": "那非常危險。",
          "segments": [
            {
              "text": "Itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "sangat",
              "meaning": "非常",
              "tail": " "
            },
            {
              "text": "berbahaya",
              "meaning": "危險",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jangan ke sana, bahaya.",
          "translation": "別去那裡，很危險。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "sana",
              "meaning": "那裡",
              "tail": ", "
            },
            {
              "text": "bahaya",
              "meaning": "危險",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "看到警示牌寫 BAHAYA 就是危險的意思。",
      "image_file": "dangerous.png"
    },
    {
      "id": "adj-43",
      "term_zh": "仁慈的",
      "related_terms": [
        {
          "term_target": "baik hati",
          "pronunciation": [
            "/ba.ik ha.ti/"
          ],
          "specific_note": "好心",
          "segments": [
            {
              "text": "baik",
              "meaning": "好",
              "tail": " "
            },
            {
              "text": "hati",
              "meaning": "心",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "ramah",
          "pronunciation": [
            "/ra.mah/"
          ],
          "specific_note": "友善/親切",
          "segments": [
            {
              "text": "ramah",
              "meaning": "友善",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dia sangat baik.",
          "translation": "他非常好(仁慈)。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "sangat",
              "meaning": "非常",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "好",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Orangnya ramah.",
          "translation": "那個人很親切。",
          "segments": [
            {
              "text": "Orangnya",
              "meaning": "那個人",
              "tail": " "
            },
            {
              "text": "ramah",
              "meaning": "友善",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Terima kasih, kamu baik sekali.",
          "translation": "謝謝，你人真好。",
          "segments": [
            {
              "text": "Terima",
              "meaning": "接受",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "給予",
              "tail": ", "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "好",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "形容人很好通常直接說 Baik。",
      "image_file": "kind.png"
    },
    {
      "id": "adj-44",
      "term_zh": "所有的／每一個",
      "related_terms": [
        {
          "term_target": "setiap",
          "pronunciation": [
            "/sə.ti.ap/"
          ],
          "specific_note": "每一個",
          "segments": [
            {
              "text": "setiap",
              "meaning": "每個",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "semua",
          "pronunciation": [
            "/sə.mu.a/"
          ],
          "specific_note": "全部",
          "segments": [
            {
              "text": "semua",
              "meaning": "所有",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Setiap hari.",
          "translation": "每一天。",
          "segments": [
            {
              "text": "Setiap",
              "meaning": "每個",
              "tail": " "
            },
            {
              "text": "hari",
              "meaning": "天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Setiap orang beda.",
          "translation": "每個人都不同。",
          "segments": [
            {
              "text": "Setiap",
              "meaning": "每個",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "beda",
              "meaning": "不同",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Semua orang tahu.",
          "translation": "所有人都知道。",
          "segments": [
            {
              "text": "Semua",
              "meaning": "所有",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "tahu",
              "meaning": "知道",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語常將 Setiap 縮短為 Tiap (如 Tiap hari)。",
      "image_file": "every.png"
    },
    {
      "id": "adj-45",
      "term_zh": "喜愛的",
      "related_terms": [
        {
          "term_target": "favorit",
          "pronunciation": [
            "/fa.vɔ.rɪt/"
          ],
          "specific_note": "外來語",
          "segments": [
            {
              "text": "favorit",
              "meaning": "最愛",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "kesukaan",
          "pronunciation": [
            "/kə.su.ka.an/"
          ],
          "specific_note": "愛好",
          "segments": [
            {
              "text": "kesukaan",
              "meaning": "喜愛之物",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini makanan favorit saya.",
          "translation": "這是我最愛的食物。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "makanan",
              "meaning": "食物",
              "tail": " "
            },
            {
              "text": "favorit",
              "meaning": "最愛",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Apa warna kesukaanmu?",
          "translation": "你喜歡什麼顏色？",
          "segments": [
            {
              "text": "Apa",
              "meaning": "什麼",
              "tail": " "
            },
            {
              "text": "warna",
              "meaning": "顏色",
              "tail": " "
            },
            {
              "text": "kesukaanmu",
              "meaning": "你的喜好",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Lagu kesukaan.",
          "translation": "喜愛的歌。",
          "segments": [
            {
              "text": "Lagu",
              "meaning": "歌",
              "tail": " "
            },
            {
              "text": "kesukaan",
              "meaning": "喜愛",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Favorit 和 Kesukaan 可以互換使用。",
      "image_file": "favorite.png"
    },
    {
      "id": "adj-46",
      "term_zh": "美味的",
      "related_terms": [
        {
          "term_target": "enak",
          "pronunciation": [
            "/ɛ.nak/"
          ],
          "specific_note": "好吃/舒服",
          "segments": [
            {
              "text": "enak",
              "meaning": "好吃",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Rasanya enak banget.",
          "translation": "味道超級好吃。",
          "segments": [
            {
              "text": "Rasanya",
              "meaning": "味道+那",
              "tail": " "
            },
            {
              "text": "enak",
              "meaning": "好吃",
              "tail": " "
            },
            {
              "text": "banget",
              "meaning": "非常",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Makanannya enak.",
          "translation": "食物很好吃。",
          "segments": [
            {
              "text": "Makanannya",
              "meaning": "食物+那",
              "tail": " "
            },
            {
              "text": "enak",
              "meaning": "好吃",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Wah, enak nih!",
          "translation": "哇，這很好吃耶！",
          "segments": [
            {
              "text": "Wah",
              "meaning": "哇",
              "tail": ", "
            },
            {
              "text": "enak",
              "meaning": "好吃",
              "tail": " "
            },
            {
              "text": "nih",
              "meaning": "這個(語氣)",
              "tail": "!"
            }
          ]
        }
      ],
      "usage_note": "Enak 萬用詞：Badan tidak enak (身體不舒服)、Tidur enak (睡得香)。",
      "image_file": "delicious.png"
    }
  ]
},
{
  "id": "nouns",
  "name": "核心名詞",
  "items": [
    {
      "id": "n-01",
      "term_zh": "時間",
      "related_terms": [
        {
          "term_target": "waktu",
          "pronunciation": [
            "/wak.tu/"
          ],
          "specific_note": "抽象時間",
          "segments": [
            {
              "text": "waktu",
              "meaning": "時間",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "jam",
          "pronunciation": [
            "/dʒam/"
          ],
          "specific_note": "時刻/鐘點",
          "segments": [
            {
              "text": "jam",
              "meaning": "點鐘",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Jam berapa sekarang?",
          "translation": "現在幾點？(問時間必用 Jam)",
          "segments": [
            {
              "text": "Jam",
              "meaning": "點鐘",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya tidak punya waktu.",
          "translation": "我沒時間。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "沒有",
              "tail": " "
            },
            {
              "text": "punya",
              "meaning": "擁有",
              "tail": " "
            },
            {
              "text": "waktu",
              "meaning": "時間",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lain kali saja.",
          "translation": "下次吧 (改天)。",
          "segments": [
            {
              "text": "Lain",
              "meaning": "別的/其他",
              "tail": " "
            },
            {
              "text": "kali",
              "meaning": "次/時間",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "就好/罷了",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "問「幾點」一定要用 Jam，不能用 Waktu。",
      "image_file": "time.png"
    },
    {
      "id": "n-02",
      "term_zh": "人們",
      "related_terms": [
        {
          "term_target": "orang",
          "pronunciation": [
            "/o.raŋ/"
          ],
          "specific_note": "人",
          "segments": [
            {
              "text": "orang",
              "meaning": "人",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Banyak orang.",
          "translation": "很多人。",
          "segments": [
            {
              "text": "Banyak",
              "meaning": "許多",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Orang Indonesia ramah.",
          "translation": "印尼人很友善。",
          "segments": [
            {
              "text": "Orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "Indonesia",
              "meaning": "印尼",
              "tail": " "
            },
            {
              "text": "ramah",
              "meaning": "親切/友善",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ada berapa orang?",
          "translation": "有幾個人？",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "複數可以說 Orang-orang，但通常上下文理解即可。",
      "image_file": "people.png"
    },
    {
      "id": "n-03",
      "term_zh": "金錢",
      "related_terms": [
        {
          "term_target": "uang",
          "pronunciation": [
            "/u.aŋ/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "uang",
              "meaning": "錢",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tidak ada uang.",
          "translation": "沒錢。",
          "segments": [
            {
              "text": "Tidak",
              "meaning": "不/沒",
              "tail": " "
            },
            {
              "text": "ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "uang",
              "meaning": "錢",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ini uangnya.",
          "translation": "這是(要付的)錢。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "uangnya",
              "meaning": "錢+那個",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pinjam uang dulu.",
          "translation": "先借個錢。",
          "segments": [
            {
              "text": "Pinjam",
              "meaning": "借",
              "tail": " "
            },
            {
              "text": "uang",
              "meaning": "錢",
              "tail": " "
            },
            {
              "text": "dulu",
              "meaning": "先",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語有時會說 Duit (錢)。",
      "image_file": "money.png"
    },
    {
      "id": "n-04",
      "term_zh": "孩子",
      "related_terms": [
        {
          "term_target": "anak",
          "pronunciation": [
            "/a.nak/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "anak",
              "meaning": "孩子",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Anak kecil.",
          "translation": "小孩 (小孩子)。",
          "segments": [
            {
              "text": "Anak",
              "meaning": "孩子",
              "tail": " "
            },
            {
              "text": "kecil",
              "meaning": "小",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya punya dua anak.",
          "translation": "我有兩個孩子。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "punya",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "dua",
              "meaning": "二",
              "tail": " "
            },
            {
              "text": "anak",
              "meaning": "孩子",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia masih anak-anak.",
          "translation": "他還是個孩子。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "masih",
              "meaning": "仍然/還",
              "tail": " "
            },
            {
              "text": "anak-anak",
              "meaning": "小孩(複數概念)",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Anak 也可以指「某地的人」，如 Anak Jakarta (雅加達的孩子/人)。",
      "image_file": "child.png"
    },
    {
      "id": "n-05",
      "term_zh": "水",
      "related_terms": [
        {
          "term_target": "air",
          "pronunciation": [
            "/a.ɪr/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "air",
              "meaning": "水",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Minum air putih.",
          "translation": "喝白開水。",
          "segments": [
            {
              "text": "Minum",
              "meaning": "喝",
              "tail": " "
            },
            {
              "text": "air",
              "meaning": "水",
              "tail": " "
            },
            {
              "text": "putih",
              "meaning": "白色/純淨",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Minta air hangat.",
          "translation": "我要溫水。",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求/要",
              "tail": " "
            },
            {
              "text": "air",
              "meaning": "水",
              "tail": " "
            },
            {
              "text": "hangat",
              "meaning": "溫暖",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Airnya dingin.",
          "translation": "水是冷的。",
          "segments": [
            {
              "text": "Airnya",
              "meaning": "水+那",
              "tail": " "
            },
            {
              "text": "dingin",
              "meaning": "冷",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "在餐廳點水要說 Air putih (白水)，不然可能會被問要什麼飲料。",
      "image_file": "water.png"
    },
    {
      "id": "n-06",
      "term_zh": "食物",
      "related_terms": [
        {
          "term_target": "makanan",
          "pronunciation": [
            "/ma.ka.nan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "makanan",
              "meaning": "食物",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Makanan enak.",
          "translation": "好吃的食物。",
          "segments": [
            {
              "text": "Makanan",
              "meaning": "食物",
              "tail": " "
            },
            {
              "text": "enak",
              "meaning": "好吃",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mau pesan makanan?",
          "translation": "要點餐(食物)嗎？",
          "segments": [
            {
              "text": "Mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "pesan",
              "meaning": "訂/點",
              "tail": " "
            },
            {
              "text": "makanan",
              "meaning": "食物",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Makanan khas Indonesia.",
          "translation": "印尼特色美食。",
          "segments": [
            {
              "text": "Makanan",
              "meaning": "食物",
              "tail": " "
            },
            {
              "text": "khas",
              "meaning": "典型/特色",
              "tail": " "
            },
            {
              "text": "Indonesia",
              "meaning": "印尼",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Makan 是動詞「吃」，Makanan 是名詞「食物」。",
      "image_file": "food.png"
    },
    {
      "id": "n-07",
      "term_zh": "朋友",
      "related_terms": [
        {
          "term_target": "teman",
          "pronunciation": [
            "/tə.man/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "teman",
              "meaning": "朋友",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dia teman saya.",
          "translation": "他是我朋友。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "teman",
              "meaning": "朋友",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Teman baik.",
          "translation": "好朋友。",
          "segments": [
            {
              "text": "Teman",
              "meaning": "朋友",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "好",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pergi sama teman.",
          "translation": "跟朋友去。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "sama",
              "meaning": "跟/和",
              "tail": " "
            },
            {
              "text": "teman",
              "meaning": "朋友",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Teman 也可以指「伴侶」或「夥伴」。",
      "image_file": "friend.png"
    },
    {
      "id": "n-08",
      "term_zh": "家庭",
      "related_terms": [
        {
          "term_target": "keluarga",
          "pronunciation": [
            "/kə.lu.ar.ga/"
          ],
          "specific_note": "家人/家庭",
          "segments": [
            {
              "text": "keluarga",
              "meaning": "家庭",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya sayang keluarga.",
          "translation": "我愛我的家人。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sayang",
              "meaning": "愛/疼惜",
              "tail": " "
            },
            {
              "text": "keluarga",
              "meaning": "家人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Keluarga besar.",
          "translation": "大家庭。",
          "segments": [
            {
              "text": "Keluarga",
              "meaning": "家庭",
              "tail": " "
            },
            {
              "text": "besar",
              "meaning": "大",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Salam untuk keluarga.",
          "translation": "代我向家人問好。",
          "segments": [
            {
              "text": "Salam",
              "meaning": "問候",
              "tail": " "
            },
            {
              "text": "untuk",
              "meaning": "給/為了",
              "tail": " "
            },
            {
              "text": "keluarga",
              "meaning": "家人",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "包含父母、兄弟姊妹。",
      "image_file": "family.png"
    },
    {
      "id": "n-09",
      "term_zh": "學生",
      "related_terms": [
        {
          "term_target": "siswa",
          "pronunciation": [
            "/sɪs.wa/"
          ],
          "specific_note": "中小學生",
          "segments": [
            {
              "text": "siswa",
              "meaning": "學生",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "mahasiswa",
          "pronunciation": [
            "/ma.ha.sɪs.wa/"
          ],
          "specific_note": "大學生",
          "segments": [
            {
              "text": "mahasiswa",
              "meaning": "大學生",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya mahasiswa.",
          "translation": "我是大學生。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mahasiswa",
              "meaning": "大學生",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Banyak siswa di sekolah.",
          "translation": "學校裡有很多學生。",
          "segments": [
            {
              "text": "Banyak",
              "meaning": "許多",
              "tail": " "
            },
            {
              "text": "siswa",
              "meaning": "學生",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sekolah",
              "meaning": "學校",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kartu pelajar.",
          "translation": "學生證。",
          "segments": [
            {
              "text": "Kartu",
              "meaning": "卡",
              "tail": " "
            },
            {
              "text": "pelajar",
              "meaning": "學習者/學生",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Maha(大)+Siswa(學生) = 大學生。",
      "image_file": "student.png"
    },
    {
      "id": "n-10",
      "term_zh": "文化",
      "related_terms": [
        {
          "term_target": "budaya",
          "pronunciation": [
            "/bu.da.ja/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "budaya",
              "meaning": "文化",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Budaya Indonesia.",
          "translation": "印尼文化。",
          "segments": [
            {
              "text": "Budaya",
              "meaning": "文化",
              "tail": " "
            },
            {
              "text": "Indonesia",
              "meaning": "印尼",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Belajar budaya baru.",
          "translation": "學習新文化。",
          "segments": [
            {
              "text": "Belajar",
              "meaning": "學習",
              "tail": " "
            },
            {
              "text": "budaya",
              "meaning": "文化",
              "tail": " "
            },
            {
              "text": "baru",
              "meaning": "新",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Budayanya unik.",
          "translation": "那裡的文化很獨特。",
          "segments": [
            {
              "text": "Budayanya",
              "meaning": "文化+那個",
              "tail": " "
            },
            {
              "text": "unik",
              "meaning": "獨特",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "指傳統習俗或現代文化。",
      "image_file": "culture.png"
    },
    {
      "id": "n-11",
      "term_zh": "問題",
      "related_terms": [
        {
          "term_target": "masalah",
          "pronunciation": [
            "/ma.sa.lah/"
          ],
          "specific_note": "麻煩/難題",
          "segments": [
            {
              "text": "masalah",
              "meaning": "問題",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tidak ada masalah.",
          "translation": "沒問題。",
          "segments": [
            {
              "text": "Tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "masalah",
              "meaning": "問題",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ada masalah apa?",
          "translation": "有什麼問題嗎？",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "masalah",
              "meaning": "問題",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Gak masalah.",
          "translation": "沒差 / 無所謂 (口語)。",
          "segments": [
            {
              "text": "Gak",
              "meaning": "不(Tidak口語)",
              "tail": " "
            },
            {
              "text": "masalah",
              "meaning": "問題",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "若是「提問」的問題，用 Pertanyaan。",
      "image_file": "problem.png"
    },
    {
      "id": "n-12",
      "term_zh": "公司",
      "related_terms": [
        {
          "term_target": "perusahaan",
          "pronunciation": [
            "/pə.ru.sa.ha.an/"
          ],
          "specific_note": "企業",
          "segments": [
            {
              "text": "perusahaan",
              "meaning": "公司",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "kantor",
          "pronunciation": [
            "/kan.tɔr/"
          ],
          "specific_note": "辦公室/上班處",
          "segments": [
            {
              "text": "kantor",
              "meaning": "辦公室",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Perusahaan besar.",
          "translation": "大公司。",
          "segments": [
            {
              "text": "Perusahaan",
              "meaning": "公司",
              "tail": " "
            },
            {
              "text": "besar",
              "meaning": "大",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya pergi ke kantor.",
          "translation": "我去公司(辦公室)上班。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "kantor",
              "meaning": "辦公室",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pindah perusahaan.",
          "translation": "換公司(跳槽)。",
          "segments": [
            {
              "text": "Pindah",
              "meaning": "搬/移",
              "tail": " "
            },
            {
              "text": "perusahaan",
              "meaning": "公司",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "日常說「去上班」通常說 Ke kantor (去辦公室)。",
      "image_file": "company.png"
    },
    {
      "id": "n-13",
      "term_zh": "男性",
      "related_terms": [
        {
          "term_target": "pria",
          "pronunciation": [
            "/pri.a/"
          ],
          "specific_note": "正式/標示",
          "segments": [
            {
              "text": "pria",
              "meaning": "男性",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "laki-laki",
          "pronunciation": [
            "/la.ki la.ki/"
          ],
          "specific_note": "性別/口語",
          "segments": [
            {
              "text": "laki-laki",
              "meaning": "男人",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dia laki-laki.",
          "translation": "他是男的。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "laki-laki",
              "meaning": "男人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Toilet pria.",
          "translation": "男廁。",
          "segments": [
            {
              "text": "Toilet",
              "meaning": "廁所",
              "tail": " "
            },
            {
              "text": "pria",
              "meaning": "男性",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pria ganteng.",
          "translation": "帥哥。",
          "segments": [
            {
              "text": "Pria",
              "meaning": "男子",
              "tail": " "
            },
            {
              "text": "ganteng",
              "meaning": "帥",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "找廁所時請認明 Pria (男) 和 Wanita (女)。",
      "image_file": "man.png"
    },
    {
      "id": "n-14",
      "term_zh": "女性",
      "related_terms": [
        {
          "term_target": "wanita",
          "pronunciation": [
            "/wa.ni.ta/"
          ],
          "specific_note": "正式/標示",
          "segments": [
            {
              "text": "wanita",
              "meaning": "女性",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "perempuan",
          "pronunciation": [
            "/pə.rəm.pu.an/"
          ],
          "specific_note": "性別/口語",
          "segments": [
            {
              "text": "perempuan",
              "meaning": "女人",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dia perempuan.",
          "translation": "她是女的。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "她",
              "tail": " "
            },
            {
              "text": "perempuan",
              "meaning": "女人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Toilet wanita.",
          "translation": "女廁。",
          "segments": [
            {
              "text": "Toilet",
              "meaning": "廁所",
              "tail": " "
            },
            {
              "text": "wanita",
              "meaning": "女性",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Wanita karir.",
          "translation": "職業婦女。",
          "segments": [
            {
              "text": "Wanita",
              "meaning": "女性",
              "tail": " "
            },
            {
              "text": "karir",
              "meaning": "職涯/事業",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "日常對話多用 Perempuan。",
      "image_file": "woman.png"
    },
    {
      "id": "n-15",
      "term_zh": "學校",
      "related_terms": [
        {
          "term_target": "sekolah",
          "pronunciation": [
            "/sə.ko.lah/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sekolah",
              "meaning": "學校",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Berangkat sekolah.",
          "translation": "出發去學校。",
          "segments": [
            {
              "text": "Berangkat",
              "meaning": "出發",
              "tail": " "
            },
            {
              "text": "sekolah",
              "meaning": "學校",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Libur sekolah.",
          "translation": "學校放假。",
          "segments": [
            {
              "text": "Libur",
              "meaning": "假期",
              "tail": " "
            },
            {
              "text": "sekolah",
              "meaning": "學校",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sekolahnya jauh.",
          "translation": "學校很遠。",
          "segments": [
            {
              "text": "Sekolahnya",
              "meaning": "學校+那",
              "tail": " "
            },
            {
              "text": "jauh",
              "meaning": "遠",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "上學也可以說 Masuk sekolah (進學校)。",
      "image_file": "school.png"
    },
    {
      "id": "n-16",
      "term_zh": "老師",
      "related_terms": [
        {
          "term_target": "guru",
          "pronunciation": [
            "/gu.ru/"
          ],
          "specific_note": "中小學老師",
          "segments": [
            {
              "text": "guru",
              "meaning": "老師",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "dosen",
          "pronunciation": [
            "/do.sɛn/"
          ],
          "specific_note": "大學講師",
          "segments": [
            {
              "text": "dosen",
              "meaning": "講師",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Selamat pagi, Bu Guru.",
          "translation": "早安，女老師。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早上",
              "tail": ", "
            },
            {
              "text": "Bu",
              "meaning": "女士/媽媽",
              "tail": " "
            },
            {
              "text": "Guru",
              "meaning": "老師",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Guru bahasa Inggris.",
          "translation": "英文老師。",
          "segments": [
            {
              "text": "Guru",
              "meaning": "老師",
              "tail": " "
            },
            {
              "text": "bahasa",
              "meaning": "語言",
              "tail": " "
            },
            {
              "text": "Inggris",
              "meaning": "英文",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dengarkan gurumu.",
          "translation": "聽你老師的話。",
          "segments": [
            {
              "text": "Dengarkan",
              "meaning": "聆聽",
              "tail": " "
            },
            {
              "text": "gurumu",
              "meaning": "老師+你的",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "稱呼男老師用 Pak Guru，女老師用 Bu Guru。",
      "image_file": "teacher.png"
    },
    {
      "id": "n-17",
      "term_zh": "影片／電影",
      "related_terms": [
        {
          "term_target": "film",
          "pronunciation": [
            "/fɪ.ləm/"
          ],
          "specific_note": "電影/影片",
          "segments": [
            {
              "text": "film",
              "meaning": "影片",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "bioskop",
          "pronunciation": [
            "/bi.os.kɔp/"
          ],
          "specific_note": "電影院",
          "segments": [
            {
              "text": "bioskop",
              "meaning": "電影院",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ayo nonton film.",
          "translation": "來去看電影吧。",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來",
              "tail": " "
            },
            {
              "text": "nonton",
              "meaning": "觀看(Menonton簡稱)",
              "tail": " "
            },
            {
              "text": "film",
              "meaning": "電影",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Filmnya seru.",
          "translation": "這部電影很精彩。",
          "segments": [
            {
              "text": "Filmnya",
              "meaning": "電影+那",
              "tail": " "
            },
            {
              "text": "seru",
              "meaning": "精彩/刺激",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pergi ke bioskop.",
          "translation": "去電影院。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "bioskop",
              "meaning": "電影院",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Nonton 是 Watch 的口語說法。",
      "image_file": "movie.png"
    },
    {
      "id": "n-18",
      "term_zh": "手機",
      "related_terms": [
        {
          "term_target": "HP",
          "pronunciation": [
            "/ha pe/"
          ],
          "specific_note": "手機(Handphone)",
          "segments": [
            {
              "text": "HP",
              "meaning": "手機",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Minta nomor HP.",
          "translation": "求電話號碼 (要手機號)。",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求",
              "tail": " "
            },
            {
              "text": "nomor",
              "meaning": "號碼",
              "tail": " "
            },
            {
              "text": "HP",
              "meaning": "手機",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Main HP terus.",
          "translation": "一直玩手機。",
          "segments": [
            {
              "text": "Main",
              "meaning": "玩",
              "tail": " "
            },
            {
              "text": "HP",
              "meaning": "手機",
              "tail": " "
            },
            {
              "text": "terus",
              "meaning": "繼續/一直",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "HP saya lowbat.",
          "translation": "我手機沒電了 (Lowbat是常用借詞)。",
          "segments": [
            {
              "text": "HP",
              "meaning": "手機",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lowbat",
              "meaning": "低電量",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼人說 HP (哈-佩)，很少說 Cellphone。",
      "image_file": "phone.png"
    },
    {
      "id": "n-19",
      "term_zh": "電腦",
      "related_terms": [
        {
          "term_target": "komputer",
          "pronunciation": [
            "/kɔm.pu.tər/"
          ],
          "specific_note": "桌機",
          "segments": [
            {
              "text": "komputer",
              "meaning": "電腦",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "laptop",
          "pronunciation": [
            "/lɛp.tɔp/"
          ],
          "specific_note": "筆電",
          "segments": [
            {
              "text": "laptop",
              "meaning": "筆電",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Main komputer.",
          "translation": "玩電腦。",
          "segments": [
            {
              "text": "Main",
              "meaning": "玩",
              "tail": " "
            },
            {
              "text": "komputer",
              "meaning": "電腦",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Komputer rusak.",
          "translation": "電腦壞了。",
          "segments": [
            {
              "text": "Komputer",
              "meaning": "電腦",
              "tail": " "
            },
            {
              "text": "rusak",
              "meaning": "壞掉",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Buka laptop.",
          "translation": "打開筆電。",
          "segments": [
            {
              "text": "Buka",
              "meaning": "開",
              "tail": " "
            },
            {
              "text": "laptop",
              "meaning": "筆電",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "現在筆電非常普及，常用 Laptop。",
      "image_file": "computer.png"
    },
    {
      "id": "n-20",
      "term_zh": "車",
      "related_terms": [
        {
          "term_target": "mobil",
          "pronunciation": [
            "/mo.bɪl/"
          ],
          "specific_note": "汽車",
          "segments": [
            {
              "text": "mobil",
              "meaning": "汽車",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Naik mobil.",
          "translation": "搭車/開車。",
          "segments": [
            {
              "text": "Naik",
              "meaning": "搭乘/上",
              "tail": " "
            },
            {
              "text": "mobil",
              "meaning": "車",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Beli mobil baru.",
          "translation": "買新車。",
          "segments": [
            {
              "text": "Beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "mobil",
              "meaning": "車",
              "tail": " "
            },
            {
              "text": "baru",
              "meaning": "新",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Macet, banyak mobil.",
          "translation": "塞車，很多車。",
          "segments": [
            {
              "text": "Macet",
              "meaning": "塞車/卡住",
              "tail": ", "
            },
            {
              "text": "banyak",
              "meaning": "許多",
              "tail": " "
            },
            {
              "text": "mobil",
              "meaning": "車",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Motor 是機車，Mobil 是汽車，別搞混喔。",
      "image_file": "car.png"
    },
    {
      "id": "n-21",
      "term_zh": "市場",
      "related_terms": [
        {
          "term_target": "pasar",
          "pronunciation": [
            "/pa.sar/"
          ],
          "specific_note": "傳統市場",
          "segments": [
            {
              "text": "pasar",
              "meaning": "市場",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pasar malam.",
          "translation": "夜市。",
          "segments": [
            {
              "text": "Pasar",
              "meaning": "市場",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "夜",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pergi ke pasar.",
          "translation": "去市場。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "pasar",
              "meaning": "市場",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pasarnya ramai.",
          "translation": "市場很熱鬧(擁擠)。",
          "segments": [
            {
              "text": "Pasarnya",
              "meaning": "市場+那",
              "tail": " "
            },
            {
              "text": "ramai",
              "meaning": "熱鬧/擁擠",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "買菜的地方。",
      "image_file": "market.png"
    },
    {
      "id": "n-22",
      "term_zh": "衣服",
      "related_terms": [
        {
          "term_target": "baju",
          "pronunciation": [
            "/ba.dʒu/"
          ],
          "specific_note": "上衣/衣服統稱",
          "segments": [
            {
              "text": "baju",
              "meaning": "衣服",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "pakaian",
          "pronunciation": [
            "/pa.kai.an/"
          ],
          "specific_note": "服裝(正式)",
          "segments": [
            {
              "text": "pakaian",
              "meaning": "服裝",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Beli baju.",
          "translation": "買衣服。",
          "segments": [
            {
              "text": "Beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "baju",
              "meaning": "衣服",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pakai bajumu.",
          "translation": "穿上你的衣服。",
          "segments": [
            {
              "text": "Pakai",
              "meaning": "穿",
              "tail": " "
            },
            {
              "text": "bajumu",
              "meaning": "衣服+你的",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bajunya kotor.",
          "translation": "衣服髒了。",
          "segments": [
            {
              "text": "Bajunya",
              "meaning": "衣服+那",
              "tail": " "
            },
            {
              "text": "kotor",
              "meaning": "髒",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "日常口語多用 Baju。",
      "image_file": "clothes.png"
    },
    {
      "id": "n-23",
      "term_zh": "商店",
      "related_terms": [
        {
          "term_target": "toko",
          "pronunciation": [
            "/to.ko/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "toko",
              "meaning": "店",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Toko kopi.",
          "translation": "咖啡店 (通常說 Kafe 或 Warung kopi)。",
          "segments": [
            {
              "text": "Toko",
              "meaning": "店",
              "tail": " "
            },
            {
              "text": "kopi",
              "meaning": "咖啡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tokonya tutup.",
          "translation": "店關了。",
          "segments": [
            {
              "text": "Tokonya",
              "meaning": "店+那",
              "tail": " "
            },
            {
              "text": "tutup",
              "meaning": "關閉",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ini toko baju.",
          "translation": "這是服飾店。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "toko",
              "meaning": "店",
              "tail": " "
            },
            {
              "text": "baju",
              "meaning": "衣服",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "小吃攤叫 Warung。",
      "image_file": "shop.png"
    },
    {
      "id": "n-24",
      "term_zh": "巴士",
      "related_terms": [
        {
          "term_target": "bus",
          "pronunciation": [
            "/bis/"
          ],
          "specific_note": "發音近Bis",
          "segments": [
            {
              "text": "bus",
              "meaning": "公車",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Naik bus.",
          "translation": "搭公車。",
          "segments": [
            {
              "text": "Naik",
              "meaning": "搭乘",
              "tail": " "
            },
            {
              "text": "bus",
              "meaning": "公車",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Busnya terlambat.",
          "translation": "公車遲到了。",
          "segments": [
            {
              "text": "Busnya",
              "meaning": "公車+那",
              "tail": " "
            },
            {
              "text": "terlambat",
              "meaning": "遲到",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Turun dari bus.",
          "translation": "下公車。",
          "segments": [
            {
              "text": "Turun",
              "meaning": "下",
              "tail": " "
            },
            {
              "text": "dari",
              "meaning": "從",
              "tail": " "
            },
            {
              "text": "bus",
              "meaning": "公車",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼文拼寫是 Bus，但唸法常像 Bis。",
      "image_file": "bus.png"
    },
    {
      "id": "n-25",
      "term_zh": "街道",
      "related_terms": [
        {
          "term_target": "jalan",
          "pronunciation": [
            "/dʒa.lan/"
          ],
          "specific_note": "路/街",
          "segments": [
            {
              "text": "jalan",
              "meaning": "路",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Di jalan.",
          "translation": "在街上 / 在路上。",
          "segments": [
            {
              "text": "Di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "jalan",
              "meaning": "路",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Seberang jalan.",
          "translation": "過馬路 / 對街。",
          "segments": [
            {
              "text": "Seberang",
              "meaning": "對面/穿越",
              "tail": " "
            },
            {
              "text": "jalan",
              "meaning": "路",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jalan macet.",
          "translation": "路很塞 (塞車)。",
          "segments": [
            {
              "text": "Jalan",
              "meaning": "路",
              "tail": " "
            },
            {
              "text": "macet",
              "meaning": "塞住",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "地址上的 Jl. 就是 Jalan 的縮寫。",
      "image_file": "street.png"
    },
    {
      "id": "n-26",
      "term_zh": "房子/家",
      "related_terms": [
        {
          "term_target": "rumah",
          "pronunciation": [
            "/ru.mah/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "rumah",
              "meaning": "房子/家",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Rumah saya.",
          "translation": "我家。",
          "segments": [
            {
              "text": "Rumah",
              "meaning": "家",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Datang ke rumah saya.",
          "translation": "來我家。",
          "segments": [
            {
              "text": "Datang",
              "meaning": "來",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "rumah",
              "meaning": "家",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mereka beli rumah.",
          "translation": "他們買了房子。",
          "segments": [
            {
              "text": "Mereka",
              "meaning": "他們",
              "tail": " "
            },
            {
              "text": "beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "rumah",
              "meaning": "房子",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Rumah Makan = 餐廳 (吃飯的房子)。",
      "image_file": "house.png"
    },
    {
      "id": "n-27",
      "term_zh": "母親",
      "related_terms": [
        {
          "term_target": "ibu",
          "pronunciation": [
            "/i.bu/"
          ],
          "specific_note": "母親/女士",
          "segments": [
            {
              "text": "ibu",
              "meaning": "母親",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ibu saya.",
          "translation": "我媽媽。",
          "segments": [
            {
              "text": "Ibu",
              "meaning": "母親",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya bantu ibu.",
          "translation": "我幫媽媽。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "bantu",
              "meaning": "幫忙",
              "tail": " "
            },
            {
              "text": "ibu",
              "meaning": "母親",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ibu sedang masak.",
          "translation": "媽媽正在煮飯。",
          "segments": [
            {
              "text": "Ibu",
              "meaning": "母親",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "masak",
              "meaning": "煮飯",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Ibu 也是對成年女性的尊稱 (像 Ma'am)。",
      "image_file": "mother.png"
    },
    {
      "id": "n-28",
      "term_zh": "父親",
      "related_terms": [
        {
          "term_target": "ayah",
          "pronunciation": [
            "/a.jah/"
          ],
          "specific_note": "父親",
          "segments": [
            {
              "text": "ayah",
              "meaning": "父親",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "bapak",
          "pronunciation": [
            "/ba.pak/"
          ],
          "specific_note": "父親/先生",
          "segments": [
            {
              "text": "bapak",
              "meaning": "父親",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ayah saya.",
          "translation": "我爸爸。",
          "segments": [
            {
              "text": "Ayah",
              "meaning": "父親",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Buah jatuh tidak jauh dari pohonnya.",
          "translation": "有其父必有其子 (諺語：果實掉落離樹不遠)。",
          "segments": [
            {
              "text": "Buah",
              "meaning": "水果",
              "tail": " "
            },
            {
              "text": "jatuh",
              "meaning": "掉落",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "jauh",
              "meaning": "遠",
              "tail": " "
            },
            {
              "text": "dari",
              "meaning": "從",
              "tail": " "
            },
            {
              "text": "pohonnya",
              "meaning": "樹",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ayah sedang kerja.",
          "translation": "爸爸正在工作。",
          "segments": [
            {
              "text": "Ayah",
              "meaning": "父親",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Bapak 也是對成年男性的尊稱 (像 Sir/Mr.)。",
      "image_file": "father.png"
    },
    {
      "id": "n-29",
      "term_zh": "兄弟",
      "related_terms": [
        {
          "term_target": "saudara laki-laki",
          "pronunciation": [
            "/sau.da.ra la.ki la.ki/"
          ],
          "specific_note": "男性手足",
          "segments": [
            {
              "text": "saudara",
              "meaning": "親戚/手足",
              "tail": " "
            },
            {
              "text": "laki-laki",
              "meaning": "男",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "kakak / adik",
          "pronunciation": [
            "/ka.kak/",
            "/a.dɪk/"
          ],
          "specific_note": "兄/弟",
          "segments": [
            {
              "text": "kakak",
              "meaning": "哥哥/姊姊",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kakak laki-laki saya.",
          "translation": "我的哥哥。",
          "segments": [
            {
              "text": "Kakak",
              "meaning": "年長手足",
              "tail": " "
            },
            {
              "text": "laki-laki",
              "meaning": "男",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya punya dua adik.",
          "translation": "我有兩個弟弟/妹妹 (年幼手足)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "punya",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "dua",
              "meaning": "二",
              "tail": " "
            },
            {
              "text": "adik",
              "meaning": "弟妹",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia adik laki-laki saya.",
          "translation": "他是我弟弟。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "adik",
              "meaning": "弟妹",
              "tail": " "
            },
            {
              "text": "laki-laki",
              "meaning": "男",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Kakak (兄/姊) 和 Adik (弟/妹) 不分性別，需加 Laki-laki 或 Perempuan 區分。",
      "image_file": "brother.png"
    },
    {
      "id": "n-30",
      "term_zh": "姐妹",
      "related_terms": [
        {
          "term_target": "saudara perempuan",
          "pronunciation": [
            "/sau.da.ra pə.rəm.pu.an/"
          ],
          "specific_note": "女性手足",
          "segments": [
            {
              "text": "saudara",
              "meaning": "手足",
              "tail": " "
            },
            {
              "text": "perempuan",
              "meaning": "女",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kakak perempuan saya.",
          "translation": "我姊姊。",
          "segments": [
            {
              "text": "Kakak",
              "meaning": "年長手足",
              "tail": " "
            },
            {
              "text": "perempuan",
              "meaning": "女",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Adik perempuan saya lucu.",
          "translation": "我妹妹很可愛。",
          "segments": [
            {
              "text": "Adik",
              "meaning": "年幼手足",
              "tail": " "
            },
            {
              "text": "perempuan",
              "meaning": "女",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lucu",
              "meaning": "可愛/好笑",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Punya saudara perempuan?",
          "translation": "有姐妹嗎？",
          "segments": [
            {
              "text": "Punya",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "saudara",
              "meaning": "手足",
              "tail": " "
            },
            {
              "text": "perempuan",
              "meaning": "女",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Kakak 常用來稱呼比自己年長的平輩。",
      "image_file": "sister.png"
    },
    {
      "id": "n-31",
      "term_zh": "中文",
      "related_terms": [
        {
          "term_target": "Mandarin",
          "pronunciation": [
            "/man.da.rɪn/"
          ],
          "specific_note": "普通話",
          "segments": [
            {
              "text": "Mandarin",
              "meaning": "中文",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bicara Mandarin.",
          "translation": "說中文。",
          "segments": [
            {
              "text": "Bicara",
              "meaning": "說",
              "tail": " "
            },
            {
              "text": "Mandarin",
              "meaning": "中文",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mandarin itu susah.",
          "translation": "中文很難。",
          "segments": [
            {
              "text": "Mandarin",
              "meaning": "中文",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "susah",
              "meaning": "困難",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya belajar Mandarin.",
          "translation": "我正在學中文。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "belajar",
              "meaning": "學習",
              "tail": " "
            },
            {
              "text": "Mandarin",
              "meaning": "中文",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語稱中文為 Bahasa Mandarin。",
      "image_file": "chinese.png"
    },
    {
      "id": "n-32",
      "term_zh": "早晨",
      "related_terms": [
        {
          "term_target": "pagi",
          "pronunciation": [
            "/pa.gi/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "pagi",
              "meaning": "早晨",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Di pagi hari.",
          "translation": "在早晨時。",
          "segments": [
            {
              "text": "Di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早",
              "tail": " "
            },
            {
              "text": "hari",
              "meaning": "天/日",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Selamat pagi.",
          "translation": "早安。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早上",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya lari pagi.",
          "translation": "我晨跑 (跑早上)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lari",
              "meaning": "跑",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "10點前都算 Pagi。",
      "image_file": "morning.png"
    },
    {
      "id": "n-33",
      "term_zh": "夜晚",
      "related_terms": [
        {
          "term_target": "malam",
          "pronunciation": [
            "/ma.lam/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "malam",
              "meaning": "夜晚",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Selamat malam.",
          "translation": "晚安 (問候)。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tadi malam.",
          "translation": "昨晚 (剛剛的晚上)。",
          "segments": [
            {
              "text": "Tadi",
              "meaning": "剛才",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya belajar malam ini.",
          "translation": "我今晚讀書。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "belajar",
              "meaning": "讀書",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "太陽下山後就是 Malam。",
      "image_file": "night.png"
    },
    {
      "id": "n-34",
      "term_zh": "票／車票",
      "related_terms": [
        {
          "term_target": "tiket",
          "pronunciation": [
            "/ti.kɛt/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tiket",
              "meaning": "票",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Satu tiket.",
          "translation": "一張票。",
          "segments": [
            {
              "text": "Satu",
              "meaning": "一",
              "tail": " "
            },
            {
              "text": "tiket",
              "meaning": "票",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tiketnya di mana?",
          "translation": "票在哪裡？",
          "segments": [
            {
              "text": "Tiketnya",
              "meaning": "票+那",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Beli tiket kereta.",
          "translation": "買火車票。",
          "segments": [
            {
              "text": "Beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "tiket",
              "meaning": "票",
              "tail": " "
            },
            {
              "text": "kereta",
              "meaning": "火車",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "門票也是 Tiket (如 Tiket masuk)。",
      "image_file": "ticket.png"
    },
    {
      "id": "n-35",
      "term_zh": "包包",
      "related_terms": [
        {
          "term_target": "tas",
          "pronunciation": [
            "/tas/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tas",
              "meaning": "包包",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tas besar.",
          "translation": "大包包。",
          "segments": [
            {
              "text": "Tas",
              "meaning": "包",
              "tail": " "
            },
            {
              "text": "besar",
              "meaning": "大",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Buka tasmu.",
          "translation": "打開你的包包。",
          "segments": [
            {
              "text": "Buka",
              "meaning": "打開",
              "tail": " "
            },
            {
              "text": "tasmu",
              "meaning": "包+你的",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tas saya hilang.",
          "translation": "我的包包不見了。",
          "segments": [
            {
              "text": "Tas",
              "meaning": "包",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "hilang",
              "meaning": "消失/遺失",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "塑膠袋叫 Kantong plastik。",
      "image_file": "bag.png"
    },
    {
      "id": "n-36",
      "term_zh": "杯子",
      "related_terms": [
        {
          "term_target": "gelas",
          "pronunciation": [
            "/gə.las/"
          ],
          "specific_note": "玻璃杯",
          "segments": [
            {
              "text": "gelas",
              "meaning": "杯子",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "cangkir",
          "pronunciation": [
            "/tʃaŋ.kɪr/"
          ],
          "specific_note": "馬克杯/茶杯",
          "segments": [
            {
              "text": "cangkir",
              "meaning": "茶杯",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Satu gelas teh.",
          "translation": "一杯茶。",
          "segments": [
            {
              "text": "Satu",
              "meaning": "一",
              "tail": " "
            },
            {
              "text": "gelas",
              "meaning": "杯",
              "tail": " "
            },
            {
              "text": "teh",
              "meaning": "茶",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Minta gelas baru.",
          "translation": "請給我一個新杯子。",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求",
              "tail": " "
            },
            {
              "text": "gelas",
              "meaning": "杯",
              "tail": " "
            },
            {
              "text": "baru",
              "meaning": "新",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cuci gelas.",
          "translation": "洗杯子。",
          "segments": [
            {
              "text": "Cuci",
              "meaning": "洗",
              "tail": " "
            },
            {
              "text": "gelas",
              "meaning": "杯子",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "日常喝水的玻璃杯用 Gelas。",
      "image_file": "cup.png"
    },
    {
      "id": "n-37",
      "term_zh": "醫生",
      "related_terms": [
        {
          "term_target": "dokter",
          "pronunciation": [
            "/dɔk.tər/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "dokter",
              "meaning": "醫生",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pergi ke dokter.",
          "translation": "看(去)醫生。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "dokter",
              "meaning": "醫生",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dokternya sibuk.",
          "translation": "醫生很忙。",
          "segments": [
            {
              "text": "Dokternya",
              "meaning": "醫生+那",
              "tail": " "
            },
            {
              "text": "sibuk",
              "meaning": "忙",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Panggil dokter.",
          "translation": "叫醫生來。",
          "segments": [
            {
              "text": "Panggil",
              "meaning": "呼叫",
              "tail": " "
            },
            {
              "text": "dokter",
              "meaning": "醫生",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "稱呼醫生為 Pak Dokter (男) 或 Bu Dokter (女)。",
      "image_file": "doctor.png"
    },
    {
      "id": "n-38",
      "term_zh": "警察",
      "related_terms": [
        {
          "term_target": "polisi",
          "pronunciation": [
            "/po.li.si/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "polisi",
              "meaning": "警察",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Panggil polisi.",
          "translation": "叫警察。",
          "segments": [
            {
              "text": "Panggil",
              "meaning": "叫",
              "tail": " "
            },
            {
              "text": "polisi",
              "meaning": "警察",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ada polisi.",
          "translation": "有警察。",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "polisi",
              "meaning": "警察",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kantor polisi.",
          "translation": "警察局 (警察辦公室)。",
          "segments": [
            {
              "text": "Kantor",
              "meaning": "辦公室/局",
              "tail": " "
            },
            {
              "text": "polisi",
              "meaning": "警察",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "遇到麻煩時大喊 Polisi!。",
      "image_file": "police.png"
    },
    {
      "id": "n-39",
      "term_zh": "醫院",
      "related_terms": [
        {
          "term_target": "rumah sakit",
          "pronunciation": [
            "/ru.mah sa.kɪt/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "rumah",
              "meaning": "房子",
              "tail": " "
            },
            {
              "text": "sakit",
              "meaning": "病",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ke rumah sakit.",
          "translation": "去醫院。",
          "segments": [
            {
              "text": "Ke",
              "meaning": "去/往",
              "tail": " "
            },
            {
              "text": "rumah",
              "meaning": "房子",
              "tail": " "
            },
            {
              "text": "sakit",
              "meaning": "病",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Rumah sakitnya besar.",
          "translation": "這間醫院很大。",
          "segments": [
            {
              "text": "Rumah sakitnya",
              "meaning": "醫院+那",
              "tail": " "
            },
            {
              "text": "besar",
              "meaning": "大",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia di rumah sakit.",
          "translation": "他在醫院裡。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "rumah",
              "meaning": "房子",
              "tail": " "
            },
            {
              "text": "sakit",
              "meaning": "病",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "常縮寫為 RS。",
      "image_file": "hospital.png"
    },
    {
      "id": "n-40",
      "term_zh": "座位",
      "related_terms": [
        {
          "term_target": "kursi",
          "pronunciation": [
            "/kʊr.si/"
          ],
          "specific_note": "椅子",
          "segments": [
            {
              "text": "kursi",
              "meaning": "椅子",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "tempat duduk",
          "pronunciation": [
            "/təm.pat du.dʊk/"
          ],
          "specific_note": "座位(坐的地方)",
          "segments": [
            {
              "text": "tempat",
              "meaning": "地方",
              "tail": " "
            },
            {
              "text": "duduk",
              "meaning": "坐",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Silakan duduk.",
          "translation": "請坐。",
          "segments": [
            {
              "text": "Silakan",
              "meaning": "請",
              "tail": " "
            },
            {
              "text": "duduk",
              "meaning": "坐",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ini kursi saya.",
          "translation": "這是我的椅子(位子)。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "kursi",
              "meaning": "椅子",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cari tempat duduk.",
          "translation": "找位子。",
          "segments": [
            {
              "text": "Cari",
              "meaning": "找",
              "tail": " "
            },
            {
              "text": "tempat",
              "meaning": "地方",
              "tail": " "
            },
            {
              "text": "duduk",
              "meaning": "坐",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "公車上的座位通常說 Tempat duduk。",
      "image_file": "seat.png"
    },
    {
      "id": "n-41",
      "term_zh": "門",
      "related_terms": [
        {
          "term_target": "pintu",
          "pronunciation": [
            "/pin.tu/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "pintu",
              "meaning": "門",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Buka pintu.",
          "translation": "開門。",
          "segments": [
            {
              "text": "Buka",
              "meaning": "開",
              "tail": " "
            },
            {
              "text": "pintu",
              "meaning": "門",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tutup pintunya.",
          "translation": "把門關上。",
          "segments": [
            {
              "text": "Tutup",
              "meaning": "關",
              "tail": " "
            },
            {
              "text": "pintunya",
              "meaning": "門+那",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kunci pintu.",
          "translation": "鎖門。",
          "segments": [
            {
              "text": "Kunci",
              "meaning": "鎖/鑰匙",
              "tail": " "
            },
            {
              "text": "pintu",
              "meaning": "門",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Pintu 也可以指入口 (Pintu masuk)。",
      "image_file": "door.png"
    },
    {
      "id": "n-42",
      "term_zh": "房間",
      "related_terms": [
        {
          "term_target": "kamar",
          "pronunciation": [
            "/ka.mar/"
          ],
          "specific_note": "臥室/私密房間",
          "segments": [
            {
              "text": "kamar",
              "meaning": "房間",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "ruangan",
          "pronunciation": [
            "/ru.a.ŋan/"
          ],
          "specific_note": "空間/廳",
          "segments": [
            {
              "text": "ruangan",
              "meaning": "空間",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini kamar saya.",
          "translation": "這是我的房間。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "kamar",
              "meaning": "房間",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamar mandi.",
          "translation": "浴室 (洗澡的房間)。",
          "segments": [
            {
              "text": "Kamar",
              "meaning": "房間",
              "tail": " "
            },
            {
              "text": "mandi",
              "meaning": "洗澡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bersihkan kamarmu.",
          "translation": "打掃你的房間。",
          "segments": [
            {
              "text": "Bersihkan",
              "meaning": "清潔",
              "tail": " "
            },
            {
              "text": "kamarmu",
              "meaning": "房間+你的",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "臥室通常簡稱 Kamar。",
      "image_file": "room.png"
    },
    {
      "id": "n-43",
      "term_zh": "車站",
      "related_terms": [
        {
          "term_target": "stasiun",
          "pronunciation": [
            "/sta.si.un/"
          ],
          "specific_note": "火車站/捷運站",
          "segments": [
            {
              "text": "stasiun",
              "meaning": "車站",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "terminal",
          "pronunciation": [
            "/tər.mi.nal/"
          ],
          "specific_note": "公車總站",
          "segments": [
            {
              "text": "terminal",
              "meaning": "轉運站",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Antar ke stasiun.",
          "translation": "載我去車站。",
          "segments": [
            {
              "text": "Antar",
              "meaning": "送/載",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "stasiun",
              "meaning": "車站",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Stasiun kereta api.",
          "translation": "火車站。",
          "segments": [
            {
              "text": "Stasiun",
              "meaning": "站",
              "tail": " "
            },
            {
              "text": "kereta api",
              "meaning": "火車",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ketemu di stasiun.",
          "translation": "在車站碰面。",
          "segments": [
            {
              "text": "Ketemu",
              "meaning": "見面",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "stasiun",
              "meaning": "車站",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "公車站牌叫做 Halte。",
      "image_file": "station.png"
    },
    {
      "id": "n-44",
      "term_zh": "地鐵",
      "related_terms": [
        {
          "term_target": "MRT",
          "pronunciation": [
            "/ɛm ar ti/"
          ],
          "specific_note": "捷運",
          "segments": [
            {
              "text": "MRT",
              "meaning": "捷運",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Naik MRT.",
          "translation": "搭捷運。",
          "segments": [
            {
              "text": "Naik",
              "meaning": "搭乘",
              "tail": " "
            },
            {
              "text": "MRT",
              "meaning": "捷運",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Stasiun MRT di mana?",
          "translation": "捷運站在哪裡？",
          "segments": [
            {
              "text": "Stasiun",
              "meaning": "站",
              "tail": " "
            },
            {
              "text": "MRT",
              "meaning": "捷運",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "MRT cepat sekali.",
          "translation": "捷運非常快。",
          "segments": [
            {
              "text": "MRT",
              "meaning": "捷運",
              "tail": " "
            },
            {
              "text": "cepat",
              "meaning": "快",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "雅加達常用 MRT 或 KRL (通勤電車)。",
      "image_file": "subway.png"
    },
    {
      "id": "n-45",
      "term_zh": "火車",
      "related_terms": [
        {
          "term_target": "kereta",
          "pronunciation": [
            "/kə.re.ta/"
          ],
          "specific_note": "簡稱",
          "segments": [
            {
              "text": "kereta",
              "meaning": "車",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "kereta api",
          "pronunciation": [
            "/kə.re.ta a.pi/"
          ],
          "specific_note": "全稱",
          "segments": [
            {
              "text": "kereta",
              "meaning": "車",
              "tail": " "
            },
            {
              "text": "api",
              "meaning": "火",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tiket kereta.",
          "translation": "火車票。",
          "segments": [
            {
              "text": "Tiket",
              "meaning": "票",
              "tail": " "
            },
            {
              "text": "kereta",
              "meaning": "火車",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kereta datang.",
          "translation": "火車來了。",
          "segments": [
            {
              "text": "Kereta",
              "meaning": "火車",
              "tail": " "
            },
            {
              "text": "datang",
              "meaning": "來",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya suka naik kereta.",
          "translation": "我喜歡搭火車。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "naik",
              "meaning": "搭乘",
              "tail": " "
            },
            {
              "text": "kereta",
              "meaning": "火車",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Kereta Api 字面意思是「火車」，現在通常簡稱 Kereta。",
      "image_file": "train.png"
    },
    {
      "id": "n-46",
      "term_zh": "機場",
      "related_terms": [
        {
          "term_target": "bandara",
          "pronunciation": [
            "/ban.da.ra/"
          ],
          "specific_note": "常用簡稱",
          "segments": [
            {
              "text": "bandara",
              "meaning": "機場",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ke bandara.",
          "translation": "去機場。",
          "segments": [
            {
              "text": "Ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "bandara",
              "meaning": "機場",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jemput di bandara.",
          "translation": "去機場接人。",
          "segments": [
            {
              "text": "Jemput",
              "meaning": "接(人)",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "bandara",
              "meaning": "機場",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bandaranya jauh.",
          "translation": "機場很遠。",
          "segments": [
            {
              "text": "Bandaranya",
              "meaning": "機場+那",
              "tail": " "
            },
            {
              "text": "jauh",
              "meaning": "遠",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "全名是 Bandar Udara (空中港口)。",
      "image_file": "airport.png"
    },
    {
      "id": "n-47",
      "term_zh": "行李",
      "related_terms": [
        {
          "term_target": "koper",
          "pronunciation": [
            "/ko.pər/"
          ],
          "specific_note": "行李箱",
          "segments": [
            {
              "text": "koper",
              "meaning": "行李箱",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "bagasi",
          "pronunciation": [
            "/ba.ga.si/"
          ],
          "specific_note": "托運行李",
          "segments": [
            {
              "text": "bagasi",
              "meaning": "行李",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Koper saya berat.",
          "translation": "我的行李箱很重。",
          "segments": [
            {
              "text": "Koper",
              "meaning": "行李箱",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "berat",
              "meaning": "重",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Titip koper.",
          "translation": "寄放行李。",
          "segments": [
            {
              "text": "Titip",
              "meaning": "寄放/委託",
              "tail": " "
            },
            {
              "text": "koper",
              "meaning": "行李",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kopernya hilang.",
          "translation": "行李不見了。",
          "segments": [
            {
              "text": "Kopernya",
              "meaning": "行李+那",
              "tail": " "
            },
            {
              "text": "hilang",
              "meaning": "消失/遺失",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "手提行李叫 Tas tangan。",
      "image_file": "luggage.png"
    },
    {
      "id": "n-48",
      "term_zh": "地圖",
      "related_terms": [
        {
          "term_target": "peta",
          "pronunciation": [
            "/pe.ta/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "peta",
              "meaning": "地圖",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lihat peta.",
          "translation": "看地圖。",
          "segments": [
            {
              "text": "Lihat",
              "meaning": "看",
              "tail": " "
            },
            {
              "text": "peta",
              "meaning": "地圖",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pakai Google Map.",
          "translation": "用谷歌地圖。",
          "segments": [
            {
              "text": "Pakai",
              "meaning": "使用",
              "tail": " "
            },
            {
              "text": "Google Map",
              "meaning": "谷歌地圖",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ada peta?",
          "translation": "有地圖嗎？",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "peta",
              "meaning": "地圖",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "現在大家都直接說 Map。",
      "image_file": "map.png"
    },
    {
      "id": "n-49",
      "term_zh": "行政櫃檯／票口",
      "related_terms": [
        {
          "term_target": "loket",
          "pronunciation": [
            "/lo.kɛt/"
          ],
          "specific_note": "售票口",
          "segments": [
            {
              "text": "loket",
              "meaning": "窗口/櫃台",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "konter",
          "pronunciation": [
            "/kɔn.tər/"
          ],
          "specific_note": "服務櫃台",
          "segments": [
            {
              "text": "konter",
              "meaning": "櫃台",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Beli di loket.",
          "translation": "在票口買。",
          "segments": [
            {
              "text": "Beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "loket",
              "meaning": "票口",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tanya di konter.",
          "translation": "去櫃檯問。",
          "segments": [
            {
              "text": "Tanya",
              "meaning": "問",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "konter",
              "meaning": "櫃檯",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Loket tiket.",
          "translation": "售票處。",
          "segments": [
            {
              "text": "Loket",
              "meaning": "窗口",
              "tail": " "
            },
            {
              "text": "tiket",
              "meaning": "票",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "買票的地方用 Loket，辦理手機業務等用 Konter。",
      "image_file": "counter.png"
    },
    {
      "id": "n-50",
      "term_zh": "大廳",
      "related_terms": [
        {
          "term_target": "lobi",
          "pronunciation": [
            "/lo.bi/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "lobi",
              "meaning": "大廳",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tunggu di lobi.",
          "translation": "在大廳等。",
          "segments": [
            {
              "text": "Tunggu",
              "meaning": "等待",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "lobi",
              "meaning": "大廳",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ketemu di lobi hotel.",
          "translation": "在飯店大廳見。",
          "segments": [
            {
              "text": "Ketemu",
              "meaning": "見面",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "lobi",
              "meaning": "大廳",
              "tail": " "
            },
            {
              "text": "hotel",
              "meaning": "飯店",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lobi ada di lantai satu.",
          "translation": "大廳在一樓。",
          "segments": [
            {
              "text": "Lobi",
              "meaning": "大廳",
              "tail": " "
            },
            {
              "text": "ada",
              "meaning": "在/有",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "lantai",
              "meaning": "樓層",
              "tail": " "
            },
            {
              "text": "satu",
              "meaning": "一",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "借用自英文 Lobby。",
      "image_file": "lobby.png"
    },
    {
      "id": "n-51",
      "term_zh": "預定",
      "related_terms": [
        {
          "term_target": "booking",
          "pronunciation": [
            "/bu.kɪŋ/"
          ],
          "specific_note": "口語常用",
          "segments": [
            {
              "text": "booking",
              "meaning": "預訂",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "reservasi",
          "pronunciation": [
            "/rə.sər.va.si/"
          ],
          "specific_note": "正式",
          "segments": [
            {
              "text": "reservasi",
              "meaning": "預約",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya mau booking.",
          "translation": "我想要預約。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "booking",
              "meaning": "預約",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sudah booking?",
          "translation": "已經預約了嗎？",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "booking",
              "meaning": "預約",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Batalkan reservasi.",
          "translation": "取消預約。",
          "segments": [
            {
              "text": "Batalkan",
              "meaning": "取消",
              "tail": " "
            },
            {
              "text": "reservasi",
              "meaning": "預約",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Pesan 也可以指訂位 (Pesan tempat)。",
      "image_file": "reservation.png"
    },
    {
      "id": "n-52",
      "term_zh": "入住",
      "related_terms": [
        {
          "term_target": "check-in",
          "pronunciation": [
            "/tʃɛk ɪn/"
          ],
          "specific_note": "英文直用",
          "segments": [
            {
              "text": "check-in",
              "meaning": "入住",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mau check-in.",
          "translation": "想要辦理入住。",
          "segments": [
            {
              "text": "Mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "check-in",
              "meaning": "入住",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jam berapa check-in?",
          "translation": "幾點可以入住？",
          "segments": [
            {
              "text": "Jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "check-in",
              "meaning": "入住",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Sudah check-in.",
          "translation": "已經入住了。",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "check-in",
              "meaning": "入住",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼飯店通用英文 Check-in。",
      "image_file": "check_in.png"
    },
    {
      "id": "n-53",
      "term_zh": "退房",
      "related_terms": [
        {
          "term_target": "check-out",
          "pronunciation": [
            "/tʃɛk aʊt/"
          ],
          "specific_note": "英文直用",
          "segments": [
            {
              "text": "check-out",
              "meaning": "退房",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mau check-out.",
          "translation": "我要退房。",
          "segments": [
            {
              "text": "Mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "check-out",
              "meaning": "退房",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Check-out jam 12.",
          "translation": "12點退房。",
          "segments": [
            {
              "text": "Check-out",
              "meaning": "退房",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "12",
              "meaning": "十二",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Belum check-out.",
          "translation": "還沒退房。",
          "segments": [
            {
              "text": "Belum",
              "meaning": "還沒",
              "tail": " "
            },
            {
              "text": "check-out",
              "meaning": "退房",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼飯店通用英文 Check-out。",
      "image_file": "check_out.png"
    },
    {
      "id": "n-54",
      "term_zh": "飲料",
      "related_terms": [
        {
          "term_target": "minuman",
          "pronunciation": [
            "/mi.nu.man/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "minuman",
              "meaning": "飲料",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pesan minuman.",
          "translation": "點飲料。",
          "segments": [
            {
              "text": "Pesan",
              "meaning": "點/訂",
              "tail": " "
            },
            {
              "text": "minuman",
              "meaning": "飲料",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Minuman dingin.",
          "translation": "冷飲。",
          "segments": [
            {
              "text": "Minuman",
              "meaning": "飲料",
              "tail": " "
            },
            {
              "text": "dingin",
              "meaning": "冷",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mau minuman apa?",
          "translation": "想要什麼飲料？",
          "segments": [
            {
              "text": "Mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "minuman",
              "meaning": "飲料",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Minum 是喝(動詞)，Minuman 是飲料(名詞)。",
      "image_file": "drink.png"
    },
    {
      "id": "n-55",
      "term_zh": "菜單",
      "related_terms": [
        {
          "term_target": "menu",
          "pronunciation": [
            "/me.nu/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "menu",
              "meaning": "菜單",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "daftar menu",
          "pronunciation": [
            "/daf.tar me.nu/"
          ],
          "specific_note": "詳細菜單表",
          "segments": [
            {
              "text": "daftar",
              "meaning": "清單/表",
              "tail": " "
            },
            {
              "text": "menu",
              "meaning": "菜單",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Minta menu.",
          "translation": "請給我菜單。",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求",
              "tail": " "
            },
            {
              "text": "menu",
              "meaning": "菜單",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lihat menu dulu.",
          "translation": "先看菜單。",
          "segments": [
            {
              "text": "Lihat",
              "meaning": "看",
              "tail": " "
            },
            {
              "text": "menu",
              "meaning": "菜單",
              "tail": " "
            },
            {
              "text": "dulu",
              "meaning": "先",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ada menu?",
          "translation": "有菜單嗎？",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "menu",
              "meaning": "菜單",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "發音接近英文 Menu，但 e 發 /e/ 音。",
      "image_file": "menu.png"
    },
    {
      "id": "n-56",
      "term_zh": "午餐",
      "related_terms": [
        {
          "term_target": "makan siang",
          "pronunciation": [
            "/ma.kan si.aŋ/"
          ],
          "specific_note": "吃+中午",
          "segments": [
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "siang",
              "meaning": "中午",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sudah makan siang?",
          "translation": "吃過午餐了嗎？",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "siang",
              "meaning": "午餐",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Ayo makan siang.",
          "translation": "來去吃午餐吧。",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來吧",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "siang",
              "meaning": "午餐",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Menu makan siang.",
          "translation": "午餐菜單。",
          "segments": [
            {
              "text": "Menu",
              "meaning": "菜單",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "siang",
              "meaning": "午餐",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Siang 指早上11點到下午3點左右。",
      "image_file": "lunch.png"
    },
    {
      "id": "n-57",
      "term_zh": "晚餐",
      "related_terms": [
        {
          "term_target": "makan malam",
          "pronunciation": [
            "/ma.kan ma.lam/"
          ],
          "specific_note": "吃+晚上",
          "segments": [
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Makan malam bersama.",
          "translation": "一起吃晚餐。",
          "segments": [
            {
              "text": "Makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚餐",
              "tail": " "
            },
            {
              "text": "bersama",
              "meaning": "一起",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Belum makan malam.",
          "translation": "還沒吃晚餐。",
          "segments": [
            {
              "text": "Belum",
              "meaning": "還沒",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚餐",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cari makan malam.",
          "translation": "找晚餐吃。",
          "segments": [
            {
              "text": "Cari",
              "meaning": "找",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚餐",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "早餐叫 Sarapan 或 Makan pagi。",
      "image_file": "dinner.png"
    },
    {
      "id": "n-58",
      "term_zh": "帳單",
      "related_terms": [
        {
          "term_target": "bon",
          "pronunciation": [
            "/bɔn/"
          ],
          "specific_note": "口語常用",
          "segments": [
            {
              "text": "bon",
              "meaning": "單據",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "tagihan",
          "pronunciation": [
            "/ta.gi.han/"
          ],
          "specific_note": "帳單/請款單",
          "segments": [
            {
              "text": "tagihan",
              "meaning": "帳單",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Minta bon.",
          "translation": "買單 (請給單據)。",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求",
              "tail": " "
            },
            {
              "text": "bon",
              "meaning": "單據",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bayar tagihan.",
          "translation": "付帳單 (如水電費)。",
          "segments": [
            {
              "text": "Bayar",
              "meaning": "付",
              "tail": " "
            },
            {
              "text": "tagihan",
              "meaning": "帳單",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Minta bill.",
          "translation": "買單 (高級餐廳常用英文)。",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求",
              "tail": " "
            },
            {
              "text": "bill",
              "meaning": "帳單",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "一般餐廳吃飯喊 Minta bon 即可。",
      "image_file": "bill.png"
    },
    {
      "id": "n-59",
      "term_zh": "價錢",
      "related_terms": [
        {
          "term_target": "harga",
          "pronunciation": [
            "/har.ga/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "harga",
              "meaning": "價格",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Berapa harganya?",
          "translation": "價格多少？",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "harganya",
              "meaning": "價格+那",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Harga pas.",
          "translation": "不二價 (死豬價)。",
          "segments": [
            {
              "text": "Harga",
              "meaning": "價格",
              "tail": " "
            },
            {
              "text": "pas",
              "meaning": "剛好/固定",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Turunkan harga.",
          "translation": "降價。",
          "segments": [
            {
              "text": "Turunkan",
              "meaning": "降低",
              "tail": " "
            },
            {
              "text": "harga",
              "meaning": "價格",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "詢價時可以只說 Berapa? (多少?)。",
      "image_file": "price.png"
    },
    {
      "id": "n-60",
      "term_zh": "收據",
      "related_terms": [
        {
          "term_target": "struk",
          "pronunciation": [
            "/struk/"
          ],
          "specific_note": "機打收據",
          "segments": [
            {
              "text": "struk",
              "meaning": "收據",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "nota",
          "pronunciation": [
            "/no.ta/"
          ],
          "specific_note": "手寫收據",
          "segments": [
            {
              "text": "nota",
              "meaning": "單據",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Minta struk.",
          "translation": "請給收據 (便利商店等)。",
          "segments": [
            {
              "text": "Minta",
              "meaning": "請求",
              "tail": " "
            },
            {
              "text": "struk",
              "meaning": "收據",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Butuh nota?",
          "translation": "需要收據嗎？(通常指手寫報帳用)",
          "segments": [
            {
              "text": "Butuh",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "nota",
              "meaning": "收據",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Simpan struknya.",
          "translation": "收據留著。",
          "segments": [
            {
              "text": "Simpan",
              "meaning": "保存",
              "tail": " "
            },
            {
              "text": "struknya",
              "meaning": "收據+那",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "正式報帳用的收據叫 Kuitansi。",
      "image_file": "receipt.png"
    },
    {
      "id": "n-61",
      "term_zh": "尺寸",
      "related_terms": [
        {
          "term_target": "ukuran",
          "pronunciation": [
            "/u.ku.ran/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "ukuran",
              "meaning": "尺寸",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ukuran besar.",
          "translation": "大尺寸。",
          "segments": [
            {
              "text": "Ukuran",
              "meaning": "尺寸",
              "tail": " "
            },
            {
              "text": "besar",
              "meaning": "大",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu pakai ukuran apa?",
          "translation": "你穿什麼尺寸？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "pakai",
              "meaning": "穿/用",
              "tail": " "
            },
            {
              "text": "ukuran",
              "meaning": "尺寸",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Ukurannya pas.",
          "translation": "尺寸剛好。",
          "segments": [
            {
              "text": "Ukurannya",
              "meaning": "尺寸+那",
              "tail": " "
            },
            {
              "text": "pas",
              "meaning": "剛好/合適",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "詢問衣服大小時常用。",
      "image_file": "size.png"
    },
    {
      "id": "n-62",
      "term_zh": "入口",
      "related_terms": [
        {
          "term_target": "pintu masuk",
          "pronunciation": [
            "/pin.tu ma.sʊk/"
          ],
          "specific_note": "進去的門",
          "segments": [
            {
              "text": "pintu",
              "meaning": "門",
              "tail": " "
            },
            {
              "text": "masuk",
              "meaning": "進",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pintu masuk utama.",
          "translation": "正門入口。",
          "segments": [
            {
              "text": "Pintu masuk",
              "meaning": "入口",
              "tail": " "
            },
            {
              "text": "utama",
              "meaning": "主要的",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Di mana pintu masuknya?",
          "translation": "入口在哪裡？",
          "segments": [
            {
              "text": "Di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": " "
            },
            {
              "text": "pintu masuknya",
              "meaning": "那個入口",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Dilarang masuk.",
          "translation": "禁止進入 (無入口)。",
          "segments": [
            {
              "text": "Dilarang",
              "meaning": "禁止",
              "tail": " "
            },
            {
              "text": "masuk",
              "meaning": "進入",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "標示牌常見詞彙。",
      "image_file": "entrance.png"
    },
    {
      "id": "n-63",
      "term_zh": "出口",
      "related_terms": [
        {
          "term_target": "pintu keluar",
          "pronunciation": [
            "/pin.tu kə.lu.ar/"
          ],
          "specific_note": "出去的門",
          "segments": [
            {
              "text": "pintu",
              "meaning": "門",
              "tail": " "
            },
            {
              "text": "keluar",
              "meaning": "出",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lewat pintu keluar.",
          "translation": "走出口。",
          "segments": [
            {
              "text": "Lewat",
              "meaning": "通過/走",
              "tail": " "
            },
            {
              "text": "pintu keluar",
              "meaning": "出口",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pintu darurat.",
          "translation": "緊急出口。",
          "segments": [
            {
              "text": "Pintu",
              "meaning": "門",
              "tail": " "
            },
            {
              "text": "darurat",
              "meaning": "緊急",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Keluar di sini.",
          "translation": "這裡出口 (從這裡出去)。",
          "segments": [
            {
              "text": "Keluar",
              "meaning": "出去",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "標示牌常見詞彙，也可以只說 Keluar。",
      "image_file": "exit.png"
    },
    {
      "id": "n-64",
      "term_zh": "台灣",
      "related_terms": [
        {
          "term_target": "Taiwan",
          "pronunciation": [
            "/tai.wan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Taiwan",
              "meaning": "台灣",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya cinta Taiwan.",
          "translation": "我愛台灣。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "cinta",
              "meaning": "愛",
              "tail": " "
            },
            {
              "text": "Taiwan",
              "meaning": "台灣",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Selamat datang di Taiwan.",
          "translation": "歡迎來台灣。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "datang",
              "meaning": "來",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "Taiwan",
              "meaning": "台灣",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Taiwan itu indah.",
          "translation": "台灣很美。",
          "segments": [
            {
              "text": "Taiwan",
              "meaning": "台灣",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那(強調)",
              "tail": " "
            },
            {
              "text": "indah",
              "meaning": "美麗",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "地名。",
      "image_file": "taiwan.png"
    },
    {
      "id": "n-65",
      "term_zh": "台灣人",
      "related_terms": [
        {
          "term_target": "orang Taiwan",
          "pronunciation": [
            "/o.raŋ tai.wan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "Taiwan",
              "meaning": "台灣",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya orang Taiwan.",
          "translation": "我是台灣人。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "Taiwan",
              "meaning": "台灣",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia juga orang Taiwan.",
          "translation": "他也是台灣人。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "juga",
              "meaning": "也",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": " "
            },
            {
              "text": "Taiwan",
              "meaning": "台灣",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya suka makanan Taiwan.",
          "translation": "我喜歡台灣食物。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "makanan",
              "meaning": "食物",
              "tail": " "
            },
            {
              "text": "Taiwan",
              "meaning": "台灣",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Orang + 國家名 = 該國人。",
      "image_file": "taiwanese.png"
    },
    {
      "id": "n-66",
      "term_zh": "一切事物",
      "related_terms": [
        {
          "term_target": "semuanya",
          "pronunciation": [
            "/sə.mu.a.ɲa/"
          ],
          "specific_note": "全部/一切",
          "segments": [
            {
              "text": "semuanya",
              "meaning": "全部",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "segalanya",
          "pronunciation": [
            "/sə.ga.la.ɲa/"
          ],
          "specific_note": "所有一切",
          "segments": [
            {
              "text": "segalanya",
              "meaning": "一切",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Semuanya baik.",
          "translation": "一切都好。",
          "segments": [
            {
              "text": "Semuanya",
              "meaning": "全部/一切",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "好",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Semuanya sudah siap?",
          "translation": "一切都準備好了嗎？",
          "segments": [
            {
              "text": "Semuanya",
              "meaning": "全部",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "siap",
              "meaning": "準備好",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Terima kasih untuk semuanya.",
          "translation": "謝謝這一切。",
          "segments": [
            {
              "text": "Terima",
              "meaning": "接受",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "給予",
              "tail": " "
            },
            {
              "text": "untuk",
              "meaning": "為了",
              "tail": " "
            },
            {
              "text": "semuanya",
              "meaning": "所有一切",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Semuanya 最常用，Segalanya 語氣較重 (如：你是我的「一切」)。",
      "image_file": "everything.png"
    },
    {
      "id": "n-67",
      "term_zh": "錢包",
      "related_terms": [
        {
          "term_target": "dompet",
          "pronunciation": [
            "/dɔm.pɛt/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "dompet",
              "meaning": "錢包",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dompet saya hilang.",
          "translation": "我的錢包不見了。",
          "segments": [
            {
              "text": "Dompet",
              "meaning": "錢包",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "hilang",
              "meaning": "消失",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dompet kosong.",
          "translation": "錢包空了。",
          "segments": [
            {
              "text": "Dompet",
              "meaning": "錢包",
              "tail": " "
            },
            {
              "text": "kosong",
              "meaning": "空",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya menemukan dompet.",
          "translation": "我撿到一個錢包。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "menemukan",
              "meaning": "發現",
              "tail": " "
            },
            {
              "text": "dompet",
              "meaning": "錢包",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "裝錢的皮夾。",
      "image_file": "wallet.png"
    },
    {
      "id": "n-68",
      "term_zh": "身分證",
      "related_terms": [
        {
          "term_target": "KTP",
          "pronunciation": [
            "/ka te pe/"
          ],
          "specific_note": "印尼身分證",
          "segments": [
            {
              "text": "KTP",
              "meaning": "身分證",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tunjukkan KTP.",
          "translation": "請出示身分證。",
          "segments": [
            {
              "text": "Tunjukkan",
              "meaning": "展示/出示",
              "tail": " "
            },
            {
              "text": "KTP",
              "meaning": "身分證",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Boleh lihat KTP?",
          "translation": "可以看身分證嗎？",
          "segments": [
            {
              "text": "Boleh",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "lihat",
              "meaning": "看",
              "tail": " "
            },
            {
              "text": "KTP",
              "meaning": "身分證",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Fotokopi KTP.",
          "translation": "身分證影本。",
          "segments": [
            {
              "text": "Fotokopi",
              "meaning": "影印",
              "tail": " "
            },
            {
              "text": "KTP",
              "meaning": "身分證",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "KTP = Kartu Tanda Penduduk (居民標誌卡)。",
      "image_file": "id.png"
    },
    {
      "id": "n-69",
      "term_zh": "護照",
      "related_terms": [
        {
          "term_target": "paspor",
          "pronunciation": [
            "/pas.pɔr/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "paspor",
              "meaning": "護照",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tunjukkan paspor.",
          "translation": "出示護照。",
          "segments": [
            {
              "text": "Tunjukkan",
              "meaning": "出示",
              "tail": " "
            },
            {
              "text": "paspor",
              "meaning": "護照",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Paspor saya hilang.",
          "translation": "我的護照弄丟了。",
          "segments": [
            {
              "text": "Paspor",
              "meaning": "護照",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "hilang",
              "meaning": "消失/遺失",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bawa paspor.",
          "translation": "帶護照。",
          "segments": [
            {
              "text": "Bawa",
              "meaning": "帶",
              "tail": " "
            },
            {
              "text": "paspor",
              "meaning": "護照",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "出國必備。",
      "image_file": "passport.png"
    },
    {
      "id": "n-70",
      "term_zh": "餐廳",
      "related_terms": [
        {
          "term_target": "restoran",
          "pronunciation": [
            "/rɛs.to.ran/"
          ],
          "specific_note": "西式/正式",
          "segments": [
            {
              "text": "restoran",
              "meaning": "餐廳",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "rumah makan",
          "pronunciation": [
            "/ru.mah ma.kan/"
          ],
          "specific_note": "一般餐館",
          "segments": [
            {
              "text": "rumah",
              "meaning": "房子",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Makan di restoran.",
          "translation": "在餐廳吃飯。",
          "segments": [
            {
              "text": "Makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "restoran",
              "meaning": "餐廳",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Restoran ini mahal.",
          "translation": "這家餐廳很貴。",
          "segments": [
            {
              "text": "Restoran",
              "meaning": "餐廳",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "mahal",
              "meaning": "貴",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cari rumah makan Padang.",
          "translation": "找巴東餐廳 (印尼著名菜系)。",
          "segments": [
            {
              "text": "Cari",
              "meaning": "找",
              "tail": " "
            },
            {
              "text": "rumah makan",
              "meaning": "餐館",
              "tail": " "
            },
            {
              "text": "Padang",
              "meaning": "巴東(地名)",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "路邊攤叫 Warung 或 Kaki lima。",
      "image_file": "restaurant.png"
    },
    {
      "id": "n-71",
      "term_zh": "飯店",
      "related_terms": [
        {
          "term_target": "hotel",
          "pronunciation": [
            "/ho.tɛl/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "hotel",
              "meaning": "飯店",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pesan hotel.",
          "translation": "訂飯店。",
          "segments": [
            {
              "text": "Pesan",
              "meaning": "預訂",
              "tail": " "
            },
            {
              "text": "hotel",
              "meaning": "飯店",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Menginap di hotel.",
          "translation": "住(過夜)在飯店。",
          "segments": [
            {
              "text": "Menginap",
              "meaning": "過夜",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "hotel",
              "meaning": "飯店",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hotel ini bagus.",
          "translation": "這間飯店很棒。",
          "segments": [
            {
              "text": "Hotel",
              "meaning": "飯店",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "bagus",
              "meaning": "棒/好",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "住宿。",
      "image_file": "hotel.png"
    },
    {
      "id": "n-72",
      "term_zh": "場所",
      "related_terms": [
        {
          "term_target": "tempat",
          "pronunciation": [
            "/təm.pat/"
          ],
          "specific_note": "地方/地點",
          "segments": [
            {
              "text": "tempat",
              "meaning": "地方",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tempat bagus.",
          "translation": "好地方。",
          "segments": [
            {
              "text": "Tempat",
              "meaning": "地方",
              "tail": " "
            },
            {
              "text": "bagus",
              "meaning": "好",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Salah tempat.",
          "translation": "走錯地方了。",
          "segments": [
            {
              "text": "Salah",
              "meaning": "錯",
              "tail": " "
            },
            {
              "text": "tempat",
              "meaning": "地方",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tempat wisata.",
          "translation": "觀光景點 (旅遊的地方)。",
          "segments": [
            {
              "text": "Tempat",
              "meaning": "地方",
              "tail": " "
            },
            {
              "text": "wisata",
              "meaning": "旅遊",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "地點。",
      "image_file": "place.png"
    },
    {
      "id": "n-73",
      "term_zh": "用品店員",
      "related_terms": [
        {
          "term_target": "pelayan toko",
          "pronunciation": [
            "/pə.la.jan to.ko/"
          ],
          "specific_note": "店員",
          "segments": [
            {
              "text": "pelayan",
              "meaning": "服務員",
              "tail": " "
            },
            {
              "text": "toko",
              "meaning": "店",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "mas / mba",
          "pronunciation": [
            "/mas/",
            "/mba/"
          ],
          "specific_note": "稱呼(男/女)",
          "segments": [
            {
              "text": "mas",
              "meaning": "小哥",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tanya pelayan.",
          "translation": "問店員。",
          "segments": [
            {
              "text": "Tanya",
              "meaning": "問",
              "tail": " "
            },
            {
              "text": "pelayan",
              "meaning": "店員",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pelayannya ramah.",
          "translation": "店員很親切。",
          "segments": [
            {
              "text": "Pelayannya",
              "meaning": "那位店員",
              "tail": " "
            },
            {
              "text": "ramah",
              "meaning": "友善",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mas, ini berapa?",
          "translation": "帥哥(店員)，這多少錢？",
          "segments": [
            {
              "text": "Mas",
              "meaning": "小哥(對男店員)",
              "tail": ", "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "叫店員時，男生叫 Mas，女生叫 Mba。",
      "image_file": "clerk.png"
    },
    {
      "id": "n-74",
      "term_zh": "超市",
      "related_terms": [
        {
          "term_target": "supermarket",
          "pronunciation": [
            "/su.pər.mar.kət/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "supermarket",
              "meaning": "超市",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ke supermarket.",
          "translation": "去超市。",
          "segments": [
            {
              "text": "Ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "supermarket",
              "meaning": "超市",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Belanja di supermarket.",
          "translation": "在超市購物。",
          "segments": [
            {
              "text": "Belanja",
              "meaning": "購物",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "supermarket",
              "meaning": "超市",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ada supermarket dekat sini?",
          "translation": "這附近有超市嗎？",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "supermarket",
              "meaning": "超市",
              "tail": " "
            },
            {
              "text": "dekat",
              "meaning": "靠近",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Indomaret / Alfamart 是印尼最常見的便利商店。",
      "image_file": "supermarket.png"
    },
    {
      "id": "n-75",
      "term_zh": "月台",
      "related_terms": [
        {
          "term_target": "peron",
          "pronunciation": [
            "/pə.rɔn/"
          ],
          "specific_note": "火車/捷運月台",
          "segments": [
            {
              "text": "peron",
              "meaning": "月台",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Peron satu.",
          "translation": "第一月台。",
          "segments": [
            {
              "text": "Peron",
              "meaning": "月台",
              "tail": " "
            },
            {
              "text": "satu",
              "meaning": "一",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tunggu di peron.",
          "translation": "在月台等。",
          "segments": [
            {
              "text": "Tunggu",
              "meaning": "等",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "peron",
              "meaning": "月台",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Peron mana?",
          "translation": "哪個月台？",
          "segments": [
            {
              "text": "Peron",
              "meaning": "月台",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪個",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Peron 專指火車或捷運的月台。",
      "image_file": "platform.png"
    },
    {
      "id": "n-76",
      "term_zh": "音樂",
      "related_terms": [
        {
          "term_target": "musik",
          "pronunciation": [
            "/mu.sɪk/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "musik",
              "meaning": "音樂",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dengar musik.",
          "translation": "聽音樂。",
          "segments": [
            {
              "text": "Dengar",
              "meaning": "聽",
              "tail": " "
            },
            {
              "text": "musik",
              "meaning": "音樂",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya suka musik pop.",
          "translation": "我喜歡流行音樂。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "musik",
              "meaning": "音樂",
              "tail": " "
            },
            {
              "text": "pop",
              "meaning": "流行",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Musiknya keras.",
          "translation": "音樂很大聲。",
          "segments": [
            {
              "text": "Musiknya",
              "meaning": "音樂+那",
              "tail": " "
            },
            {
              "text": "keras",
              "meaning": "大聲/硬",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "旋律。",
      "image_file": "music.png"
    },
    {
      "id": "n-77",
      "term_zh": "雨",
      "related_terms": [
        {
          "term_target": "hujan",
          "pronunciation": [
            "/hu.dʒan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "hujan",
              "meaning": "雨",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sedang hujan.",
          "translation": "正在下雨。",
          "segments": [
            {
              "text": "Sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "hujan",
              "meaning": "下雨",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hujan deras.",
          "translation": "下大雨 (雨很大)。",
          "segments": [
            {
              "text": "Hujan",
              "meaning": "雨",
              "tail": " "
            },
            {
              "text": "deras",
              "meaning": "大/急促",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bawa payung, hujan.",
          "translation": "帶傘，下雨了。",
          "segments": [
            {
              "text": "Bawa",
              "meaning": "帶",
              "tail": " "
            },
            {
              "text": "payung",
              "meaning": "傘",
              "tail": ", "
            },
            {
              "text": "hujan",
              "meaning": "下雨",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Musim hujan = 雨季。",
      "image_file": "rain.png"
    },
    {
      "id": "n-78",
      "term_zh": "照片",
      "related_terms": [
        {
          "term_target": "foto",
          "pronunciation": [
            "/fo.to/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "foto",
              "meaning": "照片",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ambil foto.",
          "translation": "拍照。",
          "segments": [
            {
              "text": "Ambil",
              "meaning": "拿/取",
              "tail": " "
            },
            {
              "text": "foto",
              "meaning": "照片",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lihat foto ini.",
          "translation": "看這張照片。",
          "segments": [
            {
              "text": "Lihat",
              "meaning": "看",
              "tail": " "
            },
            {
              "text": "foto",
              "meaning": "照片",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Boleh minta foto?",
          "translation": "可以合照嗎？(求照片)",
          "segments": [
            {
              "text": "Boleh",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "minta",
              "meaning": "請求",
              "tail": " "
            },
            {
              "text": "foto",
              "meaning": "照片",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Ayo foto! = 來拍照吧！",
      "image_file": "picture.png"
    },
    {
      "id": "n-79",
      "term_zh": "書",
      "related_terms": [
        {
          "term_target": "buku",
          "pronunciation": [
            "/bu.ku/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "buku",
              "meaning": "書",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Baca buku.",
          "translation": "看書/讀書。",
          "segments": [
            {
              "text": "Baca",
              "meaning": "讀",
              "tail": " "
            },
            {
              "text": "buku",
              "meaning": "書",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Buka buku.",
          "translation": "打開書。",
          "segments": [
            {
              "text": "Buka",
              "meaning": "開",
              "tail": " "
            },
            {
              "text": "buku",
              "meaning": "書",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ini buku saya.",
          "translation": "這是我的書。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "buku",
              "meaning": "書",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "書籍。",
      "image_file": "book.png"
    },
    {
      "id": "n-80",
      "term_zh": "廁所",
      "related_terms": [
        {
          "term_target": "toilet",
          "pronunciation": [
            "/tɔɪ.lɛt/"
          ],
          "specific_note": "通用",
          "segments": [
            {
              "text": "toilet",
              "meaning": "廁所",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "WC",
          "pronunciation": [
            "/we se/"
          ],
          "specific_note": "通俗(發音為Wé-Sé)",
          "segments": [
            {
              "text": "WC",
              "meaning": "廁所",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Toilet di mana?",
          "translation": "廁所在哪裡？",
          "segments": [
            {
              "text": "Toilet",
              "meaning": "廁所",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya mau ke WC.",
          "translation": "我要去上廁所。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "WC",
              "meaning": "廁所",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Toiletnya bersih.",
          "translation": "廁所很乾淨。",
          "segments": [
            {
              "text": "Toiletnya",
              "meaning": "廁所+那",
              "tail": " "
            },
            {
              "text": "bersih",
              "meaning": "乾淨",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Kamar kecil (小房間) 是比較委婉的說法。",
      "image_file": "restroom.png"
    },
    {
      "id": "n-81",
      "term_zh": "天氣",
      "related_terms": [
        {
          "term_target": "cuaca",
          "pronunciation": [
            "/tʃu.a.tʃa/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "cuaca",
              "meaning": "天氣",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Cuaca bagus.",
          "translation": "天氣好。",
          "segments": [
            {
              "text": "Cuaca",
              "meaning": "天氣",
              "tail": " "
            },
            {
              "text": "bagus",
              "meaning": "好",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cuaca buruk.",
          "translation": "天氣惡劣。",
          "segments": [
            {
              "text": "Cuaca",
              "meaning": "天氣",
              "tail": " "
            },
            {
              "text": "buruk",
              "meaning": "壞/糟",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bagaimana cuacanya?",
          "translation": "天氣如何？",
          "segments": [
            {
              "text": "Bagaimana",
              "meaning": "如何",
              "tail": " "
            },
            {
              "text": "cuacanya",
              "meaning": "天氣+那",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "氣候。",
      "image_file": "weather.png"
    },
    {
      "id": "n-82",
      "term_zh": "訊息",
      "related_terms": [
        {
          "term_target": "pesan",
          "pronunciation": [
            "/pə.san/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "pesan",
              "meaning": "訊息",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kirim pesan.",
          "translation": "傳訊息。",
          "segments": [
            {
              "text": "Kirim",
              "meaning": "寄/傳",
              "tail": " "
            },
            {
              "text": "pesan",
              "meaning": "訊息",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tinggalkan pesan.",
          "translation": "留言 (留下訊息)。",
          "segments": [
            {
              "text": "Tinggalkan",
              "meaning": "留下",
              "tail": " "
            },
            {
              "text": "pesan",
              "meaning": "訊息",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya dapat pesan.",
          "translation": "我收到訊息。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "dapat",
              "meaning": "得到",
              "tail": " "
            },
            {
              "text": "pesan",
              "meaning": "訊息",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "手機簡訊可以說 SMS，通訊軟體訊息說 Chat 或 Pesan。",
      "image_file": "message.png"
    }
  ]
},
{
  "id": "adverbs",
  "name": "副詞",
  "items": [
    {
      "id": "adv-01",
      "term_zh": "現在",
      "related_terms": [
        {
          "term_target": "sekarang",
          "pronunciation": [
            "/sə.ka.raŋ/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kerjakan sekarang.",
          "translation": "現在做。",
          "segments": [
            {
              "text": "Kerjakan",
              "meaning": "做/執行",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya sibuk sekarang.",
          "translation": "我現在很忙。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sibuk",
              "meaning": "忙",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu di mana sekarang?",
          "translation": "你現在在哪裡？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "目前。",
      "image_file": "now.png"
    },
    {
      "id": "adv-02",
      "term_zh": "非常",
      "related_terms": [
        {
          "term_target": "sangat",
          "pronunciation": [
            "/sa.ŋat/"
          ],
          "specific_note": "放形容詞前",
          "segments": [
            {
              "text": "sangat",
              "meaning": "非常",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "sekali",
          "pronunciation": [
            "/sə.ka.li/"
          ],
          "specific_note": "放形容詞後",
          "segments": [
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bagus sekali.",
          "translation": "非常好。",
          "segments": [
            {
              "text": "Bagus",
              "meaning": "好",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "非常",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Terima kasih banyak.",
          "translation": "非常謝謝你。",
          "segments": [
            {
              "text": "Terima",
              "meaning": "接受",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "給予",
              "tail": " "
            },
            {
              "text": "banyak",
              "meaning": "多",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hari ini sangat panas.",
          "translation": "今天非常熱。",
          "segments": [
            {
              "text": "Hari",
              "meaning": "天",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "sangat",
              "meaning": "非常",
              "tail": " "
            },
            {
              "text": "panas",
              "meaning": "熱",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語常用 Banget (放在形容詞後，如 Panas banget)。",
      "image_file": "very.png"
    },
    {
      "id": "adv-03",
      "term_zh": "真的",
      "related_terms": [
        {
          "term_target": "benarkah",
          "pronunciation": [
            "/bə.nar.kah/"
          ],
          "specific_note": "疑問",
          "segments": [
            {
              "text": "benarkah",
              "meaning": "真的嗎",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "sungguh",
          "pronunciation": [
            "/suŋ.guh/"
          ],
          "specific_note": "強調",
          "segments": [
            {
              "text": "sungguh",
              "meaning": "的確/真的",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Benarkah?",
          "translation": "真的嗎？",
          "segments": [
            {
              "text": "Benar",
              "meaning": "真/對",
              "tail": ""
            },
            {
              "text": "kah",
              "meaning": "嗎(疑問後綴)",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya benar-benar suka.",
          "translation": "我真的很喜歡它。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "benar-benar",
              "meaning": "真正地",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia sungguh baik.",
          "translation": "她人真的很好。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "她",
              "tail": " "
            },
            {
              "text": "sungguh",
              "meaning": "的確/真的",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "好",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語常說 Beneran? (真的喔？)。",
      "image_file": "really.png"
    },
    {
      "id": "adv-04",
      "term_zh": "好好地／很好地",
      "related_terms": [
        {
          "term_target": "dengan baik",
          "pronunciation": [
            "/də.ŋan ba.ik/"
          ],
          "specific_note": "好地",
          "segments": [
            {
              "text": "dengan",
              "meaning": "以/用",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "好",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tidur nyenyak.",
          "translation": "睡個好覺 (Sleep well)。",
          "segments": [
            {
              "text": "Tidur",
              "meaning": "睡",
              "tail": " "
            },
            {
              "text": "nyenyak",
              "meaning": "熟睡/安穩",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kerja bagus!",
          "translation": "做得好！(Well done)",
          "segments": [
            {
              "text": "Kerja",
              "meaning": "工作",
              "tail": " "
            },
            {
              "text": "bagus",
              "meaning": "棒",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Saya kurang enak badan.",
          "translation": "我身體不舒服 (I don't feel well)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "kurang",
              "meaning": "缺少/不夠",
              "tail": " "
            },
            {
              "text": "enak",
              "meaning": "舒服/好",
              "tail": " "
            },
            {
              "text": "badan",
              "meaning": "身體",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語通常不直接翻譯 well，而是用特定詞彙 (如 nyenyak, enak badan)。",
      "image_file": "well.png"
    },
    {
      "id": "adv-05",
      "term_zh": "經常",
      "related_terms": [
        {
          "term_target": "sering",
          "pronunciation": [
            "/sə.rɪŋ/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sering",
              "meaning": "經常",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya sering ke sini.",
          "translation": "我常來這。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sering",
              "meaning": "經常",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去/往",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Seberapa sering kamu olahraga?",
          "translation": "你多久(多常)運動一次？",
          "segments": [
            {
              "text": "Seberapa",
              "meaning": "多麼",
              "tail": " "
            },
            {
              "text": "sering",
              "meaning": "常",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "olahraga",
              "meaning": "運動",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Di sini sering hujan.",
          "translation": "這裡經常下雨。",
          "segments": [
            {
              "text": "Di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": " "
            },
            {
              "text": "sering",
              "meaning": "經常",
              "tail": " "
            },
            {
              "text": "hujan",
              "meaning": "下雨",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "頻率高。",
      "image_file": "often.png"
    },
    {
      "id": "adv-06",
      "term_zh": "通常",
      "related_terms": [
        {
          "term_target": "biasanya",
          "pronunciation": [
            "/bi.a.sa.ɲa/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "biasanya",
              "meaning": "通常",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Biasanya jam 6.",
          "translation": "通常在六點。",
          "segments": [
            {
              "text": "Biasanya",
              "meaning": "通常",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "點鐘",
              "tail": " "
            },
            {
              "text": "6",
              "meaning": "六",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya biasanya bangun jam 7.",
          "translation": "我通常7點起床。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "biasanya",
              "meaning": "通常",
              "tail": " "
            },
            {
              "text": "bangun",
              "meaning": "起床",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "7",
              "meaning": "七",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Biasanya kamu ngapain?",
          "translation": "你通常做什麼？(口語)",
          "segments": [
            {
              "text": "Biasanya",
              "meaning": "通常",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "ngapain",
              "meaning": "幹嘛/做什麼",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Biasa 意思是「普通/習慣」。",
      "image_file": "usually.png"
    },
    {
      "id": "adv-07",
      "term_zh": "已經",
      "related_terms": [
        {
          "term_target": "sudah",
          "pronunciation": [
            "/su.dah/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sudah selesai.",
          "translation": "已經做好了/結束了。",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "selesai",
              "meaning": "完成",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sudah jam 10.",
          "translation": "已經10點了。",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "點鐘",
              "tail": " "
            },
            {
              "text": "10",
              "meaning": "十",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya sudah makan.",
          "translation": "我已經吃過了。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Sudah 是印尼語最重要的時態標記之一。",
      "image_file": "already.png"
    },
    {
      "id": "adv-08",
      "term_zh": "只有",
      "related_terms": [
        {
          "term_target": "hanya",
          "pronunciation": [
            "/ha.ɲa/"
          ],
          "specific_note": "標準",
          "segments": [
            {
              "text": "hanya",
              "meaning": "只有",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "cuma",
          "pronunciation": [
            "/tʃu.ma/"
          ],
          "specific_note": "口語",
          "segments": [
            {
              "text": "cuma",
              "meaning": "僅僅",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hanya satu.",
          "translation": "只有一個。",
          "segments": [
            {
              "text": "Hanya",
              "meaning": "只有",
              "tail": " "
            },
            {
              "text": "satu",
              "meaning": "一",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cuma punya seratus.",
          "translation": "只有一百塊。",
          "segments": [
            {
              "text": "Cuma",
              "meaning": "只有",
              "tail": " "
            },
            {
              "text": "punya",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "seratus",
              "meaning": "一百",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hanya kamu yang bisa.",
          "translation": "只有你能做到。",
          "segments": [
            {
              "text": "Hanya",
              "meaning": "只有",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "yang",
              "meaning": "那個...的人",
              "tail": " "
            },
            {
              "text": "bisa",
              "meaning": "能",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語非常常說 Cuma。",
      "image_file": "only.png"
    },
    {
      "id": "adv-09",
      "term_zh": "再次",
      "related_terms": [
        {
          "term_target": "lagi",
          "pronunciation": [
            "/la.gi/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "lagi",
              "meaning": "再",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Coba lagi.",
          "translation": "再試一次。",
          "segments": [
            {
              "text": "Coba",
              "meaning": "嘗試",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "再",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tolong bilang lagi.",
          "translation": "請再說一次。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請",
              "tail": " "
            },
            {
              "text": "bilang",
              "meaning": "說",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "再次",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jangan lakukan itu lagi.",
          "translation": "別再那樣做了。",
          "segments": [
            {
              "text": "Jangan",
              "meaning": "別",
              "tail": " "
            },
            {
              "text": "lakukan",
              "meaning": "做",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "再",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Lagi 放在句尾表示「再」，放在句首或中間表示「正在」。",
      "image_file": "again.png"
    },
    {
      "id": "adv-10",
      "term_zh": "大約",
      "related_terms": [
        {
          "term_target": "kira-kira",
          "pronunciation": [
            "/ki.ra ki.ra/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "kira-kira",
              "meaning": "大約",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kira-kira 10 menit.",
          "translation": "大約10分鐘。",
          "segments": [
            {
              "text": "Kira-kira",
              "meaning": "大約",
              "tail": " "
            },
            {
              "text": "10",
              "meaning": "十",
              "tail": " "
            },
            {
              "text": "menit",
              "meaning": "分鐘",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jaraknya kira-kira 5 kilo.",
          "translation": "距離大約5公里。",
          "segments": [
            {
              "text": "Jaraknya",
              "meaning": "距離",
              "tail": " "
            },
            {
              "text": "kira-kira",
              "meaning": "大約",
              "tail": " "
            },
            {
              "text": "5",
              "meaning": "五",
              "tail": " "
            },
            {
              "text": "kilo",
              "meaning": "公里(簡稱)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Harganya kira-kira 50 ribu.",
          "translation": "價格大約五萬。",
          "segments": [
            {
              "text": "Harganya",
              "meaning": "價格",
              "tail": " "
            },
            {
              "text": "kira-kira",
              "meaning": "大約",
              "tail": " "
            },
            {
              "text": "50",
              "meaning": "五十",
              "tail": " "
            },
            {
              "text": "ribu",
              "meaning": "千",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "用於推測數量、時間、距離。",
      "image_file": "about.png"
    },
    {
      "id": "adv-11",
      "term_zh": "一點點",
      "related_terms": [
        {
          "term_target": "sedikit",
          "pronunciation": [
            "/sə.di.kɪt/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sedikit",
              "meaning": "一點",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pedas sedikit.",
          "translation": "一點點辣。",
          "segments": [
            {
              "text": "Pedas",
              "meaning": "辣",
              "tail": " "
            },
            {
              "text": "sedikit",
              "meaning": "一點",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya sedikit capek.",
          "translation": "我有一點累。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sedikit",
              "meaning": "一點",
              "tail": " "
            },
            {
              "text": "capek",
              "meaning": "累",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sedikit saja.",
          "translation": "只要一點點就好。",
          "segments": [
            {
              "text": "Sedikit",
              "meaning": "一點",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "僅/就",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語常簡化為 Dikit。",
      "image_file": "a_little.png"
    },
    {
      "id": "adv-12",
      "term_zh": "也是",
      "related_terms": [
        {
          "term_target": "juga",
          "pronunciation": [
            "/dʒu.ga/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "juga",
              "meaning": "也",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya juga suka.",
          "translation": "我也喜歡。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "juga",
              "meaning": "也",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia juga guru.",
          "translation": "她也是一位老師。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "她",
              "tail": " "
            },
            {
              "text": "juga",
              "meaning": "也",
              "tail": " "
            },
            {
              "text": "guru",
              "meaning": "老師",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya mau itu juga.",
          "translation": "我也想要那個。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那個",
              "tail": " "
            },
            {
              "text": "juga",
              "meaning": "也",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "表示相同情況。",
      "image_file": "also.png"
    },
    {
      "id": "adv-13",
      "term_zh": "或許",
      "related_terms": [
        {
          "term_target": "mungkin",
          "pronunciation": [
            "/muŋ.kɪn/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "mungkin",
              "meaning": "或許/可能",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mungkin nanti.",
          "translation": "也許等下吧。",
          "segments": [
            {
              "text": "Mungkin",
              "meaning": "或許",
              "tail": " "
            },
            {
              "text": "nanti",
              "meaning": "稍後",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mungkin kamu benar.",
          "translation": "也許你是對的。",
          "segments": [
            {
              "text": "Mungkin",
              "meaning": "或許",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "benar",
              "meaning": "正確",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mungkin dia lupa.",
          "translation": "或許他忘記了。",
          "segments": [
            {
              "text": "Mungkin",
              "meaning": "或許",
              "tail": " "
            },
            {
              "text": "dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "lupa",
              "meaning": "忘記",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "表示不確定。",
      "image_file": "maybe.png"
    },
    {
      "id": "adv-14",
      "term_zh": "之後",
      "related_terms": [
        {
          "term_target": "nanti",
          "pronunciation": [
            "/nan.ti/"
          ],
          "specific_note": "稍後",
          "segments": [
            {
              "text": "nanti",
              "meaning": "之後",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sampai jumpa nanti.",
          "translation": "待會見。",
          "segments": [
            {
              "text": "Sampai",
              "meaning": "直到",
              "tail": " "
            },
            {
              "text": "jumpa",
              "meaning": "相遇",
              "tail": " "
            },
            {
              "text": "nanti",
              "meaning": "之後",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Telepon saya nanti.",
          "translation": "待會打給我。",
          "segments": [
            {
              "text": "Telepon",
              "meaning": "打電話",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "nanti",
              "meaning": "稍後",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Nanti saja.",
          "translation": "等一下再說 / 晚點吧。",
          "segments": [
            {
              "text": "Nanti",
              "meaning": "稍後",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "就",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "指未來的短時間內。",
      "image_file": "later.png"
    },
    {
      "id": "adv-15",
      "term_zh": "很快",
      "related_terms": [
        {
          "term_target": "segera",
          "pronunciation": [
            "/sə.gə.ra/"
          ],
          "specific_note": "即將/立即",
          "segments": [
            {
              "text": "segera",
              "meaning": "立刻",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sampai jumpa segera.",
          "translation": "很快再見 (See you soon)。",
          "segments": [
            {
              "text": "Sampai",
              "meaning": "直到",
              "tail": " "
            },
            {
              "text": "jumpa",
              "meaning": "見",
              "tail": " "
            },
            {
              "text": "segera",
              "meaning": "快/立即",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lekas sembuh.",
          "translation": "早日康復 (Get well soon)。",
          "segments": [
            {
              "text": "Lekas",
              "meaning": "快",
              "tail": " "
            },
            {
              "text": "sembuh",
              "meaning": "康復",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Segera datang.",
          "translation": "即將到來 (Coming soon)。",
          "segments": [
            {
              "text": "Segera",
              "meaning": "即將",
              "tail": " "
            },
            {
              "text": "datang",
              "meaning": "來",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Sebentar lagi 也是「再一下、很快」的意思。",
      "image_file": "soon.png"
    },
    {
      "id": "adv-16",
      "term_zh": "一起",
      "related_terms": [
        {
          "term_target": "bersama",
          "pronunciation": [
            "/bər.sa.ma/"
          ],
          "specific_note": "標準",
          "segments": [
            {
              "text": "bersama",
              "meaning": "一起",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "bareng",
          "pronunciation": [
            "/ba.rəŋ/"
          ],
          "specific_note": "口語",
          "segments": [
            {
              "text": "bareng",
              "meaning": "一塊兒",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pergi bersama.",
          "translation": "一起去。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "bersama",
              "meaning": "一起",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kerja sama.",
          "translation": "合作 (一起工作)。",
          "segments": [
            {
              "text": "Kerja",
              "meaning": "工作",
              "tail": " "
            },
            {
              "text": "sama",
              "meaning": "一起/相同",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kita makan bareng yuk.",
          "translation": "我們一起吃飯吧 (口語)。",
          "segments": [
            {
              "text": "Kita",
              "meaning": "我們",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "bareng",
              "meaning": "一起",
              "tail": " "
            },
            {
              "text": "yuk",
              "meaning": "吧(邀約)",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Sama-sama 意思是「不客氣」或「一樣」。",
      "image_file": "together.png"
    },
    {
      "id": "adv-17",
      "term_zh": "仍然",
      "related_terms": [
        {
          "term_target": "masih",
          "pronunciation": [
            "/ma.sɪh/"
          ],
          "specific_note": "還/仍",
          "segments": [
            {
              "text": "masih",
              "meaning": "仍然",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Masih di sini.",
          "translation": "還在這裡。",
          "segments": [
            {
              "text": "Masih",
              "meaning": "仍然",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya masih lapar.",
          "translation": "我還是很餓。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "masih",
              "meaning": "還",
              "tail": " "
            },
            {
              "text": "lapar",
              "meaning": "餓",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Masih kerja?",
          "translation": "還在工作嗎？",
          "segments": [
            {
              "text": "Masih",
              "meaning": "仍然",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "持續的狀態。",
      "image_file": "still.png"
    },
    {
      "id": "adv-18",
      "term_zh": "一般來說",
      "related_terms": [
        {
          "term_target": "biasanya",
          "pronunciation": [
            "/bi.a.sa.ɲa/"
          ],
          "specific_note": "通常",
          "segments": [
            {
              "text": "biasanya",
              "meaning": "通常/一般",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "normalnya",
          "pronunciation": [
            "/nɔr.mal.ɲa/"
          ],
          "specific_note": "正常來說",
          "segments": [
            {
              "text": "normalnya",
              "meaning": "正常地",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Normalnya saya jalan kaki.",
          "translation": "一般來說我走路。",
          "segments": [
            {
              "text": "Normalnya",
              "meaning": "正常來說",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "jalan kaki",
              "meaning": "走路",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Biasanya butuh 1 jam.",
          "translation": "通常需要一小時。",
          "segments": [
            {
              "text": "Biasanya",
              "meaning": "通常",
              "tail": " "
            },
            {
              "text": "butuh",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "1",
              "meaning": "一",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "小時",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tokonya biasanya buka.",
          "translation": "那家店通常是開的。",
          "segments": [
            {
              "text": "Tokonya",
              "meaning": "店+那",
              "tail": " "
            },
            {
              "text": "biasanya",
              "meaning": "通常",
              "tail": " "
            },
            {
              "text": "buka",
              "meaning": "開",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "習慣或常態。",
      "image_file": "normally.png"
    },
    {
      "id": "adv-19",
      "term_zh": "立刻",
      "related_terms": [
        {
          "term_target": "segera",
          "pronunciation": [
            "/sə.gə.ra/"
          ],
          "specific_note": "立即(正式)",
          "segments": [
            {
              "text": "segera",
              "meaning": "立即",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "langsung",
          "pronunciation": [
            "/laŋ.sʊŋ/"
          ],
          "specific_note": "直接/馬上",
          "segments": [
            {
              "text": "langsung",
              "meaning": "直接",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pergi sekarang juga.",
          "translation": "立刻(現在馬上)去。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": " "
            },
            {
              "text": "juga",
              "meaning": "也/強調",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Berhenti segera.",
          "translation": "立刻停止。",
          "segments": [
            {
              "text": "Berhenti",
              "meaning": "停止",
              "tail": " "
            },
            {
              "text": "segera",
              "meaning": "立即",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya langsung pulang.",
          "translation": "我馬上(直接)回家。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "langsung",
              "meaning": "直接",
              "tail": " "
            },
            {
              "text": "pulang",
              "meaning": "回家",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Sekarang juga (現在也) 強調「就是現在/馬上」。",
      "image_file": "immediately.png"
    },
    {
      "id": "adv-20",
      "term_zh": "也不",
      "related_terms": [
        {
          "term_target": "juga tidak",
          "pronunciation": [
            "/dʒu.ga ti.dak/"
          ],
          "specific_note": "也+不",
          "segments": [
            {
              "text": "juga",
              "meaning": "也",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya juga tidak.",
          "translation": "我也不 (Me neither)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "juga",
              "meaning": "也",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Aku juga nggak tahu.",
          "translation": "我也亦不知道 (Neither do I)。",
          "segments": [
            {
              "text": "Aku",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "juga",
              "meaning": "也",
              "tail": " "
            },
            {
              "text": "nggak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "tahu",
              "meaning": "知道",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dua-duanya tidak bagus.",
          "translation": "兩個都不好 (Neither is good)。",
          "segments": [
            {
              "text": "Dua-duanya",
              "meaning": "兩個都",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "bagus",
              "meaning": "好",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語沒有 neither 這個單字，用「也+不」表達。",
      "image_file": "neither.png"
    }
  ]
},
{
  "id": "questions",
  "name": "疑問詞",
  "items": [
    {
      "id": "q-01",
      "term_zh": "什麼",
      "related_terms": [
        {
          "term_target": "apa",
          "pronunciation": [
            "/a.pa/"
          ],
          "specific_note": "問事物/動作",
          "segments": [
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini apa?",
          "translation": "這是什麼？",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kamu mau apa?",
          "translation": "你想要什麼？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Lagi ngapain?",
          "translation": "正在做什麼？(口語：Ngapain 是 Apa 的動詞化)",
          "segments": [
            {
              "text": "Lagi",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "ngapain",
              "meaning": "幹嘛/做什麼",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "注意：問名字要用「Siapa」(誰)，不能用 Apa。",
      "image_file": "what.png"
    },
    {
      "id": "q-02",
      "term_zh": "如何",
      "related_terms": [
        {
          "term_target": "bagaimana",
          "pronunciation": [
            "/ba.gai.ma.na/"
          ],
          "specific_note": "正式/標準",
          "segments": [
            {
              "text": "bagaimana",
              "meaning": "如何",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "gimana",
          "pronunciation": [
            "/gi.ma.na/"
          ],
          "specific_note": "口語簡稱",
          "segments": [
            {
              "text": "gimana",
              "meaning": "怎樣",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Apa kabar?",
          "translation": "你好嗎？(固定用法：消息如何)",
          "segments": [
            {
              "text": "Apa",
              "meaning": "什麼",
              "tail": " "
            },
            {
              "text": "kabar",
              "meaning": "消息",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Gimana caranya?",
          "translation": "要怎麼做？(方法是如何)",
          "segments": [
            {
              "text": "Gimana",
              "meaning": "如何",
              "tail": " "
            },
            {
              "text": "caranya",
              "meaning": "方法+那",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Bagaimana rasanya?",
          "translation": "味道如何？/ 感覺如何？",
          "segments": [
            {
              "text": "Bagaimana",
              "meaning": "如何",
              "tail": " "
            },
            {
              "text": "rasanya",
              "meaning": "味道/感覺",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "口語中幾乎都說 Gimana。",
      "image_file": "how.png"
    },
    {
      "id": "q-03",
      "term_zh": "何時",
      "related_terms": [
        {
          "term_target": "kapan",
          "pronunciation": [
            "/ka.pan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "kapan",
              "meaning": "何時",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kapan pergi?",
          "translation": "什麼時候去？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "去",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kapan kamu pulang?",
          "translation": "你什麼時候回家？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "pulang",
              "meaning": "回家",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kapan ulang tahunmu?",
          "translation": "你的生日是什麼時候？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "ulang tahun",
              "meaning": "生日",
              "tail": ""
            },
            {
              "text": "mu",
              "meaning": "你的",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "問時間點。",
      "image_file": "when.png"
    },
    {
      "id": "q-04",
      "term_zh": "哪裡",
      "related_terms": [
        {
          "term_target": "di mana",
          "pronunciation": [
            "/di ma.na/"
          ],
          "specific_note": "在哪裡(靜態)",
          "segments": [
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "ke mana",
          "pronunciation": [
            "/kə ma.na/"
          ],
          "specific_note": "去哪裡(動態)",
          "segments": [
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kamu di mana?",
          "translation": "你在哪裡？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Mau ke mana?",
          "translation": "要去哪裡？",
          "segments": [
            {
              "text": "Mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Toilet di mana?",
          "translation": "廁所在哪裡？",
          "segments": [
            {
              "text": "Toilet",
              "meaning": "廁所",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Di mana (在那裡)，Ke mana (去那裡)，Dari mana (從哪裡來)。",
      "image_file": "where.png"
    },
    {
      "id": "q-05",
      "term_zh": "誰",
      "related_terms": [
        {
          "term_target": "siapa",
          "pronunciation": [
            "/si.a.pa/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "siapa",
              "meaning": "誰",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Siapa itu?",
          "translation": "那是誰？",
          "segments": [
            {
              "text": "Siapa",
              "meaning": "誰",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Siapa nama kamu?",
          "translation": "你叫什麼名字？(字面：誰是你的名字)",
          "segments": [
            {
              "text": "Siapa",
              "meaning": "誰",
              "tail": " "
            },
            {
              "text": "nama",
              "meaning": "名字",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Ini punya siapa?",
          "translation": "這是誰的？(字面：這屬於誰)",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "punya",
              "meaning": "擁有",
              "tail": " "
            },
            {
              "text": "siapa",
              "meaning": "誰",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "印尼語問名字一定要用 Siapa (誰)，不能用 Apa (什麼)。",
      "image_file": "who.png"
    },
    {
      "id": "q-06",
      "term_zh": "為什麼",
      "related_terms": [
        {
          "term_target": "kenapa",
          "pronunciation": [
            "/kə.na.pa/"
          ],
          "specific_note": "口語常用",
          "segments": [
            {
              "text": "kenapa",
              "meaning": "為什麼",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "mengapa",
          "pronunciation": [
            "/mə.ŋa.pa/"
          ],
          "specific_note": "正式書面",
          "segments": [
            {
              "text": "mengapa",
              "meaning": "為何",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kenapa?",
          "translation": "為什麼？",
          "segments": [
            {
              "text": "Kenapa",
              "meaning": "為什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kenapa kamu terlambat?",
          "translation": "你為什麼遲到？",
          "segments": [
            {
              "text": "Kenapa",
              "meaning": "為什麼",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "terlambat",
              "meaning": "遲到",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kenapa tidak?",
          "translation": "為什麼不？/ 有何不可？",
          "segments": [
            {
              "text": "Kenapa",
              "meaning": "為什麼",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "日常生活用 Kenapa，寫文章用 Mengapa。",
      "image_file": "why.png"
    },
    {
      "id": "q-07",
      "term_zh": "哪一個",
      "related_terms": [
        {
          "term_target": "yang mana",
          "pronunciation": [
            "/jaŋ ma.na/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "yang",
              "meaning": "那個",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪/哪裡",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Yang mana?",
          "translation": "哪一個？",
          "segments": [
            {
              "text": "Yang",
              "meaning": "那個",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kamu suka yang mana?",
          "translation": "你喜歡哪一個？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "yang",
              "meaning": "那個",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Yang mana mobilmu?",
          "translation": "哪台是你的車？",
          "segments": [
            {
              "text": "Yang",
              "meaning": "那個",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪",
              "tail": " "
            },
            {
              "text": "mobilmu",
              "meaning": "車+你的",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Yang (那個) + Mana (哪) = 哪一個。",
      "image_file": "which.png"
    },
    {
      "id": "q-08",
      "term_zh": "多少（數量）",
      "related_terms": [
        {
          "term_target": "berapa",
          "pronunciation": [
            "/bə.ra.pa/"
          ],
          "specific_note": "價格/數量",
          "segments": [
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Berapa harganya?",
          "translation": "多少錢？",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "harganya",
              "meaning": "價格",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Berapa banyak?",
          "translation": "有多少？(問數量)",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "banyak",
              "meaning": "多",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Nomor berapa?",
          "translation": "幾號？",
          "segments": [
            {
              "text": "Nomor",
              "meaning": "號碼",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Berapa 是萬用詞，問錢、數量、號碼都用它。",
      "image_file": "how_much.png"
    },
    {
      "id": "q-09",
      "term_zh": "多久（時間）",
      "related_terms": [
        {
          "term_target": "berapa lama",
          "pronunciation": [
            "/bə.ra.pa la.ma/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "lama",
              "meaning": "久",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Berapa lama?",
          "translation": "要多久？",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "lama",
              "meaning": "久",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Sudah berapa lama di sini?",
          "translation": "在這裡多久了？",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "lama",
              "meaning": "久",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Butuh berapa lama?",
          "translation": "需要花多久時間？",
          "segments": [
            {
              "text": "Butuh",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "lama",
              "meaning": "久",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Lama 意思是「久」或「舊」。",
      "image_file": "how_long.png"
    },
    {
      "id": "q-10",
      "term_zh": "幾點",
      "related_terms": [
        {
          "term_target": "jam berapa",
          "pronunciation": [
            "/dʒam bə.ra.pa/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "jam",
              "meaning": "點鐘",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Jam berapa sekarang?",
          "translation": "現在幾點？",
          "segments": [
            {
              "text": "Jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kita ketemu jam berapa?",
          "translation": "我們幾點見面？",
          "segments": [
            {
              "text": "Kita",
              "meaning": "我們",
              "tail": " "
            },
            {
              "text": "ketemu",
              "meaning": "見面",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Toko buka jam berapa?",
          "translation": "商店幾點開？",
          "segments": [
            {
              "text": "Toko",
              "meaning": "店",
              "tail": " "
            },
            {
              "text": "buka",
              "meaning": "開",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "不能說 Waktu berapa，一定要說 Jam berapa。",
      "image_file": "what_time.png"
    },
    {
      "id": "q-11",
      "term_zh": "幾歲",
      "related_terms": [
        {
          "term_target": "umur berapa",
          "pronunciation": [
            "/u.mʊr bə.ra.pa/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "umur",
              "meaning": "年齡",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Umur kamu berapa?",
          "translation": "你幾歲？",
          "segments": [
            {
              "text": "Umur",
              "meaning": "年齡",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "berapa",
              "meaning": "多少",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Berapa umurnya?",
          "translation": "他幾歲？",
          "segments": [
            {
              "text": "Berapa",
              "meaning": "多少",
              "tail": " "
            },
            {
              "text": "umurnya",
              "meaning": "年齡+他的",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Umur saya 20 tahun.",
          "translation": "我20歲。",
          "segments": [
            {
              "text": "Umur",
              "meaning": "年齡",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "20",
              "meaning": "二十",
              "tail": " "
            },
            {
              "text": "tahun",
              "meaning": "年/歲",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "禮貌上問長輩年齡要謹慎，問小孩常用。",
      "image_file": "how_old.png"
    }
  ]
},
{
  "id": "time_place",
  "name": "表達場所和時間的單字",
  "items": [
    {
      "id": "tp-01",
      "term_zh": "現在",
      "related_terms": [
        {
          "term_target": "sekarang",
          "pronunciation": [
            "/sə.ka.raŋ/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lakukan sekarang.",
          "translation": "現在做。",
          "segments": [
            {
              "text": "Lakukan",
              "meaning": "做/執行",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu di mana sekarang?",
          "translation": "你現在在哪裡？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Saya lagi sibuk sekarang.",
          "translation": "我現在正忙。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "sibuk",
              "meaning": "忙碌",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "目前。",
      "image_file": "now.png"
    },
    {
      "id": "tp-02",
      "term_zh": "今天",
      "related_terms": [
        {
          "term_target": "hari ini",
          "pronunciation": [
            "/ha.ri i.ni/"
          ],
          "specific_note": "這天",
          "segments": [
            {
              "text": "hari",
              "meaning": "日子",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bukan hari ini.",
          "translation": "不是今天。",
          "segments": [
            {
              "text": "Bukan",
              "meaning": "不是",
              "tail": " "
            },
            {
              "text": "hari ini",
              "meaning": "今天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Apa kabar hari ini?",
          "translation": "你今天好嗎？",
          "segments": [
            {
              "text": "Apa",
              "meaning": "什麼",
              "tail": " "
            },
            {
              "text": "kabar",
              "meaning": "消息",
              "tail": " "
            },
            {
              "text": "hari ini",
              "meaning": "今天",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Hari ini hari Senin.",
          "translation": "今天是星期一。",
          "segments": [
            {
              "text": "Hari ini",
              "meaning": "今天",
              "tail": " "
            },
            {
              "text": "hari",
              "meaning": "星期/日",
              "tail": " "
            },
            {
              "text": "Senin",
              "meaning": "一",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "字面意思就是「這一天」。",
      "image_file": "today.png"
    },
    {
      "id": "tp-03",
      "term_zh": "明天",
      "related_terms": [
        {
          "term_target": "besok",
          "pronunciation": [
            "/be.sɔk/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "besok",
              "meaning": "明天",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sampai jumpa besok.",
          "translation": "明天見。",
          "segments": [
            {
              "text": "Sampai",
              "meaning": "直到",
              "tail": " "
            },
            {
              "text": "jumpa",
              "meaning": "相遇",
              "tail": " "
            },
            {
              "text": "besok",
              "meaning": "明天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Besok ulang tahun saya.",
          "translation": "明天是我的生日。",
          "segments": [
            {
              "text": "Besok",
              "meaning": "明天",
              "tail": " "
            },
            {
              "text": "ulang tahun",
              "meaning": "生日",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Besok kamu sibuk?",
          "translation": "你明天忙嗎？",
          "segments": [
            {
              "text": "Besok",
              "meaning": "明天",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "sibuk",
              "meaning": "忙",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "隔天。",
      "image_file": "tomorrow.png"
    },
    {
      "id": "tp-04",
      "term_zh": "昨天",
      "related_terms": [
        {
          "term_target": "kemarin",
          "pronunciation": [
            "/kə.ma.rɪn/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "kemarin",
              "meaning": "昨天",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kemarin pagi.",
          "translation": "昨天早上。",
          "segments": [
            {
              "text": "Kemarin",
              "meaning": "昨天",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早晨",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu ke mana kemarin?",
          "translation": "你昨天去哪了？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "mana",
              "meaning": "哪裡",
              "tail": " "
            },
            {
              "text": "kemarin",
              "meaning": "昨天",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kemarin hujan.",
          "translation": "昨天下雨了。",
          "segments": [
            {
              "text": "Kemarin",
              "meaning": "昨天",
              "tail": " "
            },
            {
              "text": "hujan",
              "meaning": "下雨",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "前一天。",
      "image_file": "yesterday.png"
    },
    {
      "id": "tp-05",
      "term_zh": "這裡",
      "related_terms": [
        {
          "term_target": "di sini",
          "pronunciation": [
            "/di si.ni/"
          ],
          "specific_note": "在這",
          "segments": [
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "ke sini",
          "pronunciation": [
            "/kə si.ni/"
          ],
          "specific_note": "來這",
          "segments": [
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sini!",
          "translation": "來這裡！(口語省略Ke)",
          "segments": [
            {
              "text": "Sini",
              "meaning": "這裡",
              "tail": "!"
            }
          ]
        },
        {
          "sentence": "Saya di sini.",
          "translation": "我在這。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dekat sini?",
          "translation": "離這近嗎？",
          "segments": [
            {
              "text": "Dekat",
              "meaning": "靠近",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Sini 單獨用通常表示叫人過來。",
      "image_file": "here.png"
    },
    {
      "id": "tp-06",
      "term_zh": "那裡",
      "related_terms": [
        {
          "term_target": "di sana",
          "pronunciation": [
            "/di sa.na/"
          ],
          "specific_note": "在那(遠)",
          "segments": [
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sana",
              "meaning": "那裡",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pergi ke sana.",
          "translation": "去那裡。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "sana",
              "meaning": "那裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lihat ke sana.",
          "translation": "看那邊。",
          "segments": [
            {
              "text": "Lihat",
              "meaning": "看",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "sana",
              "meaning": "那裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Siapa di sana?",
          "translation": "誰在那裡？",
          "segments": [
            {
              "text": "Siapa",
              "meaning": "誰",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sana",
              "meaning": "那裡",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Sana 指較遠的地方，Situ 指較近的「那裡」。",
      "image_file": "there.png"
    },
    {
      "id": "tp-07",
      "term_zh": "天（日期）",
      "related_terms": [
        {
          "term_target": "hari",
          "pronunciation": [
            "/ha.ri/"
          ],
          "specific_note": "日子/星期",
          "segments": [
            {
              "text": "hari",
              "meaning": "天",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Satu hari.",
          "translation": "一天。",
          "segments": [
            {
              "text": "Satu",
              "meaning": "一",
              "tail": " "
            },
            {
              "text": "hari",
              "meaning": "天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Semoga harimu menyenangkan.",
          "translation": "祝你有美好的一天。",
          "segments": [
            {
              "text": "Semoga",
              "meaning": "希望",
              "tail": " "
            },
            {
              "text": "harimu",
              "meaning": "你的一天",
              "tail": " "
            },
            {
              "text": "menyenangkan",
              "meaning": "令人愉快的",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Setiap hari.",
          "translation": "每一天。",
          "segments": [
            {
              "text": "Setiap",
              "meaning": "每",
              "tail": " "
            },
            {
              "text": "hari",
              "meaning": "天",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Hari 也是「星期」的統稱，如 Hari Senin (星期一)。",
      "image_file": "day.png"
    },
    {
      "id": "tp-08",
      "term_zh": "年",
      "related_terms": [
        {
          "term_target": "tahun",
          "pronunciation": [
            "/ta.hʊn/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tahun",
              "meaning": "年",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tahun ini.",
          "translation": "今年。",
          "segments": [
            {
              "text": "Tahun",
              "meaning": "年",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Selamat Tahun Baru.",
          "translation": "新年快樂。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "Tahun",
              "meaning": "年",
              "tail": " "
            },
            {
              "text": "Baru",
              "meaning": "新",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tahun lalu.",
          "translation": "去年。",
          "segments": [
            {
              "text": "Tahun",
              "meaning": "年",
              "tail": " "
            },
            {
              "text": "lalu",
              "meaning": "過去",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "年度。",
      "image_file": "year.png"
    },
    {
      "id": "tp-09",
      "term_zh": "月",
      "related_terms": [
        {
          "term_target": "bulan",
          "pronunciation": [
            "/bu.lan/"
          ],
          "specific_note": "月份/月亮",
          "segments": [
            {
              "text": "bulan",
              "meaning": "月",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bulan ini.",
          "translation": "這個月。",
          "segments": [
            {
              "text": "Bulan",
              "meaning": "月",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bulan depan.",
          "translation": "下個月。",
          "segments": [
            {
              "text": "Bulan",
              "meaning": "月",
              "tail": " "
            },
            {
              "text": "depan",
              "meaning": "前/未來",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Satu tahun ada 12 bulan.",
          "translation": "一年有12個月。",
          "segments": [
            {
              "text": "Satu",
              "meaning": "一",
              "tail": " "
            },
            {
              "text": "tahun",
              "meaning": "年",
              "tail": " "
            },
            {
              "text": "ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "12",
              "meaning": "十二",
              "tail": " "
            },
            {
              "text": "bulan",
              "meaning": "個月",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Bulan 也是「月亮」的意思。",
      "image_file": "month.png"
    },
    {
      "id": "tp-10",
      "term_zh": "週",
      "related_terms": [
        {
          "term_target": "minggu",
          "pronunciation": [
            "/miŋ.gu/"
          ],
          "specific_note": "星期/週",
          "segments": [
            {
              "text": "minggu",
              "meaning": "週",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Minggu depan.",
          "translation": "下週。",
          "segments": [
            {
              "text": "Minggu",
              "meaning": "週",
              "tail": " "
            },
            {
              "text": "depan",
              "meaning": "前/未來",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Seminggu sekali.",
          "translation": "一週一次。",
          "segments": [
            {
              "text": "Se-",
              "meaning": "一",
              "tail": ""
            },
            {
              "text": "minggu",
              "meaning": "週",
              "tail": " "
            },
            {
              "text": "sekali",
              "meaning": "一次",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hari Minggu.",
          "translation": "星期天。",
          "segments": [
            {
              "text": "Hari",
              "meaning": "星期",
              "tail": " "
            },
            {
              "text": "Minggu",
              "meaning": "日",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Minggu 既是「週」也是「星期日」。",
      "image_file": "week.png"
    },
    {
      "id": "tp-11",
      "term_zh": "早上",
      "related_terms": [
        {
          "term_target": "pagi",
          "pronunciation": [
            "/pa.gi/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "pagi",
              "meaning": "早",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Di pagi hari.",
          "translation": "在早晨。",
          "segments": [
            {
              "text": "Di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早",
              "tail": " "
            },
            {
              "text": "hari",
              "meaning": "天/日",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Selamat pagi.",
          "translation": "早安。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya lari pagi.",
          "translation": "我晨跑。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lari",
              "meaning": "跑",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "大約到早上10點。",
      "image_file": "morning.png"
    },
    {
      "id": "tp-12",
      "term_zh": "下午",
      "related_terms": [
        {
          "term_target": "sore",
          "pronunciation": [
            "/so.re/"
          ],
          "specific_note": "下午3-6點",
          "segments": [
            {
              "text": "sore",
              "meaning": "下午/傍晚",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Selamat sore.",
          "translation": "午安 (下午好)。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "sore",
              "meaning": "下午",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sampai jumpa nanti sore.",
          "translation": "今天下午見。",
          "segments": [
            {
              "text": "Sampai",
              "meaning": "直到",
              "tail": " "
            },
            {
              "text": "jumpa",
              "meaning": "見",
              "tail": " "
            },
            {
              "text": "nanti",
              "meaning": "待會",
              "tail": " "
            },
            {
              "text": "sore",
              "meaning": "下午",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Minggu sore.",
          "translation": "星期天下午。",
          "segments": [
            {
              "text": "Minggu",
              "meaning": "星期日",
              "tail": " "
            },
            {
              "text": "sore",
              "meaning": "下午",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "中午11點到3點通常說 Siang，3點後說 Sore。",
      "image_file": "afternoon.png"
    },
    {
      "id": "tp-13",
      "term_zh": "晚上",
      "related_terms": [
        {
          "term_target": "malam",
          "pronunciation": [
            "/ma.lam/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "malam",
              "meaning": "晚",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Selamat malam.",
          "translation": "晚安 (晚上好)。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu ada acara nanti malam?",
          "translation": "你今晚有事(活動)嗎？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "acara",
              "meaning": "活動/事",
              "tail": " "
            },
            {
              "text": "nanti",
              "meaning": "待會",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Pasar malam.",
          "translation": "夜市。",
          "segments": [
            {
              "text": "Pasar",
              "meaning": "市場",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "太陽下山後。",
      "image_file": "evening.png"
    },
    {
      "id": "tp-14",
      "term_zh": "中午",
      "related_terms": [
        {
          "term_target": "siang",
          "pronunciation": [
            "/si.aŋ/"
          ],
          "specific_note": "中午/白天",
          "segments": [
            {
              "text": "siang",
              "meaning": "中午",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Selamat siang.",
          "translation": "午安。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "siang",
              "meaning": "中午",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Makan siang.",
          "translation": "吃午餐。",
          "segments": [
            {
              "text": "Makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "siang",
              "meaning": "中午",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sudah siang.",
          "translation": "已經中午了 (不早了)。",
          "segments": [
            {
              "text": "Sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "siang",
              "meaning": "中午",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "上午11點到下午3點。",
      "image_file": "noon.png"
    },
    {
      "id": "tp-15",
      "term_zh": "前面",
      "related_terms": [
        {
          "term_target": "di depan",
          "pronunciation": [
            "/di də.pan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "depan",
              "meaning": "前",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Di depan kamu.",
          "translation": "在你前面。",
          "segments": [
            {
              "text": "Di depan",
              "meaning": "在前面",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tunggu di depan stasiun.",
          "translation": "在車站前等。",
          "segments": [
            {
              "text": "Tunggu",
              "meaning": "等",
              "tail": " "
            },
            {
              "text": "di depan",
              "meaning": "在前面",
              "tail": " "
            },
            {
              "text": "stasiun",
              "meaning": "車站",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Maju ke depan.",
          "translation": "向前進 (往前走)。",
          "segments": [
            {
              "text": "Maju",
              "meaning": "前進",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "depan",
              "meaning": "前",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "前方。",
      "image_file": "front.png"
    },
    {
      "id": "tp-16",
      "term_zh": "後面",
      "related_terms": [
        {
          "term_target": "di belakang",
          "pronunciation": [
            "/di bə.la.kaŋ/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "belakang",
              "meaning": "後",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Di belakang pintu.",
          "translation": "在門後。",
          "segments": [
            {
              "text": "Di belakang",
              "meaning": "在後面",
              "tail": " "
            },
            {
              "text": "pintu",
              "meaning": "門",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lihat ke belakang.",
          "translation": "往後看。",
          "segments": [
            {
              "text": "Lihat",
              "meaning": "看",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "belakang",
              "meaning": "後",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Antre di belakang.",
          "translation": "在後面排隊。",
          "segments": [
            {
              "text": "Antre",
              "meaning": "排隊",
              "tail": " "
            },
            {
              "text": "di belakang",
              "meaning": "在後面",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "後方。",
      "image_file": "behind.png"
    },
    {
      "id": "tp-17",
      "term_zh": "左邊",
      "related_terms": [
        {
          "term_target": "kiri",
          "pronunciation": [
            "/ki.ri/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "kiri",
              "meaning": "左",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Belok kiri.",
          "translation": "左轉。",
          "segments": [
            {
              "text": "Belok",
              "meaning": "轉",
              "tail": " "
            },
            {
              "text": "kiri",
              "meaning": "左",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sebelah kiri.",
          "translation": "左邊。",
          "segments": [
            {
              "text": "Sebelah",
              "meaning": "旁邊/側",
              "tail": " "
            },
            {
              "text": "kiri",
              "meaning": "左",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tangan kiri.",
          "translation": "左手。",
          "segments": [
            {
              "text": "Tangan",
              "meaning": "手",
              "tail": " "
            },
            {
              "text": "kiri",
              "meaning": "左",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "方向。",
      "image_file": "left.png"
    },
    {
      "id": "tp-18",
      "term_zh": "右邊",
      "related_terms": [
        {
          "term_target": "kanan",
          "pronunciation": [
            "/ka.nan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "kanan",
              "meaning": "右",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Belok kanan.",
          "translation": "右轉。",
          "segments": [
            {
              "text": "Belok",
              "meaning": "轉",
              "tail": " "
            },
            {
              "text": "kanan",
              "meaning": "右",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Di sebelah kanan.",
          "translation": "在右邊。",
          "segments": [
            {
              "text": "Di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sebelah",
              "meaning": "側",
              "tail": " "
            },
            {
              "text": "kanan",
              "meaning": "右",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pakai tangan kanan.",
          "translation": "用右手 (印尼禮貌習慣)。",
          "segments": [
            {
              "text": "Pakai",
              "meaning": "用",
              "tail": " "
            },
            {
              "text": "tangan",
              "meaning": "手",
              "tail": " "
            },
            {
              "text": "kanan",
              "meaning": "右",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "在印尼請務必用右手遞東西或吃東西。",
      "image_file": "right.png"
    },
    {
      "id": "tp-19",
      "term_zh": "旁邊",
      "related_terms": [
        {
          "term_target": "di samping",
          "pronunciation": [
            "/di sam.piŋ/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "samping",
              "meaning": "旁邊",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "sebelah",
          "pronunciation": [
            "/sə.bə.lah/"
          ],
          "specific_note": "隔壁",
          "segments": [
            {
              "text": "sebelah",
              "meaning": "側/旁",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Duduk di samping saya.",
          "translation": "坐我旁邊。",
          "segments": [
            {
              "text": "Duduk",
              "meaning": "坐",
              "tail": " "
            },
            {
              "text": "di samping",
              "meaning": "在旁邊",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Rumah sebelah.",
          "translation": "隔壁鄰居 (隔壁房子)。",
          "segments": [
            {
              "text": "Rumah",
              "meaning": "房子",
              "tail": " "
            },
            {
              "text": "sebelah",
              "meaning": "隔壁/旁",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Di samping bank.",
          "translation": "在銀行旁邊。",
          "segments": [
            {
              "text": "Di samping",
              "meaning": "在旁邊",
              "tail": " "
            },
            {
              "text": "bank",
              "meaning": "銀行",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Sebelah 常用於「隔壁」。",
      "image_file": "beside.png"
    },
    {
      "id": "tp-20",
      "term_zh": "對面",
      "related_terms": [
        {
          "term_target": "di seberang",
          "pronunciation": [
            "/di sə.braŋ/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "seberang",
              "meaning": "對面",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Di seberang jalan.",
          "translation": "在馬路對面。",
          "segments": [
            {
              "text": "Di seberang",
              "meaning": "在對面",
              "tail": " "
            },
            {
              "text": "jalan",
              "meaning": "路",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Toko di seberang.",
          "translation": "商店在對面。",
          "segments": [
            {
              "text": "Toko",
              "meaning": "商店",
              "tail": " "
            },
            {
              "text": "di seberang",
              "meaning": "在對面",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Duduk di seberang saya.",
          "translation": "坐在我對面。",
          "segments": [
            {
              "text": "Duduk",
              "meaning": "坐",
              "tail": " "
            },
            {
              "text": "di seberang",
              "meaning": "在對面",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "需要過馬路或跨越空間時用。",
      "image_file": "across_from.png"
    },
    {
      "id": "tp-21",
      "term_zh": "春天",
      "related_terms": [
        {
          "term_target": "musim semi",
          "pronunciation": [
            "/mu.sɪm sə.mi/"
          ],
          "specific_note": "印尼無此季節",
          "segments": [
            {
              "text": "musim",
              "meaning": "季節",
              "tail": " "
            },
            {
              "text": "semi",
              "meaning": "萌芽",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bunga mekar di musim semi.",
          "translation": "花在春天盛開。",
          "segments": [
            {
              "text": "Bunga",
              "meaning": "花",
              "tail": " "
            },
            {
              "text": "mekar",
              "meaning": "開",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "musim semi",
              "meaning": "春天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Suka musim semi.",
          "translation": "喜歡春天。",
          "segments": [
            {
              "text": "Suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "musim semi",
              "meaning": "春天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jalan-jalan saat musim semi.",
          "translation": "春天時去旅遊。",
          "segments": [
            {
              "text": "Jalan-jalan",
              "meaning": "旅遊/逛逛",
              "tail": " "
            },
            {
              "text": "saat",
              "meaning": "當/時候",
              "tail": " "
            },
            {
              "text": "musim semi",
              "meaning": "春天",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼只有旱季 (Musim kemarau) 和雨季 (Musim hujan)。",
      "image_file": "spring.png"
    },
    {
      "id": "tp-22",
      "term_zh": "夏天",
      "related_terms": [
        {
          "term_target": "musim panas",
          "pronunciation": [
            "/mu.sɪm pa.nas/"
          ],
          "specific_note": "熱季",
          "segments": [
            {
              "text": "musim",
              "meaning": "季節",
              "tail": " "
            },
            {
              "text": "panas",
              "meaning": "熱",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Liburan musim panas.",
          "translation": "暑假。",
          "segments": [
            {
              "text": "Liburan",
              "meaning": "假期",
              "tail": " "
            },
            {
              "text": "musim panas",
              "meaning": "夏天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sangat panas di musim panas.",
          "translation": "夏天非常熱。",
          "segments": [
            {
              "text": "Sangat",
              "meaning": "非常",
              "tail": " "
            },
            {
              "text": "panas",
              "meaning": "熱",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "musim panas",
              "meaning": "夏天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pergi ke pantai saat musim panas.",
          "translation": "夏天去海邊。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "pantai",
              "meaning": "海灘",
              "tail": " "
            },
            {
              "text": "saat",
              "meaning": "時",
              "tail": " "
            },
            {
              "text": "musim panas",
              "meaning": "夏天",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "季節。",
      "image_file": "summer.png"
    },
    {
      "id": "tp-23",
      "term_zh": "秋天",
      "related_terms": [
        {
          "term_target": "musim gugur",
          "pronunciation": [
            "/mu.sɪm gu.gʊr/"
          ],
          "specific_note": "落葉季",
          "segments": [
            {
              "text": "musim",
              "meaning": "季節",
              "tail": " "
            },
            {
              "text": "gugur",
              "meaning": "脫落/凋謝",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Daun jatuh di musim gugur.",
          "translation": "秋天葉子落下。",
          "segments": [
            {
              "text": "Daun",
              "meaning": "葉子",
              "tail": " "
            },
            {
              "text": "jatuh",
              "meaning": "掉落",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "musim gugur",
              "meaning": "秋天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Suka musim gugur?",
          "translation": "喜歡秋天嗎？",
          "segments": [
            {
              "text": "Suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "musim gugur",
              "meaning": "秋天",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Musim gugur sejuk.",
          "translation": "秋天很涼爽。",
          "segments": [
            {
              "text": "Musim gugur",
              "meaning": "秋天",
              "tail": " "
            },
            {
              "text": "sejuk",
              "meaning": "涼爽",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "季節。",
      "image_file": "autumn.png"
    },
    {
      "id": "tp-24",
      "term_zh": "冬天",
      "related_terms": [
        {
          "term_target": "musim dingin",
          "pronunciation": [
            "/mu.sɪm di.ŋɪn/"
          ],
          "specific_note": "冷季",
          "segments": [
            {
              "text": "musim",
              "meaning": "季節",
              "tail": " "
            },
            {
              "text": "dingin",
              "meaning": "冷",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Musim dingin ada salju.",
          "translation": "冬天有雪。",
          "segments": [
            {
              "text": "Musim dingin",
              "meaning": "冬天",
              "tail": " "
            },
            {
              "text": "ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "salju",
              "meaning": "雪",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sangat dingin di musim dingin.",
          "translation": "冬天非常冷。",
          "segments": [
            {
              "text": "Sangat",
              "meaning": "非常",
              "tail": " "
            },
            {
              "text": "dingin",
              "meaning": "冷",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "musim dingin",
              "meaning": "冬天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pakai jaket saat musim dingin.",
          "translation": "冬天時穿夾克。",
          "segments": [
            {
              "text": "Pakai",
              "meaning": "穿",
              "tail": " "
            },
            {
              "text": "jaket",
              "meaning": "外套",
              "tail": " "
            },
            {
              "text": "saat",
              "meaning": "時",
              "tail": " "
            },
            {
              "text": "musim dingin",
              "meaning": "冬天",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "季節。",
      "image_file": "winter.png"
    }
  ]
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
          "term_target": "atau",
          "pronunciation": [
            "/a.tau/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "atau",
              "meaning": "或者",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Teh atau kopi?",
          "translation": "茶還是咖啡？",
          "segments": [
            {
              "text": "Teh",
              "meaning": "茶",
              "tail": " "
            },
            {
              "text": "atau",
              "meaning": "或者",
              "tail": " "
            },
            {
              "text": "kopi",
              "meaning": "咖啡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kamu atau dia?",
          "translation": "你還是他？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "atau",
              "meaning": "或者",
              "tail": " "
            },
            {
              "text": "dia",
              "meaning": "他",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Sekarang atau nanti?",
          "translation": "現在還是待會？",
          "segments": [
            {
              "text": "Sekarang",
              "meaning": "現在",
              "tail": " "
            },
            {
              "text": "atau",
              "meaning": "或者",
              "tail": " "
            },
            {
              "text": "nanti",
              "meaning": "待會",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "二選一。",
      "image_file": "or.png"
    },
    {
      "id": "conj-02",
      "term_zh": "但是",
      "related_terms": [
        {
          "term_target": "tapi",
          "pronunciation": [
            "/ta.pi/"
          ],
          "specific_note": "口語常用",
          "segments": [
            {
              "text": "tapi",
              "meaning": "但是",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "tetapi",
          "pronunciation": [
            "/tə.ta.pi/"
          ],
          "specific_note": "正式",
          "segments": [
            {
              "text": "tetapi",
              "meaning": "但是",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Murah tapi bagus.",
          "translation": "便宜但是很好。",
          "segments": [
            {
              "text": "Murah",
              "meaning": "便宜",
              "tail": " "
            },
            {
              "text": "tapi",
              "meaning": "但是",
              "tail": " "
            },
            {
              "text": "bagus",
              "meaning": "好",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya mau, tapi sibuk.",
          "translation": "我想要(去)，但是我忙。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": ", "
            },
            {
              "text": "tapi",
              "meaning": "但是",
              "tail": " "
            },
            {
              "text": "sibuk",
              "meaning": "忙碌",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kecil tapi kuat.",
          "translation": "雖小但是強壯。",
          "segments": [
            {
              "text": "Kecil",
              "meaning": "小",
              "tail": " "
            },
            {
              "text": "tapi",
              "meaning": "但是",
              "tail": " "
            },
            {
              "text": "kuat",
              "meaning": "強壯",
              "tail": "."
            }
          ]
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
          "term_target": "jadi",
          "pronunciation": [
            "/dʒa.di/"
          ],
          "specific_note": "所以/那麼",
          "segments": [
            {
              "text": "jadi",
              "meaning": "所以",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya lapar, jadi makan.",
          "translation": "我餓了，所以吃東西。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lapar",
              "meaning": "餓",
              "tail": ", "
            },
            {
              "text": "jadi",
              "meaning": "所以",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hujan, jadi batal.",
          "translation": "下雨，所以取消了。",
          "segments": [
            {
              "text": "Hujan",
              "meaning": "下雨",
              "tail": ", "
            },
            {
              "text": "jadi",
              "meaning": "所以",
              "tail": " "
            },
            {
              "text": "batal",
              "meaning": "取消",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jadi, bagaimana?",
          "translation": "所以，怎麼樣？(結論是?)",
          "segments": [
            {
              "text": "Jadi",
              "meaning": "所以",
              "tail": ", "
            },
            {
              "text": "bagaimana",
              "meaning": "如何",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Jadi 也常用於句首表示「那麼...」。",
      "image_file": "so.png"
    },
    {
      "id": "conj-04",
      "term_zh": "以及／和",
      "related_terms": [
        {
          "term_target": "dan",
          "pronunciation": [
            "/dan/"
          ],
          "specific_note": "和",
          "segments": [
            {
              "text": "dan",
              "meaning": "和",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "sama",
          "pronunciation": [
            "/sa.ma/"
          ],
          "specific_note": "跟(口語)",
          "segments": [
            {
              "text": "sama",
              "meaning": "跟/與",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kamu dan saya.",
          "translation": "你和我。",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "dan",
              "meaning": "和",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hitam dan putih.",
          "translation": "黑色和白色。",
          "segments": [
            {
              "text": "Hitam",
              "meaning": "黑",
              "tail": " "
            },
            {
              "text": "dan",
              "meaning": "和",
              "tail": " "
            },
            {
              "text": "putih",
              "meaning": "白",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Aku sama dia.",
          "translation": "我跟她 (口語常用 sama 代替 dan)。",
          "segments": [
            {
              "text": "Aku",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sama",
              "meaning": "跟",
              "tail": " "
            },
            {
              "text": "dia",
              "meaning": "她",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "連接兩者。",
      "image_file": "and.png"
    },
    {
      "id": "conj-05",
      "term_zh": "因為",
      "related_terms": [
        {
          "term_target": "karena",
          "pronunciation": [
            "/ka.rə.na/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "karena",
              "meaning": "因為",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kenapa? Karena saya suka.",
          "translation": "為什麼？因為我喜歡。",
          "segments": [
            {
              "text": "Kenapa",
              "meaning": "為什麼",
              "tail": "? "
            },
            {
              "text": "Karena",
              "meaning": "因為",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tidak datang karena sakit.",
          "translation": "因為生病所以沒來。",
          "segments": [
            {
              "text": "Tidak",
              "meaning": "沒有",
              "tail": " "
            },
            {
              "text": "datang",
              "meaning": "來",
              "tail": " "
            },
            {
              "text": "karena",
              "meaning": "因為",
              "tail": " "
            },
            {
              "text": "sakit",
              "meaning": "生病",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hanya karena itu?",
          "translation": "只是因為那個(原因)？",
          "segments": [
            {
              "text": "Hanya",
              "meaning": "只有",
              "tail": " "
            },
            {
              "text": "karena",
              "meaning": "因為",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "表示原因。",
      "image_file": "because.png"
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
          "term_target": "dengan",
          "pronunciation": [
            "/də.ŋan/"
          ],
          "specific_note": "正式",
          "segments": [
            {
              "text": "dengan",
              "meaning": "和/與",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "sama",
          "pronunciation": [
            "/sa.ma/"
          ],
          "specific_note": "口語",
          "segments": [
            {
              "text": "sama",
              "meaning": "跟",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ikut dengan saya.",
          "translation": "跟我來 (跟我一起)。",
          "segments": [
            {
              "text": "Ikut",
              "meaning": "跟隨",
              "tail": " "
            },
            {
              "text": "dengan",
              "meaning": "和",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Pergi sama teman.",
          "translation": "跟朋友去。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "sama",
              "meaning": "跟",
              "tail": " "
            },
            {
              "text": "teman",
              "meaning": "朋友",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kopi dengan susu.",
          "translation": "加牛奶的咖啡 (咖啡和牛奶)。",
          "segments": [
            {
              "text": "Kopi",
              "meaning": "咖啡",
              "tail": " "
            },
            {
              "text": "dengan",
              "meaning": "與",
              "tail": " "
            },
            {
              "text": "susu",
              "meaning": "牛奶",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語中 Sama (跟) 的使用頻率比 Dengan 高。",
      "image_file": "with.png"
    },
    {
      "id": "prep-02",
      "term_zh": "從...",
      "related_terms": [
        {
          "term_target": "dari",
          "pronunciation": [
            "/da.ri/"
          ],
          "specific_note": "來源/起點",
          "segments": [
            {
              "text": "dari",
              "meaning": "從",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya dari Taiwan.",
          "translation": "我來自台灣。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "dari",
              "meaning": "來自",
              "tail": " "
            },
            {
              "text": "Taiwan",
              "meaning": "台灣",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dari pagi sampai malam.",
          "translation": "從早到晚。",
          "segments": [
            {
              "text": "Dari",
              "meaning": "從",
              "tail": " "
            },
            {
              "text": "pagi",
              "meaning": "早上",
              "tail": " "
            },
            {
              "text": "sampai",
              "meaning": "直到",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jauh dari sini.",
          "translation": "離這裡很遠。",
          "segments": [
            {
              "text": "Jauh",
              "meaning": "遠",
              "tail": " "
            },
            {
              "text": "dari",
              "meaning": "從/離",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Dari mana? (從哪來？)",
      "image_file": "from.png"
    },
    {
      "id": "prep-03",
      "term_zh": "為了...",
      "related_terms": [
        {
          "term_target": "untuk",
          "pronunciation": [
            "/un.tʊk/"
          ],
          "specific_note": "給/為了",
          "segments": [
            {
              "text": "untuk",
              "meaning": "為了",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini untuk kamu.",
          "translation": "這是給你的。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "untuk",
              "meaning": "給",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Terima kasih untuk semuanya.",
          "translation": "謝謝這一切。",
          "segments": [
            {
              "text": "Terima",
              "meaning": "接受",
              "tail": " "
            },
            {
              "text": "kasih",
              "meaning": "給予",
              "tail": " "
            },
            {
              "text": "untuk",
              "meaning": "為了",
              "tail": " "
            },
            {
              "text": "semuanya",
              "meaning": "一切",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Untuk apa?",
          "translation": "為了什麼？(有什麼用？)",
          "segments": [
            {
              "text": "Untuk",
              "meaning": "為了",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "口語常說 Buat (例如：Ini buat kamu)。",
      "image_file": "for.png"
    },
    {
      "id": "prep-04",
      "term_zh": "...的",
      "related_terms": [
        {
          "term_target": "dari",
          "pronunciation": [
            "/da.ri/"
          ],
          "specific_note": "材質/構成",
          "segments": [
            {
              "text": "dari",
              "meaning": "用...做的",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Satu gelas air.",
          "translation": "一杯水 (直接接名詞，不用of)。",
          "segments": [
            {
              "text": "Satu",
              "meaning": "一",
              "tail": " "
            },
            {
              "text": "gelas",
              "meaning": "杯",
              "tail": " "
            },
            {
              "text": "air",
              "meaning": "水",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Salah satu dari mereka.",
          "translation": "他們之中的一個。",
          "segments": [
            {
              "text": "Salah",
              "meaning": "錯(此處為固定用法)",
              "tail": " "
            },
            {
              "text": "satu",
              "meaning": "一",
              "tail": " "
            },
            {
              "text": "dari",
              "meaning": "從/屬於",
              "tail": " "
            },
            {
              "text": "mereka",
              "meaning": "他們",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Warna mobil.",
          "translation": "車子的顏色 (名詞直接後置)。",
          "segments": [
            {
              "text": "Warna",
              "meaning": "顏色",
              "tail": " "
            },
            {
              "text": "mobil",
              "meaning": "車",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語通常不需介係詞表示「的」，直接把名詞放後面即可。",
      "image_file": "of.png"
    },
    {
      "id": "prep-05",
      "term_zh": "在... (場所)",
      "related_terms": [
        {
          "term_target": "di",
          "pronunciation": [
            "/di/"
          ],
          "specific_note": "靜態位置",
          "segments": [
            {
              "text": "di",
              "meaning": "在",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya di rumah.",
          "translation": "我在家。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "rumah",
              "meaning": "家",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Di dalam tas.",
          "translation": "在包包裡面。",
          "segments": [
            {
              "text": "Di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "dalam",
              "meaning": "裡面",
              "tail": " "
            },
            {
              "text": "tas",
              "meaning": "包包",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ketemu di sana.",
          "translation": "在那裡見。",
          "segments": [
            {
              "text": "Ketemu",
              "meaning": "見面",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sana",
              "meaning": "那裡",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Di + 地點，表示在某處。",
      "image_file": "at_in.png"
    },
    {
      "id": "prep-06",
      "term_zh": "往... (去)",
      "related_terms": [
        {
          "term_target": "ke",
          "pronunciation": [
            "/kə/"
          ],
          "specific_note": "動態方向",
          "segments": [
            {
              "text": "ke",
              "meaning": "往/去",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pergi ke sekolah.",
          "translation": "去學校。",
          "segments": [
            {
              "text": "Pergi",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "往",
              "tail": " "
            },
            {
              "text": "sekolah",
              "meaning": "學校",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Selamat ulang tahun.",
          "translation": "祝你生日快樂 (這句固定用法，不需介係詞)。",
          "segments": [
            {
              "text": "Selamat",
              "meaning": "祝賀",
              "tail": " "
            },
            {
              "text": "ulang",
              "meaning": "重複",
              "tail": " "
            },
            {
              "text": "tahun",
              "meaning": "年",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Berikan ke saya.",
          "translation": "把它給我 (給向我)。",
          "segments": [
            {
              "text": "Berikan",
              "meaning": "給予",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "向/給",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Ke + 地點，表示要去某處。",
      "image_file": "to.png"
    }
  ]
},
{
  "id": "numbers",
  "name": "基本的數字",
  "items": [
    {
      "id": "num-0",
      "term_zh": "0",
      "related_terms": [
        {
          "term_target": "nol",
          "pronunciation": [
            "/nɔl/"
          ],
          "specific_note": "零",
          "segments": [
            {
              "text": "nol",
              "meaning": "零",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "kosong",
          "pronunciation": [
            "/ko.sɔŋ/"
          ],
          "specific_note": "空/零(口語)",
          "segments": [
            {
              "text": "kosong",
              "meaning": "空",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Nomornya nol delapan...",
          "translation": "號碼是零八... (唸電話號碼常用 Kosong 或 Nol)。",
          "segments": [
            {
              "text": "Nomornya",
              "meaning": "號碼+那",
              "tail": " "
            },
            {
              "text": "nol",
              "meaning": "零",
              "tail": " "
            },
            {
              "text": "delapan",
              "meaning": "八",
              "tail": "..."
            }
          ]
        },
        {
          "sentence": "Skornya satu kosong.",
          "translation": "比分是一比零。",
          "segments": [
            {
              "text": "Skornya",
              "meaning": "分數+那",
              "tail": " "
            },
            {
              "text": "satu",
              "meaning": "一",
              "tail": " "
            },
            {
              "text": "kosong",
              "meaning": "零/空",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Mulai dari nol.",
          "translation": "從零開始。",
          "segments": [
            {
              "text": "Mulai",
              "meaning": "開始",
              "tail": " "
            },
            {
              "text": "dari",
              "meaning": "從",
              "tail": " "
            },
            {
              "text": "nol",
              "meaning": "零",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "唸電話號碼時，很多人喜歡把 0 唸作 Kosong (空)。",
      "image_file": "zero.png"
    },
    {
      "id": "num-1",
      "term_zh": "1",
      "related_terms": [
        {
          "term_target": "satu",
          "pronunciation": [
            "/sa.tu/"
          ],
          "specific_note": "一",
          "segments": [
            {
              "text": "satu",
              "meaning": "一",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Satu orang.",
          "translation": "一個人。",
          "segments": [
            {
              "text": "Satu",
              "meaning": "一",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya mau satu.",
          "translation": "我想要一個。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "satu",
              "meaning": "一",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Nomor satu.",
          "translation": "第一名 / 一號。",
          "segments": [
            {
              "text": "Nomor",
              "meaning": "號碼",
              "tail": " "
            },
            {
              "text": "satu",
              "meaning": "一",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "當量詞或前綴時變成 Se- (如 Satu orang -> Seorang 一位)。",
      "image_file": "one.png"
    },
    {
      "id": "num-2",
      "term_zh": "2",
      "related_terms": [
        {
          "term_target": "dua",
          "pronunciation": [
            "/du.a/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "dua",
              "meaning": "二",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dua hari.",
          "translation": "兩天。",
          "segments": [
            {
              "text": "Dua",
              "meaning": "二",
              "tail": " "
            },
            {
              "text": "hari",
              "meaning": "天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Meja untuk dua orang.",
          "translation": "兩人桌。",
          "segments": [
            {
              "text": "Meja",
              "meaning": "桌子",
              "tail": " "
            },
            {
              "text": "untuk",
              "meaning": "給/為了",
              "tail": " "
            },
            {
              "text": "dua",
              "meaning": "二",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Anak kedua.",
          "translation": "第二個孩子。",
          "segments": [
            {
              "text": "Anak",
              "meaning": "孩子",
              "tail": " "
            },
            {
              "text": "kedua",
              "meaning": "第二",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Ke- + 數字 = 第... (如 Kedua 第二)。",
      "image_file": "two.png"
    },
    {
      "id": "num-3",
      "term_zh": "3",
      "related_terms": [
        {
          "term_target": "tiga",
          "pronunciation": [
            "/ti.ga/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tiga",
              "meaning": "三",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tiga orang.",
          "translation": "三個人。",
          "segments": [
            {
              "text": "Tiga",
              "meaning": "三",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jam tiga.",
          "translation": "三點。",
          "segments": [
            {
              "text": "Jam",
              "meaning": "點鐘",
              "tail": " "
            },
            {
              "text": "tiga",
              "meaning": "三",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Beli tiga buku.",
          "translation": "買三本書。",
          "segments": [
            {
              "text": "Beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "tiga",
              "meaning": "三",
              "tail": " "
            },
            {
              "text": "buku",
              "meaning": "書",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "三。",
      "image_file": "three.png"
    },
    {
      "id": "num-4",
      "term_zh": "4",
      "related_terms": [
        {
          "term_target": "empat",
          "pronunciation": [
            "/əm.pat/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "empat",
              "meaning": "四",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Empat musim.",
          "translation": "四季。",
          "segments": [
            {
              "text": "Empat",
              "meaning": "四",
              "tail": " "
            },
            {
              "text": "musim",
              "meaning": "季節",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jam empat sore.",
          "translation": "下午四點。",
          "segments": [
            {
              "text": "Jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "empat",
              "meaning": "四",
              "tail": " "
            },
            {
              "text": "sore",
              "meaning": "下午",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Meja nomor empat.",
          "translation": "四號桌。",
          "segments": [
            {
              "text": "Meja",
              "meaning": "桌子",
              "tail": " "
            },
            {
              "text": "nomor",
              "meaning": "號碼",
              "tail": " "
            },
            {
              "text": "empat",
              "meaning": "四",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語有時會快速唸成 'mpat。",
      "image_file": "four.png"
    },
    {
      "id": "num-5",
      "term_zh": "5",
      "related_terms": [
        {
          "term_target": "lima",
          "pronunciation": [
            "/li.ma/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "lima",
              "meaning": "五",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lima ribu.",
          "translation": "五千 (常見小費金額)。",
          "segments": [
            {
              "text": "Lima",
              "meaning": "五",
              "tail": " "
            },
            {
              "text": "ribu",
              "meaning": "千",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tunggu lima menit.",
          "translation": "等五分鐘。",
          "segments": [
            {
              "text": "Tunggu",
              "meaning": "等",
              "tail": " "
            },
            {
              "text": "lima",
              "meaning": "五",
              "tail": " "
            },
            {
              "text": "menit",
              "meaning": "分鐘",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Umurnya lima tahun.",
          "translation": "他五歲。",
          "segments": [
            {
              "text": "Umurnya",
              "meaning": "年齡+他的",
              "tail": " "
            },
            {
              "text": "lima",
              "meaning": "五",
              "tail": " "
            },
            {
              "text": "tahun",
              "meaning": "年/歲",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "五。",
      "image_file": "five.png"
    },
    {
      "id": "num-6",
      "term_zh": "6",
      "related_terms": [
        {
          "term_target": "enam",
          "pronunciation": [
            "/ə.nam/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "enam",
              "meaning": "六",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Jam enam.",
          "translation": "六點。",
          "segments": [
            {
              "text": "Jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "enam",
              "meaning": "六",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Enam bulan.",
          "translation": "六個月。",
          "segments": [
            {
              "text": "Enam",
              "meaning": "六",
              "tail": " "
            },
            {
              "text": "bulan",
              "meaning": "月",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bangun jam enam.",
          "translation": "六點起床。",
          "segments": [
            {
              "text": "Bangun",
              "meaning": "起床",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "enam",
              "meaning": "六",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語常唸成 'nam。",
      "image_file": "six.png"
    },
    {
      "id": "num-7",
      "term_zh": "7",
      "related_terms": [
        {
          "term_target": "tujuh",
          "pronunciation": [
            "/tu.dʒuh/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "tujuh",
              "meaning": "七",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tujuh hari.",
          "translation": "七天。",
          "segments": [
            {
              "text": "Tujuh",
              "meaning": "七",
              "tail": " "
            },
            {
              "text": "hari",
              "meaning": "天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jam tujuh malam.",
          "translation": "晚上七點。",
          "segments": [
            {
              "text": "Jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "tujuh",
              "meaning": "七",
              "tail": " "
            },
            {
              "text": "malam",
              "meaning": "晚上",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Bulan tujuh.",
          "translation": "七月。",
          "segments": [
            {
              "text": "Bulan",
              "meaning": "月",
              "tail": " "
            },
            {
              "text": "tujuh",
              "meaning": "七",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "七月通常說 Juli，但口語說 Bulan tujuh 也可以。",
      "image_file": "seven.png"
    },
    {
      "id": "num-8",
      "term_zh": "8",
      "related_terms": [
        {
          "term_target": "delapan",
          "pronunciation": [
            "/də.la.pan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "delapan",
              "meaning": "八",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Delapan tahun.",
          "translation": "八年。",
          "segments": [
            {
              "text": "Delapan",
              "meaning": "八",
              "tail": " "
            },
            {
              "text": "tahun",
              "meaning": "年",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sampai jam delapan.",
          "translation": "直到八點。",
          "segments": [
            {
              "text": "Sampai",
              "meaning": "直到",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "delapan",
              "meaning": "八",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tidur delapan jam.",
          "translation": "睡八小時。",
          "segments": [
            {
              "text": "Tidur",
              "meaning": "睡",
              "tail": " "
            },
            {
              "text": "delapan",
              "meaning": "八",
              "tail": " "
            },
            {
              "text": "jam",
              "meaning": "小時",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語常唸成 'lapan。",
      "image_file": "eight.png"
    },
    {
      "id": "num-9",
      "term_zh": "9",
      "related_terms": [
        {
          "term_target": "sembilan",
          "pronunciation": [
            "/səm.bi.lan/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sembilan",
              "meaning": "九",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Jam sembilan.",
          "translation": "九點。",
          "segments": [
            {
              "text": "Jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "sembilan",
              "meaning": "九",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sembilan ribu.",
          "translation": "九千。",
          "segments": [
            {
              "text": "Sembilan",
              "meaning": "九",
              "tail": " "
            },
            {
              "text": "ribu",
              "meaning": "千",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Nomor sembilan.",
          "translation": "九號。",
          "segments": [
            {
              "text": "Nomor",
              "meaning": "號碼",
              "tail": " "
            },
            {
              "text": "sembilan",
              "meaning": "九",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "九。",
      "image_file": "nine.png"
    },
    {
      "id": "num-10",
      "term_zh": "10",
      "related_terms": [
        {
          "term_target": "sepuluh",
          "pronunciation": [
            "/sə.pu.lʊh/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sepuluh",
              "meaning": "十",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sepuluh ribu.",
          "translation": "一萬 (十千) (印尼幣常用單位)。",
          "segments": [
            {
              "text": "Sepuluh",
              "meaning": "十",
              "tail": " "
            },
            {
              "text": "ribu",
              "meaning": "千",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Hitung sampai sepuluh.",
          "translation": "數到十。",
          "segments": [
            {
              "text": "Hitung",
              "meaning": "數",
              "tail": " "
            },
            {
              "text": "sampai",
              "meaning": "直到",
              "tail": " "
            },
            {
              "text": "sepuluh",
              "meaning": "十",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sepuluh besar.",
          "translation": "前十名 (十大)。",
          "segments": [
            {
              "text": "Sepuluh",
              "meaning": "十",
              "tail": " "
            },
            {
              "text": "besar",
              "meaning": "大",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Se(一) + Puluh(十) = 十。",
      "image_file": "ten.png"
    },
    {
      "id": "num-11",
      "term_zh": "11",
      "related_terms": [
        {
          "term_target": "sebelas",
          "pronunciation": [
            "/sə.bə.las/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "sebelas",
              "meaning": "十一",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Jam sebelas.",
          "translation": "11點。",
          "segments": [
            {
              "text": "Jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "sebelas",
              "meaning": "十一",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sebelas orang.",
          "translation": "11個人。",
          "segments": [
            {
              "text": "Sebelas",
              "meaning": "十一",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Sebelas ribu.",
          "translation": "一萬一千 (印尼幣)。",
          "segments": [
            {
              "text": "Sebelas",
              "meaning": "十一",
              "tail": " "
            },
            {
              "text": "ribu",
              "meaning": "千",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "11到19的後綴是 -belas。Se(一)+Belas = 11。",
      "image_file": "eleven.png"
    },
    {
      "id": "num-12",
      "term_zh": "12",
      "related_terms": [
        {
          "term_target": "dua belas",
          "pronunciation": [
            "/du.a bə.las/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "dua",
              "meaning": "二",
              "tail": " "
            },
            {
              "text": "belas",
              "meaning": "十(後綴)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dua belas bulan.",
          "translation": "12個月。",
          "segments": [
            {
              "text": "Dua belas",
              "meaning": "十二",
              "tail": " "
            },
            {
              "text": "bulan",
              "meaning": "月",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Jam dua belas siang.",
          "translation": "中午12點。",
          "segments": [
            {
              "text": "Jam",
              "meaning": "點",
              "tail": " "
            },
            {
              "text": "dua belas",
              "meaning": "十二",
              "tail": " "
            },
            {
              "text": "siang",
              "meaning": "中午",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ada dua belas.",
          "translation": "有12個。",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "dua belas",
              "meaning": "十二",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "十二。",
      "image_file": "twelve.png"
    },
    {
      "id": "num-15",
      "term_zh": "15",
      "related_terms": [
        {
          "term_target": "lima belas",
          "pronunciation": [
            "/li.ma bə.las/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "lima",
              "meaning": "五",
              "tail": " "
            },
            {
              "text": "belas",
              "meaning": "十",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lima belas menit.",
          "translation": "15分鐘。",
          "segments": [
            {
              "text": "Lima belas",
              "meaning": "十五",
              "tail": " "
            },
            {
              "text": "menit",
              "meaning": "分鐘",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Umur lima belas.",
          "translation": "15歲。",
          "segments": [
            {
              "text": "Umur",
              "meaning": "年齡",
              "tail": " "
            },
            {
              "text": "lima belas",
              "meaning": "十五",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Nomor lima belas.",
          "translation": "15號。",
          "segments": [
            {
              "text": "Nomor",
              "meaning": "號碼",
              "tail": " "
            },
            {
              "text": "lima belas",
              "meaning": "十五",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "十五。",
      "image_file": "fifteen.png"
    },
    {
      "id": "num-20",
      "term_zh": "20",
      "related_terms": [
        {
          "term_target": "dua puluh",
          "pronunciation": [
            "/du.a pu.lʊh/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "dua",
              "meaning": "二",
              "tail": " "
            },
            {
              "text": "puluh",
              "meaning": "十(進位)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dua puluh menit.",
          "translation": "20分鐘。",
          "segments": [
            {
              "text": "Dua puluh",
              "meaning": "二十",
              "tail": " "
            },
            {
              "text": "menit",
              "meaning": "分鐘",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dua puluh ribu.",
          "translation": "兩萬 (二十千) 印尼盾。",
          "segments": [
            {
              "text": "Dua puluh",
              "meaning": "二十",
              "tail": " "
            },
            {
              "text": "ribu",
              "meaning": "千",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya umur dua puluh.",
          "translation": "我20歲。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "umur",
              "meaning": "年齡",
              "tail": " "
            },
            {
              "text": "dua puluh",
              "meaning": "二十",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "整數後綴是 Puluh。Dua(二)+Puluh(十) = 20。",
      "image_file": "twenty.png"
    },
    {
      "id": "num-50",
      "term_zh": "50",
      "related_terms": [
        {
          "term_target": "lima puluh",
          "pronunciation": [
            "/li.ma pu.lʊh/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "lima",
              "meaning": "五",
              "tail": " "
            },
            {
              "text": "puluh",
              "meaning": "十",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lima puluh persen.",
          "translation": "50%。",
          "segments": [
            {
              "text": "Lima puluh",
              "meaning": "五十",
              "tail": " "
            },
            {
              "text": "persen",
              "meaning": "百分比",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lima puluh orang.",
          "translation": "50個人。",
          "segments": [
            {
              "text": "Lima puluh",
              "meaning": "五十",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Lima puluh ribu.",
          "translation": "五萬 (五十千) 印尼盾 (藍色鈔票)。",
          "segments": [
            {
              "text": "Lima puluh",
              "meaning": "五十",
              "tail": " "
            },
            {
              "text": "ribu",
              "meaning": "千",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "五十。",
      "image_file": "fifty.png"
    },
    {
      "id": "num-100",
      "term_zh": "100",
      "related_terms": [
        {
          "term_target": "seratus",
          "pronunciation": [
            "/sə.ra.tʊs/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "se-",
              "meaning": "一",
              "tail": ""
            },
            {
              "text": "ratus",
              "meaning": "百",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Seratus persen.",
          "translation": "百分之百。",
          "segments": [
            {
              "text": "Seratus",
              "meaning": "一百",
              "tail": " "
            },
            {
              "text": "persen",
              "meaning": "百分比",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Seratus ribu.",
          "translation": "十萬 (一百千) 印尼盾 (紅色鈔票)。",
          "segments": [
            {
              "text": "Seratus",
              "meaning": "一百",
              "tail": " "
            },
            {
              "text": "ribu",
              "meaning": "千",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Harganya seratus.",
          "translation": "價格是一百。",
          "segments": [
            {
              "text": "Harganya",
              "meaning": "價格",
              "tail": " "
            },
            {
              "text": "seratus",
              "meaning": "一百",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Se(一) + Ratus(百) = 一百。",
      "image_file": "hundred.png"
    },
    {
      "id": "num-1000",
      "term_zh": "1000",
      "related_terms": [
        {
          "term_target": "seribu",
          "pronunciation": [
            "/sə.ri.bu/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "se-",
              "meaning": "一",
              "tail": ""
            },
            {
              "text": "ribu",
              "meaning": "千",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Seribu rupiah.",
          "translation": "一千盧比。",
          "segments": [
            {
              "text": "Seribu",
              "meaning": "一千",
              "tail": " "
            },
            {
              "text": "rupiah",
              "meaning": "盧比(印尼幣)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Harganya seribu.",
          "translation": "價格是一千。",
          "segments": [
            {
              "text": "Harganya",
              "meaning": "價格",
              "tail": " "
            },
            {
              "text": "seribu",
              "meaning": "一千",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Terima kasih seribu.",
          "translation": "非常感謝 (一千個謝謝)。",
          "segments": [
            {
              "text": "Terima kasih",
              "meaning": "謝謝",
              "tail": " "
            },
            {
              "text": "seribu",
              "meaning": "一千",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Se(一) + Ribu(千) = 一千。",
      "image_file": "thousand.png"
    },
    {
      "id": "num-10000",
      "term_zh": "10000",
      "related_terms": [
        {
          "term_target": "sepuluh ribu",
          "pronunciation": [
            "/sə.pu.lʊh ri.bu/"
          ],
          "specific_note": "十千",
          "segments": [
            {
              "text": "sepuluh",
              "meaning": "十",
              "tail": " "
            },
            {
              "text": "ribu",
              "meaning": "千",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Sepuluh ribu rupiah.",
          "translation": "一萬盧比 (紫色鈔票)。",
          "segments": [
            {
              "text": "Sepuluh ribu",
              "meaning": "一萬(十千)",
              "tail": " "
            },
            {
              "text": "rupiah",
              "meaning": "盧比",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Harganya sepuluh ribu.",
          "translation": "價格是一萬。",
          "segments": [
            {
              "text": "Harganya",
              "meaning": "價格",
              "tail": " "
            },
            {
              "text": "sepuluh ribu",
              "meaning": "一萬",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Cuma sepuluh ribu.",
          "translation": "只要一萬。",
          "segments": [
            {
              "text": "Cuma",
              "meaning": "只有",
              "tail": " "
            },
            {
              "text": "sepuluh ribu",
              "meaning": "一萬",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語沒有「萬」這個單位，必須說「十個千」(Sepuluh ribu)。",
      "image_file": "ten_thousand.png"
    }
  ]
},
{
  "id": "grammar",
  "name": "常用句型",
  "items": [
    {
      "id": "g-01",
      "term_zh": "我是/覺得～",
      "related_terms": [
        {
          "term_target": "Saya ...",
          "pronunciation": [
            "/sa.ja/"
          ],
          "specific_note": "主詞+形容詞/名詞",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(狀態)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya senang.",
          "translation": "我很快樂。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "senang",
              "meaning": "快樂",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya capek.",
          "translation": "我很累。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "capek",
              "meaning": "累",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya mahasiswa.",
          "translation": "我是大學生。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mahasiswa",
              "meaning": "大學生",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語不需要 am/is/are，直接說「我+形容詞」。",
      "image_file": "i_am.png"
    },
    {
      "id": "g-02",
      "term_zh": "我的名字叫～",
      "related_terms": [
        {
          "term_target": "Nama saya ...",
          "pronunciation": [
            "/na.ma sa.ja/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Nama",
              "meaning": "名字",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我的",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "...",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Nama saya Budi.",
          "translation": "我的名字叫 Budi。",
          "segments": [
            {
              "text": "Nama",
              "meaning": "名字",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我的",
              "tail": " "
            },
            {
              "text": "Budi",
              "meaning": "Budi(人名)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Halo, nama saya Siti.",
          "translation": "哈囉，我叫 Siti。",
          "segments": [
            {
              "text": "Halo",
              "meaning": "你好",
              "tail": ", "
            },
            {
              "text": "nama",
              "meaning": "名字",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我的",
              "tail": " "
            },
            {
              "text": "Siti",
              "meaning": "Siti(人名)",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Panggil saya Tom.",
          "translation": "叫我 Tom 就好。",
          "segments": [
            {
              "text": "Panggil",
              "meaning": "稱呼/叫",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "Tom",
              "meaning": "Tom",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "自我介紹必備。",
      "image_file": "my_name_is.png"
    },
    {
      "id": "g-03",
      "term_zh": "我做～",
      "related_terms": [
        {
          "term_target": "Saya ...",
          "pronunciation": [
            "/sa.ja/"
          ],
          "specific_note": "主詞+動詞",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya kerja di sini.",
          "translation": "我在這裡工作。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya main bola.",
          "translation": "我踢球。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "main",
              "meaning": "玩",
              "tail": " "
            },
            {
              "text": "bola",
              "meaning": "球",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya suka musik.",
          "translation": "我喜歡音樂。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "musik",
              "meaning": "音樂",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "一般現在式，表示習慣或事實。",
      "image_file": "i_do.png"
    },
    {
      "id": "g-04",
      "term_zh": "我正在做～",
      "related_terms": [
        {
          "term_target": "Saya sedang ...",
          "pronunciation": [
            "/sa.ja sə.daŋ/"
          ],
          "specific_note": "進行式",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya sedang makan.",
          "translation": "我正在吃東西。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya lagi kerja.",
          "translation": "我正在工作 (Lagi是Sedang的口語)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lagi",
              "meaning": "正在(口語)",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya sedang tunggu teman.",
          "translation": "我正在等朋友。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sedang",
              "meaning": "正在",
              "tail": " "
            },
            {
              "text": "tunggu",
              "meaning": "等",
              "tail": " "
            },
            {
              "text": "teman",
              "meaning": "朋友",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "加上 Sedang (或口語 Lagi) 就變成現在進行式。",
      "image_file": "ing.png"
    },
    {
      "id": "g-05",
      "term_zh": "我能夠～",
      "related_terms": [
        {
          "term_target": "Saya bisa ...",
          "pronunciation": [
            "/sa.ja bi.sa/"
          ],
          "specific_note": "能力",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "bisa",
              "meaning": "能/會",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya bisa berenang.",
          "translation": "我會游泳。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "bisa",
              "meaning": "會",
              "tail": " "
            },
            {
              "text": "berenang",
              "meaning": "游泳",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya bisa bahasa Indonesia.",
          "translation": "我會(說)印尼語。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "bisa",
              "meaning": "會",
              "tail": " "
            },
            {
              "text": "bahasa",
              "meaning": "語言",
              "tail": " "
            },
            {
              "text": "Indonesia",
              "meaning": "印尼",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya bisa bantu.",
          "translation": "我可以幫忙。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "bisa",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "bantu",
              "meaning": "幫助",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Bisa 表示擁有某種能力。",
      "image_file": "can.png"
    },
    {
      "id": "g-06",
      "term_zh": "我喜歡做～",
      "related_terms": [
        {
          "term_target": "Saya suka ...",
          "pronunciation": [
            "/sa.ja su.ka/"
          ],
          "specific_note": "愛好",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya suka membaca.",
          "translation": "我喜歡閱讀。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "membaca",
              "meaning": "閱讀",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya suka jalan-jalan.",
          "translation": "我喜歡旅行/逛街。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "jalan-jalan",
              "meaning": "旅行/散步",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya suka makan pedas.",
          "translation": "我喜歡吃辣。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "pedas",
              "meaning": "辣的",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Suka 後面直接接動詞或名詞皆可。",
      "image_file": "like_ing.png"
    },
    {
      "id": "g-07",
      "term_zh": "我曾經～",
      "related_terms": [
        {
          "term_target": "Dulu saya ...",
          "pronunciation": [
            "/du.lu sa.ja/"
          ],
          "specific_note": "過去狀態",
          "segments": [
            {
              "text": "Dulu",
              "meaning": "從前",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "...",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Dulu saya kurus.",
          "translation": "我以前很瘦。",
          "segments": [
            {
              "text": "Dulu",
              "meaning": "以前",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "kurus",
              "meaning": "瘦",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dulu saya guru.",
          "translation": "我以前是老師。",
          "segments": [
            {
              "text": "Dulu",
              "meaning": "以前",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "guru",
              "meaning": "老師",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tadi saya di rumah.",
          "translation": "我剛才在家。",
          "segments": [
            {
              "text": "Tadi",
              "meaning": "剛才",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "rumah",
              "meaning": "家",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語沒有 past tense 變化，用 Dulu (以前) 或 Tadi (剛才) 標示時間。",
      "image_file": "i_was.png"
    },
    {
      "id": "g-08",
      "term_zh": "我做過～ (過去動作)",
      "related_terms": [
        {
          "term_target": "Saya sudah ...",
          "pronunciation": [
            "/sa.ja su.dah/"
          ],
          "specific_note": "完成動作",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya sudah makan.",
          "translation": "我吃飽了 (我吃過了)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya beli ini kemarin.",
          "translation": "我昨天買了這個 (加時間點)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": " "
            },
            {
              "text": "kemarin",
              "meaning": "昨天",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya lihat dia.",
          "translation": "我看見他了 (語境表示已發生)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lihat",
              "meaning": "看見",
              "tail": " "
            },
            {
              "text": "dia",
              "meaning": "他",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "簡單過去式可用 Sudah (已經) 或加上時間副詞 (如 Kemarin 昨天)。",
      "image_file": "i_did.png"
    },
    {
      "id": "g-09",
      "term_zh": "我已做過～ (完成)",
      "related_terms": [
        {
          "term_target": "Saya sudah ...",
          "pronunciation": [
            "/sa.ja su.dah/"
          ],
          "specific_note": "完成式",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya sudah selesai.",
          "translation": "我已經完成了。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "selesai",
              "meaning": "結束/完成",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya sudah menikah.",
          "translation": "我已經結婚了。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "menikah",
              "meaning": "結婚",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya sudah tahu.",
          "translation": "我已經知道了。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "sudah",
              "meaning": "已經",
              "tail": " "
            },
            {
              "text": "tahu",
              "meaning": "知道",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Sudah 是最重要的完成標記。",
      "image_file": "i_have_done.png"
    },
    {
      "id": "g-10",
      "term_zh": "我曾去過～",
      "related_terms": [
        {
          "term_target": "Saya pernah ke ...",
          "pronunciation": [
            "/sa.ja pər.nah kə/"
          ],
          "specific_note": "經驗",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去/往",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(地點)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya pernah ke Jepang.",
          "translation": "我曾經去過日本。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "Jepang",
              "meaning": "日本",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya pernah ke sana.",
          "translation": "我曾經去過那裡。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "sana",
              "meaning": "那裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya belum pernah ke Bali.",
          "translation": "我還沒去過峇里島。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "belum",
              "meaning": "尚未",
              "tail": " "
            },
            {
              "text": "pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "Bali",
              "meaning": "峇里島",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Pernah 表示「曾經有過的經驗」。",
      "image_file": "have_been_to.png"
    },
    {
      "id": "g-11",
      "term_zh": "我打算～",
      "related_terms": [
        {
          "term_target": "Saya akan ...",
          "pronunciation": [
            "/sa.ja a.kan/"
          ],
          "specific_note": "未來式",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "akan",
              "meaning": "將會",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya akan pergi.",
          "translation": "我將要離開(去)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "akan",
              "meaning": "將會",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "去",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya mau beli mobil.",
          "translation": "我打算(想要)買車。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要/將",
              "tail": " "
            },
            {
              "text": "beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "mobil",
              "meaning": "車",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya akan telepon nanti.",
          "translation": "我待會會打電話。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "akan",
              "meaning": "將會",
              "tail": " "
            },
            {
              "text": "telepon",
              "meaning": "打電話",
              "tail": " "
            },
            {
              "text": "nanti",
              "meaning": "待會",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Akan 是標準的「將會」，Mau (想要) 在口語中也常用來表示未來意圖。",
      "image_file": "i_will.png"
    },
    {
      "id": "g-12",
      "term_zh": "你是～嗎？",
      "related_terms": [
        {
          "term_target": "Apa kamu ...?",
          "pronunciation": [
            "/a.pa ka.mu/"
          ],
          "specific_note": "疑問句",
          "segments": [
            {
              "text": "Apa",
              "meaning": "是否",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "...",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kamu lapar?",
          "translation": "你餓嗎？(口語省略 Apa，直接上揚語調)",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "lapar",
              "meaning": "餓",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Apa kamu sibuk?",
          "translation": "你忙嗎？",
          "segments": [
            {
              "text": "Apa",
              "meaning": "是否",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "sibuk",
              "meaning": "忙碌",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Apa kamu mahasiswa?",
          "translation": "你是大學生嗎？",
          "segments": [
            {
              "text": "Apa",
              "meaning": "是否",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "mahasiswa",
              "meaning": "大學生",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "口語中常直接說句子並上揚語調即可。",
      "image_file": "are_you.png"
    },
    {
      "id": "g-13",
      "term_zh": "你在做～嗎？",
      "related_terms": [
        {
          "term_target": "Apa kamu ...?",
          "pronunciation": [
            "/a.pa ka.mu/"
          ],
          "specific_note": "疑問句",
          "segments": [
            {
              "text": "Apa",
              "meaning": "是否",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kamu merokok?",
          "translation": "你抽菸嗎？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "merokok",
              "meaning": "抽菸",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kamu suka kopi?",
          "translation": "你喜歡咖啡嗎？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "kopi",
              "meaning": "咖啡",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Apa kamu mengerti?",
          "translation": "你懂了嗎？",
          "segments": [
            {
              "text": "Apa",
              "meaning": "是否",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "mengerti",
              "meaning": "了解",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "與問狀態一樣，Apa 可加可不加。",
      "image_file": "do_you.png"
    },
    {
      "id": "g-14",
      "term_zh": "你曾經～嗎？",
      "related_terms": [
        {
          "term_target": "Pernah ...?",
          "pronunciation": [
            "/pər.nah/"
          ],
          "specific_note": "經驗",
          "segments": [
            {
              "text": "Pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pernah ke Bali?",
          "translation": "有去過峇里島嗎？",
          "segments": [
            {
              "text": "Pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "Bali",
              "meaning": "峇里島",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kamu pernah makan ini?",
          "translation": "你吃過這個嗎？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Belum pernah.",
          "translation": "還沒(曾經)。",
          "segments": [
            {
              "text": "Belum",
              "meaning": "還沒",
              "tail": " "
            },
            {
              "text": "pernah",
              "meaning": "曾經",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Pernah? = 有經驗嗎？",
      "image_file": "have_you_ever.png"
    },
    {
      "id": "g-15",
      "term_zh": "你何時做（某事）？",
      "related_terms": [
        {
          "term_target": "Kapan kamu ...?",
          "pronunciation": [
            "/ka.pan ka.mu/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kapan kamu pulang?",
          "translation": "你什麼時候回家？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "pulang",
              "meaning": "回家",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kapan kita makan?",
          "translation": "我們什麼時候吃飯？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "kita",
              "meaning": "我們",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kapan kamu kerja?",
          "translation": "你什麼時候上班？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Kapan 放在句首。",
      "image_file": "when_do_you.png"
    },
    {
      "id": "g-16",
      "term_zh": "你什麼時候去（某地）？",
      "related_terms": [
        {
          "term_target": "Kapan kamu ke ...?",
          "pronunciation": [
            "/ka.pan ka.mu kə/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去/往",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(地點)",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kapan kamu ke sekolah?",
          "translation": "你什麼時候去學校？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "sekolah",
              "meaning": "學校",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kapan ke kantor?",
          "translation": "什麼時候去辦公室？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "kantor",
              "meaning": "辦公室",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kapan kamu ke Jakarta?",
          "translation": "你什麼時候去雅加達？",
          "segments": [
            {
              "text": "Kapan",
              "meaning": "何時",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "Jakarta",
              "meaning": "雅加達",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "口語中省略 Pergi (去)，直接用 Ke (往) 即可。",
      "image_file": "when_go_to.png"
    },
    {
      "id": "g-17",
      "term_zh": "你在哪裡做（某事）？",
      "related_terms": [
        {
          "term_target": "Di mana kamu ...?",
          "pronunciation": [
            "/di ma.na ka.mu/"
          ],
          "specific_note": "",
          "segments": [
            {
              "text": "Di mana",
              "meaning": "在哪裡",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Di mana kamu tinggal?",
          "translation": "你住在哪裡？",
          "segments": [
            {
              "text": "Di mana",
              "meaning": "在哪裡",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "tinggal",
              "meaning": "居住",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Di mana kamu kerja?",
          "translation": "你在哪裡工作？",
          "segments": [
            {
              "text": "Di mana",
              "meaning": "在哪裡",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Di mana kamu beli ini?",
          "translation": "你在哪裡買這個的？",
          "segments": [
            {
              "text": "Di mana",
              "meaning": "在哪裡",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Di mana 用於詢問地點。",
      "image_file": "where_do_you.png"
    },
    {
      "id": "g-18",
      "term_zh": "你如何做（某事）？",
      "related_terms": [
        {
          "term_target": "Gimana caranya ...?",
          "pronunciation": [
            "/gi.ma.na tʃa.ra.ɲa/"
          ],
          "specific_note": "如何(口語)",
          "segments": [
            {
              "text": "Gimana",
              "meaning": "怎樣/如何",
              "tail": " "
            },
            {
              "text": "caranya",
              "meaning": "方法+那",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "...",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Gimana cara bukanya?",
          "translation": "這個要怎麼打開？(打開的方法是如何)",
          "segments": [
            {
              "text": "Gimana",
              "meaning": "如何",
              "tail": " "
            },
            {
              "text": "cara",
              "meaning": "方法",
              "tail": " "
            },
            {
              "text": "bukanya",
              "meaning": "打開+它",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Gimana cara masaknya?",
          "translation": "這要怎麼煮？",
          "segments": [
            {
              "text": "Gimana",
              "meaning": "如何",
              "tail": " "
            },
            {
              "text": "cara",
              "meaning": "方法",
              "tail": " "
            },
            {
              "text": "masaknya",
              "meaning": "煮+它",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Gimana kamu tahu?",
          "translation": "你怎麼知道的？",
          "segments": [
            {
              "text": "Gimana",
              "meaning": "如何",
              "tail": " "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "tahu",
              "meaning": "知道",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Gimana 是 Bagaimana 的常用口語縮寫。",
      "image_file": "how_do_you.png"
    },
    {
      "id": "g-19",
      "term_zh": "你怎麼去（某地）？",
      "related_terms": [
        {
          "term_target": "Naik apa ke ...?",
          "pronunciation": [
            "/na.ik a.pa kə/"
          ],
          "specific_note": "搭什麼去",
          "segments": [
            {
              "text": "Naik",
              "meaning": "搭乘",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去/往",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(地點)",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Naik apa ke bandara?",
          "translation": "要怎麼去機場？(搭什麼交通工具)",
          "segments": [
            {
              "text": "Naik",
              "meaning": "搭乘",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "bandara",
              "meaning": "機場",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Kamu ke sekolah naik apa?",
          "translation": "你怎麼去上學？",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "sekolah",
              "meaning": "學校",
              "tail": " "
            },
            {
              "text": "naik",
              "meaning": "搭",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Ke sana naik apa?",
          "translation": "去那裡要搭什麼？",
          "segments": [
            {
              "text": "Ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "sana",
              "meaning": "那裡",
              "tail": " "
            },
            {
              "text": "naik",
              "meaning": "搭",
              "tail": " "
            },
            {
              "text": "apa",
              "meaning": "什麼",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "問交通方式時，習慣用 Naik apa (搭什麼) 而不是 Bagaimana (如何)。",
      "image_file": "how_go_to.png"
    },
    {
      "id": "g-20",
      "term_zh": "我不是～",
      "related_terms": [
        {
          "term_target": "Saya bukan ...",
          "pronunciation": [
            "/sa.ja bu.kan/"
          ],
          "specific_note": "否定名詞",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "bukan",
              "meaning": "不是",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(名詞)",
              "tail": ""
            }
          ]
        },
        {
          "term_target": "Saya tidak ...",
          "pronunciation": [
            "/sa.ja ti.dak/"
          ],
          "specific_note": "否定形容詞",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(形容詞)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya tidak capek.",
          "translation": "我不累。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "capek",
              "meaning": "累",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya belum siap.",
          "translation": "我還沒準備好 (Not yet ready)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "belum",
              "meaning": "還沒",
              "tail": " "
            },
            {
              "text": "siap",
              "meaning": "準備好",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya bukan dokter.",
          "translation": "我不是醫生 (否定名詞用 Bukan)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "bukan",
              "meaning": "不是",
              "tail": " "
            },
            {
              "text": "dokter",
              "meaning": "醫生",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Bukan 接名詞(職業/身份)，Tidak 接形容詞(累/餓)。",
      "image_file": "i_am_not.png"
    },
    {
      "id": "g-21",
      "term_zh": "我不做～",
      "related_terms": [
        {
          "term_target": "Saya tidak ...",
          "pronunciation": [
            "/sa.ja ti.dak/"
          ],
          "specific_note": "否定動作",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya tidak merokok.",
          "translation": "我不抽菸。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "merokok",
              "meaning": "抽菸",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya tidak tahu.",
          "translation": "我不知道。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "tahu",
              "meaning": "知道",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya tidak mengerti.",
          "translation": "我不懂。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "mengerti",
              "meaning": "了解",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語常把 Tidak 說成 Nggak (例如：Saya nggak tahu)。",
      "image_file": "i_dont.png"
    },
    {
      "id": "g-22",
      "term_zh": "我不能～",
      "related_terms": [
        {
          "term_target": "Saya tidak bisa ...",
          "pronunciation": [
            "/sa.ja ti.dak bi.sa/"
          ],
          "specific_note": "無法",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "bisa",
              "meaning": "能",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya tidak bisa berenang.",
          "translation": "我不會游泳。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "bisa",
              "meaning": "會",
              "tail": " "
            },
            {
              "text": "berenang",
              "meaning": "游泳",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya tidak bisa dengar.",
          "translation": "我聽不到。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "bisa",
              "meaning": "能",
              "tail": " "
            },
            {
              "text": "dengar",
              "meaning": "聽",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya tidak bisa datang.",
          "translation": "我不能來(去)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "bisa",
              "meaning": "能",
              "tail": " "
            },
            {
              "text": "datang",
              "meaning": "來",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Tidak bisa = 不能/不會。",
      "image_file": "i_cant.png"
    },
    {
      "id": "g-23",
      "term_zh": "我未曾～",
      "related_terms": [
        {
          "term_target": "Saya belum pernah ...",
          "pronunciation": [
            "/sa.ja bə.lum pər.nah/"
          ],
          "specific_note": "沒經驗",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "belum",
              "meaning": "還沒",
              "tail": " "
            },
            {
              "text": "pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya belum pernah makan ini.",
          "translation": "我從沒吃過這個。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "belum",
              "meaning": "還沒",
              "tail": " "
            },
            {
              "text": "pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya belum pernah ke sana.",
          "translation": "我從沒去過那裡。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "belum",
              "meaning": "還沒",
              "tail": " "
            },
            {
              "text": "pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "ke",
              "meaning": "去",
              "tail": " "
            },
            {
              "text": "sana",
              "meaning": "那裡",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya belum pernah lihat.",
          "translation": "我從沒看過。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "belum",
              "meaning": "還沒",
              "tail": " "
            },
            {
              "text": "pernah",
              "meaning": "曾經",
              "tail": " "
            },
            {
              "text": "lihat",
              "meaning": "看",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Belum 帶有「目前還沒，但未來可能會有」的含義，比 Tidak (不) 更常用。",
      "image_file": "i_have_never.png"
    },
    {
      "id": "g-24",
      "term_zh": "我不必～",
      "related_terms": [
        {
          "term_target": "Saya tidak perlu ...",
          "pronunciation": [
            "/sa.ja ti.dak pər.lu/"
          ],
          "specific_note": "無須",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "perlu",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya tidak perlu pergi.",
          "translation": "我不必去。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "perlu",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "去",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tidak usah repot-repot.",
          "translation": "不必麻煩了 (不用客氣)。",
          "segments": [
            {
              "text": "Tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "usah",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "repot-repot",
              "meaning": "麻煩",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kamu tidak perlu bayar.",
          "translation": "你不必付錢。",
          "segments": [
            {
              "text": "Kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "perlu",
              "meaning": "需要",
              "tail": " "
            },
            {
              "text": "bayar",
              "meaning": "付",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Tidak usah (不用) 是很常見的口語說法。",
      "image_file": "i_dont_have_to.png"
    },
    {
      "id": "g-25",
      "term_zh": "如果～的話，就～",
      "related_terms": [
        {
          "term_target": "Kalau ..., ...",
          "pronunciation": [
            "/ka.lau/"
          ],
          "specific_note": "如果",
          "segments": [
            {
              "text": "Kalau",
              "meaning": "如果",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kalau suka, ambil saja.",
          "translation": "如果喜歡，就拿去吧。",
          "segments": [
            {
              "text": "Kalau",
              "meaning": "如果",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": ", "
            },
            {
              "text": "ambil",
              "meaning": "拿",
              "tail": " "
            },
            {
              "text": "saja",
              "meaning": "就",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kalau hujan, saya di rumah.",
          "translation": "如果下雨，我就在家。",
          "segments": [
            {
              "text": "Kalau",
              "meaning": "如果",
              "tail": " "
            },
            {
              "text": "hujan",
              "meaning": "下雨",
              "tail": ", "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "rumah",
              "meaning": "家",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Kalau capek, tidur.",
          "translation": "如果累了，就睡覺。",
          "segments": [
            {
              "text": "Kalau",
              "meaning": "如果",
              "tail": " "
            },
            {
              "text": "capek",
              "meaning": "累",
              "tail": ", "
            },
            {
              "text": "tidur",
              "meaning": "睡",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Jika 是正式的「如果」，口語多用 Kalau。",
      "image_file": "if.png"
    },
    {
      "id": "g-26",
      "term_zh": "當～時，就～",
      "related_terms": [
        {
          "term_target": "Waktu ...",
          "pronunciation": [
            "/wak.tu/"
          ],
          "specific_note": "當...時",
          "segments": [
            {
              "text": "Waktu",
              "meaning": "時間/當",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Waktu saya makan, saya senang.",
          "translation": "當我吃東西時，我很開心。",
          "segments": [
            {
              "text": "Waktu",
              "meaning": "當",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": ", "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "senang",
              "meaning": "開心",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Waktu sampai, telepon saya.",
          "translation": "當你到達時，打給我。",
          "segments": [
            {
              "text": "Waktu",
              "meaning": "當",
              "tail": " "
            },
            {
              "text": "sampai",
              "meaning": "抵達",
              "tail": ", "
            },
            {
              "text": "telepon",
              "meaning": "打電話",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Waktu kecil, saya kurus.",
          "translation": "我小時候(當我小的時候)很瘦。",
          "segments": [
            {
              "text": "Waktu",
              "meaning": "當",
              "tail": " "
            },
            {
              "text": "kecil",
              "meaning": "小",
              "tail": ", "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "kurus",
              "meaning": "瘦",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Saat 也可以用來表示「當...時候」。",
      "image_file": "when_condition.png"
    },
    {
      "id": "g-27",
      "term_zh": "請你～",
      "related_terms": [
        {
          "term_target": "Tolong ...",
          "pronunciation": [
            "/to.loŋ/"
          ],
          "specific_note": "請求",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請/幫忙",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tolong bantu saya.",
          "translation": "請幫幫我。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請",
              "tail": " "
            },
            {
              "text": "bantu",
              "meaning": "協助",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tolong buka pintu.",
          "translation": "請開門。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請",
              "tail": " "
            },
            {
              "text": "buka",
              "meaning": "開",
              "tail": " "
            },
            {
              "text": "pintu",
              "meaning": "門",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Tolong tunggu sebentar.",
          "translation": "請等一下。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請",
              "tail": " "
            },
            {
              "text": "tunggu",
              "meaning": "等",
              "tail": " "
            },
            {
              "text": "sebentar",
              "meaning": "一會兒",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "句子開頭加 Tolong 比較有禮貌。",
      "image_file": "can_you_help.png"
    },
    {
      "id": "g-28",
      "term_zh": "我們來做～吧！",
      "related_terms": [
        {
          "term_target": "Ayo ...",
          "pronunciation": [
            "/a.jo/"
          ],
          "specific_note": "邀約",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來吧/走吧",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ayo pergi.",
          "translation": "我們走吧。",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來吧",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "走",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ayo makan.",
          "translation": "來吃飯吧。",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來吧",
              "tail": " "
            },
            {
              "text": "makan",
              "meaning": "吃",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ayo istirahat.",
          "translation": "我們休息一下吧。",
          "segments": [
            {
              "text": "Ayo",
              "meaning": "來吧",
              "tail": " "
            },
            {
              "text": "istirahat",
              "meaning": "休息",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Mari 也是「來吧/讓我們」的意思，但 Ayo 較口語熱情。",
      "image_file": "lets.png"
    },
    {
      "id": "g-29",
      "term_zh": "我認為～",
      "related_terms": [
        {
          "term_target": "Saya pikir ...",
          "pronunciation": [
            "/sa.ja pi.kɪr/"
          ],
          "specific_note": "想法",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "pikir",
              "meaning": "想/認為",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya pikir itu bagus.",
          "translation": "我認為那很好。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "pikir",
              "meaning": "認為",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "bagus",
              "meaning": "好",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Menurut saya, kamu benar.",
          "translation": "我覺得(根據我)，你是對的。",
          "segments": [
            {
              "text": "Menurut",
              "meaning": "根據/依照",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": ", "
            },
            {
              "text": "kamu",
              "meaning": "你",
              "tail": " "
            },
            {
              "text": "benar",
              "meaning": "正確",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya rasa begitu.",
          "translation": "我也這麼覺得 (我感覺是這樣)。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "rasa",
              "meaning": "感覺",
              "tail": " "
            },
            {
              "text": "begitu",
              "meaning": "那樣",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Saya pikir (我想)、Menurut saya (依我看)、Saya rasa (我感覺) 都很常用。",
      "image_file": "i_think.png"
    },
    {
      "id": "g-30",
      "term_zh": "我想做～",
      "related_terms": [
        {
          "term_target": "Saya mau ...",
          "pronunciation": [
            "/sa.ja ma.u/"
          ],
          "specific_note": "想要",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya mau pulang.",
          "translation": "我想回家。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "pulang",
              "meaning": "回家",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya mau beli ini.",
          "translation": "我想買這個。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "mau",
              "meaning": "想要",
              "tail": " "
            },
            {
              "text": "beli",
              "meaning": "買",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya ingin nonton film.",
          "translation": "我想(渴望)看電影。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "ingin",
              "meaning": "想要/渴望",
              "tail": " "
            },
            {
              "text": "nonton",
              "meaning": "看",
              "tail": " "
            },
            {
              "text": "film",
              "meaning": "電影",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Mau 是口語最常用的「想要」，Ingin 比較正式或表達渴望。",
      "image_file": "want_to.png"
    },
    {
      "id": "g-31",
      "term_zh": "我必須做～",
      "related_terms": [
        {
          "term_target": "Saya harus ...",
          "pronunciation": [
            "/sa.ja ha.rʊs/"
          ],
          "specific_note": "義務",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "harus",
              "meaning": "必須",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya harus kerja.",
          "translation": "我必須工作。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "harus",
              "meaning": "必須",
              "tail": " "
            },
            {
              "text": "kerja",
              "meaning": "工作",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya harus pergi sekarang.",
          "translation": "我現在得走了。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "harus",
              "meaning": "必須",
              "tail": " "
            },
            {
              "text": "pergi",
              "meaning": "走/離開",
              "tail": " "
            },
            {
              "text": "sekarang",
              "meaning": "現在",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya harus belajar.",
          "translation": "我必須讀書。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "harus",
              "meaning": "必須",
              "tail": " "
            },
            {
              "text": "belajar",
              "meaning": "學習",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Harus 表示強烈的義務。",
      "image_file": "i_have_to.png"
    },
    {
      "id": "g-32",
      "term_zh": "做某事是怎樣的",
      "related_terms": [
        {
          "term_target": "～ itu ...",
          "pronunciation": [
            "/... i.tu/"
          ],
          "specific_note": "動詞作主詞",
          "segments": [
            {
              "text": "～",
              "meaning": "(動作)",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那(強調主詞)",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(形容詞)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Makan itu penting.",
          "translation": "吃東西是很重要的。",
          "segments": [
            {
              "text": "Makan",
              "meaning": "吃",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那(強調)",
              "tail": " "
            },
            {
              "text": "penting",
              "meaning": "重要",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Senang bertemu denganmu.",
          "translation": "很高興認識你 (認識你是高興的)。",
          "segments": [
            {
              "text": "Senang",
              "meaning": "高興",
              "tail": " "
            },
            {
              "text": "bertemu",
              "meaning": "見面",
              "tail": " "
            },
            {
              "text": "denganmu",
              "meaning": "跟你",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Belajar itu susah.",
          "translation": "學習很難。",
          "segments": [
            {
              "text": "Belajar",
              "meaning": "學習",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那",
              "tail": " "
            },
            {
              "text": "susah",
              "meaning": "困難",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "印尼語常把動詞放在句首當主詞，中間加 itu 強調。",
      "image_file": "it_is_to.png"
    },
    {
      "id": "g-33",
      "term_zh": "你可以幫我…嗎？",
      "related_terms": [
        {
          "term_target": "Bisa bantu saya ...?",
          "pronunciation": [
            "/bi.sa ban.tu sa.ja/"
          ],
          "specific_note": "請求協助",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "bantu",
              "meaning": "幫",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bisa bantu saya angkat ini?",
          "translation": "可以幫我抬這個嗎？",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "bantu",
              "meaning": "幫",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "angkat",
              "meaning": "抬/舉",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Bisa bantu saya cari?",
          "translation": "可以幫我找嗎？",
          "segments": [
            {
              "text": "Bisa",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "bantu",
              "meaning": "幫",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "cari",
              "meaning": "找",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Tolong bantu saya.",
          "translation": "請幫幫我。",
          "segments": [
            {
              "text": "Tolong",
              "meaning": "請/救命",
              "tail": " "
            },
            {
              "text": "bantu",
              "meaning": "幫",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Tolong 比較懇切，Bisa 比較像詢問能力。",
      "image_file": "can_you_help.png"
    },
    {
      "id": "g-34",
      "term_zh": "我可以…嗎？",
      "related_terms": [
        {
          "term_target": "Boleh saya ...?",
          "pronunciation": [
            "/bo.lɛh sa.ja/"
          ],
          "specific_note": "請求許可",
          "segments": [
            {
              "text": "Boleh",
              "meaning": "可以/被允許",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(動作)",
              "tail": "?"
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Boleh saya masuk?",
          "translation": "我可以進來嗎？",
          "segments": [
            {
              "text": "Boleh",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "masuk",
              "meaning": "進",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Boleh saya minta air?",
          "translation": "我可以要點水嗎？",
          "segments": [
            {
              "text": "Boleh",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "minta",
              "meaning": "請求",
              "tail": " "
            },
            {
              "text": "air",
              "meaning": "水",
              "tail": "?"
            }
          ]
        },
        {
          "sentence": "Boleh saya duduk di sini?",
          "translation": "我可以坐這裡嗎？",
          "segments": [
            {
              "text": "Boleh",
              "meaning": "可以",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "duduk",
              "meaning": "坐",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Boleh 是「被允許」，Bisa 是「有能力做」。這裡用 Boleh 較禮貌。",
      "image_file": "can_i.png"
    },
    {
      "id": "g-35",
      "term_zh": "我不喜歡…",
      "related_terms": [
        {
          "term_target": "Saya tidak suka ...",
          "pronunciation": [
            "/sa.ja ti.dak su.ka/"
          ],
          "specific_note": "反感",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(事物)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya tidak suka itu.",
          "translation": "我不喜歡那個。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya tidak suka durian.",
          "translation": "我不喜歡榴槤。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "durian",
              "meaning": "榴槤",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya tidak suka menunggu.",
          "translation": "我不喜歡等待。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "tidak",
              "meaning": "不",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "menunggu",
              "meaning": "等待",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "口語中 Tidak 常用 Nggak 代替 (Saya nggak suka)。",
      "image_file": "i_dont_like.png"
    },
    {
      "id": "g-36",
      "term_zh": "我比較喜歡…",
      "related_terms": [
        {
          "term_target": "Saya lebih suka ...",
          "pronunciation": [
            "/sa.ja lə.bɪh su.ka/"
          ],
          "specific_note": "偏好",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lebih",
              "meaning": "更",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(事物)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Saya lebih suka teh.",
          "translation": "我比較喜歡茶。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lebih",
              "meaning": "更",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "teh",
              "meaning": "茶",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya lebih suka di rumah.",
          "translation": "我比較喜歡待在家。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lebih",
              "meaning": "更",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "rumah",
              "meaning": "家",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Saya lebih suka ini.",
          "translation": "我比較喜歡這個。",
          "segments": [
            {
              "text": "Saya",
              "meaning": "我",
              "tail": " "
            },
            {
              "text": "lebih",
              "meaning": "更",
              "tail": " "
            },
            {
              "text": "suka",
              "meaning": "喜歡",
              "tail": " "
            },
            {
              "text": "ini",
              "meaning": "這個",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "Lebih 意思是「更/多」。",
      "image_file": "prefer.png"
    },
    {
      "id": "g-37",
      "term_zh": "A 比 B 更…",
      "related_terms": [
        {
          "term_target": "A lebih ... daripada B",
          "pronunciation": [
            "/lə.bɪh ... da.ri.pa.da/"
          ],
          "specific_note": "比較級",
          "segments": [
            {
              "text": "A",
              "meaning": "A",
              "tail": " "
            },
            {
              "text": "lebih",
              "meaning": "更",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(形容詞)",
              "tail": " "
            },
            {
              "text": "daripada",
              "meaning": "比",
              "tail": " "
            },
            {
              "text": "B",
              "meaning": "B",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ini lebih mahal daripada itu.",
          "translation": "這個比那個貴。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "lebih",
              "meaning": "更",
              "tail": " "
            },
            {
              "text": "mahal",
              "meaning": "貴",
              "tail": " "
            },
            {
              "text": "daripada",
              "meaning": "比",
              "tail": " "
            },
            {
              "text": "itu",
              "meaning": "那",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Dia lebih tinggi dari saya.",
          "translation": "他比我高 (口語常把 Daripada 簡化為 Dari)。",
          "segments": [
            {
              "text": "Dia",
              "meaning": "他",
              "tail": " "
            },
            {
              "text": "lebih",
              "meaning": "更",
              "tail": " "
            },
            {
              "text": "tinggi",
              "meaning": "高",
              "tail": " "
            },
            {
              "text": "dari",
              "meaning": "比(口語)",
              "tail": " "
            },
            {
              "text": "saya",
              "meaning": "我",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ini lebih baik.",
          "translation": "這個比較好 (省略比較對象)。",
          "segments": [
            {
              "text": "Ini",
              "meaning": "這",
              "tail": " "
            },
            {
              "text": "lebih",
              "meaning": "更",
              "tail": " "
            },
            {
              "text": "baik",
              "meaning": "好",
              "tail": "."
            }
          ]
        }
      ],
      "usage_note": "正式比較用 Daripada，口語常用 Dari (從)。",
      "image_file": "more_than.png"
    },
    {
      "id": "g-38",
      "term_zh": "有…（存在）",
      "related_terms": [
        {
          "term_target": "Ada ...",
          "pronunciation": [
            "/a.da/"
          ],
          "specific_note": "存在",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有/在",
              "tail": " "
            },
            {
              "text": "...",
              "meaning": "(事物)",
              "tail": ""
            }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ada masalah.",
          "translation": "有問題 (出問題了)。",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "masalah",
              "meaning": "問題",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Ada banyak orang.",
          "translation": "有很多人。",
          "segments": [
            {
              "text": "Ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "banyak",
              "meaning": "許多",
              "tail": " "
            },
            {
              "text": "orang",
              "meaning": "人",
              "tail": "."
            }
          ]
        },
        {
          "sentence": "Di sini ada Wi-Fi?",
          "translation": "這裡有 Wi-Fi 嗎？",
          "segments": [
            {
              "text": "Di",
              "meaning": "在",
              "tail": " "
            },
            {
              "text": "sini",
              "meaning": "這裡",
              "tail": " "
            },
            {
              "text": "ada",
              "meaning": "有",
              "tail": " "
            },
            {
              "text": "Wi-Fi",
              "meaning": "無線網路",
              "tail": "?"
            }
          ]
        }
      ],
      "usage_note": "Ada 既表示「擁有」也表示「存在」。",
      "image_file": "there_is.png"
    }
  ]
}

  ],
};
