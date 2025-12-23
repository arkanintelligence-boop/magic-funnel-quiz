import { useEffect, useState } from "react";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizData } from "@/data/quizData";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    }, 2500);

    return () => clearInterval(imageInterval);
  }, []);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

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
        <div className="relative w-full max-w-sm rounded-xl overflow-hidden group">
          <img
            src={carouselImages[currentImage]}
            alt="Depoimento"
            className="w-full h-auto transition-opacity duration-500"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/50"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/50"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${index === currentImage ? "bg-white w-4" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </QuizLayout>
  );
};
