const team = [
  {
    name: "Guillermo Flores",
    role: "Shopify Developer & CRO Strategist",
    bio: "Full-stack Shopify developer with deep expertise in CRO and conversion-focused design. I bridge technical implementation with data strategy to build stores that perform.",
    skills: [
      "Shopify Liquid",
      "React / Next.js",
      "CRO Strategy",
      "A/B Testing",
      "GA4 & Analytics",
      "UX Research",
    ],
    links: [
      { label: "guillermoflores.com.ar", href: "https://guillermoflores.com.ar/" },
      { label: "Shopify Work", href: "https://guillermoflores.com.ar/shopify/" },
    ],
    initials: "GF",
    accent: "#00C853",
  },
  {
    name: "Alfredo",
    role: "Shopify Developer & Project Manager",
    bio: "Expert Shopify developer and project manager focused on delivering scalable ecommerce solutions. I run CloudWorks Global — specialized in complex Shopify builds and long-term store management.",
    skills: [
      "Shopify Plus",
      "Project Management",
      "Store Migrations",
      "App Integrations",
      "Custom Dev",
      "Team Leadership",
    ],
    links: [
      { label: "cloudworksglobal.tech", href: "https://cloudworksglobal.tech/" },
    ],
    initials: "AL",
    accent: "#00C853",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="badge mb-5">
            <span className="dot" />
            The Team
          </div>
          <h2 className="font-display text-5xl lg:text-7xl text-cream leading-none">
            MEET
            <br />
            <span className="text-[#00C853]">G & A</span>
          </h2>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative bg-[#111] border border-[#1a1a1a] rounded-2xl p-8 lg:p-10 overflow-hidden hover:border-[#00C853]/20 transition-colors duration-300"
            >
              {/* Background effect */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at 100% 0%, ${member.accent}08 0%, transparent 70%)`,
                }}
              />

              <div className="relative">
                {/* Avatar + name */}
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-display text-2xl flex-shrink-0"
                    style={{
                      background: `${member.accent}15`,
                      border: `1px solid ${member.accent}30`,
                      color: member.accent,
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-cream mb-1">
                      {member.name}
                    </h3>
                    <p
                      className="font-heading text-xs uppercase tracking-[0.1em]"
                      style={{ color: member.accent }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="font-body text-sm text-[#777] leading-relaxed mb-7">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-heading font-bold uppercase tracking-[0.1em] text-[#555] bg-[#161616] border border-[#222] px-2.5 py-1 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 pt-6 border-t border-[#1a1a1a]">
                  {member.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-heading font-bold text-[#555] hover:text-[#00C853] transition-colors duration-200 group/link"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="opacity-40 group-hover/link:opacity-100 transition-opacity"
                      >
                        <path
                          d="M1 7h12M7 1l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combined statement */}
        <div className="mt-8 bg-[#0E0E0E] border border-[#1a1a1a] rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="flex -space-x-3">
              {["GF", "AL"].map((initials, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-[#00C853]/15 border-2 border-[#0E0E0E] flex items-center justify-center font-display text-base text-[#00C853]"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="flex-1">
              <p className="font-body text-[#888] text-sm lg:text-base leading-relaxed">
                Together, we cover the full Shopify stack —{" "}
                <span className="text-cream">technical development, project delivery,</span> and{" "}
                <span className="text-cream">conversion strategy.</span> We work as a tight duo,
                so you always have senior-level attention on your project, never handed off to juniors.
              </p>
            </div>
            <a href="#contact" className="btn-primary flex-shrink-0">
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
