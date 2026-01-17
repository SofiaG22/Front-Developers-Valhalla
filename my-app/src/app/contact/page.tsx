"use client";

import Navbar from "@/components/Navbar";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-indigo-600 to-accent">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Get In
                <br />
                <span className="bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Ready to transform your business with premium software? Let's start the conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-background-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "contact@devsvalhalla.com",
                  href: "mailto:contact@devsvalhalla.com",
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+57 (1) 234-5678",
                  href: "tel:+5712345678",
                  gradient: "from-purple-500 to-violet-600",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Bogotá, Colombia",
                  href: null,
                  gradient: "from-cyan-500 to-blue-600",
                },
              ].map((info, index) => (
                <a
                  key={index}
                  href={info.href || undefined}
                  className={`group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up ${
                    !info.href ? "cursor-default" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-DEFAULT mb-2">{info.title}</h3>
                  <p className="text-text-muted">{info.content}</p>
                </a>
              ))}
            </div>

            {/* Form Section */}
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}