"use client";

import { Smartphone, Monitor, Cloud, Globe, Database, Shield, Sparkles, Code } from "lucide-react";

const products = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description: "Scalable, performant web apps built with modern frameworks. React, Next.js, Vue.js, and more.",
    features: ["Responsive Design", "SEO Optimized", "PWA Support", "API Integration"],
    price: "From $15,000",
    popular: true,
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android. Flutter, React Native, Swift, Kotlin.",
    features: ["Native Performance", "App Store Deployment", "Push Notifications", "Offline Support"],
    price: "From $20,000",
    popular: false,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    description: "AWS, Azure, GCP deployment and management. CI/CD pipelines, containerization, infrastructure as code.",
    features: ["Auto-scaling", "99.9% Uptime", "Security Hardening", "Cost Optimization"],
    price: "From $10,000",
    popular: false,
  },
  {
    icon: Database,
    title: "Enterprise Software",
    description: "Complex business systems, ERPs, CRMs, and custom enterprise solutions tailored to your workflow.",
    features: ["Custom Workflows", "Data Analytics", "Integration Ready", "Scalable Architecture"],
    price: "From $50,000",
    popular: true,
  },
  {
    icon: Code,
    title: "API Development",
    description: "RESTful and GraphQL APIs with comprehensive documentation. Fast, secure, and developer-friendly.",
    features: ["REST & GraphQL", "API Documentation", "Rate Limiting", "Authentication"],
    price: "From $8,000",
    popular: false,
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Security audits, penetration testing, GDPR/CCPA compliance, and security-first development.",
    features: ["Security Audits", "Compliance Ready", "Data Encryption", "Vulnerability Testing"],
    price: "From $12,000",
    popular: false,
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-background-muted relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Premium Products & Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-DEFAULT mb-4">
            What We{" "}
            <span className="text-primary">Build</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Enterprise-grade software solutions crafted with precision and innovation.
            Each project is a masterpiece of code, design, and user experience.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                product.popular
                  ? "border-primary shadow-xl shadow-primary/20"
                  : "border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl"
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  product.popular
                    ? "bg-gradient-to-br from-primary to-accent"
                    : "bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent"
                }`}
              >
                <product.icon
                  className={`w-8 h-8 ${
                    product.popular ? "text-white" : "text-primary group-hover:text-white transition-colors duration-300"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-text-DEFAULT mb-3">
                {product.title}
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-text-DEFAULT">{product.price}</span>
                </div>
                <a
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    product.popular
                      ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:shadow-lg hover:scale-105"
                      : "bg-primary/10 text-primary hover:bg-gradient-to-r hover:from-[#4F46E5] hover:to-[#7C3AED] hover:text-white"
                  }`}
                >
                  <span className={product.popular ? "text-white" : ""}>Get Started</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-text-muted">
            All projects include: <span className="font-semibold text-text-DEFAULT">Quality Assurance, Documentation, Deployment, & 3 Months Support</span>
          </p>
        </div>
      </div>
    </section>
  );
}