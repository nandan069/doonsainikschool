"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Shield,
  Award,
  BookOpen,
  Target,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Play,
  Check,
  Medal,
  Dumbbell,
  Brain,
  GraduationCap,
  Swords,
  Trophy,
  Building2,
  X,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   Animated Counter
───────────────────────────────────────── */
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease out
        const currentVal = Math.round(easeOut * target);
        
        if (ref.current) {
          ref.current.textContent = prefix + currentVal + suffix;
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, target, duration, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

/* ─────────────────────────────────────────
   Fade-Up wrapper
───────────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Section Header
───────────────────────────────────────── */
function SectionHeader({
  eyebrow,
  heading,
  sub,
  light = false,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  sub?: string;
  light?: boolean;
}) {
  return (
    <FadeUp className="mb-16 md:mb-20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px bg-green-900" />
        <span
          className={`text-xs uppercase tracking-[0.35em] font-semibold ${light ? "text-white" : "text-green-900"
            }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`font-heading text-5xl md:text-6xl lg:text-7xl uppercase leading-none mb-4 text-green-950`}
      >
        {heading}
      </h2>
      {sub && (
        <p
          className={`text-base md:text-lg max-w-xl leading-relaxed text-military-dark/90`}
        >
          {sub}
        </p>
      )}
    </FadeUp>
  );
}

/* ─────────────────────────────────────────
   Announcement Ticker
───────────────────────────────────────── */
export function AnnouncementTicker() {
  const announcements = [
    "🎯 Admission Open For 2025-26 Session — Limited Seats Available",
    "📋 Admission Procedure 2026 Now Available — Download Now",
    "🏆 RIMC Coaching 2026-27 Batch Starting — Register Today",
    "📞 Call Now: +91-8006615154 / +91-8586858986",
    "🌟 AISSEE 2027-28 Coaching Registration Open",
    "✅ All India Sainik School Mock Test 2025 — Free Download",
  ];

  return (
    <div className="bg-military-accent text-white py-2 overflow-hidden relative">
      <div className="flex items-center">
        <div className="shrink-0 bg-military-bg text-green-900 px-4 py-0.5 text-xs font-bold uppercase tracking-widest mr-4 z-10">
          Latest
        </div>
        <div className="overflow-hidden flex-1">
          <div className="marquee-inner whitespace-nowrap">
            {[...announcements, ...announcements].map((a, i) => (
              <span key={i} className="text-xs font-semibold mr-12 tracking-wide">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────── */
function HeroSection() {
  const slides = [
    {
      id: 0,
      badge: "Admissions Open for 2025-26",
      line1: "Doon Sainik",
      line2: "School Dehradun",
      sub: "Dehradun&apos;s premier institution for RIMC, Sainik School, and Military School entrance preparation. We forge leaders through discipline, honour, and academic excellence.",
      primaryCta: { label: "Enroll Now", href: "/registration" },
      secondaryCta: { label: "Explore Courses", href: "#courses" },
      image: "/images/2.jpeg",
    },
    {
      id: 1,
      badge: "RIMC Coaching 2026-27 Batch Open",
      line1: "RIMC",
      line2: "Coaching",
      sub: "India&apos;s finest coaching for Rashtriya Indian Military College entrance. Expert ex-RIMC faculty, rigorous PT sessions & SSB training under Ex-GTOs.",
      primaryCta: { label: "Join RIMC Batch", href: "/rimc-coaching" },
      secondaryCta: { label: "Know More", href: "/rimc-coaching" },
      image: "/images/1.jpeg",
    },
    {
      id: 2,
      badge: "AISSEE 2027-28 Registration Open",
      line1: "Sainik School",
      line2: "Coaching",
      sub: "Comprehensive preparation for the All India Sainik School Entrance Exam. Class 6 & Class 9 batches with proven results and 98% success rate.",
      primaryCta: { label: "Join Elite Batch", href: "/sainik-school-coaching" },
      secondaryCta: { label: "Free Mock Test", href: "#" },
      image: "/images/3.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    startTimers();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (idx: number) => {
    setCurrent(idx);
    startTimers();
  };

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" id="home">
      {/* Slides backgrounds */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 z-0 transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          
          <img loading="lazy" decoding="async"             src={s.image}
            alt={s.line1}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
          
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center max-w-[1400px] mx-auto px-6 md:px-12 w-full text-center pt-28 pb-44">
        {/* Badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={"badge-" + current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-2 mb-8 bg-military-secondary/40 border border-military-accent/40 px-5 py-2.5 rounded-full backdrop-blur-md"
          >
            <Shield className="w-4 h-4 text-green-900" />
            <span className="text-white uppercase tracking-[0.25em] text-xs font-bold">
              {slide.badge}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-military-accent animate-pulse" />
          </motion.div>
        </AnimatePresence>

        {/* Heading */}
        <AnimatePresence mode="wait">
          <motion.div
            key={"heading-" + current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1
              className="font-heading text-[clamp(52px,9vw,130px)] text-white uppercase leading-none mb-2 tracking-tight"
              style={{ textShadow: "0 0 80px rgba(0,0,0,0.8)" }}
            >
              {slide.line1}
            </h1>
            <h1 className="font-heading text-[clamp(52px,9vw,130px)] uppercase leading-none mb-8 tracking-tight gold-shimmer">
              {slide.line2}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Sub */}
        <AnimatePresence mode="wait">
          <motion.p
            key={"sub-" + current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-base md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed font-light tracking-wide"
          >
            {slide.sub}
          </motion.p>
        </AnimatePresence>

        {/* CTAs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={"cta-" + current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Link
              href={slide.primaryCta.href}
              className="group relative flex items-center gap-2 bg-military-secondary text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-[0.15em] overflow-hidden hover:shadow-[0_0_30px_rgba(107,142,35,0.6)] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">{slide.primaryCta.label}</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={slide.secondaryCta.href}
              className="group flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold uppercase text-sm tracking-[0.15em] hover:border-military-accent hover:bg-military-accent hover:text-military-dark transition-all duration-300 backdrop-blur-sm"
            >
              {slide.secondaryCta.label}
            </Link>
            <a
              href="tel:+918586858986"
              className="group flex items-center gap-2 text-white/90 hover:text-green-900 transition-colors text-sm"
            >
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-military-accent/50 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              +91-8586858986
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: 500, suffix: "+", label: "Students Selected" },
            { value: 15, suffix: "+", label: "Years of Excellence" },
            { value: 98, suffix: "%", label: "Success Rate" },
            { value: 200, suffix: "+", label: "Expert Faculty" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              className="bg-green-50 backdrop-blur-md border border-white/40 rounded-2xl py-4 px-3 text-center shadow-lg hover:bg-green-100 transition-all duration-300"
            >
              <div className="font-heading text-3xl md:text-4xl text-military-secondary" style={{ textShadow: "0 2px 10px rgba(107,142,35,0.3)" }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-military-dark mt-1 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:border-military-accent hover:text-military-accent transition-all duration-200"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:border-military-accent hover:text-military-accent transition-all duration-200"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={"Go to slide " + (i + 1)}
              className="relative flex items-center justify-center"
            >
              <span
                className="block rounded-full transition-all duration-400"
                style={{
                  width: i === current ? "32px" : "8px",
                  height: "8px",
                  background: i === current ? "rgb(212,175,55)" : "rgba(255,255,255,0.3)",
                }}
              />
            </button>
          ))}
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/90">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 right-8 md:right-16 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/90 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-military-accent/80 to-transparent" style={{ animation: "scroll-pulse 2s ease-in-out infinite" }} />
      </motion.div>

      {/* Graphic accents */}
      <div className="absolute top-24 right-8 md:right-20 z-10 opacity-10">
        <div className="w-32 h-32 border border-military-accent rounded-full" />
        <div className="w-20 h-20 border border-military-accent rounded-full absolute top-6 left-6" />
      </div>
      <div className="absolute bottom-24 left-8 md:left-20 z-10 opacity-10">
        <div className="flex flex-col gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-0.5 bg-military-accent" style={{ width: (20 + i * 12) + "px" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ACHIEVERS MARQUEE SECTION
───────────────────────────────────────── */
function AchieversMarqueeSection() {
  const achievers = [
    { name: "Aarav Sharma", exam: "RIMC", year: "2024", image: "https://doonsainikschool.com/wp-content/uploads/2025/06/IMG_E3033.jpg" },
    { name: "Rohan Singh", exam: "Sainik School", year: "2024", image: "https://doonsainikschool.com/wp-content/uploads/2025/06/IMG_E3035.jpg" },
    { name: "Aditya Kumar", exam: "RMS", year: "2023", image: "https://doonsainikschool.com/wp-content/uploads/2025/06/IMG_E3037.jpg" },
    { name: "Shaurya Pratap", exam: "NDA", year: "2023", image: "https://doonsainikschool.com/wp-content/uploads/2025/06/IMG_E3032.jpg" },
    { name: "Vihaan Das", exam: "Sainik School", year: "2024", image: "https://divyasamagam.in/wp-content/uploads/2025/08/Done-2-1.jpg" },
    { name: "Krishna Nair", exam: "RIMC", year: "2023", image: "https://divyasamagam.in/wp-content/uploads/2025/08/Done-3-1.jpg" },
    { name: "Ishaan Reddy", exam: "RMS", year: "2024", image: "https://divyasamagam.in/wp-content/uploads/2025/08/Done-6-1.jpg" },
    { name: "Kabir Das", exam: "Sainik School", year: "2024", image: "https://divyasamagam.in/wp-content/uploads/2025/08/Done-4-1.jpg" },
    { name: "Dhruv Patel", exam: "NDA", year: "2023", image: "https://doonsainikschool.com/wp-content/uploads/2025/06/IMG_E3034.jpg" },
    { name: "Arjun Verma", exam: "RIMC", year: "2024", image: "https://doonsainikschool.com/wp-content/uploads/2025/06/IMG_E3036.jpg" },
  ];

  return (
    <section className="py-16 bg-military-bg relative overflow-hidden border-b border-military-dark/5">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-military-bg via-transparent to-military-bg z-10" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8 relative z-10 text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-green-950 uppercase tracking-wider">
          Our <span className="text-green-900">Achievers</span>
        </h2>
        <p className="text-military-dark/90 text-sm mt-2 max-w-lg mx-auto">
          Proud students who have successfully cleared the toughest defence entrance exams in India.
        </p>
      </div>

      {/* Infinite marquee container */}
      <div className="relative w-full overflow-hidden z-10">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...achievers, ...achievers, ...achievers].map((student, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 mx-4 bg-green-50 border border-military-dark/5 rounded-2xl p-4 flex flex-col items-center text-center group hover:border-military-accent/40 transition-colors"
            >
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border-2 border-military-accent/20 mb-4 group-hover:border-military-accent/80 transition-colors relative">
                <img loading="lazy" decoding="async"                   src={student.image}
                  alt={student.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700"
                />
                
              </div>
              <h3 className="text-military-dark font-bold text-xl leading-tight mb-1">
                {student.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <Medal className="w-4 h-4 text-military-accent" />
                <span className="text-military-accent text-xs font-semibold uppercase tracking-wider">
                  {student.exam}
                </span>
                <span className="text-military-dark/90 text-[10px] ml-1">
                  ({student.year})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   NOTICE TICKER BANNER
───────────────────────────────────────── */
function NoticeBanner() {
  return (
    <div className="bg-[#354B20] text-white border-y border-[#354B20]/80 py-5 relative overflow-hidden">
      <div className="absolute inset-0 camo-texture opacity-20 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center gap-6 relative z-10">
        <div className="shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white border border-white/40 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
            Admission Open
          </span>
        </div>
        <p className="text-sm text-white/90 flex items-center gap-4">
          <span>
            Hurry! Admission is now open for 2025-26 session.{" "}
            <span className="text-white font-bold">Limited seats available.</span>
          </span>
        </p>
        <Link
          href="/registration"
          className="ml-auto shrink-0 text-xs font-bold uppercase tracking-widest text-white hover:text-military-accent transition-colors flex items-center gap-1"
        >
          Register Now <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────── */
function AboutSection() {
  const milestones = [
    { year: "2008", event: "Doon Sainik School founded in Dehradun" },
    { year: "2011", event: "Director honored with National Award for Teachers" },
    { year: "2019", event: "Received Indian Education Award at New Delhi" },
    { year: "2021", event: "Course mentors for NDA batch at KV IMA, Dehradun" },
    { year: "2025", event: "500+ students successfully selected in top institutions" },
  ];

  const pillars = [
    "Comprehensive Syllabus Coverage for RIMC, Sainik & Military Schools",
    "Rigorous Physical Training & Fitness Programs",
    "SSB Interview Preparation under Ex-GTOs",
    "Discipline & Character Building",
    "Free Tablet + e-Learning Platform",
    "GS Faculty for Army Cadets",
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle camo texture */}
      <div className="absolute inset-0 camo-texture opacity-40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image Column */}
          <FadeUp className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group">
                <img loading="lazy" decoding="async"                   src="https://doonsainikschool.com/wp-content/uploads/2025/05/achieve-award-from-CM.jpeg"
                  alt="Doon Sainik School Director"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 md:-right-8 bg-green-900 border border-military-accent/30 rounded-2xl p-5 shadow-2xl max-w-[200px]"
              >
                <div className="font-heading text-4xl text-white mb-1">
                  <AnimatedCounter target={15} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-white/90">
                  Years of Excellence
                </div>
              </motion.div>
              {/* Gold border accent */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-military-accent/30 rounded-2xl" />
            </div>
          </FadeUp>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-military-accent" />
                <span className="text-xs uppercase tracking-[0.35em] font-semibold text-military-accent">
                  About Doon Sainik School
                </span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-green-950 uppercase leading-none mb-6">
                Forging The
                <br />
                <span className="text-military-secondary">Leaders Of</span>
                <br />
                <span className="text-military-primary">Tomorrow</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-military-dark/90 text-base md:text-lg leading-relaxed mb-6">
                Doon Sainik School, Dehradun, stands as a beacon of excellence in preparatory
                education for the Armed Forces. Situated at Kalidas Road, Dehradun — in the heart
                of India&apos;s most prestigious educational district — we provide an environment that
                fosters physical fitness, mental robustness, and academic brilliance.
              </p>
              <p className="text-military-dark/90 text-base leading-relaxed mb-8">
                Our institution prepares cadets for{" "}
                <span className="text-military-dark font-medium">
                  RIMC, Sainik Schools, and Military Schools
                </span>
                . The Doon Sainik School lays stress on sports for overall physical and mental
                development — football, swimming, handball, kho-kho, and badminton.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <ul className="space-y-3 mb-10">
                {pillars.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-military-accent/15 border border-military-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-military-accent" />
                    </div>
                    <span className="text-military-dark/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.3}>
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-2 bg-green-900 text-white px-7 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-green-800 transition-all duration-300"
              >
                Discover Our History
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeUp>
          </div>
        </div>


        {/* Timeline */}
        <FadeUp delay={0.1} className="mt-20">
          <h3 className="font-heading text-4xl text-green-950 uppercase mb-10 text-center">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-military-accent via-military-accent/30 to-transparent hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-row`}
                >
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"
                      } text-left`}
                  >
                    <div className="bg-green-50 border border-military-dark/10 rounded-xl p-4 hover:bg-green-100 transition-colors">
                      <span className="text-military-dark font-heading text-2xl">{m.year}</span>
                      <p className="text-military-dark/90 text-sm mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-military-accent border-2 border-military-bg shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   COURSES SECTION
───────────────────────────────────────── */
function CoursesSection() {
  const courses = [
    {
      icon: Shield,
      title: "RIMC Coaching",
      subtitle: "Rashtriya Indian Military College",
      description:
        "Origin to the Prince of Wales Royal Indian Military College, inaugurated on 13th March 1922. RIMC is a feeder institution for the National Defence Academy, Indian Naval Academy, and the Indian Armed Forces.",
      features: ["RIMC Foundation Course", "SSB Training under Ex-GTOs", "Physical Training", "Free Tablet + e-Learning Platform"],
      link: "/rimc-coaching",
      badge: "Most Popular",
      color: "from-military-primary/20 to-military-primary/5",
    },
    {
      icon: Swords,
      title: "Sainik School Coaching",
      subtitle: "All India Sainik School Entrance",
      description:
        "Comprehensive coaching for All India Sainik School Entrance Exam (AISSEE). Prepare for Class 6 and Class 9 admissions with our expert faculty and rigorous curriculum.",
      features: ["AISSEE Preparation", "SSB Training under Ex-GTOs", "Physical Training", "Free Access e-Learning Platform"],
      link: "/sainik-school-coaching",
      badge: "",
      color: "from-military-secondary/20 to-military-secondary/5",
    },
    {
      icon: GraduationCap,
      title: "Military School Coaching",
      subtitle: "Rashtriya Military Schools",
      description:
        "Expert preparation for RMS (Rashtriya Military School) entrance examination. Join the elite ranks of India&apos;s premier military schools with our specialized coaching.",
      features: ["SSB Training under Ex-GTOs", "Physical Training", "Free Access e-Learning Platform", "Mock Tests & Practice"],
      link: "/military-school-coaching",
      badge: "",
      color: "from-military-primary/15 to-military-primary/5",
    },
    {
      icon: BookOpen,
      title: "Navodaya Vidyalaya Coaching",
      subtitle: "Jawahar Navodaya Vidyalaya",
      description:
        "Specialized coaching for Jawahar Navodaya Vidyalaya entrance examination. Comprehensive coverage of all subjects with proven study materials.",
      features: ["JNV Entrance Preparation", "Class 6 & Class 9", "Study Materials Provided", "Mock Tests & Syllabus"],
      link: "/navodaya-vidhayalaya-coaching",
      badge: "",
      color: "from-military-secondary/15 to-military-secondary/5",
    },
    {
      icon: Target,
      title: "NDA After 10th",
      subtitle: "National Defence Academy",
      description:
        "Comprehensive NDA coaching after 10th standard. We prepare students for the prestigious National Defence Academy entrance examination with expert guidance.",
      features: ["NDA Coaching", "SSB Training under Ex-GTOs", "Physical Training", "Free Access e-Learning Platform"],
      link: "#",
      badge: "New",
      color: "from-military-accent/20 to-military-accent/5",
    },
    {
      icon: Star,
      title: "Welham's School Coaching",
      subtitle: "Welham Girls / Boys School",
      description:
        "Preparation coaching for Welham Girls' School and Welham Boys' School — two of Dehradun&apos;s most prestigious institutions.",
      features: ["Entrance Exam Prep", "Academic Excellence", "Personality Development", "Interview Coaching"],
      link: "/welham-coaching",
      badge: "",
      color: "from-military-primary/10 to-military-primary/5",
    },
  ];

  return (
    <section id="courses" className="py-24 md:py-32 bg-military-surface relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(212,175,55,0.3) 0, rgba(212,175,55,0.3) 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          eyebrow="Our Programmes"
          heading={
            <>
              Our <span className="text-green-900">Courses</span>
            </>
          }
          sub="World-class preparation programmes designed to get your child into India&apos;s most prestigious military and defence institutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <Link href={course.link} className="group block h-full">
                <div
                  className={`relative h-full bg-gradient-to-br ${course.color} border border-military-dark/8 rounded-3xl p-7 hover:border-military-accent/50 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]`}
                >
                  {/* Badge */}
                  {course.badge && (
                    <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest bg-military-primary text-white px-3 py-1 rounded-full">
                      {course.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-military-primary/10 border border-military-primary/20 flex items-center justify-center mb-6 group-hover:bg-military-primary/20 group-hover:border-military-primary/50 transition-all duration-300">
                    <course.icon className="w-7 h-7 text-military-primary" />
                  </div>

                  {/* Text */}
                  <div className="text-[10px] uppercase tracking-[0.2em] text-military-primary/80 font-bold mb-1">
                    {course.subtitle}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl text-green-950 uppercase mb-3 group-hover:text-military-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-military-dark/90 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {course.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-military-dark/90">
                        <Check className="w-3.5 h-3.5 text-military-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-military-primary text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                    Know More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom border glow on hover */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-military-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* All Courses CTA */}
        <FadeUp delay={0.2} className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-military-dark/10 text-military-dark/90 hover:text-military-dark hover:border-military-dark/20 px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
          >
            View All Programmes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   DIRECTOR'S DESK SECTION
───────────────────────────────────────── */
function DirectorDeskSection() {
  return (
    <section className="py-24 bg-military-bg relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <FadeUp>
          <div className="bg-green-50 border border-military-dark/5 rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-6xl mx-auto">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-military-accent to-transparent" />
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-military-accent/5 blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-military-primary/5 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
              {/* Image Column */}
              <div className="lg:col-span-5 relative group">
                <div className="relative rounded-2xl overflow-hidden border border-military-accent/20 z-10 bg-military-bg">
                  <img loading="lazy" decoding="async"                     src="https://doonsainikschool.com/wp-content/uploads/2025/05/doon-sainik-school-principal.jpeg"
                    alt="Divya Soni - Director Doon Sainik School"
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative border */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-military-accent/30 rounded-2xl z-0 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-military-accent/30 rounded-2xl z-0 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-military-accent" />
                  <span className="text-xs uppercase tracking-[0.35em] font-semibold text-military-accent">
                    Leadership
                  </span>
                </div>
                <h3 className="font-heading text-4xl md:text-5xl text-green-950 uppercase mb-6 leading-none">
                  Director&apos;s Desk
                </h3>

                <div className="space-y-5 text-military-dark/90 text-sm md:text-base leading-relaxed">
                  <p>
                    MA (Public Administration) & B.Ed, PGCTE (Assistant Master) — Honored with the{" "}
                    <strong className="text-military-dark font-medium">National Award for Teachers, 2011</strong>.
                    Recipient of the{" "}
                    <strong className="text-military-dark font-medium">Indian Education Award 2019</strong>, presented
                    at New Delhi on the occasion of Teacher&apos;s Day by Her Excellency, Smriti Zubin Irani.
                  </p>
                  <p>
                    GS Faculty for Army Cadet in KV IMA (Dehradun) • UPSC (Civil Services) Prelims
                    Qualified • Grade in NCC C Certificate • National Player in Judo & Kho-Kho •
                    Ex-Senior Faculty of RIMC • Course Mentor of 42 Brigade HRDC Unit of Army
                    Education Corps.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-military-dark/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-military-accent/10 border border-military-accent/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-military-accent" />
                  </div>
                  <div>
                    <div className="text-military-dark font-bold tracking-wide">Divya Soni</div>
                    <div className="text-military-dark/90 text-xs uppercase tracking-widest mt-0.5">
                      Director, Doon Sainik School
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WHY CHOOSE US
───────────────────────────────────────── */
function WhyChooseUs() {
  const features = [
    {
      icon: Medal,
      title: "Expert Faculty",
      desc: "Ex-RIMC faculty, army veterans, and NDA specialists with decades of experience in military education.",
    },
    {
      icon: Dumbbell,
      title: "Physical Training",
      desc: "Dedicated physical training programme to meet the rigorous fitness standards of RIMC, Sainik & Military Schools.",
    },
    {
      icon: Brain,
      title: "SSB Preparation",
      desc: "Specialized SSB interview coaching under Ex-GTOs to help candidates excel in psychological and group tasks.",
    },
    {
      icon: BookOpen,
      title: "Free Study Materials",
      desc: "Free tablet and access to our e-learning platform with curated study notes, mock tests, and previous papers.",
    },
    {
      icon: Target,
      title: "Proven Results",
      desc: "98% success rate with 500+ students selected in RIMC, Sainik Schools, Military Schools, and NDA.",
    },
    {
      icon: Trophy,
      title: "Award-Winning Institute",
      desc: "National Award for Teachers 2011 and Indian Education Award 2019 — recognized excellence in defence education.",
    },
    {
      icon: Zap,
      title: "Mock Tests & Practice",
      desc: "Regular All India Sainik School Mock Tests, AISSEE Mock Tests, RMS Mock Tests and subject-wise practice papers.",
    },
    {
      icon: Building2,
      title: "Day Boarding School",
      desc: "Premier day boarding school structure ensuring holistic development — academics, sports, discipline and character.",
    },
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 camo-texture opacity-30 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          eyebrow="Why Choose Us"
          heading={
            <>
              The Doon Sainik
              <br />
              <span className="text-green-900">Advantage</span>
            </>
          }
          sub="What makes Doon Sainik School the most trusted name in defence education in Dehradun."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="group relative bg-green-50 border border-military-dark/5 rounded-2xl p-6 hover:border-military-accent/40 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] cursor-default h-full">
                {/* Animated glow border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.3)" }} />

                <div className="w-12 h-12 rounded-xl bg-green-100 border border-military-accent/20 flex items-center justify-center mb-5 group-hover:bg-military-accent/10 group-hover:border-military-accent/50 transition-all duration-300">
                  <feat.icon className="w-6 h-6 text-military-accent" />
                </div>
                <h3 className="font-heading text-xl text-green-950 uppercase mb-2 group-hover:text-military-accent transition-colors">
                  {feat.title}
                </h3>
                <p className="text-military-dark/90 text-sm leading-relaxed">{feat.desc}</p>

                {/* Number badge */}
                <div className="absolute top-4 right-4 font-heading text-4xl text-white/4 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ACHIEVEMENTS SECTION
───────────────────────────────────────── */
function AchievementsSection() {
  const stats = [
    { value: 500, suffix: "+", label: "Students Selected", sublabel: "In RIMC, Sainik & Military Schools" },
    { value: 15, suffix: "+", label: "Years of Excellence", sublabel: "Serving Dehradun since 2008" },
    { value: 98, suffix: "%", label: "Success Rate", sublabel: "Of enrolled students cleared exams" },
    { value: 200, suffix: "+", label: "Expert Faculty", sublabel: "Military veterans & academic experts" },
  ];

  const badges = [
    "National Award for Teachers, 2011",
    "Indian Education Award, 2019",
    "Top Defence Coaching in Dehradun",
    "Best RIMC Coaching Institute",
  ];

  return (
    <section
      id="achievements"
      className="py-24 md:py-32 bg-military-surface relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-military-primary/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.8) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-military-accent" />
                <span className="text-xs uppercase tracking-[0.35em] font-semibold text-military-accent">
                  Our Achievements
                </span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-green-950 uppercase leading-none mb-6">
                Numbers That
                <br />
                <span className="text-green-900">Speak Louder</span>
              </h2>
              <p className="text-military-dark/90 text-base leading-relaxed mb-10">
                Doon Sainik School has established itself as Dehradun&apos;s most trusted defence
                education institution. Our results speak for themselves.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-green-50 border border-military-accent/20 rounded-full px-4 py-2"
                  >
                    <Award className="w-3.5 h-3.5 text-military-accent" />
                    <span className="text-xs text-military-dark/90">{badge}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-green-50 border border-military-dark/5 rounded-2xl p-6 md:p-8 hover:border-military-accent/30 transition-all duration-300 group">
                  <div className="font-heading text-4xl md:text-5xl text-military-accent mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-heading text-lg text-green-950 uppercase mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-military-dark/90">{stat.sublabel}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FACILITIES SECTION
───────────────────────────────────────── */
function FacilitiesSection() {
  const facilities = [
    {
      title: "School Transport",
      description: "Safe, comfortable, and timely transportation services ensuring hassle-free commutes for all our students.",
      img: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Homely Dining Hall",
      description: "Nutritious, hygienic, and home-style meals served in a clean and comfortable dining environment.",
      img: "https://images.unsplash.com/photo-1631193659550-5c8a2cc57015?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpbmluZyUyMGhhbGx8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Sports Facility",
      description: "Dedicated grounds for football, handball, and athletics to foster physical fitness and teamwork.",
      img: "https://doonsainikschool.com/wp-content/uploads/2025/06/Sainik-School-Coaching-in-Dehradun-7-1024x421-1-768x316-1.jpeg",
    },
    {
      title: "Best Infrastructure",
      description: "State-of-the-art campus featuring modern architecture, smart classrooms, and advanced learning tools.",
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Music School",
      description: "Cultivating creativity and artistic expression through dedicated music rooms and professional instruments.",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Guidance & Counselling",
      description: "Expert psychological support and career guidance to help students navigate academic and personal challenges.",
      img: "https://doonsainikschool.com/wp-content/uploads/2025/06/doon-sainik-school-classroom-768x576-1.jpeg",
    },
    {
      title: "Wellness Centre",
      description: "A comprehensive health facility providing regular medical check-ups and first-aid care for student well-being.",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="facilities" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="World-Class Infrastructure"
          heading={
            <>
              Our <span className="text-green-900">Facilities</span>
            </>
          }
          sub="State-of-the-art infrastructure designed to support holistic development of every cadet."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, i) => (
            <FadeUp key={i} delay={i * 0.08} className={i === 6 ? "md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-full lg:col-start-2 lg:mx-0" : ""}>
              <div className="group flex flex-col h-full bg-military-surface border border-military-dark/5 rounded-3xl overflow-hidden cursor-pointer hover:border-military-accent/30 transition-colors duration-300">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img loading="lazy" decoding="async"                     src={fac.img}
                    alt={fac.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  
                </div>
                {/* Text Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                  {/* Subtle accent dot */}
                  <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-military-accent/40 group-hover:bg-military-accent transition-colors" />

                  <h3 className="font-heading text-xl text-green-950 uppercase mb-3 group-hover:text-military-accent transition-colors pr-6">
                    {fac.title}
                  </h3>
                  <p className="text-military-dark/90 text-sm leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   GALLERY SECTION
───────────────────────────────────────── */
function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://doonsainikschool.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-06-03-at-16.46.57-15-r7w6mcued7lbikrbsdhcn4n92xf8rtn94l55s8229s.jpeg",
      alt: "Doon Sainik School Campus Life",
      span: "col-span-2",
    },
    {
      src: "https://doonsainikschool.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-06-03-at-16.46.52-1-scaled-r7w6m857f1evwiy5jtg7snty402epc4lfxvqdu914w.jpeg",
      alt: "Cadets Training",
      span: "",
    },
    {
      src: "https://doonsainikschool.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-06-03-at-16.46.57-8-scaled-r7w6luzgrcwvdzh9onrftr5hslv9pkocq4qxnysjk0.jpeg",
      alt: "Classroom Session",
      span: "",
    },
    {
      src: "https://doonsainikschool.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-06-03-at-16.46.57-r7w6m3g0gv8gah4zb9f2y70n52pkmulxramazgg000.jpeg",
      alt: "Outdoor Activities",
      span: "",
    },
    {
      src: "https://doonsainikschool.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-06-03-at-16.46.57-11-r7w6t0j8ryqkobrqkwg4v5ttbvi8uf168ihn7p8kqo.jpeg",
      alt: "Extracurriculars",
      span: "col-span-2",
    },
    {
      src: "https://doonsainikschool.com/wp-content/uploads/elementor/thumbs/EEMJ7928-r70ua7sl1rokf9s1vlfm4za19mxaa1i61k59d9xzpc.jpg",
      alt: "Group Photo",
      span: "",
    },
    {
      src: "https://doonsainikschool.com/wp-content/uploads/elementor/thumbs/achieve-award-from-CM-r6f73u7mpgtwfuimdnygme7vjbnwbdg8t2yv20inls.jpeg",
      alt: "Receiving Award from CM",
      span: "col-span-2",
    },
    {
      src: "https://doonsainikschool.com/wp-content/uploads/elementor/thumbs/FBEA3030-r70uabjxt3tpppml9n24eybvn6er4tx3e2r7adsf0g.jpg",
      alt: "Sports and Fitness",
      span: "",
    },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-military-surface relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            eyebrow="Campus Life"
            heading={
              <>
                Our <span className="text-green-900">Gallery</span>
              </>
            }
          />
          <Link
            href="/gallery"
            className="shrink-0 text-sm font-semibold uppercase tracking-widest text-military-accent hover:text-military-dark transition-colors flex items-center gap-2 mb-4"
          >
            View All Photos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <FadeUp key={i} delay={i * 0.06} className={img.span}>
              <div
                className="group relative rounded-2xl overflow-hidden h-full cursor-zoom-in"
                onClick={() => setSelected(img.src)}
              >
                <img loading="lazy" decoding="async"                   src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-military-accent/90 flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <span className="text-xs text-military-dark/90 bg-military-bg/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    {img.alt}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg flex items-center justify-center p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img loading="lazy" decoding="async"                 src={selected}
                alt="Gallery"
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-military-bg/80 flex items-center justify-center text-military-dark hover:text-military-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─────────────────────────────────────────
   YOUTUBE VIDEOS SECTION
───────────────────────────────────────── */
function YouTubeVideosSection() {
  const videos = [
    {
      title: "Life at Doon Sainik School",
      src: "https://www.youtube.com/embed/aqiPioncxI4?si=r9ajUs6oWxw_oyla",
    },
    {
      title: "Rigorous Physical Training",
      src: "https://www.youtube.com/embed/TfILCOZXDMo?si=Pxk2optYqhvjtB0A",
    },
    {
      title: "SSB Interview Preparation",
      src: "https://www.youtube.com/embed/tRFRpsXiGPo?si=GYCI5FUfVj1WWbNw",
    },
  ];

  return (
    <section className="py-24 bg-military-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-military-accent/20 to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            eyebrow="Media"
            heading={
              <>
                Our <span className="text-green-900">Videos</span>
              </>
            }
          />
          <a
            href="https://youtube.com/@doonsainikschool"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)]"
          >
            <Play className="w-4 h-4 fill-current" />
            Subscribe
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="block group">
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-military-dark/10 mb-5 bg-military-surface shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <h3 className="text-military-dark font-bold text-lg md:text-xl group-hover:text-military-accent transition-colors leading-snug">
                  {video.title}
                </h3>
                <p className="text-military-dark/90 text-sm mt-2 flex items-center gap-2">
                  Doon Sainik School
                  <span className="w-1 h-1 rounded-full bg-military-white/30" />
                  YouTube
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TESTIMONIALS SECTION
───────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "My son cleared the RIMC entrance exam in his first attempt. The coaching at Doon Sainik School is exceptional — the faculty truly understands what it takes to get selected.",
      name: "Col. Rajesh Kumar (Retd.)",
      role: "Parent — RIMC Selected Student",
      initials: "RK",
    },
    {
      quote:
        "The SSB preparation was the game-changer for us. The ex-GTO coaching gave my daughter the confidence and clarity to excel in every stage of the selection process.",
      name: "Mrs. Anita Sharma",
      role: "Parent — Sainik School Selected Student",
      initials: "AS",
    },
    {
      quote:
        "Best investment we made for our child&apos;s future. The discipline instilled here goes beyond academics — it shapes character. Highly recommend Doon Sainik School.",
      name: "Mr. Vikram Singh",
      role: "Parent — Military School Selected Student",
      initials: "VS",
    },
    {
      quote:
        "The free e-learning platform and study materials gave me an edge over competitors. The mock tests were almost identical to the actual exam pattern.",
      name: "Cadet Arjun Negi",
      role: "RIMC Selected — Class of 2024",
      initials: "AN",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-military-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          eyebrow="What Parents Say"
          heading={
            <>
              Testimonials
            </>
          }
          sub="Hear from the families whose children have achieved their dreams with us."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote mark */}
          <div className="absolute -top-6 -left-4 font-heading text-[180px] leading-none text-military-accent/8 pointer-events-none select-none">
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-military-dark border border-military-accent/20 shadow-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] to-transparent" />

              <p className="text-military-light text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-military-primary/40 border border-military-accent/30 flex items-center justify-center font-heading text-2xl text-white">
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">{testimonials[active].name}</div>
                  <div className="text-xs text-military-accent uppercase tracking-widest mt-0.5">
                    {testimonials[active].role}
                  </div>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active
                    ? "w-8 bg-military-accent"
                    : "w-2 bg-military-dark/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   LATEST NOTICES / BLOGS SECTION
───────────────────────────────────────── */
function LatestNoticesSection() {
  const notices = [
    {
      date: "Oct 15, 2025",
      title: "Admissions Open for RIMC Coaching 2026-27 Batch",
      tag: "Admission",
      excerpt: "Limited seats available for the prestigious RIMC coaching batch. Register now to secure your child&apos;s future in the Indian Armed Forces.",
      link: "/rimc-coaching",
    },
    {
      date: "Oct 10, 2025",
      title: "AISSEE 2027-28 — All India Sainik School Entrance Exam Guide",
      tag: "Exam",
      excerpt: "Complete guide to the All India Sainik School Entrance Examination for Class 6 and Class 9 admissions for the 2027-28 session.",
      link: "#",
    },
    {
      date: "Oct 05, 2025",
      title: "Admission Procedure 2026 — Download Now",
      tag: "Procedure",
      excerpt: "The official Admission Procedure Form 2026 is now available for download. Apply now and begin your journey towards a military career.",
      link: "/admission-procedure",
    },
    {
      date: "Sep 20, 2025",
      title: "Best Defence Coaching in Dehradun — What Sets Us Apart",
      tag: "Blog",
      excerpt: "Discover why Doon Sainik School is consistently rated the best defence coaching institute in Dehradun by students and parents alike.",
      link: "#",
    },
    {
      date: "Sep 10, 2025",
      title: "Top 5 Strategies to Make RIMC Exam Easier",
      tag: "Blog",
      excerpt: "Expert strategies from our experienced faculty to help students crack the RIMC entrance examination with confidence.",
      link: "#",
    },
    {
      date: "Aug 25, 2025",
      title: "RMS in NDA Exams — The Complete Guide",
      tag: "Blog",
      excerpt: "Understanding the impact of Rashtriya Military School preparation on NDA examination performance and career prospects.",
      link: "#",
    },
  ];

  return (
    <section id="notices" className="py-24 md:py-32 bg-military-surface relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <SectionHeader
            eyebrow="Stay Updated"
            heading={
              <>
                Latest Notices
                <br />
                <span className="text-green-900">& Blogs</span>
              </>
            }
          />
          <Link
            href="/blogs"
            className="shrink-0 text-sm font-semibold uppercase tracking-widest text-military-accent hover:text-military-dark transition-colors flex items-center gap-2 mb-4"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {notices.map((notice, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <Link href={notice.link} className="group block h-full">
                <div className="h-full bg-green-50 border border-military-dark/5 rounded-2xl p-6 hover:border-military-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-military-dark/90 text-xs font-medium">{notice.date}</span>
                    <span className="px-2.5 py-1 rounded-full border border-military-accent/40 text-military-accent text-[10px] font-bold uppercase tracking-widest">
                      {notice.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-military-dark leading-snug mb-3 group-hover:text-military-accent transition-colors">
                    {notice.title}
                  </h3>
                  <p className="text-military-dark/90 text-xs leading-relaxed mb-4">{notice.excerpt}</p>
                  <div className="flex items-center gap-1 text-military-accent text-xs font-semibold uppercase tracking-widest">
                    Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   RESOURCES / STUDY NOTES SECTION
───────────────────────────────────────── */
function ResourcesSection() {
  const resources = [
    { name: "All India Sainik School Mock Test 2025", type: "Mock Test", link: "https://doonsainikschool.com/wp-content/uploads/2025/06/2b0f4612-b189-45aa-891a-52ea5bc64174.pdf" },
    { name: "Mock Test Sainik School Class-9", type: "Mock Test", link: "https://doonsainikschool.com/wp-content/uploads/2025/06/020af037-5a9a-413b-9498-696a5f7c33fa.pdf" },
    { name: "Sainik School Class-6 Mock Test", type: "Mock Test", link: "https://doonsainikschool.com/wp-content/uploads/2025/06/fa72763a-cab5-4b61-9532-ccc6736766ca.pdf" },
    { name: "English Mock Test 2025", type: "Mock Test", link: "https://doonsainikschool.com/wp-content/uploads/2025/10/English-JUN-231.pdf-Doon-Sainik-School-3.pdf" },
    { name: "Important Notes for RIMC English", type: "Study Notes", link: "https://doonsainikschool.com/wp-content/uploads/2025/06/c7895fbe-49b3-4dfd-b527-4272f9bebac5.pdf" },
    { name: "Biology Notes for Sainik, Military School Class 8th & 9th", type: "Study Notes", link: "https://doonsainikschool.com/wp-content/uploads/2025/06/561af9c0-008a-4b50-b5ce-c6d7a4bb0fb7.pdf" },
    { name: "Civics Study Material", type: "Study Notes", link: "https://doonsainikschool.com/wp-content/uploads/2025/06/9ea57aa2-19e3-476c-9490-5e914870cfb9.pdf" },
    { name: "General Study (Social Science)", type: "Study Notes", link: "https://doonsainikschool.com/wp-content/uploads/2025/06/Social-science-modal.pdf" },
    { name: "Navodaya Prospectus 2025", type: "Prospectus", link: "https://doonsainikschool.com/wp-content/uploads/2025/06/43c46616-5cb6-4daf-bdec-e0bb0104817d.pdf" },
    { name: "Class IX Syllabus", type: "Syllabus", link: "https://doonsainikschool.com/wp-content/uploads/2025/06/de9da26b-fe75-4fe0-bd7a-4f32b3b1bf11.pdf" },
    { name: "Math Mock Test", type: "Mock Test", link: "https://doonsainikschool.com/wp-content/uploads/2025/06/d7bd51f6-49a5-4149-bbb1-1f0463ec7b61.pdf" },
    { name: "Admission Procedure Form 2026", type: "Forms", link: "https://doonsainikschool.com/wp-content/uploads/2025/10/Admission-Procedure-Form-2026.pdf" },
  ];

  const typeColors: Record<string, string> = {
    "Mock Test": "text-military-accent border-military-accent/40",
    "Study Notes": "text-green-400 border-green-400/40",
    "Prospectus": "text-blue-400 border-blue-400/40",
    "Syllabus": "text-purple-400 border-purple-400/40",
    "Forms": "text-orange-400 border-orange-400/40",
  };

  return (
    <section id="resources" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="Free Resources"
          heading={
            <>
              Study Notes <span className="text-green-900">&amp; Mock Tests</span>
            </>
          }
          sub="Download free study materials, mock tests, syllabi and more — all curated by our expert faculty."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((res, i) => (
            <FadeUp key={i} delay={i * 0.04}>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-green-50 border border-military-dark/5 rounded-xl p-4 hover:border-military-accent/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-green-100 border border-military-dark/5 flex items-center justify-center shrink-0 group-hover:border-military-accent/30 transition-colors">
                  <BookOpen className="w-5 h-5 text-military-dark/90 group-hover:text-military-accent transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-military-dark/90 font-medium leading-tight mb-1 truncate">
                    {res.name}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded-full ${typeColors[res.type] || "text-military-dark/90 border-military-dark/10"}`}
                  >
                    {res.type}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-military-dark/20 group-hover:text-military-accent group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ADMISSION CTA SECTION
───────────────────────────────────────── */
function AdmissionCTA() {
  return (
    <section
      id="admission"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Premium background */}
      <div className="absolute inset-0">
        <img loading="lazy" decoding="async"           src="https://doonsainikschool.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-07-at-18.27.21.jpeg"
          alt="Military training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-military-bg/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-military-bg via-military-bg/80 to-military-primary/30" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-military-accent" />
              <span className="text-xs uppercase tracking-[0.35em] font-semibold text-military-accent">
                Join The Best Academy
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-green-950 uppercase leading-none mb-6">
              Admission
              <br />
              <span className="text-green-900">Open 2025-26</span>
            </h2>
            <p className="text-military-dark/90 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Hurry! Admission is now open for the 2025-26 session.{" "}
              <strong className="text-military-dark">Limited seats available.</strong> Secure your
              child&apos;s future in India&apos;s most prestigious defence and military institutions. Register
              today and take the first step towards an extraordinary career in the Armed Forces.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <Link
                href="/registration"
                id="admission-apply-btn"
                className="group relative flex items-center gap-2 bg-green-900 text-white px-10 py-5 rounded-full font-bold uppercase text-sm tracking-[0.15em] overflow-hidden hover:shadow-[0_0_40px_rgba(20,83,45,0.7)] transition-all duration-400"
              >
                <span className="absolute inset-0 bg-military-dark/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Apply Now</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918586858986"
                id="admission-call-btn"
                className="group flex items-center gap-3 border border-military-dark/20 text-military-dark px-8 py-5 rounded-full font-semibold uppercase text-sm tracking-[0.1em] hover:border-military-accent hover:text-military-accent transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91-8586858986
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-wrap items-center gap-6 text-sm text-military-dark/90">
              <a
                href="https://doonsainikschool.com/wp-content/uploads/2025/10/Admission-Procedure-Form-2026.pdf"
                className="flex items-center gap-2 hover:text-military-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                Download Admission Procedure 2026
              </a>
              <a
                href="https://doonsainikschool.com/wp-content/uploads/2025/10/1new-2026-Prospects-Doon-sainik-111.pdf-1_compressed.pdf"
                className="flex items-center gap-2 hover:text-military-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                Download Prospects 2026
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Contact info cards */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 mt-16 md:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: Phone,
              label: "Call Us",
              value: "+91-8006615154 / +91-8586858986",
              link: "tel:+918586858986",
            },
            {
              icon: MapPin,
              label: "Our Location",
              value: "Kalidas Road, Dehradun, Uttarakhand",
              link: "https://maps.google.com",
            },
            {
              icon: Mail,
              label: "Email Us",
              value: "info@doonsainikschool.com",
              link: "mailto:info@doonsainikschool.com",
            },
          ].map((contact, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <a href={contact.link} className="group flex items-start gap-4 bg-military-dark/5 backdrop-blur-md border border-military-dark/10 rounded-2xl p-5 hover:border-military-accent/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-military-accent/10 border border-military-accent/20 flex items-center justify-center shrink-0 group-hover:bg-military-accent/20 transition-colors">
                  <contact.icon className="w-5 h-5 text-military-accent" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-military-dark/90 mb-1">
                    {contact.label}
                  </div>
                  <div className="text-sm text-military-dark font-medium">{contact.value}</div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   BRAND MARQUEE
───────────────────────────────────────── */
function BrandMarquee() {
  const items = [
    "RIMC Coaching",
    "Sainik School",
    "Military School",
    "NDA After 10th",
    "Navodaya Vidyalaya",
    "Welham's School",
    "SSB Preparation",
    "Physical Training",
    "Doon Sainik School",
  ];

  return (
    <div className="py-6 border-y border-military-dark/5 bg-military-surface overflow-hidden">
      <div className="marquee-inner select-none">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mr-8">
            <span className="text-sm uppercase tracking-[0.25em] text-military-dark/90 font-semibold whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-military-accent/40" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HeroSection />
      <NoticeBanner />
      <AchieversMarqueeSection />
      <BrandMarquee />
      <AboutSection />
      <CoursesSection />
      <DirectorDeskSection />
      <WhyChooseUs />
      <AchievementsSection />
      <FacilitiesSection />
      <GallerySection />
      <YouTubeVideosSection />
      <TestimonialsSection />
      <LatestNoticesSection />
      <ResourcesSection />
      <AdmissionCTA />
    </div>
  );
}
