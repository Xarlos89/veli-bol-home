import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tour', href: '#essentials' },
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
      className={`fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-soft transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
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

        <a
          href="#book"
          className="btn-dark text-xs tracking-widest uppercase"
        >
          Book
        </a>
      </div>
    </header>
  )
}
