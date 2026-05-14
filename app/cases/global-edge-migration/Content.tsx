"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function GlobalEdgeCasePage() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled((position / height) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#f0ebe1] selection:bg-[#00C853] selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-[2px] bg-[#00C853] z-50 transition-all duration-150" style={{ width: `${scrolled}%` }}></div>

      {/* --- HERO: UNIFICADO --- */}
      <section className="relative pt-32 md:pt-48 pb-12 md:pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20">
            <div className="max-w-4xl">
              <div className="badge mb-8">
                <span className="dot" /> Case_Study: 0xHYD_GLOBAL
              </div>
              <h1 className="font-display text-6xl md:text-[10rem] text-cream uppercase leading-[0.9] md:leading-[0.8] mb-0 tracking-tight">
                Global <br />
                <span className="text-[#00C853] text-green-glow">Edge-First</span>
              </h1>
            </div>
            <div className="bg-[#111] p-6 md:p-8 border border-[#1a1a1a] rounded-2xl max-w-sm">
                <p className="font-mono text-[10px] text-[#00C853] mb-3 md:mb-4 uppercase tracking-widest">// MISSION_LOG</p>
                <p className="font-body text-zinc-400 text-sm font-light leading-relaxed">
                  Decoupling a global multi-storefront from legacy Liquid to a unified Hydrogen v2 architecture. Neutralizing latency for 12+ international markets.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MARQUEE TECH SCANNER (Sin Italic) --- */}
      <div className="py-6 border-y border-[#1a1a1a] bg-black flex overflow-hidden">
        <div className="flex flex-nowrap gap-12 md:gap-24 animate-marquee whitespace-nowrap">
          {["REMIX ARCHITECTURE", "HYDROGEN v2.0", "OXYGEN RUNTIME", "GRAPHQL API", "EDGE CACHE", "TTFB OPTIMIZATION"].map((t) => (
            <span key={t} className="text-zinc-900 font-display text-4xl md:text-6xl tracking-widest">{t}</span>
          ))}
        </div>
      </div>

      {/* --- PHASE 01: THE AUDIT --- */}
      <section className="py-16 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
                <div className="badge mb-8"> <span className="dot" /> 01 / Audit </div>
                <h3 className="font-display text-4xl md:text-6xl text-cream uppercase leading-none mb-8">
                  Identifying the <br /> <span className="text-[#00C853]">Bottlenecks.</span>
                </h3>
                <p className="font-body text-zinc-500 text-base mb-8 leading-relaxed">
                  The previous infrastructure was a "monolithic mess". Third-party apps were injecting unoptimized JS, causing race conditions and UI flickering.
                </p>
                <ul className="space-y-4">
                    {["Average LCP: 4.8s (Mobile)", "JavaScript Execution: 2.4s", "38 active Third-party scripts", "Zero Edge Caching"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest">
                            <span className="text-red-500">×</span> {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-[#111] p-8 md:p-10 border border-[#1a1a1a] rounded-2xl relative">
                <p className="text-[9px] text-[#555] font-mono mb-8 uppercase tracking-widest">// Performance_Leak_Analysis</p>
                <div className="space-y-8">
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest font-heading">Main Thread Bloat</span>
                            <span className="text-red-500 font-mono text-[10px]">88% CRITICAL</span>
                        </div>
                        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[88%]"></div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest font-heading">Unused Code</span>
                            <span className="text-red-500 font-mono text-[10px]">1.2MB LOST</span>
                        </div>
                        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[72%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- BENTO GRID: RESULTS --- */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="col-span-1 md:col-span-4 bg-[#111] border border-[#1a1a1a] p-8 md:p-12 rounded-3xl flex flex-col justify-between hover:border-[#00C853]/30 transition-all duration-500">
            <h4 className="font-display text-3xl md:text-5xl text-cream uppercase leading-tight mb-8">
              Transforming <span className="text-[#00C853]">Luxury</span> <br/>into a technical advantage.
            </h4>
            <p className="font-body text-zinc-500 text-sm leading-relaxed max-w-md">
              We replaced 24 unmanaged apps with custom server-side logic, reducing the DOM size by 70% and ensuring a consistent brand experience across all regions.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 bg-[#00C853] p-8 md:p-12 rounded-3xl flex flex-col justify-between text-black">
            <p className="font-heading text-[10px] uppercase tracking-widest font-black">Performance_Score</p>
            <div>
                <p className="font-display text-7xl md:text-8xl leading-none mb-1">98/100</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Lighthouse Mobile</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: WHATSAPP (Unificado) --- */}
      <section className="py-32 md:py-48 px-6 bg-black border-t border-[#1a1a1a] text-center">
        <h2 className="font-display text-5xl md:text-8xl text-cream uppercase leading-none mb-8">
          Start the <br /> <span className="text-[#00C853]">Refactor.</span>
        </h2>
        <a 
          href="https://api.whatsapp.com/send?phone=541167062068&text=Hi%21%20I%20want%20to%20grow%20my%20Shopify%20store" 
          target="_blank"
          className="btn-primary inline-block px-12 py-6 mt-8"
        >
          Request Technical Audit
        </a>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </main>
  );
}