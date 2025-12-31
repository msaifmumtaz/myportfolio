"use client";

import { homePageContent } from "@/data/config";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  const { testimonials } = homePageContent;

  if (!testimonials) return null;

  return (
    <section className="py-24 container mx-auto px-4 bg-bg-surface-1/30">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          Client Testimonials
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          Feedback from clients I've had the pleasure of working with.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-6 bg-bg-surface-2 border-border-subtle hover:border-primary-indigo/30 transition-colors">
              <Quote className="text-primary-indigo mb-4 w-8 h-8 opacity-50" />
              <p className="text-text-main text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-indigo to-secondary-rose opacity-80" />
                )}
                <div className="text-sm font-bold text-text-muted">
                  {testimonial.author}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

