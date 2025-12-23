import { QuizLayout } from "@/components/quiz/QuizLayout";
import { OptionCard } from "@/components/quiz/OptionCard";
import { QuizData } from "@/data/quizData";

interface StepRoutineProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

const options = [
  { value: "fora", label: "Trabalho fora e tenho uma rotina agitada", emoji: "🏃‍♀️" },
  { value: "casa_flexivel", label: "Trabalho em casa e tenho uma rotina flexível", emoji: "🧐" },
  { value: "casa_familia", label: "Fico em casa cuidando da família", emoji: "🙂" },
  { value: "outro", label: "Outro", emoji: "🤗" },
];

export const StepRoutine = ({ data, onNext, progress }: StepRoutineProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-4 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            Como é o seu dia a dia?
          </h1>
          <p className="text-primary text-sm mt-2">
            Sua rotina diária também faz diferença!
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <OptionCard
              key={option.value}
              onClick={() => onNext(option.value)}
              selected={data.routine === option.value}
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
