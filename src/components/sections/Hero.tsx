"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Sparkles, Globe, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MagneticButton } from "@/components/motion/MagneticButton";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const itemStatic = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const parallaxA = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  const parallaxB = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -90]);
  const parallaxC = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.04]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-indigo-600 to-accent"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: parallaxA }}
          animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: parallaxB }}
          animate={reduce ? undefined : { scale: [1, 1.06, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: parallaxC }}
          animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-violet-400/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
      >
        <motion.div
          variants={reduce ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : container}
          initial="hidden"
          animate="visible"
          className="will-change-transform"
        >
          <motion.div
            variants={reduce ? itemStatic : item}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-8 border border-white/10"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>{t("hero.badge")}</span>
          </motion.div>

          <motion.h1
            variants={reduce ? itemStatic : item}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            {t("hero.title")}
            <br />
            <span className="bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            variants={reduce ? itemStatic : item}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            variants={reduce ? itemStatic : item}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <MagneticButton
              href="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg shadow-2xl shadow-black/20 hover:shadow-3xl hover:shadow-primary/50 transition-shadow duration-300"
            >
              <span className="text-primary">{t("hero.cta1")}</span>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-colors duration-300"
            >
              {t("hero.cta2")}
            </motion.a>
          </motion.div>

          <motion.div
            variants={reduce ? itemStatic : item}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Globe, value: "50+", labelKey: "hero.stats.clients" },
              { icon: Code2, value: "100+", labelKey: "hero.stats.projects" },
              { icon: Sparkles, value: "99%", labelKey: "hero.stats.satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={reduce ? undefined : { y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <stat.icon className="w-8 h-8 text-white mb-3 mx-auto" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm font-medium">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={reduce ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={reduce ? undefined : { y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
            transition={reduce ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
