"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdmissionProcedure() {
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
            Join The Ranks
          </h4>
          <h1 className="font-heading text-5xl md:text-7xl text-military-dark uppercase leading-none mb-6">
            Admission <br className="hidden md:block" />
            <span className="text-military-neutral">Procedure</span>
          </h1>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto w-full mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-heading text-4xl text-military-dark uppercase border-b border-military-dark/10 pb-4">
              Step-by-Step Guide
            </h2>
            
            <div className="space-y-8">
              {[
                { step: "01", title: "Registration & Inquiry", desc: "Fill out the online inquiry form or call our admission counselors to understand the program details." },
                { step: "02", title: "Entrance Assessment", desc: "Candidates undergo a basic assessment test to gauge their current academic standing." },
                { step: "03", title: "Document Submission", desc: "Submit required documents including birth certificate, past marksheets, and photographs." },
                { step: "04", title: "Fee Payment & Confirmation", desc: "Pay the admission fee to secure the seat in the upcoming batch." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="font-heading text-5xl text-military-accent/30 leading-none pt-1">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-military-dark mb-2">{item.title}</h3>
                    <p className="text-military-dark/90 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-military-surface rounded-3xl p-10 border border-military-accent/20 h-fit sticky top-32"
          >
            <h3 className="font-heading text-3xl text-military-dark uppercase mb-6 flex items-center gap-3">
              <FileText className="text-military-accent" />
              Download Forms
            </h3>
            <p className="text-military-dark/90 mb-8">
              Get all the necessary forms and prospectus for the upcoming academic session.
            </p>
            
            <div className="space-y-4 mb-8">
              <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-military-bg border border-military-dark/10 hover:border-military-accent/50 group transition-all">
                <span className="text-military-dark font-semibold group-hover:text-military-accent transition-colors">Admission Form 2026</span>
                <Download className="w-5 h-5 text-military-accent" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-military-bg border border-military-dark/10 hover:border-military-accent/50 group transition-all">
                <span className="text-military-dark font-semibold group-hover:text-military-accent transition-colors">Prospectus</span>
                <Download className="w-5 h-5 text-military-accent" />
              </a>
            </div>

            <Button className="w-full">Apply Online Now</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
