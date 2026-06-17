"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  glow?: boolean;
};

export default function ScrollReveal({ children, className, delay = 0, glow = false }: ScrollRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative ${className ?? ""}`}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {glow && (
        <div className="absolute -inset-4 bg-brand/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
}
