import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

export default function PageSomosReyes() {
  const data = {
    title: "Somos Reyes",
    subtitle: "Logistics Orchestration & Omnichannel Intelligence for 15,000+ SKUs.",
    // STACK REAL: YUJU, ODOO, FEDEX, INTELLIGEMS
    techStack: [
      'Python (Custom Scripts)', 'Odoo ERP', 'YUJU Marketplace', 'FedEx API', 
      'Intelligems', 'Shopify Plus', 'Boost AI Search', 'Klaviyo'
    ],
    stats: [
      { value: '15k+', label: 'SKUs Orchestrated' },
      { value: 'Real-time', label: 'FedEx Label Gen' },
      { value: '+30%', label: 'Shipping Margin' }
    ],
    problem: "Somos Reyes faced a massive 'Data Silo' problem. With 15k SKUs sold across Amazon and MercadoLibre via YUJU, and managed in Odoo, the inventory was never in sync. Shipping costs were eating margins due to lack of a weight-to-price relationship in their dropshipping model.",
    solutions: [
      { 
        header: "Proprietary Dropshipping Algorithm", 
        body: "Engineered a custom Python script to establish a complex weight-to-price relationship. This algorithm automatically calculates the most profitable shipping tier, ensuring that dropshipping margins remain protected across all 15,000 products." 
      },
      { 
        header: "YUJU & Odoo Multi-Channel Sync", 
        body: "Architected the data pipeline between YUJU (Marketplaces) and Odoo (ERP). Every sale on Amazon or MercadoLibre triggers an immediate inventory adjustment in Shopify, maintaining a single source of truth for stock." 
      },
      { 
        header: "FedEx API Automation", 
        body: "Integrated FedEx Web Services natively to automate the generation of shipping labels and tracking. This eliminated manual entry, reducing warehouse fulfillment time by 60%." 
      },
      { 
        header: "Intelligems Profitability Engine", 
        body: "Implemented Intelligems for advanced A/B testing on shipping rates and product pricing. This data-driven approach allowed the brand to find the 'sweet spot' between conversion rate and net profitability." 
      }
    ],
    // AUDITORÍA DE INFRAESTRUCTURA (Sidebar)
    infraAudit: [
      { name: "YUJU", function: "Marketplace Hub", benefit: "Sync Amazon / ML / Walmart." },
      { name: "Odoo ERP", function: "Source of Truth", benefit: "Full inventory & fiscal control." },
      { name: "FedEx", function: "Last Mile API", benefit: "Automated label generation." },
      { name: "Intelligems", function: "Pricing Logic", benefit: "Shipping & Price A/B Testing." }
    ]
  };

  return (
    <main className="bg-[#060606] min-h-screen text-white selection:bg-[#00c853] selection:text-black font-[var(--font-jakarta)]">
      <Navbar />
      
      {/* --- HERO SECTION: LOGISTICS FOCUS --- */}
      <section className="pt-48 pb-24 px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 font-mono text-[10px] uppercase tracking-widest text-[#00c853]">
           <span className="w-2 h-2 rounded-full bg-[#00c853] animate-pulse"></span>
           Logistics_Engine: Active
        </div>
        <h1 className="text-8xl md:text-[12rem] font-[var(--font-bebas)] italic uppercase leading-[0.8] mb-12 tracking-tighter">
          Somos <br/> <span className="text-[#00c853]">Reyes_</span>
        </h1>
        <p className="text-2xl text-zinc-400 font-light max-w-4xl italic leading-relaxed mb-12">
          {data.subtitle}
        </p>
        
        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-2">
          {data.techStack.map(t => (
            <span key={t} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-500 font-mono uppercase tracking-widest hover:border-[#00c853] hover:text-white transition-all cursor-default">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* --- INFRASTRUCTURE GRID --- */}
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

      {/* --- THE LOGS (CONTENT) --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-8 space-y-24">
          <div className="space-y-8">
            <h3 className="text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] italic">// 01_THE_CHALLENGE</h3>
            <p className="text-xl text-zinc-300 font-light leading-relaxed">{data.problem}</p>
          </div>

          <div className="space-y-16">
            <h3 className="text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] italic">// 02_ENGINEERING_LOGS</h3>
            <div className="grid gap-16">
              {data.solutions.map((s, i) => (
                <div key={i} className="group relative pl-12 border-l border-zinc-900 hover:border-[#00c853] transition-all">
                  <span className="absolute -left-3 top-0 bg-[#060606] text-[#00c853] font-mono text-xs px-1">0{i+1}</span>
                  <h4 className="text-3xl font-bold uppercase italic mb-4">{s.header}</h4>
                  <p className="text-zinc-500 leading-relaxed max-w-2xl">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR: SYSTEM AUDIT */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-zinc-950 border border-zinc-900 p-8 rounded-sm">
            <h4 className="text-white font-mono text-[10px] uppercase tracking-[0.4em] mb-10 border-b border-zinc-900 pb-4">
              Orchestration_Audit
            </h4>
            <div className="space-y-8">
              {data.infraAudit.map(t => (
                <div key={t.name} className="group">
                  <p className="text-[#00c853] font-bold text-sm uppercase">{t.name}</p>
                  <p className="text-zinc-600 text-[9px] uppercase tracking-widest mt-1 italic">{t.function}</p>
                  <div className="mt-3 text-zinc-500 text-xs py-2 border-t border-zinc-900 group-hover:text-white transition-colors">
                    → {t.benefit}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-6 border-t border-zinc-900">
                <p className="text-[9px] font-mono text-zinc-800 leading-relaxed uppercase">
                    [INFO] ALL SYSTEMS SYNCED <br/>
                    [INFO] LATENCY NEUTRALIZED <br/>
                    [INFO] DROPSHIPPING POLICY: APPLIED
                </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}