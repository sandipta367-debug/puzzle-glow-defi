import { cn } from "@/lib/utils";

export const BackgroundGrid = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-0 h-full w-full bg-background bg-grid-white/[0.05] pointer-events-none",
        className
      )}
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)",
      }}
    />
  );
};
