import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { HOURS as LOCAL_HOURS } from '../data/hours.js'
import { loadHours } from '../lib/loadHours.js'
import {
  parseSchedule,
  getBusinessStatus,
  getGroupedHours,
} from '../lib/hours.js'

const HoursContext = createContext(null)

export function HoursProvider({ children }) {
  // Arranca con el horario local; si hay Google Sheets, se reemplaza.
  const [config, setConfig] = useState(LOCAL_HOURS)
  // "tick" fuerza recalcular el estado abierto/cerrado cada minuto.
  const [, setTick] = useState(0)

  useEffect(() => {
    let alive = true
    loadHours().then((h) => {
      if (alive) setConfig(h)
    })
    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 60 * 1000)
    return () => clearInterval(id)
  }, [])

  const schedule = useMemo(() => parseSchedule(config), [config])
  // Nota: se recalcula en cada render (incluye el tick del minuto).
  const status = getBusinessStatus(schedule)
  const groupedHours = useMemo(() => getGroupedHours(config), [config])

  const value = { status, groupedHours }
  return <HoursContext.Provider value={value}>{children}</HoursContext.Provider>
}

export function useHours() {
  const ctx = useContext(HoursContext)
  if (!ctx) throw new Error('useHours debe usarse dentro de <HoursProvider>')
  return ctx
}
