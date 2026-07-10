"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Clock, Trophy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function RIMCCoaching() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      {/* Course Hero */}
      <section className="relative px-6 md:px-12 max-w-[1400px] mx-auto w-full mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h4 className="text-military-accent uppercase tracking-[0.3em] font-semibold text-sm">
              Elite Preparation
            </h4>
            <h1 className="font-heading text-5xl md:text-7xl text-military-dark uppercase leading-none">
              RIMC <br />
              <span className="text-military-neutral">Coaching</span>
            </h1>
            <p className="text-military-dark/90 text-lg leading-relaxed max-w-lg">
              The Rashtriya Indian Military College (RIMC) is the premier feeder institution for the NDA. Our specialized coaching program is designed to transform potential into success through rigorous academic and physical training.
            </p>
            <Button size="lg">Apply For RIMC Batch</Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-military-primary/20 z-10" />
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="RIMC Coaching"
              className="w-full h-full object-cover grayscale mix-blend-multiply"
            />
          </motion.div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="bg-[#151713] py-24">
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-military-dark uppercase">Program Highlights</h2>
            <div className="w-24 h-1 bg-military-accent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Expert Faculty", desc: "Learn from highly experienced instructors specializing in defense exams." },
              { icon: Clock, title: "Intensive Schedule", desc: "Structured daily routines mimicking academy life for better adaptation." },
              { icon: CheckCircle, title: "Mock Tests", desc: "Regular All India level mock tests to assess and improve performance." },
              { icon: Trophy, title: "SSB Training", desc: "Comprehensive personality development and interview guidance." },
            ].map((highlight, i) => (
              <Card key={i} className="p-8 flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-military-secondary/50 flex items-center justify-center border border-military-accent/20">
                  <highlight.icon className="w-6 h-6 text-military-accent" />
                </div>
                <h3 className="font-bold text-military-dark text-xl">{highlight.title}</h3>
                <p className="text-military-dark/90 text-sm leading-relaxed">{highlight.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus / Structure */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-4xl text-military-dark uppercase mb-8">Exam Structure</h2>
            <div className="space-y-6">
              {[
                { subject: "Mathematics", marks: "200 Marks", duration: "1.5 Hours" },
                { subject: "English", marks: "125 Marks", duration: "2 Hours" },
                { subject: "General Knowledge", marks: "75 Marks", duration: "1 Hour" },
                { subject: "Viva Voce (Interview)", marks: "50 Marks", duration: "-" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-military-bg border border-military-dark/10 hover:border-military-accent/30 transition-colors">
                  <div>
                    <h4 className="text-military-dark font-bold text-lg">{item.subject}</h4>
                    <p className="text-military-dark/90 text-sm">{item.duration}</p>
                  </div>
                  <span className="text-military-accent font-heading text-xl">{item.marks}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-military-secondary/20 rounded-3xl p-10 border border-military-accent/20 flex flex-col justify-center">
            <h3 className="font-heading text-3xl text-military-dark uppercase mb-4">Why Choose Us for RIMC?</h3>
            <p className="text-military-dark/90 leading-relaxed mb-8">
              Cracking RIMC requires a strategic approach. We don't just focus on the written exam; we build the physical stamina, mental agility, and officer-like qualities (OLQs) required to succeed in the interview and medical stages.
            </p>
            <ul className="space-y-3 mb-8">
              {['Hostel Facility Available', 'Daily Physical Training', 'Doubt Clearing Sessions', 'Updated Study Material'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-military-dark">
                  <CheckCircle className="w-5 h-5 text-military-accent shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Download Syllabus PDF</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
