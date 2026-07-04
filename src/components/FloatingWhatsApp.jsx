import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP } from '../constants.js'
import { useCart } from '../context/CartContext.jsx'

export default function FloatingWhatsApp() {
  const { count, open } = useCart()
  const [visible, setVisible] = useState(false)

  // Aparece después de bajar un poco (no molesta en el hero).
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Se oculta cuando el drawer del pedido está abierto.
  const show = visible && !open

  // Sube su posición cuando la barra del carrito está visible.
  const raised = count > 0

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escríbenos por WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 24 }}
          className={`group fixed right-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-white shadow-xl shadow-[#25D366]/30 transition-[bottom,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:right-6 ${
            raised ? 'bottom-24 sm:bottom-24' : 'bottom-5 sm:bottom-6'
          }`}
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
          <FaWhatsapp className="relative h-6 w-6" />
          <span className="relative hidden text-sm font-semibold sm:inline">
            WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
