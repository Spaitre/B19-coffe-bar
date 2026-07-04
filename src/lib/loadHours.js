// Carga el horario desde Google Sheets (CSV) con validación por fila
// y fallback automático a los datos locales de src/data/hours.js.

import Papa from 'papaparse'
import { HOURS as LOCAL_HOURS } from '../data/hours.js'
import { HOURS_CSV_URL } from '../data/sheets.config.js'

// Normaliza el nombre del día (quita acentos, minúsculas) a la clave usada.
const DAY_KEYS = {
  lunes: 'lunes',
  martes: 'martes',
  miercoles: 'miercoles',
  jueves: 'jueves',
  viernes: 'viernes',
  sabado: 'sabado',
  domingo: 'domingo',
}

function normalizeDay(v) {
  const s = String(v || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
  return DAY_KEYS[s] || null
}

// ¿La celda indica "cerrado"?
function isClosed(v) {
  const s = String(v || '').trim()
  return s === '' || /cerrad/i.test(s)
}

function rowsToHours(rows) {
  const out = {}
  for (const row of rows) {
    const key = normalizeDay(row.dia)
    if (!key) continue // día no reconocido → se salta
    const abre = (row.abre || '').trim()
    const cierra = (row.cierra || '').trim()
    if (isClosed(abre) || isClosed(cierra)) {
      out[key] = null
    } else {
      out[key] = { abre, cierra }
    }
  }

  if (Object.keys(out).length === 0) {
    throw new Error('El CSV de horario no tiene filas válidas')
  }

  // Completa los días faltantes con el horario local (nunca deja huecos).
  return { ...LOCAL_HOURS, ...out }
}

export async function loadHours() {
  if (!HOURS_CSV_URL) return LOCAL_HOURS

  try {
    const res = await fetch(HOURS_CSV_URL, { cache: 'no-store' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const csv = await res.text()
    const { data } = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (h) => h.trim().toLowerCase(),
    })
    return rowsToHours(data)
  } catch (e) {
    console.warn(
      '[B19] No se pudo cargar el horario desde Google Sheets; usando datos locales. Motivo:',
      e.message,
    )
    return LOCAL_HOURS
  }
}
