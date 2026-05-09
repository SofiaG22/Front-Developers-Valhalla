"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type AnimatedCtaBandProps = {
  children: ReactNode;
};

export default function AnimatedCtaBand({ children }: AnimatedCtaBandProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 60]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 8]);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#4F46E5]" />
      <motion.div
        style={{ y: y1, rotate }}
        className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-indigo-400/25 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute -bottom-32 -right-10 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl"
      />
      <motion.div
        animate={reduce ? undefined : { opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]"
      />
      <div className="relative z-10 text-white">{children}</div>
    </section>
  );
}
