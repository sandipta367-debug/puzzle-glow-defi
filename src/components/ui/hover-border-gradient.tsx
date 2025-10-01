import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  ...props
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
} & React.HTMLAttributes<HTMLElement>) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative p-[1px] overflow-hidden bg-transparent",
        containerClassName
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: hovered
            ? "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)))"
            : "transparent",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: hovered ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
        }}
        transition={{
          duration: duration,
          repeat: hovered ? Infinity : 0,
          ease: "linear",
        }}
      />
      <div
        className={cn(
          "relative z-10 bg-background rounded-md",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
};
