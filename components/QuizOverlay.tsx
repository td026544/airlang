import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';
import { QuizQuestion } from '../types';
import LearningCard from './LearningCard';
import SpeechButton from './SpeechButton';

interface QuizOverlayProps {
  questions: QuizQuestion[];
  language: string;
  onClose: () => void;
  onRecordAttempt: (itemId: string, quality: number) => void;
}

const QuizOverlay: React.FC<QuizOverlayProps> = ({ questions, language, onClose, onRecordAttempt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Mode A (Flashcard) state
  const [isFlipped, setIsFlipped] = useState(false);

  // Mode B & C state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Reset states when question changes
  useEffect(() => {
    setIsFlipped(false);
    setSelectedOption(null);
    setInputValue('');
    setHasSubmitted(false);
    
    // Auto-focus input for Mode C
    if (questions[currentIndex]?.mode === 'C') {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [currentIndex, questions]);

  if (!questions || questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const progressPercent = ((currentIndex) / questions.length) * 100;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleQualitySelect = (quality: number) => {
    const itemId = currentQ.item.id || currentQ.item.term_zh;
    onRecordAttempt(itemId, quality);
    handleNext();
  };

  const handleOptionSelect = (option: string) => {
    if (hasSubmitted) return;
    setSelectedOption(option);
    setHasSubmitted(true);
    
    const isCorrect = option === currentQ.correctOption;
    const itemId = currentQ.item.id || currentQ.item.term_zh;
    onRecordAttempt(itemId, isCorrect ? 4 : 1); // 4 for correct, 1 for wrong

    setTimeout(() => {
      handleNext();
    }, 1500);
  };

  const handleFillBlankSubmit = () => {
    if (hasSubmitted || !inputValue.trim()) return;
    setHasSubmitted(true);

    // Case insensitive comparison for robustness
    const isCorrect = inputValue.trim().toLowerCase() === (currentQ.correctAnswer || '').toLowerCase();
    const itemId = currentQ.item.id || currentQ.item.term_zh;
    onRecordAttempt(itemId, isCorrect ? 4 : 1);

    setTimeout(() => {
      handleNext();
    }, 2000);
  };

  const renderModeA = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto" style={{ perspective: '1000px' }}>
        <div 
          className="relative w-full grid transition-transform duration-500 ease-in-out"
          style={{ 
            transformStyle: 'preserve-3d', 
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front */}
          <div 
            className="w-full h-full bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow min-h-[200px]"
            style={{ 
              gridArea: '1 / 1',
              backfaceVisibility: 'hidden', 
              zIndex: isFlipped ? 0 : 1
            }}
            onClick={() => !isFlipped && setIsFlipped(true)}
          >
            <h3 className="text-4xl font-bold text-gray-800 text-center px-4">{currentQ.item.term_zh}</h3>
          </div>

          {/* Back */}
          <div 
            className="w-full"
            style={{ 
              gridArea: '1 / 1',
              backfaceVisibility: 'hidden', 
              transform: 'rotateY(180deg)',
              zIndex: isFlipped ? 1 : 0
            }}
          >
             <LearningCard item={currentQ.item} language={language} />
          </div>
        </div>

        {/* Buttons */}
        <div 
          className={`grid grid-cols-4 gap-2 mt-6 w-full transition-all duration-300 ${
            isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
           <button onClick={() => handleQualitySelect(0)} className="py-3 bg-red-100 text-red-700 font-bold rounded-xl hover:bg-red-200 active:scale-95 transition-all text-sm">
             忘記
           </button>
           <button onClick={() => handleQualitySelect(3)} className="py-3 bg-orange-100 text-orange-700 font-bold rounded-xl hover:bg-orange-200 active:scale-95 transition-all text-sm">
             困難
           </button>
           <button onClick={() => handleQualitySelect(4)} className="py-3 bg-blue-100 text-blue-700 font-bold rounded-xl hover:bg-blue-200 active:scale-95 transition-all text-sm">
             普通
           </button>
           <button onClick={() => handleQualitySelect(5)} className="py-3 bg-emerald-100 text-emerald-700 font-bold rounded-xl hover:bg-emerald-200 active:scale-95 transition-all text-sm">
             簡單
           </button>
        </div>
      </div>
    );
  };

  const renderModeB = () => {
    return (
      <div className="flex flex-col w-full max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">{currentQ.questionText}</h3>
        <div className="flex flex-col gap-3">
          {currentQ.options?.map((opt, idx) => {
            let btnClass = "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";
            let Icon = null;

            if (hasSubmitted) {
              if (opt === currentQ.correctOption) {
                btnClass = "bg-emerald-50 border-emerald-500 text-emerald-700 font-bold";
                Icon = <CheckCircle size={20} className="text-emerald-500" />;
              } else if (opt === selectedOption) {
                btnClass = "bg-red-50 border-red-500 text-red-700 font-bold";
                Icon = <XCircle size={20} className="text-red-500" />;
              } else {
                btnClass = "bg-gray-50 border-gray-200 text-gray-400 opacity-50";
              }
            }

            return (
              <button 
                key={idx}
                disabled={hasSubmitted}
                onClick={() => handleOptionSelect(opt)}
                className={`p-4 rounded-xl border-2 text-left text-lg transition-all flex items-center justify-between gap-3 ${btnClass} ${!hasSubmitted && 'active:scale-95'}`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <span>{opt}</span>
                  <SpeechButton 
                    text={opt} 
                    lang={language} 
                    size={20} 
                  />
                </div>
                {Icon}
              </button>
            )
          })}
        </div>
      </div>
    );
  };

  const renderModeC = () => {
    return (
      <div className="flex flex-col w-full max-w-md mx-auto">
        <div className="bg-emerald-50 text-emerald-800 px-4 py-2 rounded-lg mb-6 font-medium text-center shadow-sm w-full">
          {currentQ.prompt}
        </div>
        
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 leading-relaxed tracking-wide">
          {currentQ.sentenceWithBlank}
        </h3>
        
        <div className="flex flex-col gap-3">
          {currentQ.options?.map((opt, idx) => {
            let btnClass = "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";
            let Icon = null;

            if (hasSubmitted) {
              if (opt === currentQ.correctOption) {
                btnClass = "bg-emerald-50 border-emerald-500 text-emerald-700 font-bold";
                Icon = <CheckCircle size={20} className="text-emerald-500" />;
              } else if (opt === selectedOption) {
                btnClass = "bg-red-50 border-red-500 text-red-700 font-bold";
                Icon = <XCircle size={20} className="text-red-500" />;
              } else {
                btnClass = "bg-gray-50 border-gray-200 text-gray-400 opacity-50";
              }
            }

            return (
              <button 
                key={idx}
                disabled={hasSubmitted}
                onClick={() => handleOptionSelect(opt)}
                className={`p-4 rounded-xl border-2 text-left text-lg transition-all flex items-center justify-between gap-3 ${btnClass} ${!hasSubmitted && 'active:scale-95'}`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <span>{opt}</span>
                  <SpeechButton 
                    text={opt} 
                    lang={language} 
                    size={20} 
                  />
                </div>
                {Icon}
              </button>
            )
          })}
        </div>
      </div>
    );
  };

  if (isFinished) {
    return (
      <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-6 animate-in fade-in">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
           <CheckCircle size={48} className="text-emerald-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">測驗完成！</h2>
        <p className="text-gray-500 mb-8 text-center">您的學習進度已經記錄儲存。</p>
        <button 
          onClick={onClose}
          className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 active:scale-95 transition-all"
        >
          返回列表
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-50/95 backdrop-blur-md z-[100] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="font-bold text-gray-800 flex items-center gap-2">
           <span className="bg-gray-100 px-2 py-1 rounded text-sm">測驗模式</span>
           <span className="text-sm text-gray-500">
             {currentQ.mode === 'A' ? '字卡記憶' : currentQ.mode === 'B' ? '情境選擇' : '例句填空'}
           </span>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
             {currentIndex + 1} / {questions.length}
           </span>
           <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
             <X size={24} />
           </button>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1.5">
        <div 
          className="bg-emerald-500 h-full transition-all duration-300 ease-out" 
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center pt-10 sm:pt-20 pb-24">
         {currentQ.mode === 'A' && renderModeA()}
         {currentQ.mode === 'B' && renderModeB()}
         {currentQ.mode === 'C' && renderModeC()}
      </div>
    </div>
  );
};

export default QuizOverlay;
