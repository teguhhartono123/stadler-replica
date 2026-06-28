import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrainCard from '../components/TrainCard';

export default function Home() {
    // Data portfolio armada kereta Stadler global ter-link gambar fisik lokal MacBook-mu
  const dataKereta = [
    { 
      id: 1, 
      nama: "SMILE (EC250)", 
      tipe: "High-Speed Train", 
      deskripsi: "The world's first single-decker low-floor high-speed train, operating internationally through the Alps.",
      img: "/images/smile-train.jpg" // 🟢 SINKRON: Format JPG asli laptop bapak!
    },
    { 
      id: 2, 
      nama: "FLIRT", 
      tipe: "Intercity & Regional", 
      deskripsi: "The single-decker bestseller fleet engineered with cutting-edge innovative aluminum lightweight technology.",
      img: "/images/flirt-train.webp" // 🟢 SINKRON: Format WEBP asli laptop bapak!
    },
    { 
      id: 3, 
      nama: "KISS", 
      tipe: "Double-Decker Train", 
      deskripsi: "High-capacity double-decker electric multiple unit optimized for urban high-density commuter heavy tracks.",
      img: "/images/kiss-train.jpg" // 🟢 SINKRON: Format JPG asli laptop bapak!
    }
  ];


  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 selection:bg-emerald-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* 🌐 Sektor Navigasi Loteng Atas Transparan */}
      <Navbar />

      {/* 🚀 Sektor Komponen Spanduk Slide Hero Raksasa */}
      <Hero />

      {/* 🚂 Sektor Fleet Vehicles Grid Showcase (Framer Motion Target Container) */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-16 border-l-4 border-emerald-500 pl-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Stadler Innovation Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mt-1">Our Vehicles & Rolling Stock</h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-2xl leading-relaxed">
            Discover our high-performance rail vehicles engineered with premium Swiss precision to shape future mobility.
          </p>
        </div>

        {/* Responsive Flex Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {dataKereta.map((kereta) => (
            <TrainCard key={kereta.id} kereta={kereta} />
          ))}
        </div>
      </section>

    </main>
  );
}
