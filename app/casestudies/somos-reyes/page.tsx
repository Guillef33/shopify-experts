"use client";

import React from 'react';

export default function SomosReyesPage() {
  return (
    <main className="min-h-screen hero-mesh selection:bg-[#00c853] selection:text-black font-[var(--font-jakarta)] bg-[#0a0a0a] text-[#f0ebe1]">
      <div className="max-w-7xl mx-auto px-6 py-24 animate-in">
        
        <header className="mb-24">
          <div className="badge mb-6"><span className="dot"></span> Data Science & Automation Case Study</div>
          <h1 className="text-7xl md:text-9xl font-[var(--font-bebas)] text-green-glow uppercase italic leading-none mb-8">
            Somos Reyes
          </h1>
          <p className="font-[var(--font-syne)] text-zinc-500 uppercase tracking-[0.3em] text-sm font-bold">
            Python Automation, Omnichannel Logistics & Odoo ERP Orchestration
          </p>
        </header>

        {/* INDICADORES DE IMPACTO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 font-[var(--font-bebas)]">
          <div className="project-card p-10 bg-zinc-950 border border-zinc-900 border-green-glow">
            <p className="stat-number text-7xl text-[#00c853] tracking-tighter">15K+</p>
            <p className="font-[var(--font-syne)] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">Active SKUs Synchronized</p>
          </div>
          <div className="project-card p-10 bg-zinc-950 border border-zinc-900 border-green-glow">
            <p className="stat-number text-7xl text-[#00c853] tracking-tighter">40%</p>
            <p className="font-[var(--font-syne)] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">Manual Workload Reduction</p>
          </div>
          <div className="project-card p-10 bg-zinc-950 border border-zinc-900 border-green-glow text-green-glow">
            <p className="stat-number text-7xl text-[#00c853] tracking-tighter">14K</p>
            <p className="font-[var(--font-syne)] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">Qualified Leads Generated</p>
          </div>
        </section>

        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <section>
              <h3 className="underline-green font-[var(--font-syne)] text-[#00c853] uppercase tracking-widest text-xs mb-8 block font-bold">The Challenge</h3>
              <p className="text-zinc-300 text-lg leading-relaxed font-light mb-6">
                Managing a complex catalog of **15,000+ SKUs** across diverse marketplaces and physical branches created critical data silos. We acted as the technical bridge between **Data Science and Finance teams** to implement mapping protocols for **Yuju Marketplace, FedEx, and Odoo**, ensuring accurate financial reporting and stock transparency across all omnichannel touchpoints in over 50 countries.
              </p>
              <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-lg border-green-glow">
                <h5 className="text-[#00c853] font-[var(--font-syne)] text-xs tracking-[0.2em] mb-3 uppercase font-bold">Strategic Expansion:</h5>
                <p className="text-zinc-500 text-sm italic font-light leading-relaxed">
                  Led the technical strategy for reopening 3 private label sub-brands, deploying custom badges for real-time SKU data and proprietary collection scripts to automate product discovery across the entire catalog.
                </p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-7 space-y-20">
            <section>
              <h3 className="font-[var(--font-syne)] text-[#00c853] uppercase tracking-widest text-xs mb-10 underline-green font-bold text-green-glow">Data Intelligence & Backend Strategy</h3>
              <div className="space-y-12 text-zinc-500 font-light">
                <div className="group border-b border-zinc-900 pb-10">
                  <h4 className="text-white text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00c853] transition-colors font-[var(--font-syne)] uppercase italic tracking-tighter leading-tight">01 / Python-Driven Backend Automation</h4>
                  <p className="text-base leading-relaxed">
                    Developed proprietary **Python scripts** to automate inventory synchronization, dynamic collection sorting, and custom PDP logic. This ensured a real-time, bidirectional bridge between Shopify Admin and the **Odoo ERP**, reducing manual errors by 90%.
                  </p>
                </div>
                <div className="group border-b border-zinc-900 pb-10">
                  <h4 className="text-white text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00c853] transition-colors font-[var(--font-syne)] uppercase italic tracking-tighter leading-tight">02 / Logistics & Discovery Optimization</h4>
                  <p className="text-base leading-relaxed">
                    Automated fulfillment workflows via **FedEx API** for heavy industrial dropshipping. Integration with **Klevu Smart Search** and optimized **BoostCommerce** filters provided millisecond discovery across the entire 15,000 SKU database, significantly boosting user retention.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}