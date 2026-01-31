"use client";

import { Smartphone, Monitor, Cloud, Database, Shield, Sparkles, Code, TrendingUp, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    icon: Monitor,
    title: "Custom Web Applications",
    description: "Scalable, performant web apps built with modern frameworks. React, Next.js, Vue.js, and more.",
    features: ["Responsive Design", "SEO Optimized", "PWA Support", "API Integration"],
    popular: true,
  },
  {
    icon: TrendingUp,
    title: "ConversionIQ",
    description: "Universal conversion tracking and analytics platform. Works on WordPress, HTML, React, Vue, Next.js, and any website. Discover where users leave without converting and recover 15-30% of lost revenue.",
    features: ["Click & Scroll Tracking", "No-Click Page Detection", "Conversion Opportunities", "Real-time Insights"],
    popular: false,
    featured: true,
    link: "https://conversioniq.developersvalhalla.com/",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android. Flutter, React Native, Swift, Kotlin.",
    features: ["Native Performance", "App Store Deployment", "Push Notifications", "Offline Support"],
    popular: false,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    description: "AWS, Azure, GCP deployment and management. CI/CD pipelines, containerization, infrastructure as code.",
    features: ["Auto-scaling", "99.9% Uptime", "Security Hardening", "Cost Optimization"],
    popular: false,
  },
  {
    icon: Database,
    title: "Enterprise Software",
    description: "Complex business systems, ERPs, CRMs, and custom enterprise solutions tailored to your workflow.",
    features: ["Custom Workflows", "Data Analytics", "Integration Ready", "Scalable Architecture"],
    popular: true,
  },
  {
    icon: Code,
    title: "API Development",
    description: "RESTful and GraphQL APIs with comprehensive documentation. Fast, secure, and developer-friendly.",
    features: ["REST & GraphQL", "API Documentation", "Rate Limiting", "Authentication"],
    popular: false,
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Security audits, penetration testing, GDPR/CCPA compliance, and security-first development.",
    features: ["Security Audits", "Compliance Ready", "Data Encryption", "Vulnerability Testing"],
    popular: false,
  },
];

export default function Products() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-to-b from-white dark:from-gray-900 to-background-muted dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-indigo-400 font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            {t("products.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-DEFAULT dark:text-gray-100 mb-4">
            {t("products.title")}{" "}
            <span className="text-primary dark:text-indigo-400">{t("products.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                product.featured
                  ? "border-2 border-yellow-400 dark:border-yellow-500 shadow-2xl shadow-yellow-500/30 dark:shadow-yellow-500/20 ring-4 ring-yellow-400/20 dark:ring-yellow-500/20"
                  : product.popular
                  ? "border-primary dark:border-indigo-500 shadow-xl shadow-primary/20 dark:shadow-indigo-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl"
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 text-xs font-bold rounded-full shadow-lg animate-pulse">
                  ⭐ {t("products.featured")}
                </div>
              )}
              {/* Popular Badge */}
              {product.popular && !product.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full">
                  {t("products.popular")}
                </div>
              )}

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  product.featured
                    ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                    : product.popular
                    ? "bg-gradient-to-br from-primary to-accent"
                    : "bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent"
                }`}
              >
                <product.icon
                  className={`w-8 h-8 ${
                    product.featured
                      ? "text-gray-900"
                      : product.popular
                      ? "text-white"
                      : "text-primary group-hover:text-white transition-colors duration-300"
                  }`}
                />
              </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-text-DEFAULT dark:text-gray-100 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-text-muted dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                {product.featured && product.link ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 hover:shadow-lg hover:scale-105 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700"
                  >
                    <span>{t("products.viewProject")}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      product.popular
                        ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:shadow-lg hover:scale-105"
                        : "bg-primary/10 dark:bg-primary/20 text-primary dark:text-indigo-400 hover:bg-gradient-to-r hover:from-[#4F46E5] hover:to-[#7C3AED] hover:text-white"
                    }`}
                  >
                    <span className={product.popular ? "text-white" : ""}>{t("products.getStarted")}</span>
                  </a>
                )}
              </div>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-lg text-text-muted dark:text-gray-300">
            All projects include: <span className="font-semibold text-text-DEFAULT dark:text-gray-100">Quality Assurance, Documentation, Deployment, & 3 Months Support</span>
          </p>
        </div>
      </div>
    </section>
  );
}