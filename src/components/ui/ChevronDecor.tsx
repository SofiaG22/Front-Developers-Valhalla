"use client";

import { motion, useReducedMotion } from "framer-motion";

type ChevronDecorProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
};

const dims = { sm: "w-32 h-32", md: "w-48 h-48", lg: "w-72 h-72 md:w-[28rem] md:h-[28rem]" };

export default function ChevronDecor({ className = "", size = "lg", animated = true }: ChevronDecorProps) {
  const reduce = useReducedMotion();
  const id = `glow-${size}`;

  const Wrapper = animated && !reduce ? motion.div : "div";
  const wrapperProps =
    animated && !reduce
      ? {
          animate: { opacity: [0.85, 1, 0.85], scale: [1, 1.03, 1] },
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
        }
      : {};

  return (
    <Wrapper className={`relative ${dims[size]} ${className}`} aria-hidden {...wrapperProps}>
      <div className="absolute inset-0 bg-brand/35 blur-[90px] rounded-full scale-90 animate-glow-pulse" />
      <div
        className="absolute inset-0 bg-brand-deep/20 blur-[60px] rounded-full scale-75 animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_24px_rgba(109,40,217,0.5)]">
          <path
            d="M40 20 L120 100 L40 180"
            stroke="url(#chevronGrad1)"
            strokeWidth="28"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#${id})`}
          />
          <path
            d="M80 20 L160 100 L80 180"
            stroke="url(#chevronGrad2)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.75"
          />
          <path
            d="M100 35 L175 100 L100 165"
            stroke="#6D28D9"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="chevronGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#6D28D9" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
            <linearGradient id="chevronGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.9" />
            </linearGradient>
            <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </Wrapper>
  );
}
