"use client";

import { Check, Star, Rocket, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: "$15,000",
    description: "Perfect for startups and MVPs",
    features: [
      "Up to 3 months development",
      "1-2 developers",
      "Basic UI/UX design",
      "Responsive web app",
      "API integration",
      "Basic testing",
      "3 months support",
      "GitHub repository access",
    ],
    popular: false,
    cta: "Start Starter Project",
  },
  {
    name: "Professional",
    icon: Star,
    price: "$35,000",
    description: "Ideal for growing businesses",
    features: [
      "Up to 6 months development",
      "3-4 developers team",
      "Premium UI/UX design",
      "Web + Mobile app",
      "Advanced API & integrations",
      "Comprehensive testing",
      "6 months support",
      "DevOps setup included",
      "Performance optimization",
      "Analytics integration",
    ],
    popular: true,
    cta: "Start Professional Project",
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    description: "For large-scale enterprise solutions",
    features: [
      "Flexible timeline",
      "Dedicated team (5+ developers)",
      "Enterprise UI/UX design",
      "Multi-platform solutions",
      "Microservices architecture",
      "Enterprise security & compliance",
      "12+ months support",
      "Full DevOps pipeline",
      "Scalability optimization",
      "Dedicated project manager",
      "24/7 priority support",
      "Custom integrations",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
            <Zap className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-DEFAULT mb-4">
            Choose Your{" "}
            <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            All-inclusive packages with no hidden fees. Every project is custom-tailored,
            but here's a starting point for your investment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-2xl shadow-primary/30 scale-105 z-10"
                  : "border-gray-200 hover:border-primary/50 shadow-lg hover:shadow-xl"
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular
                      ? "bg-gradient-to-br from-primary to-accent"
                      : "bg-primary/10"
                  }`}
                >
                  <plan.icon
                    className={`w-8 h-8 ${
                      plan.popular ? "text-white" : "text-primary"
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-text-DEFAULT mb-2">
                  {plan.name}
                </h3>
                <p className="text-text-muted text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-text-DEFAULT">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-text-muted text-lg">/project</span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 min-h-[400px]">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular
                          ? "bg-[#4F46E5] text-white"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="/contact"
                className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:shadow-xl hover:scale-105"
                    : "bg-primary/10 text-primary hover:bg-gradient-to-r hover:from-[#4F46E5] hover:to-[#7C3AED] hover:text-white"
                }`}
              >
                <span className={plan.popular ? "text-white" : ""}>{plan.cta}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-DEFAULT mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "Source code ownership",
                "Documentation & handover",
                "Quality assurance testing",
                "Deployment assistance",
                "Post-launch support",
                "Regular progress updates",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-text-muted">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-text-muted">
              <span className="font-semibold text-text-DEFAULT">Note:</span> All prices are starting points.
              Final pricing is customized based on your specific requirements. Contact us for a detailed quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}