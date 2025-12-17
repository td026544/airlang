import React, { useState, useRef, useEffect } from 'react';
import { datasets, LANGUAGE_OPTIONS } from './data';
import CategoryNav from './components/CategoryNav';
import LearningCard from './components/LearningCard';
import { Languages, BookOpen, ChevronDown, Check } from 'lucide-react';

const App: React.FC = () => {
  const [langCode, setLangCode] = useState<string>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // 新增：目前所在的分類 ID
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');
  // 新增：用來鎖定滾動監聽的旗標 (當用戶點擊按鈕時，暫時不觸發 scrollspy)
  const isManualScrolling = useRef(false);

  const appData = datasets[langCode];
  const currentLangOption = LANGUAGE_OPTIONS.find(opt => opt.code === langCode) || LANGUAGE_OPTIONS[0];

  // 初始化 activeCategoryId
  useEffect(() => {
    if (appData.categories.length > 0) {
      setActiveCategoryId(appData.categories[0].id);
    }
  }, [appData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

// --- Scrollspy 核心邏輯 (修復版) ---
  useEffect(() => {
    const handleScroll = () => {
      // 1. 如果正在手動點擊滾動，暫停自動偵測，避免跳動
      if (isManualScrolling.current) return;

      // 2. 設定觸發線 (Trigger Line)
      // 這代表「標題滑過螢幕上方多少距離」後，才算切換到下一章
      // 建議設為 Header 高度 (約 140px) 再加一點緩衝
      const headerOffset = 180; 
      
      // 預設選中第一個
      let currentSectionId = appData.categories[0].id;

      // 3. 觸底檢測 (由下往上修復)
      // 如果已經滑到底部，強制選中最後一個分類 (解決最後一項內容太短無法觸發的問題)
      const scrolledToBottom = 
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (scrolledToBottom) {
        const lastCategory = appData.categories[appData.categories.length - 1];
        setActiveCategoryId(lastCategory.id);
        return;
      }

      // 4. 一般滾動偵測 (Top-Down Overwrite 策略)
      // 原理：遍歷所有分類，只要該分類的頂部已經「滑過」觸發線 (rect.top < headerOffset)，
      // 就暫時認定它是當前分類。因為迴圈是照順序跑的，最後一個符合條件的就會是正確答案。
      for (const cat of appData.categories) {
        const element = document.getElementById(cat.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // 如果元素的頂部位置小於觸發線，表示已經進入或經過該區塊
          if (rect.top < headerOffset) {
            currentSectionId = cat.id;
          }
        }
      }

      setActiveCategoryId(currentSectionId);
    };

    // 加入 passive: true 優化效能
    window.addEventListener('scroll', handleScroll, { passive: true });
    // 立即執行一次，確保重新整理後狀態正確
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [appData]); // 當資料改變時重新綁定


  const handleScrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 設定鎖定，防止滾動過程中 Nav 亂跳
      isManualScrolling.current = true;
      setActiveCategoryId(id); // 立即更新 UI

      const headerOffset = 160; // 確保標題不會被 Header 擋住
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // 滾動結束後解除鎖定 (約 500ms - 1000ms 後)
      setTimeout(() => {
        isManualScrolling.current = false;
      }, 800); 
    }
  };

  const handleLanguageSelect = (code: string) => {
    setLangCode(code);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#1F2937]">
      {/* Header 
          注意：這裡調整了 sticky 的結構，確保 CategoryNav 也是 sticky 的一部分
      */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 pt-4 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-xl text-white shadow-lg shadow-emerald-200">
              <Languages size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1F2937] tracking-tight">
                {appData.meta.name || 'Quick Learn'}
              </h1>
              <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
                {appData.meta.source_language} ➔ {appData.meta.target_language}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 items-center">
            {/* Language Dropdown */}
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

            <button className="text-emerald-600 bg-emerald-50 p-2 rounded-full hover:bg-emerald-100 transition-colors hidden sm:block">
              <BookOpen size={20} />
            </button>
          </div>
        </div>

        {/* Chip Navigation - 現在是 Header 的一部分，會一起吸頂 */}
        <div className="max-w-3xl mx-auto px-4 pb-3">
           <CategoryNav 
             categories={appData.categories}
             activeCategoryId={activeCategoryId} // 傳入目前 Active 的 ID
             onSelectCategory={handleScrollToCategory}
           />
        </div>
      </header>

      {/* Main Content */}
{/* Main Content */}
<main className="max-w-3xl mx-auto px-4 pb-20 pt-6">
  <div className="flex flex-col gap-12">
    {appData.categories.map((category) => (
      <section key={category.id} id={category.id} className="scroll-mt-40">
        {/* 修改處：
            移除了 "sticky top-36 md:static bg-[#F9FAFB] z-0"
            現在標題會隨著頁面正常滾動，不會吸附在上方
        */}
        <div className="flex items-center gap-3 mb-6 pl-1 border-l-4 border-emerald-500 py-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {category.name}
          </h2>
          <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
            {category.items.length}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {category.items.map((item) => (
            <LearningCard 
              key={item.id} 
              item={item} 
              language={appData.meta.target_language} 
            />
          ))}
        </div>
      </section>
    ))}
  </div>
</main>

      {/* Footer (保持不變) */}
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
    </div>
  );
};

export default App;