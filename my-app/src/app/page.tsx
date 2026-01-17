"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import ValueProposition from "@/components/sections/ValueProposition";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <Products />
        
        {/* CTA Section */}
        <section className="py-24 bg-[#4F46E5] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Let's discuss how our premium software solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4F46E5] rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <span className="text-[#4F46E5]">Get Started</span>
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}