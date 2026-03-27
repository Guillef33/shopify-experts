const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a deep-dive into your store, goals, and current challenges. No fluff — straight to the strategy.",
    duration: "30–60 min",
  },
  {
    number: "02",
    title: "Audit & Roadmap",
    description:
      "Full CRO audit + technical review. We deliver a prioritized roadmap with expected impact for each initiative.",
    duration: "3–5 days",
  },
  {
    number: "03",
    title: "Sprint Execution",
    description:
      "Structured two-week sprints with clear deliverables, daily updates, and Loom walkthroughs on completion.",
    duration: "Ongoing",
  },
  {
    number: "04",
    title: "Measure & Iterate",
    description:
      "We track every metric that matters. Results are reviewed bi-weekly and the roadmap adapts accordingly.",
    duration: "Continuous",
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="badge mb-5">
              <span className="dot" />
              How We Work
            </div>
            <h2 className="font-display text-5xl lg:text-7xl text-cream leading-none">
              THE
              <br />
              <span className="text-[#00C853]">PROCESS</span>
            </h2>
          </div>
          <p className="text-[#888] font-body max-w-xs leading-relaxed text-sm">
            Transparent, structured, and results-focused. You'll always know where your project stands.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[31px] lg:left-1/2 top-0 bottom-0 w-px bg-[#1a1a1a] hidden md:block" />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-6 items-start ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number bubble */}
                <div className="relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-[#00C853]/30 flex items-center justify-center font-display text-2xl text-[#00C853]">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`bg-[#111] border border-[#1a1a1a] rounded-xl p-6 flex-1 hover:border-[#00C853]/20 transition-colors duration-300 ${
                    i % 2 === 0
                      ? "md:mr-[calc(50%+32px)] md:text-right"
                      : "md:ml-[calc(50%+32px)]"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      i % 2 === 0 ? "md:flex-row-reverse md:justify-start" : ""
                    }`}
                  >
                    <h3 className="font-heading font-bold text-lg text-cream">
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-[0.1em] text-[#00C853] bg-[#00C853]/10 px-2 py-1 rounded flex-shrink-0">
                      {step.duration}
                    </span>
                  </div>
                  <p className="font-body text-sm text-[#666] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
