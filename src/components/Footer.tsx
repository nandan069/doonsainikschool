"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";


const footerLinks = {
  ourCourses: [
    { name: "RIMC Coaching in Dehradun", href: "/rimc-coaching" },
    { name: "Sainik School Coaching", href: "/sainik-school-coaching" },
    { name: "Navodaya Vidyalaya Coaching", href: "/navodaya-vidhayalaya-coaching" },
    { name: "NDA Coaching After 10th", href: "#" },
    { name: "Military School Coaching", href: "#" },
    { name: "Welham's School Coaching", href: "#" },
    { name: "Doon School Coaching", href: "#" },
  ],
  quickLinks: [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Faculty", href: "/faculty" },
    { name: "Results", href: "/result" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Online Payments", href: "/payment" },
    { name: "Admission Procedure", href: "/admission-procedure" },
    { name: "Fee Structure", href: "/fee-structure" },
  ],
  resources: [
    {
      name: "Admission Procedure 2026",
      href: "https://doonsainikschool.com/wp-content/uploads/2025/10/Admission-Procedure-Form-2026.pdf",
    },
    {
      name: "Admission Form 2025-26",
      href: "https://doonsainikschool.com/wp-content/uploads/2025/06/04087b63-3b2e-4d9b-94cb-4271c47ee01f.pdf",
    },
    {
      name: "Prospects 2026 (Doon Sainik)",
      href: "https://doonsainikschool.com/wp-content/uploads/2025/10/1new-2026-Prospects-Doon-sainik-111.pdf-1_compressed.pdf",
    },
    {
      name: "RIMC Coaching NDA After 10th",
      href: "https://doonsainikschool.com/wp-content/uploads/2025/10/1new-2026-Prospects-Doon-sainik-111111-1_compressed.pdf",
    },
    {
      name: "Navodaya Prospectus 2025",
      href: "https://doonsainikschool.com/wp-content/uploads/2025/06/43c46616-5cb6-4daf-bdec-e0bb0104817d.pdf",
    },
    {
      name: "Military School Coaching Guide",
      href: "https://doonsainikschool.com/wp-content/uploads/2025/10/Best-Military-School-School-Coaching-in-Dehradun.pdf-3.pdf",
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-military-primary border-t border-white/10 relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-military-accent/60 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.8) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 md:py-20">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-6 group">
              <img
                src="https://doonsainikschool.com/wp-content/uploads/2025/06/doon-sainik-school-4.jpeg"
                alt="Doon Sainik School Logo"
                className="h-14 md:h-16 w-auto object-contain rounded-sm"
              />
            </Link>

            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Doon Sainik School, Dehradun, is the premier institution for RIMC, Sainik School, and
              Military School entrance preparation. Located at Kalidas Road, Dehradun — we forge
              leaders through discipline, honour, and academic excellence.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+918006615154"
                className="flex items-center gap-3 text-sm text-white/90 hover:text-military-accent transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-military-accent/10 border border-military-accent/15 flex items-center justify-center group-hover:bg-military-accent/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-military-accent" />
                </div>
                +91-8006615154
              </a>
              <a
                href="tel:+918586858986"
                className="flex items-center gap-3 text-sm text-white/90 hover:text-military-accent transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-military-accent/10 border border-military-accent/15 flex items-center justify-center group-hover:bg-military-accent/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-military-accent" />
                </div>
                +91-8586858986
              </a>
              <a
                href="mailto:info@doonsainikschool.com"
                className="flex items-center gap-3 text-sm text-white/90 hover:text-military-accent transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-military-accent/10 border border-military-accent/15 flex items-center justify-center group-hover:bg-military-accent/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-military-accent" />
                </div>
                info@doonsainikschool.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/90">
                <div className="w-8 h-8 rounded-lg bg-military-accent/10 border border-military-accent/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-military-accent" />
                </div>
                Kalidas Road, Dehradun, Uttarakhand, India
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/DOON-Military-School-Dehradun-100558795124194"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-military-accent/10 border border-military-accent/15 flex items-center justify-center text-white/90 hover:text-military-accent hover:border-military-accent/40 transition-all"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCWzmioLOyC9xVG0h_8_lWvw/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-military-accent/10 border border-military-accent/15 flex items-center justify-center text-white/90 hover:text-military-accent hover:border-military-accent/40 transition-all"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Our Courses */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-military-accent" />
              Our Courses
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.ourCourses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/90 hover:text-military-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-military-accent" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/90 hover:text-military-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads & Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-military-accent" />
              Downloads
            </h3>
            <ul className="space-y-2.5 mb-8">
              {footerLinks.resources.map((res) => (
                <li key={res.name}>
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/90 hover:text-military-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {res.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Admission CTA */}
            <div className="bg-military-accent/10 border border-military-accent/20 rounded-2xl p-5">
              <div className="font-heading text-2xl text-white uppercase mb-1">
                Admission Open
              </div>
              <div className="text-xs text-military-accent font-semibold uppercase tracking-widest mb-4">
                2025-26 Session
              </div>
              <Link
                href="/registration"
                className="flex items-center justify-center gap-2 bg-military-accent text-white py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-yellow-300 transition-colors"
              >
                Register Now <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Map Embed placeholder */}
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-white/10 h-[180px] bg-black/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-military-accent/40 mx-auto mb-2" />
              <p className="text-white/90 text-sm">Kalidas Road, Dehradun, Uttarakhand</p>
              <a
                href="https://maps.google.com/?q=Doon+Sainik+School+Dehradun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-military-accent/60 text-xs hover:text-military-accent transition-colors mt-1 inline-block"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-military-dark/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/90 text-xs">
            © {currentYear} Doon Sainik School Dehradun. All rights reserved. GS India Doon Sainik Academy.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/40 text-xs hover:text-military-accent/70 transition-colors uppercase tracking-wider"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
