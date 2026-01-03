import { useState, useCallback, useMemo } from 'react';
import { Question, conceptQuestions } from '@/data/conceptQuestions';
import { cliQuestions } from '@/data/cliQuestions';

export type QuizMode = 'concept' | 'cli' | 'mixed';
export type QuizState = 'home' | 'quiz' | 'results';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function useQuiz() {
  const [quizState, setQuizState] = useState<QuizState>('home');
  const [mode, setMode] = useState<QuizMode>('concept');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string[]>>({});

  const maxQuestions = useMemo(() => {
    switch (mode) {
      case 'concept': return conceptQuestions.length;
      case 'cli': return cliQuestions.length;
      case 'mixed': return conceptQuestions.length + cliQuestions.length;
    }
  }, [mode]);

  const startQuiz = useCallback(() => {
    let pool: Question[] = [];
    
    switch (mode) {
      case 'concept':
        pool = [...conceptQuestions];
        break;
      case 'cli':
        pool = [...cliQuestions];
        break;
      case 'mixed':
        pool = [...conceptQuestions, ...cliQuestions];
        break;
    }

    // Shuffle the pool
    const shuffledPool = shuffleArray(pool);
    
    // Select the number of questions
    const selectedQuestions = shuffledPool.slice(0, Math.min(questionCount, shuffledPool.length));
    
    // Shuffle the options for each question
    const questionsWithShuffledOptions = selectedQuestions.map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));

    setQuestions(questionsWithShuffledOptions);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setQuizState('quiz');
  }, [mode, questionCount]);

  const goToHome = useCallback(() => {
    setQuizState('home');
    setQuestions([]);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
  }, []);

  const selectAnswer = useCallback((questionId: string, answerLabel: string) => {
    setUserAnswers(prev => {
      const question = questions.find(q => q.id === questionId);
      if (!question) return prev;

      if (question.isMultipleChoice) {
        const currentAnswers = prev[questionId] || [];
        if (currentAnswers.includes(answerLabel)) {
          return {
            ...prev,
            [questionId]: currentAnswers.filter(a => a !== answerLabel)
          };
        } else {
          return {
            ...prev,
            [questionId]: [...currentAnswers, answerLabel]
          };
        }
      } else {
        return {
          ...prev,
          [questionId]: [answerLabel]
        };
      }
    });
  }, [questions]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex, questions.length]);

  const prevQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const finishQuiz = useCallback(() => {
    setQuizState('results');
  }, []);

  const calculateScore = useCallback(() => {
    let correct = 0;
    questions.forEach(q => {
      const userAnswer = userAnswers[q.id] || [];
      const isCorrect = 
        userAnswer.length === q.correctAnswers.length &&
        userAnswer.every(a => q.correctAnswers.includes(a));
      if (isCorrect) correct++;
    });
    return correct;
  }, [questions, userAnswers]);

  const currentQuestion = questions[currentQuestionIndex];

  return {
    quizState,
    mode,
    setMode,
    questionCount,
    setQuestionCount,
    maxQuestions,
    currentQuestionIndex,
    currentQuestion,
    questions,
    userAnswers,
    startQuiz,
    goToHome,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    finishQuiz,
    calculateScore
  };
}
