"use client";

import { motion } from 'framer-motion';
import { Menu, Globe, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800/60 px-6 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 🚂 Sektor Kiri: Logo Identitas Korporat Replika */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center font-black text-slate-950 text-base shadow-lg shadow-emerald-500/20 transform group-hover:rotate-12 transition-transform duration-300">
            SR
          </div>
          <span className="text-xl font-black text-white tracking-tighter group-hover:text-emerald-400 transition-colors duration-200">
            STADLER<span className="text-emerald-400 font-light font-sans">.</span>
          </span>
        </div>

        {/* 📑 Sektor Tengah: Menu Navigasi Link Desktop */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-300 uppercase tracking-widest">
          <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-150 relative group">
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
          </span>
          <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-150 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
          </span>
          <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-150 relative group">
            Sustainability
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
          </span>
          <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-150 relative group">
            Careers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
          </span>
        </div>

        {/* 🔌 Sektor Kanan: Toolbar Fitur & Saklar Bahasa */}
        <div className="flex items-center gap-4 text-slate-400">
          <div className="p-2 hover:bg-slate-900 rounded-lg hover:text-emerald-400 cursor-pointer transition-all">
            <Search className="w-[18px] h-[18px]" />
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 hover:bg-slate-900 rounded-lg hover:text-emerald-400 cursor-pointer text-xs font-bold tracking-wider uppercase transition-all">
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </div>
          <div className="p-2 md:hidden hover:bg-slate-900 rounded-lg hover:text-emerald-400 cursor-pointer transition-all">
            <Menu className="w-5 h-5" />
          </div>
        </div>

      </div>
    </motion.nav>
  );
}
