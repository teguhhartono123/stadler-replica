"use client";

import { motion } from 'framer-motion';
import { Zap, Shield, ArrowUpRight } from 'lucide-react';

interface VehicleProps {
  id: string;
  name: string;
  type: string;
  speed: string;
  range: string;
  image: string;
}

export default function VehicleCard({ id, name, type, speed, range, image }: VehicleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}>

      {/* 🟢 Efek Sorot Glow Pojok Kartu */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/5 blur-2xl rounded-full group-hover:bg-emerald-500/10 transition-all duration-300" />

      {/* 🖼️ Bingkai Foto Spek Super Car Layout */}
      <div className="relative w-full h-44 rounded-xl bg-slate-950 overflow-hidden border border-slate-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
        {/* Placeholder Icon jika gambar belum di-bind */}
        <Zap className="w-12 h-12 text-slate-800 group-hover:text-emerald-500/40 group-hover:scale-110 transition-all duration-500" />
      </div>

      {/* 🏷️ Info Identitas Kendaraan Cyber */}
      <div className="mt-5">
        <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-2 py-1 rounded-md">
          {type}
        </span>
        <div className="flex items-center justify-between mt-3">
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
            {name}
          </h3>
          <a href={`/vehicles/${id}`} className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 📊 Sektor Grid Spek Performa Mesin */}
      <div className="grid grid-cols-2 gap-4 mt-5 pt-4 border-t border-slate-800/60 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-bold">Top score speed one</p>
            <p className="font-semibold text-slate-200">{speed}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <Shield className="w-3.5 h-3.5 text-teal-400" />
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-bold">Autonomy</p>
            <p className="font-semibold text-slate-200">{range}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
