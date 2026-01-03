import { Button } from "@/components/ui/button";
import { Network, Terminal, Shuffle, Play } from "lucide-react";
import { QuizMode } from "@/hooks/useQuiz";

interface QuizHomeProps {
  mode: QuizMode;
  setMode: (mode: QuizMode) => void;
  questionCount: number;
  setQuestionCount: (count: number) => void;
  maxQuestions: number;
  onStart: () => void;
}

const modeConfig = {
  concept: {
    icon: Network,
    label: "Concepts / Théorie",
    color: "concept",
    description: "Questions EMD",
  },
  cli: {
    icon: Terminal,
    label: "Commandes CLI",
    color: "cli",
    description: "Questions TP",
  },
  mixed: {
    icon: Shuffle,
    label: "Mode Mixte",
    color: "accent",
    description: "Toutes les questions",
  },
};

export function QuizHome({
  mode,
  setMode,
  questionCount,
  setQuestionCount,
  maxQuestions,
  onStart,
}: QuizHomeProps) {
  const questionOptions = [10, 20, 30, 50].filter((n) => n <= maxQuestions);

  return (
    <div className="min-h-screen network-grid flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center glow">
              <Network className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
            RDD Quiz
          </h1>
          <p className="text-xl text-muted-foreground">
            Réseau de Données — Préparation aux Examens
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-8 space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-foreground/90">
              Choisir le Mode
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {(
                Object.entries(modeConfig) as [
                  QuizMode,
                  typeof modeConfig.concept
                ][]
              ).map(([key, config]) => {
                const Icon = config.icon;
                const isActive = mode === key;
                return (
                  <button
                    key={key}
                    onClick={() => setMode(key)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      isActive
                        ? "border-primary bg-primary/10 glow"
                        : "border-border hover:border-primary/50 bg-secondary/30"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 mb-2 ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <div className="font-semibold text-sm">{config.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {config.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-foreground/90">
              Nombre de Questions{" "}
              <span className="text-muted-foreground font-normal">
                (max: {maxQuestions})
              </span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {questionOptions.map((num) => (
                <button
                  key={num}
                  onClick={() => setQuestionCount(num)}
                  className={`px-5 py-2.5 rounded-lg font-mono font-medium transition-all ${
                    questionCount === num
                      ? "bg-primary text-primary-foreground glow"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => setQuestionCount(maxQuestions)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  questionCount === maxQuestions
                    ? "bg-accent text-accent-foreground glow-accent"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                Tout ({maxQuestions})
              </button>
            </div>
          </div>

          <Button
            onClick={onStart}
            size="lg"
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity glow"
          >
            <Play className="w-5 h-5 mr-2" />
            Commencer le Quiz
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          180 questions vérifiées • EMD & TP
        </p>
      </div>
    </div>
  );
}
