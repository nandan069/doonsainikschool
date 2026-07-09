"use client";

import { HTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "glass" | "solid" | "bordered";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", children, ...props }, ref) => {
    const baseStyles = "rounded-2xl overflow-hidden transition-all duration-300";

    const variants = {
      glass:
        "bg-military-bg/60 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:border-white/20 hover:-translate-y-1",
      solid:
        "bg-[#151713] border border-transparent shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-military-accent/30",
      bordered:
        "bg-transparent border-2 border-military-secondary hover:border-military-accent hover:bg-military-secondary/20",
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export { Card };
