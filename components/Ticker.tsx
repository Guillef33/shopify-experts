export default function Ticker() {
  const items = [
    "Shopify Development",
    "CRO Strategy",
    "Theme Customization",
    "Shopify Plus",
    "A/B Testing",
    "Project Management",
    "UX Optimization",
    "Speed Optimization",
    "Custom Apps",
    "Headless Commerce",
    "Klaviyo Integration",
    "Analytics & Data",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[#1a1a1a] bg-[#0E0E0E] py-4 group">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0E0E0E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0E0E0E] to-transparent z-10 pointer-events-none" />

      <div className="ticker-track flex items-center gap-0 whitespace-nowrap group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-[#555] px-6 hover:text-[#00C853] transition-colors duration-200 cursor-default">
              {item}
            </span>
            <span className="text-[#00C853] text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
