import { QuizLayout } from "@/components/quiz/QuizLayout";
import { OptionCard } from "@/components/quiz/OptionCard";
import { QuizData } from "@/data/quizData";

interface StepTargetAreaProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

const options = [
  { value: "culotes", label: "Região dos Culotes" },
  { value: "coxas", label: "Região das Coxas" },
  { value: "abdomen", label: "Região do Abdômen (barriga)" },
  { value: "gluteos", label: "Região dos Glúteos" },
  { value: "bracos", label: "Região dos Braços" },
];

export const StepTargetArea = ({ data, onNext, progress }: StepTargetAreaProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-8 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            Em qual área do seu corpo
          </h1>
          <h2 className="text-xl font-extrabold text-foreground">
            você gostaria de <span className="text-primary">reduzir</span>
          </h2>
          <h3 className="text-xl font-extrabold text-primary">
            mais gordura?
          </h3>
        </div>
        
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <OptionCard
              key={option.value}
              onClick={() => onNext(option.value)}
              selected={data.targetArea === option.value}
            >
              {option.label}
            </OptionCard>
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};
