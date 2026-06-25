import { useState } from 'react'

const navLinks = [
  { label: 'Tour Info', href: '#essentials' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Food', href: '#food' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book', href: '#book' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-soft">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#" className="font-serif text-lg text-ink leading-none">
          Veli Bol <em>Excursions</em>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-ink p-1"
          aria-label="Menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="bg-cream border-t border-soft px-5 sm:px-8 py-5">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm text-ink/70 hover:text-ink py-2 border-b border-soft/50 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="tel:+385957420929"
              className="mt-4 btn-dark w-full text-center"
              onClick={() => setOpen(false)}
            >
              Book your seat →
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
