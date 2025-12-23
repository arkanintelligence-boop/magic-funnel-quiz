import { QuizLayout } from "@/components/quiz/QuizLayout";
import { OptionCard } from "@/components/quiz/OptionCard";
import { QuizData } from "@/data/quizData";

interface StepSleepHoursProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

const options = [
  { value: "menos5", label: "Menos de 5 horas", emoji: "🏃‍♀️" },
  { value: "5a7", label: "Entre 5 e 7 horas", emoji: "🧐" },
  { value: "7a9", label: "Entre 7 e 9 horas", emoji: "🙂" },
  { value: "mais9", label: "Mais de 9 horas", emoji: "🤗" },
];

export const StepSleepHours = ({ data, onNext, progress }: StepSleepHoursProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-4 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            Quantas <span className="text-primary">horas de sono</span> você tem por noite?
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            A qualidade do seu sono impacta diretamente no seu emagrecimento!
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <OptionCard
              key={option.value}
              onClick={() => onNext(option.value)}
              selected={data.sleepHours === option.value}
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
