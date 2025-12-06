import React from 'react';
import { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  onSelectCategory: (id: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  onSelectCategory 
}) => {
  return (
    <nav className="w-full">
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
              bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-600 hover:shadow-sm
              active:bg-emerald-50 active:scale-95
            "
          >
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;