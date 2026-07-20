import Link from 'next/link';
import { 
  ArrowLeft, Shield, Gauge, Cpu, Zap, Layers, 
  CheckCircle2, MessageSquare, Database, Globe2, Code2 
} from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const idLayanan = resolvedParams.id;

  // Master database pilar solusi teknologi digital premium Teguh Labs
  const databaseSolusi: Record<string, any> = {
    "1": { 
      nama: "Enterprise Cloud Architecture", 
      tipe: "Infrastructure Solutions", 
      spekA: "Cloudflare D1 / R2", 
      spekB: "AWS Edge Runtime", 
      spekC: "Serverless Computing", 
      tagline: "Kedaulatan Data Global Tanpa Server Fisik",
      keunggulan: ["Otomatis replikasi data ke 300+ lokasi CDN dunia.", "Biaya serverless terpangkas hingga 80% dibanding VPS biasa.", "Sistem proteksi DDoS tingkat militer terintegrasi Cloudflare Proxy."],
      features: [{title: "Global Scale", desc: "Mampu menampung hingga 50.000 concurrent user tanpa setup server manual."}, {title: "Database Relasional D1", desc: "Kueri SQL super kencang di jaringan edge cloud terdekat dengan pengguna."}],
      deskripsi: "Perancangan dan deployment infrastruktur cloud berskala global menggunakan teknologi serverless edge runtime. Menghasilkan pangkalan sistem yang kebal mati lampu, hemat cost operasional, dan sanggup menampung jutaan traffic concurrent secara real-time tanpa lemot." 
    },
    "2": { 
      nama: "AI Workflow Automation", 
      tipe: "Intelligent Robot Node", 
      spekA: "n8n Advanced Pipelines", 
      spekB: "Autonomous AI Agent", 
      spekC: "Zero-Error Automation", 
      tagline: "Sistem Kerja Otomatis 24/7 Tanpa Istirahat",
      keunggulan: ["Integrasi tanpa batas menggunakan Code Node JavaScript custom.", "Auto-reply AI WhatsApp & Telegram API tingkat lanjut.", "Sinkronisasi laporan keuangan kasir dan audit arsip negara otomatis."],
      features: [{title: "n8n Self-Hosted", desc: "Menjalankan jutaan data otomatisasi bulanan dengan biaya Rp 0 rupiah."}, {title: "Kecerdasan Buatan Otonom", desc: "AI Agent yang mampu memilah pesan masuk, mendeteksi scam, dan membalas otomatis."}],
      deskripsi: "Merakit pabrik otomatisasi robot kerja cerdas berbasis alur kerja (Workflow Automation) menggunakan n8n core engine. Mengotomatisasikan penagih SPP mahasiswa, asisten auto-reply chat WhatsApp bertenaga kecerdasan buatan, hingga sinkronisasi audit log arsip negara tanpa tidur." 
    },
    "3": { 
      nama: "Premium Software Engineering", 
      tipe: "Full-Stack System", 
      spekA: "Next.js 15 Turbopack", 
      spekB: "Tailwind CSS v4 Engine", 
      spekC: "TypeScript Strict Mode", 
      tagline: "Aplikasi Web Super Kencang Standar Internasional",
      keunggulan: ["Kompilasi super cepat Turbopack di bawah 250ms.", "Optimasi SEO maksimal dengan metode Server-Side Rendering (SSR).", "Struktur kode bersih, modular, dan kebal korup menggunakan TypeScript."],
      features: [{title: "Tailwind v4", desc: "Gaya penataan visual modern paling ringan, cepat, dan responsif sedunia."}, {title: "App Router Engine", desc: "Sistem routing canggih bawaan Vercel yang mengisolasi keamanan backend API."}],
      deskripsi: "Pembangunan ekosistem aplikasi web tingkat perusahaan (production-grade) menggunakan Next.js 15 App Router. Dioptimalkan penuh dengan kompilator Turbopack secepat kilat, desain layout modular Tailwind v4, dan penulisan kode TypeScript super aman." 
    }
  };

  const layanan = databaseSolusi[idLayanan] || {
    nama: "Custom Corporate Architecture", 
    tipe: "Tailored Prototype", 
    spekA: "Custom Stack Integration", 
    spekB: "On-Demand Delivery", 
    spekC: "Scalable Core System", 
    tagline: "Solusi Teknologi Kustom Sesuai Kebutuhan Bisnis",
    keunggulan: ["Analisis forensik arsitektur kode dari nol.", "Integrasi API pihak ketiga secara independen.", "Dukungan tim ahli infrastruktur siber 24 jam."],
    features: [{title: "Custom Solutions", desc: "Rancangan arsitektur khusus untuk korporasi skala besar."}, {title: "Secure Audit Log", desc: "Sistem pelacakan riwayat aktivitas data internal yang kebal kebocoran siber."}],
    deskripsi: "Spesifikasi pilar layanan solusi digital kustom yang dirancang khusus untuk memenuhi kebutuhan forensik siber dan otomatisasi skala besar korporasi Anda."
  };

    return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6 font-sans relative selection:bg-emerald-500 selection:text-slate-900">
      {/* Pendaran Cahaya Nebula Sejuk Latar Belakang */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20 flex flex-col gap-10">
        
        {/* 🧭 BARIS NAVIGASI ATAS */}
        <div className="flex items-center justify-between border-b border-slate-900 pb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-emerald-400 hover:text-white transition-colors duration-200 uppercase tracking-wider group no-underline">
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1.5 transition-transform" />
            <span>Back to Capabilities</span>
          </Link>
          <span className="text-[10px] md:text-xs font-black bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 px-3 py-1.5 rounded-md uppercase tracking-widest">{layanan.tipe}</span>
        </div>

        {/* 📢 BARIS HEADLINE UTAMA JOMPLANG MEWAH */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-4">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">{layanan.nama}</h1>
            <p className="text-emerald-400 font-bold text-sm md:text-lg mt-2 tracking-wide">// {layanan.tagline}</p>
            <p className="text-slate-400 text-sm md:text-base mt-6 leading-relaxed font-medium">{layanan.deskripsi}</p>
          </div>
          
          {/* Kotak Ringkasan Quick Specs */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 backdrop-blur-md flex flex-col gap-4 w-full">
            <div className="text-xs font-black text-white uppercase tracking-widest border-b border-slate-900 pb-3">Quick Specifications</div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs"><span className="text-slate-500 font-bold">Framework</span><span className="text-emerald-400 font-black">{layanan.spekA}</span></div>
              <div className="flex justify-between items-center text-xs"><span className="text-slate-500 font-bold">Pipeline</span><span className="text-slate-300 font-black">{layanan.spekB}</span></div>
              <div className="flex justify-between items-center text-xs"><span className="text-slate-500 font-bold">Standard</span><span className="text-slate-300 font-black">{layanan.spekC}</span></div>
              <div className="flex justify-between items-center text-xs"><span className="text-slate-500 font-bold">Security</span><span className="text-white font-black bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 text-[10px]">SIL 4 GRaDE</span></div>
            </div>
          </div>
        </div>

        {/* 📊 BARIS PARAMETER TEKNIS (4 Grid Ramping) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          <div className="flex items-center gap-4 bg-slate-900/30 border border-slate-900 p-5 rounded-2xl">
            <Layers className="w-5 h-5 text-emerald-400 flex-shrink-0" /><div className="text-xs font-bold text-slate-500">Framework:<span className="block text-sm font-black text-white mt-0.5">{layanan.spekA}</span></div>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/30 border border-slate-900 p-5 rounded-2xl">
            <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0" /><div className="text-xs font-bold text-slate-500">Pipeline:<span className="block text-sm font-black text-white mt-0.5">{layanan.spekB}</span></div>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/30 border border-slate-900 p-5 rounded-2xl">
            <Cpu className="w-5 h-5 text-emerald-400 flex-shrink-0" /><div className="text-xs font-bold text-slate-500">Architecture:<span className="block text-sm font-black text-white mt-0.5">{layanan.spekC}</span></div>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/30 border border-slate-900 p-5 rounded-2xl">
            <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0" /><div className="text-xs font-bold text-slate-500">Certification:<span className="block text-sm font-black text-white mt-0.5">SIL 4 Military</span></div>
          </div>
        </div>

        {/* 🛠️ SEKTOR UTAMA: DETAIL KEUNGGULAN & TABEL TEKNOLOGI (Bikin Rame Sultan!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-4">
          
          {/* Kiri: Daftar Keunggulan Strategis */}
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-black text-white uppercase tracking-widest mb-6 border-l-2 border-emerald-500 pl-3">Strategic Advantages</h3>
              <div className="flex flex-col gap-4">
                {layanan.keunggulan.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Integrasi Live Konsultasi WhatsApp */}
            <div className="mt-8 border-t border-slate-900 pt-6 flex items-center justify-between">
              <div className="text-xs font-bold text-slate-500">Butuh Solusi Ini Sekarang?</div>
              <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs tracking-wide shadow-lg shadow-emerald-500/10 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Hubungi Chief Architect ➔</span>
              </button>
            </div>
          </div>

          {/* Kanan: Fitur Teknis Lebih Detail */}
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 flex flex-col gap-6">
            <h3 className="text-base font-black text-white uppercase tracking-widest border-l-2 border-emerald-500 pl-3">Architecture Deep Dive</h3>
            <div className="flex flex-col gap-6">
              {layanan.features.map((feat: any, idx: number) => (
                <div key={idx} className="bg-slate-950/60 border border-slate-900 p-5 rounded-xl flex gap-4 items-start">
                  <div className="p-2 bg-slate-900 rounded-lg text-emerald-400 border border-slate-800">
                    {idx === 0 ? <Database className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-black uppercase tracking-wider">{feat.title}</h4>
                    <p className="text-slate-400 text-xs font-medium mt-1.5 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
