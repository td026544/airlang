import React, { useState, useEffect } from 'react';
// import { LearningItem } from '../types'; 
import SpeechButton from './SpeechButton';
import { Info, CornerDownRight, ChevronDown, ChevronUp } from 'lucide-react';

// --- Interface 定義 ---
interface Segment {
  text: string;
  furigana?: string;
  meaning?: string;
  tail?: string;
  type?: string;
}

interface ExtendedLearningItem {
  term_zh: string;
  usage_note?: string;
  image_file?: string;
  related_terms: Array<{
    term_target: string;
    pronunciation: string[];
    specific_note?: string;
    segments?: Segment[];
  }>;
  examples: Array<{
    sentence: string;
    translation: string;
    segments?: Segment[];
  }>;
}

interface LearningCardProps {
  item: ExtendedLearningItem;
  language: string;
}

// 定義彈窗的狀態介面
interface PopoverState {
  visible: boolean;
  meaning: string;
  targetRect: DOMRect | null; 
}

// --- SegmentedText Component ---
const SegmentedText: React.FC<{
  segments?: Segment[];
  fallbackText: string;
  onWordClick: (e: React.MouseEvent<HTMLSpanElement>, meaning: string) => void;
  textSizeClass?: string;
}> = ({ segments, fallbackText, onWordClick, textSizeClass = "text-base" }) => {
  if (!segments || segments.length === 0) {
    return <span className={textSizeClass}>{fallbackText}</span>;
  }

  return (
    <span className={`${textSizeClass} leading-loose break-words`}>
      {segments.map((seg, index) => {
        // --- 修改重點：判斷是否可點擊 ---
        // 1. 必須有 meaning
        // 2. 該 segment 的文字不能等於整句的原始文字 (fallbackText)
        const isClickable = !!seg.meaning && seg.text !== fallbackText;
        
        return (
          <React.Fragment key={index}>
            <span
              onClick={(e) => {
                if (isClickable) {
                  e.stopPropagation();
                  onWordClick(e, seg.meaning!);
                }
              }}
              className={`
                inline-block
                ${isClickable 
                  ? 'cursor-pointer hover:text-emerald-600 rounded-sm transition-colors' 
                  : ''
                }
              `}
            >
              {seg.furigana ? (
                <ruby className="group align-baseline">
                  {/* 主文字 */}
                  <span className={isClickable ? "decoration-emerald-300/50 decoration-2 underline-offset-4 underline" : ""}>
                    {seg.text}
                  </span>
                  
                  {/* 振假名 (RT) */}
                  <rt className="text-[0.6em] text-gray-500 font-normal select-none text-center opacity-90">
                    {seg.furigana}
                  </rt>
                </ruby>
              ) : (
                <span className={isClickable ? "decoration-emerald-300/50 decoration-2 underline-offset-4 underline" : ""}>
                  {seg.text}
                </span>
              )}
            </span>
            <span className="whitespace-pre-wrap">{seg.tail || ""}</span>
          </React.Fragment>
        );
      })}
    </span>
  );
};

// --- WordPopover Component ---
const WordPopover: React.FC<{ 
  state: PopoverState; 
  onClose: () => void 
}> = ({ state, onClose }) => {
  if (!state.visible || !state.targetRect) return null;

  const top = state.targetRect.bottom + 10;
  const left = state.targetRect.left + (state.targetRect.width / 2);

  return (
    <>
      <div 
        className="fixed inset-0 z-40 cursor-default" 
        onClick={(e) => {
           e.stopPropagation();
           onClose();
        }}
      />

      <div 
        className="fixed z-50 animate-in zoom-in-95 fade-in duration-200"
        style={{ 
          top: top, 
          left: left,
          transform: 'translateX(-50%)' 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45" />
        <div className="relative bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-xl whitespace-nowrap flex items-center gap-2">
          {state.meaning}
        </div>
      </div>
    </>
  );
};

// --- Main Component ---
const LearningCard: React.FC<LearningCardProps> = ({ item, language }) => {
  const [showNote, setShowNote] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  
  const [popover, setPopover] = useState<PopoverState>({
    visible: false,
    meaning: '',
    targetRect: null
  });

  const isJapanese = language === 'ja-JP';

  const handleWordClick = (e: React.MouseEvent<HTMLSpanElement>, meaning: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPopover({
      visible: true,
      meaning: meaning,
      targetRect: rect
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (popover.visible) setPopover(prev => ({ ...prev, visible: false }));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [popover.visible]);

  const getFallbackAvatar = () => {
    const firstTerm = item.related_terms[0]?.term_target;
    const char = (firstTerm || item.term_zh || '?').charAt(0).toUpperCase();
    const hue = (char.charCodeAt(0) * 137.508) % 360;
    return (
      <div
        className="w-full h-full flex items-center justify-center text-4xl font-bold select-none"
        style={{ 
          backgroundColor: `hsl(${hue}, 70%, 90%)`, 
          color: `hsl(${hue}, 60%, 35%)` 
        }}
      >
        {char}
      </div>
    );
  };

  const allExamples = item.examples || [];
  const displayExamples = isExpanded ? allExamples : allExamples.slice(0, 1);
  const hasMultipleExamples = allExamples.length > 1;

  return (
    <>
      <div className="relative group">
        <div className="
          bg-white rounded-2xl shadow-sm border border-gray-100 
          hover:shadow-md transition-all duration-300
          flex items-stretch
          p-3 gap-3 overflow-hidden
        ">
          
          {/* Content Side (Left) */}
          <div className="flex-1 flex flex-col justify-between min-w-0 z-10">
            <div>
              {/* 標題區 */}
              <div className="mb-2 pb-2 border-b border-gray-100 flex justify-between items-start">
                <h4 className="text-lg font-bold text-gray-800 leading-snug pt-0.5">
                  {item.term_zh}
                </h4>
                {item.usage_note && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowNote(!showNote); }}
                    className={`p-1 rounded-full transition-all duration-200 shrink-0 ml-1 ${showNote ? 'text-orange-500 bg-orange-50' : 'text-gray-300 hover:text-orange-500 hover:bg-gray-50'}`}
                  >
                    <Info size={18} />
                  </button>
                )}
              </div>

              {showNote && item.usage_note && (
                <div className="mb-3 p-2.5 bg-orange-50/80 rounded-xl border border-orange-100 text-sm text-gray-700 animate-in fade-in">
                  {item.usage_note}
                </div>
              )}

              {/* 單字列表 */}
              <div className="flex flex-col gap-y-3 mb-3 items-start">
                {item.related_terms.map((termItem, index) => {
                  const mainPron = termItem.pronunciation[0];
                  const subPron = termItem.pronunciation[1];

                  return (
                    <div key={index} className="flex flex-col border-b border-gray-50 last:border-0 pb-2 last:pb-0 w-full">
                      <div className="flex items-end flex-wrap gap-x-2 gap-y-1">
                        <div className="font-bold text-emerald-600">
                          <SegmentedText 
                            segments={termItem.segments}
                            fallbackText={termItem.term_target}
                            onWordClick={handleWordClick}
                            textSizeClass="text-xl"
                          />
                        </div>
                        <SpeechButton
                          text={termItem.term_target}
                          lang={language}
                          size={20}
                          className="mb-1"
                        />
                      </div>

                      {(mainPron || subPron) && (
                        <div className="flex flex-col mt-1 ml-0.5 mb-1">
                          {isJapanese ? (
                            <>
                              {mainPron && <span className="text-xs text-gray-400 font-mono">{mainPron}</span>}
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

              {/* 例句區 */}
              {allExamples.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100 mt-auto transition-all duration-300">
                  <div className="flex flex-col gap-3">
                    {displayExamples.map((ex, idx) => (
                      <div key={idx} className={idx > 0 ? "pt-2 border-t border-gray-200 border-dashed animate-in fade-in" : ""}>
                        <div className="flex items-start justify-between gap-2">
                          <div className="text-sm text-gray-800">
                             <SegmentedText 
                                segments={ex.segments}
                                fallbackText={ex.sentence}
                                onWordClick={handleWordClick}
                                textSizeClass="text-sm"
                             />
                          </div>
                          <SpeechButton
                            text={ex.sentence}
                            lang={language}
                            size={16}
                            className="shrink-0 mt-0.5 opacity-70 hover:opacity-100 text-gray-400 hover:text-emerald-500"
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-1 pl-0.5">
                          {ex.translation}
                        </p>
                      </div>
                    ))}
                  </div>

                  {hasMultipleExamples && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                      className="w-full flex items-center justify-center mt-2 pt-1 text-gray-300 hover:text-gray-500 transition-colors"
                    >
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Image Side */}
          <div className="shrink-0 self-start w-28 sm:w-36">
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
      </div>

      <WordPopover 
        state={popover} 
        onClose={() => setPopover(prev => ({ ...prev, visible: false }))} 
      />
    </>
  );
};

export default LearningCard;