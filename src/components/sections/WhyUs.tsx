"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield, Layers, Cpu, Handshake, Zap } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Cpu, Layers, Shield, Handshake, Zap];

export default function WhyUs() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const items = [
    t("home.why.item1"),
    t("home.why.item2"),
    t("home.why.item3"),
    t("home.why.item4"),
    t("home.why.item5"),
  ];

  return (
    <section className="relative py-24 md:py-32 border-b border-brand/35 section-purple-deep">
      <AmbientBackground variant="section" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="text-brand text-sm font-medium tracking-widest uppercase mb-3">Why us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t("home.why.title")}
          </h2>
          <p className="mt-4 text-muted text-lg">{t("home.why.subtitle")}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((label, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={label} delay={i * 0.06}>
                <motion.div
                  className="group text-center lg:text-left p-6 rounded-card border border-brand/35 bg-brand/10 hover:border-brand/60 hover:bg-brand/15 transition-all duration-300 hover:shadow-glow-sm"
                  whileHover={reduce ? undefined : { y: -4 }}
                >
                  <div className="relative w-12 h-12 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:shadow-glow-sm transition-shadow">
                    <Icon className="w-5 h-5 text-brand" />
                    <div className="absolute inset-0 rounded-xl bg-brand/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="font-display font-semibold text-foreground text-sm group-hover:text-brand transition-colors">
                    {label}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
