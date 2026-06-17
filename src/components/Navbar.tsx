"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { href: "/#services", label: t("nav.services") },
    { href: "/#process", label: t("nav.process") },
    { href: "/#projects", label: t("nav.projects") },
    { href: "/about", label: t("nav.about") },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname?.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0c0618]/95 backdrop-blur-xl border-brand/40 shadow-[0_4px_40px_rgba(109,40,217,0.2)]"
          : "bg-[#0c0618]/80 backdrop-blur-sm border-brand/25"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-dv.png" alt="DevelopersValhalla" width={36} height={36} className="h-9 w-9" />
          <span className="font-display font-semibold text-foreground hidden sm:inline text-sm tracking-tight">
            Developers<span className="text-brand">Valhalla</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) ? "text-brand" : "text-muted hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button href="/contact" showArrow>
            {t("nav.bookCall")}
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="text-foreground p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-border ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-foreground font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" showArrow className="mt-2">
            {t("nav.bookCall")}
          </Button>
        </div>
      </div>
    </nav>
  );
}
