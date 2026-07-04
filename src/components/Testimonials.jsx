import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

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
      </div>
    </section>
  )
}
