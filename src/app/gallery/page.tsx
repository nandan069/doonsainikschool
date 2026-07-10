"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1579294520970-d7a8e85c2b29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507676184212-d0330a15183c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

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
            Life at the Academy
          </h4>
          <h1 className="font-heading text-5xl md:text-7xl text-military-dark uppercase leading-none mb-6">
            Our <span className="text-military-neutral">Gallery</span>
          </h1>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        {/* CSS Grid Masonry approximation */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImg(img)}
            >
              <div className="absolute inset-0 bg-military-primary/40 group-hover:bg-transparent transition-all duration-500 z-10" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Search className="w-10 h-10 text-military-dark drop-shadow-lg" />
              </div>
              <img src={img} alt={`Gallery Image ${i + 1}`} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-military-dark hover:text-military-accent transition-colors z-50 bg-military-dark/10 p-2 rounded-full"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg}
              alt="Enlarged"
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain border border-military-dark/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
