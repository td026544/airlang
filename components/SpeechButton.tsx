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

  // const handleSpeak = (e: React.MouseEvent) => {
  //   e.stopPropagation(); // Prevent card click
    
  //   if (!isSupported) return;

  //   window.speechSynthesis.cancel();

  //   // Pre-process text for better pronunciation
  //   let textToSpeak = text;
  //   if (lang === 'vi-VN') {
  //     // Replace slashes with commas for natural pauses instead of "slash"
  //     textToSpeak = textToSpeak.replace(/\//g, ',');
  //   }

  //   const utterance = new SpeechSynthesisUtterance(textToSpeak);
  //   utterance.lang = lang;
    
  //   // Set rate to 1.0 for natural sound. 
  //   // Slower speeds (0.8/0.9) often cause robotic artifacts in many TTS engines (especially Japanese).
  //   utterance.rate = 1.0;
    
  //   let nativeVoice = null;
  //   const voices = window.speechSynthesis.getVoices();

  //   if (lang === 'vi-VN') {
  //     // Prioritize high-quality voices for Vietnamese
  //     nativeVoice = voices.find(v => v.name === 'Google Tiếng Việt') ||
  //                   voices.find(v => v.name.includes('Microsoft HoaiMy')) || 
  //                   voices.find(v => v.name.includes('Microsoft NamMinh')) ||
  //                   voices.find(v => v.name.includes('Linh')) || 
  //                   voices.find(v => v.lang === 'vi-VN') ||
  //                   voices.find(v => v.lang.includes('vi'));
  //   } else if (lang === 'ja-JP') {
  //     // Prioritize female voices for Japanese
  //     // Kyoko/O-Ren (Apple), Haruka/Ayumi (Microsoft), Google (Usually female)
  //     nativeVoice =  voices.find(v => (v.lang === 'ja-JP' || v.lang === 'ja') && v.name.includes('Google')) || 
  //                voices.find(v => v.lang.includes('ja') || v.lang.includes('JP'));
  //   }
    
  //   if (nativeVoice) {
  //     utterance.voice = nativeVoice;
  //     // Explicitly set the utterance lang to match the voice to avoid accent issues
  //     utterance.lang = nativeVoice.lang;
  //   }

  //   utterance.onstart = () => setIsSpeaking(true);
  //   utterance.onend = () => setIsSpeaking(false);
  //   utterance.onerror = () => setIsSpeaking(false);

  //   window.speechSynthesis.speak(utterance);
  // };
const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    
    if (!isSupported) return;

    window.speechSynthesis.cancel();

    // Pre-process text for better pronunciation
    let textToSpeak = text;
    if (lang === 'vi-VN') {
      textToSpeak = textToSpeak.replace(/\//g, ',');
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang; // 這是第一層預設：告訴瀏覽器這是什麼語言
    utterance.rate = 1.0;
    
    let nativeVoice = null;
    const voices = window.speechSynthesis.getVoices();

    // --- 1. 針對特定語言尋找高品質聲音 (High Quality Strategy) ---
    if (lang === 'vi-VN') {
      nativeVoice = voices.find(v => v.name === 'Google Tiếng Việt') ||
                    voices.find(v => v.name.includes('Microsoft HoaiMy')) || 
                    voices.find(v => v.name.includes('Microsoft NamMinh')) ||
                    voices.find(v => v.name.includes('Linh')); // 移除這裡的通用查找，放到後面

    } else if (lang === 'ja-JP') {
      nativeVoice =  voices.find(v => (v.lang === 'ja-JP' || v.lang === 'ja') && v.name.includes('Google'));

    } else if (lang.startsWith('es')) { 
      nativeVoice = voices.find(v => v.name.includes('Google') && v.lang.startsWith('es')) ||
                    voices.find(v => v.name.includes('Microsoft') && v.lang.startsWith('es'));

    } else if (lang.startsWith('th')) {
      nativeVoice = voices.find(v => v.name === 'Google ไทย') ||
                    voices.find(v => v.name.includes('Microsoft Premwadee'));

    } else if (lang === 'ko-KR') {
      nativeVoice = voices.find(v => v.name === 'Google 한국어') ||
                    voices.find(v => v.name.includes('Microsoft Heami'));
    }
    else if (lang.startsWith('de')) {
      // --- ADDED: German ---
      // 'Google Deutsch' is standard on Chrome/Android.
      // 'Microsoft Hedda' (Female) and 'Stefan' (Male) are standard on Windows.
      nativeVoice = voices.find(v => v.name === 'Google Deutsch') ||
                    voices.find(v => v.name.includes('Microsoft Hedda')) ||
                    voices.find(v => v.name.includes('Microsoft Stefan'));
    }
    
    // --- 2. 通用備案 (General Fallback) ---
    // 如果上面的特定優質聲音都沒找到 (nativeVoice 還是 null)，
    // 這裡會嘗試找 "任何" 符合該語言代碼的聲音。
    if (!nativeVoice) {
      nativeVoice = voices.find(v => v.lang === lang) || 
                    voices.find(v => v.lang.startsWith(lang.split('-')[0])); // 例如找不到 es-MX 就找任何 es 開頭的
    }

    // --- 3. 套用聲音 ---
    if (nativeVoice) {
      // 情況 A: 找到了適合的聲音 (不論是優質還是通用)
      utterance.voice = nativeVoice;
      utterance.lang = nativeVoice.lang; // 同步語言設定以防口音問題
    } else {
      // 情況 B: 真的完全找不到該語言的聲音 (nativeVoice == null)
      // 不做任何事，保持 utterance.voice 為 undefined。
      // 瀏覽器會根據最上面設定的 `utterance.lang` 自動使用系統預設發音。
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