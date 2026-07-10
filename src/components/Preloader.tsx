"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show preloader for a couple of seconds before fading out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#141614] touch-none"
        >
          {/* Subtle grid background for the premium feel */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-8"
          >
            <div className="relative w-32 md:w-40 h-32 md:h-40 bg-military-surface/50 rounded-2xl p-4 shadow-[0_0_40px_rgba(212,175,55,0.15)] flex items-center justify-center border border-white/5">
              <img
                src="https://doonsainikschool.com/wp-content/uploads/2025/06/doon-sainik-school-4.jpeg"
                alt="Doon Sainik School Logo"
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Spinning ring animations */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-t-military-accent border-r-transparent border-b-transparent border-l-transparent rounded-[1.5rem] opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 border border-b-military-accent/50 border-r-transparent border-t-transparent border-l-transparent rounded-xl opacity-40"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className="font-heading text-2xl md:text-3xl tracking-[0.15em] uppercase text-military-white leading-none">
                Doon Sainik
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-military-accent font-semibold">
                School Dehradun
              </div>
              
              {/* Loading Bar */}
              <div className="w-32 h-[2px] bg-white/10 rounded-full mt-4 overflow-hidden relative">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-0 w-1/2 bg-military-accent rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
