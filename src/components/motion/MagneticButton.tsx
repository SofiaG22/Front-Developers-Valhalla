"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

type MagneticButtonProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

/** Subtle magnetic hover on desktop; no layout shift on touch */
export function MagneticButton({ href, className, children }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 280, damping: 22, mass: 0.6 });
  const y = useSpring(0, { stiffness: 280, damping: 22, mass: 0.6 });
  const [active, setActive] = useState(false);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px)`;

  const move = (clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = clientX - (r.left + r.width / 2);
    const dy = clientY - (r.top + r.height / 2);
    x.set(dx * 0.12);
    y.set(dy * 0.12);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ transform }}
      className={className}
      onMouseMove={(e) => active && move(e.clientX, e.clientY)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setActive(false);
        x.set(0);
        y.set(0);
      }}
      onBlur={() => {
        setActive(false);
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}
