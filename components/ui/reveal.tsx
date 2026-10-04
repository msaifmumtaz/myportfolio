"use client";

import { memo, useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Entrances remain visible in the server HTML and only animate position.
export const Reveal = memo(function Reveal({ children, className, delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -36px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", visible && "is-visible", className)} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>{children}</div>;
});
