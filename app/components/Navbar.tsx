"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-700 ${
        scrolled
          ? "bg-alabaster/95 backdrop-blur-sm border-b border-charcoal/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] flex items-center justify-between px-6 md:px-16 h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="font-heading text-2xl md:text-3xl tracking-tight text-charcoal italic">
          BSC
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] items-end cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px bg-charcoal transition-all duration-500 ${
              menuOpen ? "w-5 rotate-45 translate-y-[3px]" : "w-5"
            }`}
          />
          <span
            className={`block h-px bg-charcoal transition-all duration-500 ${
              menuOpen ? "w-5 -rotate-45 -translate-y-[3px]" : "w-4"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="md:hidden overflow-hidden bg-alabaster border-b border-charcoal/10"
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-xs font-medium uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
