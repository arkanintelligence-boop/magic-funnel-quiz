import { useState } from "react";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { OptionCard } from "@/components/quiz/OptionCard";
import { QuizButton } from "@/components/quiz/QuizButton";
import { QuizData } from "@/data/quizData";

interface StepBenefitsProps {
  data: QuizData;
  onNext: (value: string[]) => void;
  progress: number;
}

const options = [
  { value: "emagrecer", label: "Emagrecer sem esforço e sem efeito sanfona", emoji: "👍" },
  { value: "sono", label: "Sono mais profundo", emoji: "👍" },
  { value: "energia", label: "Mais energia e disposição ao longo do dia", emoji: "👍" },
  { value: "autoestima", label: "Aumento da autoestima e confiança", emoji: "👍" },
  { value: "estresse", label: "Redução do estresse e ansiedade", emoji: "👍" },
];

export const StepBenefits = ({ data, onNext, progress }: StepBenefitsProps) => {
  const [selected, setSelected] = useState<string[]>(data.benefits || []);

  const toggleOption = (value: string) => {
    setSelected(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-4 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            <span className="text-primary">Quais desses benefícios</span> você gostaria de ter?
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Vamos personalizar a sua fórmula para maximizar os resultados.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 mb-6">
          {options.map((option) => (
            <OptionCard
              key={option.value}
              onClick={() => toggleOption(option.value)}
              selected={selected.includes(option.value)}
              icon={option.emoji}
              showCheckbox
            >
              {option.label}
            </OptionCard>
          ))}
        </div>
        
        <QuizButton onClick={() => onNext(selected)} disabled={selected.length === 0}>
          Continuar
        </QuizButton>
      </div>
    </QuizLayout>
  );
};
