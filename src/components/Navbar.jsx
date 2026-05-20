import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/history', label: 'Our Story' },
  { to: '/tours', label: 'Tours' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-sea-deep shadow-lg'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="text-2xl">⛵</span>
          <div className="leading-tight">
            <div className="font-display font-bold text-white text-lg leading-none">Veli Bol</div>
            <div className="text-xs text-sea-light font-body tracking-wide">Bol, Croatia</div>
          </div>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full font-display font-semibold text-sm transition-colors duration-200 ${
                  isActive
                    ? 'bg-sunset-orange text-white'
                    : 'text-white hover:bg-white/10'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="tel:+385957420929"
            className="ml-4 btn-primary !py-2 !px-5 text-sm"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-sea-deep border-t border-white/10 px-4 pb-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `block py-3 px-2 font-display font-semibold text-base border-b border-white/10 transition-colors ${
                  isActive ? 'text-sunset-orange' : 'text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="tel:+385957420929"
            className="block mt-4 btn-primary text-center"
          >
            Book Now · +385 95 742 09 29
          </a>
        </div>
      )}
    </header>
  )
}
