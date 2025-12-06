import { englishData } from './langs/en';
import { vietnameseData } from './langs/vn';
import { japaneseData } from './langs/jp';
import { spanishData } from './langs/es';
import { koreanData } from './langs/kr';
import { thaiData } from './langs/th';
import { AppData } from './types';

// Define available datasets
export const datasets: Record<string, AppData> = {
  en: englishData,
  vn: vietnameseData,
  jp: japaneseData,
  es: spanishData,
  kr:koreanData,
  th:thaiData


};

// Configuration for the UI language selector
export const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'vn', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'jp', label: '日本語', flag: '🇯🇵' },
  { code:'es',label:'西班牙語',flag:'es'},
  { code:'kr',label:'韓語',flag:'kr'},
    { code:'th',label:'泰文',flag:'th'},
];

// Default export for backward compatibility if needed, though App.tsx uses datasets now
export const appData = vietnameseData;