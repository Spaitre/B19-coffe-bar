import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiCheck } from 'react-icons/fi'
import { useCart } from '../context/CartContext.jsx'
import { TAG_STYLES } from '../data/menu.js'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function MenuItemCard({ item, category, index }) {
  const Icon = category.icon
  const { addItem } = useCart()

  const hasSizes = item.oz12 != null && item.oz16 != null
  const hasFlavors = Array.isArray(item.flavors) && item.flavors.length > 0
  const isLimited = item.limited || category.limited

  const [size, setSize] = useState(hasSizes ? '12' : null)
  const [flavor, setFlavor] = useState(hasFlavors ? item.flavors[0] : null)
  const [justAdded, setJustAdded] = useState(false)

  const price = hasSizes ? (size === '12' ? item.oz12 : item.oz16) : item.single
  const sizeLabel = hasSizes ? (size === '12' ? '12 oz.' : '16 oz.') : null

  const handleAdd = () => {
    addItem({ name: item.name, size: sizeLabel, flavor, price })
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1200)
  }

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      className="group flex flex-col justify-between rounded-2xl border border-espresso/5 bg-cream p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-espresso/10"
    >
      <div>
        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-espresso/10 text-espresso transition-colors duration-300 group-hover:bg-espresso group-hover:text-cream">
            <Icon className="h-5 w-5" />
          </span>
          <div className="flex flex-wrap items-center justify-end gap-1.5">
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                  TAG_STYLES[tag] || 'bg-espresso/10 text-espresso'
                }`}
              >
                {tag}
              </span>
            ))}
            {isLimited && (
              <span className="rounded-full bg-forest/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-forest">
                Disp. limitada
              </span>
            )}
          </div>
        </div>

        <h3 className="font-display text-xl font-bold leading-snug text-espresso">
          {item.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>

        {/* Selector de sabor */}
        {hasFlavors && (
          <div className="mt-4">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">
              Sabor
            </span>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {item.flavors.map((f) => (
                <button
                  key={f}
                  onClick={() => setFlavor(f)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    flavor === f
                      ? 'bg-forest text-cream'
                      : 'bg-espresso/5 text-espresso/70 hover:bg-espresso/10'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selector de tamaño */}
        {hasSizes && (
          <div className="mt-4">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">
              Tamaño
            </span>
            <div className="mt-1.5 inline-flex rounded-full bg-espresso/5 p-1">
              {[
                { key: '12', label: '12 oz.', price: item.oz12 },
                { key: '16', label: '16 oz.', price: item.oz16 },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => setSize(s.key)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    size === s.key
                      ? 'bg-espresso text-cream shadow-sm'
                      : 'text-espresso/60 hover:text-espresso'
                  }`}
                >
                  {s.label} · ${s.price}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Precio + botón agregar */}
      <div className="mt-5 flex items-center justify-between border-t border-espresso/10 pt-4">
        <div className="flex items-baseline gap-1 font-display text-2xl font-bold text-forest">
          <span className="font-body text-sm font-medium text-muted">$</span>
          {price}
        </div>

        <button
          onClick={handleAdd}
          aria-label={`Agregar ${item.name} al pedido`}
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 ${
            justAdded
              ? 'bg-forest text-cream focus-visible:ring-forest'
              : 'bg-espresso text-cream hover:-translate-y-0.5 hover:bg-forest hover:shadow-md focus-visible:ring-espresso'
          }`}
        >
          {justAdded ? (
            <>
              <FiCheck className="h-4 w-4" />
              Agregado
            </>
          ) : (
            <>
              <FiPlus className="h-4 w-4" />
              Agregar
            </>
          )}
        </button>
      </div>
    </motion.article>
  )
}
