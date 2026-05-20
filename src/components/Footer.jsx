import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⛵</span>
              <div>
                <div className="font-display font-bold text-lg">Veli Bol</div>
                <div className="text-xs text-sea-light">An old-school Dalmatian tour</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Traditional boat tours on the crystal-clear waters of the Adriatic.
              Based in Bol, Brač Island, Croatia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-sunset-orange mb-3 uppercase text-sm tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { to: '/', label: 'Home' },
                { to: '/history', label: 'Our Story' },
                { to: '/tours', label: 'Tours & Offerings' },
                { to: '/contact', label: 'Contact & Location' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} className="hover:text-sea-light transition-colors">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sunset-orange mb-3 uppercase text-sm tracking-wider">
              Find Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Bol Harbor, Brač Island<br />Split-Dalmatia, Croatia</span>
              </li>
              <li>
                <a href="tel:+385957420929" className="flex items-center gap-2 hover:text-sea-light transition-colors">
                  <span>📞</span>
                  <span>+385 95 742 09 29</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sea-light transition-colors"
                >
                  <span>📘</span>
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Veli Bol. All rights reserved. · Bol, Croatia</p>
        </div>
      </div>
    </footer>
  )
}
