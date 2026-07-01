const photos = [
  { src: '/images/aerial-gulet-turquoise-cove.jpg', alt: 'Aerial view of the boat in a turquoise cove' },
  { src: '/images/woman-jumping-off-boat-slide.jpg', alt: 'Guest jumping off the boat slide' },
  { src: '/images/underwater-diver-sunrays.jpg', alt: 'Diver beneath sunrays in clear water' },
  { src: '/images/zlatni-rat-beach-bol-from-boat.jpg', alt: 'Zlatni Rat beach from the water' },
  { src: '/images/couple-embracing-sunset-boat.jpg', alt: 'Couple embracing at sunset on the boat' },
  { src: '/images/rocky-cove-caves-swimmers.jpg', alt: 'Swimmers by the rocky cove caves' },
  { src: '/images/kids-peace-sign-boat-cabin.jpg', alt: 'Kids having fun in the boat cabin' },
  { src: '/images/aerial-boat-narrow-blue-cove.jpg', alt: 'Aerial view of the boat in a narrow blue cove' },
  { src: '/images/snorkeler-selfie-underwater.jpg', alt: 'Snorkeler taking a selfie underwater' },
  { src: '/images/group-swimming-with-floatie.jpg', alt: 'Group swimming with a floatie' },
  { src: '/images/gulet-anchored-pine-shore.jpg', alt: 'Boat anchored along a pine-lined shore' },
  { src: '/images/legs-dangling-off-boat-sunset.jpg', alt: 'Legs dangling off the boat at sunset' },
  { src: '/images/aerial-gulet-clear-shallows.jpg', alt: 'Aerial view of the boat over clear shallows' },
  { src: '/images/underwater-freediver-woman.jpg', alt: 'Freediver exploring underwater' },
  { src: '/images/woman-paddleboard-cheering.jpg', alt: 'Guest cheering on a paddleboard' },
  { src: '/images/rocky-cove-caves-splash.jpg', alt: 'Splashing into the sea by the cove caves' },
  { src: '/images/aerial-white-boat-cove.jpg', alt: 'Aerial view of a white boat in a cove' },
  { src: '/images/gulet-deck-passengers-ships-wheel.jpg', alt: 'Passengers on deck by the ship’s wheel' },
]

function GallerySlot({ src, alt }) {
  if (src) {
    return (
      <div className="aspect-[3/4] sm:aspect-[4/3] rounded-2xl overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
    )
  }
  return (
    <div className="aspect-[3/4] sm:aspect-[4/3] rounded-2xl bg-cream-dark flex items-center justify-center">
      <p className="font-sans text-xs text-gray-400 text-center px-4">{alt}<br /><span className="text-[10px] text-gray-300">Photo coming soon</span></p>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 sm:py-28 border-t border-soft">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="label mb-3">Gallery</p>
          <h2 className="section-heading mb-2">Postcards from the boat</h2>
          <p className="font-sans text-sm text-gray-400">Real moments from real days out on the Adriatic.</p>
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
