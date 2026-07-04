// ── Lógica de horario de B19 Coffee Bar ──────────────────────
// Funciones puras: reciben el horario (config) y calculan estado y
// lista para mostrar. El config puede venir de src/data/hours.js o
// de Google Sheets (ver HoursContext). Todo se calcula en la hora
// LOCAL del café, sin importar la zona del visitante.

import { TIMEZONE } from '../data/hours.js'

// Orden de la semana (lunes → domingo) con su día JS (0=Dom).
const WEEK = [
  { key: 'lunes', label: 'Lunes', index: 1 },
  { key: 'martes', label: 'Martes', index: 2 },
  { key: 'miercoles', label: 'Miércoles', index: 3 },
  { key: 'jueves', label: 'Jueves', index: 4 },
  { key: 'viernes', label: 'Viernes', index: 5 },
  { key: 'sabado', label: 'Sábado', index: 6 },
  { key: 'domingo', label: 'Domingo', index: 0 },
]

const DAY_NAMES = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
]

// Convierte '7:30 AM' → minutos desde medianoche (450). null si es inválida.
function parseTime(str) {
  const m = String(str).trim().match(/^(\d{1,2}):(\d{2})\s*([AaPp][Mm])$/)
  if (!m) return null
  let h = parseInt(m[1], 10)
  const min = parseInt(m[2], 10)
  const isPM = m[3].toLowerCase() === 'pm'
  if (h === 12) h = isPM ? 12 : 0
  else if (isPM) h += 12
  return h * 60 + min
}

// Formatea minutos → "10:00 PM".
function formatTime(minutes) {
  let h = Math.floor(minutes / 60)
  const m = minutes % 60
  const period = h >= 12 ? 'PM' : 'AM'
  h = h % 12
  if (h === 0) h = 12
  return `${h}:${m.toString().padStart(2, '0')} ${period}`
}

// Construye el horario indexado por día JS (0=Dom ... 6=Sáb).
// null = cerrado. Ignora entradas con horas inválidas (quedan cerradas).
export function parseSchedule(hoursConfig) {
  const out = {}
  for (const { key, index } of WEEK) {
    const v = hoursConfig?.[key]
    if (!v) {
      out[index] = null
      continue
    }
    const open = parseTime(v.abre)
    const close = parseTime(v.cierra)
    out[index] = open != null && close != null ? { open, close } : null
  }
  return out
}

// Hora actual en la zona horaria del café.
function getCafeNow() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date())

  const map = {}
  for (const p of parts) map[p.type] = p.value

  const weekdays = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
  const day = weekdays[map.weekday]
  let hour = parseInt(map.hour, 10)
  if (hour === 24) hour = 0
  const minute = parseInt(map.minute, 10)

  return { day, minutes: hour * 60 + minute }
}

// Estado actual a partir de un SCHEDULE ya parseado.
export function getBusinessStatus(schedule) {
  const { day, minutes } = getCafeNow()
  const today = schedule[day]

  const isOpen = today && minutes >= today.open && minutes < today.close

  if (isOpen) {
    return {
      isOpen: true,
      label: 'Abierto ahora',
      detail: `Cierra a las ${formatTime(today.close)}`,
    }
  }

  if (today && minutes < today.open) {
    return {
      isOpen: false,
      label: 'Cerrado',
      detail: `Abre hoy a las ${formatTime(today.open)}`,
    }
  }

  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7
    const sched = schedule[nextDay]
    if (sched) {
      const when = i === 1 ? 'mañana' : DAY_NAMES[nextDay]
      return {
        isOpen: false,
        label: 'Cerrado',
        detail: `Abre ${when} a las ${formatTime(sched.open)}`,
      }
    }
  }

  return { isOpen: false, label: 'Cerrado', detail: '' }
}

// Lista de horarios para mostrar, agrupando días consecutivos iguales.
// → [{ days: 'Lunes – Sábado', hours: '7:30 AM – 10:00 PM' }, ...]
export function getGroupedHours(hoursConfig) {
  const rows = []
  let group = null

  const valueOf = (v) => (v ? `${v.abre} – ${v.cierra}` : 'Cerrado')
  const keyOf = (v) => (v ? `${v.abre}|${v.cierra}` : 'closed')

  for (const { key, label } of WEEK) {
    const v = hoursConfig?.[key] || null
    const k = keyOf(v)
    if (group && group.key === k) {
      group.endLabel = label
    } else {
      if (group) rows.push(group)
      group = { key: k, startLabel: label, endLabel: label, value: valueOf(v) }
    }
  }
  if (group) rows.push(group)

  return rows.map((g) => ({
    days: g.startLabel === g.endLabel ? g.startLabel : `${g.startLabel} – ${g.endLabel}`,
    hours: g.value,
  }))
}
