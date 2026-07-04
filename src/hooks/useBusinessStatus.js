import { useHours } from '../context/HoursContext.jsx'

// Devuelve el estado abierto/cerrado en vivo (desde HoursContext,
// que a su vez lee de Google Sheets o de los datos locales).
export function useBusinessStatus() {
  return useHours().status
}
