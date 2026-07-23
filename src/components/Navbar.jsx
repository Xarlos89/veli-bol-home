import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Tour', href: '#essentials' },
  { label: 'About', href: '#about' },
  { label: 'Private', href: '#private' },
  { label: 'Experience', href: '#experience' },
  { label: 'Food', href: '#food' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-cream border-b border-soft transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="font-serif text-lg text-ink leading-none">
          Veli Bol <em>Excursions</em>
        </a>

        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-xs tracking-widest uppercase text-ink/60 hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/excursion_veli_bol/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ink/60 hover:text-ink transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="#book"
            className="btn-dark text-xs tracking-widest uppercase"
          >
            Book
          </a>
        </div>
      </div>
    </header>
  )
}
