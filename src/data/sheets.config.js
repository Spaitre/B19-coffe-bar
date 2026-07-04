// ════════════════════════════════════════════════════════════
//  CONEXIÓN CON GOOGLE SHEETS (opcional)
//
//  El sitio funciona SIEMPRE con los datos locales de:
//    · src/data/menu.js
//    · src/data/hours.js
//  Si además pones aquí la URL de una hoja de Google publicada
//  como CSV, el sitio leerá el menú / horario desde ahí y el dueño
//  podrá editarlos sin tocar código. Si la hoja falla o está vacía,
//  automáticamente se usan los datos locales (nunca se rompe).
//
//  ── CÓMO OBTENER LA URL ──────────────────────────────────────
//  1. En Google Sheets: Archivo → Compartir → Publicar en la web.
//  2. Elige la pestaña ("Menu" u "Horario") y el formato "CSV".
//  3. Publicar → copia la URL (termina en ...output=csv).
//  4. Pégala abajo reemplazando la URL de ejemplo.
//
//  Para DESACTIVAR Google Sheets y usar solo los datos locales,
//  deja la cadena vacía:   export const MENU_CSV_URL = ''
//
//  NOTA: Las URLs de ejemplo apuntan a archivos CSV incluidos en
//  /public para que la función se vea funcionando desde el primer
//  momento. Reemplázalas por tus URLs reales de Google Sheets.
// ════════════════════════════════════════════════════════════

// Pestaña "Menu"  → columnas: categoria, nombre, descripcion, oz12, oz16, single, sabores, tags, limitado
export const MENU_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNT45l9NiXlq6odAYKK8VzP3ki8eGdCMKtRUmFlA1g4oAtETollZyzcq3WmFUbEVEkAqcdmul8EJyu/pub?gid=1425883594&single=true&output=csv'

// Pestaña "Horario" → columnas: dia, abre, cierra
export const HOURS_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNT45l9NiXlq6odAYKK8VzP3ki8eGdCMKtRUmFlA1g4oAtETollZyzcq3WmFUbEVEkAqcdmul8EJyu/pub?gid=1265088620&single=true&output=csv'

// Pestaña "Promos" → columnas: titulo, descripcion, etiqueta, destacado, activo
// (Opcional) Deja '' para usar las promos locales de src/data/promos.js.
// Para conectarla: crea una pestaña "Promos" en tu Google Sheet, publícala
// como CSV y pega aquí la URL.
export const PROMOS_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNT45l9NiXlq6odAYKK8VzP3ki8eGdCMKtRUmFlA1g4oAtETollZyzcq3WmFUbEVEkAqcdmul8EJyu/pub?gid=1897441764&single=true&output=csv'
