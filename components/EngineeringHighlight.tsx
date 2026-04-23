"use client";
import React from 'react';

export default function EngineeringHighlight() {
  return (
    <section className="py-24 lg:py-32 border-b border-[#1a1a1a] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header - Clon del estilo de Services */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="badge mb-5">
              <span className="dot" /> Featured Achievement
            </div>
            <h2 className="font-display text-5xl lg:text-7xl text-cream leading-none uppercase">
              BEYOND
              <br />
              <span className="text-[#00C853]">ENGINEERING</span>
            </h2>
          </div>
          <p className="text-[#888] font-body max-w-sm leading-relaxed text-sm lg:text-base">
            Transforming legacy Shopify architectures into global Headless engines. High-performance infrastructure for enterprise-scale brands.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <p className="font-body text-lg text-[#777] leading-relaxed">
              We migrated a multi-market luxury brand from a bloated Liquid monolith to a unified <span className="text-cream">Hydrogen + Oxygen architecture</span>. We eliminated technical debt and achieved a massive leap in global performance.
            </p>
            
            {/* Tags - Estilo About */}
            <div className="flex flex-wrap gap-2">
              {["Hydrogen v2", "Oxygen", "Remix.js", "Server Components", "Edge Caching"].map((tech) => (
                <span 
                  key={tech} 
                  className="text-[10px] font-heading font-bold uppercase tracking-[0.1em] text-[#555] bg-[#161616] border border-[#222] px-2.5 py-1 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <a href="/cases/global-edge-migration" className="btn-primary inline-flex items-center gap-2">
                View Project Details
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats Cards - Normativizadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-8 hover:border-[#00C853]/20 transition-all duration-300">
               <p className="font-display text-5xl text-[#00C853] mb-2 leading-none">0.4S</p>
               <p className="font-heading text-xs uppercase tracking-widest text-[#555] font-bold">Global TTFB</p>
            </div>
            <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-8 hover:border-[#00C853]/20 transition-all duration-300 lg:translate-y-6">
               <p className="font-display text-5xl text-cream mb-2 leading-none">+52%</p>
               <p className="font-heading text-xs uppercase tracking-widest text-[#555] font-bold">Conv. Lift</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}