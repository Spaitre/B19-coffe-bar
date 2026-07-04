import { createContext, useContext, useMemo, useState, useCallback } from 'react'

const CartContext = createContext(null)

// Base del deep link de WhatsApp (número con lada internacional).
const WA_BASE = 'https://wa.me/526865146876?text='

// Clave única por línea del carrito (mismo producto + tamaño + sabor se agrupan).
function lineId({ name, size, flavor }) {
  return `${name}|${size || ''}|${flavor || ''}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  const addItem = useCallback((payload) => {
    const id = lineId(payload)
    setItems((prev) => {
      const existing = prev.find((it) => it.id === id)
      if (existing) {
        return prev.map((it) =>
          it.id === id ? { ...it, qty: it.qty + 1 } : it,
        )
      }
      return [...prev, { ...payload, id, qty: 1 }]
    })
  }, [])

  const inc = useCallback((id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)),
    )
  }, [])

  const dec = useCallback((id) => {
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: it.qty - 1 } : it))
        .filter((it) => it.qty > 0),
    )
  }, [])

  const remove = useCallback((id) => {
    setItems((prev) => prev.filter((it) => it.id !== id))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const count = useMemo(
    () => items.reduce((sum, it) => sum + it.qty, 0),
    [items],
  )

  const total = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.qty, 0),
    [items],
  )

  // Construye el mensaje de WhatsApp con el pedido formateado.
  const buildMessage = useCallback(() => {
    const lines = items.map((it) => {
      const parts = [it.name]
      const extras = [it.size, it.flavor].filter(Boolean).join(', ')
      const label = extras ? `${it.name} (${extras})` : it.name
      parts[0] = label
      return `• ${it.qty}x ${label} — $${it.price * it.qty}`
    })

    const message =
      `Hola B19 Coffee Bar 👋 Me gustaría ordenar:\n\n` +
      `${lines.join('\n')}\n\n` +
      `Total estimado: $${total}\n\n` +
      `¡Gracias! 🍵`

    return message
  }, [items, total])

  const whatsappUrl = useMemo(
    () => WA_BASE + encodeURIComponent(buildMessage()),
    [buildMessage],
  )

  const value = {
    items,
    open,
    setOpen,
    addItem,
    inc,
    dec,
    remove,
    clear,
    count,
    total,
    buildMessage,
    whatsappUrl,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
