import { cn } from "@/lib/utils";

interface ImageOptionCardProps {
  image: string;
  label: string;
  onClick: () => void;
  selected?: boolean;
  className?: string;
}

export const ImageOptionCard = ({ 
  image, 
  label, 
  onClick, 
  selected = false,
  className
}: ImageOptionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200",
        "hover:border-primary/50 hover:shadow-lg active:scale-[0.98]",
        selected 
          ? "border-primary bg-primary/5 shadow-lg" 
          : "border-border bg-card shadow-sm",
        className
      )}
    >
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden">
        <img src={image} alt={label} className="w-full h-full object-cover" />
      </div>
      <span className="font-bold text-foreground">{label}</span>
    </button>
  );
};
