import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface SpeechButtonProps {
  text: string;
  lang?: string;
  className?: string;
  size?: number;
}

const SpeechButton: React.FC<SpeechButtonProps> = ({ 
  text, 
  lang = 'vi-VN', 
  className = '',
  size = 20
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!('speechSynthesis' in window)) {
        setIsSupported(false);
      } else {
        // Initial load
        setVoices(window.speechSynthesis.getVoices());
        
        // Handle async voice loading (required for Chrome/Android)
        window.speechSynthesis.onvoiceschanged = () => {
          setVoices(window.speechSynthesis.getVoices());
        };
      }
    }
  }, []);

const handleSpeak = (e: React.MouseEvent) => {
  e.stopPropagation(); // Prevent card click

  if (!isSupported) return;

  window.speechSynthesis.cancel();

  let textToSpeak = text;
  if (lang === 'en-US') {
    textToSpeak = textToSpeak.replace(/\//g, ',');
  }

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = lang; 
  utterance.rate = 1.0;

  const voices = window.speechSynthesis.getVoices();
  let nativeVoice = null;

  // --- 1. 定義各語言的聲音優先順序清單 (Configuration) ---
  // 這裡完全依照您提供的 JSON 順序排列
  const voicePreferences: Record<string, string[]> = {
    'ja-JP': ['Google 日本語', 'Hattori', 'O-Ren', 'kyoko','Reed'],
    'vi-VN': ['Linh', 'Google Tiếng Việt', 'Microsoft HoaiMy', 'Microsoft NamMinh'],
    // 西班牙語系整合：無論是 es-ES 或 es-MX，都嘗試依照此順序抓取
    'es':    ['Mónica', 'Paulina', 'Google español', 'Google español de Estados Unidos'],
    'de-DE': ['Google Deutsch', 'Helena', 'Anna', 'Martin'],
    'th-TH': ['Kanya', 'Google ไทย', 'Microsoft Premwadee'],
    'ko-KR': ['Google 한국의', 'Google 한국어', 'Yuna', 'Eddy'], // 加了 '한국어' 以防萬一
    // 法語系整合
    'fr':    ['Google français', 'Thomas', 'Jacques', 'Marie', 'Reed'],
    'ru-RU': ['Google русский', 'Milena'],
    'id-ID': ['Google Bahasa Indonesia', 'Damayanti'],
    'it-IT': ['Google italiano', 'Alice'],
    // 葡萄牙語系整合
    'pt':    ['Google português do Brasil', 'Joana']
  };

  // --- 2. 策略選擇邏輯 (Selection Logic) ---

  // A. 取得該語言的優先清單
  // 優先找完全符合的 key (如 'ja-JP')，找不到則找通用 key (如 'es', 'fr')
  const baseLang = lang.split('-')[0];
  const preferenceList = voicePreferences[lang] || voicePreferences[baseLang];

  // B. 依照清單順序尋找聲音
  if (preferenceList) {
    for (const nameKey of preferenceList) {
      // 尋找名稱包含 key 的聲音 (例如 name 包含 "Hattori")
      // 並且確保語言代碼大致相符 (避免抓到同名但不同語系的聲音)
      const found = voices.find(v => 
        v.name.toLowerCase().includes(nameKey.toLowerCase()) && 
        v.lang.startsWith(baseLang)
      );

      if (found) {
        nativeVoice = found;
        break; // 找到了就跳出迴圈，因為這是最高優先級
      }
    }
  }

  // --- 3. 兜底備案 (General Fallback) ---
  // 如果上面的清單都沒找到，或該語言不在清單中，使用原本的通用邏輯
  if (!nativeVoice) {
     // 嘗試找 Google 或 Microsoft 的通用聲音 (品質通常較好)
     nativeVoice = voices.find(v => v.lang === lang && (v.name.includes('Google') || v.name.includes('Microsoft'))) ||
                   voices.find(v => v.lang.startsWith(baseLang) && (v.name.includes('Google') || v.name.includes('Microsoft')));
  }

  // 最後一層：只要語言代碼對就好
  if (!nativeVoice) {
    nativeVoice = voices.find(v => v.lang === lang) || 
                  voices.find(v => v.lang.startsWith(baseLang));
  }

  // --- 4. 套用聲音 ---
  if (nativeVoice) {
    utterance.voice = nativeVoice;
    // 重要：某些瀏覽器若 lang 與 voice.lang 不一致會導致沈默或錯誤，這裡同步一下
    utterance.lang = nativeVoice.lang; 
    console.log(`Using voice: ${nativeVoice.name} (${nativeVoice.lang})`);
  } else {
    console.warn(`No voice found for ${lang}, using system default.`);
  }

  utterance.onstart = () => setIsSpeaking(true);
  utterance.onend = () => setIsSpeaking(false);
  utterance.onerror = () => setIsSpeaking(false);

  window.speechSynthesis.speak(utterance);
};

  if (!isSupported) {
    return (
      <button 
        className={`text-gray-300 cursor-not-allowed ${className}`} 
        title="Not supported"
        disabled
      >
        <VolumeX size={size} />
      </button>
    );
  }

  return (
    <button
      onClick={handleSpeak}
      className={`rounded-full transition-all duration-200 active:scale-90 flex items-center justify-center
        ${isSpeaking 
          ? 'text-orange-500 scale-110' 
          : 'text-orange-400 hover:text-orange-500 hover:bg-orange-50'
        } ${className}`}
      aria-label="Play pronunciation"
      title="Play audio"
    >
      <Volume2 size={size} />
    </button>
  );
};

export default SpeechButton;