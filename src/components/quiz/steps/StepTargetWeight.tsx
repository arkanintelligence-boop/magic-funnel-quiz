import { useState } from "react";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizInput } from "@/components/quiz/QuizInput";
import { QuizButton } from "@/components/quiz/QuizButton";
import { QuizData } from "@/data/quizData";
import { Target } from "lucide-react";

interface StepTargetWeightProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

export const StepTargetWeight = ({ data, onNext, progress }: StepTargetWeightProps) => {
  const [weight, setWeight] = useState(data.targetWeight);

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
            Qual é o seu objetivo de peso (desejado)?
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Isso nos ajudará a personalizar um plano especificamente para você
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mb-4">
          <QuizInput
            icon={<Target className="w-5 h-5" />}
            placeholder="Digite seu peso desejado"
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
