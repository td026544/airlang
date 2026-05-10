import React, { useState, useRef, useEffect } from 'react';
import { datasets, LANGUAGE_OPTIONS } from './data';
import { Category, LearningItem, QuizQuestion } from './types';
import CategoryNav from './components/CategoryNav';
import LearningCard from './components/LearningCard';
import QuizOverlay from './components/QuizOverlay';
import StatsOverlay from './components/StatsOverlay';
import { useProgress } from './hooks/useProgress';
import { generateQuiz } from './services/quizService';
import { Plane, BookOpen, ChevronDown, Check, PlayCircle, Menu, Activity } from 'lucide-react';

const App: React.FC = () => {
  // 1. 初始化語言 (維持不變)
  const [langCode, setLangCode] = useState<string>(() => {
    const savedLang = localStorage.getItem('app_language');
    return (savedLang && datasets[savedLang]) ? savedLang : 'en';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const [playbackRate, setPlaybackRate] = useState<number>(() => {
    const savedRate = localStorage.getItem('playback_rate');
    return savedRate ? parseFloat(savedRate) : 1.0;
  });
  const [isRateMenuOpen, setIsRateMenuOpen] = useState(false);
  const rateMenuRef = useRef<HTMLDivElement>(null);

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('bookmarked_items');
    return saved ? JSON.parse(saved) : [];
  });

  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const { progressData, recordAttempt } = useProgress();
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[] | null>(null);
  const [quizKey, setQuizKey] = useState<number>(0);

  const handleStartQuiz = (categoryItems: LearningItem[]) => {
    const questions = generateQuiz(categoryItems, progressData, 10);
    setQuizQuestions(questions);
    setQuizKey(prev => prev + 1);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const isBookmarked = prev.includes(id);
      const newBookmarks = isBookmarked ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem('bookmarked_items', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const [activeCategoryId, setActiveCategoryId] = useState<string>('');
  const isManualScrolling = useRef(false);

  const appData = datasets[langCode];
  const currentLangOption = LANGUAGE_OPTIONS.find(opt => opt.code === langCode) || LANGUAGE_OPTIONS[0];

  const displayCategories = React.useMemo(() => {
    const baseCategories = appData.categories;
    const allItems = baseCategories.flatMap(c => c.items);

    // We only show bookmarked items that exist in the current language
    const bookmarkedItems = bookmarkedIds
      .map(id => allItems.find(item => (item.id || item.term_zh) === id))
      .filter((item): item is LearningItem => item !== undefined);

    if (bookmarkedItems.length === 0) return baseCategories;

    const favoritesCategory: Category = {
      id: 'favorites',
      name: '收藏',
      items: bookmarkedItems
    };

    const newCategories = [...baseCategories];
    const phrasesIndex = newCategories.findIndex(c => c.name.includes('常用句') || c.name.includes('Phrases'));

    if (phrasesIndex !== -1) {
      newCategories.splice(phrasesIndex, 0, favoritesCategory);
    } else {
      newCategories.unshift(favoritesCategory);
    }

    return newCategories;
  }, [appData, bookmarkedIds]);

  // 初始化 activeCategoryId (僅用於顯示目前在哪個分類，不影響滾動恢復)
  useEffect(() => {
    if (displayCategories.length > 0) {
      setActiveCategoryId(displayCategories[0].id);
    }
  }, [displayCategories]);

  // --- 修改重點 1：精確恢復上次的滾動像素位置 ---
  useEffect(() => {
    // A. 告訴瀏覽器：不要自動恢復滾動位置，由我們手動接管 (解決手機版亂跳的關鍵)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // B. 讀取上次的位置
    const savedScrollPos = localStorage.getItem('scrollY_pos');

    if (savedScrollPos) {
      const pos = parseInt(savedScrollPos, 10);

      // C. 延遲滾動：給手機一點時間渲染 DOM
      setTimeout(() => {
        window.scrollTo({
          top: pos,
          behavior: 'auto' // 初始化時用 auto 瞬間到位，不要用 smooth 慢慢滑
        });
      }, 300); // 300ms 通常對手機來說足夠了
    }
  }, []); // 空依賴陣列：只在網頁剛打開(重新整理)時執行一次


  // --- 修改重點 2：監聽滾動並儲存位置 (加入防抖動優化) ---
  useEffect(() => {
    let timeoutId: number;

    const handleScrollSave = () => {
      // 清除上一次的計時器，避免頻繁寫入
      clearTimeout(timeoutId);

      // 當使用者「停止滾動」100ms 後，才寫入 localStorage
      // 這對手機效能非常重要
      timeoutId = window.setTimeout(() => {
        localStorage.setItem('scrollY_pos', window.scrollY.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScrollSave);
    return () => {
      window.removeEventListener('scroll', handleScrollSave);
      clearTimeout(timeoutId);
    };
  }, []);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (rateMenuRef.current && !rateMenuRef.current.contains(event.target as Node)) {
        setIsRateMenuOpen(false);
      }
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)) {
        setIsHamburgerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- Scrollspy 邏輯 (維持不變，僅用於更新 Nav 狀態) ---
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return;

      const headerOffset = 180;
      let currentSectionId = displayCategories[0]?.id || '';

      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (scrolledToBottom && displayCategories.length > 0) {
        const lastCategory = displayCategories[displayCategories.length - 1];
        setActiveCategoryId(lastCategory.id);
        return;
      }

      for (const cat of displayCategories) {
        const element = document.getElementById(cat.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < headerOffset) {
            currentSectionId = cat.id;
          }
        }
      }

      setActiveCategoryId(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // 注意：這裡移除了初始執行，避免覆蓋掉我們的 scrollTo 邏輯

    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayCategories]);


  const handleScrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isManualScrolling.current = true;
      setActiveCategoryId(id);

      const headerOffset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // 點擊分類按鈕時，也算是一種滾動，需要更新儲存的位置
      // 但因為 smooth scroll 需要時間，我們不需要這裡存，
      // 上面的 scroll listener 會自動幫我們存最後停止的位置。

      setTimeout(() => {
        isManualScrolling.current = false;
      }, 800);
    }
  };

  const handleLanguageSelect = (code: string) => {
    setLangCode(code);
    localStorage.setItem('app_language', code);

    // --- 切換語言時的重要邏輯 ---
    // 切換語言通常內容長度不同，應該回到最上面，而不是停在幾千像素的位置
    localStorage.setItem('scrollY_pos', '0');

    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRate = parseFloat(e.target.value);
    setPlaybackRate(newRate);
    localStorage.setItem('playback_rate', newRate.toString());
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#1F2937]">
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 pt-4 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-xl text-white shadow-lg shadow-emerald-200">
              <Plane size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1F2937] tracking-tight">
                {appData.meta.name || '外語急救包'}
              </h1>
              {/* <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
                {appData.meta.source_language} ➔ {appData.meta.target_language}
              </p> */}
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300 active:scale-95"
              >
                <span className="text-lg leading-none">{currentLangOption.flag}</span>
                <span className="hidden sm:inline">{currentLangOption.label}</span>
                <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-100 origin-top-right z-50">
                  <div className="py-1">
                    {LANGUAGE_OPTIONS.map((option) => (
                      <button
                        key={option.code}
                        onClick={() => handleLanguageSelect(option.code)}
                        className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors
                          ${langCode === option.code ? 'bg-emerald-50 text-emerald-700 font-medium' : 'text-gray-700'}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl leading-none">{option.flag}</span>
                          <span>{option.label}</span>
                        </div>
                        {langCode === option.code && <Check size={16} className="text-emerald-500" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative" ref={rateMenuRef}>
              <button
                onClick={() => setIsRateMenuOpen(!isRateMenuOpen)}
                className="flex items-center gap-1 px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-bold transition-all duration-200 border border-gray-200 hover:border-gray-300 active:scale-95"
                title="調整語速"
              >
                <span>{playbackRate.toFixed(1)}x</span>
              </button>

              {isRateMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-100 origin-top-right">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-gray-700">語速</span>
                    <span className="text-emerald-600 font-bold">{playbackRate.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={playbackRate}
                    onChange={handleRateChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
                    <span>0.5x</span>
                    <span>1.0x</span>
                    <span>2.0x</span>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" ref={hamburgerRef}>
              <button
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                className="flex items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 active:scale-95"
              >
                <Menu size={20} />
              </button>

              {isHamburgerOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-100 origin-top-right z-50">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setIsHamburgerOpen(false);
                        setIsStatsOpen(true);
                      }}
                      className="w-full text-left px-4 py-3 text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      <Activity size={18} className="text-emerald-500" />
                      <span className="font-medium">查看完整數據</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button className="text-emerald-600 bg-emerald-50 p-2 rounded-full hover:bg-emerald-100 transition-colors hidden sm:block">
              <BookOpen size={20} />
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 pb-3">
          <CategoryNav
            categories={displayCategories}
            activeCategoryId={activeCategoryId}
            onSelectCategory={handleScrollToCategory}
          />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-20 pt-6">
        <div className="flex flex-col gap-12">
          {displayCategories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-40">
              <div className="flex items-center gap-3 mb-6 pl-1 border-l-4 border-emerald-500 py-1">
                <h2 className="text-2xl font-bold text-gray-800">
                  {category.name}
                </h2>
                <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                  {category.items.length}
                </span>
                {category.items.length > 0 && (
                  <button
                    onClick={() => handleStartQuiz(category.items)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-sm font-bold rounded-lg transition-colors ml-auto active:scale-95"
                    title="開始測驗"
                  >
                    <PlayCircle size={16} />
                    <span>測驗</span>
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-3">
                {category.items.map((item) => {
                  const itemId = item.id || item.term_zh;
                  return (
                    <LearningCard
                      key={itemId}
                      item={item as any}
                      language={appData.meta.target_language}
                      playbackRate={playbackRate}
                      isBookmarked={bookmarkedIds.includes(itemId)}
                      onToggleBookmark={toggleBookmark}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8 mt-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-2">{appData.meta.description}</p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
            <div className="w-2 h-2 rounded-full bg-[#1F2937]"></div>
          </div>
        </div>
      </footer>

      {quizQuestions && (
        <QuizOverlay
          key={quizKey}
          questions={quizQuestions}
          language={appData.meta.target_language}
          progressData={progressData}
          onClose={() => setQuizQuestions(null)}
          onRecordAttempt={recordAttempt}
          onRestart={(questions) => {
            setQuizQuestions(questions);
            setQuizKey(prev => prev + 1);
          }}
          onViewStats={() => {
            setQuizQuestions(null);
            setIsStatsOpen(true);
          }}
        />
      )}

      {isStatsOpen && (
        <StatsOverlay
          progressData={progressData}
          categories={appData.categories}
          onClose={() => setIsStatsOpen(false)}
        />
      )}
    </div>
  );
};

export default App;