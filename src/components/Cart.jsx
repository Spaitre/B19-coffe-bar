import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiShoppingBag, FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { items, count, total, open, setOpen, inc, dec, remove, clear, whatsappUrl } =
    useCart()

  return (
    <>
      {/* Barra fija inferior — aparece cuando hay productos */}
      <AnimatePresence>
        {count > 0 && !open && (
          <motion.button
            onClick={() => setOpen(true)}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 340, damping: 30 }}
            className="fixed inset-x-0 bottom-0 z-40 mx-auto flex w-full max-w-md items-center justify-between gap-4 rounded-t-2xl bg-espresso px-5 py-4 text-cream shadow-2xl shadow-black/40 transition-colors hover:bg-espresso/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream sm:bottom-4 sm:rounded-2xl"
          >
            <span className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-cream/15">
                <FiShoppingBag className="h-5 w-5" />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#25D366] px-1 text-xs font-bold text-white">
                  {count}
                </span>
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold">Ver mi pedido</span>
                <span className="block text-xs text-cream/70">
                  {count} {count === 1 ? 'producto' : 'productos'}
                </span>
              </span>
            </span>
            <span className="font-display text-xl font-bold">${total}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Drawer del pedido */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-md flex-col bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-espresso/10 bg-cream px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <FiShoppingBag className="h-5 w-5 text-espresso" />
                  <h3 className="font-display text-lg font-bold text-espresso">
                    Tu pedido
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar pedido"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-espresso transition-colors hover:bg-espresso/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              {/* Lista de productos */}
              <div className="flex-1 overflow-y-auto px-5 py-4">
                {items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center text-muted">
                    <FiShoppingBag className="h-12 w-12 opacity-30" />
                    <p className="mt-4 text-sm">Aún no has agregado nada.</p>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {items.map((it) => (
                      <li
                        key={it.id}
                        className="flex items-start gap-3 rounded-xl border border-espresso/10 bg-offwhite p-3"
                      >
                        <div className="flex-1">
                          <p className="font-semibold leading-snug text-espresso">
                            {it.name}
                          </p>
                          {(it.size || it.flavor) && (
                            <p className="mt-0.5 text-xs text-muted">
                              {[it.size, it.flavor].filter(Boolean).join(' · ')}
                            </p>
                          )}
                          <p className="mt-1 text-sm font-semibold text-forest">
                            ${it.price * it.qty}
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => remove(it.id)}
                            aria-label={`Quitar ${it.name}`}
                            className="text-muted transition-colors hover:text-red-500 focus:outline-none"
                          >
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                          <div className="flex items-center gap-2 rounded-full bg-white p-1 shadow-sm ring-1 ring-espresso/10">
                            <button
                              onClick={() => dec(it.id)}
                              aria-label="Quitar uno"
                              className="flex h-7 w-7 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/10 focus:outline-none"
                            >
                              <FiMinus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-5 text-center text-sm font-bold text-espresso">
                              {it.qty}
                            </span>
                            <button
                              onClick={() => inc(it.id)}
                              aria-label="Agregar uno"
                              className="flex h-7 w-7 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/10 focus:outline-none"
                            >
                              <FiPlus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer con total y CTA */}
              {items.length > 0 && (
                <div className="border-t border-espresso/10 bg-white px-5 py-4">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-muted">Total estimado</span>
                    <span className="font-display text-2xl font-bold text-espresso">
                      ${total}
                    </span>
                  </div>
                  <p className="mb-3 text-xs text-muted">
                    El total puede variar según extras. Confirmamos tu pedido por
                    WhatsApp.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 active:translate-y-0"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    Enviar pedido por WhatsApp
                  </a>
                  <button
                    onClick={clear}
                    className="mt-2 w-full py-2 text-center text-xs font-medium text-muted underline-offset-4 transition-colors hover:text-red-500 hover:underline focus:outline-none"
                  >
                    Vaciar pedido
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
