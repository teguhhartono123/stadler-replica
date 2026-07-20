"use client";

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

// 🟢 KANCING FIX ABSOLUT: Custom SVG Native Ikon Sosial Media biar 100% Kebal dari Segala Eror Versi Lucide-React!
const GitHubIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.068.069-.068 1.005.074 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const XIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export default function Footer() {
  const tahunSekarang = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 px-6 py-12 md:py-16 relative overflow-hidden z-20">
      {/* Sorot Sinar Glow Samar di Kolong Bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-emerald-500/5 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 relative z-20">
        
        {/* 🏢 Kolom 1: Profil Ringkas Perusahaan */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-black text-slate-950 text-sm shadow-lg shadow-emerald-500/20">
              TH
            </div>
            <span className="text-lg font-black text-white tracking-tighter group-hover:text-emerald-400 transition-colors duration-200">
              TEGUH<span className="text-emerald-400 font-light">.LABS</span>
            </span>
          </div>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
            Engineering premium serverless cloud architectures, modern web ecosystems, and autonomous AI automation pipelines for global enterprise scale.
          </p>
        </div>

        {/* 📑 Kolom 2: Sitemap Services */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-3">Solutions</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-medium">
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Cloud Architecture</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Workflow Automation</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Full-Stack Next.js</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Cyber Forensics</li>
          </ul>
        </div>

        {/* 📑 Kolom 3: Corporate Link */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-3">Company</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-medium">
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Case Studies</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Security Audit</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Contact HQ</li>
          </ul>
        </div>

        {/* 🔌 Kolom 4: Connect Hub */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-3">Connect Hub</h4>
          <div className="flex items-center gap-3 text-slate-400 mb-4">
            <div className="p-2 bg-slate-900/60 border border-slate-800 rounded-lg hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 cursor-pointer transition-all">
              <GitHubIcon className="w-4 h-4" />
            </div>
            <div className="p-2 bg-slate-900/60 border border-slate-800 rounded-lg hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 cursor-pointer transition-all">
              <XIcon className="w-4 h-4" />
            </div>
            <div className="p-2 bg-slate-900/60 border border-slate-800 rounded-lg hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 cursor-pointer transition-all">
              <LinkedInIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/40 border border-slate-900 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>Node Cluster Active</span>
          </div>
        </div>

      </div>

      {/* 🧾 Garis Hak Cipta Legalitas Bawah */}
      <div className="max-w-7xl mx-auto border-t border-slate-900 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-semibold text-slate-600 uppercase tracking-widest relative z-20">
        <span>© {tahunSekarang} TEGUH LABS CO. ALL RIGHTS RESERVED.</span>
        <span className="flex items-center gap-4">
          <span className="hover:text-slate-400 cursor-pointer transition-all">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-slate-400 cursor-pointer transition-all">Terms of Service</span>
        </span>
      </div>
    </footer>
  );
}
