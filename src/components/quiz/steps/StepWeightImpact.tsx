import { QuizLayout } from "@/components/quiz/QuizLayout";
import { OptionCard } from "@/components/quiz/OptionCard";
import { QuizData } from "@/data/quizData";

interface StepWeightImpactProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

const options = [
  { value: "fotos", label: "Evito tirar fotos porque tenho vergonha", emoji: "📷" },
  { value: "parceiro", label: "Meu parceiro não me olha mais com desejo como antes", emoji: "💔" },
  { value: "social", label: "Evito encontros sociais porque não me sinto bem comigo mesma", emoji: "😔" },
  { value: "nenhuma", label: "Nenhuma das opções", emoji: "👋" },
];

export const StepWeightImpact = ({ data, onNext, progress }: StepWeightImpactProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-8 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">{data.name || "Você"}</h1>
          <h2 className="text-xl font-extrabold text-foreground">
            Como o seu peso <span className="text-primary">impacta sua vida?</span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <OptionCard
              key={option.value}
              onClick={() => onNext(option.value)}
              selected={data.weightImpact === option.value}
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
