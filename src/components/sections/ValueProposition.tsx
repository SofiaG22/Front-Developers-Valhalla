"use client";

import { CheckCircle2, Zap, Shield, Users, TrendingUp, Globe2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const values = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Agile methodologies ensure rapid development cycles without compromising quality. Time-to-market optimized.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, security audits, and compliance standards. Your data and applications are protected.",
  },
  {
    icon: Users,
    title: "Elite Development Team",
    description: "Top-tier Colombian developers with global experience. Fluent in English, certified, and ready to integrate.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Built for growth. Your software scales seamlessly from startup to enterprise without refactoring.",
  },
  {
    icon: Globe2,
    title: "Global Reach, Local Touch",
    description: "Colombian innovation meets international standards. Perfect timezone alignment with US markets.",
  },
  {
    icon: CheckCircle2,
    title: "Premium Support 24/7",
    description: "Round-the-clock support, dedicated project managers, and transparent communication throughout.",
  },
];

export default function ValueProposition() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[linear-gradient(to_right,#4F46E5_1px,transparent_1px),linear-gradient(to_bottom,#4F46E5_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text-DEFAULT dark:text-gray-100 mb-4">
            {t("valueProposition.title")}{" "}
            <span className="text-primary dark:text-indigo-400">{t("valueProposition.titleHighlight")}</span>?
          </h2>
          <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
            {t("valueProposition.subtitle")}
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text-DEFAULT dark:text-gray-100 mb-3">
                {value.title}
              </h3>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-text-muted dark:text-gray-300 mb-6">
            Ready to transform your business with premium software?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span className="text-white">{t("valueProposition.cta")}</span>
            <TrendingUp className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}