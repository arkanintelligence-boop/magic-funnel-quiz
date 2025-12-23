import { ReactNode } from "react";
import logo from "@/assets/funnel/step-2.png";

interface QuizLayoutProps {
  children: ReactNode;
  progress: number;
  showProgress?: boolean;
  showLogo?: boolean;
}

export const QuizLayout = ({ 
  children, 
  progress, 
  showProgress = true,
  showLogo = true 
}: QuizLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showLogo && (
        <header className="py-4 flex justify-center">
          <img 
            src={logo} 
            alt="Mounjaro de Pobre" 
            className="h-10 w-auto"
          />
        </header>
      )}
      
      {showProgress && (
        <div className="px-4 pb-4 max-w-xl mx-auto w-full">
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      
      <main className="flex-1 flex flex-col px-4 pb-8 max-w-xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};
