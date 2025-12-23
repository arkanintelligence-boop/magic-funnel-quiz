import { QuizLayout } from "@/components/quiz/QuizLayout";
import { OptionCard } from "@/components/quiz/OptionCard";
import { QuizData } from "@/data/quizData";

interface StepWeightToLoseProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

const options = [
  { value: "ate5kg", label: "Até 5 kg" },
  { value: "6a10kg", label: "De 6 a 10 kg" },
  { value: "11a15kg", label: "De 11 a 15 kg" },
  { value: "16a20kg", label: "De 16 a 20 kg" },
  { value: "mais20kg", label: "Mais de 20 kg" },
];

export const StepWeightToLose = ({ data, onNext, progress }: StepWeightToLoseProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-6 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            Quantos quilos você
          </h1>
          <h2 className="text-xl font-extrabold text-primary">
            deseja perder?
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Escolha a opção abaixo.
          </p>
        </div>
        
        <p className="text-center text-sm text-muted-foreground mb-6 underline">
          O protocolo Mounjaro de Pobre ajuda a eliminar gordura de forma acelerada.
        </p>
        
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <OptionCard
              key={option.value}
              onClick={() => onNext(option.value)}
              selected={data.weightToLose === option.value}
            >
              {option.label}
            </OptionCard>
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};
