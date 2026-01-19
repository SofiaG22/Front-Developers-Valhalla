"use client";

import { useState, FormEvent } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          budget: "",
          projectType: "",
          message: "",
        });
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-scale-in">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl border-2 border-primary/20 dark:border-indigo-500/20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-text-DEFAULT dark:text-gray-100 mb-4">
            {t("contact.form.thankYou")}
          </h2>
          <p className="text-xl text-text-muted dark:text-gray-300 mb-2">
            {t("contact.form.received")}
          </p>
          <p className="text-text-muted dark:text-gray-300">
            {t("contact.form.response")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text-DEFAULT dark:text-gray-100 mb-4">
            {t("contact.form.title")}
            <span className="text-primary dark:text-indigo-400"> {t("contact.form.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
            {t("contact.form.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-right">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-bold text-text-DEFAULT dark:text-gray-100 mb-6">
                {t("contact.form.getInTouch")}
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: t("contact.info.email"),
                    value: "admin@developersvalhalla.com",
                    href: "mailto:admin@developersvalhalla.com",
                  },
                  {
                    icon: Phone,
                    label: t("contact.info.phone"),
                    value: "3228067742",
                    href: "tel:+573228067742",
                  },
                  {
                    icon: MapPin,
                    label: t("contact.info.location"),
                    value: "Bogotá, Colombia",
                    href: null,
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <contact.icon className="w-6 h-6 text-primary dark:text-indigo-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-muted dark:text-gray-400 mb-1">
                        {contact.label}
                      </div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-text-DEFAULT dark:text-gray-200 hover:text-primary dark:hover:text-indigo-400 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-text-DEFAULT dark:text-gray-200">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">{t("contact.form.whyChooseUs")}</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>✓ {t("contact.form.whyChooseUs1")}</li>
                <li>✓ {t("contact.form.whyChooseUs2")}</li>
                <li>✓ {t("contact.form.whyChooseUs3")}</li>
                <li>✓ {t("contact.form.whyChooseUs4")}</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-left">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-2"
                  >
                    {t("contact.form.fullName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-DEFAULT dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder={t("contact.form.placeholderName")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-2"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-DEFAULT dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder={t("contact.form.placeholderEmail")}
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-2"
                  >
                    {t("contact.form.company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-DEFAULT dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder={t("contact.form.placeholderCompany")}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-2"
                  >
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-DEFAULT dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder={t("contact.form.placeholderPhone")}
                  />
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-2"
                  >
                    {t("contact.form.budget")}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-DEFAULT dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">{t("contact.form.budgetOptions.select")}</option>
                    <option value="10k-25k">{t("contact.form.budgetOptions.range1")}</option>
                    <option value="25k-50k">{t("contact.form.budgetOptions.range2")}</option>
                    <option value="50k-100k">{t("contact.form.budgetOptions.range3")}</option>
                    <option value="100k+">{t("contact.form.budgetOptions.range4")}</option>
                    <option value="custom">{t("contact.form.budgetOptions.custom")}</option>
                  </select>
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-2"
                  >
                    {t("contact.form.projectType")}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-DEFAULT dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">{t("contact.form.projectTypeOptions.select")}</option>
                    <option value="web-app">{t("contact.form.projectTypeOptions.webApp")}</option>
                    <option value="mobile-app">{t("contact.form.projectTypeOptions.mobileApp")}</option>
                    <option value="enterprise">{t("contact.form.projectTypeOptions.enterprise")}</option>
                    <option value="api">{t("contact.form.projectTypeOptions.api")}</option>
                    <option value="cloud">{t("contact.form.projectTypeOptions.cloud")}</option>
                    <option value="other">{t("contact.form.projectTypeOptions.other")}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-DEFAULT dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={t("contact.form.placeholderMessage")}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                  <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                    {error}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span className="text-white">{t("contact.form.sending")}</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">{t("contact.form.sendMessage")}</span>
                    <Send className="w-5 h-5 text-white" />
                  </>
                )}
              </button>

              <p className="mt-4 text-sm text-text-muted dark:text-gray-300 text-center">
                {t("contact.form.secure")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}