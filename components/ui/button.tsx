import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn("button", `button-${variant}`, className);
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: "default" | "icon";
}
export function Button({ className, variant = "primary", size = "default", children, ...props }: ButtonProps) {
  return <button className={buttonClass(variant, cn(size === "icon" && "button-icon", className))} {...props}>{children}</button>;
}
