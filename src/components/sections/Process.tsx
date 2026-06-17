"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const steps = [
    { num: "01", title: t("home.process.step1"), desc: t("home.process.step1desc") },
    { num: "02", title: t("home.process.step2"), desc: t("home.process.step2desc") },
    { num: "03", title: t("home.process.step3"), desc: t("home.process.step3desc") },
    { num: "04", title: t("home.process.step4"), desc: t("home.process.step4desc") },
    { num: "05", title: t("home.process.step5"), desc: t("home.process.step5desc") },
  ];

  return (
    <section id="process" className="relative py-24 md:py-32 border-b border-brand/35 section-purple-deep">
      <AmbientBackground variant="section" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="text-brand text-sm font-medium tracking-widest uppercase mb-3">Process</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t("home.process.title")}
          </h2>
          <p className="mt-4 text-muted text-lg">{t("home.process.subtitle")}</p>
        </ScrollReveal>

        {/* Connecting line — desktop */}
        <div className="hidden md:block absolute left-8 right-8 top-[calc(50%+2rem)] h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.06}>
              <motion.div
                className="relative group"
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/40 bg-brand/10 font-display text-sm font-bold text-brand group-hover:bg-brand group-hover:text-white group-hover:shadow-glow-sm transition-all duration-300">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-brand transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
