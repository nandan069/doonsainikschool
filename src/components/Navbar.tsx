"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  {
    name: "Courses",
    href: "#courses",
    sublinks: [
      { name: "RIMC Coaching", href: "/rimc-coaching" },
      { name: "Sainik School Coaching", href: "/sainik-school-coaching" },
      { name: "Navodaya Vidyalaya", href: "/navodaya-vidhayalaya-coaching" },
      { name: "Military School Coaching", href: "#" },
      { name: "Welham Girls/Boys School", href: "#" },
    ],
  },
  {
    name: "Admissions",
    href: "#",
    sublinks: [
      { name: "Admission Procedure", href: "/admission-procedure" },
      { name: "Fee Structure", href: "/fee-structure" },
      { name: "Admission Form 2026", href: "https://doonsainikschool.com/wp-content/uploads/2025/10/Admission-Procedure-Form-2026.pdf" },
      { name: "Register Now", href: "/registration" },
    ],
  },
  { name: "Result", href: "/result" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-military-bg/95 backdrop-blur-xl border-b border-white/8 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src="https://doonsainikschool.com/wp-content/uploads/2025/06/doon-sainik-school-4.jpeg"
            alt="Doon Sainik School Logo"
            className="h-10 md:h-12 w-auto object-contain rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow"
          />
        </Link>

        {/* Desktop Nav — centered */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`relative text-[11px] font-semibold uppercase tracking-[0.15em] px-3 py-2 rounded-lg flex items-center gap-1 transition-colors duration-200 ${
                  isScrolled
                    ? "text-military-white/70 hover:text-military-white"
                    : "text-military-white/80 hover:text-military-white"
                }`}
              >
                {link.name}
                {link.sublinks && (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-60" />
                )}
                {/* Underline */}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-military-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>

              {/* Dropdown */}
              {link.sublinks && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-1 min-w-[220px] bg-military-bg/98 backdrop-blur-2xl border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                    >
                      {/* Top accent */}
                      <div className="h-px bg-gradient-to-r from-military-accent/60 to-transparent" />
                      <div className="flex flex-col py-2">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="group/item px-4 py-2.5 text-[11px] text-military-white/60 hover:text-military-accent hover:bg-military-accent/5 transition-colors flex items-center gap-2 uppercase tracking-widest font-semibold"
                          >
                            <span className="w-1 h-1 rounded-full bg-military-accent/0 group-hover/item:bg-military-accent transition-colors" />
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right Side — Phone + CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="tel:+918586858986"
            className="flex items-center gap-2 text-military-white/50 hover:text-military-accent transition-colors text-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden xl:inline tracking-wide">+91-8586858986</span>
          </a>
          <Link
            href="/registration"
            id="nav-apply-btn"
            className="flex items-center gap-1.5 bg-military-accent text-military-bg px-5 py-2.5 rounded-full font-bold uppercase text-[11px] tracking-[0.15em] hover:shadow-[0_0_24px_rgba(212,175,55,0.6)] hover:bg-yellow-300 transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-military-white p-2 ml-2 border border-white/10 rounded-lg hover:border-military-accent/40 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-military-bg/98 backdrop-blur-2xl border-t border-white/8 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-widest text-military-white/80 py-3 border-b border-white/5 hover:text-military-accent transition-colors"
                    onClick={() => !link.sublinks && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.sublinks && (
                    <div className="flex flex-col pl-4 space-y-1 mt-1 mb-2">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="text-xs text-military-white/50 hover:text-military-accent transition-colors py-1.5 uppercase tracking-wider"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          → {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/registration"
                  className="w-full text-center bg-military-accent text-military-bg py-3.5 rounded-full font-bold uppercase text-sm tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
                <a
                  href="tel:+918586858986"
                  className="w-full text-center border border-military-accent/30 text-military-accent py-3.5 rounded-full font-semibold text-sm"
                >
                  Call: +91-8586858986
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
