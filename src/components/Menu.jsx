import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMenu } from '../hooks/useMenu.js'
import MenuItemCard from './MenuItemCard.jsx'

// Tarjeta fantasma mientras carga el menú desde Google Sheets.
function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-espresso/5 bg-cream p-6">
      <div className="mb-3 h-10 w-10 rounded-xl bg-espresso/10" />
      <div className="h-5 w-2/3 rounded bg-espresso/10" />
      <div className="mt-3 h-3 w-full rounded bg-espresso/10" />
      <div className="mt-2 h-3 w-4/5 rounded bg-espresso/10" />
      <div className="mt-6 flex items-center justify-between border-t border-espresso/10 pt-4">
        <div className="h-6 w-16 rounded bg-forest/20" />
        <div className="h-9 w-24 rounded-full bg-espresso/20" />
      </div>
    </div>
  )
}

export default function Menu() {
  const { categories, loading } = useMenu()
  const [active, setActive] = useState(null)

  // Selecciona la primera categoría cuando llegan los datos (o si la
  // categoría activa dejó de existir tras un cambio en la hoja).
  useEffect(() => {
    if (!categories?.length) return
    setActive((prev) =>
      prev && categories.some((c) => c.id === prev) ? prev : categories[0].id,
    )
  }, [categories])

  const current = categories?.find((c) => c.id === active) || null

  return (
    <section id="menu" className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            Carta
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-espresso sm:text-4xl">
            Nuestro Menú
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Todo hecho con intención, servido con pasión.
          </p>
          <p className="mt-2 text-sm text-muted">
            Elige tu bebida y arma tu pedido — lo enviamos listo por WhatsApp.
          </p>
        </motion.div>

        {/* Estado de carga (skeleton) */}
        {loading || !current ? (
          <div className="mt-10">
            <div className="mx-auto mb-8 flex max-w-md justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-9 w-24 animate-pulse rounded-full bg-espresso/10"
                />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="mt-10 flex justify-start gap-2 overflow-x-auto pb-2 no-scrollbar md:flex-wrap md:justify-center md:overflow-visible">
              {categories.map((cat) => {
                const Icon = cat.icon
                const isActive = cat.id === active
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`group relative inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 ${
                      isActive ? 'text-cream' : 'text-espresso/70 hover:text-espresso'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tab-pill"
                        className="absolute inset-0 rounded-full bg-espresso shadow-md shadow-espresso/20"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {cat.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Category note */}
            {current.note && (
              <p className="mt-6 text-center text-xs font-medium uppercase tracking-wide text-forest">
                {current.note}
              </p>
            )}

            {/* Items grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {current.items.map((item, i) => (
                  <MenuItemCard
                    key={item.name}
                    item={item}
                    category={current}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  )
}
