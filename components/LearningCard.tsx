import React, { useState } from 'react';
import { LearningItem } from '../types';
import SpeechButton from './SpeechButton';
import { Info, CornerDownRight, ChevronDown, ChevronUp } from 'lucide-react';

interface LearningCardProps {
  item: LearningItem;
  language: string;
}

const LearningCard: React.FC<LearningCardProps> = ({ item, language }) => {
  const [showNote, setShowNote] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isJapanese = language === 'ja-JP';

  const formatTextForSpeech = (text: string) => {
    return text.replace(/\//g, ', ');
  };

  const getFallbackAvatar = () => {
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

  const allExamples = item.examples || [];
  const displayExamples = isExpanded ? allExamples : allExamples.slice(0, 1);
  const hasMultipleExamples = allExamples.length > 1;

  return (
    <div className="
      bg-white rounded-2xl shadow-sm border border-gray-100 
      hover:shadow-md transition-all duration-300
      flex items-stretch
      p-3 gap-3 
      /* ↑↑↑ 修改處 1：padding 縮小 (p-4 -> p-3)，gap 縮小 (gap-4 -> gap-3) 以爭取文字空間 */
    ">

      {/* Content Side (Left) */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          {/* 標題區 + Info Icon */}
          <div className="mb-2 pb-2 border-b border-gray-100 flex justify-between items-start">
            <h4 className="text-lg font-bold text-gray-800 leading-snug pt-0.5">
              {item.term_zh}
            </h4>

            {item.usage_note && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNote(!showNote);
                }}
                className={`
                  p-1 rounded-full transition-all duration-200 shrink-0 ml-1
                  ${showNote
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-300 hover:text-orange-500 hover:bg-gray-50'
                  }
                `}
                title="整體用法"
              >
                <Info size={18} />
              </button>
            )}
          </div>

          {showNote && item.usage_note && (
            <div className="mb-3 p-2.5 bg-orange-50/80 rounded-xl border border-orange-100 text-sm text-gray-700 leading-relaxed animate-in fade-in slide-in-from-top-1">
              {item.usage_note}
            </div>
          )}

          {/* 列表區 */}
          <div className="flex flex-col gap-y-3 mb-3 items-start">
            {item.related_terms.map((termItem, index) => {
              const mainPron = termItem.pronunciation[0];
              const subPron = termItem.pronunciation[1];

              return (
                <div key={index} className="flex flex-col border-b border-gray-50 last:border-0 pb-2 last:pb-0 w-full">
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

          {/* Example Sentences Area */}
          {allExamples.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100 mt-auto transition-all duration-300">
              <div className="flex flex-col gap-3">
                {displayExamples.map((ex, idx) => (
                  <div 
                    key={idx} 
                    className={idx > 0 ? "pt-2 border-t border-gray-200 border-dashed animate-in fade-in slide-in-from-top-1" : ""}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm text-gray-600 italic leading-relaxed">
                        "{ex.sentence}"
                      </p>
                      <SpeechButton
                        text={formatTextForSpeech(ex.sentence)}
                        lang={language}
                        size={16}
                        className="shrink-0 mt-0.5 opacity-70 hover:opacity-100 text-gray-400 hover:text-emerald-500"
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {ex.translation}
                    </p>
                  </div>
                ))}
              </div>

              {hasMultipleExamples && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  className="w-full flex items-center justify-center mt-2 pt-1 text-gray-300 hover:text-gray-500 transition-colors"
                >
                  {isExpanded ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Image Side (Right) */}
      <div className="
        shrink-0 self-start
        w-28 sm:w-36 
        /* ↑↑↑ 修改處 2：圖片尺寸加大 (原本 w-24 sm:w-32) */
        /* ↑↑↑ 修改處 3：移除 pt-1，讓它緊貼頂部 (因為外層 padding 變小了，這樣會更靠右上) */
      ">
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 shadow-inner border border-gray-100 relative">
          {item.image_file && !imgError ? (
            <img
              src={`/airlang/images/${item.image_file.replace('.png', '')}.webp`}
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