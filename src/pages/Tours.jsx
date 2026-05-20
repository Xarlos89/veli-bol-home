import { Link } from 'react-router-dom'

function Badge({ children, color = 'bg-sunset-orange' }) {
  return (
    <span className={`inline-block ${color} text-white text-xs font-display font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
      {children}
    </span>
  )
}

function IncludedItem({ children }) {
  return (
    <li className="flex items-center gap-2 text-gray-700 text-sm">
      <span className="text-sea-light font-bold">✓</span>
      {children}
    </li>
  )
}

function PlaceholderImg({ className = '', label = 'Photo coming soon' }) {
  return (
    <div className={`bg-gradient-to-br from-sea-deep to-sea-mid flex items-center justify-center ${className}`}>
      <div className="text-center text-white/60 p-6">
        <div className="text-5xl mb-2">🌅</div>
        <div className="text-sm font-body">{label}</div>
      </div>
    </div>
  )
}

export default function Tours() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sea-deep text-white pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-4">Tours & Offerings</h1>
          <p className="text-white/75 text-lg leading-relaxed">
            Two experiences. Infinite memories. Both aboard our traditional Dalmatian wooden boat
            out of Bol harbor.
          </p>
        </div>
      </section>

      {/* Hidden Bays */}
      <section className="py-20 bg-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/images/billboard.jpg"
                alt="Hidden Bays tour advertisement showing crystal clear Croatian bays"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Half Day</Badge>
                <Badge color="bg-sea-mid">Swimming</Badge>
                <Badge color="bg-sea-light">Snorkeling</Badge>
              </div>
              <h2 className="font-display font-extrabold text-4xl text-sea-deep mb-4">
                Hidden Bays Tour
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Adriatic hides its best spots behind towering limestone cliffs and narrow passages
                that only a small wooden boat can navigate. On this tour, <strong>you decide where you
                want to swim</strong> — we know the spots, you pick the vibe.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We'll take you to secluded coves and crystal-clear bays rarely seen by tourists,
                with time to swim, snorkel, and soak up the silence of the open sea.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <h3 className="font-display font-bold text-sea-deep mb-3 text-lg">What's Included</h3>
                <ul className="space-y-2">
                  <IncludedItem>Half-day on the water (~4 hours)</IncludedItem>
                  <IncludedItem>Swimming at 2–3 hidden bay stops</IncludedItem>
                  <IncludedItem>Snorkeling equipment available</IncludedItem>
                  <IncludedItem>Food & drinks options available</IncludedItem>
                  <IncludedItem>Small group — personal experience</IncludedItem>
                  <IncludedItem>Knowledgeable local captain</IncludedItem>
                </ul>
              </div>

              <div className="bg-sea-deep/10 rounded-xl p-4 mb-6 border-l-4 border-sunset-orange">
                <p className="text-sea-deep font-display font-semibold italic">
                  "Where are you swimming tomorrow?"
                </p>
              </div>

              <a href="tel:+385957420929" className="btn-primary inline-block">
                Book by Phone
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sunset Tour */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge color="bg-sunset-orange">Evening</Badge>
                <Badge color="bg-sunset-gold text-ink">~2 Hours</Badge>
              </div>
              <h2 className="font-display font-extrabold text-4xl text-sea-deep mb-4">
                Sunset Tour
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                There is no better place to watch the sun set than from the deck of a boat on the
                Adriatic. As the sky turns orange, gold, and crimson over the islands, you'll drift
                along the coast in peaceful silence — with nothing between you and the horizon.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A two-hour evening cruise departing from Bol harbor. Perfect for couples, families,
                or anyone who wants to end the day properly.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                <h3 className="font-display font-bold text-sea-deep mb-3 text-lg">What's Included</h3>
                <ul className="space-y-2">
                  <IncludedItem>~2-hour evening cruise</IncludedItem>
                  <IncludedItem>Prime sunset viewing from the water</IncludedItem>
                  <IncludedItem>Scenic coastal route</IncludedItem>
                  <IncludedItem>Drinks options available</IncludedItem>
                  <IncludedItem>Small group — intimate atmosphere</IncludedItem>
                </ul>
              </div>

              <a href="tel:+385957420929" className="btn-primary inline-block">
                Book by Phone
              </a>
            </div>
            <div className="order-1 md:order-2">
              <PlaceholderImg className="w-full h-96 rounded-2xl shadow-xl" label="Sunset cruise photo coming soon" />
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-sea-deep py-16 text-center text-white px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Ready to hit the water?
          </h2>
          <p className="text-white/75 mb-8 leading-relaxed">
            All tours depart from Bol harbor on Brač Island. Book by phone — we speak English and Croatian.
            Look for the wooden boat with the Croatian flag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+385957420929" className="btn-primary text-center">
              📞 +385 95 742 09 29
            </a>
            <Link to="/contact" className="btn-outline text-center">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
