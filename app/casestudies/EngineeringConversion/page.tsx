"use client";

import React from 'react';

export default function InfrastructureRefactorPage() {
  return (
    <main className="min-h-screen hero-mesh selection:bg-[#00c853] selection:text-black font-[var(--font-jakarta)] bg-[#0a0a0a] text-[#f0ebe1]">
      <div className="max-w-7xl mx-auto px-6 py-24 animate-in text-white">
        
        <header className="mb-24">
          <div className="badge mb-6"><span className="dot"></span> Technical Debt Liquidation</div>
          <h1 className="text-7xl md:text-9xl font-[var(--font-bebas)] text-green-glow uppercase italic leading-none mb-8">
            Elite Gear Co.
          </h1>
          <p className="font-[var(--font-syne)] text-zinc-500 uppercase tracking-[0.3em] text-sm font-bold">
            App Consolidation & Custom Liquid Logic Refactoring
          </p>
        </header>

        {/* ESTRATEGIA DE INDICADORES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 font-[var(--font-bebas)]">
          <div className="project-card p-10 bg-zinc-950 border border-zinc-900 border-green-glow">
            <p className="stat-number text-7xl text-[#00c853] tracking-tighter">-65%</p>
            <p className="font-[var(--font-syne)] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">Third-Party Script Reduction</p>
          </div>
          <div className="project-card p-10 bg-zinc-950 border border-zinc-900 border-green-glow text-green-glow">
            <p className="stat-number text-7xl text-[#00c853] tracking-tighter">1.2s</p>
            <p className="font-[var(--font-syne)] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">LCP Improvement</p>
          </div>
          <div className="project-card p-10 bg-zinc-950 border border-zinc-900 border-green-glow">
            <p className="stat-number text-7xl text-[#00c853] tracking-tighter">$12k</p>
            <p className="font-[var(--font-syne)] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">Monthly App Fees Saved</p>
          </div>
        </section>

        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <section>
              <h3 className="underline-green font-[var(--font-syne)] text-[#00c853] uppercase tracking-widest text-xs mb-8 block font-bold">The Challenge</h3>
              <p className="text-zinc-300 text-lg leading-relaxed font-light mb-6">
                Elite Gear Co. reached a breaking point where their Shopify Plus store was held together by **42 active apps**. This resulted in extreme "Script Bloat," causing a massive delay in the *Main Thread* and a high bounce rate on mobile. The technical debt was not only slowing down the site but also draining the bottom line with redundant monthly subscriptions.
              </p>
              <div className="p-8 bg-zinc-900/30 border-l-4 border-[#00c853] italic text-zinc-400 text-sm">
                "We didn't just optimize; we performed surgery. We removed the middleware and returned the power to Shopify's native core."
              </div>
            </section>
          </div>

          <div className="lg:col-span-7 space-y-20 text-zinc-500 font-light">
            <section>
              <h3 className="font-[var(--font-syne)] text-[#00c853] uppercase tracking-widest text-xs mb-10 underline-green font-bold text-green-glow">Engineering & Solutions</h3>
              <div className="space-y-12">
                <div className="group border-b border-zinc-900 pb-10">
                  <h4 className="text-white text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00c853] transition-colors font-[var(--font-syne)] uppercase italic tracking-tighter leading-tight">01 / Native Liquid Logic Overhaul</h4>
                  <h5 className="text-[10px] text-[#00c853] mb-2 tracking-[0.3em] font-bold">CORE: LIQUID / SCHEMAS / METAFIELDS</h5>
                  <p className="text-base leading-relaxed">
                    Deconstructed 15+ marketing apps and rebuilt their functionality using **native Liquid logic and Metafields**. This eliminated external API calls during the initial page load, resulting in a cleaner, faster DOM structure.
                  </p>
                </div>
                <div className="group border-b border-zinc-900 pb-10">
                  <h4 className="text-white text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00c853] transition-colors font-[var(--font-syne)] uppercase italic tracking-tighter leading-tight">02 / Shopify Functions for Checkout</h4>
                  <h5 className="text-[10px] text-[#00c853] mb-2 tracking-[0.3em] font-bold">TECH: RUST / WEB ASSEMBLY (WASM)</h5>
                  <p className="text-base leading-relaxed">
                    Leveraged the new **Shopify Functions** to handle complex discount logic and shipping rules. By moving this logic to the backend via WASM, we removed the need for checkout-extensibility apps that usually lag during peak traffic.
                  </p>
                </div>
                <div className="group border-b border-zinc-900 pb-10">
                  <h4 className="text-white text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00c853] transition-colors font-[var(--font-syne)] uppercase italic tracking-tighter leading-tight">03 / Resource Prioritization & Squashing</h4>
                  <h5 className="text-[10px] text-[#00c853] mb-2 tracking-[0.3em] font-bold">STRATEGY: CRITICAL PATH CSS</h5>
                  <p className="text-base leading-relaxed">
                    Identified and "squashed" 25+ unused CSS/JS files inherited from deleted apps. Implemented **Critical Path CSS injection** to ensure the above-the-fold content renders in under 1.2s on 4G networks.
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