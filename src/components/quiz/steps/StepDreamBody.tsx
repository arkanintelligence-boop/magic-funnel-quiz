import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizData } from "@/data/quizData";
import dreamBodyFit from "@/assets/quiz/dream-body-fit.jpg";
import dreamBodyNatural from "@/assets/quiz/dream-body-natural.jpg";

interface StepDreamBodyProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

const options = [
  { value: "em_forma", label: "Em Forma", image: dreamBodyFit },
  { value: "natural", label: "Natural", image: dreamBodyNatural },
];

export const StepDreamBody = ({ data, onNext, progress }: StepDreamBodyProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-8 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            Qual o <span className="text-primary">corpo</span> dos
          </h1>
          <h2 className="text-xl font-extrabold text-foreground">
            seus <span className="text-primary">sonhos?</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2 underline">
            Escolha a opção abaixo:
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => onNext(option.value)}
              className="flex flex-col items-center gap-4 p-4 rounded-2xl border-2 border-border bg-card shadow-sm hover:border-primary/50 hover:shadow-lg active:scale-[0.98] transition-all duration-200"
            >
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.label} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-foreground">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};
