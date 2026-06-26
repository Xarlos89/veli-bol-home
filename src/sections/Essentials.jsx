const infoCards = [
  { label: 'Duration', value: '6 hours', sub: '1h sail · 5h swim' },
  { label: 'Schedule', value: '10:00 – approx. 16:00' },
  { label: 'Destination', value: 'Hidden bays around Hvar' },
  { label: 'Group size', value: 'Max 40 · avg. 10 guests' },
]

const included = [
  'Two different swimming stops per trip',
  'Every day a different bay',
  'Family and couples oriented',
  'No loud music, no animation, no stress',
  'Snorkeling equipment on board',
  'Friendly local crew, fluent in English',
]

export default function Essentials() {
  return (
    <section id="essentials" className="bg-cream py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14">

          {/* Left */}
          <div>
            <p className="label mb-3">Tour info</p>
            <h2 className="section-heading mb-8">The essentials</h2>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {infoCards.map(({ label, value, sub }) => (
                <div key={label} className="info-card">
                  <p className="info-card-label">{label}</p>
                  <p className="info-card-value">{value}</p>
                  {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md">
              <p className="font-sans font-semibold text-ink text-sm mb-4">What's included</p>
              <ul className="space-y-2.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-amber shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {/* Pricing card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="label mb-3">Pricing</p>
              <h3 className="font-serif font-bold text-ink text-2xl mb-5 leading-tight">
                Simple &amp;<br />transparent
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="text-center">
                  <p className="font-sans text-[11px] text-gray-400 font-medium mb-1">Adult</p>
                  <p className="font-sans text-[10px] text-gray-300 mb-2">10+</p>
                  <p className="font-serif font-bold text-ink text-2xl">€65</p>
                  <p className="font-sans text-[10px] text-gray-400 mt-1">per person</p>
                </div>
                <div className="text-center border-x border-soft px-2">
                  <p className="font-sans text-[11px] text-gray-400 font-medium mb-1">Child</p>
                  <p className="font-sans text-[10px] text-gray-300 mb-2">4–10</p>
                  <p className="font-serif font-bold text-ink text-xl leading-tight">Half<br />price</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-[11px] text-gray-400 font-medium mb-1">Child</p>
                  <p className="font-sans text-[10px] text-gray-300 mb-2">0–4</p>
                  <p className="font-serif font-bold text-ink text-2xl">Free</p>
                </div>
              </div>

              <p className="font-sans text-xs text-gray-400 italic mb-5">
                Family discount available — just ask.
              </p>

              <a href="tel:+385957420929" className="btn-dark w-full text-center tracking-widest uppercase text-xs">
                Book your seat →
              </a>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Bol harbor"
                src="https://maps.google.com/maps?q=Ul.+Bolskih+Pomoraca,+Bol,+Brac,+Croatia&z=16&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
