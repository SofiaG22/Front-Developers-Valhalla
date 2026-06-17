"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/motion/ScrollReveal";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FeaturedProjects() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const projects = [
    {
      title: t("home.projects.item1.title"),
      problem: t("home.projects.item1.problem"),
      solution: t("home.projects.item1.solution"),
      outcome: t("home.projects.item1.outcome"),
    },
    {
      title: t("home.projects.item2.title"),
      problem: t("home.projects.item2.problem"),
      solution: t("home.projects.item2.solution"),
      outcome: t("home.projects.item2.outcome"),
    },
    {
      title: t("home.projects.item3.title"),
      problem: t("home.projects.item3.problem"),
      solution: t("home.projects.item3.solution"),
      outcome: t("home.projects.item3.outcome"),
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 border-b border-brand/35 section-purple-wash bg-[#0a0614]">
      <AmbientBackground variant="section" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <p className="text-brand text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t("home.projects.title")}
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl">{t("home.projects.subtitle")}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <Card className="h-full flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <motion.div whileHover={reduce ? undefined : { x: 2, y: -2 }}>
                    <ArrowUpRight className="w-5 h-5 text-brand shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
                <dl className="space-y-4 text-sm flex-1">
                  <div className="pl-3 border-l-2 border-brand/30">
                    <dt className="text-brand font-medium mb-1 text-xs uppercase tracking-wide">
                      {t("home.projects.problem")}
                    </dt>
                    <dd className="text-muted leading-relaxed">{project.problem}</dd>
                  </div>
                  <div className="pl-3 border-l-2 border-brand/20">
                    <dt className="text-brand font-medium mb-1 text-xs uppercase tracking-wide">
                      {t("home.projects.solution")}
                    </dt>
                    <dd className="text-muted leading-relaxed">{project.solution}</dd>
                  </div>
                  <div className="pl-3 border-l-2 border-brand/50">
                    <dt className="text-brand font-medium mb-1 text-xs uppercase tracking-wide">
                      {t("home.projects.outcome")}
                    </dt>
                    <dd className="text-foreground leading-relaxed">{project.outcome}</dd>
                  </div>
                </dl>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
