import { useEffect, useState } from 'react'
import { loadPromos } from '../lib/loadPromos.js'

// Devuelve las promos activas (o null mientras cargan).
export function usePromos() {
  const [promos, setPromos] = useState(null)

  useEffect(() => {
    let alive = true
    loadPromos().then((p) => {
      if (alive) setPromos(p)
    })
    return () => {
      alive = false
    }
  }, [])

  return promos
}
