import { QuizLayout } from "@/components/quiz/QuizLayout";
import { OptionCard } from "@/components/quiz/OptionCard";
import { QuizData } from "@/data/quizData";

interface StepHappyWithAppearanceProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

const options = [
  { value: "nao_peso", label: "Não, porque me sinto acima do peso", emoji: "😞" },
  { value: "sim_melhorar", label: "Sim, mas sei que posso melhorar minha saúde", emoji: "💕" },
  { value: "nao_bem_estar", label: "Não, gostaria de perder peso para melhorar meu bem-estar", emoji: "🥺" },
];

export const StepHappyWithAppearance = ({ data, onNext, progress }: StepHappyWithAppearanceProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-8 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            Você está realmente <span className="text-primary">feliz</span> com <span className="text-primary">sua aparência?</span>
          </h1>
        </div>
        
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <OptionCard
              key={option.value}
              onClick={() => onNext(option.value)}
              selected={data.happyWithAppearance === option.value}
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
