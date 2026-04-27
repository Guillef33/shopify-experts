"use client";

import React from 'react';

export default function ThreeTenNutritionPage() {
  return (
    <main className="min-h-screen hero-mesh selection:bg-[#00c853] selection:text-black font-[var(--font-jakarta)] bg-[#0a0a0a] text-[#f0ebe1]">
      <div className="max-w-7xl mx-auto px-6 py-24 animate-in text-white">
        
        <header className="mb-24">
          <div className="badge mb-6"><span className="dot"></span> Enterprise Systems Architecture</div>
          <h1 className="text-7xl md:text-9xl font-[var(--font-bebas)] text-green-glow uppercase italic leading-none mb-8">
            310 Nutrition
          </h1>
          <p className="font-[var(--font-syne)] text-zinc-500 uppercase tracking-[0.3em] text-sm font-bold">
            High-Volume Infrastructure & NetSuite ERP Orchestration
          </p>
        </header>

        {/* ESTRATEGIA DE INDICADORES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 font-[var(--font-bebas)]">
          <div className="project-card p-10 bg-zinc-950 border border-zinc-900 border-green-glow">
            <p className="stat-number text-7xl text-[#00c853] tracking-tighter">$40M+</p>
            <p className="font-[var(--font-syne)] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">Annual Revenue Managed</p>
          </div>
          <div className="project-card p-10 bg-zinc-950 border border-zinc-900 border-green-glow text-green-glow">
            <p className="stat-number text-7xl text-[#00c853] tracking-tighter">40%</p>
            <p className="font-[var(--font-syne)] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">Load Speed Optimization</p>
          </div>
          <div className="project-card p-10 bg-zinc-950 border border-zinc-900 border-green-glow">
            <p className="stat-number text-7xl text-[#00c853] tracking-tighter">22%</p>
            <p className="font-[var(--font-syne)] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">MoM AOV Increase</p>
          </div>
        </section>

        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <section>
              <h3 className="underline-green font-[var(--font-syne)] text-[#00c853] uppercase tracking-widest text-xs mb-8 block underline-green font-bold">The Challenge</h3>
              <p className="text-zinc-300 text-lg leading-relaxed font-light mb-6">
                Managing a Shopify Plus powerhouse with **$40M+ ARR** required an immediate intervention to resolve systemic technical debt. The ecosystem was bloated with over **50 legacy apps and scripts**. Page builders like GemPages generated inefficient DOM structures, crippling mobile Core Web Vitals and suppressing global conversion rates.
              </p>
              <div className="p-8 bg-zinc-900/30 border-l-4 border-[#00c853] italic text-zinc-400 text-sm">
                "Our goal was an architectural pivot: moving from fragmented visual builders to a proprietary, high-performance modular React system."
              </div>
            </section>
          </div>

          <div className="lg:col-span-7 space-y-20 text-zinc-500 font-light">
            <section>
              <h3 className="font-[var(--font-syne)] text-[#00c853] uppercase tracking-widest text-xs mb-10 underline-green font-bold text-green-glow">Engineering & Solutions</h3>
              <div className="space-y-12">
                <div className="group border-b border-zinc-900 pb-10">
                  <h4 className="text-white text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00c853] transition-colors font-[var(--font-syne)] uppercase italic tracking-tighter leading-tight">01 / React-Driven Framework Transition</h4>
                  <p className="text-base leading-relaxed">
                    Executed a total phase-out of GemPages. Developed a custom architecture using **React.js, Vite.js, and Tailwind CSS**. This allowed for pixel-perfect Figma implementations with optimized script delivery and zero overhead from visual builders.
                  </p>
                </div>
                <div className="group border-b border-zinc-900 pb-10">
                  <h4 className="text-white text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00c853] transition-colors font-[var(--font-syne)] uppercase italic tracking-tighter leading-tight">02 / NetSuite ERP & Rebuy Orchestration</h4>
                  <p className="text-base leading-relaxed">
                    As a core technical partner for **Rebuy Engine**, we engineered custom smart carts and AI-driven cross-sell logic. Simultaneously, we directed the mission-critical data synchronization between **Shopify Plus and NetSuite**, ensuring operational and financial integrity.
                  </p>
                </div>
                <div className="group border-b border-zinc-900 pb-10">
                  <h4 className="text-white text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00c853] transition-colors font-[var(--font-syne)] uppercase italic tracking-tighter leading-tight">03 / Technical SEO & SEO Squad Collab</h4>
                  <p className="text-base leading-relaxed">
                    Collaborated with an SEO team to perform deep audits via **Screaming Frog and SEMRush**. We audited and removed 50+ redundant app integrations, optimizing the metadata layer and improving Lighthouse scores from under 50 to 85+.
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