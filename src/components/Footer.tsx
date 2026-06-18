"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Wordmark from "@/components/Wordmark";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#08040f] border-t border-brand/40 mt-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand/20 via-brand-deep/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <Wordmark height={30} />
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">{t("footer.description")}</p>
            <p className="mt-3 text-xs text-muted/80">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground text-sm mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand shrink-0" />
                <a href="mailto:admin@developersvalhalla.com" className="hover:text-foreground transition-colors">
                  admin@developersvalhalla.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand shrink-0" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground text-sm mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  {t("footer.services")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand/15 text-center text-xs text-muted">
          <p>© {new Date().getFullYear()} DevelopersValhalla. {t("footer.rightsReserved")}.</p>
        </div>
      </div>
    </footer>
  );
}
