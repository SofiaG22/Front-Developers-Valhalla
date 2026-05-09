"use client";

import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import ValueProposition from "@/components/sections/ValueProposition";
import AnimatedCtaBand from "@/components/sections/AnimatedCtaBand";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <Products />

        <AnimatedCtaBand>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <motion.h2
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              {t("cta.subtitle")}
            </motion.p>
            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/contact"
                whileHover={reduce ? undefined : { scale: 1.06, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4F46E5] rounded-xl font-semibold text-lg shadow-2xl"
              >
                <span className="text-[#4F46E5]">{t("cta.button1")}</span>
              </motion.a>
              <motion.a
                href="/services"
                whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-colors duration-300"
              >
                {t("cta.button2")}
              </motion.a>
            </motion.div>
          </div>
        </AnimatedCtaBand>
      </main>
    </>
  );
}
