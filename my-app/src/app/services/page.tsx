"use client";

import Navbar from "@/components/Navbar";
import TechMarquee from "@/components/sections/TechMarquee";
import { Globe, Smartphone, Cloud, Database, Code, Shield, Zap, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description: "Scalable, performant web applications built with cutting-edge technologies. From simple websites to complex enterprise platforms.",
    features: [
      "Responsive & Mobile-First Design",
      "SEO Optimization",
      "Progressive Web Apps (PWA)",
      "API Integration",
      "Real-time Features",
      "Performance Optimization",
      "Accessibility (WCAG Compliance)",
      "Multi-language Support",
    ],
    technologies: "React, Next.js, Vue.js, Angular, TypeScript",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android. Delivering exceptional user experiences on any device.",
    features: [
      "Native iOS & Android Development",
      "Cross-platform with Flutter/React Native",
      "App Store Deployment",
      "Push Notifications",
      "Offline Capabilities",
      "Biometric Authentication",
      "In-App Purchases",
      "Analytics Integration",
    ],
    technologies: "Swift, Kotlin, Flutter, React Native",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    description: "End-to-end cloud infrastructure and DevOps services. Deploy, scale, and manage with confidence.",
    features: [
      "AWS, Azure, GCP Setup",
      "CI/CD Pipeline Automation",
      "Container Orchestration (Kubernetes)",
      "Infrastructure as Code",
      "Auto-scaling & Load Balancing",
      "Security Hardening",
      "Cost Optimization",
      "24/7 Monitoring & Alerts",
    ],
    technologies: "Docker, Kubernetes, Terraform, Jenkins, GitHub Actions",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Enterprise Software",
    description: "Complex business systems, ERPs, CRMs, and custom enterprise solutions tailored to your workflow.",
    features: [
      "Custom Workflow Automation",
      "Data Analytics & Reporting",
      "Third-party Integrations",
      "Scalable Architecture",
      "Role-based Access Control",
      "Audit Logs & Compliance",
      "Business Intelligence",
      "Data Migration",
    ],
    technologies: ".NET, Java, Python, Node.js, PostgreSQL, MongoDB",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Code,
    title: "API Development",
    description: "RESTful and GraphQL APIs with comprehensive documentation. Fast, secure, and developer-friendly.",
    features: [
      "REST & GraphQL APIs",
      "API Documentation",
      "Rate Limiting & Throttling",
      "Authentication & Authorization",
      "API Versioning",
      "Testing & Quality Assurance",
      "Performance Optimization",
      "Webhooks & Real-time APIs",
    ],
    technologies: "Node.js, Python, Go, GraphQL, OpenAPI",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Security audits, penetration testing, and compliance solutions. Protect your digital assets.",
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "GDPR/CCPA Compliance",
      "Data Encryption",
      "Vulnerability Scanning",
      "Security Best Practices",
      "Incident Response Planning",
      "Compliance Documentation",
    ],
    technologies: "OWASP, GDPR, CCPA, SOC 2, HIPAA",
    gradient: "from-pink-500 to-rose-600",
  },
];

// Process steps will be translated in the component

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-indigo-600 to-accent">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                {t("services.hero.title")}
                <br />
                <span className="bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
                  {t("services.hero.title2")}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                {t("services.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Tech Marquee */}
        <TechMarquee />

        {/* Services Grid */}
        <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[linear-gradient(to_right,#4F46E5_1px,transparent_1px),linear-gradient(to_bottom,#4F46E5_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-text-DEFAULT dark:text-gray-100 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 p-4 bg-background-muted dark:bg-gray-700 rounded-xl">
                    <p className="text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-2">{t("services.technologies")}</p>
                    <p className="text-sm text-text-muted dark:text-gray-300">{service.technologies}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-3">{t("services.keyFeatures")}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-sm text-text-muted dark:text-gray-300">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${service.gradient} rounded-full mt-1.5 flex-shrink-0`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {t("services.getStarted")}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-background-muted dark:from-gray-800 via-white dark:via-gray-900 to-background-muted dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-text-DEFAULT dark:text-gray-100 mb-4">
                {t("services.process.title")} <span className="text-primary dark:text-indigo-400">{t("services.process.titleHighlight")}</span>
              </h2>
              <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                {t("services.process.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "01", titleKey: "services.process.step1.title", descKey: "services.process.step1.description", icon: Sparkles },
                { step: "02", titleKey: "services.process.step2.title", descKey: "services.process.step2.description", icon: Code },
                { step: "03", titleKey: "services.process.step3.title", descKey: "services.process.step3.description", icon: Zap },
                { step: "04", titleKey: "services.process.step4.title", descKey: "services.process.step4.description", icon: Shield },
                { step: "05", titleKey: "services.process.step5.title", descKey: "services.process.step5.description", icon: Cloud },
                { step: "06", titleKey: "services.process.step6.title", descKey: "services.process.step6.description", icon: ArrowRight },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-indigo-500/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-primary/20 dark:text-indigo-500/20 group-hover:text-primary/30 dark:group-hover:text-indigo-500/30 transition-colors duration-300">
                      {phase.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text-DEFAULT dark:text-gray-100 mb-3">
                    {t(phase.titleKey)}
                  </h3>
                  <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                    {t(phase.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#4F46E5] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              {t("services.cta.title")}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t("services.cta.subtitle")}
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4F46E5] rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <span className="text-[#4F46E5]">{t("services.cta.button")}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}