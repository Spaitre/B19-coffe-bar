import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { BUSINESS, SOCIALS, NAV_LINKS, MAPS } from '../constants.js'
import Logo from './Logo.jsx'

export default function Footer() {
  const socialItems = [
    { icon: FaInstagram, href: SOCIALS.instagram, label: 'Instagram' },
    { icon: FaFacebookF, href: SOCIALS.facebook, label: 'Facebook' },
    { icon: FaTiktok, href: SOCIALS.tiktok, label: 'TikTok' },
  ]

  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-11 w-11" />
              <span className="font-display text-xl font-bold">
                B19 Coffee Bar
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {BUSINESS.tagline}. Café de especialidad mexicano en el corazón de
              Mexicali.
            </p>
            <div className="mt-6 flex gap-3">
              {socialItems.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:text-espresso focus:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick nav */}
          <div className="md:justify-self-center">
            <h3 className="font-display text-lg font-bold">Navegación</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors duration-300 hover:text-cream"
                >
                  <FiMapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{BUSINESS.addressShort}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.phoneTel}
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-cream"
                >
                  <FiPhone className="h-4 w-4 shrink-0" />
                  <span>{BUSINESS.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-cream"
                >
                  <FiMail className="h-4 w-4 shrink-0" />
                  <span className="break-all">{BUSINESS.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
          © 2025 B19 Coffee Bar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
