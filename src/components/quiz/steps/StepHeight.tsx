import { useState } from "react";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizInput } from "@/components/quiz/QuizInput";
import { QuizButton } from "@/components/quiz/QuizButton";
import { QuizData } from "@/data/quizData";
import { Ruler } from "lucide-react";

interface StepHeightProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

export const StepHeight = ({ data, onNext, progress }: StepHeightProps) => {
  const [height, setHeight] = useState(data.height);

  const handleSubmit = () => {
    if (height.trim()) {
      onNext(height.trim());
    }
  };

  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-4 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            Qual é a <span className="text-primary">sua altura?</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Isso nos ajudará a calcular a quantidade exata do Mounjaro de pobre para seu corpo.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <QuizInput
            icon={<Ruler className="w-5 h-5" />}
            placeholder="Digite sua altura aqui"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          
          <QuizButton onClick={handleSubmit} disabled={!height.trim()}>
            Continuar
          </QuizButton>
        </div>
      </div>
    </QuizLayout>
  );
};
