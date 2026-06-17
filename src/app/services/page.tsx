"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/ui/PageHero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FinalCta from "@/components/sections/FinalCta";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHero
          title={t("services.hero.title")}
          titleHighlight={t("services.hero.title2")}
          subtitle={t("services.hero.subtitle")}
        />
        <Services />
        <Process />
        <FinalCta />
      </main>
    </>
  );
}
