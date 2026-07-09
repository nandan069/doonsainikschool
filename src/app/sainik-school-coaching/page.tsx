"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function SainikSchoolCoaching() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <section className="relative px-6 md:px-12 max-w-[1400px] mx-auto w-full mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-military-primary/20 z-10" />
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Sainik School Coaching"
              className="w-full h-full object-cover grayscale mix-blend-multiply"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <h4 className="text-military-accent uppercase tracking-[0.3em] font-semibold text-sm">
              All India Sainik Schools Entrance Exam
            </h4>
            <h1 className="font-heading text-5xl md:text-7xl text-military-white uppercase leading-none">
              Sainik School <br />
              <span className="text-military-neutral">Coaching</span>
            </h1>
            <p className="text-military-white/70 text-lg leading-relaxed max-w-lg">
              Prepare for the AISSEE with Dehradun's finest educators. Our holistic approach ensures that students are not only academically proficient but also physically and mentally prepared for Sainik School life.
            </p>
            <Button size="lg">Join The Elite Batch</Button>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#151713] py-24">
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-military-white uppercase">Why Sainik Schools?</h2>
            <div className="w-24 h-1 bg-military-accent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "NDA Feeders", desc: "Sainik Schools are the primary feeder institutions for the National Defence Academy." },
              { icon: Users, title: "Discipline & Character", desc: "Imparts a high standard of discipline, character, and physical fitness." },
              { icon: BookOpen, title: "Quality Education", desc: "CBSE curriculum combined with military training for holistic development." },
            ].map((highlight, i) => (
              <Card key={i} className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-military-secondary/50 flex items-center justify-center border border-military-accent/20 mb-2">
                  <highlight.icon className="w-8 h-8 text-military-accent" />
                </div>
                <h3 className="font-bold text-military-white text-xl">{highlight.title}</h3>
                <p className="text-military-white/60 text-sm leading-relaxed">{highlight.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
