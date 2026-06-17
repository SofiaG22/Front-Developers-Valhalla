import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-deep border border-brand shadow-glow-btn hover:shadow-glow"
      : "bg-brand/10 border border-brand/50 text-foreground hover:border-brand hover:bg-brand/20 hover:shadow-glow-sm";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand font-medium text-sm transition-all duration-300 ${styles} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}
