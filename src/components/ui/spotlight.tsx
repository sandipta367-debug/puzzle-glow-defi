import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Spotlight = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none z-0",
        className
      )}
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "radial-gradient(circle, hsla(var(--primary) / 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </motion.div>
  );
};
