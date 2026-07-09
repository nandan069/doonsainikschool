"use client";

import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-military-bg/90 via-military-bg/70 to-military-bg z-10" />
          <img
            src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Doon Sainik School Campus"
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 mb-6 bg-military-secondary/30 border border-military-accent/30 px-4 py-2 rounded-full backdrop-blur-md"
          >
            <ShieldCheck className="w-5 h-5 text-military-accent" />
            <span className="text-military-white uppercase tracking-[0.2em] text-sm font-semibold">
              Admissions Open for 2025-26
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl text-military-white uppercase tracking-tight leading-none mb-6 drop-shadow-2xl"
          >
            Shape Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-military-accent to-yellow-200">
              Future In Olive Green
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-military-white/80 max-w-2xl mb-12 leading-relaxed"
          >
            Welcome to Doon Sainik School, Dehradun's premier institution for RIMC, Sainik School, and Military School entrance preparation. We forge leaders through discipline, honor, and academic excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Enroll Now
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Courses
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-military-white/50 text-xs uppercase tracking-widest font-semibold">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-military-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Statistics / Quick Info */}
      <section className="relative z-30 -mt-16 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, label: "Students Selected", value: "500+" },
            { icon: Award, label: "Years of Excellence", value: "15+" },
            { icon: ShieldCheck, label: "Success Rate", value: "98%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-military-bg/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex items-center gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
            >
              <div className="w-16 h-16 rounded-full bg-military-secondary/50 flex items-center justify-center shrink-0 border border-military-accent/20">
                <stat.icon className="w-8 h-8 text-military-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-4xl text-military-white">{stat.value}</span>
                <span className="text-sm uppercase tracking-widest text-military-white/60 font-semibold">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Overview & Mission */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h4 className="text-military-accent uppercase tracking-[0.3em] font-semibold text-sm">
                About Doon Sainik School
              </h4>
              <h2 className="font-heading text-5xl md:text-6xl text-military-white uppercase leading-none">
                Forging The <br />
                <span className="text-military-neutral">Leaders Of Tomorrow</span>
              </h2>
            </div>
            
            <p className="text-military-white/70 text-lg leading-relaxed">
              Doon Sainik School, Dehradun, stands as a beacon of excellence in preparatory education for the Armed Forces. We provide an environment that fosters physical fitness, mental robustness, and academic brilliance, ensuring our cadets are prepared for RIMC, Sainik Schools, and Military Schools.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "Comprehensive Syllabus Coverage",
                "Rigorous Physical Training",
                "SSB Interview Preparation",
                "Discipline & Character Building",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-military-white">
                  <div className="w-2 h-2 rounded-full bg-military-accent" />
                  <span className="font-medium tracking-wide">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="mt-8">
              Discover Our History
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-military-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="https://images.unsplash.com/photo-1579294520970-d7a8e85c2b29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Cadets in training"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Latest Notices */}
      <section className="py-24 bg-[#151713] relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-military-accent uppercase tracking-[0.3em] font-semibold text-sm">
                Stay Updated
              </h4>
              <h2 className="font-heading text-5xl text-military-white uppercase leading-none">
                Latest Notices
              </h2>
            </motion.div>
            <Button variant="ghost">View All News</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { date: "Oct 15, 2025", title: "Admissions Open for RIMC 2026 Batch", tag: "Admission" },
              { date: "Oct 10, 2025", title: "Sainik School Entrance Exam Schedule Released", tag: "Exam" },
              { date: "Oct 05, 2025", title: "SSB Interview Guidance Camp Registration", tag: "Training" },
            ].map((notice, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-military-bg/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-military-accent/50 transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-military-white/50 text-sm font-medium">{notice.date}</span>
                  <span className="px-3 py-1 rounded-full border border-military-accent text-military-accent text-xs font-bold uppercase tracking-widest bg-military-accent/10">
                    {notice.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-military-white leading-snug group-hover:text-military-accent transition-colors">
                  {notice.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
