import { AppData } from "../types";

export const germanData: AppData = {
  meta: {
    source_language: "zh-TW",
    target_language: "de-DE",
    version: "3.2",
    description:
      "台灣人快速語言學習 - 德文完整版 (包含所有原始列表單字與完整句型 - IPA 發音版)",
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
          "term_target": "Ja",
          "pronunciation": ["/jaː/"],
          "specific_note": "肯定",
          "segments": [
            { "text": "Ja", "meaning": "是的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ja, gerne.",
          "translation": "好的，很樂意。(常做為答應邀約或點餐時的回覆)",
          "segments": [
            { "text": "Ja", "meaning": "是的", "tail": ", " },
            { "text": "gerne", "meaning": "樂意地", "tail": "." }
          ]
        },
        {
          "sentence": "Ja, das stimmt.",
          "translation": "對，沒錯。",
          "segments": [
            { "text": "Ja", "meaning": "是的", "tail": ", " },
            { "text": "das", "meaning": "那個", "tail": " " },
            { "text": "stimmt", "meaning": "是正確的", "tail": "." }
          ]
        },
        {
          "sentence": "Ja, genau!",
          "translation": "對，就是這樣！(強烈同意對方時說)",
          "segments": [
            { "text": "Ja", "meaning": "是的", "tail": ", " },
            { "text": "genau", "meaning": "確切地/正是", "tail": "!" }
          ]
        }
      ],
      "usage_note": "回答問題或表示同意，德國人常把 Ja, genau 掛在嘴邊。",
      "image_file": "yes.png"
    },
    {
      "id": "greet-002",
      "term_zh": "不是",
      "related_terms": [
        {
          "term_target": "Nein",
          "pronunciation": ["/naɪ̯n/"],
          "specific_note": "否定",
          "segments": [
            { "text": "Nein", "meaning": "不/沒有", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Nein, danke.",
          "translation": "不了，謝謝。",
          "segments": [
            { "text": "Nein", "meaning": "不", "tail": ", " },
            { "text": "danke", "meaning": "感謝", "tail": "." }
          ]
        },
        {
          "sentence": "Nein, leider nicht.",
          "translation": "不，很可惜沒有/不是。",
          "segments": [
            { "text": "Nein", "meaning": "不", "tail": ", " },
            { "text": "leider", "meaning": "遺憾地/可惜", "tail": " " },
            { "text": "nicht", "meaning": "不 (否定詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Oh nein!",
          "translation": "喔不！(表示糟糕或驚訝)",
          "segments": [
            { "text": "Oh", "meaning": "喔", "tail": " " },
            { "text": "nein", "meaning": "不", "tail": "!" }
          ]
        }
      ],
      "usage_note": "直接拒絕或否認時使用。",
      "image_file": "no.png"
    },
    {
      "id": "greet-003",
      "term_zh": "你好",
      "related_terms": [
        {
          "term_target": "Hallo",
          "pronunciation": ["/ˈhalo/"],
          "specific_note": "通用",
          "segments": [
            { "text": "Hallo", "meaning": "你好", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hallo, wie geht's?",
          "translation": "哈囉，最近好嗎？",
          "segments": [
            { "text": "Hallo", "meaning": "哈囉", "tail": ", " },
            { "text": "wie", "meaning": "如何", "tail": " " },
            { "text": "geht's", "meaning": "過得/走", "tail": "?" }
          ]
        },
        {
          "sentence": "Hallo zusammen!",
          "translation": "大家好！(對著一群人打招呼時用)",
          "segments": [
            { "text": "Hallo", "meaning": "哈囉", "tail": " " },
            { "text": "zusammen", "meaning": "一起/大家", "tail": "!" }
          ]
        },
        {
          "sentence": "Hallo, ich bin Anna.",
          "translation": "你好，我是安娜。",
          "segments": [
            { "text": "Hallo", "meaning": "你好", "tail": ", " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "Anna", "meaning": "安娜 (人名)", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國最通用的問候語，無論長輩平輩都可以用。",
      "image_file": "hello.png"
    },
    {
      "id": "greet-004",
      "term_zh": "謝謝你",
      "related_terms": [
        {
          "term_target": "Danke",
          "pronunciation": ["/ˈdaŋkə/"],
          "specific_note": "",
          "segments": [
            { "text": "Danke", "meaning": "謝謝", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Vielen Dank!",
          "translation": "非常感謝！",
          "segments": [
            { "text": "Vielen", "meaning": "許多的", "tail": " " },
            { "text": "Dank", "meaning": "感謝 (名詞)", "tail": "!" }
          ]
        },
        {
          "sentence": "Danke schön.",
          "translation": "謝謝你。(語氣較柔和禮貌)",
          "segments": [
            { "text": "Danke", "meaning": "謝謝", "tail": " " },
            { "text": "schön", "meaning": "美好的", "tail": "." }
          ]
        },
        {
          "sentence": "Danke für die Hilfe.",
          "translation": "謝謝你的幫忙。",
          "segments": [
            { "text": "Danke", "meaning": "謝謝", "tail": " " },
            { "text": "für", "meaning": "為了", "tail": " " },
            { "text": "die", "meaning": "這個 (定冠詞)", "tail": " " },
            { "text": "Hilfe", "meaning": "幫忙", "tail": "." }
          ]
        }
      ],
      "usage_note": "單說 Danke 就可以應付大部分日常場合。",
      "image_file": "thank_you.png"
    },
    {
      "id": "greet-005",
      "term_zh": "對不起",
      "related_terms": [
        {
          "term_target": "Es tut mir leid",
          "pronunciation": ["/ɛs tuːt miːɐ̯ laɪ̯t/"],
          "specific_note": "道歉/遺憾",
          "segments": [
            { "text": "Es", "meaning": "這", "tail": " " },
            { "text": "tut", "meaning": "引起/做", "tail": " " },
            { "text": "mir", "meaning": "對我", "tail": " " },
            { "text": "leid", "meaning": "痛苦/遺憾", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Es tut mir leid.",
          "translation": "真的很抱歉。 (直譯：這讓我感到遺憾)",
          "segments": [
            { "text": "Es", "meaning": "這", "tail": " " },
            { "text": "tut", "meaning": "做", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "leid", "meaning": "遺憾", "tail": "." }
          ]
        },
        {
          "sentence": "Tut mir leid, ich bin zu spät.",
          "translation": "抱歉，我遲到了。",
          "segments": [
            { "text": "Tut", "meaning": "做", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "leid", "meaning": "遺憾", "tail": ", " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "zu", "meaning": "太", "tail": " " },
            { "text": "spät", "meaning": "晚/遲", "tail": "." }
          ]
        },
        {
          "sentence": "Es tut mir wirklich leid.",
          "translation": "我真的非常抱歉。",
          "segments": [
            { "text": "Es", "meaning": "這", "tail": " " },
            { "text": "tut", "meaning": "做", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "wirklich", "meaning": "真的", "tail": " " },
            { "text": "leid", "meaning": "遺憾", "tail": "." }
          ]
        }
      ],
      "usage_note": "真的做錯事，或是對某事表達同情與遺憾時使用。",
      "image_file": "sorry.png"
    },
    {
      "id": "greet-006",
      "term_zh": "不好意思",
      "related_terms": [
        {
          "term_target": "Entschuldigung...",
          "pronunciation": ["/ɛntˈʃʊldɪɡʊŋ/"],
          "specific_note": "引起注意",
          "segments": [
            { "text": "Entschuldigung", "meaning": "原諒/抱歉", "tail": "..." }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Entschuldigung, wo ist der Bahnhof?",
          "translation": "不好意思，火車站在哪裡？",
          "segments": [
            { "text": "Entschuldigung", "meaning": "不好意思", "tail": ", " },
            { "text": "wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "der", "meaning": "這個 (陽性)", "tail": " " },
            { "text": "Bahnhof", "meaning": "火車站", "tail": "?" }
          ]
        },
        {
          "sentence": "Entschuldigung, darf ich mal durch?",
          "translation": "不好意思，借過一下。",
          "segments": [
            { "text": "Entschuldigung", "meaning": "不好意思", "tail": ", " },
            { "text": "darf", "meaning": "允許/可以", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "mal", "meaning": "一下", "tail": " " },
            { "text": "durch", "meaning": "穿過", "tail": "?" }
          ]
        },
        {
          "sentence": "Entschuldigung, ist hier noch frei?",
          "translation": "不好意思，這裡(座位)還空著嗎？",
          "segments": [
            { "text": "Entschuldigung", "meaning": "不好意思", "tail": ", " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": " " },
            { "text": "noch", "meaning": "還有/仍然", "tail": " " },
            { "text": "frei", "meaning": "自由的/空著的", "tail": "?" }
          ]
        }
      ],
      "usage_note": "在街上問路、搭話、或要別人讓路時必說的開場白。",
      "image_file": "excuse_me.png"
    },
    {
      "id": "greet-007",
      "term_zh": "我不懂",
      "related_terms": [
        {
          "term_target": "Ich verstehe nicht",
          "pronunciation": ["/ɪç fɛɐ̯ˈʃteːə nɪçt/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "verstehe", "meaning": "理解/懂", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tut mir leid, ich verstehe nicht.",
          "translation": "抱歉，我不懂。",
          "segments": [
            { "text": "Tut", "meaning": "做", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "leid", "meaning": "遺憾", "tail": ", " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "verstehe", "meaning": "理解", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Ich verstehe kein Deutsch.",
          "translation": "我不懂(不會說)德文。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "verstehe", "meaning": "理解", "tail": " " },
            { "text": "kein", "meaning": "一點也不/沒有", "tail": " " },
            { "text": "Deutsch", "meaning": "德語", "tail": "." }
          ]
        },
        {
          "sentence": "Ich verstehe das nicht ganz.",
          "translation": "我不完全懂這個意思。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "verstehe", "meaning": "理解", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "ganz", "meaning": "完全地", "tail": "." }
          ]
        }
      ],
      "usage_note": "遇到德國人霹靂啪啦講一堆，大方跟他說這句就對了。",
      "image_file": "dont_understand.png"
    },
    {
      "id": "greet-008",
      "term_zh": "廁所在哪裡？",
      "related_terms": [
        {
          "term_target": "Wo ist die Toilette?",
          "pronunciation": ["/voː ɪst diː to̯aˈlɛtə/"],
          "specific_note": "",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "是/在", "tail": " " },
            { "text": "die", "meaning": "這 (陰性定冠詞)", "tail": " " },
            { "text": "Toilette", "meaning": "廁所", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Entschuldigung, wo ist die Toilette?",
          "translation": "不好意思，請問廁所在哪裡？",
          "segments": [
            { "text": "Entschuldigung", "meaning": "不好意思", "tail": ", " },
            { "text": "wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Toilette", "meaning": "廁所", "tail": "?" }
          ]
        },
        {
          "sentence": "Haben Sie eine Toilette?",
          "translation": "請問你們有洗手間嗎？(在店家借廁所時)",
          "segments": [
            { "text": "Haben", "meaning": "有", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "Toilette", "meaning": "廁所", "tail": "?" }
          ]
        },
        {
          "sentence": "Wo sind die Toiletten, bitte?",
          "translation": "麻煩請問洗手間在哪裡？(公共場所常用複數)",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "sind", "meaning": "在 (複數)", "tail": " " },
            { "text": "die", "meaning": "這些", "tail": " " },
            { "text": "Toiletten", "meaning": "廁所 (複數)", "tail": ", " },
            { "text": "bitte", "meaning": "請/麻煩", "tail": "?" }
          ]
        }
      ],
      "usage_note": "德國很多廁所要收費 (0.5 ~ 1 歐元)，記得隨身帶硬幣。",
      "image_file": "where_bathroom.png"
    },
    {
      "id": "greet-010",
      "term_zh": "多少錢？",
      "related_terms": [
        {
          "term_target": "Wie viel kostet das?",
          "pronunciation": ["/viː fiːl ˈkɔstət das/"],
          "specific_note": "",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "viel", "meaning": "多", "tail": " " },
            { "text": "kostet", "meaning": "花費", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wie viel kostet das?",
          "translation": "這個多少錢？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "viel", "meaning": "多", "tail": " " },
            { "text": "kostet", "meaning": "花費", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        },
        {
          "sentence": "Was kostet das, bitte?",
          "translation": "麻煩請問這個要多少錢？(另一種常見說法)",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "kostet", "meaning": "花費", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "?" }
          ]
        },
        {
          "sentence": "Zahlen, bitte!",
          "translation": "麻煩結帳！(餐廳吃完飯要買單時必備)",
          "segments": [
            { "text": "Zahlen", "meaning": "付錢/結帳", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "!" }
          ]
        }
      ],
      "usage_note": "購物或超市結帳必備。",
      "image_file": "how_much.png"
    },
    {
      "id": "greet-011",
      "term_zh": "我想要這個",
      "related_terms": [
        {
          "term_target": "Ich möchte das",
          "pronunciation": ["/ɪç ˈmœçtə das/"],
          "specific_note": "直接表達購買意願",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich möchte das, bitte.",
          "translation": "麻煩，我想要這個。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Ich nehme das hier.",
          "translation": "我要買這個。(確定要買的時候常說這句)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "nehme", "meaning": "拿/取 (引申為買)", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Das da, bitte.",
          "translation": "麻煩給我那個。(最偷懶口語的一招，指著東西說)",
          "segments": [
            { "text": "Das", "meaning": "這個", "tail": " " },
            { "text": "da", "meaning": "那裡", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        }
      ],
      "usage_note": "不會講單字沒關係，指著東西加上 das(這個) 或 da(那個) 就能走天下。",
      "image_file": "i_want_this.png"
    },
    {
      "id": "greet-012",
      "term_zh": "請給我...",
      "related_terms": [
        {
          "term_target": "Ich hätte gerne...",
          "pronunciation": ["/ɪç ˈhɛtə ˈgɛʁnə/"],
          "specific_note": "點餐王牌句型",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "hätte", "meaning": "有 (委婉禮貌語氣)", "tail": " " },
            { "text": "gerne", "meaning": "樂意地", "tail": "..." }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich hätte gerne ein Wasser, bitte.",
          "translation": "麻煩請給我一杯水。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "hätte", "meaning": "有", "tail": " " },
            { "text": "gerne", "meaning": "樂意地", "tail": " " },
            { "text": "ein", "meaning": "一個/一杯", "tail": " " },
            { "text": "Wasser", "meaning": "水", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Ich hätte gerne die Speisekarte, bitte.",
          "translation": "麻煩請給我菜單。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "hätte", "meaning": "有", "tail": " " },
            { "text": "gerne", "meaning": "樂意地", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Speisekarte", "meaning": "菜單", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Ein Bier, bitte.",
          "translation": "請給我一杯啤酒。(最直接了當的點餐法)",
          "segments": [
            { "text": "Ein", "meaning": "一杯", "tail": " " },
            { "text": "Bier", "meaning": "啤酒", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國人點餐不太會說「請給我 (Give me)」，用「Ich hätte gerne」(我想要擁有) 才是有禮貌的在地人說法！",
      "image_file": "please_give_me.png"
    },
    {
      "id": "greet-013",
      "term_zh": "這是什麼？",
      "related_terms": [
        {
          "term_target": "Was ist das?",
          "pronunciation": ["/vas ɪst das/"],
          "specific_note": "",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Entschuldigung, was ist das?",
          "translation": "不好意思，請問這是什麼？",
          "segments": [
            { "text": "Entschuldigung", "meaning": "不好意思", "tail": ", " },
            { "text": "was", "meaning": "什麼", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        },
        {
          "sentence": "Was ist das auf Deutsch?",
          "translation": "這個用德文怎麼說？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "auf", "meaning": "用...", "tail": " " },
            { "text": "Deutsch", "meaning": "德語", "tail": "?" }
          ]
        },
        {
          "sentence": "Weißt du, was das ist?",
          "translation": "你知道這是什麼嗎？",
          "segments": [
            { "text": "Weißt", "meaning": "知道", "tail": " " },
            { "text": "du", "meaning": "你", "tail": ", " },
            { "text": "was", "meaning": "什麼", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": "?" }
          ]
        }
      ],
      "usage_note": "指著菜單上看不懂的單字或超市的東西問就對了。",
      "image_file": "what_is_this.png"
    },
    {
      "id": "greet-014",
      "term_zh": "請幫我",
      "related_terms": [
        {
          "term_target": "Können Sie mir helfen?",
          "pronunciation": ["/ˈkœnən ziː miːɐ̯ ˈhɛlfən/"],
          "specific_note": "尋求協助",
          "segments": [
            { "text": "Können", "meaning": "能夠/可以", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "helfen", "meaning": "幫忙", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Entschuldigung, können Sie mir helfen?",
          "translation": "不好意思，您可以幫我一下嗎？",
          "segments": [
            { "text": "Entschuldigung", "meaning": "不好意思", "tail": ", " },
            { "text": "können", "meaning": "能夠", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "helfen", "meaning": "幫忙", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich brauche Hilfe, bitte.",
          "translation": "拜託，我需要幫忙。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "brauche", "meaning": "需要", "tail": " " },
            { "text": "Hilfe", "meaning": "幫忙 (名詞)", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Hilfe!",
          "translation": "救命！(遇到緊急危險狀況時大喊)",
          "segments": [
            { "text": "Hilfe", "meaning": "救命/幫忙", "tail": "!" }
          ]
        }
      ],
      "usage_note": "火車坐錯、找不到路時，德國人多半很樂意幫忙。",
      "image_file": "help_me.png"
    },
    {
      "id": "greet-015",
      "term_zh": "你可以再說一次嗎？",
      "related_terms": [
        {
          "term_target": "Wie bitte?",
          "pronunciation": ["/viː ˈbɪtə/"],
          "specific_note": "萬用神句",
          "segments": [
            { "text": "Wie", "meaning": "什麼/如何", "tail": " " },
            { "text": "bitte", "meaning": "請說", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wie bitte? Ich habe das nicht verstanden.",
          "translation": "你說什麼？我沒聽懂。",
          "segments": [
            { "text": "Wie", "meaning": "什麼", "tail": " " },
            { "text": "bitte", "meaning": "請", "tail": "? " },
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "verstanden", "meaning": "聽懂", "tail": "." }
          ]
        },
        {
          "sentence": "Können Sie das bitte wiederholen?",
          "translation": "可以麻煩您重複一次嗎？(較完整正式的說法)",
          "segments": [
            { "text": "Können", "meaning": "能夠", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": " " },
            { "text": "bitte", "meaning": "麻煩", "tail": " " },
            { "text": "wiederholen", "meaning": "重複", "tail": "?" }
          ]
        },
        {
          "sentence": "Nochmal, bitte.",
          "translation": "麻煩再來一次/再說一次。(很簡短實用)",
          "segments": [
            { "text": "Nochmal", "meaning": "再一次", "tail": ", " },
            { "text": "bitte", "meaning": "麻煩", "tail": "." }
          ]
        }
      ],
      "usage_note": "沒聽清楚時，講一句 Wie bitte? 對方就會自動再講一遍了。",
      "image_file": "say_again.png"
    },
    {
      "id": "greet-016",
      "term_zh": "你可以講慢一點嗎？",
      "related_terms": [
        {
          "term_target": "Bitte sprechen Sie langsamer.",
          "pronunciation": ["/ˈbɪtə ˈʃpʁɛçən ziː ˈlaŋzaːmɐ/"],
          "specific_note": "",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "sprechen", "meaning": "說話", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "langsamer", "meaning": "更慢地", "tail": "." }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bitte sprechen Sie langsamer.",
          "translation": "請您說慢一點。",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "sprechen", "meaning": "說話", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "langsamer", "meaning": "更慢地", "tail": "." }
          ]
        },
        {
          "sentence": "Können Sie bitte etwas langsamer sprechen?",
          "translation": "可以麻煩您講慢一點點嗎？",
          "segments": [
            { "text": "Können", "meaning": "可以", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "bitte", "meaning": "麻煩", "tail": " " },
            { "text": "etwas", "meaning": "一點點", "tail": " " },
            { "text": "langsamer", "meaning": "更慢地", "tail": " " },
            { "text": "sprechen", "meaning": "說話", "tail": "?" }
          ]
        },
        {
          "sentence": "Ein bisschen langsamer, bitte.",
          "translation": "麻煩慢一點點。(不會唸整句時的偷吃步)",
          "segments": [
            { "text": "Ein", "meaning": "一", "tail": " " },
            { "text": "bisschen", "meaning": "點點", "tail": " " },
            { "text": "langsamer", "meaning": "更慢地", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國人說話像機關槍，隨時勇敢打斷請他們講慢一點。",
      "image_file": "speak_slowly.png"
    },
    {
      "id": "greet-017",
      "term_zh": "原來如此",
      "related_terms": [
        {
          "term_target": "Ach so",
          "pronunciation": ["/ax zoː/"],
          "specific_note": "恍然大悟",
          "segments": [
            { "text": "Ach", "meaning": "啊", "tail": " " },
            { "text": "so", "meaning": "這樣/如此", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ach so! Jetzt verstehe ich.",
          "translation": "啊原來如此！我現在懂了。",
          "segments": [
            { "text": "Ach", "meaning": "啊", "tail": " " },
            { "text": "so", "meaning": "這樣", "tail": "! " },
            { "text": "Jetzt", "meaning": "現在", "tail": " " },
            { "text": "verstehe", "meaning": "懂/理解", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Ach so, das ist ja interessant.",
          "translation": "喔是這樣啊，那挺有趣的。",
          "segments": [
            { "text": "Ach", "meaning": "啊", "tail": " " },
            { "text": "so", "meaning": "這樣", "tail": ", " },
            { "text": "das", "meaning": "那", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "ja", "meaning": "(語氣詞)", "tail": " " },
            { "text": "interessant", "meaning": "有趣的", "tail": "." }
          ]
        },
        {
          "sentence": "Ach so ist das.",
          "translation": "原來是這麼一回事。",
          "segments": [
            { "text": "Ach", "meaning": "啊", "tail": " " },
            { "text": "so", "meaning": "這樣", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這件事", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國人聽人講話時超愛發出 Ach so 的聲音，表示有在聽並且理解了。",
      "image_file": "i_see.png"
    },
    {
      "id": "greet-018",
      "term_zh": "早安",
      "related_terms": [
        {
          "term_target": "Guten Morgen",
          "pronunciation": ["/ˈguːtən ˈmɔʁgən/"],
          "specific_note": "",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Morgen", "meaning": "早晨", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Guten Morgen!",
          "translation": "早安！",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Morgen", "meaning": "早晨", "tail": "!" }
          ]
        },
        {
          "sentence": "Morgen!",
          "translation": "早！(家人朋友間的隨性打招呼)",
          "segments": [
            { "text": "Morgen", "meaning": "早晨", "tail": "!" }
          ]
        },
        {
          "sentence": "Guten Morgen zusammen.",
          "translation": "大家早安。",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Morgen", "meaning": "早晨", "tail": " " },
            { "text": "zusammen", "meaning": "大家/一起", "tail": "." }
          ]
        }
      ],
      "usage_note": "大約在中午11點之前使用。",
      "image_file": "good_morning.png"
    },
    {
      "id": "greet-019",
      "term_zh": "晚上好 (晚安)",
      "related_terms": [
        {
          "term_target": "Guten Abend",
          "pronunciation": ["/ˈguːtən ˈaːbənt/"],
          "specific_note": "晚上見面",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Abend", "meaning": "傍晚/晚上", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Guten Abend!",
          "translation": "大家晚安 / 晚上好！",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Abend", "meaning": "晚上", "tail": "!" }
          ]
        },
        {
          "sentence": "Guten Abend, Herr Müller.",
          "translation": "穆勒先生，晚上好。",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Abend", "meaning": "晚上", "tail": ", " },
            { "text": "Herr", "meaning": "先生", "tail": " " },
            { "text": "Müller", "meaning": "穆勒 (姓氏)", "tail": "." }
          ]
        },
        {
          "sentence": "Einen schönen Abend noch!",
          "translation": "祝您有個美好的夜晚！(晚上道別時店員很愛說)",
          "segments": [
            { "text": "Einen", "meaning": "一個", "tail": " " },
            { "text": "schönen", "meaning": "美好的", "tail": " " },
            { "text": "Abend", "meaning": "夜晚", "tail": " " },
            { "text": "noch", "meaning": "還有", "tail": "!" }
          ]
        }
      ],
      "usage_note": "晚上去餐廳吃飯進門要說這句；如果是要睡覺道晚安，則是說 Gute Nacht。",
      "image_file": "good_evening.png"
    },
    {
      "id": "greet-020",
      "term_zh": "再見",
      "related_terms": [
        {
          "term_target": "Tschüss",
          "pronunciation": ["/tʃʏs/"],
          "specific_note": "日常/口語",
          "segments": [
            { "text": "Tschüss", "meaning": "再見/掰掰", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Tschüss! Bis bald.",
          "translation": "掰掰！下次見 / 待會見。",
          "segments": [
            { "text": "Tschüss", "meaning": "掰掰", "tail": "! " },
            { "text": "Bis", "meaning": "直到", "tail": " " },
            { "text": "bald", "meaning": "不久", "tail": "." }
          ]
        },
        {
          "sentence": "Auf Wiedersehen!",
          "translation": "再見！(比較正式，對長輩或店員說)",
          "segments": [
            { "text": "Auf", "meaning": "在...上", "tail": " " },
            { "text": "Wiedersehen", "meaning": "再次相見", "tail": "!" }
          ]
        },
        {
          "sentence": "Schönen Tag noch!",
          "translation": "祝你有美好的一天！(結帳完離開必備神句)",
          "segments": [
            { "text": "Schönen", "meaning": "美好的", "tail": " " },
            { "text": "Tag", "meaning": "一天", "tail": " " },
            { "text": "noch", "meaning": "還有", "tail": "!" }
          ]
        }
      ],
      "usage_note": "日常生活中講 Tschüss 最輕鬆自然，正式場合講 Auf Wiedersehen。",
      "image_file": "goodbye.png"
    },
    {
      "id": "greet-021",
      "term_zh": "你好嗎",
      "related_terms": [
        {
          "term_target": "Wie geht's?",
          "pronunciation": ["/viː geːts/"],
          "specific_note": "日常寒暄",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "geht's", "meaning": "過得/走", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hallo, wie geht's?",
          "translation": "哈囉，最近好嗎？",
          "segments": [
            { "text": "Hallo", "meaning": "哈囉", "tail": ", " },
            { "text": "wie", "meaning": "如何", "tail": " " },
            { "text": "geht's", "meaning": "過得", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie geht es Ihnen?",
          "translation": "您好嗎？(尊稱，對長輩或不熟的人用)",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "geht", "meaning": "過/走", "tail": " " },
            { "text": "es", "meaning": "它 (主詞)", "tail": " " },
            { "text": "Ihnen", "meaning": "您 (與格)", "tail": "?" }
          ]
        },
        {
          "sentence": "Alles gut?",
          "translation": "一切都好嗎？(朋友間超愛講的隨性問候)",
          "segments": [
            { "text": "Alles", "meaning": "一切/全部", "tail": " " },
            { "text": "gut", "meaning": "好的", "tail": "?" }
          ]
        }
      ],
      "usage_note": "德國人問這句是真的想知道你過得好不好，不是單純客套，可以誠實回答。",
      "image_file": "how_are_you.png"
    },
    {
      "id": "greet-022",
      "term_zh": "真的嗎",
      "related_terms": [
        {
          "term_target": "Wirklich?",
          "pronunciation": ["/ˈvɪʁklɪç/"],
          "specific_note": "懷疑/驚訝",
          "segments": [
            { "text": "Wirklich", "meaning": "真的", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wirklich? Bist du sicher?",
          "translation": "真的嗎？你確定？",
          "segments": [
            { "text": "Wirklich", "meaning": "真的", "tail": "? " },
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "sicher", "meaning": "確定的", "tail": "?" }
          ]
        },
        {
          "sentence": "Oh, wirklich? Das ist toll!",
          "translation": "喔，真的嗎？那太棒了！",
          "segments": [
            { "text": "Oh", "meaning": "喔", "tail": ", " },
            { "text": "wirklich", "meaning": "真的", "tail": "? " },
            { "text": "Das", "meaning": "那", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "toll", "meaning": "極好的", "tail": "!" }
          ]
        },
        {
          "sentence": "Echt?",
          "translation": "真的假的？(德國年輕人超級愛用的口語)",
          "segments": [
            { "text": "Echt", "meaning": "真的", "tail": "?" }
          ]
        }
      ],
      "usage_note": "聊天捧場必備，適時回一句 Echt? 氣氛就不會冷場。",
      "image_file": "really_q.png"
    },
    {
      "id": "greet-023",
      "term_zh": "太棒了",
      "related_terms": [
        {
          "term_target": "Super!",
          "pronunciation": ["/ˈzuːpɐ/"],
          "specific_note": "極度讚賞",
          "segments": [
            { "text": "Super", "meaning": "超級好/太棒了", "tail": "!" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist ja super!",
          "translation": "那真是太棒了！",
          "segments": [
            { "text": "Das", "meaning": "那", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "ja", "meaning": "(語氣助詞)", "tail": " " },
            { "text": "super", "meaning": "超級好", "tail": "!" }
          ]
        },
        {
          "sentence": "Super, danke!",
          "translation": "太好了，謝謝！(收到幫忙或拿到東西時常說)",
          "segments": [
            { "text": "Super", "meaning": "超級好", "tail": ", " },
            { "text": "danke", "meaning": "謝謝", "tail": "!" }
          ]
        },
        {
          "sentence": "Perfekt!",
          "translation": "完美 / 太讚了！(德國人非常喜歡講完美)",
          "segments": [
            { "text": "Perfekt", "meaning": "完美的", "tail": "!" }
          ]
        }
      ],
      "usage_note": "Super 在德文裡非常常用，發音是「蘇爬」而不是英文的發音喔。",
      "image_file": "awesome.png"
    },
    {
      "id": "greet-024",
      "term_zh": "很高興認識你",
      "related_terms": [
        {
          "term_target": "Freut mich",
          "pronunciation": ["/fʁɔɪ̯t mɪç/"],
          "specific_note": "初次見面",
          "segments": [
            { "text": "Freut", "meaning": "使高興", "tail": " " },
            { "text": "mich", "meaning": "我", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hallo, freut mich.",
          "translation": "你好，很高興認識你。",
          "segments": [
            { "text": "Hallo", "meaning": "你好", "tail": ", " },
            { "text": "freut", "meaning": "使高興", "tail": " " },
            { "text": "mich", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Freut mich auch.",
          "translation": "我也很高興認識你。(用來回覆對方)",
          "segments": [
            { "text": "Freut", "meaning": "使高興", "tail": " " },
            { "text": "mich", "meaning": "我", "tail": " " },
            { "text": "auch", "meaning": "也", "tail": "." }
          ]
        },
        {
          "sentence": "Schön, dich kennenzulernen.",
          "translation": "很高興認識你。(較完整且溫暖的句子)",
          "segments": [
            { "text": "Schön", "meaning": "美好的", "tail": ", " },
            { "text": "dich", "meaning": "你", "tail": " " },
            { "text": "kennenzulernen", "meaning": "認識", "tail": "." }
          ]
        }
      ],
      "usage_note": "和新朋友握手時，只要簡單微笑說一句 Freut mich 就夠了。",
      "image_file": "nice_to_meet_you.png"
    },
    {
      "id": "greet-025",
      "term_zh": "真可惜",
      "related_terms": [
        {
          "term_target": "Schade",
          "pronunciation": ["/ˈʃaːdə/"],
          "specific_note": "遺憾同情",
          "segments": [
            { "text": "Schade", "meaning": "可惜的/遺憾的", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Oh, wie schade!",
          "translation": "喔，真可惜！",
          "segments": [
            { "text": "Oh", "meaning": "喔", "tail": ", " },
            { "text": "wie", "meaning": "多麼", "tail": " " },
            { "text": "schade", "meaning": "可惜", "tail": "!" }
          ]
        },
        {
          "sentence": "Schade, vielleicht nächstes Mal.",
          "translation": "真可惜，也許下次吧。(被對方拒絕邀請時很有風度的回覆)",
          "segments": [
            { "text": "Schade", "meaning": "可惜", "tail": ", " },
            { "text": "vielleicht", "meaning": "也許", "tail": " " },
            { "text": "nächstes", "meaning": "下一個", "tail": " " },
            { "text": "Mal", "meaning": "次數/回", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist wirklich schade.",
          "translation": "那真的太可惜了。",
          "segments": [
            { "text": "Das", "meaning": "那", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "wirklich", "meaning": "真的", "tail": " " },
            { "text": "schade", "meaning": "可惜", "tail": "." }
          ]
        }
      ],
      "usage_note": "聽到朋友生病不能赴約，或是錯過了火車，這句話非常好用。",
      "image_file": "too_bad.png"
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
          "term_target": "es",
          "pronunciation": ["/ɛs/"],
          "specific_note": "代名詞",
          "segments": [{ "text": "es", "meaning": "它", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Es regnet.",
          "translation": "外面在下雨。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "regnet", "meaning": "下雨", "tail": "." }
          ]
        },
        {
          "sentence": "Es ist kalt.",
          "translation": "天氣很冷。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "kalt", "meaning": "冷的", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist das Buch? Es ist hier.",
          "translation": "書在哪？它在這裡。",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "那本", "tail": " " },
            { "text": "Buch", "meaning": "書", "tail": "? " },
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "ist", "meaning": "是/在", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        }
      ],
      "usage_note": "用來指代天氣或中性的名詞（如 das Buch）。",
      "image_file": "that.png"
    },
    {
      "id": "pro-02",
      "term_zh": "我",
      "related_terms": [
        {
          "term_target": "ich",
          "pronunciation": ["/ɪç/"],
          "specific_note": "",
          "segments": [{ "text": "ich", "meaning": "我", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin Student.",
          "translation": "我是大學生。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "Student", "meaning": "大學生", "tail": "." }
          ]
        },
        {
          "sentence": "Ich liebe dich.",
          "translation": "我愛你。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "liebe", "meaning": "愛", "tail": " " },
            { "text": "dich", "meaning": "你", "tail": "." }
          ]
        },
        {
          "sentence": "Ich weiß es nicht.",
          "translation": "我不知道。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "weiß", "meaning": "知道", "tail": " " },
            { "text": "es", "meaning": "這件事", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        }
      ],
      "usage_note": "與英文不同，德文的 ich 只有在句首才需要大寫，尾音發氣音。",
      "image_file": "i.png"
    },
    {
      "id": "pro-03",
      "term_zh": "你",
      "related_terms": [
        {
          "term_target": "du",
          "pronunciation": ["/duː/"],
          "specific_note": "",
          "segments": [{ "text": "du", "meaning": "你", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Bist du bereit?",
          "translation": "你準備好了嗎？",
          "segments": [
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "bereit", "meaning": "準備好的", "tail": "?" }
          ]
        },
        {
          "sentence": "Du bist sehr nett.",
          "translation": "你人真好。",
          "segments": [
            { "text": "Du", "meaning": "你", "tail": " " },
            { "text": "bist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "nett", "meaning": "親切的", "tail": "." }
          ]
        },
        {
          "sentence": "Was machst du?",
          "translation": "你在做什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "machst", "meaning": "做", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        }
      ],
      "usage_note": "du 通常只對家人、朋友或平輩使用，對長輩或不熟的人請用尊稱 Sie。",
      "image_file": "you.png"
    },
    {
      "id": "pro-04",
      "term_zh": "他",
      "related_terms": [
        {
          "term_target": "er",
          "pronunciation": ["/eːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "er", "meaning": "他", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Er ist mein Bruder.",
          "translation": "他是我哥哥 / 弟弟。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Bruder", "meaning": "兄弟", "tail": "." }
          ]
        },
        {
          "sentence": "Was macht er?",
          "translation": "他在做什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "macht", "meaning": "做", "tail": " " },
            { "text": "er", "meaning": "他", "tail": "?" }
          ]
        },
        {
          "sentence": "Er kommt aus Taiwan.",
          "translation": "他來自台灣。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "kommt", "meaning": "來自", "tail": " " },
            { "text": "aus", "meaning": "從", "tail": " " },
            { "text": "Taiwan", "meaning": "台灣", "tail": "." }
          ]
        }
      ],
      "usage_note": "指男性人物，或是陽性名詞。",
      "image_file": "he.png"
    },
    {
      "id": "pro-05",
      "term_zh": "他的",
      "related_terms": [
        {
          "term_target": "sein",
          "pronunciation": ["/zaɪ̯n/"],
          "specific_note": "",
          "segments": [{ "text": "sein", "meaning": "他的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist sein Auto.",
          "translation": "這是他的車。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sein", "meaning": "他的", "tail": " " },
            { "text": "Auto", "meaning": "車子", "tail": "." }
          ]
        },
        {
          "sentence": "Sein Hund ist süß.",
          "translation": "他的狗很可愛。",
          "segments": [
            { "text": "Sein", "meaning": "他的", "tail": " " },
            { "text": "Hund", "meaning": "狗", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "süß", "meaning": "可愛的/甜的", "tail": "." }
          ]
        },
        {
          "sentence": "Wie ist sein Name?",
          "translation": "他叫什麼名字？",
          "segments": [
            { "text": "Wie", "meaning": "什麼 (如何)", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sein", "meaning": "他的", "tail": " " },
            { "text": "Name", "meaning": "名字", "tail": "?" }
          ]
        }
      ],
      "usage_note": "所有格 sein 會根據後面接的物品「性別」改變字尾，初學者先記住最基礎的 sein 即可。",
      "image_file": "his.png"
    },
    {
      "id": "pro-06",
      "term_zh": "我們",
      "related_terms": [
        {
          "term_target": "wir",
          "pronunciation": ["/viːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "wir", "meaning": "我們", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wir gehen ins Kino.",
          "translation": "我們要去電影院。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "gehen", "meaning": "去/走", "tail": " " },
            { "text": "ins", "meaning": "進入", "tail": " " },
            { "text": "Kino", "meaning": "電影院", "tail": "." }
          ]
        },
        {
          "sentence": "Wir sind Freunde.",
          "translation": "我們是朋友。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "Freunde", "meaning": "朋友 (複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Haben wir Zeit?",
          "translation": "我們有時間嗎？",
          "segments": [
            { "text": "Haben", "meaning": "有", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "Zeit", "meaning": "時間", "tail": "?" }
          ]
        }
      ],
      "usage_note": "第一人稱複數。",
      "image_file": "we.png"
    },
    {
      "id": "pro-07",
      "term_zh": "她",
      "related_terms": [
        {
          "term_target": "sie",
          "pronunciation": ["/ziː/"],
          "specific_note": "",
          "segments": [{ "text": "sie", "meaning": "她", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sie ist meine Schwester.",
          "translation": "她是我姐姐 / 妹妹。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "Schwester", "meaning": "姐妹", "tail": "." }
          ]
        },
        {
          "sentence": "Sie trinkt gerne Kaffee.",
          "translation": "她喜歡喝咖啡。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "trinkt", "meaning": "喝", "tail": " " },
            { "text": "gerne", "meaning": "喜歡", "tail": " " },
            { "text": "Kaffee", "meaning": "咖啡", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist sie?",
          "translation": "她在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sie", "meaning": "她", "tail": "?" }
          ]
        }
      ],
      "usage_note": "發音類似英文的 Z 加上長音 e。德文的「她」跟「他們」長得一樣，只能靠後面的動詞長相來分辨。",
      "image_file": "she.png"
    },
    {
      "id": "pro-08",
      "term_zh": "他們",
      "related_terms": [
        {
          "term_target": "sie",
          "pronunciation": ["/ziː/"],
          "specific_note": "",
          "segments": [{ "text": "sie", "meaning": "他們", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sie sind Studenten.",
          "translation": "他們是大學生。",
          "segments": [
            { "text": "Sie", "meaning": "他們", "tail": " " },
            { "text": "sind", "meaning": "是 (複數)", "tail": " " },
            { "text": "Studenten", "meaning": "大學生 (複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Sie kommen morgen.",
          "translation": "他們明天會來。",
          "segments": [
            { "text": "Sie", "meaning": "他們", "tail": " " },
            { "text": "kommen", "meaning": "來 (複數)", "tail": " " },
            { "text": "morgen", "meaning": "明天", "tail": "." }
          ]
        },
        {
          "sentence": "Wohnen sie hier?",
          "translation": "他們住這裡嗎？",
          "segments": [
            { "text": "Wohnen", "meaning": "居住", "tail": " " },
            { "text": "sie", "meaning": "他們", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "?" }
          ]
        }
      ],
      "usage_note": "注意，如果 sie 字首大寫變成 Sie，意思就變成尊稱的「您 / 您們」。",
      "image_file": "they.png"
    },
    {
      "id": "pro-09",
      "term_zh": "這個",
      "related_terms": [
        {
          "term_target": "dieses",
          "pronunciation": ["/ˈdiːzəs/"],
          "specific_note": "",
          "segments": [{ "text": "dieses", "meaning": "這個", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Dieses Buch ist gut.",
          "translation": "這本書很好看。",
          "segments": [
            { "text": "Dieses", "meaning": "這個", "tail": " " },
            { "text": "Buch", "meaning": "書", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "gut", "meaning": "好的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich möchte dieses hier.",
          "translation": "我想要這一個。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "dieses", "meaning": "這個", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Was ist dieses Ding?",
          "translation": "這是什麼東西？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "dieses", "meaning": "這個", "tail": " " },
            { "text": "Ding", "meaning": "東西", "tail": "?" }
          ]
        }
      ],
      "usage_note": "用來強調距離較近的「這個」。",
      "image_file": "this.png"
    },
    {
      "id": "pro-10",
      "term_zh": "那個",
      "related_terms": [
        {
          "term_target": "das",
          "pronunciation": ["/das/"],
          "specific_note": "",
          "segments": [{ "text": "das", "meaning": "那個", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist mein Handy.",
          "translation": "那是我的手機。",
          "segments": [
            { "text": "Das", "meaning": "那", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Handy", "meaning": "手機", "tail": "." }
          ]
        },
        {
          "sentence": "Ich kenne das nicht.",
          "translation": "我不知道那個東西。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "kenne", "meaning": "認識/知道", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Das stimmt.",
          "translation": "的確是那樣/那個沒錯。",
          "segments": [
            { "text": "Das", "meaning": "那(件事)", "tail": " " },
            { "text": "stimmt", "meaning": "正確的", "tail": "." }
          ]
        }
      ],
      "usage_note": "das 是口語中最萬用的指代詞，不管是這個還是那個，很多時候講 das 都能通。",
      "image_file": "that.png"
    },
    {
      "id": "pro-11",
      "term_zh": "她的",
      "related_terms": [
        {
          "term_target": "ihr",
          "pronunciation": ["/iːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "ihr", "meaning": "她的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist ihr Buch.",
          "translation": "這是她的書。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "ihr", "meaning": "她的", "tail": " " },
            { "text": "Buch", "meaning": "書", "tail": "." }
          ]
        },
        {
          "sentence": "Ihr Haar ist lang.",
          "translation": "她的頭髮很長。",
          "segments": [
            { "text": "Ihr", "meaning": "她的", "tail": " " },
            { "text": "Haar", "meaning": "頭髮", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "lang", "meaning": "長的", "tail": "." }
          ]
        },
        {
          "sentence": "Ihr Bruder ist nett.",
          "translation": "她的兄弟人很親切。",
          "segments": [
            { "text": "Ihr", "meaning": "她的", "tail": " " },
            { "text": "Bruder", "meaning": "兄弟", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "nett", "meaning": "親切的", "tail": "." }
          ]
        }
      ],
      "usage_note": "女性的所有格。",
      "image_file": "her.png"
    },
    {
      "id": "pro-12",
      "term_zh": "你的",
      "related_terms": [
        {
          "term_target": "dein",
          "pronunciation": ["/daɪ̯n/"],
          "specific_note": "",
          "segments": [{ "text": "dein", "meaning": "你的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wie ist dein Name?",
          "translation": "你叫什麼名字？",
          "segments": [
            { "text": "Wie", "meaning": "什麼(如何)", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "dein", "meaning": "你的", "tail": " " },
            { "text": "Name", "meaning": "名字", "tail": "?" }
          ]
        },
        {
          "sentence": "Ist das dein Handy?",
          "translation": "這是你的手機嗎？",
          "segments": [
            { "text": "Ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "dein", "meaning": "你的", "tail": " " },
            { "text": "Handy", "meaning": "手機", "tail": "?" }
          ]
        },
        {
          "sentence": "Dein Deutsch ist sehr gut.",
          "translation": "你的德文很好。",
          "segments": [
            { "text": "Dein", "meaning": "你的", "tail": " " },
            { "text": "Deutsch", "meaning": "德文", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "gut", "meaning": "好的", "tail": "." }
          ]
        }
      ],
      "usage_note": "所有格。跟長輩對話時，請改用尊稱的 Ihr。",
      "image_file": "your.png"
    },
    {
      "id": "pro-13",
      "term_zh": "他們的",
      "related_terms": [
        {
          "term_target": "ihr",
          "pronunciation": ["/iːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "ihr", "meaning": "他們的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ihr Haus ist groß.",
          "translation": "他們的房子很大。",
          "segments": [
            { "text": "Ihr", "meaning": "他們的", "tail": " " },
            { "text": "Haus", "meaning": "房子", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "groß", "meaning": "大的", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist ihr Auto?",
          "translation": "他們的車在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "ihr", "meaning": "他們的", "tail": " " },
            { "text": "Auto", "meaning": "車", "tail": "?" }
          ]
        },
        {
          "sentence": "Das sind ihre Kinder.",
          "translation": "這些是他們的小孩。",
          "segments": [
            { "text": "Das", "meaning": "那些", "tail": " " },
            { "text": "sind", "meaning": "是 (複數)", "tail": " " },
            { "text": "ihre", "meaning": "他們的", "tail": " " },
            { "text": "Kinder", "meaning": "小孩(複數)", "tail": "." }
          ]
        }
      ],
      "usage_note": "長得跟「她的」一模一樣，不用懷疑，真的都是 ihr。",
      "image_file": "their.png"
    },
    {
      "id": "pro-14",
      "term_zh": "我們的",
      "related_terms": [
        {
          "term_target": "unser",
          "pronunciation": ["/ˈʊnzɐ/"],
          "specific_note": "",
          "segments": [{ "text": "unser", "meaning": "我們的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist unser Haus.",
          "translation": "這是我們的家。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "unser", "meaning": "我們的", "tail": " " },
            { "text": "Haus", "meaning": "房子", "tail": "." }
          ]
        },
        {
          "sentence": "Unser Zug hat Verspätung.",
          "translation": "我們的火車誤點了。",
          "segments": [
            { "text": "Unser", "meaning": "我們的", "tail": " " },
            { "text": "Zug", "meaning": "火車", "tail": " " },
            { "text": "hat", "meaning": "有", "tail": " " },
            { "text": "Verspätung", "meaning": "誤點/遲延", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist unser Tisch?",
          "translation": "我們的桌子 (座位) 在哪？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "unser", "meaning": "我們的", "tail": " " },
            { "text": "Tisch", "meaning": "桌子", "tail": "?" }
          ]
        }
      ],
      "usage_note": "所有格。",
      "image_file": "our.png"
    },
    {
      "id": "pro-15",
      "term_zh": "這些",
      "related_terms": [
        {
          "term_target": "diese",
          "pronunciation": ["/ˈdiːzə/"],
          "specific_note": "",
          "segments": [{ "text": "diese", "meaning": "這些", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Diese Äpfel sind süß.",
          "translation": "這些蘋果很甜。",
          "segments": [
            { "text": "Diese", "meaning": "這些", "tail": " " },
            { "text": "Äpfel", "meaning": "蘋果 (複數)", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "süß", "meaning": "甜的", "tail": "." }
          ]
        },
        {
          "sentence": "Gehören diese dir?",
          "translation": "這些是你的嗎？",
          "segments": [
            { "text": "Gehören", "meaning": "屬於", "tail": " " },
            { "text": "diese", "meaning": "這些", "tail": " " },
            { "text": "dir", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich mag diese Schuhe.",
          "translation": "我喜歡這雙鞋。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "diese", "meaning": "這些", "tail": " " },
            { "text": "Schuhe", "meaning": "鞋子", "tail": "." }
          ]
        }
      ],
      "usage_note": "指近處複數的東西。",
      "image_file": "these.png"
    },
    {
      "id": "pro-16",
      "term_zh": "那些",
      "related_terms": [
        {
          "term_target": "die da",
          "pronunciation": ["/diː da/"],
          "specific_note": "",
          "segments": [
            { "text": "die", "meaning": "那些", "tail": " " },
            { "text": "da", "meaning": "那裡", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wer sind die da?",
          "translation": "那邊那些人是誰？",
          "segments": [
            { "text": "Wer", "meaning": "誰", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "die", "meaning": "那些", "tail": " " },
            { "text": "da", "meaning": "那邊", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich möchte die da.",
          "translation": "我想要那些。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "die", "meaning": "那些", "tail": " " },
            { "text": "da", "meaning": "那邊", "tail": "." }
          ]
        },
        {
          "sentence": "Die da sind sehr teuer.",
          "translation": "那邊那些很貴。",
          "segments": [
            { "text": "Die", "meaning": "那些", "tail": " " },
            { "text": "da", "meaning": "那邊", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "teuer", "meaning": "貴的", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國人口語不太講 jene (那些)，最常在 die 後面加個 da (那邊)，用來指遠處複數的東西。",
      "image_file": "those.png"
    }
  ]
},
 {
  "id": "verbs",
  "name": "動詞",
  "items": [
    {
      "id": "v-01",
      "term_zh": "是",
      "related_terms": [
        {
          "term_target": "bin",
          "pronunciation": ["/bɪn/"],
          "specific_note": "搭配 ich (我)",
          "segments": [{ "text": "bin", "meaning": "是", "tail": "" }]
        },
        {
          "term_target": "bist",
          "pronunciation": ["/bɪst/"],
          "specific_note": "搭配 du (你)",
          "segments": [{ "text": "bist", "meaning": "是", "tail": "" }]
        },
        {
          "term_target": "ist",
          "pronunciation": ["/ɪst/"],
          "specific_note": "搭配 er/sie/es (他/她/它)",
          "segments": [{ "text": "ist", "meaning": "是", "tail": "" }]
        },
        {
          "term_target": "sind",
          "pronunciation": ["/zɪnt/"],
          "specific_note": "搭配 wir/sie/Sie (我們/他們/您)",
          "segments": [{ "text": "sind", "meaning": "是", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin müde.",
          "translation": "我很累。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "müde", "meaning": "疲倦的", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist gut.",
          "translation": "這很好。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "gut", "meaning": "好的", "tail": "." }
          ]
        },
        {
          "sentence": "Wir sind hier.",
          "translation": "我們在這裡。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        }
      ],
      "usage_note": "這就是德文的 Be 動詞 (原型為 sein)，會跟著主詞變身。",
      "image_file": "be.png"
    },
    {
      "id": "v-02",
      "term_zh": "有（擁有）",
      "related_terms": [
        {
          "term_target": "haben",
          "pronunciation": ["/ˈhaːbən/"],
          "specific_note": "原型動詞",
          "segments": [{ "text": "haben", "meaning": "有", "tail": "" }]
        },
        {
          "term_target": "habe",
          "pronunciation": ["/ˈhaːbə/"],
          "specific_note": "搭配 ich (我)",
          "segments": [{ "text": "habe", "meaning": "有", "tail": "" }]
        },
        {
          "term_target": "hat",
          "pronunciation": ["/hat/"],
          "specific_note": "搭配 er/sie/es (他/她/它)",
          "segments": [{ "text": "hat", "meaning": "有", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich habe Hunger.",
          "translation": "我肚子餓。(直譯：我擁有飢餓，德國人最常用的說法)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "Hunger", "meaning": "飢餓", "tail": "." }
          ]
        },
        {
          "sentence": "Hast du Zeit?",
          "translation": "你有空嗎？(直譯：你有時間嗎)",
          "segments": [
            { "text": "Hast", "meaning": "有", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "Zeit", "meaning": "時間", "tail": "?" }
          ]
        },
        {
          "sentence": "Er hat ein Auto.",
          "translation": "他有一台車。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "hat", "meaning": "有", "tail": " " },
            { "text": "ein", "meaning": "一台", "tail": " " },
            { "text": "Auto", "meaning": "車", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國人表達肚子餓、口渴、有時間，都很習慣用 haben (有) 這個動詞。",
      "image_file": "have.png"
    },
    {
      "id": "v-03",
      "term_zh": "去 / 走",
      "related_terms": [
        {
          "term_target": "gehen",
          "pronunciation": ["/ˈɡeːən/"],
          "specific_note": "",
          "segments": [{ "text": "gehen", "meaning": "去/走", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Lass uns gehen!",
          "translation": "我們走吧！",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": "!" }
          ]
        },
        {
          "sentence": "Ich gehe nach Hause.",
          "translation": "我要回家了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "gehe", "meaning": "去/走", "tail": " " },
            { "text": "nach", "meaning": "往", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Wie geht's?",
          "translation": "你好嗎？(直譯：它走得如何？非常道地的問候)",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "geht's", "meaning": "走/過得", "tail": "?" }
          ]
        }
      ],
      "usage_note": "gehen 除了走路、前往，也是德國人每天問候彼此「過得好不好」的核心單字。",
      "image_file": "go.png"
    },
    {
      "id": "v-04",
      "term_zh": "得到／拿",
      "related_terms": [
        {
          "term_target": "bekommen",
          "pronunciation": ["/bəˈkɔmən/"],
          "specific_note": "收到/得到",
          "segments": [{ "text": "bekommen", "meaning": "得到/收到", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hast du meine E-Mail bekommen?",
          "translation": "你有收到我的信嗎？",
          "segments": [
            { "text": "Hast", "meaning": "(助動詞)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "E-Mail", "meaning": "電子郵件", "tail": " " },
            { "text": "bekommen", "meaning": "收到", "tail": "?" }
          ]
        },
        {
          "sentence": "Was bekommen Sie?",
          "translation": "您要點什麼？(在餐廳或麵包店，店員常這樣問)",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "bekommen", "meaning": "得到", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich bekomme ein Bier, bitte.",
          "translation": "我要一杯啤酒，麻煩了。(超道地点餐法)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bekomme", "meaning": "得到", "tail": " " },
            { "text": "ein", "meaning": "一杯", "tail": " " },
            { "text": "Bier", "meaning": "啤酒", "tail": ", " },
            { "text": "bitte", "meaning": "麻煩", "tail": "." }
          ]
        }
      ],
      "usage_note": "這字長得很像英文的 become(變成)，但德文意思是「得到 / 收到」，千萬別搞混喔！",
      "image_file": "get.png"
    },
    {
      "id": "v-05",
      "term_zh": "做",
      "related_terms": [
        {
          "term_target": "machen",
          "pronunciation": ["/ˈmaxən/"],
          "specific_note": "",
          "segments": [{ "text": "machen", "meaning": "做", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Was machst du?",
          "translation": "你在做什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "machst", "meaning": "做", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Das macht nichts.",
          "translation": "沒關係 / 不礙事。",
          "segments": [
            { "text": "Das", "meaning": "那", "tail": " " },
            { "text": "macht", "meaning": "做", "tail": " " },
            { "text": "nichts", "meaning": "沒有什麼", "tail": "." }
          ]
        },
        {
          "sentence": "Mach's gut!",
          "translation": "保重！(朋友道別時超級常說)",
          "segments": [
            { "text": "Mach's", "meaning": "做它 (mach es)", "tail": " " },
            { "text": "gut", "meaning": "好地", "tail": "!" }
          ]
        }
      ],
      "usage_note": "德文的 machen 同時包含了英文 do 跟 make 的意思，是超萬用動詞。",
      "image_file": "do.png"
    },
    {
      "id": "v-06",
      "term_zh": "說（講）",
      "related_terms": [
        {
          "term_target": "sagen",
          "pronunciation": ["/ˈzaːɡən/"],
          "specific_note": "",
          "segments": [{ "text": "sagen", "meaning": "說", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Was hast du gesagt?",
          "translation": "你剛剛說什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "hast", "meaning": "(助動詞)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "gesagt", "meaning": "說 (過去分詞)", "tail": "?" }
          ]
        },
        {
          "sentence": "Sag mir die Wahrheit.",
          "translation": "告訴我真相。",
          "segments": [
            { "text": "Sag", "meaning": "說", "tail": " " },
            { "text": "mir", "meaning": "對我", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Wahrheit", "meaning": "真相", "tail": "." }
          ]
        },
        {
          "sentence": "Sag mal, kommst du morgen?",
          "translation": "我說啊 (欸問你喔)，你明天會來嗎？",
          "segments": [
            { "text": "Sag", "meaning": "說", "tail": " " },
            { "text": "mal", "meaning": "一下", "tail": ", " },
            { "text": "kommst", "meaning": "來", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "morgen", "meaning": "明天", "tail": "?" }
          ]
        }
      ],
      "usage_note": "口語中很常用 Sag mal (說一下) 當作開啟話題的發語詞，類似中文的「欸問你喔」。",
      "image_file": "say.png"
    },
    {
      "id": "v-07",
      "term_zh": "知道",
      "related_terms": [
        {
          "term_target": "wissen",
          "pronunciation": ["/ˈvɪsən/"],
          "specific_note": "知道事情",
          "segments": [{ "text": "wissen", "meaning": "知道", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich weiß es nicht.",
          "translation": "我不知道。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "weiß", "meaning": "知道", "tail": " " },
            { "text": "es", "meaning": "這件事", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Weißt du was?",
          "translation": "你知道嗎？(用來準備講八卦或分享消息)",
          "segments": [
            { "text": "Weißt", "meaning": "知道", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "was", "meaning": "什麼", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich kenne ihn.",
          "translation": "我認識他。(知道某人/某地要用 kennen 這個字)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "kenne", "meaning": "認識/熟悉", "tail": " " },
            { "text": "ihn", "meaning": "他", "tail": "." }
          ]
        }
      ],
      "usage_note": "知道一件事用 wissen (ich weiß)，認識一個人或熟悉一個地方要用 kennen。",
      "image_file": "know.png"
    },
    {
      "id": "v-08",
      "term_zh": "想／思考 / 認為",
      "related_terms": [
        {
          "term_target": "denken",
          "pronunciation": ["/ˈdɛŋkən/"],
          "specific_note": "思考",
          "segments": [{ "text": "denken", "meaning": "想", "tail": "" }]
        },
        {
          "term_target": "glauben",
          "pronunciation": ["/ˈɡlaʊ̯bən/"],
          "specific_note": "相信/覺得",
          "segments": [{ "text": "glauben", "meaning": "認為/相信", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich glaube schon.",
          "translation": "我想是吧 / 我也這麼覺得。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "glaube", "meaning": "相信/認為", "tail": " " },
            { "text": "schon", "meaning": "已經 (此處做加強語氣)", "tail": "." }
          ]
        },
        {
          "sentence": "Was denkst du?",
          "translation": "你覺得呢？(詢問意見)",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "denkst", "meaning": "想", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich denke an dich.",
          "translation": "我在想你。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "denke", "meaning": "想", "tail": " " },
            { "text": "an", "meaning": "在...上 (搭配介系詞)", "tail": " " },
            { "text": "dich", "meaning": "你", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達「我覺得...」的時候，德國人更常使用 glauben (相信) 而不是 denken (大腦思考)。",
      "image_file": "think.png"
    },
    {
      "id": "v-09",
      "term_zh": "看見",
      "related_terms": [
        {
          "term_target": "sehen",
          "pronunciation": ["/ˈzeːən/"],
          "specific_note": "",
          "segments": [{ "text": "sehen", "meaning": "看見", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Lass mal sehen.",
          "translation": "讓我看看。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "mal", "meaning": "一下", "tail": " " },
            { "text": "sehen", "meaning": "看見", "tail": "." }
          ]
        },
        {
          "sentence": "Schön dich zu sehen.",
          "translation": "很高興見到你。",
          "segments": [
            { "text": "Schön", "meaning": "美好的", "tail": " " },
            { "text": "dich", "meaning": "你", "tail": " " },
            { "text": "zu", "meaning": "去", "tail": " " },
            { "text": "sehen", "meaning": "看見", "tail": "." }
          ]
        },
        {
          "sentence": "Ich sehe nichts.",
          "translation": "我什麼都沒看到。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "sehe", "meaning": "看見", "tail": " " },
            { "text": "nichts", "meaning": "沒有東西", "tail": "." }
          ]
        }
      ],
      "usage_note": "肉眼自然地看見。",
      "image_file": "see.png"
    },
    {
      "id": "v-10",
      "term_zh": "做出（製造）",
      "related_terms": [
        {
          "term_target": "machen",
          "pronunciation": ["/ˈmaxən/"],
          "specific_note": "",
          "segments": [{ "text": "machen", "meaning": "製作/做", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich mache Kaffee.",
          "translation": "我泡咖啡。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mache", "meaning": "製作/做", "tail": " " },
            { "text": "Kaffee", "meaning": "咖啡", "tail": "." }
          ]
        },
        {
          "sentence": "Das macht Spaß!",
          "translation": "那很有趣！(直譯：這製造了樂趣，超常講)",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "macht", "meaning": "製造", "tail": " " },
            { "text": "Spaß", "meaning": "樂趣", "tail": "!" }
          ]
        },
        {
          "sentence": "Mach dir keine Sorgen.",
          "translation": "別擔心。",
          "segments": [
            { "text": "Mach", "meaning": "做", "tail": " " },
            { "text": "dir", "meaning": "給自己", "tail": " " },
            { "text": "keine", "meaning": "沒有", "tail": " " },
            { "text": "Sorgen", "meaning": "擔憂", "tail": "." }
          ]
        }
      ],
      "usage_note": "剛剛提過 machen 兼具 do 跟 make，這裡示範它「製造/產生」的常見用法。",
      "image_file": "make.png"
    },
    {
      "id": "v-11",
      "term_zh": "來",
      "related_terms": [
        {
          "term_target": "kommen",
          "pronunciation": ["/ˈkɔmən/"],
          "specific_note": "",
          "segments": [{ "text": "kommen", "meaning": "來", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Komm her!",
          "translation": "過來這裡！",
          "segments": [
            { "text": "Komm", "meaning": "來", "tail": " " },
            { "text": "her", "meaning": "朝這邊", "tail": "!" }
          ]
        },
        {
          "sentence": "Woher kommst du?",
          "translation": "你來自哪裡？(認識新朋友必問題)",
          "segments": [
            { "text": "Woher", "meaning": "從哪裡", "tail": " " },
            { "text": "kommst", "meaning": "來", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich komme gleich.",
          "translation": "我馬上來。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "komme", "meaning": "來", "tail": " " },
            { "text": "gleich", "meaning": "馬上/立刻", "tail": "." }
          ]
        }
      ],
      "usage_note": "過來，或是表達自己的國籍出處。",
      "image_file": "come.png"
    },
    {
      "id": "v-12",
      "term_zh": "需要",
      "related_terms": [
        {
          "term_target": "brauchen",
          "pronunciation": ["/ˈbʁaʊ̯xən/"],
          "specific_note": "",
          "segments": [{ "text": "brauchen", "meaning": "需要", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich brauche Hilfe.",
          "translation": "我需要幫忙。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "brauche", "meaning": "需要", "tail": " " },
            { "text": "Hilfe", "meaning": "幫忙 (名詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Brauchst du etwas?",
          "translation": "你需要什麼嗎？",
          "segments": [
            { "text": "Brauchst", "meaning": "需要", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "etwas", "meaning": "某物/什麼", "tail": "?" }
          ]
        },
        {
          "sentence": "Das brauche ich nicht.",
          "translation": "我不需要那個。",
          "segments": [
            { "text": "Das", "meaning": "那個", "tail": " " },
            { "text": "brauche", "meaning": "需要", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        }
      ],
      "usage_note": "在超市或商店若店員問你要不要紙袋，你可以回 Das brauche ich nicht (我不用)。",
      "image_file": "need.png"
    },
    {
      "id": "v-13",
      "term_zh": "使用",
      "related_terms": [
        {
          "term_target": "benutzen",
          "pronunciation": ["/bəˈnʊt͡sən/"],
          "specific_note": "",
          "segments": [{ "text": "benutzen", "meaning": "使用", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Darf ich das benutzen?",
          "translation": "我可以用這個嗎？",
          "segments": [
            { "text": "Darf", "meaning": "允許/可以", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "benutzen", "meaning": "使用", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich benutze mein Handy.",
          "translation": "我在用我的手機。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "benutze", "meaning": "使用", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Handy", "meaning": "手機", "tail": "." }
          ]
        },
        {
          "sentence": "Wie benutzt man das?",
          "translation": "這個要怎麼用？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "benutzt", "meaning": "使用", "tail": " " },
            { "text": "man", "meaning": "人們 (泛指一般人)", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        }
      ],
      "usage_note": "利用工具或物品。",
      "image_file": "use.png"
    },
    {
      "id": "v-14",
      "term_zh": "找到 / 覺得",
      "related_terms": [
        {
          "term_target": "finden",
          "pronunciation": ["/ˈfɪndən/"],
          "specific_note": "",
          "segments": [{ "text": "finden", "meaning": "找到/覺得", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich finde meine Schlüssel nicht.",
          "translation": "我找不到我的鑰匙。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "finde", "meaning": "找到", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "Schlüssel", "meaning": "鑰匙", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Wie findest du das?",
          "translation": "你覺得這個怎麼樣？(這句超好用，德國人天天講)",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "findest", "meaning": "覺得/看", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich finde das toll.",
          "translation": "我覺得這很棒。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "finde", "meaning": "覺得", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "toll", "meaning": "極好的", "tail": "." }
          ]
        }
      ],
      "usage_note": "除了尋找物品，finden 在德文中更常用來表達「你對某人某事的看法或感覺」。",
      "image_file": "find.png"
    },
    {
      "id": "v-15",
      "term_zh": "給 / 有",
      "related_terms": [
        {
          "term_target": "geben",
          "pronunciation": ["/ˈɡeːbən/"],
          "specific_note": "",
          "segments": [{ "text": "geben", "meaning": "給", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Gib mir das.",
          "translation": "給我那個。",
          "segments": [
            { "text": "Gib", "meaning": "給", "tail": " " },
            { "text": "mir", "meaning": "對我", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": "." }
          ]
        },
        {
          "sentence": "Es gibt ein Problem.",
          "translation": "有一個問題。(Es gibt = There is/are，必考重點)",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "gibt", "meaning": "給", "tail": " " },
            { "text": "ein", "meaning": "一個", "tail": " " },
            { "text": "Problem", "meaning": "問題", "tail": "." }
          ]
        },
        {
          "sentence": "Können Sie mir einen Tipp geben?",
          "translation": "能給我個建議/提示嗎？",
          "segments": [
            { "text": "Können", "meaning": "能", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "mir", "meaning": "對我", "tail": " " },
            { "text": "einen", "meaning": "一個", "tail": " " },
            { "text": "Tipp", "meaning": "建議", "tail": " " },
            { "text": "geben", "meaning": "給", "tail": "?" }
          ]
        }
      ],
      "usage_note": "這字除了「給予」，最重要的是片語 Es gibt，等同英文的 There is / There are (存在有)。",
      "image_file": "give.png"
    },
    {
      "id": "v-16",
      "term_zh": "告訴",
      "related_terms": [
        {
          "term_target": "erzählen",
          "pronunciation": ["/ɛɐ̯ˈt͡sɛːlən/"],
          "specific_note": "",
          "segments": [{ "text": "erzählen", "meaning": "告訴/敘述", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Erzähl mir mehr!",
          "translation": "多跟我說一些！",
          "segments": [
            { "text": "Erzähl", "meaning": "告訴/講", "tail": " " },
            { "text": "mir", "meaning": "對我", "tail": " " },
            { "text": "mehr", "meaning": "更多", "tail": "!" }
          ]
        },
        {
          "sentence": "Sag mir Bescheid.",
          "translation": "到時候告訴我 / 通知我一下。(非常實用的慣用語)",
          "segments": [
            { "text": "Sag", "meaning": "說", "tail": " " },
            { "text": "mir", "meaning": "對我", "tail": " " },
            { "text": "Bescheid", "meaning": "通知/答覆", "tail": "." }
          ]
        },
        {
          "sentence": "Das hat er mir erzählt.",
          "translation": "他是這麼跟我說的。",
          "segments": [
            { "text": "Das", "meaning": "那(件事)", "tail": " " },
            { "text": "hat", "meaning": "(助動詞)", "tail": " " },
            { "text": "er", "meaning": "他", "tail": " " },
            { "text": "mir", "meaning": "對我", "tail": " " },
            { "text": "erzählt", "meaning": "敘述 (過去分詞)", "tail": "." }
          ]
        }
      ],
      "usage_note": "如果要請對方「說個故事或交代事情」會用 erzählen；如果是「通知某事」，德國人常用 sagen 搭配 Bescheid。",
      "image_file": "tell.png"
    },
    {
      "id": "v-17",
      "term_zh": "工作",
      "related_terms": [
        {
          "term_target": "arbeiten",
          "pronunciation": ["/ˈaʁbaɪ̯tən/"],
          "specific_note": "",
          "segments": [{ "text": "arbeiten", "meaning": "工作", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich arbeite hier.",
          "translation": "我在這工作。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "arbeite", "meaning": "工作", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Wo arbeitest du?",
          "translation": "你在哪裡工作？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "arbeitest", "meaning": "工作", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich muss heute arbeiten.",
          "translation": "我今天必須上班。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": " " },
            { "text": "arbeiten", "meaning": "工作", "tail": "." }
          ]
        }
      ],
      "usage_note": "上班、工作。",
      "image_file": "work.png"
    },
    {
      "id": "v-18",
      "term_zh": "喜歡",
      "related_terms": [
        {
          "term_target": "mögen",
          "pronunciation": ["/ˈmøːɡən/"],
          "specific_note": "",
          "segments": [{ "text": "mögen", "meaning": "喜歡", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich mag das.",
          "translation": "我喜歡這個。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": "." }
          ]
        },
        {
          "sentence": "Magst du Kaffee?",
          "translation": "你喜歡咖啡嗎？",
          "segments": [
            { "text": "Magst", "meaning": "喜歡", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "Kaffee", "meaning": "咖啡", "tail": "?" }
          ]
        },
        {
          "sentence": "Das gefällt mir.",
          "translation": "我喜歡這個。(直譯：這使我感到愉悅，另一種超常聽到的說法)",
          "segments": [
            { "text": "Das", "meaning": "這(件事/物)", "tail": " " },
            { "text": "gefällt", "meaning": "討好/使...滿意", "tail": " " },
            { "text": "mir", "meaning": "對我", "tail": "." }
          ]
        }
      ],
      "usage_note": "mögen 會變化成 mag (我/他喜歡)。另外，Das gefällt mir 也是德國人表達喜好的大絕招！",
      "image_file": "like.png"
    },
    {
      "id": "v-19",
      "term_zh": "起床 / 醒來",
      "related_terms": [
        {
          "term_target": "aufstehen",
          "pronunciation": ["/ˈaʊ̯fˌʃteːən/"],
          "specific_note": "離開床鋪",
          "segments": [
            { "text": "aufstehen", "meaning": "站起來/起床", "tail": "" }
          ]
        },
        {
          "term_target": "aufwachen",
          "pronunciation": ["/ˈaʊ̯fˌvaxən/"],
          "specific_note": "睜開眼睛",
          "segments": [
            { "text": "aufwachen", "meaning": "醒來", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wach auf!",
          "translation": "醒醒！",
          "segments": [
            { "text": "Wach", "meaning": "醒", "tail": " " },
            { "text": "auf", "meaning": "起來", "tail": "!" }
          ]
        },
        {
          "sentence": "Ich stehe um 7 Uhr auf.",
          "translation": "我七點起床。(動詞 aufstehen 要拆開放在句首和句尾)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "stehe", "meaning": "站", "tail": " " },
            { "text": "um", "meaning": "在(時間)", "tail": " " },
            { "text": "7", "meaning": "7", "tail": " " },
            { "text": "Uhr", "meaning": "點", "tail": " " },
            { "text": "auf", "meaning": "起來", "tail": "." }
          ]
        },
        {
          "sentence": "Wann stehst du normalerweise auf?",
          "translation": "你通常幾點起床？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "stehst", "meaning": "站", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "normalerweise", "meaning": "通常地", "tail": " " },
            { "text": "auf", "meaning": "起來", "tail": "?" }
          ]
        }
      ],
      "usage_note": "德文有「可分動詞」，像 aufstehen (起床)，使用時要把 auf 丟到句子的最後面。",
      "image_file": "wake_up.png"
    },
    {
      "id": "v-20",
      "term_zh": "說話",
      "related_terms": [
        {
          "term_target": "sprechen",
          "pronunciation": ["/ˈʃpʁɛçən/"],
          "specific_note": "",
          "segments": [{ "text": "sprechen", "meaning": "說話", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sprechen Sie Deutsch?",
          "translation": "您會說德文嗎？",
          "segments": [
            { "text": "Sprechen", "meaning": "說話", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "Deutsch", "meaning": "德文", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich spreche kein Deutsch.",
          "translation": "我不會說德文。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "spreche", "meaning": "說話", "tail": " " },
            { "text": "kein", "meaning": "不/沒有", "tail": " " },
            { "text": "Deutsch", "meaning": "德文", "tail": "." }
          ]
        },
        {
          "sentence": "Können Sie bitte langsamer sprechen?",
          "translation": "可以請您說慢一點嗎？",
          "segments": [
            { "text": "Können", "meaning": "能", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "bitte", "meaning": "請/麻煩", "tail": " " },
            { "text": "langsamer", "meaning": "慢地", "tail": " " },
            { "text": "sprechen", "meaning": "說話", "tail": "?" }
          ]
        }
      ],
      "usage_note": "用在講某種語言，或是兩個人對話溝通。",
      "image_file": "speak.png"
    },
    {
      "id": "v-21",
      "term_zh": "聽見",
      "related_terms": [
        {
          "term_target": "hören",
          "pronunciation": ["/ˈhøːʁən/"],
          "specific_note": "",
          "segments": [{ "text": "hören", "meaning": "聽見", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hörst du mich?",
          "translation": "你聽得到我說話嗎？(講電話或視訊最常用)",
          "segments": [
            { "text": "Hörst", "meaning": "聽見", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "mich", "meaning": "我", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich habe dich nicht gehört.",
          "translation": "我剛剛沒聽到你說話。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "dich", "meaning": "你", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "gehört", "meaning": "聽見 (過去分詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Hast du das gehört?",
          "translation": "你有聽到那個聲音嗎？(德國人常省略噪音這個詞，直接用 das 帶過)",
          "segments": [
            { "text": "Hast", "meaning": "(助動詞)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": " " },
            { "text": "gehört", "meaning": "聽見", "tail": "?" }
          ]
        }
      ],
      "usage_note": "單純的聽見。如果是「仔細聽/聆聽」，德文會用 zuhören。",
      "image_file": "hear.png"
    },
    {
      "id": "v-22",
      "term_zh": "寫",
      "related_terms": [
        {
          "term_target": "schreiben",
          "pronunciation": ["/ˈʃʁaɪ̯bən/"],
          "specific_note": "",
          "segments": [{ "text": "schreiben", "meaning": "寫", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Schreib deinen Namen.",
          "translation": "寫下你的名字。",
          "segments": [
            { "text": "Schreib", "meaning": "寫", "tail": " " },
            { "text": "deinen", "meaning": "你的", "tail": " " },
            { "text": "Namen", "meaning": "名字", "tail": "." }
          ]
        },
        {
          "sentence": "Bitte schreib das auf.",
          "translation": "麻煩把這個寫/記下來。",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "schreib", "meaning": "寫", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "auf", "meaning": "下", "tail": "." }
          ]
        },
        {
          "sentence": "Sie schreibt mir eine Nachricht.",
          "translation": "她寫了一則訊息給我。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "schreibt", "meaning": "寫", "tail": " " },
            { "text": "mir", "meaning": "給我", "tail": " " },
            { "text": "eine", "meaning": "一則", "tail": " " },
            { "text": "Nachricht", "meaning": "訊息", "tail": "." }
          ]
        }
      ],
      "usage_note": "書寫或傳訊息都可以用這個字。",
      "image_file": "write.png"
    },
    {
      "id": "v-23",
      "term_zh": "閱讀",
      "related_terms": [
        {
          "term_target": "lesen",
          "pronunciation": ["/ˈleːzən/"],
          "specific_note": "",
          "segments": [{ "text": "lesen", "meaning": "閱讀", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich lese ein Buch.",
          "translation": "我在看一本書。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "lese", "meaning": "閱讀", "tail": " " },
            { "text": "ein", "meaning": "一本", "tail": " " },
            { "text": "Buch", "meaning": "書", "tail": "." }
          ]
        },
        {
          "sentence": "Ich lese gerne Nachrichten.",
          "translation": "我喜歡看新聞。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "lese", "meaning": "閱讀", "tail": " " },
            { "text": "gerne", "meaning": "喜歡地", "tail": " " },
            { "text": "Nachrichten", "meaning": "新聞", "tail": "." }
          ]
        },
        {
          "sentence": "Kannst du das lesen?",
          "translation": "你看得懂(這個字)嗎？",
          "segments": [
            { "text": "Kannst", "meaning": "可以", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "lesen", "meaning": "閱讀", "tail": "?" }
          ]
        }
      ],
      "usage_note": "看書、看報紙、看信都是用 lesen，而不是看見的 sehen 喔。",
      "image_file": "read.png"
    },
    {
      "id": "v-24",
      "term_zh": "等待",
      "related_terms": [
        {
          "term_target": "warten",
          "pronunciation": ["/ˈvaʁtən/"],
          "specific_note": "",
          "segments": [{ "text": "warten", "meaning": "等待", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Warte auf mich!",
          "translation": "等我！",
          "segments": [
            { "text": "Warte", "meaning": "等", "tail": " " },
            { "text": "auf", "meaning": "為", "tail": " " },
            { "text": "mich", "meaning": "我", "tail": "!" }
          ]
        },
        {
          "sentence": "Warte mal kurz.",
          "translation": "稍微等一下。(超常講的口語)",
          "segments": [
            { "text": "Warte", "meaning": "等", "tail": " " },
            { "text": "mal", "meaning": "一下", "tail": " " },
            { "text": "kurz", "meaning": "短暫地", "tail": "." }
          ]
        },
        {
          "sentence": "Ich warte auf den Bus.",
          "translation": "我在等公車。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "warte", "meaning": "等", "tail": " " },
            { "text": "auf", "meaning": "為", "tail": " " },
            { "text": "den", "meaning": "這", "tail": " " },
            { "text": "Bus", "meaning": "公車", "tail": "." }
          ]
        }
      ],
      "usage_note": "等待「某人某物」，後面必須搭配介系詞 auf。",
      "image_file": "wait.png"
    },
    {
      "id": "v-25",
      "term_zh": "嘗試",
      "related_terms": [
        {
          "term_target": "probieren",
          "pronunciation": ["/pʁoˈbiːʁən/"],
          "specific_note": "試吃/試穿",
          "segments": [{ "text": "probieren", "meaning": "嘗試", "tail": "" }]
        },
        {
          "term_target": "versuchen",
          "pronunciation": ["/fɛɐ̯ˈzuːxən/"],
          "specific_note": "盡力嘗試",
          "segments": [{ "text": "versuchen", "meaning": "嘗試", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Probier das mal.",
          "translation": "你試試(試吃/試用)看這個。",
          "segments": [
            { "text": "Probier", "meaning": "嘗試", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "mal", "meaning": "一下", "tail": "." }
          ]
        },
        {
          "sentence": "Bitte versuch es noch einmal.",
          "translation": "請再試一次。",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "versuch", "meaning": "嘗試", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "noch", "meaning": "還", "tail": " " },
            { "text": "einmal", "meaning": "一次", "tail": "." }
          ]
        },
        {
          "sentence": "Ich werde es versuchen.",
          "translation": "我會盡力試試看。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "werde", "meaning": "將會", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "versuchen", "meaning": "嘗試", "tail": "." }
          ]
        }
      ],
      "usage_note": "吃東西或買衣服的「試試看」用 probieren；如果是盡力去挑戰某件事，用 versuchen。",
      "image_file": "try.png"
    },
    {
      "id": "v-26",
      "term_zh": "付錢",
      "related_terms": [
        {
          "term_target": "bezahlen",
          "pronunciation": ["/bəˈt͡saːlən/"],
          "specific_note": "",
          "segments": [{ "text": "bezahlen", "meaning": "支付", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Die Rechnung bezahlen.",
          "translation": "付帳單。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Rechnung", "meaning": "帳單", "tail": " " },
            { "text": "bezahlen", "meaning": "支付", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bezahle das Abendessen.",
          "translation": "這頓晚餐我付錢 (我請客)。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bezahle", "meaning": "付", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "Abendessen", "meaning": "晚餐", "tail": "." }
          ]
        },
        {
          "sentence": "Wie viel hast du bezahlt?",
          "translation": "你付了多少錢？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "viel", "meaning": "多", "tail": " " },
            { "text": "hast", "meaning": "(助動詞)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "bezahlt", "meaning": "付", "tail": "?" }
          ]
        }
      ],
      "usage_note": "口語中也常直接把字首 be- 省略，只說 zahlen (結帳)。",
      "image_file": "pay.png"
    },
    {
      "id": "v-27",
      "term_zh": "選擇",
      "related_terms": [
        {
          "term_target": "aussuchen",
          "pronunciation": ["/ˈaʊ̯sˌzuːxən/"],
          "specific_note": "挑選物品",
          "segments": [
            { "text": "aus", "meaning": "出", "tail": "" },
            { "text": "suchen", "meaning": "尋找", "tail": "" }
          ]
        },
        {
          "term_target": "entscheiden",
          "pronunciation": ["/ɛntˈʃaɪ̯dən/"],
          "specific_note": "做決定",
          "segments": [{ "text": "entscheiden", "meaning": "決定", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Such dir eins aus.",
          "translation": "你自己挑選一個吧。",
          "segments": [
            { "text": "Such", "meaning": "找", "tail": " " },
            { "text": "dir", "meaning": "為你", "tail": " " },
            { "text": "eins", "meaning": "一個", "tail": " " },
            { "text": "aus", "meaning": "出", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist schwer zu entscheiden.",
          "translation": "這很難做出決定(選擇)。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schwer", "meaning": "困難的", "tail": " " },
            { "text": "zu", "meaning": "去", "tail": " " },
            { "text": "entscheiden", "meaning": "決定", "tail": "." }
          ]
        },
        {
          "sentence": "Wähle weise.",
          "translation": "明智地選擇。(較為嚴肅文學的字眼 wählen)",
          "segments": [
            { "text": "Wähle", "meaning": "選擇", "tail": " " },
            { "text": "weise", "meaning": "明智地", "tail": "." }
          ]
        }
      ],
      "usage_note": "如果是從一堆東西裡「挑」一個帶走，德國人最常用 aussuchen。",
      "image_file": "choose.png"
    },
    {
      "id": "v-28",
      "term_zh": "進入 / 輸入",
      "related_terms": [
        {
          "term_target": "reinkommen",
          "pronunciation": ["/ˈʁaɪ̯nˌkɔmən/"],
          "specific_note": "進入房間",
          "segments": [{ "text": "reinkommen", "meaning": "進入", "tail": "" }]
        },
        {
          "term_target": "eingeben",
          "pronunciation": ["/ˈaɪ̯nˌɡeːbən/"],
          "specific_note": "輸入密碼",
          "segments": [{ "text": "eingeben", "meaning": "輸入", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Komm rein!",
          "translation": "進來吧！(敲門後最常聽到的回應)",
          "segments": [
            { "text": "Komm", "meaning": "來", "tail": " " },
            { "text": "rein", "meaning": "入內", "tail": "!" }
          ]
        },
        {
          "sentence": "Eintritt verboten.",
          "translation": "禁止進入。(告示牌用語)",
          "segments": [
            { "text": "Eintritt", "meaning": "進入", "tail": " " },
            { "text": "verboten", "meaning": "被禁止的", "tail": "." }
          ]
        },
        {
          "sentence": "Bitte gib dein Passwort ein.",
          "translation": "請輸入你的密碼。",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "gib", "meaning": "給", "tail": " " },
            { "text": "dein", "meaning": "你的", "tail": " " },
            { "text": "Passwort", "meaning": "密碼", "tail": " " },
            { "text": "ein", "meaning": "入內", "tail": "." }
          ]
        }
      ],
      "usage_note": "英文的 Enter 有兩個意思，在德文會切開：走進房間是 reinkommen；用鍵盤輸入密碼則是 eingeben。",
      "image_file": "enter.png"
    },
    {
      "id": "v-29",
      "term_zh": "住",
      "related_terms": [
        {
          "term_target": "wohnen",
          "pronunciation": ["/ˈvoːnən/"],
          "specific_note": "居住",
          "segments": [{ "text": "wohnen", "meaning": "住", "tail": "" }]
        },
        {
          "term_target": "leben",
          "pronunciation": ["/ˈleːbən/"],
          "specific_note": "生活",
          "segments": [{ "text": "leben", "meaning": "生活/居住", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich wohne hier.",
          "translation": "我住這裡。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "wohne", "meaning": "住", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Wo wohnst du?",
          "translation": "你住在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "wohnst", "meaning": "住", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Sie leben in Japan.",
          "translation": "他們居住(生活)在日本。",
          "segments": [
            { "text": "Sie", "meaning": "他們", "tail": " " },
            { "text": "leben", "meaning": "生活", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "Japan", "meaning": "日本", "tail": "." }
          ]
        }
      ],
      "usage_note": "問別人住哪條街用 wohnen；如果是問在哪個國家長期生活，用 leben 比較多。",
      "image_file": "live.png"
    },
    {
      "id": "v-30",
      "term_zh": "到達",
      "related_terms": [
        {
          "term_target": "ankommen",
          "pronunciation": ["/ˈanˌkɔmən/"],
          "specific_note": "",
          "segments": [
            { "text": "an", "meaning": "在/靠", "tail": "" },
            { "text": "kommen", "meaning": "來", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich komme später an.",
          "translation": "我會晚一點到。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "komme", "meaning": "來", "tail": " " },
            { "text": "später", "meaning": "較晚", "tail": " " },
            { "text": "an", "meaning": "到", "tail": "." }
          ]
        },
        {
          "sentence": "Wann kommen wir an?",
          "translation": "我們什麼時候會到？(坐車時必問)",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "kommen", "meaning": "來", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "an", "meaning": "到", "tail": "?" }
          ]
        },
        {
          "sentence": "Der Zug ist angekommen.",
          "translation": "火車已經到了。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Zug", "meaning": "火車", "tail": " " },
            { "text": "ist", "meaning": "(助動詞)", "tail": " " },
            { "text": "angekommen", "meaning": "到達 (過去分詞)", "tail": "." }
          ]
        }
      ],
      "usage_note": "這也是一個可分動詞，使用時把 an 放到句尾就對了！",
      "image_file": "arrive.png"
    },
    {
      "id": "v-31",
      "term_zh": "走路",
      "related_terms": [
        {
          "term_target": "gehen",
          "pronunciation": ["/ˈɡeːən/"],
          "specific_note": "",
          "segments": [{ "text": "gehen", "meaning": "走", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Zu Fuß nach Hause gehen.",
          "translation": "走路(徒步)回家。",
          "segments": [
            { "text": "Zu", "meaning": "用", "tail": " " },
            { "text": "Fuß", "meaning": "腳", "tail": " " },
            { "text": "nach", "meaning": "往", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": "." }
          ]
        },
        {
          "sentence": "Lass uns spazieren gehen.",
          "translation": "我們去散散步吧。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "spazieren", "meaning": "散步", "tail": " " },
            { "text": "gehen", "meaning": "去", "tail": "." }
          ]
        },
        {
          "sentence": "Nicht rennen, sondern gehen.",
          "translation": "不要跑，用走的。",
          "segments": [
            { "text": "Nicht", "meaning": "不", "tail": " " },
            { "text": "rennen", "meaning": "跑", "tail": ", " },
            { "text": "sondern", "meaning": "而是", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": "." }
          ]
        }
      ],
      "usage_note": "在德國南部，laufen 代表走路；但在北部 laufen 是跑步的意思。最安全不誤會的說法是 zu Fuß gehen (用腳走)。",
      "image_file": "walk.png"
    },
    {
      "id": "v-32",
      "term_zh": "打開",
      "related_terms": [
        {
          "term_target": "aufmachen",
          "pronunciation": ["/ˈaʊ̯fˌmaxən/"],
          "specific_note": "動作",
          "segments": [{ "text": "aufmachen", "meaning": "打開", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mach die Tür auf.",
          "translation": "把門打開。",
          "segments": [
            { "text": "Mach", "meaning": "做", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Tür", "meaning": "門", "tail": " " },
            { "text": "auf", "meaning": "開", "tail": "." }
          ]
        },
        {
          "sentence": "Der Laden ist geöffnet.",
          "translation": "這間店現在營業中 (開著)。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Laden", "meaning": "商店", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "geöffnet", "meaning": "開著的", "tail": "." }
          ]
        },
        {
          "sentence": "Bitte schlag dein Buch auf.",
          "translation": "請翻開你的書。(書本打開有專屬的字 aufschlagen)",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "schlag", "meaning": "打", "tail": " " },
            { "text": "dein", "meaning": "你的", "tail": " " },
            { "text": "Buch", "meaning": "書", "tail": " " },
            { "text": "auf", "meaning": "開", "tail": "." }
          ]
        }
      ],
      "usage_note": "又是一個可分動詞！字首 auf 有「向上/展開」的意思，所以動作是 mach ... auf。",
      "image_file": "open.png"
    },
    {
      "id": "v-33",
      "term_zh": "關閉",
      "related_terms": [
        {
          "term_target": "zumachen",
          "pronunciation": ["/ˈt͡suːˌmaxən/"],
          "specific_note": "動作",
          "segments": [{ "text": "zumachen", "meaning": "關閉", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mach das Fenster zu.",
          "translation": "把窗戶關上。",
          "segments": [
            { "text": "Mach", "meaning": "做", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "Fenster", "meaning": "窗戶", "tail": " " },
            { "text": "zu", "meaning": "關上", "tail": "." }
          ]
        },
        {
          "sentence": "Der Laden ist geschlossen.",
          "translation": "這間店已經打烊 (關閉) 了。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Laden", "meaning": "商店", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "geschlossen", "meaning": "關閉的", "tail": "." }
          ]
        },
        {
          "sentence": "Mach deine Augen zu.",
          "translation": "閉上你的眼睛。",
          "segments": [
            { "text": "Mach", "meaning": "做", "tail": " " },
            { "text": "deine", "meaning": "你的", "tail": " " },
            { "text": "Augen", "meaning": "眼睛", "tail": " " },
            { "text": "zu", "meaning": "關上", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟 aufmachen 是一對寶。字首 zu 有「合攏/封閉」的意思。",
      "image_file": "close.png"
    },
    {
      "id": "v-34",
      "term_zh": "幫助",
      "related_terms": [
        {
          "term_target": "helfen",
          "pronunciation": ["/ˈhɛlfən/"],
          "specific_note": "",
          "segments": [{ "text": "helfen", "meaning": "幫助", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hilf mir.",
          "translation": "幫我。",
          "segments": [
            { "text": "Hilf", "meaning": "幫", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Kann ich dir helfen?",
          "translation": "需要我幫你嗎？",
          "segments": [
            { "text": "Kann", "meaning": "能", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "dir", "meaning": "你", "tail": " " },
            { "text": "helfen", "meaning": "幫忙", "tail": "?" }
          ]
        },
        {
          "sentence": "Danke für deine Hilfe.",
          "translation": "謝謝你的幫忙。",
          "segments": [
            { "text": "Danke", "meaning": "謝謝", "tail": " " },
            { "text": "für", "meaning": "為了", "tail": " " },
            { "text": "deine", "meaning": "你的", "tail": " " },
            { "text": "Hilfe", "meaning": "幫忙 (名詞)", "tail": "." }
          ]
        }
      ],
      "usage_note": "這個字要搭配 Dativ (與格)，所以是說 hilf mir (幫我)，不能說 hilf mich。",
      "image_file": "help.png"
    },
    {
      "id": "v-35",
      "term_zh": "帶來",
      "related_terms": [
        {
          "term_target": "mitbringen",
          "pronunciation": ["/ˈmɪtˌbʁɪŋən/"],
          "specific_note": "順便帶來",
          "segments": [
            { "text": "mit", "meaning": "一起/伴隨", "tail": "" },
            { "text": "bringen", "meaning": "帶來", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bring Wasser mit.",
          "translation": "把水帶著。",
          "segments": [
            { "text": "Bring", "meaning": "帶", "tail": " " },
            { "text": "Wasser", "meaning": "水", "tail": " " },
            { "text": "mit", "meaning": "一起", "tail": "." }
          ]
        },
        {
          "sentence": "Bring deinen Freund mit.",
          "translation": "把你的朋友一起帶來。",
          "segments": [
            { "text": "Bring", "meaning": "帶", "tail": " " },
            { "text": "deinen", "meaning": "你的", "tail": " " },
            { "text": "Freund", "meaning": "朋友", "tail": " " },
            { "text": "mit", "meaning": "一起", "tail": "." }
          ]
        },
        {
          "sentence": "Vergiss nicht, Geld mitzubringen.",
          "translation": "別忘了帶錢出門。",
          "segments": [
            { "text": "Vergiss", "meaning": "忘記", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": ", " },
            { "text": "Geld", "meaning": "錢", "tail": " " },
            { "text": "mitzubringen", "meaning": "帶著", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國人很強調 mit (一起)，所以「帶來」通常用 mitbringen，表示伴隨著你一起帶過來。",
      "image_file": "bring.png"
    },
    {
      "id": "v-36",
      "term_zh": "需要",
      "related_terms": [
        {
          "term_target": "brauchen",
          "pronunciation": ["/ˈbʁaʊ̯xən/"],
          "specific_note": "",
          "segments": [{ "text": "brauchen", "meaning": "需要", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich brauche Hilfe.",
          "translation": "我需要幫忙。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "brauche", "meaning": "需要", "tail": " " },
            { "text": "Hilfe", "meaning": "幫忙", "tail": "." }
          ]
        },
        {
          "sentence": "Er braucht eine Pause.",
          "translation": "他需要休息一下。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "braucht", "meaning": "需要", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "Pause", "meaning": "休息", "tail": "." }
          ]
        },
        {
          "sentence": "Ich muss jetzt gehen.",
          "translation": "我現在得走了。(表示「必須、有必要」做某個動作時，德國人會直接用 muss)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須/需要", "tail": " " },
            { "text": "jetzt", "meaning": "現在", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": "." }
          ]
        }
      ],
      "usage_note": "需要某件「物品」時用 brauchen；若是有必要做某個「動作」，通常用 müssen (必須)。",
      "image_file": "need.png"
    },
    {
      "id": "v-37",
      "term_zh": "使用",
      "related_terms": [
        {
          "term_target": "benutzen",
          "pronunciation": ["/bəˈnʊt͡sən/"],
          "specific_note": "",
          "segments": [{ "text": "benutzen", "meaning": "使用", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Benutze das Handy.",
          "translation": "使用這支手機。",
          "segments": [
            { "text": "Benutze", "meaning": "使用", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "Handy", "meaning": "手機", "tail": "." }
          ]
        },
        {
          "sentence": "Benutze dieses Werkzeug.",
          "translation": "使用這個工具。",
          "segments": [
            { "text": "Benutze", "meaning": "使用", "tail": " " },
            { "text": "dieses", "meaning": "這個", "tail": " " },
            { "text": "Werkzeug", "meaning": "工具", "tail": "." }
          ]
        },
        {
          "sentence": "Bitte den Aufzug nicht benutzen.",
          "translation": "請勿搭乘/使用電梯。(火災或維修時的標準告示)",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "den", "meaning": "這個", "tail": " " },
            { "text": "Aufzug", "meaning": "電梯", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "benutzen", "meaning": "使用", "tail": "." }
          ]
        }
      ],
      "usage_note": "操作某項工具或設備。",
      "image_file": "use.png"
    },
    {
      "id": "v-38",
      "term_zh": "變成 / 成為",
      "related_terms": [
        {
          "term_target": "werden",
          "pronunciation": ["/ˈveːɐ̯dən/"],
          "specific_note": "",
          "segments": [{ "text": "werden", "meaning": "成為", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Arzt werden.",
          "translation": "成為一名醫生。",
          "segments": [
            { "text": "Arzt", "meaning": "醫生", "tail": " " },
            { "text": "werden", "meaning": "成為", "tail": "." }
          ]
        },
        {
          "sentence": "Es wurde dunkel.",
          "translation": "天色變暗了。",
          "segments": [
            { "text": "Es", "meaning": "它(天色)", "tail": " " },
            { "text": "wurde", "meaning": "變成 (過去式)", "tail": " " },
            { "text": "dunkel", "meaning": "暗", "tail": "." }
          ]
        },
        {
          "sentence": "Er möchte Lehrer werden.",
          "translation": "他想成為一名老師。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "Lehrer", "meaning": "老師", "tail": " " },
            { "text": "werden", "meaning": "成為", "tail": "." }
          ]
        }
      ],
      "usage_note": "werden 是一個超級核心動詞，除了當「變成」，它也是德文未來式「將會」的助動詞喔！",
      "image_file": "become.png"
    },
    {
      "id": "v-39",
      "term_zh": "開始",
      "related_terms": [
        {
          "term_target": "anfangen",
          "pronunciation": ["/ˈanˌfaŋən/"],
          "specific_note": "",
          "segments": [
            { "text": "an", "meaning": "起/靠", "tail": "" },
            { "text": "fangen", "meaning": "抓", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Fang jetzt an.",
          "translation": "現在就開始。",
          "segments": [
            { "text": "Fang", "meaning": "抓", "tail": " " },
            { "text": "jetzt", "meaning": "現在", "tail": " " },
            { "text": "an", "meaning": "起", "tail": "." }
          ]
        },
        {
          "sentence": "Lass uns anfangen.",
          "translation": "我們開始吧。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "anfangen", "meaning": "開始", "tail": "." }
          ]
        },
        {
          "sentence": "Der Film fängt um 8 an.",
          "translation": "電影8點開始。",
          "segments": [
            { "text": "Der", "meaning": "這部", "tail": " " },
            { "text": "Film", "meaning": "電影", "tail": " " },
            { "text": "fängt", "meaning": "抓", "tail": " " },
            { "text": "um", "meaning": "在", "tail": " " },
            { "text": "8", "meaning": "8點", "tail": " " },
            { "text": "an", "meaning": "起", "tail": "." }
          ]
        }
      ],
      "usage_note": "也是一個標準的可分動詞。把起頭的 an 拔下來丟到句尾就完成了！",
      "image_file": "start.png"
    },
    {
      "id": "v-41",
      "term_zh": "結束 / 完成",
      "related_terms": [
        {
          "term_target": "fertig",
          "pronunciation": ["/ˈfɛʁtɪç/"],
          "specific_note": "形容詞：完成的",
          "segments": [{ "text": "fertig", "meaning": "完成的/結束的", "tail": "" }]
        },
        {
          "term_target": "beenden",
          "pronunciation": ["/bəˈɛndən/"],
          "specific_note": "動詞：結束",
          "segments": [{ "text": "beenden", "meaning": "結束", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin fertig.",
          "translation": "我弄完了 / 我結束了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "fertig", "meaning": "完成的", "tail": "." }
          ]
        },
        {
          "sentence": "Bist du schon fertig?",
          "translation": "你已經弄完了嗎？(例如問對方吃飽沒、用完沒)",
          "segments": [
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "fertig", "meaning": "完成的", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich muss meine Arbeit beenden.",
          "translation": "我必須結束(完成)我的工作。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "Arbeit", "meaning": "工作", "tail": " " },
            { "text": "beenden", "meaning": "結束", "tail": "." }
          ]
        }
      ],
      "usage_note": "口語中最常用的是形容詞 fertig (搭配 be 動詞)，表示「大功告成」！",
      "image_file": "finish.png"
    },
    {
      "id": "v-42",
      "term_zh": "停止",
      "related_terms": [
        {
          "term_target": "aufhören",
          "pronunciation": ["/ˈaʊ̯fˌhøːʁən/"],
          "specific_note": "停止某動作",
          "segments": [{ "text": "aufhören", "meaning": "停止", "tail": "" }]
        },
        {
          "term_target": "halten",
          "pronunciation": ["/ˈhaltən/"],
          "specific_note": "車輛停止",
          "segments": [{ "text": "halten", "meaning": "停下", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hör auf!",
          "translation": "停下來！ / 別鬧了！",
          "segments": [
            { "text": "Hör", "meaning": "停止", "tail": " " },
            { "text": "auf", "meaning": "上(與動詞結合)", "tail": "!" }
          ]
        },
        {
          "sentence": "Hör auf damit.",
          "translation": "停止做那件事。(制止別人超好用)",
          "segments": [
            { "text": "Hör", "meaning": "停止", "tail": " " },
            { "text": "auf", "meaning": "(可分動詞字首)", "tail": " " },
            { "text": "damit", "meaning": "用那個", "tail": "." }
          ]
        },
        {
          "sentence": "Der Bus hält hier.",
          "translation": "公車停在這裡。",
          "segments": [
            { "text": "Der", "meaning": "這台", "tail": " " },
            { "text": "Bus", "meaning": "公車", "tail": " " },
            { "text": "hält", "meaning": "停下", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        }
      ],
      "usage_note": "停止做一件事用 aufhören；如果是交通工具或走路停下來，要用 halten。",
      "image_file": "stop.png"
    },
    {
      "id": "v-43",
      "term_zh": "記住",
      "related_terms": [
        {
          "term_target": "sich erinnern",
          "pronunciation": ["/zɪç ɛɐ̯ˈɪnɐn/"],
          "specific_note": "",
          "segments": [
            { "text": "sich", "meaning": "自己", "tail": " " },
            { "text": "erinnern", "meaning": "記起", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Erinnerst du dich?",
          "translation": "你記得嗎？",
          "segments": [
            { "text": "Erinnerst", "meaning": "記得", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "dich", "meaning": "你自己", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich erinnere mich nicht.",
          "translation": "我不記得了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "erinnere", "meaning": "記得", "tail": " " },
            { "text": "mich", "meaning": "我自己", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Ich erinnere mich an dich.",
          "translation": "我記得你。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "erinnere", "meaning": "記得", "tail": " " },
            { "text": "mich", "meaning": "我自己", "tail": " " },
            { "text": "an", "meaning": "在...上 (搭配介系詞)", "tail": " " },
            { "text": "dich", "meaning": "你", "tail": "." }
          ]
        }
      ],
      "usage_note": "這是一個「反身動詞」，意思是：你必須說「我使『我自己』回憶起」，不能單說我記得。",
      "image_file": "remember.png"
    },
    {
      "id": "v-44",
      "term_zh": "談話",
      "related_terms": [
        {
          "term_target": "reden",
          "pronunciation": ["/ˈʁeːdən/"],
          "specific_note": "",
          "segments": [{ "text": "reden", "meaning": "談話/聊天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wir müssen reden.",
          "translation": "我們必須談談。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "müssen", "meaning": "必須", "tail": " " },
            { "text": "reden", "meaning": "談話", "tail": "." }
          ]
        },
        {
          "sentence": "Worüber redest du?",
          "translation": "你在講什麼東西？",
          "segments": [
            { "text": "Worüber", "meaning": "關於什麼", "tail": " " },
            { "text": "redest", "meaning": "談論", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Lass uns später reden.",
          "translation": "我們晚點再聊。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "später", "meaning": "晚點", "tail": " " },
            { "text": "reden", "meaning": "聊", "tail": "." }
          ]
        }
      ],
      "usage_note": "sprechen 比較像「講某種語言 / 發言」，而 reden 則是兩個人互相「聊天 / 談論」。",
      "image_file": "talk.png"
    },
    {
      "id": "v-45",
      "term_zh": "見面",
      "related_terms": [
        {
          "term_target": "treffen",
          "pronunciation": ["/ˈtʁɛfən/"],
          "specific_note": "",
          "segments": [{ "text": "treffen", "meaning": "遇見/見面", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wir treffen uns heute.",
          "translation": "我們今天見面。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "treffen", "meaning": "見面", "tail": " " },
            { "text": "uns", "meaning": "我們自己", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": "." }
          ]
        },
        {
          "sentence": "Treffen wir uns morgen?",
          "translation": "我們明天見面好嗎？",
          "segments": [
            { "text": "Treffen", "meaning": "見面", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "uns", "meaning": "我們自己", "tail": " " },
            { "text": "morgen", "meaning": "明天", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich treffe meine Freunde.",
          "translation": "我要去見我的朋友們。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "treffe", "meaning": "見面", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "Freunde", "meaning": "朋友", "tail": "." }
          ]
        }
      ],
      "usage_note": "兩人相約見面，德國人習慣用反身動詞 sich treffen（我們互相見面）。",
      "image_file": "meet.png"
    },
    {
      "id": "v-46",
      "term_zh": "乘坐 / 拿取",
      "related_terms": [
        {
          "term_target": "nehmen",
          "pronunciation": ["/ˈneːmən/"],
          "specific_note": "",
          "segments": [{ "text": "nehmen", "meaning": "拿/搭乘", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich nehme den Bus.",
          "translation": "我搭公車。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "nehme", "meaning": "搭乘/拿", "tail": " " },
            { "text": "den", "meaning": "這", "tail": " " },
            { "text": "Bus", "meaning": "公車", "tail": "." }
          ]
        },
        {
          "sentence": "Ich nehme das hier.",
          "translation": "我要買這個。(購物結帳超常用)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "nehme", "meaning": "拿", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Nimm dir Zeit.",
          "translation": "慢慢來。(直譯：拿給自己時間)",
          "segments": [
            { "text": "Nimm", "meaning": "拿", "tail": " " },
            { "text": "dir", "meaning": "給你自己", "tail": " " },
            { "text": "Zeit", "meaning": "時間", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟英文的 take 非常像，無論是搭乘交通工具，或是點餐買東西時說「我要這個」，都是用 nehmen。",
      "image_file": "take.png"
    },
    {
      "id": "v-47",
      "term_zh": "放",
      "related_terms": [
        {
          "term_target": "legen",
          "pronunciation": ["/ˈleːɡən/"],
          "specific_note": "平放",
          "segments": [{ "text": "legen", "meaning": "平放", "tail": "" }]
        },
        {
          "term_target": "stellen",
          "pronunciation": ["/ˈʃtɛlən/"],
          "specific_note": "直立放",
          "segments": [{ "text": "stellen", "meaning": "直立放", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Leg das hier hin.",
          "translation": "把這個放在這裡。",
          "segments": [
            { "text": "Leg", "meaning": "平放", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": " " },
            { "text": "hin", "meaning": "去", "tail": "." }
          ]
        },
        {
          "sentence": "Stell es auf den Tisch.",
          "translation": "把它放(直立)在桌上。(例如杯子或花瓶)",
          "segments": [
            { "text": "Stell", "meaning": "直立放", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "auf", "meaning": "在...上", "tail": " " },
            { "text": "den", "meaning": "這個", "tail": " " },
            { "text": "Tisch", "meaning": "桌子", "tail": "." }
          ]
        },
        {
          "sentence": "Wo soll ich das hinlegen?",
          "translation": "這個我要放哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "soll", "meaning": "應該", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "hinlegen", "meaning": "放下", "tail": "?" }
          ]
        }
      ],
      "usage_note": "德文很講究邏輯！放一本書（躺著）用 legen，放一個水杯（站著）要用 stellen。",
      "image_file": "put.png"
    },
    {
      "id": "v-48",
      "term_zh": "吃",
      "related_terms": [
        {
          "term_target": "essen",
          "pronunciation": ["/ˈɛsən/"],
          "specific_note": "",
          "segments": [{ "text": "essen", "meaning": "吃", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Was möchtest du essen?",
          "translation": "你想吃什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "möchtest", "meaning": "想要", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "essen", "meaning": "吃", "tail": "?" }
          ]
        },
        {
          "sentence": "Lass uns essen.",
          "translation": "我們開動 / 吃飯吧。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "essen", "meaning": "吃", "tail": "." }
          ]
        },
        {
          "sentence": "Ich esse gerne Pizza.",
          "translation": "我喜歡吃披薩。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "esse", "meaning": "吃", "tail": " " },
            { "text": "gerne", "meaning": "喜歡地", "tail": " " },
            { "text": "Pizza", "meaning": "披薩", "tail": "." }
          ]
        }
      ],
      "usage_note": "進食。名詞的 Das Essen (大寫) 就是食物/餐點的意思。",
      "image_file": "eat.png"
    },
    {
      "id": "v-49",
      "term_zh": "睡覺",
      "related_terms": [
        {
          "term_target": "schlafen",
          "pronunciation": ["/ˈʃlaːfən/"],
          "specific_note": "",
          "segments": [{ "text": "schlafen", "meaning": "睡覺", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Schlaf gut!",
          "translation": "好好睡 / 晚安！",
          "segments": [
            { "text": "Schlaf", "meaning": "睡", "tail": " " },
            { "text": "gut", "meaning": "好地", "tail": "!" }
          ]
        },
        {
          "sentence": "Ich muss schlafen.",
          "translation": "我必須去睡了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "schlafen", "meaning": "睡覺", "tail": "." }
          ]
        },
        {
          "sentence": "Hast du gut geschlafen?",
          "translation": "你昨晚睡得好嗎？",
          "segments": [
            { "text": "Hast", "meaning": "有", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "gut", "meaning": "好地", "tail": " " },
            { "text": "geschlafen", "meaning": "睡 (過去分詞)", "tail": "?" }
          ]
        }
      ],
      "usage_note": "睡眠。",
      "image_file": "sleep.png"
    },
    {
      "id": "v-50",
      "term_zh": "寄送",
      "related_terms": [
        {
          "term_target": "schicken",
          "pronunciation": ["/ˈʃɪkən/"],
          "specific_note": "",
          "segments": [{ "text": "schicken", "meaning": "寄送", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Schick mir eine Nachricht.",
          "translation": "傳個訊息給我。",
          "segments": [
            { "text": "Schick", "meaning": "寄/傳", "tail": " " },
            { "text": "mir", "meaning": "給我", "tail": " " },
            { "text": "eine", "meaning": "一則", "tail": " " },
            { "text": "Nachricht", "meaning": "訊息", "tail": "." }
          ]
        },
        {
          "sentence": "Ich schicke es dir später.",
          "translation": "我晚點傳 (寄) 給你。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "schicke", "meaning": "寄", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "dir", "meaning": "給你", "tail": " " },
            { "text": "später", "meaning": "晚點", "tail": "." }
          ]
        },
        {
          "sentence": "Hast du die E-Mail geschickt?",
          "translation": "你把信寄出了嗎？",
          "segments": [
            { "text": "Hast", "meaning": "(助動詞)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "E-Mail", "meaning": "電子郵件", "tail": " " },
            { "text": "geschickt", "meaning": "寄出", "tail": "?" }
          ]
        }
      ],
      "usage_note": "傳送訊息、照片或是寄送包裹，用 schicken 最口語自然。",
      "image_file": "send.png"
    },
    {
      "id": "v-51",
      "term_zh": "開車",
      "related_terms": [
        {
          "term_target": "fahren",
          "pronunciation": ["/ˈfaːʁən/"],
          "specific_note": "",
          "segments": [{ "text": "fahren", "meaning": "行駛/開車", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich fahre zur Arbeit.",
          "translation": "我開車去上班。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "fahre", "meaning": "開車", "tail": " " },
            { "text": "zur", "meaning": "去", "tail": " " },
            { "text": "Arbeit", "meaning": "工作", "tail": "." }
          ]
        },
        {
          "sentence": "Fährst du?",
          "translation": "你要開車嗎？(例如一群人問誰當司機)",
          "segments": [
            { "text": "Fährst", "meaning": "開車", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Fahr vorsichtig.",
          "translation": "小心開車。",
          "segments": [
            { "text": "Fahr", "meaning": "開車", "tail": " " },
            { "text": "vorsichtig", "meaning": "小心地", "tail": "." }
          ]
        }
      ],
      "usage_note": "任何搭乘、駕駛交通工具 (汽車、火車、腳踏車) 移動，都可以用 fahren。",
      "image_file": "drive.png"
    },
    {
      "id": "v-52",
      "term_zh": "讀書 / 學習",
      "related_terms": [
        {
          "term_target": "lernen",
          "pronunciation": ["/ˈlɛʁnən/"],
          "specific_note": "學習知識",
          "segments": [{ "text": "lernen", "meaning": "學習", "tail": "" }]
        },
        {
          "term_target": "studieren",
          "pronunciation": ["/ʃtuˈdiːʁən/"],
          "specific_note": "讀大學",
          "segments": [{ "text": "studieren", "meaning": "讀大學", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wir lernen Deutsch.",
          "translation": "我們在學德文。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "lernen", "meaning": "學", "tail": " " },
            { "text": "Deutsch", "meaning": "德文", "tail": "." }
          ]
        },
        {
          "sentence": "Lernst du für die Prüfung?",
          "translation": "你在為了考試讀書嗎？",
          "segments": [
            { "text": "Lernst", "meaning": "讀書", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "für", "meaning": "為了", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Prüfung", "meaning": "考試", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich muss heute Abend lernen.",
          "translation": "我今天晚上必須讀書。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": " " },
            { "text": "Abend", "meaning": "晚上", "tail": " " },
            { "text": "lernen", "meaning": "學習", "tail": "." }
          ]
        }
      ],
      "usage_note": "這字很容易搞混！一般準備考試或學語言用 lernen；說自己「在讀大學/研究所」才用 studieren。",
      "image_file": "study.png"
    },
    {
      "id": "v-53",
      "term_zh": "回去",
      "related_terms": [
        {
          "term_target": "zurückgehen",
          "pronunciation": ["/t͡suˈʁʏkˌɡeːən/"],
          "specific_note": "",
          "segments": [
            { "text": "zurück", "meaning": "回去", "tail": "" },
            { "text": "gehen", "meaning": "走", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lass uns zurückgehen.",
          "translation": "我們回去吧。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "zurückgehen", "meaning": "回去", "tail": "." }
          ]
        },
        {
          "sentence": "Ich gehe zurück.",
          "translation": "我要回去了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "gehe", "meaning": "走", "tail": " " },
            { "text": "zurück", "meaning": "回去", "tail": "." }
          ]
        },
        {
          "sentence": "Wann gehst du zurück?",
          "translation": "你什麼時候回去？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "gehst", "meaning": "走", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "zurück", "meaning": "回去", "tail": "?" }
          ]
        }
      ],
      "usage_note": "可分動詞。如果是搭車或開車回去，就把 gehen (走) 換成 fahren (開車/搭車)，變成 zurückfahren。",
      "image_file": "go_back.png"
    },
    {
      "id": "v-54",
      "term_zh": "了解",
      "related_terms": [
        {
          "term_target": "verstehen",
          "pronunciation": ["/fɛɐ̯ˈʃteːən/"],
          "specific_note": "",
          "segments": [{ "text": "verstehen", "meaning": "了解/懂", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich verstehe das nicht.",
          "translation": "我不懂這個 / 我不了解。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "verstehe", "meaning": "懂", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Verstehst du mich?",
          "translation": "你懂我的意思嗎？",
          "segments": [
            { "text": "Verstehst", "meaning": "懂", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "mich", "meaning": "我", "tail": "?" }
          ]
        },
        {
          "sentence": "Ah, jetzt verstehe ich.",
          "translation": "啊，現在我懂了。",
          "segments": [
            { "text": "Ah", "meaning": "啊", "tail": ", " },
            { "text": "jetzt", "meaning": "現在", "tail": " " },
            { "text": "verstehe", "meaning": "懂", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": "." }
          ]
        }
      ],
      "usage_note": "明白意思，或是聽懂某種語言。",
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
          "term_target": "gut",
          "pronunciation": ["/ɡuːt/"],
          "specific_note": "",
          "segments": [{ "text": "gut", "meaning": "好的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sehr gut.",
          "translation": "非常好 / 做得好。",
          "segments": [
            { "text": "Sehr", "meaning": "非常", "tail": " " },
            { "text": "gut", "meaning": "好", "tail": "." }
          ]
        },
        {
          "sentence": "Alles gut?",
          "translation": "一切都好嗎？(德國人每天必說的萬用問候)",
          "segments": [
            { "text": "Alles", "meaning": "一切", "tail": " " },
            { "text": "gut", "meaning": "好", "tail": "?" }
          ]
        },
        {
          "sentence": "Gute Arbeit.",
          "translation": "做得好。(稱讚別人的工作表現)",
          "segments": [
            { "text": "Gute", "meaning": "好的", "tail": " " },
            { "text": "Arbeit", "meaning": "工作", "tail": "." }
          ]
        }
      ],
      "usage_note": "正面評價。放在名詞前面時字尾會變化 (例如 Gute)。",
      "image_file": "good.png"
    },
    {
      "id": "adj-02",
      "term_zh": "壞的 / 糟的",
      "related_terms": [
        {
          "term_target": "schlecht",
          "pronunciation": ["/ʃlɛçt/"],
          "specific_note": "",
          "segments": [{ "text": "schlecht", "meaning": "壞的/糟的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mir ist schlecht.",
          "translation": "我不舒服 / 我想吐。(非常實用)",
          "segments": [
            { "text": "Mir", "meaning": "對我", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schlecht", "meaning": "糟的", "tail": "." }
          ]
        },
        {
          "sentence": "Das Wetter ist schlecht.",
          "translation": "天氣很糟。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "Wetter", "meaning": "天氣", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schlecht", "meaning": "糟的", "tail": "." }
          ]
        },
        {
          "sentence": "Keine schlechte Idee.",
          "translation": "這主意不錯。(直譯：不是個壞主意)",
          "segments": [
            { "text": "Keine", "meaning": "沒有/不是", "tail": " " },
            { "text": "schlechte", "meaning": "壞的", "tail": " " },
            { "text": "Idee", "meaning": "主意", "tail": "." }
          ]
        }
      ],
      "usage_note": "形容天氣差、品質不好，或是身體感到噁心不適都可以用。",
      "image_file": "bad.png"
    },
    {
      "id": "adj-03",
      "term_zh": "新的",
      "related_terms": [
        {
          "term_target": "neu",
          "pronunciation": ["/nɔɪ̯/"],
          "specific_note": "",
          "segments": [{ "text": "neu", "meaning": "新的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Frohes neues Jahr!",
          "translation": "新年快樂！",
          "segments": [
            { "text": "Frohes", "meaning": "快樂的", "tail": " " },
            { "text": "neues", "meaning": "新的", "tail": " " },
            { "text": "Jahr", "meaning": "年", "tail": "!" }
          ]
        },
        {
          "sentence": "Das ist mein neues Handy.",
          "translation": "這是我的新手機。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "neues", "meaning": "新的", "tail": " " },
            { "text": "Handy", "meaning": "手機", "tail": "." }
          ]
        },
        {
          "sentence": "Was gibt's Neues?",
          "translation": "最近有什麼新鮮事嗎？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "gibt's", "meaning": "有 (gibt es)", "tail": " " },
            { "text": "Neues", "meaning": "新鮮事", "tail": "?" }
          ]
        }
      ],
      "usage_note": "全新的事物。",
      "image_file": "new.png"
    },
    {
      "id": "adj-04",
      "term_zh": "第一的",
      "related_terms": [
        {
          "term_target": "erste",
          "pronunciation": ["/ˈeːɐ̯stə/"],
          "specific_note": "",
          "segments": [{ "text": "erste", "meaning": "第一的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Zum ersten Mal.",
          "translation": "第一次。",
          "segments": [
            { "text": "Zum", "meaning": "對於/在", "tail": " " },
            { "text": "ersten", "meaning": "第一的", "tail": " " },
            { "text": "Mal", "meaning": "次數", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bin der Erste.",
          "translation": "我是第一個 (男性的說法)。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "der", "meaning": "這 (陽性)", "tail": " " },
            { "text": "Erste", "meaning": "第一個", "tail": "." }
          ]
        },
        {
          "sentence": "In der ersten Reihe.",
          "translation": "在第一排。",
          "segments": [
            { "text": "In", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這 (陰性)", "tail": " " },
            { "text": "ersten", "meaning": "第一的", "tail": " " },
            { "text": "Reihe", "meaning": "排", "tail": "." }
          ]
        }
      ],
      "usage_note": "用來表示順序。德文的序數會跟形容詞一樣作字尾變化。",
      "image_file": "first.png"
    },
    {
      "id": "adj-05",
      "term_zh": "上一個 / 最後的",
      "related_terms": [
        {
          "term_target": "letzte",
          "pronunciation": ["/ˈlɛt͡stə/"],
          "specific_note": "",
          "segments": [{ "text": "letzte", "meaning": "最後的/上一個", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Letzte Woche.",
          "translation": "上個禮拜。",
          "segments": [
            { "text": "Letzte", "meaning": "上一個", "tail": " " },
            { "text": "Woche", "meaning": "週", "tail": "." }
          ]
        },
        {
          "sentence": "Letztes Jahr.",
          "translation": "去年。",
          "segments": [
            { "text": "Letztes", "meaning": "上一個", "tail": " " },
            { "text": "Jahr", "meaning": "年", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist meine letzte Chance.",
          "translation": "這是我的最後一次機會。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "letzte", "meaning": "最後的", "tail": " " },
            { "text": "Chance", "meaning": "機會", "tail": "." }
          ]
        }
      ],
      "usage_note": "兼具「過去的(上一個)」和「最終的(最後一個)」兩種意思。",
      "image_file": "last.png"
    },
    {
      "id": "adj-06",
      "term_zh": "下一個",
      "related_terms": [
        {
          "term_target": "nächste",
          "pronunciation": ["/ˈnɛːçstə/"],
          "specific_note": "",
          "segments": [{ "text": "nächste", "meaning": "下一個", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Nächste Station.",
          "translation": "下一站。(搭火車或捷運最常聽到的廣播)",
          "segments": [
            { "text": "Nächste", "meaning": "下一個", "tail": " " },
            { "text": "Station", "meaning": "車站/站", "tail": "." }
          ]
        },
        {
          "sentence": "Bis nächstes Mal.",
          "translation": "下次見。",
          "segments": [
            { "text": "Bis", "meaning": "直到", "tail": " " },
            { "text": "nächstes", "meaning": "下一個", "tail": " " },
            { "text": "Mal", "meaning": "次數", "tail": "." }
          ]
        },
        {
          "sentence": "Nächste Woche.",
          "translation": "下週。",
          "segments": [
            { "text": "Nächste", "meaning": "下一個", "tail": " " },
            { "text": "Woche", "meaning": "週", "tail": "." }
          ]
        }
      ],
      "usage_note": "接下來的順序。",
      "image_file": "next.png"
    },
    {
      "id": "adj-07",
      "term_zh": "長的",
      "related_terms": [
        {
          "term_target": "lang",
          "pronunciation": ["/laŋ/"],
          "specific_note": "",
          "segments": [{ "text": "lang", "meaning": "長", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Lange Haare.",
          "translation": "長頭髮。",
          "segments": [
            { "text": "Lange", "meaning": "長的", "tail": " " },
            { "text": "Haare", "meaning": "頭髮", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist eine lange Geschichte.",
          "translation": "這說來話長。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "lange", "meaning": "長的", "tail": " " },
            { "text": "Geschichte", "meaning": "故事", "tail": "." }
          ]
        },
        {
          "sentence": "Wie lang dauert das?",
          "translation": "這要花(持續)多久時間？",
          "segments": [
            { "text": "Wie", "meaning": "多/如何", "tail": " " },
            { "text": "lang", "meaning": "長(時間)", "tail": " " },
            { "text": "dauert", "meaning": "持續/花費", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        }
      ],
      "usage_note": "除了形容物品長度，也常用來形容時間的長久。",
      "image_file": "long.png"
    },
    {
      "id": "adj-08",
      "term_zh": "大的 / 高的 (形容人)",
      "related_terms": [
        {
          "term_target": "groß",
          "pronunciation": ["/ɡʁoːs/"],
          "specific_note": "",
          "segments": [{ "text": "groß", "meaning": "大/高", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das Haus ist sehr groß.",
          "translation": "這棟房子非常大。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "Haus", "meaning": "房子", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "groß", "meaning": "大", "tail": "." }
          ]
        },
        {
          "sentence": "Er ist sehr groß.",
          "translation": "他長得很高。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "groß", "meaning": "高/大", "tail": "." }
          ]
        },
        {
          "sentence": "Eine große Portion, bitte.",
          "translation": "麻煩給我一份大份的 (點餐必備)。",
          "segments": [
            { "text": "Eine", "meaning": "一份", "tail": " " },
            { "text": "große", "meaning": "大的", "tail": " " },
            { "text": "Portion", "meaning": "份量", "tail": ", " },
            { "text": "bitte", "meaning": "麻煩", "tail": "." }
          ]
        }
      ],
      "usage_note": "注意！形容一個人「長得很高」，德文不用 hoch，而是用 groß (體型大)。",
      "image_file": "big.png"
    },
    {
      "id": "adj-09",
      "term_zh": "小的",
      "related_terms": [
        {
          "term_target": "klein",
          "pronunciation": ["/klaɪ̯n/"],
          "specific_note": "",
          "segments": [{ "text": "klein", "meaning": "小", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Die Welt ist klein.",
          "translation": "世界真小。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Welt", "meaning": "世界", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "klein", "meaning": "小", "tail": "." }
          ]
        },
        {
          "sentence": "Ein kleines bisschen.",
          "translation": "一點點。(口語中超級愛用的說法)",
          "segments": [
            { "text": "Ein", "meaning": "一個", "tail": " " },
            { "text": "kleines", "meaning": "小的", "tail": " " },
            { "text": "bisschen", "meaning": "稍微/點點", "tail": "." }
          ]
        },
        {
          "sentence": "Eine kleine Portion.",
          "translation": "一小份。",
          "segments": [
            { "text": "Eine", "meaning": "一份", "tail": " " },
            { "text": "kleine", "meaning": "小的", "tail": " " },
            { "text": "Portion", "meaning": "份量", "tail": "." }
          ]
        }
      ],
      "usage_note": "體積小。",
      "image_file": "small.png"
    },
    {
      "id": "adj-10",
      "term_zh": "多的",
      "related_terms": [
        {
          "term_target": "viele",
          "pronunciation": ["/ˈfiːlə/"],
          "specific_note": "可數",
          "segments": [{ "text": "viele", "meaning": "許多", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Viele Leute.",
          "translation": "很多人。",
          "segments": [
            { "text": "Viele", "meaning": "許多", "tail": " " },
            { "text": "Leute", "meaning": "人", "tail": "." }
          ]
        },
        {
          "sentence": "Vielen Dank.",
          "translation": "非常感謝。(直譯：許多的感謝)",
          "segments": [
            { "text": "Vielen", "meaning": "許多的", "tail": " " },
            { "text": "Dank", "meaning": "感謝", "tail": "." }
          ]
        },
        {
          "sentence": "Wie viele?",
          "translation": "有多少(個)？",
          "segments": [
            { "text": "Wie", "meaning": "多/如何", "tail": " " },
            { "text": "viele", "meaning": "許多", "tail": "?" }
          ]
        }
      ],
      "usage_note": "v發 f 的音。用在可數名詞；如果是不可數 (例如水、時間)，則用 viel (不加e)。",
      "image_file": "many.png"
    },
    {
      "id": "adj-11",
      "term_zh": "高的 (形容事物)",
      "related_terms": [
        {
          "term_target": "hoch",
          "pronunciation": ["/hoːx/"],
          "specific_note": "",
          "segments": [{ "text": "hoch", "meaning": "高", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das Gebäude ist hoch.",
          "translation": "這建築物很高。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "Gebäude", "meaning": "建築物", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "hoch", "meaning": "高", "tail": "." }
          ]
        },
        {
          "sentence": "Der Preis ist zu hoch.",
          "translation": "價格太高了。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Preis", "meaning": "價格", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "zu", "meaning": "太", "tail": " " },
            { "text": "hoch", "meaning": "高", "tail": "." }
          ]
        },
        {
          "sentence": "Wie hoch ist das?",
          "translation": "這個有多高？",
          "segments": [
            { "text": "Wie", "meaning": "多/如何", "tail": " " },
            { "text": "hoch", "meaning": "高", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        }
      ],
      "usage_note": "用來形容建築物、山脈的高度，或是指數字、價格很高。不能用來形容人！",
      "image_file": "tall.png"
    },
    {
      "id": "adj-12",
      "term_zh": "年輕的",
      "related_terms": [
        {
          "term_target": "jung",
          "pronunciation": ["/jʊŋ/"],
          "specific_note": "",
          "segments": [{ "text": "jung", "meaning": "年輕", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Für jung und alt.",
          "translation": "老少咸宜。(直譯：給年輕和老的)",
          "segments": [
            { "text": "Für", "meaning": "為了", "tail": " " },
            { "text": "jung", "meaning": "年輕", "tail": " " },
            { "text": "und", "meaning": "和", "tail": " " },
            { "text": "alt", "meaning": "老", "tail": "." }
          ]
        },
        {
          "sentence": "Sie sieht sehr jung aus.",
          "translation": "她看起來非常年輕。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "sieht", "meaning": "看", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "jung", "meaning": "年輕", "tail": " " },
            { "text": "aus", "meaning": "出 (外表)", "tail": "." }
          ]
        },
        {
          "sentence": "Als ich jung war.",
          "translation": "當我年輕的時候。",
          "segments": [
            { "text": "Als", "meaning": "當...時", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "jung", "meaning": "年輕", "tail": " " },
            { "text": "war", "meaning": "是(過去式)", "tail": "." }
          ]
        }
      ],
      "usage_note": "年紀小。",
      "image_file": "young.png"
    },
    {
      "id": "adj-13",
      "term_zh": "老的 / 舊的",
      "related_terms": [
        {
          "term_target": "alt",
          "pronunciation": ["/alt/"],
          "specific_note": "",
          "segments": [{ "text": "alt", "meaning": "老/舊", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wie alt bist du?",
          "translation": "你幾歲？(直譯：你有多老？)",
          "segments": [
            { "text": "Wie", "meaning": "多", "tail": " " },
            { "text": "alt", "meaning": "老(歲數)", "tail": " " },
            { "text": "bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Das ist eine alte Stadt.",
          "translation": "這是一座古老的城市。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "alte", "meaning": "古老的", "tail": " " },
            { "text": "Stadt", "meaning": "城市", "tail": "." }
          ]
        },
        {
          "sentence": "Mein Handy ist sehr alt.",
          "translation": "我的手機很舊了。",
          "segments": [
            { "text": "Mein", "meaning": "我的", "tail": " " },
            { "text": "Handy", "meaning": "手機", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "alt", "meaning": "舊的", "tail": "." }
          ]
        }
      ],
      "usage_note": "兼具人「年老」與物品「老舊」的意思。問別人年紀時必用。",
      "image_file": "old.png"
    },
    {
      "id": "adj-14",
      "term_zh": "近的",
      "related_terms": [
        {
          "term_target": "nah",
          "pronunciation": ["/naː/"],
          "specific_note": "",
          "segments": [{ "text": "nah", "meaning": "近", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Der Bahnhof ist sehr nah.",
          "translation": "火車站非常近。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Bahnhof", "meaning": "火車站", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "nah", "meaning": "近", "tail": "." }
          ]
        },
        {
          "sentence": "Ist das in der Nähe?",
          "translation": "這在附近嗎？(in der Nähe 是超級常講的片語)",
          "segments": [
            { "text": "Ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這(定冠詞)", "tail": " " },
            { "text": "Nähe", "meaning": "附近(名詞)", "tail": "?" }
          ]
        },
        {
          "sentence": "Ganz nah.",
          "translation": "很近。",
          "segments": [
            { "text": "Ganz", "meaning": "完全地/相當", "tail": " " },
            { "text": "nah", "meaning": "近", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國人要說「在附近」，比起直接用 nah，更愛用名詞片語 in der Nähe。",
      "image_file": "near.png"
    },
    {
      "id": "adj-15",
      "term_zh": "遠的",
      "related_terms": [
        {
          "term_target": "weit",
          "pronunciation": ["/vaɪ̯t/"],
          "specific_note": "",
          "segments": [{ "text": "weit", "meaning": "遠", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wie weit ist es?",
          "translation": "這有多遠？",
          "segments": [
            { "text": "Wie", "meaning": "多", "tail": " " },
            { "text": "weit", "meaning": "遠", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "es", "meaning": "它", "tail": "?" }
          ]
        },
        {
          "sentence": "Es ist nicht weit von hier.",
          "translation": "離這裡不遠。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "weit", "meaning": "遠", "tail": " " },
            { "text": "von", "meaning": "從", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist zu weit.",
          "translation": "那太遠了。",
          "segments": [
            { "text": "Das", "meaning": "那", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "zu", "meaning": "太", "tail": " " },
            { "text": "weit", "meaning": "遠", "tail": "." }
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
          "term_target": "schnell",
          "pronunciation": ["/ʃnɛl/"],
          "specific_note": "",
          "segments": [{ "text": "schnell", "meaning": "快", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mach schnell!",
          "translation": "快一點！(口語催促別人時用)",
          "segments": [
            { "text": "Mach", "meaning": "做", "tail": " " },
            { "text": "schnell", "meaning": "快", "tail": "!" }
          ]
        },
        {
          "sentence": "Fahr nicht so schnell!",
          "translation": "不要開太快！",
          "segments": [
            { "text": "Fahr", "meaning": "開車", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "so", "meaning": "如此", "tail": " " },
            { "text": "schnell", "meaning": "快", "tail": "!" }
          ]
        },
        {
          "sentence": "Das ging schnell.",
          "translation": "時間過得真快 / 很快就完成了。(直譯：這走得很快)",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ging", "meaning": "走(過去式)", "tail": " " },
            { "text": "schnell", "meaning": "快", "tail": "." }
          ]
        }
      ],
      "usage_note": "速度快。",
      "image_file": "fast.png"
    },
    {
      "id": "adj-17",
      "term_zh": "慢的",
      "related_terms": [
        {
          "term_target": "langsam",
          "pronunciation": ["/ˈlaŋzaːm/"],
          "specific_note": "",
          "segments": [{ "text": "langsam", "meaning": "慢", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Langsam, langsam.",
          "translation": "慢慢來。(安撫別人情緒或要人別著急時用)",
          "segments": [
            { "text": "Langsam", "meaning": "慢", "tail": ", " },
            { "text": "langsam", "meaning": "慢", "tail": "." }
          ]
        },
        {
          "sentence": "Bitte sprechen Sie langsam.",
          "translation": "麻煩您說慢一點。",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "sprechen", "meaning": "說話", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "langsam", "meaning": "慢地", "tail": "." }
          ]
        },
        {
          "sentence": "Das Internet ist langsam.",
          "translation": "網路很慢。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "Internet", "meaning": "網路", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "langsam", "meaning": "慢的", "tail": "." }
          ]
        }
      ],
      "usage_note": "速度慢。",
      "image_file": "slow.png"
    },
    {
      "id": "adj-18",
      "term_zh": "熱的 / 燙的",
      "related_terms": [
        {
          "term_target": "heiß",
          "pronunciation": ["/haɪ̯s/"],
          "specific_note": "",
          "segments": [{ "text": "heiß", "meaning": "熱/燙", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Es ist sehr heiß heute.",
          "translation": "今天非常熱。",
          "segments": [
            { "text": "Es", "meaning": "它(天氣)", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "heiß", "meaning": "熱的", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": "." }
          ]
        },
        {
          "sentence": "Vorsicht, das ist heiß!",
          "translation": "小心，這個很燙！",
          "segments": [
            { "text": "Vorsicht", "meaning": "小心", "tail": ", " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "heiß", "meaning": "燙的", "tail": "!" }
          ]
        },
        {
          "sentence": "Mir ist heiß.",
          "translation": "我覺得好熱。",
          "segments": [
            { "text": "Mir", "meaning": "對我來說", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "heiß", "meaning": "熱的", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達「我覺得很熱」，一定要說 Mir ist heiß。如果說成 Ich bin heiß，會被誤會成「我很火辣性感」，千萬別講錯！",
      "image_file": "hot.png"
    },
    {
      "id": "adj-19",
      "term_zh": "冷的",
      "related_terms": [
        {
          "term_target": "kalt",
          "pronunciation": ["/kalt/"],
          "specific_note": "",
          "segments": [{ "text": "kalt", "meaning": "冷的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mir ist kalt.",
          "translation": "我覺得好冷。",
          "segments": [
            { "text": "Mir", "meaning": "對我來說", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "kalt", "meaning": "冷的", "tail": "." }
          ]
        },
        {
          "sentence": "Es ist kalt draußen.",
          "translation": "外面很冷。",
          "segments": [
            { "text": "Es", "meaning": "它(天氣)", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "kalt", "meaning": "冷的", "tail": " " },
            { "text": "draußen", "meaning": "在外面", "tail": "." }
          ]
        },
        {
          "sentence": "Ein kaltes Bier, bitte.",
          "translation": "請給我一杯冰啤酒。",
          "segments": [
            { "text": "Ein", "meaning": "一杯", "tail": " " },
            { "text": "kaltes", "meaning": "冷的", "tail": " " },
            { "text": "Bier", "meaning": "啤酒", "tail": ", " },
            { "text": "bitte", "meaning": "麻煩", "tail": "." }
          ]
        }
      ],
      "usage_note": "低溫。跟熱一樣，表達「我覺得冷」要用 Mir ist kalt。",
      "image_file": "cold.png"
    },
    {
      "id": "adj-20",
      "term_zh": "乾淨的",
      "related_terms": [
        {
          "term_target": "sauber",
          "pronunciation": ["/ˈzaʊ̯bɐ/"],
          "specific_note": "",
          "segments": [{ "text": "sauber", "meaning": "乾淨的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das Zimmer ist sauber.",
          "translation": "房間很乾淨。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "Zimmer", "meaning": "房間", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sauber", "meaning": "乾淨的", "tail": "." }
          ]
        },
        {
          "sentence": "Alles sauber!",
          "translation": "全都乾淨了！(打掃完後的口語)",
          "segments": [
            { "text": "Alles", "meaning": "一切", "tail": " " },
            { "text": "sauber", "meaning": "乾淨的", "tail": "!" }
          ]
        },
        {
          "sentence": "Mach das bitte sauber.",
          "translation": "麻煩把這個清乾淨。",
          "segments": [
            { "text": "Mach", "meaning": "做", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "bitte", "meaning": "請", "tail": " " },
            { "text": "sauber", "meaning": "乾淨的", "tail": "." }
          ]
        }
      ],
      "usage_note": "無髒汙。",
      "image_file": "clean.png"
    },
    {
      "id": "adj-21",
      "term_zh": "髒的",
      "related_terms": [
        {
          "term_target": "schmutzig",
          "pronunciation": ["/ˈʃmʊt͡sɪç/"],
          "specific_note": "",
          "segments": [{ "text": "schmutzig", "meaning": "髒的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Meine Hände sind schmutzig.",
          "translation": "我的手很髒。",
          "segments": [
            { "text": "Meine", "meaning": "我的", "tail": " " },
            { "text": "Hände", "meaning": "雙手", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "schmutzig", "meaning": "髒的", "tail": "." }
          ]
        },
        {
          "sentence": "Die Schuhe sind schmutzig.",
          "translation": "這些鞋子髒了。",
          "segments": [
            { "text": "Die", "meaning": "這些", "tail": " " },
            { "text": "Schuhe", "meaning": "鞋子", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "schmutzig", "meaning": "髒的", "tail": "." }
          ]
        },
        {
          "sentence": "Mach das nicht schmutzig!",
          "translation": "別把那個弄髒了！",
          "segments": [
            { "text": "Mach", "meaning": "做/弄", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "schmutzig", "meaning": "髒的", "tail": "!" }
          ]
        }
      ],
      "usage_note": "不乾淨。口語中也很常講 dreckig (泥濘的/髒的)。",
      "image_file": "dirty.png"
    },
    {
      "id": "adj-22",
      "term_zh": "簡單的",
      "related_terms": [
        {
          "term_target": "einfach",
          "pronunciation": ["/ˈaɪ̯nfax/"],
          "specific_note": "",
          "segments": [{ "text": "einfach", "meaning": "簡單的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist ganz einfach.",
          "translation": "這非常簡單。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "ganz", "meaning": "相當/完全", "tail": " " },
            { "text": "einfach", "meaning": "簡單的", "tail": "." }
          ]
        },
        {
          "sentence": "Ist das einfach?",
          "translation": "這簡單嗎？",
          "segments": [
            { "text": "Ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "einfach", "meaning": "簡單的", "tail": "?" }
          ]
        },
        {
          "sentence": "Es ist nicht so einfach.",
          "translation": "事情沒那麼簡單。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "so", "meaning": "如此", "tail": " " },
            { "text": "einfach", "meaning": "簡單的", "tail": "." }
          ]
        }
      ],
      "usage_note": "除了當形容詞「簡單」，德國人也常把它當副詞用，表示「就這樣、簡直」。",
      "image_file": "easy.png"
    },
    {
      "id": "adj-23",
      "term_zh": "困難的",
      "related_terms": [
        {
          "term_target": "schwer",
          "pronunciation": ["/ʃveːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "schwer", "meaning": "困難的/重的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist zu schwer.",
          "translation": "這太難了 (或是這太重了)。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "zu", "meaning": "太", "tail": " " },
            { "text": "schwer", "meaning": "難的", "tail": "." }
          ]
        },
        {
          "sentence": "Eine schwere Frage.",
          "translation": "一個很難的問題。",
          "segments": [
            { "text": "Eine", "meaning": "一個", "tail": " " },
            { "text": "schwere", "meaning": "難的", "tail": " " },
            { "text": "Frage", "meaning": "問題", "tail": "." }
          ]
        },
        {
          "sentence": "Es ist schwer zu sagen.",
          "translation": "這很難說。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schwer", "meaning": "難的", "tail": " " },
            { "text": "zu", "meaning": "去", "tail": " " },
            { "text": "sagen", "meaning": "說", "tail": "." }
          ]
        }
      ],
      "usage_note": "schwer 同時有「困難的」跟「沉重的」兩種意思。如果要精準表達「困難」，也可以用 schwierig。",
      "image_file": "difficult.png"
    },
    {
      "id": "adj-24",
      "term_zh": "正確的",
      "related_terms": [
        {
          "term_target": "richtig",
          "pronunciation": ["/ˈʁɪçtɪç/"],
          "specific_note": "",
          "segments": [{ "text": "richtig", "meaning": "正確的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist richtig.",
          "translation": "這是對的。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "richtig", "meaning": "正確的", "tail": "." }
          ]
        },
        {
          "sentence": "Ist das richtig so?",
          "translation": "這樣做對嗎？",
          "segments": [
            { "text": "Ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "richtig", "meaning": "正確的", "tail": " " },
            { "text": "so", "meaning": "這樣", "tail": "?" }
          ]
        },
        {
          "sentence": "Alles richtig!",
          "translation": "全對！",
          "segments": [
            { "text": "Alles", "meaning": "全部", "tail": " " },
            { "text": "richtig", "meaning": "正確的", "tail": "!" }
          ]
        }
      ],
      "usage_note": "對的。字尾的 ig 發音像輕輕的氣音「伊許」。",
      "image_file": "correct.png"
    },
    {
      "id": "adj-25",
      "term_zh": "錯誤的",
      "related_terms": [
        {
          "term_target": "falsch",
          "pronunciation": ["/falʃ/"],
          "specific_note": "",
          "segments": [{ "text": "falsch", "meaning": "錯誤的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist falsch.",
          "translation": "這是錯的。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "falsch", "meaning": "錯誤的", "tail": "." }
          ]
        },
        {
          "sentence": "Falscher Weg.",
          "translation": "走錯路了。",
          "segments": [
            { "text": "Falscher", "meaning": "錯的", "tail": " " },
            { "text": "Weg", "meaning": "路", "tail": "." }
          ]
        },
        {
          "sentence": "Habe ich was Falsches gesagt?",
          "translation": "我說錯什麼了嗎？(實用口語)",
          "segments": [
            { "text": "Habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "was", "meaning": "某事 (etwas)", "tail": " " },
            { "text": "Falsches", "meaning": "錯誤的", "tail": " " },
            { "text": "gesagt", "meaning": "說", "tail": "?" }
          ]
        }
      ],
      "usage_note": "不對的。搭錯車、打錯電話都可以用這個字。",
      "image_file": "wrong.png"
    },
    {
      "id": "adj-26",
      "term_zh": "重要的",
      "related_terms": [
        {
          "term_target": "wichtig",
          "pronunciation": ["/ˈvɪçtɪç/"],
          "specific_note": "",
          "segments": [{ "text": "wichtig", "meaning": "重要的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist sehr wichtig.",
          "translation": "這非常重要。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "wichtig", "meaning": "重要的", "tail": "." }
          ]
        },
        {
          "sentence": "Eine wichtige E-Mail.",
          "translation": "一封重要的電子郵件。",
          "segments": [
            { "text": "Eine", "meaning": "一封", "tail": " " },
            { "text": "wichtige", "meaning": "重要的", "tail": " " },
            { "text": "E-Mail", "meaning": "電子郵件", "tail": "." }
          ]
        },
        {
          "sentence": "Familie ist wichtig.",
          "translation": "家人很重要。",
          "segments": [
            { "text": "Familie", "meaning": "家庭/家人", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "wichtig", "meaning": "重要的", "tail": "." }
          ]
        }
      ],
      "usage_note": "關鍵的、不可忽略的。",
      "image_file": "important.png"
    },
    {
      "id": "adj-27",
      "term_zh": "不同的",
      "related_terms": [
        {
          "term_target": "anders",
          "pronunciation": ["/ˈandɛʁs/"],
          "specific_note": "不一樣",
          "segments": [{ "text": "anders", "meaning": "不同的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist anders.",
          "translation": "這不一樣。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "anders", "meaning": "不同的", "tail": "." }
          ]
        },
        {
          "sentence": "Wir sind alle anders.",
          "translation": "我們每個人都不一樣。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "alle", "meaning": "全部", "tail": " " },
            { "text": "anders", "meaning": "不同的", "tail": "." }
          ]
        },
        {
          "sentence": "Alles ist anders.",
          "translation": "一切都不一樣了。",
          "segments": [
            { "text": "Alles", "meaning": "一切", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "anders", "meaning": "不同的", "tail": "." }
          ]
        }
      ],
      "usage_note": "表示性質不同。如果要說物品花色不同，也可以用 unterschiedlich。",
      "image_file": "different.png"
    },
    {
      "id": "adj-28",
      "term_zh": "真的／真實的",
      "related_terms": [
        {
          "term_target": "echt",
          "pronunciation": ["/ɛçt/"],
          "specific_note": "",
          "segments": [{ "text": "echt", "meaning": "真的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ist das echt?",
          "translation": "這是真的嗎？",
          "segments": [
            { "text": "Ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "echt", "meaning": "真的", "tail": "?" }
          ]
        },
        {
          "sentence": "Das ist echtes Leder.",
          "translation": "這是真皮。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "echtes", "meaning": "真的", "tail": " " },
            { "text": "Leder", "meaning": "皮革", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist echt gut.",
          "translation": "這真的很好。(當成加強語氣的副詞，年輕人超愛講)",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "echt", "meaning": "真的", "tail": " " },
            { "text": "gut", "meaning": "好", "tail": "." }
          ]
        }
      ],
      "usage_note": "真實的。德國人聊天時很愛加一個 echt (真的！) 來表示驚訝或加強語氣。",
      "image_file": "real.png"
    },
    {
      "id": "adj-29",
      "term_zh": "有趣的",
      "related_terms": [
        {
          "term_target": "interessant",
          "pronunciation": ["/ɪntəʁɛˈsant/"],
          "specific_note": "",
          "segments": [{ "text": "interessant", "meaning": "有趣的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist sehr interessant.",
          "translation": "這非常有趣 (引人入勝)。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "interessant", "meaning": "有趣的", "tail": "." }
          ]
        },
        {
          "sentence": "Ein interessantes Buch.",
          "translation": "一本有趣的書。",
          "segments": [
            { "text": "Ein", "meaning": "一本", "tail": " " },
            { "text": "interessantes", "meaning": "有趣的", "tail": " " },
            { "text": "Buch", "meaning": "書", "tail": "." }
          ]
        },
        {
          "sentence": "Klingt interessant.",
          "translation": "聽起來很有意思。",
          "segments": [
            { "text": "Klingt", "meaning": "聽起來", "tail": " " },
            { "text": "interessant", "meaning": "有趣的", "tail": "." }
          ]
        }
      ],
      "usage_note": "能引起興趣的。",
      "image_file": "interesting.png"
    },
    {
      "id": "adj-30",
      "term_zh": "美麗的",
      "related_terms": [
        {
          "term_target": "schön",
          "pronunciation": ["/ʃøːn/"],
          "specific_note": "",
          "segments": [{ "text": "schön", "meaning": "美麗的/美好的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sehr schön.",
          "translation": "非常美 / 很好。",
          "segments": [
            { "text": "Sehr", "meaning": "非常", "tail": " " },
            { "text": "schön", "meaning": "美麗的", "tail": "." }
          ]
        },
        {
          "sentence": "Du bist schön.",
          "translation": "妳很美。",
          "segments": [
            { "text": "Du", "meaning": "妳", "tail": " " },
            { "text": "bist", "meaning": "是", "tail": " " },
            { "text": "schön", "meaning": "美麗的", "tail": "." }
          ]
        },
        {
          "sentence": "Was für ein schöner Tag!",
          "translation": "多麼美好的一天啊！",
          "segments": [
            { "text": "Was", "meaning": "多麼", "tail": " " },
            { "text": "für", "meaning": "(片語用法)", "tail": " " },
            { "text": "ein", "meaning": "一個", "tail": " " },
            { "text": "schöner", "meaning": "美好的", "tail": " " },
            { "text": "Tag", "meaning": "天", "tail": "!" }
          ]
        }
      ],
      "usage_note": "除了外表美麗，更常用來形容天氣、事情很「美好」。",
      "image_file": "beautiful.png"
    },
    {
      "id": "adj-31",
      "term_zh": "便宜的",
      "related_terms": [
        {
          "term_target": "günstig",
          "pronunciation": ["/ˈɡʏnstɪç/"],
          "specific_note": "划算的",
          "segments": [{ "text": "günstig", "meaning": "划算的/便宜的", "tail": "" }]
        },
        {
          "term_target": "billig",
          "pronunciation": ["/ˈbɪlɪç/"],
          "specific_note": "廉價的",
          "segments": [{ "text": "billig", "meaning": "廉價的/便宜的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist sehr günstig.",
          "translation": "這價格很划算(便宜)。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "günstig", "meaning": "划算的", "tail": "." }
          ]
        },
        {
          "sentence": "Haben Sie etwas Günstigeres?",
          "translation": "您有便宜一點的嗎？(購物殺價必備)",
          "segments": [
            { "text": "Haben", "meaning": "有", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "etwas", "meaning": "一些", "tail": " " },
            { "text": "Günstigeres", "meaning": "更便宜的東西", "tail": "?" }
          ]
        },
        {
          "sentence": "Das ist zu billig.",
          "translation": "這太廉價了。(有時帶有品質不佳的貶義)",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "zu", "meaning": "太", "tail": " " },
            { "text": "billig", "meaning": "廉價的", "tail": "." }
          ]
        }
      ],
      "usage_note": "稱讚東西便宜好用請說 günstig；billig 有時會給人「廉價、沒質感」的負面感覺。",
      "image_file": "cheap.png"
    },
    {
      "id": "adj-32",
      "term_zh": "昂貴的",
      "related_terms": [
        {
          "term_target": "teuer",
          "pronunciation": ["/ˈtɔɪ̯ɐ/"],
          "specific_note": "",
          "segments": [{ "text": "teuer", "meaning": "昂貴的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist zu teuer.",
          "translation": "這太貴了。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "zu", "meaning": "太", "tail": " " },
            { "text": "teuer", "meaning": "昂貴的", "tail": "." }
          ]
        },
        {
          "sentence": "Ein teures Auto.",
          "translation": "一輛昂貴的車。",
          "segments": [
            { "text": "Ein", "meaning": "一輛", "tail": " " },
            { "text": "teures", "meaning": "昂貴的", "tail": " " },
            { "text": "Auto", "meaning": "車", "tail": "." }
          ]
        },
        {
          "sentence": "Ist es teuer?",
          "translation": "它很貴嗎？",
          "segments": [
            { "text": "Ist", "meaning": "是", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "teuer", "meaning": "昂貴的", "tail": "?" }
          ]
        }
      ],
      "usage_note": "價格高。",
      "image_file": "expensive.png"
    },
    {
      "id": "adj-33",
      "term_zh": "飢餓的",
      "related_terms": [
        {
          "term_target": "hungrig",
          "pronunciation": ["/ˈhʊŋʁɪç/"],
          "specific_note": "",
          "segments": [{ "text": "hungrig", "meaning": "飢餓的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin hungrig.",
          "translation": "我餓了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "hungrig", "meaning": "飢餓的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe Hunger.",
          "translation": "我肚子餓。(直譯為『我有飢餓』，德國人最愛講這句)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "Hunger", "meaning": "飢餓(名詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Bist du hungrig?",
          "translation": "你餓了嗎？",
          "segments": [
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "hungrig", "meaning": "飢餓的", "tail": "?" }
          ]
        }
      ],
      "usage_note": "雖然形容詞是 hungrig，但口語中最常用動詞 haben 加上名詞 Hunger 來表達肚子餓。",
      "image_file": "hungry.png"
    },
    {
      "id": "adj-34",
      "term_zh": "疲累的",
      "related_terms": [
        {
          "term_target": "müde",
          "pronunciation": ["/ˈmyːdə/"],
          "specific_note": "",
          "segments": [{ "text": "müde", "meaning": "疲累的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin müde.",
          "translation": "我累了 / 睏了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "müde", "meaning": "疲累的", "tail": "." }
          ]
        },
        {
          "sentence": "Bist du schon müde?",
          "translation": "你已經累了嗎？",
          "segments": [
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "müde", "meaning": "疲累的", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich bin total müde.",
          "translation": "我累癱了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "total", "meaning": "完全地", "tail": " " },
            { "text": "müde", "meaning": "疲累的", "tail": "." }
          ]
        }
      ],
      "usage_note": "精神上或體力上的疲勞睏倦。",
      "image_file": "tired.png"
    },
    {
      "id": "adj-35",
      "term_zh": "忙碌的",
      "related_terms": [
        {
          "term_target": "beschäftigt",
          "pronunciation": ["/bəˈʃɛftɪçt/"],
          "specific_note": "",
          "segments": [{ "text": "beschäftigt", "meaning": "忙碌的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin gerade beschäftigt.",
          "translation": "我現在正在忙。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "gerade", "meaning": "正在/剛好", "tail": " " },
            { "text": "beschäftigt", "meaning": "忙碌的", "tail": "." }
          ]
        },
        {
          "sentence": "Bist du beschäftigt?",
          "translation": "你在忙嗎？",
          "segments": [
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "beschäftigt", "meaning": "忙碌的", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich habe viel zu tun.",
          "translation": "我有很多事要做 (很忙的另一種常見說法)。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "viel", "meaning": "很多", "tail": " " },
            { "text": "zu", "meaning": "去", "tail": " " },
            { "text": "tun", "meaning": "做", "tail": "." }
          ]
        }
      ],
      "usage_note": "有事情在身沒空。",
      "image_file": "busy.png"
    },
    {
      "id": "adj-36",
      "term_zh": "高興的",
      "related_terms": [
        {
          "term_target": "glücklich",
          "pronunciation": ["/ˈɡlʏklɪç/"],
          "specific_note": "",
          "segments": [{ "text": "glücklich", "meaning": "快樂的/幸福的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin so glücklich.",
          "translation": "我好開心。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "so", "meaning": "如此", "tail": " " },
            { "text": "glücklich", "meaning": "快樂的", "tail": "." }
          ]
        },
        {
          "sentence": "Bist du glücklich?",
          "translation": "你快樂嗎？",
          "segments": [
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "glücklich", "meaning": "快樂的", "tail": "?" }
          ]
        },
        {
          "sentence": "Ein glückliches neues Jahr!",
          "translation": "新年快樂！(祝賀語)",
          "segments": [
            { "text": "Ein", "meaning": "一個", "tail": " " },
            { "text": "glückliches", "meaning": "快樂的", "tail": " " },
            { "text": "neues", "meaning": "新的", "tail": " " },
            { "text": "Jahr", "meaning": "年", "tail": "!" }
          ]
        }
      ],
      "usage_note": "快樂、幸福。",
      "image_file": "happy.png"
    },
    {
      "id": "adj-37",
      "term_zh": "悲傷的",
      "related_terms": [
        {
          "term_target": "traurig",
          "pronunciation": ["/ˈtʁaʊ̯ʁɪç/"],
          "specific_note": "",
          "segments": [{ "text": "traurig", "meaning": "悲傷的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin traurig.",
          "translation": "我很難過。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "traurig", "meaning": "難過的", "tail": "." }
          ]
        },
        {
          "sentence": "Warum bist du traurig?",
          "translation": "你為什麼難過？",
          "segments": [
            { "text": "Warum", "meaning": "為什麼", "tail": " " },
            { "text": "bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "traurig", "meaning": "難過的", "tail": "?" }
          ]
        },
        {
          "sentence": "Sei nicht traurig.",
          "translation": "別難過了。",
          "segments": [
            { "text": "Sei", "meaning": "當(祈使句)", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "traurig", "meaning": "難過的", "tail": "." }
          ]
        }
      ],
      "usage_note": "傷心難過。",
      "image_file": "sad.png"
    },
    {
      "id": "adj-38",
      "term_zh": "相似的",
      "related_terms": [
        {
          "term_target": "ähnlich",
          "pronunciation": ["/ˈɛːnlɪç/"],
          "specific_note": "",
          "segments": [{ "text": "ähnlich", "meaning": "相似的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sehr ähnlich.",
          "translation": "非常相似。",
          "segments": [
            { "text": "Sehr", "meaning": "非常", "tail": " " },
            { "text": "ähnlich", "meaning": "相似的", "tail": "." }
          ]
        },
        {
          "sentence": "Sie sehen sich ähnlich.",
          "translation": "他們看起來很像。",
          "segments": [
            { "text": "Sie", "meaning": "他們", "tail": " " },
            { "text": "sehen", "meaning": "看", "tail": " " },
            { "text": "sich", "meaning": "互相", "tail": " " },
            { "text": "ähnlich", "meaning": "相似的", "tail": "." }
          ]
        },
        {
          "sentence": "Wir haben einen ähnlichen Geschmack.",
          "translation": "我們的品味很像。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "haben", "meaning": "有", "tail": " " },
            { "text": "einen", "meaning": "一個", "tail": " " },
            { "text": "ähnlichen", "meaning": "相似的", "tail": " " },
            { "text": "Geschmack", "meaning": "品味/味道", "tail": "." }
          ]
        }
      ],
      "usage_note": "外觀或性質上的相像。",
      "image_file": "similar.png"
    },
    {
      "id": "adj-39",
      "term_zh": "有名的",
      "related_terms": [
        {
          "term_target": "berühmt",
          "pronunciation": ["/bəˈʁyːmt/"],
          "specific_note": "",
          "segments": [{ "text": "berühmt", "meaning": "有名的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Er ist sehr berühmt.",
          "translation": "他非常有名。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "berühmt", "meaning": "有名的", "tail": "." }
          ]
        },
        {
          "sentence": "Eine berühmte Person.",
          "translation": "一位名人。",
          "segments": [
            { "text": "Eine", "meaning": "一位", "tail": " " },
            { "text": "berühmte", "meaning": "有名的", "tail": " " },
            { "text": "Person", "meaning": "人", "tail": "." }
          ]
        },
        {
          "sentence": "Die Stadt ist berühmt für ihr Bier.",
          "translation": "這座城市以啤酒聞名。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Stadt", "meaning": "城市", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "berühmt", "meaning": "有名的", "tail": " " },
            { "text": "für", "meaning": "因為", "tail": " " },
            { "text": "ihr", "meaning": "它的", "tail": " " },
            { "text": "Bier", "meaning": "啤酒", "tail": "." }
          ]
        }
      ],
      "usage_note": "知名的。如果是大家「熟知、認識」的那種知名，也可以用 bekannt。",
      "image_file": "famous.png"
    },
    {
      "id": "adj-40",
      "term_zh": "外國的",
      "related_terms": [
        {
          "term_target": "ausländisch",
          "pronunciation": ["/ˈaʊ̯slɛndɪʃ/"],
          "specific_note": "",
          "segments": [{ "text": "ausländisch", "meaning": "外國的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ausländisches Geld.",
          "translation": "外幣 (外國的錢)。",
          "segments": [
            { "text": "Ausländisches", "meaning": "外國的", "tail": " " },
            { "text": "Geld", "meaning": "錢", "tail": "." }
          ]
        },
        {
          "sentence": "Ich lerne eine Fremdsprache.",
          "translation": "我在學一門外語。(語言通常用 Fremdsprache 來表示外語)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "lerne", "meaning": "學", "tail": " " },
            { "text": "eine", "meaning": "一門", "tail": " " },
            { "text": "Fremdsprache", "meaning": "外語", "tail": "." }
          ]
        },
        {
          "sentence": "Ich mag ausländisches Essen.",
          "translation": "我喜歡外國食物。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "ausländisches", "meaning": "外國的", "tail": " " },
            { "text": "Essen", "meaning": "食物", "tail": "." }
          ]
        }
      ],
      "usage_note": "指國外的。有時候德國人也會用 fremd (陌生的/外來的) 來當作外國的同義詞，例如外語是 Fremdsprache。",
      "image_file": "foreign.png"
    },
    {
      "id": "adj-41",
      "term_zh": "聰明的",
      "related_terms": [
        {
          "term_target": "klug",
          "pronunciation": ["/kluːk/"],
          "specific_note": "口語常用",
          "segments": [{ "text": "klug", "meaning": "聰明的", "tail": "" }]
        },
        {
          "term_target": "intelligent",
          "pronunciation": ["/ɪntɛliˈɡɛnt/"],
          "specific_note": "智商高",
          "segments": [{ "text": "intelligent", "meaning": "聰明的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist eine kluge Frage.",
          "translation": "這是個聰明的好問題。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "kluge", "meaning": "聰明的", "tail": " " },
            { "text": "Frage", "meaning": "問題", "tail": "." }
          ]
        },
        {
          "sentence": "Er ist sehr klug.",
          "translation": "他非常聰明。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "klug", "meaning": "聰明", "tail": "." }
          ]
        },
        {
          "sentence": "Delfine sind intelligente Tiere.",
          "translation": "海豚是高智商的動物。",
          "segments": [
            { "text": "Delfine", "meaning": "海豚 (複數)", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "intelligente", "meaning": "聰明的", "tail": " " },
            { "text": "Tiere", "meaning": "動物 (複數)", "tail": "." }
          ]
        }
      ],
      "usage_note": "雖然 intelligent 也能用，但德國人日常口語更習慣用 klug 或 schlau 來稱讚別人機靈、聰明。",
      "image_file": "intelligent.png"
    },
    {
      "id": "adj-42",
      "term_zh": "危險的",
      "related_terms": [
        {
          "term_target": "gefährlich",
          "pronunciation": ["/ɡəˈfɛːɐ̯lɪç/"],
          "specific_note": "",
          "segments": [{ "text": "gefährlich", "meaning": "危險的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist zu gefährlich.",
          "translation": "這太危險了。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "zu", "meaning": "太", "tail": " " },
            { "text": "gefährlich", "meaning": "危險的", "tail": "." }
          ]
        },
        {
          "sentence": "Ein gefährlicher Hund.",
          "translation": "一隻危險的狗。",
          "segments": [
            { "text": "Ein", "meaning": "一隻", "tail": " " },
            { "text": "gefährlicher", "meaning": "危險的", "tail": " " },
            { "text": "Hund", "meaning": "狗", "tail": "." }
          ]
        },
        {
          "sentence": "Pass auf, das ist gefährlich!",
          "translation": "注意安全，那個很危險！",
          "segments": [
            { "text": "Pass", "meaning": "注意", "tail": " " },
            { "text": "auf", "meaning": "上(可分動詞)", "tail": ", " },
            { "text": "das", "meaning": "那", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "gefährlich", "meaning": "危險的", "tail": "!" }
          ]
        }
      ],
      "usage_note": "形容人或事物有危險性。在德國如果看到牌子寫 Lebensgefahr (生命危險)，千萬不要靠近。",
      "image_file": "dangerous.png"
    },
    {
      "id": "adj-43",
      "term_zh": "仁慈的 / 親切的",
      "related_terms": [
        {
          "term_target": "nett",
          "pronunciation": ["/nɛt/"],
          "specific_note": "",
          "segments": [{ "text": "nett", "meaning": "親切的/好的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist sehr nett von dir.",
          "translation": "你人真好 / 太感謝你了。(德國人超級愛用的道謝方式)",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "nett", "meaning": "親切的", "tail": " " },
            { "text": "von", "meaning": "出自", "tail": " " },
            { "text": "dir", "meaning": "你", "tail": "." }
          ]
        },
        {
          "sentence": "Sie ist eine sehr nette Person.",
          "translation": "她是一個非常好的人。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "nette", "meaning": "親切的", "tail": " " },
            { "text": "Person", "meaning": "人", "tail": "." }
          ]
        },
        {
          "sentence": "Sei nett zu ihm.",
          "translation": "對他好一點 / 對他友善點。",
          "segments": [
            { "text": "Sei", "meaning": "當(祈使句)", "tail": " " },
            { "text": "nett", "meaning": "親切的", "tail": " " },
            { "text": "zu", "meaning": "對", "tail": " " },
            { "text": "ihm", "meaning": "他", "tail": "." }
          ]
        }
      ],
      "usage_note": "英文的 kind (仁慈/好心) 在德文中對應的國民單字就是 nett，可以用來形容人友善或事情很美好。",
      "image_file": "kind.png"
    },
    {
      "id": "adj-44",
      "term_zh": "所有的／每一個",
      "related_terms": [
        {
          "term_target": "jeder",
          "pronunciation": ["/ˈjeːdɐ/"],
          "specific_note": "",
          "segments": [{ "text": "jeder", "meaning": "每個", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Jeden Tag.",
          "translation": "每一天。",
          "segments": [
            { "text": "Jeden", "meaning": "每個", "tail": " " },
            { "text": "Tag", "meaning": "天", "tail": "." }
          ]
        },
        {
          "sentence": "Jeder Student hat ein Buch.",
          "translation": "每個學生都有一本書。",
          "segments": [
            { "text": "Jeder", "meaning": "每個", "tail": " " },
            { "text": "Student", "meaning": "學生", "tail": " " },
            { "text": "hat", "meaning": "有", "tail": " " },
            { "text": "ein", "meaning": "一", "tail": " " },
            { "text": "Buch", "meaning": "書", "tail": "." }
          ]
        },
        {
          "sentence": "Jeder weiß das.",
          "translation": "每個人都知道這件事。",
          "segments": [
            { "text": "Jeder", "meaning": "每個人", "tail": " " },
            { "text": "weiß", "meaning": "知道", "tail": " " },
            { "text": "das", "meaning": "這", "tail": "." }
          ]
        }
      ],
      "usage_note": "這其實是個代名詞，字尾會根據後面接的名詞詞性變身（例如陽性的 jeden Tag、陰性的 jede Woche）。",
      "image_file": "every.png"
    },
    {
      "id": "adj-45",
      "term_zh": "最喜愛的",
      "related_terms": [
        {
          "term_target": "Lieblings-",
          "pronunciation": ["/ˈliːplɪŋs/"],
          "specific_note": "字首用法",
          "segments": [{ "text": "Lieblings-", "meaning": "最喜愛的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Was ist dein Lieblingsessen?",
          "translation": "你最愛的食物是什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "dein", "meaning": "你的", "tail": " " },
            { "text": "Lieblingsessen", "meaning": "最愛的食物", "tail": "?" }
          ]
        },
        {
          "sentence": "Das ist mein Lieblingsfilm.",
          "translation": "這是我最喜歡的電影。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Lieblingsfilm", "meaning": "最愛的電影", "tail": "." }
          ]
        },
        {
          "sentence": "Rot ist meine Lieblingsfarbe.",
          "translation": "紅色是我最愛的顏色。",
          "segments": [
            { "text": "Rot", "meaning": "紅色", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "Lieblingsfarbe", "meaning": "最愛的顏色", "tail": "." }
          ]
        }
      ],
      "usage_note": "注意！德文裡沒有 Favorite 這個單獨的形容詞，而是把「Lieblings」當作字首，直接跟後面的名詞像積木一樣組裝在一起。",
      "image_file": "favorite.png"
    },
    {
      "id": "adj-46",
      "term_zh": "美味的",
      "related_terms": [
        {
          "term_target": "lecker",
          "pronunciation": ["/ˈlɛkɐ/"],
          "specific_note": "",
          "segments": [{ "text": "lecker", "meaning": "美味的/好吃的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist sehr lecker!",
          "translation": "這非常好吃！",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "lecker", "meaning": "美味的", "tail": "!" }
          ]
        },
        {
          "sentence": "Das Essen war super lecker.",
          "translation": "這頓飯超好吃。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "Essen", "meaning": "食物", "tail": " " },
            { "text": "war", "meaning": "是(過去式)", "tail": " " },
            { "text": "super", "meaning": "超級", "tail": " " },
            { "text": "lecker", "meaning": "好吃的", "tail": "." }
          ]
        },
        {
          "sentence": "Sieht lecker aus.",
          "translation": "看起來很好吃。",
          "segments": [
            { "text": "Sieht", "meaning": "看起來", "tail": " " },
            { "text": "lecker", "meaning": "好吃的", "tail": " " },
            { "text": "aus", "meaning": "出(外表)", "tail": "." }
          ]
        }
      ],
      "usage_note": "形容食物好吃的國民單字，發音類似「勒卡」。吃一口食物稱讚一句 Lecker，德國人就會很開心喔！",
      "image_file": "delicious.png"
    }
  ]
},
{
  "id": "nouns",
  "name": "名詞",
  "items": [
    {
      "id": "n-01",
      "term_zh": "時間",
      "related_terms": [
        {
          "term_target": "Zeit",
          "pronunciation": ["/t͡saɪ̯t/"],
          "specific_note": "",
          "segments": [{ "text": "Zeit", "meaning": "時間", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wie viel Uhr ist es?",
          "translation": "現在幾點？(問幾點不說 Zeit，而是問 Uhr鐘錶)",
          "segments": [
            { "text": "Wie", "meaning": "多", "tail": " " },
            { "text": "viel", "meaning": "多", "tail": " " },
            { "text": "Uhr", "meaning": "鐘錶", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "es", "meaning": "它", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich habe keine Zeit.",
          "translation": "我沒時間。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "keine", "meaning": "沒有", "tail": " " },
            { "text": "Zeit", "meaning": "時間", "tail": "." }
          ]
        },
        {
          "sentence": "Lass dir Zeit.",
          "translation": "慢慢來，不著急。(直譯：留給你自己時間)",
          "segments": [
            { "text": "Lass", "meaning": "讓/留", "tail": " " },
            { "text": "dir", "meaning": "給你自己", "tail": " " },
            { "text": "Zeit", "meaning": "時間", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Zeit)。問時間幾點要用 Uhr，講「有空/沒時間」才用 Zeit。",
      "image_file": "time.png"
    },
    {
      "id": "n-02",
      "term_zh": "人們",
      "related_terms": [
        {
          "term_target": "Leute",
          "pronunciation": ["/ˈlɔɪ̯tə/"],
          "specific_note": "日常口語",
          "segments": [{ "text": "Leute", "meaning": "人們", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Viele Leute.",
          "translation": "很多人。",
          "segments": [
            { "text": "Viele", "meaning": "許多", "tail": " " },
            { "text": "Leute", "meaning": "人", "tail": "." }
          ]
        },
        {
          "sentence": "Leute, hört mal zu!",
          "translation": "大家 (各位)，聽著！",
          "segments": [
            { "text": "Leute", "meaning": "人們", "tail": ", " },
            { "text": "hört", "meaning": "聽", "tail": " " },
            { "text": "mal", "meaning": "一下", "tail": " " },
            { "text": "zu", "meaning": "(可分動詞字首)", "tail": "!" }
          ]
        },
        {
          "sentence": "Es gibt hier viele Leute.",
          "translation": "這裡有很多人。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "gibt", "meaning": "給(存在有)", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": " " },
            { "text": "viele", "meaning": "許多", "tail": " " },
            { "text": "Leute", "meaning": "人們", "tail": "." }
          ]
        }
      ],
      "usage_note": "永遠是複數 (die Leute)。日常生活中稱呼一群人最常講 Leute。",
      "image_file": "people.png"
    },
    {
      "id": "n-03",
      "term_zh": "金錢",
      "related_terms": [
        {
          "term_target": "Geld",
          "pronunciation": ["/ɡɛlt/"],
          "specific_note": "",
          "segments": [{ "text": "Geld", "meaning": "金錢", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich habe kein Geld.",
          "translation": "我沒錢。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "kein", "meaning": "沒有", "tail": " " },
            { "text": "Geld", "meaning": "錢", "tail": "." }
          ]
        },
        {
          "sentence": "Das kostet viel Geld.",
          "translation": "這要花很多錢。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "kostet", "meaning": "花費", "tail": " " },
            { "text": "viel", "meaning": "許多", "tail": " " },
            { "text": "Geld", "meaning": "錢", "tail": "." }
          ]
        },
        {
          "sentence": "Kannst du mir Geld leihen?",
          "translation": "你可以借我錢嗎？",
          "segments": [
            { "text": "Kannst", "meaning": "能", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "mir", "meaning": "對我", "tail": " " },
            { "text": "Geld", "meaning": "錢", "tail": " " },
            { "text": "leihen", "meaning": "借", "tail": "?" }
          ]
        }
      ],
      "usage_note": "中性 (das Geld)。不可數，說「沒有錢」一定要配 kein。",
      "image_file": "money.png"
    },
    {
      "id": "n-04",
      "term_zh": "孩子",
      "related_terms": [
        {
          "term_target": "Kind",
          "pronunciation": ["/kɪnt/"],
          "specific_note": "",
          "segments": [{ "text": "Kind", "meaning": "孩子", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sie hat ein Kind.",
          "translation": "她有一個孩子。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "hat", "meaning": "有", "tail": " " },
            { "text": "ein", "meaning": "一個", "tail": " " },
            { "text": "Kind", "meaning": "孩子", "tail": "." }
          ]
        },
        {
          "sentence": "Die Kinder spielen.",
          "translation": "孩子們在玩。",
          "segments": [
            { "text": "Die", "meaning": "這些", "tail": " " },
            { "text": "Kinder", "meaning": "孩子(複數)", "tail": " " },
            { "text": "spielen", "meaning": "玩耍", "tail": "." }
          ]
        },
        {
          "sentence": "Wir bekommen ein Kind.",
          "translation": "我們有小孩了 / 懷孕了。(直譯：我們即將得到一個孩子)",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "bekommen", "meaning": "得到", "tail": " " },
            { "text": "ein", "meaning": "一個", "tail": " " },
            { "text": "Kind", "meaning": "孩子", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Kind)，字尾 d 發 /t/ 的音。複數是 Kinder (知名巧克力健達出奇蛋的 Kinder 就是這個字！)。",
      "image_file": "child.png"
    },
    {
      "id": "n-05",
      "term_zh": "水",
      "related_terms": [
        {
          "term_target": "Wasser",
          "pronunciation": ["/ˈvasɐ/"],
          "specific_note": "",
          "segments": [{ "text": "Wasser", "meaning": "水", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ein Wasser, bitte.",
          "translation": "請給我一杯水。",
          "segments": [
            { "text": "Ein", "meaning": "一杯", "tail": " " },
            { "text": "Wasser", "meaning": "水", "tail": ", " },
            { "text": "bitte", "meaning": "請/麻煩", "tail": "." }
          ]
        },
        {
          "sentence": "Mit oder ohne Kohlensäure?",
          "translation": "要有氣泡還是無氣泡的？(在德國點水絕對會被問這句)",
          "segments": [
            { "text": "Mit", "meaning": "有/伴隨", "tail": " " },
            { "text": "oder", "meaning": "或", "tail": " " },
            { "text": "ohne", "meaning": "沒有", "tail": " " },
            { "text": "Kohlensäure", "meaning": "氣泡(碳酸)", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich möchte Leitungswasser.",
          "translation": "我想要自來水。(德國自來水可生飲，點這句通常免費)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "Leitungswasser", "meaning": "自來水", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Wasser)。德國人極度愛喝氣泡水，一般在餐廳點 Wasser 預設都會來氣泡水。",
      "image_file": "water.png"
    },
    {
      "id": "n-06",
      "term_zh": "食物 / 餐點",
      "related_terms": [
        {
          "term_target": "Essen",
          "pronunciation": ["/ˈɛsən/"],
          "specific_note": "",
          "segments": [{ "text": "Essen", "meaning": "食物", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das Essen ist lecker.",
          "translation": "這食物很好吃。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "Essen", "meaning": "食物", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "lecker", "meaning": "美味的", "tail": "." }
          ]
        },
        {
          "sentence": "Lass uns essen gehen.",
          "translation": "我們出去吃飯吧。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "essen", "meaning": "吃飯(動詞)", "tail": " " },
            { "text": "gehen", "meaning": "去", "tail": "." }
          ]
        },
        {
          "sentence": "Ich mache das Essen.",
          "translation": "我來準備餐點 / 我來做飯。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mache", "meaning": "做", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "Essen", "meaning": "餐點", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Essen)。把動詞 essen(吃) 的字首大寫，就變成名詞的食物或餐點了。",
      "image_file": "food.png"
    },
    {
      "id": "n-07",
      "term_zh": "朋友",
      "related_terms": [
        {
          "term_target": "Freund",
          "pronunciation": ["/fʁɔɪ̯nt/"],
          "specific_note": "男性朋友",
          "segments": [{ "text": "Freund", "meaning": "男性朋友", "tail": "" }]
        },
        {
          "term_target": "Freundin",
          "pronunciation": ["/ˈfʁɔɪ̯ndɪn/"],
          "specific_note": "女性朋友",
          "segments": [{ "text": "Freundin", "meaning": "女性朋友", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wir sind gute Freunde.",
          "translation": "我們是好朋友。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "gute", "meaning": "好的", "tail": " " },
            { "text": "Freunde", "meaning": "朋友(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Er ist ein Freund von mir.",
          "translation": "他是我的一位朋友。(強調只是純朋友)",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "ein", "meaning": "一位", "tail": " " },
            { "text": "Freund", "meaning": "朋友", "tail": " " },
            { "text": "von", "meaning": "的(從)", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist mein Freund.",
          "translation": "這是我男朋友。(注意！用了 mein 就代表情侶關係)",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Freund", "meaning": "男朋友", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Freund)。德文沒有「男朋友/女朋友」的專屬單字，所以直接說 mein Freund 會被當成另一半，要小心喔！",
      "image_file": "friend.png"
    },
    {
      "id": "n-08",
      "term_zh": "家庭",
      "related_terms": [
        {
          "term_target": "Familie",
          "pronunciation": ["/faˈmiːli̯ə/"],
          "specific_note": "",
          "segments": [{ "text": "Familie", "meaning": "家庭/家人", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich liebe meine Familie.",
          "translation": "我愛我的家人。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "liebe", "meaning": "愛", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "Familie", "meaning": "家人", "tail": "." }
          ]
        },
        {
          "sentence": "Wie geht es deiner Familie?",
          "translation": "你的家人好嗎？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "geht", "meaning": "走/過得", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "deiner", "meaning": "你的", "tail": " " },
            { "text": "Familie", "meaning": "家人", "tail": "?" }
          ]
        },
        {
          "sentence": "Eine große Familie.",
          "translation": "一個大家庭。",
          "segments": [
            { "text": "Eine", "meaning": "一個", "tail": " " },
            { "text": "große", "meaning": "大的", "tail": " " },
            { "text": "Familie", "meaning": "家庭", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Familie)。這是一個單數名詞，代表一整個「家庭」或統稱「家人」。",
      "image_file": "family.png"
    },
    {
      "id": "n-09",
      "term_zh": "學生",
      "related_terms": [
        {
          "term_target": "Student",
          "pronunciation": ["/ʃtuˈdɛnt/"],
          "specific_note": "大學生",
          "segments": [{ "text": "Student", "meaning": "大學生", "tail": "" }]
        },
        {
          "term_target": "Schüler",
          "pronunciation": ["/ˈʃyːlɐ/"],
          "specific_note": "中小學生",
          "segments": [{ "text": "Schüler", "meaning": "中小學生", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin Student.",
          "translation": "我是大學生。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "Student", "meaning": "大學生", "tail": "." }
          ]
        },
        {
          "sentence": "Sie ist Studentin.",
          "translation": "她是女大學生。(女性職業要在字尾加 in)",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "Studentin", "meaning": "女大學生", "tail": "." }
          ]
        },
        {
          "sentence": "Die Schüler lernen fleißig.",
          "translation": "這些(中小學)學生很認真學習。",
          "segments": [
            { "text": "Die", "meaning": "這些", "tail": " " },
            { "text": "Schüler", "meaning": "學生", "tail": " " },
            { "text": "lernen", "meaning": "學習", "tail": " " },
            { "text": "fleißig", "meaning": "勤奮地", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Student)。德文分得很細，大學生叫 Student，國小到高中生叫做 Schüler。",
      "image_file": "student.png"
    },
    {
      "id": "n-10",
      "term_zh": "文化",
      "related_terms": [
        {
          "term_target": "Kultur",
          "pronunciation": ["/kʊlˈtuːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "Kultur", "meaning": "文化", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich mag die deutsche Kultur.",
          "translation": "我喜歡德國文化。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "deutsche", "meaning": "德國的", "tail": " " },
            { "text": "Kultur", "meaning": "文化", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist ein Kulturschock.",
          "translation": "這真是一個文化衝擊。(外國人超常用單字)",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "ein", "meaning": "一個", "tail": " " },
            { "text": "Kulturschock", "meaning": "文化衝擊", "tail": "." }
          ]
        },
        {
          "sentence": "Andere Länder, andere Kulturen.",
          "translation": "不同國家，不同文化。(德國俗語，類似入境隨俗)",
          "segments": [
            { "text": "Andere", "meaning": "其他的", "tail": " " },
            { "text": "Länder", "meaning": "國家", "tail": ", " },
            { "text": "andere", "meaning": "其他的", "tail": " " },
            { "text": "Kulturen", "meaning": "文化(複數)", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Kultur)。",
      "image_file": "culture.png"
    },
    {
      "id": "n-11",
      "term_zh": "問題",
      "related_terms": [
        {
          "term_target": "Problem",
          "pronunciation": ["/pʁoˈbleːm/"],
          "specific_note": "麻煩/難題",
          "segments": [{ "text": "Problem", "meaning": "問題", "tail": "" }]
        },
        {
          "term_target": "Frage",
          "pronunciation": ["/ˈfʁaːɡə/"],
          "specific_note": "發問的問題",
          "segments": [{ "text": "Frage", "meaning": "提問", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Kein Problem!",
          "translation": "沒問題！",
          "segments": [
            { "text": "Kein", "meaning": "沒有", "tail": " " },
            { "text": "Problem", "meaning": "問題", "tail": "!" }
          ]
        },
        {
          "sentence": "Ich habe ein Problem.",
          "translation": "我遇到一個問題/麻煩了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "ein", "meaning": "一個", "tail": " " },
            { "text": "Problem", "meaning": "麻煩", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe eine Frage.",
          "translation": "我有一個問題想請教。(上課發問時用)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "Frage", "meaning": "提問", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Problem)。遇到麻煩的狀況用 Problem；如果是不懂想「發問」，要用 Frage。",
      "image_file": "problem.png"
    },
    {
      "id": "n-12",
      "term_zh": "公司",
      "related_terms": [
        {
          "term_target": "Firma",
          "pronunciation": ["/ˈfɪʁma/"],
          "specific_note": "",
          "segments": [{ "text": "Firma", "meaning": "公司", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich arbeite bei einer Firma.",
          "translation": "我在一家公司上班。(在公司要搭配介系詞 bei)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "arbeite", "meaning": "工作", "tail": " " },
            { "text": "bei", "meaning": "在...", "tail": " " },
            { "text": "einer", "meaning": "一家", "tail": " " },
            { "text": "Firma", "meaning": "公司", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist eine große Firma.",
          "translation": "這是一間大公司。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "eine", "meaning": "一家", "tail": " " },
            { "text": "große", "meaning": "大的", "tail": " " },
            { "text": "Firma", "meaning": "公司", "tail": "." }
          ]
        },
        {
          "sentence": "Meine Firma ist in München.",
          "translation": "我的公司在慕尼黑。",
          "segments": [
            { "text": "Meine", "meaning": "我的", "tail": " " },
            { "text": "Firma", "meaning": "公司", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "München", "meaning": "慕尼黑", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Firma)。",
      "image_file": "company.png"
    },
    {
      "id": "n-13",
      "term_zh": "男性 / 丈夫",
      "related_terms": [
        {
          "term_target": "Mann",
          "pronunciation": ["/man/"],
          "specific_note": "",
          "segments": [{ "text": "Mann", "meaning": "男人/丈夫", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Er ist ein guter Mann.",
          "translation": "他是個好男人。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "ein", "meaning": "一個", "tail": " " },
            { "text": "guter", "meaning": "好的", "tail": " " },
            { "text": "Mann", "meaning": "男人", "tail": "." }
          ]
        },
        {
          "sentence": "Der Mann da drüben.",
          "translation": "那邊那個男人。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Mann", "meaning": "男人", "tail": " " },
            { "text": "da", "meaning": "那裡", "tail": " " },
            { "text": "drüben", "meaning": "對面/那邊", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist mein Mann.",
          "translation": "這是我先生/老公。(加上所有格意思就變成老公)",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Mann", "meaning": "老公", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Mann)。可以指一般的成年男性，也可以用來指自己的丈夫。",
      "image_file": "man.png"
    },
    {
      "id": "n-14",
      "term_zh": "女性 / 妻子",
      "related_terms": [
        {
          "term_target": "Frau",
          "pronunciation": ["/fʁaʊ̯/"],
          "specific_note": "",
          "segments": [{ "text": "Frau", "meaning": "女人/妻子", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sie ist eine schöne Frau.",
          "translation": "她是一位美麗的女人。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "eine", "meaning": "一位", "tail": " " },
            { "text": "schöne", "meaning": "美麗的", "tail": " " },
            { "text": "Frau", "meaning": "女人", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist meine Frau.",
          "translation": "這是我老婆。(加了所有格就變成老婆)",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "Frau", "meaning": "老婆", "tail": "." }
          ]
        },
        {
          "sentence": "Guten Tag, Frau Müller.",
          "translation": "日安，穆勒女士。(放在姓氏前當作尊稱)",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Tag", "meaning": "天", "tail": ", " },
            { "text": "Frau", "meaning": "女士", "tail": " " },
            { "text": "Müller", "meaning": "穆勒(姓氏)", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Frau)。在德語裡非常萬用，可指女人、老婆，或是稱呼「女士」。",
      "image_file": "woman.png"
    },
    {
      "id": "n-15",
      "term_zh": "學校",
      "related_terms": [
        {
          "term_target": "Schule",
          "pronunciation": ["/ˈʃuːlə/"],
          "specific_note": "",
          "segments": [{ "text": "Schule", "meaning": "學校", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich gehe zur Schule.",
          "translation": "我去上學。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "gehe", "meaning": "去", "tail": " " },
            { "text": "zur", "meaning": "前往(zu der)", "tail": " " },
            { "text": "Schule", "meaning": "學校", "tail": "." }
          ]
        },
        {
          "sentence": "Die Schule ist aus.",
          "translation": "放學了。",
          "segments": [
            { "text": "Die", "meaning": "這所", "tail": " " },
            { "text": "Schule", "meaning": "學校", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "aus", "meaning": "結束", "tail": "." }
          ]
        },
        {
          "sentence": "Wie war es in der Schule?",
          "translation": "在學校過得怎樣？(德國爸媽接小孩必問)",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "war", "meaning": "是(過去式)", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Schule", "meaning": "學校", "tail": "?" }
          ]
        }
      ],
      "usage_note": "陰性 (die Schule)。通常指國中小與高中，大學則叫做 Universität (簡稱 Uni)。",
      "image_file": "school.png"
    },
    {
      "id": "n-16",
      "term_zh": "老師",
      "related_terms": [
        {
          "term_target": "Lehrer",
          "pronunciation": ["/ˈleːʁɐ/"],
          "specific_note": "男老師",
          "segments": [{ "text": "Lehrer", "meaning": "男老師", "tail": "" }]
        },
        {
          "term_target": "Lehrerin",
          "pronunciation": ["/ˈleːʁəʁɪn/"],
          "specific_note": "女老師",
          "segments": [{ "text": "Lehrerin", "meaning": "女老師", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mein Lehrer ist sehr nett.",
          "translation": "我的老師很親切。",
          "segments": [
            { "text": "Mein", "meaning": "我的", "tail": " " },
            { "text": "Lehrer", "meaning": "老師", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "nett", "meaning": "親切", "tail": "." }
          ]
        },
        {
          "sentence": "Sie ist Lehrerin.",
          "translation": "她是位(女)老師。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "Lehrerin", "meaning": "女老師", "tail": "." }
          ]
        },
        {
          "sentence": "Fragen wir den Lehrer.",
          "translation": "我們去問老師吧。",
          "segments": [
            { "text": "Fragen", "meaning": "問", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "den", "meaning": "這位", "tail": " " },
            { "text": "Lehrer", "meaning": "老師", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Lehrer)。在德國稱呼職業非常講究性別，如果是女性老師一定要加 in。",
      "image_file": "teacher.png"
    },
    {
      "id": "n-17",
      "term_zh": "電影 / 影片",
      "related_terms": [
        {
          "term_target": "Film",
          "pronunciation": ["/fɪlm/"],
          "specific_note": "",
          "segments": [{ "text": "Film", "meaning": "電影", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Lass uns einen Film schauen.",
          "translation": "我們來看部電影吧。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "einen", "meaning": "一部", "tail": " " },
            { "text": "Film", "meaning": "電影", "tail": " " },
            { "text": "schauen", "meaning": "看", "tail": "." }
          ]
        },
        {
          "sentence": "Wie war der Film?",
          "translation": "那部電影好看嗎？(直譯：那部電影如何？)",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "war", "meaning": "是(過去式)", "tail": " " },
            { "text": "der", "meaning": "這部", "tail": " " },
            { "text": "Film", "meaning": "電影", "tail": "?" }
          ]
        },
        {
          "sentence": "Das ist mein Lieblingsfilm.",
          "translation": "這是我最喜歡的電影。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Lieblingsfilm", "meaning": "最愛電影", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Film)。去「電影院」看電影則叫做 ins Kino gehen。",
      "image_file": "movie.png"
    },
    {
      "id": "n-18",
      "term_zh": "手機",
      "related_terms": [
        {
          "term_target": "Handy",
          "pronunciation": ["/ˈhɛndi/"],
          "specific_note": "",
          "segments": [{ "text": "Handy", "meaning": "手機", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wo ist mein Handy?",
          "translation": "我的手機在哪？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Handy", "meaning": "手機", "tail": "?" }
          ]
        },
        {
          "sentence": "Gib mir dein Handy.",
          "translation": "把你的手機給我。",
          "segments": [
            { "text": "Gib", "meaning": "給", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "dein", "meaning": "你的", "tail": " " },
            { "text": "Handy", "meaning": "手機", "tail": "." }
          ]
        },
        {
          "sentence": "Mein Handy ist kaputt.",
          "translation": "我的手機壞了。",
          "segments": [
            { "text": "Mein", "meaning": "我的", "tail": " " },
            { "text": "Handy", "meaning": "手機", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "kaputt", "meaning": "壞掉的", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Handy)。這是一個標準的「偽英語」，德國人不用 Mobile phone 而是自創了 Handy 這個字！",
      "image_file": "phone.png"
    },
    {
      "id": "n-19",
      "term_zh": "電腦",
      "related_terms": [
        {
          "term_target": "Computer",
          "pronunciation": ["/kɔmˈpjuːtɐ/"],
          "specific_note": "",
          "segments": [{ "text": "Computer", "meaning": "電腦", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Der Computer funktioniert nicht.",
          "translation": "這台電腦不動了 (壞了)。",
          "segments": [
            { "text": "Der", "meaning": "這台", "tail": " " },
            { "text": "Computer", "meaning": "電腦", "tail": " " },
            { "text": "funktioniert", "meaning": "運作", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Ich brauche einen neuen Computer.",
          "translation": "我需要一台新電腦。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "brauche", "meaning": "需要", "tail": " " },
            { "text": "einen", "meaning": "一台", "tail": " " },
            { "text": "neuen", "meaning": "新的", "tail": " " },
            { "text": "Computer", "meaning": "電腦", "tail": "." }
          ]
        },
        {
          "sentence": "Schalte den Computer ein.",
          "translation": "把電腦打開 (開機)。",
          "segments": [
            { "text": "Schalte", "meaning": "切換", "tail": " " },
            { "text": "den", "meaning": "這台", "tail": " " },
            { "text": "Computer", "meaning": "電腦", "tail": " " },
            { "text": "ein", "meaning": "開啟(可分動詞字首)", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Computer)。發音基本上跟英文一模一樣，另外筆記型電腦直接用 Laptop 也很常見。",
      "image_file": "computer.png"
    },
    {
      "id": "n-20",
      "term_zh": "車",
      "related_terms": [
        {
          "term_target": "Auto",
          "pronunciation": ["/ˈaʊ̯to/"],
          "specific_note": "",
          "segments": [{ "text": "Auto", "meaning": "汽車", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich fahre mit dem Auto.",
          "translation": "我開車去 (我搭車去)。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "fahre", "meaning": "駕駛", "tail": " " },
            { "text": "mit", "meaning": "用/伴隨", "tail": " " },
            { "text": "dem", "meaning": "這台", "tail": " " },
            { "text": "Auto", "meaning": "車", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist mein Auto.",
          "translation": "這是我的車。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Auto", "meaning": "車", "tail": "." }
          ]
        },
        {
          "sentence": "Wo hast du das Auto geparkt?",
          "translation": "你把車停哪了？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "hast", "meaning": "(助動詞)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "das", "meaning": "這台", "tail": " " },
            { "text": "Auto", "meaning": "車", "tail": " " },
            { "text": "geparkt", "meaning": "停放", "tail": "?" }
          ]
        }
      ],
      "usage_note": "中性 (das Auto)。鼎鼎大名的德國無限速高速公路就叫做 Autobahn！",
      "image_file": "car.png"
    },
    {
      "id": "n-21",
      "term_zh": "市場",
      "related_terms": [
        {
          "term_target": "Markt",
          "pronunciation": ["/maʁkt/"],
          "specific_note": "市集",
          "segments": [{ "text": "Markt", "meaning": "市場", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich gehe auf den Markt.",
          "translation": "我去市場。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "gehe", "meaning": "去", "tail": " " },
            { "text": "auf", "meaning": "在...上 (去)", "tail": " " },
            { "text": "den", "meaning": "這", "tail": " " },
            { "text": "Markt", "meaning": "市場", "tail": "." }
          ]
        },
        {
          "sentence": "Gibt es hier einen Nachtmarkt?",
          "translation": "這裡有夜市嗎？(向外國人介紹台灣必備單字)",
          "segments": [
            { "text": "Gibt", "meaning": "給(存在)", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": " " },
            { "text": "einen", "meaning": "一個", "tail": " " },
            { "text": "Nachtmarkt", "meaning": "夜市", "tail": "?" }
          ]
        },
        {
          "sentence": "Frisches Obst auf dem Markt.",
          "translation": "市場裡的新鮮水果。",
          "segments": [
            { "text": "Frisches", "meaning": "新鮮的", "tail": " " },
            { "text": "Obst", "meaning": "水果", "tail": " " },
            { "text": "auf", "meaning": "在...上", "tail": " " },
            { "text": "dem", "meaning": "這", "tail": " " },
            { "text": "Markt", "meaning": "市場", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Markt)。去市場通常會搭配介系詞 auf (在...之上)。",
      "image_file": "market.png"
    },
    {
      "id": "n-22",
      "term_zh": "衣服",
      "related_terms": [
        {
          "term_target": "Kleidung",
          "pronunciation": ["/ˈklaɪ̯dʊŋ/"],
          "specific_note": "正式統稱",
          "segments": [{ "text": "Kleidung", "meaning": "衣服", "tail": "" }]
        },
        {
          "term_target": "Klamotten",
          "pronunciation": ["/klaˈmɔtən/"],
          "specific_note": "口語常用",
          "segments": [{ "text": "Klamotten", "meaning": "衣服", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich muss Kleidung kaufen.",
          "translation": "我必須買衣服。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "Kleidung", "meaning": "衣服", "tail": " " },
            { "text": "kaufen", "meaning": "買", "tail": "." }
          ]
        },
        {
          "sentence": "Zieh dir warme Klamotten an.",
          "translation": "穿上保暖的衣服。(Klamotten 是極常聽到的口語)",
          "segments": [
            { "text": "Zieh", "meaning": "拉/穿", "tail": " " },
            { "text": "dir", "meaning": "為你自己", "tail": " " },
            { "text": "warme", "meaning": "溫暖的", "tail": " " },
            { "text": "Klamotten", "meaning": "衣服", "tail": " " },
            { "text": "an", "meaning": "上(穿上)", "tail": "." }
          ]
        },
        {
          "sentence": "Meine Kleidung ist schmutzig.",
          "translation": "我的衣服髒了。",
          "segments": [
            { "text": "Meine", "meaning": "我的", "tail": " " },
            { "text": "Kleidung", "meaning": "衣服", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schmutzig", "meaning": "髒的", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Kleidung)。口語中年輕人非常喜歡說 Klamotten (發音：卡摸騰)。",
      "image_file": "clothes.png"
    },
    {
      "id": "n-23",
      "term_zh": "商店",
      "related_terms": [
        {
          "term_target": "Geschäft",
          "pronunciation": ["/ɡəˈʃɛft/"],
          "specific_note": "正式",
          "segments": [{ "text": "Geschäft", "meaning": "商店/生意", "tail": "" }]
        },
        {
          "term_target": "Laden",
          "pronunciation": ["/ˈlaːdən/"],
          "specific_note": "日常小店",
          "segments": [{ "text": "Laden", "meaning": "店家", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Der Laden ist geschlossen.",
          "translation": "這家店關門了。",
          "segments": [
            { "text": "Der", "meaning": "這家", "tail": " " },
            { "text": "Laden", "meaning": "店", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "geschlossen", "meaning": "關閉的", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist das nächste Geschäft?",
          "translation": "最近的商店在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "nächste", "meaning": "下一個/最近的", "tail": " " },
            { "text": "Geschäft", "meaning": "商店", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich gehe in den Laden.",
          "translation": "我要進去那家店。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "gehe", "meaning": "去", "tail": " " },
            { "text": "in", "meaning": "進入", "tail": " " },
            { "text": "den", "meaning": "這家", "tail": " " },
            { "text": "Laden", "meaning": "店", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Geschäft) 或陽性 (der Laden)。日常街邊小店用 Laden 最自然。",
      "image_file": "shop.png"
    },
    {
      "id": "n-24",
      "term_zh": "巴士 / 公車",
      "related_terms": [
        {
          "term_target": "Bus",
          "pronunciation": ["/bʊs/"],
          "specific_note": "",
          "segments": [{ "text": "Bus", "meaning": "巴士", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich nehme den Bus.",
          "translation": "我搭公車。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "nehme", "meaning": "搭乘/拿", "tail": " " },
            { "text": "den", "meaning": "這班", "tail": " " },
            { "text": "Bus", "meaning": "公車", "tail": "." }
          ]
        },
        {
          "sentence": "Wann kommt der Bus?",
          "translation": "公車什麼時候來？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "kommt", "meaning": "來", "tail": " " },
            { "text": "der", "meaning": "這班", "tail": " " },
            { "text": "Bus", "meaning": "公車", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich habe den Bus verpasst.",
          "translation": "我錯過公車了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "den", "meaning": "這班", "tail": " " },
            { "text": "Bus", "meaning": "公車", "tail": " " },
            { "text": "verpasst", "meaning": "錯過", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Bus)。",
      "image_file": "bus.png"
    },
    {
      "id": "n-25",
      "term_zh": "街道",
      "related_terms": [
        {
          "term_target": "Straße",
          "pronunciation": ["/ˈʃtʁaːsə/"],
          "specific_note": "",
          "segments": [{ "text": "Straße", "meaning": "街道", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Auf der Straße.",
          "translation": "在街上。",
          "segments": [
            { "text": "Auf", "meaning": "在...上", "tail": " " },
            { "text": "der", "meaning": "這條", "tail": " " },
            { "text": "Straße", "meaning": "街道", "tail": "." }
          ]
        },
        {
          "sentence": "Gehen Sie über die Straße.",
          "translation": "請您過馬路 (穿越街道)。",
          "segments": [
            { "text": "Gehen", "meaning": "走", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "über", "meaning": "越過", "tail": " " },
            { "text": "die", "meaning": "這條", "tail": " " },
            { "text": "Straße", "meaning": "街道", "tail": "." }
          ]
        },
        {
          "sentence": "Wie heißt diese Straße?",
          "translation": "這條街叫什麼名字？",
          "segments": [
            { "text": "Wie", "meaning": "如何/什麼", "tail": " " },
            { "text": "heißt", "meaning": "叫做", "tail": " " },
            { "text": "diese", "meaning": "這條", "tail": " " },
            { "text": "Straße", "meaning": "街道", "tail": "?" }
          ]
        }
      ],
      "usage_note": "陰性 (die Straße)。常常看到路牌寫著 -straße 就是這個字，注意 ß 發的是氣音 ss 的聲音。",
      "image_file": "street.png"
    },
    {
      "id": "n-26",
      "term_zh": "房子 / 家",
      "related_terms": [
        {
          "term_target": "Haus",
          "pronunciation": ["/haʊ̯s/"],
          "specific_note": "",
          "segments": [{ "text": "Haus", "meaning": "房子/家", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin zu Hause.",
          "translation": "我在家。(靜態地點：zu Hause)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "zu", "meaning": "在", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Ich gehe nach Hause.",
          "translation": "我要回家。(動態前往：nach Hause)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "gehe", "meaning": "走", "tail": " " },
            { "text": "nach", "meaning": "往", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Sie haben ein neues Haus gekauft.",
          "translation": "他們買了一棟新房子。",
          "segments": [
            { "text": "Sie", "meaning": "他們", "tail": " " },
            { "text": "haben", "meaning": "(助動詞)", "tail": " " },
            { "text": "ein", "meaning": "一棟", "tail": " " },
            { "text": "neues", "meaning": "新的", "tail": " " },
            { "text": "Haus", "meaning": "房子", "tail": " " },
            { "text": "gekauft", "meaning": "買", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Haus)。最常跟介系詞搭配當作「家」來使用：zu Hause (在家) / nach Hause (回家)，請務必當成片語背起來！",
      "image_file": "house.png"
    },
    {
      "id": "n-27",
      "term_zh": "母親",
      "related_terms": [
        {
          "term_target": "Mutter",
          "pronunciation": ["/ˈmʊtɐ/"],
          "specific_note": "正式",
          "segments": [{ "text": "Mutter", "meaning": "母親", "tail": "" }]
        },
        {
          "term_target": "Mama",
          "pronunciation": ["/ˈmama/"],
          "specific_note": "親暱口語",
          "segments": [{ "text": "Mama", "meaning": "媽媽", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Meine Mutter.",
          "translation": "我母親。",
          "segments": [
            { "text": "Meine", "meaning": "我的", "tail": " " },
            { "text": "Mutter", "meaning": "母親", "tail": "." }
          ]
        },
        {
          "sentence": "Ich rufe meine Mama an.",
          "translation": "我打電話給我媽媽。(打給親人常講 Mama)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "rufe", "meaning": "呼叫/打給", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "Mama", "meaning": "媽媽", "tail": " " },
            { "text": "an", "meaning": "(可分動詞字首)", "tail": "." }
          ]
        },
        {
          "sentence": "Ihre Mutter ist sehr nett.",
          "translation": "她媽媽人很好。",
          "segments": [
            { "text": "Ihre", "meaning": "她的", "tail": " " },
            { "text": "Mutter", "meaning": "母親", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "nett", "meaning": "親切", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Mutter)。",
      "image_file": "mother.png"
    },
    {
      "id": "n-28",
      "term_zh": "父親",
      "related_terms": [
        {
          "term_target": "Vater",
          "pronunciation": ["/ˈfaːtɐ/"],
          "specific_note": "正式",
          "segments": [{ "text": "Vater", "meaning": "父親", "tail": "" }]
        },
        {
          "term_target": "Papa",
          "pronunciation": ["/ˈpapa/"],
          "specific_note": "親暱口語",
          "segments": [{ "text": "Papa", "meaning": "爸爸", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mein Vater.",
          "translation": "我父親。",
          "segments": [
            { "text": "Mein", "meaning": "我的", "tail": " " },
            { "text": "Vater", "meaning": "父親", "tail": "." }
          ]
        },
        {
          "sentence": "Wie geht es deinem Papa?",
          "translation": "你爸爸好嗎？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "geht", "meaning": "走/過得", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "deinem", "meaning": "你的", "tail": " " },
            { "text": "Papa", "meaning": "爸爸", "tail": "?" }
          ]
        },
        {
          "sentence": "Mein Vater arbeitet.",
          "translation": "我父親在工作。",
          "segments": [
            { "text": "Mein", "meaning": "我的", "tail": " " },
            { "text": "Vater", "meaning": "父親", "tail": " " },
            { "text": "arbeitet", "meaning": "工作", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Vater)。V 在德文裡通常發 f 的音，所以念起來像「發特」。",
      "image_file": "father.png"
    },
    {
      "id": "n-29",
      "term_zh": "兄弟",
      "related_terms": [
        {
          "term_target": "Bruder",
          "pronunciation": ["/ˈbʁuːdɐ/"],
          "specific_note": "泛指兄弟",
          "segments": [{ "text": "Bruder", "meaning": "兄弟", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mein Bruder.",
          "translation": "我兄弟 (哥哥或弟弟)。",
          "segments": [
            { "text": "Mein", "meaning": "我的", "tail": " " },
            { "text": "Bruder", "meaning": "兄弟", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe einen älteren Bruder.",
          "translation": "我有一個哥哥。(要在前面加上 älteren 較老的，才能分出是哥哥)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "einen", "meaning": "一個", "tail": " " },
            { "text": "älteren", "meaning": "較老的", "tail": " " },
            { "text": "Bruder", "meaning": "兄弟", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist für meinen Bruder.",
          "translation": "這是要給我兄弟的。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "für", "meaning": "給", "tail": " " },
            { "text": "meinen", "meaning": "我的", "tail": " " },
            { "text": "Bruder", "meaning": "兄弟", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Bruder)。西方人平時介紹不太會刻意分哥哥或弟弟，通稱 Bruder 即可。",
      "image_file": "brother.png"
    },
    {
      "id": "n-30",
      "term_zh": "姐妹",
      "related_terms": [
        {
          "term_target": "Schwester",
          "pronunciation": ["/ˈʃvɛstɐ/"],
          "specific_note": "",
          "segments": [{ "text": "Schwester", "meaning": "姐妹", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Meine Schwester.",
          "translation": "我姐妹 (姐姐或妹妹)。",
          "segments": [
            { "text": "Meine", "meaning": "我的", "tail": " " },
            { "text": "Schwester", "meaning": "姐妹", "tail": "." }
          ]
        },
        {
          "sentence": "Hast du eine Schwester?",
          "translation": "你有姐妹嗎？",
          "segments": [
            { "text": "Hast", "meaning": "有", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "Schwester", "meaning": "姐妹", "tail": "?" }
          ]
        },
        {
          "sentence": "Meine kleine Schwester.",
          "translation": "我的妹妹。(前面加 kleine 小的，就能明確表達是妹妹)",
          "segments": [
            { "text": "Meine", "meaning": "我的", "tail": " " },
            { "text": "kleine", "meaning": "小的", "tail": " " },
            { "text": "Schwester", "meaning": "姐妹", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Schwester)。",
      "image_file": "sister.png"
    },
    {
      "id": "n-31",
      "term_zh": "中文",
      "related_terms": [
        {
          "term_target": "Chinesisch",
          "pronunciation": ["/çiˈneːzɪʃ/"],
          "specific_note": "",
          "segments": [{ "text": "Chinesisch", "meaning": "中文", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich spreche Chinesisch.",
          "translation": "我會說中文。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "spreche", "meaning": "說", "tail": " " },
            { "text": "Chinesisch", "meaning": "中文", "tail": "." }
          ]
        },
        {
          "sentence": "Lernst du Chinesisch?",
          "translation": "你在學中文嗎？",
          "segments": [
            { "text": "Lernst", "meaning": "學", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "Chinesisch", "meaning": "中文", "tail": "?" }
          ]
        },
        {
          "sentence": "Chinesisch ist schwer.",
          "translation": "中文很難。",
          "segments": [
            { "text": "Chinesisch", "meaning": "中文", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schwer", "meaning": "困難的", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Chinesisch)。字首 Ch 在這裡發音偏向輕輕的「嘻」。如果向外國人介紹台灣，也可以特別說是 Mandarin (華語)。",
      "image_file": "chinese.png"
    },
    {
      "id": "n-32",
      "term_zh": "早晨",
      "related_terms": [
        {
          "term_target": "Morgen",
          "pronunciation": ["/ˈmɔʁɡən/"],
          "specific_note": "",
          "segments": [{ "text": "Morgen", "meaning": "早晨", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Guten Morgen.",
          "translation": "早安。",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Morgen", "meaning": "早晨", "tail": "." }
          ]
        },
        {
          "sentence": "Am Morgen trinke ich Kaffee.",
          "translation": "在早晨我喝咖啡。(表達在早晨必須用 am)",
          "segments": [
            { "text": "Am", "meaning": "在", "tail": " " },
            { "text": "Morgen", "meaning": "早晨", "tail": " " },
            { "text": "trinke", "meaning": "喝", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "Kaffee", "meaning": "咖啡", "tail": "." }
          ]
        },
        {
          "sentence": "Heute Morgen.",
          "translation": "今天早上。",
          "segments": [
            { "text": "Heute", "meaning": "今天", "tail": " " },
            { "text": "Morgen", "meaning": "早晨", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Morgen)。請注意，如果是小寫的 morgen，意思就變成「明天」。",
      "image_file": "morning.png"
    },
    {
      "id": "n-33",
      "term_zh": "夜晚",
      "related_terms": [
        {
          "term_target": "Nacht",
          "pronunciation": ["/naxt/"],
          "specific_note": "",
          "segments": [{ "text": "Nacht", "meaning": "夜晚", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Gute Nacht.",
          "translation": "晚安 (睡前道別)。",
          "segments": [
            { "text": "Gute", "meaning": "好的", "tail": " " },
            { "text": "Nacht", "meaning": "夜晚", "tail": "." }
          ]
        },
        {
          "sentence": "In der Nacht.",
          "translation": "在夜晚。",
          "segments": [
            { "text": "In", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Nacht", "meaning": "夜晚", "tail": "." }
          ]
        },
        {
          "sentence": "Es ist mitten in der Nacht.",
          "translation": "現在是半夜 (三更半夜)。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mitten", "meaning": "中間", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Nacht", "meaning": "夜晚", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Nacht)。早上/下午/晚上的介系詞都是 am，唯獨「在夜晚」必須說 in der Nacht，這是特例要記住！",
      "image_file": "night.png"
    },
    {
      "id": "n-34",
      "term_zh": "票／車票",
      "related_terms": [
        {
          "term_target": "Ticket",
          "pronunciation": ["/ˈtɪkɪt/"],
          "specific_note": "通用",
          "segments": [{ "text": "Ticket", "meaning": "票", "tail": "" }]
        },
        {
          "term_target": "Fahrkarte",
          "pronunciation": ["/ˈfaːɐ̯ˌkaʁtə/"],
          "specific_note": "交通車票",
          "segments": [{ "text": "Fahrkarte", "meaning": "車票", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Eine Fahrkarte, bitte.",
          "translation": "請給我一張車票。",
          "segments": [
            { "text": "Eine", "meaning": "一張", "tail": " " },
            { "text": "Fahrkarte", "meaning": "車票", "tail": ", " },
            { "text": "bitte", "meaning": "請/麻煩", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist mein Ticket?",
          "translation": "我的票在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Ticket", "meaning": "票", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich brauche ein Zugticket.",
          "translation": "我需要一張火車票。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "brauche", "meaning": "需要", "tail": " " },
            { "text": "ein", "meaning": "一張", "tail": " " },
            { "text": "Zugticket", "meaning": "火車票", "tail": "." }
          ]
        }
      ],
      "usage_note": "Ticket 適用於門票、演唱會票等。如果在車站買車票，常常會看到 Fahrkarte 這個字。",
      "image_file": "ticket.png"
    },
    {
      "id": "n-35",
      "term_zh": "包包",
      "related_terms": [
        {
          "term_target": "Tasche",
          "pronunciation": ["/ˈtaʃə/"],
          "specific_note": "",
          "segments": [{ "text": "Tasche", "meaning": "包包", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Meine Tasche.",
          "translation": "我的包包。",
          "segments": [
            { "text": "Meine", "meaning": "我的", "tail": " " },
            { "text": "Tasche", "meaning": "包包", "tail": "." }
          ]
        },
        {
          "sentence": "Hast du eine Tüte?",
          "translation": "你有提袋嗎？(去超市購物結帳如果需要塑膠袋或紙袋，要說 Tüte)",
          "segments": [
            { "text": "Hast", "meaning": "有", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "Tüte", "meaning": "提袋", "tail": "?" }
          ]
        },
        {
          "sentence": "Die Tasche ist schwer.",
          "translation": "這個包包很重。",
          "segments": [
            { "text": "Die", "meaning": "這個", "tail": " " },
            { "text": "Tasche", "meaning": "包包", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schwer", "meaning": "重的", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Tasche)。一般的手提包、側背包都是 Tasche。如果是後背包則叫 Rucksack。",
      "image_file": "bag.png"
    },
    {
      "id": "n-36",
      "term_zh": "杯子",
      "related_terms": [
        {
          "term_target": "Tasse",
          "pronunciation": ["/ˈtasə/"],
          "specific_note": "馬克杯/有柄的杯子",
          "segments": [{ "text": "Tasse", "meaning": "杯子", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Eine Tasse Kaffee, bitte.",
          "translation": "請給我一杯咖啡。(點咖啡必備句)",
          "segments": [
            { "text": "Eine", "meaning": "一杯", "tail": " " },
            { "text": "Tasse", "meaning": "杯子", "tail": " " },
            { "text": "Kaffee", "meaning": "咖啡", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Möchtest du eine Tasse Tee?",
          "translation": "你想來杯茶嗎？",
          "segments": [
            { "text": "Möchtest", "meaning": "想要", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "eine", "meaning": "一杯", "tail": " " },
            { "text": "Tasse", "meaning": "杯子", "tail": " " },
            { "text": "Tee", "meaning": "茶", "tail": "?" }
          ]
        },
        {
          "sentence": "Die Tasse ist leer.",
          "translation": "這杯子空了。",
          "segments": [
            { "text": "Die", "meaning": "這個", "tail": " " },
            { "text": "Tasse", "meaning": "杯子", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "leer", "meaning": "空的", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Tasse)。這是用來裝熱飲（如咖啡、茶）有耳朵的馬克杯或咖啡杯；裝冷飲的玻璃杯則叫 das Glas。",
      "image_file": "cup.png"
    },
    {
      "id": "n-37",
      "term_zh": "醫生",
      "related_terms": [
        {
          "term_target": "Arzt",
          "pronunciation": ["/aʁt͡st/"],
          "specific_note": "男醫生",
          "segments": [{ "text": "Arzt", "meaning": "男醫生", "tail": "" }]
        },
        {
          "term_target": "Ärztin",
          "pronunciation": ["/ˈɛʁt͡stɪn/"],
          "specific_note": "女醫生",
          "segments": [{ "text": "Ärztin", "meaning": "女醫生", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich muss zum Arzt.",
          "translation": "我必須去看醫生。(固定片語 zum Arzt)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "zum", "meaning": "去", "tail": " " },
            { "text": "Arzt", "meaning": "醫生", "tail": "." }
          ]
        },
        {
          "sentence": "Der Arzt ist sehr nett.",
          "translation": "這位醫生很親切。",
          "segments": [
            { "text": "Der", "meaning": "這位", "tail": " " },
            { "text": "Arzt", "meaning": "醫生", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "nett", "meaning": "親切", "tail": "." }
          ]
        },
        {
          "sentence": "Rufen Sie einen Arzt!",
          "translation": "請叫醫生！(緊急狀況用語)",
          "segments": [
            { "text": "Rufen", "meaning": "呼叫", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "einen", "meaning": "一位", "tail": " " },
            { "text": "Arzt", "meaning": "醫生", "tail": "!" }
          ]
        }
      ],
      "usage_note": "陽性 (der Arzt)。字首 A 要張大嘴巴唸，後面接的 rzt 音會黏在一起發出「疵ㄘ特」的聲音。",
      "image_file": "doctor.png"
    },
    {
      "id": "n-38",
      "term_zh": "警察",
      "related_terms": [
        {
          "term_target": "Polizei",
          "pronunciation": ["/poliˈt͡saɪ̯/"],
          "specific_note": "警察局/警方",
          "segments": [{ "text": "Polizei", "meaning": "警察", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ruf die Polizei!",
          "translation": "快報警！",
          "segments": [
            { "text": "Ruf", "meaning": "打電話/叫", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Polizei", "meaning": "警察", "tail": "!" }
          ]
        },
        {
          "sentence": "Wo ist die Polizeiwache?",
          "translation": "請問警察局在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "die", "meaning": "這間", "tail": " " },
            { "text": "Polizeiwache", "meaning": "警察局", "tail": "?" }
          ]
        },
        {
          "sentence": "Die Polizei kommt.",
          "translation": "警察來了。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Polizei", "meaning": "警察", "tail": " " },
            { "text": "kommt", "meaning": "來", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Polizei)。這字通常指「警方」這個整體；如果要指單一的警察先生，會說 der Polizist。",
      "image_file": "police.png"
    },
    {
      "id": "n-39",
      "term_zh": "醫院",
      "related_terms": [
        {
          "term_target": "Krankenhaus",
          "pronunciation": ["/ˈkʁaŋkənˌhaʊ̯s/"],
          "specific_note": "",
          "segments": [
            { "text": "Kranken", "meaning": "病人", "tail": "" },
            { "text": "haus", "meaning": "房子", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wo ist das Krankenhaus?",
          "translation": "醫院在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "das", "meaning": "這間", "tail": " " },
            { "text": "Krankenhaus", "meaning": "醫院", "tail": "?" }
          ]
        },
        {
          "sentence": "Er liegt im Krankenhaus.",
          "translation": "他正在住院。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "liegt", "meaning": "躺/位於", "tail": " " },
            { "text": "im", "meaning": "在...裡", "tail": " " },
            { "text": "Krankenhaus", "meaning": "醫院", "tail": "." }
          ]
        },
        {
          "sentence": "Ich muss ins Krankenhaus.",
          "translation": "我必須去醫院。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "ins", "meaning": "進入", "tail": " " },
            { "text": "Krankenhaus", "meaning": "醫院", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Krankenhaus)。這字是標準的德文積木造字法：kranken (生病的) + Haus (房子) = 醫院！",
      "image_file": "hospital.png"
    },
    {
      "id": "n-40",
      "term_zh": "座位",
      "related_terms": [
        {
          "term_target": "Platz",
          "pronunciation": ["/plat͡s/"],
          "specific_note": "",
          "segments": [{ "text": "Platz", "meaning": "位子/空間", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ist dieser Platz noch frei?",
          "translation": "這個位子還空著(沒人坐)嗎？(極度實用)",
          "segments": [
            { "text": "Ist", "meaning": "是", "tail": " " },
            { "text": "dieser", "meaning": "這個", "tail": " " },
            { "text": "Platz", "meaning": "位子", "tail": " " },
            { "text": "noch", "meaning": "還", "tail": " " },
            { "text": "frei", "meaning": "自由/空著", "tail": "?" }
          ]
        },
        {
          "sentence": "Nehmen Sie bitte Platz.",
          "translation": "請您入座。",
          "segments": [
            { "text": "Nehmen", "meaning": "拿/就", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "bitte", "meaning": "請", "tail": " " },
            { "text": "Platz", "meaning": "位子", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist mein Platz.",
          "translation": "這是我的位子。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Platz", "meaning": "位子", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Platz)。不只代表座位，也有「廣場」或「空間」的意思。",
      "image_file": "seat.png"
    },
    {
      "id": "n-41",
      "term_zh": "門",
      "related_terms": [
        {
          "term_target": "Tür",
          "pronunciation": ["/tyːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "Tür", "meaning": "門", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mach die Tür auf.",
          "translation": "把門打開。",
          "segments": [
            { "text": "Mach", "meaning": "做", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Tür", "meaning": "門", "tail": " " },
            { "text": "auf", "meaning": "開", "tail": "." }
          ]
        },
        {
          "sentence": "Bitte mach die Tür zu.",
          "translation": "請把門關上。",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "mach", "meaning": "做", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Tür", "meaning": "門", "tail": " " },
            { "text": "zu", "meaning": "關上", "tail": "." }
          ]
        },
        {
          "sentence": "Jemand ist an der Tür.",
          "translation": "有人在門口。",
          "segments": [
            { "text": "Jemand", "meaning": "有人", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "an", "meaning": "在...旁", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Tür", "meaning": "門", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Tür)。",
      "image_file": "door.png"
    },
    {
      "id": "n-42",
      "term_zh": "房間",
      "related_terms": [
        {
          "term_target": "Zimmer",
          "pronunciation": ["/ˈt͡sɪmɐ/"],
          "specific_note": "",
          "segments": [{ "text": "Zimmer", "meaning": "房間", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mein Zimmer.",
          "translation": "我的房間。",
          "segments": [
            { "text": "Mein", "meaning": "我的", "tail": " " },
            { "text": "Zimmer", "meaning": "房間", "tail": "." }
          ]
        },
        {
          "sentence": "Räum dein Zimmer auf.",
          "translation": "整理你的房間。",
          "segments": [
            { "text": "Räum", "meaning": "整理", "tail": " " },
            { "text": "dein", "meaning": "你的", "tail": " " },
            { "text": "Zimmer", "meaning": "房間", "tail": " " },
            { "text": "auf", "meaning": "起來", "tail": "." }
          ]
        },
        {
          "sentence": "Dieses Zimmer ist klein.",
          "translation": "這個房間很小。",
          "segments": [
            { "text": "Dieses", "meaning": "這個", "tail": " " },
            { "text": "Zimmer", "meaning": "房間", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "klein", "meaning": "小的", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Zimmer)。單複數同形，一個房間或多個房間都叫 Zimmer。",
      "image_file": "room.png"
    },
    {
      "id": "n-43",
      "term_zh": "車站",
      "related_terms": [
        {
          "term_target": "Bahnhof",
          "pronunciation": ["/ˈbaːnˌhoːf/"],
          "specific_note": "火車站",
          "segments": [{ "text": "Bahnhof", "meaning": "車站", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Der Hauptbahnhof.",
          "translation": "中央車站。(德國每個大城市都有的總站)",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Hauptbahnhof", "meaning": "中央車站", "tail": "." }
          ]
        },
        {
          "sentence": "Wir treffen uns am Bahnhof.",
          "translation": "我們在車站見面。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "treffen", "meaning": "見面", "tail": " " },
            { "text": "uns", "meaning": "互相", "tail": " " },
            { "text": "am", "meaning": "在", "tail": " " },
            { "text": "Bahnhof", "meaning": "車站", "tail": "." }
          ]
        },
        {
          "sentence": "Der Bahnhof ist überfüllt.",
          "translation": "車站裡擠滿了人。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Bahnhof", "meaning": "車站", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "überfüllt", "meaning": "過度擁擠的", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Bahnhof)。通常指火車或輕軌車站；如果是公車站牌，德文會用 Haltestelle。",
      "image_file": "station.png"
    },
    {
      "id": "n-44",
      "term_zh": "地鐵",
      "related_terms": [
        {
          "term_target": "U-Bahn",
          "pronunciation": ["/ˈuːˌbaːn/"],
          "specific_note": "",
          "segments": [{ "text": "U-Bahn", "meaning": "地下鐵", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Die U-Bahn-Station.",
          "translation": "地鐵站 / 捷運站。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "U-Bahn-Station", "meaning": "地鐵站", "tail": "." }
          ]
        },
        {
          "sentence": "Nimm die U-Bahn.",
          "translation": "去搭地鐵。",
          "segments": [
            { "text": "Nimm", "meaning": "搭乘/拿", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "U-Bahn", "meaning": "地鐵", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist die U-Bahn?",
          "translation": "地鐵在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "U-Bahn", "meaning": "地鐵", "tail": "?" }
          ]
        }
      ],
      "usage_note": "陰性 (die U-Bahn)。全名是 Untergrundbahn (地下鐵路)，但在德國大家都簡稱 U-Bahn。",
      "image_file": "subway.png"
    },
    {
      "id": "n-45",
      "term_zh": "火車",
      "related_terms": [
        {
          "term_target": "Zug",
          "pronunciation": ["/t͡suːk/"],
          "specific_note": "",
          "segments": [{ "text": "Zug", "meaning": "火車", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mit dem Zug.",
          "translation": "搭火車。",
          "segments": [
            { "text": "Mit", "meaning": "藉由/伴隨", "tail": " " },
            { "text": "dem", "meaning": "這", "tail": " " },
            { "text": "Zug", "meaning": "火車", "tail": "." }
          ]
        },
        {
          "sentence": "Der Zug fährt ab.",
          "translation": "火車要出發(開動)了。",
          "segments": [
            { "text": "Der", "meaning": "這班", "tail": " " },
            { "text": "Zug", "meaning": "火車", "tail": " " },
            { "text": "fährt", "meaning": "行駛", "tail": " " },
            { "text": "ab", "meaning": "出發(字尾)", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe den Zug verpasst.",
          "translation": "我錯過了火車。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "den", "meaning": "這班", "tail": " " },
            { "text": "Zug", "meaning": "火車", "tail": " " },
            { "text": "verpasst", "meaning": "錯過", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Zug)。",
      "image_file": "train.png"
    },
    {
      "id": "n-46",
      "term_zh": "機場",
      "related_terms": [
        {
          "term_target": "Flughafen",
          "pronunciation": ["/ˈfluːkˌhaːfən/"],
          "specific_note": "",
          "segments": [
            { "text": "Flug", "meaning": "飛行", "tail": "" },
            { "text": "hafen", "meaning": "港口", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Zum Flughafen fahren.",
          "translation": "乘車前往機場。",
          "segments": [
            { "text": "Zum", "meaning": "前往", "tail": " " },
            { "text": "Flughafen", "meaning": "機場", "tail": " " },
            { "text": "fahren", "meaning": "乘車", "tail": "." }
          ]
        },
        {
          "sentence": "Am Flughafen ankommen.",
          "translation": "抵達機場。",
          "segments": [
            { "text": "Am", "meaning": "在", "tail": " " },
            { "text": "Flughafen", "meaning": "機場", "tail": " " },
            { "text": "ankommen", "meaning": "抵達", "tail": "." }
          ]
        },
        {
          "sentence": "Der Flughafen ist weit weg.",
          "translation": "機場在很遠的地方。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Flughafen", "meaning": "機場", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "weit", "meaning": "遠", "tail": " " },
            { "text": "weg", "meaning": "離開", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Flughafen)。字面上的意思就是「飛行的港口」。",
      "image_file": "airport.png"
    },
    {
      "id": "n-47",
      "term_zh": "行李",
      "related_terms": [
        {
          "term_target": "Gepäck",
          "pronunciation": ["/ɡəˈpɛk/"],
          "specific_note": "",
          "segments": [{ "text": "Gepäck", "meaning": "行李", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Schweres Gepäck.",
          "translation": "很重的行李。",
          "segments": [
            { "text": "Schweres", "meaning": "重的", "tail": " " },
            { "text": "Gepäck", "meaning": "行李", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist mein Gepäck?",
          "translation": "我的行李在哪裡？(下飛機找行李轉盤必問)",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Gepäck", "meaning": "行李", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich habe viel Gepäck.",
          "translation": "我有很多行李。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "viel", "meaning": "許多", "tail": " " },
            { "text": "Gepäck", "meaning": "行李", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Gepäck)。這是一個不可數名詞，通常指你帶的所有行李總和。",
      "image_file": "luggage.png"
    },
    {
      "id": "n-48",
      "term_zh": "地圖",
      "related_terms": [
        {
          "term_target": "Karte",
          "pronunciation": ["/ˈkaʁtə/"],
          "specific_note": "",
          "segments": [{ "text": "Karte", "meaning": "地圖/卡片", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Auf der Karte.",
          "translation": "在地圖上。",
          "segments": [
            { "text": "Auf", "meaning": "在...上", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Karte", "meaning": "地圖", "tail": "." }
          ]
        },
        {
          "sentence": "Schau auf die Karte.",
          "translation": "看地圖。",
          "segments": [
            { "text": "Schau", "meaning": "看", "tail": " " },
            { "text": "auf", "meaning": "在...上", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Karte", "meaning": "地圖", "tail": "." }
          ]
        },
        {
          "sentence": "Hast du eine Karte?",
          "translation": "你有地圖嗎？",
          "segments": [
            { "text": "Hast", "meaning": "有", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "eine", "meaning": "一張", "tail": " " },
            { "text": "Karte", "meaning": "地圖", "tail": "?" }
          ]
        }
      ],
      "usage_note": "陰性 (die Karte)。在德文裡也是萬用字，不管是地圖、明信片、還是信用卡都可以叫 Karte。若要特指城市地圖，可以說 Stadtplan。",
      "image_file": "map.png"
    },
    {
      "id": "n-49",
      "term_zh": "行政櫃檯／票口",
      "related_terms": [
        {
          "term_target": "Schalter",
          "pronunciation": ["/ˈʃaltɐ/"],
          "specific_note": "",
          "segments": [{ "text": "Schalter", "meaning": "櫃檯/開關", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Am Schalter.",
          "translation": "在櫃檯。",
          "segments": [
            { "text": "Am", "meaning": "在", "tail": " " },
            { "text": "Schalter", "meaning": "櫃檯", "tail": "." }
          ]
        },
        {
          "sentence": "Geh zum Ticketschalter.",
          "translation": "去售票櫃檯。",
          "segments": [
            { "text": "Geh", "meaning": "去", "tail": " " },
            { "text": "zum", "meaning": "前往", "tail": " " },
            { "text": "Ticketschalter", "meaning": "售票櫃檯", "tail": "." }
          ]
        },
        {
          "sentence": "Am Schalter bezahlen.",
          "translation": "在櫃檯結帳/付錢。",
          "segments": [
            { "text": "Am", "meaning": "在", "tail": " " },
            { "text": "Schalter", "meaning": "櫃檯", "tail": " " },
            { "text": "bezahlen", "meaning": "支付", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Schalter)。在機場、車站的售票口或服務台，都是用這個字。",
      "image_file": "counter.png"
    },
    {
      "id": "n-50",
      "term_zh": "大廳",
      "related_terms": [
        {
          "term_target": "Lobby",
          "pronunciation": ["/ˈlɔbi/"],
          "specific_note": "飯店大廳",
          "segments": [{ "text": "Lobby", "meaning": "大廳", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Warte in der Lobby.",
          "translation": "在大廳等。",
          "segments": [
            { "text": "Warte", "meaning": "等待", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Lobby", "meaning": "大廳", "tail": "." }
          ]
        },
        {
          "sentence": "Wir treffen uns in der Lobby.",
          "translation": "我們在大廳碰面。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "treffen", "meaning": "見面", "tail": " " },
            { "text": "uns", "meaning": "互相", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Lobby", "meaning": "大廳", "tail": "." }
          ]
        },
        {
          "sentence": "Die Hotellobby ist schön.",
          "translation": "這間飯店的大廳很漂亮。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Hotellobby", "meaning": "飯店大廳", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schön", "meaning": "美麗的", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Lobby)。這是一個外來語，用法跟英文幾乎一模一樣。",
      "image_file": "lobby.png"
    },
    {
      "id": "n-51",
      "term_zh": "預定 / 預約",
      "related_terms": [
        {
          "term_target": "Reservierung",
          "pronunciation": ["/ʁezɛʁˈviːʁʊŋ/"],
          "specific_note": "",
          "segments": [{ "text": "Reservierung", "meaning": "預約/保留", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Eine Reservierung machen.",
          "translation": "做預約。",
          "segments": [
            { "text": "Eine", "meaning": "一個", "tail": " " },
            { "text": "Reservierung", "meaning": "預約", "tail": " " },
            { "text": "machen", "meaning": "做", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe eine Reservierung.",
          "translation": "我有預約。(去飯店或餐廳報到必說的句子)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "Reservierung", "meaning": "預約", "tail": "." }
          ]
        },
        {
          "sentence": "Die Reservierung stornieren.",
          "translation": "取消預約。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Reservierung", "meaning": "預約", "tail": " " },
            { "text": "stornieren", "meaning": "取消", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Reservierung)。德國不管是去餐廳、看醫生、剪頭髮，幾乎所有事情都必須先預約 (Termin / Reservierung)！",
      "image_file": "reservation.png"
    },
    {
      "id": "n-52",
      "term_zh": "入住",
      "related_terms": [
        {
          "term_target": "einchecken",
          "pronunciation": ["/ˈaɪ̯nˌt͡ʃɛkən/"],
          "specific_note": "動詞用法最普遍",
          "segments": [{ "text": "einchecken", "meaning": "辦理入住", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wo ist der Check-in?",
          "translation": "入住櫃檯在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這個", "tail": " " },
            { "text": "Check-in", "meaning": "入住處", "tail": "?" }
          ]
        },
        {
          "sentence": "Wir möchten einchecken.",
          "translation": "我們想要辦理入住。(直接用動詞最自然)",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "möchten", "meaning": "想要", "tail": " " },
            { "text": "einchecken", "meaning": "辦理入住", "tail": "." }
          ]
        },
        {
          "sentence": "Ab wann kann man einchecken?",
          "translation": "幾點開始可以入住？",
          "segments": [
            { "text": "Ab", "meaning": "從", "tail": " " },
            { "text": "wann", "meaning": "何時", "tail": " " },
            { "text": "kann", "meaning": "可以", "tail": " " },
            { "text": "man", "meaning": "人們", "tail": " " },
            { "text": "einchecken", "meaning": "辦理入住", "tail": "?" }
          ]
        }
      ],
      "usage_note": "雖然有名詞的 der Check-in，但德國人在表達「辦理入住」時，更習慣直接把英文外來語加上德文字尾，變成動詞 einchecken 來使用。",
      "image_file": "check_in.png"
    },
    {
      "id": "n-53",
      "term_zh": "退房",
      "related_terms": [
        {
          "term_target": "auschecken",
          "pronunciation": ["/ˈaʊ̯sˌt͡ʃɛkən/"],
          "specific_note": "動詞用法",
          "segments": [{ "text": "auschecken", "meaning": "辦理退房", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wir möchten auschecken.",
          "translation": "我們想要辦理退房。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "möchten", "meaning": "想要", "tail": " " },
            { "text": "auschecken", "meaning": "退房", "tail": "." }
          ]
        },
        {
          "sentence": "Check-out ist um 11 Uhr.",
          "translation": "退房時間是11點。",
          "segments": [
            { "text": "Check-out", "meaning": "退房(名詞)", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "um", "meaning": "在(時間)", "tail": " " },
            { "text": "11", "meaning": "11", "tail": " " },
            { "text": "Uhr", "meaning": "點鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Wir haben schon ausgecheckt.",
          "translation": "我們已經退房了。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "haben", "meaning": "(助動詞)", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "ausgecheckt", "meaning": "退房(過去分詞)", "tail": "." }
          ]
        }
      ],
      "usage_note": "和入住一樣，通常直接使用動詞 auschecken 來表達要退房了。",
      "image_file": "check_out.png"
    },
    {
      "id": "n-54",
      "term_zh": "飲料",
      "related_terms": [
        {
          "term_target": "Getränk",
          "pronunciation": ["/ɡəˈtʁɛŋk/"],
          "specific_note": "",
          "segments": [{ "text": "Getränk", "meaning": "飲料", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ein kaltes Getränk.",
          "translation": "一杯冷飲。",
          "segments": [
            { "text": "Ein", "meaning": "一個", "tail": " " },
            { "text": "kaltes", "meaning": "冷的", "tail": " " },
            { "text": "Getränk", "meaning": "飲料", "tail": "." }
          ]
        },
        {
          "sentence": "Ein Getränk kaufen.",
          "translation": "買飲料。",
          "segments": [
            { "text": "Ein", "meaning": "一個", "tail": " " },
            { "text": "Getränk", "meaning": "飲料", "tail": " " },
            { "text": "kaufen", "meaning": "買", "tail": "." }
          ]
        },
        {
          "sentence": "Welches Getränk möchtest du?",
          "translation": "你想要什麼飲料？",
          "segments": [
            { "text": "Welches", "meaning": "哪一個", "tail": " " },
            { "text": "Getränk", "meaning": "飲料", "tail": " " },
            { "text": "möchtest", "meaning": "想要", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        }
      ],
      "usage_note": "中性 (das Getränk)。餐廳菜單上通常會有 Getränke (飲料類) 這一區。",
      "image_file": "drink.png"
    },
    {
      "id": "n-55",
      "term_zh": "菜單",
      "related_terms": [
        {
          "term_target": "Speisekarte",
          "pronunciation": ["/ˈʃpaɪ̯zəˌkaʁtə/"],
          "specific_note": "",
          "segments": [
            { "text": "Speise", "meaning": "菜餚", "tail": "" },
            { "text": "karte", "meaning": "卡片", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Die Speisekarte, bitte.",
          "translation": "請給我菜單。(點餐神句)",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Speisekarte", "meaning": "菜單", "tail": ", " },
            { "text": "bitte", "meaning": "請/麻煩", "tail": "." }
          ]
        },
        {
          "sentence": "Schau in die Speisekarte.",
          "translation": "看菜單。",
          "segments": [
            { "text": "Schau", "meaning": "看", "tail": " " },
            { "text": "in", "meaning": "進入", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Speisekarte", "meaning": "菜單", "tail": "." }
          ]
        },
        {
          "sentence": "Kann ich die Speisekarte sehen?",
          "translation": "我可以看一下菜單嗎？",
          "segments": [
            { "text": "Kann", "meaning": "可以", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Speisekarte", "meaning": "菜單", "tail": " " },
            { "text": "sehen", "meaning": "看見", "tail": "?" }
          ]
        }
      ],
      "usage_note": "陰性 (die Speisekarte)。注意！在德國餐廳如果要「菜單」，不能說 das Menü (那是指套餐)，一定要說 Speisekarte。",
      "image_file": "menu.png"
    },
    {
      "id": "n-56",
      "term_zh": "午餐",
      "related_terms": [
        {
          "term_target": "Mittagessen",
          "pronunciation": ["/ˈmɪtaːkˌɛsən/"],
          "specific_note": "",
          "segments": [
            { "text": "Mittag", "meaning": "中午", "tail": "" },
            { "text": "essen", "meaning": "食物", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Zu Mittag essen.",
          "translation": "吃午餐。(德文習慣用 zu 加上名詞來表達吃哪一餐)",
          "segments": [
            { "text": "Zu", "meaning": "作為", "tail": " " },
            { "text": "Mittag", "meaning": "中午", "tail": " " },
            { "text": "essen", "meaning": "吃(動詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Zeit fürs Mittagessen.",
          "translation": "吃午餐的時間到了。",
          "segments": [
            { "text": "Zeit", "meaning": "時間", "tail": " " },
            { "text": "fürs", "meaning": "為了", "tail": " " },
            { "text": "Mittagessen", "meaning": "午餐", "tail": "." }
          ]
        },
        {
          "sentence": "Was gibt es zum Mittagessen?",
          "translation": "午餐吃什麼？(直譯：午餐有什麼東西？)",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "gibt", "meaning": "給(有)", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "zum", "meaning": "當作", "tail": " " },
            { "text": "Mittagessen", "meaning": "午餐", "tail": "?" }
          ]
        }
      ],
      "usage_note": "中性 (das Mittagessen)。",
      "image_file": "lunch.png"
    },
    {
      "id": "n-57",
      "term_zh": "晚餐",
      "related_terms": [
        {
          "term_target": "Abendessen",
          "pronunciation": ["/ˈaːbəntˌɛsən/"],
          "specific_note": "",
          "segments": [
            { "text": "Abend", "meaning": "晚上", "tail": "" },
            { "text": "essen", "meaning": "食物", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Zu Abend essen.",
          "translation": "吃晚餐。",
          "segments": [
            { "text": "Zu", "meaning": "作為", "tail": " " },
            { "text": "Abend", "meaning": "晚上", "tail": " " },
            { "text": "essen", "meaning": "吃(動詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Abendessen kochen.",
          "translation": "煮晚餐。",
          "segments": [
            { "text": "Abendessen", "meaning": "晚餐", "tail": " " },
            { "text": "kochen", "meaning": "煮", "tail": "." }
          ]
        },
        {
          "sentence": "Das Abendessen ist fertig.",
          "translation": "晚餐準備好了。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "Abendessen", "meaning": "晚餐", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "fertig", "meaning": "完成的", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Abendessen)。德國傳統的晚餐通常吃冷食(麵包、起司、火腿)，所以晚餐也常被稱為 Abendbrot (晚上的麵包)。",
      "image_file": "dinner.png"
    },
    {
      "id": "n-58",
      "term_zh": "帳單",
      "related_terms": [
        {
          "term_target": "Rechnung",
          "pronunciation": ["/ˈʁɛçnʊŋ/"],
          "specific_note": "",
          "segments": [{ "text": "Rechnung", "meaning": "帳單", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Die Rechnung, bitte.",
          "translation": "麻煩買單 / 請給我帳單。(吃飽必備神句)",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Rechnung", "meaning": "帳單", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Kann ich die Rechnung haben?",
          "translation": "我可以拿帳單嗎？",
          "segments": [
            { "text": "Kann", "meaning": "可以", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Rechnung", "meaning": "帳單", "tail": " " },
            { "text": "haben", "meaning": "擁有", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich bezahle die Rechnung.",
          "translation": "我來付這筆帳。(我請客)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bezahle", "meaning": "支付", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Rechnung", "meaning": "帳單", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Rechnung)。",
      "image_file": "bill.png"
    },
    {
      "id": "n-59",
      "term_zh": "價錢",
      "related_terms": [
        {
          "term_target": "Preis",
          "pronunciation": ["/pʁaɪ̯s/"],
          "specific_note": "",
          "segments": [{ "text": "Preis", "meaning": "價格", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Guter Preis.",
          "translation": "價格很不錯 (很划算)。",
          "segments": [
            { "text": "Guter", "meaning": "好的", "tail": " " },
            { "text": "Preis", "meaning": "價格", "tail": "." }
          ]
        },
        {
          "sentence": "Was ist der Preis?",
          "translation": "這個價格是多少？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Preis", "meaning": "價格", "tail": "?" }
          ]
        },
        {
          "sentence": "Der Preis ist hoch.",
          "translation": "價格很高 / 很貴。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Preis", "meaning": "價格", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "hoch", "meaning": "高的", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Preis)。",
      "image_file": "price.png"
    },
    {
      "id": "n-60",
      "term_zh": "收據 / 明細",
      "related_terms": [
        {
          "term_target": "Kassenbon",
          "pronunciation": ["/ˈkasn̩ˌbɔŋ/"],
          "specific_note": "購物明細",
          "segments": [{ "text": "Kassenbon", "meaning": "收據/發票", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Den Kassenbon, bitte.",
          "translation": "請給我收據。",
          "segments": [
            { "text": "Den", "meaning": "這個", "tail": " " },
            { "text": "Kassenbon", "meaning": "收據", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Behalten Sie den Kassenbon.",
          "translation": "請保留您的收據。",
          "segments": [
            { "text": "Behalten", "meaning": "保留", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "den", "meaning": "這個", "tail": " " },
            { "text": "Kassenbon", "meaning": "收據", "tail": "." }
          ]
        },
        {
          "sentence": "Brauchen Sie den Kassenbon?",
          "translation": "您需要收據(明細)嗎？(在超市結帳店員必問的神句)",
          "segments": [
            { "text": "Brauchen", "meaning": "需要", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "den", "meaning": "這個", "tail": " " },
            { "text": "Kassenbon", "meaning": "收據", "tail": "?" }
          ]
        }
      ],
      "usage_note": "陽性 (der Kassenbon)。德國超市店員結完帳一定會問要不要 Bon，如果不需要，直接回 Nein, danke (不用，謝謝) 即可。",
      "image_file": "receipt.png"
    },
    {
      "id": "n-61",
      "term_zh": "尺寸",
      "related_terms": [
        {
          "term_target": "Größe",
          "pronunciation": ["/ˈɡʁøːsə/"],
          "specific_note": "",
          "segments": [{ "text": "Größe", "meaning": "尺寸/大小", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Eine große Größe.",
          "translation": "大尺寸。",
          "segments": [
            { "text": "Eine", "meaning": "一個", "tail": " " },
            { "text": "große", "meaning": "大的", "tail": " " },
            { "text": "Größe", "meaning": "尺寸", "tail": "." }
          ]
        },
        {
          "sentence": "Welche Größe haben Sie?",
          "translation": "您穿什麼尺寸？(直譯：您有什麼尺寸？)",
          "segments": [
            { "text": "Welche", "meaning": "哪個", "tail": " " },
            { "text": "Größe", "meaning": "尺寸", "tail": " " },
            { "text": "haben", "meaning": "有", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": "?" }
          ]
        },
        {
          "sentence": "Die Größe stimmt nicht.",
          "translation": "這尺寸不對(不合適)。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Größe", "meaning": "尺寸", "tail": " " },
            { "text": "stimmt", "meaning": "正確", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Größe)。在德國買衣服被問這句時，可以直接回答歐洲尺碼，如 38、40 或 S、M 等。",
      "image_file": "size.png"
    },
    {
      "id": "n-62",
      "term_zh": "入口",
      "related_terms": [
        {
          "term_target": "Eingang",
          "pronunciation": ["/ˈaɪ̯nˌɡaŋ/"],
          "specific_note": "",
          "segments": [{ "text": "Eingang", "meaning": "入口", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Der Haupteingang.",
          "translation": "正門 / 主要入口。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Haupteingang", "meaning": "正門入口", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist der Eingang?",
          "translation": "入口在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Eingang", "meaning": "入口", "tail": "?" }
          ]
        },
        {
          "sentence": "Eingang freihalten!",
          "translation": "保持入口淨空！(德國車庫或門前常看到的告示牌)",
          "segments": [
            { "text": "Eingang", "meaning": "入口", "tail": " " },
            { "text": "freihalten", "meaning": "保持空曠", "tail": "!" }
          ]
        }
      ],
      "usage_note": "陽性 (der Eingang)。這是一個積木字：ein(進入) + Gang(走道)。",
      "image_file": "entrance.png"
    },
    {
      "id": "n-63",
      "term_zh": "出口",
      "related_terms": [
        {
          "term_target": "Ausgang",
          "pronunciation": ["/ˈaʊ̯sˌɡaŋ/"],
          "specific_note": "",
          "segments": [{ "text": "Ausgang", "meaning": "出口", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hier ist der Ausgang.",
          "translation": "這裡是出口。",
          "segments": [
            { "text": "Hier", "meaning": "這裡", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Ausgang", "meaning": "出口", "tail": "." }
          ]
        },
        {
          "sentence": "Der Notausgang.",
          "translation": "緊急出口。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Notausgang", "meaning": "緊急出口", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist der Ausgang?",
          "translation": "出口在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Ausgang", "meaning": "出口", "tail": "?" }
          ]
        }
      ],
      "usage_note": "陽性 (der Ausgang)。也是積木字：aus(向外) + Gang(走道)。如果在高速公路上開車，交流道的出口則是叫 Ausfahrt。",
      "image_file": "exit.png"
    },
    {
      "id": "n-64",
      "term_zh": "台灣",
      "related_terms": [
        {
          "term_target": "Taiwan",
          "pronunciation": ["/taɪ̯ˈvaːn/"],
          "specific_note": "",
          "segments": [{ "text": "Taiwan", "meaning": "台灣", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich liebe Taiwan.",
          "translation": "我愛台灣。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "liebe", "meaning": "愛", "tail": " " },
            { "text": "Taiwan", "meaning": "台灣", "tail": "." }
          ]
        },
        {
          "sentence": "Willkommen in Taiwan.",
          "translation": "歡迎來到台灣。",
          "segments": [
            { "text": "Willkommen", "meaning": "歡迎", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "Taiwan", "meaning": "台灣", "tail": "." }
          ]
        },
        {
          "sentence": "Taiwan ist wunderschön.",
          "translation": "台灣非常美。",
          "segments": [
            { "text": "Taiwan", "meaning": "台灣", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "wunderschön", "meaning": "極美的", "tail": "." }
          ]
        }
      ],
      "usage_note": "地名。德文發音的 W 會發成 V 的音，念起來像「泰萬」。",
      "image_file": "taiwan.png"
    },
    {
      "id": "n-65",
      "term_zh": "台灣人",
      "related_terms": [
        {
          "term_target": "Taiwaner",
          "pronunciation": ["/taɪ̯ˈvaːnɐ/"],
          "specific_note": "男台灣人",
          "segments": [{ "text": "Taiwaner", "meaning": "台灣人", "tail": "" }]
        },
        {
          "term_target": "Taiwanerin",
          "pronunciation": ["/taɪ̯ˈvaːnəʁɪn/"],
          "specific_note": "女台灣人",
          "segments": [{ "text": "Taiwanerin", "meaning": "女台灣人", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin Taiwaner.",
          "translation": "我是台灣人。(男性說法)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "Taiwaner", "meaning": "台灣人", "tail": "." }
          ]
        },
        {
          "sentence": "Sie ist Taiwanerin.",
          "translation": "她是一位台灣人。(女性說法，字尾要加 in)",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "Taiwanerin", "meaning": "女台灣人", "tail": "." }
          ]
        },
        {
          "sentence": "Ich mag taiwanisches Essen.",
          "translation": "我喜歡台灣食物。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "taiwanisches", "meaning": "台灣的(形容詞)", "tail": " " },
            { "text": "Essen", "meaning": "食物", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達國籍時，男女有不同的字尾。如果用來形容物品或食物，則會變成形容詞 taiwanisch。",
      "image_file": "taiwanese.png"
    },
    {
      "id": "n-66",
      "term_zh": "一切事物",
      "related_terms": [
        {
          "term_target": "alles",
          "pronunciation": ["/ˈaləs/"],
          "specific_note": "",
          "segments": [{ "text": "alles", "meaning": "一切", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Alles ist gut.",
          "translation": "一切都好。",
          "segments": [
            { "text": "Alles", "meaning": "一切", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "gut", "meaning": "好的", "tail": "." }
          ]
        },
        {
          "sentence": "Alles klar?",
          "translation": "都清楚了嗎？/ 沒問題吧？(德國人超級愛用的確認神句)",
          "segments": [
            { "text": "Alles", "meaning": "一切", "tail": " " },
            { "text": "klar", "meaning": "清楚的", "tail": "?" }
          ]
        },
        {
          "sentence": "Danke für alles.",
          "translation": "感謝這一切 (感謝你的所有幫忙)。",
          "segments": [
            { "text": "Danke", "meaning": "謝謝", "tail": " " },
            { "text": "für", "meaning": "為了", "tail": " " },
            { "text": "alles", "meaning": "一切", "tail": "." }
          ]
        }
      ],
      "usage_note": "所有的事物。代名詞，通常當作單數來處理。",
      "image_file": "everything.png"
    },
    {
      "id": "n-67",
      "term_zh": "錢包",
      "related_terms": [
        {
          "term_target": "Geldbeutel",
          "pronunciation": ["/ˈɡɛltˌbɔɪ̯təl/"],
          "specific_note": "口語常用",
          "segments": [{ "text": "Geldbeutel", "meaning": "錢包", "tail": "" }]
        },
        {
          "term_target": "Portemonnaie",
          "pronunciation": ["/pɔʁtmɔˈneː/"],
          "specific_note": "較正式(法文借字)",
          "segments": [{ "text": "Portemonnaie", "meaning": "錢包", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mein Geldbeutel ist weg.",
          "translation": "我的錢包不見了。",
          "segments": [
            { "text": "Mein", "meaning": "我的", "tail": " " },
            { "text": "Geldbeutel", "meaning": "錢包", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "weg", "meaning": "遺失的", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist mein Geldbeutel?",
          "translation": "我的錢包在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Geldbeutel", "meaning": "錢包", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich habe einen Geldbeutel gefunden.",
          "translation": "我撿到(找到)一個錢包。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "einen", "meaning": "一個", "tail": " " },
            { "text": "Geldbeutel", "meaning": "錢包", "tail": " " },
            { "text": "gefunden", "meaning": "發現", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Geldbeutel)。字面意思是「裝錢的袋子」，是日常生活中最常用來指皮夾的單字。",
      "image_file": "wallet.png"
    },
    {
      "id": "n-68",
      "term_zh": "身分證",
      "related_terms": [
        {
          "term_target": "Ausweis",
          "pronunciation": ["/ˈaʊ̯sˌvaɪ̯s/"],
          "specific_note": "泛指證件",
          "segments": [{ "text": "Ausweis", "meaning": "證件", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ihren Ausweis, bitte.",
          "translation": "請出示您的證件。(警察或海關臨檢時的標準句)",
          "segments": [
            { "text": "Ihren", "meaning": "您的", "tail": " " },
            { "text": "Ausweis", "meaning": "證件", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Haben Sie einen Ausweis?",
          "translation": "您有帶身分證件嗎？",
          "segments": [
            { "text": "Haben", "meaning": "有", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "einen", "meaning": "一個", "tail": " " },
            { "text": "Ausweis", "meaning": "證件", "tail": "?" }
          ]
        },
        {
          "sentence": "Hier ist mein Ausweis.",
          "translation": "這是我的證件。",
          "segments": [
            { "text": "Hier", "meaning": "這裡", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Ausweis", "meaning": "證件", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Ausweis)。完整名詞是 Personalausweis (個人身分證)，但大家口語都會簡稱 Ausweis，也可泛指所有的身分證明文件。",
      "image_file": "id.png"
    },
    {
      "id": "n-69",
      "term_zh": "護照",
      "related_terms": [
        {
          "term_target": "Reisepass",
          "pronunciation": ["/ˈʁaɪ̯zəˌpas/"],
          "specific_note": "",
          "segments": [
            { "text": "Reise", "meaning": "旅行", "tail": "" },
            { "text": "pass", "meaning": "通行證", "tail": "" }
          ]
        },
        {
          "term_target": "Pass",
          "pronunciation": ["/pas/"],
          "specific_note": "口語簡稱",
          "segments": [{ "text": "Pass", "meaning": "護照", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ihren Reisepass, bitte.",
          "translation": "請出示您的護照。",
          "segments": [
            { "text": "Ihren", "meaning": "您的", "tail": " " },
            { "text": "Reisepass", "meaning": "護照", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe meinen Pass verloren.",
          "translation": "我把護照弄丟了。(在國外找警察求救必備)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "meinen", "meaning": "我的", "tail": " " },
            { "text": "Pass", "meaning": "護照", "tail": " " },
            { "text": "verloren", "meaning": "遺失", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist dein Pass?",
          "translation": "你的護照在哪？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "dein", "meaning": "你的", "tail": " " },
            { "text": "Pass", "meaning": "護照", "tail": "?" }
          ]
        }
      ],
      "usage_note": "陽性 (der Reisepass)。字面上就是「旅行的通行證」，非常直觀，口語常簡稱 Pass。",
      "image_file": "passport.png"
    },
    {
      "id": "n-70",
      "term_zh": "餐廳",
      "related_terms": [
        {
          "term_target": "Restaurant",
          "pronunciation": ["/ʁɛstoˈʁã/"],
          "specific_note": "外來語，發音似法文",
          "segments": [{ "text": "Restaurant", "meaning": "餐廳", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ein gutes Restaurant.",
          "translation": "一間好吃的餐廳。",
          "segments": [
            { "text": "Ein", "meaning": "一間", "tail": " " },
            { "text": "gutes", "meaning": "好的", "tail": " " },
            { "text": "Restaurant", "meaning": "餐廳", "tail": "." }
          ]
        },
        {
          "sentence": "Gehen wir ins Restaurant.",
          "translation": "我們去餐廳吃飯吧。",
          "segments": [
            { "text": "Gehen", "meaning": "去", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "ins", "meaning": "進入", "tail": " " },
            { "text": "Restaurant", "meaning": "餐廳", "tail": "." }
          ]
        },
        {
          "sentence": "Kennst du ein gutes Restaurant?",
          "translation": "你知道這附近有什麼好吃的餐廳嗎？",
          "segments": [
            { "text": "Kennst", "meaning": "認識/知道", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "ein", "meaning": "一間", "tail": " " },
            { "text": "gutes", "meaning": "好的", "tail": " " },
            { "text": "Restaurant", "meaning": "餐廳", "tail": "?" }
          ]
        }
      ],
      "usage_note": "中性 (das Restaurant)。字尾的 t 不發音，因為這是從法文借過來的單字。",
      "image_file": "restaurant.png"
    },
    {
      "id": "n-71",
      "term_zh": "飯店",
      "related_terms": [
        {
          "term_target": "Hotel",
          "pronunciation": ["/hoˈtɛl/"],
          "specific_note": "",
          "segments": [{ "text": "Hotel", "meaning": "飯店", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ein Hotel buchen.",
          "translation": "預訂一間飯店。",
          "segments": [
            { "text": "Ein", "meaning": "一間", "tail": " " },
            { "text": "Hotel", "meaning": "飯店", "tail": " " },
            { "text": "buchen", "meaning": "預訂", "tail": "." }
          ]
        },
        {
          "sentence": "Wir übernachten in einem Hotel.",
          "translation": "我們在飯店過夜。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "übernachten", "meaning": "過夜", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "einem", "meaning": "一間", "tail": " " },
            { "text": "Hotel", "meaning": "飯店", "tail": "." }
          ]
        },
        {
          "sentence": "Das Hotel ist sehr schön.",
          "translation": "這間飯店很棒。",
          "segments": [
            { "text": "Das", "meaning": "這間", "tail": " " },
            { "text": "Hotel", "meaning": "飯店", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "schön", "meaning": "美麗的", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Hotel)。用法跟英文完全一樣，H的音會發出來。",
      "image_file": "hotel.png"
    },
    {
      "id": "n-72",
      "term_zh": "場所 / 地方",
      "related_terms": [
        {
          "term_target": "Ort",
          "pronunciation": ["/ɔʁt/"],
          "specific_note": "地點",
          "segments": [{ "text": "Ort", "meaning": "地方", "tail": "" }]
        },
        {
          "term_target": "Platz",
          "pronunciation": ["/plat͡s/"],
          "specific_note": "廣場/空間",
          "segments": [{ "text": "Platz", "meaning": "廣場", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ein schöner Ort.",
          "translation": "一個好地方。",
          "segments": [
            { "text": "Ein", "meaning": "一個", "tail": " " },
            { "text": "schöner", "meaning": "美麗的", "tail": " " },
            { "text": "Ort", "meaning": "地方", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist der falsche Ort.",
          "translation": "這地方不對 (走錯地方了)。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "der", "meaning": "這個", "tail": " " },
            { "text": "falsche", "meaning": "錯誤的", "tail": " " },
            { "text": "Ort", "meaning": "地方", "tail": "." }
          ]
        },
        {
          "sentence": "Ein bekannter Ort.",
          "translation": "一個有名(大家都知道)的地方。",
          "segments": [
            { "text": "Ein", "meaning": "一個", "tail": " " },
            { "text": "bekannter", "meaning": "知名的", "tail": " " },
            { "text": "Ort", "meaning": "地方", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Ort)。指特定的地點或城鎮。如果是指一個開放的空間或座位，則用 Platz。",
      "image_file": "place.png"
    },
    {
      "id": "n-73",
      "term_zh": "店員",
      "related_terms": [
        {
          "term_target": "Verkäufer",
          "pronunciation": ["/fɛɐ̯ˈkɔɪ̯fɐ/"],
          "specific_note": "男店員",
          "segments": [{ "text": "Verkäufer", "meaning": "店員", "tail": "" }]
        },
        {
          "term_target": "Verkäuferin",
          "pronunciation": ["/fɛɐ̯ˈkɔɪ̯fəʁɪn/"],
          "specific_note": "女店員",
          "segments": [{ "text": "Verkäuferin", "meaning": "女店員", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Fragen wir den Verkäufer.",
          "translation": "我們去問店員吧。",
          "segments": [
            { "text": "Fragen", "meaning": "問", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "den", "meaning": "這位", "tail": " " },
            { "text": "Verkäufer", "meaning": "店員", "tail": "." }
          ]
        },
        {
          "sentence": "Der Verkäufer ist sehr nett.",
          "translation": "這位店員非常熱心。",
          "segments": [
            { "text": "Der", "meaning": "這位", "tail": " " },
            { "text": "Verkäufer", "meaning": "店員", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "nett", "meaning": "親切/熱心", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bin Verkäufer.",
          "translation": "我是一名店員。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "Verkäufer", "meaning": "店員", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Verkäufer)。字面意思是「銷售的人」。",
      "image_file": "clerk.png"
    },
    {
      "id": "n-74",
      "term_zh": "超市",
      "related_terms": [
        {
          "term_target": "Supermarkt",
          "pronunciation": ["/ˈzuːpɐˌmaʁkt/"],
          "specific_note": "",
          "segments": [{ "text": "Supermarkt", "meaning": "超市", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich gehe in den Supermarkt.",
          "translation": "我去超市。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "gehe", "meaning": "去", "tail": " " },
            { "text": "in", "meaning": "進入", "tail": " " },
            { "text": "den", "meaning": "這間", "tail": " " },
            { "text": "Supermarkt", "meaning": "超市", "tail": "." }
          ]
        },
        {
          "sentence": "Im Supermarkt einkaufen.",
          "translation": "在超市買東西 (採購)。",
          "segments": [
            { "text": "Im", "meaning": "在", "tail": " " },
            { "text": "Supermarkt", "meaning": "超市", "tail": " " },
            { "text": "einkaufen", "meaning": "採購", "tail": "." }
          ]
        },
        {
          "sentence": "Wo ist der nächste Supermarkt?",
          "translation": "最近的超市在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這間", "tail": " " },
            { "text": "nächste", "meaning": "最近的/下一個", "tail": " " },
            { "text": "Supermarkt", "meaning": "超市", "tail": "?" }
          ]
        }
      ],
      "usage_note": "陽性 (der Supermarkt)。發音時，S 要發成 Z 的音「租怕-馬克特」。",
      "image_file": "supermarket.png"
    },
    {
      "id": "n-75",
      "term_zh": "月台",
      "related_terms": [
        {
          "term_target": "Gleis",
          "pronunciation": ["/ɡlaɪ̯s/"],
          "specific_note": "火車股道(常用)",
          "segments": [{ "text": "Gleis", "meaning": "軌道/月台", "tail": "" }]
        },
        {
          "term_target": "Bahnsteig",
          "pronunciation": ["/ˈbaːnˌʃtaɪ̯k/"],
          "specific_note": "月台等候區",
          "segments": [{ "text": "Bahnsteig", "meaning": "月台", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Der Zug fährt auf Gleis 1 ab.",
          "translation": "火車在第一月台 (第一股道) 發車。",
          "segments": [
            { "text": "Der", "meaning": "這班", "tail": " " },
            { "text": "Zug", "meaning": "火車", "tail": " " },
            { "text": "fährt", "meaning": "行駛", "tail": " " },
            { "text": "auf", "meaning": "在...上", "tail": " " },
            { "text": "Gleis", "meaning": "軌道", "tail": " " },
            { "text": "1", "meaning": "一", "tail": " " },
            { "text": "ab", "meaning": "出發(字尾)", "tail": "." }
          ]
        },
        {
          "sentence": "Auf welchem Gleis?",
          "translation": "在哪個月台？(在德國車站找火車一定要聽懂這個字)",
          "segments": [
            { "text": "Auf", "meaning": "在...上", "tail": " " },
            { "text": "welchem", "meaning": "哪個", "tail": " " },
            { "text": "Gleis", "meaning": "軌道/月台", "tail": "?" }
          ]
        },
        {
          "sentence": "Warten Sie am Bahnsteig.",
          "translation": "請在月台(平台區)等候。",
          "segments": [
            { "text": "Warten", "meaning": "等待", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "am", "meaning": "在", "tail": " " },
            { "text": "Bahnsteig", "meaning": "月台", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Gleis)。雖然實體平台叫 Bahnsteig，但德國看板跟車站廣播找車，都是用 Gleis (第幾號軌道) 來代表你在哪個月台上車。",
      "image_file": "platform.png"
    },
    {
      "id": "n-76",
      "term_zh": "音樂",
      "related_terms": [
        {
          "term_target": "Musik",
          "pronunciation": ["/muˈziːk/"],
          "specific_note": "",
          "segments": [{ "text": "Musik", "meaning": "音樂", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich höre gerne Musik.",
          "translation": "我喜歡聽音樂。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "höre", "meaning": "聽", "tail": " " },
            { "text": "gerne", "meaning": "喜歡", "tail": " " },
            { "text": "Musik", "meaning": "音樂", "tail": "." }
          ]
        },
        {
          "sentence": "Ich mag Popmusik.",
          "translation": "我喜歡流行音樂。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "Popmusik", "meaning": "流行音樂", "tail": "." }
          ]
        },
        {
          "sentence": "Die Musik ist zu laut.",
          "translation": "音樂太大聲了。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Musik", "meaning": "音樂", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "zu", "meaning": "太", "tail": " " },
            { "text": "laut", "meaning": "大聲的", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Musik)。重音在最後一個音節。德文的 S 夾在中間通常發 Z 的音，所以念起來像「木日克」。",
      "image_file": "music.png"
    },
    {
      "id": "n-77",
      "term_zh": "雨",
      "related_terms": [
        {
          "term_target": "Regen",
          "pronunciation": ["/ˈʁeːɡən/"],
          "specific_note": "",
          "segments": [{ "text": "Regen", "meaning": "雨", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Es regnet.",
          "translation": "現在正在下雨。(regnet 為動詞用法)",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "regnet", "meaning": "下雨", "tail": "." }
          ]
        },
        {
          "sentence": "Der Regen ist stark.",
          "translation": "雨很大 (直譯：雨很強)。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Regen", "meaning": "雨", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "stark", "meaning": "強烈的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich mag keinen Regen.",
          "translation": "我不喜歡雨。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "keinen", "meaning": "不/沒有", "tail": " " },
            { "text": "Regen", "meaning": "雨", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Regen)。德文表示「下雨」通常不會說下很大(big)，而是說下很強 (stark)。",
      "image_file": "rain.png"
    },
    {
      "id": "n-78",
      "term_zh": "照片",
      "related_terms": [
        {
          "term_target": "Foto",
          "pronunciation": ["/ˈfoːto/"],
          "specific_note": "",
          "segments": [{ "text": "Foto", "meaning": "照片", "tail": "" }]
        },
        {
          "term_target": "Bild",
          "pronunciation": ["/bɪlt/"],
          "specific_note": "圖像/畫面",
          "segments": [{ "text": "Bild", "meaning": "圖片", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ein Foto machen.",
          "translation": "拍張照。(德文拍照搭配的動詞是 machen 製作)",
          "segments": [
            { "text": "Ein", "meaning": "一張", "tail": " " },
            { "text": "Foto", "meaning": "照片", "tail": " " },
            { "text": "machen", "meaning": "做", "tail": "." }
          ]
        },
        {
          "sentence": "Schau dir das Foto an.",
          "translation": "你看看這張照片。",
          "segments": [
            { "text": "Schau", "meaning": "看", "tail": " " },
            { "text": "dir", "meaning": "你自己", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "Foto", "meaning": "照片", "tail": " " },
            { "text": "an", "meaning": "(可分動詞字首)", "tail": "." }
          ]
        },
        {
          "sentence": "Können Sie ein Foto von uns machen?",
          "translation": "您可以幫我們拍張照嗎？(請路人幫忙拍照必備神句)",
          "segments": [
            { "text": "Können", "meaning": "能", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "ein", "meaning": "一張", "tail": " " },
            { "text": "Foto", "meaning": "照片", "tail": " " },
            { "text": "von", "meaning": "的", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "machen", "meaning": "拍/做", "tail": "?" }
          ]
        }
      ],
      "usage_note": "中性 (das Foto)。與英文極度相似的外來語，非常實用。",
      "image_file": "picture.png"
    },
    {
      "id": "n-79",
      "term_zh": "書",
      "related_terms": [
        {
          "term_target": "Buch",
          "pronunciation": ["/buːx/"],
          "specific_note": "",
          "segments": [{ "text": "Buch", "meaning": "書", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ein Buch lesen.",
          "translation": "看書 (閱讀一本書)。",
          "segments": [
            { "text": "Ein", "meaning": "一本", "tail": " " },
            { "text": "Buch", "meaning": "書", "tail": " " },
            { "text": "lesen", "meaning": "閱讀", "tail": "." }
          ]
        },
        {
          "sentence": "Schlag das Buch auf.",
          "translation": "把書打開/翻開。",
          "segments": [
            { "text": "Schlag", "meaning": "打", "tail": " " },
            { "text": "das", "meaning": "這本", "tail": " " },
            { "text": "Buch", "meaning": "書", "tail": " " },
            { "text": "auf", "meaning": "開", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist mein Buch.",
          "translation": "這是我的書。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Buch", "meaning": "書", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Buch)。字尾的 ch 要發出從喉嚨深處吐氣的摩擦音，類似輕輕咳痰的聲音。",
      "image_file": "book.png"
    },
    {
      "id": "n-80",
      "term_zh": "廁所",
      "related_terms": [
        {
          "term_target": "Toilette",
          "pronunciation": ["/to̯aˈlɛtə/"],
          "specific_note": "",
          "segments": [{ "text": "Toilette", "meaning": "廁所", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wo ist die Toilette?",
          "translation": "廁所在哪裡？(最重要的一句話)",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "die", "meaning": "這間", "tail": " " },
            { "text": "Toilette", "meaning": "廁所", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich muss auf die Toilette.",
          "translation": "我必須去上廁所。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "auf", "meaning": "去", "tail": " " },
            { "text": "die", "meaning": "這間", "tail": " " },
            { "text": "Toilette", "meaning": "廁所", "tail": "." }
          ]
        },
        {
          "sentence": "Die Toilette ist sehr sauber.",
          "translation": "廁所很乾淨。",
          "segments": [
            { "text": "Die", "meaning": "這間", "tail": " " },
            { "text": "Toilette", "meaning": "廁所", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "sauber", "meaning": "乾淨的", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Toilette)。源自法文。在德國公共場所也常標示為 WC (Water Closet)。記得帶些零錢，德國公廁多半要付費 (0.5~1歐)。",
      "image_file": "restroom.png"
    },
    {
      "id": "n-81",
      "term_zh": "天氣",
      "related_terms": [
        {
          "term_target": "Wetter",
          "pronunciation": ["/ˈvɛtɐ/"],
          "specific_note": "",
          "segments": [{ "text": "Wetter", "meaning": "天氣", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Gutes Wetter.",
          "translation": "好天氣。",
          "segments": [
            { "text": "Gutes", "meaning": "好的", "tail": " " },
            { "text": "Wetter", "meaning": "天氣", "tail": "." }
          ]
        },
        {
          "sentence": "Schlechtes Wetter.",
          "translation": "壞天氣。",
          "segments": [
            { "text": "Schlechtes", "meaning": "壞的", "tail": " " },
            { "text": "Wetter", "meaning": "天氣", "tail": "." }
          ]
        },
        {
          "sentence": "Wie ist das Wetter heute?",
          "translation": "今天天氣如何？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "Wetter", "meaning": "天氣", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": "?" }
          ]
        }
      ],
      "usage_note": "中性 (das Wetter)。德國人非常愛聊天氣，這是打開話題的最佳起手式。",
      "image_file": "weather.png"
    },
    {
      "id": "n-82",
      "term_zh": "訊息",
      "related_terms": [
        {
          "term_target": "Nachricht",
          "pronunciation": ["/ˈnaːxʁɪçt/"],
          "specific_note": "",
          "segments": [{ "text": "Nachricht", "meaning": "訊息", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Eine Nachricht schicken.",
          "translation": "傳送一則訊息。",
          "segments": [
            { "text": "Eine", "meaning": "一則", "tail": " " },
            { "text": "Nachricht", "meaning": "訊息", "tail": " " },
            { "text": "schicken", "meaning": "傳送", "tail": "." }
          ]
        },
        {
          "sentence": "Hinterlass eine Nachricht.",
          "translation": "留個言/留個訊息。",
          "segments": [
            { "text": "Hinterlass", "meaning": "留下", "tail": " " },
            { "text": "eine", "meaning": "一則", "tail": " " },
            { "text": "Nachricht", "meaning": "訊息", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe eine Nachricht bekommen.",
          "translation": "我收到了一則訊息。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "eine", "meaning": "一則", "tail": " " },
            { "text": "Nachricht", "meaning": "訊息", "tail": " " },
            { "text": "bekommen", "meaning": "收到", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Nachricht)。除了傳送的訊息，這個字在複數時 (die Nachrichten) 也代表「新聞」。",
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
          "term_target": "jetzt",
          "pronunciation": ["/jɛt͡st/"],
          "specific_note": "",
          "segments": [{ "text": "jetzt", "meaning": "現在", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Mach das jetzt!",
          "translation": "現在就做！",
          "segments": [
            { "text": "Mach", "meaning": "做", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "jetzt", "meaning": "現在", "tail": "!" }
          ]
        },
        {
          "sentence": "Ich habe jetzt keine Zeit.",
          "translation": "我現在沒空。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "jetzt", "meaning": "現在", "tail": " " },
            { "text": "keine", "meaning": "沒有", "tail": " " },
            { "text": "Zeit", "meaning": "時間", "tail": "." }
          ]
        },
        {
          "sentence": "Was machen wir jetzt?",
          "translation": "我們現在要做什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "machen", "meaning": "做", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "jetzt", "meaning": "現在", "tail": "?" }
          ]
        }
      ],
      "usage_note": "此時此刻。",
      "image_file": "now.png"
    },
    {
      "id": "adv-02",
      "term_zh": "非常",
      "related_terms": [
        {
          "term_target": "sehr",
          "pronunciation": ["/zeːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "sehr", "meaning": "非常", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sehr gut!",
          "translation": "非常好！",
          "segments": [
            { "text": "Sehr", "meaning": "非常", "tail": " " },
            { "text": "gut", "meaning": "好的", "tail": "!" }
          ]
        },
        {
          "sentence": "Ich bin sehr müde.",
          "translation": "我非常累。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "müde", "meaning": "累的", "tail": "." }
          ]
        },
        {
          "sentence": "Das ist sehr teuer.",
          "translation": "這非常貴。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "teuer", "meaning": "貴的", "tail": "." }
          ]
        }
      ],
      "usage_note": "加強語氣。發音時注意 S 要發成 Z (有震動) 的聲音。",
      "image_file": "very.png"
    },
    {
      "id": "adv-03",
      "term_zh": "真的",
      "related_terms": [
        {
          "term_target": "wirklich",
          "pronunciation": ["/ˈvɪʁklɪç/"],
          "specific_note": "",
          "segments": [{ "text": "wirklich", "meaning": "真的", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wirklich?",
          "translation": "真的嗎？",
          "segments": [
            { "text": "Wirklich", "meaning": "真的", "tail": "?" }
          ]
        },
        {
          "sentence": "Das ist wirklich schön.",
          "translation": "這真的很漂亮。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "wirklich", "meaning": "真的", "tail": " " },
            { "text": "schön", "meaning": "美麗的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich weiß es wirklich nicht.",
          "translation": "我真的不知道。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "weiß", "meaning": "知道", "tail": " " },
            { "text": "es", "meaning": "這件事", "tail": " " },
            { "text": "wirklich", "meaning": "真的", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        }
      ],
      "usage_note": "用來強調真實性。口語中也很常被 echt 替代。",
      "image_file": "really.png"
    },
    {
      "id": "adv-04",
      "term_zh": "好好地／很好地",
      "related_terms": [
        {
          "term_target": "gut",
          "pronunciation": ["/ɡuːt/"],
          "specific_note": "形容詞副詞同形",
          "segments": [{ "text": "gut", "meaning": "好地", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Schlaf gut!",
          "translation": "好好睡！(睡個好覺)",
          "segments": [
            { "text": "Schlaf", "meaning": "睡", "tail": " " },
            { "text": "gut", "meaning": "好地", "tail": "!" }
          ]
        },
        {
          "sentence": "Er spricht sehr gut Deutsch.",
          "translation": "他德文說得很好。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "spricht", "meaning": "說", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "gut", "meaning": "好地", "tail": " " },
            { "text": "Deutsch", "meaning": "德文", "tail": "." }
          ]
        },
        {
          "sentence": "Mir geht es gut.",
          "translation": "我過得很好 / 我沒事。",
          "segments": [
            { "text": "Mir", "meaning": "對我", "tail": " " },
            { "text": "geht", "meaning": "走/過", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "gut", "meaning": "好地", "tail": "." }
          ]
        }
      ],
      "usage_note": "在德文中，gut 既是形容詞也是副詞，不需要像英文 (good / well) 一樣背兩個不同的字！",
      "image_file": "well.png"
    },
    {
      "id": "adv-05",
      "term_zh": "經常",
      "related_terms": [
        {
          "term_target": "oft",
          "pronunciation": ["/ɔft/"],
          "specific_note": "",
          "segments": [{ "text": "oft", "meaning": "經常", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich komme oft hierher.",
          "translation": "我常來這裡。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "komme", "meaning": "來", "tail": " " },
            { "text": "oft", "meaning": "經常", "tail": " " },
            { "text": "hierher", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Regnet es hier oft?",
          "translation": "這裡常下雨嗎？",
          "segments": [
            { "text": "Regnet", "meaning": "下雨", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": " " },
            { "text": "oft", "meaning": "經常", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie oft machst du Sport?",
          "translation": "你多常運動？",
          "segments": [
            { "text": "Wie", "meaning": "多", "tail": " " },
            { "text": "oft", "meaning": "常", "tail": " " },
            { "text": "machst", "meaning": "做", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "Sport", "meaning": "運動", "tail": "?" }
          ]
        }
      ],
      "usage_note": "表示高頻率。問別人「多常...？」就是用 Wie oft 開頭。",
      "image_file": "often.png"
    },
    {
      "id": "adv-06",
      "term_zh": "通常",
      "related_terms": [
        {
          "term_target": "meistens",
          "pronunciation": ["/ˈmaɪ̯stn̩s/"],
          "specific_note": "",
          "segments": [{ "text": "meistens", "meaning": "通常/大部分時候", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich trinke meistens Wasser.",
          "translation": "我通常喝水。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "trinke", "meaning": "喝", "tail": " " },
            { "text": "meistens", "meaning": "通常", "tail": " " },
            { "text": "Wasser", "meaning": "水", "tail": "." }
          ]
        },
        {
          "sentence": "Meistens bin ich zu Hause.",
          "translation": "我通常都在家。",
          "segments": [
            { "text": "Meistens", "meaning": "通常", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "zu", "meaning": "在", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Was isst du meistens zum Frühstück?",
          "translation": "你早餐通常吃什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "isst", "meaning": "吃", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "meistens", "meaning": "通常", "tail": " " },
            { "text": "zum", "meaning": "當作", "tail": " " },
            { "text": "Frühstück", "meaning": "早餐", "tail": "?" }
          ]
        }
      ],
      "usage_note": "代表在大部分的情況下都會發生的事。",
      "image_file": "usually.png"
    },
    {
      "id": "adv-07",
      "term_zh": "已經",
      "related_terms": [
        {
          "term_target": "schon",
          "pronunciation": ["/ʃoːn/"],
          "specific_note": "",
          "segments": [{ "text": "schon", "meaning": "已經", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin schon fertig.",
          "translation": "我已經弄好了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "fertig", "meaning": "完成的", "tail": "." }
          ]
        },
        {
          "sentence": "Ist es schon so spät?",
          "translation": "已經這麼晚了嗎？",
          "segments": [
            { "text": "Ist", "meaning": "是", "tail": " " },
            { "text": "es", "meaning": "它(時間)", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "so", "meaning": "這麼", "tail": " " },
            { "text": "spät", "meaning": "晚", "tail": "?" }
          ]
        },
        {
          "sentence": "Wir sind schon da.",
          "translation": "我們已經到了。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "sind", "meaning": "是", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "da", "meaning": "那裡(到了)", "tail": "." }
          ]
        }
      ],
      "usage_note": "表示動作完成。注意它的拼法跟 schön (美麗的) 很容易搞混，schon 上面沒有兩點喔！",
      "image_file": "already.png"
    },
    {
      "id": "adv-08",
      "term_zh": "只有",
      "related_terms": [
        {
          "term_target": "nur",
          "pronunciation": ["/nuːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "nur", "meaning": "只有/僅僅", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Nur noch ein bisschen.",
          "translation": "只剩一點點了。",
          "segments": [
            { "text": "Nur", "meaning": "只有", "tail": " " },
            { "text": "noch", "meaning": "還", "tail": " " },
            { "text": "ein", "meaning": "一", "tail": " " },
            { "text": "bisschen", "meaning": "點點", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe nur zehn Euro.",
          "translation": "我只有十歐元。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "nur", "meaning": "只有", "tail": " " },
            { "text": "zehn", "meaning": "十", "tail": " " },
            { "text": "Euro", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "Nur für dich.",
          "translation": "只為你。",
          "segments": [
            { "text": "Nur", "meaning": "只有", "tail": " " },
            { "text": "für", "meaning": "為了", "tail": " " },
            { "text": "dich", "meaning": "你", "tail": "." }
          ]
        }
      ],
      "usage_note": "數量少，或是唯一。",
      "image_file": "only.png"
    },
    {
      "id": "adv-09",
      "term_zh": "再次",
      "related_terms": [
        {
          "term_target": "nochmal",
          "pronunciation": ["/ˈnɔxmaːl/"],
          "specific_note": "口語極常用",
          "segments": [{ "text": "nochmal", "meaning": "再一次", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sag das nochmal, bitte.",
          "translation": "麻煩請再說一次。",
          "segments": [
            { "text": "Sag", "meaning": "說", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": " " },
            { "text": "nochmal", "meaning": "再一次", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Versuch es nochmal!",
          "translation": "再試一次！",
          "segments": [
            { "text": "Versuch", "meaning": "嘗試", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "nochmal", "meaning": "再一次", "tail": "!" }
          ]
        },
        {
          "sentence": "Ich muss nochmal zurückgehen.",
          "translation": "我必須再回去一趟。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "nochmal", "meaning": "再一次", "tail": " " },
            { "text": "zurückgehen", "meaning": "回去", "tail": "." }
          ]
        }
      ],
      "usage_note": "雖然課本常教 wieder (又/再)，但在德國人的日常口語中，請對方重複動作或說話，講 nochmal 是最自然的！",
      "image_file": "again.png"
    },
    {
      "id": "adv-10",
      "term_zh": "大約",
      "related_terms": [
        {
          "term_target": "ungefähr",
          "pronunciation": ["/ˈʊnɡəˌfɛːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "ungefähr", "meaning": "大約", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Es dauert ungefähr eine Stunde.",
          "translation": "大約要花一個小時。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "dauert", "meaning": "花費/持續", "tail": " " },
            { "text": "ungefähr", "meaning": "大約", "tail": " " },
            { "text": "eine", "meaning": "一", "tail": " " },
            { "text": "Stunde", "meaning": "小時", "tail": "." }
          ]
        },
        {
          "sentence": "Ungefähr so.",
          "translation": "大概就像這樣。(形容給別人聽時很常用)",
          "segments": [
            { "text": "Ungefähr", "meaning": "大約", "tail": " " },
            { "text": "so", "meaning": "這樣", "tail": "." }
          ]
        },
        {
          "sentence": "Das kostet ungefähr zehn Euro.",
          "translation": "這大約要十歐元。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "kostet", "meaning": "花費", "tail": " " },
            { "text": "ungefähr", "meaning": "大約", "tail": " " },
            { "text": "zehn", "meaning": "十", "tail": " " },
            { "text": "Euro", "meaning": "歐元", "tail": "." }
          ]
        }
      ],
      "usage_note": "用來抓個大概的時間、數字或距離。",
      "image_file": "about.png"
    },
    {
      "id": "adv-11",
      "term_zh": "一點點",
      "related_terms": [
        {
          "term_target": "ein bisschen",
          "pronunciation": ["/aɪ̯n ˈbɪsçən/"],
          "specific_note": "口語最常用",
          "segments": [
            { "text": "ein", "meaning": "一", "tail": " " },
            { "text": "bisschen", "meaning": "點點", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Nur ein bisschen, bitte.",
          "translation": "麻煩只要一點點就好了。(點餐或請別人倒水時用)",
          "segments": [
            { "text": "Nur", "meaning": "只要", "tail": " " },
            { "text": "ein", "meaning": "一", "tail": " " },
            { "text": "bisschen", "meaning": "點點", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bin ein bisschen müde.",
          "translation": "我有一點累。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "ein", "meaning": "一", "tail": " " },
            { "text": "bisschen", "meaning": "點點", "tail": " " },
            { "text": "müde", "meaning": "累的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich spreche ein bisschen Deutsch.",
          "translation": "我會說一點德文。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "spreche", "meaning": "說", "tail": " " },
            { "text": "ein", "meaning": "一", "tail": " " },
            { "text": "bisschen", "meaning": "點點", "tail": " " },
            { "text": "Deutsch", "meaning": "德文", "tail": "." }
          ]
        }
      ],
      "usage_note": "表示少量的程度。發音類似「愛恩 必許恩」。",
      "image_file": "a_little.png"
    },
    {
      "id": "adv-12",
      "term_zh": "也是",
      "related_terms": [
        {
          "term_target": "auch",
          "pronunciation": ["/aʊ̯x/"],
          "specific_note": "",
          "segments": [{ "text": "auch", "meaning": "也", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich auch.",
          "translation": "我也是。(附和別人必備)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "auch", "meaning": "也", "tail": "." }
          ]
        },
        {
          "sentence": "Das möchte ich auch.",
          "translation": "我也想要這個。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "auch", "meaning": "也", "tail": "." }
          ]
        },
        {
          "sentence": "Sie kommt auch mit.",
          "translation": "她也會一起來。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "kommt", "meaning": "來", "tail": " " },
            { "text": "auch", "meaning": "也", "tail": " " },
            { "text": "mit", "meaning": "一起", "tail": "." }
          ]
        }
      ],
      "usage_note": "代表相同情況。發音是用喉嚨吐氣的氣音 (類似喝水嗆到的聲音)。",
      "image_file": "also.png"
    },
    {
      "id": "adv-13",
      "term_zh": "或許",
      "related_terms": [
        {
          "term_target": "vielleicht",
          "pronunciation": ["/fiˈlaɪ̯çt/"],
          "specific_note": "",
          "segments": [{ "text": "vielleicht", "meaning": "也許/或許", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Vielleicht später.",
          "translation": "或許晚點吧。",
          "segments": [
            { "text": "Vielleicht", "meaning": "也許", "tail": " " },
            { "text": "später", "meaning": "晚點", "tail": "." }
          ]
        },
        {
          "sentence": "Vielleicht hast du recht.",
          "translation": "或許你是對的。",
          "segments": [
            { "text": "Vielleicht", "meaning": "也許", "tail": " " },
            { "text": "hast", "meaning": "有", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "recht", "meaning": "對(道理)", "tail": "." }
          ]
        },
        {
          "sentence": "Kommst du morgen? Vielleicht.",
          "translation": "你明天會來嗎？或許吧。",
          "segments": [
            { "text": "Kommst", "meaning": "來", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "morgen", "meaning": "明天", "tail": "? " },
            { "text": "Vielleicht", "meaning": "也許", "tail": "." }
          ]
        }
      ],
      "usage_note": "不確定時的回答。字首 V 要發 f 的音喔！",
      "image_file": "maybe.png"
    },
    {
      "id": "adv-14",
      "term_zh": "之後 / 稍後",
      "related_terms": [
        {
          "term_target": "später",
          "pronunciation": ["/ˈʃpɛːtɐ/"],
          "specific_note": "",
          "segments": [{ "text": "später", "meaning": "稍後/晚點", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Bis später!",
          "translation": "待會見！",
          "segments": [
            { "text": "Bis", "meaning": "直到", "tail": " " },
            { "text": "später", "meaning": "稍後", "tail": "!" }
          ]
        },
        {
          "sentence": "Wir reden später.",
          "translation": "我們晚點再聊。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "reden", "meaning": "聊", "tail": " " },
            { "text": "später", "meaning": "晚點", "tail": "." }
          ]
        },
        {
          "sentence": "Ich komme später zurück.",
          "translation": "我晚點回來。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "komme", "meaning": "來", "tail": " " },
            { "text": "später", "meaning": "晚點", "tail": " " },
            { "text": "zurück", "meaning": "回來", "tail": "." }
          ]
        }
      ],
      "usage_note": "用在時間上的延後。",
      "image_file": "later.png"
    },
    {
      "id": "adv-15",
      "term_zh": "很快 / 不久",
      "related_terms": [
        {
          "term_target": "bald",
          "pronunciation": ["/balt/"],
          "specific_note": "",
          "segments": [{ "text": "bald", "meaning": "很快/不久", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Bis bald!",
          "translation": "很快再見！(跟朋友道別極常用)",
          "segments": [
            { "text": "Bis", "meaning": "直到", "tail": " " },
            { "text": "bald", "meaning": "不久", "tail": "!" }
          ]
        },
        {
          "sentence": "Ich komme bald.",
          "translation": "我很快就來。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "komme", "meaning": "來", "tail": " " },
            { "text": "bald", "meaning": "很快", "tail": "." }
          ]
        },
        {
          "sentence": "Das Essen ist bald fertig.",
          "translation": "餐點很快就準備好了。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "Essen", "meaning": "食物", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "bald", "meaning": "很快", "tail": " " },
            { "text": "fertig", "meaning": "完成的", "tail": "." }
          ]
        }
      ],
      "usage_note": "形容時間即將到來。",
      "image_file": "soon.png"
    },
    {
      "id": "adv-16",
      "term_zh": "一起",
      "related_terms": [
        {
          "term_target": "zusammen",
          "pronunciation": ["/t͡suˈzamən/"],
          "specific_note": "",
          "segments": [{ "text": "zusammen", "meaning": "一起/共同", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Zusammen oder getrennt?",
          "translation": "一起付還是分開付？(在餐廳結帳服務生必問的神句)",
          "segments": [
            { "text": "Zusammen", "meaning": "一起", "tail": " " },
            { "text": "oder", "meaning": "或", "tail": " " },
            { "text": "getrennt", "meaning": "分開的", "tail": "?" }
          ]
        },
        {
          "sentence": "Das macht zusammen zehn Euro.",
          "translation": "這樣總共是十歐元。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "macht", "meaning": "做(變成)", "tail": " " },
            { "text": "zusammen", "meaning": "總共", "tail": " " },
            { "text": "zehn", "meaning": "十", "tail": " " },
            { "text": "Euro", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "Gehen wir zusammen?",
          "translation": "我們要一起去嗎？",
          "segments": [
            { "text": "Gehen", "meaning": "去", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "zusammen", "meaning": "一起", "tail": "?" }
          ]
        }
      ],
      "usage_note": "除了「陪伴一起」，結帳時 Zusammen 也代表「加總起來」的意思。",
      "image_file": "together.png"
    },
    {
      "id": "adv-17",
      "term_zh": "仍然",
      "related_terms": [
        {
          "term_target": "noch",
          "pronunciation": ["/nɔx/"],
          "specific_note": "",
          "segments": [{ "text": "noch", "meaning": "還/仍然", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Bist du noch da?",
          "translation": "你還在嗎？",
          "segments": [
            { "text": "Bist", "meaning": "是(在)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "noch", "meaning": "還", "tail": " " },
            { "text": "da", "meaning": "那裡", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich habe noch Hunger.",
          "translation": "我還是很餓。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "noch", "meaning": "仍然", "tail": " " },
            { "text": "Hunger", "meaning": "飢餓", "tail": "." }
          ]
        },
        {
          "sentence": "Einen Moment noch, bitte.",
          "translation": "請再等一下。",
          "segments": [
            { "text": "Einen", "meaning": "一個", "tail": " " },
            { "text": "Moment", "meaning": "瞬間", "tail": " " },
            { "text": "noch", "meaning": "還(再)", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達某狀態「還在繼續」。",
      "image_file": "still.png"
    },
    {
      "id": "adv-18",
      "term_zh": "一般來說",
      "related_terms": [
        {
          "term_target": "normalerweise",
          "pronunciation": ["/nɔʁˈmaːlɐvaɪ̯zə/"],
          "specific_note": "",
          "segments": [{ "text": "normalerweise", "meaning": "通常地/一般來說", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Normalerweise gehe ich zu Fuß.",
          "translation": "一般來說我都走路去。",
          "segments": [
            { "text": "Normalerweise", "meaning": "通常", "tail": " " },
            { "text": "gehe", "meaning": "走", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "zu", "meaning": "用", "tail": " " },
            { "text": "Fuß", "meaning": "腳", "tail": "." }
          ]
        },
        {
          "sentence": "Der Laden ist normalerweise bis 20 Uhr geöffnet.",
          "translation": "這家店通常開到晚上8點 (20點)。",
          "segments": [
            { "text": "Der", "meaning": "這家", "tail": " " },
            { "text": "Laden", "meaning": "店", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "normalerweise", "meaning": "通常", "tail": " " },
            { "text": "bis", "meaning": "直到", "tail": " " },
            { "text": "20", "meaning": "20", "tail": " " },
            { "text": "Uhr", "meaning": "點", "tail": " " },
            { "text": "geöffnet", "meaning": "開著的", "tail": "." }
          ]
        },
        {
          "sentence": "Normalerweise mache ich das nicht.",
          "translation": "一般來說我不會做這種事。",
          "segments": [
            { "text": "Normalerweise", "meaning": "通常", "tail": " " },
            { "text": "mache", "meaning": "做", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        }
      ],
      "usage_note": "指正常狀況下。",
      "image_file": "normally.png"
    },
    {
      "id": "adv-19",
      "term_zh": "立刻",
      "related_terms": [
        {
          "term_target": "sofort",
          "pronunciation": ["/zoˈfɔʁt/"],
          "specific_note": "",
          "segments": [{ "text": "sofort", "meaning": "立刻/馬上", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich komme sofort.",
          "translation": "我馬上來。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "komme", "meaning": "來", "tail": " " },
            { "text": "sofort", "meaning": "立刻", "tail": "." }
          ]
        },
        {
          "sentence": "Mach das sofort!",
          "translation": "立刻去做！",
          "segments": [
            { "text": "Mach", "meaning": "做", "tail": " " },
            { "text": "das", "meaning": "那", "tail": " " },
            { "text": "sofort", "meaning": "立刻", "tail": "!" }
          ]
        },
        {
          "sentence": "Bitte antworten Sie sofort.",
          "translation": "請立刻回覆。",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "antworten", "meaning": "回覆", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "sofort", "meaning": "立刻", "tail": "." }
          ]
        }
      ],
      "usage_note": "馬上。",
      "image_file": "immediately.png"
    },
    {
      "id": "adv-20",
      "term_zh": "也不",
      "related_terms": [
        {
          "term_target": "auch nicht",
          "pronunciation": ["/ˈaʊ̯x nɪçt/"],
          "specific_note": "也+不",
          "segments": [
            { "text": "auch", "meaning": "也", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich auch nicht.",
          "translation": "我也不 / 我也沒有。(回應別人的否定句時必備)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "auch", "meaning": "也", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Er weiß es auch nicht.",
          "translation": "他也不知道。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "weiß", "meaning": "知道", "tail": " " },
            { "text": "es", "meaning": "這", "tail": " " },
            { "text": "auch", "meaning": "也", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Das mag ich auch nicht.",
          "translation": "我也不喜歡那個。",
          "segments": [
            { "text": "Das", "meaning": "那", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "auch", "meaning": "也", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        }
      ],
      "usage_note": "德文沒有一個單字直接對應 neither，而是非常直觀的把「也 (auch)」跟「不 (nicht)」組合起來用。",
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
          "term_target": "was",
          "pronunciation": ["/vas/"],
          "specific_note": "",
          "segments": [{ "text": "was", "meaning": "什麼", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Was ist das?",
          "translation": "這是什麼？(超級實用必學句)",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        },
        {
          "sentence": "Was machst du?",
          "translation": "你在做什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "machst", "meaning": "做", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Was hast du gesagt?",
          "translation": "你剛剛說什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "hast", "meaning": "(助動詞)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "gesagt", "meaning": "說 (過去分詞)", "tail": "?" }
          ]
        }
      ],
      "usage_note": "詢問事物。記得德文的 W 發音是英文的 V，所以唸起來像「法斯」。",
      "image_file": "what.png"
    },
    {
      "id": "q-02",
      "term_zh": "如何",
      "related_terms": [
        {
          "term_target": "wie",
          "pronunciation": ["/viː/"],
          "specific_note": "",
          "segments": [{ "text": "wie", "meaning": "如何", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wie geht's?",
          "translation": "你好嗎？(直譯：過得如何？)",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "geht's", "meaning": "過得", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie funktioniert das?",
          "translation": "這個怎麼運作 (怎麼用)？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "funktioniert", "meaning": "運作", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie war dein Tag?",
          "translation": "你今天過得好嗎？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "war", "meaning": "是(過去式)", "tail": " " },
            { "text": "dein", "meaning": "你的", "tail": " " },
            { "text": "Tag", "meaning": "一天", "tail": "?" }
          ]
        }
      ],
      "usage_note": "問狀況、方式。另外，在德文問別人的「名字」也是用 Wie (你的名字叫『如何』)。",
      "image_file": "how.png"
    },
    {
      "id": "q-03",
      "term_zh": "何時",
      "related_terms": [
        {
          "term_target": "wann",
          "pronunciation": ["/van/"],
          "specific_note": "",
          "segments": [{ "text": "wann", "meaning": "何時", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wann treffen wir uns?",
          "translation": "我們什麼時候見面？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "treffen", "meaning": "見面", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "uns", "meaning": "互相", "tail": "?" }
          ]
        },
        {
          "sentence": "Wann hast du Geburtstag?",
          "translation": "你什麼時候生日？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "hast", "meaning": "有", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "Geburtstag", "meaning": "生日", "tail": "?" }
          ]
        },
        {
          "sentence": "Wann kommst du?",
          "translation": "你何時會來？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "kommst", "meaning": "來", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        }
      ],
      "usage_note": "詢問時間點。",
      "image_file": "when.png"
    },
    {
      "id": "q-04",
      "term_zh": "哪裡",
      "related_terms": [
        {
          "term_target": "wo",
          "pronunciation": ["/voː/"],
          "specific_note": "問地點",
          "segments": [{ "text": "wo", "meaning": "哪裡", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wo bist du?",
          "translation": "你在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "bist", "meaning": "在(是)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Wo ist die Toilette?",
          "translation": "廁所在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Toilette", "meaning": "廁所", "tail": "?" }
          ]
        },
        {
          "sentence": "Wo wohnst du?",
          "translation": "你住在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "wohnst", "meaning": "住", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        }
      ],
      "usage_note": "Wo 是用來問「在」哪裡 (靜態)。如果問你要「去」哪裡，德文要改用 Wohin (動態)。",
      "image_file": "where.png"
    },
    {
      "id": "q-05",
      "term_zh": "誰",
      "related_terms": [
        {
          "term_target": "wer",
          "pronunciation": ["/veːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "wer", "meaning": "誰", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wer ist das?",
          "translation": "那是誰？",
          "segments": [
            { "text": "Wer", "meaning": "誰", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": "?" }
          ]
        },
        {
          "sentence": "Wer bist du?",
          "translation": "你是誰？",
          "segments": [
            { "text": "Wer", "meaning": "誰", "tail": " " },
            { "text": "bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Wer weiß das schon?",
          "translation": "誰知道呢？",
          "segments": [
            { "text": "Wer", "meaning": "誰", "tail": " " },
            { "text": "weiß", "meaning": "知道", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "schon", "meaning": "已經(加強語氣)", "tail": "?" }
          ]
        }
      ],
      "usage_note": "很多初學者會把英文的 where 跟德文的 wer (誰) 搞混，千萬要分清楚喔！",
      "image_file": "who.png"
    },
    {
      "id": "q-06",
      "term_zh": "為什麼",
      "related_terms": [
        {
          "term_target": "warum",
          "pronunciation": ["/vaˈʁʊm/"],
          "specific_note": "",
          "segments": [{ "text": "warum", "meaning": "為什麼", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Warum?",
          "translation": "為什麼？",
          "segments": [
            { "text": "Warum", "meaning": "為什麼", "tail": "?" }
          ]
        },
        {
          "sentence": "Warum nicht?",
          "translation": "為什麼不呢？(好啊)",
          "segments": [
            { "text": "Warum", "meaning": "為什麼", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "?" }
          ]
        },
        {
          "sentence": "Warum bist du so spät?",
          "translation": "你為什麼這麼晚(遲到)？",
          "segments": [
            { "text": "Warum", "meaning": "為什麼", "tail": " " },
            { "text": "bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "so", "meaning": "如此", "tail": " " },
            { "text": "spät", "meaning": "晚", "tail": "?" }
          ]
        }
      ],
      "usage_note": "問原因。德國人也很常講另一個同義詞 wieso，意思完全一樣。",
      "image_file": "why.png"
    },
    {
      "id": "q-07",
      "term_zh": "哪一個",
      "related_terms": [
        {
          "term_target": "welcher",
          "pronunciation": ["/ˈvɛlçɐ/"],
          "specific_note": "會隨名詞詞性變化",
          "segments": [{ "text": "welcher", "meaning": "哪一個", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Welches möchtest du?",
          "translation": "你想要哪一個？",
          "segments": [
            { "text": "Welches", "meaning": "哪一個", "tail": " " },
            { "text": "möchtest", "meaning": "想要", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Welchen Bus muss ich nehmen?",
          "translation": "我必須搭哪一班公車？",
          "segments": [
            { "text": "Welchen", "meaning": "哪一個", "tail": " " },
            { "text": "Bus", "meaning": "公車", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "nehmen", "meaning": "搭乘", "tail": "?" }
          ]
        },
        {
          "sentence": "Welche Farbe magst du?",
          "translation": "你喜歡哪種顏色？",
          "segments": [
            { "text": "Welche", "meaning": "哪一個", "tail": " " },
            { "text": "Farbe", "meaning": "顏色", "tail": " " },
            { "text": "magst", "meaning": "喜歡", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        }
      ],
      "usage_note": "這個字會像變色龍一樣，字尾跟著後面接的單字性別改變 (welcher/welche/welches)。",
      "image_file": "which.png"
    },
    {
      "id": "q-08",
      "term_zh": "多少（數量）",
      "related_terms": [
        {
          "term_target": "wie viel",
          "pronunciation": ["/viː fiːl/"],
          "specific_note": "",
          "segments": [
            { "text": "wie", "meaning": "如何", "tail": " " },
            { "text": "viel", "meaning": "多", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wie viel kostet das?",
          "translation": "這個多少錢？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "viel", "meaning": "多", "tail": " " },
            { "text": "kostet", "meaning": "花費", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie viel macht das?",
          "translation": "總共多少錢？(結帳時最常問)",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "viel", "meaning": "多", "tail": " " },
            { "text": "macht", "meaning": "變成/總計", "tail": " " },
            { "text": "das", "meaning": "這", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie viel Zeit haben wir noch?",
          "translation": "我們還有多少時間？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "viel", "meaning": "多", "tail": " " },
            { "text": "Zeit", "meaning": "時間", "tail": " " },
            { "text": "haben", "meaning": "有", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "noch", "meaning": "還", "tail": "?" }
          ]
        }
      ],
      "usage_note": "詢問不可數的數量或價格。如果是可數的數量 (例如多少人)，要加 e 變成 wie viele。",
      "image_file": "how_much.png"
    },
    {
      "id": "q-09",
      "term_zh": "多久（時間）",
      "related_terms": [
        {
          "term_target": "wie lange",
          "pronunciation": ["/viː ˈlaŋə/"],
          "specific_note": "",
          "segments": [
            { "text": "wie", "meaning": "如何", "tail": " " },
            { "text": "lange", "meaning": "久", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wie lange dauert das?",
          "translation": "這要花(持續)多久時間？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "lange", "meaning": "久", "tail": " " },
            { "text": "dauert", "meaning": "持續", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie lange bleibst du?",
          "translation": "你會停留多久？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "lange", "meaning": "久", "tail": " " },
            { "text": "bleibst", "meaning": "停留", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie lange lernst du schon Deutsch?",
          "translation": "你學德文多久了？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "lange", "meaning": "久", "tail": " " },
            { "text": "lernst", "meaning": "學", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "Deutsch", "meaning": "德文", "tail": "?" }
          ]
        }
      ],
      "usage_note": "詢問時間長度。通常都會跟動詞 dauern (持續) 一起搭配使用。",
      "image_file": "how_long.png"
    },
    {
      "id": "q-10",
      "term_zh": "幾點",
      "related_terms": [
        {
          "term_target": "wie spät",
          "pronunciation": ["/viː ʃpɛːt/"],
          "specific_note": "直譯：有多晚",
          "segments": [
            { "text": "wie", "meaning": "多", "tail": " " },
            { "text": "spät", "meaning": "晚", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wie spät ist es?",
          "translation": "現在幾點？(最口語問法)",
          "segments": [
            { "text": "Wie", "meaning": "多", "tail": " " },
            { "text": "spät", "meaning": "晚", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "es", "meaning": "它", "tail": "?" }
          ]
        },
        {
          "sentence": "Um wie viel Uhr treffen wir uns?",
          "translation": "我們幾點見面？",
          "segments": [
            { "text": "Um", "meaning": "在", "tail": " " },
            { "text": "wie", "meaning": "多少", "tail": " " },
            { "text": "viel", "meaning": "多", "tail": " " },
            { "text": "Uhr", "meaning": "點鐘", "tail": " " },
            { "text": "treffen", "meaning": "見面", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "uns", "meaning": "互相", "tail": "?" }
          ]
        },
        {
          "sentence": "Um wie viel Uhr beginnt der Film?",
          "translation": "電影幾點開始？",
          "segments": [
            { "text": "Um", "meaning": "在", "tail": " " },
            { "text": "wie", "meaning": "多少", "tail": " " },
            { "text": "viel", "meaning": "多", "tail": " " },
            { "text": "Uhr", "meaning": "點鐘", "tail": " " },
            { "text": "beginnt", "meaning": "開始", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Film", "meaning": "電影", "tail": "?" }
          ]
        }
      ],
      "usage_note": "問現在時刻用 Wie spät ist es?；如果是問「某件事在幾點發生」，則要用 Um wie viel Uhr (在幾點鐘) 開頭。",
      "image_file": "what_time.png"
    },
    {
      "id": "q-11",
      "term_zh": "幾歲",
      "related_terms": [
        {
          "term_target": "wie alt",
          "pronunciation": ["/viː alt/"],
          "specific_note": "",
          "segments": [
            { "text": "wie", "meaning": "多", "tail": " " },
            { "text": "alt", "meaning": "老", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wie alt bist du?",
          "translation": "你幾歲？",
          "segments": [
            { "text": "Wie", "meaning": "多", "tail": " " },
            { "text": "alt", "meaning": "老", "tail": " " },
            { "text": "bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie alt ist er?",
          "translation": "他幾歲？",
          "segments": [
            { "text": "Wie", "meaning": "多", "tail": " " },
            { "text": "alt", "meaning": "老", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "er", "meaning": "他", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie alt ist dein Kind?",
          "translation": "你的小孩幾歲了？",
          "segments": [
            { "text": "Wie", "meaning": "多", "tail": " " },
            { "text": "alt", "meaning": "老", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "dein", "meaning": "你的", "tail": " " },
            { "text": "Kind", "meaning": "孩子", "tail": "?" }
          ]
        }
      ],
      "usage_note": "德文跟英文邏輯一樣，問年紀都是問你「有多老」。",
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
          "term_target": "jetzt",
          "pronunciation": ["/jɛt͡st/"],
          "specific_note": "",
          "segments": [{ "text": "jetzt", "meaning": "現在", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich habe jetzt keine Zeit.",
          "translation": "我現在沒空。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "jetzt", "meaning": "現在", "tail": " " },
            { "text": "keine", "meaning": "沒有", "tail": " " },
            { "text": "Zeit", "meaning": "時間", "tail": "." }
          ]
        },
        {
          "sentence": "Wo bist du jetzt?",
          "translation": "你現在在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "bist", "meaning": "在/是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "jetzt", "meaning": "現在", "tail": "?" }
          ]
        },
        {
          "sentence": "Mach das jetzt!",
          "translation": "現在馬上做！",
          "segments": [
            { "text": "Mach", "meaning": "做", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "jetzt", "meaning": "現在", "tail": "!" }
          ]
        }
      ],
      "usage_note": "此時此刻。",
      "image_file": "now.png"
    },
    {
      "id": "tp-02",
      "term_zh": "今天",
      "related_terms": [
        {
          "term_target": "heute",
          "pronunciation": ["/ˈhɔɪ̯tə/"],
          "specific_note": "",
          "segments": [{ "text": "heute", "meaning": "今天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Heute ist das Wetter schön.",
          "translation": "今天天氣很好。",
          "segments": [
            { "text": "Heute", "meaning": "今天", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "das", "meaning": "這", "tail": " " },
            { "text": "Wetter", "meaning": "天氣", "tail": " " },
            { "text": "schön", "meaning": "美好的", "tail": "." }
          ]
        },
        {
          "sentence": "Was machst du heute?",
          "translation": "你今天要做什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "machst", "meaning": "做", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich muss heute arbeiten.",
          "translation": "我今天必須工作。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": " " },
            { "text": "arbeiten", "meaning": "工作", "tail": "." }
          ]
        }
      ],
      "usage_note": "本日。",
      "image_file": "today.png"
    },
    {
      "id": "tp-03",
      "term_zh": "明天",
      "related_terms": [
        {
          "term_target": "morgen",
          "pronunciation": ["/ˈmɔʁɡən/"],
          "specific_note": "",
          "segments": [{ "text": "morgen", "meaning": "明天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Bis morgen!",
          "translation": "明天見！",
          "segments": [
            { "text": "Bis", "meaning": "直到", "tail": " " },
            { "text": "morgen", "meaning": "明天", "tail": "!" }
          ]
        },
        {
          "sentence": "Morgen wird es regnen.",
          "translation": "明天會下雨。",
          "segments": [
            { "text": "Morgen", "meaning": "明天", "tail": " " },
            { "text": "wird", "meaning": "將會", "tail": " " },
            { "text": "es", "meaning": "它(天氣)", "tail": " " },
            { "text": "regnen", "meaning": "下雨", "tail": "." }
          ]
        },
        {
          "sentence": "Wir sehen uns morgen.",
          "translation": "我們明天見。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "sehen", "meaning": "看見", "tail": " " },
            { "text": "uns", "meaning": "互相", "tail": " " },
            { "text": "morgen", "meaning": "明天", "tail": "." }
          ]
        }
      ],
      "usage_note": "副詞的 morgen (小寫) 是明天；名詞的 der Morgen (大寫) 是早晨。要看清楚大小寫喔！",
      "image_file": "tomorrow.png"
    },
    {
      "id": "tp-04",
      "term_zh": "昨天",
      "related_terms": [
        {
          "term_target": "gestern",
          "pronunciation": ["/ˈɡɛstɐn/"],
          "specific_note": "",
          "segments": [{ "text": "gestern", "meaning": "昨天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich war gestern hier.",
          "translation": "我昨天在這裡。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "war", "meaning": "是/在 (過去式)", "tail": " " },
            { "text": "gestern", "meaning": "昨天", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Wo warst du gestern?",
          "translation": "你昨天在哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "warst", "meaning": "是/在 (過去式)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "gestern", "meaning": "昨天", "tail": "?" }
          ]
        },
        {
          "sentence": "Das war gestern.",
          "translation": "那已經是昨天的事了。",
          "segments": [
            { "text": "Das", "meaning": "那", "tail": " " },
            { "text": "war", "meaning": "是 (過去式)", "tail": " " },
            { "text": "gestern", "meaning": "昨天", "tail": "." }
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
          "term_target": "hier",
          "pronunciation": ["/hiːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "hier", "meaning": "這裡", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin hier.",
          "translation": "我在這裡。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是/在", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Ist hier noch frei?",
          "translation": "這裡還有空位嗎？",
          "segments": [
            { "text": "Ist", "meaning": "是", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": " " },
            { "text": "noch", "meaning": "還", "tail": " " },
            { "text": "frei", "meaning": "空著的", "tail": "?" }
          ]
        },
        {
          "sentence": "Bitte unterschreiben Sie hier.",
          "translation": "請您在這裡簽名。",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "unterschreiben", "meaning": "簽名", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        }
      ],
      "usage_note": "近處。",
      "image_file": "here.png"
    },
    {
      "id": "tp-06",
      "term_zh": "那裡",
      "related_terms": [
        {
          "term_target": "dort",
          "pronunciation": ["/dɔʁt/"],
          "specific_note": "",
          "segments": [{ "text": "dort", "meaning": "那裡", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Schau mal dort!",
          "translation": "你看那裡！",
          "segments": [
            { "text": "Schau", "meaning": "看", "tail": " " },
            { "text": "mal", "meaning": "一下", "tail": " " },
            { "text": "dort", "meaning": "那裡", "tail": "!" }
          ]
        },
        {
          "sentence": "Er arbeitet dort.",
          "translation": "他在那裡工作。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "arbeitet", "meaning": "工作", "tail": " " },
            { "text": "dort", "meaning": "那裡", "tail": "." }
          ]
        },
        {
          "sentence": "Dort drüben.",
          "translation": "在那對面 / 那邊。",
          "segments": [
            { "text": "Dort", "meaning": "那裡", "tail": " " },
            { "text": "drüben", "meaning": "對面", "tail": "." }
          ]
        }
      ],
      "usage_note": "較遠處。口語中也極常使用 da 來表示「那裡」。",
      "image_file": "there.png"
    },
    {
      "id": "tp-07",
      "term_zh": "天（日期）",
      "related_terms": [
        {
          "term_target": "Tag",
          "pronunciation": ["/taːk/"],
          "specific_note": "",
          "segments": [{ "text": "Tag", "meaning": "天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Jeden Tag.",
          "translation": "每一天。",
          "segments": [
            { "text": "Jeden", "meaning": "每個", "tail": " " },
            { "text": "Tag", "meaning": "天", "tail": "." }
          ]
        },
        {
          "sentence": "Einen schönen Tag noch!",
          "translation": "祝你有美好的一天！(離開商店前必對店員說的話)",
          "segments": [
            { "text": "Einen", "meaning": "一個", "tail": " " },
            { "text": "schönen", "meaning": "美好的", "tail": " " },
            { "text": "Tag", "meaning": "天", "tail": " " },
            { "text": "noch", "meaning": "還有", "tail": "!" }
          ]
        },
        {
          "sentence": "Heute ist ein guter Tag.",
          "translation": "今天是很棒的一天。",
          "segments": [
            { "text": "Heute", "meaning": "今天", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "ein", "meaning": "一個", "tail": " " },
            { "text": "guter", "meaning": "好的", "tail": " " },
            { "text": "Tag", "meaning": "天", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Tag)。",
      "image_file": "day.png"
    },
    {
      "id": "tp-08",
      "term_zh": "年",
      "related_terms": [
        {
          "term_target": "Jahr",
          "pronunciation": ["/jaːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "Jahr", "meaning": "年", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Frohes neues Jahr!",
          "translation": "新年快樂！",
          "segments": [
            { "text": "Frohes", "meaning": "快樂的", "tail": " " },
            { "text": "neues", "meaning": "新的", "tail": " " },
            { "text": "Jahr", "meaning": "年", "tail": "!" }
          ]
        },
        {
          "sentence": "Nächstes Jahr.",
          "translation": "明年。",
          "segments": [
            { "text": "Nächstes", "meaning": "下一個", "tail": " " },
            { "text": "Jahr", "meaning": "年", "tail": "." }
          ]
        },
        {
          "sentence": "Zweimal im Jahr.",
          "translation": "一年兩次。",
          "segments": [
            { "text": "Zweimal", "meaning": "兩次", "tail": " " },
            { "text": "im", "meaning": "在...裡", "tail": " " },
            { "text": "Jahr", "meaning": "年", "tail": "." }
          ]
        }
      ],
      "usage_note": "中性 (das Jahr)。",
      "image_file": "year.png"
    },
    {
      "id": "tp-09",
      "term_zh": "月",
      "related_terms": [
        {
          "term_target": "Monat",
          "pronunciation": ["/ˈmoːnat/"],
          "specific_note": "",
          "segments": [{ "text": "Monat", "meaning": "月", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Nächsten Monat.",
          "translation": "下個月。",
          "segments": [
            { "text": "Nächsten", "meaning": "下一個", "tail": " " },
            { "text": "Monat", "meaning": "月", "tail": "." }
          ]
        },
        {
          "sentence": "Jeden Monat.",
          "translation": "每個月。",
          "segments": [
            { "text": "Jeden", "meaning": "每個", "tail": " " },
            { "text": "Monat", "meaning": "月", "tail": "." }
          ]
        },
        {
          "sentence": "Einmal im Monat.",
          "translation": "一個月一次。",
          "segments": [
            { "text": "Einmal", "meaning": "一次", "tail": " " },
            { "text": "im", "meaning": "在...裡", "tail": " " },
            { "text": "Monat", "meaning": "月", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Monat)。",
      "image_file": "month.png"
    },
    {
      "id": "tp-10",
      "term_zh": "週",
      "related_terms": [
        {
          "term_target": "Woche",
          "pronunciation": ["/ˈvɔxə/"],
          "specific_note": "",
          "segments": [{ "text": "Woche", "meaning": "週", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Nächste Woche.",
          "translation": "下週。",
          "segments": [
            { "text": "Nächste", "meaning": "下一個", "tail": " " },
            { "text": "Woche", "meaning": "週", "tail": "." }
          ]
        },
        {
          "sentence": "Letzte Woche.",
          "translation": "上週。",
          "segments": [
            { "text": "Letzte", "meaning": "上一個", "tail": " " },
            { "text": "Woche", "meaning": "週", "tail": "." }
          ]
        },
        {
          "sentence": "Zweimal pro Woche.",
          "translation": "一週兩次。",
          "segments": [
            { "text": "Zweimal", "meaning": "兩次", "tail": " " },
            { "text": "pro", "meaning": "每", "tail": " " },
            { "text": "Woche", "meaning": "週", "tail": "." }
          ]
        }
      ],
      "usage_note": "陰性 (die Woche)。",
      "image_file": "week.png"
    },
    {
      "id": "tp-11",
      "term_zh": "早上",
      "related_terms": [
        {
          "term_target": "Morgen",
          "pronunciation": ["/ˈmɔʁɡən/"],
          "specific_note": "大寫名詞",
          "segments": [{ "text": "Morgen", "meaning": "早上", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Guten Morgen!",
          "translation": "早安！",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Morgen", "meaning": "早晨", "tail": "!" }
          ]
        },
        {
          "sentence": "Heute Morgen.",
          "translation": "今天早上。",
          "segments": [
            { "text": "Heute", "meaning": "今天", "tail": " " },
            { "text": "Morgen", "meaning": "早晨", "tail": "." }
          ]
        },
        {
          "sentence": "Am Morgen trinke ich Tee.",
          "translation": "在早晨我喝茶。(表達在某個時段，請固定使用 am)",
          "segments": [
            { "text": "Am", "meaning": "在", "tail": " " },
            { "text": "Morgen", "meaning": "早晨", "tail": " " },
            { "text": "trinke", "meaning": "喝", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "Tee", "meaning": "茶", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Morgen)。搭配介系詞 am。",
      "image_file": "morning.png"
    },
    {
      "id": "tp-12",
      "term_zh": "下午",
      "related_terms": [
        {
          "term_target": "Nachmittag",
          "pronunciation": ["/ˈnaːxmɪˌtaːk/"],
          "specific_note": "",
          "segments": [
            { "text": "Nach", "meaning": "之後", "tail": "" },
            { "text": "mittag", "meaning": "中午", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Heute Nachmittag.",
          "translation": "今天下午。",
          "segments": [
            { "text": "Heute", "meaning": "今天", "tail": " " },
            { "text": "Nachmittag", "meaning": "下午", "tail": "." }
          ]
        },
        {
          "sentence": "Am Nachmittag arbeite ich.",
          "translation": "在下午我工作。",
          "segments": [
            { "text": "Am", "meaning": "在", "tail": " " },
            { "text": "Nachmittag", "meaning": "下午", "tail": " " },
            { "text": "arbeite", "meaning": "工作", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Bis heute Nachmittag!",
          "translation": "今天下午見！",
          "segments": [
            { "text": "Bis", "meaning": "直到", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": " " },
            { "text": "Nachmittag", "meaning": "下午", "tail": "!" }
          ]
        }
      ],
      "usage_note": "陽性 (der Nachmittag)。德文的下午字面意思是「中午的後面」，非常有邏輯！",
      "image_file": "afternoon.png"
    },
    {
      "id": "tp-13",
      "term_zh": "晚上",
      "related_terms": [
        {
          "term_target": "Abend",
          "pronunciation": ["/ˈaːbənt/"],
          "specific_note": "",
          "segments": [{ "text": "Abend", "meaning": "晚上", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Guten Abend!",
          "translation": "大家晚安！(傍晚見面時打招呼用語)",
          "segments": [
            { "text": "Guten", "meaning": "好的", "tail": " " },
            { "text": "Abend", "meaning": "晚上", "tail": "!" }
          ]
        },
        {
          "sentence": "Heute Abend.",
          "translation": "今天晚上。",
          "segments": [
            { "text": "Heute", "meaning": "今天", "tail": " " },
            { "text": "Abend", "meaning": "晚上", "tail": "." }
          ]
        },
        {
          "sentence": "Was machst du am Abend?",
          "translation": "你晚上要做什麼？",
          "segments": [
            { "text": "Was", "meaning": "什麼", "tail": " " },
            { "text": "machst", "meaning": "做", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "am", "meaning": "在", "tail": " " },
            { "text": "Abend", "meaning": "晚上", "tail": "?" }
          ]
        }
      ],
      "usage_note": "陽性 (der Abend)。傍晚到睡前的時間。睡覺前道晚安則要說 Gute Nacht。",
      "image_file": "evening.png"
    },
    {
      "id": "tp-14",
      "term_zh": "中午",
      "related_terms": [
        {
          "term_target": "Mittag",
          "pronunciation": ["/ˈmɪtaːk/"],
          "specific_note": "",
          "segments": [{ "text": "Mittag", "meaning": "中午", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Zu Mittag essen.",
          "translation": "吃午餐。(當作午餐來吃)",
          "segments": [
            { "text": "Zu", "meaning": "作為", "tail": " " },
            { "text": "Mittag", "meaning": "中午", "tail": " " },
            { "text": "essen", "meaning": "吃", "tail": "." }
          ]
        },
        {
          "sentence": "Am Mittag.",
          "translation": "在中午。",
          "segments": [
            { "text": "Am", "meaning": "在", "tail": " " },
            { "text": "Mittag", "meaning": "中午", "tail": "." }
          ]
        },
        {
          "sentence": "Es ist Mittag.",
          "translation": "現在是中午。",
          "segments": [
            { "text": "Es", "meaning": "它(時間)", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "Mittag", "meaning": "中午", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Mittag)。約為正午12點前後。",
      "image_file": "noon.png"
    },
    {
      "id": "tp-15",
      "term_zh": "前面",
      "related_terms": [
        {
          "term_target": "vorne",
          "pronunciation": ["/ˈfɔʁnə/"],
          "specific_note": "表示位置",
          "segments": [{ "text": "vorne", "meaning": "在前面", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ganz vorne.",
          "translation": "在最前面。",
          "segments": [
            { "text": "Ganz", "meaning": "相當/完全", "tail": " " },
            { "text": "vorne", "meaning": "在前面", "tail": "." }
          ]
        },
        {
          "sentence": "Ich sitze vorne.",
          "translation": "我坐在前面。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "sitze", "meaning": "坐", "tail": " " },
            { "text": "vorne", "meaning": "在前面", "tail": "." }
          ]
        },
        {
          "sentence": "Der Eingang ist vorne.",
          "translation": "入口在前面。",
          "segments": [
            { "text": "Der", "meaning": "這個", "tail": " " },
            { "text": "Eingang", "meaning": "入口", "tail": " " },
            { "text": "ist", "meaning": "是/在", "tail": " " },
            { "text": "vorne", "meaning": "在前面", "tail": "." }
          ]
        }
      ],
      "usage_note": "這是一個副詞，用來表示「在前面這個位置」。",
      "image_file": "front.png"
    },
    {
      "id": "tp-16",
      "term_zh": "後面",
      "related_terms": [
        {
          "term_target": "hinten",
          "pronunciation": ["/ˈhɪntn̩/"],
          "specific_note": "表示位置",
          "segments": [{ "text": "hinten", "meaning": "在後面", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ganz hinten.",
          "translation": "在最後面。",
          "segments": [
            { "text": "Ganz", "meaning": "相當", "tail": " " },
            { "text": "hinten", "meaning": "在後面", "tail": "." }
          ]
        },
        {
          "sentence": "Die Toilette ist hinten.",
          "translation": "廁所在後面。",
          "segments": [
            { "text": "Die", "meaning": "這間", "tail": " " },
            { "text": "Toilette", "meaning": "廁所", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "hinten", "meaning": "在後面", "tail": "." }
          ]
        },
        {
          "sentence": "Bitte nach hinten durchgehen.",
          "translation": "請往後走。(搭公車時常聽到司機這樣喊)",
          "segments": [
            { "text": "Bitte", "meaning": "請", "tail": " " },
            { "text": "nach", "meaning": "往", "tail": " " },
            { "text": "hinten", "meaning": "後面", "tail": " " },
            { "text": "durchgehen", "meaning": "走過去", "tail": "." }
          ]
        }
      ],
      "usage_note": "後方位置。",
      "image_file": "behind.png"
    },
    {
      "id": "tp-17",
      "term_zh": "左邊",
      "related_terms": [
        {
          "term_target": "links",
          "pronunciation": ["/lɪŋks/"],
          "specific_note": "",
          "segments": [{ "text": "links", "meaning": "在左邊", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Nach links.",
          "translation": "往左邊。(表達方向要加上 nach)",
          "segments": [
            { "text": "Nach", "meaning": "往", "tail": " " },
            { "text": "links", "meaning": "左邊", "tail": "." }
          ]
        },
        {
          "sentence": "Biegen Sie links ab.",
          "translation": "請您左轉。(問路必備)",
          "segments": [
            { "text": "Biegen", "meaning": "轉彎", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "links", "meaning": "在左邊", "tail": " " },
            { "text": "ab", "meaning": "(可分動詞字尾)", "tail": "." }
          ]
        },
        {
          "sentence": "Dort drüben links.",
          "translation": "就在那邊左手邊。",
          "segments": [
            { "text": "Dort", "meaning": "那裡", "tail": " " },
            { "text": "drüben", "meaning": "對面", "tail": " " },
            { "text": "links", "meaning": "在左邊", "tail": "." }
          ]
        }
      ],
      "usage_note": "單純說「在左邊」用 links；如果要表達動態的「向左走/向左轉」，前面要加介系詞 nach。",
      "image_file": "left.png"
    },
    {
      "id": "tp-18",
      "term_zh": "右邊",
      "related_terms": [
        {
          "term_target": "rechts",
          "pronunciation": ["/ʁɛçt͡s/"],
          "specific_note": "",
          "segments": [{ "text": "rechts", "meaning": "在右邊", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Nach rechts.",
          "translation": "往右邊。",
          "segments": [
            { "text": "Nach", "meaning": "往", "tail": " " },
            { "text": "rechts", "meaning": "右邊", "tail": "." }
          ]
        },
        {
          "sentence": "Biegen Sie rechts ab.",
          "translation": "請您右轉。",
          "segments": [
            { "text": "Biegen", "meaning": "轉彎", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "rechts", "meaning": "在右邊", "tail": " " },
            { "text": "ab", "meaning": "(可分動詞字尾)", "tail": "." }
          ]
        },
        {
          "sentence": "Dort drüben rechts.",
          "translation": "在那邊右手邊。",
          "segments": [
            { "text": "Dort", "meaning": "那裡", "tail": " " },
            { "text": "drüben", "meaning": "對面", "tail": " " },
            { "text": "rechts", "meaning": "在右邊", "tail": "." }
          ]
        }
      ],
      "usage_note": "跟左邊一樣，表方向要加 nach。",
      "image_file": "right.png"
    },
    {
      "id": "tp-19",
      "term_zh": "旁邊",
      "related_terms": [
        {
          "term_target": "neben",
          "pronunciation": ["/ˈneːbən/"],
          "specific_note": "介系詞",
          "segments": [{ "text": "neben", "meaning": "在...旁邊", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Setz dich neben mich.",
          "translation": "坐到我旁邊來。",
          "segments": [
            { "text": "Setz", "meaning": "坐", "tail": " " },
            { "text": "dich", "meaning": "你自己", "tail": " " },
            { "text": "neben", "meaning": "在...旁", "tail": " " },
            { "text": "mich", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Neben dem Bahnhof.",
          "translation": "在火車站旁邊。",
          "segments": [
            { "text": "Neben", "meaning": "在...旁", "tail": " " },
            { "text": "dem", "meaning": "這", "tail": " " },
            { "text": "Bahnhof", "meaning": "車站", "tail": "." }
          ]
        },
        {
          "sentence": "Er steht neben dir.",
          "translation": "他站在你旁邊。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "steht", "meaning": "站", "tail": " " },
            { "text": "neben", "meaning": "在...旁", "tail": " " },
            { "text": "dir", "meaning": "你", "tail": "." }
          ]
        }
      ],
      "usage_note": "這是一個介系詞，後面一定要接對象（在「誰」的旁邊）。",
      "image_file": "beside.png"
    },
    {
      "id": "tp-20",
      "term_zh": "對面",
      "related_terms": [
        {
          "term_target": "gegenüber",
          "pronunciation": ["/ɡeːɡənˈʔyːbɐ/"],
          "specific_note": "位置",
          "segments": [{ "text": "gegenüber", "meaning": "在...對面", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Genau gegenüber.",
          "translation": "就在正對面。",
          "segments": [
            { "text": "Genau", "meaning": "正好/確切", "tail": " " },
            { "text": "gegenüber", "meaning": "在對面", "tail": "." }
          ]
        },
        {
          "sentence": "Mir gegenüber.",
          "translation": "在我對面。(德文很常把 gegenüber 放在名詞後面)",
          "segments": [
            { "text": "Mir", "meaning": "我", "tail": " " },
            { "text": "gegenüber", "meaning": "在對面", "tail": "." }
          ]
        },
        {
          "sentence": "Der Supermarkt ist gegenüber.",
          "translation": "超市就在對面。",
          "segments": [
            { "text": "Der", "meaning": "這間", "tail": " " },
            { "text": "Supermarkt", "meaning": "超市", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "gegenüber", "meaning": "對面", "tail": "." }
          ]
        }
      ],
      "usage_note": "在對側。這個字非常特別，它可以放在名詞的前面，也可以放在名詞的後面。",
      "image_file": "across_from.png"
    },
    {
      "id": "tp-21",
      "term_zh": "春天",
      "related_terms": [
        {
          "term_target": "Frühling",
          "pronunciation": ["/ˈfʁyːlɪŋ/"],
          "specific_note": "",
          "segments": [{ "text": "Frühling", "meaning": "春天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Im Frühling.",
          "translation": "在春天。",
          "segments": [
            { "text": "Im", "meaning": "在...裡 (in dem)", "tail": " " },
            { "text": "Frühling", "meaning": "春天", "tail": "." }
          ]
        },
        {
          "sentence": "Der Frühling kommt.",
          "translation": "春天來了。",
          "segments": [
            { "text": "Der", "meaning": "這", "tail": " " },
            { "text": "Frühling", "meaning": "春天", "tail": " " },
            { "text": "kommt", "meaning": "來臨", "tail": "." }
          ]
        },
        {
          "sentence": "Ich liebe den Frühling.",
          "translation": "我愛春天。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "liebe", "meaning": "愛", "tail": " " },
            { "text": "den", "meaning": "這", "tail": " " },
            { "text": "Frühling", "meaning": "春天", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Frühling)。表示「在某個季節」，一律使用介系詞 im。",
      "image_file": "spring.png"
    },
    {
      "id": "tp-22",
      "term_zh": "夏天",
      "related_terms": [
        {
          "term_target": "Sommer",
          "pronunciation": ["/ˈzɔmɐ/"],
          "specific_note": "",
          "segments": [{ "text": "Sommer", "meaning": "夏天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Im Sommer.",
          "translation": "在夏天。",
          "segments": [
            { "text": "Im", "meaning": "在...裡", "tail": " " },
            { "text": "Sommer", "meaning": "夏天", "tail": "." }
          ]
        },
        {
          "sentence": "Ein heißer Sommer.",
          "translation": "一個炎熱的夏天。",
          "segments": [
            { "text": "Ein", "meaning": "一個", "tail": " " },
            { "text": "heißer", "meaning": "熱的", "tail": " " },
            { "text": "Sommer", "meaning": "夏天", "tail": "." }
          ]
        },
        {
          "sentence": "Wir reisen im Sommer.",
          "translation": "我們夏天去旅行。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "reisen", "meaning": "旅行", "tail": " " },
            { "text": "im", "meaning": "在", "tail": " " },
            { "text": "Sommer", "meaning": "夏天", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Sommer)。",
      "image_file": "summer.png"
    },
    {
      "id": "tp-23",
      "term_zh": "秋天",
      "related_terms": [
        {
          "term_target": "Herbst",
          "pronunciation": ["/hɛʁpst/"],
          "specific_note": "",
          "segments": [{ "text": "Herbst", "meaning": "秋天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Im Herbst.",
          "translation": "在秋天。",
          "segments": [
            { "text": "Im", "meaning": "在...裡", "tail": " " },
            { "text": "Herbst", "meaning": "秋天", "tail": "." }
          ]
        },
        {
          "sentence": "Es wird kalt im Herbst.",
          "translation": "秋天天氣會變冷。",
          "segments": [
            { "text": "Es", "meaning": "它(天氣)", "tail": " " },
            { "text": "wird", "meaning": "變", "tail": " " },
            { "text": "kalt", "meaning": "冷的", "tail": " " },
            { "text": "im", "meaning": "在", "tail": " " },
            { "text": "Herbst", "meaning": "秋天", "tail": "." }
          ]
        },
        {
          "sentence": "Die Blätter fallen im Herbst.",
          "translation": "秋天葉子會落下。",
          "segments": [
            { "text": "Die", "meaning": "這些", "tail": " " },
            { "text": "Blätter", "meaning": "葉子(複數)", "tail": " " },
            { "text": "fallen", "meaning": "落下", "tail": " " },
            { "text": "im", "meaning": "在", "tail": " " },
            { "text": "Herbst", "meaning": "秋天", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Herbst)。",
      "image_file": "autumn.png"
    },
    {
      "id": "tp-24",
      "term_zh": "冬天",
      "related_terms": [
        {
          "term_target": "Winter",
          "pronunciation": ["/ˈvɪntɐ/"],
          "specific_note": "",
          "segments": [{ "text": "Winter", "meaning": "冬天", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Im Winter.",
          "translation": "在冬天。",
          "segments": [
            { "text": "Im", "meaning": "在...裡", "tail": " " },
            { "text": "Winter", "meaning": "冬天", "tail": "." }
          ]
        },
        {
          "sentence": "Ein kalter Winter.",
          "translation": "一個寒冷的冬天。",
          "segments": [
            { "text": "Ein", "meaning": "一個", "tail": " " },
            { "text": "kalter", "meaning": "冷的", "tail": " " },
            { "text": "Winter", "meaning": "冬天", "tail": "." }
          ]
        },
        {
          "sentence": "Es schneit im Winter.",
          "translation": "冬天下雪。",
          "segments": [
            { "text": "Es", "meaning": "它(天氣)", "tail": " " },
            { "text": "schneit", "meaning": "下雪", "tail": " " },
            { "text": "im", "meaning": "在", "tail": " " },
            { "text": "Winter", "meaning": "冬天", "tail": "." }
          ]
        }
      ],
      "usage_note": "陽性 (der Winter)。W 要發成 V 的音「文塔」。",
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
          "term_target": "oder",
          "pronunciation": ["/ˈoːdɐ/"],
          "specific_note": "",
          "segments": [{ "text": "oder", "meaning": "或者", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Kaffee oder Tee?",
          "translation": "咖啡還是茶？",
          "segments": [
            { "text": "Kaffee", "meaning": "咖啡", "tail": " " },
            { "text": "oder", "meaning": "或者", "tail": " " },
            { "text": "Tee", "meaning": "茶", "tail": "?" }
          ]
        },
        {
          "sentence": "Bar oder mit Karte?",
          "translation": "付現還是刷卡？(在德國結帳時店員必問神句)",
          "segments": [
            { "text": "Bar", "meaning": "現金", "tail": " " },
            { "text": "oder", "meaning": "或者", "tail": " " },
            { "text": "mit", "meaning": "用", "tail": " " },
            { "text": "Karte", "meaning": "卡片", "tail": "?" }
          ]
        },
        {
          "sentence": "Gehen wir heute oder morgen?",
          "translation": "我們今天去還是明天去？",
          "segments": [
            { "text": "Gehen", "meaning": "去", "tail": " " },
            { "text": "wir", "meaning": "我們", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": " " },
            { "text": "oder", "meaning": "或者", "tail": " " },
            { "text": "morgen", "meaning": "明天", "tail": "?" }
          ]
        }
      ],
      "usage_note": "二選一。不管是用在直述句還是疑問句都可以。",
      "image_file": "or.png"
    },
    {
      "id": "conj-02",
      "term_zh": "但是",
      "related_terms": [
        {
          "term_target": "aber",
          "pronunciation": ["/ˈaːbɐ/"],
          "specific_note": "",
          "segments": [{ "text": "aber", "meaning": "但是", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist schön, aber zu teuer.",
          "translation": "這很漂亮，但是太貴了。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schön", "meaning": "美麗的", "tail": ", " },
            { "text": "aber", "meaning": "但是", "tail": " " },
            { "text": "zu", "meaning": "太", "tail": " " },
            { "text": "teuer", "meaning": "貴的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich möchte, aber ich kann nicht.",
          "translation": "我想去，但是我不能去。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": ", " },
            { "text": "aber", "meaning": "但是", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "kann", "meaning": "能", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Klein, aber fein.",
          "translation": "小巧但精緻。(德國非常常見的俗語，類似麻雀雖小五臟俱全)",
          "segments": [
            { "text": "Klein", "meaning": "小的", "tail": ", " },
            { "text": "aber", "meaning": "但是", "tail": " " },
            { "text": "fein", "meaning": "精美的", "tail": "." }
          ]
        }
      ],
      "usage_note": "語氣轉折。德文習慣在 aber 的前面加上逗號。",
      "image_file": "but.png"
    },
    {
      "id": "conj-03",
      "term_zh": "所以",
      "related_terms": [
        {
          "term_target": "deshalb",
          "pronunciation": ["/ˈdɛshalp/"],
          "specific_note": "",
          "segments": [{ "text": "deshalb", "meaning": "所以", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich habe Hunger, deshalb esse ich.",
          "translation": "我餓了，所以我吃東西。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "Hunger", "meaning": "飢餓", "tail": ", " },
            { "text": "deshalb", "meaning": "所以", "tail": " " },
            { "text": "esse", "meaning": "吃", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Es regnet, deshalb bleibe ich hier.",
          "translation": "在下雨，所以我留在這裡。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "regnet", "meaning": "下雨", "tail": ", " },
            { "text": "deshalb", "meaning": "所以", "tail": " " },
            { "text": "bleibe", "meaning": "停留", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bin müde, deshalb gehe ich ins Bett.",
          "translation": "我累了，所以我去睡覺。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "müde", "meaning": "累的", "tail": ", " },
            { "text": "deshalb", "meaning": "所以", "tail": " " },
            { "text": "gehe", "meaning": "去", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "ins", "meaning": "進去", "tail": " " },
            { "text": "Bett", "meaning": "床", "tail": "." }
          ]
        }
      ],
      "usage_note": "注意！德文的 deshalb 非常霸道，放在它後面的「動詞」必須跑到「主詞」的前面 (例如 deshalb esse ich，而不是 deshalb ich esse)。",
      "image_file": "so.png"
    },
    {
      "id": "conj-04",
      "term_zh": "以及／和",
      "related_terms": [
        {
          "term_target": "und",
          "pronunciation": ["/ʊnt/"],
          "specific_note": "",
          "segments": [{ "text": "und", "meaning": "和", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Du und ich.",
          "translation": "你和我。",
          "segments": [
            { "text": "Du", "meaning": "你", "tail": " " },
            { "text": "und", "meaning": "和", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Schwarz und weiß.",
          "translation": "黑與白。",
          "segments": [
            { "text": "Schwarz", "meaning": "黑", "tail": " " },
            { "text": "und", "meaning": "和", "tail": " " },
            { "text": "weiß", "meaning": "白", "tail": "." }
          ]
        },
        {
          "sentence": "Ich lerne Englisch und Deutsch.",
          "translation": "我學習英文和德文。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "lerne", "meaning": "學習", "tail": " " },
            { "text": "Englisch", "meaning": "英文", "tail": " " },
            { "text": "und", "meaning": "和", "tail": " " },
            { "text": "Deutsch", "meaning": "德文", "tail": "." }
          ]
        }
      ],
      "usage_note": "用來連接兩個對等的人事物。發音時，字尾的 d 會發成氣音 t 的聲音。",
      "image_file": "and.png"
    },
    {
      "id": "conj-05",
      "term_zh": "因為",
      "related_terms": [
        {
          "term_target": "weil",
          "pronunciation": ["/vaɪ̯l/"],
          "specific_note": "",
          "segments": [{ "text": "weil", "meaning": "因為", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich esse, weil ich Hunger habe.",
          "translation": "我吃東西是因為我餓了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "esse", "meaning": "吃", "tail": ", " },
            { "text": "weil", "meaning": "因為", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "Hunger", "meaning": "飢餓", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bleibe zu Hause, weil es regnet.",
          "translation": "我待在家，因為在下雨。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bleibe", "meaning": "停留", "tail": " " },
            { "text": "zu", "meaning": "在", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": ", " },
            { "text": "weil", "meaning": "因為", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "regnet", "meaning": "下雨", "tail": "." }
          ]
        },
        {
          "sentence": "Sie lacht, weil sie glücklich ist.",
          "translation": "她笑了，因為她很開心。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "lacht", "meaning": "笑", "tail": ", " },
            { "text": "weil", "meaning": "因為", "tail": " " },
            { "text": "sie", "meaning": "她", "tail": " " },
            { "text": "glücklich", "meaning": "開心的", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國人說話的超級大魔王規則：只要用了 weil (因為)，後面那句話的「動詞」就會被一腳踢到句子的最尾端！(像例句的 habe / regnet / ist 都在最後面)",
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
      "term_zh": "和...一起 / 用...",
      "related_terms": [
        {
          "term_target": "mit",
          "pronunciation": ["/mɪt/"],
          "specific_note": "伴隨/使用工具",
          "segments": [{ "text": "mit", "meaning": "和/用", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Kommst du mit mir?",
          "translation": "你要跟我一起來嗎？",
          "segments": [
            { "text": "Kommst", "meaning": "來", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "mit", "meaning": "和", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": "?" }
          ]
        },
        {
          "sentence": "Ich trinke Kaffee mit Milch.",
          "translation": "我喝咖啡加(伴隨)牛奶。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "trinke", "meaning": "喝", "tail": " " },
            { "text": "Kaffee", "meaning": "咖啡", "tail": " " },
            { "text": "mit", "meaning": "加/和", "tail": " " },
            { "text": "Milch", "meaning": "牛奶", "tail": "." }
          ]
        },
        {
          "sentence": "Zahlen Sie mit Karte?",
          "translation": "您用刷卡的嗎？(直譯：用卡片付)",
          "segments": [
            { "text": "Zahlen", "meaning": "支付", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "mit", "meaning": "用", "tail": " " },
            { "text": "Karte", "meaning": "卡片", "tail": "?" }
          ]
        }
      ],
      "usage_note": "在德文裡，不僅表示「和誰一起」，搭乘交通工具或使用某種工具(如信用卡)也都用 mit。",
      "image_file": "with.png"
    },
    {
      "id": "prep-02",
      "term_zh": "從...",
      "related_terms": [
        {
          "term_target": "aus",
          "pronunciation": ["/aʊ̯s/"],
          "specific_note": "來自(內部/國家)",
          "segments": [{ "text": "aus", "meaning": "來自", "tail": "" }]
        },
        {
          "term_target": "von",
          "pronunciation": ["/fɔn/"],
          "specific_note": "從(起點/某人)",
          "segments": [{ "text": "von", "meaning": "從", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich komme aus Taiwan.",
          "translation": "我來自台灣。(表達國籍出處固定用 aus)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "komme", "meaning": "來", "tail": " " },
            { "text": "aus", "meaning": "來自", "tail": " " },
            { "text": "Taiwan", "meaning": "台灣", "tail": "." }
          ]
        },
        {
          "sentence": "Er kommt von der Arbeit.",
          "translation": "他剛從工作的地方(下班)回來。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "kommt", "meaning": "來", "tail": " " },
            { "text": "von", "meaning": "從", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Arbeit", "meaning": "工作", "tail": "." }
          ]
        },
        {
          "sentence": "Von wann bis wann?",
          "translation": "從幾點到幾點？",
          "segments": [
            { "text": "Von", "meaning": "從", "tail": " " },
            { "text": "wann", "meaning": "何時", "tail": " " },
            { "text": "bis", "meaning": "到", "tail": " " },
            { "text": "wann", "meaning": "何時", "tail": "?" }
          ]
        }
      ],
      "usage_note": "德文的「從...來」分得很細：從某個國家/空間內部出來要用 aus；從某個地點、人或時間點開始要用 von。",
      "image_file": "from.png"
    },
    {
      "id": "prep-03",
      "term_zh": "為了... / 給...",
      "related_terms": [
        {
          "term_target": "für",
          "pronunciation": ["/fyːɐ̯/"],
          "specific_note": "目的/對象",
          "segments": [{ "text": "für", "meaning": "為了", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist für dich.",
          "translation": "這是給你的。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "für", "meaning": "給", "tail": " " },
            { "text": "dich", "meaning": "你", "tail": "." }
          ]
        },
        {
          "sentence": "Danke für die Hilfe.",
          "translation": "謝謝你的幫忙。",
          "segments": [
            { "text": "Danke", "meaning": "謝謝", "tail": " " },
            { "text": "für", "meaning": "因為/為了", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Hilfe", "meaning": "幫忙", "tail": "." }
          ]
        },
        {
          "sentence": "Wir haben ein Geschenk für sie.",
          "translation": "我們有一個給她的禮物。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "haben", "meaning": "有", "tail": " " },
            { "text": "ein", "meaning": "一個", "tail": " " },
            { "text": "Geschenk", "meaning": "禮物", "tail": " " },
            { "text": "für", "meaning": "給", "tail": " " },
            { "text": "sie", "meaning": "她", "tail": "." }
          ]
        }
      ],
      "usage_note": "表示對象、目的或代價。",
      "image_file": "for.png"
    },
    {
      "id": "prep-04",
      "term_zh": "...的",
      "related_terms": [
        {
          "term_target": "von",
          "pronunciation": ["/fɔn/"],
          "specific_note": "代替所有格",
          "segments": [{ "text": "von", "meaning": "的/從", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ein Freund von mir.",
          "translation": "我的一個朋友。",
          "segments": [
            { "text": "Ein", "meaning": "一個", "tail": " " },
            { "text": "Freund", "meaning": "朋友", "tail": " " },
            { "text": "von", "meaning": "的", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": "." }
          ]
        },
        {
          "sentence": "Das Handy von Anna.",
          "translation": "安娜的手機。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "Handy", "meaning": "手機", "tail": " " },
            { "text": "von", "meaning": "的", "tail": " " },
            { "text": "Anna", "meaning": "安娜", "tail": "." }
          ]
        },
        {
          "sentence": "Die Mitte von Berlin.",
          "translation": "柏林的市中心。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Mitte", "meaning": "中心", "tail": " " },
            { "text": "von", "meaning": "的", "tail": " " },
            { "text": "Berlin", "meaning": "柏林", "tail": "." }
          ]
        }
      ],
      "usage_note": "德文的文法有所謂的 Genitiv (屬格) 來表示「...的」，但德國人在日常口語中超級愛偷懶，直接用 von 來代替。",
      "image_file": "of.png"
    },
    {
      "id": "prep-05",
      "term_zh": "在... (場所)",
      "related_terms": [
        {
          "term_target": "in",
          "pronunciation": ["/ɪn/"],
          "specific_note": "內部/空間",
          "segments": [{ "text": "in", "meaning": "在...裡", "tail": "" }]
        },
        {
          "term_target": "an",
          "pronunciation": ["/an/"],
          "specific_note": "邊緣/接觸",
          "segments": [{ "text": "an", "meaning": "在...旁", "tail": "" }]
        },
        {
          "term_target": "bei",
          "pronunciation": ["/baɪ̯/"],
          "specific_note": "在某人家/店",
          "segments": [{ "text": "bei", "meaning": "在", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin im Büro.",
          "translation": "我在辦公室裡。(im = in dem)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "在", "tail": " " },
            { "text": "im", "meaning": "在...裡", "tail": " " },
            { "text": "Büro", "meaning": "辦公室", "tail": "." }
          ]
        },
        {
          "sentence": "Wir warten am Bahnhof.",
          "translation": "我們在車站等。(am = an dem)",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "warten", "meaning": "等待", "tail": " " },
            { "text": "am", "meaning": "在", "tail": " " },
            { "text": "Bahnhof", "meaning": "車站", "tail": "." }
          ]
        },
        {
          "sentence": "Sie ist bei der Arbeit.",
          "translation": "她正在上班 (在工作的狀態中)。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "ist", "meaning": "在", "tail": " " },
            { "text": "bei", "meaning": "在", "tail": " " },
            { "text": "der", "meaning": "這", "tail": " " },
            { "text": "Arbeit", "meaning": "工作", "tail": "." }
          ]
        }
      ],
      "usage_note": "「在」哪裡分三種：in(在密閉空間裡)、an(在車站或水邊等開放邊緣)、bei(在某人身邊、某家公司或某個狀態)。",
      "image_file": "at_in.png"
    },
    {
      "id": "prep-06",
      "term_zh": "往... (去)",
      "related_terms": [
        {
          "term_target": "nach",
          "pronunciation": ["/nax/"],
          "specific_note": "往國家/城市/家",
          "segments": [{ "text": "nach", "meaning": "往", "tail": "" }]
        },
        {
          "term_target": "zu",
          "pronunciation": ["/t͡su/"],
          "specific_note": "往地點/某人",
          "segments": [{ "text": "zu", "meaning": "前往", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ich fahre nach Berlin.",
          "translation": "我搭車去柏林。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "fahre", "meaning": "開車/搭車", "tail": " " },
            { "text": "nach", "meaning": "往", "tail": " " },
            { "text": "Berlin", "meaning": "柏林", "tail": "." }
          ]
        },
        {
          "sentence": "Ich gehe nach Hause.",
          "translation": "我要回家。(固定用法)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "gehe", "meaning": "走", "tail": " " },
            { "text": "nach", "meaning": "往", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Wir gehen zum Bahnhof.",
          "translation": "我們要去火車站。(zum = zu dem)",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": " " },
            { "text": "zum", "meaning": "前往", "tail": " " },
            { "text": "Bahnhof", "meaning": "車站", "tail": "." }
          ]
        }
      ],
      "usage_note": "去無冠詞的地名（城市、國家）或「回家」用 nach；去一般的地點或去找某個人則用 zu。",
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
          "term_target": "null",
          "pronunciation": ["/nʊl/"],
          "specific_note": "",
          "segments": [{ "text": "null", "meaning": "零", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Null Punkte.",
          "translation": "零分。",
          "segments": [
            { "text": "Null", "meaning": "零", "tail": " " },
            { "text": "Punkte", "meaning": "分數(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Es ist null Grad heute.",
          "translation": "今天零度。",
          "segments": [
            { "text": "Es", "meaning": "它(天氣)", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "null", "meaning": "零", "tail": " " },
            { "text": "Grad", "meaning": "度", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe null Erfahrung.",
          "translation": "我毫無經驗。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "null", "meaning": "零", "tail": " " },
            { "text": "Erfahrung", "meaning": "經驗", "tail": "." }
          ]
        }
      ],
      "usage_note": "零。",
      "image_file": "zero.png"
    },
    {
      "id": "num-1",
      "term_zh": "1",
      "related_terms": [
        {
          "term_target": "eins",
          "pronunciation": ["/aɪ̯ns/"],
          "specific_note": "單獨念數字時",
          "segments": [{ "text": "eins", "meaning": "一", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Ein Apfel.",
          "translation": "一顆蘋果。",
          "segments": [
            { "text": "Ein", "meaning": "一顆", "tail": " " },
            { "text": "Apfel", "meaning": "蘋果", "tail": "." }
          ]
        },
        {
          "sentence": "Ein Ticket, bitte.",
          "translation": "麻煩給我一張票。(Ticket 是中性，所以搭 ein)",
          "segments": [
            { "text": "Ein", "meaning": "一張", "tail": " " },
            { "text": "Ticket", "meaning": "票", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe eine Schwester.",
          "translation": "我有一個姐妹。(Schwester 是陰性，所以 eins 要變身成 eine)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "Schwester", "meaning": "姐妹", "tail": "." }
          ]
        }
      ],
      "usage_note": "如果只是單純念數字(1, 2, 3...)，唸 eins；但如果後面有接物品(一個蘋果)，字尾的 s 就要拿掉，並跟隨物品的性別做變化(ein, eine, einen)。",
      "image_file": "one.png"
    },
    {
      "id": "num-2",
      "term_zh": "2",
      "related_terms": [
        {
          "term_target": "zwei",
          "pronunciation": ["/t͡svaɪ̯/"],
          "specific_note": "",
          "segments": [{ "text": "zwei", "meaning": "二", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Zwei Tage.",
          "translation": "兩天。",
          "segments": [
            { "text": "Zwei", "meaning": "兩", "tail": " " },
            { "text": "Tage", "meaning": "天(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Ein Tisch für zwei, bitte.",
          "translation": "麻煩給我們兩人的位子。",
          "segments": [
            { "text": "Ein", "meaning": "一個", "tail": " " },
            { "text": "Tisch", "meaning": "桌子", "tail": " " },
            { "text": "für", "meaning": "給/為了", "tail": " " },
            { "text": "zwei", "meaning": "兩人", "tail": ", " },
            { "text": "bitte", "meaning": "請", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe zwei Katzen.",
          "translation": "我有兩隻貓。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "zwei", "meaning": "兩", "tail": " " },
            { "text": "Katzen", "meaning": "貓(複數)", "tail": "." }
          ]
        }
      ],
      "usage_note": "二。字首的 z 發 ㄘ (ts) 的音，w 發 v 的音。",
      "image_file": "two.png"
    },
    {
      "id": "num-3",
      "term_zh": "3",
      "related_terms": [
        {
          "term_target": "drei",
          "pronunciation": ["/dʁaɪ̯/"],
          "specific_note": "",
          "segments": [{ "text": "drei", "meaning": "三", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Drei Personen.",
          "translation": "三個人。",
          "segments": [
            { "text": "Drei", "meaning": "三", "tail": " " },
            { "text": "Personen", "meaning": "人(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Wir sehen uns in drei Minuten.",
          "translation": "我們三分鐘後見。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "sehen", "meaning": "看見", "tail": " " },
            { "text": "uns", "meaning": "互相", "tail": " " },
            { "text": "in", "meaning": "在...之後", "tail": " " },
            { "text": "drei", "meaning": "三", "tail": " " },
            { "text": "Minuten", "meaning": "分鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe drei Bücher gekauft.",
          "translation": "我買了三本書。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "drei", "meaning": "三", "tail": " " },
            { "text": "Bücher", "meaning": "書(複數)", "tail": " " },
            { "text": "gekauft", "meaning": "買", "tail": "." }
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
          "term_target": "vier",
          "pronunciation": ["/fiːɐ̯/"],
          "specific_note": "",
          "segments": [{ "text": "vier", "meaning": "四", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Vier Jahreszeiten.",
          "translation": "四季。",
          "segments": [
            { "text": "Vier", "meaning": "四", "tail": " " },
            { "text": "Jahreszeiten", "meaning": "季節", "tail": "." }
          ]
        },
        {
          "sentence": "Vier Uhr.",
          "translation": "四點鐘。",
          "segments": [
            { "text": "Vier", "meaning": "四", "tail": " " },
            { "text": "Uhr", "meaning": "點鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Tisch Nummer vier.",
          "translation": "四號桌。",
          "segments": [
            { "text": "Tisch", "meaning": "桌子", "tail": " " },
            { "text": "Nummer", "meaning": "號碼", "tail": " " },
            { "text": "vier", "meaning": "四", "tail": "." }
          ]
        }
      ],
      "usage_note": "四。字首的 v 發 f 的音。",
      "image_file": "four.png"
    },
    {
      "id": "num-5",
      "term_zh": "5",
      "related_terms": [
        {
          "term_target": "fünf",
          "pronunciation": ["/fʏnf/"],
          "specific_note": "",
          "segments": [{ "text": "fünf", "meaning": "五", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Fünf Sterne.",
          "translation": "五顆星。",
          "segments": [
            { "text": "Fünf", "meaning": "五", "tail": " " },
            { "text": "Sterne", "meaning": "星(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Gib mir fünf Minuten.",
          "translation": "給我五分鐘。",
          "segments": [
            { "text": "Gib", "meaning": "給", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "fünf", "meaning": "五", "tail": " " },
            { "text": "Minuten", "meaning": "分鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Sie ist fünf Jahre alt.",
          "translation": "她五歲。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "fünf", "meaning": "五", "tail": " " },
            { "text": "Jahre", "meaning": "歲", "tail": " " },
            { "text": "alt", "meaning": "老(歲)", "tail": "." }
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
          "term_target": "sechs",
          "pronunciation": ["/zɛks/"],
          "specific_note": "",
          "segments": [{ "text": "sechs", "meaning": "六", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sechs Uhr.",
          "translation": "六點。",
          "segments": [
            { "text": "Sechs", "meaning": "六", "tail": " " },
            { "text": "Uhr", "meaning": "點鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Es gibt sechs Eier.",
          "translation": "有六顆蛋。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "gibt", "meaning": "給(有)", "tail": " " },
            { "text": "sechs", "meaning": "六", "tail": " " },
            { "text": "Eier", "meaning": "蛋(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Ich stehe um sechs auf.",
          "translation": "我六點起床。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "stehe", "meaning": "站", "tail": " " },
            { "text": "um", "meaning": "在", "tail": " " },
            { "text": "sechs", "meaning": "六", "tail": " " },
            { "text": "auf", "meaning": "起來", "tail": "." }
          ]
        }
      ],
      "usage_note": "六。",
      "image_file": "six.png"
    },
    {
      "id": "num-7",
      "term_zh": "7",
      "related_terms": [
        {
          "term_target": "sieben",
          "pronunciation": ["/ˈziːbən/"],
          "specific_note": "",
          "segments": [{ "text": "sieben", "meaning": "七", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Sieben Tage.",
          "translation": "七天。",
          "segments": [
            { "text": "Sieben", "meaning": "七", "tail": " " },
            { "text": "Tage", "meaning": "天(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Um sieben Uhr abends.",
          "translation": "晚上七點。",
          "segments": [
            { "text": "Um", "meaning": "在", "tail": " " },
            { "text": "sieben", "meaning": "七", "tail": " " },
            { "text": "Uhr", "meaning": "點鐘", "tail": " " },
            { "text": "abends", "meaning": "在晚上", "tail": "." }
          ]
        },
        {
          "sentence": "Die Glückszahl sieben.",
          "translation": "幸運數字七。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Glückszahl", "meaning": "幸運數字", "tail": " " },
            { "text": "sieben", "meaning": "七", "tail": "." }
          ]
        }
      ],
      "usage_note": "七。",
      "image_file": "seven.png"
    },
    {
      "id": "num-8",
      "term_zh": "8",
      "related_terms": [
        {
          "term_target": "acht",
          "pronunciation": ["/axt/"],
          "specific_note": "",
          "segments": [{ "text": "acht", "meaning": "八", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Acht Jahre alt.",
          "translation": "八歲。",
          "segments": [
            { "text": "Acht", "meaning": "八", "tail": " " },
            { "text": "Jahre", "meaning": "歲(複數)", "tail": " " },
            { "text": "alt", "meaning": "老(歲)", "tail": "." }
          ]
        },
        {
          "sentence": "Wir sehen uns um acht.",
          "translation": "我們八點見。",
          "segments": [
            { "text": "Wir", "meaning": "我們", "tail": " " },
            { "text": "sehen", "meaning": "見面", "tail": " " },
            { "text": "uns", "meaning": "互相", "tail": " " },
            { "text": "um", "meaning": "在", "tail": " " },
            { "text": "acht", "meaning": "八", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe acht Stunden geschlafen.",
          "translation": "我睡了八個小時。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "acht", "meaning": "八", "tail": " " },
            { "text": "Stunden", "meaning": "小時(複數)", "tail": " " },
            { "text": "geschlafen", "meaning": "睡覺", "tail": "." }
          ]
        }
      ],
      "usage_note": "八。",
      "image_file": "eight.png"
    },
    {
      "id": "num-9",
      "term_zh": "9",
      "related_terms": [
        {
          "term_target": "neun",
          "pronunciation": ["/nɔɪ̯n/"],
          "specific_note": "",
          "segments": [{ "text": "neun", "meaning": "九", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Neun Uhr abends.",
          "translation": "晚上九點。",
          "segments": [
            { "text": "Neun", "meaning": "九", "tail": " " },
            { "text": "Uhr", "meaning": "點鐘", "tail": " " },
            { "text": "abends", "meaning": "在晚上", "tail": "." }
          ]
        },
        {
          "sentence": "Neun Euro.",
          "translation": "九歐元。",
          "segments": [
            { "text": "Neun", "meaning": "九", "tail": " " },
            { "text": "Euro", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "Nummer neun.",
          "translation": "九號。",
          "segments": [
            { "text": "Nummer", "meaning": "號碼", "tail": " " },
            { "text": "neun", "meaning": "九", "tail": "." }
          ]
        }
      ],
      "usage_note": "九。eu 發「歐伊」的音，所以發音像「弄因」。",
      "image_file": "nine.png"
    },
    {
      "id": "num-10",
      "term_zh": "10",
      "related_terms": [
        {
          "term_target": "zehn",
          "pronunciation": ["/t͡seːn/"],
          "specific_note": "",
          "segments": [{ "text": "zehn", "meaning": "十", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Zehn Euro.",
          "translation": "十歐元。",
          "segments": [
            { "text": "Zehn", "meaning": "十", "tail": " " },
            { "text": "Euro", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "Zähl bis zehn.",
          "translation": "數到十。",
          "segments": [
            { "text": "Zähl", "meaning": "數", "tail": " " },
            { "text": "bis", "meaning": "到", "tail": " " },
            { "text": "zehn", "meaning": "十", "tail": "." }
          ]
        },
        {
          "sentence": "Die Top zehn.",
          "translation": "前十名 (Top 10)。",
          "segments": [
            { "text": "Die", "meaning": "這", "tail": " " },
            { "text": "Top", "meaning": "頂尖", "tail": " " },
            { "text": "zehn", "meaning": "十", "tail": "." }
          ]
        }
      ],
      "usage_note": "十。z 發 ㄘ (ts) 的音。",
      "image_file": "ten.png"
    },
    {
      "id": "num-11",
      "term_zh": "11",
      "related_terms": [
        {
          "term_target": "elf",
          "pronunciation": ["/ɛlf/"],
          "specific_note": "",
          "segments": [{ "text": "elf", "meaning": "十一", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Elf Uhr.",
          "translation": "11點。",
          "segments": [
            { "text": "Elf", "meaning": "十一", "tail": " " },
            { "text": "Uhr", "meaning": "點鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Kapitel elf.",
          "translation": "第11章。",
          "segments": [
            { "text": "Kapitel", "meaning": "章節", "tail": " " },
            { "text": "elf", "meaning": "十一", "tail": "." }
          ]
        },
        {
          "sentence": "Es gibt elf Spieler.",
          "translation": "有11名球員。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "gibt", "meaning": "給(存在有)", "tail": " " },
            { "text": "elf", "meaning": "十一", "tail": " " },
            { "text": "Spieler", "meaning": "球員(複數)", "tail": "." }
          ]
        }
      ],
      "usage_note": "十一。",
      "image_file": "eleven.png"
    },
    {
      "id": "num-12",
      "term_zh": "12",
      "related_terms": [
        {
          "term_target": "zwölf",
          "pronunciation": ["/t͡svœlf/"],
          "specific_note": "",
          "segments": [{ "text": "zwölf", "meaning": "十二", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Zwölf Monate.",
          "translation": "12個月。",
          "segments": [
            { "text": "Zwölf", "meaning": "十二", "tail": " " },
            { "text": "Monate", "meaning": "月(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Es ist zwölf Uhr mittags.",
          "translation": "現在是中午12點。",
          "segments": [
            { "text": "Es", "meaning": "它(時間)", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "zwölf", "meaning": "十二", "tail": " " },
            { "text": "Uhr", "meaning": "點鐘", "tail": " " },
            { "text": "mittags", "meaning": "在中午", "tail": "." }
          ]
        },
        {
          "sentence": "Eine Packung mit zwölf Stück.",
          "translation": "一盒12個。",
          "segments": [
            { "text": "Eine", "meaning": "一", "tail": " " },
            { "text": "Packung", "meaning": "盒/包", "tail": " " },
            { "text": "mit", "meaning": "伴隨", "tail": " " },
            { "text": "zwölf", "meaning": "十二", "tail": " " },
            { "text": "Stück", "meaning": "個/塊", "tail": "." }
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
          "term_target": "fünfzehn",
          "pronunciation": ["/ˈfʏnft͡seːn/"],
          "specific_note": "",
          "segments": [
            { "text": "fünf", "meaning": "五", "tail": "" },
            { "text": "zehn", "meaning": "十", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Fünfzehn Minuten.",
          "translation": "15分鐘。",
          "segments": [
            { "text": "Fünfzehn", "meaning": "十五", "tail": " " },
            { "text": "Minuten", "meaning": "分鐘(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Sie ist fünfzehn.",
          "translation": "她15歲。",
          "segments": [
            { "text": "Sie", "meaning": "她", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "fünfzehn", "meaning": "十五", "tail": "." }
          ]
        },
        {
          "sentence": "Zimmer Nummer fünfzehn.",
          "translation": "15號房。",
          "segments": [
            { "text": "Zimmer", "meaning": "房間", "tail": " " },
            { "text": "Nummer", "meaning": "號碼", "tail": " " },
            { "text": "fünfzehn", "meaning": "十五", "tail": "." }
          ]
        }
      ],
      "usage_note": "德文的十幾，是把個位數放在前面，後面加上 zehn(十)，所以是 fünf-zehn。",
      "image_file": "fifteen.png"
    },
    {
      "id": "num-20",
      "term_zh": "20",
      "related_terms": [
        {
          "term_target": "zwanzig",
          "pronunciation": ["/ˈt͡svant͡sɪç/"],
          "specific_note": "",
          "segments": [{ "text": "zwanzig", "meaning": "二十", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Zwanzig Minuten.",
          "translation": "20分鐘。",
          "segments": [
            { "text": "Zwanzig", "meaning": "二十", "tail": " " },
            { "text": "Minuten", "meaning": "分鐘", "tail": "." }
          ]
        },
        {
          "sentence": "Zwanzig Euro.",
          "translation": "20歐元。",
          "segments": [
            { "text": "Zwanzig", "meaning": "二十", "tail": " " },
            { "text": "Euro", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bin zwanzig Jahre alt.",
          "translation": "我20歲。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "zwanzig", "meaning": "二十", "tail": " " },
            { "text": "Jahre", "meaning": "歲", "tail": " " },
            { "text": "alt", "meaning": "老(歲)", "tail": "." }
          ]
        }
      ],
      "usage_note": "二十。德文的幾十，字尾都會加上 -zig。",
      "image_file": "twenty.png"
    },
    {
      "id": "num-50",
      "term_zh": "50",
      "related_terms": [
        {
          "term_target": "fünfzig",
          "pronunciation": ["/ˈfʏnft͡sɪç/"],
          "specific_note": "",
          "segments": [
            { "text": "fünf", "meaning": "五", "tail": "" },
            { "text": "zig", "meaning": "十", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Fünfzig Prozent.",
          "translation": "50% (百分之五十)。",
          "segments": [
            { "text": "Fünfzig", "meaning": "五十", "tail": " " },
            { "text": "Prozent", "meaning": "百分比", "tail": "." }
          ]
        },
        {
          "sentence": "Fünfzig Leute.",
          "translation": "50個人。",
          "segments": [
            { "text": "Fünfzig", "meaning": "五十", "tail": " " },
            { "text": "Leute", "meaning": "人們", "tail": "." }
          ]
        },
        {
          "sentence": "Das kostet fünfzig Euro.",
          "translation": "這個要50歐元。",
          "segments": [
            { "text": "Das", "meaning": "這個", "tail": " " },
            { "text": "kostet", "meaning": "花費", "tail": " " },
            { "text": "fünfzig", "meaning": "五十", "tail": " " },
            { "text": "Euro", "meaning": "歐元", "tail": "." }
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
          "term_target": "hundert",
          "pronunciation": ["/ˈhʊndɐt/"],
          "specific_note": "",
          "segments": [{ "text": "hundert", "meaning": "百", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Hundert Punkte.",
          "translation": "一百分。",
          "segments": [
            { "text": "Hundert", "meaning": "百", "tail": " " },
            { "text": "Punkte", "meaning": "分(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Hundert Prozent.",
          "translation": "百分之百。",
          "segments": [
            { "text": "Hundert", "meaning": "百", "tail": " " },
            { "text": "Prozent", "meaning": "百分比", "tail": "." }
          ]
        },
        {
          "sentence": "Mehr als hundert.",
          "translation": "超過一百個。",
          "segments": [
            { "text": "Mehr", "meaning": "更多", "tail": " " },
            { "text": "als", "meaning": "比", "tail": " " },
            { "text": "hundert", "meaning": "百", "tail": "." }
          ]
        }
      ],
      "usage_note": "德文通常直接唸 hundert，不用在前面加 ein (一)。",
      "image_file": "hundred.png"
    },
    {
      "id": "num-1000",
      "term_zh": "1000",
      "related_terms": [
        {
          "term_target": "tausend",
          "pronunciation": ["/ˈtaʊ̯zənt/"],
          "specific_note": "",
          "segments": [{ "text": "tausend", "meaning": "千", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Tausend Jahre.",
          "translation": "一千年。",
          "segments": [
            { "text": "Tausend", "meaning": "千", "tail": " " },
            { "text": "Jahre", "meaning": "年(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Tausend Euro.",
          "translation": "一千歐元。",
          "segments": [
            { "text": "Tausend", "meaning": "千", "tail": " " },
            { "text": "Euro", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "Tausend Dank.",
          "translation": "萬分感謝。(直譯：一千個謝謝)",
          "segments": [
            { "text": "Tausend", "meaning": "千", "tail": " " },
            { "text": "Dank", "meaning": "感謝", "tail": "." }
          ]
        }
      ],
      "usage_note": "千。跟一百一樣，直接念 tausend 就可以了。",
      "image_file": "thousand.png"
    },
    {
      "id": "num-10000",
      "term_zh": "10000",
      "related_terms": [
        {
          "term_target": "zehntausend",
          "pronunciation": ["/ˈt͡seːnˌtaʊ̯zənt/"],
          "specific_note": "十個千",
          "segments": [
            { "text": "zehn", "meaning": "十", "tail": "" },
            { "text": "tausend", "meaning": "千", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Zehntausend Euro.",
          "translation": "一萬歐元。",
          "segments": [
            { "text": "Zehntausend", "meaning": "一萬", "tail": " " },
            { "text": "Euro", "meaning": "歐元", "tail": "." }
          ]
        },
        {
          "sentence": "Zehntausend Schritte.",
          "translation": "一萬步。",
          "segments": [
            { "text": "Zehntausend", "meaning": "一萬", "tail": " " },
            { "text": "Schritte", "meaning": "步(複數)", "tail": "." }
          ]
        },
        {
          "sentence": "Über zehntausend Fans.",
          "translation": "超過一萬名粉絲。",
          "segments": [
            { "text": "Über", "meaning": "超過", "tail": " " },
            { "text": "zehntausend", "meaning": "一萬", "tail": " " },
            { "text": "Fans", "meaning": "粉絲", "tail": "." }
          ]
        }
      ],
      "usage_note": "德文沒有「萬」這個單位，一萬就是「十個千 (zehn-tausend)」組合起來。",
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
          "term_target": "Ich bin ～",
          "pronunciation": ["/ɪç bɪn/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin glücklich.",
          "translation": "我很快樂。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "glücklich", "meaning": "快樂的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bin müde.",
          "translation": "我很累。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "müde", "meaning": "累的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bin Student.",
          "translation": "我是學生。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "Student", "meaning": "大學生", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達自己的狀態或身分。注意！德文講職業或身分時，前面不需要加冠詞 (a/an)。",
      "image_file": "i_am.png"
    },
    {
      "id": "g-02",
      "term_zh": "我的名字叫～",
      "related_terms": [
        {
          "term_target": "Mein Name ist ～",
          "pronunciation": ["/maɪ̯n ˈnaːmə ɪst/"],
          "specific_note": "正式介紹",
          "segments": [
            { "text": "Mein", "meaning": "我的", "tail": " " },
            { "text": "Name", "meaning": "名字", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        },
        {
          "term_target": "Ich heiße ～",
          "pronunciation": ["/ɪç ˈhaɪ̯sə/"],
          "specific_note": "口語最常用",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "heiße", "meaning": "叫做", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Mein Name ist John.",
          "translation": "我的名字叫約翰。",
          "segments": [
            { "text": "Mein", "meaning": "我的", "tail": " " },
            { "text": "Name", "meaning": "名字", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "John", "meaning": "約翰", "tail": "." }
          ]
        },
        {
          "sentence": "Ich heiße Mary.",
          "translation": "我叫做瑪麗。(這句比 Mein Name ist 更常聽到)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "heiße", "meaning": "叫做", "tail": " " },
            { "text": "Mary", "meaning": "瑪麗", "tail": "." }
          ]
        },
        {
          "sentence": "Hallo, ich bin Tom.",
          "translation": "哈囉，我是湯姆。(最輕鬆的介紹方式)",
          "segments": [
            { "text": "Hallo", "meaning": "哈囉", "tail": ", " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "Tom", "meaning": "湯姆", "tail": "." }
          ]
        }
      ],
      "usage_note": "自我介紹。除了 Mein Name ist，德國人更習慣直接說 Ich heiße (我叫做...) 或 Ich bin (我是...)。",
      "image_file": "my_name_is.png"
    },
    {
      "id": "g-03",
      "term_zh": "我做～",
      "related_terms": [
        {
          "term_target": "Ich (動詞)",
          "pronunciation": ["/ɪç/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "(動詞)", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich arbeite hier.",
          "translation": "我在這裡工作。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "arbeite", "meaning": "工作", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": "." }
          ]
        },
        {
          "sentence": "Ich spiele Tennis.",
          "translation": "我打網球。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "spiele", "meaning": "玩/打", "tail": " " },
            { "text": "Tennis", "meaning": "網球", "tail": "." }
          ]
        },
        {
          "sentence": "Ich liebe Musik.",
          "translation": "我熱愛音樂。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "liebe", "meaning": "愛", "tail": " " },
            { "text": "Musik", "meaning": "音樂", "tail": "." }
          ]
        }
      ],
      "usage_note": "描述一般的動作或習慣。注意搭配 ich (我) 時，動詞字尾通常會變成 e。",
      "image_file": "i_do.png"
    },
    {
      "id": "g-04",
      "term_zh": "我正在做～",
      "related_terms": [
        {
          "term_target": "Ich (動詞) gerade",
          "pronunciation": ["/ɪç ... ɡəˈʁaːdə/"],
          "specific_note": "正在進行",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "(動詞)", "meaning": "做...", "tail": " " },
            { "text": "gerade", "meaning": "正好/正在", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich esse gerade.",
          "translation": "我正在吃。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "esse", "meaning": "吃", "tail": " " },
            { "text": "gerade", "meaning": "正在", "tail": "." }
          ]
        },
        {
          "sentence": "Ich arbeite gerade.",
          "translation": "我現在正在工作。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "arbeite", "meaning": "工作", "tail": " " },
            { "text": "gerade", "meaning": "正在", "tail": "." }
          ]
        },
        {
          "sentence": "Ich warte gerade auf dich.",
          "translation": "我正在等你。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "warte", "meaning": "等", "tail": " " },
            { "text": "gerade", "meaning": "正在", "tail": " " },
            { "text": "auf", "meaning": "為", "tail": " " },
            { "text": "dich", "meaning": "你", "tail": "." }
          ]
        }
      ],
      "usage_note": "這點非常重要：德文沒有 ing 進行式！要表達「正在做某事」，只要在一般句子加上副詞 gerade 就可以了。",
      "image_file": "ing.png"
    },
    {
      "id": "g-05",
      "term_zh": "我能夠～",
      "related_terms": [
        {
          "term_target": "Ich kann ～",
          "pronunciation": ["/ɪç kan/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "kann", "meaning": "能夠/會", "tail": " " },
            { "text": "～", "meaning": "(動詞放句尾)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich kann schwimmen.",
          "translation": "我會游泳。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "kann", "meaning": "會", "tail": " " },
            { "text": "schwimmen", "meaning": "游泳", "tail": "." }
          ]
        },
        {
          "sentence": "Ich kann Deutsch sprechen.",
          "translation": "我會說德文。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "kann", "meaning": "會", "tail": " " },
            { "text": "Deutsch", "meaning": "德文", "tail": " " },
            { "text": "sprechen", "meaning": "說", "tail": "." }
          ]
        },
        {
          "sentence": "Ich kann dir helfen.",
          "translation": "我可以幫你。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "kann", "meaning": "可以", "tail": " " },
            { "text": "dir", "meaning": "你(與格)", "tail": " " },
            { "text": "helfen", "meaning": "幫忙", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達能力或可能性。注意！用了 kann 之後，真正的動作 (如游泳、說話) 必須被踢到句子的「最後面」。",
      "image_file": "can.png"
    },
    {
      "id": "g-06",
      "term_zh": "我喜歡做～",
      "related_terms": [
        {
          "term_target": "Ich (動詞) gerne",
          "pronunciation": ["/ɪç ... ˈɡɛʁnə/"],
          "specific_note": "興趣",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "(動詞)", "meaning": "做...", "tail": " " },
            { "text": "gerne", "meaning": "樂意地", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich lese gerne.",
          "translation": "我喜歡閱讀。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "lese", "meaning": "閱讀", "tail": " " },
            { "text": "gerne", "meaning": "喜歡", "tail": "." }
          ]
        },
        {
          "sentence": "Ich reise gerne.",
          "translation": "我喜歡旅行。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "reise", "meaning": "旅行", "tail": " " },
            { "text": "gerne", "meaning": "喜歡", "tail": "." }
          ]
        },
        {
          "sentence": "Ich esse gerne Pizza.",
          "translation": "我喜歡吃披薩。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "esse", "meaning": "吃", "tail": " " },
            { "text": "gerne", "meaning": "喜歡", "tail": " " },
            { "text": "Pizza", "meaning": "披薩", "tail": "." }
          ]
        }
      ],
      "usage_note": "這跟英文完全不一樣！德國人不會用動詞 like，而是直接在動詞後面加上副詞 gerne (樂意地) 來表達喜歡做某件事。",
      "image_file": "like_ing.png"
    },
    {
      "id": "g-07",
      "term_zh": "我曾經～",
      "related_terms": [
        {
          "term_target": "Ich war ～",
          "pronunciation": ["/ɪç vaːɐ̯/"],
          "specific_note": "過去狀態",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "war", "meaning": "是/在(過去式)", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich war Student.",
          "translation": "我曾經是學生。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "war", "meaning": "是", "tail": " " },
            { "text": "Student", "meaning": "大學生", "tail": "." }
          ]
        },
        {
          "sentence": "Ich war gestern sehr beschäftigt.",
          "translation": "我昨天很忙。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "war", "meaning": "是", "tail": " " },
            { "text": "gestern", "meaning": "昨天", "tail": " " },
            { "text": "sehr", "meaning": "非常", "tail": " " },
            { "text": "beschäftigt", "meaning": "忙碌的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich war zu Hause.",
          "translation": "我當時在家。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "war", "meaning": "在", "tail": " " },
            { "text": "zu", "meaning": "在", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": "." }
          ]
        }
      ],
      "usage_note": "用來表達過去的身分、地點或狀態。",
      "image_file": "i_was.png"
    },
    {
      "id": "g-08",
      "term_zh": "我做過～ (過去式)",
      "related_terms": [
        {
          "term_target": "Ich habe (過去分詞)",
          "pronunciation": ["/ɪç ˈhaːbə/"],
          "specific_note": "完成式(口語常用)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "(過去分詞)", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich habe gestern gearbeitet.",
          "translation": "我昨天工作了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "gestern", "meaning": "昨天", "tail": " " },
            { "text": "gearbeitet", "meaning": "工作(過去分詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe einen Film gesehen.",
          "translation": "我看了一部電影。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "einen", "meaning": "一部", "tail": " " },
            { "text": "Film", "meaning": "電影", "tail": " " },
            { "text": "gesehen", "meaning": "看(過去分詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe Basketball gespielt.",
          "translation": "我打了籃球。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "Basketball", "meaning": "籃球", "tail": " " },
            { "text": "gespielt", "meaning": "打(過去分詞)", "tail": "." }
          ]
        }
      ],
      "usage_note": "在日常口語中，德國人表達過去的事情，90%都會用「現在完成式 (haben + 過去分詞)」，而不是單純的過去式。記得過去分詞要丟到句尾！",
      "image_file": "i_did.png"
    },
    {
      "id": "g-09",
      "term_zh": "我已經做過～",
      "related_terms": [
        {
          "term_target": "Ich habe schon (過去分詞)",
          "pronunciation": ["/ɪç ˈhaːbə ʃoːn/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "(過去分詞)", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich habe schon fertig.",
          "translation": "我已經完成了。(這句是口語極常用的破例用法)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "fertig", "meaning": "完成", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe meine Schlüssel verloren.",
          "translation": "我把鑰匙弄丟了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "meine", "meaning": "我的", "tail": " " },
            { "text": "Schlüssel", "meaning": "鑰匙", "tail": " " },
            { "text": "verloren", "meaning": "遺失(過去分詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe den Film schon gesehen.",
          "translation": "我已經看過那部電影了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "den", "meaning": "那部", "tail": " " },
            { "text": "Film", "meaning": "電影", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "gesehen", "meaning": "看過", "tail": "." }
          ]
        }
      ],
      "usage_note": "加上副詞 schon (已經)，能更明確表達「動作已經做完了」。",
      "image_file": "i_have_done.png"
    },
    {
      "id": "g-10",
      "term_zh": "我曾去過～",
      "related_terms": [
        {
          "term_target": "Ich war schon mal in/auf ～",
          "pronunciation": ["/ɪç vaːɐ̯ ʃoːn maːl ɪn/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "war", "meaning": "在", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "mal", "meaning": "一次", "tail": " " },
            { "text": "in", "meaning": "在...", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich war schon mal in Japan.",
          "translation": "我曾經去過日本。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "war", "meaning": "在", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "mal", "meaning": "一次", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "Japan", "meaning": "日本", "tail": "." }
          ]
        },
        {
          "sentence": "Ich war schon mal auf dem Taipei 101.",
          "translation": "我去過台北101。(在建築物上面要用 auf)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "war", "meaning": "在", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "mal", "meaning": "一次", "tail": " " },
            { "text": "auf", "meaning": "在...上", "tail": " " },
            { "text": "dem", "meaning": "這", "tail": " " },
            { "text": "Taipei 101", "meaning": "台北101", "tail": "." }
          ]
        },
        {
          "sentence": "Ich war schon zweimal dort.",
          "translation": "我曾經去過那裡兩次。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "war", "meaning": "在", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "zweimal", "meaning": "兩次", "tail": " " },
            { "text": "dort", "meaning": "那裡", "tail": "." }
          ]
        }
      ],
      "usage_note": "德國人表達去過某地，最常用「我曾經在... (Ich war schon mal in...)」，而不是像英文用 have been to。",
      "image_file": "have_been_to.png"
    },
    {
      "id": "g-11",
      "term_zh": "我打算 / 將會～",
      "related_terms": [
        {
          "term_target": "Ich werde ～",
          "pronunciation": ["/ɪç ˈveːɐ̯də/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "werde", "meaning": "將會", "tail": " " },
            { "text": "～", "meaning": "(動詞放句尾)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich werde gehen.",
          "translation": "我將要離開(去)。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "werde", "meaning": "將會", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": "." }
          ]
        },
        {
          "sentence": "Ich werde dich anrufen.",
          "translation": "我會打電話給你。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "werde", "meaning": "將會", "tail": " " },
            { "text": "dich", "meaning": "你", "tail": " " },
            { "text": "anrufen", "meaning": "打電話", "tail": "." }
          ]
        },
        {
          "sentence": "Ich werde mein Bestes tun.",
          "translation": "我會盡全力的。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "werde", "meaning": "將會", "tail": " " },
            { "text": "mein", "meaning": "我的", "tail": " " },
            { "text": "Bestes", "meaning": "最好", "tail": " " },
            { "text": "tun", "meaning": "做", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達未來的計畫。跟 kann 一樣，用了 werde 之後，原本真正的動詞也要被踢到句子的最後面。",
      "image_file": "i_will.png"
    },
    {
      "id": "g-12",
      "term_zh": "你是～嗎？",
      "related_terms": [
        {
          "term_target": "Bist du ～ ?",
          "pronunciation": ["/bɪst du/"],
          "specific_note": "",
          "segments": [
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Bist du bereit?",
          "translation": "準備好了嗎？",
          "segments": [
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "bereit", "meaning": "準備好的", "tail": "?" }
          ]
        },
        {
          "sentence": "Bist du müde?",
          "translation": "你累了嗎？",
          "segments": [
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "müde", "meaning": "累的", "tail": "?" }
          ]
        },
        {
          "sentence": "Bist du Student?",
          "translation": "你是學生嗎？",
          "segments": [
            { "text": "Bist", "meaning": "是", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "Student", "meaning": "大學生", "tail": "?" }
          ]
        }
      ],
      "usage_note": "對朋友或平輩詢問狀態。如果對長輩或不熟的人，請改用 Sind Sie...?",
      "image_file": "are_you.png"
    },
    {
      "id": "g-13",
      "term_zh": "你在做～嗎？",
      "related_terms": [
        {
          "term_target": "(動詞)st du ～ ?",
          "pronunciation": ["/...st du/"],
          "specific_note": "把動詞移到最前面",
          "segments": [
            { "text": "(動詞)st", "meaning": "做...", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Isst du scharf?",
          "translation": "你吃辣嗎？",
          "segments": [
            { "text": "Isst", "meaning": "吃", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "scharf", "meaning": "辣的", "tail": "?" }
          ]
        },
        {
          "sentence": "Magst du Musik?",
          "translation": "你喜歡音樂嗎？",
          "segments": [
            { "text": "Magst", "meaning": "喜歡", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "Musik", "meaning": "音樂", "tail": "?" }
          ]
        },
        {
          "sentence": "Verstehst du?",
          "translation": "你懂嗎？",
          "segments": [
            { "text": "Verstehst", "meaning": "了解", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        }
      ],
      "usage_note": "德文沒有 Do you，問問題非常簡單粗暴，直接把動詞搬到句子最前面就可以了！搭配 du 時，動詞字尾通常要加 st。",
      "image_file": "do_you.png"
    },
    {
      "id": "g-14",
      "term_zh": "你曾經～嗎？",
      "related_terms": [
        {
          "term_target": "Hast du schon mal (過去分詞) ?",
          "pronunciation": ["/hast du ʃoːn maːl/"],
          "specific_note": "",
          "segments": [
            { "text": "Hast", "meaning": "(助動詞)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "mal", "meaning": "一次", "tail": " " },
            { "text": "(過去分詞)", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Hast du schon mal Schnee gesehen?",
          "translation": "你曾經看過雪嗎？",
          "segments": [
            { "text": "Hast", "meaning": "(助動詞)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "mal", "meaning": "一次", "tail": " " },
            { "text": "Schnee", "meaning": "雪", "tail": " " },
            { "text": "gesehen", "meaning": "看過(過去分詞)", "tail": "?" }
          ]
        },
        {
          "sentence": "Warst du schon mal in Taiwan?",
          "translation": "你曾經去過台灣嗎？(去過某地通常用 Warst 取代 Hast)",
          "segments": [
            { "text": "Warst", "meaning": "是/在(過去式)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "mal", "meaning": "一次", "tail": " " },
            { "text": "in", "meaning": "在", "tail": " " },
            { "text": "Taiwan", "meaning": "台灣", "tail": "?" }
          ]
        },
        {
          "sentence": "Hast du schon mal Stinktofu gegessen?",
          "translation": "你曾經吃過臭豆腐嗎？",
          "segments": [
            { "text": "Hast", "meaning": "(助動詞)", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "schon", "meaning": "已經", "tail": " " },
            { "text": "mal", "meaning": "一次", "tail": " " },
            { "text": "Stinktofu", "meaning": "臭豆腐", "tail": " " },
            { "text": "gegessen", "meaning": "吃過(過去分詞)", "tail": "?" }
          ]
        }
      ],
      "usage_note": "這就是德文版的 Have you ever。schon mal (已經一次) 是表達「曾經」最道地的口語說法。",
      "image_file": "have_you_ever.png"
    },
    {
      "id": "g-15",
      "term_zh": "你何時做（某事）？",
      "related_terms": [
        {
          "term_target": "Wann (動詞)st du ～ ?",
          "pronunciation": ["/van ...st du/"],
          "specific_note": "",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "(動詞)st", "meaning": "做...", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wann schläfst du?",
          "translation": "你何時睡覺？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "schläfst", "meaning": "睡覺", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Wann fängst du an zu arbeiten?",
          "translation": "你何時開始工作？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "fängst", "meaning": "抓", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "an", "meaning": "起(可分動詞)", "tail": " " },
            { "text": "zu", "meaning": "去", "tail": " " },
            { "text": "arbeiten", "meaning": "工作", "tail": "?" }
          ]
        },
        {
          "sentence": "Wann machst du Sport?",
          "translation": "你何時運動？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "machst", "meaning": "做", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "Sport", "meaning": "運動", "tail": "?" }
          ]
        }
      ],
      "usage_note": "詢問時間。文法結構：Wann + 動詞 + 主詞。",
      "image_file": "when_do_you.png"
    },
    {
      "id": "g-16",
      "term_zh": "你什麼時候去（某地）？",
      "related_terms": [
        {
          "term_target": "Wann gehst du ～ ?",
          "pronunciation": ["/van ɡeːst du/"],
          "specific_note": "",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "gehst", "meaning": "去/走", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wann gehst du zur Schule?",
          "translation": "你何時去學校？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "gehst", "meaning": "去", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "zur", "meaning": "往", "tail": " " },
            { "text": "Schule", "meaning": "學校", "tail": "?" }
          ]
        },
        {
          "sentence": "Wann gehst du zur Arbeit?",
          "translation": "你何時去工作(上班)？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "gehst", "meaning": "去", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "zur", "meaning": "往", "tail": " " },
            { "text": "Arbeit", "meaning": "工作", "tail": "?" }
          ]
        },
        {
          "sentence": "Wann gehst du nach Hause?",
          "translation": "你何時回家？",
          "segments": [
            { "text": "Wann", "meaning": "何時", "tail": " " },
            { "text": "gehst", "meaning": "走", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "nach", "meaning": "往", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": "?" }
          ]
        }
      ],
      "usage_note": "詢問前往某地的時間。",
      "image_file": "when_go_to.png"
    },
    {
      "id": "g-17",
      "term_zh": "你在哪裡做（某事）？",
      "related_terms": [
        {
          "term_target": "Wo (動詞)st du ～ ?",
          "pronunciation": ["/voː ...st du/"],
          "specific_note": "",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "(動詞)st", "meaning": "做...", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wo wohnst du?",
          "translation": "你住哪裡？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "wohnst", "meaning": "住", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Wo arbeitest du?",
          "translation": "你在哪裡工作？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "arbeitest", "meaning": "工作", "tail": " " },
            { "text": "du", "meaning": "你", "tail": "?" }
          ]
        },
        {
          "sentence": "Wo kaufst du ein?",
          "translation": "你在哪裡買東西 (採購)？",
          "segments": [
            { "text": "Wo", "meaning": "哪裡", "tail": " " },
            { "text": "kaufst", "meaning": "買", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "ein", "meaning": "入內(可分動詞字尾)", "tail": "?" }
          ]
        }
      ],
      "usage_note": "詢問地點。文法結構：Wo + 動詞 + 主詞。",
      "image_file": "where_do_you.png"
    },
    {
      "id": "g-18",
      "term_zh": "你如何做（某事）？",
      "related_terms": [
        {
          "term_target": "Wie (動詞)st du ～ ?",
          "pronunciation": ["/viː ...st du/"],
          "specific_note": "",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "(動詞)st", "meaning": "做...", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wie kochst du das?",
          "translation": "你怎麼煮這個？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "kochst", "meaning": "煮", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie schreibt man deinen Namen?",
          "translation": "你的名字怎麼拼 (寫)？(德國人常把主詞替換成 man『人們』來表達客觀方法)",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "schreibt", "meaning": "寫", "tail": " " },
            { "text": "man", "meaning": "人們", "tail": " " },
            { "text": "deinen", "meaning": "你的", "tail": " " },
            { "text": "Namen", "meaning": "名字", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie fühlst du dich?",
          "translation": "你覺得如何？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "fühlst", "meaning": "感覺", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "dich", "meaning": "你自己", "tail": "?" }
          ]
        }
      ],
      "usage_note": "詢問方式。",
      "image_file": "how_do_you.png"
    },
    {
      "id": "g-19",
      "term_zh": "你怎麼去（某地）？",
      "related_terms": [
        {
          "term_target": "Wie kommst du ～ ?",
          "pronunciation": ["/viː kɔmst du/"],
          "specific_note": "",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "kommst", "meaning": "來到", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Wie kommst du zur Schule?",
          "translation": "你怎麼去學校？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "kommst", "meaning": "來", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "zur", "meaning": "往", "tail": " " },
            { "text": "Schule", "meaning": "學校", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie kommst du zum Flughafen?",
          "translation": "你怎麼去機場？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "kommst", "meaning": "來", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "zum", "meaning": "往", "tail": " " },
            { "text": "Flughafen", "meaning": "機場", "tail": "?" }
          ]
        },
        {
          "sentence": "Wie kommst du zur Arbeit?",
          "translation": "你怎麼去上班？",
          "segments": [
            { "text": "Wie", "meaning": "如何", "tail": " " },
            { "text": "kommst", "meaning": "來", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "zur", "meaning": "往", "tail": " " },
            { "text": "Arbeit", "meaning": "工作", "tail": "?" }
          ]
        }
      ],
      "usage_note": "詢問交通方式。英文通常說 How do you go...，但在德文中，問別人「怎麼抵達那裡」，最道地自然的動詞是 kommen (來) 而不是 gehen (去)。",
      "image_file": "how_go_to.png"
    },
    {
      "id": "g-20",
      "term_zh": "我不是～",
      "related_terms": [
        {
          "term_target": "Ich bin nicht / kein ～",
          "pronunciation": ["/ɪç bɪn nɪçt / kaɪ̯n/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " / " },
            { "text": "kein", "meaning": "沒有(否定名詞)", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich bin nicht müde.",
          "translation": "我不累。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "müde", "meaning": "累的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bin nicht bereit.",
          "translation": "我還沒準備好。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "bereit", "meaning": "準備好的", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bin kein Arzt.",
          "translation": "我不是醫生。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "kein", "meaning": "沒有(非)", "tail": " " },
            { "text": "Arzt", "meaning": "醫生", "tail": "." }
          ]
        }
      ],
      "usage_note": "否定狀態。注意！如果是形容詞，用 nicht 否定；如果是名詞 (如醫生)，則必須用 kein 來否定。",
      "image_file": "i_am_not.png"
    },
    {
      "id": "g-21",
      "term_zh": "我不做～",
      "related_terms": [
        {
          "term_target": "Ich (動詞) nicht",
          "pronunciation": ["/ɪç ... nɪçt/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "(動詞)", "meaning": "做...", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich rauche nicht.",
          "translation": "我不抽菸。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "rauche", "meaning": "抽菸", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Ich weiß nicht.",
          "translation": "我不知道。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "weiß", "meaning": "知道", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Ich verstehe nicht.",
          "translation": "我不懂。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "verstehe", "meaning": "了解", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        }
      ],
      "usage_note": "德文沒有 don't，只要把 nicht 放在動詞的後面，就可以形成否定句了。",
      "image_file": "i_dont.png"
    },
    {
      "id": "g-22",
      "term_zh": "我不能～",
      "related_terms": [
        {
          "term_target": "Ich kann nicht ～",
          "pronunciation": ["/ɪç kan nɪçt/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "kann", "meaning": "能", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich kann nicht schwimmen.",
          "translation": "我不會(不能)游泳。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "kann", "meaning": "能", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "schwimmen", "meaning": "游泳", "tail": "." }
          ]
        },
        {
          "sentence": "Ich kann dich nicht hören.",
          "translation": "我聽不到你說話。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "kann", "meaning": "能", "tail": " " },
            { "text": "dich", "meaning": "你", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "hören", "meaning": "聽見", "tail": "." }
          ]
        },
        {
          "sentence": "Ich kann heute nicht kommen.",
          "translation": "我今天不能來(赴約)。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "kann", "meaning": "能", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "kommen", "meaning": "來", "tail": "." }
          ]
        }
      ],
      "usage_note": "否定能力。和 kann 一樣，動詞要被踢到句子的最尾端。",
      "image_file": "i_cant.png"
    },
    {
      "id": "g-23",
      "term_zh": "我未曾～",
      "related_terms": [
        {
          "term_target": "Ich habe noch nie ～",
          "pronunciation": ["/ɪç ˈhaːbə nɔx niː/"],
          "specific_note": "加上過去分詞",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": " " },
            { "text": "noch", "meaning": "還", "tail": " " },
            { "text": "nie", "meaning": "從不", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich habe das noch nie gegessen.",
          "translation": "我從沒吃過這個。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "noch", "meaning": "還", "tail": " " },
            { "text": "nie", "meaning": "從不", "tail": " " },
            { "text": "gegessen", "meaning": "吃過(過去分詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Ich war noch nie dort.",
          "translation": "我從沒去過那裡。(表達未曾去過，直接用 war 即可)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "war", "meaning": "是/在(過去式)", "tail": " " },
            { "text": "noch", "meaning": "還", "tail": " " },
            { "text": "nie", "meaning": "從不", "tail": " " },
            { "text": "dort", "meaning": "那裡", "tail": "." }
          ]
        },
        {
          "sentence": "Ich habe das noch nie gesehen.",
          "translation": "我從沒看過那個。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "habe", "meaning": "(助動詞)", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": " " },
            { "text": "noch", "meaning": "還", "tail": " " },
            { "text": "nie", "meaning": "從不", "tail": " " },
            { "text": "gesehen", "meaning": "看過(過去分詞)", "tail": "." }
          ]
        }
      ],
      "usage_note": "noch nie (至今從未) 是用來表達「沒有經驗」最道地的說法。",
      "image_file": "i_have_never.png"
    },
    {
      "id": "g-24",
      "term_zh": "我不必～",
      "related_terms": [
        {
          "term_target": "Ich muss nicht ～",
          "pronunciation": ["/ɪç mʊs nɪçt/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich muss nicht gehen.",
          "translation": "我不必走。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": "." }
          ]
        },
        {
          "sentence": "Ich muss heute nicht arbeiten.",
          "translation": "我今天不必工作。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "heute", "meaning": "今天", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "arbeiten", "meaning": "工作", "tail": "." }
          ]
        },
        {
          "sentence": "Ich muss nicht bezahlen.",
          "translation": "我不必付錢。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "bezahlen", "meaning": "支付", "tail": "." }
          ]
        }
      ],
      "usage_note": "極易搞混！英文的 must not 是「禁止」，但在德文，muss nicht 是「沒有必要 (don't have to)」。如果要表達禁止，要說 darf nicht。",
      "image_file": "i_dont_have_to.png"
    },
    {
      "id": "g-25",
      "term_zh": "如果～的話，就～",
      "related_terms": [
        {
          "term_target": "Wenn ..., ...",
          "pronunciation": ["/vɛn/"],
          "specific_note": "",
          "segments": [{ "text": "Wenn", "meaning": "如果/當", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wenn du magst, nimm es.",
          "translation": "如果你喜歡，就拿去吧。",
          "segments": [
            { "text": "Wenn", "meaning": "如果", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "magst", "meaning": "喜歡", "tail": ", " },
            { "text": "nimm", "meaning": "拿", "tail": " " },
            { "text": "es", "meaning": "它", "tail": "." }
          ]
        },
        {
          "sentence": "Wenn es regnet, bleibe ich zu Hause.",
          "translation": "如果下雨，我就待在家。",
          "segments": [
            { "text": "Wenn", "meaning": "如果", "tail": " " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "regnet", "meaning": "下雨", "tail": ", " },
            { "text": "bleibe", "meaning": "停留", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "zu", "meaning": "在", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": "." }
          ]
        },
        {
          "sentence": "Wenn du müde bist, schlaf.",
          "translation": "如果你累了，就睡覺吧。",
          "segments": [
            { "text": "Wenn", "meaning": "如果", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "müde", "meaning": "累的", "tail": " " },
            { "text": "bist", "meaning": "是", "tail": ", " },
            { "text": "schlaf", "meaning": "睡覺(祈使句)", "tail": "." }
          ]
        }
      ],
      "usage_note": "大魔王文法！用了 Wenn 的句子，動詞會跑到逗號前；而後半段的句子，動詞也要緊跟在逗號後 (動詞-逗號-動詞)。",
      "image_file": "if.png"
    },
    {
      "id": "g-26",
      "term_zh": "當～時，就～",
      "related_terms": [
        {
          "term_target": "Wenn ..., ...",
          "pronunciation": ["/vɛn/"],
          "specific_note": "",
          "segments": [{ "text": "Wenn", "meaning": "當...時", "tail": "" }]
        }
      ],
      "examples": [
        {
          "sentence": "Wenn ich esse, bin ich glücklich.",
          "translation": "當我吃東西時，我很開心。",
          "segments": [
            { "text": "Wenn", "meaning": "當...時", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "esse", "meaning": "吃", "tail": ", " },
            { "text": "bin", "meaning": "是", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "glücklich", "meaning": "快樂的", "tail": "." }
          ]
        },
        {
          "sentence": "Wenn du ankommst, ruf mich an.",
          "translation": "當你到達時，打電話給我。",
          "segments": [
            { "text": "Wenn", "meaning": "當...時", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "ankommst", "meaning": "抵達", "tail": ", " },
            { "text": "ruf", "meaning": "打電話", "tail": " " },
            { "text": "mich", "meaning": "我", "tail": " " },
            { "text": "an", "meaning": "(可分動詞)", "tail": "." }
          ]
        },
        {
          "sentence": "Wenn ich Zeit habe, lese ich.",
          "translation": "當我有空時，我就會看書。",
          "segments": [
            { "text": "Wenn", "meaning": "當...時", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "Zeit", "meaning": "時間", "tail": " " },
            { "text": "habe", "meaning": "有", "tail": ", " },
            { "text": "lese", "meaning": "閱讀", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": "." }
          ]
        }
      ],
      "usage_note": "在德文裡，現在與未來的「如果」和「當...時」是同一個字，都是 Wenn！",
      "image_file": "when_condition.png"
    },
    {
      "id": "g-27",
      "term_zh": "請你～",
      "related_terms": [
        {
          "term_target": "Kannst du / Können Sie ～ ?",
          "pronunciation": ["/kanst du / ˈkœnən ziː/"],
          "specific_note": "",
          "segments": [
            { "text": "Kannst", "meaning": "能", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "?" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kannst du mir helfen?",
          "translation": "你能幫我嗎？",
          "segments": [
            { "text": "Kannst", "meaning": "能", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "helfen", "meaning": "幫忙", "tail": "?" }
          ]
        },
        {
          "sentence": "Können Sie die Tür aufmachen?",
          "translation": "您可以開門嗎？(對陌生人或長輩用 Sie)",
          "segments": [
            { "text": "Können", "meaning": "能", "tail": " " },
            { "text": "Sie", "meaning": "您", "tail": " " },
            { "text": "die", "meaning": "這", "tail": " " },
            { "text": "Tür", "meaning": "門", "tail": " " },
            { "text": "aufmachen", "meaning": "打開", "tail": "?" }
          ]
        },
        {
          "sentence": "Kannst du einen Moment warten?",
          "translation": "你可以等一下嗎？",
          "segments": [
            { "text": "Kannst", "meaning": "能", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "einen", "meaning": "一個", "tail": " " },
            { "text": "Moment", "meaning": "片刻", "tail": " " },
            { "text": "warten", "meaning": "等", "tail": "?" }
          ]
        }
      ],
      "usage_note": "委婉的請求。",
      "image_file": "can_you.png"
    },
    {
      "id": "g-28",
      "term_zh": "我們來做～吧！",
      "related_terms": [
        {
          "term_target": "Lass uns ～",
          "pronunciation": ["/las ʊns/"],
          "specific_note": "",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "～", "meaning": "...", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Lass uns gehen.",
          "translation": "我們走吧。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": "." }
          ]
        },
        {
          "sentence": "Lass uns essen.",
          "translation": "我們吃吧。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "essen", "meaning": "吃", "tail": "." }
          ]
        },
        {
          "sentence": "Lass uns eine Pause machen.",
          "translation": "我們休息一下吧。",
          "segments": [
            { "text": "Lass", "meaning": "讓", "tail": " " },
            { "text": "uns", "meaning": "我們", "tail": " " },
            { "text": "eine", "meaning": "一個", "tail": " " },
            { "text": "Pause", "meaning": "休息", "tail": " " },
            { "text": "machen", "meaning": "做", "tail": "." }
          ]
        }
      ],
      "usage_note": "和英文的 Let's 邏輯完全一樣，非常實用。",
      "image_file": "lets.png"
    },
    {
      "id": "g-29",
      "term_zh": "我認為～",
      "related_terms": [
        {
          "term_target": "Ich finde / glaube ...",
          "pronunciation": ["/ɪç ˈfɪndə / ˈɡlaʊ̯bə/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "finde", "meaning": "覺得", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich finde das gut.",
          "translation": "我覺得這個很好。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "finde", "meaning": "覺得", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "gut", "meaning": "好", "tail": "." }
          ]
        },
        {
          "sentence": "Ich glaube, du hast recht.",
          "translation": "我認為你是對的。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "glaube", "meaning": "相信/認為", "tail": ", " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "hast", "meaning": "有", "tail": " " },
            { "text": "recht", "meaning": "道理(對的)", "tail": "." }
          ]
        },
        {
          "sentence": "Das finde ich auch.",
          "translation": "我也這麼認為 / 我有同感。",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "finde", "meaning": "覺得", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "auch", "meaning": "也", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達主觀看法。德國人比起用 denken (大腦運作的想)，更常用 finden (覺得) 或 glauben (相信)。",
      "image_file": "i_think.png"
    },
    {
      "id": "g-30",
      "term_zh": "我想做～",
      "related_terms": [
        {
          "term_target": "Ich möchte ～",
          "pronunciation": ["/ɪç ˈmœçtə/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "～", "meaning": "(動詞放句尾)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich möchte gehen.",
          "translation": "我想離開。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": "." }
          ]
        },
        {
          "sentence": "Ich möchte das kaufen.",
          "translation": "我想買這個。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "kaufen", "meaning": "買", "tail": "." }
          ]
        },
        {
          "sentence": "Ich möchte einen Film schauen.",
          "translation": "我想看一部電影。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "möchte", "meaning": "想要", "tail": " " },
            { "text": "einen", "meaning": "一部", "tail": " " },
            { "text": "Film", "meaning": "電影", "tail": " " },
            { "text": "schauen", "meaning": "看", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達意願與慾望。這是比 ich will 更有禮貌的說法。",
      "image_file": "want_to.png"
    },
    {
      "id": "g-31",
      "term_zh": "我必須做～",
      "related_terms": [
        {
          "term_target": "Ich muss ～",
          "pronunciation": ["/ɪç mʊs/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "～", "meaning": "(動詞放句尾)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich muss arbeiten.",
          "translation": "我必須工作。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "arbeiten", "meaning": "工作", "tail": "." }
          ]
        },
        {
          "sentence": "Ich muss jetzt gehen.",
          "translation": "我現在得走了。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "jetzt", "meaning": "現在", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": "." }
          ]
        },
        {
          "sentence": "Ich muss lernen.",
          "translation": "我必須讀書。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "muss", "meaning": "必須", "tail": " " },
            { "text": "lernen", "meaning": "學習", "tail": "." }
          ]
        }
      ],
      "usage_note": "表示義務或不可避免的情況。",
      "image_file": "i_have_to.png"
    },
    {
      "id": "g-32",
      "term_zh": "做某事是怎樣的",
      "related_terms": [
        {
          "term_target": "Es ist ..., zu ...",
          "pronunciation": ["/ɛs ɪst ... t͡su/"],
          "specific_note": "",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "...", "meaning": "...", "tail": ", " },
            { "text": "zu", "meaning": "去", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Es ist schön, dich zu sehen.",
          "translation": "見到你真好。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schön", "meaning": "美好的", "tail": ", " },
            { "text": "dich", "meaning": "你", "tail": " " },
            { "text": "zu", "meaning": "去", "tail": " " },
            { "text": "sehen", "meaning": "看見", "tail": "." }
          ]
        },
        {
          "sentence": "Es ist schwer, das zu sagen.",
          "translation": "這很難說。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schwer", "meaning": "困難的", "tail": ", " },
            { "text": "das", "meaning": "這件事", "tail": " " },
            { "text": "zu", "meaning": "去", "tail": " " },
            { "text": "sagen", "meaning": "說", "tail": "." }
          ]
        },
        {
          "sentence": "Es ist wichtig, zu lernen.",
          "translation": "學習是很重要的。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "wichtig", "meaning": "重要的", "tail": ", " },
            { "text": "zu", "meaning": "去", "tail": " " },
            { "text": "lernen", "meaning": "學習", "tail": "." }
          ]
        }
      ],
      "usage_note": "描述某個動作的屬性。德文習慣在 zu 之前加個逗號隔開句子。",
      "image_file": "it_is_to.png"
    },
    {
      "id": "g-33",
      "term_zh": "你可以幫我…嗎？",
      "related_terms": [
        {
          "term_target": "Kannst du mir helfen, ... ?",
          "pronunciation": ["/kanst du miːɐ̯ ˈhɛlfən/"],
          "specific_note": "",
          "segments": [
            { "text": "Kannst", "meaning": "能", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "helfen", "meaning": "幫忙", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Kannst du mir beim Putzen helfen?",
          "translation": "你可以幫我打掃嗎？",
          "segments": [
            { "text": "Kannst", "meaning": "能", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "beim", "meaning": "在(做...時)", "tail": " " },
            { "text": "Putzen", "meaning": "打掃", "tail": " " },
            { "text": "helfen", "meaning": "幫忙", "tail": "?" }
          ]
        },
        {
          "sentence": "Kannst du mir dabei helfen?",
          "translation": "你可以幫我弄這個嗎？(這句日常超級常用)",
          "segments": [
            { "text": "Kannst", "meaning": "能", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "dabei", "meaning": "在那件事上", "tail": " " },
            { "text": "helfen", "meaning": "幫忙", "tail": "?" }
          ]
        },
        {
          "sentence": "Kannst du mir helfen, es zu finden?",
          "translation": "你可以幫我找它嗎？",
          "segments": [
            { "text": "Kannst", "meaning": "能", "tail": " " },
            { "text": "du", "meaning": "你", "tail": " " },
            { "text": "mir", "meaning": "我", "tail": " " },
            { "text": "helfen", "meaning": "幫忙", "tail": ", " },
            { "text": "es", "meaning": "它", "tail": " " },
            { "text": "zu", "meaning": "去", "tail": " " },
            { "text": "finden", "meaning": "找到", "tail": "?" }
          ]
        }
      ],
      "usage_note": "尋求協助。helfen 要搭配與格 mir (我)，不能用 mich 喔。",
      "image_file": "can_you_help.png"
    },
    {
      "id": "g-34",
      "term_zh": "我可以…嗎？",
      "related_terms": [
        {
          "term_target": "Darf ich ... ?",
          "pronunciation": ["/daʁf ɪç/"],
          "specific_note": "請求許可",
          "segments": [
            { "text": "Darf", "meaning": "允許", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Darf ich gehen?",
          "translation": "我可以走嗎？(我有被允許離開嗎？)",
          "segments": [
            { "text": "Darf", "meaning": "允許", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "gehen", "meaning": "走", "tail": "?" }
          ]
        },
        {
          "sentence": "Kann ich etwas Wasser haben?",
          "translation": "我可以喝點水嗎？(如果是要東西，用 Kann ich 比較自然)",
          "segments": [
            { "text": "Kann", "meaning": "能", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "etwas", "meaning": "一些", "tail": " " },
            { "text": "Wasser", "meaning": "水", "tail": " " },
            { "text": "haben", "meaning": "有", "tail": "?" }
          ]
        },
        {
          "sentence": "Darf ich mich hier hinsetzen?",
          "translation": "我可以坐這裡嗎？(在餐廳或火車上問路人)",
          "segments": [
            { "text": "Darf", "meaning": "允許", "tail": " " },
            { "text": "ich", "meaning": "我", "tail": " " },
            { "text": "mich", "meaning": "我自己", "tail": " " },
            { "text": "hier", "meaning": "這裡", "tail": " " },
            { "text": "hinsetzen", "meaning": "坐下", "tail": "?" }
          ]
        }
      ],
      "usage_note": "這也是常搞混的點：英文的 Can 包含了能力跟許可，但德文的許可(May I)是 Darf ich，而能力是 Kann ich。",
      "image_file": "can_i.png"
    },
    {
      "id": "g-35",
      "term_zh": "我不喜歡…",
      "related_terms": [
        {
          "term_target": "Ich mag ... nicht",
          "pronunciation": ["/ɪç maːk ... nɪçt/"],
          "specific_note": "否定事物",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "...", "meaning": "...", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich mag das nicht.",
          "translation": "我不喜歡這個。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "das", "meaning": "這個", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": "." }
          ]
        },
        {
          "sentence": "Ich mag kein Natto.",
          "translation": "我不喜歡納豆。(否定名詞時要用 kein)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "kein", "meaning": "不", "tail": " " },
            { "text": "Natto", "meaning": "納豆", "tail": "." }
          ]
        },
        {
          "sentence": "Ich warte nicht gerne.",
          "translation": "我不喜歡等待。(否定動作，直接用 nicht gerne)",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "warte", "meaning": "等", "tail": " " },
            { "text": "nicht", "meaning": "不", "tail": " " },
            { "text": "gerne", "meaning": "樂意", "tail": "." }
          ]
        }
      ],
      "usage_note": "表達反感。跟之前提到的一樣，如果不喜歡某個「動作」，只要加 nicht gerne 就好。",
      "image_file": "i_dont_like.png"
    },
    {
      "id": "g-36",
      "term_zh": "我比較喜歡…",
      "related_terms": [
        {
          "term_target": "Ich (動詞) lieber ...",
          "pronunciation": ["/ɪç ... ˈliːbɐ/"],
          "specific_note": "",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "lieber", "meaning": "更偏好", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Ich trinke lieber Tee.",
          "translation": "我比較喜歡喝茶。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "trinke", "meaning": "喝", "tail": " " },
            { "text": "lieber", "meaning": "更喜愛", "tail": " " },
            { "text": "Tee", "meaning": "茶", "tail": "." }
          ]
        },
        {
          "sentence": "Ich mag Katzen lieber.",
          "translation": "我比較喜歡貓。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "mag", "meaning": "喜歡", "tail": " " },
            { "text": "Katzen", "meaning": "貓", "tail": " " },
            { "text": "lieber", "meaning": "更喜愛", "tail": "." }
          ]
        },
        {
          "sentence": "Ich bleibe lieber zu Hause.",
          "translation": "我比較想待在家。",
          "segments": [
            { "text": "Ich", "meaning": "我", "tail": " " },
            { "text": "bleibe", "meaning": "待", "tail": " " },
            { "text": "lieber", "meaning": "更喜愛", "tail": " " },
            { "text": "zu", "meaning": "在", "tail": " " },
            { "text": "Hause", "meaning": "家", "tail": "." }
          ]
        }
      ],
      "usage_note": "這超重要：德國人不會用一個特定的動詞來表示 prefer，他們是在動詞後面加副詞 lieber (更喜愛地)。",
      "image_file": "prefer.png"
    },
    {
      "id": "g-37",
      "term_zh": "A 比 B 更…",
      "related_terms": [
        {
          "term_target": "A ist (比較級) als B",
          "pronunciation": ["/ɪst ... als/"],
          "specific_note": "",
          "segments": [
            { "text": "A", "meaning": "A", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "(比較級)", "meaning": "...", "tail": " " },
            { "text": "als", "meaning": "比", "tail": " " },
            { "text": "B", "meaning": "B", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Das ist teurer als das da.",
          "translation": "這比那個貴。(teuer 的比較級是 teurer)",
          "segments": [
            { "text": "Das", "meaning": "這", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "teurer", "meaning": "更貴的", "tail": " " },
            { "text": "als", "meaning": "比", "tail": " " },
            { "text": "das", "meaning": "那個", "tail": " " },
            { "text": "da", "meaning": "那裡", "tail": "." }
          ]
        },
        {
          "sentence": "Er ist berühmter als sie.",
          "translation": "他比她更有名。",
          "segments": [
            { "text": "Er", "meaning": "他", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "berühmter", "meaning": "更有名的", "tail": " " },
            { "text": "als", "meaning": "比", "tail": " " },
            { "text": "sie", "meaning": "她", "tail": "." }
          ]
        },
        {
          "sentence": "Dieses Problem ist schwieriger.",
          "translation": "這個問題更困難。",
          "segments": [
            { "text": "Dieses", "meaning": "這個", "tail": " " },
            { "text": "Problem", "meaning": "問題", "tail": " " },
            { "text": "ist", "meaning": "是", "tail": " " },
            { "text": "schwieriger", "meaning": "更困難的", "tail": "." }
          ]
        }
      ],
      "usage_note": "比較級。英文的 than，在德文叫做 als。",
      "image_file": "more_than.png"
    },
    {
      "id": "g-38",
      "term_zh": "有…（存在）",
      "related_terms": [
        {
          "term_target": "Es gibt ...",
          "pronunciation": ["/ɛs ɡiːpt/"],
          "specific_note": "",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "gibt", "meaning": "給(存在有)", "tail": "" }
          ]
        }
      ],
      "examples": [
        {
          "sentence": "Es gibt einen Hund.",
          "translation": "那裡有一隻狗。(Es gibt 後面要接第四格 Akkusativ)",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "gibt", "meaning": "給", "tail": " " },
            { "text": "einen", "meaning": "一隻", "tail": " " },
            { "text": "Hund", "meaning": "狗", "tail": "." }
          ]
        },
        {
          "sentence": "Es gibt viele Leute.",
          "translation": "那裡有很多人。(不管是單數還是複數，動詞都是 gibt)",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "gibt", "meaning": "給", "tail": " " },
            { "text": "viele", "meaning": "許多", "tail": " " },
            { "text": "Leute", "meaning": "人", "tail": "." }
          ]
        },
        {
          "sentence": "Es gibt ein Problem.",
          "translation": "有一個問題。",
          "segments": [
            { "text": "Es", "meaning": "它", "tail": " " },
            { "text": "gibt", "meaning": "給", "tail": " " },
            { "text": "ein", "meaning": "一個", "tail": " " },
            { "text": "Problem", "meaning": "問題", "tail": "." }
          ]
        }
      ],
      "usage_note": "極度重要的德文萬用句型！等同於英文的 There is / There are，不過在德文完全不用管後面的東西是單數還複數，統統用 Es gibt 就可以！",
      "image_file": "there_is.png"
    }
    
  ]
}
    //     {
    //       id: "adv-08",
    //       term_zh: "只有",
    //       related_terms: [
    //         {
    //           term_target: "Nur",
    //           pronunciation: ["/nuːɐ̯/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Nur einer.", translation: "只有一個。" },
    //       usage_note: "唯一。",
    //       image_file: "only.png",
    //     },
    //     {
    //       id: "adv-09",
    //       term_zh: "再次",
    //       related_terms: [
    //         {
    //           term_target: "Noch einmal",
    //           pronunciation: ["/nɔx ˈaɪnmaːl/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "Wieder",
    //           pronunciation: ["/ˈviːdɐ/"],
    //           specific_note: "又",
    //         },
    //       ],
    //       example: {
    //         sentence: "Versuch es noch einmal.",
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
    //           term_target: "Ungefähr",
    //           pronunciation: ["/ˈʊnɡəˌfɛːɐ̯/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "Etwa",
    //           pronunciation: ["/ˈɛtva/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ungefähr 10 Minuten.",
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
    //           term_target: "Ein bisschen",
    //           pronunciation: ["/aɪn ˈbɪsçən/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ein bisschen scharf.",
    //         translation: "一點點辣。",
    //       },
    //       usage_note: "少量。",
    //       image_file: "a_little.png",
    //     },
    //     {
    //       id: "adv-12",
    //       term_zh: "也是",
    //       related_terms: [
    //         {
    //           term_target: "Auch",
    //           pronunciation: ["/aʊx/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ich auch.", translation: "我也是。" },
    //       usage_note: "也。",
    //       image_file: "also.png",
    //     },
    //     {
    //       id: "adv-13",
    //       term_zh: "或許",
    //       related_terms: [
    //         {
    //           term_target: "Vielleicht",
    //           pronunciation: ["/fiˈlaɪçt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Vielleicht später.",
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
    //           term_target: "Später",
    //           pronunciation: ["/ˈʃpɛːtɐ/"],
    //           specific_note: "稍後",
    //         },
    //         {
    //           term_target: "Danach",
    //           pronunciation: ["/daˈnaːx/"],
    //           specific_note: "然後",
    //         },
    //       ],
    //       example: { sentence: "Bis später.", translation: "待會見。" },
    //       usage_note: "稍後。",
    //       image_file: "later.png",
    //     },
    //     {
    //       id: "adv-15",
    //       term_zh: "很快",
    //       related_terms: [
    //         {
    //           term_target: "Bald",
    //           pronunciation: ["/balt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Bis bald.", translation: "待會見(很快見)。" },
    //       usage_note: "不久後。",
    //       image_file: "soon.png",
    //     },
    //     {
    //       id: "adv-16",
    //       term_zh: "一起",
    //       related_terms: [
    //         {
    //           term_target: "Zusammen",
    //           pronunciation: ["/t͡suˈzamən/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "Gemeinsam",
    //           pronunciation: ["/ɡəˈmaɪnzaːm/"],
    //           specific_note: "共同",
    //         },
    //       ],
    //       example: { sentence: "Zusammen gehen.", translation: "一起去。" },
    //       usage_note: "共同。",
    //       image_file: "together.png",
    //     },
    //     {
    //       id: "adv-17",
    //       term_zh: "仍然",
    //       related_terms: [
    //         {
    //           term_target: "Immer noch",
    //           pronunciation: ["/ˈɪmɐ nɔx/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "Noch",
    //           pronunciation: ["/nɔx/"],
    //           specific_note: "還",
    //         },
    //       ],
    //       example: { sentence: "Immer noch hier.", translation: "還在這裡。" },
    //       usage_note: "持續。",
    //       image_file: "still.png",
    //     },
    //     {
    //       id: "adv-18",
    //       term_zh: "一般來說",
    //       related_terms: [
    //         {
    //           term_target: "Allgemein",
    //           pronunciation: ["/alɡəˈmaɪn/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "In der Regel",
    //           pronunciation: ["/ɪn deːɐ̯ ˈʁeːɡl̩/"],
    //           specific_note: "通常",
    //         },
    //       ],
    //       example: { sentence: "Allgemein gesagt.", translation: "一般來說。" },
    //       usage_note: "通常。",
    //       image_file: "normally.png",
    //     },
    //     {
    //       id: "adv-19",
    //       term_zh: "立刻",
    //       related_terms: [
    //         {
    //           term_target: "Sofort",
    //           pronunciation: ["/zoˈfɔʁt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Komm sofort.", translation: "立刻來。" },
    //       usage_note: "馬上。",
    //       image_file: "immediately.png",
    //     },
    //     {
    //       id: "adv-20",
    //       term_zh: "也不",
    //       related_terms: [
    //         {
    //           term_target: "Auch nicht",
    //           pronunciation: ["/aʊx nɪçt/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "Weder ... noch ...",
    //           pronunciation: ["/ˈveːdɐ ... nɔx/"],
    //           specific_note: "既不...也不...",
    //         },
    //       ],
    //       example: { sentence: "Ich auch nicht.", translation: "我也不。" },
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
    //         { term_target: "Was", pronunciation: ["/vas/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Was ist das?", translation: "這是什麼？" },
    //       usage_note: "問事物。",
    //       image_file: "what.png",
    //     },
    //     {
    //       id: "q-02",
    //       term_zh: "如何",
    //       related_terms: [
    //         { term_target: "Wie", pronunciation: ["/viː/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Wie geht es dir?", translation: "你好嗎？" },
    //       usage_note: "問狀況。",
    //       image_file: "how.png",
    //     },
    //     {
    //       id: "q-03",
    //       term_zh: "何時",
    //       related_terms: [
    //         {
    //           term_target: "Wann",
    //           pronunciation: ["/van/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Wann gehen wir?", translation: "何時去？" },
    //       usage_note: "問時間。",
    //       image_file: "when.png",
    //     },
    //     {
    //       id: "q-04",
    //       term_zh: "哪裡",
    //       related_terms: [
    //         {
    //           term_target: "Wo",
    //           pronunciation: ["/voː/"],
    //           specific_note: "在哪裡",
    //         },
    //         {
    //           term_target: "Wohin",
    //           pronunciation: ["/voˈhɪn/"],
    //           specific_note: "去哪裡(方向)",
    //         },
    //       ],
    //       example: { sentence: "Wo bist du?", translation: "你在哪？" },
    //       usage_note: "Wo(靜態)，Wohin(動態)。",
    //       image_file: "where.png",
    //     },
    //     {
    //       id: "q-05",
    //       term_zh: "誰",
    //       related_terms: [
    //         {
    //           term_target: "Wer",
    //           pronunciation: ["/veːɐ̯/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Wer ist das?", translation: "那是誰？" },
    //       usage_note: "問人。",
    //       image_file: "who.png",
    //     },
    //     {
    //       id: "q-06",
    //       term_zh: "為什麼",
    //       related_terms: [
    //         {
    //           term_target: "Warum",
    //           pronunciation: ["/vaˈʁʊm/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Warum?", translation: "為什麼？" },
    //       usage_note: "問原因。",
    //       image_file: "why.png",
    //     },
    //     {
    //       id: "q-07",
    //       term_zh: "哪一個",
    //       related_terms: [
    //         {
    //           term_target: "Welcher / Welche / Welches",
    //           pronunciation: ["/ˈvɛlçɐ/", "/ˈvɛlçə/", "/ˈvɛlçəs/"],
    //           specific_note: "m/f/n",
    //         },
    //       ],
    //       example: { sentence: "Welches?", translation: "哪一個？" },
    //       usage_note: "選擇。",
    //       image_file: "which.png",
    //     },
    //     {
    //       id: "q-08",
    //       term_zh: "多少（數量）",
    //       related_terms: [
    //         {
    //           term_target: "Wie viel",
    //           pronunciation: ["/viː fiːl/"],
    //           specific_note: "不可數",
    //         },
    //         {
    //           term_target: "Wie viele",
    //           pronunciation: ["/viː ˈfiːlə/"],
    //           specific_note: "可數",
    //         },
    //       ],
    //       example: {
    //         sentence: "Wie viel kostet das?",
    //         translation: "多少錢？",
    //       },
    //       usage_note: "問數量/價格。",
    //       image_file: "how_much.png",
    //     },
    //     {
    //       id: "q-09",
    //       term_zh: "多久（時間）",
    //       related_terms: [
    //         {
    //           term_target: "Wie lange",
    //           pronunciation: ["/viː ˈlaŋə/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Wie lange?", translation: "要多久？" },
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
    //           term_target: "Jetzt",
    //           pronunciation: ["/jɛt͡st/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Mach es jetzt.", translation: "現在做。" },
    //       usage_note: "目前。",
    //       image_file: "now.png",
    //     },
    //     {
    //       id: "tp-02",
    //       term_zh: "今天",
    //       related_terms: [
    //         {
    //           term_target: "Heute",
    //           pronunciation: ["/ˈhɔʏtə/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Heute ist es warm.",
    //         translation: "今天很熱。",
    //       },
    //       usage_note: "本日。",
    //       image_file: "today.png",
    //     },
    //     {
    //       id: "tp-03",
    //       term_zh: "明天",
    //       related_terms: [
    //         {
    //           term_target: "Morgen",
    //           pronunciation: ["/ˈmɔʁɡn̩/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Bis morgen.", translation: "明天見。" },
    //       usage_note: "隔天(小寫morgen)。",
    //       image_file: "tomorrow.png",
    //     },
    //     {
    //       id: "tp-04",
    //       term_zh: "昨天",
    //       related_terms: [
    //         {
    //           term_target: "Gestern",
    //           pronunciation: ["/ˈɡɛstɐn/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Gestern war ich da.",
    //         translation: "昨天我去了。",
    //       },
    //       usage_note: "前一天。",
    //       image_file: "yesterday.png",
    //     },
    //     {
    //       id: "tp-05",
    //       term_zh: "這裡",
    //       related_terms: [
    //         {
    //           term_target: "Hier",
    //           pronunciation: ["/hiːɐ̯/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Komm her.", translation: "來這。" },
    //       usage_note: "近處。",
    //       image_file: "here.png",
    //     },
    //     {
    //       id: "tp-06",
    //       term_zh: "那裡",
    //       related_terms: [
    //         {
    //           term_target: "Dort",
    //           pronunciation: ["/dɔʁt/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "Da",
    //           pronunciation: ["/daː/"],
    //           specific_note: "那裡(指著)",
    //         },
    //       ],
    //       example: { sentence: "Geh dort hin.", translation: "去那。" },
    //       usage_note: "遠處。",
    //       image_file: "there.png",
    //     },
    //     {
    //       id: "tp-07",
    //       term_zh: "天（日期）",
    //       related_terms: [
    //         {
    //           term_target: "Tag",
    //           pronunciation: ["/taːk/"],
    //           specific_note: "m.",
    //         },
    //       ],
    //       example: { sentence: "Ein Tag.", translation: "一天。" },
    //       usage_note: "日子。",
    //       image_file: "day.png",
    //     },
    //     {
    //       id: "tp-08",
    //       term_zh: "年",
    //       related_terms: [
    //         {
    //           term_target: "Jahr",
    //           pronunciation: ["/jaːɐ̯/"],
    //           specific_note: "n.",
    //         },
    //       ],
    //       example: { sentence: "Dieses Jahr.", translation: "今年。" },
    //       usage_note: "年度。",
    //       image_file: "year.png",
    //     },
    //     {
    //       id: "tp-09",
    //       term_zh: "月",
    //       related_terms: [
    //         {
    //           term_target: "Monat",
    //           pronunciation: ["/ˈmoːnat/"],
    //           specific_note: "m.",
    //         },
    //       ],
    //       example: { sentence: "Diesen Monat.", translation: "這個月。" },
    //       usage_note: "月份。",
    //       image_file: "month.png",
    //     },
    //     {
    //       id: "tp-10",
    //       term_zh: "週",
    //       related_terms: [
    //         {
    //           term_target: "Woche",
    //           pronunciation: ["/ˈvɔxə/"],
    //           specific_note: "f.",
    //         },
    //       ],
    //       example: { sentence: "Nächste Woche.", translation: "下週。" },
    //       usage_note: "星期。",
    //       image_file: "week.png",
    //     },
    //     {
    //       id: "tp-11",
    //       term_zh: "早上",
    //       related_terms: [
    //         {
    //           term_target: "Morgen",
    //           pronunciation: ["/ˈmɔʁɡn̩/"],
    //           specific_note: "m.",
    //         },
    //       ],
    //       example: { sentence: "Am Morgen.", translation: "在早上。" },
    //       usage_note: "上午 (大寫)。",
    //       image_file: "morning.png",
    //     },
    //     {
    //       id: "tp-12",
    //       term_zh: "下午",
    //       related_terms: [
    //         {
    //           term_target: "Nachmittag",
    //           pronunciation: ["/ˈnaːxˌmɪtaːk/"],
    //           specific_note: "m.",
    //         },
    //       ],
    //       example: { sentence: "Am Nachmittag.", translation: "下午。" },
    //       usage_note: "PM。",
    //       image_file: "afternoon.png",
    //     },
    //     {
    //       id: "tp-13",
    //       term_zh: "晚上",
    //       related_terms: [
    //         {
    //           term_target: "Abend",
    //           pronunciation: ["/ˈaːbn̩t/"],
    //           specific_note: "m. (晚間)",
    //         },
    //         {
    //           term_target: "Nacht",
    //           pronunciation: ["/naxt/"],
    //           specific_note: "f. (夜晚/睡覺)",
    //         },
    //       ],
    //       example: { sentence: "Gute Nacht.", translation: "晚安。" },
    //       usage_note: "傍晚到睡前用 Abend。",
    //       image_file: "night.png",
    //     },
    //     {
    //       id: "tp-14",
    //       term_zh: "中午",
    //       related_terms: [
    //         {
    //           term_target: "Mittag",
    //           pronunciation: ["/ˈmɪtaːk/"],
    //           specific_note: "m.",
    //         },
    //       ],
    //       example: { sentence: "Am Mittag.", translation: "在中午。" },
    //       usage_note: "12點。",
    //       image_file: "noon.png",
    //     },
    //     {
    //       id: "tp-15",
    //       term_zh: "前面",
    //       related_terms: [
    //         {
    //           term_target: "Vorne",
    //           pronunciation: ["/ˈfɔʁnə/"],
    //           specific_note: "副詞",
    //         },
    //         {
    //           term_target: "Vor",
    //           pronunciation: ["/foːɐ̯/"],
    //           specific_note: "介系詞",
    //         },
    //       ],
    //       example: { sentence: "Da vorne.", translation: "在前面。" },
    //       usage_note: "前方。",
    //       image_file: "front.png",
    //     },
    //     {
    //       id: "tp-16",
    //       term_zh: "後面",
    //       related_terms: [
    //         {
    //           term_target: "Hinten",
    //           pronunciation: ["/ˈhɪntn̩/"],
    //           specific_note: "副詞",
    //         },
    //         {
    //           term_target: "Hinter",
    //           pronunciation: ["/ˈhɪntɐ/"],
    //           specific_note: "介系詞",
    //         },
    //       ],
    //       example: { sentence: "Da hinten.", translation: "在後面。" },
    //       usage_note: "後方。",
    //       image_file: "behind.png",
    //     },
    //     {
    //       id: "tp-17",
    //       term_zh: "左邊",
    //       related_terms: [
    //         {
    //           term_target: "Links",
    //           pronunciation: ["/lɪŋks/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Nach links.", translation: "左轉。" },
    //       usage_note: "左。",
    //       image_file: "left.png",
    //     },
    //     {
    //       id: "tp-18",
    //       term_zh: "右邊",
    //       related_terms: [
    //         {
    //           term_target: "Rechts",
    //           pronunciation: ["/ʁɛçt͡s/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Nach rechts.", translation: "右轉。" },
    //       usage_note: "右。",
    //       image_file: "right.png",
    //     },
    //     {
    //       id: "tp-19",
    //       term_zh: "旁邊",
    //       related_terms: [
    //         {
    //           term_target: "Neben",
    //           pronunciation: ["/ˈneːbn̩/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Neben mir.", translation: "在我旁邊。" },
    //       usage_note: "側邊。",
    //       image_file: "beside.png",
    //     },
    //     {
    //       id: "tp-20",
    //       term_zh: "對面",
    //       related_terms: [
    //         {
    //           term_target: "Gegenüber",
    //           pronunciation: ["/ɡeːɡn̩ˈʔyːbɐ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Gegenüber der Bank.",
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
    //           term_target: "Frühling",
    //           pronunciation: ["/ˈfʁyːlɪŋ/"],
    //           specific_note: "m.",
    //         },
    //       ],
    //       example: { sentence: "Der Frühling.", translation: "春天。" },
    //       usage_note: "季節。",
    //       image_file: "spring.png",
    //     },
    //     {
    //       id: "tp-22",
    //       term_zh: "夏天",
    //       related_terms: [
    //         {
    //           term_target: "Sommer",
    //           pronunciation: ["/ˈzɔmɐ/"],
    //           specific_note: "m.",
    //         },
    //       ],
    //       example: { sentence: "Heißer Sommer.", translation: "炎熱的夏天。" },
    //       usage_note: "季節。",
    //       image_file: "summer.png",
    //     },
    //     {
    //       id: "tp-23",
    //       term_zh: "秋天",
    //       related_terms: [
    //         {
    //           term_target: "Herbst",
    //           pronunciation: ["/hɛʁpst/"],
    //           specific_note: "m.",
    //         },
    //       ],
    //       example: { sentence: "Kühler Herbst.", translation: "涼爽的秋天。" },
    //       usage_note: "季節。",
    //       image_file: "autumn.png",
    //     },
    //     {
    //       id: "tp-24",
    //       term_zh: "冬天",
    //       related_terms: [
    //         {
    //           term_target: "Winter",
    //           pronunciation: ["/ˈvɪntɐ/"],
    //           specific_note: "m.",
    //         },
    //       ],
    //       example: { sentence: "Kalter Winter.", translation: "寒冷的冬天。" },
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
    //           term_target: "Null",
    //           pronunciation: ["/nʊl/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Null Grad.", translation: "零度。" },
    //       usage_note: "零。",
    //       image_file: "zero.png",
    //     },
    //     {
    //       id: "num-1",
    //       term_zh: "1",
    //       related_terms: [
    //         {
    //           term_target: "Eins",
    //           pronunciation: ["/aɪns/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Eine Minute.",
    //         translation: "一分鐘(Eine 陰性)。",
    //       },
    //       usage_note: "一。",
    //       image_file: "one.png",
    //     },
    //     {
    //       id: "num-2",
    //       term_zh: "2",
    //       related_terms: [
    //         {
    //           term_target: "Zwei",
    //           pronunciation: ["/t͡svaɪ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Zwei Tage.", translation: "兩天。" },
    //       usage_note: "二。",
    //       image_file: "two.png",
    //     },
    //     {
    //       id: "num-3",
    //       term_zh: "3",
    //       related_terms: [
    //         {
    //           term_target: "Drei",
    //           pronunciation: ["/dʁaɪ/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Drei Personen.", translation: "三人。" },
    //       usage_note: "三。",
    //       image_file: "three.png",
    //     },
    //     {
    //       id: "num-4",
    //       term_zh: "4",
    //       related_terms: [
    //         {
    //           term_target: "Vier",
    //           pronunciation: ["/fiːɐ̯/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Vier Jahreszeiten.", translation: "四季。" },
    //       usage_note: "四。",
    //       image_file: "four.png",
    //     },
    //     {
    //       id: "num-5",
    //       term_zh: "5",
    //       related_terms: [
    //         {
    //           term_target: "Fünf",
    //           pronunciation: ["/fʏnf/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Fünf Euro.", translation: "五歐元。" },
    //       usage_note: "五。",
    //       image_file: "five.png",
    //     },
    //     {
    //       id: "num-6",
    //       term_zh: "6",
    //       related_terms: [
    //         {
    //           term_target: "Sechs",
    //           pronunciation: ["/zɛks/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Sechs Stunden.", translation: "六小時。" },
    //       usage_note: "六。",
    //       image_file: "six.png",
    //     },
    //     {
    //       id: "num-7",
    //       term_zh: "7",
    //       related_terms: [
    //         {
    //           term_target: "Sieben",
    //           pronunciation: ["/ˈziːbn̩/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Sieben Tage.", translation: "七天。" },
    //       usage_note: "七。",
    //       image_file: "seven.png",
    //     },
    //     {
    //       id: "num-8",
    //       term_zh: "8",
    //       related_terms: [
    //         {
    //           term_target: "Acht",
    //           pronunciation: ["/axt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Acht Jahre.", translation: "八歲。" },
    //       usage_note: "八。",
    //       image_file: "eight.png",
    //     },
    //     {
    //       id: "num-9",
    //       term_zh: "9",
    //       related_terms: [
    //         {
    //           term_target: "Neun",
    //           pronunciation: ["/nɔʏn/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Neun Uhr.", translation: "九點。" },
    //       usage_note: "九。",
    //       image_file: "nine.png",
    //     },
    //     {
    //       id: "num-10",
    //       term_zh: "10",
    //       related_terms: [
    //         {
    //           term_target: "Zehn",
    //           pronunciation: ["/t͡seːn/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Zehn Euro.", translation: "十歐元。" },
    //       usage_note: "十。",
    //       image_file: "ten.png",
    //     },
    //     {
    //       id: "num-11",
    //       term_zh: "11",
    //       related_terms: [
    //         { term_target: "Elf", pronunciation: ["/ɛlf/"], specific_note: "" },
    //       ],
    //       example: { sentence: "Elf Jahre.", translation: "11歲。" },
    //       usage_note: "十一。",
    //       image_file: "eleven.png",
    //     },
    //     {
    //       id: "num-12",
    //       term_zh: "12",
    //       related_terms: [
    //         {
    //           term_target: "Zwölf",
    //           pronunciation: ["/t͡svœlf/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Zwölf Monate.", translation: "12個月。" },
    //       usage_note: "十二。",
    //       image_file: "twelve.png",
    //     },
    //     {
    //       id: "num-15",
    //       term_zh: "15",
    //       related_terms: [
    //         {
    //           term_target: "Fünfzehn",
    //           pronunciation: ["/ˈfʏnft͡seːn/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Fünfzehn Minuten.", translation: "15分鐘。" },
    //       usage_note: "十五。",
    //       image_file: "fifteen.png",
    //     },
    //     {
    //       id: "num-20",
    //       term_zh: "20",
    //       related_terms: [
    //         {
    //           term_target: "Zwanzig",
    //           pronunciation: ["/ˈt͡svant͡sɪç/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Zwanzig Euro.", translation: "20歐元。" },
    //       usage_note: "二十。",
    //       image_file: "twenty.png",
    //     },
    //     {
    //       id: "num-50",
    //       term_zh: "50",
    //       related_terms: [
    //         {
    //           term_target: "Fünfzig",
    //           pronunciation: ["/ˈfʏnft͡sɪç/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Fünfzig Prozent.", translation: "50%。" },
    //       usage_note: "五十。",
    //       image_file: "fifty.png",
    //     },
    //     {
    //       id: "num-100",
    //       term_zh: "100",
    //       related_terms: [
    //         {
    //           term_target: "Hundert",
    //           pronunciation: ["/ˈhʊndɐt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Hundert Punkte.", translation: "一百分。" },
    //       usage_note: "百。",
    //       image_file: "hundred.png",
    //     },
    //     {
    //       id: "num-1000",
    //       term_zh: "1000",
    //       related_terms: [
    //         {
    //           term_target: "Tausend",
    //           pronunciation: ["/ˈtaʊzn̩t/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Tausend Dank.", translation: "萬分感謝。" },
    //       usage_note: "千。",
    //       image_file: "thousand.png",
    //     },
    //     {
    //       id: "num-10000",
    //       term_zh: "10000",
    //       related_terms: [
    //         {
    //           term_target: "Zehntausend",
    //           pronunciation: ["/ˈt͡seːnˌtaʊzn̩t/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Zehntausend Euro.", translation: "一萬歐元。" },
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
    //           term_target: "Ich bin...",
    //           pronunciation: ["/ɪç bɪn/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ich bin Student.", translation: "我是學生。" },
    //       usage_note: "本質/身分。",
    //       image_file: "i_am.png",
    //     },
    //     {
    //       id: "g-02",
    //       term_zh: "我的名字叫～",
    //       related_terms: [
    //         {
    //           term_target: "Ich heiße...",
    //           pronunciation: ["/ɪç ˈhaɪsə/"],
    //           specific_note: "",
    //         },
    //         {
    //           term_target: "Mein Name ist...",
    //           pronunciation: ["/maɪn ˈnaːmə ɪst/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ich heiße Hans.", translation: "我叫漢斯。" },
    //       usage_note: "自我介紹。",
    //       image_file: "my_name_is.png",
    //     },
    //     {
    //       id: "g-03",
    //       term_zh: "我做～",
    //       related_terms: [
    //         {
    //           term_target: "Ich mache...",
    //           pronunciation: ["/ɪç ˈmaxə/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich mache Hausaufgaben.",
    //         translation: "我做功課。",
    //       },
    //       usage_note: "一般動作。",
    //       image_file: "i_do.png",
    //     },
    //     {
    //       id: "g-04",
    //       term_zh: "我正在做～",
    //       related_terms: [
    //         {
    //           term_target: "Ich (verbo)... gerade",
    //           pronunciation: ["/ɪç ... ɡəˈʁaːdə/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ich esse gerade.", translation: "我正在吃。" },
    //       usage_note: "加 gerade 表示正在。",
    //       image_file: "ing.png",
    //     },
    //     {
    //       id: "g-05",
    //       term_zh: "我能夠～",
    //       related_terms: [
    //         {
    //           term_target: "Ich kann...",
    //           pronunciation: ["/ɪç kan/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich kann schwimmen.",
    //         translation: "我會游泳。",
    //       },
    //       usage_note: "能力。",
    //       image_file: "can.png",
    //     },
    //     {
    //       id: "g-06",
    //       term_zh: "我喜歡做～",
    //       related_terms: [
    //         {
    //           term_target: "Ich mag...",
    //           pronunciation: ["/ɪç maːk/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ich mag lesen.", translation: "我喜歡閱讀。" },
    //       usage_note: "興趣。",
    //       image_file: "like_ing.png",
    //     },
    //     {
    //       id: "g-07",
    //       term_zh: "我曾經～",
    //       related_terms: [
    //         {
    //           term_target: "Ich war...",
    //           pronunciation: ["/ɪç vaːɐ̯/"],
    //           specific_note: "狀態",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich war Student.",
    //         translation: "我曾經是學生。",
    //       },
    //       usage_note: "過去狀態 (Präteritum)。",
    //       image_file: "i_was.png",
    //     },
    //     {
    //       id: "g-08",
    //       term_zh: "我做過～",
    //       related_terms: [
    //         {
    //           term_target: "Ich habe ... gemacht",
    //           pronunciation: ["/ɪç haːbə ... ɡəˈmaxt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich habe Hausaufgaben gemacht.",
    //         translation: "我做了功課。",
    //       },
    //       usage_note: "過去動作 (Perfekt)。",
    //       image_file: "i_did.png",
    //     },
    //     {
    //       id: "g-09",
    //       term_zh: "我已做過～",
    //       related_terms: [
    //         {
    //           term_target: "Ich habe schon...",
    //           pronunciation: ["/ɪç haːbə ʃoːn/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich habe schon gegessen.",
    //         translation: "我已經吃過了。",
    //       },
    //       usage_note: "完成式。",
    //       image_file: "i_have_done.png",
    //     },
    //     {
    //       id: "g-10",
    //       term_zh: "我曾去過～",
    //       related_terms: [
    //         {
    //           term_target: "Ich war schon mal in...",
    //           pronunciation: ["/ɪç vaːɐ̯ ʃoːn maːl ɪn/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich war schon mal in Deutschland.",
    //         translation: "我曾去過德國。",
    //       },
    //       usage_note: "經驗。",
    //       image_file: "have_been_to.png",
    //     },
    //     {
    //       id: "g-11",
    //       term_zh: "我打算～",
    //       related_terms: [
    //         {
    //           term_target: "Ich werde...",
    //           pronunciation: ["/ɪç veːɐ̯də/"],
    //           specific_note: "將要",
    //         },
    //         {
    //           term_target: "Ich habe vor...",
    //           pronunciation: ["/ɪç haːbə foːɐ̯/"],
    //           specific_note: "計劃",
    //         },
    //       ],
    //       example: { sentence: "Ich werde gehen.", translation: "我將要去。" },
    //       usage_note: "未來式。",
    //       image_file: "i_will.png",
    //     },
    //     {
    //       id: "g-12",
    //       term_zh: "你是～嗎？",
    //       related_terms: [
    //         {
    //           term_target: "Bist du...?",
    //           pronunciation: ["/bɪst duː/"],
    //           specific_note: "非正式",
    //         },
    //         {
    //           term_target: "Sind Sie...?",
    //           pronunciation: ["/zɪnt ziː/"],
    //           specific_note: "正式",
    //         },
    //       ],
    //       example: {
    //         sentence: "Bist du Student?",
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
    //           term_target: "Machst du...?",
    //           pronunciation: ["/maxst duː/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Machst du Sport?",
    //         translation: "你有運動嗎？",
    //       },
    //       usage_note: "一般疑問句。",
    //       image_file: "do_you.png",
    //     },
    //     {
    //       id: "g-14",
    //       term_zh: "你曾經～嗎？",
    //       related_terms: [
    //         {
    //           term_target: "Hast du schon mal...?",
    //           pronunciation: ["/hast duː ʃoːn maːl/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Hast du das schon mal gesehen?",
    //         translation: "你有看過這個嗎？",
    //       },
    //       usage_note: "問經驗。",
    //       image_file: "have_you_ever.png",
    //     },
    //     {
    //       id: "g-15",
    //       term_zh: "你何時做（某事）？",
    //       related_terms: [
    //         {
    //           term_target: "Wann...?",
    //           pronunciation: ["/van/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Wann schläfst du?", translation: "你何時睡？" },
    //       usage_note: "問時間點。",
    //       image_file: "when_do_you.png",
    //     },
    //     {
    //       id: "g-16",
    //       term_zh: "你什麼時候去（某地）？",
    //       related_terms: [
    //         {
    //           term_target: "Wann gehst du zu...?",
    //           pronunciation: ["/van geːst duː tsu/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Wann gehst du zur Schule?",
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
    //           term_target: "Wo...?",
    //           pronunciation: ["/voː/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Wo wohnst du?", translation: "你住哪裡？" },
    //       usage_note: "問地點。",
    //       image_file: "where_do_you.png",
    //     },
    //     {
    //       id: "g-18",
    //       term_zh: "你如何做（某事）？",
    //       related_terms: [
    //         {
    //           term_target: "Wie...?",
    //           pronunciation: ["/viː/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Wie machst du das?",
    //         translation: "你怎麼做這個？",
    //       },
    //       usage_note: "問方法。",
    //       image_file: "how_do_you.png",
    //     },
    //     {
    //       id: "g-19",
    //       term_zh: "你怎麼去（某地）？",
    //       related_terms: [
    //         {
    //           term_target: "Wie kommst du zu...?",
    //           pronunciation: ["/viː kɔmst duː tsu/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Wie kommst du zur Schule?",
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
    //           term_target: "Ich bin kein...",
    //           pronunciation: ["/ɪç bɪn kaɪn/"],
    //           specific_note: "否定名詞",
    //         },
    //         {
    //           term_target: "Ich bin nicht...",
    //           pronunciation: ["/ɪç bɪn nɪçt/"],
    //           specific_note: "否定形容詞",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich bin kein Arzt.",
    //         translation: "我不是醫生。",
    //       },
    //       usage_note: "否定名詞用 Kein。",
    //       image_file: "i_am_not.png",
    //     },
    //     {
    //       id: "g-21",
    //       term_zh: "我不做～",
    //       related_terms: [
    //         {
    //           term_target: "Ich (verbo) nicht",
    //           pronunciation: ["/ɪç ... nɪçt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Ich rauche nicht.", translation: "我不抽菸。" },
    //       usage_note: "否定動作。",
    //       image_file: "i_dont.png",
    //     },
    //     {
    //       id: "g-22",
    //       term_zh: "我不能～",
    //       related_terms: [
    //         {
    //           term_target: "Ich kann nicht...",
    //           pronunciation: ["/ɪç kan nɪçt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich kann nicht gehen.",
    //         translation: "我不能去。",
    //       },
    //       usage_note: "否定能力。",
    //       image_file: "i_cant.png",
    //     },
    //     {
    //       id: "g-23",
    //       term_zh: "我未曾～",
    //       related_terms: [
    //         {
    //           term_target: "Ich habe noch nie...",
    //           pronunciation: ["/ɪç haːbə nɔx niː/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich habe das noch nie gegessen.",
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
    //           term_target: "Ich muss nicht...",
    //           pronunciation: ["/ɪç mʊs nɪçt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich muss nicht gehen.",
    //         translation: "我不必去。",
    //       },
    //       usage_note: "無義務。",
    //       image_file: "i_dont_have_to.png",
    //     },
    //     {
    //       id: "g-25",
    //       term_zh: "如果～的話，就～",
    //       related_terms: [
    //         {
    //           term_target: "Wenn..., (dann)...",
    //           pronunciation: ["/vɛn ... dan/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Wenn du willst, gehen wir.",
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
    //           term_target: "Wenn...",
    //           pronunciation: ["/vɛn/"],
    //           specific_note: "現在/未來/重複",
    //         },
    //         {
    //           term_target: "Als...",
    //           pronunciation: ["/als/"],
    //           specific_note: "過去發生一次",
    //         },
    //       ],
    //       example: {
    //         sentence: "Wenn ich esse, bin ich glücklich.",
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
    //           term_target: "Kannst du...?",
    //           pronunciation: ["/kanst duː/"],
    //           specific_note: "非正式",
    //         },
    //         {
    //           term_target: "Können Sie...?",
    //           pronunciation: ["/kœnən ziː/"],
    //           specific_note: "正式",
    //         },
    //       ],
    //       example: {
    //         sentence: "Kannst du mir helfen?",
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
    //           term_target: "Lass uns...",
    //           pronunciation: ["/las ʊns/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: { sentence: "Lass uns gehen.", translation: "我們走吧。" },
    //       usage_note: "提議。",
    //       image_file: "lets.png",
    //     },
    //     {
    //       id: "g-29",
    //       term_zh: "我認為～",
    //       related_terms: [
    //         {
    //           term_target: "Ich denke...",
    //           pronunciation: ["/ɪç dɛŋkə/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich denke, es ist gut.",
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
    //           term_target: "Ich will...",
    //           pronunciation: ["/ɪç vɪl/"],
    //           specific_note: "直接",
    //         },
    //         {
    //           term_target: "Ich möchte...",
    //           pronunciation: ["/ɪç ˈmœçtə/"],
    //           specific_note: "禮貌",
    //         },
    //       ],
    //       example: { sentence: "Ich will gehen.", translation: "我想去。" },
    //       usage_note: "慾望。",
    //       image_file: "want_to.png",
    //     },
    //     {
    //       id: "g-31",
    //       term_zh: "我必須做～",
    //       related_terms: [
    //         {
    //           term_target: "Ich muss...",
    //           pronunciation: ["/ɪç mʊs/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich muss arbeiten.",
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
    //           term_target: "Es ist ... zu (infinitiv)",
    //           pronunciation: ["/ɛs ɪst ... tsu/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Es ist gut zu essen.",
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
    //           term_target: "Kannst du mir helfen...?",
    //           pronunciation: ["/kanst duː miːɐ̯ ˈhɛlfn̩/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Kannst du mir beim Putzen helfen?",
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
    //           term_target: "Darf ich...?",
    //           pronunciation: ["/daʁf ɪç/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Darf ich reinkommen?",
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
    //           term_target: "Ich mag ... nicht",
    //           pronunciation: ["/ɪç maːk ... nɪçt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich mag das nicht.",
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
    //           term_target: "Ich bevorzuge...",
    //           pronunciation: ["/ɪç bəˈfoːɐ̯t͡suːɡə/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Ich bevorzuge Tee.",
    //         translation: "我比較喜歡茶。",
    //       },
    //       usage_note: "偏好。",
    //       image_file: "prefer.png",
    //     },
    //     {
    //       id: "g-37",
    //       term_zh: "A 比 B 更…",
    //       related_terms: [
    //         {
    //           term_target: "A ist ...er als B",
    //           pronunciation: ["/a ɪst ...ɐ als be/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Das ist teurer als das.",
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
    //           term_target: "Es gibt...",
    //           pronunciation: ["/ɛs ɡiːpt/"],
    //           specific_note: "",
    //         },
    //       ],
    //       example: {
    //         sentence: "Es gibt einen Hund.",
    //         translation: "有一隻狗。",
    //       },
    //       usage_note: "存在。",
    //       image_file: "there_is.png",
    //     },
    //   ],
    // },
  ],
};
