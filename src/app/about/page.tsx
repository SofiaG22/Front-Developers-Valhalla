"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { Target, Heart, Rocket, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const valueIcons = [Target, Heart, Rocket, Users];

export default function About() {
  const { t } = useLanguage();

  const values = [
    { title: t("about.values.excellence.title"), description: t("about.values.excellence.description") },
    { title: t("about.values.clientCentric.title"), description: t("about.values.clientCentric.description") },
    { title: t("about.values.innovation.title"), description: t("about.values.innovation.description") },
    { title: t("about.values.transparency.title"), description: t("about.values.transparency.description") },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHero
          title={t("about.hero.title")}
          titleHighlight={t("about.hero.title2")}
          subtitle={t("about.hero.subtitle")}
        />

        <section className="py-20 border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                {t("about.story.title")}{" "}
                <span className="text-brand">{t("about.story.titleHighlight")}</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20 border-b border-border bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground">
                {t("about.values.title")}{" "}
                <span className="text-brand">{t("about.values.titleHighlight")}</span>
              </h2>
              <p className="mt-3 text-muted">{t("about.values.subtitle")}</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => {
                const Icon = valueIcons[i];
                return (
                  <ScrollReveal key={v.title} delay={i * 0.08}>
                    <Card>
                      <Icon className="w-5 h-5 text-brand mb-4" />
                      <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{v.description}</p>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">{t("about.cta.title")}</h2>
            <p className="text-muted mb-8">{t("about.cta.subtitle")}</p>
            <Button href="/contact" showArrow>
              {t("about.cta.button")}
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
