// Carga las promociones desde Google Sheets (CSV) con validación por
// fila y fallback a src/data/promos.js. Solo devuelve las promos
// activas (la columna "activo" con "no" las oculta).

import Papa from 'papaparse'
import { PROMOS as LOCAL } from '../data/promos.js'
import { PROMOS_CSV_URL } from '../data/sheets.config.js'

function truthy(v) {
  return /^(si|sí|true|x|1|yes)$/i.test(String(v || '').trim())
}

// Oculta solo si "activo" dice explícitamente que no. Vacío = visible.
function isActive(v) {
  return !/^(no|false|0|off|oculto)$/i.test(String(v || '').trim())
}

function normalize(rows) {
  return rows
    .filter((r) => (r.titulo || '').trim() && isActive(r.activo))
    .map((r) => ({
      titulo: (r.titulo || '').trim(),
      descripcion: (r.descripcion || '').trim(),
      etiqueta: (r.etiqueta || '').trim(),
      destacado: truthy(r.destacado),
    }))
}

export async function loadPromos() {
  if (!PROMOS_CSV_URL) return normalize(LOCAL)

  try {
    const res = await fetch(PROMOS_CSV_URL, { cache: 'no-store' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const csv = await res.text()
    const { data } = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (h) => h.trim().toLowerCase(),
    })
    return normalize(data)
  } catch (e) {
    console.warn(
      '[B19] No se pudieron cargar las promos desde Google Sheets; usando datos locales. Motivo:',
      e.message,
    )
    return normalize(LOCAL)
  }
}
