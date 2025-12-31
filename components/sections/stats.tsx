"use client";

import { homePageContent } from "@/data/config";
import { motion } from "framer-motion";

export function Stats() {
  const { stats } = homePageContent;

  return (
    <section className="py-20 bg-bg-surface-1 border-t border-border-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border-subtle/50">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-4"
            >
              <div className="text-4xl md:text-5xl font-bold font-heading text-primary-indigo mb-2">
                {stat.value}
              </div>
              <div className="text-text-muted font-mono text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

