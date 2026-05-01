import { LearningItem, QuizQuestion, QuizMode, UserProgress } from '../types';

/**
 * Shuffles an array in place
 */
function shuffle<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

/**
 * Generates a set of quiz questions based on spaced repetition progress
 */
export const generateQuiz = (
  allItems: LearningItem[],
  progressData: Record<string, UserProgress>,
  count: number = 10
): QuizQuestion[] => {
  if (!allItems || allItems.length === 0) return [];

  const now = new Date();
  
  // 1. Identify due items, new items, and already reviewed future items
  const dueItems: LearningItem[] = [];
  const newItems: LearningItem[] = [];
  const futureItems: LearningItem[] = [];

  allItems.forEach(item => {
    const p = progressData[item.id || item.term_zh];
    if (!p) {
      newItems.push(item);
    } else {
      const reviewDate = new Date(p.next_review_date);
      if (reviewDate <= now) {
        dueItems.push(item);
      } else {
        futureItems.push(item);
      }
    }
  });

  // 2. Select items to quiz (prioritize due items, then new items, then random future items)
  let selectedItems: LearningItem[] = [];
  
  // Shuffle to randomize selection within groups
  const shuffledDue = shuffle(dueItems);
  const shuffledNew = shuffle(newItems);
  const shuffledFuture = shuffle(futureItems);

  selectedItems = [...shuffledDue];
  if (selectedItems.length < count) {
    selectedItems = [...selectedItems, ...shuffledNew];
  }
  if (selectedItems.length < count) {
    selectedItems = [...selectedItems, ...shuffledFuture];
  }
  
  // Truncate to desired count
  selectedItems = selectedItems.slice(0, count);

  // 3. Generate a question for each selected item
  return selectedItems.map(item => {
    // Determine possible modes
    let availableModes: QuizMode[] = ['A', 'B'];
    
    // Check if mode C is possible (has examples and target exists in sentence)
    let validExampleForC = null;
    let targetForC = '';
    
    if (item.examples && item.examples.length > 0 && item.related_terms && item.related_terms.length > 0) {
      const target = item.related_terms[0].term_target;
      // Find an example where the target exists in the sentence (case insensitive)
      const regex = new RegExp(target, 'i');
      validExampleForC = item.examples.find(ex => regex.test(ex.sentence));
      if (validExampleForC) {
        targetForC = target;
        availableModes.push('C');
      }
    }

    // Pick random mode
    const mode = availableModes[Math.floor(Math.random() * availableModes.length)];

    const questionId = `${item.id || item.term_zh}_${new Date().getTime()}_${Math.random()}`;

    if (mode === 'A') {
      return {
        id: questionId,
        item,
        mode: 'A'
      };
    } else if (mode === 'B') {
      // Pick random specific note
      const termWithNote = item.related_terms.find(rt => rt.specific_note);
      let qText = item.term_zh;
      if (termWithNote && termWithNote.specific_note) {
        qText += ` (${termWithNote.specific_note})`;
      }

      const correctAns = item.related_terms[0]?.term_target || '';
      
      // Get 3 distractors
      const otherItems = allItems.filter(x => (x.id || x.term_zh) !== (item.id || item.term_zh));
      const shuffledOthers = shuffle(otherItems);
      const distractorItems = shuffledOthers.slice(0, 3);
      const distractors = distractorItems.map(x => x.related_terms[0]?.term_target || x.term_zh);
      
      // Fill missing distractors if there aren't enough items
      while (distractors.length < 3) {
        distractors.push(`Distractor ${distractors.length + 1}`);
      }

      const options = shuffle([correctAns, ...distractors]);

      return {
        id: questionId,
        item,
        mode: 'B',
        questionText: qText,
        correctOption: correctAns,
        options
      };
    } else {
      // Mode C
      const regex = new RegExp(targetForC, 'i');
      const blankedSentence = validExampleForC!.sentence.replace(regex, '____');
      
      // Get 3 distractors
      const correctAns = targetForC;
      const otherItems = allItems.filter(x => (x.id || x.term_zh) !== (item.id || item.term_zh));
      const shuffledOthers = shuffle(otherItems);
      const distractorItems = shuffledOthers.slice(0, 3);
      const distractors = distractorItems.map(x => x.related_terms[0]?.term_target || x.term_zh);
      
      // Fill missing distractors
      while (distractors.length < 3) {
        distractors.push(`Distractor ${distractors.length + 1}`);
      }

      const options = shuffle([correctAns, ...distractors]);

      return {
        id: questionId,
        item,
        mode: 'C',
        prompt: validExampleForC!.translation,
        sentenceWithBlank: blankedSentence,
        correctAnswer: targetForC,
        correctOption: correctAns,
        options
      };
    }
  });
};
