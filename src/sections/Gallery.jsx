const photos = [
  { src: '/images/aerial-gulet-turquoise-cove.webp', alt: 'Aerial view of the Veli Bol boat anchored in a turquoise cove off Hvar' },
  { src: '/images/woman-jumping-off-boat-slide.webp', alt: 'Guest jumping off the boat slide into the Adriatic' },
  { src: '/images/underwater-diver-sunrays.webp', alt: 'Diver beneath sunrays in the clear water of a Hvar bay' },
  { src: '/images/zlatni-rat-beach-bol-from-boat.webp', alt: 'Zlatni Rat beach at Bol on Brač seen from the boat' },
  { src: '/images/rocky-cove-caves-swimmers.webp', alt: 'Swimmers by the rocky cove caves on the Adriatic coast' },
  { src: '/images/kids-peace-sign-boat-cabin.webp', alt: 'Kids having fun in the cabin of the Veli Bol excursion boat' },
  { src: '/images/aerial-boat-narrow-blue-cove.webp', alt: 'Aerial view of the boat moored in a narrow blue cove near Bol' },
  { src: '/images/snorkeler-selfie-underwater.webp', alt: 'Snorkeler taking a selfie in the clear Adriatic water' },
  { src: '/images/group-swimming-with-floatie.webp', alt: 'Guests swimming with a floatie at an Adriatic swim stop' },
  { src: '/images/gulet-anchored-pine-shore.webp', alt: 'The wooden motosailer anchored along a pine-lined Hvar shore' },
  { src: '/images/aerial-gulet-clear-shallows.webp', alt: 'Aerial view of the boat over the clear shallows of a hidden bay' },
  { src: '/images/underwater-freediver-woman.webp', alt: 'Freediver exploring the seabed on a snorkeling stop' },
  { src: '/images/woman-paddleboard-cheering.webp', alt: 'Guest cheering on one of the boat’s stand-up paddleboards' },
  { src: '/images/rocky-cove-caves-splash.webp', alt: 'Guests splashing into the sea by the cove caves near Bol' },
  { src: '/images/aerial-white-boat-cove.webp', alt: 'Aerial view of the excursion boat in a quiet Adriatic cove' },
  { src: '/images/gulet-deck-passengers-ships-wheel.webp', alt: 'Passengers on the main deck beside the ship’s wheel' },
]

function GallerySlot({ src, alt }) {
  if (src) {
    return (
      <div className="aspect-[3/4] sm:aspect-[4/3] rounded-2xl overflow-hidden">
        <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
    )
  }
  return (
    <div className="aspect-[3/4] sm:aspect-[4/3] rounded-2xl bg-navy-light flex items-center justify-center">
      <p className="font-sans text-xs text-white/40 text-center px-4">{alt}<br /><span className="text-[10px] text-white/30">Photo coming soon</span></p>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-navy py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="label mb-3">Gallery · Bol, Brač &amp; Hvar</p>
          <h2 className="section-heading-light mb-2">Postcards from the boat</h2>
          <p className="font-sans text-sm text-white/40">Real moments from real days out on the Adriatic, between Bol and the bays of Hvar.</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {photos.map(({ src, alt }) => (
            <GallerySlot key={alt} src={src} alt={alt} />
          ))}
        </div>
      </div>
    </section>
  )
}
