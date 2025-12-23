import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizButton } from "@/components/quiz/QuizButton";
import { QuizData } from "@/data/quizData";
import howItWorksImage from "@/assets/quiz/how-it-works.png";

interface StepHowItWorksProps {
  data: QuizData;
  onNext: () => void;
  progress: number;
}

export const StepHowItWorks = ({ data, onNext, progress }: StepHowItWorksProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-6 mt-4">
          <h2 className="text-lg font-bold text-foreground">Nosso protocolo</h2>
          <h3 className="text-lg font-bold text-primary">Resolve isso para você!</h3>
        </div>
        
        <div className="text-center mb-4">
          <h1 className="text-2xl font-black text-primary tracking-wide">
            COMO FUNCIONA O
          </h1>
          <h1 className="text-2xl font-black text-primary tracking-wide">
            MOUNJARO DE POBRE
          </h1>
        </div>
        
        {/* How it works image */}
        <div className="flex justify-center mb-6">
          <img 
            src={howItWorksImage} 
            alt="Como funciona o Mounjaro de Pobre" 
            className="w-full max-w-sm rounded-xl"
          />
        </div>
        
        <p className="text-center text-sm mb-6">
          <span className="text-primary font-bold">Mounjaro de pobre</span> age enquanto você dorme, <span className="text-primary font-bold">queimando gordura</span> de forma <span className="text-primary font-bold">acelerada!</span>
        </p>
        
        <QuizButton onClick={onNext}>
          Continuar
        </QuizButton>
      </div>
    </QuizLayout>
  );
};
