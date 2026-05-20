function InfoCard({ icon, title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-display font-bold text-sea-deep text-lg mb-2">{title}</h3>
      <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sea-deep text-white pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-4">Find Us</h1>
          <p className="text-white/75 text-lg leading-relaxed">
            We're based in Bol harbor, Brač Island. Look for the wooden boat flying the Croatian flag —
            that's us.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 bg-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <InfoCard icon="📞" title="Phone & Booking">
              <p className="mb-2">Call or message us to book a tour or ask any questions.</p>
              <a
                href="tel:+385957420929"
                className="inline-block mt-2 text-sunset-orange font-display font-bold text-base hover:underline"
              >
                +385 95 742 09 29
              </a>
              <p className="mt-2 text-xs text-gray-400">Available during season · Croatian & English</p>
            </InfoCard>

            <InfoCard icon="📍" title="Location">
              <p>Bol Harbor (Riva)</p>
              <p>Bol, Brač Island</p>
              <p>Split-Dalmatia County</p>
              <p>Croatia</p>
              <a
                href="https://maps.google.com/?q=Bol+harbor+Brac+Croatia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sunset-orange font-semibold hover:underline text-xs"
              >
                Open in Google Maps →
              </a>
            </InfoCard>

            <InfoCard icon="📘" title="Social Media">
              <p className="mb-2">Follow us on Facebook for tour updates, photos, and availability.</p>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sunset-orange font-display font-bold text-base hover:underline"
              >
                Excursion Veli Bol
              </a>
              <p className="mt-2 text-xs text-gray-400">Facebook · active during summer season</p>
            </InfoCard>

            <InfoCard icon="🕐" title="Season & Hours">
              <p className="mb-1"><strong>Season:</strong> May – October</p>
              <p className="mb-1"><strong>Morning tours:</strong> ~9:00 AM departure</p>
              <p className="mb-1"><strong>Sunset tours:</strong> ~7:00 PM departure</p>
              <p className="mt-2 text-xs text-gray-400">
                Exact times vary by season and weather. Call to confirm.
              </p>
            </InfoCard>

            <InfoCard icon="⚓" title="Finding the Boat">
              <p>
                Walk along the Bol waterfront promenade (Riva). We're docked among the excursion boats
                — look for the traditional wooden vessel with the Croatian flag and the yellow-orange
                billboard sign.
              </p>
            </InfoCard>

            <InfoCard icon="🌊" title="Good to Know">
              <p className="mb-1">· Small group tours — book ahead in peak season</p>
              <p className="mb-1">· Bring sunscreen, a hat, and a towel</p>
              <p className="mb-1">· Snorkeling gear available on board</p>
              <p className="mb-1">· Tours may be rescheduled in rough weather</p>
            </InfoCard>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-sea-deep text-white px-6 py-4">
              <h2 className="font-display font-bold text-xl">Bol, Brač Island, Croatia</h2>
              <p className="text-white/60 text-sm">We depart from Bol harbor — the main waterfront (Riva)</p>
            </div>
            <iframe
              title="Bol harbor location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.123456789!2d16.6523!3d43.2629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13354c5b6c2cd2c1%3A0x5c1c1c1c1c1c1c1c!2sBol%2C+Croatia!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="bg-sunset-orange py-16 text-center text-white px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            See you on the water!
          </h2>
          <p className="text-white/85 mb-8">
            The easiest way to book is a quick phone call. We'll sort out everything else once you arrive.
          </p>
          <a
            href="tel:+385957420929"
            className="inline-block px-10 py-4 bg-white text-sunset-orange font-display font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            📞 +385 95 742 09 29
          </a>
        </div>
      </section>
    </>
  )
}
