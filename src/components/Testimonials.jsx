import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaGoogle, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { GOOGLE_REVIEW, SOCIALS } from '../constants.js'

const REVIEWS = [
  {
    quote:
      'Very bougie and so far the best coffee place I found in Mexicali. Great experience, great coffee. The staff speaks English.',
    name: 'Jordan M.',
    initial: 'J',
  },
  {
    quote:
      'Los mejores cinnamon rolls que he probado. El servicio es excelente y los baristas te hacen sentir en casa.',
    name: 'Fernanda R.',
    initial: 'F',
  },
  {
    quote:
      'Me encanta este lugar. El pan es delicioso y su mocha siempre será mi favorito de todo Mexicali.',
    name: 'Carlos V.',
    initial: 'C',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            Reseñas
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-espresso sm:text-4xl">
            Lo que dice nuestra comunidad
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-2xl border-l-4 border-espresso bg-cream p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-espresso/10"
            >
              <FaQuoteLeft className="h-7 w-7 text-espresso/20" />
              <div className="mt-3 flex items-center gap-0.5 text-[#E0A82E]">
                {[...Array(5)].map((_, s) => (
                  <FaStar key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/80">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-espresso/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso font-display text-lg font-bold text-cream">
                  {r.initial}
                </span>
                <div>
                  <div className="font-semibold text-espresso">{r.name}</div>
                  <div className="text-xs text-muted">Reseña verificada</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Reseña en Google + seguir en redes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-6 rounded-2xl border border-espresso/10 bg-offwhite px-6 py-8 text-center"
        >
          <div>
            <p className="font-display text-xl font-bold text-espresso">
              ¿Ya nos visitaste?
            </p>
            <p className="mt-1 text-sm text-muted">
              Déjanos tu reseña y síguenos para no perderte nuestras novedades.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={GOOGLE_REVIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 active:translate-y-0"
            >
              <FaGoogle className="h-4 w-4" />
              Déjanos tu reseña en Google
            </a>

            <div className="flex items-center gap-2">
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DD2A7B] focus-visible:ring-offset-2 active:translate-y-0"
              >
                <FaInstagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook"
                className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f66d6] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] focus-visible:ring-offset-2 active:translate-y-0"
              >
                <FaFacebookF className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
