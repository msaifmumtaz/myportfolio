"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  return <Button variant="ghost" size="icon" onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")} className="relative">
    <Sun className="h-5 w-5 dark:hidden" /><Moon className="hidden h-5 w-5 dark:block" /><span className="sr-only">Toggle theme</span>
  </Button>;
}
