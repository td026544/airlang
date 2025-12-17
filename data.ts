import { englishData } from './langs/en';
import { japaneseData } from './langs/jp';
import { spanishData } from './langs/es';
import { vietnameseData } from './langs/vn';
import { thaiData } from './langs/th';
import { germanData } from './langs/de';
import { koreanData } from './langs/kr';
import { russianData } from './langs/ru';
import { indonesianData } from './langs/id';
import { frenchData } from './langs/fr';
import { italianData } from './langs/it';
import { portugueseData } from './langs/pt';



import { AppData } from './types';

// Define available datasets
export const datasets: Record<string, AppData> = {
  en: englishData,
  jp: japaneseData,
  es: spanishData,
  vn:vietnameseData,
  de:germanData,
  kr:koreanData,
  th:thaiData,
  ru:russianData,
  id:indonesianData,
  fr:frenchData,
  it:italianData,
  pt:portugueseData,
};

// Configuration for the UI language selector
export const LANGUAGE_OPTIONS = [
{ code: 'en', label: '英文', flag: '🇺🇸' },
  { code: 'vn', label: '越南語', flag: '🇻🇳' },
  { code: 'jp', label: '日文', flag: '🇯🇵' },
  { code: 'es', label: '西班牙文', flag: '🇪🇸' },
  { code: 'kr', label: '韓文', flag: '🇰🇷' },
  { code: 'th', label: '泰文', flag: '🇹🇭' },
  { code: 'de', label: '德文', flag: '🇩🇪' },
  { code: 'ru', label: '俄文', flag: '🇷🇺' },
  { code: 'id', label: '印尼語', flag: '🇮🇩' },
  { code: 'fr', label: '法文', flag: '🇫🇷' },
  { code: 'it', label: '義大利文', flag: '🇮🇹' }, // 新增義大利文
  { code: 'pt', label: '葡萄牙文', flag: '🇵🇹' }, // 新增葡萄牙文
];

// Default export for backward compatibility if needed, though App.tsx uses datasets now
export const appData = englishData;