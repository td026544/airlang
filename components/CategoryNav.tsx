import React, { useEffect, useRef } from 'react';

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
    }
  }, [activeCategoryId]);

  return (
    <nav className="w-full relative">
      <div 
        ref={scrollContainerRef}
        className="
          flex flex-nowrap gap-2 overflow-x-auto pb-2
          -mx-4 px-4 sm:mx-0 sm:px-0
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
      
      {/* 修正處：
         1. -right-4 : 抵銷外層容器的 px-4，貼齊螢幕邊緣
         2. from-white : 配合 Header 的背景色，避免出現灰色髒髒的邊界
         3. w-12 : 稍微加寬漸層範圍，視覺更柔和
      */}
      <div className="absolute top-0 bottom-2 w-12 -right-4 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
    </nav>
  );
};

export default CategoryNav;