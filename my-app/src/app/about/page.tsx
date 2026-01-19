"use client";

import Navbar from "@/components/Navbar";
import { Code2, Globe2, Target, Users, Award, Rocket, TrendingUp, Heart } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const team = [
  {
    name: "Wilmer Campos",
    role: "CEO & Co-Founder",
    bio: "+6 años de experiencia en desarrollo de software y liderazgo técnico.",
    gradient: "from-primary to-indigo-600",
  },
  {
    name: "Sofia Garcia",
    role: "CTO & Co-Founder",
    bio: "Expert in cloud architecture and scalable systems. AWS Certified Solutions Architect.",
    gradient: "from-accent to-violet-600",
  },
  {
    name: "Diego Alvarez",
    role: "Head of Engineering",
    bio: "Full-stack developer with expertise in React, Node.js, and microservices architecture.",
    gradient: "from-indigo-600 to-primary",
  },
  {
    name: "Maria Gonzalez",
    role: "Head of Design",
    bio: "Award-winning UX/UI designer focused on creating exceptional user experiences.",
    gradient: "from-violet-600 to-accent",
  },
];


export default function About() {
  const { t } = useLanguage();
  
  // Map translated values
  const valuesData = [
    {
      icon: Target,
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Heart,
      title: t("about.values.clientCentric.title"),
      description: t("about.values.clientCentric.description"),
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Rocket,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: Users,
      title: t("about.values.transparency.title"),
      description: t("about.values.transparency.description"),
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

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
                {t("about.hero.title")}
                <br />
                <span className="bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
                  {t("about.hero.title2")}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                {t("about.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-bold text-text-DEFAULT dark:text-gray-100 mb-6">
                  {t("about.story.title")} <span className="text-primary dark:text-indigo-400">{t("about.story.titleHighlight")}</span>
                </h2>
                <div className="space-y-4 text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                  <p>{t("about.story.p1")}</p>
                  <p>{t("about.story.p2")}</p>
                  <p>{t("about.story.p3")}</p>
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary via-indigo-600 to-accent p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-800 flex items-center justify-center transition-colors duration-300">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
                        <Code2 className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-text-DEFAULT dark:text-gray-100 mb-2">{t("about.story.since")}</h3>
                      <p className="text-text-muted dark:text-gray-300">{t("about.story.delivering")}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-violet-700 rounded-full blur-2xl opacity-50 animate-float" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-background-muted dark:from-gray-800 via-white dark:via-gray-900 to-background-muted dark:to-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Globe2, value: "50+", labelKey: "about.stats.clients", delay: "0s" },
                { icon: Code2, value: "100+", labelKey: "about.stats.projects", delay: "0.1s" },
                { icon: Award, value: "99%", labelKey: "about.stats.satisfaction", delay: "0.2s" },
                { icon: TrendingUp, value: "5+", labelKey: "about.stats.years", delay: "0.3s" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-text-DEFAULT dark:text-gray-100 mb-2">{stat.value}</div>
                  <div className="text-text-muted dark:text-gray-300 font-medium">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[linear-gradient(to_right,#4F46E5_1px,transparent_1px),linear-gradient(to_bottom,#4F46E5_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-text-DEFAULT dark:text-gray-100 mb-4">
                {t("about.values.title")} <span className="text-primary dark:text-indigo-400">{t("about.values.titleHighlight")}</span>
              </h2>
              <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                {t("about.values.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valuesData.map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-DEFAULT dark:text-gray-100 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-24 bg-gradient-to-br from-background-muted dark:from-gray-800 via-white dark:via-gray-900 to-background-muted dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-text-DEFAULT dark:text-gray-100 mb-4">
                {t("about.team.title")} <span className="text-primary dark:text-indigo-400">{t("about.team.titleHighlight")}</span>
              </h2>
              <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                {t("about.team.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-indigo-500/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${member.gradient} mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <Users className="w-20 h-20 text-white/30" />
                  </div>
                  <h3 className="text-xl font-bold text-text-DEFAULT dark:text-gray-100 mb-1">{member.name}</h3>
                  <p className="text-primary dark:text-indigo-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-text-muted dark:text-gray-300 leading-relaxed">{member.bio}</p>
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
              {t("about.cta.title")}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t("about.cta.subtitle")}
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4F46E5] rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <span className="text-[#4F46E5]">{t("about.cta.button")}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}