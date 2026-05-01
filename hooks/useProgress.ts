import { useState, useEffect } from 'react';
import { UserProgress } from '../types';

const STORAGE_KEY = 'vnn_user_progress';

export const useProgress = () => {
  const [progressData, setProgressData] = useState<Record<string, UserProgress>>({});

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure format is Record<string, UserProgress>
        if (Array.isArray(parsed)) {
          const record: Record<string, UserProgress> = {};
          parsed.forEach((p: UserProgress) => {
            record[p.item_id] = p;
          });
          setProgressData(record);
        } else {
          setProgressData(parsed);
        }
      } catch (e) {
        console.error('Failed to parse progress data', e);
      }
    }
  }, []);

  const saveProgressData = (newData: Record<string, UserProgress>) => {
    setProgressData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  };

  /**
   * SM-2 Algorithm update function.
   * @param itemId The learning item ID
   * @param quality 0-5 scale. 
   *   5: Perfect response
   *   4: Correct response after a hesitation
   *   3: Correct response recalled with serious difficulty
   *   2: Incorrect response; where the correct one seemed easy to recall
   *   1: Incorrect response; the correct one remembered
   *   0: Complete blackout
   */
  const recordAttempt = (itemId: string, quality: number) => {
    setProgressData(prev => {
      const current = prev[itemId] || {
        item_id: itemId,
        proficiency_level: 0, // Maps to 'repetitions' in SM-2
        easiness_factor: 2.5,
        interval: 0,
        next_review_date: new Date().toISOString(),
        correct_count: 0,
        wrong_count: 0
      };

      let { proficiency_level: repetitions, easiness_factor: ef, interval } = current;
      const { correct_count, wrong_count } = current;

      if (quality >= 3) {
        // Correct response
        if (repetitions === 0) {
          interval = 1;
        } else if (repetitions === 1) {
          interval = 6;
        } else {
          interval = Math.round(interval * ef);
        }
        repetitions += 1;
      } else {
        // Incorrect response
        repetitions = 0;
        interval = 1;
      }

      ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
      if (ef < 1.3) {
        ef = 1.3;
      }

      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + interval);

      const newData = { ...prev };
      newData[itemId] = {
        item_id: itemId,
        proficiency_level: repetitions,
        easiness_factor: ef,
        interval: interval,
        next_review_date: nextDate.toISOString(),
        correct_count: quality >= 3 ? correct_count + 1 : correct_count,
        wrong_count: quality < 3 ? wrong_count + 1 : wrong_count,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      return newData;
    });
  };

  return {
    progressData,
    recordAttempt
  };
};
