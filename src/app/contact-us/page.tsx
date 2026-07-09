"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ContactUs() {
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
            Get In Touch
          </h4>
          <h1 className="font-heading text-5xl md:text-7xl text-military-white uppercase leading-none mb-6">
            Contact <span className="text-military-neutral">Us</span>
          </h1>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-heading text-4xl text-military-white uppercase">Reach Headquarters</h2>
            <p className="text-military-white/70 text-lg">
              Whether you have a question about admissions, fees, or our training programs, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4 border-l-4 border-l-military-accent">
                <MapPin className="w-8 h-8 text-military-accent shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-military-white mb-2">Campus Location</h3>
                  <p className="text-military-white/70">Sahastradhara Rd, near touchwood school, Dehradun, Uttarakhand 248001</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 border-l-4 border-l-military-accent">
                <Phone className="w-8 h-8 text-military-accent shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-military-white mb-2">Call Us</h3>
                  <div className="flex flex-col gap-1 text-military-white/70">
                    <a href="tel:+918006615154" className="hover:text-military-accent transition-colors">+91 8006615154</a>
                    <a href="tel:+918586858986" className="hover:text-military-accent transition-colors">+91 8586858986</a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 border-l-4 border-l-[#25D366]">
                <FaWhatsapp className="w-8 h-8 text-[#25D366] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-military-white mb-2">WhatsApp Support</h3>
                  <p className="text-military-white/70 mb-2">Fastest way to get your queries resolved.</p>
                  <a href="https://wa.me/918586858986" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold uppercase tracking-widest text-sm hover:underline">
                    Chat with us
                  </a>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-10 border border-military-accent/20 bg-[#151713]">
              <h3 className="font-heading text-3xl text-military-white uppercase mb-8">Send an Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-military-white/70 text-sm font-semibold uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full bg-military-bg border border-white/10 rounded-lg p-4 text-military-white focus:outline-none focus:border-military-accent transition-colors" placeholder="Cadet Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-military-white/70 text-sm font-semibold uppercase tracking-wider">Phone Number</label>
                    <input type="tel" className="w-full bg-military-bg border border-white/10 rounded-lg p-4 text-military-white focus:outline-none focus:border-military-accent transition-colors" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-military-white/70 text-sm font-semibold uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-military-bg border border-white/10 rounded-lg p-4 text-military-white focus:outline-none focus:border-military-accent transition-colors" placeholder="example@mail.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-military-white/70 text-sm font-semibold uppercase tracking-wider">Course Interested In</label>
                  <select className="w-full bg-military-bg border border-white/10 rounded-lg p-4 text-military-white focus:outline-none focus:border-military-accent transition-colors appearance-none">
                    <option value="rimc">RIMC Coaching</option>
                    <option value="sainik">Sainik School Coaching</option>
                    <option value="navodaya">Navodaya Vidyalaya</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-military-white/70 text-sm font-semibold uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full bg-military-bg border border-white/10 rounded-lg p-4 text-military-white focus:outline-none focus:border-military-accent transition-colors resize-none" placeholder="Your query here..."></textarea>
                </div>

                <Button className="w-full flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="mt-24 h-[500px] w-full bg-military-bg border-t border-b border-white/10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.842777322964!2d78.0772!3d30.3547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIxJzE2LjkiTiA3OMKwMDQnMzcuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%)' }} // Fake dark mode map
          allowFullScreen={false} 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
