import React, { useState } from 'react';
import { LearningItem } from '../types';
import SpeechButton from './SpeechButton';
import { Info, CornerDownRight } from 'lucide-react';

interface LearningCardProps {
  item: LearningItem;
  language?: string;
}

const LearningCard: React.FC<LearningCardProps> = ({ item, language = 'vi-VN' }) => {
  const [showNote, setShowNote] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isJapanese = language === 'ja-JP';

  // Helper: TTS 文字處理
  const formatTextForSpeech = (text: string) => {
    return text.replace(/\//g, ', '); 
  };

  // Fallback Avatar Logic
  const getFallbackAvatar = () => {
    // 優先抓取第一個單字的第一個字母，如果沒有則抓取中文
    const firstTerm = item.related_terms[0]?.term_target;
    const char = (firstTerm || item.term_zh || '?').charAt(0).toUpperCase();
    
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
          {/* 標題區：中文解釋 */}
          <div className="mb-3 pb-2 border-b border-gray-100">
            <h4 className="text-lg font-bold text-gray-800 leading-snug">
              {item.term_zh}
            </h4>
          </div>

          {/* 列表區：遍歷所有相關單字 */}
          <div className="flex flex-col gap-y-4 mb-3 items-start">
            {item.related_terms.map((termItem, index) => {
              const mainPron = termItem.pronunciation[0];
              const subPron = termItem.pronunciation[1];

              return (
                <div key={index} className="flex flex-col border-b border-gray-50 last:border-0 pb-2 last:pb-0 w-full">
                  
                  {/* 1. Target Word & Speech */}
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-emerald-600 leading-tight break-words">
                      {termItem.term_target}
                    </h3>
                    <SpeechButton 
                      text={isJapanese && mainPron ? mainPron : formatTextForSpeech(termItem.term_target)} 
                      lang={language} 
                      size={20} 
                    />
                  </div>
                  
                  {/* 2. Pronunciation */}
                  {(mainPron || subPron) && (
                    <div className="flex flex-col mt-0.5 ml-0.5 mb-1">
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

                  {/* 3. Specific Note (個別註釋) */}
                  {termItem.specific_note && (
                    <div className="flex items-start gap-1.5 mt-1 ml-0.5 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit">
                      <CornerDownRight size={12} className="mt-0.5 shrink-0" />
                      <span>{termItem.specific_note}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Global Usage Note (整體用法) */}
          {item.usage_note && (
            <div className="flex items-center gap-2 mb-2">
               <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNote(!showNote);
                }}
                className={`
                  flex items-center gap-1.5 px-2 py-1 rounded-full transition-all duration-200 text-xs font-medium border
                  ${showNote 
                    ? 'bg-orange-100 text-orange-600 border-orange-200' 
                    : 'bg-white text-gray-400 border-gray-200 hover:text-orange-500 hover:border-orange-300'
                  }
                `}
              >
                <Info size={14} />
                <span>整體用法</span>
              </button>
            </div>
          )}

          {/* Expanded Usage Note */}
          {showNote && item.usage_note && (
            <div className="mb-3 p-3 bg-orange-50/80 rounded-xl border border-orange-100 text-sm text-gray-700 leading-relaxed animate-in fade-in slide-in-from-top-1">
              {item.usage_note}
            </div>
          )}

          {/* Example Sentence Section */}
          <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100 mt-auto">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm text-gray-600 italic leading-relaxed">
                "{item.example.sentence}"
              </p>
              <SpeechButton 
                text={formatTextForSpeech(item.example.sentence)} 
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

      {/* Image Side (Right) */}
      <div className="w-24 sm:w-32 shrink-0 self-start pt-1">
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 shadow-inner border border-gray-100 relative">
          {item.image_file && !imgError ? (
            <img 
              src={`/airlang/images/${item.image_file}`} 
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