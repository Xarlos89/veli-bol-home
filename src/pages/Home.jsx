import { Link } from 'react-router-dom'

const features = [
  { icon: '🏊', title: 'Swimming & Snorkeling', desc: 'Dive into crystal-clear Adriatic waters at secluded spots only locals know.' },
  { icon: '🗺️', title: 'Hidden Bays', desc: 'Explore secret coves and dramatic limestone cliffs tucked away from the crowds.' },
  { icon: '🌅', title: 'Sunset Cruises', desc: 'Watch the sky ignite in orange and gold as the sun melts into the horizon.' },
]

const tours = [
  {
    title: 'Hidden Bays',
    tag: 'Half Day',
    desc: 'You decide where you want to swim. Explore secret coves, cliffs, and emerald bays along the Dalmatian coast aboard our traditional wooden boat.',
    img: '/images/billboard.jpg',
    to: '/tours',
  },
  {
    title: 'Sunset Tour',
    tag: 'Evening',
    desc: 'Drift along the coast as the Adriatic sky transforms into a canvas of warm colour. A magical two-hour escape from shore.',
    img: null,
    to: '/tours',
  },
]

function PlaceholderImg({ className = '', label = 'Photo coming soon' }) {
  return (
    <div className={`bg-gradient-to-br from-sea-deep to-sea-mid flex items-center justify-center ${className}`}>
      <div className="text-center text-white/60 p-4">
        <div className="text-4xl mb-2">📷</div>
        <div className="text-sm font-body">{label}</div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/boat.jpg"
          alt="Veli Bol boat docked at Bol harbor"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="font-body text-sea-light tracking-widest uppercase text-sm mb-4">
            Bol · Brač Island · Croatia
          </p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-tight mb-6">
            Discover Bol's<br />
            <span className="text-sunset-orange">Hidden Treasures</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 font-light leading-relaxed">
            An old-school Dalmatian tour experience. Step aboard our traditional wooden boat
            and explore the secret bays and sunsets of the Adriatic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours" className="btn-primary text-center">
              View Our Tours
            </Link>
            <Link to="/contact" className="btn-outline text-center">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-sea-deep text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-display font-bold text-xl mb-2 text-sunset-orange">{title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour highlights */}
      <section className="py-20 bg-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Tours</h2>
            <p className="section-subtitle mx-auto text-center">
              Two unforgettable ways to experience the Adriatic — on your terms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tours.map(({ title, tag, desc, img, to }) => (
              <div key={title} className="card group">
                <div className="relative h-56 overflow-hidden">
                  {img ? (
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <PlaceholderImg className="w-full h-full" label="Sunset photo coming soon" />
                  )}
                  <span className="absolute top-3 left-3 bg-sunset-orange text-white text-xs font-display font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl text-sea-deep mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <Link to={to} className="text-sunset-orange font-semibold text-sm hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline quote */}
      <section className="relative py-24 overflow-hidden bg-sea-deep">
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <div className="text-sea-light text-6xl font-display mb-4">"</div>
          <blockquote className="font-display font-bold text-3xl md:text-5xl text-white leading-tight mb-6">
            You decide where you want to swim.
          </blockquote>
          <p className="text-white/60 font-body text-lg">— Veli Bol, an old-school Dalmatian tour</p>
          <div className="mt-10">
            <a href="tel:+385957420929" className="btn-primary">
              Book by Phone · +385 95 742 09 29
            </a>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="section-title">Ready for your Adriatic adventure?</h2>
          <p className="text-gray-500 mb-8">
            Find us at Bol harbor on Brač Island — just look for the Croatian flag and the wooden boat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours" className="btn-primary text-center">
              See All Tours
            </Link>
            <Link to="/contact" className="btn-primary !bg-sea-deep text-center">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
