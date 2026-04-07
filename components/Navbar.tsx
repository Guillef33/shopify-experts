"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Cases", href: "/cases" },

    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#00C853] rounded-sm rotate-45 group-hover:rotate-[60deg] transition-transform duration-300" />
              <div className="absolute inset-[3px] bg-[#0A0A0A] rounded-sm rotate-45" />
            </div>
            <span className="font-heading font-bold text-sm tracking-[0.15em] uppercase text-cream">
              G&A <span className="text-[#00C853]">Studio</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="underline-green font-heading text-sm tracking-[0.1em] uppercase text-[#888] hover:text-cream transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="badge">
              <span className="dot" />
              Available for projects
            </div>
            <a href="https://api.whatsapp.com/send?phone=541167062068&text=Hi%21%20I%20want%20to%20grow%20my%20Shopify%20store" className="btn-primary text-xs py-2.5 px-5">
              Let's Talk
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0E0E0E] border-t border-[#1a1a1a]`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-base tracking-[0.1em] uppercase text-[#888] hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=541167062068&text=Hi%21%20I%20want%20to%20grow%20my%20Shopify%20store"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full justify-center mt-2"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
