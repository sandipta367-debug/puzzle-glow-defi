import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Timeline = ({
  data,
}: {
  data: {
    title: string;
    content: React.ReactNode;
  }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  return (
    <div ref={containerRef} className="relative">
      <div ref={ref} className="flex">
        {/* Left side - Static titles */}
        <div className="sticky top-32 h-fit w-1/3 pr-8">
          {data.map((item, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl font-orbitron font-bold text-primary">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Right side - Scrolling content with timeline */}
        <div className="relative w-2/3 pl-8 border-l-2 border-primary/20">
          {/* Animated line */}
          <motion.div
            className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            style={{
              scaleY: scrollYProgress,
              height: "100%",
            }}
          />

          {data.map((item, index) => (
            <div key={index} className="mb-16 relative">
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-[17px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-background"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
              <div className="pl-8">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
