import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface QuizButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const QuizButton = ({ 
  children, 
  variant = "primary",
  className,
  ...props 
}: QuizButtonProps) => {
  return (
    <button
      className={cn(
        "w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200",
        "active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "primary" && [
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90 shadow-lg hover:shadow-xl"
        ],
        variant === "secondary" && [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80 shadow-md"
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
