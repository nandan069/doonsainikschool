"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-military-accent text-white hover:bg-military-white shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.7)]",
      secondary:
        "bg-military-secondary text-military-dark hover:bg-military-primary shadow-lg",
      outline:
        "border-2 border-military-accent text-military-accent hover:bg-military-accent hover:text-white",
      ghost: "text-military-dark/90 hover:text-military-dark hover:bg-military-dark/10",
    };

    const sizes = {
      sm: "h-10 px-6 text-xs",
      md: "h-12 px-8 text-sm",
      lg: "h-14 px-10 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
