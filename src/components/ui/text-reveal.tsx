import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const TextReveal = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.5"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative", className)}>
      <p className="text-lg md:text-xl leading-relaxed">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const color = useTransform(progress, range, [
    "hsl(var(--muted-foreground))",
    "hsl(var(--primary))",
  ]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-1 transition-colors duration-300"
    >
      {children}
    </motion.span>
  );
};
