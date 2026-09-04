const feature = {
  src: '/images/history-hull-on-the-stocks.webp',
  alt: 'The wooden hull of the Veli Bol boat taking shape on the stocks in Bol, 1994',
}

const photos = [
  { src: '/images/history-keel-and-ribs.webp', alt: 'The bare keel and ribs at the start of the build in Bol' },
  { src: '/images/history-shipwrights-at-work.webp', alt: 'Two Dalmatian shipwrights working along the ribs of the wooden hull' },
  { src: '/images/history-framing-with-sea-view.webp', alt: 'Framing the deck with the town of Bol and the Adriatic behind' },
  { src: '/images/history-laying-the-deck.webp', alt: 'Laying the timber deck of the motosailer plank by plank' },
  { src: '/images/history-painting-the-hull.webp', alt: 'Painting the finished wooden hull by hand in the yard above Bol harbour' },
  { src: '/images/history-launched-in-bol.webp', alt: 'The finished Veli Bol boat afloat in Bol harbour on Brač' },
]

export default function History() {
  return (
    <section id="history" className="bg-cream py-20 sm:py-28 border-t border-soft">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="label mb-3">Our story · Handbuilt in Bol</p>
          <h2 className="section-heading mb-5">Built by hand, by the whole village.</h2>
          <p className="font-sans text-gray-500 text-sm leading-relaxed">
            She started as a keel and a stack of timber in a yard above the harbour. My father shaped
            every rib by eye, bending the wood plank by plank, and the neighbours came by to lend a
            hand, an opinion, and a coffee. No moulds, no factory — just the old Dalmatian way, a slow
            summer of sawdust and patience. When she finally slipped into the water off Bol, half the
            town was there to watch. She's carried our guests ever since.
          </p>
        </div>

        {/* Feature photo */}
        <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/2] mb-3 sm:mb-4">
          <img
            src={feature.src}
            alt={feature.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Build grid — keel to launch */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map(({ src, alt }) => (
            <div key={src} className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
