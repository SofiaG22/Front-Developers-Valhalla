"use client";

import Navbar from "@/components/Navbar";
import { ExternalLink, Github, Globe, Smartphone, Cloud, Code2, TrendingUp, Award } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "A scalable e-commerce platform serving 50K+ users with real-time inventory management, payment processing, and analytics dashboard.",
    image: "ecommerce",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
    results: [
      { metric: "50K+", label: "Active Users" },
      { metric: "300%", label: "Sales Increase" },
      { metric: "99.9%", label: "Uptime" },
    ],
    gradient: "from-blue-500 to-indigo-600",
    client: "US Retail Company",
  },
  {
    title: "Healthcare Management System",
    category: "Enterprise Software",
    description: "HIPAA-compliant healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.",
    image: "healthcare",
    technologies: [".NET", "React", "SQL Server", "Azure", "Docker"],
    results: [
      { metric: "100K+", label: "Patient Records" },
      { metric: "60%", label: "Efficiency Gain" },
      { metric: "HIPAA", label: "Compliant" },
    ],
    gradient: "from-green-500 to-emerald-600",
    client: "Healthcare Network",
  },
  {
    title: "Financial Trading Platform",
    category: "Web Application",
    description: "Real-time trading platform with advanced charting, portfolio management, and automated trading features.",
    image: "trading",
    technologies: ["Vue.js", "Python", "WebSockets", "Redis", "AWS"],
    results: [
      { metric: "$2M+", label: "Daily Volume" },
      { metric: "<100ms", label: "Latency" },
      { metric: "24/7", label: "Availability" },
    ],
    gradient: "from-purple-500 to-violet-600",
    client: "FinTech Startup",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Application",
    description: "Secure mobile banking application with biometric authentication, money transfers, bill payments, and investment tracking.",
    image: "banking",
    technologies: ["Flutter", "Node.js", "MongoDB", "Firebase", "AWS"],
    results: [
      { metric: "200K+", label: "Downloads" },
      { metric: "4.8★", label: "App Rating" },
      { metric: "SOC 2", label: "Certified" },
    ],
    gradient: "from-cyan-500 to-blue-600",
    client: "Regional Bank",
  },
  {
    title: "SaaS Project Management",
    category: "Web Application",
    description: "Comprehensive project management SaaS with team collaboration, time tracking, resource allocation, and reporting.",
    image: "saas",
    technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL", "Kubernetes"],
    results: [
      { metric: "10K+", label: "Companies" },
      { metric: "500K+", label: "Users" },
      { metric: "99.99%", label: "Uptime" },
    ],
    gradient: "from-orange-500 to-red-600",
    client: "SaaS Company",
  },
  {
    title: "IoT Fleet Management",
    category: "Enterprise Software",
    description: "IoT-powered fleet management system with real-time GPS tracking, route optimization, and predictive maintenance.",
    image: "iot",
    technologies: ["React", "Python", "IoT Hub", "Azure", "Machine Learning"],
    results: [
      { metric: "5K+", label: "Vehicles" },
      { metric: "25%", label: "Fuel Savings" },
      { metric: "30%", label: "Efficiency" },
    ],
    gradient: "from-pink-500 to-rose-600",
    client: "Logistics Company",
  },
];

const stats = [
  { icon: Award, value: "100+", label: "Projects Delivered" },
  { icon: TrendingUp, value: "50+", label: "Happy Clients" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Code2, value: "5+", label: "Years Experience" },
];

export default function Portfolio() {
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
                Our
                <br />
                <span className="bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Showcasing premium software solutions that drive real business results.
                Every project tells a story of innovation, quality, and success.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-text-DEFAULT mb-2">{stat.value}</div>
                  <div className="text-text-muted font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-gradient-to-b from-white to-background-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image Placeholder */}
                  <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                    <Code2 className="w-32 h-32 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-text-DEFAULT mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-primary font-semibold">{project.client}</p>
                      </div>
                    </div>

                    <p className="text-text-muted mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 bg-background-muted text-text-muted text-xs font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      {project.results.map((result, rIndex) => (
                        <div key={rIndex} className="text-center">
                          <div className={`text-2xl font-bold bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent mb-1`}>
                            {result.metric}
                          </div>
                          <div className="text-xs text-text-muted">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
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
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4F46E5] rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <span className="text-[#4F46E5]">Start Your Project</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}