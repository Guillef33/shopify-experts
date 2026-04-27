import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: "⚡",
    number: "01",
    title: "Shopify Development",
    description:
      "Custom theme development, Liquid programming, and storefront builds from scratch. We write clean, performant code that scales.",
    tags: ["Liquid", "Theme Dev", "Custom Apps", "Shopify Plus"],
  },
  {
    icon: "📈",
    number: "02",
    title: "Conversion Rate Optimization",
    description:
      "Data-driven CRO strategies to increase revenue without increasing ad spend. From A/B tests to full funnel audits.",
    tags: ["A/B Testing", "Heatmaps", "UX Audits", "Analytics"],
  },
  {
    icon: "🔧",
    number: "03",
    title: "Store Migrations",
    description:
      "Seamless migrations to Shopify from WooCommerce, Magento, BigCommerce and custom platforms. Zero data loss, zero downtime.",
    tags: ["WooCommerce", "Magento", "Data Migration", "SEO Safe"],
  },
  {
    icon: "🧩",
    number: "04",
    title: "App Integrations",
    description:
      "Klaviyo, Recharge, Yotpo, Gorgias — we integrate and configure the entire Shopify app ecosystem for your specific needs.",
    tags: ["Klaviyo", "Recharge", "Metafields", "APIs"],
  },
  {
    icon: "🚀",
    number: "05",
    title: "Project Management",
    description:
      "Full PM coverage for your ecommerce initiatives. We bridge the gap between strategy and execution with structured sprints.",
    tags: ["Agile", "Sprints", "Roadmaps", "Stakeholder Comms"],
  },
  {
    icon: "📊",
    number: "06",
    title: "Analytics & Tracking",
    description:
      "GA4, Hotjar, and custom dashboards that give you real insights into where revenue is being lost and how to fix it.",
    tags: ["GA4", "Hotjar", "Looker Studio", "Pixel Setup"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER UNIFICADO */}
        <SectionHeader 
          badge="What We Do"
          title1="OUR"
          title2="SERVICES"
          description="End-to-end Shopify expertise — from first commit to conversion optimization. We don't just build stores; we build revenue machines."
        />

        {/* Grid - Mantenemos tu estructura de tarjetas que está perfecta */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card bg-[#0A0A0A] p-8 border border-transparent cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-3xl">{service.icon}</div>
                <span className="font-display text-4xl text-[#1a1a1a] select-none">
                  {service.number}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-cream mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="font-body text-sm text-[#666] leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-heading font-bold uppercase tracking-[0.1em] text-[#555] bg-[#161616] px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}