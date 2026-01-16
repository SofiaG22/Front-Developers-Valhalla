"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Tecnologies", href: "#technologies" },
  { label: "About Us", href: "#about" },
  { label: "Success Cases", href: "#cases" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra menú al cambiar tamaño
  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"}
      `}
    >
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Image
          src="/logo-DVa.png"
          alt="Developers Valhalla Logo"
          width={150}
          height={50}
          priority
        />

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-primary font-medium">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-dark transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex rounded-md bg-secondary px-4 py-2
                     text-white font-medium transition hover:bg-secondary/90"
        >
          Contact Us
        </a>

        {/* Mobile button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
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
        <div className="bg-white px-8 py-6 flex flex-col gap-6 border-t">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-primary font-medium hover:text-dark transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-md
                       bg-secondary px-5 py-3 text-white font-medium
                       transition hover:bg-secondary/90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
