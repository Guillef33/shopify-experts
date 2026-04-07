export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Green glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse, #00C853 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative">
        <div className="badge mb-8 mx-auto w-fit">
          <span className="dot" />
          Let's Build Something
        </div>

        <h2 className="font-display text-[12vw] lg:text-[8rem] xl:text-[9rem] leading-none text-cream mb-6">
          START A
          <br />
          <span className="text-[#00C853] text-green-glow">PROJECT</span>
        </h2>

        <p className="font-body text-[#888] text-base lg:text-lg max-w-lg mx-auto leading-relaxed mb-12">
          Ready to grow your Shopify store? We're available for new projects.
          Drop us a message and we'll get back to you within 24 hours.
        </p>

        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          <a
            href="mailto:guillef33@gmail.com"
            className="group bg-[#111] border border-[#1a1a1a] hover:border-[#00C853]/30 rounded-xl p-6 text-left transition-all duration-300 hover:bg-[#111]"
          >
            <div className="text-2xl mb-3">✉️</div>
            <div className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-[#555] mb-1">
              Guillermo
            </div>
            <div className="font-body text-sm text-[#888] group-hover:text-[#00C853] transition-colors duration-200">
              guillermoflores.com.ar
            </div>
          </a>

          <a
            href="https://cloudworksglobal.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#111] border border-[#1a1a1a] hover:border-[#00C853]/30 rounded-xl p-6 text-left transition-all duration-300"
          >
            <div className="text-2xl mb-3">🌐</div>
            <div className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-[#555] mb-1">
              Alfredo
            </div>
            <div className="font-body text-sm text-[#888] group-hover:text-[#00C853] transition-colors duration-200">
              cloudworksglobal.tech
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:guillef33@gmail.com" className="btn-primary text-sm">
            Send Us a Message
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://guillermoflores.com.ar/shopify/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            View Shopify Work
          </a>
        </div>
      </div>
    </section>
  );
}
