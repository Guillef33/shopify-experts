"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SectionHeader from "../../../components/SectionHeader";

export default function EngineeringCasePage() {
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
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <div className="max-w-4xl">
              <div className="badge mb-8">
                <span className="dot" /> Project_ID: 0x44F_EXTREME_SCALABILITY
              </div>
              <h1 className="font-display text-7xl md:text-[11vw] text-cream uppercase leading-[0.85] mb-0 tracking-tight">
                Extreme <br />
                <span className="text-[#00C853] text-green-glow">Scalability</span>
              </h1>
            </div>
            <div className="bg-[#111] p-6 border border-[#1a1a1a] rounded-xl max-w-sm">
                <p className="font-mono text-[10px] text-[#00C853] mb-2 uppercase tracking-widest">// Core Mission</p>
                <p className="font-body text-zinc-400 text-sm font-light leading-relaxed">
                  Decoupling a $100M+ ARR storefront from monolithic Liquid constraints to an Edge-First Hydrogen architecture.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MARQUEE TECH SCANNER (Sin Italic) --- */}
      <div className="py-10 border-y border-[#1a1a1a] bg-black flex overflow-hidden">
        <div className="flex flex-nowrap gap-24 animate-marquee whitespace-nowrap">
          {["REMIX ARCHITECTURE", "HYDROGEN v2.0", "OXYGEN RUNTIME", "GRAPHQL API", "EDGE CACHE", "TTFB OPTIMIZATION"].map((t) => (
            <span key={t} className="text-zinc-900 font-display text-5xl md:text-7xl tracking-tighter">{t}</span>
          ))}
        </div>
      </div>

      {/* --- BENTO GRID: DIAGNOSTICS --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
            <div className="badge inline-flex"> <span className="dot" /> Infrastructure_Audit </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-3 bg-[#111] border border-[#1a1a1a] p-12 rounded-3xl flex flex-col justify-between hover:border-[#00C853]/30 transition-all duration-500">
            <h4 className="font-display text-4xl text-cream uppercase leading-none mb-8">
              The $2M <br/>Latency <br/><span className="text-[#00C853]">Problem</span>.
            </h4>
            <p className="font-body text-zinc-500 text-sm leading-relaxed max-w-xs">
              High-traffic drops during SKU releases were costing millions. Every 100ms of lag resulted in a 7% conversion decrease.
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-2 bg-[#00C853] p-12 rounded-3xl flex flex-col justify-between text-black group relative overflow-hidden">
            <p className="font-heading text-[10px] uppercase tracking-widest font-black">Performance_Benchmark</p>
            <div>
                <p className="font-display text-8xl leading-none mb-2 tracking-tighter">0.8s</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Avg Global TTFB</p>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-1 bg-zinc-900/30 p-8 rounded-3xl border border-[#1a1a1a] flex flex-col items-center justify-center gap-6">
             <div className="w-16 h-28 border-[3px] border-zinc-800 rounded-2xl relative overflow-hidden bg-black">
                <div className="absolute inset-x-0 h-1 bg-[#00C853] blur-[2px] animate-scan"></div>
             </div>
             <p className="font-heading text-[10px] uppercase tracking-widest text-[#555] font-bold text-center leading-tight">Mobile Core <br/>Vitals: 99/100</p>
          </div>

          {/* TERMINAL COMPONENT */}
          <div className="md:col-span-4 bg-[#080808] border border-[#1a1a1a] rounded-3xl p-10 font-mono text-[12px] relative overflow-hidden">
            <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#00C853]/40 border border-[#00C853]"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
            </div>
            <div className="space-y-3">
                <p className="text-[#00C853] font-bold tracking-widest">// DEPLOYMENT_LOG_v2.0.4</p>
                {[
                  { region: "Europe_West", ping: "18ms" },
                  { region: "Asia_Pacific", ping: "42ms" },
                  { region: "USA_East", ping: "12ms" }
                ].map((log) => (
                  <div key={log.region} className="flex items-center gap-4 py-1 border-b border-zinc-900/50">
                    <span className="text-zinc-600">{log.region}</span>
                    <div className="flex-1 h-[1px] bg-[#1a1a1a]"></div>
                    <span className="text-white font-bold">OK [{log.ping}]</span>
                  </div>
                ))}
                <p className="text-[#00C853] font-bold mt-4 uppercase tracking-tighter animate-pulse">[SYSTEM READY] Globally Distributed.</p>
            </div>
          </div>

          <div className="md:col-span-2 bg-white text-black p-12 rounded-3xl flex flex-col justify-between">
             <p className="font-heading text-[10px] uppercase tracking-widest font-black text-zinc-400">KPI_Impact</p>
             <div>
                <p className="font-display text-9xl leading-[0.7] tracking-tighter text-[#00C853]">+41%</p>
                <p className="font-heading text-[11px] uppercase font-bold tracking-[0.2em] mt-8 bg-black text-white px-4 py-2 inline-block">Revenue Growth</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK GRID --- */}
      <section className="py-32 px-6 bg-[#080808] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-6xl md:text-8xl text-cream uppercase mb-20 text-center">
              Tech Stack <span className="text-zinc-800" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}>Ecosystem</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
                {[
                  "Hydrogen v2", "Remix.js", "GraphQL", "TailwindCSS", "Oxygen Edge", "Redis Cache"
                ].map((stack) => (
                  <div key={stack} className="bg-[#0A0A0A] p-8 text-center hover:bg-[#111] transition-all group">
                    <span className="text-zinc-600 text-[10px] font-heading font-bold uppercase tracking-widest group-hover:text-[#00C853] transition-colors">{stack}</span>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- FINAL CTA: WHATSAPP --- */}
      <section className="py-40 text-center px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-7xl md:text-[10rem] text-cream uppercase leading-none mb-12">
              Built To <span className="text-[#00C853] text-green-glow">Dominate.</span>
          </h2>
          <a 
            href="https://api.whatsapp.com/send?phone=541167062068&text=Hi%21%20I%20want%20to%20grow%20my%20Shopify%20store" 
            target="_blank"
            className="btn-primary inline-block px-16 py-6"
          >
            Transform Your Store
          </a>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 50s linear infinite; }
        @keyframes scan { 0% { top: -100%; } 100% { top: 100%; } }
        .animate-scan { animation: scan 3s linear infinite; }
      `}</style>
    </main>
  );
}