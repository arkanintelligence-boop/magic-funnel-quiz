import { QuizLayout } from "@/components/quiz/QuizLayout";
import { OptionCard } from "@/components/quiz/OptionCard";
import { QuizData } from "@/data/quizData";

interface StepObstacleProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

const options = [
  { 
    value: "tempo", 
    label: "Falta de tempo", 
    description: "Rotina agitada",
    emoji: "⏰" 
  },
  { 
    value: "autocontrole", 
    label: "Autocontrole", 
    description: "Dificuldade em resistir a tentações alimentares",
    emoji: "🤔" 
  },
  { 
    value: "financeiro", 
    label: "Financeiro", 
    description: "Achar opções saudáveis mais caras do que alimentos processados",
    emoji: "💸" 
  },
];

export const StepObstacle = ({ data, onNext, progress }: StepObstacleProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-8 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            O que mais te <span className="text-red-accent">impede</span>
          </h1>
          <h2 className="text-xl font-extrabold text-primary">
            de emagrecer?
          </h2>
        </div>
        
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <OptionCard
              key={option.value}
              onClick={() => onNext(option.value)}
              selected={data.obstacle === option.value}
              icon={option.emoji}
            >
              <div className="flex flex-col">
                <span className="font-bold">{option.label}</span>
                <span className="text-sm text-muted-foreground">{option.description}</span>
              </div>
            </OptionCard>
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};
