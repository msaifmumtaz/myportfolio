import * as React from "react";
import { cn } from "@/lib/utils";
export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl bg-bg-surface-1 p-6", className)} {...props}>{children}</div>;
}
