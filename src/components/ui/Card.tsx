import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export default function Card({ children, className = "", glow = true }: CardProps) {
  return (
    <div
      className={`group relative rounded-card p-8 transition-all duration-500
        bg-[#120a22]/90 backdrop-blur-sm
        border border-brand/30 hover:border-brand/70
        ${glow ? "shadow-[inset_0_1px_0_rgba(167,139,250,0.12)] hover:shadow-glow" : "hover:shadow-glow-sm"}
        overflow-hidden
        ${className}`}
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/30 rounded-full blur-3xl opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-brand/20 via-brand/40 to-brand/20 opacity-50" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
