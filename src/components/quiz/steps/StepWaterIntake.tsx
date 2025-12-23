import { QuizLayout } from "@/components/quiz/QuizLayout";
import { OptionCard } from "@/components/quiz/OptionCard";
import { QuizData } from "@/data/quizData";

interface StepWaterIntakeProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

const options = [
  { value: "cafe", label: "Bebo apenas café ou chá", emoji: "☕" },
  { value: "1a2", label: "1-2 copos por dia", emoji: "🥤" },
  { value: "2a6", label: "2-6 copos por dia", emoji: "🥤" },
  { value: "mais6", label: "Mais de 6 copos", emoji: "🥤" },
];

export const StepWaterIntake = ({ data, onNext, progress }: StepWaterIntakeProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-4 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            <span className="text-primary">Quantos copos de água</span> você bebe por dia?
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Seu nível de hidratação também influencia na sua perda de peso.
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <OptionCard
              key={option.value}
              onClick={() => onNext(option.value)}
              selected={data.waterIntake === option.value}
              icon={option.emoji}
            >
              {option.label}
            </OptionCard>
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};
