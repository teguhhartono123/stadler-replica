import Link from 'next/link';
import { ArrowLeft, Shield, Gauge, Cpu, Zap } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VehicleDetailPage({ params }: PageProps) {
  // Sasis penangkapan ID parameter URL secara asinkronus bawaan Next.js 15
  const resolvedParams = await params;
  const idKereta = resolvedParams.id;

  // Database simulasi spesifikasi teknis mendalam kereta Stadler Rail
  const databaseSpek: Record<string, any> = {
    "1": { nama: "SMILE (EC250)", tipe: "High-Speed Train", kecepatan: "250 km/h", daya: "6,000 kW", material: "Aluminum Lightweight", deskripsi: "The world's first single-decker low-floor high-speed train, engineered to cross the Gotthard Base Tunnel under the Swiss Alps flawlessly." },
    "2": { nama: "FLIRT", tipe: "Intercity & Regional", kecepatan: "160 km/h", daya: "3,000 kW", material: "Extruded Aluminum Profiles", deskripsi: "Our absolute bestseller. Highly modular train configuration optimized for local regional transits with innovative crash-protection structures." },
    "3": { nama: "KISS", tipe: "Double-Decker Train", kecepatan: "200 km/h", daya: "4,500 kW", material: "High-Strength Steel & Aluminum", deskripsi: "High-capacity multiple unit built for heavy suburban lines, offering expansive two-deck passenger spaces without sacrificing aerodynamic speed." }
  };

  const kereta = databaseSpek[idKereta] || {
    nama: "Unknown Fleet", tipe: "Prototype", kecepatan: "0 km/h", daya: "0 kW", material: "Carbon Fiber", deskripsi: "The specified vehicle registration ID is not found in Stadler Swiss Precision master database log."
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6 font-sans selection:bg-emerald-500 selection:text-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-3xl w-full bg-slate-800/40 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-8 md:p-12 shadow-2xl z-20">
        
        {/* Tombol Back Pipa Kawat Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-emerald-400 hover:text-white transition-colors duration-200 uppercase tracking-wider group mb-8">
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1.5 transition-transform" />
          <span>Back to Fleet Portfolio</span>
        </Link>

        {/* Header Metadata */}
        <div className="border-b border-slate-700/40 pb-6 mb-8">
          <span className="text-[10px] md:text-xs font-black bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 px-3 py-1 rounded-md uppercase tracking-widest">{kereta.tipe}</span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-4">{kereta.nama}</h1>
          <p className="text-slate-400 text-sm md:text-base mt-4 leading-relaxed font-medium">{kereta.deskripsi}</p>
        </div>

        {/* Grid Spesifikasi Mekanikal Raksasa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
            <Gauge className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Maximum Speed</div>
              <div className="text-lg font-black text-white mt-0.5">{kereta.kecepatan}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
            <Zap className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Power Output</div>
              <div className="text-lg font-black text-white mt-0.5">{kereta.daya}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
            <Cpu className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Carbody Material</div>
              <div className="text-lg font-black text-white mt-0.5">{kereta.material}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
            <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Swiss Safety Grade</div>
              <div className="text-lg font-black text-white mt-0.5">SIL 4 Certified</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
