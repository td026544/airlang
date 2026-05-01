import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';
import { QuizQuestion, UserProgress } from '../types';
import LearningCard from './LearningCard';
import SpeechButton from './SpeechButton';

interface QuizOverlayProps {
  questions: QuizQuestion[];
  language: string;
  progressData: Record<string, UserProgress>;
  onClose: () => void;
  onRecordAttempt: (itemId: string, quality: number) => void;
  onRestart: (questions: QuizQuestion[]) => void;
  onViewStats: () => void;
}

const QuizOverlay: React.FC<QuizOverlayProps> = ({ questions, language, progressData, onClose, onRecordAttempt, onRestart, onViewStats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ question: QuizQuestion; isCorrect: boolean }[]>([]);

  // Mode A (Flashcard) state
  const [isFlipped, setIsFlipped] = useState(false);

  // Mode B & C state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [shake, setShake] = useState(false);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    const savedRate = localStorage.getItem('playback_rate');
    utterance.rate = savedRate ? parseFloat(savedRate) : 1.0;
    window.speechSynthesis.speak(utterance);
  };

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
    setSessionResults(prev => [...prev, { question: currentQ, isCorrect: quality >= 3 }]);
    handleNext();
  };

  const handleOptionSelect = (option: string) => {
    if (hasSubmitted) return;
    setSelectedOption(option);
    setHasSubmitted(true);

    const isCorrect = option === currentQ.correctOption;
    const itemId = currentQ.item.id || currentQ.item.term_zh;
    onRecordAttempt(itemId, isCorrect ? 4 : 1); // 4 for correct, 1 for wrong
    setSessionResults(prev => [...prev, { question: currentQ, isCorrect }]);

    if (isCorrect) {
      if (navigator.vibrate) navigator.vibrate(100);
    } else {
      if (navigator.vibrate) navigator.vibrate([50, 100, 50]);
      setShake(true);
      setTimeout(() => setShake(false), 500);

      if (currentQ.correctOption) {
        speak(currentQ.correctOption);
      }
    }

    setTimeout(() => {
      handleNext();
    }, 1500);
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
          className={`grid grid-cols-4 gap-2 mt-6 w-full transition-all duration-300 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
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
                Icon = <CheckCircle size={20} className="text-emerald-500 animate-in zoom-in spin-in-12 duration-300" />;
              } else if (opt === selectedOption) {
                btnClass = "bg-red-50 border-red-500 text-red-700 font-bold";
                Icon = <XCircle size={20} className="text-red-500 animate-in zoom-in duration-300" />;
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
                Icon = <CheckCircle size={20} className="text-emerald-500 animate-in zoom-in spin-in-12 duration-300" />;
              } else if (opt === selectedOption) {
                btnClass = "bg-red-50 border-red-500 text-red-700 font-bold";
                Icon = <XCircle size={20} className="text-red-500 animate-in zoom-in duration-300" />;
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
    const correctCount = sessionResults.filter(r => r.isCorrect).length;
    const accuracy = Math.round((correctCount / questions.length) * 100) || 0;
    const mistakes = sessionResults.filter(r => !r.isCorrect).map(r => r.question);

    return (
      <div className="fixed inset-0 bg-gray-50 z-[100] flex flex-col animate-in fade-in">
        <div className="flex-1 overflow-y-auto pb-32">
          {/* Hero Section */}
          <div className="bg-emerald-500 text-white pt-12 pb-8 px-6 rounded-b-[40px] shadow-sm mb-6 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-center leading-tight">
              太棒了！<br />語言生存力提升 ✈️
            </h2>

            <div className="relative w-40 h-40 flex items-center justify-center mb-4">
              <svg className="w-full h-full transform -rotate-90 absolute inset-0" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-emerald-700/30" />
                <circle
                  cx="50" cy="50" r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * accuracy) / 100}
                  strokeLinecap="round"
                  className="text-white transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="text-center z-10 flex flex-col items-center justify-center translate-y-1">
                <div className="text-5xl font-black tracking-tighter leading-none">{accuracy}<span className="text-2xl ml-0.5">%</span></div>
                <div className="text-emerald-100 text-sm font-semibold mt-1">生存指數</div>
              </div>
            </div>

            <div className="flex gap-6 mt-4 text-emerald-50">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">{questions.length}</span>
                <span className="text-xs">總題數</span>
              </div>
              <div className="w-px bg-emerald-400/50" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">{correctCount}</span>
                <span className="text-xs">熟練句型</span>
              </div>
            </div>
          </div>

          {/* Readiness List */}
          <div className="px-4 max-w-md mx-auto w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4 px-2">熟悉度燈號 🚦</h3>
            <div className="flex flex-col gap-3">
              {sessionResults.map((result, idx) => {
                const itemId = result.question.item.id || result.question.item.term_zh;
                const pData = progressData[itemId];
                const interval = pData ? pData.interval : 0;

                let StatusIcon = null;
                let statusBg = '';
                let statusText = '';

                if (interval > 3) {
                  StatusIcon = <span className="text-xl">🟢</span>;
                  statusBg = 'bg-green-50 border-green-200';
                  statusText = '✅ 完美';
                } else if (interval >= 1) {
                  StatusIcon = <span className="text-xl">🟡</span>;
                  statusBg = 'bg-yellow-50 border-yellow-200';
                  statusText = '還行';
                } else {
                  StatusIcon = <span className="text-xl">🔴</span>;
                  statusBg = 'bg-red-50 border-red-200';
                  statusText = '🚨 落地前必看';
                }

                return (
                  <div key={idx} className={`p-4 rounded-2xl border ${statusBg} flex items-center justify-between gap-3 shadow-sm`}>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-800 text-lg truncate">{result.question.item.term_zh}</div>
                      <div className="text-gray-500 text-sm truncate">{result.question.item.related_terms[0]?.term_target || ''}</div>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <div className="flex items-center gap-1 font-bold text-gray-700 bg-white/50 px-2 py-1 rounded-md">
                        {StatusIcon}
                        <span className="text-sm whitespace-nowrap">{statusText}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 p-4 pb-6 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-10 flex flex-col gap-3">
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-[1] py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 active:scale-95 transition-all whitespace-nowrap"
            >
              返回主頁
            </button>
            {mistakes.length > 0 ? (
              <button
                onClick={() => onRestart(mistakes)}
                className="flex-[2] py-4 bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 active:scale-95 transition-all whitespace-nowrap"
              >
                馬上複習錯題 ({mistakes.length})
              </button>
            ) : (
              <button
                onClick={() => onRestart(questions)}
                className="flex-[2] py-4 bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 active:scale-95 transition-all whitespace-nowrap"
              >
                重新測驗
              </button>
            )}
          </div>
          <button
            onClick={onViewStats}
            className="w-full py-3 bg-blue-50 text-blue-600 font-bold rounded-xl hover:bg-blue-100 active:scale-95 transition-all border border-blue-200/50"
          >
            查看完整數據
          </button>
        </div>
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
      <div className={`flex-1 overflow-y-auto p-4 flex flex-col items-center pt-10 sm:pt-20 pb-24 ${shake ? 'animate-shake' : ''}`}>
        {currentQ.mode === 'A' && renderModeA()}
        {currentQ.mode === 'B' && renderModeB()}
        {currentQ.mode === 'C' && renderModeC()}
      </div>
    </div>
  );
};

export default QuizOverlay;
