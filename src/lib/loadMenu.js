// Carga el menú desde Google Sheets (CSV) con validación por fila
// y fallback automático a los datos locales de src/data/menu.js.

import Papa from 'papaparse'
import { CATEGORIES as LOCAL } from '../data/menu.js'
import { MENU_CSV_URL } from '../data/sheets.config.js'

// Metadatos por categoría (ícono, nota, orden) — se toman del archivo
// local porque los íconos son componentes que no viven en una hoja.
const META_BY_LABEL = Object.fromEntries(
  LOCAL.map((c) => [
    c.label,
    { id: c.id, icon: c.icon, note: c.note, limited: c.limited },
  ]),
)
const FALLBACK_ICON = LOCAL[0].icon

// Helpers de parseo tolerantes a celdas vacías / con espacios.
function num(v) {
  if (v == null) return null
  const s = String(v).replace(/[^0-9.]/g, '').trim()
  if (s === '') return null
  const n = Number(s)
  return Number.isFinite(n) ? n : null
}

function splitList(v) {
  if (!v) return []
  return String(v)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function truthy(v) {
  return /^(si|sí|true|x|1|yes)$/i.test(String(v || '').trim())
}

function slug(str) {
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Convierte una fila del CSV en un producto válido, o null si es inválida.
function toItem(row) {
  const name = (row.nombre || '').trim()
  if (!name) return null

  const single = num(row.single)
  const oz12 = num(row.oz12)
  const oz16 = num(row.oz16)
  const hasSizes = oz12 != null && oz16 != null

  // Debe tener precio único O dos tamaños; si no, se descarta.
  if (single == null && !hasSizes) return null

  const item = { name, desc: (row.descripcion || '').trim() }
  if (hasSizes) {
    item.oz12 = oz12
    item.oz16 = oz16
  } else {
    item.single = single
  }

  const flavors = splitList(row.sabores)
  if (flavors.length) item.flavors = flavors

  const tags = splitList(row.tags)
  if (tags.length) item.tags = tags

  if (truthy(row.limitado)) item.limited = true

  return item
}

// Agrupa filas en categorías, respetando el orden de aparición.
function rowsToCategories(rows) {
  const order = []
  const byLabel = new Map()

  for (const row of rows) {
    const label = (row.categoria || '').trim()
    const item = toItem(row)
    if (!label || !item) continue // fila inválida → se salta
    if (!byLabel.has(label)) {
      order.push(label)
      byLabel.set(label, [])
    }
    byLabel.get(label).push(item)
  }

  if (order.length === 0) {
    throw new Error('El CSV del menú no tiene filas válidas')
  }

  return order.map((label, i) => {
    const meta = META_BY_LABEL[label] || {}
    return {
      id: meta.id || slug(label) || `cat-${i}`,
      label,
      icon: meta.icon || FALLBACK_ICON,
      note: meta.note,
      limited: meta.limited,
      items: byLabel.get(label),
    }
  })
}

export async function loadMenu() {
  // Sin URL configurada → usa los datos locales directamente.
  if (!MENU_CSV_URL) return LOCAL

  try {
    const res = await fetch(MENU_CSV_URL, { cache: 'no-store' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const csv = await res.text()
    const { data, errors } = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (h) => h.trim().toLowerCase(),
    })
    if (errors.length) {
      console.warn('[B19] Avisos al leer el CSV del menú:', errors.slice(0, 3))
    }
    return rowsToCategories(data)
  } catch (e) {
    console.warn(
      '[B19] No se pudo cargar el menú desde Google Sheets; usando datos locales. Motivo:',
      e.message,
    )
    return LOCAL
  }
}
