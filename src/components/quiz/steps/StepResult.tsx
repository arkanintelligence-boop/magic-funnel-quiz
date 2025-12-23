import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizButton } from "@/components/quiz/QuizButton";
import { QuizData } from "@/data/quizData";
import { AlertTriangle, Check, Info } from "lucide-react";
import resultTestimonial from "@/assets/quiz/result-testimonial.png";

interface StepResultProps {
  data: QuizData;
  onNext: () => void;
  progress: number;
}

export const StepResult = ({ data, onNext, progress }: StepResultProps) => {
  // Calculate BMI
  const heightNum = parseFloat(data.height) || 165;
  const weightNum = parseFloat(data.currentWeight) || 70;
  const heightM = heightNum > 3 ? heightNum / 100 : heightNum;
  const bmi = weightNum / (heightM * heightM);
  
  const getBmiCategory = () => {
    if (bmi < 18.5) return { label: "Abaixo do peso", color: "bg-blue-accent" };
    if (bmi < 25) return { label: "Normal", color: "bg-primary" };
    if (bmi < 30) return { label: "Sobrepeso", color: "bg-orange-accent" };
    return { label: "Obesidade", color: "bg-red-accent" };
  };

  const category = getBmiCategory();
  const bmiPercentage = Math.min(100, Math.max(0, ((bmi - 15) / 25) * 100));

  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in">
        <div className="text-center mb-4 mt-4">
          <h1 className="text-lg font-extrabold text-foreground">
            {data.name || "Você"}, veja como o <span className="text-primary">Mounjaro de Pobre</span> está
          </h1>
          <h2 className="text-lg font-extrabold text-foreground">
            transformando vidas e veja os <span className="text-primary">resultados da nossa</span>
          </h2>
          <h3 className="text-lg font-extrabold text-primary">
            comunidade!
          </h3>
        </div>
        
        <h4 className="text-center font-bold mb-4">Índice de Massa Corporal (IMC)</h4>
        
        {/* IMC Card */}
        <div className="bg-gradient-to-r from-green-dark via-primary to-red-accent rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-primary-foreground font-bold text-sm">Seu IMC é: {bmi.toFixed(2)}</span>
            <div className="flex items-center gap-1 text-primary-foreground text-xs">
              <AlertTriangle className="w-3 h-3" />
              <span>Zona de Alerta</span>
            </div>
          </div>
          <div className="bg-primary-foreground/20 rounded-full h-2 mb-2 relative">
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary-foreground rounded-full border-2 border-primary"
              style={{ left: `${bmiPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-primary-foreground/80">
            <span>Abaixo do peso</span>
            <span>Normal</span>
            <span>Sobrepeso</span>
          </div>
        </div>
        
        {/* Alert cards */}
        <div className="bg-green-dark rounded-xl p-4 mb-3">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
            <div className="text-primary-foreground">
              <h5 className="font-bold text-sm mb-1">Seu metabolismo pode estar te sabotando sem que você perceba!</h5>
              <p className="text-xs opacity-80">
                Mesmo estando no peso normal, seu corpo pode estar retendo toxinas e trabalhando de forma mais lenta, dificultando a queima de gordura e deixando você com menos energia.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-dark rounded-xl p-4 mb-3">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
            <div className="text-primary-foreground">
              <h5 className="font-bold text-sm mb-2">Alguns sinais de alerta:</h5>
              <ul className="text-xs space-y-1">
                <li className="flex items-start gap-1">
                  <span className="text-red-300">✗</span>
                  <span>Metabolismo lento e dificuldade para emagrecer mesmo comendo pouco.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-red-300">✗</span>
                  <span>Cansaço constante e sensação de inchaço.</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-red-300">✗</span>
                  <span>Acúmulo de gordura em áreas específicas do corpo, principalmente na barriga.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-green-dark rounded-xl p-4 mb-4">
          <div className="flex gap-3">
            <Check className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
            <div className="text-primary-foreground">
              <h5 className="font-bold text-sm mb-1">Com o Mounjaro de Pobre, seu corpo acelera a queima de gordura naturalmente!</h5>
              <p className="text-xs opacity-80 mb-2">
                A combinação ideal de ingredientes pode ativar seu metabolismo, reduzir a retenção de líquidos e aumentar sua disposição.
              </p>
              <p className="text-xs">
                🍵 Descubra agora como o Mounjaro de Pobre pode transformar seu corpo!
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-center text-sm text-muted-foreground mb-4">
          Veja a transformação da Carol!
        </p>
        
        {/* Transformation image */}
        <div className="rounded-xl overflow-hidden mb-6">
          <img 
            src={resultTestimonial} 
            alt="Transformação" 
            className="w-full h-auto"
          />
        </div>
        
        <QuizButton onClick={onNext}>
          Continuar
        </QuizButton>
      </div>
    </QuizLayout>
  );
};
