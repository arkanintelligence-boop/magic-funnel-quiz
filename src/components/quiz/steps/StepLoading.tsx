import { useEffect, useState } from "react";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizData } from "@/data/quizData";
import carousel1 from "@/assets/quiz/loading-carousel-1.jpg";
import carousel2 from "@/assets/quiz/loading-carousel-2.jpg";
import carousel3 from "@/assets/quiz/loading-carousel-3.jpg";
import carousel4 from "@/assets/quiz/loading-carousel-4.jpg";

interface StepLoadingProps {
  data: QuizData;
  onNext: () => void;
  progress: number;
}

const carouselImages = [carousel1, carousel2, carousel3, carousel4];

export const StepLoading = ({ data, onNext, progress }: StepLoadingProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onNext, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onNext]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % carouselImages.length);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <QuizLayout progress={progress}>
      <div className="flex-1 flex flex-col items-center justify-center animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-xl font-extrabold text-foreground">
            <span className="text-primary">Aguarde</span> enquanto preparamos o Mounjaro de Pobre......
          </h1>
        </div>
        
        {/* Loading bar */}
        <div className="w-full max-w-md mb-4">
          <div className="h-6 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-200 flex items-center justify-center"
              style={{ width: `${loadingProgress}%` }}
            >
              <span className="text-xs text-primary-foreground font-bold">
                {loadingProgress}%
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground font-medium mb-8">Carregando...</p>
        
        {/* Carousel images */}
        <div className="w-full max-w-sm rounded-xl overflow-hidden">
          <img 
            src={carouselImages[currentImage]} 
            alt="Depoimento" 
            className="w-full h-auto transition-opacity duration-500"
          />
        </div>
      </div>
    </QuizLayout>
  );
};
