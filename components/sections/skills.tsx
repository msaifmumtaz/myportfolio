"use client";

import { homePageContent } from "@/data/config";
import { Brain, Code, Database, Server } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  Brain: Brain,
  Code: Code,
  Server: Server,
  Database: Database,
};

export function Skills() {
  const { skills } = homePageContent;

  if (!skills) return null;

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          Skills & Expertise
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          A comprehensive overview of my technical capabilities across AI, Web Development, and Infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => {
          const Icon = iconMap[skill.icon] || Code;
          
          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-surface-1 p-6 rounded-lg border border-border-subtle hover:border-primary-indigo/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-indigo/10 rounded-lg flex items-center justify-center mb-6 text-primary-indigo">
                <Icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-text-main">
                {skill.category}
              </h3>
              
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-text-muted text-sm flex items-start">
                    <span className="mr-2 text-primary-indigo">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


