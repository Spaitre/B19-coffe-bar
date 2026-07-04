import { motion } from 'framer-motion'
import { GALLERY } from '../data/images.js'
import SmartImg from './SmartImg.jsx'

export default function Gallery() {
  return (
    <section className="bg-offwhite py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            Galería
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-espresso sm:text-4xl">
            Un vistazo a B19
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Bebidas de especialidad, repostería del día y un espacio hecho para
            la comunidad.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {GALLERY.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl bg-espresso/5 shadow-sm ${
                i === 0 || i === 3 ? 'md:row-span-2' : ''
              }`}
            >
              <SmartImg
                src={img.src}
                fallback={img.fallback}
                alt={img.alt}
                className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
