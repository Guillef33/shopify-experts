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
    <main className="min-h-screen bg-[#060606] text-[#f0ebe1] selection:bg-[#00c853] selection:text-black font-[var(--font-jakarta)] overflow-x-hidden">
      <Navbar />
      
      {/* PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-[2px] bg-[#00c853] z-50 transition-all duration-150" style={{ width: `${scrolled}%` }}></div>

      {/* --- HERO: THE ARCHITECT'S VISION --- */}
      <section className="relative pt-32 md:pt-48 pb-12 md:pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6 md:mb-8 backdrop-blur-xl">
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-black text-[#00c853]">Case_Study: Global_Headless_Migration</span>
              </div>
              <h1 className="text-5xl md:text-[10rem] font-[var(--font-bebas)] text-white uppercase italic leading-[0.9] md:leading-[0.8] mb-0 tracking-tighter">
                Global <br />
                <span className="text-[#00c853] drop-shadow-[0_0_40px_rgba(0,200,83,0.2)]">Edge-First</span>
              </h1>
            </div>
            <div className="bg-zinc-900/40 p-6 md:p-8 border border-zinc-800 backdrop-blur-md rounded-xl max-w-sm">
                <p className="font-mono text-[10px] text-[#00c853] mb-3 md:mb-4 uppercase tracking-widest">// MISSION_LOG</p>
                <p className="text-zinc-400 text-xs md:text-sm font-light italic leading-relaxed">
                  Decoupling a global multi-storefront from legacy Liquid to a unified Hydrogen v2 architecture. Neutralizing latency for 12+ international markets.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MARQUEE TECH SCANNER --- */}
      <div className="py-4 md:py-6 border-y border-zinc-900 bg-black flex overflow-hidden group">
        <div className="flex flex-nowrap gap-12 md:gap-24 animate-marquee whitespace-nowrap">
          {["REMIX ARCHITECTURE", "HYDROGEN v2.0", "OXYGEN RUNTIME", "GRAPHQL API", "EDGE CACHE", "TTFB OPTIMIZATION"].map((t) => (
            <span key={t} className="text-zinc-800 font-[var(--font-bebas)] text-3xl md:text-6xl italic group-hover:text-zinc-700 transition-colors">{t}</span>
          ))}
        </div>
        <div className="flex flex-nowrap gap-12 md:gap-24 animate-marquee whitespace-nowrap ml-12 md:ml-24">
          {["REMIX ARCHITECTURE", "HYDROGEN v2.0", "OXYGEN RUNTIME", "GRAPHQL API", "EDGE CACHE", "TTFB OPTIMIZATION"].map((t) => (
            <span key={t} className="text-zinc-800 font-[var(--font-bebas)] text-3xl md:text-6xl italic group-hover:text-zinc-700 transition-colors">{t}</span>
          ))}
        </div>
      </div>

      {/* --- PHASE 01: THE AUDIT --- */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
                <h2 className="text-[#00c853] font-mono text-[10px] uppercase tracking-[0.4em] mb-6 md:mb-8 font-bold">01_The_Legacy_Audit</h2>
                <h3 className="text-4xl md:text-5xl font-[var(--font-bebas)] text-white uppercase italic mb-6 md:mb-8">Identifying the <br className="hidden md:block"/> Bottlenecks.</h3>
                <p className="text-zinc-500 text-sm md:text-base mb-8 leading-relaxed italic font-light">The previous infrastructure was a "monolithic mess". Third-party apps were injecting unoptimized JS, causing race conditions and UI flickering.</p>
                <ul className="space-y-3">
                    {["Average LCP: 4.8s (Mobile)", "JavaScript Execution: 2.4s", "38 active Third-party scripts", "Zero Edge Caching"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[10px] md:text-xs font-mono text-zinc-400">
                            <span className="text-red-500">[!]</span> {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-zinc-950 p-8 md:p-10 border border-zinc-900 rounded-2xl relative overflow-hidden">
                <p className="text-[9px] text-zinc-600 font-mono mb-6 md:mb-8 uppercase tracking-widest">// Performance_Leak_Analysis</p>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Main Thread Bloat</span>
                            <span className="text-red-500 font-mono text-[10px]">88% CRITICAL</span>
                        </div>
                        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[88%]"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-end pt-2">
                            <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Unused Code</span>
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
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          <div className="col-span-1 md:col-span-4 bg-zinc-950 border border-zinc-900 p-8 md:p-12 rounded-3xl flex flex-col justify-between hover:border-[#00c853]/40 transition-all duration-500">
            <h4 className="text-white text-2xl md:text-4xl font-[var(--font-syne)] uppercase italic leading-tight mb-6 md:mb-8">
              Transforming <span className="text-[#00c853]">Luxury</span> <br/>into a technical <br className="hidden md:block"/> advantage.
            </h4>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-md font-light">
              We replaced 24 unmanaged apps with custom server-side logic, reducing the DOM size by 70% and ensuring a consistent brand experience across all regions.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 bg-[#00c853] p-8 md:p-12 rounded-3xl flex flex-col justify-between text-black relative overflow-hidden group">
            <p className="text-[10px] uppercase tracking-widest font-black">Core_Vital_Mobile</p>
            <div className="relative z-10">
                <p className="text-6xl md:text-8xl font-[var(--font-bebas)] italic leading-none mb-1 tracking-tighter">98/100</p>
                <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest opacity-60">Lighthouse Performance</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-8 md:p-10 font-mono text-[10px] md:text-[11px] relative group overflow-hidden">
            <p className="text-[#00c853] font-bold tracking-widest mb-6 uppercase">// EDGE_ORCHESTRATION</p>
            <div className="space-y-2">
                {["USA_EAST", "EU_CENTRAL", "ASIA_TOKYO", "LATAM_SOUTH"].map((loc) => (
                    <div key={loc} className="flex justify-between border-b border-zinc-900 pb-2">
                        <span className="text-zinc-600">{loc}</span>
                        <span className="text-white">ACTIVE [0.002ms]</span>
                    </div>
                ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 bg-white text-black p-8 md:p-12 rounded-3xl flex flex-col justify-between min-h-[250px]">
              <p className="text-[10px] uppercase tracking-widest font-black text-zinc-400">Business_ROI</p>
              <div>
                <p className="text-7xl md:text-8xl font-[var(--font-bebas)] italic leading-[0.7] tracking-tighter text-[#00c853]">+64%</p>
                <p className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] mt-8 bg-black text-white px-4 py-2 inline-block">Checkout Conversion</p>
              </div>
          </div>
        </div>
      </section>

      {/* --- THE REFACTOR FLOW --- */}
      <section className="py-20 md:py-32 px-6 bg-[#080808] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-[#00c853] font-mono text-[10px] uppercase tracking-[0.4em] mb-12 md:mb-20 font-bold text-center italic">_The_Refactor_Workflow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                {[
                    { step: "01", title: "Decoupling", desc: "Extracting the storefront from Liquid and implementing a React-based Remix foundation." },
                    { step: "02", title: "API Orchestration", desc: "Unifying Shopify Storefront API with ERP and CMS data via a custom GraphQL layer." },
                    { step: "03", title: "Edge Deployment", desc: "Distributing the build globally via Oxygen to ensure <200ms LCP in every market." }
                ].map((s) => (
                    <div key={s.step} className="p-8 border border-zinc-900 rounded-xl hover:bg-zinc-900/30 transition-all group">
                        <span className="text-4xl md:text-5xl font-[var(--font-bebas)] text-zinc-800 italic group-hover:text-[#00c853] transition-colors">{s.step}</span>
                        <h4 className="text-lg text-white font-bold mt-4 mb-2">{s.title}</h4>
                        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- TECHNICAL DEEP DIVE --- */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32">
            <div className="space-y-12 md:space-y-16">
                <div>
                    <h2 className="text-[#00c853] font-mono text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">03_Technical_Architecture</h2>
                    <h3 className="text-4xl md:text-6xl font-[var(--font-bebas)] text-white uppercase italic leading-tight mb-8">Engineering <br className="hidden md:block"/>the Impossible.</h3>
                    <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                        We don't just build themes; we build scalable digital infrastructure. By utilizing **React Server Components (RSC)**, we ensure the browser only executes what is absolutely necessary.
                    </p>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                    {[
                      { t: "Predictive Prefetching", d: "A custom engine that predicts user intent and pre-loads data before the click even happens." },
                      { t: "Unified GraphQL Schema", d: "Mapping complex multi-currency logic and regional taxes at the Edge level." },
                      { t: "Zero-CLS Refactoring", d: "Ensuring visual stability by implementing explicit aspect ratios and server-side layout calculations." }
                    ].map((f, i) => (
                      <div key={i} className="group border-b border-zinc-900 pb-6 md:pb-8">
                        <h4 className="text-white text-lg md:text-xl font-[var(--font-syne)] uppercase italic font-bold mb-3 group-hover:text-[#00c853] transition-colors">{f.t}</h4>
                        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{f.d}</p>
                      </div>
                    ))}
                </div>
            </div>
            
            <div className="relative">
                <div className="lg:sticky lg:top-40 bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12 overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#00c853] animate-pulse"></div>
                    <p className="font-mono text-[9px] text-zinc-600 mb-8 uppercase tracking-widest">Architecture_Snapshot_v3.2</p>
                    <div className="flex flex-col gap-6 md:gap-8">
                        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded text-center font-mono text-[9px] text-zinc-400">CLIENT_BROWSER</div>
                        <div className="flex justify-center italic text-zinc-800 text-[10px]">↓ [Hydrated via Remix]</div>
                        <div className="p-6 bg-[#00c853] rounded text-center font-mono text-xs text-black font-black shadow-[0_0_50px_rgba(0,200,83,0.2)]">SHOPIFY_OXYGEN_EDGE</div>
                        <div className="flex justify-center italic text-zinc-800 text-[10px]">↓ [GraphQL Proxy]</div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 border border-zinc-900 rounded text-center font-mono text-[8px] text-zinc-600 uppercase">Storefront_API</div>
                            <div className="p-3 border border-zinc-900 rounded text-center font-mono text-[8px] text-zinc-600 uppercase">Legacy_ERP</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 md:py-64 text-center px-6 relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-[#00c853]/10 rounded-full blur-[80px] md:blur-[150px] -z-10"></div>
        <h2 className="text-5xl md:text-[10rem] font-[var(--font-bebas)] text-white uppercase italic leading-[0.9] md:leading-[0.85] mb-10">
            Engineered <br/>for <span className="text-[#00c853]">Growth.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-zinc-500 font-light text-lg md:text-xl mb-12 md:mb-16 italic font-[var(--font-syne)] leading-relaxed">
            Stop patching. Start engineering. If your current storefront is a bottleneck, it's time to move to the Edge.
        </p>
        <a 
          href="mailto:shopifydevsinfo@gmail.com" 
          className="w-full md:w-auto px-12 md:px-20 py-6 md:py-8 bg-[#00c853] text-black font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[12px] hover:scale-105 transition-all shadow-[0_0_50px_#00c85377] inline-block"
        >
          Request Technical Audit
        </a>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
        @keyframes scan { 0% { top: -100%; } 100% { top: 100%; } }
        .animate-scan { animation: scan 3s linear infinite; }
      `}</style>
    </main>
  );
}