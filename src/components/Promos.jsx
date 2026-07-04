import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiTag, FiArrowUpRight } from 'react-icons/fi'
import { usePromos } from '../hooks/usePromos.js'
import { waLink } from '../constants.js'

function PromoCard({ promo, index, featured }) {
  const url = waLink(
    `Hola B19 Coffee Bar 👋 Me interesa la promoción: ${promo.titulo}`,
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
        featured
          ? 'bg-gradient-to-br from-espresso to-forest text-cream shadow-espresso/20 md:row-span-2 md:justify-between'
          : 'border border-espresso/5 bg-cream text-espresso'
      }`}
    >
      {featured && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #F5ECD7 1.5px, transparent 1.5px)',
            backgroundSize: '30px 30px',
          }}
        />
      )}

      <div className="relative z-10">
        {promo.etiqueta && (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
              featured
                ? 'bg-cream/15 text-cream'
                : 'bg-forest/10 text-forest'
            }`}
          >
            <FiTag className="h-3.5 w-3.5" />
            {promo.etiqueta}
          </span>
        )}

        <h3
          className={`mt-4 font-display font-bold leading-snug ${
            featured ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {promo.titulo}
        </h3>

        {promo.descripcion && (
          <p
            className={`mt-2 text-sm leading-relaxed ${
              featured ? 'text-cream/85' : 'text-muted'
            }`}
          >
            {promo.descripcion}
          </p>
        )}
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative z-10 mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          featured
            ? 'bg-cream text-espresso hover:gap-3 focus-visible:ring-cream'
            : 'bg-espresso text-cream hover:bg-forest hover:gap-3 focus-visible:ring-espresso'
        }`}
      >
        <FaWhatsapp className="h-4 w-4" />
        Lo quiero
        <FiArrowUpRight className="h-4 w-4" />
      </a>
    </motion.article>
  )
}

export default function Promos() {
  const promos = usePromos()

  // Se oculta por completo si no hay promociones activas.
  if (!promos || promos.length === 0) return null

  return (
    <section id="promos" className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            Ofertas
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-espresso sm:text-4xl">
            Promociones
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Aprovecha nuestras promos vigentes — pídelas directo por WhatsApp.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {promos.map((promo, i) => (
            <PromoCard
              key={promo.titulo}
              promo={promo}
              index={i}
              featured={promo.destacado}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
