import { useEffect, useState } from 'react'
import { loadMenu } from '../lib/loadMenu.js'

// Carga el menú (Google Sheets con fallback local) y expone el estado
// de carga para mostrar un skeleton mientras llega.
export function useMenu() {
  const [categories, setCategories] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true
    loadMenu().then((cats) => {
      if (!alive) return
      setCategories(cats)
      setLoading(false)
    })
    return () => {
      alive = false
    }
  }, [])

  return { categories, loading }
}
