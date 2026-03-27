const stats = [
  { value: "50+", label: "Shopify Stores", desc: "Built and launched" },
  { value: "34%", label: "Avg. CR Lift", desc: "Across CRO projects" },
  { value: "7+", label: "Years", desc: "In ecommerce" },
  { value: "3x", label: "Revenue Growth", desc: "Average client result" },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-24 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-8 lg:p-10 ${
                i < stats.length - 1
                  ? "border-r border-[#1a1a1a]"
                  : ""
              } ${i >= 2 ? "border-t border-[#1a1a1a] lg:border-t-0" : ""}`}
            >
              <div className="stat-number text-6xl lg:text-7xl text-[#00C853] mb-2">
                {stat.value}
              </div>
              <div className="font-heading font-bold text-sm text-cream tracking-wide mb-1">
                {stat.label}
              </div>
              <div className="font-body text-xs text-[#555]">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
