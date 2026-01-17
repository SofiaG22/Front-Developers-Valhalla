"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5" : "bg-white"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-DV2.svg"
            alt="Devs Valhalla Logo"
            width={120}
            height={40}
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-bold text-text-DEFAULT hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Devs Valhalla
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 relative ${
                  isActive(link.href)
                    ? "bg-[#4F46E5] text-white shadow-md"
                    : "text-text-muted hover:text-primary hover:bg-indigo-50"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-lg text-white font-semibold shadow-md hover:shadow-lg hover:shadow-[#4F46E5]/30 transition-all duration-300 hover:scale-105"
        >
          Contact Us
        </Link>

        {/* Mobile button */}
        <button
          className="md:hidden text-text-DEFAULT hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white px-6 py-6 flex flex-col gap-4 border-t border-gray-200 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive(link.href)
                  ? "bg-[#4F46E5] text-white"
                  : "text-text-DEFAULT hover:bg-indigo-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-lg text-white font-semibold transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}