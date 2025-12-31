"use client";

import { homePageContent } from "@/data/config";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const { tagline, headline, subtext, cta } = homePageContent.hero;

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-indigo/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary-rose/15 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-primary-indigo/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary-rose font-mono text-sm tracking-widest uppercase mb-4 block">
            {tagline}
          </span>
          <h1 
            className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: headline }}
          />
          <p className="text-text-muted text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            {subtext}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button variant="primary">{cta[0]}</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">{cta[1]}</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            {/* Spinning Rings */}
            <div className="absolute inset-0 border border-primary-indigo/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-secondary-rose/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Profile Image */}
            <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-2 border-primary-indigo/50 z-20 shadow-2xl">
              <Image 
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-indigo/20 to-secondary-rose/20 rounded-full blur-xl z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

