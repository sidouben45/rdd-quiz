import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Question } from '@/data/conceptQuestions';
import { Home, ChevronLeft, ChevronRight, CheckCircle, Terminal, Network, XCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswers: string[];
  onSelectAnswer: (label: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
  onFinish: () => void;
  isLast: boolean;
  isFirst: boolean;
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswers,
  onSelectAnswer,
  onNext,
  onPrev,
  onHome,
  onFinish,
  isLast,
  isFirst
}: QuizQuestionProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const progress = (questionNumber / totalQuestions) * 100;
  const isCli = question.category === 'cli';

  // Reset feedback when question changes
  useEffect(() => {
    setShowFeedback(false);
  }, [question.id]);

  const isCorrect = 
    selectedAnswers.length === question.correctAnswers.length &&
    selectedAnswers.every(a => question.correctAnswers.includes(a));

  const handleCheckAnswer = () => {
    setShowFeedback(true);
  };

  const handleProceed = () => {
    if (isLast) {
      onFinish();
    } else {
      onNext();
    }
  };

  const getOptionStyle = (optionLabel: string) => {
    const isSelected = selectedAnswers.includes(optionLabel);
    const isCorrectAnswer = question.correctAnswers.includes(optionLabel);

    if (showFeedback) {
      if (isCorrectAnswer) {
        return 'border-green-500 bg-green-500/20 ring-2 ring-green-500/50';
      }
      if (isSelected && !isCorrectAnswer) {
        return 'border-red-500 bg-red-500/20 ring-2 ring-red-500/50';
      }
      return 'border-border bg-secondary/30 opacity-60';
    }

    if (isSelected) {
      return 'border-primary bg-primary/10 glow';
    }
    return 'border-border hover:border-primary/50 bg-secondary/30 hover:bg-secondary/50';
  };

  const getOptionIcon = (optionLabel: string) => {
    const isSelected = selectedAnswers.includes(optionLabel);
    const isCorrectAnswer = question.correctAnswers.includes(optionLabel);

    if (showFeedback) {
      if (isCorrectAnswer) {
        return <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />;
      }
      if (isSelected && !isCorrectAnswer) {
        return <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />;
      }
      return null;
    }

    if (isSelected) {
      return <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />;
    }
    return null;
  };

  return (
    <div className="min-h-screen network-grid flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onHome} className="text-muted-foreground hover:text-foreground">
            <Home className="w-4 h-4 mr-2" />
            Accueil
          </Button>
          <div className="flex items-center gap-2">
            {isCli ? (
              <Terminal className="w-4 h-4 text-purple-400" />
            ) : (
              <Network className="w-4 h-4 text-primary" />
            )}
            <span className="text-sm font-medium">
              {isCli ? 'CLI' : 'Concept'}
            </span>
          </div>
          <span className="text-sm font-mono text-muted-foreground">
            {questionNumber}/{totalQuestions}
          </span>
        </div>
        <div className="h-1 bg-secondary">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Question */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <div className="glass-card rounded-2xl p-6 md:p-8">
          <div className="mb-6">
            {question.isMultipleChoice && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent mb-3">
                Choix multiple
              </span>
            )}
            <h2 className={`text-lg md:text-xl font-semibold leading-relaxed ${isCli ? 'font-mono text-base' : ''}`}>
              {question.question}
            </h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option) => {
              const isSelected = selectedAnswers.includes(option.label);
              return (
                <button
                  key={option.label}
                  onClick={() => !showFeedback && onSelectAnswer(option.label)}
                  disabled={showFeedback}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-start gap-3 ${getOptionStyle(option.label)} ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${
                    showFeedback && question.correctAnswers.includes(option.label)
                      ? 'bg-green-500 text-white'
                      : showFeedback && isSelected && !question.correctAnswers.includes(option.label)
                      ? 'bg-red-500 text-white'
                      : isSelected
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {option.label}
                  </span>
                  <span className={`flex-1 ${isCli ? 'font-mono text-sm' : ''}`}>
                    {option.text}
                  </span>
                  {getOptionIcon(option.label)}
                </button>
              );
            })}
          </div>

          {/* Feedback Section */}
          {showFeedback && (
            <div className={`mt-6 p-4 rounded-xl border-2 ${isCorrect ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg font-semibold text-green-500">Correct !</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-500" />
                    <span className="text-lg font-semibold text-red-500">Incorrect</span>
                  </>
                )}
              </div>
              
              {!isCorrect && (
                <div className="mb-3">
                  <span className="text-sm text-muted-foreground">Réponse(s) correcte(s) : </span>
                  <span className="font-semibold text-green-400">
                    {question.correctAnswers.join(', ')}
                  </span>
                </div>
              )}
              
              {question.justification && (
                <div className="pt-3 border-t border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Explication : </span>
                    {question.justification}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Navigation */}
      <footer className="sticky bottom-0 bg-background/80 backdrop-blur-xl border-t border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={onPrev}
            disabled={isFirst}
            className="flex-1 md:flex-none"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Précédent
          </Button>
          
          {!showFeedback ? (
            <Button
              onClick={handleCheckAnswer}
              disabled={selectedAnswers.length === 0}
              className="flex-1 md:flex-none"
            >
              Vérifier
              <CheckCircle className="w-4 h-4 ml-2" />
            </Button>
          ) : isLast ? (
            <Button
              onClick={handleProceed}
              className="flex-1 md:flex-none bg-gradient-to-r from-accent to-primary hover:opacity-90"
            >
              Terminer
              <CheckCircle className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleProceed}
              className="flex-1 md:flex-none"
            >
              Suivant
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}
