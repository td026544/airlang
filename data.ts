import { englishData } from './langs/en';
import { japaneseData } from './langs/jp';
import { spanishData } from './langs/es';
import { vietnameseData } from './langs/vn';
import { thaiData } from './langs/th';
import { germanData } from './langs/de';
import { koreanData } from './langs/kr';



import { AppData } from './types';

// Define available datasets
export const datasets: Record<string, AppData> = {
  en: englishData,
  jp: japaneseData,
  es: spanishData,
  vn:vietnameseData,
  de:germanData,
  kr:koreanData,
  th:thaiData
};

// Configuration for the UI language selector
export const LANGUAGE_OPTIONS = [
 { code: 'en', label: '英文', flag: '🇺🇸' },
{ code: 'vn', label: '越南語', flag: '🇻🇳' },
{ code: 'jp', label: '日文', flag: '🇯🇵' },
{ code: 'es', label: '西班牙文', flag: '🇪🇸' },
{ code: 'kr', label: '韓文', flag: '🇰🇷' },
{ code: 'th', label: '泰文', flag: '🇹🇭' },
{ code: 'de', label: '德文', flag: '🇩🇪' }, // 新增德文
];

// Default export for backward compatibility if needed, though App.tsx uses datasets now
export const appData = englishData;