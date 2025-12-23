import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizButton } from "@/components/quiz/QuizButton";
import { QuizData } from "@/data/quizData";
import beforeAfterFernanda from "@/assets/quiz/before-after-fernanda.jpg";
import profileFernanda from "@/assets/quiz/profile-fernanda.jpg";

interface StepTestimonialProps {
  data: QuizData;
  onNext: () => void;
  progress: number;
}

export const StepTestimonial = ({ data, onNext, progress }: StepTestimonialProps) => {
  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-6 mt-4">
          <h1 className="text-xl font-extrabold text-foreground flex items-center justify-center gap-2">
            <span>🔥</span> Histórias Reais de Transformação!
          </h1>
          <p className="text-primary text-sm mt-2 flex items-center justify-center gap-1">
            <span>📍</span> Depoimento: Fernanda – Porto Alegre-RS
          </p>
        </div>
        
        {/* Before/After image */}
        <div className="rounded-xl overflow-hidden mb-6">
          <img 
            src={beforeAfterFernanda} 
            alt="Antes e depois - Fernanda" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Testimonial card */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src={profileFernanda} 
                alt="Fernanda Oliveira" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Fernanda Oliveira</h3>
              <p className="text-xs text-muted-foreground">Porto Alegre, RS</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Eu já tinha tentado de tudo para emagrecer, mas nada funcionava. Depois de incluir a fórmula do Mounjaro de pobre na minha rotina, perdi 11kg sem mudar nada na minha alimentação! O mais incrível é que minha fome e ansiedade diminuíram naturalmente!
          </p>
          <div className="flex text-yellow-500">
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
        </div>
        
        <QuizButton onClick={onNext}>
          Continuar
        </QuizButton>
      </div>
    </QuizLayout>
  );
};
