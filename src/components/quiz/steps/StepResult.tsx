import { useEffect, useState } from "react";
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
  const [displayPercentage, setDisplayPercentage] = useState(0);

  // User requested fixed value of 21.60 and progress to stop before "Sobrepeso"
  const bmi = 21.60;
  const bmiPercentage = 70; // 70% is right before the 75% mark where Overweight starts

  useEffect(() => {
    let current = 0;
    const target = bmiPercentage;
    const duration = 5000; // 5 seconds total
    const intervalTime = duration / target; // ~71ms per %

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += 1;
        if (current >= target) {
          setDisplayPercentage(target);
          clearInterval(interval);
        } else {
          setDisplayPercentage(current);
        }
      }, intervalTime);
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
  }, [bmiPercentage]);

  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col animate-fade-in pb-10">
        <div className="text-center mb-6 mt-4">
          <h1 className="text-lg font-black text-foreground leading-tight">
            {data.name || "Você"}, veja como o <span className="text-primary">Mounjaro de Pobre</span> está
          </h1>
          <h2 className="text-lg font-black text-foreground leading-tight">
            transformando vidas e veja os <span className="text-primary">resultados da nossa</span>
          </h2>
          <h3 className="text-lg font-black text-primary leading-tight">
            comunidade!
          </h3>
        </div>

        <h4 className="text-center font-bold mb-4 text-[#222] text-sm tracking-tight opacity-90">
          Índice de Massa Corporal (IMC)
        </h4>

        {/* IMC Card */}
        <div
          className="rounded-2xl p-6 mb-8 relative overflow-hidden shadow-2xl border-b-4 border-black/10"
          style={{
            background: 'linear-gradient(to right, #064e3b, #42462e, #b91c1c)',
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0),
              linear-gradient(to right, #064e3b, #4b4b24, #b91c1c)
            `,
            backgroundSize: '16px 16px, 100% 100%'
          }}
        >
          <div className="flex justify-between items-center mb-10 relative z-10">
            <span className="text-white font-bold text-lg">Seu IMC é: {bmi.toFixed(2)}</span>
            <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[11px] font-bold">
              <AlertTriangle className="w-3.5 h-3.5 text-orange-400 fill-orange-400/20" />
              <span>Zona de Alerta</span>
            </div>
          </div>

          <div className="relative h-2.5 mb-8 mx-1">
            {/* Background Track */}
            <div className="absolute inset-0 bg-black/20 rounded-full" />

            {/* Filled Track */}
            <div
              className="absolute left-0 top-0 h-full bg-[#4ade80] rounded-full transition-all duration-300 ease-linear"
              style={{ width: `${displayPercentage}%` }}
            />

            {/* Progress Handle & Tooltip */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ease-linear z-20"
              style={{ left: `${displayPercentage}%` }}
            >
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap animate-bounce-subtle">
                Você está aqui
                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rotate-45" />
              </div>

              {/* Handle with Inner Dot */}
              <div className="w-6 h-6 bg-white rounded-full border-[3px] border-[#166534] shadow-lg flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#166534] rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex justify-between text-[11px] font-bold text-white relative z-10 opacity-90">
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
