"use client";

import Navbar from "@/components/Navbar";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHero
          title={t("contact.hero.title")}
          titleHighlight={t("contact.hero.title2")}
          subtitle={t("contact.hero.subtitle")}
        />
        <section className="py-20 border-b border-border">
          <ContactForm />
        </section>
      </main>
    </>
  );
}
