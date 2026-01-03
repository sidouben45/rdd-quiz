import { Button } from '@/components/ui/button';
import { Question } from '@/data/conceptQuestions';
import { Home, RotateCcw, CheckCircle, XCircle, Terminal, Network } from 'lucide-react';

interface QuizResultsProps {
  questions: Question[];
  userAnswers: Record<string, string[]>;
  score: number;
  onHome: () => void;
  onRestart: () => void;
}

export function QuizResults({ questions, userAnswers, score, onHome, onRestart }: QuizResultsProps) {
  const percentage = Math.round((score / questions.length) * 100);
  
  const getGrade = () => {
    if (percentage >= 90) return { text: 'Excellent!', color: 'text-accent' };
    if (percentage >= 70) return { text: 'Très Bien!', color: 'text-primary' };
    if (percentage >= 50) return { text: 'Passable', color: 'text-yellow-400' };
    return { text: 'À réviser', color: 'text-destructive' };
  };

  const grade = getGrade();

  return (
    <div className="min-h-screen network-grid">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold gradient-text">Résultats</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onHome}>
              <Home className="w-4 h-4 mr-2" />
              Accueil
            </Button>
            <Button size="sm" onClick={onRestart}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Recommencer
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Score Card */}
        <div className="glass-card rounded-2xl p-8 text-center mb-8 glow">
          <div className="text-6xl md:text-8xl font-bold mb-2">
            <span className="gradient-text">{score}</span>
            <span className="text-muted-foreground text-4xl md:text-5xl">/{questions.length}</span>
          </div>
          <div className={`text-2xl font-semibold ${grade.color}`}>{grade.text}</div>
          <div className="text-muted-foreground mt-2">{percentage}% de bonnes réponses</div>
        </div>

        {/* Questions Review */}
        <h2 className="text-xl font-semibold mb-4">Révision des Réponses</h2>
        <div className="space-y-4">
          {questions.map((q, idx) => {
            const userAnswer = userAnswers[q.id] || [];
            const isCorrect = 
              userAnswer.length === q.correctAnswers.length &&
              userAnswer.every(a => q.correctAnswers.includes(a));
            const isCli = q.category === 'cli';

            return (
              <div key={q.id} className={`glass-card rounded-xl p-5 border-l-4 ${isCorrect ? 'border-l-accent' : 'border-l-destructive'}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center font-mono text-sm">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {isCli ? (
                        <Terminal className="w-4 h-4 text-purple-400" />
                      ) : (
                        <Network className="w-4 h-4 text-primary" />
                      )}
                      <span className="text-xs text-muted-foreground">{isCli ? 'CLI' : 'Concept'}</span>
                      {isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-accent ml-auto" />
                      ) : (
                        <XCircle className="w-4 h-4 text-destructive ml-auto" />
                      )}
                    </div>
                    <p className={`font-medium ${isCli ? 'font-mono text-sm' : ''}`}>{q.question}</p>
                  </div>
                </div>

                <div className="ml-11 space-y-2">
                  {q.options.map(opt => {
                    const isUserAnswer = userAnswer.includes(opt.label);
                    const isCorrectAnswer = q.correctAnswers.includes(opt.label);
                    
                    let bgClass = 'bg-secondary/30';
                    if (isCorrectAnswer) bgClass = 'bg-accent/20 border border-accent/50';
                    else if (isUserAnswer && !isCorrectAnswer) bgClass = 'bg-destructive/20 border border-destructive/50';

                    return (
                      <div key={opt.label} className={`p-3 rounded-lg ${bgClass} flex items-center gap-2`}>
                        <span className="font-mono text-sm font-bold w-6">{opt.label}</span>
                        <span className={`flex-1 text-sm ${isCli ? 'font-mono' : ''}`}>{opt.text}</span>
                        {isCorrectAnswer && <span className="text-accent text-sm">✅</span>}
                        {isUserAnswer && !isCorrectAnswer && <span className="text-destructive text-sm">❌</span>}
                      </div>
                    );
                  })}
                  
                  {q.justification && (
                    <div className="mt-3 p-3 rounded-lg bg-primary/10 border border-primary/30">
                      <p className="text-sm text-primary">
                        <strong>Explication:</strong> {q.justification}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
