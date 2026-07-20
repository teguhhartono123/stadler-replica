import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VehicleCard from '../components/VehicleCard';
import Footer from '../components/Footer'; // 🟢 KANCING: Panggil pipa komponen footer baru!

export default function Home() {
  // Data portfolio layanan pilar bisnis utama Company Profile Premium
  const dataLayanan = [
    { 
      id: 1, 
      nama: "Enterprise Cloud Architecture", 
      tipe: "Infrastructure", 
      deskripsi: "Next-Gen serverless edge integration using Cloudflare D1/R2 and AWS architectures optimized for global traffic scalability.",
      img: "/images/smile-train.jpg" 
    },
    { 
      id: 2, 
      nama: "AI Workflow Automation", 
      tipe: "Automation Robot", 
      deskripsi: "Advanced automated autonomous agent pipeline systems leveraging n8n orchestration engines to eliminate human manual errors.",
      img: "/images/flirt-train.webp" 
    },
    { 
      id: 3, 
      nama: "Premium Software Engineering", 
      tipe: "Full-Stack Development", 
      deskripsi: "Production-grade hyper-fast web ecosystems engineered using Next.js 15 App Router frameworks and TypeScript standards.",
      img: "/images/kiss-train.jpg" 
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* 🌐 Sektor Navigasi Loteng Atas Transparan */}
      <Navbar />

      {/* 🚀 Sektor Komponen Spanduk Slide Hero Raksasa Corporate */}
      <Hero />

      {/* 💻 Sektor Core Services Grid Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-16 border-l-4 border-emerald-500 pl-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Our Strategic Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mt-1">Core Digital Solutions</h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-2xl leading-relaxed">
            We deliver high-performance digital infrastructure and modern serverless ecosystems engineered with absolute Swiss precision.
          </p>
        </div>

        {/* Responsive Flex Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {dataLayanan.map((layanan) => (
          <VehicleCard
            key={layanan.id}
            id={layanan.id.toString()}
            name={layanan.nama}
            type={layanan.tipe}
            speed="320 KM/H"
            range="100% Autonomous"
            image={layanan.img}
          />


          ))}
        </div>
      </section>

      {/* 🧾 Sektor Komponen Footer Kolong Bawah Cyber Glow */}
      <Footer />

    </main>
  );
}

