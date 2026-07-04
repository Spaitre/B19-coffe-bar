import { motion } from 'framer-motion'
import { FaWhatsapp, FaStar } from 'react-icons/fa'
import { FiArrowDown } from 'react-icons/fi'
import { WHATSAPP } from '../constants.js'
import OpenStatus from './OpenStatus.jsx'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-espresso via-espresso to-forest"
    >
      {/* Decorative warm abstract shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cream/10 blur-3xl animate-floaty" />
        <div className="absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full bg-[#C98A4B]/20 blur-3xl animate-floaty [animation-delay:1.5s]" />
        <div className="absolute bottom-[-4rem] left-1/3 h-80 w-80 rounded-full bg-forest/40 blur-3xl animate-floaty [animation-delay:3s]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, #F5ECD7 1.5px, transparent 1.5px)',
            backgroundSize: '38px 38px',
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-20 md:pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cream/90"
          >
            ☕ Café de especialidad · Mexicali, B.C.
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-[1.08] text-cream sm:text-5xl lg:text-6xl"
          >
            El mejor café de Mexicali —{' '}
            <span className="text-[#E7C9A0]">ahora en tu pantalla</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg"
          >
            Café de especialidad mexicano, repostería artesanal horneada diario
            y un espacio donde la comunidad bajacaliforniana se siente en casa.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-espresso active:translate-y-0"
            >
              <FaWhatsapp className="h-5 w-5" />
              Escríbenos por WhatsApp
            </a>
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/5 px-7 py-3.5 text-base font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream hover:bg-cream/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso active:translate-y-0"
            >
              Ver nuestro menú
              <FiArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating trust badge + estado en vivo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: 'backOut' }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex animate-floaty items-center gap-3 rounded-2xl border border-cream/15 bg-cream/95 px-5 py-3 shadow-2xl shadow-black/30 backdrop-blur">
            <span className="flex items-center gap-0.5 text-[#E0A82E]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-sm font-semibold text-espresso">
              4.8 / 5 · +289 reseñas en Google
            </span>
          </span>
          <OpenStatus variant="light" />
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/95 to-transparent" />
    </section>
  )
}
