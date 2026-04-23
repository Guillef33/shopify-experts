import SectionHeader from "./SectionHeader";

const projects = [
  {
    category: "Shopify Plus",
    title: "Fashion Brand Relaunch",
    description: "Full custom theme from scratch with a 41% conversion lift post-launch.",
    metrics: "+41% CR",
    color: "#00C853",
    size: "lg",
    tags: ["Dev", "CRO", "UX"],
  },
  {
    category: "Migration",
    title: "WooCommerce → Shopify",
    description: "Zero-downtime migration of a 15,000 SKU store. SEO rankings maintained.",
    metrics: "15K SKUs",
    color: "#888",
    size: "sm",
    tags: ["Migration", "SEO"],
  },
  {
    category: "CRO",
    title: "Checkout Funnel Overhaul",
    description: "A/B testing program that added $280K ARR in 6 months.",
    metrics: "+$280K ARR",
    color: "#00C853",
    size: "sm",
    tags: ["A/B Test", "Analytics"],
  },
  {
    category: "Custom App",
    title: "B2B Wholesale Portal",
    description: "Custom Shopify app for wholesale pricing, customer accounts, and order management.",
    metrics: "100% Custom",
    color: "#888",
    size: "lg",
    tags: ["Dev", "Apps", "B2B"],
  },
  {
    category: "Shopify Plus",
    title: "Subscription Commerce",
    description: "Recharge integration with custom subscription logic and loyalty system.",
    metrics: "35% LTV ↑",
    color: "#00C853",
    size: "sm",
    tags: ["Recharge", "Klaviyo"],
  },
  {
    category: "CRO",
    title: "PDP & Cart Optimization",
    description: "Full product page and cart redesign based on heatmap and session recording data.",
    metrics: "+28% AOV",
    color: "#888",
    size: "sm",
    tags: ["CRO", "UX", "Data"],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER UNIFICADO */}
        <SectionHeader 
          badge="Portfolio"
          title1="SELECTED"
          title2="WORK"
          description="A selection of projects we're proud of. Real engineering results for real businesses."
        />

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card group relative rounded-xl overflow-hidden bg-[#111] border border-[#1a1a1a] cursor-pointer ${
                project.size === "lg" ? "md:col-span-1 lg:col-span-1" : ""
              }`}
              style={{
                minHeight: project.size === "lg" ? "280px" : "220px",
              }}
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse 80% 80% at 50% 100%, ${project.color}10 0%, transparent 70%)`,
                }}
              />

              <div className="relative p-7 flex flex-col h-full">
                <div className="flex items-center justify-between mb-auto">
                  <span
                    className="text-[10px] font-heading font-bold uppercase tracking-[0.15em]"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="font-display text-2xl font-bold"
                    style={{ color: project.color }}
                  >
                    {project.metrics}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-heading font-bold text-xl text-cream mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-[#666] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-heading font-bold uppercase tracking-[0.1em] text-[#444] bg-[#161616] border border-[#222] px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#555] font-body text-sm mb-6">
            Looking for similar results? Let's discuss your roadmap.
          </p>
          <a href="/cases" className="btn-outline">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}