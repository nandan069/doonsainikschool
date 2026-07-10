"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Eye, Flag } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      {/* Hero Header */}
      <section className="relative px-6 md:px-12 max-w-[1400px] mx-auto w-full mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h4 className="text-military-accent uppercase tracking-[0.3em] font-semibold text-sm mb-4">
            Our Legacy
          </h4>
          <h1 className="font-heading text-5xl md:text-7xl text-military-dark uppercase leading-none mb-6">
            About Doon <br className="hidden md:block" />
            <span className="text-military-neutral">Sainik School</span>
          </h1>
          <p className="text-military-dark/90 text-lg leading-relaxed">
            Founded on the principles of honor, courage, and commitment, Doon Sainik School is dedicated to preparing the youth of India for prestigious academies like RIMC, NDA, and various Sainik and Military Schools.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto w-full mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-military-secondary/50 flex items-center justify-center mb-8 border border-military-accent/20 group-hover:scale-110 transition-transform duration-500">
              <Target className="w-10 h-10 text-military-accent" />
            </div>
            <h3 className="font-heading text-3xl uppercase tracking-wider text-military-dark mb-4">Our Mission</h3>
            <p className="text-military-dark/90 leading-relaxed">
              To provide top-tier academic coaching combined with rigorous physical training and personality development, ensuring our cadets are fully equipped to crack the toughest entrance exams and excel in the Armed Forces.
            </p>
          </Card>
          
          <Card className="p-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-military-secondary/50 flex items-center justify-center mb-8 border border-military-accent/20 group-hover:scale-110 transition-transform duration-500">
              <Eye className="w-10 h-10 text-military-accent" />
            </div>
            <h3 className="font-heading text-3xl uppercase tracking-wider text-military-dark mb-4">Our Vision</h3>
            <p className="text-military-dark/90 leading-relaxed">
              To be the premier preparatory institution in the nation, renowned for forging leaders of impeccable character and unyielding resolve who will serve the country with distinction.
            </p>
          </Card>
        </div>
      </section>

      {/* Director's Message */}
      <section className="bg-[#151713] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }} />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-military-primary/30 z-10 mix-blend-overlay" />
            <img
              src="https://images.unsplash.com/photo-1507676184212-d0330a15183c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Director"
              className="w-full h-full object-cover object-top grayscale"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-military-bg to-transparent z-20">
              <h3 className="font-heading text-4xl text-military-dark uppercase">Maj. Gen. Example</h3>
              <p className="text-military-accent uppercase tracking-widest text-sm font-semibold">Director & Founder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ShieldCheck className="w-16 h-16 text-military-accent/50" />
            <h2 className="font-heading text-5xl text-military-dark uppercase leading-none">
              Director's <br /> <span className="text-military-neutral">Message</span>
            </h2>
            <div className="space-y-6 text-military-dark/90 text-lg leading-relaxed">
              <p>
                "Welcome to Doon Sainik School. Preparing for the Armed Forces requires more than just academic intelligence; it demands physical endurance, mental toughness, and an unwavering commitment to the nation."
              </p>
              <p>
                "Our comprehensive curriculum is meticulously designed to mirror the rigorous standards of RIMC, Sainik Schools, and the NDA. We don't just teach; we transform young minds into disciplined, confident, and capable leaders ready to take on the mantle of responsibility."
              </p>
              <p>
                "Join us, and take the first step towards a life of honor, valor, and service."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
