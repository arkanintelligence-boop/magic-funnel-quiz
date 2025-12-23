import { cn } from "@/lib/utils";
import { InputHTMLAttributes, ReactNode } from "react";

interface QuizInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export const QuizInput = ({ 
  icon,
  className,
  ...props 
}: QuizInputProps) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </div>
      )}
      <input
        className={cn(
          "w-full py-4 px-4 rounded-xl border-2 border-border bg-card",
          "text-foreground font-medium text-lg",
          "placeholder:text-muted-foreground",
          "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
          "transition-all duration-200",
          icon && "pl-12",
          className
        )}
        {...props}
      />
    </div>
  );
};
