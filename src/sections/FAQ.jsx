import { useState } from 'react'

// Also the source for the FAQPage structured data — see src/seo/schema.js.
// Answers must stay factual: every one below is drawn from the tour details in
// Essentials, About, FoodOnBoard and PrivateTour.
export const faqs = [
  {
    q: 'Where does the boat leave from?',
    a: 'From Porat — Ul. Bolskih Pomoraca, on the Bol waterfront, a few minutes on foot from the centre of town. We cast off at 10:00 and are back around 16:00.',
  },
  {
    q: 'Where does the boat tour go?',
    a: 'Across the channel from Bol to the island of Hvar. We pick a different bay each day depending on the wind and the sea — and you decide where you want to swim.',
  },
  {
    q: 'How long is the trip?',
    a: 'Six hours in total: about an hour under way and five hours at anchor, split across two different swimming stops.',
  },
  {
    q: 'How much does the boat trip cost?',
    a: 'The ticket is €65 per adult, half price for children 4–10 and free for under-4s. Food on board is a separate, optional add-on. There are no hidden fees, and a family discount is available — just ask.',
  },
  {
    q: 'Is lunch included?',
    a: 'Not in the ticket price. The full grill is €55 — hot appetisers, grilled mackerel with vegetables, fresh crepes, with local red wine and water. There is also a €30 kids menu, a €20 cold plate and €10 pancakes. Let us know when you book.',
  },
  {
    q: 'What is on board?',
    a: 'Snorkeling equipment, stand-up paddleboards to share, a slide and jump platforms. Six tables in the shade on the main deck — one per group — an open sun deck above, and a toilet aboard.',
  },
  {
    q: 'Can we book the whole boat privately?',
    a: 'Yes. Private sunset charters run by the hour, from €150 for one hour up to €400 for three, with wine, food on board and a swim stop depending on the length. Message us on WhatsApp to arrange one.',
  },
  {
    q: 'What if the weather is bad?',
    a: 'We monitor forecasts closely. If conditions are unsafe we reschedule or fully refund — your choice.',
  },
  {
    q: 'Is it suitable for children?',
    a: 'Yes. Family and kids are very welcome. Life jackets available for all ages.',
  },
  {
    q: 'What should I bring?',
    a: 'Swimwear, sunscreen, a towel, and anything you want to drink. We bring the rest.',
  },
  {
    q: 'How many guests per trip?',
    a: 'There’s no fixed cap — some days it’s just a handful, other days the boat is fuller, but there’s always room and it never feels crowded.',
  },
  {
    q: 'How do I confirm my booking?',
    a: 'Send us a WhatsApp with your name and preferred date. We\'ll confirm within a few hours.',
  },
]

function FAQItem({ q, a, id }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10 last:border-0">
      <h3>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`faq-answer-${id}`}
          className="w-full flex items-center justify-between gap-4 py-5 text-left font-sans font-semibold text-white text-sm"
        >
          <span>{q}</span>
          <svg
            className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </h3>
      {/* The answer stays in the DOM whether or not the item is open — collapsed
          with a grid row rather than unmounted, so crawlers see every answer in
          the prerendered HTML. */}
      <div
        id={`faq-answer-${id}`}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-sm text-white/50 leading-relaxed pb-5 -mt-1">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-navy py-20 sm:py-28" aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="label mb-3">FAQ · Boat trips from Bol</p>
          <h2 id="faq-heading" className="section-heading-light">Good to know</h2>
        </div>

        <div className="max-w-2xl mx-auto bg-navy-light border border-white/5 rounded-2xl px-6">
          {faqs.map(({ q, a }, i) => (
            <FAQItem key={q} q={q} a={a} id={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
