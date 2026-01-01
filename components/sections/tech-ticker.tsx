"use client";

import { homePageContent } from "@/data/config";
import { motion } from "framer-motion";

export function TechTicker() {
  const { tech_ticker } = homePageContent;
  const duplicatedTicker = [...tech_ticker, ...tech_ticker];

  return (
    <section className="py-12 border-y border-border-subtle bg-bg-surface-1/50 overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex gap-16 px-8"
          animate={{ x: "-50%" }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTicker.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="text-2xl md:text-3xl font-bold text-text-muted whitespace-nowrap opacity-50 hover:opacity-100 hover:text-primary-indigo transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
           {duplicatedTicker.map((tech, index) => (
            <span
              key={`${tech}-duplicate-${index}`}
              className="text-2xl md:text-3xl font-bold text-text-muted whitespace-nowrap opacity-50 hover:opacity-100 hover:text-primary-indigo transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

