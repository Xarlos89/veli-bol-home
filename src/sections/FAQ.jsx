import { useState } from 'react'

const faqs = [
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
    a: 'Max 40 on the boat, but the average group is around 10.',
  },
  {
    q: 'How do I confirm my booking?',
    a: 'Send us a WhatsApp with your name and preferred date. We\'ll confirm within a few hours.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-sans font-semibold text-white text-sm">{q}</span>
        <svg
          className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <p className="font-sans text-sm text-white/50 leading-relaxed pb-5 -mt-1">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-navy py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="label mb-3">FAQ</p>
          <h2 className="section-heading-light">Good to know</h2>
        </div>

        <div className="max-w-2xl mx-auto bg-navy-light border border-white/5 rounded-2xl px-6">
          {faqs.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
