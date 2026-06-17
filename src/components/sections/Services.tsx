"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Bot, Workflow, Cloud } from "lucide-react";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/motion/ScrollReveal";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Code2, Bot, Workflow, Cloud];

export default function Services() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const items = [
    { title: t("home.services.item1.title"), desc: t("home.services.item1.desc") },
    { title: t("home.services.item2.title"), desc: t("home.services.item2.desc") },
    { title: t("home.services.item3.title"), desc: t("home.services.item3.desc") },
    { title: t("home.services.item4.title"), desc: t("home.services.item4.desc") },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 border-b border-brand/35 section-purple-wash bg-[#0a0614]">
      <AmbientBackground variant="section" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="text-brand text-sm font-medium tracking-widest uppercase mb-3">Services</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t("home.services.title")}
          </h2>
          <p className="mt-4 text-muted text-lg">{t("home.services.subtitle")}</p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-brand to-transparent" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Card>
                  <motion.div
                    whileHover={reduce ? undefined : { scale: 1.05 }}
                    className="w-12 h-12 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center mb-6 shadow-glow-sm"
                  >
                    <Icon className="w-6 h-6 text-brand" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
