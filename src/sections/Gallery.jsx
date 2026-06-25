const photos = [
  { src: null, alt: 'The Veli Bol boat at harbor' },
  { src: null, alt: 'Hidden bay aerial view' },
  { src: null, alt: 'Boat in a cove' },
  { src: null, alt: 'Open sea, calm water' },
  { src: null, alt: 'Crew and guests on deck' },
  { src: null, alt: 'Aerial of Brač coastline' },
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
