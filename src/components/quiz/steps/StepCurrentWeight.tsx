import { useState } from "react";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizInput } from "@/components/quiz/QuizInput";
import { QuizButton } from "@/components/quiz/QuizButton";
import { QuizData } from "@/data/quizData";
import { Scale } from "lucide-react";

interface StepCurrentWeightProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

export const StepCurrentWeight = ({ data, onNext, progress }: StepCurrentWeightProps) => {
  const [weight, setWeight] = useState(data.currentWeight);

  const handleSubmit = () => {
    if (weight.trim()) {
      onNext(weight.trim());
    }
  };

  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-4 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            Qual é o seu <span className="text-primary">peso atual?</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Estamos quase lá! Vamos ajustar seu plano de acordo com seu corpo
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mb-4">
          <QuizInput
            icon={<Scale className="w-5 h-5" />}
            placeholder="Digite seu peso atual aqui"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            type="number"
          />
          
          <QuizButton onClick={handleSubmit} disabled={!weight.trim()}>
            Continuar
          </QuizButton>
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Baseado nisso, ajustaremos a dosagem ideal para os melhores resultados!
        </p>
      </div>
    </QuizLayout>
  );
};
