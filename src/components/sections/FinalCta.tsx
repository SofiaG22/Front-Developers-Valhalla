"use client";

import Button from "@/components/ui/Button";
import ChevronDecor from "@/components/ui/ChevronDecor";
import AmbientBackground from "@/components/ui/AmbientBackground";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-brand/40 bg-[#08040f]">
      <AmbientBackground variant="cta" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand/35 via-brand-deep/20 to-transparent pointer-events-none" />

      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none">
        <ChevronDecor size="md" animated />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl ml-auto text-right">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {t("home.finalCta.title")}
          </h2>
          <p className="mt-6 text-lg text-muted">{t("home.finalCta.subtitle")}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-end">
            <Button href="/contact" showArrow className="shadow-glow-btn">
              {t("home.finalCta.button")}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
