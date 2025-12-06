import React, { useState } from 'react';
import { LearningItem } from '../types';
import SpeechButton from './SpeechButton';
import { Info } from 'lucide-react';

interface LearningCardProps {
  item: LearningItem;
  language?: string;
}

const LearningCard: React.FC<LearningCardProps> = ({ item, language = 'vi-VN' }) => {
  const [showNote, setShowNote] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isJapanese = language === 'ja-JP';

  // Split term_target if it contains slash separators (handling spaces around slash)
  const terms = item.term_target.split(/\s*\/\s*/);
  
  // Prepare pronunciations by splitting them to match terms
  let mainPronunciations: string[] = [];
  let subPronunciations: string[] = [];

  if (isJapanese) {
    // Japanese: Split Kana and Romaji by slash
    mainPronunciations = item.pronunciation[0].split(/\s*\/\s*/);
    if (item.pronunciation[1]) {
      subPronunciations = item.pronunciation[1].split(/\s*\/\s*/);
    }
  } else {
    // Vietnamese: Extract IPA parts enclosed in slashes /.../
    const ipaString = item.pronunciation[0];
    const matches = ipaString.match(/\/.*?\//g);
    
    if (matches && matches.length === terms.length) {
        mainPronunciations = matches;
    } else {
        // Fallback: use the whole string for the first item if we can't map 1:1
        mainPronunciations = [ipaString];
    }
  }

  // Fallback Avatar Generator
  const getFallbackAvatar = () => {
    // Use the first character of the target term (or term_zh if target is empty)
    const char = (item.term_target || item.term_zh || '?').charAt(0).toUpperCase();
    
    // Generate a consistent pastel color based on the character code to make it look nice
    // Using HSL for good color distribution
    const hue = (char.charCodeAt(0) * 137.508) % 360; 
    const backgroundColor = `hsl(${hue}, 70%, 90%)`;
    const textColor = `hsl(${hue}, 60%, 35%)`;

    return (
      <div 
        className="w-full h-full flex items-center justify-center text-4xl font-bold select-none transition-colors"
        style={{ backgroundColor, color: textColor }}
      >
        {char}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4 items-stretch hover:shadow-md transition-all duration-300">
      
      {/* Content Side (Left) */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          {/* Terms & Pronunciations List - Vertical Layout */}
          <div className="flex flex-col gap-y-3 mb-3 items-start">
            {terms.map((term, index) => {
               const mainPron = mainPronunciations[index] || (index === 0 && mainPronunciations.length === 1 ? mainPronunciations[0] : null);
               const subPron = subPronunciations[index] || (index === 0 && subPronunciations.length === 1 ? subPronunciations[0] : null);

               return (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-emerald-600 leading-tight">
                        {term}
                        </h3>
                        {/* 
                          Fix: For Japanese, use the Kana pronunciation (mainPron) for speech 
                          instead of the term (Kanji) to avoid robotic or incorrect readings.
                        */}
                        <SpeechButton 
                          text={isJapanese && mainPron ? mainPron : term} 
                          lang={language} 
                          size={20} 
                        />
                    </div>
                    
                    {(mainPron || subPron) && (
                        <div className="flex flex-col mt-0.5 ml-0.5">
                            {isJapanese ? (
                                <>
                                {mainPron && <span className="text-sm font-medium text-gray-700">{mainPron}</span>}
                                {subPron && <span className="text-xs text-gray-400 font-mono">{subPron}</span>}
                                </>
                            ) : (
                                mainPron && <span className="text-sm text-gray-500 font-medium font-mono">{mainPron}</span>
                            )}
                        </div>
                    )}
                  </div>
               );
            })}
          </div>
          
          {/* Definition (Chinese) & Usage Note Toggle */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h4 className="text-base font-bold text-[#1F2937]">{item.term_zh}</h4>
            
            {item.usage_note && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNote(!showNote);
                }}
                className={`
                  p-1 rounded-full transition-all duration-200
                  ${showNote 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-300 hover:text-orange-500 hover:bg-orange-50'
                  }
                `}
                aria-label="Show usage note"
                title="用法提示"
              >
                <Info size={16} />
              </button>
            )}
          </div>

          {/* Expanded Usage Note */}
          {showNote && item.usage_note && (
            <div className="mb-3 p-3 bg-orange-50/80 rounded-xl border border-orange-100 text-sm text-gray-700 leading-relaxed animate-in fade-in slide-in-from-top-1">
              {item.usage_note}
            </div>
          )}

          {/* Example Sentence Section */}
          <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm text-gray-600 italic leading-relaxed">
                "{item.example.sentence}"
              </p>
              <SpeechButton 
                text={item.example.sentence} 
                lang={language} 
                size={16} 
                className="shrink-0 mt-0.5 opacity-70 hover:opacity-100 text-gray-400 hover:text-emerald-500"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              {item.example.translation}
            </p>
          </div>
        </div>
      </div>

      {/* Image Side (Right) - Aligned to top (start) */}
      <div className="w-24 sm:w-32 shrink-0 self-start pt-1">
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 shadow-inner border border-gray-100 relative">
          {item.image_file && !imgError ? (
            <img 
              src={`images/${item.image_file}`} 
              alt={item.term_zh} 
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            getFallbackAvatar()
          )}
        </div>
      </div>

    </div>
  );
};

export default LearningCard;