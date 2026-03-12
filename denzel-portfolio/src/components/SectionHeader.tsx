"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeader = ({ title, subtitle, align = "center", className }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-20 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className={cn(
          "h-1.5 bg-primary mb-8 rounded-full shadow-[0_0_15px_rgba(6,92,194,0.3)]",
          align === "center" ? "mx-auto" : "mr-auto"
        )}
      />
      <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-slate-700 font-bold leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
