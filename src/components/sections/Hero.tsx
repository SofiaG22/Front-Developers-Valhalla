"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import ChevronDecor from "@/components/ui/ChevronDecor";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden border-b border-brand/40 bg-[#08040f]">
      <AmbientBackground variant="hero" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand-deep/15 pointer-events-none" />

      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 md:translate-x-4 pointer-events-none z-0">
        <ChevronDecor size="lg" animated />
      </div>

      {/* Vertical accent beam */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand/80 via-brand/40 to-brand/80 hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
        <motion.div
          className="max-w-2xl ml-auto text-right"
          variants={reduce ? undefined : stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={reduce ? undefined : item}
            className="inline-flex items-center gap-2 text-brand text-sm font-medium tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full border border-brand/50 bg-brand/20 backdrop-blur-sm shadow-glow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            {t("hero.badge")}
          </motion.p>

          <motion.h1
            variants={reduce ? undefined : item}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05]"
          >
            {t("hero.title")}
            <br />
            <span className="text-gradient-brand">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-xl ml-auto"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            variants={reduce ? undefined : item}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-end"
          >
            <Button href="/contact" showArrow className="shadow-glow-btn">
              {t("hero.cta1")}
            </Button>
            <Button href="/#projects" variant="secondary">
              {t("hero.cta2")}
            </Button>
          </motion.div>

          <motion.div
            variants={reduce ? undefined : item}
            className="mt-20 grid grid-cols-3 gap-6 pt-10 border-t border-brand/40 max-w-lg ml-auto"
          >
            {[
              { value: "15+", label: t("hero.stats.clients") },
              { value: "25+", label: t("hero.stats.projects") },
              { value: "99%", label: t("hero.stats.satisfaction") },
            ].map((stat) => (
              <div key={stat.label} className="text-right group">
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-brand transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
