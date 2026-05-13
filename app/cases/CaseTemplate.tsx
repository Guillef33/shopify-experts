import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

interface CaseTemplateProps {
  data: {
    title: string;
    subtitle: string;
    techStack: string[];
    stats: { value: string; label: string }[];
    problem: string;
    solutions: { header: string; body: string }[];
    postOperation: string;
  }
}

export default function CaseTemplate({ data }: CaseTemplateProps) {
  return (
    <div className="bg-[#060606] min-h-screen text-[#f0ebe1]">
      <Navbar />
      <main className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-[10rem] font-bold text-white uppercase italic leading-[0.8] tracking-tighter mb-12">
          {data.title.split(' ')} <br />
          <span className="text-[#00c853]">{data.title.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-2xl text-zinc-400 font-light mb-16 max-w-4xl italic leading-relaxed">{data.subtitle}</p>
        
        <div className="grid lg:grid-cols-12 gap-16 border-t border-zinc-900 pt-20">
          <div className="lg:col-span-8 space-y-20">
            <section>
              <h3 className="text-zinc-500 text-xs uppercase tracking-[0.5em] mb-8 font-mono italic">// 01_THE_CHALLENGE</h3>
              <p className="text-xl text-zinc-300 leading-relaxed font-light">{data.problem}</p>
            </section>
            <section>
              <h3 className="text-zinc-500 text-xs uppercase tracking-[0.5em] mb-8 font-mono italic">// 02_ENGINEERING_EXECUTION</h3>
              <div className="space-y-12">
                {data.solutions.map((s, i) => (
                  <div key={i} className="group border-l border-zinc-800 pl-10 py-2 hover:border-[#00c853] transition-colors">
                    <h4 className="text-2xl font-bold text-white uppercase mb-4 tracking-tight">{s.header}</h4>
                    <p className="text-zinc-500 leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8 bg-zinc-950 p-10 border border-zinc-900">
              <p className="text-[10px] text-[#00c853] uppercase font-mono tracking-widest">// SYSTEM_METRICS</p>
              {data.stats.map((s, i) => (
                <div key={i} className={i !== 0 ? "pt-8 border-t border-zinc-900" : ""}>
                  <p className="text-6xl font-bold tracking-tighter">{s.value}</p>
                  <p className="text-zinc-600 text-[10px] uppercase font-mono mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}