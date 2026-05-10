import { AppData } from "../types";

export const spanishData: AppData = {
  meta: {
    source_language: "zh-TW",
    target_language: "es-ES",
    version: "3.2",
    description:
      "台灣人快速語言學習 - 西班牙文完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)",
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
          "term_target": "Sí",
          "pronunciation": ["/si/"],
          "specific_note": "肯定",
          "segments": [{ "text": "Sí", "meaning": "是的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sí, claro.",
          "translation": "是的，當然。",
          "segments": [
            { "text": "Sí", "meaning": "是的", "tail": ", " },
            { "text": "claro", "meaning": "清楚的/當然", "tail": "." }
          ]
        },
        {
          "sentence": "Sí, por favor.",
          "translation": "是的，麻煩你了。",
          "segments": [
            { "text": "Sí", "meaning": "是的", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠/幫忙", "tail": "." }
          ]
        },
        {
          "sentence": "Sí, entiendo.",
          "translation": "是的，我懂。",
          "segments": [
            { "text": "Sí", "meaning": "是的", "tail": ", " },
            { "text": "entiendo", "meaning": "我懂/我明白", "tail": "." }
          ]
        }
      ],
      "usage_note": "回答問題或表示同意，注意 i 上面有重音符號（沒重音會變成「如果」的意思）。",
      "image_file": "yes.png"
    },
    {
      "id": "greet-002",
      "term_zh": "不是",
      "related_terms": [
        {
          "term_target": "No",
          "pronunciation": ["/no/"],
          "specific_note": "否定",
          "segments": [{ "text": "No", "meaning": "不/沒有", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "No, gracias.",
          "translation": "不了，謝謝。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": ", " },
            { "text": "gracias", "meaning": "感謝", "tail": "." }
          ]
        },
        {
          "sentence": "No lo sé.",
          "translation": "我不知道。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "lo", "meaning": "它", "tail": " " },
            { "text": "sé", "meaning": "我知道", "tail": "." }
          ]
        },
        {
          "sentence": "No hay problema.",
          "translation": "沒問題。",
          "segments": [
            { "text": "No", "meaning": "沒有", "tail": " " },
            { "text": "hay", "meaning": "有/存在", "tail": " " },
            { "text": "problema", "meaning": "問題", "tail": "." }
          ]
        }
      ],
      "usage_note": "拒絕或否認時使用，發音短促有力。",
      "image_file": "no.png"
    },
    {
      "id": "greet-003",
      "term_zh": "你好",
      "related_terms": [
        {
          "term_target": "Hola",
          "pronunciation": ["/ˈo.la/"],
          "specific_note": "通用",
          "segments": [{ "text": "Hola", "meaning": "你好", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¡Hola! ¿Qué tal?",
          "translation": "嗨！最近好嗎？",
          "segments": [
            { "text": "¡Hola!", "meaning": "你好", "tail": " " },
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "tal?", "meaning": "如此/這樣", "tail": "" }
          ]
        },
        {
          "sentence": "Hola a todos.",
          "translation": "大家好。",
          "segments": [
            { "text": "Hola", "meaning": "你好", "tail": " " },
            { "text": "a", "meaning": "對/向", "tail": " " },
            { "text": "todos", "meaning": "所有人", "tail": "." }
          ]
        },
        {
          "sentence": "Hola, buenos días.",
          "translation": "你好，早安。",
          "segments": [
            { "text": "Hola", "meaning": "你好", "tail": ", " },
            { "text": "buenos", "meaning": "好的", "tail": " " },
            { "text": "días", "meaning": "天/日子", "tail": "." }
          ]
        }
      ],
      "usage_note": "最通用的問候語，請注意西班牙文的 h 永遠不發音，直接念 o-la。",
      "image_file": "hello.png"
    },
    {
      "id": "greet-004",
      "term_zh": "謝謝你",
      "related_terms": [
        {
          "term_target": "Gracias",
          "pronunciation": ["/ˈɡɾa.sjas/"],
          "specific_note": "",
          "segments": [
            { "text": "Gracias", "meaning": "感謝", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Muchas gracias.",
          "translation": "非常感謝。",
          "segments": [
            { "text": "Muchas", "meaning": "很多的", "tail": " " },
            { "text": "gracias", "meaning": "感謝", "tail": "." }
          ]
        },
        {
          "sentence": "Gracias por tu ayuda.",
          "translation": "謝謝你的幫忙。",
          "segments": [
            { "text": "Gracias", "meaning": "感謝", "tail": " " },
            { "text": "por", "meaning": "因為/為了", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "ayuda", "meaning": "幫忙", "tail": "." }
          ]
        },
        {
          "sentence": "Mil gracias.",
          "translation": "萬分感謝 (直譯：一千個感謝)。",
          "segments": [
            { "text": "Mil", "meaning": "一千", "tail": " " },
            { "text": "gracias", "meaning": "感謝", "tail": "." }
          ]
        }
      ],
      "usage_note": "日常最常用的道謝方式。發音時 r 可以輕輕彈舌。",
      "image_file": "thank_you.png"
    },
    {
      "id": "greet-005",
      "term_zh": "對不起",
      "related_terms": [
        {
          "term_target": "Lo siento",
          "pronunciation": ["/lo ˈsjen.to/"],
          "specific_note": "道歉/遺憾",
          "segments": [
            { "text": "Lo", "meaning": "它", "tail": " " },
            { "text": "siento", "meaning": "我感覺/我抱歉", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lo siento mucho.",
          "translation": "非常抱歉。",
          "segments": [
            { "text": "Lo", "meaning": "它", "tail": " " },
            { "text": "siento", "meaning": "我感覺", "tail": " " },
            { "text": "mucho", "meaning": "很多/非常", "tail": "." }
          ]
        },
        {
          "sentence": "Siento llegar tarde.",
          "translation": "抱歉我遲到了。",
          "segments": [
            { "text": "Siento", "meaning": "我抱歉", "tail": " " },
            { "text": "llegar", "meaning": "到達", "tail": " " },
            { "text": "tarde", "meaning": "晚/遲", "tail": "." }
          ]
        },
        {
          "sentence": "Lo siento, no entiendo.",
          "translation": "抱歉，我不懂。",
          "segments": [
            { "text": "Lo", "meaning": "它", "tail": " " },
            { "text": "siento", "meaning": "我抱歉", "tail": ", " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "entiendo", "meaning": "我明白", "tail": "." }
          ]
        }
      ],
      "usage_note": "常用於表達深刻的歉意，或是聽到別人發生壞事時表示遺憾與同情。",
      "image_file": "sorry.png"
    },
    {
      "id": "greet-006",
      "term_zh": "不好意思",
      "related_terms": [
        {
          "term_target": "Disculpe",
          "pronunciation": ["/disˈkul.pe/"],
          "specific_note": "發問前",
          "segments": [
            { "text": "Disculpe", "meaning": "請原諒(尊稱)", "tail": "..." }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Disculpe, ¿dónde está el baño?",
          "translation": "不好意思，廁所在哪裡？",
          "segments": [
            { "text": "Disculpe", "meaning": "請原諒", "tail": ", " },
            { "text": "¿dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在/位於", "tail": " " },
            { "text": "el", "meaning": "這個(陽性)", "tail": " " },
            { "text": "baño?", "meaning": "廁所", "tail": "" }
          ]
        },
        {
          "sentence": "Disculpe, ¿puede ayudarme?",
          "translation": "不好意思，能幫我一下嗎？",
          "segments": [
            { "text": "Disculpe", "meaning": "請原諒", "tail": ", " },
            { "text": "¿puede", "meaning": "您能", "tail": " " },
            { "text": "ayudarme?", "meaning": "幫我(ayudar+me)", "tail": "" }
          ]
        },
        {
          "sentence": "Disculpe, ¿puedo pasar?",
          "translation": "不好意思，借過一下(我可以過去嗎)？",
          "segments": [
            { "text": "Disculpe", "meaning": "請原諒", "tail": ", " },
            { "text": "¿puedo", "meaning": "我能", "tail": " " },
            { "text": "pasar?", "meaning": "經過/通過", "tail": "" }
          ]
        }
      ],
      "usage_note": "路上找陌生人搭話、問路或借過時最得體的開場白。",
      "image_file": "excuse_me.png"
    },
    {
      "id": "greet-007",
      "term_zh": "我不懂",
      "related_terms": [
        {
          "term_target": "No entiendo",
          "pronunciation": ["/no enˈtjen.do/"],
          "specific_note": "",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "entiendo", "meaning": "我明白", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lo siento, no entiendo.",
          "translation": "抱歉，我不懂。",
          "segments": [
            { "text": "Lo", "meaning": "它", "tail": " " },
            { "text": "siento", "meaning": "我抱歉", "tail": ", " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "entiendo", "meaning": "我明白", "tail": "." }
          ]
        },
        {
          "sentence": "No entiendo español.",
          "translation": "我不懂西班牙文。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "entiendo", "meaning": "我明白", "tail": " " },
            { "text": "español", "meaning": "西班牙文", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué quieres decir? No entiendo.",
          "translation": "你是什麼意思？我不懂。",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "quieres", "meaning": "你想要", "tail": " " },
            { "text": "decir?", "meaning": "說", "tail": " " },
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "entiendo", "meaning": "我明白", "tail": "." }
          ]
        }
      ],
      "usage_note": "外國人講太快聽不懂時，直接掛在嘴邊保護自己。",
      "image_file": "dont_understand.png"
    },
    {
      "id": "greet-008",
      "term_zh": "廁所在哪裡？",
      "related_terms": [
        {
          "term_target": "¿Dónde está el baño?",
          "pronunciation": ["/ˈdon.de esˈta el ˈba.ɲo/"],
          "specific_note": "",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "el", "meaning": "這個", "tail": " " },
            { "text": "baño?", "meaning": "廁所", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Disculpe, ¿dónde está el baño?",
          "translation": "請問廁所在哪？",
          "segments": [
            { "text": "Disculpe", "meaning": "不好意思", "tail": ", " },
            { "text": "¿dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "baño?", "meaning": "廁所", "tail": "" }
          ]
        },
        {
          "sentence": "¿Hay un baño por aquí?",
          "translation": "這附近有廁所嗎？",
          "segments": [
            { "text": "¿Hay", "meaning": "有/存在", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "baño", "meaning": "廁所", "tail": " " },
            { "text": "por", "meaning": "在...", "tail": " " },
            { "text": "aquí?", "meaning": "這裡", "tail": "" }
          ]
        },
        {
          "sentence": "¿Puedo usar su baño?",
          "translation": "我可以借用您的廁所嗎？",
          "segments": [
            { "text": "¿Puedo", "meaning": "我可以", "tail": " " },
            { "text": "usar", "meaning": "使用", "tail": " " },
            { "text": "su", "meaning": "您的", "tail": " " },
            { "text": "baño?", "meaning": "廁所", "tail": "" }
          ]
        }
      ],
      "usage_note": "出國旅遊的保命神句，發音 baño 的 ñ 唸作「妞」。",
      "image_file": "where_bathroom.png"
    },
    {
      "id": "greet-010",
      "term_zh": "多少錢？",
      "related_terms": [
        {
          "term_target": "¿Cuánto cuesta?",
          "pronunciation": ["/ˈkwan.to ˈkwes.ta/"],
          "specific_note": "",
          "segments": [
            { "text": "¿Cuánto", "meaning": "多少", "tail": " " },
            { "text": "cuesta?", "meaning": "花費/值", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cuánto cuesta esto?",
          "translation": "這個多少錢？",
          "segments": [
            { "text": "¿Cuánto", "meaning": "多少", "tail": " " },
            { "text": "cuesta", "meaning": "花費", "tail": " " },
            { "text": "esto?", "meaning": "這個", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuánto es en total?",
          "translation": "總共多少錢？",
          "segments": [
            { "text": "¿Cuánto", "meaning": "多少", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "total?", "meaning": "總數", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuánto cuesta el boleto?",
          "translation": "這張票多少錢？",
          "segments": [
            { "text": "¿Cuánto", "meaning": "多少", "tail": " " },
            { "text": "cuesta", "meaning": "花費", "tail": " " },
            { "text": "el", "meaning": "這個", "tail": " " },
            { "text": "boleto?", "meaning": "票", "tail": "" }
          ]
        }
      ],
      "usage_note": "市集購物、詢問票價必備。",
      "image_file": "how_much.png"
    },
    {
      "id": "greet-011",
      "term_zh": "我想要這個",
      "related_terms": [
        {
          "term_target": "Quiero esto",
          "pronunciation": ["/ˈkje.ɾo ˈes.to/"],
          "specific_note": "直接",
          "segments": [
            { "text": "Quiero", "meaning": "我想要", "tail": " " },
            { "text": "esto", "meaning": "這個", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Quiero esto, por favor.",
          "translation": "麻煩我要這個。",
          "segments": [
            { "text": "Quiero", "meaning": "我想要", "tail": " " },
            { "text": "esto", "meaning": "這個", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Me llevo esto.",
          "translation": "我買這個了 / 我帶走這個。(道地買單句)",
          "segments": [
            { "text": "Me", "meaning": "我", "tail": " " },
            { "text": "llevo", "meaning": "帶走", "tail": " " },
            { "text": "esto", "meaning": "這個", "tail": "." }
          ]
        },
        {
          "sentence": "Quiero probar esto.",
          "translation": "我想試試看這個。",
          "segments": [
            { "text": "Quiero", "meaning": "我想要", "tail": " " },
            { "text": "probar", "meaning": "嘗試/試穿/試吃", "tail": " " },
            { "text": "esto", "meaning": "這個", "tail": "." }
          ]
        }
      ],
      "usage_note": "不會講物品名字時，指著東西說 Quiero esto 最快。",
      "image_file": "i_want_this.png"
    },
    {
      "id": "greet-012",
      "term_zh": "請給我...",
      "related_terms": [
        {
          "term_target": "Me da... por favor",
          "pronunciation": ["/me da ... poɾ faˈβoɾ/"],
          "specific_note": "禮貌索取",
          "segments": [
            { "text": "Me", "meaning": "我(受詞)", "tail": " " },
            { "text": "da", "meaning": "您給", "tail": " ... " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Me da un vaso de agua, por favor.",
          "translation": "請給我一杯水。",
          "segments": [
            { "text": "Me", "meaning": "我", "tail": " " },
            { "text": "da", "meaning": "您給", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "vaso", "meaning": "杯子", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "agua", "meaning": "水", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "La cuenta, por favor.",
          "translation": "請給我帳單。(買單最道地說法)",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "cuenta", "meaning": "帳單", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Me da el menú, por favor.",
          "translation": "請給我菜單。",
          "segments": [
            { "text": "Me", "meaning": "我", "tail": " " },
            { "text": "da", "meaning": "您給", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "menú", "meaning": "菜單", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        }
      ],
      "usage_note": "這是在西語國家點餐、要東西時最自然、有禮貌的開頭。",
      "image_file": "please_give_me.png"
    },
    {
      "id": "greet-013",
      "term_zh": "這是什麼？",
      "related_terms": [
        {
          "term_target": "¿Qué es esto?",
          "pronunciation": ["/ke es ˈes.to/"],
          "specific_note": "",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "esto?", "meaning": "這個", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Qué es esto?",
          "translation": "這是什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "esto?", "meaning": "這個", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cómo se llama esto en español?",
          "translation": "這個用西班牙文怎麼說？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "se", "meaning": "它自己", "tail": " " },
            { "text": "llama", "meaning": "稱呼", "tail": " " },
            { "text": "esto", "meaning": "這個", "tail": " " },
            { "text": "en", "meaning": "用/在", "tail": " " },
            { "text": "español?", "meaning": "西班牙文", "tail": "" }
          ]
        },
        {
          "sentence": "¿Sabes qué es esto?",
          "translation": "你知道這是什麼嗎？",
          "segments": [
            { "text": "¿Sabes", "meaning": "你知道", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "esto?", "meaning": "這個", "tail": "" }
          ]
        }
      ],
      "usage_note": "不知道菜單上的菜或是看到新奇事物時指著問。",
      "image_file": "what_is_this.png"
    },
    {
      "id": "greet-014",
      "term_zh": "請幫我",
      "related_terms": [
        {
          "term_target": "¿Puede ayudarme?",
          "pronunciation": ["/ˈpwe.ðe a.ʝuˈðaɾ.me/"],
          "specific_note": "",
          "segments": [
            { "text": "¿Puede", "meaning": "您可以", "tail": " " },
            { "text": "ayudarme?", "meaning": "幫我", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Puede ayudarme, por favor?",
          "translation": "拜託可以幫幫我嗎？",
          "segments": [
            { "text": "¿Puede", "meaning": "您可以", "tail": " " },
            { "text": "ayudarme", "meaning": "幫我", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor?", "meaning": "恩惠", "tail": "" }
          ]
        },
        {
          "sentence": "Necesito ayuda.",
          "translation": "我需要幫忙。",
          "segments": [
            { "text": "Necesito", "meaning": "我需要", "tail": " " },
            { "text": "ayuda", "meaning": "幫忙(名詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Ayúdeme con mis maletas, por favor.",
          "translation": "請幫我拿一下我的行李。",
          "segments": [
            { "text": "Ayúdeme", "meaning": "請幫我", "tail": " " },
            { "text": "con", "meaning": "和/用", "tail": " " },
            { "text": "mis", "meaning": "我的(複數)", "tail": " " },
            { "text": "maletas", "meaning": "行李箱", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        }
      ],
      "usage_note": "迷路或提不動行李時，這句話能立刻招來熱情的當地人協助。",
      "image_file": "help_me.png"
    },
    {
      "id": "greet-015",
      "term_zh": "你可以再說一次嗎？",
      "related_terms": [
        {
          "term_target": "¿Puede repetirlo?",
          "pronunciation": ["/ˈpwe.ðe re.peˈtiɾ.lo/"],
          "specific_note": "",
          "segments": [
            { "text": "¿Puede", "meaning": "您可以", "tail": " " },
            { "text": "repetirlo?", "meaning": "重複它", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Puede repetirlo, por favor?",
          "translation": "可以請您重複一次嗎？",
          "segments": [
            { "text": "¿Puede", "meaning": "您可以", "tail": " " },
            { "text": "repetirlo", "meaning": "重複它", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor?", "meaning": "恩惠", "tail": "" }
          ]
        },
        {
          "sentence": "Perdón, ¿qué dijo?",
          "translation": "不好意思，您說什麼？",
          "segments": [
            { "text": "Perdón", "meaning": "抱歉", "tail": ", " },
            { "text": "¿qué", "meaning": "什麼", "tail": " " },
            { "text": "dijo?", "meaning": "您說(過去式)", "tail": "" }
          ]
        },
        {
          "sentence": "Otra vez, por favor.",
          "translation": "麻煩再來一次 / 再說一次。",
          "segments": [
            { "text": "Otra", "meaning": "另一個", "tail": " " },
            { "text": "vez", "meaning": "次數", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        }
      ],
      "usage_note": "聽力還跟不上時的救命語，當地人通常會很樂意重講一次。",
      "image_file": "say_again.png"
    },
    {
      "id": "greet-016",
      "term_zh": "你可以講慢一點嗎？",
      "related_terms": [
        {
          "term_target": "¿Puede hablar más despacio?",
          "pronunciation": ["/ˈpwe.ðe aˈβlaɾ mas desˈpa.sjo/"],
          "specific_note": "",
          "segments": [
            { "text": "¿Puede", "meaning": "您可以", "tail": " " },
            { "text": "hablar", "meaning": "說話", "tail": " " },
            { "text": "más", "meaning": "更", "tail": " " },
            { "text": "despacio?", "meaning": "慢地", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Puede hablar más despacio, por favor?",
          "translation": "請您說慢一點好嗎？",
          "segments": [
            { "text": "¿Puede", "meaning": "您可以", "tail": " " },
            { "text": "hablar", "meaning": "說話", "tail": " " },
            { "text": "más", "meaning": "更", "tail": " " },
            { "text": "despacio", "meaning": "慢地", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor?", "meaning": "恩惠", "tail": "" }
          ]
        },
        {
          "sentence": "Hable más despacio, no entiendo.",
          "translation": "講慢一點，我不懂。",
          "segments": [
            { "text": "Hable", "meaning": "請說", "tail": " " },
            { "text": "más", "meaning": "更", "tail": " " },
            { "text": "despacio", "meaning": "慢地", "tail": ", " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "entiendo", "meaning": "我明白", "tail": "." }
          ]
        },
        {
          "sentence": "Un poco más despacio, por favor.",
          "translation": "麻煩再稍微慢一點。",
          "segments": [
            { "text": "Un", "meaning": "一個", "tail": " " },
            { "text": "poco", "meaning": "少許/一點", "tail": " " },
            { "text": "más", "meaning": "更", "tail": " " },
            { "text": "despacio", "meaning": "慢地", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        }
      ],
      "usage_note": "西語人士講話連音多又快，這句學起來絕對不吃虧。",
      "image_file": "speak_slowly.png"
    },
    {
      "id": "greet-017",
      "term_zh": "原來如此",
      "related_terms": [
        {
          "term_target": "Ya veo",
          "pronunciation": ["/ʝa ˈβe.o/"],
          "specific_note": "理解",
          "segments": [
            { "text": "Ya", "meaning": "已經/現在", "tail": " " },
            { "text": "veo", "meaning": "我看見/我明白", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ah, ya veo.",
          "translation": "啊，原來如此。",
          "segments": [
            { "text": "Ah", "meaning": "啊", "tail": ", " },
            { "text": "ya", "meaning": "現在", "tail": " " },
            { "text": "veo", "meaning": "我明白", "tail": "." }
          ]
        },
        {
          "sentence": "Ya veo lo que quieres decir.",
          "translation": "我懂你的意思了。",
          "segments": [
            { "text": "Ya", "meaning": "現在", "tail": " " },
            { "text": "veo", "meaning": "我明白", "tail": " " },
            { "text": "lo", "meaning": "...的事情", "tail": " " },
            { "text": "que", "meaning": "那", "tail": " " },
            { "text": "quieres", "meaning": "你想要", "tail": " " },
            { "text": "decir", "meaning": "說", "tail": "." }
          ]
        },
        {
          "sentence": "Entiendo perfectamente.",
          "translation": "我完全明白了。",
          "segments": [
            { "text": "Entiendo", "meaning": "我懂", "tail": " " },
            { "text": "perfectamente", "meaning": "完美地/完全地", "tail": "." }
          ]
        }
      ],
      "usage_note": "聽完別人解釋，表示恍然大悟時使用。",
      "image_file": "i_see.png"
    },
    {
      "id": "greet-018",
      "term_zh": "早安",
      "related_terms": [
        {
          "term_target": "Buenos días",
          "pronunciation": ["/ˈbwe.nos ˈdi.as/"],
          "specific_note": "",
          "segments": [
            { "text": "Buenos", "meaning": "好的(複數)", "tail": " " },
            { "text": "días", "meaning": "天(複數)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¡Buenos días!",
          "translation": "早安！",
          "segments": [
            { "text": "¡Buenos", "meaning": "好的", "tail": " " },
            { "text": "días!", "meaning": "天", "tail": "" }
          ]
        },
        {
          "sentence": "Buenos días a todos.",
          "translation": "大家早安。",
          "segments": [
            { "text": "Buenos", "meaning": "好的", "tail": " " },
            { "text": "días", "meaning": "天", "tail": " " },
            { "text": "a", "meaning": "對/向", "tail": " " },
            { "text": "todos", "meaning": "所有人", "tail": "." }
          ]
        },
        {
          "sentence": "¡Buen día! ¿Cómo amaneciste?",
          "translation": "早！昨晚睡得好嗎？(中南美洲常用)",
          "segments": [
            { "text": "¡Buen", "meaning": "好的", "tail": " " },
            { "text": "día!", "meaning": "天", "tail": " " },
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "amaneciste?", "meaning": "你醒來/度過早晨", "tail": "" }
          ]
        }
      ],
      "usage_note": "中午12點前使用的問候語。",
      "image_file": "good_morning.png"
    },
    {
      "id": "greet-019",
      "term_zh": "晚上好 (晚安)",
      "related_terms": [
        {
          "term_target": "Buenas noches",
          "pronunciation": ["/ˈbwe.nas ˈno.tʃes/"],
          "specific_note": "晚上見面/道別",
          "segments": [
            { "text": "Buenas", "meaning": "好的(陰性複數)", "tail": " " },
            { "text": "noches", "meaning": "晚上", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Buenas noches, señor.",
          "translation": "先生晚安。",
          "segments": [
            { "text": "Buenas", "meaning": "好的", "tail": " " },
            { "text": "noches", "meaning": "晚上", "tail": ", " },
            { "text": "señor", "meaning": "先生", "tail": "." }
          ]
        },
        {
          "sentence": "¡Buenas noches! Una mesa para dos, por favor.",
          "translation": "晚安！麻煩兩位用餐。",
          "segments": [
            { "text": "¡Buenas", "meaning": "好的", "tail": " " },
            { "text": "noches!", "meaning": "晚上", "tail": " " },
            { "text": "Una", "meaning": "一個", "tail": " " },
            { "text": "mesa", "meaning": "桌子", "tail": " " },
            { "text": "para", "meaning": "給", "tail": " " },
            { "text": "dos", "meaning": "二", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Que descanses, buenas noches.",
          "translation": "好好休息，晚安。(睡前道別)",
          "segments": [
            { "text": "Que", "meaning": "願(引導祈使句)", "tail": " " },
            { "text": "descanses", "meaning": "你休息", "tail": ", " },
            { "text": "buenas", "meaning": "好的", "tail": " " },
            { "text": "noches", "meaning": "晚上", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟英文不一樣，西文的 Buenas noches 在晚上見面打招呼、或是睡前道別時都可以用！",
      "image_file": "good_evening.png"
    },
    {
      "id": "greet-020",
      "term_zh": "再見",
      "related_terms": [
        {
          "term_target": "Hasta luego",
          "pronunciation": ["/ˈas.ta ˈlwe.ɣo/"],
          "specific_note": "道別",
          "segments": [
            { "text": "Hasta", "meaning": "直到", "tail": " " },
            { "text": "luego", "meaning": "待會", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hasta luego, nos vemos.",
          "translation": "再見，下次見。",
          "segments": [
            { "text": "Hasta", "meaning": "直到", "tail": " " },
            { "text": "luego", "meaning": "待會", "tail": ", " },
            { "text": "nos", "meaning": "我們(互相)", "tail": " " },
            { "text": "vemos", "meaning": "看見", "tail": "." }
          ]
        },
        {
          "sentence": "Adiós, cuídate.",
          "translation": "掰掰，保重。",
          "segments": [
            { "text": "Adiós", "meaning": "再見(較正式/永別)", "tail": ", " },
            { "text": "cuídate", "meaning": "照顧你自己", "tail": "." }
          ]
        },
        {
          "sentence": "Chau, ¡buen viaje!",
          "translation": "掰掰，旅途愉快！",
          "segments": [
            { "text": "Chau", "meaning": "掰掰(超常用口語)", "tail": ", " },
            { "text": "¡buen", "meaning": "好的", "tail": " " },
            { "text": "viaje!", "meaning": "旅行", "tail": "" }
          ]
        }
      ],
      "usage_note": "Adiós 聽起來像永別，日常生活中最常說的是 Hasta luego (待會見) 或 Chau (掰掰)。",
      "image_file": "goodbye.png"
    },
    {
      "id": "greet-021",
      "term_zh": "你好嗎",
      "related_terms": [
        {
          "term_target": "¿Cómo estás?",
          "pronunciation": ["/ˈko.mo esˈtas/"],
          "specific_note": "問候",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "estás?", "meaning": "你處於(狀態)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hola, ¿cómo estás?",
          "translation": "嗨，你好嗎？",
          "segments": [
            { "text": "Hola", "meaning": "你好", "tail": ", " },
            { "text": "¿cómo", "meaning": "如何", "tail": " " },
            { "text": "estás?", "meaning": "你在", "tail": "" }
          ]
        },
        {
          "sentence": "¿Qué tal tu día?",
          "translation": "你今天過得如何？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "tal", "meaning": "這樣", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "día?", "meaning": "天/日子", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cómo te sientes hoy?",
          "translation": "你今天感覺如何？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "te", "meaning": "你自己", "tail": " " },
            { "text": "sientes", "meaning": "感覺", "tail": " " },
            { "text": "hoy?", "meaning": "今天", "tail": "" }
          ]
        }
      ],
      "usage_note": "朋友見面必問，另一個超常見的替換詞是 ¿Qué tal?。",
      "image_file": "how_are_you.png"
    },
    {
      "id": "greet-022",
      "term_zh": "真的嗎",
      "related_terms": [
        {
          "term_target": "¿De verdad?",
          "pronunciation": ["/de βeɾˈðað/"],
          "specific_note": "驚訝",
          "segments": [
            { "text": "¿De", "meaning": "從/關於", "tail": " " },
            { "text": "verdad?", "meaning": "真實", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿De verdad? ¿Estás seguro?",
          "translation": "真的嗎？你確定？",
          "segments": [
            { "text": "¿De", "meaning": "關於", "tail": " " },
            { "text": "verdad?", "meaning": "真實", "tail": " " },
            { "text": "¿Estás", "meaning": "你是", "tail": " " },
            { "text": "seguro?", "meaning": "確定的", "tail": "" }
          ]
        },
        {
          "sentence": "¡Conseguí el trabajo! - ¿En serio?",
          "translation": "我拿到工作了！－真的假的？",
          "segments": [
            { "text": "¡Conseguí", "meaning": "我得到", "tail": " " },
            { "text": "el", "meaning": "這份", "tail": " " },
            { "text": "trabajo!", "meaning": "工作", "tail": " - " },
            { "text": "¿En", "meaning": "在", "tail": " " },
            { "text": "serio?", "meaning": "嚴肅/認真", "tail": "" }
          ]
        },
        {
          "sentence": "Ah, ¿de verdad? Qué interesante.",
          "translation": "噢真的嗎？真有趣。",
          "segments": [
            { "text": "Ah", "meaning": "噢", "tail": ", " },
            { "text": "¿de", "meaning": "關於", "tail": " " },
            { "text": "verdad?", "meaning": "真實", "tail": " " },
            { "text": "Qué", "meaning": "多麼", "tail": " " },
            { "text": "interesante", "meaning": "有趣的", "tail": "." }
          ]
        }
      ],
      "usage_note": "聊天附和對方時的神器。¿En serio? (認真的嗎) 也非常口語常用。",
      "image_file": "really_q.png"
    },
    {
      "id": "greet-023",
      "term_zh": "太棒了",
      "related_terms": [
        {
          "term_target": "¡Genial!",
          "pronunciation": ["/xeˈnjal/"],
          "specific_note": "讚嘆",
          "segments": [
            { "text": "¡Genial!", "meaning": "極好的/天才的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¡Eso es genial!",
          "translation": "那真是太棒了！",
          "segments": [
            { "text": "¡Eso", "meaning": "那", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "genial!", "meaning": "極好的", "tail": "" }
          ]
        },
        {
          "sentence": "Te ves genial.",
          "translation": "你看起來棒極了。",
          "segments": [
            { "text": "Te", "meaning": "你自己", "tail": " " },
            { "text": "ves", "meaning": "看起來", "tail": " " },
            { "text": "genial", "meaning": "極好的", "tail": "." }
          ]
        },
        {
          "sentence": "La película estuvo excelente.",
          "translation": "這部電影太讚了。",
          "segments": [
            { "text": "La", "meaning": "這部", "tail": " " },
            { "text": "película", "meaning": "電影", "tail": " " },
            { "text": "estuvo", "meaning": "處於(過去式)", "tail": " " },
            { "text": "excelente", "meaning": "優秀的", "tail": "." }
          ]
        }
      ],
      "usage_note": "Genial 是西語世界最通用的稱讚詞，發音像英文的 henial (h發喉音)。",
      "image_file": "awesome.png"
    },
    {
      "id": "greet-024",
      "term_zh": "很高興認識你",
      "related_terms": [
        {
          "term_target": "Mucho gusto",
          "pronunciation": ["/ˈmu.tʃo ˈɣus.to/"],
          "specific_note": "初次見面",
          "segments": [
            { "text": "Mucho", "meaning": "很多的", "tail": " " },
            { "text": "gusto", "meaning": "喜悅/品味", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mucho gusto en conocerte.",
          "translation": "很高興認識你。",
          "segments": [
            { "text": "Mucho", "meaning": "很多", "tail": " " },
            { "text": "gusto", "meaning": "喜悅", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "conocerte", "meaning": "認識你", "tail": "." }
          ]
        },
        {
          "sentence": "El gusto es mío.",
          "translation": "這也是我的榮幸 (回應對方時用)。",
          "segments": [
            { "text": "El", "meaning": "這個", "tail": " " },
            { "text": "gusto", "meaning": "喜悅", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "mío", "meaning": "我的", "tail": "." }
          ]
        },
        {
          "sentence": "Hola, soy Juan. Mucho gusto.",
          "translation": "你好我是胡安，很高興認識你。",
          "segments": [
            { "text": "Hola", "meaning": "你好", "tail": ", " },
            { "text": "soy", "meaning": "我是", "tail": " " },
            { "text": "Juan", "meaning": "胡安", "tail": ". " },
            { "text": "Mucho", "meaning": "很多", "tail": " " },
            { "text": "gusto", "meaning": "喜悅", "tail": "." }
          ]
        }
      ],
      "usage_note": "初次見面握手時最常講的一句話，直譯是「很多喜悅」。",
      "image_file": "nice_to_meet_you.png"
    },
    {
      "id": "greet-025",
      "term_zh": "真可惜",
      "related_terms": [
        {
          "term_target": "Qué lástima",
          "pronunciation": ["/ke ˈlas.ti.ma/"],
          "specific_note": "遺憾",
          "segments": [
            { "text": "Qué", "meaning": "多麼", "tail": " " },
            { "text": "lástima", "meaning": "遺憾/可惜", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Qué lástima, tal vez la próxima vez.",
          "translation": "真可惜，也許下次吧。",
          "segments": [
            { "text": "Qué", "meaning": "多麼", "tail": " " },
            { "text": "lástima", "meaning": "可惜", "tail": ", " },
            { "text": "tal", "meaning": "如此", "tail": " " },
            { "text": "vez", "meaning": "次數(tal vez=也許)", "tail": " " },
            { "text": "la", "meaning": "這(陰性)", "tail": " " },
            { "text": "próxima", "meaning": "下一個", "tail": " " },
            { "text": "vez", "meaning": "次", "tail": "." }
          ]
        },
        {
          "sentence": "¿Llovió todo el día? Qué pena.",
          "translation": "下了一整天雨？真可惜。",
          "segments": [
            { "text": "¿Llovió", "meaning": "下雨了", "tail": " " },
            { "text": "todo", "meaning": "整個", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "día?", "meaning": "天", "tail": " " },
            { "text": "Qué", "meaning": "多麼", "tail": " " },
            { "text": "pena", "meaning": "遺憾(pena與lástima同義)", "tail": "." }
          ]
        },
        {
          "sentence": "¿No puedes venir? Qué lástima.",
          "translation": "你不能來？那太可惜了。",
          "segments": [
            { "text": "¿No", "meaning": "不", "tail": " " },
            { "text": "puedes", "meaning": "你能", "tail": " " },
            { "text": "venir?", "meaning": "來", "tail": " " },
            { "text": "Qué", "meaning": "多麼", "tail": " " },
            { "text": "lástima", "meaning": "可惜", "tail": "." }
          ]
        }
      ],
      "usage_note": "對小壞事表示同情。另一個非常口語的詞是 Qué pena。",
      "image_file": "too_bad.png"
    },
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
          "term_target": "lo / la",
          "pronunciation": ["/lo/, /la/"],
          "specific_note": "受詞的它",
          "segments": [
            { "text": "lo", "meaning": "它(陽性)", "tail": " / " },
            { "text": "la", "meaning": "它(陰性)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lo tengo.",
          "translation": "我有這個東西了 / 我懂了。",
          "segments": [
            { "text": "Lo", "meaning": "它", "tail": " " },
            { "text": "tengo", "meaning": "我有", "tail": "." }
          ]
        },
        {
          "sentence": "No lo sé.",
          "translation": "我不知道(這件事)。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "lo", "meaning": "它(這件事)", "tail": " " },
            { "text": "sé", "meaning": "我知道", "tail": "." }
          ]
        },
        {
          "sentence": "¿Lo quieres?",
          "translation": "你想要它嗎？",
          "segments": [
            { "text": "¿Lo", "meaning": "它", "tail": " " },
            { "text": "quieres?", "meaning": "你想要", "tail": "" }
          ]
        }
      ],
      "usage_note": "西班牙文當主詞的「它」通常會直接省略不說(如下雨直接說Llueve)。所以這裡教你最實用的「當受詞的它(lo)」，而且它要放在動詞前面！",
      "image_file": "that.png"
    },
    {
      "id": "pro-02",
      "term_zh": "我",
      "related_terms": [
        {
          "term_target": "yo",
          "pronunciation": ["/ʝo/"],
          "specific_note": "",
          "segments": [{ "text": "yo", "meaning": "我", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Yo soy de Taiwán.",
          "translation": "我來自台灣。",
          "segments": [
            { "text": "Yo", "meaning": "我", "tail": " " },
            { "text": "soy", "meaning": "是", "tail": " " },
            { "text": "de", "meaning": "來自", "tail": " " },
            { "text": "Taiwán", "meaning": "台灣", "tail": "." }
          ]
        },
        {
          "sentence": "Yo no sé.",
          "translation": "我不知道 (強調「我」不知道)。",
          "segments": [
            { "text": "Yo", "meaning": "我", "tail": " " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "sé", "meaning": "我知道", "tail": "." }
          ]
        },
        {
          "sentence": "Yo también.",
          "translation": "我也是。",
          "segments": [
            { "text": "Yo", "meaning": "我", "tail": " " },
            { "text": "también", "meaning": "也/同樣", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文中動詞變化就已經暗示了「我」，所以平常 Yo 常省略，講出來是為了強調「是我」。",
      "image_file": "i.png"
    },
    {
      "id": "pro-03",
      "term_zh": "你",
      "related_terms": [
        {
          "term_target": "tú",
          "pronunciation": ["/tu/"],
          "specific_note": "",
          "segments": [{ "text": "tú", "meaning": "你", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Y tú?",
          "translation": "那你呢？",
          "segments": [
            { "text": "¿Y", "meaning": "和/那麼", "tail": " " },
            { "text": "tú?", "meaning": "你", "tail": "" }
          ]
        },
        {
          "sentence": "Tú eres mi amigo.",
          "translation": "你是我的朋友。",
          "segments": [
            { "text": "Tú", "meaning": "你", "tail": " " },
            { "text": "eres", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "amigo", "meaning": "朋友", "tail": "." }
          ]
        },
        {
          "sentence": "Tú puedes.",
          "translation": "你可以的 (常作鼓勵用語)。",
          "segments": [
            { "text": "Tú", "meaning": "你", "tail": " " },
            { "text": "puedes", "meaning": "你可以", "tail": "." }
          ]
        }
      ],
      "usage_note": "上面一定要有重音符號（撇號），沒有撇號的 tu 會變成「你的」。",
      "image_file": "you.png"
    },
    {
      "id": "pro-04",
      "term_zh": "他",
      "related_terms": [
        {
          "term_target": "él",
          "pronunciation": ["/el/"],
          "specific_note": "",
          "segments": [{ "text": "él", "meaning": "他", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Él es mi hermano.",
          "translation": "他是我哥哥/弟弟。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "hermano", "meaning": "兄弟", "tail": "." }
          ]
        },
        {
          "sentence": "¿Quién es él?",
          "translation": "他是誰？",
          "segments": [
            { "text": "¿Quién", "meaning": "誰", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "él?", "meaning": "他", "tail": "" }
          ]
        },
        {
          "sentence": "Él no está aquí.",
          "translation": "他不在這裡。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        }
      ],
      "usage_note": "上面一樣要有重音符號，沒有撇號的 el 會變成類似英文的 the。",
      "image_file": "he.png"
    },
    {
      "id": "pro-05",
      "term_zh": "他的",
      "related_terms": [
        {
          "term_target": "su / sus",
          "pronunciation": ["/su/, /sus/"],
          "specific_note": "單數/複數",
          "segments": [
            { "text": "su", "meaning": "他的(接單數)", "tail": " / " },
            { "text": "sus", "meaning": "他的(接複數)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Este es su coche.",
          "translation": "這是他的車。",
          "segments": [
            { "text": "Este", "meaning": "這", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "su", "meaning": "他的", "tail": " " },
            { "text": "coche", "meaning": "車", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuál es su nombre?",
          "translation": "他的名字是什麼？",
          "segments": [
            { "text": "¿Cuál", "meaning": "哪一個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "su", "meaning": "他的", "tail": " " },
            { "text": "nombre?", "meaning": "名字", "tail": "" }
          ]
        },
        {
          "sentence": "Sus zapatos son nuevos.",
          "translation": "他的鞋子們是新的 (鞋子是複數，所以要用 sus)。",
          "segments": [
            { "text": "Sus", "meaning": "他的(複數)", "tail": " " },
            { "text": "zapatos", "meaning": "鞋子", "tail": " " },
            { "text": "son", "meaning": "是", "tail": " " },
            { "text": "nuevos", "meaning": "新的", "tail": "." }
          ]
        }
      ],
      "usage_note": "如果後面接的東西是複數，su 就要加上 s 變成 sus。",
      "image_file": "his.png"
    },
    {
      "id": "pro-06",
      "term_zh": "我們",
      "related_terms": [
        {
          "term_target": "nosotros",
          "pronunciation": ["/noˈso.tɾos/"],
          "specific_note": "陽性/混合",
          "segments": [{ "text": "nosotros", "meaning": "我們", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Nosotros somos amigos.",
          "translation": "我們是朋友。",
          "segments": [
            { "text": "Nosotros", "meaning": "我們", "tail": " " },
            { "text": "somos", "meaning": "是", "tail": " " },
            { "text": "amigos", "meaning": "朋友", "tail": "." }
          ]
        },
        {
          "sentence": "Vamos nosotros.",
          "translation": "我們去吧。",
          "segments": [
            { "text": "Vamos", "meaning": "我們去", "tail": " " },
            { "text": "nosotros", "meaning": "我們", "tail": "." }
          ]
        },
        {
          "sentence": "Nosotros también.",
          "translation": "我們也是。",
          "segments": [
            { "text": "Nosotros", "meaning": "我們", "tail": " " },
            { "text": "también", "meaning": "也/同樣", "tail": "." }
          ]
        }
      ],
      "usage_note": "如果「我們」全部都是女生，要用 nosotras。只要有一個男生，就是 nosotros。",
      "image_file": "we.png"
    },
    {
      "id": "pro-07",
      "term_zh": "她",
      "related_terms": [
        {
          "term_target": "ella",
          "pronunciation": ["/ˈe.ʝa/"],
          "specific_note": "",
          "segments": [{ "text": "ella", "meaning": "她", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ella es muy amable.",
          "translation": "她很親切。",
          "segments": [
            { "text": "Ella", "meaning": "她", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "amable", "meaning": "親切的", "tail": "." }
          ]
        },
        {
          "sentence": "Ella trabaja aquí.",
          "translation": "她在這裡工作。",
          "segments": [
            { "text": "Ella", "meaning": "她", "tail": " " },
            { "text": "trabaja", "meaning": "工作", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde está ella?",
          "translation": "她在哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "ella?", "meaning": "她", "tail": "" }
          ]
        }
      ],
      "usage_note": "雙 L (ll) 的發音接近英文的 y (音同「耶」的起頭)。",
      "image_file": "she.png"
    },
    {
      "id": "pro-08",
      "term_zh": "他們",
      "related_terms": [
        {
          "term_target": "ellos",
          "pronunciation": ["/ˈe.ʝos/"],
          "specific_note": "陽性/混合",
          "segments": [{ "text": "ellos", "meaning": "他們", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ellos son mis amigos.",
          "translation": "他們是我的朋友。",
          "segments": [
            { "text": "Ellos", "meaning": "他們", "tail": " " },
            { "text": "son", "meaning": "是", "tail": " " },
            { "text": "mis", "meaning": "我的(複數)", "tail": " " },
            { "text": "amigos", "meaning": "朋友", "tail": "." }
          ]
        },
        {
          "sentence": "Ellos no saben.",
          "translation": "他們不知道。",
          "segments": [
            { "text": "Ellos", "meaning": "他們", "tail": " " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "saben", "meaning": "知道", "tail": "." }
          ]
        },
        {
          "sentence": "¿Vienen ellos?",
          "translation": "他們會來嗎？",
          "segments": [
            { "text": "¿Vienen", "meaning": "他們來", "tail": " " },
            { "text": "ellos?", "meaning": "他們", "tail": "" }
          ]
        }
      ],
      "usage_note": "如果「她們」全部都是女生，要改用 ellas。",
      "image_file": "they.png"
    },
    {
      "id": "pro-09",
      "term_zh": "這個",
      "related_terms": [
        {
          "term_target": "esto",
          "pronunciation": ["/ˈes.to/"],
          "specific_note": "中性事物",
          "segments": [{ "text": "esto", "meaning": "這個", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Qué es esto?",
          "translation": "這是什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "esto?", "meaning": "這個", "tail": "" }
          ]
        },
        {
          "sentence": "Esto es para ti.",
          "translation": "這是給你的。",
          "segments": [
            { "text": "Esto", "meaning": "這個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "para", "meaning": "給", "tail": " " },
            { "text": "ti", "meaning": "你", "tail": "." }
          ]
        },
        {
          "sentence": "Me gusta esto.",
          "translation": "我喜歡這個。",
          "segments": [
            { "text": "Me", "meaning": "對我來說", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "esto", "meaning": "這個", "tail": "." }
          ]
        }
      ],
      "usage_note": "當你不知道某個東西的名字(無從分辨陰陽性)時，指著它說 esto 就對了。",
      "image_file": "this.png"
    },
    {
      "id": "pro-10",
      "term_zh": "那個",
      "related_terms": [
        {
          "term_target": "eso",
          "pronunciation": ["/ˈe.so/"],
          "specific_note": "中性事物",
          "segments": [{ "text": "eso", "meaning": "那個", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Eso es verdad.",
          "translation": "那是真的 / 沒錯。",
          "segments": [
            { "text": "Eso", "meaning": "那個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "verdad", "meaning": "真實", "tail": "." }
          ]
        },
        {
          "sentence": "No quiero eso.",
          "translation": "我不想要那個。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "quiero", "meaning": "我想要", "tail": " " },
            { "text": "eso", "meaning": "那個", "tail": "." }
          ]
        },
        {
          "sentence": "Por eso.",
          "translation": "因此 / 所以啦 (直譯：因為那個)。",
          "segments": [
            { "text": "Por", "meaning": "因為", "tail": " " },
            { "text": "eso", "meaning": "那個", "tail": "." }
          ]
        }
      ],
      "usage_note": "指代遠處不知道名字的事物，或是剛剛對方講的一件事。",
      "image_file": "that.png"
    },
    {
      "id": "pro-11",
      "term_zh": "她的",
      "related_terms": [
        {
          "term_target": "su / sus",
          "pronunciation": ["/su/, /sus/"],
          "specific_note": "與他的同型",
          "segments": [
            { "text": "su", "meaning": "她的", "tail": " / " },
            { "text": "sus", "meaning": "她的(複數)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Su casa es grande.",
          "translation": "她的房子很大。",
          "segments": [
            { "text": "Su", "meaning": "她的", "tail": " " },
            { "text": "casa", "meaning": "房子", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "grande", "meaning": "大的", "tail": "." }
          ]
        },
        {
          "sentence": "Me gusta su estilo.",
          "translation": "我喜歡她的風格。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "喜歡", "tail": " " },
            { "text": "su", "meaning": "她的", "tail": " " },
            { "text": "estilo", "meaning": "風格", "tail": "." }
          ]
        },
        {
          "sentence": "Sus ojos son bonitos.",
          "translation": "她的眼睛很漂亮 (眼睛是複數用 sus)。",
          "segments": [
            { "text": "Sus", "meaning": "她的(複數)", "tail": " " },
            { "text": "ojos", "meaning": "眼睛", "tail": " " },
            { "text": "son", "meaning": "是", "tail": " " },
            { "text": "bonitos", "meaning": "漂亮的", "tail": "." }
          ]
        }
      ],
      "usage_note": "沒看錯，西文裡「他的」、「她的」、「他們的」全部都是同一個字 su / sus，通常要靠上下文判斷。",
      "image_file": "her.png"
    },
    {
      "id": "pro-12",
      "term_zh": "你的",
      "related_terms": [
        {
          "term_target": "tu / tus",
          "pronunciation": ["/tu/, /tus/"],
          "specific_note": "",
          "segments": [
            { "text": "tu", "meaning": "你的", "tail": " / " },
            { "text": "tus", "meaning": "你的(複數)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Es este tu teléfono?",
          "translation": "這是你的手機嗎？",
          "segments": [
            { "text": "¿Es", "meaning": "是", "tail": " " },
            { "text": "este", "meaning": "這", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "teléfono?", "meaning": "手機", "tail": "" }
          ]
        },
        {
          "sentence": "Tus llaves están aquí.",
          "translation": "你的鑰匙在這裡 (鑰匙是複數用 tus)。",
          "segments": [
            { "text": "Tus", "meaning": "你的(複數)", "tail": " " },
            { "text": "llaves", "meaning": "鑰匙", "tail": " " },
            { "text": "están", "meaning": "在", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Me encanta tu camisa.",
          "translation": "我超愛你的襯衫。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "encanta", "meaning": "極喜歡", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "camisa", "meaning": "襯衫", "tail": "." }
          ]
        }
      ],
      "usage_note": "注意這裡沒有重音符號喔！(有重音符號的 tú 是「你」)。",
      "image_file": "your.png"
    },
    {
      "id": "pro-13",
      "term_zh": "他們的",
      "related_terms": [
        {
          "term_target": "su / sus",
          "pronunciation": ["/su/, /sus/"],
          "specific_note": "與他的同型",
          "segments": [
            { "text": "su", "meaning": "他們的", "tail": " / " },
            { "text": "sus", "meaning": "他們的(複數)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Su perro es lindo.",
          "translation": "他們的狗很可愛。",
          "segments": [
            { "text": "Su", "meaning": "他們的", "tail": " " },
            { "text": "perro", "meaning": "狗", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "lindo", "meaning": "可愛的", "tail": "." }
          ]
        },
        {
          "sentence": "Es su problema.",
          "translation": "那是他們的問題。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "su", "meaning": "他們的", "tail": " " },
            { "text": "problema", "meaning": "問題", "tail": "." }
          ]
        },
        {
          "sentence": "Sus maletas están listas.",
          "translation": "他們的行李準備好了。",
          "segments": [
            { "text": "Sus", "meaning": "他們的(複數)", "tail": " " },
            { "text": "maletas", "meaning": "行李箱", "tail": " " },
            { "text": "están", "meaning": "在/處於", "tail": " " },
            { "text": "listas", "meaning": "準備好的", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟前面的「他的」、「她的」一樣，完全共用同一個字。",
      "image_file": "their.png"
    },
    {
      "id": "pro-14",
      "term_zh": "我們的",
      "related_terms": [
        {
          "term_target": "nuestro / nuestra",
          "pronunciation": ["/ˈnwes.tɾo/, /ˈnwes.tɾa/"],
          "specific_note": "分陰陽性",
          "segments": [
            { "text": "nuestro", "meaning": "我們的(陽性)", "tail": " / " },
            { "text": "nuestra", "meaning": "我們的(陰性)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Este es nuestro coche.",
          "translation": "這是我們的車。",
          "segments": [
            { "text": "Este", "meaning": "這", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "nuestro", "meaning": "我們的", "tail": " " },
            { "text": "coche", "meaning": "車(陽性)", "tail": "." }
          ]
        },
        {
          "sentence": "Nuestra familia es grande.",
          "translation": "我們的家族很大。",
          "segments": [
            { "text": "Nuestra", "meaning": "我們的", "tail": " " },
            { "text": "familia", "meaning": "家族(陰性)", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "grande", "meaning": "大的", "tail": "." }
          ]
        },
        {
          "sentence": "Es nuestra oportunidad.",
          "translation": "這是我們的機會。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "nuestra", "meaning": "我們的", "tail": " " },
            { "text": "oportunidad", "meaning": "機會(陰性)", "tail": "." }
          ]
        }
      ],
      "usage_note": "要看後面接的東西是男是女。例如「家族(familia)」是陰性，所以要配 nuestra。",
      "image_file": "our.png"
    },
    {
      "id": "pro-15",
      "term_zh": "這些",
      "related_terms": [
        {
          "term_target": "estos / estas",
          "pronunciation": ["/ˈes.tos/, /ˈes.tas/"],
          "specific_note": "複數",
          "segments": [
            { "text": "estos", "meaning": "這些(陽性)", "tail": " / " },
            { "text": "estas", "meaning": "這些(陰性)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Estos son mis zapatos.",
          "translation": "這些是我的鞋子。",
          "segments": [
            { "text": "Estos", "meaning": "這些", "tail": " " },
            { "text": "son", "meaning": "是", "tail": " " },
            { "text": "mis", "meaning": "我的", "tail": " " },
            { "text": "zapatos", "meaning": "鞋子(陽性)", "tail": "." }
          ]
        },
        {
          "sentence": "Me llevo estos.",
          "translation": "我買(帶走)這些了。",
          "segments": [
            { "text": "Me", "meaning": "我", "tail": " " },
            { "text": "llevo", "meaning": "帶走", "tail": " " },
            { "text": "estos", "meaning": "這些", "tail": "." }
          ]
        },
        {
          "sentence": "Estas manzanas son dulces.",
          "translation": "這些蘋果很甜。",
          "segments": [
            { "text": "Estas", "meaning": "這些", "tail": " " },
            { "text": "manzanas", "meaning": "蘋果(陰性)", "tail": " " },
            { "text": "son", "meaning": "是", "tail": " " },
            { "text": "dulces", "meaning": "甜的", "tail": "." }
          ]
        }
      ],
      "usage_note": "近處的複數。買東西結帳時直接指著一堆東西說 Estos 很好用。",
      "image_file": "these.png"
    },
    {
      "id": "pro-16",
      "term_zh": "那些",
      "related_terms": [
        {
          "term_target": "esos / esas",
          "pronunciation": ["/ˈe.sos/, /ˈe.sas/"],
          "specific_note": "複數",
          "segments": [
            { "text": "esos", "meaning": "那些(陽性)", "tail": " / " },
            { "text": "esas", "meaning": "那些(陰性)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Quiero esos.",
          "translation": "我想要那些。",
          "segments": [
            { "text": "Quiero", "meaning": "我想要", "tail": " " },
            { "text": "esos", "meaning": "那些", "tail": "." }
          ]
        },
        {
          "sentence": "Esos días fueron geniales.",
          "translation": "那些日子真是太棒了。",
          "segments": [
            { "text": "Esos", "meaning": "那些", "tail": " " },
            { "text": "días", "meaning": "日子(陽性)", "tail": " " },
            { "text": "fueron", "meaning": "是(過去式)", "tail": " " },
            { "text": "geniales", "meaning": "極好的", "tail": "." }
          ]
        },
        {
          "sentence": "Esas chicas son mis amigas.",
          "translation": "那些女孩是我的朋友。",
          "segments": [
            { "text": "Esas", "meaning": "那些", "tail": " " },
            { "text": "chicas", "meaning": "女孩(陰性)", "tail": " " },
            { "text": "son", "meaning": "是", "tail": " " },
            { "text": "mis", "meaning": "我的", "tail": " " },
            { "text": "amigas", "meaning": "女性朋友", "tail": "." }
          ]
        }
      ],
      "usage_note": "遠處的複數。一樣有分男(陽性)女(陰性)喔！",
      "image_file": "those.png"
    }
  ]
},
{
  "id": "verbs",
  "name": "常用動詞",
  "items": [
    {
      "id": "v-01",
      "term_zh": "是",
      "related_terms": [
        {
          "term_target": "ser",
          "pronunciation": ["/seɾ/"],
          "specific_note": "本質/身份",
          "segments": [{ "text": "ser", "meaning": "是", "tail": "" }]
        },
        {
          "term_target": "estar",
          "pronunciation": ["/esˈtaɾ/"],
          "specific_note": "狀態/位置",
          "segments": [{ "text": "estar", "meaning": "處於/在", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Yo soy feliz.",
          "translation": "我(天性)很快樂 / 我是個快樂的人。",
          "segments": [
            { "text": "Yo", "meaning": "我", "tail": " " },
            { "text": "soy", "meaning": "我是 (ser)", "tail": " " },
            { "text": "feliz", "meaning": "快樂的", "tail": "." }
          ]
        },
        {
          "sentence": "Él es profesor.",
          "translation": "他是一位老師。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "es", "meaning": "他是 (ser)", "tail": " " },
            { "text": "profesor", "meaning": "老師", "tail": "." }
          ]
        },
        {
          "sentence": "Ellos están aquí.",
          "translation": "他們在這裡。",
          "segments": [
            { "text": "Ellos", "meaning": "他們", "tail": " " },
            { "text": "están", "meaning": "他們在 (estar)", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文有兩個「是」。Ser 用於不變的本質(職業、國籍)，Estar 用於會變的狀態(位置、情緒)。",
      "image_file": "be.png"
    },
    {
      "id": "v-02",
      "term_zh": "有（擁有）",
      "related_terms": [
        {
          "term_target": "tener",
          "pronunciation": ["/teˈneɾ/"],
          "specific_note": "擁有/年紀/感覺",
          "segments": [{ "text": "tener", "meaning": "有", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tengo un coche.",
          "translation": "我有一台車。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "un", "meaning": "一台", "tail": " " },
            { "text": "coche", "meaning": "車", "tail": "." }
          ]
        },
        {
          "sentence": "Ella tiene un gato lindo.",
          "translation": "她有一隻可愛的貓。",
          "segments": [
            { "text": "Ella", "meaning": "她", "tail": " " },
            { "text": "tiene", "meaning": "她有", "tail": " " },
            { "text": "un", "meaning": "一隻", "tail": " " },
            { "text": "gato", "meaning": "貓", "tail": " " },
            { "text": "lindo", "meaning": "可愛的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Tienes alguna pregunta?",
          "translation": "你有任何問題嗎？",
          "segments": [
            { "text": "¿Tienes", "meaning": "你有", "tail": " " },
            { "text": "alguna", "meaning": "某個/任何", "tail": " " },
            { "text": "pregunta?", "meaning": "問題", "tail": "" }
          ]
        }
      ],
      "usage_note": "西文表達年紀(我20歲)、感覺(我很餓/冷)時，都是用 tener (擁有)，而不是用 am/are/is 喔！",
      "image_file": "have.png"
    },
    {
      "id": "v-03",
      "term_zh": "去",
      "related_terms": [
        {
          "term_target": "ir",
          "pronunciation": ["/iɾ/"],
          "specific_note": "",
          "segments": [{ "text": "ir", "meaning": "去", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Me voy a casa.",
          "translation": "我要回家了。",
          "segments": [
            { "text": "Me", "meaning": "我自己(強調離開)", "tail": " " },
            { "text": "voy", "meaning": "我去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "casa", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Voy a la escuela en autobús.",
          "translation": "我搭公車去上學。",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "escuela", "meaning": "學校", "tail": " " },
            { "text": "en", "meaning": "搭乘/在", "tail": " " },
            { "text": "autobús", "meaning": "公車", "tail": "." }
          ]
        },
        {
          "sentence": "¡Vamos!",
          "translation": "我們走吧！/ 加油！",
          "segments": [
            { "text": "¡Vamos!", "meaning": "我們走(祈使句)", "tail": "" }
          ]
        }
      ],
      "usage_note": "ir 是極度不規則動詞 (我voy/你vas/他va/我們vamos/他們van)。¡Vamos! 也是看球賽時常喊的「加油」。",
      "image_file": "go.png"
    },
    {
      "id": "v-04",
      "term_zh": "得到／拿／買",
      "related_terms": [
        {
          "term_target": "conseguir",
          "pronunciation": ["/kon.seˈɣiɾ/"],
          "specific_note": "獲得",
          "segments": [{ "text": "conseguir", "meaning": "得到", "tail": "" }]
        },
        {
          "term_target": "comprar",
          "pronunciation": ["/komˈpɾaɾ/"],
          "specific_note": "購買",
          "segments": [{ "text": "comprar", "meaning": "買", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Recibí un regalo.",
          "translation": "我收到了一個禮物。(用 recibir 收到)",
          "segments": [
            { "text": "Recibí", "meaning": "我收到(過去式)", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "regalo", "meaning": "禮物", "tail": "." }
          ]
        },
        {
          "sentence": "Necesito dormir un poco.",
          "translation": "我需要睡一會兒。",
          "segments": [
            { "text": "Necesito", "meaning": "我需要", "tail": " " },
            { "text": "dormir", "meaning": "睡覺", "tail": " " },
            { "text": "un", "meaning": "一點", "tail": " " },
            { "text": "poco", "meaning": "少許", "tail": "." }
          ]
        },
        {
          "sentence": "¿Recibiste mi correo?",
          "translation": "你有收到我的信嗎？",
          "segments": [
            { "text": "¿Recibiste", "meaning": "你收到(過去式)", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "correo?", "meaning": "信件/郵件", "tail": "" }
          ]
        }
      ],
      "usage_note": "英文的 get 意思太多，西文會根據情況換字：收到用 recibir，得到用 conseguir，去拿用 traer。",
      "image_file": "get.png"
    },
    {
      "id": "v-05",
      "term_zh": "做",
      "related_terms": [
        {
          "term_target": "hacer",
          "pronunciation": ["/aˈseɾ/"],
          "specific_note": "做/製造/天氣",
          "segments": [{ "text": "hacer", "meaning": "做", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hacer la tarea.",
          "translation": "做功課。",
          "segments": [
            { "text": "Hacer", "meaning": "做", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "tarea", "meaning": "功課", "tail": "." }
          ]
        },
        {
          "sentence": "Solo hazlo.",
          "translation": "做就對了 (Just do it)。",
          "segments": [
            { "text": "Solo", "meaning": "只有/就", "tail": " " },
            { "text": "hazlo", "meaning": "做它(haz命令句+lo)", "tail": "." }
          ]
        },
        {
          "sentence": "¿A qué te dedicas?",
          "translation": "你是做什麼工作的？(道地問法)",
          "segments": [
            { "text": "¿A", "meaning": "對/向", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "te", "meaning": "你自己", "tail": " " },
            { "text": "dedicas?", "meaning": "致力於/從事", "tail": "" }
          ]
        }
      ],
      "usage_note": "Hacer 也是超常用動詞。除了「做」，西文的「天氣很熱/冷」也是用 hacer (Hace calor)。",
      "image_file": "do.png"
    },
    {
      "id": "v-06",
      "term_zh": "說（講）",
      "related_terms": [
        {
          "term_target": "decir",
          "pronunciation": ["/deˈsiɾ/"],
          "specific_note": "說出內容",
          "segments": [{ "text": "decir", "meaning": "說", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Di hola.",
          "translation": "說你好。",
          "segments": [
            { "text": "Di", "meaning": "說(命令句)", "tail": " " },
            { "text": "hola", "meaning": "你好", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué dijiste?",
          "translation": "你剛剛說什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "dijiste?", "meaning": "你說(過去式)", "tail": "" }
          ]
        },
        {
          "sentence": "No digas eso.",
          "translation": "別那樣說。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "digas", "meaning": "你說(否定命令)", "tail": " " },
            { "text": "eso", "meaning": "那個", "tail": "." }
          ]
        }
      ],
      "usage_note": "Decir 強調「說出具體的內容」。如果只是單純的「開口說話、聊天」要用 hablar。",
      "image_file": "say.png"
    },
    {
      "id": "v-07",
      "term_zh": "知道 / 認識",
      "related_terms": [
        {
          "term_target": "saber",
          "pronunciation": ["/saˈβeɾ/"],
          "specific_note": "知道事實/技能",
          "segments": [{ "text": "saber", "meaning": "知道", "tail": "" }]
        },
        {
          "term_target": "conocer",
          "pronunciation": ["/ko.noˈseɾ/"],
          "specific_note": "認識人/去過地方",
          "segments": [{ "text": "conocer", "meaning": "認識", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Te conozco.",
          "translation": "我認識你。",
          "segments": [
            { "text": "Te", "meaning": "你(受詞)", "tail": " " },
            { "text": "conozco", "meaning": "我認識", "tail": "." }
          ]
        },
        {
          "sentence": "No sé la respuesta.",
          "translation": "我不知道答案。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "sé", "meaning": "我知道", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "respuesta", "meaning": "答案", "tail": "." }
          ]
        },
        {
          "sentence": "¿Lo conoces?",
          "translation": "你認識他嗎？",
          "segments": [
            { "text": "¿Lo", "meaning": "他(受詞)", "tail": " " },
            { "text": "conoces?", "meaning": "你認識", "tail": "" }
          ]
        }
      ],
      "usage_note": "西文有兩個知道。Saber 用於知道「資訊、答案、技能」；Conocer 用於認識「人」或去過某個「地方」。",
      "image_file": "know.png"
    },
    {
      "id": "v-08",
      "term_zh": "想／思考",
      "related_terms": [
        {
          "term_target": "pensar",
          "pronunciation": ["/penˈsaɾ/"],
          "specific_note": "思考",
          "segments": [{ "text": "pensar", "meaning": "想", "tail": "" }]
        },
        {
          "term_target": "creer",
          "pronunciation": ["/kɾeˈeɾ/"],
          "specific_note": "認為/相信",
          "segments": [{ "text": "creer", "meaning": "認為", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Creo que sí.",
          "translation": "我也這麼覺得 (我相信是如此)。",
          "segments": [
            { "text": "Creo", "meaning": "我認為/相信", "tail": " " },
            { "text": "que", "meaning": "(連接詞)", "tail": " " },
            { "text": "sí", "meaning": "是的", "tail": "." }
          ]
        },
        {
          "sentence": "Déjame pensarlo.",
          "translation": "讓我想一想。",
          "segments": [
            { "text": "Déjame", "meaning": "讓我(deja+me)", "tail": " " },
            { "text": "pensarlo", "meaning": "想它(pensar+lo)", "tail": "." }
          ]
        },
        {
          "sentence": "Creo que tienes razón.",
          "translation": "我覺得你是對的。",
          "segments": [
            { "text": "Creo", "meaning": "我認為", "tail": " " },
            { "text": "que", "meaning": "(連接詞)", "tail": " " },
            { "text": "tienes", "meaning": "你有", "tail": " " },
            { "text": "razón", "meaning": "道理(tener razón=是對的)", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達「我覺得/我認為」時，母語人士最常說的是 Creo que... (我相信...)。",
      "image_file": "think.png"
    },
    {
      "id": "v-09",
      "term_zh": "看見",
      "related_terms": [
        {
          "term_target": "ver",
          "pronunciation": ["/beɾ/"],
          "specific_note": "自然看見/看電視",
          "segments": [{ "text": "ver", "meaning": "看", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Te veo.",
          "translation": "我看到你了。",
          "segments": [
            { "text": "Te", "meaning": "你(受詞)", "tail": " " },
            { "text": "veo", "meaning": "我看見", "tail": "." }
          ]
        },
        {
          "sentence": "¿Puedes ver el pájaro?",
          "translation": "你看得到那隻鳥嗎？",
          "segments": [
            { "text": "¿Puedes", "meaning": "你能", "tail": " " },
            { "text": "ver", "meaning": "看見", "tail": " " },
            { "text": "el", "meaning": "那隻", "tail": " " },
            { "text": "pájaro?", "meaning": "鳥", "tail": "" }
          ]
        },
        {
          "sentence": "Ya veo lo que quieres decir.",
          "translation": "我懂你的意思了 (原來如此)。",
          "segments": [
            { "text": "Ya", "meaning": "現在/已經", "tail": " " },
            { "text": "veo", "meaning": "我明白(看見)", "tail": " " },
            { "text": "lo", "meaning": "...的事情", "tail": " " },
            { "text": "que", "meaning": "那", "tail": " " },
            { "text": "quieres", "meaning": "你想", "tail": " " },
            { "text": "decir", "meaning": "說", "tail": "." }
          ]
        }
      ],
      "usage_note": "Ver 指自然的看見，也用來指「看電視、看電影」(ver la tele)。如果是專注地「注視、盯著看」要用 mirar。",
      "image_file": "see.png"
    },
    {
      "id": "v-10",
      "term_zh": "做出（製造）",
      "related_terms": [
        {
          "term_target": "hacer",
          "pronunciation": ["/aˈseɾ/"],
          "specific_note": "",
          "segments": [{ "text": "hacer", "meaning": "做/製造", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hacer café.",
          "translation": "泡咖啡。",
          "segments": [
            { "text": "Hacer", "meaning": "製作/泡", "tail": " " },
            { "text": "café", "meaning": "咖啡", "tail": "." }
          ]
        },
        {
          "sentence": "No hagas ruido.",
          "translation": "不要製造噪音。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "hagas", "meaning": "你製造(否定命令)", "tail": " " },
            { "text": "ruido", "meaning": "噪音", "tail": "." }
          ]
        },
        {
          "sentence": "Cometí un error.",
          "translation": "我犯了一個錯。(犯錯習慣搭配 cometer)",
          "segments": [
            { "text": "Cometí", "meaning": "我犯下(過去式)", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "error", "meaning": "錯誤", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文中做動作 (do) 跟製造 (make) 通常都共用 hacer 這個字。",
      "image_file": "make.png"
    },
    {
      "id": "v-11",
      "term_zh": "來",
      "related_terms": [
        {
          "term_target": "venir",
          "pronunciation": ["/beˈniɾ/"],
          "specific_note": "",
          "segments": [{ "text": "venir", "meaning": "來", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ven aquí.",
          "translation": "來這裡。",
          "segments": [
            { "text": "Ven", "meaning": "來(命令句)", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Pase, por favor.",
          "translation": "請進。(道地說法)",
          "segments": [
            { "text": "Pase", "meaning": "請通過/請進", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuándo vienes?",
          "translation": "你什麼時候會來？",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "vienes?", "meaning": "你來", "tail": "" }
          ]
        }
      ],
      "usage_note": "叫人「過來這裡」最常講的就是短短的 Ven。",
      "image_file": "come.png"
    },
    {
      "id": "v-12",
      "term_zh": "需要",
      "related_terms": [
        {
          "term_target": "necesitar",
          "pronunciation": ["/ne.se.siˈtaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "necesitar", "meaning": "需要", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Necesito agua.",
          "translation": "我需要水。",
          "segments": [
            { "text": "Necesito", "meaning": "我需要", "tail": " " },
            { "text": "agua", "meaning": "水", "tail": "." }
          ]
        },
        {
          "sentence": "Necesito tu ayuda.",
          "translation": "我需要你的幫忙。",
          "segments": [
            { "text": "Necesito", "meaning": "我需要", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "ayuda", "meaning": "幫忙(名詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Tenemos que hablar.",
          "translation": "我們必須(需要)談談。",
          "segments": [
            { "text": "Tenemos", "meaning": "我們有", "tail": " " },
            { "text": "que", "meaning": "(tener que = 必須)", "tail": " " },
            { "text": "hablar", "meaning": "談話", "tail": "." }
          ]
        }
      ],
      "usage_note": "需要某個東西用 necesitar；如果表達「必須去做某事」，常說 tener que + 動詞。",
      "image_file": "need.png"
    },
    {
      "id": "v-13",
      "term_zh": "使用",
      "related_terms": [
        {
          "term_target": "usar",
          "pronunciation": ["/uˈsaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "usar", "meaning": "使用", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Usa un bolígrafo.",
          "translation": "用筆。",
          "segments": [
            { "text": "Usa", "meaning": "用(命令句)", "tail": " " },
            { "text": "un", "meaning": "一支", "tail": " " },
            { "text": "bolígrafo", "meaning": "原子筆", "tail": "." }
          ]
        },
        {
          "sentence": "¿Puedo usar tu teléfono?",
          "translation": "我可以用你的手機嗎？",
          "segments": [
            { "text": "¿Puedo", "meaning": "我可以", "tail": " " },
            { "text": "usar", "meaning": "用", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "teléfono?", "meaning": "手機", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cómo se usa esto?",
          "translation": "這個要怎麼用？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "se", "meaning": "被", "tail": " " },
            { "text": "usa", "meaning": "使用", "tail": " " },
            { "text": "esto?", "meaning": "這個", "tail": "" }
          ]
        }
      ],
      "usage_note": "¿Puedo usar...? (我可以用...嗎？) 是出國借東西、上廁所時非常實用的句型。",
      "image_file": "use.png"
    },
    {
      "id": "v-14",
      "term_zh": "找到",
      "related_terms": [
        {
          "term_target": "encontrar",
          "pronunciation": ["/en.konˈtɾaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "encontrar", "meaning": "找到", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Encontrar un trabajo.",
          "translation": "找工作。",
          "segments": [
            { "text": "Encontrar", "meaning": "找到", "tail": " " },
            { "text": "un", "meaning": "一份", "tail": " " },
            { "text": "trabajo", "meaning": "工作", "tail": "." }
          ]
        },
        {
          "sentence": "No encuentro mis llaves.",
          "translation": "我找不到我的鑰匙。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "encuentro", "meaning": "我找到", "tail": " " },
            { "text": "mis", "meaning": "我的", "tail": " " },
            { "text": "llaves", "meaning": "鑰匙", "tail": "." }
          ]
        },
        {
          "sentence": "¿Lo encontraste?",
          "translation": "你找到了嗎？",
          "segments": [
            { "text": "¿Lo", "meaning": "它", "tail": " " },
            { "text": "encontraste?", "meaning": "你找到(過去式)", "tail": "" }
          ]
        }
      ],
      "usage_note": "這個字常發生母音變化，例如「我找到」是 encuentro，不是 encontro。",
      "image_file": "find.png"
    },
    {
      "id": "v-15",
      "term_zh": "給",
      "related_terms": [
        {
          "term_target": "dar",
          "pronunciation": ["/daɾ/"],
          "specific_note": "",
          "segments": [{ "text": "dar", "meaning": "給", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Dame eso.",
          "translation": "給我那個。",
          "segments": [
            { "text": "Dame", "meaning": "給我(da命令+me)", "tail": " " },
            { "text": "eso", "meaning": "那個", "tail": "." }
          ]
        },
        {
          "sentence": "Ayúdame, por favor.",
          "translation": "請幫我一把。 (不直譯give a hand，直接說幫忙)",
          "segments": [
            { "text": "Ayúdame", "meaning": "幫我(ayuda命令+me)", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Nunca te rindas.",
          "translation": "永不放棄。 (道地說法)",
          "segments": [
            { "text": "Nunca", "meaning": "絕不", "tail": " " },
            { "text": "te", "meaning": "你自己", "tail": " " },
            { "text": "rindas", "meaning": "屈服/投降", "tail": "." }
          ]
        }
      ],
      "usage_note": "口語中常把「給我(me)」連在動詞後面，例如 Dame... (給我...) 或 Me da... (請您給我...)。",
      "image_file": "give.png"
    },
    {
      "id": "v-16",
      "term_zh": "告訴",
      "related_terms": [
        {
          "term_target": "decir",
          "pronunciation": ["/deˈsiɾ/"],
          "specific_note": "說/告訴",
          "segments": [{ "text": "decir", "meaning": "告訴", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Dime por qué.",
          "translation": "告訴我為什麼。",
          "segments": [
            { "text": "Dime", "meaning": "告訴我(di命令+me)", "tail": " " },
            { "text": "por", "meaning": "為", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": "." }
          ]
        },
        {
          "sentence": "Dime la verdad.",
          "translation": "告訴我真相。",
          "segments": [
            { "text": "Dime", "meaning": "告訴我", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "verdad", "meaning": "真相", "tail": "." }
          ]
        },
        {
          "sentence": "No se lo digas a nadie.",
          "translation": "不要告訴任何人。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "se", "meaning": "給他/給他們", "tail": " " },
            { "text": "lo", "meaning": "這件事", "tail": " " },
            { "text": "digas", "meaning": "你說(否定命令)", "tail": " " },
            { "text": "a", "meaning": "對", "tail": " " },
            { "text": "nadie", "meaning": "沒有人", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的「說」和「告訴」都是 decir。口語中最常聽到的就是 Dime (告訴我)。",
      "image_file": "tell.png"
    },
    {
      "id": "v-17",
      "term_zh": "工作 / 運作",
      "related_terms": [
        {
          "term_target": "trabajar",
          "pronunciation": ["/tɾa.βaˈxaɾ/"],
          "specific_note": "人去上班",
          "segments": [{ "text": "trabajar", "meaning": "工作", "tail": "" }]
        },
        {
          "term_target": "funcionar",
          "pronunciation": ["/fun.sjoˈnaɾ/"],
          "specific_note": "機器運轉",
          "segments": [{ "text": "funcionar", "meaning": "運作", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Yo trabajo aquí.",
          "translation": "我在這工作。",
          "segments": [
            { "text": "Yo", "meaning": "我", "tail": " " },
            { "text": "trabajo", "meaning": "我工作", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Mi computadora no funciona.",
          "translation": "我的電腦壞了(不運作)。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "computadora", "meaning": "電腦", "tail": " " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "funciona", "meaning": "運作", "tail": "." }
          ]
        },
        {
          "sentence": "Ella trabaja mucho.",
          "translation": "她工作很努力(很多)。",
          "segments": [
            { "text": "Ella", "meaning": "她", "tail": " " },
            { "text": "trabaja", "meaning": "工作", "tail": " " },
            { "text": "mucho", "meaning": "很多", "tail": "." }
          ]
        }
      ],
      "usage_note": "注意區分：人去上班賺錢是 trabajar；機器、計畫有發揮作用是 funcionar。",
      "image_file": "work.png"
    },
    {
      "id": "v-18",
      "term_zh": "喜歡",
      "related_terms": [
        {
          "term_target": "gustar",
          "pronunciation": ["/gusˈtaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "gustar", "meaning": "使人喜歡", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Me gusta.",
          "translation": "我喜歡它 (它使我喜歡)。",
          "segments": [
            { "text": "Me", "meaning": "對我來說", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": "." }
          ]
        },
        {
          "sentence": "Me gusta la pizza.",
          "translation": "我喜歡披薩。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "pizza", "meaning": "披薩", "tail": "." }
          ]
        },
        {
          "sentence": "¿Te gusta él?",
          "translation": "你喜歡他嗎？",
          "segments": [
            { "text": "¿Te", "meaning": "對你", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "él?", "meaning": "他", "tail": "" }
          ]
        }
      ],
      "usage_note": "西文的「喜歡」邏輯很特別，直譯是「某物使我喜歡」。所以我喜歡是 Me gusta，你喜歡是 Te gusta。",
      "image_file": "like.png"
    },
    {
      "id": "v-19",
      "term_zh": "起床 / 醒來",
      "related_terms": [
        {
          "term_target": "despertarse",
          "pronunciation": ["/des.peɾˈtaɾ.se/"],
          "specific_note": "眼睛睜開",
          "segments": [{ "text": "despertar", "meaning": "喚醒", "tail": "" }]
        },
        {
          "term_target": "levantarse",
          "pronunciation": ["/le.βanˈtaɾ.se/"],
          "specific_note": "下床起身",
          "segments": [{ "text": "levantar", "meaning": "舉起", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Despierta ya.",
          "translation": "現在醒來 / 快起床。",
          "segments": [
            { "text": "Despierta", "meaning": "醒來(命令句)", "tail": " " },
            { "text": "ya", "meaning": "現在/已經", "tail": "." }
          ]
        },
        {
          "sentence": "Me levanto a las 7.",
          "translation": "我通常7點起床。",
          "segments": [
            { "text": "Me", "meaning": "我自己", "tail": " " },
            { "text": "levanto", "meaning": "我起身", "tail": " " },
            { "text": "a", "meaning": "在", "tail": " " },
            { "text": "las", "meaning": "(接時間)", "tail": " " },
            { "text": "7", "meaning": "七點", "tail": "." }
          ]
        },
        {
          "sentence": "¡Levántate! Llegas tarde.",
          "translation": "起來！你遲到了。",
          "segments": [
            { "text": "¡Levántate!", "meaning": "你自己起來", "tail": " " },
            { "text": "Llegas", "meaning": "你到達", "tail": " " },
            { "text": "tarde", "meaning": "晚/遲", "tail": "." }
          ]
        }
      ],
      "usage_note": "Despertar 是張開眼睛醒來；Levantar 是身體離開床鋪站起來。",
      "image_file": "wake_up.png"
    },
    {
      "id": "v-20",
      "term_zh": "說話",
      "related_terms": [
        {
          "term_target": "hablar",
          "pronunciation": ["/aˈβlaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "hablar", "meaning": "說話", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Habla inglés.",
          "translation": "說英文。 / 他會說英文。",
          "segments": [
            { "text": "Habla", "meaning": "他說/你說(命令)", "tail": " " },
            { "text": "inglés", "meaning": "英文", "tail": "." }
          ]
        },
        {
          "sentence": "¿Puedo hablar con Tom?",
          "translation": "我可以跟湯姆說話嗎？(電話中)",
          "segments": [
            { "text": "¿Puedo", "meaning": "我可以", "tail": " " },
            { "text": "hablar", "meaning": "說話", "tail": " " },
            { "text": "con", "meaning": "和", "tail": " " },
            { "text": "Tom?", "meaning": "湯姆", "tail": "" }
          ]
        },
        {
          "sentence": "Hable más despacio, por favor.",
          "translation": "請說慢一點。",
          "segments": [
            { "text": "Hable", "meaning": "請您說", "tail": " " },
            { "text": "más", "meaning": "更", "tail": " " },
            { "text": "despacio", "meaning": "慢地", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        }
      ],
      "usage_note": "單純表達說話的動作、講某種語言、或是和某人聊天，都是用 hablar。h 不發音。",
      "image_file": "speak.png"
    },
    {
      "id": "v-21",
      "term_zh": "聽見",
      "related_terms": [
        {
          "term_target": "oír",
          "pronunciation": ["/oˈiɾ/"],
          "specific_note": "自然聽見",
          "segments": [{ "text": "oír", "meaning": "聽見", "tail": "" }]
        },
        {
          "term_target": "escuchar",
          "pronunciation": ["/es.kuˈtʃaɾ/"],
          "specific_note": "專心聽",
          "segments": [{ "text": "escuchar", "meaning": "聽", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Me escuchas?",
          "translation": "聽得到我說話嗎？ (講電話或視訊時最常用)",
          "segments": [
            { "text": "¿Me", "meaning": "聽我", "tail": " " },
            { "text": "escuchas?", "meaning": "你聽(專心聽)", "tail": "" }
          ]
        },
        {
          "sentence": "No te oigo.",
          "translation": "我聽不見你的聲音。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "te", "meaning": "聽你", "tail": " " },
            { "text": "oigo", "meaning": "我聽見", "tail": "." }
          ]
        },
        {
          "sentence": "¿Oíste eso?",
          "translation": "你有聽到那個聲音嗎？",
          "segments": [
            { "text": "¿Oíste", "meaning": "你聽見(過去式)", "tail": " " },
            { "text": "eso?", "meaning": "那個", "tail": "" }
          ]
        }
      ],
      "usage_note": "Oír 是聲音自然傳入耳朵（聽見）；Escuchar 是刻意去聽（聆聽）。講電話時兩者都有人說。",
      "image_file": "hear.png"
    },
    {
      "id": "v-22",
      "term_zh": "寫",
      "related_terms": [
        {
          "term_target": "escribir",
          "pronunciation": ["/es.kɾiˈβiɾ/"],
          "specific_note": "",
          "segments": [{ "text": "escribir", "meaning": "寫", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cómo se escribe tu nombre?",
          "translation": "你的名字怎麼拼(寫)？ (出國超實用)",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "se", "meaning": "被", "tail": " " },
            { "text": "escribe", "meaning": "寫", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "nombre?", "meaning": "名字", "tail": "" }
          ]
        },
        {
          "sentence": "Escríbelo aquí, por favor.",
          "translation": "請把它寫在這裡。",
          "segments": [
            { "text": "Escríbelo", "meaning": "寫它(escribe命令+lo)", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Te escribo luego.",
          "translation": "我晚點傳訊息(寫信)給你。",
          "segments": [
            { "text": "Te", "meaning": "寫給你", "tail": " " },
            { "text": "escribo", "meaning": "我寫", "tail": " " },
            { "text": "luego", "meaning": "稍後/待會", "tail": "." }
          ]
        }
      ],
      "usage_note": "在西文中，傳 LINE 或簡訊給別人，動詞也是用 escribir (寫)。",
      "image_file": "write.png"
    },
    {
      "id": "v-23",
      "term_zh": "閱讀",
      "related_terms": [
        {
          "term_target": "leer",
          "pronunciation": ["/leˈeɾ/"],
          "specific_note": "",
          "segments": [{ "text": "leer", "meaning": "閱讀", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Me gusta leer.",
          "translation": "我喜歡看書(閱讀)。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "leer", "meaning": "閱讀", "tail": "." }
          ]
        },
        {
          "sentence": "¿Leíste mi mensaje?",
          "translation": "你看了我的訊息嗎？",
          "segments": [
            { "text": "¿Leíste", "meaning": "你閱讀(過去式)", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "mensaje?", "meaning": "訊息", "tail": "" }
          ]
        },
        {
          "sentence": "No sé leer español.",
          "translation": "我看不懂(不會讀)西班牙文。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "sé", "meaning": "我知道(會)", "tail": " " },
            { "text": "leer", "meaning": "閱讀", "tail": " " },
            { "text": "español", "meaning": "西班牙文", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的兩個 e 都要發音，唸作 le-er (雷-欸r)。",
      "image_file": "read.png"
    },
    {
      "id": "v-24",
      "term_zh": "等待",
      "related_terms": [
        {
          "term_target": "esperar",
          "pronunciation": ["/es.peˈɾaɾ/"],
          "specific_note": "等待/希望",
          "segments": [{ "text": "esperar", "meaning": "等待", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Espera un momento.",
          "translation": "等一下。",
          "segments": [
            { "text": "Espera", "meaning": "等(命令句)", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "momento", "meaning": "片刻", "tail": "." }
          ]
        },
        {
          "sentence": "Espérame.",
          "translation": "等我。",
          "segments": [
            { "text": "Espérame", "meaning": "等我(espera命令+me)", "tail": "." }
          ]
        },
        {
          "sentence": "Estoy esperando el autobús.",
          "translation": "我正在等公車。",
          "segments": [
            { "text": "Estoy", "meaning": "我正在", "tail": " " },
            { "text": "esperando", "meaning": "等待(進行式)", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "autobús", "meaning": "公車", "tail": "." }
          ]
        }
      ],
      "usage_note": "esperar 同時有「等待」和「希望」兩個意思 (就像英文的 hope 和 wait 是同一個字)。",
      "image_file": "wait.png"
    },
    {
      "id": "v-25",
      "term_zh": "嘗試",
      "related_terms": [
        {
          "term_target": "probar",
          "pronunciation": ["/pɾoˈβaɾ/"],
          "specific_note": "試吃/試穿",
          "segments": [{ "text": "probar", "meaning": "嘗試", "tail": "" }]
        },
        {
          "term_target": "intentar",
          "pronunciation": ["/in.tenˈtaɾ/"],
          "specific_note": "試著去做",
          "segments": [{ "text": "intentar", "meaning": "企圖/試著", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Quiero probar esto.",
          "translation": "我想試試看這個 (試吃或試穿)。",
          "segments": [
            { "text": "Quiero", "meaning": "我想要", "tail": " " },
            { "text": "probar", "meaning": "嘗試", "tail": " " },
            { "text": "esto", "meaning": "這個", "tail": "." }
          ]
        },
        {
          "sentence": "¿Puedo probármelo?",
          "translation": "我可以試穿它嗎？",
          "segments": [
            { "text": "¿Puedo", "meaning": "我可以", "tail": " " },
            { "text": "probármelo?", "meaning": "試穿它(probar+me+lo)", "tail": "" }
          ]
        },
        {
          "sentence": "Voy a intentarlo.",
          "translation": "我會試著做做看。",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "intentarlo", "meaning": "試著做它(intentar+lo)", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文分得很細：試吃食物、試穿衣服用 probar；試圖克服困難完成某件事用 intentar。",
      "image_file": "try.png"
    },
    {
      "id": "v-26",
      "term_zh": "付錢",
      "related_terms": [
        {
          "term_target": "pagar",
          "pronunciation": ["/paˈɣaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "pagar", "meaning": "支付", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Puedo pagar con tarjeta?",
          "translation": "我可以刷卡(用卡片付錢)嗎？",
          "segments": [
            { "text": "¿Puedo", "meaning": "我可以", "tail": " " },
            { "text": "pagar", "meaning": "支付", "tail": " " },
            { "text": "con", "meaning": "用/和", "tail": " " },
            { "text": "tarjeta?", "meaning": "卡片", "tail": "" }
          ]
        },
        {
          "sentence": "Yo pago.",
          "translation": "我來付 / 我請客。",
          "segments": [
            { "text": "Yo", "meaning": "我", "tail": " " },
            { "text": "pago", "meaning": "我付錢", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde se paga?",
          "translation": "要在哪裡結帳(付錢)？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "se", "meaning": "被", "tail": " " },
            { "text": "paga?", "meaning": "支付", "tail": "" }
          ]
        }
      ],
      "usage_note": "¿Puedo pagar con tarjeta? (可以刷卡嗎？) 是出國購物必備神句。",
      "image_file": "pay.png"
    },
    {
      "id": "v-27",
      "term_zh": "選擇",
      "related_terms": [
        {
          "term_target": "elegir",
          "pronunciation": ["/e.leˈxiɾ/"],
          "specific_note": "",
          "segments": [{ "text": "elegir", "meaning": "選擇", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Elige uno.",
          "translation": "挑一個。",
          "segments": [
            { "text": "Elige", "meaning": "選擇(命令句)", "tail": " " },
            { "text": "uno", "meaning": "一個", "tail": "." }
          ]
        },
        {
          "sentence": "No sé cuál elegir.",
          "translation": "我不知道該選哪一個。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "sé", "meaning": "我知道", "tail": " " },
            { "text": "cuál", "meaning": "哪一個", "tail": " " },
            { "text": "elegir", "meaning": "選擇", "tail": "." }
          ]
        },
        {
          "sentence": "Tú eliges.",
          "translation": "你選吧 / 聽你的。",
          "segments": [
            { "text": "Tú", "meaning": "你", "tail": " " },
            { "text": "eliges", "meaning": "你選擇", "tail": "." }
          ]
        }
      ],
      "usage_note": "另一個也很常用的同義詞是 escoger。",
      "image_file": "choose.png"
    },
    {
      "id": "v-28",
      "term_zh": "進入",
      "related_terms": [
        {
          "term_target": "entrar",
          "pronunciation": ["/enˈtɾaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "entrar", "meaning": "進入", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Por favor, entra.",
          "translation": "請進。",
          "segments": [
            { "text": "Por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": ", " },
            { "text": "entra", "meaning": "你進來(命令)", "tail": "." }
          ]
        },
        {
          "sentence": "Prohibido entrar.",
          "translation": "禁止進入 (常見告示牌)。",
          "segments": [
            { "text": "Prohibido", "meaning": "被禁止的", "tail": " " },
            { "text": "entrar", "meaning": "進入", "tail": "." }
          ]
        },
        {
          "sentence": "Entremos.",
          "translation": "我們進去吧。",
          "segments": [
            { "text": "Entremos", "meaning": "我們進去", "tail": "." }
          ]
        }
      ],
      "usage_note": "如果有人敲門，當地人最常說的是 Pasa (通過/進來) 或是 Adelante (往前)。",
      "image_file": "enter.png"
    },
    {
      "id": "v-29",
      "term_zh": "住",
      "related_terms": [
        {
          "term_target": "vivir",
          "pronunciation": ["/biˈβiɾ/"],
          "specific_note": "居住/生活",
          "segments": [{ "text": "vivir", "meaning": "居住", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Vivo en Taiwán.",
          "translation": "我住在台灣。",
          "segments": [
            { "text": "Vivo", "meaning": "我住", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "Taiwán", "meaning": "台灣", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde vives?",
          "translation": "你住在哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "vives?", "meaning": "你住", "tail": "" }
          ]
        },
        {
          "sentence": "Me gusta vivir aquí.",
          "translation": "我喜歡住在這裡。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "vivir", "meaning": "居住", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        }
      ],
      "usage_note": "vivir 不僅是居住，也是「活著、生活」的意思 (例如 Viva la vida 活在當下)。",
      "image_file": "live.png"
    },
    {
      "id": "v-30",
      "term_zh": "到達",
      "related_terms": [
        {
          "term_target": "llegar",
          "pronunciation": ["/ʝeˈɣaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "llegar", "meaning": "到達", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ya llegué.",
          "translation": "我到了！",
          "segments": [
            { "text": "Ya", "meaning": "已經", "tail": " " },
            { "text": "llegué", "meaning": "我到達(過去式)", "tail": "." }
          ]
        },
        {
          "sentence": "Llego en cinco minutos.",
          "translation": "我五分鐘後到。",
          "segments": [
            { "text": "Llego", "meaning": "我到達", "tail": " " },
            { "text": "en", "meaning": "在...之後", "tail": " " },
            { "text": "cinco", "meaning": "五", "tail": " " },
            { "text": "minutos", "meaning": "分鐘", "tail": "." }
          ]
        },
        {
          "sentence": "¿A qué hora llegas?",
          "translation": "你幾點會到？",
          "segments": [
            { "text": "¿A", "meaning": "在", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時間", "tail": " " },
            { "text": "llegas?", "meaning": "你到達", "tail": "" }
          ]
        }
      ],
      "usage_note": "赴約時告訴對方「我到了」，西文習慣用過去式說 Ya llegué (我已經到了)。",
      "image_file": "arrive.png"
    },
    {
      "id": "v-31",
      "term_zh": "走路",
      "related_terms": [
        {
          "term_target": "caminar",
          "pronunciation": ["/ka.miˈnaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "caminar", "meaning": "走路", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Me gusta caminar.",
          "translation": "我喜歡走路。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "caminar", "meaning": "走路", "tail": "." }
          ]
        },
        {
          "sentence": "Vamos a caminar un poco.",
          "translation": "我們去散步一下吧。",
          "segments": [
            { "text": "Vamos", "meaning": "我們去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "caminar", "meaning": "走路", "tail": " " },
            { "text": "un", "meaning": "一點", "tail": " " },
            { "text": "poco", "meaning": "少許", "tail": "." }
          ]
        },
        {
          "sentence": "Fui caminando.",
          "translation": "我走路去的。",
          "segments": [
            { "text": "Fui", "meaning": "我去(過去式)", "tail": " " },
            { "text": "caminando", "meaning": "走路(進行式)", "tail": "." }
          ]
        }
      ],
      "usage_note": "另一個常用字是 andar，但在拉丁美洲 caminar 最普遍。",
      "image_file": "walk.png"
    },
    {
      "id": "v-32",
      "term_zh": "打開",
      "related_terms": [
        {
          "term_target": "abrir",
          "pronunciation": ["/aˈβɾiɾ/"],
          "specific_note": "",
          "segments": [{ "text": "abrir", "meaning": "打開", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Abre la puerta.",
          "translation": "開門。",
          "segments": [
            { "text": "Abre", "meaning": "打開(命令句)", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "puerta", "meaning": "門", "tail": "." }
          ]
        },
        {
          "sentence": "¿A qué hora abren?",
          "translation": "你們幾點開門(營業)？",
          "segments": [
            { "text": "¿A", "meaning": "在", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時間", "tail": " " },
            { "text": "abren?", "meaning": "他們打開(指店家)", "tail": "" }
          ]
        },
        {
          "sentence": "Está abierto.",
          "translation": "店有開 / 門是開著的。",
          "segments": [
            { "text": "Está", "meaning": "處於...狀態", "tail": " " },
            { "text": "abierto", "meaning": "打開的(形容詞)", "tail": "." }
          ]
        }
      ],
      "usage_note": "詢問店家營業時間，直譯會是問「他們(店家)幾點開」¿A qué hora abren?。",
      "image_file": "open.png"
    },
    {
      "id": "v-33",
      "term_zh": "關閉",
      "related_terms": [
        {
          "term_target": "cerrar",
          "pronunciation": ["/seˈraɾ/"],
          "specific_note": "",
          "segments": [{ "text": "cerrar", "meaning": "關閉", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Cierra la ventana, por favor.",
          "translation": "請關窗。",
          "segments": [
            { "text": "Cierra", "meaning": "關(命令句)", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "ventana", "meaning": "窗戶", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "¿A qué hora cierran?",
          "translation": "你們幾點關門(打烊)？",
          "segments": [
            { "text": "¿A", "meaning": "在", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時間", "tail": " " },
            { "text": "cierran?", "meaning": "他們關閉", "tail": "" }
          ]
        },
        {
          "sentence": "Ya cerramos.",
          "translation": "我們已經打烊了。",
          "segments": [
            { "text": "Ya", "meaning": "已經", "tail": " " },
            { "text": "cerramos", "meaning": "我們關閉", "tail": "." }
          ]
        }
      ],
      "usage_note": "如果看到店門口掛著 Cerrado 的牌子，就代表已經打烊囉。",
      "image_file": "close.png"
    },
    {
      "id": "v-34",
      "term_zh": "幫助",
      "related_terms": [
        {
          "term_target": "ayudar",
          "pronunciation": ["/a.ʝuˈðaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "ayudar", "meaning": "幫助", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¡Ayuda!",
          "translation": "救命！(幫忙)",
          "segments": [
            { "text": "¡Ayuda!", "meaning": "幫助", "tail": "" }
          ]
        },
        {
          "sentence": "¿Te puedo ayudar?",
          "translation": "我可以幫你嗎？ (店員常講的開場白)",
          "segments": [
            { "text": "¿Te", "meaning": "幫你", "tail": " " },
            { "text": "puedo", "meaning": "我可以", "tail": " " },
            { "text": "ayudar?", "meaning": "幫助", "tail": "" }
          ]
        },
        {
          "sentence": "Ayúdame, por favor.",
          "translation": "請幫我一下。",
          "segments": [
            { "text": "Ayúdame", "meaning": "幫我(ayuda命令+me)", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        }
      ],
      "usage_note": "y 會發出輕微的 j (ㄐ) 音，唸起來像 a-ju-dar。",
      "image_file": "help.png"
    },
    {
      "id": "v-35",
      "term_zh": "帶來",
      "related_terms": [
        {
          "term_target": "traer",
          "pronunciation": ["/tɾaˈeɾ/"],
          "specific_note": "",
          "segments": [{ "text": "traer", "meaning": "帶來", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tráeme la cuenta, por favor.",
          "translation": "麻煩請給我帳單 (直譯：把帳單帶來給我)。",
          "segments": [
            { "text": "Tráeme", "meaning": "帶來給我(trae+me)", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "cuenta", "meaning": "帳單", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "No traje dinero.",
          "translation": "我沒帶錢。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "traje", "meaning": "我帶來(過去式)", "tail": " " },
            { "text": "dinero", "meaning": "錢", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué traigo?",
          "translation": "我要帶什麼去嗎？ (朋友聚會前必問)",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "traigo?", "meaning": "我帶來", "tail": "" }
          ]
        }
      ],
      "usage_note": "在餐廳要東西時，用 Tráeme... (請拿...來給我) 是非常有禮貌又道地的說法。",
      "image_file": "bring.png"
    },
    {
      "id": "v-36",
      "term_zh": "需要",
      "related_terms": [
        {
          "term_target": "necesitar",
          "pronunciation": ["/ne.se.siˈtaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "necesitar", "meaning": "需要", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Necesito un favor.",
          "translation": "我需要你幫個忙。",
          "segments": [
            { "text": "Necesito", "meaning": "我需要", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "favor", "meaning": "恩惠/幫忙", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué necesitas?",
          "translation": "你需要什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "necesitas?", "meaning": "你需要", "tail": "" }
          ]
        },
        {
          "sentence": "No necesitas hacer eso.",
          "translation": "你不需要那樣做。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "necesitas", "meaning": "你需要", "tail": " " },
            { "text": "hacer", "meaning": "做", "tail": " " },
            { "text": "eso", "meaning": "那個", "tail": "." }
          ]
        }
      ],
      "usage_note": "Necesito (+名詞或原形動詞) 是很好用的萬用句型。",
      "image_file": "need.png"
    },
    {
      "id": "v-37",
      "term_zh": "使用",
      "related_terms": [
        {
          "term_target": "usar",
          "pronunciation": ["/uˈsaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "usar", "meaning": "使用", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "No sé cómo usar esto.",
          "translation": "我不知道這個要怎麼用。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "sé", "meaning": "我知道", "tail": " " },
            { "text": "cómo", "meaning": "如何", "tail": " " },
            { "text": "usar", "meaning": "使用", "tail": " " },
            { "text": "esto", "meaning": "這個", "tail": "." }
          ]
        },
        {
          "sentence": "Está en uso.",
          "translation": "正在使用中 / 有人在用。",
          "segments": [
            { "text": "Está", "meaning": "處於", "tail": " " },
            { "text": "en", "meaning": "在...之中", "tail": " " },
            { "text": "uso", "meaning": "使用(名詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Uso mi teléfono para leer.",
          "translation": "我用手機看書(閱讀)。",
          "segments": [
            { "text": "Uso", "meaning": "我使用", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "teléfono", "meaning": "手機", "tail": " " },
            { "text": "para", "meaning": "為了", "tail": " " },
            { "text": "leer", "meaning": "閱讀", "tail": "." }
          ]
        }
      ],
      "usage_note": "另一個比較正式的詞是 utilizar (利用)。",
      "image_file": "use.png"
    },
    {
      "id": "v-38",
      "term_zh": "變成",
      "related_terms": [
        {
          "term_target": "convertirse",
          "pronunciation": ["/kom.beɾˈtiɾ.se/"],
          "specific_note": "徹底轉變",
          "segments": [{ "text": "convertir", "meaning": "轉變", "tail": "" }]
        },
        {
          "term_target": "hacerse",
          "pronunciation": ["/aˈseɾ.se/"],
          "specific_note": "自然演變/成為",
          "segments": [{ "text": "hacer", "meaning": "做/成為", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Quiero ser médico.",
          "translation": "我想成為一名醫生。 (指職業，西文直接用ser)",
          "segments": [
            { "text": "Quiero", "meaning": "我想要", "tail": " " },
            { "text": "ser", "meaning": "是(成為)", "tail": " " },
            { "text": "médico", "meaning": "醫生", "tail": "." }
          ]
        },
        {
          "sentence": "Se hizo de noche.",
          "translation": "天色變暗了 / 入夜了。",
          "segments": [
            { "text": "Se", "meaning": "自己", "tail": " " },
            { "text": "hizo", "meaning": "變成(hacer的過去式)", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "noche", "meaning": "夜晚", "tail": "." }
          ]
        },
        {
          "sentence": "Se convirtió en un problema.",
          "translation": "它變成了一個問題。",
          "segments": [
            { "text": "Se", "meaning": "自己", "tail": " " },
            { "text": "convirtió", "meaning": "轉變成", "tail": " " },
            { "text": "en", "meaning": "在/成", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "problema", "meaning": "問題", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文表達「成為」某職業通常不用 become，而是直接說「想『是』醫生 (quiero ser...)」。",
      "image_file": "become.png"
    },
    {
      "id": "v-39",
      "term_zh": "開始",
      "related_terms": [
        {
          "term_target": "empezar",
          "pronunciation": ["/em.peˈsaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "empezar", "meaning": "開始", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¡Empecemos!",
          "translation": "我們開始吧！",
          "segments": [
            { "text": "¡Empecemos!", "meaning": "我們開始(祈使句)", "tail": "" }
          ]
        },
        {
          "sentence": "¿A qué hora empieza?",
          "translation": "幾點開始？ (問電影、活動)",
          "segments": [
            { "text": "¿A", "meaning": "在", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時間", "tail": " " },
            { "text": "empieza?", "meaning": "它開始", "tail": "" }
          ]
        },
        {
          "sentence": "Empezó a llover.",
          "translation": "開始下雨了。",
          "segments": [
            { "text": "Empezó", "meaning": "它開始(過去式)", "tail": " " },
            { "text": "a", "meaning": "去", "tail": " " },
            { "text": "llover", "meaning": "下雨", "tail": "." }
          ]
        }
      ],
      "usage_note": "另一個完全同義的常見詞是 comenzar。",
      "image_file": "start.png"
    },
    {
      "id": "v-41",
      "term_zh": "結束 / 完成",
      "related_terms": [
        {
          "term_target": "terminar",
          "pronunciation": ["/teɾ.miˈnaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "terminar", "meaning": "結束", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Ya terminaste?",
          "translation": "你做完(或吃完)了嗎？",
          "segments": [
            { "text": "¿Ya", "meaning": "已經", "tail": " " },
            { "text": "terminaste?", "meaning": "你結束(過去式)", "tail": "" }
          ]
        },
        {
          "sentence": "Todavía no termino.",
          "translation": "我還沒做完。",
          "segments": [
            { "text": "Todavía", "meaning": "仍然", "tail": " " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "termino", "meaning": "我結束", "tail": "." }
          ]
        },
        {
          "sentence": "Termino a las cinco.",
          "translation": "我五點下班(結束工作)。",
          "segments": [
            { "text": "Termino", "meaning": "我結束", "tail": " " },
            { "text": "a", "meaning": "在", "tail": " " },
            { "text": "las", "meaning": "(接時間)", "tail": " " },
            { "text": "cinco", "meaning": "五點", "tail": "." }
          ]
        }
      ],
      "usage_note": "Terminar 是萬用字。不管是工作結束、功課寫完、還是飯吃完了，都可以用這個字。",
      "image_file": "finish.png"
    },
    {
      "id": "v-42",
      "term_zh": "停止",
      "related_terms": [
        {
          "term_target": "parar",
          "pronunciation": ["/paˈɾaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "parar", "meaning": "停止", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Para aquí, por favor.",
          "translation": "請停在這裡。(搭計程車必備)",
          "segments": [
            { "text": "Para", "meaning": "停(命令句)", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Para de hacer eso.",
          "translation": "停止做那件事！",
          "segments": [
            { "text": "Para", "meaning": "停", "tail": " " },
            { "text": "de", "meaning": "從", "tail": " " },
            { "text": "hacer", "meaning": "做", "tail": " " },
            { "text": "eso", "meaning": "那件事", "tail": "." }
          ]
        },
        {
          "sentence": "El autobús paró.",
          "translation": "公車停了。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "autobús", "meaning": "公車", "tail": " " },
            { "text": "paró", "meaning": "它停止(過去式)", "tail": "." }
          ]
        }
      ],
      "usage_note": "另一個常用說法是 Dejar de + 動詞 (放棄/停止做某事)，例如 Deja de hablar (別說話了)。",
      "image_file": "stop.png"
    },
    {
      "id": "v-43",
      "term_zh": "記住",
      "related_terms": [
        {
          "term_target": "recordar",
          "pronunciation": ["/re.koɾˈðaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "recordar", "meaning": "記得", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Me recuerdas?",
          "translation": "你記得我嗎？",
          "segments": [
            { "text": "¿Me", "meaning": "我", "tail": " " },
            { "text": "recuerdas?", "meaning": "你記得", "tail": "" }
          ]
        },
        {
          "sentence": "No lo recuerdo.",
          "translation": "我不記得了。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "lo", "meaning": "這件事", "tail": " " },
            { "text": "recuerdo", "meaning": "我記得", "tail": "." }
          ]
        },
        {
          "sentence": "Recuerda llamarme.",
          "translation": "記得打電話給我。",
          "segments": [
            { "text": "Recuerda", "meaning": "記得(命令句)", "tail": " " },
            { "text": "llamarme", "meaning": "打給我(llamar+me)", "tail": "." }
          ]
        }
      ],
      "usage_note": "注意 O 會變成 ue (例如：我記得 = yo recuerdo)。另一個也常聽到的是 acordarse。",
      "image_file": "remember.png"
    },
    {
      "id": "v-44",
      "term_zh": "談話",
      "related_terms": [
        {
          "term_target": "hablar",
          "pronunciation": ["/aˈβlaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "hablar", "meaning": "說話/交談", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Háblame.",
          "translation": "跟我說話。",
          "segments": [
            { "text": "Háblame", "meaning": "對我說(habla命令+me)", "tail": "." }
          ]
        },
        {
          "sentence": "Tenemos que hablar.",
          "translation": "我們必須(需要)談談。 (經典的情侶/嚴肅起手式)",
          "segments": [
            { "text": "Tenemos", "meaning": "我們有", "tail": " " },
            { "text": "que", "meaning": "必須(tener que)", "tail": " " },
            { "text": "hablar", "meaning": "談話", "tail": "." }
          ]
        },
        {
          "sentence": "Están hablando.",
          "translation": "他們正在聊天。",
          "segments": [
            { "text": "Están", "meaning": "他們正在", "tail": " " },
            { "text": "hablando", "meaning": "說話(進行式)", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟前面的 speak 一樣，在西班牙文裡「講語言」和「聊天談話」都是用 hablar。",
      "image_file": "talk.png"
    },
    {
      "id": "v-45",
      "term_zh": "見面 / 認識",
      "related_terms": [
        {
          "term_target": "conocer",
          "pronunciation": ["/ko.noˈseɾ/"],
          "specific_note": "初次認識",
          "segments": [{ "text": "conocer", "meaning": "認識", "tail": "" }]
        },
        {
          "term_target": "verse",
          "pronunciation": ["/ˈbeɾ.se/"],
          "specific_note": "朋友碰面",
          "segments": [{ "text": "ver", "meaning": "看見", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mucho gusto en conocerte.",
          "translation": "很高興認識你。(初次見面)",
          "segments": [
            { "text": "Mucho", "meaning": "很多", "tail": " " },
            { "text": "gusto", "meaning": "高興", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "conocerte", "meaning": "認識你", "tail": "." }
          ]
        },
        {
          "sentence": "Nos vemos mañana.",
          "translation": "我們明天見。",
          "segments": [
            { "text": "Nos", "meaning": "我們(互相)", "tail": " " },
            { "text": "vemos", "meaning": "看見", "tail": " " },
            { "text": "mañana", "meaning": "明天", "tail": "." }
          ]
        },
        {
          "sentence": "Quiero verme con mis amigos.",
          "translation": "我想跟朋友碰面。",
          "segments": [
            { "text": "Quiero", "meaning": "我想要", "tail": " " },
            { "text": "verme", "meaning": "我自己看見(見面)", "tail": " " },
            { "text": "con", "meaning": "和", "tail": " " },
            { "text": "mis", "meaning": "我的", "tail": " " },
            { "text": "amigos", "meaning": "朋友們", "tail": "." }
          ]
        }
      ],
      "usage_note": "英文都叫 meet，但西文分很細：初次見面(認識)用 conocer；跟朋友相約碰面最口語的說法是 verse (互相看見) 或 reunirse。",
      "image_file": "meet.png"
    },
    {
      "id": "v-46",
      "term_zh": "乘坐（工具） / 服用",
      "related_terms": [
        {
          "term_target": "tomar",
          "pronunciation": ["/toˈmaɾ/"],
          "specific_note": "搭乘/吃藥/喝水",
          "segments": [{ "text": "tomar", "meaning": "拿取/飲用", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tomar un taxi.",
          "translation": "搭計程車。",
          "segments": [
            { "text": "Tomar", "meaning": "搭乘", "tail": " " },
            { "text": "un", "meaning": "一台", "tail": " " },
            { "text": "taxi", "meaning": "計程車", "tail": "." }
          ]
        },
        {
          "sentence": "Toma esta medicina.",
          "translation": "吃這包藥。",
          "segments": [
            { "text": "Toma", "meaning": "拿/服用(命令句)", "tail": " " },
            { "text": "esta", "meaning": "這", "tail": " " },
            { "text": "medicina", "meaning": "藥物", "tail": "." }
          ]
        },
        {
          "sentence": "Tomar un descanso.",
          "translation": "休息一下 (Take a break)。",
          "segments": [
            { "text": "Tomar", "meaning": "拿取/進行", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "descanso", "meaning": "休息", "tail": "." }
          ]
        }
      ],
      "usage_note": "Tomar 是西文超級萬用字。舉凡「搭車」、「吃藥」、甚至是「喝飲料(喝酒)」，全部都可以用 tomar！",
      "image_file": "take.png"
    },
    {
      "id": "v-47",
      "term_zh": "放",
      "related_terms": [
        {
          "term_target": "poner",
          "pronunciation": ["/poˈneɾ/"],
          "specific_note": "放置/穿上",
          "segments": [{ "text": "poner", "meaning": "放", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ponlo aquí.",
          "translation": "把它放這裡。",
          "segments": [
            { "text": "Ponlo", "meaning": "放它(pon命令+lo)", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde lo pongo?",
          "translation": "這個我要放哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "lo", "meaning": "它", "tail": " " },
            { "text": "pongo?", "meaning": "我放", "tail": "" }
          ]
        },
        {
          "sentence": "Ponte los zapatos.",
          "translation": "穿上你的鞋子。 (把鞋子放在自己身上=穿上)",
          "segments": [
            { "text": "Ponte", "meaning": "放你自己(穿上)", "tail": " " },
            { "text": "los", "meaning": "這", "tail": " " },
            { "text": "zapatos", "meaning": "鞋子", "tail": "." }
          ]
        }
      ],
      "usage_note": "Poner 也是極度不規則動詞 (我放=pongo)。加上 se 變成 ponerse 就是「穿上衣服」的意思。",
      "image_file": "put.png"
    },
    {
      "id": "v-48",
      "term_zh": "吃",
      "related_terms": [
        {
          "term_target": "comer",
          "pronunciation": ["/koˈmeɾ/"],
          "specific_note": "",
          "segments": [{ "text": "comer", "meaning": "吃", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Qué quieres comer?",
          "translation": "你想吃什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "quieres", "meaning": "你想", "tail": " " },
            { "text": "comer?", "meaning": "吃", "tail": "" }
          ]
        },
        {
          "sentence": "Ya comí.",
          "translation": "我吃過了 (我吃飽了)。",
          "segments": [
            { "text": "Ya", "meaning": "已經", "tail": " " },
            { "text": "comí", "meaning": "我吃(過去式)", "tail": "." }
          ]
        },
        {
          "sentence": "Vamos a comer.",
          "translation": "我們去吃飯吧。",
          "segments": [
            { "text": "Vamos", "meaning": "我們去", "tail": " " },
            { "text": "a", "meaning": "去", "tail": " " },
            { "text": "comer", "meaning": "吃", "tail": "." }
          ]
        }
      ],
      "usage_note": "Comer 是吃正餐。如果是在西班牙，他們通常會把午餐(almorzar)和晚餐(cenar)用專屬的動詞表達。",
      "image_file": "eat.png"
    },
    {
      "id": "v-49",
      "term_zh": "睡覺",
      "related_terms": [
        {
          "term_target": "dormir",
          "pronunciation": ["/doɾˈmiɾ/"],
          "specific_note": "",
          "segments": [{ "text": "dormir", "meaning": "睡覺", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Necesito dormir.",
          "translation": "我需要睡覺。",
          "segments": [
            { "text": "Necesito", "meaning": "我需要", "tail": " " },
            { "text": "dormir", "meaning": "睡覺", "tail": "." }
          ]
        },
        {
          "sentence": "No dormí bien.",
          "translation": "我(昨晚)沒睡好。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "dormí", "meaning": "我睡(過去式)", "tail": " " },
            { "text": "bien", "meaning": "好", "tail": "." }
          ]
        },
        {
          "sentence": "El bebé está durmiendo.",
          "translation": "寶寶正在睡覺。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "bebé", "meaning": "寶寶", "tail": " " },
            { "text": "está", "meaning": "正在", "tail": " " },
            { "text": "durmiendo", "meaning": "睡覺(進行式)", "tail": "." }
          ]
        }
      ],
      "usage_note": "如果是表達「我要去睡了(就寢)」，西文會加上 se，說 Me voy a dormir。",
      "image_file": "sleep.png"
    },
    {
      "id": "v-50",
      "term_zh": "寄送 / 傳送",
      "related_terms": [
        {
          "term_target": "enviar",
          "pronunciation": ["/emˈbjaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "enviar", "meaning": "寄/送", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Envíame un mensaje.",
          "translation": "傳訊息給我。",
          "segments": [
            { "text": "Envíame", "meaning": "寄給我(envía+me)", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "mensaje", "meaning": "訊息", "tail": "." }
          ]
        },
        {
          "sentence": "Te lo envío.",
          "translation": "我傳(寄)給妳。",
          "segments": [
            { "text": "Te", "meaning": "給你", "tail": " " },
            { "text": "lo", "meaning": "它", "tail": " " },
            { "text": "envío", "meaning": "我寄", "tail": "." }
          ]
        },
        {
          "sentence": "Enviar un correo.",
          "translation": "寄一封電子郵件。",
          "segments": [
            { "text": "Enviar", "meaning": "寄", "tail": " " },
            { "text": "un", "meaning": "一封", "tail": " " },
            { "text": "correo", "meaning": "郵件", "tail": "." }
          ]
        }
      ],
      "usage_note": "不管是寄包裹還是傳 LINE 訊息，都可以用 enviar。另一個同樣普及的詞是 mandar。",
      "image_file": "send.png"
    },
    {
      "id": "v-51",
      "term_zh": "開車",
      "related_terms": [
        {
          "term_target": "manejar",
          "pronunciation": ["/ma.neˈxaɾ/"],
          "specific_note": "拉美常用",
          "segments": [{ "text": "manejar", "meaning": "駕駛", "tail": "" }]
        },
        {
          "term_target": "conducir",
          "pronunciation": ["/kon.duˈsiɾ/"],
          "specific_note": "西班牙常用",
          "segments": [{ "text": "conducir", "meaning": "駕駛", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Sabes manejar?",
          "translation": "你會開車嗎？ (直譯：你知道怎麼開車嗎)",
          "segments": [
            { "text": "¿Sabes", "meaning": "你知道(會)", "tail": " " },
            { "text": "manejar?", "meaning": "駕駛", "tail": "" }
          ]
        },
        {
          "sentence": "Estoy manejando.",
          "translation": "我正在開車。",
          "segments": [
            { "text": "Estoy", "meaning": "我正在", "tail": " " },
            { "text": "manejando", "meaning": "駕駛(進行式)", "tail": "." }
          ]
        },
        {
          "sentence": "Maneja con cuidado.",
          "translation": "請小心駕駛 (開車注意安全)。",
          "segments": [
            { "text": "Maneja", "meaning": "駕駛(命令句)", "tail": " " },
            { "text": "con", "meaning": "帶著/用", "tail": " " },
            { "text": "cuidado", "meaning": "小心", "tail": "." }
          ]
        }
      ],
      "usage_note": "在拉丁美洲(包含墨西哥)，大家幾乎都是用 manejar 來表達開車。如果在西班牙則是說 conducir。",
      "image_file": "drive.png"
    },
    {
      "id": "v-52",
      "term_zh": "讀書 / 學習",
      "related_terms": [
        {
          "term_target": "estudiar",
          "pronunciation": ["/es.tuˈðjaɾ/"],
          "specific_note": "",
          "segments": [{ "text": "estudiar", "meaning": "學習", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Estudia mucho.",
          "translation": "用功讀書 (讀很多)。",
          "segments": [
            { "text": "Estudia", "meaning": "讀書", "tail": " " },
            { "text": "mucho", "meaning": "很多", "tail": "." }
          ]
        },
        {
          "sentence": "Estudio español.",
          "translation": "我在學西班牙文。",
          "segments": [
            { "text": "Estudio", "meaning": "我學", "tail": " " },
            { "text": "español", "meaning": "西班牙文", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo que estudiar.",
          "translation": "我必須讀書(準備考試)。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "que", "meaning": "必須(tener que)", "tail": " " },
            { "text": "estudiar", "meaning": "讀書", "tail": "." }
          ]
        }
      ],
      "usage_note": "不管是學生準備考試，還是大人進修學外語，都是用 estudiar。",
      "image_file": "study.png"
    },
    {
      "id": "v-53",
      "term_zh": "回去 / 返回",
      "related_terms": [
        {
          "term_target": "volver",
          "pronunciation": ["/bolˈβeɾ/"],
          "specific_note": "",
          "segments": [{ "text": "volver", "meaning": "回去", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Vuelve a casa.",
          "translation": "回家吧 / 回到家。",
          "segments": [
            { "text": "Vuelve", "meaning": "回(命令句/他回)", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "casa", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuándo vuelves?",
          "translation": "你什麼時候回來(回去)？",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "vuelves?", "meaning": "你回", "tail": "" }
          ]
        },
        {
          "sentence": "Quiero volver.",
          "translation": "我想回去。",
          "segments": [
            { "text": "Quiero", "meaning": "我想", "tail": " " },
            { "text": "volver", "meaning": "回去", "tail": "." }
          ]
        }
      ],
      "usage_note": "volver 可以指「回來」也可以指「回去」，端看說話者現在人在哪裡。另一個同義詞是 regresar。",
      "image_file": "go_back.png"
    },
    {
      "id": "v-54",
      "term_zh": "了解 / 明白",
      "related_terms": [
        {
          "term_target": "entender",
          "pronunciation": ["/en.tenˈdeɾ/"],
          "specific_note": "",
          "segments": [{ "text": "entender", "meaning": "了解", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ahora entiendo.",
          "translation": "我現在懂了。",
          "segments": [
            { "text": "Ahora", "meaning": "現在", "tail": " " },
            { "text": "entiendo", "meaning": "我懂", "tail": "." }
          ]
        },
        {
          "sentence": "No entiendo.",
          "translation": "我不明白 (聽不懂別人說話時必備)。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "entiendo", "meaning": "我懂", "tail": "." }
          ]
        },
        {
          "sentence": "¿Entiendes?",
          "translation": "你明白嗎？",
          "segments": [
            { "text": "¿Entiendes?", "meaning": "你懂", "tail": "" }
          ]
        }
      ],
      "usage_note": "另一個完全同義的詞是 comprender，但在口語對話中 entender 最常被使用。",
      "image_file": "understand.png"
    },
    
  ]
},
{
  "id": "adjectives",
  "name": "常用形容詞",
  "items": [
    {
      "id": "adj-01",
      "term_zh": "好的",
      "related_terms": [
        {
          "term_target": "bueno / bien",
          "pronunciation": ["/ˈbwe.no/, /bjen/"],
          "specific_note": "好",
          "segments": [
            { "text": "bueno", "meaning": "好的(形容詞)", "tail": " / " },
            { "text": "bien", "meaning": "好地(副詞)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¡Buen trabajo!",
          "translation": "做得好！",
          "segments": [
            { "text": "¡Buen", "meaning": "好的", "tail": " " },
            { "text": "trabajo!", "meaning": "工作", "tail": "" }
          ]
        },
        {
          "sentence": "Que tengas un buen día.",
          "translation": "祝你有個美好的一天。",
          "segments": [
            { "text": "Que", "meaning": "願", "tail": " " },
            { "text": "tengas", "meaning": "你有", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "buen", "meaning": "美好的", "tail": " " },
            { "text": "día", "meaning": "天", "tail": "." }
          ]
        },
        {
          "sentence": "Este libro es muy bueno.",
          "translation": "這本書非常好看(好)。",
          "segments": [
            { "text": "Este", "meaning": "這", "tail": " " },
            { "text": "libro", "meaning": "書", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "bueno", "meaning": "好的", "tail": "." }
          ]
        }
      ],
      "usage_note": "bueno 放在陽性單數名詞(如工作、天)前面時，尾巴的 o 會脫落變成 buen (例如 buen día)。",
      "image_file": "good.png"
    },
    {
      "id": "adj-02",
      "term_zh": "壞的",
      "related_terms": [
        {
          "term_target": "malo / mal",
          "pronunciation": ["/ˈma.lo/, /mal/"],
          "specific_note": "",
          "segments": [
            { "text": "malo", "meaning": "壞的", "tail": " / " },
            { "text": "mal", "meaning": "壞地", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mala idea.",
          "translation": "壞點子 / 餿主意。",
          "segments": [
            { "text": "Mala", "meaning": "壞的(陰性)", "tail": " " },
            { "text": "idea", "meaning": "點子", "tail": "." }
          ]
        },
        {
          "sentence": "Fumar es malo para la salud.",
          "translation": "抽菸對健康有害。",
          "segments": [
            { "text": "Fumar", "meaning": "抽菸", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "malo", "meaning": "壞的", "tail": " " },
            { "text": "para", "meaning": "對於", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "salud", "meaning": "健康", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo malas noticias.",
          "translation": "我有一些壞消息。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "malas", "meaning": "壞的(陰性複數)", "tail": " " },
            { "text": "noticias", "meaning": "消息", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟 bueno 一樣，malo 放在陽性單數名詞前會縮水成 mal (例如 un mal día 糟糕的一天)。",
      "image_file": "bad.png"
    },
    {
      "id": "adj-03",
      "term_zh": "新的",
      "related_terms": [
        {
          "term_target": "nuevo",
          "pronunciation": ["/ˈnwe.βo/"],
          "specific_note": "",
          "segments": [{ "text": "nuevo", "meaning": "新的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Teléfono nuevo.",
          "translation": "新手機。",
          "segments": [
            { "text": "Teléfono", "meaning": "手機", "tail": " " },
            { "text": "nuevo", "meaning": "新的", "tail": "." }
          ]
        },
        {
          "sentence": "¡Feliz Año Nuevo!",
          "translation": "新年快樂！",
          "segments": [
            { "text": "¡Feliz", "meaning": "快樂的", "tail": " " },
            { "text": "Año", "meaning": "年", "tail": " " },
            { "text": "Nuevo!", "meaning": "新的", "tail": "" }
          ]
        },
        {
          "sentence": "¿Qué hay de nuevo?",
          "translation": "最近有什麼新鮮事？ (超常用打招呼)",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "hay", "meaning": "有", "tail": " " },
            { "text": "de", "meaning": "關於", "tail": " " },
            { "text": "nuevo?", "meaning": "新的", "tail": "" }
          ]
        }
      ],
      "usage_note": "修飾女性名詞時要改成 nueva (例如 nueva casa 新家)。",
      "image_file": "new.png"
    },
    {
      "id": "adj-04",
      "term_zh": "第一的",
      "related_terms": [
        {
          "term_target": "primero",
          "pronunciation": ["/pɾiˈme.ɾo/"],
          "specific_note": "",
          "segments": [{ "text": "primero", "meaning": "第一", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Es mi primera vez.",
          "translation": "這是我的第一次。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "primera", "meaning": "第一的(陰性)", "tail": " " },
            { "text": "vez", "meaning": "次", "tail": "." }
          ]
        },
        {
          "sentence": "¿Quién es el primero?",
          "translation": "誰是第一個？",
          "segments": [
            { "text": "¿Quién", "meaning": "誰", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "primero?", "meaning": "第一個", "tail": "" }
          ]
        },
        {
          "sentence": "Primero que nada, gracias.",
          "translation": "首先(第一)，謝謝你。",
          "segments": [
            { "text": "Primero", "meaning": "第一", "tail": " " },
            { "text": "que", "meaning": "比", "tail": " " },
            { "text": "nada", "meaning": "什麼都沒有", "tail": ", " },
            { "text": "gracias", "meaning": "謝謝", "tail": "." }
          ]
        }
      ],
      "usage_note": "放在陽性名詞前，primero 會縮水成 primer (例如 el primer día 第一天)。",
      "image_file": "first.png"
    },
    {
      "id": "adj-05",
      "term_zh": "上一個 / 最後的",
      "related_terms": [
        {
          "term_target": "último / pasado",
          "pronunciation": ["/ˈul.ti.mo/, /paˈsa.ðo/"],
          "specific_note": "",
          "segments": [
            { "text": "último", "meaning": "最後的", "tail": " / " },
            { "text": "pasado", "meaning": "過去的/上一個", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "La semana pasada.",
          "translation": "上週。 (表示剛過去的用 pasado)",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "semana", "meaning": "週", "tail": " " },
            { "text": "pasada", "meaning": "過去的", "tail": "." }
          ]
        },
        {
          "sentence": "Esta es la última oportunidad.",
          "translation": "這是最後一次機會。",
          "segments": [
            { "text": "Esta", "meaning": "這", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "última", "meaning": "最後的(陰性)", "tail": " " },
            { "text": "oportunidad", "meaning": "機會", "tail": "." }
          ]
        },
        {
          "sentence": "Anoche fue divertido.",
          "translation": "昨晚(上一個晚上)很有趣。 (anoche是專用詞)",
          "segments": [
            { "text": "Anoche", "meaning": "昨晚", "tail": " " },
            { "text": "fue", "meaning": "是(過去式)", "tail": " " },
            { "text": "divertido", "meaning": "有趣的", "tail": "." }
          ]
        }
      ],
      "usage_note": "英文的 last 有兩種意思，西文分很開：「剛過去的(上週/去年)」用 pasado；「順序最後的(最後一次)」用 último。",
      "image_file": "last.png"
    },
    {
      "id": "adj-06",
      "term_zh": "下一個",
      "related_terms": [
        {
          "term_target": "próximo / siguiente",
          "pronunciation": ["/ˈpɾok.si.mo/, /siˈɣjen.te/"],
          "specific_note": "",
          "segments": [
            { "text": "próximo", "meaning": "下一個(時間/事件)", "tail": " / " },
            { "text": "siguiente", "meaning": "下一個(順序)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "La próxima estación.",
          "translation": "下一站。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "próxima", "meaning": "下一個(陰性)", "tail": " " },
            { "text": "estación", "meaning": "車站", "tail": "." }
          ]
        },
        {
          "sentence": "Hasta la próxima.",
          "translation": "下次見。",
          "segments": [
            { "text": "Hasta", "meaning": "直到", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "próxima", "meaning": "下一次", "tail": "." }
          ]
        },
        {
          "sentence": "¿Quién es el siguiente?",
          "translation": "下一位是誰？",
          "segments": [
            { "text": "¿Quién", "meaning": "誰", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "siguiente?", "meaning": "下一個", "tail": "" }
          ]
        }
      ],
      "usage_note": "próximo 常用來指接下來即將發生的事（如下週 la próxima semana）；siguiente 常用來指排隊或清單上的下一個。",
      "image_file": "next.png"
    },
    {
      "id": "adj-07",
      "term_zh": "長的",
      "related_terms": [
        {
          "term_target": "largo",
          "pronunciation": ["/ˈlaɾ.ɣo/"],
          "specific_note": "",
          "segments": [{ "text": "largo", "meaning": "長的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Pelo largo.",
          "translation": "長髮。",
          "segments": [
            { "text": "Pelo", "meaning": "頭髮", "tail": " " },
            { "text": "largo", "meaning": "長的", "tail": "." }
          ]
        },
        {
          "sentence": "Es una larga historia.",
          "translation": "這說來話長。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "una", "meaning": "一個", "tail": " " },
            { "text": "larga", "meaning": "長的(陰性)", "tail": " " },
            { "text": "historia", "meaning": "故事/歷史", "tail": "." }
          ]
        },
        {
          "sentence": "El camino es muy largo.",
          "translation": "這條路很長。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "camino", "meaning": "道路", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "largo", "meaning": "長的", "tail": "." }
          ]
        }
      ],
      "usage_note": "注意！largo 是「長」的意思，千萬不要跟英文的 large (大) 搞混了！",
      "image_file": "long.png"
    },
    {
      "id": "adj-08",
      "term_zh": "大的",
      "related_terms": [
        {
          "term_target": "grande",
          "pronunciation": ["/ˈgɾan.de/"],
          "specific_note": "",
          "segments": [{ "text": "grande", "meaning": "大", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Una casa grande.",
          "translation": "一間大房子。",
          "segments": [
            { "text": "Una", "meaning": "一間", "tail": " " },
            { "text": "casa", "meaning": "房子", "tail": " " },
            { "text": "grande", "meaning": "大的", "tail": "." }
          ]
        },
        {
          "sentence": "Ese es un perro grande.",
          "translation": "那是一隻大狗。",
          "segments": [
            { "text": "Ese", "meaning": "那", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "un", "meaning": "一隻", "tail": " " },
            { "text": "perro", "meaning": "狗", "tail": " " },
            { "text": "grande", "meaning": "大的", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo un gran sueño.",
          "translation": "我有一個大夢想(偉大的夢想)。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "gran", "meaning": "偉大的/大的", "tail": " " },
            { "text": "sueño", "meaning": "夢想", "tail": "." }
          ]
        }
      ],
      "usage_note": "grande 放在單數名詞「前面」時，會縮水成 gran (通常引申為「偉大的/極好的」)。",
      "image_file": "big.png"
    },
    {
      "id": "adj-09",
      "term_zh": "小的",
      "related_terms": [
        {
          "term_target": "pequeño",
          "pronunciation": ["/peˈke.ɲo/"],
          "specific_note": "",
          "segments": [{ "text": "pequeño", "meaning": "小", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Talla pequeña.",
          "translation": "小尺寸 (衣服)。",
          "segments": [
            { "text": "Talla", "meaning": "尺寸", "tail": " " },
            { "text": "pequeña", "meaning": "小的(陰性)", "tail": "." }
          ]
        },
        {
          "sentence": "El mundo es muy pequeño.",
          "translation": "世界真小。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "mundo", "meaning": "世界", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "pequeño", "meaning": "小的", "tail": "." }
          ]
        },
        {
          "sentence": "Él tiene las manos pequeñas.",
          "translation": "他的手很小。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "tiene", "meaning": "有", "tail": " " },
            { "text": "las", "meaning": "這", "tail": " " },
            { "text": "manos", "meaning": "雙手(陰性複數)", "tail": " " },
            { "text": "pequeñas", "meaning": "小的(陰性複數)", "tail": "." }
          ]
        }
      ],
      "usage_note": "有陰陽性與單複數的變化：pequeño / pequeña / pequeños / pequeñas。",
      "image_file": "small.png"
    },
    {
      "id": "adj-10",
      "term_zh": "多的",
      "related_terms": [
        {
          "term_target": "mucho",
          "pronunciation": ["/ˈmu.tʃo/"],
          "specific_note": "",
          "segments": [{ "text": "mucho", "meaning": "許多/很多", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mucha gente.",
          "translation": "很多人。",
          "segments": [
            { "text": "Mucha", "meaning": "許多(陰性)", "tail": " " },
            { "text": "gente", "meaning": "人們(陰性)", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuántas manzanas hay?",
          "translation": "有多少顆蘋果？",
          "segments": [
            { "text": "¿Cuántas", "meaning": "多少(陰性複數)", "tail": " " },
            { "text": "manzanas", "meaning": "蘋果", "tail": " " },
            { "text": "hay?", "meaning": "有", "tail": "" }
          ]
        },
        {
          "sentence": "Tengo muchos amigos.",
          "translation": "我有很多朋友。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "muchos", "meaning": "許多(複數)", "tail": " " },
            { "text": "amigos", "meaning": "朋友們", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文不分 much 和 many，全部都用 mucho，只要跟知名詞改變性別和單複數即可(mucho, mucha, muchos, muchas)。",
      "image_file": "many.png"
    },
    {
      "id": "adj-11",
      "term_zh": "高的",
      "related_terms": [
        {
          "term_target": "alto",
          "pronunciation": ["/ˈal.to/"],
          "specific_note": "",
          "segments": [{ "text": "alto", "meaning": "高", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Un edificio muy alto.",
          "translation": "一棟很高的建築物。",
          "segments": [
            { "text": "Un", "meaning": "一個", "tail": " " },
            { "text": "edificio", "meaning": "建築物", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "alto", "meaning": "高的", "tail": "." }
          ]
        },
        {
          "sentence": "Él es alto.",
          "translation": "他很高。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "alto", "meaning": "高的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuánto mides?",
          "translation": "你多高？ (直譯：你測量出多少)",
          "segments": [
            { "text": "¿Cuánto", "meaning": "多少", "tail": " " },
            { "text": "mides?", "meaning": "你測量", "tail": "" }
          ]
        }
      ],
      "usage_note": "問別人多高時，西文不說「你多高(how tall)」，而是用動詞 medir (測量) 問「你量起來多少(cuánto mides)」。",
      "image_file": "tall.png"
    },
    {
      "id": "adj-12",
      "term_zh": "年輕的",
      "related_terms": [
        {
          "term_target": "joven",
          "pronunciation": ["/ˈxo.βen/"],
          "specific_note": "",
          "segments": [{ "text": "joven", "meaning": "年輕的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Un hombre joven.",
          "translation": "一個年輕人。",
          "segments": [
            { "text": "Un", "meaning": "一個", "tail": " " },
            { "text": "hombre", "meaning": "男人", "tail": " " },
            { "text": "joven", "meaning": "年輕的", "tail": "." }
          ]
        },
        {
          "sentence": "Ella se ve muy joven.",
          "translation": "她看起來很年輕。",
          "segments": [
            { "text": "Ella", "meaning": "她", "tail": " " },
            { "text": "se", "meaning": "自己", "tail": " " },
            { "text": "ve", "meaning": "看起來", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "joven", "meaning": "年輕的", "tail": "." }
          ]
        },
        {
          "sentence": "Cuando yo era joven...",
          "translation": "當我年輕的時候...",
          "segments": [
            { "text": "Cuando", "meaning": "當...時", "tail": " " },
            { "text": "yo", "meaning": "我", "tail": " " },
            { "text": "era", "meaning": "是(過去式)", "tail": " " },
            { "text": "joven", "meaning": "年輕的", "tail": "..." }
          ]
        }
      ],
      "usage_note": "男女同形(不分陰陽性)，但變成複數時要加 es 並加上重音符號：jóvenes。",
      "image_file": "young.png"
    },
    {
      "id": "adj-13",
      "term_zh": "老的 / 舊的",
      "related_terms": [
        {
          "term_target": "viejo / mayor",
          "pronunciation": ["/ˈbje.xo/, /maˈʝoɾ/"],
          "specific_note": "物品/人",
          "segments": [
            { "text": "viejo", "meaning": "老/舊(物)", "tail": " / " },
            { "text": "mayor", "meaning": "年長(人)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Un libro viejo.",
          "translation": "一本舊書。",
          "segments": [
            { "text": "Un", "meaning": "一本", "tail": " " },
            { "text": "libro", "meaning": "書", "tail": " " },
            { "text": "viejo", "meaning": "舊的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuántos años tienes?",
          "translation": "你幾歲？ (直譯：你有多少年)",
          "segments": [
            { "text": "¿Cuántos", "meaning": "多少", "tail": " " },
            { "text": "años", "meaning": "年/歲", "tail": " " },
            { "text": "tienes?", "meaning": "你有", "tail": "" }
          ]
        },
        {
          "sentence": "Mi hermano mayor.",
          "translation": "我哥哥 (年長的兄弟)。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "hermano", "meaning": "兄弟", "tail": " " },
            { "text": "mayor", "meaning": "年長的", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！形容「人」很老不要直接用 viejo (沒禮貌)，要用 mayor (年長的)。問年紀時要問「你有多少年(cuántos años tienes)」。",
      "image_file": "old.png"
    },
    {
      "id": "adj-14",
      "term_zh": "近的",
      "related_terms": [
        {
          "term_target": "cerca",
          "pronunciation": ["/ˈseɾ.ka/"],
          "specific_note": "副詞當形容詞用",
          "segments": [{ "text": "cerca", "meaning": "近", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Cerca de aquí.",
          "translation": "在這附近。",
          "segments": [
            { "text": "Cerca", "meaning": "近", "tail": " " },
            { "text": "de", "meaning": "距離", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "¿Está cerca la estación?",
          "translation": "車站近嗎？",
          "segments": [
            { "text": "¿Está", "meaning": "在", "tail": " " },
            { "text": "cerca", "meaning": "近", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "estación?", "meaning": "車站", "tail": "" }
          ]
        },
        {
          "sentence": "Ven cerca de mí.",
          "translation": "靠近我一點。",
          "segments": [
            { "text": "Ven", "meaning": "過來", "tail": " " },
            { "text": "cerca", "meaning": "近", "tail": " " },
            { "text": "de", "meaning": "距離", "tail": " " },
            { "text": "mí", "meaning": "我", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文表達遠近，通常都是用副詞 cerca，後面常搭配 de (在...的附近)。",
      "image_file": "near.png"
    },
    {
      "id": "adj-15",
      "term_zh": "遠的",
      "related_terms": [
        {
          "term_target": "lejos",
          "pronunciation": ["/ˈle.xos/"],
          "specific_note": "副詞當形容詞用",
          "segments": [{ "text": "lejos", "meaning": "遠", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Muy lejos.",
          "translation": "非常遠。",
          "segments": [
            { "text": "Muy", "meaning": "非常", "tail": " " },
            { "text": "lejos", "meaning": "遠", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué tan lejos está?",
          "translation": "那有多遠？",
          "segments": [
            { "text": "¿Qué", "meaning": "多麼", "tail": " " },
            { "text": "tan", "meaning": "如此", "tail": " " },
            { "text": "lejos", "meaning": "遠", "tail": " " },
            { "text": "está?", "meaning": "在", "tail": "" }
          ]
        },
        {
          "sentence": "No está muy lejos.",
          "translation": "不會太遠。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "lejos", "meaning": "遠", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟 cerca 一樣，表達遙遠最常用的是 lejos 這個副詞。",
      "image_file": "far.png"
    },
    {
      "id": "adj-16",
      "term_zh": "快的",
      "related_terms": [
        {
          "term_target": "rápido",
          "pronunciation": ["/ˈra.pi.ðo/"],
          "specific_note": "",
          "segments": [{ "text": "rápido", "meaning": "快", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Corre rápido.",
          "translation": "跑快一點 / 他跑得快。",
          "segments": [
            { "text": "Corre", "meaning": "跑", "tail": " " },
            { "text": "rápido", "meaning": "快", "tail": "." }
          ]
        },
        {
          "sentence": "Comida rápida.",
          "translation": "速食。",
          "segments": [
            { "text": "Comida", "meaning": "食物(陰性)", "tail": " " },
            { "text": "rápida", "meaning": "快速的(陰性)", "tail": "." }
          ]
        },
        {
          "sentence": "El tiempo pasa rápido.",
          "translation": "時間過得很快。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "tiempo", "meaning": "時間", "tail": " " },
            { "text": "pasa", "meaning": "經過", "tail": " " },
            { "text": "rápido", "meaning": "快速地", "tail": "." }
          ]
        }
      ],
      "usage_note": "rápido 可以當形容詞(要配合陰陽性變成 rápida)，也可以直接當副詞「快速地」使用。",
      "image_file": "fast.png"
    },
    {
      "id": "adj-17",
      "term_zh": "慢的",
      "related_terms": [
        {
          "term_target": "lento / despacio",
          "pronunciation": ["/ˈlen.to/, /desˈpa.sjo/"],
          "specific_note": "",
          "segments": [
            { "text": "lento", "meaning": "慢的(形容詞)", "tail": " / " },
            { "text": "despacio", "meaning": "慢地(副詞)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Camina lento.",
          "translation": "走得慢 / 走慢一點。",
          "segments": [
            { "text": "Camina", "meaning": "走", "tail": " " },
            { "text": "lento", "meaning": "慢", "tail": "." }
          ]
        },
        {
          "sentence": "Más despacio, por favor.",
          "translation": "請慢一點。(講太快時求救必備)",
          "segments": [
            { "text": "Más", "meaning": "更", "tail": " " },
            { "text": "despacio", "meaning": "慢地", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "El internet está lento.",
          "translation": "網路很慢。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "internet", "meaning": "網路", "tail": " " },
            { "text": "está", "meaning": "處於", "tail": " " },
            { "text": "lento", "meaning": "慢的狀態", "tail": "." }
          ]
        }
      ],
      "usage_note": "如果東西或網路本身很慢，用 lento。如果是要叫別人動作「放慢、講慢一點」，通常會說 despacio。",
      "image_file": "slow.png"
    },
    {
      "id": "adj-18",
      "term_zh": "熱的",
      "related_terms": [
        {
          "term_target": "caliente / calor",
          "pronunciation": ["/kaˈljen.te/, /kaˈloɾ/"],
          "specific_note": "物品熱/天氣熱",
          "segments": [
            { "text": "caliente", "meaning": "熱的(指物品)", "tail": " / " },
            { "text": "calor", "meaning": "熱氣(指天氣/人)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Agua caliente.",
          "translation": "熱水。",
          "segments": [
            { "text": "Agua", "meaning": "水", "tail": " " },
            { "text": "caliente", "meaning": "熱的", "tail": "." }
          ]
        },
        {
          "sentence": "Hoy hace calor.",
          "translation": "今天很熱。 (直譯：今天製造熱氣)",
          "segments": [
            { "text": "Hoy", "meaning": "今天", "tail": " " },
            { "text": "hace", "meaning": "做/製造", "tail": " " },
            { "text": "calor", "meaning": "熱度", "tail": "." }
          ]
        },
        {
          "sentence": "Ten cuidado, está caliente.",
          "translation": "小心，很燙(熱)。",
          "segments": [
            { "text": "Ten", "meaning": "保持", "tail": " " },
            { "text": "cuidado", "meaning": "小心", "tail": ", " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "caliente", "meaning": "熱的", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！物品很熱用 caliente；但形容天氣熱要用 hace calor (製造熱氣)；覺得自己很熱要用 tengo calor (我有熱氣)。",
      "image_file": "hot.png"
    },
    {
      "id": "adj-19",
      "term_zh": "冷的",
      "related_terms": [
        {
          "term_target": "frío",
          "pronunciation": ["/ˈfɾi.o/"],
          "specific_note": "冷",
          "segments": [{ "text": "frío", "meaning": "冷", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Bebida fría.",
          "translation": "冷飲。",
          "segments": [
            { "text": "Bebida", "meaning": "飲料(陰性)", "tail": " " },
            { "text": "fría", "meaning": "冷的", "tail": "." }
          ]
        },
        {
          "sentence": "Hace frío afuera.",
          "translation": "外面很冷。",
          "segments": [
            { "text": "Hace", "meaning": "製造", "tail": " " },
            { "text": "frío", "meaning": "冷", "tail": " " },
            { "text": "afuera", "meaning": "外面", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo frío.",
          "translation": "我覺得很冷。 / 我感冒了。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "frío", "meaning": "寒冷/感冒", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟熱的邏輯一樣。天氣冷 = hace frío；我自己覺得冷 = tengo frío；東西很冷 = está frío。",
      "image_file": "cold.png"
    },
    {
      "id": "adj-20",
      "term_zh": "乾淨的",
      "related_terms": [
        {
          "term_target": "limpio",
          "pronunciation": ["/ˈlim.pjo/"],
          "specific_note": "",
          "segments": [{ "text": "limpio", "meaning": "乾淨的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Una habitación limpia.",
          "translation": "一間乾淨的房間。",
          "segments": [
            { "text": "Una", "meaning": "一間", "tail": " " },
            { "text": "habitación", "meaning": "房間(陰性)", "tail": " " },
            { "text": "limpia", "meaning": "乾淨的(陰性)", "tail": "." }
          ]
        },
        {
          "sentence": "Mantén tus manos limpias.",
          "translation": "保持你的雙手乾淨。",
          "segments": [
            { "text": "Mantén", "meaning": "保持", "tail": " " },
            { "text": "tus", "meaning": "你的", "tail": " " },
            { "text": "manos", "meaning": "雙手", "tail": " " },
            { "text": "limpias", "meaning": "乾淨的(陰性複數)", "tail": "." }
          ]
        },
        {
          "sentence": "El agua está limpia.",
          "translation": "這水很乾淨。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "agua", "meaning": "水(接形容詞用陰性)", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "limpia", "meaning": "乾淨的", "tail": "." }
          ]
        }
      ],
      "usage_note": "有陰陽性和單複數的變化 (limpio / limpia / limpios / limpias)。",
      "image_file": "clean.png"
    },
    {
      "id": "adj-21",
      "term_zh": "髒的",
      "related_terms": [
        {
          "term_target": "sucio",
          "pronunciation": ["/ˈsu.sjo/"],
          "specific_note": "",
          "segments": [{ "text": "sucio", "meaning": "髒的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Las manos sucias.",
          "translation": "髒手。",
          "segments": [
            { "text": "Las", "meaning": "這", "tail": " " },
            { "text": "manos", "meaning": "雙手(陰性)", "tail": " " },
            { "text": "sucias", "meaning": "髒的(陰性複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Mis zapatos están sucios.",
          "translation": "我的鞋子髒了。",
          "segments": [
            { "text": "Mis", "meaning": "我的(複數)", "tail": " " },
            { "text": "zapatos", "meaning": "鞋子", "tail": " " },
            { "text": "están", "meaning": "處於", "tail": " " },
            { "text": "sucios", "meaning": "髒的", "tail": "." }
          ]
        },
        {
          "sentence": "No lo toques, está sucio.",
          "translation": "別碰，很髒。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "lo", "meaning": "它", "tail": " " },
            { "text": "toques", "meaning": "你碰(否定命令)", "tail": ", " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "sucio", "meaning": "髒的", "tail": "." }
          ]
        }
      ],
      "usage_note": "因為「髒」是一種可以改變的「狀態」，所以動詞要搭配 estar (處於) 而不是 ser (是)。",
      "image_file": "dirty.png"
    },
    {
      "id": "adj-22",
      "term_zh": "簡單的",
      "related_terms": [
        {
          "term_target": "fácil",
          "pronunciation": ["/ˈfa.sil/"],
          "specific_note": "",
          "segments": [{ "text": "fácil", "meaning": "簡單的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Es muy fácil.",
          "translation": "這非常簡單。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "fácil", "meaning": "簡單的", "tail": "." }
          ]
        },
        {
          "sentence": "Tómatelo con calma.",
          "translation": "放輕鬆 / 別緊張。(Take it easy的西文說法)",
          "segments": [
            { "text": "Tómatelo", "meaning": "自己拿它(toma+te+lo)", "tail": " " },
            { "text": "con", "meaning": "帶著", "tail": " " },
            { "text": "calma", "meaning": "平靜", "tail": "." }
          ]
        },
        {
          "sentence": "El español es fácil.",
          "translation": "西班牙文很簡單。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "español", "meaning": "西班牙文", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "fácil", "meaning": "簡單的", "tail": "." }
          ]
        }
      ],
      "usage_note": "結尾是 l，沒有陰陽性變化（不管前面接男女都是 fácil），但複數要加 es (fáciles)。",
      "image_file": "easy.png"
    },
    {
      "id": "adj-23",
      "term_zh": "困難的",
      "related_terms": [
        {
          "term_target": "difícil",
          "pronunciation": ["/diˈfi.sil/"],
          "specific_note": "",
          "segments": [{ "text": "difícil", "meaning": "困難的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Es difícil.",
          "translation": "很難。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "difícil", "meaning": "困難的", "tail": "." }
          ]
        },
        {
          "sentence": "Esta pregunta es difícil.",
          "translation": "這個問題很難。",
          "segments": [
            { "text": "Esta", "meaning": "這", "tail": " " },
            { "text": "pregunta", "meaning": "問題", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "difícil", "meaning": "困難的", "tail": "." }
          ]
        },
        {
          "sentence": "No es fácil.",
          "translation": "這不簡單 (當地人口語常這樣代替說很難)。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "fácil", "meaning": "簡單的", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟 fácil (簡單) 一樣，結尾是 l，不分陰陽性，複數加 es (difíciles)。",
      "image_file": "difficult.png"
    },
    {
      "id": "adj-24",
      "term_zh": "正確的",
      "related_terms": [
        {
          "term_target": "correcto",
          "pronunciation": ["/koˈrek.to/"],
          "specific_note": "",
          "segments": [{ "text": "correcto", "meaning": "正確的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Respuesta correcta.",
          "translation": "正確答案。",
          "segments": [
            { "text": "Respuesta", "meaning": "答案(陰性)", "tail": " " },
            { "text": "correcta", "meaning": "正確的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Es correcto?",
          "translation": "這正確嗎？",
          "segments": [
            { "text": "¿Es", "meaning": "是", "tail": " " },
            { "text": "correcto?", "meaning": "正確的", "tail": "" }
          ]
        },
        {
          "sentence": "¡Exacto!",
          "translation": "完全正確！ / 沒錯！ (口語極常用)",
          "segments": [
            { "text": "¡Exacto!", "meaning": "精確的", "tail": "" }
          ]
        }
      ],
      "usage_note": "對方講對一件事情，當地人附和時最常脫口而出的字是 ¡Exacto! (沒錯/完全精確)。",
      "image_file": "correct.png"
    },
    {
      "id": "adj-25",
      "term_zh": "錯誤的",
      "related_terms": [
        {
          "term_target": "equivocado",
          "pronunciation": ["/e.ki.βoˈka.ðo/"],
          "specific_note": "",
          "segments": [{ "text": "equivocado", "meaning": "錯誤的/弄錯的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Estás equivocado.",
          "translation": "你弄錯了 / 你錯了。",
          "segments": [
            { "text": "Estás", "meaning": "你處於(狀態)", "tail": " " },
            { "text": "equivocado", "meaning": "弄錯的", "tail": "." }
          ]
        },
        {
          "sentence": "Algo anda mal.",
          "translation": "有點不對勁。 (直譯：有些事走得不好)",
          "segments": [
            { "text": "Algo", "meaning": "某事", "tail": " " },
            { "text": "anda", "meaning": "走/運轉", "tail": " " },
            { "text": "mal", "meaning": "壞地", "tail": "." }
          ]
        },
        {
          "sentence": "Número equivocado.",
          "translation": "打錯電話了 (錯誤的號碼)。",
          "segments": [
            { "text": "Número", "meaning": "號碼", "tail": " " },
            { "text": "equivocado", "meaning": "錯誤的", "tail": "." }
          ]
        }
      ],
      "usage_note": "指「人弄錯了」或「播錯號碼」，最常用的詞是 equivocado。如果指「事情出錯了」，常說 está mal (糟糕的/不對的)。",
      "image_file": "wrong.png"
    },
    {
      "id": "adj-26",
      "term_zh": "重要的",
      "related_terms": [
        {
          "term_target": "importante",
          "pronunciation": ["/im.poɾˈtan.te/"],
          "specific_note": "",
          "segments": [{ "text": "importante", "meaning": "重要的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Reunión importante.",
          "translation": "重要會議。",
          "segments": [
            { "text": "Reunión", "meaning": "會議", "tail": " " },
            { "text": "importante", "meaning": "重要的", "tail": "." }
          ]
        },
        {
          "sentence": "Esto es muy importante.",
          "translation": "這非常重要。",
          "segments": [
            { "text": "Esto", "meaning": "這個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "importante", "meaning": "重要的", "tail": "." }
          ]
        },
        {
          "sentence": "La familia es importante.",
          "translation": "家人很重要。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "familia", "meaning": "家庭/家人", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "importante", "meaning": "重要的", "tail": "." }
          ]
        }
      ],
      "usage_note": "以 e 結尾的形容詞，沒有陰陽性變化，男女通用。",
      "image_file": "important.png"
    },
    {
      "id": "adj-27",
      "term_zh": "不同的",
      "related_terms": [
        {
          "term_target": "diferente",
          "pronunciation": ["/di.feˈɾen.te/"],
          "specific_note": "",
          "segments": [{ "text": "diferente", "meaning": "不同的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Color diferente.",
          "translation": "不同顏色。",
          "segments": [
            { "text": "Color", "meaning": "顏色", "tail": " " },
            { "text": "diferente", "meaning": "不同的", "tail": "." }
          ]
        },
        {
          "sentence": "Tenemos ideas diferentes.",
          "translation": "我們有不同的想法 (注意複數要加s)。",
          "segments": [
            { "text": "Tenemos", "meaning": "我們有", "tail": " " },
            { "text": "ideas", "meaning": "想法", "tail": " " },
            { "text": "diferentes", "meaning": "不同的", "tail": "." }
          ]
        },
        {
          "sentence": "Es diferente al mío.",
          "translation": "這跟我的不一樣。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "diferente", "meaning": "不同的", "tail": " " },
            { "text": "al", "meaning": "比起/於 (a+el)", "tail": " " },
            { "text": "mío", "meaning": "我的", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文表達「A 跟 B 不同」，介系詞通常是用 a (比較)，說 diferente a... (跟...不同)。",
      "image_file": "different.png"
    },
    {
      "id": "adj-28",
      "term_zh": "真的／真實的",
      "related_terms": [
        {
          "term_target": "real",
          "pronunciation": ["/reˈal/"],
          "specific_note": "真實/皇家",
          "segments": [{ "text": "real", "meaning": "真實的", "tail": "" }]
        },
        {
          "term_target": "verdad",
          "pronunciation": ["/beɾˈðað/"],
          "specific_note": "事實(名詞)",
          "segments": [{ "text": "verdad", "meaning": "真實/事實", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Amor real.",
          "translation": "真愛。",
          "segments": [
            { "text": "Amor", "meaning": "愛", "tail": " " },
            { "text": "real", "meaning": "真實的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Es verdad?",
          "translation": "這是真的嗎？(這是事實嗎)",
          "segments": [
            { "text": "¿Es", "meaning": "是", "tail": " " },
            { "text": "verdad?", "meaning": "事實", "tail": "" }
          ]
        },
        {
          "sentence": "¿De verdad?",
          "translation": "真的假的？(聊天驚訝時的口語)",
          "segments": [
            { "text": "¿De", "meaning": "關於", "tail": " " },
            { "text": "verdad?", "meaning": "真實", "tail": "" }
          ]
        }
      ],
      "usage_note": "雖然有 real 這個字，但口語中問「這是真的嗎？」，更常使用名詞 verdad，說 ¿Es verdad? (這是事實嗎)。",
      "image_file": "real.png"
    },
    {
      "id": "adj-29",
      "term_zh": "有趣的",
      "related_terms": [
        {
          "term_target": "interesante",
          "pronunciation": ["/in.te.ɾeˈsan.te/"],
          "specific_note": "引人入勝",
          "segments": [{ "text": "interesante", "meaning": "有趣的", "tail": "" }]
        },
        {
          "term_target": "divertido",
          "pronunciation": ["/di.βeɾˈti.ðo/"],
          "specific_note": "好玩/好笑",
          "segments": [{ "text": "divertido", "meaning": "好玩的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Un libro interesante.",
          "translation": "一本有趣的書 (引人入勝)。",
          "segments": [
            { "text": "Un", "meaning": "一本", "tail": " " },
            { "text": "libro", "meaning": "書", "tail": " " },
            { "text": "interesante", "meaning": "有趣的", "tail": "." }
          ]
        },
        {
          "sentence": "Suena interesante.",
          "translation": "聽起來很有趣。",
          "segments": [
            { "text": "Suena", "meaning": "聽起來", "tail": " " },
            { "text": "interesante", "meaning": "有趣的", "tail": "." }
          ]
        },
        {
          "sentence": "Fue muy divertido.",
          "translation": "那(活動/派對)非常好玩(有趣)。",
          "segments": [
            { "text": "Fue", "meaning": "是(過去式)", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "divertido", "meaning": "好玩的", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文分得比較細：如果是知識性、吸引人的有趣用 interesante；如果是派對、遊戲那種「好玩、好笑」的有趣，要用 divertido。",
      "image_file": "interesting.png"
    },
    {
      "id": "adj-30",
      "term_zh": "美麗的",
      "related_terms": [
        {
          "term_target": "hermoso",
          "pronunciation": ["/eɾˈmo.so/"],
          "specific_note": "非常美麗",
          "segments": [{ "text": "hermoso", "meaning": "美麗的", "tail": "" }]
        },
        {
          "term_target": "bonito",
          "pronunciation": ["/boˈni.to/"],
          "specific_note": "漂亮/好看",
          "segments": [{ "text": "bonito", "meaning": "漂亮的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Una flor hermosa.",
          "translation": "一朵美麗的花。",
          "segments": [
            { "text": "Una", "meaning": "一朵", "tail": " " },
            { "text": "flor", "meaning": "花", "tail": " " },
            { "text": "hermosa", "meaning": "美麗的", "tail": "." }
          ]
        },
        {
          "sentence": "Eres muy hermosa.",
          "translation": "妳很美。",
          "segments": [
            { "text": "Eres", "meaning": "你是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "hermosa", "meaning": "美麗的", "tail": "." }
          ]
        },
        {
          "sentence": "¡Qué día tan bonito!",
          "translation": "多麼美好(漂亮)的一天！",
          "segments": [
            { "text": "¡Qué", "meaning": "多麼", "tail": " " },
            { "text": "día", "meaning": "天", "tail": " " },
            { "text": "tan", "meaning": "如此", "tail": " " },
            { "text": "bonito!", "meaning": "漂亮", "tail": "" }
          ]
        }
      ],
      "usage_note": "hermoso 語氣比較強，是「絕美」；口語日常中稱讚衣服、風景或人「好看、漂亮」，更常用 bonito。",
      "image_file": "beautiful.png"
    },
    {
      "id": "adj-31",
      "term_zh": "便宜的",
      "related_terms": [
        {
          "term_target": "barato",
          "pronunciation": ["/baˈɾa.to/"],
          "specific_note": "",
          "segments": [{ "text": "barato", "meaning": "便宜的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Es muy barato.",
          "translation": "非常便宜。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "barato", "meaning": "便宜的", "tail": "." }
          ]
        },
        {
          "sentence": "Vuelos baratos.",
          "translation": "便宜的機票(航班)。",
          "segments": [
            { "text": "Vuelos", "meaning": "航班(複數)", "tail": " " },
            { "text": "baratos", "meaning": "便宜的(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "¿Tiene algo más barato?",
          "translation": "您有比較便宜的嗎？ (購物殺價神句)",
          "segments": [
            { "text": "¿Tiene", "meaning": "您有", "tail": " " },
            { "text": "algo", "meaning": "某物", "tail": " " },
            { "text": "más", "meaning": "更", "tail": " " },
            { "text": "barato?", "meaning": "便宜的", "tail": "" }
          ]
        }
      ],
      "usage_note": "有陰陽性和單複數變化 (barato / barata / baratos / baratas)。",
      "image_file": "cheap.png"
    },
    {
      "id": "adj-32",
      "term_zh": "昂貴的",
      "related_terms": [
        {
          "term_target": "caro",
          "pronunciation": ["/ˈka.ɾo/"],
          "specific_note": "",
          "segments": [{ "text": "caro", "meaning": "昂貴的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Demasiado caro.",
          "translation": "太貴了。",
          "segments": [
            { "text": "Demasiado", "meaning": "太多/過於", "tail": " " },
            { "text": "caro", "meaning": "貴的", "tail": "." }
          ]
        },
        {
          "sentence": "Un coche caro.",
          "translation": "一台昂貴的車。",
          "segments": [
            { "text": "Un", "meaning": "一台", "tail": " " },
            { "text": "coche", "meaning": "車", "tail": " " },
            { "text": "caro", "meaning": "貴的", "tail": "." }
          ]
        },
        {
          "sentence": "Parece caro.",
          "translation": "它看起來很貴。",
          "segments": [
            { "text": "Parece", "meaning": "看起來像", "tail": " " },
            { "text": "caro", "meaning": "貴的", "tail": "." }
          ]
        }
      ],
      "usage_note": "買東西覺得太貴，可以直接皺著眉頭說 ¡Muy caro! (很貴！)。",
      "image_file": "expensive.png"
    },
    {
      "id": "adj-33",
      "term_zh": "飢餓的",
      "related_terms": [
        {
          "term_target": "hambre",
          "pronunciation": ["/ˈam.bɾe/"],
          "specific_note": "名詞，搭配 tener 使用",
          "segments": [{ "text": "hambre", "meaning": "飢餓(名詞)", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tengo hambre.",
          "translation": "我餓了。 (直譯：我有飢餓)",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "hambre", "meaning": "飢餓", "tail": "." }
          ]
        },
        {
          "sentence": "¿Tienes hambre?",
          "translation": "你餓了嗎？",
          "segments": [
            { "text": "¿Tienes", "meaning": "你有", "tail": " " },
            { "text": "hambre?", "meaning": "飢餓", "tail": "" }
          ]
        },
        {
          "sentence": "El bebé tiene hambre.",
          "translation": "寶寶餓了。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "bebé", "meaning": "寶寶", "tail": " " },
            { "text": "tiene", "meaning": "有", "tail": " " },
            { "text": "hambre", "meaning": "飢餓", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！西文不說「我是餓的 (I am hungry)」，而是說「我有飢餓 (Tengo hambre)」，這是非常重要的差異！",
      "image_file": "hungry.png"
    },
    {
      "id": "adj-34",
      "term_zh": "疲累的",
      "related_terms": [
        {
          "term_target": "cansado",
          "pronunciation": ["/kanˈsa.ðo/"],
          "specific_note": "",
          "segments": [{ "text": "cansado", "meaning": "疲累的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Estoy cansado.",
          "translation": "我(男生)累了。",
          "segments": [
            { "text": "Estoy", "meaning": "我處於", "tail": " " },
            { "text": "cansado", "meaning": "累的狀態", "tail": "." }
          ]
        },
        {
          "sentence": "Estoy cansada de esperar.",
          "translation": "我(女生)等累了/厭倦了。",
          "segments": [
            { "text": "Estoy", "meaning": "我處於", "tail": " " },
            { "text": "cansada", "meaning": "累的", "tail": " " },
            { "text": "de", "meaning": "對...", "tail": " " },
            { "text": "esperar", "meaning": "等待", "tail": "." }
          ]
        },
        {
          "sentence": "Te ves cansado.",
          "translation": "你看起來很累。",
          "segments": [
            { "text": "Te", "meaning": "你自己", "tail": " " },
            { "text": "ves", "meaning": "看", "tail": " " },
            { "text": "cansado", "meaning": "累的", "tail": "." }
          ]
        }
      ],
      "usage_note": "疲累是一種可以改變的「狀態」，所以要搭配 estar (estoy cansado)。如果是女生說自己累了，要改成 cansada 喔！",
      "image_file": "tired.png"
    },
    {
      "id": "adj-35",
      "term_zh": "忙碌的",
      "related_terms": [
        {
          "term_target": "ocupado",
          "pronunciation": ["/o.kuˈpa.ðo/"],
          "specific_note": "被佔用的",
          "segments": [{ "text": "ocupado", "meaning": "忙碌的/佔用的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Estoy muy ocupado.",
          "translation": "我(男生)很忙。",
          "segments": [
            { "text": "Estoy", "meaning": "我處於", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "ocupado", "meaning": "被佔用的", "tail": "." }
          ]
        },
        {
          "sentence": "Calle concurrida.",
          "translation": "繁忙的街道。(街道不用ocupado)",
          "segments": [
            { "text": "Calle", "meaning": "街道", "tail": " " },
            { "text": "concurrida", "meaning": "擁擠的/繁忙的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Estás ocupada ahora?",
          "translation": "妳(女生)現在忙嗎？",
          "segments": [
            { "text": "¿Estás", "meaning": "你處於", "tail": " " },
            { "text": "ocupada", "meaning": "忙碌的(陰性)", "tail": " " },
            { "text": "ahora?", "meaning": "現在", "tail": "" }
          ]
        }
      ],
      "usage_note": "西文表達人很忙，是用 ocupado (時間被佔用的)。如果是指廁所/座位「有人使用」，也是用這個字！",
      "image_file": "busy.png"
    },
    {
      "id": "adj-36",
      "term_zh": "高興的",
      "related_terms": [
        {
          "term_target": "feliz / contento",
          "pronunciation": ["/feˈlis/, /konˈten.to/"],
          "specific_note": "",
          "segments": [
            { "text": "feliz", "meaning": "快樂/幸福", "tail": " / " },
            { "text": "contento", "meaning": "高興/滿意", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¡Feliz cumpleaños!",
          "translation": "生日快樂！",
          "segments": [
            { "text": "¡Feliz", "meaning": "快樂的", "tail": " " },
            { "text": "cumpleaños!", "meaning": "生日", "tail": "" }
          ]
        },
        {
          "sentence": "Estoy muy contento.",
          "translation": "我(男生)現在很開心。",
          "segments": [
            { "text": "Estoy", "meaning": "我處於", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "contento", "meaning": "高興的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Eres feliz?",
          "translation": "你(天性/生活)過得快樂嗎？",
          "segments": [
            { "text": "¿Eres", "meaning": "你是", "tail": " " },
            { "text": "feliz?", "meaning": "快樂的", "tail": "" }
          ]
        }
      ],
      "usage_note": "feliz 比較偏向長期的「幸福/快樂」，contento 比較像是當下心情很好的「開心/滿意」。",
      "image_file": "happy.png"
    },
    {
      "id": "adj-37",
      "term_zh": "悲傷的",
      "related_terms": [
        {
          "term_target": "triste",
          "pronunciation": ["/ˈtɾis.te/"],
          "specific_note": "",
          "segments": [{ "text": "triste", "meaning": "悲傷的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Historia triste.",
          "translation": "悲傷的故事。",
          "segments": [
            { "text": "Historia", "meaning": "故事", "tail": " " },
            { "text": "triste", "meaning": "悲傷的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Por qué estás triste?",
          "translation": "你為什麼難過？",
          "segments": [
            { "text": "¿Por", "meaning": "為", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "estás", "meaning": "你處於", "tail": " " },
            { "text": "triste?", "meaning": "悲傷", "tail": "" }
          ]
        },
        {
          "sentence": "No estés triste.",
          "translation": "別難過了。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "estés", "meaning": "你處於(否定命令)", "tail": " " },
            { "text": "triste", "meaning": "悲傷的", "tail": "." }
          ]
        }
      ],
      "usage_note": "以 e 結尾，不分陰陽性，男女生說自己很難過都是 estoy triste。",
      "image_file": "sad.png"
    },
    {
      "id": "adj-38",
      "term_zh": "相似的",
      "related_terms": [
        {
          "term_target": "similar / parecido",
          "pronunciation": ["/si.miˈlaɾ/, /pa.ɾeˈsi.ðo/"],
          "specific_note": "",
          "segments": [
            { "text": "similar", "meaning": "相似的", "tail": " / " },
            { "text": "parecido", "meaning": "相像的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Color similar.",
          "translation": "相似的顏色。",
          "segments": [
            { "text": "Color", "meaning": "顏色", "tail": " " },
            { "text": "similar", "meaning": "相似的", "tail": "." }
          ]
        },
        {
          "sentence": "Se ven muy parecidos.",
          "translation": "他們看起來非常像。",
          "segments": [
            { "text": "Se", "meaning": "互相/自己", "tail": " " },
            { "text": "ven", "meaning": "看起來", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "parecidos", "meaning": "相像的(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Tenemos gustos similares.",
          "translation": "我們品味相似。",
          "segments": [
            { "text": "Tenemos", "meaning": "我們有", "tail": " " },
            { "text": "gustos", "meaning": "品味", "tail": " " },
            { "text": "similares", "meaning": "相似的(複數)", "tail": "." }
          ]
        }
      ],
      "usage_note": "similar 比較常修飾物品或概念；如果是指兩個人「長得很像」，通常會用 parecido。",
      "image_file": "similar.png"
    },
    {
      "id": "adj-39",
      "term_zh": "有名的",
      "related_terms": [
        {
          "term_target": "famoso",
          "pronunciation": ["/faˈmo.so/"],
          "specific_note": "",
          "segments": [{ "text": "famoso", "meaning": "有名的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Cantante famoso.",
          "translation": "知名歌手。",
          "segments": [
            { "text": "Cantante", "meaning": "歌手", "tail": " " },
            { "text": "famoso", "meaning": "有名的", "tail": "." }
          ]
        },
        {
          "sentence": "Este lugar es famoso por su comida.",
          "translation": "這地方以美食(它的食物)聞名。",
          "segments": [
            { "text": "Este", "meaning": "這", "tail": " " },
            { "text": "lugar", "meaning": "地方", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "famoso", "meaning": "有名的", "tail": " " },
            { "text": "por", "meaning": "因為", "tail": " " },
            { "text": "su", "meaning": "它的", "tail": " " },
            { "text": "comida", "meaning": "食物", "tail": "." }
          ]
        },
        {
          "sentence": "Él quiere ser famoso.",
          "translation": "他想出名。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "quiere", "meaning": "想要", "tail": " " },
            { "text": "ser", "meaning": "是(成為)", "tail": " " },
            { "text": "famoso", "meaning": "有名的", "tail": "." }
          ]
        }
      ],
      "usage_note": "如果是知名女性，字尾要改成 famosa。",
      "image_file": "famous.png"
    },
    {
      "id": "adj-40",
      "term_zh": "外國的",
      "related_terms": [
        {
          "term_target": "extranjero",
          "pronunciation": ["/eks.tɾanˈxe.ɾo/"],
          "specific_note": "",
          "segments": [{ "text": "extranjero", "meaning": "外國的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "País extranjero.",
          "translation": "外國 (外國的國家)。",
          "segments": [
            { "text": "País", "meaning": "國家", "tail": " " },
            { "text": "extranjero", "meaning": "外國的", "tail": "." }
          ]
        },
        {
          "sentence": "Idioma extranjero.",
          "translation": "外語。",
          "segments": [
            { "text": "Idioma", "meaning": "語言", "tail": " " },
            { "text": "extranjero", "meaning": "外國的", "tail": "." }
          ]
        },
        {
          "sentence": "Soy extranjero.",
          "translation": "我是外國人。",
          "segments": [
            { "text": "Soy", "meaning": "我是", "tail": " " },
            { "text": "extranjero", "meaning": "外國人(名詞/形容詞)", "tail": "." }
          ]
        }
      ],
      "usage_note": "extranjero 既可以當形容詞「外國的」，也可以直接當名詞「外國人」使用(女性則為 extranjera)。",
      "image_file": "foreign.png"
    },
    {
      "id": "adj-41",
      "term_zh": "聰明的",
      "related_terms": [
        {
          "term_target": "inteligente / listo",
          "pronunciation": ["/in.te.liˈxen.te/, /ˈlis.to/"],
          "specific_note": "智商高/機靈",
          "segments": [
            { "text": "inteligente", "meaning": "聰明的", "tail": " / " },
            { "text": "listo", "meaning": "機靈的/準備好的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Es un chico muy inteligente.",
          "translation": "他是個非常聰明的男孩。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "chico", "meaning": "男孩", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "inteligente", "meaning": "聰明的", "tail": "." }
          ]
        },
        {
          "sentence": "¡Qué listo eres!",
          "translation": "你真聰明(機靈)！",
          "segments": [
            { "text": "¡Qué", "meaning": "多麼", "tail": " " },
            { "text": "listo", "meaning": "機靈", "tail": " " },
            { "text": "eres!", "meaning": "你是", "tail": "" }
          ]
        },
        {
          "sentence": "Buena idea.",
          "translation": "好主意 (西文不常說聰明的問題，常說好主意)。",
          "segments": [
            { "text": "Buena", "meaning": "好的(陰性)", "tail": " " },
            { "text": "idea", "meaning": "點子", "tail": "." }
          ]
        }
      ],
      "usage_note": "inteligente 比較像學術上的聰明 (智商高)；口語中稱讚別人反應快、腦筋動得快，更常說 listo (機靈)。",
      "image_file": "intelligent.png"
    },
    {
      "id": "adj-42",
      "term_zh": "危險的",
      "related_terms": [
        {
          "term_target": "peligroso / peligro",
          "pronunciation": ["/pe.liˈɣɾo.so/, /peˈli.ɣɾo/"],
          "specific_note": "",
          "segments": [
            { "text": "peligroso", "meaning": "危險的(形容詞)", "tail": " / " },
            { "text": "peligro", "meaning": "危險(名詞)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Es muy peligroso.",
          "translation": "這非常危險。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "peligroso", "meaning": "危險的", "tail": "." }
          ]
        },
        {
          "sentence": "Hay peligro.",
          "translation": "有危險 (常見告示牌)。",
          "segments": [
            { "text": "Hay", "meaning": "有", "tail": " " },
            { "text": "peligro", "meaning": "危險(名詞)", "tail": "." }
          ]
        },
        {
          "sentence": "No vayas allí, es peligroso.",
          "translation": "別去那裡，很危險。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "vayas", "meaning": "你去(否定命令)", "tail": " " },
            { "text": "allí", "meaning": "那裡", "tail": ", " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "peligroso", "meaning": "危險的", "tail": "." }
          ]
        }
      ],
      "usage_note": "在西語系國家，看到標示著 Peligro 的地方，請務必遠離！",
      "image_file": "dangerous.png"
    },
    {
      "id": "adj-43",
      "term_zh": "仁慈的 / 親切的",
      "related_terms": [
        {
          "term_target": "amable / simpático",
          "pronunciation": ["/aˈma.βle/, /simˈpa.ti.ko/"],
          "specific_note": "友善/討喜",
          "segments": [
            { "text": "amable", "meaning": "親切的", "tail": " / " },
            { "text": "simpático", "meaning": "討喜/友善的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Es una persona muy amable.",
          "translation": "他(她)是個非常親切的人。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "una", "meaning": "一個", "tail": " " },
            { "text": "persona", "meaning": "人(陰性)", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "amable", "meaning": "親切的", "tail": "." }
          ]
        },
        {
          "sentence": "Eres muy amable.",
          "translation": "你人真好 (你非常親切)。",
          "segments": [
            { "text": "Eres", "meaning": "你是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "amable", "meaning": "親切的", "tail": "." }
          ]
        },
        {
          "sentence": "Él es muy simpático.",
          "translation": "他這個人很友善(很好相處)。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "simpático", "meaning": "討喜的", "tail": "." }
          ]
        }
      ],
      "usage_note": "Amable 是指對人客氣、有禮貌的「好」；Simpático 是指個性幽默、好相處、討人喜歡的「好」。",
      "image_file": "kind.png"
    },
    {
      "id": "adj-44",
      "term_zh": "所有的／每一個",
      "related_terms": [
        {
          "term_target": "todo / cada",
          "pronunciation": ["/ˈto.ðo/, /ˈka.ða/"],
          "specific_note": "全部/每個",
          "segments": [
            { "text": "todo", "meaning": "全部(搭定冠詞)", "tail": " / " },
            { "text": "cada", "meaning": "每個(接單數)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Todos los días.",
          "translation": "每一天 (所有的天)。",
          "segments": [
            { "text": "Todos", "meaning": "全部(陽性複數)", "tail": " " },
            { "text": "los", "meaning": "這", "tail": " " },
            { "text": "días", "meaning": "天(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Cada persona tiene uno.",
          "translation": "每個人都有一個。",
          "segments": [
            { "text": "Cada", "meaning": "每個", "tail": " " },
            { "text": "persona", "meaning": "人", "tail": " " },
            { "text": "tiene", "meaning": "有", "tail": " " },
            { "text": "uno", "meaning": "一個", "tail": "." }
          ]
        },
        {
          "sentence": "Todo el mundo lo sabe.",
          "translation": "每個人(全世界)都知道。",
          "segments": [
            { "text": "Todo", "meaning": "全部", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "mundo", "meaning": "世界", "tail": " " },
            { "text": "lo", "meaning": "它", "tail": " " },
            { "text": "sabe", "meaning": "知道", "tail": "." }
          ]
        }
      ],
      "usage_note": "Todo 後面要接定冠詞 (el/la/los/las)，有陰陽性與單複數變化；Cada 後面直接接單數名詞，不分性別。",
      "image_file": "every.png"
    },
    {
      "id": "adj-45",
      "term_zh": "喜愛的 / 最愛的",
      "related_terms": [
        {
          "term_target": "favorito",
          "pronunciation": ["/fa.βoˈɾi.to/"],
          "specific_note": "",
          "segments": [{ "text": "favorito", "meaning": "最愛的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mi comida favorita.",
          "translation": "我最愛的食物。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "comida", "meaning": "食物(陰性)", "tail": " " },
            { "text": "favorita", "meaning": "最愛的(陰性)", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuál es tu color favorito?",
          "translation": "你最喜歡什麼顏色？",
          "segments": [
            { "text": "¿Cuál", "meaning": "哪一個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "color", "meaning": "顏色(陽性)", "tail": " " },
            { "text": "favorito?", "meaning": "最愛的(陽性)", "tail": "" }
          ]
        },
        {
          "sentence": "Es mi canción favorita.",
          "translation": "這是我最喜歡的歌。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "canción", "meaning": "歌(陰性)", "tail": " " },
            { "text": "favorita", "meaning": "最愛的(陰性)", "tail": "." }
          ]
        }
      ],
      "usage_note": "因為是形容詞，所以要配合前面的名詞做陰陽性變化 (例如：食物是陰性，所以是 comida favorita)。",
      "image_file": "favorite.png"
    },
    {
      "id": "adj-46",
      "term_zh": "美味的",
      "related_terms": [
        {
          "term_target": "rico / delicioso",
          "pronunciation": ["/ˈri.ko/, /de.liˈsjo.so/"],
          "specific_note": "豐富好吃/美味",
          "segments": [
            { "text": "rico", "meaning": "好吃的/豐富的", "tail": " / " },
            { "text": "delicioso", "meaning": "美味的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¡Qué rico!",
          "translation": "好好吃！ (吃到美食時最常發出的讚嘆)",
          "segments": [
            { "text": "¡Qué", "meaning": "多麼", "tail": " " },
            { "text": "rico!", "meaning": "好吃/豐富", "tail": "" }
          ]
        },
        {
          "sentence": "La comida está muy rica.",
          "translation": "這食物非常好吃。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "comida", "meaning": "食物(陰性)", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "rica", "meaning": "好吃的", "tail": "." }
          ]
        },
        {
          "sentence": "Está delicioso.",
          "translation": "這很美味。",
          "segments": [
            { "text": "Está", "meaning": "狀態是", "tail": " " },
            { "text": "delicioso", "meaning": "美味的", "tail": "." }
          ]
        }
      ],
      "usage_note": "比起 delicioso，西語母語人士吃到好吃的東西，最常脫口而出的其實是 ¡Qué rico! (直譯：多麼豐富啊！)。",
      "image_file": "delicious.png"
    }
  ]
},
{
  "id": "nouns",
  "name": "常用名詞",
  "items": [
    {
      "id": "n-01",
      "term_zh": "時間",
      "related_terms": [
        {
          "term_target": "hora / tiempo",
          "pronunciation": ["/ˈo.ɾa/, /ˈtjem.po/"],
          "specific_note": "時刻/時光",
          "segments": [
            { "text": "hora", "meaning": "小時/時刻", "tail": " / " },
            { "text": "tiempo", "meaning": "時間/天氣", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Qué hora es?",
          "translation": "現在幾點？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時刻", "tail": " " },
            { "text": "es?", "meaning": "是", "tail": "" }
          ]
        },
        {
          "sentence": "No tengo tiempo.",
          "translation": "我沒時間。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "tengo", "meaning": "我有", "tail": " " },
            { "text": "tiempo", "meaning": "時間", "tail": "." }
          ]
        },
        {
          "sentence": "Es hora de comer.",
          "translation": "吃飯時間到了 (是時候吃了)。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "hora", "meaning": "時刻", "tail": " " },
            { "text": "de", "meaning": "去", "tail": " " },
            { "text": "comer", "meaning": "吃", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文分很細：「幾點鐘」要用 hora；「花費多久時間」用 tiempo。h 不發音，hora 唸起來像歐拉。",
      "image_file": "time.png"
    },
    {
      "id": "n-02",
      "term_zh": "人們",
      "related_terms": [
        {
          "term_target": "gente / personas",
          "pronunciation": ["/ˈxen.te/, /peɾˈso.nas/"],
          "specific_note": "人群/人們",
          "segments": [
            { "text": "gente", "meaning": "人群(單數)", "tail": " / " },
            { "text": "personas", "meaning": "人們(複數)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hay mucha gente.",
          "translation": "有很多人。",
          "segments": [
            { "text": "Hay", "meaning": "有", "tail": " " },
            { "text": "mucha", "meaning": "許多(陰性)", "tail": " " },
            { "text": "gente", "meaning": "人群", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuántas personas hay?",
          "translation": "有幾個人？",
          "segments": [
            { "text": "¿Cuántas", "meaning": "多少(陰性複數)", "tail": " " },
            { "text": "personas", "meaning": "人們", "tail": " " },
            { "text": "hay?", "meaning": "有", "tail": "" }
          ]
        },
        {
          "sentence": "La gente aquí es muy amable.",
          "translation": "這裡的人很親切。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "gente", "meaning": "人群", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": " " },
            { "text": "es", "meaning": "是(單數)", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "amable", "meaning": "親切", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！英文的 people 搭配複數動詞 (are)，但西文的 gente 是一個「單數」名詞集合，所以要接單數動詞 (La gente es...)。",
      "image_file": "people.png"
    },
    {
      "id": "n-03",
      "term_zh": "金錢",
      "related_terms": [
        {
          "term_target": "dinero / efectivo",
          "pronunciation": ["/diˈne.ɾo/, /e.fekˈti.βo/"],
          "specific_note": "錢/現金",
          "segments": [
            { "text": "dinero", "meaning": "錢", "tail": " / " },
            { "text": "efectivo", "meaning": "現金", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "No tengo dinero.",
          "translation": "我沒錢。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "tengo", "meaning": "我有", "tail": " " },
            { "text": "dinero", "meaning": "錢", "tail": "." }
          ]
        },
        {
          "sentence": "Cuesta mucho dinero.",
          "translation": "這要花很多錢。",
          "segments": [
            { "text": "Cuesta", "meaning": "花費", "tail": " " },
            { "text": "mucho", "meaning": "很多", "tail": " " },
            { "text": "dinero", "meaning": "錢", "tail": "." }
          ]
        },
        {
          "sentence": "¿Aceptan efectivo?",
          "translation": "你們收現金嗎？ (購物神句)",
          "segments": [
            { "text": "¿Aceptan", "meaning": "你們接受", "tail": " " },
            { "text": "efectivo?", "meaning": "現金", "tail": "" }
          ]
        }
      ],
      "usage_note": "在很多中南美洲國家，大家習慣用 plata (白銀) 這個字來代替 dinero 泛指「錢」。",
      "image_file": "money.png"
    },
    {
      "id": "n-04",
      "term_zh": "孩子",
      "related_terms": [
        {
          "term_target": "niño / hijo",
          "pronunciation": ["/ˈni.ɲo/, /ˈi.xo/"],
          "specific_note": "小孩/自己的孩子",
          "segments": [
            { "text": "niño", "meaning": "小孩/男童", "tail": " / " },
            { "text": "hijo", "meaning": "兒子/自己的小孩", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Tienes hijos?",
          "translation": "你有小孩嗎？",
          "segments": [
            { "text": "¿Tienes", "meaning": "你有", "tail": " " },
            { "text": "hijos?", "meaning": "自己的孩子(複數)", "tail": "" }
          ]
        },
        {
          "sentence": "Los niños están jugando.",
          "translation": "小孩子們正在玩。",
          "segments": [
            { "text": "Los", "meaning": "這些", "tail": " " },
            { "text": "niños", "meaning": "小孩們", "tail": " " },
            { "text": "están", "meaning": "正在", "tail": " " },
            { "text": "jugando", "meaning": "玩(進行式)", "tail": "." }
          ]
        },
        {
          "sentence": "Es solo un niño.",
          "translation": "他還只是個孩子。",
          "segments": [
            { "text": "Es", "meaning": "他是", "tail": " " },
            { "text": "solo", "meaning": "只是", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "niño", "meaning": "男孩", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟別人聊「你有小孩嗎」要用 hijos (字面上是兒子，但複數泛指子女)。路上看到的小孩則是 niños (男童) 或 niñas (女童)。",
      "image_file": "child.png"
    },
    {
      "id": "n-05",
      "term_zh": "水",
      "related_terms": [
        {
          "term_target": "agua",
          "pronunciation": ["/ˈa.ɣwa/"],
          "specific_note": "",
          "segments": [{ "text": "agua", "meaning": "水", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Un vaso de agua, por favor.",
          "translation": "請給我一杯水。 (點餐必備)",
          "segments": [
            { "text": "Un", "meaning": "一個", "tail": " " },
            { "text": "vaso", "meaning": "玻璃杯", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "agua", "meaning": "水", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Quiero beber agua.",
          "translation": "我想喝水。",
          "segments": [
            { "text": "Quiero", "meaning": "我想要", "tail": " " },
            { "text": "beber", "meaning": "喝", "tail": " " },
            { "text": "agua", "meaning": "水", "tail": "." }
          ]
        },
        {
          "sentence": "El agua está muy fría.",
          "translation": "這水很冰(冷)。",
          "segments": [
            { "text": "El", "meaning": "這(陽性冠詞)", "tail": " " },
            { "text": "agua", "meaning": "水(陰性名詞)", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "fría", "meaning": "冷的(陰性形容詞)", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！agua 是「陰性」名詞，但為了避開發音打架，前面要配陽性冠詞 El agua，但後面的形容詞還是要乖乖用陰性 (fría)。",
      "image_file": "water.png"
    },
    {
      "id": "n-06",
      "term_zh": "食物",
      "related_terms": [
        {
          "term_target": "comida",
          "pronunciation": ["/koˈmi.ða/"],
          "specific_note": "",
          "segments": [{ "text": "comida", "meaning": "食物/午餐", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "La comida está muy rica.",
          "translation": "食物非常好吃。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "comida", "meaning": "食物", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "rica", "meaning": "美味的(陰性)", "tail": "." }
          ]
        },
        {
          "sentence": "Me encanta la comida mexicana.",
          "translation": "我超愛墨西哥食物。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "encanta", "meaning": "極喜歡", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "comida", "meaning": "食物", "tail": " " },
            { "text": "mexicana", "meaning": "墨西哥的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué tipo de comida te gusta?",
          "translation": "你喜歡哪種類型的食物？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "tipo", "meaning": "類型", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "comida", "meaning": "食物", "tail": " " },
            { "text": "te", "meaning": "對你", "tail": " " },
            { "text": "gusta?", "meaning": "令人喜歡", "tail": "" }
          ]
        }
      ],
      "usage_note": "Comida 泛指食物，但在很多西語國家，它也特別指一天當中最豐盛的那一餐「午餐」。",
      "image_file": "food.png"
    },
    {
      "id": "n-07",
      "term_zh": "朋友",
      "related_terms": [
        {
          "term_target": "amigo / amiga",
          "pronunciation": ["/aˈmi.ɣo/, /aˈmi.ɣa/"],
          "specific_note": "分陰陽性",
          "segments": [
            { "text": "amigo", "meaning": "男性朋友", "tail": " / " },
            { "text": "amiga", "meaning": "女性朋友", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Él es mi amigo.",
          "translation": "他是我的朋友。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "amigo", "meaning": "朋友(男)", "tail": "." }
          ]
        },
        {
          "sentence": "Voy a salir con mis amigos.",
          "translation": "我要跟朋友們出去。",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "a", "meaning": "去", "tail": " " },
            { "text": "salir", "meaning": "外出", "tail": " " },
            { "text": "con", "meaning": "和", "tail": " " },
            { "text": "mis", "meaning": "我的(複數)", "tail": " " },
            { "text": "amigos", "meaning": "朋友們", "tail": "." }
          ]
        },
        {
          "sentence": "Somos buenos amigos.",
          "translation": "我們是好朋友。",
          "segments": [
            { "text": "Somos", "meaning": "我們是", "tail": " " },
            { "text": "buenos", "meaning": "好的(複數)", "tail": " " },
            { "text": "amigos", "meaning": "朋友們", "tail": "." }
          ]
        }
      ],
      "usage_note": "男生朋友是 amigo，女生朋友是 amiga。如果是一群朋友(有男有女) 則統稱用陽性複數 amigos。",
      "image_file": "friend.png"
    },
    {
      "id": "n-08",
      "term_zh": "家庭",
      "related_terms": [
        {
          "term_target": "familia",
          "pronunciation": ["/faˈmi.lja/"],
          "specific_note": "",
          "segments": [{ "text": "familia", "meaning": "家庭/家人", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tengo una familia grande.",
          "translation": "我有一個大家庭。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "una", "meaning": "一個", "tail": " " },
            { "text": "familia", "meaning": "家庭(陰性)", "tail": " " },
            { "text": "grande", "meaning": "大的", "tail": "." }
          ]
        },
        {
          "sentence": "Amo a mi familia.",
          "translation": "我愛我的家人。",
          "segments": [
            { "text": "Amo", "meaning": "我愛", "tail": " " },
            { "text": "a", "meaning": "對(接受詞為人時使用)", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "familia", "meaning": "家人", "tail": "." }
          ]
        },
        {
          "sentence": "Saludos a tu familia.",
          "translation": "代我向你家人問好。 (非常道地的客套話)",
          "segments": [
            { "text": "Saludos", "meaning": "問候(複數)", "tail": " " },
            { "text": "a", "meaning": "對/向", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "familia", "meaning": "家人", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的 familia 是指「整個家庭」這個整體，所以當主詞時是單數。",
      "image_file": "family.png"
    },
    {
      "id": "n-09",
      "term_zh": "學生",
      "related_terms": [
        {
          "term_target": "estudiante",
          "pronunciation": ["/es.tuˈðjan.te/"],
          "specific_note": "",
          "segments": [{ "text": "estudiante", "meaning": "學生", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Soy estudiante.",
          "translation": "我是學生。",
          "segments": [
            { "text": "Soy", "meaning": "我是", "tail": " " },
            { "text": "estudiante", "meaning": "學生", "tail": "." }
          ]
        },
        {
          "sentence": "Es un estudiante de intercambio.",
          "translation": "他是交換學生。",
          "segments": [
            { "text": "Es", "meaning": "他是", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "estudiante", "meaning": "學生", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "intercambio", "meaning": "交換", "tail": "." }
          ]
        },
        {
          "sentence": "Los estudiantes están estudiando.",
          "translation": "學生們正在讀書。",
          "segments": [
            { "text": "Los", "meaning": "這些", "tail": " " },
            { "text": "estudiantes", "meaning": "學生們", "tail": " " },
            { "text": "están", "meaning": "正在", "tail": " " },
            { "text": "estudiando", "meaning": "學習(進行式)", "tail": "." }
          ]
        }
      ],
      "usage_note": "以 e 結尾，不分陰陽性 (男生女生都是 estudiante)。介紹自己職業時，西文前面不加「一個 (un/una)」，直接說 Soy estudiante。",
      "image_file": "student.png"
    },
    {
      "id": "n-10",
      "term_zh": "文化",
      "related_terms": [
        {
          "term_target": "cultura",
          "pronunciation": ["/kulˈtu.ɾa/"],
          "specific_note": "",
          "segments": [{ "text": "cultura", "meaning": "文化", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Me gusta la cultura española.",
          "translation": "我喜歡西班牙文化。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "cultura", "meaning": "文化(陰性)", "tail": " " },
            { "text": "española", "meaning": "西班牙的(陰性)", "tail": "." }
          ]
        },
        {
          "sentence": "Es un choque cultural.",
          "translation": "這是一種文化衝擊。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "choque", "meaning": "衝擊", "tail": " " },
            { "text": "cultural", "meaning": "文化的(形容詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Quiero conocer su cultura.",
          "translation": "我想了解他們的文化。",
          "segments": [
            { "text": "Quiero", "meaning": "我想", "tail": " " },
            { "text": "conocer", "meaning": "認識/了解", "tail": " " },
            { "text": "su", "meaning": "他們的", "tail": " " },
            { "text": "cultura", "meaning": "文化", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性名詞，後面接形容詞時要記得配合字尾，例如 cultura rica (豐富的文化)。",
      "image_file": "culture.png"
    },
    {
      "id": "n-11",
      "term_zh": "問題",
      "related_terms": [
        {
          "term_target": "problema / pregunta",
          "pronunciation": ["/pɾoˈβle.ma/, /pɾeˈɣun.ta/"],
          "specific_note": "困難/發問",
          "segments": [
            { "text": "problema", "meaning": "麻煩/難題", "tail": " / " },
            { "text": "pregunta", "meaning": "疑問(舉手發問)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "No hay problema.",
          "translation": "沒問題 (沒麻煩)。",
          "segments": [
            { "text": "No", "meaning": "沒有", "tail": " " },
            { "text": "hay", "meaning": "有", "tail": " " },
            { "text": "problema", "meaning": "問題", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo una pregunta.",
          "translation": "我有一個問題 (舉手想發問)。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "una", "meaning": "一個", "tail": " " },
            { "text": "pregunta", "meaning": "疑問", "tail": "." }
          ]
        },
        {
          "sentence": "Tenemos un gran problema.",
          "translation": "我們遇上大麻煩(大問題)了。",
          "segments": [
            { "text": "Tenemos", "meaning": "我們有", "tail": " " },
            { "text": "un", "meaning": "一個(陽性)", "tail": " " },
            { "text": "gran", "meaning": "大的", "tail": " " },
            { "text": "problema", "meaning": "難題", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！problema 字尾雖然是 a，但它是「陽性 (el problema)」。還有，遇上困難叫 problema，舉手發問是 pregunta！",
      "image_file": "problem.png"
    },
    {
      "id": "n-12",
      "term_zh": "公司",
      "related_terms": [
        {
          "term_target": "empresa / compañía",
          "pronunciation": ["/emˈpɾe.sa/, /kom.paˈɲi.a/"],
          "specific_note": "",
          "segments": [
            { "text": "empresa", "meaning": "企業/公司", "tail": " / " },
            { "text": "compañía", "meaning": "公司", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Trabajo en una empresa.",
          "translation": "我在一間公司上班。",
          "segments": [
            { "text": "Trabajo", "meaning": "我工作", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "una", "meaning": "一間", "tail": " " },
            { "text": "empresa", "meaning": "公司", "tail": "." }
          ]
        },
        {
          "sentence": "Es una empresa muy grande.",
          "translation": "這是一間很大的企業。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "una", "meaning": "一間", "tail": " " },
            { "text": "empresa", "meaning": "公司", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "grande", "meaning": "大的", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo mi propia empresa.",
          "translation": "我有我自己的公司 (我自己創業)。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "propia", "meaning": "自己的(陰性)", "tail": " " },
            { "text": "empresa", "meaning": "公司", "tail": "." }
          ]
        }
      ],
      "usage_note": "兩個字都很常用，empresa 在商業或指代「企業」時非常普遍。",
      "image_file": "company.png"
    },
    {
      "id": "n-13",
      "term_zh": "男性 / 先生",
      "related_terms": [
        {
          "term_target": "hombre / señor",
          "pronunciation": ["/ˈom.bɾe/, /seˈɲoɾ/"],
          "specific_note": "男人/男士(尊稱)",
          "segments": [
            { "text": "hombre", "meaning": "男人", "tail": " / " },
            { "text": "señor", "meaning": "先生", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Es un buen hombre.",
          "translation": "他是個好男人。",
          "segments": [
            { "text": "Es", "meaning": "他是", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "buen", "meaning": "好的", "tail": " " },
            { "text": "hombre", "meaning": "男人", "tail": "." }
          ]
        },
        {
          "sentence": "Ese señor es mi jefe.",
          "translation": "那位先生是我的老闆。",
          "segments": [
            { "text": "Ese", "meaning": "那位", "tail": " " },
            { "text": "señor", "meaning": "先生", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "jefe", "meaning": "老闆", "tail": "." }
          ]
        },
        {
          "sentence": "Un hombre guapo.",
          "translation": "一個帥氣的男人。",
          "segments": [
            { "text": "Un", "meaning": "一個", "tail": " " },
            { "text": "hombre", "meaning": "男人", "tail": " " },
            { "text": "guapo", "meaning": "帥氣的", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的 h 不發音。如果你在路上要稱呼不認識的成年男性，用 señor (先生) 比較有禮貌。",
      "image_file": "man.png"
    },
    {
      "id": "n-14",
      "term_zh": "女性 / 女士",
      "related_terms": [
        {
          "term_target": "mujer / señora",
          "pronunciation": ["/muˈxeɾ/, /seˈɲo.ɾa/"],
          "specific_note": "女人/女士(尊稱)",
          "segments": [
            { "text": "mujer", "meaning": "女人", "tail": " / " },
            { "text": "señora", "meaning": "女士", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Es una mujer fuerte.",
          "translation": "她是一位堅強的女性。",
          "segments": [
            { "text": "Es", "meaning": "她是", "tail": " " },
            { "text": "una", "meaning": "一位", "tail": " " },
            { "text": "mujer", "meaning": "女人", "tail": " " },
            { "text": "fuerte", "meaning": "強壯的", "tail": "." }
          ]
        },
        {
          "sentence": "Esa señora es mi madre.",
          "translation": "那位女士是我母親。",
          "segments": [
            { "text": "Esa", "meaning": "那位", "tail": " " },
            { "text": "señora", "meaning": "女士", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "madre", "meaning": "母親", "tail": "." }
          ]
        },
        {
          "sentence": "Una mujer muy hermosa.",
          "translation": "一位非常美麗的女子。",
          "segments": [
            { "text": "Una", "meaning": "一位", "tail": " " },
            { "text": "mujer", "meaning": "女人", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "hermosa", "meaning": "美麗的", "tail": "." }
          ]
        }
      ],
      "usage_note": "j 發音像英文的 h。對年長或已婚的女性，尊稱 señora 會比較得體。",
      "image_file": "woman.png"
    },
    {
      "id": "n-15",
      "term_zh": "學校",
      "related_terms": [
        {
          "term_target": "escuela / colegio",
          "pronunciation": ["/esˈkwe.la/, /koˈle.xjo/"],
          "specific_note": "",
          "segments": [
            { "text": "escuela", "meaning": "學校", "tail": " / " },
            { "text": "colegio", "meaning": "學校/學院", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Voy a la escuela.",
          "translation": "我去上學 (我去學校)。",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "escuela", "meaning": "學校", "tail": "." }
          ]
        },
        {
          "sentence": "Es una buena escuela.",
          "translation": "這是一所好學校。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "una", "meaning": "一所", "tail": " " },
            { "text": "buena", "meaning": "好的", "tail": " " },
            { "text": "escuela", "meaning": "學校", "tail": "." }
          ]
        },
        {
          "sentence": "Los niños están en el colegio.",
          "translation": "小孩子們在學校。",
          "segments": [
            { "text": "Los", "meaning": "這些", "tail": " " },
            { "text": "niños", "meaning": "小孩子", "tail": " " },
            { "text": "están", "meaning": "在", "tail": " " },
            { "text": "en", "meaning": "在...裡面", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "colegio", "meaning": "學校", "tail": "." }
          ]
        }
      ],
      "usage_note": "這兩個字都可以泛指學校(小學到高中)。如果是大學，要用 universidad。",
      "image_file": "school.png"
    },
    {
      "id": "n-16",
      "term_zh": "老師",
      "related_terms": [
        {
          "term_target": "profesor / profesora",
          "pronunciation": ["/pɾo.feˈsoɾ/, /pɾo.feˈso.ɾa/"],
          "specific_note": "",
          "segments": [
            { "text": "profesor", "meaning": "男老師", "tail": " / " },
            { "text": "profesora", "meaning": "女老師", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mi profesor de español.",
          "translation": "我的西班牙文老師(男)。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "profesor", "meaning": "老師", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "español", "meaning": "西班牙文", "tail": "." }
          ]
        },
        {
          "sentence": "Ella es profesora.",
          "translation": "她是老師。",
          "segments": [
            { "text": "Ella", "meaning": "她", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "profesora", "meaning": "女老師", "tail": "." }
          ]
        },
        {
          "sentence": "Pregúntale al profesor.",
          "translation": "去問老師。",
          "segments": [
            { "text": "Pregúntale", "meaning": "問他(pregunta+le)", "tail": " " },
            { "text": "al", "meaning": "向 (a+el)", "tail": " " },
            { "text": "profesor", "meaning": "老師", "tail": "." }
          ]
        }
      ],
      "usage_note": "國高中以上的老師或補習班老師通常叫 profesor。小學老師有時會稱呼為 maestro(男) / maestra(女)。",
      "image_file": "teacher.png"
    },
    {
      "id": "n-17",
      "term_zh": "影片／電影",
      "related_terms": [
        {
          "term_target": "película / video",
          "pronunciation": ["/peˈli.ku.la/, /ˈbi.ðeo/"],
          "specific_note": "電影/短影片",
          "segments": [
            { "text": "película", "meaning": "電影", "tail": " / " },
            { "text": "video", "meaning": "影片", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Vamos a ver una película.",
          "translation": "我們去看一部電影吧。",
          "segments": [
            { "text": "Vamos", "meaning": "我們去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "ver", "meaning": "看", "tail": " " },
            { "text": "una", "meaning": "一部", "tail": " " },
            { "text": "película", "meaning": "電影", "tail": "." }
          ]
        },
        {
          "sentence": "¿Viste este video?",
          "translation": "你看過這個影片(短片)了嗎？",
          "segments": [
            { "text": "¿Viste", "meaning": "你看(過去式)", "tail": " " },
            { "text": "este", "meaning": "這個", "tail": " " },
            { "text": "video?", "meaning": "影片", "tail": "" }
          ]
        },
        {
          "sentence": "Es mi película favorita.",
          "translation": "這是我最喜歡的電影。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "película", "meaning": "電影(陰性)", "tail": " " },
            { "text": "favorita", "meaning": "最愛的(陰性)", "tail": "." }
          ]
        }
      ],
      "usage_note": "電影院播放的長片叫 película，手機上的小短片或是 YouTube 影片叫 video。",
      "image_file": "movie.png"
    },
    {
      "id": "n-18",
      "term_zh": "手機",
      "related_terms": [
        {
          "term_target": "celular / móvil",
          "pronunciation": ["/se.luˈlaɾ/, /ˈmo.βil/"],
          "specific_note": "拉美/西班牙",
          "segments": [
            { "text": "celular", "meaning": "手機(拉美)", "tail": " / " },
            { "text": "móvil", "meaning": "手機(西班牙)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Dónde está mi celular?",
          "translation": "我的手機在哪？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "celular?", "meaning": "手機", "tail": "" }
          ]
        },
        {
          "sentence": "¿Me das tu número de teléfono?",
          "translation": "可以給我你的電話號碼嗎？",
          "segments": [
            { "text": "¿Me", "meaning": "給我", "tail": " " },
            { "text": "das", "meaning": "你給", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "número", "meaning": "號碼", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "teléfono?", "meaning": "電話", "tail": "" }
          ]
        },
        {
          "sentence": "Mi móvil no tiene batería.",
          "translation": "我的手機沒電了。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "móvil", "meaning": "手機", "tail": " " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "tiene", "meaning": "有", "tail": " " },
            { "text": "batería", "meaning": "電池", "tail": "." }
          ]
        }
      ],
      "usage_note": "地區差異很大：去中南美洲要講 celular，去西班牙旅遊要講 móvil。不管在哪，泛指電話都可以說 teléfono。",
      "image_file": "phone.png"
    },
    {
      "id": "n-19",
      "term_zh": "電腦",
      "related_terms": [
        {
          "term_target": "computadora / ordenador",
          "pronunciation": ["/kom.pu.taˈðo.ɾa/, /oɾ.ðe.naˈðoɾ/"],
          "specific_note": "拉美/西班牙",
          "segments": [
            { "text": "computadora", "meaning": "電腦(拉美)", "tail": " / " },
            { "text": "ordenador", "meaning": "電腦(西班牙)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Necesito una computadora nueva.",
          "translation": "我需要一台新電腦。",
          "segments": [
            { "text": "Necesito", "meaning": "我需要", "tail": " " },
            { "text": "una", "meaning": "一台(陰性)", "tail": " " },
            { "text": "computadora", "meaning": "電腦", "tail": " " },
            { "text": "nueva", "meaning": "新的(陰性)", "tail": "." }
          ]
        },
        {
          "sentence": "La computadora está rota.",
          "translation": "電腦壞了。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "computadora", "meaning": "電腦", "tail": " " },
            { "text": "está", "meaning": "處於", "tail": " " },
            { "text": "rota", "meaning": "壞掉的", "tail": "." }
          ]
        },
        {
          "sentence": "Paso mucho tiempo en el ordenador.",
          "translation": "我花很多時間在用電腦。",
          "segments": [
            { "text": "Paso", "meaning": "我度過", "tail": " " },
            { "text": "mucho", "meaning": "很多", "tail": " " },
            { "text": "tiempo", "meaning": "時間", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "ordenador", "meaning": "電腦(陽性)", "tail": "." }
          ]
        }
      ],
      "usage_note": "又是一個地區差異字！拉丁美洲說 computadora (陰性)，西班牙說 ordenador (陽性)。",
      "image_file": "computer.png"
    },
    {
      "id": "n-20",
      "term_zh": "車",
      "related_terms": [
        {
          "term_target": "coche / carro / auto",
          "pronunciation": ["/ˈko.tʃe/, /ˈka.ro/, /ˈau.to/"],
          "specific_note": "",
          "segments": [
            { "text": "coche", "meaning": "車(西班牙/墨西哥)", "tail": " / " },
            { "text": "carro", "meaning": "車(拉美)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Voy en coche.",
          "translation": "我搭車去(開車去)。",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "en", "meaning": "搭乘", "tail": " " },
            { "text": "coche", "meaning": "車", "tail": "." }
          ]
        },
        {
          "sentence": "Quiero alquilar un carro.",
          "translation": "我想租一輛車。 (出國旅遊超實用)",
          "segments": [
            { "text": "Quiero", "meaning": "我想", "tail": " " },
            { "text": "alquilar", "meaning": "租借", "tail": " " },
            { "text": "un", "meaning": "一輛", "tail": " " },
            { "text": "carro", "meaning": "車", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde estacionaste el auto?",
          "translation": "你把車停在哪裡了？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "estacionaste", "meaning": "你停放(過去式)", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "auto?", "meaning": "車", "tail": "" }
          ]
        }
      ],
      "usage_note": "西班牙跟墨西哥人常說 coche；南美洲國家常說 carro 或 auto。搭交通工具介係詞一律用 en。",
      "image_file": "car.png",
    },
    {
      "id": "n-21",
      "term_zh": "市場",
      "related_terms": [
        {
          "term_target": "mercado",
          "pronunciation": ["/meɾˈka.ðo/"],
          "specific_note": "",
          "segments": [{ "text": "mercado", "meaning": "市場", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mercado nocturno.",
          "translation": "夜市。",
          "segments": [
            { "text": "Mercado", "meaning": "市場", "tail": " " },
            { "text": "nocturno", "meaning": "夜晚的", "tail": "." }
          ]
        },
        {
          "sentence": "Voy al mercado.",
          "translation": "我去市場。",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "al", "meaning": "往(a+el)", "tail": " " },
            { "text": "mercado", "meaning": "市場", "tail": "." }
          ]
        },
        {
          "sentence": "El mercado está lleno de gente.",
          "translation": "市場裡擠滿了人 (很擁擠)。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "mercado", "meaning": "市場", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "lleno", "meaning": "滿的", "tail": " " },
            { "text": "de", "meaning": "以...", "tail": " " },
            { "text": "gente", "meaning": "人群", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性名詞。要跟外國人介紹台灣的夜市，直接說 mercado nocturno 他們就聽得懂了。",
      "image_file": "market.png"
    },
    {
      "id": "n-22",
      "term_zh": "衣服",
      "related_terms": [
        {
          "term_target": "ropa",
          "pronunciation": ["/ˈro.pa/"],
          "specific_note": "不可數的集合名詞",
          "segments": [{ "text": "ropa", "meaning": "衣服", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Comprar ropa.",
          "translation": "買衣服。",
          "segments": [
            { "text": "Comprar", "meaning": "買", "tail": " " },
            { "text": "ropa", "meaning": "衣服", "tail": "." }
          ]
        },
        {
          "sentence": "Ponte la ropa.",
          "translation": "穿上你的衣服。",
          "segments": [
            { "text": "Ponte", "meaning": "自己穿上(pon+te)", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "ropa", "meaning": "衣服", "tail": "." }
          ]
        },
        {
          "sentence": "Esta ropa está sucia.",
          "translation": "這些衣服髒了。",
          "segments": [
            { "text": "Esta", "meaning": "這(陰性)", "tail": " " },
            { "text": "ropa", "meaning": "衣服", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "sucia", "meaning": "髒的", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！英文的衣服 (clothes) 是複數，但在西文，ropa 是一個「陰性單數」的集合名詞，動詞跟形容詞都要配單數喔！",
      "image_file": "clothes.png"
    },
    {
      "id": "n-23",
      "term_zh": "商店",
      "related_terms": [
        {
          "term_target": "tienda",
          "pronunciation": ["/ˈtjen.da/"],
          "specific_note": "",
          "segments": [{ "text": "tienda", "meaning": "商店", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tienda de ropa.",
          "translation": "服飾店。",
          "segments": [
            { "text": "Tienda", "meaning": "商店", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "ropa", "meaning": "衣服", "tail": "." }
          ]
        },
        {
          "sentence": "La tienda está cerrada.",
          "translation": "商店關門了。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "tienda", "meaning": "商店", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "cerrada", "meaning": "關閉的", "tail": "." }
          ]
        },
        {
          "sentence": "Voy de compras.",
          "translation": "我去逛街(買東西)。 (不說去商店，而是習慣說 ir de compras)",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "de", "meaning": "從事...", "tail": " " },
            { "text": "compras", "meaning": "購物", "tail": "." }
          ]
        }
      ],
      "usage_note": "各種店鋪都可以叫 tienda。如果是喝咖啡的地方則叫做 cafetería。",
      "image_file": "shop.png"
    },
    {
      "id": "n-24",
      "term_zh": "巴士 / 公車",
      "related_terms": [
        {
          "term_target": "autobús",
          "pronunciation": ["/au.toˈβus/"],
          "specific_note": "",
          "segments": [{ "text": "autobús", "meaning": "公車", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tomar el autobús.",
          "translation": "搭公車。",
          "segments": [
            { "text": "Tomar", "meaning": "搭乘/拿取", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "autobús", "meaning": "公車", "tail": "." }
          ]
        },
        {
          "sentence": "El autobús llegó tarde.",
          "translation": "公車遲到了(晚到了)。",
          "segments": [
            { "text": "El", "meaning": "這班", "tail": " " },
            { "text": "autobús", "meaning": "公車", "tail": " " },
            { "text": "llegó", "meaning": "到達(過去式)", "tail": " " },
            { "text": "tarde", "meaning": "遲", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde está la parada de autobús?",
          "translation": "公車站牌在哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "parada", "meaning": "站牌/停靠站", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "autobús?", "meaning": "公車", "tail": "" }
          ]
        }
      ],
      "usage_note": "西語系國家的公車講法很多元：西班牙叫 autobús，墨西哥叫 camión，阿根廷叫 colectivo，加勒比海地區叫 guagua。用 autobús 基本上大家都聽得懂！",
      "image_file": "bus.png"
    },
    {
      "id": "n-25",
      "term_zh": "街道",
      "related_terms": [
        {
          "term_target": "calle",
          "pronunciation": ["/ˈka.ʝe/"],
          "specific_note": "",
          "segments": [{ "text": "calle", "meaning": "街道", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "En la calle.",
          "translation": "在街上。",
          "segments": [
            { "text": "En", "meaning": "在...上", "tail": " " },
            { "text": "la", "meaning": "這條", "tail": " " },
            { "text": "calle", "meaning": "街道", "tail": "." }
          ]
        },
        {
          "sentence": "Cruza la calle.",
          "translation": "過馬路。",
          "segments": [
            { "text": "Cruza", "meaning": "穿越(命令句)", "tail": " " },
            { "text": "la", "meaning": "這條", "tail": " " },
            { "text": "calle", "meaning": "街道", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué calle es esta?",
          "translation": "這是哪一條街？ (迷路時好用)",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "calle", "meaning": "街道", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "esta?", "meaning": "這條", "tail": "" }
          ]
        }
      ],
      "usage_note": "陰性名詞。找地址時非常重要，縮寫通常會寫成 C. 或是 Cl。",
      "image_file": "street.png"
    },
    {
      "id": "n-26",
      "term_zh": "房子/家",
      "related_terms": [
        {
          "term_target": "casa",
          "pronunciation": ["/ˈka.sa/"],
          "specific_note": "",
          "segments": [{ "text": "casa", "meaning": "房子/家", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mi casa.",
          "translation": "我家。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "casa", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Ven a mi casa.",
          "translation": "來我家。",
          "segments": [
            { "text": "Ven", "meaning": "來(命令句)", "tail": " " },
            { "text": "a", "meaning": "到/往", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "casa", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Estoy en casa.",
          "translation": "我在家裡。",
          "segments": [
            { "text": "Estoy", "meaning": "我處於", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "casa", "meaning": "家", "tail": "." }
          ]
        }
      ],
      "usage_note": "casa 不只是建築物的「房子」，也是溫暖的「家」。那句名言 Mi casa es tu casa (把我家當你家) 展現了西語人士的好客。",
      "image_file": "house.png"
    },
    {
      "id": "n-27",
      "term_zh": "母親",
      "related_terms": [
        {
          "term_target": "madre / mamá",
          "pronunciation": ["/ˈma.ðɾe/, /maˈma/"],
          "specific_note": "母親/媽媽",
          "segments": [
            { "text": "madre", "meaning": "母親", "tail": " / " },
            { "text": "mamá", "meaning": "媽媽", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mi mamá.",
          "translation": "我媽媽。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "mamá", "meaning": "媽媽", "tail": "." }
          ]
        },
        {
          "sentence": "¡Feliz Día de la Madre!",
          "translation": "母親節快樂！",
          "segments": [
            { "text": "¡Feliz", "meaning": "快樂的", "tail": " " },
            { "text": "Día", "meaning": "日子", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "Madre!", "meaning": "母親", "tail": "" }
          ]
        },
        {
          "sentence": "Saludos a tu mamá.",
          "translation": "代我向你媽媽問好。",
          "segments": [
            { "text": "Saludos", "meaning": "問候(複數)", "tail": " " },
            { "text": "a", "meaning": "向", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "mamá", "meaning": "媽媽", "tail": "." }
          ]
        }
      ],
      "usage_note": "日常講話時稱呼媽媽都是叫 mamá (記得第二個 a 要發重音喔，不然會變成吸吮的意思)。",
      "image_file": "mother.png"
    },
    {
      "id": "n-28",
      "term_zh": "父親",
      "related_terms": [
        {
          "term_target": "padre / papá",
          "pronunciation": ["/ˈpa.ðɾe/, /paˈpa/"],
          "specific_note": "父親/爸爸",
          "segments": [
            { "text": "padre", "meaning": "父親", "tail": " / " },
            { "text": "papá", "meaning": "爸爸", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mi papá.",
          "translation": "我爸爸。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "papá", "meaning": "爸爸", "tail": "." }
          ]
        },
        {
          "sentence": "De tal palo, tal astilla.",
          "translation": "有其父必有其子。 (西文不直譯，這是道地的俗語，直譯為：什麼樣的木頭出什麼樣的木屑)",
          "segments": [
            { "text": "De", "meaning": "從", "tail": " " },
            { "text": "tal", "meaning": "這樣的", "tail": " " },
            { "text": "palo", "meaning": "木棍", "tail": ", " },
            { "text": "tal", "meaning": "這樣的", "tail": " " },
            { "text": "astilla", "meaning": "木屑", "tail": "." }
          ]
        },
        {
          "sentence": "Él es mi padre.",
          "translation": "他是我的父親。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "padre", "meaning": "父親", "tail": "." }
          ]
        }
      ],
      "usage_note": "平時口語都叫 papá (重音在後面)。另外，父母雙親合在一起會直接用陽性複數 los padres 稱呼。",
      "image_file": "father.png"
    },
    {
      "id": "n-29",
      "term_zh": "兄弟",
      "related_terms": [
        {
          "term_target": "hermano",
          "pronunciation": ["/eɾˈma.no/"],
          "specific_note": "",
          "segments": [{ "text": "hermano", "meaning": "兄弟", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mi hermano mayor.",
          "translation": "我哥哥 (年長的兄弟)。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "hermano", "meaning": "兄弟", "tail": " " },
            { "text": "mayor", "meaning": "年長的", "tail": "." }
          ]
        },
        {
          "sentence": "Mi hermano menor.",
          "translation": "我弟弟 (年紀較小的兄弟)。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "hermano", "meaning": "兄弟", "tail": " " },
            { "text": "menor", "meaning": "較小的", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo dos hermanos.",
          "translation": "我有兩個兄弟(或手足)。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "dos", "meaning": "兩個", "tail": " " },
            { "text": "hermanos", "meaning": "兄弟", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文不像中文會分「哥/弟」，統稱都是 hermano，如果要細分會在後面加上 mayor(較大的) 或是 menor(較小的)。",
      "image_file": "brother.png"
    },
    {
      "id": "n-30",
      "term_zh": "姐妹",
      "related_terms": [
        {
          "term_target": "hermana",
          "pronunciation": ["/eɾˈma.na/"],
          "specific_note": "",
          "segments": [{ "text": "hermana", "meaning": "姐妹", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mi hermana.",
          "translation": "我的姐妹。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "hermana", "meaning": "姐妹", "tail": "." }
          ]
        },
        {
          "sentence": "¿Tienes hermanas?",
          "translation": "你有姐妹嗎？",
          "segments": [
            { "text": "¿Tienes", "meaning": "你有", "tail": " " },
            { "text": "hermanas?", "meaning": "姐妹們(複數)", "tail": "" }
          ]
        },
        {
          "sentence": "Ella es mi hermana mayor.",
          "translation": "她是我姐姐。",
          "segments": [
            { "text": "Ella", "meaning": "她", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "hermana", "meaning": "姐妹", "tail": " " },
            { "text": "mayor", "meaning": "年長的", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟兄弟一樣，姐姐叫 hermana mayor，妹妹叫 hermana menor。",
      "image_file": "sister.png"
    },
    {
      "id": "n-31",
      "term_zh": "中文",
      "related_terms": [
        {
          "term_target": "chino",
          "pronunciation": ["/ˈtʃi.no/"],
          "specific_note": "語言/中國人",
          "segments": [{ "text": "chino", "meaning": "中文", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hablar chino.",
          "translation": "說中文。",
          "segments": [
            { "text": "Hablar", "meaning": "說", "tail": " " },
            { "text": "chino", "meaning": "中文", "tail": "." }
          ]
        },
        {
          "sentence": "El chino es muy difícil.",
          "translation": "中文非常難。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "chino", "meaning": "中文", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "difícil", "meaning": "困難的", "tail": "." }
          ]
        },
        {
          "sentence": "Estoy aprendiendo chino.",
          "translation": "我正在學中文。",
          "segments": [
            { "text": "Estoy", "meaning": "我正在", "tail": " " },
            { "text": "aprendiendo", "meaning": "學習(進行式)", "tail": " " },
            { "text": "chino", "meaning": "中文", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的語言一律使用陽性單數名詞 (el chino)。另外，如果是指台灣常講的繁體中文/華語，也可以說 mandarín。",
      "image_file": "chinese.png"
    },
    {
      "id": "n-32",
      "term_zh": "早晨",
      "related_terms": [
        {
          "term_target": "mañana",
          "pronunciation": ["/maˈɲa.na/"],
          "specific_note": "早晨/明天",
          "segments": [{ "text": "mañana", "meaning": "早晨/明天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Por la mañana.",
          "translation": "在早晨 / 在早上。",
          "segments": [
            { "text": "Por", "meaning": "在(一段時間)", "tail": " " },
            { "text": "la", "meaning": "這(陰性)", "tail": " " },
            { "text": "mañana", "meaning": "早晨", "tail": "." }
          ]
        },
        {
          "sentence": "Mañana por la mañana.",
          "translation": "明天早上。",
          "segments": [
            { "text": "Mañana", "meaning": "明天", "tail": " " },
            { "text": "por", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "mañana", "meaning": "早晨", "tail": "." }
          ]
        },
        {
          "sentence": "Todas las mañanas.",
          "translation": "每天早上。",
          "segments": [
            { "text": "Todas", "meaning": "全部的(複數)", "tail": " " },
            { "text": "las", "meaning": "這些", "tail": " " },
            { "text": "mañanas", "meaning": "早晨(複數)", "tail": "." }
          ]
        }
      ],
      "usage_note": "mañana 既是「早上(名詞)」，也是「明天(時間副詞)」。所以「明天早上」會變成聽起來像鬼打牆的 mañana por la mañana。",
      "image_file": "morning.png"
    },
    {
      "id": "n-33",
      "term_zh": "夜晚",
      "related_terms": [
        {
          "term_target": "noche",
          "pronunciation": ["/ˈno.tʃe/"],
          "specific_note": "",
          "segments": [{ "text": "noche", "meaning": "夜晚", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Anoche.",
          "translation": "昨晚。 (西文有專用詞)",
          "segments": [
            { "text": "Anoche", "meaning": "昨晚", "tail": "." }
          ]
        },
        {
          "sentence": "Por la noche.",
          "translation": "在晚上。",
          "segments": [
            { "text": "Por", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "noche", "meaning": "夜晚", "tail": "." }
          ]
        },
        {
          "sentence": "Nos vemos esta noche.",
          "translation": "我們今晚見。",
          "segments": [
            { "text": "Nos", "meaning": "我們(互相)", "tail": " " },
            { "text": "vemos", "meaning": "看見", "tail": " " },
            { "text": "esta", "meaning": "這個(陰性)", "tail": " " },
            { "text": "noche", "meaning": "夜晚", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性名詞。太陽下山後一直到半夜，都可以稱作 la noche。",
      "image_file": "night.png"
    },
    {
      "id": "n-34",
      "term_zh": "票／車票",
      "related_terms": [
        {
          "term_target": "boleto / billete",
          "pronunciation": ["/boˈle.to/, /biˈʝe.te/"],
          "specific_note": "拉美/西班牙",
          "segments": [
            { "text": "boleto", "meaning": "票(拉美)", "tail": " / " },
            { "text": "billete", "meaning": "票/鈔票(西班牙)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Un boleto, por favor.",
          "translation": "請給我一張票。",
          "segments": [
            { "text": "Un", "meaning": "一張", "tail": " " },
            { "text": "boleto", "meaning": "票", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde está tu boleto?",
          "translation": "你的車票在哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "boleto?", "meaning": "票", "tail": "" }
          ]
        },
        {
          "sentence": "Boleto de ida y vuelta.",
          "translation": "來回票。 (ida去程 / vuelta回程)",
          "segments": [
            { "text": "Boleto", "meaning": "票", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "ida", "meaning": "去程", "tail": " " },
            { "text": "y", "meaning": "和", "tail": " " },
            { "text": "vuelta", "meaning": "回程", "tail": "." }
          ]
        }
      ],
      "usage_note": "去西班牙買車票要講 billete；但如果你去中南美洲旅遊，車票跟門票都統稱為 boleto。",
      "image_file": "ticket.png"
    },
    {
      "id": "n-35",
      "term_zh": "包包 / 袋子",
      "related_terms": [
        {
          "term_target": "bolso / bolsa / mochila",
          "pronunciation": ["/ˈbol.so/, /ˈbol.sa/, /moˈtʃi.la/"],
          "specific_note": "提包/袋子/背包",
          "segments": [
            { "text": "bolso", "meaning": "隨身包(陽性)", "tail": " / " },
            { "text": "bolsa", "meaning": "塑膠袋/購物袋(陰性)", "tail": " / " },
            { "text": "mochila", "meaning": "後背包", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Necesita una bolsa?",
          "translation": "您需要(購物)袋子嗎？ (超市結帳常被問)",
          "segments": [
            { "text": "¿Necesita", "meaning": "您需要", "tail": " " },
            { "text": "una", "meaning": "一個", "tail": " " },
            { "text": "bolsa?", "meaning": "袋子", "tail": "" }
          ]
        },
        {
          "sentence": "Mi bolso.",
          "translation": "我的(隨身)包包。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "bolso", "meaning": "包包", "tail": "." }
          ]
        },
        {
          "sentence": "Abre tu mochila.",
          "translation": "打開你的後背包。",
          "segments": [
            { "text": "Abre", "meaning": "打開(命令句)", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "mochila", "meaning": "後背包", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文分很細：肩背包、手提包是 bolso；超商塑膠袋是 bolsa；後背包是 mochila，千萬別講錯囉。",
      "image_file": "bag.png"
    },
    {
      "id": "n-36",
      "term_zh": "杯子",
      "related_terms": [
        {
          "term_target": "taza / vaso",
          "pronunciation": ["/ˈta.sa/, /ˈba.so/"],
          "specific_note": "有把手/無把手",
          "segments": [
            { "text": "taza", "meaning": "馬克杯/茶杯", "tail": " / " },
            { "text": "vaso", "meaning": "玻璃杯/水杯", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Una taza de café.",
          "translation": "一杯咖啡。",
          "segments": [
            { "text": "Una", "meaning": "一杯", "tail": " " },
            { "text": "taza", "meaning": "馬克杯", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "café", "meaning": "咖啡", "tail": "." }
          ]
        },
        {
          "sentence": "Dame un vaso de agua, por favor.",
          "translation": "請給我一杯水。",
          "segments": [
            { "text": "Dame", "meaning": "給我(da+me)", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "vaso", "meaning": "水杯", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "agua", "meaning": "水", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Lava la taza.",
          "translation": "洗杯子。",
          "segments": [
            { "text": "Lava", "meaning": "洗(命令句)", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "taza", "meaning": "杯子", "tail": "." }
          ]
        }
      ],
      "usage_note": "去餐廳點餐必備知識：裝熱飲(咖啡、茶)有把手的那種叫 taza；裝冷飲、冰水沒有把手的那種玻璃杯叫 vaso。",
      "image_file": "cup.png"
    },
    {
      "id": "n-37",
      "term_zh": "醫生",
      "related_terms": [
        {
          "term_target": "médico / doctor",
          "pronunciation": ["/ˈme.ði.ko/, /dokˈtoɾ/"],
          "specific_note": "",
          "segments": [
            { "text": "médico", "meaning": "醫師(職業)", "tail": " / " },
            { "text": "doctor", "meaning": "醫生(稱呼/學位)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ir al médico.",
          "translation": "看醫生。 (西文不說see a doctor，而是去醫生那裡)",
          "segments": [
            { "text": "Ir", "meaning": "去", "tail": " " },
            { "text": "al", "meaning": "往(a+el)", "tail": " " },
            { "text": "médico", "meaning": "醫生", "tail": "." }
          ]
        },
        {
          "sentence": "Él es médico.",
          "translation": "他是醫生。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "médico", "meaning": "醫生", "tail": "." }
          ]
        },
        {
          "sentence": "Necesito un doctor.",
          "translation": "我需要叫醫生。",
          "segments": [
            { "text": "Necesito", "meaning": "我需要", "tail": " " },
            { "text": "un", "meaning": "一位", "tail": " " },
            { "text": "doctor", "meaning": "醫生", "tail": "." }
          ]
        }
      ],
      "usage_note": "兩個字都可以通用。如果是女醫生，字尾要改成 médica 或 doctora。",
      "image_file": "doctor.png"
    },
    {
      "id": "n-38",
      "term_zh": "警察",
      "related_terms": [
        {
          "term_target": "policía",
          "pronunciation": ["/po.liˈsi.a/"],
          "specific_note": "",
          "segments": [{ "text": "policía", "meaning": "警察", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Llama a la policía.",
          "translation": "叫警察 (報警)。",
          "segments": [
            { "text": "Llama", "meaning": "打電話/呼叫(命令句)", "tail": " " },
            { "text": "a", "meaning": "對(人)", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "policía", "meaning": "警力(陰性集合名詞)", "tail": "." }
          ]
        },
        {
          "sentence": "La policía viene.",
          "translation": "警察來了。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "policía", "meaning": "警察", "tail": " " },
            { "text": "viene", "meaning": "來", "tail": "." }
          ]
        },
        {
          "sentence": "Pregúntale al policía.",
          "translation": "去問那位(男)警察。",
          "segments": [
            { "text": "Pregúntale", "meaning": "問他(pregunta+le)", "tail": " " },
            { "text": "al", "meaning": "向", "tail": " " },
            { "text": "policía", "meaning": "警察", "tail": "." }
          ]
        }
      ],
      "usage_note": "La policía (陰性) 是泛指整個警察機關/警力；El policía (陽性) 則是單指街上走動的那一位「男警官」。",
      "image_file": "police.png"
    },
    {
      "id": "n-39",
      "term_zh": "醫院",
      "related_terms": [
        {
          "term_target": "hospital",
          "pronunciation": ["/os.piˈtal/"],
          "specific_note": "",
          "segments": [{ "text": "hospital", "meaning": "醫院", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ir al hospital.",
          "translation": "去醫院。",
          "segments": [
            { "text": "Ir", "meaning": "去", "tail": " " },
            { "text": "al", "meaning": "往(a+el)", "tail": " " },
            { "text": "hospital", "meaning": "醫院", "tail": "." }
          ]
        },
        {
          "sentence": "Este hospital es grande.",
          "translation": "這間醫院很大。",
          "segments": [
            { "text": "Este", "meaning": "這間", "tail": " " },
            { "text": "hospital", "meaning": "醫院", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "grande", "meaning": "大的", "tail": "." }
          ]
        },
        {
          "sentence": "Él está en el hospital.",
          "translation": "他在醫院裡。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "en", "meaning": "在...裡", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "hospital", "meaning": "醫院", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性名詞。記住西文的 h 永遠不發音，所以開頭要從 o 開始唸（歐斯披踏）。",
      "image_file": "hospital.png"
    },
    {
      "id": "n-40",
      "term_zh": "座位",
      "related_terms": [
        {
          "term_target": "asiento / lugar",
          "pronunciation": ["/aˈsjen.to/, /luˈɣaɾ/"],
          "specific_note": "",
          "segments": [
            { "text": "asiento", "meaning": "座位", "tail": " / " },
            { "text": "lugar", "meaning": "位子/地方", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Toma asiento, por favor.",
          "translation": "請坐 (請拿取座位)。",
          "segments": [
            { "text": "Toma", "meaning": "拿取(命令句)", "tail": " " },
            { "text": "asiento", "meaning": "座位", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "¿Está ocupado este asiento?",
          "translation": "這位子有人坐嗎？ (直譯：這個座位被佔用了嗎？)",
          "segments": [
            { "text": "¿Está", "meaning": "狀態是", "tail": " " },
            { "text": "ocupado", "meaning": "被佔用的", "tail": " " },
            { "text": "este", "meaning": "這個", "tail": " " },
            { "text": "asiento?", "meaning": "座位", "tail": "" }
          ]
        },
        {
          "sentence": "Vuelve a tu asiento.",
          "translation": "回到你的位子上。",
          "segments": [
            { "text": "Vuelve", "meaning": "回去(命令句)", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "asiento", "meaning": "座位", "tail": "." }
          ]
        }
      ],
      "usage_note": "要詢問別人旁邊的空位能不能坐，指著空位問 ¿Está ocupado? (被佔用了嗎？) 是最標準的問法。",
      "image_file": "seat.png"
    },
    {
      "id": "n-41",
      "term_zh": "門",
      "related_terms": [
        {
          "term_target": "puerta",
          "pronunciation": ["/ˈpweɾ.ta/"],
          "specific_note": "",
          "segments": [{ "text": "puerta", "meaning": "門", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Abre la puerta.",
          "translation": "開門。",
          "segments": [
            { "text": "Abre", "meaning": "打開(命令句)", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "puerta", "meaning": "門", "tail": "." }
          ]
        },
        {
          "sentence": "Cierra la puerta, por favor.",
          "translation": "請關門。",
          "segments": [
            { "text": "Cierra", "meaning": "關上(命令句)", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "puerta", "meaning": "門", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Hay alguien en la puerta.",
          "translation": "有人在門口。",
          "segments": [
            { "text": "Hay", "meaning": "有", "tail": " " },
            { "text": "alguien", "meaning": "某人", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "puerta", "meaning": "門", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性名詞。搭地鐵或火車時聽到 Cierre de puertas，就代表要關門了。",
      "image_file": "door.png"
    },
    {
      "id": "n-42",
      "term_zh": "房間",
      "related_terms": [
        {
          "term_target": "habitación / cuarto",
          "pronunciation": ["/a.βi.taˈsjon/, /ˈkwaɾ.to/"],
          "specific_note": "飯店客房/一般房間",
          "segments": [
            { "text": "habitación", "meaning": "客房", "tail": " / " },
            { "text": "cuarto", "meaning": "房間", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mi habitación.",
          "translation": "我(飯店)的房間。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "habitación", "meaning": "客房", "tail": "." }
          ]
        },
        {
          "sentence": "Limpia tu cuarto.",
          "translation": "打掃你的房間。",
          "segments": [
            { "text": "Limpia", "meaning": "打掃(命令句)", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "cuarto", "meaning": "房間", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuál es su número de habitación?",
          "translation": "您的房號是多少？",
          "segments": [
            { "text": "¿Cuál", "meaning": "哪一個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "su", "meaning": "您的", "tail": " " },
            { "text": "número", "meaning": "號碼", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "habitación?", "meaning": "客房", "tail": "" }
          ]
        }
      ],
      "usage_note": "這兩個字都可以指房間，但去飯店登記入住時，通常會用 habitación 這個字來指客房。",
      "image_file": "room.png"
    },
    {
      "id": "n-43",
      "term_zh": "車站",
      "related_terms": [
        {
          "term_target": "estación",
          "pronunciation": ["/es.taˈsjon/"],
          "specific_note": "",
          "segments": [{ "text": "estación", "meaning": "車站", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Estación de tren.",
          "translation": "火車站。",
          "segments": [
            { "text": "Estación", "meaning": "車站", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "tren", "meaning": "火車", "tail": "." }
          ]
        },
        {
          "sentence": "Nos vemos en la estación.",
          "translation": "在車站見。",
          "segments": [
            { "text": "Nos", "meaning": "我們(互相)", "tail": " " },
            { "text": "vemos", "meaning": "看見", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "estación", "meaning": "車站", "tail": "." }
          ]
        },
        {
          "sentence": "La estación está cerca.",
          "translation": "車站很近。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "estación", "meaning": "車站", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "cerca", "meaning": "近", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性名詞。除了車站，estación 也用來指一年四季的「季節」。如果是公車站牌，則叫 parada。",
      "image_file": "station.png"
    },
    {
      "id": "n-44",
      "term_zh": "地鐵 / 捷運",
      "related_terms": [
        {
          "term_target": "metro",
          "pronunciation": ["/ˈme.tɾo/"],
          "specific_note": "",
          "segments": [{ "text": "metro", "meaning": "地鐵/捷運", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Estación de metro.",
          "translation": "捷運站 / 地鐵站。",
          "segments": [
            { "text": "Estación", "meaning": "車站", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "metro", "meaning": "地鐵", "tail": "." }
          ]
        },
        {
          "sentence": "Tomar el metro.",
          "translation": "搭地鐵。",
          "segments": [
            { "text": "Tomar", "meaning": "搭乘", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "metro", "meaning": "地鐵", "tail": "." }
          ]
        },
        {
          "sentence": "El metro es muy rápido.",
          "translation": "地鐵很快。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "metro", "meaning": "地鐵", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "rápido", "meaning": "快速的", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性名詞。在西班牙跟拉丁美洲，市區內的捷運系統最普遍的稱呼就是 el metro。",
      "image_file": "subway.png"
    },
    {
      "id": "n-45",
      "term_zh": "火車",
      "related_terms": [
        {
          "term_target": "tren",
          "pronunciation": ["/tɾen/"],
          "specific_note": "",
          "segments": [{ "text": "tren", "meaning": "火車", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Viajar en tren.",
          "translation": "搭火車旅行。",
          "segments": [
            { "text": "Viajar", "meaning": "旅行", "tail": " " },
            { "text": "en", "meaning": "搭乘/在", "tail": " " },
            { "text": "tren", "meaning": "火車", "tail": "." }
          ]
        },
        {
          "sentence": "El tren está por salir.",
          "translation": "火車要開(離開)了。",
          "segments": [
            { "text": "El", "meaning": "這班", "tail": " " },
            { "text": "tren", "meaning": "火車", "tail": " " },
            { "text": "está", "meaning": "正準備(está por)", "tail": " " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "salir", "meaning": "離開", "tail": "." }
          ]
        },
        {
          "sentence": "Perdí el tren.",
          "translation": "我錯過了火車。",
          "segments": [
            { "text": "Perdí", "meaning": "我錯過/失去(過去式)", "tail": " " },
            { "text": "el", "meaning": "這班", "tail": " " },
            { "text": "tren", "meaning": "火車", "tail": "." }
          ]
        }
      ],
      "usage_note": "搭乘交通工具時，介係詞一律使用 en (en tren)。錯過車子是用動詞 perder (失去)。",
      "image_file": "train.png"
    },
    {
      "id": "n-46",
      "term_zh": "機場",
      "related_terms": [
        {
          "term_target": "aeropuerto",
          "pronunciation": ["/a.e.ɾoˈpweɾ.to/"],
          "specific_note": "",
          "segments": [{ "text": "aeropuerto", "meaning": "機場", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ir al aeropuerto.",
          "translation": "去機場。",
          "segments": [
            { "text": "Ir", "meaning": "去", "tail": " " },
            { "text": "al", "meaning": "往(a+el)", "tail": " " },
            { "text": "aeropuerto", "meaning": "機場", "tail": "." }
          ]
        },
        {
          "sentence": "Llegar al aeropuerto.",
          "translation": "抵達機場。",
          "segments": [
            { "text": "Llegar", "meaning": "抵達", "tail": " " },
            { "text": "al", "meaning": "在(a+el)", "tail": " " },
            { "text": "aeropuerto", "meaning": "機場", "tail": "." }
          ]
        },
        {
          "sentence": "¿A qué aeropuerto vas?",
          "translation": "你要去哪個機場？",
          "segments": [
            { "text": "¿A", "meaning": "往", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "aeropuerto", "meaning": "機場", "tail": " " },
            { "text": "vas?", "meaning": "你去", "tail": "" }
          ]
        }
      ],
      "usage_note": "這個字有點長，可以拆成 aero (航空的) + puerto (港口) 來記。搭計程車時說 al aeropuerto, por favor (麻煩到機場) 就行了。",
      "image_file": "airport.png"
    },
    {
      "id": "n-47",
      "term_zh": "行李",
      "related_terms": [
        {
          "term_target": "equipaje / maleta",
          "pronunciation": ["/e.kiˈpa.xe/, /maˈle.ta/"],
          "specific_note": "總稱/行李箱",
          "segments": [
            { "text": "equipaje", "meaning": "行李(總稱)", "tail": " / " },
            { "text": "maleta", "meaning": "行李箱", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Equipaje de mano.",
          "translation": "隨身(手提)行李。",
          "segments": [
            { "text": "Equipaje", "meaning": "行李", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "mano", "meaning": "手", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo dos maletas.",
          "translation": "我有兩件行李箱。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "dos", "meaning": "兩件", "tail": " " },
            { "text": "maletas", "meaning": "行李箱", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde reclamo mi equipaje?",
          "translation": "我在哪裡可以領行李？ (機場實用句)",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "reclamo", "meaning": "我索取/提領", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "equipaje?", "meaning": "行李", "tail": "" }
          ]
        }
      ],
      "usage_note": "equipaje 是集合名詞(指所有行李)。如果要具體數有幾個「行李箱」，就要用 maleta(s)。",
      "image_file": "luggage.png"
    },
    {
      "id": "n-48",
      "term_zh": "地圖",
      "related_terms": [
        {
          "term_target": "mapa",
          "pronunciation": ["/ˈma.pa/"],
          "specific_note": "陽性名詞",
          "segments": [{ "text": "mapa", "meaning": "地圖", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mirar el mapa.",
          "translation": "看地圖。",
          "segments": [
            { "text": "Mirar", "meaning": "看", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "mapa", "meaning": "地圖", "tail": "." }
          ]
        },
        {
          "sentence": "¿Tienes un mapa?",
          "translation": "你有地圖嗎？",
          "segments": [
            { "text": "¿Tienes", "meaning": "你有", "tail": " " },
            { "text": "un", "meaning": "一張", "tail": " " },
            { "text": "mapa?", "meaning": "地圖", "tail": "" }
          ]
        },
        {
          "sentence": "Necesito un mapa de la ciudad.",
          "translation": "我需要一張城市地圖。",
          "segments": [
            { "text": "Necesito", "meaning": "我需要", "tail": " " },
            { "text": "un", "meaning": "一張", "tail": " " },
            { "text": "mapa", "meaning": "地圖", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "ciudad", "meaning": "城市", "tail": "." }
          ]
        }
      ],
      "usage_note": "大坑預警！mapa 雖然結尾是 a，但它是「陽性」名詞，所以前面要配 el 或 un (el mapa / un mapa)。",
      "image_file": "map.png"
    },
    {
      "id": "n-49",
      "term_zh": "行政櫃檯／票口",
      "related_terms": [
        {
          "term_target": "mostrador / taquilla",
          "pronunciation": ["/mos.tɾaˈðoɾ/, /taˈki.ʝa/"],
          "specific_note": "櫃台/售票口",
          "segments": [
            { "text": "mostrador", "meaning": "櫃檯", "tail": " / " },
            { "text": "taquilla", "meaning": "售票口", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "En el mostrador.",
          "translation": "在櫃檯。",
          "segments": [
            { "text": "En", "meaning": "在", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "mostrador", "meaning": "櫃檯", "tail": "." }
          ]
        },
        {
          "sentence": "Pague en el mostrador.",
          "translation": "請在櫃檯結帳。",
          "segments": [
            { "text": "Pague", "meaning": "您支付(命令句)", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "mostrador", "meaning": "櫃檯", "tail": "." }
          ]
        },
        {
          "sentence": "Comprar boletos en la taquilla.",
          "translation": "在售票口買票。",
          "segments": [
            { "text": "Comprar", "meaning": "買", "tail": " " },
            { "text": "boletos", "meaning": "票", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "taquilla", "meaning": "售票口", "tail": "." }
          ]
        }
      ],
      "usage_note": "餐廳結帳、機場報到的櫃台是 mostrador；車站買票的窗口則稱為 taquilla 或 boletería。",
      "image_file": "counter.png"
    },
    {
      "id": "n-50",
      "term_zh": "大廳",
      "related_terms": [
        {
          "term_target": "recepción / lobby",
          "pronunciation": ["/re.sepˈsjon/, /ˈlo.βi/"],
          "specific_note": "接待處/大廳",
          "segments": [
            { "text": "recepción", "meaning": "接待大廳", "tail": " / " },
            { "text": "lobby", "meaning": "大廳(外來語)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Espera en la recepción.",
          "translation": "在接待大廳等。",
          "segments": [
            { "text": "Espera", "meaning": "等待(命令句)", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "recepción", "meaning": "大廳", "tail": "." }
          ]
        },
        {
          "sentence": "Nos vemos en el lobby.",
          "translation": "在大廳碰面。",
          "segments": [
            { "text": "Nos", "meaning": "我們(互相)", "tail": " " },
            { "text": "vemos", "meaning": "看見", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "lobby", "meaning": "大廳", "tail": "." }
          ]
        },
        {
          "sentence": "Llame a la recepción.",
          "translation": "打電話給櫃檯(大廳)。",
          "segments": [
            { "text": "Llame", "meaning": "您打電話(命令句)", "tail": " " },
            { "text": "a", "meaning": "向/給", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "recepción", "meaning": "接待大廳", "tail": "." }
          ]
        }
      ],
      "usage_note": "雖然西文有 propio 的字 (recepción)，但現代飯店也很常直接使用英文借詞 el lobby，大家都聽得懂。",
      "image_file": "lobby.png"
    },
    {
      "id": "n-51",
      "term_zh": "預定 / 預約",
      "related_terms": [
        {
          "term_target": "reserva / reservación",
          "pronunciation": ["/reˈseɾ.βa/, /re.seɾ.βaˈsjon/"],
          "specific_note": "",
          "segments": [
            { "text": "reserva", "meaning": "預約(西班牙)", "tail": " / " },
            { "text": "reservación", "meaning": "預約(拉美)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hacer una reserva.",
          "translation": "做預約。",
          "segments": [
            { "text": "Hacer", "meaning": "做", "tail": " " },
            { "text": "una", "meaning": "一個", "tail": " " },
            { "text": "reserva", "meaning": "預約", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo una reserva a nombre de Juan.",
          "translation": "我有預約，名字是 Juan (胡安)。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "una", "meaning": "一個", "tail": " " },
            { "text": "reserva", "meaning": "預約", "tail": " " },
            { "text": "a", "meaning": "以", "tail": " " },
            { "text": "nombre", "meaning": "名字", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "Juan", "meaning": "胡安", "tail": "." }
          ]
        },
        {
          "sentence": "Quiero cancelar la reserva.",
          "translation": "我想取消預約。",
          "segments": [
            { "text": "Quiero", "meaning": "我想", "tail": " " },
            { "text": "cancelar", "meaning": "取消", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "reserva", "meaning": "預約", "tail": "." }
          ]
        }
      ],
      "usage_note": "Tengo una reserva a nombre de... (我有名為...的預約) 是去餐廳或飯店報到時的必備金句。",
      "image_file": "reservation.png"
    },
    {
      "id": "n-52",
      "term_zh": "入住",
      "related_terms": [
        {
          "term_target": "check-in / registro",
          "pronunciation": ["/ˈtʃek in/, /reˈxis.tɾo/"],
          "specific_note": "外來語/登記",
          "segments": [
            { "text": "check-in", "meaning": "入住(外來語)", "tail": " / " },
            { "text": "registro", "meaning": "登記", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hora de check-in.",
          "translation": "入住時間。",
          "segments": [
            { "text": "Hora", "meaning": "時間", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "check-in", "meaning": "入住", "tail": "." }
          ]
        },
        {
          "sentence": "Queremos hacer el check-in.",
          "translation": "我們想辦理入住。",
          "segments": [
            { "text": "Queremos", "meaning": "我們想", "tail": " " },
            { "text": "hacer", "meaning": "做", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "check-in", "meaning": "入住", "tail": "." }
          ]
        },
        {
          "sentence": "¿A qué hora es el check-in?",
          "translation": "入住時間是幾點？",
          "segments": [
            { "text": "¿A", "meaning": "在", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時間", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "check-in?", "meaning": "入住", "tail": "" }
          ]
        }
      ],
      "usage_note": "西語系國家的飯店已經非常習慣使用英文的 check-in (當作陽性名詞 el check-in 使用)。",
      "image_file": "check_in.png"
    },
    {
      "id": "n-53",
      "term_zh": "退房",
      "related_terms": [
        {
          "term_target": "check-out / salida",
          "pronunciation": ["/ˈtʃek aut/, /saˈli.ða/"],
          "specific_note": "外來語/離開",
          "segments": [
            { "text": "check-out", "meaning": "退房(外來語)", "tail": " / " },
            { "text": "salida", "meaning": "離開", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hacer el check-out.",
          "translation": "辦理退房。",
          "segments": [
            { "text": "Hacer", "meaning": "做", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "check-out", "meaning": "退房", "tail": "." }
          ]
        },
        {
          "sentence": "¿A qué hora es el check-out?",
          "translation": "退房時間是幾點？",
          "segments": [
            { "text": "¿A", "meaning": "在", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時間", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "check-out?", "meaning": "退房", "tail": "" }
          ]
        },
        {
          "sentence": "Ya hicimos el check-out.",
          "translation": "我們已經退房了。",
          "segments": [
            { "text": "Ya", "meaning": "已經", "tail": " " },
            { "text": "hicimos", "meaning": "我們做了(過去式)", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "check-out", "meaning": "退房", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟 check-in 一樣，直接當陽性名詞用 (hacer el check-out) 是最快、櫃台也絕對聽得懂的溝通方式。",
      "image_file": "check_out.png"
    },
    {
      "id": "n-54",
      "term_zh": "飲料",
      "related_terms": [
        {
          "term_target": "bebida / refresco",
          "pronunciation": ["/beˈβi.ða/, /reˈfɾes.ko/"],
          "specific_note": "飲品/汽水",
          "segments": [
            { "text": "bebida", "meaning": "飲料(總稱)", "tail": " / " },
            { "text": "refresco", "meaning": "清涼飲料/汽水", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bebida fría.",
          "translation": "冷飲。",
          "segments": [
            { "text": "Bebida", "meaning": "飲料", "tail": " " },
            { "text": "fría", "meaning": "冷的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Quieres alguna bebida?",
          "translation": "你想要喝點什麼飲料嗎？",
          "segments": [
            { "text": "¿Quieres", "meaning": "你想要", "tail": " " },
            { "text": "alguna", "meaning": "某種", "tail": " " },
            { "text": "bebida?", "meaning": "飲料", "tail": "" }
          ]
        },
        {
          "sentence": "Dos refrescos, por favor.",
          "translation": "請給我兩杯汽水(軟性飲料)。",
          "segments": [
            { "text": "Dos", "meaning": "兩杯", "tail": " " },
            { "text": "refrescos", "meaning": "汽水/飲料", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        }
      ],
      "usage_note": "Bebida 可以泛指所有飲料（包含酒類）。如果特指可樂、雪碧那類的無酒精汽水，通常會說 refresco 或 gaseosa。",
      "image_file": "drink.png"
    },
    {
      "id": "n-55",
      "term_zh": "菜單",
      "related_terms": [
        {
          "term_target": "menú / carta",
          "pronunciation": ["/meˈnu/, /ˈkaɾ.ta/"],
          "specific_note": "套餐/單點菜單",
          "segments": [
            { "text": "menú", "meaning": "套餐/菜單", "tail": " / " },
            { "text": "carta", "meaning": "單點菜單", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "El menú, por favor.",
          "translation": "請給我菜單。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "menú", "meaning": "菜單", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "¿Puedo ver la carta?",
          "translation": "我可以看菜單嗎？",
          "segments": [
            { "text": "¿Puedo", "meaning": "我可以", "tail": " " },
            { "text": "ver", "meaning": "看", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "carta?", "meaning": "菜單", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuál es el menú del día?",
          "translation": "今天的每日特餐是什麼？",
          "segments": [
            { "text": "¿Cuál", "meaning": "哪一個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "menú", "meaning": "套餐/菜單", "tail": " " },
            { "text": "del", "meaning": "的(de+el)", "tail": " " },
            { "text": "día?", "meaning": "日子/今天", "tail": "" }
          ]
        }
      ],
      "usage_note": "這是一個文化坑：在西語系餐廳，el menú 常常是指划算的「每日套餐(set menu)」，如果你要看整本單點的菜色，要說 la carta。",
      "image_file": "menu.png"
    },
    {
      "id": "n-56",
      "term_zh": "午餐",
      "related_terms": [
        {
          "term_target": "almuerzo",
          "pronunciation": ["/alˈmweɾ.so/"],
          "specific_note": "",
          "segments": [{ "text": "almuerzo", "meaning": "午餐", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Comer el almuerzo.",
          "translation": "吃午餐。",
          "segments": [
            { "text": "Comer", "meaning": "吃", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "almuerzo", "meaning": "午餐", "tail": "." }
          ]
        },
        {
          "sentence": "Es hora del almuerzo.",
          "translation": "午餐時間到了。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "hora", "meaning": "時刻", "tail": " " },
            { "text": "del", "meaning": "的(de+el)", "tail": " " },
            { "text": "almuerzo", "meaning": "午餐", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué hay para el almuerzo?",
          "translation": "午餐吃什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "hay", "meaning": "有", "tail": " " },
            { "text": "para", "meaning": "給/為了", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "almuerzo?", "meaning": "午餐", "tail": "" }
          ]
        }
      ],
      "usage_note": "在西班牙和拉丁美洲，午餐(almuerzo)通常是一天中最豐盛、吃得最久的一餐，時間也偏晚（約下午兩三點）。",
      "image_file": "lunch.png"
    },
    {
      "id": "n-57",
      "term_zh": "晚餐",
      "related_terms": [
        {
          "term_target": "cena",
          "pronunciation": ["/ˈse.na/"],
          "specific_note": "",
          "segments": [{ "text": "cena", "meaning": "晚餐", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Preparar la cena.",
          "translation": "準備晚餐。",
          "segments": [
            { "text": "Preparar", "meaning": "準備", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "cena", "meaning": "晚餐", "tail": "." }
          ]
        },
        {
          "sentence": "La cena está lista.",
          "translation": "晚餐準備好了。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "cena", "meaning": "晚餐", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "lista", "meaning": "準備好的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué quieres para la cena?",
          "translation": "晚餐你想吃什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "quieres", "meaning": "你想要", "tail": " " },
            { "text": "para", "meaning": "給/為了", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "cena?", "meaning": "晚餐", "tail": "" }
          ]
        }
      ],
      "usage_note": "西語系國家的晚餐吃得非常晚，尤其是西班牙，晚上九點十點吃晚餐是很正常的！",
      "image_file": "dinner.png"
    },
    {
      "id": "n-58",
      "term_zh": "帳單",
      "related_terms": [
        {
          "term_target": "cuenta",
          "pronunciation": ["/ˈkwen.ta/"],
          "specific_note": "",
          "segments": [{ "text": "cuenta", "meaning": "帳單", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Revisar la cuenta.",
          "translation": "確認帳單。",
          "segments": [
            { "text": "Revisar", "meaning": "檢查/核對", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "cuenta", "meaning": "帳單", "tail": "." }
          ]
        },
        {
          "sentence": "La cuenta, por favor.",
          "translation": "麻煩買單 / 請給我帳單。 (餐廳必備神句)",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "cuenta", "meaning": "帳單", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Yo pago la cuenta.",
          "translation": "我來付帳 (這頓算我的)。",
          "segments": [
            { "text": "Yo", "meaning": "我", "tail": " " },
            { "text": "pago", "meaning": "我付錢", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "cuenta", "meaning": "帳單", "tail": "." }
          ]
        }
      ],
      "usage_note": "去餐廳要結帳時，看著服務生並在空中做出寫字的動作，然後說 La cuenta, por favor 他們就會拿帳單來了。",
      "image_file": "bill.png"
    },
    {
      "id": "n-59",
      "term_zh": "價錢",
      "related_terms": [
        {
          "term_target": "precio",
          "pronunciation": ["/ˈpɾe.sjo/"],
          "specific_note": "",
          "segments": [{ "text": "precio", "meaning": "價格", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Buen precio.",
          "translation": "好價格 (很划算)。",
          "segments": [
            { "text": "Buen", "meaning": "好的", "tail": " " },
            { "text": "precio", "meaning": "價格", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuál es el precio?",
          "translation": "價格是多少？",
          "segments": [
            { "text": "¿Cuál", "meaning": "哪一個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "precio?", "meaning": "價格", "tail": "" }
          ]
        },
        {
          "sentence": "El precio es muy alto.",
          "translation": "價格很高。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "precio", "meaning": "價格", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "alto", "meaning": "高的", "tail": "." }
          ]
        }
      ],
      "usage_note": "要知道一個東西多少錢，口語更常直接用動詞問 ¿Cuánto cuesta? (這花費多少？)。",
      "image_file": "price.png"
    },
    {
      "id": "n-60",
      "term_zh": "收據",
      "related_terms": [
        {
          "term_target": "recibo / ticket",
          "pronunciation": ["/reˈsi.βo/, /ˈti.ket/"],
          "specific_note": "收據/發票",
          "segments": [
            { "text": "recibo", "meaning": "收據", "tail": " / " },
            { "text": "ticket", "meaning": "收據/小票", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "El recibo, por favor.",
          "translation": "請給我收據。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "recibo", "meaning": "收據", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Guarda el recibo.",
          "translation": "保留收據。",
          "segments": [
            { "text": "Guarda", "meaning": "保存(命令句)", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "recibo", "meaning": "收據", "tail": "." }
          ]
        },
        {
          "sentence": "¿Necesita recibo?",
          "translation": "您需要收據(明細)嗎？",
          "segments": [
            { "text": "¿Necesita", "meaning": "您需要", "tail": " " },
            { "text": "recibo?", "meaning": "收據", "tail": "" }
          ]
        }
      ],
      "usage_note": "買完東西拿到的那張熱感應紙小收據，當地人常直接用英文借詞叫 el ticket (踢ㄎㄟˋ)。",
      "image_file": "receipt.png"
    },
    {
      "id": "n-61",
      "term_zh": "尺寸",
      "related_terms": [
        {
          "term_target": "talla / tamaño",
          "pronunciation": ["/ˈta.ʝa/, /taˈma.ɲo/"],
          "specific_note": "衣服/物品",
          "segments": [
            { "text": "talla", "meaning": "尺寸(服飾)", "tail": " / " },
            { "text": "tamaño", "meaning": "大小(物品)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tamaño grande.",
          "translation": "大尺寸 (物品)。",
          "segments": [
            { "text": "Tamaño", "meaning": "大小", "tail": " " },
            { "text": "grande", "meaning": "大", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué talla usas?",
          "translation": "你穿什麼尺寸？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "talla", "meaning": "尺寸", "tail": " " },
            { "text": "usas?", "meaning": "你使用/穿", "tail": "" }
          ]
        },
        {
          "sentence": "No es mi talla.",
          "translation": "尺寸不對 (這不是我的尺寸)。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "talla", "meaning": "尺寸", "tail": "." }
          ]
        }
      ],
      "usage_note": "出國血拚必備：買衣服跟鞋子的尺寸叫 talla，買飲料或東西的大小杯/體積則是 tamaño。",
      "image_file": "size.png"
    },
    {
      "id": "n-62",
      "term_zh": "入口",
      "related_terms": [
        {
          "term_target": "entrada",
          "pronunciation": ["/enˈtɾa.ða/"],
          "specific_note": "",
          "segments": [{ "text": "entrada", "meaning": "入口/門票", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Entrada principal.",
          "translation": "正門入口。",
          "segments": [
            { "text": "Entrada", "meaning": "入口", "tail": " " },
            { "text": "principal", "meaning": "主要的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde está la entrada?",
          "translation": "入口在哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "entrada?", "meaning": "入口", "tail": "" }
          ]
        },
        {
          "sentence": "Prohibida la entrada.",
          "translation": "禁止進入 (常見告示)。",
          "segments": [
            { "text": "Prohibida", "meaning": "被禁止的", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "entrada", "meaning": "進入", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性名詞。去電影院或遊樂園買的「門票」，西文也是用 entrada 這個字喔！",
      "image_file": "entrance.png"
    },
    {
      "id": "n-63",
      "term_zh": "出口",
      "related_terms": [
        {
          "term_target": "salida",
          "pronunciation": ["/saˈli.ða/"],
          "specific_note": "",
          "segments": [{ "text": "salida", "meaning": "出口/離開", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Salida por aquí.",
          "translation": "這裡出口 (由此離開)。",
          "segments": [
            { "text": "Salida", "meaning": "出口", "tail": " " },
            { "text": "por", "meaning": "經由", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Salida de emergencia.",
          "translation": "緊急出口。",
          "segments": [
            { "text": "Salida", "meaning": "出口", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "emergencia", "meaning": "緊急狀況", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde está la salida?",
          "translation": "出口在哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "salida?", "meaning": "出口", "tail": "" }
          ]
        }
      ],
      "usage_note": "陰性名詞。在車站或大型建築物裡面迷路時，抬頭找寫著 Salida 的綠色或紅色牌子就對了。",
      "image_file": "exit.png"
    },
    {
      "id": "n-64",
      "term_zh": "台灣",
      "related_terms": [
        {
          "term_target": "Taiwán",
          "pronunciation": ["/taiˈwan/"],
          "specific_note": "",
          "segments": [{ "text": "Taiwán", "meaning": "台灣", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Me encanta Taiwán.",
          "translation": "我愛(非常喜歡)台灣。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "encanta", "meaning": "極喜歡", "tail": " " },
            { "text": "Taiwán", "meaning": "台灣", "tail": "." }
          ]
        },
        {
          "sentence": "Bienvenidos a Taiwán.",
          "translation": "歡迎來台灣。",
          "segments": [
            { "text": "Bienvenidos", "meaning": "受歡迎的(複數)", "tail": " " },
            { "text": "a", "meaning": "來到", "tail": " " },
            { "text": "Taiwán", "meaning": "台灣", "tail": "." }
          ]
        },
        {
          "sentence": "Taiwán es muy bonito.",
          "translation": "台灣很美。",
          "segments": [
            { "text": "Taiwán", "meaning": "台灣", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "bonito", "meaning": "漂亮的", "tail": "." }
          ]
        }
      ],
      "usage_note": "w 在西班牙文中是非常少見的字母 (通常只出現在外來語)。注意 a 上面要加重音符號喔！",
      "image_file": "taiwan.png"
    },
    {
      "id": "n-65",
      "term_zh": "台灣人",
      "related_terms": [
        {
          "term_target": "taiwanés / taiwanesa",
          "pronunciation": ["/tai.waˈnes/, /tai.waˈne.sa/"],
          "specific_note": "分男女",
          "segments": [
            { "text": "taiwanés", "meaning": "台灣人(男)", "tail": " / " },
            { "text": "taiwanesa", "meaning": "台灣人(女)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Soy taiwanés.",
          "translation": "我是台灣人 (男性說法)。",
          "segments": [
            { "text": "Soy", "meaning": "我是", "tail": " " },
            { "text": "taiwanés", "meaning": "台灣人", "tail": "." }
          ]
        },
        {
          "sentence": "Soy taiwanesa.",
          "translation": "我是台灣人 (女性說法)。",
          "segments": [
            { "text": "Soy", "meaning": "我是", "tail": " " },
            { "text": "taiwanesa", "meaning": "台灣人(女)", "tail": "." }
          ]
        },
        {
          "sentence": "Me gusta la comida taiwanesa.",
          "translation": "我喜歡台灣食物。 (食物是陰性，所以用taiwanesa)",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "comida", "meaning": "食物(陰性)", "tail": " " },
            { "text": "taiwanesa", "meaning": "台灣的", "tail": "." }
          ]
        }
      ],
      "usage_note": "國籍有分性別！男生介紹自己說 Soy taiwanés，女生記得字尾要加上 a 變成 Soy taiwanesa。",
      "image_file": "taiwanese.png"
    },
    {
      "id": "n-66",
      "term_zh": "一切事物",
      "related_terms": [
        {
          "term_target": "todo",
          "pronunciation": ["/ˈto.ðo/"],
          "specific_note": "",
          "segments": [{ "text": "todo", "meaning": "一切", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Todo está bien.",
          "translation": "一切都好。",
          "segments": [
            { "text": "Todo", "meaning": "一切", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "bien", "meaning": "好", "tail": "." }
          ]
        },
        {
          "sentence": "Todo está listo.",
          "translation": "一切準備就緒。",
          "segments": [
            { "text": "Todo", "meaning": "一切", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "listo", "meaning": "準備好的", "tail": "." }
          ]
        },
        {
          "sentence": "Gracias por todo.",
          "translation": "感謝這一切 (感謝你的所有幫忙)。",
          "segments": [
            { "text": "Gracias", "meaning": "感謝", "tail": " " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "todo", "meaning": "一切", "tail": "." }
          ]
        }
      ],
      "usage_note": "Todo 單獨出現且後面沒有接名詞時，就是當代名詞「一切事物 (everything)」使用。",
      "image_file": "everything.png"
    },
    {
      "id": "n-67",
      "term_zh": "錢包",
      "related_terms": [
        {
          "term_target": "cartera / billetera",
          "pronunciation": ["/kaɾˈte.ɾa/, /bi.ʝeˈte.ɾa/"],
          "specific_note": "皮夾",
          "segments": [
            { "text": "cartera", "meaning": "皮夾(西班牙常見)", "tail": " / " },
            { "text": "billetera", "meaning": "皮夾(拉美常見)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Perdí mi cartera.",
          "translation": "我掉了(遺失)錢包。",
          "segments": [
            { "text": "Perdí", "meaning": "我弄丟(過去式)", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "cartera", "meaning": "錢包", "tail": "." }
          ]
        },
        {
          "sentence": "Mi cartera está vacía.",
          "translation": "我的錢包空了。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "cartera", "meaning": "錢包", "tail": " " },
            { "text": "está", "meaning": "處於", "tail": " " },
            { "text": "vacía", "meaning": "空的", "tail": "." }
          ]
        },
        {
          "sentence": "Encontré una cartera.",
          "translation": "我撿到(找到)一個錢包。",
          "segments": [
            { "text": "Encontré", "meaning": "我找到(過去式)", "tail": " " },
            { "text": "una", "meaning": "一個", "tail": " " },
            { "text": "cartera", "meaning": "錢包", "tail": "." }
          ]
        }
      ],
      "usage_note": "西班牙人很常講 cartera；中南美洲則常講 billetera (裝 billete 鈔票的東西)。另外，零錢包叫做 monedero。",
      "image_file": "wallet.png"
    },
    {
      "id": "n-68",
      "term_zh": "身分證 / 證件",
      "related_terms": [
        {
          "term_target": "identificación / DNI",
          "pronunciation": ["/i.den.ti.fi.kaˈsjon/"],
          "specific_note": "證件",
          "segments": [
            { "text": "identificación", "meaning": "身分證明", "tail": " / " },
            { "text": "DNI", "meaning": "國民身分證(西班牙)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Su identificación, por favor.",
          "translation": "請出示您的證件。",
          "segments": [
            { "text": "Su", "meaning": "您的", "tail": " " },
            { "text": "identificación", "meaning": "身分證", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "¿Tiene alguna identificación?",
          "translation": "你有身分證件嗎？ (買酒或查票時常被問)",
          "segments": [
            { "text": "¿Tiene", "meaning": "您有", "tail": " " },
            { "text": "alguna", "meaning": "任何的", "tail": " " },
            { "text": "identificación?", "meaning": "身分證件", "tail": "" }
          ]
        },
        {
          "sentence": "Revisar la identificación.",
          "translation": "檢查證件。",
          "segments": [
            { "text": "Revisar", "meaning": "檢查", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "identificación", "meaning": "身分證", "tail": "." }
          ]
        }
      ],
      "usage_note": "外國人出國旅遊時，被要求出示 identificación 時，直接拿護照 (pasaporte) 出來就可以了。",
      "image_file": "id.png"
    },
    {
      "id": "n-69",
      "term_zh": "護照",
      "related_terms": [
        {
          "term_target": "pasaporte",
          "pronunciation": ["/pa.saˈpoɾ.te/"],
          "specific_note": "",
          "segments": [{ "text": "pasaporte", "meaning": "護照", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "El pasaporte, por favor.",
          "translation": "請出示護照。 (海關必備)",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "pasaporte", "meaning": "護照", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Perdí mi pasaporte.",
          "translation": "我弄丟了我的護照。 (求助大使館用)",
          "segments": [
            { "text": "Perdí", "meaning": "我弄丟(過去式)", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "pasaporte", "meaning": "護照", "tail": "." }
          ]
        },
        {
          "sentence": "Lleva tu pasaporte.",
          "translation": "帶上你的護照。",
          "segments": [
            { "text": "Lleva", "meaning": "攜帶(命令句)", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "pasaporte", "meaning": "護照", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性名詞。過海關或飯店登記入住時，最重要的通關密語。",
      "image_file": "passport.png"
    },
    {
      "id": "n-70",
      "term_zh": "餐廳",
      "related_terms": [
        {
          "term_target": "restaurante",
          "pronunciation": ["/res.tauˈɾan.te/"],
          "specific_note": "",
          "segments": [{ "text": "restaurante", "meaning": "餐廳", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Un buen restaurante.",
          "translation": "一間好餐廳。",
          "segments": [
            { "text": "Un", "meaning": "一間", "tail": " " },
            { "text": "buen", "meaning": "好的", "tail": " " },
            { "text": "restaurante", "meaning": "餐廳", "tail": "." }
          ]
        },
        {
          "sentence": "Vamos a comer a un restaurante.",
          "translation": "我們去餐廳吃吧。",
          "segments": [
            { "text": "Vamos", "meaning": "我們去", "tail": " " },
            { "text": "a", "meaning": "去", "tail": " " },
            { "text": "comer", "meaning": "吃", "tail": " " },
            { "text": "a", "meaning": "到", "tail": " " },
            { "text": "un", "meaning": "一間", "tail": " " },
            { "text": "restaurante", "meaning": "餐廳", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué restaurante es bueno?",
          "translation": "哪間餐廳好吃(好)？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼(哪間)", "tail": " " },
            { "text": "restaurante", "meaning": "餐廳", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "bueno?", "meaning": "好的", "tail": "" }
          ]
        }
      ],
      "usage_note": "陽性名詞。發音跟英文有點像，但要注意 r 帶有稍微的彈舌音，且字尾的 e 要發出「欸」的聲音喔。",
      "image_file": "restaurant.png"
    },
    {
      "id": "n-71",
      "term_zh": "飯店 / 旅館",
      "related_terms": [
        {
          "term_target": "hotel",
          "pronunciation": ["/oˈtel/"],
          "specific_note": "",
          "segments": [{ "text": "hotel", "meaning": "飯店", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Reservar un hotel.",
          "translation": "預訂一間飯店。",
          "segments": [
            { "text": "Reservar", "meaning": "預訂", "tail": " " },
            { "text": "un", "meaning": "一間", "tail": " " },
            { "text": "hotel", "meaning": "飯店", "tail": "." }
          ]
        },
        {
          "sentence": "Quedarse en un hotel.",
          "translation": "住在飯店 (停留)。",
          "segments": [
            { "text": "Quedarse", "meaning": "停留/留下", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "un", "meaning": "一間", "tail": " " },
            { "text": "hotel", "meaning": "飯店", "tail": "." }
          ]
        },
        {
          "sentence": "Este hotel es muy bonito.",
          "translation": "這間飯店很漂亮(不錯)。",
          "segments": [
            { "text": "Este", "meaning": "這間", "tail": " " },
            { "text": "hotel", "meaning": "飯店", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "bonito", "meaning": "漂亮", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的 h 永遠不發音！所以不要發成英文的 hotel，要直接從 o 開始唸（歐-爹L）。",
      "image_file": "hotel.png"
    },
    {
      "id": "n-72",
      "term_zh": "場所 / 地方",
      "related_terms": [
        {
          "term_target": "lugar / sitio",
          "pronunciation": ["/luˈɣaɾ/, /ˈsi.tjo/"],
          "specific_note": "",
          "segments": [
            { "text": "lugar", "meaning": "地方", "tail": " / " },
            { "text": "sitio", "meaning": "場所/地點", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Un buen lugar.",
          "translation": "一個好地方。",
          "segments": [
            { "text": "Un", "meaning": "一個", "tail": " " },
            { "text": "buen", "meaning": "好的", "tail": " " },
            { "text": "lugar", "meaning": "地方", "tail": "." }
          ]
        },
        {
          "sentence": "El lugar equivocado.",
          "translation": "錯的地方 (走錯地方)。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "lugar", "meaning": "地方", "tail": " " },
            { "text": "equivocado", "meaning": "錯誤的", "tail": "." }
          ]
        },
        {
          "sentence": "Este es un lugar famoso.",
          "translation": "這是個有名的地方。",
          "segments": [
            { "text": "Este", "meaning": "這", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "lugar", "meaning": "地方", "tail": " " },
            { "text": "famoso", "meaning": "有名的", "tail": "." }
          ]
        }
      ],
      "usage_note": "這兩個字可以互換使用，但 lugar 最為普遍。西文沒有 place 的直接動詞用法，如果是放東西要用 poner。",
      "image_file": "place.png"
    },
    {
      "id": "n-73",
      "term_zh": "店員 / 售貨員",
      "related_terms": [
        {
          "term_target": "vendedor / dependiente",
          "pronunciation": ["/ben.deˈðoɾ/, /de.penˈdjen.te/"],
          "specific_note": "拉美/西班牙",
          "segments": [
            { "text": "vendedor", "meaning": "售貨員/店員(拉美)", "tail": " / " },
            { "text": "dependiente", "meaning": "店員(西班牙)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Pregúntale al vendedor.",
          "translation": "去問店員。",
          "segments": [
            { "text": "Pregúntale", "meaning": "問他(pregunta+le)", "tail": " " },
            { "text": "al", "meaning": "向(a+el)", "tail": " " },
            { "text": "vendedor", "meaning": "店員", "tail": "." }
          ]
        },
        {
          "sentence": "El vendedor es muy amable.",
          "translation": "店員很熱心(親切)。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "vendedor", "meaning": "店員", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "amable", "meaning": "親切的", "tail": "." }
          ]
        },
        {
          "sentence": "Soy vendedor.",
          "translation": "我是店員。",
          "segments": [
            { "text": "Soy", "meaning": "我是", "tail": " " },
            { "text": "vendedor", "meaning": "售貨員/店員", "tail": "." }
          ]
        }
      ],
      "usage_note": "在拉丁美洲，商店賣東西的人通常叫 vendedor (女：vendedora)。在西班牙，很常聽到 dependiente。",
      "image_file": "clerk.png"
    },
    {
      "id": "n-74",
      "term_zh": "超市",
      "related_terms": [
        {
          "term_target": "supermercado",
          "pronunciation": ["/su.peɾ.meɾˈka.ðo/"],
          "specific_note": "",
          "segments": [{ "text": "supermercado", "meaning": "超市", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ir al supermercado.",
          "translation": "去超市。",
          "segments": [
            { "text": "Ir", "meaning": "去", "tail": " " },
            { "text": "al", "meaning": "往(a+el)", "tail": " " },
            { "text": "supermercado", "meaning": "超市", "tail": "." }
          ]
        },
        {
          "sentence": "Comprar comida en el supermercado.",
          "translation": "在超市買食物。",
          "segments": [
            { "text": "Comprar", "meaning": "買", "tail": " " },
            { "text": "comida", "meaning": "食物", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "supermercado", "meaning": "超市", "tail": "." }
          ]
        },
        {
          "sentence": "¿Hay un supermercado por aquí cerca?",
          "translation": "這附近有超市嗎？",
          "segments": [
            { "text": "¿Hay", "meaning": "有", "tail": " " },
            { "text": "un", "meaning": "一間", "tail": " " },
            { "text": "supermercado", "meaning": "超市", "tail": " " },
            { "text": "por", "meaning": "在", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": " " },
            { "text": "cerca?", "meaning": "附近", "tail": "" }
          ]
        }
      ],
      "usage_note": "陽性名詞。字面意思就是 super(超級) + mercado(市場)。口語中大家常常偷懶簡稱為 el súper。",
      "image_file": "supermarket.png"
    },
    {
      "id": "n-75",
      "term_zh": "月台",
      "related_terms": [
        {
          "term_target": "andén",
          "pronunciation": ["/anˈden/"],
          "specific_note": "",
          "segments": [{ "text": "andén", "meaning": "月台", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Andén número uno.",
          "translation": "第一月台。",
          "segments": [
            { "text": "Andén", "meaning": "月台", "tail": " " },
            { "text": "número", "meaning": "號碼", "tail": " " },
            { "text": "uno", "meaning": "一", "tail": "." }
          ]
        },
        {
          "sentence": "Espera en el andén.",
          "translation": "在月台等。",
          "segments": [
            { "text": "Espera", "meaning": "等待(命令句)", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "andén", "meaning": "月台", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué andén va para Taipéi?",
          "translation": "去台北要在哪個月台？",
          "segments": [
            { "text": "¿Qué", "meaning": "哪一個", "tail": " " },
            { "text": "andén", "meaning": "月台", "tail": " " },
            { "text": "va", "meaning": "去", "tail": " " },
            { "text": "para", "meaning": "往", "tail": " " },
            { "text": "Taipéi?", "meaning": "台北", "tail": "" }
          ]
        }
      ],
      "usage_note": "陽性名詞。搭火車或捷運時找月台就是找 andén (在西班牙有時候車站標示會寫 vía 軌道)。",
      "image_file": "platform.png"
    },
    {
      "id": "n-76",
      "term_zh": "音樂",
      "related_terms": [
        {
          "term_target": "música",
          "pronunciation": ["/ˈmu.si.ka/"],
          "specific_note": "",
          "segments": [{ "text": "música", "meaning": "音樂", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Escuchar música.",
          "translation": "聽音樂。",
          "segments": [
            { "text": "Escuchar", "meaning": "聽", "tail": " " },
            { "text": "música", "meaning": "音樂", "tail": "." }
          ]
        },
        {
          "sentence": "Me gusta la música pop.",
          "translation": "我喜歡流行音樂。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "música", "meaning": "音樂", "tail": " " },
            { "text": "pop", "meaning": "流行", "tail": "." }
          ]
        },
        {
          "sentence": "La música está muy alta.",
          "translation": "音樂很大聲。 (西文不說 loud，說「高」)",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "música", "meaning": "音樂", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "alta", "meaning": "高的(大聲的)", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性名詞。要注意西文形容音樂「很大聲」，是用 alta (高的)；太小聲則用 baja (低的)。",
      "image_file": "music.png"
    },
    {
      "id": "n-77",
      "term_zh": "雨",
      "related_terms": [
        {
          "term_target": "lluvia",
          "pronunciation": ["/ˈʝu.βja/"],
          "specific_note": "名詞",
          "segments": [{ "text": "lluvia", "meaning": "雨(名詞)", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Está lloviendo.",
          "translation": "正在下雨。 (用動詞llover的進行式)",
          "segments": [
            { "text": "Está", "meaning": "正在", "tail": " " },
            { "text": "lloviendo", "meaning": "下雨", "tail": "." }
          ]
        },
        {
          "sentence": "Lluvia fuerte.",
          "translation": "大雨。 (西文說強烈的雨)",
          "segments": [
            { "text": "Lluvia", "meaning": "雨", "tail": " " },
            { "text": "fuerte", "meaning": "強壯的/強烈的", "tail": "." }
          ]
        },
        {
          "sentence": "No me gusta la lluvia.",
          "translation": "我不喜歡下雨(雨天)。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "喜歡", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "lluvia", "meaning": "雨", "tail": "." }
          ]
        }
      ],
      "usage_note": "名詞是 lluvia (雨水)；動詞下雨是 llover。注意 ll 發 y 的音，唸起來像「幽逼亞」。",
      "image_file": "rain.png"
    },
    {
      "id": "n-78",
      "term_zh": "照片",
      "related_terms": [
        {
          "term_target": "foto",
          "pronunciation": ["/ˈfo.to/"],
          "specific_note": "陰性名詞",
          "segments": [{ "text": "foto", "meaning": "照片", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tomar una foto.",
          "translation": "拍張照。",
          "segments": [
            { "text": "Tomar", "meaning": "拿取/拍", "tail": " " },
            { "text": "una", "meaning": "一張(陰性)", "tail": " " },
            { "text": "foto", "meaning": "照片", "tail": "." }
          ]
        },
        {
          "sentence": "Mira esta foto.",
          "translation": "看這張照片。",
          "segments": [
            { "text": "Mira", "meaning": "看(命令句)", "tail": " " },
            { "text": "esta", "meaning": "這張(陰性)", "tail": " " },
            { "text": "foto", "meaning": "照片", "tail": "." }
          ]
        },
        {
          "sentence": "¿Puedes tomarnos una foto?",
          "translation": "可以幫我們拍張照嗎？ (旅遊神句)",
          "segments": [
            { "text": "¿Puedes", "meaning": "你可以", "tail": " " },
            { "text": "tomarnos", "meaning": "幫我們拍(tomar+nos)", "tail": " " },
            { "text": "una", "meaning": "一張", "tail": " " },
            { "text": "foto?", "meaning": "照片", "tail": "" }
          ]
        }
      ],
      "usage_note": "大坑預警！foto 雖然結尾是 o，但它是 fotografía 的縮寫，所以是「陰性」的 (la foto / una foto)！",
      "image_file": "picture.png"
    },
    {
      "id": "n-79",
      "term_zh": "書",
      "related_terms": [
        {
          "term_target": "libro",
          "pronunciation": ["/ˈli.βɾo/"],
          "specific_note": "",
          "segments": [{ "text": "libro", "meaning": "書", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Leer un libro.",
          "translation": "看書 (閱讀一本書)。",
          "segments": [
            { "text": "Leer", "meaning": "閱讀", "tail": " " },
            { "text": "un", "meaning": "一本", "tail": " " },
            { "text": "libro", "meaning": "書", "tail": "." }
          ]
        },
        {
          "sentence": "Abre el libro.",
          "translation": "打開書。",
          "segments": [
            { "text": "Abre", "meaning": "打開(命令句)", "tail": " " },
            { "text": "el", "meaning": "這本", "tail": " " },
            { "text": "libro", "meaning": "書", "tail": "." }
          ]
        },
        {
          "sentence": "Este es mi libro.",
          "translation": "這是我的書。",
          "segments": [
            { "text": "Este", "meaning": "這個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "libro", "meaning": "書", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性名詞。要買書去的書店叫 librería，借書去的圖書館叫 biblioteca，不要搞混囉！",
      "image_file": "book.png"
    },
    {
      "id": "n-80",
      "term_zh": "廁所",
      "related_terms": [
        {
          "term_target": "baño / aseo",
          "pronunciation": ["/ˈba.ɲo/, /aˈse.o/"],
          "specific_note": "",
          "segments": [
            { "text": "baño", "meaning": "廁所(最通用)", "tail": " / " },
            { "text": "aseo", "meaning": "洗手間(西班牙常見)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Dónde está el baño?",
          "translation": "廁所在哪？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "el", "meaning": "這間", "tail": " " },
            { "text": "baño?", "meaning": "廁所", "tail": "" }
          ]
        },
        {
          "sentence": "Ir al baño.",
          "translation": "去上廁所。",
          "segments": [
            { "text": "Ir", "meaning": "去", "tail": " " },
            { "text": "al", "meaning": "往(a+el)", "tail": " " },
            { "text": "baño", "meaning": "廁所", "tail": "." }
          ]
        },
        {
          "sentence": "El baño está limpio.",
          "translation": "廁所很乾淨。",
          "segments": [
            { "text": "El", "meaning": "這間", "tail": " " },
            { "text": "baño", "meaning": "廁所", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": " " },
            { "text": "limpio", "meaning": "乾淨的", "tail": "." }
          ]
        }
      ],
      "usage_note": "最口語通用的字就是 el baño。如果在西班牙的公共場所或餐廳，門上的標示常寫著 Aseos 或是 Servicios。",
      "image_file": "restroom.png"
    },
    {
      "id": "n-81",
      "term_zh": "天氣",
      "related_terms": [
        {
          "term_target": "tiempo / clima",
          "pronunciation": ["/ˈtjem.po/, /ˈkli.ma/"],
          "specific_note": "時間兼天氣/氣候",
          "segments": [
            { "text": "tiempo", "meaning": "天氣/時間", "tail": " / " },
            { "text": "clima", "meaning": "氣候/天氣", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Buen tiempo.",
          "translation": "好天氣。",
          "segments": [
            { "text": "Buen", "meaning": "好的", "tail": " " },
            { "text": "tiempo", "meaning": "天氣", "tail": "." }
          ]
        },
        {
          "sentence": "Mal tiempo.",
          "translation": "壞天氣。",
          "segments": [
            { "text": "Mal", "meaning": "壞的", "tail": " " },
            { "text": "tiempo", "meaning": "天氣", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué tiempo hace?",
          "translation": "天氣如何？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "tiempo", "meaning": "天氣", "tail": " " },
            { "text": "hace?", "meaning": "做(老天爺做什麼天氣)", "tail": "" }
          ]
        }
      ],
      "usage_note": "雖然有 clima 這個字，但日常聊天問「今天天氣怎樣」或是「天氣很好」，西語人士最習慣用 el tiempo 喔！",
      "image_file": "weather.png"
    },
    {
      "id": "n-82",
      "term_zh": "訊息",
      "related_terms": [
        {
          "term_target": "mensaje",
          "pronunciation": ["/menˈsa.xe/"],
          "specific_note": "",
          "segments": [{ "text": "mensaje", "meaning": "訊息", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Enviar un mensaje.",
          "translation": "傳訊息。",
          "segments": [
            { "text": "Enviar", "meaning": "傳送", "tail": " " },
            { "text": "un", "meaning": "一則", "tail": " " },
            { "text": "mensaje", "meaning": "訊息", "tail": "." }
          ]
        },
        {
          "sentence": "Dejar un mensaje.",
          "translation": "留訊息 (留言)。",
          "segments": [
            { "text": "Dejar", "meaning": "留下", "tail": " " },
            { "text": "un", "meaning": "一則", "tail": " " },
            { "text": "mensaje", "meaning": "訊息", "tail": "." }
          ]
        },
        {
          "sentence": "Recibí un mensaje.",
          "translation": "我收到一則訊息。",
          "segments": [
            { "text": "Recibí", "meaning": "我收到(過去式)", "tail": " " },
            { "text": "un", "meaning": "一則", "tail": " " },
            { "text": "mensaje", "meaning": "訊息", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性名詞 (字尾 -aje 的通常是陽性)。傳 LINE、傳簡訊、留語音都可以用這個字。",
      "image_file": "message.png"
    },
    

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
          "term_target": "ahora",
          "pronunciation": ["/aˈo.ɾa/"],
          "specific_note": "",
          "segments": [{ "text": "ahora", "meaning": "現在", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ahora no.",
          "translation": "現在不行 / 現在不要。",
          "segments": [
            { "text": "Ahora", "meaning": "現在", "tail": " " },
            { "text": "no", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde estás ahora?",
          "translation": "你現在在哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "estás", "meaning": "你在", "tail": " " },
            { "text": "ahora?", "meaning": "現在", "tail": "" }
          ]
        },
        {
          "sentence": "Nos vamos ahora.",
          "translation": "我們現在就走(出發)。",
          "segments": [
            { "text": "Nos", "meaning": "我們自己", "tail": " " },
            { "text": "vamos", "meaning": "我們走", "tail": " " },
            { "text": "ahora", "meaning": "現在", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的 h 永遠不發音，所以唸起來像「阿歐拉」。",
      "image_file": "now.png"
    },
    {
      "id": "adv-02",
      "term_zh": "非常",
      "related_terms": [
        {
          "term_target": "muy",
          "pronunciation": ["/muj/"],
          "specific_note": "接形容詞/副詞",
          "segments": [{ "text": "muy", "meaning": "非常", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Muy bien.",
          "translation": "非常好。",
          "segments": [
            { "text": "Muy", "meaning": "非常", "tail": " " },
            { "text": "bien", "meaning": "好", "tail": "." }
          ]
        },
        {
          "sentence": "Está muy caro.",
          "translation": "太貴了 (非常貴)。",
          "segments": [
            { "text": "Está", "meaning": "狀態是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "caro", "meaning": "貴的", "tail": "." }
          ]
        },
        {
          "sentence": "Estoy muy cansado.",
          "translation": "我非常累。",
          "segments": [
            { "text": "Estoy", "meaning": "我處於", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "cansado", "meaning": "累的", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！muy 只能用來修飾形容詞或副詞（例如很高 muy alto）。如果是修飾名詞（例如很多錢），要改用 mucho。",
      "image_file": "very.png"
    },
    {
      "id": "adv-03",
      "term_zh": "真的",
      "related_terms": [
        {
          "term_target": "en serio / de verdad",
          "pronunciation": ["/en ˈse.ɾjo/, /de βeɾˈðað/"],
          "specific_note": "口語常用",
          "segments": [
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "serio", "meaning": "認真", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿En serio?",
          "translation": "你是認真的嗎？ / 真的假的？",
          "segments": [
            { "text": "¿En", "meaning": "在", "tail": " " },
            { "text": "serio?", "meaning": "認真", "tail": "" }
          ]
        },
        {
          "sentence": "Te amo de verdad.",
          "translation": "我是真的愛你。",
          "segments": [
            { "text": "Te", "meaning": "愛你", "tail": " " },
            { "text": "amo", "meaning": "我愛", "tail": " " },
            { "text": "de", "meaning": "出自", "tail": " " },
            { "text": "verdad", "meaning": "真實", "tail": "." }
          ]
        },
        {
          "sentence": "Es muy amable, en serio.",
          "translation": "他人真的很好，說真的。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "amable", "meaning": "親切", "tail": ", " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "serio", "meaning": "認真", "tail": "." }
          ]
        }
      ],
      "usage_note": "拉美和西班牙口語中，表達驚訝的「真的嗎？」或是強調語氣的「說真的」，最常用的就是 ¿En serio? 或 ¿De verdad?。",
      "image_file": "really.png"
    },
    {
      "id": "adv-04",
      "term_zh": "好好地／很好地",
      "related_terms": [
        {
          "term_target": "bien",
          "pronunciation": ["/bjen/"],
          "specific_note": "",
          "segments": [{ "text": "bien", "meaning": "好地", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Todo bien?",
          "translation": "一切都好嗎？",
          "segments": [
            { "text": "¿Todo", "meaning": "一切", "tail": " " },
            { "text": "bien?", "meaning": "好", "tail": "" }
          ]
        },
        {
          "sentence": "Dormí muy bien.",
          "translation": "我睡得很好。",
          "segments": [
            { "text": "Dormí", "meaning": "我睡(過去式)", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "bien", "meaning": "好地", "tail": "." }
          ]
        },
        {
          "sentence": "No me siento bien.",
          "translation": "我身體不太舒服 (我感覺不好)。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "me", "meaning": "我自己", "tail": " " },
            { "text": "siento", "meaning": "我感覺", "tail": " " },
            { "text": "bien", "meaning": "好地", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文最常出現的副詞。問候時回答「我很好」就是說 Bien 或 Muy bien。",
      "image_file": "well.png"
    },
    {
      "id": "adv-05",
      "term_zh": "經常",
      "related_terms": [
        {
          "term_target": "a menudo / seguido",
          "pronunciation": ["/a meˈnu.ðo/, /seˈɣi.ðo/"],
          "specific_note": "",
          "segments": [
            { "text": "a", "meaning": "去", "tail": " " },
            { "text": "menudo", "meaning": "細小的(引申為頻繁)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Vengo aquí a menudo.",
          "translation": "我常來這裡。",
          "segments": [
            { "text": "Vengo", "meaning": "我來", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": " " },
            { "text": "a", "meaning": "以", "tail": " " },
            { "text": "menudo", "meaning": "頻繁", "tail": "." }
          ]
        },
        {
          "sentence": "Llueve muy seguido.",
          "translation": "這裡經常下雨。",
          "segments": [
            { "text": "Llueve", "meaning": "下雨", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "seguido", "meaning": "接連地(頻繁)", "tail": "." }
          ]
        },
        {
          "sentence": "¿Haces ejercicio seguido?",
          "translation": "你常做運動嗎？",
          "segments": [
            { "text": "¿Haces", "meaning": "你做", "tail": " " },
            { "text": "ejercicio", "meaning": "運動", "tail": " " },
            { "text": "seguido?", "meaning": "頻繁地", "tail": "" }
          ]
        }
      ],
      "usage_note": "課本常教 a menudo，但在中南美洲的口語對話中，大家也非常喜歡用 seguido 來表示「經常、頻繁」。",
      "image_file": "often.png"
    },
    {
      "id": "adv-06",
      "term_zh": "通常",
      "related_terms": [
        {
          "term_target": "normalmente",
          "pronunciation": ["/noɾˈmal.men.te/"],
          "specific_note": "",
          "segments": [{ "text": "normalmente", "meaning": "通常/正常地", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Normalmente no.",
          "translation": "通常不會。",
          "segments": [
            { "text": "Normalmente", "meaning": "通常", "tail": " " },
            { "text": "no", "meaning": "不會", "tail": "." }
          ]
        },
        {
          "sentence": "Normalmente me levanto a las siete.",
          "translation": "我通常七點起床。",
          "segments": [
            { "text": "Normalmente", "meaning": "通常", "tail": " " },
            { "text": "me", "meaning": "我自己", "tail": " " },
            { "text": "levanto", "meaning": "我起身", "tail": " " },
            { "text": "a", "meaning": "在", "tail": " " },
            { "text": "las", "meaning": "(接時間)", "tail": " " },
            { "text": "siete", "meaning": "七", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué haces normalmente los fines de semana?",
          "translation": "你週末通常都做什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "haces", "meaning": "你做", "tail": " " },
            { "text": "normalmente", "meaning": "通常", "tail": " " },
            { "text": "los", "meaning": "這些", "tail": " " },
            { "text": "fines", "meaning": "結束", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "semana?", "meaning": "週", "tail": "" }
          ]
        }
      ],
      "usage_note": "結尾是 -mente 的字，在西文中就相當於英文的 -ly，也就是副詞。",
      "image_file": "usually.png"
    },
    {
      "id": "adv-07",
      "term_zh": "已經",
      "related_terms": [
        {
          "term_target": "ya",
          "pronunciation": ["/ʝa/"],
          "specific_note": "",
          "segments": [{ "text": "ya", "meaning": "已經/現在", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ya está.",
          "translation": "已經做好了 / 好了。 (無敵實用句)",
          "segments": [
            { "text": "Ya", "meaning": "已經", "tail": " " },
            { "text": "está", "meaning": "狀態是", "tail": "." }
          ]
        },
        {
          "sentence": "Ya lo sé.",
          "translation": "我已經知道了。",
          "segments": [
            { "text": "Ya", "meaning": "已經", "tail": " " },
            { "text": "lo", "meaning": "它", "tail": " " },
            { "text": "sé", "meaning": "我知道", "tail": "." }
          ]
        },
        {
          "sentence": "Ya comí.",
          "translation": "我已經吃飽了。",
          "segments": [
            { "text": "Ya", "meaning": "已經", "tail": " " },
            { "text": "comí", "meaning": "我吃(過去式)", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的 ya 是無敵好用的字，表示「已經」。做好了、吃飽了、知道了，前面加個 ya 就能搞定。",
      "image_file": "already.png"
    },
    {
      "id": "adv-08",
      "term_zh": "只有",
      "related_terms": [
        {
          "term_target": "solo / solamente",
          "pronunciation": ["/ˈso.lo/, /so.laˈmen.te/"],
          "specific_note": "",
          "segments": [{ "text": "solo", "meaning": "只有", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Solo un poco.",
          "translation": "只有一點點。",
          "segments": [
            { "text": "Solo", "meaning": "只有", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "poco", "meaning": "少許", "tail": "." }
          ]
        },
        {
          "sentence": "Solo estoy mirando.",
          "translation": "我只是看看而已。 (逛街時店員推銷必備回應)",
          "segments": [
            { "text": "Solo", "meaning": "只有", "tail": " " },
            { "text": "estoy", "meaning": "我正在", "tail": " " },
            { "text": "mirando", "meaning": "看(進行式)", "tail": "." }
          ]
        },
        {
          "sentence": "Solo cuesta cinco euros.",
          "translation": "只要(只有)花五歐元。",
          "segments": [
            { "text": "Solo", "meaning": "只有", "tail": " " },
            { "text": "cuesta", "meaning": "花費", "tail": " " },
            { "text": "cinco", "meaning": "五", "tail": " " },
            { "text": "euros", "meaning": "歐元", "tail": "." }
          ]
        }
      ],
      "usage_note": "solo 當副詞是「只有」，當形容詞是「孤單的」。口語對話中，講短短的 solo 比 solamente 常用得多。",
      "image_file": "only.png"
    },
    {
      "id": "adv-09",
      "term_zh": "再次",
      "related_terms": [
        {
          "term_target": "otra vez / de nuevo",
          "pronunciation": ["/ˈo.tɾa bes/, /de ˈnwe.βo/"],
          "specific_note": "",
          "segments": [
            { "text": "otra", "meaning": "另一個", "tail": " " },
            { "text": "vez", "meaning": "次數", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Inténtalo de nuevo.",
          "translation": "再試一次。",
          "segments": [
            { "text": "Inténtalo", "meaning": "嘗試它(命令句)", "tail": " " },
            { "text": "de", "meaning": "以...", "tail": " " },
            { "text": "nuevo", "meaning": "新的方式", "tail": "." }
          ]
        },
        {
          "sentence": "Dilo otra vez, por favor.",
          "translation": "請再說一次。",
          "segments": [
            { "text": "Dilo", "meaning": "說它(命令句)", "tail": " " },
            { "text": "otra", "meaning": "另一個", "tail": " " },
            { "text": "vez", "meaning": "次", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "¡Otra vez!",
          "translation": "又來了！ (可用於抱怨或驚訝)",
          "segments": [
            { "text": "¡Otra", "meaning": "另一個", "tail": " " },
            { "text": "vez!", "meaning": "次", "tail": "" }
          ]
        }
      ],
      "usage_note": "西語中「再一次」最常見的說法是 otra vez (另一次) 或 de nuevo (重新)。",
      "image_file": "again.png"
    },
    {
      "id": "adv-10",
      "term_zh": "大約",
      "related_terms": [
        {
          "term_target": "más o menos",
          "pronunciation": ["/mas o ˈme.nos/"],
          "specific_note": "大約/馬馬虎虎",
          "segments": [
            { "text": "más", "meaning": "多", "tail": " " },
            { "text": "o", "meaning": "或", "tail": " " },
            { "text": "menos", "meaning": "少", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "A las diez, más o menos.",
          "translation": "大約十點。",
          "segments": [
            { "text": "A", "meaning": "在", "tail": " " },
            { "text": "las", "meaning": "這", "tail": " " },
            { "text": "diez", "meaning": "十", "tail": ", " },
            { "text": "más", "meaning": "多", "tail": " " },
            { "text": "o", "meaning": "或", "tail": " " },
            { "text": "menos", "meaning": "少", "tail": "." }
          ]
        },
        {
          "sentence": "Más o menos.",
          "translation": "差不多吧 / 馬馬虎虎。 (別人問你好不好的超常用神回覆)",
          "segments": [
            { "text": "Más", "meaning": "多", "tail": " " },
            { "text": "o", "meaning": "或", "tail": " " },
            { "text": "menos", "meaning": "少", "tail": "." }
          ]
        },
        {
          "sentence": "Tarda unos cinco minutos.",
          "translation": "大概(需要花)五分鐘。 (加 un/unos 在數字前也有大約的意思)",
          "segments": [
            { "text": "Tarda", "meaning": "花費(時間)", "tail": " " },
            { "text": "unos", "meaning": "大約", "tail": " " },
            { "text": "cinco", "meaning": "五", "tail": " " },
            { "text": "minutos", "meaning": "分鐘", "tail": "." }
          ]
        }
      ],
      "usage_note": "más o menos (多或少) 是超級萬用語，除了當「大約」，別人問你最近好嗎，回答「馬馬虎虎」也是這句。",
      "image_file": "about.png"
    },
    {
      "id": "adv-11",
      "term_zh": "一點點",
      "related_terms": [
        {
          "term_target": "un poco",
          "pronunciation": ["/um ˈpo.ko/"],
          "specific_note": "",
          "segments": [
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "poco", "meaning": "少許", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Solo un poco.",
          "translation": "只要一點點。",
          "segments": [
            { "text": "Solo", "meaning": "只有", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "poco", "meaning": "少許", "tail": "." }
          ]
        },
        {
          "sentence": "Hablo un poco de español.",
          "translation": "我會說一點西班牙文。",
          "segments": [
            { "text": "Hablo", "meaning": "我說", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "poco", "meaning": "少許", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "español", "meaning": "西班牙文", "tail": "." }
          ]
        },
        {
          "sentence": "Es un poquito caro.",
          "translation": "有一點點貴。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "poquito", "meaning": "一點點(poco的縮小詞)", "tail": " " },
            { "text": "caro", "meaning": "貴的", "tail": "." }
          ]
        }
      ],
      "usage_note": "口語中為了表達「一點點、微婉的語氣」，當地人非常喜歡加上縮小詞變成 un poquito。",
      "image_file": "a_little.png"
    },
    {
      "id": "adv-12",
      "term_zh": "也是",
      "related_terms": [
        {
          "term_target": "también",
          "pronunciation": ["/tamˈbjen/"],
          "specific_note": "",
          "segments": [{ "text": "también", "meaning": "也", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Yo también.",
          "translation": "我也是。",
          "segments": [
            { "text": "Yo", "meaning": "我", "tail": " " },
            { "text": "también", "meaning": "也", "tail": "." }
          ]
        },
        {
          "sentence": "Esto también.",
          "translation": "這個也是。",
          "segments": [
            { "text": "Esto", "meaning": "這個", "tail": " " },
            { "text": "también", "meaning": "也", "tail": "." }
          ]
        },
        {
          "sentence": "Yo también quiero ir.",
          "translation": "我也想去。",
          "segments": [
            { "text": "Yo", "meaning": "我", "tail": " " },
            { "text": "también", "meaning": "也", "tail": " " },
            { "text": "quiero", "meaning": "想要", "tail": " " },
            { "text": "ir", "meaning": "去", "tail": "." }
          ]
        }
      ],
      "usage_note": "表示附和「我也一樣」的必備單字，重音在 e 上。",
      "image_file": "also.png"
    },
    {
      "id": "adv-13",
      "term_zh": "或許",
      "related_terms": [
        {
          "term_target": "tal vez / quizás",
          "pronunciation": ["/tal bes/, /kiˈsas/"],
          "specific_note": "",
          "segments": [
            { "text": "tal", "meaning": "如此的", "tail": " " },
            { "text": "vez", "meaning": "次", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tal vez mañana.",
          "translation": "或許明天吧。",
          "segments": [
            { "text": "Tal", "meaning": "如此", "tail": " " },
            { "text": "vez", "meaning": "次", "tail": " " },
            { "text": "mañana", "meaning": "明天", "tail": "." }
          ]
        },
        {
          "sentence": "Quizás.",
          "translation": "也許吧。",
          "segments": [
            { "text": "Quizás", "meaning": "或許", "tail": "." }
          ]
        },
        {
          "sentence": "Tal vez más tarde.",
          "translation": "或許晚一點。",
          "segments": [
            { "text": "Tal", "meaning": "如此", "tail": " " },
            { "text": "vez", "meaning": "次", "tail": " " },
            { "text": "más", "meaning": "更", "tail": " " },
            { "text": "tarde", "meaning": "晚", "tail": "." }
          ]
        }
      ],
      "usage_note": "兩個字都可以用，tal vez (字面：如此的次數) 在口語中出現的頻率極高。",
      "image_file": "maybe.png"
    },
    {
      "id": "adv-14",
      "term_zh": "之後 / 稍後",
      "related_terms": [
        {
          "term_target": "luego / más tarde",
          "pronunciation": ["/ˈlwe.ɣo/, /mas ˈtaɾ.ðe/"],
          "specific_note": "",
          "segments": [
            { "text": "más", "meaning": "更", "tail": " " },
            { "text": "tarde", "meaning": "晚", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hasta luego.",
          "translation": "待會見。 (最常用的道別語)",
          "segments": [
            { "text": "Hasta", "meaning": "直到", "tail": " " },
            { "text": "luego", "meaning": "稍後", "tail": "." }
          ]
        },
        {
          "sentence": "Te llamo más tarde.",
          "translation": "我晚點打給你。",
          "segments": [
            { "text": "Te", "meaning": "給你", "tail": " " },
            { "text": "llamo", "meaning": "我打電話", "tail": " " },
            { "text": "más", "meaning": "更", "tail": " " },
            { "text": "tarde", "meaning": "晚", "tail": "." }
          ]
        },
        {
          "sentence": "Luego hablamos.",
          "translation": "晚點再說(聊)。",
          "segments": [
            { "text": "Luego", "meaning": "稍後", "tail": " " },
            { "text": "hablamos", "meaning": "我們說話", "tail": "." }
          ]
        }
      ],
      "usage_note": "兩個字都可以。luego 很常搭配 hasta (直到) 變成「待會見」；más tarde 則是「更晚一點」的意思。",
      "image_file": "later.png"
    },
    {
      "id": "adv-15",
      "term_zh": "很快",
      "related_terms": [
        {
          "term_target": "pronto",
          "pronunciation": ["/ˈpɾon.to/"],
          "specific_note": "",
          "segments": [{ "text": "pronto", "meaning": "很快/不久", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hasta pronto.",
          "translation": "很快再見 / 待會見。",
          "segments": [
            { "text": "Hasta", "meaning": "直到", "tail": " " },
            { "text": "pronto", "meaning": "不久後", "tail": "." }
          ]
        },
        {
          "sentence": "¡Que te mejores pronto!",
          "translation": "祝你早日康復。(探病神句)",
          "segments": [
            { "text": "¡Que", "meaning": "願", "tail": " " },
            { "text": "te", "meaning": "你自己", "tail": " " },
            { "text": "mejores", "meaning": "變好", "tail": " " },
            { "text": "pronto!", "meaning": "盡快", "tail": "" }
          ]
        },
        {
          "sentence": "Vuelvo pronto.",
          "translation": "我很快回來 (馬上回來)。",
          "segments": [
            { "text": "Vuelvo", "meaning": "我回來", "tail": " " },
            { "text": "pronto", "meaning": "很快地", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達「不久的將來」或「盡快」。Hasta pronto 比 Hasta luego 多了一點「希望趕快再見面」的期待感。",
      "image_file": "soon.png"
    },
    {
      "id": "adv-16",
      "term_zh": "一起",
      "related_terms": [
        {
          "term_target": "juntos / juntas",
          "pronunciation": ["/ˈxun.tos/, /ˈxun.tas/"],
          "specific_note": "分性別",
          "segments": [{ "text": "juntos", "meaning": "一起(副詞/形容詞)", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Vamos juntos.",
          "translation": "我們一起去。",
          "segments": [
            { "text": "Vamos", "meaning": "我們去", "tail": " " },
            { "text": "juntos", "meaning": "一起", "tail": "." }
          ]
        },
        {
          "sentence": "Trabajar juntos.",
          "translation": "一起工作。",
          "segments": [
            { "text": "Trabajar", "meaning": "工作", "tail": " " },
            { "text": "juntos", "meaning": "一起", "tail": "." }
          ]
        },
        {
          "sentence": "Estamos juntas.",
          "translation": "我們(女生)在一起。",
          "segments": [
            { "text": "Estamos", "meaning": "我們處於", "tail": " " },
            { "text": "juntas", "meaning": "一起(陰性)", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的「一起」其實是形容詞轉副詞，所以有分性別！如果我們全都是女生，要講 juntas 喔！",
      "image_file": "together.png"
    },
    {
      "id": "adv-17",
      "term_zh": "仍然 / 還",
      "related_terms": [
        {
          "term_target": "todavía / aún",
          "pronunciation": ["/to.ðaˈβi.a/, /aˈun/"],
          "specific_note": "",
          "segments": [{ "text": "todavía", "meaning": "仍然", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Todavía no.",
          "translation": "還沒。 (超常用)",
          "segments": [
            { "text": "Todavía", "meaning": "仍然", "tail": " " },
            { "text": "no", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Todavía estoy aquí.",
          "translation": "我還在這裡。",
          "segments": [
            { "text": "Todavía", "meaning": "仍然", "tail": " " },
            { "text": "estoy", "meaning": "我處於", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Aún estoy comiendo.",
          "translation": "我還在吃。",
          "segments": [
            { "text": "Aún", "meaning": "仍然", "tail": " " },
            { "text": "estoy", "meaning": "我正在", "tail": " " },
            { "text": "comiendo", "meaning": "吃(進行式)", "tail": "." }
          ]
        }
      ],
      "usage_note": "當地人最常把 todavía 搭配 no 使用 (Todavía no)，用來回答別人「做完了沒？」、「出發了嗎？」等問題。",
      "image_file": "still.png"
    },
    {
      "id": "adv-18",
      "term_zh": "一般來說 / 通常",
      "related_terms": [
        {
          "term_target": "por lo general",
          "pronunciation": ["/poɾ lo xe.neˈɾal/"],
          "specific_note": "口語常用",
          "segments": [
            { "text": "por", "meaning": "經由", "tail": " " },
            { "text": "lo", "meaning": "這", "tail": " " },
            { "text": "general", "meaning": "一般", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Por lo general, sí.",
          "translation": "一般來說是這樣。",
          "segments": [
            { "text": "Por", "meaning": "經由", "tail": " " },
            { "text": "lo", "meaning": "這", "tail": " " },
            { "text": "general", "meaning": "一般", "tail": ", " },
            { "text": "sí", "meaning": "是的", "tail": "." }
          ]
        },
        {
          "sentence": "Por lo general, no bebo.",
          "translation": "通常我不喝酒。",
          "segments": [
            { "text": "Por", "meaning": "經由", "tail": " " },
            { "text": "lo", "meaning": "這", "tail": " " },
            { "text": "general", "meaning": "一般", "tail": ", " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "bebo", "meaning": "我喝", "tail": "." }
          ]
        },
        {
          "sentence": "Es tranquilo por lo general.",
          "translation": "這裡通常很安靜。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "tranquilo", "meaning": "安靜的", "tail": " " },
            { "text": "por", "meaning": "經由", "tail": " " },
            { "text": "lo", "meaning": "這", "tail": " " },
            { "text": "general", "meaning": "一般", "tail": "." }
          ]
        }
      ],
      "usage_note": "除了 normalmente 之外，這是一個西語人士非常愛用的片語 por lo general (一般而言)。",
      "image_file": "normally.png"
    },
    {
      "id": "adv-19",
      "term_zh": "立刻",
      "related_terms": [
        {
          "term_target": "ahora mismo",
          "pronunciation": ["/aˈo.ɾa ˈmis.mo/"],
          "specific_note": "",
          "segments": [
            { "text": "ahora", "meaning": "現在", "tail": " " },
            { "text": "mismo", "meaning": "同一個", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Ahora mismo?",
          "translation": "現在馬上？",
          "segments": [
            { "text": "¿Ahora", "meaning": "現在", "tail": " " },
            { "text": "mismo?", "meaning": "同一個(就在這時)", "tail": "" }
          ]
        },
        {
          "sentence": "Voy ahora mismo.",
          "translation": "我立刻去。",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "ahora", "meaning": "現在", "tail": " " },
            { "text": "mismo", "meaning": "馬上", "tail": "." }
          ]
        },
        {
          "sentence": "¡Hazlo ahora mismo!",
          "translation": "立刻做！",
          "segments": [
            { "text": "¡Hazlo", "meaning": "做它(haz+lo)", "tail": " " },
            { "text": "ahora", "meaning": "現在", "tail": " " },
            { "text": "mismo!", "meaning": "馬上", "tail": "" }
          ]
        }
      ],
      "usage_note": "inmediatamente 太長了，西語母語人士口語最常說的是 ahora mismo (現在+同一個)，也就是「就在此刻、馬上」。",
      "image_file": "immediately.png"
    },
    {
      "id": "adv-20",
      "term_zh": "也不",
      "related_terms": [
        {
          "term_target": "tampoco",
          "pronunciation": ["/tamˈpo.ko/"],
          "specific_note": "用於否定句",
          "segments": [{ "text": "tampoco", "meaning": "也不", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Yo tampoco.",
          "translation": "我也不。 (超實用回覆)",
          "segments": [
            { "text": "Yo", "meaning": "我", "tail": " " },
            { "text": "tampoco", "meaning": "也不", "tail": "." }
          ]
        },
        {
          "sentence": "Tampoco lo sé.",
          "translation": "我也不知道。",
          "segments": [
            { "text": "Tampoco", "meaning": "也不", "tail": " " },
            { "text": "lo", "meaning": "這件事", "tail": " " },
            { "text": "sé", "meaning": "我知道", "tail": "." }
          ]
        },
        {
          "sentence": "Él tampoco fue.",
          "translation": "他也沒去。",
          "segments": [
            { "text": "Él", "meaning": "他", "tail": " " },
            { "text": "tampoco", "meaning": "也不", "tail": " " },
            { "text": "fue", "meaning": "去(過去式)", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟 también (也是) 剛好相反。如果別人說他不喜歡某個東西，你要附和「我也不喜歡」，就要說 Yo tampoco。",
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
          "term_target": "qué",
          "pronunciation": ["/ke/"],
          "specific_note": "",
          "segments": [{ "text": "qué", "meaning": "什麼", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Qué es esto?",
          "translation": "這是什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "esto?", "meaning": "這個", "tail": "" }
          ]
        },
        {
          "sentence": "¿Qué quieres?",
          "translation": "你想要什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "quieres?", "meaning": "你想要", "tail": "" }
          ]
        },
        {
          "sentence": "¿Qué haces?",
          "translation": "你在做什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "haces?", "meaning": "你做", "tail": "" }
          ]
        }
      ],
      "usage_note": "詢問事物。注意 u 不發音，唸起來像「給」。",
      "image_file": "what.png"
    },
    {
      "id": "q-02",
      "term_zh": "如何",
      "related_terms": [
        {
          "term_target": "cómo",
          "pronunciation": ["/ˈko.mo/"],
          "specific_note": "",
          "segments": [{ "text": "cómo", "meaning": "如何", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cómo estás?",
          "translation": "你好嗎？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "estás?", "meaning": "你處於", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cómo te llamas?",
          "translation": "你叫什麼名字？ (直譯：你如何稱呼你自己)",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "te", "meaning": "你自己", "tail": " " },
            { "text": "llamas?", "meaning": "稱呼", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cómo se hace esto?",
          "translation": "這個怎麼做？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "se", "meaning": "被", "tail": " " },
            { "text": "hace", "meaning": "做", "tail": " " },
            { "text": "esto?", "meaning": "這個", "tail": "" }
          ]
        }
      ],
      "usage_note": "詢問狀況或方式。西文問名字不說 What is your name，而是問「你如何稱呼自己 (Cómo te llamas)」。",
      "image_file": "how.png"
    },
    {
      "id": "q-03",
      "term_zh": "何時",
      "related_terms": [
        {
          "term_target": "cuándo",
          "pronunciation": ["/ˈkwan.do/"],
          "specific_note": "",
          "segments": [{ "text": "cuándo", "meaning": "何時", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cuándo nos vamos?",
          "translation": "我們何時走？",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "nos", "meaning": "我們(強調離開)", "tail": " " },
            { "text": "vamos?", "meaning": "去", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuándo es tu cumpleaños?",
          "translation": "你的生日是什麼時候？",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "cumpleaños?", "meaning": "生日", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuándo llega el autobús?",
          "translation": "公車什麼時候會到？",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "llega", "meaning": "到達", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "autobús?", "meaning": "公車", "tail": "" }
          ]
        }
      ],
      "usage_note": "詢問日期或時間點。",
      "image_file": "when.png"
    },
    {
      "id": "q-04",
      "term_zh": "哪裡",
      "related_terms": [
        {
          "term_target": "dónde",
          "pronunciation": ["/ˈdon.de/"],
          "specific_note": "",
          "segments": [{ "text": "dónde", "meaning": "哪裡", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Dónde estás?",
          "translation": "你在哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "estás?", "meaning": "你在", "tail": "" }
          ]
        },
        {
          "sentence": "¿Dónde está el baño?",
          "translation": "廁所在哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "baño?", "meaning": "廁所", "tail": "" }
          ]
        },
        {
          "sentence": "¿De dónde eres?",
          "translation": "你來自哪裡？",
          "segments": [
            { "text": "¿De", "meaning": "從", "tail": " " },
            { "text": "dónde", "meaning": "哪裡", "tail": " " },
            { "text": "eres?", "meaning": "你是", "tail": "" }
          ]
        }
      ],
      "usage_note": "問地點。如果前面加上 de (從) 變成 De dónde，就是問別人「來自」哪裡。",
      "image_file": "where.png"
    },
    {
      "id": "q-05",
      "term_zh": "誰",
      "related_terms": [
        {
          "term_target": "quién / quiénes",
          "pronunciation": ["/kjen/, /ˈkje.nes/"],
          "specific_note": "單數/複數",
          "segments": [
            { "text": "quién", "meaning": "誰", "tail": " / " },
            { "text": "quiénes", "meaning": "誰(複數)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Quién es él?",
          "translation": "他是誰？",
          "segments": [
            { "text": "¿Quién", "meaning": "誰", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "él?", "meaning": "他", "tail": "" }
          ]
        },
        {
          "sentence": "¿Quién eres?",
          "translation": "你是誰？",
          "segments": [
            { "text": "¿Quién", "meaning": "誰", "tail": " " },
            { "text": "eres?", "meaning": "你是", "tail": "" }
          ]
        },
        {
          "sentence": "¿Con quién vas?",
          "translation": "你要跟誰去？",
          "segments": [
            { "text": "¿Con", "meaning": "和", "tail": " " },
            { "text": "quién", "meaning": "誰", "tail": " " },
            { "text": "vas?", "meaning": "你去", "tail": "" }
          ]
        }
      ],
      "usage_note": "如果問的對象是一群人，要用複數的 quiénes (例如: 他們是誰 ¿Quiénes son ellos?)。",
      "image_file": "who.png"
    },
    {
      "id": "q-06",
      "term_zh": "為什麼",
      "related_terms": [
        {
          "term_target": "por qué",
          "pronunciation": ["/poɾ ˈke/"],
          "specific_note": "分開寫並加重音",
          "segments": [
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Por qué?",
          "translation": "為什麼？",
          "segments": [
            { "text": "¿Por", "meaning": "為", "tail": " " },
            { "text": "qué?", "meaning": "什麼", "tail": "" }
          ]
        },
        {
          "sentence": "¿Por qué llegas tarde?",
          "translation": "你為什麼遲到？",
          "segments": [
            { "text": "¿Por", "meaning": "為", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "llegas", "meaning": "你到達", "tail": " " },
            { "text": "tarde?", "meaning": "晚", "tail": "" }
          ]
        },
        {
          "sentence": "¿Por qué no?",
          "translation": "為什麼不呢？",
          "segments": [
            { "text": "¿Por", "meaning": "為", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "no?", "meaning": "不", "tail": "" }
          ]
        }
      ],
      "usage_note": "避坑！問句的「為什麼」要分開寫並加重音 (por qué)；回答時的「因為」要連起來寫且不加重音 (porque)。",
      "image_file": "why.png"
    },
    {
      "id": "q-07",
      "term_zh": "哪一個",
      "related_terms": [
        {
          "term_target": "cuál / cuáles",
          "pronunciation": ["/kwal/, /ˈkwa.les/"],
          "specific_note": "單數/複數",
          "segments": [
            { "text": "cuál", "meaning": "哪一個", "tail": " / " },
            { "text": "cuáles", "meaning": "哪些(複數)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cuál quieres?",
          "translation": "你要哪一個？",
          "segments": [
            { "text": "¿Cuál", "meaning": "哪一個", "tail": " " },
            { "text": "quieres?", "meaning": "你想要", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuál es tu favorito?",
          "translation": "哪一個是你最喜歡的？",
          "segments": [
            { "text": "¿Cuál", "meaning": "哪一個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "favorito?", "meaning": "最愛", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuáles son tus zapatos?",
          "translation": "哪些是你的鞋子？",
          "segments": [
            { "text": "¿Cuáles", "meaning": "哪些", "tail": " " },
            { "text": "son", "meaning": "是(複數)", "tail": " " },
            { "text": "tus", "meaning": "你的(複數)", "tail": " " },
            { "text": "zapatos?", "meaning": "鞋子", "tail": "" }
          ]
        }
      ],
      "usage_note": "讓對方從幾個選項中挑選時使用。如果要選的東西是複數（如鞋子），要用 cuáles。",
      "image_file": "which.png"
    },
    {
      "id": "q-08",
      "term_zh": "多少（數量）",
      "related_terms": [
        {
          "term_target": "cuánto / cuántos",
          "pronunciation": ["/ˈkwan.to/, /ˈkwan.tos/"],
          "specific_note": "有陰陽性與單複數",
          "segments": [
            { "text": "cuánto", "meaning": "多少(不可數)", "tail": " / " },
            { "text": "cuántos", "meaning": "多少(可數)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cuánto cuesta?",
          "translation": "多少錢？ (直譯：這花費多少)",
          "segments": [
            { "text": "¿Cuánto", "meaning": "多少", "tail": " " },
            { "text": "cuesta?", "meaning": "花費", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuánto es?",
          "translation": "總共多少錢？",
          "segments": [
            { "text": "¿Cuánto", "meaning": "多少", "tail": " " },
            { "text": "es?", "meaning": "是", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuánta agua necesitas?",
          "translation": "你需要多少水？",
          "segments": [
            { "text": "¿Cuánta", "meaning": "多少(陰性)", "tail": " " },
            { "text": "agua", "meaning": "水(陰性名詞)", "tail": " " },
            { "text": "necesitas?", "meaning": "你需要", "tail": "" }
          ]
        }
      ],
      "usage_note": "問錢用 Cuánto；但如果後面接名詞，要配合名詞的陰陽性與單複數 (cuánto, cuánta, cuántos, cuántas)。",
      "image_file": "how_much.png"
    },
    {
      "id": "q-09",
      "term_zh": "多久（時間）",
      "related_terms": [
        {
          "term_target": "cuánto tiempo",
          "pronunciation": ["/ˈkwan.to ˈtjem.po/"],
          "specific_note": "",
          "segments": [
            { "text": "cuánto", "meaning": "多少", "tail": " " },
            { "text": "tiempo", "meaning": "時間", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cuánto tiempo?",
          "translation": "要多久？",
          "segments": [
            { "text": "¿Cuánto", "meaning": "多少", "tail": " " },
            { "text": "tiempo?", "meaning": "時間", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuánto tiempo tarda?",
          "translation": "這要花多久時間？",
          "segments": [
            { "text": "¿Cuánto", "meaning": "多少", "tail": " " },
            { "text": "tiempo", "meaning": "時間", "tail": " " },
            { "text": "tarda?", "meaning": "花費(時間)", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuánto tiempo llevas aquí?",
          "translation": "你在這裡待多久了？",
          "segments": [
            { "text": "¿Cuánto", "meaning": "多少", "tail": " " },
            { "text": "tiempo", "meaning": "時間", "tail": " " },
            { "text": "llevas", "meaning": "你待了(度過)", "tail": " " },
            { "text": "aquí?", "meaning": "這裡", "tail": "" }
          ]
        }
      ],
      "usage_note": "西文不說 how long (多長)，而是直接問「多少時間 (cuánto tiempo)」。",
      "image_file": "how_long.png"
    },
    {
      "id": "q-10",
      "term_zh": "幾點",
      "related_terms": [
        {
          "term_target": "qué hora / a qué hora",
          "pronunciation": ["/ke ˈo.ɾa/, /a ke ˈo.ɾa/"],
          "specific_note": "現在幾點/幾點做某事",
          "segments": [
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時刻", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Qué hora es?",
          "translation": "現在幾點？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時刻", "tail": " " },
            { "text": "es?", "meaning": "是", "tail": "" }
          ]
        },
        {
          "sentence": "¿A qué hora nos vemos?",
          "translation": "我們幾點見面？",
          "segments": [
            { "text": "¿A", "meaning": "在", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時刻", "tail": " " },
            { "text": "nos", "meaning": "我們(互相)", "tail": " " },
            { "text": "vemos?", "meaning": "看見", "tail": "" }
          ]
        },
        {
          "sentence": "¿A qué hora empieza?",
          "translation": "幾點開始？",
          "segments": [
            { "text": "¿A", "meaning": "在", "tail": " " },
            { "text": "qué", "meaning": "什麼", "tail": " " },
            { "text": "hora", "meaning": "時刻", "tail": " " },
            { "text": "empieza?", "meaning": "開始", "tail": "" }
          ]
        }
      ],
      "usage_note": "如果單純問「現在幾點」用 Qué hora es；如果是問「在幾點發生某事」，前面一定要加介係詞 A (A qué hora)。",
      "image_file": "what_time.png"
    },
    {
      "id": "q-11",
      "term_zh": "幾歲",
      "related_terms": [
        {
          "term_target": "cuántos años",
          "pronunciation": ["/ˈkwan.tos ˈa.ɲos/"],
          "specific_note": "搭配 tener(擁有)",
          "segments": [
            { "text": "cuántos", "meaning": "多少", "tail": " " },
            { "text": "años", "meaning": "年/歲", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cuántos años tienes?",
          "translation": "你幾歲？ (你有多少歲)",
          "segments": [
            { "text": "¿Cuántos", "meaning": "多少", "tail": " " },
            { "text": "años", "meaning": "年/歲", "tail": " " },
            { "text": "tienes?", "meaning": "你有", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuántos años tiene él?",
          "translation": "他幾歲？",
          "segments": [
            { "text": "¿Cuántos", "meaning": "多少", "tail": " " },
            { "text": "años", "meaning": "年/歲", "tail": " " },
            { "text": "tiene", "meaning": "有", "tail": " " },
            { "text": "él?", "meaning": "他", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuántos años tiene tu perro?",
          "translation": "你的狗幾歲了？",
          "segments": [
            { "text": "¿Cuántos", "meaning": "多少", "tail": " " },
            { "text": "años", "meaning": "年/歲", "tail": " " },
            { "text": "tiene", "meaning": "有", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "perro?", "meaning": "狗", "tail": "" }
          ]
        }
      ],
      "usage_note": "西文不用「多老 (how old)」來問年紀，而是問「你有多少年 (cuántos años tienes)」。",
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
          "term_target": "ahora",
          "pronunciation": ["/aˈo.ɾa/"],
          "specific_note": "",
          "segments": [{ "text": "ahora", "meaning": "現在", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ahora no.",
          "translation": "現在不行 / 現在不要。",
          "segments": [
            { "text": "Ahora", "meaning": "現在", "tail": " " },
            { "text": "no", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "¿Dónde estás ahora?",
          "translation": "你現在在哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "estás", "meaning": "你在", "tail": " " },
            { "text": "ahora?", "meaning": "現在", "tail": "" }
          ]
        },
        {
          "sentence": "Vámonos ahora mismo.",
          "translation": "我們現在馬上走(出發)。",
          "segments": [
            { "text": "Vámonos", "meaning": "我們走(vamos+nos)", "tail": " " },
            { "text": "ahora", "meaning": "現在", "tail": " " },
            { "text": "mismo", "meaning": "馬上(同一個)", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的 h 永遠不發音，唸起來像「阿歐拉」。常搭配 mismo 變成 ahora mismo (立刻、就在現在)。",
      "image_file": "now.png"
    },
    {
      "id": "tp-02",
      "term_zh": "今天",
      "related_terms": [
        {
          "term_target": "hoy",
          "pronunciation": ["/oi/"],
          "specific_note": "",
          "segments": [{ "text": "hoy", "meaning": "今天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "No puedo hoy.",
          "translation": "我今天沒辦法(不行)。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "puedo", "meaning": "我能", "tail": " " },
            { "text": "hoy", "meaning": "今天", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué día es hoy?",
          "translation": "今天星期幾 (今天是哪一天)？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "día", "meaning": "天", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "hoy?", "meaning": "今天", "tail": "" }
          ]
        },
        {
          "sentence": "Hoy hace buen tiempo.",
          "translation": "今天天氣很好。",
          "segments": [
            { "text": "Hoy", "meaning": "今天", "tail": " " },
            { "text": "hace", "meaning": "製造", "tail": " " },
            { "text": "buen", "meaning": "好的", "tail": " " },
            { "text": "tiempo", "meaning": "天氣", "tail": "." }
          ]
        }
      ],
      "usage_note": "h 一樣不發音，唸作「歐伊」。",
      "image_file": "today.png"
    },
    {
      "id": "tp-03",
      "term_zh": "明天",
      "related_terms": [
        {
          "term_target": "mañana",
          "pronunciation": ["/maˈɲa.na/"],
          "specific_note": "兼作「早上」",
          "segments": [{ "text": "mañana", "meaning": "明天/早上", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hasta mañana.",
          "translation": "明天見。 (下班、下課道別常用)",
          "segments": [
            { "text": "Hasta", "meaning": "直到", "tail": " " },
            { "text": "mañana", "meaning": "明天", "tail": "." }
          ]
        },
        {
          "sentence": "¿Nos vemos mañana?",
          "translation": "我們明天見面嗎？",
          "segments": [
            { "text": "¿Nos", "meaning": "我們(互相)", "tail": " " },
            { "text": "vemos", "meaning": "看見", "tail": " " },
            { "text": "mañana?", "meaning": "明天", "tail": "" }
          ]
        },
        {
          "sentence": "Mañana por la mañana.",
          "translation": "明天早上。",
          "segments": [
            { "text": "Mañana", "meaning": "明天", "tail": " " },
            { "text": "por", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "mañana", "meaning": "早上", "tail": "." }
          ]
        }
      ],
      "usage_note": "mañana 可以當「明天」也可以當「早上」。所以「明天早上」聽起來就會像鬼打牆的 mañana por la mañana。",
      "image_file": "tomorrow.png"
    },
    {
      "id": "tp-04",
      "term_zh": "昨天",
      "related_terms": [
        {
          "term_target": "ayer",
          "pronunciation": ["/aˈʝeɾ/"],
          "specific_note": "",
          "segments": [{ "text": "ayer", "meaning": "昨天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ayer por la tarde.",
          "translation": "昨天下午。",
          "segments": [
            { "text": "Ayer", "meaning": "昨天", "tail": " " },
            { "text": "por", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "tarde", "meaning": "下午", "tail": "." }
          ]
        },
        {
          "sentence": "Llegué ayer.",
          "translation": "我昨天到的。",
          "segments": [
            { "text": "Llegué", "meaning": "我到達(過去式)", "tail": " " },
            { "text": "ayer", "meaning": "昨天", "tail": "." }
          ]
        },
        {
          "sentence": "¿Qué hiciste ayer?",
          "translation": "你昨天做了什麼？",
          "segments": [
            { "text": "¿Qué", "meaning": "什麼", "tail": " " },
            { "text": "hiciste", "meaning": "你做(過去式)", "tail": " " },
            { "text": "ayer?", "meaning": "昨天", "tail": "" }
          ]
        }
      ],
      "usage_note": "y 發音有點像輕微的 j，聽起來像「阿耶r」。",
      "image_file": "yesterday.png"
    },
    {
      "id": "tp-05",
      "term_zh": "這裡",
      "related_terms": [
        {
          "term_target": "aquí / acá",
          "pronunciation": ["/aˈki/, /aˈka/"],
          "specific_note": "拉美常說 acá",
          "segments": [
            { "text": "aquí", "meaning": "這裡(確切)", "tail": " / " },
            { "text": "acá", "meaning": "這邊(廣泛)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ven aquí.",
          "translation": "來這裡。",
          "segments": [
            { "text": "Ven", "meaning": "來(命令句)", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Estoy aquí.",
          "translation": "我在這。",
          "segments": [
            { "text": "Estoy", "meaning": "我在", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Por aquí, por favor.",
          "translation": "請往這邊走。",
          "segments": [
            { "text": "Por", "meaning": "經由/往", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        }
      ],
      "usage_note": "西班牙人愛講 aquí，中南美洲人也很常說 acá。意思是一樣的！",
      "image_file": "here.png"
    },
    {
      "id": "tp-06",
      "term_zh": "那裡",
      "related_terms": [
        {
          "term_target": "allí / allá",
          "pronunciation": ["/aˈʝi/, /aˈʝa/"],
          "specific_note": "同 aquí 概念",
          "segments": [
            { "text": "allí", "meaning": "那裡(確切)", "tail": " / " },
            { "text": "allá", "meaning": "那邊(廣泛)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mira allí.",
          "translation": "看那邊。",
          "segments": [
            { "text": "Mira", "meaning": "看(命令句)", "tail": " " },
            { "text": "allí", "meaning": "那裡", "tail": "." }
          ]
        },
        {
          "sentence": "Está por allá.",
          "translation": "在那邊(附近)。",
          "segments": [
            { "text": "Está", "meaning": "在", "tail": " " },
            { "text": "por", "meaning": "在...附近", "tail": " " },
            { "text": "allá", "meaning": "那邊", "tail": "." }
          ]
        },
        {
          "sentence": "Vamos allá.",
          "translation": "我們去那裡吧。",
          "segments": [
            { "text": "Vamos", "meaning": "我們去", "tail": " " },
            { "text": "allá", "meaning": "那裡", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟這裡一樣，allí 比較有明確點出的感覺，allá 指的是那邊的區域。",
      "image_file": "there.png"
    },
    {
      "id": "tp-07",
      "term_zh": "天（日期）",
      "related_terms": [
        {
          "term_target": "día",
          "pronunciation": ["/ˈdi.a/"],
          "specific_note": "陽性名詞",
          "segments": [{ "text": "día", "meaning": "天/日子", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Buenos días.",
          "translation": "早安。 (直譯：美好的日子)",
          "segments": [
            { "text": "Buenos", "meaning": "美好的(陽性複數)", "tail": " " },
            { "text": "días", "meaning": "天(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Todos los días.",
          "translation": "每一天。",
          "segments": [
            { "text": "Todos", "meaning": "全部的", "tail": " " },
            { "text": "los", "meaning": "這些", "tail": " " },
            { "text": "días", "meaning": "天", "tail": "." }
          ]
        },
        {
          "sentence": "Un hermoso día.",
          "translation": "美好的一天。",
          "segments": [
            { "text": "Un", "meaning": "一個", "tail": " " },
            { "text": "hermoso", "meaning": "美麗的", "tail": " " },
            { "text": "día", "meaning": "天", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！雖然結尾是 a，但是「陽性」名詞 (el día)，所以要搭配陽性的形容詞 (buen/hermoso)。",
      "image_file": "day.png"
    },
    {
      "id": "tp-08",
      "term_zh": "年",
      "related_terms": [
        {
          "term_target": "año",
          "pronunciation": ["/ˈa.ɲo/"],
          "specific_note": "",
          "segments": [{ "text": "año", "meaning": "年/歲數", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¡Feliz Año Nuevo!",
          "translation": "新年快樂！",
          "segments": [
            { "text": "¡Feliz", "meaning": "快樂的", "tail": " " },
            { "text": "Año", "meaning": "年", "tail": " " },
            { "text": "Nuevo!", "meaning": "新的", "tail": "" }
          ]
        },
        {
          "sentence": "El año pasado.",
          "translation": "去年。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "año", "meaning": "年", "tail": " " },
            { "text": "pasado", "meaning": "過去的", "tail": "." }
          ]
        },
        {
          "sentence": "¿Cuántos años tienes?",
          "translation": "你幾歲？ (你有多少年？)",
          "segments": [
            { "text": "¿Cuántos", "meaning": "多少", "tail": " " },
            { "text": "años", "meaning": "年", "tail": " " },
            { "text": "tienes?", "meaning": "你有", "tail": "" }
          ]
        }
      ],
      "usage_note": "大忌！ñ 的發音很重要（像「妞」），如果只打出 n 發成平音 (ano)，會變成「肛門」的意思，在國外千萬別講錯！",
      "image_file": "year.png"
    },
    {
      "id": "tp-09",
      "term_zh": "月",
      "related_terms": [
        {
          "term_target": "mes",
          "pronunciation": ["/mes/"],
          "specific_note": "",
          "segments": [{ "text": "mes", "meaning": "月", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Este mes.",
          "translation": "這個月。",
          "segments": [
            { "text": "Este", "meaning": "這個(陽性)", "tail": " " },
            { "text": "mes", "meaning": "月", "tail": "." }
          ]
        },
        {
          "sentence": "El próximo mes.",
          "translation": "下個月。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "próximo", "meaning": "下一個", "tail": " " },
            { "text": "mes", "meaning": "月", "tail": "." }
          ]
        },
        {
          "sentence": "Hace un mes.",
          "translation": "一個月前。",
          "segments": [
            { "text": "Hace", "meaning": "做(引申為『在...之前』)", "tail": " " },
            { "text": "un", "meaning": "一個", "tail": " " },
            { "text": "mes", "meaning": "月", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性名詞。要講幾個月前，西文習慣用 Hace (製造) + 數字 + mes(es)。",
      "image_file": "month.png"
    },
    {
      "id": "tp-10",
      "term_zh": "週",
      "related_terms": [
        {
          "term_target": "semana",
          "pronunciation": ["/seˈma.na/"],
          "specific_note": "",
          "segments": [{ "text": "semana", "meaning": "週", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Fin de semana.",
          "translation": "週末。 (直譯：一週的結束)",
          "segments": [
            { "text": "Fin", "meaning": "結束", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "semana", "meaning": "週", "tail": "." }
          ]
        },
        {
          "sentence": "La próxima semana.",
          "translation": "下週。",
          "segments": [
            { "text": "La", "meaning": "這(陰性)", "tail": " " },
            { "text": "próxima", "meaning": "下一個", "tail": " " },
            { "text": "semana", "meaning": "週", "tail": "." }
          ]
        },
        {
          "sentence": "Buena semana.",
          "translation": "祝你有個愉快的一週。",
          "segments": [
            { "text": "Buena", "meaning": "好的", "tail": " " },
            { "text": "semana", "meaning": "週", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性名詞。我們常說的「週末」在西文是 fin de semana，口語常簡稱為 el finde。",
      "image_file": "week.png"
    },
    {
      "id": "tp-11",
      "term_zh": "早上",
      "related_terms": [
        {
          "term_target": "mañana",
          "pronunciation": ["/maˈɲa.na/"],
          "specific_note": "作名詞用",
          "segments": [{ "text": "mañana", "meaning": "早上", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Por la mañana.",
          "translation": "在早上。",
          "segments": [
            { "text": "Por", "meaning": "在(時段)", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "mañana", "meaning": "早上", "tail": "." }
          ]
        },
        {
          "sentence": "Toda la mañana.",
          "translation": "整個早上。",
          "segments": [
            { "text": "Toda", "meaning": "全部的", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "mañana", "meaning": "早上", "tail": "." }
          ]
        },
        {
          "sentence": "Trabajo por la mañana.",
          "translation": "我是上早班的 (我在早上工作)。",
          "segments": [
            { "text": "Trabajo", "meaning": "我工作", "tail": " " },
            { "text": "por", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "mañana", "meaning": "早上", "tail": "." }
          ]
        }
      ],
      "usage_note": "要表達「在早上的時段」，介係詞要搭配 por (por la mañana)。",
      "image_file": "morning.png"
    },
    {
      "id": "tp-12",
      "term_zh": "下午",
      "related_terms": [
        {
          "term_target": "tarde",
          "pronunciation": ["/ˈtaɾ.ðe/"],
          "specific_note": "",
          "segments": [{ "text": "tarde", "meaning": "下午/遲的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Buenas tardes.",
          "translation": "午安。",
          "segments": [
            { "text": "Buenas", "meaning": "好的", "tail": " " },
            { "text": "tardes", "meaning": "下午(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Por la tarde.",
          "translation": "在下午。",
          "segments": [
            { "text": "Por", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "tarde", "meaning": "下午", "tail": "." }
          ]
        },
        {
          "sentence": "Nos vemos esta tarde.",
          "translation": "我們今天下午見。",
          "segments": [
            { "text": "Nos", "meaning": "我們(互相)", "tail": " " },
            { "text": "vemos", "meaning": "看見", "tail": " " },
            { "text": "esta", "meaning": "這個(陰性)", "tail": " " },
            { "text": "tarde", "meaning": "下午", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性名詞。過中午後見面打招呼就說 Buenas tardes。這個字同時也可以當副詞「遲到 (llegar tarde)」。",
      "image_file": "afternoon.png"
    },
    {
      "id": "tp-13",
      "term_zh": "晚上",
      "related_terms": [
        {
          "term_target": "noche",
          "pronunciation": ["/ˈno.tʃe/"],
          "specific_note": "",
          "segments": [{ "text": "noche", "meaning": "夜晚", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Buenas noches.",
          "translation": "晚安 (打招呼或睡前都能用)。",
          "segments": [
            { "text": "Buenas", "meaning": "好的", "tail": " " },
            { "text": "noches", "meaning": "晚上(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Esta noche.",
          "translation": "今晚。",
          "segments": [
            { "text": "Esta", "meaning": "這個(陰性)", "tail": " " },
            { "text": "noche", "meaning": "晚上", "tail": "." }
          ]
        },
        {
          "sentence": "Salimos de noche.",
          "translation": "我們晚上出門。",
          "segments": [
            { "text": "Salimos", "meaning": "我們外出", "tail": " " },
            { "text": "de", "meaning": "在", "tail": " " },
            { "text": "noche", "meaning": "晚上", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文不分 evening (傍晚) 和 night (深夜)，太陽下山後通通都是 noche。",
      "image_file": "evening.png"
    },
    {
      "id": "tp-14",
      "term_zh": "中午",
      "related_terms": [
        {
          "term_target": "mediodía",
          "pronunciation": ["/me.ðjoˈði.a/"],
          "specific_note": "陽性名詞",
          "segments": [
            { "text": "medio", "meaning": "一半", "tail": "" },
            { "text": "día", "meaning": "天", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Al mediodía.",
          "translation": "在正中午。",
          "segments": [
            { "text": "Al", "meaning": "在 (a+el)", "tail": " " },
            { "text": "mediodía", "meaning": "中午", "tail": "." }
          ]
        },
        {
          "sentence": "Antes del mediodía.",
          "translation": "中午之前 (上午)。",
          "segments": [
            { "text": "Antes", "meaning": "在...之前", "tail": " " },
            { "text": "del", "meaning": "的 (de+el)", "tail": " " },
            { "text": "mediodía", "meaning": "中午", "tail": "." }
          ]
        },
        {
          "sentence": "Comemos al mediodía.",
          "translation": "我們中午吃午餐。",
          "segments": [
            { "text": "Comemos", "meaning": "我們吃", "tail": " " },
            { "text": "al", "meaning": "在", "tail": " " },
            { "text": "mediodía", "meaning": "中午", "tail": "." }
          ]
        }
      ],
      "usage_note": "字面意思就是 medio(一半) + día(天)。因為 día 是陽性，所以 mediodía 也是陽性，介係詞要配 al (a + el)。",
      "image_file": "noon.png"
    },
    {
      "id": "tp-15",
      "term_zh": "前面",
      "related_terms": [
        {
          "term_target": "delante de / enfrente de",
          "pronunciation": ["/deˈlan.te ðe/, /emˈfɾen.te ðe/"],
          "specific_note": "",
          "segments": [
            { "text": "delante", "meaning": "前方", "tail": " " },
            { "text": "de", "meaning": "的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Delante de mí.",
          "translation": "在我前面。",
          "segments": [
            { "text": "Delante", "meaning": "在前方", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "mí", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Está delante de la puerta.",
          "translation": "它在門的前面。",
          "segments": [
            { "text": "Está", "meaning": "在", "tail": " " },
            { "text": "delante", "meaning": "前方", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "puerta", "meaning": "門", "tail": "." }
          ]
        },
        {
          "sentence": "No te pongas delante.",
          "translation": "別擋在前面。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "te", "meaning": "你自己", "tail": " " },
            { "text": "pongas", "meaning": "放(否定命令)", "tail": " " },
            { "text": "delante", "meaning": "前方", "tail": "." }
          ]
        }
      ],
      "usage_note": "delante de 是空間上的「在前面」；enfrente de 則帶有「在正對面」的感覺。",
      "image_file": "front.png"
    },
    {
      "id": "tp-16",
      "term_zh": "後面",
      "related_terms": [
        {
          "term_target": "detrás de",
          "pronunciation": ["/deˈtɾas de/"],
          "specific_note": "",
          "segments": [
            { "text": "detrás", "meaning": "後方", "tail": " " },
            { "text": "de", "meaning": "的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Detrás de ti.",
          "translation": "在你後面。",
          "segments": [
            { "text": "Detrás", "meaning": "在後方", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "ti", "meaning": "你", "tail": "." }
          ]
        },
        {
          "sentence": "Mira detrás.",
          "translation": "往後看 / 看後面。",
          "segments": [
            { "text": "Mira", "meaning": "看(命令句)", "tail": " " },
            { "text": "detrás", "meaning": "後方", "tail": "." }
          ]
        },
        {
          "sentence": "El baño está detrás del mostrador.",
          "translation": "廁所在櫃檯的後面。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "baño", "meaning": "廁所", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "detrás", "meaning": "後方", "tail": " " },
            { "text": "del", "meaning": "的(de+el)", "tail": " " },
            { "text": "mostrador", "meaning": "櫃檯", "tail": "." }
          ]
        }
      ],
      "usage_note": "表示空間上的後方，如果是時間上的「之後」，要用 después。",
      "image_file": "behind.png"
    },
    {
      "id": "tp-17",
      "term_zh": "左邊",
      "related_terms": [
        {
          "term_target": "izquierda",
          "pronunciation": ["/isˈkjeɾ.ða/"],
          "specific_note": "",
          "segments": [{ "text": "izquierda", "meaning": "左邊", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Gira a la izquierda.",
          "translation": "向左轉。",
          "segments": [
            { "text": "Gira", "meaning": "轉向(命令句)", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "la", "meaning": "這(陰性)", "tail": " " },
            { "text": "izquierda", "meaning": "左邊", "tail": "." }
          ]
        },
        {
          "sentence": "A tu izquierda.",
          "translation": "在你的左手邊。",
          "segments": [
            { "text": "A", "meaning": "在", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "izquierda", "meaning": "左邊", "tail": "." }
          ]
        },
        {
          "sentence": "La calle a la izquierda.",
          "translation": "左邊那條街。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "calle", "meaning": "街道", "tail": " " },
            { "text": "a", "meaning": "在", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "izquierda", "meaning": "左邊", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性名詞。要請司機轉彎時，常用的動詞是 girar 或是 doblar。",
      "image_file": "left.png"
    },
    {
      "id": "tp-18",
      "term_zh": "右邊",
      "related_terms": [
        {
          "term_target": "derecha",
          "pronunciation": ["/deˈɾe.tʃa/"],
          "specific_note": "",
          "segments": [{ "text": "derecha", "meaning": "右邊", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Gira a la derecha.",
          "translation": "向右轉。",
          "segments": [
            { "text": "Gira", "meaning": "轉", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "derecha", "meaning": "右邊", "tail": "." }
          ]
        },
        {
          "sentence": "A la derecha.",
          "translation": "在右邊 / 往右。",
          "segments": [
            { "text": "A", "meaning": "在/往", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "derecha", "meaning": "右邊", "tail": "." }
          ]
        },
        {
          "sentence": "Mi mano derecha.",
          "translation": "我的右手。",
          "segments": [
            { "text": "Mi", "meaning": "我的", "tail": " " },
            { "text": "mano", "meaning": "手(陰性)", "tail": " " },
            { "text": "derecha", "meaning": "右邊的", "tail": "." }
          ]
        }
      ],
      "usage_note": "大坑預警！a la derecha (陰性) 是「往右轉」；但如果是 todo derecho (陽性) 則是「一直走」，問路時千萬別聽錯了！",
      "image_file": "right.png"
    },
    {
      "id": "tp-19",
      "term_zh": "旁邊",
      "related_terms": [
        {
          "term_target": "al lado de / junto a",
          "pronunciation": ["/al ˈla.ðo ðe/, /ˈxun.to a/"],
          "specific_note": "在...身邊",
          "segments": [
            { "text": "al", "meaning": "在(a+el)", "tail": " " },
            { "text": "lado", "meaning": "邊緣/一側", "tail": " " },
            { "text": "de", "meaning": "的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Siéntate a mi lado.",
          "translation": "坐我旁邊。",
          "segments": [
            { "text": "Siéntate", "meaning": "坐下(命令句)", "tail": " " },
            { "text": "a", "meaning": "在", "tail": " " },
            { "text": "mi", "meaning": "我的", "tail": " " },
            { "text": "lado", "meaning": "身邊", "tail": "." }
          ]
        },
        {
          "sentence": "Al lado del banco.",
          "translation": "在銀行旁邊。",
          "segments": [
            { "text": "Al", "meaning": "在", "tail": " " },
            { "text": "lado", "meaning": "旁邊", "tail": " " },
            { "text": "del", "meaning": "的(de+el)", "tail": " " },
            { "text": "banco", "meaning": "銀行", "tail": "." }
          ]
        },
        {
          "sentence": "Estoy al lado tuyo.",
          "translation": "我在你旁邊。",
          "segments": [
            { "text": "Estoy", "meaning": "我在", "tail": " " },
            { "text": "al", "meaning": "在", "tail": " " },
            { "text": "lado", "meaning": "旁邊", "tail": " " },
            { "text": "tuyo", "meaning": "你的", "tail": "." }
          ]
        }
      ],
      "usage_note": "lado 原意是側邊。要說在某個地標旁邊，直接套用句型 Al lado de... 最清楚。",
      "image_file": "beside.png"
    },
    {
      "id": "tp-20",
      "term_zh": "對面",
      "related_terms": [
        {
          "term_target": "enfrente de",
          "pronunciation": ["/emˈfɾen.te ðe/"],
          "specific_note": "",
          "segments": [
            { "text": "enfrente", "meaning": "對面/前方", "tail": " " },
            { "text": "de", "meaning": "的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Enfrente de la estación.",
          "translation": "在車站對面。",
          "segments": [
            { "text": "Enfrente", "meaning": "對面", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "estación", "meaning": "車站", "tail": "." }
          ]
        },
        {
          "sentence": "Siéntate enfrente.",
          "translation": "坐在對面 (面對面)。",
          "segments": [
            { "text": "Siéntate", "meaning": "坐(命令句)", "tail": " " },
            { "text": "enfrente", "meaning": "對面", "tail": "." }
          ]
        },
        {
          "sentence": "Está justo enfrente.",
          "translation": "它就在正對面。",
          "segments": [
            { "text": "Está", "meaning": "在", "tail": " " },
            { "text": "justo", "meaning": "剛好/正是", "tail": " " },
            { "text": "enfrente", "meaning": "對面", "tail": "." }
          ]
        }
      ],
      "usage_note": "這個字常和 delante de (在前面) 混用，但 enfrente 比較強調「隔著馬路的對側」或是「面對面」。",
      "image_file": "across_from.png"
    },
    {
      "id": "tp-21",
      "term_zh": "春天",
      "related_terms": [
        {
          "term_target": "primavera",
          "pronunciation": ["/pɾi.maˈβe.ɾa/"],
          "specific_note": "",
          "segments": [{ "text": "primavera", "meaning": "春天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "En primavera.",
          "translation": "在春天。",
          "segments": [
            { "text": "En", "meaning": "在", "tail": " " },
            { "text": "primavera", "meaning": "春天", "tail": "." }
          ]
        },
        {
          "sentence": "La primavera es hermosa.",
          "translation": "春天很美麗。",
          "segments": [
            { "text": "La", "meaning": "這", "tail": " " },
            { "text": "primavera", "meaning": "春天", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "hermosa", "meaning": "美麗的", "tail": "." }
          ]
        },
        {
          "sentence": "Ropa de primavera.",
          "translation": "春裝 (春天的衣服)。",
          "segments": [
            { "text": "Ropa", "meaning": "衣服", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "primavera", "meaning": "春天", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的四季裡面，只有「春 (la primavera)」和「秋」這兩個季節是陰性的，要注意冠詞搭配。",
      "image_file": "spring.png"
    },
    {
      "id": "tp-22",
      "term_zh": "夏天",
      "related_terms": [
        {
          "term_target": "verano",
          "pronunciation": ["/beˈɾa.no/"],
          "specific_note": "陽性名詞",
          "segments": [{ "text": "verano", "meaning": "夏天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Vacaciones de verano.",
          "translation": "暑假。",
          "segments": [
            { "text": "Vacaciones", "meaning": "假期(複數)", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "verano", "meaning": "夏天", "tail": "." }
          ]
        },
        {
          "sentence": "Hace mucho calor en verano.",
          "translation": "夏天非常熱。",
          "segments": [
            { "text": "Hace", "meaning": "製造", "tail": " " },
            { "text": "mucho", "meaning": "許多", "tail": " " },
            { "text": "calor", "meaning": "熱氣", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "verano", "meaning": "夏天", "tail": "." }
          ]
        },
        {
          "sentence": "Ropa de verano.",
          "translation": "夏裝。",
          "segments": [
            { "text": "Ropa", "meaning": "衣服", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "verano", "meaning": "夏天", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性名詞。要形容夏天很熱，記得用 Hace calor (製造熱氣) 這個經典句型。",
      "image_file": "summer.png"
    },
    {
      "id": "tp-23",
      "term_zh": "秋天",
      "related_terms": [
        {
          "term_target": "otoño",
          "pronunciation": ["/oˈto.ɲo/"],
          "specific_note": "",
          "segments": [{ "text": "otoño", "meaning": "秋天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "En otoño.",
          "translation": "在秋天。",
          "segments": [
            { "text": "En", "meaning": "在", "tail": " " },
            { "text": "otoño", "meaning": "秋天", "tail": "." }
          ]
        },
        {
          "sentence": "Hojas de otoño.",
          "translation": "秋天的落葉。",
          "segments": [
            { "text": "Hojas", "meaning": "葉子(複數)", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "otoño", "meaning": "秋天", "tail": "." }
          ]
        },
        {
          "sentence": "El clima es agradable en otoño.",
          "translation": "秋天的氣候很宜人。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "clima", "meaning": "氣候", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "agradable", "meaning": "宜人的", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "otoño", "meaning": "秋天", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性名詞。中間的 ñ 別忘了加上波浪號。",
      "image_file": "autumn.png"
    },
    {
      "id": "tp-24",
      "term_zh": "冬天",
      "related_terms": [
        {
          "term_target": "invierno",
          "pronunciation": ["/imˈbjeɾ.no/"],
          "specific_note": "",
          "segments": [{ "text": "invierno", "meaning": "冬天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hace frío en invierno.",
          "translation": "冬天很冷。",
          "segments": [
            { "text": "Hace", "meaning": "製造", "tail": " " },
            { "text": "frío", "meaning": "冷", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "invierno", "meaning": "冬天", "tail": "." }
          ]
        },
        {
          "sentence": "Abrigo de invierno.",
          "translation": "冬天的外套(大衣)。",
          "segments": [
            { "text": "Abrigo", "meaning": "大衣", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "invierno", "meaning": "冬天", "tail": "." }
          ]
        },
        {
          "sentence": "Me encanta el invierno.",
          "translation": "我超愛冬天。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "encanta", "meaning": "極喜歡", "tail": " " },
            { "text": "el", "meaning": "這", "tail": " " },
            { "text": "invierno", "meaning": "冬天", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性名詞。西文的 v 發音偏向 b，所以聽起來會像 im-bier-no。",
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
      "term_zh": "或者 / 還是",
      "related_terms": [
        {
          "term_target": "o",
          "pronunciation": ["/o/"],
          "specific_note": "",
          "segments": [{ "text": "o", "meaning": "或者", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "¿Té o café?",
          "translation": "茶還是咖啡？",
          "segments": [
            { "text": "¿Té", "meaning": "茶", "tail": " " },
            { "text": "o", "meaning": "或者", "tail": " " },
            { "text": "café?", "meaning": "咖啡", "tail": "" }
          ]
        },
        {
          "sentence": "¿Quieres este o ese?",
          "translation": "你想要這個還是那個？",
          "segments": [
            { "text": "¿Quieres", "meaning": "你想要", "tail": " " },
            { "text": "este", "meaning": "這個", "tail": " " },
            { "text": "o", "meaning": "或者", "tail": " " },
            { "text": "ese?", "meaning": "那個", "tail": "" }
          ]
        },
        {
          "sentence": "Siete u ocho.",
          "translation": "七或八。 (因為 ocho 是 o 開頭，所以 o 變成 u)",
          "segments": [
            { "text": "Siete", "meaning": "七", "tail": " " },
            { "text": "u", "meaning": "或者(o的變體)", "tail": " " },
            { "text": "ocho", "meaning": "八", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！如果 o 的後面接的是發音為 o 或 ho 開頭的字（例如 ocho 八），為了避免發音連在一起，o 會變成 u。",
      "image_file": "or.png"
    },
    {
      "id": "conj-02",
      "term_zh": "但是",
      "related_terms": [
        {
          "term_target": "pero",
          "pronunciation": ["/ˈpe.ɾo/"],
          "specific_note": "",
          "segments": [{ "text": "pero", "meaning": "但是", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Me gusta, pero es caro.",
          "translation": "我喜歡它，但是它很貴。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": ", " },
            { "text": "pero", "meaning": "但是", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "caro", "meaning": "貴的", "tail": "." }
          ]
        },
        {
          "sentence": "Quiero ir, pero no puedo.",
          "translation": "我想去，但是我不能。",
          "segments": [
            { "text": "Quiero", "meaning": "我想", "tail": " " },
            { "text": "ir", "meaning": "去", "tail": ", " },
            { "text": "pero", "meaning": "但是", "tail": " " },
            { "text": "no", "meaning": "不", "tail": " " },
            { "text": "puedo", "meaning": "我能", "tail": "." }
          ]
        },
        {
          "sentence": "Es pequeño, pero fuerte.",
          "translation": "他個子小，但很強壯。",
          "segments": [
            { "text": "Es", "meaning": "他是", "tail": " " },
            { "text": "pequeño", "meaning": "小的", "tail": ", " },
            { "text": "pero", "meaning": "但是", "tail": " " },
            { "text": "fuerte", "meaning": "強壯的", "tail": "." }
          ]
        }
      ],
      "usage_note": "pero 是一個 r (輕彈舌)。如果打成兩個 r (perro) 就會變成「狗」的意思，差很多喔！",
      "image_file": "but.png"
    },
    {
      "id": "conj-03",
      "term_zh": "所以",
      "related_terms": [
        {
          "term_target": "así que / por eso",
          "pronunciation": ["/aˈsi ke/, /poɾ ˈe.so/"],
          "specific_note": "",
          "segments": [
            { "text": "así", "meaning": "如此/這樣", "tail": " " },
            { "text": "que", "meaning": "(連接詞)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tenía hambre, así que comí.",
          "translation": "我剛才餓了，所以我吃了。",
          "segments": [
            { "text": "Tenía", "meaning": "我有(過去式)", "tail": " " },
            { "text": "hambre", "meaning": "飢餓", "tail": ", " },
            { "text": "así", "meaning": "如此", "tail": " " },
            { "text": "que", "meaning": "所以", "tail": " " },
            { "text": "comí", "meaning": "我吃(過去式)", "tail": "." }
          ]
        },
        {
          "sentence": "Está lloviendo, así que lleva un paraguas.",
          "translation": "正在下雨，所以帶把傘吧。",
          "segments": [
            { "text": "Está", "meaning": "正在", "tail": " " },
            { "text": "lloviendo", "meaning": "下雨", "tail": ", " },
            { "text": "así", "meaning": "如此", "tail": " " },
            { "text": "que", "meaning": "所以", "tail": " " },
            { "text": "lleva", "meaning": "帶(命令句)", "tail": " " },
            { "text": "un", "meaning": "一把", "tail": " " },
            { "text": "paraguas", "meaning": "雨傘", "tail": "." }
          ]
        },
        {
          "sentence": "Estaba cansado, por eso me fui a dormir.",
          "translation": "我很累，所以我(因為那個原因)去睡覺了。",
          "segments": [
            { "text": "Estaba", "meaning": "我處於(過去式)", "tail": " " },
            { "text": "cansado", "meaning": "累的", "tail": ", " },
            { "text": "por", "meaning": "因為", "tail": " " },
            { "text": "eso", "meaning": "那個", "tail": " " },
            { "text": "me", "meaning": "我自己", "tail": " " },
            { "text": "fui", "meaning": "去(過去式)", "tail": " " },
            { "text": "a", "meaning": "去", "tail": " " },
            { "text": "dormir", "meaning": "睡覺", "tail": "." }
          ]
        }
      ],
      "usage_note": "口語中最常用 así que 或是 por eso (因此/因為那樣) 來表達「所以」。",
      "image_file": "so.png"
    },
    {
      "id": "conj-04",
      "term_zh": "以及／和",
      "related_terms": [
        {
          "term_target": "y",
          "pronunciation": ["/i/"],
          "specific_note": "",
          "segments": [{ "text": "y", "meaning": "和", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tú y yo.",
          "translation": "你和我。",
          "segments": [
            { "text": "Tú", "meaning": "你", "tail": " " },
            { "text": "y", "meaning": "和", "tail": " " },
            { "text": "yo", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Blanco y negro.",
          "translation": "白色和黑色。",
          "segments": [
            { "text": "Blanco", "meaning": "白色", "tail": " " },
            { "text": "y", "meaning": "和", "tail": " " },
            { "text": "negro", "meaning": "黑色", "tail": "." }
          ]
        },
        {
          "sentence": "Padre e hijo.",
          "translation": "父親與兒子。 (因為 hijo 發音是 i 開頭，所以 y 變成 e)",
          "segments": [
            { "text": "Padre", "meaning": "父親", "tail": " " },
            { "text": "e", "meaning": "和(y的變體)", "tail": " " },
            { "text": "hijo", "meaning": "兒子", "tail": "." }
          ]
        }
      ],
      "usage_note": "發音同英文的 e。避坑：如果 y 後面的字發音是 i 或 hi 開頭，為了避免發音連在一起，y 會變成 e。",
      "image_file": "and.png"
    },
    {
      "id": "conj-05",
      "term_zh": "因為",
      "related_terms": [
        {
          "term_target": "porque",
          "pronunciation": ["/ˈpoɾ.ke/"],
          "specific_note": "連在一起寫",
          "segments": [{ "text": "porque", "meaning": "因為", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Como porque tengo hambre.",
          "translation": "我吃東西是因為我餓了。",
          "segments": [
            { "text": "Como", "meaning": "我吃", "tail": " " },
            { "text": "porque", "meaning": "因為", "tail": " " },
            { "text": "tengo", "meaning": "我有", "tail": " " },
            { "text": "hambre", "meaning": "飢餓", "tail": "." }
          ]
        },
        {
          "sentence": "No puedo ir porque estoy ocupado.",
          "translation": "我不能去，因為我很忙。",
          "segments": [
            { "text": "No", "meaning": "不", "tail": " " },
            { "text": "puedo", "meaning": "我能", "tail": " " },
            { "text": "ir", "meaning": "去", "tail": " " },
            { "text": "porque", "meaning": "因為", "tail": " " },
            { "text": "estoy", "meaning": "我處於", "tail": " " },
            { "text": "ocupado", "meaning": "忙碌的", "tail": "." }
          ]
        },
        {
          "sentence": "Sonrío porque estoy feliz.",
          "translation": "我笑了，因為我很開心。",
          "segments": [
            { "text": "Sonrío", "meaning": "我笑", "tail": " " },
            { "text": "porque", "meaning": "因為", "tail": " " },
            { "text": "estoy", "meaning": "我處於", "tail": " " },
            { "text": "feliz", "meaning": "快樂的", "tail": "." }
          ]
        }
      ],
      "usage_note": "大坑預警！問句的「為什麼？」要分開寫且加重音 (¿Por qué?)；但回答的「因為」要連在一起且不加重音 (porque)。",
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
          "term_target": "con",
          "pronunciation": ["/kon/"],
          "specific_note": "伴隨",
          "segments": [{ "text": "con", "meaning": "和", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ven conmigo.",
          "translation": "跟我來 / 跟我一起。",
          "segments": [
            { "text": "Ven", "meaning": "來", "tail": " " },
            { "text": "conmigo", "meaning": "和我一起(con+mí)", "tail": "." }
          ]
        },
        {
          "sentence": "Quiero ir contigo.",
          "translation": "我想跟你一起去。",
          "segments": [
            { "text": "Quiero", "meaning": "我想", "tail": " " },
            { "text": "ir", "meaning": "去", "tail": " " },
            { "text": "contigo", "meaning": "和你一起(con+ti)", "tail": "." }
          ]
        },
        {
          "sentence": "Café con leche.",
          "translation": "加牛奶的咖啡 (拿鐵)。",
          "segments": [
            { "text": "Café", "meaning": "咖啡", "tail": " " },
            { "text": "con", "meaning": "和/加", "tail": " " },
            { "text": "leche", "meaning": "牛奶", "tail": "." }
          ]
        }
      ],
      "usage_note": "大坑預警！con 後面接「我(mí)」或「你(ti)」時，不能分開寫，一定要合體變成 conmigo 和 contigo。",
      "image_file": "with.png"
    },
    {
      "id": "prep-02",
      "term_zh": "從...",
      "related_terms": [
        {
          "term_target": "de / desde",
          "pronunciation": ["/de/, /ˈdes.ðe/"],
          "specific_note": "來源/起點",
          "segments": [
            { "text": "de", "meaning": "從/的", "tail": " / " },
            { "text": "desde", "meaning": "自從(強調起點)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Soy de Taiwán.",
          "translation": "我來自台灣。",
          "segments": [
            { "text": "Soy", "meaning": "我是", "tail": " " },
            { "text": "de", "meaning": "來自", "tail": " " },
            { "text": "Taiwán", "meaning": "台灣", "tail": "." }
          ]
        },
        {
          "sentence": "Abierto de 9 a 5.",
          "translation": "營業時間從9點到5點。",
          "segments": [
            { "text": "Abierto", "meaning": "開著的", "tail": " " },
            { "text": "de", "meaning": "從", "tail": " " },
            { "text": "9", "meaning": "九點", "tail": " " },
            { "text": "a", "meaning": "到", "tail": " " },
            { "text": "5", "meaning": "五點", "tail": "." }
          ]
        },
        {
          "sentence": "Desde aquí hasta allá.",
          "translation": "從這裡到那裡。",
          "segments": [
            { "text": "Desde", "meaning": "從", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": " " },
            { "text": "hasta", "meaning": "直到", "tail": " " },
            { "text": "allá", "meaning": "那裡", "tail": "." }
          ]
        }
      ],
      "usage_note": "de 是最泛用的字 (可當「的」或「從」)；desde 則強調整個距離或時間的「起點」。",
      "image_file": "from.png"
    },
    {
      "id": "prep-03",
      "term_zh": "為了...",
      "related_terms": [
        {
          "term_target": "para / por",
          "pronunciation": ["/ˈpa.ɾa/, /poɾ/"],
          "specific_note": "目的/原因",
          "segments": [
            { "text": "para", "meaning": "為了(目的)", "tail": " / " },
            { "text": "por", "meaning": "為了(原因/交換)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Esto es para ti.",
          "translation": "這是給你的。",
          "segments": [
            { "text": "Esto", "meaning": "這個", "tail": " " },
            { "text": "es", "meaning": "是", "tail": " " },
            { "text": "para", "meaning": "給", "tail": " " },
            { "text": "ti", "meaning": "你", "tail": "." }
          ]
        },
        {
          "sentence": "Gracias por tu ayuda.",
          "translation": "謝謝你的幫忙 (為了你的幫忙而感謝)。",
          "segments": [
            { "text": "Gracias", "meaning": "感謝", "tail": " " },
            { "text": "por", "meaning": "因為", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "ayuda", "meaning": "幫忙", "tail": "." }
          ]
        },
        {
          "sentence": "Lo hago por ti.",
          "translation": "我是為了你(因為你)才這麼做的。",
          "segments": [
            { "text": "Lo", "meaning": "它", "tail": " " },
            { "text": "hago", "meaning": "我做", "tail": " " },
            { "text": "por", "meaning": "為了(動機)", "tail": " " },
            { "text": "ti", "meaning": "你", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文介系詞大魔王！簡單說：para 用於「目的、給予的對象 (to/for)」；por 用於「原因、動機、交換 (because of)」。",
      "image_file": "for.png"
    },
    {
      "id": "prep-04",
      "term_zh": "...的",
      "related_terms": [
        {
          "term_target": "de",
          "pronunciation": ["/de/"],
          "specific_note": "所有/材質",
          "segments": [{ "text": "de", "meaning": "的/從", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Una taza de té.",
          "translation": "一杯茶。",
          "segments": [
            { "text": "Una", "meaning": "一杯", "tail": " " },
            { "text": "taza", "meaning": "茶杯", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "té", "meaning": "茶", "tail": "." }
          ]
        },
        {
          "sentence": "El color del coche.",
          "translation": "車子的顏色。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "color", "meaning": "顏色", "tail": " " },
            { "text": "del", "meaning": "的(de+el)", "tail": " " },
            { "text": "coche", "meaning": "車", "tail": "." }
          ]
        },
        {
          "sentence": "Es el libro de Juan.",
          "translation": "這是 Juan 的書。",
          "segments": [
            { "text": "Es", "meaning": "是", "tail": " " },
            { "text": "el", "meaning": "這本", "tail": " " },
            { "text": "libro", "meaning": "書", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "Juan", "meaning": "胡安", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文沒有 's 這種寫法。要表達「A的B」，語序要反過來寫成「B de A」。另外，de 遇到陽性定冠詞 el 時，一定要縮寫成 del！",
      "image_file": "of.png"
    },
    {
      "id": "prep-05",
      "term_zh": "在... (場所/時間)",
      "related_terms": [
        {
          "term_target": "en / a",
          "pronunciation": ["/en/, /a/"],
          "specific_note": "",
          "segments": [
            { "text": "en", "meaning": "在(地點)", "tail": " / " },
            { "text": "a", "meaning": "在(特定時間)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Estoy en casa.",
          "translation": "我在家。",
          "segments": [
            { "text": "Estoy", "meaning": "我在", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "casa", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Ella está en la habitación.",
          "translation": "她(人)在房間裡。",
          "segments": [
            { "text": "Ella", "meaning": "她", "tail": " " },
            { "text": "está", "meaning": "在", "tail": " " },
            { "text": "en", "meaning": "在...裡", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "habitación", "meaning": "房間", "tail": "." }
          ]
        },
        {
          "sentence": "Nos vemos a las cinco.",
          "translation": "我們五點見。 (時間點要用 a)",
          "segments": [
            { "text": "Nos", "meaning": "我們(互相)", "tail": " " },
            { "text": "vemos", "meaning": "見面", "tail": " " },
            { "text": "a", "meaning": "在(時間)", "tail": " " },
            { "text": "las", "meaning": "這", "tail": " " },
            { "text": "cinco", "meaning": "五點", "tail": "." }
          ]
        }
      ],
      "usage_note": "比英文簡單！英文分 at, in, on，西文表達「在某個地點」或「在某物上面」通常只用一個 en 就能搞定。但表達「幾點鐘」時要用 a。",
      "image_file": "at_in.png"
    },
    {
      "id": "prep-06",
      "term_zh": "往... (去) / 給...",
      "related_terms": [
        {
          "term_target": "a",
          "pronunciation": ["/a/"],
          "specific_note": "方向/對象",
          "segments": [{ "text": "a", "meaning": "往/向/給", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Voy a la escuela.",
          "translation": "我去(往)學校。",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "escuela", "meaning": "學校", "tail": "." }
          ]
        },
        {
          "sentence": "Feliz cumpleaños a ti.",
          "translation": "祝你生日快樂 (給你的生日快樂)。",
          "segments": [
            { "text": "Feliz", "meaning": "快樂的", "tail": " " },
            { "text": "cumpleaños", "meaning": "生日", "tail": " " },
            { "text": "a", "meaning": "給", "tail": " " },
            { "text": "ti", "meaning": "你", "tail": "." }
          ]
        },
        {
          "sentence": "Voy al supermercado.",
          "translation": "我要去超市。",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "al", "meaning": "往(a+el)", "tail": " " },
            { "text": "supermercado", "meaning": "超市", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達方向(to)。大坑預警：當 a 遇到陽性定冠詞 el 時，一定要縮寫合體變成 al (例如 al supermercado)，不能分開寫！",
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
          "term_target": "cero",
          "pronunciation": ["/ˈse.ɾo/"],
          "specific_note": "",
          "segments": [{ "text": "cero", "meaning": "零", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Cero puntos.",
          "translation": "零分。",
          "segments": [
            { "text": "Cero", "meaning": "零", "tail": " " },
            { "text": "puntos", "meaning": "分數", "tail": "." }
          ]
        },
        {
          "sentence": "Hace cero grados hoy.",
          "translation": "今天零度 (天氣)。",
          "segments": [
            { "text": "Hace", "meaning": "製造(天氣)", "tail": " " },
            { "text": "cero", "meaning": "零", "tail": " " },
            { "text": "grados", "meaning": "度數", "tail": " " },
            { "text": "hoy", "meaning": "今天", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo cero experiencia.",
          "translation": "我毫無(零)經驗。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "cero", "meaning": "零", "tail": " " },
            { "text": "experiencia", "meaning": "經驗", "tail": "." }
          ]
        }
      ],
      "usage_note": "數字 0。發音的 c 在西班牙念咬舌音 (類似英文 th)，在拉美念 s。",
      "image_file": "zero.png"
    },
    {
      "id": "num-1",
      "term_zh": "1",
      "related_terms": [
        {
          "term_target": "uno / un / una",
          "pronunciation": ["/ˈu.no/, /un/, /ˈu.na/"],
          "specific_note": "有陰陽性變化",
          "segments": [
            { "text": "uno", "meaning": "一(數字)", "tail": " / " },
            { "text": "un", "meaning": "一個(陽性)", "tail": " / " },
            { "text": "una", "meaning": "一個(陰性)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Una manzana.",
          "translation": "一顆蘋果。",
          "segments": [
            { "text": "Una", "meaning": "一顆(陰性)", "tail": " " },
            { "text": "manzana", "meaning": "蘋果", "tail": "." }
          ]
        },
        {
          "sentence": "Un boleto, por favor.",
          "translation": "請給我一張票。",
          "segments": [
            { "text": "Un", "meaning": "一張(陽性)", "tail": " " },
            { "text": "boleto", "meaning": "票", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo un hermano.",
          "translation": "我有一個兄弟。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "un", "meaning": "一個(陽性)", "tail": " " },
            { "text": "hermano", "meaning": "兄弟", "tail": "." }
          ]
        }
      ],
      "usage_note": "單獨念數字是 uno，但放在名詞前面會依據性別變成 un 或 una。",
      "image_file": "one.png"
    },
    {
      "id": "num-2",
      "term_zh": "2",
      "related_terms": [
        {
          "term_target": "dos",
          "pronunciation": ["/dos/"],
          "specific_note": "",
          "segments": [{ "text": "dos", "meaning": "二", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Dos días.",
          "translation": "兩天。",
          "segments": [
            { "text": "Dos", "meaning": "兩", "tail": " " },
            { "text": "días", "meaning": "天", "tail": "." }
          ]
        },
        {
          "sentence": "Mesa para dos, por favor.",
          "translation": "麻煩兩位用餐 (兩人的桌子)。",
          "segments": [
            { "text": "Mesa", "meaning": "桌子", "tail": " " },
            { "text": "para", "meaning": "給", "tail": " " },
            { "text": "dos", "meaning": "兩位", "tail": ", " },
            { "text": "por", "meaning": "為了", "tail": " " },
            { "text": "favor", "meaning": "恩惠", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo dos gatos.",
          "translation": "我有兩隻貓。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "dos", "meaning": "兩", "tail": " " },
            { "text": "gatos", "meaning": "貓(複數)", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的 2 沒有陰陽性變化（不分男女都是 dos）。",
      "image_file": "two.png"
    },
    {
      "id": "num-3",
      "term_zh": "3",
      "related_terms": [
        {
          "term_target": "tres",
          "pronunciation": ["/tɾes/"],
          "specific_note": "",
          "segments": [{ "text": "tres", "meaning": "三", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tres personas.",
          "translation": "三個人。",
          "segments": [
            { "text": "Tres", "meaning": "三", "tail": " " },
            { "text": "personas", "meaning": "人(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Nos vemos en tres minutos.",
          "translation": "三分鐘後見。",
          "segments": [
            { "text": "Nos", "meaning": "我們(互相)", "tail": " " },
            { "text": "vemos", "meaning": "看見", "tail": " " },
            { "text": "en", "meaning": "在...之後", "tail": " " },
            { "text": "tres", "meaning": "三", "tail": " " },
            { "text": "minutos", "meaning": "分鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Compré tres libros.",
          "translation": "我買了三本書。",
          "segments": [
            { "text": "Compré", "meaning": "我買(過去式)", "tail": " " },
            { "text": "tres", "meaning": "三", "tail": " " },
            { "text": "libros", "meaning": "書", "tail": "." }
          ]
        }
      ],
      "usage_note": "注意 r 的發音，要稍微有一點點輕彈舌。",
      "image_file": "three.png"
    },
    {
      "id": "num-4",
      "term_zh": "4",
      "related_terms": [
        {
          "term_target": "cuatro",
          "pronunciation": ["/ˈkwa.tɾo/"],
          "specific_note": "",
          "segments": [{ "text": "cuatro", "meaning": "四", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Las cuatro estaciones.",
          "translation": "四季。",
          "segments": [
            { "text": "Las", "meaning": "這些", "tail": " " },
            { "text": "cuatro", "meaning": "四", "tail": " " },
            { "text": "estaciones", "meaning": "季節", "tail": "." }
          ]
        },
        {
          "sentence": "Son las cuatro.",
          "translation": "現在是四點鐘。",
          "segments": [
            { "text": "Son", "meaning": "是(時間複數)", "tail": " " },
            { "text": "las", "meaning": "這", "tail": " " },
            { "text": "cuatro", "meaning": "四點", "tail": "." }
          ]
        },
        {
          "sentence": "Mesa número cuatro.",
          "translation": "四號桌。",
          "segments": [
            { "text": "Mesa", "meaning": "桌子", "tail": " " },
            { "text": "número", "meaning": "號碼", "tail": " " },
            { "text": "cuatro", "meaning": "四", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文問時間，除了1點是單數(Es la una)，2點以上全部都是複數 (Son las...)。",
      "image_file": "four.png"
    },
    {
      "id": "num-5",
      "term_zh": "5",
      "related_terms": [
        {
          "term_target": "cinco",
          "pronunciation": ["/ˈsiŋ.ko/"],
          "specific_note": "",
          "segments": [{ "text": "cinco", "meaning": "五", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Cinco estrellas.",
          "translation": "五顆星。",
          "segments": [
            { "text": "Cinco", "meaning": "五", "tail": " " },
            { "text": "estrellas", "meaning": "星星", "tail": "." }
          ]
        },
        {
          "sentence": "Dame cinco minutos.",
          "translation": "給我五分鐘。",
          "segments": [
            { "text": "Dame", "meaning": "給我", "tail": " " },
            { "text": "cinco", "meaning": "五", "tail": " " },
            { "text": "minutos", "meaning": "分鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Ella tiene cinco años.",
          "translation": "她五歲。",
          "segments": [
            { "text": "Ella", "meaning": "她", "tail": " " },
            { "text": "tiene", "meaning": "有", "tail": " " },
            { "text": "cinco", "meaning": "五", "tail": " " },
            { "text": "años", "meaning": "歲/年", "tail": "." }
          ]
        }
      ],
      "usage_note": "C 在 i 和 e 前面念 s (拉美) 或 th (西班牙)，所以 cinco 念起來像「星狗」。",
      "image_file": "five.png"
    },
    {
      "id": "num-6",
      "term_zh": "6",
      "related_terms": [
        {
          "term_target": "seis",
          "pronunciation": ["/sejs/"],
          "specific_note": "",
          "segments": [{ "text": "seis", "meaning": "六", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "A las seis.",
          "translation": "在六點。",
          "segments": [
            { "text": "A", "meaning": "在", "tail": " " },
            { "text": "las", "meaning": "(接時間)", "tail": " " },
            { "text": "seis", "meaning": "六點", "tail": "." }
          ]
        },
        {
          "sentence": "Hay seis huevos.",
          "translation": "有六顆蛋。",
          "segments": [
            { "text": "Hay", "meaning": "有", "tail": " " },
            { "text": "seis", "meaning": "六", "tail": " " },
            { "text": "huevos", "meaning": "蛋", "tail": "." }
          ]
        },
        {
          "sentence": "Me levanto a las seis.",
          "translation": "我六點起床。",
          "segments": [
            { "text": "Me", "meaning": "我自己", "tail": " " },
            { "text": "levanto", "meaning": "起身", "tail": " " },
            { "text": "a", "meaning": "在", "tail": " " },
            { "text": "las", "meaning": "(接時間)", "tail": " " },
            { "text": "seis", "meaning": "六點", "tail": "." }
          ]
        }
      ],
      "usage_note": "發音像英文的 safe 把 f 換成 s。",
      "image_file": "six.png"
    },
    {
      "id": "num-7",
      "term_zh": "7",
      "related_terms": [
        {
          "term_target": "siete",
          "pronunciation": ["/ˈsje.te/"],
          "specific_note": "",
          "segments": [{ "text": "siete", "meaning": "七", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Siete días.",
          "translation": "七天。",
          "segments": [
            { "text": "Siete", "meaning": "七", "tail": " " },
            { "text": "días", "meaning": "天", "tail": "." }
          ]
        },
        {
          "sentence": "A las siete de la mañana.",
          "translation": "早上七點鐘。",
          "segments": [
            { "text": "A", "meaning": "在", "tail": " " },
            { "text": "las", "meaning": "這", "tail": " " },
            { "text": "siete", "meaning": "七點", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "mañana", "meaning": "早上", "tail": "." }
          ]
        },
        {
          "sentence": "El número de la suerte, siete.",
          "translation": "幸運數字七。",
          "segments": [
            { "text": "El", "meaning": "這", "tail": " " },
            { "text": "número", "meaning": "數字", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "suerte", "meaning": "運氣", "tail": ", " },
            { "text": "siete", "meaning": "七", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文中 ie 是連在一起的雙母音，唸起來像「鞋-爹」。",
      "image_file": "seven.png"
    },
    {
      "id": "num-8",
      "term_zh": "8",
      "related_terms": [
        {
          "term_target": "ocho",
          "pronunciation": ["/ˈo.tʃo/"],
          "specific_note": "",
          "segments": [{ "text": "ocho", "meaning": "八", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tiene ocho años.",
          "translation": "他(她)八歲。",
          "segments": [
            { "text": "Tiene", "meaning": "他有", "tail": " " },
            { "text": "ocho", "meaning": "八", "tail": " " },
            { "text": "años", "meaning": "歲/年", "tail": "." }
          ]
        },
        {
          "sentence": "Nos vemos a las ocho.",
          "translation": "八點見。",
          "segments": [
            { "text": "Nos", "meaning": "我們", "tail": " " },
            { "text": "vemos", "meaning": "見面", "tail": " " },
            { "text": "a", "meaning": "在", "tail": " " },
            { "text": "las", "meaning": "(接時間)", "tail": " " },
            { "text": "ocho", "meaning": "八點", "tail": "." }
          ]
        },
        {
          "sentence": "Dormí ocho horas.",
          "translation": "我睡了八個小時。",
          "segments": [
            { "text": "Dormí", "meaning": "我睡(過去式)", "tail": " " },
            { "text": "ocho", "meaning": "八", "tail": " " },
            { "text": "horas", "meaning": "小時", "tail": "." }
          ]
        }
      ],
      "usage_note": "發音非常簡單，念起來就是「歐秋」。",
      "image_file": "eight.png"
    },
    {
      "id": "num-9",
      "term_zh": "9",
      "related_terms": [
        {
          "term_target": "nueve",
          "pronunciation": ["/ˈnwe.βe/"],
          "specific_note": "",
          "segments": [{ "text": "nueve", "meaning": "九", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Nueve de la noche.",
          "translation": "晚上九點。",
          "segments": [
            { "text": "Nueve", "meaning": "九點", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "noche", "meaning": "夜晚", "tail": "." }
          ]
        },
        {
          "sentence": "Nueve dólares.",
          "translation": "九塊錢(美元)。",
          "segments": [
            { "text": "Nueve", "meaning": "九", "tail": " " },
            { "text": "dólares", "meaning": "美元", "tail": "." }
          ]
        },
        {
          "sentence": "Número nueve.",
          "translation": "九號。",
          "segments": [
            { "text": "Número", "meaning": "號碼", "tail": " " },
            { "text": "nueve", "meaning": "九", "tail": "." }
          ]
        }
      ],
      "usage_note": "ue 是雙母音，v 在兩個母音中間會弱化發出類似 b (ㄅ) 的聲音，唸起來像「努威悲」。",
      "image_file": "nine.png"
    },
    {
      "id": "num-10",
      "term_zh": "10",
      "related_terms": [
        {
          "term_target": "diez",
          "pronunciation": ["/djes/"],
          "specific_note": "",
          "segments": [{ "text": "diez", "meaning": "十", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Diez euros.",
          "translation": "十歐元。",
          "segments": [
            { "text": "Diez", "meaning": "十", "tail": " " },
            { "text": "euros", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "Cuenta hasta diez.",
          "translation": "數到十。",
          "segments": [
            { "text": "Cuenta", "meaning": "數(命令句)", "tail": " " },
            { "text": "hasta", "meaning": "直到", "tail": " " },
            { "text": "diez", "meaning": "十", "tail": "." }
          ]
        },
        {
          "sentence": "Los diez mejores.",
          "translation": "前十名 (Top ten)。",
          "segments": [
            { "text": "Los", "meaning": "這些", "tail": " " },
            { "text": "diez", "meaning": "十", "tail": " " },
            { "text": "mejores", "meaning": "最好的(複數)", "tail": "." }
          ]
        }
      ],
      "usage_note": "字尾的 z 發音跟 s 一模一樣。",
      "image_file": "ten.png"
    },
    {
      "id": "num-11",
      "term_zh": "11",
      "related_terms": [
        {
          "term_target": "once",
          "pronunciation": ["/ˈon.se/"],
          "specific_note": "",
          "segments": [{ "text": "once", "meaning": "十一", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "A las once.",
          "translation": "十一點。",
          "segments": [
            { "text": "A", "meaning": "在", "tail": " " },
            { "text": "las", "meaning": "這", "tail": " " },
            { "text": "once", "meaning": "十一點", "tail": "." }
          ]
        },
        {
          "sentence": "Capítulo once.",
          "translation": "第11章。",
          "segments": [
            { "text": "Capítulo", "meaning": "章節", "tail": " " },
            { "text": "once", "meaning": "十一", "tail": "." }
          ]
        },
        {
          "sentence": "Hay once jugadores.",
          "translation": "有11名球員。",
          "segments": [
            { "text": "Hay", "meaning": "有", "tail": " " },
            { "text": "once", "meaning": "十一", "tail": " " },
            { "text": "jugadores", "meaning": "球員", "tail": "." }
          ]
        }
      ],
      "usage_note": "不要跟英文的 once (一次) 搞混了！西文的 once 唸法是「翁誰」，意思是 11。",
      "image_file": "eleven.png"
    },
    {
      "id": "num-12",
      "term_zh": "12",
      "related_terms": [
        {
          "term_target": "doce",
          "pronunciation": ["/ˈdo.se/"],
          "specific_note": "",
          "segments": [{ "text": "doce", "meaning": "十二", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Doce meses.",
          "translation": "12個月。",
          "segments": [
            { "text": "Doce", "meaning": "十二", "tail": " " },
            { "text": "meses", "meaning": "個月", "tail": "." }
          ]
        },
        {
          "sentence": "Son las doce.",
          "translation": "現在是(中午或半夜)12點。",
          "segments": [
            { "text": "Son", "meaning": "是", "tail": " " },
            { "text": "las", "meaning": "這", "tail": " " },
            { "text": "doce", "meaning": "十二點", "tail": "." }
          ]
        },
        {
          "sentence": "Una caja de doce.",
          "translation": "一盒12個 (一打)。",
          "segments": [
            { "text": "Una", "meaning": "一", "tail": " " },
            { "text": "caja", "meaning": "盒", "tail": " " },
            { "text": "de", "meaning": "裝有", "tail": " " },
            { "text": "doce", "meaning": "十二個", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文的 11-15 都是以 ce 結尾 (once, doce, trece, catorce, quince)。",
      "image_file": "twelve.png"
    },
    {
      "id": "num-15",
      "term_zh": "15",
      "related_terms": [
        {
          "term_target": "quince",
          "pronunciation": ["/ˈkin.se/"],
          "specific_note": "",
          "segments": [{ "text": "quince", "meaning": "十五", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Quince minutos.",
          "translation": "15分鐘。",
          "segments": [
            { "text": "Quince", "meaning": "十五", "tail": " " },
            { "text": "minutos", "meaning": "分鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Tiene quince años.",
          "translation": "她(他)15歲。",
          "segments": [
            { "text": "Tiene", "meaning": "他有", "tail": " " },
            { "text": "quince", "meaning": "十五", "tail": " " },
            { "text": "años", "meaning": "歲/年", "tail": "." }
          ]
        },
        {
          "sentence": "Habitación quince.",
          "translation": "15號房。",
          "segments": [
            { "text": "Habitación", "meaning": "房間", "tail": " " },
            { "text": "quince", "meaning": "十五", "tail": "." }
          ]
        }
      ],
      "usage_note": "在西語系國家 (特別是拉美)，女孩的 15 歲生日 (Quinceañera) 是非常盛大、像婚禮一樣隆重的慶典喔！",
      "image_file": "fifteen.png"
    },
    {
      "id": "num-20",
      "term_zh": "20",
      "related_terms": [
        {
          "term_target": "veinte",
          "pronunciation": ["/ˈbejn.te/"],
          "specific_note": "",
          "segments": [{ "text": "veinte", "meaning": "二十", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Veinte minutos.",
          "translation": "20分鐘。",
          "segments": [
            { "text": "Veinte", "meaning": "二十", "tail": " " },
            { "text": "minutos", "meaning": "分鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Veinte euros.",
          "translation": "20歐元。",
          "segments": [
            { "text": "Veinte", "meaning": "二十", "tail": " " },
            { "text": "euros", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "Tengo veinte años.",
          "translation": "我20歲。",
          "segments": [
            { "text": "Tengo", "meaning": "我有", "tail": " " },
            { "text": "veinte", "meaning": "二十", "tail": " " },
            { "text": "años", "meaning": "歲", "tail": "." }
          ]
        }
      ],
      "usage_note": "v 發音接近 b (ㄅ)，所以聽起來像「杯印爹」。",
      "image_file": "twenty.png"
    },
    {
      "id": "num-50",
      "term_zh": "50",
      "related_terms": [
        {
          "term_target": "cincuenta",
          "pronunciation": ["/siŋˈkwen.ta/"],
          "specific_note": "",
          "segments": [{ "text": "cincuenta", "meaning": "五十", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Cincuenta por ciento.",
          "translation": "50% (百分之五十)。",
          "segments": [
            { "text": "Cincuenta", "meaning": "五十", "tail": " " },
            { "text": "por", "meaning": "每", "tail": " " },
            { "text": "ciento", "meaning": "百", "tail": "." }
          ]
        },
        {
          "sentence": "Cincuenta personas.",
          "translation": "50個人。",
          "segments": [
            { "text": "Cincuenta", "meaning": "五十", "tail": " " },
            { "text": "personas", "meaning": "人們", "tail": "." }
          ]
        },
        {
          "sentence": "Cuesta cincuenta.",
          "translation": "這個要50元。",
          "segments": [
            { "text": "Cuesta", "meaning": "花費", "tail": " " },
            { "text": "cincuenta", "meaning": "五十", "tail": "." }
          ]
        }
      ],
      "usage_note": "所有 10 的倍數結尾通常是 -enta (除了 10, 20, 30)。",
      "image_file": "fifty.png"
    },
    {
      "id": "num-100",
      "term_zh": "100",
      "related_terms": [
        {
          "term_target": "cien / ciento",
          "pronunciation": ["/sjen/, /ˈsjen.to/"],
          "specific_note": "100整/大於100",
          "segments": [
            { "text": "cien", "meaning": "一百(整數)", "tail": " / " },
            { "text": "ciento", "meaning": "一百多", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Cien puntos.",
          "translation": "一百分。 (剛好 100 用 cien)",
          "segments": [
            { "text": "Cien", "meaning": "一百", "tail": " " },
            { "text": "puntos", "meaning": "分數", "tail": "." }
          ]
        },
        {
          "sentence": "Cien por ciento.",
          "translation": "百分之百 (100%)。",
          "segments": [
            { "text": "Cien", "meaning": "百", "tail": " " },
            { "text": "por", "meaning": "每", "tail": " " },
            { "text": "ciento", "meaning": "百", "tail": "." }
          ]
        },
        {
          "sentence": "Ciento uno.",
          "translation": "101。",
          "segments": [
            { "text": "Ciento", "meaning": "一百", "tail": " " },
            { "text": "uno", "meaning": "一", "tail": "." }
          ]
        }
      ],
      "usage_note": "大坑預警！剛好「一百」的時候念 cien；但是「一百零幾 (101~199)」的時候，就要變成 ciento (例如 ciento uno = 101)。",
      "image_file": "hundred.png"
    },
    {
      "id": "num-1000",
      "term_zh": "1000",
      "related_terms": [
        {
          "term_target": "mil",
          "pronunciation": ["/mil/"],
          "specific_note": "前面不加 un",
          "segments": [{ "text": "mil", "meaning": "千", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mil años.",
          "translation": "一千年。",
          "segments": [
            { "text": "Mil", "meaning": "千", "tail": " " },
            { "text": "años", "meaning": "年", "tail": "." }
          ]
        },
        {
          "sentence": "Cuesta mil euros.",
          "translation": "要價一千歐元。",
          "segments": [
            { "text": "Cuesta", "meaning": "花費", "tail": " " },
            { "text": "mil", "meaning": "千", "tail": " " },
            { "text": "euros", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "¡Mil gracias!",
          "translation": "非常感謝！ (直譯：一千個謝謝)",
          "segments": [
            { "text": "¡Mil", "meaning": "千", "tail": " " },
            { "text": "gracias!", "meaning": "謝謝", "tail": "" }
          ]
        }
      ],
      "usage_note": "避坑！英文會說 One thousand，但在西文中，1000 就是單獨一個字 mil，前面**絕對不可以**加上 un！",
      "image_file": "thousand.png"
    },
    {
      "id": "num-10000",
      "term_zh": "10000",
      "related_terms": [
        {
          "term_target": "diez mil",
          "pronunciation": ["/djes mil/"],
          "specific_note": "十個千",
          "segments": [
            { "text": "diez", "meaning": "十", "tail": " " },
            { "text": "mil", "meaning": "千", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Diez mil euros.",
          "translation": "一萬歐元。",
          "segments": [
            { "text": "Diez", "meaning": "十", "tail": " " },
            { "text": "mil", "meaning": "千", "tail": " " },
            { "text": "euros", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "Diez mil pasos.",
          "translation": "一萬步。",
          "segments": [
            { "text": "Diez", "meaning": "十", "tail": " " },
            { "text": "mil", "meaning": "千", "tail": " " },
            { "text": "pasos", "meaning": "腳步", "tail": "." }
          ]
        },
        {
          "sentence": "Más de diez mil personas.",
          "translation": "超過一萬個人。",
          "segments": [
            { "text": "Más", "meaning": "多/超過", "tail": " " },
            { "text": "de", "meaning": "於", "tail": " " },
            { "text": "diez", "meaning": "十", "tail": " " },
            { "text": "mil", "meaning": "千", "tail": " " },
            { "text": "personas", "meaning": "人們", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟英文一樣，西班牙文沒有「萬」這個獨立的單位，所以一萬要說「十個千 (diez mil)」。",
      "image_file": "ten_thousand.png"
    }
  ]
},
{
  "id": "grammar_patterns",
  "name": "常用句型",
  "items": [
    {
      "id": "g-01",
      "term_zh": "我是/覺得～",
      "related_terms": [
        {
          "term_target": "Soy / Estoy ～",
          "pronunciation": ["/soi/, /esˈtoi/"],
          "specific_note": "本質用Soy/狀態用Estoy",
          "segments": [
            { "text": "Soy", "meaning": "我是(本質)", "tail": " / " },
            { "text": "Estoy", "meaning": "我處於(狀態)", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Estoy feliz.",
          "translation": "我(現在)很快樂。",
          "segments": [
            { "text": "Estoy", "meaning": "我處於", "tail": " " },
            { "text": "feliz", "meaning": "快樂的", "tail": "." }
          ]
        },
        {
          "sentence": "Estoy cansado.",
          "translation": "我很累。",
          "segments": [
            { "text": "Estoy", "meaning": "我處於", "tail": " " },
            { "text": "cansado", "meaning": "累的", "tail": "." }
          ]
        },
        {
          "sentence": "Soy estudiante.",
          "translation": "我是學生。",
          "segments": [
            { "text": "Soy", "meaning": "我是", "tail": " " },
            { "text": "estudiante", "meaning": "學生", "tail": "." }
          ]
        }
      ],
      "usage_note": "主詞 Yo (我) 通常省略。職業/國籍用 Soy；情緒/位置用 Estoy。",
      "image_file": "i_am.png"
    },
    {
      "id": "g-02",
      "term_zh": "我的名字叫～",
      "related_terms": [
        {
          "term_target": "Me llamo ～",
          "pronunciation": ["/me ˈʝa.mo/"],
          "specific_note": "直譯為：我如此稱呼我自己",
          "segments": [
            { "text": "Me", "meaning": "我自己", "tail": " " },
            { "text": "llamo", "meaning": "我稱呼", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Me llamo John.",
          "translation": "我的名字叫約翰。",
          "segments": [
            { "text": "Me", "meaning": "我自己", "tail": " " },
            { "text": "llamo", "meaning": "稱呼", "tail": " " },
            { "text": "John", "meaning": "約翰", "tail": "." }
          ]
        },
        {
          "sentence": "Me llamo Mary.",
          "translation": "我的名字叫瑪麗。",
          "segments": [
            { "text": "Me", "meaning": "我自己", "tail": " " },
            { "text": "llamo", "meaning": "稱呼", "tail": " " },
            { "text": "Mary", "meaning": "瑪麗", "tail": "." }
          ]
        },
        {
          "sentence": "Hola, me llamo Tom.",
          "translation": "哈囉，我叫湯姆。",
          "segments": [
            { "text": "Hola", "meaning": "哈囉", "tail": ", " },
            { "text": "me", "meaning": "我自己", "tail": " " },
            { "text": "llamo", "meaning": "稱呼", "tail": " " },
            { "text": "Tom", "meaning": "湯姆", "tail": "." }
          ]
        }
      ],
      "usage_note": "雖然可以說 Mi nombre es... (My name is...)，但當地人介紹自己最常說的是 Me llamo... (我叫...)。",
      "image_file": "my_name_is.png"
    },
    {
      "id": "g-03",
      "term_zh": "我做～",
      "related_terms": [
        {
          "term_target": "(Yo) + 動詞現在式",
          "pronunciation": ["/ʝo/"],
          "specific_note": "主詞常省略",
          "segments": [
            { "text": "(Yo)", "meaning": "我(常省略)", "tail": " " },
            { "text": "+", "meaning": "加", "tail": " " },
            { "text": "動詞現在式", "meaning": "配合『我』變化的動詞", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Trabajo aquí.",
          "translation": "我在這裡工作。",
          "segments": [
            { "text": "Trabajo", "meaning": "我工作", "tail": " " },
            { "text": "aquí", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Juego al tenis.",
          "translation": "我打網球。",
          "segments": [
            { "text": "Juego", "meaning": "我玩/打", "tail": " " },
            { "text": "al", "meaning": "到(a+el)", "tail": " " },
            { "text": "tenis", "meaning": "網球", "tail": "." }
          ]
        },
        {
          "sentence": "Amo la música.",
          "translation": "我熱愛音樂。",
          "segments": [
            { "text": "Amo", "meaning": "我愛", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "música", "meaning": "音樂", "tail": "." }
          ]
        }
      ],
      "usage_note": "西班牙文的動詞字尾會跟著人稱改變，看到 Trabajo (o結尾) 就知道是「我工作」，所以不用把 Yo 講出來。",
      "image_file": "i_do.png"
    },
    {
      "id": "g-04",
      "term_zh": "我正在做～",
      "related_terms": [
        {
          "term_target": "Estoy ～ando / iendo",
          "pronunciation": ["/esˈtoi ...an.do/"],
          "specific_note": "進行式",
          "segments": [
            { "text": "Estoy", "meaning": "我正在", "tail": " " },
            { "text": "～ando / iendo", "meaning": "(動詞進行式變化)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Estoy comiendo.",
          "translation": "我正在吃。",
          "segments": [
            { "text": "Estoy", "meaning": "我正在", "tail": " " },
            { "text": "comiendo", "meaning": "吃(進行式)", "tail": "." }
          ]
        },
        {
          "sentence": "Estoy trabajando ahora.",
          "translation": "我現在正在工作。",
          "segments": [
            { "text": "Estoy", "meaning": "我正在", "tail": " " },
            { "text": "trabajando", "meaning": "工作(進行式)", "tail": " " },
            { "text": "ahora", "meaning": "現在", "tail": "." }
          ]
        },
        {
          "sentence": "Te estoy esperando.",
          "translation": "我正在等你。",
          "segments": [
            { "text": "Te", "meaning": "等你", "tail": " " },
            { "text": "estoy", "meaning": "我正在", "tail": " " },
            { "text": "esperando", "meaning": "等待(進行式)", "tail": "." }
          ]
        }
      ],
      "usage_note": "Estoy 加上動詞的進行式 (ar結尾變 ando，er/ir結尾變 iendo)。",
      "image_file": "ing.png"
    },
    {
      "id": "g-05",
      "term_zh": "我能夠～",
      "related_terms": [
        {
          "term_target": "Puedo + 原形動詞",
          "pronunciation": ["/ˈpwe.ðo/"],
          "specific_note": "",
          "segments": [
            { "text": "Puedo", "meaning": "我能夠/可以", "tail": " " },
            { "text": "～", "meaning": "(原形動詞)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Puedo nadar.",
          "translation": "我會(能)游泳。",
          "segments": [
            { "text": "Puedo", "meaning": "我能", "tail": " " },
            { "text": "nadar", "meaning": "游泳(原形)", "tail": "." }
          ]
        },
        {
          "sentence": "Sé hablar inglés.",
          "translation": "我會說英文。 (語言能力西文習慣用 saber 知道)",
          "segments": [
            { "text": "Sé", "meaning": "我知道/我會", "tail": " " },
            { "text": "hablar", "meaning": "說(原形)", "tail": " " },
            { "text": "inglés", "meaning": "英文", "tail": "." }
          ]
        },
        {
          "sentence": "Puedo ayudarte.",
          "translation": "我可以幫你。",
          "segments": [
            { "text": "Puedo", "meaning": "我可以", "tail": " " },
            { "text": "ayudarte", "meaning": "幫助你(ayudar+te)", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達能力時，西文最常用 Puedo (I can) 或 Sé (I know how to) 加上沒有變化的「原形動詞」。",
      "image_file": "can.png"
    },
    {
      "id": "g-06",
      "term_zh": "我喜歡做～",
      "related_terms": [
        {
          "term_target": "Me gusta + 原形動詞",
          "pronunciation": ["/me ˈgus.ta/"],
          "specific_note": "",
          "segments": [
            { "text": "Me", "meaning": "對我來說", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "～", "meaning": "(原形動詞)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Me gusta leer.",
          "translation": "我喜歡閱讀。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "leer", "meaning": "閱讀(原形)", "tail": "." }
          ]
        },
        {
          "sentence": "Me gusta viajar.",
          "translation": "我喜歡旅行。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "viajar", "meaning": "旅行(原形)", "tail": "." }
          ]
        },
        {
          "sentence": "Me gusta comer pizza.",
          "translation": "我喜歡吃披薩。",
          "segments": [
            { "text": "Me", "meaning": "對我", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "comer", "meaning": "吃(原形)", "tail": " " },
            { "text": "pizza", "meaning": "披薩", "tail": "." }
          ]
        }
      ],
      "usage_note": "避坑！英文說 I like playing，但西文的 Me gusta 後面「絕對不能」接進行式，一定要接「原形動詞」。",
      "image_file": "like_ing.png"
    },
    {
      "id": "g-07",
      "term_zh": "我曾經～ / 我當時～",
      "related_terms": [
        {
          "term_target": "Era / Estaba",
          "pronunciation": ["/ˈe.ɾa/, /esˈta.βa/"],
          "specific_note": "過去狀態",
          "segments": [
            { "text": "Era", "meaning": "我是(過去本質)", "tail": " / " },
            { "text": "Estaba", "meaning": "我處於(過去狀態)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Era estudiante.",
          "translation": "我曾經是學生。",
          "segments": [
            { "text": "Era", "meaning": "我是(過去式)", "tail": " " },
            { "text": "estudiante", "meaning": "學生", "tail": "." }
          ]
        },
        {
          "sentence": "Ayer estuve muy ocupado.",
          "translation": "我昨天很忙。",
          "segments": [
            { "text": "Ayer", "meaning": "昨天", "tail": " " },
            { "text": "estuve", "meaning": "我處於(明確的過去狀態)", "tail": " " },
            { "text": "muy", "meaning": "非常", "tail": " " },
            { "text": "ocupado", "meaning": "忙碌的", "tail": "." }
          ]
        },
        {
          "sentence": "Estaba en casa.",
          "translation": "我當時在家。",
          "segments": [
            { "text": "Estaba", "meaning": "我當時在", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "casa", "meaning": "家", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟現在式一樣，過去式也分 Era (以前的身份) 和 Estaba (當時的狀態或位置)。",
      "image_file": "i_was.png"
    },
    {
      "id": "g-08",
      "term_zh": "我做過～",
      "related_terms": [
        {
          "term_target": "動詞的過去式",
          "pronunciation": ["/-(é/í)/"],
          "specific_note": "明確結束的動作",
          "segments": [
            { "text": "(動詞過去式)", "meaning": "通常字尾帶有重音", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Caminé a casa.",
          "translation": "我走路回家了。",
          "segments": [
            { "text": "Caminé", "meaning": "我走路(過去式)", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "casa", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Vi una película.",
          "translation": "我看了一部電影。",
          "segments": [
            { "text": "Vi", "meaning": "我看(過去式)", "tail": " " },
            { "text": "una", "meaning": "一部", "tail": " " },
            { "text": "película", "meaning": "電影", "tail": "." }
          ]
        },
        {
          "sentence": "Jugué al baloncesto.",
          "translation": "我打了籃球。",
          "segments": [
            { "text": "Jugué", "meaning": "我打(過去式)", "tail": " " },
            { "text": "al", "meaning": "到", "tail": " " },
            { "text": "baloncesto", "meaning": "籃球", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文中表示「我」已經做完的過去式，字尾通常會有一個重音符號 (例如 é 或是 í)，發音要特別強調結尾！",
      "image_file": "i_did.png"
    },
    {
      "id": "g-09",
      "term_zh": "我已做過～",
      "related_terms": [
        {
          "term_target": "He + 過去分詞 (-ado/-ido)",
          "pronunciation": ["/e/"],
          "specific_note": "現在完成式",
          "segments": [
            { "text": "He", "meaning": "我已經(助動詞)", "tail": " " },
            { "text": "～", "meaning": "(過去分詞)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ya he terminado.",
          "translation": "我已經完成了。",
          "segments": [
            { "text": "Ya", "meaning": "已經", "tail": " " },
            { "text": "he", "meaning": "已經(助動詞)", "tail": " " },
            { "text": "terminado", "meaning": "完成(過去分詞)", "tail": "." }
          ]
        },
        {
          "sentence": "He perdido mis llaves.",
          "translation": "我弄丟了我的鑰匙。",
          "segments": [
            { "text": "He", "meaning": "已經", "tail": " " },
            { "text": "perdido", "meaning": "遺失(過去分詞)", "tail": " " },
            { "text": "mis", "meaning": "我的(複數)", "tail": " " },
            { "text": "llaves", "meaning": "鑰匙", "tail": "." }
          ]
        },
        {
          "sentence": "He visto esa película.",
          "translation": "我看過那部電影了。",
          "segments": [
            { "text": "He", "meaning": "已經", "tail": " " },
            { "text": "visto", "meaning": "看過(不規則過去分詞)", "tail": " " },
            { "text": "esa", "meaning": "那部", "tail": " " },
            { "text": "película", "meaning": "電影", "tail": "." }
          ]
        }
      ],
      "usage_note": "He (我已經) 後面的動詞字尾通常會變成 -ado 或是 -ido，在西班牙尤其常使用這個句型。",
      "image_file": "i_have_done.png"
    },
    {
      "id": "g-10",
      "term_zh": "我曾去過～",
      "related_terms": [
        {
          "term_target": "He estado en ～",
          "pronunciation": ["/e esˈta.ðo en/"],
          "specific_note": "生命經驗",
          "segments": [
            { "text": "He", "meaning": "已經", "tail": " " },
            { "text": "estado", "meaning": "待過", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "He estado en Japón.",
          "translation": "我曾經去過日本。",
          "segments": [
            { "text": "He", "meaning": "已經", "tail": " " },
            { "text": "estado", "meaning": "待過", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "Japón", "meaning": "日本", "tail": "." }
          ]
        },
        {
          "sentence": "He estado en Taipéi 101.",
          "translation": "我去過台北101。",
          "segments": [
            { "text": "He", "meaning": "已經", "tail": " " },
            { "text": "estado", "meaning": "待過", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "Taipéi", "meaning": "台北", "tail": " " },
            { "text": "101", "meaning": "101", "tail": "." }
          ]
        },
        {
          "sentence": "He estado allí dos veces.",
          "translation": "我去過那裡兩次。",
          "segments": [
            { "text": "He", "meaning": "已經", "tail": " " },
            { "text": "estado", "meaning": "待過", "tail": " " },
            { "text": "allí", "meaning": "那裡", "tail": " " },
            { "text": "dos", "meaning": "兩", "tail": " " },
            { "text": "veces", "meaning": "次數", "tail": "." }
          ]
        }
      ],
      "usage_note": "西文表達「去過某地」，不是用去(ir)，而是用「在某地待過 (estado en)」來表達經驗。",
      "image_file": "have_been_to.png"
    },
    {
      "id": "g-11",
      "term_zh": "我打算 / 將要～",
      "related_terms": [
        {
          "term_target": "Voy a + 原形動詞",
          "pronunciation": ["/boi a/"],
          "specific_note": "近未來式",
          "segments": [
            { "text": "Voy", "meaning": "我去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "～", "meaning": "(原形動詞)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Voy a ir.",
          "translation": "我打算(將要)去。",
          "segments": [
            { "text": "Voy", "meaning": "我將要", "tail": " " },
            { "text": "a", "meaning": "去", "tail": " " },
            { "text": "ir", "meaning": "去(原形)", "tail": "." }
          ]
        },
        {
          "sentence": "Te voy a llamar.",
          "translation": "我(等一下)會打給你。",
          "segments": [
            { "text": "Te", "meaning": "打給你", "tail": " " },
            { "text": "voy", "meaning": "我將要", "tail": " " },
            { "text": "a", "meaning": "去", "tail": " " },
            { "text": "llamar", "meaning": "打電話(原形)", "tail": "." }
          ]
        },
        {
          "sentence": "Voy a dar lo mejor de mí.",
          "translation": "我會盡全力的。 (非常道地的片語)",
          "segments": [
            { "text": "Voy", "meaning": "我將要", "tail": " " },
            { "text": "a", "meaning": "去", "tail": " " },
            { "text": "dar", "meaning": "給", "tail": " " },
            { "text": "lo", "meaning": "這", "tail": " " },
            { "text": "mejor", "meaning": "最好的", "tail": " " },
            { "text": "de", "meaning": "的", "tail": " " },
            { "text": "mí", "meaning": "我", "tail": "." }
          ]
        }
      ],
      "usage_note": "比起正經的未來式，西語母語人士每天都在瘋狂使用 Voy a... (I am going to...) 來表達打算做的事。",
      "image_file": "i_will.png"
    },
    {
      "id": "g-12",
      "term_zh": "你是～嗎？",
      "related_terms": [
        {
          "term_target": "¿Eres / Estás ～?",
          "pronunciation": ["/ˈe.ɾes/, /esˈtas/"],
          "specific_note": "",
          "segments": [
            { "text": "¿Eres", "meaning": "你是(本質)", "tail": " / " },
            { "text": "¿Estás", "meaning": "你處於(狀態)", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Estás listo?",
          "translation": "你準備好了嗎？",
          "segments": [
            { "text": "¿Estás", "meaning": "你處於", "tail": " " },
            { "text": "listo?", "meaning": "準備好的", "tail": "" }
          ]
        },
        {
          "sentence": "¿Tienes hambre?",
          "translation": "你餓了嗎？ (西文飢餓要用 tener: 你『有』飢餓嗎？)",
          "segments": [
            { "text": "¿Tienes", "meaning": "你有", "tail": " " },
            { "text": "hambre?", "meaning": "飢餓", "tail": "" }
          ]
        },
        {
          "sentence": "¿Eres estudiante?",
          "translation": "你是學生嗎？",
          "segments": [
            { "text": "¿Eres", "meaning": "你是", "tail": " " },
            { "text": "estudiante?", "meaning": "學生", "tail": "" }
          ]
        }
      ],
      "usage_note": "大坑預警！問情緒、是否準備好用 ¿Estás...?；問身分職業用 ¿Eres...?；但如果是問餓不餓、幾歲，要用 ¿Tienes...? (你有...嗎)。",
      "image_file": "are_you.png"
    },
    {
      "id": "g-13",
      "term_zh": "你在做～嗎？ / 你～嗎？",
      "related_terms": [
        {
          "term_target": "¿(Tú) + 動詞現在式?",
          "pronunciation": ["(無固定發音)"],
          "specific_note": "不用加 Do",
          "segments": [
            { "text": "¿(動詞)", "meaning": "直接用變位動詞發問", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Comes picante?",
          "translation": "你吃辣嗎？",
          "segments": [
            { "text": "¿Comes", "meaning": "你吃", "tail": " " },
            { "text": "picante?", "meaning": "辣的", "tail": "" }
          ]
        },
        {
          "sentence": "¿Te gusta la música?",
          "translation": "你喜歡音樂嗎？",
          "segments": [
            { "text": "¿Te", "meaning": "對你", "tail": " " },
            { "text": "gusta", "meaning": "令人喜歡", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "música?", "meaning": "音樂", "tail": "" }
          ]
        },
        {
          "sentence": "¿Entiendes?",
          "translation": "你懂嗎？",
          "segments": [
            { "text": "¿Entiendes?", "meaning": "你了解", "tail": "" }
          ]
        }
      ],
      "usage_note": "西文沒有 Do 這個助動詞！要問問題時，只要把聲音上揚，並直接用配合「你」的動詞變化即可。",
      "image_file": "do_you.png"
    },
    {
      "id": "g-14",
      "term_zh": "你曾經～嗎？",
      "related_terms": [
        {
          "term_target": "¿Alguna vez has + 過去分詞?",
          "pronunciation": ["/alˈɣu.na bes as/"],
          "specific_note": "問經驗",
          "segments": [
            { "text": "¿Alguna", "meaning": "某", "tail": " " },
            { "text": "vez", "meaning": "次", "tail": " " },
            { "text": "has", "meaning": "你已經", "tail": " " },
            { "text": "～", "meaning": "(過去分詞)", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Alguna vez has visto la nieve?",
          "translation": "你曾經看過雪嗎？",
          "segments": [
            { "text": "¿Alguna", "meaning": "某", "tail": " " },
            { "text": "vez", "meaning": "次", "tail": " " },
            { "text": "has", "meaning": "你已經", "tail": " " },
            { "text": "visto", "meaning": "看過", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "nieve?", "meaning": "雪", "tail": "" }
          ]
        },
        {
          "sentence": "¿Alguna vez has estado en Taiwán?",
          "translation": "你曾經去過台灣嗎？",
          "segments": [
            { "text": "¿Alguna", "meaning": "某", "tail": " " },
            { "text": "vez", "meaning": "次", "tail": " " },
            { "text": "has", "meaning": "你已經", "tail": " " },
            { "text": "estado", "meaning": "待過", "tail": " " },
            { "text": "en", "meaning": "在", "tail": " " },
            { "text": "Taiwán?", "meaning": "台灣", "tail": "" }
          ]
        },
        {
          "sentence": "¿Has comido tofu apestoso?",
          "translation": "你吃過臭豆腐嗎？ (口語常省略 Alguna vez)",
          "segments": [
            { "text": "¿Has", "meaning": "你已經", "tail": " " },
            { "text": "comido", "meaning": "吃過", "tail": " " },
            { "text": "tofu", "meaning": "豆腐", "tail": " " },
            { "text": "apestoso?", "meaning": "臭的", "tail": "" }
          ]
        }
      ],
      "usage_note": "口語中如果覺得 Alguna vez (曾經) 太長，直接用 ¿Has + 過去分詞...? 就能表達「你做過...嗎？」的意思了。",
      "image_file": "have_you_ever.png"
    },
    {
      "id": "g-15",
      "term_zh": "你何時做（某事）？",
      "related_terms": [
        {
          "term_target": "¿Cuándo + 動詞 (你)?",
          "pronunciation": ["/ˈkwan.do/"],
          "specific_note": "問時間點",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "～", "meaning": "(配合『你』的動詞)", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cuándo duermes?",
          "translation": "你何時睡覺？",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "duermes?", "meaning": "你睡覺", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuándo empiezas a trabajar?",
          "translation": "你何時開始工作？",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "empiezas", "meaning": "你開始", "tail": " " },
            { "text": "a", "meaning": "去", "tail": " " },
            { "text": "trabajar?", "meaning": "工作", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuándo haces ejercicio?",
          "translation": "你何時運動？",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "haces", "meaning": "你做", "tail": " " },
            { "text": "ejercicio?", "meaning": "運動", "tail": "" }
          ]
        }
      ],
      "usage_note": "疑問詞 Cuándo 一定要加重音符號。同樣不需要 do，直接把動詞變成對應「你」的字尾。",
      "image_file": "when_do_you.png"
    },
    {
      "id": "g-16",
      "term_zh": "你什麼時候去（某地）？",
      "related_terms": [
        {
          "term_target": "¿Cuándo vas a ～?",
          "pronunciation": ["/ˈkwan.do βas a/"],
          "specific_note": "",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "vas", "meaning": "你去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cuándo vas a la escuela?",
          "translation": "你何時去學校？",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "vas", "meaning": "你去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "escuela?", "meaning": "學校", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuándo vas al trabajo?",
          "translation": "你何時去上班(工作)？",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "vas", "meaning": "你去", "tail": " " },
            { "text": "al", "meaning": "往(a+el)", "tail": " " },
            { "text": "trabajo?", "meaning": "工作", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cuándo te vas a casa?",
          "translation": "你何時要回家？ (加 te 強調離開現在這裡)",
          "segments": [
            { "text": "¿Cuándo", "meaning": "何時", "tail": " " },
            { "text": "te", "meaning": "你自己", "tail": " " },
            { "text": "vas", "meaning": "離開", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "casa?", "meaning": "家", "tail": "" }
          ]
        }
      ],
      "usage_note": "vas 是 ir(去) 的「你」型態。介係詞 a 如果遇到陽性地點 (el trabajo)，記得要合體變成 al。",
      "image_file": "when_go_to.png"
    },
    {
      "id": "g-17",
      "term_zh": "你在哪裡做（某事）？",
      "related_terms": [
        {
          "term_target": "¿Dónde + 動詞 (你)?",
          "pronunciation": ["/ˈdon.de/"],
          "specific_note": "",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "～", "meaning": "(配合『你』的動詞)", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Dónde vives?",
          "translation": "你住哪裡？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "vives?", "meaning": "你居住", "tail": "" }
          ]
        },
        {
          "sentence": "¿Dónde trabajas?",
          "translation": "你在哪裡工作？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "trabajas?", "meaning": "你工作", "tail": "" }
          ]
        },
        {
          "sentence": "¿Dónde compras la comida?",
          "translation": "你在哪裡買食物(買菜)？",
          "segments": [
            { "text": "¿Dónde", "meaning": "哪裡", "tail": " " },
            { "text": "compras", "meaning": "你買", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "comida?", "meaning": "食物", "tail": "" }
          ]
        }
      ],
      "usage_note": "疑問詞 Dónde 上的撇號絕對不能漏掉！直接接上動詞「你」的變化即可發問。",
      "image_file": "where_do_you.png"
    },
    {
      "id": "g-18",
      "term_zh": "你如何做（某事）？",
      "related_terms": [
        {
          "term_target": "¿Cómo + 動詞 (你)?",
          "pronunciation": ["/ˈko.mo/"],
          "specific_note": "",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "～", "meaning": "(配合『你』的動詞)", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cómo cocinas esto?",
          "translation": "你怎麼煮這個？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "cocinas", "meaning": "你煮", "tail": " " },
            { "text": "esto?", "meaning": "這個", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cómo se escribe tu nombre?",
          "translation": "你的名字怎麼拼(寫)？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "se", "meaning": "被", "tail": " " },
            { "text": "escribe", "meaning": "寫", "tail": " " },
            { "text": "tu", "meaning": "你的", "tail": " " },
            { "text": "nombre?", "meaning": "名字", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cómo te sientes?",
          "translation": "你覺得(感覺)如何？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "te", "meaning": "你自己", "tail": " " },
            { "text": "sientes?", "meaning": "感覺", "tail": "" }
          ]
        }
      ],
      "usage_note": "詢問做事情的方式。如果不知道一個西文字怎麼拼，可以常用 ¿Cómo se escribe...? (這要怎麼寫？) 來求救。",
      "image_file": "how_do_you.png"
    },
    {
      "id": "g-19",
      "term_zh": "你怎麼去（某地）？",
      "related_terms": [
        {
          "term_target": "¿Cómo vas a ～?",
          "pronunciation": ["/ˈko.mo βas a/"],
          "specific_note": "問交通方式",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "vas", "meaning": "你去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "¿Cómo vas a la escuela?",
          "translation": "你怎麼去學校？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "vas", "meaning": "你去", "tail": " " },
            { "text": "a", "meaning": "往", "tail": " " },
            { "text": "la", "meaning": "這", "tail": " " },
            { "text": "escuela?", "meaning": "學校", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cómo vas al aeropuerto?",
          "translation": "你怎麼去機場？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "vas", "meaning": "你去", "tail": " " },
            { "text": "al", "meaning": "往(a+el)", "tail": " " },
            { "text": "aeropuerto?", "meaning": "機場", "tail": "" }
          ]
        },
        {
          "sentence": "¿Cómo vas al trabajo?",
          "translation": "你怎麼去上班(工作)？",
          "segments": [
            { "text": "¿Cómo", "meaning": "如何", "tail": " " },
            { "text": "vas", "meaning": "你去", "tail": " " },
            { "text": "al", "meaning": "往(a+el)", "tail": " " },
            { "text": "trabajo?", "meaning": "工作", "tail": "" }
          ]
        }
      ],
      "usage_note": "這句話在生活交談中非常實用，用來詢問對方搭乘什麼交通工具前往某地。",
      "image_file": "how_go_to.png"
    }
  ]
}

    // {
    //   id: "greetings",
    //   name: "常用句",
    //   items: [
    //     {
    //       id: "greet-001",
    //       term_zh: "是的",
    //       related_terms: [
    //         {
    //           term_target: "Sí",
    //           pronunciation: ["/si/"],
    //           specific_note: "肯定",
    //         },
    //       ],
    //       example: {
    //         sentence: "Sí, por favor.",
    //         translation: "是的，麻煩了。",
    //       },
    //       usage_note: "注意 i 上面有重音符號。",
    //       image_file: "yes.png",
    //     },
    //     {
    //       id: "greet-002",
    //       term_zh: "不是",
    //       related_terms: [
    //         {
    //           term_target: "No",
    //           pronunciation: ["/no/"],
    //           specific_note: "否定",
    //         },
    //       ],
    //       example: {
    //         sentence: "No, gracias.",
    //         translation: "不，謝謝。",
    //       },
    //       usage_note: "發音短促清楚。",
    //       image_file: "no.png",
    //     },
    //     {
    //       id: "greet-003",
    //       term_zh: "你好",
    //       related_terms: [
    //         {
    //           term_target: "Hola",
    //           pronunciation: ["/ˈola/"],
    //           specific_note: "通用",
    //         },
    //       ],
    //       example: {
    //         sentence: "Hola, ¿cómo estás?",
    //         translation: "你好，你好嗎？",
    //       },
    //       usage_note: "H 不發音，這是最常用的問候。",
    //       image_file: "hello.png",
    //     },
    //     {
    //       id: "greet-004",
    //       term_zh: "謝謝你",
    //       related_terms: [
    //         {
    //           term_target: "Gracias",
    //           pronunciation: ["/ˈgɾaθjas/"],
    //           specific_note: "通用",
    //         },
    //         {
    //           term_target: "Muchas gracias",
    //           pronunciation: ["/ˈmutʃas ˈgɾaθjas/"],
    //           specific_note: "非常感謝",
    //         },
    //       ],
    //       example: {
    //         sentence: "Muchas gracias por tu ayuda.",
    //         translation: "非常謝謝你的幫忙。",
    //       },
    //       usage_note: "回應可用 De nada (不客氣)。",
    //       image_file: "thank_you.png",
    //     },
    //     {
    //       id: "greet-005",
    //       term_zh: "對不起",
    //       related_terms: [
    //         {
    //           term_target: "Lo siento",
    //           pronunciation: ["/lo ˈsjento/"],
    //           specific_note: "我很抱歉 (遺憾)",
    //         },
    //         {
    //           term_target: "Perdón",
    //           pronunciation: ["/peɾˈdon/"],
    //           specific_note: "不好意思 (道歉)",
    //         },
    //       ],
    //       example: {
    //         sentence: "Lo siento, llegué tarde.",
    //         translation: "對不起，我遲到了。",
    //       },
    //       usage_note: "Lo siento 語氣較重，Perdón 較輕微。",
    //       image_file: "sorry.png",
    //     },
    //     {
    //       id: "greet-006",
    //       term_zh: "請問...",
    //       related_terms: [
    //         {
    //           term_target: "Disculpe",
    //           pronunciation: ["/disˈkulpe/"],
    //           specific_note: "正式 (引起注意)",
    //         },
    //         {
    //           term_target: "Perdón",
    //           pronunciation: ["/peɾˈdon/"],
    //           specific_note: "通用",
    //         },
    //       ],
    //       example: {
    //         sentence: "Disculpe, ¿dónde está el baño?",
    //         translation: "請問，廁所在哪裡？",
    //       },
    //       usage_note: "對陌生人發問建議用 Disculpe (Usted形式)。",
    //       image_file: "excuse_me.png",
    //     },
    //     {
    //       id: "greet-007",
    //       term_zh: "我不懂",
    //       related_terms: [
    //         {
    //           term_target: "No entiendo",
    //           pronunciation: ["/no enˈtjendo/"],
    //           specific_note: "無法理解",
    //         },
    //       ],
    //       example: {
    //         sentence: "Lo siento, no entiendo español.",
    //         translation: "抱歉，我不懂西班牙文。",
    //       },
    //       usage_note: "Entender 是「理解/懂」。",
    //       image_file: "dont_understand.png",
    //     },
    //     {
    //       id: "greet-008",
    //       term_zh: "廁所在哪裡？",
    //       related_terms: [
    //         {
    //           term_target: "¿Dónde está el baño?",
    //           pronunciation: ["/ˈdonde esˈta el ˈbaɲo/"],
    //           specific_note: "通用",
    //         },
    //       ],
    //       example: {
    //         sentence: "Perdón, ¿dónde está el baño?",
    //         translation: "不好意思，廁所在哪裡？",
    //       },
    //       usage_note: "旅遊必備。",
    //       image_file: "where_bathroom.png",
    //     },
    //     {
    //       id: "greet-009",
    //       term_zh: "借過",
    //       related_terms: [
    //         {
    //           term_target: "Con permiso",
    //           pronunciation: ["/kon peɾˈmiso/"],
    //           specific_note: "正式",
    //         },
    //         {
    //           term_target: "Permiso",
    //           pronunciation: ["/peɾˈmiso/"],
    //           specific_note: "簡短",
    //         },
    //       ],
    //       example: {
    //         sentence: "Con permiso, voy a pasar.",
    //         translation: "借過，我要過去。",
    //       },
    //       usage_note: "請求讓路時使用，拉美地區常用。",
    //       image_file: "excuse_me_pass.png",
    //     },
    //     {
    //       id: "greet-010",
    //       term_zh: "多少錢？",
    //       related_terms: [
    //         {
    //           term_target: "¿Cuánto cuesta?",
    //           pronunciation: ["/ˈkwanto ˈkwesta/"],
    //           specific_note: "單一物品",
    //         },
    //         {
    //           term_target: "¿Cuánto es?",
    //           pronunciation: ["/ˈkwanto es/"],
    //           specific_note: "總共",
    //         },
    //       ],
    //       example: {
    //         sentence: "Perdón, ¿cuánto cuesta esto?",
    //         translation: "不好意思，這多少錢？",
    //       },
    //       usage_note: "Cuesta 是 Costar (花費) 的變位。",
    //       image_file: "how_much.png",
    //     },
    //     {
    //       id: "greet-011",
    //       term_zh: "我想要這個",
    //       related_terms: [
    //         {
    //           term_target: "Quiero esto",
    //           pronunciation: ["/ˈkjeɾo ˈesto/"],
    //           specific_note: "直接",
    //         },
    //         {
    //           term_target: "Me gustaría esto",
    //           pronunciation: ["/me ɣustaˈɾia ˈesto/"],
    //           specific_note: "禮貌 (我想要...)",
    //         },
    //       ],
    //       example: {
    //         sentence: "Quiero esto, por favor.",
    //         translation: "我要這個，麻煩了。",
    //       },
    //       usage_note: "Quiero 是 Querer (想要) 的第一人稱。",
    //       image_file: "i_want_this.png",
    //     },
    //     {
    //       id: "greet-012",
    //       term_zh: "請給我...",
    //       related_terms: [
    //         {
    //           term_target: "Deme...",
    //           pronunciation: ["/ˈdeme/"],
    //           specific_note: "正式 (對Usted)",
    //         },
    //         {
    //           term_target: "Dame...",
    //           pronunciation: ["/ˈdame/"],
    //           specific_note: "非正式 (對Tú)",
    //         },
    //       ],
    //       example: {
    //         sentence: "Deme agua, por favor.",
    //         translation: "請給我水。",
    //       },
    //       usage_note: "Dar (給) 的命令式 + me (我)。",
    //       image_file: "please_give_me.png",
    //     },
    //     {
    //       id: "greet-013",
    //       term_zh: "這是什麼？",
    //       related_terms: [
    //         {
    //           term_target: "¿Qué es esto?",
    //           pronunciation: ["/ˈke es ˈesto/"],
    //           specific_note: "疑問",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿Qué es esto? ¿Es comida?",
    //         translation: "這是什麼？是食物嗎？",
    //       },
    //       usage_note: "Esto 指這個東西 (中性)。",
    //       image_file: "what_is_this.png",
    //     },
    //     {
    //       id: "greet-014",
    //       term_zh: "請幫我",
    //       related_terms: [
    //         {
    //           term_target: "Ayúdeme, por favor",
    //           pronunciation: ["/aˈjudeme poɾ faˈβoɾ/"],
    //           specific_note: "正式",
    //         },
    //         {
    //           term_target: "¡Ayuda!",
    //           pronunciation: ["/aˈjuda/"],
    //           specific_note: "救命 (緊急)",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ayúdeme con la maleta.",
    //         translation: "請幫我拿行李。",
    //       },
    //       usage_note: "Ayudar 是「幫助」。",
    //       image_file: "help_me.png",
    //     },
    //     {
    //       id: "greet-015",
    //       term_zh: "你可以再說一次嗎？",
    //       related_terms: [
    //         {
    //           term_target: "¿Puede repetir?",
    //           pronunciation: ["/ˈpwede repeˈtiɾ/"],
    //           specific_note: "正式",
    //         },
    //       ],
    //       example: {
    //         sentence: "No escuché, ¿puede repetir?",
    //         translation: "沒聽到，能再說一次嗎？",
    //       },
    //       usage_note: "Poder (能夠) + Repetir (重複)。",
    //       image_file: "say_again.png",
    //     },
    //     {
    //       id: "greet-016",
    //       term_zh: "你可以講慢一點嗎？",
    //       related_terms: [
    //         {
    //           term_target: "¿Puede hablar más despacio?",
    //           pronunciation: ["/ˈpwede aˈβlaɾ mas desˈpaθjo/"],
    //           specific_note: "正式",
    //         },
    //       ],
    //       example: {
    //         sentence: "Por favor, hable más despacio.",
    //         translation: "拜託講慢一點。",
    //       },
    //       usage_note: "Despacio 意思是「慢」。",
    //       image_file: "speak_slowly.png",
    //     },
    //     {
    //       id: "greet-017",
    //       term_zh: "原來如此",
    //       related_terms: [
    //         {
    //           term_target: "Ya veo",
    //           pronunciation: ["/ya ˈbeo/"],
    //           specific_note: "我看見了(理解)",
    //         },
    //         {
    //           term_target: "Entiendo",
    //           pronunciation: ["/enˈtjendo/"],
    //           specific_note: "我懂了",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ah, ya veo. Gracias.",
    //         translation: "啊，原來如此。謝謝。",
    //       },
    //       usage_note: "表示明白了某件事。",
    //       image_file: "i_see.png",
    //     },
    //     {
    //       id: "greet-018",
    //       term_zh: "早安",
    //       related_terms: [
    //         {
    //           term_target: "Buenos días",
    //           pronunciation: ["/ˈbwenos ˈdias/"],
    //           specific_note: "上午",
    //         },
    //       ],
    //       example: {
    //         sentence: "Buenos días a todos.",
    //         translation: "大家早安。",
    //       },
    //       usage_note: "通常用於午餐前。",
    //       image_file: "good_morning.png",
    //     },
    //     {
    //       id: "greet-019",
    //       term_zh: "晚上好 (晚安)",
    //       related_terms: [
    //         {
    //           term_target: "Buenas noches",
    //           pronunciation: ["/ˈbwenas ˈnotʃes/"],
    //           specific_note: "晚上/睡前通用",
    //         },
    //       ],
    //       example: {
    //         sentence: "Buenas noches, hasta mañana.",
    //         translation: "晚安，明天見。",
    //       },
    //       usage_note: "西班牙文的晚安可指見面或道別。",
    //       image_file: "good_evening.png",
    //     },
    //     {
    //       id: "greet-020",
    //       term_zh: "再見",
    //       related_terms: [
    //         {
    //           term_target: "Adiós",
    //           pronunciation: ["/aˈdjos/"],
    //           specific_note: "標準",
    //         },
    //         {
    //           term_target: "Hasta luego",
    //           pronunciation: ["/ˈasta ˈlweɣo/"],
    //           specific_note: "待會見",
    //         },
    //       ],
    //       example: {
    //         sentence: "Adiós, nos vemos.",
    //         translation: "再見，我們再見。",
    //       },
    //       usage_note: "口語也常說 Chao。",
    //       image_file: "goodbye.png",
    //     },
    //     {
    //       id: "greet-021",
    //       term_zh: "你好嗎",
    //       related_terms: [
    //         {
    //           term_target: "¿Cómo estás?",
    //           pronunciation: ["/ˈkomo esˈtas/"],
    //           specific_note: "非正式 (對Tú)",
    //         },
    //         {
    //           term_target: "¿Cómo está?",
    //           pronunciation: ["/ˈkomo esˈta/"],
    //           specific_note: "正式 (對Usted)",
    //         },
    //       ],
    //       example: {
    //         sentence: "Hola, ¿cómo estás?",
    //         translation: "嗨，你好嗎？",
    //       },
    //       usage_note: "朋友間常用 ¿Qué tal? (最近怎樣)。",
    //       image_file: "how_are_you.png",
    //     },
    //     {
    //       id: "greet-022",
    //       term_zh: "真的嗎",
    //       related_terms: [
    //         {
    //           term_target: "¿En serio?",
    //           pronunciation: ["/en ˈseɾjo/"],
    //           specific_note: "認真的嗎？",
    //         },
    //         {
    //           term_target: "¿De verdad?",
    //           pronunciation: ["/de βeɾˈdad/"],
    //           specific_note: "真的？",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿En serio? ¡No lo sabía!",
    //         translation: "真的嗎？我不知道耶！",
    //       },
    //       usage_note: "表示驚訝或確認。",
    //       image_file: "really.png",
    //     },
    //     {
    //       id: "greet-023",
    //       term_zh: "太棒了",
    //       related_terms: [
    //         {
    //           term_target: "¡Genial!",
    //           pronunciation: ["/xeˈnjal/"],
    //           specific_note: "很棒",
    //         },
    //         {
    //           term_target: "¡Excelente!",
    //           pronunciation: ["/ekseˈlente/"],
    //           specific_note: "優秀",
    //         },
    //       ],
    //       example: {
    //         sentence: "¡Eso es genial!",
    //         translation: "那真是太棒了！",
    //       },
    //       usage_note: "Genial 是非常常用的口語。",
    //       image_file: "awesome.png",
    //     },
    //     {
    //       id: "greet-024",
    //       term_zh: "很高興認識你",
    //       related_terms: [
    //         {
    //           term_target: "Mucho gusto",
    //           pronunciation: ["/ˈmutʃo ˈgusto/"],
    //           specific_note: "通用",
    //         },
    //         {
    //           term_target: "Encantado",
    //           pronunciation: ["/enkanˈtado/"],
    //           specific_note: "男性用",
    //         },
    //       ],
    //       example: {
    //         sentence: "Hola, mucho gusto.",
    //         translation: "你好，很高興認識你。",
    //       },
    //       usage_note: "Encantada (女性用) 表示「我被迷住了(很榮幸)」。",
    //       image_file: "nice_to_meet_you.png",
    //     },
    //     {
    //       id: "greet-025",
    //       term_zh: "真可惜",
    //       related_terms: [
    //         {
    //           term_target: "Qué lástima",
    //           pronunciation: ["/ke ˈlastima/"],
    //           specific_note: "真遺憾",
    //         },
    //         {
    //           term_target: "Qué pena",
    //           pronunciation: ["/ke ˈpena/"],
    //           specific_note: "真可惜",
    //         },
    //       ],
    //       example: {
    //         sentence: "Oh, qué lástima.",
    //         translation: "噢，那真是太可惜了。",
    //       },
    //       usage_note: "對壞消息表示同情。",
    //       image_file: "too_bad.png",
    //     },
    //   ],
    // },
    // {
    //   id: "pronouns",
    //   name: "主詞（代名詞）",
    //   items: [
    //     {
    //       id: "pro-01",
    //       term_zh: "那個/它",
    //       related_terms: [
    //         {
    //           term_target: "eso",
    //           pronunciation: ["/ˈeso/"],
    //           specific_note: "中性/那件事",
    //         },
    //         {
    //           term_target: "ese / esa",
    //           pronunciation: ["/ˈese/", "/ˈesa/"],
    //           specific_note: "陽/陰性",
    //         },
    //       ],
    //       example: { sentence: "¿Qué es eso?", translation: "那是什麼？" },
    //       usage_note: "不知性別或指事情用 Eso。",
    //       image_file: "that.png",
    //     },
    //     {
    //       id: "pro-02",
    //       term_zh: "我",
    //       related_terms: [
    //         { term_target: "yo", pronunciation: ["/jo/"], specific_note: "" },
    //       ],
    //       example: {
    //         sentence: "Yo soy de Taiwán.",
    //         translation: "我來自台灣。",
    //       },
    //       usage_note: "第一人稱。",
    //       image_file: "i.png",
    //     },
    //     {
    //       id: "pro-03",
    //       term_zh: "你",
    //       related_terms: [
    //         {
    //           term_target: "tú",
    //           pronunciation: ["/tu/"],
    //           specific_note: "非正式",
    //         },
    //         {
    //           term_target: "usted",
    //           pronunciation: ["/usˈted/"],
    //           specific_note: "正式/尊稱",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿Tú eres estudiante?",
    //         translation: "你是學生嗎？",
    //       },
    //       usage_note: "陌生人或長輩建議用 Usted。",
    //       image_file: "you.png",
    //     },
    //     {
    //       id: "pro-04",
    //       term_zh: "他",
    //       related_terms: [
    //         { term_target: "él", pronunciation: ["/el/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Él es mi padre.", translation: "他是我爸。" },
    //       usage_note: "注意有重音符號。",
    //       image_file: "he.png",
    //     },
    //     {
    //       id: "pro-05",
    //       term_zh: "他的",
    //       related_terms: [
    //         {
    //           term_target: "su",
    //           pronunciation: ["/su/"],
    //           specific_note: "單數受詞",
    //         },
    //         {
    //           term_target: "sus",
    //           pronunciation: ["/sus/"],
    //           specific_note: "複數受詞",
    //         },
    //       ],
    //       example: { sentence: "Su coche.", translation: "他的車。" },
    //       usage_note: "不管擁有者性別，只看受詞單複數。",
    //       image_file: "his.png",
    //     },
    //     {
    //       id: "pro-06",
    //       term_zh: "我們",
    //       related_terms: [
    //         {
    //           term_target: "nosotros",
    //           pronunciation: ["/noˈsotɾos/"],
    //           specific_note: "陽性/混合",
    //         },
    //         {
    //           term_target: "nosotras",
    //           pronunciation: ["/noˈsotɾas/"],
    //           specific_note: "陰性",
    //         },
    //       ],
    //       example: {
    //         sentence: "Nosotros somos familia.",
    //         translation: "我們是家人。",
    //       },
    //       usage_note: "全女用 Nosotras，有男有女用 Nosotros。",
    //       image_file: "we.png",
    //     },
    //     {
    //       id: "pro-07",
    //       term_zh: "她",
    //       related_terms: [
    //         {
    //           term_target: "ella",
    //           pronunciation: ["/ˈeʎa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ella es bonita.", translation: "她很漂亮。" },
    //       usage_note: "LL發音近似「Y」。",
    //       image_file: "she.png",
    //     },
    //     {
    //       id: "pro-08",
    //       term_zh: "他們",
    //       related_terms: [
    //         {
    //           term_target: "ellos",
    //           pronunciation: ["/ˈeʎos/"],
    //           specific_note: "陽性/混合",
    //         },
    //         {
    //           term_target: "ellas",
    //           pronunciation: ["/ˈeʎas/"],
    //           specific_note: "陰性",
    //         },
    //       ],
    //       example: { sentence: "Ellos comen.", translation: "他們在吃。" },
    //       usage_note: "第三人稱複數。",
    //       image_file: "they.png",
    //     },
    //     {
    //       id: "pro-09",
    //       term_zh: "這個",
    //       related_terms: [
    //         {
    //           term_target: "esto",
    //           pronunciation: ["/ˈesto/"],
    //           specific_note: "中性/這件事",
    //         },
    //         {
    //           term_target: "este / esta",
    //           pronunciation: ["/ˈeste/", "/ˈesta/"],
    //           specific_note: "陽/陰性",
    //         },
    //       ],
    //       example: { sentence: "Esto es mío.", translation: "這是我的。" },
    //       usage_note: "不知物體性別用 Esto。",
    //       image_file: "this.png",
    //     },
    //     {
    //       id: "pro-11",
    //       term_zh: "她的",
    //       related_terms: [
    //         { term_target: "su", pronunciation: ["/su/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Su bolsa.", translation: "她的包包。" },
    //       usage_note: "與「他的」同形。",
    //       image_file: "her.png",
    //     },
    //     {
    //       id: "pro-12",
    //       term_zh: "你的",
    //       related_terms: [
    //         {
    //           term_target: "tu",
    //           pronunciation: ["/tu/"],
    //           specific_note: "非正式",
    //         },
    //         {
    //           term_target: "su",
    //           pronunciation: ["/su/"],
    //           specific_note: "正式(您的)",
    //         },
    //       ],
    //       example: { sentence: "Tu nombre.", translation: "你的名字。" },
    //       usage_note: "Tu 無重音。",
    //       image_file: "your.png",
    //     },
    //     {
    //       id: "pro-13",
    //       term_zh: "他們的",
    //       related_terms: [
    //         {
    //           term_target: "su",
    //           pronunciation: ["/su/"],
    //           specific_note: "單數受詞",
    //         },
    //         {
    //           term_target: "sus",
    //           pronunciation: ["/sus/"],
    //           specific_note: "複數受詞",
    //         },
    //       ],
    //       example: { sentence: "Su casa.", translation: "他們的家。" },
    //       usage_note: "同 His/Her。",
    //       image_file: "their.png",
    //     },
    //     {
    //       id: "pro-14",
    //       term_zh: "我們的",
    //       related_terms: [
    //         {
    //           term_target: "nuestro",
    //           pronunciation: ["/ˈnwestɾo/"],
    //           specific_note: "陽性",
    //         },
    //         {
    //           term_target: "nuestra",
    //           pronunciation: ["/ˈnwestɾa/"],
    //           specific_note: "陰性",
    //         },
    //       ],
    //       example: { sentence: "Nuestro amigo.", translation: "我們的朋友。" },
    //       usage_note: "需隨後面的名詞變性。",
    //       image_file: "our.png",
    //     },
    //     {
    //       id: "pro-15",
    //       term_zh: "這些",
    //       related_terms: [
    //         {
    //           term_target: "estos",
    //           pronunciation: ["/ˈestos/"],
    //           specific_note: "陽性",
    //         },
    //         {
    //           term_target: "estas",
    //           pronunciation: ["/ˈestas/"],
    //           specific_note: "陰性",
    //         },
    //       ],
    //       example: { sentence: "Estos libros.", translation: "這些書。" },
    //       usage_note: "近處複數。",
    //       image_file: "these.png",
    //     },
    //     {
    //       id: "pro-16",
    //       term_zh: "那些",
    //       related_terms: [
    //         {
    //           term_target: "esos",
    //           pronunciation: ["/ˈesos/"],
    //           specific_note: "陽性",
    //         },
    //         {
    //           term_target: "esas",
    //           pronunciation: ["/ˈesas/"],
    //           specific_note: "陰性",
    //         },
    //       ],
    //       example: { sentence: "Esos pájaros.", translation: "那些鳥。" },
    //       usage_note: "遠處複數。",
    //       image_file: "those.png",
    //     },
    //   ],
    // },
    // {
    //   id: "verbs",
    //   name: "動詞",
    //   items: [
    //     {
    //       id: "v-01",
    //       term_zh: "是",
    //       related_terms: [
    //         {
    //           term_target: "ser",
    //           pronunciation: ["/seɾ/"],
    //           specific_note: "本質/身分",
    //         },
    //         {
    //           term_target: "estar",
    //           pronunciation: ["/esˈtaɾ/"],
    //           specific_note: "狀態/位置",
    //         },
    //       ],
    //       example: {
    //         sentence: "Soy estudiante. Estoy feliz.",
    //         translation: "我是學生。我很快樂。",
    //       },
    //       usage_note: "Ser 用於永久屬性，Estar 用於暫時狀態或地點。",
    //       image_file: "be.png",
    //     },
    //     {
    //       id: "v-02",
    //       term_zh: "有（擁有）",
    //       related_terms: [
    //         {
    //           term_target: "tener",
    //           pronunciation: ["/teˈneɾ/"],
    //           specific_note: "擁有",
    //         },
    //         {
    //           term_target: "haber",
    //           pronunciation: ["/aˈβeɾ/"],
    //           specific_note: "存在(Hay)/助動詞",
    //         },
    //       ],
    //       example: {
    //         sentence: "Tengo dinero. Hay un perro.",
    //         translation: "我有錢。有一隻狗。",
    //       },
    //       usage_note: "擁有用 Tener，那裡有...用 Hay。",
    //       image_file: "have.png",
    //     },
    //     {
    //       id: "v-03",
    //       term_zh: "去",
    //       related_terms: [
    //         { term_target: "ir", pronunciation: ["/iɾ/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Voy a casa.", translation: "我要回家。" },
    //       usage_note: "不規則動詞。",
    //       image_file: "go.png",
    //     },
    //     {
    //       id: "v-04",
    //       term_zh: "得到／拿",
    //       related_terms: [
    //         {
    //           term_target: "conseguir",
    //           pronunciation: ["/konseˈɣiɾ/"],
    //           specific_note: "獲得",
    //         },
    //         {
    //           term_target: "obtener",
    //           pronunciation: ["/obteˈneɾ/"],
    //           specific_note: "取得",
    //         },
    //       ],
    //       example: {
    //         sentence: "Conseguir trabajo.",
    //         translation: "找到(得到)工作。",
    //       },
    //       usage_note: "獲得。",
    //       image_file: "get.png",
    //     },
    //     {
    //       id: "v-05",
    //       term_zh: "做",
    //       related_terms: [
    //         {
    //           term_target: "hacer",
    //           pronunciation: ["/aˈθeɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hacer la tarea.", translation: "做作業。" },
    //       usage_note: "H 不發音。",
    //       image_file: "do.png",
    //     },
    //     {
    //       id: "v-06",
    //       term_zh: "說（講）",
    //       related_terms: [
    //         {
    //           term_target: "decir",
    //           pronunciation: ["/deˈθiɾ/"],
    //           specific_note: "說出",
    //         },
    //         {
    //           term_target: "hablar",
    //           pronunciation: ["/aˈβlaɾ/"],
    //           specific_note: "講話/交談",
    //         },
    //       ],
    //       example: { sentence: "Di hola.", translation: "說你好。" },
    //       usage_note: "Hablar 用於語言能力或動作，Decir 用於內容。",
    //       image_file: "say.png",
    //     },
    //     {
    //       id: "v-07",
    //       term_zh: "知道",
    //       related_terms: [
    //         {
    //           term_target: "saber",
    //           pronunciation: ["/saˈβeɾ/"],
    //           specific_note: "知識/技能",
    //         },
    //         {
    //           term_target: "conocer",
    //           pronunciation: ["/konoˈθeɾ/"],
    //           specific_note: "認識人/地方",
    //         },
    //       ],
    //       example: {
    //         sentence: "No sé. Conozco a Juan.",
    //         translation: "我不知道。我認識胡安。",
    //       },
    //       usage_note: "區分知識與熟悉度。",
    //       image_file: "know.png",
    //     },
    //     {
    //       id: "v-08",
    //       term_zh: "想／思考",
    //       related_terms: [
    //         {
    //           term_target: "pensar",
    //           pronunciation: ["/penˈsaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Pienso que sí.", translation: "我想是的。" },
    //       usage_note: "思考。",
    //       image_file: "think.png",
    //     },
    //     {
    //       id: "v-09",
    //       term_zh: "看見",
    //       related_terms: [
    //         { term_target: "ver", pronunciation: ["/beɾ/"], specific_note: "" },
    //       ],
    //       example: {
    //         sentence: "Veo un pájaro.",
    //         translation: "我看見一隻鳥。",
    //       },
    //       usage_note: "看。",
    //       image_file: "see.png",
    //     },
    //     {
    //       id: "v-10",
    //       term_zh: "做出（製造）",
    //       related_terms: [
    //         {
    //           term_target: "hacer",
    //           pronunciation: ["/aˈθeɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hacer café.", translation: "煮咖啡。" },
    //       usage_note: "與「做」同字。",
    //       image_file: "make.png",
    //     },
    //     {
    //       id: "v-11",
    //       term_zh: "來",
    //       related_terms: [
    //         {
    //           term_target: "venir",
    //           pronunciation: ["/beˈniɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ven aquí.", translation: "來這裡。" },
    //       usage_note: "過來。",
    //       image_file: "come.png",
    //     },
    //     {
    //       id: "v-12",
    //       term_zh: "需要",
    //       related_terms: [
    //         {
    //           term_target: "necesitar",
    //           pronunciation: ["/neθesiˈtaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Necesito agua.", translation: "我需要水。" },
    //       usage_note: "需要。",
    //       image_file: "need.png",
    //     },
    //     {
    //       id: "v-13",
    //       term_zh: "使用",
    //       related_terms: [
    //         {
    //           term_target: "usar",
    //           pronunciation: ["/uˈsaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Usar un bolígrafo.",
    //         translation: "用原子筆。",
    //       },
    //       usage_note: "使用。",
    //       image_file: "use.png",
    //     },
    //     {
    //       id: "v-14",
    //       term_zh: "找到",
    //       related_terms: [
    //         {
    //           term_target: "encontrar",
    //           pronunciation: ["/enkonˈtɾaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Encontrar trabajo.", translation: "找工作。" },
    //       usage_note: "發現/找到。",
    //       image_file: "find.png",
    //     },
    //     {
    //       id: "v-15",
    //       term_zh: "給",
    //       related_terms: [
    //         { term_target: "dar", pronunciation: ["/daɾ/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Dame eso.", translation: "給我那個。" },
    //       usage_note: "給予。",
    //       image_file: "give.png",
    //     },
    //     {
    //       id: "v-16",
    //       term_zh: "告訴",
    //       related_terms: [
    //         {
    //           term_target: "decir",
    //           pronunciation: ["/deˈθiɾ/"],
    //           specific_note: "告訴",
    //         },
    //         {
    //           term_target: "contar",
    //           pronunciation: ["/konˈtaɾ/"],
    //           specific_note: "講述(故事)",
    //         },
    //       ],
    //       example: { sentence: "Dime la verdad.", translation: "告訴我真相。" },
    //       usage_note: "告知。",
    //       image_file: "tell.png",
    //     },
    //     {
    //       id: "v-17",
    //       term_zh: "工作",
    //       related_terms: [
    //         {
    //           term_target: "trabajar",
    //           pronunciation: ["/tɾaβaˈxaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Trabajo aquí.", translation: "我在這工作。" },
    //       usage_note: "勞動。",
    //       image_file: "work.png",
    //     },
    //     {
    //       id: "v-18",
    //       term_zh: "喜歡",
    //       related_terms: [
    //         {
    //           term_target: "gustar",
    //           pronunciation: ["/gusˈtaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Me gusta.", translation: "我喜歡。" },
    //       usage_note: "用法特殊：Me gusta (單數), Me gustan (複數)。",
    //       image_file: "like.png",
    //     },
    //     {
    //       id: "v-19",
    //       term_zh: "起床",
    //       related_terms: [
    //         {
    //           term_target: "levantarse",
    //           pronunciation: ["/leβanˈtaɾse/"],
    //           specific_note: "起床(起身)",
    //         },
    //         {
    //           term_target: "despertarse",
    //           pronunciation: ["/despeɾˈtaɾse/"],
    //           specific_note: "醒來",
    //         },
    //       ],
    //       example: {
    //         sentence: "Me levanto a las 7.",
    //         translation: "我七點起床。",
    //       },
    //       usage_note: "反身動詞。",
    //       image_file: "wake_up.png",
    //     },
    //     {
    //       id: "v-20",
    //       term_zh: "說話",
    //       related_terms: [
    //         {
    //           term_target: "hablar",
    //           pronunciation: ["/aˈβlaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hablar español.", translation: "說西班牙文。" },
    //       usage_note: "講語言/說話。",
    //       image_file: "speak.png",
    //     },
    //     {
    //       id: "v-21",
    //       term_zh: "聽見",
    //       related_terms: [
    //         {
    //           term_target: "oír",
    //           pronunciation: ["/oˈiɾ/"],
    //           specific_note: "聽見",
    //         },
    //         {
    //           term_target: "escuchar",
    //           pronunciation: ["/eskuˈtʃaɾ/"],
    //           specific_note: "聆聽",
    //         },
    //       ],
    //       example: { sentence: "¿Me oyes?", translation: "聽得到我嗎？" },
    //       usage_note: "Oír(能力), Escuchar(專注)。",
    //       image_file: "hear.png",
    //     },
    //     {
    //       id: "v-22",
    //       term_zh: "寫",
    //       related_terms: [
    //         {
    //           term_target: "escribir",
    //           pronunciation: ["/eskɾiˈβiɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Escribir un nombre.", translation: "寫名字。" },
    //       usage_note: "書寫。",
    //       image_file: "write.png",
    //     },
    //     {
    //       id: "v-23",
    //       term_zh: "閱讀",
    //       related_terms: [
    //         {
    //           term_target: "leer",
    //           pronunciation: ["/leˈeɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Leer un libro.", translation: "看書。" },
    //       usage_note: "閱讀。",
    //       image_file: "read.png",
    //     },
    //     {
    //       id: "v-24",
    //       term_zh: "等待",
    //       related_terms: [
    //         {
    //           term_target: "esperar",
    //           pronunciation: ["/espeˈɾaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Espérame.", translation: "等我。" },
    //       usage_note: "也有「希望」的意思。",
    //       image_file: "wait.png",
    //     },
    //     {
    //       id: "v-25",
    //       term_zh: "嘗試",
    //       related_terms: [
    //         {
    //           term_target: "probar",
    //           pronunciation: ["/pɾoˈβaɾ/"],
    //           specific_note: "試吃/試用",
    //         },
    //         {
    //           term_target: "intentar",
    //           pronunciation: ["/intenˈtaɾ/"],
    //           specific_note: "企圖",
    //         },
    //       ],
    //       example: {
    //         sentence: "Prueba esto.",
    //         translation: "試試這個(食物)。",
    //       },
    //       usage_note: "Probar(體驗), Intentar(嘗試做)。",
    //       image_file: "try.png",
    //     },
    //     {
    //       id: "v-26",
    //       term_zh: "付錢",
    //       related_terms: [
    //         {
    //           term_target: "pagar",
    //           pronunciation: ["/paˈɣaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Pagar la cuenta.", translation: "付帳單。" },
    //       usage_note: "支付。",
    //       image_file: "pay.png",
    //     },
    //     {
    //       id: "v-27",
    //       term_zh: "選擇",
    //       related_terms: [
    //         {
    //           term_target: "elegir",
    //           pronunciation: ["/eleˈxiɾ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "escoger",
    //           pronunciation: ["/eskoˈxeɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Elige uno.", translation: "選一個。" },
    //       usage_note: "兩者通用。",
    //       image_file: "choose.png",
    //     },
    //     {
    //       id: "v-28",
    //       term_zh: "進入",
    //       related_terms: [
    //         {
    //           term_target: "entrar",
    //           pronunciation: ["/enˈtɾaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Entrar en la casa.", translation: "進屋。" },
    //       usage_note: "進入。",
    //       image_file: "enter.png",
    //     },
    //     {
    //       id: "v-29",
    //       term_zh: "住",
    //       related_terms: [
    //         {
    //           term_target: "vivir",
    //           pronunciation: ["/biˈβiɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Vivo en Taipéi.", translation: "我住台北。" },
    //       usage_note: "居住/生活。",
    //       image_file: "live.png",
    //     },
    //     {
    //       id: "v-30",
    //       term_zh: "到達",
    //       related_terms: [
    //         {
    //           term_target: "llegar",
    //           pronunciation: ["/ʎeˈɣaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Llegar a tiempo.", translation: "準時到達。" },
    //       usage_note: "抵達。",
    //       image_file: "arrive.png",
    //     },
    //     {
    //       id: "v-31",
    //       term_zh: "走路",
    //       related_terms: [
    //         {
    //           term_target: "caminar",
    //           pronunciation: ["/kamiˈnaɾ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "andar",
    //           pronunciation: ["/anˈdaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Caminar a casa.", translation: "走路回家。" },
    //       usage_note: "步行。",
    //       image_file: "walk.png",
    //     },
    //     {
    //       id: "v-32",
    //       term_zh: "打開",
    //       related_terms: [
    //         {
    //           term_target: "abrir",
    //           pronunciation: ["/aˈβɾiɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Abrir la puerta.", translation: "開門。" },
    //       usage_note: "開啟。",
    //       image_file: "open.png",
    //     },
    //     {
    //       id: "v-33",
    //       term_zh: "關閉",
    //       related_terms: [
    //         {
    //           term_target: "cerrar",
    //           pronunciation: ["/θeˈraɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Cerrar la ventana.", translation: "關窗。" },
    //       usage_note: "關上。",
    //       image_file: "close.png",
    //     },
    //     {
    //       id: "v-34",
    //       term_zh: "幫助",
    //       related_terms: [
    //         {
    //           term_target: "ayudar",
    //           pronunciation: ["/aʝuˈdaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ayúdame.", translation: "幫我。" },
    //       usage_note: "協助。",
    //       image_file: "help.png",
    //     },
    //     {
    //       id: "v-35",
    //       term_zh: "帶來",
    //       related_terms: [
    //         {
    //           term_target: "traer",
    //           pronunciation: ["/tɾaˈeɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Trae agua.", translation: "帶水來。" },
    //       usage_note: "攜帶至此。",
    //       image_file: "bring.png",
    //     },
    //     {
    //       id: "v-36",
    //       term_zh: "需要",
    //       related_terms: [
    //         {
    //           term_target: "necesitar",
    //           pronunciation: ["/neθesiˈtaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Necesito agua.", translation: "我需要水。" },
    //       usage_note: "需要。",
    //       image_file: "need.png",
    //     },
    //     {
    //       id: "v-37",
    //       term_zh: "使用",
    //       related_terms: [
    //         {
    //           term_target: "usar",
    //           pronunciation: ["/uˈsaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Usar un bolígrafo.",
    //         translation: "用原子筆。",
    //       },
    //       usage_note: "使用。",
    //       image_file: "use.png",
    //     },
    //     {
    //       id: "v-38",
    //       term_zh: "變成",
    //       related_terms: [
    //         {
    //           term_target: "convertirse en",
    //           pronunciation: ["/kombeɾˈtiɾse en/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Se convirtió en rey.",
    //         translation: "他變成了國王。",
    //       },
    //       usage_note: "變化。",
    //       image_file: "become.png",
    //     },
    //     {
    //       id: "v-39",
    //       term_zh: "開始",
    //       related_terms: [
    //         {
    //           term_target: "empezar",
    //           pronunciation: ["/empeˈθaɾ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "comenzar",
    //           pronunciation: ["/komenˈθaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Empezar ahora.", translation: "現在開始。" },
    //       usage_note: "兩者通用。",
    //       image_file: "start.png",
    //     },
    //     {
    //       id: "v-40",
    //       term_zh: "開始",
    //       related_terms: [
    //         {
    //           term_target: "comenzar",
    //           pronunciation: ["/komenˈθaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Comenzar el juego.",
    //         translation: "遊戲開始。",
    //       },
    //       usage_note: "同上。",
    //       image_file: "begin.png",
    //     },
    //     {
    //       id: "v-41",
    //       term_zh: "結束",
    //       related_terms: [
    //         {
    //           term_target: "terminar",
    //           pronunciation: ["/teɾmiˈnaɾ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "acabar",
    //           pronunciation: ["/akaˈβaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Terminar el trabajo.",
    //         translation: "工作結束。",
    //       },
    //       usage_note: "完成。",
    //       image_file: "finish.png",
    //     },
    //     {
    //       id: "v-42",
    //       term_zh: "停止",
    //       related_terms: [
    //         {
    //           term_target: "parar",
    //           pronunciation: ["/paˈɾaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Para aquí.", translation: "停在這裡。" },
    //       usage_note: "停止。",
    //       image_file: "stop.png",
    //     },
    //     {
    //       id: "v-43",
    //       term_zh: "記住",
    //       related_terms: [
    //         {
    //           term_target: "recordar",
    //           pronunciation: ["/rekoɾˈdaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Recuérdame.", translation: "記得我。" },
    //       usage_note: "記憶。",
    //       image_file: "remember.png",
    //     },
    //     {
    //       id: "v-44",
    //       term_zh: "談話",
    //       related_terms: [
    //         {
    //           term_target: "hablar",
    //           pronunciation: ["/aˈβlaɾ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "conversar",
    //           pronunciation: ["/kombeɾˈsaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hablar contigo.", translation: "跟你談話。" },
    //       usage_note: "交談。",
    //       image_file: "talk.png",
    //     },
    //     {
    //       id: "v-45",
    //       term_zh: "見面",
    //       related_terms: [
    //         {
    //           term_target: "encontrarse",
    //           pronunciation: ["/enkonˈtɾaɾse/"],
    //           specific_note: "偶遇/碰面",
    //         },
    //         {
    //           term_target: "conocer",
    //           pronunciation: ["/konoˈθeɾ/"],
    //           specific_note: "初次見面",
    //         },
    //       ],
    //       example: {
    //         sentence: "Encontrarse con amigos.",
    //         translation: "跟朋友碰面。",
    //       },
    //       usage_note: "Conocer 是認識。",
    //       image_file: "meet.png",
    //     },
    //     {
    //       id: "v-46",
    //       term_zh: "乘坐（工具）",
    //       related_terms: [
    //         {
    //           term_target: "tomar",
    //           pronunciation: ["/toˈmaɾ/"],
    //           specific_note: "通用",
    //         },
    //         {
    //           term_target: "coger",
    //           pronunciation: ["/koˈxeɾ/"],
    //           specific_note: "西班牙用(拉美慎用)",
    //         },
    //       ],
    //       example: { sentence: "Tomar un autobús.", translation: "搭公車。" },
    //       usage_note: "Coger 在拉美有不雅含義。",
    //       image_file: "take.png",
    //     },
    //     {
    //       id: "v-47",
    //       term_zh: "放",
    //       related_terms: [
    //         {
    //           term_target: "poner",
    //           pronunciation: ["/poˈneɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ponlo aquí.", translation: "放這裡。" },
    //       usage_note: "放置。",
    //       image_file: "put.png",
    //     },
    //     {
    //       id: "v-48",
    //       term_zh: "吃",
    //       related_terms: [
    //         {
    //           term_target: "comer",
    //           pronunciation: ["/koˈmeɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Comer algo.", translation: "吃點東西。" },
    //       usage_note: "進食。",
    //       image_file: "eat.png",
    //     },
    //     {
    //       id: "v-49",
    //       term_zh: "睡覺",
    //       related_terms: [
    //         {
    //           term_target: "dormir",
    //           pronunciation: ["/doɾˈmiɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Me voy a dormir.",
    //         translation: "我要去睡覺了。",
    //       },
    //       usage_note: "睡眠。",
    //       image_file: "sleep.png",
    //     },
    //     {
    //       id: "v-50",
    //       term_zh: "寄送",
    //       related_terms: [
    //         {
    //           term_target: "enviar",
    //           pronunciation: ["/emˈbjaɾ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "mandar",
    //           pronunciation: ["/manˈdaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Enviar un correo.", translation: "寄信。" },
    //       usage_note: "傳送。",
    //       image_file: "send.png",
    //     },
    //     {
    //       id: "v-51",
    //       term_zh: "開車",
    //       related_terms: [
    //         {
    //           term_target: "conducir",
    //           pronunciation: ["/konduˈθiɾ/"],
    //           specific_note: "西班牙",
    //         },
    //         {
    //           term_target: "manejar",
    //           pronunciation: ["/maneˈxaɾ/"],
    //           specific_note: "拉美",
    //         },
    //       ],
    //       example: { sentence: "Conducir un coche.", translation: "開車。" },
    //       usage_note: "駕駛。",
    //       image_file: "drive.png",
    //     },
    //     {
    //       id: "v-52",
    //       term_zh: "讀書",
    //       related_terms: [
    //         {
    //           term_target: "estudiar",
    //           pronunciation: ["/estuˈdjaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Estudiar español.",
    //         translation: "讀西班牙文。",
    //       },
    //       usage_note: "學習。",
    //       image_file: "study.png",
    //     },
    //     {
    //       id: "v-53",
    //       term_zh: "回去",
    //       related_terms: [
    //         {
    //           term_target: "volver",
    //           pronunciation: ["/bolˈbeɾ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "regresar",
    //           pronunciation: ["/reɣɾeˈsaɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Volver a casa.", translation: "回家。" },
    //       usage_note: "歸返。",
    //       image_file: "go_back.png",
    //     },
    //   ],
    // },
    // {
    //   id: "adjectives",
    //   name: "形容詞",
    //   items: [
    //     {
    //       id: "adj-01",
    //       term_zh: "好的",
    //       related_terms: [
    //         {
    //           term_target: "bueno/a",
    //           pronunciation: ["/ˈbweno/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Buen trabajo.", translation: "做得好。" },
    //       usage_note: "陽性單數名詞前用 Buen。",
    //       image_file: "good.png",
    //     },
    //     {
    //       id: "adj-02",
    //       term_zh: "壞的",
    //       related_terms: [
    //         {
    //           term_target: "malo/a",
    //           pronunciation: ["/ˈmalo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Mal día.", translation: "壞的一天。" },
    //       usage_note: "陽性單數名詞前用 Mal。",
    //       image_file: "bad.png",
    //     },
    //     {
    //       id: "adj-03",
    //       term_zh: "新的",
    //       related_terms: [
    //         {
    //           term_target: "nuevo/a",
    //           pronunciation: ["/ˈnweβo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Teléfono nuevo.", translation: "新手機。" },
    //       usage_note: "全新。",
    //       image_file: "new.png",
    //     },
    //     {
    //       id: "adj-04",
    //       term_zh: "第一天／第一的",
    //       related_terms: [
    //         {
    //           term_target: "primero/a",
    //           pronunciation: ["/pɾiˈmeɾo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Primera vez.", translation: "第一次。" },
    //       usage_note: "陽性單數名詞前用 Primer。",
    //       image_file: "first.png",
    //     },
    //     {
    //       id: "adj-05",
    //       term_zh: "上一個",
    //       related_terms: [
    //         {
    //           term_target: "pasado/a",
    //           pronunciation: ["/paˈsado/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "anterior",
    //           pronunciation: ["/anteˈɾjoɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "La semana pasada.", translation: "上週。" },
    //       usage_note: "過去的。",
    //       image_file: "last.png",
    //     },
    //     {
    //       id: "adj-06",
    //       term_zh: "下一個",
    //       related_terms: [
    //         {
    //           term_target: "próximo/a",
    //           pronunciation: ["/ˈpɾoksimo/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "siguiente",
    //           pronunciation: ["/siˈɣjente/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "La próxima estación.",
    //         translation: "下一站。",
    //       },
    //       usage_note: "接下來。",
    //       image_file: "next.png",
    //     },
    //     {
    //       id: "adj-07",
    //       term_zh: "長的",
    //       related_terms: [
    //         {
    //           term_target: "largo/a",
    //           pronunciation: ["/ˈlaɾɣo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Pelo largo.", translation: "長髮。" },
    //       usage_note: "長度。",
    //       image_file: "long.png",
    //     },
    //     {
    //       id: "adj-08",
    //       term_zh: "大的",
    //       related_terms: [
    //         {
    //           term_target: "grande",
    //           pronunciation: ["/ˈgɾande/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Casa grande.", translation: "大房子。" },
    //       usage_note: "單數名詞前用 Gran。",
    //       image_file: "big.png",
    //     },
    //     {
    //       id: "adj-09",
    //       term_zh: "小的",
    //       related_terms: [
    //         {
    //           term_target: "pequeño/a",
    //           pronunciation: ["/peˈkeɲo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Gato pequeño.", translation: "小貓。" },
    //       usage_note: "體積小。",
    //       image_file: "small.png",
    //     },
    //     {
    //       id: "adj-10",
    //       term_zh: "多的",
    //       related_terms: [
    //         {
    //           term_target: "mucho/a",
    //           pronunciation: ["/ˈmutʃo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Mucha gente.", translation: "很多人。" },
    //       usage_note: "數量多。",
    //       image_file: "many.png",
    //     },
    //     {
    //       id: "adj-11",
    //       term_zh: "高的",
    //       related_terms: [
    //         {
    //           term_target: "alto/a",
    //           pronunciation: ["/ˈalto/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Edificio alto.", translation: "高樓。" },
    //       usage_note: "高度。",
    //       image_file: "tall.png",
    //     },
    //     {
    //       id: "adj-12",
    //       term_zh: "年輕的",
    //       related_terms: [
    //         {
    //           term_target: "joven",
    //           pronunciation: ["/ˈxoβen/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hombre joven.", translation: "年輕人。" },
    //       usage_note: "年紀小。",
    //       image_file: "young.png",
    //     },
    //     {
    //       id: "adj-13",
    //       term_zh: "老的",
    //       related_terms: [
    //         {
    //           term_target: "viejo/a",
    //           pronunciation: ["/ˈbjexo/"],
    //           specific_note: "物",
    //         },
    //         {
    //           term_target: "mayor",
    //           pronunciation: ["/maˈʝoɾ/"],
    //           specific_note: "人(較禮貌)",
    //         },
    //       ],
    //       example: { sentence: "Libro viejo.", translation: "舊書。" },
    //       usage_note: "形容人直接用 Viejo 有時不禮貌。",
    //       image_file: "old.png",
    //     },
    //     {
    //       id: "adj-14",
    //       term_zh: "近的",
    //       related_terms: [
    //         {
    //           term_target: "cerca",
    //           pronunciation: ["/ˈθeɾka/"],
    //           specific_note: "副詞用法",
    //         },
    //         {
    //           term_target: "cercano/a",
    //           pronunciation: ["/θeɾˈkano/"],
    //           specific_note: "形容詞",
    //         },
    //       ],
    //       example: { sentence: "Está cerca.", translation: "很近。" },
    //       usage_note: "距離近。",
    //       image_file: "near.png",
    //     },
    //     {
    //       id: "adj-15",
    //       term_zh: "遠的",
    //       related_terms: [
    //         {
    //           term_target: "lejos",
    //           pronunciation: ["/ˈlexos/"],
    //           specific_note: "副詞用法",
    //         },
    //         {
    //           term_target: "lejano/a",
    //           pronunciation: ["/leˈxano/"],
    //           specific_note: "形容詞",
    //         },
    //       ],
    //       example: { sentence: "Está lejos.", translation: "很遠。" },
    //       usage_note: "距離遠。",
    //       image_file: "far.png",
    //     },
    //     {
    //       id: "adj-16",
    //       term_zh: "快的",
    //       related_terms: [
    //         {
    //           term_target: "rápido/a",
    //           pronunciation: ["/ˈrapiðo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Coche rápido.", translation: "快車。" },
    //       usage_note: "速度快。",
    //       image_file: "fast.png",
    //     },
    //     {
    //       id: "adj-17",
    //       term_zh: "慢的",
    //       related_terms: [
    //         {
    //           term_target: "lento/a",
    //           pronunciation: ["/ˈlento/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Internet lento.", translation: "網路慢。" },
    //       usage_note: "速度慢。",
    //       image_file: "slow.png",
    //     },
    //     {
    //       id: "adj-18",
    //       term_zh: "熱的",
    //       related_terms: [
    //         {
    //           term_target: "caliente",
    //           pronunciation: ["/kaˈljente/"],
    //           specific_note: "物品",
    //         },
    //         {
    //           term_target: "caluroso/a",
    //           pronunciation: ["/kaluˈɾoso/"],
    //           specific_note: "天氣",
    //         },
    //       ],
    //       example: { sentence: "Agua caliente.", translation: "熱水。" },
    //       usage_note: "天氣熱也可用 Hace calor。",
    //       image_file: "hot.png",
    //     },
    //     {
    //       id: "adj-19",
    //       term_zh: "冷的",
    //       related_terms: [
    //         {
    //           term_target: "frío/a",
    //           pronunciation: ["/ˈfɾio/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Bebida fría.", translation: "冷飲。" },
    //       usage_note: "低溫。",
    //       image_file: "cold.png",
    //     },
    //     {
    //       id: "adj-20",
    //       term_zh: "乾淨的",
    //       related_terms: [
    //         {
    //           term_target: "limpio/a",
    //           pronunciation: ["/ˈlimpjo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Habitación limpia.",
    //         translation: "乾淨的房間。",
    //       },
    //       usage_note: "無髒汙。",
    //       image_file: "clean.png",
    //     },
    //     {
    //       id: "adj-21",
    //       term_zh: "髒的",
    //       related_terms: [
    //         {
    //           term_target: "sucio/a",
    //           pronunciation: ["/ˈsuθjo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Manos sucias.", translation: "髒手。" },
    //       usage_note: "不乾淨。",
    //       image_file: "dirty.png",
    //     },
    //     {
    //       id: "adj-22",
    //       term_zh: "簡單的",
    //       related_terms: [
    //         {
    //           term_target: "fácil",
    //           pronunciation: ["/ˈfaθil/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Es fácil.", translation: "這很簡單。" },
    //       usage_note: "容易。",
    //       image_file: "easy.png",
    //     },
    //     {
    //       id: "adj-23",
    //       term_zh: "困難的",
    //       related_terms: [
    //         {
    //           term_target: "difícil",
    //           pronunciation: ["/diˈfiθil/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Es difícil.", translation: "很難。" },
    //       usage_note: "難。",
    //       image_file: "difficult.png",
    //     },
    //     {
    //       id: "adj-24",
    //       term_zh: "正確的",
    //       related_terms: [
    //         {
    //           term_target: "correcto/a",
    //           pronunciation: ["/koˈrekto/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Respuesta correcta.",
    //         translation: "正確答案。",
    //       },
    //       usage_note: "對的。",
    //       image_file: "correct.png",
    //     },
    //     {
    //       id: "adj-25",
    //       term_zh: "錯誤的",
    //       related_terms: [
    //         {
    //           term_target: "incorrecto/a",
    //           pronunciation: ["/inkoˈrekto/"],
    //           specific_note: "形容詞",
    //         },
    //         {
    //           term_target: "error",
    //           pronunciation: ["/eˈroɾ/"],
    //           specific_note: "名詞",
    //         },
    //       ],
    //       example: { sentence: "Es incorrecto.", translation: "是錯的。" },
    //       usage_note: "不對。",
    //       image_file: "wrong.png",
    //     },
    //     {
    //       id: "adj-26",
    //       term_zh: "重要的",
    //       related_terms: [
    //         {
    //           term_target: "importante",
    //           pronunciation: ["/impoɾˈtante/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Reunión importante.",
    //         translation: "重要會議。",
    //       },
    //       usage_note: "關鍵。",
    //       image_file: "important.png",
    //     },
    //     {
    //       id: "adj-27",
    //       term_zh: "不同的",
    //       related_terms: [
    //         {
    //           term_target: "diferente",
    //           pronunciation: ["/difeˈɾente/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Color diferente.", translation: "不同顏色。" },
    //       usage_note: "差異。",
    //       image_file: "different.png",
    //     },
    //     {
    //       id: "adj-28",
    //       term_zh: "真的／真實的",
    //       related_terms: [
    //         {
    //           term_target: "real",
    //           pronunciation: ["/reˈal/"],
    //           specific_note: "真實",
    //         },
    //         {
    //           term_target: "verdadero/a",
    //           pronunciation: ["/beɾdaˈdeɾo/"],
    //           specific_note: "真的",
    //         },
    //       ],
    //       example: { sentence: "Amor verdadero.", translation: "真愛。" },
    //       usage_note: "真實。",
    //       image_file: "real.png",
    //     },
    //     {
    //       id: "adj-29",
    //       term_zh: "有趣的",
    //       related_terms: [
    //         {
    //           term_target: "interesante",
    //           pronunciation: ["/inteɾeˈsante/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Libro interesante.",
    //         translation: "有趣的書。",
    //       },
    //       usage_note: "有意思。",
    //       image_file: "interesting.png",
    //     },
    //     {
    //       id: "adj-30",
    //       term_zh: "美麗的",
    //       related_terms: [
    //         {
    //           term_target: "hermoso/a",
    //           pronunciation: ["/eɾˈmoso/"],
    //           specific_note: "美麗",
    //         },
    //         {
    //           term_target: "bonito/a",
    //           pronunciation: ["/boˈnito/"],
    //           specific_note: "漂亮",
    //         },
    //       ],
    //       example: { sentence: "Flor hermosa.", translation: "美麗的花。" },
    //       usage_note: "形容人或景物。",
    //       image_file: "beautiful.png",
    //     },
    //     {
    //       id: "adj-31",
    //       term_zh: "便宜的",
    //       related_terms: [
    //         {
    //           term_target: "barato/a",
    //           pronunciation: ["/baˈɾato/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Es barato.", translation: "很便宜。" },
    //       usage_note: "價格低。",
    //       image_file: "cheap.png",
    //     },
    //     {
    //       id: "adj-32",
    //       term_zh: "昂貴的",
    //       related_terms: [
    //         {
    //           term_target: "caro/a",
    //           pronunciation: ["/ˈkaɾo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Demasiado caro.", translation: "太貴了。" },
    //       usage_note: "價格高。",
    //       image_file: "expensive.png",
    //     },
    //     {
    //       id: "adj-33",
    //       term_zh: "飢餓的",
    //       related_terms: [
    //         {
    //           term_target: "hambriento/a",
    //           pronunciation: ["/amˈbɾjento/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Tengo hambre.",
    //         translation: "我餓了(我有飢餓)。",
    //       },
    //       usage_note: "西文常用 Tener hambre (有飢餓)。",
    //       image_file: "hungry.png",
    //     },
    //     {
    //       id: "adj-34",
    //       term_zh: "疲累的",
    //       related_terms: [
    //         {
    //           term_target: "cansado/a",
    //           pronunciation: ["/kanˈsado/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Estoy cansado.", translation: "我累了。" },
    //       usage_note: "狀態。",
    //       image_file: "tired.png",
    //     },
    //     {
    //       id: "adj-35",
    //       term_zh: "忙碌的",
    //       related_terms: [
    //         {
    //           term_target: "ocupado/a",
    //           pronunciation: ["/okuˈpado/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Estoy ocupado.", translation: "我很忙。" },
    //       usage_note: "沒空。",
    //       image_file: "busy.png",
    //     },
    //     {
    //       id: "adj-36",
    //       term_zh: "高興的",
    //       related_terms: [
    //         {
    //           term_target: "feliz",
    //           pronunciation: ["/feˈliθ/"],
    //           specific_note: "幸福/快樂",
    //         },
    //         {
    //           term_target: "contento/a",
    //           pronunciation: ["/konˈtento/"],
    //           specific_note: "高興/滿意",
    //         },
    //       ],
    //       example: { sentence: "Estoy feliz.", translation: "我很快樂。" },
    //       usage_note: "心情。",
    //       image_file: "happy.png",
    //     },
    //     {
    //       id: "adj-37",
    //       term_zh: "悲傷的",
    //       related_terms: [
    //         {
    //           term_target: "triste",
    //           pronunciation: ["/ˈtɾiste/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Historia triste.",
    //         translation: "悲傷的故事。",
    //       },
    //       usage_note: "難過。",
    //       image_file: "sad.png",
    //     },
    //     {
    //       id: "adj-38",
    //       term_zh: "相似的",
    //       related_terms: [
    //         {
    //           term_target: "similar",
    //           pronunciation: ["/simiˈlaɾ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "parecido/a",
    //           pronunciation: ["/paɾeˈθiðo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Son similares.", translation: "他們很像。" },
    //       usage_note: "類似。",
    //       image_file: "similar.png",
    //     },
    //     {
    //       id: "adj-39",
    //       term_zh: "有名的",
    //       related_terms: [
    //         {
    //           term_target: "famoso/a",
    //           pronunciation: ["/faˈmoso/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Actor famoso.", translation: "知名演員。" },
    //       usage_note: "知名。",
    //       image_file: "famous.png",
    //     },
    //     {
    //       id: "adj-40",
    //       term_zh: "外國的",
    //       related_terms: [
    //         {
    //           term_target: "extranjero/a",
    //           pronunciation: ["/extɾaŋˈxeɾo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "País extranjero.", translation: "外國。" },
    //       usage_note: "國外。",
    //       image_file: "foreign.png",
    //     },
    //     {
    //       id: "adj-41",
    //       term_zh: "聰明的",
    //       related_terms: [
    //         {
    //           term_target: "inteligente",
    //           pronunciation: ["/inteliˈxente/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Chico inteligente.",
    //         translation: "聰明的男孩。",
    //       },
    //       usage_note: "腦袋好。",
    //       image_file: "intelligent.png",
    //     },
    //     {
    //       id: "adj-42",
    //       term_zh: "危險的",
    //       related_terms: [
    //         {
    //           term_target: "peligroso/a",
    //           pronunciation: ["/peliˈɣɾoso/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Es peligroso.", translation: "這很危險。" },
    //       usage_note: "警示。",
    //       image_file: "dangerous.png",
    //     },
    //     {
    //       id: "adj-43",
    //       term_zh: "仁慈的",
    //       related_terms: [
    //         {
    //           term_target: "amable",
    //           pronunciation: ["/aˈmaβle/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Persona amable.", translation: "親切的人。" },
    //       usage_note: "親切/友善。",
    //       image_file: "kind.png",
    //     },
    //     {
    //       id: "adj-44",
    //       term_zh: "所有的／每一個",
    //       related_terms: [
    //         {
    //           term_target: "todo/a",
    //           pronunciation: ["/ˈtodo/"],
    //           specific_note: "全部",
    //         },
    //         {
    //           term_target: "cada",
    //           pronunciation: ["/ˈkaða/"],
    //           specific_note: "每一個",
    //         },
    //       ],
    //       example: {
    //         sentence: "Todos los días.",
    //         translation: "每一天(所有日子)。",
    //       },
    //       usage_note: "全部。",
    //       image_file: "every.png",
    //     },
    //     {
    //       id: "adj-45",
    //       term_zh: "喜愛的",
    //       related_terms: [
    //         {
    //           term_target: "favorito/a",
    //           pronunciation: ["/faβoˈɾito/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Comida favorita.",
    //         translation: "最愛的食物。",
    //       },
    //       usage_note: "中意。",
    //       image_file: "favorite.png",
    //     },
    //     {
    //       id: "adj-46",
    //       term_zh: "美味的",
    //       related_terms: [
    //         {
    //           term_target: "delicioso/a",
    //           pronunciation: ["/deliˈθjoso/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "rico/a",
    //           pronunciation: ["/ˈriko/"],
    //           specific_note: "口語/富有",
    //         },
    //       ],
    //       example: { sentence: "Comida rica.", translation: "好吃的食物。" },
    //       usage_note: "好吃。",
    //       image_file: "delicious.png",
    //     },
    //   ],
    // },
    // {
    //   id: "nouns",
    //   name: "名詞",
    //   items: [
    //     {
    //       id: "n-01",
    //       term_zh: "時間",
    //       related_terms: [
    //         {
    //           term_target: "tiempo",
    //           pronunciation: ["/ˈtjempo/"],
    //           specific_note: "長度/天氣",
    //         },
    //         {
    //           term_target: "hora",
    //           pronunciation: ["/ˈoɾa/"],
    //           specific_note: "時刻",
    //         },
    //       ],
    //       example: { sentence: "¿Qué hora es?", translation: "現在幾點？" },
    //       usage_note: "時刻/時間。",
    //       image_file: "time.png",
    //     },
    //     {
    //       id: "n-02",
    //       term_zh: "人們",
    //       related_terms: [
    //         {
    //           term_target: "gente",
    //           pronunciation: ["/ˈxente/"],
    //           specific_note: "集合名詞",
    //         },
    //         {
    //           term_target: "personas",
    //           pronunciation: ["/peɾˈsonas/"],
    //           specific_note: "複數",
    //         },
    //       ],
    //       example: { sentence: "Mucha gente.", translation: "很多人。" },
    //       usage_note: "Gente 是單數名詞但表複數意。",
    //       image_file: "people.png",
    //     },
    //     {
    //       id: "n-03",
    //       term_zh: "金錢",
    //       related_terms: [
    //         {
    //           term_target: "dinero",
    //           pronunciation: ["/diˈneɾo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "No tengo dinero.", translation: "沒錢。" },
    //       usage_note: "不可數。",
    //       image_file: "money.png",
    //     },
    //     {
    //       id: "n-04",
    //       term_zh: "孩子",
    //       related_terms: [
    //         {
    //           term_target: "niño/a",
    //           pronunciation: ["/ˈniɲo/"],
    //           specific_note: "男孩/女孩",
    //         },
    //         {
    //           term_target: "hijo/a",
    //           pronunciation: ["/ˈixo/"],
    //           specific_note: "兒子/女兒",
    //         },
    //       ],
    //       example: { sentence: "Niño pequeño.", translation: "小孩。" },
    //       usage_note: "兒童。",
    //       image_file: "child.png",
    //     },
    //     {
    //       id: "n-05",
    //       term_zh: "水",
    //       related_terms: [
    //         {
    //           term_target: "agua",
    //           pronunciation: ["/ˈaɣwa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Beber agua.", translation: "喝水。" },
    //       usage_note: "陰性名詞，但單數前用 El agua。",
    //       image_file: "water.png",
    //     },
    //     {
    //       id: "n-06",
    //       term_zh: "食物",
    //       related_terms: [
    //         {
    //           term_target: "comida",
    //           pronunciation: ["/koˈmiða/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Comida rica.", translation: "好吃的食物。" },
    //       usage_note: "吃的東西。",
    //       image_file: "food.png",
    //     },
    //     {
    //       id: "n-07",
    //       term_zh: "朋友",
    //       related_terms: [
    //         {
    //           term_target: "amigo/a",
    //           pronunciation: ["/aˈmiɣo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Mi amigo.", translation: "我朋友。" },
    //       usage_note: "友人。",
    //       image_file: "friend.png",
    //     },
    //     {
    //       id: "n-08",
    //       term_zh: "家庭",
    //       related_terms: [
    //         {
    //           term_target: "familia",
    //           pronunciation: ["/faˈmilja/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Familia grande.", translation: "大家庭。" },
    //       usage_note: "家人。",
    //       image_file: "family.png",
    //     },
    //     {
    //       id: "n-09",
    //       term_zh: "學生",
    //       related_terms: [
    //         {
    //           term_target: "estudiante",
    //           pronunciation: ["/estuˈðjante/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "alumno/a",
    //           pronunciation: ["/aˈlumno/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Soy estudiante.", translation: "我是學生。" },
    //       usage_note: "Estudiante 不分陰陽。",
    //       image_file: "student.png",
    //     },
    //     {
    //       id: "n-10",
    //       term_zh: "文化",
    //       related_terms: [
    //         {
    //           term_target: "cultura",
    //           pronunciation: ["/kulˈtuɾa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Cultura local.", translation: "當地文化。" },
    //       usage_note: "文化。",
    //       image_file: "culture.png",
    //     },
    //     {
    //       id: "n-11",
    //       term_zh: "問題",
    //       related_terms: [
    //         {
    //           term_target: "problema",
    //           pronunciation: ["/pɾoˈβlema/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "No hay problema.", translation: "沒問題。" },
    //       usage_note: "陽性名詞 (El problema)。",
    //       image_file: "problem.png",
    //     },
    //     {
    //       id: "n-12",
    //       term_zh: "公司",
    //       related_terms: [
    //         {
    //           term_target: "empresa",
    //           pronunciation: ["/emˈpɾesa/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "compañía",
    //           pronunciation: ["/kompaˈɲia/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Empresa grande.", translation: "大公司。" },
    //       usage_note: "上班地點。",
    //       image_file: "company.png",
    //     },
    //     {
    //       id: "n-13",
    //       term_zh: "男性",
    //       related_terms: [
    //         {
    //           term_target: "hombre",
    //           pronunciation: ["/ˈombɾe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Es un hombre.", translation: "他是男人。" },
    //       usage_note: "性別。",
    //       image_file: "man.png",
    //     },
    //     {
    //       id: "n-14",
    //       term_zh: "女性",
    //       related_terms: [
    //         {
    //           term_target: "mujer",
    //           pronunciation: ["/muˈxeɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Es una mujer.", translation: "她是女人。" },
    //       usage_note: "性別。",
    //       image_file: "woman.png",
    //     },
    //     {
    //       id: "n-15",
    //       term_zh: "學校",
    //       related_terms: [
    //         {
    //           term_target: "escuela",
    //           pronunciation: ["/esˈkwela/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ir a la escuela.", translation: "去學校。" },
    //       usage_note: "教育機構。",
    //       image_file: "school.png",
    //     },
    //     {
    //       id: "n-16",
    //       term_zh: "老師",
    //       related_terms: [
    //         {
    //           term_target: "profesor/a",
    //           pronunciation: ["/pɾofeˈsoɾ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "maestro/a",
    //           pronunciation: ["/maˈestɾo/"],
    //           specific_note: "小學老師/師傅",
    //         },
    //       ],
    //       example: {
    //         sentence: "Profesor de español.",
    //         translation: "西班牙文老師。",
    //       },
    //       usage_note: "師長。",
    //       image_file: "teacher.png",
    //     },
    //     {
    //       id: "n-17",
    //       term_zh: "影片／電影",
    //       related_terms: [
    //         {
    //           term_target: "película",
    //           pronunciation: ["/peˈlikula/"],
    //           specific_note: "電影",
    //         },
    //         {
    //           term_target: "video",
    //           pronunciation: ["/ˈbideo/"],
    //           specific_note: "影片",
    //         },
    //       ],
    //       example: { sentence: "Ver una película.", translation: "看電影。" },
    //       usage_note: "影片。",
    //       image_file: "movie.png",
    //     },
    //     {
    //       id: "n-18",
    //       term_zh: "手機",
    //       related_terms: [
    //         {
    //           term_target: "móvil",
    //           pronunciation: ["/ˈmoβil/"],
    //           specific_note: "西班牙",
    //         },
    //         {
    //           term_target: "celular",
    //           pronunciation: ["/θeluˈlaɾ/"],
    //           specific_note: "拉美",
    //         },
    //       ],
    //       example: { sentence: "Mi móvil.", translation: "我手機。" },
    //       usage_note: "地區習慣不同。",
    //       image_file: "phone.png",
    //     },
    //     {
    //       id: "n-19",
    //       term_zh: "電腦",
    //       related_terms: [
    //         {
    //           term_target: "ordenador",
    //           pronunciation: ["/oɾdenaˈdoɾ/"],
    //           specific_note: "西班牙",
    //         },
    //         {
    //           term_target: "computadora",
    //           pronunciation: ["/komputaˈdoɾa/"],
    //           specific_note: "拉美",
    //         },
    //       ],
    //       example: { sentence: "Usar el ordenador.", translation: "用電腦。" },
    //       usage_note: "PC。",
    //       image_file: "computer.png",
    //     },
    //     {
    //       id: "n-20",
    //       term_zh: "車",
    //       related_terms: [
    //         {
    //           term_target: "coche",
    //           pronunciation: ["/ˈkotʃe/"],
    //           specific_note: "西班牙",
    //         },
    //         {
    //           term_target: "carro",
    //           pronunciation: ["/ˈkaro/"],
    //           specific_note: "拉美",
    //         },
    //         {
    //           term_target: "auto",
    //           pronunciation: ["/ˈauto/"],
    //           specific_note: "通用",
    //         },
    //       ],
    //       example: { sentence: "Conducir un coche.", translation: "開車。" },
    //       usage_note: "地區習慣不同。",
    //       image_file: "car.png",
    //     },
    //     {
    //       id: "n-21",
    //       term_zh: "市場",
    //       related_terms: [
    //         {
    //           term_target: "mercado",
    //           pronunciation: ["/meɾˈkaðo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Mercado nocturno.", translation: "夜市。" },
    //       usage_note: "市集。",
    //       image_file: "market.png",
    //     },
    //     {
    //       id: "n-22",
    //       term_zh: "衣服",
    //       related_terms: [
    //         {
    //           term_target: "ropa",
    //           pronunciation: ["/ˈropa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Comprar ropa.", translation: "買衣服。" },
    //       usage_note: "集合名詞(單數)。",
    //       image_file: "clothes.png",
    //     },
    //     {
    //       id: "n-23",
    //       term_zh: "商店",
    //       related_terms: [
    //         {
    //           term_target: "tienda",
    //           pronunciation: ["/ˈtjenda/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Tienda de ropa.", translation: "服飾店。" },
    //       usage_note: "店家。",
    //       image_file: "shop.png",
    //     },
    //     {
    //       id: "n-24",
    //       term_zh: "巴士",
    //       related_terms: [
    //         {
    //           term_target: "autobús",
    //           pronunciation: ["/autoˈβus/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Tomar el autobús.", translation: "搭公車。" },
    //       usage_note: "公車。",
    //       image_file: "bus.png",
    //     },
    //     {
    //       id: "n-25",
    //       term_zh: "街道",
    //       related_terms: [
    //         {
    //           term_target: "calle",
    //           pronunciation: ["/ˈkaʎe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "En la calle.", translation: "在街上。" },
    //       usage_note: "道路。",
    //       image_file: "street.png",
    //     },
    //     {
    //       id: "n-26",
    //       term_zh: "房子／家",
    //       related_terms: [
    //         {
    //           term_target: "casa",
    //           pronunciation: ["/ˈkasa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Mi casa.", translation: "我家。" },
    //       usage_note: "住宅。",
    //       image_file: "house.png",
    //     },
    //     {
    //       id: "n-27",
    //       term_zh: "母親",
    //       related_terms: [
    //         {
    //           term_target: "madre",
    //           pronunciation: ["/ˈmaðɾe/"],
    //           specific_note: "正式",
    //         },
    //         {
    //           term_target: "mamá",
    //           pronunciation: ["/maˈma/"],
    //           specific_note: "口語",
    //         },
    //       ],
    //       example: { sentence: "Mi madre.", translation: "我媽媽。" },
    //       usage_note: "媽媽。",
    //       image_file: "mother.png",
    //     },
    //     {
    //       id: "n-28",
    //       term_zh: "父親",
    //       related_terms: [
    //         {
    //           term_target: "padre",
    //           pronunciation: ["/ˈpaðɾe/"],
    //           specific_note: "正式",
    //         },
    //         {
    //           term_target: "papá",
    //           pronunciation: ["/paˈpa/"],
    //           specific_note: "口語",
    //         },
    //       ],
    //       example: { sentence: "Mi padre.", translation: "我爸爸。" },
    //       usage_note: "爸爸。",
    //       image_file: "father.png",
    //     },
    //     {
    //       id: "n-29",
    //       term_zh: "兄弟",
    //       related_terms: [
    //         {
    //           term_target: "hermano",
    //           pronunciation: ["/eɾˈmano/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Mi hermano.", translation: "我兄弟。" },
    //       usage_note: "兄弟。",
    //       image_file: "brother.png",
    //     },
    //     {
    //       id: "n-30",
    //       term_zh: "姐妹",
    //       related_terms: [
    //         {
    //           term_target: "hermana",
    //           pronunciation: ["/eɾˈmana/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Mi hermana.", translation: "我姐妹。" },
    //       usage_note: "姐妹。",
    //       image_file: "sister.png",
    //     },
    //     {
    //       id: "n-31",
    //       term_zh: "中文",
    //       related_terms: [
    //         {
    //           term_target: "chino",
    //           pronunciation: ["/ˈtʃino/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hablar chino.", translation: "說中文。" },
    //       usage_note: "語言。",
    //       image_file: "chinese.png",
    //     },
    //     {
    //       id: "n-32",
    //       term_zh: "早晨",
    //       related_terms: [
    //         {
    //           term_target: "mañana",
    //           pronunciation: ["/maˈɲana/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Por la mañana.", translation: "在早晨。" },
    //       usage_note: "早上。",
    //       image_file: "morning.png",
    //     },
    //     {
    //       id: "n-33",
    //       term_zh: "夜晚",
    //       related_terms: [
    //         {
    //           term_target: "noche",
    //           pronunciation: ["/ˈnotʃe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Buenas noches.", translation: "晚安。" },
    //       usage_note: "夜晚。",
    //       image_file: "night.png",
    //     },
    //     {
    //       id: "n-34",
    //       term_zh: "票／車票",
    //       related_terms: [
    //         {
    //           term_target: "billete",
    //           pronunciation: ["/biˈʎete/"],
    //           specific_note: "西班牙",
    //         },
    //         {
    //           term_target: "boleto",
    //           pronunciation: ["/boˈleto/"],
    //           specific_note: "拉美",
    //         },
    //       ],
    //       example: {
    //         sentence: "Un billete, por favor.",
    //         translation: "一張票，麻煩了。",
    //       },
    //       usage_note: "地區習慣不同。",
    //       image_file: "ticket.png",
    //     },
    //     {
    //       id: "n-35",
    //       term_zh: "包包",
    //       related_terms: [
    //         {
    //           term_target: "bolso",
    //           pronunciation: ["/ˈbolso/"],
    //           specific_note: "手提包",
    //         },
    //         {
    //           term_target: "mochila",
    //           pronunciation: ["/moˈtʃila/"],
    //           specific_note: "後背包",
    //         },
    //       ],
    //       example: { sentence: "Bolso grande.", translation: "大包包。" },
    //       usage_note: "提包。",
    //       image_file: "bag.png",
    //     },
    //     {
    //       id: "n-36",
    //       term_zh: "杯子",
    //       related_terms: [
    //         {
    //           term_target: "taza",
    //           pronunciation: ["/ˈtaθa/"],
    //           specific_note: "馬克杯",
    //         },
    //         {
    //           term_target: "vaso",
    //           pronunciation: ["/ˈbaso/"],
    //           specific_note: "玻璃杯",
    //         },
    //       ],
    //       example: { sentence: "Taza de té.", translation: "一杯茶。" },
    //       usage_note: "杯具。",
    //       image_file: "cup.png",
    //     },
    //     {
    //       id: "n-37",
    //       term_zh: "醫生",
    //       related_terms: [
    //         {
    //           term_target: "médico/a",
    //           pronunciation: ["/ˈmeðiko/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "doctor/a",
    //           pronunciation: ["/dokˈtoɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ir al médico.", translation: "看醫生。" },
    //       usage_note: "醫師。",
    //       image_file: "doctor.png",
    //     },
    //     {
    //       id: "n-38",
    //       term_zh: "警察",
    //       related_terms: [
    //         {
    //           term_target: "policía",
    //           pronunciation: ["/poliˈθia/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Llamar a la policía.",
    //         translation: "叫警察。",
    //       },
    //       usage_note: "警察。",
    //       image_file: "police.png",
    //     },
    //     {
    //       id: "n-39",
    //       term_zh: "醫院",
    //       related_terms: [
    //         {
    //           term_target: "hospital",
    //           pronunciation: ["/ospiˈtal/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ir al hospital.", translation: "去醫院。" },
    //       usage_note: "H 不發音。",
    //       image_file: "hospital.png",
    //     },
    //     {
    //       id: "n-40",
    //       term_zh: "座位",
    //       related_terms: [
    //         {
    //           term_target: "asiento",
    //           pronunciation: ["/aˈsjento/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Tomar asiento.", translation: "請坐。" },
    //       usage_note: "位子。",
    //       image_file: "seat.png",
    //     },
    //     {
    //       id: "n-41",
    //       term_zh: "門",
    //       related_terms: [
    //         {
    //           term_target: "puerta",
    //           pronunciation: ["/ˈpweɾta/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Abrir la puerta.", translation: "開門。" },
    //       usage_note: "門戶。",
    //       image_file: "door.png",
    //     },
    //     {
    //       id: "n-42",
    //       term_zh: "房間",
    //       related_terms: [
    //         {
    //           term_target: "habitación",
    //           pronunciation: ["/aβitaˈθjon/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "cuarto",
    //           pronunciation: ["/ˈkwaɾto/"],
    //           specific_note: "口語",
    //         },
    //       ],
    //       example: { sentence: "Mi habitación.", translation: "我房間。" },
    //       usage_note: "室內。",
    //       image_file: "room.png",
    //     },
    //     {
    //       id: "n-43",
    //       term_zh: "車站",
    //       related_terms: [
    //         {
    //           term_target: "estación",
    //           pronunciation: ["/estaˈθjon/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Estación de tren.", translation: "火車站。" },
    //       usage_note: "站點。",
    //       image_file: "station.png",
    //     },
    //     {
    //       id: "n-44",
    //       term_zh: "地鐵",
    //       related_terms: [
    //         {
    //           term_target: "metro",
    //           pronunciation: ["/ˈmetɾo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Estación de metro.", translation: "地鐵站。" },
    //       usage_note: "地下鐵。",
    //       image_file: "subway.png",
    //     },
    //     {
    //       id: "n-45",
    //       term_zh: "火車",
    //       related_terms: [
    //         {
    //           term_target: "tren",
    //           pronunciation: ["/tɾen/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Viajar en tren.", translation: "搭火車旅行。" },
    //       usage_note: "列車。",
    //       image_file: "train.png",
    //     },
    //     {
    //       id: "n-46",
    //       term_zh: "機場",
    //       related_terms: [
    //         {
    //           term_target: "aeropuerto",
    //           pronunciation: ["/aeɾoˈpweɾto/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ir al aeropuerto.", translation: "去機場。" },
    //       usage_note: "搭飛機處。",
    //       image_file: "airport.png",
    //     },
    //     {
    //       id: "n-47",
    //       term_zh: "行李",
    //       related_terms: [
    //         {
    //           term_target: "equipaje",
    //           pronunciation: ["/ekiˈpaxe/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "maleta",
    //           pronunciation: ["/maˈleta/"],
    //           specific_note: "手提箱",
    //         },
    //       ],
    //       example: { sentence: "Mucho equipaje.", translation: "很多行李。" },
    //       usage_note: "包裹。",
    //       image_file: "luggage.png",
    //     },
    //     {
    //       id: "n-48",
    //       term_zh: "地圖",
    //       related_terms: [
    //         {
    //           term_target: "mapa",
    //           pronunciation: ["/ˈmapa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Mirar el mapa.", translation: "看地圖。" },
    //       usage_note: "陽性名詞 (El mapa)。",
    //       image_file: "map.png",
    //     },
    //     {
    //       id: "n-49",
    //       term_zh: "行政櫃檯／票口",
    //       related_terms: [
    //         {
    //           term_target: "mostrador",
    //           pronunciation: ["/mostɾaˈdoɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "En el mostrador.", translation: "在櫃檯。" },
    //       usage_note: "服務台。",
    //       image_file: "counter.png",
    //     },
    //     {
    //       id: "n-50",
    //       term_zh: "大廳",
    //       related_terms: [
    //         {
    //           term_target: "vestíbulo",
    //           pronunciation: ["/besˈtiβulo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Esperar en el vestíbulo.",
    //         translation: "在大廳等。",
    //       },
    //       usage_note: "接待處。",
    //       image_file: "lobby.png",
    //     },
    //     {
    //       id: "n-51",
    //       term_zh: "預定",
    //       related_terms: [
    //         {
    //           term_target: "reserva",
    //           pronunciation: ["/reˈseɾβa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hacer una reserva.", translation: "做預約。" },
    //       usage_note: "預約。",
    //       image_file: "reservation.png",
    //     },
    //     {
    //       id: "n-52",
    //       term_zh: "入住",
    //       related_terms: [
    //         {
    //           term_target: "registro",
    //           pronunciation: ["/reˈxistɾo/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "check-in",
    //           pronunciation: ["/tʃek in/"],
    //           specific_note: "常用借詞",
    //         },
    //       ],
    //       example: {
    //         sentence: "Hacer el check-in.",
    //         translation: "辦理入住。",
    //       },
    //       usage_note: "常用英文借詞。",
    //       image_file: "check_in.png",
    //     },
    //     {
    //       id: "n-53",
    //       term_zh: "退房",
    //       related_terms: [
    //         {
    //           term_target: "salida",
    //           pronunciation: ["/saˈliða/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "check-out",
    //           pronunciation: ["/tʃek aut/"],
    //           specific_note: "常用借詞",
    //         },
    //       ],
    //       example: { sentence: "Hora de salida.", translation: "退房時間。" },
    //       usage_note: "常用英文借詞。",
    //       image_file: "check_out.png",
    //     },
    //     {
    //       id: "n-54",
    //       term_zh: "飲料",
    //       related_terms: [
    //         {
    //           term_target: "bebida",
    //           pronunciation: ["/beˈβiða/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Bebida fría.", translation: "冷飲。" },
    //       usage_note: "飲品。",
    //       image_file: "drink.png",
    //     },
    //     {
    //       id: "n-55",
    //       term_zh: "菜單",
    //       related_terms: [
    //         {
    //           term_target: "menú",
    //           pronunciation: ["/meˈnu/"],
    //           specific_note: "套餐/菜單",
    //         },
    //         {
    //           term_target: "carta",
    //           pronunciation: ["/ˈkaɾta/"],
    //           specific_note: "點菜單",
    //         },
    //       ],
    //       example: {
    //         sentence: "El menú, por favor.",
    //         translation: "請給菜單。",
    //       },
    //       usage_note: "Menu。",
    //       image_file: "menu.png",
    //     },
    //     {
    //       id: "n-56",
    //       term_zh: "午餐",
    //       related_terms: [
    //         {
    //           term_target: "almuerzo",
    //           pronunciation: ["/alˈmweɾθo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Comer el almuerzo.", translation: "吃午餐。" },
    //       usage_note: "中餐。",
    //       image_file: "lunch.png",
    //     },
    //     {
    //       id: "n-57",
    //       term_zh: "晚餐",
    //       related_terms: [
    //         {
    //           term_target: "cena",
    //           pronunciation: ["/ˈθena/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Comer la cena.", translation: "吃晚餐。" },
    //       usage_note: "晚餐。",
    //       image_file: "dinner.png",
    //     },
    //     {
    //       id: "n-58",
    //       term_zh: "帳單",
    //       related_terms: [
    //         {
    //           term_target: "cuenta",
    //           pronunciation: ["/ˈkwenta/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "La cuenta, por favor.",
    //         translation: "麻煩結帳。",
    //       },
    //       usage_note: "買單。",
    //       image_file: "bill.png",
    //     },
    //     {
    //       id: "n-59",
    //       term_zh: "價錢",
    //       related_terms: [
    //         {
    //           term_target: "precio",
    //           pronunciation: ["/ˈpɾeθjo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Buen precio.", translation: "好價格。" },
    //       usage_note: "價格。",
    //       image_file: "price.png",
    //     },
    //     {
    //       id: "n-60",
    //       term_zh: "收據",
    //       related_terms: [
    //         {
    //           term_target: "recibo",
    //           pronunciation: ["/reˈθiβo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "El recibo, por favor.",
    //         translation: "請給收據。",
    //       },
    //       usage_note: "證明。",
    //       image_file: "receipt.png",
    //     },
    //     {
    //       id: "n-61",
    //       term_zh: "尺寸",
    //       related_terms: [
    //         {
    //           term_target: "talla",
    //           pronunciation: ["/ˈtaʎa/"],
    //           specific_note: "衣服/鞋子",
    //         },
    //         {
    //           term_target: "tamaño",
    //           pronunciation: ["/taˈmaɲo/"],
    //           specific_note: "物體大小",
    //         },
    //       ],
    //       example: { sentence: "Talla grande.", translation: "大尺寸。" },
    //       usage_note: "大小。",
    //       image_file: "size.png",
    //     },
    //     {
    //       id: "n-62",
    //       term_zh: "入口",
    //       related_terms: [
    //         {
    //           term_target: "entrada",
    //           pronunciation: ["/enˈtɾaða/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Entrada principal.",
    //         translation: "正門入口。",
    //       },
    //       usage_note: "進去的地方。",
    //       image_file: "entrance.png",
    //     },
    //     {
    //       id: "n-63",
    //       term_zh: "出口",
    //       related_terms: [
    //         {
    //           term_target: "salida",
    //           pronunciation: ["/saˈliða/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Salida de emergencia.",
    //         translation: "緊急出口。",
    //       },
    //       usage_note: "出去的地方。",
    //       image_file: "exit.png",
    //     },
    //     {
    //       id: "n-64",
    //       term_zh: "台灣",
    //       related_terms: [
    //         {
    //           term_target: "Taiwán",
    //           pronunciation: ["/taiˈwan/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Amo Taiwán.", translation: "我愛台灣。" },
    //       usage_note: "地名。",
    //       image_file: "taiwan.png",
    //     },
    //     {
    //       id: "n-65",
    //       term_zh: "台灣人",
    //       related_terms: [
    //         {
    //           term_target: "taiuanés/esa",
    //           pronunciation: ["/tajwaˈnes/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Soy taiuanés.", translation: "我是台灣人。" },
    //       usage_note: "國籍。",
    //       image_file: "taiwanese.png",
    //     },
    //     {
    //       id: "n-66",
    //       term_zh: "一切事物",
    //       related_terms: [
    //         {
    //           term_target: "todo",
    //           pronunciation: ["/ˈtodo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Todo está bien.", translation: "一切都好。" },
    //       usage_note: "所有。",
    //       image_file: "everything.png",
    //     },
    //     {
    //       id: "n-67",
    //       term_zh: "錢包",
    //       related_terms: [
    //         {
    //           term_target: "cartera",
    //           pronunciation: ["/kaɾˈteɾa/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "billetera",
    //           pronunciation: ["/biʎeˈteɾa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Perdí mi cartera.", translation: "掉了錢包。" },
    //       usage_note: "皮夾。",
    //       image_file: "wallet.png",
    //     },
    //     {
    //       id: "n-68",
    //       term_zh: "身分證",
    //       related_terms: [
    //         {
    //           term_target: "DNI",
    //           pronunciation: ["/de ene i/"],
    //           specific_note: "身分證",
    //         },
    //         {
    //           term_target: "identificación",
    //           pronunciation: ["/identifikaˈθjon/"],
    //           specific_note: "證件",
    //         },
    //       ],
    //       example: {
    //         sentence: "Su identificación, por favor.",
    //         translation: "請出示證件。",
    //       },
    //       usage_note: "ID。",
    //       image_file: "id.png",
    //     },
    //     {
    //       id: "n-69",
    //       term_zh: "護照",
    //       related_terms: [
    //         {
    //           term_target: "pasaporte",
    //           pronunciation: ["/pasaˈpoɾte/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Su pasaporte, por favor.",
    //         translation: "請出示護照。",
    //       },
    //       usage_note: "出國必備。",
    //       image_file: "passport.png",
    //     },
    //     {
    //       id: "n-70",
    //       term_zh: "餐廳",
    //       related_terms: [
    //         {
    //           term_target: "restaurante",
    //           pronunciation: ["/restauˈɾante/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Buen restaurante.", translation: "好餐廳。" },
    //       usage_note: "食堂。",
    //       image_file: "restaurant.png",
    //     },
    //     {
    //       id: "n-71",
    //       term_zh: "飯店",
    //       related_terms: [
    //         {
    //           term_target: "hotel",
    //           pronunciation: ["/oˈtel/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Reservar un hotel.", translation: "訂飯店。" },
    //       usage_note: "H 不發音。",
    //       image_file: "hotel.png",
    //     },
    //     {
    //       id: "n-72",
    //       term_zh: "場所",
    //       related_terms: [
    //         {
    //           term_target: "lugar",
    //           pronunciation: ["/luˈɣaɾ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "sitio",
    //           pronunciation: ["/ˈsitjo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Buen lugar.", translation: "好地方。" },
    //       usage_note: "地點。",
    //       image_file: "place.png",
    //     },
    //     {
    //       id: "n-73",
    //       term_zh: "用品店員",
    //       related_terms: [
    //         {
    //           term_target: "dependiente/a",
    //           pronunciation: ["/depenˈdjente/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Preguntar al dependiente.",
    //         translation: "問店員。",
    //       },
    //       usage_note: "工作人員。",
    //       image_file: "clerk.png",
    //     },
    //     {
    //       id: "n-74",
    //       term_zh: "超市",
    //       related_terms: [
    //         {
    //           term_target: "supermercado",
    //           pronunciation: ["/supeɾmeɾˈkaðo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ir al supermercado.", translation: "去超市。" },
    //       usage_note: "量販店。",
    //       image_file: "supermarket.png",
    //     },
    //     {
    //       id: "n-75",
    //       term_zh: "月台",
    //       related_terms: [
    //         {
    //           term_target: "andén",
    //           pronunciation: ["/anˈden/"],
    //           specific_note: "西班牙",
    //         },
    //         {
    //           term_target: "plataforma",
    //           pronunciation: ["/plataˈfoɾma/"],
    //           specific_note: "拉美",
    //         },
    //       ],
    //       example: { sentence: "Andén 1.", translation: "第一月台。" },
    //       usage_note: "車站月台。",
    //       image_file: "platform.png",
    //     },
    //   ],
    // },
    // {
    //   id: "adverbs",
    //   name: "副詞",
    //   items: [
    //     {
    //       id: "adv-01",
    //       term_zh: "現在",
    //       related_terms: [
    //         {
    //           term_target: "ahora",
    //           pronunciation: ["/aˈoɾa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hazlo ahora.", translation: "現在做。" },
    //       usage_note: "目前。",
    //       image_file: "now.png",
    //     },
    //     {
    //       id: "adv-02",
    //       term_zh: "非常",
    //       related_terms: [
    //         { term_target: "muy", pronunciation: ["/muj/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Muy bien.", translation: "非常好。" },
    //       usage_note: "強調。",
    //       image_file: "very.png",
    //     },
    //     {
    //       id: "adv-03",
    //       term_zh: "真的",
    //       related_terms: [
    //         {
    //           term_target: "realmente",
    //           pronunciation: ["/realˈmente/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "de verdad",
    //           pronunciation: ["/de beɾˈðað/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿De verdad?", translation: "真的嗎？" },
    //       usage_note: "確認或強調。",
    //       image_file: "really.png",
    //     },
    //     {
    //       id: "adv-04",
    //       term_zh: "好好地／很好地",
    //       related_terms: [
    //         {
    //           term_target: "bien",
    //           pronunciation: ["/bjen/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Dormir bien.", translation: "睡得好。" },
    //       usage_note: "好地。",
    //       image_file: "well.png",
    //     },
    //     {
    //       id: "adv-05",
    //       term_zh: "經常",
    //       related_terms: [
    //         {
    //           term_target: "a menudo",
    //           pronunciation: ["/a meˈnuðo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Vengo a menudo.", translation: "我常來。" },
    //       usage_note: "頻率。",
    //       image_file: "often.png",
    //     },
    //     {
    //       id: "adv-06",
    //       term_zh: "通常",
    //       related_terms: [
    //         {
    //           term_target: "normalmente",
    //           pronunciation: ["/noɾmalˈmente/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "usualmente",
    //           pronunciation: ["/uswalˈmente/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Normalmente camino.",
    //         translation: "通常我走路。",
    //       },
    //       usage_note: "習慣。",
    //       image_file: "usually.png",
    //     },
    //     {
    //       id: "adv-07",
    //       term_zh: "已經",
    //       related_terms: [
    //         { term_target: "ya", pronunciation: ["/ʝa/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Ya está hecho.", translation: "已經做好了。" },
    //       usage_note: "完成。",
    //       image_file: "already.png",
    //     },
    //     {
    //       id: "adv-08",
    //       term_zh: "只有",
    //       related_terms: [
    //         {
    //           term_target: "solo",
    //           pronunciation: ["/ˈsolo/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "solamente",
    //           pronunciation: ["/solaˈmente/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Solo uno.", translation: "只有一個。" },
    //       usage_note: "唯一。",
    //       image_file: "only.png",
    //     },
    //     {
    //       id: "adv-09",
    //       term_zh: "再次",
    //       related_terms: [
    //         {
    //           term_target: "otra vez",
    //           pronunciation: ["/ˈotɾa beθ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "de nuevo",
    //           pronunciation: ["/de ˈnweβo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Inténtalo otra vez.",
    //         translation: "再試一次。",
    //       },
    //       usage_note: "重複。",
    //       image_file: "again.png",
    //     },
    //     {
    //       id: "adv-10",
    //       term_zh: "大約",
    //       related_terms: [
    //         {
    //           term_target: "alrededor de",
    //           pronunciation: ["/alɾeðeˈðoɾ de/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "unos",
    //           pronunciation: ["/ˈunos/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Unos 10 minutos.",
    //         translation: "大約10分鐘。",
    //       },
    //       usage_note: "概數。",
    //       image_file: "about.png",
    //     },
    //     {
    //       id: "adv-11",
    //       term_zh: "一點點",
    //       related_terms: [
    //         {
    //           term_target: "un poco",
    //           pronunciation: ["/um ˈpoko/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Un poco picante.", translation: "一點點辣。" },
    //       usage_note: "少量。",
    //       image_file: "a_little.png",
    //     },
    //     {
    //       id: "adv-12",
    //       term_zh: "也是",
    //       related_terms: [
    //         {
    //           term_target: "también",
    //           pronunciation: ["/tamˈbjen/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Yo también.", translation: "我也是。" },
    //       usage_note: "也。",
    //       image_file: "also.png",
    //     },
    //     {
    //       id: "adv-13",
    //       term_zh: "或許",
    //       related_terms: [
    //         {
    //           term_target: "tal vez",
    //           pronunciation: ["/tal ˈbeθ/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "quizás",
    //           pronunciation: ["/kiˈθas/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Tal vez más tarde.",
    //         translation: "也許等下。",
    //       },
    //       usage_note: "不確定。",
    //       image_file: "maybe.png",
    //     },
    //     {
    //       id: "adv-14",
    //       term_zh: "之後",
    //       related_terms: [
    //         {
    //           term_target: "después",
    //           pronunciation: ["/desˈpwes/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "más tarde",
    //           pronunciation: ["/mas ˈtaɾðe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Nos vemos más tarde.",
    //         translation: "待會見。",
    //       },
    //       usage_note: "稍後。",
    //       image_file: "later.png",
    //     },
    //     {
    //       id: "adv-15",
    //       term_zh: "很快",
    //       related_terms: [
    //         {
    //           term_target: "pronto",
    //           pronunciation: ["/ˈpɾonto/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Nos vemos pronto.",
    //         translation: "待會見(很快見)。",
    //       },
    //       usage_note: "不久後。",
    //       image_file: "soon.png",
    //     },
    //     {
    //       id: "adv-16",
    //       term_zh: "一起",
    //       related_terms: [
    //         {
    //           term_target: "juntos",
    //           pronunciation: ["/ˈxuntos/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ir juntos.", translation: "一起去。" },
    //       usage_note: "共同。",
    //       image_file: "together.png",
    //     },
    //     {
    //       id: "adv-17",
    //       term_zh: "仍然",
    //       related_terms: [
    //         {
    //           term_target: "todavía",
    //           pronunciation: ["/toðaˈβia/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "aún",
    //           pronunciation: ["/aˈun/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Todavía aquí.", translation: "還在這裡。" },
    //       usage_note: "持續。",
    //       image_file: "still.png",
    //     },
    //     {
    //       id: "adv-18",
    //       term_zh: "一般來說",
    //       related_terms: [
    //         {
    //           term_target: "generalmente",
    //           pronunciation: ["/xeneɾalˈmente/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Generalmente es así.",
    //         translation: "一般是那樣。",
    //       },
    //       usage_note: "通常。",
    //       image_file: "normally.png",
    //     },
    //     {
    //       id: "adv-19",
    //       term_zh: "立刻",
    //       related_terms: [
    //         {
    //           term_target: "inmediatamente",
    //           pronunciation: ["/inmedjataˈmente/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ven inmediatamente.", translation: "立刻來。" },
    //       usage_note: "馬上。",
    //       image_file: "immediately.png",
    //     },
    //     {
    //       id: "adv-20",
    //       term_zh: "也不",
    //       related_terms: [
    //         {
    //           term_target: "tampoco",
    //           pronunciation: ["/tamˈpoko/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Yo tampoco.", translation: "我也不。" },
    //       usage_note: "兩者都不。",
    //       image_file: "neither.png",
    //     },
    //   ],
    // },
    // {
    //   id: "questions",
    //   name: "疑問詞",
    //   items: [
    //     {
    //       id: "q-01",
    //       term_zh: "什麼",
    //       related_terms: [
    //         { term_target: "qué", pronunciation: ["/ke/"], specific_note: "" },
    //       ],
    //       example: { sentence: "¿Qué es esto?", translation: "這是什麼？" },
    //       usage_note: "問事物。",
    //       image_file: "what.png",
    //     },
    //     {
    //       id: "q-02",
    //       term_zh: "如何",
    //       related_terms: [
    //         {
    //           term_target: "cómo",
    //           pronunciation: ["/ˈkomo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Cómo estás?", translation: "你好嗎？" },
    //       usage_note: "問狀況。",
    //       image_file: "how.png",
    //     },
    //     {
    //       id: "q-03",
    //       term_zh: "何時",
    //       related_terms: [
    //         {
    //           term_target: "cuándo",
    //           pronunciation: ["/ˈkwando/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Cuándo vamos?", translation: "何時去？" },
    //       usage_note: "問時間。",
    //       image_file: "when.png",
    //     },
    //     {
    //       id: "q-04",
    //       term_zh: "哪裡",
    //       related_terms: [
    //         {
    //           term_target: "dónde",
    //           pronunciation: ["/ˈdonde/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Dónde estás?", translation: "你在哪？" },
    //       usage_note: "問地點。",
    //       image_file: "where.png",
    //     },
    //     {
    //       id: "q-05",
    //       term_zh: "誰",
    //       related_terms: [
    //         {
    //           term_target: "quién",
    //           pronunciation: ["/kjen/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Quién es él?", translation: "他是誰？" },
    //       usage_note: "問人。",
    //       image_file: "who.png",
    //     },
    //     {
    //       id: "q-06",
    //       term_zh: "為什麼",
    //       related_terms: [
    //         {
    //           term_target: "por qué",
    //           pronunciation: ["/poɾ ˈke/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Por qué?", translation: "為什麼？" },
    //       usage_note: "問原因。",
    //       image_file: "why.png",
    //     },
    //     {
    //       id: "q-07",
    //       term_zh: "哪一個",
    //       related_terms: [
    //         {
    //           term_target: "cuál",
    //           pronunciation: ["/kwal/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿Cuál prefieres?",
    //         translation: "你喜歡哪一個？",
    //       },
    //       usage_note: "選擇。",
    //       image_file: "which.png",
    //     },
    //     {
    //       id: "q-08",
    //       term_zh: "多少（數量）",
    //       related_terms: [
    //         {
    //           term_target: "cuánto",
    //           pronunciation: ["/ˈkwanto/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Cuánto cuesta?", translation: "多少錢？" },
    //       usage_note: "不可數/價格。",
    //       image_file: "how_much.png",
    //     },
    //     {
    //       id: "q-09",
    //       term_zh: "多久（時間）",
    //       related_terms: [
    //         {
    //           term_target: "cuánto tiempo",
    //           pronunciation: ["/ˈkwanto ˈtjempo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Cuánto tiempo?", translation: "要多久？" },
    //       usage_note: "時間長度。",
    //       image_file: "how_long.png",
    //     },
    //   ],
    // },
    // {
    //   id: "time_place",
    //   name: "表達場所和時間的單字",
    //   items: [
    //     {
    //       id: "tp-01",
    //       term_zh: "現在",
    //       related_terms: [
    //         {
    //           term_target: "ahora",
    //           pronunciation: ["/aˈoɾa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hazlo ahora.", translation: "現在做。" },
    //       usage_note: "目前。",
    //       image_file: "now.png",
    //     },
    //     {
    //       id: "tp-02",
    //       term_zh: "今天",
    //       related_terms: [
    //         { term_target: "hoy", pronunciation: ["/oi/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Hoy hace calor.", translation: "今天很熱。" },
    //       usage_note: "本日。",
    //       image_file: "today.png",
    //     },
    //     {
    //       id: "tp-03",
    //       term_zh: "明天",
    //       related_terms: [
    //         {
    //           term_target: "mañana",
    //           pronunciation: ["/maˈɲana/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hasta mañana.", translation: "明天見。" },
    //       usage_note: "隔天。",
    //       image_file: "tomorrow.png",
    //     },
    //     {
    //       id: "tp-04",
    //       term_zh: "昨天",
    //       related_terms: [
    //         {
    //           term_target: "ayer",
    //           pronunciation: ["/aˈʝeɾ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ayer fui.", translation: "昨天我去了。" },
    //       usage_note: "前一天。",
    //       image_file: "yesterday.png",
    //     },
    //     {
    //       id: "tp-05",
    //       term_zh: "這裡",
    //       related_terms: [
    //         {
    //           term_target: "aquí",
    //           pronunciation: ["/aˈki/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ven aquí.", translation: "來這。" },
    //       usage_note: "近處。",
    //       image_file: "here.png",
    //     },
    //     {
    //       id: "tp-06",
    //       term_zh: "那裡",
    //       related_terms: [
    //         {
    //           term_target: "allí / allá",
    //           pronunciation: ["/aˈʎi/", "/aˈʎa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ve allí.", translation: "去那。" },
    //       usage_note: "遠處。",
    //       image_file: "there.png",
    //     },
    //     {
    //       id: "tp-07",
    //       term_zh: "天（日期）",
    //       related_terms: [
    //         {
    //           term_target: "día",
    //           pronunciation: ["/ˈdia/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Un día.", translation: "一天。" },
    //       usage_note: "日子。",
    //       image_file: "day.png",
    //     },
    //     {
    //       id: "tp-08",
    //       term_zh: "年",
    //       related_terms: [
    //         {
    //           term_target: "año",
    //           pronunciation: ["/ˈaɲo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Este año.", translation: "今年。" },
    //       usage_note: "年度。",
    //       image_file: "year.png",
    //     },
    //     {
    //       id: "tp-09",
    //       term_zh: "月",
    //       related_terms: [
    //         { term_target: "mes", pronunciation: ["/mes/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Este mes.", translation: "這個月。" },
    //       usage_note: "月份。",
    //       image_file: "month.png",
    //     },
    //     {
    //       id: "tp-10",
    //       term_zh: "週",
    //       related_terms: [
    //         {
    //           term_target: "semana",
    //           pronunciation: ["/seˈmana/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "La próxima semana.", translation: "下週。" },
    //       usage_note: "星期。",
    //       image_file: "week.png",
    //     },
    //     {
    //       id: "tp-11",
    //       term_zh: "早上",
    //       related_terms: [
    //         {
    //           term_target: "mañana",
    //           pronunciation: ["/maˈɲana/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Por la mañana.", translation: "在早上。" },
    //       usage_note: "上午 (同明天)。",
    //       image_file: "morning.png",
    //     },
    //     {
    //       id: "tp-12",
    //       term_zh: "下午",
    //       related_terms: [
    //         {
    //           term_target: "tarde",
    //           pronunciation: ["/ˈtaɾðe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Por la tarde.", translation: "下午。" },
    //       usage_note: "PM。",
    //       image_file: "afternoon.png",
    //     },
    //     {
    //       id: "tp-13",
    //       term_zh: "晚上",
    //       related_terms: [
    //         {
    //           term_target: "noche",
    //           pronunciation: ["/ˈnotʃe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Buenas noches.", translation: "晚安。" },
    //       usage_note: "睡前。",
    //       image_file: "night.png",
    //     },
    //     {
    //       id: "tp-14",
    //       term_zh: "中午",
    //       related_terms: [
    //         {
    //           term_target: "mediodía",
    //           pronunciation: ["/meðjoˈðia/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Al mediodía.", translation: "在中午。" },
    //       usage_note: "12點。",
    //       image_file: "noon.png",
    //     },
    //     {
    //       id: "tp-15",
    //       term_zh: "前面",
    //       related_terms: [
    //         {
    //           term_target: "delante",
    //           pronunciation: ["/deˈlante/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Delante de mí.", translation: "在我前面。" },
    //       usage_note: "前方。",
    //       image_file: "front.png",
    //     },
    //     {
    //       id: "tp-16",
    //       term_zh: "後面",
    //       related_terms: [
    //         {
    //           term_target: "detrás",
    //           pronunciation: ["/deˈtɾas/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Detrás de la puerta.", translation: "門後。" },
    //       usage_note: "後方。",
    //       image_file: "behind.png",
    //     },
    //     {
    //       id: "tp-17",
    //       term_zh: "左邊",
    //       related_terms: [
    //         {
    //           term_target: "izquierda",
    //           pronunciation: ["/iθˈkjeɾða/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "A la izquierda.", translation: "左轉。" },
    //       usage_note: "左。",
    //       image_file: "left.png",
    //     },
    //     {
    //       id: "tp-18",
    //       term_zh: "右邊",
    //       related_terms: [
    //         {
    //           term_target: "derecha",
    //           pronunciation: ["/deˈɾetʃa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "A la derecha.", translation: "右轉。" },
    //       usage_note: "右。",
    //       image_file: "right.png",
    //     },
    //     {
    //       id: "tp-19",
    //       term_zh: "旁邊",
    //       related_terms: [
    //         {
    //           term_target: "al lado",
    //           pronunciation: ["/al ˈlaðo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Al lado de mí.", translation: "坐我旁邊。" },
    //       usage_note: "側邊。",
    //       image_file: "beside.png",
    //     },
    //     {
    //       id: "tp-20",
    //       term_zh: "對面",
    //       related_terms: [
    //         {
    //           term_target: "enfrente",
    //           pronunciation: ["/emˈfɾente/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Enfrente del banco.",
    //         translation: "銀行對面。",
    //       },
    //       usage_note: "對側。",
    //       image_file: "across_from.png",
    //     },
    //     {
    //       id: "tp-21",
    //       term_zh: "春天",
    //       related_terms: [
    //         {
    //           term_target: "primavera",
    //           pronunciation: ["/pɾimaˈβeɾa/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "La primavera.", translation: "春天。" },
    //       usage_note: "季節。",
    //       image_file: "spring.png",
    //     },
    //     {
    //       id: "tp-22",
    //       term_zh: "夏天",
    //       related_terms: [
    //         {
    //           term_target: "verano",
    //           pronunciation: ["/beˈɾano/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Verano caluroso.",
    //         translation: "炎熱的夏天。",
    //       },
    //       usage_note: "季節。",
    //       image_file: "summer.png",
    //     },
    //     {
    //       id: "tp-23",
    //       term_zh: "秋天",
    //       related_terms: [
    //         {
    //           term_target: "otoño",
    //           pronunciation: ["/oˈtoɲo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Otoño fresco.", translation: "涼爽的秋天。" },
    //       usage_note: "季節。",
    //       image_file: "autumn.png",
    //     },
    //     {
    //       id: "tp-24",
    //       term_zh: "冬天",
    //       related_terms: [
    //         {
    //           term_target: "invierno",
    //           pronunciation: ["/imˈbjeɾno/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Invierno frío.", translation: "寒冷的冬天。" },
    //       usage_note: "季節。",
    //       image_file: "winter.png",
    //     },
    //   ],
    // },
    // {
    //   id: "numbers",
    //   name: "基本的數字",
    //   items: [
    //     {
    //       id: "num-0",
    //       term_zh: "0",
    //       related_terms: [
    //         {
    //           term_target: "cero",
    //           pronunciation: ["/ˈθeɾo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Cero grados.", translation: "零度。" },
    //       usage_note: "零。",
    //       image_file: "zero.png",
    //     },
    //     {
    //       id: "num-1",
    //       term_zh: "1",
    //       related_terms: [
    //         {
    //           term_target: "uno",
    //           pronunciation: ["/ˈuno/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Un minuto.", translation: "一分鐘。" },
    //       usage_note: "在陽性名詞前變 Un。",
    //       image_file: "one.png",
    //     },
    //     {
    //       id: "num-2",
    //       term_zh: "2",
    //       related_terms: [
    //         { term_target: "dos", pronunciation: ["/dos/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Dos días.", translation: "兩天。" },
    //       usage_note: "二。",
    //       image_file: "two.png",
    //     },
    //     {
    //       id: "num-3",
    //       term_zh: "3",
    //       related_terms: [
    //         {
    //           term_target: "tres",
    //           pronunciation: ["/tɾes/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Tres personas.", translation: "三人。" },
    //       usage_note: "三。",
    //       image_file: "three.png",
    //     },
    //     {
    //       id: "num-4",
    //       term_zh: "4",
    //       related_terms: [
    //         {
    //           term_target: "cuatro",
    //           pronunciation: ["/ˈkwatɾo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Cuatro estaciones.", translation: "四季。" },
    //       usage_note: "四。",
    //       image_file: "four.png",
    //     },
    //     {
    //       id: "num-5",
    //       term_zh: "5",
    //       related_terms: [
    //         {
    //           term_target: "cinco",
    //           pronunciation: ["/ˈθinko/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Cinco euros.", translation: "五歐元。" },
    //       usage_note: "五。",
    //       image_file: "five.png",
    //     },
    //     {
    //       id: "num-6",
    //       term_zh: "6",
    //       related_terms: [
    //         {
    //           term_target: "seis",
    //           pronunciation: ["/seis/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Seis horas.", translation: "六小時。" },
    //       usage_note: "六。",
    //       image_file: "six.png",
    //     },
    //     {
    //       id: "num-7",
    //       term_zh: "7",
    //       related_terms: [
    //         {
    //           term_target: "siete",
    //           pronunciation: ["/ˈsjete/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Siete días.", translation: "七天。" },
    //       usage_note: "七。",
    //       image_file: "seven.png",
    //     },
    //     {
    //       id: "num-8",
    //       term_zh: "8",
    //       related_terms: [
    //         {
    //           term_target: "ocho",
    //           pronunciation: ["/ˈotʃo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ocho años.", translation: "八歲。" },
    //       usage_note: "八。",
    //       image_file: "eight.png",
    //     },
    //     {
    //       id: "num-9",
    //       term_zh: "9",
    //       related_terms: [
    //         {
    //           term_target: "nueve",
    //           pronunciation: ["/ˈnweβe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Nueve de la noche.",
    //         translation: "晚上九點。",
    //       },
    //       usage_note: "九。",
    //       image_file: "nine.png",
    //     },
    //     {
    //       id: "num-10",
    //       term_zh: "10",
    //       related_terms: [
    //         {
    //           term_target: "diez",
    //           pronunciation: ["/djeθ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Diez euros.", translation: "十歐元。" },
    //       usage_note: "十。",
    //       image_file: "ten.png",
    //     },
    //     {
    //       id: "num-11",
    //       term_zh: "11",
    //       related_terms: [
    //         {
    //           term_target: "once",
    //           pronunciation: ["/ˈonθe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Once años.", translation: "11歲。" },
    //       usage_note: "十一。",
    //       image_file: "eleven.png",
    //     },
    //     {
    //       id: "num-12",
    //       term_zh: "12",
    //       related_terms: [
    //         {
    //           term_target: "doce",
    //           pronunciation: ["/ˈdoθe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Doce meses.", translation: "12個月。" },
    //       usage_note: "十二。",
    //       image_file: "twelve.png",
    //     },
    //     {
    //       id: "num-15",
    //       term_zh: "15",
    //       related_terms: [
    //         {
    //           term_target: "quince",
    //           pronunciation: ["/ˈkinθe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Quince minutos.", translation: "15分鐘。" },
    //       usage_note: "十五。",
    //       image_file: "fifteen.png",
    //     },
    //     {
    //       id: "num-20",
    //       term_zh: "20",
    //       related_terms: [
    //         {
    //           term_target: "veinte",
    //           pronunciation: ["/ˈbeinte/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Veinte euros.", translation: "20歐元。" },
    //       usage_note: "二十。",
    //       image_file: "twenty.png",
    //     },
    //     {
    //       id: "num-50",
    //       term_zh: "50",
    //       related_terms: [
    //         {
    //           term_target: "cincuenta",
    //           pronunciation: ["/θinˈkwenta/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Cincuenta por ciento.", translation: "50%。" },
    //       usage_note: "五十。",
    //       image_file: "fifty.png",
    //     },
    //     {
    //       id: "num-100",
    //       term_zh: "100",
    //       related_terms: [
    //         {
    //           term_target: "cien",
    //           pronunciation: ["/θjen/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Cien puntos.", translation: "一百分。" },
    //       usage_note: "超過一百用 Ciento...",
    //       image_file: "hundred.png",
    //     },
    //     {
    //       id: "num-1000",
    //       term_zh: "1000",
    //       related_terms: [
    //         { term_target: "mil", pronunciation: ["/mil/"], specific_note: "" },
    //       ],
    //       example: {
    //         sentence: "Mil gracias.",
    //         translation: "萬分感謝(一千個謝謝)。",
    //       },
    //       usage_note: "千。",
    //       image_file: "thousand.png",
    //     },
    //     {
    //       id: "num-10000",
    //       term_zh: "10000",
    //       related_terms: [
    //         {
    //           term_target: "diez mil",
    //           pronunciation: ["/djeθ mil/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Diez mil dólares.", translation: "一萬元。" },
    //       usage_note: "一萬。",
    //       image_file: "ten_thousand.png",
    //     },
    //   ],
    // },
    // {
    //   id: "grammar",
    //   name: "基本句型",
    //   items: [
    //     {
    //       id: "g-01",
    //       term_zh: "我是/覺得～",
    //       related_terms: [
    //         {
    //           term_target: "Soy...",
    //           pronunciation: ["/soi/"],
    //           specific_note: "本質/身分",
    //         },
    //       ],
    //       example: { sentence: "Soy estudiante.", translation: "我是學生。" },
    //       usage_note: "本質/身分。",
    //       image_file: "i_am.png",
    //     },
    //     {
    //       id: "g-02",
    //       term_zh: "我的名字叫～",
    //       related_terms: [
    //         {
    //           term_target: "Me llamo...",
    //           pronunciation: ["/me ˈʎamo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Me llamo Juan.",
    //         translation: "我的名字叫胡安。",
    //       },
    //       usage_note: "自我介紹。",
    //       image_file: "my_name_is.png",
    //     },
    //     {
    //       id: "g-03",
    //       term_zh: "我做～",
    //       related_terms: [
    //         {
    //           term_target: "Yo hago...",
    //           pronunciation: ["/jo ˈaɣo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hago la tarea.", translation: "我做作業。" },
    //       usage_note: "一般動作。",
    //       image_file: "i_do.png",
    //     },
    //     {
    //       id: "g-04",
    //       term_zh: "我正在做～",
    //       related_terms: [
    //         {
    //           term_target: "Estoy ...-ando/-iendo",
    //           pronunciation: ["/esˈtoi/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Estoy comiendo.", translation: "我正在吃。" },
    //       usage_note: "進行式 Estar + 副動詞。",
    //       image_file: "ing.png",
    //     },
    //     {
    //       id: "g-05",
    //       term_zh: "我能夠～",
    //       related_terms: [
    //         {
    //           term_target: "Puedo...",
    //           pronunciation: ["/ˈpweðo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Puedo nadar.", translation: "我會游泳。" },
    //       usage_note: "能力。",
    //       image_file: "can.png",
    //     },
    //     {
    //       id: "g-06",
    //       term_zh: "我喜歡做～",
    //       related_terms: [
    //         {
    //           term_target: "Me gusta...",
    //           pronunciation: ["/me ˈgusta/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Me gusta leer.", translation: "我喜歡閱讀。" },
    //       usage_note: "興趣。",
    //       image_file: "like_ing.png",
    //     },
    //     {
    //       id: "g-07",
    //       term_zh: "我曾經～",
    //       related_terms: [
    //         {
    //           term_target: "Era / Fui...",
    //           pronunciation: ["/ˈeɾa/", "/fwi/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Era estudiante.",
    //         translation: "我曾經是學生。",
    //       },
    //       usage_note: "過去狀態。",
    //       image_file: "i_was.png",
    //     },
    //     {
    //       id: "g-08",
    //       term_zh: "我做過～",
    //       related_terms: [
    //         {
    //           term_target: "Hice...",
    //           pronunciation: ["/ˈiθe/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hice mi tarea.", translation: "我做了功課。" },
    //       usage_note: "過去動作。",
    //       image_file: "i_did.png",
    //     },
    //     {
    //       id: "g-09",
    //       term_zh: "我已做過～",
    //       related_terms: [
    //         {
    //           term_target: "He ... -ado/-ido",
    //           pronunciation: ["/e/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "He comido.", translation: "我已經吃過了。" },
    //       usage_note: "完成式 Haber + PP。",
    //       image_file: "i_have_done.png",
    //     },
    //     {
    //       id: "g-10",
    //       term_zh: "我曾去過～",
    //       related_terms: [
    //         {
    //           term_target: "He ido a...",
    //           pronunciation: ["/e ˈiði a/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "He ido a España.",
    //         translation: "我曾經去過西班牙。",
    //       },
    //       usage_note: "經驗。",
    //       image_file: "have_been_to.png",
    //     },
    //     {
    //       id: "g-11",
    //       term_zh: "我打算～",
    //       related_terms: [
    //         {
    //           term_target: "Voy a...",
    //           pronunciation: ["/boi a/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Voy a ir.", translation: "我將要去。" },
    //       usage_note: "未來意。",
    //       image_file: "i_will.png",
    //     },
    //     {
    //       id: "g-12",
    //       term_zh: "你是～嗎？",
    //       related_terms: [
    //         {
    //           term_target: "¿Eres...?",
    //           pronunciation: ["/ˈeɾes/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿Eres estudiante?",
    //         translation: "你是學生嗎？",
    //       },
    //       usage_note: "問狀態。",
    //       image_file: "are_you.png",
    //     },
    //     {
    //       id: "g-13",
    //       term_zh: "你在做～嗎？",
    //       related_terms: [
    //         {
    //           term_target: "¿Haces...?",
    //           pronunciation: ["/ˈaθes/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Haces deporte?", translation: "你有運動嗎？" },
    //       usage_note: "一般疑問句。",
    //       image_file: "do_you.png",
    //     },
    //     {
    //       id: "g-14",
    //       term_zh: "你曾經～嗎？",
    //       related_terms: [
    //         {
    //           term_target: "¿Has...?",
    //           pronunciation: ["/as/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿Has ido a España?",
    //         translation: "你有去過西班牙嗎？",
    //       },
    //       usage_note: "問經驗(完成式)。",
    //       image_file: "have_you_ever.png",
    //     },
    //     {
    //       id: "g-15",
    //       term_zh: "你何時做（某事）？",
    //       related_terms: [
    //         {
    //           term_target: "¿Cuándo...?",
    //           pronunciation: ["/ˈkwando/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Cuándo duermes?", translation: "你何時睡？" },
    //       usage_note: "問時間點。",
    //       image_file: "when_do_you.png",
    //     },
    //     {
    //       id: "g-16",
    //       term_zh: "你什麼時候去（某地）？",
    //       related_terms: [
    //         {
    //           term_target: "¿Cuándo vas a...?",
    //           pronunciation: ["/ˈkwando bas a/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿Cuándo vas a la escuela?",
    //         translation: "你何時去學校？",
    //       },
    //       usage_note: "問去的時間。",
    //       image_file: "when_go_to.png",
    //     },
    //     {
    //       id: "g-17",
    //       term_zh: "你在哪裡做（某事）？",
    //       related_terms: [
    //         {
    //           term_target: "¿Dónde...?",
    //           pronunciation: ["/ˈdonde/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Dónde vives?", translation: "你住哪裡？" },
    //       usage_note: "問地點。",
    //       image_file: "where_do_you.png",
    //     },
    //     {
    //       id: "g-18",
    //       term_zh: "你如何做（某事）？",
    //       related_terms: [
    //         {
    //           term_target: "¿Cómo...?",
    //           pronunciation: ["/ˈkomo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "¿Cómo cocinas?", translation: "你怎麼煮？" },
    //       usage_note: "問方法。",
    //       image_file: "how_do_you.png",
    //     },
    //     {
    //       id: "g-19",
    //       term_zh: "你怎麼去（某地）？",
    //       related_terms: [
    //         {
    //           term_target: "¿Cómo vas a...?",
    //           pronunciation: ["/ˈkomo bas a/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿Cómo vas a la escuela?",
    //         translation: "你怎麼去學校？",
    //       },
    //       usage_note: "問交通方式。",
    //       image_file: "how_go_to.png",
    //     },
    //     {
    //       id: "g-20",
    //       term_zh: "我不是～",
    //       related_terms: [
    //         {
    //           term_target: "No soy...",
    //           pronunciation: ["/no soi/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "No soy médico.", translation: "我不是醫生。" },
    //       usage_note: "否定身分。",
    //       image_file: "i_am_not.png",
    //     },
    //     {
    //       id: "g-21",
    //       term_zh: "我不做～",
    //       related_terms: [
    //         {
    //           term_target: "No (verbo)...",
    //           pronunciation: ["/no/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "No fumo.", translation: "我不抽菸。" },
    //       usage_note: "否定動作。",
    //       image_file: "i_dont.png",
    //     },
    //     {
    //       id: "g-22",
    //       term_zh: "我不能～",
    //       related_terms: [
    //         {
    //           term_target: "No puedo...",
    //           pronunciation: ["/no ˈpweðo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "No puedo ir.", translation: "我不能去。" },
    //       usage_note: "否定能力。",
    //       image_file: "i_cant.png",
    //     },
    //     {
    //       id: "g-23",
    //       term_zh: "我未曾～",
    //       related_terms: [
    //         {
    //           term_target: "Nunca he...",
    //           pronunciation: ["/ˈnuŋka e/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Nunca he comido esto.",
    //         translation: "我沒吃過這個。",
    //       },
    //       usage_note: "無此經驗。",
    //       image_file: "i_have_never.png",
    //     },
    //     {
    //       id: "g-24",
    //       term_zh: "我不必～",
    //       related_terms: [
    //         {
    //           term_target: "No tengo que...",
    //           pronunciation: ["/no ˈteŋgo ke/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "No tengo que ir.", translation: "我不必去。" },
    //       usage_note: "無義務。",
    //       image_file: "i_dont_have_to.png",
    //     },
    //     {
    //       id: "g-25",
    //       term_zh: "如果～的話，就～",
    //       related_terms: [
    //         {
    //           term_target: "Si ..., ...",
    //           pronunciation: ["/si/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Si quieres, vamos.",
    //         translation: "如果你想，我們走。",
    //       },
    //       usage_note: "假設條件。",
    //       image_file: "if.png",
    //     },
    //     {
    //       id: "g-26",
    //       term_zh: "當～時，就～",
    //       related_terms: [
    //         {
    //           term_target: "Cuando ..., ...",
    //           pronunciation: ["/ˈkwando/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Cuando como, estoy feliz.",
    //         translation: "當我吃東西時，我很開心。",
    //       },
    //       usage_note: "時間條件。",
    //       image_file: "when_condition.png",
    //     },
    //     {
    //       id: "g-27",
    //       term_zh: "請你～",
    //       related_terms: [
    //         {
    //           term_target: "¿Puedes...?",
    //           pronunciation: ["/ˈpweðes/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿Puedes ayudarme?",
    //         translation: "可以幫我嗎？",
    //       },
    //       usage_note: "請求。",
    //       image_file: "can_you.png",
    //     },
    //     {
    //       id: "g-28",
    //       term_zh: "我們來做～吧！",
    //       related_terms: [
    //         {
    //           term_target: "Vamos a...",
    //           pronunciation: ["/ˈbamos a/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Vamos a comer.", translation: "我們去吃吧。" },
    //       usage_note: "提議。",
    //       image_file: "lets.png",
    //     },
    //     {
    //       id: "g-29",
    //       term_zh: "我認為～",
    //       related_terms: [
    //         {
    //           term_target: "Creo que...",
    //           pronunciation: ["/ˈkɾeo ke/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Creo que es bueno.",
    //         translation: "我認為這很好。",
    //       },
    //       usage_note: "表達想法。",
    //       image_file: "i_think.png",
    //     },
    //     {
    //       id: "g-30",
    //       term_zh: "我想做～",
    //       related_terms: [
    //         {
    //           term_target: "Quiero...",
    //           pronunciation: ["/ˈkjeɾo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Quiero ir.", translation: "我想去。" },
    //       usage_note: "慾望。",
    //       image_file: "want_to.png",
    //     },
    //     {
    //       id: "g-31",
    //       term_zh: "我必須做～",
    //       related_terms: [
    //         {
    //           term_target: "Tengo que...",
    //           pronunciation: ["/ˈteŋgo ke/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Tengo que trabajar.",
    //         translation: "我必須工作。",
    //       },
    //       usage_note: "義務。",
    //       image_file: "i_have_to.png",
    //     },
    //     {
    //       id: "g-32",
    //       term_zh: "做某事是怎樣的",
    //       related_terms: [
    //         {
    //           term_target: "Es ... (infinitivo)",
    //           pronunciation: ["/es/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Es bueno comer.",
    //         translation: "吃東西是很好的。",
    //       },
    //       usage_note: "描述動作。",
    //       image_file: "it_is_to.png",
    //     },
    //     {
    //       id: "g-33",
    //       term_zh: "你可以幫我…嗎？",
    //       related_terms: [
    //         {
    //           term_target: "¿Me puedes ayudar a ...?",
    //           pronunciation: ["/me ˈpweðes aʝuˈðaɾ a/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿Me puedes ayudar a limpiar?",
    //         translation: "你可以幫我打掃嗎？",
    //       },
    //       usage_note: "尋求協助。",
    //       image_file: "can_you_help.png",
    //     },
    //     {
    //       id: "g-34",
    //       term_zh: "我可以…嗎？",
    //       related_terms: [
    //         {
    //           term_target: "¿Puedo...?",
    //           pronunciation: ["/ˈpweðo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "¿Puedo entrar?",
    //         translation: "我可以進來嗎？",
    //       },
    //       usage_note: "請求許可。",
    //       image_file: "can_i.png",
    //     },
    //     {
    //       id: "g-35",
    //       term_zh: "我不喜歡…",
    //       related_terms: [
    //         {
    //           term_target: "No me gusta...",
    //           pronunciation: ["/no me ˈgusta/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "No me gusta esto.",
    //         translation: "我不喜歡這個。",
    //       },
    //       usage_note: "表達反感。",
    //       image_file: "i_dont_like.png",
    //     },
    //     {
    //       id: "g-36",
    //       term_zh: "我比較喜歡…",
    //       related_terms: [
    //         {
    //           term_target: "Prefiero...",
    //           pronunciation: ["/pɾeˈfjeɾo/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Prefiero té.", translation: "我比較喜歡茶。" },
    //       usage_note: "偏好。",
    //       image_file: "prefer.png",
    //     },
    //     {
    //       id: "g-37",
    //       term_zh: "A 比 B 更…",
    //       related_terms: [
    //         {
    //           term_target: "A es más ... que B",
    //           pronunciation: ["/a es mas... ke be/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Esto es más caro que eso.",
    //         translation: "這比那個貴。",
    //       },
    //       usage_note: "比較級。",
    //       image_file: "more_than.png",
    //     },
    //     {
    //       id: "g-38",
    //       term_zh: "有…（存在）",
    //       related_terms: [
    //         {
    //           term_target: "Hay...",
    //           pronunciation: ["/ai/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hay un perro.", translation: "有一隻狗。" },
    //       usage_note: "存在。",
    //       image_file: "there_is.png",
    //     },
    //   ],
    // },
  ],
};
