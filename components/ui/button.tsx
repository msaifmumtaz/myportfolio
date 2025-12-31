"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "icon";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const sizes = {
      default: "px-6 py-3",
      icon: "h-10 w-10",
    };
    
    const variants = {
      primary:
        "bg-primary-indigo text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-transparent",
      secondary:
        "bg-transparent border border-primary-indigo text-text-main hover:bg-primary-indigo/10",
      ghost: "hover:bg-bg-surface-2 text-text-main",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, sizes[size], variants[variant], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

