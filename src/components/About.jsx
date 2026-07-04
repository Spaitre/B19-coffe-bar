import { motion } from 'framer-motion'
import { FaStar, FaGlobeAmericas, FaHome, FaCoffee } from 'react-icons/fa'
import { ABOUT_PHOTO } from '../data/images.js'
import SmartImg from './SmartImg.jsx'

const FEATURES = [
  {
    icon: FaStar,
    title: '4.8 / 5 en Google',
    text: 'Más de 289 reseñas verificadas de nuestra comunidad.',
  },
  {
    icon: FaGlobeAmericas,
    title: 'Staff bilingüe',
    text: 'English and Spanish speakers welcome — te atendemos en tu idioma.',
  },
  {
    icon: FaHome,
    title: 'Mesas dentro y fuera',
    text: 'Espacios interiores y exteriores, ideales para trabajar o relajarte.',
  },
  {
    icon: FaCoffee,
    title: 'Café de origen mexicano',
    text: 'Tostado por Cardón Coffee Roasters, con carácter y trazabilidad.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="bg-offwhite py-12 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            Nuestra historia
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-espresso sm:text-4xl">
            ¿Por qué B19?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/80">
            B19 nace de la pasión por el café y el servicio. Somos una barra de
            café de especialidad mexicano en un espacio confortable, pensado
            para compartir el mundo del café con toda la comunidad
            bajacaliforniana.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-espresso/5 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-espresso">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {f.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Visual side — foto real con marco decorativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Marco/acento detrás */}
          <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border-2 border-forest/30" />
          <div className="absolute -bottom-5 -left-5 h-24 w-24 animate-floaty rounded-full bg-forest/15" />

          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-espresso/20">
            <SmartImg
              src={ABOUT_PHOTO.src}
              fallback={ABOUT_PHOTO.fallback}
              alt={ABOUT_PHOTO.alt}
              className="aspect-[4/5] w-full object-cover"
            />
            {/* Chip con lema sobre la foto */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-espresso/85 px-4 py-2 text-cream backdrop-blur">
              <FaCoffee className="h-4 w-4" />
              <span className="text-sm font-semibold">Apasionados por el café</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
