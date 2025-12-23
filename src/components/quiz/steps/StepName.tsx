import { useState } from "react";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizInput } from "@/components/quiz/QuizInput";
import { QuizButton } from "@/components/quiz/QuizButton";
import { QuizData } from "@/data/quizData";
import { User } from "lucide-react";

interface StepNameProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

export const StepName = ({ data, onNext, progress }: StepNameProps) => {
  const [name, setName] = useState(data.name);

  const handleSubmit = () => {
    if (name.trim()) {
      onNext(name.trim());
    }
  };

  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-8 mt-4">
          <h1 className="text-2xl font-extrabold text-foreground">
            Qual seu nome?
          </h1>
        </div>
        
        <div className="flex flex-col gap-4">
          <QuizInput
            icon={<User className="w-5 h-5" />}
            placeholder="Digite seu nome aqui"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          
          <QuizButton onClick={handleSubmit} disabled={!name.trim()}>
            Continuar
          </QuizButton>
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          Para montar seu plano personalizado, precisamos do seu nome. Fique tranquila, seus dados estão protegidos 🔒
        </p>
      </div>
    </QuizLayout>
  );
};
