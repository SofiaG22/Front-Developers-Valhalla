"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import Link from "next/link";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Loader2,
  Sparkles,
  Inbox,
  MessagesSquare,
  Clock,
  Home,
} from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useLanguage } from "@/contexts/LanguageContext";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const TURNSTILE_ENABLED = TURNSTILE_SITE_KEY.length > 0;

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  phone: "",
  budget: "",
  budgetCurrency: "",
  budgetAmount: "",
  projectType: "",
  message: "",
};

const BUDGET_CURRENCY_CODES = [
  "COP",
  "USD",
  "EUR",
  "MXN",
  "BRL",
  "GBP",
  "CLP",
  "PEN",
  "OTHER",
] as const;

const SUCCESS_AUTO_RESET_MS = 10000;

export default function ContactForm() {
  const { t } = useLanguage();
  const turnstileRef = useRef<TurnstileInstance>(null);
  const autoResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dismissSuccess = () => {
    if (autoResetTimerRef.current) {
      clearTimeout(autoResetTimerRef.current);
      autoResetTimerRef.current = null;
    }
    setIsSubmitted(false);
    setFormData(INITIAL_FORM);
    turnstileRef.current?.reset();
  };

  useEffect(() => {
    if (!isSubmitted) return;
    autoResetTimerRef.current = setTimeout(() => {
      autoResetTimerRef.current = null;
      setIsSubmitted(false);
      setFormData(INITIAL_FORM);
      turnstileRef.current?.reset();
    }, SUCCESS_AUTO_RESET_MS);
    return () => {
      if (autoResetTimerRef.current) {
        clearTimeout(autoResetTimerRef.current);
        autoResetTimerRef.current = null;
      }
    };
  }, [isSubmitted]);

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
    setError(null);

    if (TURNSTILE_ENABLED && !turnstileToken) {
      setError(t("contact.form.captchaRequired"));
      return;
    }

    const amountTrim = formData.budgetAmount.trim();
    if (amountTrim && !formData.budgetCurrency) {
      setError(t("contact.form.currencyRequiredWhenAmount"));
      return;
    }
    if (formData.budgetCurrency && !amountTrim) {
      setError(t("contact.form.amountRequiredWhenCurrency"));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken: turnstileToken ?? undefined,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        const code = data.error;
        if (code === "CAPTCHA_REQUIRED") {
          throw new Error(t("contact.form.captchaRequired"));
        }
        if (code === "CAPTCHA_FAILED") {
          throw new Error(t("contact.form.captchaFailed"));
        }
        if (code === "CURRENCY_REQUIRED") {
          throw new Error(t("contact.form.currencyRequiredWhenAmount"));
        }
        if (code === "AMOUNT_REQUIRED") {
          throw new Error(t("contact.form.amountRequiredWhenCurrency"));
        }
        throw new Error(code || "Failed to send message");
      }

      setIsSubmitted(true);
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const successSteps = [
    { icon: Inbox, text: t("contact.form.successStep1") },
    { icon: MessagesSquare, text: t("contact.form.successStep2") },
    { icon: Clock, text: t("contact.form.successStep3") },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
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

          <div className="lg:col-span-2 animate-fade-in-left">
            {isSubmitted ? (
              <div className="relative overflow-hidden rounded-2xl border border-emerald-200/80 dark:border-emerald-500/30 bg-white dark:bg-gray-800 shadow-xl p-8 md:p-12 text-left">
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/15 dark:bg-emerald-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-primary/10 dark:bg-indigo-500/10 blur-3xl" />

                <div className="relative flex flex-col md:flex-row md:items-start gap-8">
                  <div className="shrink-0 flex justify-center md:justify-start">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping" style={{ animationDuration: "2s" }} />
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25">
                        <CheckCircle2 className="h-12 w-12 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1 space-y-6">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                        <Sparkles className="h-3.5 w-3.5" />
                        {t("contact.form.received")}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-text-DEFAULT dark:text-gray-100">
                        {t("contact.form.thankYou")}
                      </h3>
                      <p className="mt-3 text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                        {t("contact.form.response")}
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-900/40 p-6">
                      <p className="text-sm font-bold text-text-DEFAULT dark:text-gray-100 mb-4 flex items-center gap-2">
                        <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                        {t("contact.form.successNextTitle")}
                      </p>
                      <ul className="space-y-4">
                        {successSteps.map((step, i) => (
                          <li key={i} className="flex gap-3 text-sm text-text-muted dark:text-gray-300 leading-snug">
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-gray-800 text-primary dark:text-indigo-400 shadow-sm border border-gray-100 dark:border-gray-700">
                              <step.icon className="h-4 w-4" />
                            </span>
                            <span>{step.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-text-muted dark:text-gray-400">{t("contact.form.successAutoHint")}</p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="button"
                        onClick={dismissSuccess}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:shadow-xl hover:scale-[1.02] active:scale-[0.99]"
                      >
                        {t("contact.form.sendAnother")}
                        <Send className="h-4 w-4" />
                      </button>
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-3.5 text-base font-semibold text-text-DEFAULT dark:text-gray-100 transition hover:border-primary/40 dark:hover:border-indigo-500/50 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <Home className="h-4 w-4" />
                        {t("contact.form.backHome")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

                  <div>
                    <label
                      htmlFor="budgetCurrency"
                      className="block text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-2"
                    >
                      {t("contact.form.budgetCurrency")}
                    </label>
                    <select
                      id="budgetCurrency"
                      name="budgetCurrency"
                      value={formData.budgetCurrency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-DEFAULT dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">{t("contact.form.currencySelect")}</option>
                      {BUDGET_CURRENCY_CODES.map((code) => (
                        <option key={code} value={code}>
                          {t(`contact.form.currencyOptions.${code}`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budgetAmount"
                      className="block text-sm font-semibold text-text-DEFAULT dark:text-gray-100 mb-2"
                    >
                      {t("contact.form.budgetAmount")}
                    </label>
                    <input
                      type="text"
                      id="budgetAmount"
                      name="budgetAmount"
                      inputMode="decimal"
                      autoComplete="off"
                      value={formData.budgetAmount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-DEFAULT dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder={t("contact.form.placeholderBudgetAmount")}
                    />
                  </div>
                </div>

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

                {TURNSTILE_ENABLED && (
                  <div className="mb-6 flex justify-center md:justify-start">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={TURNSTILE_SITE_KEY}
                      onSuccess={setTurnstileToken}
                      onExpire={() => setTurnstileToken(null)}
                      onError={() => setTurnstileToken(null)}
                      options={{ theme: "auto" }}
                    />
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <p className="text-red-600 dark:text-red-400 text-sm font-medium">{error}</p>
                  </div>
                )}

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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
