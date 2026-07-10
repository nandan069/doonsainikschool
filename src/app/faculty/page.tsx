"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/Card";

const facultyMembers = [
  { name: "Col. Rajesh Singh (Retd.)", role: "Head of SSB Training", subject: "Personality Development", img: "https://images.unsplash.com/photo-1507676184212-d0330a15183c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { name: "Dr. A.K. Sharma", role: "Academic Director", subject: "Mathematics", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { name: "Capt. S. Verma", role: "Physical Training Instructor", subject: "Physical Fitness", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { name: "Ms. Neha Gupta", role: "Senior Educator", subject: "English & Communication", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
];

export default function Faculty() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto w-full mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h4 className="text-military-accent uppercase tracking-[0.3em] font-semibold text-sm mb-4">
            Our Mentors
          </h4>
          <h1 className="font-heading text-5xl md:text-7xl text-military-dark uppercase leading-none mb-6">
            Expert <span className="text-military-neutral">Faculty</span>
          </h1>
          <p className="text-military-dark/90 text-lg">
            Learn from the best. Our faculty comprises ex-defense personnel and highly experienced educators dedicated to your success.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden group h-full">
                <div className="relative h-[300px] overflow-hidden">
                  <div className="absolute inset-0 bg-military-primary/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 text-center border-t border-military-dark/10 bg-military-bg/80">
                  <h3 className="font-heading text-2xl text-military-dark mb-1 uppercase">{member.name}</h3>
                  <p className="text-military-accent text-sm font-semibold uppercase tracking-widest mb-4">{member.role}</p>
                  <div className="flex items-center justify-center gap-2 text-military-dark/90 text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>{member.subject}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
