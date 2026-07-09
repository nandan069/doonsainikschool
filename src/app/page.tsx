"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shield,
  Award,
  Users,
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
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) => {
      setDisplay(Math.round(v).toString());
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
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
        <div className="w-8 h-px bg-military-accent" />
        <span
          className={`text-xs uppercase tracking-[0.35em] font-semibold ${
            light ? "text-military-accent" : "text-military-accent"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`font-heading text-5xl md:text-6xl lg:text-7xl uppercase leading-none mb-4 ${
          light ? "text-military-bg" : "text-military-white"
        }`}
      >
        {heading}
      </h2>
      {sub && (
        <p
          className={`text-base md:text-lg max-w-xl leading-relaxed ${
            light ? "text-military-bg/70" : "text-military-white/60"
          }`}
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
function AnnouncementTicker() {
  const announcements = [
    "🎯 Admission Open For 2025-26 Session — Limited Seats Available",
    "📋 Admission Procedure 2026 Now Available — Download Now",
    "🏆 RIMC Coaching 2026-27 Batch Starting — Register Today",
    "📞 Call Now: +91-8006615154 / +91-8586858986",
    "🌟 AISSEE 2027-28 Coaching Registration Open",
    "✅ All India Sainik School Mock Test 2025 — Free Download",
  ];

  return (
    <div className="bg-military-accent text-military-bg py-2 overflow-hidden relative">
      <div className="flex items-center">
        <div className="shrink-0 bg-military-bg text-military-accent px-4 py-0.5 text-xs font-bold uppercase tracking-widest mr-4 z-10">
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-military-bg/85 via-military-bg/60 to-military-bg z-10" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-military-bg/60 via-transparent to-military-secondary/20 z-10"
        />
        {/* Cinematic background image */}
        <img
          src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90"
          alt="Military cadets"
          className="w-full h-full object-cover object-center"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px) scale(1.05)`,
            transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />
        {/* Camouflage particles / texture overlay */}
        <div
          className="absolute inset-0 z-10 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.6) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Military stripes */}
        <div className="absolute bottom-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-transparent via-military-accent/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center pt-28 pb-36">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 mb-8 bg-military-secondary/40 border border-military-accent/40 px-5 py-2.5 rounded-full backdrop-blur-md"
        >
          <Shield className="w-4 h-4 text-military-accent" />
          <span className="text-military-white uppercase tracking-[0.25em] text-xs font-bold">
            Admissions Open for 2025-26
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-military-accent animate-pulse" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-[clamp(60px,10vw,140px)] text-military-white uppercase leading-none mb-2 tracking-tight"
          style={{ textShadow: "0 0 80px rgba(0,0,0,0.8)" }}
        >
          Doon Sainik
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-[clamp(60px,10vw,140px)] uppercase leading-none mb-8 tracking-tight gold-shimmer"
        >
          School Dehradun
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-xl text-military-white/75 max-w-2xl mb-10 leading-relaxed font-light tracking-wide"
        >
          Dehradun's premier institution for{" "}
          <span className="text-military-accent font-semibold">RIMC</span>,{" "}
          <span className="text-military-accent font-semibold">Sainik School</span>, and{" "}
          <span className="text-military-accent font-semibold">Military School</span> entrance
          preparation. We forge leaders through discipline, honour, and academic excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Link
            href="/registration"
            id="hero-enroll-btn"
            className="group relative flex items-center gap-2 bg-military-accent text-military-bg px-8 py-4 rounded-full font-bold uppercase text-sm tracking-[0.15em] overflow-hidden hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-400"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">Enroll Now</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#courses"
            id="hero-courses-btn"
            className="group flex items-center gap-2 border border-military-white/30 text-military-white px-8 py-4 rounded-full font-semibold uppercase text-sm tracking-[0.15em] hover:border-military-accent hover:text-military-accent transition-all duration-300 backdrop-blur-sm"
          >
            Explore Courses
          </Link>
          <a
            href="tel:+918586858986"
            className="group flex items-center gap-2 text-military-white/70 hover:text-military-accent transition-colors text-sm"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-military-accent/50 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            +91-8586858986
          </a>
        </motion.div>

        {/* Animated Stats Row */}
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
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-4 px-3 text-center"
            >
              <div className="font-heading text-3xl md:text-4xl text-military-accent">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-military-white/50 mt-1 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-military-white/30 text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-military-accent/80 to-transparent" style={{ animation: "scroll-pulse 2s ease-in-out infinite" }} />
      </motion.div>

      {/* Military graphic accents */}
      <div className="absolute top-24 right-8 md:right-20 z-10 opacity-10">
        <div className="w-32 h-32 border border-military-accent rounded-full" />
        <div className="w-20 h-20 border border-military-accent rounded-full absolute top-6 left-6" />
      </div>
      <div className="absolute bottom-24 left-8 md:left-20 z-10 opacity-10">
        <div className="flex flex-col gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-0.5 bg-military-accent" style={{ width: `${20 + i * 12}px` }} />
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
    <div className="bg-military-surface border-y border-white/5 py-5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center gap-6">
        <div className="shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-military-accent border border-military-accent/40 px-3 py-1 rounded-full">
            Admission Open
          </span>
        </div>
        <p className="text-sm text-military-white/60 flex items-center gap-4">
          <span>
            Hurry! Admission is now open for 2025-26 session.{" "}
            <span className="text-military-accent">Limited seats available.</span>
          </span>
        </p>
        <Link
          href="/registration"
          className="ml-auto shrink-0 text-xs font-bold uppercase tracking-widest text-military-accent hover:text-military-white transition-colors flex items-center gap-1"
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
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Doon Sainik School Director"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-military-bg/60 to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 md:-right-8 bg-military-surface border border-military-accent/30 rounded-2xl p-5 shadow-2xl max-w-[200px]"
              >
                <div className="font-heading text-4xl text-military-accent mb-1">
                  <AnimatedCounter target={15} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-military-white/50">
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
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-military-white uppercase leading-none mb-6">
                Forging The
                <br />
                <span className="text-military-neutral">Leaders Of</span>
                <br />
                <span className="text-military-accent">Tomorrow</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-military-white/65 text-base md:text-lg leading-relaxed mb-6">
                Doon Sainik School, Dehradun, stands as a beacon of excellence in preparatory
                education for the Armed Forces. Situated at Kalidas Road, Dehradun — in the heart
                of India's most prestigious educational district — we provide an environment that
                fosters physical fitness, mental robustness, and academic brilliance.
              </p>
              <p className="text-military-white/65 text-base leading-relaxed mb-8">
                Our institution prepares cadets for{" "}
                <span className="text-military-white font-medium">
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
                    <span className="text-military-white/75 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.3}>
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-2 border border-military-accent/40 text-military-accent px-7 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-military-accent hover:text-military-bg transition-all duration-300"
              >
                Discover Our History
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeUp>
          </div>
        </div>

        {/* Director's Desk */}
        <FadeUp delay={0.1} className="mt-24">
          <div className="bg-military-surface border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-military-accent to-transparent" />
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-military-accent/5" />
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="w-20 h-20 rounded-2xl bg-military-accent/10 border border-military-accent/20 flex items-center justify-center shrink-0">
                <GraduationCap className="w-10 h-10 text-military-accent" />
              </div>
              <div>
                <h3 className="font-heading text-3xl md:text-4xl text-military-white uppercase mb-2">
                  Director&apos;s Desk
                </h3>
                <div className="w-12 h-0.5 bg-military-accent mb-6" />
                <p className="text-military-white/60 text-sm md:text-base leading-relaxed mb-4">
                  MA (Public Administration) & B.Ed, PGCTE (Assistant Master) — Honored with the{" "}
                  <span className="text-military-white">National Award for Teachers, 2011</span>.
                  Recipient of the{" "}
                  <span className="text-military-white">Indian Education Award 2019</span>, presented
                  at New Delhi on the occasion of Teacher's Day by Her Excellency, Smriti Zubin Irani.
                </p>
                <p className="text-military-white/60 text-sm leading-relaxed">
                  GS Faculty for Army Cadet in KV IMA (Dehradun) • UPSC (Civil Services) Prelims
                  Qualified • Grade in NCC C Certificate • National Player in Judo & Kho-Kho •
                  Ex-Senior Faculty of RIMC • Course Mentor of 42 Brigade HRDC Unit of Army
                  Education Corps.
                </p>
                <p className="text-military-accent text-sm font-semibold mt-4 uppercase tracking-wider">
                  — Divya Soni, Director, Doon Sainik School
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Timeline */}
        <FadeUp delay={0.1} className="mt-20">
          <h3 className="font-heading text-4xl text-military-white uppercase mb-10 text-center">
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
                  className={`flex items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    } text-left`}
                  >
                    <div className="bg-military-surface border border-white/5 rounded-xl p-4 hover:border-military-accent/30 transition-colors">
                      <span className="text-military-accent font-heading text-2xl">{m.year}</span>
                      <p className="text-military-white/65 text-sm mt-1">{m.event}</p>
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
      color: "from-military-primary/20 to-transparent",
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
      color: "from-military-secondary/20 to-transparent",
    },
    {
      icon: GraduationCap,
      title: "Military School Coaching",
      subtitle: "Rashtriya Military Schools",
      description:
        "Expert preparation for RMS (Rashtriya Military School) entrance examination. Join the elite ranks of India's premier military schools with our specialized coaching.",
      features: ["SSB Training under Ex-GTOs", "Physical Training", "Free Access e-Learning Platform", "Mock Tests & Practice"],
      link: "/military-school-coaching",
      badge: "",
      color: "from-military-primary/15 to-transparent",
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
      color: "from-military-secondary/15 to-transparent",
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
      color: "from-military-accent/10 to-transparent",
    },
    {
      icon: Star,
      title: "Welham's School Coaching",
      subtitle: "Welham Girls / Boys School",
      description:
        "Preparation coaching for Welham Girls' School and Welham Boys' School — two of Dehradun's most prestigious institutions.",
      features: ["Entrance Exam Prep", "Academic Excellence", "Personality Development", "Interview Coaching"],
      link: "/welham-coaching",
      badge: "",
      color: "from-military-neutral/10 to-transparent",
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
              Our <span className="text-military-accent">Courses</span>
            </>
          }
          sub="World-class preparation programmes designed to get your child into India's most prestigious military and defence institutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <Link href={course.link} className="group block h-full">
                <div
                  className={`relative h-full bg-gradient-to-br ${course.color} border border-white/8 rounded-3xl p-7 hover:border-military-accent/50 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]`}
                >
                  {/* Badge */}
                  {course.badge && (
                    <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest bg-military-accent text-military-bg px-3 py-1 rounded-full">
                      {course.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-military-bg/50 border border-military-accent/20 flex items-center justify-center mb-6 group-hover:bg-military-accent/10 group-hover:border-military-accent/50 transition-all duration-300">
                    <course.icon className="w-7 h-7 text-military-accent" />
                  </div>

                  {/* Text */}
                  <div className="text-[10px] uppercase tracking-[0.2em] text-military-accent/70 font-semibold mb-1">
                    {course.subtitle}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl text-military-white uppercase mb-3 group-hover:text-military-accent transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-military-white/55 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {course.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-military-white/60">
                        <Check className="w-3.5 h-3.5 text-military-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-military-accent text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                    Know More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom border glow on hover */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-military-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* All Courses CTA */}
        <FadeUp delay={0.2} className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-white/10 text-military-white/60 hover:text-military-white hover:border-white/20 px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
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
              <span className="text-military-accent">Advantage</span>
            </>
          }
          sub="What makes Doon Sainik School the most trusted name in defence education in Dehradun."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="group relative bg-military-surface border border-white/5 rounded-2xl p-6 hover:border-military-accent/40 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] cursor-default h-full">
                {/* Animated glow border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.3)" }} />

                <div className="w-12 h-12 rounded-xl bg-military-bg border border-military-accent/20 flex items-center justify-center mb-5 group-hover:bg-military-accent/10 group-hover:border-military-accent/50 transition-all duration-300">
                  <feat.icon className="w-6 h-6 text-military-accent" />
                </div>
                <h3 className="font-heading text-xl text-military-white uppercase mb-2 group-hover:text-military-accent transition-colors">
                  {feat.title}
                </h3>
                <p className="text-military-white/50 text-sm leading-relaxed">{feat.desc}</p>

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
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-military-white uppercase leading-none mb-6">
                Numbers That
                <br />
                <span className="text-military-accent">Speak Louder</span>
              </h2>
              <p className="text-military-white/60 text-base leading-relaxed mb-10">
                Doon Sainik School has established itself as Dehradun's most trusted defence
                education institution. Our results speak for themselves.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-military-bg border border-military-accent/20 rounded-full px-4 py-2"
                  >
                    <Award className="w-3.5 h-3.5 text-military-accent" />
                    <span className="text-xs text-military-white/60">{badge}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-military-bg border border-white/5 rounded-2xl p-6 md:p-8 hover:border-military-accent/30 transition-all duration-300 group">
                  <div className="font-heading text-4xl md:text-5xl text-military-accent mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-heading text-lg text-military-white uppercase mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-military-white/40">{stat.sublabel}</div>
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
      title: "Physical Training Ground",
      description: "Football, handball, kho-kho, badminton courts and dedicated fitness infrastructure for comprehensive physical development.",
      img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Swimming Pool",
      description: "A full-size swimming pool for water sports and physical fitness, preparing cadets for all aspects of military selection.",
      img: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "e-Learning Platform",
      description: "Free tablet and access to our cutting-edge e-learning platform with mock tests, study notes, and interactive content.",
      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Expert Classrooms",
      description: "Modern, well-equipped classrooms where expert faculty deliver focused coaching for RIMC, Sainik and Military School examinations.",
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="facilities" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="World-Class Infrastructure"
          heading={
            <>
              Our <span className="text-military-accent">Facilities</span>
            </>
          }
          sub="State-of-the-art infrastructure designed to support holistic development of every cadet."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((fac, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[16/10]">
                <img
                  src={fac.img}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-military-bg via-military-bg/40 to-transparent" />
                {/* Glass card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="backdrop-blur-md bg-military-bg/40 border border-white/10 rounded-2xl p-5 group-hover:border-military-accent/30 transition-colors duration-300">
                    <h3 className="font-heading text-2xl text-military-white uppercase mb-2">
                      {fac.title}
                    </h3>
                    <p className="text-military-white/60 text-sm leading-relaxed">{fac.description}</p>
                  </div>
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
      src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cadets in formation",
      span: "col-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Physical training",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Academic excellence",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Sports activities",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Teamwork and discipline",
      span: "col-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Award ceremony",
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
                Our <span className="text-military-accent">Gallery</span>
              </>
            }
          />
          <Link
            href="/gallery"
            className="shrink-0 text-sm font-semibold uppercase tracking-widest text-military-accent hover:text-military-white transition-colors flex items-center gap-2 mb-4"
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
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-military-bg/0 group-hover:bg-military-bg/30 transition-colors duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-military-accent/90 flex items-center justify-center">
                    <Play className="w-5 h-5 text-military-bg" />
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <span className="text-xs text-military-white/80 bg-military-bg/60 backdrop-blur-sm px-3 py-1 rounded-full">
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
              <img
                src={selected}
                alt="Gallery"
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-military-bg/80 flex items-center justify-center text-military-white hover:text-military-accent transition-colors"
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
        "Best investment we made for our child's future. The discipline instilled here goes beyond academics — it shapes character. Highly recommend Doon Sainik School.",
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
              className="bg-military-surface border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-military-accent to-transparent" />

              <p className="text-military-white text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-military-accent/20 border border-military-accent/30 flex items-center justify-center font-heading text-2xl text-military-accent">
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="font-semibold text-military-white">{testimonials[active].name}</div>
                  <div className="text-xs text-military-accent/70 uppercase tracking-widest mt-0.5">
                    {testimonials[active].role}
                  </div>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-military-accent text-military-accent" />
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
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-military-accent"
                    : "w-2 bg-white/20 hover:bg-white/40"
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
      excerpt: "Limited seats available for the prestigious RIMC coaching batch. Register now to secure your child's future in the Indian Armed Forces.",
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
                <span className="text-military-accent">& Blogs</span>
              </>
            }
          />
          <Link
            href="/blogs"
            className="shrink-0 text-sm font-semibold uppercase tracking-widest text-military-accent hover:text-military-white transition-colors flex items-center gap-2 mb-4"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {notices.map((notice, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <Link href={notice.link} className="group block h-full">
                <div className="h-full bg-military-bg border border-white/5 rounded-2xl p-6 hover:border-military-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-military-white/40 text-xs font-medium">{notice.date}</span>
                    <span className="px-2.5 py-1 rounded-full border border-military-accent/40 text-military-accent text-[10px] font-bold uppercase tracking-widest">
                      {notice.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-military-white leading-snug mb-3 group-hover:text-military-accent transition-colors">
                    {notice.title}
                  </h3>
                  <p className="text-military-white/45 text-xs leading-relaxed mb-4">{notice.excerpt}</p>
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
              Study Notes <span className="text-military-accent">&amp; Mock Tests</span>
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
                className="group flex items-center gap-4 bg-military-surface border border-white/5 rounded-xl p-4 hover:border-military-accent/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-military-bg border border-white/5 flex items-center justify-center shrink-0 group-hover:border-military-accent/30 transition-colors">
                  <BookOpen className="w-5 h-5 text-military-white/40 group-hover:text-military-accent transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-military-white/80 font-medium leading-tight mb-1 truncate">
                    {res.name}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded-full ${typeColors[res.type] || "text-military-white/40 border-white/10"}`}
                  >
                    {res.type}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-military-white/20 group-hover:text-military-accent group-hover:translate-x-1 transition-all shrink-0" />
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
        <img
          src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-military-white uppercase leading-none mb-6">
              Admission
              <br />
              <span className="text-military-accent">Open 2025-26</span>
            </h2>
            <p className="text-military-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Hurry! Admission is now open for the 2025-26 session.{" "}
              <strong className="text-military-white">Limited seats available.</strong> Secure your
              child's future in India's most prestigious defence and military institutions. Register
              today and take the first step towards an extraordinary career in the Armed Forces.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <Link
                href="/registration"
                id="admission-apply-btn"
                className="group relative flex items-center gap-2 bg-military-accent text-military-bg px-10 py-5 rounded-full font-bold uppercase text-sm tracking-[0.15em] overflow-hidden hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition-all duration-400"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Apply Now</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918586858986"
                id="admission-call-btn"
                className="group flex items-center gap-3 border border-white/20 text-military-white px-8 py-5 rounded-full font-semibold uppercase text-sm tracking-[0.1em] hover:border-military-accent hover:text-military-accent transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91-8586858986
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-wrap items-center gap-6 text-sm text-military-white/50">
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
              <a href={contact.link} className="group flex items-start gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-military-accent/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-military-accent/10 border border-military-accent/20 flex items-center justify-center shrink-0 group-hover:bg-military-accent/20 transition-colors">
                  <contact.icon className="w-5 h-5 text-military-accent" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-military-white/40 mb-1">
                    {contact.label}
                  </div>
                  <div className="text-sm text-military-white font-medium">{contact.value}</div>
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
    <div className="py-6 border-y border-white/5 bg-military-surface overflow-hidden">
      <div className="marquee-inner select-none">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mr-8">
            <span className="text-sm uppercase tracking-[0.25em] text-military-white/30 font-semibold whitespace-nowrap">
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
      <AnnouncementTicker />
      <HeroSection />
      <NoticeBanner />
      <BrandMarquee />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUs />
      <AchievementsSection />
      <FacilitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <LatestNoticesSection />
      <ResourcesSection />
      <AdmissionCTA />
    </div>
  );
}
