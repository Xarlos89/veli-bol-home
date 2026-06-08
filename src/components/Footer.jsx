export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream/60 font-sans">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-cream text-lg mb-3">
            Veli Bol <em>Excursions</em>
          </div>
          <p className="text-xs leading-relaxed text-cream/50">
            Family-run from Bol, Brač since 1994.<br />
            A handful of guests, a different hidden bay every day.
          </p>
        </div>

        <div>
          <div className="label-light text-amber text-[10px] mb-3">Find us</div>
          <address className="not-italic text-xs leading-relaxed text-cream/60">
            Ul. Bolskih Pomoraca<br />
            21420 Bol, Brač<br />
            Croatia
          </address>
        </div>

        <div>
          <div className="label-light text-amber text-[10px] mb-3">Contact</div>
          <ul className="text-xs space-y-2 text-cream/60">
            <li>
              <a href="tel:+385957420929" className="hover:text-cream transition-colors">
                +385 95 742 09 29
              </a>
            </li>
            <li>
              <a href="mailto:milankarmelic@gmail.com" className="hover:text-cream transition-colors">
                milankarmelic@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-5xl mx-auto px-5 sm:px-8 py-5">
        <p className="text-[11px] text-cream/30">
          © {new Date().getFullYear()} Veli Bol Excursions. Bol, Croatia.
        </p>
      </div>
    </footer>
  )
}
