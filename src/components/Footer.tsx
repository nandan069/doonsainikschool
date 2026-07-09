import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f110e] text-military-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-military-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-military-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
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
            <p className="text-military-white/70 text-sm leading-relaxed max-w-sm">
              Premier institution dedicated to shaping the future leaders of the Armed Forces through discipline, honor, and academic excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/DOON-Military-School-Dehradun-100558795124194" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-military-accent hover:text-military-bg transition-colors duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCWzmioLOyC9xVG0h_8_lWvw/videos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-military-accent hover:text-military-bg transition-colors duration-300">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading tracking-widest uppercase text-xl text-military-white relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-military-accent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Admission Procedure', 'Fee Structure', 'Result', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-2 text-military-white/70 hover:text-military-accent transition-colors text-sm group">
                    <ChevronRight className="w-4 h-4 text-military-accent/50 group-hover:text-military-accent transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h3 className="font-heading tracking-widest uppercase text-xl text-military-white relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-military-accent">
              Top Courses
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'RIMC Coaching', path: '/rimc-coaching' },
                { name: 'Sainik School Coaching', path: '/sainik-school-coaching' },
                { name: 'Navodaya Vidhayalaya', path: '/navodaya-vidhayalaya-coaching' },
                { name: 'Military School', path: '/sainik-school-coaching' }, // Need proper route
              ].map((course) => (
                <li key={course.name}>
                  <Link href={course.path} className="flex items-center gap-2 text-military-white/70 hover:text-military-accent transition-colors text-sm group">
                    <ChevronRight className="w-4 h-4 text-military-accent/50 group-hover:text-military-accent transition-colors" />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="font-heading tracking-widest uppercase text-xl text-military-white relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-military-accent">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-military-white/70">
                <MapPin className="w-5 h-5 text-military-accent shrink-0 mt-1" />
                <span>Sahastradhara Rd, near touchwood school, Dehradun, Uttarakhand 248001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-military-white/70">
                <Phone className="w-5 h-5 text-military-accent shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918006615154" className="hover:text-military-accent transition-colors">+91 8006615154</a>
                  <a href="tel:+918586858986" className="hover:text-military-accent transition-colors">+91 8586858986</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-military-white/70">
                <Mail className="w-5 h-5 text-military-accent shrink-0" />
                <a href="mailto:info@doonsainikschool.com" className="hover:text-military-accent transition-colors">info@doonsainikschool.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-military-white/50 text-sm">
            © {new Date().getFullYear()} Doon Sainik School. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-military-white/50">
            <Link href="/privacy-policy" className="hover:text-military-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-military-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
