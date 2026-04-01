import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

// 1. Define TypeScript Interfaces
interface Stat {
    value: string;
    label: string;
}

interface SolutionItem {
    header: string;
    body: string;
}

interface CaseStudyProps {
    title: string;
    subtitle: string;
    problem: string;
    solution: SolutionItem[];
    techStack: string[];
    stats: Stat[];
    postOperation?: string; // Added to capture your full text
}

// 2. Reusable Case Study Component
export const CaseStudySection: React.FC<CaseStudyProps> = ({
    title,
    subtitle,
    problem,
    solution,
    techStack,
    stats,
    postOperation
}) => {
    return (
        <section className="bg-black text-white py-20 px-6 border-b border-zinc-800">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">{title}</h2>
                        <p className="text-xl text-zinc-400 font-light">{subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6 md:mt-0 max-w-sm justify-start md:justify-end">
                        {techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 border border-zinc-700 rounded text-xs uppercase tracking-widest text-zinc-500">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Left Column: Challenge, Engineering, Post-Op */}
                    <div className="md:col-span-8 space-y-10">
                        <div>
                            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-4">01 — The Challenge</h3>
                            <p className="text-lg text-zinc-300 leading-relaxed">{problem}</p>
                        </div>

                        <div>
                            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-4">02 — The Engineering</h3>
                            <div className="space-y-6">
                                {solution.map((item, i) => (
                                    <div key={i} className="border-l border-zinc-800 pl-6">
                                        <h4 className="font-bold text-xl mb-2">{item.header}</h4>
                                        <p className="text-zinc-400">{item.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {postOperation && (
                            <div>
                                <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-4">03 — Post-Operation</h3>
                                <p className="text-lg text-zinc-300 leading-relaxed">{postOperation}</p>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Metrics */}
                    <div className="md:col-span-4 space-y-8">
                        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 sticky top-8">
                            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-6">Metrics & Impact</h3>
                            {stats.map((stat, i) => (
                                <div key={i} className={i !== 0 ? "mt-8 pt-8 border-t border-zinc-800" : ""}>
                                    <p className="text-5xl font-bold text-white tracking-tighter">{stat.value}</p>
                                    <p className="text-zinc-500 text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// 3. Main Page / Deep Dive Container
export default function WorkDeepDive() {
    return (
        <div>
            <Navbar />
            <CaseStudySection
                title="310 Nutrition (USA)"
                subtitle="Enterprise Shopify Plus Architecture: Scaling a $40M+ Health & Wellness Giant."
                problem="With annual revenue exceeding $40M, 310 Nutrition faced severe operational bottlenecks due to 'app-bloat' and legacy liquid code. The reliance on GemPages created heavy, unoptimized DOM structures that degraded mobile Core Web Vitals and hampered conversion rates."
                techStack={['React.js', 'Vite.js', 'Tailwind CSS', 'NetSuite ERP', 'Rebuy API']}
                stats={[
                    { value: '-40%', label: 'Page Load Times' },
                    { value: '+22%', label: 'AOV Increase (MoM)' },
                    { value: '85+', label: 'Lighthouse Score' }
                ]}
                solution={[
                    { header: "Custom Framework Transition", body: "Total replacement of GemPages by building high-performance landing pages and PDPs from scratch using React.js, Vite.js, and Tailwind CSS." },
                    { header: "Rebuy Engine Deep-Integration", body: "Architected a sophisticated Rebuy Smart Cart and personalized bundle builder, natively integrated into the theme's logic to eliminate third-party script latency." },
                    { header: "NetSuite ERP Synchronization", body: "Managed the mission-critical data flow between Shopify Plus and NetSuite, ensuring 100% data integrity for high-volume daily transactions and inventory accuracy." }
                ]}
                postOperation="The ecosystem now operates on a modular architecture capable of handling massive promotional traffic peaks without performance degradation, backed by automated QA protocols for all new deployments."
            />

            <CaseStudySection
                title="Somos Reyes (LATAM)"
                subtitle="Omnichannel Digital Transformation: Automating a 15,000+ SKU Global Marketplace."
                problem="Managing a complex catalog of 15,000+ SKUs across diverse marketplaces and physical stores created a massive data silo. The brand suffered from manual inventory lags and a lack of synchronization between Shopify, Odoo ERP, and global sales channels."
                techStack={['Python', 'Odoo ERP', 'Klevu API', 'Klaviyo', 'BoostCommerce']}
                stats={[
                    { value: '-40%', label: 'Manual Operational Workload' },
                    { value: '15,000+', label: 'SKUs Synchronized' },
                    { value: '50+', label: 'Countries Supported' }
                ]}
                solution={[
                    { header: "Python Backend Orchestration", body: "Developed proprietary Python scripts to automate complex inventory synchronization, dynamic collection sorting, and custom PDP backend logic between Shopify and Odoo ERP." },
                    { header: "Search Intelligence", body: "Integrated Klevu Smart Search and optimized BoostCommerce filters to provide millisecond search results across the 15K SKU catalog." },
                    { header: "UI/UX Modernization", body: "Performed a full-scale migration to a Booster Theme, restructuring the entire layout for 100% responsive performance across all device categories." },
                    { header: "Omnichannel Automation", body: "Orchestrated advanced Klaviyo automation flows and marketplace API integrations to centralize global marketing and sales data." }
                ]}
                postOperation="The new infrastructure enables rapid regional expansion, allowing for real-time stock accuracy across all digital and physical touchpoints without increasing operational headcount."
            />
            <Footer />
        </div>

    );
}