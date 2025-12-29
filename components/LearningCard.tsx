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
  text: string;       // 顯示用的文字 (例如：私)
  speechText: string; // 發音用的文字 (例如：わたし) -> 新增這個欄位
  meaning: string;
  targetRect: DOMRect | null; 
}

// --- Helper: 取得正確發音字串 ---
// 將 segments 裡的 furigana 拼起來，如果沒有 furigana 就用 text
const getReadingFromSegments = (segments?: Segment[], fallbackText?: string): string => {
  if (!segments || segments.length === 0) return fallbackText || '';
  return segments.map(s => s.furigana || s.text).join('');
};

// --- SegmentedText Component ---
const SegmentedText: React.FC<{
  segments?: Segment[];
  fallbackText: string;
  // 修改 callback，多接收一個 speechText
  onWordClick: (e: React.MouseEvent<HTMLSpanElement>, text: string, speechText: string, meaning: string) => void;
  textSizeClass?: string;
}> = ({ segments, fallbackText, onWordClick, textSizeClass = "text-base" }) => {
  if (!segments || segments.length === 0) {
    return <span className={textSizeClass}>{fallbackText}</span>;
  }

  return (
    <span className={`${textSizeClass} leading-loose break-words`}>
      {segments.map((seg, index) => {
        const isClickable = !!seg.meaning && seg.text !== fallbackText;
        // 決定該片段的發音：如果有 furigana 就用 furigana，否則用 text
        const segmentSpeech = seg.furigana || seg.text;
        
        return (
          <React.Fragment key={index}>
            <span
              onClick={(e) => {
                if (isClickable) {
                  e.stopPropagation();
                  // 傳遞：顯示文字(text), 發音文字(segmentSpeech), 解釋(meaning)
                  onWordClick(e, seg.text, segmentSpeech, seg.meaning!);
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
                  <span className={isClickable ? "decoration-emerald-300/50 decoration-2 underline-offset-4 underline" : ""}>
                    {seg.text}
                  </span>
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
  language: string;
  onClose: () => void 
}> = ({ state, language, onClose }) => {
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
        
        <div className="relative bg-gray-900 text-white rounded-lg shadow-xl p-3 min-w-[120px] max-w-[200px]">
          <div className="flex items-center justify-between gap-3 mb-1.5 border-b border-gray-700 pb-1.5">
            <span className="font-bold text-lg text-emerald-400 leading-none">
              {state.text}
            </span>
            {/* 這裡使用 speechText (例如：わたし) 讓發音正確 */}
            <SpeechButton 
              text={state.speechText} 
              lang={language} 
              size={16} 
              className="text-gray-300 hover:text-white"
            />
          </div>
          <div className="text-sm font-medium leading-snug text-gray-100">
            {state.meaning}
          </div>
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
    text: '',
    speechText: '', // 初始化
    meaning: '',
    targetRect: null
  });

  const isJapanese = language === 'ja-JP';

  // 接收三個參數：顯示文字、發音文字、解釋
  const handleWordClick = (e: React.MouseEvent<HTMLSpanElement>, text: string, speechText: string, meaning: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPopover({
      visible: true,
      text: text,
      speechText: speechText,
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
          
          <div className="flex-1 flex flex-col justify-between min-w-0 z-10">
            <div>
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

              <div className="flex flex-col gap-y-3 mb-3 items-start">
                {item.related_terms.map((termItem, index) => {
                  const mainPron = termItem.pronunciation[0];
                  const subPron = termItem.pronunciation[1];

                  // --- 關鍵修正：組合出完整的發音字串 ---
                  // 這樣「私」就會變成「わたし」，發音就正確了
                  const fullReading = getReadingFromSegments(termItem.segments, termItem.term_target);

                  return (
                    <div key={index} className="flex flex-col border-b border-gray-50 last:border-0 pb-2 last:pb-0 w-full">
                      <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                        <div className="font-bold text-emerald-600">
                          <SegmentedText 
                            segments={termItem.segments}
                            fallbackText={termItem.term_target}
                            onWordClick={handleWordClick}
                            textSizeClass="text-xl"
                          />
                        </div>
                        {/* 這裡傳入 fullReading (わたし) 而不是 term_target (私) */}
                        <SpeechButton
                          text={fullReading}
                          lang={language}
                          size={20}
                        />
                      </div>

                      {(mainPron || subPron) && (
                        <div className="flex flex-col mt-0 ml-0.5 mb-1">
                          {isJapanese ? (
                            <>
                              {mainPron && <span className="text-sm text-gray-500  font-medium font-mono">{mainPron}</span>}
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

              {allExamples.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100 mt-auto transition-all duration-300">
                  <div className="flex flex-col gap-3">
                    {displayExamples.map((ex, idx) => (
                      <div key={idx} className={idx > 0 ? "pt-2 border-t border-gray-200 border-dashed animate-in fade-in" : ""}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-sm text-gray-800">
                             <SegmentedText 
                                segments={ex.segments}
                                fallbackText={ex.sentence}
                                onWordClick={handleWordClick}
                                textSizeClass="text-sm"
                             />
                          </div>
                          {/* 例句通常比較長，瀏覽器比較容易判斷上下文，所以直接傳 sentence 通常沒問題。
                              但如果想更保險，也可以用 getReadingFromSegments 處理 */}
                          <SpeechButton
                            text={ex.sentence}
                            lang={language}
                            size={16}
                            className="shrink-0 opacity-70 hover:opacity-100 text-gray-400 hover:text-emerald-500"
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
        language={language}
        onClose={() => setPopover(prev => ({ ...prev, visible: false }))} 
      />
    </>
  );
};

export default LearningCard;