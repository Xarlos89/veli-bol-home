const reviews = [
  {
    name: 'Sofia M.',
    country: 'Italy',
    text: 'Pure magic. Crystal water, kind crew. We did nothing and it was everything.',
  },
  {
    name: 'Lukas R.',
    country: 'Germany',
    text: 'Best half-day in Croatia. Small boat, hidden bays exactly like the photos.',
  },
  {
    name: 'Emma & Tom',
    country: 'UK',
    text: "Milan made us feel like family. We'll be back next summer.",
  },
  {
    name: 'Camille D.',
    country: 'France',
    text: "The most relaxing day of our trip. They really mean 'no pressure'.",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-navy py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="label mb-4">Reviews</p>
          <h2 className="section-heading-light mb-4">100% Recommend</h2>
          <Stars />
          <p className="font-sans text-sm text-white/40 mt-3">Based on 38 guest reviews</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {reviews.map(({ name, country, text }) => (
            <div key={name} className="bg-white rounded-2xl p-6 relative">
              <div className="flex items-start justify-between mb-3">
                <Stars />
                <span className="font-serif text-4xl leading-none text-amber/30 -mt-2">"</span>
              </div>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">"{text}"</p>
              <div>
                <p className="font-sans font-semibold text-ink text-sm">{name}</p>
                <p className="font-sans text-xs text-gray-400">{country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
