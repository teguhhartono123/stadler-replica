"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TrainCardProps {
  kereta: {
    id: number;
    nama: string;
    tipe: string;
    deskripsi: string;
    img: string;
  }
}

export default function TrainCard({ kereta }: TrainCardProps) {
  return (
    // 🟢 SUNTIKAN KAWAT LINK: Setiap kartu otomatis punya gerbang rute dinamis sesuai ID!
    <Link href={`/vehicles/${kereta.id}`} className="block select-none text-none">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.21, 1.02, 0.43, 1.01] }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ y: -10 }}
        className="bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700/60 shadow-xl cursor-pointer group flex flex-col justify-between h-[420px] transition-all duration-300 hover:border-emerald-500/50 hover:shadow-emerald-950/20 text-slate-100"
      >
        {/* 📸 Canvas Visual Section */}
        <div className="w-full h-48 bg-slate-950 overflow-hidden relative flex items-center justify-center border-b border-slate-700/40">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />
          
          <motion.div 
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image 
              src={kereta.img} 
              alt={kereta.nama}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority={true}
            />
          </motion.div>
        </div>

        {/* 📑 Sektor Metadata Deskripsi Grid Text */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-950/50 border border-emerald-900/60 px-2.5 py-1 rounded-md">{kereta.tipe}</span>
            <h3 className="text-xl font-extrabold text-white mt-4 tracking-tight group-hover:text-emerald-400 transition-colors duration-200">{kereta.nama}</h3>
            <p className="text-slate-400 mt-2.5 text-xs md:text-sm leading-relaxed font-medium line-clamp-3">{kereta.deskripsi}</p>
          </div>

          {/* Action Button Badge Footer */}
          <div className="mt-6 flex items-center justify-between text-xs md:text-sm font-bold text-emerald-400 border-t border-slate-700/40 pt-4">
            <span className="tracking-wide group-hover:text-white transition-all">Explore Specifications</span>
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:border-emerald-400 transform group-hover:rotate-45 transition-all duration-300 shadow-md">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
