export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden">
      {/* Background */}
      <img
        src="/images/boat.jpg"
        alt="Veli Bol boat in a hidden Adriatic bay"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/20" />

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
