import React, { useState, useRef, useEffect } from 'react';
import { datasets, LANGUAGE_OPTIONS } from './data';
import CategoryNav from './components/CategoryNav';
import LearningCard from './components/LearningCard';
import { Languages, BookOpen, ChevronDown, Check } from 'lucide-react';

const App: React.FC = () => {
  // Default to English ('en') or Vietnamese ('vn') as preferred
  const [langCode, setLangCode] = useState<string>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const appData = datasets[langCode];
  const currentLangOption = LANGUAGE_OPTIONS.find(opt => opt.code === langCode) || LANGUAGE_OPTIONS[0];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleScrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 140; // Approx height of header + nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLanguageSelect = (code: string) => {
    setLangCode(code);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#1F2937]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 pt-4 pb-2 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between mb-4">
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
                title="Switch Language"
              >
                <span className="text-lg leading-none">{currentLangOption.flag}</span>
                <span className="hidden sm:inline">{currentLangOption.label}</span>
                <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
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

        {/* Chip Navigation */}
        <div className="max-w-3xl mx-auto px-4 pb-2">
           <CategoryNav 
             categories={appData.categories}
             onSelectCategory={handleScrollToCategory}
           />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 pb-20 pt-4">
        <div className="flex flex-col gap-10">
          {appData.categories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4 pl-1">
                <div className="h-6 w-1 bg-emerald-500 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-800">
                  {category.name}
                </h2>
                <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 mt-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-2">{appData.meta.description}</p>
          <p className="text-gray-300 text-xs">Version {appData.meta.version}</p>
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