const testimonials = [
  {
    quote:
      "They didn't just build a store — they completely rethought our checkout flow and the impact was immediate. CR went up 38% in the first month.",
    author: "Sarah M.",
    role: "Founder, Fashion Brand",
    stars: 5,
  },
  {
    quote:
      "The migration from WooCommerce was flawless. 12,000 products, zero downtime, and our SEO actually improved. Incredibly professional.",
    author: "James T.",
    role: "CEO, Home & Living",
    stars: 5,
  },
  {
    quote:
      "Finally developers who understand CRO. They think like marketers and code like engineers. A rare combo that made a real difference.",
    author: "Lucia P.",
    role: "Head of Ecommerce, Beauty Co.",
    stars: 5,
  },
];

const techStack = [
  "Shopify Plus",
  "Liquid",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Klaviyo",
  "Recharge",
  "Yotpo",
  "Gorgias",
  "GA4",
  "Hotjar",
  "Metafields",
  "GraphQL",
];

export default function SocialProof() {
  return (
    <section className="py-24 lg:py-32 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="badge mb-8">
            <span className="dot" />
            Client Feedback
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#111] border border-[#1a1a1a] rounded-xl p-7 hover:border-[#00C853]/20 transition-colors duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <span key={s} className="text-[#00C853] text-sm">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-sm text-[#888] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-[#1a1a1a]">
                  <div className="w-8 h-8 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center font-display text-sm text-[#00C853]">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xs text-cream">
                      {t.author}
                    </div>
                    <div className="font-body text-[10px] text-[#555]">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <div className="badge mb-8">
            <span className="dot" />
            Tech Stack
          </div>
          <h3 className="font-display text-3xl lg:text-5xl text-cream mb-8">
            TOOLS WE <span className="text-[#00C853]">MASTER</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-heading font-bold text-xs uppercase tracking-[0.12em] text-[#666] bg-[#111] border border-[#1a1a1a] hover:border-[#00C853]/30 hover:text-[#00C853] transition-all duration-200 px-4 py-2.5 rounded-lg cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
