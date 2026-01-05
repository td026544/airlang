import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  items: any[];
}

interface CategoryNavProps {
  categories: Category[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  activeCategoryId, 
  onSelectCategory 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Map<string, HTMLButtonElement | null>>(new Map());
  
  // 新增：控制左右箭頭顯示的狀態
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // 檢查滾動位置，決定是否顯示箭頭
  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      // 容許 1px 的誤差
      setShowLeftArrow(scrollLeft > 1);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // 初始化與監聽視窗大小變化
  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, [categories]);

  // 當 activeCategoryId 改變時，自動捲動到該項目
  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeButton = itemsRef.current.get(activeCategoryId);

    if (container && activeButton) {
      const scrollLeft = 
        activeButton.offsetLeft - 
        (container.offsetWidth / 2) + 
        (activeButton.offsetWidth / 2);

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
      // 滾動後稍作延遲再檢查按鈕狀態 (等待平滑滾動結束)
      setTimeout(checkScrollButtons, 300);
    }
  }, [activeCategoryId]);

  // 手動點擊箭頭的滾動函式
  const scrollByAmount = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full relative group">
      
      {/* 左側箭頭按鈕 (只在電腦版顯示，且當可以往左滑時才顯示) */}
      {showLeftArrow && (
        <div className="hidden sm:flex absolute left-0 top-0 bottom-2 z-10 items-center bg-gradient-to-r from-white via-white to-transparent pr-4 pl-0">
          <button
            onClick={() => scrollByAmount('left')}
            className="p-1.5 rounded-full bg-white border border-gray-200 text-gray-600 shadow-md hover:text-emerald-600 hover:border-emerald-300 transition-colors"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      )}

      {/* 滾動容器 */}
      <div 
        ref={scrollContainerRef}
        onScroll={checkScrollButtons} // 綁定滾動事件
        className="
          flex flex-nowrap gap-2 overflow-x-auto pb-2
          -mx-4 px-4 sm:mx-0 sm:px-0
          scroll-smooth
          [&::-webkit-scrollbar]:hidden 
          [-ms-overflow-style:'none'] 
          [scrollbar-width:'none']
        "
      >
        {categories.map((cat) => {
          const isActive = cat.id === activeCategoryId;
          return (
            <button
              key={cat.id}
              ref={(el) => {
                if (el) itemsRef.current.set(cat.id, el);
                else itemsRef.current.delete(cat.id);
              }}
              onClick={() => onSelectCategory(cat.id)}
              className={`
                flex-shrink-0 whitespace-nowrap
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                active:scale-95
                ${isActive 
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-200' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-600'
                }
              `}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
      
      {/* 右側箭頭按鈕 (只在電腦版顯示，且當可以往右滑時才顯示) */}
      {showRightArrow && (
        <div className="hidden sm:flex absolute right-0 top-0 bottom-2 z-10 items-center bg-gradient-to-l from-white via-white to-transparent pl-4 pr-0">
          <button
            onClick={() => scrollByAmount('right')}
            className="p-1.5 rounded-full bg-white border border-gray-200 text-gray-600 shadow-md hover:text-emerald-600 hover:border-emerald-300 transition-colors"
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* 手機版專用的右側漸層遮罩 (保持原樣，僅在 sm 以下顯示) */}
      <div className="absolute top-0 bottom-2 w-12 -right-4 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
    </nav>
  );
};

export default CategoryNav;