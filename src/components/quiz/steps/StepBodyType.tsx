import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizData } from "@/data/quizData";
import bodyRegular from "@/assets/quiz/body-regular.png";
import bodyFlacido from "@/assets/quiz/body-flacido.png";
import bodySobrepeso from "@/assets/quiz/body-sobrepeso.png";

interface StepBodyTypeProps {
  data: QuizData;
  onNext: (value: string) => void;
  progress: number;
}

const options = [
  { value: "regular", label: "Regular", image: bodyRegular },
  { value: "flacido", label: "Flácido", image: bodyFlacido },
  { value: "sobrepeso", label: "Sobrepeso", image: bodySobrepeso },
];

export const StepBodyType = ({ data, onNext, progress }: StepBodyTypeProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-8 mt-4">
          <h1 className="text-xl font-extrabold text-foreground">
            Como você classificaria seu <span className="text-primary">corpo hoje?</span>
          </h1>
        </div>
        
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => onNext(option.value)}
              className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 hover:border-primary/50 hover:shadow-lg active:scale-[0.98] ${
                data.bodyType === option.value 
                  ? "border-primary bg-primary/5 shadow-lg" 
                  : "border-border bg-card shadow-sm"
              }`}
            >
              <span className="font-semibold text-foreground">{option.label}</span>
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.label} 
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};
