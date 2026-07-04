import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt, FaRegClock } from 'react-icons/fa'
import { FiMapPin, FiArrowUpRight } from 'react-icons/fi'
import { WHATSAPP, MAPS, BUSINESS } from '../constants.js'
import OpenStatus from './OpenStatus.jsx'
import { useHours } from '../context/HoursContext.jsx'

export default function Contact() {
  const { groupedHours } = useHours()

  return (
    <section id="contacto" className="bg-offwhite py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            Contacto
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-espresso sm:text-4xl">
            ¿Listo para tu próxima taza?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Escríbenos, llámanos o ven a visitarnos. Te esperamos con la mejor
            actitud y el mejor café.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-5 rounded-2xl bg-[#25D366] p-7 text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
              <FaWhatsapp className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <div className="text-lg font-bold">Escríbenos por WhatsApp</div>
              <div className="text-sm text-white/85">
                Respuesta rápida · pedidos y dudas
              </div>
            </div>
            <FiArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>

          <motion.a
            href={BUSINESS.phoneTel}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex items-center gap-5 rounded-2xl bg-espresso p-7 text-cream shadow-lg shadow-espresso/25 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cream/15">
              <FaPhoneAlt className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <div className="text-lg font-bold">Llamar</div>
              <div className="text-sm text-cream/80">{BUSINESS.phoneDisplay}</div>
            </div>
            <FiArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </div>

        {/* Hours + Map */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-espresso/5 bg-white p-7 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <FaRegClock className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-espresso">
                  Horario
                </h3>
              </div>
              <OpenStatus variant="dark" showDetail={false} />
            </div>
            <ul className="mt-5 space-y-3">
              {groupedHours.map((row, i, arr) => (
                <li
                  key={row.days}
                  className={`flex items-center justify-between ${
                    i < arr.length - 1 ? 'border-b border-espresso/10 pb-3' : ''
                  }`}
                >
                  <span className="font-medium text-ink">{row.days}</span>
                  <span
                    className={`font-semibold ${
                      row.hours === 'Cerrado' ? 'text-muted' : 'text-forest'
                    }`}
                  >
                    {row.hours}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={BUSINESS.phoneTel}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-espresso underline-offset-4 transition-colors hover:text-forest hover:underline"
            >
              <FaPhoneAlt className="h-3.5 w-3.5" />
              {BUSINESS.phoneDisplay}
            </a>
          </motion.div>

          {/* Mapa de Google */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-espresso/5 bg-espresso shadow-lg"
          >
            <iframe
              title="Ubicación de B19 Coffee Bar en Google Maps"
              src="https://www.google.com/maps?q=B19%20Coffee%20Bar%2C%20Av.%20Juan%20Aldama%20785%2C%20Col.%20Magisterial%2C%20Mexicali%2C%20B.C.&z=16&output=embed"
              className="h-full min-h-[200px] w-full flex-1 border-0 grayscale-[15%] transition-all duration-500 group-hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 bg-espresso px-5 py-4 text-cream transition-colors duration-300 hover:bg-espresso/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream"
            >
              <span className="flex items-center gap-3">
                <FiMapPin className="h-5 w-5 shrink-0 text-cream" />
                <span className="text-sm leading-snug text-cream/85">
                  {BUSINESS.addressShort}
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-espresso">
                Ver en Maps
                <FiArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
