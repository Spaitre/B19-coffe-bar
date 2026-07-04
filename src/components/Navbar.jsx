import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMapPin } from 'react-icons/fi'
import { MAPS, NAV_LINKS } from '../constants.js'
import Logo from './Logo.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-espresso/95 shadow-lg shadow-espresso/20 backdrop-blur'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Brand */}
          <a
            href="#inicio"
            className="group flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-cream"
          >
            <Logo className="h-11 w-11 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-bold">B19 Coffee Bar</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-cream/90 transition-colors duration-300 hover:text-cream after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-cream after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-espresso shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso active:translate-y-0 md:inline-flex"
          >
            <FiMapPin className="h-4 w-4" />
            Visítanos
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cream transition-colors duration-300 hover:bg-cream/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream md:hidden"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[70] flex w-72 max-w-[80%] flex-col bg-espresso px-6 py-6 shadow-2xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-lg font-bold text-cream">
                  B19 Coffee Bar
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-cream transition-colors duration-300 hover:bg-cream/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-lg font-medium text-cream/90 transition-colors duration-300 hover:bg-cream/10 hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-semibold text-espresso transition-all duration-300 hover:bg-white active:scale-[0.98]"
              >
                <FiMapPin className="h-4 w-4" />
                Visítanos
              </a>

              <p className="mt-auto pt-8 text-xs leading-relaxed text-cream/50">
                Apasionados por el café y el servicio.
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
