import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Process from "@/components/Process";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <Services />

      {/* --- SECCIÓN DESTACADA: ENGINEERING PORTAL --- */}
      <section className="py-32 bg-[#060606] border-y border-zinc-900 relative overflow-hidden group">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#00c853]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-[#00c853]"></span>
                <span className="text-[#00c853] text-[10px] uppercase tracking-[0.5em] font-black">Featured Achievement</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-[var(--font-bebas)] text-white uppercase italic leading-[0.85] mb-8">
                Beyond <br />
                <span className="text-zinc-800" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)' }}>Liquid</span> <br />
                <span className="text-[#00c853]">Engineering</span>
              </h2>
              <p className="text-zinc-400 text-xl font-light leading-relaxed mb-12 max-w-lg font-[var(--font-syne)] italic">
                "How we transformed a legacy Shopify architecture into a global Headless engine, achieving sub-second performance for enterprise scale."
              </p>
              <a href="/cases/engineering" className="inline-flex items-center gap-6 group/btn">
                <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover/btn:border-[#00c853] group-hover/btn:bg-[#00c853]/10 transition-all duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white uppercase tracking-[0.3em] text-[10px] font-black">View Case Study</span>
                  <span className="text-zinc-600 text-[9px] uppercase tracking-widest font-mono group-hover/btn:text-[#00c853] transition-colors">Project_ID: 0x44F</span>
                </div>
              </a>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between aspect-square group-hover:-translate-y-2 transition-transform duration-500">
                   <p className="text-[#00c853] font-[var(--font-bebas)] text-5xl italic leading-none">0.8s</p>
                   <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Global TTFB</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between aspect-square translate-y-8 group-hover:translate-y-6 transition-transform duration-500">
                   <p className="text-white font-[var(--font-bebas)] text-5xl italic leading-none">+41%</p>
                   <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Conversion Lift</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Work />
      <About />
      <Process />
      {/* <SocialProof /> */}
      <Contact />
      <Footer />
    </main>
  );
}