export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden">
      {/* Background — drone photo placeholder (real photo coming soon) */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-800 via-cyan-700 to-teal-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-px">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 font-sans text-[9px] tracking-[0.2em] uppercase text-white/20 whitespace-nowrap">📷 Drone photo coming soon</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full">
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/60 mb-5">
          Bol · Brač · Croatia
        </p>

        <h1 className="font-serif font-bold text-white leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
          Veli Bol<br />
          <em>Excursions</em>
        </h1>

        <p className="font-serif italic text-white/85 text-lg sm:text-xl max-w-md leading-snug mb-4">
          A quiet half-day on the Adriatic — hidden bays, slow lunch, nothing rushed.
        </p>

        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/50 mb-8">
          You decide where you want to swim
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a href="tel:+385957420929" className="btn-outline-light text-sm tracking-widest uppercase">
            Book your seat →
          </a>
          <a
            href="https://wa.me/385957420929"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 font-sans text-sm hover:text-white transition-colors"
          >
            <span className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center text-[10px]">◎</span>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">Scroll</p>
      </div>
    </section>
  )
}
