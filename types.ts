export interface Example {
  sentence: string;
  translation: string;
}

export interface RelatedTerm {
  term_target: string; // 單字保留在這裡面
  pronunciation: string[];
  specific_note?: string;
}

export interface LearningItem {
  id: string;
  term_zh: string;
  
  // ✅ 統一使用這個陣列儲存所有單字
  related_terms: RelatedTerm[]; 

  // ✅ 修改處：將 example 改為 examples 陣列
  examples: Example[]; 
  
  usage_note?: string;
  image_file: string;
}

export interface Category {
  id: string;
  name: string;
  items: LearningItem[];
}

export interface AppData {
  meta: {
    name?: string;
    source_language: string;
    target_language: string;
    version: string;
    description: string;
  };
  categories: Category[];
}