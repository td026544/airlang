export interface Example {
  sentence: string;
  translation: string;
}

export interface LearningItem {
  id: string;
  term_zh: string;
  term_target: string;
  pronunciation: string[];
  example: Example;
  usage_note: string;
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