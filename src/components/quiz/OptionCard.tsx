import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface OptionCardProps {
  children: ReactNode;
  onClick: () => void;
  selected?: boolean;
  icon?: ReactNode;
  image?: string;
  className?: string;
  showCheckbox?: boolean;
}

export const OptionCard = ({ 
  children, 
  onClick, 
  selected = false,
  icon,
  image,
  className,
  showCheckbox = false
}: OptionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-4 rounded-xl border-2 transition-all duration-200",
        "flex items-center gap-4 text-left",
        "hover:border-primary/50 hover:shadow-md active:scale-[0.98]",
        selected 
          ? "border-primary bg-primary/5 shadow-md" 
          : "border-border bg-card shadow-sm",
        className
      )}
    >
      {icon && (
        <span className="text-2xl flex-shrink-0">{icon}</span>
      )}
      {image && (
        <img src={image} alt="" className="w-12 h-12 object-cover rounded-lg flex-shrink-0" />
      )}
      <span className="flex-1 font-semibold text-foreground">{children}</span>
      {showCheckbox && (
        <div className={cn(
          "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
          selected 
            ? "border-primary bg-primary text-primary-foreground" 
            : "border-muted-foreground"
        )}>
          {selected && (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      )}
    </button>
  );
};
