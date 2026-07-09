"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  {
    name: "Courses",
    href: "#",
    sublinks: [
      { name: "RIMC Coaching", href: "/rimc-coaching" },
      { name: "Sainik School Coaching", href: "/sainik-school-coaching" },
      { name: "Navodaya Vidhayalaya", href: "/navodaya-vidhayalaya-coaching" },
    ],
  },
  {
    name: "Admissions",
    href: "#",
    sublinks: [
      { name: "Admission Procedure", href: "/admission-procedure" },
      { name: "Fee Structure", href: "/fee-structure" },
    ],
  },
  { name: "Faculty", href: "/faculty" },
  { name: "Result", href: "/result" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-military-bg/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 rounded-full bg-military-accent flex items-center justify-center text-military-bg font-heading text-2xl font-bold uppercase overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            DSS
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl tracking-wide uppercase text-military-white leading-none">
              Doon Sainik
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-military-accent font-semibold">
              School Dehradun
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-military-white/80 hover:text-military-accent transition-colors flex items-center gap-1 py-2"
              >
                {link.name}
                {link.sublinks && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Dropdown */}
              {link.sublinks && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-military-bg/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    >
                      <div className="flex flex-col py-2">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="px-5 py-3 text-sm text-military-white/70 hover:text-military-accent hover:bg-white/5 transition-colors"
                          >
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

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/registration"
            className="hidden md:flex items-center gap-2 bg-military-accent text-military-bg px-6 py-3 rounded-full font-bold uppercase text-sm tracking-widest hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:bg-white transition-all duration-300"
          >
            Apply Now
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-military-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-military-bg border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.href}
                    className="text-lg font-heading tracking-wide uppercase text-military-white py-2"
                    onClick={() => !link.sublinks && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.sublinks && (
                    <div className="flex flex-col pl-4 border-l border-white/10 space-y-2 mt-2">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="text-sm text-military-white/70 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
