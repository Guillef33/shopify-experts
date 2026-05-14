import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

export default function Page310() {
  const data = {
    title: "310 Nutrition",
    subtitle: "Enterprise Shopify Plus Performance & Data Engineering.",
    // STACK COMPLETO DEL CLIENTE
    techStack: [
      'React.js', 'Vite.js', 'Tailwind CSS', 'Shopify Plus', 'NetSuite ERP', 
      'Rebuy AI', 'Black Crow AI', 'Elevar', 'Hotjar', 'Klaviyo', 'GA4', 'GTM'
    ],
    stats: [
      { value: '92/100', label: 'Lighthouse Performance' },
      { value: '-40%', label: 'TTFB Reduction' },
      { value: '+22%', label: 'AOV Increase (MoM)' }
    ],
    problem: "With annual revenue exceeding $40M, 310 Nutrition faced severe operational bottlenecks due to 'app-bloat' (GemPages) and legacy Liquid code. The unoptimized DOM structure was causing massive friction in mobile conversions and data loss in marketing attribution.",
    solutions: [
      { 
        header: "Headless-Driven Frontend Refactor", 
        body: "Total replacement of Shogun/GemPages by building high-performance Product Detail Pages (PDPs) using React.js and Vite.js. We eliminated 60% of unused JavaScript, achieving sub-second page loads." 
      },
      { 
        header: "Predictive AI & Personalization Stack", 
        body: "Deep integration of Black Crow AI for real-time purchase predictions and Rebuy Smart Cart for dynamic upselling. This combination allowed us to personalize the journey for high-intent users, skyrocketing the LTV." 
      },
      { 
        header: "Precision Tracking & Data Observability", 
        body: "Implemented Elevar for server-side tracking and GA4/GTM orchestration. This ensured 100% data accuracy for Klaviyo flows and Meta Ads, bypassing browser-side cookie restrictions." 
      },
      { 
        header: "ERP & Infrastructure Governance", 
        body: "Managed the mission-critical bridge between Shopify Plus and NetSuite ERP. Engineered custom middleware to ensure inventory and financial data integrity for thousands of daily global transactions." 
      }
    ],
    // COMPONENTE DE TECH SCANNER (Para demostrar seniority)
    techDetailed: [
      { name: "Black Crow AI", function: "Predictive Analytics", benefit: "Real-time purchase intent scoring." },
      { name: "Elevar", function: "Server-Side Tracking", benefit: "Lossless conversion data." },
      { name: "Rebuy AI", function: "Smart Merchandising", benefit: "Dynamic AOV optimization." },
      { name: "Varify.io", function: "A/B Testing", benefit: "UX validation at scale." }
    ]
  };

  return (
    <main className="bg-[#060606] min-h-screen text-white selection:bg-[#00c853] selection:text-black">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-48 pb-24 px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 font-mono text-[10px] uppercase tracking-widest">
           <span className="w-2 h-2 rounded-full bg-[#00c853] animate-pulse"></span>
           System_Status: Operational
        </div>
        <h1 className="text-8xl md:text-[12rem] font-[var(--font-bebas)] italic uppercase leading-[0.8] mb-12 tracking-tighter">
          {data.title} <br/> <span className="text-[#00c853]">Engineering</span>
        </h1>
        <p className="text-2xl text-zinc-400 font-light max-w-4xl italic leading-relaxed mb-12">
          {data.subtitle}
        </p>
        
        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-2">
          {data.techStack.map(t => (
            <span key={t} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-500 font-mono uppercase tracking-widest hover:border-[#00c853] hover:text-white transition-all">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* --- METRICS GRID --- */}
      <section className="py-20 border-y border-zinc-900 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.stats.map(s => (
            <div key={s.label}>
              <p className="text-7xl font-[var(--font-bebas)] italic text-white leading-none">{s.value}</p>
              <p className="text-[#00c853] font-mono text-[10px] uppercase tracking-[0.3em] mt-4">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTENT ENGINE --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-8 space-y-24">
          <div className="space-y-8">
            <h3 className="text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] italic">// 01_The_Challenge</h3>
            <p className="text-xl text-zinc-300 font-light leading-relaxed">{data.problem}</p>
          </div>

          <div className="space-y-12">
            <h3 className="text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] italic">// 02_The_Engineering</h3>
            <div className="grid gap-12">
              {data.solutions.map((s, i) => (
                <div key={i} className="group border-l border-zinc-900 pl-10 hover:border-[#00c853] transition-all">
                  <h4 className="text-3xl font-bold uppercase italic mb-4">{s.header}</h4>
                  <p className="text-zinc-500 leading-relaxed max-w-2xl">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR: TECH SCANNER */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-zinc-950 border border-zinc-900 p-8 rounded-sm">
            <h4 className="text-white font-mono text-[10px] uppercase tracking-[0.4em] mb-10 border-b border-zinc-900 pb-4">
              Infrastructure_Audit
            </h4>
            <div className="space-y-8">
              {data.techDetailed.map(t => (
                <div key={t.name} className="group">
                  <p className="text-[#00c853] font-bold text-sm uppercase">{t.name}</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1 italic">{t.function}</p>
                  <div className="mt-3 text-zinc-400 text-xs py-2 border-t border-zinc-900 group-hover:text-white">
                    → {t.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CASE VECTOR ART (Dinamismo visual) --- */}
      <section className="py-40 px-6 max-w-7xl mx-auto flex justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 bg-[#060606] text-zinc-700 font-mono text-[9px] uppercase tracking-[1em]">
               End_Of_Log
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}