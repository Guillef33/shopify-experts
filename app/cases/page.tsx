import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// COMPONENTE DE ARTE VECTORIAL (Reemplaza la imagen física)
const CaseVectorArt = ({ title, code }: { title: string, code: string }) => (
  <div className="w-full aspect-video bg-zinc-950 border border-zinc-900 rounded-sm flex flex-col items-center justify-center relative overflow-hidden group transition-all duration-700 hover:border-[#00c853]/30">
    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
    
    {/* EL VECTOR TIPOGRÁFICO CENTRAL */}
    <div className="relative z-10 flex flex-col items-center pointer-events-none">
      <h3 className="text-4xl md:text-5xl font-[var(--font-bebas)] text-zinc-800 italic uppercase leading-none tracking-tighter transition-all duration-700 group-hover:text-white group-hover:scale-105">
        {title}
      </h3>
      <div className="w-full max-w-[100px] h-[1px] bg-zinc-900 mt-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00c853] -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
      </div>
    </div>

    {/* Metadata en las esquinas */}
    <span className="absolute top-4 right-6 font-mono text-[9px] text-zinc-600 uppercase tracking-widest">{code}</span>
    <div className="absolute bottom-4 left-6 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-[#00c853] animate-pulse"></div>
      <span className="font-mono text-[8px] text-zinc-700 uppercase tracking-tighter">System_Active_v4.2</span>
    </div>
  </div>
);

const PostEntry = ({ slug, title, category, excerpt, date, code }: any) => (
  <article className="group py-24 border-b border-zinc-900 last:border-0">
    <div className="grid md:grid-cols-12 gap-16 items-center">
      <div className="md:col-span-5 lg:col-span-4">
        <Link href={`/cases/${slug}`}>
          <CaseVectorArt title={title} code={code} />
        </Link>
      </div>
      <div className="md:col-span-7 lg:col-span-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="px-2 py-0.5 border border-[#00c853]/30 text-[#00c853] font-mono text-[9px] uppercase tracking-widest font-bold">{category}</div>
          <span className="text-zinc-700 text-[10px] font-mono italic">/ {date}</span>
        </div>
        <Link href={`/cases/${slug}`}>
          <h2 className="text-5xl lg:text-7xl font-[var(--font-syne)] font-extrabold text-white mb-6 uppercase italic group-hover:text-[#00c853] transition-colors leading-[0.9] tracking-tighter">
            {title}
          </h2>
        </Link>
        <p className="text-zinc-500 text-lg font-light leading-relaxed mb-10 max-w-2xl">{excerpt}</p>
        <Link href={`/cases/${slug}`} className="group/link inline-flex items-center gap-4">
          <span className="text-white font-mono text-[11px] uppercase tracking-[0.4em] font-black group-hover/link:text-[#00c853] transition-colors">
            Continue Reading
          </span>
          <div className="w-10 h-[1px] bg-zinc-800 group-hover/link:w-16 group-hover/link:bg-[#00c853] transition-all duration-500"></div>
          <span className="text-zinc-500 group-hover/link:text-[#00c853] transition-all">→</span>
        </Link>
      </div>
    </div>
  </article>
);

export default function EngineeringHub() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto pt-48 px-6 pb-40">
        <header className="mb-40 border-b border-zinc-900 pb-20">
          <h1 className="text-8xl md:text-[14rem] font-[var(--font-bebas)] text-white uppercase italic leading-[0.75] tracking-tighter">
            The <span className="text-[#00c853]">Lab</span>_
          </h1>
          <p className="text-zinc-500 font-mono text-[10px] tracking-[0.5em] uppercase mt-10">// LOGS DE DESPLIEGUE Y ARQUITECTURAS DE ALTO RENDIMIENTO</p>
        </header>

        <section>
          <PostEntry 
            slug="310-nutrition"
            title="310 Nutrition"
            category="Enterprise Shopify Plus"
            code="DEPLOY_0x310"
            date="MAY 2026"
            excerpt="Reemplazo total de GemPages por un framework headless en React/Vite. Optimizamos el checkout de un ecosistema de $40M para neutralizar la latencia móvil[cite: 208, 209]."
          />
          <PostEntry 
            slug="somos-reyes"
            title="Somos Reyes"
            category="Backend Orchestration"
            code="SYNC_0xREYES"
            date="APR 2026"
            excerpt="Arquitectura de middleware en Python para sincronizar 15,000 SKUs entre Odoo ERP y Shopify Admin API con latencia de milisegundos[cite: 189, 321]."
          />
          <PostEntry 
            slug="engineering"
            title="System Audit"
            category="Infrastructure Diagnostics"
            code="AUDIT_0xEMER"
            date="MAR 2026"
            excerpt="Auditoría masiva de flujos de datos CRM/HIS para un ecosistema de +5,000 empleados. Centralización de registros médicos con seguridad HIPAA[cite: 183, 184]."
          />
          <PostEntry 
            slug="global-edge-migration"
            title="Global Edge Migration"
            category="Hydrogen / Oxygen"
            code="NET_0xVIVA"
            date="FEB 2026"
            excerpt="Migración a infraestructura de Edge Computing para lograr TTFB sub-segundo en 144 países utilizando Remix y Oxygen workers[cite: 194, 216]."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}