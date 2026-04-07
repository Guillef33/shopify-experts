"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-mesh relative min-h-screen flex flex-col justify-end pb-20 pt-32 overflow-hidden"
      style={
        {
          "--mx": "70%",
          "--my": "40%",
          background: `
            radial-gradient(ellipse 60% 50% at var(--mx) var(--my), rgba(0,200,83,0.07) 0%, transparent 70%),
            #0A0A0A
          `,
        } as React.CSSProperties
      }
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating badge top-right */}
      <div className="absolute top-28 right-8 lg:right-16 hidden lg:flex flex-col items-end gap-3 animate-float">
        <div className="bg-[#161616] border border-[#222] rounded-xl p-4 flex items-center gap-3 w-64">
          <div className="w-10 h-10 bg-[#00C853]/10 border border-[#00C853]/20 rounded-lg flex items-center justify-center text-lg">
            📈
          </div>
          <div>
            <div className="font-heading font-bold text-xs text-[#888] tracking-widest uppercase mb-0.5">
              Avg. CR Lift
            </div>
            <div className="font-display text-2xl text-[#00C853] leading-none">
              +34%
            </div>
          </div>
        </div>

        <div className="bg-[#161616] border border-[#222] rounded-xl p-4 flex items-center gap-3 w-56">
          <div className="w-10 h-10 bg-[#00C853]/10 border border-[#00C853]/20 rounded-lg flex items-center justify-center text-lg">
            🛍️
          </div>
          <div>
            <div className="font-heading font-bold text-xs text-[#888] tracking-widest uppercase mb-0.5">
              Stores Built
            </div>
            <div className="font-display text-2xl text-cream leading-none">
              50+
            </div>
          </div>
        </div>
      </div>

      {/* Shopify badge — bottom-left floating */}
      <div
        className="absolute bottom-16 left-8 hidden lg:block"
        style={{ animation: "float 8s ease-in-out infinite 3s" }}
      >
        <div className="bg-[#161616] border border-[#222] rounded-xl px-4 py-3 flex items-center gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 109 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.7 14.8C74.6 14.1 74 13.6 73.4 13.6C72.8 13.6 61.9 13.3 61.9 13.3C61.9 13.3 52.2 3.9 51.3 3.0C50.4 2.1 48.6 2.4 47.9 2.6C47.8 2.6 46.0 3.1 43.1 4.0C41.0 -1.9 37.3 -5.5 32.2 -5.5C31.9 -5.5 31.6 -5.5 31.3 -5.4C31.0 -5.8 30.4 -6.2 29.7 -6.5C25.3 -8.2 21.3 -5.4 18.0 1.6C15.6 6.6 13.8 14.2 13.2 20.6C8.4 22.1 5.0 23.2 4.9 23.2C2.3 24.0 2.2 24.1 1.9 26.6C1.6 28.4 -5.4 82.7 -5.4 82.7L52.7 93.6L81.4 86.5C81.4 86.5 74.8 15.5 74.7 14.8Z"
              fill="#00C853"
              transform="translate(15, 15) scale(0.85)"
            />
            <path
              d="M73.4 13.6C72.8 13.6 61.9 13.3 61.9 13.3C61.9 13.3 52.2 3.9 51.3 3.0C51.0 2.7 50.6 2.5 50.2 2.5L52.7 93.6L81.4 86.5C81.4 86.5 74.8 15.5 74.7 14.8C74.6 14.1 74 13.6 73.4 13.6Z"
              fill="#00A843"
              transform="translate(15, 15) scale(0.85)"
            />
          </svg>
          <div>
            <div className="font-heading font-bold text-[10px] text-[#555] tracking-widest uppercase">
              Shopify Partner
            </div>
            <div className="font-heading font-bold text-xs text-cream">
              Expert Developers
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 animate-in" style={{ animationDelay: "0.1s" }}>
          <div className="badge">
            <span className="dot" />
            Shopify Experts · CRO Specialists
          </div>
        </div>

        {/* Main headline */}
        <h1
          className="font-display text-[14vw] lg:text-[11vw] xl:text-[10rem] leading-none tracking-tight text-cream mb-6 animate-in"
          style={{ animationDelay: "0.2s" }}
        >
          WE BUILD
          <br />
          <span className="text-[#00C853] text-green-glow">SHOPIFY</span>
          <br />
          STORES THAT
          <br />
          <span
            className="relative inline-block"
            style={{
              WebkitTextStroke: "1px rgba(240,235,225,0.3)",
              color: "transparent",
            }}
          >
            CONVERT
            <span className="absolute inset-0 text-cream" style={{ clipPath: "inset(0 60% 0 0)", transition: "none" }}>
              CONVERT
            </span>
          </span>
        </h1>

        {/* Subheadline & CTA row */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 animate-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-[#888] font-body text-base lg:text-lg max-w-lg leading-relaxed">
            Guillermo & Alfredo — two Shopify developers and project managers
            obsessed with CRO, clean code, and results-driven ecommerce.
            Based in Argentina, working worldwide.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              View Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
    </section>
  );
}
