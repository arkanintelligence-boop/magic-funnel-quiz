import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizData } from "@/data/quizData";
import age1827 from "@/assets/quiz/age-18-27.webp";
import age2839 from "@/assets/quiz/age-28-39.webp";
import age4054 from "@/assets/quiz/age-40-54.webp";
import age55plus from "@/assets/quiz/age-55-plus.webp";

interface StepAgeProps {
  data: QuizData;
  onNext: (value: string) => void;
}

const ageOptions = [
  { value: "18-27", label: "18-27", image: age1827 },
  { value: "28-39", label: "28-39", image: age2839 },
  { value: "40-54", label: "40-54", image: age4054 },
  { value: "54+", label: "54+", image: age55plus },
];

export const StepAge = ({ data, onNext }: StepAgeProps) => {
  return (
    <QuizLayout progress={0} showProgress={false}>
      <div className="flex-1 flex flex-col items-center justify-center animate-fade-in">
        <h1 className="text-2xl font-extrabold text-foreground text-center mb-2">
          Antes de começar...
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Qual é a sua idade?
        </p>

        <div className="grid grid-cols-2 gap-4 w-full">
          {ageOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onNext(option.value)}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-border bg-card shadow-sm hover:border-primary/50 hover:shadow-lg active:scale-[0.98] transition-all duration-200"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={option.image}
                  alt={`Idade ${option.label}`}
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
