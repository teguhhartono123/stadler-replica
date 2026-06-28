"use client";

import { motion } from 'framer-motion';
import { Train } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-slate-950 overflow-hidden border-b border-slate-800">
      
      {/* 🗺️ Sasis Cyber Grid Background Glow Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Sorot Sinar Awan Nebula Hijau Emerald */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 text-center z-20 flex flex-col items-center">
        
        {/* Lencana Ksatria Atas Bergerak Turun sejuk */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-xl"
        >
          <Train className="w-3.5 h-3.5" />
          <span>Next.js 15 App Router Architecture</span>
        </motion.div>

        {/* Judul Headline Raksasa Meluncur Anggun */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none max-w-3xl"
        >
          SHAPING THE FUTURE OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">RAIL MOBILITY</span>
        </motion.h1>

        {/* Sub-headline Deskripsi Ramping Meluncur Anggun */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-slate-400 mt-6 text-sm md:text-lg max-w-xl leading-relaxed font-medium"
        >
          Engineered with Swiss precision since 1942. Discover Next-Gen eco-friendly fleets optimized with serverless digital technology.
        </motion.p>

        {/* Dual CTA Button Workspace */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-emerald-500/10 transition-all duration-200 hover:scale-105 active:scale-95">
            Explore Our Fleet ➔
          </button>
          <button className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95">
            Contact Engineering Hub
          </button>
        </motion.div>

      </div>
    </section>
  );
}
