function PageHero({ title, subtitle, bg = 'bg-sea-deep' }) {
  return (
    <section className={`${bg} text-white pt-32 pb-16 px-4`}>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-4">{title}</h1>
        {subtitle && <p className="text-white/75 text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}

function PlaceholderImg({ className = '', label = 'Photo coming soon' }) {
  return (
    <div className={`bg-gradient-to-br from-sea-deep to-sea-mid flex items-center justify-center rounded-xl ${className}`}>
      <div className="text-center text-white/60 p-6">
        <div className="text-5xl mb-2">📷</div>
        <div className="text-sm font-body">{label}</div>
      </div>
    </div>
  )
}

export default function History() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="A love for the sea, passed down through generations on Brač Island."
      />

      {/* Bol & the Adriatic */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sunset-orange font-display font-semibold uppercase tracking-widest text-sm">
                The Island
              </span>
              <h2 className="section-title mt-2">Brač Island & Bol</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bol sits on the southern shore of Brač — the largest island in Dalmatia and one of the
                most beloved in all of the Adriatic. Sheltered by dramatic limestone hills and open to
                the deep blue sea, Bol has been a place of seafarers, fishermen, and explorers for
                centuries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The waters around Brač are some of the clearest in the Mediterranean. Hidden behind
                every rocky headland lies a new bay, a new shade of turquoise, a new story waiting
                to be discovered.
              </p>
            </div>
            <PlaceholderImg className="h-80" label="Aerial view of Bol & Zlatni Rat beach" />
          </div>
        </div>
      </section>

      {/* The Boat */}
      <section className="py-20 bg-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/boat.jpg"
                alt="The Veli Bol boat at harbor with the Croatian flag"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-sunset-orange font-display font-semibold uppercase tracking-widest text-sm">
                The Vessel
              </span>
              <h2 className="section-title mt-2">An Old-School Dalmatian Boat</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our wooden boat is a traditional Dalmatian vessel — the kind that has worked these
                waters for generations. Built for the Adriatic, she handles the open sea and narrow
                coves with equal grace. There is nothing flashy about her: just solid craftsmanship,
                honest wood, and a Croatian flag flying proudly at the stern.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe the best way to experience the sea is simply — no luxury trimmings,
                just you, the boat, the water, and the sky. That is what we offer every single day
                of the season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dalmatian heritage */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sunset-orange font-display font-semibold uppercase tracking-widest text-sm">
                The Heritage
              </span>
              <h2 className="section-title mt-2">Dalmatian Maritime Tradition</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Dalmatian coast has been navigated by skilled sailors since antiquity. The
                fishermen of Brač developed an intimate knowledge of every current, wind shift, and
                hidden anchorage. This knowledge — of where the fish run, where the water is clearest,
                where the cliffs shelter a perfect swimming spot — is what we share with our guests.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Veli Bol is our way of keeping that tradition alive: small boats, real places,
                and the freedom to go where the day takes you.
              </p>
            </div>
            <img
              src="/images/billboard.jpg"
              alt="Veli Bol tour offerings billboard at Bol harbor"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Crew placeholder */}
      <section className="py-20 bg-sea-deep text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sea-light font-display font-semibold uppercase tracking-widest text-sm">
            The Team
          </span>
          <h2 className="font-display font-bold text-4xl mt-2 mb-6">Your Hosts</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {[
              { role: 'Captain & Guide', placeholder: 'Captain bio & photo coming soon' },
              { role: 'First Mate & Guide', placeholder: 'Crew bio & photo coming soon' },
            ].map(({ role, placeholder }) => (
              <div key={role} className="bg-white/10 rounded-2xl p-8 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-4xl mb-4">
                  👤
                </div>
                <div className="font-display font-bold text-xl mb-1">{role}</div>
                <p className="text-white/50 text-sm">{placeholder}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
