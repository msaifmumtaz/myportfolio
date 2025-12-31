"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary-indigo/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Ready to Build something <span className="text-primary-indigo">Extraordinary?</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you need an MVP, an enterprise-grade application, or AI integration, 
            I'm here to help you turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.upwork.com/freelancers/~01dc46728553f3bae5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="default" className="w-full sm:w-auto gap-2">
                Hire Me on Upwork <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            
            <a 
              href="https://calendly.com/ch-saif109/30min" // Replace with actual booking link
              className="w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="default" className="w-full sm:w-auto gap-2">
                Schedule a Meeting <Calendar className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


