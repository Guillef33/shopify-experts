"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

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
    <main className="min-h-screen bg-[#060606] text-[#f0ebe1] selection:bg-[#00c853] selection:text-black font-[var(--font-jakarta)] overflow-x-hidden">
      <Navbar />
      
      {/* PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-[2px] bg-[#00c853] z- transition-all duration-150" style={{ width: `${scrolled}%` }}></div>

      {/* --- HERO: THE ENGINEER'S CANVAS --- */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c853] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c853]"></span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] font-black text-zinc-400">Project_ID: 0x44F_Global_Fashion</span>
              </div>
              <h1 className="text-7xl md:text-[10rem] font-[var(--font-bebas)] text-white uppercase italic leading-[0.8] mb-0 tracking-tighter">
                Extreme <br />
                <span className="text-[#00c853] drop-shadow-[0_0_40px_rgba(0,200,83,0.2)]">Scalability</span>
              </h1>
            </div>
            <div className="bg-zinc-900/40 p-6 border border-zinc-800 backdrop-blur-md rounded-xl max-w-sm">
                <p className="font-mono text-[10px] text-[#00c853] mb-2 uppercase tracking-widest">// Core Mission</p>
                <p className="text-zinc-400 text-sm font-light italic leading-relaxed">
                  Decoupling a $100M+ ARR storefront from monolithic Liquid constraints to an Edge-First Hydrogen architecture.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MARQUEE TECH SCANNER --- */}
      <div className="py-12 border-y border-zinc-900 bg-black flex overflow-hidden group">
        <div className="flex flex-nowrap gap-24 animate-marquee whitespace-nowrap">
          {["REMIX ARCHITECTURE", "HYDROGEN v2.0", "OXYGEN RUNTIME", "GRAPHQL API", "RSC (SERVER COMPONENTS)", "EDGE CACHE", "SSR", "TTFB OPTIMIZATION"].map((t) => (
            <span key={t} className="text-zinc-800 font-[var(--font-bebas)] text-6xl italic group-hover:text-zinc-700 transition-colors">{t}</span>
          ))}
        </div>
        <div className="flex flex-nowrap gap-24 animate-marquee whitespace-nowrap ml-24">
          {["REMIX ARCHITECTURE", "HYDROGEN v2.0", "OXYGEN RUNTIME", "GRAPHQL API", "RSC (SERVER COMPONENTS)", "EDGE CACHE", "SSR", "TTFB OPTIMIZATION"].map((t) => (
            <span key={t} className="text-zinc-800 font-[var(--font-bebas)] text-6xl italic group-hover:text-zinc-700 transition-colors">{t}</span>
          ))}
        </div>
      </div>

      {/* --- BENTO GRID: DIAGNOSTICS --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-bold mb-16 text-center italic">_Technical_Infrastructure_Audit</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* PAIN POINT CARD */}
          <div className="md:col-span-3 bg-zinc-950 border border-zinc-900 p-12 rounded-3xl flex flex-col justify-between hover:border-[#00c853]/40 transition-all duration-500">
            <h4 className="text-white text-3xl font-[var(--font-syne)] uppercase italic leading-tight mb-8">
              The $2M <br/>Latency <br/><span className="text-[#00c853]">Problem</span>.
            </h4>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-light">
              High-traffic drops during SKU releases were costing millions. Every 100ms of lag resulted in a 7% conversion decrease.
            </p>
          </div>

          {/* TTFB STAT */}
          <div className="md:col-span-3 lg:col-span-2 bg-[#00c853] p-12 rounded-3xl flex flex-col justify-between text-black group overflow-hidden relative">
            <div className="absolute -bottom-10 -right-10 text-[15rem] font-bold text-black/10 opacity-0 group-hover:opacity-100 transition-all duration-700 font-[var(--font-bebas)]">SPEED</div>
            <p className="text-[10px] uppercase tracking-widest font-black">Performance_Benchmark</p>
            <div>
                <p className="text-8xl font-[var(--font-bebas)] italic leading-none mb-2 tracking-tighter">0.8s</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Avg Global TTFB</p>
            </div>
          </div>

          {/* MOBILE SCANNER */}
          <div className="md:col-span-3 lg:col-span-1 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 flex flex-col items-center justify-center gap-6 group">
             <div className="w-16 h-28 border-[3px] border-zinc-700 rounded-2xl relative overflow-hidden bg-black shadow-2xl">
                <div className="absolute inset-x-0 h-1 bg-[#00c853] blur-[2px] animate-scan z-10"></div>
                <div className="p-2 space-y-2 opacity-20">
                    <div className="h-2 w-full bg-zinc-800 rounded"></div>
                    <div className="h-12 w-full bg-zinc-800 rounded"></div>
                    <div className="h-2 w-2/3 bg-zinc-800 rounded"></div>
                </div>
             </div>
             <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold text-center">Mobile Core <br/>Vitals: 99/100</p>
          </div>

          {/* TERMINAL COMPONENT */}
          <div className="md:col-span-4 bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-10 font-mono text-[12px] relative group shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#00c853]/20 border border-[#00c853]/50"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
            </div>
            <div className="space-y-2 relative z-10">
                <p className="text-[#00c853] font-bold tracking-widest">// DEPLOYMENT_LOG_v2.0.4</p>
                <p className="text-zinc-600 italic">Initializing Edge-Workers in 14 regions...</p>
                <div className="flex items-center gap-4 py-2">
                    <span className="text-zinc-500">Europe_West</span>
                    <div className="flex-1 h-px bg-zinc-900"></div>
                    <span className="text-white font-bold">OK [18ms]</span>
                </div>
                <div className="flex items-center gap-4 py-2">
                    <span className="text-zinc-500">Asia_Pacific</span>
                    <div className="flex-1 h-px bg-zinc-900"></div>
                    <span className="text-white font-bold">OK [42ms]</span>
                </div>
                <div className="flex items-center gap-4 py-2">
                    <span className="text-zinc-500">USA_East</span>
                    <div className="flex-1 h-px bg-zinc-900"></div>
                    <span className="text-white font-bold">OK [12ms]</span>
                </div>
                <p className="text-zinc-500 pt-4 cursor-block animate-pulse">Running cache-purge: stale-while-revalidate...</p>
                <p className="text-[#00c853] font-bold mt-4 uppercase">[SYSTEM READY] Architecture is now globally distributed.</p>
            </div>
          </div>

          {/* REVENUE LIFT */}
          <div className="md:col-span-2 bg-white text-black p-12 rounded-3xl flex flex-col justify-between items-start group transition-colors">
             <div className="w-full flex justify-between">
                <p className="text-[10px] uppercase tracking-widest font-black">KPI_Impact</p>
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
             </div>
             <div>
                <p className="text-9xl font-[var(--font-bebas)] italic leading-[0.7] tracking-tighter">+41%</p>
                <p className="text-[11px] uppercase font-bold tracking-[0.2em] mt-6 bg-black text-white px-3 py-1 inline-block">Revenue Growth</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- DEEP DIVE: THE ARCHITECTURE --- */}
      <section className="py-40 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32">
            <div className="space-y-16">
                <div>
                    <h2 className="text-[#00c853] font-mono text-xs uppercase tracking-[0.4em] mb-8 font-bold">02_The Architecture</h2>
                    <h3 className="text-6xl font-[var(--font-bebas)] text-white uppercase italic leading-none mb-10">
                        Beyond <br/>Standard <br/>Shopify.
                    </h3>
                    <p className="text-zinc-400 text-xl font-light leading-relaxed mb-10">
                        We didn't just build a theme; we built a high-performance engine. The storefront logic was completely moved to <strong>Shopify Oxygen</strong>, using workers that pre-fetch data before the user even clicks.
                    </p>
                </div>
                
                <div className="space-y-12">
                    {[
                      { t: "Dynamic Pricing Engine", d: "Computing complex currency and localized tax logic at the Edge, ensuring zero-lag PDP rendering." },
                      { t: "Predictive Cart Loading", d: "React Server Components (RSC) to handle cart state across international domains without re-renders." },
                      { t: "Middleware Proxying", d: "A custom GraphQL proxy to unify legacy ERP data with Shopify's Storefront API in < 20ms." }
                    ].map((feature, i) => (
                      <div key={i} className="group">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-6 group-hover:border-[#00c853] transition-colors">
                            <h4 className="text-white text-2xl font-[var(--font-syne)] uppercase italic font-bold">{feature.t}</h4>
                            <span className="text-[#00c853] font-mono text-xs font-bold">MOD_0{i+1}</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-lg">{feature.d}</p>
                      </div>
                    ))}
                </div>
            </div>
            
            <div className="relative pt-20 flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c853]/5 to-transparent blur-3xl rounded-full"></div>
              <div className="relative w-full aspect-square border border-zinc-900 flex flex-col p-12 bg-zinc-950/50 backdrop-blur-xl group hover:border-[#00c853]/30 transition-all">
                <h5 className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.5em] mb-12">Infrastructure_Snapshot_v2</h5>
                <div className="flex-1 flex flex-col justify-center items-center gap-12">
                    <div className="flex flex-col items-center gap-4">
                        <div className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono tracking-widest">USER_REQUEST</div>
                        <div className="h-10 w-[1px] bg-zinc-800 animate-pulse"></div>
                        <div className="px-8 py-3 bg-[#00c853] text-black text-xs font-bold font-mono tracking-widest shadow-[0_0_20px_#00c853]">EDGE_WORKER</div>
                        <div className="h-10 w-[1px] bg-zinc-800 animate-pulse"></div>
                        <div className="flex gap-4">
                            <div className="px-6 py-2 border border-zinc-800 text-zinc-600 text-[10px] font-mono tracking-widest italic">STOREFRONT_API</div>
                            <div className="px-6 py-2 border border-zinc-800 text-zinc-600 text-[10px] font-mono tracking-widest italic">ERP_SYSTEM</div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-zinc-700 text-[10px] font-mono leading-relaxed">
                    [INFO] Architecture successfully decoupled. <br/>
                    [INFO] Latency neutralized for 144 countries.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK GRID --- */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-32">
            <h2 className="text-7xl font-[var(--font-bebas)] text-white uppercase italic mb-20 text-center">Tech Stack <span className="text-zinc-800 text-stroke-white opacity-40 italic underline-green">Ecosystem</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden">
                {[
                  "Hydrogen v2", "Remix.js", "GraphQL", "TailwindCSS", "Oxygen Edge", "Vite", 
                  "TypeScript", "React Server", "Cloudflare", "Worker Hooks", "Node.js", "Redis Cache"
                ].map((stack) => (
                  <div key={stack} className="bg-[#060606] p-8 text-center flex flex-col justify-center items-center hover:bg-zinc-950 transition-all duration-300 group">
                    <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest group-hover:text-[#00c853] transition-colors">{stack}</span>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-64 text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00c853]/5 rounded-full blur-[150px] -z-10"></div>
        <h2 className="text-7xl md:text-[10rem] font-[var(--font-bebas)] text-white uppercase italic leading-[0.85] mb-12">
            Built <br/>To <span className="text-[#00c853]">Dominate.</span>
        </h2>
        <p className="max-w-xl mx-auto text-zinc-500 font-light text-xl mb-16 italic font-[var(--font-syne)] leading-relaxed">
            Stop building websites. Start building high-performance engineering infrastructure that prints money.
        </p>
        <a 
  href="mailto:shopifydevsinfo@gmail.com" 
  className="px-16 py-6 bg-[#00c853] text-black font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-all shadow-[0_0_30px_#00c85355] inline-block"
>
  Transform Your Store
</a>
      </section>

      <Footer />

      {/* --- GLOBAL CSS --- */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes scan {
          0% { top: -100%; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .text-stroke-white {
          -webkit-text-stroke: 1px white;
        }
        .cursor-block {
          border-right: 8px solid #00c853;
        }
        .hero-mesh {
          background-image: radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0);
          background-size: 40px 40px;
        }
        .text-green-glow-strong {
          text-shadow: 0 0 40px rgba(0, 200, 83, 0.4);
        }
      `}</style>
    </main>
  );
}