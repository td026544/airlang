export interface Segment {
  text: string;
  meaning: string;
  tail: string;
}

export interface Example {
  sentence: string;
  translation: string;
  segments?: Segment[];
}

export interface RelatedTerm {
  term_target: string; // 單字保留在這裡面
  pronunciation: string[];
  specific_note?: string;
  segments?: Segment[];
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

export interface UserProgress {
  item_id: string;
  proficiency_level: number; // 0 to 5 for SM-2
  easiness_factor: number; // SM-2 Easiness Factor (default 2.5)
  interval: number; // Days until next review
  next_review_date: string; // ISO String
  correct_count: number;
  wrong_count: number;
}

export type QuizMode = 'A' | 'B' | 'C'; // A: Flashcard, B: Multiple Choice, C: Fill in the blank

export interface QuizQuestion {
  id: string;
  item: LearningItem;
  mode: QuizMode;
  // For Mode B:
  questionText?: string;
  options?: string[]; // Distractors + correct answer
  correctOption?: string;
  // For Mode C:
  prompt?: string;
  sentenceWithBlank?: string;
  correctAnswer?: string;
}