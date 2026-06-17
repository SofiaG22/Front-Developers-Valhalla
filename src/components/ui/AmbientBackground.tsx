type AmbientBackgroundProps = {
  variant?: "hero" | "section" | "cta";
  className?: string;
};

export default function AmbientBackground({ variant = "section", className = "" }: AmbientBackgroundProps) {
  const gridOpacity = { hero: 0.18, section: 0.14, cta: 0.16 }[variant];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(109, 40, 217, ${gridOpacity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 40, 217, ${gridOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 10%, transparent 80%)",
        }}
      />

      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-brand/45 blur-[130px] animate-glow-pulse" />
      <div
        className="absolute -bottom-40 right-0 w-[32rem] h-[32rem] rounded-full bg-brand-deep/40 blur-[110px] animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand/20 blur-[100px] animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />

      {variant === "hero" && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand/25 via-brand-deep/10 to-transparent" />
      )}
      {variant === "cta" && (
        <div className="absolute inset-0 bg-gradient-to-t from-brand/30 via-brand-deep/15 to-transparent" />
      )}

      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        <div className="absolute inset-x-0 h-px bg-brand top-0 animate-scan-line" />
      </div>
    </div>
  );
}
