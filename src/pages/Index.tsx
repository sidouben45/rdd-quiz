import { useQuiz } from '@/hooks/useQuiz';
import { QuizHome } from '@/components/quiz/QuizHome';
import { QuizQuestion } from '@/components/quiz/QuizQuestion';
import { QuizResults } from '@/components/quiz/QuizResults';

const Index = () => {
  const {
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
  } = useQuiz();

  if (quizState === 'home') {
    return (
      <QuizHome
        mode={mode}
        setMode={setMode}
        questionCount={questionCount}
        setQuestionCount={setQuestionCount}
        maxQuestions={maxQuestions}
        onStart={startQuiz}
      />
    );
  }

  if (quizState === 'quiz' && currentQuestion) {
    return (
      <QuizQuestion
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        selectedAnswers={userAnswers[currentQuestion.id] || []}
        onSelectAnswer={(label) => selectAnswer(currentQuestion.id, label)}
        onNext={nextQuestion}
        onPrev={prevQuestion}
        onHome={goToHome}
        onFinish={finishQuiz}
        isLast={currentQuestionIndex === questions.length - 1}
        isFirst={currentQuestionIndex === 0}
      />
    );
  }

  if (quizState === 'results') {
    return (
      <QuizResults
        questions={questions}
        userAnswers={userAnswers}
        score={calculateScore()}
        onHome={goToHome}
        onRestart={startQuiz}
      />
    );
  }

  return null;
};

export default Index;
