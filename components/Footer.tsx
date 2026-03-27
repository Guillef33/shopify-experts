export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0A0A0A]">
      {/* Top ticker - reverse */}
      <div className="relative overflow-hidden border-b border-[#1a1a1a] py-3">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
        <div className="ticker-track-reverse flex items-center gap-0 whitespace-nowrap">
          {[...Array(16)].map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="font-heading font-bold text-[10px] tracking-[0.2em] uppercase text-[#333] px-6">
                {i % 4 === 0
                  ? "Shopify Experts"
                  : i % 4 === 1
                  ? "CRO Specialists"
                  : i % 4 === 2
                  ? "Based in Argentina"
                  : "Working Worldwide"}
              </span>
              <span className="text-[#00C853]/40 text-[10px]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 bg-[#00C853] rounded-sm rotate-45" />
                <div className="absolute inset-[3px] bg-[#0A0A0A] rounded-sm rotate-45" />
              </div>
              <span className="font-heading font-bold text-sm tracking-[0.15em] uppercase text-cream">
                G&A <span className="text-[#00C853]">Studio</span>
              </span>
            </div>
            <p className="font-body text-sm text-[#555] leading-relaxed max-w-xs mb-6">
              Guillermo & Alfredo. Shopify developers and CRO specialists
              building high-converting ecommerce experiences from Argentina to
              the world.
            </p>
            <div className="badge w-fit">
              <span className="dot" />
              Available for projects
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-[#444] mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[#555] hover:text-[#00C853] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-[#444] mb-5">
              Our Sites
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                {
                  label: "Guillermo's Portfolio",
                  href: "https://guillermoflores.com.ar/",
                },
                {
                  label: "Shopify Work",
                  href: "https://guillermoflores.com.ar/shopify/",
                },
                {
                  label: "CloudWorks Global",
                  href: "https://cloudworksglobal.tech/",
                },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-[#555] hover:text-[#00C853] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <path
                        d="M1 9L9 1M9 1H3M9 1V7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-[#1a1a1a]">
          <p className="font-body text-xs text-[#444]">
            © {year} G&A Studio — Guillermo Flores & Alfredo. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-body text-xs text-[#333]">Built on</span>
            <span className="font-heading font-bold text-xs text-[#00C853] tracking-wide">
              Shopify ✦ Next.js ✦ Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
